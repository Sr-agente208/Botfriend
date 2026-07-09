# 🪷 WHITE LOTUS — Telegram Edition

Adaptação do bot WhatsApp para Telegram usando [Telegraf](https://telegraf.js.org/).

## Configurar no Railway

Variáveis de ambiente obrigatórias:

| Variável | O que é |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Token do bot (obter em [@BotFather](https://t.me/BotFather)) |
| `GROQ_API_KEY` | Key da Groq (para ©gpt, ©gemini, ©signo, ©nick) |
| `URL_API_PLAY` | URL da API de música (para ©play) — opcional |

## Como obter o token

1. Abra o Telegram e fale com [@BotFather](https://t.me/BotFather)
2. Mande `/newbot`
3. Escolha um nome e um username (ex: `@WhiteLotusBot`)
4. Copie o token que ele te mandar
5. Cole como `TELEGRAM_BOT_TOKEN` no Railway

## Comandos disponíveis

| Comando | Função |
|---|---|
| `©menu` | Lista de comandos |
| `©gpt <texto>` | Chat com IA (Groq) |
| `©gemini <texto>` | Chat com IA (Groq) |
| `©signo <signo>` | Previsão astrológica |
| `©traduzir <idioma>\|<texto>` | Tradução automática |
| `©nick <nome>` | Gerador de nicks |
| `©play <música>` | Baixa e envia música |
| `©vidente` | Previsão mística |
| `©conselho` | Conselho aleatório |
| `©cantada` | Cantada |
| `©petadotar <nome>` | Adota um pet |
| `©pet` | Ver status do pet |
| `©petalimentar` | Alimentar pet |
| `©petbrincar` | Brincar com pet |
| `©pettreinar` | Treinar pet |
| `©petabandonar` | Abandonar pet |
| `©ping` | Testa se o bot está online |
| `©info` | Info do bot |

## Deploy no Railway

1. No Railway, aponte pro repositório `Sr-agente208/Botfriend`
2. Selecione a branch **`telegram`**
3. Adicione as variáveis de ambiente acima
4. O `start` já está configurado para `node ARQUIVES/connect-telegram.js`
