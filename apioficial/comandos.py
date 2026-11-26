"""comandos.py — cérebro puro do bot oficial (sem depender de rede).

responder(texto, nome="", de="") -> str  ·  funções puras para fácil teste.
Prefixo PRINCIPAL: ©  (o ! é marca da Mizuki Bot — não usado aqui).
Aceita também sem prefixo (conveniência) e ignora acento/caixa.
Mensagens estilizadas para o WhatsApp (*negrito*, _itálico_).
"""
import os
import random
import time
import unicodedata

VERSAO = "1.3.0"
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
}

FACE_DADO = {1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅"}

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
    "  🥰 *©carinho* · 🤗 *©abraco* · 👋 *©tapa* · 😘 *©beijo*",
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
    "  ✅ Jogos (ppt, cassino, anagrama, enigma)",
    "  ✅ Interações (carinho, abraço, tapa, beijo)",
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


def responder(texto, nome="", de=""):
    """Recebe o texto da mensagem e devolve a resposta do bot."""
    # resposta de jogo pendente (anagrama/enigma): qualquer texto do usuário vale
    if de and de in PENDENTE and texto:
        alvo = PENDENTE[de]
        t_raw = texto.strip().lower()
        if not t_raw.startswith(PREFIXO) and not t_raw.startswith("!"):
            certo = _sem_acento(t_raw) in alvo["resposta"]
            if certo:
                del PENDENTE[de]
                return (
                    "🎉 *ACERTOU!* 🎉\n\n"
                    "✅ A resposta era: *" + alvo["resposta"][0] + "*\n"
                    "🧠 _Tua mente brilha hoje!_ ✨"
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
            veredito = "🎉 *GANHASTE!* " + f"_{escolha} quebra {minha}!_"
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
    if cmd in ("brincadeira", "brincadeiras", "desafio"):
        return (
            "🎲 *BRINCADEIRA DA HORA:*\n\n"
            "🎯 " + random.choice(BRINCADEIRAS) + "\n\n"
            "_Coragem e manda a resposta! 😄_"
        )
    if cmd in INTERACOES:
        resp = INTERACOES[cmd]
        if cmd in ("carinho", "abraco", "beijo"):
            return resp + ("\n\n_Amo tuas interações, " + nome + "! 💖_" if nome else "")
        return resp
    if cmd == "id":
        return "🆔 (o comando ©id é respondido pelo app com teu número)"

    return (
        "Não entendi essa! 🤔\n"
        "Manda *" + PREFIXO + "menu* pra ver o que eu sei fazer 👆"
    )
