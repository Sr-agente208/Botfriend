"""Testes do botfriend-oficial: comandos (unit) + webhook (integração com mock da Graph API)."""
import json
import os
import signal
import subprocess
import sys
import threading
import time
import http.server

BASE_DIR = "/home/user/Botfriend/apioficial"

# ============ 1) TESTES UNITÁRIOS DOS COMANDOS ============
sys.path.insert(0, BASE_DIR)
import comandos

T = []
ok = lambda c, m: (T.append((c, m)), print(("PASS" if c else "FAIL") + " - " + m))

r = comandos.responder("!ping")
ok("Pong" in r, "!ping responde Pong")
ok(comandos.responder("ping") == r, "funciona sem !")
ok(comandos.responder("PING") == r, "ignora caixa")
ok(comandos.responder("!ping ") == r, "ignora espaços")
ok("comandos" in comandos.responder("!menu").lower(), "!menu mostra menu")
ok(comandos.responder("qualquer coisa aleatória").startswith("Não entendi"), "fallback educado")
ok(comandos.responder(None).startswith("Recebi"), "sem texto pede texto")
d = comandos.responder("!dado 20")
ok("d20" in d and "(d20)" in d, "!dado 20 usa d20")
ok("cara" in comandos.responder("!moeda") or "coroa" in comandos.responder("!moeda"), "!moeda sorteia")
ok(len(comandos.responder("!piada")) > 10, "!piada tem conteúdo")
e = comandos.responder("!escolha pizza, hamburguer, sushi")
ok(e.startswith("🤔") and any(x in e for x in ["pizza", "hamburguer", "sushi"]), "!escolha escolhe uma opção")
ok("vírgula" in comandos.responder("!escolha sozinho"), "!escolha pede 2+ opções")
ok(comandos.responder("oi").startswith("E aí"), "saudação responde")

# ============ 2) INTEGRAÇÃO: webhook + mock da Graph API ============
CAPTURADOS = []

class MockGraph(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_POST(self):
        n = int(self.headers.get("Content-Length", 0))
        corpo = json.loads(self.rfile.read(n))
        CAPTURADOS.append(corpo)
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"messaging_product": "whatsapp", "contacts": [], "messages": [{"id": "wamid.TEST"}]}).encode())

srv = http.server.ThreadingHTTPServer(("127.0.0.1", 8899), MockGraph)
threading.Thread(target=srv.serve_forever, daemon=True).start()

env = dict(
    os.environ,
    ACCESS_TOKEN="token-teste",
    PHONE_NUMBER_ID="123456789",
    VERIFY_TOKEN="vtk-teste",
    GRAPH_BASE="http://127.0.0.1:8899",
    PORT="5001",
)
proc = subprocess.Popen([sys.executable, "app.py"], cwd=BASE_DIR, env=env,
                        stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
time.sleep(3)

import requests as rq

try:
    # --- verificação do webhook (handshake da Meta) ---
    r = rq.get("http://127.0.0.1:5001/webhook", params={"hub.mode": "subscribe", "hub.verify_token": "vtk-teste", "hub.challenge": "DESAFIO123"}, timeout=5)
    ok(r.status_code == 200 and r.text == "DESAFIO123", "handshake do webhook ecoa o challenge")
    r = rq.get("http://127.0.0.1:5001/webhook", params={"hub.mode": "subscribe", "hub.verify_token": "ERRADO", "hub.challenge": "X"}, timeout=5)
    ok(r.status_code == 403, "token inválido recebe 403")

    # --- mensagem chegando (payload real da doc) ---
    def payload(texto, mid):
        return {
            "object": "whatsapp_business_account",
            "entry": [{"id": "1", "changes": [{"field": "messages", "value": {
                "messaging_product": "whatsapp",
                "metadata": {"display_phone_number": "5511999990000", "phone_number_id": "123456789"},
                "contacts": [{"profile": {"name": "Keisen"}, "wa_id": "5511988887777"}],
                "messages": [{"from": "5511988887777", "id": mid, "timestamp": "1758254144", "text": {"body": texto}, "type": "text"}],
            }}]}],
        }

    r = rq.post("http://127.0.0.1:5001/webhook", json=payload("!ping", "wamid.AAA1"), timeout=5)
    ok(r.status_code == 200, "webhook responde 200 pra Meta")
    time.sleep(1)
    ok(any(c.get("status") == "read" for c in CAPTURADOS), "marcou como lida (bolinha azul)")
    textos = [c.get("text", {}).get("body", "") for c in CAPTURADOS if c.get("type") == "text"]
    ok(any("Pong" in t for t in textos), "respondeu Pong ao !ping")
    ok(all(c.get("to") == "5511988887777" for c in CAPTURADOS if c.get("type") == "text"), "responde para quem mandou")

    # --- dedupe: mesma mensagem de novo ---
    antes = len(CAPTURADOS)
    rq.post("http://127.0.0.1:5001/webhook", json=payload("!ping", "wamid.AAA1"), timeout=5)
    time.sleep(0.8)
    ok(len(CAPTURADOS) == antes, "mensagem duplicada não gera resposta dupla")

    # --- comandos variados ---
    for texto, esperado, mid in [("!menu", "Botfriend Oficial", "wamid.AAA2"), ("!dado 20", "d20", "wamid.AAA3"), ("qualquer besteira", "Não entendi", "wamid.AAA4")]:
        rq.post("http://127.0.0.1:5001/webhook", json=payload(texto, mid), timeout=5)
        time.sleep(0.6)
        ultimos = [c.get("text", {}).get("body", "") for c in CAPTURADOS if c.get("type") == "text"]
        ok(any(esperado in t for t in ultimos), f"'{texto}' -> resposta contém '{esperado}'")

    # --- imagem (não-texto) ---
    p = payload("x", "wamid.AAA5")
    p["entry"][0]["changes"][0]["value"]["messages"][0] = {"from": "5511988887777", "id": "wamid.AAA5", "timestamp": "1", "type": "image", "image": {"id": "i"}}
    rq.post("http://127.0.0.1:5001/webhook", json=p, timeout=5)
    time.sleep(0.6)
    ultimos = [c.get("text", {}).get("body", "") for c in CAPTURADOS if c.get("type") == "text"]
    ok(any("só falo com *texto*" in t for t in ultimos), "mídia recebe aviso simpático")

    # --- status (entregue/lido) não deve responder nada ---
    antes = len(CAPTURADOS)
    rq.post("http://127.0.0.1:5001/webhook", json={"object": "whatsapp_business_account", "entry": [{"id": "1", "changes": [{"field": "messages", "value": {"statuses": [{"id": "wamid.X", "status": "delivered"}]}}]}]}, timeout=5)
    time.sleep(0.6)
    ok(len(CAPTURADOS) == antes, "statuses não geram resposta")

finally:
    proc.send_signal(signal.SIGTERM)
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()

fails = [m for c, m in T if not c]
print()
print(f"{len(T) - len(fails)}/{len(T)} testes passaram")
if fails:
    print("FALHAS:", *fails, sep="\n - ")
sys.exit(1 if fails else 0)
