const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const { Jimp, loadFont, HorizontalAlign, VerticalAlign, measureTextHeight } = require('jimp');
const { SANS_64_BLACK } = require('jimp/fonts');
const archiver = require('archiver');

// ============================================================
// WHITE LOTUS — TELEGRAM EDITION
// ============================================================

const TOKEN_TG = process.env.TELEGRAM_BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const PREFIX = '©';

if (!TOKEN_TG) {
    console.error(chalk.red('[ERRO] TELEGRAM_BOT_TOKEN não definido!'));
    process.exit(1);
}

const bot = new Telegraf(TOKEN_TG);

// Sessão simples em memória (pacotes em construção)
const sessoes = {};
function getSessao(id) {
    if (!sessoes[id]) sessoes[id] = { pacote: null };
    return sessoes[id];
}

// ====== SERVIDOR WEB ======
const app = express();
app.use(express.json());
app.use('/pacotes', express.static(path.join(__dirname, '../temp/pacotes')));
app.get('/', (_, res) => res.send('🪷 WHITE LOTUS TG — Online'));
app.listen(PORT, '0.0.0.0', () => console.log(chalk.magenta(`[WEB] Porta ${PORT}`)));

// ====== HELPERS ======
const groqChat = async (system, user) => {
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error('GROQ_API_KEY não configurada');
    const r = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
        temperature: 0.9
    }, { headers: { Authorization: `Bearer ${key}` }, timeout: 25000 });
    return r.data.choices[0].message.content;
};

async function imgParaWebp(buffer, texto) {
    const img = await Jimp.read(buffer);
    img.resize({ w: 512, h: 512 });

    if (texto) {
        try {
            const font = await loadFont(SANS_64_BLACK);
            const h = measureTextHeight(font, texto, 452);
            const y = Math.max(30, (512 - h) / 2);
            img.print({
                font, x: 30, y,
                text: { text: texto, alignmentX: HorizontalAlign.LEFT, alignmentY: VerticalAlign.TOP },
                maxWidth: 452, maxHeight: 452
            });
        } catch (e) {
            console.error('Erro texto:', e.message);
        }
    }

    // Retorna PNG (o Sticker Maker/WhatsApp aceita via .wastickers)
    return img.getBuffer('image/png');
}

async function criarTray(stickerBuf) {
    const img = await Jimp.read(stickerBuf);
    img.resize({ w: 96, h: 96 });
    return img.getBuffer('image/png');
}

async function criarWastickers(pacoteInfo) {
    const dir = path.join(__dirname, '../temp/pacotes');
    fs.ensureDirSync(dir);
    const outPath = path.join(dir, `${pacoteInfo.id}.wastickers`);

    // Gera o tray (ícone 96x96) a partir do primeiro sticker
    const trayBuf = await criarTray(pacoteInfo.stickers[0]);

    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outPath);
        const archive = archiver('zip');
        output.on('close', () => resolve(outPath));
        archive.on('error', reject);
        archive.pipe(output);

        // tray.png — ícone do pacote (96x96 PNG)
        archive.append(trayBuf, { name: 'tray.png' });

        // stickers
        pacoteInfo.stickers.forEach((buf, i) => {
            archive.append(buf, { name: `${i + 1}.webp` });
        });

        // contents.json — metadados do pacote WhatsApp
        const meta = JSON.stringify({
            android_play_store_link: '',
            ios_app_store_link: '',
            publisher: pacoteInfo.autor || 'White Lotus',
            privacy_policy_website: '',
            license_agreement_website: '',
            title: pacoteInfo.nome || 'Meu Pacote',
            identifier: pacoteInfo.id,
            sticker_packs: [{
                identifier: pacoteInfo.id,
                name: pacoteInfo.nome || 'Meu Pacote',
                publisher: pacoteInfo.autor || 'White Lotus',
                tray_image_file: 'tray.png',
                image_data_version: '1',
                avoid_cache: false,
                stickers: pacoteInfo.stickers.map((_, i) => ({
                    image_file: `${i + 1}.webp`,
                    emojis: ['🪷']
                }))
            }]
        });
        archive.append(meta, { name: 'contents.json' });
        archive.finalize();
    });
}

// ====== MENU PRINCIPAL (inline keyboard) ======
function menuPrincipal() {
    return {
        text: '🪷 *WHITE LOTUS — MENU PRINCIPAL*\n\nEscolha uma categoria:',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🤖 Inteligência Artificial', 'menu_ia')],
            [Markup.button.callback('🎨 Figurinhas & Stickers', 'menu_sticker')],
            [Markup.button.callback('🎵 Música', 'menu_musica')],
            [Markup.button.callback('😄 Zoeira', 'menu_zoeira')],
            [Markup.button.callback('🐾 Pets', 'menu_pets')],
            [Markup.button.callback('⚙️ Utilidades', 'menu_util')],
        ])
    };
}

function menuIA() {
    return {
        text: '🤖 *INTELIGÊNCIA ARTIFICIAL*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('💬 Chat GPT/IA', 'cmd_gpt'), Markup.button.callback('🔮 Signo', 'cmd_signo')],
            [Markup.button.callback('🌐 Traduzir', 'cmd_traduzir'), Markup.button.callback('✨ Gerar Nick', 'cmd_nick')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuSticker() {
    return {
        text: '🎨 *PACOTE DE FIGURINHAS PARA WHATSAPP*\n\n📌 Como usar:\n1. Mande imagens (até 30) usando o comando abaixo\n2. O bot converte em WebP 512x512\n3. Baixe o arquivo `.wastickers` e importe no WhatsApp',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('📦 Criar novo pacote', 'sticker_novo')],
            [Markup.button.callback('🖼️ Adicionar figurinha com texto', 'sticker_texto')],
            [Markup.button.callback('✅ Finalizar e baixar pacote', 'sticker_finalizar')],
            [Markup.button.callback('🗑️ Cancelar pacote', 'sticker_cancelar')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuMusica() {
    return {
        text: '🎵 *MÚSICA*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('▶️ Buscar e baixar música', 'cmd_play')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuZoeira() {
    return {
        text: '😄 *ZOEIRA*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🔮 Vidente', 'cmd_vidente'), Markup.button.callback('💡 Conselho', 'cmd_conselho')],
            [Markup.button.callback('😏 Cantada', 'cmd_cantada')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuPets() {
    return {
        text: '🐾 *PETS*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🐣 Adotar pet', 'cmd_petadotar'), Markup.button.callback('📊 Ver pet', 'cmd_pet')],
            [Markup.button.callback('🍖 Alimentar', 'cmd_petalimentar'), Markup.button.callback('🎾 Brincar', 'cmd_petbrincar')],
            [Markup.button.callback('💪 Treinar', 'cmd_pettreinar'), Markup.button.callback('💔 Abandonar', 'cmd_petabandonar')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuUtil() {
    return {
        text: '⚙️ *UTILIDADES*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🏓 Ping', 'cmd_ping'), Markup.button.callback('ℹ️ Info', 'cmd_info')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

// ====== CALLBACK QUERY (botões) ======
bot.action('menu_principal', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuPrincipal().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuPrincipal().reply_markup.inline_keyboard) });
});
bot.action('menu_ia', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuIA().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuIA().reply_markup.inline_keyboard) });
});
bot.action('menu_sticker', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuSticker().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuSticker().reply_markup.inline_keyboard) });
});
bot.action('menu_musica', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuMusica().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuMusica().reply_markup.inline_keyboard) });
});
bot.action('menu_zoeira', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuZoeira().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuZoeira().reply_markup.inline_keyboard) });
});
bot.action('menu_pets', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuPets().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuPets().reply_markup.inline_keyboard) });
});
bot.action('menu_util', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(menuUtil().text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(menuUtil().reply_markup.inline_keyboard) });
});

// Botões de ação rápida
bot.action('cmd_ping', async (ctx) => { await ctx.answerCbQuery('🏓 Pong!'); await ctx.reply('🏓 *Pong!* Bot online! 🪷', { parse_mode: 'Markdown' }); });
bot.action('cmd_info', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🪷 *WHITE LOTUS*\nTelegram Edition\nPrefix: `©`', { parse_mode: 'Markdown' }); });
bot.action('cmd_vidente', async (ctx) => {
    await ctx.answerCbQuery();
    const p = ['🪷 Os astros sussurram que algo bom está prestes a chegar.','🪷 Seu instinto está certo dessa vez. Confie nele.','🪷 Alguém está pensando em você nesse momento.','🪷 Um ciclo se encerra — e isso é bom.','🪷 Você está mais perto de uma resposta do que imagina.'];
    await ctx.reply(p[Math.floor(Math.random()*p.length)]);
});
bot.action('cmd_conselho', async (ctx) => {
    await ctx.answerCbQuery();
    const c = ['💡 Não adie para amanhã o que pode te fazer bem hoje.','💡 Silêncio às vezes é a resposta mais inteligente.','💡 Cuide de você primeiro.','💡 O processo importa tanto quanto o resultado.'];
    await ctx.reply(c[Math.floor(Math.random()*c.length)]);
});
bot.action('cmd_cantada', async (ctx) => {
    await ctx.answerCbQuery();
    const ca = ['😏 Você tem GPS? Porque me perdi nos seus olhos.','😏 Você é química? Porque temos uma reação.','😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.'];
    await ctx.reply(ca[Math.floor(Math.random()*ca.length)]);
});

// Sticker pack — botões
bot.action('sticker_novo', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    const nomePacote = `pacote_${Date.now()}`;
    s.pacote = { id: nomePacote, nome: 'Meu Pacote 🪷', autor: ctx.from.first_name || 'White Lotus', stickers: [], aguardandoNome: true };
    await ctx.reply('📦 Novo pacote criado!\n\nMande o *nome do pacote* agora (ex: Memes do João):', { parse_mode: 'Markdown' });
});

bot.action('sticker_texto', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.pacote) return ctx.reply('❌ Crie um pacote primeiro. Use o menu e clique em "Criar novo pacote".');
    s.pacote.aguardandoTexto = true;
    await ctx.reply('✏️ Mande agora a *imagem + legenda* (texto na descrição da foto) que vai virar figurinha com texto.', { parse_mode: 'Markdown' });
});

bot.action('sticker_finalizar', async (ctx) => {
    await ctx.answerCbQuery('⏳ Gerando arquivo...');
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.pacote || s.pacote.stickers.length === 0) return ctx.reply('❌ Pacote vazio. Adicione figurinhas primeiro mandando imagens.');
    try {
        await ctx.reply(`⏳ Gerando pacote com ${s.pacote.stickers.length} figurinha(s)...`);
        const filePath = await criarWastickers(s.pacote);
        await ctx.replyWithDocument({ source: filePath, filename: `${s.pacote.nome.replace(/\s/g,'_')}.wastickers` },
            { caption: `🎉 *Pacote pronto!*\n📦 ${s.pacote.nome}\n🖼️ ${s.pacote.stickers.length} figurinha(s)\n\n*Como importar no WhatsApp:*\n1. Baixe o arquivo\n2. Abra com o app "Sticker Maker" ou "WhatsApp Sticker Maker"\n3. Importe o .wastickers\n4. Adicione ao WhatsApp 🪷`, parse_mode: 'Markdown' }
        );
        s.pacote = null;
    } catch (e) {
        console.error(e);
        ctx.reply('❌ Erro ao gerar o pacote. Tente novamente.');
    }
});

bot.action('sticker_cancelar', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    getSessao(sid).pacote = null;
    await ctx.reply('🗑️ Pacote cancelado.');
});

// Pet actions
const petActions = ['petadotar','pet','petalimentar','petbrincar','pettreinar','petabandonar'];
petActions.forEach(cmd => {
    bot.action(`cmd_${cmd}`, async (ctx) => {
        await ctx.answerCbQuery();
        if (cmd === 'petadotar') return ctx.reply(`🐾 Para adotar, mande: \`©petadotar <nome>\``, { parse_mode: 'Markdown' });
        await executarPet(ctx, cmd, '');
    });
});

// IA actions
bot.action('cmd_gpt', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('💬 Mande sua pergunta com o comando:\n`©gpt sua pergunta aqui`', { parse_mode: 'Markdown' }); });
bot.action('cmd_signo', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🔮 Mande o comando:\n`©signo aries`', { parse_mode: 'Markdown' }); });
bot.action('cmd_traduzir', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🌐 Mande o comando:\n`©traduzir en | bom dia`', { parse_mode: 'Markdown' }); });
bot.action('cmd_nick', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('✨ Mande o comando:\n`©nick NomeBase`', { parse_mode: 'Markdown' }); });
bot.action('cmd_play', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎵 Mande o comando:\n`©play nome da música`', { parse_mode: 'Markdown' }); });

// ====== FUNÇÃO PETS ======
async function executarPet(ctx, command, q) {
    const sender = String(ctx.from?.id || '');
    const pushname = ctx.from?.first_name || 'Usuário';
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    const petsDB = fs.existsSync(petsPath) ? JSON.parse(fs.readFileSync(petsPath)) : {};
    const especiesPet = ["Cachorro","Gato","Coelho","Raposa","Coruja","Lince","Corvo","Dragãozinho","Fênix Bebê"];

    const petBarra = (a, m, e) => { const t=10,c=Math.max(0,Math.min(t,Math.round((a/m)*t))); return e.repeat(c)+'⬜'.repeat(t-c); };
    const petXpN = n => n*100;
    const petGanharXp = (pet, xp) => { pet.xp+=xp; let s=false; while(pet.xp>=petXpN(pet.nivel)){pet.xp-=petXpN(pet.nivel);pet.nivel+=1;s=true;} return s; };
    const petDecaimento = pet => {
        const now=Date.now();
        pet.fome=Math.max(0,Math.round(pet.fome-(now-pet.ultimaAlimentacao)/3600000*2));
        pet.felicidade=Math.max(0,Math.round(pet.felicidade-(now-pet.ultimoBrincar)/3600000*2));
    };
    const save = () => fs.writeFileSync(petsPath, JSON.stringify(petsDB,null,2));
    const reply = t => ctx.reply(t, { parse_mode: 'Markdown' });

    if (command === 'petadotar') {
        if (petsDB[sender]) return reply(`❌ Você já tem *${petsDB[sender].nome}*.`);
        if (!q) return reply('Use: `©petadotar <nome>`');
        const especie = especiesPet[Math.floor(Math.random()*especiesPet.length)];
        petsDB[sender] = { nome: q, especie, nivel:1, xp:0, fome:80, felicidade:80, ultimaAlimentacao:Date.now(), ultimoBrincar:Date.now() };
        save(); return reply(`🐾 Você adotou um(a) *${especie}* chamado(a) *${q}*!`);
    }
    if (command === 'pet') {
        const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com \`©petadotar <nome>\``);
        petDecaimento(pet); save();
        return reply(`🐾 *${pet.nome}* (${pet.especie})\n⭐ Nível ${pet.nivel} | XP ${pet.xp}/${petXpN(pet.nivel)}\n🍖 Fome: ${pet.fome}/100\n${petBarra(pet.fome,100,'🟠')}\n😺 Felicidade: ${pet.felicidade}/100\n${petBarra(pet.felicidade,100,'💗')}`);
    }
    if (command === 'petalimentar') {
        const pet = petsDB[sender]; if (!pet) return reply('Sem pet.');
        petDecaimento(pet); pet.fome=Math.min(100,pet.fome+30); pet.ultimaAlimentacao=Date.now();
        const s=petGanharXp(pet,10); save();
        return reply(`🍖 Alimentou *${pet.nome}*! Fome: ${pet.fome}/100${s?'\n⭐ Subiu pro nível '+pet.nivel:''}`);
    }
    if (command === 'petbrincar') {
        const pet = petsDB[sender]; if (!pet) return reply('Sem pet.');
        petDecaimento(pet); pet.felicidade=Math.min(100,pet.felicidade+30); pet.ultimoBrincar=Date.now();
        const s=petGanharXp(pet,10); save();
        return reply(`🎾 Brincou com *${pet.nome}*! Felicidade: ${pet.felicidade}/100${s?'\n⭐ Subiu pro nível '+pet.nivel:''}`);
    }
    if (command === 'pettreinar') {
        const pet = petsDB[sender]; if (!pet) return reply('Sem pet.');
        petDecaimento(pet);
        if (pet.fome<15||pet.felicidade<15) return reply('❌ Pet com fome/cansado. Cuide dele primeiro.');
        pet.fome=Math.max(0,pet.fome-10); pet.felicidade=Math.max(0,pet.felicidade-10);
        const s=petGanharXp(pet,30); save();
        return reply(`💪 Treinou com *${pet.nome}*!${s?'\n⭐ Subiu pro nível '+pet.nivel:''}`);
    }
    if (command === 'petabandonar') {
        if (!petsDB[sender]) return reply('Você não tem pet.');
        const nome=petsDB[sender].nome; delete petsDB[sender]; save();
        return reply(`💔 Você deixou *${nome}* ir.`);
    }
}

// ====== HANDLER DE IMAGENS (sticker pack) ======
bot.on('photo', async (ctx) => {
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.pacote) return;
    if (s.pacote.aguardandoNome) return;

    try {
        const foto = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await ctx.telegram.getFileLink(foto.file_id);
        const url = typeof fileLink === 'string' ? fileLink : (fileLink.href || String(fileLink));
        const resp = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(resp.data);
        const texto = s.pacote.aguardandoTexto ? (ctx.message.caption || null) : null;
        if (s.pacote.aguardandoTexto) s.pacote.aguardandoTexto = false;

        const webp = await imgParaWebp(buffer, texto);
        s.pacote.stickers.push(webp);
        const n = s.pacote.stickers.length;
        await ctx.reply(`✅ Figurinha ${n}/30 adicionada${texto ? ` com texto: _${texto}_` : ''}!\n${n >= 30 ? '📦 Limite atingido. Clique em Finalizar.' : `Mande mais imagens ou clique em *Finalizar*.`}`, { parse_mode: 'Markdown' });
    } catch (e) {
        console.error(e);
        ctx.reply('❌ Erro ao processar a imagem.');
    }
});

// ====== HANDLER DE TEXTO ======
bot.on('text', async (ctx) => {
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    const text = ctx.message.text || '';
    const pushname = ctx.from.first_name || 'Usuário';

    // Nome do pacote aguardado
    if (s.pacote?.aguardandoNome) {
        s.pacote.nome = text.trim();
        s.pacote.aguardandoNome = false;
        return ctx.reply(`✅ Nome definido: *${s.pacote.nome}*\n\nAgora mande as imagens! (até 30)\nPara adicionar texto numa figurinha, use o botão "Adicionar figurinha com texto".`, { parse_mode: 'Markdown' });
    }

    if (!text.startsWith(PREFIX)) return;

    const args = text.slice(PREFIX.length).trim().split(/\s+/);
    const command = (args.shift() || '').toLowerCase();
    const q = args.join(' ');

    try {
        switch (command) {
            case 'start': case 'menu': case 'ajuda': {
                const m = menuPrincipal();
                await ctx.reply(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) });
                break;
            }
            case 'ping':
                await ctx.reply('🏓 *Pong!* Bot online! 🪷', { parse_mode: 'Markdown' });
                break;

            case 'gpt': case 'gemini': case 'ia':
                if (!q) return ctx.reply(`Use: ${PREFIX}${command} <pergunta>`);
                await ctx.reply('🤔 Processando...');
                try {
                    const r = await groqChat('Você é um assistente prestativo e direto.', q);
                    await ctx.reply(r);
                } catch (e) { ctx.reply('❌ Erro: ' + (e.message || 'tente novamente')); }
                break;

            case 'signo':
                if (!q) return ctx.reply(`Use: ${PREFIX}signo <signo>`);
                try {
                    const r = await groqChat(
                        'Você é um astrólogo pop, acolhedor. Parágrafos curtos, emojis moderados. Inclua conselho e número da sorte.',
                        `Previsão de hoje para ${pushname}, signo ${q}.`
                    );
                    await ctx.reply(`🔮 *Signo: ${q}*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('Os astros estão nublados... 🌌'); }
                break;

            case 'traduzir':
                if (!q) return ctx.reply(`Use: ${PREFIX}traduzir <idioma> | <texto>\nEx: ${PREFIX}traduzir en | bom dia`);
                try {
                    let idioma='pt', texto=q;
                    if (q.includes('|')) { const p=q.split('|'); idioma=p[0].trim(); texto=p.slice(1).join('|').trim(); }
                    const res = await axios.get('https://translate.googleapis.com/translate_a/single', {
                        params:{client:'gtx',sl:'auto',tl:idioma,dt:'t',q:texto}, timeout:15000
                    });
                    const trad = res.data[0].map(p=>p[0]).join('');
                    await ctx.reply(`🌐 *Tradução* (${res.data[2]} → ${idioma})\n\n${trad}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao traduzir.'); }
                break;

            case 'nick': case 'gerarnick':
                if (!q) return ctx.reply(`Use: ${PREFIX}nick <nome base>`);
                try {
                    const r = await groqChat('Gere nicks estilizados com Unicode. Responda APENAS lista numerada de 8 nicks.', `Nicks para: ${q}`);
                    await ctx.reply(`✨ *Gerador de Nicks*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao gerar nicks.'); }
                break;

            case 'play': case 'p':
                if (!q) return ctx.reply(`Use: ${PREFIX}play <música>`);
                try {
                    const urlApi = process.env.URL_API_PLAY;
                    if (!urlApi) return ctx.reply('❌ URL_API_PLAY não configurada.');
                    await ctx.reply('🎵 Buscando...');
                    const res = await axios.post(urlApi, { chatId: sid, busca: q }, { timeout: 30000 });
                    const d = res.data;
                    if (!d?.linkAudio) return ctx.reply(d?.texto || '❌ Não encontrado.');
                    await ctx.reply(d.texto, { parse_mode: 'Markdown' });
                    await ctx.replyWithAudio({ url: d.linkAudio });
                } catch { ctx.reply('❌ Erro ao buscar música.'); }
                break;

            case 'vidente': case 'futuro':
                const pv = ['🪷 Algo bom está prestes a cruzar seu caminho.','🪷 Seu instinto está certo. Confie nele.','🪷 Alguém pensa em você agora.','🪷 Um ciclo se encerra — e isso é bom.'];
                await ctx.reply(pv[Math.floor(Math.random()*pv.length)]);
                break;

            case 'conselho':
                const pc = ['💡 Não adie o que pode te fazer bem hoje.','💡 Silêncio é a resposta mais inteligente às vezes.','💡 O processo importa tanto quanto o resultado.'];
                await ctx.reply(pc[Math.floor(Math.random()*pc.length)]);
                break;

            case 'cantada':
                const pca = ['😏 Você tem GPS? Me perdi nos seus olhos.','😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.'];
                await ctx.reply(pca[Math.floor(Math.random()*pca.length)]);
                break;

            case 'petadotar': case 'pet': case 'petalimentar':
            case 'petbrincar': case 'pettreinar': case 'petabandonar':
                await executarPet(ctx, command, q);
                break;

            case 'pacote': case 'sticker': case 'figurinha':
                const ms = menuSticker();
                await ctx.reply(ms.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(ms.reply_markup.inline_keyboard) });
                break;

            default:
                await ctx.reply(`❓ Comando desconhecido: \`${PREFIX}${command}\`\nVeja ${PREFIX}menu`, { parse_mode: 'Markdown' });
        }
    } catch (e) {
        console.error(chalk.red('[ERRO comando]:'), e);
        ctx.reply('❌ Erro interno.').catch(() => {});
    }
});

// ====== START ======
bot.launch().then(() => {
    console.log(chalk.green('🪷 [WHITE LOTUS] Bot Telegram online!'));
    console.log(chalk.cyan(`[@WhiteLotusBot] Prefix: ${PREFIX}`));
}).catch(err => {
    console.error(chalk.red('[ERRO launch]:'), err);
    process.exit(1);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
