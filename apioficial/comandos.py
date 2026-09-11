"""comandos.py — cérebro puro do bot oficial (sem depender de rede).

responder(texto, nome) -> str  ·  funções puras para fácil teste.
Aceita comandos com ou sem "!" e ignora diferença de acento/caixa.
"""
import random
import unicodedata

PIADAS = [
    "Por que o livro de matemática vive triste? Porque ele tem muitos problemas. 📘😢",
    "O que o pato falou para a pata? Vem quá. 🦆",
    "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano. 🐊",
    "Qual é o contrário de volátil? Vem cá, sobrinho. 😂",
    "O que o zero disse para o oito? Belo cinto! 🥁",
    "Por que a plantinha não foi atendida no banco? Porque só tinha caule. 🌱",
    "Qual o cúmulo da paciência? Enxugar gelo com toalha de papel. 🧊",
    "O que o Hippie disse para o do bar? A gente se vê na maconha. 🙃 (perdão, era pra ser 'a gente se vê')",
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

MENU = (
    "🤖 *Botfriend Oficial* (Cloud API da Meta)\n\n"
    "Comandos disponíveis:\n"
    "• *!ping* — eu tô vivo\n"
    "• *!dado* [lados] — rola um dado (padrão 6)\n"
    "• *!moeda* — cara ou coroa\n"
    "• *!piada* — uma piada (de qualidade duvidosa)\n"
    "• *!conselho* — sabedoria duvidosa\n"
    "• *!escolha* opção1, opção2, ... — eu decido por você\n"
    "• *!id* — seu número no formato da API\n\n"
    "_Este bot roda na API oficial do WhatsApp (sem risco de ban!). 💚_\n"
    "_Comandos de grupo (namorar, rpg, ranks) continuam no bot de grupo._"
)


def _sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def responder(texto, nome=""):
    """Recebe o texto da mensagem e devolve a resposta do bot."""
    if not texto:
        return (
            "Recebi tua mensagem, mas só falo com *texto* por enquanto! "
            "Manda *!menu* pra ver o que sei fazer. 🙂"
        )
    t = _sem_acento(texto.strip().lower())
    partes = t.split()
    cmd = partes[0].lstrip("!")
    args = partes[1:]
    resto = texto.strip().split(None, 1)[1] if len(texto.strip().split(None, 1)) > 1 else ""

    if cmd in ("menu", "ajuda", "help", "start"):
        return MENU
    if cmd == "ping":
        return "🏓 Pong! Tô online via API oficial da Meta."
    if cmd == "oi" or cmd == "ola" or cmd == "bomdia" or cmd == "boanoite":
        ola = f"E aí, {nome}! " if nome else "E aí! "
        return ola + "Manda *!menu* pra ver meus comandos. 😎"
    if cmd == "dado":
        lados = 6
        if args and args[0].isdigit() and 2 <= int(args[0]) <= 1000:
            lados = int(args[0])
        return f"🎲 Você rolou *{random.randint(1, lados)}* (d{lados})"
    if cmd == "moeda":
        return "🪙 Deu *cara*!" if random.random() < 0.5 else "🪙 Deu *coroa*!"
    if cmd == "piada":
        return random.choice(PIADAS)
    if cmd == "conselho":
        return "💡 " + random.choice(CONSELHOS)
    if cmd == "escolha":
        opcoes = [o.strip() for o in resto.replace(" ou ", ",").split(",") if o.strip()]
        if len(opcoes) < 2:
            return "Me dá as opções separadas por vírgula: *!escolha pizza, hambúrguer, sushi* 🍕"
        return f"🤔 Analisando friamente... a resposta é: *{random.choice(opcoes)}*"
    if cmd == "id":
        return "🆔 (o comando !id é respondido pelo app com teu número)"

    return (
        "Não entendi essa! 🤷‍♂️\n"
        "Manda *!menu* pra ver o que eu sei fazer."
    )
