/* 
*Não revenda ou passe para alguém esse arquiv
* criador : yuka Modz
* editora && Emilly
* esse arquivo esta com total sistema d anti vazamento porem
*não vaza ou venda o arquivi
*/

//=============[ COMEÇO DE TUDO ]=============\\
const { downloadContentFromMessage, relayWAMessage, mentionedJid, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, getContentType, INativeFlowMessage, prepareWAMessageMedia, jidNormalizedUser } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, quizFutebol, getpc, supre, wait, getExtension, generateMessageID, vyroEngine, getGroupAdmins, normalizeJid, getMembros, emoji, sendPoll, getRandom, banner2, banner3, level2,temporizador, chyt, kyun, TimeCount, botoff, colors, os, arcloud, identificarMusica, addFilter, isFiltered, ytdl, psycatgames, MultiDownload, AssemblyAI, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter, shuffle, pushnames, formatNumber, formatNumberDecimal, awaitMessage, listCommands, extractMetadata, extractDDD, extractStateFromNumber, extractStateFromDDD, obrigadoEXT, addNumberMais, identArroba, pegarCases, carregarMidia } = require('./ARQUIVES/funcoes/exports.js');
const { v4: uuidv4 } = require('uuid');
const directory = `./DADOS DO KEISEN/anti_sp.json`;
const ANT_SP = JSON.parse(fs.readFileSync(directory));

//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const yts = require('yt-search');
const { criarPagamentoPix, verificarPix } = require('./ARQUIVES/funcoes/pix.js');
/////////////////\\\\\\\\\\\\\\\\\\\\\\
const { linguagem, MENU, mess, getInfo, destrava, destrava2, tabela, namoro1, namoro2, tools, advices, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, vip, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, speed, sleep, ANT_LTR_MD_EMJ, packname, getName,chaves, grupos } = require('./ARQUIVES/funcoes/exports.js');

const { botoes, antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json");

const { NomeDoBot, ownerName, prefix, channel, channelnk, group, CREDENTIALS_USER, TOKEN } = require('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json');

const palavras = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/data/media/forca/palavras.json'));
const forca = require('./DADOS DO KEISEN/data/media/forca/index.js');
const frames = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/data/media/forca/frames.json'));
const { sendButton, sendListB } = require(`./ARQUIVES/funcoes/botoes.js`)
const { fundolevel, fundo2, fundo1, linklogos, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imggado, imgvesgo, imgbebado, tapacmd, matarcmd, beijocmd, chutecmd, cmdmenu, deathcmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, errocmd, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa, img1, img2, img3, rankbct, rankcu, rankfalido, rankcasal, casal, Gozar, imgperfil, enigma, rvenigma, semimg, comer, capinarlote, pgpeito, pgbunda, morder, sentar, tirarft, carinho, soco, namorar, getcase, criador, fundo, idade, Pix, status, donos, infodono, boquete, cagar, cu, abraco, lavarlouca, matar, leitada, lindacmd, lindocmd, fielcmd, pgpau } = require("./DADOS DO KEISEN/INFO_KEISEN/LOGOS/links_img.json");

process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});
const messageStore = {}
const API_KEY_TOKITO = 'Ykemi2606191225'; 
const API_URL = CREDENTIALS_USER.API_URL || "https://api.minhabucetinha.com.br";
const keisen_URL = 'https://api.bronxyshost.com.br';
const keisenBot = "COMPRE SUA KEY DA BRONXYS NA URL ACIMA!!"
const API_KEY_keisen = "Doom77"
const URL_keisen = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU2OTFlYzY4LTU5MjQtNDQwYi05NjFkLWNhYTUxMmJmNDJmMiIsImlhdCI6MTc2OTkzNDc0OCwic3ViIjoiZGV2ZWxvcGVyL2MwZGVhYzY2LTUyNjQt MjAwZC0xM2QxLTM0NTc1NzQ1YzgwNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny42OC4xNzIuNzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.Zh93RANuLyfVml_wIIacka5Hv1OcMxFEAGsTCUf29rx7l7Bo-kdWgofxEuNxuv9moPvXJKVnHU3-UjyzzJZ1Wg"

async function startkeisen() {

module.exports = keisen = async(upsert, keisen, qrcode) => {
async function startFunctionNaga() {

const ownerNumber = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "")

for (const info of upsert?.messages || []) {
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
if (!global.messageStore) global.messageStore = {}
if (!info.key.fromMe && info.key?.id) {
messageStore[info.key.id] = info
}
if (info.message?.protocolMessage?.key?.id) {
const proto = info.message.protocolMessage
const type = proto.type 
if (type !== 0 && type !== 14) return
try {
const key = proto.key
const remoteJid = key.remoteJid
const msgId = key.id
const participant = key.participant
if (!remoteJid?.endsWith('@g.us')) return
const pathGp = `./DADOS DO KEISEN/grupos/${remoteJid}.json`
if (!fs.existsSync(pathGp)) return
const dataGp = JSON.parse(fs.readFileSync(pathGp))
if (!dataGp[0]?.antidelete) return
const original = messageStore[msgId]
if (!original) return
if (info.key.fromMe) return
const metadata = await keisen.groupMetadata(remoteJid)
const admins = metadata.participants
.filter(p => p.admin)
.map(p => p.id)
const user = original.key.participant || participant
//if (!user || admins.includes(user)) return
const userName = original.pushName || user.split('@')[0]
let profilePic = imgperfil
try {
profilePic = await keisen.profilePictureUrl(user, 'image')
} catch {}
const extractText = (m) => {
if (!m) return ''
if (m.conversation) return m.conversation
if (m.extendedTextMessage?.text) return m.extendedTextMessage.text
if (m.imageMessage?.caption) return m.imageMessage.caption
if (m.videoMessage?.caption) return m.videoMessage.caption
if (m.documentMessage?.caption) return m.documentMessage.caption
return ''
}
if (type === 0) {
if (original.message.conversation || original.message.extendedTextMessage) {
await keisen.sendMessage(remoteJid, { text: extractText(original.message), contextInfo: { mentionedJid: [user], externalAdReply: { title: '🚨 MENSAGEM APAGADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
} else {
await keisen.sendMessage(remoteJid, { forward: { key: original.key, message: original.message }, contextInfo: { mentionedJid: [user], externalAdReply: { title: '🚨 MENSAGEM APAGADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
}
delete messageStore[msgId]
}
if (type === 14) {
const oldText = extractText(original.message)
const editedMsg = proto.editedMessage?.message || proto.editedMessage || proto.editedMessage?.conversation || proto.editedMessage?.extendedTextMessage || proto.editedMessage?.imageMessage || proto.editedMessage?.videoMessage
const newText = extractText(editedMsg?.message ? editedMsg.message : editedMsg) || extractText(info.message) || ''
const textoFinal = `🔖 *𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐃𝐈𝐓𝐀𝐃𝐀*\n- 𝙿𝙾𝚁: @${user.split('@')[0]}\n\n> 🕓 *𝙰𝙽𝚃𝙴𝚂:*\n- ${oldText || '(sem texto/legenda)'}\n> 👀 *𝙳𝙴𝙿𝙾𝙸𝚂:*\n- ${newText || '(sem texto/legenda)'}`
await keisen.sendMessage(remoteJid, { text: textoFinal, contextInfo: { mentionedJid: [user], externalAdReply: { title: '✏️ MENSAGEM EDITADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
messageStore[msgId] = {
...original,
message: editedMsg?.message ? editedMsg.message : editedMsg || original.message
}
}
} catch (e) {
console.log('[ANTI SYSTEM ERROR]', e)
}
}
const VRF_JSON_GRUPO = fs.existsSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`));
}

function createPaymentDetails(text, mentionedJidArray, participant) {
return {
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: "100000000000000000",
noteMessage: {
extendedTextMessage: {
text,
contextInfo: {
mentionedJid: [...mentionedJidArray, participant],
forwardingScore: 999,
isForwarded: true
}
}
},
expiryTimestamp: "0",
amount: {
value: "100000000000000000",
offset: 100000000000000000,
currencyCode: "BRL"
}
}
};
}

const YukaModz = (texto, mentions = []) => ({
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: "1000",
noteMessage: {
            extendedTextMessage: {
                text: texto,
                contextInfo: {
                    mentionedJid: mentions,
                    forwardingScore: 999,
                    isForwarded: true
                }
            }
},
expiryTimestamp: "0",
amount: {
            value: "1000",
            offset: 1000,
            currencyCode: "BRL"
}
}
});

function gerarContextNewsletter() {
if (setting.channelnk === "0@newsletter") {
return {}; 
}
return {isForwarded: true, forwardingScore: 1, forwardedNewsletterMessageInfo: {newsletterJid: setting.channelnk, newsletterName: NomeDoBot, serverMessageId: '',}}}

if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
const horarioAtual = new Date(info.messageTimestamp * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

switch (info.messageStubType) {
case 29: { 
            if (info.messageStubParameters?.length) {
                const promovido = info.messageStubParameters[0];
                const promotor = info.participant;
                const msg = `*⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 𝐃𝐄 𝐏𝐑𝐎𝐌𝐎𝐂𝐀𝐎 ⚠️*

*ᴏ ᴜsᴜᴀʀɪᴏ @${promovido.split("@")[0]} ꜰᴏɪ ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴀ ᴀᴅᴍ. 🙆‍♂️*

*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${promotor.split("@")[0]} 🙅‍♂️*

*ᴅᴀᴛᴀ: ${horarioAtual}*`;
                const detalhes = createPaymentDetails(msg, [promovido], promotor);
                await keisen.relayMessage(from, detalhes, {});
            }
}
break;

case 30: {
            if (info.messageStubParameters?.length) {
                const rebaixado = info.messageStubParameters[0];
                const rebaixador = info.participant;
                const msg = `*⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 𝐃𝐄 𝐑𝐄𝐁𝐀𝐈𝐗𝐀𝐌𝐄𝐍𝐓𝐎 ⚠️*

*ᴏ ᴜsᴜᴀʀɪᴏ @${rebaixado.split("@")[0]} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*

*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${rebaixador.split("@")[0]} 🙅‍♂️*

*ᴅᴀᴛᴀ: ${horarioAtual}*`;
                const detalhes = createPaymentDetails(msg, [rebaixado], rebaixador);
                await keisen.relayMessage(from, detalhes, {});
            }
}
break;
}
}

if(!info.message) return;
if(upsert.type == "append") return;
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';

if(visualizarmsg) {
await keisen.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

//==============(BODY)================\\

function extrairTexto(info) {
const paths = [ 'message.conversation', 'message.sendPaymentMessage.noteMessage.extendedTextMessage.text', 'message.requestPaymentMessage.noteMessage.extendedTextMessage.text', 'message.viewOnceMessageV2.message.imageMessage.caption', 'message.viewOnceMessageV2.message.videoMessage.caption', 'message.imageMessage.caption', 'message.videoMessage.caption', 'message.extendedTextMessage.text', 'message.viewOnceMessage.message.videoMessage.caption', 'message.viewOnceMessage.message.imageMessage.caption', 'message.documentWithCaptionMessage.message.documentMessage.caption', 'message.buttonsMessage.imageMessage.caption', 'message.buttonsResponseMessage.selectedButtonId', 'message.listResponseMessage.singleSelectReply.selectedRowId', 'message.templateButtonReplyMessage.selectedId', 'message.pollCreationMessageV3.name', 'message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text', 'message.editedMessage.message.protocolMessage.editedMessage.imageMessage.caption', 'text', 'message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson' ];

for (const path of paths) {
const value = path.split('.').reduce((obj, key) => obj?.[key], info);
if (value) {
if (path.includes('paramsJson')) {
try {
return JSON.parse(value)?.id || '';
} catch {
return '';
}
}
return value;
}
}

return '';
}

var body = extrairTexto(info);
var Procurar_String = body;
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`) && !jsonGp[0].multiprefix) {var prefix = setting.prefix} else if(!isGroup) {var prefix = setting.prefix};
let isCmd = body.startsWith(prefix);

const args = isCmd ? body.slice(prefix.length).trim().split(/[ \t]+/) : body.split(/[ \t]+/);

let command = isCmd ? args.shift().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c") : null;

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

try {var groupMetadata = isGroup ?await keisen.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const botNumberLID = keisen?.user?.lid?.split(':')[0] + '@lid' || '';

let sender = jidNormalizedUser(isGroup ? info?.key?.participantPn || info?.key?.senderPn || await keisen?.user?.id || info?.key?.participant : info?.key?.senderPn || info?.key?.participant ||info?.key?.remoteJid);

if (sender.includes('@lid') && keisen?.user?.lid && info?.key?.fromMe) {
sender = keisen.user.id?.split(':')[0] + '@s.whatsapp.net' || sender;
}

const botNumber = keisen.user.id.split(':')[0]+'@s.whatsapp.net';
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const NumeroDoBot = keisen.user.id.split(':')[0];

const itsMe = info.key.fromMe || (keisen?.user?.lid ? info?.key?.participant === keisen.user.lid.split(':')[0] + '@lid' : false);

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

function setObg(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

const argss = body.split(/ +/g);
//======================================\\

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

const selo = {
  key: { 
    fromMe: false, 
    participant: `0@s.whatsapp.net`,
    id: 'QUOTED-FAKE',
    ...{} 
  },
  message: {
    contactMessage: {
      displayName: `${pushname}`,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${
        sender.split("@")[0]
      }:${sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      sourceUrl: `https://raw.githubusercontent.com/nazuninha/uploads/main/fotos/1776187006208_0fzkyi.jpg`,
    },
  },
}; 
const dirGroup = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`

const nescj = "./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{ name: groupName, groupId: from, x9: false, antiimg: false, antistatus: false, antivideo: false, antiaudio: false, antisticker: false, antidoc: false, antictt: false, antiloc: false,antilinkgp: false, antilinkhard: false, antilinkeasy: false, antifake: false, antiporn: false, Odelete: false, antispam: false, antinotas: false, anticatalogo: false, visuUnica: false, registrarFIGUS: false, soadm: false, listanegra: [], advertir: [], prefixos: [`${setting.prefix}`], advertir2: [], legenda_estrangeiro: "0", legenda_documento: "0", legenda_video: "0", legenda_imagem: "0",multiprefix: false, ausentes: [], ANTI_DDD: {active: false, listaProibidos: []}, antipalavrao: { active: false, palavras: [] }, limitec: { active: false, quantidade: null }, wellcome: [{ bemvindo1: false, legendabv: `✨ 𝙾𝙻𝙰 #numerodele# 𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾[ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾 #nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾\n> ${NomeDoBot}`, legendasaiu: 0, fundobv: null }, { bemvindo2: false, legendabv2: `✨ 𝙾𝙻𝙰 #numerodele# 𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾[ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾#nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾\n> ${NomeDoBot}`, legendasaiu2: 0 }], autosticker: false, autoresposta: false, jogos: false, bangp: false, modo_rpg: false }]
fs.writeFileSync(dirGroup, JSON.stringify(data))
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./DADOS DO KEISEN/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index))}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index))}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? 'Android 🚀' : info.key.id.substring(0, 2) == '3A' ? 'Iphone 💸' : 'WhatsApp Web 🪀';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.ownerNumber+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isVip = vip.map(i => i.id).includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isListaBrancaG = nescessario.listabrancaG.includes(sender)

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isModoAluguel = nescessario.aluguel

const isVerificado = nescessario.verificado

const isConsole = obrigadoEXT.consoleoff

const isWelcomePrivate = nescessario.welcomepv

const isAudioMenu = obrigadoEXT.menu_audio

const isAntiPv = nescessario.antipv 

const isAntiPv2 = nescessario.antipv2

const isAntiPv3 = nescessario.antipv3

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const listabrancaG = nescessario.listabrancaG

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isCmdVip = nescessario.cmd_vip

const isblockCmdG = nescessario.blockCmdG

const isCargo = SoDono ? "Mestre" : isGroupAdmins ? "Adminstrador": "Membro"

const isChVip = isVip ? "ꜱɪᴍ ✅": "ɴᴀᴏ ❌"


//============(FUNÇÕES)============\\

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntistatus = isGroup ? dataGp[0].Antistatus : undefined

const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm : undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =isGroup ? dataGp[0].jogos : undefined

const iskeisenEscuta = isGroup ? dataGp[0].keisenescutando : undefined

const isAutoDl = isGroup ? dataGp[0].autodl : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined

//============(VERIFICADOS)============\\

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
const normalizar = alvo => {
if (!alvo) return '';
if (alvo.includes('@lid') && groupMetadata?.participants) {
const membro = groupMetadata.participants.find(v => v.lid === alvo);
if (membro?.jid) return membro.jid;
}
if (alvo.includes('@lid')) {
const num = alvo.split(':')[0].replace('@lid', '');
return num + '@s.whatsapp.net';
}
return alvo;
};

const menc_sticker = (info.mentionedJid && info.mentionedJid.length > 0) ? normalizar(info.mentionedJid[0]) : normalizar(info.message?.stickerMessage?.contextInfo?.participant) || null;

let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || info.message?.stickerMessage?.contextInfo?.participant || ''; menc_prt = normalizar(menc_prt);

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || info.message?.stickerMessage?.contextInfo?.mentionedJid || [];

if (menc_jid2?.length > 0) {
menc_jid2[0] = normalizar(menc_jid2[0]);
}

const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : menc_sticker || null) : menc_prt || menc_sticker;

const menc_jid = normalizar(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? (menc_jid2?.[0] || menc_sticker) : (menc_prt || menc_sticker || sender);

const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero = q.length > 6 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

const marc_tds = q.includes('@') ? normalizar(menc_jid) : q.length > 6 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

const menc_prt_nmr = q.length > 12 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

////////////////////////////////////////////

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
var tempo2 = 'ʙᴏᴍ ᴅɪᴀ'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
var tempo2 = 'ʙᴏᴀ ᴛᴀʀᴅᴇ'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ'
}

if(!isCmd && info.key.fromMe) return
const reply = (text) => {
const messageOptions = {
text,
contextInfo: gerarContextNewsletter()
};
return keisen.sendMessage(from, messageOptions, {
quoted: selo 
}).catch(error => {
console.error(error);
});
};
async function sendAudioMenu(from) {
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/menu.mp3');
await keisen.sendMessage(from, {
audio: soundft,
mimetype: "audio/mpeg",
contextInfo: gerarContextNewsletter(),
}, { quoted: selo });
}
const NkChannelKk = gerarContextNewsletter();

async function sendUrlText(id, textCaption, title, desc, imageUrl, linkAcess, quotedThis) {
await keisen.sendMessage(id, { text: textCaption, contextInfo: { externalAdReply: { title: title, body: desc, thumbnail: await getBuffer(imageUrl), mediaType: 1, sourceUrl: linkAcess } } }, { contextInfo: { ...NkChannelKk } }, { quoted: quotedThis })
}

async function replyWithNewsletter(text, options = {}, quotedThis = info) {
await keisen.sendMessage(from, {text: text, contextInfo: options}, {quoted: quotedThis})
.catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}


async function replyWithReaction(text, options = {}, quotedThis = info) {
await keisen.sendMessage(from, options)
await keisen.sendMessage(from, {text: text}, {quoted: quotedThis})
.catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const sendSticker = async(ChatID, FileN, quotedThis) => {
await keisen.sendMessage(ChatID, { sticker: { url: FileN } }, { contextInfo: { ...NkChannelKk } }, { quoted: selo }
)
.catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const sendImage = async(ChatID, FileN) => {
await keisen.sendMessage(ChatID, { image: { url: FileN } }, { contextInfo: { ...NkChannelKk } }, { quoted: selo }
).catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
})
}

const sendText = async(ChatID, texto) => {
await keisen.sendMessage(ChatID, { text: texto }, { contextInfo: { ...NkChannelKk } }
).catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}


const sendMentions = async(local, teks) => {
memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) {for(zn of vz.split(' ')) {if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')}};
await keisen.sendMessage(local, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mentions = async(teks = '', mb, id) => {
(id == null || id == undefined || id == false) ? await keisen.sendMessage(from, {text: teks.trim(), mentions: mb}) : await keisen.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: mb}}, {quoted: selo})
}
	
const mention = async(teks = '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}
}
await keisen.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mentionSemQuoted = async(teks) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
await keisen.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mencionarIMG = async(teks = '', FileN, thisQuoted = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
}
}
await keisen.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async(error) => {
await keisen.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const reagir = async (idgp, emj) => {
await keisen.sendMessage(idgp, {react: {text: emj, key: info.key}});
}

const verificarN = async(sla) => {
const [result] = await keisen.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}


if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
await keisen.sendMessage(from, {text: mess.markingAllMember()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
keisen.groupParticipantsUpdate(from, [sender], "remove");
}
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type == 'imageMessage') {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(keisen, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(keisen, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch((error) => {
console.log(error)
})
}
function msToTime(ms) {
let seg = Math.floor(ms / 1000)
let min = Math.floor(seg / 60)
let hr = Math.floor(min / 60)
let dia = Math.floor(hr / 24)
let ano = Math.floor(dia / 365)
seg %= 60
min %= 60
hr %= 24
dia %= 365
let partes = []
if (ano) partes.push(`${ano} ᴀɴᴏ${ano > 1 ? 'ꜱ' : ''}`)
if (dia) partes.push(`${dia} ᴅɪᴀ${dia > 1 ? 'ꜱ' : ''}`)
if (hr) partes.push(`${hr} ʜᴏʀᴀ${hr > 1 ? 'ꜱ' : ''}`)
if (min) partes.push(`${min} ᴍɪɴᴜᴛᴏ${min > 1 ? 'ꜱ' : ''}`)
if (seg) partes.push(`${seg} ꜱᴇɢᴜɴᴅᴏ${seg > 1 ? 'ꜱ' : ''}`)
return partes.length ? partes.join(', ').replace(/,([^,]*)$/, ' e$1') : 'ᴀɢᴏʀᴀ ʜᴀ ᴩᴏᴜᴄᴏ'
}

if (isGroup && dataGp[0].ausentes?.length > 0) {
let afkList = dataGp[0].ausentes;
if (menc_jid2?.length > 0) {
for (let m of menc_jid2) {
            let afkUser = afkList.find(x => x.id === m);
            if (afkUser) {
                let tempo = msToTime(Date.now() - afkUser.hora);
                await keisen.sendMessage(from, {
                    text: mess.ausente(afkUser, tempo, m),
                    contextInfo: { ...NkChannelKk, mentionedJid: [m] }
                }, {quoted: selo})
            }
}
}
let eu_afk = afkList.find(x => x.id === sender);
if (eu_afk) {
let tempo = msToTime(Date.now() - eu_afk.hora);
dataGp[0].ausentes = afkList.filter(x => x.id !== sender);
setGp(dataGp);
await keisen.sendMessage(from, {
            text: mess.on(sender, tempo),
            contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, {quoted: selo})
}
}

if(!isVip && nescessario.cmd_vip.includes(command)) return reply(mess.onlyVipUser());

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !itsMe && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !itsMe && !isGroupAdmins) return

if(isBotoff && !itsMe && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, async(err) => {
let media = fs.readFileSync(asw)
await keisen.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply(mess.error())
}
}

//=========(isQuoted/consts)=============\\

const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
// ANTI DDD - LISTA COMPLETA DE DDDs EXISTENTES NO BRASIL!
const arrayDDDs = [11, 12 ,13 ,14 ,15, 16, 17, 18, 19, 21, 22, 24 , 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74,75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,91, 93, 94, 95, 96, 97, 98, 99];

//////BLOCK CMD///////
budy = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

///BLOCK CMD GLOBAL///
///(CRÉDITOS AO @VictorGabriel)///
if(isblockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////            

///// FIMMMMMMMMMMMMM /////

const dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
const hourofc = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const MessageType = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'pollCreationMessage' ? 'Enquete' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : info.message?.reactionMessage?.text ? `Reação '${info.message.reactionMessage.text}'` : `${prefix+command}`;

//===============INTERAÇÃO NO TERMUX=====================
if (isConsole) {
const chalk = require('chalk');
const user = chalk.hex('#D500F9').bold(pushname?.toUpperCase() || 'DESCONHECIDO');
const number = chalk.yellowBright(addNumberMais(sender));
const chatType = isGroup ? 'GRUPO' : 'PRIVADO';
const groupInfo = isGroup ? `(${groupName})` : '(Privado)';
const typeMap = { isCmd:['COMANDO',chalk.cyanBright(`${prefix}${command}`)], isImage:['MÍDIA','🖼️ IMAGEM'], isVideo:['MÍDIA','🎞️ VÍDEO'], isAudio:['MÍDIA','🎧 ÁUDIO'], isSticker:['MÍDIA','🔖 FIGURINHA'], isLocation:['MÍDIA','📍 LOCALIZAÇÃO'], isProduct:['MÍDIA','🛒 CATÁLOGO'], isQuotedDocument: ['MÍDIA','📄 DOCUMENTO'], isQuotedContact:['MÍDIA','👤 CONTATO'], isPoll:['MÍDIA','📊 ENQUETE']};
const detectedType = Object.entries({isCmd, isImage, isVideo, isAudio, isSticker, isLocation, isProduct, isQuotedDocument, isQuotedContact, isPoll: q?.includes('###')
}).find(([_, val]) => val);
const [msgType, msgContent] = detectedType ? [chalk.redBright(typeMap[detectedType[0]][0]), typeMap[detectedType[0]][1]] : [chalk.whiteBright('MENSAGEM'), (q || '').slice(0, 25) + ((q || '').length > 25 ? '...' : '')];
process.nextTick(() => {
console.log(chalk.hex('#7B1FA2')(`╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮\n | ⸸ ${isGroup ? 'MENSAGEM NO GRUPO' : 'MENSAGEM NO PRIVADO'}\n╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯\n╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮\n| ⸸ USUÁRIO: ${user}\n| ⸸ NÚMERO: ${number}\n| ⸸ CHAT: ${chatType} ${groupInfo}\n| ⸸ TIPO: ${msgType}\n|⸸ CONTEÚDO: ${msgContent}\n╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
`));
});
}

// ========= || Jogo da Velha || ======== \\
async function startJogoDaVelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./ARQUIVES/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(budy.toLowerCase() == "s" || budy.toLowerCase() == "sim" || budy.toLowerCase() == "ok") {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status) return;
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./ARQUIVES/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `
*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
• Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n\n${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}\n${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}\n${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status) return reply(`O jogo começou ou já existe uma partida aberta neste grupo! Por favor, caso ninguém esteja jogando ou houve um erro desconhecido na função, entre em contato com o criador ou solicite à um adm para usar ocomando '${prefix}resetvelha' no grupo.`);
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
mention(`Nossa @${boardnow.X}, infelizmente o seu oponente não aceitou seu desafio!, ❌😕`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda.`)
if((boardnow.turn == "X" ? boardnow.X : boardnow.O) != sender.replace("@s.whatsapp.net", "")) return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
reply(`Ocorreu um empate! 😨`);
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
setTimeout(() => {
if(fs.existsSync("./ARQUIVES/tictactoe/db/" + from + ".json")) {
DLT_FL("./ARQUIVES/tictactoe/db/" + from + ".json");
reply(`O *jogo da velha* foi cancelado por falta de movimentação no tabuleiro ou o desafiado não aceitou no prazo de 5 minutos.`);
} else {
console.log(colors.red(time), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
await mention(`Parabéns *@${winnerJID}*, você ganhou a partida do jogo da velha! 😍🎯`)
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
mention(`
*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
• Sua vez : @${moving.turn == "X" ? moving.X : moving.O}\n\n${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}\n${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}\n${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}`);
}
} 
} 
}
 
if (budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if (JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
let C14 = namoro2.map(i => i.id).indexOf(sender);
let C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net");
namoro1[C12].namorados = true;
const agora = Date.now();
fs.writeFileSync("./DADOS DO KEISEN/func/namoro1.json", JSON.stringify(namoro1));
namoro1.push({ usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hourofc, data: dattofc, inicio: agora });
fs.writeFileSync("./DADOS DO KEISEN/func/namoro1.json", JSON.stringify(namoro1));
namoro2.splice(C14, 1);
fs.writeFileSync("./DADOS DO KEISEN/func/namoro2.json", JSON.stringify(namoro2));
let ppimg;
try {
ppimg = await keisen.profilePictureUrl(sender, 'image');
} catch {
ppimg = imgperfil;
}
await keisen.sendMessage(from, {
image: { url: ppimg },
caption: mess.namoro(namoro1, C12, sender, prefix),
contextInfo: { ...NkChannelKk, mentionedJid: [namoro1[C12].usu1, sender] }
}, { quoted: selo });
}
}

if (budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if (JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
let C14 = namoro2.map(i => i.id).indexOf(sender);
let C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`);
await keisen.sendMessage(from, {text: mess.fora(namoro1, C12, sender, prefix), contextInfo: {...NkChannelKk, mentionedJid: [namoro1[C12].usu1, sender]}}, { quoted: selo });
namoro1.splice(C12, 1);
fs.writeFileSync("./DADOS DO KEISEN/func/namoro1.json", JSON.stringify(namoro1));
namoro2.splice(C14, 1);
fs.writeFileSync("./DADOS DO KEISEN/func/namoro2.json", JSON.stringify(namoro2));
}
}

startJogoDaVelha()

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III️"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Legancy X"
if(newlevel >= 10000000) newpatente = "Veterano"
level2[AB].level += 1
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2));

try { u = await keisen.profilePictureUrl(sender) } catch { u = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg' }
gerarBuffer = await getBuffer(u)
photoUser = await upload(gerarBuffer)

let rankingUser = [...level2]
.sort((a, b) => b.contador - a.contador)
.map(i => i.id)
.indexOf(sender) + 1

await keisen.sendMessage(from, {
image: {
url: `https://tokito-apis.site/canvas/levelcard2?foto=${encodeURIComponent(photoUser)}&nome=${encodeURIComponent(getName(sender) || "Usuário")}&xp_before=${encodeURIComponent(level2[AB].contador)}&xp_after=${encodeURIComponent(level2[AB].contador)}&level=${encodeURIComponent(level2[level2.map(i => i.id).indexOf(sender)].level)}&ranking=${encodeURIComponent(rankingUser)}&patente=${encodeURIComponent(newpatente)}&fundo=${encodeURIComponent(fundolevel || "")}`
},
caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você acaba de subir de level.
• Novo level foi alcançado por completar *${level2[AB].contador} XP.*
Nova patente desbloqueada, você agora é *${newpatente}*`,
mentions: [sender]
}, { quoted: selo });
break

case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))

try { u2 = await keisen.profilePictureUrl(sender) } catch { u2 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg' }
gerarBuffer2 = await getBuffer(u2)
photoUser2 = await upload(gerarBuffer2)

let rankingUser2 = [...level2]
.sort((a, b) => b.contador - a.contador)
.map(i => i.id)
.indexOf(sender) + 1

await keisen.sendMessage(from, {
image: {
url: `https://tokito-apis.site/canvas/levelcard2?foto=${encodeURIComponent(photoUser2)}&nome=${encodeURIComponent(getName(sender) || "Usuário")}&xp_before=${encodeURIComponent(level2[BC].contador)}&xp_after=${encodeURIComponent(level2[BC].contador)}&level=${encodeURIComponent(level2[BC].level)}&ranking=${encodeURIComponent(rankingUser2)}&patente=${encodeURIComponent("Veterano")}&fundo=${encodeURIComponent(fundolevel || "")}`
},
caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*
–
• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`,
mentions: [sender]
}, { quoted: selo });
break

case 11000000: case 12000000: case 13000000: case 14000000: case 15000000:
case 16000000: case 17000000: case 18000000: case 19000000: case 20000000:
case 21000000: case 22000000: case 23000000: case 24000000: case 25000000:
case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))

try { u3 = await keisen.profilePictureUrl(sender) } catch { u3 = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg' }
gerarBuffer3 = await getBuffer(u3)
photoUser3 = await upload(gerarBuffer3)

let rankingUser3 = [...level2]
.sort((a, b) => b.contador - a.contador)
.map(i => i.id)
.indexOf(sender) + 1

await keisen.sendMessage(from, {
image: {
url: `https://tokito-apis.site/canvas/levelcard2?foto=${encodeURIComponent(photoUser3)}&nome=${encodeURIComponent(getName(sender) || "Usuário")}&xp_before=${encodeURIComponent(level2[CD].contador)}&xp_after=${encodeURIComponent(level2[CD].contador)}&level=${encodeURIComponent(level2[CD].level)}&ranking=${encodeURIComponent(rankingUser3)}&patente=${encodeURIComponent(newpatente || "Legancy X")}&fundo=${encodeURIComponent(fundolevel || "")}`
},
caption: `*🎉 LEGANCY LEVEL UP! 🎖️*
Meus parabéns querido usuário veterano *@${sender.split("@")[0]}*.
• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*
–
*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`,
mentions: [sender]
}, { quoted: selo });
break
}
}
if (isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe && ANT_SP.active && ANT_SP.groupId !== from && budy.includes("https://chat.whatsapp.com/")) {
const CompareLink = await keisen.groupInviteCode(from);
if (!body.includes(CompareLink)) {
const regex = /(https:\/\/chat\.whatsapp\.com\/[^\s]+)/;
const links = body.match(regex);
const FOUND_LINK = links ? links[0] : "Not found";
const findPlace = async (number) => {
            try {
                const findDDD = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${number}`);
                return findDDD.data.state;
            } catch {
                return "Não encontrado";
            }
};
async function getdados() {
            const number = sender.split("@")[0];
            const getImage = await keisen.profilePictureUrl(sender, 'image').catch(() => imgperfil);
            const getbio = `${number}@s.whatsapp.net`;

            let recadoW;
            try {
                const recadoUser = await keisen.fetchStatus(getbio);
                recadoW = recadoUser[0]?.status?.status || "*privado*";
            } catch {
                recadoW = "*privado*";
            }
            return {
                creator: "Lm", nome: pushname, numero: number, grupo: groupName, link: FOUND_LINK, imagem: getImage, bio: recadoW, groupId: from, id: info.key.id, device: info.key.id.length > 21 ? 'Android 🚀' : (info.key.id.substring(0, 2) == '3E' ? 'WhatsApp Web 🪀' : 'iPhone 💸'), time: moment().tz("America/Sao_Paulo").format("HH:mm:ss"), data: moment().tz("America/Sao_Paulo").format("DD/MM/YYYY"), full_text: body, lugar: await findPlace(number.substring(2, 4)),
            };
}
await getdados()
            .then(async (lm) => {
                await keisen.sendMessage(ANT_SP.groupId, {
                    text: mess.antisp(lm),
                    contextInfo: {...(NkChannelKk || {}), externalAdReply: {title: `⚠️ LINK DETECTADO ⚠️`, body: NomeDoBot, previewType: "PHOTO", thumbnailUrl: lm.imagem, thumbnail: Buffer, sourceUrl: channel}}, mentions: groupAdmins,
                });
            })
            .catch(console.error);
}
}




let isTrueFalse = Array('tiktok', 'tiktok_audio', 'tiktok_video', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && !SoDono && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
keisen.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
keisen.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
keisen.groupParticipantsUpdate(from, [sender], 'remove')
}

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
const messageText = info.message?.requestPaymentMessage?.noteMessage?.extendedTextMessage?.text || info.message?.extendedTextMessage?.text;
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
if(!JSON.stringify(groupMembers).includes(sender)) return
            await keisen.groupParticipantsUpdate(from, [sender], 'remove');            
            await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}
if (info.message?.requestPaymentMessage || info.message?.sendPaymentMessage) {
            await keisen.groupSettingUpdate(from, 'announcement');
            await keisen.groupParticipantsUpdate(from, [sender], 'remove');            
            await keisen.groupSettingUpdate(from, 'not_announcement');
}
}

const groupIdscount = countMessage.map(i => i.groupId);
if (!muted.some(i => i.grupo === from) && isGroup) {
  muted.push({ grupo: from, silenciados: [], mutados: [] });
  fs.writeFileSync("./DADOS DO KEISEN/grupos/muted.json", JSON.stringify(muted, null, 2));
}
const grupoMute = muted.find(i => i.grupo === from);
if (isGroup && grupoMute) {
if (grupoMute.silenciados?.includes(sender)) {
await keisen.sendMessage(from, {
delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
});
}
if (grupoMute.mutados?.includes(sender)) {
await keisen.sendMessage(from, {
delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
});
await keisen.sendMessage(from, {
text: `*ᴛᴏᴍᴏᴜ ᴘᴏʀ ɴᴀᴏ ꜰɪᴄᴀʀ ǫᴜɪᴇᴛᴏ 🔖🙇‍♂️*`,
mentions: [sender]
}, { quoted: selo });

await keisen.groupParticipantsUpdate(from, [sender], 'remove');
grupoMute.mutados = grupoMute.mutados.filter(id => id !== sender);
fs.writeFileSync("./DADOS DO KEISEN/grupos/muted.json", JSON.stringify(muted, null, 2));
}
}


let ind = countMessage.map(i => i.groupId).indexOf(from)
if (ind === -1) {
countMessage.push({groupName: groupName, groupId: from, numbers: [] })
ind = countMessage.length - 1
}
if (sender.endsWith('@g.us')) return
const numbersIds = countMessage[ind].numbers.map(u => u.id)
if (!numbersIds.includes(sender)) {
countMessage[ind].numbers.push({
id: sender, messages: isCmd ? 0 : 1, cmd_messages: isCmd ? 1 : 0, aparelho: adivinha || 'desconhecido', figus: type === "stickerMessage" ? 1 : 0, imagens: isImage ? 1 : 0, videos: isVideo ? 1 : 0, audios: isAudio ? 1 : 0, documentos: (isQuotedDocument || type === "documentMessage") ? 1 : 0})
} else {
const indnum = numbersIds.indexOf(sender)
const userData = countMessage[ind].numbers[indnum]
if (type !== "stickerMessage") {
userData.messages = (userData.messages || 0) + (isCmd ? 0 : 1)
userData.cmd_messages = (userData.cmd_messages || 0) + (isCmd ? 1 : 0)
userData.aparelho = adivinha || userData.aparelho || 'desconhecido'}
userData.figus = (userData.figus || 0) + (type === "stickerMessage" ? 1 : 0)
userData.imagens = (userData.imagens || 0) + (isImage ? 1 : 0)
userData.videos = (userData.videos || 0) + (isVideo ? 1 : 0)
userData.audios = (userData.audios || 0) + (isAudio ? 1 : 0)
userData.documentos = (userData.documentos || 0) + ((isQuotedDocument || type === "documentMessage") ? 1 : 0)
}
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json', JSON.stringify(countMessage))

function limparContadorUsuariosFora(from, groupMembers) {
const ind = countMessage.findIndex(i => i.groupId === from)
if (ind === -1) return 0
const contador = countMessage[ind].numbers
const membrosDoGrupo = []
for (const m of groupMembers) {
const id = jidNormalizedUser(typeof m === 'string' ? m : m.id)
membrosDoGrupo.push(id)
}
let removidos = 0
for (let i = contador.length - 1; i >= 0; i--) {
const idContador = jidNormalizedUser(contador[i].id)
if (!membrosDoGrupo.includes(idContador)) {
            contador.splice(i, 1)
            removidos++
}
}

return removidos
}

const getGroupIndex = (groupId) => countMessage.findIndex(g => g.groupId === groupId);
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

if(body != undefined) { /* Créditos: @Yuka Modz */
if(!JSON.stringify(pushnames).includes(botNumber)) {
pushnames.push({id: botNumber, nick: NomeDoBot});
fs.writeFileSync("./DADOS DO KEISEN/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
if(!JSON.stringify(pushnames).includes(sender)) {
pushnames.push({id: sender, nick: pushname});
fs.writeFileSync("./DADOS DO KEISEN/usuarios/users.json", JSON.stringify(pushnames, null, 2));
} else {
pushnames[pushnames.map(i => i.id).indexOf(sender)].nick = pushname
fs.writeFileSync("./DADOS DO KEISEN/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
}

//======================================\\

const keisenAluguel = './ARQUIVES/tictactoe/grupos_com_aluguel.json'
let gruposAutorizados = []
if (!fs.existsSync(keisenAluguel)) fs.writeFileSync(keisenAluguel, JSON.stringify([]))
gruposAutorizados = JSON.parse(fs.readFileSync(keisenAluguel))
function salvarGrupos() {
fs.writeFileSync(keisenAluguel, JSON.stringify(gruposAutorizados, null, 2))
}
function ativarAluguelGrupo(from, dias = 0, horas = 0) {
const agora = new Date()
const expiraEm = new Date(agora.getTime() + (dias * 24 + horas) * 60 * 60 * 1000)

const jaExiste = gruposAutorizados.find(g => g.id === from)
if (!jaExiste) {
gruposAutorizados.push({ id: from, expiraEm: expiraEm.toISOString() })
salvarGrupos()
} else {
jaExiste.expiraEm = expiraEm.toISOString()
salvarGrupos()
}
}

function isGrupoAutorizado(from) {
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return false

const agora = new Date()
const expira = new Date(grupo.expiraEm)

if (agora > expira) {
desativarAluguelGrupo(from)
return false
}
return true
}

if (isGroup && isModoAluguel && !SoDono && !isGrupoAutorizado(from)) {
 return
}

//======(ANTI-IMAGEM)========\\
if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return; 
if (isGroupAdmins) return;
if (dataGp[0].legenda_imagem == "0") {
await keisen.sendMessage(from, { text: "Por favor, envie uma imagem com legenda." }, { quoted: selo });
if (IS_DELETE) {
            setTimeout(async () => {
                if (groupMembers.find(member => member.id === sender)) {
                    await keisen.groupParticipantsUpdate(from, [sender], 'remove');}}, 1000); }}}

//======(ANTI-STICKER)========\\
if(isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return; 
const isAdminOrOwner = groupMembers.find(member => member.id === sender && (member.isAdmin || member.isOwner));
if(isAdminOrOwner) return;
if(IS_DELETE) {
setTimeout(async() => {
            await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return;
await keisen.groupParticipantsUpdate(from, [sender], 'remove');
}

//============[ ANTI DOCUMENTO ]============\\

if(Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await keisen.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo})
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await keisen.groupParticipantsUpdate(from, [sender], 'remove')
}


if(isUrl(PR_String) && isAntiLinkEasy && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await keisen.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('*[-⚠-] ᴅɪᴠᴜʟɢᴏᴜ ʟɪɴᴋ? ɪʀᴇɪ ᴀᴘᴀɢᴀʀ.*');
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
}

// ANTI NOTAS FAKES ==================>
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
if(verificar && budy.length < 100) return
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await keisen.groupParticipantsUpdate(from, [sender], 'remove');
}

//FINALZIN ===========================>
function remover(id, usu) {
keisen.groupParticipantsUpdate(id, [usu], "remove")}
//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return await keisen.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if(dataGp[0].legenda_video == "0") {
await keisen.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
} else {
await keisen.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: selo});
}
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await keisen.groupParticipantsUpdate(from, [sender], 'remove');
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return await keisen.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await keisen.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await keisen.groupParticipantsUpdate(from, [sender], 'remove');
}

//========(ANTI_LIGAR)========\\
if (!isGroup && isAnticall) {
keisen.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
const numero = B.content[0].attrs['call-creator'];
await keisen.updateBlockStatus(numero, "block");
}
});
}

if (isGroup && dataGp[0]?.antistatus === true && JSON.stringify(info.message).includes('groupStatusMentionMessage') && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
await keisen.sendMessage(from, {
text: `*ᴜꜱᴜᴀʀɪᴏ ʙᴀɴɪᴅᴏ ᴩᴏʀ ᴍᴀʀᴄᴀʀ ᴏ ɢʀᴜᴩᴏ* 🗣️`,
mentions: [sender]
}, { quoted: selo })
await keisen.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
keisen.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender
}
})
}, 1000)
}



/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isVip){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
await keisen.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isVip && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user vip e o proprietário atual do bot. */
if(!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv3) return

//====================================\\

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const RG_SCOINS = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/func/coins.json"));

const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined

const ID_G_COINS = RG_SCOINS.findIndex(i => i.grupo === from)
const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(i => i.id === sender);

function CoinsUpdate(index){
fs.writeFileSync("./DADOS DO KEISEN/func/coins.json", JSON.stringify(index, null, 2) + "\n")
}

const SYSTEM_COIN = {

AdicionarCoins: async function(user, quant) {
CoinsUser_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user);
if(!CoinsUser_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um membro que não possuí registro!");
CoinsUser_["coins"] += quant;
CoinsUpdate(RG_SCOINS);
},

transferCoins: async function(transferidor, recebidor, quantidade) {
DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === transferidor)
DM_2 = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === recebidor)
if((DM_?.coins || 0) < quantidade) return mention(`A quantidade que você tem é inferior a que você deseja transferir ao usuário: @${recebidor.split("@")[0]}`)
if(!DM_2) return mention(`O(a) usuário(a) '@${recebidor.split("@")[0]}' nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um usuário não registrado no meu sistema!`);
DM_["coins"] -= quantidade;
DM_2["coins"] += quantidade;
CoinsUpdate(RG_SCOINS);
},

Adicionar_2: async function(A, Q, X, X2) {
DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === A);
if(!DM_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível atualizar a carteira!");
DM_["coins"] += Q;
DM_[X] = X2
CoinsUpdate(RG_SCOINS);
},

RemoverCoins: async function(user, quant) {
CoinsUser = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)
if(!CoinsUser) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível remover coins de membro inativo que não possuí registro!");
if((CoinsUser?.coins || 0) < quant) return reply(`O usuário possuí '${CoinsUser?.coins} N-Coins', este valor não é suficiente para realizar a transação de remoção de ${quant}.`);
CoinsUser["coins"] -= quant;
CoinsUpdate(RG_SCOINS);
},

VerificarCampo: function(user, parameter) {
return RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)[parameter] || null;
},

}

if(isModoCoins && isGroup && isBotGroupAdmins && VRF_JSON_GRUPO && !info.key.fromMe) {

if(!RG_SCOINS.some(i => i.grupo === from)) {
RG_SCOINS.push({grupo: from, usus: [{id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}}]})
CoinsUpdate(RG_SCOINS);
} else if(RG_SCOINS.some(i => i.grupo === from) && !RG_SCOINS[ID_G_COINS]?.usus?.some(i => i?.id === sender)) {
RG_SCOINS[ID_G_COINS].usus.push({id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}})
CoinsUpdate(RG_SCOINS);
}

if(!info.message?.reactionMessage?.text && dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")) {
await mention(mess.coins(tempo, sender, prefix));
SYSTEM_COIN.Adicionar_2(sender, 50, "data", dattofc);
RG_US = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === sender);
Object.assign(RG_US.chances, {"cassino": 0, "minerar": 0});
CoinsUpdate(RG_SCOINS);
}
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`)){
let dataA = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataA.palavraOriginal.slice(0,4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal) return reply('Está perto...')
if(budy.toUpperCase() == dataA.palavraOriginal) {
await keisen.sendMessage(from, {text: mess.acert(pushname, dataA, resposta)}, {"mentionedJid": [sender]}, {quoted: selo})
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
dataAB = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`))
keisen.sendMessage(from, {text: mess.anagrama(shuffle, dataAB)}, {quoted: selo})
}, 5000)
}}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`)){
let dQ = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dQ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dQ.original) return reply('está perto')
if(budy.toUpperCase() == dQ.original) { 
await keisen.sendMessage(from,{text: mess.quizaC(pushname, dQ)}, {"mentionedJid": [sender]}, {quoted: selo}) 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
dataQA = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`))
wew = await getBuffer(dataQA.foto)
await keisen.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${dataQA.question}`}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`)){
let dQF = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dQF.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != dQF.resposta) return reply('está perto')
if(budy.toUpperCase() == dQF.resposta) { 
await keisen.sendMessage(from,{text: mess.quizC(pushname, dQF)}, {"mentionedJid": [sender]}, {quoted: selo}) 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`, `${JSON.stringify(quizFutebol[Math.floor(Math.random() * quizFutebol.length)])}`)
dataQF = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`))
await keisen.sendMessage(from, {text: mess.quizfut(dataQF)}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
await keisen.sendMessage(from,{text: mess.descorbert(pushname)}, {"mentionedJid": [sender]}, {quoted: selo}); 
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`);
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`))
garticText = mess.gartic(dataGartic2, prefix)
wew = await getBuffer(`${dataGartic2.imagem}`)
await keisen.sendMessage(from, {image: wew, caption: garticText}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
keisen.sendMessage(from,{text: mess.respostaE(pushname)}, {"mentionedJid": [sender]}, {quoted: selo})
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`)	
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
enigmaD = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`))
enigmaTezt = mess.respondeE(enigmaD, prefix)
wew = await getBuffer(rvenigma)
await keisen.sendMessage(from, {image: wew, caption: enigmaTezt}, {quoted: selo})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`)){
whatMusic = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
if(budy.toUpperCase() == whatMusic.resposta) { 
keisen.sendMessage(from,{text: mess.whatmusic(whatMusic, pushname)}, {"mentionedJid": [sender]}, {quoted: selo}); fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`);
setTimeout(async() => {
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
wmusic = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`))
textM = mess.wmusic(wmusic, II)
await keisen.sendMessage(from, {text: textM}, {quoted: selo})
}, 5000)
}
}

if (isX9VisuUnica) {
if (info.message?.viewOnceMessageV2 || type === "viewOnceMessage") {
let px;
if (JSON.stringify(info).includes("videoMessage")) {
            px = info.message?.viewOnceMessageV2?.message?.videoMessage || 
                 info.message?.viewOnceMessage?.message?.videoMessage;
            if (px) {
                px.viewOnce = false;
                px.video = { url: px.url };
                px.caption = (px.caption || "") + "\n\n";
                await keisen.sendMessage(from, px, { quoted: selo });
            }
} else if (JSON.stringify(info).includes("imageMessage")) {
            px = info.message?.viewOnceMessageV2?.message?.imageMessage || 
                 info.message?.viewOnceMessage?.message?.imageMessage;
            if (px) {
                px.viewOnce = false;
                px.image = { url: px.url };
                px.caption = (px.caption || "") + "\n\n";
                await keisen.sendMessage(from, px, { quoted: selo });
            }
} else if (JSON.stringify(info).includes("audioMessage") || 
                   info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
            let audio = info.message?.viewOnceMessageV2?.message?.audioMessage || 
                        info.message?.viewOnceMessage?.message?.audioMessage;
            
            if (audio && audio.mimetype) {
                let buffAudio = await getFileBuffer(audio, 'audio');
                let audioFile = getRandom('.mp3');
                fs.writeFileSync(audioFile, buffAudio);
                let audioBuffer = fs.readFileSync(audioFile);

                await keisen.sendMessage(from, { 
                    audio: audioBuffer, 
                    mimetype: 'audio/mpeg', 
                    ptt: false 
                }, { quoted: selo });

                fs.rmSync(audioFile);
            }
}
}
}

//INICIO DE COMANDOS DE FECHAR E ABRIR GRUPO NO HORÁRIO PROGRAMADO!!

let horarios = {};
const horariosPath = './ARQUIVES/tictactoe/grupo.json';

if (fs.existsSync(horariosPath)) {
try {
horarios = JSON.parse(fs.readFileSync(horariosPath));
} catch (e) {
console.error('erro ao carregar horarios:', e);
horarios = {};
}
}

const salvarHorarios = () => {
fs.writeFileSync(horariosPath, JSON.stringify(horarios, null, 2));
};

const definirFechamento = (from, horario) => {
horarios[from] = horarios[from] || {};
horarios[from].fechamento = horario;
salvarHorarios();
};

const definirAbertura = (from, horario) => {
horarios[from] = horarios[from] || {};
horarios[from].abertura = horario;
salvarHorarios();
};

const removerHorarios = (from) => {
if (horarios[from]) {
delete horarios[from];
salvarHorarios();
}
};

let ultimaExecucao = {};

if (global.intervalHorarios) clearInterval(global.intervalHorarios);

global.intervalHorarios = setInterval(async () => {
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

if (fs.existsSync(horariosPath)) {
try {
            horarios = JSON.parse(fs.readFileSync(horariosPath));
} catch (e) {
            console.error(e);
            horarios = {};
}
}

for (const from in horarios) {
const horario = horarios[from];
if (!horario) continue;

try {
            if (horario.fechamento && time2 === horario.fechamento) {
                if (ultimaExecucao[from + '_fechamento'] !== horario.fechamento) {
                    await keisen.groupSettingUpdate(from, 'announcement');
                    await keisen.sendMessage(from, {
                        text: mess.abertura()
                    });
                    ultimaExecucao[from + '_fechamento'] = horario.fechamento;
                }
            }

            if (horario.abertura && time2 === horario.abertura) {
                if (ultimaExecucao[from + '_abertura'] !== horario.abertura) {
                    await keisen.groupSettingUpdate(from, 'not_announcement');
                    await keisen.sendMessage(from, {
                        text: mess.fechamento(horario)
                    });
                    ultimaExecucao[from + '_abertura'] = horario.abertura;
                }
            }
} catch (e) {
            console.error(e);
}
}
}, 1000);

async function sendMenu(from, selo, opt = {}) {
const {
reaction = "⚡", caption = mess.error(), isGroupRequired = false, isAdminRequired = false, isOwnerRequired = false, isModoCoinsRequired = false, isModoBnRequired = false, sendAudio = false } = opt;
try {
reagir(from, reaction);
if (isGroupRequired && !isGroup) return reply(mess.onlyGroup());
if (isAdminRequired && !isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (isOwnerRequired && !SoDono) return reply(mess.onlyOwner());
if (isModoCoinsRequired && !isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ só ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ.*`);
if (isModoBnRequired && !isModobn) return reply(mess.onlyGroupFun(prefix));
if (sendAudio && isAudioMenu) await sendAudioMenu(from);
const midia = carregarMidia("fotomenu");
const msg = { caption, contextInfo: { ...NkChannelKk } };
if (midia.type === "video") {
msg.video = midia.data;
msg.gifPlayback = true;
} else if (midia.type === "image") {
msg.image = midia.data;
} else {
msg.text = caption;
}
await keisen.sendMessage(from, msg, { quoted: selo });
} catch (e) {
console.error(e);
await keisen.sendMessage(from, { text: caption, contextInfo: { ...NkChannelKk } }, { quoted: selo });
}
}

// ============================================================
// SISTEMA RPG - ORDEM PARANORMAL (versão digital simplificada)
// Adaptação própria e simplificada inspirada no sistema d20 de
// Ordem Paranormal, com fórmulas e textos originais (não copia
// tabelas/rituais/distúrbios do livro oficial).
// ============================================================

const opPath = './DADOS DO KEISEN/usuarios/ordemparanormal.json';
const opCombatePath = './DADOS DO KEISEN/grupos/combate_op.json';

function opLoad() {
return fs.existsSync(opPath) ? JSON.parse(fs.readFileSync(opPath)) : {};
}
function opSave(db) {
fs.writeFileSync(opPath, JSON.stringify(db, null, 2));
}
function opCombateLoad() {
return fs.existsSync(opCombatePath) ? JSON.parse(fs.readFileSync(opCombatePath)) : {};
}
function opCombateSave(db) {
fs.writeFileSync(opCombatePath, JSON.stringify(db, null, 2));
}

const opClasses = ["combatente", "especialista", "ocultista"];
const opAtributosLista = ["FOR", "AGI", "INT", "VIG", "PRE"];

function opNexTier(nex) {
return Math.max(1, Math.floor(nex / 5));
}

function opBudgetPontos(nex) {
return 6 + opNexTier(nex);
}

function opCalcularStats(ficha) {
const tier = opNexTier(ficha.nex);
const { FOR, AGI, INT, VIG, PRE } = ficha.atributos;
let pvMax, peMax;
const sanMax = Math.max(5, 20 + (PRE * 2) - tier);

if (ficha.classe === "combatente") {
pvMax = 20 + (VIG * 6) + (tier * 3);
peMax = 2 + Math.floor(PRE / 2) + Math.floor(tier / 2);
} else if (ficha.classe === "ocultista") {
pvMax = 12 + (VIG * 3) + (tier * 2);
peMax = 4 + (PRE * 2) + tier;
} else {
pvMax = 16 + (VIG * 4) + (tier * 2);
peMax = 3 + (PRE * 1) + tier;
}

return { pvMax, sanMax, peMax };
}

function opFicha(idUsuario) {
const db = opLoad();
return db[idUsuario] || null;
}

function opRolarDado(lados = 20) {
return Math.floor(Math.random() * lados) + 1;
}

function opBarra(atual, max, emoji = "🟪") {
const total = 10;
const cheio = Math.max(0, Math.min(total, Math.round((atual / max) * total)));
return emoji.repeat(cheio) + "⬜".repeat(total - cheio);
}

function opTextoDisturbio(percentual) {
if (percentual <= 0) return "🩸 *COLAPSO MENTAL* — a sanidade chegou a zero. O personagem entra em colapso e precisa de ajuda imediata (efeito narrativo grave, a critério do mestre).";
if (percentual <= 25) return "😱 *Surto* — algo se rompeu. Reações erráticas e paranoia tomam conta (efeito narrativo, a critério do mestre).";
if (percentual <= 50) return "😰 *Perturbação* — pesadelos e desconforto constante (efeito narrativo leve).";
return null;
}

// ============================================================
// SISTEMA DE PETS (próprio, original)
// ============================================================

const petsPath = './DADOS DO KEISEN/usuarios/pets.json';

function petsLoad() {
return fs.existsSync(petsPath) ? JSON.parse(fs.readFileSync(petsPath)) : {};
}
function petsSave(db) {
fs.writeFileSync(petsPath, JSON.stringify(db, null, 2));
}

const especiesPet = ["Cachorro", "Gato", "Coelho", "Raposa", "Coruja", "Lince", "Corvo", "Tartaruga Mística", "Dragãozinho", "Fênix Bebê"];

function petBarra(atual, max, emoji) {
const total = 10;
const cheio = Math.max(0, Math.min(total, Math.round((atual / max) * total)));
return emoji.repeat(cheio) + "⬜".repeat(total - cheio);
}

function petAplicarDecaimento(pet) {
const agora = Date.now();
const horasFome = (agora - pet.ultimaAlimentacao) / 3600000;
const horasFelicidade = (agora - pet.ultimoBrincar) / 3600000;
pet.fome = Math.max(0, Math.round(pet.fome - horasFome * 2));
pet.felicidade = Math.max(0, Math.round(pet.felicidade - horasFelicidade * 2));
return pet;
}

function petXpNecessario(nivel) {
return nivel * 100;
}

function petGanharXp(pet, quantidade) {
pet.xp += quantidade;
let subiu = false;
while (pet.xp >= petXpNecessario(pet.nivel)) {
pet.xp -= petXpNecessario(pet.nivel);
pet.nivel += 1;
subiu = true;
}
return subiu;
}



if (
isAutoDl &&
typeof body === 'string' &&
!body.startsWith(prefix) &&
!info.key.fromMe &&
isGroup // se quiser também no privado, remove essa linha
) {

// ─── TIKTOK ─────────────────────────
if (/tiktok\.com|vm\.tiktok\.com/i.test(body)) {
try {
await keisen.sendMessage(from, {
react: { text: "⌛", key: info.key }
});

const apiUrl = `https://tokito-apis.site/api/tiktok-video?url=${encodeURIComponent(body.trim())}&apikey=${API_KEY_TOKITO}`;

await keisen.sendMessage(from, {
video: { url: apiUrl },
mimetype: "video/mp4",
contextInfo: NkChannelKk
}, { quoted: selo });

await keisen.sendMessage(from, {
react: { text: "✅", key: info.key }
});
return;

} catch (e) {
console.log('[AUTO TIKTOK ERRO]', e);
await keisen.sendMessage(from, {
react: { text: "❌", key: info.key }
});
return;
}
}

// ─── INSTAGRAM ───────────────────────
if (/instagram\.com/i.test(body)) {
try {
await keisen.sendMessage(from, {
react: { text: "⌛", key: info.key }
});

const apiUrl = `https://tokito-apis.site/api/insta-video?url=${encodeURIComponent(body.trim())}&apikey=${API_KEY_TOKITO}`;

await keisen.sendMessage(from, {
video: { url: apiUrl },
mimetype: "video/mp4",
contextInfo: NkChannelKk
}, { quoted: selo });

await keisen.sendMessage(from, {
react: { text: "✅", key: info.key }
});
return;

} catch (e) {
console.log('[AUTO INSTAGRAM ERRO]', e);
await keisen.sendMessage(from, {
react: { text: "❌", key: info.key }
});
return;
}
}

// ─── YOUTUBE (ÁUDIO) ─────────────────
if (/youtube\.com|youtu\.be/i.test(body)) {
try {
await keisen.sendMessage(from, {
react: { text: "⌛", key: info.key }
});

const apiUrl = `https://tokito-apis.site/api/youTube-audio?q=${encodeURIComponent(body.trim())}&apikey=${API_KEY_TOKITO}`;

await keisen.sendMessage(from, {
audio: { url: apiUrl },
mimetype: "audio/mpeg",
ptt: false,
contextInfo: NkChannelKk
}, { quoted: selo });

await keisen.sendMessage(from, {
react: { text: "✅", key: info.key }
});
return;

} catch (e) {
console.log('[AUTO YOUTUBE ERRO]', e);
await keisen.sendMessage(from, {
react: { text: "❌", key: info.key }
});
return;
}
}

// ─── SPOTIFY ─────────────────────────
if (/open\.spotify\.com\/(track|playlist|album)/i.test(body)) {
try {
await keisen.sendMessage(from, {
react: { text: "🎧", key: info.key }
});

const apiUrl = `https://tokito-apis.site/api/spotify?url=${encodeURIComponent(body.trim())}&apikey=${API_KEY_TOKITO}`;

await keisen.sendMessage(from, {
audio: { url: apiUrl },
mimetype: "audio/mpeg",
ptt: false,
contextInfo: NkChannelKk
}, { quoted: selo });

await keisen.sendMessage(from, {
react: { text: "✅", key: info.key }
});
return;

} catch (e) {
console.log('[AUTO SPOTIFY ERRO]', e);
await keisen.sendMessage(from, {
react: { text: "❌", key: info.key }
});
return;
}
}
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./DADOS DO KEISEN/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/data/totalcmd.json'))

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isVip && dataGp[0]?.Limitar_CMD) {
var TEMPO_A = Math.floor(Date.now() / 1000) 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)
if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./DADOS DO KEISEN/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./DADOS DO KEISEN/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60
if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./DADOS DO KEISEN/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

keisen.sendImageAsSticker = async (jid, path, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
            } else {
buffer = await imageToWebp(buff)
}
await keisen.sendMessage(jid, { sticker: { url: buffer }, ...options})
return buffer
}

keisen.sendInteractiveTXT = async(idChat, mainText = '', footerText = '', quotedMessage = {}, buttonsParams = {}) => {
try {
await keisen.relayMessage(idChat, {interactiveMessage: {body: {text: mainText}, footer: {text: footerText}, contextInfo: quotedMessage, nativeFlowMessage: buttonsParams}}, {});
} catch(errorMessage) {
await reply(String(errorMessage));
}
}

keisen.sendInteractiveIMG = async(imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
try {
create = await prepareWAMessageMedia({image: fs.readFileSync(imageDir)}, {upload: keisen.waUploadToServer});
imageCreate = create.imageMessage;
await keisen.relayMessage(ChatID, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: imageCreate}, headerType: 'IMAGE', body: {text: definedText}, footer: {text: footer}, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams}}, {});
} catch(errorMessage) {
return reply(String(errorMessage));
}
 }
 
 const getallcases = () => {
findindex = fs.readFileSync("keisen.js").toString().match(/case\s+'(.+?)'/g)
cstt = []
for(i of findindex) {
cstt.push(i.split(`'`)[1])
}
return cstt
}

const allCases = getallcases();

const getSimilarity = require(`./ARQUIVES/js/similaridade.js`)

const rmLetras = (txt) => {
return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const similarityCmd = (txt) => {
getsmlrt = getSimilarity(allCases, txt, prefix)
if(rmLetras(getsmlrt.nome).includes(`${prefix}ᴍᴇɴᴜ`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}


const { registrarNoPrefix, removerNoPrefix, getComandoNoPrefix,registrarFigSticker, removerFigSticker, getComandoFig, listarFigStickers, listarNoPrefix } = require('./ARQUIVES/funcoes/command.js')

const keisensticker = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

if (keisensticker) {
const comandoFig = getComandoFig(keisensticker)
if (comandoFig && typeof comandoFig === 'string') {
isCmd = true
command = comandoFig.toLowerCase()
}
}

const NoPrefixkeisen = budy2.trim().slice(0).trim().split(" ")[0].trim().toLocaleLowerCase()

const comandoRegistrado = getComandoNoPrefix(NoPrefixkeisen)
if (comandoRegistrado && typeof comandoRegistrado === 'string') {
isCmd = true
command = comandoRegistrado.toLowerCase()
}

//======================================\\
if (!global.menuAzAtivos) global.menuAzAtivos = {};
if (!isCmd && global.menuAzAtivos[sender]) {
const escolha = body.trim();
if (escolha === '0') {
delete global.menuAzAtivos[sender];
return reply(`*ᴏᴋ ꜱᴇɴʜᴏʀ(ᴀ), ᴄᴀꜱᴏ ǫᴜᴇɪʀᴀ ꜱᴀʙᴇʀ ꜱᴇ ᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ ꜰᴏʀᴀᴍ ᴀᴛɪᴠᴏꜱ, ᴜꜱᴇ →『 ${prefix}status 』 ᴇ ᴏʟʜᴇ ᴀᴛᴇɴᴛᴀᴍᴇɴᴛᴇ ᴛᴏᴅᴀꜱ ᴀꜱ ᴏᴩᴄᴏᴇꜱ 🙇‍♂️*`);
}
const opcoes = {'1': 'antiaudio', '2': 'antivideo', '3': 'antiimg', '4': 'autosticker', '5': 'bemvindo', '6': 'bemvindo2', '7': 'antilink', '8': 'antilinkgp', '9': 'antilinkeasy', '10': 'anticatalogo', '11': 'antistatus', '12': 'antifake', '13': 'anticontato', '14': 'antiloc', '15': 'antiddd', '16': 'so_adm', '17': 'x9adm', '18': 'autototext', '19': 'ativic', '20': 'autodl', '21': 'multiprefixo', '22': 'antinotas', '23': 'antipalavra', '24': 'antipalavrao', '25': 'modobn', '26': 'modocoins'};
const cmd = opcoes[escolha];
if (cmd) {
command = cmd;
isCmd = true;
prefix = '';
}
}

async function responderIA(texto, estilo = "responda de forma natural, inteligente e curta") {
  const prompt = `Você é o Karasu Bot, um bot de WhatsApp.

REGRAS:
- Nunca diga que é IA
- Nunca mencione GPT ou OpenAI
- Fale como humano normal do WhatsApp
- Sempre responda em português do Brasil
- Seja natural, contextual e direto
- Se a mensagem for simples, responda simples
- Se for pergunta, responda a pergunta
- Se for zoeira, entre na zoeira
- Se for pedido de ajuda, ajude de verdade
- Não faça textão sem necessidade

ESTILO EXTRA:
${estilo}

Mensagem do usuário:
${texto}`

  const res = await fetchJson(
    `https://apisnodz.com.br/api/ias/dracarys-llama-3?prompt=${encodeURIComponent(prompt)}`
  )

  console.log("DEBUG IA RAW:", JSON.stringify(res))

  const resposta =
    res?.resultado?.response ||
    res?.resultado?.resultado ||
    res?.response ||
    res?.result ||
    ""

  if (!String(resposta).trim()) {
    throw new Error("API retornou vazio")
  }

  return String(resposta).trim()
}

if (
  isGroup &&
  isAutorepo === true &&
  !isCmd &&
  !info.key.fromMe &&
  body &&
  body.trim().length > 0 &&
  !isImage &&
  !isVideo &&
  !isAudio &&
  !isSticker
) {
  try {
    console.log({
      body,
      isCmd,
      isAutorepo,
      fromMe: info.key.fromMe
    })

    let estiloExtra = "responda de forma natural, inteligente e contextual"

    if (/(oi|ola|olá|opa|eae|salve)\b/i.test(body)) {
      estiloExtra = "responda como um cumprimento natural e simpático"
    } else if (/\?/.test(body)) {
      estiloExtra = "responda como uma pergunta, ajudando de forma clara"
    } else if (/(kkk|kkkk|rs|rsrs|pdp|fdp|pqp)/i.test(body)) {
      estiloExtra = "responda entrando na zoeira de forma natural"
    } else if (/(triste|mal|chorando|desanimado)/i.test(body)) {
      estiloExtra = "responda com empatia e apoio"
    }

    const respostaIA = await responderIA(body, estiloExtra)

    console.log("RESPOSTA IA:", respostaIA)

    if (respostaIA && respostaIA.trim()) {
      await reply(respostaIA)
      return
    }
  } catch (e) {
    console.log("ERRO AUTOREPO:", e?.message || e)
  }
}

//EVAL CMD KK
if (budy.startsWith('<')) {
try {
if (info.key.fromMe) return;
if (!SoDono && !isnit && !issupre && !ischyt) return;
console.log('[', colors.cyan('EVAL'), ']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(q));
let res = JSON.stringify(eval(q.slice(1)), null, '\t');
return reply(res);
} catch (e) {
return reply(String(e));
}
}
if (budy2.startsWith('(>')) {
try {
if (info.key.fromMe) return;
if (!isnit && !issupre && !ischyt) return;
var konsol = q.slice(3);
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2);
var bang = sat === undefined ? util.format(sul) : util.format(sat);
return reply(bang);
};
reply(util.format(eval(`;(async () => { ${konsol} })()`)));
} catch (e) {
reply(String(e));
}
}
if (budy.startsWith('$')) {
if (info.key.fromMe) return;
if (!SoDono && !isnit && !issupre && !ischyt) return;
const comando = q.slice(1).trim();
exec(comando, (err, stdout, stderr) => {
if (err) return reply(String(err));
if (stderr) return reply(String(stderr));
if (stdout) return reply(String(stdout));
reply(`*ᴏ ᴄᴏᴍᴀɴᴅᴏ → 「 ${comando} 」 ꜰᴏɪ ᴇxᴇᴄᴜᴛᴀᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`);
});
}

// Comando de reiniciar sem prefixo
const restartCommands = ['reiniciar', 'restart', 'r'];
if (restartCommands.includes(budy2.toLowerCase()) && SoDono) {
await keisen.sendMessage(from, { 
text: '🔄 *Estou reiniciando, meu Mestre* 🕹️' 
}, { quoted: selo });

// Aguarda 2 segundos e reinicia
setTimeout(() => {
process.exit(0);
}, 2000);
}
//FIM

///////////////////////ÍNICIO DE TUDO\\\\\\\\\\\\\\\\\\\
switch(command) {
//=============[ SYSTEM FIGURINHA ]===========\\

case 'rgfig': {
if (!SoDono) return reply(mess.onlyOwner());
if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
return reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ 💁‍♂️*');
if (!q) return reply('*ɪɴꜰᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀꜱꜱᴏᴄɪᴀʀ 🙇‍♂️*');
const buffer = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
'sticker'
);
const idSticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64');
await registrarFigSticker(idSticker, q.toLowerCase());
reply(
`*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ! ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴇꜱꜱᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇᴍ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ 💁‍♂️*\n\n` +
`- *🕊️ | ᴄᴏᴍᴀɴᴅᴏ:* ${q.toLowerCase()}\n` +
`- *✨ | ɪᴅ:* ${idSticker}`
);
}
break;

case 'delfig': {
if (!SoDono) return reply(mess.onlyOwner());
if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
return reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ 💁‍♂️*');
const buffer = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
'sticker'
);
const idSticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64');
const sucesso = removerFigSticker(idSticker);
if (sucesso) {
reply('*ꜰɪɢᴜʀɪɴʜᴀ ʀᴇᴍᴏᴠɪᴅᴀ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*');
} else {
reply('*ᴇꜱꜱᴀ ꜰɪɢᴜʀɪɴʜᴀ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 🙇‍♂️*');
}
}
break;

case 'listafig': {
if (!SoDono) return reply(mess.onlyOwner());
const lista = listarFigStickers();
if (!lista.length) return reply('*ɴᴇɴʜᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 💁‍♂️*');
let msg = '- ──────❲ ʟɪꜱᴛᴀ ᴅᴇ ꜰɪɢᴜʀɪɴʜᴀꜱ ❳──────╮\n━━━━━━━━━━━━━━━━━━━━\n';
lista.forEach((item, index) => {
msg += `🌟 | ᴄᴏᴍᴀɴᴅᴏ: *${item.comando}*\n`;
msg += `🆔 | ɪᴅ: *${item.id}*\n`;
msg += '━━━━━━━━━━━━━━━━━━━━\n';
});
msg += `- ──────❲ ʟɪꜱᴛᴀ ᴅᴇ ꜰɪɢᴜʀɪɴʜᴀꜱ ❳──────╯\n> *${NomeDoBot}*`;
reply(msg);
}
break;
//=============[ FIM DO COMANDO DE REGISTRO DE FIGURINHAS ]===========\\

//=============[ SYSTEM NO PREFIX ]===========\\

case 'rgcmd': {
const [semPrefixo, comandoReal] = q.split(/ +/g)
if (!semPrefixo || !comandoReal) return reply('*ᴜꜱᴇ: rgprefix [ꜱᴇᴍᴘʀᴇꜰɪxᴏ] [ᴄᴏᴍᴀɴᴅᴏʀᴇᴀʟ] 🙅‍♂️*')

registrarNoPrefix(semPrefixo.toLowerCase(), comandoReal.toLowerCase())
reply(
`*ʀᴇɢɪꜱᴛʀᴇɪ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*\n\n` +
`- *🗿 | ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ:* ${semPrefixo.toLowerCase()}\n` +
`- *⚙️ | ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴀʟ:* ${comandoReal.toLowerCase()}`
)
}
break

case 'delcmd': {
if (!SoDono) return reply(mess.onlyOwner())
if (!q) return reply('*ɪɴꜰᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ 🙇‍♂️*')

const sucesso = removerNoPrefix(q.toLowerCase())
if (sucesso) {
reply('*ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*')
} else {
reply('*ᴇꜱꜱᴇ ᴄᴏᴍᴀɴᴅᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴏ 🙇‍♂️*')
}
}
break

case 'modoai': {
try {

const fs = require("fs")

// 🔒 só admin ou dono
if (!isGroupAdmins && !isOwner) {
  return reply('❌ Apenas administradores ou o dono podem usar esse comando.')
}

// garantir objeto global
global.modoAI = global.modoAI || {}

// alternar estado
global.modoAI[from] = !global.modoAI[from]

// salvar no arquivo
fs.writeFileSync(
  "./database/modoai.json",
  JSON.stringify(global.modoAI, null, 2)
)

if (global.modoAI[from]) {

reply(`╭〔 🤖 MODO IA ATIVADO 〕╮
┃
┃ ✨ Agora você pode falar comigo
┃ de forma natural no grupo.
┃
┃ 📌 *Exemplos de comandos:*
┃
┃ 🎵 ruan, tocar nuts
┃ 🖼 ruan, enviar metadinha
┃ 🧩 ruan, faz sticker
┃ 🔓 ruan, abre o grupo
┃ 🔒 ruan, fecha o grupo
┃ 🚫 ruan, banir @user
┃ 👑 ruan, promover @user
┃ 👤 ruan, rebaixar @user
┃ 📋 ruan, abrir menu
┃ 💋 dar um beijo @user
┃ 🌦 ruanruan, me diga o clima de (cidade)
┃
┃ 💡 Use linguagem natural!
┃ Eu vou entender você 😉
┃
┃ ❌ Para desativar:
┃ digite *${prefix}modoai*
┃ novamente.
┃
╰━━━━━━━━━━━━━━━━━━╯`)

} else {

reply(`〔 ❌ MODO IA DESATIVADO 〕
┃
┃ O modo inteligente foi
┃ desligado com sucesso.
┃
┃ Para ativar novamente:
┃ digite *${prefix}modoai*
┃
╰━━━━━━━━━━━━━━━━━━━╯`)

}

} catch(e) {
console.log(e)
reply('❌ Erro ao alterar o modo IA.')
}

}
break;

case 'noprefix': {
try {
const lista = listarNoPrefix();
if (!lista.length)
return reply('*ɴᴀ̃ᴏ ʜᴀ ᴄᴏᴍᴀɴᴅᴏꜱ ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ 💁‍♂️*');
await reagir(from, "🗿");
let msg = `╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
            ❌️ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐈𝐧𝐯á𝐥𝐢𝐝𝐨 ❌️
╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
˚₊· ͟͟͞͞★Comando não encontrado:*\`${pc}\`
˚₊· ͟͟͞͞★Você quis dizer:* \`${cmd}\` ?
˚₊· ͟͟͞★Semelhança:* \`${porcentagem}%\`
╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
      Tente novamente 
 ╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
> by moreno modz`;
const vidNoPrefix = 'https://files.catbox.moe/d761yz.mp4';
await keisen.sendMessage(from, {
video: { url: vidNoPrefix },
caption: msg,
gifPlayback: true,
contextInfo: { ...NkChannelKk }
}, { quoted: selo });
} catch (e) {
console.error(e);
await keisen.sendMessage(from, { text: mess.error() }, { quoted: selo });
}
}
break;

//=============[ FIM DO COMANDO DE REGISTRO NO PREFIX]===========\\

//=============[ SYSTEM ALUGUEL ]===========\\

case 'modoaluguel':
try {
if(!SoDono) return reply(mess.onlyOwner())

	if (!nescessario.aluguel) {

		nescessario.aluguel = true;

		fs.writeFileSync(`./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
	} else if (nescessario.aluguel) {

		nescessario.aluguel = false

		fs.writeFileSync(`./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*`)
	}
} catch (e) {
	console.error(e);
	reply("Houve um erro no comando!");
}
break;

case 'removeraluguel':
case 'removealuguel':
case 'rm_aluguel': {
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
if (!SoDono) return reply(mess.onlyOwner())
if (args[0]) {
const index = parseInt(args[0]) - 1
if (isNaN(index) || index < 0 || index >= gruposAutorizados.length)
return reply(`*ᴜsᴇ: *rm_aluguel 1*`)
const alvo = gruposAutorizados[index]
desativarAluguelGrupo(alvo.id)
gruposAutorizados.splice(index, 1)
return reply(`*✅ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ɢʀᴜᴩᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ)*`)
}
if (!isGroup) return reply(mess.onlyGroup())
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return reply(`*ᴇssᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ. 🤷‍♂️*`)
desativarAluguelGrupo(from)
gruposAutorizados = gruposAutorizados.filter(g => g.id !== from)

reply(`*✅ ᴀʟᴜɢᴜᴇʟ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🔓🤷‍♂️`)
}
break

case 'lista_aluguel': {
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
if (gruposAutorizados.length === 0) return reply(`*ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ.* 🙇‍♂️`)
let texto = `╭─❉ *𝐆𝐑𝐔𝐏𝐎𝐒 𝐂𝐎𝐌 𝐀𝐋𝐔𝐆𝐔𝐄𝐋 𝐀𝐓𝐈𝐕𝐎*\n\n`
for (let i = 0; i < gruposAutorizados.length; i++) {
const g = gruposAutorizados[i]
try {
const meta = await keisen.groupMetadata(g.id)
const nome = meta.subject || '🕯️ ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ'
const membros = meta.participants.length || 0
const inviteCode = await keisen.groupInviteCode(g.id).catch(() => null)
const link = inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : '🔒 ʟɪɴᴋ ɪɴᴅɪsᴘᴏɴíᴠᴇʟ'
const expira = new Date(g.expiraEm)
const agora = new Date()
const restante = expira - agora
const dias = Math.floor(restante / (1000 * 60 * 60 * 24))
const horas = Math.floor((restante / (1000 * 60 * 60)) % 24)
const minutos = Math.floor((restante / (1000 * 60)) % 60)
texto +=`• *${i + 1}.* ✨ *${nome}*\n• 🔗 ʟɪɴᴋ: ${link}\n• 👤 ᴍᴇᴍʙʀᴏs: ${membros}\n• ⏳ ᴛᴇᴍᴘᴏ ʀᴇsᴛᴀɴᴛᴇ: ${dias}d ${horas}h ${minutos}m\n─────────────────────────────\n`
} catch {
texto +=
`*${i + 1}.* 💀 ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴘᴇɢᴀʀ ᴅᴀᴅᴏs ᴅᴏ ɢʀᴜᴘᴏ\n🆔 ID: ${g.id}\n─────────────────────────────\n`
}
}
reply(texto.trim())
}
break


case 'veraluguel':
case 'ver_aluguel': {
if (!isGroup) return reply(mess.onlyGroup())
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return reply('*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴘᴏssᴜɪ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴏ. 🤷‍♂️*')
const agora = new Date()
const expira = new Date(grupo.expiraEm)
if (isNaN(expira)) return reply('*ᴇʀʀᴏ ᴀᴏ ʟᴇʀ ᴀ ᴅᴀᴛᴀ ᴅᴏ ᴀʟᴜɢᴜᴇʟ. 💁‍♂️*')
if (agora > expira) {
desativarAluguelGrupo(from)
return reply('*ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ ᴇxᴘɪʀᴏᴜ. 🤷‍♂️*')
}
const diff = expira - agora
const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
const min = Math.floor((diff / (1000 * 60)) % 60)
const dataFormada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
reply(mess.veraluguel(dataFormada, dias, horas, min))
}
break

case 'rg_aluguel':
case 'aluguel': {
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
if (!isGroup) return reply(mess.onlyGroup())
if (!SoDono) return reply(mess.onlyOwner())
if (!args[0]) return reply(`*ᴅɪɢɪᴛᴇ ᴏ ᴛᴇᴍᴘᴏ ᴅᴇ ᴀʟᴜɢᴜᴇʟ ᴇᴍ ᴅɪᴀs. ᴇx: ${prefix}ᴀʟᴜɢᴜᴇʟ 2 4 (2 ᴅɪᴀs ᴇ 4 ʜᴏʀᴀs)* ⚠️🙆‍♂️`)
const dias = parseInt(args[0]) || 0
const horas = parseInt(args[1]) || 0
ativarAluguelGrupo(from, dias, horas)
const agora = new Date()
const expira = new Date(agora.getTime() + (dias * 24 + horas) * 60 * 60 * 1000)
const dataFormatada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
reply(mess.rgaluguel(dataFormatada))
}
break

//=================[ FIM DO ALUGUEL ]==============\\

//=============[ CMD DONO/ADM'S ]==============\\

case 'fechargp':
case 'fechamento': {
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

try {
let barra = q.trim();
if (!barra.includes(':')) return reply('*ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀ́ʟɪᴅᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ❌');

let [horas, minutos] = barra.split(':');
if (!horas || !minutos) return reply('*ʜᴏʀᴀʀɪᴏ ɪɴᴄᴏᴍᴘʟᴇᴛᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ⚠️');
if (isNaN(horas) || isNaN(minutos)) return reply('*ᴜꜱᴇ ᴀᴘᴇɴᴀꜱ ɴᴜ́ᴍᴇʀᴏꜱ ɴᴏ ʜᴏʀᴀʀɪᴏ* 🔢');

horas = horas.padStart(2, '0');
minutos = minutos.padStart(2, '0');

if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply('*ʜᴏʀᴀ́ʀɪᴏ ɪɴᴠᴀ́ʟɪᴅᴏ* ❌');

let horarioFinal = `${horas}:${minutos}:00`;
definirFechamento(from, horarioFinal);

await reply(`*🔒 ᴏ ɢʀᴜᴘᴏ ꜱᴇʀᴀ́ ꜰᴇᴄʜᴀᴅᴏ àꜱ ${horarioFinal}* ⏳\n-\n*ꜱᴇᴊᴀᴍ ʙᴇᴍ-ᴠɪɴᴅᴏꜱ ᴀᴏ ᴄᴀᴏꜱ ᴏʀɢᴀɴɪᴢᴀᴅᴏ ᴘᴏʀ ᴍɪᴍ...* 💁‍♂️`);

} catch (e) {
console.error('erro ao definir fechamento:', e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴅᴇꜰɪɴɪʀ ᴏ ʜᴏʀᴀʀɪᴏ ᴅᴇ ꜰᴇᴄʜᴀᴍᴇɴᴛᴏ* ❌');
}
}
break;

case 'abrirgp':
case 'abertura': {
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

try {
let barra = q.trim();
if (!barra.includes(':')) return reply('*ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀ́ʟɪᴅᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ❌');

let [horas, minutos] = barra.split(':');
if (!horas || !minutos) return reply('*ʜᴏʀᴀʀɪᴏ ɪɴᴄᴏᴍᴘʟᴇᴛᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ⚠️');
if (isNaN(horas) || isNaN(minutos)) return reply('*ᴜꜱᴇ ᴀᴘᴇɴᴀꜱ ɴᴜ́ᴍᴇʀᴏꜱ ɴᴏ ʜᴏʀᴀʀɪᴏ* 🔢');

horas = horas.padStart(2, '0');
minutos = minutos.padStart(2, '0');

if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply('*ʜᴏʀᴀ́ʀɪᴏ ɪɴᴠᴀ́ʟɪᴅᴏ* ❌');

let horarioFinal = `${horas}:${minutos}:00`;
definirAbertura(from, horarioFinal);

reply(`*🔓 ᴏ ɢʀᴜᴘᴏ ᴠᴀɪ ᴀʙʀɪʀ àꜱ ${horarioFinal}* ⏰\n-\n*ꜱᴇᴊᴀᴍ ʙᴇᴍ-ᴠɪɴᴅᴏꜱ ᴀᴏ ᴄᴀᴏꜱ ᴏʀɢᴀɴɪᴢᴀᴅᴏ ᴘᴏʀ ᴍɪᴍ...* 💁‍♂️`);

} catch (e) {
console.error('erro ao definir abertura:', e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴅᴇꜰɪɴɪʀ ᴏ ʜᴏʀᴀʀɪᴏ ᴅᴇ ᴀʙᴇʀᴛᴜʀᴀ* ❌');
}
}
break;

case 'rmhorario':
case 'remover_horario':
case 'removerhorario': {
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

try {
if (!horarios[from]) return reply('*ɴᴀ̃ᴏ ʜᴀ́ ʜᴏʀᴀ́ʀɪᴏꜱ ᴘʀᴏɢʀᴀᴍᴀᴅᴏꜱ ᴘᴀʀᴀ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ* ❌');
removerHorarios(from);
reply('*ʜᴏʀᴀ́ʀɪᴏꜱ ʀᴇᴍᴏᴠɪᴅᴏꜱ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ* 🙆‍♂️');
} catch (e) {
console.error('erro ao remover horario:', e);
reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ʀᴇᴍᴏᴠᴇʀ ᴏꜱ ʜᴏʀᴀ́ʀɪᴏꜱ* ❌');
}
}
break;

case 'ngl':
case 'sendngl': // Yuka Modz 
try {
if (!q.includes("|")) {
return reply(`*ᴜꜱᴀ ᴀꜱꜱɪᴍ: ${prefix}ɴɢʟ ʟɪɴᴋ | ᴍᴇɴꜱᴀɢᴇᴍ | ǫᴜᴀɴᴛɪᴅᴀᴅᴇ* 🙇‍♂️`)
}
let partes = q.split("|").map(x => x.trim()) // Yuka Modz 
if (partes.length < 3) {
return reply(`*ꜱᴇ ᴠᴏᴄᴇ ɴᴀᴏ ᴘᴀꜱꜱᴀʀ ᴏꜱ ᴛʀᴇꜱ ᴅᴀᴅᴏꜱ, ɴᴀᴏ ᴛᴇᴍ ᴍᴀɢɪᴀ ɴᴀᴏ...* 🤷‍♂️`)
}
let [link, mensagem, quantidade] = partes
if (!link.includes("ngl.link")) return reply(`*ᴇɪ, ɪꜱꜱᴏ ɴᴇᴍ ᴇ́ ᴜᴍ ʟɪɴᴋ ᴅᴏ ɴɢʟ* 💁‍♂️`)
let username = link.split("ngl.link/")[1].replace("/", "")
if (!username) return reply(`*ɴᴀ̃ᴏ ᴅᴀ ᴘʀᴀ ᴘᴇɢᴀʀ ᴏ ᴜꜱᴜᴀ́ʀɪᴏ ᴅᴇꜱꜱᴇ ʟɪɴᴋ ᴀɪ ɴᴀ̃ᴏ* 🙆‍♂️`)
let total = parseInt(quantidade)
if (isNaN(total) || total <= 0) return reply(`*ᴇꜱᴄᴏʟʜᴇ ᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴠᴀ́ʟɪᴅᴏ ᴘʀᴀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ* 🤷‍♂️`)
if (total > 20) {
return reply(`*ɴᴀ̃ᴏ ꜱᴇ ᴀᴘᴀᴠᴏʀᴀ ɴᴀᴏ... ᴍᴀꜱ ᴏ ʟɪᴍɪᴛᴇ ᴇ́ ᴅᴇ 20 ᴍᴇɴꜱᴀɢᴇɴꜱ 😐*\n*ᴛᴇɴᴛᴀ ᴅᴇ ɴᴏᴠᴏ ᴄᴏᴍ ᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴍᴇɴᴏʀ* 💁‍♂️`)
}
reply(`*ᴠᴀᴍᴏ ʟᴀ́... ᴇɴᴠɪᴀɴᴅᴏ ${total} ᴍᴇɴꜱᴀɢᴇɴ(ꜱ) ᴀɴᴏ̂ɴɪᴍᴀ(ꜱ) ᴘʀᴏ @${username}* 💥`)
function gerarUUIDv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
const r = Math.random() * 16 | 0
const v = c === 'x' ? r : (r & 0x3 | 0x8)
return v.toString(16)
})
}
for (let i = 0; i < total; i++) {
let deviceId = gerarUUIDv4()
await axios.post("https://ngl.link/api/submit", {
username: username,
question: mensagem,
deviceId: deviceId // Yuka Modz 
}, {
headers: { "Content-Type": "application/json" }
})
await new Promise(resolve => setTimeout(resolve, 1000))
}
return reply(`*${total} ᴍᴇɴꜱᴀɢᴇɴ(ꜱ) ᴀɴᴏ̂ɴɪᴍᴀ(ꜱ) ᴇɴᴠɪᴀᴅᴀ(ꜱ)!* 🙆‍♂️`)
} catch (err) {
console.error(err)
return reply(mess.error());
}
break

case 'banfake': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (q && isNaN(q)) {
return reply('*ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ ᴜᴍ ɴᴜᴍᴇʀᴏ ᴇsᴘᴇᴄɪ́ғɪᴄᴏ, ᴅɪɢɪᴛᴇ ᴏ ᴄᴏ́ᴅɪɢᴏ ᴅᴏ ᴘᴀɪs ᴏᴜ ᴏs ᴘʀɪᴍᴇɪʀᴏs ɴᴜᴍᴇʀᴏs 🙆‍♂️*');
}

try {
const groupMetadata = await keisen.groupMetadata(from);
const participants = groupMetadata.participants;
const prefixo = q || '55';

const estrangeiros = participants
            .filter(i => {
                const jid = normalizar(i.id);
                const isEstrangeiro = !jid.startsWith(prefixo);
                const isBot = jid === keisen.user.id;
                const isNotAdmin = i.admin === null;
                return isEstrangeiro && !isBot && isNotAdmin;
            })
            .map(i => normalizar(i.id));

if (estrangeiros.length === 0)
            return reply('*ɴᴀ̃ᴏ ʜᴀ́ ɴᴜᴍᴇʀᴏs ᴇsᴛʀᴀɴɢᴇɪʀᴏs ɴᴏ ɢʀᴜᴘᴏ 💁‍♂️*');

await keisen.groupParticipantsUpdate(from, estrangeiros, 'remove');
reply(`*ғᴏʀᴀᴍ ʀᴇᴍᴏᴠɪᴅᴏs ${estrangeiros.length} ɴᴜᴍᴇʀᴏs ᴇsᴛʀᴀɴɢᴇɪʀᴏs ᴅᴏ ɢʀᴜᴘᴏ 🙇‍♂️*`);
} catch (err) {
console.error(err);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ ʀᴇᴍᴏᴠᴇʀ ᴏs ɴᴜᴍᴇʀᴏs 🤷‍♂️*');
}
break;
}


case 'listafake':
case 'listafakes': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
reagir(from, "🇺🇸");

let totalFake = 0;
let txtFake = `*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇺🇸 ɴᴜᴍᴇʀᴏs ꜰᴀᴋᴇs ɴᴏ ɢʀᴜᴘᴏ:*\n*━━━━━━━━━━━━━━━━━━━━━━━*\n\n`;
let mencionadosFake = [];

for (let membro of groupMembers) {
const jid = normalizar(membro.id);
const numero = jid.split("@")[0];
if (!numero.startsWith("55")) {
            totalFake++;
            if (isGroupAdmins) mencionadosFake.push(jid);
            txtFake += `╰➤ ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}\n`;
}
}

txtFake += `\n*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇺🇸 ᴛᴏᴛᴀʟ ᴅᴇ ꜰᴀᴋᴇꜱ: ${totalFake}*\n*━━━━━━━━━━━━━━━━━━━━━━━*`;

if (totalFake > 0) {
if (isGroupAdmins) {
            keisen.sendMessage(from, { text: txtFake, mentions: mencionadosFake }, { quoted: selo });
} else reply(txtFake);
} else reply("*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ ɴᴜᴍᴇʀᴏ ғᴀᴋᴇ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ 🤷‍♂️*");
break;
}


case 'brlist':
case 'listabr': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
reagir(from, "🇧🇷");

let totalBr = 0;
let txtBr = `*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇧🇷 ɴᴜᴍᴇʀᴏꜱ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ ɴᴏ ɢʀᴜᴘᴏ:*\n*━━━━━━━━━━━━━━━━━━━━━━━*\n\n`;
let mencionadosBr = [];

for (let membro of groupMembers) {
const jid = normalizar(membro.id);
const numero = jid.split("@")[0];
if (numero.startsWith("55") && !botNumber.includes(jid)) {
            totalBr++;
            if (isGroupAdmins) mencionadosBr.push(jid);
            txtBr += `╰➤ ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}\n`;
}
}

txtBr += `\n*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇧🇷 ᴛᴏᴛᴀʟ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ: ${totalBr}*\n*━━━━━━━━━━━━━━━━━━━━━━━*`;

if (totalBr > 0) {
if (isGroupAdmins) {
            keisen.sendMessage(from, { text: txtBr, mentions: mencionadosBr }, { quoted: selo });
} else reply(txtBr);
} else reply("*ɴᴀᴏ ʜᴀ ɴᴜᴍᴇʀᴏꜱ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ ɴᴏ ɢʀᴜᴘᴏ 🤷‍♂️*");
break;
}

case 'autorizar':
case 'aceitar':
case '✅': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const pendentes = await keisen.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;
if (total === 0)
return reply('*💁‍♂️ | ɴᴀᴏ ʜᴀ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ. 🤷‍♂️*');
for (const p of pendentes) {
await keisen.groupRequestParticipantsUpdate(from, [p.jid], 'approve');
}
reply(`*${total} sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ғᴏʀᴀᴍ ᴀᴄᴇɪᴛᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ! 🙇‍♂️*`);
}
break;

case 'recusar':
case 'negar':
case '❌': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const pendentes = await keisen.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;

if (total === 0)
return reply('*ɴᴀᴏ ʜᴀ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ᴘᴀʀᴀ ʀᴇᴄᴜsᴀʀ. 🤷‍♂️*');
for (const p of pendentes) {
await keisen.groupRequestParticipantsUpdate(from, [p.jid], 'reject');
}

reply(`*${total} sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ғᴏʀᴀᴍ ʀᴇᴄᴜsᴀᴅᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ! 🙇‍♂️*`);
}
break;

case '📃':
case 'solicitacao':
case 'soli': {
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
const solAll = await keisen.groupRequestParticipantsList(from);
if (!solAll || solAll.length === 0)
            return reply('*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ 💁‍♂️*');
let formatted = solAll.map((item, idx) => {
            let phone = item.phone_number || '';
            let num = phone.split('@')[0]; 
            let ddi = num.slice(0, 2);
            let nacionalidade = ddi === '55' ? 'ʙʀᴀsɪʟᴇɪʀᴏ 🇧🇷' : 'ᴇsᴛʀᴀɴɢᴇɪʀᴏ 🌎';
            
            return `*${idx+1}.* 👤 @${num}
*👁️ ᴍᴇᴛᴏᴅᴏ:* ${item.request_method}
*🌍 ɴᴀᴄɪᴏɴᴀʟɪᴅᴀᴅᴇ:* ${nacionalidade}`;
}).join('\n━━━━━━━━━━━━━━\n');
const mentionsList = solAll.map(item => item.phone_number);
await mention(`*『 ⚠️ sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ᴘᴇɴᴅᴇɴᴛᴇs ⚠️ 』*\n\n${formatted}`, mentionsList);
} catch (err) {
console.error(err);
reply('*❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ʟɪsᴛᴀʀ ᴀs sᴏʟɪᴄɪᴛᴀᴄᴏᴇs.*');
}
break;
}

case 'getsite': //by moreno modz
try {
if (!SoDono) return reply(`• Somente meus donos pode usar esse comando kiridu`)
if (!q.includes('http')) return reply('• Insira uma URL válida!');

if (q.includes('xvideos')) return reply('Sai dae punheteiro KKKKKKKKKKKKKK');

const { getHtml } = require('./ARQUIVES/js/getsite.js');

const result = await getHtml(q.trim());

if (!result) return reply('Parece que não foi possível obter os dados do site.');

keisen.sendMessage(from, {
            document: fs.readFileSync(result),
            mimetype: 'text/plain',
            fileName: 'Source HTML'
}, {
            quoted: selo
});

DLT_FL(result);
} catch (e) {
console.error(e);
reply('Não foi possível completar sua solicitação!');
}
break;


case 'entrar':
case 'entrargp': //by moreno modz
try { //começo do try
if (!SoDono) return reply("*ᴇɪɪ, ᴘsɪᴜ, ǫᴜᴇᴍ ᴅɪssᴇ ǫᴜᴇ ᴠᴏᴄᴇ ᴘᴏᴅᴇ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴍᴇᴜ ᴍᴇsᴛʀᴇ? ᴘᴏɴʜᴀ-sᴇ ɴᴏ sᴇᴜ ʟᴜɢᴀʀ 🙆‍♂️*");
if (!q || !q.includes("https://chat.whatsapp.com/")) return reply("*ᴘʀᴇᴄɪsᴏ ᴅᴏ ʟɪɴᴋ ᴅᴏ ᴄʜᴀᴛ ᴘʀᴀ ᴍɪᴍ ᴘᴏᴅᴇʀ ᴇɴᴛʀᴀʀ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*"); //Analisa se você enviou o link certo
reply("*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ǫᴜᴇ ᴇᴜ ᴊᴀ ᴇɴᴠɪᴇɪ ᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*");
const URL_ID = q.split('https://chat.whatsapp.com/')[1]; //Põe apenas o id
await keisen.groupAcceptInvite(URL_ID);
} catch (webSexo) { //caso der erro
console.error(webSexo);
reply("*ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ ᴇɴᴛʀᴀʀ ɴᴏ ɢʀᴜᴘᴏ.(ᴛᴀʟᴠᴇᴢ ғᴜɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴏᴜ ᴏ ʟɪɴᴋ ғᴏɪ ʀᴇᴅᴇғɪɴɪᴅᴏ) 👨‍💻*");
} 
break;


case 'apresentar':
case 'apr':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
keisen.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
keisen.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
【✔】ʟᴏʟɪ🍭【✔】ɢᴀᴅᴏ🐃
【✔】ɢᴀʏ🏳️‍🌈【✔】ʟᴇsʙɪᴄᴀ✂️
【✔】ᴠᴀᴅɪᴀ💄【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
keisen.sendMessage(from, {text: bla}, {quoted: selo})
break


case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*")
if (botNumber.includes(menc_os2)) {
return reply("*ɴᴀᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴇᴜ ᴍᴇsᴍᴏ ɴᴇ, ᴍᴀs ᴇsᴛᴏᴜ ᴍᴜɪᴛᴏ ᴛʀɪsᴛᴇ ᴄᴏᴍ ᴇssᴀ sᴜᴀ ᴅᴇᴄɪsᴀᴏ 🙁*");
}
if (numerodono.includes(menc_os2)) {
return reply("*ɴᴀᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴍᴇᴜ ᴅᴏɴᴏ ɴᴇ ғɪʟʜᴀ ᴅᴀ ᴍᴀᴇ 🤦‍♂️*");
 }
await keisen.sendMessage(from, {text: `*ᴄᴇʀᴛᴏ... ʀᴇᴍᴏᴠɪ ᴏ(ᴀ) @${menc_os2.split("@")[0]} ᴘᴏʀ ᴘᴏʀ ᴍᴏᴛɪᴠᴏꜱ ᴊᴜꜱᴛᴏꜱ 🙇‍♂️*`, contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo}) 
await keisen.groupParticipantsUpdate(from, [menc_os2], "remove");
 } catch (e) {
console.error(e);
reply(mess.error());
 }
break; 

case 'rebaixar': {
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

const toNum = (v) => String(v || '').replace(/\D/g, '')

const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
let dataAR = [{}]

if (fs.existsSync(pathAtiv)) {
try {
dataAR = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(dataAR)) dataAR = [dataAR]
if (!dataAR[0]) dataAR[0] = {}
} catch {
dataAR = [{}]
}
}

const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
: []

const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
: []

const senderNum = toNum(sender)
const senderRaw = info?.key?.participant || info?.key?.sender || sender
const senderRawNum = toNum(senderRaw)

const autorizado =
SoDono ||
(senderNum && permitidosNums.includes(senderNum)) ||
(senderRawNum && permitidosLidNums.includes(senderRawNum))

if (!autorizado) return reply("*você não tem permissão para usar esse comando.🤷‍♂️*")

if(!menc_os2 || menc_jid2[1]) return reply("🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️")

keisen.sendMessage(
from,
{ text: `*@${menc_os2.split("@")[0]} ғᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴘᴀʀᴀ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`, contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]} },
{ quoted: selo }
)
keisen.groupParticipantsUpdate(from, [menc_os2], "demote")
}
break
case 'promover': {
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

const toNum = (v) => String(v || '').replace(/\D/g, '')

const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
let dataAR = [{}]

if (fs.existsSync(pathAtiv)) {
try {
dataAR = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(dataAR)) dataAR = [dataAR]
if (!dataAR[0]) dataAR[0] = {}
} catch {
dataAR = [{}]
}
}

const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
: []

const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
: []

const senderNum = toNum(sender)
const senderRaw = info?.key?.participant || info?.key?.sender || sender
const senderRawNum = toNum(senderRaw)

const autorizado =
SoDono ||
(senderNum && permitidosNums.includes(senderNum)) ||
(senderRawNum && permitidosLidNums.includes(senderRawNum))

if (!autorizado) return reply("*você não tem permissão para usar esse comando.🤷‍♂️*")

if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*")

keisen.sendMessage(
from,
{ text: `*@${menc_os2.split("@")[0]} ғᴏɪ ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴀᴏ ᴄᴀʀɢᴏ ᴅᴇ ᴀᴅᴍ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`, contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]} },
{ quoted: selo }
)
keisen.groupParticipantsUpdate(from, [menc_os2], "promote")
}
break

case 'sorteio':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!q) return reply(`*🤷‍♂️ ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix}sᴏʀᴛᴇɪᴏ ᴅᴇ 100$`);
try {
await mention(`*🤖🎉 ᴘᴀʀᴀʙᴇɴs @${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]} ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ɢᴀɴʜᴀʀ ᴏ sᴏʀᴛᴇɪᴏ*`);
} catch(error) {
reply('*ᴅᴇsᴄᴜʟᴘᴇ ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*')
}
break

case 'sorteionumero':
case 'sorteionumeros':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!args.length > 1) return reply(`*🤷‍♂️ ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix}sᴏʀᴛᴇɪᴏ ᴅᴇ 100$`);
try {
reply(`*🤖🎉 ᴘᴀʀᴀʙᴇɴs ᴏ sᴏʀᴛᴜᴅᴏ ᴅᴏs ɴᴜᴍᴇʀᴏs ғᴏɪ ${Math.floor(Math.random() * groupMetadata.participants.length)}*`)
} catch(error) {
reply('*ᴅᴇsᴄᴜʟᴘᴇ ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*')
}
break

case 'substituir': {
if (!SoDono) return reply(mess.onlyOwner());

if (isMedia && !info.message.videoMessage || isQuotedDocument) {
const media = isQuotedDocument
? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage
: info.message.documentMessage;

const rane = getRandom('.' + await getExtension(media.mimetype));
const doc = await getFileBuffer(media, 'document');

fs.writeFileSync(q, doc);

await keisen.sendMessage(from, {
text: '*🌟 ᴀʀǫᴜɪᴠᴏ ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ᴅɪʀᴇᴛᴏʀɪᴏ:* ' + q
}, { quoted: selo });

} else {
reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴏᴜ ᴀʀǫᴜɪᴠᴏ ǫᴜᴇ ꜱᴇʀᴀ́ ꜱᴜʙꜱᴛɪᴛᴜɪ́ᴅᴏ...* 💁‍♂️');
}
}
break;

case 'index-bot':
if(!SoDono)return reply(mess.onlyOwner())
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./keisen.js', doc)
await keisen.sendMessage(from, {text: "*ᴀ ɪɴᴅᴇx ғᴏɪ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*"}, {quoted: selo})
} else {
reply('*ᴍᴀʀǫᴜᴇ ᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ǫᴜᴇ ᴠᴏᴄᴇ ɪʀᴀ ᴍᴜᴅᴀʀ.. 🙆‍♂️*')
}
break

case 'addpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('A palavra já foi adicionada na lista de proibições. do anti palavra, verifique...')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply(`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix+command}`)
break

case 'delpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(args.length < 1) return reply(`*🌟 ᴜsᴇ ᴅᴀ ғᴏʀᴍᴀ ᴄᴇʀᴛᴀ, ᴇxᴇᴍᴘʟᴏ: ${prefix}ᴅᴇʟᴘᴀʟᴀᴠʀᴀ ᴄᴀʀᴀʟʜᴏ*`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('*ᴀ ᴘᴀʟᴀᴠʀᴀ ᴊᴀ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴀ ᴏᴜ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴀ.. 🤷‍♂️*')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply(`*ᴘᴀʟᴀᴠʀᴀᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`)
break

case 'listapalavrão': case 'listapalavra': case 'listpalavra':
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(isPalavras.length < 0) return reply(`*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴘʀᴏɪʙɪᴅᴀ 🤷‍♂️*`)
reply(`*ᴛᴏᴛᴀʟ ${isPalavras.length} - ʟɪsᴛᴀ ᴅᴇ ᴘᴀʟᴀᴠʀᴏᴇs ɴᴏ ɢʀᴜᴘᴏ:*\n–\n${isPalavras.map((v, index) => `${index+1}. ➸${v}`).join('\n')}`)
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner())
if(!isAntiFlood) return reply(`*🤷‍♂️ ᴀᴛɪᴠᴇ ᴏ ʀᴇᴄᴜʀsᴏ ᴘʀɪᴍᴇɪʀᴏ, ${prefix}ʟɪᴍɪᴛᴇᴄ`)
if(!q) return reply(`*🌟 ᴄᴀᴅᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ? ᴇxᴇᴍᴘʟᴏ: ${prefix + command} 5000*`)
if(isNaN(q) == true) return reply('*ᴜsᴇ ᴀᴘᴇɴᴀs ɴᴜᴍᴇʀᴏs 🙄*')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`*${q} ғᴏɪ ᴀᴜᴛᴇʀᴀᴅᴏ ᴏ ʟɪᴍɪᴛᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs 🚀*`)
} else {
fs.writeFileSync('./DADOS DO KEISEN/usuarios/flood.json', JSON.stringify({limitefl: q}, null, '\t'))
await reply(`*${q} ғᴏʀᴀᴍ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀᴏ ʟɪᴍɪᴛᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs 🚀*`)
}
break

case 'r':
case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... 🙇‍♂️*")
setTimeout(async() => {process.exit()}, 1200)
break

case 'novoqr':
if(!SoDono) return reply(mess.onlyOwner());
reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ ᴏ ǫʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... ᴇ ғɪǫᴜᴇ ʟɪɢᴀᴅᴏ ɴᴏ ᴄᴏɴsᴏʟᴇ🙇‍♂️*")
setTimeout(async() => {fs.rmdirSync(qrcode, {recursive: true})}, 1500);
break


case 'limpardb':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
AB = countMessage.map(i => i.groupId).indexOf(from)
total = countMessage[AB].participants.length
caixa = []
for(i = 0; i < countMessage[AB].participants.length; i++) {
if(isJsonIncludes(groupMembers, countMessage[AB].participants[i].id)) {
caixa.push(countMessage[AB].participants[i])
}
}
pack = total - caixa.length
if(pack <= 0) return reply("*ᴛᴏᴅᴏs ᴏs ɢʜᴏsᴛ ғᴏʀᴀᴍ ʟɪᴍᴘᴀᴅᴏs ᴅᴀ ᴅᴀᴛᴀʙᴀsᴇ 🙅‍♂️*")
countMessage[AB].participants = caixa
saveJSON(countMessage, ".INFO_KEISEN/media/countmsg.json")
reply(`*${pack} ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`)
break

case 'limparqr': 
try {
if(!SoDono) return reply(mess.onlyGroup())
const limparPasta = (caminho) => {
fs.readdir(caminho, (err, arquivos) => {
if (err) {console.error('Erro ao ler os arquivos da pasta:', err);return;}
const arquivosDeletados = arquivos.filter((arquivo) => {
return /sender|pre-key|session/i.test(arquivo);});
arquivosDeletados.forEach((arquivo) => {
fs.unlink(`${caminho}/${arquivo}`, (err) => {
if (err) {
console.error(`Erro ao deletar o arquivo ${arquivo}:`, err);
return;
}});});
reply(`*${arquivosDeletados.length} ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`);
});};
await limparPasta(`./DADOS DO KEISEN/qr-code`);
} catch(e) {
console.log(e);
await reply(mess.error());
} 
break

case 'roletarussa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
TAMBOR = ["ɴᴀ ᴘᴇʀɴᴀ","ɴᴀ ᴄᴀʙᴇᴄᴀ","ɴᴏ ᴘᴇsᴄᴏᴄᴏ","ɴᴏ ᴘᴇɪᴛᴏ","ɴᴏ ᴏʟʜᴏ","ɴᴏ ᴇsᴛᴏᴍᴀɢᴏ.","ɴᴀ ʙᴏᴄᴀ","ɴᴀ ᴘᴇʀᴏᴋᴀʜ","ɴᴀ ᴛᴇsᴛᴀ","ɴᴏ ʙʀᴀᴄᴏ", "ɴᴀ ʙᴜᴢᴇᴛᴀ", "ɴᴀ ᴍᴀᴏ", "ɴᴏ ᴘᴇ"]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("*ᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴀǫᴜɪ 🤷‍♂️*")
if(C2 === sender || C2 === botNumber) return mentions(`*ᴇᴜ ᴇsᴄᴏʟʜɪ ᴏ @${C2.split('@')[0]} ᴍᴀs ᴄᴏɴsᴇɢᴜɪᴜ ᴇsᴄᴀᴘᴀʀ 🙄*`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`*ᴇsᴄᴏʟʜɪ ᴏ @${C2.split('@')[0]} sᴇɴᴛᴇ ᴀ ᴘʀᴇssᴀᴏ ɴᴇɴᴇᴍ 🙅‍♂️*`, [C2], true)		
reply(`*ʙᴏʀᴀ ᴠᴇʀ ǫᴜᴇᴍ ɴᴀᴏ ᴛᴇᴍ sᴏʀᴛᴇ ᴀǫᴜɪ 🚀*`)
setTimeout(async() => { 
await mentions(`*ǫᴜᴇ ᴘᴇɴɪɴʜᴀ @${C2.split('@')[0]} ᴠᴏᴄᴇ ɴᴀᴏ ᴛᴇᴠᴇ sᴏʀᴛᴇ 🤷‍♂️ ᴛᴏᴍᴀ ᴜᴍ ᴛɪʀᴏ ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]} 🙅‍♂️*`, [C2], true) 
}, 5000)	 
setTimeout(async() => {
await keisen.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break


case 'limpar':
await reagir(from, "🗑️")
if(!isGroup) return reply(mess.onlyGroup())
           if(!isGroupAdmins) return reply(mess.onlyAdmins())
             if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
                    reply('*ʟɪᴍᴘᴇᴢᴀ ᴅᴇ ᴄʜᴀᴛ 💁‍♂️*');
                    await sleep(1000);
                    async function clearmsg() {
                        reply(`${'\n'.repeat(299)}`);
                    }
                    for (let i = 0; i < 10; i++) {
                        await sleep(500);
                        clearmsg();
                    }
                    reply('*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ, ᴀᴄᴀʙᴇɪ ᴅᴇ ʟɪᴍᴘᴀʀ ᴏ ᴄʜᴀᴛ 🙇‍♂️*');
                    break;


case 'd_':
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'iddogrupo':
reply(from)
break

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q)) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return reply(`Nenhum número com o DDI *+${args[0]}* foi encontrado.`)
await keisen.sendMessage(from, {text: teks, mentions: men}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(q.length < 1) return reply(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q)) return reply(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('Nenhum *número brasileiro* com DDD fornecido foi encontrado no grupo.')
await keisen.sendMessage(from, {text: teks, mentions: men}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
break

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
blat = args.join(" ")
await keisen.groupUpdateSubject(from, `${blat}`)
await keisen.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break

case 'descgp':
case 'descriçãogp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyAdmins())
blabla = args.join(" ")
await keisen.groupUpdateDescription(from, `${blabla}`)
await keisen.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selo})
break

case 'mudarftgp':
case 'colocarftgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
keisen.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

            case 'linkgp':
            case 'linkgroup':
if(!isGroup) return reply(mess.onlyGroup())
           if(!isGroupAdmins) return reply(mess.onlyAdmins())
             if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
                let metadata = await keisen.groupMetadata(from)
                linkgc = await keisen.groupInviteCode(from)
                reply(`*✨ → ᴀᴄᴇꜱꜱᴇ ᴏ ʟɪɴᴋ ᴅᴏ ɢʀᴜᴩᴏ ᴀᴛᴜᴀʟ ᴀʙᴀɪxᴏ ↴*\nhttps://chat.whatsapp.com/` + linkgc)
                break

case 'redefinir':
case 'revlinkgp':
case 'revlinkgroup':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await keisen.groupRevokeInvite(from)
reply(`*ʟɪɴᴋ ᴅᴏ ɢʀᴜᴘᴏ ʀᴇᴅᴇғɪɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'recrutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await keisen.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await keisen.groupInviteCode(from)
await keisen.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./DADOS DO KEISEN/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./DADOS DO KEISEN/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fzrtm':
if(!SoDono) return reply(mess.onlyOwner())
var rgp = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? " "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? " "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? " "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), ` `)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue
blue.caption = q.length > 1 ? " "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), ` `)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), ` `)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), ` `)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? " "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), ` `)
yellow.document = {url: yellow.url}
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
await keisen.sendMessage(rgp[i].id, DFC)}
break

case 'fazertm': {
if (!SoDono) return reply(mess.onlyOwner())
await sleep(1000);

let todosGrupos = await keisen.groupFetchAllParticipating()
let grupos = Object.keys(todosGrupos).filter(id => id.endsWith("@g.us"))
if (grupos.length == 0) return reply('*ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ 🙇‍♂️*')

var keisenMsg = ""
var NkAlone = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? NkAlone?.imageMessage : info.message?.imageMessage
var blue = isQuotedVideo ? NkAlone?.videoMessage : info.message?.videoMessage
var red = isQuotedMsg ? NkAlone?.textMessage : info.message?.textMessage
var aud_d = isQuotedAudio ? NkAlone.audioMessage : ""
var figu_d = isQuotedSticker ? NkAlone.stickerMessage : ""
red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue ? " " + NkAlone.conversation : info.message?.conversation
var green = isQuotedMsg2 && !aud_d && !figu_d && !red && !pink && !blue ? " " + NkAlone.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
const intro = ""
let acessarCanalBase = {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: NomeDoBot
}
}

if (pink) {
keisenMsg = pink
pink.caption = intro + (q.length > 1 ? " " + q : pink.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '')
pink.image = { url: pink.url }
} else if (blue) {
keisenMsg = blue
blue.caption = intro + (q.length > 1 ? " " + q : blue.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '')
blue.video = { url: blue.url }
} else if (red) {
keisenMsg = { text: intro + red.replace(new RegExp(prefix + command, "gi"), ` `) }
} else if (!aud_d && !figu_d && green) {
keisenMsg = { text: intro + green.replace(new RegExp(prefix + command, "gi"), ` `) }
} else if (figu_d) {
keisenMsg = figu_d
figu_d.sticker = { url: figu_d.url }
} else if (aud_d) {
keisenMsg = aud_d
aud_d.audio = { url: aud_d.url }
}

for (let i = 0; i < grupos.length; i++) {
try {
let metadata = await keisen.groupMetadata(grupos[i])
let membros = metadata.participants.map(p => p.id)

let contextInfo = {
...acessarCanalBase,
mentionedJid: membros
}

await keisen.sendMessage(grupos[i], {
...keisenMsg,
contextInfo
})
} catch (err) {
continue
}
}

reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙆‍♂️*')
break
} 

case 'grupo': {
try {
if (!isGroup) return reply(mess.onlyGroup())
if (!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if (args.length < 1) return reply(`*ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴀʟɢᴏ ᴀɪ ʀᴀᴘᴀᴢ 🤷‍♂️*\n\n> ᴇxᴇᴍᴘʟᴏ: ${prefix}ɢʀᴜᴘᴏ ᴀ『 ᴘᴀʀᴀ ᴀʙʀɪʀ 』\n> ${prefix}ɢʀᴜᴘᴏ ғ『 ᴘᴀʀᴀ ғᴇᴄʜᴀʀ 』`);
const metadata = await keisen.groupMetadata(from)
const isFechado = metadata.announce === true 
if (args[0] === 'a') {
if (!isFechado) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ᴀʙᴇʀᴛᴏ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`)
await keisen.groupSettingUpdate(from, 'not_announcement')
reply(`*ɢʀᴜᴘᴏ ᴀʙᴇʀᴛᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
} 
else if (args[0] === 'f') {
if (isFechado) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ғᴇᴄʜᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`)
await keisen.groupSettingUpdate(from, 'announcement')
reply(`*ɢʀᴜᴘᴏ ғᴇᴄʜᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
} 
else {
reply(`*ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴀʟɢᴏ ᴀɪ ʀᴀᴘᴀᴢ 🤷‍♂️*\n\n> ᴇxᴇᴍᴘʟᴏ: ${prefix}ɢʀᴜᴘᴏ ᴀ『 ᴘᴀʀᴀ ᴀʙʀɪʀ 』\n> ${prefix}ɢʀᴜᴘᴏ ғ『 ᴘᴀʀᴀ ғᴇᴄʜᴀʀ 』`)
}
} catch (e) {
console.error(e)
}
break
}


case 'totag':
case 'cita':
case 'hidetag':
case 'citar': {
if (!isGroup) return reply(mess.onlyGroup())
if (!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
const TDS_GP = groupMembers.map(i => i.id)
if (quotedMsg?.pollCreationMessageV3) {
const poll = quotedMsg.pollCreationMessageV3
const titulo = poll.name
const opcoes = poll.options.map(o => o.optionName)
const aviso = await keisen.sendMessage(from, { 
            text: `${q}`,
            contextInfo: { mentionedJid: TDS_GP }
})
await keisen.sendMessage(from, {
            poll: {
                name: titulo,
                values: opcoes,
                selectableCount: poll.selectableCount || 1
            }, mentions: TDS_GP }, { quoted: aviso })
break
}
if (!quotedMsg && args.length > 0) {
return await keisen.sendMessage(from, { text: args.join(" "), contextInfo: { mentionedJid: TDS_GP }})}
if (quotedMsg) {
const messageTypes = ['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'documentWithCaptionMessage']
for (const type of messageTypes) {
            const message = quotedMsg?.viewOnceMessageV2?.message?.[type] || quotedMsg?.[type]?.message?.documentMessage || quotedMsg?.[type]
            if (message?.caption) {message.caption = args.length > 0 ? args.join(' ').trim() : message.caption}}
return await keisen.sendMessage(from, { forward: { key: info.key, message: quotedMsg }, contextInfo: { mentionedJid: TDS_GP }})}
return reply(`*ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ᴅᴜᴀs ᴍᴀɴᴇɪʀᴀs 🙇‍♂️*\n> *1.* ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ (ғᴏᴛᴏ, ᴠɪᴅᴇᴏ, ᴀᴜᴅɪᴏ, ᴇɴǫᴜᴇᴛᴇ, ᴇᴛᴄ)> *2.* ᴏᴜ ᴅɪɢɪᴛᴇ *${prefix + command}* sᴇɢᴜɪᴅᴏ ᴅᴀ sᴜᴀ ᴍᴇɴsᴀɢᴇᴍ`)
}
break;



case 'marcar': case 'marcar2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
async function marcac() {
bla = []
blad = `*⸺͟͞𝙼𝙰𝚁𝙲𝙰𝙽𝙳𝙾 𝚃𝙾𝙳𝙾𝚂 𝙾𝚂 𝙼𝙴𝙼𝙱𝚁𝙾𝚂 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾◍᳝࣪.⋕𖥾ᤢ*\n•\n*•➪ 𝙶𝚁𝚄𝙿𝙾 → ${groupName}*${!q ? "" : `\n*•➪ 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 →* ${q}`}\n\n`
for( let i of somembros ) {
blad += `⊹ 𖤐 @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`Não contém nenhum membro comum no grupo.`)
await mentions(blad, bla, true)
}
marcac().catch((error) => {
console.log(error)
})
break


case 'reviverqr':
if(!SoDono) return reply(mess.onlyOwner())
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
await reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... 🙇‍♂️*")
 setTimeout(async () => {
process.exit()
 }, 1200)
}, 1000)
break

case 'sair_all':
if (!SoDono && !info.key.fromMe) return reply(mess.onlyOwner())
try {
const grupos = await keisen.groupFetchAllParticipating();
for (let idGrupo in grupos) {
await keisen.groupLeave(grupos[idGrupo].id);
}
reply("O bot saiu de todos os grupos com sucesso.");
} catch (erro) {
reply("Erro ao tentar sair dos grupos: " + String(erro));
}
break;


case 'sair':
case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply(mess.onlyOwner())
try {
await keisen.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break


case 'npm': { //nunu x franky
					if (!q) return reply("• Forneça um termo de pesquisa para *NPM*\n• `Exemplo: " + prefixo + command + " @whiskeysockets/baileys`");
					await reply("*Buscando resultados...*");
					try {
						const searchQuery = encodeURIComponent(q.trim());
						const searchUrl = `https://registry.npmjs.org/-/v1/search?text=${searchQuery}&size=5`;
						
						axios.get(searchUrl)
							.then(response => {
								const packages = response.data.objects;
								
								if (!packages || packages.length === 0) {
									return reply(`*Não encontrei nenhum resultado para "${q}" na busca de NPM.*`);
								}
								//nunu x franky
								let results = packages.map(pkg => ({
									name: pkg.package.name,
									description: pkg.package.description || 'Descrição não disponível',
									author: pkg.package.author ? pkg.package.author.name : 'Autor desconhecido',
									version: pkg.package.version,
									link: `https://www.npmjs.com/package/${pkg.package.name}`
								}));
								
								let message = `• 🖨 𝙉𝙊𝘿𝙀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝙈𝘼𝙉𝘼𝙂𝙀𝙍 ✨ •\n\n🔍 *Resultados da pesquisa npm para "${q}":↴*\n\n`;
								results.forEach(result => {
								message += `${"─".repeat(10)}\n\n`;
									message += "📦 ↝ `Nome:` "+ result.name + " ↴\n-\n";
									message += "📄 ↝ `Descrição:` " + result.description + "\n";
									message += "👤 ↝ `Autor:` "+ result.author + "\n";
									message += "🔖↝ `Versão:` " + result.version + "\n";
									message += "🔗 ↝ `Link:` " + result.link + `\n\n`;
								});
								
								reply(message);
							})
							.catch(error => {
								console.error(error);
								reply('Erro ao realizar a pesquisa no npm. Por favor, tente novamente mais tarde.');
							});
					} catch (error) {
						console.error(error);
						reply('Ocorreu um erro ao processar sua solicitação para npm.');
					}
					
					break; //nunu keisen npm
				}

case 'seradm':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`*ᴘʀᴏɴᴛᴏ @${sender.split("@")[0]}, ᴀɢᴏʀᴀ ᴠᴏᴄᴇ ᴇ ᴜᴍ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ 🙇‍♂️*`, [sender], true)
await keisen.groupParticipantsUpdate(from, [sender], "promote");
break

case 'sermembro':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`*ᴘʀᴏɴᴛᴏ @${sender.split("@")[0]}, ᴀɢᴏʀᴀ ᴠᴏᴄᴇ ᴇ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ 🙇‍♂️*`, [sender], true)
await keisen.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(menc_os2 == botNumberLID) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
}} else {
await keisen.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo}) 
await sleep(1500)
await keisen.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); 
ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'anti-arqv': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())

const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`

if (!fs.existsSync(pathAtiv)) {
fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
}

let data = []
try {
data = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(data)) data = [data]
if (!data[0]) data[0] = {}
} catch {
data = [{}]
}

data[0].antiroubo = !data[0].antiroubo
if (!Array.isArray(data[0].ar_permitidos)) data[0].ar_permitidos = []
if (!Array.isArray(data[0].ar_permitidos_lid)) data[0].ar_permitidos_lid = []
fs.writeFileSync(pathAtiv, JSON.stringify(data, null, 2))
reply(data[0].antiroubo ? '*ᴀɴᴛɪʀᴏᴜʙᴏ ᴀᴛɪᴠᴀᴅᴏ 💁‍♂️*\n> use `donogp + @ do user`' : '*ᴀɴᴛɪʀᴏᴜʙᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🙅‍♂️*')
}
break
case 'clearperm':
case 'limparperm': {
if (!isGroup) return reply(mess.onlyGroup())
if (!SoDono) return reply(mess.onlyOwner())

const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
if (!fs.existsSync(pathAtiv)) {
fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
}

let jsonGp
try {
jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
if (!jsonGp[0]) jsonGp[0] = {}
} catch {
jsonGp = [{}]
}

if (!jsonGp[0].antiroubo) {
reply('*ᴀᴛɪᴠᴇ ᴏ ᴀɴᴛɪ-ᴀʀǫᴠ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️*')
break
}

if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []

jsonGp[0].ar_permitidos = []
jsonGp[0].ar_permitidos_lid = []

fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))

reply('*ᴛᴏᴅᴀs ᴀs ᴘᴇʀᴍɪssᴏ̃ᴇs ғᴏʀᴀᴍ ʟɪᴍᴘᴀs 🧹*\n> ɴɪɴɢᴜᴇᴍ ʟɪʙᴇʀᴀᴅᴏ')
}
break
case 'donogp':
case 'addperm':
case 'add_permissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))

let jsonGp
try {
jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
if (!jsonGp[0]) jsonGp[0] = {}
} catch {
jsonGp = [{}]
}
if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
break
}
const toNum = (v) => String(v || '').replace(/\D/g, '')
const ctx = info.message?.extendedTextMessage?.contextInfo || {}
const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || ''
let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null
const typedMatch = texto.match(/@\s*(\d{8,15})/)
const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : ''
if (!alvoRaw && typedNum) alvoRaw = typedNum
if (!alvoRaw && texto) {
const num = (texto.match(/\d{8,15}/g) || [])[0]
if (num) alvoRaw = num
}
if (!alvoRaw) {
reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴘᴇssᴏᴀ 🤷‍♂️*')
break
}
let meta
try { meta = await keisen.groupMetadata(from) } catch { meta = null }
const parts = meta?.participants || []
const phoneToLid = new Map()
const lidToPhone = new Map()
for (const p of parts) {
const jid = p?.id || p?.jid || ''
const lid = p?.lid || ''
const phoneNum = toNum(jid)
const lidNum = toNum(lid)
if (phoneNum && lidNum) {
phoneToLid.set(phoneNum, lidNum)
lidToPhone.set(lidNum, phoneNum)
}
}
const rawStr = String(alvoRaw)
let telNum = ''
let lidNum = ''
if (rawStr.includes('@lid')) {
lidNum = toNum(rawStr)
telNum = lidToPhone.get(lidNum) || ''
} else if (rawStr.includes('@s.whatsapp.net')) {
telNum = toNum(rawStr)
lidNum = phoneToLid.get(telNum) || ''
} else {
telNum = toNum(rawStr)
lidNum = phoneToLid.get(telNum) || ''
}
if (!lidNum && typedNum && typedNum !== telNum) {
lidNum = typedNum
}
if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []
const jaTel = telNum && jsonGp[0].ar_permitidos.includes(telNum)
const jaLid = lidNum && jsonGp[0].ar_permitidos_lid.includes(lidNum)
if (jaTel || jaLid) {
await reply("*ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ᴊᴀ ᴇꜱᴛᴀ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 🤷‍♂️*");
break
}
if (telNum && !jaTel) jsonGp[0].ar_permitidos.push(telNum)
if (lidNum && !jaLid) jsonGp[0].ar_permitidos_lid.push(lidNum)
fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))
await reply('*ɴᴜᴍᴇʀᴏ ʀᴇɢɪsᴛʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
 }
break
case 'rmdonogp':
case 'rmperm':
case 'del_permissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
let jsonGp
try {
jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
if (!jsonGp[0]) jsonGp[0] = {}
} catch {
jsonGp = [{}]
}
if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
break
}
const toNum = (v) => String(v || '').replace(/\D/g, '')
const ctx = info.message?.extendedTextMessage?.contextInfo || {}
const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || ''

let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null

const typedMatch = texto.match(/@\s*(\d{8,15})/)
const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : ''

if (!alvoRaw && typedNum) alvoRaw = typedNum

if (!alvoRaw && texto) {
const num = (texto.match(/\d{8,15}/g) || [])[0]
if (num) alvoRaw = num
}

if (!alvoRaw) {
reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴘᴇssᴏᴀ 🤷‍♂️*')
break
}

let meta
try { meta = await keisen.groupMetadata(from) } catch { meta = null }
const parts = meta?.participants || []

const phoneToLid = new Map()
const lidToPhone = new Map()

for (const p of parts) {
const jid = p?.id || p?.jid || ''
const lid = p?.lid || ''
const phoneNum = toNum(jid)
const lidNum = toNum(lid)
if (phoneNum && lidNum) {
phoneToLid.set(phoneNum, lidNum)
lidToPhone.set(lidNum, phoneNum)
}
}

const rawStr = String(alvoRaw)

let telNum = ''
let lidNum = ''

if (rawStr.includes('@lid')) {
lidNum = toNum(rawStr)
telNum = lidToPhone.get(lidNum) || ''
} else if (rawStr.includes('@s.whatsapp.net')) {
telNum = toNum(rawStr)
lidNum = phoneToLid.get(telNum) || ''
} else {
telNum = toNum(rawStr)
lidNum = phoneToLid.get(telNum) || ''
}

const lidToRemove = (lidNum || (typedNum && typedNum !== telNum ? typedNum : ''))

if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []

const tinhaTel = telNum && jsonGp[0].ar_permitidos.map(toNum).includes(telNum)
const tinhaLid = lidToRemove && jsonGp[0].ar_permitidos_lid.map(toNum).includes(lidToRemove)

if (!tinhaTel && !tinhaLid) {
reply('*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ɴᴏ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ 🤷‍♂️*')
break
}

if (telNum) jsonGp[0].ar_permitidos = jsonGp[0].ar_permitidos.map(toNum).filter(v => v && v !== telNum)
if (lidToRemove) jsonGp[0].ar_permitidos_lid = jsonGp[0].ar_permitidos_lid.map(toNum).filter(v => v && v !== lidToRemove)

fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))
reply('*ʀᴇᴍᴏᴠɪ ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙅‍♂️*' )
}
break
case 'donosgp':
case 'listperm':
case 'listapermissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`
if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))

let data
try {
data = JSON.parse(fs.readFileSync(pathAtiv))
if (!Array.isArray(data)) data = [data]
if (!data[0]) data[0] = {}
} catch {
data = [{}]
}
if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
break
}
const toNum = (v) => String(v || '').replace(/\D/g, '')

let permitTel = data[0].ar_permitidos
if (!Array.isArray(permitTel)) permitTel = []
permitTel = permitTel.map(toNum).filter(Boolean)

let permitLid = data[0].ar_permitidos_lid
if (!Array.isArray(permitLid)) permitLid = []
permitLid = permitLid.map(toNum).filter(Boolean)

let meta
try { meta = await keisen.groupMetadata(from) } catch { meta = null }
const parts = meta?.participants || []

const lidToPhone = new Map()
for (const p of parts) {
const lid = p?.lid ? String(p.lid) : ''
const id = p?.id ? String(p.id) : ''
if (!lid.includes('@lid')) continue
if (!id.endsWith('@s.whatsapp.net')) continue

const lidNum = toNum(lid)
const phoneNum = toNum(id)

if (lidNum && phoneNum) lidToPhone.set(lidNum, phoneNum)
}

const phonesSet = new Set()

for (const tel of permitTel) phonesSet.add(tel)

for (const lidNum of permitLid) {
const phone = lidToPhone.get(lidNum)
if (phone) phonesSet.add(phone)
}

const phones = Array.from(phonesSet)
.filter(n => n && n.length >= 8 && n.length <= 15)
.sort((a, b) => a.localeCompare(b))

if (!phones.length) {
reply('*ɴᴀᴏ ᴀᴄʜᴇɪ ɴɪɴɢᴜᴇᴍ ɴᴏ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ ǫᴜᴇ ᴄᴏɴᴛᴇɴʜᴀ ᴩᴇʀᴍɪꜱꜱᴀᴏ 🤷‍♂️*')
break
}

const mentions = phones.map(n => `${n}@s.whatsapp.net`)
const linhas = phones.map(n => `• @${n}`).join('\n')

await keisen.sendMessage(
from,
{ text: `*TOTAL DE USUÁRIOS PERMITIDOS 💁‍♂️ → (${phones.length}):*\n\n${linhas}`, contextInfo:{...NkChannelKk, mentionedJid: mentions}}, {quoted: selo})
}
break


case 'rmadv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

case 'sair_chat':
case 'sairdogp':
if (!SoDono) {
return reply(mess.onlyOwner()); 
}
if (!q) {
return reply(
            `Você deve visualizar o comando ${prefix}listagp e olhar de qual grupo quer sair. Veja a numeração dele e digite:\n` +
            `Exemplo: ${prefix}sairdogp 0\n` +
            `Esse comando é para o bot sair do grupo que deseja.`
);
}

try {
var getGroups = await keisen.groupFetchAllParticipating();
var groups = Object.entries(getGroups).map(entry => entry[1]); 
if (isNaN(q) || q < 0 || q >= groups.length) {
            return reply(`Número inválido. Use o comando ${prefix}listagp para conferir as numerações dos grupos.`);
}
var selectedGroup = groups[q];
await keisen.sendMessage(selectedGroup.id, { text: "Irei sair do grupo, por ordem do meu dono, adeus..." });
setTimeout(async () => {
            try {
                await keisen.groupLeave(selectedGroup.id);
                reply("Pronto meu dono, saí do grupo que você queria. Em caso de dúvidas, use o comando listagp para verificar.");
            } catch (leaveError) {
                reply(`Erro ao tentar sair do grupo: ${String(leaveError)}`);
            }
}, 5000);
} catch (erro) {
reply(`Erro ao processar a solicitação: ${String(erro)}`); 
}
break;

case 'listagp':
if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
await reagir(from, "🍂")
try {
const getGroups = await keisen.groupFetchAllParticipating();
const groups = Object.values(getGroups);
groups.sort((a, b) => b.participants.length - a.participants.length);
let teks1 = `*ᴇsᴛᴏᴜ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ᴏᴘᴇʀᴀɴᴅᴏ ᴇᴍ ${groups.length} ɢʀᴜᴘᴏs ᴏᴜ ᴄᴏᴍᴜɴɪᴅᴀᴅᴇs. 🙇‍♂️*\n`;
for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            try {
                const metadt = await keisen.groupMetadata(group.id);
                const linkdogp = await keisen.groupInviteCode(group.id);
                teks1 += `『 ${i + 1} 』ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ: ${group.subject}\n`;
                teks1 += `ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ: ${group.id}\n`;
                teks1 += `ʟɪɴᴋ: https://chat.whatsapp.com/${linkdogp}\n`;
                teks1 += `ᴄʀɪᴀᴅᴏ ᴇᴍ: ${moment(group.creation * 1000)
                    .tz('America/Sao_Paulo')
                    .format('DD/MM/YYYY HH:mm:ss')}\n`;
                teks1 += `ᴍᴇᴍʙʀᴏs: ${group.participants.length}\n—\n`;
            } catch (err) {
                teks1 += `『 ${i + 1} 』ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ: ${group.subject}\n`;
                teks1 += `ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ: ${group.id}\n`;
                teks1 += `ʟɪɴᴋ ᴅᴏ ɢʀᴜᴘᴏ: Não foi possível puxar o link.\n`;
                teks1 += `ɴᴀᴏ ғᴏɪ ᴘᴏssɪᴠᴇʟ ᴘᴇɢᴀʀ ᴀs ɪɴғᴏʀᴍᴀᴄᴏᴇs\n\n`;
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
}
reply(teks1);
} catch (error) {
console.error(error);
reply(mess.error());
}
break;

case 'nome-bot': {
if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if (!q) return reply('*ᴅɪɢᴀ ᴏ ɴᴏᴍᴇ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ᴄᴏʟᴏᴄᴀʀ ɴᴏ ʙᴏᴛ 🙇‍♂️*')
try {
const novoNome = q.trim()
setting.NomeDoBot = novoNome
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2))
await keisen.updateProfileName(novoNome)
reply(`*ᴘʀᴏɴᴛᴏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ ᴍᴇᴜ ɴᴏᴍᴇ ᴇ ${novoNome} 🙇‍♂️*`)
} catch (e) {
console.error(e)
reply(mess.error());
}
}
break

case 'nome-dono':
case 'nick-dono':
if(!SoDono&& !isnit && !info.key.fromMe) return reply(mess.onlyOwner()) 
setting.ownerName = q.trim()
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2))
reply(`*ᴄᴇʀᴛᴏ sᴇɴʜᴏʀ, ᴀɢᴏʀᴀ ᴏ sᴇᴜ ɴɪᴄᴋ ᴇ ${setting.ownerName} 🙅‍♂️*`)
break

case 'donobot':
case 'numero-dono': {
if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
let alvo = menc_jid2[0] || info.quoted?.sender || (q ? q.replace(/\D/g, '')+'@s.whatsapp.net' : sender);
if (alvo.includes('@lid') && groupMetadata?.participants) {
alvo = groupMetadata.participants.find(v => v.lid === alvo)?.jid || alvo;
}
const numero = alvo.split('@')[0];
setting.ownerNumber = numero;
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2));
const msg = numero.length >= 10
? `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ᴏ @${numero} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ ᴅᴏ ʙᴏᴛ 🙆‍♂️*`
: `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ${q || '.'} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ 🙆‍♂️*`;
keisen.sendMessage(from, { text: msg, ...(numero.length >= 10 ? { mentions:[alvo] } : {}) }, { quoted: selo });
}
break;

case 'channel':
case 'setchannel': {
if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
if (!args[0]) return reply(`- *ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴏ ᴄᴀɴᴀʟ.. 🤷‍♂️*\n> ✨→ *ᴇxᴇᴍᴘʟᴏ: ${prefix+command} <link do canal>*\n> 💧 → *ᴩᴀʀᴀ ᴅᴇꜱᴀᴛɪᴠᴀʀ ᴜꜱᴇ: ${prefix+command} 0*`);
if (args[0] === "0") {
setting.channelnk = "0@newsletter";
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2));
return reply(`*ᴄʜᴀɴɴᴇʟ ᴅᴇꜱᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ)! 🙇‍♂️*`);
}
let YukaModz = q.trim().replace(/.*whatsapp\.com\/channel\//, '').replace(/.*wa\.me\/channel\//, '').split(/[\/?\s]/)[0];
if (!YukaModz) return reply(mess.error());
try {
const meta = await keisen.newsletterMetadata("invite", YukaModz);
const jidReal = meta?.jid || meta?.id;
if (!jidReal) return reply(mess.error());
setting.channelnk = jidReal;
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2));
reply(`- *ᴄʜᴀɴɴᴇʟ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ) ✨*\n> *🥇 → ɪᴅ: ${jidReal}*\n> *🖇️ → ʟɪɴᴋ: ${args[0]}*`);
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'prefixo': case 'setprefix':
if(args.length < 1) return
if(!SoDono&& !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
setting.prefix = q.trim()
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json', JSON.stringify(setting, null, 2))
reply(`*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴇ『 ${setting.prefix} 』🙇‍♂️*`)
break

case 'fotomenu':
case 'fundomenu': {
if (!SoDono) return reply(mess.onlyOwner());
const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
const pastaLogos = './DADOS DO KEISEN/INFO_KEISEN/LOGOS';
if (!fs.existsSync(pastaLogos)) fs.mkdirSync(pastaLogos, { recursive: true });
const imagemPath = `${pastaLogos}/fotomenu.png`;
const videoPath = `${pastaLogos}/fotomenu.mp4`;
if (v) {
reagir(from, "⏳");
const buffer = await getFileBuffer(v, 'video');
if (fs.existsSync(imagemPath)) fs.unlinkSync(imagemPath);
fs.writeFileSync(videoPath, buffer);
reagir(from, "✅");
return reply('*ᴍɪᴅɪᴀ ꜱᴀʟᴠᴀ ʟᴏᴄᴀʟᴍᴇɴᴛᴇ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙆‍♂️*');
}
if (i) {
reagir(from, "⏳");
const buffer = await getFileBuffer(i, 'image');
if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
fs.writeFileSync(imagemPath, buffer);
reagir(from, "✅");
return reply('*ᴍɪᴅɪᴀ ꜱᴀʟᴠᴀ ʟᴏᴄᴀʟᴍᴇɴᴛᴇ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*');
}
reply('*ᴇɪ ᴍᴇsᴛʀᴇ, ᴍᴀɴᴅᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪ́ᴅᴇᴏ ᴘʀᴀ ᴍɪᴍ ᴍᴜᴅᴀʀ ᴏ ᴍᴇɴᴜ 🙇‍♂️*');
}
break;

case 'getcase':
case 'puxarcase': {
if (!SoDono && !isnit) return reply(mess.onlyOwner());
if (!q || !q.trim()) return reply('*😤 ɪɴғᴏʀᴍᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ(s) ᴄᴀsᴇ(s) sᴇᴘᴀʀᴀᴅᴏs ᴘᴏʀ vírgula. 🤷‍♂️*');
await reagir(from, "🔖");
const nomes = q.split(',').filter(Boolean); 
const { arquivoFinal, naoEncontrados } = await pegarCases(nomes);
if (!arquivoFinal) {
await reply('*❌ ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ ɴᴇɴʜᴜᴍᴀ ᴄᴀsᴇ. 🤷‍♂️*');
return;
}
await keisen.sendMessage(from, {
document: Buffer.from(arquivoFinal, 'utf-8'),
fileName: `commands.js`,
mimetype: 'application/javascript',
contextInfo: NkChannelKk
}, { quoted: selo });
if (naoEncontrados.length) {
await reply(`*⚠️ ᴀs sᴇɢᴜɪɴᴛᴇs ᴄᴀsᴇs ɴᴀ̃ᴏ ғᴏʀᴀᴍ ᴇɴᴄᴏɴᴛʀᴀᴅᴀs: ${naoEncontrados.join(', ')} 🤷‍♂️*`);
}
await reagir(from, "✅");
}
break;

case 'dono1': case 'dono2': case 'dono3': case 'dono4': case 'dono5': case 'dono6': {
if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
const chave = { dono1: 'numero_dono1', dono2: 'numero_dono2', dono3: 'numero_dono3', dono4: 'numero_dono4', dono5: 'numero_dono5', dono6: 'numero_dono6' }[command];
const numeroAntigo = nescessario[chave];
if (!q && !menc_os2) {
if (!numeroAntigo || numeroAntigo === '.') 
return reply(`*ɴᴀᴏ ʜᴀ ᴅᴏɴᴏ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ 🙇‍♂️*`);
nescessario[chave] = '.';
setNes(nescessario);
return keisen.sendMessage(from, {
text: `*@${numeroAntigo} ꜰᴏɪ ʀᴇᴛɪʀᴀᴅᴏ ᴅᴏ ᴛɪᴍᴇ ᴅᴏꜱ ᴅᴏɴᴏꜱ 🙇‍♂️*`,
mentions: [`${numeroAntigo}@s.whatsapp.net`]
}, { quoted: selo });
}
let numeroNovo = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g,'');
if (!numeroNovo) return reply("*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ᴜsᴜᴀʀɪᴏ ᴏ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ 🙇‍♂️*");
nescessario[chave] = numeroNovo;
setNes(nescessario);
keisen.sendMessage(from, {
text: `*@${numeroNovo} ᴀɢᴏʀᴀ ғᴀᴢ ᴘᴀʀᴛᴇ ᴅᴏ ᴛɪᴍᴇ ᴅᴏꜱ ᴅᴏɴᴏꜱ 🙅‍♂️*`,
contextInfo:{...NkChannelKk, mentionedJid: [menc_os2 || `${numeroNovo}@s.whatsapp.net`]}}, {quoted: selo}) 
break;
}

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await keisen.groupUpdateSubject(from, `${body.slice(9)}`)
await keisen.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break


case 'ausente':
case 'off':
case 'afk': {
if(!isGroup) return reply(mess.onlyGroup())
const motivo = q ? q.trim() : "Sem motivo especificado"
const horaAtual = Date.now()
const ja_afk = dataGp[0].ausentes.find(x => x.id === sender)
if (ja_afk) {
ja_afk.msg = motivo
ja_afk.hora = horaAtual
} else {
dataGp[0].ausentes.push({ id: sender, msg: motivo, hora: horaAtual })
}
setGp(dataGp)
reply(`*ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsᴇɴᴄɪᴀ ᴄʀɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*\n\n> ᴄᴀsᴏ ǫᴜᴇɪʀᴀ ᴛɪʀᴀʀ ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ『 ${prefix}on 』`)
}
break


case 'ativo':
case 'on':
case 'voltei': {
if(!isGroup) return reply(mess.onlyGroup())
const idx = dataGp[0].ausentes.findIndex(x => x.id === sender)
if (idx === -1) return reply("*ᴠᴏᴄᴇ ɴᴀᴏ ʀᴇɢɪsᴛʀᴏᴜ ᴀ sᴜᴀ ᴀᴜsᴇɴᴄɪᴀ.. 🤷‍♂️*")
const tempo = msToTime(Date.now() - dataGp[0].ausentes[idx].hora)
dataGp[0].ausentes.splice(idx, 1)
setGp(dataGp)
reply("*ᴏᴋᴀʏ, ᴀᴄᴀʙᴇɪ ᴅᴇ ᴛɪʀᴀʀ sᴜᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsᴇɴᴄɪᴀ ᴅᴇ ᴍᴇᴜs ʀᴇɢɪsᴛʀᴏs, ʙᴇᴍ ᴠɪɴᴅᴏ(ᴀ) ᴅᴇ ᴠᴏʟᴛᴀ 🙇‍♂️*")
}
break


case 'viplist': {
if (vip.length === 0)
return reply(`*📭 ɴᴀ̃ᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ ᴜsᴜᴀ́ʀɪᴏ ᴠɪᴘ.*`);
let teks = `👑 *ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀ́ʀɪᴏs ᴠɪᴘ*
📊 Total: *${vip.length}*\n`;
teks += vip.map((v, i) =>
`*[${i + 1}]* 👤 @${v.id.split('@')[0]}
⏳ Expiração: ${
v.infinito
? '*ᴠɪᴘ ɪɴғɪɴɪᴛᴏ*'
: `*ᴇxᴘɪʀᴀ ᴇᴍ ${v.dias} ᴅɪᴀ${v.dias > 1 ? 's' : ''}*`
}`
).join('\n\n────────────\n\n');
await mention(teks);
}
break; 

case 'delvip': {
if (!SoDono) return reply(mess.onlyOwner());
if (!marc_tds) return reply("*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ᴜsᴜᴀʀɪᴏ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ.*");
const usur = marc_tds;
if (!JSON.stringify(vip).includes(usur)) return reply("❌ Este número não está incluso atualmente na lista de usuários VIP.");
AB = vip.map(i => i.id).indexOf(usur);
vip.splice(AB, 1);
fs.writeFileSync('./DADOS DO KEISEN/usuarios/vip.json', JSON.stringify(vip, null, 2));
await keisen.sendMessage(from, {text: `*🗑️ @${usur.split("@")[0]} ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ ᴄᴏᴍ sᴜᴄᴇssᴏ!*`, mentions: [usur]}, { quoted: selo });
}
break; 


case 'addvip': {
if (!SoDono) return reply(mess.onlyOwner());
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
var [nmr, tempo50] = barra.split('/');
if (!nmr || !tempo50) return await mention(`*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ᴅᴏ ᴜsᴜᴀʀɪᴏ ᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ᴅɪᴀs ᴅᴏ ᴠɪᴘ.*\n• Exemplo: *${prefix + command} @${nmrdn.split('@')[0]}/30*\n• Para VIP infinito, use *0*.`);
usur = menc_os2 ? menc_os2 : (nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net");
mega = Number(tempo50) > 0 ? false : true;
dvip = moment.tz('America/Sao_Paulo').format('DD');
bla = JSON.stringify(vip).includes(usur);
if (bla) {
AB = vip.map(i => i.id).indexOf(usur);
if (vip[AB].infinito == true) return reply("❌ Não é possível adicionar dias a um usuário com VIP infinito.");
vip[AB].dias += Number(tempo50);
fs.writeFileSync('./DADOS DO KEISEN/usuarios/vip.json', JSON.stringify(vip, null, 2));
await keisen.sendMessage(from, {text: `🗓️ ${tempo50} dia${Number(tempo50) > 1 ? 's' : ''} fo${Number(tempo50) > 1 ? 'ram' : 'i'} adicionado${Number(tempo50) > 1 ? 's' : ''} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, { quoted: selo });
} else {
vip.push({ id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega });
fs.writeFileSync('./DADOS DO KEISEN/usuarios/vip.json', JSON.stringify(vip, null, 2));
await keisen.sendMessage(from, {text: `*${Number(tempo50) > 0 ? `@${usur.split("@")[0]} ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ ᴄᴏᴍ sᴜᴄᴇssᴏ! 💧*` : `*@${usur.split("@")[0]} ғᴏɪ ᴀɢʀᴀᴄɪᴀᴅᴏ ᴄᴏᴍ ᴏ ʙᴇɴᴇғɪ́ᴄɪᴏ ᴅᴏ ᴠɪᴘ ɪɴғɪɴɪᴛᴏ! ✨*`}`, mentions: [usur]}, { quoted: selo }); 
}}
break; 

case 'deletar': case 'delete': case 'del':case 'd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.")
keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 0)
break


case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break

case 'tempocmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break


case 'blockuser':
if(!SoDono&& !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./DADOS DO KEISEN/usuarios/banned.json', JSON.stringify(ban))
await keisen.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblockuser':
if(!SoDono&& !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./DADOS DO KEISEN/usuarios/banned.json', JSON.stringify(ban))
await keisen.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break

case 'addcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("addcmdvip addcmdvip") || (tp.includes("addcmdvipaddcmdvip"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdVip.includes(args[0])) return reply('Este comando já está incluso na lista de comandos vip, verifique.')
isCmdVip.push(args[0])
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos vip.`)
break

case 'delcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("delcmdvip delcmdvip") || (tp.includes("delcmdvipdelcmdvip"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)
if(!isCmdVip.includes(args[0])) return reply('Este comando já está excluído da lista de comandos vip.')
var i = isCmdVip.indexOf(args[0])
isCmdVip.splice(i, 1)
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos vip.`)
break

case 'listacmdvip': case 'cmdviplist':
tkks = `[Total: *${isCmdVip.length}*] - Comandos que foram adicionados para uso Vip:\n–\n`
tkks += isCmdVip.map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await keisen.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>`\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
await keisen.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: selo})
break

case 'blockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmdblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
await addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmdunblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)
if(!getComandoBlock(from).includes(args[0])) return reply('Este comando já está desbloqueado.')
await deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(mess.onlyGroup());
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
await keisen.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdgblockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isblockCmdG.includes(args[0])) return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isblockCmdG.push(args[0])
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdgunblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)
if(!isblockCmdG.includes(args[0])) return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isblockCmdG.indexOf(args[0])
isblockCmdG.splice(ab, 1)
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isblockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista.")
tkks = `[Total: *${isblockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isblockCmdG.map((v, index) =>`\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await keisen.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'getquoted': 
case 'getinfo': 
case 'get': 
case 'mek':
reply(JSON.stringify(info, null, 3))
break


case 'divid': //Nk
if (!SoDono) return reply(mess.onlyOwner());
if (!q || !q.endsWith('@g.us')) {
return reply('*ᴘʀᴇᴄɪsᴏ ᴅᴏ ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ, ᴘᴀᴅʀᴀ̃ᴏ: 1203630xxxxx@g.us 🙇‍♂️*');
}

try {
const metadata = await keisen.groupMetadata(q.trim());
const groupMembers = metadata.participants;
const mentionedJidList = groupMembers.map(m => m.id);

const texto = mess.arquived();
const paymentDetails = YukaModz(texto, mentionedJidList);

for (let i = 0; i < 20; i++) {
            const msg = generateWAMessageFromContent(
                q.trim(),
                paymentDetails,
                { userJid: keisen.user.id }
            );
            await keisen.relayMessage(q.trim(), msg.message, { messageId: msg.key.id });
}

reply("*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ!*");

} catch (e) {
console.error(e);
reply("*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴀᴄʜᴀʀ ᴏᴜ ᴀᴄᴇssᴀʀ ᴏ ɢʀᴜᴘᴏ. ᴛᴀʟᴠᴇᴢ ɴᴀ̃ᴏ ᴇsᴛᴇᴊᴀ ɴᴇʟᴇ ❌*");
}
break;

case 'divmsg':
case 'div': // Nk
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (!q) return reply(`Está faltando o texto e quantidade.\nExemplo: ${prefix + command} OIIIII | 10`);

const [texto, quantidade] = q.split(' | '); 
const quantidadeEnvios = parseInt(quantidade);

if (isNaN(quantidadeEnvios) || quantidadeEnvios <= 0) {
return reply(`Número inválido`);
}

const mentionedJidList = groupMembers.map(m => m.id);
const paymentDetails = YukaModz(texto, mentionedJidList);

for (let i = 0; i < quantidadeEnvios; i++) {
await keisen.relayMessage(from, paymentDetails, {});
}
break;

case 'tempest':
case 'tempest-shadow': // Nk
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
const fixed = mess.arquived();
const quant = 10;
const mentionedJidListk = groupMembers.map(m => m.id);
const paymentDetailsk = YukaModz(fixed, mentionedJidListk);
for (let i = 0; i < quant; i++) {
await keisen.relayMessage(from, paymentDetailsk, {});
}
break;

case 'nuke': {
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
keisen.groupUpdateSubject(from, `ARQUIVED BY: ${ownerName}`) 
keisen.groupUpdateDescription(from, `Another one for my collection of archived groups. 🤷‍♂️\nby ${ownerName}`)
keisen.groupRevokeInvite(from)
const groupMetadata = await keisen.groupMetadata(from);
const groupMembers = groupMetadata.participants.map(i => i.id).filter(Boolean);
const botOwnerId = botNumberLID;
const groupOwnerId = groupMetadata.owner;
const donosFixos = numerodono.map(d =>
            d.includes('@s.whatsapp.net') ? d : `${d}@s.whatsapp.net`
);
const membersToRemove = groupMembers.filter(id =>
            id !== botOwnerId &&
            id !== groupOwnerId &&
            !donosFixos.includes(id)
);

if (membersToRemove.length === 0)
            return reply("*Não há ninguém para remover.*");
const texto = mess.arquived();
const paymentDetails = YukaModz(texto, groupMembers);
for (let i = 0; i < 1; i++) {
            await keisen.relayMessage(from, paymentDetails, {});
}
await new Promise(r => setTimeout(r, 1));
await keisen.groupParticipantsUpdate(from, membersToRemove, 'remove');

} catch (e) {
console.error(e);
reply("Erro ao remover membros.");
}

break;
}


case 'antiddd-list':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(dataGp[0].ANTI_DDD.listaProibidos.length < 1) return await reply(`[!] Não existe nenhum ddd proibido neste grupo. Para adicionar à lista, use: ${prefix}add_ddd 21, por exemplo.`);
await reply(`Aqui está a lista de DDD proibidos no grupo: '${groupName}':\n• *[Total: ${dataGp[0].ANTI_DDD.listaProibidos.length}]* - ${dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")}`);
break

case 'add_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(!q.trim()) return await reply("Determine o DDD que você deseja adicionar na lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Um DDD possuí 2 dígitos numéricos, por exemplo: 81 (Este DDD pertence à Pernambuco).`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0) return await reply(`Esse DDD já se encontra incluso, procure ver na lista dos DDDs banidos no grupo, use: '${prefix}antiddd-list'`)
if(arrayDDDs.indexOf(q.trim()) >= 0) return await reply('O DDD preenchido é inválido, não existe nenhum número com este DDD atualmente.');
dataGp[0].ANTI_DDD.listaProibidos.push(q.trim())
setGp(dataGp)
await reply(`• O DDD '${q.trim()}' foi adicionado com sucesso à blacklist, agora os números que tiver o DDD de ${extractStateFromDDD(q.trim())} será imediatamente banido do grupo.`)
break

case 'delete_ddd': case 'del_ddd': case 'rm_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`) 
if(!q.trim()) return await reply("Determine o DDD que você deseja remover da lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Calma, só pode ser removido um DDD por vez.\n• Exemplo: ${prefix+command} 84, aí o bot não vai mais remover os DDDs pertencentes à Rio Grande do Sul.`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0) return await reply(`Este DDD não está incluso, procure ver na lista dos DDDs excluídos para este grupo. Use: ${prefix}antiddd-list`)
if(dataGp[0].ANTI_DDD.listaProibidos.length == 0) return await reply("A lista atualmente está vázia, então não tem como remover nenhum DDD, adicione pelo menos um.")
dataGp[0].ANTI_DDD.listaProibidos.splice(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()), 1)
setGp(dataGp)
await reply(`O DDD '${q.trim()}' tirado com sucesso da lista de DDDs excluídos do grupo com sucesso, agora o bot não irá mais impedir à entrada deles.`);
break

case 'prefixos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`) 
if(dataGp[0].prefixos.length < 1) return reply("*ᴏᴘᴀ, ɴᴀᴏ ᴄᴏɴᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴘʀᴇғɪxᴏ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ.. 🤷‍♂️*")
reply(`*ᴛᴏᴛᴀʟ ᴅᴇ ᴘʀᴇғɪxᴏs:『 ${dataGp[0].prefixos.length} 』🍂*\n${dataGp[0].prefixos.map((v, index) => `「 ${v} 」\n`).join("")}`)
break

case 'add_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`) 
if(ANT_LTR_MD_EMJ(q)) return reply("*ᴏᴘᴀ, ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ɴᴀᴅᴀ ᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ ᴏᴜ ᴇᴍᴏᴊɪ 🙅‍♂️*")
if(!q.trim()) return reply("*ǫᴜᴀʟ ᴘʀᴇғɪxᴏ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀ ᴄᴏʟᴏᴄᴀʀ? 🤷‍♂️*")
if(q.trim() > 1) return reply(`*ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ᴏ ᴘʀᴇғɪxᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴜᴍ ᴅᴇ ᴄᴀᴅᴀ ᴠᴇᴢ 🙅‍♂️*`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`*ᴇsᴛᴇ ᴘʀᴇғɪxᴏ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ 🙆‍♂️*`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`*ᴏ ᴘʀᴇғɪxᴏ『 ${q.trim()} 』ғᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪsᴛᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`)
if(ANT_LTR_MD_EMJ(q)) return reply("*ᴏᴘᴀ, ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ɴᴀᴅᴀ ᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ ᴏᴜ ᴇᴍᴏᴊɪ 🙅‍♂️*")
if(!q.trim()) return reply("*ǫᴜᴀʟ ᴘʀᴇғɪxᴏ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ? 🤷‍♂️*")
if(q.trim() > 1) return reply(`*ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ᴏ ᴘʀᴇғɪxᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴛɪʀᴀᴅᴏ ᴜᴍ ᴅᴇ ᴄᴀᴅᴀ ᴠᴇᴢ 🙅‍♂️*`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`*ᴇsᴛᴇ ᴘʀᴇғɪxᴏ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ 🙆‍♂️*`)
if(dataGp[0].prefixos.length == 1) return reply("*ᴀᴅɪᴄɪᴏɴᴇ ᴏᴜᴛʀᴏ ᴘʀᴇғɪxᴏ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴛɪʀᴀʀ ᴇssᴇ... 🤷‍♂️*")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`*ᴏ ᴘʀᴇғɪxᴏ『 ${q.trim()} 』ғᴏɪ ᴛɪʀᴀᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'multiprefixo': case 'multiprefix':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴍᴜʟᴛɪ ᴘʀᴇғɪxᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
}
break

case 'rmphotogp': case 'rmfotogroup':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
reply(`A foto do grupo foi removida com sucesso.`)
await keisen.removeProfilePicture(from)
break

case 'legendabv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*ʟᴇɢᴇɴᴅᴀ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
} else {
reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ 🤷‍♂️*`)
}
break

case 'legendabv2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv2 = teks
setGp(dataGp)
reply('*ʟᴇɢᴇɴᴅᴀ ᴅᴇ ʙᴏᴀs ᴠɪɴᴅᴀs ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
} else {
reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ2 🤷‍♂️*`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply('*ʟᴇɢᴇɴᴅᴀ ᴅᴇ sᴀɪᴅᴀ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
} else {
reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ 🤷‍♂️*`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(q.length < 1) return reply('*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*')
teks = body.slice(13)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu2 = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply('*ʟᴇɢᴇɴᴅᴀ ᴅᴇ sᴀɪᴅᴀ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
} else {
reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ2 🤷‍♂️*`)
}
break

case 'addautorm':
case 'addautoban':
case 'listanegra': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.botAdmin());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero) return reply('*💫 ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ᴍᴇɴꜱᴀɢᴇᴍ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 💁‍♂️*');
const jid = `${numero}@s.whatsapp.net`;
if (dataGp[0].listanegra.includes(jid))
return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ᴊᴀ́ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ*');
dataGp[0].listanegra.push(jid);
setGp(dataGp);
await keisen.sendMessage(from, {
text: `*@${numero} ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ᴅᴇ ᴀᴜᴛᴏʙᴀɴ ✅🙆‍♂️*`,
contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
break;
}

case 'autobang':
case 'listanegrag': {
if (!SoDono) return reply(mess.onlyOwner());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero) return reply('*💫 ᴍᴀʀǫᴜᴇ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ 💁‍♂️*');
const jid = `${numero}@s.whatsapp.net`;
if (listanegraG.includes(jid))
return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ᴊᴀ́ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*');
listanegraG.push(jid);
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
await keisen.sendMessage(from, {
text: `*@${numero} ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ ✅🙆‍♂️*`,
mentions: [jid]
}, { quoted: selo });
break;
}

case 'tirardalistag': {
if (!SoDono) return reply(mess.onlyOwner());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero) return reply('*💫 ɪɴꜰᴏʀᴍᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ǫᴜᴇʀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ 💁‍♂️*');
const jid = `${numero}@s.whatsapp.net`;
if (!listanegraG.includes(jid))
return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*');
listanegraG.splice(listanegraG.indexOf(jid), 1);
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
await keisen.sendMessage(from, {
text: `*@${numero} ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ ✅🙇‍♂️*`,
contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
break;
}

case 'delremover':
case 'delautorm':
case 'delautoban':
case 'tirardalista': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.botAdmin());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero) return reply('*💫 ɪɴꜰᴏʀᴍᴇ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 💁‍♂️*');
const jid = `${numero}@s.whatsapp.net`;
if (!dataGp[0].listanegra.includes(jid))
return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ*');
dataGp[0].listanegra.splice(dataGp[0].listanegra.indexOf(jid), 1);
setGp(dataGp);
await keisen.sendMessage(from, {
text: `*@${numero} ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴀᴜᴛᴏʙᴀɴ ✅🙇‍♂️*`,
contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
break;
}


case 'bang': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!SoDono) return reply(mess.onlyOwner());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!q || (q !== 'local' && q !== 'global')) {
return reply(`*ᴜsᴇ: ʙᴀɴɢ ʟᴏᴄᴀʟ* — ʙᴀɴ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ ʟᴏᴄᴀʟ\n*ᴏᴜ: ʙᴀɴɢ ɢʟᴏʙᴀʟ* — ʙᴀɴ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ`);
}
try {
const lista = q === 'local' ? dataGp[0].listanegra : listanegraG;
const numerosNegros = lista.map(n => n.replace(/[^0-9]/g, ''));
const banidos = [];
for (const membro of groupMembers) {
const membroNormalizado = normalizar(membro.id);
const numero = membroNormalizado.replace(/[^0-9]/g, '');
const isInLista = numerosNegros.includes(numero);
const isNotAdmin = !membro.admin;
const isNotBot = membroNormalizado !== normalizar(keisen.user.id);
if (isInLista && isNotAdmin && isNotBot) {
banidos.push(membroNormalizado);
}
}
if (banidos.length === 0) {
return reply(`*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ${q === 'local' ? 'ʟᴏᴄᴀʟ' : 'ɢʟᴏʙᴀʟ'} ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ 🤷‍♂️*`);
}
await keisen.groupParticipantsUpdate(from, banidos, 'remove');
reply(`*ʙᴀɴɪ ᴜᴍ ᴛᴏᴛᴀʟ ᴅᴇ ${banidos.length} ɪɴɪᴍɪɢᴏ(ꜱ) ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ${q.toUpperCase()} 🙇‍♂️*`);

} catch (e) {
console.error(e);
reply('*ᴇʀʀᴏ ᴀᴏ ʙᴀɴɪʀ ᴏꜱ ɪɴɪᴍɪɢᴏꜱ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 🤷‍♂️*');
}
break;
}

case 'listbang': {
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (!listanegraG || listanegraG.length < 1)
return reply('*ɴᴇɴʜᴜᴍ ɪɴɪᴍɪɢᴏ ꜰᴏɪ ᴍᴀʀᴄᴀᴅᴏ ᴀɪɴᴅᴀ... 🙆‍♂️*');
let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*\n\n';
let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
let mencGlobal = [];
let achados = 0;
for (let [index, jid] of listanegraG.entries()) {
const jidNorm = normalizar(jid);
const membro = groupMembers.find(m => normalizar(m.id) === jidNorm);
const numero = jidNorm.replace(/[^0-9]/g, '');
const nome = `@${numero}`;
resposta += `*${index + 1}.* ${nome}\n`;
mencGlobal.push(jidNorm);
if (membro) {
achados++;
infiltrados += `✦ ${nome} — *ᴀǫᴜɪ ᴅᴇɴᴛʀᴏ... ᴍᴀʀᴄᴀɴᴅᴏ ᴛᴇʀʀɪᴛᴏ́ʀɪᴏ ᴇʀʀᴀᴅᴏ. 💁‍♂️*\n`;
}
}
resposta += achados > 0
? infiltrados
: '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴀɪɴᴅᴀ. 🤷‍♂️*';
resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
await keisen.sendMessage(from, {
text: resposta,
contextInfo:{...NkChannelKk, mentionedJid: mencGlobal}}, {quoted: selo}) 
break;
}

case 'listban': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
const lista = dataGp[0].listanegra;
if (!lista || lista.length < 1)
return reply('*ɴᴇɴʜᴜᴍ ɪɴɪᴍɪɢᴏ ꜰᴏɪ ᴍᴀʀᴄᴀᴅᴏ ᴀɪɴᴅᴀ... 🙆‍♂️*');
let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ʟᴏᴄᴀʟ*\n\n';
let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
let mencLocal = [];
let achados = 0;
for (let [index, jid] of lista.entries()) {
const jidNorm = normalizar(jid);
const numero = jidNorm.replace(/[^0-9]/g, '');
const tag = `@${numero}`;
resposta += `*${index + 1}.* ${tag}\n`;
mencLocal.push(jidNorm);
const membro = groupMembers.find(m => normalizar(m.id) === jidNorm);
if (membro) {
achados++;
infiltrados += `✦ ${tag} — *sᴇ ᴍᴇᴛᴇɴᴅᴏ ᴏɴᴅᴇ ɴᴀ̃ᴏ ꜰᴏɪ ᴄʜᴀᴍᴀᴅᴏ... 💁‍♂️*\n`;
}
}
resposta += achados > 0
? infiltrados
: '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴘᴏʀᴇ́ᴍ ᴘᴏʀ ᴇɴǫᴜᴀɴᴛᴏ. 🤷‍♂️*';
resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
await keisen.sendMessage(from, {
text: resposta,
contextInfo:{...NkChannelKk, mentionedJid: mencGlobal}}, {quoted: selo}) 
break;
}


case 'mute': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ǫᴜᴇʀ ᴘᴜɴɪʀ*`);

if (menc_os2 == botNumberLID) return reply(`*ɴᴀᴏ ᴘᴏssᴏ ᴍᴜᴛᴀʀ ᴏ ʙᴏᴛ 😵*`);
if (menc_os2 == nmrdn) return reply(`*ɴᴀᴏ ᴏᴜsᴇ ᴛᴏᴄᴀʀ ɴᴏ ᴍᴇᴜ ᴅᴏɴᴏ 🔖*`);
if (vip.map(i => i.id).includes(menc_os2)) return reply(`*ɴᴀᴏ ᴍᴇxᴀ ᴄᴏᴍ ǫᴜᴇᴍ ᴇ ᴠɪᴘ 😎*`);
if (groupAdmins.includes(menc_os2)) return reply(`*ɴᴀᴏ ᴘᴏᴅᴇ ᴍᴜᴛᴀʀ ᴜᴍ ᴀᴅᴍɪɴ*`);

const tipo = q.toLowerCase().includes("silenciar") ? "silenciar" : "mutar";

if (tipo === "silenciar") {
if (grupoMute.silenciados.includes(menc_os2))
return mention(`*ᴏ @${menc_os2.split('@')[0]} ᴊᴀ ᴇsᴛᴀ sɪʟᴇɴᴄɪᴀᴅᴏ*`);

grupoMute.silenciados.push(menc_os2);
fs.writeFileSync("./DADOS DO KEISEN/grupos/muted.json", JSON.stringify(muted, null, 2));
mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ sɪʟᴇɴᴄɪᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 🔇*`);
}

if (tipo === "mutar") {
if (grupoMute.mutados.includes(menc_os2))
return mention(`ᴏ @${menc_os2.split('@')[0]} ᴊᴀ ᴇsᴛᴀ ᴍᴜᴛᴀᴅᴏ`);

grupoMute.mutados.push(menc_os2);
fs.writeFileSync("./DADOS DO KEISEN/grupos/muted.json", JSON.stringify(muted, null, 2));
mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ ᴍᴜᴛᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 💧*`);
}
}
break;

case 'desmute': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ǫᴜᴇʀ ᴅᴇsᴍᴜᴛᴀʀ*`);

if (!grupoMute.silenciados.includes(menc_os2) && !grupoMute.mutados.includes(menc_os2))
return mention(`*ᴏ @${menc_os2.split('@')[0]} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);

grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== menc_os2);
grupoMute.mutados = grupoMute.mutados.filter(id => id !== menc_os2);
fs.writeFileSync("./DADOS DO KEISEN/grupos/muted.json", JSON.stringify(muted, null, 2));
mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ ʟɪʙᴇʀᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 🙆‍♂️*`);
}
break;

//===========[ FIM CMD DONO/ADM'S ]=============\\

//=============[ ATIVACOES ]=========\\
case 'ativic':
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

const todosAtivos = dataGp[0].jogos && 
             dataGp[0]['antilink'] && 
             dataGp[0]['antilinkhard'] && 
             dataGp[0].wellcome[1].bemvindo2 && 
             dataGp[0].x9 && 
             dataGp[0].antifake &&
             dataGp[0].antilinkgp;

if (todosAtivos) {
            dataGp[0].jogos = false;
            dataGp[0]['antilink'] = false;
            dataGp[0]['antilinkhard'] = false;
            dataGp[0].wellcome[1].bemvindo2 = false;
            dataGp[0].x9 = false;
            dataGp[0].antifake = false;
            dataGp[0].antilinkgp = false;
            setGp(dataGp);
            reply('*ᴛᴏᴅᴏs ᴏs ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴄᴇssᴀʀɪᴏ ғᴏʀᴀᴍ ᴅᴇsᴀᴛɪᴠᴀᴅᴏs 🙅‍♂️*');
} else {           
            dataGp[0].jogos = true;
            dataGp[0]['antilink'] = true;
            dataGp[0]['antilinkhard'] = true;
            dataGp[0].wellcome[1].bemvindo2 = true;
            dataGp[0].x9 = true;
            dataGp[0].antifake = true;
            dataGp[0].antilinkgp = true;
            setGp(dataGp);
            reply('*ᴛᴏᴅᴏs ᴏs ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴄᴇssᴀʀɪᴏ ғᴏʀᴀᴍ ᴀᴛɪᴠᴀᴅᴏs 🙇‍♂️*');
}
} catch (error) {
console.error(error);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇғᴇᴛᴜᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ ⚠*');
}
break;

case 'so_dono':
if(!SoDono) return reply(mess.onlyOwner())
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('*ᴏ ʙᴏᴛ ғᴏɪ ᴅᴇsʟɪɢᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴘʀᴀ ᴜsᴏ ᴅᴇ ᴍᴇᴍʙʀᴏs ᴇ ᴀᴅᴍs ᴅᴇ ɢʀᴜᴘᴏs 🙅‍♂️*');
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`*ᴀᴛɪᴠᴀɴᴅᴏ ᴛᴏᴅᴏs ᴏs ғᴜɴᴄɪᴏɴᴀᴍᴇɴᴛᴏs ᴅᴏ ʙᴏᴛ ɴᴏᴠᴀᴍᴇɴᴛᴇ 🙇‍♂️*`)
}
break

case 'limitecaracteres':
case 'limiteflood':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isAntiFlood) {
dataGp[0].limitec.active = false;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].limitec.active = true;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ʟɪᴍɪᴛᴇ ғʟᴏᴏᴅ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*');
}
break;

case 'modocoins':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isModoCoins) {
dataGp[0].isModoCoins = false;
setGp(dataGp);
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*`);
} else {
dataGp[0].isModoCoins = true;
setGp(dataGp);
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ N-ᴄᴏɪɴs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*`);
}
break;

case 'antistatus': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const statusAtual = dataGp[0].antistatus === true
if (statusAtual) {
dataGp[0].antistatus = false
setGp(dataGp)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*`);
} else {
dataGp[0].antistatus = true
setGp(dataGp)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪꜱᴛᴀᴛᴜꜱ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*`);
}
break
}


case 'antiligar':
case 'antiligacao':
case 'antiligação':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ʟɪɢᴀʀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break

case 'verificado-global':
case 'verificado':
try {
if(!SoDono) return reply(mess.onlyOwner())

	if (!nescessario.verificado) {

		nescessario.verificado = true;

		fs.writeFileSync(`./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴠᴇʀɪғɪᴄᴀᴅᴏ ɢʟᴏʙᴀʟ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
	} else if (nescessario.verificado) {

		nescessario.verificado = false

		fs.writeFileSync(`./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*`)
	}
} catch (e) {
	console.error(e);
	reply("Houve um erro no comando!");
}
break;

case 'console': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isConsole) {
obrigadoEXT.consoleoff = true
setObg(obrigadoEXT)
reply(`*ᴍᴏᴅᴏ ᴄᴏɴsᴏʟᴇ ᴀᴛɪᴠᴏ, ᴀɢᴏʀᴀ ɪʀᴇɪ ᴄᴏɴsᴇɢᴜɪʀ ᴠᴇʀ ᴛᴏᴅᴏ ᴛɪᴘᴏ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ 🙇‍♂️*`) 
} else if(isConsole) {
obrigadoEXT.consoleoff = false
setObg(obrigadoEXT)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'audiomenu':
case 'audio-menu': {
if(!SoDono) return reply(mess.onlyOwner())
if(!isAudioMenu) {
obrigadoEXT.menu_audio = true
setObg(obrigadoEXT)
reply(`*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴛɪᴠᴀʀ ᴏ ᴀᴜᴅɪᴏ-ᴍᴇɴᴜ 🙇‍♂️*`)
} else {
obrigadoEXT.menu_audio = false
setObg(obrigadoEXT)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*')
}
break
}

case 'getaudio':
case 'trocaraudio': {
if (!SoDono) return reply(mess.onlyOwner());

const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;

if (!quotedMsg || !quotedMsg.audioMessage) {
return reply("🎵 Marque um áudio para ser o novo áudio do menu.");
}

try {
await reagir(from, "⏳");

const audioBuffer = await getFileBuffer(quotedMsg.audioMessage, 'audio');

const audioPath = "./DADOS DO KEISEN/data/media/audios/menu.mp3";
fs.writeFileSync(audioPath, audioBuffer);

await reagir(from, "✅");
reply("✅ Áudio do menu alterado com sucesso!");

} catch (e) {
console.error(e);
reply("❌ Erro ao trocar o áudio do menu.");
}
break;
}

case 'antipv':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipv2':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ2 ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipv3':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ3 ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'visualizarmsg':
if(!SoDono) return reply(mess.onlyOwner())
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴠɪᴢᴜᴀʟɪᴢᴀʀ ᴍsɢ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipalavrão':
case 'antipalavrao':
case 'antipalavra':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alterna o estado do recurso de anti palavrão
if (isPalavrao) {
dataGp[0].antipalavrao.active = !dataGp[0].antipalavrao.active; // Inverte o estado atual
setGp(dataGp);
if (dataGp[0].antipalavrao.active) {
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴠʟᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
} else {
dataGp[0].antipalavrao.active = true; // Se ainda não tiver configurado, ativa por padrão
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴠʟᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
}

break;

case 'antinotas':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de antnotas
dataGp[0].antinotas = !dataGp[0].antinotas;
setGp(dataGp);

if (dataGp[0].antinotas) {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪɴᴏᴛᴀs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;
 
case 'modobn':case 'modobrincadeira': case 'modobrincadeiras':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isModobn) {
dataGp[0].jogos = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].jogos = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'autorepo': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

  if (!dataGp || !dataGp[0]) return reply('*❌ erro ao carregar os dados do grupo*')

  dataGp[0].autoresposta = !dataGp[0].autoresposta
  setGp(dataGp)

  if (dataGp[0].autoresposta) {
    return reply('*✅ o recurso autorepo foi ativado com sucesso no grupo*')
  } else {
    return reply('*❌ o recurso autorepo foi desativado com sucesso no grupo*')
  }
}
break

case "dracarys":
case "karasuia":
case "ia": {
  if (!q) return reply(`Use assim: ${prefix + command} sua pergunta`);

  try {
    await reagir(from, "🧠");

    let estiloExtra = "responda de forma natural, inteligente e contextual";

    if (/(oi|ola|olá|opa|eae|salve)\b/i.test(q)) {
      estiloExtra = "responda como um cumprimento natural e simpático";
    } else if (/\?/.test(q)) {
      estiloExtra = "responda como uma pergunta, ajudando de forma clara";
    } else if (/(kkk|kkkk|rs|rsrs|pdp|fdp|pqp)/i.test(q)) {
      estiloExtra = "responda entrando na zoeira de forma natural";
    } else if (/(triste|mal|chorando|desanimado)/i.test(q)) {
      estiloExtra = "responda com empatia e apoio";
    }

    const respostaIA = await responderIA(q, estiloExtra);
    await reply(respostaIA);
  } catch (e) {
    console.log("ERRO CASE IA:", e?.message || e);
    await reply("❌ Não consegui responder agora.");
  }
  break;
}
case 'autototext':
if(!isGroup) return reply(mess.onlyGroup());
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(iskeisenEscuta) {
dataGp[0].keisenescutando = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].keisenescutando = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀꜱᴏ ᴅᴇ ʟᴇʀ ᴏꜱ ᴀᴜᴅɪᴏꜱ ᴇ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴩʀᴀ ᴛᴇxᴛᴏ ꜰᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'autodl':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(isAutoDl) {
dataGp[0].autodl = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].autodl = true
setGp(dataGp)
reply('*ᴀᴜᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ɴᴏ ɢʀᴜᴩᴏ 🙇‍♂️*')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAutofigu) {
dataGp[0].autosticker = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].autosticker = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀᴜᴛᴏғɪɢᴜʀɪɴʜᴀs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(command == 'bangp'){
if(isBanchat) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ʙᴀɴɪᴅᴏ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`*ᴏ ɢʀᴜᴘᴏ ғᴏɪ ʙᴀɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴀɢᴏʀᴀ ɴɪɴɢᴜᴇᴍ ᴘᴏᴅᴇʀᴀ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*`)
} else {
if(!isBanchat) return reply(`*ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ᴅᴇsʙᴀɴɪᴅᴏ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`*ᴏ ɢʀᴜᴘᴏ ғᴏɪ ᴅᴇsʙᴀɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ), ᴀɢᴏʀᴀ ᴛᴏᴅᴏs ᴅᴇssᴇ ɢʀᴜᴘᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴏs 🙇‍♂️*`)
}
break

case 'gppv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
reply(`*ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ ʟɪɴᴋ ɴᴏ sᴇᴜ ᴘᴠ ${isCargo} 🙅‍♂️*`)
 linkgc = await keisen.groupInviteCode(from)
keisen.sendMessage(sender, { text: 'https://chat.whatsapp.com/' + linkgc}, {quoted: selo})
 break

case 'antidelete': {
if (!isGroup) return reply(mess.onlyGroup())
if (!isGroupAdmins) return reply(mess.onlyAdmins())
const pathGp = `./DADOS DO KEISEN/grupos/${from}.json`
if (!fs.existsSync(pathGp)) {
fs.writeFileSync(pathGp, JSON.stringify([{ antidelete: false }]))
}
const dataGp = JSON.parse(fs.readFileSync(pathGp))
dataGp[0].antidelete = !dataGp[0].antidelete
fs.writeFileSync(pathGp, JSON.stringify(dataGp, null, 2))
reply(dataGp[0].antidelete ? '*ᴏ ᴍᴏᴅᴏ x9 ᴍᴇɴꜱᴀɢᴇᴍ ꜰᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙇‍♂️*' : '*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
}
break

case 'antilinkgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntilinkgp) {
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alterna automaticamente o estado do antidoc
if (dataGp[0].antidoc) {
dataGp[0].antidoc = false;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antidoc = true;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
}
break;

case 'antictt':
case 'anticontato':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alterna automaticamente o estado do antictt
if (dataGp[0].antictt) {
dataGp[0].antictt = false;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antictt = true;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
}
break;

case 'antiddd':
case 'anti_ddd':
case 'anti-ddd':
if (!isGroup) return await reply(mess.onlyGroup());
if (!isGroupAdmins) return await reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return await reply(mess.onlyBotAdmin());

// Alterna automaticamente o estado do antiDDD
if (dataGp[0].ANTI_DDD.active) {
dataGp[0].ANTI_DDD.active = false;
setGp(dataGp);
await reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].ANTI_DDD.active = true;
setGp(dataGp);
await reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴅᴅᴅ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
}
break;

case 'antiloc':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiLoc) {
dataGp[0].antiloc = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antiloc = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ʟᴏᴄᴀʟɪᴢᴀᴄᴀᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
}
break

case 'antiporn':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiPorn) {
dataGp[0].antiporn = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antiporn = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴏʀɴᴏɢʀᴀғɪᴀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'antifake':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(isAntifake) {
dataGp[0].antifake = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antifake = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪғᴀᴋᴇ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'anticatalogo':
case 'anticatalg':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isAnticatalogo) {
dataGp[0].anticatalogo = false;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].anticatalogo = true;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴄᴀᴛᴀʟᴀɢᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
}
break;

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isWelkom) {
dataGp[0].wellcome[0].bemvindo1 = false;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].wellcome[0].bemvindo1 = true;
setGp(dataGp);
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ʙᴇᴍᴠɪɴᴅᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
} 
break;
 
case 'fundobv':
case 'fundobemvindo': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const path = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${from}.json`;
const jsonGp = JSON.parse(fs.readFileSync(path));
const arg = (q || args[0] || '').trim();
if (!isWelkom) {return reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🤷‍♂️*`);}
const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
const salvar = (link) => { if (!jsonGp[0].wellcome) jsonGp[0].wellcome = [{}]; jsonGp[0].wellcome[0].fundobv = link; fs.writeFileSync(path, JSON.stringify(jsonGp, null, 2));
reagir(from, "✅");
reply('*ғᴜɴᴅᴏ ᴅᴇ ʙᴏᴀs-ᴠɪɴᴅᴀs ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ 🙆‍♂️*');};
if (arg === '0') {salvar(null); return reply('*ғᴜɴᴅᴏ ᴅᴇ ʙᴏᴀs-ᴠɪɴᴅᴀs ʀᴇᴍᴏᴠɪᴅᴏ 💁‍♂️*');}
if (v) {reagir(from, "⏳"); return salvar(await upload(await getFileBuffer(v, 'video')));}
if (i) {reagir(from, "⏳"); return salvar(await upload(await getFileBuffer(i, 'image')));}
reply('*ᴍᴀɴᴅᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪ́ᴅᴇᴏ ᴘᴀʀᴀ ᴀᴛᴜᴀʟɪᴢᴀʀ ᴏ ғᴜɴᴅᴏ 🙇‍♂️*');
}
break;

case 'antiaudio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiAudio) {
dataGp[0].antiaudio = false
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
dataGp[0].antiaudio = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴀᴜᴅɪᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'antisticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

// Alternar o estado de antisticker
dataGp[0].antisticker = !dataGp[0].antisticker;
setGp(dataGp);

if(dataGp[0].antisticker) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ sᴄᴛɪᴄᴋᴇʀ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;


case 'antiimg':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de antiimagem
dataGp[0].antiimg = !dataGp[0].antiimg;
setGp(dataGp);

if (dataGp[0].antiimg) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'antivideo':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de antivídeo
dataGp[0].antivideo = !dataGp[0].antivideo;
setGp(dataGp);

if (dataGp[0].antivideo) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴠɪᴅᴇᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'x9adm':
case 'x9':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de x9
dataGp[0].x9 = !dataGp[0].x9;
setGp(dataGp);

if (dataGp[0].x9) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ x9 ᴀᴅɪᴍɪɴ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'antilink':
case 'antilinkhard':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de antilink e antilinkhard
dataGp[0]['antilink'] = !dataGp[0]['antilink'];
dataGp[0]['antilinkhard'] = dataGp[0]['antilink']; // Sincroniza antilinkhard com antilink
setGp(dataGp);

if (dataGp[0]['antilink']) {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋʜᴀʀᴅ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋʜᴀʀᴅ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;


case 'bemvindo2':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de bemvindo2
dataGp[0].wellcome[1].bemvindo2 = !dataGp[0].wellcome[1].bemvindo2;
setGp(dataGp);

if (dataGp[0].wellcome[1].bemvindo2) {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ʙᴇᴍᴠɪɴᴅᴏ2 ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'x9visuunica':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de x9visuunica
dataGp[0].X9VisuUnica = !dataGp[0].X9VisuUnica;
setGp(dataGp);

if (dataGp[0].X9VisuUnica) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ x9ᴠɪᴢᴜᴜɴɪᴄᴀ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'so_adm':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

// Alternar o estado de so_adm
dataGp[0].soadm = !dataGp[0].soadm;
setGp(dataGp);

if (dataGp[0].soadm) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ sᴏ ᴀᴅᴍ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break;

case 'odelete':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
nescessario.Odelete = !nescessario.Odelete;
setNes(nescessario);
if (nescessario.Odelete) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴏᴅᴇʟᴇᴛᴇ ɴᴏs ɢʀᴜᴘᴏs 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏs ɢʀᴜᴘᴏs 🙅‍♂️*');
}
break;

case 'antilinkeasy':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotGroupAdmins());

// Alternar o estado de antilinkeasy
dataGp[0].antilinkeasy = !dataGp[0].antilinkeasy;
setGp(dataGp);

if (dataGp[0].antilinkeasy) {
reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ᴀɴᴛɪʟɪɴᴋᴇᴀsʏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
} else {
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break; 

case 'anti-sp':
case 'antisp':
case 'anti_sp': //by moreno modz
try {
	if (!isGroup) return reply("Comando apenas grupo!!");
	if (!SoDono && !info.key.fromMe) return reply("*Você não tem permissão de usar este comando!!!* 😠");
	if (!isBotGroupAdmins) return reply("O bot prescisa ser *Administrador* do grupo para executar este comando");
	
	if (ANT_SP.groupId === from && ANT_SP.active) {
		ANT_SP.active = false;
		fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
		reply(`*ᴀɴᴛɪsᴘ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`);
	}
	else {
		ANT_SP.active = true;
		ANT_SP.groupId = from;
		ANT_SP.groupName = groupName;
		fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
		await reply(
			`*ᴅᴇᴛᴇᴄᴛᴏʀ ᴅᴇ ʟɪɴᴋs ɢʟᴏʙᴀʟ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`
			);
	}
} catch (error) {
	console.error(error);
	reply("Houve um erro inesperado!! ⚠️");
}
break;

//===============[ FIM DAS ATIVACOES ]============\\

//============[ RANDOM CMD ]=============\\

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./DADOS DO KEISEN/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./DADOS DO KEISEN/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./DADOS DO KEISEN/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha DADOS DO KEISEN do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
reply(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
await keisen.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
await keisen.sendMessage(from, {image: {url: q}}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
}
break

// ==================== SISTEMA BANCÁRIO COMPLETO ====================

// ========== ABRIR CONTA BANCÁRIA ==========
case 'abrirconta':
case 'criarconta': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    
    // Carrega bancos de dados
    let bancoDB = {};
    let extratoDB = {};
    let coinsDB = {};
    let registrosDB = {};
    let pixDB = {};
    let casamentosDB = {};
    let faccaoDB = {};
    let policiaDB = {};
    let jujutsuDB = {};
    let batalhaoDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você já possui uma conta bancária!\nUse \`!perfilbanco\` para ver seus dados.`);
    }

    // Verifica se tem coins para abrir conta
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 0 };
    
    // Busca dados integrados
    const nomeRegistrado = registrosDB[usuario]?.nomeCompleto || nomeUser;
    const chavePix = pixDB[usuario]?.chave || "Não cadastrada";
    const cpf = registrosDB[usuario]?.cpf || "Não registrado";
    const rg = registrosDB[usuario]?.rg || "Não registrado";
    const saldoCoins = coinsDB[usuario].coins;
    
    // Busca status de relacionamento
    let statusRelacionamento = "💔 Solteiro(a)";
    let nomeConjugue = "";
    for (let id in casamentosDB) {
        if (casamentosDB[id]?.pessoa1 === usuario) {
            statusRelacionamento = "💍 Casado(a)";
            nomeConjugue = casamentosDB[id].pessoa2.split('@')[0];
            break;
        } else if (casamentosDB[id]?.pessoa2 === usuario) {
            statusRelacionamento = "💍 Casado(a)";
            nomeConjugue = casamentosDB[id].pessoa1.split('@')[0];
            break;
        }
    }
    
    // Busca facção
    let nomeFaccao = "Nenhuma";
    for (let id in faccaoDB) {
        if (faccaoDB[id]?.membros && faccaoDB[id].membros[usuario]) {
            nomeFaccao = faccaoDB[id].nome;
            break;
        }
    }
    
    // Busca cargo policial
    let cargoPolicia = "Não é policial";
    let matricula = "N/A";
    if (policiaDB[usuario]) {
        cargoPolicia = policiaDB[usuario].rank;
        matricula = policiaDB[usuario].matricula;
    }
    
    // Busca cargo no batalhão
    let cargoBatalhao = "Não está no batalhão";
    if (batalhaoDB[usuario]) {
        cargoBatalhao = batalhaoDB[usuario].cargo;
    }
    
    // Busca personagem Jujutsu
    let personagemJujutsu = "Nenhum";
    if (jujutsuDB[usuario]) {
        personagemJujutsu = jujutsuDB[usuario].nomePersonagem;
    }

    // Gera dados bancários
    const agencia = Math.floor(Math.random() * 9000) + 1000;
    const conta = Math.floor(Math.random() * 900000) + 100000;
    const digito = Math.floor(Math.random() * 9);
    const cartao = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    const cvv = Math.floor(Math.random() * 900) + 100;
    const dataValidade = `${Math.floor(Math.random() * 12) + 1}/${new Date().getFullYear() + 4}`;

    // Custo de abertura
    const custoAbertura = 1000;
    
    // Verifica se pode abrir conta com o saldo de coins
    if (saldoCoins < custoAbertura) {
        return reply(`❌ @${nomeUser}, abrir uma conta custa ${custoAbertura} N-Coins.\n💰 Seu saldo atual: ${saldoCoins.toLocaleString()} N-Coins\n💡 Use \`!addcoins @user <valor>\` para adicionar coins.`);
    }

    // Pergunta quanto quer depositar na conta (opcional)
    let depositoInicial = 0;
    let depositoInput = args[0];
    
    if (depositoInput && !isNaN(parseInt(depositoInput))) {
        depositoInicial = parseInt(depositoInput);
        if (depositoInicial < 0) depositoInicial = 0;
        if (depositoInicial > saldoCoins - custoAbertura) {
            depositoInicial = saldoCoins - custoAbertura;
        }
    }
    
    // Abre a conta
    bancoDB[usuario] = {
        titular: nomeRegistrado,
        agencia: agencia,
        conta: `${conta}-${digito}`,
        cartao: cartao,
        cvv: cvv,
        validade: dataValidade,
        saldo: depositoInicial,
        limite: 5000,
        saldoPoupanca: 0,
        investimentos: 0,
        creditScore: 500,
        dataAbertura: new Date().toLocaleString('pt-BR'),
        ultimaMovimentacao: new Date().toLocaleString('pt-BR')
    };
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));

    // Registra abertura no extrato
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "📝 ABERTURA",
        valor: custoAbertura,
        descricao: "Abertura de conta bancária",
        data: new Date().toLocaleString('pt-BR'),
        saldo: depositoInicial
    });
    
    // Se depositou algo, registra depósito
    if (depositoInicial > 0) {
        extratoDB[usuario].unshift({
            tipo: "💰 DEPÓSITO INICIAL",
            valor: depositoInicial,
            descricao: `Depósito inicial de ${depositoInicial.toLocaleString()} N-Coins`,
            data: new Date().toLocaleString('pt-BR'),
            saldo: depositoInicial
        });
    }
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));

    // Debita o custo e o depósito inicial dos coins
    coinsDB[usuario].coins -= custoAbertura;
    coinsDB[usuario].coins -= depositoInicial;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🏦 *BANCO CENTRAL - CONTA ABERTA* 🏦\n\n` +
                  `🎉 @${nomeUser}, sua conta foi criada com sucesso!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *DADOS PESSOAIS INTEGRADOS:*\n` +
                  `   👤 Titular: ${nomeRegistrado}\n` +
                  `   🆔 CPF: ${cpf}\n` +
                  `   📛 RG: ${rg}\n` +
                  `   🔑 Chave Pix: ${chavePix}\n` +
                  `   💕 Status: ${statusRelacionamento} ${nomeConjugue ? `com @${nomeConjugue}` : ''}\n` +
                  `   🔥 Facção: ${nomeFaccao}\n` +
                  `   👮 Policial: ${cargoPolicia} ${matricula !== "N/A" ? `(${matricula})` : ''}\n` +
                  `   🎖️ Batalhão: ${cargoBatalhao}\n` +
                  `   ⚔️ Personagem: ${personagemJujutsu}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💳 *DADOS BANCÁRIOS:*\n` +
                  `   🏛️ Agência: ${agencia}\n` +
                  `   💳 Conta: ${conta}-${digito}\n` +
                  `   💳 Cartão: **** **** **** ${cartao.toString().slice(-4)}\n` +
                  `   📅 Validade: ${dataValidade}\n` +
                  `   🔒 CVV: ${cvv}\n` +
                  `   💰 Saldo inicial: ${depositoInicial.toLocaleString()} N-Coins\n` +
                  `   📈 Limite: 5.000 N-Coins\n` +
                  `   📅 Abertura: ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *RESUMO FINANCEIRO:*\n` +
                  `   💸 Custo de abertura: -${custoAbertura} N-Coins\n` +
                  `   💰 Depósito inicial: ${depositoInicial > 0 ? `+${depositoInicial.toLocaleString()} N-Coins` : '0 N-Coins'}\n` +
                  `   💵 Saldo em Coins restante: ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n` +
                  `   💳 Saldo na conta bancária: ${depositoInicial.toLocaleString()} N-Coins\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 *COMANDOS BANCÁRIOS:*\n` +
                  `   📊 \`!perfilbanco\` - Ver extrato completo\n` +
                  `   💰 \`!depositar <valor>\` - Depositar\n` +
                  `   💸 \`!sacar <valor>\` - Sacar\n` +
                  `   🔄 \`!transferirbanco @user <valor>\` - Transferir\n` +
                  `   📈 \`!investir <valor>\` - Investir\n` +
                  `   💳 \`!pagarfatura\` - Pagar fatura\n` +
                  `   ⭐ \`!aumentarlimite\` - Aumentar limite\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERFIL BANCÁRIO COMPLETO ==========
case 'perfilbanco':
case 'extrato':
case 'meubanco': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    const familiaPath = './DADOS DO KEISEN/usuarios/familia.json';
    
    let bancoDB = {};
    let extratoDB = {};
    let coinsDB = {};
    let registrosDB = {};
    let pixDB = {};
    let casamentosDB = {};
    let faccaoDB = {};
    let policiaDB = {};
    let jujutsuDB = {};
    let batalhaoDB = {};
    let petsDB = {};
    let familiaDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!bancoDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` para criar sua conta.`);
    }

    const conta = bancoDB[alvo];
    const saldoCoins = coinsDB[alvo]?.coins || 0;
    const nomeRegistrado = registrosDB[alvo]?.nomeCompleto || nomeUser;
    const chavePix = pixDB[alvo]?.chave || "Não cadastrada";
    const cpf = registrosDB[alvo]?.cpf || "Não registrado";
    
    // Status relacionamento
    let statusRelacionamento = "💔 Solteiro(a)";
    let nomeConjugue = "";
    for (let id in casamentosDB) {
        if (casamentosDB[id]?.pessoa1 === alvo) {
            statusRelacionamento = "💍 Casado(a)";
            nomeConjugue = casamentosDB[id].pessoa2.split('@')[0];
            break;
        } else if (casamentosDB[id]?.pessoa2 === alvo) {
            statusRelacionamento = "💍 Casado(a)";
            nomeConjugue = casamentosDB[id].pessoa1.split('@')[0];
            break;
        }
    }
    
    // Facção
    let nomeFaccao = "Nenhuma";
    let cargoFaccao = "";
    for (let id in faccaoDB) {
        if (faccaoDB[id]?.membros && faccaoDB[id].membros[alvo]) {
            nomeFaccao = faccaoDB[id].nome;
            cargoFaccao = faccaoDB[id].membros[alvo].cargo;
            break;
        }
    }
    
    // Polícia
    let cargoPolicia = "Não é policial";
    let matricula = "N/A";
    if (policiaDB[alvo]) {
        cargoPolicia = policiaDB[alvo].rank;
        matricula = policiaDB[alvo].matricula;
    }
    
    // Batalhão
    let cargoBatalhao = "Não está no batalhão";
    let missoesBatalhao = 0;
    if (batalhaoDB[alvo]) {
        cargoBatalhao = batalhaoDB[alvo].cargo;
        missoesBatalhao = batalhaoDB[alvo].missoesCompletas || 0;
    }
    
    // Jujutsu
    let personagemJujutsu = "Nenhum";
    let rankJujutsu = "";
    if (jujutsuDB[alvo]) {
        personagemJujutsu = jujutsuDB[alvo].nomePersonagem;
        rankJujutsu = jujutsuDB[alvo].rank;
    }
    
    // Pets
    const totalPets = petsDB[alvo]?.length || 0;
    
    // Filhos
    const totalFilhos = familiaDB[alvo]?.filhos?.length || 0;
    
    // Busca últimas movimentações
    const movimentacoes = extratoDB[alvo] || [];
    const ultimasMov = movimentacoes.slice(0, 5);
    
    let extratoTexto = '';
    for (const mov of ultimasMov) {
        extratoTexto += `   ${mov.tipo} ${mov.valor.toLocaleString()} N-Coins - ${mov.descricao}\n`;
    }
    if (ultimasMov.length === 0) extratoTexto = '   Nenhuma movimentação recente\n';

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🏦 *EXTRATO BANCÁRIO COMPLETO* 🏦\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *DADOS CADASTRAIS:*\n` +
                  `   👤 Titular: ${nomeRegistrado}\n` +
                  `   🆔 CPF: ${cpf}\n` +
                  `   🔑 Chave Pix: ${chavePix}\n` +
                  `   💕 Relacionamento: ${statusRelacionamento} ${nomeConjugue ? `com @${nomeConjugue}` : ''}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💳 *DADOS BANCÁRIOS:*\n` +
                  `   🏛️ Agência: ${conta.agencia}\n` +
                  `   💳 Conta: ${conta.conta}\n` +
                  `   💳 Cartão: **** **** **** ${conta.cartao.toString().slice(-4)}\n` +
                  `   📅 Validade: ${conta.validade}\n` +
                  `   💰 Saldo: ${conta.saldo.toLocaleString()} N-Coins\n` +
                  `   💰 Saldo Poupança: ${conta.saldoPoupanca.toLocaleString()} N-Coins\n` +
                  `   📈 Investimentos: ${conta.investimentos.toLocaleString()} N-Coins\n` +
                  `   📊 Limite: ${conta.limite.toLocaleString()} N-Coins\n` +
                  `   ⭐ Credit Score: ${conta.creditScore}\n` +
                  `   💵 Saldo em Coins: ${saldoCoins.toLocaleString()} N-Coins\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🎮 *DADOS RPG:*\n` +
                  `   🔥 Facção: ${nomeFaccao} ${cargoFaccao ? `(${cargoFaccao})` : ''}\n` +
                  `   👮 Policial: ${cargoPolicia} ${matricula !== "N/A" ? `(${matricula})` : ''}\n` +
                  `   🎖️ Batalhão: ${cargoBatalhao} (${missoesBatalhao} missões)\n` +
                  `   ⚔️ Jujutsu: ${personagemJujutsu} ${rankJujutsu ? `(${rankJujutsu})` : ''}\n` +
                  `   🐾 Pets: ${totalPets}\n` +
                  `   👶 Filhos: ${totalFilhos}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📜 *ÚLTIMAS MOVIMENTAÇÕES:*\n${extratoTexto}\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 *COMANDOS BANCÁRIOS:*\n` +
                  `   💰 \`!depositar <valor>\` - Depositar\n` +
                  `   💸 \`!sacar <valor>\` - Sacar\n` +
                  `   🔄 \`!transferirbanco @user <valor>\` - Transferir\n` +
                  `   📈 \`!investir <valor>\` - Investir\n` +
                  `   💳 \`!pagarfatura\` - Pagar fatura\n` +
                  `   ⭐ \`!aumentarlimite\` - Aumentar limite\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== DEPOSITAR NA CONTA ==========
// ==================== DEPOSITAR NA CONTA ====================
case 'depositar':
case 'depositarconta': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let bancoDB = {};
    let extratoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const valor = parseInt(args[0]);

    if (isNaN(valor) || valor <= 0) return reply(`❌ Uso: \`!depositar <valor>\``);

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < valor) {
        return reply(`❌ @${nomeUser}, você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    coinsDB[usuario].coins -= valor;
    bancoDB[usuario].saldo += valor;
    bancoDB[usuario].ultimaMovimentacao = new Date().toLocaleString('pt-BR');
    
    // Registra extrato
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "💰 DEPÓSITO",
        valor: valor,
        descricao: `Depósito bancário de ${valor.toLocaleString()} N-Coins`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[usuario].saldo
    });
    if (extratoDB[usuario].length > 50) extratoDB[usuario].pop();
    
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💰 *DEPÓSITO REALIZADO!* 💰\n\n` +
                  `✅ @${nomeUser} depositou ${valor.toLocaleString()} N-Coins em sua conta!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💳 *Saldo atual:* ${bancoDB[usuario].saldo.toLocaleString()} N-Coins\n` +
                  `💰 *Coins restantes:* ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== SACAR DA CONTA ====================
case 'sacar':
case 'sacarconta': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let bancoDB = {};
    let extratoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const valor = parseInt(args[0]);

    if (isNaN(valor) || valor <= 0) return reply(`❌ Uso: \`!sacar <valor>\``);

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    if (bancoDB[usuario].saldo < valor) {
        return reply(`❌ @${nomeUser}, você tem apenas ${bancoDB[usuario].saldo.toLocaleString()} N-Coins na conta.`);
    }

    bancoDB[usuario].saldo -= valor;
    bancoDB[usuario].ultimaMovimentacao = new Date().toLocaleString('pt-BR');
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += valor;
    
    // Registra extrato
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "💸 SAQUE",
        valor: valor,
        descricao: `Saque bancário de ${valor.toLocaleString()} N-Coins`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[usuario].saldo
    });
    if (extratoDB[usuario].length > 50) extratoDB[usuario].pop();
    
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💸 *SAQUE REALIZADO!* 💸\n\n` +
                  `✅ @${nomeUser} sacou ${valor.toLocaleString()} N-Coins da sua conta!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💳 *Saldo atual:* ${bancoDB[usuario].saldo.toLocaleString()} N-Coins\n` +
                  `💰 *Coins atuais:* ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== TRANSFERÊNCIA BANCÁRIA (PIX) ====================
case 'transferirbanco':
case 'transferirpix': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    
    let bancoDB = {};
    let extratoDB = {};
    let pixDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let chaveOuMencao = args[0];
    let valor = parseInt(args[1]);

    if (!chaveOuMencao || isNaN(valor) || valor <= 0) {
        return reply(`❌ Uso: \`!transferirbanco <chave_pix/@user> <valor>\``);
    }

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    if (bancoDB[usuario].saldo < valor) {
        return reply(`❌ @${nomeUser}, você tem apenas ${bancoDB[usuario].saldo.toLocaleString()} N-Coins na conta.`);
    }

    let destinatario = null;
    let chaveUsada = chaveOuMencao;

    if (chaveOuMencao.startsWith('@')) {
        destinatario = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
        if (!destinatario) return reply(`❌ Usuário não encontrado!`);
    } else {
        const chave = chaveOuMencao.toLowerCase().replace(/[^a-z0-9]/g, '');
        const usuarioEncontrado = Object.entries(pixDB).find(([_, data]) => data.chave === chave);
        if (!usuarioEncontrado) {
            return reply(`❌ Chave Pix \`${chave}\` não encontrada!\nUse \`!cadastrarchave\` para cadastrar.`);
        }
        destinatario = usuarioEncontrado[0];
    }

    if (destinatario === usuario) return reply(`❌ Você não pode transferir para si mesmo!`);

    if (!bancoDB[destinatario]) {
        return reply(`❌ @${destinatario.split('@')[0]} não possui conta bancária!`);
    }

    bancoDB[usuario].saldo -= valor;
    bancoDB[destinatario].saldo += valor;
    bancoDB[usuario].ultimaMovimentacao = new Date().toLocaleString('pt-BR');
    
    // Registra extrato para remetente
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "🔄 TRANSFERÊNCIA ENVIADA",
        valor: valor,
        descricao: `Transferência enviada para @${destinatario.split('@')[0]}`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[usuario].saldo
    });
    if (extratoDB[usuario].length > 50) extratoDB[usuario].pop();
    
    // Registra extrato para destinatário
    if (!extratoDB[destinatario]) extratoDB[destinatario] = [];
    extratoDB[destinatario].unshift({
        tipo: "🔄 TRANSFERÊNCIA RECEBIDA",
        valor: valor,
        descricao: `Transferência recebida de @${nomeUser}`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[destinatario].saldo
    });
    if (extratoDB[destinatario].length > 50) extratoDB[destinatario].pop();
    
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🔄 *TRANSFERÊNCIA REALIZADA!* 🔄\n\n` +
                  `✅ @${nomeUser} transferiu ${valor.toLocaleString()} N-Coins para @${destinatario.split('@')[0]}!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🔑 *Chave Pix utilizada:* ${chaveUsada}\n` +
                  `💳 *Seu saldo:* ${bancoDB[usuario].saldo.toLocaleString()} N-Coins\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, destinatario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== INVESTIR ====================
case 'investir':
case 'investirbanco': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    
    let bancoDB = {};
    let extratoDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const valor = parseInt(args[0]);

    if (isNaN(valor) || valor <= 0) return reply(`❌ Uso: \`!investir <valor>\``);

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    if (bancoDB[usuario].saldo < valor) {
        return reply(`❌ @${nomeUser}, você tem apenas ${bancoDB[usuario].saldo.toLocaleString()} N-Coins na conta.`);
    }

    const rendimento = Math.floor(valor * (Math.random() * 0.15 + 0.05));
    const novoSaldo = valor + rendimento;

    bancoDB[usuario].saldo -= valor;
    bancoDB[usuario].investimentos += novoSaldo;
    bancoDB[usuario].creditScore += 10;
    
    // Registra extrato
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "📈 INVESTIMENTO",
        valor: valor,
        descricao: `Investimento de ${valor.toLocaleString()} N-Coins (Rendimento: +${rendimento})`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[usuario].saldo
    });
    if (extratoDB[usuario].length > 50) extratoDB[usuario].pop();
    
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📈 *INVESTIMENTO REALIZADO!* 📈\n\n` +
                  `✅ @${nomeUser} investiu ${valor.toLocaleString()} N-Coins!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *Valor investido:* ${valor.toLocaleString()} N-Coins\n` +
                  `📊 *Rendimento:* +${rendimento.toLocaleString()} N-Coins (${Math.floor(rendimento/valor*100)}%)\n` +
                  `💵 *Total em investimentos:* ${bancoDB[usuario].investimentos.toLocaleString()} N-Coins\n` +
                  `⭐ *Credit Score:* +10 (agora ${bancoDB[usuario].creditScore})\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== PAGAR FATURA ====================
case 'pagarfatura':
case 'pagarconta': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    const extratoPath = './DADOS DO KEISEN/usuarios/extrato.json';
    
    let bancoDB = {};
    let extratoDB = {};
    
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));
    if (fs.existsSync(extratoPath)) extratoDB = JSON.parse(fs.readFileSync(extratoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const valor = parseInt(args[0]);

    if (isNaN(valor) || valor <= 0) return reply(`❌ Uso: \`!pagarfatura <valor>\``);

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    if (bancoDB[usuario].saldo < valor) {
        const limiteDisponivel = bancoDB[usuario].limite - (bancoDB[usuario].saldo - valor);
        return reply(`❌ @${nomeUser}, você tem apenas ${bancoDB[usuario].saldo.toLocaleString()} N-Coins.\n📈 Limite disponível: ${limiteDisponivel.toLocaleString()} N-Coins`);
    }

    bancoDB[usuario].saldo -= valor;
    bancoDB[usuario].creditScore += 5;
    
    // Registra extrato
    if (!extratoDB[usuario]) extratoDB[usuario] = [];
    extratoDB[usuario].unshift({
        tipo: "💳 PAGAMENTO",
        valor: valor,
        descricao: `Pagamento de fatura de ${valor.toLocaleString()} N-Coins`,
        data: new Date().toLocaleString('pt-BR'),
        saldo: bancoDB[usuario].saldo
    });
    if (extratoDB[usuario].length > 50) extratoDB[usuario].pop();
    
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));
    fs.writeFileSync(extratoPath, JSON.stringify(extratoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💳 *FATURA PAGA!* 💳\n\n` +
                  `✅ @${nomeUser} pagou ${valor.toLocaleString()} N-Coins!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💳 *Saldo atual:* ${bancoDB[usuario].saldo.toLocaleString()} N-Coins\n` +
                  `⭐ *Credit Score:* +5 (agora ${bancoDB[usuario].creditScore})\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== AUMENTAR LIMITE ====================
case 'aumentarlimite':
case 'aumentarlimitebanco': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    
    let bancoDB = {};
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!bancoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` primeiro.`);
    }

    const creditScore = bancoDB[usuario].creditScore;
    let aumento = 0;

    if (creditScore >= 800) aumento = 5000;
    else if (creditScore >= 600) aumento = 3000;
    else if (creditScore >= 400) aumento = 1000;
    else if (creditScore >= 200) aumento = 500;
    else aumento = 0;

    if (aumento === 0) {
        return reply(`❌ @${nomeUser}, seu Credit Score (${creditScore}) é muito baixo!\nPague faturas e invista para aumentar seu score.`);
    }

    bancoDB[usuario].limite += aumento;
    fs.writeFileSync(bancoPath, JSON.stringify(bancoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `⭐ *LIMITE AUMENTADO!* ⭐\n\n` +
                  `✅ @${nomeUser} teve seu limite aumentado!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📈 *Aumento:* +${aumento.toLocaleString()} N-Coins\n` +
                  `💳 *Novo limite:* ${bancoDB[usuario].limite.toLocaleString()} N-Coins\n` +
                  `⭐ *Credit Score atual:* ${bancoDB[usuario].creditScore}\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== SALDO BANCÁRIO RÁPIDO ====================
case 'saldobanco':
case 'meusaldo': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const bancoPath = './DADOS DO KEISEN/usuarios/banco.json';
    
    let bancoDB = {};
    if (fs.existsSync(bancoPath)) bancoDB = JSON.parse(fs.readFileSync(bancoPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!bancoDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não possui uma conta bancária!\nUse \`!abrirconta\` para criar sua conta.`);
    }

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💳 *SALDO BANCÁRIO* 💳\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *Conta corrente:* ${bancoDB[alvo].saldo.toLocaleString()} N-Coins\n` +
                  `💰 *Poupança:* ${bancoDB[alvo].saldoPoupanca.toLocaleString()} N-Coins\n` +
                  `📈 *Investimentos:* ${bancoDB[alvo].investimentos.toLocaleString()} N-Coins\n` +
                  `💳 *Limite disponível:* ${bancoDB[alvo].limite.toLocaleString()} N-Coins\n` +
                  `⭐ *Credit Score:* ${bancoDB[alvo].creditScore}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}


case 'criador':
await reagir(from, "😈")
try {
await keisen.sendMessage(from, {
video: { url: criador }, // 👈 agora vem por URL
gifPlayback: true,
caption: `▪︎[💧]*ᴀᴘʀᴇꜱᴇɴᴛᴀ ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ* [💧]
▪︎📌 *ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ ᴏꜰɪᴄɪᴀʟ*
▪︎©˚˚ঔৣ✞⃟ᯓ💧 *KΛRSΞR* 👑
▪︎
▪︎📞 *ᴄᴏɴᴛᴀᴛᴏ ᴅɪʀᴇᴛᴏ*
▪︎˚ঔৣ✞⃟ᯓ💧 Wa.me//+559293080023
▪︎
▪︎˚˚ঔৣ✞⃟ᯓ💧 *Canal do criador*
▪︎˚˚ঔৣ✞⃟ᯓ💧${channel}

© ${NomeDoBot}
instagram @𝚋𝚢 Yuka_Modz_`,
contextInfo: {
mentionedJid: [sender],
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channeldl,
newsletterName: NomeDoBot,
serverMessageId: ""
}
}
},
{ quoted: selo }
);

} catch (e) {
console.error("Erro na case criador:", e);
await keisen.sendMessage(from, { text: mess.error() }, { quoted: selo });
}
break;

case 'correio':
if(!q.trim().includes("/")) return reply(`Exemplo: ${prefix}correio 5591.../Oi Amor, sdds`)
var [ tx1, tx2 ] = q.trim().split("/")
bla = mess.anonymousMail(tx2)
keisen.sendMessage(`${tx1}@s.whatsapp.net`, {text: bla})
reply(`*✰ ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴘᴀʀᴀ ${tx1} ★*`)
break;

case 'destrava':
await keisen.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 

case 'perfil': {
try {
let avatarUrl;
try {
const ppUrl = await keisen.profilePictureUrl(sender, "image");
avatarUrl = ppUrl || imgperfil;
} catch (e) {
avatarUrl = imgperfil;
}

let status;
try {
const recadoUser = await keisen.fetchStatus(sender);
status = recadoUser[0]?.status?.status || "sem bio";
} catch {
status = "bio oculta ou indisponivel";
}
const conselho = (advices?.commonAdvices?.length)
? advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)]
: "nao confie nem na sua sombra...";

const num = () => Math.floor(Math.random() * 9) + 1;
const pct = () => `${num()}${num()}%`;
const programa = (Math.floor(Math.random() * 9000) + 1000).toLocaleString('pt-BR');
let dadosUser = { messages: 0, cmd_messages: 0, figus: 0, imagens: 0, videos: 0, audios: 0, documentos: 0 };

if (isGroup && groupIdscount.includes(from)) {
let indGrupo = groupIdscount.indexOf(from);
let grupoData = countMessage[indGrupo];
let userData = grupoData.numbers.find(u => u.id === sender);

if (userData) {
dadosUser = {
messages: userData.messages || 0,
cmd_messages: userData.cmd_messages || 0,
figus: userData.figus || 0,
imagens: userData.imagens || 0,
videos: userData.videos || 0,
audios: userData.audios || 0,
documentos: userData.documentos || 0
};
}
}

const cardPerfil = `https://tokito-apis.site/canvas/perfil?fundo=https://tokito-apis.site/73c4fc.png&text=${encodeURIComponent(pushname)}&subtext=${encodeURIComponent('Membro')}&logo=${encodeURIComponent(avatarUrl)}&cargo=${encodeURIComponent(isGroupAdmins ? 'ADM' : 'Membro')}&vip=${encodeURIComponent(isVip ? '✅' : '❌')}&bio=${encodeURIComponent(status)}&apikey=${API_KEY_TOKITO}`;

await keisen.sendMessage(from, {
image: { url: cardPerfil },
caption: mess.perfilkeisen(pushname, sender, status, isChVip, isCargo, dadosUser, pct, programa, conselho, NomeDoBot),
contextInfo: { ...NkChannelKk }
}, { quoted: selo })

} catch (e) {
console.log(e);
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
break;
}

case 'hd':
if ((isMedia && !info.message.videoMessage) || isQuotedImage) { post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
imagem = await downloadContentFromMessage(post, 'image');
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(`*ᴀʟᴛᴇʀᴀɴᴅᴏ ᴀ ǫᴜᴀʟɪᴅᴀᴅᴇ ᴘᴀʀᴀ ʜᴅ...* 💁‍♂️`);
try {
let link = await upload(base64) || q.trim();
return keisen.sendMessage(from, {image: {url: `https://shizuku-apis.online/api/upscale?img=${encodeURIComponent(link)}&apitoken=Nk-Petrov-And-Harunni-Petrov`}, contextInfo: NkChannelKk}, { quoted: selo });
} catch (error) {
console.error(error);
return reply(mess.error());
}
} else {
reply(`*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴘʟɪᴄᴀʀ ᴏ ᴇғᴇɪᴛᴏ ʜᴅ* 🙇‍♂️`);
}
break;

case 'menupets':
await sendMenu(from, selo, {
reaction: "🐾",
caption: linguagem.pets(prefix),
sendAudio: false
});
break;

case 'petadotar': {
const db = petsLoad();
if (db[sender]) return reply(`❌ Você já tem um pet (*${db[sender].nome}*). Use ${prefix}petabandonar se quiser começar de novo.`);
const nome = (q || "").trim();
if (!nome) return reply(`Use: ${prefix}petadotar <nome>`);
const especie = especiesPet[Math.floor(Math.random() * especiesPet.length)];
const agora = Date.now();
db[sender] = {
nome,
especie,
nivel: 1,
xp: 0,
fome: 80,
felicidade: 80,
ultimaAlimentacao: agora,
ultimoBrincar: agora,
criadoEm: new Date().toISOString()
};
petsSave(db);
await reply(`🐾 Parabéns! Você adotou um(a) *${especie}* chamado(a) *${nome}*!\n\nUse ${prefix}pet pra ver o status dele(a).`);
break;
}

case 'pet': {
const db = petsLoad();
const pet = db[sender];
if (!pet) return reply(`❌ Você ainda não tem pet. Adote um com ${prefix}petadotar <nome>.`);
petAplicarDecaimento(pet);
petsSave(db);
await reply(`╭🪷━ 𝙼𝙴𝚄 𝙿𝙴𝚃 ━🪷╮
🐾 *${pet.nome}* (${pet.especie})
⭐ Nível: ${pet.nivel} (XP: ${pet.xp}/${petXpNecessario(pet.nivel)})

🍖 Fome: ${pet.fome}/100
${petBarra(pet.fome, 100, "🟠")}
😺 Felicidade: ${pet.felicidade}/100
${petBarra(pet.felicidade, 100, "💗")}
╰🪷━━━━━━━━━━🪷╯`);
break;
}

case 'petalimentar': {
const db = petsLoad();
const pet = db[sender];
if (!pet) return reply(`❌ Você ainda não tem pet. Adote um com ${prefix}petadotar <nome>.`);
petAplicarDecaimento(pet);
const agora = Date.now();
const minutosDesde = (agora - pet.ultimaAlimentacao) / 60000;
if (pet.fome >= 95 && minutosDesde < 15) return reply(`🍖 *${pet.nome}* já está bem alimentado(a). Espera um pouco.`);
pet.fome = Math.min(100, pet.fome + 30);
pet.ultimaAlimentacao = agora;
const subiu = petGanharXp(pet, 10);
petsSave(db);
await reply(`🍖 Você alimentou *${pet.nome}*! Fome: ${pet.fome}/100${subiu ? "\n\n⭐ Subiu de nível! Agora é nível " + pet.nivel + "!" : ""}`);
break;
}

case 'petbrincar': {
const db = petsLoad();
const pet = db[sender];
if (!pet) return reply(`❌ Você ainda não tem pet. Adote um com ${prefix}petadotar <nome>.`);
petAplicarDecaimento(pet);
const agora = Date.now();
pet.felicidade = Math.min(100, pet.felicidade + 30);
pet.ultimoBrincar = agora;
const subiu = petGanharXp(pet, 10);
petsSave(db);
await reply(`🎾 Você brincou com *${pet.nome}*! Felicidade: ${pet.felicidade}/100${subiu ? "\n\n⭐ Subiu de nível! Agora é nível " + pet.nivel + "!" : ""}`);
break;
}

case 'pettreinar': {
const db = petsLoad();
const pet = db[sender];
if (!pet) return reply(`❌ Você ainda não tem pet. Adote um com ${prefix}petadotar <nome>.`);
petAplicarDecaimento(pet);
if (pet.fome < 15 || pet.felicidade < 15) return reply(`❌ *${pet.nome}* está cansado(a) ou com fome demais pra treinar. Alimente e brinque primeiro.`);
pet.fome = Math.max(0, pet.fome - 10);
pet.felicidade = Math.max(0, pet.felicidade - 10);
const subiu = petGanharXp(pet, 30);
petsSave(db);
await reply(`💪 Você treinou com *${pet.nome}* e ganhou bastante XP!${subiu ? "\n\n⭐ Subiu de nível! Agora é nível " + pet.nivel + "!" : ""}`);
break;
}

case 'petabandonar': {
const db = petsLoad();
if (!db[sender]) return reply("❌ Você não tem pet pra abandonar.");
const nomeAntigo = db[sender].nome;
delete db[sender];
petsSave(db);
await reply(`💔 Você deixou *${nomeAntigo}* ir. Pode adotar outro quando quiser.`);
break;
}

case 'opajuda': case 'ophelp': {
await reply(`╭🪷━ 𝙾𝙺𝙻𝙼𝙴𝙼 ━🪷╮
*ORDEM PARANORMAL — RPG (versão digital simplificada)*

📜 *Personagem*
${prefix}opcriar <combatente|especialista|ocultista>
${prefix}opficha [@alguém]
${prefix}opatributo <FOR|AGI|INT|VIG|PRE> <valor>
${prefix}opresetar

🎲 *Testes*
${prefix}oprolar <FOR|AGI|INT|VIG|PRE> [ND]

❤️ *Vida / Sanidade / Esforço*
${prefix}opdano <valor>
${prefix}opcurar <valor>
${prefix}opsanidade <+valor|-valor>
${prefix}opesforco <+valor|-valor>

🎒 *Inventário*
${prefix}opitem add <nome>
${prefix}opitem remover <nome>
${prefix}opitem listar

⬆️ *Evolução*
${prefix}opnex

⚔️ *Combate em grupo*
${prefix}opcombate iniciar
${prefix}opcombate entrar
${prefix}opcombate turno
${prefix}opcombate atacar <dano> @alvo
${prefix}opcombate finalizar

Funciona em grupo (combate coletivo) e no privado, solo ou em dupla.
╰🪷━━━━━━━━━━━🪷╯`);
break;
}

case 'opcriar': {
const db = opLoad();
if (db[sender]) return reply("❌ Você já tem uma ficha de Ordem Paranormal. Use `" + prefix + "opficha` pra ver, ou `" + prefix + "opresetar` pra começar de novo.");
const classeEscolhida = (q || "").trim().toLowerCase();
if (!opClasses.includes(classeEscolhida)) {
return reply(`Escolha uma classe: *combatente*, *especialista* ou *ocultista*.\nExemplo: ${prefix}opcriar combatente`);
}
const ficha = {
classe: classeEscolhida,
nex: 5,
atributos: { FOR: 0, AGI: 0, INT: 0, VIG: 0, PRE: 0 },
pv: 0, san: 0, pe: 0,
inventario: [],
criadoEm: new Date().toISOString()
};
const stats = opCalcularStats(ficha);
ficha.pv = stats.pvMax;
ficha.san = stats.sanMax;
ficha.pe = stats.peMax;
db[sender] = ficha;
opSave(db);
await reply(`🪷 Ficha criada! Classe: *${classeEscolhida.toUpperCase()}*, NEX 5%.\n\nVocê tem *${opBudgetPontos(5)} pontos* pra distribuir entre FOR, AGI, INT, VIG e PRE.\nUse: ${prefix}opatributo FOR 2\n\nVeja sua ficha com ${prefix}opficha.`);
break;
}

case 'opficha': {
const alvoFicha = menc_jid2?.[0] || sender;
const ficha = opFicha(alvoFicha);
if (!ficha) return reply(alvoFicha === sender ? `❌ Você ainda não tem ficha. Crie com ${prefix}opcriar <classe>.` : "❌ Essa pessoa não tem ficha de Ordem Paranormal.");
const stats = opCalcularStats(ficha);
const nome = alvoFicha === sender ? pushname : (getName(alvoFicha) || alvoFicha.split('@')[0]);
await reply(`╭🪷━ 𝙵𝙸𝙲𝙷𝙰 — 𝙾𝙿 ━🪷╮
👤 *${nome}*
🎭 Classe: *${ficha.classe.toUpperCase()}*
✨ NEX: *${ficha.nex}%*

❤️ PV: ${ficha.pv}/${stats.pvMax}
${opBarra(ficha.pv, stats.pvMax, "❤️")}
🧠 SAN: ${ficha.san}/${stats.sanMax}
${opBarra(ficha.san, stats.sanMax, "🟪")}
⚡ PE: ${ficha.pe}/${stats.peMax}
${opBarra(ficha.pe, stats.peMax, "⚡")}

📊 *Atributos*
FOR: ${ficha.atributos.FOR} | AGI: ${ficha.atributos.AGI} | INT: ${ficha.atributos.INT}
VIG: ${ficha.atributos.VIG} | PRE: ${ficha.atributos.PRE}

🎒 Inventário: ${ficha.inventario.length ? ficha.inventario.join(", ") : "vazio"}
╰🪷━━━━━━━━━━━🪷╯`);
break;
}

case 'opatributo': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const [attrRaw, valorRaw] = (q || "").trim().split(/\s+/);
const attr = (attrRaw || "").toUpperCase();
const valor = parseInt(valorRaw);
if (!opAtributosLista.includes(attr) || isNaN(valor)) {
return reply(`Use: ${prefix}opatributo <FOR|AGI|INT|VIG|PRE> <valor>\nExemplo: ${prefix}opatributo VIG 2`);
}
const maxPorAtributo = Math.min(5, opNexTier(ficha.nex) + 1);
if (valor < 0 || valor > maxPorAtributo) {
return reply(`❌ Esse atributo só pode ir de 0 a ${maxPorAtributo} no seu NEX atual.`);
}
const copiaAtributos = { ...ficha.atributos, [attr]: valor };
const totalUsado = Object.values(copiaAtributos).reduce((a, b) => a + b, 0);
const budget = opBudgetPontos(ficha.nex);
if (totalUsado > budget) {
return reply(`❌ Isso passaria do seu orçamento de pontos (${budget}). Você usaria ${totalUsado}.`);
}
ficha.atributos = copiaAtributos;
const stats = opCalcularStats(ficha);
ficha.pv = Math.min(ficha.pv, stats.pvMax) || stats.pvMax;
ficha.san = Math.min(ficha.san, stats.sanMax) || stats.sanMax;
ficha.pe = Math.min(ficha.pe, stats.peMax) || stats.peMax;
db[sender] = ficha;
opSave(db);
await reply(`✅ ${attr} agora é ${valor}. Pontos usados: ${totalUsado}/${budget}.`);
break;
}

case 'oprolar': {
const ficha = opFicha(sender);
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const partes = (q || "").trim().split(/\s+/);
const attr = (partes[0] || "").toUpperCase();
const nd = parseInt(partes[1]) || 15;
if (!opAtributosLista.includes(attr)) {
return reply(`Use: ${prefix}oprolar <FOR|AGI|INT|VIG|PRE> [ND]\nND padrão: 15`);
}
const dado = opRolarDado(20);
const total = dado + ficha.atributos[attr];
let resultado;
if (dado === 20) resultado = "🌟 *SUCESSO EXTREMO*";
else if (dado === 1) resultado = "💀 *FALHA CRÍTICA*";
else resultado = total >= nd ? "✅ *SUCESSO*" : "❌ *FALHA*";
await reply(`🎲 Teste de *${attr}*\nd20 (${dado}) + ${attr} (${ficha.atributos[attr]}) = *${total}* vs ND ${nd}\n\n${resultado}`);
break;
}

case 'opdano': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const dano = parseInt(q);
if (isNaN(dano) || dano < 0) return reply(`Use: ${prefix}opdano <valor>`);
ficha.pv = Math.max(0, ficha.pv - dano);
opSave(db);
let aviso = "";
if (ficha.pv === 0) aviso = "\n\n💀 PV chegou a zero! Personagem incapacitado (a critério do mestre).";
await reply(`💥 Você recebeu *${dano}* de dano.\n❤️ PV: ${ficha.pv}${aviso}`);
break;
}

case 'opcurar': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const stats = opCalcularStats(ficha);
const cura = parseInt(q);
if (isNaN(cura) || cura < 0) return reply(`Use: ${prefix}opcurar <valor>`);
ficha.pv = Math.min(stats.pvMax, ficha.pv + cura);
opSave(db);
await reply(`💚 Curou *${cura}* PV.\n❤️ PV: ${ficha.pv}/${stats.pvMax}`);
break;
}

case 'opsanidade': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const stats = opCalcularStats(ficha);
const delta = parseInt(q);
if (isNaN(delta)) return reply(`Use: ${prefix}opsanidade <+valor|-valor>\nExemplo: ${prefix}opsanidade -5`);
ficha.san = Math.max(0, Math.min(stats.sanMax, ficha.san + delta));
opSave(db);
const percentual = (ficha.san / stats.sanMax) * 100;
const disturbio = opTextoDisturbio(percentual);
await reply(`🧠 Sanidade: ${ficha.san}/${stats.sanMax}${disturbio ? "\n\n" + disturbio : ""}`);
break;
}

case 'opesforco': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const stats = opCalcularStats(ficha);
const delta = parseInt(q);
if (isNaN(delta)) return reply(`Use: ${prefix}opesforco <+valor|-valor>`);
ficha.pe = Math.max(0, Math.min(stats.peMax, ficha.pe + delta));
opSave(db);
await reply(`⚡ PE: ${ficha.pe}/${stats.peMax}`);
break;
}

case 'opitem': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
const [acao, ...restoArr] = (q || "").trim().split(/\s+/);
const nomeItem = restoArr.join(" ");
if (acao === "add" && nomeItem) {
ficha.inventario.push(nomeItem);
opSave(db);
await reply(`🎒 *${nomeItem}* adicionado ao inventário.`);
} else if (acao === "remover" && nomeItem) {
const idx = ficha.inventario.findIndex(i => i.toLowerCase() === nomeItem.toLowerCase());
if (idx === -1) return reply("❌ Item não encontrado no inventário.");
ficha.inventario.splice(idx, 1);
opSave(db);
await reply(`🗑️ *${nomeItem}* removido do inventário.`);
} else if (acao === "listar") {
await reply(`🎒 *Inventário:*\n${ficha.inventario.length ? ficha.inventario.map(i => "• " + i).join("\n") : "vazio"}`);
} else {
await reply(`Use:\n${prefix}opitem add <nome>\n${prefix}opitem remover <nome>\n${prefix}opitem listar`);
}
break;
}

case 'opnex': {
const db = opLoad();
const ficha = db[sender];
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
if (ficha.nex >= 100) return reply("🌟 Você já está no NEX máximo (100%).");
ficha.nex = Math.min(100, ficha.nex + 5);
const stats = opCalcularStats(ficha);
ficha.pv = stats.pvMax;
ficha.san = stats.sanMax;
ficha.pe = stats.peMax;
db[sender] = ficha;
opSave(db);
await reply(`⬆️ Subiu de NEX! Agora: *${ficha.nex}%*.\n\nNovos pontos de atributo disponíveis: ${opBudgetPontos(ficha.nex)} (use ${prefix}opatributo).\nPV/SAN/PE recalculados e restaurados ao máximo.`);
break;
}

case 'opresetar': {
const db = opLoad();
if (!db[sender]) return reply("❌ Você não tem ficha pra resetar.");
delete db[sender];
opSave(db);
await reply("🗑️ Ficha de Ordem Paranormal removida. Pode criar outra quando quiser.");
break;
}

case 'opcombate': {
if (!isGroup) return reply("⚔️ O combate coletivo só funciona em grupo. No privado, use os comandos normais (oprolar, opdano, etc.) direto, solo ou revezando com a dupla.");
const combateDB = opCombateLoad();
const acaoCombate = (q || "").trim().split(/\s+/)[0];

if (acaoCombate === "iniciar") {
if (combateDB[from]) return reply("⚔️ Já tem um combate rolando nesse grupo. Use `" + prefix + "opcombate finalizar` pra encerrar antes.");
combateDB[from] = { participantes: [], turno: 0, iniciado: new Date().toISOString() };
opCombateSave(combateDB);
return reply("⚔️ Combate iniciado! Quem for participar manda `" + prefix + "opcombate entrar`.");
}

if (acaoCombate === "entrar") {
if (!combateDB[from]) return reply("❌ Nenhum combate ativo. Inicie com `" + prefix + "opcombate iniciar`.");
const ficha = opFicha(sender);
if (!ficha) return reply(`❌ Crie sua ficha primeiro: ${prefix}opcriar <classe>`);
if (combateDB[from].participantes.find(p => p.id === sender)) return reply("Você já está no combate.");
const iniciativa = opRolarDado(20) + ficha.atributos.AGI;
combateDB[from].participantes.push({ id: sender, iniciativa });
combateDB[from].participantes.sort((a, b) => b.iniciativa - a.iniciativa);
opCombateSave(combateDB);
return keisen.sendMessage(from, { text: `⚔️ @${sender.split('@')[0]} entrou no combate! Iniciativa: *${iniciativa}*`, mentions: [sender] }, { quoted: selo });
}

if (acaoCombate === "turno") {
if (!combateDB[from] || !combateDB[from].participantes.length) return reply("❌ Nenhum combate ativo com participantes.");
const combate = combateDB[from];
const ordem = combate.participantes.map((p, i) => `${i === combate.turno ? "👉" : "▫️"} @${p.id.split('@')[0]} (iniciativa ${p.iniciativa})`).join("\n");
const mencoes = combate.participantes.map(p => p.id);
return keisen.sendMessage(from, { text: `⚔️ *Ordem de turno:*\n${ordem}`, mentions: mencoes }, { quoted: selo });
}

if (acaoCombate === "atacar") {
if (!combateDB[from] || !combateDB[from].participantes.length) return reply("❌ Nenhum combate ativo.");
const combate = combateDB[from];
const partes = (q || "").trim().split(/\s+/);
const dano = parseInt(partes[1]);
const alvo = menc_jid2?.[0];
if (isNaN(dano) || !alvo) return reply(`Use: ${prefix}opcombate atacar <dano> @alvo`);
const dbFichas = opLoad();
const fichaAlvo = dbFichas[alvo];
if (!fichaAlvo) return reply("❌ O alvo não tem ficha de Ordem Paranormal.");
fichaAlvo.pv = Math.max(0, fichaAlvo.pv - dano);
opSave(dbFichas);
combate.turno = (combate.turno + 1) % combate.participantes.length;
opCombateSave(combateDB);
return keisen.sendMessage(from, { text: `💥 @${alvo.split('@')[0]} recebeu *${dano}* de dano!\n❤️ PV restante: ${fichaAlvo.pv}\n\nPróximo turno liberado.`, mentions: [alvo] }, { quoted: selo });
}

if (acaoCombate === "finalizar") {
if (!combateDB[from]) return reply("❌ Nenhum combate ativo.");
delete combateDB[from];
opCombateSave(combateDB);
return reply("🏁 Combate finalizado.");
}

return reply(`Use:\n${prefix}opcombate iniciar\n${prefix}opcombate entrar\n${prefix}opcombate turno\n${prefix}opcombate atacar <dano> @alvo\n${prefix}opcombate finalizar`);
}

case 'addai': {
try {
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
if (!isBotGroupAdmins) return reply(`*ᴏ ʙᴏᴛ ᴘʀᴇᴄɪsᴀ sᴇʀ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀ ᴍᴇᴛᴀ ᴀɪ ᴀᴏ ɢʀᴜᴘᴏ.*`);
await keisen.groupParticipantsUpdate(
from,
['867051314767696@bot'],
'add'
);
reply('✅ ᴍᴇᴛᴀ ᴀɪ ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴀ ᴀᴏ ɢʀᴜᴘᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.');
} catch (e) {
console.error(e);
reply('❌ ɴãᴏ ꜰᴏɪ ᴘᴏssíᴠᴇʟ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀ ᴍᴇᴛᴀ ᴀɪ ᴀᴏ ɢʀᴜᴘᴏ.');
}
break;
}

case 'testapis': case 'apistatus': {
if (!SoDono) return reply(mess.onlyOwner());
await reply("🔎 Testando todas as APIs configuradas, aguenta uns segundinhos...");

const apiTests = [
{ nome: "Bronxys (signo/grupos/etc)", url: `https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=aries&apikey=${keisenBot}` },
{ nome: "Tokito (perfil/levelcard)", url: `https://tokito-apis.site/canvas/perfil?fundo=https://tokito-apis.site/73c4fc.png&text=teste&subtext=teste&logo=https://i.imgur.com/0.png&cargo=teste&vip=❌&bio=teste&apikey=${API_KEY_TOKITO}` },
{ nome: "KeisenAPIs (nicks)", url: `https://keisenapis.site/api/geradores/gerar-nicks?apitoken=${TOKEN}&text=teste` },
{ nome: "Shizuku (upscale)", url: `https://shizuku-apis.online/api/upscale?img=${encodeURIComponent("https://i.imgur.com/0.png")}&apitoken=Nk-Petrov-And-Harunni-Petrov` },
{ nome: "Apisnodz (IA llama)", url: `https://apisnodz.com.br/api/ias/dracarys-llama-3?prompt=teste` },
{ nome: "Invertexto", url: `https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=12345678909` },
{ nome: "Hercai (text2image)", url: `https://hercai.onrender.com/v3/text2image?prompt=teste` },
{ nome: "Delirius (noticias)", url: `https://delirius-api-oficial.vercel.app/api/noticias?language=pt-br&country=BR` },
{ nome: "API própria (CREDENTIALS_USER.API_URL)", url: API_URL },
];

let relatorio = "📋 *RELATÓRIO DE APIS*\n\n";
for (const api of apiTests) {
try {
const resp = await axios.get(api.url, { timeout: 10000, validateStatus: () => true });
if (resp.status >= 200 && resp.status < 300) {
relatorio += `✅ ${api.nome} — OK (${resp.status})\n`;
} else if (resp.status === 401 || resp.status === 403) {
relatorio += `🔑 ${api.nome} — KEY INVÁLIDA (${resp.status})\n`;
} else if (resp.status === 404) {
relatorio += `⚠️ ${api.nome} — ENDPOINT MUDOU (404)\n`;
} else {
relatorio += `⚠️ ${api.nome} — ERRO (${resp.status})\n`;
}
} catch (e) {
relatorio += `❌ ${api.nome} — FORA DO AR (${e.code || e.message})\n`;
}
}

try {
const r = await axios.get('https://api.assemblyai.com/v2/transcript', {
headers: { authorization: '22be3718b6bf42019d9cc59f70133b83' },
timeout: 10000,
validateStatus: () => true
});
if (r.status >= 200 && r.status < 300) {
relatorio += `✅ AssemblyAI (transcrição áudio) — OK (${r.status})\n`;
} else if (r.status === 401 || r.status === 403) {
relatorio += `🔑 AssemblyAI (transcrição áudio) — KEY INVÁLIDA (${r.status})\n`;
} else {
relatorio += `⚠️ AssemblyAI (transcrição áudio) — ERRO (${r.status})\n`;
}
} catch (e) {
relatorio += `❌ AssemblyAI (transcrição áudio) — FORA DO AR (${e.code || e.message})\n`;
}

await reply(relatorio);
break;
}

case 'ping': { 
try {
await keisen.sendMessage(from, { react: { text: "💧", key: info.key } });
const messageTime = Number(info.messageTimestamp) * 1000;
const responseTime = Math.abs((Date.now() - messageTime) / 1000);
const uptime = process.uptime();
const hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const isTermux = !!process.env.TERMUX_VERSION;
const ambiente = isTermux? '📱 Termux (Android)': '💻 Vps (Hospedagem)';
const estabilidade = responseTime < 0.5 ? '✅ Estável' :
responseTime < 1.0 ? '⚠️ Leve atraso' :
responseTime < 2.0 ? '🟠 Instável' :
'🔴 Instável';
const kyun = (seconds) => {
const pad = (s) => (s < 10 ? '0' : '') + s;
const hrs = Math.floor(seconds / 3600);
const mins = Math.floor((seconds % 3600) / 60);
const secs = Math.floor(seconds % 60);
return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
};
let groupName = 'Privado';
let participantes = '—';
if (isGroup) {
const groupMetadata = await keisen.groupMetadata(from);
groupName = groupMetadata.subject || 'Grupo';
participantes = groupMetadata.participants.length;
}

const acelerar = () => {
const inicio = Date.now();
for (let i = 0; i < 1e6; i++) Math.sqrt(i);
return (Date.now() - inicio) / 1000;
};
const tempoAcelerar = acelerar();

let perfil;
try {
const userId = info.key.participant || from;
perfil = await keisen.profilePictureUrl(userId, 'image');
} catch {
perfil = 'https://tokito-apis.site/14ef34.jpg';
}

const bannerUrl = `https://tokito-apis.site/canvas/ping2?ping=45&latency=50&uptime=2d+5h&memory=512MB&cpu=15%25&platform=Linux&node=v20.x&commands=1540&avatar=https%3A%2F%2Ftokito-apis.site%2F3c8eac.jpg&fundo=https%3A%2F%2Ftokito-apis.site%2F33a48e.jpg&color=%2300BFFF&apikey=ykemi191225`;

const isVideo = bannerUrl.includes('.mp4') || bannerUrl.includes('.gif');

const media = await (isVideo 
? prepareWAMessageMedia({ video: { url: bannerUrl, gifPlayback: true, mimetype: 'video/mp4' } },{ upload: keisen.waUploadToServer, mediaType: 'video', height: 1080, width: 1080 }).catch(async () => { return await prepareWAMessageMedia({ image: { url: bannerUrl } },{ upload: keisen.waUploadToServer, mediaType: 'image', height: 1080, width: 1080 }); })
: prepareWAMessageMedia({ image: { url: bannerUrl } },{ upload: keisen.waUploadToServer, mediaType: 'image', height: 1080, width: 1080 }).catch(async () => { return await prepareWAMessageMedia({ video: { url: bannerUrl, gifPlayback: true, mimetype: 'video/mp4' } },{ upload: keisen.waUploadToServer, mediaType: 'video', height: 1080, width: 1080 }); })
);

const cm = { comando: 'ping' };

const captionPing = `╭✘━𑁁━፝֟💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧፝֟━𑁁━✘╮
┃ │⌇˚₊· ͟͟͞͞💧*🎮 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳𝙴 𝙿𝙸𝙽𝙶 🎮*
┃ │⌇˚₊· ͟͟͞͞♦️ ▪︎ *${isGroup ? groupName : 'Privado'}*
┃ │⌇˚₊· ͟͟͞͞👑 ▪︎ *𝚄𝚜𝚞á𝚛𝚒𝚘:* *${pushname}*
┃ │⌇˚₊· ͟͟͞͞💧 ▪︎ *𝙿𝚒𝚗𝚐: ${responseTime.toFixed(3)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
┃ │⌇˚₊· ͟͟͞͞🕞 ▪︎ *𝙷𝚘𝚛𝚊 𝙰𝚝𝚞𝚊𝚕: ${hora1}*
┃ │⌇˚₊· ͟͟͞͞🔖 ▪︎ *𝙰𝚝𝚒𝚟𝚘 𝚑á: ${kyun(uptime)}*
┃ │⌇˚₊· ͟͟͞✔️ ▪︎ *𝙴𝚜𝚝𝚊𝚋𝚒𝚕𝚒𝚍𝚊𝚍𝚎: ${estabilidade}*
┃ │⌇˚₊· ͟͟͞͞📠 ▪︎ *𝚂𝚒𝚜𝚝𝚎𝚖𝚊: ${ambiente}*
┃ │⌇˚₊· ͟͟͞͞🏃 ▪︎ *𝙰𝚌𝚎𝚕𝚎𝚛𝚊çã𝚘: ${tempoAcelerar.toFixed(3)} 𝚜𝚎𝚐*
┃ │⌇˚₊· ͟͟͞👥️ ▪︎ *𝙿𝚊𝚛𝚝𝚒𝚌𝚒𝚙𝚊𝚗𝚝𝚎𝚜: ${participantes}*
┃ │⌇˚₊· ͟͟͞͞‼️ ▪︎ *𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝚖𝚊𝚒𝚜 𝚞𝚜𝚊𝚍𝚘: ${cm.comando}*
╰✘━𑁁━፝֟💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧፝֟━𑁁━✘╯`;

const msg = generateWAMessageFromContent(from, {
interactiveMessage: {
header: {
hasMediaAttachment: true,
...(media.videoMessage ? { videoMessage: media.videoMessage } : { imageMessage: media.imageMessage })
},
headerType: media.videoMessage ? "VIDEO" : "IMAGE",
body: { text: captionPing },
footer: { text: `${NomeDoBot}` },
nativeFlowMessage: { buttons: [], messageParamsJson: "" },
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: "📊 SISTEMA DE PING",
body: `${pushname}`,
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: bannerUrl
}
}
}
}, {});

await keisen.relayMessage(from, msg.message, {});
} catch (e) {
console.error('ERRO NO PING:', e);
await keisen.sendMessage(from, { text: '💧 Erro no ping.' }, { quoted: selo });
}}
break;
////\\\\\ comandoa novod////\\\\\ ////\\\\\ ////\\\\\ ////\\\\\
case 'totalcomando':
case 'totalcmd': {
    try {
        await keisen.sendMessage(from, { react: { text: "📊", key: info.key } });

        const fs = require('fs');
        const path = require('path');
        const arquivoPrincipal = path.join(__dirname, 'keisen.js');
        
        let total = 0;
        if (fs.existsSync(arquivoPrincipal)) {
            const conteudo = fs.readFileSync(arquivoPrincipal, 'utf-8');
            const regexCase = /case\s+['"][^'"]+['"]\s*:/g;
            const matches = conteudo.match(regexCase);
            total = matches ? matches.length : 0;
        }
        
        await keisen.sendMessage(from, { 
            text: `📊 *Total de comandos (cases):* ${total}` 
        }, { quoted: info });
        
    } catch (e) {
        console.error('ERRO NO TOTALCOMANDO:', e);
        await keisen.sendMessage(from, { text: '❌ Erro ao contar comandos.' }, { quoted: info });
    }
    break;
}
case 'ranklesbica':
case 'ranklesbicas': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    const randomL = [
        "👩‍❤️‍👩 Orgulho Sáfico",
        "💖 Paixão Arco-Íris",
        "🌈 Valquíria do Amor",
        "🎀 Laço de Safo",
        "💜 Poder Lésbico",
        "👑 Rainha da Umbanda",
        "✨ Estrela Lésbica",
        "🌸 Flor de Safo",
        "💋 Batom Roxo",
        "🍒 Cereja do Bolo"
    ];

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    // Embaralhar e pegar top 5
    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let topLesbicas = shuffled.slice(0, 5);

    let mentionsLesb = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🏳️‍🌈 *RANK DAS 5 MAIS LÉSBICAS DO GRUPO* 🏳️‍🌈\n\n';

    for (let i = 0; i < topLesbicas.length; i++) {
        const membroId = topLesbicas[i];
        mentionsLesb.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const titulo = randomL[Math.floor(Math.random() * randomL.length)];
        const porcentagem = Math.floor(Math.random() * (100 - 80 + 1) + 80);
        
        rankText += `${i+1}º ➤ @${nomeMembro} — *${titulo}* (${porcentagem}% lésbica)\n`;
    }

    rankText += '\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n';
    rankText += '\n💬 _\"Ser lésbica é resistência, amor e potência todos os dias.\"_\n';
    rankText += '🌈 _\"Respeite, ame e celebre a diversidade. Ninguém ama por acaso.\"_';

    let contextInfo = { mentionedJid: mentionsLesb };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentionsLesb };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://files.catbox.moe/8avb5y.jpg';

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankchato':
case 'rankchatos': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    const randomChato = [
        "🤬 Rei do Drama",
        "😤 Mestre do Textão",
        "💢 Encheção de Saco Premium",
        "🔊 Barulhento Master",
        "📢 Dono da Razão Absoluta",
        "😒 Resposta Seca Profissional",
        "🔄 Repetitivo Infinito",
        "⏰ Horário Comercial Humano",
        "📎 Advogado do Contra Oficial",
        "🧠 Sabe-Tudo de Internet"
    ];

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let topChatos = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🤡 *RANK DOS 5 MAIS CHATOS DO GRUPO* 🤡\n\n';

    for (let i = 0; i < topChatos.length; i++) {
        const membroId = topChatos[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const titulo = randomChato[Math.floor(Math.random() * randomChato.length)];
        const porcentagem = Math.floor(Math.random() * (100 - 80 + 1) + 80);
        
        // Porcentagem na FRENTE do nome
        rankText += `${i+1}º ➤ ${porcentagem}% @${nomeMembro} — *${titulo}*\n`;
    }

    rankText += '\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n';
    rankText += '\n💬 _\"Chatice reconhecida é o primeiro passo para a cura (ou nem isso).\"_\n';
    rankText += '😂 _\"Não leve a sério, é só uma brincadeira entre amigos!\"_';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://files.catbox.moe/8avb5y.jpg';

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankparaibano':
case 'rankparaiba':
case 'rtabacudo': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES POR NÍVEL (1,5,10,15,...,100) ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Oxente, cala a boca aí que isso tá pior que moto sem escapamento 😡📢",
        5: "5% — Vôte, quem foi o doido que disse que tu fala nordestino? Mentiu foi muito 🤡",
        10: "10% — Rapaz, isso aí tá mais perdido que timbú em feira 😒",
        15: "15% — Para de aperrear o grupo com essa zorra, visse 😤",
        20: "20% — Ô peste, tu tá arengando com todo mundo com esse sotaque fajuto 🤦‍♂️",
        25: "25% — Isso tá uma paia tão grande que deu foi gastura 🤢",
        30: "30% — Quem deixou esse cabra falar? Silencia esse infeliz aí 🤣",
        35: "35% — Tá parecendo um papagaio doente tentando falar “oxe” 😭",
        40: "40% — Já melhorou um tiquinho… mas ainda tá feio que só a gota 😑",
        45: "45% — Tá menos ruim, mas ainda dá vontade de xotar do grupo 😏",
        50: "50% — Meio a meio: metade nordestino, metade meme ambulante 🤡🔥",
        55: "55% — Já dá pra ouvir sem querer quebrar o celular 😅",
        60: "60% — Eita, agora começou a sair alguma coisa decente 😳",
        65: "65% — Tá ficando menos leso, viu? Continue assim 😎",
        70: "70% — Rapaz, já tá quase um cabra da peste de verdade 🔥",
        75: "75% — Tá porreta, já não passo tanta vergonha contigo 😁",
        80: "80% — Oxente! Agora tu tá falando direito mesmo 😮",
        85: "85% — Misericórdia, virou nordestino na marra 😂",
        90: "90% — Se tu disser que nasceu no sertão, eu acredito fácil 🤯",
        95: "95% — Pronto, já tá raiz demais, só falta arrumar a cara 🤡",
        100: "100% — Virou paraibano legítimo, agora só falta parar de mandar áudio ruim no grupo 😡📱🔥"
    };

    // Função para encontrar a frase mais próxima do nível sorteado
    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros; // ajuste conforme sua variável de membros
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    // Embaralha e pega 5 membros aleatórios
    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🍌 *RANK DOS 5 MAIS PARAIBANOS DO GRUPO* 🍌\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        
        const percent = Math.floor(Math.random() * 100) + 1; // 1 a 100
        const frase = getFrasePorcentagem(percent);
        
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/8pLhY1R.jpeg'; // imagem da Paraíba

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankrondoniense':
case 'rankrondonia':
case 'rondoniense': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES POR NÍVEL (1,5,10,15,...,100) ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Eita calorão brabo, cala a boca aí que já tá quente demais 😡🌡️",
        5: "5% — Rapaz, tu tá falando torto que nem cerca velha 🤡",
        10: "10% — Vixe, mais perdido que bezerro desmamado 😒",
        15: "15% — Para com essa zoada aí que já tá dando dor de cabeça 😤",
        20: "20% — Ô caboco, fala direito que ninguém tá entendendo 🤦‍♂️",
        25: "25% — Isso aí tá feio que só estrada cheia de buraco 🌫️",
        30: "30% — Quem deixou tu mandar áudio cedo assim, homem? 🤣",
        35: "35% — Tá parecendo galinha assustada falando 😭🐔",
        40: "40% — Melhorou um tiquinho… mas ainda tá ruim que poeira na seca 😑",
        45: "45% — Tá menos feio, mas ainda tá sofrido de ouvir 😏",
        50: "50% — Tá meio certo, meio errado… igual previsão de chuva 🤡🌧️",
        55: "55% — Agora já dá pra escutar sem passar raiva 😅",
        60: "60% — Eita, agora saiu uma fala ajeitada 😳",
        65: "65% — Tá ficando bom, viu caboco 😎",
        70: "70% — Rapaz, já tá quase falando igual povo do interior 🔥",
        75: "75% — Agora sim, tá ficando massa 😁",
        80: "80% — Vixe Maria, agora saiu bonito 😮",
        85: "85% — Misericórdia, virou caboco raiz 😂🌴",
        90: "90% — Se disser que nasceu na roça eu acredito 🤯",
        95: "95% — Pronto, já tá raiz demais, só falta aguentar o calor 😅🌡️",
        100: "100% — Virou rondoniense legítimo, já pode reclamar do calor todo dia 😡🔥"
    };

    // Função para encontrar a frase mais próxima do nível sorteado
    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros; // ajuste conforme sua variável de membros
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    // Embaralha e pega 5 membros aleatórios
    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🌴 *RANK DOS 5 MAIS RONDONIENSES DO GRUPO* 🌴\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        
        const percent = Math.floor(Math.random() * 100) + 1; // 1 a 100
        const frase = getFrasePorcentagem(percent);
        
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    // Imagem temática de Rondônia (calor, floresta, etc.) - troque a URL se quiser
    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/8pLhY1R.jpeg'; 

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankbrawl':
case 'brawlrank':
case 'rankbrawlstars': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES POR NÍVEL DE VÍCIO EM BRAWL STARS ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Nem sabe o que é Brawl Stars, acha que é briga de rua 🤡",
        5: "5% — Instalou, jogou 2 partidas e desinstalou. Fraco demais 😤",
        10: "10% — Só joga contra bot e ainda perde 😭",
        15: "15% — Confunde o super com o gadget e morre sozinho 🤦‍♂️",
        20: "20% — Tem 100 troféus e acha que é pro player 🏆",
        25: "25% — Joga no iPad da prima, só no PvE. El gato reprova 😾",
        30: "30% — Medo de P7, esconde atrás de parede o jogo todo 💀",
        35: "35% — Usa Colt e não acerta um tiro sequer 🔫😭",
        40: "40% — Já decorou o mapa, mas ainda morre pra campista 🗺️",
        45: "45% — Tem uma skin lendária (que ganhou no evento) e acha que é rei 👑",
        50: "50% — Meio viciado: já sabe o básico, mas trava na hora do super 🤡",
        55: "55% — Já fez squad com aleatório e levou xingamento 🎧",
        60: "60% — Passa 2 horas por dia tentando subir um brawler de rank 20 🕹️",
        65: "65% — Decora rota de loot, mas ainda morre pro primeiro inimigo 📉",
        70: "70% — 10 mil troféus – já dá medo nos novatos ⭐",
        75: "75% — Tem mais de 15 brawlers lendários e não para de jogar 🔥",
        80: "80% — 20 mil troféus – esquece o que é grama 🚀",
        85: "85% — Já gastou dinheiro com skin. A família desconfia 💎",
        90: "90% — 30 mil troféus – tem mais troféu que amigos 🏆",
        95: "95% — 40 mil troféus – já deveria estar no mundial 🤯",
        100: "100% — +50 mil troféus – O CELULAR É PARTE DO SEU CORPO! Viciado nível hard 😡📱🔥"
    };

    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🎮 *RANK DOS 5 MAIS VICIADOS EM BRAWL STARS* 🎮\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const percent = Math.floor(Math.random() * 100) + 1;
        const frase = getFrasePorcentagem(percent);
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    // Imagem temática do Brawl Stars (troque o link se quiser)
    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/3ZvK5tL.jpeg';

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankfree':
case 'rankff':
case 'freefire': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES DE VÍCIO EM FREE FIRE (NÍVEIS 1 a 100) ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Nunca jogou FF, acha que é joguinho de fazendinha 😾",
        5: "5% — Instalou, caiu de cabeça no pouso e desinstalou. Fraco 🍼",
        10: "10% — Joga no iPad da prima, só no PvE. Capa doido reprova 🤡",
        15: "15% — Medo de P7, esconde atrás de árvore o jogo todo 💀",
        20: "20% — Sabe mirar, mas recoil do M4A1 ainda assusta 🔫",
        25: "25% — Usa moto só pra fugir. Bunda-mole detectado 🛵",
        30: "30% — Tem uma skin lendária (que ganhou no evento) e acha que é pro 👑",
        35: "35% — Já fez squad com aleatório e levou xingamento 😤",
        40: "40% — Usa comando de voz: 'vem pegar meu Kit, porra' 🎧",
        45: "45% — Já gastou diamante com roleta. O cartão chorou 💰",
        50: "50% — Meio termo: joga, mas não passa do Diamante 📉",
        55: "55% — Decora rota de loot, mas morre pra campista 🧠",
        60: "60% — 50 kills na temporada – já acha que é o Nobre 🏆",
        65: "65% — Passa o dia jogando ranqueada e xinga o servidor 🎮",
        70: "70% — Já mandou '1v1 no Kalahari' pra desconhecido 🤬",
        75: "75% — Só larga o celular quando acaba a bateria – e o powerbank tá do lado 📱",
        80: "80% — Capa doido teria orgulho. Tu é da tropa, porra! 🔥",
        85: "85% — Já fez ragequit e voltou 5 minutos depois. Fraco, mas viciado 💀",
        90: "90% — Mira no nível 'red light', só que acerta sem querer 😎",
        95: "95% — Nível viciado supremo – sonha com a M4A1 de ouro 💎",
        100: "100% — VOCÊ É O CAPA DOIDO! Só falta parar de mandar áudio gritando no grupo 😡📱🔥"
    };

    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🔫 *RANK DOS 5 MAIS VICIADOS EM FREE FIRE* 🔫\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const percent = Math.floor(Math.random() * 100) + 1;
        const frase = getFrasePorcentagem(percent);
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/3ZvK5tL.jpeg'; // imagem do Free Fire (troque)

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'rankviciadox':
case 'rankviciadotwitter':
case 'viciadox': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES DE VÍCIO NO X (TWITTER) ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Não tem conta, acha que X é abraço 🤡",
        5: "5% — Criou conta, viu tweet e desistiu. Fraco demais 🍼",
        10: "10% — Entra uma vez por mês só pra ver foto de famoso 📸",
        15: "15% — Dá like sem ler, só pelo meme 😭",
        20: "20% — Segue 100 contas mas não posta nada 🤐",
        25: "25% — Só retuita coisa de futebol e olhe lá ⚽",
        30: "30% — Já discutiu com estranho por política e perdeu 🤦‍♂️",
        35: "35% — Passa 1 hora por dia no X, só lendo trend topic 📱",
        40: "40% — Tem 50 seguidores e acha que é influente 😎",
        45: "45% — Já bloqueou alguém porque discordou de meme 🤬",
        50: "50% — Meio termo: usa todo dia, mas não posta nada relevante 🤡",
        55: "55% — Já ficou até tarde vendo fofoca de subcelebridade 🕒",
        60: "60% — Responde post com gif achando que é engraçado 🎬",
        65: "65% — Sabe o que é 'ratio' e usa isso na discussão 📊",
        70: "70% — Tem mais de 1000 tweets e nenhum original 🔄",
        75: "75% — Já printou tweet pra enviar no zap 😂",
        80: "80% — Sabe o horário que o trending topic muda e comemora ⏰",
        85: "85% — Já xingou Elon Musk e bloqueou ele 😡🐦",
        90: "90% — Tem notificação ligada pra tudo, até pra like desconhecido 🔔",
        95: "95% — Já cancelou alguém sem saber o motivo real 🎭",
        100: "100% — VOCÊ É O VICIADO SUPREMO DO X! Dorme com o celular do lado e acorda pra ver tweet 3 da manhã 😡📱🔥"
    };

    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🐦 *RANK DOS 5 MAIS VICIADOS NO X* 🐦\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const percent = Math.floor(Math.random() * 100) + 1;
        const frase = getFrasePorcentagem(percent);
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'http://tmpfiles.org/dl/34092277/upload_1776430593132.jpg'; // imagem do X / Twitter

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'lesbica':
case 'medirlésbica': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    if (!alvo) return reply("❌ Não foi possível identificar o usuário.");

    // Mensagem de "pesquisando"
    await keisen.sendMessage(from, { text: "🔍 Pesquisando quantos % de lésbica... Aguarde um momento." });

    const nivel = Math.floor(Math.random() * 101);

    let frase;
    if (nivel === 0) frase = "0% — Heterossexualidade confirmada, nem um pingo de dúvida 😇";
    else if (nivel <= 5) frase = "1% a 5% — Passa longe, mas acha o movimento bonito 🏳️‍🌈";
    else if (nivel <= 10) frase = "6% a 10% — Só admira amiga, mas é 'só amizade' mesmo 😅";
    else if (nivel <= 20) frase = "11% a 20% — Já sentiu um 'tchã' mas nunca admitiu 🫣";
    else if (nivel <= 30) frase = "21% a 30% — Beijou amiga na brincadeira e gostou um pouco 👩‍❤️‍💋‍👩";
    else if (nivel <= 40) frase = "31% a 40% — Tem crush em famosa, mas diz que é 'só admiração' 🌟";
    else if (nivel <= 50) frase = "41% a 50% — Já pesquisou 'como saber se sou lésbica' no Google 🔍";
    else if (nivel <= 60) frase = "51% a 60% — Sente borboletas com amiga, mas ainda nega 🦋";
    else if (nivel <= 70) frase = "61% a 70% — Assume que acha mulher mais bonita que homem 💄";
    else if (nivel <= 80) frase = "71% a 80% — Já namorou homem mas não deu certo (coincidência?) 🤭";
    else if (nivel <= 90) frase = "81% a 90% — Tem orgulho de mulher, já pensa em casar com uma 💍";
    else if (nivel <= 99) frase = "91% a 99% — Assumida para os amigos, só falta contar para a família 🫂";
    else frase = "100% — LÉSBICA ASSUMIDA, ORGULHOSA E PODEROSA! Só falta parar de dar em cima da amiga hétero 😡👩‍❤️‍👩🔥";

    const nomeAlvo = alvo.split('@')[0];
    const textoFinal = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `🏳️‍🌈 *MEDIDOR LÉSBICA* 🏳️‍🌈\n\n` +
                       `@${nomeAlvo} tem *${nivel}%* de lésbica.\n\n` +
                       `💬 "${frase}"\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // Link da imagem (estável, sem bloqueio conhecido)
    const imageUrl = 'https://cdn.discordapp.com/attachments/1234567890/1234567890/lesbica.png';
    // ⚠️ Substitua pelo link real de uma imagem de sua preferência (ex: Imgur, Catbox, Discord CDN)

    try {
        await keisen.sendMessage(from, {
            image: { url: imageUrl },
            caption: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } catch (error) {
        // Se a imagem falhar (erro 429 ou link quebrado), envia apenas texto
        console.log('Erro ao enviar imagem, enviando só texto:', error.message);
        await keisen.sendMessage(from, {
            text: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}
case 'hetero':
case 'medirhetero': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    if (!alvo) return reply("❌ Não foi possível identificar o usuário.");

    await keisen.sendMessage(from, { text: "🔍 Pesquisando quantos % de hetero... Aguarde um momento." });

    const nivel = Math.floor(Math.random() * 101);

    let frase;
    if (nivel === 0) frase = "0% — Hetero? Nem sabe o que é isso. Viva a diversidade! 🌈";
    else if (nivel <= 5) frase = "1% a 5% — Acha que é hetero, mas tem umas dúvidas... 🤔";
    else if (nivel <= 10) frase = "6% a 10% — Só gosta de coisas 'normais', mas já viu um filme LGBT sem querer 😅";
    else if (nivel <= 20) frase = "11% a 20% — Fala 'é só amizade' com muita frequência 🫣";
    else if (nivel <= 30) frase = "21% a 30% — Já fez o teste do 'hetero top' e deu meio termo 🎭";
    else if (nivel <= 40) frase = "31% a 40% — Curte um bom casal hétero, mas não torce o nariz pra outros amores 💏";
    else if (nivel <= 50) frase = "41% a 50% — Hetero razoável, mas tem um pé na cultura pop diversa 🎨";
    else if (nivel <= 60) frase = "51% a 60% — Gosta de futebol, churrasco e também de ver novela das nove 📺";
    else if (nivel <= 70) frase = "61% a 70% — Já disse 'minha namorada' no diminutivo, é romântico padrão 💘";
    else if (nivel <= 80) frase = "71% a 80% — Hetero tradicional, mas aceita que as pessoas são livres 🕊️";
    else if (nivel <= 90) frase = "81% a 90% — Quase um 'hetero top' – falta só o carro rebaixado e o pagode 🚗🎶";
    else if (nivel <= 99) frase = "91% a 99% — Hetero nível hard: já usou camisa da seleção e churrasqueira no domingo 🍖🇧🇷";
    else frase = "100% — HETERO TOP CERTIFICADO! Acorda, toma café preto, vai pra academia e posta frase motivacional 💪😎🔥";

    const nomeAlvo = alvo.split('@')[0];
    const textoFinal = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `💪 *MEDIDOR DE HETERO* 💪\n\n` +
                       `@${nomeAlvo} tem *${nivel}%* de hetero.\n\n` +
                       `💬 "${frase}"\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // Link da imagem (pode trocar para uma imagem engraçada de hetero top)
    const imageUrl = 'https://i.imgur.com/2vFzQ8j.jpeg'; // exemplo genérico

    try {
        await keisen.sendMessage(from, {
            image: { url: imageUrl },
            caption: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } catch (error) {
        console.log('Erro ao enviar imagem, enviando só texto:', error.message);
        await keisen.sendMessage(from, {
            text: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}
case 'ff':
case 'jogadorff':
case 'freefire': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    if (!alvo) return reply("❌ Não foi possível identificar o usuário.");

    await keisen.sendMessage(from, { text: "🔍 Pesquisando quantos % de jogador de Free Fire... Aguarde um momento." });

    const nivel = Math.floor(Math.random() * 101);

    let frase;
    if (nivel === 0) frase = "0% — Nunca jogou FF, acha que é joguinho de fazendinha 😾";
    else if (nivel <= 5) frase = "1% a 5% — Instalou, caiu de cabeça no pouso e desinstalou. Fraco 🍼";
    else if (nivel <= 10) frase = "6% a 10% — Joga no iPad da prima, só no PvE. Capa doido reprova 🤡";
    else if (nivel <= 20) frase = "11% a 20% — Medo de P7, esconde atrás de árvore o jogo todo 💀";
    else if (nivel <= 30) frase = "21% a 30% — Sabe mirar, mas recoil do M4A1 ainda assusta 🔫";
    else if (nivel <= 40) frase = "31% a 40% — Usa moto só pra fugir. Bunda-mole detectado 🛵";
    else if (nivel <= 50) frase = "41% a 50% — Meio termo: joga, mas não passa do Diamante 📉";
    else if (nivel <= 60) frase = "51% a 60% — Decora rota de loot, mas morre pra campista 🧠";
    else if (nivel <= 70) frase = "61% a 70% — 50 kills na temporada – já acha que é o Nobre 🏆";
    else if (nivel <= 80) frase = "71% a 80% — Passa o dia jogando ranqueada e xinga o servidor 🎮";
    else if (nivel <= 90) frase = "81% a 90% — Só larga o celular quando acaba a bateria – e o powerbank tá do lado 📱";
    else if (nivel <= 99) frase = "91% a 99% — Já mandou '1v1 no Kalahari' pra desconhecido. Capa doido teria orgulho! 🔥";
    else frase = "100% — VOCÊ É O CAPA DOIDO! Já gastou diamante com roleta, tem todas as skins lendárias e dorme com o celular colado na mão. Só falta parar de mandar áudio gritando no grupo 😡📱🔥";

    const nomeAlvo = alvo.split('@')[0];
    const textoFinal = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `🔫 *MEDIDOR DE JOGADOR DE FREE FIRE* 🔫\n\n` +
                       `@${nomeAlvo} tem *${nivel}%* de jogador de FF.\n\n` +
                       `💬 "${frase}"\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // Imagem temática do Free Fire (troque o link se quiser)
    const imageUrl = 'https://i.imgur.com/3ZvK5tL.jpeg';

    try {
        await keisen.sendMessage(from, {
            image: { url: imageUrl },
            caption: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } catch (error) {
        console.log('Erro ao enviar imagem, enviando só texto:', error.message);
        await keisen.sendMessage(from, {
            text: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}
case 'brawl':
case 'jogadorbrawl':
case 'brawlstars': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    if (!alvo) return reply("❌ Não foi possível identificar o usuário.");

    await keisen.sendMessage(from, { text: "🔍 Pesquisando quantos % de jogador de Brawl Stars... Aguarde um momento." });

    const nivel = Math.floor(Math.random() * 101);

    let frase;
    if (nivel === 0) frase = "0% — Nem sabe o que é Brawl Stars, acha que é briga de rua 🤡";
    else if (nivel <= 5) frase = "1% a 5% — Instalou, jogou 2 partidas e desinstalou. Fraco demais 🍼";
    else if (nivel <= 10) frase = "6% a 10% — Só joga contra bot e ainda perde 😭";
    else if (nivel <= 20) frase = "11% a 20% — Confunde o super com o gadget e morre sozinho 🤦‍♂️";
    else if (nivel <= 30) frase = "21% a 30% — Tem 100 troféus e acha que é pro player 🏆";
    else if (nivel <= 40) frase = "31% a 40% — Joga no iPad da prima, só no PvE. El gato reprova 😾";
    else if (nivel <= 50) frase = "41% a 50% — Medo de P7, esconde atrás de parede o jogo todo 💀";
    else if (nivel <= 60) frase = "51% a 60% — Usa Colt e não acerta um tiro sequer 🔫😭";
    else if (nivel <= 70) frase = "61% a 70% — 10 mil troféus – já dá medo nos novatos ⭐";
    else if (nivel <= 80) frase = "71% a 80% — Tem mais de 15 brawlers lendários e não para de jogar 🔥";
    else if (nivel <= 90) frase = "81% a 90% — 30 mil troféus – tem mais troféu que amigos 🏆";
    else if (nivel <= 99) frase = "91% a 99% — Já gastou dinheiro com skin. A família desconfia 💎";
    else frase = "100% — VOCÊ É O BRAWL STAR SUPREMO! +50 mil troféus, o celular é parte do seu corpo, dorme com o jogo aberto e acorda já jogando. Só falta parar de mandar áudio gritando no grupo 😡📱🔥";

    const nomeAlvo = alvo.split('@')[0];
    const textoFinal = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `🎮 *MEDIDOR DE JOGADOR DE BRAWL STARS* 🎮\n\n` +
                       `@${nomeAlvo} tem *${nivel}%* de jogador de Brawl Stars.\n\n` +
                       `💬 "${frase}"\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // Imagem temática do Brawl Stars (troque o link se quiser)
    const imageUrl = 'https://i.imgur.com/3ZvK5tL.jpeg';

    try {
        await keisen.sendMessage(from, {
            image: { url: imageUrl },
            caption: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } catch (error) {
        console.log('Erro ao enviar imagem, enviando só texto:', error.message);
        await keisen.sendMessage(from, {
            text: textoFinal,
            mentions: [alvo]
        }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}
case 'rankfofoqueiro':
case 'rankfofoqueiros': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== FRASES DE VÍCIO EM FOFOQUEIRO (NÍVEIS 1 a 100) ==========
    const niveis = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    const frasesPorNivel = {
        1: "1% — Não ouve fofoca, nem espalha. É um anjo 🤐",
        5: "5% — Sabe uma fofoca ou outra, mas não conta pra ninguém 🤫",
        10: "10% — Já ouviu fofoca mas não sabe quem falou 😶",
        15: "15% — Fica com cara de paisagem quando tão fofocando perto 😑",
        20: "20% — Espalha fofoca sem querer e depois se arrepende 😅",
        25: "25% — Só acredita em fofoca se ouvir de duas pessoas diferentes 🧐",
        30: "30% — Adora um fuxico mas finge que não liga 🫣",
        35: "35% — Já disse 'não sou fofoqueiro' enquanto fofocava 🤡",
        40: "40% — Tem um grupo só pra fofocar com as amigas 📱",
        45: "45% — Fica triste quando perde o começo da fofoca 😭",
        50: "50% — Meio termo: fofoca moderado, mas espalha bem contado 🤏",
        55: "55% — Sabe todas as fofocas do bairro e ainda adiciona detalhes 🏘️",
        60: "60% — Já espalhou fofoca falsa sem querer e viu o circo pegar fogo 🔥",
        65: "65% — Tem um caderninho mental de fofocas importantes 🧠",
        70: "70% — Para tudo que tá fazendo quando sente cheiro de fofoca 👂",
        75: "75% — Consegue descobrir quem tá namorando antes da pessoa assumir 🔎",
        80: "80% — Já foi chamado de 'rádio peão' e aceitou o título 📻",
        85: "85% — Sabe fofoca de 10 anos atrás como se fosse hoje ⏳",
        90: "90% — É o primeiro a saber e o último a guardar segredo 📣",
        95: "95% — Cria fofoca do nada só pra ver o povo comentar 🎭",
        100: "100% — VOCÊ É O REI DA FOFOQUEIRA! Sabe até o que o vizinho comeu no café da manhã 😡🍵🔥"
    };

    function getFrasePorcentagem(porcentagem) {
        let maisProximo = niveis[0];
        for (let nivel of niveis) {
            if (Math.abs(nivel - porcentagem) < Math.abs(maisProximo - porcentagem)) {
                maisProximo = nivel;
            }
        }
        return frasesPorNivel[maisProximo];
    }

    let membrosGrupo = somembros;
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '👂 *RANK DOS 5 MAIS FOFOQUEIROS DO GRUPO* 👂\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        const percent = Math.floor(Math.random() * 100) + 1;
        const frase = getFrasePorcentagem(percent);
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   💬 "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/8pLhY1R.jpeg'; // imagem de fofoca (troque)

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}
case 'ranknordestino':
case 'ranknordestes': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    // ========== ARRAY COM 100 FRASES (1% a 100%) ==========
    const frasesTabacudo = [
        "", // índice 0 vazio
        "1% — Oxente, que porra de fala é essa? Tá uma merda do caralho 😡",
        "2% — Vôte, tu fala mal pra cacete, cabra burro 🤬",
        "3% — Isso tá feio pra porra, parece lata velha batendo 😤",
        "4% — Ô desgraça, cala esse beiço aí 🤡",
        "5% — Tu não engana nem um cego, peste inútil 😒",
        "6% — Rapaz, tu é ruim demais, vá se lascar 😡",
        "7% — Tá parecendo jumento doente gritando 🤬",
        "8% — Isso tá uma merda grande, visse 😤",
        "9% — Deixe de ser besta, melhora essa porcaria 😒",
        "10% — Tá feio que só o inferno 😡",
        "11% — Quem foi o fdp que te ensinou isso? 🤬",
        "12% — Ô cabra ruim da porra 😤",
        "13% — Isso tá dando é raiva 😡",
        "14% — Tá parecendo rádio quebrado do diabo 🤬",
        "15% — Para de aperrear, caralho 😤",
        "16% — Tu só fala merda 😡",
        "17% — Isso tá uma bosta gigante 🤬",
        "18% — Ô leso, melhora isso aí logo 😤",
        "19% — Tá ridículo demais 😡",
        "20% — Misericórdia, que desgraça 😤",
        "21% — Quem botou esse infeliz aqui? 🤬",
        "22% — Tá ruim pra cacete 😡",
        "23% — Isso tá uma bagunça do caralho 😤",
        "24% — Ô peste, tu só sabe encher o saco 😡",
        "25% — Tá uma vergonha da porra 🤬",
        "26% — Tu fala igual um doido 😤",
        "27% — Cala essa boca, caralho 😡",
        "28% — Tá feio demais, porra 🤬",
        "29% — Isso tá só o caos 😤",
        "30% — Sai do grupo, peste inútil 🤡",
        "31% — Tá parecendo áudio estourado do inferno 😡",
        "32% — Tu não aprende nunca, não? 🤬",
        "33% — Isso tá um lixo 😤",
        "34% — Ô desgraça, melhora isso 😡",
        "35% — Tá uma merda só 😤",
        "36% — Tu é ruim pra caralho 🤬",
        "37% — Isso tá horrível 😡",
        "38% — Cala isso aí, peste 😤",
        "39% — Já deu raiva aqui 😡",
        "40% — Misericórdia, que porcaria 🤬",
        "41% — Tá menos ruim… mas ainda uma bosta 😤",
        "42% — Já dá pra aguentar sem xingar tanto 😡",
        "43% — Ainda tá feio pra caralho 🤬",
        "44% — Melhorou, mas tu ainda é ruim 😤",
        "45% — Menos pior… só isso 😡",
        "46% — Tá saindo alguma coisa 😬",
        "47% — Já não tá tão lixo 😤",
        "48% — Tá quase prestando 😡",
        "49% — Já dá pra ouvir sem ódio 😅",
        "50% — Meio termo: nem presta nem fede 🤬",
        "51% — Tá ficando aceitável 😤",
        "52% — Melhorou um pouco 😡",
        "53% — Já dá pra não xingar direto 🤬",
        "54% — Tá criando vergonha na cara 😤",
        "55% — Já dá pra respeitar 😏",
        "56% — Tá ficando bom 😎",
        "57% — Já não passa vergonha 😤",
        "58% — Tá ajeitado 😏",
        "59% — Já dá pra ouvir de boa 😎",
        "60% — Agora sim, começou a prestar 😤",
        "61% — Tá ficando massa 😎",
        "62% — Já tá bom mesmo 😏",
        "63% — Tá ajeitado, viu 😎",
        "64% — Já dá gosto ouvir 😁",
        "65% — Tá ficando porreta 😎",
        "66% — Já tá quase lá 😏",
        "67% — Tá bom demais 😁",
        "68% — Tá muito bom já 😎",
        "69% — Tá ficando arretado 😏",
        "70% — Já tá cabra da peste 🔥",
        "71% — Tá quase raiz 😎",
        "72% — Tá muito bom mesmo 😁",
        "73% — Já tá estilo Jampa 😏",
        "74% — Tá bonito de ouvir 😎",
        "75% — Tá porreta demais 😁",
        "76% — Tá topado 🔥",
        "77% — Já tá massa 😎",
        "78% — Tá arretado mesmo 😁",
        "79% — Tá bom que só 😏",
        "80% — Oxente, agora sim 😎",
        "81% — Tá nordestino demais 😁",
        "82% — Já virou da terra 😏",
        "83% — Tá raiz mesmo 😎",
        "84% — Tá bonito demais 😁",
        "85% — Já tá completo 😏",
        "86% — Tá estilo cabra macho 😎",
        "87% — Tá perfeito já 😁",
        "88% — Tá bom que só a porra 😏",
        "89% — Já virou daqui 😎",
        "90% — Tá legítimo 😁",
        "91% — Já é de casa 😏",
        "92% — Tá raiz total 😎",
        "93% — Tá perfeito mesmo 😁",
        "94% — Já tá 100% Jampa 😏",
        "95% — Tá completo demais 😎",
        "96% — Tá brabo 🔥",
        "97% — Tá arretado da porra 😁",
        "98% — Tá perfeito, cabra 😎",
        "99% — Já virou paraibano raiz 😏",
        "100% — Pronto, virou cabra da peste de João Pessoa… agora só para de mandar áudio merda no grupo, porra 😡📱🔥"
    ];

    let membrosGrupo = somembros; // ajuste conforme seu array de membros
    if (!membrosGrupo || membrosGrupo.length === 0) {
        return reply('❌ Nenhum membro encontrado neste grupo.');
    }

    // Embaralha e pega 5 membros aleatórios
    let shuffled = [...membrosGrupo];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    let top5 = shuffled.slice(0, 5);

    let mentions = [];
    let rankText = '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n';
    rankText += '🔥 *RANK DOS 5 MAIS TABACUDO DO NORDESTE* 🔥\n\n';

    for (let i = 0; i < top5.length; i++) {
        const membroId = top5[i];
        mentions.push(membroId);
        const nomeMembro = membroId.split('@')[0];
        
        // Gera porcentagem de 1 a 100
        const percent = Math.floor(Math.random() * 100) + 1;
        const frase = frasesTabacudo[percent];
        
        rankText += `${i+1}º ➤ @${nomeMembro} — ${percent}%\n   "${frase}"\n\n`;
    }

    rankText += '•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•';

    let contextInfo = { mentionedJid: mentions };
    if (typeof NkChannelKk !== 'undefined') {
        contextInfo = { ...NkChannelKk, mentionedJid: mentions };
    }

    let imageUrl = (typeof rnkgay !== 'undefined' && rnkgay) 
        ? rnkgay 
        : 'https://i.imgur.com/8pLhY1R.jpeg'; // imagem nordestina

    let quotedMsg = (typeof selo !== 'undefined') ? selo : null;

    await keisen.sendMessage(from, {
        image: { url: imageUrl },
        caption: rankText,
        contextInfo: contextInfo
    }, { quoted: quotedMsg });

    break;
}

case 'tabela':
await keisen.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
await keisen.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selo})
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await keisen.sendMessage(from, {text: `CPF gerado com sucesso: ${cpf}`, contextInfo:{...NkChannelKk}}, {quoted: selo}) 
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
await keisen.sendMessage(from, {text: dddlist, contextInfo:{...NkChannelKk}}, {quoted: selo}) 
break

case 'gethtml':
if(!q || !isUrl(args[0])) return reply(`Modo de uso: ${prefix+command} link do site`)
try {
await replyWithReaction(`*ᴇɴᴠɪᴀɴᴅᴏ ᴇᴍ sᴇᴜ ᴘᴠ 🙇‍♂️*`, {react: {text: '✅', key: info.key}});
axios.get(args[0], { headers: {"user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"}}).then(async (res) => {
let htmlData = typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data
htmlData = htmlData.replace(/    /g, '').replace(/></g, '>\n<').replace(/> </g, '>\n<')
await keisen.sendMessage(sender, {document: Buffer.from(htmlData), fileName: q+`.html`, mimetype: 'text/html'}, {quoted: selo})}).catch(e => {return reply(mess.error())})
} catch (e) {
console.log(e)
reply(mess.error())
}
break

case 'revelar':
case 'rvisu':
case 'open':
await reagir(from, "👀");

if (JSON.stringify(info).includes("videoMessage")) {
var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var video = Xoxota?.videoMessage || info.message?.videoMessage || 
                    Xoxota?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || 
                    info.message?.viewOnceMessage?.message?.videoMessage || Xoxota?.viewOnceMessage?.message?.videoMessage;

if (video) {
            video.viewOnce = false;
            video.video = { url: video.url };
            keisen.sendMessage(from, video, { quoted: selo });
}
} else if (JSON.stringify(info).includes("imageMessage")) {
var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var image = Xoxota?.imageMessage || info.message?.imageMessage || 
                    Xoxota?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || 
                    info.message?.viewOnceMessage?.message?.imageMessage || Xoxota?.viewOnceMessage?.message?.imageMessage;

if (image) {
            image.viewOnce = false;
            image.image = { url: image.url };
            keisen.sendMessage(from, image, { quoted: selo });
}
} else if (JSON.stringify(info).includes("audioMessage") || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
var audio = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage;

if (audio) {
            if (!audio.mimetype) return;

            let buffAudio = await getFileBuffer(audio, 'audio');
            let audioFile = getRandom('.mp3');
            fs.writeFileSync(audioFile, buffAudio);

            let audioBuffer = fs.readFileSync(audioFile);
            keisen.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: false }, { quoted: selo });

            fs.rmSync(audioFile);
}
} else {
reply("• Marque uma Imagem, video ou áudio em visualização única.");
}
break//Yuka Modz

case 'calculadora':
case 'calcular':
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 
 


case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.');
await keisen.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break


case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'admins':
case 'listadmins':
case 'listaadmins':
if(!isGroup) return reply(mess.onlyGroup())
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
await mentions(ytb, groupAdmins, true)
break

case 'consultar_vip':
if(!JSON.stringify(vip).includes(sender)) return reply("Você não está incluso atualmente na lista de usuários vip(s)..")
AB = vip.map(i => i.id).indexOf(sender)
await mention(`Usuário: @${vip[AB].id.split('@')[0]}\n• Expiração: ${vip[AAB].infinito == false ? `*Seu vip irá expirar em ${vip[AB].dias} dia${vip[AB].dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do seu vip.*`}`)
break


case 'envpv':
case 'pv':{
if(!isGroup) return reply("*sᴏᴍᴇɴᴛᴇ ᴇᴍ ɢʀᴜᴘᴏs 🙇‍♂️*")
if(!menc_prt) return reply("*ᴍᴀʀǫᴜᴇ ᴀ ᴍsɢ ᴏᴜ ᴀ ᴍɪᴅɪᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ᴍᴀɴᴅᴇ ɴᴏ ᴘᴠ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*" :pink.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
pink.image = {url: pink.url}
} else if(blue && !aud_d && !purple) {
var DFC = blue
blue.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*"+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
blue.video = {url: blue.url}
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*"+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
yellow.document = {url: yellow.url}
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.ptt = true
}
reply("*ᴏʟʜᴀ ᴏ ᴍᴇᴜ ᴘᴠ sᴇɴʜᴏʀ(ᴀ).💞*")
await keisen.sendMessage(sender, DFC, {quoted: selo}).catch(e => {
console.log(e)
})
}
break


case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.Android 🚀.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./DADOS DO KEISEN/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
await keisen.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(mess.error())
}
break

case 'sender':
bla = jidNormalizedUser(isGroup ? info?.key?.participantPn || info?.key?.senderPn || await keisen?.user?.id || info?.key?.participant : info?.key?.senderPn || info?.key?.participant ||info?.key?.remoteJid);
reply(bla)
break


case 'rename':
case 'roubar':
if (!isQuotedSticker) return reply('*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...💁‍♂️*');
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
var kls = q;
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) {
return reply(`*ᴇꜱᴛᴀ ꜰᴀʟᴛᴀɴᴅᴏ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴩᴀᴄᴏᴛᴇ + ᴀᴜᴛᴏʀ 🤷‍♂️*`);
}
if (!pack || !author2) {
return reply(`*ᴄᴏᴍᴏ ᴠᴏᴄᴇ ǫᴜᴇʀ ʀᴇɴᴏᴍᴇᴀʀ ᴀ ꜰɪɢᴜʀɪɴʜᴀ ᴅᴇꜱꜱᴇ ᴊᴇɪᴛᴏ ᴀɪ? 🤦‍♂️*\n> *ᴇxᴇᴍᴩʟᴏ ᴅᴇ ᴜꜱᴏ: ${prefix + command} Nk/Petrov*`);
}
reply(mess.wait());
var bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`;
try {
var mantap = await convertSticker(bas64, author2, pack);
var sti = Buffer.from(mantap, 'base64');
keisen.sendMessage(from, {
            sticker: sti,
            contextInfo: NkChannelKk
}, { quoted: selo }).catch((err) => {
            reply(mess.error());
});

} catch (e) {
console.error(e);
reply(mess.error());
}
break;

case 'take': //by moreno modz
try {
if (!isQuotedSticker) return reply('*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...💁‍♂️*');
reply(mess.teste());
const _author = `@AnarchyZone`
const _pack = `${pushname}`;
const takeSTK = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
const prepareSTK = await convertSticker(takeSTK.toString('base64'), _author, _pack);
keisen.sendMessage(from, {
sticker: prepareSTK,
contextInfo: NkChannelKk
}, { quoted: selo }).catch((err) => {
reply(mess.error());
});
} catch (e) {
console.error(e);
reply(mess.error());
}
break;


case 'gerarlink':
case 'gdrive': {
try {
let boij, buffer, tipo, mime

if ((isMedia && info.message.imageMessage) || isQuotedImage) {
tipo = 'image'
boij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm'))
            .message.extendedTextMessage.contextInfo.message.imageMessage
: info.message.imageMessage
mime = 'image/jpeg'

} else if (
(isMedia && info.message.videoMessage && info.message.videoMessage.seconds < 30) ||
(isQuotedVideo &&
info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30)
) {
tipo = 'video'
boij = isQuotedVideo
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm'))
            .message.extendedTextMessage.contextInfo.message.videoMessage
: info.message.videoMessage
mime = 'video/mp4'

} else if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
tipo = 'audio'
boij = isQuotedAudio
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm'))
            .message.extendedTextMessage.contextInfo.message.audioMessage
: info.message.audioMessage
mime = 'audio/mpeg'

} else {
return reply('📎 Marque uma imagem, vídeo (até 30s) ou áudio.')
}

await reagir(from, '⏳')

buffer = await getFileBuffer(boij, tipo)

const link = await upload(buffer)

await keisen.sendMessage(
from,
{
text:
`✅ *Link gerado com sucesso!*\n\n` +
`📂 Link: ${link}`,
},
{ quoted: selo }
)

await reagir(from, '✅')
} catch (e) {
console.error(e)
await reagir(from, '❌')
reply('❌ Erro ao gerar link.')
}
}
break;

case 'qc':
if(!q) return reply(`- Exemplo: ${prefix+command} ${NomeDoBot}`)
reply(mess.teste());
const text = `${q}`
const username2 = `${pushname}`
try {
ppimg = await keisen.profilePictureUrl(sender, 'image')
} catch {
ppimg = imgperfil
}
const { writeExifImg } = require('./DADOS DO KEISEN/INFO_KEISEN/lib/exif')
keisen.sendImageAsSticker = async (jid, path, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
} else {
            buffer = await imageToWebp(buff)
}
await keisen.sendMessage(jid, { sticker: { url: buffer }, ...options})
return buffer
}
const avatar = `${ppimg}`
const json = { "type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{ "entities": [], "avatar": true, "from": { "id": 1, "name": username2, "photo": { "url": avatar }
}, "text": text, "replyMessage": {}
}
]
};
 response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
sendImageAsSticker(keisen, from, buffer, selo, { packname: pushname, author: NomeDoBot, 
contextInfo: {...NkChannelKk}
}, {quoted: selo})
})
break

case 'cep':
try {
if (!q.trim()) return reply("digite o CEP que deseja buscar informações..");
const ABC = await fetchJson(`${keisen_URL}/api-bronxys/consultacep?cep=${q}&apikey=${keisenBot}`);
reply(mess.textCep(ABC));
} catch (e) {
return reply(mess.error());
}
break;


case 'infogp':
case 'regras':
case 'infogrupo':
case 'ig':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
await reagir(from, "⏳");
try {
let ppUrl;
try { ppUrl = await keisen.profilePictureUrl(from, 'image');
} catch { ppUrl = semimg;
}
const keisenDesc = await keisen.groupMetadata(from); 
const groupAdmins = keisenDesc.participants.filter(p => p.admin);
const groupMembers = keisenDesc.participants;
const criadorJid = normalizar(keisenDesc.subjectOwner);
const descricao = keisenDesc.desc || 'Sem descrição disponível.';
const metaCorrigido = { ...keisenDesc, subjectOwner: criadorJid, desc: descricao };
await keisen.sendMessage(from, {
            image: { url: ppUrl },
            caption: mess.textInfoGrupo(metaCorrigido, groupAdmins, groupMembers, prefix, moment),
            contextInfo: { ...NkChannelKk, mentionedJid: [criadorJid, ...groupAdmins.map(v => v.id)] }
}, { quoted: selo });

} catch (e) {
console.error(e);
reply(mess.error());
}
break;


case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/keisenbot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(async(error) => {
reply(mess.error())
})
break

case 'lermais': case 'morechat': case 'spoiler':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break

case 'obesidade': case 'obeso':
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await replyWithReaction(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`, {react: {text: '😸', key: info.key}});
} else if (resultado <= 18.5 || resultado <= 24.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`, {react: {text: '👍', key: info.key}});
} else if (resultado <= 25 || resultado <= 29.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`, {react: {text: '🫤', key: info.key}});
} else if (resultado <= 30 || resultado <= 39.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`, {react: {text: '🤨', key: info.key}});
} else if (resultado > 40) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`, {react: {text: `😵`, key: info.key}});
}
break

case 'contardias': case 'countdays':
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
var tomp = await timeDate('DD/MM/YYYY')
countDay = await countDays(q.split("/"), tomp.split("/"))
reply(`*${countDay}* dia(s).`)
} catch(error) {
return reply(mess.error())
}
break


case 'idade':
if (!q) return reply(`- Exemplo: ${prefix}idade 23/12/2007`)
try {
let txt; 
const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/
if (!regexData.test(q)) return reply(`- Exemplo: ${prefix}idade 23/12/2007`)
const [dia, mes, ano] = q.split('/').map(Number)
const dataNascimento = new Date(ano, mes - 1, dia)
const hoje = new Date()
if (dataNascimento > hoje || isNaN(dataNascimento)) {
return reply(`*ᴄᴏʟᴏǫᴜᴇ ᴅᴀ ғᴏʀᴍᴀ ᴄᴇʀᴛᴀ ʙᴀɪᴛᴏʟᴀ 😡*`)
}
const diffMs = hoje - dataNascimento
const idadeData = new Date(diffMs)
const anos = idadeData.getUTCFullYear() - 1970
const meses = idadeData.getUTCMonth()
const dias = idadeData.getUTCDate() - 1
const diasVividos = Math.floor(diffMs / (1000 * 60 * 60 * 24))
const horasVividas = diasVividos * 24
const minutosVividos = horasVividas * 60
const proximoAniversario = new Date(hoje.getFullYear(), mes - 1, dia)
if (proximoAniversario <= hoje) proximoAniversario.setFullYear(hoje.getFullYear() + 1)
const diasParaAniversario = Math.ceil((proximoAniversario - hoje) / (1000 * 60 * 60 * 24))
txt = mess.idade(q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot).trim()
keisen.sendMessage(from, {video: {url: idade}, gifPlayback: true, caption: txt, contextInfo:{...NkChannelKk}}, {quoted: selo})
} catch (e) {
console.log(e)
}
break


case 'qrcode': case 'gerarqr':
if (!q) return reply('Insira um link ou texto para que eu possa gerar o qr code..')
try {
await keisen.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, caption: `${q}`}, {quoted: selo})
} catch (e) {
return reply(mess.error());
}
break

case 'perfil2': { //Criado por Lm
try {
const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;
if (mentionMessage) {
            await reply("*Gerando um personalidade aleatória dessa pessoa, aguarde um momento... 🤗*");            
            const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];            
            const getProfileUrl = await keisen.profilePictureUrl(mentionMessage, 'image').catch(() => imgperfil);
const types = {genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍❤️‍👩"], hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Jogar video-gamer 🎮"], professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"], favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"], favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"], favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"]};
            function getResults() {
                return {genero: randomFromArray(types.genders), hobbie: randomFromArray(types.hobbies), job: randomFromArray(types.professions), clima: randomFromArray(types.favoriteTimesOfDay), estilo_musical: randomFromArray(types.favoriteMusicGenres), temperatura: randomFromArray(types.favoriteTemperatura)
                }            }
           
            const b = getResults();
            await keisen.sendMessage(from, { image: { url: getProfileUrl, }, caption: mess.perfil2(mentionMessage, b), mentions: [mentionMessage, sender]}, {
                quoted: selo
            });
}
else {
            reply("Mencione o '@' ou a mensagem de alguém...");
}
} catch (err) {
console.error(err);
reply(mess.error());
}
break;
}

case 'dinextenso': 
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(error) {
reply(mess.error())
}
break

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return reply("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(error) {reply(mess.error())}
} else if(command === "validarcnpj") {
if(!q) return reply("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return reply("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(error) {reply(mess.error())}
}
break

case 'createimg': case 'texttoimage': case 'imagine':
if(!q) return reply(`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix+command} macaco dirigindo uma bmw`);
try {
await replyWithReaction('Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...', {react: {text: '🎨', key: info.key}});
dataResultAI = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`);
await keisen.sendMessage(from, {image: {url: dataResultAI.url}}, {quoted: selo});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: '❌', key: info.key}});
}
break

case 'emoji': case 'semoji':
try {
if (!q.trim()) return reply(`Você está usando o comando de forma errada, use: *${prefix+command} [emj]/[pltf]*\n—\n• *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels, openmoji, emojidex, htc, lg, mozilla, softbank, au_kddi`)
if (!q.includes("/")) return reply(`Está faltando a */*, para separar o emoji e plataforma.\n• Por exemplo: ${prefix+command} 🏃‍♂️/apple`);
reply(mess.wait());
var [emojiInput, platform] = q.split("/");
var { emojisData } = await emoji(emojiInput);
if (emojisData && emojisData[platform.toLowerCase()]) {
await sendStickerFromUrl(from, emojisData[platform.toLowerCase()]);
} else {
return reply(`Emoji '${emojiInput}' não encontrado!`);
}
} catch(error) {
reply(mess.error())
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(mess.wait())
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`
sd = `↳Feito pelo(a) usuário(a): ${pushname}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
await keisen.sendMessage(from, {sticker: sti}, {quoted: selo})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'rbale':
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(mess.wait())
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `↳Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`)
var sti = new Buffer.from(mantap, 'base64');
await keisen.sendMessage(from, {sticker: sti}, {quoted: selo}).catch(async(error) => {
reply(mess.error()); 
})
break


case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage

if (boij) {
var packnameStk = `${pushname}`
var authorSticker = `${NomeDoBot}`
reply(mess.wait())
owgi = await getFileBuffer(boij, 'image')
let ENC_MEDIA1 = await sendImageAsSticker(keisen, from, owgi, selo, {
            packname: packnameStk,
            author: authorSticker,
            contextInfo: NkChannelKk
})
await DLT_FL(ENC_MEDIA1)

} else if (boij2 && boij2?.seconds < 11) {
var packnameStk = `${pushname}`
var authorSticker = `${NomeDoBot}`
reply(mess.wait())
owgi = await getFileBuffer(boij2, 'video')
let ENC_MEDIA2 = await sendVideoAsSticker(keisen, from, owgi, selo, {
            packname: packnameStk,
            author: authorSticker,
            contextInfo: NkChannelKk
})
await DLT_FL(ENC_MEDIA2)

} else {
reply(`*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴏ ᴍᴀxɪᴍᴏ ᴅᴇ 10 ꜱᴇɢᴜɴᴅᴏꜱ 🙇‍♂️*`)
}
break


case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if (boij2) {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(keisen, from, owgi, selo, { 
packname: pack, 
author: author2,
contextInfo: NkChannelKk
})
await DLT_FL(encmediaa)
} else if (boij && boij.seconds < 11) {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(keisen, from, owgi, selo, { 
packname: pack, 
author: author2,
contextInfo: NkChannelKk
})
await DLT_FL(encmedia)
} else {
reply(`*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴏ ᴍᴀxɪᴍᴏ ᴅᴇ 9.9 ꜱᴇɢᴜɴᴅᴏꜱ 🙇‍♂️*`)
}
break

case 'transcrever':
case 'totext': {
if (!isQuotedAudio && !(isMedia && info.message.audioMessage)) {
return reply('*💬 ᴍᴀʀǫᴜᴇ ᴜᴍ ᴀᴜ́ᴅɪᴏ...* 🔊');
}
await reagir(from, "👂");
try {
const audioMsg = isQuotedAudio
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
            : info.message.audioMessage;

const stream = await downloadContentFromMessage(audioMsg, 'audio');
let buffer = Buffer.from([]);
for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
}

const audioUrl = await upload(buffer);

const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
            method: 'POST',
            headers: {
                'authorization': '22be3718b6bf42019d9cc59f70133b83',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                audio_url: audioUrl,
                language_code: 'pt'
            })
});

const transcriptData = await transcriptRes.json();
if (!transcriptData.id) return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴇɴᴠɪᴀʀ ᴏ ᴀᴜ́ᴅɪᴏ ᴘᴀʀᴀ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ... 🔖*');

const id = transcriptData.id;
let status = 'queued';
let transcriptResult;

while (status === 'queued' || status === 'processing') {
            await new Promise(resolve => setTimeout(resolve, 4000));
            const statusRes = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
                headers: { 'authorization': '22be3718b6bf42019d9cc59f70133b83' }
            });
            transcriptResult = await statusRes.json();
            status = transcriptResult.status;
}

if (status !== 'completed') return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴇꜱꜱᴇ ᴀᴜ́ᴅɪᴏ, ꜰᴏɪ ᴅɪꜰɪ́ᴄɪʟ ᴀᴛᴇ́ ᴘʀᴀ ᴍɪᴍ...* 😵‍💫');

let textoFinal = transcriptResult.text || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';

reply(`*ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ ᴅᴇ ᴀᴜ́ᴅɪᴏ 🗣️*\n-\n> *${textoFinal}*`);
} catch (e) {
console.error('erro ao transcrever:', e);
reply(mess.error());
}

break;
}

case 'suicidio':
setTimeout(() => { reagir(from, `😕`) }, 100)
{
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!isGroup) return reply(mess.onlyGroup());
await reply(`*ʟᴇᴍʙʀᴇ-ꜱᴇ ${pushname}... ᴠᴏᴄᴇ̂ ꜱᴇᴍᴘʀᴇ ᴇꜱᴛᴀʀᴀ́ ᴇᴍ ɴᴏꜱꜱᴏꜱ ᴄᴏʀᴀᴄ̧ᴏ̃ᴇꜱ...* ☁️😔`)
await sleep(3000)
await keisen.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
await reply('*ᴀɢᴏʀᴀ ǫᴜᴇ ᴊᴀ́ ꜱᴇ ꜰᴏɪ... ᴠᴀᴍᴏꜱ ꜰᴀʟᴀʀ ᴍᴀʟ ᴅᴇʟᴇ ᴋᴋᴋ* 😈')
}
break


case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
await keisen.sendMessage(from, {image: buff}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
} catch(error) {
console.log(error)
}
break

case 'togif': 
if(!isQuotedSticker) return reply('Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.');
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./ARQUIVES/funcoes/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./DADOS DO KEISEN/data/media/sticker/convert.webp", getBufferWebP);
outputFile = "./DADOS DO KEISEN/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await keisen.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: selo}).catch(async(error) => {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
console.log(error)
});
}
} catch(error) {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
console.log(error)
};
break


case 'conselhobiblico': case 'conselhosbiblico': case 'conselhosb': case 'conselhob':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.biblicalAdvice[Math.floor(Math.random() * advices.biblicalAdvice.length)], {react: {text: '😌', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break

case 'vidente': case 'futuro': case 'previsao': {
const previsoesVidente = [
"🪷 Os astros sussurram que algo bom está prestes a cruzar seu caminho. Fique de olhos abertos.",
"🪷 Uma decisão que você anda enrolando vai se resolver sozinha nos próximos dias.",
"🪷 Cuidado com promessas vazias essa semana — nem tudo que reluz é lótus.",
"🪷 Uma conversa antiga vai voltar à tona. Escute mais do que fala.",
"🪷 O universo está pedindo paciência. As coisas boas estão a caminho, só não no seu tempo.",
"🪷 Alguém está pensando em você nesse exato momento.",
"🪷 Uma surpresa financeira pode aparecer, mas não conte com ela ainda.",
"🪷 Seu instinto está certo dessa vez. Confie nele.",
"🪷 Um ciclo está se encerrando — e isso é bom, mesmo que pareça estranho agora.",
"🪷 Evite decisões importantes às pressas nos próximos 3 dias.",
"🪷 Uma amizade vai se fortalecer de um jeito que você não esperava.",
"🪷 Os sinais apontam pra uma virada positiva no fim do mês.",
"🪷 Tome cuidado com fofocas — algumas bocas não merecem sua confiança agora.",
"🪷 Você está mais perto de uma resposta do que imagina.",
"🪷 Uma viagem ou mudança de ares está nos seus horizontes.",
];
const escolhida = previsoesVidente[Math.floor(Math.random() * previsoesVidente.length)];
await keisen.sendMessage(from, { react: { text: "🔮", key: info.key } });
await reply(`╭🪷━ 𝙴𝙴𝙼 𝙻𝙴𝙴𝙴𝚄𝙳𝙴𝚒... ━🪷╮\n\n${escolhida}\n\n╰🪷━ 𝚆𝙷𝙸𝚃𝙴 𝙻𝙾𝚃𝚄𝚂 ━🪷╯`);
break;
}

case 'conselhos': case 'conselho':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)], {react: {text: '😌', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break
 
case 'cantadas': case 'cantada':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)], {react: {text: '😼', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break

case 'fatos': case 'curiosidades':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.curiousFacts[Math.floor(Math.random() * tools.curiousFacts.length)], {react: {text: '🙀', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break


case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`);
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`);
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await mention(`Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*`);
break


case 'infocriador':
await keisen.sendMessage(from, {audio: fs.readFileSync(`./DADOS DO KEISEN/data/media/audios/info_criador.mp3`), mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{ quoted: selo });
break;


case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await keisen.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: selo})
break

case 'recusar_convite':
if(!SoDono) return reply(mess.onlyOwner());
await keisen.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`}, {quoted: selo});
break


case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
await keisen.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)}, {quoted: selo});
await keisen.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}}, {quoted: selo});
} catch(error) {
reply(mess.error())
}
break

case 'mytag':
inff = `${pushname}`
keisen.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'getbio':
case 'getb': {
if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
reply("*ᴩᴇɢᴀɴᴅᴏ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ✨*");
try {
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
const getbb = `${numero}@s.whatsapp.net`;
let recadoW;
try {
            const recadoUser = await keisen.fetchStatus(getbb);
            recadoW = recadoUser[0]?.status?.status || "*privado*";
} catch {
            recadoW = "*privado*";
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await keisen.sendMessage(
            from,
            {
                text: `*🗿 | ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n•\n> ${recadoW}`,
                contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
            },
            { quoted: selo }
);
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'getperfil': {
if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
reply("*ᴩᴇɢᴀɴᴅᴏ ᴏ ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 🙇‍♂️*");
let ppimgUrl;
try {
ppimgUrl = await keisen.profilePictureUrl(`${numero}@s.whatsapp.net`, 'image');
} catch {
ppimgUrl = imgperfil;
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await keisen.sendMessage(
from,
{
            image: { url: ppimgUrl },
            caption: `*⚡ | ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n> *🗿 ꜱᴇ ᴄᴀꜱᴏ ᴠᴏᴄᴇ ǫᴜᴇɪʀᴀ ᴩᴇɢᴀʀ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴜꜱᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ:* ${prefix}getbio`,
            contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
},
{ quoted: selo }
);
}
break;

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.Android 🚀.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./DADOS DO KEISEN/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
await keisen.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(mess.error())
}
break

//=============[ FIM RANDOM CMD ]=========\\

//===========[ PLAQS ]=============\\

case 'plaq': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq1':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq2':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq3':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq4':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq5':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq6':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq7':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break
case 'plaq8':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq9': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
sendMsg = keisen.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break
//==============[ FIM PLAQS]============\\

//==============[ comandos de rpgs]============\\
// ==================== SISTEMA DE POLÍCIA RPG ====================

// Arquivos do sistema
const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
const crimesPath = './crimes.json';
const prisaoPath = './prisao.json';
const armasPath = './armas.json';

// Inicializa bancos de dados
let policiaDB = {};
let crimesDB = {};
let prisaoDB = {};
let armasDB = {};

if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
if (fs.existsSync(crimesPath)) crimesDB = JSON.parse(fs.readFileSync(crimesPath));
if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));
if (fs.existsSync(armasPath)) armasDB = JSON.parse(fs.readFileSync(armasPath));

function savePolicia() { fs.writeFileSync(policiaPath, JSON.stringify(policiaDB, null, 2)); }
function saveCrimes() { fs.writeFileSync(crimesPath, JSON.stringify(crimesDB, null, 2)); }
function savePrisao() { fs.writeFileSync(prisaoPath, JSON.stringify(prisaoDB, null, 2)); }
function saveArmas() { fs.writeFileSync(armasPath, JSON.stringify(armasDB, null, 2)); }

// ========== LISTAR POLÍCIAS ==========
case 'listarpolicias':
case 'policias': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `👮 *CORPORAÇÕES POLICIAIS* 👮\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🔵 *POLÍCIA FEDERAL (PF)*\n` +
                  `   👑 Chefe: Diretor-Geral\n` +
                  `   ⭐ Rank Inicial: Agente\n` +
                  `   💰 Bônus: 5000 N-Coins\n\n` +
                  `🔴 *POLÍCIA RODOVIÁRIA FEDERAL (PRF)*\n` +
                  `   👑 Chefe: Inspetor-Geral\n` +
                  `   ⭐ Rank Inicial: Agente\n` +
                  `   💰 Bônus: 4500 N-Coins\n\n` +
                  `⚫ *POLÍCIA CIVIL (PC)*\n` +
                  `   👑 Chefe: Delegado-Geral\n` +
                  `   ⭐ Rank Inicial: Investigador\n` +
                  `   💰 Bônus: 4000 N-Coins\n\n` +
                  `🟢 *POLÍCIA MILITAR (PM)*\n` +
                  `   👑 Chefe: Comandante-Geral\n` +
                  `   ⭐ Rank Inicial: Soldado\n` +
                  `   💰 Bônus: 3500 N-Coins\n\n` +
                  `🟡 *GUARDA MUNICIPAL (GM)*\n` +
                  `   👑 Chefe: Inspetor-Geral\n` +
                  `   ⭐ Rank Inicial: Guarda\n` +
                  `   💰 Bônus: 3000 N-Coins\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 Use \`!registrarpolicia <corporação>\` para se alistar!\n` +
                  `Exemplo: \`!registrarpolicia federal\`\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== REGISTRAR POLÍCIA ==========
case 'registrarpolicia':
case 'alistarpolicia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let coinsDB = {};
    let policiaDB = {};
    
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const corporacao = args[0]?.toLowerCase();

    const corporacoes = {
        federal: { nome: "Polícia Federal", sigla: "PF", rankInicial: "Agente", chefe: "Diretor-Geral", bonus: 5000, cor: "🔵", emoji: "👮‍♂️" },
        prf: { nome: "Polícia Rodoviária Federal", sigla: "PRF", rankInicial: "Agente", chefe: "Inspetor-Geral", bonus: 4500, cor: "🔴", emoji: "🚔" },
        civil: { nome: "Polícia Civil", sigla: "PC", rankInicial: "Investigador", chefe: "Delegado-Geral", bonus: 4000, cor: "⚫", emoji: "🔍" },
        militar: { nome: "Polícia Militar", sigla: "PM", rankInicial: "Soldado", chefe: "Comandante-Geral", bonus: 3500, cor: "🟢", emoji: "🎖️" },
        guarda: { nome: "Guarda Municipal", sigla: "GM", rankInicial: "Guarda", chefe: "Inspetor-Geral", bonus: 3000, cor: "🟡", emoji: "🏛️" }
    };

    if (!corporacao || !corporacoes[corporacao]) {
        return reply(`❌ Corporação inválida!\nUse \`!listarpolicias\` para ver as opções disponíveis.`);
    }

    if (policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você já é policial da ${policiaDB[usuario].nome}!`);
    }

    const escolhida = corporacoes[corporacao];

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += escolhida.bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    // Gera matrícula
    const matricula = `${escolhida.sigla}${Math.floor(Math.random() * 90000) + 10000}`;
    
    policiaDB[usuario] = {
        corporacao: corporacao,
        nome: escolhida.nome,
        sigla: escolhida.sigla,
        matricula: matricula,
        rank: escolhida.rankInicial,
        xp: 0,
        xpNecessaria: 100,
        prisões: 0,
        multas: 0,
        tiros: 0,
        dataAlistamento: new Date().toLocaleString('pt-BR'),
        arma: null
    };
    fs.writeFileSync(policiaPath, JSON.stringify(policiaDB, null, 2));

    const alistamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                           `👮 *ALISTAMENTO CONCLUÍDO!* 👮\n\n` +
                           `🎉 @${nomeUser} agora é policial da ${escolhida.cor} ${escolhida.nome}!\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `📛 *Matrícula:* ${matricula}\n` +
                           `🎖️ *Rank Inicial:* ${escolhida.rankInicial}\n` +
                           `👑 *Comandante:* ${escolhida.chefe}\n` +
                           `💰 *Bônus:* +${escolhida.bonus} N-Coins\n` +
                           `📅 *Data de alistamento:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `⚔️ *COMANDOS:*\n` +
                           `   👮 \`!perfilpolicia\` - Ver seu perfil\n` +
                           `   🚔 \`!patrulhar\` - Patrulhar as ruas\n` +
                           `   🔍 \`!investigar @user\` - Investigar suspeito\n` +
                           `   ⛓️ \`!prender @user\` - Prender criminoso\n` +
                           `   🔓 \`!soltar @user\` - Soltar preso\n` +
                           `   📋 \`!crimes\` - Ver lista de crimes\n\n` +
                           `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: alistamentoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERFIL POLICIAL ==========
case 'perfilpolicia':
case 'meuperfilpolicia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let policiaDB = {};
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!policiaDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não é policial!\nUse \`!registrarpolicia <corporação>\` para se alistar.`);
    }

    const dados = policiaDB[alvo];
    const progresso = Math.floor((dados.xp / dados.xpNecessaria) * 100);
    
    const corporacoesCores = {
        federal: "🔵", prf: "🔴", civil: "⚫", militar: "🟢", guarda: "🟡"
    };
    const cor = corporacoesCores[dados.corporacao] || "👮";

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `${cor} *PERFIL POLICIAL* ${cor}\n\n` +
                  `👤 *Policial:* @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📛 *Matrícula:* ${dados.matricula}\n` +
                  `🏛️ *Corporação:* ${dados.nome}\n` +
                  `🎖️ *Rank:* ${dados.rank}\n` +
                  `📈 *XP:* ${dados.xp}/${dados.xpNecessaria} (${progresso}%)\n` +
                  `⛓️ *Prisões:* ${dados.prisões}\n` +
                  `📝 *Multas:* ${dados.multas}\n` +
                  `🔫 *Tiros:* ${dados.tiros}\n` +
                  `🔫 *Arma:* ${dados.arma || "Nenhuma"}\n` +
                  `📅 *Alistamento:* ${dados.dataAlistamento}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `⚔️ *AÇÕES:*\n` +
                  `   🚔 \`!patrulhar\` - Ganhar XP\n` +
                  `   🔍 \`!investigar @user\` - Investigar\n` +
                  `   ⛓️ \`!prender @user\` - Prender\n` +
                  `   🔓 \`!soltar @user\` - Soltar\n` +
                  `   📋 \`!crimes\` - Ver crimes\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== PATRULHAR (GANHAR XP) ==========
case 'patrulhar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let policiaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não é policial!\nUse \`!registrarpolicia\` primeiro.`);
    }

    const ganhoXP = Math.floor(Math.random() * 30) + 20;
    const ganhoCoins = Math.floor(Math.random() * 200) + 100;
    const ocorrencias = [
        "🚔 Abordou um veículo suspeito",
        "👮 Atendeu uma ocorrência de vizinhança",
        "🚨 Patrulhou o centro da cidade",
        "🔍 Encontrou uma denúncia anônima",
        "📝 Registrou um boletim de ocorrência"
    ];
    const ocorrencia = ocorrencias[Math.floor(Math.random() * ocorrencias.length)];

    policiaDB[usuario].xp += ganhoXP;
    
    // Verifica promoção
    let promoveu = false;
    let novoRank = policiaDB[usuario].rank;
    
    while (policiaDB[usuario].xp >= policiaDB[usuario].xpNecessaria) {
        promoveu = true;
        policiaDB[usuario].xp -= policiaDB[usuario].xpNecessaria;
        policiaDB[usuario].xpNecessaria = Math.floor(policiaDB[usuario].xpNecessaria * 1.3);
        
        const ranks = {
            federal: ["Agente", "Agente Especial", "Delegado", "Delegado Regional", "Diretor"],
            prf: ["Agente", "Inspetor", "Inspetor Chefe", "Superintendente", "Diretor-Geral"],
            civil: ["Investigador", "Comissário", "Delegado", "Delegado Geral", "Chefe de Polícia"],
            militar: ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"],
            guarda: ["Guarda", "Guarda Civil", "Inspetor", "Supervisor", "Inspetor Geral"]
        };
        
        const rankLista = ranks[policiaDB[usuario].corporacao] || ["Agente", "Oficial", "Chefe"];
        const rankAtualIndex = rankLista.indexOf(policiaDB[usuario].rank);
        if (rankAtualIndex < rankLista.length - 1) {
            policiaDB[usuario].rank = rankLista[rankAtualIndex + 1];
            novoRank = policiaDB[usuario].rank;
        }
    }
    
    fs.writeFileSync(policiaPath, JSON.stringify(policiaDB, null, 2));

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += ganhoCoins;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                `🚔 *PATRULHA REALIZADA* 🚔\n\n` +
                `👮 @${nomeUser}\n` +
                `📋 *Ocorrência:* ${ocorrencia}\n\n` +
                `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                `✨ *XP Ganho:* +${ganhoXP}\n` +
                `💰 *Coins Ganhos:* +${ganhoCoins}\n`;

    if (promoveu) {
        texto += `\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`;
        texto += `🎊 *PROMOÇÃO!* 🎊\n`;
        texto += `🎖️ *Novo Rank:* ${novoRank}\n`;
        texto += `👏 *Parabéns, policial!*\n`;
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== LISTAR CRIMES ==========
case 'crimes':
case 'listarcrimes': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📜 *CÓDIGO PENAL* 📜\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🔹 *CRIME 1 - Vadiagem*\n` +
                  `   ⚖️ Pena: 1 dia de prisão\n` +
                  `   💰 Multa: 500 N-Coins\n\n` +
                  `🔹 *CRIME 2 - Desacato à autoridade*\n` +
                  `   ⚖️ Pena: 2 dias de prisão\n` +
                  `   💰 Multa: 1000 N-Coins\n\n` +
                  `🔹 *CRIME 3 - Perturbação do sossego*\n` +
                  `   ⚖️ Pena: 1 dia de prisão\n` +
                  `   💰 Multa: 300 N-Coins\n\n` +
                  `🔹 *CRIME 4 - Furto simples*\n` +
                  `   ⚖️ Pena: 3 dias de prisão\n` +
                  `   💰 Multa: 2000 N-Coins\n\n` +
                  `🔹 *CRIME 5 - Roubo*\n` +
                  `   ⚖️ Pena: 5 dias de prisão\n` +
                  `   💰 Multa: 5000 N-Coins\n\n` +
                  `🔹 *CRIME 6 - Lesão corporal*\n` +
                  `   ⚖️ Pena: 4 dias de prisão\n` +
                  `   💰 Multa: 3000 N-Coins\n\n` +
                  `🔹 *CRIME 7 - Tráfico de influência*\n` +
                  `   ⚖️ Pena: 7 dias de prisão\n` +
                  `   💰 Multa: 10000 N-Coins\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 Use \`!investigar @user\` para investigar suspeitos!\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== INVESTIGAR SUSPEITO ==========
case 'investigar':
case 'investigarpolicia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const crimesPath = './crimes.json';
    const prisaoPath = './prisao.json';
    
    let policiaDB = {};
    let crimesDB = {};
    let prisaoDB = {};
    
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(crimesPath)) crimesDB = JSON.parse(fs.readFileSync(crimesPath));
    if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let suspeito = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não é policial!\nUse \`!registrarpolicia\` primeiro.`);
    }

    if (!suspeito) {
        return reply(`❌ Uso: \`!investigar @user\``);
    }

    if (suspeito === usuario) {
        return reply(`❌ Você não pode investigar a si mesmo!`);
    }

    const nomeSuspeito = suspeito.split('@')[0];
    
    // Verifica se o suspeito está preso
    const estaPreso = prisaoDB[suspeito] && prisaoDB[suspeito].ativo;
    
    if (estaPreso) {
        return reply(`⚠️ @${nomeSuspeito} já está PRESO! Use \`!soltar @user\` para libertar.`);
    }

    const crimes = [
        { nome: "Vadiagem", pena: 1, multa: 500, chance: 0.3 },
        { nome: "Desacato à autoridade", pena: 2, multa: 1000, chance: 0.25 },
        { nome: "Perturbação do sossego", pena: 1, multa: 300, chance: 0.2 },
        { nome: "Furto simples", pena: 3, multa: 2000, chance: 0.15 },
        { nome: "Roubo", pena: 5, multa: 5000, chance: 0.05 },
        { nome: "Lesão corporal", pena: 4, multa: 3000, chance: 0.03 },
        { nome: "Tráfico de influência", pena: 7, multa: 10000, chance: 0.02 }
    ];

    // Sorteia um crime baseado na chance
    let crimeEncontrado = null;
    for (const crime of crimes) {
        if (Math.random() < crime.chance) {
            crimeEncontrado = crime;
            break;
        }
    }

    if (!crimeEncontrado) {
        const inocenteMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                            `🔍 *INVESTIGAÇÃO CONCLUÍDA* 🔍\n\n` +
                            `👮 @${nomeUser} investigou @${nomeSuspeito}\n\n` +
                            `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                            `✅ *RESULTADO:* INOCENTE!\n` +
                            `📋 @${nomeSuspeito} não cometeu nenhum crime.\n\n` +
                            `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        await keisen.sendMessage(from, { text: inocenteMsg, mentions: [usuario, suspeito] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
        return;
    }

    // Registra o crime
    const crimeId = Date.now().toString();
    crimesDB[crimeId] = {
        suspeito: suspeito,
        crime: crimeEncontrado.nome,
        pena: crimeEncontrado.pena,
        multa: crimeEncontrado.multa,
        data: new Date().toLocaleString('pt-BR'),
        policial: usuario,
        ativo: true
    };
    fs.writeFileSync(crimesPath, JSON.stringify(crimesDB, null, 2));

    const crimeMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                     `🔍 *INVESTIGAÇÃO CONCLUÍDA* 🔍\n\n` +
                     `👮 @${nomeUser} investigou @${nomeSuspeito}\n\n` +
                     `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                     `⚠️ *CRIME ENCONTRADO!* ⚠️\n\n` +
                     `📋 *Crime:* ${crimeEncontrado.nome}\n` +
                     `⚖️ *Pena:* ${crimeEncontrado.pena} dia(s) de prisão\n` +
                     `💰 *Multa:* ${crimeEncontrado.multa.toLocaleString()} N-Coins\n\n` +
                     `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                     `💡 Use \`!prender @${nomeSuspeito}\` para efetuar a prisão!\n\n` +
                     `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: crimeMsg, mentions: [usuario, suspeito] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PRENDER SUSPEITO ==========
case 'prender':
case 'prenderpolicia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const crimesPath = './crimes.json';
    const prisaoPath = './prisao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let policiaDB = {};
    let crimesDB = {};
    let prisaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(crimesPath)) crimesDB = JSON.parse(fs.readFileSync(crimesPath));
    if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let suspeito = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não é policial!\nUse \`!registrarpolicia\` primeiro.`);
    }

    if (!suspeito) {
        return reply(`❌ Uso: \`!prender @user\``);
    }

    if (suspeito === usuario) {
        return reply(`❌ Você não pode prender a si mesmo!`);
    }

    const nomeSuspeito = suspeito.split('@')[0];

    // Verifica se já está preso
    if (prisaoDB[suspeito] && prisaoDB[suspeito].ativo) {
        return reply(`⚠️ @${nomeSuspeito} já está PRESO! Use \`!soltar @user\` para libertar.`);
    }

    // Busca crime ativo
    let crimeAtivo = null;
    let crimeId = null;
    for (let [id, crime] of Object.entries(crimesDB)) {
        if (crime.suspeito === suspeito && crime.ativo === true) {
            crimeAtivo = crime;
            crimeId = id;
            break;
        }
    }

    if (!crimeAtivo) {
        return reply(`❌ @${nomeSuspeito} não possui nenhum crime investigado!\nUse \`!investigar @user\` primeiro.`);
    }

    // Calcula multa
    const multa = crimeAtivo.multa;
    
    if (!coinsDB[suspeito]) coinsDB[suspeito] = { coins: 500 };
    if (coinsDB[suspeito].coins < multa) {
        // Se não tem dinheiro, pena maior
        crimeAtivo.pena += 2;
    } else {
        coinsDB[suspeito].coins -= multa;
        fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    }

    // Registra prisão
    const dataPrisao = new Date();
    const dataSolucao = new Date(dataPrisao.getTime() + (crimeAtivo.pena * 24 * 60 * 60 * 1000));
    
    prisaoDB[suspeito] = {
        crime: crimeAtivo.crime,
        pena: crimeAtivo.pena,
        multa: multa,
        dataPrisao: dataPrisao.toLocaleString('pt-BR'),
        dataSolucao: dataSolucao.toLocaleString('pt-BR'),
        policial: usuario,
        ativo: true
    };
    fs.writeFileSync(prisaoPath, JSON.stringify(prisaoDB, null, 2));

    // Remove o crime ativo
    delete crimesDB[crimeId];
    fs.writeFileSync(crimesPath, JSON.stringify(crimesDB, null, 2));

    // Atualiza estatísticas do policial
    policiaDB[usuario].prisões = (policiaDB[usuario].prisões || 0) + 1;
    policiaDB[usuario].xp = (policiaDB[usuario].xp || 0) + 50;
    fs.writeFileSync(policiaPath, JSON.stringify(policiaDB, null, 2));

    // Bônus para o policial
    const bonusPolicial = Math.floor(multa * 0.2);
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += bonusPolicial;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const prisaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `⛓️ *PRISÃO EFETUADA!* ⛓️\n\n` +
                      `👮 @${nomeUser} prendeu @${nomeSuspeito}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `📋 *Crime:* ${crimeAtivo.crime}\n` +
                      `⚖️ *Pena:* ${crimeAtivo.pena} dia(s)\n` +
                      `💰 *Multa paga:* ${multa.toLocaleString()} N-Coins\n` +
                      `📅 *Data da prisão:* ${dataPrisao.toLocaleString('pt-BR')}\n` +
                      `🔓 *Previsão de soltura:* ${dataSolucao.toLocaleString('pt-BR')}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `👮 *Bônus do policial:* +${bonusPolicial} N-Coins\n` +
                      `✨ *XP do policial:* +50\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: prisaoMsg, mentions: [usuario, suspeito] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== SOLTAR PRESO ==========
case 'soltar':
case 'soltarpolicia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const prisaoPath = './prisao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let policiaDB = {};
    let prisaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let preso = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não é policial!\nUse \`!registrarpolicia\` primeiro.`);
    }

    if (!preso) {
        return reply(`❌ Uso: \`!soltar @user\``);
    }

    const nomePreso = preso.split('@')[0];

    if (!prisaoDB[preso] || !prisaoDB[preso].ativo) {
        return reply(`❌ @${nomePreso} não está preso!`);
    }

    const dadosPrisao = prisaoDB[preso];
    const dataSolucao = new Date(dadosPrisao.dataSolucao);
    const agora = new Date();
    
    let solturaAntecipada = false;
    let custoSoltura = 0;
    
    if (agora < dataSolucao) {
        // Soltura antecipada tem custo
        const diasRestantes = Math.ceil((dataSolucao - agora) / (1000 * 60 * 60 * 24));
        custoSoltura = diasRestantes * 1000;
        
        if (!coinsDB[preso]) coinsDB[preso] = { coins: 500 };
        if (coinsDB[preso].coins < custoSoltura) {
            return reply(`❌ @${nomePreso} não tem N-Coins suficientes para a soltura antecipada!\n💰 *Custo:* ${custoSoltura} N-Coins\n💵 *Saldo:* ${coinsDB[preso].coins} N-Coins`);
        }
        
        coinsDB[preso].coins -= custoSoltura;
        fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
        solturaAntecipada = true;
    }
    
    delete prisaoDB[preso];
    fs.writeFileSync(prisaoPath, JSON.stringify(prisaoDB, null, 2));

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                `🔓 *LIBERDADE CONCEDIDA!* 🔓\n\n` +
                `👮 @${nomeUser} soltou @${nomePreso}\n\n` +
                `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                `📋 *Crime:* ${dadosPrisao.crime}\n` +
                `⚖️ *Pena cumprida:* ${dadosPrisao.pena} dia(s)\n`;

    if (solturaAntecipada) {
        texto += `💰 *Custo da soltura antecipada:* ${custoSoltura} N-Coins\n`;
        texto += `⚠️ *Liberdade condicional concedida!*\n`;
    } else {
        texto += `✅ *Pena cumprida integralmente!*\n`;
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, preso] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== VER PRESOS ==========
case 'presos':
case 'listarpresos': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const prisaoPath = './prisao.json';
    
    let prisaoDB = {};
    if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));

    const presos = Object.entries(prisaoDB).filter(([_, data]) => data.ativo === true);
    
    if (presos.length === 0) {
        return reply(`📋 Nenhum preso no momento. O sistema prisional está vazio!`);
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `⛓️ *LISTA DE PRESOS* ⛓️\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    for (const [userId, data] of presos) {
        const nome = userId.split('@')[0];
        texto += `👤 @${nome}\n`;
        texto += `   📋 Crime: ${data.crime}\n`;
        texto += `   ⚖️ Pena: ${data.pena} dia(s)\n`;
        texto += `   📅 Preso desde: ${data.dataPrisao}\n`;
        texto += `   🔓 Soltura prevista: ${data.dataSolucao}\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'rankpolicia':
case 'rankingpolicial': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let policiaDB = {};
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    const ranking = Object.entries(policiaDB)
        .map(([userId, data]) => ({ 
            id: userId, 
            prisões: data.prisões || 0, 
            rank: data.rank, 
            corporacao: data.nome 
        }))
        .sort((a, b) => b.prisões - a.prisões)
        .slice(0, 10);

    if (ranking.length === 0) {
        return reply(`📊 Nenhum policial registrado ainda. Use \`!registrarpolicia\` para se alistar!`);
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🏆 *RANKING POLICIAL* 🏆\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    const mentions = [];
    for (let i = 0; i < ranking.length; i++) {
        const user = ranking[i];
        const nomeUser = user.id.split('@')[0];
        mentions.push(user.id);
        
        let medalha = '';
        if (i === 0) medalha = '👑 ';
        else if (i === 1) medalha = '🥈 ';
        else if (i === 2) medalha = '🥉 ';
        else medalha = '📍 ';
        
        texto += `${medalha}${i+1}º @${nomeUser}\n`;
        texto += `   🏛️ ${user.corporacao}\n`;
        texto += `   🎖️ Rank: ${user.rank}\n`;
        texto += `   ⛓️ Prisões: ${user.prisões}\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: mentions }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== VER STATUS DO PRESO ==========
case 'statuspreso':
case 'minhaprisao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const prisaoPath = './prisao.json';
    
    let prisaoDB = {};
    if (fs.existsSync(prisaoPath)) prisaoDB = JSON.parse(fs.readFileSync(prisaoPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!prisaoDB[alvo] || !prisaoDB[alvo].ativo) {
        return reply(`✅ @${nomeUser}, você não está preso!`);
    }

    const dados = prisaoDB[alvo];
    const dataSolucao = new Date(dados.dataSolucao);
    const agora = new Date();
    const diasRestantes = Math.max(0, Math.ceil((dataSolucao - agora) / (1000 * 60 * 60 * 24)));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `⛓️ *STATUS DA PRISÃO* ⛓️\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *Crime:* ${dados.crime}\n` +
                  `⚖️ *Pena:* ${dados.pena} dia(s)\n` +
                  `📅 *Data da prisão:* ${dados.dataPrisao}\n` +
                  `⏳ *Dias restantes:* ${diasRestantes} dia(s)\n` +
                  `🔓 *Previsão de soltura:* ${dados.dataSolucao}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 Use \`!soltar @user\` para liberdade antecipada (custa 1000 N-Coins/dia)\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE BATALHÃO POLICIAL ====================

// ========== MENU DE RECRUTAMENTO ==========
case 'recrutamento':
case 'menurecrutamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `👮 *BATALHÃO POLICIAL - RECRUTAMENTO* 👮\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *CARGOS DISPONÍVEIS:*\n\n` +
                  `🔹 🪖 *SOLDADO* - Iniciante\n` +
                  `🔹 🎖️ *CABO* - 10 missões\n` +
                  `🔹 📯 *SARGENTO* - 25 missões\n` +
                  `🔹 ⭐ *TENENTE* - 50 missões\n` +
                  `🔹 👑 *CAPITÃO* - 100 missões\n` +
                  `🔹 🏆 *MAJOR* - 200 missões\n` +
                  `🔹 💀 *CORONEL* - 500 missões\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📌 *COMANDOS:*\n` +
                  `   📝 \`!alistarbatalhao\` - Se alistar no batalhão\n` +
                  `   📊 \`!perfilbatalhao\` - Ver seu perfil\n` +
                  `   🎯 \`!missoesbatalhao\` - Ver missões disponíveis\n` +
                  `   ✅ \`!completarmissao <id>\` - Completar missão\n` +
                  `   🏆 \`!promover\` - Solicitar promoção\n` +
                  `   💰 \`!saldariobatalhao\` - Receber salário\n` +
                  `   📋 \`!listabatalhao\` - Listar membros\n` +
                  `   ⚠️ \`!expulsar @user\` - Expulsar do batalhão (admin)\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ALISTAR NO BATALHÃO ==========
case 'alistarbatalhao':
case 'entrarbatalhao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let batalhaoDB = {};
    let policiaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!policiaDB[usuario]) {
        return reply(`❌ @${nomeUser}, você precisa ser policial primeiro!\nUse \`!registrarpolicia <corporação>\` para se alistar.`);
    }

    if (batalhaoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você já está no batalhão! Seu cargo atual é ${batalhaoDB[usuario].cargo}.`);
    }

    const bonusAlistamento = 1000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += bonusAlistamento;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    batalhaoDB[usuario] = {
        cargo: "Soldado",
        missoesCompletas: 0,
        dataAlistamento: new Date().toLocaleString('pt-BR'),
        ultimoSalario: new Date().toISOString(),
        ativo: true
    };
    fs.writeFileSync(batalhaoPath, JSON.stringify(batalhaoDB, null, 2));

    const alistamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                           `🎖️ *ALISTAMENTO NO BATALHÃO!* 🎖️\n\n` +
                           `👮 @${nomeUser} agora é um SOLDADO do batalhão!\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `💰 *Bônus de alistamento:* +${bonusAlistamento} N-Coins\n` +
                           `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `🎯 *PRÓXIMOS PASSOS:*\n` +
                           `   📋 \`!missoesbatalhao\` - Ver missões\n` +
                           `   ✅ \`!completarmissao <id>\` - Completar missões\n` +
                           `   🏆 \`!promover\` - Solicitar promoção\n\n` +
                           `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: alistamentoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERFIL DO BATALHÃO ==========
case 'perfilbatalhao':
case 'meuperfilbatalhao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let batalhaoDB = {};
    let policiaDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!batalhaoDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não está no batalhão!\nUse \`!alistarbatalhao\` para se alistar.`);
    }

    const dados = batalhaoDB[alvo];
    const policial = policiaDB[alvo] || { rank: "Não possui", prisões: 0 };
    
    // Próximo cargo
    const cargos = ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"];
    const missoesNecessarias = [0, 10, 25, 50, 100, 200, 500];
    const cargoAtualIndex = cargos.indexOf(dados.cargo);
    let proximoCargo = "Máximo";
    let missoesFaltando = 0;
    
    if (cargoAtualIndex < cargos.length - 1) {
        proximoCargo = cargos[cargoAtualIndex + 1];
        missoesFaltando = missoesNecessarias[cargoAtualIndex + 1] - dados.missoesCompletas;
    }

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🎖️ *PERFIL DO BATALHÃO* 🎖️\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📊 *DADOS GERAIS:*\n` +
                  `   🪖 Cargo: ${dados.cargo}\n` +
                  `   ✅ Missões: ${dados.missoesCompletas}\n` +
                  `   🏛️ Policial: ${policial.rank || "N/A"}\n` +
                  `   ⛓️ Prisões: ${policial.prisões || 0}\n` +
                  `   📅 Alistamento: ${dados.dataAlistamento}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🎯 *PRÓXIMA PROMOÇÃO:*\n` +
                  `   📈 Cargo: ${proximoCargo}\n` +
                  `   ⚠️ Missões faltando: ${missoesFaltando}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *SALÁRIO ATUAL:*\n` +
                  `   🪖 Soldado: 500 N-Coins/dia\n` +
                  `   🎖️ Cabo: 800 N-Coins/dia\n` +
                  `   📯 Sargento: 1200 N-Coins/dia\n` +
                  `   ⭐ Tenente: 1800 N-Coins/dia\n` +
                  `   👑 Capitão: 2500 N-Coins/dia\n` +
                  `   🏆 Major: 3500 N-Coins/dia\n` +
                  `   💀 Coronel: 5000 N-Coins/dia\n\n` +
                  `💡 Use \`!saldariobatalhao\` para receber seu salário!\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== MISSÕES DO BATALHÃO ==========
case 'missoesbatalhao':
case 'missoesbat': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    
    let batalhaoDB = {};
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!batalhaoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não está no batalhão!\nUse \`!alistarbatalhao\` para se alistar.`);
    }

    const missoes = [
        { id: 1, nome: "🚔 Patrulha Básica", descricao: "Realizar patrulha pelas ruas", xp: 10, coins: 100 },
        { id: 2, nome: "📝 Registrar Boletim", descricao: "Registrar 3 boletins de ocorrência", xp: 15, coins: 150 },
        { id: 3, nome: "🔍 Investigar Suspeito", descricao: "Investigar um suspeito", xp: 20, coins: 200 },
        { id: 4, nome: "⛓️ Efetuar Prisão", descricao: "Prender um criminoso", xp: 30, coins: 300 },
        { id: 5, nome: "🚨 Atender Ocorrência", descricao: "Atender ocorrência de emergência", xp: 25, coins: 250 },
        { id: 6, nome: "📊 Relatório de Missão", descricao: "Entregar relatório detalhado", xp: 20, coins: 200 },
        { id: 7, nome: "🎯 Treinamento Tático", descricao: "Participar de treinamento", xp: 35, coins: 350 },
        { id: 8, nome: "🔫 Operação Especial", descricao: "Participar de operação de alto risco", xp: 50, coins: 500 },
        { id: 9, nome: "👑 Proteção VIP", descricao: "Proteger uma autoridade", xp: 40, coins: 400 },
        { id: 10, nome: "🏆 Missão de Elite", descricao: "Completar missão de elite", xp: 100, coins: 1000 }
    ];

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🎯 *MISSÕES DO BATALHÃO* 🎯\n\n`;
    texto += `👤 @${nomeUser}\n`;
    texto += `🪖 Cargo: ${batalhaoDB[usuario].cargo}\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    for (const missao of missoes) {
        texto += `📌 *${missao.id}. ${missao.nome}*\n`;
        texto += `   📋 ${missao.descricao}\n`;
        texto += `   ✨ XP: +${missao.xp} | 💰 Coins: +${missao.coins}\n\n`;
    }

    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    texto += `💡 Use \`!completarmissao <id>\` para completar uma missão!\n\n`;
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== COMPLETAR MISSÃO ==========
case 'completarmissao':
case 'fazermissao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let batalhaoDB = {};
    let policiaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const missaoId = parseInt(args[0]);

    if (!batalhaoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não está no batalhão!\nUse \`!alistarbatalhao\` para se alistar.`);
    }

    const missoes = {
        1: { nome: "Patrulha Básica", xp: 10, coins: 100 },
        2: { nome: "Registrar Boletim", xp: 15, coins: 150 },
        3: { nome: "Investigar Suspeito", xp: 20, coins: 200 },
        4: { nome: "Efetuar Prisão", xp: 30, coins: 300 },
        5: { nome: "Atender Ocorrência", xp: 25, coins: 250 },
        6: { nome: "Relatório de Missão", xp: 20, coins: 200 },
        7: { nome: "Treinamento Tático", xp: 35, coins: 350 },
        8: { nome: "Operação Especial", xp: 50, coins: 500 },
        9: { nome: "Proteção VIP", xp: 40, coins: 400 },
        10: { nome: "Missão de Elite", xp: 100, coins: 1000 }
    };

    const missao = missoes[missaoId];
    if (!missao) {
        return reply(`❌ Missão inválida! Use \`!missoesbatalhao\` para ver as missões disponíveis.`);
    }

    // Atualiza estatísticas
    batalhaoDB[usuario].missoesCompletas += 1;
    fs.writeFileSync(batalhaoPath, JSON.stringify(batalhaoDB, null, 2));

    if (policiaDB[usuario]) {
        policiaDB[usuario].xp = (policiaDB[usuario].xp || 0) + missao.xp;
        fs.writeFileSync(policiaPath, JSON.stringify(policiaDB, null, 2));
    }

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += missao.coins;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `✅ *MISSÃO COMPLETADA!* ✅\n\n` +
                  `👮 @${nomeUser}\n` +
                  `📋 *Missão:* ${missao.nome}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `✨ *XP Ganho:* +${missao.xp}\n` +
                  `💰 *Coins Ganhos:* +${missao.coins}\n` +
                  `📊 *Total de missões:* ${batalhaoDB[usuario].missoesCompletas}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PROMOVER DE CARGO ==========
case 'promover':
case 'promoverbatalhao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let batalhaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!batalhaoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não está no batalhão!\nUse \`!alistarbatalhao\` para se alistar.`);
    }

    const cargos = ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"];
    const missoesNecessarias = [0, 10, 25, 50, 100, 200, 500];
    const salarios = [500, 800, 1200, 1800, 2500, 3500, 5000];
    
    const cargoAtual = batalhaoDB[usuario].cargo;
    const cargoIndex = cargos.indexOf(cargoAtual);
    const missoesAtuais = batalhaoDB[usuario].missoesCompletas;

    if (cargoIndex >= cargos.length - 1) {
        return reply(`❌ @${nomeUser}, você já atingiu o cargo máximo: ${cargoAtual}!`);
    }

    const missoesNecessariasProx = missoesNecessarias[cargoIndex + 1];
    
    if (missoesAtuais < missoesNecessariasProx) {
        const faltam = missoesNecessariasProx - missoesAtuais;
        return reply(`❌ @${nomeUser}, você precisa de mais ${faltam} missões para ser promovido a ${cargos[cargoIndex + 1]}!`);
    }

    // Promove
    const novoCargo = cargos[cargoIndex + 1];
    const bonusPromocao = salarios[cargoIndex + 1] * 2;
    
    batalhaoDB[usuario].cargo = novoCargo;
    fs.writeFileSync(batalhaoPath, JSON.stringify(batalhaoDB, null, 2));

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += bonusPromocao;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🎊 *PROMOÇÃO CONCEDIDA!* 🎊\n\n` +
                  `👮 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📈 *Cargo anterior:* ${cargoAtual}\n` +
                  `🎖️ *Novo cargo:* ${novoCargo}\n` +
                  `💰 *Bônus de promoção:* +${bonusPromocao} N-Coins\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👏 *Parabéns, policial! Continue assim!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RECEBER SALÁRIO ==========
case 'saldariobatalhao':
case 'salariopolicial': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let batalhaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!batalhaoDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não está no batalhão!\nUse \`!alistarbatalhao\` para se alistar.`);
    }

    const cargos = ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"];
    const salarios = [500, 800, 1200, 1800, 2500, 3500, 5000];
    
    const cargoAtual = batalhaoDB[usuario].cargo;
    const cargoIndex = cargos.indexOf(cargoAtual);
    const salario = salarios[cargoIndex];
    
    const ultimoSalario = batalhaoDB[usuario].ultimoSalario ? new Date(batalhaoDB[usuario].ultimoSalario) : new Date(0);
    const agora = new Date();
    const diasDesde = Math.floor((agora - ultimoSalario) / (1000 * 60 * 60 * 24));
    
    if (diasDesde < 1) {
        const horasRestantes = Math.ceil(24 - (agora - ultimoSalario) / (1000 * 60 * 60));
        return reply(`⏰ @${nomeUser}, você já recebeu seu salário hoje!\nAguarde ${horasRestantes} horas para receber novamente.`);
    }
    
    const salarioTotal = salario * diasDesde;
    
    batalhaoDB[usuario].ultimoSalario = agora.toISOString();
    fs.writeFileSync(batalhaoPath, JSON.stringify(batalhaoDB, null, 2));
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += salarioTotal;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💰 *SALÁRIO RECEBIDO!* 💰\n\n` +
                  `👮 @${nomeUser}\n` +
                  `🪖 Cargo: ${cargoAtual}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📆 *Dias acumulados:* ${diasDesde}\n` +
                  `💰 *Salário diário:* ${salario} N-Coins\n` +
                  `💵 *Total recebido:* ${salarioTotal.toLocaleString()} N-Coins\n` +
                  `📅 *Data do pagamento:* ${agora.toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== LISTAR MEMBROS DO BATALHÃO ==========
case 'listabatalhao':
case 'membrosbatalhao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let batalhaoDB = {};
    let policiaDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    const membros = Object.entries(batalhaoDB)
        .filter(([_, data]) => data.ativo === true)
        .map(([userId, data]) => ({ 
            id: userId, 
            cargo: data.cargo, 
            missoes: data.missoesCompletas,
            policial: policiaDB[userId] || {}
        }))
        .sort((a, b) => {
            const cargos = ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"];
            return cargos.indexOf(b.cargo) - cargos.indexOf(a.cargo);
        });

    if (membros.length === 0) {
        return reply(`📋 Nenhum membro no batalhão. Use \`!alistarbatalhao\` para se alistar!`);
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `📋 *MEMBROS DO BATALHÃO* 📋\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    const mentions = [];
    for (const membro of membros) {
        const nome = membro.id.split('@')[0];
        mentions.push(membro.id);
        
        const emojiCargo = {
            "Soldado": "🪖", "Cabo": "🎖️", "Sargento": "📯",
            "Tenente": "⭐", "Capitão": "👑", "Major": "🏆", "Coronel": "💀"
        };
        const emoji = emojiCargo[membro.cargo] || "👮";
        
        texto += `${emoji} *${membro.cargo}* - @${nome}\n`;
        texto += `   ✅ Missões: ${membro.missoes}\n`;
        if (membro.policial.rank) {
            texto += `   🏛️ Rank Policial: ${membro.policial.rank}\n`;
        }
        texto += `\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: mentions }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== EXPULSAR DO BATALHÃO (ADMIN) ==========
case 'expulsar':
case 'expulsarbatalhao': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    
    let batalhaoDB = {};
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    if (!alvo) return reply(`❌ Uso: \`!expulsar @user\``);

    const nomeUser = alvo.split('@')[0];
    const admin = sender;
    const nomeAdmin = admin.split('@')[0];

    if (!batalhaoDB[alvo]) {
        return reply(`❌ @${nomeUser} não está no batalhão!`);
    }

    const dados = batalhaoDB[alvo];
    delete batalhaoDB[alvo];
    fs.writeFileSync(batalhaoPath, JSON.stringify(batalhaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `⚠️ *EXPULSÃO DO BATALHÃO* ⚠️\n\n` +
                  `👮 @${nomeAdmin} expulsou @${nomeUser} do batalhão!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📊 *DADOS DO EXPULSO:*\n` +
                  `   🪖 Cargo: ${dados.cargo}\n` +
                  `   ✅ Missões: ${dados.missoesCompletas}\n` +
                  `   📅 Alistamento: ${dados.dataAlistamento}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💀 *Motivo: Desligamento do quadro de oficiais*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [admin, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== DAR SALÁRIO PARA TODOS (ADMIN) ==========
case 'salariotodos':
case 'pagartodos': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    const fs = require('fs');
    const batalhaoPath = './DADOS DO KEISEN/usuarios/batalhao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let batalhaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(batalhaoPath)) batalhaoDB = JSON.parse(fs.readFileSync(batalhaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const cargos = ["Soldado", "Cabo", "Sargento", "Tenente", "Capitão", "Major", "Coronel"];
    const salarios = [500, 800, 1200, 1800, 2500, 3500, 5000];
    
    let totalPago = 0;
    let membrosPagos = 0;
    
    for (const [userId, dados] of Object.entries(batalhaoDB)) {
        if (dados.ativo !== false) {
            const cargoIndex = cargos.indexOf(dados.cargo);
            const salario = salarios[cargoIndex];
            
            if (!coinsDB[userId]) coinsDB[userId] = { coins: 500 };
            coinsDB[userId].coins += salario;
            totalPago += salario;
            membrosPagos++;
        }
    }
    
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💰 *PAGAMENTO GERAL REALIZADO!* 💰\n\n` +
                  `👮 *Admin:* @${sender.split('@')[0]}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📊 *RESUMO DO PAGAMENTO:*\n` +
                  `   👥 Membros pagos: ${membrosPagos}\n` +
                  `   💵 Total distribuído: ${totalPago.toLocaleString()} N-Coins\n` +
                  `   📅 Data: ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `✅ *Todos os policiais receberam seus salários!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [sender] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE CASAMENTO RPG ====================
case 'deserdarfilho':
case 'deserdar':
case 'removerfilho': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const familiaPath = './DADOS DO KEISEN/usuarios/familia.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let familiaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (!familiaDB[usuario] || !familiaDB[usuario].filhos || familiaDB[usuario].filhos.length === 0) {
        return reply(`❌ @${nomeUser}, você não tem nenhum filho para deserdar!`);
    }

    let filhoParaRemover = null;
    let filhoIndex = -1;
    let filhoNome = '';
    let filhoId = '';
    
    let mencado = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (mencado) {
        // Busca o filho pelo ID do usuário (@)
        for (let i = 0; i < familiaDB[usuario].filhos.length; i++) {
            const filho = familiaDB[usuario].filhos[i];
            if (filho.isUser === true && filho.id === mencado) {
                filhoIndex = i;
                filhoParaRemover = filho;
                filhoNome = filho.nome;
                filhoId = filho.id;
                break;
            }
        }
        if (filhoIndex === -1) {
            return reply(`❌ @${nomeUser}, você não tem este usuário como filho(a) adotado(a).`);
        }
    } 
    else {
        const filhoIdBuscado = args[0];
        if (!filhoIdBuscado) {
            return reply("❌ Uso: `!deserdarfilho <id_do_filho>` ou `!deserdarfilho @usuario`\nUse `!meusfilhos` para ver os IDs.");
        }
        
        for (let i = 0; i < familiaDB[usuario].filhos.length; i++) {
            const filho = familiaDB[usuario].filhos[i];
            if (filho.id === filhoIdBuscado) {
                filhoIndex = i;
                filhoParaRemover = filho;
                filhoNome = filho.nome;
                filhoId = filho.id;
                break;
            }
        }
        if (filhoIndex === -1) {
            return reply(`❌ @${nomeUser}, filho(a) com ID \`${filhoIdBuscado}\` não encontrado. Use \`!meusfilhos\` para ver os IDs.`);
        }
    }

    const custoDeserdar = 500;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoDeserdar) {
        return reply(`❌ @${nomeUser}, deserdar um filho custa ${custoDeserdar} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    const conjugue = familiaDB[usuario].conjugue;
    
    function extrairNomePuro(id) {
        if (!id) return null;
        let nome = id.split('@')[0];
        nome = nome.replace(/[⁨⁩⁦⁧⁪⁫⁬⁭⁮⁯\u200E\u200F\u202A-\u202E]/g, '');
        if (nome.match(/^\d+$/)) return null;
        if (nome.includes('|')) nome = nome.split('|')[0].trim();
        if (nome.includes('+')) nome = nome.split('+')[0].trim();
        return nome && nome.length > 0 ? nome : null;
    }
    
    let nomeExibicao = '';
    if (filhoParaRemover.isUser && filhoParaRemover.id.includes('@')) {
        const nomePuro = extrairNomePuro(filhoParaRemover.id);
        nomeExibicao = nomePuro ? `@${nomePuro}` : (filhoParaRemover.tipo === 'filho' ? 'Filho' : 'Filha');
    } else {
        nomeExibicao = filhoParaRemover.nome || (filhoParaRemover.tipo === 'filho' ? 'Filho' : 'Filha');
    }
    
    familiaDB[usuario].filhos.splice(filhoIndex, 1);
    
    if (conjugue && familiaDB[conjugue] && familiaDB[conjugue].filhos) {
        const conjugueFilhoIndex = familiaDB[conjugue].filhos.findIndex(f => f.id === filhoId);
        if (conjugueFilhoIndex !== -1) {
            familiaDB[conjugue].filhos.splice(conjugueFilhoIndex, 1);
        }
    }
    
    fs.writeFileSync(familiaPath, JSON.stringify(familiaDB, null, 2));
    
    coinsDB[usuario].coins -= custoDeserdar;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const nomeConjugue = conjugue ? conjugue.split('@')[0] : 'desconhecido';
    const dataAtual = new Date().toLocaleString('pt-BR');
    
    const deserdarMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `💔 *FILHO(A) DESERDADO(A)!* 💔\n\n` +
                        `😢 @${nomeUser} e @${nomeConjugue} deserdaram ${filhoParaRemover.tipo === 'filho' ? 'o filho' : 'a filha'} *${nomeExibicao}*.\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `👶 *Nome:* ${nomeExibicao}\n` +
                        `📅 *Data da deserdação:* ${dataAtual}\n` +
                        `💰 *Custo:* ${custoDeserdar} N-Coins\n` +
                        `🆔 *ID:* \`${filhoId}\`\n\n` +
                        `💔 *"A família não se escolhe, mas o amor sim."* 💔\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    const mentions = [usuario];
    if (conjugue) mentions.push(conjugue);
    if (filhoParaRemover.isUser && filhoId) mentions.push(filhoId);
    
    await keisen.sendMessage(from, {
        text: deserdarMsg,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'casarrpg':
case 'casar':
case 'pedircasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let pretendente = sender;
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (!alvo) return reply("❌ Uso: `!casarrpg @usuario`\nExemplo: `!casarrpg @joaosilva`");
    if (alvo === pretendente) return reply("❌ Você não pode casar consigo mesmo(a)!");

    const nomePretendente = pretendente.split('@')[0];
    const nomeAlvo = alvo.split('@')[0];

    // Verifica se já está casado
    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === pretendente || casamentosDB[id].pessoa2 === pretendente) {
            jaCasado = true;
            break;
        }
    }
    if (jaCasado) return reply(`❌ @${nomePretendente} você já é casado(a)! Use \`!divorciar\` primeiro.`);

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo || casamentosDB[id].pessoa2 === alvo) {
            return reply(`❌ @${nomeAlvo} já é casado(a)!`);
        }
    }

    // Verifica pedido pendente
    if (pedidosDB[alvo] && pedidosDB[alvo].de === pretendente) {
        return reply(`⏳ Você já tem um pedido de casamento pendente para @${nomeAlvo}. Aguarde a resposta.`);
    }
    if (pedidosDB[pretendente]) {
        return reply(`⏳ Você já fez um pedido para alguém. Aguarde a resposta ou use \`!cancelarpedido\`.`);
    }

    // Registra o pedido
    pedidosDB[pretendente] = {
        para: alvo,
        tipo: 'casamento',
        data: new Date().toLocaleString('pt-BR')
    };
    pedidosDB[alvo] = {
        de: pretendente,
        tipo: 'casamento',
        data: new Date().toLocaleString('pt-BR')
    };
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const pedidoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💍 *PEDIDO DE CASAMENTO* 💍\n\n` +
                      `💘 @${nomePretendente} pediu @${nomeAlvo} em CASAMENTO!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💒 *Para ACEITAR:* \`!aceitar\`\n` +
                      `💔 *Para RECUSAR:* \`!recusar\`\n\n` +
                      `⏰ *Pedido feito em:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                      `📜 *"Amar é encontrar na felicidade do outro a sua própria felicidade."*\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: pedidoMsg,
        mentions: [pretendente, alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'aceitorpg':
case 'aceitarcasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario] || !pedidosDB[usuario].de) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido de casamento pendente.`);
    }

    let pretendente = pedidosDB[usuario].de;
    const nomePretendente = pretendente.split('@')[0];

    // Verifica se alguém já é casado
    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario || casamentosDB[id].pessoa2 === usuario ||
            casamentosDB[id].pessoa1 === pretendente || casamentosDB[id].pessoa2 === pretendente) {
            jaCasado = true;
            break;
        }
    }

    if (jaCasado) {
        delete pedidosDB[usuario];
        delete pedidosDB[pretendente];
        fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));
        return reply(`❌ Alguém já está casado(a). Pedido cancelado.`);
    }

    // Registra o casamento
    const dataCasamento = new Date().toLocaleString('pt-BR');
    const casamentoId = Date.now().toString();
    casamentosDB[casamentoId] = {
        pessoa1: pretendente,
        pessoa2: usuario,
        data: dataCasamento,
        aniversario: new Date().toLocaleDateString('pt-BR')
    };
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    // Remove pedidos
    delete pedidosDB[usuario];
    delete pedidosDB[pretendente];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    // Bônus de casamento
    if (!coinsDB[pretendente]) coinsDB[pretendente] = { coins: 500 };
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    
    const bonus = 1000;
    coinsDB[pretendente].coins += bonus;
    coinsDB[usuario].coins += bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const casamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `💍 *CASAMENTO REALIZADO!* 💍\n\n` +
                         `🎉💑 @${nomePretendente} e @${nomeUser} agora são oficialmente CASADOS! 💑🎉\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💒 *Data do casamento:* ${dataCasamento}\n` +
                         `📅 *Aniversário de casamento:* ${new Date().toLocaleDateString('pt-BR')}\n` +
                         `💰 *Bônus recebido:* +${bonus} N-Coins para cada!\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💕 *"Que este amor dure para sempre!"* 💕\n\n` +
                         `🎊 *Parabéns ao novo casal!* 🎊\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: casamentoMsg,
        mentions: [pretendente, usuario]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'recusarph':
case 'recusarcasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let pedidosDB = {};
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario] || !pedidosDB[usuario].de) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido de casamento pendente.`);
    }

    let pretendente = pedidosDB[usuario].de;
    const nomePretendente = pretendente.split('@')[0];

    delete pedidosDB[usuario];
    delete pedidosDB[pretendente];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const recusaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💔 *CASAMENTO RECUSADO* 💔\n\n` +
                      `😢 @${nomePretendente} foi recusado(a) por @${nomeUser}.\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💪 "O amor verdadeiro espera o momento certo."\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: recusaMsg,
        mentions: [pretendente, usuario]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'divorciar':
case 'terminarcasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let coinsDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let casamentoEncontrado = null;
    let conjugue = null;
    let dataCasamento = '';

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            casamentoEncontrado = id;
            conjugue = casamentosDB[id].pessoa2;
            dataCasamento = casamentosDB[id].data;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            casamentoEncontrado = id;
            conjugue = casamentosDB[id].pessoa1;
            dataCasamento = casamentosDB[id].data;
            break;
        }
    }

    if (!casamentoEncontrado) {
        return reply(`❌ @${nomeUser}, você não está casado(a).`);
    }

    const nomeConjugue = conjugue.split('@')[0];

    // Penalidade de divorcio
    if (coinsDB[usuario]) {
        const penalidade = Math.floor(coinsDB[usuario].coins * 0.1);
        coinsDB[usuario].coins -= penalidade;
        fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    }

    delete casamentosDB[casamentoEncontrado];
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    const divorcioMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `💔 *DIVÓRCIO CONFIRMADO* 💔\n\n` +
                        `😢 @${nomeUser} e @${nomeConjugue} se divorciaram.\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `📅 *Casamento durou até:* ${new Date().toLocaleString('pt-BR')}\n` +
                        `💰 *Penalidade:* -10% dos N-Coins\n\n` +
                        `📝 *Status:* Solteiro(a) novamente\n` +
                        `💪 Use \`!casarrpg @user\` para recomeçar\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: divorcioMsg,
        mentions: [usuario, conjugue]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'statuscasamento':
case 'meucasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    let status = '💔 Solteiro(a)';
    let conjugue = '';
    let dataCasamento = '';

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo) {
            status = '💍 Casado(a)';
            conjugue = casamentosDB[id].pessoa2.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            break;
        } else if (casamentosDB[id].pessoa2 === alvo) {
            status = '💍 Casado(a)';
            conjugue = casamentosDB[id].pessoa1.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            break;
        }
    }

    let pedidoPendente = false;
    let pretendente = '';
    if (pedidosDB[alvo] && pedidosDB[alvo].de && pedidosDB[alvo].tipo === 'casamento') {
        pedidoPendente = true;
        pretendente = pedidosDB[alvo].de.split('@')[0];
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `💍 *STATUS DE CASAMENTO* 💍\n\n`;
    texto += `👤 Usuário: @${nomeUser}\n`;
    texto += `💒 Status: ${status}\n`;

    if (status === '💍 Casado(a)') {
        texto += `💑 Cônjuge: @${conjugue}\n`;
        texto += `📅 Data do casamento: ${dataCasamento}\n`;
        texto += `🎉 Aniversário: ${new Date().toLocaleDateString('pt-BR')}\n`;
    } else if (pedidoPendente) {
        texto += `⏳ Você tem um pedido de casamento pendente de @${pretendente}!\n`;
        texto += `   Use \`!aceitar\` ou \`!recusar\`\n`;
    } else {
        texto += `💘 Use \`!casarrpg @user\` para pedir alguém em casamento\n`;
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: texto,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'cancelarpedido': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let pedidosDB = {};
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido pendente.`);
    }

    let alvo = pedidosDB[usuario].para || pedidosDB[usuario].de;
    
    delete pedidosDB[usuario];
    if (alvo && pedidosDB[alvo]) delete pedidosDB[alvo];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const cancelMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `❌ *PEDIDO CANCELADO* ❌\n\n` +
                      `😔 @${nomeUser} cancelou o pedido de casamento.\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: cancelMsg }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE ADOÇÃO E FAMÍLIA RPG ====================

// ==================== SISTEMA DE REGISTRO RPG ====================
case 'mudarrg':
case 'alterarrg':
case 'editarrg':
case 'atualizarrg': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let registrosDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const campo = args[0]?.toLowerCase();
    const novoValor = args.slice(1).join(' ');

    // ========== VERIFICA SE USUÁRIO ESTÁ REGISTRADO ==========
    if (!registrosDB[usuario]) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *SEM REGISTRO* ❌\n\n` +
                        `@${nomeUser}, você não possui um registro RPG!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💡 Use \`!registrar Nome | CPF | Data | Cidade\` para se registrar.\n` +
                        `📋 Exemplo: \`!registrar João Silva | 12345678900 | 15/05/1995 | Campina Grande-PB\`\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    // ========== VERIFICA SE O CAMPO É VÁLIDO ==========
    if (!campo || !novoValor) {
        const ajudaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `📝 *ALTERAR REGISTRO RPG* 📝\n\n` +
                         `@${nomeUser}, seus dados atuais:\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `📛 *Nome:* ${registrosDB[usuario].nomeCompleto}\n` +
                         `💳 *CPF:* ${registrosDB[usuario].cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}\n` +
                         `🎂 *Nascimento:* ${registrosDB[usuario].dataNascimento}\n` +
                         `📍 *Cidade:* ${registrosDB[usuario].cidade}\n` +
                         `🆔 *RG:* ${registrosDB[usuario].rg}\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💡 *COMANDOS DISPONÍVEIS:*\n\n` +
                         `• \`!mudarrg nome <novo nome>\`\n` +
                         `• \`!mudarrg cpf <novo cpf>\` (11 dígitos)\n` +
                         `• \`!mudarrg data <DD/MM/AAAA>\`\n` +
                         `• \`!mudarrg cidade <nova cidade>\`\n` +
                         `• \`!mudarrg rg\` (gera novo RG aleatório)\n\n` +
                         `⚠️ *Custo para alterar:* 500 N-Coins\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(ajudaMsg);
    }

    // ========== VERIFICA SALDO PARA PAGAR ==========
    const custoAlteracao = 500;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoAlteracao) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *SALDO INSUFICIENTE* ❌\n\n` +
                        `@${nomeUser}, você não tem N-Coins suficientes para alterar seu registro!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *Custo da alteração:* ${custoAlteracao} N-Coins\n` +
                        `💵 *Seu saldo:* ${coinsDB[usuario].coins} N-Coins\n` +
                        `💸 *Faltam:* ${custoAlteracao - coinsDB[usuario].coins} N-Coins\n\n` +
                        `💪 Use \`!pediremprestimo\` ou complete missões para ganhar coins!\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    let valorAntigo = '';
    let valorNovo = '';
    let alteracaoSucesso = false;
    let mensagemExtra = '';

    // ========== ALTERAR NOME ==========
    if (campo === 'nome') {
        if (novoValor.length < 5) {
            return reply(`❌ Nome muito curto! Mínimo 5 caracteres.`);
        }
        valorAntigo = registrosDB[usuario].nomeCompleto;
        registrosDB[usuario].nomeCompleto = novoValor;
        valorNovo = novoValor;
        alteracaoSucesso = true;
    }
    
    // ========== ALTERAR CPF ==========
    else if (campo === 'cpf') {
        let cpfLimpo = novoValor.replace(/[^0-9]/g, '');
        if (cpfLimpo.length !== 11) {
            return reply(`❌ CPF inválido! Deve conter 11 dígitos.\nExemplo: 12345678900`);
        }
        
        // Verifica se CPF já está cadastrado para outro usuário
        let cpfExistente = false;
        let donoCpf = '';
        for (let [userId, dados] of Object.entries(registrosDB)) {
            if (dados.cpf === cpfLimpo && userId !== usuario) {
                cpfExistente = true;
                donoCpf = userId.split('@')[0];
                break;
            }
        }
        
        if (cpfExistente) {
            return reply(`❌ CPF ${cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')} já está cadastrado para @${donoCpf}!`);
        }
        
        valorAntigo = registrosDB[usuario].cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        registrosDB[usuario].cpf = cpfLimpo;
        valorNovo = cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        alteracaoSucesso = true;
    }
    
    // ========== ALTERAR DATA DE NASCIMENTO ==========
    else if (campo === 'data' || campo === 'nascimento') {
        const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!dataRegex.test(novoValor)) {
            return reply(`❌ Data inválida! Use formato: DD/MM/AAAA\nExemplo: 15/05/1995`);
        }
        
        const [dia, mes, ano] = novoValor.split('/');
        const dataObj = new Date(ano, mes - 1, dia);
        if (dataObj.getFullYear() != ano || dataObj.getMonth() != mes - 1 || dataObj.getDate() != dia) {
            return reply(`❌ Data inválida! Verifique o dia, mês e ano.`);
        }
        
        const hoje = new Date();
        let idade = hoje.getFullYear() - ano;
        const mesAtual = hoje.getMonth() + 1;
        if (mesAtual < mes || (mesAtual === mes && hoje.getDate() < dia)) {
            idade--;
        }
        
        if (idade < 13) {
            return reply(`❌ Você precisa ter pelo menos 13 anos!`);
        }
        
        valorAntigo = registrosDB[usuario].dataNascimento;
        registrosDB[usuario].dataNascimento = novoValor;
        registrosDB[usuario].idade = idade;
        valorNovo = `${novoValor} (${idade} anos)`;
        alteracaoSucesso = true;
        
        // Atualiza signo
        const signos = ["♈ Áries", "♉ Touro", "♊ Gêmeos", "♋ Câncer", "♌ Leão", "♍ Virgem", "♎ Libra", "♏ Escorpião", "♐ Sagitário", "♑ Capricórnio", "♒ Aquário", "♓ Peixes"];
        let signo = "";
        if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) signo = signos[0];
        else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) signo = signos[1];
        else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) signo = signos[2];
        else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) signo = signos[3];
        else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) signo = signos[4];
        else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) signo = signos[5];
        else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) signo = signos[6];
        else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) signo = signos[7];
        else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) signo = signos[8];
        else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) signo = signos[9];
        else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) signo = signos[10];
        else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) signo = signos[11];
        
        registrosDB[usuario].signo = signo;
        mensagemExtra = `\n🌟 *Novo signo:* ${signo}`;
    }
    
    // ========== ALTERAR CIDADE ==========
    else if (campo === 'cidade') {
        if (novoValor.length < 3) {
            return reply(`❌ Cidade inválida! Mínimo 3 caracteres.`);
        }
        valorAntigo = registrosDB[usuario].cidade;
        registrosDB[usuario].cidade = novoValor;
        valorNovo = novoValor;
        alteracaoSucesso = true;
    }
    
    // ========== GERAR NOVO RG ==========
    else if (campo === 'rg') {
        const novoRg = Math.floor(Math.random() * 90000000) + 10000000;
        valorAntigo = registrosDB[usuario].rg.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        registrosDB[usuario].rg = novoRg;
        valorNovo = novoRg.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        alteracaoSucesso = true;
    }
    
    else {
        return reply(`❌ Campo inválido! Opções: nome, cpf, data, cidade, rg`);
    }

    // ========== FINALIZA ALTERAÇÃO ==========
    if (alteracaoSucesso) {
        registrosDB[usuario].dataAlteracao = new Date().toLocaleString('pt-BR');
        fs.writeFileSync(registrosPath, JSON.stringify(registrosDB, null, 2));
        
        coinsDB[usuario].coins -= custoAlteracao;
        fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
        
        const alteracaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                             `📝 *REGISTRO ALTERADO!* 📝\n\n` +
                             `✅ @${nomeUser}, seus dados foram atualizados com sucesso!\n\n` +
                             `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                             `🔄 *Campo alterado:* ${campo.toUpperCase()}\n` +
                             `📛 *Valor antigo:* ${valorAntigo}\n` +
                             `✨ *Novo valor:* ${valorNovo}${mensagemExtra}\n\n` +
                             `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                             `💰 *Custo da alteração:* ${custoAlteracao} N-Coins\n` +
                             `💵 *Saldo restante:* ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n` +
                             `📅 *Data da alteração:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                             `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        
        await keisen.sendMessage(from, { text: alteracaoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}

case 'registrar':
case 'registrarrpg':
case 'rg': {
    if (!isGroup) return reply(mess.onlyGroup());

    let argsString = args.join(' ');
    let partes = argsString.split('|');
    
    if (partes.length < 4) {
        return reply(`❌ *FORMATO CORRETO:*\n\n` +
                     `!registrar Nome Completo | CPF | Data de Nascimento | Cidade\n\n` +
                     `📌 *Exemplo:*\n` +
                     `!registrar João Silva da Costa | 123.456.789-00 | 15/05/1995 | Campina Grande-PB\n\n` +
                     `📌 *Ou use:*\n` +
                     `!registrarrpg Nome | CPF | Data | Cidade`);
    }

    let nomeCompleto = partes[0]?.trim();
    let cpf = partes[1]?.trim().replace(/[^0-9]/g, '');
    let dataNascimento = partes[2]?.trim();
    let cidade = partes[3]?.trim();

    // Validações
    if (!nomeCompleto || nomeCompleto.length < 5) {
        return reply("❌ Nome completo inválido. Use pelo menos 5 caracteres.");
    }
    
    if (!cpf || cpf.length !== 11) {
        return reply("❌ CPF inválido. Deve conter 11 dígitos.\nExemplo: 12345678900");
    }
    
    // Valida data de nascimento (formato DD/MM/AAAA)
    const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dataRegex.test(dataNascimento)) {
        return reply("❌ Data de nascimento inválida. Use formato: DD/MM/AAAA\nExemplo: 15/05/1995");
    }
    
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataObj = new Date(ano, mes - 1, dia);
    if (dataObj.getFullYear() != ano || dataObj.getMonth() != mes - 1 || dataObj.getDate() != dia) {
        return reply("❌ Data de nascimento inválida. Verifique o dia, mês e ano.");
    }
    
    // Verifica idade (mínimo 13 anos)
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const mesAtual = hoje.getMonth() + 1;
    if (mesAtual < mes || (mesAtual === mes && hoje.getDate() < dia)) {
        idade--;
    }
    
    if (idade < 13) {
        return reply("❌ Você precisa ter pelo menos 13 anos para se registrar.");
    }
    
    if (!cidade || cidade.length < 3) {
        return reply("❌ Cidade inválida. Digite sua cidade e estado.\nExemplo: Campina Grande-PB");
    }

    const fs = require('fs');
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    let registrosDB = {};
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));

    // Verifica se já está registrado
    if (registrosDB[sender]) {
        return reply(`❌ @${sender.split('@')[0]}, você já está registrado!\nUse \`!meurg\` para ver seus dados.`);
    }

    // Verifica se CPF já está cadastrado
    const cpfExistente = Object.values(registrosDB).find(r => r.cpf === cpf);
    if (cpfExistente) {
        return reply("❌ Este CPF já está cadastrado no sistema.");
    }

    // Gera números de identidade
    const rgNumero = Math.floor(Math.random() * 90000000) + 10000000;
    const carteiraTrabalho = Math.floor(Math.random() * 900000000) + 100000000;
    const tituloEleitor = Math.floor(Math.random() * 9000000000) + 1000000000;
    const carteiraMotorista = Math.floor(Math.random() * 90000000000) + 10000000000;
    const dataRegistro = new Date().toLocaleString('pt-BR');
    
    // Determina signo
    const signos = [
        "♈ Áries", "♉ Touro", "♊ Gêmeos", "♋ Câncer",
        "♌ Leão", "♍ Virgem", "♎ Libra", "♏ Escorpião",
        "♐ Sagitário", "♑ Capricórnio", "♒ Aquário", "♓ Peixes"
    ];
    
    let signo = "";
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) signo = signos[0];
    else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) signo = signos[1];
    else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) signo = signos[2];
    else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) signo = signos[3];
    else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) signo = signos[4];
    else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) signo = signos[5];
    else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) signo = signos[6];
    else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) signo = signos[7];
    else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) signo = signos[8];
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) signo = signos[9];
    else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) signo = signos[10];
    else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) signo = signos[11];

    // Registra o usuário
    registrosDB[sender] = {
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        rg: rgNumero,
        dataNascimento: dataNascimento,
        idade: idade,
        signo: signo,
        cidade: cidade,
        carteiraTrabalho: carteiraTrabalho,
        tituloEleitor: tituloEleitor,
        carteiraMotorista: carteiraMotorista,
        dataRegistro: dataRegistro
    };
    
    fs.writeFileSync(registrosPath, JSON.stringify(registrosDB, null, 2));

    // Bônus de registro
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 0 };
    const bonus = 500;
    coinsDB[sender].coins += bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    // Documento de registro
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const rgFormatado = rgNumero.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    const registroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `📜 *REGISTRO RPG CONCLUÍDO* 📜\n\n` +
                        `🎉 Parabéns @${sender.split('@')[0]}! Você agora é um cidadão RPG!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `📋 *DOCUMENTOS GERADOS* 📋\n\n` +
                        `👤 *Nome:* ${nomeCompleto}\n` +
                        `🆔 *RG:* ${rgFormatado}\n` +
                        `💳 *CPF:* ${cpfFormatado}\n` +
                        `🎂 *Nascimento:* ${dataNascimento} (${idade} anos)\n` +
                        `🌟 *Signo:* ${signo}\n` +
                        `📍 *Cidade:* ${cidade}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `📄 *OUTROS DOCUMENTOS* 📄\n\n` +
                        `📇 *CTPS:* ${carteiraTrabalho}\n` +
                        `🗳️ *Título Eleitor:* ${tituloEleitor}\n` +
                        `🚗 *CNH:* ${carteiraMotorista}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *BÔNUS DE REGISTRO:* +${bonus} N-Coins\n` +
                        `📅 *Data do registro:* ${dataRegistro}\n\n` +
                        `✅ *Status:* REGISTRO CONFIRMADO\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: registroMsg,
        mentions: [sender]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'meurg':
case 'meusdados':
case 'documentos': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    const fs = require('fs');
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    let registrosDB = {};
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));

    if (!registrosDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não está registrado!\nUse \`!registrar Nome | CPF | Data | Cidade\``);
    }

    const dados = registrosDB[alvo];
    const cpfFormatado = dados.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const rgFormatado = dados.rg.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    const rgMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📜 *DOCUMENTOS RPG* 📜\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *IDENTIFICAÇÃO* 📋\n\n` +
                  `📛 *Nome:* ${dados.nomeCompleto}\n` +
                  `🆔 *RG:* ${rgFormatado}\n` +
                  `💳 *CPF:* ${cpfFormatado}\n` +
                  `🎂 *Nascimento:* ${dados.dataNascimento} (${dados.idade} anos)\n` +
                  `🌟 *Signo:* ${dados.signo}\n` +
                  `📍 *Cidade:* ${dados.cidade}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📄 *OUTROS DOCUMENTOS* 📄\n\n` +
                  `📇 *CTPS:* ${dados.carteiraTrabalho}\n` +
                  `🗳️ *Título Eleitor:* ${dados.tituloEleitor}\n` +
                  `🚗 *CNH:* ${dados.carteiraMotorista}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📅 *Registrado em:* ${dados.dataRegistro}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: rgMsg,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// Inicializa arquivo de família
const familiaPath = './DADOS DO KEISEN/usuarios/familia.json';

case 'adotarrpg':
case 'adotar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './casamentos.json';
    const familiaPath = './familia.json';
    const coinsPath = './coins.json';
    const registrosPath = './registros.json';
    
    let casamentosDB = {};
    let familiaDB = {};
    let coinsDB = {};
    let registrosDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));

    function extrairNumero(id) {
        if (!id) return '';
        return id.split('@')[0].replace(/\D/g, '');
    }

    let usuario = sender;
    let tipo = 'filho';
    let nome = '';
    let isUserAdoption = false;
    let usuarioAdotadoId = null;
    let nomeRegistrado = '';
    
    let mencado = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (mencado) {
        isUserAdoption = true;
        usuarioAdotadoId = mencado;
        nome = extrairNumero(usuarioAdotadoId);
        
        if (args[0] && (args[0] === 'filho' || args[0] === 'filha')) {
            tipo = args[0];
        } else {
            tipo = 'filho';
        }
    }
    else if (args[0] && (args[0] === 'filho' || args[0] === 'filha')) {
        tipo = args[0];
        nome = args.slice(1).join(' ');
        
        if (!nome) return reply(`❌ Digite o nome do(a) ${tipo}: \`!adotarrpg ${tipo} Nome\``);
        
        let usuarioEncontrado = null;
        let nomeBuscado = nome.toLowerCase();
        
        for (let [userId, dados] of Object.entries(registrosDB)) {
            const nomeCompleto = dados.nomeCompleto.toLowerCase();
            if (nomeCompleto.includes(nomeBuscado) || dados.nomeCompleto.toLowerCase() === nomeBuscado) {
                usuarioEncontrado = userId;
                nomeRegistrado = dados.nomeCompleto;
                break;
            }
        }
        
        if (usuarioEncontrado) {
            isUserAdoption = true;
            usuarioAdotadoId = usuarioEncontrado;
            nome = nomeRegistrado.split(' ')[0];
        } else {
            isUserAdoption = false;
            if (nome.startsWith('@')) nome = nome.substring(1);
            if (nome.match(/^\d+$/)) {
                return reply(`❌ Nome inválido! Use um nome verdadeiro: \`!adotarrpg ${tipo} NomeDoFilho\``);
            }
            nome = nome.split(' ').map(palavra => {
                if (palavra.length > 0) return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
                return palavra;
            }).join(' ');
        }
    }
    else {
        return reply("❌ Uso:\n`!adotarrpg filho <nome>` - Adotar com nome (pode ser nome do RG)\n`!adotarrpg filha <nome>` - Adotar com nome\n`!adotarrpg @usuario` - Adotar um membro do grupo\n`!adotarrpg filho @usuario` - Adotar um membro como filho");
    }

    const numeroUser = extrairNumero(usuario);

    let casado = false;
    let conjugue = null;
    for (let id in casamentosDB) {
        if (casamentosDB[id] && casamentosDB[id].pessoa1 === usuario) {
            casado = true;
            conjugue = casamentosDB[id].pessoa2;
            break;
        } else if (casamentosDB[id] && casamentosDB[id].pessoa2 === usuario) {
            casado = true;
            conjugue = casamentosDB[id].pessoa1;
            break;
        }
    }

    if (!casado) return reply(`❌ @${numeroUser}, você precisa ser casado(a) para adotar um filho! Use \`!casarrpg @user\` primeiro.`);

    if (!familiaDB[usuario]) familiaDB[usuario] = { filhos: [], conjugue: conjugue };
    if (familiaDB[usuario].filhos.length >= 5) return reply(`❌ @${numeroUser}, você já atingiu o limite de 5 filhos!`);

    if (isUserAdoption && usuarioAdotadoId) {
        for (let [userId, data] of Object.entries(familiaDB)) {
            if (data.filhos && data.filhos.some(f => f.id === usuarioAdotadoId && f.isUser === true)) {
                return reply(`❌ @${extrairNumero(usuarioAdotadoId)} já foi adotado por outra pessoa!`);
            }
        }
    }

    const custoAdocao = 2000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoAdocao) return reply(`❌ Adotar um(a) ${tipo} custa ${custoAdocao} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);

    const agora = new Date();
    const dataAdocaoCompleta = agora.toLocaleString('pt-BR');
    const dataAdocaoISO = agora.toISOString();
    const filhoId = isUserAdoption ? usuarioAdotadoId : Date.now().toString();
    
    const novoFilho = {
        id: filhoId,
        nome: nome,
        tipo: tipo,
        idadeMeses: 0,
        dataAdocao: dataAdocaoCompleta,
        dataAdocaoISO: dataAdocaoISO,
        pai: usuario,
        mae: conjugue,
        isUser: isUserAdoption
    };

    familiaDB[usuario].filhos.push(novoFilho);
    if (conjugue) {
        if (!familiaDB[conjugue]) familiaDB[conjugue] = { filhos: [], conjugue: usuario };
        familiaDB[conjugue].filhos.push(novoFilho);
    }
    fs.writeFileSync(familiaPath, JSON.stringify(familiaDB, null, 2));

    coinsDB[usuario].coins -= custoAdocao;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const numeroConjugue = conjugue ? extrairNumero(conjugue) : '';
    let nomeExibicao = isUserAdoption && usuarioAdotadoId && usuarioAdotadoId.includes('@')
        ? `@${extrairNumero(usuarioAdotadoId)}`
        : nome;
    
    const mentions = [usuario];
    if (conjugue) mentions.push(conjugue);
    if (isUserAdoption && usuarioAdotadoId && usuarioAdotadoId.includes('@')) mentions.push(usuarioAdotadoId);
    
    const adocaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `👨‍👩‍👧 *ADOÇÃO REALIZADA!* 👨‍👩‍👧\n\n` +
                      `🎉 @${numeroUser}${numeroConjugue ? ` e @${numeroConjugue}` : ''} adotaram ${tipo === 'filho' ? 'um filho' : 'uma filha'}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `👶 *Nome:* ${nomeExibicao}\n` +
                      `📅 *Data da adoção:* ${dataAdocaoCompleta}\n` +
                      `💰 *Custo:* ${custoAdocao} N-Coins\n` +
                      `🆔 *ID:* \`${filhoId}\`\n\n` +
                      `💕 *"Família não é sobre sangue, é sobre amor!"* 💕\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: adocaoMsg,
        mentions: [...new Set(mentions)]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'meusfilhos':
case 'listarfilhos': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const familiaPath = './familia.json';
    
    let familiaDB = {};
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));

    function extrairNumero(id) {
        if (!id) return '';
        return id.split('@')[0].replace(/\D/g, '');
    }

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const numeroUser = extrairNumero(alvo);

    const familia = familiaDB[alvo];
    if (!familia || !familia.filhos || familia.filhos.length === 0) {
        return reply(`👶 @${numeroUser} não tem filhos adotados ainda.\nUse \`!adotarrpg filho/filha <nome>\` ou \`!adotarrpg @user\` para adotar.`);
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `👶 *FILHOS DE @${numeroUser}* 👶\n\n`;
    
    const mentions = [alvo];
    for (let i = 0; i < familia.filhos.length; i++) {
        const filho = familia.filhos[i];
        let nomeExibicao = '';
        let idExibicao = '';
        
        if (filho.isUser === true && filho.id && filho.id.includes('@')) {
            nomeExibicao = `@${extrairNumero(filho.id)}`;
            idExibicao = filho.id;
            mentions.push(filho.id);
        } else {
            nomeExibicao = filho.nome || (filho.tipo === 'filho' ? 'Filho' : 'Filha');
            idExibicao = filho.id;
        }
        
        const tipoEmoji = (filho.tipo === 'filho') ? '👦' : '👧';
        texto += `${i+1}º ${tipoEmoji} *${nomeExibicao}*\n`;
        texto += `   🆔 ID: \`${idExibicao}\`\n`;
        if (filho.dataAdocao) texto += `   📅 Adotado em: ${filho.dataAdocao}\n`;
        texto += `\n`;
    }
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: texto,
        mentions: [...new Set(mentions)]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'meusfilhos':
case 'listarfilhos': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const familiaPath = './DADOS DO KEISEN/usuarios/familia.json';
    
    let familiaDB = {};
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    const familia = familiaDB[alvo];
    if (!familia || !familia.filhos || familia.filhos.length === 0) {
        return reply(`👶 @${nomeUser} não tem filhos adotados ainda.\nUse \`!adotarrpg filho/filha <nome>\` ou \`!adotarrpg @user\` para adotar.`);
    }

    // Função para extrair nome puro do WhatsApp
    function extrairNomePuro(id) {
        if (!id) return null;
        let nome = id.split('@')[0];
        nome = nome.replace(/[⁨⁩⁦⁧⁪⁫⁬⁭⁮⁯\u200E\u200F\u202A-\u202E]/g, '');
        if (nome.match(/^\d+$/)) return null;
        if (nome.includes('|')) nome = nome.split('|')[0].trim();
        if (nome.includes('+')) nome = nome.split('+')[0].trim();
        return nome && nome.length > 0 ? nome : null;
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `👶 *FILHOS DE @${nomeUser}* 👶\n\n`;
    
    for (let i = 0; i < familia.filhos.length; i++) {
        const filho = familia.filhos[i];
        let nomeExibicao = '';
        let idExibicao = '';
        
        // Verifica se é um usuário real (adotado por @)
        if (filho.isUser === true && filho.id && filho.id.includes('@')) {
            const nomePuro = extrairNomePuro(filho.id);
            nomeExibicao = nomePuro ? `@${nomePuro}` : (filho.tipo === 'filho' ? 'Filho' : 'Filha');
            idExibicao = filho.id; // ID é o @ do WhatsApp
        } else {
            nomeExibicao = filho.nome || (filho.tipo === 'filho' ? 'Filho' : 'Filha');
            idExibicao = filho.id; // ID é numérico
        }
        
        const tipoEmoji = (filho.tipo === 'filho') ? '👦' : '👧';
        texto += `${i+1}º ${tipoEmoji} *${nomeExibicao}*\n`;
        texto += `   🆔 ID: \`${idExibicao}\`\n`;
        if (filho.dataAdocao) {
            texto += `   📅 Adotado em: ${filho.dataAdocao}\n`;
        }
        texto += `\n`;
    }
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // Monta lista de menções para os filhos que são usuários
    const mentions = [];
    for (const filho of familia.filhos) {
        if (filho.isUser === true && filho.id && filho.id.includes('@')) {
            mentions.push(filho.id);
        }
    }

    await keisen.sendMessage(from, {
        text: texto,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}


case 'minhafamilia':
case 'familia': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './casamentos.json';
    const familiaPath = './familia.json';
    const coinsPath = './coins.json';
    const petsPath = './pets.json';
    
    let casamentosDB = {};
    let familiaDB = {};
    let coinsDB = {};
    let petsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));

    function extrairNumero(id) {
        if (!id) return '';
        return id.split('@')[0].replace(/\D/g, '');
    }

    function calcularIdadeMeses(dataAdocaoISO) {
        if (!dataAdocaoISO) return 0;
        try {
            const dataAdocao = new Date(dataAdocaoISO);
            if (isNaN(dataAdocao.getTime())) return 0;
            const diffMeses = (Date.now() - dataAdocao.getTime()) / (1000 * 60 * 60 * 24 * 30);
            return Math.floor(diffMeses);
        } catch (e) {
            return 0;
        }
    }

    let alvo = sender;
    if (typeof menc_os2 !== 'undefined' && menc_os2 && menc_os2 !== '') alvo = menc_os2;
    if (!alvo || alvo === '') alvo = sender;
    
    const paiId = alvo;
    const paiNumero = extrairNumero(paiId);

    let maeId = null;
    let maeNumero = '';
    let dataCasamento = '';
    for (let id in casamentosDB) {
        if (casamentosDB[id] && casamentosDB[id].pessoa1 === alvo) {
            maeId = casamentosDB[id].pessoa2;
            maeNumero = extrairNumero(maeId);
            dataCasamento = casamentosDB[id].data;
            break;
        } else if (casamentosDB[id] && casamentosDB[id].pessoa2 === alvo) {
            maeId = casamentosDB[id].pessoa1;
            maeNumero = extrairNumero(maeId);
            dataCasamento = casamentosDB[id].data;
            break;
        }
    }

    let filhos = [];
    if (familiaDB[alvo] && familiaDB[alvo].filhos && Array.isArray(familiaDB[alvo].filhos)) filhos = familiaDB[alvo].filhos;
    
    const saldo = (coinsDB[alvo] && typeof coinsDB[alvo].coins !== 'undefined') ? coinsDB[alvo].coins : 0;
    const totalPets = (petsDB[alvo] && Array.isArray(petsDB[alvo])) ? petsDB[alvo].length : 0;

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `👨‍👩‍👧 *MINHA FAMÍLIA* 👨‍👩‍👧\n\n`;
    texto += `👨 *Pai:* @${paiNumero}\n`;
    
    if (maeId && maeNumero) {
        texto += `👩 *Mãe:* @${maeNumero}\n`;
        texto += `💍 *Casados desde:* ${dataCasamento}\n`;
    } else {
        texto += `👩 *Mãe:* Solteiro(a)\n`;
    }
    
    texto += `\n💰 *Patrimônio:* ${saldo.toLocaleString()} N-Coins\n`;
    texto += `🐾 *Pets:* ${totalPets}\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    texto += `👶 *FILHOS ADOTADOS* 👶\n`;

    if (filhos.length === 0) {
        texto += `   🍼 Nenhum filho ainda.\n`;
        texto += `   💡 Use \`!adotarrpg filho <nome>\` ou \`!adotarrpg @user\` para adotar\n`;
    } else {
        for (let i = 0; i < filhos.length; i++) {
            const filho = filhos[i];
            if (!filho) continue;

            let nomeExibicao = filho.isUser === true && filho.id && filho.id.includes('@')
                ? `@${extrairNumero(filho.id)}`
                : (filho.nome || (filho.tipo === 'filho' ? 'Filho' : 'Filha'));
            
            const idade = calcularIdadeMeses(filho.dataAdocaoISO);
            const dataAdocaoExibicao = filho.dataAdocao || 'Data não registrada';
            const tipoEmoji = (filho.tipo === 'filho') ? '👦' : '👧';
                
            texto += `\n   ${i+1}º ${tipoEmoji} *${nomeExibicao}*\n`;
            texto += `      📅 *Adotado em:* ${dataAdocaoExibicao}\n`;
            texto += `      🎂 *Idade:* ${idade} meses\n`;
            texto += `      🆔 *ID:* \`${filho.id || 'Sem ID'}\`\n`;
        }
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    let mentions = [paiId];
    if (maeId) mentions.push(maeId);
    for (const filho of filhos) {
        if (filho && filho.isUser === true && filho.id && filho.id.includes('@')) mentions.push(filho.id);
    }

    await keisen.sendMessage(from, {
        text: texto,
        mentions: [...new Set(mentions)]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE FACÇÃO CRIMINOSA ====================

// ========== CRIAR FACÇÃO ==========
case 'convidar':
case 'convidarfaccao':
case 'chamar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!alvo) return reply(`❌ Uso: \`!convidar @user\``);
    if (alvo === usuario) return reply(`❌ Você não pode se convidar!`);

    // Encontra a facção do usuário
    let minhaFac = null;
    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            faccaoId = id;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);

    // Verifica se o usuário pode convidar (Líder, Vice-Líder ou Gerente)
    const cargoUser = minhaFac.membros[usuario].cargo;
    const cargosPermitidos = ["Líder", "Vice-Líder", "Gerente", "Capitão"];
    if (!cargosPermitidos.includes(cargoUser)) {
        return reply(`❌ @${nomeUser}, apenas ${cargosPermitidos.join(', ')} podem convidar membros!`);
    }

    // Verifica se o alvo já está em alguma facção
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[alvo]) {
            return reply(`❌ @${alvo.split('@')[0]} já está na facção "${data.nome}"!`);
        }
    }

    // Verifica se já existe convite pendente
    if (!minhaFac.convites) minhaFac.convites = {};
    if (minhaFac.convites[alvo]) {
        return reply(`⏳ @${alvo.split('@')[0]} já possui um convite pendente para sua facção!`);
    }

    // Cria o convite
    minhaFac.convites[alvo] = {
        de: usuario,
        data: new Date().toLocaleString('pt-BR'),
        status: "pendente"
    };
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📨 *CONVITE PARA FACÇÃO!* 📨\n\n` +
                  `👑 @${nomeUser} convidou @${alvo.split('@')[0]} para entrar na facção "${minhaFac.nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `✅ *Para ACEITAR:* \`!aceitarconvite\`\n` +
                  `❌ *Para RECUSAR:* \`!recusarconvite\`\n\n` +
                  `⏰ *Convite válido por 24 horas!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ACEITAR CONVITE ==========
case 'aceitarconvite':
case 'aceitarconvitep':
case 'entrar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    // Verifica se o usuário já está em alguma facção
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            return reply(`❌ @${nomeUser}, você já está na facção "${data.nome}"!`);
        }
    }

    // Procura por um convite pendente
    let faccaoIdComConvite = null;
    let conviteData = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.convites && data.convites[usuario] && data.convites[usuario].status === "pendente") {
            faccaoIdComConvite = id;
            conviteData = data.convites[usuario];
            break;
        }
    }

    if (!faccaoIdComConvite) {
        return reply(`❌ @${nomeUser}, você não tem nenhum convite pendente!`);
    }

    // Aceita o convite
    const faccao = faccaoDB[faccaoIdComConvite];
    delete faccao.convites[usuario];
    faccao.membros[usuario] = {
        cargo: "Recruta",
        dataEntrada: new Date().toLocaleString('pt-BR'),
        crimes: 0
    };
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const convidante = conviteData.de.split('@')[0];
    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `✅ *CONVITE ACEITO!* ✅\n\n` +
                  `🎉 @${nomeUser} entrou na facção "${faccao.nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👑 *Convidado por:* @${convidante}\n` +
                  `🪖 *Cargo inicial:* Recruta\n` +
                  `📅 *Data de entrada:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `🎊 *Bem-vindo à família!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, conviteData.de] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RECUSAR CONVITE ==========
case 'recusarconvite':
case 'recusarconvitep': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    // Procura por um convite pendente
    let faccaoIdComConvite = null;
    let conviteData = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.convites && data.convites[usuario] && data.convites[usuario].status === "pendente") {
            faccaoIdComConvite = id;
            conviteData = data.convites[usuario];
            break;
        }
    }

    if (!faccaoIdComConvite) {
        return reply(`❌ @${nomeUser}, você não tem nenhum convite pendente!`);
    }

    // Recusa o convite
    delete faccaoDB[faccaoIdComConvite].convites[usuario];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const convidante = conviteData.de.split('@')[0];
    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `❌ *CONVITE RECUSADO!* ❌\n\n` +
                  `😔 @${nomeUser} recusou o convite para entrar na facção.\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👑 *Convidado por:* @${convidante}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, conviteData.de] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== CANCELAR CONVITE ==========
case 'cancelarconvite':
case 'cancelarconvitep': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!alvo) return reply(`❌ Uso: \`!cancelarconvite @user\``);

    // Encontra a facção do usuário
    let minhaFac = null;
    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            faccaoId = id;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);

    // Verifica se o usuário pode cancelar convite
    const cargoUser = minhaFac.membros[usuario].cargo;
    const cargosPermitidos = ["Líder", "Vice-Líder", "Gerente", "Capitão"];
    if (!cargosPermitidos.includes(cargoUser)) {
        return reply(`❌ Apenas ${cargosPermitidos.join(', ')} podem cancelar convites!`);
    }

    if (!minhaFac.convites || !minhaFac.convites[alvo]) {
        return reply(`❌ @${alvo.split('@')[0]} não possui convite pendente!`);
    }

    delete minhaFac.convites[alvo];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `❌ *CONVITE CANCELADO!* ❌\n\n` +
                  `👑 @${nomeUser} cancelou o convite de @${alvo.split('@')[0]} para a facção "${minhaFac.nome}".\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== LISTAR CONVITES ==========
case 'listarconvites':
case 'meusconvites': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    // Verifica se o usuário já está em alguma facção
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            return reply(`❌ @${nomeUser}, você já está na facção "${data.nome}"!`);
        }
    }

    // Procura por convites pendentes
    let convites = [];
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.convites && data.convites[usuario] && data.convites[usuario].status === "pendente") {
            convites.push({
                faccao: data.nome,
                faccaoId: id,
                de: data.convites[usuario].de,
                data: data.convites[usuario].data
            });
        }
    }

    if (convites.length === 0) {
        return reply(`📨 @${nomeUser}, você não tem nenhum convite pendente!`);
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `📨 *SEUS CONVITES* 📨\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    for (const convite of convites) {
        const convidante = convite.de.split('@')[0];
        texto += `🔹 *Facção:* ${convite.faccao}\n`;
        texto += `   👑 *Convidado por:* @${convidante}\n`;
        texto += `   📅 *Data:* ${convite.data}\n`;
        texto += `   ✅ Use \`!aceitarconvite\` para aceitar\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'criarfaccao':
case 'fundarfaccao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let faccaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const nomeFaccao = args.slice(0).join(' ');

    if (!nomeFaccao) return reply(`❌ Uso: \`!criarfaccao <nome da facção>\``);

    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            return reply(`❌ @${nomeUser}, você já está na facção "${data.nome}"!`);
        }
    }

    const custoCriacao = 10000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoCriacao) {
        return reply(`❌ @${nomeUser}, criar uma facção custa ${custoCriacao} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    coinsDB[usuario].coins -= custoCriacao;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const faccaoId = Date.now().toString();
    faccaoDB[faccaoId] = {
        id: faccaoId,
        nome: nomeFaccao,
        dono: usuario,
        dataCriacao: new Date().toLocaleString('pt-BR'),
        membros: {
            [usuario]: { cargo: "Líder", dataEntrada: new Date().toLocaleString('pt-BR'), crimes: 0 }
        },
        dinheiro: 0,
        armas: 0,
        drogas: 0,
        reputacao: 0
    };
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🔥 *FACÇÃO CRIADA!* 🔥\n\n` +
                  `👤 @${nomeUser} fundou a facção "${nomeFaccao}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *Custo:* ${custoCriacao} N-Coins\n` +
                  `👑 *Cargo:* Líder\n` +
                  `🆔 *ID da Facção:* \`${faccaoId}\`\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `💡 Use \`!entrarfaccao ${faccaoId}\` para convidar membros!\n` +
                  `📋 Use \`!perfilfaccao\` para ver sua facção!\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== LISTAR FACÇÕES ==========
case 'listarfaccoes':
case 'faccoes': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const faccoes = Object.values(faccaoDB);
    if (faccoes.length === 0) return reply(`📋 Nenhuma facção criada ainda. Use \`!criarfaccao\` para criar uma!`);

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🔥 *FACÇÕES CRIMINOSAS* 🔥\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    for (const faccao of faccoes) {
        const dono = faccao.dono.split('@')[0];
        const membrosCount = Object.keys(faccao.membros).length;
        texto += `🔹 *${faccao.nome}*\n`;
        texto += `   🆔 ID: \`${faccao.id}\`\n`;
        texto += `   👑 Líder: @${dono}\n`;
        texto += `   👥 Membros: ${membrosCount}\n`;
        texto += `   💰 Dinheiro: ${faccao.dinheiro.toLocaleString()} N-Coins\n`;
        texto += `   ⭐ Reputação: ${faccao.reputacao}\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== SOLICITAR ENTRADA ==========
case 'entrarfaccao':
case 'solicitarentrada': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const faccaoId = args[0];

    if (!faccaoId) return reply(`❌ Uso: \`!entrarfaccao <id_da_faccao>\`\nUse \`!listarfaccoes\` para ver os IDs.`);

    if (!faccaoDB[faccaoId]) return reply(`❌ Facção não encontrada!`);

    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            return reply(`❌ @${nomeUser}, você já está na facção "${data.nome}"!`);
        }
    }

    if (!faccaoDB[faccaoId].pedidos) faccaoDB[faccaoId].pedidos = {};
    faccaoDB[faccaoId].pedidos[usuario] = {
        data: new Date().toLocaleString('pt-BR'),
        status: "pendente"
    };
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const dono = faccaoDB[faccaoId].dono;
    const nomeDono = dono.split('@')[0];

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📝 *PEDIDO DE ENTRADA* 📝\n\n` +
                  `👤 @${nomeUser} solicitou entrada na facção "${faccaoDB[faccaoId].nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👑 *Líder:* @${nomeDono}\n` +
                  `✅ Use \`!aceitarentrada ${faccaoId} @${nomeUser}\` para aceitar\n` +
                  `❌ Use \`!recusarentrada ${faccaoId} @${nomeUser}\` para recusar\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, dono] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ACEITAR ENTRADA ==========
case 'aceitarentrada': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const faccaoId = args[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!faccaoId || !alvo) return reply(`❌ Uso: \`!aceitarentrada <id_faccao> @user\``);

    if (!faccaoDB[faccaoId]) return reply(`❌ Facção não encontrada!`);

    if (faccaoDB[faccaoId].dono !== usuario) {
        return reply(`❌ Apenas o líder @${faccaoDB[faccaoId].dono.split('@')[0]} pode aceitar membros!`);
    }

    if (!faccaoDB[faccaoId].pedidos || !faccaoDB[faccaoId].pedidos[alvo]) {
        return reply(`❌ @${alvo.split('@')[0]} não tem pedido pendente!`);
    }

    delete faccaoDB[faccaoId].pedidos[alvo];
    faccaoDB[faccaoId].membros[alvo] = { cargo: "Olheiro", dataEntrada: new Date().toLocaleString('pt-BR'), crimes: 0 };
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `✅ *ENTRADA ACEITA!* ✅\n\n` +
                  `👑 @${nomeUser} aceitou @${alvo.split('@')[0]} na facção "${faccaoDB[faccaoId].nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `🪖 *Cargo:* Olheiro\n` +
                  `📅 *Data de entrada:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `🎉 *Bem-vindo à família!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RECUSAR ENTRADA ==========
case 'recusarentrada': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const faccaoId = args[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!faccaoId || !alvo) return reply(`❌ Uso: \`!recusarentrada <id_faccao> @user\``);

    if (!faccaoDB[faccaoId]) return reply(`❌ Facção não encontrada!`);

    if (faccaoDB[faccaoId].dono !== usuario) {
        return reply(`❌ Apenas o líder pode recusar membros!`);
    }

    if (!faccaoDB[faccaoId].pedidos || !faccaoDB[faccaoId].pedidos[alvo]) {
        return reply(`❌ @${alvo.split('@')[0]} não tem pedido pendente!`);
    }

    delete faccaoDB[faccaoId].pedidos[alvo];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `❌ *ENTRADA RECUSADA!* ❌\n\n` +
                  `👑 @${nomeUser} recusou a entrada de @${alvo.split('@')[0]} na facção "${faccaoDB[faccaoId].nome}".\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERFIL DA FACÇÃO ==========
case 'perfilfaccao':
case 'minhafaccao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = { id, ...data };
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);

    const cargos = {
        "Líder": "👑", "Vice-Líder": "⚜️", "Gerente": "📊",
        "Capitão": "⭐", "Soldado": "🔫", "Olheiro": "🔍", "Recruta": "🪖"
    };
    const meuCargo = minhaFac.membros[usuario].cargo;
    const meuEmoji = cargos[meuCargo] || "👤";

    let membrosLista = '';
    for (let [id, membro] of Object.entries(minhaFac.membros)) {
        const nome = id.split('@')[0];
        const emojiCargo = cargos[membro.cargo] || "👤";
        membrosLista += `   ${emojiCargo} *${membro.cargo}* - @${nome}\n`;
    }

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🔥 *PERFIL DA FACÇÃO* 🔥\n\n` +
                  `📛 *Nome:* ${minhaFac.nome}\n` +
                  `🆔 *ID:* \`${minhaFac.id}\`\n` +
                  `👑 *Líder:* @${minhaFac.dono.split('@')[0]}\n` +
                  `📅 *Criada em:* ${minhaFac.dataCriacao}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👤 *SEU CARGO:* ${meuEmoji} ${meuCargo}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *FINANÇAS:*\n` +
                  `   💵 Dinheiro: ${minhaFac.dinheiro.toLocaleString()} N-Coins\n` +
                  `   🔫 Armas: ${minhaFac.armas}\n` +
                  `   🌿 Drogas: ${minhaFac.drogas} kg\n` +
                  `   ⭐ Reputação: ${minhaFac.reputacao}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `👥 *MEMBROS:*\n${membrosLista}\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PROMOVER CARGO ==========
case 'promovercargo':
case 'promoverfaccao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!alvo) return reply(`❌ Uso: \`!promovercargo @user\``);

    let minhaFac = null;
    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            faccaoId = id;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);

    if (minhaFac.dono !== usuario && minhaFac.membros[usuario].cargo !== "Vice-Líder") {
        return reply(`❌ Apenas o Líder ou Vice-Líder pode promover membros!`);
    }

    if (!minhaFac.membros[alvo]) return reply(`❌ @${alvo.split('@')[0]} não está na sua facção!`);

    const cargos = ["Recruta", "Olheiro", "Soldado", "Capitão", "Gerente", "Vice-Líder", "Líder"];
    const cargoAtual = minhaFac.membros[alvo].cargo;
    const cargoIndex = cargos.indexOf(cargoAtual);
    
    if (cargoIndex >= cargos.length - 1) return reply(`❌ @${alvo.split('@')[0]} já está no cargo máximo!`);
    if (cargoAtual === "Vice-Líder" && minhaFac.dono !== usuario) {
        return reply(`❌ Apenas o Líder pode promover um Vice-Líder!`);
    }

    const novoCargo = cargos[cargoIndex + 1];
    minhaFac.membros[alvo].cargo = novoCargo;
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📈 *PROMOÇÃO CONCEDIDA!* 📈\n\n` +
                  `👑 @${nomeUser} promoveu @${alvo.split('@')[0]} na facção "${minhaFac.nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📊 *Cargo anterior:* ${cargoAtual}\n` +
                  `🎖️ *Novo cargo:* ${novoCargo}\n\n` +
                  `👏 *Parabéns pela promoção!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== REBAIXAR CARGO ==========
case 'rebaixarcargo':
case 'rebaixarfaccao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!alvo) return reply(`❌ Uso: \`!rebaixarcargo @user\``);

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);
    if (minhaFac.dono !== usuario) return reply(`❌ Apenas o Líder pode rebaixar membros!`);
    if (!minhaFac.membros[alvo]) return reply(`❌ @${alvo.split('@')[0]} não está na sua facção!`);
    if (alvo === usuario) return reply(`❌ Você não pode rebaixar a si mesmo!`);

    const cargos = ["Recruta", "Olheiro", "Soldado", "Capitão", "Gerente", "Vice-Líder", "Líder"];
    const cargoAtual = minhaFac.membros[alvo].cargo;
    const cargoIndex = cargos.indexOf(cargoAtual);
    
    if (cargoIndex <= 0) return reply(`❌ @${alvo.split('@')[0]} já está no cargo mínimo!`);

    const novoCargo = cargos[cargoIndex - 1];
    minhaFac.membros[alvo].cargo = novoCargo;
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📉 *REBAIXAMENTO!* 📉\n\n` +
                  `👑 @${nomeUser} rebaixou @${alvo.split('@')[0]} na facção "${minhaFac.nome}"!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📊 *Cargo anterior:* ${cargoAtual}\n` +
                  `🎖️ *Novo cargo:* ${novoCargo}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== EXPULSAR DA FACÇÃO ==========
case 'expulsarfaccao':
case 'removermembro': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;

    if (!alvo) return reply(`❌ Uso: \`!expulsarfaccao @user\``);

    let minhaFac = null;
    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            faccaoId = id;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);
    if (minhaFac.dono !== usuario) return reply(`❌ Apenas o Líder pode expulsar membros!`);
    if (!minhaFac.membros[alvo]) return reply(`❌ @${alvo.split('@')[0]} não está na sua facção!`);
    if (alvo === usuario) return reply(`❌ Você não pode se expulsar! Use \`!sairfaccao\``);

    delete minhaFac.membros[alvo];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `⚠️ *MEMBRO EXPULSO!* ⚠️\n\n` +
                  `👑 @${nomeUser} expulsou @${alvo.split('@')[0]} da facção "${minhaFac.nome}"!\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== SAIR DA FACÇÃO ==========
case 'sairfaccao':
case 'sair': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let minhaFac = null;
    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            faccaoId = id;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você não está em nenhuma facção!`);
    if (minhaFac.dono === usuario) return reply(`❌ @${nomeUser}, você é o Líder! Use \`!deletarfaccao\` para dissolver a facção.`);

    delete minhaFac.membros[usuario];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🚪 *VOCÊ SAIU DA FACÇÃO!* 🚪\n\n` +
                  `👤 @${nomeUser} saiu da facção "${minhaFac.nome}".\n\n` +
                  `💔 *Até logo!*\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== DELETAR FACÇÃO ==========
case 'deletarfaccao':
case 'dissolverfaccao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    
    let faccaoDB = {};
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let faccaoId = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.dono === usuario) {
            faccaoId = id;
            break;
        }
    }

    if (!faccaoId) return reply(`❌ @${nomeUser}, você não é líder de nenhuma facção!`);

    delete faccaoDB[faccaoId];
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `💀 *FACÇÃO DISSOLVIDA!* 💀\n\n` +
                  `👑 @${nomeUser} dissolveu sua facção.\n\n` +
                  `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ASSALTAR LOJA ==========
case 'assaltarloja':
case 'assaltar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const policiaPath = './DADOS DO KEISEN/usuarios/policia.json';
    
    let faccaoDB = {};
    let coinsDB = {};
    let policiaDB = {};
    
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(policiaPath)) policiaDB = JSON.parse(fs.readFileSync(policiaPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você precisa estar em uma facção para assaltar!`);

    const risco = Math.random();
    const sucesso = risco > 0.3;
    const ganho = Math.floor(Math.random() * 5000) + 1000;

    if (sucesso) {
        minhaFac.dinheiro += ganho;
        if (coinsDB[usuario]) coinsDB[usuario].coins += Math.floor(ganho * 0.3);
        else coinsDB[usuario] = { coins: Math.floor(ganho * 0.3) };
        
        fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));
        fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

        const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💰 *ASSALTO BEM-SUCEDIDO!* 💰\n\n` +
                      `🔫 @${nomeUser} assaltou uma loja!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💵 *Ganho para facção:* +${ganho.toLocaleString()} N-Coins\n` +
                      `💰 *Seu lucro:* +${Math.floor(ganho * 0.3).toLocaleString()} N-Coins\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        
        await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } else {
        // Falhou - polícia chamada
        const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🚨 *ASSALTO FRUSTRADO!* 🚨\n\n` +
                      `😭 @${nomeUser} tentou assaltar uma loja mas a polícia foi chamada!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `⚠️ *A polícia está investigando o ocorrido!*\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        
        await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}

// ========== VENDER DROGA ==========
case 'venderdroga':
case 'vender': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let faccaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const quantidade = parseInt(args[0]);

    if (isNaN(quantidade) || quantidade <= 0) return reply(`❌ Uso: \`!venderdroga <quantidade>\``);

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você precisa estar em uma facção para vender drogas!`);

    if (minhaFac.drogas < quantidade) {
        return reply(`❌ @${nomeUser}, a facção tem apenas ${minhaFac.drogas} kg de drogas!`);
    }

    const precoKg = Math.floor(Math.random() * 500) + 200;
    const ganho = quantidade * precoKg;
    const ganhoFac = Math.floor(ganho * 0.5);
    const ganhoUser = ganho - ganhoFac;

    minhaFac.drogas -= quantidade;
    minhaFac.dinheiro += ganhoFac;
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += ganhoUser;
    
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🌿 *VENDA DE DROGAS!* 🌿\n\n` +
                  `🔫 @${nomeUser} vendeu ${quantidade}kg de drogas!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *Preço por kg:* ${precoKg} N-Coins\n` +
                  `💵 *Ganho total:* ${ganho.toLocaleString()} N-Coins\n` +
                  `🏛️ *Para a facção:* +${ganhoFac.toLocaleString()} N-Coins\n` +
                  `👤 *Seu lucro:* +${ganhoUser.toLocaleString()} N-Coins\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== COMPRAR DROGA ==========
case 'comprardroga':
case 'comprar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let faccaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const quantidade = parseInt(args[0]);

    if (isNaN(quantidade) || quantidade <= 0) return reply(`❌ Uso: \`!comprardroga <quantidade>\``);

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você precisa estar em uma facção para comprar drogas!`);

    const precoKg = Math.floor(Math.random() * 300) + 100;
    const custo = quantidade * precoKg;

    if (minhaFac.dinheiro < custo) {
        return reply(`❌ A facção tem apenas ${minhaFac.dinheiro.toLocaleString()} N-Coins!`);
    }

    minhaFac.dinheiro -= custo;
    minhaFac.drogas += quantidade;
    fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🌿 *COMPRA DE DROGAS!* 🌿\n\n` +
                  `🔫 @${nomeUser} comprou ${quantidade}kg de drogas!\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💰 *Preço por kg:* ${precoKg} N-Coins\n` +
                  `💸 *Custo total:* ${custo.toLocaleString()} N-Coins\n` +
                  `📦 *Estoque atual:* ${minhaFac.drogas} kg\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ROUBAR FACÇÃO ==========
case 'roubarfaccao':
case 'roubar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const faccaoPath = './DADOS DO KEISEN/usuarios/faccao.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let faccaoDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(faccaoPath)) faccaoDB = JSON.parse(fs.readFileSync(faccaoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const faccaoId = args[0];

    if (!faccaoId) return reply(`❌ Uso: \`!roubarfaccao <id_faccao>\``);

    if (!faccaoDB[faccaoId]) return reply(`❌ Facção não encontrada!`);

    let minhaFac = null;
    for (let [id, data] of Object.entries(faccaoDB)) {
        if (data.membros && data.membros[usuario]) {
            minhaFac = data;
            break;
        }
    }

    if (!minhaFac) return reply(`❌ @${nomeUser}, você precisa estar em uma facção para roubar!`);

    const alvo = faccaoDB[faccaoId];
    const risco = Math.random();
    const chanceSucesso = 0.3 - (alvo.reputacao / 1000);
    const sucesso = risco > chanceSucesso;

    if (sucesso) {
        const roubo = Math.min(alvo.dinheiro, Math.floor(Math.random() * 10000) + 1000);
        alvo.dinheiro -= roubo;
        minhaFac.dinheiro += roubo;
        
        fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

        const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💰 *ROUBO BEM-SUCEDIDO!* 💰\n\n` +
                      `🔫 @${nomeUser} roubou ${roubo.toLocaleString()} N-Coins da facção "${alvo.nome}"!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💵 *Valor roubado:* ${roubo.toLocaleString()} N-Coins\n` +
                      `🏛️ *Adicionado à sua facção:* +${roubo.toLocaleString()} N-Coins\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        
        await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    } else {
        // Falhou - perde reputação
        minhaFac.reputacao = Math.max(0, minhaFac.reputacao - 50);
        fs.writeFileSync(faccaoPath, JSON.stringify(faccaoDB, null, 2));

        const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🚨 *ROUBO FRUSTRADO!* 🚨\n\n` +
                      `😭 @${nomeUser} tentou roubar a facção "${alvo.nome}" mas foi descoberto!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `📉 *Reputação da sua facção:* -50\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        
        await keisen.sendMessage(from, { text: texto, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    }
    break;
}
///////////////// sistema de coins 
case 'addcoins': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    let chaveOuMencao = args[0];
    let quantia = parseInt(args[1]);

    if (!chaveOuMencao || isNaN(quantia) || quantia <= 0) {
        return reply("❌ Uso: `!addcoins <chave_pix> <quantia>`\nOu: `!addcoins @user <quantia>`\nExemplo: `!addcoins joaosilva 500`");
    }

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    
    let coinsDB = {};
    let pixDB = {};
    
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    let alvo = null;

    // Verifica se é uma menção (@)
    if (chaveOuMencao.startsWith('@')) {
        alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
        if (!alvo) return reply("❌ Usuário não encontrado.");
    } else {
        // Procura pela chave Pix
        const chave = chaveOuMencao.toLowerCase().replace(/[^a-z0-9]/g, '');
        const usuarioEncontrado = Object.entries(pixDB).find(([_, data]) => data.chave === chave);
        
        if (!usuarioEncontrado) {
            return reply(`❌ Chave Pix \`${chave}\` não encontrada.\nUse \`!cadastrarchave <nickname>\` para cadastrar uma chave.`);
        }
        alvo = usuarioEncontrado[0];
    }

    if (!coinsDB[alvo]) coinsDB[alvo] = { coins: 0 };
    coinsDB[alvo].coins += quantia;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const nomeUser = alvo.split('@')[0];
    const chaveUsada = chaveOuMencao.startsWith('@') ? `@${nomeUser}` : chaveOuMencao;
    
    // Comprovante de depósito
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');
    const transacaoId = 'DEP' + Date.now().toString().slice(-8);
    const saldoAtual = coinsDB[alvo].coins.toLocaleString();

    const comprovante = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `🏦 *COMPROVANTE DE DEPÓSITO* 🏦\n\n` +
                        `📋 *Tipo:* Depósito N-Coins\n` +
                        `🆔 *Transação ID:* ${transacaoId}\n` +
                        `📅 *Data:* ${dataFormatada}\n` +
                        `⏰ *Hora:* ${horaFormatada}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `🔑 *Chave Pix:* ${chaveUsada}\n` +
                        `👤 *Beneficiário:* @${nomeUser}\n` +
                        `💸 *Valor depositado:* R$ ${quantia.toLocaleString()},00\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *Saldo atual:* R$ ${saldoAtual},00\n\n` +
                        `✅ *Status:* CONFIRMADO\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: comprovante,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'transfercoins':
case 'transferir': {
    if (!isGroup) return reply(mess.onlyGroup());

    let chaveOuMencao = args[0];
    let quantia = parseInt(args[1]);

    if (!chaveOuMencao || isNaN(quantia) || quantia <= 0) {
        return reply("❌ Uso: `!transfercoins <chave_pix> <quantia>`\nOu: `!transfercoins @user <quantia>`\nExemplo: `!transfercoins joaosilva 500`");
    }

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    
    let coinsDB = {};
    let pixDB = {};
    
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    let destinatario = null;
    let chaveUsada = chaveOuMencao;

    // Verifica se é uma menção (@)
    if (chaveOuMencao.startsWith('@')) {
        destinatario = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
        if (!destinatario) return reply("❌ Usuário não encontrado.");
        chaveUsada = `@${destinatario.split('@')[0]}`;
    } else {
        // Procura pela chave Pix
        const chave = chaveOuMencao.toLowerCase().replace(/[^a-z0-9]/g, '');
        const usuarioEncontrado = Object.entries(pixDB).find(([_, data]) => data.chave === chave);
        
        if (!usuarioEncontrado) {
            return reply(`❌ Chave Pix \`${chave}\` não encontrada.\nUse \`!cadastrarchave <nickname>\` para cadastrar uma chave.`);
        }
        destinatario = usuarioEncontrado[0];
    }

    // Verifica se o remetente existe
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 500 };
    if (!coinsDB[destinatario]) coinsDB[destinatario] = { coins: 0 };
    
    // Verifica saldo
    if (coinsDB[sender].coins < quantia) {
        return reply(`❌ Você tem apenas ${coinsDB[sender].coins.toLocaleString()} N-Coins. Saldo insuficiente.`);
    }
    
    // Realiza a transferência
    coinsDB[sender].coins -= quantia;
    coinsDB[destinatario].coins += quantia;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    // Dados do comprovante
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');
    const transacaoId = 'PIX' + Date.now().toString().slice(-8);
    const remetenteNome = sender.split('@')[0];
    const destinatarioNome = destinatario.split('@')[0];
    const saldoAtual = coinsDB[sender].coins.toLocaleString();

    const comprovante = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `🏦 *COMPROVANTE DE TRANSFERÊNCIA* 🏦\n\n` +
                        `📋 *Tipo:* PIX (N-Coins)\n` +
                        `🔑 *Chave Pix:* ${chaveUsada}\n` +
                        `🆔 *Transação ID:* ${transacaoId}\n` +
                        `📅 *Data:* ${dataFormatada}\n` +
                        `⏰ *Hora:* ${horaFormatada}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `👤 *Remetente:* @${remetenteNome}\n` +
                        `👥 *Destinatário:* @${destinatarioNome}\n` +
                        `💸 *Valor transferido:* R$ ${quantia.toLocaleString()},00\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *Saldo atual:* R$ ${saldoAtual},00\n\n` +
                        `✅ *Status:* CONFIRMADO\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: comprovante,
        mentions: [sender, destinatario]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE NAMORO RPG ====================

// Arquivo para armazenar os pedidos e casamentos
const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';

// Inicializa os arquivos se não existirem
let casamentosDB = {};
let pedidosDB = {};
if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

function saveCasamentos() {
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));
}

function savePedidos() {
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));
}

// ==================== SISTEMA DE NAMORO RPG ====================

case 'namorarrpg':
case 'pedir': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let pretendente = sender;
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (!alvo) return reply("❌ Uso: `!namorarrpg @usuario`\nExemplo: `!namorarrpg @joaosilva`");
    if (alvo === pretendente) return reply("❌ Você não pode pedir namoro a si mesmo(a)!");

    const nomePretendente = pretendente.split('@')[0];
    const nomeAlvo = alvo.split('@')[0];

    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === pretendente || casamentosDB[id].pessoa2 === pretendente) {
            jaCasado = true;
            break;
        }
    }
    if (jaCasado) return reply(`❌ @${nomePretendente} você já está em um relacionamento! Use \`!terminar\` primeiro.`);

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo || casamentosDB[id].pessoa2 === alvo) {
            return reply(`❌ @${nomeAlvo} já está em um relacionamento!`);
        }
    }

    if (pedidosDB[alvo] && pedidosDB[alvo].de === pretendente) {
        return reply(`⏳ Você já tem um pedido pendente para @${nomeAlvo}. Aguarde a resposta.`);
    }
    if (pedidosDB[pretendente]) {
        return reply(`⏳ Você já fez um pedido para alguém. Aguarde a resposta ou use \`!cancelarpedido\`.`);
    }

    pedidosDB[pretendente] = {
        para: alvo,
        data: new Date().toLocaleString('pt-BR')
    };
    pedidosDB[alvo] = {
        de: pretendente,
        data: new Date().toLocaleString('pt-BR')
    };
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const pedidoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💕 *PEDIDO DE NAMORO* 💕\n\n` +
                      `💘 @${nomePretendente} pediu @${nomeAlvo} em namoro!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `✅ *Para ACEITAR:* \`!aceitar\`\n` +
                      `❌ *Para RECUSAR:* \`!recusar\`\n\n` +
                      `⏰ *Pedido feito em:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: pedidoMsg,
        mentions: [pretendente, alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'aceitarrpg': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario] || !pedidosDB[usuario].de) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido de namoro pendente.`);
    }

    let pretendente = pedidosDB[usuario].de;
    const nomePretendente = pretendente.split('@')[0];

    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario || casamentosDB[id].pessoa2 === usuario ||
            casamentosDB[id].pessoa1 === pretendente || casamentosDB[id].pessoa2 === pretendente) {
            jaCasado = true;
            break;
        }
    }

    if (jaCasado) {
        delete pedidosDB[usuario];
        delete pedidosDB[pretendente];
        fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));
        return reply(`❌ Alguém já está em um relacionamento. Pedido cancelado.`);
    }

    const dataCasamento = new Date().toLocaleString('pt-BR');
    const casamentoId = Date.now().toString();
    casamentosDB[casamentoId] = {
        pessoa1: pretendente,
        pessoa2: usuario,
        data: dataCasamento
    };
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    delete pedidosDB[usuario];
    delete pedidosDB[pretendente];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    if (!coinsDB[pretendente]) coinsDB[pretendente] = { coins: 500 };
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    
    coinsDB[pretendente].coins += 500;
    coinsDB[usuario].coins += 500;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const aceiteMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💍 *CASAMENTO CONFIRMADO!* 💍\n\n` +
                      `💑 @${nomePretendente} e @${nomeUser} agora são um casal! 💑\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💰 *Bônus recebido:* +500 N-Coins para cada!\n` +
                      `📅 *Data do casamento:* ${dataCasamento}\n\n` +
                      `🎉 *Parabéns ao novo casal!* 🎉\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: aceiteMsg,
        mentions: [pretendente, usuario]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'recusar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let pedidosDB = {};
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario] || !pedidosDB[usuario].de) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido de namoro pendente.`);
    }

    let pretendente = pedidosDB[usuario].de;
    const nomePretendente = pretendente.split('@')[0];

    delete pedidosDB[usuario];
    delete pedidosDB[pretendente];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const recusaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💔 *PEDIDO RECUSADO* 💔\n\n` +
                      `😢 @${nomePretendente} foi recusado(a) por @${nomeUser}.\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💪 Não desista! O amor está em algum lugar...\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: recusaMsg,
        mentions: [pretendente, usuario]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'terminar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    
    let casamentosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let casamentoEncontrado = null;
    let conjugue = null;

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            casamentoEncontrado = id;
            conjugue = casamentosDB[id].pessoa2;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            casamentoEncontrado = id;
            conjugue = casamentosDB[id].pessoa1;
            break;
        }
    }

    if (!casamentoEncontrado) {
        return reply(`❌ @${nomeUser}, você não está em um relacionamento.`);
    }

    const nomeConjugue = conjugue.split('@')[0];

    delete casamentosDB[casamentoEncontrado];
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    const terminoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `💔 *RELACIONAMENTO TERMINADO* 💔\n\n` +
                       `😢 @${nomeUser} terminou o relacionamento com @${nomeConjugue}.\n\n` +
                       `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                       `📝 *Status:* Solteiro(a) novamente\n` +
                       `💪 Use \`!namorarrpg @user\` para recomeçar\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: terminoMsg,
        mentions: [usuario, conjugue]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'statusnamoro':
case 'meurelacionamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    let status = '💔 Solteiro(a)';
    let conjugue = '';
    let dataCasamento = '';

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo) {
            status = '💍 Casado(a)';
            conjugue = casamentosDB[id].pessoa2.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            break;
        } else if (casamentosDB[id].pessoa2 === alvo) {
            status = '💍 Casado(a)';
            conjugue = casamentosDB[id].pessoa1.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            break;
        }
    }

    let pedidoPendente = false;
    let pretendente = '';
    if (pedidosDB[alvo] && pedidosDB[alvo].de) {
        pedidoPendente = true;
        pretendente = pedidosDB[alvo].de.split('@')[0];
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `💕 *STATUS DE RELACIONAMENTO* 💕\n\n`;
    texto += `👤 Usuário: @${nomeUser}\n`;
    texto += `💔 Status: ${status}\n`;

    if (status === '💍 Casado(a)') {
        texto += `💑 Cônjuge: @${conjugue}\n`;
        texto += `📅 Desde: ${dataCasamento}\n`;
    } else if (pedidoPendente) {
        texto += `⏳ Você tem um pedido pendente de @${pretendente}!\n`;
        texto += `   Use \`!aceitar\` ou \`!recusar\`\n`;
    } else {
        texto += `💘 Use \`!namorarrpg @user\` para pedir alguém\n`;
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: texto,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'cancelarpedido': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    
    let pedidosDB = {};
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));

    let usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!pedidosDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem nenhum pedido pendente.`);
    }

    let alvo = pedidosDB[usuario].para || pedidosDB[usuario].de;
    
    delete pedidosDB[usuario];
    if (alvo && pedidosDB[alvo]) delete pedidosDB[alvo];
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidosDB, null, 2));

    const cancelMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `❌ *PEDIDO CANCELADO* ❌\n\n` +
                      `😔 @${nomeUser} cancelou o pedido de namoro.\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: cancelMsg }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'listarchaves':
case 'listarpix': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    const fs = require('fs');
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    let pixDB = {};
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    const chaves = Object.values(pixDB);
    if (chaves.length === 0) return reply("📋 Nenhuma chave Pix cadastrada ainda.");

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🔑 *CHAVES PIX CADASTRADAS* 🔑\n\n`;
    
    for (const chave of chaves) {
        texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`;
        texto += `🔹 *Chave:* \`${chave.chave}\`\n`;
        texto += `👤 *Usuário:* @${chave.nome}\n`;
        texto += `📅 *Cadastro:* ${chave.dataCadastro}\n\n`;
    }
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    const mentions = chaves.map(c => `${c.nome}@s.whatsapp.net`);
    await keisen.sendMessage(from, {
        text: texto,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'trocarchave':
case 'trocarpix':
case 'alterarchave': {
    if (!isGroup) return reply(mess.onlyGroup());

    let novaChave = args[0];
    if (!novaChave) return reply("❌ Uso: `!trocarchave <nova_chave>`\nExemplo: `!trocarchave maria123`");

    // Remove caracteres especiais e espaços
    novaChave = novaChave.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (novaChave.length < 3) return reply("❌ A chave deve ter pelo menos 3 caracteres.");

    const fs = require('fs');
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    let pixDB = {};
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    // Verifica se o usuário tem chave cadastrada
    if (!pixDB[sender]) {
        return reply("❌ Você não tem uma chave Pix cadastrada. Use `!cadastrarchave <nickname>` primeiro.");
    }

    // Verifica se a nova chave já existe (e não é do próprio usuário)
    const chaveExistente = Object.entries(pixDB).find(([userId, data]) => data.chave === novaChave && userId !== sender);
    if (chaveExistente) {
        return reply(`❌ A chave \`${novaChave}\` já está sendo usada por outro usuário. Escolha outra.`);
    }

    // Guarda a chave antiga para o comprovante
    const chaveAntiga = pixDB[sender].chave;
    const nomeUser = sender.split('@')[0];

    // Atualiza a chave
    pixDB[sender].chave = novaChave;
    pixDB[sender].dataAlteracao = new Date().toLocaleString('pt-BR');
    fs.writeFileSync(pixPath, JSON.stringify(pixDB, null, 2));

    // Comprovante de alteração
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');
    const transacaoId = 'ALT' + Date.now().toString().slice(-8);

    const comprovante = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `🔄 *ALTERAÇÃO DE CHAVE PIX* 🔄\n\n` +
                        `📋 *Tipo:* Troca de Chave\n` +
                        `🆔 *Transação ID:* ${transacaoId}\n` +
                        `📅 *Data:* ${dataFormatada}\n` +
                        `⏰ *Hora:* ${horaFormatada}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `👤 *Usuário:* @${nomeUser}\n` +
                        `🔑 *Chave antiga:* \`${chaveAntiga}\`\n` +
                        `🔑 *Chave nova:* \`${novaChave}\`\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `✅ *Status:* ALTERAÇÃO CONFIRMADA\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: comprovante,
        mentions: [sender]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'cadastrarchave':
case 'cadastrarpix': {
    if (!isGroup) return reply(mess.onlyGroup());

    let chave = args[0];
    if (!chave) return reply("❌ Uso: `!cadastrarchave <nickname/apelido>`\nExemplo: `!cadastrarchave joaosilva`");

    // Remove caracteres especiais e espaços
    chave = chave.toLowerCase().replace(/[^a-z0-9]/g, '');

    const fs = require('fs');
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    let pixDB = {};
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    // Verifica se a chave já existe
    const chaveExistente = Object.values(pixDB).find(p => p.chave === chave);
    if (chaveExistente) return reply(`❌ A chave \`${chave}\` já está cadastrada por outro usuário.`);

    // Cadastra a chave
    pixDB[sender] = {
        chave: chave,
        nome: sender.split('@')[0],
        dataCadastro: new Date().toLocaleString('pt-BR')
    };
    fs.writeFileSync(pixPath, JSON.stringify(pixDB, null, 2));

    reply(`✅ Chave Pix cadastrada com sucesso!\n\n🏦 *Sua chave:* \`${chave}\`\n📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\nUse \`!addcoins ${chave} <valor>\` para receber coins.`);
    break;
}
case 'minhachave':
case 'minhapix': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    let pixDB = {};
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));

    if (!pixDB[sender]) return reply("❌ Você não tem uma chave Pix cadastrada. Use `!cadastrarchave <nickname>`");

    const minhaChave = pixDB[sender];
    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🏦 *MINHA CHAVE PIX* 🏦\n\n` +
                  `🔑 *Chave:* \`${minhaChave.chave}\`\n` +
                  `👤 *Usuário:* @${minhaChave.nome}\n` +
                  `📅 *Cadastro:* ${minhaChave.dataCadastro}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    reply(texto);
    break;
}
case 'removecoins': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    if (!alvo) return reply("❌ Marque um usuário: `!removecoins @user <quantia>`");

    let quantia = parseInt(args[1]);
    if (isNaN(quantia) || quantia <= 0) return reply("❌ Quantia inválida.");

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[alvo]) coinsDB[alvo] = { coins: 0 };
    if (coinsDB[alvo].coins < quantia) return reply(`❌ Saldo insuficiente. @${alvo.split('@')[0]} tem ${coinsDB[alvo].coins} coins.`);
    coinsDB[alvo].coins -= quantia;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    reply(`🗑️ Removido **${quantia.toLocaleString()}** coins de @${alvo.split('@')[0]}.`);
    break;
}

case 'perfilrpg':
case 'perfil':
case 'meuperfil': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    const fs = require('fs');
    
    // ========== CARREGA TODOS OS DADOS ==========
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[alvo]) coinsDB[alvo] = { coins: 0 };
    const saldo = coinsDB[alvo].coins;

    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const meusPets = petsDB[alvo] || [];
    const totalPets = meusPets.length;
    
    let mediaFome = 0, mediaHigiene = 0;
    if (totalPets > 0) {
        mediaFome = Math.floor(meusPets.reduce((acc, p) => acc + p.fome, 0) / totalPets);
        mediaHigiene = Math.floor(meusPets.reduce((acc, p) => acc + p.higiene, 0) / totalPets);
    }

    const pixPath = './DADOS DO KEISEN/usuarios/pixkeys.json';
    let pixDB = {};
    if (fs.existsSync(pixPath)) pixDB = JSON.parse(fs.readFileSync(pixPath));
    const temChave = pixDB[alvo] ? true : false;
    const chavePix = temChave ? pixDB[alvo].chave : 'Não cadastrada';

    // ========== SISTEMA DE SEXO/GÊNERO ==========
    const sexoPath = './sexo.json';
    let sexoDB = {};
    if (fs.existsSync(sexoPath)) sexoDB = JSON.parse(fs.readFileSync(sexoPath));
    let sexo = sexoDB[alvo] || 'Não definido';
    let emojiSexo = '❓';
    if (sexo === 'Masculino') emojiSexo = '👨';
    else if (sexo === 'Feminino') emojiSexo = '👩';
    else if (sexo === 'Não binário') emojiSexo = '🌟';

    // ========== SISTEMA DE CASAMENTO ==========
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    let casamentosDB = {};
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    
    let statusNamoro = '💔 Solteiro(a)';
    let nomeConjugue = '';
    let dataCasamento = '';
    let sexoConjugue = '';
    
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo) {
            statusNamoro = '💍 Casado(a)';
            nomeConjugue = casamentosDB[id].pessoa2.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            sexoConjugue = sexoDB[casamentosDB[id].pessoa2] || 'Não definido';
            break;
        } else if (casamentosDB[id].pessoa2 === alvo) {
            statusNamoro = '💍 Casado(a)';
            nomeConjugue = casamentosDB[id].pessoa1.split('@')[0];
            dataCasamento = casamentosDB[id].data;
            sexoConjugue = sexoDB[casamentosDB[id].pessoa1] || 'Não definido';
            break;
        }
    }

    // ========== SISTEMA DE FAMÍLIA/FILHOS ==========
    const familiaPath = './DADOS DO KEISEN/usuarios/familia.json';
    let familiaDB = {};
    if (fs.existsSync(familiaPath)) familiaDB = JSON.parse(fs.readFileSync(familiaPath));
    const meusFilhos = familiaDB[alvo]?.filhos || [];
    const totalFilhos = meusFilhos.length;
    
    // Calcula idade média dos filhos
    let idadeMedia = 0;
    if (totalFilhos > 0) {
        let somaIdades = 0;
        for (const filho of meusFilhos) {
            const idade = Math.floor((Date.now() - new Date(filho.dataAdocao)) / (1000 * 60 * 60 * 24 * 30));
            somaIdades += idade;
        }
        idadeMedia = Math.floor(somaIdades / totalFilhos);
    }

    // ========== SISTEMA DE PATRIMÔNIO ==========
    const patrimonio = saldo;
    let classeSocial = '';
    let emojiClasse = '';
    if (patrimonio >= 1000000) { classeSocial = 'Magnata'; emojiClasse = '👑'; }
    else if (patrimonio >= 500000) { classeSocial = 'Milionário'; emojiClasse = '💰'; }
    else if (patrimonio >= 100000) { classeSocial = 'Rico'; emojiClasse = '💎'; }
    else if (patrimonio >= 50000) { classeSocial = 'Classe Alta'; emojiClasse = '🏠'; }
    else if (patrimonio >= 10000) { classeSocial = 'Classe Média'; emojiClasse = '🏡'; }
    else if (patrimonio >= 1000) { classeSocial = 'Classe Baixa'; emojiClasse = '📦'; }
    else { classeSocial = 'Fudido'; emojiClasse = '💀'; }

    // ========== NÍVEL DO JOGADOR ==========
    let nivel = '🌟 Iniciante';
    let emojiNivel = '🌱';
    if (saldo >= 1000000) { nivel = '👑 Lendário'; emojiNivel = '👑'; }
    else if (saldo >= 500000) { nivel = '💎 Diamante'; emojiNivel = '💎'; }
    else if (saldo >= 100000) { nivel = '⭐ Ouro'; emojiNivel = '⭐'; }
    else if (saldo >= 50000) { nivel = '🔮 Platina'; emojiNivel = '🔮'; }
    else if (saldo >= 10000) { nivel = '🥈 Prata'; emojiNivel = '🥈'; }
    else if (saldo >= 1000) { nivel = '🥉 Bronze'; emojiNivel = '🥉'; }
    else { nivel = '🌱 Iniciante'; emojiNivel = '🌱'; }

    // ========== DATA DE ENTRADA ==========
    const dataEntrada = '01/01/2024';

    // ========== CONSTRÓI O PERFIL ==========
    let perfil = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    perfil += `🎮 *PERFIL RPG* 🎮\n`;
    perfil += `👤 @${nomeUser}\n\n`;
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    
    // ========== SEÇÃO PESSOAL ==========
    perfil += `📋 *DADOS PESSOAIS* 📋\n`;
    perfil += `${emojiSexo} Sexo: ${sexo}\n`;
    perfil += `🎂 Idade: ${idadeMedia > 0 ? idadeMedia : '?'} anos\n`;
    perfil += `📅 Membro desde: ${dataEntrada}\n\n`;
    
    // ========== SEÇÃO FINANCEIRA ==========
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `💰 *FINANÇAS* 💰\n`;
    perfil += `💵 Saldo: *${saldo.toLocaleString()} N-Coins*\n`;
    perfil += `${emojiClasse} Classe: ${classeSocial}\n`;
    perfil += `${emojiNivel} Nível: ${nivel}\n`;
    perfil += `🏦 Chave Pix: \`${chavePix}\`\n`;
    if (!temChave) perfil += `   📝 Use \`!cadastrarchave <nickname>\`\n`;
    perfil += `\n`;
    
    // ========== SEÇÃO RELACIONAMENTO ==========
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `💕 *RELACIONAMENTO* 💕\n`;
    perfil += `💔 Status: ${statusNamoro}\n`;
    if (statusNamoro === '💍 Casado(a)') {
        perfil += `   💑 Cônjuge: @${nomeConjugue}\n`;
        perfil += `   ${sexoConjugue === 'Masculino' ? '👨' : (sexoConjugue === 'Feminino' ? '👩' : '🌟')} Sexo: ${sexoConjugue || '?'}\n`;
        perfil += `   📅 Casados desde: ${dataCasamento}\n`;
    } else {
        perfil += `   💘 Use \`!casarrpg @user\` para casar\n`;
    }
    perfil += `\n`;
    
    // ========== SEÇÃO FAMÍLIA ==========
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `👨‍👩‍👧 *FAMÍLIA* 👨‍👩‍👧\n`;
    perfil += `👶 Filhos: *${totalFilhos}* filho(s)\n`;
    
    if (totalFilhos > 0) {
        perfil += `   📊 Idade média: ${idadeMedia} meses\n`;
        perfil += `   👶 Lista de filhos:\n`;
        for (let i = 0; i < Math.min(meusFilhos.length, 3); i++) {
            const filho = meusFilhos[i];
            const idade = Math.floor((Date.now() - new Date(filho.dataAdocao)) / (1000 * 60 * 60 * 24 * 30));
            perfil += `      ${i+1}º ${filho.tipo === 'filho' ? '👦' : '👧'} *${filho.nome}* (${idade} meses)\n`;
        }
        if (totalFilhos > 3) {
            perfil += `      ... e mais ${totalFilhos - 3} filho(s)\n`;
        }
    } else {
        perfil += `   🍼 Nenhum filho ainda. Use \`!adotarrpg\`\n`;
    }
    perfil += `\n`;
    
    // ========== SEÇÃO PETS ==========
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `🐾 *PETS* 🐾\n`;
    perfil += `🐕 Total: *${totalPets}* pet(s)\n`;
    
    if (totalPets > 0) {
        perfil += `   🍖 Média Fome: ${mediaFome}%\n`;
        perfil += `   🧼 Média Higiene: ${mediaHigiene}%\n`;
        for (let i = 0; i < Math.min(meusPets.length, 3); i++) {
            const pet = meusPets[i];
            perfil += `      ${i+1}º ${pet.icone} *${pet.nome}* (${pet.tipo})\n`;
        }
        if (totalPets > 3) {
            perfil += `      ... e mais ${totalPets - 3} pet(s)\n`;
        }
    } else {
        perfil += `   🐾 Nenhum pet ainda. Use \`!comprarpet\`\n`;
    }
    perfil += `\n`;
    
    // ========== SEÇÃO MISSÕES ==========
    perfil += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `🎯 *MISSÕES DISPONÍVEIS* 🎯\n`;
    
    let missoesCompletadas = 0;
    let totalMissoes = 0;
    
    if (saldo < 1000) { perfil += `   • Acumule 1000 N-Coins\n`; totalMissoes++; }
    else missoesCompletadas++;
    
    if (totalPets === 0) { perfil += `   • Compre seu primeiro pet\n`; totalMissoes++; }
    else missoesCompletadas++;
    
    if (!temChave) { perfil += `   • Cadastre sua chave Pix\n`; totalMissoes++; }
    else missoesCompletadas++;
    
    if (statusNamoro === '💔 Solteiro(a)') { perfil += `   • Encontre um amor e case\n`; totalMissoes++; }
    else missoesCompletadas++;
    
    if (totalFilhos === 0) { perfil += `   • Adote seu primeiro filho\n`; totalMissoes++; }
    else missoesCompletadas++;
    
    if (totalPets > 0 && mediaFome < 50) { perfil += `   • Alimente seus pets\n`; totalMissoes++; }
    else if (totalPets > 0) missoesCompletadas++;
    
    if (totalPets > 0 && mediaHigiene < 50) { perfil += `   • Dê banho nos seus pets\n`; totalMissoes++; }
    else if (totalPets > 0) missoesCompletadas++;
    
    if (totalMissoes === 0 || missoesCompletadas === totalMissoes) {
        perfil += `   ✅ Você completou todas as missões!\n`;
        perfil += `   🏆 Parabéns, jogador lendário!\n`;
    }
    
    // ========== RESUMO DO PATRIMÔNIO ==========
    perfil += `\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    perfil += `📊 *RESUMO DO PATRIMÔNIO* 📊\n`;
    perfil += `💰 Coins: ${saldo.toLocaleString()}\n`;
    perfil += `🐾 Pets: ${totalPets}\n`;
    perfil += `👶 Filhos: ${totalFilhos}\n`;
    perfil += `💍 Status: ${statusNamoro === '💍 Casado(a)' ? 'Casado(a)' : 'Solteiro(a)'}\n`;
    
    perfil += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    // ========== MENÇÕES ==========
    let mentions = [alvo];
    if (statusNamoro === '💍 Casado(a)' && nomeConjugue) {
        mentions.push(`${nomeConjugue}@s.whatsapp.net`);
    }

    await keisen.sendMessage(from, {
        text: perfil,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'coins':
case 'coins':
case 'saldo': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[alvo]) coinsDB[alvo] = { coins: 0 };
    const saldo = coinsDB[alvo].coins;

    // Dados do extrato
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');
    const nomeUser = alvo.split('@')[0];
    const numeroConta = 'N' + alvo.slice(-6).replace(/\D/g, '');
    const agencia = '0001';
    const saldoFormatado = saldo.toLocaleString();

    const extrato = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                    `🏦 *EXTRATO BANCÁRIO* 🏦\n\n` +
                    `📅 *Data:* ${dataFormatada}\n` +
                    `⏰ *Hora:* ${horaFormatada}\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `👤 *Titular:* @${nomeUser}\n` +
                    `🏛️ *Agência:* ${agencia}\n` +
                    `💳 *Conta:* ${numeroConta}\n` +
                    `📊 *Tipo:* Conta N-Coins\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `💰 *SALDO DISPONÍVEL:*\n` +
                    `✨ *R$ ${saldoFormatado},00 N-Coins* ✨\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `📌 *Últimas movimentações:*\n` +
                    `   • Saldo consultado via app\n` +
                    `   • Nenhuma pendência\n\n` +
                    `✅ *Extrato gerado com sucesso!*\n\n` +
                    `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: extrato,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== PETSHOP COM MENU NUMÉRICO ====================

case 'petshop':
case 'lojapets': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🐾 *PET SHOP* 🐾\n\n` +
                  `1️⃣ 🐱 Gato — 300 N-Coins\n` +
                  `2️⃣ 🐶 Cachorro — 400 N-Coins\n` +
                  `3️⃣ 🐰 Coelho — 200 N-Coins\n\n` +
                  `Use \`!comprarpet <número> <nome>\` para adotar!\n` +
                  `Exemplo: \`!comprarpet 1 Whiskers\`\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    reply(texto);
    break;
}

case 'comprarpet': {
    if (!isGroup) return reply(mess.onlyGroup());

    const numero = parseInt(args[0]);
    const nome = args.slice(1).join(' ');
    
    if (isNaN(numero) || !nome) return reply('Uso: `!comprarpet <número> <nome>`\nNúmeros: 1=Gato, 2=Cachorro, 3=Coelho');

    let tipo, preco, icone;
    if (numero === 1) { tipo = 'gato'; preco = 300; icone = '🐱'; }
    else if (numero === 2) { tipo = 'cachorro'; preco = 400; icone = '🐶'; }
    else if (numero === 3) { tipo = 'coelho'; preco = 200; icone = '🐰'; }
    else return reply('❌ Número inválido! Use: 1=Gato, 2=Cachorro, 3=Coelho');

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 500 };
    if (coinsDB[sender].coins < preco) return reply(`❌ Você precisa de ${preco} N-Coins. Seu saldo: ${coinsDB[sender].coins} N-Coins`);

    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    if (!petsDB[sender]) petsDB[sender] = [];

    const petId = Date.now().toString();
    const novoPet = {
        id: petId,
        nome: nome,
        tipo: tipo,
        fome: 80,
        higiene: 80,
        icone: icone
    };
    petsDB[sender].push(novoPet);
    fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));

    coinsDB[sender].coins -= preco;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    reply(`✅ Você comprou um pet **${nome}** (${tipo}) por ${preco} N-Coins!\n🐾 Use \`!meuspets\` para ver seus pets.`);
    break;
}

case 'meuspets': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const meusPets = petsDB[sender] || [];
    if (meusPets.length === 0) return reply('🐾 Você não tem nenhum pet. Compre um com `!comprarpet`.');

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🐾 *MEUS PETS* 🐾\n\n`;
    for (const pet of meusPets) {
        texto += `${pet.icone} **${pet.nome}** (${pet.tipo})\n   🆔 ID: \`${pet.id}\`\n   🍖 Fome: ${pet.fome}% | 🧼 Higiene: ${pet.higiene}%\n\n`;
    }
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    reply(texto);
    break;
}

case 'alimentarpet': {
    if (!isGroup) return reply(mess.onlyGroup());

    const petId = args[0];
    if (!petId) return reply('Uso: `!alimentarpet <id_pet>`\nUse `!meuspets` para ver os IDs.');

    const fs = require('fs');
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const meusPets = petsDB[sender] || [];
    const petIndex = meusPets.findIndex(p => p.id === petId);
    if (petIndex === -1) return reply('❌ Pet não encontrado. Use `!meuspets` para ver os IDs.');

    const pet = meusPets[petIndex];
    const custoComida = 30;

    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 500 };
    if (coinsDB[sender].coins < custoComida) return reply(`❌ Você precisa de ${custoComida} N-Coins para comprar ração. Saldo: ${coinsDB[sender].coins} N-Coins`);

    pet.fome = Math.min(pet.fome + 30, 100);
    petsDB[sender][petIndex] = pet;
    fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));

    coinsDB[sender].coins -= custoComida;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    reply(`🍖 Você alimentou **${pet.nome}**! Agora a fome é ${pet.fome}/100.\n💸 Gastou ${custoComida} N-Coins.`);
    break;
}

case 'darbanhopet': {
    if (!isGroup) return reply(mess.onlyGroup());

    const petId = args[0];
    if (!petId) return reply('Uso: `!darbanhopet <id_pet>`\nUse `!meuspets` para ver os IDs.');

    const fs = require('fs');
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const meusPets = petsDB[sender] || [];
    const petIndex = meusPets.findIndex(p => p.id === petId);
    if (petIndex === -1) return reply('❌ Pet não encontrado.');

    const pet = meusPets[petIndex];
    const custoBanho = 50;

    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 500 };
    if (coinsDB[sender].coins < custoBanho) return reply(`❌ Banho custa ${custoBanho} N-Coins. Saldo: ${coinsDB[sender].coins} N-Coins`);

    pet.higiene = Math.min(pet.higiene + 50, 100);
    petsDB[sender][petIndex] = pet;
    fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));

    coinsDB[sender].coins -= custoBanho;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    reply(`🛁 **${pet.nome}** tomou banho! Higiene agora ${pet.higiene}/100.\n💸 Gastou ${custoBanho} N-Coins.`);
    break;
}

case 'perfilpets': {
    if (!isGroup) return reply(mess.onlyGroup());

    const petId = args[0];
    if (!petId) return reply('Uso: `!perfilpets <id_pet>`\nUse `!meuspets` para ver os IDs.');

    const fs = require('fs');
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const meusPets = petsDB[sender] || [];
    const pet = meusPets.find(p => p.id === petId);
    if (!pet) return reply('❌ Pet não encontrado.');

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `${pet.icone} *PERFIL DO PET* ${pet.icone}\n\n` +
                  `📛 Nome: **${pet.nome}**\n` +
                  `🐾 Tipo: ${pet.tipo}\n` +
                  `🍖 Fome: ${pet.fome}/100\n` +
                  `🧼 Higiene: ${pet.higiene}/100\n` +
                  `🆔 ID: \`${pet.id}\`\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    reply(texto);
    break;
}

case 'venderpets': {
    if (!isGroup) return reply(mess.onlyGroup());

    const comprador = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    const petId = args[1];
    const preco = parseInt(args[2]);
    if (!comprador || !petId || isNaN(preco)) return reply('Uso: `!venderpets @user <id_pet> <preço>`');
    if (preco <= 0) return reply('❌ Preço inválido.');

    const fs = require('fs');
    const petsPath = './DADOS DO KEISEN/usuarios/pets.json';
    let petsDB = {};
    if (fs.existsSync(petsPath)) petsDB = JSON.parse(fs.readFileSync(petsPath));
    const vendedorPets = petsDB[sender] || [];
    const petIndex = vendedorPets.findIndex(p => p.id === petId);
    if (petIndex === -1) return reply('❌ Você não possui esse pet.');

    const pet = vendedorPets[petIndex];

    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[comprador]) coinsDB[comprador] = { coins: 500 };
    if (coinsDB[comprador].coins < preco) return reply(`❌ ${comprador.split('@')[0]} tem apenas ${coinsDB[comprador].coins} N-Coins.`);

    vendedorPets.splice(petIndex, 1);
    petsDB[sender] = vendedorPets;
    if (!petsDB[comprador]) petsDB[comprador] = [];
    petsDB[comprador].push(pet);
    fs.writeFileSync(petsPath, JSON.stringify(petsDB, null, 2));

    coinsDB[comprador].coins -= preco;
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 500 };
    coinsDB[sender].coins += preco;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    reply(`💸 **${pet.nome}** foi vendido para @${comprador.split('@')[0]} por ${preco.toLocaleString()} N-Coins!`);
    break;
}
// ==================== SISTEMA DE REGISTRO RPG ====================

case 'registrar':
case 'registrarrpg':
case 'rg': {
    if (!isGroup) return reply(mess.onlyGroup());

    let argsString = args.join(' ');
    let partes = argsString.split('|');
    
    if (partes.length < 4) {
        return reply(`❌ *FORMATO CORRETO:*\n\n` +
                     `!registrar Nome Completo | CPF | Data de Nascimento | Cidade\n\n` +
                     `📌 *Exemplo:*\n` +
                     `!registrar João Silva da Costa | 123.456.789-00 | 15/05/1995 | Campina Grande-PB\n\n` +
                     `📌 *Ou use:*\n` +
                     `!registrarrpg Nome | CPF | Data | Cidade`);
    }

    let nomeCompleto = partes[0]?.trim();
    let cpf = partes[1]?.trim().replace(/[^0-9]/g, '');
    let dataNascimento = partes[2]?.trim();
    let cidade = partes[3]?.trim();

    // Validações
    if (!nomeCompleto || nomeCompleto.length < 5) {
        return reply("❌ Nome completo inválido. Use pelo menos 5 caracteres.");
    }
    
    if (!cpf || cpf.length !== 11) {
        return reply("❌ CPF inválido. Deve conter 11 dígitos.\nExemplo: 12345678900");
    }
    
    // Valida data de nascimento (formato DD/MM/AAAA)
    const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dataRegex.test(dataNascimento)) {
        return reply("❌ Data de nascimento inválida. Use formato: DD/MM/AAAA\nExemplo: 15/05/1995");
    }
    
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataObj = new Date(ano, mes - 1, dia);
    if (dataObj.getFullYear() != ano || dataObj.getMonth() != mes - 1 || dataObj.getDate() != dia) {
        return reply("❌ Data de nascimento inválida. Verifique o dia, mês e ano.");
    }
    
    // Verifica idade (mínimo 13 anos)
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const mesAtual = hoje.getMonth() + 1;
    if (mesAtual < mes || (mesAtual === mes && hoje.getDate() < dia)) {
        idade--;
    }
    
    if (idade < 13) {
        return reply("❌ Você precisa ter pelo menos 13 anos para se registrar.");
    }
    
    if (!cidade || cidade.length < 3) {
        return reply("❌ Cidade inválida. Digite sua cidade e estado.\nExemplo: Campina Grande-PB");
    }

    const fs = require('fs');
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    let registrosDB = {};
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));

    // Verifica se já está registrado
    if (registrosDB[sender]) {
        return reply(`❌ @${sender.split('@')[0]}, você já está registrado!\nUse \`!meurg\` para ver seus dados.`);
    }

    // Verifica se CPF já está cadastrado
    const cpfExistente = Object.values(registrosDB).find(r => r.cpf === cpf);
    if (cpfExistente) {
        return reply("❌ Este CPF já está cadastrado no sistema.");
    }

    // Gera números de identidade
    const rgNumero = Math.floor(Math.random() * 90000000) + 10000000;
    const carteiraTrabalho = Math.floor(Math.random() * 900000000) + 100000000;
    const tituloEleitor = Math.floor(Math.random() * 9000000000) + 1000000000;
    const carteiraMotorista = Math.floor(Math.random() * 90000000000) + 10000000000;
    const dataRegistro = new Date().toLocaleString('pt-BR');
    
    // Determina signo
    const signos = [
        "♈ Áries", "♉ Touro", "♊ Gêmeos", "♋ Câncer",
        "♌ Leão", "♍ Virgem", "♎ Libra", "♏ Escorpião",
        "♐ Sagitário", "♑ Capricórnio", "♒ Aquário", "♓ Peixes"
    ];
    
    let signo = "";
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) signo = signos[0];
    else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) signo = signos[1];
    else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) signo = signos[2];
    else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) signo = signos[3];
    else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) signo = signos[4];
    else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) signo = signos[5];
    else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) signo = signos[6];
    else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) signo = signos[7];
    else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) signo = signos[8];
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) signo = signos[9];
    else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) signo = signos[10];
    else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) signo = signos[11];

    // Registra o usuário
    registrosDB[sender] = {
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        rg: rgNumero,
        dataNascimento: dataNascimento,
        idade: idade,
        signo: signo,
        cidade: cidade,
        carteiraTrabalho: carteiraTrabalho,
        tituloEleitor: tituloEleitor,
        carteiraMotorista: carteiraMotorista,
        dataRegistro: dataRegistro
    };
    
    fs.writeFileSync(registrosPath, JSON.stringify(registrosDB, null, 2));

    // Bônus de registro
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    if (!coinsDB[sender]) coinsDB[sender] = { coins: 0 };
    const bonus = 500;
    coinsDB[sender].coins += bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    // Documento de registro
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const rgFormatado = rgNumero.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    const registroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `📜 *REGISTRO RPG CONCLUÍDO* 📜\n\n` +
                        `🎉 Parabéns @${sender.split('@')[0]}! Você agora é um cidadão RPG!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `📋 *DOCUMENTOS GERADOS* 📋\n\n` +
                        `👤 *Nome:* ${nomeCompleto}\n` +
                        `🆔 *RG:* ${rgFormatado}\n` +
                        `💳 *CPF:* ${cpfFormatado}\n` +
                        `🎂 *Nascimento:* ${dataNascimento} (${idade} anos)\n` +
                        `🌟 *Signo:* ${signo}\n` +
                        `📍 *Cidade:* ${cidade}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `📄 *OUTROS DOCUMENTOS* 📄\n\n` +
                        `📇 *CTPS:* ${carteiraTrabalho}\n` +
                        `🗳️ *Título Eleitor:* ${tituloEleitor}\n` +
                        `🚗 *CNH:* ${carteiraMotorista}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *BÔNUS DE REGISTRO:* +${bonus} N-Coins\n` +
                        `📅 *Data do registro:* ${dataRegistro}\n\n` +
                        `✅ *Status:* REGISTRO CONFIRMADO\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: registroMsg,
        mentions: [sender]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

case 'meurg':
case 'meusdados':
case 'documentos': {
    if (!isGroup) return reply(mess.onlyGroup());

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    const fs = require('fs');
    const registrosPath = './DADOS DO KEISEN/usuarios/registros.json';
    let registrosDB = {};
    if (fs.existsSync(registrosPath)) registrosDB = JSON.parse(fs.readFileSync(registrosPath));

    if (!registrosDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não está registrado!\nUse \`!registrar Nome | CPF | Data | Cidade\``);
    }

    const dados = registrosDB[alvo];
    const cpfFormatado = dados.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const rgFormatado = dados.rg.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    const rgMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `📜 *DOCUMENTOS RPG* 📜\n\n` +
                  `👤 @${nomeUser}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📋 *IDENTIFICAÇÃO* 📋\n\n` +
                  `📛 *Nome:* ${dados.nomeCompleto}\n` +
                  `🆔 *RG:* ${rgFormatado}\n` +
                  `💳 *CPF:* ${cpfFormatado}\n` +
                  `🎂 *Nascimento:* ${dados.dataNascimento} (${dados.idade} anos)\n` +
                  `🌟 *Signo:* ${dados.signo}\n` +
                  `📍 *Cidade:* ${dados.cidade}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📄 *OUTROS DOCUMENTOS* 📄\n\n` +
                  `📇 *CTPS:* ${dados.carteiraTrabalho}\n` +
                  `🗳️ *Título Eleitor:* ${dados.tituloEleitor}\n` +
                  `🚗 *CNH:* ${dados.carteiraMotorista}\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `📅 *Registrado em:* ${dados.dataRegistro}\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: rgMsg,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'gerarnick':
case 'nick': {
try {
if (!q?.trim()) return reply(`Exemplo: ${prefix + command} Nk Petrov`)
reply("Aguarde um momento..")
const url = `https://keisenapis.site/api/geradores/gerar-nicks?apitoken=${TOKEN}&text=${encodeURIComponent(q)}`
const { status, resultado } = await fetchJson(url)

if (!status || !resultado?.length)
return reply("Não foi possível gerar nicks.")
let msg = "*✨ GERADOR DE NICKS ✨*\n\n"
resultado.forEach((item, index) => {
if (item.result) msg += `(${index + 1}) ${item.result}\n`
})
reply(msg.trim())
} catch (e) {
console.log(e)
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break

case 'metadinha': {
try {
const { status, resultado } = await fetchJson(`https://keisenapis.site/api/animes/random/metadinha?apitoken=${TOKEN}`);
if (!status || !resultado) return reply("Erro ao buscar imagens.");
await reply("Aguarde um momento..");
await keisen.sendMessage(from, { image: { url: resultado.masculino }, caption: "*Perfil Masculino*"}, { quoted: selo });
await keisen.sendMessage(from, { image: { url: resultado.feminino }, caption: "*Perfil Feminino*"}, { quoted: selo });
} catch (err) {
console.log(err);
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break;

case 'attp': case 'attp2':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} keisen`);
reply("*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ......🙇‍♂️*")
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
keisen.sendMessage(from, {sticker: {url: keisen_URL + `/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=` + keisenBot}}, {quoted: selo}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'brat':
case 'brat2': {
try {
if (!q?.trim())
return reply(`Exemplo: ${prefix + command} keisen`)
reply("Aguarde um momento..")
const pack = mess.fig(ownerName, NomeDoBot)
const author = mess.fig2(pushname, groupName, isGroup)
const isVideo = command === 'brat2'
const apiUrl = isVideo ? `https://keisenapis.site/api/stickers/brat-vid?text=${encodeURIComponent(q)}&apitoken=${TOKEN}` : `https://keisenapis.site/api/stickers/brat-img?text=${encodeURIComponent(q)}&apitoken=${TOKEN}`
const buffer = await getBuffer(apiUrl)
if (!buffer) return reply("Erro ao gerar figurinha.")
let encmedia
if (isVideo) {
encmedia = await sendVideoAsSticker2(keisen, from, buffer, selo, { packname: "keisen", author: "API's" })
} else {
encmedia = await sendImageAsSticker2(keisen, from, buffer, selo, { packname: "keisen", author: "API's" }
)
}
await DLT_FL(encmedia)
} catch (e) {
console.log(e)
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break;


case 'pinterest':
case 'pin': {
try {

if (!q)
return reply(
'*❌ ᴅɪɢɪᴛᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ ɪᴍᴀɢᴇᴍ*\n' +
`🧊] *ᴇxᴇᴍᴘʟᴏ:* ${prefix + command} ᴀɴɪᴍᴇ`
);
await reagir(from, "📷");
await keisen.sendMessage(
from,
{
image: {
url: `https://tokito-apis.site/api/pinterest?q=${encodeURIComponent(q)}&mode=landscape&apikey=${API_KEY_TOKITO}`
},
caption:
'> 🧊 *ɪᴍᴀɢᴇᴍ ᴅᴏ ᴘɪɴᴛᴇʀᴇsᴛ*\n' +
`> 🔎 *ᴘᴇsǫᴜɪsᴀ:* ${q}`
},
{ quoted: info }
);
} catch (error) {
console.log(error);
reply(mess.error());
}
}
break;

case 'pinterestvideo':
case 'pinvid':
case 'pinvideo': {
try {
if (!q?.trim()) return reply(`Exemplo: ${prefix + command} https://pin.it/5xtiv7Y7G`)
const { status, resultado } = await fetchJson(`https://keisenapis.site/api/downloads/pinterest-video?apitoken=${TOKEN}&url=${encodeURIComponent(q)}`)
reply("Aguarde um momento..")
if (!status || !resultado)
return reply("Vídeo não encontrado.")
await keisen.sendMessage(from, { video: { url: resultado.video }, mimetype: "video/mp4", fileName: `${resultado.title || "pinterest-video"}.mp4`, caption: `${resultado.title || "Pinterest"}`}, { quoted: selo })
} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break;

case 'infoff': {
if (!q.trim()) 
return reply(`「🧊」Digite: ${prefix}infoff 168274223`);
const apiUrl = `https://tokito-apis.site/api/infoff?id=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
try {
const { data: json } = await axios.get(apiUrl);
if (!json.status || !json.basicInfo) 
return reply("「🧊」Não foi possível buscar os dados.");
const b = json.basicInfo;
const p = json.profileInfo || {};
const pet = json.petInfo || {};
const clan = json.clanBasicInfo || {};
const social = json.socialInfo || {};
const credit = json.creditScoreInfo || {};
const diamond = json.diamondCostRes || {};
const habilidades = Array.isArray(p.habilidades) && p.habilidades.length > 0
? p.habilidades.map(h => `『🧠』 Skill ID: ${h.skillId}${h.slot !== null ? ` (Slot ${h.slot})` : ""}`).join("\n")
: "『🧠』 Nenhuma equipada";
const roupas = Array.isArray(p.roupas) && p.roupas.length > 0
? p.roupas.map(r => `『👕』 ID: ${r}`).join("\n")
: "『👕』 Nenhuma equipada";
const msg = `「🧊」 @${sender.split('@')[0]}
- *🎮 | ᴅᴀᴅᴏs ᴄᴏᴍᴘʟᴇᴛᴏs ᴅᴏ ᴊᴏɢᴀᴅᴏʀ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ…* ↴

『🆔』 ID: ${b.id}
『✨』 Nick: ${b.nickname}
『🌍』 Região: ${b.region}
『⭐』 Nível: ${b.level}
『📈』 EXP: ${Number(b.exp).toLocaleString("pt-BR")}
『❤️』 Likes: ${Number(b.liked).toLocaleString("pt-BR")}
『🏷️』 Rank Atual: ${b.rank}
『🔫』 Rank CS: ${b.csRank}
『🏆』 Rank Máx: ${b.maxRank}
『🎯』 Pontos: ${b.rankingPoints}
『📅』 Criada em: ${b.criadoEm}
『⏱️』 Último login: ${b.ultimoLogin}
『💎』 Custo Diamantes: ${diamond.diamondCost || "N/A"}
『🧾』 Versão: ${b.releaseVersion}
『🛡️』 Badge ID: ${b.badgeId}
『🖼️』 Banner ID: ${b.bannerId}
『🏅』 Título: ${b.title}
『🔫』 Armas com skin: ${b.weaponSkinShows?.join(", ") || "Nenhuma"}

━━━━━━━━━━━━━━━━━━━
${habilidades}
━━━━━━━━━━━━━━━━━━━
${roupas}
━━━━━━━━━━━━━━━━━━━
『🐾』 Mascote: ${pet.nome || "Nenhum"}
『📊』 Nível: ${pet.nivel || "N/A"}
『✨』 EXP: ${pet.exp || 0}
『🧠』 Skill ID: ${pet.skillId || "N/A"}
『🎨』 Skin ID: ${pet.skinId || "N/A"}
━━━━━━━━━━━━━━━━━━━
『🏰』 Clã: ${clan.nome || "Nenhum"}
『📊』 Nível: ${clan.nivel || "N/A"}
『👥』 Membros: ${clan.membros || 0}/${clan.capacidade || "N/A"}
『👑』 Líder ID: ${clan.liderId || "N/A"}
━━━━━━━━━━━━━━━━━━━
『✅』 Score de Crédito: ${credit.creditScore || "N/A"}
『🧑』 Sexo: ${social.sexo || "Desconhecido"}
『⏰』 Horário ativo: ${social.horarioAtivo || "N/A"}

『📝』 Bio:
_${social.bio || "Nenhuma bio definida"}_
`;

await reply(msg);

} catch (err) {
console.error("Erro infoff:", err);
reply("「🧊」Erro ao buscar jogador.");
}
}
break;

case 'cria': 
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break

case 'anime1':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break

case 'ff1':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
keisen.sendMessage(from, { image: YukaModz }, {quoted: selo })
break	

case 'game':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break

case 'ff2':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break	

case 'anime2':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break

case 'entardecer':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break

case 'indian':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break 

case 'ffrose':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break	

case 'ffgren':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break		

case 'chufuyu':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break	

case 'wolf':
if (args.length < 1) return reply("cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break	

case 'dragonred':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
YukaModz = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
keisen.sendMessage(from, { image: YukaModz }, { quoted: selo })
break
 
case 'logs': {
if(!DonoOficial) return;
try {
const axios = require('axios');
const res = await axios.get("http://br1.bronxyshost.com:4337/logs?token=lmonly");
let texto = typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : String(res.data);
texto = texto.replace(/https?:\/\/\S+/gi, "SITE DE MANITORIA HUTAOBOT-MD");
if (!texto || texto.trim().length === 0) {
            return reply("*Nenhum texto encontrado nos logs!*");
}
reply(texto);
} catch (err) {
console.error(err);
reply("*Ocorreu um erro ao acessar os logs!*");
}
}
break;

case 'instagram':
case 'insta':
case 'insta_video': {
await reagir(from, "⏳");
try {
if (!q || q.length < 5)
return reply(`*${prefix + command} ʟɪɴᴋ ᴅᴏ ɪɴꜱᴛᴀɢʀᴀᴍ ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ 💁‍♂️*`);
const apiUrl = `https://tokito-apis.site/api/insta-video?url=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
await keisen.sendMessage(from, {
video: { url: apiUrl },
mimetype: "video/mp4",
}, { quoted: selo });

} catch (e) {
console.log(e);
return reply(mess.error());
}
}
break;

case 'insta_audio':
case 'instagram_audio': {
await reagir(from, "⏳");
try {
if (!q || q.length < 5)
return reply(`*${prefix + command} ʟɪɴᴋ ᴅᴏ ɪɴꜱᴛᴀɢʀᴀᴍ ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ 💁‍♂️*`);
const apiUrl = `https://tokito-apis.site/api/insta-video?url=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
await keisen.sendMessage(from, {
audio: { url: apiUrl },
mimetype: "audio/mpeg",
ptt: false
}, { quoted: selo });
} catch (e) {
console.log(e);
return reply(mess.error());
}
}
break;

case 'ttkd':
case 'tiktok_video':
case 'tiktoksearch': {
await reagir(from, "⏳")
try {
if (!q) {
return reply(
`🧊 Use:\n` +
`• ${prefix}tiktok link\n` +
`• ${prefix}tiktok nome do vídeo`
)
}
const isTikTokUrl = /tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com/i.test(q)
if (isTikTokUrl) {
await keisen.sendMessage(
from,
{
video: {url: `https://tokito-apis.site/api/tiktok-video?url=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`
},
mimetype: "video/mp4"
},
{ quoted: selo }
)
} 
else {
const response = await fetchJson(
`https://tokito-apis.site/api/tiktok-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`
)
if (!response.status || !response.resultados || !response.resultados.length) {
return reply(`❌ Nenhum vídeo encontrado.`)
}

const result = response.resultados[0]

await keisen.sendMessage(
from,
{
video: { url: result.video_sem_marca || result.video },
mimetype: "video/mp4"
},
{ quoted: selo }
)
}

} catch (e) {
console.log(e)
return reply(`⚠️ Erro ao processar TikTok.`)
}
}
break;
case 'tiktokaudio':
case 'tiktok_audio':
await reagir(from, "⏳")
try {
if (!q) return reply(`${prefix + command} link do Tiktok`);
const apiUrl = `https://tokito-apis.site/api/tiktok-video?url=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
await keisen.sendMessage(from, {
audio: {
url: apiUrl
},
mimetype: "audio/mpeg",
ptt: false
}, { quoted: selo });
} catch (e) {
console.log(e);
return reply(mess.error());
}
break;

case 'tiktok_foto':
case 'ttkfoto':
case 'tiktok_all':
await reagir(from, "⏳");
try {
if (!q) return reply(`${prefix + command} link do TikTok`);
const axios = require("axios");
const firstResp = await axios.get(
`https://tokito-apis.site/api/tiktok-foto?url=${q}&apikey=${API_KEY_TOKITO}&index=0`,
{ responseType: 'stream' }
);
const total = parseInt(firstResp.headers['x-total-fotos']) || 1;
await keisen.sendMessage(
from,
{
image: {
url: `https://tokito-apis.site/api/tiktok-foto?url=${q}&apikey=${API_KEY_TOKITO}&index=0`
}
},
{ quoted: selo }
);
for (let i = 1; i < total; i++) {
await keisen.sendMessage(
from,
{
image: {
 url: `https://tokito-apis.site/api/tiktok-foto?url=${q}&apikey=${API_KEY_TOKITO}&index=${i}`
}
},
{ quoted: selo }
);
}

} catch (e) {
console.log(e);
return reply(mess.error());
}
break;

case 'tiktoksearch': {
try {
if (!q) {
return reply(
`🧊 *ᴏᴘᴀ! ᴘᴀʀᴇᴄᴇ ǫᴜᴇ ᴠᴏᴄᴇ̂ ᴇsǫᴜᴇᴄᴇᴜ ᴅᴇ ᴄᴏʟᴏᴄᴀʀ ᴏ ᴛɪ́ᴛᴜʟᴏ ᴅᴀ ᴘᴇsǫᴜɪsᴀ!*\n` +
`🧊 *ᴇxᴇᴍᴘʟᴏ:* ${prefix + command} edit tokito`
);
}
const response = await fetchJson(
`https://tokito-apis.site/api/tiktok-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`
);

if (!response.status || !response.resultados || !response.resultados.length) {
return reply(`❌ *ɴᴇɴʜᴜᴍ ᴠɪ́ᴅᴇᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*`);
}
const result = response.resultados[0];
await keisen.sendMessage(
from,
{
video: { url: result.video_sem_marca || result.video },
caption:
`🎵 *${result.titulo || "Sem título"}*\n` +
`⏱️ Duração: ${result.duracao}s\n` +
`👁️ Views: ${result.views}\n` +
`❤️ Likes: ${result.likes}\n` +
`👤 Autor: ${result.autor?.nome || "Desconhecido"}`
},
{ quoted: selo }
);

} catch (err) {
console.error(err);
reply(`⚠️ *ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ʙᴜsᴄᴀʀ ᴏ ᴠɪ́ᴅᴇᴏ.*`);
}
}
break;

case 'tiktokstalker':
case 'tksh': {
if (!q)
return reply(
'「❌」\n\n' +
'- *⚠️ | ᴜꜱᴜᴀ́ʀɪᴏ ɴᴀ̃ᴏ ɪɴꜰᴏʀᴍᴀᴅᴏ*\n\n' +
'> 📌 ᴇxᴇᴍᴘʟᴏ:\n' +
'> ' + prefix + command + ' @vinijr'
);
if (!q.startsWith('@'))
return reply(
'「⚠️」\n\n' +
'- *❌ | ᴜꜱᴜᴀ́ʀɪᴏ ɪɴᴠᴀ́ʟɪᴅᴏ*\n\n' +
'> ᴜꜱᴇ ᴏ *@* ᴀɴᴛᴇꜱ ᴅᴏ ɴᴏᴍᴇ'
);

try {

await reagir(from, "🔍");

const url =
`https://tokito-apis.site/api/pesquisa/tiktok-stalker?usuario=${q}&apikey=${API_KEY_TOKITO}`;
const data = await fetchJson(url);
if (!data || !data.resultado || !data.resultado.users)
return reply('「❌」\n\n- *ᴜꜱᴜᴀ́ʀɪᴏ ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ*');
const user = data.resultado.users;
const stats = data.resultado.stats;
const texto =
`「🎵 TIKTOK STALKER 🔍」

- *📌 | ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇꜱ ᴅᴏ ᴘᴇʀꜰɪʟ*

- *👤 | ɴᴏᴍᴇ:* ${user.nickname}
- *🔖 | ᴜꜱᴜᴀ́ʀɪᴏ:* @${user.username}
- *🔗 | ᴘᴇʀꜰɪʟ:* https://tiktok.com/@${user.username}

- *✅ | ᴠᴇʀɪғɪᴄᴀᴅᴏ:* ${user.verified ? 'sɪᴍ' : 'ɴᴀ̃ᴏ'}
- *🔒 | ᴘʀɪᴠᴀᴅᴏ:* ${user.privateAccount ? 'sɪᴍ' : 'ɴᴀ̃ᴏ'}
- *🛍️ | ᴄᴏᴍᴇʀᴄɪᴀʟ:* ${user.commerceUser ? 'sɪᴍ' : 'ɴᴀ̃ᴏ'}
- *🌍 | ʀᴇɢɪᴀ̃ᴏ:* ${user.region || 'ɴᴀ̃ᴏ ɪɴғᴏʀᴍᴀᴅᴀ'}

- *📊 | ᴇꜱᴛᴀᴛɪ́ꜱᴛɪᴄᴀꜱ*
- *👥 | ꜱᴇɢᴜɪᴅᴏʀᴇꜱ:* ${formatNumberDecimal(stats.followerCount)}
- *➡️ | ꜱᴇɢᴜɪɴᴅᴏ:* ${formatNumberDecimal(stats.followingCount)}
- *❤️ | ᴄᴜʀᴛɪᴅᴀꜱ:* ${formatNumberDecimal(stats.heartCount)}
- *🎬 | ᴠɪ́ᴅᴇᴏꜱ:* ${formatNumberDecimal(stats.videoCount)}

- *📝 | ʙɪᴏɢʀᴀғɪᴀ:*
${user.signature
? user.signature.replaceAll("\n\n", "\n")
: 'ɴᴀ̃ᴏ ᴘᴏꜱꜱᴜɪ ʙɪᴏɢʀᴀғɪᴀ'}`;
await sendUrlText(
from,
texto,
user.nickname + " (@" + user.username + ")",
formatNumberDecimal(stats.followerCount) + " Seguidores",
user.avatarLarger,
"https://www.tiktok.com/@" + user.username,
info
);

} catch (error) {
console.log("Erro TikTok Stalker:", error);
reply('「❌」\n\n- *ᴇʀʀᴏ ᴀᴏ ʙᴜꜱᴄᴀʀ ᴏ ᴘᴇʀꜰɪʟ*');
}
}
break;

case 'fakemsg':
case 'fakechat'://Criado por Nk 
if ([prefix, "&", "/", "#", "+"].includes(q.trim())) {
return reply(`_Infelizmente não pode ser colocado comandos no fake chat._`);
}
const [repplace, tarrget, bott] = q.split("|");
const m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;

if (!m_ || !tarrget || !bott) {
return reply(`- Exemplo:\n\n ${prefix}fakechat _@user|mensagem do usuário|Sua mensagem_`);
}
keisen.sendMessage(from, {
text: bott
}, {
quoted: {
            key: {
                fromMe: false,
                participant: m_
            },
            message: {
                conversation: tarrget
            }
}
});
break; //by moreno modz

case 'shazam': {
if ((isMedia && !info.message.imageMessage) || isQuotedAudio) {
await reagir(from, "✨");
let encmedia;
if (isQuotedAudio) {
            encmedia = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
} else {
            encmedia = info.message.audioMessage;
}
try {
            const infoMusica = await identificarMusica(encmedia, arcloud, ytAudio, DLT_FL, getRandom, getExtension, getFileBuffer);
            let txt = mess.shazam(infoMusica).trim();
            await keisen.sendMessage(from, {image: { url: infoMusica.thumbYT }, caption: txt, contextInfo: NkChannelKk
            }, { quoted: selo });
            if (infoMusica.infoYT?.download?.url) {
                await keisen.sendMessage(from, {audio: { url: infoMusica.infoYT.download.url }, mimetype: 'audio/mpeg', fileName: `${infoMusica.tituloYT}.mp3`, contextInfo: NkChannelKk
                }, { quoted: selo });
            } else {
                reply(mess.error());
            }} catch (e) {
            console.log(e);
            reply(mess.error());
}} else {
reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴀᴜᴅɪᴏ 🙇‍♂️*');
}
break;
}

case 'play':
case 'play2':
case 'p': {
try {
if (!q) return reply(`🎵 Exemplo: ${prefix}play nome da música`)

await keisen.sendMessage(from,{
react:{text:"💧",key:info.key}
})

let data = await fetchJson(`https://tokito-apis.site/api/youtube-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`)

if (!data?.resultado?.length) return reply("❌ Nenhum resultado encontrado.")

let v = data.resultado[0]

let titulo = v.titulo || v.title
let autor = v.autor || v.author?.name
let duracao = v.duracao || v.timestamp
let views = v.views || 0
let link = v.link || v.url
let thumb = v.thumb || v.thumbnail

let cap = `📺 *${titulo}*\n\n👤 ${autor}\n⏰ ${duracao}\n👀 ${Number(views).toLocaleString('pt-BR')}`

const media = await prepareWAMessageMedia(
{ image: { url: thumb }},
{ upload: keisen.waUploadToServer }
)

const msg = generateWAMessageFromContent(from,{
viewOnceMessage:{
message:{
messageContextInfo:{
deviceListMetadata:{},
deviceListMetadataVersion:2
},
interactiveMessage:proto.Message.InteractiveMessage.create({
body:{ text:`🎵 Resultado para: ${q}` },
footer:{ text:"KEISEN BOT" },
header:{ hasMediaAttachment:false },

carouselMessage:{
cards:[
{
header:{
hasMediaAttachment:true,
imageMessage:media.imageMessage
},
body:{ text:cap },
footer:{ text:"Escolha uma opção" },

nativeFlowMessage:{
buttons:[
{
name:"quick_reply",
buttonParamsJson:JSON.stringify({
display_text:"🎧 ÁUDIO",
id:`${prefix}playaudio ${link}`
})
},
{
name:"quick_reply",
buttonParamsJson:JSON.stringify({
display_text:"🎬 VÍDEO",
id:`${prefix}playvideo ${link}`
})
},
{
name:"quick_reply",
buttonParamsJson:JSON.stringify({
display_text:"📄 DOCUMENTO",
id:`${prefix}playdoc ${link}`
})
}
]
}
}
]
}
})
}
}
},{ quoted:info })

await keisen.relayMessage(
from,
msg.message,
{ messageId: msg.key.id }
)

} catch(e){
console.log(e)
reply("❌ Erro ao buscar música")
}
}
break
case 'playmix': {
if (!q) return reply("❌ • Digite o nome da música.");
reply("🔎 • Buscando músicas...");
try {
const axios = require("axios");
const apiUrl = `https://tokito-apis.site/api/youtube-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
const { data } = await axios.get(apiUrl);
if (!data?.resultado || !data.resultado.length)
return reply("❌ • Nenhum resultado encontrado.");
const resultados = data.resultado.slice(0, 5);
let cards = [];
for (let i of resultados) {
const title = i.title;
const channel = i.author?.name || "Desconhecido";
const thumbnail = i.thumbnail || i.image;
const duration = i.timestamp || i.duration?.timestamp || "ɴᴀ̃ᴏ ɪɴғᴏʀᴍᴀᴅᴀ";
const views = i.views ? i.views.toLocaleString() : "ɴᴀ̃ᴏ ᴅɪꜱᴘᴏɴɪ́ᴠᴇʟ";
const posted = i.ago || "ɴᴀ̃ᴏ ɪɴғᴏʀᴍᴀᴅᴏ";
const videoUrl = i.url;
const texto =
`「🎬 YOUTUBE MIX🔍」

- *📌 | ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇꜱ ᴅᴏ ᴠɪ́ᴅᴇᴏ*

- *🎞️ | ᴛɪ́ᴛᴜʟᴏ:* ${title}
- *📺 | ᴄᴀɴᴀʟ:* ${channel}
- *⏱️ | ᴅᴜʀᴀᴄ̧ᴀ̃ᴏ:* ${duration}
- *👁️ | ᴠɪᴇᴡꜱ:* ${views}
- *📅 | ᴘᴏꜱᴛᴀᴅᴏ:* ${posted}
━━━━━━━━━━━━━━━━━━━
🔗 *ʟɪɴᴋ:*
${videoUrl}`;
const card =
`https://tokito-apis.site/canvas/musicard2?nome=${encodeURIComponent(title)}` +
`&autor=${encodeURIComponent(channel)}` +
`&logo=${encodeURIComponent(thumbnail)}` +
`&thumb=${encodeURIComponent(thumbnail)}` +
`&end=${encodeURIComponent(duration)}` +
`&apikey=${API_KEY_TOKITO}`;

const media = await prepareWAMessageMedia(
{ image: { url: card } },
{ upload: keisen.waUploadToServer }
);
cards.push({
header: { hasMediaAttachment: true, imageMessage: media.imageMessage },
headerType: "IMAGE",
body: { text: texto },
footer: { text: "🎧 Escolha Áudio, Vídeo ou doc" },
nativeFlowMessage: {
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎧 Áudio",
id: `${prefix}play_audio ${videoUrl}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎞️ Vídeo",
id: `${prefix}playvideo ${videoUrl}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "📄 doc",
id: `${prefix}playdoc ${videoUrl}`
})
}
]
}
});
}
await keisen.relayMessage( 
from,
{
interactiveMessage: {
carouselMessage: { cards }
}
},
{}
);
} catch (err) {
console.log(err);
reply("❌ • Erro ao buscar músicas.");
}
}
break;

case 'play_audio':
case 'playaudio':
case 'ytaudio': {
try {
const apiUrl = `https://tokito-apis.site/api/youtube-audio?q=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
await keisen.sendMessage(from, {
audio: {
url: apiUrl
},
mimetype: 'audio/mpeg',
fileName: 'audio.mp3'
}, { quoted: selo });
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'playvid':
case 'playvideo':
case 'playmp4':
case 'play_video': {
try {
const apiUrl = `https://tokito-apis.site/api/youtube-video?q=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
await keisen.sendMessage(from, {
video: {
url: apiUrl,
mimetype: "video/mp4",
fileName: `video.mp4`
}
}, { quoted: selo });
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;


case 'playdoc': {
try {
if (!q || !q.trim())
return reply(`- Exemplo: ${prefix}playdoc nome da música`);
await reagir(from, "📃");
const searchUrl =
`https://tokito-apis.site/api/youtube-search?query=${encodeURIComponent(q)}&apikey=${API_KEY_TOKITO}`;
const { data: json } = await axios.get(searchUrl);
if (!json.status || !json.resultado || !json.resultado.length)
return reply('❌ Nenhum resultado encontrado.');
const primeiro = json.resultado[0];
let title = primeiro.title || q;
title = title.replace(/[\\/:*?"<>|]/g, '').slice(0, 60);
await keisen.sendMessage(
from,
{
document: {
url: `https://tokito-apis.site/api/youtube-doc?q=${encodeURIComponent(primeiro.url || q)}&apikey=${API_KEY_TOKITO}`
},
mimetype: "audio/mpeg",
fileName: `${title}.mp3`
},
{ quoted: selo }
);
} catch (e) {
console.log('playdoc error:', e);
reply(mess.error());
}
}
break;

case 'pesquisa_yt': 
case 'ytsearch':
case 'yt-info': {
try {
if (!q?.trim()) 
return reply(`🔎 Exemplo: ${prefix + command} baixo`)
const { status, resultado } = await fetchJson(`https://keisenapis.site/api/pesquisas/yt-search?query=${encodeURIComponent(q)}&apitoken=${TOKEN}`)
if (!status || !resultado?.length)
return reply("❌ Nenhum resultado encontrado.")
const video = resultado[0].resultados
const card = `https://keisenapis.site/canvas/cardmusic?apitoken=${TOKEN}` +
`&fundo=${encodeURIComponent(video.thumbnail)}` +
`&avatar=${encodeURIComponent(video.thumbnail)}` +
`&titulo=${encodeURIComponent(video.title)}` +
`&author=${encodeURIComponent(video.author.name)}` +
`&atual=0:00` +
`&total=${encodeURIComponent(video.duration.timestamp || "0:00")}`

const msg = `🎬 *TÍTULO:* ${video.title}
⏱️ *DURAÇÃO:* ${video.duration.timestamp || "❌ Não disponível"}
👁️ *VIEWS:* ${video.views || "❌ Não disponível"}
👤 *AUTOR:* ${video.author.name}
🔗 *CANAL:* ${video.author.url}

🌐 *URL:* ${video.url}

📝 *DESCRIÇÃO:*
${video.description || "❌ Não disponível"}`
await keisen.sendMessage(from, { 
image: { url: card }, 
caption: msg 
}, { quoted: selo })

} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break;

case 'amazon': 
case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
try {
reply(mess.teste());
ABC = await fetchJson(keisen_URL + `/api-bronxys/Amazon_Pesquisa?pesquisa=${q.trim()}&apikey=` + keisenBot)
RST = "Pesquisa Amazon:\n\n"
for ( i= 0; i < (ABC.length > 40 ? 40: ABC.length); i++) {
RST +=`( ${i+1} ) - Titulo: ${ABC[i].titulo}\n- Preço: ${ABC[i].preco}\n- Url: ${ABC[i].url}\n${"_".repeat(27)}\n\n`
}
reply(RST);
} catch {
return reply(mess.error())
}
break;

case 'print': 
case 'printsite': {
try {
if (!q?.trim()) return reply(`Exemplo: ${prefix + command} https://google.com`)
const url = encodeURIComponent(q)
const apiUrl = `https://keisenapis.site/api/outros/printsite?url=${url}&apitoken=${TOKEN}`
await keisen.sendMessage(from, { image: { url: apiUrl }, caption: `📌 Print do site: ${q}`}, { quoted: selo })
} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
}
break

case "playstore":
if(q.length < 2) return reply("Cade o título do apk que deseja pesquisar?")
data = await fetchJson(keisen_URL + `/api-bronxys/playstore?nome=${q}&apikey=` + keisenBot)
ABC = "Play Store pesquisa:\n\n"
for(let a of data.resultados) {
ABC += `\n\n${a.title}\n\n----------------------------------------------\nID:
${a.appId}\n\n----------------------------------------------\n\nURL:
${a.url}\n\n----------------------------------------------`
}
reply(ABC)
break;

case 'facebook':
case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(mess.teste());
keisen.sendMessage(from, {video: {url: keisen_URL + `/api-bronxys/${command}?url=${q}&=` + keisenBot}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(mess.teste());
keisen.sendMessage(from, {audio: {url: keisen_URL + `/api-bronxys/${command}?url=${q}&=` + keisenBot}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(mess.teste());
keisen.sendMessage(from, {video: {url: keisen_URL + `/api-bronxys/${command}?url=${q}&=` + keisenBot}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(mess.teste());
keisen.sendMessage(from, {audio: {url: keisen_URL + `/api-bronxys/${command}?url=${q}&=` + keisenBot}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(keisen_URL + `/api-bronxys/mediafire?url=${q}&apikey=` + keisenBot)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
keisen.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply(mess.error());
})
} catch (e) {
console.log(String(e))
return reply(mess.error())
}
break;

//==============[ FIM CASES DOWNLOADS ]============\\


//===========[ INFORMATIVOS DO keisen ]===============\\

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await keisen.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await keisen.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(error) {
return reply(mess.error())
}
break

case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await keisen.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await keisen.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(error) {
return reply(mess.error())
}
break


case 'wikipedia': case 'wiki':
try {
if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
await reagir(from, "✅")
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
var carre = [`${mess.wikiResposta(wikis)}`]
let { key } = await keisen.sendMessage(from, { text:`*⚡ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴄʜᴀʀ ᴀǫᴜɪ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`}, {quoted: selo})
for (let i = 0; i < carre.length; i++) {
await new Promise(resolve => setTimeout(resolve, 5000)); // Atraso de 5 segundos
await keisen.sendMessage(from, { text: carre[i], mentions: [sender], edit: key });
}
} catch(error) {
reply(mess.error())
}
break
case 'tm':
case 'broadcastgrupos':
case 'msgpara grupos': {
    try {
        // 🔒 Verifica se é o dono (ajuste conforme seu bot)
        const DONO = global.owner || '556993184370@s.whatsapp.net';
        if (from !== DONO) {
            await keisen.sendMessage(from, { text: '❌ *Comando restrito ao dono do bot.*' }, { quoted: info });
            break;
        }
        
        // Pega o texto da mensagem (remove o comando)
        let texto = body.slice(prefix.length).trim().replace(/^enviargrupos|^broadcastgrupos|^msgparagrupos\s+/, '');
        
        // Se respondeu a uma mensagem, usa o texto dela
        if (!texto && info.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
            const quoted = info.message.extendedTextMessage.contextInfo.quotedMessage;
            if (quoted.conversation) texto = quoted.conversation;
            else if (quoted.extendedTextMessage?.text) texto = quoted.extendedTextMessage.text;
            else if (quoted.imageMessage?.caption) texto = quoted.imageMessage.caption;
        }
        
        if (!texto) {
            await keisen.sendMessage(from, { text: `❌ *Use:* ${prefix}enviargrupos <mensagem>\nOu responda a uma mensagem com ${prefix}enviargrupos` }, { quoted: info });
            break;
        }
        
        // Mensagem final com aviso
        const msgFinal = `📢 *MENSAGEM PARA TODOS OS GRUPOS*\n\n${texto}\n\n_⚠️ Mensagem automática do bot._`;
        
        // Confirmação rápida
        await keisen.sendMessage(from, { text: `✅ Iniciando envio para todos os grupos...` });
        
        // Busca todos os grupos que o bot participa
        const groups = await keisen.groupFetchAllParticipating();
        const groupIds = Object.keys(groups);
        
        if (groupIds.length === 0) {
            await keisen.sendMessage(from, { text: '❌ O bot não está em nenhum grupo.' }, { quoted: info });
            break;
        }
        
        let enviados = 0;
        let erros = 0;
        const total = groupIds.length;
        
        // Mensagem de progresso
        const statusMsg = await keisen.sendMessage(from, { text: `📡 Enviando para ${total} grupos... 0%` });
        
        // Envia para cada grupo com delay de 1.5 segundos
        for (let i = 0; i < groupIds.length; i++) {
            const groupId = groupIds[i];
            try {
                await keisen.sendMessage(groupId, { text: msgFinal });
                enviados++;
            } catch (err) {
                erros++;
                console.error(`Erro ao enviar para grupo ${groupId}:`, err);
            }
            
            // Atualiza progresso a cada 5 envios
            if ((i + 1) % 5 === 0 || i === groupIds.length - 1) {
                const percent = Math.floor(((i + 1) / total) * 100);
                await keisen.sendMessage(from, { text: `📡 Progresso: ${percent}% (${i+1}/${total}) | ✅ ${enviados} | ❌ ${erros}`, edit: statusMsg.key });
            }
            
            // Delay para evitar rate limit (ajuste conforme necessidade)
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        await keisen.sendMessage(from, { text: `✅ *Envio concluído!*\n📨 Enviadas: ${enviados}\n❌ Falhas: ${erros}\n👥 Total de grupos: ${total}` }, { quoted: info });
        
    } catch (e) {
        console.error('ERRO NO ENVIO PARA GRUPOS:', e);
        await keisen.sendMessage(from, { text: '❌ Erro ao enviar mensagem para os grupos.' }, { quoted: info });
    }
    break;
}

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
await keisen.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}, {quoted: selo})
} catch(error) {
reply(mess.error())
}
break

case 'clima':
case 'tempo': { // by moreno modz
try {
if (!q) {
return reply(`- *Exemplo:*\n` + `${prefix + command} Belém`)
}
await reagir(from, '📡');
const cidade = q.trim()
const url = `https://wttr.in/${encodeURIComponent(cidade)}?format=j1`
const { data } = await axios.get(url)
if (!data || !data.current_condition || !data.current_condition[0]) {
return reply(mess.error)
}
const atual = data.current_condition[0]
const temp = atual.temp_C
const sensacao = atual.FeelsLikeC
const umidade = atual.humidity
const vento = atual.windspeedKmph
const clima = atual.weatherDesc?.[0]?.value || 'Indefinido'
const obs = atual.observation_time
const texto = `🌐 *CLIMA EM TEMPO REAL*\n🌍 *CIDADE:* ${cidade}\n\n🌡️ *TEMPERATURA:* ${temp}°C\n🔖 *SENSAÇÃO:* ${sensacao}°C\n💧 *UMIDADE:* ${umidade}%\n🌪️ *VENTO:* ${vento} km/h\n\n🗣️ *CONDIÇÃO:* ${clima}\n📎 *ATUALIZADO:* ${obs} UTC\n👤 *SOLICITADO POR:* ${pushname}`
const imagem = `https://wttr.in/${encodeURIComponent(cidade)}.png`
await keisen.sendMessage(from, { image: { url: imagem }, caption: texto }, { quoted: info })
} catch (err) {
console.error('ERRO CLIMA:', err)
reply(mess.error)
}
break
}

case 'getchannel':
case 'infoch': {//Nk 
if (!q) return reply(`• Por favor, forneça o link do canal.\n\n> exemplo: ${prefix + command} https://whatsapp.com/channel/0029ValLKgUAO7RCUU0dO03k`);
await reagir(from, "🎉");
try {
let channelId;
if (q.includes('whatsapp.com/channel/')) {
channelId = q.split('whatsapp.com/channel/')[1].split('/')[0];
} else if (q.includes('wa.me/channel/')) {
channelId = q.split('wa.me/channel/')[1].split('/')[0];
} else {
channelId = text;}
const idNewsletter = await keisen.newsletterMetadata('invite', channelId);
const axios = require('axios');
const cheerio = require('cheerio');
const response = await axios.get(q);
const $ = cheerio.load(response.data);
const title = $('title').text() || 'Nome não encontrado';
const img = $('img._9vx6').attr('src');
const subs = $('h5._9vd5._9scy').text() || 'Seguidores não encontrados';
const description = $('h4._9vd5._9scb').text() || 'Descrição não encontrada';
await keisen.sendMessage(from, {
            image: { url: img },
            caption: `- 🌟 *Nome*: ${title}\n- 👤 *Seguidores*: ${subs}\n- 🎭 *Id Channel*: ${idNewsletter.id}\n- 🔗 *Link*: ↴\n${q}\n- 🌃 *Descrição*: ↴\n\n${description}`,
}, { quoted: selo });
} catch (e) {
reply('Ocorreu um erro ao tentar obter as informações do canal.');
console.log(e);
}
}
break;

case 'alugarbot': 
case 'alugar': 
try {
await reagir(from, "💎");
const Nk = {male: "./DADOS DO KEISEN/INFO_KEISEN/LOGOS/fotoaluguel.png", female: "./DADOS DO KEISEN/INFO_KEISEN/LOGOS/fotoaluguel.png", thirdImage: "./DADOS DO KEISEN/INFO_KEISEN/LOGOS/fotoaluguel.png"};

const maleMedia = await prepareWAMessageMedia({ image: { url: Nk.male } }, { upload: keisen.waUploadToServer });

const femaleMedia = await prepareWAMessageMedia({ image: { url: Nk.female } }, { upload: keisen.waUploadToServer });

const thirdMedia = await prepareWAMessageMedia({ image: { url: Nk.thirdImage } }, { upload: keisen.waUploadToServer });

const maleHeader = maleMedia.videoMessage 
            ? { hasMediaAttachment: true, videoMessage: maleMedia.videoMessage }
            : { hasMediaAttachment: true, imageMessage: maleMedia.imageMessage };
            
const femaleHeader = femaleMedia.videoMessage 
            ? { hasMediaAttachment: true, videoMessage: femaleMedia.videoMessage }
            : { hasMediaAttachment: true, imageMessage: femaleMedia.imageMessage };
            
const thirdHeader = thirdMedia.videoMessage 
            ? { hasMediaAttachment: true, videoMessage: thirdMedia.videoMessage }
            : { hasMediaAttachment: true, imageMessage: thirdMedia.imageMessage };

const carouselMessage = {
            cards: [
                {
                    header: maleHeader,
                    headerType: maleMedia.videoMessage ? "VIDEO" : "IMAGE",
                    body: { text: mess.aluguel15day() },
                    footer: { text: `${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ ${NomeDoBot}\",\"url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: maleHeader,
                    headerType: maleMedia.videoMessage ? "VIDEO" : "IMAGE",
                    body: { text: mess.aluguel15day() },
                    footer: { text: `${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ ${NomeDoBot}\",\"url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: maleHeader,
                    headerType: maleMedia.videoMessage ? "VIDEO" : "IMAGE",
                    body: { text: mess.aluguel15day() },
                    footer: { text: `${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ ${NomeDoBot}\",\"url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: maleHeader,
                    headerType: maleMedia.videoMessage ? "VIDEO" : "IMAGE",
                    body: { text: mess.aluguel15day() },
                    footer: { text: `${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ ${NomeDoBot}\",\"url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: femaleHeader,
                    headerType: femaleMedia.videoMessage ? "VIDEO" : "IMAGE",
                    body: { text: mess.aluguel30day() },
                    footer: { text: `${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ ${NomeDoBot}\",\"url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*30*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/${ownerNumber}?text=Estou%20querendo%20alugar%20por%20*30*%20dias%20✅\"}`
                        }]
                    }
                }
            ]
};

await keisen.relayMessage(from, {
            interactiveMessage: { 
                contextInfo: { 
                    participant: from, 
                    quotedMessage: { documentMessage: { contactVcard: true, quoted: selo } }
                }, 
                body: { text: '*⏤͟͟͞͞ESTÁ QUERENDO ALUGAR? OLHE A TABELA ABAXO... 🙇‍♂️* ↴' }, 
                carouselMessage: carouselMessage
            }
}, {});

} catch (e) {
console.log(e);
await keisen.sendMessage(from, { text: mess.error() }, { quoted: selo });
}
break;

case 'pix': {
if (!q) return reply('*ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ, ɪɴꜱɪʀᴀ ᴏ ᴠᴀʟᴏʀ ᴅᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ 💁‍♂️*');
try {
reagir(from, "💵");
const descricao = 'Pagamento via PIX';
const valor = Number(q);
const idempotencyKey = uuidv4();
const pagamentoInfo = await criarPagamentoPix(valor, descricao, idempotencyKey);
const qrBuffer = Buffer.from(pagamentoInfo.qr_code_base64, 'base64');
const mediaQR = await prepareWAMessageMedia({ image: qrBuffer }, { upload: keisen.waUploadToServer });
const carouselMessage = {text: '*𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*', cards: [{header: {hasMediaAttachment: true, imageMessage: mediaQR.imageMessage}, headerType: 'IMAGE', body: {text: `- *⚖️ | 𝐏𝐈𝐗 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎*\n- *💸 | 𝚅𝙰𝙻𝙾𝚁 → R$ ${valor}*\n- *⚙️ | 𝙸𝙳 𝙳𝙴 𝚃𝚁𝙰𝙽𝚂𝙸𝙲𝙰𝙾 → ${pagamentoInfo.id}*\n- *🪫 | 𝚂𝚃𝙰𝚃𝚄𝚂 → 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*`}, footer: {text: `*ᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ ᴇxᴩɪʀᴀ ᴇᴍ 30 ᴍɪɴᴜᴛᴏꜱ*`}, nativeFlowMessage: {buttons: [{name: 'cta_copy', buttonParamsJson: JSON.stringify({display_text: '𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 💵', copy_code: pagamentoInfo.qr_code})}]}}]};
await keisen.relayMessage(from, {interactiveMessage: {contextInfo: {participant: from}, body: { text: '' }, carouselMessage}}, {});
const tempoMaximo = 30 * 60 * 1000;
const inicio = Date.now();
while (Date.now() - inicio < tempoMaximo) {
await sleep(5000);
const check = await verificarPix(pagamentoInfo.id);
if (check.status === 'approved') {
await reply(`*ᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ ꜰᴏɪ ᴄᴏɴꜰɪʀᴍᴀᴅᴏ, ᴍᴜɪᴛᴏ ᴏʙʀɪɢᴀᴅᴏ ᴩᴇʟᴀ ᴀᴊᴜᴅᴀ ❣️🫂*\n> ᴀꜱꜱ: ${ownerName}`);
return;
}}
await reagir(from, "😿");
} catch (error) {
reply(mess.error());
}
break;
}

case 'comprar_bot':
case 'comprarbot': {
try {
reagir(from, "💎");
const descricao = 'Compra do Bot';
const VALOR_BOT = 90.72; 
const idempotencyKey = uuidv4();
const pagamentoInfo = await criarPagamentoPix(VALOR_BOT, descricao, idempotencyKey);
const qrBuffer = Buffer.from(
pagamentoInfo.qr_code_base64, 'base64');
const mediaQR = await prepareWAMessageMedia({ image: qrBuffer }, { upload: keisen.waUploadToServer });
const carouselMessage = {text: '*𝙲𝙾𝙼𝙿𝚁𝙰 𝙳𝙾 𝙱𝙾𝚃*', cards: [{header: {hasMediaAttachment: true, imageMessage: mediaQR.imageMessage}, headerType: 'IMAGE', body: {text: `- *⚖️ | 𝙿𝙸𝚇 𝙶𝙴𝚁𝙰𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾*\n- *💸 | 𝚅𝙰𝙻𝙾𝚁 → R$ ${VALOR_BOT.toFixed(2)}*\n- *⚙️ | 𝙸𝙳 𝙳𝙰 𝚃𝚁𝙰𝙽𝚂𝙰𝙲𝙰𝙾 → ${pagamentoInfo.id}*\n- *🪫 | 𝚂𝚃𝙰𝚃𝚄𝚂 → 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*`},
footer: {text: '*ᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ ᴇxᴩɪʀᴀ ᴇᴍ 30 ᴍɪɴᴜᴛᴏꜱ*'}, nativeFlowMessage: {buttons: [{name: 'cta_copy', buttonParamsJson: JSON.stringify({display_text: '𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾 𝙿𝙸𝚇 💵', copy_code: pagamentoInfo.qr_code})}]}}]};
await keisen.relayMessage(from, {interactiveMessage: { contextInfo: { participant: from }, body: { text: '' }, carouselMessage}}, {});
const tempoMaximo = 30 * 60 * 1000;
const inicio = Date.now();
while (Date.now() - inicio < tempoMaximo) {
await sleep(5000);
const check = await verificarPix(pagamentoInfo.id);
if (check.status === 'approved') {
await reply(`*ᴩᴀɢᴀᴍᴇɴᴛᴏ ᴄᴏɴꜰɪʀᴍᴀᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ✅*\n> *ᴇɴᴠɪᴀɴᴅᴏ ᴏ ᴀʀǫᴜɪᴠᴏ... ✨*`);
await sleep(1000);
await keisen.sendMessage(sender, {
document: fs.readFileSync('./keisen.zip'),
fileName: 'keisenBot-MD.zip',
mimetype: 'application/zip',
caption: '*✅ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪʙᴇʀᴀᴅᴏ | ᴏʙʀɪɢᴀᴅᴏ ᴘᴇʟᴀ ᴄᴏᴍᴘʀᴀ*'});
return;
}}
await reagir(from, "😿");
} catch (error) {
reply(mess.error());
}
break;
}

case 'gtts':
try {
if (args.length < 1) return await keisen.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./ARQUIVES/funcoes/gtts.js')(args[0])
if (args.length < 2) return await keisen.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, async function() {
await exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, async(err) => {
await keisen.sendMessage(from, {audio: fs.readFileSync(ranm), mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(ranm); DLT_FL(rano)
})
})
} catch(error) {
console.log(error)
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'avalia': {
try {
if(!isGroup) return reply(mess.onlyGroup())
const groupMetadata = await keisen.groupMetadata(from);
const members = groupMetadata.participants;
const randomMember = members[Math.floor(Math.random() * members.length)];
let profilePictureUrl;
try {
            profilePictureUrl = await keisen.profilePictureUrl(randomMember.id, 'image');
} catch {
            profilePictureUrl = imgperfil; 
}
const evaluations = ["Uma ótima escolha de foto de perfil!", "Essa foto mostra sua personalidade!", "Adorei a vibe dessa imagem!", "Você parece estar se divertindo nessa foto!", "Essa foto reflete bem quem você é!", "Que lindo essa foto, ameiii!!"];
const randomEvaluation = evaluations[Math.floor(Math.random() * evaluations.length)];
const messageContent = {
            image: { url: profilePictureUrl },
            caption: mess.avalia({ randomMember, info, groupName, isChVip, randomEvaluation }),
            contextInfo: { ...NkChannelKk, mentionedJid: [randomMember.id] }
};
await keisen.sendMessage(from, messageContent, { quoted: selo });
} catch (e) {
console.error(e);
return reply(mess.error());
}
break;
}


case 'avaliar':
case 'avalie':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}ᴀᴠᴀʟɪᴇ ᴍᴇʟʜᴏʀ ʙᴏᴛ ǫᴜᴇ ᴊᴀ ᴠɪ!!*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*🌟 ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴅᴇ: @${sender.split("@")[0]}*\n- *ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
await sendMentions(from, `*ᴄᴇʀᴛᴏ @${sender.split("@")[0]} ᴇɴᴠɪᴇɪ ᴀ sᴜᴀ ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴀᴏ ᴍᴇᴜ ᴅᴏɴᴏ 🙇‍♂️*`);
break

case 'bug':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}ʙᴜɢ ᴏ ʙᴏᴛ ᴇsᴛᴀ ᴄᴏᴍ ᴀᴛʀᴀsᴏ*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${sender.split("@")[0]} ʀᴇʟᴀᴛᴏᴜ ᴀʟɢᴜᴍ ᴇʀʀᴏ ᴏᴜ ʙᴜɢ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴀᴏ ᴍᴇᴜ ᴍᴇsᴛʀᴇ, ᴄᴀsᴏ ᴠᴏᴄᴇ ғʟᴏᴏᴅ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴢᴜᴇɪʀᴀ ᴇᴜ ɪʀᴇɪ ʙʟᴏǫᴜᴇᴀʀ ᴠᴏᴄᴇ ᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*');
break

case 'sugestão': case 'sugestao':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}sᴜɢᴇsᴛᴀᴏ ǫᴜᴇ ᴛᴀʟ ᴄᴏʟᴏᴄᴀʀ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ғᴜɴᴄɪᴏɴᴇ ᴅᴀ ᴛᴀʟ ᴍᴀɴᴇɪʀᴀ? 🤷‍♂️*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${sender.split("@")[0]} sᴜɢᴇʀɪᴜ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ sɪsᴛᴇᴍᴀ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴀᴏ ᴍᴇᴜ ᴍᴇsᴛʀᴇ, ᴄᴀsᴏ ᴠᴏᴄᴇ ғʟᴏᴏᴅ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴢᴜᴇɪʀᴀ ᴇᴜ ɪʀᴇɪ ʙʟᴏǫᴜᴇᴀʀ ᴠᴏᴄᴇ ᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*');
break


case 'movie':
if (args.length == 0) return reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
keisen.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
})
break

case 'series': {//nunu
try {
const nunuzqrw = await axios.get('https://www.adorocinema.com/series/');
const nunuhjtr = cheerio.load(nunuzqrw.data);
const nunufyxk = [];
nunuhjtr('.roller-item').each((nunuxcbz, nunuhblk) => {
            const nunujlwp = nunuhjtr(nunuhblk).find('.meta-title-link').text().trim();
            const nunusygh = nunuhjtr(nunuhblk).find('.meta-description').text().trim();
            const nunuhsnj = `https://www.adorocinema.com${nunuhjtr(nunuhblk).find('.meta-title-link').attr('href')}`;
            const nunuqksa = nunuhjtr(nunuhblk).find('.thumbnail-img').attr('data-src');
            if (nunujlwp && nunuhsnj) {
                nunufyxk.push({
                    nunujlwp,
                    nunusygh,
                    nunuhsnj,
                    nunuqksa
                });
            }
});
const nunumaxSeries = nunufyxk.slice(0, 8);
let nunugktp = '🦺 *Melhores Séries da Semana:*\n\n';
nunumaxSeries.forEach((nunusrzl, nunuihra) => {
            nunugktp += `🩴 *${nunuihra + 1}. ${nunusrzl.nunujlwp}*\n` +
                        `🈳️ *Gêneros:* ${nunusrzl.nunusygh}\n` +
                        `🚩 *Link:* ${nunusrzl.nunuhsnj}\n\n`;
});
if (nunumaxSeries.length > 0 && nunumaxSeries[0].nunuqksa) {
            await keisen.sendMessage(from, { 
                image: { url: nunumaxSeries[0].nunuqksa }, 
                caption: nunugktp 
            }, { quoted: selo });
} else {
            await keisen.sendMessage(from, { text: nunugktp }, { quoted: selo });
} 
} catch (nunuevbr) {
console.error('Erro ao buscar as séries:', nunuevbr);
reply('⚠️ Não foi possível buscar as melhores séries no momento.');
}
break;
}


case 'signo':
try {
if(!q.trim()) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(keisen_URL + `/api-bronxys/horoscopo?signo=${q}&apikey=` + keisenBot)
keisen.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'noticias': 
case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
d = await pickRandom(theNews.data.articles)

reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n• URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break

case 'googlenews': 
case 'gnews':
try {
idioma = "pt-br"; // Idioma: Português do Brasil
country = "BR"; // Mude a sigla para qual você quiser puxar as notícias.
dataNews = await fetchJson(`https://delirius-api-oficial.vercel.app/api/noticias?language=${idioma}&country=${country}`);
NTD = pickRandom(dataNews.headline_stories);
await reply(`> Google Notícias - Brasil:\n–\n• Título: *${NTD.title}*\n• Postagem por: *${NTD.by}* | ${NTD.published}\n–\n• URL: *${NTD.url}*`);
} catch(e) {
return await reply(mess.error());
}
break

case 'grupos': {
reply(mess.teste());
blue = await fetchJson(keisen_URL + `/api-bronxys/grupos?q=${q}&apikey=` + keisenBot)
let red = "Listagem de grupos para você:\n\n"
blue.forEach(function(ab) {
red += ` - Url do Grupo: ${ab.link}\n\n - Descrição: ${ab.desc}\n\n${"-".repeat(20)}\n\n`
})
reply(red)
}
break;

case 'moedas': 
case 'moeda':
try {
ABC = await fetchJson(keisen_URL + `/api-bronxys/Moedas_Agora?apikey=` + keisenBot)
reply(`${ABC?.dolar}\n\n${ABC?.euro}\n\n${ABC?.libra}\n\n${ABC?.bitcoin}\n\n${ABC?.ethereum}\n\n${ABC?.bovespa}\n\n${ABC?.ouro}`);
} catch {
return reply(mess.error())
}
break;

case "letra": 
case "liryc": 
case "letram": 
case "letramusic": 
case "letramusica": {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Ela me traiu`)
try {
reply(mess.teste());
const abc = await fetchJson(keisen_URL + `/api-bronxys/letra_musica?letra=${q.trim()}&apikey=` + keisenBot)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply(mess.error())
}
}
break;

case 'gpt': { 
if (!q) return reply('• Por favor, insira um texto ao ' +
'lado do comando para que eu possa gerar ' +
'uma resposta!');
try { 
const response = await fetchJson(`https://keisenapis.site/api/ias/gpt?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
reply(response.resultado.data[0].resposta);
} catch (error) {
console.error(error);
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
break;
}

case 'gemini': {
if (!q) return reply('• Para conversar com o gemini, ' +
'primeiro você deve inserir um texto ao lado ' +
' do comando!');
try { 
const GEMINI_RESPONSE = await fetchJson(`https://keisenapis.site/api/ias/gemini?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);

reply(GEMINI_RESPONSE.resposta);
} catch (error) {
console.error(error);
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
break;
}

case 'gemini-pro': {
if (!q) return reply('• Para conversar com o gemini-pro, ' +
'primeiro você deve inserir um texto ao lado ' +
' do comando!');
try { 
const GEMPRO_RESPONSE = await fetchJson(`https://keisenapis.site/api/ias/gemini-pro?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
reply(GEMPRO_RESPONSE.resposta.resposta);
} catch (error) {
console.error(error);
reply("❌ Erro ao processar.\n- Acesse: https://keisenapis.site e verifique se ainda contém requests no seu token.")
}
break;
}


case 'esportenoticias': 
case 'esportenoticia': 
case 'espnoticia': 
case 'espnoticias':
case 'noticiasesporte': 
case 'noticiaesporte': 
case 'noticiaesp': 
case 'noticiasesp':
case 'esporte_noticias': 
case 'esporte_noticia': 
case 'esporte-noticias': 
case 'esporte-noticia':
reply(mess.teste());
try {
ABC = await fetchJson(keisen_URL + `/api-bronxys/esporte_noticias?apikey=` + keisenBot)
AB =""
for ( i = 1; i < ABC.length; i++) {
AB += `${ABC[i].titulo}\n\n`
}
keisen.sendMessage(from, {image: {url: ABC[0].img}, caption: AB}, {quoted: selo})
} catch {
return reply(mess.error())
}
break;

case 'celular':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply(mess.teste());;
ABC = await fetchJson(keisen_URL + `/api-bronxys/info_celular?celular=${q}&apikey=` + keisenBot);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply(mess.error());
}
break;

case 'serie':
if (args.length == 0) return reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult());
await keisen.sendMessage(from, {image: {url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`}, caption: mess.series(serieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error())
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp.`)
try {
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer();
lnDown = await axios.get(`https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`);
await keisen.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1), lnDown)}, {quoted: selo}); 
await keisen.sendMessage(from, {document: {url: aptoide.data.datalist.list[0].file.path}, mimetype: "application/vnd.Android.package-archive", fileName: `${aptoide.data.datalist.list[0].name}.apk`, caption: "Download Completo!"}, {quoted: selo})
} catch(error) {
return reply(mess.error())
}
break

//===========[ FIM CASES INFORMATIVOS ]==========\\

//=======[ COMANDOS BÁSICOS DE LOGOS DO keisen ]=========\\
case 'angelwing':case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);
reply(mess.teste());
ABC = await fetchJson(keisen_URL + `/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=` + keisenBot);
keisen.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(() => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'fiction': 
case '3dstone': 
case 'areia': 
case 'style': 
case 'blood': 
case 'pink': 
case 'cattxt': 
case 'neondevil':
case 'carbon': 
case 'metalfire': 
case 'thunder': 
case 'vidro': 
case 'jokerlogo': 
case 'transformer': 
case 'demonfire':
case 'jeans': 
case 'metalblue': 
case 'natal': 
case 'ossos':
case 'asfalto': 
case 'break': 
case 'glitch2': 
case 'colaq':
case 'neon3': 
case 'nuvem': 
case 'horror': 
case 'matrix':
case 'berry': 
case 'luxury': 
case 'lava': 
case 'thunderv2':
case 'neongreen': 
case 'neve': 
case 'neon': 
case 'neon1':
case 'neon3d': 
case 'gelo': 
case 'neon3': 
case '3dgold':
case 'lapis': 
case 'toxic': 
case 'demongreen': 
case 'rainbow':
case 'halloween':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);
reply(mess.teste());
ABC = await fetchJson(keisen_URL + `/api/${command}?texto=${q}&apikey=` + keisenBot);
keisen.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(() => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'shadow': 
case 'metalgold': 
case 'cup': 
case 'txtborboleta': 
case 'cemiterio': 
case 'efeitoneon':
case 'harryp': 
case 'lobometal':
case 'neon2':
case 'madeira': 
case 'lovemsg3': 
case 'coffecup':
case 'coffecup2': 
case 'florwooden': 
case 'narutologo':
case 'fire': 
case 'romantic': 
case 'smoke':
case 'papel': 
case 'lovemsg': 
case 'lovemsg2':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);
reply(mess.teste());
ABC = await fetchJson(keisen_URL + `/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=` + keisenBot);
keisen.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: selo}).catch((e) => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'marvel': 
case 'pornhub':
case 'space': 
case 'stone':
case 'steel': 
case 'grafity': 
case 'glitch3': 
case 'america':
try {
var [DG, DG2] = q.split("/")
if(!q.includes("/")) return reply(`Exemplo: ${prefix+command} xbot/mdm`)
reply(mess.teste());
ABC = await fetchJson(keisen_URL + `/api/${command}?texto=${DG}&texto2=${DG2}&apikey=` + keisenBot);
keisen.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'lixo': 
case 'lgbt': 
case 'morto': 
case 'preso': 
case 'deletem':
case 'procurado': 
case 'hitler': 
case 'borrar': 
case 'merda':
try {
IMG = JSON.parse(JSON.stringify(info)?.replace('quotedM','m'))?.message?.extendedTextMessage?.contextInfo?.message?.imageMessage || info.message?.imageMessage
PXR = await getFileBuffer(IMG, "image")
reply(mess.teste());
link = await upload(PXR)
keisen.sendMessage(from, {image: {url:keisen_URL + `/api-bronxys/montagem?url=${link}&category=${command}&apikey=` + keisenBot}}, {quoted: selo}).catch(e => {
return reply(mess.error())
console.log(erro)
})
} catch (e) {
return reply('Marque uma imagem no WhatsApp, formato jpeg/jpg');
}
break

//==============[ FIM CASES LOGOS ]============\\

//=============[ MENUS E INFOS ]==========\\

case 'az_gps': { //Yuka modz
try {
reply('Buscando grupos do yuka ... 🇵🇪😈');

const getGruposAz = require('./ARQUIVES/js/az.js');
const AZ = await getGruposAz();

if (AZ.length === 0) {
            return reply('• Az atualmente está sem grupos.');
}

let AzText = "🇵🇪 *GRUPOS Do yuka * 🇵🇪\n\n" +
            "• Criador do comando: Yuka Modz 🥀\n\n";
            
for (let i = 0; i < AZ.length; ++i) {
            AzText += `• ( ${i + 1} ) ➮ ${AZ[i].nome}\n`;
            AzText += `↳ Link ➮ ${AZ[i].link}\n\n-`;
}

reply(AzText);
} catch (error) {
console.error(error);
reply('Ihh rapaz, parece que não foi possível obter os grupos. 😰');
}
break;
}

case 'tag': {
try {
await reagir(from, "📋");
const imagemTag = 'https://tokito-apis.site/177b69.jpg';
const mediaTag = await prepareWAMessageMedia(
{ image: { url: imagemTag } },
{ upload: keisen.waUploadToServer }
);
const carouselMessage = {
text: "Nk",
cards: [{ header: {
hasMediaAttachment: true, imageMessage: mediaTag.imageMessage },
headerType: 'IMAGE',
body: {
            text: '🇵🇪 ⸸chat do yuka⸸ 🇵🇪'},
footer: {text: `${NomeDoBot}`},
nativeFlowMessage: {
            buttons: [{ name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "📋 COPIAR TAG", copy_code:
`ㅤㅤgrupo do yuka Modz🇵🇪
• https://chat.whatsapp.com/Iy3caSh0AwSGW1J8xluuL7?mode=gi_t •`
                })}]}}]};
await keisen.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
            participant: from,
            quotedMessage: {
              documentMessage: {
                contactVcard: true,
                quoted: selo}}},
body: { text: '' },
carouselMessage
}},{});
} catch (e) {
console.log(e);
await keisen.sendMessage(from, { text: mess.error() }, { quoted: selo });
}
break;
}

case 'ativar': {
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const user = sender;
if (global.menuAzAtivos[user]) return reply('*ᴅᴇꜱᴄᴜʟᴩᴇ ꜱᴇɴʜᴏʀ(ᴀ), ᴍᴀꜱ ᴠᴏᴄᴇ ᴊᴀ ᴛᴇᴍ ᴜᴍᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴀᴛɪᴠᴀᴄᴀᴏ ᴩᴇɴᴅᴇɴᴛᴇ 🤷‍♂️*');
global.menuAzAtivos[user] = true;
const texto = linguagem.ativic(prefix);
await sendMenu(from, selo, { caption: texto });
}
break;




case 'status':
await sendMenu(from, selo, {
reaction: "🎉",
videoUrl: status,
caption: linguagem.status(prefix, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkEasy, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isAntiDDD, isModobn, isAutorepo, isModoCoins, isAutofigu, isAnticall, isAntiPv, isAntiPv2, isAntiPv3, ANT_SP, nescessario, isBotoff, So_Adm, isMultiP, isx9, isAntistatus,isX9VisuUnica, isWelkom, isWelkom2),
isAdminRequired: true
});
break;

case 'menucoins':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.coins(prefix),
isGroupRequired: true,
isModoCoinsRequired: true,
sendAudio: true
});
break;

case 'menu': {
try {
reagir(from, "🪷");
if (isAudioMenu) {
const audioPath = "./DADOS DO KEISEN/data/media/audios/menu.mp3";
if (fs.existsSync(audioPath)) {
const audioBuffer = fs.readFileSync(audioPath);
await keisen.sendMessage(from, {
audio: audioBuffer,
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: selo });
}
}

const caminhoImagem = "./DADOS DO KEISEN/INFO_KEISEN/LOGOS/fotomenu.png";
const mediaMenu = await prepareWAMessageMedia({ image: { url: caminhoImagem } }, { upload: keisen.waUploadToServer });

const listaMenus = {
title: "🪷 MENU-LISTAS 🪷",
sections: [
{
title: "🪷 MENUS DIVERSOS 🪷",
highlight_label: "White Lotus",
rows: [
{ header: "🪷 MENU PRINCIPAL 🪷", title: "ᴄᴏᴍᴀɴᴅᴏs ɢᴇʀᴀɪs ᴅᴏ ʙᴏᴛ", id: prefix + "menuzz" },
{ header: "🪷 MENU-ALTERADORES 🪷", title: "ᴀʟᴛᴇʀᴀᴅᴏʀᴇs ᴅᴇ ᴀᴜᴅɪᴏs, ᴇᴛᴄ...", id: prefix + "menualt" },
{ header: "🪷 MENU +18 🪷", title: "ꜰᴜɴᴄ̧ᴏᴇs +18 sᴏ́ ᴘʀᴀ ᴠɪᴘs", id: prefix + "menu18" },
{ header: "🪷 MENU-ADM 🪷", title: "ᴍᴇɴᴜ ᴘᴀʀᴀ ᴀᴅᴍɪɴs ᴅᴏ ɢʀᴜᴘᴏ", id: prefix + "menuadm" },
{ header: "🪷 MENU-ZOEIRA 🪷", title: "ᴊᴏɢᴏs ᴇ ʙʀɪɴᴄᴀᴅᴇɪʀᴀs", id: prefix + "brincadeira" },
{ header: "🪷 MENU COINS 🪷", title: "sᴀʟᴅᴏ • ʟᴏᴊᴀ • ᴇᴄᴏɴᴏᴍɪᴀ", id: prefix + "menucoins" },
{ header: "🪷 MENU PETS 🪷", title: "ᴀᴅᴏᴛᴀʀ • ɪɴᴛᴇʀᴀɢɪʀ • ᴜᴘᴀʀ", id: prefix + "menupets" },
{ header: "🪷 MENU-DONO 🪷", title: "ꜰᴜɴᴄ̧ᴏᴇs ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ", id: prefix + "menudono" }
]},
{
title: "🪷 FUNÇÕES EXTRAS 🪷",
rows: [
{ header: "🪷 CRIADOR 🪷", title: "ɪɴғᴏʀᴍᴀᴄ̧ᴏᴇs ᴅᴏ ᴄʀɪᴀᴅᴏʀ", id: prefix + "criador" },
{ header: "🪷 PERFIL 🪷", title: "ᴅᴀᴅᴏs ᴅᴏ ᴜsᴜᴀ́ʀɪᴏ", id: prefix + "perfil" },
{ header: "🪷 PING 🪷", title: "ʟᴀᴛᴇ̂ɴᴄɪᴀ", id: prefix + "ping" },
{ header: "🪷 DONOS 🪷", title: "ʟɪsᴛᴀ ᴅᴇ ᴅᴏɴᴏs", id: prefix + "donos" },
{ header: "🪷 ALUGAR BOT 🪷", title: "ᴘʟᴀɴᴏs ᴇ ᴘʀᴇᴄ̧ᴏs", id: prefix + "alugar" }
]},
{
title: "🪷 NOVIDADES 🪷",
rows: [
{ header: "🪷 ORDEM PARANORMAL (RPG) 🪷", title: "ꜰɪᴄʜᴀ • ᴄᴏᴍʙᴀᴛᴇ • ɴᴇx", id: prefix + "opajuda" },
{ header: "🪷 PETS 🪷", title: "ᴀᴅᴏᴛᴇ ᴇ ᴄᴜɪᴅᴇ ᴅᴏ sᴇᴜ ᴘᴇᴛ", id: prefix + "menupets" },
{ header: "🪷 VIDENTE 🪷", title: "ʀᴇᴄᴇʙᴀ ᴜᴍᴀ ᴘʀᴇᴠɪsᴀᴏ", id: prefix + "vidente" },
{ header: "🪷 ATIVAR/DESATIVAR 🪷", title: "ʟɪɢᴀ ᴏᴜ ᴅᴇsʟɪɢᴀ ᴘʀᴏᴛᴇᴄ̧ᴏ̃ᴇs ᴄᴏᴍ ᴜᴍ ᴄʟɪᴄ", id: prefix + "ativar" },
{ header: "🪷 ADICIONAR META AI 🪷", title: "ᴀᴅɪᴄɪᴏɴᴀ ᴀ ᴍᴇᴛᴀ ᴀɪ ɴᴏ ɢʀᴜᴘᴏ (ᴅᴏɴᴏ)", id: prefix + "addai" },
{ header: "🪷 STATUS DAS APIS 🪷", title: "ᴅɪᴀɢɴᴏ́sᴛɪᴄᴏ ᴇᴍ ᴛᴇᴍᴘᴏ ʀᴇᴀʟ (ᴅᴏɴᴏ)", id: prefix + "testapis" }
]}
]}
const botoes = [{
name: "single_select",
buttonParamsJson: JSON.stringify(listaMenus)
}];
const textok = `╭✘━𑁁━🪷₊˚✮𝆺𝅥✿𝆺𝅥✮˚₊‧🪷━𑁁━✘╮
┃ │⌇˚₊· ͟͟͞͞🤍▪︎👤 *𝚄𝚂𝚄Á𝚁𝙸𝙾: ${pushname}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝙱𝙾𝚃: ${NomeDoBot}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝙲𝙰𝚁𝙶𝙾: ${isGroupAdmins ? "Adm" : "Membro"}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝙳𝙾𝙽𝙾: ${ownerName}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝙿𝚁𝙴𝙵𝙸𝚇𝙾: ${prefix}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝚅𝙴𝚁𝚂Ã𝙾: ${require('./package').version}*
┃ │⌇˚₊· ͟͟͞͞🤍▪︎ *𝙷𝙾𝚁𝙰: ${time}*
╰━𑁁━🪷₊˚✮𝆺𝅥✿𝆺𝅥✮˚₊‧🪷━𑁁━✘╯`;
const carouselMessage = {
cards: [{
header: {
hasMediaAttachment: true,
imageMessage: mediaMenu.imageMessage
},
body: { text: textok },
footer: { text: "ᴇsᴄᴏʟʜᴀ ᴀ ᴏᴘçãᴏ ᴀʙᴀɪxᴏ" },
nativeFlowMessage: { buttons: botoes, messageVersion: 1 }
}],
messageVersion: 1
};
const msg = generateWAMessageFromContent(from, {
interactiveMessage: {
contextInfo: {
participant: sender,
quotedMessage: { conversation: "🪷 ᴀǫᴜɪ ᴇsᴛᴀ sᴇᴜ ᴍᴇɴᴜ 🪷" }
},
body: { text: "*🪷 WHITE LOTUS · MENU INTERATIVO 🪷*" },
carouselMessage
}
}, {});
await keisen.relayMessage(from, msg.message, { messageId: msg.key.id });
} catch (error) {
console.error("Erro menu:", error);
await sendMenu(from, selo, {
reaction: "🪷",
caption: linguagem.menu(prefix),
sendAudio: false
});
}
break;
}

case 'menuzz':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.menu(prefix),
sendAudio: true
});
break;

case 'gp:': {
const apiUrl="https://whatsapp.com/channel/0029VbAkhcA2ZjCrjvK5PQ1f";
const startTime=Date.now();
const os=require('os');
await keisen.sendPresenceUpdate('composing',from);
await new Promise(resolve=>setTimeout(resolve,1000));
let status="❌ *Offline*";
let ping="—";
try{
const res=await fetch(apiUrl);
if(res.ok){
const endTime=Date.now();
ping=`${endTime-startTime} ms`;
status="✅ *Online*";
}}catch(e){
status="❌ *Offline*";
}
const uptimeSegundos=process.uptime();
const dias=Math.floor(uptimeSegundos/86400);
const horas=Math.floor((uptimeSegundos%86400)/3600);
const minutos=Math.floor((uptimeSegundos%3600)/60);
const segundos=Math.floor(uptimeSegundos%60);
const msg=`╭═⬩💧 ⃝*𝑺𝒀𝑺𝑻𝑬𝑴*⃝ 💧⬩═╮
│ 📡 • *Sᴛᴀᴛᴜꜱ:* ${status}
│ ⚡ • *Pɪɴɢ:* ${ping}
│ 🕒 • *Vᴇʀɪꜰɪᴄᴀᴅᴏ:* ${new Date().toLocaleString("pt-BR")}
│ 🖥️ • *Sɪꜱᴛᴇᴍᴀ:* ${os.type()}
│ ⏰ • *Tᴇᴍᴘᴏ Oɴʟɪɴᴇ:* ${dias} dia(s), ${horas}h ${minutos}m ${segundos}s
│ 🌐 • *canal:* ${apiUrl}
╰───────────────╯
> *©𝒀𝑼𝑺𝑯𝑰𝑹𝑶-𝑩𝑶𝑻' ⸺͟͞✰*`;
await keisen.sendMessage(from,{text:msg},{quoted:selo});
break;
}

case 'site': {
const siteLink = "https://www.roblox.com/share/g/981762525"
await keisen.sendPresenceUpdate('composing', from)
await new Promise(resolve => setTimeout(resolve, 1200))
const msg = `╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
│ 💎 • *site oficial de vendas*
│ 📡 • *Sᴛᴀᴛᴜꜱ:* ${status}
│ 🖥️ • *Sɪꜱᴛᴇᴍᴀ:* ${os.type()}
│ 🕒 • *Vᴇʀɪꜰɪᴄᴀᴅᴏ:* ${new Date().toLocaleString("pt-BR")}
│ 💻 • *Sɪᴛᴇ Oꜰɪᴄɪᴀʟ:* ${siteLink}
╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
> site exclusivo de vendas de camisas no roblox
*☆desenvolvedor☆*
© ⏤͟͟͞͞ •𝐘𝐮𝐤𝐚 𝐌𝐨𝐝𝐳👑 •`

await keisen.sendMessage(from, { text: msg }, { quoted: selo })
}
break
// ==================== SISTEMA COMPLETO: CASAMENTO, AMANTE, DIVÓRCIO, VIUVEZ ====================

// ========== CASAR ==========
case 'casarrpw':
case 'casar':
case 'pedircasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const pedidosPath = './DADOS DO KEISEN/usuarios/pedidos.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let pedidosDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(pedidosPath)) pedidosDB = JSON.parse(fs.readFileSync(pedidosPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let pretendente = sender;
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (!alvo) return reply("❌ Uso: `!casarrpg @usuario`");
    if (alvo === pretendente) return reply("❌ Você não pode casar consigo mesmo(a)!");

    const nomePretendente = pretendente.split('@')[0];
    const nomeAlvo = alvo.split('@')[0];

    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === pretendente || casamentosDB[id].pessoa2 === pretendente) {
            jaCasado = true;
            break;
        }
    }
    if (jaCasado) return reply(`❌ @${nomePretendente} você já é casado(a)! Use \`!divorciar\` primeiro.`);

    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo || casamentosDB[id].pessoa2 === alvo) {
            return reply(`❌ @${nomeAlvo} já é casado(a)!`);
        }
    }

    const custoCasamento = 1000;
    if (!coinsDB[pretendente]) coinsDB[pretendente] = { coins: 500 };
    if (coinsDB[pretendente].coins < custoCasamento) {
        return reply(`❌ @${nomePretendente}, casar custa ${custoCasamento} N-Coins. Você tem apenas ${coinsDB[pretendente].coins} N-Coins.`);
    }

    const dataCasamento = new Date().toLocaleString('pt-BR');
    const casamentoId = Date.now().toString();
    casamentosDB[casamentoId] = {
        pessoa1: pretendente,
        pessoa2: alvo,
        data: dataCasamento,
        dataISO: new Date().toISOString(),
        ativo: true
    };
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    coinsDB[pretendente].coins -= custoCasamento;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const casamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `💍 *CASAMENTO REALIZADO!* 💍\n\n` +
                         `🎉 @${nomePretendente} e @${nomeAlvo} agora são oficialmente CASADOS! 🎉\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💒 *Data do casamento:* ${dataCasamento}\n` +
                         `💰 *Custo:* ${custoCasamento} N-Coins\n\n` +
                         `💕 *"Que este amor dure para sempre!"* 💕\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: casamentoMsg, mentions: [pretendente, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== DIVORCIAR (FICA SOLTEIRO) ==========
case 'divorciar':
case 'separar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let amantesDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    let casamentoId = null;
    let conjugue = null;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            casamentoId = id;
            conjugue = casamentosDB[id].pessoa2;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            casamentoId = id;
            conjugue = casamentosDB[id].pessoa1;
            break;
        }
    }

    if (!casamentoId) return reply(`❌ @${nomeUser}, você não está casado(a)!`);

    const nomeConjugue = conjugue.split('@')[0];
    const custoDivorcio = 500;

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoDivorcio) {
        return reply(`❌ @${nomeUser}, o divórcio custa ${custoDivorcio} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    delete casamentosDB[casamentoId];
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));

    if (amantesDB[usuario]) delete amantesDB[usuario];
    if (amantesDB[conjugue]) delete amantesDB[conjugue];
    fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));

    coinsDB[usuario].coins -= custoDivorcio;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    const divorcioMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `💔 *DIVÓRCIO CONFIRMADO!* 💔\n\n` +
                        `😢 @${nomeUser} e @${nomeConjugue} se divorciaram.\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *Custo do divórcio:* ${custoDivorcio} N-Coins\n` +
                        `📅 *Data do divórcio:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                        `📝 *Status:* Ambos estão SOLTEIROS novamente\n` +
                        `💪 Use \`!casarrpg @user\` para recomeçar\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: divorcioMsg, mentions: [usuario, conjugue] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ARRUMAR AMANTE ==========
// ==================== SISTEMA: DESCUBRIR AMANTE E MATAR CÔNJUGE ====================

// ========== ARRUMAR AMANTE ==========

case 'arrumaramante':
case 'amante': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let amantesDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    if (!alvo) return reply("❌ Uso: `!arrumaramante @usuario`");
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const nomeAlvo = alvo.split('@')[0];
    
    if (usuario === alvo) return reply("❌ Você não pode ter a si mesmo como amante!");
    
    let casado = false;
    let conjugue = null;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            casado = true;
            conjugue = casamentosDB[id].pessoa2;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            casado = true;
            conjugue = casamentosDB[id].pessoa1;
            break;
        }
    }
    
    if (!casado) return reply(`❌ @${nomeUser}, você precisa ser casado(a) para ter um amante! Use \`!casarrpg @user\` primeiro.`);
    
    if (amantesDB[usuario] && amantesDB[usuario].ativo) {
        const amanteAtual = amantesDB[usuario].amante.split('@')[0];
        return reply(`❌ @${nomeUser}, você já tem um amante: @${amanteAtual}\nUse \`!terminaramante\` para terminar.`);
    }
    
    if (alvo === conjugue) return reply(`❌ @${nomeUser}, você não pode ter seu cônjuge como amante!`);
    
    const custoAmante = 5000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoAmante) {
        return reply(`❌ @${nomeUser}, arrumar um amante custa ${custoAmante} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }
    
    amantesDB[usuario] = {
        amante: alvo,
        dataInicio: new Date().toLocaleString('pt-BR'),
        dataISO: new Date().toISOString(),
        ativo: true,
        descoberto: false
    };
    fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));
    
    coinsDB[usuario].coins -= custoAmante;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const amanteMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💋 *AMANTE ARRUMADO!* 💋\n\n` +
                      `😈 @${nomeUser} arrumou um amante!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💑 *Amante:* @${nomeAlvo}\n` +
                      `📅 *Desde:* ${new Date().toLocaleString('pt-BR')}\n` +
                      `💰 *Custo:* ${custoAmante} N-Coins\n\n` +
                      `⚠️ *CUIDADO! Se seu cônjuge descobrir, as consequências serão graves!*\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: amanteMsg, mentions: [usuario, alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== DESCUBRIR AMANTE (INVESTIGAR CÔNJUGE) ==========
case 'descobriramante':
case 'investigar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let amantesDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    // Verifica se está casado
    let conjugue = null;
    let casamentoId = null;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            conjugue = casamentosDB[id].pessoa2;
            casamentoId = id;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            conjugue = casamentosDB[id].pessoa1;
            casamentoId = id;
            break;
        }
    }
    
    if (!conjugue) return reply(`❌ @${nomeUser}, você precisa ser casado(a) para investigar seu cônjuge!`);
    
    const nomeConjugue = conjugue.split('@')[0];
    
    // Custo da investigação
    const custoInvestigacao = 1000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoInvestigacao) {
        return reply(`❌ @${nomeUser}, a investigação custa ${custoInvestigacao} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }
    
    // Verifica se o cônjuge tem amante
    const conjugeTemAmante = amantesDB[conjugue] && amantesDB[conjugue].ativo === true;
    
    let resultado = '';
    let amanteNome = '';
    
    if (conjugeTemAmante) {
        amanteNome = amantesDB[conjugue].amante.split('@')[0];
        const dataInicio = amantesDB[conjugue].dataInicio;
        
        resultado = `🔍 *INVESTIGAÇÃO CONCLUÍDA!* 🔍\n\n` +
                    `💔 @${nomeUser}, seu cônjuge @${nomeConjugue} TEM um amante!\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `💑 *Amante:* @${amanteNome}\n` +
                    `📅 *Relacionamento desde:* ${dataInicio}\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `⚔️ *AÇÕES DISPONÍVEIS:*\n` +
                    `   📄 \`!divorciar\` - Se separar (custa 500 N-Coins)\n` +
                    `   ⚰️ \`!matarconjuge\` - Matar e herdar os bens (custa 10.000 N-Coins)\n` +
                    `   💔 \`!perdoartraicao\` - Perdoar a traição (grátis)\n\n` +
                    `💡 *DICA:* Use \`!matarconjuge\` para se vingar e ficar viúvo(a)!`;
        
        // Marca que o amante foi descoberto
        amantesDB[conjugue].descoberto = true;
        fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));
    } else {
        resultado = `🔍 *INVESTIGAÇÃO CONCLUÍDA!* 🔍\n\n` +
                    `✅ @${nomeUser}, seu cônjuge @${nomeConjugue} é FIEL!\n` +
                    `Não foi encontrado nenhum amante.\n\n` +
                    `💕 *Parabéns pela confiança no relacionamento!* 💕`;
    }
    
    // Debita o custo da investigação
    coinsDB[usuario].coins -= custoInvestigacao;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const investigacaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                            `${resultado}\n\n` +
                            `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                            `💰 *Custo da investigação:* ${custoInvestigacao} N-Coins\n` +
                            `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                            `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: investigacaoMsg, mentions: [usuario, conjugue] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== MATAR CÔNJUGE (APÓS DESCOBRIR TRAIÇÃO) ==========
case 'matarconjuge':
case 'viuvez': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let amantesDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    // Verifica se está casado e pega o cônjuge
    let casamentoId = null;
    let conjugue = null;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario) {
            casamentoId = id;
            conjugue = casamentosDB[id].pessoa2;
            break;
        } else if (casamentosDB[id].pessoa2 === usuario) {
            casamentoId = id;
            conjugue = casamentosDB[id].pessoa1;
            break;
        }
    }
    
    if (!conjugue) return reply(`❌ @${nomeUser}, você precisa ser casado(a) para matar seu cônjuge!`);
    
    const nomeConjugue = conjugue.split('@')[0];
    
    // Verifica se o cônjuge tem amante e se já foi descoberto
    const conjugeTemAmante = amantesDB[conjugue] && amantesDB[conjugue].ativo === true;
    const foiDescoberto = amantesDB[conjugue] && amantesDB[conjugue].descoberto === true;
    
    if (!conjugeTemAmante) {
        return reply(`❌ @${nomeUser}, seu cônjuge não tem amante! Você não tem motivo para matá-lo(a).\n🔍 Use \`!descobriramante\` para investigar primeiro.`);
    }
    
    if (!foiDescoberto) {
        return reply(`❌ @${nomeUser}, você precisa descobrir a traição primeiro!\n🔍 Use \`!descobriramante\` para investigar seu cônjuge.`);
    }
    
    // Custo do assassinato
    const custoAssassinato = 10000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoAssassinato) {
        return reply(`❌ @${nomeUser}, contratar um assassino custa ${custoAssassinato} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }
    
    // Pega o nome do amante para a mensagem
    const amanteNome = amantesDB[conjugue].amante.split('@')[0];
    
    // Remove o casamento
    delete casamentosDB[casamentoId];
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));
    
    // Calcula herança (50% dos bens do cônjuge)
    const bensConjugue = coinsDB[conjugue] ? coinsDB[conjugue].coins : 0;
    const heranca = Math.floor(bensConjugue * 0.5);
    
    // Transfere a herança e debita o custo
    coinsDB[usuario].coins += heranca;
    coinsDB[usuario].coins -= custoAssassinato;
    if (coinsDB[conjugue]) {
        coinsDB[conjugue].coins = 0;
    }
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    // Remove o amante
    delete amantesDB[conjugue];
    if (amantesDB[usuario]) delete amantesDB[usuario];
    fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));
    
    const viuvezMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `⚰️ *VIÚVO(A)!* ⚰️\n\n` +
                      `💀 @${nomeUser} matou seu cônjuge @${nomeConjugue} após descobrir a traição com @${amanteNome}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💰 *Herança recebida:* ${heranca.toLocaleString()} N-Coins\n` +
                      `💸 *Custo do assassino:* ${custoAssassinato.toLocaleString()} N-Coins\n` +
                      `📊 *Saldo final:* ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n` +
                      `📅 *Data da morte:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💔 *Agora você está VIÚVO(A) e SOLTEIRO(A)!*\n` +
                      `💪 Use \`!casarrpg @user\` para recomeçar sua vida amorosa.\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: viuvezMsg, mentions: [usuario, conjugue] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERDOAR TRAIÇÃO ==========
case 'perdoartraicao':
case 'perdoar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    
    let amantesDB = {};
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    // Verifica se o cônjuge tem amante descoberto
    let conjugueComAmante = null;
    for (let [userId, data] of Object.entries(amantesDB)) {
        if (data.ativo === true && data.descoberto === true) {
            // Verifica se este usuário é cônjuge de quem está perdoando
            conjugueComAmante = userId;
            break;
        }
    }
    
    if (!conjugueComAmante) {
        return reply(`❌ @${nomeUser}, não há nenhuma traição descoberta para perdoar.`);
    }
    
    const amante = amantesDB[conjugueComAmante].amante.split('@')[0];
    delete amantesDB[conjugueComAmante];
    fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));
    
    const perdaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🙏 *TRAIÇÃO PERDOADA!* 🙏\n\n` +
                      `💕 @${nomeUser} perdoou a traição de seu cônjuge com @${amante}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💪 *O amor venceu! O casamento continua firme e forte!* 💪\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: perdaoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== TERMINAR AMANTE ==========
case 'terminaramante': {
    if (!isGroup) return reply(mess.onlyGroup());
    
    const fs = require('fs');
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    
    let amantesDB = {};
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (!amantesDB[usuario] || !amantesDB[usuario].ativo) {
        return reply(`❌ @${nomeUser}, você não tem nenhum amante para terminar!`);
    }
    
    const amante = amantesDB[usuario].amante.split('@')[0];
    delete amantesDB[usuario];
    fs.writeFileSync(amantePath, JSON.stringify(amantesDB, null, 2));
    
    const terminoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                       `💔 *AMANTE TERMINADO!* 💔\n\n` +
                       `😢 @${nomeUser} terminou o relacionamento com @${amante}.\n\n` +
                       `📝 *Status:* Agora você está sem amante\n\n` +
                       `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: terminoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== VER STATUS DO AMANTE ==========
case 'meuamante': {
    if (!isGroup) return reply(mess.onlyGroup());
    
    const fs = require('fs');
    const amantePath = './DADOS DO KEISEN/usuarios/amantes.json';
    
    let amantesDB = {};
    if (fs.existsSync(amantePath)) amantesDB = JSON.parse(fs.readFileSync(amantePath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (!amantesDB[usuario] || !amantesDB[usuario].ativo) {
        return reply(`❌ @${nomeUser}, você não tem nenhum amante.\nUse \`!arrumaramante @user\` para arrumar um.`);
    }
    
    const amante = amantesDB[usuario].amante.split('@')[0];
    const dataInicio = amantesDB[usuario].dataInicio;
    const descoberto = amantesDB[usuario].descoberto ? "⚠️ SIM - Seu cônjuge já descobriu!" : "🔒 NÃO - Ainda escondido";
    
    const amanteMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💋 *MEU AMANTE* 💋\n\n` +
                      `👤 @${nomeUser}\n\n` +
                      `💑 *Amante:* @${amante}\n` +
                      `📅 *Desde:* ${dataInicio}\n` +
                      `🕵️ *Descoberto:* ${descoberto}\n\n` +
                      `💔 Use \`!terminaramante\` para terminar\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: amanteMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ==================== SISTEMA DE CASAMENTO NA IGREJA ====================

// ========== CASAR NA IGREJA ==========
case 'casarnaigreja':
case 'casamentoigreja':
case 'igreja': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const igrejaPath = './DADOS DO KEISEN/usuarios/igreja.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let igrejaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(igrejaPath)) igrejaDB = JSON.parse(fs.readFileSync(igrejaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let noivo = sender;
    let noiva = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (!noiva) return reply("❌ Uso: `!casarnaigreja @usuario`\nExemplo: `!casarnaigreja @maria`");
    if (noivo === noiva) return reply("❌ Você não pode casar consigo mesmo(a)!");

    const nomeNoivo = noivo.split('@')[0];
    const nomeNoiva = noiva.split('@')[0];

    // Verifica se já são casados
    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === noivo || casamentosDB[id].pessoa2 === noivo) {
            jaCasado = true;
            break;
        }
        if (casamentosDB[id].pessoa1 === noiva || casamentosDB[id].pessoa2 === noiva) {
            return reply(`❌ @${nomeNoiva} já é casado(a)!`);
        }
    }
    if (jaCasado) return reply(`❌ @${nomeNoivo} você já é casado(a)! Use \`!divorciar\` primeiro.`);

    // Verifica se já teve casamento na igreja
    if (igrejaDB[noivo] && igrejaDB[noivo].casado) {
        return reply(`❌ @${nomeNoivo}, você já se casou na igreja! Não pode casar novamente.`);
    }
    if (igrejaDB[noiva] && igrejaDB[noiva].casado) {
        return reply(`❌ @${nomeNoiva}, você já se casou na igreja! Não pode casar novamente.`);
    }

    // Custo do casamento na igreja
    const custoCasamento = 5000;
    if (!coinsDB[noivo]) coinsDB[noivo] = { coins: 500 };
    if (coinsDB[noivo].coins < custoCasamento) {
        return reply(`❌ @${nomeNoivo}, o casamento na igreja custa ${custoCasamento} N-Coins. Você tem apenas ${coinsDB[noivo].coins} N-Coins.`);
    }

    // Lista de padres
    const padres = ["Pe. Antonio", "Pe. José", "Pe. Francisco", "Pe. Miguel", "Pe. Rafael"];
    const padre = padres[Math.floor(Math.random() * padres.length)];
    
    // Lista de versículos
    const versiculos = [
        "1 Coríntios 13:4-7 - O amor é paciente, o amor é bondoso...",
        "Efésios 4:2 - Com toda humildade e mansidão, suportando-vos uns aos outros em amor.",
        "Colossenses 3:14 - Acima de tudo, porém, revistam-se do amor, que é o vínculo da perfeição.",
        "Gênesis 2:24 - Por isso, deixará o homem seu pai e sua mãe e se unirá à sua mulher.",
        "Romanos 12:10 - Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra."
    ];
    const versiculo = versiculos[Math.floor(Math.random() * versiculos.length)];
    
    // Data do casamento
    const dataCasamento = new Date().toLocaleString('pt-BR');
    const dataISO = new Date().toISOString();
    
    // Registra o casamento civil
    const casamentoId = Date.now().toString();
    casamentosDB[casamentoId] = {
        pessoa1: noivo,
        pessoa2: noiva,
        data: dataCasamento,
        dataISO: dataISO,
        ativo: true,
        tipo: 'igreja'
    };
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));
    
    // Registra o casamento na igreja
    igrejaDB[noivo] = {
        conjuge: noiva,
        data: dataCasamento,
        dataISO: dataISO,
        padre: padre,
        versiculo: versiculo,
        casado: true
    };
    igrejaDB[noiva] = {
        conjuge: noivo,
        data: dataCasamento,
        dataISO: dataISO,
        padre: padre,
        versiculo: versiculo,
        casado: true
    };
    fs.writeFileSync(igrejaPath, JSON.stringify(igrejaDB, null, 2));
    
    // Debita o custo
    coinsDB[noivo].coins -= custoCasamento;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    // Bônus de casamento na igreja
    const bonus = 2000;
    coinsDB[noivo].coins += bonus;
    coinsDB[noiva].coins = (coinsDB[noiva]?.coins || 500) + bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const casamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `⛪ *CASAMENTO NA IGREJA* ⛪\n\n` +
                         `🎉 *${padre} declara:*\n\n` +
                         `"Eu os declaro MARIDO e MULHER perante Deus e esta comunidade!"\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💍 *Casais:* @${nomeNoivo} e @${nomeNoiva}\n` +
                         `⛪ *Local:* Igreja Matriz\n` +
                         `🙏 *Padre:* ${padre}\n` +
                         `📖 *Versículo:* "${versiculo}"\n` +
                         `📅 *Data:* ${dataCasamento}\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💰 *Custo:* ${custoCasamento} N-Coins\n` +
                         `🎁 *Bônus divino:* +${bonus} N-Coins para cada!\n\n` +
                         `💕 *"Que Deus abençoe esta união!"* 💕\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: casamentoMsg, mentions: [noivo, noiva] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== VER CERTIDÃO DE CASAMENTO NA IGREJA ==========
case 'certidaoigreja':
case 'certidao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const igrejaPath = './DADOS DO KEISEN/usuarios/igreja.json';
    
    let igrejaDB = {};
    if (fs.existsSync(igrejaPath)) igrejaDB = JSON.parse(fs.readFileSync(igrejaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!igrejaDB[alvo] || !igrejaDB[alvo].casado) {
        return reply(`❌ @${nomeUser}, você não é casado(a) na igreja!\nUse \`!casarnaigreja @user\` para se casar.`);
    }

    const dados = igrejaDB[alvo];
    const conjuge = dados.conjuge.split('@')[0];
    
    const certidaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `📜 *CERTIDÃO DE CASAMENTO RELIGIOSO* 📜\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `👰 *Noivo:* @${nomeUser}\n` +
                        `🤵 *Noiva:* @${conjuge}\n` +
                        `⛪ *Local:* Igreja Matriz\n` +
                        `🙏 *Celebrante:* ${dados.padre}\n` +
                        `📖 *Versículo:* "${dados.versiculo}"\n` +
                        `📅 *Data do casamento:* ${dados.data}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `✅ *Registrado no Livro de Atas nº 001*\n` +
                        `📝 *Status:* CASADO(A) PERANTE A DEUS\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: certidaoMsg, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== DIVORCIAR NA IGREJA (ANULAR CASAMENTO) ==========
case 'divorcioigreja':
case 'anularcasamento': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const igrejaPath = './DADOS DO KEISEN/usuarios/igreja.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let igrejaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(igrejaPath)) igrejaDB = JSON.parse(fs.readFileSync(igrejaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!igrejaDB[usuario] || !igrejaDB[usuario].casado) {
        return reply(`❌ @${nomeUser}, você não é casado(a) na igreja!`);
    }

    const conjuge = igrejaDB[usuario].conjugue;
    const nomeConjuge = conjuge.split('@')[0];
    
    const custoAnulacao = 3000;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoAnulacao) {
        return reply(`❌ @${nomeUser}, a anulação do casamento custa ${custoAnulacao} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    // Remove do registro da igreja
    delete igrejaDB[usuario];
    delete igrejaDB[conjuge];
    fs.writeFileSync(igrejaPath, JSON.stringify(igrejaDB, null, 2));
    
    // Remove do casamento civil também
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === usuario || casamentosDB[id].pessoa2 === usuario) {
            delete casamentosDB[id];
            break;
        }
    }
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));
    
    coinsDB[usuario].coins -= custoAnulacao;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const anulacaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `⛪ *CASAMENTO ANULADO!* ⛪\n\n` +
                        `💔 @${nomeUser} e @${nomeConjuge} tiveram o casamento na igreja ANULADO!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💰 *Custo da anulação:* ${custoAnulacao} N-Coins\n` +
                        `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                        `📝 *Status:* Agora estão SOLTEIROS perante a igreja\n` +
                        `💪 Use \`!casarnaigreja @user\` para casar novamente\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: anulacaoMsg, mentions: [usuario, conjuge] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== CASAR NO CARTÓRIO (CIVIL) ==========
case 'casarcartorio':
case 'casamentocivil': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let casamentosDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let noivo = sender;
    let noiva = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    
    if (!noiva) return reply("❌ Uso: `!casarcartorio @usuario`");
    if (noivo === noiva) return reply("❌ Você não pode casar consigo mesmo(a)!");

    const nomeNoivo = noivo.split('@')[0];
    const nomeNoiva = noiva.split('@')[0];

    let jaCasado = false;
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === noivo || casamentosDB[id].pessoa2 === noivo) {
            jaCasado = true;
            break;
        }
        if (casamentosDB[id].pessoa1 === noiva || casamentosDB[id].pessoa2 === noiva) {
            return reply(`❌ @${nomeNoiva} já é casado(a)!`);
        }
    }
    if (jaCasado) return reply(`❌ @${nomeNoivo} você já é casado(a)! Use \`!divorciar\` primeiro.`);

    const custoCasamento = 1000;
    if (!coinsDB[noivo]) coinsDB[noivo] = { coins: 500 };
    if (coinsDB[noivo].coins < custoCasamento) {
        return reply(`❌ @${nomeNoivo}, o casamento no cartório custa ${custoCasamento} N-Coins. Você tem apenas ${coinsDB[noivo].coins} N-Coins.`);
    }

    const dataCasamento = new Date().toLocaleString('pt-BR');
    const casamentoId = Date.now().toString();
    casamentosDB[casamentoId] = {
        pessoa1: noivo,
        pessoa2: noiva,
        data: dataCasamento,
        dataISO: new Date().toISOString(),
        ativo: true,
        tipo: 'civil'
    };
    fs.writeFileSync(casamentoPath, JSON.stringify(casamentosDB, null, 2));
    
    coinsDB[noivo].coins -= custoCasamento;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const casamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `📄 *CASAMENTO CIVIL* 📄\n\n` +
                         `🎉 @${nomeNoivo} e @${nomeNoiva} se casaram no CARTÓRIO!\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💍 *Status:* CASADOS CIVILMENTE\n` +
                         `📅 *Data:* ${dataCasamento}\n` +
                         `💰 *Custo:* ${custoCasamento} N-Coins\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💕 *Para o casamento religioso, use \`!casarnaigreja @user\`* 💕\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: casamentoMsg, mentions: [noivo, noiva] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== VER STATUS COMPLETO (CIVIL + IGREJA) ==========
case 'statuscasamentocompleto':
case 'meucasamentocompleto': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const casamentoPath = './DADOS DO KEISEN/usuarios/casamentos.json';
    const igrejaPath = './DADOS DO KEISEN/usuarios/igreja.json';
    
    let casamentosDB = {};
    let igrejaDB = {};
    
    if (fs.existsSync(casamentoPath)) casamentosDB = JSON.parse(fs.readFileSync(casamentoPath));
    if (fs.existsSync(igrejaPath)) igrejaDB = JSON.parse(fs.readFileSync(igrejaPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    let statusCivil = '💔 Solteiro(a)';
    let conjugueCivil = '';
    let dataCivil = '';

    let statusIgreja = '❌ Não casado(a) na igreja';
    let conjugueIgreja = '';
    let dataIgreja = '';
    let padre = '';

    // Verifica casamento civil
    for (let id in casamentosDB) {
        if (casamentosDB[id].pessoa1 === alvo) {
            statusCivil = '💍 Casado(a) (Civil)';
            conjugueCivil = casamentosDB[id].pessoa2.split('@')[0];
            dataCivil = casamentosDB[id].data;
            break;
        } else if (casamentosDB[id].pessoa2 === alvo) {
            statusCivil = '💍 Casado(a) (Civil)';
            conjugueCivil = casamentosDB[id].pessoa1.split('@')[0];
            dataCivil = casamentosDB[id].data;
            break;
        }
    }

    // Verifica casamento na igreja
    if (igrejaDB[alvo] && igrejaDB[alvo].casado) {
        statusIgreja = '⛪ Casado(a) na Igreja';
        conjugueIgreja = igrejaDB[alvo].conjuge.split('@')[0];
        dataIgreja = igrejaDB[alvo].data;
        padre = igrejaDB[alvo].padre;
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `📜 *STATUS DE CASAMENTO COMPLETO* 📜\n\n`;
    texto += `👤 @${nomeUser}\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    texto += `📄 *CASAMENTO CIVIL:*\n`;
    texto += `   📊 Status: ${statusCivil}\n`;
    if (statusCivil !== '💔 Solteiro(a)') {
        texto += `   💑 Cônjuge: @${conjugueCivil}\n`;
        texto += `   📅 Data: ${dataCivil}\n`;
    }
    texto += `\n⛪ *CASAMENTO RELIGIOSO:*\n`;
    texto += `   📊 Status: ${statusIgreja}\n`;
    if (statusIgreja !== '❌ Não casado(a) na igreja') {
        texto += `   💑 Cônjuge: @${conjugueIgreja}\n`;
        texto += `   📅 Data: ${dataIgreja}\n`;
        texto += `   🙏 Padre: ${padre}\n`;
    }
    texto += `\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    texto += `💡 *COMANDOS DISPONÍVEIS:*\n`;
    texto += `   ⛪ \`!casarnaigreja @user\` - Casar na igreja\n`;
    texto += `   📄 \`!casarcartorio @user\` - Casar no cartório\n`;
    texto += `   📜 \`!certidaoigreja\` - Ver certidão religiosa\n`;
    texto += `   💔 \`!divorciar\` - Divórcio civil\n`;
    texto += `   ⛪ \`!divorcioigreja\` - Anular casamento religioso\n\n`;
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: texto, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== SISTEMA DE JUJUTSU KAISEN RPG ====================

// ==================== SISTEMA DE JUJUTSU KAISEN RPG COMPLETO ====================

// ========== LISTAR PERSONAGENS ==========
case 'listarpersonagens':
case 'personagens': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `⚡ *PERSONAGENS JUJUTSU KAISEN* ⚡\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `*FEITICEIROS:*\n\n` +
                  `🧊 \`gojo\` - Satoru Gojo (Especial)\n` +
                  `👊 \`itadori\` - Yuji Itadori (Grau 1)\n` +
                  `🐕 \`megumi\` - Megumi Fushiguro (Grau 2)\n` +
                  `🔨 \`nobara\` - Nobara Kugisaki (Grau 3)\n` +
                  `⚔️ \`yuta\` - Yuta Okkotsu (Especial)\n` +
                  `🗡️ \`maki\` - Maki Zenin (Grau 1)\n` +
                  `🔪 \`toji\` - Toji Fushiguro (Especial)\n` +
                  `🌀 \`geto\` - Suguru Geto (Especial)\n` +
                  `⌚ \`nanami\` - Kento Nanami (Grau 1)\n` +
                  `✋ \`todo\` - Aoi Todo (Grau 1)\n` +
                  `🐦 \`mei\` - Mei Mei (Grau 1)\n` +
                  `🎰 \`hakari\` - Kinji Hakari (Grau 1)\n` +
                  `⭐ \`kirara\` - Kirara Hoshi (Grau 2)\n` +
                  `🍣 \`inumaki\` - Toge Inumaki (Grau 2)\n` +
                  `🐼 \`panda\` - Panda (Grau 2)\n\n` +
                  `*MALDIÇÕES:*\n\n` +
                  `👹 \`sukuna\` - Ryomen Sukuna (Especial)\n` +
                  `🔥 \`jogo\` - Jogo (Especial)\n` +
                  `🌿 \`hanami\` - Hanami (Especial)\n` +
                  `💧 \`dagon\` - Dagon (Especial)\n` +
                  `🫀 \`mahito\` - Mahito (Especial)\n` +
                  `🧠 \`kenjaku\` - Kenjaku (Especial)\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 Use \`!escolherpersonagem <nome>\` para escolher seu personagem!\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ESCOLHER PERSONAGEM ==========
case 'escolherpersonagem':
case 'personagemjujutsu': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const personagem = args[0]?.toLowerCase();
    
    const personagensDisponiveis = {
        'gojo': { nome: 'Satoru Gojo', tipo: 'feiticeiro', cla: 'Gojo', tecnica: 'Infinito / Seis Olhos', rank: 'Especial', emoji: '🧊', bonus: 10000, atk: 95, def: 90, hp: 850 },
        'itadori': { nome: 'Yuji Itadori', tipo: 'feiticeiro', cla: 'Itadori', tecnica: 'Força Sobre-humana', rank: 'Grau 1', emoji: '👊', bonus: 5000, atk: 85, def: 75, hp: 800 },
        'megumi': { nome: 'Megumi Fushiguro', tipo: 'feiticeiro', cla: 'Zenin', tecnica: '10 Sombras', rank: 'Grau 2', emoji: '🐕', bonus: 4500, atk: 80, def: 70, hp: 750 },
        'nobara': { nome: 'Nobara Kugisaki', tipo: 'feiticeiro', cla: 'Kugisaki', tecnica: 'Palha e Martelo', rank: 'Grau 3', emoji: '🔨', bonus: 3500, atk: 75, def: 65, hp: 700 },
        'yuta': { nome: 'Yuta Okkotsu', tipo: 'feiticeiro', cla: 'Gojo', tecnica: 'Rika / Cópia', rank: 'Especial', emoji: '⚔️', bonus: 9000, atk: 90, def: 85, hp: 820 },
        'maki': { nome: 'Maki Zenin', tipo: 'feiticeiro', cla: 'Zenin', tecnica: 'Força Física', rank: 'Grau 1', emoji: '🗡️', bonus: 5500, atk: 88, def: 72, hp: 780 },
        'toji': { nome: 'Toji Fushiguro', tipo: 'feiticeiro', cla: 'Zenin', tecnica: 'Força Sobre-humana', rank: 'Especial', emoji: '🔪', bonus: 8000, atk: 92, def: 80, hp: 800 },
        'geto': { nome: 'Suguru Geto', tipo: 'feiticeiro', cla: 'Geto', tecnica: 'Manipulação de Maldições', rank: 'Especial', emoji: '🌀', bonus: 7500, atk: 85, def: 78, hp: 790 },
        'nanami': { nome: 'Kento Nanami', tipo: 'feiticeiro', cla: 'Nanami', tecnica: 'Rácio 7:3', rank: 'Grau 1', emoji: '⌚', bonus: 5000, atk: 82, def: 75, hp: 760 },
        'todo': { nome: 'Aoi Todo', tipo: 'feiticeiro', cla: 'Todo', tecnica: 'Boogie Woogie', rank: 'Grau 1', emoji: '✋', bonus: 4800, atk: 83, def: 73, hp: 770 },
        'mei': { nome: 'Mei Mei', tipo: 'feiticeiro', cla: 'Mei', tecnica: 'Corvos', rank: 'Grau 1', emoji: '🐦', bonus: 4700, atk: 80, def: 70, hp: 740 },
        'hakari': { nome: 'Kinji Hakari', tipo: 'feiticeiro', cla: 'Hakari', tecnica: 'Pachinko', rank: 'Grau 1', emoji: '🎰', bonus: 5200, atk: 84, def: 74, hp: 780 },
        'kirara': { nome: 'Kirara Hoshi', tipo: 'feiticeiro', cla: 'Kirara', tecnica: 'Estrela', rank: 'Grau 2', emoji: '⭐', bonus: 4000, atk: 72, def: 68, hp: 720 },
        'inumaki': { nome: 'Toge Inumaki', tipo: 'feiticeiro', cla: 'Inumaki', tecnica: 'Fala Amaldiçoada', rank: 'Grau 2', emoji: '🍣', bonus: 4200, atk: 78, def: 65, hp: 710 },
        'panda': { nome: 'Panda', tipo: 'feiticeiro', cla: 'Panda', tecnica: 'Núcleos', rank: 'Grau 2', emoji: '🐼', bonus: 4000, atk: 76, def: 70, hp: 750 },
        'sukuna': { nome: 'Ryomen Sukuna', tipo: 'maldicao', cla: 'Sukuna', tecnica: 'Corte / Cleave', rank: 'Especial', emoji: '👹', bonus: 15000, atk: 100, def: 95, hp: 900 },
        'jogo': { nome: 'Jogo', tipo: 'maldicao', cla: 'Disaster', tecnica: 'Fogo', rank: 'Especial', emoji: '🔥', bonus: 12000, atk: 92, def: 82, hp: 850 },
        'hanami': { nome: 'Hanami', tipo: 'maldicao', cla: 'Disaster', tecnica: 'Plantas', rank: 'Especial', emoji: '🌿', bonus: 11000, atk: 85, def: 88, hp: 880 },
        'dagon': { nome: 'Dagon', tipo: 'maldicao', cla: 'Disaster', tecnica: 'Água', rank: 'Especial', emoji: '💧', bonus: 10000, atk: 82, def: 85, hp: 860 },
        'mahito': { nome: 'Mahito', tipo: 'maldicao', cla: 'Disaster', tecnica: 'Manipulação da Alma', rank: 'Especial', emoji: '🫀', bonus: 13000, atk: 90, def: 80, hp: 840 },
        'kenjaku': { nome: 'Kenjaku', tipo: 'maldicao', cla: 'Kenjaku', tecnica: 'Manipulação de Corpos', rank: 'Especial', emoji: '🧠', bonus: 14000, atk: 88, def: 84, hp: 830 }
    };

    if (!personagem || !personagensDisponiveis[personagem]) {
        return reply(`❌ Personagem não encontrado!\nUse \`!listarpersonagens\` para ver todos os personagens disponíveis.`);
    }

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const escolhido = personagensDisponiveis[personagem];

    if (jujutsuDB[usuario]) {
        return reply(`❌ @${nomeUser}, você já escolheu um personagem!\nUse \`!perfiljujutsu\` para ver seu personagem.`);
    }

    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    coinsDB[usuario].coins += escolhido.bonus;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    jujutsuDB[usuario] = {
        personagem: personagem,
        nomePersonagem: escolhido.nome,
        tipo: escolhido.tipo,
        cla: escolhido.cla,
        tecnica: escolhido.tecnica,
        rank: escolhido.rank,
        nivel: 1,
        exp: 0,
        expNecessaria: 100,
        energiaAmaldicoada: 100,
        hp: escolhido.hp,
        hpMax: escolhido.hp,
        atk: escolhido.atk,
        def: escolhido.def,
        vitorias: 0,
        derrotas: 0,
        dataIngresso: new Date().toLocaleString('pt-BR')
    };
    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));

    const claMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                   `⚡ *PERSONAGEM SELECIONADO!* ⚡\n\n` +
                   `🎌 @${nomeUser} agora é ${escolhido.nome}!\n\n` +
                   `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                   `🏮 *Personagem:* ${escolhido.emoji} ${escolhido.nome}\n` +
                   `📊 *Tipo:* ${escolhido.tipo === 'feiticeiro' ? '⚜️ Feiticeiro' : '👹 Maldição'}\n` +
                   `🌀 *Clã:* ${escolhido.cla}\n` +
                   `⚔️ *Técnica:* ${escolhido.tecnica}\n` +
                   `🎖️ *Rank:* ${escolhido.rank}\n` +
                   `⚔️ *ATK:* ${escolhido.atk} | 🛡️ *DEF:* ${escolhido.def} | ❤️ *HP:* ${escolhido.hp}\n` +
                   `🎁 *Bônus:* +${escolhido.bonus} N-Coins\n\n` +
                   `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                   `⚔️ Use \`!perfiljujutsu\` para ver seus status!\n` +
                   `🎯 Use \`!missoesjujutsu\` para começar suas missões!\n\n` +
                   `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: claMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PERFIL JUJUTSU ==========
case 'perfiljujutsu':
case 'meuperfiljujutsu': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : sender;
    const nomeUser = alvo.split('@')[0];

    if (!jujutsuDB[alvo]) {
        return reply(`❌ @${nomeUser}, você não tem um personagem Jujutsu!\nUse \`!escolherpersonagem <nome>\` para escolher.`);
    }

    const dados = jujutsuDB[alvo];
    const saldo = coinsDB[alvo]?.coins || 0;
    
    const rankEmoji = { 'Especial': '💀', 'Grau 1': '🥇', 'Grau 2': '🥈', 'Grau 3': '🥉', 'Grau 4': '🌱' };
    const tipoEmoji = dados.tipo === 'feiticeiro' ? '⚜️' : '👹';
    const progresso = Math.floor((dados.exp / dados.expNecessaria) * 100);
    const hpPercent = Math.floor((dados.hp / dados.hpMax) * 100);
    
    const personagensEmoji = {
        'gojo': '🧊', 'itadori': '👊', 'megumi': '🐕', 'nobara': '🔨', 'yuta': '⚔️',
        'maki': '🗡️', 'toji': '🔪', 'geto': '🌀', 'nanami': '⌚', 'todo': '✋',
        'sukuna': '👹', 'jogo': '🔥', 'mahito': '🫀', 'kenjaku': '🧠'
    };
    const emojiPersonagem = personagensEmoji[dados.personagem] || '⚡';
    
    const perfilMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `⚡ *PERFIL JUJUTSU KAISEN* ⚡\n\n` +
                      `👤 *Jogador:* @${nomeUser}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `🎭 *Personagem:* ${emojiPersonagem} ${dados.nomePersonagem}\n` +
                      `${tipoEmoji} *Tipo:* ${dados.tipo === 'feiticeiro' ? 'Feiticeiro' : 'Maldição'}\n` +
                      `🏮 *Clã:* ${dados.cla}\n` +
                      `🌀 *Técnica:* ${dados.tecnica}\n` +
                      `🎖️ *Rank:* ${rankEmoji[dados.rank] || '⚡'} ${dados.rank}\n` +
                      `📈 *Nível:* ${dados.nivel}\n` +
                      `✨ *EXP:* ${dados.exp}/${dados.expNecessaria} (${progresso}%)\n` +
                      `⚡ *Energia Amaldiçoada:* ${dados.energiaAmaldicoada}/100\n` +
                      `❤️ *HP:* ${dados.hp}/${dados.hpMax} (${hpPercent}%)\n` +
                      `⚔️ *ATK:* ${dados.atk} | 🛡️ *DEF:* ${dados.def}\n` +
                      `🏆 *Vitórias:* ${dados.vitorias} | 💀 *Derrotas:* ${dados.derrotas}\n` +
                      `💰 *N-Coins:* ${saldo.toLocaleString()}\n` +
                      `📅 *Ingresso:* ${dados.dataIngresso}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `⚔️ *COMANDOS:*\n` +
                      `   📋 \`!missoesjujutsu\` - Ver missões\n` +
                      `   🎯 \`!aceitarmissao <id>\` - Aceitar missão\n` +
                      `   🔮 \`!treinarjujutsu\` - Treinar técnica\n` +
                      `   ⚔️ \`!batalhar\` - Batalhar contra maldição\n` +
                      `   🏆 \`!rankjujutsu\` - Ranking dos feiticeiros\n` +
                      `   💊 \`!curar\` - Curar HP\n` +
                      `   🛒 \`!lojajujutsu\` - Comprar itens\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: perfilMsg, mentions: [alvo] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== MISSÕES JUJUTSU ==========
case 'aceitarmissao':
case 'aceitar_missao': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const missaoId = parseInt(args[0]);

    if (!jujutsuDB[usuario]) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *ERRO* ❌\n\n` +
                        `@${nomeUser}, você não tem um personagem Jujutsu!\n\n` +
                        `💡 Use \`!escolherpersonagem <nome>\` primeiro.\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    if (!missaoId || isNaN(missaoId)) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *USO INCORRETO* ❌\n\n` +
                        `Uso correto: \`!aceitarmissao <id>\`\n` +
                        `Exemplo: \`!aceitarmissao 1\`\n\n` +
                        `📋 Use \`!missoesjujutsu\` para ver os IDs disponíveis.\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    const missoes = {
        1: { nome: "🌑 Exorcizar Maldição Nível D", rank: "Grau 4", inimigo: "👹 Maldição Grau D", exp: 50, coins: 500, energia: 10 },
        2: { nome: "🌒 Exorcizar Maldição Nível C", rank: "Grau 3", inimigo: "👹 Maldição Grau C", exp: 100, coins: 1000, energia: 20 },
        3: { nome: "🌓 Exorcizar Maldição Nível B", rank: "Grau 2", inimigo: "👹 Maldição Grau B", exp: 200, coins: 2000, energia: 30 },
        4: { nome: "🌔 Exorcizar Maldição Nível A", rank: "Grau 1", inimigo: "👹 Maldição Grau A", exp: 400, coins: 4000, energia: 50 },
        5: { nome: "🌕 Enfrentar Maldição Especial", rank: "Especial", inimigo: "💀 Maldição Especial", exp: 800, coins: 8000, energia: 80 },
        6: { nome: "🛡️ Proteger Cidade", rank: "Grau 2", inimigo: "👹 Maldições Menores", exp: 150, coins: 1500, energia: 25 },
        7: { nome: "🔍 Resgatar Reféns", rank: "Grau 1", inimigo: "👹 Maldição de Grupo", exp: 300, coins: 3000, energia: 40 },
        8: { nome: "⚡ Enfrentar Sukuna", rank: "Especial", inimigo: "👑 Sukuna Fragmento", exp: 1000, coins: 10000, energia: 100 }
    };

    const missao = missoes[missaoId];
    if (!missao) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *MISSÃO INVÁLIDA* ❌\n\n` +
                        `IDs disponíveis: 1, 2, 3, 4, 5, 6, 7, 8\n\n` +
                        `📋 Use \`!missoesjujutsu\` para ver os detalhes.\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    if (jujutsuDB[usuario].energiaAmaldicoada < missao.energia) {
        const energiaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                           `⚡ *ENERGIA INSUFICIENTE* ⚡\n\n` +
                           `@${nomeUser}, você não tem energia para esta missão!\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `🔋 *Energia atual:* ${jujutsuDB[usuario].energiaAmaldicoada}/100\n` +
                           `⚡ *Energia necessária:* ${missao.energia}\n\n` +
                           `💪 Use \`!treinarjujutsu\` para recuperar energia.\n\n` +
                           `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(energiaMsg);
    }

    // ========== SIMULA BATALHA ==========
    const chanceSucesso = 0.6 + (jujutsuDB[usuario].nivel * 0.01);
    const sucesso = Math.random() < chanceSucesso;
    
    let expGanha = missao.exp;
    let coinsGanha = missao.coins;
    let resultadoMsg = '';
    let coracao = '';
    
    if (sucesso) {
        jujutsuDB[usuario].vitorias = (jujutsuDB[usuario].vitorias || 0) + 1;
        jujutsuDB[usuario].energiaAmaldicoada -= missao.energia;
        jujutsuDB[usuario].exp += expGanha;
        
        if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
        coinsDB[usuario].coins += coinsGanha;
        
        resultadoMsg = `🎉 *VITÓRIA!* 🎉\n`;
        resultadoMsg += `⚔️ @${nomeUser} derrotou ${missao.inimigo}!\n`;
        coracao = '💪✨';
    } else {
        jujutsuDB[usuario].derrotas = (jujutsuDB[usuario].derrotas || 0) + 1;
        jujutsuDB[usuario].energiaAmaldicoada -= Math.floor(missao.energia / 2);
        expGanha = Math.floor(missao.exp / 2);
        coinsGanha = Math.floor(missao.coins / 2);
        jujutsuDB[usuario].exp += expGanha;
        jujutsuDB[usuario].hp = Math.max(1, (jujutsuDB[usuario].hp || 100) - 50);
        
        if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
        coinsDB[usuario].coins += coinsGanha;
        
        resultadoMsg = `💀 *DERROTA!* 💀\n`;
        resultadoMsg += `😢 @${nomeUser} foi ferido por ${missao.inimigo}!\n`;
        coracao = '💔😭';
    }

    // Verifica subida de nível
    let subiuNivel = false;
    let novoNivel = jujutsuDB[usuario].nivel;
    let novoRank = jujutsuDB[usuario].rank;
    
    while (jujutsuDB[usuario].exp >= (jujutsuDB[usuario].expNecessaria || 100)) {
        subiuNivel = true;
        jujutsuDB[usuario].exp -= jujutsuDB[usuario].expNecessaria;
        jujutsuDB[usuario].nivel = (jujutsuDB[usuario].nivel || 1) + 1;
        jujutsuDB[usuario].expNecessaria = Math.floor((jujutsuDB[usuario].expNecessaria || 100) * 1.2);
        jujutsuDB[usuario].hpMax = (jujutsuDB[usuario].hpMax || 100) + 20;
        jujutsuDB[usuario].hp = jujutsuDB[usuario].hpMax;
        jujutsuDB[usuario].atk = (jujutsuDB[usuario].atk || 50) + 5;
        jujutsuDB[usuario].def = (jujutsuDB[usuario].def || 40) + 3;
        
        novoNivel = jujutsuDB[usuario].nivel;
        if (novoNivel >= 50) novoRank = 'Especial';
        else if (novoNivel >= 30) novoRank = 'Grau 1';
        else if (novoNivel >= 15) novoRank = 'Grau 2';
        else if (novoNivel >= 5) novoRank = 'Grau 3';
        else novoRank = 'Grau 4';
        
        jujutsuDB[usuario].rank = novoRank;
    }

    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    // ========== CONSTRÓI MENSAGEM COM DESIGN ==========
    let finalMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    finalMsg += `⚔️ *MISSÃO: ${missao.nome}* ⚔️\n\n`;
    finalMsg += `${resultadoMsg}\n`;
    finalMsg += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    finalMsg += `📊 *RESULTADO DA BATALHA* 📊\n\n`;
    finalMsg += `✨ *EXP Ganha:* +${expGanha}\n`;
    finalMsg += `💰 *Coins Ganhos:* +${coinsGanha.toLocaleString()}\n`;
    finalMsg += `⚡ *Energia Restante:* ${jujutsuDB[usuario].energiaAmaldicoada}/100\n`;
    finalMsg += `❤️ *HP Restante:* ${jujutsuDB[usuario].hp}/${jujutsuDB[usuario].hpMax || 100}\n`;
    finalMsg += `${coracao}\n`;

    if (subiuNivel) {
        finalMsg += `\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`;
        finalMsg += `🎊 *SUBIDA DE NÍVEL!* 🎊\n\n`;
        finalMsg += `📈 *Novo Nível:* ${novoNivel}\n`;
        finalMsg += `🎖️ *Novo Rank:* ${novoRank}\n`;
        finalMsg += `❤️ *HP Max:* +20\n`;
        finalMsg += `⚔️ *ATK:* +5 | 🛡️ *DEF:* +3\n`;
        finalMsg += `🎉 *Parabéns, feiticeiro!* 🎉\n`;
    }

    finalMsg += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: finalMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== TREINAR JUJUTSU ==========
case 'treinarjujutsu':
case 'treinar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!jujutsuDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem um personagem Jujutsu!`);
    }

    const custoTreino = 200;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoTreino) {
        return reply(`❌ @${nomeUser}, treinar custa ${custoTreino} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    const energiaRecuperada = Math.min(100, jujutsuDB[usuario].energiaAmaldicoada + 40);
    const ganhoExp = 30 + Math.floor(Math.random() * 40);
    const ganhoAtk = Math.random() < 0.3 ? 1 : 0;
    const ganhoDef = Math.random() < 0.3 ? 1 : 0;

    jujutsuDB[usuario].energiaAmaldicoada = energiaRecuperada;
    jujutsuDB[usuario].exp += ganhoExp;
    if (ganhoAtk) jujutsuDB[usuario].atk += ganhoAtk;
    if (ganhoDef) jujutsuDB[usuario].def += ganhoDef;
    coinsDB[usuario].coins -= custoTreino;

    // Verifica subida de nível
    while (jujutsuDB[usuario].exp >= jujutsuDB[usuario].expNecessaria) {
        jujutsuDB[usuario].exp -= jujutsuDB[usuario].expNecessaria;
        jujutsuDB[usuario].nivel++;
        jujutsuDB[usuario].expNecessaria = Math.floor(jujutsuDB[usuario].expNecessaria * 1.2);
        jujutsuDB[usuario].hpMax += 20;
        jujutsuDB[usuario].hp = jujutsuDB[usuario].hpMax;
        jujutsuDB[usuario].atk += 5;
        jujutsuDB[usuario].def += 3;
        
        if (jujutsuDB[usuario].nivel >= 50) jujutsuDB[usuario].rank = 'Especial';
        else if (jujutsuDB[usuario].nivel >= 30) jujutsuDB[usuario].rank = 'Grau 1';
        else if (jujutsuDB[usuario].nivel >= 15) jujutsuDB[usuario].rank = 'Grau 2';
        else if (jujutsuDB[usuario].nivel >= 5) jujutsuDB[usuario].rank = 'Grau 3';
        else jujutsuDB[usuario].rank = 'Grau 4';
    }

    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));

    let bonusMsg = '';
    if (ganhoAtk) bonusMsg += `\n   ⚔️ ATK aumentou em +1!`;
    if (ganhoDef) bonusMsg += `\n   🛡️ DEF aumentou em +1!`;

    const treinoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🔮 *TREINAMENTO COMPLETADO!* 🔮\n\n` +
                      `💪 @${nomeUser} treinou sua técnica amaldiçoada!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `⚡ *Energia:* +40 (agora ${jujutsuDB[usuario].energiaAmaldicoada}/100)\n` +
                      `✨ *EXP:* +${ganhoExp}\n` +
                      `💸 *Custo:* -${custoTreino} N-Coins${bonusMsg}\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: treinoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== BATALHAR CONTRA MALDIÇÃO ==========
case 'batalhar':
case 'batalhajujutsu':
case 'lutar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    // ========== VERIFICA SE TEM PERSONAGEM ==========
    if (!jujutsuDB[usuario]) {
        const erroMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `❌ *SEM PERSONAGEM* ❌\n\n` +
                        `@${nomeUser}, você não possui um personagem Jujutsu!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💡 Use \`!escolherpersonagem <nome>\` para escolher seu personagem.\n` +
                        `📋 Use \`!listarpersonagens\` para ver os personagens disponíveis.\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(erroMsg);
    }

    // ========== VERIFICA ENERGIA ==========
    if (jujutsuDB[usuario].energiaAmaldicoada < 15) {
        const energiaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                           `⚡ *ENERGIA INSUFICIENTE* ⚡\n\n` +
                           `@${nomeUser}, você não tem energia para batalhar!\n\n` +
                           `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                           `🔋 *Energia atual:* ${jujutsuDB[usuario].energiaAmaldicoada}/100\n` +
                           `⚡ *Energia necessária:* 15\n\n` +
                           `💪 Use \`!treinarjujutsu\` para recuperar energia.\n\n` +
                           `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(energiaMsg);
    }

    // ========== VERIFICA HP ==========
    if (jujutsuDB[usuario].hp <= 0) {
        const hpMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💀 *DERROTADO* 💀\n\n` +
                      `@${nomeUser}, você está derrotado e não pode batalhar!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `❤️ *HP atual:* 0/${jujutsuDB[usuario].hpMax}\n\n` +
                      `💊 Use \`!curar\` para recuperar seus pontos de vida.\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
        return reply(hpMsg);
    }

    // ========== INIMIGOS ALEATÓRIOS ==========
    const inimigos = [
        { nome: "👹 Maldição Grau D", rank: "Grau 4", hp: 50, atk: 10, def: 5, exp: 30, coins: 300, energia: 15 },
        { nome: "👹 Maldição Grau C", rank: "Grau 3", hp: 80, atk: 20, def: 10, exp: 60, coins: 600, energia: 20 },
        { nome: "👹 Maldição Grau B", rank: "Grau 2", hp: 120, atk: 35, def: 20, exp: 100, coins: 1000, energia: 25 },
        { nome: "👹 Maldição Grau A", rank: "Grau 1", hp: 180, atk: 50, def: 35, exp: 150, coins: 1500, energia: 30 },
        { nome: "💀 Maldição Especial", rank: "Especial", hp: 300, atk: 80, def: 60, exp: 300, coins: 3000, energia: 40 },
        { nome: "🔥 Jogo (Clone)", rank: "Especial", hp: 250, atk: 70, def: 50, exp: 250, coins: 2500, energia: 35 },
        { nome: "🫀 Mahito (Clone)", rank: "Especial", hp: 280, atk: 75, def: 55, exp: 280, coins: 2800, energia: 38 },
        { nome: "👑 Sukuna (Fragmento)", rank: "Especial", hp: 400, atk: 100, def: 80, exp: 500, coins: 5000, energia: 50 }
    ];

    // Seleciona inimigo baseado no rank do jogador
    let inimigosDisponiveis = [];
    const rankAtual = jujutsuDB[usuario].rank;
    const rankValores = { 'Grau 4': 0, 'Grau 3': 1, 'Grau 2': 2, 'Grau 1': 3, 'Especial': 4 };
    const rankIndex = rankValores[rankAtual] || 0;
    
    for (let i = 0; i <= rankIndex + 1; i++) {
        if (inimigos[i]) inimigosDisponiveis.push(inimigos[i]);
    }
    
    const inimigo = inimigosDisponiveis[Math.floor(Math.random() * inimigosDisponiveis.length)];
    
    // ========== SIMULA BATALHA ==========
    let jogadorHp = jujutsuDB[usuario].hp;
    let inimigoHp = inimigo.hp;
    let rodadas = 0;
    let venceu = false;
    let historico = [];
    
    while (jogadorHp > 0 && inimigoHp > 0 && rodadas < 20) {
        rodadas++;
        const danoJogador = Math.max(1, (jujutsuDB[usuario].atk || 50) - inimigo.def + Math.floor(Math.random() * 20));
        const danoInimigo = Math.max(1, inimigo.atk - (jujutsuDB[usuario].def || 40) + Math.floor(Math.random() * 15));
        
        inimigoHp -= danoJogador;
        historico.push(`Rodada ${rodadas}: Você causou ${danoJogador} de dano!`);
        
        if (inimigoHp <= 0) {
            venceu = true;
            break;
        }
        
        jogadorHp -= danoInimigo;
        historico.push(`Rodada ${rodadas}: ${inimigo.nome} causou ${danoInimigo} de dano!`);
    }
    
    if (jogadorHp <= 0) venceu = false;
    
    let expGanha = inimigo.exp;
    let coinsGanha = inimigo.coins;
    let resultadoMsg = '';
    let coracao = '';
    
    if (venceu) {
        jujutsuDB[usuario].vitorias = (jujutsuDB[usuario].vitorias || 0) + 1;
        jujutsuDB[usuario].energiaAmaldicoada -= inimigo.energia;
        jujutsuDB[usuario].exp += expGanha;
        jujutsuDB[usuario].hp = jogadorHp;
        
        if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
        coinsDB[usuario].coins += coinsGanha;
        
        resultadoMsg = `🎉 *VITÓRIA!* 🎉\n`;
        resultadoMsg += `⚔️ @${nomeUser} derrotou ${inimigo.nome} em ${rodadas} rodadas!\n`;
        coracao = '💪✨🏆';
    } else {
        jujutsuDB[usuario].derrotas = (jujutsuDB[usuario].derrotas || 0) + 1;
        jujutsuDB[usuario].energiaAmaldicoada -= Math.floor(inimigo.energia / 2);
        expGanha = Math.floor(inimigo.exp / 2);
        coinsGanha = Math.floor(inimigo.coins / 2);
        jujutsuDB[usuario].exp += expGanha;
        jujutsuDB[usuario].hp = Math.max(1, jogadorHp);
        
        if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
        coinsDB[usuario].coins += coinsGanha;
        
        resultadoMsg = `💀 *DERROTA!* 💀\n`;
        resultadoMsg += `😢 @${nomeUser} foi derrotado por ${inimigo.nome}!\n`;
        coracao = '💔😭🪦';
    }
    
    // Verifica subida de nível
    let subiuNivel = false;
    let novoNivel = jujutsuDB[usuario].nivel;
    let novoRank = jujutsuDB[usuario].rank;
    
    while (jujutsuDB[usuario].exp >= (jujutsuDB[usuario].expNecessaria || 100)) {
        subiuNivel = true;
        jujutsuDB[usuario].exp -= jujutsuDB[usuario].expNecessaria;
        jujutsuDB[usuario].nivel = (jujutsuDB[usuario].nivel || 1) + 1;
        jujutsuDB[usuario].expNecessaria = Math.floor((jujutsuDB[usuario].expNecessaria || 100) * 1.2);
        jujutsuDB[usuario].hpMax = (jujutsuDB[usuario].hpMax || 100) + 20;
        jujutsuDB[usuario].hp = jujutsuDB[usuario].hpMax;
        jujutsuDB[usuario].atk = (jujutsuDB[usuario].atk || 50) + 5;
        jujutsuDB[usuario].def = (jujutsuDB[usuario].def || 40) + 3;
        
        novoNivel = jujutsuDB[usuario].nivel;
        if (novoNivel >= 50) novoRank = 'Especial';
        else if (novoNivel >= 30) novoRank = 'Grau 1';
        else if (novoNivel >= 15) novoRank = 'Grau 2';
        else if (novoNivel >= 5) novoRank = 'Grau 3';
        else novoRank = 'Grau 4';
        
        jujutsuDB[usuario].rank = novoRank;
    }
    
    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    // ========== CONSTRÓI MENSAGEM COM DESIGN ==========
    let finalMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    finalMsg += `⚔️ *BATALHA JUJUTSU* ⚔️\n\n`;
    finalMsg += `👤 *Feiticeiro:* @${nomeUser}\n`;
    finalMsg += `🎭 *Personagem:* ${jujutsuDB[usuario].nomePersonagem}\n`;
    finalMsg += `👹 *Inimigo:* ${inimigo.nome} (${inimigo.rank})\n\n`;
    finalMsg += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    finalMsg += `${resultadoMsg}\n`;
    finalMsg += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    finalMsg += `📊 *RESULTADO DA BATALHA* 📊\n\n`;
    finalMsg += `✨ *EXP Ganha:* +${expGanha}\n`;
    finalMsg += `💰 *Coins Ganhos:* +${coinsGanha.toLocaleString()}\n`;
    finalMsg += `⚡ *Energia:* ${jujutsuDB[usuario].energiaAmaldicoada}/100\n`;
    finalMsg += `❤️ *HP:* ${jujutsuDB[usuario].hp}/${jujutsuDB[usuario].hpMax}\n`;
    finalMsg += `${coracao}\n`;
    
    if (subiuNivel) {
        finalMsg += `\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`;
        finalMsg += `🎊 *SUBIDA DE NÍVEL!* 🎊\n\n`;
        finalMsg += `📈 *Novo Nível:* ${novoNivel}\n`;
        finalMsg += `🎖️ *Novo Rank:* ${novoRank}\n`;
        finalMsg += `❤️ *HP Max:* +20\n`;
        finalMsg += `⚔️ *ATK:* +5 | 🛡️ *DEF:* +3\n`;
        finalMsg += `🎉 *Parabéns, feiticeiro!* 🎉\n`;
    }
    
    finalMsg += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: finalMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
// ========== CURAR HP ==========
case 'curar':
case 'curarjujutsu': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!jujutsuDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem um personagem Jujutsu!`);
    }

    if (jujutsuDB[usuario].hp >= jujutsuDB[usuario].hpMax) {
        return reply(`❌ @${nomeUser}, seu HP já está cheio! (${jujutsuDB[usuario].hp}/${jujutsuDB[usuario].hpMax})`);
    }

    const custoCura = 300;
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoCura) {
        return reply(`❌ @${nomeUser}, curar custa ${custoCura} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    const cura = Math.min(jujutsuDB[usuario].hpMax, jujutsuDB[usuario].hp + 100);
    jujutsuDB[usuario].hp = cura;
    coinsDB[usuario].coins -= custoCura;
    
    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const curaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                    `💊 *CURA REALIZADA!* 💊\n\n` +
                    `💪 @${nomeUser} foi curado!\n\n` +
                    `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                    `❤️ *HP Restaurado:* ${jujutsuDB[usuario].hp}/${jujutsuDB[usuario].hpMax}\n` +
                    `💰 *Custo:* -${custoCura} N-Coins\n\n` +
                    `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: curaMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== LOJA JUJUTSU ==========
case 'lojajujutsu':
case 'loja': {
    if (!isGroup) return reply(mess.onlyGroup());

    const texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                  `🛒 *LOJA JUJUTSU* 🛒\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💊 \`!compraritem pocao 500\` - Poção de Cura (500) - Restaura 50 HP\n` +
                  `⚡ \`!compraritem energia 800\` - Poção de Energia (800) - Restaura 30 Energia\n` +
                  `📚 \`!compraritem livro 1500\` - Livro de Treino (1500) - Ganha 100 EXP\n` +
                  `🍖 \`!compraritem comida 300\` - Comida Amaldiçoada (300) - Restaura 20 HP e 10 Energia\n` +
                  `💎 \`!compraritem amuleto 5000\` - Amuleto Sagrado (5000) - Aumenta ATK permanentemente\n\n` +
                  `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                  `💡 Use \`!compraritem <item> <quantidade>\` para comprar!\n` +
                  `Exemplo: \`!compraritem pocao 2\`\n\n` +
                  `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: texto }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== COMPRAR ITEM ==========
case 'compraritem': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let jujutsuDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    const item = args[0]?.toLowerCase();
    const quantidade = parseInt(args[1]) || 1;

    if (!jujutsuDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem um personagem Jujutsu!`);
    }

    const itens = {
        pocao: { nome: "Poção de Cura", preco: 500, efeito: { hp: 50 } },
        energia: { nome: "Poção de Energia", preco: 800, efeito: { energia: 30 } },
        livro: { nome: "Livro de Treino", preco: 1500, efeito: { exp: 100 } },
        comida: { nome: "Comida Amaldiçoada", preco: 300, efeito: { hp: 20, energia: 10 } },
        amuleto: { nome: "Amuleto Sagrado", preco: 5000, efeito: { atk: 5 } }
    };

    if (!itens[item]) {
        return reply(`❌ Item inválido! Use \`!lojajujutsu\` para ver os itens disponíveis.`);
    }

    const itemInfo = itens[item];
    const custoTotal = itemInfo.preco * quantidade;
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 500 };
    if (coinsDB[usuario].coins < custoTotal) {
        return reply(`❌ @${nomeUser}, você precisa de ${custoTotal} N-Coins. Você tem apenas ${coinsDB[usuario].coins} N-Coins.`);
    }

    coinsDB[usuario].coins -= custoTotal;
    
    if (itemInfo.efeito.hp) {
        jujutsuDB[usuario].hp = Math.min(jujutsuDB[usuario].hpMax, jujutsuDB[usuario].hp + (itemInfo.efeito.hp * quantidade));
    }
    if (itemInfo.efeito.energia) {
        jujutsuDB[usuario].energiaAmaldicoada = Math.min(100, jujutsuDB[usuario].energiaAmaldicoada + (itemInfo.efeito.energia * quantidade));
    }
    if (itemInfo.efeito.exp) {
        jujutsuDB[usuario].exp += itemInfo.efeito.exp * quantidade;
    }
    if (itemInfo.efeito.atk) {
        jujutsuDB[usuario].atk += itemInfo.efeito.atk * quantidade;
    }
    
    // Verifica subida de nível
    while (jujutsuDB[usuario].exp >= jujutsuDB[usuario].expNecessaria) {
        jujutsuDB[usuario].exp -= jujutsuDB[usuario].expNecessaria;
        jujutsuDB[usuario].nivel++;
        jujutsuDB[usuario].expNecessaria = Math.floor(jujutsuDB[usuario].expNecessaria * 1.2);
        jujutsuDB[usuario].hpMax += 20;
        jujutsuDB[usuario].hp = jujutsuDB[usuario].hpMax;
        jujutsuDB[usuario].atk += 5;
        jujutsuDB[usuario].def += 3;
        
        if (jujutsuDB[usuario].nivel >= 50) jujutsuDB[usuario].rank = 'Especial';
        else if (jujutsuDB[usuario].nivel >= 30) jujutsuDB[usuario].rank = 'Grau 1';
        else if (jujutsuDB[usuario].nivel >= 15) jujutsuDB[usuario].rank = 'Grau 2';
        else if (jujutsuDB[usuario].nivel >= 5) jujutsuDB[usuario].rank = 'Grau 3';
        else jujutsuDB[usuario].rank = 'Grau 4';
    }
    
    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const compraMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🛒 *COMPRA REALIZADA!* 🛒\n\n` +
                      `🎉 @${nomeUser} comprou ${quantidade}x ${itemInfo.nome}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💰 *Total gasto:* -${custoTotal} N-Coins\n` +
                      `💵 *Saldo restante:* ${coinsDB[usuario].coins.toLocaleString()} N-Coins\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: compraMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RANKING JUJUTSU ==========
case 'rankjujutsu':
case 'rankingfeiticeiros': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    
    let jujutsuDB = {};
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));

    const ranking = Object.entries(jujutsuDB)
        .map(([userId, data]) => ({ 
            id: userId, 
            nivel: data.nivel, 
            nome: data.nomePersonagem, 
            rank: data.rank,
            vitorias: data.vitorias
        }))
        .sort((a, b) => b.nivel - a.nivel)
        .slice(0, 10);

    if (ranking.length === 0) {
        return reply("📊 Nenhum feiticeiro registrado ainda. Use `!escolherpersonagem` para começar!");
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🏆 *RANKING JUJUTSU KAISEN* 🏆\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    const mentions = [];
    for (let i = 0; i < ranking.length; i++) {
        const user = ranking[i];
        const nomeUser = user.id.split('@')[0];
        mentions.push(user.id);
        
        let medalha = '';
        if (i === 0) medalha = '👑 ';
        else if (i === 1) medalha = '🥈 ';
        else if (i === 2) medalha = '🥉 ';
        else medalha = '📍 ';
        
        texto += `${medalha}${i+1}º *${user.nome}* - @${nomeUser}\n`;
        texto += `   📊 Nível: ${user.nivel} | 🎖️ Rank: ${user.rank} | 🏆 Vitórias: ${user.vitorias}\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: texto, mentions: mentions }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RESETAR JUJUTSU ==========
case 'resetjujutsu':
case 'resetarpersonagem': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    
    let jujutsuDB = {};
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));

    const usuario = sender;
    const nomeUser = usuario.split('@')[0];

    if (!jujutsuDB[usuario]) {
        return reply(`❌ @${nomeUser}, você não tem um personagem Jujutsu para resetar!`);
    }

    delete jujutsuDB[usuario];
    fs.writeFileSync(jujutsuPath, JSON.stringify(jujutsuDB, null, 2));

    const resetMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                     `🔄 *PERSONAGEM RESETADO!* 🔄\n\n` +
                     `😢 @${nomeUser} resetou seu personagem Jujutsu.\n\n` +
                     `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                     `💡 Use \`!escolherpersonagem <nome>\` para escolher um novo personagem!\n\n` +
                     `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: resetMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== RANKING JUJUTSU ==========
case 'rankjujutsu':
case 'rankingfeiticeiros': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const jujutsuPath = './DADOS DO KEISEN/usuarios/jujutsu.json';
    
    let jujutsuDB = {};
    if (fs.existsSync(jujutsuPath)) jujutsuDB = JSON.parse(fs.readFileSync(jujutsuPath));

    const ranking = Object.entries(jujutsuDB)
        .map(([userId, data]) => ({ id: userId, nivel: data.nivel, nome: data.nomePersonagem, rank: data.rank }))
        .sort((a, b) => b.nivel - a.nivel)
        .slice(0, 10);

    if (ranking.length === 0) {
        return reply("📊 Nenhum feiticeiro registrado ainda. Use `!escolherpersonagem` para começar!");
    }

    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🏆 *RANKING JUJUTSU KAISEN* 🏆\n\n`;
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;

    const mentions = [];
    for (let i = 0; i < ranking.length; i++) {
        const user = ranking[i];
        const nomeUser = user.id.split('@')[0];
        mentions.push(user.id);
        
        let medalha = '';
        if (i === 0) medalha = '🥇 ';
        else if (i === 1) medalha = '🥈 ';
        else if (i === 2) medalha = '🥉 ';
        else medalha = '📍 ';
        
        texto += `${medalha}${i+1}º *${user.nome}* - @${nomeUser}\n`;
        texto += `   📊 Nível: ${user.nivel} | 🎖️ Rank: ${user.rank}\n\n`;
    }

    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, { text: texto, mentions: mentions }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ==================== SISTEMA DE AGIOTA ====================

// ========== PEDIR EMPRÉSTIMO AO AGIOTA ==========
case 'pediremprestimo':
case 'pedirdinheiro':
case 'agiota': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let agiotaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    let valor = parseInt(args[0]);
    if (isNaN(valor) || valor <= 0) return reply("❌ Uso: `!pediremprestimo <valor>`\nExemplo: `!pediremprestimo 500`");
    
    if (valor < 100) return reply("❌ O valor mínimo para empréstimo é 100 N-Coins.");
    if (valor > 50000) return reply("❌ O valor máximo para empréstimo é 50.000 N-Coins.");
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (agiotaDB[usuario] && agiotaDB[usuario].ativo) {
        const divida = agiotaDB[usuario].valor;
        const data = agiotaDB[usuario].data;
        return reply(`❌ @${nomeUser}, você já tem um empréstimo ativo de ${divida.toLocaleString()} N-Coins contraído em ${data}.\nUse \`!pagaragiota\` para quitar sua dívida.`);
    }
    
    const juros = Math.floor(valor * 0.2);
    const totalPagar = valor + juros;
    
    agiotaDB[usuario] = {
        valor: valor,
        juros: juros,
        totalPagar: totalPagar,
        data: new Date().toLocaleString('pt-BR'),
        dataISO: new Date().toISOString(),
        ativo: true
    };
    fs.writeFileSync(agiotaPath, JSON.stringify(agiotaDB, null, 2));
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 0 };
    coinsDB[usuario].coins += valor;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    const emprestimoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                          `💰 *EMPRÉSTIMO CONCEDIDO!* 💰\n\n` +
                          `🎉 @${nomeUser}, o AGIOTA liberou seu dinheiro!\n\n` +
                          `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                          `💵 *Valor solicitado:* ${valor.toLocaleString()} N-Coins\n` +
                          `📈 *Juros (20%):* ${juros.toLocaleString()} N-Coins\n` +
                          `💸 *Total a pagar:* ${totalPagar.toLocaleString()} N-Coins\n` +
                          `📅 *Data do empréstimo:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                          `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                          `⚠️ *Pague antes de 7 dias para não ter juros extras!*\n` +
                          `💳 Use \`!pagaragiota\` para quitar sua dívida\n\n` +
                          `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: emprestimoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== PAGAR DÍVIDA AO AGIOTA ==========
case 'pagaragiota':
case 'pagar': {
    if (!isGroup) return reply(mess.onlyGroup());
    
    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    
    let agiotaDB = {};
    let coinsDB = {};
    
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (!agiotaDB[usuario] || !agiotaDB[usuario].ativo) {
        return reply(`❌ @${nomeUser}, você não tem nenhum empréstimo ativo.\nUse \`!pediremprestimo <valor>\` para pedir dinheiro.`);
    }
    
    let divida = agiotaDB[usuario];
    let totalPagar = divida.totalPagar;
    
    // Verifica se passou de 7 dias (juros extras)
    const dataEmprestimo = new Date(divida.dataISO);
    const hoje = new Date();
    const diasDesde = Math.floor((hoje - dataEmprestimo) / (1000 * 60 * 60 * 24));
    
    if (diasDesde > 7) {
        const jurosExtras = Math.floor(totalPagar * 0.1);
        totalPagar += jurosExtras;
    }
    
    if (!coinsDB[usuario]) coinsDB[usuario] = { coins: 0 };
    
    if (coinsDB[usuario].coins < totalPagar) {
        const falta = totalPagar - coinsDB[usuario].coins;
        return reply(`❌ @${nomeUser}, você não tem saldo suficiente para pagar sua dívida!\n💰 *Total a pagar:* ${totalPagar.toLocaleString()} N-Coins\n💸 *Faltam:* ${falta.toLocaleString()} N-Coins`);
    }
    
    coinsDB[usuario].coins -= totalPagar;
    fs.writeFileSync(coinsPath, JSON.stringify(coinsDB, null, 2));
    
    delete agiotaDB[usuario];
    fs.writeFileSync(agiotaPath, JSON.stringify(agiotaDB, null, 2));
    
    const pagamentoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                         `✅ *DÍVIDA QUITADA!* ✅\n\n` +
                         `🎉 @${nomeUser} pagou sua dívida com o AGIOTA!\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `💵 *Valor pago:* ${totalPagar.toLocaleString()} N-Coins\n` +
                         `📅 *Data do pagamento:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                         `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                         `🙏 *Obrigado por pagar! Volte sempre!*\n\n` +
                         `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: pagamentoMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== VERIFICAR DÍVIDA ==========
case 'minhadivida':
case 'verdivida': {
    if (!isGroup) return reply(mess.onlyGroup());
    
    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    
    let agiotaDB = {};
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    
    const usuario = sender;
    const nomeUser = usuario.split('@')[0];
    
    if (!agiotaDB[usuario] || !agiotaDB[usuario].ativo) {
        return reply(`✅ @${nomeUser}, você não tem nenhuma dívida ativa!\n💳 Use \`!pediremprestimo <valor>\` se precisar de dinheiro.`);
    }
    
    const divida = agiotaDB[usuario];
    const dataEmprestimo = new Date(divida.dataISO);
    const hoje = new Date();
    const diasDesde = Math.floor((hoje - dataEmprestimo) / (1000 * 60 * 60 * 24));
    const diasRestantes = Math.max(0, 7 - diasDesde);
    
    let totalComJuros = divida.totalPagar;
    let aviso = '';
    if (diasDesde > 7) {
        const jurosExtras = Math.floor(divida.totalPagar * 0.1);
        totalComJuros += jurosExtras;
        aviso = `\n⚠️ *ATENÇÃO:* Seu empréstimo está vencido! Juros extras de 10% aplicados!\n💰 *Total atualizado:* ${totalComJuros.toLocaleString()} N-Coins`;
    }
    
    const dividaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `💸 *MINHA DÍVIDA* 💸\n\n` +
                      `👤 @${nomeUser}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💰 *Valor emprestado:* ${divida.valor.toLocaleString()} N-Coins\n` +
                      `📈 *Juros (20%):* ${divida.juros.toLocaleString()} N-Coins\n` +
                      `💸 *Total a pagar:* ${divida.totalPagar.toLocaleString()} N-Coins\n` +
                      `📅 *Data do empréstimo:* ${divida.data}\n` +
                      `⏰ *Dias restantes para pagar:* ${diasRestantes} dias${aviso}\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💳 Use \`!pagaragiota\` para quitar sua dívida\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, { text: dividaMsg, mentions: [usuario] }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ADMIN: COBRAR TODOS (AGIOTA) ==========
case 'cobraragiota':
case 'cobrardividas': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));
    
    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    
    let agiotaDB = {};
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    
    const devedores = Object.entries(agiotaDB).filter(([_, data]) => data.ativo === true);
    
    if (devedores.length === 0) {
        return reply("✅ Nenhum devedor ativo no momento. Todos estão em dia!");
    }
    
    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `🔪 *COBRANÇA DO AGIOTA* 🔪\n\n`;
    texto += `⚠️ *LISTA DE DEVEDORES:* ⚠️\n\n`;
    
    const mentions = [];
    for (const [userId, data] of devedores) {
        const nome = userId.split('@')[0];
        const dataEmprestimo = new Date(data.dataISO);
        const hoje = new Date();
        const diasDesde = Math.floor((hoje - dataEmprestimo) / (1000 * 60 * 60 * 24));
        
        texto += `👤 @${nome}\n`;
        texto += `   💸 Deve: ${data.totalPagar.toLocaleString()} N-Coins\n`;
        texto += `   ⏰ ${diasDesde} dias em atraso\n\n`;
        mentions.push(userId);
    }
    
    texto += `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`;
    texto += `💀 *PAGUE SUAS DÍVIDAS OU AS CONSEQUÊNCIAS SERÃO GRAVES!* 💀\n\n`;
    texto += `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, {
        text: texto,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ADMIN: PERDOAR DÍVIDA ==========
case 'perdoardivida':
case 'perdoar': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));
    
    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    
    let agiotaDB = {};
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    if (!alvo) return reply("❌ Marque um usuário: `!perdoardivida @user`");
    
    if (!agiotaDB[alvo] || !agiotaDB[alvo].ativo) {
        return reply(`❌ @${alvo.split('@')[0]} não tem nenhuma dívida ativa.`);
    }
    
    const valorPerdoado = agiotaDB[alvo].totalPagar;
    delete agiotaDB[alvo];
    fs.writeFileSync(agiotaPath, JSON.stringify(agiotaDB, null, 2));
    
    const perdaoMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                      `🙏 *DÍVIDA PERDOADA!* 🙏\n\n` +
                      `✨ O AGIOTA perdoou a dívida de @${alvo.split('@')[0]}!\n\n` +
                      `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                      `💰 *Valor perdoado:* ${valorPerdoado.toLocaleString()} N-Coins\n` +
                      `📅 *Data do perdão:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                      `🎉 *Você teve sorte! Não acumule mais dívidas!* 🎉\n\n` +
                      `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, {
        text: perdaoMsg,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

// ========== ADMIN: ADICIONAR DÍVIDA MANUALMENTE ==========
case 'adicionardivida':
case 'cobrar': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));
    
    const fs = require('fs');
    const agiotaPath = './DADOS DO KEISEN/usuarios/agiota.json';
    
    let agiotaDB = {};
    if (fs.existsSync(agiotaPath)) agiotaDB = JSON.parse(fs.readFileSync(agiotaPath));
    
    let alvo = (typeof menc_os2 !== 'undefined' && menc_os2) ? menc_os2 : null;
    let valor = parseInt(args[1]);
    
    if (!alvo || isNaN(valor) || valor <= 0) {
        return reply("❌ Uso: `!adicionardivida @user <valor>`\nExemplo: `!adicionardivida @joao 1000`");
    }
    
    if (agiotaDB[alvo] && agiotaDB[alvo].ativo) {
        return reply(`❌ @${alvo.split('@')[0]} já possui uma dívida ativa. Use \`!perdoardivida\` primeiro.`);
    }
    
    const juros = Math.floor(valor * 0.2);
    const totalPagar = valor + juros;
    
    agiotaDB[alvo] = {
        valor: valor,
        juros: juros,
        totalPagar: totalPagar,
        data: new Date().toLocaleString('pt-BR'),
        dataISO: new Date().toISOString(),
        ativo: true
    };
    fs.writeFileSync(agiotaPath, JSON.stringify(agiotaDB, null, 2));
    
    const cobrancaMsg = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n` +
                        `📝 *DÍVIDA REGISTRADA!* 📝\n\n` +
                        `🔪 O AGIOTA registrou uma dívida para @${alvo.split('@')[0]}!\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `💵 *Valor:* ${valor.toLocaleString()} N-Coins\n` +
                        `📈 *Juros (20%):* ${juros.toLocaleString()} N-Coins\n` +
                        `💸 *Total a pagar:* ${totalPagar.toLocaleString()} N-Coins\n` +
                        `📅 *Data:* ${new Date().toLocaleString('pt-BR')}\n\n` +
                        `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n` +
                        `⚠️ *Pague sua dívida ou as consequências virão!*\n` +
                        `💳 Use \`!pagaragiota\` para quitar\n\n` +
                        `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;
    
    await keisen.sendMessage(from, {
        text: cobrancaMsg,
        mentions: [alvo]
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}
case 'canal': {
reagir(from,"💧");
const canalLink="https://whatsapp.com/channel/0029VbBrIW2BA1f1WPGar50I";
const imageUrl="https://tokito-apis.site/6689a6.mp4";
const buttons=[
{buttonId:`${prefix}ping`,buttonText:{displayText:"🌫️⃞ ᴘɪɴɢ ⃞🌫️"},type:1},
{buttonId:`${prefix}shop`,buttonText:{displayText:"💧 Sayuri ᴀᴘɪꜱ ⃞💧"},type:1}
];
const buttonMessage={
image:{url:imageUrl},
caption:`ׅ╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
│ 📣 *Canal do desenvolvedor do Bot*
│ 🌫️ *Receba atualizações exclusivas!*
│ 🤑 *Caso queira comprar bot Siga o canal*
│ 🔗 *Acesse:* ${canalLink}
╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
> 💧 *Humano:* ${pushname}
> 💭 *ta precisando de ajuda alugar bot* 
> segue o canal

*☆desenvolvedor☆*
© ⏤͟͟͞͞ •𝐘𝐮𝐤𝐚 𝐌𝐨𝐝𝐳👑 •`,
footer:"Selecione uma opção abaixo:",
buttons:buttons,
headerType:4,
mentions:[sender]
};
await keisen.sendMessage(from,buttonMessage,{quoted:selo});
}
break;

case 'menu':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.menu(prefix),
sendAudio: true
});
break;

case 'menu18':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.menu18(prefix),
sendAudio: true
});
break;

case 'menudono':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.menudono(prefix),
isOwnerRequired: true,
sendAudio: true
});
break;

case 'menuadm':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.adms(prefix),
isAdminRequired: true,
sendAudio: true
});
break;

case 'menulogos':
case 'efeitoimg':
case 'logo':
case 'logos':
case 'menulogo':
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.menulogos(prefix),
sendAudio: true
});
break;

case 'menubrincadeira':
case 'menubrincadeiras':
case 'brincadeiras':
case 'brincadeira':
case 'menubn': {
try {
const listaBrincadeira = {
title: "🪷 MENU BRINCADEIRA 🪷",
sections: [
{
title: "🪷 JOGOS",
rows: [
{ header: "🪷 jogodavelha", title: "Comando: " + prefix + "jogodavelha", id: prefix + "jogodavelha" },
{ header: "🪷 vab", title: "Comando: " + prefix + "vab", id: prefix + "vab" },
{ header: "🪷 eununca", title: "Comando: " + prefix + "eununca", id: prefix + "eununca" }
]},
{
title: "🪷 CASAL-WEB",
rows: [
{ header: "🪷 namorar", title: "Comando: " + prefix + "namorar", id: prefix + "namorar" },
{ header: "🪷 terminar", title: "Comando: " + prefix + "terminar", id: prefix + "terminar" },
{ header: "🪷 divorciar", title: "Comando: " + prefix + "divorciar", id: prefix + "divorciar" },
{ header: "🪷 cancelarpedido", title: "Comando: " + prefix + "cancelarpedido", id: prefix + "cancelarpedido" },
{ header: "🪷 minhadupla", title: "Comando: " + prefix + "minhadupla", id: prefix + "minhadupla" },
{ header: "🪷 dupla", title: "Comando: " + prefix + "dupla", id: prefix + "dupla" }
]},
{
title: "🪷 FORCA",
rows: [
{ header: "🪷 forca", title: "Comando: " + prefix + "forca", id: prefix + "forca" },
{ header: "🪷 rv-forca", title: "Comando: " + prefix + "rv-forca", id: prefix + "rv-forca" },
{ header: "🪷 fc", title: "Comando: " + prefix + "fc", id: prefix + "fc" }
]},
{
title: "🪷 INTERATIVO 1",
rows: [
{ header: "🪷 lindo", title: "Comando: " + prefix + "lindo", id: prefix + "lindo" },
{ header: "🪷 linda", title: "Comando: " + prefix + "linda", id: prefix + "linda" },
{ header: "🪷 fiel", title: "Comando: " + prefix + "fiel", id: prefix + "fiel" },
{ header: "🪷 infiel", title: "Comando: " + prefix + "infiel", id: prefix + "infiel" },
{ header: "🪷 gay", title: "Comando: " + prefix + "gay", id: prefix + "gay" },
{ header: "🪷 feio", title: "Comando: " + prefix + "feio", id: prefix + "feio" },
{ header: "🪷 corno", title: "Comando: " + prefix + "corno", id: prefix + "corno" },
{ header: "🪷 vesgo", title: "Comando: " + prefix + "vesgo", id: prefix + "vesgo" },
{ header: "🪷 bebado", title: "Comando: " + prefix + "bebado", id: prefix + "bebado" },
{ header: "🪷 gostoso", title: "Comando: " + prefix + "gostoso", id: prefix + "gostoso" },
{ header: "🪷 gostosa", title: "Comando: " + prefix + "gostosa", id: prefix + "gostosa" },
{ header: "🪷 sigma", title: "Comando: " + prefix + "sigma", id: prefix + "sigma" },
{ header: "🪷 beta", title: "Comando: " + prefix + "beta", id: prefix + "beta" },
{ header: "🪷 baiano", title: "Comando: " + prefix + "baiano", id: prefix + "baiano" },
{ header: "🪷 baiana", title: "Comando: " + prefix + "baiana", id: prefix + "baiana" },
{ header: "🪷 carioca", title: "Comando: " + prefix + "carioca", id: prefix + "carioca" }
]},
{
title: "🪷 INTERATIVO 2",
rows: [
{ header: "🪷 louco", title: "Comando: " + prefix + "louco", id: prefix + "louco" },
{ header: "🪷 louca", title: "Comando: " + prefix + "louca", id: prefix + "louca" },
{ header: "🪷 safada", title: "Comando: " + prefix + "safada", id: prefix + "safada" },
{ header: "🪷 safado", title: "Comando: " + prefix + "safado", id: prefix + "safado" },
{ header: "🪷 macaco", title: "Comando: " + prefix + "macaco", id: prefix + "macaco" },
{ header: "🪷 macaca", title: "Comando: " + prefix + "macaca", id: prefix + "macaca" },
{ header: "🪷 puta", title: "Comando: " + prefix + "puta", id: prefix + "puta" },
{ header: "🪷 beijo", title: "Comando: " + prefix + "beijo", id: prefix + "beijo" },
{ header: "🪷 matar", title: "Comando: " + prefix + "matar", id: prefix + "matar" },
{ header: "🪷 tapa", title: "Comando: " + prefix + "tapa", id: prefix + "tapa" },
{ header: "🪷 chute", title: "Comando: " + prefix + "chute", id: prefix + "chute" },
{ header: "🪷 dogolpe", title: "Comando: " + prefix + "dogolpe", id: prefix + "dogolpe" },
{ header: "🪷 nazista", title: "Comando: " + prefix + "nazista", id: prefix + "nazista" },
{ header: "🪷 chance", title: "Comando: " + prefix + "chance", id: prefix + "chance" },
{ header: "🪷 surubao", title: "Comando: " + prefix + "surubao", id: prefix + "surubao" },
{ header: "🪷 casal", title: "Comando: " + prefix + "casal", id: prefix + "casal" }
]},
{
title: "🪷 INTERATIVO 3",
rows: [
{ header: "🪷 quando", title: "Comando: " + prefix + "quando", id: prefix + "quando" },
{ header: "🪷 mencionar", title: "Comando: " + prefix + "mencionar", id: prefix + "mencionar" },
{ header: "🪷 death", title: "Comando: " + prefix + "death", id: prefix + "death" },
{ header: "🪷 tirarft", title: "Comando: " + prefix + "tirarft", id: prefix + "tirarft" },
{ header: "🪷 lavarlouca", title: "Comando: " + prefix + "lavarlouca", id: prefix + "lavarlouca" },
{ header: "🪷 comer", title: "Comando: " + prefix + "comer", id: prefix + "comer" },
{ header: "🪷 capinarlote", title: "Comando: " + prefix + "capinarlote", id: prefix + "capinarlote" },
{ header: "🪷 carinho", title: "Comando: " + prefix + "carinho", id: prefix + "carinho" },
{ header: "🪷 abraco", title: "Comando: " + prefix + "abraco", id: prefix + "abraco" },
{ header: "🪷 pgpeito", title: "Comando: " + prefix + "pgpeito", id: prefix + "pgpeito" },
{ header: "🪷 pgpau", title: "Comando: " + prefix + "pgpau", id: prefix + "pgpau" },
{ header: "🪷 sentar", title: "Comando: " + prefix + "sentar", id: prefix + "sentar" },
{ header: "🪷 morder", title: "Comando: " + prefix + "morder", id: prefix + "morder" },
{ header: "🪷 pgbunda", title: "Comando: " + prefix + "pgbunda", id: prefix + "pgbunda" },
{ header: "🪷 vord", title: "Comando: " + prefix + "vord", id: prefix + "vord" },
{ header: "🪷 obesidade", title: "Comando: " + prefix + "obesidade", id: prefix + "obesidade" },
{ header: "🪷 contardias", title: "Comando: " + prefix + "contardias", id: prefix + "contardias" },
{ header: "🪷 cu", title: "Comando: " + prefix + "cu", id: prefix + "cu" },
{ header: "🪷 leitada", title: "Comando: " + prefix + "leitada", id: prefix + "leitada" },
{ header: "🪷 boquete", title: "Comando: " + prefix + "boquete", id: prefix + "boquete" },
{ header: "🪷 cagar", title: "Comando: " + prefix + "cagar", id: prefix + "cagar" }
]},
{
title: "🪷 RANK'S 1",
rows: [
{ header: "🪷 rankgay", title: "Comando: " + prefix + "rankgay", id: prefix + "rankgay" },
{ header: "🪷 rankgado", title: "Comando: " + prefix + "rankgado", id: prefix + "rankgado" },
{ header: "🪷 rankcorno", title: "Comando: " + prefix + "rankcorno", id: prefix + "rankcorno" },
{ header: "🪷 rankgostoso", title: "Comando: " + prefix + "rankgostoso", id: prefix + "rankgostoso" },
{ header: "🪷 rankgostosa", title: "Comando: " + prefix + "rankgostosa", id: prefix + "rankgostosa" },
{ header: "🪷 ranknazista", title: "Comando: " + prefix + "ranknazista", id: prefix + "ranknazista" },
{ header: "🪷 rankotaku", title: "Comando: " + prefix + "rankotaku", id: prefix + "rankotaku" },
{ header: "🪷 rankpau", title: "Comando: " + prefix + "rankpau", id: prefix + "rankpau" },
{ header: "🪷 ranksigma", title: "Comando: " + prefix + "ranksigma", id: prefix + "ranksigma" },
{ header: "🪷 rankbeta", title: "Comando: " + prefix + "rankbeta", id: prefix + "rankbeta" },
{ header: "🪷 rankbaiano", title: "Comando: " + prefix + "rankbaiano", id: prefix + "rankbaiano" },
{ header: "🪷 rankbaiana", title: "Comando: " + prefix + "rankbaiana", id: prefix + "rankbaiana" },
{ header: "🪷 rankcarioca", title: "Comando: " + prefix + "rankcarioca", id: prefix + "rankcarioca" }
]},
{
title: "🪷 RANK'S 2",
rows: [
{ header: "🪷 ranksafado", title: "Comando: " + prefix + "ranksafado", id: prefix + "ranksafado" },
{ header: "🪷 ranksafada", title: "Comando: " + prefix + "ranksafada", id: prefix + "ranksafada" },
{ header: "🪷 ranklouco", title: "Comando: " + prefix + "ranklouco", id: prefix + "ranklouco" },
{ header: "🪷 ranklouca", title: "Comando: " + prefix + "ranklouca", id: prefix + "ranklouca" },
{ header: "🪷 rankmacaco", title: "Comando: " + prefix + "rankmacaco", id: prefix + "rankmacaco" },
{ header: "🪷 rankmacaca", title: "Comando: " + prefix + "rankmacaca", id: prefix + "rankmacaca" },
{ header: "🪷 rankputa", title: "Comando: " + prefix + "rankputa", id: prefix + "rankputa" },
{ header: "🪷 rankcu", title: "Comando: " + prefix + "rankcu", id: prefix + "rankcu" },
{ header: "🪷 rankbct", title: "Comando: " + prefix + "rankbct", id: prefix + "rankbct" },
{ header: "🪷 rankfalido", title: "Comando: " + prefix + "rankfalido", id: prefix + "rankfalido" },
{ header: "🪷 rankcasal", title: "Comando: " + prefix + "rankcasal", id: prefix + "rankcasal" }
]}
]
};
const botoesBrinc = [{ name: "single_select", buttonParamsJson: JSON.stringify(listaBrincadeira) }];
const msgBrinc = generateWAMessageFromContent(from, {
interactiveMessage: {
contextInfo: { participant: sender },
body: { text: "*🪷 WHITE LOTUS · BRINCADEIRAS 🪷*\n\nEscolha a brincadeira:" },
nativeFlowMessage: { buttons: botoesBrinc, messageVersion: 1 }
}
}, {});
await keisen.relayMessage(from, msgBrinc.message, { messageId: msgBrinc.key.id });
} catch (error) {
console.error("Erro brincadeira:", error);
await sendMenu(from, selo, {
reaction: "🎉",
caption: linguagem.brincadeiras(prefix),
isGroupRequired: true,
isModoBnRequired: true,
sendAudio: true
});
}
break;
}

case 'donos': {
await reagir(from, "🎉")
try {
const thumbnail = await getBuffer(donos);
if (!thumbnail) throw new Error("Thumbnail não carregado");

await keisen.sendMessage(from, {
video: thumbnail,
caption: linguagem.consultas(prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName),
gifPlayback: true,
contextInfo: NkChannelKk            
}, { quoted: selo });
} catch (e) {
console.error("Erro ao executar o comando:", e);
await keisen.sendMessage(from, { text: linguagem.consultas(prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName) }, { quoted: selo });
}
break;
}



case 'infobot':
case 'infodono':
case 'dono': {
await reagir(from, "🎉")

try {

await keisen.sendMessage(from, {
image: { url: "./DADOS DO KEISEN/INFO_KEISEN/LOGOS/fotomenu.png" },
caption: linguagem.dono(
prefix,
NomeDoBot,
NumeroDoBot,
ownerNumber,
isBotoff,
ownerName,
botNumber
),
contextInfo: NkChannelKk
}, { quoted: selo })

} catch (e) {

console.error("Erro ao executar o comando:", e)

await keisen.sendMessage(from, {
text: linguagem.dono(
prefix,
NomeDoBot,
NumeroDoBot,
ownerNumber,
isBotoff,
ownerName,
botNumber
),
}, { quoted: selo })


}

}
break

//============[ FIM MENU E INFOS ]==========\\

//=========== [ ÍNICIO JOGOS ] =========\\

case 'quando':
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'rv-forca': case 'rvforca': {
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
const pathF = `./DADOS DO KEISEN/data/media/forca/database/session-${from}.json`;
if (!fs.existsSync(pathF)) return reply('*ɴᴀᴏ ʜᴀ ɴᴇɴʜᴜᴍ ᴊᴏɢᴏ ᴅᴀ ғᴏʀᴄᴀ ᴀᴛɪᴠᴏ ᴀɢᴏʀᴀ 🤷‍♂️*');
const dadosForca = JSON.parse(fs.readFileSync(pathF));
fs.unlinkSync(pathF);
await reply(`🏳️ *Jogo encerrado!*\n\nA palavra era: *${dadosForca.palavra.toUpperCase()}*\n🎭 Tema: ${dadosForca.tema}`);
} catch (e) {
console.error(e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
}
break;
}

case 'forca': { //Yuka Modz
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

//Atenção aqui, o caminho pode ser diferente
const pathF = `./DADOS DO KEISEN/data/media/forca/database/session-${from}.json`;

if (fs.existsSync(pathF)) {
            return reply('*ᴏ ᴊᴏɢᴏ ᴊᴀ ғᴏɪ ɪɴɪᴄɪᴀᴅᴏ ᴀɴᴛᴇs 🙇‍♂️*');
}

//Tema aleatório
const word = palavras[Math.floor(Math.random() * palavras.length)];

const params = {
            palavra: word.palavra,
            tema: word.tema,
            dica: word.dica,
            path: './DADOS DO KEISEN/data/media/forca/database', //Caminho da pasta
};
const data = forca.startSession(from, params);

reply(`• 🎮 𝐉𝐎𝐆𝐎--𝐃𝐀-𝐅𝐎𝐑𝐂𝐀 🌠 •\n*⏤͟͟͞͞ʟᴇᴛʀᴀs*: ${data.palavra.length}\n*⏤͟͟͞͞ᴛᴇᴍᴀ*: ${word.tema}\n*⏤͟͟͞͞ᴅɪᴄᴀ*: ${word.dica}\n|───𖡜̸｡᭭\n_¦_\n╚ ${frames[data.erros]}\n\n\n⏤꫶͟͟͞͞───────────➮\n\n『 ${data.letrasX.join('')} 』\n\n⏤͟͟͞͞───────────➮\n⏤͟͟͞͞ʟᴇᴛʀᴀs ᴊᴏɢᴀᴅᴀs: ${data.usado.join(', ')}\n\n> ᴜsᴇ ᴏ ${prefix}ғᴄ ᴘᴀʀᴀ ᴀᴅᴠɪɴʜᴀʀ ᴀ ʟᴇᴛʀᴀ ᴏᴜ ᴀ ᴘᴀʟᴀᴠʀᴀ ᴛᴏᴅᴀ`);
} catch (e) {
console.error(e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
}
break; //Yuka Modz
}




//Case principal para adivinhar a letra e etc..
case 'fc': { //Yuka Modz
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!fs.existsSync(`./DADOS DO KEISEN/data/media/forca/database/session-${from}.json`)) {
            return reply(`*ᴏ ᴊᴏɢᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ᴄᴏᴍᴇᴄᴏᴜ 🤷‍♂️*\n\n*ᴜsᴇ ${prefix}ғᴏʀᴄᴀ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴏ ᴊᴏɢᴏ 🙆‍♂️*`);
}
if (!q || q.length == 2 || !isNaN(q)) return reply("*ᴠᴏᴄᴇ sᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴏᴜ ᴀ ғʀᴀsᴇ ᴛᴏᴅᴀ 🤷‍♂️*");

const pathF = `./DADOS DO KEISEN/data/media/forca/database/session-${from}.json`;

const database = JSON.parse(fs.readFileSync(pathF));
const q_ToLC = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if (database.usado.includes(q_ToLC)) return reply('*ᴇsᴛᴀ ʟᴇᴛʀᴀ ᴊᴀ ғᴏɪ ᴜsᴀᴅᴀ, ᴛᴇʙᴛᴇ ᴏᴜᴛʀᴀ ʟᴇᴛʀᴀ 🙇‍♂️*');

//Atenção aqui
const data = forca.verify(from, q_ToLC, './DADOS DO KEISEN/data/media/forca/database');

if (data.ended) {
            if (data.win) {
                reply('*ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ɢᴀɴʜᴀʀ ᴏ ɢᴀᴍᴇ 🙇‍♂️*');
                //...Implementar o resto do que você quiser
            } else {
                reply('*sɪɴᴛᴏ ᴍᴜɪᴛᴏ ᴍᴀs ᴠᴏᴄᴇ ᴘᴇʀᴅᴇᴜ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ɴᴀ ᴘʀᴏxɪᴍᴀ 🤷‍♂️*');
                //...Implementar o resto do que você quiser
            }
            DLT_FL(data.session);
} else {
            if (data.letrasY.includes(q_ToLC)) {
                reply('*ᴠᴏᴄᴇ ᴀᴄᴇʀᴛᴏᴜ ᴀ ʟᴇᴛʀᴀ 🙆‍♂️*');
            } else {
                reply('*sɪɴᴛᴏ ᴍᴜɪᴛᴏ, ᴠᴏᴄᴇ ᴇʀʀᴏᴜ 🤷‍♂️*');
            }

            reply(`• 🎮 𝐉𝐎𝐆𝐎--𝐃𝐀-𝐅𝐎𝐑𝐂𝐀 🌠 •\n*⏤͟͟͞͞ʟᴇᴛʀᴀs*: ${data.palavra.length}\n*⏤͟͟͞͞ᴛᴇᴍᴀ*: ${data.tema}\n*⏤͟͟͞͞ᴅɪᴄᴀ*: ${data.dica}\n|───𖡜̸｡᭭\n_¦_\n╚ ${frames[data.erros]}\n\n\n⏤꫶͟͟͞͞───────────➮\n\n『 ${data.letrasX.join('')} 』\n\n⏤͟͟͞͞───────────➮\n⏤͟͟͞͞ʟᴇᴛʀᴀs ᴊᴏɢᴀᴅᴀs: ${data.usado.join(', ')}\n\n> ᴜsᴇ ᴏ ${prefix}ғᴄ ᴘᴀʀᴀ ᴀᴅᴠɪɴʜᴀʀ ᴀ ʟᴇᴛʀᴀ ᴏᴜ ᴀ ᴘᴀʟᴀᴠʀᴀ ᴛᴏᴅᴀ`);
}

} catch (e) {
console.log(e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
}
break; //Yuka Modz
}

//Comando para resetar a forca
case 'rv_forca': //Yuka Modz
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

//Atenção ao caminho correto do arquivo
const database = `./DADOS DO KEISEN/data/media/forca/database/session-${from}.json`;

if (!fs.existsSync(database)) {
            reply(`*ᴏ ᴊᴏɢᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ᴄᴏᴍᴇᴄᴏᴜ 🤷‍♂️*\n\n*ᴜsᴇ ${prefix}ғᴏʀᴄᴀ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴏ ᴊᴏɢᴏ 🙆‍♂️*`);
} else {
            DLT_FL(database);
            reply('*ᴘʀᴏɴᴛᴏ, ʀᴇsᴇᴛᴇɪ ᴀ ғᴏʀᴄᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
}
} catch (e) {
console.error(e);
reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
}
break;

case 'jogov':
case 'jogodavelha':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!menc_jid) return reply("Marque junto com o comando o @ do usuário que deseja desafiar..");
joguinhodavelhajs.push(sender);
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs));
joguinhodavelhajs2.push(from);
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2));
if (fs.existsSync(`./ARQUIVES/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');
const matrix = boardnow._matrix;

const msg = `*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*\n\n🔖 Já existe uma partida em andamento!\n\n👥 Disputa atual:\n@${jogadorX.split('@')[0]} VS @${jogadorO.split('@')[0]}\n\nAguardem o fim desta rodada antes de iniciar outra.`;
return await mentions(msg, [jogadorX, jogadorO], true);
}
if (argss.length === 1)
return reply(`Jogue com alguém, para iniciar a partida: ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = menc_jid.replace("@s.whatsapp.net", "").replace("@", "");

fs.writeFileSync(`./ARQUIVES/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2));
const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');

const mensagem = `*『 ⚠ 』ᗴՏᑭᗴᖇᗩᑎᗪO O OᑭOᑎᗴᑎTᗴ『 ⚠ 』* \n• *_「 @${jogadorX.split('@')[0]} 」 Está te convidando para jogar um jogo da velha【 👩🏻‍🦳】_*\n\n• *_『 @${jogadorO.split('@')[0]} 』 Use 『 S 』 pra aceitar 『 N 』 pra rejeitar._*\n\n> Caso queira cancelar use o 『 ${prefix}rv』`;
await mentions(mensagem, [jogadorX, jogadorO], true);
break;


case 'resetarvelha':
case 'resetavelha':
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./ARQUIVES/tictactoe/db/" + from + ".json")) {
DLT_FL("./ARQUIVES/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO KEISEN/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'vord': //Criado do zero Por Nk hackzin
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
/** Se não conter "verdade" ou "dessfio" */
if (q !== "verdade" && q !== "desafio") return reply("• Escolha *verdade* ou *desafio*");

const question = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/questions.json"));

if (q == "verdade") {
const randomQuest = question[0].words[Math.floor(Math.random() * question[0].words.length)];
reply(`*⸺͟͞ꪶ𝐄 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐐𝐔𝐄↴*\n\n${randomQuest}`);
}
else {
const randomQuest = question[1].words[Math.floor(Math.random() * question[1].words.length)];
reply(`*⸺͟͞ꪶ𝐃𝐄𝐒𝐀𝐅𝐈𝐎 𝐕𝐎𝐂𝐄↴*\n\n${randomQuest}`);
}
break;

//=========== [ FINAL JOGOS ] =========\\

//==========[ EDIT AUDIO/VIDEO/FOTO ] =========\\

case 'imgpraanime': case 'animeia': case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
conv = await fetchJson(`https://delirius-api-oficial.vercel.app/api/toanime?url=${link}`)
await keisen.sendMessage(from, {image: {url: conv.data.comparation}}, {quoted: selo}).catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'gtaia': case 'togta': case 'imgpragta':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertAndreas = await fetchJson(`https://aemt.me/jadigta?url=${link}`)
await keisen.sendMessage(from, {image: {url: dataConvertAndreas.result}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break



case 'tozombie': case 'zombieai': case 'imgprazombie':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertZombie = await fetchJson(`https://aemt.me/converter/zombie?url=${link}`);
await keisen.sendMessage(from, {image: {url: dataConvertZombie.url}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'enhance': case 'dehaze': case 'recolor':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send])}
data = await vyroEngine(base64, command);
await keisen.sendMessage(from, {image: data}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await keisen.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait()) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
await keisen.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await keisen.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
await DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'slowed':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=50000*2/3"${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'speed':
case 'speedup':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=86000*2/3"${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'adolesc':
case 'vozmenino':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
const keisenOkkotsu = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: keisenOkkotsu, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'fast':
case 'audiorapido':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
keisen.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

//==============[ FIM DAS CASES DE EDIT ]==============\\

//============[ BRINCADEIRAS/JOGOS/RANKS]===============\\

case 'chance':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(args.length < 1) return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`)
await keisen.sendMessage(from, {
text: `😵‍💫🌟 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`,
contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo});
break


case 'comer':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: comer}, gifPlayback: true,
caption: `Você acabou de comer a(o) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'capinarlote':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra capinar um lote, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: capinarlote}, gifPlayback: true,
caption: `Você acabou de botar o(a) *@${menc_os2.split('@')[0]}* pra capinar um lote`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgpeito':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar nos peitinhos, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: pgpeito}, gifPlayback: true,
caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar no pau dele(a), a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: pgpau}, gifPlayback: true,
caption: `Você acabou de pegar no pau do(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgbunda':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que desejas ser acariciado, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: pgbunda}, gifPlayback: true,
caption: `Você acabou de pegar na bunda do(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'morder':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar uma mordida, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: morder}, gifPlayback: true,
caption: `Você acabou de dar uma mordida no(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'sentar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar uma sentadinha, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: sentar}, gifPlayback: true,
caption: `Você acabou de dar uma sentadinha no(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'tirarft':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer tirar a foto, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: tirarft}, gifPlayback: true,
caption: `Você acabou de tirar uma foto do(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'boquete':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await keisen.sendMessage(from, {
video: {url: boquete}, gifPlayback: true,
caption: `Eita *@${menc_os2.split('@')[0]}* garganta profunda voce tem 😰`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'cagar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await keisen.sendMessage(from, {
video: {url: cagar}, gifPlayback: true,
caption: `CARALHOOOOO *@${menc_os2.split('@')[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? 🤯😳`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'cu':
if (!isGroup) return reply(mess.onlyGroup())
if (!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text: `Pesquisando quantos cm de profundidade tem seu bozo @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: { url: cu },
caption: `Quantos cm o(a) *@${sender_ou_n.split("@")[0]}* tem no bozo ?\n• A chance é de *${random}cm* 😳`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break


case 'abraco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um abraço, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: abraco}, gifPlayback: true,
caption: `Você acabou de dar um abraço fofo no(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'louca':
case 'lavarlouca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra lavar a louça, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: lavarlouca}, gifPlayback: true,
caption: `Você acabou de botar a(o) *@${menc_os2.split('@')[0]}* pra lavar a louça`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'carinho':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um carinho, a mensagem ou o @.')
await keisen.sendMessage(from, {
video: {url: carinho}, gifPlayback: true,
caption: `Você acabou de dar um carinho no(a) *@${menc_os2.split('@')[0]}*`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'morte':
case 'death':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (args.length == 0) return reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
await keisen.sendMessage(from, {
video: {url: deathcmd}, gifPlayback: true,
caption: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`,
contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo})
break

case 'carioca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgcarioca},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'louco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imglouco},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'louca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imglouca},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'safada':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgsafada},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'safado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgsafado},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'macaco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgmacaco},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'macaca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgmacaca},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'puta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgputa},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'matar': case 'mata':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
await keisen.sendMessage(from, {
video: {url: matar},
gifPlayback: true,
caption: `Você acabou de matar o(a) *@${menc_os2.split('@')[0]}*, seu... 😵‍💫💅🏻`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'leitada':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await keisen.sendMessage(from, {
video: {url: leitada},
gifPlayback: true,
caption: `Você acabou de dar leitinho gostoso para o(a) *@${menc_os2.split('@')[0]}*!`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'beijo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await keisen.sendMessage(from, {
video: {url: beijocmd},
gifPlayback: true,
caption: `Você acabou de beijar o(a) *@${menc_os2.split('@')[0]}*! 😳💖`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'tapa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await keisen.sendMessage(from, {
video: {url: tapacmd},
gifPlayback: true,
caption: `Você acabou de dar um tapa em *@${menc_os2.split('@')[0]}*! 😏`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'nazista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgnazista},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'corno':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgcorno},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgvesgo},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'bebado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgbebado},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'gado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imggado},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case "fiel":
            if (!isGroup) return reply(mess.onlyGroup());
            if (!isModobn) return reply(mess.onlyGroupFun(prefix));

            // Áudio inicial
            // Mensagem de busca
            keisen.sendMessage(
              from,
              {
                text: `🔎 Analisando o coração de *@${sender_ou_n.split("@")[0]}*... será fiel mesmo?`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );

            setTimeout(async () => {
              let random = Math.floor(Math.random() * 101);

              // Definição de título conforme a porcentagem
              let titulo = "";
              if (random <= 20) titulo = "💔 Coração de Pedra";
              else if (random <= 50) titulo = "😏 Aventureiro";
              else if (random <= 80) titulo = "💘 Comprometido";
              else titulo = "😇 Anjo Fiel";

              // Criar barra de fidelidade
              let barra =
                "█".repeat(Math.floor(random / 10)) +
                "░".repeat(10 - Math.floor(random / 10));

              keisen.sendMessage(
                from,
                {
                  image: {
                    url: `https://dl.dropboxusercontent.com/scl/fi/g0flrb150darc04vdtul8/1771201431187_image_1771201430651.jpg?rlkey=zghvof24d7awsjfsm0wl6qn7m&dl=0`,
                  },
                  caption:
                    `💞 Resultado da análise de fidelidade:\n\n` +
                    `👤 Usuário: *@${sender_ou_n.split("@")[0]}*\n` +
                    `📊 Fidelidade: *${random}%*\n` +
                    `🏆 Título: *${titulo}*\n\n` +
                    `📈 Barra de Fidelidade:\n[${barra}]`,
                  mentions: [sender_ou_n],
                },
                { quoted: info }
              );
            }, 7000);
            break;

case 'lindo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de lindo @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: lindocmd},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser lindo?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'fiel': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

keisen.sendMessage(
from,
{
text: `💍 Investigando a ficha de *@${sender_ou_n.split("@")[0]}*... será que é fiel? 👀`,
mentions: [sender_ou_n],
},
{ quoted: info }
);

setTimeout(async () => {
let random = Math.floor(Math.random() * 101);

let frase = "";
if (random >= 80) frase = "😇 Fiel desses não se acha mais, segura ele(a)!";
else if (random >= 50) frase = "🙂 Confiável na maior parte do tempo.";
else if (random >= 20) frase = "👀 Hmm... melhor ficar de olho.";
else frase = "🚩 Foge! Esse aí nem o próprio coração é fiel.";

let barra =
"█".repeat(Math.floor(random / 10)) +
"░".repeat(10 - Math.floor(random / 10));

keisen.sendMessage(
from,
{
text:
`💍 Análise concluída!\n\n` +
`👤 Usuário: *@${sender_ou_n.split("@")[0]}*\n` +
`📊 Fidelidade: *${random}%*\n\n` +
`📈 Barra de Fidelidade:\n[${barra}]\n\n` +
`💬 ${frase}`,
mentions: [sender_ou_n],
},
{ quoted: info }
);
}, 7000);
break;
}

case "infiel":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

            keisen.sendMessage(
              from,
              {
                text: `⚠️ Investigando a ficha de *@${sender_ou_n.split("@")[0]}*... será que é infiel? 👀`,
                mentions: [sender_ou_n],
              },
              { quoted: info }
            );

            setTimeout(async () => {
              let random = Math.floor(Math.random() * 101);

              // Frases sarcásticas baseadas na porcentagem
              let frase = "";
              if (random <= 20) frase = "Esse aí é quase um santo! 😇";
              else if (random <= 50)
                frase = "Hmm... já começou a olhar pros lados. 👀";
              else if (random <= 80)
                frase =
                  "⚡ Perigo! Pode sumir e voltar com desculpa esfarrapada.";
              else
                frase =
                  "🔥 100% infiel! Nem o celular fica desbloqueado perto de você.";

              let barra =
                "█".repeat(Math.floor(random / 10)) +
                "░".repeat(10 - Math.floor(random / 10));

              keisen.sendMessage(
                from,
                {
                  image: {
                    url: `https://storage.oberonhosting.com.br/media/744d0516ce7ea886.jpg`,
                  },
                  caption:
                    `💔 Análise concluída!\n\n` +
                    `👤 Usuário: *@${sender_ou_n.split("@")[0]}*\n` +
                    `📊 Infidelidade: *${random}%*\n\n` +
                    `📈 Barra de Infidelidade:\n[${barra}]\n\n` +
                    `💬 ${frase}`,
                  mentions: [sender_ou_n],
                },
                { quoted: info }
              );
            }, 7000);
            break;
            
case 'linda':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a ficha de linda @${sender_ou_n.split("@")[0]}, aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: lindacmd},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser linda?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'punheteiro':
const aletl = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
break


case 'transar':
if (!isGroup) return reply(Res_SoGrupo);
if (!menc_os2 || menc_jid2[1])
return reply("Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @."
);
await keisen.sendMessage(
from,
{
video: {
url: `https://files.catbox.moe/ep85ii.mp4`,
},
gifPlayback: true,
caption: `vc tratou super bem comeu cuzin bem gostoso a(o) *@${menc_os2.split("@")[0]}*`,
mentions: [menc_os2],
},
{quoted: selo}
);
break;

case 'fuder':
if (!isGroup) return reply(Res_SoGrupo);
if (!menc_os2 || menc_jid2[1])
return reply("Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @."
);
await keisen.sendMessage(
from,
{
video: {
url: `https://files.catbox.moe/y383ws.mp4`,
},
gifPlayback: true,
caption: `🫣vc acabou de fuder bem Gostosinho a(o) *@${menc_os2.split("@")[0]}*`,
mentions: [menc_os2],
},
{quoted: selo}
);
break;

case 'estrupar':
if (!isGroup) return reply(Res_SoGrupo);
if (!menc_os2 || menc_jid2[1])
return reply("Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @."
);
await keisen.sendMessage(
from,
{
video: {
url: `https://files.catbox.moe/2f3naz.mp4`,
},
gifPlayback: true,
caption: `Eita 🫣 acabou de ser estrupada(o)@${menc_os2.split('@')[0]} bem Gostosinho `,
mentions: [menc_os2],
},
{quoted: selo}
);
break

case 'chupar':
if (!isGroup) return reply(Res_SoGrupo);
if (!menc_os2 || menc_jid2[1])
return reply("Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @."
);
await keisen.sendMessage(
from,
{
video: {
url: `https://files.catbox.moe/9heeq5.mp4`,
},
gifPlayback: true,
caption: `🫣Eita acabou de levar umachupada bem gostosa🤤 @${menc_os2.split('@')[0]}`,
mentions: [menc_os2],
},
{quoted: selo}
);
break

case 'gostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imggostoso},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
gifPlayback: true,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'gostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imggostosa},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
gifPlayback: true,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'sigma':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgsigma},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'beta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgbeta},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'baiano':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgbaiano},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'baiana':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await keisen.sendMessage(from, {
text:`Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
const random = `${Math.floor(Math.random() * 110)}`
await keisen.sendMessage(from, {
image: {url: imgbaiana},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'gay':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

await keisen.sendMessage(from, {
text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})

setTimeout(async () => {
let percent = Math.floor(Math.random() * 110)
let status = ''

if(percent < 20) status = 'hmm... você é hetero...'
else if(percent <= 50) status = '+/- boiola'
else if(percent <= 80) status = 'tenho minha desconfiança...'
else status = 'você é gay...'

await keisen.sendMessage(from, {
image: {url: imggay},
caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${percent}% homossexual*, ${status}`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

await keisen.sendMessage(from, {
text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})

setTimeout(async () => {
let percent = Math.floor(Math.random() * 110)
let status = ''

if(percent < 20) status = 'Não é feio'
else if(percent <= 50) status = 'Meio feio'
else if(percent <= 80) status = 'Feio moderado'
else status = 'Feio demais'

await keisen.sendMessage(from, {
image: {url: imgfeio},
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${percent}%*, ${status}`,
contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
}, 7000)
break

case 'soco':
case 'socar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um soco, a mensagem ou o @')
const frases = [`Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um golpe fatal!`, `Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te nocautear!`, `Olá @${menc_os2.split('@')[0]}, você foi atingido pelo @${sender.split('@')[0]}!`]
const videos = [soco]
const fraseEscolhida = frases[Math.floor(Math.random() * frases.length)]
const videoEscolhido = await getBuffer(videos[Math.floor(Math.random() * videos.length)])
await keisen.sendMessage(from, {video: videoEscolhido, gifPlayback: true, caption: fraseEscolhida, contextInfo: {...NkChannelKk, mentionedJid: [sender, menc_os2]}}, {quoted: selo})
break


case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`);
ppt = ["pedra", "papel", "tesoura"];
ppy = ppt[Math.floor(Math.random() * ppt.length)];
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {var tes = "Vitória do jogador"}
if(vit == "derrota") {var tes = "A vitória é do BOT"} 
if(vit == "empate") {var tes = "O jogo terminou em empate"}
reply(`*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`);
break


case 'chute':
case 'chutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um chute, a mensagem ou o @')

await keisen.sendMessage(from, {
video: {url: chutecmd},
gifPlayback: true,
caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'dogolpe':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")

const golpes = ["𝐄𝐌 𝐈𝐋𝐔𝐃𝐈𝐑 𝐏𝐄𝐒𝐒𝐎𝐀𝐒", "𝐄𝐌 𝐅𝐄𝐑𝐈𝐑 𝐎𝐒 𝐒𝐄𝐍𝐓𝐈𝐌𝐄𝐍𝐓𝐎𝐒", "𝐄𝐌 𝐃𝐀𝐑 𝐂𝐇𝐈𝐅𝐑𝐄"]
const golpeEscolhido = golpes[Math.floor(Math.random() * golpes.length)]

await keisen.sendMessage(from, {
text: `𝐎(𝐀) *@${menc_os2.split("@")[0]}* 𝐄 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈𝐒𝐓𝐀: ${golpeEscolhido}.`,
contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'shipo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.')

const parceiro = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
const porcentagem = Math.floor(Math.random() * 100)

await keisen.sendMessage(from, {
text: `💘 𝐄𝐔 𝐒𝐇𝐈𝐏𝐎:\n@${parceiro.split('@')[0]}\n\n@${menc_os2.split("@")[0]}\n\n𝐂𝐎𝐌 𝐔𝐌𝐀 𝐏𝐎𝐑𝐂𝐄𝐍𝐓𝐀𝐆𝐄𝐌 𝐃𝐄: *${porcentagem}%*`,
contextInfo: {...NkChannelKk, mentionedJid: [parceiro, menc_os2]}
}, {quoted: selo})
break

case 'casal':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "💘");
let m1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
let m2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
let random = Math.floor(Math.random() * 100)
await keisen.sendMessage(from, { image: {url: casal}, caption: `👩🏼‍❤️‍💋‍👨🏻𝐒𝐈𝐍𝐓𝐎 𝐐𝐔𝐄 𝐄𝐒𝐒𝐄𝐒 𝐃𝐎𝐈𝐒 𝐅𝐎𝐑𝐌𝐀𝐑𝐈𝐀 𝐔𝐌 𝐎𝐓𝐈𝐌𝐎 𝐂𝐀𝐒𝐀𝐋:\n\n- @${m1.split("@")[0]}\n\n- @${m2.split("@")[0]}\n\n𝐂𝐎𝐌 𝐔𝐌𝐀 𝐄𝐒𝐏𝐄𝐂𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄:*${random}%*`, contextInfo: {...NkChannelKk, mentionedJid: [m1, m2]}}, {quoted: selo}).catch(() => {reply(mess.error())})
break

case 'leveling':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)

if(Number(args[0]) === 1) {
if(isLevelingOn) return reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ɴíᴠᴇʟ ᴊá ᴇsᴛᴀᴠᴀ ᴀᴛɪᴠᴏ ᴀɴᴛᴇs ɴᴇssᴇ ɢʀᴜᴘᴏ.*")
dataGp[0].level = true
setGp(dataGp)
reply("*ʟᴇᴠᴇʟɪɴɢ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply("*ʟᴇᴠᴇʟɪɴɢ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.*")
} else {
reply("*ᴀᴅɪᴄɪᴏɴᴀʀ ᴘᴀʀâᴍᴇᴛʀᴏ 1 ᴏᴜ 0 ᴀᴏ ʟᴀᴅᴏ ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ғᴀᴠᴏʀ sᴇɴʜᴏʀ(ᴀ)!*")
}
break
case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply(mess.onlyAdmins())
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `*ʀᴀɴᴋ ʟᴇᴠᴇʟ* - [Type: *Global*]\n–`
for (i = 0; i < totalR; i++) {
if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🤍"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🤍"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🤍"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🤍"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I ❤️‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II ❤️‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III ❤️‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV ❤️‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V ❤️‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Legancy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else {
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break


case 'patente':
case 'level':
if (!isGroup) return reply(mess.onlyAdmins())
if (!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)

if (JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
if (levelstts < 0) return reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)

var newlevel = Number(level2[levelstts].contador) || 0
var newpatente = "Bronze I"
var newcont = 100
var newtt = 0
var nagaPor = 0
var nagaibis = 0
var returnP = ``
var localeL = []
var rankingUser = 0

if (newlevel < 100) newpatente = "Bronze I"
else if (newlevel < 200) newpatente = "Bronze II"
else if (newlevel < 300) newpatente = "Bronze III"
else if (newlevel < 400) newpatente = "Prata I"
else if (newlevel < 500) newpatente = "Prata II"
else if (newlevel < 600) newpatente = "Prata III"
else if (newlevel < 700) newpatente = "Ouro I"
else if (newlevel < 800) newpatente = "Ouro II"
else if (newlevel < 900) newpatente = "Ouro III"
else if (newlevel < 1200) newpatente = "Ouro IV"
else if (newlevel < 1500) newpatente = "Platina I"
else if (newlevel < 1800) newpatente = "Platina II"
else if (newlevel < 2100) newpatente = "Platina III"
else if (newlevel < 2700) newpatente = "Platina IV"
else if (newlevel < 3300) newpatente = "Diamante I"
else if (newlevel < 3900) newpatente = "Diamante II"
else if (newlevel < 4500) newpatente = "Diamante III"
else if (newlevel < 5000) newpatente = "Diamante IV"
else if (newlevel < 5500) newpatente = "Paladino I"
else if (newlevel < 6500) newpatente = "Paladino II"
else if (newlevel < 7500) newpatente = "Paladino III"
else if (newlevel < 9000) newpatente = "Paladino IV"
else if (newlevel < 10500) newpatente = "Mestre I"
else if (newlevel < 12000) newpatente = "Mestre II"
else if (newlevel < 13500) newpatente = "Mestre III"
else if (newlevel < 15000) newpatente = "Mestre IV"
else if (newlevel < 20000) newpatente = "Mestre V"
else if (newlevel < 25000) newpatente = "Desafiante I"
else if (newlevel < 30000) newpatente = "Desafiante II"
else if (newlevel < 35000) newpatente = "Desafiante III"
else if (newlevel < 40000) newpatente = "Desafiante IV"
else if (newlevel < 50000) newpatente = "Desafiante V"
else if (newlevel < 60000) newpatente = "Usuário Superior I"
else if (newlevel < 70000) newpatente = "Usuário Superior II"
else if (newlevel < 80000) newpatente = "Mestre Supremo I"
else if (newlevel < 90000) newpatente = "Mestre Supremo II"
else if (newlevel < 100000) newpatente = "Mestre Supremo III"
else if (newlevel < 150000) newpatente = "Conquistador I"
else if (newlevel < 200000) newpatente = "Conquistador II"
else if (newlevel < 300000) newpatente = "Conquistador III"
else if (newlevel < 400000) newpatente = "Desbravador I"
else if (newlevel < 500000) newpatente = "Desbravador II"
else if (newlevel < 1000000) newpatente = "Desbravador III"
else if (newlevel < 1500000) newpatente = "Grande Mestre I"
else if (newlevel < 2000000) newpatente = "Grande Mestre II"
else if (newlevel < 5000000) newpatente = "Grande Mestre III"
else if (newlevel < 10000000) newpatente = "Legancy X"
else newpatente = "Veterano"

if (newpatente == "Bronze I") { newcont = 100; newtt = 0 }
else if (newpatente == "Bronze II") { newcont = 200; newtt = 100 }
else if (newpatente == "Bronze III") { newcont = 300; newtt = 200 }
else if (newpatente == "Prata I") { newcont = 400; newtt = 300 }
else if (newpatente == "Prata II") { newcont = 500; newtt = 400 }
else if (newpatente == "Prata III") { newcont = 600; newtt = 500 }
else if (newpatente == "Ouro I") { newcont = 700; newtt = 600 }
else if (newpatente == "Ouro II") { newcont = 800; newtt = 700 }
else if (newpatente == "Ouro III") { newcont = 900; newtt = 800 }
else if (newpatente == "Ouro IV") { newcont = 1200; newtt = 900 }
else if (newpatente == "Platina I") { newcont = 1500; newtt = 1200 }
else if (newpatente == "Platina II") { newcont = 1800; newtt = 1500 }
else if (newpatente == "Platina III") { newcont = 2100; newtt = 1800 }
else if (newpatente == "Platina IV") { newcont = 2700; newtt = 2100 }
else if (newpatente == "Diamante I") { newcont = 3300; newtt = 2700 }
else if (newpatente == "Diamante II") { newcont = 3900; newtt = 3300 }
else if (newpatente == "Diamante III") { newcont = 4500; newtt = 3900 }
else if (newpatente == "Diamante IV") { newcont = 5000; newtt = 4500 }
else if (newpatente == "Paladino I") { newcont = 5500; newtt = 5000 }
else if (newpatente == "Paladino II") { newcont = 6500; newtt = 5500 }
else if (newpatente == "Paladino III") { newcont = 7500; newtt = 6500 }
else if (newpatente == "Paladino IV") { newcont = 9000; newtt = 7500 }
else if (newpatente == "Mestre I") { newcont = 10500; newtt = 9000 }
else if (newpatente == "Mestre II") { newcont = 12000; newtt = 10500 }
else if (newpatente == "Mestre III") { newcont = 13500; newtt = 12000 }
else if (newpatente == "Mestre IV") { newcont = 15000; newtt = 13500 }
else if (newpatente == "Mestre V") { newcont = 20000; newtt = 15000 }
else if (newpatente == "Desafiante I") { newcont = 25000; newtt = 20000 }
else if (newpatente == "Desafiante II") { newcont = 30000; newtt = 25000 }
else if (newpatente == "Desafiante III") { newcont = 35000; newtt = 30000 }
else if (newpatente == "Desafiante IV") { newcont = 40000; newtt = 35000 }
else if (newpatente == "Desafiante V") { newcont = 50000; newtt = 40000 }
else if (newpatente == "Usuário Superior I") { newcont = 60000; newtt = 50000 }
else if (newpatente == "Usuário Superior II") { newcont = 70000; newtt = 60000 }
else if (newpatente == "Mestre Supremo I") { newcont = 80000; newtt = 70000 }
else if (newpatente == "Mestre Supremo II") { newcont = 90000; newtt = 80000 }
else if (newpatente == "Mestre Supremo III") { newcont = 100000; newtt = 90000 }
else if (newpatente == "Conquistador I") { newcont = 150000; newtt = 100000 }
else if (newpatente == "Conquistador II") { newcont = 200000; newtt = 150000 }
else if (newpatente == "Conquistador III") { newcont = 300000; newtt = 200000 }
else if (newpatente == "Desbravador I") { newcont = 400000; newtt = 300000 }
else if (newpatente == "Desbravador II") { newcont = 500000; newtt = 400000 }
else if (newpatente == "Desbravador III") { newcont = 1000000; newtt = 500000 }
else if (newpatente == "Grande Mestre I") { newcont = 1500000; newtt = 1000000 }
else if (newpatente == "Grande Mestre II") { newcont = 2000000; newtt = 1500000 }
else if (newpatente == "Grande Mestre III") { newcont = 5000000; newtt = 2000000 }
else if (newpatente == "Legancy X") { newcont = 10000000; newtt = 5000000 }
else if (newpatente == "Veterano") { newcont = newlevel; newtt = 10000000 }

if (newlevel < 10000000) {
nagaPor = Number(((newlevel - newtt) / (newcont - newtt)) * 100).toFixed(1)
nagaibis = Math.max(0, newcont - newlevel)

if (Number(nagaPor) >= 100) returnP = `〘██████████〙${nagaPor}%`
else if (Number(nagaPor) >= 90) returnP = `〘█████████▒〙${nagaPor}%`
else if (Number(nagaPor) >= 80) returnP = `〘████████▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 70) returnP = `〘███████▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 60) returnP = `〘██████▒▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 50) returnP = `〘█████▒▒▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 40) returnP = `〘████▒▒▒▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 30) returnP = `〘███▒▒▒▒▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 20) returnP = `〘██▒▒▒▒▒▒▒▒〙${nagaPor}%`
else if (Number(nagaPor) >= 10) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${nagaPor}%`
else returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${nagaPor}%`
} else {
returnP = ``
nagaibis = 0
}

localeL = [...level2].sort((a, b) => b.contador - a.contador)
rankingUser = localeL.map(i => i.id).indexOf(sender) + 1

leveltxt = `• Usuário: *@${sender.split("@")[0]}*
• Você está atualmente no level *${level2[levelstts].level}* e na patente *${newpatente}*
• Sua quantidade de XP é: *${level2[levelstts].contador}*
\t[•] -> ${newlevel < 10000000 ? `*${returnP}*` : ``}
–
${newlevel < 10000000 ? `• Para subir para o próximo level, alcance essa quantidade: *${newcont}*.
• Falta${Number(nagaibis) > 1 ? `m` : ``} apenas *${nagaibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`

try { uk = await keisen.profilePictureUrl(sender) } catch (erro) { uk = 'https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg' }
gerarBufferLV = await getBuffer(uk)
photoULV = await upload(gerarBufferLV)

await keisen.sendMessage(from, {
image: {
url: `https://tokito-apis.site/canvas/levelcard?foto=${encodeURIComponent(photoULV)}&nome=${encodeURIComponent(getName(sender) || "Usuário")}&xp_before=${encodeURIComponent(level2[levelstts].contador)}&xp_after=${encodeURIComponent(newcont)}&level=${encodeURIComponent(level2[levelstts].level)}&ranking=${encodeURIComponent(rankingUser)}&patente=${encodeURIComponent(newpatente)}&fundo=${encodeURIComponent(fundolevel || "")}`
},
caption: leveltxt,
mentions: [sender]
}, { quoted: selo })

} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break


case 'addlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ʟᴇᴠᴇʟ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ...*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("*ᴛᴇᴍ ǫᴜᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ʟᴇᴠᴇʟ.*")
if(q.includes(".")) return reply("*ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ.*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ʟᴇᴠᴇʟ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("*ᴛᴇᴍ ǫᴜᴇ ᴛɪʀᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ʟᴇᴠᴇʟ.*");
if(q.includes(".")) return reply("*ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ.*");
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0]);
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'addxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ xᴘ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("*ᴛᴇᴍ ǫᴜᴇ ᴀᴅᴅ ᴀᴏ ᴍᴇɴᴏs 1 ᴅᴇ xᴘ*")
if(q.includes(".")) return reply("*ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ xᴘ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʀᴇᴛɪʀᴀʀ*")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("*ᴛᴇᴍ ǫᴜᴇ ᴛɪʀᴀʀ ᴀᴏ ᴍᴇɴᴏs 1 ᴅᴇ xᴘ*")
if(q.includes(".")) return reply("*ɴãᴏ ᴘᴏᴅᴇ ɴúᴍᴇʀᴏ ᴅᴇᴄɪᴍᴀʟ*")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'blocklevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!menc_os2) return reply("*ᴍᴀʀǫᴜᴇ ᴏ @ ᴏᴜ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("*ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ᴘʀᴇsᴇɴᴛᴇ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs.*")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return reply("*ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ᴊá ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
level2[AB].block = true
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply("*ᴜsᴜáʀɪᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴄᴏᴍ sᴜᴄᴇssᴏ... ᴀs ɪɴᴛᴇʀᴀçõᴇs ᴅᴏ ᴍᴇsᴍᴏ ɴãᴏ sᴇʀãᴏ ᴍᴀɪs ᴄᴏɴᴛᴀʙɪʟɪᴢᴀᴅᴀs!*")
break

case 'unblocklevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!menc_os2) return reply("*ᴍᴀʀǫᴜᴇ ᴏ @ ᴏᴜ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ.*")
if(!JSON.stringify(level2).includes(menc_os2)) return reply("*ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ᴘʀᴇsᴇɴᴛᴇ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇɴs.*");
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return reply("*ᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ɴãᴏ ᴇsᴛá ʙʟᴏǫᴜᴇᴀᴅᴏ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ!*")
level2[AB].block = false
fs.writeFileSync("./DADOS DO KEISEN/usuarios/leveling.json", JSON.stringify(level2))
reply("*ᴜsᴜáʀɪᴏ ᴅᴇsʙʟᴏǫᴜᴇᴀᴅᴏ ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴄᴏᴍ sᴜᴄᴇssᴏ! ᴀs ɪɴᴛᴇʀᴀçõᴇs ᴅᴏ ᴜsᴜáʀɪᴏ ᴍᴇɴᴄɪᴏɴᴀᴅᴏ ᴠᴏʟᴛᴀʀãᴏ ᴀ sᴇʀ ᴄᴏɴᴛᴀʙɪʟɪᴢᴀᴅᴀs.*")
break

case 'gozar':
case 'goza':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "😈")
if(!menc_os2 || menc_jid2[1]) return reply('*ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ɢᴏᴢᴀʀ 🙈*')

const gozacao = ['Você acabou de gozar na boca do(a)', 'Você acabou de gozar no cuzinho do(a)', 'Você acabou de gozar na bucetinha do(a)', 'Você acabou de gozar no pé do(a)', 'Você acabou de gozar na cabeça do(a)', 'Você acabou de gozar na cara do(a)'] 
const gozarEscolhido = gozacao[Math.floor(Math.random() * gozacao.length)]
await keisen.sendMessage(from, {video: {url: Gozar}, gifPlayback: true, caption: `${gozarEscolhido} @${menc_os2.split('@')[0]} 🥵`, contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo})
break

case 'wame':
reply(`*⏤͟͟͞͞Aqui está o link do seu número do Whatsapp* 🙇‍♂️ ↴\n\n • https://wa.me/${sender.split("@")[0]}${q ? "?text="+ q.replace(/ /g, "%20") : ""}`);
                    break;

case 'vab':
case 'vcprefere':
case 'voceprefere': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🎭');
try {
const array = await psycatgames();
const sorteio = array[Math.floor(Math.random() * array.length)];
const { pergunta1, pergunta2 } = sorteio.questions[Math.floor(Math.random() * sorteio.questions.length)];
await sendPoll(keisen, from, `*🤔 𝐕𝐎𝐂𝐄̂ 𝐏𝐑𝐄𝐅𝐄𝐑𝐄 ⧽*\n•\n> 1️⃣ - ${pergunta1}\n-\n> 2️⃣ - ${pergunta2}\n•\n⚡ 𝐄𝐒𝐂𝐎𝐋𝐇𝐀 𝐁𝐄𝐌...`, [ '✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟏 ✰', '✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟐 ✰' ]);
} catch (err) {
console.error("Erro no comando 'Você Prefere':", err);
await replyWithReaction(mess.error(), { react: { text: '💀', key: info.key } });
}
break;
}

case 'eununca': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '💧');
try {
const Never = tools.iNever[Math.floor(Math.random() * tools.iNever.length)];
await sendPoll(keisen, from, `*❓𝑃𝐸𝑅𝐺𝑈𝑁𝑇𝐴 ⧽*\n\n> ${Never}\n\n✅ 𝐕𝐎𝐂𝐄̂ 𝐉𝐀 𝐎𝐔 𝐍𝐔𝐍𝐂𝐀? ❎`, [ `✰ 𝐄𝐔 𝐉𝐀 😳 ✰`, `✰ 𝐄𝐔 𝐍𝐔𝐍𝐂𝐀 👀 ✰` ]
);
} catch (err) {
console.error("Erro no comando 'Eu Nunca':", err);
await replyWithReaction(mess.error(), { react: { text: '🕯️', key: info.key } });
}
break;
}

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGay = []
let rankGay = `🏳️‍🌈 RANK DOS 5 MAIS GAY DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsGay.push(membro)
rankGay += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image: {url: rnkgay}, caption: rankGay, contextInfo:{...NkChannelKk, mentionedJid: mentionsGay}}, {quoted: selo})
break

case 'rankcasalzin': case 'rankcasais': case 'rankcasal':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, "💞");
let mentionsCasal = []
let rankCasal = `❣ RANK CASAIS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const m1 = somembros[Math.floor(Math.random()*somembros.length)];
const m2 = somembros[Math.floor(Math.random()*somembros.length)];
mentionsCasal.push(m1, m2);
const porcent = Math.floor(Math.random()*101);
rankCasal += `• ${i+1}° ${porcent}% - @${m1.split('@')[0]} e @${m2.split('@')[0]}\n\n`;
}
await keisen.sendMessage(from, {image: {url: rankcasal}, caption: rankCasal, contextInfo:{...NkChannelKk, mentionedJid: mentionsCasal}}, {quoted: selo})
break

case 'rankfalido': case 'rankfalidos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsFalido = []
let rankFalido = `💸 RANK DOS 5 MAIS FALIDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)];
mentionsFalido.push(membro);
rankFalido += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await keisen.sendMessage(from, {image: {url: rankfalido}, caption: rankFalido, contextInfo:{...NkChannelKk, mentionedJid: mentionsFalido}}, {quoted: selo})
break

case 'rankcu':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsCu = []
let rankCu = `🍑 RANK DOS 5 MAIS CUZUDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)];
mentionsCu.push(membro);
rankCu += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await keisen.sendMessage(from, {image: {url: rankcu}, caption: rankCu, contextInfo:{...NkChannelKk, mentionedJid: mentionsCu}}, {quoted: selo})
break

case 'rankbct': case 'rankbuceta': case 'rankbucetudas':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsBCT = []
let rankBCT = `🔥 RANK DAS 5 MAIS BUCETUDAS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)];
mentionsBCT.push(membro);
rankBCT += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await keisen.sendMessage(from, {image: {url: rankbct}, caption: rankBCT, contextInfo:{...NkChannelKk, mentionedJid: mentionsBCT}}, {quoted: selo})
break

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGado = []
let rankGado = `🏆 TOP 5 MAIS GADOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsGado.push(membro)
rankGado += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image: {url: rnkgado}, caption: rankGado, contextInfo:{...NkChannelKk, mentionedJid: mentionsGado}}, {quoted: selo})
break

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsCorno = []
let rankCorno = `🐂 TOP 5 MAIS CHIFRUDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)];
mentionsCorno.push(membro);
rankCorno += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await keisen.sendMessage(from, {image: {url: rnkcorno}, caption: rankCorno, contextInfo:{...NkChannelKk, mentionedJid: mentionsCorno}}, {quoted: selo})
break

case 'surubao': case 'suruba':
await reagir(from, "😈")
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 1000) return reply("Coloque um número menor, ou seja, abaixo de *1000*.")
const frasesSuruba = [
`tá querendo relações sexuais a ${q}, topa?`,
`quer que ${q} pessoas venham de chicote, algema e corda de alpinista.`,
`quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`
]
const fraseEscolhidakk = frasesSuruba[Math.floor(Math.random()*frasesSuruba.length)]
let mentionsSuruba = [sender]
let msgSuruba = `😝 @${sender.split('@')[0]} ${fraseEscolhidakk}\n\n`
for(let i=0;i<q;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)];
mentionsSuruba.push(membro)
msgSuruba += `@${membro.split('@')[0]}\n`
}
await keisen.sendMessage(from, {text: msgSuruba, contextInfo:{...NkChannelKk, mentionedJid: mentionsSuruba}}, {quoted: selo})
break

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGostoso = []
let rankGostoso = `🔥 RANK DOS 5 MAIS GOSTOSOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsGostoso.push(membro)
rankGostoso += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image: {url: rnkgostoso}, caption: rankGostoso, contextInfo:{...NkChannelKk, mentionedJid: mentionsGostoso}}, {quoted: selo})
break

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGostosa = []
let rankGostosa = `😏 RANK DAS 5 MAIS GOSTOSAS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsGostosa.push(membro)
rankGostosa += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image: {url: rnkgostosa}, caption: rankGostosa, contextInfo:{...NkChannelKk, mentionedJid: mentionsGostosa}}, {quoted: selo})
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsNazista = []
let rankNazista = `💂‍♂ RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐\n\n`;
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsNazista.push(membro)
rankNazista += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image: {url: rnknazista}, caption: rankNazista, contextInfo:{...NkChannelKk, mentionedJid: mentionsNazista}}, {quoted: selo})
break

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsOtaku = []
let rankOtaku = `㊙ RANK DOS 5 MAIS OTAKUS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsOtaku.push(membro)
rankOtaku += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkotaku}, caption: rankOtaku, contextInfo:{...NkChannelKk, mentionedJid: mentionsOtaku}}, {quoted: selo})
break

case 'ranksigma': case 'ranksigmas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSigma = []
let rankSigma = `🗿🍷 RANK DOS 5 MAIS SIGMAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsSigma.push(membro)
rankSigma += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnksigma}, caption: rankSigma, contextInfo:{...NkChannelKk, mentionedJid: mentionsSigma}}, {quoted: selo})
break

case 'rankbeta': case 'rankbetas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBeta = []
let rankBeta = `😂 RANK DOS 5 MAIS BETAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsBeta.push(membro)
rankBeta += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkbeta}, caption: rankBeta, contextInfo:{...NkChannelKk, mentionedJid: mentionsBeta}}, {quoted: selo})
break

case 'rankbaiano': case 'rankbaianos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBaiano = []
let rankBaiano = `💤 RANK DOS 5 MAIS BAIANOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsBaiano.push(membro)
rankBaiano += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkbaiano}, caption: rankBaiano, contextInfo:{...NkChannelKk, mentionedJid: mentionsBaiano}}, {quoted: selo})
break

case 'rankbaiana': case 'rankbaianas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBaiana = []
let rankBaiana = `😴 RANK DAS 5 MAIS BAIANAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsBaiana.push(membro)
rankBaiana += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkbaiana}, caption: rankBaiana, contextInfo:{...NkChannelKk, mentionedJid: mentionsBaiana}}, {quoted: selo})
break

case 'rankcarioca': case 'rankcariocas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsCarioca = []
let rankCarioca = `🔫 RANK DOS 5 MAIS CARIOCAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsCarioca.push(membro)
rankCarioca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkcarioca}, caption: rankCarioca, contextInfo:{...NkChannelKk, mentionedJid: mentionsCarioca}}, {quoted: selo})
break

case 'ranklouco': case 'rankloucos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsLouco = []
let rankLouco = `💀 RANK DOS 5 MAIS LOUCOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsLouco.push(membro)
rankLouco += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnklouco}, caption: rankLouco, contextInfo:{...NkChannelKk, mentionedJid: mentionsLouco}}, {quoted: selo})
break

case 'ranklouca': case 'rankloucas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsLouca = []
let rankLouca = `💀 RANK DAS 5 MAIS LOUCAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsLouca.push(membro)
rankLouca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnklouca}, caption: rankLouca, contextInfo:{...NkChannelKk, mentionedJid: mentionsLouca}}, {quoted: selo})
break

case 'ranksafada': case 'ranksafadas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSafada = []
let rankSafada = `🔥 RANK DAS 5 MAIS SAFADINHAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsSafada.push(membro)
rankSafada += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnksafada}, caption: rankSafada, contextInfo:{...NkChannelKk, mentionedJid: mentionsSafada}}, {quoted: selo})
break

case 'ranksafado': case 'ranksafados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSafado = []
let rankSafado = `🥵 RANK DOS 5 MAIS SAFADINHOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsSafado.push(membro)
rankSafado += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnksafado}, caption: rankSafado, contextInfo:{...NkChannelKk, mentionedJid: mentionsSafado}}, {quoted: selo})
break

case 'rankmacaco': case 'rankmacacos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsMacaco = []
let rankMacaco = `🐒 RANK DOS 5 MAIS MACACOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsMacaco.push(membro)
rankMacaco += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkmacaco}, caption: rankMacaco, contextInfo:{...NkChannelKk, mentionedJid: mentionsMacaco}}, {quoted: selo})
break

case 'rankmacaca': case 'rankmacacas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsMacaca = []
let rankMacaca = `🙈 RANK DAS 5 MAIS MACACAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsMacaca.push(membro)
rankMacaca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkmacaca}, caption: rankMacaca, contextInfo:{...NkChannelKk, mentionedJid: mentionsMacaca}}, {quoted: selo})
break

case 'rankputa': case 'rankputas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsPuta = []
let rankPuta = `🔞 RANK DAS 5 MAIS PUTAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsPuta.push(membro)
rankPuta += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkputa}, caption: rankPuta, contextInfo:{...NkChannelKk, mentionedJid: mentionsPuta}}, {quoted: selo})
break

case 'rankpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsPau = []
let rankPau = `🍆 RANK DOS 5 MAIORES PAUS DO GRUPO\n\n`
for(let i=0;i<5;i++){
const membro = somembros[Math.floor(Math.random()*somembros.length)]
mentionsPau.push(membro)
rankPau += `• ${i+1}° ${Math.floor(Math.random()*100)}cm - @${membro.split('@')[0]}\n\n`
}
await keisen.sendMessage(from, {image:{url: rnkpau}, caption: rankPau, contextInfo:{...NkChannelKk, mentionedJid: mentionsPau}}, {quoted: selo})
break

//===========[ FIM JOGOS/BRINCADEIRAS/RANKS=========\\

//==============[ RANK ATIVO E INATIVO ]===========\\
case 'atividade':
case 'atividades': {
if (!isGroupAdmins && !issupre && !ischyt) return reply(mess.onlyAdmins());

const groupIndex = countMessage.findIndex(g => g.groupId === from);
if (groupIndex === -1 || countMessage[groupIndex].numbers.length === 0) 
return reply('*"NADA FOI ENCONTRADO... GRUPO MORTO? 💀"*');

let mentionsList = [];
let texto = `- 「 *𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄𝐒 𝐃𝐎𝐒 𝐌𝐄𝐌𝐁𝐑𝐎𝐒* 」\n\n`;
for (const u of countMessage[groupIndex].numbers) {
mentionsList.push(u.id);
texto += mess.atividade(u);
}
await keisen.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
}, {quoted: selo})
break;
}

case 'rankativo':
case 'rankativos': {
if (!isGroup) return reply(mess.onlyGroup());
const groupIndex = countMessage.findIndex(g => g.groupId === from);
if (groupIndex === -1) return reply('*Não há dados do grupo.*');

const sorted = [...countMessage[groupIndex].numbers].sort((a, b) =>
(b.messages + b.cmd_messages + (b.figus || 0)) - (a.messages + a.cmd_messages + (a.figus || 0))
);

let mentionsList = [];
let texto = `- 「 *𝐑𝐀𝐍𝐊 𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐂𝐇𝐀𝐓* 」\n\n`;
for (let i = 0; i < Math.min(5, sorted.length); i++) {
const u = sorted[i];
mentionsList.push(u.id);
texto += mess.rankativo(u, i);
}
await keisen.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
}, {quoted: selo})
break;
}

case 'rankinativo':
case 'rankinativos': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
const groupIndex = getGroupIndex(from);
if (groupIndex === -1) return;

const inativos = countMessage[groupIndex].numbers
.filter(u => u.messages <= 1)
.sort((a, b) => (b.messages + b.cmd_messages) - (a.messages + a.cmd_messages));

if (inativos.length === 0) return reply('*Todos estão ativos no grupo! ✅*');

let mentionsList = [];
let texto = `- 「 *𝐈𝐍𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎* 」\n\n`;
for (let i = 0; i < Math.min(5, inativos.length); i++) {
const u = inativos[i];
mentionsList.push(u.id);
texto += mess.rankinativo(u, i);
}
await keisen.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
}, {quoted: selo})
break;
}

case 'check':
case 'checkativo': {
if (!isGroup) return reply(mess.onlyGroup());
const groupIndex = getGroupIndex(from);
if (groupIndex === -1) return reply('O bot não tem ainda dados sobre o grupo');
if (!menc_os2 || Array.isArray(menc_os2) || menc_os2.includes(',')) 
return reply('Marque apenas 1 @ por vez para verificar a atividade.');
const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === menc_os2);
if (userIndex >= 0) {
const u = countMessage[groupIndex].numbers[userIndex];
await keisen.sendMessage(from, {
            text: mess.check(u),
            contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
} else {
await keisen.sendMessage(from, {
            text: `*SEM DADOS SOBRE @${menc_os2.split('@')[0]} NESTE GRUPO...*`,
            contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
}
break;
}

case 'me':
case 'mecheck':
case 'checkme': {
if (!isGroup) return reply(mess.onlyGroup());
const groupIndex = getGroupIndex(from);
if (groupIndex === -1) return reply('O bot ainda não tem dados sobre este grupo.');
const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === sender);
if (userIndex >= 0) {
const u = countMessage[groupIndex].numbers[userIndex];
await keisen.sendMessage(from, {
text: mess.checkme(u),
contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo})
} else {
await keisen.sendMessage(from, {
text: `*SEM DADOS SOBRE @${sender.split('@')[0]} NESTE GRUPO...*`,
contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo})
}
break;
}

case 'inativos':
case 'inativo': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!q || q.match(/[a-z]/i)) return reply(`Exemplo: ${prefix + command} 0\nMostrará membros com 0 mensagens ou menos.`);

const groupIndex = getGroupIndex(from);
const limite = Number(q.trim());
const inativos = countMessage[groupIndex].numbers
.filter(u => u.messages <= limite && u.cmd_messages <= limite && (u.figus || 0) <= limite)
.map(u => u.id);

if (inativos.length === 0) return reply(`Não tem pessoas com ${limite} mensagens ou menos.`);

let texto = `Usuários com *${limite}* mensagens ou menos:\n–\n`;
inativos.forEach((id, i) => {
texto += `*${i+1}.* @${id.split('@')[0]}\n`;
});

await mention(texto, inativos, true);
break;
}

case 'banghost': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!q || q.match(/[a-z]/i) || q.length > 3)
return reply(`*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴍɪɴɪᴍᴀ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ 🤷‍♂️*\n*Exemplo:* ${prefix + command} 5`);
const limite = Number(q.trim());
let ind = countMessage.map(i => i.groupId).indexOf(from);
if (ind === -1) return reply('Não há dados deste grupo ainda.');
const groupData = countMessage[ind];
const groupMemberIds = groupMembers.map(m => m.jid); 
const membersToRemove = groupData.numbers
.filter(u => {
            const msgs = u.messages || 0;
            const cmds = u.cmd_messages || 0;
            const figus = u.figus || 0;
            const imgs = u.imagens || 0;
            const vids = u.videos || 0;
            const auds = u.audios || 0;
            const docs = u.documentos || 0;
            return (msgs <= limite && cmds <= limite && figus <= limite && imgs <= limite && vids <= limite && auds <= limite && docs <= limite );
})
.filter(u => !groupAdmins.includes(u.id))
.filter(u => !numerodono.includes(u.id))
.filter(u => u.id !== botNumber)
.filter(u => groupMemberIds.includes(u.id)) 
.map(u => u.id);
if (membersToRemove.length === 0)
return reply(`*ɴᴀᴏ ᴛᴇᴍ ᴍᴇᴍʙʀᴏꜱ ᴄᴏᴍ ${limite} ᴍᴇɴꜱᴀɢᴇɴꜱ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ.* 🤷‍♂️`);
try {
await keisen.groupParticipantsUpdate(from, membersToRemove, 'remove');
groupData.numbers = groupData.numbers.filter(u => !membersToRemove.includes(u.id));
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json', JSON.stringify(countMessage, null, 2));
reply(`*ᴛᴏᴛᴀʟ ᴅᴇ ${membersToRemove.length} ᴍᴇᴍʙʀᴏꜱ ʀᴇᴍᴏᴠɪᴅᴏꜱ ᴅᴏ ɢʀᴜᴩᴏ ${groupName} ᴘᴏʀ ᴄᴏɴᴛᴇʀ ${limite} ᴍᴇɴꜱᴀɢᴇɴꜱ.* 🙇‍♂️`);
} catch (err) {
console.error(err);
reply(mess.error());
}
break;
}

case 'limpargp':
case 'limpargp-cnt': {
if (!SoDono) return reply(mess.onlyOwner())
if (!isGroup) return reply(mess.onlyGroup())

const removidos = limparContadorUsuariosFora(from, groupMembers)

fs.writeFileSync(
'./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json',
JSON.stringify(countMessage, null, 2)
)

reply(
`*CONTADOR ATUALIZADO ✅*\n\n` +
`Usuários que não estão mais no grupo removidos: ${removidos}.`
)
break
}




case 'addmsg': {
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
const txt = budy.trim();
const barra = txt.indexOf('|');
if (barra === -1)
return reply(`*🤦‍♂️ ᴠᴏᴄᴇ ᴄᴏʟᴏᴄᴏᴜ ᴇʀʀᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴠᴏᴜ ᴅᴀʀ ᴜᴍ ᴇxᴇᴍᴘʟᴏ:*\n> *⚙️ → ${prefix + command}@ᴜsᴇʀ|100ᴍsɢ 20 ғɪɢ 10 ᴄᴍᴅ..*`);
let alvo;
const ctx = info.message?.extendedTextMessage?.contextInfo;
if (ctx?.mentionedJid?.length)
alvo = ctx.mentionedJid[0];
else {
const num = txt.split(/ +/)[1];
if (num && /^\d+$/.test(num)) alvo = num + "@s.whatsapp.net";
}
if (!alvo) alvo = sender;
alvo = jidNormalizedUser(alvo);
const valoresTxt = txt.slice(barra + 1).trim();
if (!valoresTxt) return reply("*ᴄᴏʟᴏǫᴜᴇ ᴏs ᴠᴀʟᴏʀᴇs ᴀᴘᴏs ᴀ ʙᴀʀʀᴀ ɴᴇ 🙄*\n> *ᴇxᴇᴍᴘʟᴏ /100ɴsɢ 10 ғɪɢ");
const mapa = { msg:'messages', fig:'figus', img:'imagens', vid:'videos', audio:'audios', doc:'documentos', cmd:'cmd_messages'};
const grupo = countMessage.find(g => g.groupId === from);
if (!grupo) return reply("ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ.");
const user = grupo.numbers.find(u => u.id === alvo);
if (!user) return reply("*ᴇʟᴇ ɴᴇᴍ ᴛᴀ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ, ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ғᴀᴄᴀ ᴍᴀɢɪᴄᴀ ᴇ? 🙄*");
const itens = valoresTxt.split(/ +/);
const adicionados = [];
const invalidos = [];
for (const x of itens) {
const m = x.match(/^(\d+)(msg|fig|img|vid|audio|doc|cmd)$/i);
if (!m) { invalidos.push(x); continue; }
const qtd = Number(m[1]);
const tipo = m[2].toLowerCase();
const campo = mapa[tipo];
if (!campo) { invalidos.push(x); continue; }
user[campo] = (user[campo] || 0) + qtd;
adicionados.push(x);
}
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json', JSON.stringify(countMessage));
let resp = `*ᴠᴀʟᴏʀᴇs ᴀᴅɪᴄɪᴏɴᴀᴅᴏs ᴘᴀʀᴀ @${alvo.split("@")[0]} ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*\n`;
if (adicionados.length) resp += `*ᴀᴅɪᴄɪᴏɴᴀᴅᴏs: ${adicionados.join(', ')} 💯*`;
if (invalidos.length)resp += `\n*ɪɴᴠᴀʟɪᴅᴏs: ${invalidos.join(', ')} ❗*`;
await keisen.sendMessage(from,{text: resp, contextInfo: { ...NkChannelKk, mentionedJid: [alvo]}}, { quoted: selo });
break;
}


case 'tirardb':
case 'tirar_docnt': {
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
const groupIndex = getGroupIndex(from);
if (groupIndex === -1) return reply("*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ. 🤷‍♂️*");
let alvo;
if (info.message.extendedTextMessage?.contextInfo?.mentionedJid?.length) {
alvo = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
} else if (args[0]) {
const num = args[0].replace(/\D/g, '');
if (!num) return reply('*ᴠᴏᴄᴇ ᴇʀʀᴏᴜ ᴇᴍ ᴀʟɢᴏ ᴀɪ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*');
alvo = num + '@s.whatsapp.net';
} else {
return reply(`*🤦‍♂️ ᴠᴏᴄᴇ ᴄᴏʟᴏᴄᴏᴜ ᴇʀʀᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴠᴏᴜ ᴅᴀʀ ᴜᴍ ᴇxᴇᴍᴘʟᴏ:*\n> *⚙️ → ${prefix + command} @ᴜsᴇʀ*`);
}
let userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === alvo);
if (userIndex === -1) {
return reply("*ᴇʟᴇ ɴᴇᴍ ᴛᴀ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ, ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ғᴀᴄᴀ ᴍᴀɢɪᴄᴀ ᴇ? 🙄*");
}
countMessage[groupIndex].numbers.splice(userIndex, 1);
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json', JSON.stringify(countMessage));
await keisen.sendMessage(from, {
text: `*ᴄᴇʀᴛᴏ ᴍᴇsᴛʀᴇ, ᴀᴄᴀʙᴇɪ ᴅᴇ ʀᴇᴍᴏᴠᴇʀ ᴏ @${alvo.split('@')[0]} ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ 💁‍♂️*.`,
contextInfo: { mentionedJid: [alvo], ...NkChannelKk }
}, { quoted: selo });
break;
}

case 'limpar_contador':
case 'clean_counter': {
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
const groupIndex = getGroupIndex(from);
if (groupIndex === -1) return reply("*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ. 🤷‍♂️*");
const totalAntes = countMessage[groupIndex].numbers.length;
countMessage[groupIndex].numbers = [];
fs.writeFileSync('./DADOS DO KEISEN/INFO_KEISEN/media/countmsg.json', JSON.stringify(countMessage));
const mensagem = totalAntes > 0 
? `*ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴꜱᴀɢᴇᴍ ᴅᴇꜱᴛᴇ ɢʀᴜᴩᴏ ʟɪᴍᴩᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ), ꜰᴏʀᴀᴍ ɴᴏ ᴛᴏᴛᴀʟ ${totalAntes} ᴄᴏɴᴛᴀᴛᴏꜱ 🙆‍♂️*`
: '*ɴᴇɴʜᴜᴍ ᴄᴏɴᴛᴀᴛᴏ ꜰᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ, ᴇꜱᴛᴀ ᴛᴜᴅᴏ ʟɪᴍᴩᴏ ꜱᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*';
reply(mensagem);
break;
}


//============[ FIM CASES RANK ATIVO/INATIVO ]==========\\

//================[ NAMORO ]===========\\

case 'namorar':
case 'pediremnamoro': {
if (!isGroup) return reply(mess.onlyGroup());
if (!menc_os2) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
if (botNumberLID.includes(menc_os2)) return reply("*ᴇᴜ sᴏᴜ ᴀᴘᴇɴᴀs ᴜᴍᴀ ᴍᴀǫᴜɪɴᴀ ǫᴜᴇ ɴᴀᴏ ᴛᴇᴍ sᴇɴᴛɪᴍᴇɴᴛᴏs.. ɴᴀᴏ ᴘᴏssᴏ ᴘʀᴇᴇɴᴄʜᴇʀ sᴇᴜ ᴠᴀᴢɪᴏ, ᴘᴇᴄᴀ ᴀʟɢᴜᴇᴍ ʀᴇᴀʟ ᴇᴍ ɴᴀᴍᴏʀᴏ, ᴇ ɴᴀᴏ ᴜᴍ ʀᴏʙᴏ. 🤦‍♂️*");
if (JSON.stringify(namoro2).includes(menc_os2)) return reply(`*ᴇꜱᴛᴇ ᴜꜱᴜᴀʀɪᴏ ᴊᴀ ꜰᴏɪ ᴩᴇᴅɪᴅᴏ ᴇᴍ ɴᴀᴍᴏʀᴏ 💁‍♂️*`);
if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false)
return reply(`*ᴇssᴀ ᴘᴇssᴏᴀ ᴊᴀ ᴘᴇᴅɪᴜ ᴀʟɢᴜᴇᴍ ᴍᴀɪs ɪɴᴛᴇʀᴇssᴀɴᴛᴇ ǫᴜᴇ ᴠᴏᴄᴇ ᴇᴍ ɴᴀᴍᴏʀᴏ, sɪɴᴛᴏ ᴍᴜɪᴛᴏ 🤷‍♂️*`);
if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true)
return reply(`*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ, ᴘᴏɪs ᴀ ᴍᴇsᴍᴀ ᴊᴀ ᴇsᴛᴀ ᴄᴏᴍ ᴏᴜᴛʀᴏ(ᴀ) 💁‍♂️*`);
if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false)
return mention(`*ᴠᴏᴄᴇ ᴊᴀ ᴘᴇᴅɪᴜ ᴀʟɢᴜᴇᴍ ᴇᴍ ɴᴀᴍᴏʀᴏ, ᴘᴀʀᴇ ᴅᴇ ʙʀɪɴᴄᴀʀ ᴄᴏᴍ ᴏs sᴇɴᴛɪᴍᴇɴᴛᴏs ᴅᴏs ᴏᴜᴛʀᴏs 🤦‍♂️*`);
if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true)
return mention(`*ᴠᴏᴄᴇ ᴊᴀ ᴇsᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴀʟɢᴜᴇᴍ, ᴘᴀʀᴇ ᴅᴇ sᴇʀ ɪɴғɪᴇʟ ᴇ sᴇᴊᴀ ғɪᴇʟ ɪɢᴜᴀʟ ᴀ ᴍɪᴍ 💁‍♂️*`);
await reagir(from, "💍");
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hourofc, data: dattofc});
fs.writeFileSync("./DADOS DO KEISEN/func/namoro1.json", JSON.stringify(namoro1));
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from});
fs.writeFileSync("./DADOS DO KEISEN/func/namoro2.json", JSON.stringify(namoro2));
const texto = mess.pedidoNamoro(menc_os2, sender, prefix);
await keisen.sendMessage(from, { image: { url: namorar }, caption: texto, contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2, sender] }}, { quoted: selo });
break;
}

case 'cancelar':
case 'cancelarpedido': {
if (!isGroup) return reply(mess.onlyGroup());
const index1 = namoro1.findIndex(i => i.usu1 === sender);
if (index1 === -1) return reply("*ᴇᴜ ᴠᴏᴜ ᴄᴀɴᴄᴇʟᴀʀ ᴏ ǫᴜᴇ sᴇ ɴᴀᴏ ᴛᴇᴍ ɴᴀᴅᴀ? 🤦‍♂️*");
if (namoro1[index1].namorados === true)
return reply("*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ ᴄᴀɴᴄᴇʟᴀʀ ᴀʟɢᴏ ǫᴜᴇ ᴊᴀ ғᴏɪ ᴀᴄᴇɪᴛᴏ 🤷‍♂️*");
const parceiro = namoro1[index1].usu2 + "@s.whatsapp.net";
namoro1.splice(index1, 1);
fs.writeFileSync("./DADOS DO KEISEN/func/namoro1.json", JSON.stringify(namoro1));
const index2 = namoro2.findIndex(i => i.id === parceiro && i.pedido === sender.split("@")[0]);
if (index2 !== -1) {
namoro2.splice(index2, 1);
fs.writeFileSync("./DADOS DO KEISEN/func/namoro2.json", JSON.stringify(namoro2));
}
reply("*ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴄᴀɴᴄᴇʟᴀᴅᴏ! 💁‍♂️*");
break;
}

case 'terminar':
case 'terminar_namoro': {
if (!JSON.stringify(namoro1).includes(sender))
return reply(`*ᴠᴏᴄᴇ ɴᴀᴏ ᴇꜱᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴄᴏᴍ ɴɪɴɢᴜᴇᴍ...🙇‍♂️*`);
let D1 = namoro1.map(i => i.usu1).indexOf(sender);
if (D1 === -1) D1 = namoro1.map(i => i.usu2).indexOf(sender);
if (D1 === -1)
return reply(`*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ᴏ ꜱᴇᴜ ʀᴇʟᴀᴄɪᴏɴᴀᴍᴇɴᴛᴏ. ᴛᴇɴᴛᴇ ᴅᴇ ɴᴏᴠᴏ 🤷‍♂️*`);
const parceiro = namoro1[D1].usu1 === sender ? namoro1[D1].usu2 : namoro1[D1].usu1;
const jidParceiro = parceiro.includes('@s.whatsapp.net') ? parceiro : `${parceiro}@s.whatsapp.net`;
const D2 = namoro1.map(a => a.usu1).indexOf(jidParceiro);
if (D2 !== -1) { namoro1[D2].namorados = false; namoro1.splice(D2, 1);
}
await reply(`*ᴏ ɴᴀᴍᴏʀᴏ ꜰᴏɪ ᴅᴇꜱᴛʀᴜɪ́ᴅᴏ... ᴠᴏᴄᴇ ᴀɢᴏʀᴀ ᴇꜱᴛᴀ ꜱᴏʟᴛᴇɪʀᴏ ᴅᴇ ɴᴏᴠᴏ!🙆‍♂️*`);
await keisen.sendMessage(jidParceiro, { text: `*💔 ᴛᴇɴʜᴏ ᴜᴍᴀ ɴᴏᴛɪ́ᴄɪᴀ ᴛʀɪꜱᴛᴇ... ꜱᴇᴜ ᴘᴀʀᴄᴇɪʀᴏ(ᴀ) ᴀᴄᴀʙᴏᴜ ᴅᴇ ᴛᴇʀᴍɪɴᴀʀ ᴏ ɴᴀᴍᴏʀᴏ...😔*\n> *ɢᴜᴀʀᴅᴇ ᴏꜱ ʙᴏɴꜱ ᴍᴏᴍᴇɴᴛᴏꜱ, ᴍᴇꜱᴍᴏ ǫᴜᴇ ᴅᴏᴀ...🙇‍♂️*`, contextInfo: { ...NkChannelKk, mentionedJid: [sender, jidParceiro] }}, { quoted: selo });
namoro1.splice(D1, 1);
fs.writeFileSync('./DADOS DO KEISEN/func/namoro1.json', JSON.stringify(namoro1));
break;
}


case 'minhadupla':
case 'dupla': {
if (!isGroup) return reply(mess.onlyGroup())
const userNum = sender.split('@')[0]
const dupla = namoro1.find(i => i.usu1 === sender || i.usu1 === userNum || i.usu2 === sender || i.usu2 === userNum)
if (!dupla) return reply('*ᴠᴏᴄᴇ ɴᴀᴏ ᴇsᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ɴɪɴɢᴜᴇᴍ.. 🤷‍♂️*')
if (!dupla.namorados) return reply('*sᴇᴜ ᴘᴇᴅɪᴅᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ғᴏɪ ᴀᴄᴇɪᴛᴏ.. 💁‍♂️*')
await reagir(from, "❤️‍🩹");
const parceiro1 = dupla.usu1.includes('@') ? dupla.usu1 : `${dupla.usu1}@s.whatsapp.net`
const parceiro2 = dupla.usu2.includes('@') ? dupla.usu2 : `${dupla.usu2}@s.whatsapp.net`
if (!dupla.inicio) {
dupla.inicio = Date.now()
const fs = require('fs')
fs.writeFileSync('./DADOS DO KEISEN/func/namoro1.json', JSON.stringify(namoro1))
}
const tempoJuntos = msToTime(Date.now() - dupla.inicio)
const texto = mess.minhaDupla(parceiro1, parceiro2, tempoJuntos, dupla);
try {
const ppimg = await keisen.profilePictureUrl(parceiro2, 'image')
await keisen.sendMessage(from, { image: { url: ppimg }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] }}, { quoted: selo })
} catch {
await keisen.sendMessage(from, { image: { url: imgperfil }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] }}, { quoted: selo })}
}
break

//============[ FIM CASES NAMORO ]==========\\

//==========[ CASES N-COINS ]============\\

case 'coins': 
case 'estatisticas': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);

const usuario = RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS] || { coins: 0, chances: { minerar: 0, cassino: 0 } };

await mention(`↳ ${tempo} ↝ @${sender.split('@')[0]} ↴\n\n` +
`☆ۜ͜͡💰 • Saldo atual: '${usuario.coins} N-Coins' 💨\n\n` +
`☆ۜ͜͡⛏️ • Chances restantes de mineração: ${usuario.chances.minerar}/6\n\n` +
`☆ۜ͜͡🎰 • Chances restantes no cassino: ${usuario.chances.cassino}/5`);
break;
}

case 'sorteiocoins': 
case 'sortcoins': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (!SoDono) return reply(mess.onlyOwner());
if (q.match(/[a-z]/i)) return reply("️️😭🌟 Por favor, insira um valor numérico válido para sortear.");

const participantes = RG_SCOINS[ID_G_COINS]?.usus || [];
if (participantes.length === 0) return reply("Não há usuários registrados no sistema para o sorteio.");

const randomIndex = Math.floor(Math.random() * participantes.length);
const LuckyUser = participantes[randomIndex].id;

await mention(`🎉🌟 Parabéns @${LuckyUser.split("@")[0]}, você acaba de ganhar: ${q.trim()} N-Coins. *Gaste com moderação!*`);
SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
break;
}

case 'dadoapostado':
if (!isGroup) {
return reply(mess.onlyGroup());
}
if (!isModoCoins) {
return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
}
const [numberDado, amountBet] = q.split('/');
if (!numberDado) {
return reply(`Você esqueceu de escolher o número que você quer tirar. Escolha um número de 1 a 6. Exemplo:\n\t• *${prefix + command} número/aposta*`);
}
if (!amountBet) {
return reply(`Você esqueceu de colocar o valor que deseja apostar...`);
}
if (isNaN(numberDado) || isNaN(amountBet)) {
return reply(`Por favor, insira apenas números válidos!`);
}

const numDado = parseInt(numberDado);
const aposta = parseInt(amountBet);

if (aposta > 500) {
return reply(`Não é possível apostar mais de 500 N-Coins.`);
}
if (numDado < 1 || numDado > 6) {
return reply(`Número inválido! Informe um número de 1 a 6.`);
}
const saldoAtual = SYSTEM_COIN.VerificarCampo(sender, "coins");
if (saldoAtual < aposta) {
return reply(`Saldo insuficiente! Verifique seu saldo com '${prefix}saldo' antes de apostar.`);
}
await reagir(from, "🎲");
await reply(`Sorteando dado(s)! ⏳️`);
const drawQuantity = Math.floor(Math.random() * 6) + 1;
setTimeout(async () => {
if (drawQuantity === numDado) {
            const winMessages = [
                `🎲 Parabéns @${sender.split('@')[0]}, você ganhou ${aposta} N-Coins!`,
                `💰 Sucesso @${sender.split('@')[0]}! Você acertou e ganhou ${aposta} N-Coins!`
            ];
            await mention(winMessages[Math.floor(Math.random() * winMessages.length)]);
            await SYSTEM_COIN.AdicionarCoins(sender, aposta);
} else {
            const lossMessages = [
                `🤧 Infelizmente *@${sender.split("@")[0]}*, você errou a previsão e perdeu *${aposta} N-Coins*!`,
                `😿 @${sender.split("@")[0]}, você não acertou e perdeu ${aposta} N-Coins.`
            ];
            await mention(lossMessages[Math.floor(Math.random() * lossMessages.length)]);
            await SYSTEM_COIN.RemoverCoins(sender, aposta);
}
}, 5000);
break;
 

case 'anagrama':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`);
reply("Desativado com sucesso.");
} else {
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/anagrama/${from}.json`, JSON.stringify(palavrasANA[anaaleatorio]));
await keisen.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: selo});
}
break;

case 'quizanimais':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`);
reply("Desativado com sucesso.");
} else {
const animaisquiz = Math.floor(Math.random() * quizanimais.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/quiz-animais/${from}.json`, JSON.stringify(quizanimais[animaisquiz]));
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`);
await keisen.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`}, {quoted: selo});
}
break;

case 'whatmusic':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`);
reply("Desativado com sucesso.");
} else {
const whatMAle = Math.floor(Math.random() * whatMusicAr.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/wmusic/${from}.json`, JSON.stringify(whatMusicAr[whatMAle]));
await keisen.sendMessage(from, {text: `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• Dica: ${whatMusicAr[whatMAle].dica}`}, {quoted: selo});
}
break;

case 'gartic':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`);
reply("Desativado com sucesso.");
} else {
const garticquiz = Math.floor(Math.random() * garticArchives.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`, JSON.stringify(garticArchives[garticquiz]));
await keisen.sendMessage(from, {image: {url: `${garticArchives[garticquiz].imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Contém traços? ${garticArchives[garticquiz].contem_traços}`}, {quoted: selo});
}
break;

case 'enigma':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`);
reply("Desativado com sucesso.");
} else {
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`, JSON.stringify(enigmaArchive[engimaSolu]));
await keisen.sendMessage(from, {image: {url: enigma}, caption: `📜 - Resolva o seguinte enigma abaixo:\n—\n${enigmaArchive[engimaSolu].charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta._`}, {quoted: selo});
}
break;

case 'quizfutebol': 
case 'quizfut':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (fs.existsSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`)) {
fs.unlinkSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`);
reply("Desativado com sucesso.");
} else {
const futebolquiz = Math.floor(Math.random() * quizFutebol.length);
fs.writeFileSync(`./DADOS DO KEISEN/grupos/games/quiz-futebol/${from}.json`, JSON.stringify(quizFutebol[futebolquiz]));
await keisen.sendMessage(from, {text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${quizFutebol[futebolquiz].pergunta}_`}, {quoted: selo});
}
break;

case 'cassino':
case 'slot':
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);

const usuario = RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS];

if (usuario.chances.cassino >= 5) {
return reply(`Volte amanhã! Você consumiu todas suas 5 chances do dia no cassino.`);
}

if (usuario.coins < 30) {
return reply('Saldo insuficiente! Para usar os comandos de Coins, você deve ter pelo menos 30 N-Coins em sua carteira.');
}

usuario.chances.cassino++;
CoinsUpdate(RG_SCOINS);

const getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
const V_ = Array.from({ length: 3 }, () => getResultSlot[Math.floor(Math.random() * getResultSlot.length)]);

const slotMensagem = async (mensagem) => {
reply(`> ${mensagem}\n\n『 🕹️ 𝑪𝑨𝑺𝑺𝑰𝑵𝑶 💎 』↴ \n
╔═╌✯╌═⊱×⊰🎰⊱×⊰═╌✯╌═╗
║𖣴⋗[${V_[0]} | ${V_[1]} | ${V_[2]}]◄
╚═╌✯╌═⊱×⊰💰⊱×⊰═╌✯╌═╝\n\n\n*${usuario.chances.cassino}/5* chances no cassino por hoje.`);
};

if (V_[0] === V_[1] && V_[1] === V_[2]) {
await SYSTEM_COIN.AdicionarCoins(sender, 65);
const mensagensVitoria = [
            'Parece que a sorte estava esperando por você! Você acaba de levantar 65 N-Coins, aproveite você é digno de ganhar. 💰🌟',
            'Que reviravolta! Você saiu do cassino com 65 N-Coins no bolso! Quem disse que os jogos de azar não valem a pena? 🌟💰',
            'Surpreendente! A sorte sorriu para você esta noite no cassino, você ganhou 65 N-Coins como recompensa! 🎰✨'
];
await slotMensagem(mensagensVitoria[Math.floor(Math.random() * mensagensVitoria.length)]);
} else {
await SYSTEM_COIN.RemoverCoins(sender, 5);
const mensagensDerrota = [
            'Que pena! Você perdeu, o que resultará na perda de 5 N-Coins. Mas não fique triste, na próxima você ganha! 🙏🏼🌟',
            'Você perdeu, o que resultará na perda de 5 N-Coins! Com o tempo você recuperará e ultrapassará o valor perdido. 😇🌟',
            'Hoje a sorte não estava de bom humor com você, perdeu 5 N-Coins. 🥱☠️'
];
await slotMensagem(mensagensDerrota[Math.floor(Math.random() * mensagensDerrota.length)]);
}
break;

case 'minerar':
case 'minerarcoins':
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 6) {
return reply(`Sinto muito, você não tem mais chance para minerar hoje, porque você completou: 6/6.`);
}
if (!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]) {
RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1;
} else {
RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1;
}
CoinsUpdate(RG_SCOINS);
const aleatValor = Math.floor(Math.random() * 2);
const rndg = Math.floor(Math.random() * 300); 
if (aleatValor === 0) {
const randomMining = [
`Você estava minerando nas ilhas savitas e encontrou ${rndg} N-Coins em minerais preciosos! 💰`,
`🗣💰 Você invadiu uma mina proibida e achou ${rndg} N-Coins em troca de ouro!`,
`💎👷🏻‍♀️ Em uma mina de diamantes, você encontrou 2 diamantes equivalentes a ${rndg} N-Coins.`,
`⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou ${rndg} N-Coins!`,
];
await reply(randomMining[Math.floor(Math.random() * randomMining.length)]);
SYSTEM_COIN.AdicionarCoins(sender, rndg);
} else {
const miningFailureRX = [
"😥 Em sua tentativa de mineração, não foi possível encontrar nenhum mineral valioso!",
"😿 Você não deu sorte em sua escavação. Tente novamente mais tarde!",
"⛏️💎 Em Minas Gerais, famosa por suas minas de diamantes, você não encontrou nada desta vez.",
];
let miningFailure = miningFailureRX[Math.floor(Math.random() * miningFailureRX.length)];
miningFailure += RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 6 
? "\n> Infelizmente você não tem mais chances para minerar hoje, volte amanhã..." 
: `\n> Ainda restam ${6 - RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar} tentativas para minerar hoje.`;
await reply(miningFailure);
}
break;

case 'revelargartic':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if(fs.existsSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.")
let datenagramaa = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${datenagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!');
if (!isGroup) return reply(mess.onlyGroup());
if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if(fs.existsSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.");
let eni1 = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break



case 'rankcoins':
case 'rankingcoins':
case 'topcoins': {
    if (!isGroup) return reply(mess.onlyGroup());

    const fs = require('fs');
    const coinsPath = './DADOS DO KEISEN/usuarios/coins.json';
    let coinsDB = {};
    if (fs.existsSync(coinsPath)) coinsDB = JSON.parse(fs.readFileSync(coinsPath));

    // Converte o objeto em array e ordena por coins (maior para menor)
    const ranking = Object.entries(coinsDB)
        .map(([userId, data]) => ({ id: userId, coins: data.coins || 0 }))
        .filter(user => user.coins > 0) // remove quem tem 0 coins
        .sort((a, b) => b.coins - a.coins)
        .slice(0, 5); // top 5

    if (ranking.length === 0) {
        return reply('📊 Ninguém tem N-Coins ainda. Use `!addcoins` para começar.');
    }

    let mentions = [];
    let texto = `•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•\n\n`;
    texto += `💰 *RANKING DOS MAIS RICOS* 💰\n\n`;

    for (let i = 0; i < ranking.length; i++) {
        const user = ranking[i];
        mentions.push(user.id);
        const nome = user.id.split('@')[0];
        const valor = user.coins.toLocaleString();
        
        // Emojis para os top 3
        let medalha = '';
        if (i === 0) medalha = '🥇 ';
        else if (i === 1) medalha = '🥈 ';
        else if (i === 2) medalha = '🥉 ';
        else medalha = '📍 ';
        
        texto += `${medalha}${i+1}º ➤ @${nome} — *${valor} N-Coins*\n`;
    }

    texto += `\n•┈┈·┈•☾•┈┈┈••✦ ☩ ✦••┈┈┈•☽•┈┈·┈•`;

    await keisen.sendMessage(from, {
        text: texto,
        mentions: mentions
    }, { quoted: (typeof selo !== 'undefined' ? selo : null) });
    break;
}

//==========[ FIM DAS CASES N-COINS ]=============\\

//////////////////////FIM\\\\\\\\\\\\\\\\\\\\\\\\\

default:

// IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return await keisen.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: selo})
if(IS_DELETE) {
setTimeout(async() => {
await keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await keisen.groupParticipantsUpdate(from, [sender], 'remove')
await keisen.sendMessage(from, {text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`, contextInfo: {forwardingScore: 500, isForwarded:true}});
await keisen.sendMessage(from, {text: 'Por favor, reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}
}
}

if(isGroup && isAntiFlood && !SoDono && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){var limitefl = limitefll.limitefl} else {var limitefl = isLimitec};
if(budy.length >= limitefl){
setTimeout(async() => {
reply(mess.charactersAnti());
console.log(colors.red(`[SPAM DETECTED IN THE GROUP]`), 'Grupo:', colors.yellow(`${groupName}`), colors.white(`Ocorrência: ${hourofc} ${dattofc}`));
}, 100);
setTimeout(async() => {
 if(IS_DELETE) {
setTimeout(async() => {
keisen.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500);
}
 if(!JSON.stringify(groupMembers).includes(sender)) return
 await keisen.groupParticipantsUpdate(from, [sender], 'remove')
 }, 1000)
}
}

if (iskeisenEscuta && isGroup && !info.key.fromMe) {
const audioMessage = info.message?.audioMessage || info.message?.viewOnceMessageV2Extension?.message?.audioMessage;

if (audioMessage) {
await reagir(from, "👂");

try {
const stream = await downloadContentFromMessage(audioMessage, 'audio');
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}

const audioUrl = await upload(buffer);

const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
method: 'POST',
headers: {
'authorization': '22be3718b6bf42019d9cc59f70133b83',
'content-type': 'application/json'
},
body: JSON.stringify({
audio_url: audioUrl,
language_code: 'pt'
})
});

const transcriptData = await transcriptRes.json();
if (!transcriptData.id)
return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴇɴᴠɪᴀʀ ᴏ ᴀᴜ́ᴅɪᴏ ᴘᴀʀᴀ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ... 🔖*');

const id = transcriptData.id;
let status = 'queued';
let transcriptResult;

while (status === 'queued' || status === 'processing') {
await new Promise(resolve => setTimeout(resolve, 4000));
const statusRes = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
headers: { 'authorization': '22be3718b6bf42019d9cc59f70133b83' }
});
transcriptResult = await statusRes.json();
status = transcriptResult.status;
}

if (status !== 'completed')
return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴇꜱꜱᴇ ᴀᴜ́ᴅɪᴏ, ꜰᴏɪ ᴅɪꜰɪ́ᴄɪʟ ᴀᴛᴇ́ ᴘʀᴀ ᴍɪᴍ...* 😵‍💫');

let textoFinal = transcriptResult.text || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';

await keisen.sendMessage(from, { text: `*🎙️ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ ᴅᴏ ᴀᴜ́ᴅɪᴏ 🎙️*\n-\n> *${textoFinal}*` }, { quoted: selo });

} catch (e) {
console.error('erro ao transcrever:', e);
reply(mess.error());
}
}
}


if(isAutorepo) { 
if(budy2.includes("bom dia")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/bomdia.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `BOM DIAAA 😹` }
}
});
}

if(budy2.includes("boa tarde")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/boatarde.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `BOA TARDE 🥱` }
}
});
}

if(budy2.includes("boa noite")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/boanoite.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `BOA NOITE 🌆` }
}
});
}

if(budy2.includes("keisen")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/keisen.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `VOLTA HUTAO 😭` }
}
});
}

if(budy2.includes("amo")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/amor.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `EU AMO EL* 😢` }
}
});
}

if(budy2.includes("bot ruim")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/oi.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `EU AMO ESSE BOT 💕` }
}
});
}

if(budy2.includes("louca")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/louca.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `i a louça? 🗣️` }
}
});
}

if(budy2.includes("prr")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/porra.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `PORRA MANO 🔖` }
}
});
}

if(budy2.includes("gado")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/jack.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `GADAO KKKKKKKK 🐂` }
}
});
}

if(budy2.includes("gay")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/gay.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `EU NAO NASCI GAY, A CULPA É DO MEU PAI 🏳️‍🌈` }
}
});
}

if(budy2.includes("burro")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/burro.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `MLK BURRO DO KRL 😡` }
}
});
}

if(budy2.includes("lindo")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/gato.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `SOU LINDO QUE DÓI 💕` }
}
});
}

if(budy2.includes("vt")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/cu.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `AH VAI TOMAR NO CU 😡` }
}
});
}

if(budy2.includes("triste")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/depre.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `VAI VIVER MLK 😡` }
}
});
}

if(budy2.includes("e a louca")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/mulher.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `VAI LAVAR A LOUÇA KKKK 😂` }
}
});
}

if(budy2.includes("bct")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/bct.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `FIQUEI DE XERECA 👹` }
}
});
}

if(budy2.includes("kkk")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/risos.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `EU RI KKKKKKKKKKK 😂` }
}
});
}

if(budy2.includes("indio")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/indio.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `ALA O AMAZONENSE KKKKKK 😂` }
}
});
}

if(budy2.includes("mentira")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/fake.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `FAKE TIUS ISSO 😡` }
}
});
}

if(budy2.includes("aff")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/meme.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `JURO MANA 💋` }
}
});
}

if(budy2.includes("clbc")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/macaco.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `CALA A BOCA MACACO 🐒` }
}
});
}

if(budy2.includes("macaco")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/macaco2.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `MACACO FUDIDO 🦧` }
}
});
}

if(budy2.includes("sexo")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/websescsu.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `SEXOOO KKKKKK 😹` }
}
});
}

if(budy2.includes("pai")){
const soundft = fs.readFileSync('./DADOS DO KEISEN/data/media/audios/sempai.mp3');
keisen.sendMessage(from, { audio: soundft, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `ALA O SEM PAI 🤣🤣` }
}
});
}

if(budy2.includes("corno")){
tujuh = await fetch(corno).then(v => v.buffer())
await keisen.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
{
quoted: {
key: { participant: sender },
message: { conversation: `MUUUUHHH 🐂🐂` }
}
});
}
}

//=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return 
keisen.groupParticipantsUpdate(from, [sender], 'remove');
setTimeout(() => {keisen.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}, 500)
}, 2000);
keisen.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: selo});
}
}

const privateCmd = (id, pc, cmd, porcentagem) => {
return `╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
            ❌️ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐈𝐧𝐯á𝐥𝐢𝐝𝐨 ❌️
╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
˚₊· ͟͟͞͞★Comando não encontrado:*\`${pc}\`
˚₊· ͟͟͞͞★Você quis dizer:* \`${cmd}\` ?
˚₊· ͟͟͞★Semelhança:* \`${porcentagem}%\`
╭✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╮
💥 Tente novamente 💥
 ╰✘━𑁁━፝֟━💧₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧💧━፝֟━𑁁━✘╯
> by moreno modz`;
}

if (budy2 === "prefixo") {
reply(`- ᶻ 𝗓 𐰁 ,, ''『${prefix}』\n ╭─『 💧 』𝐏𝐑𝐄𝐅𝐈𝐗𝐎『 💧 』─╮
*keisen-BOT 𝖺𝗈 𝗌𝖾𝗎 𝖽𝗂𝗌𝗉𝗈𝗋, 𝖾𝗌𝗌𝖾 𝖾́ 𝗈 𝗆𝖾𝗎 𝗉𝗋𝖾𝖿𝗂𝗑𝗈 𝖺𝗈 𝗎𝗌𝗈 𝖽𝗈𝗌 𝗆𝖾𝗎𝗌 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝗁𝗎𝗆𝖺𝗇𝗈!*\n『${prefix} 』 \n\n> ┆${NomeDoBot} 
> ajuda use ${prefix} menu`);
}


if (isCmd) {
const AB = similarityCmd(command);
const notcmd = privateCmd(sender, prefix + command, AB[0].comando, AB[0].porcentagem);
reply(notcmd);
}
}
}
}


//=================

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;

async function forTemporaryVip() {
if(vip.length > 0) {
for (y of vip) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'));
fs.writeFileSync("./DADOS DO KEISEN/usuarios/vip.json", JSON.stringify(vip));
if(y.infinito == false) {
if(y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./DADOS DO KEISEN/usuarios/vip.json", JSON.stringify(vip));
} else {
keisen.sendMessage(y.id, {text: `*sᴇᴜs ᴅɪᴀs ᴅᴇ ᴜsᴜᴀʀɪᴏ(ᴀ) ᴠɪᴘ ᴀᴄᴀʙᴀʀᴀᴍ 🙅‍♂️*`});
AB = vip.map(b => b.id).indexOf(y.id);
vip.splice(AB, 1);
fs.writeFileSync("./DADOS DO KEISEN/usuarios/vip.json", JSON.stringify(vip));
}
}
}
}
}
}
forTemporaryVip().catch((error) => {console.log(error)});

startFunctionNaga().catch(async(error) => {
if(JSON.stringify(error).includes(API_KEY_TOKITO)) {} else if(String(error).includes("Erro: aborted")) {
fileStart = require.resolve("./ARQUIVES/connect.js");
delete require.cache[fileStart];
require(fileStart);
} else if(String(error).includes("nativeFlowResponseMessage")) {
} else { 
return console.log('O servidor-geral caiu ou não foi possivel executar esta ação.', error);
}
})
}
}

fs.watchFile(require.resolve(__filename), () => {
fs.unwatchFile(require.resolve(__filename));
console.log(colors.blue(`Alterações salvas, aguarde que estou carregando :) - '${__filename}'`));
delete require.cache[require.resolve(__filename)]
require(require.resolve(__filename))
})

module.exports = startkeisen;