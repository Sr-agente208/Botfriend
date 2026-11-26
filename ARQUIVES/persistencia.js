#!/usr/bin/env node
/**
 * persistencia.js — backup/restore de "DADOS DO KEISEN" entre deploys.
 *
 * Provedores (na ordem testada):
 *   1. Supabase Storage  -> SUPABASE_URL + SUPABASE_KEY (+ SUPABASE_BUCKET)
 *   2. GitHub Contents   -> GH_BACKUP_TOKEN + GH_BACKUP_REPO (+ GH_BACKUP_BRANCH, padrão bot-backup)
 *
 * Segurança: o pacote é cifrado com AES-256-CBC (PBKDF2, 100k iterações) usando
 * BACKUP_PASS antes de subir. SEM BACKUP_PASS nenhum backup é enviado.
 * Caches recriáveis (data/media, INFO_KEISEN/LOGOS) ficam de fora.
 *
 * Uso: node persistencia.js restore|backup|loop
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const REPO_DIR = process.cwd();
const DADOS = path.join(REPO_DIR, 'DADOS DO KEISEN');
const TMP = fs.mkdtempSync(path.join(os_tmp(), 'persist-'));
const PKG = path.join(TMP, 'dados.tar.gz');
const PKG_ENC = PKG + '.enc';
const HASH_FILE = path.join(TMP, 'hash');
const INTERVALO = (parseInt(process.env.BACKUP_INTERVAL, 10) || 300) * 1000;

function os_tmp() { return '/tmp'; }

const SUPA = !!(process.env.SUPABASE_URL && process.env.SUPABASE_KEY);
const GH = !!(process.env.GH_BACKUP_TOKEN && process.env.GH_BACKUP_REPO);
const PASS = process.env.BACKUP_PASS;

const GH_REPO = (process.env.GH_BACKUP_REPO || '').replace(/^.*github.com\//, '').replace(/\.git$/, '');
const GH_BRANCH = process.env.GH_BACKUP_BRANCH || 'bot-backup';
const GH_PATH = process.env.GH_BACKUP_PATH || 'backups/dados.tar.gz.enc';
const GH_API = 'https://api.github.com';

const log = (m) => console.log('[persistência] ' + m);
const temBackupCfg = () => (SUPA || GH) && PASS;

function gerarPacote() {
  if (!fs.existsSync(DADOS)) return false;
  execSync(
    `tar -czf "${PKG}" --exclude="./DADOS DO KEISEN/data/media" --exclude="./DADOS DO KEISEN/INFO_KEISEN/LOGOS" -C "${REPO_DIR}" "DADOS DO KEISEN"`,
    { stdio: 'ignore' }
  );
  return fs.existsSync(PKG);
}

function cifrar() {
  const key = crypto.pbkdf2Sync(PASS, 'botfriend-salt', 100000, 32, 'sha256');
  const iv = crypto.randomBytes(16);
  const c = crypto.createCipheriv('aes-256-cbc', key, iv);
  const dados = Buffer.concat([c.update(fs.readFileSync(PKG)), c.final()]);
  fs.writeFileSync(PKG_ENC, Buffer.concat([iv, dados]));
}

function decifrar() {
  const key = crypto.pbkdf2Sync(PASS, 'botfriend-salt', 100000, 32, 'sha256');
  const blob = fs.readFileSync(PKG_ENC);
  const iv = blob.subarray(0, 16);
  const d = crypto.createDecipheriv('aes-256-cbc', key, iv);
  fs.writeFileSync(PKG, Buffer.concat([d.update(blob.subarray(16)), d.final()]));
}

function hashAtual() {
  try { return crypto.createHash('md5').update(fs.readFileSync(PKG)).digest('hex'); }
  catch { return null; }
}

// ---------------- SUPABASE ----------------
async function supaUpload() {
  const url = `${process.env.SUPABASE_URL}/storage/v1/object/${process.env.SUPABASE_BUCKET || 'botfriend-backup'}/dados.tar.gz.enc`;
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.SUPABASE_KEY}`, 'x-upsert': 'true', 'Content-Type': 'application/octet-stream' },
    body: fs.readFileSync(PKG_ENC)
  });
  if (!r.ok) throw new Error('supabase upload ' + r.status);
}
async function supaDownload() {
  const url = `${process.env.SUPABASE_URL}/storage/v1/object/${process.env.SUPABASE_BUCKET || 'botfriend-backup'}/dados.tar.gz.enc`;
  const r = await fetch(url, { headers: { Authorization: `Bearer ${process.env.SUPABASE_KEY}` } });
  if (!r.ok) throw new Error('supabase download ' + r.status);
  fs.writeFileSync(PKG_ENC, Buffer.from(await r.arrayBuffer()));
}

// ---------------- GITHUB ----------------
const ghReq = async (url, opts = {}) => {
  const r = await fetch(url.startsWith('http') ? url : GH_API + url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${process.env.GH_BACKUP_TOKEN}`,
      Accept: 'application/vnd.github.raw',
      'User-Agent': 'botfriend-persist',
      ...(opts.headers || {})
    }
  });
  return r;
};

async function ghGarantirBranch() {
  const r = await ghReq(`/repos/${GH_REPO}/git/ref/heads/${GH_BRANCH}`);
  if (r.ok) return;
  const repo = await (await ghReq(`/repos/${GH_REPO}`)).json();
  const base = repo.default_branch || 'main';
  const refBase = await (await ghReq(`/repos/${GH_REPO}/git/ref/heads/${base}`)).json();
  const cria = await ghReq(`/repos/${GH_REPO}/git/refs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ref: `refs/heads/${GH_BRANCH}`, sha: refBase.object.sha })
  });
  if (!cria.ok && !(await ghReq(`/repos/${GH_REPO}/git/ref/heads/${GH_BRANCH}`)).ok) {
    throw new Error('github: nao consegui criar a branch ' + GH_BRANCH);
  }
  log('github: branch ' + GH_BRANCH + ' criada');
}

async function ghUpload() {
  await ghGarantirBranch();
  const head = await ghReq(`/repos/${GH_REPO}/contents/${GH_PATH}?ref=${GH_BRANCH}`);
  let sha;
  if (head.ok) { try { sha = (await head.json()).sha; } catch {} }
  const payload = {
    message: 'backup automático ' + new Date().toISOString(),
    branch: GH_BRANCH,
    content: fs.readFileSync(PKG_ENC).toString('base64'),
    ...(sha ? { sha } : {})
  };
  const r = await ghReq(`/repos/${GH_REPO}/contents/${GH_PATH}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!r.ok) throw new Error('github upload ' + r.status + ': ' + (await r.text()).slice(0, 200));
}

async function ghDownload() {
  const r = await ghReq(`/repos/${GH_REPO}/contents/${GH_PATH}?ref=${GH_BRANCH}`);
  if (!r.ok) throw new Error('github download ' + r.status);
  fs.writeFileSync(PKG_ENC, Buffer.from(await r.arrayBuffer()));
}

// ---------------- AÇÕES ----------------
async function enviar(forcar = false) {
  if (!temBackupCfg()) return;
  if (!gerarPacote()) return;
  const h = hashAtual();
  let anterior = null;
  try { anterior = fs.readFileSync(HASH_FILE, 'utf8').trim(); } catch {}
  if (!forcar && h && h === anterior) return;
  try {
    cifrar();
    if (SUPA) await supaUpload();
    else if (GH) await ghUpload();
    try { fs.writeFileSync(HASH_FILE, h); } catch {}
    log('backup salvo ✔ (' + (fs.statSync(PKG_ENC).size / 1024).toFixed(0) + ' KB cifrados)');
  } catch (e) {
    log('falha no backup: ' + e.message);
  }
}

async function restaurar() {
  if (!temBackupCfg()) return false;
  try {
    if (SUPA) await supaDownload();
    else if (GH) await ghDownload();
    decifrar();
    execSync(`tar -xzf "${PKG}" -C "${REPO_DIR}"`, { stdio: 'ignore' });
    log('restaurado do backup ✔ (sessão preservada, sem QR)');
    return true;
  } catch (e) {
    log('sem backup pra restaurar (' + e.message + ') — na primeira vez é normal, escaneie o QR');
    return false;
  }
}

async function main() {
  const cmd = process.argv[2];
  if (cmd === 'restore') return restaurar();
  if (cmd === 'backup') return enviar(true);
  if (cmd === 'loop') {
    await enviar();
    setInterval(() => enviar().catch(e => log('erro: ' + e.message)), INTERVALO);
    setInterval(() => {}, 1 << 30); // mantém o processo vivo
    return;
  }
  log('uso: persistencia.js restore|backup|loop');
}

main().catch(e => { log('erro: ' + e.message); });
