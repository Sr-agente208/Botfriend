#!/bin/bash
# ==================== PERSISTÊNCIA ENTRE DEPLOYS ====================
# Prioridade 1: Railway Volume montado em PERSIST_DIR (pago).
# Prioridade 2 (grátis): backup/restore da pasta "DADOS DO KEISEN" no
#   Supabase Storage via variáveis SUPABASE_URL + SUPABASE_KEY (+ opcional
#   SUPABASE_BUCKET, padrão "botfriend-backup"). A sessão do WhatsApp,
#   níveis, contadores e configs sobrevivem a deploys/reinícios.
#   Exclui do backup apenas caches recriáveis (data/media, LOGOS).
# ====================================================================
DADOS_SRC="$(pwd)/DADOS DO KEISEN"
BACKUP_FILE="/tmp/dados-backup.tar.gz"
HASH_FILE="/tmp/dados-backup.md5"
INTERVALO="${BACKUP_INTERVAL:-300}"

# ---------- Prioridade 1: Volume ----------
PERSIST="${PERSIST_DIR:-/data}"
DADOS_DST="$PERSIST/DADOS DO KEISEN"
if [ -d "$PERSIST" ] || mkdir -p "$PERSIST" 2>/dev/null; then
  if [ ! -d "$DADOS_DST" ] && [ -d "$DADOS_SRC" ] && [ ! -L "$DADOS_SRC" ]; then
    mkdir -p "$(dirname "$DADOS_DST")"
    cp -a "$DADOS_SRC" "$DADOS_DST" 2>/dev/null
  fi
  if [ -d "$DADOS_DST" ] && [ ! -L "$DADOS_SRC" ]; then
    rm -rf "$DADOS_SRC"
    ln -s "$DADOS_DST" "$DADOS_SRC"
  fi
fi

# ---------- Prioridade 2: backup no Supabase (grátis) ----------
# (gerenciado por ARQUIVES/persistencia.js — Supabase OU GitHub, cifrado com BACKUP_PASS)
UPLOADER_PID=""
NODE_PID=""

if [ ! -L "$DADOS_SRC" ] && command -v node >/dev/null 2>&1; then
  node ./ARQUIVES/persistencia.js restore
  trap 'kill $UPLOADER_PID $NODE_PID 2>/dev/null; node ./ARQUIVES/persistencia.js backup; exit 0' TERM INT
  node ./ARQUIVES/persistencia.js loop & UPLOADER_PID=$!
fi

# ==================== INICIALIZAÇÃO ====================
while : ; do
printf "    \033[1;33mKeisen BOT FAST 🌪️\n INICIANDO, AGUARDE UM MOMENTO...✨\n\033[0m"
if [ "$1" = "sim" ]; then
node ./ARQUIVES/connect.js sim &
elif [ "$1" = "não" ]; then
node ./ARQUIVES/connect.js não &
else
node ./ARQUIVES/connect.js &
fi
NODE_PID=$!
wait $NODE_PID
# node caiu (crash): salva backup antes de reiniciar (antiflood: no máx 1 por minuto)
AGORA=$(date +%s)
ULTIMA=$(cat /tmp/.ultima_backup 2>/dev/null || echo 0)
if [ $((AGORA - ULTIMA)) -ge 60 ]; then
  node ./ARQUIVES/persistencia.js backup 2>/dev/null || true
  echo $AGORA > /tmp/.ultima_backup
fi
sleep 1
done
