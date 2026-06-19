const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fileTypeFromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');
const webp = require("node-webpmux");
const crypto = require("crypto");

var corzinhas = ["red", "green", "yellow", "blue","magenta", "cyan", "", "gray", "redBright","greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

const ceemde = JSON.parse(fs.readFileSync('./DADOS DO KEISEN/data/totalcmd.json'));

const getpc = async function(totalchat){
pc = [];
a = [];
b = [];
for (var c of totalchat){
a.push(c.id);
}
for (var d of a){
if (d && !d.includes('g.us')){
b.push(d);
}
}
return b;
};

function upload(midia) {
  return new Promise(async (resolve, reject) => {
    try {
      let { ext } = await fileTypeFromBuffer(midia);
      let form = new FormData();
      form.append('reqtype', 'fileupload');
      form.append('fileToUpload', midia, 'tmp.' + ext);

      await fetch('https://catbox.moe/user/api.php', {
        method: 'POST',
        body: form
      })
      .then(response => response.text())
      .then(link => {
        resolve(link.trim());
      })
      .catch(erro => reject(erro));
    } catch (erro) {
      return console.log(erro);
    }
  });
}

function convertSticker(webpSticker, author, packname, categories = [''], extra = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const img = new webp.Image();
            const stickerPackId = crypto.randomBytes(32).toString('hex');
            const json = { 
                'sticker-pack-id': stickerPackId, 
                'sticker-pack-name': packname, 
                'sticker-pack-publisher': author, 
                'emojis': categories, 
                ...extra 
            };
        
            const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
            const jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
            const exif = Buffer.concat([exifAttr, jsonBuffer]);

            exif.writeUIntLE(jsonBuffer.length, 14, 4);
            
            const bufferSticker = Buffer.from(webpSticker.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
            await img.load(bufferSticker);
            img.exif = exif;

            const result = await img.save(null);
            resolve(result);
        } catch (err) {
            reject(new Error("Erro ao processar a figurinha: " + err.message));
        }
    });
}
async function pegarCases(nomes = []) {
  if (!Array.isArray(nomes)) nomes = [nomes];
  const arquivo = fs.readFileSync('./keisen.js', 'utf8');
  const encontrados = [];
  const naoEncontrados = [];
  for (let nome of nomes) {
    if (!nome) continue; 
    nome = nome.trim();
    const regex = new RegExp(`case '${nome}'[\\s\\S]*?break`, 'm');
    const match = arquivo.match(regex);
    if (!match) {
      naoEncontrados.push(nome);
      continue;
    }
    let caseConteudo = match[0].replace(/break/, 'break; //Yuka\' Modz');
    encontrados.push(caseConteudo);
  }
  const arquivoFinal = encontrados.length
    ? `/* \n case(s) abaixo, peço que deixe os devidos créditos.\n criador dessa getcase → @yuka modz.\n pegue as cases aí e use com moderação e um beijo do Yuka Modz no seu bozo.\n*/\n\n${encontrados.join('\n\n')}` : null;
  return { arquivoFinal, naoEncontrados };
}

function carregarMidia(customName = "fotomenu") {
    const pasta = './DADOS DO KEISEN/INFO_KEISEN/LOGOS'
    const image = `${pasta}/${customName}.png`
    const video = `${pasta}/${customName}.mp4`
    if (fs.existsSync(video)) {
        return {
            type: "video",
            data: fs.readFileSync(video)
        }
    }
    if (fs.existsSync(image)) {
        return {
            type: "image",
            data: fs.readFileSync(image)
        }
    }
    return { type: "text" }
}


exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
//console.log(json)
resolve(json)
}).catch((err) => {
reject(err)
})
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.text()).then(text => {
// console.log(text)
resolve(text)
}).catch((err) => {
reject(err)
})
})

exports.createExif = (pack, auth) =>{
const code = [0x00,0x00,0x16,0x00,0x00,0x00]
const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
let len = JSON.stringify(exif).length
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
if(len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
const __ = Buffer.from(len, "hex")
const ___ = Buffer.from(code)
const ____ = Buffer.from(JSON.stringify(exif))
fs.writeFileSync('./arquivos/sticker/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
console.log(err)
if (err) return console.error(err)
return `./arquivos/sticker/data.exif`
})
}

/*exports.getBuffer = getBuffer = async (url) => {
const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
const anu = fs.readFileSync('./src/emror.jpg')
if (!res.ok) return { type: 'image/jpeg', result: anu }
const buff = await res.buffer()
if(buff)
return { type: res.headers.get('content-type'), result: buff }
}*/

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const randomBytes = (length) => {
return Crypto.randomBytes(length);
};

const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase();
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}

function normalizeJid(jid) {
    if (!jid) return null;
    let id = jid.replace(/:.*(?=@)/, '');
    if (id.endsWith('@lid')) {
        id = id.replace('@lid', '@s.whatsapp.net');
    } else if (!id.endsWith('@s.whatsapp.net')) {
        id += '@s.whatsapp.net';
    }
    return id;
}

function getGroupAdmins(participants) {
                return participants
                    .filter(p => p.admin === "admin" || p.admin === "superadmin")
                    .map(p => {

                        const jidReal = p.jid || p.participantPn || (p.participant.includes('@') ? p.participant.split(':')[0] + '@s.whatsapp.net' : p.participant + '@s.whatsapp.net');
                        return normalizeJid(jidReal);
                    });
            }

function getMembros(participants) {
                return participants
                    .filter(p => !p.admin)
                    .map(p => {
                        const jidReal = p.jid || p.participantPn || (p.participant.includes('@') ? p.participant.split(':')[0] + '@s.whatsapp.net' : p.participant + '@s.whatsapp.net');
                        return normalizeJid(jidReal);
                    });
            }

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render((`BY :: Yuka,Modz 
#Editor|BY :: Emilly`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});
 
const banner3 = cfonts.render((`keisen|BOT MD`), {
font: 'block',
align: 'center',
gradient: ['red', 'magenta']
});
 

function temporizador(segundos){
function tempo(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function recognize(filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if(config.debug) log(stderr)
if(error) reject(error)
resolve(stdout)
})
})
}

function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config).map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
}).concat(config.presets).filter(Boolean)
}

const authorname = "KeisenBot-MD"
const packname = "Creat: Yuka,Modz #Editor"

const chyt = "559183721035@s.whatsapp.net";
const nit = "559183721035@s.whatsapp.net";
const supre = "559183721035@s.whatsapp.net";

const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), 5000)}

module.exports = { getBuffer, fetchJson, fetchText, generateMessageID, getGroupAdmins, normalizeJid, getMembros, getRandom, banner2, temporizador, color, recognize, bgcolor, isFiltered, addFilter, banner3, chyt, getExtension, convertSticker, upload, nit, getpc, supre, pegarCases, carregarMidia }
