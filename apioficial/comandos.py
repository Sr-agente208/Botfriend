"""comandos.py — cérebro puro do bot oficial (sem depender de rede).

responder(texto, nome) -> str  ·  funções puras para fácil teste.
Aceita comandos com ou sem "!" e ignora diferença de acento/caixa.
Mensagens estilizadas para o WhatsApp (*negrito*, _itálico_, ~riscado~).
"""
import os
import random
import time
import unicodedata

VERSAO = "1.2.0"
_INICIO = time.time()
# identidade igual ao bot de grupo (DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json)
NOME_DO_BOT = os.environ.get("NOME_DO_BOT", "WHITE LOTUS")
DONO = os.environ.get("DONO_NOME", "Sr-agente208")
NUMERO_DONO = os.environ.get("DONO_NUMERO", "5511986059638")

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

FACE_DADO = {1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅"}

LINHA = "━━━━━━━━━━━━━━━━━━━━"


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
    "📜 *Comandos*",
    "",
    "🎮 *Diversão*",
    "  🎲 *!dado* _[lados]_ — rola o dado",
    "  🪙 *!moeda* — cara ou coroa",
    "  🎯 *!escolha* _op1, op2…_ — eu decido",
    "",
    "😄 *Humor*",
    "  😂 *!piada* — risada garantida (ou não)",
    "  💡 *!conselho* — sabedoria duvidosa",
    "",
    "🛠️ *Sistema*",
    "  🏓 *!ping* — tô vivo?",
    "  ⚙️ *!config* — configurações do bot",
    "  🆔 *!id* — teu número na API",
    "",
    LINHA,
    "💚 _API oficial = *zero risco de ban*_",
    "👥 _Grupo (namorar/rpg) = bot de grupo_",
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
    "⌨️ *Prefixos:* ! e ©",
    "⏱️ *Online há:* " + _uptime(),
    "",
    "🎮 *Recursos ativos*",
    "  ✅ Sorteios (dado, moeda, escolha)",
    "  ✅ Piadas & conselhos",
    "  ✅ Respostas com estilo 😎",
    "  🚫 Moderação de grupo — _bot de grupo_",
    "  🚫 Namoro/RPG — _bot de grupo_",
    "",
    LINHA,
    "💡 _Novo comando? Fala com o dono!_",
])


def _sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def responder(texto, nome=""):
    """Recebe o texto da mensagem e devolve a resposta do bot."""
    if not texto:
        return (
            "Recebi tua mensagem, mas só falo com *texto* por enquanto! 🙊\n"
            "Manda *!menu* pra ver o que sei fazer. 🙂"
        )
    t = _sem_acento(texto.strip().lower())
    partes = t.split()
    cmd = partes[0].lstrip("!©")
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
        return ola + "😎 Manda *!menu* pra ver meus comandos."
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
                "_!escolha pizza, hambúrguer, sushi_ 🍕🍔🍣"
            )
        lista = "\n  • ".join(opcoes)
        return (
            f"🤔 *Analisando friamente as {len(opcoes)} opções...*\n"
            "  • " + lista + "\n\n"
            "🤔 *Analisando friamente...*\n\n"
            "✨ A resposta é: *" + random.choice(opcoes) + "* ✅"
        )
    if cmd == "id":
        return "🆔 (o comando !id é respondido pelo app com teu número)"

    return (
        "Não entendi essa! 🤔\n"
        "Manda *!menu* pra ver o que eu sei fazer 👆"
    )
