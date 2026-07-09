const { Telegraf, Context } = require('telegraf');
const express = require('express');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

// ============================================================
// WHITE LOTUS — TELEGRAM EDITION
// Adaptação do bot WhatsApp para Telegram via Telegraf
// ============================================================

const TOKEN_TG = process.env.TELEGRAM_BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const PREFIX = '©';

if (!TOKEN_TG) {
    console.error(chalk.red('[ERRO] TELEGRAM_BOT_TOKEN não definido nas variáveis de ambiente!'));
    process.exit(1);
}

const bot = new Telegraf(TOKEN_TG);

// ====== SERVIDOR WEB (Railway precisa de uma porta aberta) ======
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>WHITE LOTUS — Telegram</title>
            <style>
                body { font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #1a1a1a; color: #fff; }
                .container { background: #2d2d2d; padding: 2.5rem; border-radius: 15px; text-align: center; max-width: 450px; width: 90%; border: 1px solid #444; }
                h1 { color: #fff; font-size: 2rem; letter-spacing: 2px; }
                .status { margin-top: 1rem; font-weight: bold; color: #00ffcc; letter-spacing: 1px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🪷 WHITE LOTUS</h1>
                <p style="color:#888">Telegram Edition</p>
                <div class="status">✅ Bot Online</div>
                <p style="margin-top:1.5rem; color:#666; font-size:0.85rem">Prefix: <strong style="color:#00ffcc">${PREFIX}</strong></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(chalk.magenta(`[WEB] Servidor rodando na porta ${PORT}`));
});

// ====== HELPERS ======
function getTgFileUrl(fileId) {
    return `https://api.telegram.org/file/bot${TOKEN_TG}/${fileId}`;
}

async function getFilePath(bot, fileId) {
    const r = await axios.get(`https://api.telegram.org/bot${TOKEN_TG}/getFile?file_id=${fileId}`);
    return r.data.result.file_path;
}

// Converte ctx do Telegraf em objeto compatível com keisen.js
async function buildContexto(ctx) {
    const msg = ctx.message || ctx.channelPost || ctx.callbackQuery?.message;
    if (!msg) return null;

    const chatId = String(msg.chat.id);
    const isGroup = msg.chat.type === 'group' || msg.chat.type === 'supergroup';
    const senderId = String(msg.from?.id || '');
    const pushname = msg.from?.first_name || 'Usuário';
    const text = msg.text || msg.caption || '';
    const isCmd = text.startsWith(PREFIX);

    const args = isCmd ? text.slice(PREFIX.length).trim().split(/\s+/) : text.split(/\s+/);
    const command = isCmd ? (args.shift() || '').toLowerCase() : null;
    const q = args.join(' ');

    // Helpers de envio adaptados pro Telegram
    const reply = async (texto) => {
        try {
            await ctx.reply(String(texto), { parse_mode: 'Markdown' });
        } catch {
            await ctx.reply(String(texto));
        }
    };

    const reagir = async (emoji) => {
        // Telegram não tem reação nativa via Telegraf v4 — manda emoji como mensagem curta
        try {
            const m = await ctx.reply(emoji);
            setTimeout(() => ctx.deleteMessage(m.message_id).catch(() => {}), 2000);
        } catch {}
    };

    const mention = async (texto) => {
        await reply(texto);
    };

    const isMedia = !!(msg.photo || msg.video || msg.audio || msg.voice || msg.document || msg.sticker);
    const isQuotedImage = !!(msg.reply_to_message?.photo);
    const isQuotedVideo = !!(msg.reply_to_message?.video);
    const isQuotedAudio = !!(msg.reply_to_message?.audio || msg.reply_to_message?.voice);
    const isQuotedDocument = !!(msg.reply_to_message?.document);
    const isQuotedSticker = !!(msg.reply_to_message?.sticker);

    const from = chatId;
    const sender = senderId;

    return {
        ctx, msg, chatId, isGroup, senderId, pushname,
        text, isCmd, command, q, args,
        reply, reagir, mention,
        isMedia, isQuotedImage, isQuotedVideo, isQuotedAudio, isQuotedDocument, isQuotedSticker,
        from, sender,
        PREFIX,
    };
}

// ====== COMANDOS EMBUTIDOS (núcleo do bot) ======
async function processarComando(contexto) {
    const {
        ctx, command, q, reply, reagir, from, sender,
        isGroup, pushname, isMedia, msg,
        isQuotedImage, isQuotedVideo, isQuotedAudio, isQuotedDocument,
        PREFIX
    } = contexto;

    const prefix = PREFIX;
    const setting = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json'));
    const { NomeDoBot, ownerName, ownerNumber } = setting;

    const groqKey = process.env.GROQ_API_KEY;

    switch (command) {

        // ── INFO ──────────────────────────────────────────
        case 'ping':
            await reply(`🏓 *Pong!*\n🪷 WHITE LOTUS — Telegram Edition`);
            break;

        case 'menu': case 'start': case 'ajuda':
            await reply(`🪷 *WHITE LOTUS — TELEGRAM*\n\nPrefix: \`${prefix}\`\n\n*🤖 IA & TEXTO*\n${prefix}gpt <pergunta>\n${prefix}gemini <pergunta>\n${prefix}signo <signo>\n${prefix}traduzir <idioma> | <texto>\n${prefix}nick <nome>\n\n*🎵 MÍDIA*\n${prefix}play <música>\n\n*😄 ZOEIRA*\n${prefix}vidente\n${prefix}conselho\n${prefix}cantada\n\n*🎒 PETS*\n${prefix}petadotar <nome>\n${prefix}pet\n${prefix}petalimentar\n${prefix}petbrincar\n${prefix}pettreinar\n\n*⚙️ UTIL*\n${prefix}ping\n${prefix}info\n${prefix}traduzir`);
            break;

        case 'info':
            await reply(`🪷 *WHITE LOTUS*\n\n🤖 Bot: ${NomeDoBot}\n👤 Dono: ${ownerName}\n💬 Plataforma: *Telegram*\n⚡ Prefix: \`${prefix}\``);
            break;

        // ── IA (Groq) ─────────────────────────────────────
        case 'gpt': case 'gemini': case 'ia':
            if (!q) return reply(`Use: ${prefix}${command} <sua pergunta>`);
            if (!groqKey) return reply('❌ GROQ_API_KEY não configurada no Railway.');
            try {
                await reagir('🤔');
                const res = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                    model: 'llama-3.3-70b-versatile',
                    messages: [{ role: 'user', content: q }]
                }, { headers: { Authorization: `Bearer ${groqKey}` }, timeout: 30000 });
                await reply(res.data?.choices?.[0]?.message?.content || '❌ Sem resposta.');
            } catch (e) {
                console.error(e?.response?.data || e);
                await reply('❌ Erro ao processar. Tente novamente.');
            }
            break;

        case 'signo':
            if (!q) return reply(`Use: ${prefix}signo <nome do signo>`);
            if (!groqKey) return reply('❌ GROQ_API_KEY não configurada no Railway.');
            try {
                await reagir('🔮');
                const res = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: 'Você é um astrólogo pop, prático e acolhedor. Use linguagem descontraída, parágrafos curtos e emojis moderados. Trate o usuário pelo nome. Inclua obrigatoriamente um conselho e um número da sorte no final.' },
                        { role: 'user', content: `Gere a previsão astrológica de hoje para ${pushname}, que é do signo de ${q}.` }
                    ],
                    temperature: 0.9
                }, { headers: { Authorization: `Bearer ${groqKey}` }, timeout: 20000 });
                const texto = res.data?.choices?.[0]?.message?.content || '❌ Sem resposta.';
                await reply(`🔮 *Signo: ${q}*\n\n${texto}`);
            } catch (e) {
                await reply('Os astros estão nublados por aqui... Tente em instantes! 🌌');
            }
            break;

        case 'traduzir':
            if (!q) return reply(`Use: ${prefix}traduzir <idioma> | <texto>\nEx: ${prefix}traduzir en | bom dia`);
            try {
                let idioma = 'pt', texto = q;
                if (q.includes('|')) { const p = q.split('|'); idioma = p[0].trim(); texto = p.slice(1).join('|').trim(); }
                const res = await axios.get('https://translate.googleapis.com/translate_a/single', {
                    params: { client: 'gtx', sl: 'auto', tl: idioma, dt: 't', q: texto }, timeout: 15000
                });
                const traduzido = res.data[0].map(p => p[0]).join('');
                const detectado = res.data[2];
                await reply(`🌐 *Tradução* (${detectado} → ${idioma})\n\n${traduzido}`);
            } catch (e) { await reply('❌ Erro ao traduzir.'); }
            break;

        case 'nick': case 'gerarnick':
            if (!q) return reply(`Use: ${prefix}nick <nome base>`);
            if (!groqKey) return reply('❌ GROQ_API_KEY não configurada.');
            try {
                const res = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: 'Você gera nicknames estilizados usando símbolos Unicode. Responda APENAS com uma lista numerada de 8 nicks, sem explicações.' },
                        { role: 'user', content: `Gere 8 nicks estilizados baseados em: ${q}` }
                    ], temperature: 1
                }, { headers: { Authorization: `Bearer ${groqKey}` }, timeout: 20000 });
                await reply(`✨ *Gerador de Nicks*\n\n${res.data?.choices?.[0]?.message?.content}`);
            } catch (e) { await reply('❌ Erro ao gerar nicks.'); }
            break;

        // ── PLAY (música) ─────────────────────────────────
        case 'play': case 'p':
            if (!q) return reply(`Use: ${prefix}play <nome da música>`);
            try {
                await reagir('🎵');
                const urlApiPlay = process.env.URL_API_PLAY;
                if (!urlApiPlay) return reply('❌ URL_API_PLAY não configurada no Railway.');
                const res = await axios.post(urlApiPlay, { chatId: from, busca: q }, { timeout: 30000 });
                const dados = res.data;
                if (!dados || dados.status === 'error' || !dados.linkAudio) {
                    return reply(dados?.texto || '❌ Não foi possível processar.');
                }
                await reply(dados.texto);
                await ctx.replyWithAudio({ url: dados.linkAudio });
            } catch (e) { await reply('❌ Erro ao buscar música.'); }
            break;

        // ── ZOEIRA ────────────────────────────────────────
        case 'vidente': case 'futuro': case 'previsao': {
            const previsoes = [
                '🪷 Os astros sussurram que algo bom está prestes a cruzar seu caminho.',
                '🪷 Uma decisão que você anda enrolando vai se resolver sozinha.',
                '🪷 Cuidado com promessas vazias — nem tudo que reluz é lótus.',
                '🪷 Uma conversa antiga vai voltar à tona. Escute mais do que fala.',
                '🪷 Seu instinto está certo dessa vez. Confie nele.',
                '🪷 Alguém está pensando em você nesse exato momento.',
                '🪷 Um ciclo está se encerrando — e isso é bom.',
                '🪷 Você está mais perto de uma resposta do que imagina.',
            ];
            await reply(`🔮 *Vidente*\n\n${previsoes[Math.floor(Math.random() * previsoes.length)]}`);
            break;
        }

        case 'conselho': case 'conselhos': {
            const conselhos = [
                '💡 Não adie para amanhã o que pode te fazer bem hoje.',
                '💡 Quem aprende com os erros dos outros economiza muito tempo.',
                '💡 Silêncio às vezes é a resposta mais inteligente.',
                '💡 Cuide de você primeiro. Não é egoísmo, é necessidade.',
                '💡 O processo importa tanto quanto o resultado.',
            ];
            await reply(conselhos[Math.floor(Math.random() * conselhos.length)]);
            break;
        }

        case 'cantada': {
            const cantadas = [
                '😏 Você tem GPS? Porque me perdi nos seus olhos.',
                '😏 Você é química? Porque temos uma reação.',
                '😏 É cansativo ser assim tão bonito(a)?',
                '😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.',
            ];
            await reply(cantadas[Math.floor(Math.random() * cantadas.length)]);
            break;
        }

        // ── PETS ──────────────────────────────────────────
        case 'petadotar': case 'pet': case 'petalimentar':
        case 'petbrincar': case 'pettreinar': case 'petabandonar': {
            const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
            const petsDB = fs.existsSync(petsPath) ? JSON.parse(fs.readFileSync(petsPath)) : {};
            const especiesPet = ["Cachorro","Gato","Coelho","Raposa","Coruja","Lince","Corvo","Dragãozinho","Fênix Bebê"];

            function petBarra(a, m, e) {
                const t=10, c=Math.max(0,Math.min(t,Math.round((a/m)*t)));
                return e.repeat(c)+'⬜'.repeat(t-c);
            }
            function petXpN(n) { return n*100; }
            function petGanharXp(pet, xp) {
                pet.xp += xp;
                let subiu = false;
                while(pet.xp >= petXpN(pet.nivel)) { pet.xp -= petXpN(pet.nivel); pet.nivel += 1; subiu = true; }
                return subiu;
            }
            function petDecaimento(pet) {
                const agora = Date.now();
                pet.fome = Math.max(0, Math.round(pet.fome - (agora - pet.ultimaAlimentacao)/3600000*2));
                pet.felicidade = Math.max(0, Math.round(pet.felicidade - (agora - pet.ultimoBrincar)/3600000*2));
            }

            if (command === 'petadotar') {
                if (petsDB[sender]) return reply(`❌ Você já tem um pet (*${petsDB[sender].nome}*).`);
                if (!q) return reply(`Use: ${prefix}petadotar <nome>`);
                const especie = especiesPet[Math.floor(Math.random()*especiesPet.length)];
                const agora = Date.now();
                petsDB[sender] = { nome: q, especie, nivel: 1, xp: 0, fome: 80, felicidade: 80, ultimaAlimentacao: agora, ultimoBrincar: agora };
                fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`🐾 Você adotou um(a) *${especie}* chamado(a) *${q}*!\nUse ${prefix}pet pra ver o status.`);
            } else if (command === 'pet') {
                const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com ${prefix}petadotar <nome>.`);
                petDecaimento(pet); fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`🐾 *${pet.nome}* (${pet.especie})\n⭐ Nível ${pet.nivel} | XP ${pet.xp}/${petXpN(pet.nivel)}\n🍖 Fome: ${pet.fome}/100\n${petBarra(pet.fome,100,'🟠')}\n😺 Felicidade: ${pet.felicidade}/100\n${petBarra(pet.felicidade,100,'💗')}`);
            } else if (command === 'petalimentar') {
                const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com ${prefix}petadotar <nome>.`);
                petDecaimento(pet); pet.fome = Math.min(100, pet.fome+30); pet.ultimaAlimentacao = Date.now();
                const s = petGanharXp(pet, 10); fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`🍖 Você alimentou *${pet.nome}*! Fome: ${pet.fome}/100${s?'\n⭐ Subiu de nível! Nível '+pet.nivel:''}`);
            } else if (command === 'petbrincar') {
                const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com ${prefix}petadotar <nome>.`);
                petDecaimento(pet); pet.felicidade = Math.min(100, pet.felicidade+30); pet.ultimoBrincar = Date.now();
                const s = petGanharXp(pet, 10); fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`🎾 Você brincou com *${pet.nome}*! Felicidade: ${pet.felicidade}/100${s?'\n⭐ Subiu de nível! Nível '+pet.nivel:''}`);
            } else if (command === 'pettreinar') {
                const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com ${prefix}petadotar <nome>.`);
                petDecaimento(pet);
                if (pet.fome < 15 || pet.felicidade < 15) return reply('❌ Pet com fome/cansaço. Alimente e brinque primeiro.');
                pet.fome = Math.max(0,pet.fome-10); pet.felicidade = Math.max(0,pet.felicidade-10);
                const s = petGanharXp(pet, 30); fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`💪 Treinou com *${pet.nome}* e ganhou XP!${s?'\n⭐ Subiu de nível! Nível '+pet.nivel:''}`);
            } else if (command === 'petabandonar') {
                if (!petsDB[sender]) return reply('Você não tem pet.');
                const nome = petsDB[sender].nome; delete petsDB[sender];
                fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));
                await reply(`💔 Você deixou *${nome}* ir.`);
            }
            break;
        }

        default:
            if (command) await reply(`❓ Comando desconhecido: \`${prefix}${command}\`\nVeja ${prefix}menu`);
            break;
    }
}

// ====== HANDLER PRINCIPAL ======
bot.on('message', async (ctx) => {
    try {
        const contexto = await buildContexto(ctx);
        if (!contexto) return;
        if (!contexto.isCmd) return;
        await processarComando(contexto);
    } catch (e) {
        console.error(chalk.red('[ERRO handler]:'), e);
        try { await ctx.reply('❌ Ocorreu um erro interno.'); } catch {}
    }
});

// ====== START ======
bot.launch().then(() => {
    console.log(chalk.green('🪷 [WHITE LOTUS] Bot Telegram online!'));
    console.log(chalk.cyan(`[PREFIX] ${PREFIX}`));
}).catch(err => {
    console.error(chalk.red('[ERRO launch]:'), err);
    process.exit(1);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
