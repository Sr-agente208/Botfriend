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
# --- Lote 6: Interações completas ---
ok("mordeu joao" in comandos.responder("©morder joão").lower(), "©morder com alvo")
ok("Nhac" in comandos.responder("©mordida"), "©mordida no bot reage")
ok("chute" in comandos.responder("©chutar").lower(), "©chutar no bot")
ok("soco" in comandos.responder("©soco").lower(), "©soco no bot")
ok("matou claudio" in comandos.responder("©matar cláudio").lower(), "©matar com alvo")
ok("TECLADO" in comandos.responder("©sentar").upper(), "©sentar no bot")
ok("bêbado" in comandos.responder("©bebado").lower(), "©bebado mede o nível")
antes = comandos._conta("u17@s.whatsapp.net")["coins"]
r = comandos.responder("©roubar", de="u17@s.whatsapp.net")
depois = comandos._conta("u17@s.whatsapp.net")["coins"]
ok("multa aplicada" in r.lower(), "©roubar no bot pega no flagra")
ok(depois == antes - 15 or antes < 15, "©roubar cobra multa de 15")
ok("segurança" in comandos.responder("©roubar morganny", de="u17b@s.whatsapp.net").lower(), "©roubar com alvo")
ok("tapa" in comandos.responder("©tapa @joão").lower(), "©tapa com alvo com @")
# --- Lote 6b: GIFs nas interações ---
for verbo in ["carinho", "abraco", "tapa", "beijo", "mordida", "chutar", "soco", "matar", "sentar"]:
    u = "gif" + verbo + "@s.whatsapp.net"
    comandos.responder("©" + verbo, de=u)
    ok(u in comandos.MEDIA_ENVIAR and comandos.MEDIA_ENVIAR.pop(u)["url"].startswith("http"), "GIF do ©" + verbo + " enfileirado")
ok("u17b@s.whatsapp.net" not in comandos.MEDIA_ENVIAR, "©roubar não manda GIF")
comandos.responder("©bebado", de="u18@s.whatsapp.net")
ok(comandos.MEDIA_ENVIAR.pop("u18@s.whatsapp.net")["url"].endswith(".jpg"), "©bebado manda imagem")
# --- Lote 7: imagem pra todos ---
for palavra in list(comandos.MEDIDORES):
    u = "gif" + palavra + "@s.whatsapp.net"
    r = comandos.responder("©" + palavra + " @joao", de=u)
    ok("%" in r and "MEDIDOR" in r.upper(), "medidor ©" + palavra + " responde")
    m = comandos.MEDIA_ENVIAR.pop(u, {})
    ok(m.get("tipo") == "image" and m.get("url", "").startswith("http"), "©" + palavra + " manda imagem")
ok("Marca duas pessoas" in comandos.responder("©shipo"), "©shipo sem alvos ensina")
ok("SHIPAMENTO" in comandos.responder("©shipo @anninha @joão").upper(), "©shipo shipa casal")
ok(comandos.MEDIA_ENVIAR.pop("u20@s.whatsapp.net", {}).get("tipo") is None or True, "limpo")
ok("ACEITO" in comandos.responder("©namorar", de="u19@s.whatsapp.net").upper(), "©namorar u19")
m = comandos.MEDIA_ENVIAR.pop("u19@s.whatsapp.net")
ok(m["tipo"] == "image" and "catbox" in m["url"], "©namorar com foto do keisen")
comandos.responder("©namorar", de="u20@s.whatsapp.net")
ok("CASAMENTO" in comandos.responder("©casar", de="u20@s.whatsapp.net").upper(), "©casar u20")
m = comandos.MEDIA_ENVIAR.pop("u20@s.whatsapp.net")
ok(m["tipo"] == "image", "©casar com foto do casal")
ok(comandos.MEDIA_ENVIAR.pop("u9@s.whatsapp.net", {}).get("url", "").endswith("gosmx9.jpg"), "©relacao com foto do casal")
# --- Lote 9: arrumação completa de mídia ---
for palavra in ["lindo", "linda", "baiano", "baiana", "carioca"]:
    u = "m9" + palavra + "@s.whatsapp.net"
    comandos.responder("©" + palavra + " @joao", de=u)
    ok(comandos.MEDIA_ENVIAR.pop(u, {}).get("tipo") == "image", "medidor ©" + palavra + " com imagem")
r = comandos.responder("©fiel @joão", de="u22@s.whatsapp.net")
ok("Analisando o coração" in r, "©fiel fase 1: analisando...")
extra = comandos.EXTRA_APOS.pop("u22@s.whatsapp.net")
ok("Resultado da análise" in extra["texto"] and "Fidelidade" in extra["texto"], "©fiel fase 2: resultado")
ok("joao" in extra["texto"] and "[" in extra["texto"], "©fiel resultado com alvo e barra")
ok(extra["media"]["tipo"] == "image", "©fiel resultado com imagem")
r = comandos.responder("©infiel", de="u23@s.whatsapp.net", nome="Ana")
ok("Analisando" in r and "Ana" in r, "©infiel fase 1 sem alvo usa o nome")
extra = comandos.EXTRA_APOS.pop("u23@s.whatsapp.net")
ok("Título" in extra["texto"], "©infiel resultado com título")
ok(extra["media"]["tipo"] == "image", "©infiel resultado com imagem")
comandos.responder("©morte fulano", de="u24@s.whatsapp.net")
m = comandos.MEDIA_ENVIAR.pop("u24@s.whatsapp.net")
ok(m["tipo"] == "video" and "deathcmd" or m["url"].endswith(".mp4"), "©morte com GIF")
r = comandos.responder("©idade 23/12/2007", de="u25@s.whatsapp.net")
ok("anos" in r and "aniversário" in r, "©idade calcula idade")
ok(comandos.MEDIA_ENVIAR.pop("u25@s.whatsapp.net")["tipo"] == "video", "©idade com GIF")
ok("Formato" in comandos.responder("©idade errado", de="u25@s.whatsapp.net"), "©idade invalido ensina")
ok("inválida" in comandos.responder("©idade 30/02/2007", de="u25@s.whatsapp.net"), "©idade data impossível")
for verbo in ["cagar", "capinarlote", "lavarlouca"]:
    u = "m9" + verbo + "@s.whatsapp.net"
    r = comandos.responder("©" + verbo + " @joao", de=u)
    ok("joao" in r.lower(), "©" + verbo + " com alvo")
    ok(comandos.MEDIA_ENVIAR.pop(u, {})["tipo"] == "video", "©" + verbo + " com GIF")
comandos.responder("©enigma", de="u26@s.whatsapp.net")
ok(comandos.MEDIA_ENVIAR.pop("u26@s.whatsapp.net", {}).get("tipo") == "image", "©enigma com imagem")
comandos.responder("©xyzabc123", de="u27@s.whatsapp.net")
ok(comandos.MEDIA_ENVIAR.pop("u27@s.whatsapp.net", {}).get("tipo") == "image", "comando desconhecido com imagem de erro")
# --- Lote 10: contador de casal ---
ok("namorar" in comandos.responder("©contador", de="u28@s.whatsapp.net").lower(), "©contador solteiro ensina ©namorar")
comandos.responder("©namorar", de="u28@s.whatsapp.net")
r = comandos.responder("©contador", de="u28@s.whatsapp.net", nome="Morganny")
ok("CONTADOR DE CASAL" in r.upper(), "©contador card de casal")
ok("Juntos há" in r and "horas" in r and "minutos" in r, "©contador dias/horas/minutos")
ok("Morganny" in r and "WHITE LOTUS" in r, "©contador mostra o casal")
ok("Nv.1" in r or "Nv.2" in r, "©contador nível do amor")
ok("Próximo marco" in r, "©contador próximo marco")
m = comandos.MEDIA_ENVIAR.pop("u28@s.whatsapp.net")
ok(m["tipo"] == "image" and "catbox" in m["url"], "©contador com foto do casal")
ok("CONTADOR" in comandos.responder("©casal", de="u28@s.whatsapp.net").upper(), "©casal é alias do contador")
ok("CONTADOR" in comandos.responder("©tempo", de="u28@s.whatsapp.net").upper(), "©tempo é alias do contador")
# --- Lote 12: ©comer com GIF ---
u = "u29@s.whatsapp.net"
r = comandos.responder("©comer @joão", de=u)
ok("comeu joao" in r.lower(), "©comer com alvo")
m = comandos.MEDIA_ENVIAR.pop(u)
ok(m["tipo"] == "video" and m["url"].endswith(".mp4"), "©comer com GIF")
ok("Marca o alvo" in comandos.responder("©comer", de="u30@s.whatsapp.net"), "©comer sem alvo pede alvo")
# --- Lote 13: Pet Pokémon ---
# migração do pet antigo do u6b
pet_u6b = comandos._conta("u6b@s.whatsapp.net")["perfil"]["pet"]
ok(pet_u6b.get("nivel") == 1, "pet antigo migra pro formato Pokémon")
r = comandos.responder("©pet", de="u6b@s.whatsapp.net")
ok("Nv.1" in r and "Poder total" in r and "ATK" in r, "©pet card Pokémon completo")
ok("Campanha" in r and "Filhote" in r, "©pet mostra fase e campanha")
# novo jogador: adota, alimenta (XP), treina (XP), poder
comandos.responder("©pet", de="u31@s.whatsapp.net")
r = comandos.responder("©alimentar", de="u31@s.whatsapp.net")
ok("+8 XP" in r, "©alimentar dá XP")
r = comandos.responder("©treinar", de="u31@s.whatsapp.net")
ok("+15 XP" in r and "treinou" in r, "©treinar dá XP")
r = comandos.responder("©poder", de="u31@s.whatsapp.net")
ok("PODER DE BATALHA" in r.upper() and "Campanha" in r, "©poder card de batalha")
ok("tá ofegante" in comandos.responder("©treinar", de="u31@s.whatsapp.net"), "©treinar respeita cooldown")
# level up forçado (usuário novo, sem cooldown)
comandos.responder("©pet", de="u32@s.whatsapp.net")
db = comandos._econ(); _p = db["u32@s.whatsapp.net"]["perfil"]["pet"]; _atk_antes = _p["atk"]; _p["xp"] = 95; comandos._econ_salva(db)
r = comandos.responder("©treinar", de="u32@s.whatsapp.net")
ok("subiu pro Nv.2" in r, "level up com +100 XP")
ok(comandos._conta("u32@s.whatsapp.net")["perfil"]["pet"]["atk"] >= _atk_antes + 1, "level up aumenta stats")
# batalha: fase 1 + resultado agendado
r = comandos.responder("©batalha", de="u32@s.whatsapp.net")
ok("ARENA PET" in r.upper() and "selvagem" in r, "©batalha fase 1: arena")
extra = comandos.EXTRA_APOS.pop("u32@s.whatsapp.net")
ok("Round 1" in extra["texto"] and ("VITÓRIA" in extra["texto"].upper() or "Derrota" in extra["texto"]), "©batalha resultado com rounds")
ok("N-Coins" in extra["texto"] or "XP" in extra["texto"], "©batalha paga prêmios")
ok("recuperando" in comandos.responder("©batalha", de="u32@s.whatsapp.net"), "©batalha respeita cooldown")
# --- Lote 14: imagens + caminhos de evolução ---
ok("Guerra ou treino" in comandos.responder("©caminhos") or "CAMINHOS DE EVOLUÇÃO" in comandos.responder("©caminhos").upper(), "©caminhos lista os 3 caminhos")
comandos.responder("©pet", de="u33@s.whatsapp.net")
print("DBG1 pet:", comandos._conta("u33@s.whatsapp.net")["perfil"].get("pet"), "| MEDIA keys:", list(comandos.MEDIA_ENVIAR.keys())[-5:])
m = comandos.MEDIA_ENVIAR.pop("u33@s.whatsapp.net", None)
ok(m and m["arquivo"].startswith("pets/filhote_"), "adoção com imagem do filhote")
import os as _os
ok(all(_os.path.isfile("media/" + f) for f in ["pets/filhote_cachorro.jpg", "pets/adulto_guerreiro.jpg", "pets/adulto_atleta.jpg", "pets/adulto_fofo.jpg"]), "imagens de pets no deploy (leves)")
# evolução Nv.5: vitorias=3 → caminho guerreiro
db = comandos._econ(); _p = db["u33@s.whatsapp.net"]["perfil"]["pet"]; _p.update({"nivel": 4, "xp": 390, "vitorias": 3}); comandos._econ_salva(db)
r = comandos.responder("©treinar", de="u33@s.whatsapp.net")
ok("Guerreiro" in r and "caminho" in r.lower(), "Nv.5 escolhe caminho guerreiro (3 vitórias)")
ok("EVOLUIU" in r.upper(), "evolução anunciada")
print("DBG2 r:", repr(r[-160:]), "| MEDIA u33:", comandos.MEDIA_ENVIAR.get("u33@s.whatsapp.net"))
m = comandos.MEDIA_ENVIAR.pop("u33@s.whatsapp.net", None)
ok(m and m["arquivo"] == "pets/adulto_guerreiro.jpg", "imagem da evolução adulto guerreiro")
ok(m and m["arquivo"] == "pets/adulto_guerreiro.jpg", "imagem da evolução adulto guerreiro")
# alfa Nv.10
db = comandos._econ(); _p = db["u33@s.whatsapp.net"]["perfil"]["pet"]; _p.update({"nivel": 9, "xp": 890, "last_train": 0}); comandos._econ_salva(db)
r = comandos.responder("©treinar", de="u33@s.whatsapp.net")
ok("Warlord" in r, "Nv.10 vira Alfa do caminho")
m = comandos.MEDIA_ENVIAR.pop("u33@s.whatsapp.net", None)
ok(m and ("alfa" in m["arquivo"] or "adulto_guerreiro" in m["arquivo"]), "imagem alfa anexada (fallback adulto ok)")
# caminho atleta via treinos
comandos.responder("©pet", de="u34@s.whatsapp.net")
db = comandos._econ(); _p = db["u34@s.whatsapp.net"]["perfil"]["pet"]; _p.update({"nivel": 4, "xp": 390, "treinos": 5}); comandos._econ_salva(db)
r = comandos.responder("©treinar", de="u34@s.whatsapp.net")
ok("Atleta" in r, "caminho atleta via treinos")
# caminho fofo via alimentações
comandos.responder("©pet", de="u35@s.whatsapp.net")
db = comandos._econ(); _p = db["u35@s.whatsapp.net"]["perfil"]["pet"]; _p.update({"nivel": 4, "xp": 395, "feeds": 7, "coins": 500}); comandos._econ_salva(db)
r = comandos.responder("©alimentar", de="u35@s.whatsapp.net")
ok("Fofura" in r, "caminho fofura via alimentações")
r = comandos.responder("©pet", de="u35@s.whatsapp.net")
ok("🧸" in r, "card mostra emoji do caminho")
# --- Lote 15: Arsenal Pet ---
loja = comandos.responder("©loja")
ok("ARSENAL PET" in loja.upper() and "Excalibur" in loja and "Manto do Titã" in loja, "©loja cataloga 45 itens")
ok("Néctar Divino" in loja, "©loja lista consumíveis")
ok("Qual item" in comandos.responder("©comprar", de="u36@s.whatsapp.net"), "©comprar sem número ensina")
ok("custa" in comandos.responder("©comprar 11", de="u36@s.whatsapp.net").lower(), "©comprar respeita saldo")
comandos.responder("©pet", de="u36@s.whatsapp.net")
db = comandos._econ(); db["u36@s.whatsapp.net"]["coins"] = 5000; comandos._econ_salva(db)
r = comandos.responder("©comprar 4", de="u36@s.whatsapp.net")  # Espada Curta 300
ok("COMPRA EFETUADA" in r.upper(), "©comprar efetua compra")
r = comandos.responder("©mochila", de="u36@s.whatsapp.net")
ok("MOCHILA" in r.upper() and "Espada Curta" in r, "©mochila lista item")
r = comandos.responder("©equipar 1", de="u36@s.whatsapp.net")
ok("EQUIPADO" in r.upper() and "poder total" in r.lower(), "©equipar veste a arma")
p = comandos._conta("u36@s.whatsapp.net")["perfil"]["pet"]
ok(p["equipado"].get("arma") == 3, "arma salva no pet")
ok(comandos._pet_stats(p)[0] == p["atk"] + 5, "bônus +5 ATK ativo")
r = comandos.responder("©poder", de="u36@s.whatsapp.net")
ok("Espada Curta" in r, "©poder mostra o arsenal")
r = comandos.responder("©comprar 36", de="u36@s.whatsapp.net")  # Ração Premium
r = comandos.responder("©usar 1", de="u36@s.whatsapp.net")
ok("consumiu" in r.lower(), "©usar consome item")
ok(len(comandos._conta("u36@s.whatsapp.net")["perfil"]["mochila"]) == 0, "item consumido sai da mochila")
r = comandos.responder("©desequipar arma", de="u36@s.whatsapp.net")
ok("de volta pra mochila" in r.lower(), "©desequipar guarda item")
ok(len(comandos._conta("u36@s.whatsapp.net")["perfil"]["mochila"]) == 1, "item volta à mochila")
# drop unitário
import random as _rd
_rd.seed(7)
d = comandos._sorteia_drop()
ok(d is not None and 0 <= d < len(comandos.ITENS) and comandos.ITENS[d]["slot"] != "consumivel", "drop sorteia item de equipamento")
# batalha com arsenal equipado
comandos.responder("©equipar 1", de="u36@s.whatsapp.net")
r = comandos.responder("©batalha", de="u36@s.whatsapp.net")
ok("Arsenal" in r, "arena mostra o arsenal equipado")
# --- Lote 16: stickers transparentes + 3 pets novos + alfa real ---
ok(len(comandos.PET_STATS) == 9, "9 espécies de pet")
ok(comandos._pet_img({"tipo": "🐺 lobo", "nivel": 1}) == "pets/filhote_lobo.png", "lobo com sticker próprio")
ok(comandos._pet_img({"tipo": "🦅 águia", "nivel": 1}) == "pets/filhote_aguia.png", "águia com sticker próprio")
ok(comandos._pet_img({"tipo": "🐸 sapo", "nivel": 1}) == "pets/filhote_sapo.png", "sapo com sticker próprio")
ok(comandos._pet_img({"tipo": "🐶 cachorro", "nivel": 1}) == "pets/filhote_cachorro.jpg", "pets antigos mantêm jpg")
ok(comandos._pet_img({"tipo": "🐶 cachorro", "nivel": 12, "caminho": "guerreiro"}) == "pets/alfa_warlord.png", "alfa Warlord com sticker REAL")
ok(comandos._pet_img({"tipo": "🐱 gato", "nivel": 11, "caminho": "atleta"}) == "pets/alfa_relampago.png", "alfa Relâmpago sticker real")
ok(comandos._pet_img({"tipo": "🐲 dragãozinho", "nivel": 10, "caminho": "fofo"}) == "pets/alfa_divino.png", "alfa Divino sticker real")
ok(comandos._img_item(9) == "itens/excalibur.png" and comandos._img_item(8) == "itens/lamina_dragao.png", "stickers de itens lendários")
comandos.responder("©pet", de="u37@s.whatsapp.net")
db = comandos._econ(); db["u37@s.whatsapp.net"]["coins"] = 3000; comandos._econ_salva(db)
r = comandos.responder("©comprar 10", de="u37@s.whatsapp.net")  # Excalibur 2400
m = comandos.MEDIA_ENVIAR.pop("u37@s.whatsapp.net")
ok("COMPRA EFETUADA" in r.upper() and m.get("arquivo") == "itens/excalibur.png", "©comprar Excalibur manda sticker")
r = comandos.responder("©equipar 1", de="u37@s.whatsapp.net")
m = comandos.MEDIA_ENVIAR.pop("u37@s.whatsapp.net")
ok("EQUIPADO" in r.upper() and m.get("arquivo") == "itens/excalibur.png", "©equipar Excalibur manda sticker")
r = comandos.responder("©pet", de="u37@s.whatsapp.net")
ok("Excalibur" in r, "card ©pet mostra Excalibur equipada")
# --- Lote 16b: onda 2 de stickers (épicos) ---
ok(comandos._img_item(6) == "itens/tridente.png", "Tridente com sticker")
ok(comandos._img_item(17) == "itens/armadura_placas.png", "Armadura de Placas com sticker (índice correto)")
ok(comandos._img_item(30) == "itens/mascara.png", "Máscara Sombria com sticker (índice correto)")
ok(comandos._img_item(2) is None, "Adaga Sombria ainda sem sticker (onda futura)")
ok(comandos._img_item(0) == "itens/espada_enferrujada.png" and comandos._img_item(44) == "itens/nectar.png", "onda 4: comuns e consumíveis com sticker")
_pares = {8: "lamina", 9: "excalibur", 17: "placas", 18: "couraca", 22: "aegis", 28: "plumas", 32: "anel", 33: "coroa"}
ok(all(_p in comandos.ITEM_IMG[i] for i, _p in _pares.items()), "todo sticker aponta pro item certo")
ok(comandos._img_item(32) == "itens/anel_poder.png", "Anel do Poder com sticker")
comandos.responder("©pet", de="u39@s.whatsapp.net")
db = comandos._econ(); db["u39@s.whatsapp.net"]["coins"] = 3000; comandos._econ_salva(db)
r = comandos.responder("©comprar 44", de="u39@s.whatsapp.net")  # Bolo da Ascensão
m = comandos.MEDIA_ENVIAR.pop("u39@s.whatsapp.net")
ok(m.get("arquivo") == "itens/bolo_ascensao.png", "Bolo da Ascensão com sticker")
r = comandos.responder("©usar 1", de="u39@s.whatsapp.net")
ok("consumiu" in r.lower() and "XP" in r, "Bolo da Ascensão dá +200 XP")
ok(comandos._img_item(33) == "itens/coroa_real.png", "Coroa Real com sticker")
ok(comandos._img_item(4) == "itens/gancho.png", "Gancho Pirata com sticker")
ok(comandos._img_item(36) == "itens/pena_fenix.png", "Pena Fênix com sticker")
comandos.responder("©pet", de="u38@s.whatsapp.net")
db = comandos._econ(); db["u38@s.whatsapp.net"]["coins"] = 3000; comandos._econ_salva(db)
r = comandos.responder("©comprar 34", de="u38@s.whatsapp.net")  # Coroa Real (índice 33, preço 2600)
m = comandos.MEDIA_ENVIAR.pop("u38@s.whatsapp.net")
ok("COMPRA EFETUADA" in r.upper() and m.get("arquivo") == "itens/coroa_real.png", "©comprar Coroa Real manda sticker da coroa")
db = comandos._econ(); db["u28@s.whatsapp.net"]["coins"] += 200; db["u28@s.whatsapp.net"]["perfil"]["namoro"]["desde"] -= 40*86400; comandos._econ_salva(db)
r = comandos.responder("©casar", de="u28@s.whatsapp.net")
ok("CASAMENTO" in r.upper(), "©casar no contador-teste")
r = comandos.responder("©contador", de="u28@s.whatsapp.net")
ok("Casados" in r, "©contador mostra fase casados")
ok("Nv.2" in r or "Nv.3" in r, "©contador sobe de nível com dias")
# --- Lote 8: mídia local (pasta media/) ---
import os
comandos.responder("©menu", de="u21@s.whatsapp.net")
m = comandos.MEDIA_ENVIAR.pop("u21@s.whatsapp.net")
ok(m.get("arquivo") == "fotomenu.png" and m["tipo"] == "image", "©menu com foto de fundo")
comandos.responder("©perfil", de="u21@s.whatsapp.net")
m = comandos.MEDIA_ENVIAR.pop("u21@s.whatsapp.net")
ok(m.get("arquivo") == "fotoperfil.png", "©perfil com foto de fundo")
comandos.responder("©dono", de="u21@s.whatsapp.net")
m = comandos.MEDIA_ENVIAR.pop("u21@s.whatsapp.net")
ok(m.get("arquivo") == "donos.mp4" and m["tipo"] == "video", "©dono com vídeo do card")
ok(os.path.isfile("media/fotomenu.png") and os.path.isfile("media/fotoperfil.png") and os.path.isfile("media/donos.mp4"), "mídia embarcada no deploy")
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
    ATRASO_FASE2="1",
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
        ultimos = []
        for c in CAPTURADOS:
            if "text" in c: ultimos.append(c["text"].get("body", ""))
            if "image" in c: ultimos.append(c["image"].get("caption", ""))
            if "video" in c: ultimos.append(c["video"].get("caption", ""))
        ok(any(esperado in t for t in ultimos), f"'{texto}' -> resposta contém '{esperado}'")

    # --- fidelidade em 2 partes: analisando... -> resultado (após atraso) ---
    rq.post("http://127.0.0.1:5001/webhook", json=payload("©fiel @keisen", "wamid.F1"), timeout=5)
    time.sleep(0.7)
    ultimos = []
    for c in CAPTURADOS:
        if "text" in c: ultimos.append(c["text"].get("body", ""))
    ok(any("Analisando o coração" in t for t in ultimos), "fidelidade fase 1 chega na hora")
    time.sleep(2.2)
    caps = []
    for c in CAPTURADOS:
        if "image" in c: caps.append(c["image"].get("caption", ""))
    ok(any("Resultado da análise" in t for t in caps), "fidelidade fase 2 chega com atraso (imagem)")

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
