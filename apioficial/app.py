"""Botfriend Oficial — bot de WhatsApp usando a Cloud API da Meta.

Endereço do webhook: https://<seu-host>/webhook
Variáveis necessárias (Railway/ambiente):
  ACCESS_TOKEN, PHONE_NUMBER_ID, VERIFY_TOKEN  (obrigatórias)
  APP_SECRET, GRAPH_VERSION, GRAPH_BASE, PORT  (opcionais)

Documentação: https://developers.facebook.com/documentation/business-messaging/whatsapp/overview
"""
import hashlib
import hmac
import logging
import os
from collections import OrderedDict

from flask import Flask, request, jsonify

import comandos
import sender

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("botfriend-oficial")

app = Flask(__name__)

VERIFY_TOKEN = os.environ.get("VERIFY_TOKEN", "botfriend-troca-isso")
APP_SECRET = os.environ.get("APP_SECRET", "")

# dedupe: a Meta reenvia webhooks se não respondermos rápido; ignora IDs já vistos
VISTOS_MAX = 5000
vistos = OrderedDict()


def ja_visto(message_id):
    if message_id in vistos:
        return True
    vistos[message_id] = True
    if len(vistos) > VISTOS_MAX:
        vistos.popitem(last=False)
    return False


def assinatura_valida(corpo_bruto, header_sig):
    if not APP_SECRET:
        return True  # sem APP_SECRET configurado, pula a checagem (modo teste)
    if not header_sig or not header_sig.startswith("sha256="):
        return False
    esperado = hmac.new(APP_SECRET.encode(), corpo_bruto, hashlib.sha256).hexdigest()
    return hmac.compare_digest(esperado, header_sig[7:])


@app.get("/webhook")
def verificar_webhook():
    """Handshake da Meta: ecoar hub.challenge se o verify_token bater."""
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge", "")
    if mode == "subscribe" and token == VERIFY_TOKEN:
        log.info("webhook verificado pela Meta ✔")
        return challenge, 200
    log.warning("tentativa de verificação com token inválido")
    return "Forbidden", 403


@app.get("/")
def home():
    return jsonify(servico="botfriend-oficial", status="ok", webhook="/webhook")


@app.post("/webhook")
def receber():
    corpo = request.get_data()
    if not assinatura_valida(corpo, request.headers.get("X-Hub-Signature-256")):
        return "Forbidden", 403

    data = request.get_json(silent=True) or {}
    if data.get("object") != "whatsapp_business_account":
        return "ok", 200  # sempre 200: a Meta desativa webhooks que erram

    for entry in data.get("entry", []):
        for change in entry.get("changes", []):
            value = change.get("value", {})
            for msg in value.get("messages", []):
                try:
                    processar(msg)
                except Exception:
                    log.exception("erro processando mensagem")

    # statuses (sent/delivered/read) e erros são ignorados
    return "ok", 200


def processar(msg):
    mid = msg.get("id", "")
    de = msg.get("from", "")
    tipo = msg.get("type", "")
    if not mid or not de:
        return
    if ja_visto(mid):
        log.info("mensagem duplicada ignorada: %s", mid)
        return

    sender.marcar_lido(mid)

    if tipo == "text":
        texto = msg.get("text", {}).get("body", "")
        nome = ""
        nome = msg.get("profile", {}).get("name") or msg.get("context", {}).get("from") or ""
        resposta = comandos.responder(texto, nome)
    elif tipo in ("image", "sticker", "audio", "video", "document", "location", "contacts"):
        resposta = comandos.responder(None)
    elif tipo == "reaction":
        return  # reação não precisa de resposta
    elif tipo == "button" or tipo == "interactive":
        resposta = comandos.responder(str(msg.get("button", {}).get("text", "")) or None)
    else:
        resposta = comandos.responder(None)

    if resposta:
        sender.enviar_texto(de, resposta)
        log.info("respondi %s (%s)", de, mid)


@app.errorhandler(Exception)
def erro_geral(e):
    log.exception("erro não tratado: %s", e)
    return "ok", 200  # nunca derrubar o webhook


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    log.info("botfriend-oficial rodando na porta %s", port)
    app.run(host="0.0.0.0", port=port)
