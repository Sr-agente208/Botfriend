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
    const sharp = require('sharp');

    // Garante canal alpha pra transparência
    let sharpImg = sharp(buffer)
        .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .ensureAlpha();

    if (texto && texto.trim()) {
        // SVG sem fontes externas — usa fonte genérica do sistema
        const textoSeguro = texto.slice(0, 40).replace(/[<>&"']/g, c =>
            ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c])
        );
        const svgOverlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <rect x="0" y="390" width="512" height="122" fill="rgba(0,0,0,0.6)"/>
  <text x="256" y="460" 
    font-family="sans-serif" font-size="44" font-weight="bold"
    fill="white" text-anchor="middle"
    stroke="#000" stroke-width="1.5" paint-order="stroke">${textoSeguro}</text>
</svg>`);
        sharpImg = sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .ensureAlpha()
            .composite([{ input: svgOverlay, blend: 'over' }]);
    }

    return sharpImg.webp({ quality: 85 }).toBuffer();
}

async function criarTray(stickerBuf) {
    const sharp = require('sharp');
    // Tray precisa ser PNG 96x96
    return sharp(stickerBuf)
        .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
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

function menuAnime() {
    return {
        text: '🍙 *ANIME — Sushi Animes*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🔍 Buscar anime', 'cmd_anime_buscar')],
            [Markup.button.callback('🆕 Recentes', 'cmd_anime_recentes')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

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
        text: '😄 *ZOEIRA & DIVERSÃO*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🔮 Vidente', 'cmd_vidente'), Markup.button.callback('💡 Conselho', 'cmd_conselho')],
            [Markup.button.callback('📖 Bíblico', 'cmd_conselhobiblico'), Markup.button.callback('😏 Cantada', 'cmd_cantada')],
            [Markup.button.callback('🧠 Curiosidade', 'cmd_curiosidade'), Markup.button.callback('😂 Piada', 'cmd_piada')],
            [Markup.button.callback('🎲 Sortear', 'cmd_sortear'), Markup.button.callback('🪙 Moeda', 'cmd_moeda')],
            [Markup.button.callback('🎭 Personalidade', 'cmd_personalidade')],
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
            [Markup.button.callback('🔗 Gerar Link', 'cmd_gerarlink'), Markup.button.callback('📱 QR Code', 'cmd_qrcode')],
            [Markup.button.callback('📖 Wikipedia', 'cmd_wiki'), Markup.button.callback('🧮 Calculadora', 'cmd_calc')],
            [Markup.button.callback('📮 CEP', 'cmd_cep'), Markup.button.callback('🎂 Idade', 'cmd_idade')],
            [Markup.button.callback('🔐 Encode', 'cmd_encode'), Markup.button.callback('🔓 Decode', 'cmd_decode')],
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
bot.action('cmd_gerarlink', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔗 *Gerar Link*\n\nMande um arquivo (imagem, vídeo, áudio, documento) com o comando:\n`©gerarlink` ou `©link`\n\nOu responda a uma mensagem com mídia usando o mesmo comando.', { parse_mode: 'Markdown' });
});

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
bot.action('cmd_conselhobiblico', async (ctx) => {
    await ctx.answerCbQuery();
    const pc = [
        '📖 "Tudo posso naquele que me fortalece." — Filipenses 4:13',
        '📖 "O Senhor é o meu pastor e nada me faltará." — Salmos 23:1',
        '📖 "Entrega o teu caminho ao Senhor, confia nele." — Salmos 37:5',
        '📖 "Sede fortes e corajosos. O Senhor vosso Deus estará com vocês." — Josué 1:9',
        '📖 "Buscai primeiro o Reino de Deus e todas essas coisas vos serão acrescentadas." — Mateus 6:33',
    ];
    await ctx.reply(pc[Math.floor(Math.random() * pc.length)]);
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


bot.action('menu_anime', async (ctx) => {
    await ctx.answerCbQuery();
    const m = menuAnime();
    await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) });
});
bot.action('cmd_anime_buscar', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔍 Use: `©anime <nome>`\nEx: `©anime Naruto`', { parse_mode: 'Markdown' });
});
bot.action('cmd_anime_recentes', async (ctx) => {
    await ctx.answerCbQuery();
    try {
        const cheerio = require('cheerio');
        const resp = await axios.get('https://sushianimes.com.br/', { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 });
        const $ = cheerio.load(resp.data);
        const recentes = [];
        $('.TPostMv, .post, article').slice(0, 8).each((i, el) => {
            const titulo = $(el).find('h2,h3,.Title,.entry-title').first().text().trim();
            const link = $(el).find('a').first().attr('href');
            if (titulo && link) recentes.push({ titulo, link });
        });
        if (!recentes.length) return ctx.reply('❌ Não foi possível carregar. Acesse: https://sushianimes.com.br');
        const txt = '🍙 *Recentes:*\n\n' + recentes.map((r,i)=>`*${i+1}.* [${r.titulo}](${r.link})`).join('\n');
        await ctx.reply(txt, { parse_mode: 'Markdown' });
    } catch(e) { ctx.reply('❌ Erro. Acesse: https://sushianimes.com.br'); }
});
bot.action('cmd_qrcode', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('📱 Use: `©qrcode <texto ou link>`', { parse_mode: 'Markdown' });
});
bot.action('cmd_wiki', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('📖 Use: `©wiki <pesquisa>`', { parse_mode: 'Markdown' });
});
bot.action('cmd_calc', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🧮 Use: `©calc 10 * 5 + 2`', { parse_mode: 'Markdown' });
});
bot.action('cmd_cep', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('📮 Use: `©cep 01001000`', { parse_mode: 'Markdown' });
});
bot.action('cmd_idade', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🎂 Use: `©idade 15/05/2000`', { parse_mode: 'Markdown' });
});
bot.action('cmd_encode', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔐 Use: `©encode <texto>`', { parse_mode: 'Markdown' });
});
bot.action('cmd_decode', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔓 Use: `©decode <base64>`', { parse_mode: 'Markdown' });
});
bot.action('cmd_curiosidade', async (ctx) => {
    await ctx.answerCbQuery();
    const c=['🧠 A abelha bate as asas 200 vezes por segundo.','🧠 Os polvos têm 3 corações e sangue azul.','🧠 As formigas nunca dormem.','🧠 O mel nunca estraga — mel de 3000 anos foi encontrado no Egito.','🧠 Os tubarões são mais velhos que as árvores.','🧠 Uma nuvem pesa 500 toneladas.','🧠 Existem mais estrelas no universo do que grãos de areia na Terra.'];
    await ctx.reply(c[Math.floor(Math.random()*c.length)]);
});
bot.action('cmd_piada', async (ctx) => {
    await ctx.answerCbQuery();
    const p=['😂 Por que o livro de matemática foi ao psicólogo? Tinha muitos problemas.','😂 O que o zero disse pro oito? Belo cinto!','😂 Por que o programador usa óculos? Não consegue C#.','😂 O que é um elefante na neve? Um freezer.'];
    await ctx.reply(p[Math.floor(Math.random()*p.length)]);
});
bot.action('cmd_sortear', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(`🎲 Dado: *${Math.floor(Math.random()*6)+1}*\n\nPara outro número: \`©sortear <máximo>\``, { parse_mode: 'Markdown' });
});
bot.action('cmd_moeda', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(`🪙 ${Math.random()<0.5?'*Cara!*':'*Coroa!*'}`, { parse_mode: 'Markdown' });
});
bot.action('cmd_personalidade', async (ctx) => {
    await ctx.answerCbQuery();
    const tipos={Gênero:['Gay 🏳️‍🌈','Masculino 💪','Feminino 🦋','Trans 🏳️‍⚧️'],Hobbie:['Cozinhar 🍜','Ler 📚','Esportes ⛹️','Música 🎧','Jogos 🎮'],Profissão:['Médico(a)','Engenheiro(a)','Professor(a)','Programador(a)'],Período:['Manhã 🌤','Tarde 🌅','Noite 🌌','Madrugada 🌃'],Musical:['Rock','Pop','Funk','Sertanejo','Eletrônica']};
    const rnd=a=>a[Math.floor(Math.random()*a.length)];
    await ctx.reply('🎭 *Personalidade!*\n\n'+Object.entries(tipos).map(([k,v])=>`🔹 *${k}:* ${rnd(v)}`).join('\n'),{parse_mode:'Markdown'});
});
bot.action('cmd_gerarlink', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔗 *Gerar Link*\n\nResponda qualquer mídia com `©gerarlink` ou mande a mídia com `©gerarlink` na legenda.', { parse_mode: 'Markdown' });
});

// ====== HANDLER DE IMAGENS (sticker pack) ======
const mediaGroupVisto = new Set();

bot.on(['photo', 'document'], async (ctx) => {
    const sid = String(ctx.from.id);
    const s = getSessao(sid);

    // Se não tem pacote ativo, ignora silenciosamente
    if (!s.pacote) return;

    if (s.pacote.aguardandoNome) {
        return ctx.reply('⏳ Antes mande o *nome do pacote* como texto.');
    }

    // Evita processar a mesma foto duas vezes em álbuns (media_group)
    const mediaGroupId = ctx.message.media_group_id;
    if (mediaGroupId) {
        const chave = `${sid}_${mediaGroupId}_${ctx.message.message_id}`;
        if (mediaGroupVisto.has(chave)) return;
        mediaGroupVisto.add(chave);
        setTimeout(() => mediaGroupVisto.delete(chave), 60000);
    }

    try {
        let fileId;
        if (ctx.message.photo) {
            fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
        } else if (ctx.message.document) {
            const doc = ctx.message.document;
            if (!doc.mime_type?.startsWith('image/')) return;
            fileId = doc.file_id;
        }
        if (!fileId) return;

        if (s.pacote.stickers.length >= 30) {
            return ctx.reply('📦 Limite de 30 figurinhas. Clique em *Finalizar*.', { parse_mode: 'Markdown' });
        }

        const fileLink = await ctx.telegram.getFileLink(fileId);
        const url = typeof fileLink === 'string' ? fileLink : (fileLink.href || String(fileLink));
        const resp = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(resp.data);

        const texto = s.pacote.aguardandoTexto ? (ctx.message.caption || null) : null;
        if (s.pacote.aguardandoTexto) s.pacote.aguardandoTexto = false;

        const webp = await imgParaWebp(buffer, texto);
        s.pacote.stickers.push(webp);
        const n = s.pacote.stickers.length;

        await ctx.reply(
            `✅ Figurinha *${n}/30* adicionada${texto ? ` com texto: _${texto}_` : ''}!\n` +
            (n >= 30 ? '📦 Limite atingido. Use o menu `/pacote` → Finalizar.' : 'Mande mais ou use `/pacote` → Finalizar.'),
            { parse_mode: 'Markdown' }
        );
    } catch (e) {
        console.error('[ERRO foto]:', e?.message || e);
        ctx.reply('❌ Erro ao processar esta imagem. Tente mandar como arquivo (não comprimido).');
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

            case 'ajuda2': case 'comandos': {
                await ctx.reply(
`🪷 *WHITE LOTUS — COMANDOS*\n
*🤖 IA*
${PREFIX}gpt <pergunta>
${PREFIX}gemini <pergunta>
${PREFIX}signo <signo>
${PREFIX}traduzir <idioma> | <texto>
${PREFIX}nick <nome>\n
*🎵 MÚSICA*
${PREFIX}play <música>\n
*😄 ZOEIRA*
${PREFIX}vidente
${PREFIX}conselho
${PREFIX}conselhobiblico
${PREFIX}cantada\n
*🐾 PETS*
${PREFIX}petadotar <nome>
${PREFIX}pet
${PREFIX}petalimentar
${PREFIX}petbrincar
${PREFIX}pettreinar
${PREFIX}petabandonar\n
*🎨 STICKER PACK (WhatsApp)*
${PREFIX}pacote — abre o gerenciador\n
*🔗 UTILIDADES*
${PREFIX}gerarlink — mande com mídia ou responda a uma
${PREFIX}ping
${PREFIX}info`, { parse_mode: 'Markdown' });
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

            case 'vidente': case 'futuro': case 'previsao': {
                const pv = [
                    '🪷 Os astros sussurram que algo bom está prestes a cruzar seu caminho. Fique de olhos abertos.',
                    '🪷 Uma decisão que você anda enrolando vai se resolver sozinha nos próximos dias.',
                    '🪷 Cuidado com promessas vazias essa semana — nem tudo que reluz é lótus.',
                    '🪷 Uma conversa antiga vai voltar à tona. Escute mais do que fala.',
                    '🪷 O universo está pedindo paciência. As coisas boas estão a caminho.',
                    '🪷 Alguém está pensando em você nesse exato momento.',
                    '🪷 Uma surpresa pode aparecer — mas não conte com ela ainda.',
                    '🪷 Seu instinto está certo dessa vez. Confie nele.',
                    '🪷 Um ciclo está se encerrando — e isso é bom, mesmo que pareça estranho.',
                    '🪷 Evite decisões importantes às pressas nos próximos 3 dias.',
                    '🪷 Uma amizade vai se fortalecer de um jeito que você não esperava.',
                    '🪷 Os sinais apontam pra uma virada positiva no fim do mês.',
                    '🪷 Tome cuidado com fofocas — algumas bocas não merecem sua confiança agora.',
                    '🪷 Você está mais perto de uma resposta do que imagina.',
                    '🪷 Uma viagem ou mudança de ares está nos seus horizontes.',
                    '🪷 O que você plantou com esforço está prestes a florescer.',
                    '🪷 Alguém do seu passado vai reaparecer — pense bem antes de abrir a porta.',
                    '🪷 Sua energia está diferente. As pessoas ao redor estão notando.',
                    '🪷 Não force o que não quer fluir. Deixe o universo agir.',
                    '🪷 Um número vai aparecer repetidamente na sua semana — preste atenção.',
                ];
                const escolhida = pv[Math.floor(Math.random() * pv.length)];
                await ctx.reply(`╭🔮 *VIDENTE* 🔮╮\n\n${escolhida}\n\n╰🪷 *White Lotus* 🪷╯`, { parse_mode: 'Markdown' });
                break;
            }

            case 'conselho': case 'conselhos': case 'conselhobiblico': {
                const isBiblico = command === 'conselhobiblico';
                const pc = isBiblico ? [
                    '📖 "Não te deixes vencer pelo mal, mas vence o mal com o bem." — Romanos 12:21',
                    '📖 "Tudo posso naquele que me fortalece." — Filipenses 4:13',
                    '📖 "O Senhor é o meu pastor e nada me faltará." — Salmos 23:1',
                    '📖 "Entrega o teu caminho ao Senhor, confia nele, e ele tudo fará." — Salmos 37:5',
                    '📖 "Porque sou eu que conheço os planos que tenho a vosso respeito." — Jeremias 29:11',
                    '📖 "Sede fortes e corajosos. Não vos assusteis, pois o Senhor vosso Deus estará com vocês." — Josué 1:9',
                    '📖 "Buscai primeiro o Reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas." — Mateus 6:33',
                ] : [
                    '💡 Não adie para amanhã o que pode te fazer bem hoje.',
                    '💡 Quem aprende com os erros dos outros economiza muito tempo.',
                    '💡 Silêncio às vezes é a resposta mais inteligente.',
                    '💡 Cuide de você primeiro. Não é egoísmo, é necessidade.',
                    '💡 O processo importa tanto quanto o resultado.',
                    '💡 Não explique demais. Quem precisa entender, entende.',
                    '💡 Sua paz de espírito vale mais do que qualquer briga.',
                    '💡 Seja selectivo com sua energia. Nem todo mundo merece o seu melhor.',
                    '💡 O silêncio fala mais do que mil palavras quando você sabe usá-lo.',
                    '💡 Pare de tentar ser aprovado por quem nunca vai te aprovar.',
                    '💡 Errar faz parte. Ficar no erro é uma escolha.',
                    '💡 Não confunda solidão com fracasso. Às vezes você só está crescendo.',
                    '💡 Sua reação ao problema é maior do que o problema em si.',
                    '💡 Foque no que você pode controlar. O resto é perda de energia.',
                    '💡 Quem ri por último ri melhor — mas quem ri de si mesmo ri sempre.',
                ];
                await ctx.reply(pc[Math.floor(Math.random() * pc.length)]);
                break;
            }

            case 'cantada': case 'cantadas': {
                const pca = [
                    '😏 Você tem GPS? Porque me perdi nos seus olhos.',
                    '😏 Você é química? Porque temos uma reação.',
                    '😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.',
                    '😏 Você é anjo? Porque caiu do céu e me derrubou junto.',
                    '😏 Está cansado(a) de tanto caminhar pela minha cabeça?',
                    '😏 Você acredita em amor à primeira mensagem?',
                    '😏 Você é médico(a)? Porque meu coração acelerou quando te vi.',
                    '😏 É proibido ser tão bonito(a)? Porque você deveria estar preso(a).',
                    '😏 Você é WiFi? Porque eu sinto uma conexão entre nós.',
                    '😏 Seu nome deve ser Google, porque tem tudo que eu estava procurando.',
                    '😏 Você é um dicionário? Porque deu significado à minha vida.',
                    '😏 Se beleza doesse, você estaria em UTI.',
                    '😏 Você é real ou estou com febre? Porque parece demais pra ser verdade.',
                    '😏 Seu sorriso deveria ser ilegal — é altamente perigoso.',
                    '😏 Você tem seguro? Porque quando te vi, meu coração bateu na parede.',
                ];
                await ctx.reply(pca[Math.floor(Math.random() * pca.length)]);
                break;
            }

            case 'gerarlink': case 'link': case 'upload': {
                const msg = ctx.message;
                const media =
                    msg.photo ? msg.photo[msg.photo.length - 1] :
                    msg.video ? msg.video :
                    msg.audio ? msg.audio :
                    msg.voice ? msg.voice :
                    msg.document ? msg.document :
                    msg.sticker ? msg.sticker :
                    msg.reply_to_message?.photo ? msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1] :
                    msg.reply_to_message?.video ? msg.reply_to_message.video :
                    msg.reply_to_message?.audio ? msg.reply_to_message.audio :
                    msg.reply_to_message?.document ? msg.reply_to_message.document :
                    null;

                if (!media) {
                    return ctx.reply(
                        '📎 *Gerar Link*\n\nMande um arquivo junto com o comando, ou responda a uma mensagem com mídia.\n\nFormatos aceitos: imagem, vídeo, áudio, documento, figurinha.',
                        { parse_mode: 'Markdown' }
                    );
                }

                try {
                    await ctx.reply('⏳ Gerando link...');
                    const fileId = media.file_id;
                    const fileLink = await ctx.telegram.getFileLink(fileId);
                    const url = typeof fileLink === 'string' ? fileLink : (fileLink.href || String(fileLink));

                    const nome = media.file_name || media.file_unique_id || 'arquivo';
                    const tamanho = media.file_size ? `${(media.file_size / 1024).toFixed(1)} KB` : 'N/A';

                    await ctx.reply(
                        `✅ *Link gerado!*\n\n📄 Arquivo: \`${nome}\`\n📦 Tamanho: ${tamanho}\n\n🔗 ${url}\n\n⚠️ _Este link expira em 1 hora (limitação do Telegram)._`,
                        { parse_mode: 'Markdown' }
                    );
                } catch (e) {
                    console.error('[ERRO gerarlink]:', e?.message || e);
                    ctx.reply('❌ Erro ao gerar o link.');
                }
                break;
            }

            case 'petadotar': case 'pet': case 'petalimentar':
            case 'petbrincar': case 'pettreinar': case 'petabandonar':
                await executarPet(ctx, command, q);
                break;

            case 'pacote': case 'sticker': case 'figurinha':
                const ms = menuSticker();
                await ctx.reply(ms.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(ms.reply_markup.inline_keyboard) });
                break;


            // ── CALCULADORA ─────────────────────────────
            case 'calc': case 'calcular': {
                if (!q) return ctx.reply(`Use: ${PREFIX}calc 10 * 5 + 2`);
                try {
                    const expr = q.replace(/x/gi,'*').replace(/÷/g,'/').replace(/[^0-9+\-*/.() ]/g,'');
                    const res = Function('"use strict"; return (' + expr + ')')();
                    await ctx.reply('🧮 `' + q + '` = *' + res + '*', { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Expressão inválida. Ex: `©calc 10 * 5 + 2`', { parse_mode: 'Markdown' }); }
                break;
            }

            // ── QR CODE ─────────────────────────────────
            case 'qrcode': case 'qr': case 'gerarqr': {
                if (!q) return ctx.reply(`Use: ${PREFIX}qrcode <texto ou link>`);
                try {
                    await ctx.replyWithPhoto({ url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(q)}` }, { caption: `📱 QR Code: ${q}` });
                } catch { ctx.reply('❌ Erro ao gerar QR Code.'); }
                break;
            }

            // ── WIKIPEDIA ───────────────────────────────
            case 'wiki': case 'wikipedia': {
                if (!q) return ctx.reply(`Use: ${PREFIX}wiki <pesquisa>`);
                try {
                    const resp = await axios.get(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`, { timeout: 10000 });
                    const d = resp.data;
                    if (!d.extract) return ctx.reply('❌ Nenhum resultado encontrado.');
                    const txt = d.extract.length > 800 ? d.extract.slice(0, 800) + '...' : d.extract;
                    const link = d.content_urls?.mobile?.page || '';
                    const cap = `📖 *${d.title}*\n\n${txt}\n\n🔗 ${link}`;
                    if (d.originalimage?.source) {
                        await ctx.replyWithPhoto({ url: d.originalimage.source }, { caption: cap, parse_mode: 'Markdown' });
                    } else {
                        await ctx.reply(cap, { parse_mode: 'Markdown' });
                    }
                } catch { ctx.reply('❌ Nenhum resultado encontrado.'); }
                break;
            }

            // ── CEP ─────────────────────────────────────
            case 'cep': {
                if (!q) return ctx.reply(`Use: ${PREFIX}cep 01001000`);
                try {
                    const resp = await axios.get(`https://viacep.com.br/ws/${q.replace(/\D/g,'')}/json/`, { timeout: 10000 });
                    const d = resp.data;
                    if (d.erro) return ctx.reply('❌ CEP não encontrado.');
                    await ctx.reply(`📮 *CEP ${d.cep}*\n\n🏠 ${d.logradouro||'N/A'}\n🏘️ Bairro: ${d.bairro||'N/A'}\n🏙️ ${d.localidade} - ${d.uf}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar CEP.'); }
                break;
            }

            // ── ENCODE / DECODE ──────────────────────────
            case 'encode': {
                if (!q) return ctx.reply(`Use: ${PREFIX}encode <texto>`);
                await ctx.reply('🔐 `' + Buffer.from(q).toString('base64') + '`', { parse_mode: 'Markdown' });
                break;
            }
            case 'decode': {
                if (!q) return ctx.reply(`Use: ${PREFIX}decode <base64>`);
                try { await ctx.reply('🔓 ' + Buffer.from(q, 'base64').toString('utf8')); }
                catch { ctx.reply('❌ Base64 inválido.'); }
                break;
            }

            // ── IDADE ────────────────────────────────────
            case 'idade': {
                if (!q) return ctx.reply(`Use: ${PREFIX}idade dd/mm/aaaa`);
                try {
                    const [d2,m2,y2] = q.split('/').map(Number);
                    const nasc = new Date(y2,m2-1,d2);
                    const hoje = new Date();
                    let anos = hoje.getFullYear()-nasc.getFullYear();
                    if (hoje.getMonth()<nasc.getMonth()||(hoje.getMonth()===nasc.getMonth()&&hoje.getDate()<nasc.getDate())) anos--;
                    const prox = new Date(hoje.getFullYear(),nasc.getMonth(),nasc.getDate());
                    if (prox<hoje) prox.setFullYear(prox.getFullYear()+1);
                    const dias = Math.ceil((prox-hoje)/86400000);
                    await ctx.reply(`🎂 *${anos} anos*\n\n📅 Nascido: ${q}\n🎉 Próximo aniversário em *${dias} dias*`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Data inválida. Use: dd/mm/aaaa'); }
                break;
            }

            // ── STICKER ──────────────────────────────────
            case 'sticker': case 'fig': case 'figurinha': {
                const rep = ctx.message.reply_to_message;
                if (!rep?.photo && !rep?.document) return ctx.reply('📸 Responda a uma *imagem* com este comando.', { parse_mode: 'Markdown' });
                try {
                    await ctx.reply('⏳ Convertendo...');
                    const fid = rep.photo ? rep.photo[rep.photo.length-1].file_id : rep.document.file_id;
                    const fl = await ctx.telegram.getFileLink(fid);
                    const url2 = typeof fl==='string'?fl:(fl.href||String(fl));
                    const r2 = await axios.get(url2,{responseType:'arraybuffer'});
                    const sh = require('sharp');
                    const wb = await sh(Buffer.from(r2.data)).resize(512,512,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).webp({quality:90}).toBuffer();
                    await ctx.replyWithSticker({source:wb});
                } catch(e){console.error('[sticker]',e?.message);ctx.reply('❌ Erro ao converter.');}
                break;
            }

            // ── TOIMG ────────────────────────────────────
            case 'toimg': {
                const rep2 = ctx.message.reply_to_message;
                if (!rep2?.sticker) return ctx.reply('🎭 Responda a uma *figurinha* com este comando.', { parse_mode: 'Markdown' });
                try {
                    await ctx.reply('⏳ Convertendo...');
                    const fl2 = await ctx.telegram.getFileLink(rep2.sticker.file_id);
                    const url3 = typeof fl2==='string'?fl2:(fl2.href||String(fl2));
                    const r3 = await axios.get(url3,{responseType:'arraybuffer'});
                    const sh2 = require('sharp');
                    const pb = await sh2(Buffer.from(r3.data)).png().toBuffer();
                    await ctx.replyWithPhoto({source:pb},{caption:'🖼️ Figurinha convertida!'});
                } catch(e){console.error('[toimg]',e?.message);ctx.reply('❌ Erro ao converter.');}
                break;
            }

            // ── BRAT ─────────────────────────────────────
            case 'brat': {
                if (!q) return ctx.reply(`Use: ${PREFIX}brat <texto>`);
                try {
                    const { Jimp: J, loadFont: lf, measureTextHeight: mth, HorizontalAlign: HA, VerticalAlign: VA } = require('jimp');
                    const { SANS_64_BLACK } = require('jimp/fonts');
                    const img = new J({width:512,height:512,color:0x8ace00ff});
                    const font = await lf(SANS_64_BLACK);
                    const txt = q.toLowerCase();
                    const h = mth(font,txt,452);
                    img.print({font,x:30,y:Math.max(30,(512-h)/2),text:{text:txt,alignmentX:HA.LEFT,alignmentY:VA.TOP},maxWidth:452,maxHeight:452});
                    const sh3 = require('sharp');
                    const wb2 = await sh3(await img.getBuffer('image/png')).resize(512,512).webp({quality:90}).toBuffer();
                    await ctx.replyWithSticker({source:wb2});
                } catch(e){console.error('[brat]',e?.message);ctx.reply('❌ Erro ao gerar.');}
                break;
            }

            // ── SORTEAR / MOEDA / PIADA / CURIOSIDADE ────
            case 'sortear': case 'dado': case 'rolar': {
                const max = parseInt(q)||6;
                await ctx.reply(`🎲 Sorteio (1 a ${max}): *${Math.floor(Math.random()*max)+1}*`, { parse_mode: 'Markdown' });
                break;
            }
            case 'caraoucoroa': case 'moeda': {
                await ctx.reply(`🪙 ${Math.random()<0.5?'*Cara!*':'*Coroa!*'}`, { parse_mode: 'Markdown' });
                break;
            }
            case 'piada': {
                const piadas = ['😂 Por que o livro de matemática foi ao psicólogo? Tinha muitos problemas.','😂 O que o zero disse pro oito? Belo cinto!','😂 Por que o programador usa óculos? Não consegue C#.','😂 O que é um elefante na neve? Um freezer.','😂 O que a impressora disse pra folha? Pode deixar que eu te cubro.','😂 Por que o espantalho ganhou um prêmio? Era ótimo no seu campo.'];
                await ctx.reply(piadas[Math.floor(Math.random()*piadas.length)]);
                break;
            }
            case 'curiosidade': case 'sabia': {
                const curi = ['🧠 A abelha bate as asas 200 vezes por segundo.','🧠 Os polvos têm 3 corações e sangue azul.','🧠 A Lua se afasta 3,8cm da Terra por ano.','🧠 As formigas nunca dormem.','🧠 O mel nunca estraga — encontraram mel de 3000 anos no Egito.','🧠 Os tubarões são mais velhos que as árvores.','🧠 Uma nuvem pesa em média 500 toneladas.','🧠 Água quente congela mais rápido que fria (Efeito Mpemba).','🧠 Existem mais estrelas no universo do que grãos de areia na Terra.','🧠 O cérebro usa 20% da energia do corpo.'];
                await ctx.reply(curi[Math.floor(Math.random()*curi.length)]);
                break;
            }
            case 'personalidade': case 'perfil2': {
                const tipos = {Gênero:['Gay 🏳️‍🌈','Masculino 💪','Feminino 🦋','Trans 🏳️‍⚧️'],Hobbie:['Cozinhar 🍜','Ler 📚','Esportes ⛹️','Música 🎧','Jogos 🎮'],Profissão:['Médico(a)','Engenheiro(a)','Professor(a)','Programador(a)'],Período:['Manhã 🌤','Tarde 🌅','Noite 🌌','Madrugada 🌃'],Musical:['Rock','Pop','Funk','Sertanejo','Eletrônica']};
                const rnd = a=>a[Math.floor(Math.random()*a.length)];
                await ctx.reply('🎭 *Personalidade!*\n\n'+Object.entries(tipos).map(([k,v])=>`🔹 *${k}:* ${rnd(v)}`).join('\n'),{parse_mode:'Markdown'});
                break;
            }

            // ── SPOTIFY ──────────────────────────────────
            case 'spotifys': case 'spbusca': {
                if (!q) return ctx.reply(`Use: ${PREFIX}spotifys <música>`);
                try {
                    await ctx.reply('🔍 Buscando...');
                    const yt = require('yt-search');
                    const res = await yt(q+' spotify');
                    const v = res?.videos?.[0];
                    if (!v) return ctx.reply('❌ Nenhum resultado.');
                    const cap = `🎵 *${v.title}*\n\n👤 ${v.author?.name||'N/A'}\n⏱️ ${v.timestamp||'N/A'}\n🔗 ${v.url}`;
                    if (v.thumbnail){await ctx.replyWithPhoto({url:v.thumbnail},{caption:cap,parse_mode:'Markdown'});}
                    else{await ctx.reply(cap,{parse_mode:'Markdown'});}
                } catch{ctx.reply('❌ Erro na busca.');}
                break;
            }
            case 'spotifys2': case 'spdown': {
                if (!q) return ctx.reply(`Use: ${PREFIX}spotifys2 <música>`);
                try {
                    await ctx.reply('🔍 Buscando...');
                    const yt2 = require('yt-search');
                    const res2 = await yt2(q+' spotify');
                    const v2 = res2?.videos?.[0];
                    if (!v2) return ctx.reply('❌ Nenhum resultado.');
                    if (v2.thumbnail) await ctx.replyWithPhoto({url:v2.thumbnail},{caption:`🎵 *${v2.title}*\n👤 ${v2.author?.name||'N/A'} · ⏱️ ${v2.timestamp||'N/A'}`,parse_mode:'Markdown'});
                    const urlPlay = process.env.URL_API_PLAY;
                    if (urlPlay){
                        const rp = await axios.post(urlPlay,{chatId:String(ctx.from.id),busca:q},{timeout:30000});
                        if (rp.data?.linkAudio){await ctx.replyWithAudio({url:rp.data.linkAudio});}
                        else{ctx.reply('⚠️ Download indisponível.');}
                    }else{ctx.reply('ℹ️ URL_API_PLAY não configurada.');}
                } catch{ctx.reply('❌ Erro ao processar.');}
                break;
            }

            // ── ANIME (Sushi Animes) ──────────────────────
            case 'anime': case 'buscaranime': {
                if (!q) return ctx.reply(`Use: ${PREFIX}anime <nome do anime>\nEx: ${PREFIX}anime Naruto`);
                try {
                    await ctx.reply('🍙 Buscando no Sushi Animes...');
                    const cheerio = require('cheerio');
                    const resp = await axios.get(`https://sushianimes.com.br/?s=${encodeURIComponent(q)}`,{
                        headers:{'User-Agent':'Mozilla/5.0'},timeout:15000
                    });
                    const $ = cheerio.load(resp.data);
                    const resultados = [];
                    $('.TPostMv, .post, article').slice(0,5).each((i,el)=>{
                        const titulo = $(el).find('h2,h3,.Title,.entry-title').first().text().trim();
                        const link = $(el).find('a').first().attr('href');
                        const thumb = $(el).find('img').first().attr('src')||$(el).find('img').first().attr('data-src');
                        if (titulo && link) resultados.push({titulo,link,thumb});
                    });
                    if (!resultados.length) return ctx.reply('❌ Nenhum anime encontrado. Tente outro nome.');
                    const txt = `🍙 *Resultados para "${q}":*\n\n` + resultados.map((r,i)=>`*${i+1}.* [${r.titulo}](${r.link})`).join('\n');
                    if (resultados[0]?.thumb) {
                        await ctx.replyWithPhoto({url:resultados[0].thumb},{caption:txt,parse_mode:'Markdown'});
                    } else {
                        await ctx.reply(txt,{parse_mode:'Markdown'});
                    }
                } catch(e){console.error('[anime]',e?.message);ctx.reply('❌ Erro ao buscar. Tente novamente.');}
                break;
            }

            case 'anirecente': case 'animesrecentes': {
                try {
                    await ctx.reply('🍙 Buscando últimos episódios...');
                    const cheerio2 = require('cheerio');
                    const resp2 = await axios.get('https://sushianimes.com.br/',{
                        headers:{'User-Agent':'Mozilla/5.0'},timeout:15000
                    });
                    const $2 = cheerio2.load(resp2.data);
                    const recentes = [];
                    $('.TPostMv, .post, article, .episodio, .item').slice(0,8).each((i,el)=>{
                        const titulo = $2(el).find('h2,h3,.Title,.entry-title').first().text().trim();
                        const link = $2(el).find('a').first().attr('href');
                        if (titulo && link) recentes.push({titulo,link});
                    });
                    if (!recentes.length) return ctx.reply('❌ Não foi possível carregar os recentes. Acesse: https://sushianimes.com.br');
                    const txt2 = `🍙 *Últimos animes/episódios:*\n\n` + recentes.map((r,i)=>`*${i+1}.* [${r.titulo}](${r.link})`).join('\n') + '\n\n🔗 [Ver mais](https://sushianimes.com.br)';
                    await ctx.reply(txt2,{parse_mode:'Markdown'});
                } catch(e){console.error('[anirecente]',e?.message);ctx.reply(`❌ Erro ao carregar. Acesse diretamente: https://sushianimes.com.br`);}
                break;
            }

            case 'aniinfo': {
                if (!q) return ctx.reply(`Use: ${PREFIX}aniinfo <url do anime>\nEx: ${PREFIX}aniinfo https://sushianimes.com.br/anime/naruto`);
                try {
                    await ctx.reply('🍙 Carregando informações...');
                    const cheerio3 = require('cheerio');
                    const resp3 = await axios.get(q,{headers:{'User-Agent':'Mozilla/5.0'},timeout:15000});
                    const $3 = cheerio3.load(resp3.data);
                    const titulo3 = $3('h1,.Title').first().text().trim();
                    const thumb3 = $3('.TPostBg img, .Image img').first().attr('src');
                    const sinopse = $3('.Description p, .sinopse, .entry-content p').first().text().trim().slice(0,500);
                    const generos = $3('.genres a, .Tags a, .sgeneros a').map((i,el)=>$3(el).text().trim()).get().join(', ');
                    const nota = $3('.rating, .score, .imdb').first().text().trim();
                    const cap3 = `🍙 *${titulo3||'Anime'}*\n\n${sinopse?`📝 ${sinopse}...\n\n`:''}${generos?`🏷️ *Gêneros:* ${generos}\n`:''}${nota?`⭐ *Nota:* ${nota}\n`:''}\n🔗 ${q}`;
                    if (thumb3) {
                        await ctx.replyWithPhoto({url:thumb3},{caption:cap3,parse_mode:'Markdown'});
                    } else {
                        await ctx.reply(cap3,{parse_mode:'Markdown'});
                    }
                } catch(e){console.error('[aniinfo]',e?.message);ctx.reply('❌ Erro ao carregar informações do anime.');}
                break;
            }


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
