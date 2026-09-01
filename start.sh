#!/bin/bash
# ============ PERSISTÊNCIA ENTRE DEPLOYS (Railway Volume) ============
# Se existir um volume montado em PERSIST_DIR (padrão: /data), o bot passa a
# gravar toda a pasta "DADOS DO KEISEN" (sessão do WhatsApp, configs, níveis,
# contadores...) no volume. Assim, ao atualizar/redeployar, o bot NÃO pede QR
# de novo e não perde dados.
PERSIST="${PERSIST_DIR:-/data}"
DADOS_DST="$PERSIST/DADOS DO KEISEN"
DADOS_SRC="$(pwd)/DADOS DO KEISEN"

if [ -d "$PERSIST" ] || mkdir -p "$PERSIST" 2>/dev/null; then
  if [ ! -d "$DADOS_DST" ] && [ -d "$DADOS_SRC" ]; then
    # primeira vez com volume: copia o estado padrao do repo para o volume
    mkdir -p "$(dirname "$DADOS_DST")"
    cp -a "$DADOS_SRC" "$DADOS_DST" 2>/dev/null
  fi
  if [ -d "$DADOS_DST" ] && [ ! -L "$DADOS_SRC" ]; then
    rm -rf "$DADOS_SRC"
    ln -s "$DADOS_DST" "$DADOS_SRC"
  fi
fi
# =====================================================================

while : ; do
printf "    \033[1;33mKeisen BOT FAST 🌪️\n INICIANDO, AGUARDE UM MOMENTO...✨\n\033[0m"
if [ "$1" = "sim" ]; then
node ./ARQUIVES/connect.js sim
elif [ "$1" = "não" ]; then
node ./ARQUIVES/connect.js não
else
node ./ARQUIVES/connect.js
fi
sleep 1
done
