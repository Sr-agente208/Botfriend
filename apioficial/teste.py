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

r = comandos.responder("©ping")
ok("Pong" in r, "!ping responde Pong")
ok(comandos.responder("ping") == r, "funciona sem !")
ok(comandos.responder("PING") == r, "ignora caixa")
ok(comandos.responder("©ping ") == r, "ignora espaços")
ok("comandos" in comandos.responder("©menu").lower(), "!menu mostra menu")
ok(comandos.responder("qualquer coisa aleatória").startswith("Não entendi"), "fallback educado")
ok(comandos.responder(None).startswith("Recebi"), "sem texto pede texto")
d = comandos.responder("©dado 20")
ok("d20" in d and "(d20)" in d, "!dado 20 usa d20")
moeda_r = comandos.responder("©moeda")
ok("cara" in moeda_r or "coroa" in moeda_r, "©moeda sorteia (cara ou coroa sempre)")
falha_giro = None
for _ in range(10):
    r_giro = comandos.responder("©moeda")
    if not ("cara" in r_giro or "coroa" in r_giro):
        falha_giro = r_giro
        break
ok(falha_giro is None, "©moeda consistente em 10 giros" + (f" -> {falha_giro!r}" if falha_giro else ""))
ok(len(comandos.responder("©piada")) > 10, "!piada tem conteúdo")
e = comandos.responder("©escolha pizza, hamburguer, sushi")
ok(e.startswith("🤔") and any(x in e for x in ["pizza", "hamburguer", "sushi"]), "!escolha escolhe uma opção")
ok("vírgula" in comandos.responder("©escolha sozinho"), "!escolha pede 2+ opções")
ok("configura" in comandos.responder("©config").lower(), "!config mostra painel")
ok("Sr-agente208" in comandos.responder("©config"), "!config mostra dono real")
ppt = comandos.responder("©ppt pedra")
ok(any(x in ppt for x in ["pedra", "papel", "tesoura"]), "©ppt joga pedra-papel-tesoura")
ok("©ppt" in comandos.responder("©ppt"), "©ppt sem arg ensina uso")
cas = comandos.responder("©cassino")
ok(any(x in cas for x in ["🍒", "🍋", "🍊", "🔔", "💎", "⭐"]), "©cassino gira os slots")
ana = comandos.responder("©anagrama", de="u1")
ok("ANAGRAMA" in ana, "©anagrama mostra palavra embaralhada")
resp_ana = comandos.PENDENTE["u1"]["resposta"][0]
ok("ACERTOU" in comandos.responder(resp_ana, de="u1"), "resposta do anagrama é validada")
enig = comandos.responder("©enigma", de="u2")
ok("ENIGMA" in enig, "©enigma apresenta o enigma")
ok("Errou" in comandos.responder("banana", de="u2"), "resposta errada mantém jogo")
resp_enig = comandos.PENDENTE["u2"]["resposta"][0]
ok("ACERTOU" in comandos.responder(resp_enig, de="u2"), "resposta do enigma é validada")
ok("eu nunca" in comandos.responder("©eununca").lower(), "©eununca sorteia confissão")
ok(len(comandos.responder("©cantada")) > 10, "©cantada tem conteúdo")
ok(len(comandos.responder("©curiosidades")) > 10, "©curiosidades tem conteúdo")
ok(len(comandos.responder("©brincadeira")) > 10, "©brincadeira sorteia desafio")
ok("💖" in comandos.responder("©carinho"), "©carinho interage")
# --- Lote 3: RPG ---
ok("herói" in comandos.responder("©rpg", de="u5@s.whatsapp.net").lower(), "©rpg cria herói")
ok("TEU HERÓI" in comandos.responder("©rpg", de="u5@s.whatsapp.net").upper(), "©rpg de novo mostra o herói")
mis = comandos.responder("©missao", de="u5@s.whatsapp.net")
ok("MISSÃO" in mis.upper(), "©missao rola missão")
ok("taverna" in comandos.responder("©missao", de="u5@s.whatsapp.net").lower(), "©missao respeita cooldown")
ok("PROGRESSO" in comandos.responder("©nivel", de="u5@s.whatsapp.net").upper(), "©nivel mostra progresso")
# --- Lote 3: Pet ---
ok("PET TE ESCOLHEU" in comandos.responder("©pet", de="u6b@s.whatsapp.net").upper(), "©pet adota pet")
ok("TEU PET" in comandos.responder("©pet", de="u6b@s.whatsapp.net").upper(), "©pet de novo mostra status")
ok("devorou" in comandos.responder("©alimentar", de="u6b@s.whatsapp.net").lower(), "©alimentar alimenta")
# --- Lote 3: adivinha ---
comandos.responder("©adivinha", de="u7@s.whatsapp.net")
num = comandos.PENDENTE["u7@s.whatsapp.net"]["numero"]
ok("MAIOR" in comandos.responder(str(num - 1), de="u7@s.whatsapp.net"), "©adivinha dá dica maior")
ok("ACERTOU" in comandos.responder(str(num), de="u7@s.whatsapp.net"), "©adivinha completa o jogo")
# --- Lote 3: quiz ---
comandos.responder("©quiz", de="u8@s.whatsapp.net")
letra = comandos.PENDENTE["u8@s.whatsapp.net"]["resposta"][0]
ok("CERTA" in comandos.responder(letra, de="u8@s.whatsapp.net").upper(), "©quiz aceita letra certa")
# --- Lote 3: dono ---
ok("Sr-agente208" in comandos.responder("©dono"), "©dono mostra o criador")
# --- Lote 4: Amor ---
nam = comandos.responder("©namorar", de="u9@s.whatsapp.net")
ok("ACEITO" in nam.upper(), "©namorar casa com o bot")
ok("Dia 1" in comandos.responder("©relacao", de="u9@s.whatsapp.net"), "©relacao conta dias")
casar = comandos.responder("©casar", de="u9@s.whatsapp.net")
ok("CASAMENTO" in casar.upper() or "100" in casar, "©casar celebrou ou pede coins")
ok("Declaração" in comandos.responder("©declaracao"), "©declaracao romântica")
ok("solteiro" in comandos.responder("©terminar", de="u9@s.whatsapp.net").lower(), "©terminar encerra com drama")
# --- Lote 4: Utilidades ---
ok("Resultado: 8" in comandos.responder("©calc 2+2*3"), "©calc calcula 2+2*3")
ok("Só números" in comandos.responder("©calc import os"), "©calc bloqueia letras")
ok("Anotado" in comandos.responder("©anotar comprar leite", de="u10@s.whatsapp.net"), "©anotar salva")
ok("leite" in comandos.responder("©anotacoes", de="u10@s.whatsapp.net"), "©anotacoes lista")
ok("Apagada" in comandos.responder("©delanotacao 1", de="u10@s.whatsapp.net"), "©delanotacao apaga")
ok("VERDADE" in comandos.responder("©verdade").upper(), "©verdade sorteia")
ok("DESAFIO" in comandos.responder("©desafio").upper(), "©desafio sorteia")
# --- Lote 5: Grupos ---
G = "120363-teste@g.us"
ok("de grupo" in comandos.responder("©grupo", de="u11@s.whatsapp.net").lower(), "©grupo sem grupo dá aviso")
ok("PAINEL DO GRUPO" in comandos.responder("©grupo", de="u11@s.whatsapp.net", grupo=G).upper(), "©grupo mostra painel")
ok("u11" in comandos.responder("©membros", de="u12@s.whatsapp.net", grupo=G), "©membros lista membros ativos")
ok("só o dono" in comandos.responder("©regras seja legal", de="u15@s.whatsapp.net", grupo=G).lower(), "©regras set é só do dono")
ok("salvas" in comandos.responder("©regras Respeita a galera", de=comandos.NUMERO_DONO, grupo=G).lower(), "©regras dono salva")
ok("Respeita a galera" in comandos.responder("©regras", de="u16@s.whatsapp.net", grupo=G), "©regras mostra regras salvas")
ok("🎉" in comandos.responder("©sorteio", de="u13@s.whatsapp.net", grupo=G), "©sorteio sorteia membro")
times = comandos.responder("©times 2", de="u14@s.whatsapp.net", grupo=G)
ok("Time 1" in times and "u11" in times, "©times divide em times")
ok("u11" in comandos.responder("©msgcount", de="u11@s.whatsapp.net", grupo=G), "©msgcount ranking de fala")
econ = comandos.responder("©saldo", de="u3@s.whatsapp.net")
ok("EXTRATO" in econ and "N-Coins" in econ, "©saldo mostra extrato bancário")
trab1 = comandos.responder("©trabalhar", de="u3@s.whatsapp.net")
ok("Ganhos" in trab1 or "Descanso" in trab1, "©trabalhar paga ou pede descanso")
ok("insuficiente" in comandos.responder("©apostar 999999", de="u3@s.whatsapp.net").lower(), "©apostar respeita saldo")
ok("COMO APOSTAR" in comandos.responder("©apostar"), "©apostar sem arg ensina")
ok("PIX" in comandos.responder("©pix").upper(), "©pix explica")
ok("TOP 5" in comandos.responder("©rankicoins"), "©rankicoins lista")
perf = comandos.responder("©perfil", de="u3@s.whatsapp.net")
ok("PERFIL" in perf, "©perfil mostra cartão")
ok("atualizado" in comandos.responder("©sexo Feminino", de="u3@s.whatsapp.net").lower(), "©sexo atualiza perfil")
ok("WHITE LOTUS" in comandos.responder("©menu"), "menu mostra nome real do bot")
ok("prefixo" in comandos.responder("!ping").lower(), "! morto (marca Mizuki) — responde apontando o ©")
ok("versão" in comandos.responder("©config").lower(), "!config mostra versão")
ok("Comandos" in comandos.responder("©menu"), "menu estilizado")
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

    r = rq.post("http://127.0.0.1:5001/webhook", json=payload("©ping", "wamid.AAA1"), timeout=5)
    ok(r.status_code == 200, "webhook responde 200 pra Meta")
    time.sleep(1)
    ok(any(c.get("status") == "read" for c in CAPTURADOS), "marcou como lida (bolinha azul)")
    textos = [c.get("text", {}).get("body", "") for c in CAPTURADOS if c.get("type") == "text"]
    ok(any("Pong" in t for t in textos), "respondeu Pong ao !ping")
    ok(all(c.get("to") == "5511988887777" for c in CAPTURADOS if c.get("type") == "text"), "responde para quem mandou")

    # --- dedupe: mesma mensagem de novo ---
    antes = len(CAPTURADOS)
    rq.post("http://127.0.0.1:5001/webhook", json=payload("©ping", "wamid.AAA1"), timeout=5)
    time.sleep(0.8)
    ok(len(CAPTURADOS) == antes, "mensagem duplicada não gera resposta dupla")

    # --- comandos variados ---
    for texto, esperado, mid in [("©menu", "WHITE LOTUS", "wamid.AAA2"), ("©dado 20", "d20", "wamid.AAA3"), ("qualquer besteira", "Não entendi", "wamid.AAA4")]:
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
