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

app = Flask(__name__, static_folder="media", static_url_path="/media")

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
                    processar(msg, value)
                except Exception:
                    log.exception("erro processando mensagem")

    # statuses (sent/delivered/read) e erros são ignorados
    return "ok", 200


def processar(msg, value=None):
    mid = msg.get("id", "")
    grupo = msg.get("group_id", "")  # presente em mensagens de grupo (Groups API)
    de = msg.get("from", "") or msg.get("from_user_id", "")
    tipo = msg.get("type", "")
    if not mid or not de:
        return
    if ja_visto(mid):
        log.info("mensagem duplicada ignorada: %s", mid)
        return

    sender.marcar_lido(mid)

    if tipo == "text":
        texto = msg.get("text", {}).get("body", "")
        nome = msg.get("profile", {}).get("name") or ""
        if not nome and value:
            for c in value.get("contacts", []):
                if c.get("wa_id") == msg.get("from", ""):
                    nome = c.get("profile", {}).get("name", "")
                    break
        resposta = comandos.responder(texto, nome, de=de, grupo=grupo)
    elif tipo in ("image", "sticker", "audio", "video", "document", "location", "contacts"):
        if grupo:
            return  # em grupo, mídia não gera resposta (evita spam)
        resposta = comandos.responder(None)
    elif tipo == "reaction":
        return  # reação não precisa de resposta
    elif tipo == "button" or tipo == "interactive":
        resposta = comandos.responder(str(msg.get("button", {}).get("text", "")) or None)
    else:
        resposta = comandos.responder(None)

    if resposta:
        chat = grupo or de
        media = comandos.MEDIA_ENVIAR.pop(chat, None)
        if media:
            url = media.get("url") or request.url_root.rstrip("/") + "/media/" + media["arquivo"]
            legenda_curta = resposta if len(resposta) <= 1000 else resposta.split("\n\n")[0][:1000]
            try:
                if media.get("tipo") == "image":
                    sender.enviar_imagem(chat, url, legenda_curta, grupo=bool(grupo))
                else:
                    sender.enviar_video(chat, url, legenda_curta, grupo=bool(grupo))
                log.info("respondi com mídia %s (%s)", chat, mid)
                if len(resposta) > 1000:
                    sender.enviar_texto(chat, resposta)  # texto completo vai na sequência
                return
            except Exception:
                log.exception("mídia falhou (%s), cai pro texto", url[-30:])
        if grupo:
            sender.enviar_grupo(grupo, resposta)
        else:
            sender.enviar_texto(de, resposta)
        log.info("respondi %s (%s)", chat, mid)


@app.get("/diag")
def diag():
    """Diagnóstico somente-leitura: o que o token alcança na Graph API."""
    import requests as rq
    out = {
        "phone_number_id": sender.PHONE_ID or "(vazio)",
        "token": (sender.TOKEN[:8] + "..." + sender.TOKEN[-4:]) if sender.TOKEN else "(vazio)",
    }
    chamadas = {
        "quem_sou": "/me?fields=id,name",
        "numero_alvo": f"/{sender.PHONE_ID}?fields=id,display_phone_number,verified_name,name_status,account_mode,quality_rating,code_verification_status",
        "numero_teste": "/1433535196514963?fields=id,display_phone_number,verified_name,name_status,account_mode",
        "wabas_do_negocio_real": "/1232931539690191/owned_whatsapp_business_accounts?fields=id,name,account_review_status",
        "numeros_waba_galo_branco": "/1453154753613404/phone_numbers?fields=id,display_phone_number,verified_name",
        "numeros_waba_teste": "/1164994059250290/phone_numbers?fields=id,display_phone_number,verified_name",
        "negocios_do_token": "/me/businesses?fields=id,name",
    }
    for nome, caminho in chamadas.items():
        try:
            r = rq.get(sender.BASE + caminho, headers=sender._headers(), timeout=20)
            try:
                out[nome] = r.json()
            except Exception:
                out[nome] = {"status": r.status_code, "corpo": r.text[:300]}
        except Exception as e:
            out[nome] = {"erro": str(e)}
    return jsonify(out)


@app.errorhandler(Exception)
def erro_geral(e):
    from werkzeug.exceptions import NotFound
    if isinstance(e, NotFound):
        return "not found", 404  # favicon/sondas: não encher o log de traceback
    log.exception("erro não tratado: %s", e)
    return "ok", 200  # nunca derrubar o webhook


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    log.info("botfriend-oficial rodando na porta %s", port)
    app.run(host="0.0.0.0", port=port)
