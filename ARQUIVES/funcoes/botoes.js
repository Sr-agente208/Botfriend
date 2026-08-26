const fs = require("fs")
const { prepareWAMessageMedia } = require(`@whiskeysockets/baileys`)

let botoesConfig = { botoes: true };
try {
  botoesConfig = JSON.parse(fs.readFileSync("./DADOS DO KEISEN/INFO_KEISEN/media/nescessario.json"));
} catch {}

const botoes = botoesConfig.botoes !== undefined ? botoesConfig.botoes : true;

const sendButton = async(from, dados, keisen, sender, options, selo, quotedInfo = null) => {
  try {
    if(botoes) {
      let but = []
      for(let i of options) {
        if(i.type == `copy_url`) but.push({name: "cta_url", buttonParamsJson: JSON.stringify({display_text: i.text, url: i.url, merchant_url: i.url})})
        if(i.type == `copy_text`) but.push({name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: i.text, copy_code: i.url})})
        if(i.type == `call`) but.push({name: "cta_call", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.url})})
        if(i.type == `cmd`) but.push({name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.command, disabled: false})})
        if(i.type == `list` || i.type == `lista`) {
          let caixa = []
          for(let a of (i.sections || i.rowId || [])) {
            let lista = []
            for(let b of (a.options || [])) {
              lista.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
            }
            caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: lista})
          }
          // Fallback se sections vier direto
          if (caixa.length === 0 && i.sections) {
            for(let a of i.sections) {
              let lista = []
              for(let b of (a.rows || a.options || [])) {
                lista.push({header: b?.header || ``, title: b?.title || ``, description: b?.description || b?.body, id: b?.id || b?.command || ``, disabled: false})
              }
              caixa.push({title: a?.title || ``, highlight_label: a?.highlight_label || a?.body || ``, rows: lista})
            }
          }
          but.push({name: "single_select", buttonParamsJson: JSON.stringify({title: i.title, sections: caixa})})
        }
      }
      
      // quoted message safe
      let quotedMsg = null;
      try {
        if (quotedInfo && quotedInfo.message) quotedMsg = quotedInfo.message;
        else if (selo && selo.message) quotedMsg = selo.message;
      } catch {}

      if(dados?.text) {
        return keisen.relayMessage(from, {
          interactiveMessage: {
            body: {text: dados?.text || ``}, 
            footer: {text: dados?.footer || `🪷 WHITE LOTUS 🪷`}, 
            contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
            nativeFlowMessage: {buttons: but, messageParamsJson: ""}
          }
        }, {});
      }
      if(dados?.image) {
        let img = await prepareWAMessageMedia({image: dados?.image}, {upload: keisen.waUploadToServer})
        return keisen.relayMessage(from, {
          interactiveMessage: {
            header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, 
            headerType: `IMAGE`, 
            body: {text: dados?.caption || ``}, 
            footer: {text: dados?.footer || `🪷 WHITE LOTUS 🪷`}, 
            contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
            nativeFlowMessage: {buttons: but, messageParamsJson: ""}
          }
        }, {});
      }
      if(dados?.video) {
        let vid = await prepareWAMessageMedia({video: dados?.video}, {upload: keisen.waUploadToServer})
        return keisen.relayMessage(from, {
          interactiveMessage: {
            header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, 
            headerType: `VIDEO`, 
            body: {text: dados?.caption || ``}, 
            footer: {text: dados?.footer || `🪷 WHITE LOTUS 🪷`}, 
            contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
            nativeFlowMessage: {buttons: but, messageParamsJson: ""}
          }
        }, {});
      }
    } else {
      if(dados?.text) return keisen.sendMessage(from, {text: dados?.text, mentions: dados?.mentions}, {quoted: selo})
      if(dados?.image) return keisen.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions}, {quoted: selo})
      if(dados?.video) return keisen.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions}, {quoted: selo})
    }
  } catch(e) {
    console.log('[sendButton ERRO]', e.message);
    console.log(e.stack);
    // Fallback para mensagem simples
    try {
      if(dados?.text) return keisen.sendMessage(from, {text: dados?.text, mentions: dados?.mentions}, {quoted: selo})
      if(dados?.image) return keisen.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions}, {quoted: selo})
      if(dados?.video) return keisen.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions}, {quoted: selo})
      if(dados?.caption) return keisen.sendMessage(from, {text: dados?.caption, mentions: dados?.mentions}, {quoted: selo})
    } catch(e2) {}
  }
}

const sendListB = async(from, dados, keisen, sender, title, lista, quotedInfo = null) => {
  try {
    if(botoes) {
      let caixa = []
      for(let a of lista) {
        let hehe = []
        for(let b of (a.options || a.rows || [])) {
          hehe.push({header: b?.name || b?.header || ``, title: b?.title || ``, description: b?.body || b?.description, id: b?.command || b?.id || ``, disabled: false})
        }
        caixa.push({title: a?.title || ``, highlight_label: a?.body || a?.highlight_label || ``, rows: hehe})
      }
      let but = [{name: "single_select", buttonParamsJson: JSON.stringify({title: title, sections: caixa})}]

      let quotedMsg = null;
      try {
        if (quotedInfo && quotedInfo.message) quotedMsg = quotedInfo.message;
        else if (quotedInfo && quotedInfo.key) quotedMsg = null;
      } catch {}

      if(dados?.text) {
        return keisen.relayMessage(from, {
          interactiveMessage: {
            body: {text: dados?.text || ``}, 
            footer: {text: dados?.footer || `🪷 WHITE LOTUS`}, 
            contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
            nativeFlowMessage: {buttons: but, messageParamsJson: ""}
          }
        }, {});
      }
      if(dados?.image) {
        let img = await prepareWAMessageMedia({image: dados?.image}, {upload: keisen.waUploadToServer})
        return keisen.relayMessage(from, {
          interactiveMessage: {
            header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, 
            headerType: `IMAGE`, 
            body: {text: dados?.caption || ``}, 
            footer: {text: dados?.footer || `🪷 WHITE LOTUS`}, 
            contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
            nativeFlowMessage: {buttons: but, messageParamsJson: ""}
          }
        }, {});
      }
      let vid = await prepareWAMessageMedia({video: dados?.video}, {upload: keisen.waUploadToServer})
      return keisen.relayMessage(from, {
        interactiveMessage: {
          header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, 
          headerType: `VIDEO`, 
          body: {text: dados?.caption || ``}, 
          footer: {text: dados?.footer || `🪷 WHITE LOTUS`}, 
          contextInfo: {mentionedJid: dados?.mentions || [], ...(quotedMsg ? {quotedMessage: quotedMsg} : {})}, 
          nativeFlowMessage: {buttons: but, messageParamsJson: ""}
        }
      }, {});
    } else {
      if(dados?.text) return keisen.sendMessage(from, {text: dados?.text, mentions: dados?.mentions}, {quoted: quotedInfo})
      if(dados?.image) return keisen.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions}, {quoted: quotedInfo})
      return keisen.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions}, {quoted: quotedInfo})
    }
  } catch(e) {
    console.log('[sendListB ERRO]', e);
  }
}

module.exports = { sendButton, sendListB }
