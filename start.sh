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
tem_supabase() { [ -n "$SUPABASE_URL" ] && [ -n "$SUPABASE_KEY" ] && command -v curl >/dev/null 2>&1; }
BUCKET="${SUPABASE_BUCKET:-botfriend-backup}"
STG_URL="$SUPABASE_URL/storage/v1/object/$BUCKET/dados.tar.gz"

fazer_backup() {
  tem_supabase || return 0
  [ -d "$DADOS_SRC" ] || return 0
  tar -czf "$BACKUP_FILE" --exclude="$DADOS_SRC/data/media" --exclude="$DADOS_SRC/INFO_KEISEN/LOGOS" -C "$(pwd)" "DADOS DO KEISEN" 2>/dev/null || return 0
  NOVO_HASH=$(md5sum "$BACKUP_FILE" | cut -d' ' -f1)
  [ "$NOVO_HASH" = "$(cat "$HASH_FILE" 2>/dev/null)" ] && return 0
  if curl -fsSL -X POST "$STG_URL" -H "Authorization: Bearer $SUPABASE_KEY" -H "x-upsert: true" -H "Content-Type: application/octet-stream" --data-binary @"$BACKUP_FILE" >/dev/null 2>&1; then
    echo "$NOVO_HASH" > "$HASH_FILE"
    echo "[backup] sessão/dados salvos no Supabase ✔"
  else
    echo "[backup] falha ao enviar backup (verifique SUPABASE_URL/KEY/bucket)"
  fi
}

restaurar_backup() {
  tem_supabase || return 0
  if curl -fsSL "$STG_URL" -H "Authorization: Bearer $SUPABASE_KEY" -o "$BACKUP_FILE" 2>/dev/null; then
    tar -xzf "$BACKUP_FILE" -C "$(pwd)" 2>/dev/null && echo "[backup] sessão/dados restaurados do Supabase ✔ (QR não será pedido)"
  fi
}

UPLOADER_PID=""
NODE_PID=""

encerrar() {
  trap - TERM INT
  [ -n "$NODE_PID" ] && kill "$NODE_PID" 2>/dev/null
  [ -n "$UPLOADER_PID" ] && kill "$UPLOADER_PID" 2>/dev/null
  fazer_backup
  exit 0
}

if tem_supabase && [ ! -L "$DADOS_SRC" ]; then
  restaurar_backup
  trap encerrar TERM INT
  ( while : ; do sleep "$INTERVALO"; fazer_backup; done ) & UPLOADER_PID=$!
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
sleep 1
done
