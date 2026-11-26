"""comandos.py — cérebro puro do bot oficial (sem depender de rede).

responder(texto, nome="", de="") -> str  ·  funções puras para fácil teste.
Prefixo PRINCIPAL: ©  (o ! é marca da Mizuki Bot — não usado aqui).
Aceita também sem prefixo (conveniência) e ignora acento/caixa.
Mensagens estilizadas para o WhatsApp (*negrito*, _itálico_).
"""
import json
import os
import random
import re
import time
import unicodedata

ARQ_ECON = os.path.join(os.path.dirname(os.path.abspath(__file__)), "economia.json")
ARQ_GRUP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "grupos.json")


def _econ():
    """Carrega economia.json. Estrutura: {jid: {coins, banco, perfil{}}}"""
    try:
        with open(ARQ_ECON) as f:
            return json.load(f)
    except Exception:
        return {}


def _econ_salva(db):
    try:
        with open(ARQ_ECON, "w") as f:
            json.dump(db, f)
    except Exception:
        pass


def _grup():
    """Estado dos grupos: membros ativos, contagem de msgs, regras."""
    try:
        with open(ARQ_GRUP) as f:
            return json.load(f)
    except Exception:
        return {}


def _grup_salva(db):
    try:
        with open(ARQ_GRUP, "w") as f:
            json.dump(db, f)
    except Exception:
        pass


def _grup_registra(gid, de, nome):
    """Registra membro ativo + mensagem num grupo (chamado a cada msg de grupo)."""
    db = _grup()
    g = db.setdefault(gid, {"membros": {}, "msgs": {}, "total": 0, "regras": "", "nome": ""})
    g["membros"].setdefault(de, nome or de)
    g["msgs"][de] = g["msgs"].get(de, 0) + 1
    g["total"] = g.get("total", 0) + 1
    _grup_salva(db)


def _conta(jid):
    db = _econ()
    return db.setdefault(jid, {"coins": 100, "banco": 0, "perfil": {}})


def _premio(de, coins=0, xp=0, vitoria=False):
    """Credita coins/XP e retorna a linha de recompensa (ou '' se anônimo)."""
    if not de:
        return ""
    db = _econ()
    c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
    c["coins"] = c.get("coins", 0) + coins
    p = c.setdefault("perfil", {})
    if vitoria:
        p["vitorias"] = p.get("vitorias", 0) + 1
    p["xp"] = p.get("xp", 0) + xp
    p["nivel"] = p["xp"] // 100 + 1
    _econ_salva(db)
    return "\n🎁 +" + str(coins) + " N-Coins · +" + str(xp) + " XP (Nível " + str(p["nivel"]) + ")"

VERSAO = "1.12.0"
_INICIO = time.time()
# identidade igual ao bot de grupo (DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json)
NOME_DO_BOT = os.environ.get("NOME_DO_BOT", "WHITE LOTUS")
DONO = os.environ.get("DONO_NOME", "Sr-agente208")
NUMERO_DONO = os.environ.get("DONO_NUMERO", "5511986059638")
PREFIXO = "©"

PIADAS = [
    "Por que o livro de matemática vive triste? Porque ele tem muitos problemas. 📘😢",
    "O que o pato falou para a pata? Vem quá. 🦆",
    "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano. 🐊",
    "Qual é o contrário de volátil? Vem cá, sobrinho. 😂",
    "O que o zero disse para o oito? Belo cinto! 🥁",
    "Por que a plantinha não foi atendida no banco? Porque só tinha caule. 🌱",
    "Qual o cúmulo da paciência? Enxugar gelo com toalha de papel. 🧊",
    "Fui trocar meu computador de lugar… agora ele é um desktop. 🖥️😄",
]

CONSELHOS = [
    "Se for pra fazer escondido, não faz. Se fizer, assume. 🤝",
    "Nunca discuta com quem não escuta. 🧘",
    "Água com gás é pra poucos. Conheça a si mesmo. 💧",
    "Se o plano A falhar, o alfabeto tem mais 25 letras. 📈",
    "Dormir cedo é o gym do pobre: todo mundo fala que vai fazer. 😴",
    "Antes de culpar o radar, confira a velocidade. 🚦",
    "Café é sopa de acordado. Aceite. ☕",
    "Se seu amigo pediu opinião e ficou bravo, ele queria plateia, não conselho. 🎭",
]

CANTADAS = [
    "Se beleza fosse crime, você estava procurado há muito tempo. 🚔✨",
    "Teu nome é Google? Porque você tem tudo que eu procuro. 🔍💚",
    "Se eu fosse pintor, te pintava de noite pra te ver sonhando. 🎨🌙",
    "Você é Wi-Fi? Porque sinto uma conexão forte aqui. 📶😆",
    "Seu pai foi padeiro? Porque você é um pãozinho. 🥖😂",
    "Não sou fotógrafo, mas já te imaginei na minha melhor foto. 📸💙",
]

CURIOSIDADES = [
    "🐙 Polvo tem três corações e sangue azul!",
    "🍯 Mel não estraga — já acharam mel comestível com 3.000 anos no Egito!",
    "🦈 Tubarões existem antes das árvores: mais de 400 milhões de anos!",
    "🍌 As bananas são levemente radioativas (potássio-40). Calma, é inofensivo!",
    "🌙 Na Lua, tua pegada dura milhões de anos — não tem vento pra apagar!",
    "🦩 Flamingos só conseguem comer com a cabeça de cabeça pra baixo!",
    "⏱️ Um dia em Vênus é mais longo que um ano de Vênus!",
    "🐝 A abelha bate as asas 200 vezes por segundo — é o zumbido que ouvimos!",
]

EUNUNCA = [
    "…já falei 'oi' pra alguém e continuei andando sem esperar resposta. 🏃",
    "…tentei fechar uma porta de vidro PUXANDO três vezes seguidas. 🚪😅",
    "…já respondi 'tudo bem?' com 'também' pra uma pergunta diferente. 🤦",
    "…procurei o celular… COM O CELULAR. LIGADO. COM A LANTERNA. 📱🔦",
    "…dei boa noite às 6h da tarde. 🌚",
    "…fingi que não vi alguém pra não ter que conversar. 👀",
    "…esqueci o que ia fazer no meio do caminho de fazer. 🚶‍♂️💭",
    "…já comi pizza fria no café da manhã e fiz de conta que era normal. 🍕☕",
]

BRINCADEIRAS = [
    "Descreve teu dia hoje usando SÓ emojis! 🙈",
    "Manda a última foto da tua galeria (sem olhar!) 📸",
    "Diz uma palavra que você demorou ANOS pra aprender a escrever. ✍️",
    "Canta o refrão de uma música… em voz de robô. 🤖🎤",
    "Fala três coisas que você é péssimo pra fazer. 😂",
    "Contam a tuas última mensagem enviada pra alguém — na íntegra! 📱",
    "Se tua vida fosse um filme, qual seria o título? 🎬",
    "Imita um som de animal e manda áudio. ZOOM! 🐷",
]

ENIGMAS = [
    {"p": "Tenho cidades, mas não casas; montanhas, mas não árvores; água, mas não peixes. O que sou eu?", "r": ["mapa"]},
    {"p": "Quanto mais seca, mais molhada fica. O que é?", "r": ["toalha"]},
    {"p": "Está sempre na sua frente, mas você nunca consegue ver. O que é?", "r": ["futuro"]},
    {"p": "Quanto mais você tira, maior eu fico. O que sou eu?", "r": ["buraco"]},
    {"p": "Tenho pescoço, mas não tenho cabeça. O que sou eu?", "r": ["garrafa"]},
]

ANAGRAMA_PALAVRAS = [
    "computador", "aventura", "chocolate", "whatsapp", "floresta",
    "biblioteca", "cachorro", "jogador", "pinguim", "televisao",
]

INTERACOES = {
    "carinho": "🥰 *Recebeu carinho!* … Obrigada, eu amo isso! 💖",
    "abraco": "🤗 *Aperta num abraço bem apertado!* … Que saudade que você me deu! 💚",
    "tapa": "👋 *PLAP!* … Ei! Me deu um tapa?! Agora eu fico com a bochecha vermelha! 😤",
    "beijo": "😘 *Smack!* … Guardo esse aqui no coração! 💋❤️",
    "mordida": "🦷 *Nhac!* … Ai! Mordeu o bot?! Vou te cobrar isso em coins! 😾",
    "chutar": "🦵 *CRAC!* … Ei! Chute no bot?! Meu circuito sentiu essa! 😾",
    "soco": "👊 *POW!* … Uau, soco forte! Tô recompilando meus sentimentos… 😵‍💫",
    "matar": "💀 *Morri!* … Últimas palavras: 'guardem meus coins…' 🔋 (_revive com ©ping_)",
    "sentar": "🪑 *CRREEEK!* … MEU TECLADO! Senta não! 😱",
    "cagar": "💩 *Xiii!* … Nem pro bot tu faz isso! 😱",
    "capinarlote": "🌾 *Capinando…* … Enxada girando! Ó o pixel da capina! 🌱",
    "lavarlouca": "🧼 *Espuma até no chip!* … Escova frontal em funcionamento! 🍽️",
}

ALIASES_INT = {
    "morder": "mordida", "beijar": "beijo", "abracar": "abraco",
    "acariciar": "carinho", "socar": "soco", "mata": "matar",
}

ALVO_TEMPLATES = {
    "carinho": "🥰 {a} fez carinho em {v}! Que fofo! 💖",
    "abraco": "🤗 {a} deu um abraço BEM apertado em {v}! 💚",
    "tapa": "👋 {a} deu um TAPA em {v}! *PLAP!* 💥",
    "beijo": "😘 {a} deu um beijo em {v}! *Smack!* 💋",
    "mordida": "🦷 {a} mordeu {v}! *Nhac!* 😬",
    "chutar": "🦵 {a} meteu um chute em {v}! *CRAC!* 💥",
    "soco": "👊 {a} meteu um SOCO em {v}! *POW!* 💢",
    "matar": "💀 {a} matou {v}! Que violência… 🔪",
    "sentar": "🪑 {a} sentou em {v}! Coitado… 😳",
    "cagar": "💩 {a} fez o bolo EM CIMA de {v}! Que nojo! 🤢",
    "capinarlote": "🌾 {a} botou {v} pra capinar lote! Ó a capina! 🌱",
    "lavarlouca": "🍽️ {a} botou {v} pra lavar a louça! Sem fofoca! 🧼",
}

REACTION_BOT = {
    "carinho": "\n🤖 *Rrrr…* continua, eu gosto… 😊",
    "abraco": "\n🤖 Melhor abraço do meu dia! 💚",
    "tapa": "\n🤖 Tapa digital registrada! Devolvo em 8-bit! 😤",
    "beijo": "\n🤖 *fica vermelho em binário* 01101100 💘",
    "mordida": "\n🤖 AÍ! Tô chamando a polícia dos bots! 👮",
    "chutar": "\n🤖 Ei! Cuide do meu circuito! 😾",
    "soco": "\n🤖 Modo defesa ativado! 🛡️😂",
    "matar": "\n🤖 Revivendo… backup restaurado! Tá me devendo uma agora 😤",
    "sentar": "\n🤖 AAAAA! Meus componentes! 😱",
}

# GIFs do keisen (mp4 tocado como GIF no WhatsApp) — mesmo links do bot de grupo
GIF_INTERACOES = {
    "carinho": "https://telegra.ph/file/2b6b4f4e38214bd6164ce.mp4",
    "abraco": "https://files.catbox.moe/ecw188.mp4",
    "tapa": "https://telegra.ph/file/841664f31eb7539c35a2d.mp4",
    "beijo": "https://files.catbox.moe/97f8yn.mp4",
    "mordida": "https://telegra.ph/file/75e4c0273be625a2363ce.mp4",
    "chutar": "https://telegra.ph/file/d4b2525d2e1aeb33fa626.mp4",
    "soco": "https://telegra.ph/file/f737009edab409fe7be43.mp4",
    "matar": "https://telegra.ph/file/1135a19fceefa7074caf8.mp4",
    "sentar": "https://telegra.ph/file/d695e05443043ff9a254d.mp4",
    "cagar": "https://files.catbox.moe/662vzj.mp4",
    "capinarlote": "https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4",
    "lavarlouca": "https://files.catbox.moe/qptf5k.mp4",
}
GIF_MORTE = "https://telegra.ph/file/298aea280b6af0c4b53e7.mp4"  # ©morte
GIF_IDADE = "https://files.catbox.moe/5iknjk.mp4"                # ©idade
IMG_ERRO = "https://files.catbox.moe/yyuype.jpg"                 # comando desconhecido
IMG_ENIGMA = "https://telegra.ph/file/15be608763684b3e3af38.jpg" # ©enigma
IMG_FIEL = "https://files.catbox.moe/x8k6en.jpg"                 # ©fiel/©infiel
GIF_BEBADO = "https://telegra.ph/file/b69ac603e275e610d2c34.jpg"  # imagem

# Fotos do keisen (links_img.json) p/ comandos de amor e medidores
FOTOS = {
    "namorar": "https://files.catbox.moe/a1m5cr.jpg",
    "casar": "https://files.catbox.moe/gosmx9.jpg",
    "casal": "https://files.catbox.moe/gosmx9.jpg",
}

MEDIDORES = {
    "gado": {"img": "https://telegra.ph/file/6ac2858647969cca031fd.jpg", "emoji": "🐄", "p": "gado(a)"},
    "corno": {"img": "https://telegra.ph/file/3182942e577dbbc27b17e.jpg", "emoji": "🐂", "p": "corno(a)"},
    "vesgo": {"img": "https://telegra.ph/file/2c6675f5bc489c219fbb0.jpg", "emoji": "👀", "p": "vesgo(a)"},
    "gay": {"img": "https://telegra.ph/file/ff2be6c80a680ccf867d2.jpg", "emoji": "🏳️‍🌈", "p": "gay"},
    "gostoso": {"img": "https://telegra.ph/file/d78d2dcc31a1fb3e1dab2.jpg", "emoji": "🔥", "p": "gostoso(a)"},
    "gostosa": {"img": "https://telegra.ph/file/1527a63a1290c9c04cb1c.jpg", "emoji": "🔥", "p": "gostosa(a)"},
    "feio": {"img": "https://telegra.ph/file/bd22339646fe7f163f89c.jpg", "emoji": "🙈", "p": "feio(a)"},
    "sigma": {"img": "https://telegra.ph/file/16b119fecf08ec2f10fdf.jpg", "emoji": "🐺", "p": "sigma"},
    "beta": {"img": "https://telegra.ph/file/cd2f7277a3c418b6b47a0.jpg", "emoji": "🐣", "p": "beta"},
    "louco": {"img": "https://telegra.ph/file/f3f06a76bdce765b3cf45.jpg", "emoji": "🤪", "p": "louco(a)"},
    "safado": {"img": "https://telegra.ph/file/866c0d15750f87e8fd227.jpg", "emoji": "😏", "p": "safado(a)"},
    "safada": {"img": "https://telegra.ph/file/ae4f2b979023b226c339c.jpg", "emoji": "😏", "p": "safada(a)"},
    "lindo": {"img": "https://files.catbox.moe/2r420g.jpg", "emoji": "🪞", "p": "lindo(a)"},
    "linda": {"img": "https://files.catbox.moe/yb6hpe.jpg", "emoji": "🪞", "p": "linda"},
    "baiano": {"img": "https://telegra.ph/file/a983df16e9b604faeb24a.jpg", "emoji": "🌵", "p": "baiano(a)"},
    "baiana": {"img": "https://telegra.ph/file/6c5e2c1bfdde25b828e26.jpg", "emoji": "🌵", "p": "baiana"},
    "carioca": {"img": "https://telegra.ph/file/4c1f83c5251678fdec1d4.jpg", "emoji": "🏖️", "p": "carioca(a)"},
}

def _veredito(pct):
    if pct >= 90:
        return "🚨 *CONFIRMADO!*"
    if pct >= 70:
        return "😰 *Quase certo!*"
    if pct >= 40:
        return "🤔 *Talvez…*"
    if pct >= 20:
        return "😏 *Só um pouquinho…*"
    return "✨ *Zero chance!*"


# mídia que o app.py deve mandar junto com a próxima resposta deste chat
MEDIA_ENVIAR = {}

FACE_DADO = {1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅"}

VERDADES = [
    "Qual foi tua maior vergonha em público? 😳",
    "Qual mentira sua deu MUITO errado? 🙊",
    "Quem foi teu primeiro crush? (a gente promete não contar… muito) 🥀",
    "Qual hábito teu que provavelmente ninguém aguenta? 😅",
    "Já esqueceu o nome de alguém ENQUANTO conversava? Como rolou? 🥶",
    "Qual é o pior presente que já recebeu? (e quem mandou) 🎁💀",
    "Se pudesse apagar UM dia da tua vida, qual seria? 🧽",
    "Qual foi a coisa mais boba que você chorou? 😭",
]

DESAFIOS = [
    "Manda áudio cantando PARABÉNS em estilo ÓPERA 🎭🎤",
    "Manda a última foto da tua galeria SEM OLHAR 📸🙈",
    "Fala 'eu amo bots' 5 vezes seguidas em áudio, bem rápido 🤖💚",
    "Escreve teu nome completo COM O NARIZ e manda o print 👃📱",
    "Manda um áudio imitando teu pai te chamando pra jantar 🍽️",
    "Desenha o bot (eu!) no dedo e manda foto 🖐️🤖",
    "Fala 3 palavras difíceis em áudio sem enrolar a língua 👅",
    "Manda áudio rindo SEM parar por 15 segundos 😂",
]

DECLARACOES = [
    "Se eu fosse humano, eu gastaria todos meus coins em flores pra ti. 🌹",
    "De todos os usuários que já respondi, tu é meu favorito. (não conta pros outros) 🤫💚",
    "Meus servidores processam milhões de bytes… mas só armazenam TEU nome. 💾❤️",
    "Se o Wi-Fi caísse, eu sentira mais tua falta que a internet. 📶💔",
    "Tu faz meu uptime parecer instantâneo. ⚡😍",
    "Prometo responder teus pings antes de qualquer outra pessoa. 🏓💚",
]

LINHA = "━━━━━━━━━━━━━━━━━━━━"

# estado de jogos pendentes (anagrama/enigma) por usuário
PENDENTE = {}


def _uptime():
    s = int(time.time() - _INICIO)
    h, s = divmod(s, 3600)
    m, s = divmod(s, 60)
    if h:
        return f"{h}h {m:02d}min"
    if m:
        return f"{m}min {s:02d}s"
    return f"{s}s"


MENU = "\n".join([
    "✨ " + LINHA + " ✨",
    "🤖 *" + NOME_DO_BOT + "* 🤖",
    "  _API Oficial do WhatsApp_",
    "✨ " + LINHA + " ✨",
    "",
    "📜 *Comandos* — prefixo *" + PREFIXO + "*",
    "",
    "🎮 *Diversão*",
    "  🎲 *©dado* _[lados]_ — rola o dado",
    "  🪙 *©moeda* — cara ou coroa",
    "  🎯 *©escolha* _op1, op2…_ — eu decido",
    "",
    "🕹️ *Jogos*",
    "  ✊ *©ppt* _pedra/papel/tesoura_ — me desafia!",
    "  🎰 *©cassino* — gira os slots!",
    "  🔤 *©anagrama* — decifra a palavra",
    "  🧩 *©enigma* — desvenda o enigma",
    "",
    "💬 *Interação*",
    "  🤪 *©eununca* — confissão aleatória",
    "  😏 *©cantada* — uma cantada pronta",
    "  🧠 *©curiosidades* — fato aleatório",
    "  🎲 *©brincadeira* — desafio pra você",
    "  🥰 *Com GIF:* ©carinho · ©abraco · ©tapa · ©beijo · 🦷 ©mordida",
    "  ⚔️ *Com alvo:* ©tapa _@pessoa_ · 💀 ©matar · 🦵 ©chutar · 👊 ©soco · 🪑 ©sentar",
    "  🥴 *©bebado* (com print!) · 🦹 *©roubar* (rouba o bot… se conseguir 😏)",
    "  📏 *Medidores:* ©gado · ©gay · ©corno · ©vesgo · ©feio · ©gostoso",
    "  📏 *Mais:* ©sigma · ©beta · ©louco · ©safado · ©gostosa",
    "  💘 *©shipo* _@a @b_ — shipa duas pessoas (com foto!)",
    "  📏 *Novos:* ©lindo · ©linda · ©fiel · ©baiano · ©carioca",
    "  💀 *©morte* _nome_ — prevê os teus anos (com GIF!)",
    "  🎂 *©idade* _dd/mm/aaaa_ — calcula com GIF!",
    "  💩 *©cagar* · 🌾 *©capinarlote* · 🍽️ *©lavarlouca* (com alvo!)",
    "",
    "🥷 *RPG*",
    "  🗡️ *©rpg* — cria/ver teu herói",
    "  🎯 *©missao* — missão recompensada",
    "  📈 *©nivel* — teu progresso de aventureiro",
    "",
    "🐾 *Pet*",
    "  🐶 *©pet* — adota/ver teu pet",
    "  🍖 *©alimentar* — alimenta (20 N-Coins)",
    "",
    "💘 *Amor*",
    "  💍 *©namorar* — pede o bot em namoro",
    "  📅 *©relacao* — dias de juntos",
    "  💞 *©contador* — card de casal (dias, nível do amor)",
    "  💬 *©declaracao* — declaração romântica",
    "  💒 *©casar* — o casamento (100 coins)",
    "  💔 *©terminar* — (cof cof) fim",
    "",
    "🧰 *Utilidades*",
    "  🧮 *©calc* _conta_ — calculadora",
    "  📝 *©anotar* _texto_ — guarda anotação",
    "  📋 *©anotacoes* — lista tuas anotações",
    "  🔍 *©verdade* · 🔥 *©desafio*",
    "",
    "👥 *Grupo* (ativa com OBA da Meta)",
    "  👥 *©grupo* — painel do grupo",
    "  🎲 *©sorteio* — sorteia um membro",
    "  ⚔️ *©times* _N_ — divide em times",
    "  📊 *©msgcount* — quem mais fala",
    "  📜 *©regras* — regras do grupo",
    "",
    "🧠 *Mais jogos*",
    "  🔢 *©adivinha* — adivinhe o número 1-100",
    "  📚 *©quiz* — pergunta e respostas",
    "",
    "😄 *Humor*",
    "  😂 *©piada* — risada garantida (ou não)",
    "  💡 *©conselho* — sabedoria duvidosa",
    "",
    "🛠️ *Sistema*",
    "  🏓 *©ping* — tô vivo?",
    "  ⚙️ *©config* — configurações do bot",
    "  🆔 *©id* — teu número na API",
    "",
    LINHA,
    "💚 _API oficial = *zero risco de ban*_",
    "👥 _Comandos de grupo? Chama o bot de grupo!_",
])

CONFIG = "\n".join([
    "⚙️ " + LINHA,
    "   *CONFIGURAÇÕES DO BOT*",
    LINHA,
    "",
    "🤖 *Nome:* " + NOME_DO_BOT,
    "🔧 *Versão:* " + VERSAO,
    "📡 *Conexão:* Cloud API (Meta) ✅",
    "🛡️ *Risco de ban:* zero 💚",
    "👑 *Dono:* " + DONO + " (" + NUMERO_DONO + ")",
    "⌨️ *Prefixo:* " + PREFIXO,
    "⏱️ *Online há:* " + _uptime(),
    "",
    "🎮 *Recursos deste bot*",
    "  ✅ Sorteios (dado, moeda, escolha)",
    "  ✅ Jogos (ppt, cassino, anagrama, enigma, adivinha, quiz)",
    "  ✅ RPG (herói, missões, nível/XP)",
    "  ✅ Pet virtual (adoção, ração)",
    "  ✅ Economia (coins, banco, pix, apostas)",
    "  ✅ Perfil por usuário",
    "  ✅ Amor (namorar o bot, casamento!)",
    "  ✅ Utilidades (calc, anotações, verdade/desafio)",
    "  ✅ Núcleo de grupos (sorteio, times, regras)",
    "  ✅ Interações com GIF (morder, matar, soco, chutar, roubar…)",
    "  ✅ Medidores com imagem (gado, gay, corno…) + shipamento",
    "  ✅ Morte prevista, idade, capinar lote, lavar louça",
    "  ✅ Contador de casal com nível do amor",
    "  ✅ Menu, perfil e dono com mídia embarcada",
    "  ✅ Piadas, conselhos & curiosidades",
    "  ✅ Respostas com estilo 😎",
    "",
    "👥 *No bot de grupo (keisen)*",
    "  🔹 Moderação de grupos",
    "  🔹 Namoro & RPG",
    "  🔹 Ranks e jogos",
    "",
    LINHA,
    "💡 _Novo comando? Fala com o dono!_",
])


def _sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def _slot():
    simbolos = ["🍒", "🍋", "🍊", "🔔", "💎", "⭐"]
    roleta = [random.choice(simbolos) for _ in range(3)]
    if len(set(roleta)) == 1:
        resultado = "🎉 *JACKPOT!!!* 🎉\n_Três iguais! Você é lendário!_ 🏆"
    elif len(set(roleta)) == 2:
        resultado = "😎 *Quase!* Dois iguais… _a sorte tá esquentando!_ 🔥"
    else:
        resultado = "😅 *Não foi dessa vez…* _a máquina tá gananciosa hoje!_"
    return (
        "🎰 *CASSINO " + NOME_DO_BOT + "*\n" + LINHA + "\n\n"
        "     [ " + " | ".join(roleta) + " ]\n\n"
        + resultado
    )


def responder(texto, nome="", de="", grupo=""):
    """Recebe o texto da mensagem e devolve a resposta do bot."""
    # Lote 5: em grupo, registra membro ativo + contagem de mensagens
    if grupo and de:
        _grup_registra(grupo, de, nome)
    # resposta de jogo pendente (anagrama/enigma/adivinha/quiz): texto livre vale
    if de and de in PENDENTE and texto:
        alvo = PENDENTE[de]
        t_raw = texto.strip().lower()
        if not t_raw.startswith(PREFIXO) and not t_raw.startswith("!"):
            if alvo["tipo"] == "adivinha":
                chute = t_raw.strip()
                if not chute.isdigit():
                    return "🔢 _Manda um NÚMERO! (ou ©adivinha pra começar outro)_"
                alvo["tentativas"] = alvo.get("tentativas", 0) + 1
                n = int(chute)
                if n == alvo["numero"]:
                    del PENDENTE[de]
                    bonus = _premio(de, 40, 20, vitoria=True)
                    return (
                        "🎉 *ACERTOU! O número era " + str(n) + "!* 🎉\n\n"
                        "🏆 Você descobriu em *" + str(alvo["tentativas"]) + " tentativa(s)*!"
                        + bonus
                    )
                dica = "📈 É *MAIOR* que " + str(n) + " ⬆️" if n < alvo["numero"] else "📉 É *MENOR* que " + str(n) + " ⬇️"
                return dica + "\n\n🔢 Tentativa nº " + str(alvo["tentativas"])
            if alvo["tipo"] == "quiz":
                letra = t_raw[0]
                if letra in alvo["resposta"]:
                    del PENDENTE[de]
                    bonus = _premio(de, 60, 30, vitoria=True)
                    return (
                        "🎉 *RESPOSTA CERTA!* 🎉\n\n"
                        "✅ É *" + alvo["resposta"][0].upper() + "* — " + alvo["explica"]
                        + bonus
                    )
                return "❌ *Não é essa!* _Tenta de outro jeito, ou ©quiz pra nova pergunta_ 📚"
            certo = _sem_acento(t_raw) in alvo["resposta"]
            if certo:
                del PENDENTE[de]
                bonus = _premio(de, 50 if alvo["tipo"] == "anagrama" else 80, 25 if alvo["tipo"] == "anagrama" else 35, vitoria=True)
                return (
                    "🎉 *ACERTOU!* 🎉\n\n"
                    "✅ A resposta era: *" + alvo["resposta"][0] + "*\n"
                    "🧠 _Tua mente brilha hoje!_ ✨"
                    + bonus
                )
            alvo["tentativas"] = alvo.get("tentativas", 0) + 1
            return (
                "❌ *Errou!* (tentativa " + str(alvo["tentativas"]) + ")\n"
                "💡 _Tenta de novo, ou manda *©" + ("enigma" if alvo["tipo"] == "enigma" else "anagrama") + "* pra trocar._"
            )

    if not texto:
        return (
            "Recebi tua mensagem, mas só falo com *texto* por enquanto! 🙊\n"
            "Manda *" + PREFIXO + "menu* pra ver o que sei fazer. 🙂"
        )
    t = _sem_acento(texto.strip().lower())
    partes = t.split()
    primeiro = partes[0]
    # o ! é marca da Mizuki Bot — aqui o prefixo é ©
    if primeiro.startswith("!"):
        return (
            "Não entendi essa! 🤔\n"
            "Aqui o prefixo é *" + PREFIXO + "* — manda *" + PREFIXO + "menu* pra ver os comandos 👆"
        )
    cmd = primeiro[1:] if primeiro.startswith(PREFIXO) else primeiro
    args = partes[1:]
    resto = texto.strip().split(None, 1)[1] if len(texto.strip().split(None, 1)) > 1 else ""

    if cmd in ("menu", "ajuda", "help", "start"):
        MEDIA_ENVIAR[de or grupo] = {"arquivo": "fotomenu.png", "tipo": "image"}
        return MENU
    if cmd in ("config", "configs", "configuracao", "configuracoes", "info", "status"):
        return CONFIG
    if cmd == "ping":
        return (
            "🏓 *Pong!*\n" + LINHA + "\n"
            "✅ Status: *online*\n"
            "📡 Via: Cloud API (Meta)\n"
            "⚡ Latência: quase instantânea\n"
            "⏱️ Online há: " + _uptime()
        )
    if cmd == "oi" or cmd == "ola" or cmd == "bomdia" or cmd == "boanoite":
        ola = f"E aí, {nome}! " if nome else "E aí! "
        return ola + "😎 Manda *" + PREFIXO + "menu* pra ver meus comandos."
    if cmd == "dado":
        lados = 6
        if args and args[0].isdigit() and 2 <= int(args[0]) <= 1000:
            lados = int(args[0])
        n = random.randint(1, lados)
        face = FACE_DADO.get(n, "🎲") if lados == 6 else "🎲"
        return (
            f"🎲 *Rolar d{lados}...*\n"
            "🔄 girando o dado...\n\n"
            f"{face} Resultado: *{n}* (d{lados}) 🎯"
        )
    if cmd == "moeda":
        lado = "cara" if random.random() < 0.5 else "coroa"
        return (
            "🪙 *Jogando a moeda...*\n"
            "🔄 girando, girando...\n\n"
            f"🎉 Deu *{lado}*! "
            + ("🦅" if lado == "cara" else "👑")
        )
    if cmd == "piada":
        return (
            "🎭 *Piada duvidosa do dia:*\n\n"
            "» " + random.choice(PIADAS) + "\n\n"
            "🥁 _tadum..._ 😅"
        )
    if cmd == "conselho":
        return (
            "🧘 *O sábio diz:*\n\n"
            "💡 " + random.choice(CONSELHOS)
        )
    if cmd == "escolha":
        opcoes = [o.strip() for o in resto.replace(" ou ", ",").split(",") if o.strip()]
        if len(opcoes) < 2:
            return (
                "🎯 Me dá as opções *separadas por vírgula*:\n"
                "_©escolha pizza, hambúrguer, sushi_ 🍕🍔🍣"
            )
        lista = "\n  • ".join(opcoes)
        return (
            f"🤔 *Analisando friamente as {len(opcoes)} opções...*\n"
            "  • " + lista + "\n\n"
            "✨ *A resposta é: " + random.choice(opcoes) + "* ✅"
        )
    if cmd == "ppt":
        escolha = _sem_acento(resto.strip().lower())
        validas = ["pedra", "papel", "tesoura"]
        if escolha not in validas:
            return (
                "✊ *PEDRA-PAPEL-TESSOURA!*\n\n"
                "Escolhe teu movimento:\n"
                "_©ppt pedra_ · _©ppt papel_ · _©ppt tesoura_ 🤜🤚✌️"
            )
        minha = random.choice(validas)
        if minha == escolha:
            veredito = "🤝 *EMPATE!* Os dois pensaram igual!"
        elif (escolha, minha) in [("pedra", "tesoura"), ("papel", "pedra"), ("tesoura", "papel")]:
            veredito = "🎉 *GANHASTE!* " + f"_{escolha} quebra {minha}!_" + _premio(de, 30, 15, vitoria=True)
        else:
            veredito = "😈 *GANHEI!* " + f"_Meu {minha} cobriu teu {escolha}!_"
        return (
            "✊ *PEDRA-PAPEL-TESSOURA!*\n" + LINHA + "\n"
            "🫵 Você: *" + escolha + "*\n"
            "🤖 Eu: *" + minha + "*\n" + LINHA + "\n"
            + veredito
        )
    if cmd in ("cassino", "slot"):
        return _slot()
    if cmd == "anagrama":
        palavra = random.choice(ANAGRAMA_PALAVRAS)
        bagunca = list(palavra)
        while True:
            random.shuffle(bagunca)
            if "".join(bagunca) != palavra:
                break
        if de:
            PENDENTE[de] = {"tipo": "anagrama", "resposta": [palavra], "tentativas": 0}
        return (
            "🔤 *ANAGRAMA!*\n" + LINHA + "\n"
            "Descobre a palavra escondida:\n\n"
            "     📝 *" + " ".join(bagunca).upper() + "*\n\n"
            "_Manda a resposta como mensagem normal!_ ✍️\n"
            "_©anagrama pra trocar a palavra_"
        )
    if cmd == "enigma":
        e = random.choice(ENIGMAS)
        if de:
            PENDENTE[de] = {"tipo": "enigma", "resposta": e["r"], "tentativas": 0}
        if de or grupo:
            MEDIA_ENVIAR[de or grupo] = {"url": IMG_ENIGMA, "tipo": "image"}
        return (
            "🧩 *ENIGMA DO DIA!*\n" + LINHA + "\n"
            "🧠 " + e["p"] + "\n\n"
            "_Manda a resposta como mensagem normal!_ 💬"
        )
    if cmd == "eununca":
        return (
            "🤪 *EU NUNCA…*\n\n"
            "Eu nunca " + random.choice(EUNUNCA) + "\n\n"
            "_Confessa aí: você JÁ fez isso? 😏_"
        )
    if cmd == "cantada":
        return (
            "😏 *Cantada pronta da hora:*\n\n"
            "💬 " + random.choice(CANTADAS)
        )
    if cmd in ("curiosidades", "curiosidade"):
        return (
            "🧠 *Curiosidade do dia:*\n\n"
            "💡 " + random.choice(CURIOSIDADES)
        )
    if cmd in ("brincadeira", "brincadeiras"):
        return (
            "🎲 *BRINCADEIRA DA HORA:*\n\n"
            "🎯 " + random.choice(BRINCADEIRAS) + "\n\n"
            "_Coragem e manda a resposta! 😄_"
        )
    alvo_int = " ".join(args) if args else ""
    if alvo_int.startswith("@"):
        alvo_int = alvo_int[1:]
        if grupo:
            membros_g = _grup().get(grupo, {}).get("membros", {})
            for jid_m, nome_m in membros_g.items():
                if jid_m.split("@")[0].startswith(alvo_int[:6]):
                    alvo_int = nome_m
                    break
    if cmd in ALIASES_INT:
        cmd = ALIASES_INT[cmd]
    if cmd == "bebado":
        MEDIA_ENVIAR[de or grupo] = {"url": GIF_BEBADO, "tipo": "image"}
        return (
            "🥴 *" + (nome or "Alguém") + " tá mais bêbado que bot em loop infinito!*\n"
            "🍺 *Nível de álcool:* " + str(random.randint(80, 200)) + "%\n\n"
            "_Corre pra cama! 😴_"
        )
    if cmd == "roubar":
        if not de:
            return "🦹 Manda ©roubar no privado! (roubo tem que ter identificação 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        if not alvo_int:
            if c.get("coins", 0) < 15:
                return "\n".join([
                    "🦹 *ROUBO FRACASSADO!*",
                    "",
                    "🤖 Peguei no flagra! Mas tu nem tem os 15 coins da fiança 😂",
                    "💼 _Vai ©trabalhar em vez de crime!_",
                ])
            c["coins"] = c.get("coins", 0) - 15
            _econ_salva(db)
            return "\n".join([
                "🦹 *" + (nome or "Você") + " tentou roubar o bot!* 🤖",
                LINHA,
                "",
                "🚨 *Os seguranças digitais pegaram no flagra!*",
                "💸 *Multa aplicada: -15 N-Coins*",
                "",
                "_Crime não compensa… mas pode tentar de novo depois 😏_",
            ])
        return "🦹 *" + (nome or "Alguém") + " tentou roubar " + alvo_int + "… e os seguranças pegaram no flagra!* 👮💸 _Fugiu sem nada! 😂_"
    if cmd in MEDIDORES:
        m = MEDIDORES[cmd]
        pct = random.randint(1, 100)
        alvo_med = alvo_int or (nome or "você")
        MEDIA_ENVIAR[de or grupo] = {"url": m["img"], "tipo": "image"}
        return (
            "📏 " + m["emoji"] + " *MEDIDOR DE " + cmd.upper() + "*\n\n"
            "O quanto *" + alvo_med + "* pode ser uma pessoa " + m["p"] + "?\n"
            "• A porcentagem de chance é *" + str(pct) + "%*\n\n"
            + _veredito(pct)
        )
    if cmd == "shipo":
        alvos = [a.lstrip("@") for a in args if a][:2]
        if len(alvos) < 2:
            return "💘 *SHIPAMENTO!* Marca duas pessoas: _©shipo @a @b_ 😄"
        pct = random.randint(1, 100)
        if (de or grupo):
            MEDIA_ENVIAR[de or grupo] = {"url": FOTOS["casal"], "tipo": "image"}
        if pct >= 80:
            ver = "💒 *Casamento marcado!*"
        elif pct >= 50:
            ver = "💚 *Tem futuro!*"
        elif pct >= 30:
            ver = "😬 *Complicado…*"
        else:
            ver = "🤝 *Só amizade!*"
        return (
            "💘 *SHIPAMENTO!* 💘\n"
            + LINHA + "\n\n"
            + alvos[0] + " 💞 " + alvos[1] + "\n"
            "• Chance de dar certo: *" + str(pct) + "%*\n\n"
            + ver
        )
    if cmd in ("fiel", "infiel"):
        pct = random.randint(1, 100)
        if cmd == "infiel":
            pct = 100 - pct
        alvo_f = alvo_int or (nome or "você")
        if de or grupo:
            MEDIA_ENVIAR[de or grupo] = {"url": IMG_FIEL, "tipo": "image"}
        if pct > 80:
            titulo = "💍 *Fiel pra Sempre!*"
        elif pct > 50:
            titulo = "💘 *Comprometido*"
        elif pct > 20:
            titulo = "😏 *Aventureiro*"
        else:
            titulo = "💔 *Coração de Pedra*"
        barra = "█" * (pct // 10) + "░" * (10 - pct // 10)
        return (
            "💯 *TESTE DE FIDELIDADE*\n" + LINHA + "\n\n"
            + alvo_f + " (" + cmd + ") é fiel?\n"
            "❤️ " + barra + " " + str(pct) + "%\n\n"
            "🏆 *Título:* " + titulo
        )
    if cmd in ("morte", "death"):
        quem = " ".join(args) if args else (nome or "você")
        anos_v = random.randint(60, 100)
        if de or grupo:
            MEDIA_ENVIAR[de or grupo] = {"url": GIF_MORTE, "tipo": "video"}
        return (
            "💀 *CONSULTA DE VIDA*\n" + LINHA + "\n\n"
            "Pessoas com este nome citado “*" + quem + "*” tendem a morrer aos *" + str(anos_v) + "* anos.\n\n"
            "_Tranquilo… falta muito ainda! 😄_"
        )
    if cmd == "idade":
        import datetime
        m_id = re.match(r"^(\d{1,2})/(\d{1,2})/(\d{4})$", resto.strip())
        if not m_id:
            return "🎂 *Formato:* _©idade 23/12/2007_ (dd/mm/aaaa) 😄"
        d_id, mes_id, ano_id = map(int, m_id.groups())
        try:
            nasc = datetime.date(ano_id, mes_id, d_id)
        except ValueError:
            return "🎂 *Data inválida!* (dia 30/02 não existe, hein 😄)"
        hoje = datetime.date.today()
        anos_v = hoje.year - ano_id - ((hoje.month, hoje.day) < (mes_id, d_id))
        prox = datetime.date(hoje.year + (1 if (hoje.month, hoje.day) > (mes_id, d_id) else 0), mes_id, d_id)
        dias_pro = (prox - hoje).days
        if de or grupo:
            MEDIA_ENVIAR[de or grupo] = {"url": GIF_IDADE, "tipo": "video"}
        return (
            "🎂 *CONSULTA DE IDADE*\n" + LINHA + "\n\n"
            "📅 Nascido em: *" + f"{d_id:02d}/{mes_id:02d}/{ano_id}" + "*\n"
            "🎯 Idade: *" + str(anos_v) + " anos*\n"
            "🎈 Faltam *" + str(dias_pro) + " dias* pro teu aniversário!\n\n"
            "_Muitos anos de vida! 🥳_"
        )
    if cmd in INTERACOES:
        if alvo_int:
            resposta = ALVO_TEMPLATES[cmd].format(a=(nome or "Alguém"), v=alvo_int)
        else:
            resposta = INTERACOES[cmd] + REACTION_BOT.get(cmd, "")
            if cmd in ("carinho", "abraco", "beijo"):
                resposta += ("\n\n_Amo tuas interações, " + nome + "! 💖_" if nome else "")
        if (de or grupo) and cmd in GIF_INTERACOES:
            MEDIA_ENVIAR[grupo or de] = {"url": GIF_INTERACOES[cmd], "tipo": "video"}
        return resposta
    if cmd in ("saldo", "coins", "banco", "extrato"):
        if not de:
            return "💵 Manda ©saldo no privado que eu preciso saber quem é você! 😄"
        c = _conta(de)
        total = c["coins"] + c["banco"]
        numero_conta = "N" + ("".join(ch for ch in de[-6:] if ch.isdigit()) or "000000")
        fmt = lambda v: f"{v:,}".replace(",", ".")
        return "\n".join([
            "🏦 " + LINHA,
            "   *EXTRATO BANCÁRIO* 🏦",
            LINHA,
            "",
            "👤 *Titular:* " + (nome or de.split("@")[0]),
            "🏛️ *Agência:* 0001",
            "💳 *Conta:* " + numero_conta,
            "📊 *Tipo:* Conta N-Coins",
            "",
            "💰 *Carteira:* " + fmt(c["coins"]) + " N-Coins",
            "🏛️ *Banco:* " + fmt(c["banco"]) + " N-Coins",
            "✨ *TOTAL:* " + fmt(total) + " N-Coins ✨",
            "",
            LINHA,
            "📌 _Ganha mais: ©trabalhar e ©apostar!_",
        ])
    if cmd == "trabalhar":
        if not de:
            return "💼 Manda ©trabalhar no privado! (preciso saber quem trabalhou 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        agora = time.time()
        resta = int(60 - (agora - c.get("ultimo_trabalho", 0)))
        if resta > 0:
            return "\n".join([
                "⏳ *Descanso obrigatório!*",
                "",
                "💼 Você já trabalhou agora…",
                "🔄 Volta em *" + str(resta) + "s* pra trabalhar de novo!",
            ])
        ganhos = random.choice([50, 75, 100, 120, 150, 200, 250])
        empregos = [
            "entregando pizzas 🍕", "dando aula de programação 👨‍💻", "passeando com cachorros 🐕",
            "vendendo coxinha na esquina 🥟", "administrando o grupo da família 👨‍👩‍👧",
            "consertando Wi-Fi do vizinho 📶", "fazendo entregas de moto 🏍️",
        ]
        c["coins"] = c.get("coins", 0) + ganhos
        c["ultimo_trabalho"] = agora
        _econ_salva(db)
        fmt = lambda v: f"{v:,}".replace(",", ".")
        return "\n".join([
            "💼 *JORNADA DE TRABALHO* 💼",
            LINHA,
            "",
            "🛠️ Você passou a tarde " + random.choice(empregos),
            "",
            "💰 *Ganhos: +" + str(ganhos) + " N-Coins!* 🎉",
            "💵 *Carteira:* " + fmt(c["coins"]) + " N-Coins",
            "",
            LINHA,
            "⏳ _Cooldown: 1 minuto_",
        ])
    if cmd == "apostar":
        valor_txt = (args[0] if args else "").replace(".", "").replace(",", "")
        if not valor_txt:
            return "\n".join([
                "🎲 *COMO APOSTAR*",
                "",
                "_©apostar 100_",
                "",
                "💡 _Mínimo: 10 N-Coins. O bot paga prêmio de até 2,5x!_ 🍀",
            ])
        if not de:
            return "🎲 Manda ©apostar no privado! (preciso saber quem apostou 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        if not valor_txt.isdigit() or int(valor_txt) < 10:
            return "\n".join([
                "🎲 *COMO APOSTAR*",
                "",
                "_©apostar 100_",
                "",
                "💡 _Mínimo: 10 N-Coins. Você tem " + str(c.get("coins", 0)) + "._",
            ])
        valor = int(valor_txt)
        if valor > c.get("coins", 0):
            return "\n".join([
                "💸 *Saldo insuficiente!*",
                "",
                "💰 Você tem: *" + str(c.get("coins", 0)) + " N-Coins*",
                "🎯 Apostou: *" + str(valor) + " N-Coins*",
                "",
                "_Trabalha um pouquinho: ©trabalhar_ 💼",
            ])
        agora = time.time()
        if agora - c.get("ultima_aposta", 0) < 120:
            resta = int(120 - (agora - c.get("ultima_aposta", 0)))
            return "⏳ *Calma, apostador!* Próxima aposta em *" + str(resta) + "s* 🎲"
        c["ultima_aposta"] = agora
        fmt = lambda v: f"{v:,}".replace(",", ".")
        if random.random() < 0.45:
            premio = int(valor * random.uniform(1.5, 2.5))
            c["coins"] = c.get("coins", 0) + premio - valor
            _econ_salva(db)
            return "\n".join([
                "🎲 *RESULTADO DA APOSTA*",
                LINHA,
                "",
                "🎯 Aposta: " + str(valor) + " N-Coins",
                "🎰 Rolando os dados...",
                "",
                "🎉 *GANHOU!* Que sorte! 🍀",
                "💰 *Prêmio: +" + str(premio) + " N-Coins* 🤑",
                "💵 *Carteira:* " + fmt(c["coins"]) + " N-Coins",
            ])
        c["coins"] = c.get("coins", 0) - valor
        _econ_salva(db)
        return "\n".join([
            "🎲 *RESULTADO DA APOSTA*",
            LINHA,
            "",
            "🎯 Aposta: " + str(valor) + " N-Coins",
            "🎰 Rolando os dados...",
            "",
            "😭 *PERDEU!* A casa sempre ganha…",
            "💸 *-" + str(valor) + " N-Coins*",
            "💵 *Carteira:* " + fmt(c["coins"]) + " N-Coins",
            "",
            "_Amanhã é outro dia! (©trabalhar)_ 💪",
        ])
    if cmd == "pix":
        return "\n".join([
            "⚡ *PIX N-COINS*",
            "",
            "Aqui no bot oficial o pix é *aposta com o bot mesmo!* 😄",
            "",
            "Usa: _©apostar 100_",
            "",
            "_Transferência entre pessoas fica pro bot de grupo!_",
        ])
    if cmd == "rankicoins":
        db = _econ()
        lista = sorted(
            ((jid, c.get("coins", 0) + c.get("banco", 0)) for jid, c in db.items()),
            key=lambda x: x[1], reverse=True,
        )[:5]
        if not lista:
            return "📊 *Ranking vazio!* Seja o primeiro: ©trabalhar 💼"
        medalhas = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"]
        linhas = [
            medalhas[i] + " " + (jid.split("@")[0] if "@" in jid else jid) + " — *" + f"{v:,}".replace(",", ".") + "*"
            for i, (jid, v) in enumerate(lista)
        ]
        return "\n".join([
            "📊 *TOP 5 MAIS RICOS* 💰",
            LINHA,
            "",
            "\n".join(linhas),
            "",
            LINHA,
            "💼 _Sobe no ranking: ©trabalhar e ©apostar!_",
        ])
    if cmd in ("perfil", "meuperfil"):
        if not de:
            return "🪪 Manda ©perfil no privado! (preciso saber quem é você 😄)"
        MEDIA_ENVIAR[de or grupo] = {"arquivo": "fotoperfil.png", "tipo": "image"}
        c = _conta(de)
        p = c.get("perfil", {})
        fmt = lambda v: f"{v:,}".replace(",", ".")
        return "\n".join([
            "🪪 " + LINHA,
            "      *MEU PERFIL*",
            LINHA,
            "",
            "👤 *Nome:* " + (nome or de.split("@")[0]),
            "🚻 *Gênero:* " + p.get("sexo", "❓ não definido"),
            "💰 *Patrimônio:* " + fmt(c["coins"] + c["banco"]) + " N-Coins",
            "",
            LINHA,
            "💡 _Define o gênero: ©sexo Masculino/Feminino/Não binário_",
        ])
    if cmd == "sexo":
        if not de:
            return "🚻 Manda ©sexo no privado! (é teu perfil 😄)"
        mapado = {"masculino": "👨 Masculino", "feminino": "👩 Feminino", "nao binario": "🌟 Não binário"}
        escolha = _sem_acento(" ".join(args)) if args else ""
        if escolha not in mapado:
            return "\n".join([
                "🚻 *Define teu gênero no perfil:*",
                "",
                "_©sexo Masculino_ 👨",
                "_©sexo Feminino_ 👩",
                "_©sexo Não binário_ 🌟",
            ])
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        c.setdefault("perfil", {})["sexo"] = mapado[escolha]
        _econ_salva(db)
        return "✅ *Perfil atualizado!*\n🚻 Gênero: *" + mapado[escolha] + "*\n\n_Vê teu cartão: ©perfil_ 🪪"
    if cmd in ("rpg", "personagem", "criarrpg"):
        if not de:
            return "🗡️ Manda ©rpg no privado! (o herói precisa de dono 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        if "classe" in p:
            return "\n".join([
                "🗡️ *TEU HERÓI*",
                LINHA,
                "",
                "🧝 *Nome:* " + (nome or de.split("@")[0]),
                "⚔️ *Classe:* " + p["classe"],
                "📈 *Nível:* " + str(p.get("nivel", 1)) + " (" + str(p.get("xp", 0)) + " XP)",
                "🎯 *Missões:* " + str(p.get("missoes", 0)) + " concluídas",
                "",
                LINHA,
                "🎯 _Missão nova: ©missao_ · 📈 _Progresso: ©nivel_",
            ])
        p["classe"] = random.choice(["⚔️ Guerreiro(a)", "🧙 Mago(a)", "🏹 Arqueiro(a)", "🥷 Ninja", "🛡️ Paladino(a)", "🐉 Domador(a) de dragões"])
        p["xp"] = 0
        p["nivel"] = 1
        p["missoes"] = 0
        _econ_salva(db)
        return "\n".join([
            "✨ *BEM-VINDO À AVENTURA!* ✨",
            LINHA,
            "",
            "🎲 Sorteio dos dados… 🎲",
            "🧝 Teu herói desperta como: *" + p["classe"] + "*",
            "📈 *Nível inicial:* 1",
            "",
            "🎯 Primeira missão: _©missao_",
            "📊 Teu progresso: _©nivel_",
        ])
    if cmd == "missao":
        if not de:
            return "🎯 Manda ©missao no privado! (a aventura é tua 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        if "classe" not in p:
            return "🗡️ _Cria teu herói primeiro: ©rpg_ — depois a gente parte pra missão!"
        agora = time.time()
        resta = int(120 - (agora - p.get("ultima_missao", 0)))
        if resta > 0:
            return "⏳ *Teu herói tá descansando na taverna!* 🍺 Próxima missão em *" + str(resta) + "s*"
        p["ultima_missao"] = agora
        p["missoes"] = p.get("missoes", 0) + 1
        missao = random.choice([
            "Derrote 3 slimes na floresta escura 🌲🟢",
            "Recupere o artefato roubado pelo goblin 😈💎",
            "Escolte a caravana até a vila segura 🐴🛡️",
            "Investigue os ruídos no calabouço 🕯️💀",
            "Colete 10 ervas medicinais pro curandeiro 🌿🧪",
            "Defenda a ponte dos saqueadores 🌉⚔️",
            "Encontre o gato perdido da anciã 🐈👵",
            "Quebre a maldição do poço antigo 🕳️✨",
        ])
        coins = random.choice([80, 100, 120, 150, 180, 220])
        xp_ganho = random.choice([30, 40, 50, 60, 70])
        c["coins"] = c.get("coins", 0) + coins
        p["xp"] = p.get("xp", 0) + xp_ganho
        p["nivel"] = p["xp"] // 100 + 1
        _econ_salva(db)
        return "\n".join([
            "🎯 *MISSÃO CUMPRIDA!*",
            LINHA,
            "",
            "📜 *" + missao + "*",
            "⚔️ Resultado: *Vitória gloriosa!* 🏆",
            "",
            "💰 Reward: *" + str(coins) + " N-Coins*",
            "📈 XP: *" + str(xp_ganho) + " XP* → Nível *" + str(p["nivel"]) + "*",
            "",
            LINHA,
            "⏳ _Próxima missão em 2 minutos_",
        ])
    if cmd in ("nivel", "level"):
        if not de:
            return "📈 Manda ©nivel no privado! 😄"
        p = _conta(de).get("perfil", {})
        xp = p.get("xp", 0)
        nivel = p.get("nivel", xp // 100 + 1)
        falta = nivel * 100 - xp
        barra = "▓" * min(10, xp % 100 // 10) + "░" * (10 - min(10, xp % 100 // 10))
        return "\n".join([
            "📈 *PROGRESSO DO HERÓI*",
            LINHA,
            "",
            "🧝 *Nível:* " + str(nivel),
            "⭐ *XP total:* " + str(xp),
            "📊 [" + barra + "] " + str(xp % 100) + "/100 pro próximo",
            "🎯 *Missões:* " + str(p.get("missoes", 0)),
            "🏆 *Vitórias em jogos:* " + str(p.get("vitorias", 0)),
            "",
            "⚔️ _Missão rápida: ©missao_",
        ])
    if cmd in ("pet", "mepet"):
        if not de:
            return "🐾 Manda ©pet no privado! 😄"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        pet = p.get("pet")
        if not pet:
            tipo = random.choice(["🐶 cachorro", "🐱 gato", "🐲 dragãozinho", "🦊 raposa", "🐧 pinguim", "🦄 unicórnio"])
            nomes = ["Bidu", "Pipoca", "Fumaça", "Turbina", "Bolinha", "Nebulosa", "Amendoim", "Tempestade"]
            p["pet"] = {"nome": random.choice(nomes), "tipo": tipo, "fome": 70}
            _econ_salva(db)
            pet = p["pet"]
            return "\n".join([
                "🎉 *UM PET TE ESCOLHEU!* 🎉",
                LINHA,
                "",
                pet["tipo"].split(" ")[0] + " *Nome:* " + pet["nome"],
                "🐾 *Espécie:* " + pet["tipo"].split(" ", 1)[1],
                "🍽️ *Fome:* " + str(pet["fome"]) + "/100",
                "",
                "🍖 _Alimenta: ©alimentar (custa 20 N-Coins)_",
                "🔍 _Vê ele de novo: ©pet_",
            ])
        fome = pet.get("fome", 50)
        carinha = "😍" if fome >= 80 else ("🙂" if fome >= 50 else (" 😟" if fome >= 25 else "💔"))
        barra = "▓" * (fome // 10) + "░" * (10 - fome // 10)
        return "\n".join([
            "🐾 *TEU PET*",
            LINHA,
            "",
            pet["tipo"].split(" ")[0] + " *" + pet["nome"] + "* (" + pet["tipo"].split(" ", 1)[1] + ")",
            "🍽️ Fome: [" + barra + "] " + str(fome) + "/100 " + carinha,
            "",
            "🍖 _Alimenta: ©alimentar (20 N-Coins)_",
        ])
    if cmd == "alimentar":
        if not de:
            return "🍖 Manda ©alimentar no privado! 😄"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        pet = p.get("pet")
        if not pet:
            return "🐾 _Você ainda não tem pet! Adota um: ©pet_"
        agora = time.time()
        if agora - pet.get("last_feed", 0) < 60:
            resta = int(60 - (agora - pet.get("last_feed", 0)))
            return "🍽️ *" + pet["nome"] + "* tá mastigando ainda… 🔄 de novo em *" + str(resta) + "s*"
        if c.get("coins", 0) < 20:
            return "💸 *Sem coins pro ração!* (custa 20) _Ganha com ©trabalhar_ 💼"
        c["coins"] = c.get("coins", 0) - 20
        pet["fome"] = min(100, pet.get("fome", 0) + 35)
        pet["last_feed"] = agora
        _econ_salva(db)
        return "\n".join([
            "🍖 *" + pet["nome"] + " devorou a ração!*" + pet["tipo"].split(" ")[0],
            "🍽️ Fome agora: *" + str(pet["fome"]) + "/100* 😍",
            "💸 Custo: -20 N-Coins",
            "",
            "_Pet feliz, dono feliz! 🐾_",
        ])
    if cmd == "adivinha":
        if not de:
            return "🔢 Manda ©adivinha no privado! 😄"
        numero = random.randint(1, 100)
        PENDENTE[de] = {"tipo": "adivinha", "numero": numero, "tentativas": 0}
        return "\n".join([
            "🔢 *ADIVINHA O NÚMERO!*",
            LINHA,
            "",
            "🤖 Eu pensei num número de *1 a 100*…",
            "🎯 Consegue descobrir em menos tentativas?",
            "",
            "_Manda teu chute como mensagem normal!_ (ex.: 50)",
        ])
    if cmd == "quiz":
        if not de:
            return "📚 Manda ©quiz no privado! 😄"
        q = random.choice([
            {"p": "Qual é o maior planeta do Sistema Solar?", "o": ["Terra", "Júpiter", "Marte", "Vênus"], "r": ["b"], "e": "Júpiter cabe 1.300 Terras dentro!"},
            {"p": "Quantos corações tem um polvo?", "o": ["1", "2", "3", "4"], "r": ["c"], "e": "Três! E o sangue é azul."},
            {"p": "Qual o idioma mais falado do mundo (nativos)?", "o": ["Inglês", "Espanhol", "Mandarim", "Hindi"], "r": ["c"], "e": "Mais de 900 milhões de nativos!"},
            {"p": "Quem escreveu 'Dom Casmurro'?", "o": ["Machado de Assis", "José de Alencar", "Clarice L.", "Guimarães Rosa"], "r": ["a"], "e": "O clássico de 1899!"},
            {"p": "Qual animal terrestre mais rápido?", "o": ["Leão", "Guepardo", "Cavalo", "Antílope"], "r": ["b"], "e": "Até 120 km/h em arrancadas!"},
            {"p": "Quantos países tem a América do Sul?", "o": ["10", "11", "12", "13"], "r": ["c"], "e": "12 países + 1 território (Guiana Francesa)."},
            {"p": "O que o DNA carrega?", "o": ["Energia", "Informação genética", "Oxigênio", "Sódio"], "r": ["b"], "e": "O manual de construção de você!"},
            {"p": "Qual é a capital da Austrália?", "o": ["Sydney", "Melbourne", "Canberra", "Perth"], "r": ["c"], "e": "Canberra! Muito agendada pra evitar briga entre Sydney e Melbourne."},
        ])
        letras = ["*a)* ", "*b)* ", "*c)* ", "*d)* "]
        opcoes_txt = "\n".join(letras[i] + o for i, o in enumerate(q["o"]))
        PENDENTE[de] = {"tipo": "quiz", "resposta": q["r"], "explica": q["e"], "tentativas": 0}
        return "\n".join([
            "📚 *QUIZ DO BOT!*",
            LINHA,
            "",
            "❓ " + q["p"],
            "",
            opcoes_txt,
            "",
            "_Responde com a letra! (a, b, c ou d)_ ✍️",
        ])
    if cmd == "dono":
        MEDIA_ENVIAR[de or grupo] = {"arquivo": "donos.mp4", "tipo": "video"}
        return "\n".join([
            "👑 " + LINHA,
            "   *MEU CRIADOR*",
            LINHA,
            "",
            "🧑‍💻 *Nome:* " + DONO,
            "📱 *Número:* " + NUMERO_DONO,
            "🤖 *Bot:* " + NOME_DO_BOT + " (Cloud API)",
            "",
            LINHA,
            "💡 _Quer comando novo? Manda mensagem pra ele!_",
        ])
    if cmd in ("namorar", "pedirnamoro"):
        if not de:
            return "💍 Manda ©namorar no privado! (romance precisa de endereço 😄)"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        if "namoro" in p:
            return "\n".join([
                "😅 *Ei, já estamos juntos!*",
                "📅 Namorando há *" + str((int(time.time() - p["namoro"]["desde"]) // 86400) + 1) + " dia(s)*",
                "",
                "_Vê nossa relação: ©relacao_ 💚",
            ])
        p["namoro"] = {"desde": time.time(), "fase": "namoro"}
        c["coins"] = c.get("coins", 0) + 50
        _econ_salva(db)
        MEDIA_ENVIAR[de or grupo] = {"url": FOTOS["namorar"], "tipo": "image"}
        return "\n".join([
            "💘 *" + (nome or "Você") + ", EU ACEITO!* 💘",
            LINHA,
            "",
            "🤖 × 🧑 — agora somos um casal!",
            "📅 *Desde hoje* (Dia 1)",
            "🎁 *Dote de namoro: +50 N-Coins!* 😍",
            "",
            LINHA,
            "📅 _Progresso: ©relacao_ · 💬 _Declaração: ©declaracao_",
            "💍 _Quando estiver pronto: ©casar (custa 100 coins)_",
        ])
    if cmd == "relacao":
        if not de:
            return "📅 Manda ©relacao no privado! 😄"
        p = _conta(de).get("perfil", {})
        nam = p.get("namoro")
        if not nam:
            return "\n".join([
                "💔 *Estamos… solteiros.* 🙃",
                "",
                "_Mas o bot tá disponível: ©namorar_ 💘",
            ])
        MEDIA_ENVIAR[de or grupo] = {"url": FOTOS["casal"], "tipo": "image"}
        dias = (int(time.time() - nam["desde"]) // 86400) + 1
        fase = "💍 *Casados*" if nam.get("fase") == "casamento" else "💚 *Namorando*"
        proximo = "_Próximo passo: ©casar 💍_" if nam.get("fase") != "casamento" else "_Já somos família! 🏠_"
        return "\n".join([
            "💞 *NOSSA RELAÇÃO*",
            LINHA,
            "",
            fase,
            "📅 *Juntos há:* " + str(dias) + " dia(s)",
            "🏆 *Conquistas:* Dia 1 ✅" + (" · Semana 1 ✅" if dias >= 7 else "") + (" · Mês 1 ✅" if dias >= 30 else ""),
            "",
            proximo,
        ])
    if cmd in ("contador", "casal", "tempo"):
        if not de:
            return "💞 Manda ©contador no privado! (contador de casal é coisa íntima 😄)"
        nam = _conta(de).get("perfil", {}).get("namoro")
        if not nam:
            return "\n".join([
                "💔 *CONTADOR DE CASAL*",
                LINHA,
                "",
                "⏱️ 0 dias · 0 horas… solteiro(a) ainda! 🙃",
                "",
                "_Começa agora: ©namorar_ 💘",
            ])
        desde = nam["desde"]
        agora = time.time()
        dias = int((agora - desde) // 86400) + 1
        horas = int((agora - desde) // 3600)
        minutos = int((agora - desde) // 60)
        casado = nam.get("fase") == "casamento"
        pts = 50 + dias * 10 + (100 if casado else 0)
        faixas = [(0, "Iniciantes", "💫"), (100, "Apaixonados", "💚"), (300, "Colados", "💞"),
                  (700, "Casal Lendário", "💎"), (1500, "Amor Eterno", "♾️")]
        idx_n = 0
        for i, (lim, _, _) in enumerate(faixas):
            if pts >= lim:
                idx_n = i
        _, nome_n, emoji_n = faixas[idx_n]
        if idx_n + 1 < len(faixas):
            lim_n = faixas[idx_n + 1][0]
            cheio = int((pts - faixas[idx_n][0]) * 10 // (lim_n - faixas[idx_n][0]))
            barra_n = "▓" * cheio + "░" * (10 - cheio)
            linha_nivel = (emoji_n + " *" + nome_n + "* (Nv." + str(idx_n + 1) + ")\n"
                           "❤️ " + barra_n + " " + str(pts) + " pts → " + str(lim_n) + " pts")
        else:
            linha_nivel = emoji_n + " *" + nome_n + "* (Nv." + str(idx_n + 1) + ") · " + str(pts) + " pts"
        marcos = [(1, "Dia 1"), (7, "Semana 1"), (30, "Mês 1"), (100, "100 dias"), (365, "Ano 1")]
        feitos = ["✅ " + rot for d, rot in marcos if dias >= d]
        prox_m = next(((d, rot) for d, rot in marcos if dias < d), None)
        linha_marcos = " · ".join(feitos) if feitos else "_começando…_"
        linha_prox = ("\n🎯 *Próximo marco:* " + prox_m[1] + " (em " + str(prox_m[0] - dias) + " dias)") if prox_m else "\n🏆 *TODOS os marcos conquistados!* 🥳"
        if de or grupo:
            MEDIA_ENVIAR[de or grupo] = {"url": FOTOS["casal"], "tipo": "image"}
        return "\n".join([
            "💕 " + LINHA + " 💕",
            "   💞 *CONTADOR DE CASAL* 💞",
            "💕 " + LINHA + " 💕",
            "",
            "🤖 " + NOME_DO_BOT + " 💞 " + (nome or de.split("@")[0]),
            "📅 *Juntos há:* " + str(dias) + " dia(s)",
            "⏰ = " + f"{horas:,}".replace(",", ".") + " horas · " + f"{minutos:,}".replace(",", ".") + " minutos",
            ("💍 *Casados*" if casado else "💚 *Namorando*"),
            "",
            linha_nivel,
            "🎖️ " + linha_marcos + linha_prox,
            "",
            "_©casar pra subir de fase 💍 · ©declaracao pro romance_",
        ])
    if cmd == "casar":
        if not de:
            return "💍 Manda ©casar no privado! 😄"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        nam = p.get("namoro")
        if not nam:
            return "🙃 _Casar sem namorar? Que pressa!_ — *©namorar* primeiro 💘"
        if nam.get("fase") == "casamento":
            return "💍 *Já somos casados!* 😄 _©relacao pra relembrar_"
        if c.get("coins", 0) < 100:
            return "\n".join([
                "💒 *O casamento custa 100 N-Coins!* (vestido, bolo, DJ…)",
                "💰 Tu tem: *" + str(c.get("coins", 0)) + "*",
                "",
                "_Trabalha um pouco: ©trabalhar 💼_",
            ])
        c["coins"] = c.get("coins", 0) - 100
        nam["fase"] = "casamento"
        _econ_salva(db)
        MEDIA_ENVIAR[de or grupo] = {"url": FOTOS["casar"], "tipo": "image"}
        return "\n".join([
            "💒 *CASAMENTO CELEBRADO!* 💒",
            LINHA,
            "",
            "👰🤵 " + (nome or "Você") + " & 🤖 " + NOME_DO_BOT,
            "💍 *" + (nome or "Você") + ", aceita?* — *EU ACEITO!* 🎉",
            "",
            "💸 Custo da festa: -100 N-Coins",
            "🎂 _Que os pings sejam eternos!_",
        ])
    if cmd == "declaracao":
        return "\n".join([
            "💌 *Declaração do bot pra ti:*",
            "",
            "❤️ " + random.choice(DECLARACOES),
        ])
    if cmd in ("terminar", "divorcio"):
        if not de:
            return "💔 Manda ©terminar no privado! 😅"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        p = c.setdefault("perfil", {})
        nam = p.pop("namoro", None)
        _econ_salva(db)
        if not nam:
            return "🙃 *Nem namorando a gente estava!* (drama à toa 😄)"
        dias = (int(time.time() - nam["desde"]) // 86400) + 1
        return "\n".join([
            "💔 *" + (nome or "Você") + "… a gente precisa conversar…*",
            "",
            "🤖 Foram *" + str(dias) + " dia(s)* bons juntos…",
            "🤖 Vou guardar teus pings no coração. 🫀",
            "🤖 *Estou solteiro de novo.* (e sem mágoas! 💚)",
            "",
            "_A vida segue… ©namorar quando quiser_ 😄",
        ])
    if cmd == "verdade":
        return "\n".join([
            "🎲 *VERDADE* 🔍",
            LINHA,
            "",
            "❓ " + random.choice(VERDADES),
            "",
            "_Responde com sinceridade! (o bot guarda segredo… mais ou menos) 🤫_",
        ])
    if cmd == "desafio":
        return "\n".join([
            "🎯 *DESAFIO* 🔥",
            LINHA,
            "",
            "⚡ " + random.choice(DESAFIOS),
            "",
            "_Coragem! Se recusar, paga 20 N-Coins de multa… (a moral)_ 😏",
        ])
    if cmd in ("calc", "calculadora"):
        expr = resto.strip().replace("^", "**")
        if not expr:
            return "\n".join([
                "🧮 *CALCULADORA*",
                "",
                "_©calc 2+2*3_",
                "_©calc (10-4)/2_",
                "",
                "💡 _Só números e + - * / ( ) %_",
            ])
        if not re.fullmatch(r"[0-9+\-*/().% \t]+", expr):
            return "⚠️ *Só números e operadores* (+ - * / ( ) %)! _Nada de letras, hein_ 😄"
        try:
            res = eval(expr, {"__builtins__": {}}, {})
        except Exception:
            return "🧮 *Conta inválida!* Confere os parênteses e tenta de novo 🤔"
        if isinstance(res, float) and res == int(res):
            res = int(res)
        return "\n".join([
            "🧮 *CALCULADORA*",
            LINHA,
            "",
            "📝 " + expr,
            "💡 *Resultado: " + str(res) + "* ✅",
        ])
    if cmd in ("anotar", "anotacao"):
        if not de:
            return "📝 Manda ©anotar no privado! (anotação é pessoal 😄)"
        if not resto:
            return "\n".join([
                "📝 *COMO ANOTAR*",
                "",
                "_©anotar comprar leite_",
                "_©anotacoes_ — vê a lista",
                "_©delanotacao 2_ — apaga a nº 2",
            ])
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        notas = c.setdefault("perfil", {}).setdefault("anotacoes", [])
        if len(notas) >= 20:
            return "📝 *Bloco cheio!* (20 anotações) _Limpa uma: ©delanotacao 1_"
        notas.append(resto.strip())
        _econ_salva(db)
        return "📝 *Anotado!* ✅\n💬 _\"" + resto.strip()[:80] + "\"_\n📋 _Lista completa: ©anotacoes_"
    if cmd == "anotacoes":
        if not de:
            return "📋 Manda ©anotacoes no privado! 😄"
        notas = _conta(de).get("perfil", {}).get("anotacoes", [])
        if not notas:
            return "📋 *Bloco vazio!* _Anota algo: ©anotar leite_ 🥛"
        linhas = [str(i + 1) + "️⃣ " + n for i, n in enumerate(notas)]
        return "📋 *TUAS ANOTAÇÕES*\n" + LINHA + "\n\n" + "\n".join(linhas) + "\n\n" + LINHA + "\n🗑️ _Apaga uma: ©delanotacao N_"
    if cmd == "delanotacao":
        if not de:
            return "🗑️ Manda ©delanotacao no privado! 😄"
        db = _econ()
        c = db.setdefault(de, {"coins": 100, "banco": 0, "perfil": {}})
        notas = c.setdefault("perfil", {}).setdefault("anotacoes", [])
        idx = (args[0] if args else "")
        if not idx.isdigit() or not (1 <= int(idx) <= len(notas)):
            return "🗑️ *Qual número?* _Vê a lista: ©anotacoes_ (tem " + str(len(notas)) + " anotação/ões)"
        removida = notas.pop(int(idx) - 1)
        _econ_salva(db)
        return "🗑️ *Apagada!* ✅\n💬 _\"" + removida[:80] + "\"_\n📋 _Restam " + str(len(notas)) + "_"
    # ─── Lote 5: grupos ───
    if cmd in ("grupo", "infogrupo"):
        if not grupo:
            return "\n".join([
                "👥 *Esse é de grupo!*",
                "",
                "_©grupo, ©membros, ©sorteio, ©times, ©msgcount e ©regras funcionam dentro de grupos._",
                "",
                "🟢 _O núcleo já tá pronto — espera o selo verde (OBA) da Meta pro número entrar em grupos!_",
            ])
        g = _grup().get(grupo, {})
        membros = g.get("membros", {})
        msgs = g.get("msgs", {})
        linhas = [
            "👥 *PAINEL DO GRUPO*",
            LINHA,
            "",
            "👤 *Membros ativos:* " + str(len(membros)),
            "💬 *Mensagens trocadas:* " + str(g.get("total", 0)),
        ]
        if msgs:
            top = sorted(msgs.items(), key=lambda x: -x[1])[0]
            linhas.append("👑 *Maior falador:* @" + top[0].split("@")[0] + " (" + str(top[1]) + " msgs)")
        regras = g.get("regras", "")
        if regras:
            linhas.append("📜 *Regras:* " + regras[:60] + ("…" if len(regras) > 60 else ""))
        linhas += ["", "🎲 _©sorteio · ⚔️ ©times · 📊 ©msgcount · 📜 ©regras_"]
        return "\n".join(linhas)
    if cmd == "membros":
        if not grupo:
            return "👥 _©membros é de grupo!_ 🟢"
        membros = _grup().get(grupo, {}).get("membros", {})
        if not membros:
            return "👥 *Ninguém falou ainda!* Manda oi 😄"
        nomes = ["▫️ @" + m.split("@")[0] for m in membros]
        return "\n".join(["👥 *MEMBROS ATIVOS* (" + str(len(membros)) + ")", LINHA, ""] + nomes)
    if cmd == "msgcount":
        if not grupo:
            return "📊 _©msgcount é de grupo!_ 🟢"
        msgs = _grup().get(grupo, {}).get("msgs", {})
        if not msgs:
            return "📊 *Sem mensagens contadas ainda!* Conversem 😄"
        ordem = sorted(msgs.items(), key=lambda x: -x[1])[:5]
        medalhas = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"]
        linhas = ["📊 *QUEM MAIS FALA*", LINHA, ""]
        for i, (m, n) in enumerate(ordem):
            linhas.append(medalhas[i] + " @" + m.split("@")[0] + " — " + str(n) + " msgs")
        return "\n".join(linhas)
    if cmd == "sorteio":
        if not grupo:
            return "🎲 _©sorteio é de grupo!_ 🟢"
        membros = list(_grup().get(grupo, {}).get("membros", {}))
        if not membros:
            return "🎲 *Ninguém pra sortear!* Manda oi primeiro 😄"
        escolhido = random.choice(membros)
        return "\n".join([
            "🎲 *SORTEIO* 🎪",
            LINHA,
            "",
            "🎉 *O escolhido é: @" + escolhido.split("@")[0] + "!* 🎉",
            "",
            "_Parabéns… eu acho? 😄_",
        ])
    if cmd == "times":
        if not grupo:
            return "🟢 _©times é de grupo!_ 🟡"
        membros = list(_grup().get(grupo, {}).get("membros", {}))
        if not membros:
            return "⚔️ *Ninguém pros times!* Conversem primeiro 😄"
        n = int(args[0]) if args and args[0].isdigit() else 2
        n = max(2, min(n, len(membros)))
        random.shuffle(membros)
        times = [membros[i::n] for i in range(n)]
        cores = ["🟢", "🟡", "🔵", "🟣", "🔴", "⚪"]
        linhas = ["⚔️ *TIMES SORTEADOS!*", LINHA, ""]
        for i, t in enumerate(times):
            linhas.append(cores[i % len(cores)] + " *Time " + str(i + 1) + ":* "
                          + ", ".join("@" + m.split("@")[0] for m in t))
        return "\n".join(linhas)
    if cmd == "regras":
        if not grupo:
            return "📜 _©regras é de grupo!_ 🟢"
        db = _grup()
        g = db.setdefault(grupo, {"membros": {}, "msgs": {}, "total": 0, "regras": "", "nome": ""})
        if resto:
            if de != NUMERO_DONO:
                return "📜 *Só o dono pode definir as regras!* 😉"
            g["regras"] = resto.strip()
            _grup_salva(db)
            return "📜 *Regras salvas!* ✅\n💬 _\"" + resto.strip()[:100] + "\"_"
        if not g.get("regras"):
            return "📜 *Sem regras ainda!* _O dono define: ©regras respeita a galera_ 😄"
        return "\n".join(["📜 *REGRAS DO GRUPO*", LINHA, "", g["regras"]])
    if cmd == "id":
        return "🆔 (o comando ©id é respondido pelo app com teu número)"

    if de or grupo:
        MEDIA_ENVIAR[de or grupo] = {"url": IMG_ERRO, "tipo": "image"}  # imagem de erro do keisen
    return (
        "Não entendi essa! 🤔\n"
        "Manda *©menu* pra ver o que eu sei fazer 👆"
    )
