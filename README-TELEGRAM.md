# 🪷 WHITE LOTUS — Telegram Edition

Adaptação do bot WhatsApp para Telegram usando [Telegraf](https://telegraf.js.org/).

## Configurar no Railway

Variáveis de ambiente obrigatórias:

| Variável | O que é |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Token do bot (obter em [@BotFather](https://t.me/BotFather)) |
| `GROQ_API_KEY` | Key da Groq (para ©gpt, ©gemini, ©signo, ©nick) |
| `URL_API_PLAY` | URL da API de música (para ©play) — opcional |
| `TELEGRAM_API_ROOT` | Opcional; endereço do Bot API local para baixar/enviar mídia acima dos limites da API pública |
| `MAX_GERARLINK_MB` | Opcional; tamanho máximo do `gerarlink` (padrão: 500 MB; limitado pelos hosts de upload) |

### Arquivos maiores que 20 MB no /gerarlink

A API pública do Telegram limita a 20 MB o download de arquivos enviados diretamente ao bot. O comando agora aceita uploads de até `MAX_GERARLINK_MB` (500 MB por padrão) quando a origem é um link HTTPS direto: `/gerarlink https://.../arquivo.mp4`. Para baixar uma mídia maior enviada pelo próprio Telegram, é necessário executar um servidor local do Telegram Bot API e configurar `TELEGRAM_API_ROOT` com o endereço dele (definir a variável sem esse servidor não remove o limite). Os limites finais também dependem dos provedores de hospedagem usados para gerar o link.

### Reproduzir episódios no próprio Telegram

`/assistir <anime>` pesquisa o catálogo, mostra os episódios em botões e tenta enviar o arquivo como vídeo no chat. O envio nativo depende do Meus Animes disponibilizar um MP4 direto; páginas que só oferecem HLS/servidor externo continuam com o botão para abrir o episódio no site. A API pública do Telegram tem limite de envio de vídeo; para episódios grandes (como 171 MB), execute um Bot API local e configure `TELEGRAM_API_ROOT` com o endereço dele. A variável sozinha não instala nem inicia esse servidor.

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
