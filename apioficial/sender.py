"""sender.py — camada que fala com a WhatsApp Cloud API (Graph API).

Config por variáveis de ambiente:
  ACCESS_TOKEN     token (permanente) com permissão whatsapp_business_messaging
  PHONE_NUMBER_ID  ID do número de negócio (API Setup no painel da Meta)
  GRAPH_VERSION    versão da API (padrão v23.0)
  GRAPH_BASE       sobrescreve a base (útil p/ testes com mock)
"""
import logging
import os
import requests

log = logging.getLogger("botfriend-oficial")

TOKEN = os.environ.get("ACCESS_TOKEN", "")
PHONE_ID = os.environ.get("PHONE_NUMBER_ID", "")
VERSION = os.environ.get("GRAPH_VERSION", "v23.0")
BASE = os.environ.get("GRAPH_BASE", f"https://graph.facebook.com/{VERSION}")


def _url():
    return f"{BASE}/{PHONE_ID}/messages"


def _headers():
    return {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}


def enviar_texto(to, texto):
    """Envia mensagem de texto simples."""
    payload = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": to,
        "type": "text",
        "text": {"body": texto[:4096]},  # limite da API
    }
    return _post(payload)


def marcar_lido(message_id):
    """Marca a mensagem como lida (bolinha azul). Falha silenciosamente."""
    payload = {"messaging_product": "whatsapp", "status": "read", "message_id": message_id}
    try:
        return _post(payload)
    except requests.RequestException:
        return None


def _post(payload):
    r = requests.post(_url(), headers=_headers(), json=payload, timeout=30)
    if not r.ok:
        # registra o corpo do erro da Meta (contem code/message exatos) p/ diagnostico
        log.error("graph %s -> %s", r.status_code, r.text[:1000])
    r.raise_for_status()
    return r.json()
