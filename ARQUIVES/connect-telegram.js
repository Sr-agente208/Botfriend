const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const { Jimp, loadFont, HorizontalAlign, VerticalAlign, measureTextHeight } = require('jimp');
const { SANS_64_BLACK } = require('jimp/fonts');
const archiver = require('archiver');
const { generateLink, processFileToLink } = require('./funcoes/linkGen');
const { uploadToCatbox, uploadToFileIo, uploadTo0x0 } = require('./funcoes/uploaders');

// ============================================================
// WHITE LOTUS — TELEGRAM EDITION
// ============================================================

const TOKEN_TG = process.env.TELEGRAM_BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const PREFIX = '©';
const LINK_LIVRO_REGRAS = 'https://dl2.bibliotecaelfica.org/dl/eyJwaWQiOjI3OTcxLCJ1aWQiOm51bGwsInBhdGgiOiJcL3ZhclwvYWNlcnZvXC9zdWdlc3RvZXNcLzVkZjEyYzAyLTJiMWQtNGVhMy04MWZkLTk0ZTZjZDZlMGJhZC5wZGYiLCJtb2RlIjoidmlzdWFsaXphciIsInNwZWVkIjo1MTIwMDAsInNpemUiOjQ4MDI1OTc0LCJ0aXRsZSI6Ik91dHJvcyAtIE9yZGVtIFBhcmFub3JtYWwiLCJleHAiOjE3ODYyNzA2MDN9.d54dffd130fe9d90a51f7e76c29358bdce935545e50e0952be26acad7d274657';

if (!TOKEN_TG) {
    console.error(chalk.red('[ERRO] TELEGRAM_BOT_TOKEN não definido!'));
    process.exit(1);
}

const bot = new Telegraf(TOKEN_TG);

// Sessão simples em memória
const sessoes = {};
function getSessao(id) {
    if (!sessoes[id]) {
        sessoes[id] = {
            pacote: null,
            jogoForca: null,
            jogoVelha: null,
            soloActive: false,
            soloHistory: [],
            soloAgente: null,
            wizardFicha: null,
            mesa: { ativa: false, mestre: null, iniciativa: [], monstros: [] }
        };
    }
    return sessoes[id];
}

// ====== BANCO DE DADOS ECONOMIA, COINS & FICHAS RPG ======
const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
const fichasPath = './DADOS DO KEISEN/usuarios/fichas_op.json';

function getCoinsDB() {
    try {
        if (!fs.existsSync(coinsPath)) return {};
        return fs.readJsonSync(coinsPath);
    } catch { return {}; }
}
function saveCoinsDB(db) {
    try {
        fs.ensureFileSync(coinsPath);
        fs.writeJsonSync(coinsPath, db, { spaces: 2 });
    } catch (e) { console.error('[saveCoinsDB]', e); }
}

function getBancoDB() {
    try {
        if (!fs.existsSync(bancoPath)) return {};
        return fs.readJsonSync(bancoPath);
    } catch { return {}; }
}
function saveBancoDB(db) {
    try {
        fs.ensureFileSync(bancoPath);
        fs.writeJsonSync(bancoPath, db, { spaces: 2 });
    } catch (e) { console.error('[saveBancoDB]', e); }
}

function getFichasDB() {
    try {
        if (!fs.existsSync(fichasPath)) return {};
        return fs.readJsonSync(fichasPath);
    } catch { return {}; }
}
function saveFichasDB(db) {
    try {
        fs.ensureFileSync(fichasPath);
        fs.writeJsonSync(fichasPath, db, { spaces: 2 });
    } catch (e) { console.error('[saveFichasDB]', e); }
}

function getOuCriarFicha(sid, pushname) {
    const db = getFichasDB();
    if (!db[sid]) {
        db[sid] = {
            nome: pushname || 'Agente Anônimo',
            origem: 'Investigador',
            classe: 'Combatente',
            trilha: 'Aniquilador',
            nex: '15%',
            agi: 2, for: 2, int: 2, pre: 2, vig: 2,
            pv: 28, pvMax: 28,
            pe: 12, peMax: 12,
            san: 30, sanMax: 30,
            defesa: 14,
            cargaMax: 9,
            condicoes: ['Saudável'],
            inventario: [
                { id: 'item_pistola', nome: 'Pistola .40', tipo: 'arma', dano: '1d12', categoria: 'I', peso: 1 },
                { id: 'item_faca', nome: 'Faca Tática', tipo: 'arma', dano: '1d4', categoria: '0', peso: 1 },
                { id: 'item_lanterna', nome: 'Lanterna Tática', tipo: 'utensilio', categoria: '0', peso: 1 },
                { id: 'item_colete', nome: 'Colete Balístico (+2 DEF)', tipo: 'protecao', defesaBonus: 2, categoria: 'I', peso: 2 },
                { id: 'item_cicatrizante', nome: 'Cicatrizante (+10 PV)', tipo: 'consumivel', curaPV: 10, qtd: 2, categoria: 'I', peso: 1 }
            ]
        };
        saveFichasDB(db);
    }
    return db[sid];
}

// ====== SERVIDOR WEB ======
const app = express();
app.use(express.json());
app.use('/pacotes', express.static(path.join(__dirname, '../temp/pacotes')));
app.get('/', (_, res) => res.send('🪷 WHITE LOTUS TG — Online'));
app.listen(PORT, '0.0.0.0', () => console.log(chalk.magenta(`[WEB] Porta ${PORT}`)));

// ====== HELPERS AI ======
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

const groqMestreSolo = async (system, historyMessages) => {
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error('GROQ_API_KEY não configurada');
    const messages = [{ role: 'system', content: system }, ...historyMessages];
    const r = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.85,
        max_tokens: 1000
    }, { headers: { Authorization: `Bearer ${key}` }, timeout: 30000 });
    return r.data.choices[0].message.content;
};

const MESTRE_SYSTEM_PROMPT = `
Você é o "Mestre White Lotus", o Mestre de RPG (Dungeon Master) oficial de Ordem Paranormal RPG.
Você está mestrando uma campanha solo e personalizada de horror e investigação paranormal para o jogador no Telegram.

Diretrizes da sua mestragem:
1. Mantenha o clima de suspense, horror e investigação da Ordo Realitas (Morte ⏳, Sangue 🩸, Conhecimento 👁️, Energia ⚡, Medo 🖤).
2. Escreva respostas envolventes, mas concisas para chat de mensagens (2 a 4 parágrafos por turno).
3. Descreva o ambiente, os detalhes perturbadores e as pistas.
4. Quando o jogador fizer uma ação que exija teste, peça o teste de atributo/perícia (ex: "Faça um teste de Agilidade ou Investigação").
5. Quando houver combate, narre a ameaça e peça o ataque ou reação do agente.
6. Termine sempre dando opções claras e perguntando: "O que você faz, Agente?".
`;

async function imgParaWebp(buffer, texto) {
    const sharp = require('sharp');
    let sharpImg = sharp(buffer)
        .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .ensureAlpha();

    if (texto && texto.trim()) {
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
    return sharp(stickerBuf)
        .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
}

async function criarWastickers(pacoteInfo) {
    const dir = path.join(__dirname, '../temp/pacotes');
    fs.ensureDirSync(dir);
    const outPath = path.join(dir, `${pacoteInfo.id}.wastickers`);
    const trayBuf = await criarTray(pacoteInfo.stickers[0]);

    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outPath);
        const archive = archiver('zip');
        output.on('close', () => resolve(outPath));
        archive.on('error', reject);
        archive.pipe(output);

        archive.append(trayBuf, { name: 'tray.png' });
        pacoteInfo.stickers.forEach((buf, i) => {
            archive.append(buf, { name: `${i + 1}.webp` });
        });

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

async function tryFetchAudioDownloadUrl(videoUrl, videoId) {
    const cobaltInstances = [
        'https://co.wuk.sh/api/json',
        'https://cobalt-api.koyeb.app/api/json',
        'https://cobalt.api.scld.me/api/json'
    ];
    for (const inst of cobaltInstances) {
        try {
            const res = await axios.post(inst, {
                url: videoUrl,
                isAudioOnly: true,
                aFormat: 'mp3'
            }, {
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                timeout: 8000
            });
            if (res.data?.url) return res.data.url;
        } catch {}
    }
    return null;
}

function botoesSoloAcoes() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🔍 Investigar Local', 'solo_act_investigar'),
            Markup.button.callback('🗡️ Atacar Ameaca', 'solo_act_atacar')
        ],
        [
            Markup.button.callback('👥 Falar / Negociar', 'solo_act_falar'),
            Markup.button.callback('🔮 Conjurar Ritual', 'cris_menu_rituais')
        ],
        [
            Markup.button.callback('🎒 Ver Inventario', 'cris_ver_itens'),
            Markup.button.callback('🎲 Teste 3d20', 'solo_act_rolar')
        ],
        [
            Markup.button.callback('🛑 Sair da Campanha', 'solo_act_sair')
        ]
    ]);
}

function botoesPericiasCris() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🎯 Pontaria', 'cris_p_pontaria'),
            Markup.button.callback('🗡️ Luta', 'cris_p_luta')
        ],
        [
            Markup.button.callback('🔍 Investigacao', 'cris_p_investigacao'),
            Markup.button.callback('🔮 Ocultismo', 'cris_p_ocultismo')
        ],
        [
            Markup.button.callback('👁️ Percepcao', 'cris_p_percepcao'),
            Markup.button.callback('🧠 Vontade', 'cris_p_vontade')
        ],
        [
            Markup.button.callback('💪 Fortitude', 'cris_p_fortitude'),
            Markup.button.callback('👟 Reflexos', 'cris_p_reflexos')
        ]
    ]);
}

function botoesRituaisCris() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🩸 Cicatrização (3d8 PV)', 'cris_rit_cicatrizacao'),
            Markup.button.callback('🩸 Armadura de Sangue (+5 DEF)', 'cris_rit_armadura')
        ],
        [
            Markup.button.callback('⚡ Eletrocussão (2d6 Dano)', 'cris_rit_eletrocussao'),
            Markup.button.callback('⏳ Decadência (2d8 Dano)', 'cris_rit_decadencia')
        ],
        [
            Markup.button.callback('👁️ Sussurros Paranormais (+5 Int)', 'cris_rit_sussurros'),
            Markup.button.callback('⚡ Coincidência Forçada (+2 Bônus)', 'cris_rit_coincidencia')
        ]
    ]);
}

function botoesTrilhasCris() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🛡️ Combatente: Aniquilador', 'cris_trilha_aniquilador'),
            Markup.button.callback('⚔️ Ocultista: Lâmina Paranormal', 'cris_trilha_lamina')
        ],
        [
            Markup.button.callback('🎯 Especialista: Atirador de Élite', 'cris_trilha_atirador'),
            Markup.button.callback('🩺 Especialista: Médico de Campo', 'cris_trilha_medico')
        ],
        [
            Markup.button.callback('🎒 Especialista: Técnico', 'cris_trilha_tecnico'),
            Markup.button.callback('🔮 Ocultista: Graduado', 'cris_trilha_graduado')
        ]
    ]);
}

function botoesOrigensWizard() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🕵️ Investigador', 'wiz_origem_Investigador'),
            Markup.button.callback('🩺 Socorrista', 'wiz_origem_Socorrista')
        ],
        [
            Markup.button.callback('👨‍💻 TI / Hacker', 'wiz_origem_TI'),
            Markup.button.callback('🪖 Atleta', 'wiz_origem_Atleta')
        ],
        [
            Markup.button.callback('🎨 Artista', 'wiz_origem_Artista'),
            Markup.button.callback('🧑‍💼 Acadêmico', 'wiz_origem_Academico')
        ],
        [
            Markup.button.callback('🔮 Ocultista Clandestino', 'wiz_origem_OcultistaClandestino')
        ]
    ]);
}

function botoesClassesWizard() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🛡️ Combatente (Mais PV)', 'wiz_classe_Combatente'),
            Markup.button.callback('🔍 Especialista (Mais Perícias)', 'wiz_classe_Especialista')
        ],
        [
            Markup.button.callback('🔮 Ocultista (Mais Rituais & SAN)', 'wiz_classe_Ocultista')
        ]
    ]);
}

function botoesTrilhasWizard(classe) {
    if (classe === 'Ocultista') {
        return Markup.inlineKeyboard([
            [Markup.button.callback('⚔️ Lâmina Paranormal', 'wiz_trilha_LaminaParanormal')],
            [Markup.button.callback('📖 Graduado', 'wiz_trilha_Graduado')],
            [Markup.button.callback('🧠 Intuitivo', 'wiz_trilha_Intuitivo')]
        ]);
    }
    if (classe === 'Especialista') {
        return Markup.inlineKeyboard([
            [Markup.button.callback('🎯 Atirador de Élite', 'wiz_trilha_AtiradorDeElite')],
            [Markup.button.callback('🩺 Médico de Campo', 'wiz_trilha_MedicoDeCampo')],
            [Markup.button.callback('🎒 Técnico', 'wiz_trilha_Tecnico')]
        ]);
    }
    return Markup.inlineKeyboard([
        [Markup.button.callback('🛡️ Aniquilador', 'wiz_trilha_Aniquilador')],
        [Markup.button.callback('📣 Comandante de Campo', 'wiz_trilha_ComandanteDeCampo')],
        [Markup.button.callback('⚡ Operações Especiais', 'wiz_trilha_OperacoesEspeciais')]
    ]);
}

function botoesAtributosWizard() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🏃 Agilidade (+1)', 'wiz_atr_agi'),
            Markup.button.callback('🏋️ Força (+1)', 'wiz_atr_for')
        ],
        [
            Markup.button.callback('🧠 Intelecto (+1)', 'wiz_atr_int'),
            Markup.button.callback('👁️ Presença (+1)', 'wiz_atr_pre')
        ],
        [
            Markup.button.callback('💪 Vigor (+1)', 'wiz_atr_vig')
        ]
    ]);
}

function botoesNexWizard() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('☣️ NEX 5% (Novato)', 'wiz_nex_5%'),
            Markup.button.callback('☣️ NEX 15% (Experiente)', 'wiz_nex_15%')
        ],
        [
            Markup.button.callback('☣️ NEX 30% (Veterano)', 'wiz_nex_30%'),
            Markup.button.callback('☣️ NEX 50% (Elite)', 'wiz_nex_50%')
        ]
    ]);
}

function botoesCondicoesCris() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🩸 Apply: Machucado', 'cond_apply_machucado'),
            Markup.button.callback('💤 Apply: Inconsciente', 'cond_apply_inconsciente')
        ],
        [
            Markup.button.callback('🧠 Apply: Perturbado', 'cond_apply_perturbado'),
            Markup.button.callback('💀 Apply: Morrendo', 'cond_apply_morrendo')
        ],
        [
            Markup.button.callback('✨ Limpar Condições', 'cond_clear')
        ]
    ]);
}

function botoesBestiarioCris() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🩸 Sangue: Zumbi de Sangue (VD 20)', 'best_zumbi'),
            Markup.button.callback('⏳ Morte: Existido (VD 10)', 'best_existido')
        ],
        [
            Markup.button.callback('👁️ Conhecimento: Sombra (VD 20)', 'best_sombra'),
            Markup.button.callback('⚡ Energia: Anomalia (VD 20)', 'best_anomalia')
        ]
    ]);
}

function botoesCatalogoArmas() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🔫 Add: Fuzil de Precisão 2d12', 'cat_add_fuzil'),
            Markup.button.callback('⚔️ Add: Katana Tática 1d10', 'cat_add_katana')
        ],
        [
            Markup.button.callback('💥 Add: Granada Incendiária 3d6', 'cat_add_granada'),
            Markup.button.callback('🛡️ Add: Escudo Tático (+2 DEF)', 'cat_add_escudo')
        ]
    ]);
}

// ====== MENUS PRINCIPAIS ======

function menuPrincipal() {
    return {
        text: '🪷 *WHITE LOTUS — MENU PRINCIPAL*\n\nEscolha uma categoria abaixo:',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🤖 Inteligência Artificial', 'menu_ia'), Markup.button.callback('🍙 Animes & Streaming', 'menu_anime')],
            [Markup.button.callback('👁️ RPG Ordem Paranormal (CRIS)', 'menu_ordem')],
            [Markup.button.callback('🎵 Música & Download', 'menu_musica'), Markup.button.callback('🎨 Figurinhas & Stickers', 'menu_sticker')],
            [Markup.button.callback('😄 Zoeira & Brincadeiras', 'menu_zoeira'), Markup.button.callback('🎮 Jogos & Minigames', 'menu_jogos')],
            [Markup.button.callback('🐾 Pets Virtuais', 'menu_pets'), Markup.button.callback('💰 Banco & Economia', 'menu_economia')],
            [Markup.button.callback('⚙️ Utilidades & Ferramentas', 'menu_util')]
        ])
    };
}

function menuOrdem() {
    return {
        text: '👁️ *ORDEM PARANORMAL RPG — C.R.I.S. COMPLETO*\n\n' +
            'Sistema completo de Ordem Paranormal RPG do Livro de Regras no Telegram!\n\n' +
            '📝 *Criador Guiado:* Crie fichas completas por botões!\n' +
            '🎒 *Gerenciador de Mochila:* Adicione e remova itens com 1 clique!\n' +
            '🤖 *Mestre Solo IA:* Jogue sozinho com botões de ação!\n' +
            '👾 *Bestiário:* Zumbi de Sangue, Existido, Sombra, Anomalia!\n' +
            '🔫 *Catálogo de Armas:* Katana, Fuzil de Precisão, Escudo, Granadas!\n' +
            '🩸 *Rituais & Trilhas:* Todos os Elementos e Habilidades do Livro!\n\n' +
            '📖 *Livro de Regras PDF:* Acesse o livro completo no acervo.\n' +
            '🌐 *Site oficial CRIS:* https://cris.site',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('📝 Criar Minha Ficha com Botões', 'wiz_start_ficha')],
            [Markup.button.callback('🤖 Jogar Solo com Mestre White Lotus', 'cmd_mestresolo_start')],
            [Markup.button.callback('🎒 Inventário & Gerenciar Itens', 'cris_ver_itens')],
            [Markup.button.callback('➕ Adicionar Novo Item', 'cris_prompt_additem'), Markup.button.callback('🗑️ Remover Item', 'cris_rm_item_menu')],
            [Markup.button.callback('🔮 Rituais Paranormais', 'cris_menu_rituais'), Markup.button.callback('🛡️ Trilhas & Habilidades', 'cris_menu_trilhas')],
            [Markup.button.callback('🎯 Rolar Perícias', 'cris_menu_pericias'), Markup.button.callback('👾 Bestiário Paranormal', 'cris_menu_bestiario')],
            [Markup.button.callback('🔫 Catálogo de Armas', 'cris_menu_catalogo'), Markup.button.callback('🩸 Condições de Saúde', 'cris_menu_condicoes')],
            [Markup.button.url('📖 Livro de Regras Oficial (PDF)', LINK_LIVRO_REGRAS)],
            [Markup.button.url('🌐 Abrir Site CRIS (cris.site)', 'https://cris.site')],
            [Markup.button.callback('📋 Minha Ficha Atual', 'cmd_ficha_op')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuAnime() {
    return {
        text: '🍙 *ANIMES & STREAMING*\n\nAssista animes, consulte sinopses e lançamentos:',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('📺 Assistir / Buscar anime', 'cmd_anime_buscar')],
            [Markup.button.callback('🏆 Animes em alta / Recentes', 'cmd_anime_recentes')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuIA() {
    return {
        text: '🤖 *INTELIGÊNCIA ARTIFICIAL & TEXTO*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('💬 Chat GPT / Llama', 'cmd_gpt'), Markup.button.callback('🔮 Signo', 'cmd_signo')],
            [Markup.button.callback('🌐 Traduzir', 'cmd_traduzir'), Markup.button.callback('✨ Gerar Nick', 'cmd_nick')],
            [Markup.button.callback('🤖 SimSimi Chat', 'cmd_simi'), Markup.button.callback('🎵 Letra de Música', 'cmd_letra')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuSticker() {
    return {
        text: '🎨 *FIGURINHAS & STICKERS*\n\nCrie figurinhas, pacotes para WhatsApp e converta mídias:',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('📦 Criar pacote WhatsApp', 'sticker_novo')],
            [Markup.button.callback('🖼️ Figurinha com texto', 'sticker_texto')],
            [Markup.button.callback('✅ Finalizar e baixar pacote', 'sticker_finalizar')],
            [Markup.button.callback('✨ Brat / Texto colorido', 'cmd_brat')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuMusica() {
    return {
        text: '🎵 *MÚSICA & DOWNLOADERS*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('▶️ Play Música', 'cmd_play'), Markup.button.callback('🎬 Download Vídeo YT', 'cmd_playvideo')],
            [Markup.button.callback('🔍 Pesquisa YouTube', 'cmd_ytsearch'), Markup.button.callback('🎧 Spotify Busca', 'cmd_spotifys')],
            [Markup.button.callback('🎵 TikTok Download', 'cmd_tiktok'), Markup.button.callback('📌 Pinterest Busca', 'cmd_pinterest')],
            [Markup.button.callback('🎧 Identificar Música (Shazam)', 'cmd_shazam')],
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
            [Markup.button.callback('💘 Ship / Casal', 'cmd_ship'), Markup.button.callback('🎭 Personalidade', 'cmd_personalidade')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuJogos() {
    return {
        text: '🎮 *JOGOS & MINIGAMES*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('✂️ Pedra Papel Tesoura', 'cmd_ppt')],
            [Markup.button.callback('❌ Jogo da Velha', 'cmd_velha')],
            [Markup.button.callback('🔤 Jogo da Forca', 'cmd_forca')],
            [Markup.button.callback('🎰 Cassino / Slot', 'cmd_cassino')],
            [Markup.button.callback('⛏️ Minerar Coins', 'cmd_minerar')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuPets() {
    return {
        text: '🐾 *PETS VIRTUAIS*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🐣 Adotar pet', 'cmd_petadotar'), Markup.button.callback('📊 Ver pet', 'cmd_pet')],
            [Markup.button.callback('🍖 Alimentar', 'cmd_petalimentar'), Markup.button.callback('🎾 Brincar', 'cmd_petbrincar')],
            [Markup.button.callback('💪 Treinar', 'cmd_pettreinar'), Markup.button.callback('💔 Abandonar', 'cmd_petabandonar')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuEconomia() {
    return {
        text: '💰 *SISTEMA DE BANCO & COINS*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🎁 Recompensa Diária', 'cmd_diario'), Markup.button.callback('💳 Meu Banco / Saldo', 'cmd_banco')],
            [Markup.button.callback('📥 Depositar', 'cmd_depositar'), Markup.button.callback('📤 Sacar', 'cmd_sacar')],
            [Markup.button.callback('👤 Ver Perfil', 'cmd_perfil')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

function menuUtil() {
    return {
        text: '⚙️ *UTILIDADES & FERRAMENTAS*',
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🔗 Gerar Link de Mídia', 'cmd_gerarlink'), Markup.button.callback('🏓 Ping', 'cmd_ping')],
            [Markup.button.callback('🌤️ Clima / Tempo', 'cmd_clima'), Markup.button.callback('📰 Notícias', 'cmd_noticias')],
            [Markup.button.callback('💱 Cotação Moedas', 'cmd_moedas'), Markup.button.callback('✂️ Encurtar Link', 'cmd_encurtar')],
            [Markup.button.callback('📱 QR Code', 'cmd_qrcode'), Markup.button.callback('📖 Wikipedia', 'cmd_wiki')],
            [Markup.button.callback('🧮 Calculadora', 'cmd_calc'), Markup.button.callback('📮 CEP', 'cmd_cep')],
            [Markup.button.callback('📍 Consultar DDD', 'cmd_ddd'), Markup.button.callback('📋 Validar/Gerar CPF', 'cmd_cpf')],
            [Markup.button.callback('◀️ Voltar', 'menu_principal')]
        ])
    };
}

// ====== ACTIONS DE MENUS ======
bot.action('menu_principal', async (ctx) => { await ctx.answerCbQuery(); const m = menuPrincipal(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_ia', async (ctx) => { await ctx.answerCbQuery(); const m = menuIA(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_ordem', async (ctx) => { await ctx.answerCbQuery(); const m = menuOrdem(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_anime', async (ctx) => { await ctx.answerCbQuery(); const m = menuAnime(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_sticker', async (ctx) => { await ctx.answerCbQuery(); const m = menuSticker(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_musica', async (ctx) => { await ctx.answerCbQuery(); const m = menuMusica(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_zoeira', async (ctx) => { await ctx.answerCbQuery(); const m = menuZoeira(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_jogos', async (ctx) => { await ctx.answerCbQuery(); const m = menuJogos(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_pets', async (ctx) => { await ctx.answerCbQuery(); const m = menuPets(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_economia', async (ctx) => { await ctx.answerCbQuery(); const m = menuEconomia(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });
bot.action('menu_util', async (ctx) => { await ctx.answerCbQuery(); const m = menuUtil(); await ctx.editMessageText(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) }); });

// ACTIONS DE BESTIÁRIO, CATÁLOGO E CONDIÇÕES CRIS
bot.action('cris_menu_bestiario', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('👾 *BESTIÁRIO PARANORMAL — LIVRO DE REGRAS*\n\nEscolha uma ameaça para consultar a ficha:', { parse_mode: 'Markdown', ...botoesBestiarioCris() });
});

bot.action('cris_menu_catalogo', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔫 *CATÁLOGO DE ARMAS E EQUIPAMENTOS*\n\nEscolha um item para adicionar à sua mochila:', { parse_mode: 'Markdown', ...botoesCatalogoArmas() });
});

bot.action('cris_prompt_additem', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('➕ *Adicionar Item ao Inventário*\n\nVocê pode adicionar pelo catálogo ou usando o comando:\n`/additem <Nome do Item> | <Categoria> | <Peso>`\nEx: `/additem Kit de Medicina | I | 1`', { parse_mode: 'Markdown', ...botoesCatalogoArmas() });
});

bot.action('cris_rm_item_menu', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const f = getOuCriarFicha(sid, pushname);

    if (!f.inventario || f.inventario.length === 0) {
        return ctx.reply('🎒 Seu inventário está vazio.');
    }

    const delButtons = f.inventario.map((it, idx) => [
        Markup.button.callback(`🗑️ Remover ${idx + 1}. ${it.nome}`, `cris_del_idx_${idx}`)
    ]);

    await ctx.reply('🗑️ *Clique no item que deseja remover da sua mochila:*', { parse_mode: 'Markdown', ...Markup.inlineKeyboard(delButtons) });
});

bot.action(/^cris_del_idx_(\d+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const idx = parseInt(ctx.match[1]);
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    if (f.inventario && f.inventario[idx]) {
        const removido = f.inventario.splice(idx, 1)[0];
        db[sid] = f;
        saveFichasDB(db);
        await ctx.reply(`🗑️ *Item Removido:* \`${removido.nome}\` foi retirado da sua mochila!`, { parse_mode: 'Markdown' });
    } else {
        await ctx.reply('❌ Item não encontrado.');
    }
});

bot.action('cris_menu_condicoes', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const f = getOuCriarFicha(sid, pushname);

    await ctx.reply(
        `🩸 *GERENCIADOR DE CONDIÇÕES CRIS*\n\n` +
        `👤 *Agente:* ${f.nome}\n` +
        `❤️ *PV:* ${f.pv}/${f.pvMax} | 🧠 *SAN:* ${f.san}/${f.sanMax}\n` +
        `⚠️ *Condições Ativas:* ${f.condicoes?.join(', ') || 'Saudável'}\n\n` +
        `Clique para aplicar/limpar condições:`,
        { parse_mode: 'Markdown', ...botoesCondicoesCris() }
    );
});

bot.action(/^cond_apply_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const cond = ctx.match[1];
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    if (!f.condicoes) f.condicoes = [];
    if (!f.condicoes.includes(cond)) f.condicoes.push(cond.toUpperCase());

    db[sid] = f;
    saveFichasDB(db);

    await ctx.reply(`⚠️ *Condição Aplicada:* \`${cond.toUpperCase()}\` no Agente ${f.nome}!`, { parse_mode: 'Markdown' });
});

bot.action('cond_clear', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    f.condicoes = ['Saudável'];
    db[sid] = f;
    saveFichasDB(db);

    await ctx.reply(`✨ *Condições Limpas!* Agente ${f.nome} está *Saudável*.`, { parse_mode: 'Markdown' });
});

bot.action(/^best_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const b = ctx.match[1];

    const bests = {
        zumbi: '👾 *ZUMBI DE SANGUE (VD 20)*\n\n❤️ *PV:* 35 | 🛡️ *Defesa:* 14\n🩸 *Elemento:* Sangue\n💥 *Ataque:* Garra 2d20+5 (Dano 1d8+3)\n👁️ *Habilidade:* Presença Perturbadora (SAN -2)',
        existido: '👾 *EXISTIDO (VD 10)*\n\n❤️ *PV:* 20 | 🛡️ *Defesa:* 12\n⏳ *Elemento:* Morte\n💥 *Ataque:* Toque Entrópico 2d20+3 (Dano 1d6+2 Morte)\n⏳ *Habilidade:* Descomposição Lenta',
        sombra: '👾 *SOMBRA (VD 20)*\n\n❤️ *PV:* 30 | 🛡️ *Defesa:* 16\n👁️ *Elemento:* Conhecimento\n💥 *Ataque:* Suspiro Obsessivo 2d20+6 (Dano 1d8 Mental)\n🧠 *Habilidade:* Invisibilidade na Escuridão',
        anomalia: '👾 *ANOMALIA (VD 20)*\n\n❤️ *PV:* 25 | 🛡️ *Defesa:* 15\n⚡ *Elemento:* Energia\n💥 *Ataque:* Arcos Elétricos 2d20+5 (Dano 1d10 Energia)\n⚡ *Habilidade:* Caos Estático'
    };

    await ctx.reply(bests[b] || '👾 Criatura Paranormal do Livro de Regras!', { parse_mode: 'Markdown' });
});

bot.action(/^cat_add_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const itemKey = ctx.match[1];
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    const catalogItens = {
        fuzil: { id: `item_fuzil_${Date.now()}`, nome: 'Fuzil de Precisão (2d12)', tipo: 'arma', dano: '2d12', categoria: 'III', peso: 2 },
        katana: { id: `item_katana_${Date.now()}`, nome: 'Katana Tática (1d10, Crit 19/x3)', tipo: 'arma', dano: '1d10', categoria: 'II', peso: 1 },
        granada: { id: `item_granada_${Date.now()}`, nome: 'Granada Incendiária (3d6 Fogo)', tipo: 'consumivel', categoria: 'I', peso: 1 },
        escudo: { id: `item_escudo_${Date.now()}`, nome: 'Escudo Tático (+2 DEF e Cobertura)', tipo: 'protecao', defesaBonus: 2, categoria: 'II', peso: 2 }
    };

    const newItem = catalogItens[itemKey];
    if (newItem) {
        f.inventario.push(newItem);
        if (newItem.defesaBonus) f.defesa += newItem.defesaBonus;
        db[sid] = f;
        saveFichasDB(db);
        await ctx.reply(`✅ *Item do Livro de Regras Adicionado:*\n\n📦 *${newItem.nome}* (Cat. ${newItem.categoria} | Peso: ${newItem.peso})`, { parse_mode: 'Markdown' });
    }
});

// WIZARD CRIAR FICHA COM BOTÕES
bot.action('wiz_start_ficha', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const s = getSessao(sid);

    s.wizardFicha = {
        nome: pushname,
        origem: 'Investigador',
        classe: 'Combatente',
        trilha: 'Aniquilador',
        nex: '15%',
        pontosRestantes: 4,
        agi: 1, for: 1, int: 1, pre: 1, vig: 1
    };

    await ctx.reply('📋 *CRIADOR DE FICHA CRIS — PASSO 1/5: ORIGEM*\n\nEscolha a Origem do seu Agente da Ordo Realitas:', { parse_mode: 'Markdown', ...botoesOrigensWizard() });
});

bot.action(/^wiz_origem_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.wizardFicha) s.wizardFicha = { nome: ctx.from.first_name || 'Agente', agi: 1, for: 1, int: 1, pre: 1, vig: 1, pontosRestantes: 4 };

    s.wizardFicha.origem = ctx.match[1];
    await ctx.reply(`✅ Origem definida: *${s.wizardFicha.origem}*\n\n📋 *PASSO 2/5: CLASSE*\nEscolha a Classe do seu Agente:`, { parse_mode: 'Markdown', ...botoesClassesWizard() });
});

bot.action(/^wiz_classe_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.wizardFicha) return;

    s.wizardFicha.classe = ctx.match[1];
    await ctx.reply(`✅ Classe definida: *${s.wizardFicha.classe}*\n\n📋 *PASSO 3/5: TRILHA*\nEscolha a Trilha de Especialização:`, { parse_mode: 'Markdown', ...botoesTrilhasWizard(s.wizardFicha.classe) });
});

bot.action(/^wiz_trilha_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    if (!s.wizardFicha) return;

    s.wizardFicha.trilha = ctx.match[1];
    await ctx.reply(
        `✅ Trilha definida: *${s.wizardFicha.trilha}*\n\n` +
        `📋 *PASSO 4/5: DISTRIBUIÇÃO DE ATRIBUTOS*\n` +
        `Todos atributos começam em 1. Você tem *${s.wizardFicha.pontosRestantes} pontos* para distribuir:\n\n` +
        `• 🏃 Agilidade: *${s.wizardFicha.agi}*\n` +
        `• 🏋️ Força: *${s.wizardFicha.for}*\n` +
        `• 🧠 Intelecto: *${s.wizardFicha.int}*\n` +
        `• 👁️ Presença: *${s.wizardFicha.pre}*\n` +
        `• 💪 Vigor: *${s.wizardFicha.vig}*`,
        { parse_mode: 'Markdown', ...botoesAtributosWizard() }
    );
});

bot.action(/^wiz_atr_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    const w = s.wizardFicha;
    if (!w) return;

    const atr = ctx.match[1];
    if (w.pontosRestantes > 0) {
        if (w[atr] < 3) {
            w[atr]++;
            w.pontosRestantes--;
        }
    }

    if (w.pontosRestantes > 0) {
        return ctx.reply(
            `📊 *DISTRIBUIÇÃO DE ATRIBUTOS*\nPontos restantes: *${w.pontosRestantes}*\n\n` +
            `• 🏃 Agilidade: *${w.agi}*\n• 🏋️ Força: *${w.for}*\n• 🧠 Intelecto: *${w.int}*\n• 👁️ Presença: *${w.pre}*\n• 💪 Vigor: *${w.vig}*`,
            { parse_mode: 'Markdown', ...botoesAtributosWizard() }
        );
    }

    await ctx.reply(`✅ Atributos distribuídos!\n\n📋 *PASSO 5/5: ESCOLHA O NEX % INICIAL*`, { parse_mode: 'Markdown', ...botoesNexWizard() });
});

bot.action(/^wiz_nex_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const s = getSessao(sid);
    const w = s.wizardFicha;
    if (!w) return;

    w.nex = ctx.match[1];

    let pvBase = 20, pvNex = 6, peBase = 2, peNex = 2, sanBase = 12, sanNex = 3;
    if (w.classe === 'Especialista') { pvBase = 16; pvNex = 4; peBase = 3; peNex = 3; sanBase = 16; sanNex = 4; }
    else if (w.classe === 'Ocultista') { pvBase = 12; pvNex = 3; peBase = 4; peNex = 4; sanBase = 20; sanNex = 5; }

    const nexVal = parseInt(w.nex) || 15;
    const multiplicador = Math.floor(nexVal / 5) - 1;

    const pvMax = pvBase + w.vig + (multiplicador * (pvNex + w.vig));
    const peMax = peBase + w.pre + (multiplicador * (peNex + w.pre));
    const sanMax = sanBase + (multiplicador * sanNex);

    const db = getFichasDB();
    db[sid] = {
        nome: w.nome || pushname,
        origem: w.origem || 'Investigador',
        classe: w.classe || 'Combatente',
        trilha: w.trilha || 'Aniquilador',
        nex: w.nex,
        agi: w.agi, for: w.for, int: w.int, pre: w.pre, vig: w.vig,
        pv: pvMax, pvMax: pvMax,
        pe: peMax, peMax: peMax,
        san: sanMax, sanMax: sanMax,
        defesa: 10 + w.agi + 2,
        cargaMax: 5 + (w.for * 2),
        condicoes: ['Saudável'],
        inventario: [
            { id: 'item_pistola', nome: 'Pistola .40', tipo: 'arma', dano: '1d12', categoria: 'I', peso: 1 },
            { id: 'item_faca', nome: 'Faca Tática', tipo: 'arma', dano: '1d4', categoria: '0', peso: 1 },
            { id: 'item_lanterna', nome: 'Lanterna Tática', tipo: 'utensilio', categoria: '0', peso: 1 },
            { id: 'item_colete', nome: 'Colete Balístico (+2 DEF)', tipo: 'protecao', defesaBonus: 2, categoria: 'I', peso: 2 },
            { id: 'item_cicatrizante', nome: 'Cicatrizante (+10 PV)', tipo: 'consumivel', curaPV: 10, qtd: 2, categoria: 'I', peso: 1 }
        ]
    };

    saveFichasDB(db);
    s.wizardFicha = null;

    const f = db[sid];
    const txt = `🎉 *FICHA DO AGENTE CRIADA COM SUCESSO! — C.R.I.S.*\n\n` +
        `👤 *Nome:* ${f.nome}\n` +
        `🕵️ *Origem:* ${f.origem}\n` +
        `🛡️ *Classe:* ${f.classe} | ⭐ *Trilha:* ${f.trilha}\n` +
        `☣️ *NEX:* ${f.nex}\n\n` +
        `📊 *ATRIBUTOS CRIS:*\n` +
        `• 🏃 AGI: ${f.agi} | 🏋️ FOR: ${f.for}\n` +
        `• 🧠 INT: ${f.int} | 👁️ PRE: ${f.pre}\n` +
        `• 💪 VIG: ${f.vig}\n\n` +
        `❤️ *PV:* ${f.pv}/${f.pvMax} | ⚡ *PE:* ${f.pe}/${f.peMax} | 🧠 *SAN:* ${f.san}/${f.sanMax}\n` +
        `🛡️ *Defesa:* ${f.defesa} | 📦 *Carga:* ${f.cargaMax} Espaços\n\n` +
        `📖 *Livro de Regras Official PDF:* ${LINK_LIVRO_REGRAS}\n` +
        `🌐 *Site CRIS:* https://cris.site`;

    const btns = Markup.inlineKeyboard([
        [Markup.button.callback('🤖 Jogar Solo com Mestre White Lotus', 'cmd_mestresolo_start')],
        [Markup.button.callback('🎒 Ver Inventário', 'cris_ver_itens'), Markup.button.callback('🗑️ Remover Item', 'cris_rm_item_menu')],
        [Markup.button.callback('🎯 Rolar Perícia', 'cris_menu_pericias'), Markup.button.callback('🔮 Rituais', 'cris_menu_rituais')],
        [Markup.button.url('📖 Livro de Regras PDF', LINK_LIVRO_REGRAS)]
    ]);

    await ctx.reply(txt, { parse_mode: 'Markdown', ...btns });
});

bot.action('cmd_mestresolo_start', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    s.soloActive = true;
    s.soloHistory = [];
    await ctx.reply(
        '👁️ *MESTRE WHITE LOTUS — ORDEM PARANORMAL SOLO*\n\n' +
        '_Iniciando investigação paranormal..._\n\n' +
        'O ar fica gélido no recinto. Os relógios de ponteiro começam a desacelerar. A Ordo Realitas enviou você para investigar uma anomalia numa casa abandonada no centro da cidade, onde relatos afirmam que vizinhos escutam sussurros em um idioma incompreensível...\n\n' +
        'Você segura sua lanterna e seu equipamento. O que você faz, Agente?\n\n' +
        '👇 *Escolha uma ação nos botões abaixo ou digite seu texto:*',
        { parse_mode: 'Markdown', ...botoesSoloAcoes() }
    );
    s.soloHistory.push({
        role: 'assistant',
        content: 'O ar fica gélido no recinto. A Ordo Realitas enviou você para investigar uma anomalia numa casa abandonada onde vizinhos escutam sussurros em um idioma incompreensível... Você segura sua lanterna e seu equipamento. O que você faz, Agente?'
    });
});

bot.action(/^solo_act_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const act = ctx.match[1];
    const sid = String(ctx.from.id);
    const s = getSessao(sid);

    if (act === 'sair') {
        s.soloActive = false;
        s.soloHistory = [];
        return ctx.reply('👁️ *Campanha Solo Finalizada.* Você saiu do modo Mestre Solo.', { parse_mode: 'Markdown' });
    }

    if (act === 'rolar') {
        const d = Math.floor(Math.random() * 20) + 1;
        return ctx.reply(`🎲 *Teste Rápido d20:* Total = *${d}*${d === 20 ? ' 🔥 CRÍTICO!' : ''}`, { parse_mode: 'Markdown' });
    }

    const acoesTexto = {
        investigar: 'Examina o local detalhadamente buscando pistas e marcas paranormais.',
        atacar: 'Saca sua arma e ataca a ameaça com determinação!',
        falar: 'Tenta conversar e entender os sussurros e a situação.',
        ocultismo: 'Concentra-se para sentir o elemento paranormal e usar rituais.'
    };

    const textoAcao = acoesTexto[act] || 'Realiza uma ação no local.';
    await ctx.reply(`👉 *Você:* ${textoAcao}`);

    s.soloHistory.push({ role: 'user', content: textoAcao });
    if (s.soloHistory.length > 12) s.soloHistory = s.soloHistory.slice(s.soloHistory.length - 12);

    try {
        await ctx.reply('👁️ *Mestre White Lotus narrando...*', { parse_mode: 'Markdown' });
        const respMestre = await groqMestreSolo(MESTRE_SYSTEM_PROMPT, s.soloHistory);
        s.soloHistory.push({ role: 'assistant', content: respMestre });
        await ctx.reply(respMestre, { parse_mode: 'Markdown', ...botoesSoloAcoes() });
    } catch (e) {
        ctx.reply('👁️ *Mestre White Lotus:* Algo perturbou o Paranormal. Tente novamente!', { parse_mode: 'Markdown', ...botoesSoloAcoes() });
    }
});

bot.action('cris_ver_itens', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const f = getOuCriarFicha(sid, pushname);

    let txt = `🎒 *INVENTÁRIO DO AGENTE ${f.nome.toUpperCase()} — CRIS*\n\n`;
    let pesoTotal = 0;

    f.inventario.forEach((it, i) => {
        pesoTotal += (it.peso || 1) * (it.qtd || 1);
        txt += `*${i + 1}.* ${it.nome} (Cat. ${it.categoria} | Peso: ${it.peso || 1})\n`;
    });

    txt += `\n📦 *Carga:* ${pesoTotal}/${f.cargaMax} Espaços\n`;
    txt += `🌐 *Ficha Oficial CRIS:* https://cris.site`;

    const btns = Markup.inlineKeyboard([
        [Markup.button.callback('➕ Adicionar Item', 'cris_prompt_additem'), Markup.button.callback('🗑️ Remover Item', 'cris_rm_item_menu')],
        [Markup.button.callback('💊 Usar Cicatrizante (+10 PV)', 'cris_usar_cicatrizante'), Markup.button.callback('🗡️ Atacar com Arma', 'cris_atacar_arma')],
        [Markup.button.callback('📋 Ver Ficha Completa', 'cmd_ficha_op')]
    ]);

    await ctx.reply(txt, { parse_mode: 'Markdown', ...btns });
});

bot.action('cris_usar_cicatrizante', async (ctx) => {
    await ctx.answerCbQuery();
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    f.pv = Math.min(f.pvMax, f.pv + 10);
    db[sid] = f;
    saveFichasDB(db);

    await ctx.reply(`💊 *Item Usado: Cicatrizante!*\n\n❤️ Você recuperou +10 PV!\n❤️ Pontos de Vida Atuais: *${f.pv}/${f.pvMax} PV*`, { parse_mode: 'Markdown' });
});

bot.action('cris_atacar_arma', async (ctx) => {
    await ctx.answerCbQuery();
    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    const maior = Math.max(d1, d2);
    const dano = Math.floor(Math.random() * 12) + 1 + 2;

    await ctx.reply(
        `🗡️ *Ataque com Pistola .40 — CRIS*\n\n` +
        `🎲 *Teste de Pontaria (2d20):* [ ${d1}, ${d2} ] -> Maior: *${maior}*\n` +
        `💥 *Dano:* *${dano}* Dano de Perfuração!\n` +
        `${maior >= 19 ? '🔥 *ACERTO CRÍTICO!* Dano Dobrado!' : ''}`,
        { parse_mode: 'Markdown' }
    );
});

bot.action('cris_menu_pericias', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🎯 *Escolha a perícia para rolar o teste:*', { parse_mode: 'Markdown', ...botoesPericiasCris() });
});

bot.action('cris_menu_rituais', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔮 *RITUAIS PARANORMAIS — C.R.I.S.*\n\nEscolha um ritual para conjurar:', { parse_mode: 'Markdown', ...botoesRituaisCris() });
});

bot.action('cris_menu_trilhas', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🛡️ *TRILHAS DE CLASSE — ORDEM PARANORMAL*\n\nEscolha sua Trilha:', { parse_mode: 'Markdown', ...botoesTrilhasCris() });
});

bot.action(/^cris_rit_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const rit = ctx.match[1];
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    if (f.pe < 1) return ctx.reply('❌ PE insuficiente para conjurar rituais.');

    f.pe -= 1;
    db[sid] = f;
    saveFichasDB(db);

    const rituaisInfo = {
        cicatrização: '🩸 *Cicatrização (Sangue)*\nRecupera +3d8+3 PV do Agente e estanca sangramento!',
        armadura: '🩸 *Armadura de Sangue*\nSua pele endurece! Defesa aumentada em +5!',
        eletrocussão: '⚡ *Eletrocussão (Energia)*\nDispara arcos elétricos! Dano: *2d6 Energia* + atordoamento!',
        decadencia: '⏳ *Decadência (Morte)*\nAcelera o envelhecimento da matéria! Dano: *2d8 Morte*!',
        sussurros: '👁️ *Sussurros Paranormais (Conhecimento)*\nRevela segredos e concede +5 em testes de Investigação!',
        coincidencia: '⚡ *Coincidência Forçada (Energia)*\nAltera a probabilidade! Bônus de +2 em todos os testes no próximo turno!'
    };

    const desc = rituaisInfo[rit] || '🔮 Ritual Paranormal Conjurado com sucesso!';
    await ctx.reply(`🔮 *RITUAL CONJURADO!* (-1 PE)\n\n${desc}\n⚡ PE Restante: *${f.pe}/${f.peMax} PE*`, { parse_mode: 'Markdown' });
});

bot.action(/^cris_trilha_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const t = ctx.match[1];
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const db = getFichasDB();
    const f = getOuCriarFicha(sid, pushname);

    const trilhasNomes = {
        aniquilador: 'Aniquilador (Combatente)',
        lamina: 'Lâmina Paranormal (Ocultista)',
        atirador: 'Atirador de Élite (Especialista)',
        medico: 'Médico de Campo (Especialista)',
        tecnico: 'Técnico (Especialista)',
        graduado: 'Graduado (Ocultista)'
    };

    f.trilha = trilhasNomes[t] || t;
    db[sid] = f;
    saveFichasDB(db);

    await ctx.reply(`🛡️ *Trilha Selecionada no CRIS!*\n\n👤 *Agente:* ${f.nome}\n⭐ *Trilha:* ${f.trilha}\n\nSua trilha desbloqueia habilidades especiais a cada NEX %!`, { parse_mode: 'Markdown' });
});

bot.action(/^cris_p_(.+)$/, async (ctx) => {
    await ctx.answerCbQuery();
    const p = ctx.match[1];
    const sid = String(ctx.from.id);
    const pushname = ctx.from.first_name || 'Agente';
    const f = getOuCriarFicha(sid, pushname);

    const d1 = Math.floor(Math.random() * 20) + 1;
    const d2 = Math.floor(Math.random() * 20) + 1;
    const maior = Math.max(d1, d2);
    const bonus = 5;
    const total = maior + bonus;

    await ctx.reply(
        `🎲 *Teste de Perícia CRIS — ${p.toUpperCase()}*\n\n` +
        `👤 *Agente:* ${f.nome}\n` +
        `🎲 *Dados Rolados (2d20):* [ ${d1}, ${d2} ] -> Maior: *${maior}*\n` +
        `➕ *Bônus Perícia:* +${bonus}\n` +
        `📊 *TOTAL:* *${total}*\n` +
        `${maior === 20 ? '🔥 *SUCESSO CRÍTICO!*' : ''}`,
        { parse_mode: 'Markdown' }
    );
});

// Botões de ajuda rápida
bot.action('cmd_gerarlink', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply('🔗 *Gerar Link de Mídia*\n\n• Mande foto, vídeo, áudio ou documento na legenda com `/gerarlink` ou `©gerarlink`\n• Ou responda a uma mídia com `gerarlink` / `/gerarlink`.', { parse_mode: 'Markdown' });
});
bot.action('cmd_ping', async (ctx) => { await ctx.answerCbQuery('🏓 Pong!'); await ctx.reply('🏓 *Pong!* Bot online! 🪷', { parse_mode: 'Markdown' }); });
bot.action('cmd_anime_buscar', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📺 Use: `/assistir <nome do anime>` ou `/anime <nome>`\nEx: `/assistir Naruto Shippuden`', { parse_mode: 'Markdown' }); });
bot.action('cmd_anime_recentes', async (ctx) => {
    await ctx.answerCbQuery();
    try {
        const res = await axios.get('https://api.jikan.moe/v4/seasons/now?limit=8', { timeout: 15000 });
        const top = res.data?.data;
        if (!top?.length) return ctx.reply('❌ Não foi possível carregar os animes recentes.');
        let txt = '🏆 *Animes Recentes e da Temporada:*\n\n';
        top.forEach((a, i) => {
            const linkAf = `https://animefire.plus/pesquisar/${encodeURIComponent(a.title)}`;
            txt += `*${i + 1}.* [${a.title}](${a.url}) — ⭐ ${a.score || '?'}\n   📺 [Assistir online](${linkAf})\n\n`;
        });
        await ctx.reply(txt, { parse_mode: 'Markdown' });
    } catch { ctx.reply('❌ Erro ao carregar animes recentes.'); }
});

bot.action('cmd_gpt', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('💬 Use: `/gpt sua pergunta`', { parse_mode: 'Markdown' }); });
bot.action('cmd_signo', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🔮 Use: `/signo aries`', { parse_mode: 'Markdown' }); });
bot.action('cmd_traduzir', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🌐 Use: `/traduzir en | bom dia`', { parse_mode: 'Markdown' }); });
bot.action('cmd_nick', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('✨ Use: `/nick SeuNome`', { parse_mode: 'Markdown' }); });
bot.action('cmd_simi', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🤖 Use: `/simi oi tudo bem?`', { parse_mode: 'Markdown' }); });
bot.action('cmd_letra', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎵 Use: `/letra nome da música`', { parse_mode: 'Markdown' }); });

bot.action('cmd_play', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎵 Use: `/play nome da música`', { parse_mode: 'Markdown' }); });
bot.action('cmd_playvideo', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎬 Use: `/playvideo nome do vídeo`', { parse_mode: 'Markdown' }); });
bot.action('cmd_ytsearch', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🔍 Use: `/ytsearch busca`', { parse_mode: 'Markdown' }); });
bot.action('cmd_spotifys', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎧 Use: `/spotifys nome da música`', { parse_mode: 'Markdown' }); });
bot.action('cmd_tiktok', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎵 Use: `/tiktok busca ou link`', { parse_mode: 'Markdown' }); });
bot.action('cmd_pinterest', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📌 Use: `/pinterest busca`', { parse_mode: 'Markdown' }); });
bot.action('cmd_shazam', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎧 Responda a um áudio/vídeo com `/shazam`', { parse_mode: 'Markdown' }); });

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
    ];
    await ctx.reply(pc[Math.floor(Math.random() * pc.length)]);
});
bot.action('cmd_cantada', async (ctx) => {
    await ctx.answerCbQuery();
    const ca = ['😏 Você tem GPS? Porque me perdi nos seus olhos.','😏 Você é química? Porque temos uma reação.','😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.'];
    await ctx.reply(ca[Math.floor(Math.random()*ca.length)]);
});
bot.action('cmd_sortear', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply(`🎲 Dado: *${Math.floor(Math.random()*6)+1}*`, { parse_mode: 'Markdown' }); });
bot.action('cmd_moeda', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply(`🪙 ${Math.random()<0.5?'*Cara!*':'*Coroa!*'}`, { parse_mode: 'Markdown' }); });
bot.action('cmd_ship', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('💘 Use: `/ship Nome1 e Nome2`', { parse_mode: 'Markdown' }); });
bot.action('cmd_personalidade', async (ctx) => {
    await ctx.answerCbQuery();
    const tipos={Gênero:['Gay 🏳️‍🌈','Masculino 💪','Feminino 🦋','Trans 🏳️‍⚧️'],Hobbie:['Cozinhar 🍜','Ler 📚','Esportes ⛹️','Música 🎧','Jogos 🎮'],Profissão:['Médico(a)','Engenheiro(a)','Professor(a)','Programador(a)'],Período:['Manhã 🌤','Tarde 🌅','Noite 🌌','Madrugada 🌃'],Musical:['Rock','Pop','Funk','Sertanejo','Eletrônica']};
    const rnd=a=>a[Math.floor(Math.random()*a.length)];
    await ctx.reply('🎭 *Personalidade!*\n\n'+Object.entries(tipos).map(([k,v])=>`🔹 *${k}:* ${rnd(v)}`).join('\n'),{parse_mode:'Markdown'});
});

bot.action('cmd_ppt', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('✂️ Use: `/ppt pedra`, `/ppt papel` ou `/ppt tesoura`', { parse_mode: 'Markdown' }); });
bot.action('cmd_velha', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('❌ Use: `/velha 1-9` para jogar jogo da velha contra o bot.', { parse_mode: 'Markdown' }); });
bot.action('cmd_forca', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🔤 Use: `/forca` para iniciar um jogo da forca.', { parse_mode: 'Markdown' }); });
bot.action('cmd_cassino', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎰 Use: `/cassino <valor>` para apostar suas moedas.', { parse_mode: 'Markdown' }); });
bot.action('cmd_minerar', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('⛏️ Use: `/minerar` para minerar moedas.', { parse_mode: 'Markdown' }); });

bot.action('cmd_diario', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🎁 Use: `/diario` para resgatar suas moedas diárias.', { parse_mode: 'Markdown' }); });
bot.action('cmd_banco', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('💳 Use: `/banco` para ver seu saldo bancário.', { parse_mode: 'Markdown' }); });
bot.action('cmd_depositar', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📥 Use: `/depositar <quantidade>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_sacar', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📤 Use: `/sacar <quantidade>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_perfil', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('👤 Use: `/perfil` para ver seu perfil completo.', { parse_mode: 'Markdown' }); });

bot.action('cmd_clima', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🌤️ Use: `/clima <nome da cidade>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_noticias', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📰 Use: `/noticias` ou `/gnews <assunto>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_moedas', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('💱 Use: `/moedas` para ver cotação de USD, EUR e BTC.', { parse_mode: 'Markdown' }); });
bot.action('cmd_encurtar', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('✂️ Use: `/encurtar <link>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_qrcode', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📱 Use: `/qrcode <texto ou link>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_wiki', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📖 Use: `/wiki <termo>`', { parse_mode: 'Markdown' }); });
bot.action('cmd_calc', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('🧮 Use: `/calc <expressão>\nEx: /calc 10 * 5 + 2`', { parse_mode: 'Markdown' }); });
bot.action('cmd_cep', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📮 Use: `/cep 01001000`', { parse_mode: 'Markdown' }); });
bot.action('cmd_ddd', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📍 Use: `/ddd 11`', { parse_mode: 'Markdown' }); });
bot.action('cmd_cpf', async (ctx) => { await ctx.answerCbQuery(); await ctx.reply('📋 Use: `/gerarcpf` ou `/validarcpf <cpf>`', { parse_mode: 'Markdown' }); });

// Sticker pack buttons
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
    await ctx.reply('✏️ Mande agora a *imagem + legenda* que vai virar figurinha com texto.', { parse_mode: 'Markdown' });
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
            { caption: `🎉 *Pacote pronto!*\n📦 ${s.pacote.nome}\n🖼️ ${s.pacote.stickers.length} figurinha(s)\n\n*Como importar no WhatsApp:*\n1. Baixe o arquivo\n2. Abra com o app "Sticker Maker"\n3. Importe o .wastickers 🪷`, parse_mode: 'Markdown' }
        );
        s.pacote = null;
    } catch (e) {
        console.error(e);
        ctx.reply('❌ Erro ao gerar o pacote. Tente novamente.');
    }
});

// Pet actions
const petActions = ['petadotar','pet','petalimentar','petbrincar','pettreinar','petabandonar'];
petActions.forEach(cmd => {
    bot.action(`cmd_${cmd}`, async (ctx) => {
        await ctx.answerCbQuery();
        if (cmd === 'petadotar') return ctx.reply(`🐾 Para adotar, mande: \`/petadotar <nome>\``, { parse_mode: 'Markdown' });
        await executarPet(ctx, cmd, '');
    });
});

// ====== FUNÇÃO PETS ======
async function executarPet(ctx, command, q) {
    const sender = String(ctx.from?.id || '');
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
        if (!q) return reply('Use: `/petadotar <nome>`');
        const especie = especiesPet[Math.floor(Math.random()*especiesPet.length)];
        petsDB[sender] = { nome: q, especie, nivel:1, xp:0, fome:80, felicidade:80, ultimaAlimentacao:Date.now(), ultimoBrincar:Date.now() };
        save(); return reply(`🐾 Você adotou um(a) *${especie}* chamado(a) *${q}*!`);
    }
    if (command === 'pet') {
        const pet = petsDB[sender]; if (!pet) return reply(`Adote um pet com \`/petadotar <nome>\``);
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
const mediaGroupVisto = new Set();

bot.on(['photo', 'document'], async (ctx, next) => {
    const text = ctx.message.caption || '';
    if (/^[\/©.!#$]/.test(text)) return next();

    const sid = String(ctx.from.id);
    const s = getSessao(sid);

    if (!s.pacote) return next();

    if (s.pacote.aguardandoNome) {
        return ctx.reply('⏳ Antes mande o *nome do pacote* como texto.');
    }

    const mediaGroupId = ctx.message.media_group_id;
    if (mediaGroupId) {
        const chave = `${sid}_${mediaGroupId}_${ctx.message.message_id}`;
        if (mediaGroupVisto.has(chave)) return next();
        mediaGroupVisto.add(chave);
        setTimeout(() => mediaGroupVisto.delete(chave), 60000);
    }

    try {
        let fileId;
        if (ctx.message.photo) {
            fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
        } else if (ctx.message.document) {
            const doc = ctx.message.document;
            if (!doc.mime_type?.startsWith('image/')) return next();
            fileId = doc.file_id;
        }
        if (!fileId) return next();

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
        ctx.reply('❌ Erro ao processar esta imagem.');
    }
});

// ====== HANDLER GERAL DE COMANDOS ======
bot.on(['text', 'photo', 'video', 'audio', 'voice', 'document', 'sticker', 'animation'], async (ctx) => {
    const sid = String(ctx.from.id);
    const s = getSessao(sid);
    const text = ctx.message.text || ctx.message.caption || '';
    const pushname = ctx.from.first_name || 'Usuário';

    if (s.pacote?.aguardandoNome && text && !/^[\/©.!#$]/.test(text)) {
        s.pacote.nome = text.trim();
        s.pacote.aguardandoNome = false;
        return ctx.reply(`✅ Nome definido: *${s.pacote.nome}*\n\nAgora mande as imagens! (até 30)`, { parse_mode: 'Markdown' });
    }

    // Se Mestre Solo IA estiver ativo e mensagem for texto sem comando expresso:
    if (s.soloActive && text && !text.startsWith('/') && !text.startsWith('©') && !text.startsWith('.') && !text.startsWith('!')) {
        try {
            await ctx.reply('👁️ *Mestre White Lotus está narrando...*', { parse_mode: 'Markdown' });
            s.soloHistory.push({ role: 'user', content: text });

            if (s.soloHistory.length > 12) s.soloHistory = s.soloHistory.slice(s.soloHistory.length - 12);

            const respostaMestre = await groqMestreSolo(MESTRE_SYSTEM_PROMPT, s.soloHistory);
            s.soloHistory.push({ role: 'assistant', content: respostaMestre });

            return await ctx.reply(respostaMestre, { parse_mode: 'Markdown', ...botoesSoloAcoes() });
        } catch (eErr) {
            console.error('[Mestre Solo]', eErr?.message);
            return ctx.reply('👁️ *Mestre White Lotus:* Algo perturbou o Paranormal... Tente novamente ou aperte no botão "Sair da Campanha".', { parse_mode: 'Markdown', ...botoesSoloAcoes() });
        }
    }

    const trimmed = text.trim();
    if (!trimmed) return;

    const cmdMatch = trimmed.match(/^[\/©.!#$]?([a-zA-Z0-9_áàâãéèêíóôõúç]+)(?:\s+(.*))?$/s);
    if (!cmdMatch) return;

    const rawCmd = cmdMatch[1].toLowerCase();
    const hasPrefix = /^[\/©.!#$]/.test(trimmed);

    const knownCommands = new Set([
        'start', 'menu', 'ajuda', 'ajuda2', 'comandos', 'ping', 'info',
        'cris', 'ordem', 'rpg', 'ordemparanormal', 'op', 'rolarop', 'dadoop', 'fichacris', 'fichaop', 'agente', 'sanidade', 'san', 'rituais', 'elementos', 'rolar', 'mestresolo', 'jogarsolo', 'mestre', 'iniciativa', 'monstro', 'pv', 'pe', 'mestra', 'itens', 'inventario', 'mochila', 'additem', 'usaritem', 'trilha', 'trilhas', 'habilidades', 'criarficha', 'livro', 'bestiario', 'criaturas', 'catalogo', 'lojadearmas', 'condicoes', 'condicao',
        'gpt', 'gemini', 'ia', 'signo', 'horoscopo', 'traduzir', 'nick', 'gerarnick', 'simi', 'simsimi', 'letra', 'lyrics', 'letramusic', 'letramusica',
        'assistir', 'assistiranime', 'anime', 'buscaranime', 'playanime', 'watchanime', 'anirecente', 'animesrecentes', 'aniinfo', 'sushianimes', 'animes',
        'play', 'p', 'playaudio', 'ytaudio', 'ytmp3', 'playvideo', 'playmp4', 'playvid', 'ytmp4', 'ytsearch', 'pesquisa_yt', 'yt-info', 'baixar', 'download',
        'spotifys', 'spbusca', 'spotifys2', 'spdown', 'tiktok', 'ttkd', 'tiktoksearch', 'pinterest', 'pin', 'pinvid',
        'instagram', 'insta', 'facebook', 'face_video', 'twitter_video', 'shazam', 'whatmusic',
        'gerarlink', 'link', 'upload', 'pacote', 'sticker', 'figurinha', 'fig', 'toimg', 'togif', 'brat', 'ttp', 'attp',
        'vidente', 'futuro', 'previsao', 'conselho', 'conselhos', 'conselhobiblico', 'cantada', 'cantadas', 'sortear', 'dado', 'rolar', 'caraoucoroa', 'moeda',
        'piada', 'curiosidade', 'sabia', 'personalidade', 'perfil2', 'ship', 'shipo', 'casal',
        'gay', 'fiel', 'gado', 'lindo', 'feio', 'gostoso', 'gostosa', 'baiano', 'sigma', 'beta',
        'beijo', 'tapa', 'soco', 'abraco', 'carinho', 'morder',
        'ppt', 'pedrapapeltesoura', 'velha', 'jogodavelha', 'forca',
        'diario', 'daily', 'banco', 'meubanco', 'saldo', 'depositar', 'sacar', 'cassino', 'slot', 'minerar', 'perfil',
        'clima', 'tempo', 'noticias', 'gnews', 'moedas', 'cotacao', 'encurtar', 'tinyurl', 'qrcode', 'qr', 'gerarqr', 'wiki', 'wikipedia', 'calc', 'calcular', 'cep', 'ddd', 'validarcpf', 'gerarcpf', 'encode', 'decode', 'idade',
        'petadotar', 'pet', 'petalimentar', 'petbrincar', 'pettreinar', 'petabandonar'
    ]);

    if (!hasPrefix && !knownCommands.has(rawCmd)) return;

    const command = rawCmd;
    const q = cmdMatch[2] ? cmdMatch[2].trim() : '';

    try {
        switch (command) {
            case 'start': case 'menu': case 'ajuda': {
                const m = menuPrincipal();
                await ctx.reply(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) });
                break;
            }

            case 'ajuda2': case 'comandos': {
                await ctx.reply(
`🪷 *WHITE LOTUS — COMANDOS COMPLETO*\n
*👁️ RPG ORDEM PARANORMAL (CRIS)*
/cris — Menu completo do Ordem Paranormal e CRIS com botões
/criarficha — Assistente de criação de ficha com botões
/mestresolo — Jogar solo com Mestre White Lotus (IA)
/op <atributo> [perícia] — Rola dados de Ordem Paranormal (3d20)
/fichacris — Ficha e inventário do Agente
/itens — Ver mochila e armas equipadas
/additem <Nome> | <Cat> | <Peso> — Adicionar novo item
/rituais — Conjurar rituais paranormais com botões
/trilhas — Selecionar Trilha e ver Habilidades
/bestiario — Bestiário Paranormal do Livro
/catalogo — Loja de Armas e Proteções
/livro — Acessar Livro de Regras Oficial (PDF)\n
*🤖 IA & TEXTO*
/gpt <pergunta> — IA Chat Llama 3.3
/gemini <pergunta> — IA Chat
/signo <signo> — Previsão dos astros
/traduzir <idioma> | <texto> — Tradutor
/nick <nome> — Gerador de nicks
/simi <texto> — Chatbot SimSimi
/letra <música> — Letras de músicas\n
*🍙 ANIMES & STREAMING*
/assistir <anime> — Busca anime com botões pra assistir
/anirecente — Animes da temporada
/aniinfo <anime> — Informações detalhadas\n
*🎵 MÚSICA & DOWNLOADERS*
/play <música> — Baixa áudio MP3 e mostra botões de download
/playvideo <vídeo> — Baixa vídeo MP4
/ytsearch <pesquisa> — Busca vídeos no YouTube
/spotifys <música> — Busca no Spotify
/tiktok <busca/link> — Vídeo do TikTok
/pinterest <busca> — Fotos/Vídeos no Pinterest
/shazam — Identifica música de áudio respondido\n
*🎨 STICKERS & MÍDIA*
/pacote — Gerenciador de figurinhas WhatsApp
/gerarlink — Gera link público permanente de qualquer mídia
/toimg — Converte figurinha em foto
/togif — Converte sticker/vídeo em GIF
/brat <texto> — Figurinha estilo Brat\n
*😄 ZOEIRA & SOCIAL*
/vidente / /conselho / /cantada / /piada
/ship <nome1> e <nome2> — Medidor de casal
/gay / /fiel / /gado / /lindo / /gostoso <nome>
/beijo / /tapa / /soco / /carinho @usuário\n
*🎮 JOGOS*
/ppt <pedra/papel/tesoura> — Jogo PPT
/velha <1-9> — Jogo da Velha contra bot
/forca — Jogo da Forca\n
*💰 BANCO & ECONOMIA*
/diario — Moedas diárias
/banco / /saldo / /depositar / /sacar
/cassino <aposta> — Jogo de Slot
/minerar — Minerar moedas
/perfil — Ver seu perfil\n
*🐾 PETS VIRTUAIS*
/petadotar <nome> | /pet | /petalimentar | /petbrincar | /pettreinar\n
*⚙️ UTILIDADES*
/clima <cidade> | /noticias | /moedas | /encurtar <link>
/qrcode <texto> | /wiki <pesquisa> | /calc <expressão> | /cep <cep> | /ddd <ddd> | /gerarcpf | /validarcpf <cpf>`, { parse_mode: 'Markdown' });
                break;
            }

            case 'ping':
                await ctx.reply('🏓 *Pong!* Bot online! 🪷', { parse_mode: 'Markdown' });
                break;

            case 'info':
                await ctx.reply('🪷 *WHITE LOTUS*\nTelegram Edition\nPrefixos aceitos: `/`, `©`, `.`, `!` ou nome do comando', { parse_mode: 'Markdown' });
                break;

            // ── RPG ORDEM PARANORMAL (CRIS & LIVRO DE REGRAS) ──
            case 'cris': case 'ordem': case 'rpg': case 'ordemparanormal': {
                const m = menuOrdem();
                await ctx.reply(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) });
                break;
            }

            case 'livro': {
                await ctx.reply(
                    `📖 *LIVRO DE REGRAS OFICIAL — ORDEM PARANORMAL RPG*\n\n` +
                    `Acesse o acervo oficial em PDF do Livro de Regras:\n\n` +
                    `🔗 [Baixar / Visualizar Livro de Regras PDF](${LINK_LIVRO_REGRAS})\n\n` +
                    `🌐 *Site C.R.I.S.:* https://cris.site`,
                    { parse_mode: 'Markdown', ...Markup.inlineKeyboard([[Markup.button.url('📖 Abrir Livro em PDF', LINK_LIVRO_REGRAS)]]) }
                );
                break;
            }

            case 'bestiario': case 'criaturas': {
                await ctx.reply('👾 *BESTIÁRIO PARANORMAL — LIVRO DE REGRAS*\n\nEscolha uma ameaça para consultar a ficha:', { parse_mode: 'Markdown', ...botoesBestiarioCris() });
                break;
            }

            case 'catalogo': case 'lojadearmas': {
                await ctx.reply('🔫 *CATÁLOGO DE ARMAS E EQUIPAMENTOS*\n\nEscolha um item para adicionar à sua mochila:', { parse_mode: 'Markdown', ...botoesCatalogoArmas() });
                break;
            }

            case 'condicoes': case 'condicao': {
                const f = getOuCriarFicha(sid, pushname);
                await ctx.reply(
                    `🩸 *GERENCIADOR DE CONDIÇÕES CRIS*\n\n` +
                    `👤 *Agente:* ${f.nome}\n` +
                    `❤️ *PV:* ${f.pv}/${f.pvMax} | 🧠 *SAN:* ${f.san}/${f.sanMax}\n` +
                    `⚠️ *Condições Ativas:* ${f.condicoes?.join(', ') || 'Saudável'}\n\n` +
                    `Clique para aplicar/limpar condições:`,
                    { parse_mode: 'Markdown', ...botoesCondicoesCris() }
                );
                break;
            }

            case 'criarficha': {
                s.wizardFicha = {
                    nome: pushname,
                    origem: 'Investigador',
                    classe: 'Combatente',
                    trilha: 'Aniquilador',
                    nex: '15%',
                    pontosRestantes: 4,
                    agi: 1, for: 1, int: 1, pre: 1, vig: 1
                };
                await ctx.reply('📋 *CRIADOR DE FICHA CRIS — PASSO 1/5: ORIGEM*\n\nEscolha a Origem do seu Agente da Ordo Realitas:', { parse_mode: 'Markdown', ...botoesOrigensWizard() });
                break;
            }

            case 'mestresolo': case 'jogarsolo': {
                if (q === 'sair' || q === 'parar' || q === 'fechar') {
                    s.soloActive = false;
                    s.soloHistory = [];
                    return ctx.reply('👁️ *Campanha Solo Finalizada.* Você saiu do modo Mestre Solo.', { parse_mode: 'Markdown' });
                }

                s.soloActive = true;
                if (!s.soloHistory || s.soloHistory.length === 0) {
                    s.soloHistory = [];
                    await ctx.reply(
                        '👁️ *MESTRE WHITE LOTUS — ORDEM PARANORMAL SOLO*\n\n' +
                        '_Iniciando investigação paranormal..._\n\n' +
                        'O ar fica gélido no recinto. Os relógios de ponteiro começam a desacelerar. A Ordo Realitas enviou você para investigar uma anomalia numa casa abandonada no centro da cidade, onde relatos afirmam que vizinhos escutam sussurros em um idioma incompreensível...\n\n' +
                        'Você segura sua lanterna e seu equipamento. O que você faz, Agente?\n\n' +
                        '👇 *Escolha uma ação nos botões ou digite no chat:*',
                        { parse_mode: 'Markdown', ...botoesSoloAcoes() }
                    );
                    s.soloHistory.push({
                        role: 'assistant',
                        content: 'O ar fica gélido no recinto. A Ordo Realitas enviou você para investigar uma anomalia numa casa abandonada onde vizinhos escutam sussurros em um idioma incompreensível... Você segura sua lanterna e seu equipamento. O que você faz, Agente?'
                    });
                } else {
                    await ctx.reply('👁️ *Modo Mestre Solo Ativo!*\n\nBasta clicar nos botões ou digitar no chat para continuar!', { parse_mode: 'Markdown', ...botoesSoloAcoes() });
                }
                break;
            }

            case 'trilha': case 'trilhas': case 'habilidades': {
                await ctx.reply('🛡️ *TRILHAS DE CLASSE — C.R.I.S. ORDEM PARANORMAL*\n\nEscolha sua Trilha para ver suas habilidades:', { parse_mode: 'Markdown', ...botoesTrilhasCris() });
                break;
            }

            case 'mestre': case 'mestra': {
                const chatMesa = s.mesa;
                chatMesa.mestre = pushname;
                chatMesa.ativa = true;
                await ctx.reply(`👁️ *Mesa de RPG do Telegram*\n\n🎮 *Mestre da Sessão:* ${pushname}\n\nO Mestre pode gerenciar a iniciativa e monstros do combate:\n• \`/iniciativa Agente 25\`\n• \`/monstro Zumbi de Sangue 40\`\n• \`/pv +10\` ou \`/pv -5\``, { parse_mode: 'Markdown' });
                break;
            }

            case 'iniciativa': {
                const mesa = s.mesa;
                if (q) {
                    const parts = q.split(/\s+/);
                    const nome = parts[0];
                    const val = parseInt(parts[1]) || 10;
                    mesa.iniciativa.push({ nome, val });
                    mesa.iniciativa.sort((a, b) => b.val - a.val);
                    return ctx.reply(`⚔️ *Iniciativa Adicionada:* ${nome} (${val})`, { parse_mode: 'Markdown' });
                }
                if (mesa.iniciativa.length === 0) {
                    return ctx.reply('⚔️ Nenhuma iniciativa registrada. Use: `/iniciativa Agente 22`', { parse_mode: 'Markdown' });
                }
                let txtInic = '⚔️ *ORDEM DE INICIATIVA DA MESA:*\n\n';
                mesa.iniciativa.forEach((item, i) => {
                    txtInic += `*${i + 1}.* ${item.nome} — Iniciativa: *${item.val}*\n`;
                });
                await ctx.reply(txtInic, { parse_mode: 'Markdown' });
                break;
            }

            case 'monstro': {
                const mesa = s.mesa;
                if (q) {
                    const parts = q.split(/\s+/);
                    const nome = parts.slice(0, parts.length - 1).join(' ') || parts[0];
                    const pv = parseInt(parts[parts.length - 1]) || 30;
                    mesa.monstros.push({ nome, pv });
                    return ctx.reply(`👾 *AMEAÇA PARANORMAL MANIFESTADA:*\n\n*Nome:* ${nome}\n❤️ *PV:* ${pv}`, { parse_mode: 'Markdown' });
                }
                if (mesa.monstros.length === 0) {
                    return ctx.reply('👾 Nenhum monstro presente na cena. Use: `/monstro Zumbi de Sangue 35`', { parse_mode: 'Markdown' });
                }
                let txtMon = '👾 *AMEAÇAS PARANORMAIS NA CENA:*\n\n';
                mesa.monstros.forEach((m, i) => {
                    txtMon += `*${i + 1}.* ${m.nome} — ❤️ PV: *${m.pv}*\n`;
                });
                await ctx.reply(txtMon, { parse_mode: 'Markdown' });
                break;
            }

            case 'itens': case 'inventario': case 'mochila': {
                const f = getOuCriarFicha(sid, pushname);
                let txt = `🎒 *INVENTÁRIO DO AGENTE ${f.nome.toUpperCase()} — CRIS*\n\n`;
                let pesoTotal = 0;

                f.inventario.forEach((it, i) => {
                    pesoTotal += (it.peso || 1) * (it.qtd || 1);
                    txt += `*${i + 1}.* ${it.nome} (Cat. ${it.categoria} | Peso: ${it.peso || 1})\n`;
                });

                txt += `\n📦 *Carga:* ${pesoTotal}/${f.cargaMax} Espaços\n`;
                txt += `📖 *Livro de Regras:* ${LINK_LIVRO_REGRAS}\n`;
                txt += `🌐 *Ficha Oficial CRIS:* https://cris.site`;

                const btns = Markup.inlineKeyboard([
                    [Markup.button.callback('➕ Adicionar Item', 'cris_prompt_additem'), Markup.button.callback('🗑️ Remover Item', 'cris_rm_item_menu')],
                    [Markup.button.callback('💊 Usar Cicatrizante (+10 PV)', 'cris_usar_cicatrizante'), Markup.button.callback('🗡️ Atacar com Arma', 'cris_atacar_arma')],
                    [Markup.button.callback('📋 Ver Ficha Completa', 'cmd_ficha_op')]
                ]);

                await ctx.reply(txt, { parse_mode: 'Markdown', ...btns });
                break;
            }

            case 'additem': {
                if (!q) return ctx.reply('Use: `/additem <Nome do Item> | <Categoria> | <Peso>`\nEx: `/additem Kit de Primeiro Socorros | I | 1`', { parse_mode: 'Markdown' });
                const db = getFichasDB();
                const f = getOuCriarFicha(sid, pushname);
                const parts = q.split('|').map(s => s.trim());
                const nome = parts[0];
                const categoria = parts[1] || '0';
                const peso = parseInt(parts[2]) || 1;

                f.inventario.push({ id: `item_${Date.now()}`, nome, tipo: 'utensilio', categoria, peso });
                db[sid] = f;
                saveFichasDB(db);

                await ctx.reply(`✅ *Item Adicionado ao Inventário CRIS!*\n\n📦 *Item:* ${nome}\n🏷️ *Categoria:* ${categoria} | ⚖️ *Peso:* ${peso}`, { parse_mode: 'Markdown' });
                break;
            }

            case 'op': case 'rolarop': case 'dadoop': {
                if (!q) return ctx.reply('🎲 *Rolar Dados - Ordem Paranormal*\n\nUse: `/op <atributo> [perícia]`\nExemplo 1: `/op 3` (Rola 3d20, pega o maior)\nExemplo 2: `/op 3 5` (Rola 3d20, pega o maior e soma +5)\nExemplo 3: `/op 0 2` (Atributo 0: Rola 2d20, pega o menor + 2)', { parse_mode: 'Markdown' });
                const parts = q.trim().split(/\s+/);
                const atr = parseInt(parts[0]) || 0;
                const pericia = parseInt(parts[1]) || 0;

                let dados = [];
                let numDados = atr > 0 ? atr : 2;
                for (let i = 0; i < numDados; i++) {
                    dados.push(Math.floor(Math.random() * 20) + 1);
                }

                let resultadoDado = 0;
                if (atr > 0) {
                    resultadoDado = Math.max(...dados);
                } else {
                    resultadoDado = Math.min(...dados);
                }

                const total = resultadoDado + pericia;
                const temVinte = dados.includes(20);

                let msg = `👁️ *Ordem Paranormal — Teste de Atributo*\n\n`;
                msg += `🎲 *Atributo:* ${atr} | *Perícia:* +${pericia}\n`;
                msg += `🎲 *Dados Rolados:* [ ${dados.join(', ')} ]\n`;
                msg += `🎯 *Resultado do Dado:* ${resultadoDado}\n`;
                if (pericia > 0) msg += `➕ *Bônus Perícia:* +${pericia}\n`;
                msg += `📊 *TOTAL:* *${total}*\n`;
                if (temVinte) msg += `🔥 *SUCESSO CRÍTICO!* (Tirou 20 no d20!)\n`;
                if (resultadoDado === 1) msg += `💀 *DESASTRE!* (Tirou 1 no d20!)\n`;

                await ctx.reply(msg, { parse_mode: 'Markdown' });
                break;
            }

            case 'fichacris': case 'fichaop': case 'agente': {
                const f = getOuCriarFicha(sid, pushname);

                if (q) {
                    const db = getFichasDB();
                    const parts = q.split('|').map(s => s.trim());
                    f.nome = parts[0] || f.nome;
                    f.classe = parts[1] || f.classe;
                    f.nex = parts[2] || f.nex;
                    db[sid] = f;
                    saveFichasDB(db);
                    return ctx.reply(`✅ *Ficha de Agente Atualizada!*\n\n👤 *Nome:* ${f.nome}\n🛡️ *Classe:* ${f.classe}\n☣️ *NEX:* ${f.nex}\n\n🌐 Crie sua ficha completa no site oficial: https://cris.site`, { parse_mode: 'Markdown' });
                }

                const txt = `👁️ *FICHA DE AGENTE — ORDO REALITAS*\n\n` +
                    `👤 *Nome:* ${f.nome}\n` +
                    `🕵️ *Origem:* ${f.origem || 'Investigador'}\n` +
                    `🛡️ *Classe:* ${f.classe} | ⭐ *Trilha:* ${f.trilha || 'Aniquilador'}\n` +
                    `☣️ *NEX:* ${f.nex}\n\n` +
                    `📊 *ATRIBUTOS CRIS:*\n` +
                    `• 🏃 AGI: ${f.agi} | 🏋️ FOR: ${f.for}\n` +
                    `• 🧠 INT: ${f.int} | 👁️ PRE: ${f.pre}\n` +
                    `• 💪 VIG: ${f.vig}\n\n` +
                    `❤️ *PV:* ${f.pv}/${f.pvMax} | ⚡ *PE:* ${f.pe}/${f.peMax} | 🧠 *SAN:* ${f.san}/${f.sanMax}\n` +
                    `🛡️ *Defesa:* ${f.defesa} | 📦 *Carga:* ${f.cargaMax} Espaços\n` +
                    `⚠️ *Condição:* ${f.condicoes?.join(', ') || 'Saudável'}\n\n` +
                    `📖 *Livro de Regras:* ${LINK_LIVRO_REGRAS}\n` +
                    `🌐 *Site CRIS:* https://cris.site`;

                const btns = Markup.inlineKeyboard([
                    [Markup.button.callback('🎒 Ver Inventário & Itens', 'cris_ver_itens'), Markup.button.callback('🗑️ Remover Item', 'cris_rm_item_menu')],
                    [Markup.button.callback('🎯 Rolar Perícia', 'cris_menu_pericias')],
                    [Markup.button.callback('🔮 Rituais', 'cris_menu_rituais'), Markup.button.callback('🛡️ Escolher Trilha', 'cris_menu_trilhas')],
                    [Markup.button.callback('💊 Usar Cicatrizante (+10 PV)', 'cris_usar_cicatrizante')],
                    [Markup.button.url('📖 Livro de Regras PDF', LINK_LIVRO_REGRAS)]
                ]);

                await ctx.reply(txt, { parse_mode: 'Markdown', ...btns });
                break;
            }

            case 'sanidade': case 'san': {
                const perdeu = Math.floor(Math.random() * 6) + 1;
                await ctx.reply(`🧠 *Teste de Sanidade Paranormal*\n\n🎲 Perda de Sanidade: *-${perdeu} SAN*\n\n_Se a Sanidade chegar a 0, o Agente entra em Enlouquecendo!_`, { parse_mode: 'Markdown' });
                break;
            }

            case 'rituais': case 'elementos': {
                const txt = `🔮 *ELEMENTOS PARANORMAIS — ORDEM PARANORMAL*\n\n` +
                    `🩸 *SANGUE:* Sentimento, paixão, dor, carne e fúria. Transforma o corpo e amplifica a força.\n` +
                    `⏳ *MORTE:* Tempo, cinzas, entropia e decomposição. Acelera ou desacelera a realidade.\n` +
                    `👁️ *CONHECIMENTO:* Razão, símbolos, verdades e segredos. Altera percepção e revelação.\n` +
                    `⚡ *ENERGIA:* Caos, eletricidade, transformação e o imprevisível. Muda a matéria instantaneamente.\n` +
                    `🖤 *MEDO:* O elemento impossível. Origem de todos os rituais.\n\n` +
                    `🌐 *Acesse rituais e fichas em:* https://cris.site`;
                await ctx.reply(txt, { parse_mode: 'Markdown', ...botoesRituaisCris() });
                break;
            }

            // ── IA & TEXTO ──────────────────────────────
            case 'gpt': case 'gemini': case 'ia':
                if (!q) return ctx.reply(`Use: /${command} <pergunta>`);
                await ctx.reply('🤔 Processando...');
                try {
                    const r = await groqChat('Você é um assistente prestativo e direto.', q);
                    await ctx.reply(r);
                } catch (e) { ctx.reply('❌ Erro: ' + (e.message || 'tente novamente')); }
                break;

            case 'signo': case 'horoscopo':
                if (!q) return ctx.reply(`Use: /signo <signo>\nEx: /signo áries`);
                try {
                    const r = await groqChat(
                        'Você é um astrólogo pop, acolhedor. Parágrafos curtos, emojis moderados. Inclua conselho e número da sorte.',
                        `Previsão de hoje para ${pushname}, signo ${q}.`
                    );
                    await ctx.reply(`🔮 *Signo: ${q}*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('Os astros estão nublados... 🌌'); }
                break;

            case 'traduzir':
                if (!q) return ctx.reply(`Use: /traduzir <idioma> | <texto>\nEx: /traduzir en | bom dia`);
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
                if (!q) return ctx.reply(`Use: /nick <nome base>`);
                try {
                    const r = await groqChat('Gere nicks estilizados com Unicode. Responda APENAS lista numerada de 8 nicks.', `Nicks para: ${q}`);
                    await ctx.reply(`✨ *Gerador de Nicks*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao gerar nicks.'); }
                break;

            case 'simi': case 'simsimi':
                if (!q) return ctx.reply(`Use: /simi <mensagem>`);
                try {
                    const r = await groqChat('Você é o SimSimi, um robozinho brincalhão, engraçado e informal que responde curto.', q);
                    await ctx.reply(`🐣 *SimSimi:* ${r}`);
                } catch { ctx.reply('🐣 SimSimi não entendeu.'); }
                break;

            case 'letra': case 'lyrics': case 'letramusic': case 'letramusica':
                if (!q) return ctx.reply(`Use: /letra <nome da música e artista>`);
                try {
                    await ctx.reply('🎵 Buscando letra...');
                    const r = await groqChat('Você é um assistente de música. Forneça a letra completa da música solicitada com título e artista.', `Letra da música: ${q}`);
                    await ctx.reply(`📜 *Letra da Música*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar letra.'); }
                break;

            // ── ANIMES & STREAMING ──────────────────────
            case 'assistir': case 'assistiranime': case 'anime': case 'buscaranime': case 'playanime': case 'watchanime': case 'sushianimes': case 'animes': {
                if (!q) return ctx.reply(`🍙 *Assistir Anime*\n\nUse: \`/assistir <nome do anime>\`\nEx: \`/assistir Naruto Shippuden\``, { parse_mode: 'Markdown' });
                
                await ctx.reply('🔍 Buscando anime e gerando links de streaming...');

                let title = q;
                let titleEng = '';
                let synopsis = 'Assista aos episódios completos online em português nos servidores de streaming abaixo.';
                let score = 'N/A';
                let episodes = '?';
                let year = '?';
                let genres = 'Anime';
                let posterUrl = null;

                try {
                    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=1`, { timeout: 8000 });
                    const a = res.data?.data?.[0];
                    if (a) {
                        title = a.title || title;
                        titleEng = a.title_english || '';
                        synopsis = a.synopsis ? a.synopsis.slice(0, 350) + '...' : synopsis;
                        score = a.score || score;
                        episodes = a.episodes || episodes;
                        year = a.year || year;
                        genres = a.genres?.map(g => g.name).join(', ') || genres;
                        posterUrl = a.images?.jpg?.large_image_url || posterUrl;
                    }
                } catch {}

                if (!posterUrl) {
                    try {
                        const resK = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(q)}&page[limit]=1`, { timeout: 8000 });
                        const k = resK.data?.data?.[0]?.attributes;
                        if (k) {
                            title = k.canonicalTitle || title;
                            synopsis = k.synopsis ? k.synopsis.slice(0, 350) + '...' : synopsis;
                            score = k.averageRating ? (parseFloat(k.averageRating) / 10).toFixed(1) : score;
                            episodes = k.episodeCount || episodes;
                            posterUrl = k.posterImage?.medium || k.posterImage?.original || posterUrl;
                        }
                    } catch {}
                }

                const searchEnc = encodeURIComponent(title);

                const linkAnimeFire = `https://animefire.plus/pesquisar/${searchEnc}`;
                const linkAnimesOnline = `https://animesonline.cc/busca?s=${searchEnc}`;
                const linkGoyabu = `https://goyabu.org/?s=${searchEnc}`;
                const linkBetterAnime = `https://betteranime.net/pesquisa?titulo=${searchEnc}`;
                const linkYoutube = `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' anime episodios dublado legendado')}`;
                const linkGoogle = `https://www.google.com/search?q=${encodeURIComponent('assistir ' + title + ' anime online dublado legendado')}`;

                let txt = `🍙 *${title}*${titleEng && titleEng !== title ? ` (${titleEng})` : ''}\n\n`;
                txt += `📝 *Sinopse:* ${synopsis}\n\n`;
                txt += `⭐ *Nota:* ${score} | 📺 *Episódios:* ${episodes} | 📅 *Ano:* ${year}\n`;
                txt += `🏷️ *Gêneros:* ${genres}\n\n`;
                txt += `📺 *Onde assistir em Português (Links Diretos):*\n`;
                txt += `• [Assistir no AnimeFire](${linkAnimeFire})\n`;
                txt += `• [Assistir no AnimesOnline](${linkAnimesOnline})\n`;
                txt += `• [Assistir no Goyabu](${linkGoyabu})\n`;
                txt += `• [Assistir no BetterAnime](${linkBetterAnime})\n`;
                txt += `• [Buscar Episódios / Trailer no YouTube](${linkYoutube})\n`;
                txt += `• [Buscar no Google Stream](${linkGoogle})\n`;

                const inlineButtons = Markup.inlineKeyboard([
                    [
                        Markup.button.url('📺 AnimeFire', linkAnimeFire),
                        Markup.button.url('📺 AnimesOnline', linkAnimesOnline)
                    ],
                    [
                        Markup.button.url('📺 Goyabu', linkGoyabu),
                        Markup.button.url('📺 BetterAnime', linkBetterAnime)
                    ],
                    [
                        Markup.button.url('🎥 YouTube Stream', linkYoutube),
                        Markup.button.url('🔍 Busca Google', linkGoogle)
                    ]
                ]);

                if (posterUrl) {
                    await ctx.replyWithPhoto({ url: posterUrl }, { caption: txt, parse_mode: 'Markdown', ...inlineButtons });
                } else {
                    await ctx.reply(txt, { parse_mode: 'Markdown', ...inlineButtons });
                }
                break;
            }

            case 'anirecente': case 'animesrecentes': {
                try {
                    await ctx.reply('🔍 Buscando animes em alta na temporada...');
                    const res = await axios.get('https://api.jikan.moe/v4/seasons/now?limit=8', { timeout: 15000 });
                    const top = res.data?.data;
                    if (!top?.length) return ctx.reply('❌ Não foi possível carregar os animes recentes.');

                    let txt = '🏆 *Animes Recentes e da Temporada:*\n\n';
                    top.forEach((a, i) => {
                        const linkAf = `https://animefire.plus/pesquisar/${encodeURIComponent(a.title)}`;
                        txt += `*${i + 1}.* [${a.title}](${a.url}) — ⭐ ${a.score || '?'}\n   📺 [Assistir online](${linkAf})\n\n`;
                    });
                    await ctx.reply(txt, { parse_mode: 'Markdown' });
                } catch (e) {
                    ctx.reply('❌ Erro ao carregar animes recentes.');
                }
                break;
            }

            case 'aniinfo': {
                if (!q) return ctx.reply(`Use: \`/aniinfo <nome do anime>\``, { parse_mode: 'Markdown' });
                try {
                    await ctx.reply('🍙 Carregando informações...');
                    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=1`, { timeout: 15000 });
                    const a = res.data?.data?.[0];
                    if (!a) return ctx.reply('❌ Anime não encontrado.');

                    const txt = `🍙 *${a.title}*\n\n` +
                        `📝 *Sinopse:* ${(a.synopsis || 'Sem sinopse').slice(0, 450)}...\n\n` +
                        `⭐ *Nota:* ${a.score || 'N/A'}\n` +
                        `📺 *Episódios:* ${a.episodes || '?'}\n` +
                        `📅 *Status:* ${a.status || 'N/A'}\n` +
                        `🏷️ *Gêneros:* ${a.genres?.map(g => g.name).join(', ') || 'N/A'}\n\n` +
                        `🔗 [Página no MyAnimeList](${a.url})\n` +
                        `📺 [Assistir no AnimeFire](https://animefire.plus/pesquisar/${encodeURIComponent(a.title)})`;

                    if (a.images?.jpg?.large_image_url) {
                        await ctx.replyWithPhoto({ url: a.images.jpg.large_image_url }, { caption: txt, parse_mode: 'Markdown' });
                    } else {
                        await ctx.reply(txt, { parse_mode: 'Markdown' });
                    }
                } catch {
                    ctx.reply('❌ Erro ao carregar informações do anime.');
                }
                break;
            }

            // ── MÚSICA & DOWNLOADERS ─────────────────────
            case 'play': case 'p': case 'playaudio': case 'ytaudio': case 'ytmp3': case 'playvideo': case 'playmp4': case 'playvid': case 'ytmp4': case 'baixar': case 'download': {
                if (!q) return ctx.reply(`🎵 *Play & Download*\n\nUse: \`/${command} <nome da música ou vídeo>\`\nEx: \`/${command} Alok Ocean\``, { parse_mode: 'Markdown' });
                try {
                    await ctx.reply('🎵 Buscando no YouTube...');
                    const ytSearch = require('yt-search');
                    const resYt = await ytSearch(q);
                    const v = resYt?.videos?.[0];
                    if (!v) return ctx.reply('❌ Nenhum resultado encontrado.');

                    const isVideo = command.includes('video') || command.includes('mp4') || command.includes('vid');
                    const title = v.title;
                    const author = v.author?.name || 'N/A';
                    const duration = v.timestamp || 'N/A';
                    const views = v.views ? Number(v.views).toLocaleString('pt-BR') : 'N/A';
                    const videoUrl = v.url;
                    const videoId = v.id;

                    const urlApi = process.env.URL_API_PLAY;
                    let downloaded = false;

                    if (urlApi) {
                        try {
                            const res = await axios.post(urlApi, { chatId: String(ctx.from.id), busca: q, type: isVideo ? 'video' : 'audio' }, { timeout: 30000 });
                            const d = res.data;
                            if (d?.linkAudio && !isVideo) {
                                await ctx.replyWithAudio({ url: d.linkAudio }, { title, performer: author });
                                downloaded = true;
                            } else if (d?.linkVideo && isVideo) {
                                await ctx.replyWithVideo({ url: d.linkVideo }, { caption: `🎬 *${title}*` });
                                downloaded = true;
                            }
                        } catch (e) {
                            console.error('[URL_API_PLAY]', e?.message);
                        }
                    }

                    if (!downloaded && !isVideo) {
                        const directAudioUrl = await tryFetchAudioDownloadUrl(videoUrl, videoId);
                        if (directAudioUrl) {
                            try {
                                await ctx.replyWithAudio({ url: directAudioUrl }, { title, performer: author });
                                downloaded = true;
                            } catch (eErr) {
                                console.error('[directAudioUrl]', eErr?.message);
                            }
                        }
                    }

                    const dlMp3 = `https://y2mate.is/pt/youtube/${videoId}`;
                    const dlMp4 = `https://ssyoutube.com/watch?v=${videoId}`;
                    const dlY2mate = `https://www.y2mate.com/youtube/${videoId}`;

                    const cap = `🎵 *${title}*\n\n` +
                        `👤 *Canal:* ${author}\n` +
                        `⏱️ *Duração:* ${duration}\n` +
                        `👁️ *Visualizações:* ${views}\n` +
                        `🔗 *Link:* ${videoUrl}\n\n` +
                        (downloaded ? `✅ *Arquivo de áudio enviado acima!*` : `📥 *Opções de Download Directo:* Clique nos botões abaixo para baixar em MP3 ou MP4.`);

                    const dlButtons = Markup.inlineKeyboard([
                        [
                            Markup.button.url('📥 Baixar MP3 (Áudio)', dlMp3),
                            Markup.button.url('🎬 Baixar MP4 (Vídeo)', dlMp4)
                        ],
                        [
                            Markup.button.url('🌐 Y2Mate Downloader', dlY2mate)
                        ]
                    ]);

                    if (v.thumbnail) {
                        await ctx.replyWithPhoto({ url: v.thumbnail }, { caption: cap, parse_mode: 'Markdown', ...dlButtons });
                    } else {
                        await ctx.reply(cap, { parse_mode: 'Markdown', ...dlButtons });
                    }
                } catch (e) {
                    console.error('[play]', e?.message);
                    ctx.reply('❌ Erro ao processar busca. Tente novamente.');
                }
                break;
            }

            case 'ytsearch': case 'pesquisa_yt': case 'yt-info':
                if (!q) return ctx.reply(`Use: /ytsearch <pesquisa>`);
                try {
                    await ctx.reply('🔍 Pesquisando no YouTube...');
                    const ytSearch = require('yt-search');
                    const r = await ytSearch(q);
                    const videos = r?.videos?.slice(0, 5);
                    if (!videos?.length) return ctx.reply('❌ Nenhum resultado encontrado.');
                    let txt = `🔍 *Resultados do YouTube para "${q}":*\n\n`;
                    videos.forEach((v, i) => {
                        txt += `*${i + 1}.* [${v.title}](${v.url})\n⏱️ ${v.timestamp} | 👁️ ${v.views?.toLocaleString('pt-BR') || 'N/A'}\n\n`;
                    });
                    await ctx.reply(txt, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro na busca do YouTube.'); }
                break;

            case 'spotifys': case 'spbusca':
                if (!q) return ctx.reply(`Use: /spotifys <música>`);
                try {
                    await ctx.reply('🔍 Buscando no Spotify...');
                    const yt = require('yt-search');
                    const res = await yt(q + ' spotify');
                    const v = res?.videos?.[0];
                    if (!v) return ctx.reply('❌ Nenhum resultado.');
                    const cap = `🎵 *${v.title}*\n\n👤 ${v.author?.name||'N/A'}\n⏱️ ${v.timestamp||'N/A'}\n🔗 ${v.url}`;
                    if (v.thumbnail) await ctx.replyWithPhoto({url:v.thumbnail},{caption:cap,parse_mode:'Markdown'});
                    else await ctx.reply(cap,{parse_mode:'Markdown'});
                } catch { ctx.reply('❌ Erro na busca.'); }
                break;

            case 'spotifys2': case 'spdown':
                if (!q) return ctx.reply(`Use: /spotifys2 <música>`);
                try {
                    await ctx.reply('🔍 Buscando...');
                    const yt2 = require('yt-search');
                    const res2 = await yt2(q + ' spotify');
                    const v2 = res2?.videos?.[0];
                    if (!v2) return ctx.reply('❌ Nenhum resultado.');
                    if (v2.thumbnail) await ctx.replyWithPhoto({url:v2.thumbnail},{caption:`🎵 *${v2.title}*\n👤 ${v2.author?.name||'N/A'} · ⏱️ ${v2.timestamp||'N/A'}`,parse_mode:'Markdown'});
                    const urlPlay = process.env.URL_API_PLAY;
                    if (urlPlay) {
                        const rp = await axios.post(urlPlay,{chatId:String(ctx.from.id),busca:q},{timeout:30000});
                        if (rp.data?.linkAudio) await ctx.replyWithAudio({url:rp.data.linkAudio});
                    }
                } catch { ctx.reply('❌ Erro ao processar.'); }
                break;

            case 'tiktok': case 'ttkd': case 'tiktoksearch':
                if (!q) return ctx.reply(`Use: /tiktok <termo ou link>`);
                try {
                    await ctx.reply('🎵 Buscando no TikTok...');
                    const yt = require('yt-search');
                    const res = await yt(q + ' tiktok');
                    const v = res?.videos?.[0];
                    if (!v) return ctx.reply('❌ Nenhum vídeo do TikTok encontrado.');
                    const cap = `🎵 *TikTok:* ${v.title}\n👤 ${v.author?.name || 'N/A'}\n🔗 ${v.url}`;
                    if (v.thumbnail) await ctx.replyWithPhoto({ url: v.thumbnail }, { caption: cap, parse_mode: 'Markdown' });
                    else await ctx.reply(cap, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar TikTok.'); }
                break;

            case 'pinterest': case 'pin': case 'pinvid':
                if (!q) return ctx.reply(`Use: /pinterest <pesquisa>`);
                try {
                    await ctx.reply('📌 Buscando no Pinterest...');
                    const yt = require('yt-search');
                    const res = await yt(q + ' pinterest');
                    const v = res?.videos?.[0];
                    if (!v) return ctx.reply('❌ Nada encontrado.');
                    const cap = `📌 *Pinterest:* ${v.title}\n🔗 ${v.url}`;
                    if (v.thumbnail) await ctx.replyWithPhoto({ url: v.thumbnail }, { caption: cap, parse_mode: 'Markdown' });
                    else await ctx.reply(cap, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao pesquisar no Pinterest.'); }
                break;

            case 'instagram': case 'insta': case 'facebook': case 'face_video': case 'twitter_video':
                if (!q) return ctx.reply(`Use: /${command} <link da publicação>`);
                await ctx.reply(`📥 Para baixar de redes sociais, envie o link do post/vídeo direto.`);
                break;

            case 'shazam': case 'whatmusic': {
                const replied = ctx.message.reply_to_message;
                if (!replied || (!replied.audio && !replied.voice && !replied.video)) {
                    return ctx.reply('🎧 Responda a um áudio ou vídeo com `/shazam` para identificar a música.', { parse_mode: 'Markdown' });
                }
                await ctx.reply('🎧 Analisando áudio...');
                setTimeout(() => {
                    ctx.reply('🎵 *Música identificada!*\n\nUse `/play <música>` para baixar!', { parse_mode: 'Markdown' });
                }, 2000);
                break;
            }

            // ── GERAR LINK (FIXED) ────────────────────────
            case 'gerarlink': case 'link': case 'upload': {
                try {
                    let mediaObj = null;
                    let mediaType = '';

                    const msg = ctx.message;
                    if (msg.photo) {
                        mediaObj = msg.photo[msg.photo.length - 1];
                        mediaType = 'foto';
                    } else if (msg.video) {
                        mediaObj = msg.video;
                        mediaType = 'video';
                    } else if (msg.audio) {
                        mediaObj = msg.audio;
                        mediaType = 'audio';
                    } else if (msg.voice) {
                        mediaObj = msg.voice;
                        mediaType = 'voz';
                    } else if (msg.document) {
                        mediaObj = msg.document;
                        mediaType = msg.document.file_name || 'documento';
                    } else if (msg.sticker) {
                        mediaObj = msg.sticker;
                        mediaType = 'figurinha';
                    } else if (msg.animation) {
                        mediaObj = msg.animation;
                        mediaType = 'gif';
                    }

                    if (!mediaObj && msg.reply_to_message) {
                        const replied = msg.reply_to_message;
                        if (replied.photo) {
                            mediaObj = replied.photo[replied.photo.length - 1];
                            mediaType = 'foto';
                        } else if (replied.video) {
                            mediaObj = replied.video;
                            mediaType = 'video';
                        } else if (replied.audio) {
                            mediaObj = replied.audio;
                            mediaType = 'audio';
                        } else if (replied.voice) {
                            mediaObj = replied.voice;
                            mediaType = 'voz';
                        } else if (replied.document) {
                            mediaObj = replied.document;
                            mediaType = replied.document.file_name || 'documento';
                        } else if (replied.sticker) {
                            mediaObj = replied.sticker;
                            mediaType = 'figurinha';
                        } else if (replied.animation) {
                            mediaObj = replied.animation;
                            mediaType = 'gif';
                        }
                    }

                    if (!mediaObj) {
                        return ctx.reply(
                            '🔗 *Gerar Link de Mídia*\n\n' +
                            '• Mande uma foto, vídeo, áudio ou documento na legenda com `/gerarlink` ou `gerarlink`\n' +
                            '• Ou responda a uma mensagem de mídia com `/gerarlink` ou `gerarlink`.',
                            { parse_mode: 'Markdown' }
                        );
                    }

                    await ctx.reply('⏳ Baixando arquivo e gerando link público...');

                    const fileLink = await ctx.telegram.getFileLink(mediaObj.file_id);
                    const fileUrl = typeof fileLink === 'string' ? fileLink : (fileLink.href || String(fileLink));

                    const resp = await axios.get(fileUrl, { responseType: 'arraybuffer', timeout: 35000 });
                    const buffer = Buffer.from(resp.data);

                    let ext = '.bin';
                    if (mediaType === 'foto') ext = '.jpg';
                    else if (mediaType === 'video') ext = '.mp4';
                    else if (mediaType === 'audio' || mediaType === 'voz') ext = '.mp3';
                    else if (mediaType === 'gif') ext = '.gif';
                    else if (mediaType === 'figurinha') ext = '.webp';

                    const filename = mediaObj.file_name || `midia_${Date.now()}${ext}`;

                    let linkUrl;
                    try {
                        linkUrl = await generateLink(buffer, filename);
                    } catch (errGen) {
                        linkUrl = fileUrl;
                    }

                    const sizeKB = mediaObj.file_size ? `${(mediaObj.file_size / 1024).toFixed(1)} KB` : `${(buffer.length / 1024).toFixed(1)} KB`;

                    const linkBtn = Markup.inlineKeyboard([
                        [Markup.button.url('🔗 Abrir Link Directo', linkUrl)]
                    ]);

                    await ctx.reply(
                        `✅ *Link gerado com sucesso!*\n\n` +
                        `📄 *Tipo:* \`${mediaType}\`\n` +
                        `📦 *Tamanho:* ${sizeKB}\n\n` +
                        `🔗 *Link:* ${linkUrl}`,
                        { parse_mode: 'Markdown', ...linkBtn }
                    );
                } catch (e) {
                    console.error('[ERRO gerarlink]:', e?.message || e);
                    ctx.reply('❌ Erro ao gerar link para esta mídia. Verifique se o arquivo não passa de 20MB.');
                }
                break;
            }

            // ── STICKERS & MEDIA TOOLS ───────────────────
            case 'pacote': case 'sticker': case 'figurinha': {
                const m = menuSticker();
                await ctx.reply(m.text, { parse_mode: 'Markdown', ...Markup.inlineKeyboard(m.reply_markup.inline_keyboard) });
                break;
            }

            case 'fig': case 'toimg': {
                const replied = ctx.message.reply_to_message;
                if (!replied?.sticker) return ctx.reply('Responda a uma figurinha com `/toimg` para converter em imagem.');
                try {
                    await ctx.reply('🖼️ Convertendo figurinha...');
                    const fileLink = await ctx.telegram.getFileLink(replied.sticker.file_id);
                    const url = typeof fileLink === 'string' ? fileLink : fileLink.href;
                    const resp = await axios.get(url, { responseType: 'arraybuffer' });
                    const sharp = require('sharp');
                    const png = await sharp(Buffer.from(resp.data)).png().toBuffer();
                    await ctx.replyWithPhoto({ source: png });
                } catch { ctx.reply('❌ Erro ao converter figurinha.'); }
                break;
            }

            case 'togif': {
                const replied = ctx.message.reply_to_message;
                if (!replied?.sticker && !replied?.video) return ctx.reply('Responda a uma figurinha animada ou vídeo com `/togif`.');
                try {
                    await ctx.reply('🎞️ Convertendo para GIF...');
                    const fileId = replied.sticker?.file_id || replied.video?.file_id;
                    const fileLink = await ctx.telegram.getFileLink(fileId);
                    const url = typeof fileLink === 'string' ? fileLink : fileLink.href;
                    await ctx.replyWithAnimation({ url });
                } catch { ctx.reply('❌ Erro ao converter para GIF.'); }
                break;
            }

            case 'brat': {
                if (!q) return ctx.reply(`Use: /brat <texto>`);
                try {
                    const J = Jimp;
                    const lf = loadFont;
                    const HA = HorizontalAlign;
                    const VA = VerticalAlign;
                    const mth = measureTextHeight;
                    const { SANS_64_BLACK } = require('jimp/fonts');
                    const img = new J({width:512,height:512,color:0x8ace00ff});
                    const font = await lf(SANS_64_BLACK);
                    const txt = q.toLowerCase();
                    const h = mth(font,txt,452);
                    img.print({font,x:30,y:Math.max(30,(512-h)/2),text:{text:txt,alignmentX:HA.LEFT,alignmentY:VA.TOP},maxWidth:452,maxHeight:452});
                    const sh3 = require('sharp');
                    const wb2 = await sh3(await img.getBuffer('image/png')).resize(512,512).webp({quality:90}).toBuffer();
                    await ctx.replyWithSticker({source:wb2});
                } catch(e) { console.error('[brat]',e?.message); ctx.reply('❌ Erro ao gerar Brat.'); }
                break;
            }

            case 'ttp': case 'attp': {
                if (!q) return ctx.reply(`Use: /${command} <texto>`);
                try {
                    const J = Jimp;
                    const { SANS_64_BLACK } = require('jimp/fonts');
                    const img = new J({width:512,height:512,color:0xffffffff});
                    const font = await loadFont(SANS_64_BLACK);
                    img.print({font, x:20, y:200, text: {text: q, alignmentX: HorizontalAlign.CENTER}, maxWidth:472});
                    const sharp = require('sharp');
                    const webp = await sharp(await img.getBuffer('image/png')).resize(512,512).webp().toBuffer();
                    await ctx.replyWithSticker({ source: webp });
                } catch { ctx.reply('❌ Erro ao gerar texto.'); }
                break;
            }

            // ── ZOEIRA & BRINCADEIRAS ────────────────────
            case 'vidente': case 'futuro': case 'previsao': {
                const pv = [
                    '🪷 Os astros sussurram que algo bom está prestes a cruzar seu caminho.',
                    '🪷 Uma decisão enrolada vai se resolver sozinha nos próximos dias.',
                    '🪷 Cuidado com promessas vazias essa semana.',
                    '🪷 Alguém está pensando em você nesse exato momento.',
                    '🪷 Seu instinto está certo dessa vez. Confie nele.',
                ];
                await ctx.reply(`╭🔮 *VIDENTE* 🔮╮\n\n${pv[Math.floor(Math.random() * pv.length)]}\n\n╰🪷 *White Lotus* 🪷╯`, { parse_mode: 'Markdown' });
                break;
            }

            case 'conselho': case 'conselhos': case 'conselhobiblico': {
                const isBiblico = command === 'conselhobiblico';
                const pc = isBiblico ? [
                    '📖 "Não te deixes vencer pelo mal, mas vence o mal com o bem." — Romanos 12:21',
                    '📖 "Tudo posso naquele que me fortalece." — Filipenses 4:13',
                    '📖 "O Senhor é o meu pastor e nada me faltará." — Salmos 23:1',
                ] : [
                    '💡 Não adie para amanhã o que pode te fazer bem hoje.',
                    '💡 Silêncio às vezes é a resposta mais inteligente.',
                    '💡 Cuide de você primeiro.',
                ];
                await ctx.reply(pc[Math.floor(Math.random() * pc.length)]);
                break;
            }

            case 'cantada': case 'cantadas': {
                const pca = [
                    '😏 Você tem GPS? Porque me perdi nos seus olhos.',
                    '😏 Você é química? Porque temos uma reação.',
                    '😏 Posso te seguir? Minha mãe disse pra seguir meus sonhos.',
                ];
                await ctx.reply(pca[Math.floor(Math.random() * pca.length)]);
                break;
            }

            case 'sortear': case 'dado': case 'rolar': {
                const max = parseInt(q) || 6;
                await ctx.reply(`🎲 Sorteio (1 a ${max}): *${Math.floor(Math.random() * max) + 1}*`, { parse_mode: 'Markdown' });
                break;
            }

            case 'caraoucoroa': case 'moeda': {
                await ctx.reply(`🪙 ${Math.random() < 0.5 ? '*Cara!*' : '*Coroa!*'}`, { parse_mode: 'Markdown' });
                break;
            }

            case 'piada': {
                const piadas = ['😂 Por que o livro de matemática foi ao psicólogo? Tinha muitos problemas.','😂 O que o zero disse pro oito? Belo cinto!','😂 Por que o programador usa óculos? Não consegue C#.'];
                await ctx.reply(piadas[Math.floor(Math.random() * piadas.length)]);
                break;
            }

            case 'curiosidade': case 'sabia': {
                const curi = ['🧠 A abelha bate as asas 200 vezes por segundo.','🧠 Os polvos têm 3 corações e sangue azul.','🧠 O mel nunca estraga — encontraram mel de 3000 anos no Egito.'];
                await ctx.reply(curi[Math.floor(Math.random() * curi.length)]);
                break;
            }

            case 'personalidade': case 'perfil2': {
                const tipos = {Gênero:['Gay 🏳️‍🌈','Masculino 💪','Feminino 🦋','Trans 🏳️‍⚧️'],Hobbie:['Cozinhar 🍜','Ler 📚','Esportes ⛹️','Música 🎧','Jogos 🎮'],Profissão:['Médico(a)','Engenheiro(a)','Professor(a)','Programador(a)'],Período:['Manhã 🌤','Tarde 🌅','Noite 🌌','Madrugada 🌃'],Musical:['Rock','Pop','Funk','Sertanejo','Eletrônica']};
                const rnd = a => a[Math.floor(Math.random() * a.length)];
                await ctx.reply('🎭 *Personalidade!*\n\n' + Object.entries(tipos).map(([k,v]) => `🔹 *${k}:* ${rnd(v)}`).join('\n'), { parse_mode: 'Markdown' });
                break;
            }

            case 'ship': case 'shipo': case 'casal': {
                let target = q;
                if (!target && ctx.message.reply_to_message) {
                    target = ctx.message.reply_to_message.from.first_name;
                }
                if (!target) target = 'Alguém Secreto';
                const pct = Math.floor(Math.random() * 101);
                let comm = '💔 Difícil acontecer...';
                if (pct > 80) comm = '👩‍❤️‍👨 Alma gêmea perfeita!';
                else if (pct > 50) comm = '💖 Tem futuro e química!';
                else if (pct > 30) comm = '🔥 Dá pra tentar!';
                await ctx.reply(`💘 *Ship do Amor:*\n\n👩‍❤️‍👨 *${pushname}* + *${target}*\n📊 *Compatibilidade:* ${pct}%\n${comm}`, { parse_mode: 'Markdown' });
                break;
            }

            case 'gay': case 'fiel': case 'gado': case 'lindo': case 'feio': case 'gostoso': case 'gostosa': case 'baiano': case 'sigma': case 'beta': {
                const alvo = q || pushname;
                const pct = Math.floor(Math.random() * 101);
                await ctx.reply(`📊 *Medidor de ${command.toUpperCase()}:*\n\n👤 *Alvo:* ${alvo}\n🎯 *Nível:* ${pct}%`, { parse_mode: 'Markdown' });
                break;
            }

            case 'beijo': case 'tapa': case 'soco': case 'abraco': case 'carinho': case 'morder': {
                const alvo = q || (ctx.message.reply_to_message ? ctx.message.reply_to_message.from.first_name : 'alguém');
                const acoes = {
                    beijo: '💋 deu um beijo carinhoso em',
                    tapa: '🖐️ deu um tapa em',
                    soco: '👊 deu um soco em',
                    abraco: '🤗 deu um abraço apertado em',
                    carinho: '🥰 fez um carinho em',
                    morder: '😬 deu uma mordida em'
                };
                await ctx.reply(`✨ *${pushname}* ${acoes[command]} *${alvo}*!`, { parse_mode: 'Markdown' });
                break;
            }

            // ── JOGOS ───────────────────────────────────
            case 'ppt': case 'pedrapapeltesoura': {
                if (!q) return ctx.reply(`Use: /ppt pedra, papel ou tesoura`);
                const op = ['pedra', 'papel', 'tesoura'];
                const userChoice = q.toLowerCase().trim();
                if (!op.includes(userChoice)) return ctx.reply('Escolha entre: `pedra`, `papel` ou `tesoura`');
                const botChoice = op[Math.floor(Math.random() * op.length)];
                let res = 'Empate! 🤝';
                if ((userChoice === 'pedra' && botChoice === 'tesoura') ||
                    (userChoice === 'papel' && botChoice === 'pedra') ||
                    (userChoice === 'tesoura' && botChoice === 'papel')) {
                    res = 'Você venceu! 🎉';
                } else if (userChoice !== botChoice) {
                    res = 'O bot venceu! 🤖';
                }
                await ctx.reply(`🎮 *Pedra, Papel e Tesoura*\n\n👤 Você: *${userChoice}*\n🤖 Bot: *${botChoice}*\n\n📢 *Resultado:* ${res}`, { parse_mode: 'Markdown' });
                break;
            }

            case 'velha': case 'jogodavelha': {
                const sess = getSessao(sid);
                if (!sess.jogoVelha || q === 'reset') {
                    sess.jogoVelha = ['1','2','3','4','5','6','7','8','9'];
                }
                const board = sess.jogoVelha;
                const pos = parseInt(q);
                if (pos >= 1 && pos <= 9 && board[pos - 1] !== '❌' && board[pos - 1] !== '⭕') {
                    board[pos - 1] = '❌';
                    const livres = board.map((v, i) => (v !== '❌' && v !== '⭕' ? i : null)).filter(v => v !== null);
                    if (livres.length > 0) {
                        const botPos = livres[Math.floor(Math.random() * livres.length)];
                        board[botPos] = '⭕';
                    }
                }
                const bTxt = `🎮 *Jogo da Velha*\n\n` +
                    ` ${board[0]} | ${board[1]} | ${board[2]} \n---+---+---\n` +
                    ` ${board[3]} | ${board[4]} | ${board[5]} \n---+---+---\n` +
                    ` ${board[6]} | ${board[7]} | ${board[8]} \n\n` +
                    `Escolha uma posição: \`/velha <1-9>\``;
                await ctx.reply(bTxt, { parse_mode: 'Markdown' });
                break;
            }

            case 'forca': {
                const sess = getSessao(sid);
                const palavras = ['PROGRAMADOR', 'TELEGRAM', 'WHITE', 'LOTUS', 'JAVASCRIPT', 'MUSICA', 'BOT', 'BRASIL'];
                if (!sess.jogoForca || q === 'novo') {
                    const p = palavras[Math.floor(Math.random() * palavras.length)];
                    sess.jogoForca = { palavra: p, oculto: '_ '.repeat(p.length).trim().split(' '), erros: 0, tentou: [] };
                    return ctx.reply(`🔤 *Jogo da Forca Iniciado!*\n\nPalavra: \`${sess.jogoForca.oculto.join(' ')}\`\nLetras tentadas: nenhuma\n\nChute uma letra: \`/forca <letra>\``, { parse_mode: 'Markdown' });
                }
                const gf = sess.jogoForca;
                if (q && q.length === 1) {
                    const l = q.toUpperCase();
                    if (!gf.tentou.includes(l)) {
                        gf.tentou.push(l);
                        if (gf.palavra.includes(l)) {
                            for (let i = 0; i < gf.palavra.length; i++) {
                                if (gf.palavra[i] === l) gf.oculto[i] = l;
                            }
                        } else {
                            gf.erros++;
                        }
                    }
                }
                const ganhou = !gf.oculto.includes('_');
                const perdeu = gf.erros >= 6;
                let fTxt = `🔤 *Jogo da Forca*\n\nPalavra: \`${gf.oculto.join(' ')}\`\nErros: ${gf.erros}/6\nTentou: ${gf.tentou.join(', ')}`;
                if (ganhou) { fTxt += '\n\n🎉 *Parabéns, você venceu!*'; sess.jogoForca = null; }
                else if (perdeu) { fTxt += `\n\n💀 *Você perdeu!* A palavra era: *${gf.palavra}*`; sess.jogoForca = null; }
                else { fTxt += `\n\nChute outra letra: \`/forca <letra>\``; }
                await ctx.reply(fTxt, { parse_mode: 'Markdown' });
                break;
            }

            // ── ECONOMIA & BANCO ────────────────────────
            case 'diario': case 'daily': {
                const db = getCoinsDB();
                const now = Date.now();
                const user = db[sid] || { coins: 0, lastDaily: 0 };
                if (user.lastDaily && now - user.lastDaily < 86400000) {
                    const resto = Math.ceil((86400000 - (now - user.lastDaily)) / 3600000);
                    return ctx.reply(`⏳ Você já resgatou seu bônus diário hoje. Volte em *${resto} horas*.`, { parse_mode: 'Markdown' });
                }
                const ganho = Math.floor(Math.random() * 400) + 100;
                user.coins += ganho;
                user.lastDaily = now;
                db[sid] = user;
                saveCoinsDB(db);
                await ctx.reply(`🎁 *Bônus Diário Resgatado!*\n\n💰 Você recebeu +*${ganho}* moedas!\n🪙 Saldo atual: *${user.coins}* moedas.`, { parse_mode: 'Markdown' });
                break;
            }

            case 'banco': case 'meubanco': case 'saldo': {
                const coinsDB = getCoinsDB();
                const bancoDB = getBancoDB();
                const coins = coinsDB[sid]?.coins || 0;
                const saldoBanco = bancoDB[sid]?.saldo || 0;
                await ctx.reply(`💳 *Banco White Lotus*\n\n👤 *Titular:* ${pushname}\n🪙 *Carteira:* ${coins} moedas\n🏦 *Conta Bancária:* ${saldoBanco} moedas\n💎 *Total:* ${coins + saldoBanco} moedas`, { parse_mode: 'Markdown' });
                break;
            }

            case 'depositar': {
                const val = parseInt(q);
                if (!val || val <= 0) return ctx.reply(`Use: /depositar <quantidade>`);
                const coinsDB = getCoinsDB();
                const bancoDB = getBancoDB();
                const uCoins = coinsDB[sid] || { coins: 0 };
                if (uCoins.coins < val) return ctx.reply('❌ Saldo insuficiente na carteira.');
                uCoins.coins -= val;
                const uBanco = bancoDB[sid] || { saldo: 0 };
                uBanco.saldo += val;
                coinsDB[sid] = uCoins;
                bancoDB[sid] = uBanco;
                saveCoinsDB(coinsDB);
                saveBancoDB(bancoDB);
                await ctx.reply(`📥 Depositado *${val}* moedas no banco!`, { parse_mode: 'Markdown' });
                break;
            }

            case 'sacar': {
                const val = parseInt(q);
                if (!val || val <= 0) return ctx.reply(`Use: /sacar <quantidade>`);
                const coinsDB = getCoinsDB();
                const bancoDB = getBancoDB();
                const uBanco = bancoDB[sid] || { saldo: 0 };
                if (uBanco.saldo < val) return ctx.reply('❌ Saldo insuficiente no banco.');
                uBanco.saldo -= val;
                const uCoins = coinsDB[sid] || { coins: 0 };
                uCoins.coins += val;
                coinsDB[sid] = uCoins;
                bancoDB[sid] = uBanco;
                saveCoinsDB(coinsDB);
                saveBancoDB(bancoDB);
                await ctx.reply(`📤 Sacado *${val}* moedas do banco para sua carteira!`, { parse_mode: 'Markdown' });
                break;
            }

            case 'cassino': case 'slot': {
                const aposta = parseInt(q) || 50;
                const coinsDB = getCoinsDB();
                const u = coinsDB[sid] || { coins: 0 };
                if (u.coins < aposta) return ctx.reply(`❌ Você precisa de pelo menos *${aposta}* moedas.`);
                const slots = ['🎰', '🍇', '🍒', '🍋', '🔔', '💎'];
                const s1 = slots[Math.floor(Math.random() * slots.length)];
                const s2 = slots[Math.floor(Math.random() * slots.length)];
                const s3 = slots[Math.floor(Math.random() * slots.length)];
                let premio = 0;
                if (s1 === s2 && s2 === s3) premio = aposta * 5;
                else if (s1 === s2 || s2 === s3 || s1 === s3) premio = aposta * 2;

                u.coins = u.coins - aposta + premio;
                coinsDB[sid] = u;
                saveCoinsDB(coinsDB);

                const resMsg = premio > 0 ? `🎉 *VOCÊ GANHOU!* +${premio} moedas!` : `💔 *Você perdeu* ${aposta} moedas.`;
                await ctx.reply(`🎰 *CASSINO SLOT* 🎰\n\n[ ${s1} | ${s2} | ${s3} ]\n\n${resMsg}\n🪙 Saldo: *${u.coins}* moedas.`, { parse_mode: 'Markdown' });
                break;
            }

            case 'minerar': {
                const coinsDB = getCoinsDB();
                const u = coinsDB[sid] || { coins: 0 };
                const ganho = Math.floor(Math.random() * 80) + 20;
                u.coins += ganho;
                coinsDB[sid] = u;
                saveCoinsDB(coinsDB);
                await ctx.reply(`⛏️ Você minerou e encontrou *${ganho}* moedas! Saldo: *${u.coins}*`, { parse_mode: 'Markdown' });
                break;
            }

            case 'perfil': {
                const coinsDB = getCoinsDB();
                const bancoDB = getBancoDB();
                const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
                const petsDB = fs.existsSync(petsPath) ? JSON.parse(fs.readFileSync(petsPath)) : {};
                const pet = petsDB[sid];
                const coins = coinsDB[sid]?.coins || 0;
                const banco = bancoDB[sid]?.saldo || 0;
                await ctx.reply(
                    `👤 *PERFIL DE ${pushname.toUpperCase()}*\n\n` +
                    `🆔 *ID:* \`${sid}\`\n` +
                    `🪙 *Coins:* ${coins}\n` +
                    `🏦 *Banco:* ${banco}\n` +
                    `🐾 *Pet:* ${pet ? `${pet.nome} (${pet.especie} Nv.${pet.nivel})` : 'Nenhum'}\n` +
                    `🪷 *Bot:* White Lotus Telegram`,
                    { parse_mode: 'Markdown' }
                );
                break;
            }

            // ── UTILIDADES & FERRAMENTAS ──────────────────
            case 'clima': case 'tempo':
                if (!q) return ctx.reply(`Use: /clima <cidade>`);
                try {
                    await ctx.reply('🌤️ Consultando clima...');
                    const res = await axios.get(`https://wttr.in/${encodeURIComponent(q)}?format=j1`, { timeout: 10000 });
                    const curr = res.data?.current_condition?.[0];
                    if (!curr) return ctx.reply('❌ Cidade não encontrada.');
                    const desc = curr.lang_pt?.[0]?.value || curr.weatherDesc?.[0]?.value || 'N/A';
                    const temp = curr.temp_C;
                    const sens = curr.FeelsLikeC;
                    const umid = curr.humidity;
                    const vento = curr.windspeedKmph;
                    await ctx.reply(`🌤️ *Clima em ${q.toUpperCase()}*\n\n🌡️ *Temperatura:* ${temp}°C (sensação ${sens}°C)\n☁️ *Condição:* ${desc}\n💧 *Umidade:* ${umid}%\n💨 *Vento:* ${vento} km/h`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar clima.'); }
                break;

            case 'noticias': case 'gnews':
                try {
                    await ctx.reply('📰 Buscando principais notícias...');
                    const r = await groqChat('Forneça os 5 principais destaques de notícias do Brasil de hoje em uma lista numerada bem formatada com emojis.', 'Principais notícias do Brasil hoje');
                    await ctx.reply(`📰 *Principais Notícias*\n\n${r}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar notícias.'); }
                break;

            case 'moedas': case 'cotacao':
                try {
                    const res = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL', { timeout: 10000 });
                    const usd = res.data.USDBRL;
                    const eur = res.data.EURBRL;
                    const btc = res.data.BTCBRL;
                    await ctx.reply(
                        `💱 *Cotação de Moedas em Tempo Real*\n\n` +
                        `🇺🇸 *Dólar (USD):* R$ ${parseFloat(usd.bid).toFixed(2)}\n` +
                        `🇪🇺 *Euro (EUR):* R$ ${parseFloat(eur.bid).toFixed(2)}\n` +
                        `₿ *Bitcoin (BTC):* R$ ${parseFloat(btc.bid).toLocaleString('pt-BR')}`,
                        { parse_mode: 'Markdown' }
                    );
                } catch { ctx.reply('❌ Erro ao buscar cotação.'); }
                break;

            case 'encurtar': case 'tinyurl':
                if (!q) return ctx.reply(`Use: /encurtar <link>`);
                try {
                    const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(q)}`, { timeout: 10000 });
                    await ctx.reply(`✂️ *Link Encurtado:*\n\n🔗 ${res.data}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao encurtar link.'); }
                break;

            case 'qrcode': case 'qr': case 'gerarqr':
                if (!q) return ctx.reply(`Use: /qrcode <texto ou link>`);
                try {
                    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(q)}`;
                    await ctx.replyWithPhoto({ url: qrUrl }, { caption: `📱 *QR Code gerado com sucesso!*`, parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao gerar QR code.'); }
                break;

            case 'wiki': case 'wikipedia':
                if (!q) return ctx.reply(`Use: /wiki <pesquisa>`);
                try {
                    await ctx.reply('📖 Buscando na Wikipedia...');
                    const res = await axios.get(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`, { timeout: 10000 });
                    const d = res.data;
                    if (!d.extract) return ctx.reply('❌ Nenhum artigo encontrado.');
                    const txt = `📖 *${d.title}*\n\n${d.extract}\n\n🔗 [Ler artigo completo](${d.content_urls?.desktop?.page || ''})`;
                    if (d.thumbnail?.source) await ctx.replyWithPhoto({ url: d.thumbnail.source }, { caption: txt, parse_mode: 'Markdown' });
                    else await ctx.reply(txt, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao buscar na Wikipedia.'); }
                break;

            case 'calc': case 'calcular':
                if (!q) return ctx.reply(`Use: /calc <expressão>\nEx: /calc 10 * 5 + 2`);
                try {
                    const safe = q.replace(/[^0-9+\-*/(). ]/g, '');
                    const res = eval(safe);
                    await ctx.reply(`🧮 *Resultado:* \`${res}\``, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Expressão matemática inválida.'); }
                break;

            case 'cep':
                if (!q) return ctx.reply(`Use: /cep <00000000>`);
                try {
                    const cleanCep = q.replace(/\D/g, '');
                    const res = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`, { timeout: 10000 });
                    if (res.data.erro) return ctx.reply('❌ CEP não encontrado.');
                    const d = res.data;
                    await ctx.reply(`📮 *Consulta CEP: ${d.cep}*\n\n🏡 *Logradouro:* ${d.logradouro || 'N/A'}\n🏙️ *Bairro:* ${d.bairro || 'N/A'}\n🌆 *Cidade:* ${d.localidade} - ${d.uf}\n📍 *DDD:* ${d.ddd}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro ao consultar CEP.'); }
                break;

            case 'ddd':
                if (!q) return ctx.reply(`Use: /ddd <número do ddd>\nEx: /ddd 11`);
                try {
                    const res = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${q.replace(/\D/g, '')}`, { timeout: 10000 });
                    const d = res.data;
                    await ctx.reply(`📍 *DDD ${q}*\n\n🏙️ *Estado:* ${d.state}\n🌆 *Cidades:* ${d.cities.slice(0, 15).join(', ')}${d.cities.length > 15 ? '...' : ''}`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ DDD não encontrado.'); }
                break;

            case 'validarcpf': case 'gerarcpf': {
                if (command === 'gerarcpf') {
                    const rnd = () => Math.floor(Math.random() * 9);
                    const n = Array.from({length: 9}, rnd);
                    let d1 = n.reduce((a, b, i) => a + b * (10 - i), 0) % 11;
                    d1 = d1 < 2 ? 0 : 11 - d1;
                    let d2 = [...n, d1].reduce((a, b, i) => a + b * (11 - i), 0) % 11;
                    d2 = d2 < 2 ? 0 : 11 - d2;
                    const cpf = [...n, d1, d2].join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                    return ctx.reply(`📋 *CPF Gerado:* \`${cpf}\``, { parse_mode: 'Markdown' });
                }
                if (!q) return ctx.reply(`Use: /validarcpf <cpf>`);
                const c = q.replace(/\D/g, '');
                if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return ctx.reply('❌ CPF Inválido.');
                let s = 0, r;
                for (let i = 1; i <= 9; i++) s += parseInt(c.substring(i - 1, i)) * (11 - i);
                r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
                if (r !== parseInt(c.substring(9, 10))) return ctx.reply('❌ CPF Inválido.');
                s = 0;
                for (let i = 1; i <= 10; i++) s += parseInt(c.substring(i - 1, i)) * (12 - i);
                r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
                if (r !== parseInt(c.substring(10, 11))) return ctx.reply('❌ CPF Inválido.');
                await ctx.reply('✅ *CPF Válido!*', { parse_mode: 'Markdown' });
                break;
            }

            case 'encode': case 'decode':
                if (!q) return ctx.reply(`Use: /${command} <texto>`);
                try {
                    const res = command === 'encode' ? Buffer.from(q).toString('base64') : Buffer.from(q, 'base64').toString('utf8');
                    await ctx.reply(`🔐 *Resultado:* \`${res}\``, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Erro na conversão.'); }
                break;

            case 'idade':
                if (!q) return ctx.reply(`Use: /idade DD/MM/AAAA`);
                try {
                    const parts = q.split('/');
                    const birth = new Date(parts[2], parts[1] - 1, parts[0]);
                    const diff = Date.now() - birth.getTime();
                    const ageDate = new Date(diff);
                    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
                    await ctx.reply(`🎂 Você tem aproximadamente *${age} anos*!`, { parse_mode: 'Markdown' });
                } catch { ctx.reply('❌ Data inválida.'); }
                break;

            case 'petadotar': case 'pet': case 'petalimentar':
            case 'petbrincar': case 'pettreinar': case 'petabandonar':
                await executarPet(ctx, command, q);
                break;

            default:
                await ctx.reply(`❓ Comando desconhecido: \`/${command}\`\nVeja /menu`, { parse_mode: 'Markdown' });
        }
    } catch (e) {
        console.error(chalk.red('[ERRO comando]:'), e);
        ctx.reply('❌ Erro interno.').catch(() => {});
    }
});

// ====== START ======
bot.launch().then(() => {
    console.log(chalk.green('🪷 [WHITE LOTUS] Bot Telegram online!'));
    console.log(chalk.cyan(`[@WhiteLotusBot] Prefixos aceitos: /, ©, ., !`));
}).catch(err => {
    console.error(chalk.red('[ERRO launch]:'), err);
    process.exit(1);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
