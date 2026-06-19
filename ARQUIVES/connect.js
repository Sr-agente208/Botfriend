/**
* código refeito e otimizado.
* By : @moreno Modz
* peço que deixe os créditos por gentileza.
 */
 
const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = require('@whiskeysockets/baileys');
const qrcodeTerminal = require('qrcode-terminal'); 

const { fs, readline, LoggerB, Boom, axios, util, moment, time, date, getBuffer, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, nescessario, setting, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('../ARQUIVES/funcoes/exports.js');
const qrcode = "./DADOS DO KEISEN/qr-code";
const { NomeDoBot, channelnk } = require('../DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json');
const webServer = require('../server.js');

const logger = LoggerB.child({});
logger.level = 'silent';
const rl = { close: () => {} };
const question = (text) => new Promise(resolve => resolve(""));
const msgRetryCounterCache = new NodeCache();

const SUPORTE_NUMBER = "+5549933805907"; 

function collectNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}

async function startPairing(keisen) {
    let phoneNumber = process.env.PHONE_NUMBER;
    if (!phoneNumber) {
        phoneNumber = await question(colors.cyan("Digite o número do WhatsApp que deseja conectar ↴\n--> "));
    }
    const numerosColetados = collectNumbers(phoneNumber);
    if (!numerosColetados || numerosColetados.length < 11) {
        console.log(colors.red("Número inválido. Insira corretamente, por exemplo: 551122334455"));
        return; 
    }
    const code = await keisen.requestPairingCode(numerosColetados);
    console.log(colors.black(colors.bgGreen(`Seu código de emparelhamento: `)), colors.black(colors.white(code)));
    webServer.updatePairingCode(code);
    console.log(colors.gray('Vá no whatsapp > dispositivos conectados > conectar um aparelho > conectar com número de telefone'));
}


async function openWhatsappSupport() {
    console.log(colors.cyan(`https://wa.me/${SUPORTE_NUMBER.replace(/\D/g,'')}\n`));
}

async function showMenu(keisen) {
    console.log(colors.magenta("┏━፝֟✞⃟━፝֟━⵿݊━━፝֟𝆺𝅥₊˚⊰⸸🜲⸸⊱⃜˚₊𝆺𝅥݊━፝֟━⵿݊━፝֟✞⃟━፝֟┅̤┓"));
    console.log(colors.magenta("║𖣴") + colors.white(" Escolha uma opção ↴"));
    console.log(colors.magenta(" ┗━፝֟✞⃟━፝֟━⵿݊━፝━፝֟𝆺𝅥₊˚⃜⊰⸸🜲⸸⊱⃜˚₊𝆺𝅥݊━፝֟━⵿݊━፝֟✞⃟━፝֟┅̤┛"));
    console.log(colors.magenta("║") + colors.blue("┏┈━═⛧═━═⛧═━┈⟡┈━═┓"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("1") + colors.red(" )") + colors.cyan(" Código"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("2") + colors.red(" )") + colors.cyan(" QR-Code"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("3") + colors.red(" )") + colors.cyan(" Suporte"));
    console.log(colors.magenta("║") + colors.blue("┗┈━═⛧═━═⛧═━┈⟡┈━═┛"));
    console.log(colors.magenta("┗━፝֟✞⃟━፝֟━⵿݊━፝━፝֟𝆺𝅥₊˚⃜⊰⸸🜲⸸⊱⃜˚₊𝆺𝅥݊━፝֟━⵿݊━፝֟✞⃟━፝֟┅̤┛"));
    let option = await question(colors.white("╰━>"));
    option = option.trim();

    switch(option) {
        case '1':
            await startPairing(keisen);
            break;
        case '2':            
keisen.ev.on('connection.update', (update) => {
	                if (update.qr) {
	                    console.log(colors.cyan("\n📱 ESCANEIE O QR PARA CONECTAR-SE AO BOT:\n"));
	                    qrcodeTerminal.generate(update.qr, { small: true }); 
                        webServer.updateQR(update.qr);
	                    console.log(colors.yellow("\n• ABRA O WHATSAPP > DISPOSITIVOS CONECTADOS > CONECTAR NOVO APARELHO\n"));
	                }
	            });
            break;
        case '3':
            await openWhatsappSupport();
            break;
        default:
            console.log(colors.red("\n𝐎𝐏𝐒.. 𝐕𝐎𝐂𝐄 𝐄𝐑𝐑𝐎𝐔 𝐀𝐋𝐆𝐎 𝐀𝐈\n"));
            await showMenu(keisen);
    }
}

async function startConnect() {
    const { state, saveCreds } = await useMultiFileAuthState(qrcode);

    const keisen = makeWASocket({
        logger,        
        browser: ['Linux', 'Opera', '10.0.22631'],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger),
        },
        msgRetryCounterCache,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        keepAliveIntervalMs: 40000,
        markOnlineOnConnect: true,
    });

if (!fs.existsSync(`${qrcode}/creds.json`)) {
        setTimeout(async () => {
            const usePairing = process.env.USE_PAIRING === 'true';
            if (usePairing) {
                console.log(colors.cyan("Iniciando conexão via Pairing Code..."));
                await startPairing(keisen);
            } else {
                console.log(colors.cyan("Iniciando conexão via QR Code..."));
                // O evento connection.update já lida com o QR Code abaixo
            }
        }, 5000);
    }

    keisen.ev.on("creds.update", saveCreds);

keisen.ev.on("connection.update", (update) => {
            if (update.qr) {
                console.log(colors.cyan("\n📱 QR CODE GERADO!\n"));
                webServer.updateQR(update.qr);
            }
	        const { connection, lastDisconnect } = update;
        const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;

        switch (connection) {
            case 'close':
                if (shouldReconnect) {
                    if (shouldReconnect == 401) console.log(colors.red(mess.ErrorBaileys_401()));
                    else if (shouldReconnect == 408) console.log(colors.yellow(mess.ErrorBaileys_408()));
                    else if (shouldReconnect == 411) console.log(colors.yellow(mess.ErrorBaileys_411()));
                    else if (shouldReconnect == 428) console.log(colors.yellow(mess.ErrorBaileys_428()));
                    else if (shouldReconnect == 440) console.log(colors.gray(mess.ErrorBaileys_440()));
                    else if (shouldReconnect == 500) console.log(colors.gray(mess.ErrorBaileys_500()));
                    else if (shouldReconnect == 503) console.log(colors.gray("Erro desconhecido! Error: 503."));
                    else if (shouldReconnect == 515) console.log(colors.gray(mess.ErrorBaileys_515()));
                    else console.log(`${colors.red("[CONNECTION CLOSED]")} Conexão fechada por motivo: ${lastDisconnect?.error}`);
                    startConnect();
                }
                break;

            case 'connecting':
                console.log(`${colors.white("×")} [${colors.red(date,time)}] - ${colors.yellow(mess.connecting())}`);
                break;

case 'open':
	                console.log(banner3.string);
	                console.log(banner2.string);
	                console.log(colors.green(mess.open()));
                    webServer.updateStatus('Conectado');
	                rl.close();
	                break;
        }
    });

    keisen.ev.on("messages.upsert", (upsert) => {
        const startkeisen = require('../keisen.js');
        startkeisen(upsert, keisen, qrcode).catch(console.log);
    });

    keisen.ev.process(async (events) => {
        if (!events["group-participants.update"]) return;
        try {
            const naga2 = events["group-participants.update"];
            if (!fs.existsSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${naga2.id}.json`)) return;

            const jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${naga2.id}.json`));
            let grpmdt;
            try { grpmdt = await keisen.groupMetadata(naga2.id) } catch { return }
            if (!grpmdt?.id.endsWith('@g.us')) return;

            const membros_ = grpmdt.participants;
            const groupAdmins_ = getGroupAdmins(membros_);

            const normalizar = alvo => {
                if (alvo?.includes('@lid') && membros_) {
                    return membros_.find(v => v.lid === alvo)?.jid || alvo;
                }
                return alvo;
            };

            const participante = normalizar(naga2.participants[0]);
            const numero = participante.split('@')[0];
            const NumeroDoBot = keisen.user.id.split(':')[0];
            if (participante.startsWith(keisen.user.id.split(':')[0])) return;
 function gerarContextNewsletter() {
    if (setting.channelnk === "0@newsletter") {
        return {}; 
    }
    return {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channelnk,
            newsletterName: NomeDoBot,
            serverMessageId: ''
        }
    };
}
const NkChannelKk = gerarContextNewsletter();

// ANTIROUBO 🛡️ 
try {
  const pathAtiv = `./DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen/${naga2.id}.json`
  if (!fs.existsSync(pathAtiv)) {
  } else {
    let jsonGpAR
    try {
      jsonGpAR = JSON.parse(fs.readFileSync(pathAtiv))
      if (!Array.isArray(jsonGpAR)) jsonGpAR = [jsonGpAR]
      if (!jsonGpAR[0]) jsonGpAR[0] = {}
    } catch {
      jsonGpAR = [{}]
    }

    const ligado = !!jsonGpAR[0].antiroubo
    if (!ligado) {
    } else {
      const action = naga2.action
      if (action !== 'promote' && action !== 'demote') {
      } else {
        const toNum = (v) => String(v || '').replace(/\D/g, '')

        const ownerNumberLocal = (setting?.ownerNumber || '').replace(new RegExp("[()+-/ +/]", "gi"), "")
        const donoJid = ownerNumberLocal + '@s.whatsapp.net'

        const botNum = (keisen.user?.id?.split(':')[0] || keisen.user?.id || '').replace(/@s\.whatsapp\.net.*/,'')
        const botJid = botNum + '@s.whatsapp.net'

        const botLid = (keisen?.user?.lid ? (keisen.user.lid.split(':')[0] + '@lid') : null)
        const botLidNum = toNum(botLid)

        const safeGroupUpdate = async (jid, parts, act) => {
          try {
            return await keisen.groupParticipantsUpdate(jid, parts, act)
          } catch {
            return null
          }
        }

        let authorRaw =
          naga2.author ||
          naga2.actor ||
          naga2.participant ||
          naga2.initiator ||
          null

        let targetsRaw = Array.isArray(naga2.participants) ? naga2.participants : []

        let metaFresh
        try { metaFresh = await keisen.groupMetadata(naga2.id) } catch { metaFresh = null }
        const participantsFresh = metaFresh?.participants || []

        const isSuperAdminJid = (jid) => {
          try {
            const p = participantsFresh.find(x => (x?.id || x?.jid) === jid)
            return p?.admin === 'superadmin'
          } catch { return false }
        }

        const lidMap = new Map()
        for (const p of participantsFresh) {
          const pid = p?.id || p?.jid || null
          if (p?.lid && pid) lidMap.set(p.lid, pid)
        }

        const donoLid = (() => {
          for (const [lid, jid] of lidMap.entries()) {
            if (jid === donoJid) return lid
          }
          return null
        })()

        const resolveJid = (jid) => {
          if (!jid) return null
          jid = String(jid)

          if (jid.includes('@lid')) {
            const mapped = lidMap.get(jid)
            return mapped || jid
          }
          if (jid.includes(':')) jid = jid.split(':')[0]
          if (!jid.includes('@')) return jid + '@s.whatsapp.net'
          return jid
        }

        const author = resolveJid(authorRaw)
        const targets = targetsRaw.map(resolveJid).filter(Boolean)

        const authorNum = toNum(author)
        const authorRawNum = toNum(authorRaw)
        const targetsNums = targets.map(toNum)

        let permitidos = jsonGpAR[0].ar_permitidos
        if (!Array.isArray(permitidos)) permitidos = []
        const permitidosNums = permitidos.map(toNum).filter(Boolean)

        let permitidosLidCfg = jsonGpAR[0].ar_permitidos_lid
        if (!Array.isArray(permitidosLidCfg)) permitidosLidCfg = []
        const permitidosLidNums = permitidosLidCfg.map(toNum).filter(Boolean)

        const isBotAdmin = groupAdmins_.includes(botJid)

        if (!author || targets.length === 0) {
        } else if (!isBotAdmin) {
        } else {
          const authorEhDonoPorLid =
            !!(authorRaw && String(authorRaw).includes('@lid') && lidMap.get(authorRaw) === donoJid)

          const authorIsSuperAdmin = (() => {
            try {
              const p = participantsFresh.find(x => (x?.id || x?.jid) === author)
              return !!(p?.admin === 'superadmin')
            } catch { return false }
          })()

          const authorIsBot =
            (author === botJid) ||
            (botLid && String(authorRaw) === String(botLid)) ||
            (botLidNum && authorRawNum && authorRawNum === botLidNum) ||
            (authorRaw && String(authorRaw).includes('@lid') && lidMap.get(authorRaw) === botJid)

          const authorLiberado =
            author === donoJid ||
            authorIsBot ||
            authorEhDonoPorLid ||
            authorIsSuperAdmin ||
            (authorNum && permitidosNums.includes(authorNum)) ||
            (authorRawNum && permitidosNums.includes(authorRawNum)) ||
            (authorRawNum && permitidosLidNums.includes(authorRawNum))

          if (authorLiberado) {
            return
          }

          const targetsSemBot = targets.filter(t => t !== botJid)
          if (targetsSemBot.length === 0) {
            return
          }

          global.__AR_RECENT = global.__AR_RECENT || {}
          global.__AR_RECENT[naga2.id] = global.__AR_RECENT[naga2.id] || new Map()
          const recentMap = global.__AR_RECENT[naga2.id]

          const now = Date.now()
          const TTL = 9000
          for (const [k, ts] of recentMap.entries()) {
            if (now - ts > TTL) recentMap.delete(k)
          }

          if (action === 'demote') {
            const bateu = targetsSemBot.some(t => recentMap.has(t))
            if (bateu) return
          }

          const delayMs = (ms) => new Promise(r => setTimeout(r, ms))

          if (action === 'promote') {
            recentMap.set(author, Date.now())
            for (const t of targetsSemBot) recentMap.set(t, Date.now())

            if (!isSuperAdminJid(author)) {
              await safeGroupUpdate(naga2.id, [author], 'demote')
            }
            await delayMs(600)

            for (const t of targetsSemBot) {
              if (isSuperAdminJid(t)) continue
              await safeGroupUpdate(naga2.id, [t], 'demote')
              await delayMs(400)
            }

            await keisen.sendMessage(naga2.id, { text: `🗣️ 𝐓𝐄𝐍𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄 𝐏𝐑𝐎𝐌𝐎𝐂𝐀𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐀\n> *Tentativa de promover admin sem permissão.*\n\n*ᴏ ᴜsᴜᴀʀɪᴏ ${targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*\n\n*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${authorNum || authorRawNum || '???'} 🙅‍♂️*`, mentions: [author, ...targetsSemBot]
            }).catch(()=>{})
          }

          if (action === 'demote') {
            recentMap.set(author, Date.now())

            if (!isSuperAdminJid(author)) {
              await safeGroupUpdate(naga2.id, [author], 'demote')
            }

            await keisen.sendMessage(naga2.id, {
              text: `‼️ 𝐓𝐄𝐍𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄 𝐑𝐄𝐁𝐀𝐈𝐗𝐀𝐌𝐄𝐍𝐓𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐀\n> *Tentativa de rebaixar admin sem permissão.*\n\n*ᴏ ᴜsᴜᴀʀɪᴏ ${targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*\n\n*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${authorNum || authorRawNum || '???'} 🙅‍♂️*`,
              mentions: [author, ...targetsSemBot]
            }).catch(()=>{})
          }
        }
      }
    }
  }
} catch {
}

            if (naga2.action === 'add' && nescessario.listanegraG.includes(participante)) {
                await keisen.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return keisen.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (naga2.action === 'add' && jsonGp[0].listanegra.includes(participante)) {
                await keisen.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return keisen.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (jsonGp[0].antifake && naga2.action === 'add' && !numero.startsWith('55')) {
                if (jsonGp[0].legenda_estrangeiro != "0") {
                    await keisen.sendMessage(grpmdt.id, { text: jsonGp[0].legenda_estrangeiro });
                }
                return setTimeout(() => keisen.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }
            if (jsonGp[0].ANTI_DDD.active && naga2.action === 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(numero))) {
                await keisen.sendMessage(grpmdt.id, { text: mess.forbiddenStateFromDDD(participante, extractStateFromDDD, extractDDD), mentions: [participante] });
                return setTimeout(() => keisen.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }

            const tipoMidia = url => {
                if (!url) return null;
                const ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
                return ext.match(/jpe?g|png|gif|webp/) ? 'image' :
                       ext.match(/mp4|mov|mkv|avi|webm/) ? 'video' : null;
            };

            const fotoPerfil = async jid => {
                try {
                    return await keisen.profilePictureUrl(jid, 'image');
                } catch {
                    return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
                }
            };

            const mdata_2 = grpmdt || await keisen.groupMetadata(naga2.id);
            if (jsonGp[0].antifake && !numero.startsWith('55')) return;
        const gp = jsonGp[0];
        const wl = gp.wellcome?.[0];
        const wl2 = gp.wellcome?.[1];
        const subject = mdata_2.subject || '';
        const prefixo = gp.multiprefix ? gp.prefixos?.[0] : setting.prefix;
        const desc = mdata_2.desc || '';
        const [ppimg] = await Promise.all([fotoPerfil(participante)]);
        const fundo = wl?.fundobv || ppimg;
        const acao = naga2.action;

        const legendaBase = (txt) => txt
            .replace('#hora#', time)
            .replace('#nomedogp#', subject)
            .replace('#numerodele#', '@' + numero)
            .replace('#numerobot#', NumeroDoBot)
            .replace('#prefixo#', prefixo)
            .replace('#descrição#', desc)
            .replace('#estado#', extractStateFromNumber(numero));
        if (wl?.bemvindo1) {
            const legenda = acao === 'add' ? (wl.legendabv ? legendaBase(wl.legendabv) : welcome(numero, subject)) : (wl.legendasaiu ? legendaBase(wl.legendasaiu) : bye(numero));

            const tipo = tipoMidia(fundo);
            const msg = {
                caption: legenda,
                contextInfo: { ...NkChannelKk, mentionedJid: [participante] }
            };

            if (tipo === 'image') {
                msg.image = { url: fundo };
            } else if (tipo === 'video') {
                msg.video = { url: fundo };
                msg.gifPlayback = true;
            } else {
                msg.image = { url: ppimg };
            }

            await keisen.sendMessage(mdata_2.id, msg).catch(async () => {
                msg.image = { url: ppimg };
                await keisen.sendMessage(mdata_2.id, msg);
            });
        }
        if (wl2?.bemvindo2) {
            if (acao === 'add') {
                const teks = acao === 'add' ? (wl2.legendabv2 ? legendaBase(wl2.legendabv2) : welcome2(numero, subject)) : (wl2.legendasaiu2 ? legendaBase(wl2.legendasaiu2) : bye2(numero));
                await keisen.sendMessage(mdata_2.id, {
                    text: teks,
                    contextInfo: { ...NkChannelKk, mentionedJid: [participante] }
                });
            } else if (acao === 'remove') {
                const teks = wl2.legendasaiu2
                    ? legendaBase(wl2.legendasaiu2)
                    : bye2(numero);
                await keisen.sendMessage(mdata_2.id, {
                    text: teks,
                    contextInfo: { ...NkChannelKk, mentionedJid: [participante] }
                });
            }
        }

        } catch (e) {
            console.log(e);
        }
    });
}

startConnect().catch(error => console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error)));