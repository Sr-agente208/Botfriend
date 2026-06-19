exports.ErrorBaileys_401 = () => {
return "Você me desconectou? A sessão precisa ser escaneada novamente... Estou reiniciando!"
}

exports.ErrorBaileys_408 = () => {
return "A sessão sofreu um timeout, recarregando..."
}

exports.ErrorBaileys_411 = () => {
return "A sessão salva não bate com a conexão salva, reiniciando sua sessão..."
}

exports.ErrorBaileys_428 = () => {
return "A conexão fechou, sua internet pode ter caído? Tentando reconectar..."
}

exports.ErrorBaileys_440 = () => {
return "Existem muitas sessões do WhatsApp conectadas no meu número, feche-as..."
}

exports.ErrorBaileys_500 = () => {
return "Sessão esta sobrecarregada, estarei reiniciando..."
}

exports.ErrorBaileys_515 = () => {
return "INICIANDO A SESSÃO DO KAISEN 😖"
}

exports.open = () => {
return "KeisenBot-mCONECTADO COM SUCESSO AO WHATSAPP 💌"
}

exports.connecting = () => {
return "KeisenBot-CONECTANDO AO WHATSAPP, AGUARDE.. >_<"
}

exports.blackList = (GroupMetadata_, sab2) => { 
  const participant = sab2.participants[0].split("@")[0]
  const response = [
    `*ᴏʟʜᴀ ꜱᴏ... ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ᴘᴏʀ ᴇꜱᴛᴀʀ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ* 💀🙅‍♂️`,
    `*ᴠᴏᴄᴇ̂ ᴍᴇ ᴇꜱǫᴜᴇᴄᴇᴜ? ᴘᴇɴᴀ ǫᴜᴇ ᴇᴜ ɴᴀ̃ᴏ ᴛᴇ ᴇꜱǫᴜᴇᴄɪ 😎*`,
    `*ᴄᴀᴅᴇ̂ ᴀ ᴄᴀʀᴀ ᴅᴇ ᴘᴀᴜ? ᴀᴄʜᴏᴜ ǫᴜᴇ ɪᴀ ᴘᴀꜱꜱᴀʀ ɪʟᴇꜱᴏ? ɴᴀ̃ᴏ ᴄᴏᴍ ᴏ YᴜᴛᴀBᴏᴛ ᴀǫᴜɪ 💢🤨*`,
    `* ꜰᴏɪ ʙᴀɴɪᴅᴏ ᴅᴇ ᴘᴏʀ ᴄᴀᴜꜱᴀ ᴅᴀ ꜰᴀᴍᴏꜱᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ...* 💥🙇‍♂️`,
    `*ᴀᴅᴇᴜꜱ, ᴇᴜ ᴀᴠɪꜱᴇɪ... ᴏ ᴋᴀʀᴍᴀ ᴠᴏʟᴛᴀ* ☠️🌀`
  ]
  return response[Math.floor(Math.random() * response.length)]
}


exports.phrasesLeft = (getName, sab2, encodeURIComponent) => {
response = ["Devemos brindar pela partida dele(a)?", "Menos um nessa indústria vital...", "Nada pra ver aqui, ele saiu por 'acidente'...", `${encodeURIComponent(getName(sab2.participants[0]))} saiu do grupo...`]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesWelcome = (mdata_2, getName, sab2, encodeURIComponent) => {
response = [`ao grupo ${encodeURIComponent(mdata_2.subject)}`, `O ${encodeURIComponent(getName(sab2.participants[0].split('@')[0]))} acaba de cair de paraquedas aqui no grupo...`, "Leia as regras e divirta-se!", "Mais um nessa indústria vital...", "Gostaria de um chá enquanto lê as regras?", "Saudações membro novo, aqui é a gerente do estabelecimento!"]
return response[Math.floor(Math.random() * response.length)]
}

exports.wait = () => {
return '*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ǫᴜᴇ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*'
}

exports.onlyAdmins = () => {
return '*sᴏᴍᴇɴᴛᴇs ᴀᴅᴍs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*'
}

exports.onlyOwner = () => {
return '*sᴏᴍᴇɴᴛᴇ ᴍᴇᴜs ᴅᴏɴᴏs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ!👮🏻*'
}

exports.onlyGroup = () => {
return '*sᴏᴍᴇɴᴛᴇ ᴇᴍ ɢʀᴜᴘᴏs! 🙇‍♂*'   
}
    
exports.onlyVipUser = () => {
return '*ᴀᴘᴇɴᴀs ᴜsᴜᴀʀɪᴏs ᴠɪᴘs 💁‍♂️*'
}

exports.onlyBotAdmin = () => {
return '*ᴇᴜ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍ ᴅᴏ ɢʀᴜᴘᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*'
}

exports.onlyGroupFun = (prefixo) => {
return `*ᴏ ᴍᴏᴅᴏʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀʀ ᴀᴛɪᴠᴏ 🙇‍♂️*.`
}

exports.onlyPrivate = () => {
response = [
    '🔐 Hello, o comando só está disponível para o uso em conversas privadas...',
    '😵‍💫🌟 Hello, o comando é somente liberado em conversas privadas! Mas tome cuidado ao me chamar no privado, meu dono(a) deve ter ativado o anti-pv.'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.bannedUser = () => {
response = [
    'Você infligiu uma cláusulas do meus termos e condições de uso, por isso, você está banido de usar meus comandos por tempo indeterminado...️',
    'Você está impossibilitado de usar meus comandos, ou seja, está bloqueado por tempo indeterminado até meus superiores mudar de ideia... 😭👋🏼',
    '*Meu deus!* 😱 Você deve ter deixado meu dono com muita raiva, para ele te banir mesmo de usar meus comandos...'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.teste = () => {
response = [ "*ᴇᴜ ᴇsᴘᴇʀᴇɪ ᴛᴀɴᴛᴏ, ᴄʜᴏʀᴇɪ ᴛᴀɴᴛᴏ ᴏʀᴀɴᴅᴏ ᴀ ᴅᴇᴜs ᴘᴇᴅɪɴᴅᴏ ᴜᴍᴀ ᴍᴜʟʜᴇʀ ɪᴅᴇᴀʟ ᴘᴀʀᴀ ᴍɪᴍ, ᴇ ᴠᴇᴊᴀᴍ sᴏ.. ʜᴀʀᴜɴɴɪ ᴇɴᴛʀᴏᴜ ᴇᴍ ᴍɪɴʜᴀ ᴠɪᴅᴀ ᴇᴍ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴏɴᴅᴇ ᴇᴜ ᴘʀᴇᴄɪsᴀᴠᴀ, ᴇᴜ ᴀᴍᴏ ᴛᴀɴᴛᴏ ᴇʟᴀ ǫᴜᴇ ғɪᴢ ᴍᴜɪᴛᴀ ᴍᴜᴅᴀɴᴄᴀ ᴇᴍ ᴍɪᴍ ᴍᴇsᴍᴏ sᴏ ᴘʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴄᴏᴍ ᴇʟᴀ. 😼*\n\n» 👁️‍🗨️ Yuka Modz",
   "*ᴇᴜ sᴏ ǫᴜᴇʀɪᴀ ᴀʟɢᴜᴇᴍ ᴘʀᴀ ᴀᴍᴀʀ ᴇ sᴇ sᴇɴᴛɪʀ ᴀᴍᴀᴅᴏ, ᴇ ᴅᴇᴜs ᴍᴇ ᴅᴇᴜ ᴜᴍᴀ ᴘᴇssᴏᴀ ɪɴᴄʀɪᴠᴇʟ, ʜᴀʀᴜɴɴɪ ᴏ ɴɪᴄᴋ ᴅᴇʟᴀ, ᴇʟᴀ ᴇ ᴜᴍ ᴘʀᴇsᴇɴᴛᴇ ᴅᴇ ᴅᴇᴜs ᴘʀᴀ ᴍɪᴍ. 💖🙇‍♂️*\n\n» 👁️‍🗨️ Yuka Modz",
   "*ᴇᴜ ᴛᴇɴʜᴏ ᴍᴀɪs ᴅᴇ ᴜᴍ ᴀɴᴏ ᴅᴇ ᴄʀɪᴀᴄᴀᴏ, ᴠᴏᴄᴇ ᴀᴄʜᴀ ᴍᴇsᴍᴏ ǫᴜᴇ ᴇᴜ ᴠᴏᴜ ᴅᴇɪxᴀʀ ᴠᴏᴄᴇ ɴᴀ ᴍᴀᴏ? ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ ʀsʀs 🙇‍♂️*",
      `*ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ ᴀᴍᴀ ᴛᴀɴᴛᴏ ᴀ ʜᴀʀᴜɴɴɪ.. ᴇʟᴇ ᴅᴀʀɪᴀ ǫᴜᴀʟǫᴜᴇʀ ᴄᴏɪsᴀ ᴘʀᴀ ᴠᴇʀ ᴇʟᴀ ғᴇʟɪᴢ 🥺*`,
    '*ᴇᴍʙᴏʀᴀ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ sᴇᴊᴀ ᴀʀʀᴏɢᴀɴᴛᴇ ᴄᴏᴍ ᴍᴜɪᴛᴏs ᴇ sᴏᴍᴇɴᴛᴇ ʙᴏɴᴢɪɴʜᴏ ᴄᴏᴍ ᴀ ᴍɪɴʜᴀ sᴜʙ ᴅᴏɴᴀ ʜᴀʀᴜɴɴɪ, ɴᴏ ғᴜɴᴅᴏ ᴇʟᴇ ᴇ ᴜᴍ ᴄᴀʀᴀ ʟᴇɢᴀʟ.. ᴇɴᴠɪᴀɴᴅᴏ 🚀*',
        `*ᴘᴏᴠ: "- ᴄᴀᴅᴇ sᴇᴜ ɴᴀᴍᴏʀᴀᴅᴏ❓"*\n\n*ᴇʟᴀ: "- ᴘᴇᴅɪɴᴅᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘʀᴀ ʙᴏᴛ ᴅᴇ Wʜᴀᴛsᴀᴘᴘ 😅"*\n\n*ᴋᴋᴋᴋᴋᴋᴋᴋᴋ, ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*`,
  "*ᴇɴǫᴜᴀɴᴛᴏ ᴇᴜ ғᴀᴄᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ, ᴄᴀɴᴛᴇ ᴄᴍɢ ᴀǫᴜɪ, ᴀᴀᴀᴀʜ sᴇ ᴇʟᴀ sᴏᴜʙᴇssᴇ ǫᴜᴇ ǫᴜᴀɴᴅᴏ ᴇʟᴀ ᴘᴀssᴀ... 🎶*",
  "*ᴍᴀɴᴏᴏ ᴠᴏᴄᴇ ᴊᴀ ᴛᴏᴍᴏᴜ ᴀɢᴜᴀ ʜᴊ? ᴘғᴠʀ vᴀɪ ᴛᴏᴍᴀʀ 3 ᴄᴏᴘᴏs ᴅ'ɢᴜᴀ cᴏʀʀᴇ ᴇnǫᴜᴀɴᴛᴏ ᴇɴᴠɪᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 😳🥤*",
  "*ɴᴜɴᴄᴀ ᴊᴜʟɢᴜᴇ ᴜᴍ ʟɪᴠʀᴏ ᴘᴇʟᴀ ᴄᴀᴘᴀ, ᴠᴏᴄᴇ ɪʀᴀ sᴇ ᴀʀʀᴇᴘᴇɴᴅᴇʀ ᴅɪssᴏ. 💭*\n\n» 👁️‍🗨️ Yuka Modz",
  "*ᴇᴜ sᴇᴍᴘʀᴇ ʙᴜsᴄᴏ ᴘᴀᴢ ᴇ ᴛʀᴀɴǫᴜɪʟɪᴅᴀᴅᴇ.. ᴍɪɴʜᴀ ᴍᴇɴᴛᴇ ɴᴀᴏ ᴘᴏᴅᴇ sᴇʀ ᴜᴍᴀ ᴅᴀs ᴍᴇʟʜᴏʀᴇs, ᴍᴀs ᴏ ᴍᴇᴜ ғᴏᴄᴏ ᴇ ᴅᴇᴛᴇʀᴍɪɴᴀᴄᴀᴏ ғᴀᴢ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ, sᴇ ᴇsғᴏʀᴄᴇ sᴇᴍᴘʀᴇ ǫᴜᴇ ᴠᴏᴄᴇ ɪʀᴀ ᴀʟᴇᴍ. 🚀*\n\n» 👁️‍🗨️ Yuka Modz",
  "*💬 ᴏ ɢʀᴀɴᴅᴇ sᴇɢʀᴇᴅᴏ ᴘᴀʀᴀ ᴛᴇʀ ᴜᴍᴀ ᴠɪᴅᴀ ʙᴏᴀ, ᴇ ᴇɴᴄᴏɴᴛʀᴀʀ ᴏ sᴇᴜ ᴅᴇsᴛɪɴᴏ ᴇ ʀᴇᴀʟɪᴢᴀ-ʟᴏ*\n\n» 👁️‍🗨️ Yuka Modz",
  "*ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ... ᴀʜʜ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ, ᴇᴜ ᴀᴍᴏ ᴇʟᴇ ᴅᴍs, sᴇᴍ ᴇʟᴇ ᴇᴜ ɴᴀᴏ ᴇsᴛᴀʀɪᴀ ᴀǫᴜɪ ᴄᴏᴍ ᴠᴄs 🥺*",
"*ᴍᴇᴜs sᴇʀᴠɪᴄᴏs ᴄᴏᴍᴇᴄᴀʀᴀᴍ ɴᴏ ᴅɪᴀ 21/06/2024 📆, ᴠᴏᴄᴇ ᴀᴄʜᴀ ᴍᴇsᴍᴏ ǫᴜᴇ ɪʀᴇɪ ᴅᴇɪxᴀʀ ᴠᴏᴄᴇ ɴᴀ ᴍᴀᴏ? ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴀɪ ǫᴜᴇ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*",
"*sᴀʙᴇ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ sᴇᴜ(ᴀ) ᴇx ᴇ ᴏ ʀᴇxᴏɴᴀ? ᴏ ʀᴇxᴏɴᴀ ɴᴀᴏ ᴛᴇ ᴀʙᴀɴᴅᴏɴᴀ, ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ 😹*",
"*ɢᴏsᴛᴀʀɪᴀ ᴅᴇ ᴄᴏɴᴛʀᴀᴛᴀʀ ᴍᴇᴜs sᴇʀᴠɪᴄᴏs? ᴇɴᴛʀᴇ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴍᴇᴜ ᴅᴏɴᴏ, ᴀɢᴏʀᴀ ᴅᴇɪxᴇ ᴇᴜ ᴇɴᴠɪᴀʀ sᴇᴜ ᴘᴇᴅɪᴅᴏ ʟᴏɢᴏ 💁‍♂️*",
"*sᴀʙᴇ ǫᴜᴀʟ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ ᴇᴜ ᴇ ᴠᴏᴄᴇ? ᴇᴜ sᴏᴜ ᴏ ᴘʀᴏᴛᴀɢᴏɴɪsᴛᴀ! ᴇɴᴠɪᴀɴᴅᴏ.. 🗿*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ʙᴀᴛᴇʀɪᴀ ғʀᴀᴄᴀ, ᴍᴀs ᴍᴇ ᴅᴇɪxᴀ sᴇᴍ ᴇɴᴇʀɢɪᴀ, ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 😹*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ɴᴏᴛɪғɪᴄᴀᴄᴀᴏ, ᴍᴀs ᴍᴇᴜ ᴄᴏʀᴀᴄᴀᴏ ᴠɪʙʀᴀ ǫᴜᴀɴᴅᴏ ᴛᴇ ᴠᴇᴊᴏ, ᴀɢᴜᴀʀᴅᴇ.. 😳*",
"*sᴀʙᴇ ᴏ ǫᴜᴇ ᴇᴜ ᴇ ᴏ ɢᴏᴏɢʟᴇ ᴛᴇᴍᴏs ᴇᴍ ᴄᴏᴍᴜᴍ? ᴀ ɢᴇɴᴛᴇ sᴀʙᴇ ᴅᴇ ᴛᴜᴅᴏ, ᴍᴀs ғɪɴɢᴇ ǫᴜᴇ ɴᴀᴏ, ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ 🙇‍♂️*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ɢᴘs, ᴍᴀs ᴠɪᴠᴇ ᴍᴇ ᴅᴇɪxᴀɴᴅᴏ sᴇᴍ ʀᴜᴍᴏ 😔, ᴇɴᴠɪᴀɴᴅᴏ ✨*",
"*sᴀʙᴇ ᴏ ǫᴜᴇ ᴇᴜ ᴇ ᴀ ᴘʀᴇɢᴜɪᴄ̧ᴀ ᴛᴇᴍᴏs ᴇᴍ ᴄᴏᴍᴜᴍ? ᴀ ɢᴇɴᴛᴇ ᴄᴏᴍᴇᴄ̧ᴀ ᴏ ᴅɪᴀ sᴇᴍ ᴠᴏɴᴛᴀᴅᴇ ɴᴇɴʜᴜᴍᴀ ᴅᴇ sᴇʀᴠɪʀ ᴏs ᴏᴜᴛʀᴏs, ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ 😡*",
"*sᴇ ᴘᴀᴄɪᴇ̂ɴᴄɪᴀ ғᴏssᴇ ᴅɪ́ᴠɪᴅᴀ, ᴇᴜ ᴇsᴛᴀʀɪᴀ ᴅᴇᴠᴇɴᴅᴏ ᴘʀᴏ ᴜɴɪᴠᴇʀsᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 💪*",
"*ᴛᴇᴍ ɢᴇɴᴛᴇ ǫᴜᴇ ᴇ ɪɢᴜᴀʟ ɴᴜᴠᴇᴍ... ǫᴜᴀɴᴅᴏ sᴏᴍᴇ, ᴏ ᴅɪᴀ ᴀᴛᴇ ᴍᴇʟʜᴏʀᴀ, ᴀɢᴜᴀʀᴅᴇ.. 🦜*",
"*📆 ᴇᴍ 365 ᴅɪᴀs ᴜ́ᴛᴇɪs ᴛᴇʀᴍɪɴᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ 😂 ᴍᴇᴍᴇ, ᴛᴏ ᴇɴᴠɪᴀɴᴅᴏ! 😻*",
"*sᴀɪ ᴅᴏ ᴍᴇɪᴏ ǫᴜᴇ ᴇᴜ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴғɪᴀɴᴅᴏ, ᴏᴘᴀ ᴅɪɢᴏ.. ᴇɴᴠɪᴀɴᴅᴏ! 😹*",
"*sᴏᴜ ᴜᴍ ᴘʀᴏᴊᴇᴛᴏ ғᴇɪᴛᴏ ᴘᴀʀᴀ ᴇɴᴛʀᴇɢᴀʀ ᴛᴜᴅᴏ ʀᴀ́ᴘɪᴅᴏ ᴇ ᴇғɪᴄᴀᴢ, sᴇᴍᴘʀᴇ ᴍᴇʟʜᴏʀᴀɴᴅᴏ ɴᴀ ᴏᴛɪᴍɪᴢᴀᴄ̧ᴀ̃ᴏ ᴇ ᴅᴇsᴇᴍᴘᴇɴʜᴏ, ᴇɴᴠɪᴀɴᴅᴏ.. ⚡*",
"*ᴀ ᴠɪᴅᴀ ᴇ ᴀᴘᴇɴᴀs ᴜᴍᴀ, ᴇɴᴛᴀ̃ᴏ ᴀᴘʀᴏᴠᴇɪᴛᴇ ᴇʟᴀ sᴇᴍ sᴇ ᴘʀᴇᴏᴄᴜᴘᴀʀ ᴍᴜɪᴛᴏ ᴄᴏᴍ ᴀs ᴄᴏɪsᴀs, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 🙇‍♂️*",
"*sᴀʙᴇ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ ᴇᴜ ᴇ sᴇᴜ(ᴀ) ᴇx? ᴇᴜ sᴇᴍᴘʀᴇ ᴇsᴛᴀʀᴇɪ ᴄᴏᴍ ᴠᴏᴄᴇ, ᴍᴀs ᴇ ᴇʟᴇ(ᴀ)? ᴛᴇ ᴀʙᴀɴᴅᴏɴᴏᴜ ᴄᴏᴍᴏ sᴇ ɴᴀᴏ ғᴏssᴇ ɴᴀᴅᴀ.. ᴇɴᴠɪᴀɴᴅᴏ 🥲*"  
]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
      `⚠️ Olá @${mentionUser.split('@')[0]}, você está sendo banido(a) do grupo. Por motivo que você está com ddd proibido aqui!`, 
      `🪦 Olá @${mentionUser.split('@')[0]}, venho informar que você está sendo banido(a), por motivo que você possuí um número com o DDD de um estado proibido neste grupo.`,
      `👺 Suma daqui! Números com o DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupo.`,
      `😾 Ei, você e nem possuidores do DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste barzinho aqui!`
    ];
  return response[Math.floor(Math.random() * response.length)];
}

exports.acert = (pushname, dataA, resposta) => {
return `
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎    
    ↳ Parabéns *${pushname}*, você acertou o anagrama apresentado!\n • Como recompensa você acaba de ganhar *20 N-Coins*\nA palavra original era: *${dataA.resposta}*. Estou iniciando o próximo jogo em 5s! Aguarde...`;
 }

exports.coins = (tempo, sender, prefix) => {
return ` ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎    ↳ ${tempo} ↝ @${sender.split('@')[0]} ↴\n\n • Você acaba de ganhar *50 N-Coins* pela primeira mensagem do dia 💫\n\n↳ Caso queira saber mais, use o *${prefix}menucoins* 💕
-`;
}
exports.errorConvertSticker = () => {
return 'Falha ao converter a mídia encaminhada, tente novamente mais tarde...';
}

exports.errorCommandLink = () => {
return '*ᴄᴇʀᴛɪғɪǫᴜᴇ-sᴇ sᴇ ᴇssᴇ ʟɪɴᴋ ᴇsᴛᴀ ᴄᴇʀᴛᴏ ɴᴏ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*';
}

exports.perfilkeisen = (pushname, sender, status, isChVip, isCargo, dadosUser, pct, programa, conselho, NomeDoBot) => {
  return `- 𝐃𝐀𝐃𝐎𝐒 𝐃𝐎 𝐔𝐒𝐄𝐑 〽️
•╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
ִ ࣪𖤐﹒✨₎﹒𝐍𝐈𝐂𝐊 - ${pushname || "nao definido"}
ִ ࣪𖤐﹒🕊️₎﹒𝐍𝐔𝐌𝐄𝐑𝐎 - ${sender.split("@")[0]}
ִ ࣪𖤐﹒💯₎﹒𝐁𝐈𝐎 - ${status}
ִ ࣪𖤐﹒🌪️₎﹒𝐕𝐈𝐏 - ${isChVip || "nao"}
ִ ࣪𖤐﹒🥊₎﹒𝐂𝐀𝐑𝐆𝐎 - ${isCargo || "nenhum"}
•
- 𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄 ⚠️
•
ִ ࣪𖤐﹒💬₎﹒𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐍𝐒 - ${dadosUser.messages}
ִ ࣪𖤐﹒📜₎﹒𝐂𝐌𝐃𝐒 - ${dadosUser.cmd_messages}
ִ ࣪𖤐﹒🧸₎﹒𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 - ${dadosUser.figus}
ִ ࣪𖤐﹒🖼️₎﹒𝐈𝐌𝐀𝐆𝐄𝐍𝐒 - ${dadosUser.imagens}
ִ ࣪𖤐﹒🎥₎﹒𝐕𝐈𝐃𝐄𝐎𝐒 - ${dadosUser.videos}
ִ ࣪𖤐﹒🎧₎﹒𝐀𝐔𝐃𝐈𝐎𝐒 - ${dadosUser.audios}
ִ ࣪𖤐﹒📄₎﹒𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎𝐒 - ${dadosUser.documentos}
•
- 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃𝐄 📝
•
ִ ࣪𖤐﹒🐂₎﹒𝐍𝐈𝐕𝐄𝐋-𝐆𝐀𝐃𝐎 - ${pct()}
ִ ࣪𖤐﹒🔞₎﹒𝐍𝐈𝐕𝐄𝐋-𝐏𝐔𝐓𝐀 - ${pct()}
ִ ࣪𖤐﹒😋₎﹒𝐍𝐈𝐕𝐄𝐋-𝐆𝐎𝐒𝐓𝐎𝐒𝐔𝐑𝐀 - ${pct()}
ִ ࣪𖤐﹒🏳️‍🌈₎﹒𝐍𝐈𝐕𝐄𝐋-𝐆𝐀𝐘 - ${pct()}
ִ ࣪𖤐﹒😻₎﹒𝐍𝐈𝐕𝐄𝐋-𝐋𝐈𝐍𝐃𝐎(𝐀) - ${pct()}
ִ ࣪𖤐﹒😈₎﹒𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐀 - R$${programa}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯
- 𝐂𝐎𝐍𝐒𝐄𝐋𝐇𝐎 ↴
> ${conselho}
-
> *${NomeDoBot}*`
}

exports.fig = (ownerName, NomeDoBot) => {
   return  `➪ 𖥔 ݁ ˖💍𖥔 ݁ ˖  ᴄʀɪᴀᴅᴀ ᴘᴏʀ ↴\n↳ 『 ${NomeDoBot} 』\n\n➪  𖥔 ݁ 𖥔 ݁ ˖  ɴɪᴄᴋ ᴅᴏɴᴏ ↴\n↳ 『 ${ownerName} 』\n──────`
}

exports.fig2 = (pushname, groupName, isGroup) => {
return `──────\n➮ 𖥔 ݁ ˖🌹𖥔 ݁ ˖  ғᴇɪᴛᴀ ᴘᴏʀ ↴\n↳ 『 ${pushname} 』\n\n➮ 𖥔 ݁ ˖💌𖥔 ݁ ˖  ɢʀᴜᴘᴏ ↴\n↳ 『 ${isGroup ? groupName : "privado"} 』`
}

exports.shazam = (infoMusica) => {
    return `- *💿 ᴍᴜꜱɪᴄᴀ ɪᴅᴇɴᴛɪꜰɪᴄᴀᴅᴀ 💁‍♂️*
─────────────────────
*🎤 ᴀʀᴛɪꜱᴛᴀ:* ${infoMusica.artista}
*🎵 ᴛɪ́ᴛᴜʟᴏ:* ${infoMusica.titulo}
*💽 ᴀ́ʟʙᴜᴍ:* ${infoMusica.album}
*🏷️ ʀᴏ́ᴛᴜʟᴏ:* ${infoMusica.rotulo}
─────────────────────
*📺 ᴠɪ́ᴅᴇᴏ:* ${infoMusica.tituloYT}
*⏱️ ᴅᴜʀᴀᴄᴀᴏ:* ${infoMusica.duracaoYT}
*👁️ ᴠɪꜱᴜᴀʟɪᴢᴀᴄᴏᴇꜱ:* ${infoMusica.viewsYT}
*📅 ʟᴀɴᴄ̧ᴀᴍᴇɴᴛᴏ:* ${infoMusica.publicadoYT}
*🔗 ʟɪɴᴋ:* ${infoMusica.linkYT}`;
};

exports.perfil2 = (mentionMessage, b) => {
  return `
• 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 𝐃𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃𝐄 𝐃𝐄 @${mentionMessage.split("@")[0]} ✨ ↴
-
░⃟⃛ ➮ 𝐄𝐒𝐓𝐀 𝐏𝐄𝐒𝐒𝐎𝐀 𝐏𝐄𝐒𝐒𝐎𝐀𝐋𝐌𝐄𝐍𝐓𝐄 𝐄: *${b.genero}*
░⃟⃛ ➮ 𝐆𝐎𝐒𝐓𝐀 𝐃𝐄: *${b.hobbie}*
░⃟⃛ ➮ 𝐒𝐔𝐀 𝐏𝐑𝐎𝐅𝐈𝐒𝐒𝐀̃𝐎: *${b.job}*
░⃟⃛ ➮ 𝐀 𝐇𝐎𝐑𝐀 𝐅𝐀𝐕𝐎𝐑𝐈𝐓𝐀 𝐃𝐎 𝐃𝐈𝐀 𝐄́: *${b.clima}*
░⃟⃛ ➮ 𝐒𝐄𝐔 𝐄𝐒𝐓𝐈𝐋𝐎 𝐃𝐄 𝐌𝐔́𝐒𝐈𝐂𝐀 𝐄́: *${b.estilo_musical}*
░⃟⃛ ➮ 𝐓𝐄𝐌𝐏𝐄𝐑𝐀𝐓𝐔𝐑𝐀 𝐅𝐀𝐕 𝐄́: *${b.temperatura}*
-

• 𝐄𝐒𝐏𝐄𝐑𝐎 𝐓𝐄𝐑 𝐀𝐂𝐄𝐑𝐓𝐀𝐃𝐎 𝐏𝐄𝐋𝐎 𝐌𝐄𝐍𝐎𝐒 𝐔𝐌𝐀 𝐇𝐄𝐈𝐍 @${mentionMessage.split("@")[0]} 👀
`;
};

exports.idade = (q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot) => {
  return `
*🎂 ᴅᴀᴛᴀ ᴅᴇ ɴᴀsᴄɪᴍᴇɴᴛᴏ:* ${q}
*🌟 ɪᴅᴀᴅᴇ:* ${anos} ᴀɴᴏs, ${meses} ᴍᴇsᴇs ᴇ ${dias} ᴅɪᴀs

*📊 𝑬𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪𝑨𝑺 𝑫𝑬 𝑽𝑰𝑫𝑨*

*🩸 ᴅɪᴀs ᴠɪᴠɪᴅᴏs:* ${diasVividos}
*⏰ ʜᴏʀᴀs ᴠɪᴠɪᴅᴀs:* ${horasVividas}
*⏱ ᴍɪɴᴜᴛᴏs ᴠɪᴠɪᴅᴏs:* ${minutosVividos}
*📍ғᴀʟᴛᴀᴍ:* ${diasParaAniversario} ᴅɪᴀs ᴘᴀʀᴀ ᴏ ᴘʀᴏxɪᴍᴏ ᴀɴɪᴠᴇʀsᴀʀɪᴏ

> ${NomeDoBot}
`;
};

exports.textCep = (ABC) => {
return `*🧭 INFORMAÇÕES DO CEP:*

*📍 Cep:* ${ABC.cep}
*🏘️ Rua:* ${ABC.rua}
*🏗️ Complemento:* ${ABC.complemento}
*🌆 Bairro:* ${ABC.vizinhanca || ABC.vizinhança}
*🏙️ Cidade:* ${ABC.cidade}
*🗺️ Estado:* ${ABC.estado}

*🧮 Gia:* ${ABC.gia}
*🏛️ Ibge:* ${ABC.ibge}
*📞 DDD:* ${ABC.ddd}
*💼 Siafi:* ${ABC.siafi}`;
};

exports.textInfoGrupo = (meta, groupAdmins, groupMembers, prefix, moment) => {
return `•:🌹: 𝐈𝐍𝐅𝐎 𝐆𝐑𝐔𝐏𝐎

*📛 NOME:* ${meta.subject}
*🆔 ID:* ${meta.id}

*👑 CRIADOR:* @${(meta.subjectOwner || '').replace('@s.whatsapp.net', '') || 'Não encontrado'}
*📅 CRIAÇÃO:* ${moment(meta.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}
*🕓 ÚLTIMA ALTERAÇÃO:* ${moment(meta.subjectTime * 1000).format('DD/MM/YYYY HH:mm:ss')}

*👥 MEMBROS:* ${groupMembers.length}
*🛡️ ADMINS:* ${groupAdmins.length}
*📊 TOTAL:* ${meta.participants.length}

*📝 DESCRIÇÃO:*
${meta.desc}

*🔒 FECHADO:* ${meta.announce ? 'Sim' : 'Não'}
*⚙️ EDIÇÃO POR MEMBROS:* ${meta.restrict ? 'Não' : 'Sim'}

*📌 COMANDOS ÚTEIS:*
> ${prefix}atividade
> ${prefix}inativos [quantidade]`;
};

exports.avalia = ({ randomMember, info, groupName, isChVip, randomEvaluation }) => {
    return `𝐔𝐒𝐔𝐀𝐑𝐈𝐎 🎶:『@${(randomMember.id || '').split('@')[0]}』
*𝐆𝐑𝐔𝐏𝐎 🧸*: ${groupName}
*𝐂𝐄𝐋𝐔𝐋𝐀𝐑 💁‍♂️*: ${info.key.id.length > 21 ? 'ᴀɴᴅʀᴏɪᴅ 🤓' : info.key.id.substring(0, 2) === '3A' ? 'ɪᴏs 🙆‍♂️' : 'ᴢᴀᴘ ᴢᴀᴘ ᴡᴇʙ 🧏‍♂️'}
*𝐂𝐎𝐍𝐓𝐄𝐌 𝐕𝐈𝐏 👻*: ${isChVip}

*${randomEvaluation}*`;
};

exports.rgaluguel = (dataFormatada) => {
return `*✨ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴀᴅᴏ!* 🔐\n` +
    `*⏳ ᴠᴇɴᴄɪᴍᴇɴᴛᴏ: ${dataFormatada}*\n` +
    `*💠 ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴀɢᴏʀᴀ ᴇsᴛᴀ́ sᴏʙ ᴍɪɴʜᴀ ᴘʀᴏᴛᴇᴄ̧ᴀ̃ᴏ...*\n` +
    `*🩸 ᴘᴇʟᴏ ᴛᴇᴍᴘᴏ ǫᴜᴇ ᴄᴏᴍᴘʀᴀʀᴀᴍ. ᴀᴘʀᴏᴠᴇɪᴛᴇᴍ... ᴇɴǫᴜᴀɴᴛᴏ ᴘᴏᴅᴇᴍ.*`
}

exports.veraluguel = (dataFormada, dias, horas, min) => {
return     `*✅ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴏ!* 🔐\n\n` +
    `📅 ᴇxᴘɪʀᴀ ᴇᴍ: ${dataFormada}\n` +
    `⏱️ ʀᴇsᴛᴀɴᴛᴇ: ${dias}d ${horas}h ${min}m`
}

exports.abertura = () => {
return `*ꜱɪꜱᴛᴇᴍᴀ ᴅᴇ ꜰᴇᴄʜᴀᴍᴇɴᴛᴏ ᴀᴛɪᴠᴀᴅᴏ* 💂‍♂️\n-\n*ᴀ ᴘᴀʀᴛɪʀ ᴅᴇ ᴀɢᴏʀᴀ ꜱᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴꜱ ᴘᴏᴅᴇᴍ ꜰᴀʟᴀʀ* 🚫\n-\n*ᴏʀᴅᴇᴍ ᴇ ꜱɪʟᴇɴᴄɪᴏ ᴘʀᴇᴠᴀʟᴇᴄᴇᴍ ᴘᴏʀ ᴏʀᴅᴇᴍ ᴅᴏ ʏᴜᴛᴀʙᴏᴛ* 🙇‍♂️`
}

exports.fechamento = (horario) => {
return `*ꜱɪꜱᴛᴇᴍᴀ ᴅᴇ ᴀʙᴇʀᴛᴜʀᴀ ᴀᴛɪᴠᴀᴅᴏ ᴀ̀ꜱ ${horario.abertura}* 💁‍♂️\n-\n*ᴏ ᴄʜᴀᴛ ᴇꜱᴛᴀ́ ʟɪʙᴇʀᴀᴅᴏ, ᴍᴀꜱ ɴᴀ̃ᴏ ᴍᴇ ꜱᴜʙᴇꜱᴛɪᴍᴇᴍ...* 👁️\n-\n*ꜱᴇᴊᴀᴍ ʀᴇꜱᴘᴏɴꜱᴀ́ᴠᴇɪꜱ ᴇ ɴᴀ̃ᴏ ᴍᴇ ɪʀʀɪᴛᴇᴍ* 🩵`
}

exports.whatmusic = (whatMusic, pushname) => {
return `• ʀᴇsᴘᴏsᴛᴀ ᴄᴏʀʀᴇᴛᴀ: *${whatMusic.resposta}*\nᴘᴀʀᴀʙᴇ́ɴs ${pushname}, ᴄᴏᴍᴏ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴠᴏᴄᴇ̂ ᴀᴄᴀʙᴀ ᴅᴇ ɢᴀɴʜᴀʀ 5 ɴ-ᴄᴏɪɴs.\nɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5 sᴇɢᴜɴᴅᴏs!`
}

exports.wmusic = (wmusic, II) => {
return `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${wmusic.trechoMusic}\n–\n*🤔😱 Qᴜᴀʟ ᴍᴜ́sɪᴄᴀ ᴘᴇʀᴛᴇɴᴄᴇ ᴏ ᴛʀᴇᴄʜᴏ ᴀᴄɪᴍᴀ?*\n• ${II}*ᴅɪᴄᴀ:${II} ${wmusic.dica}*`
}

exports.respostaE = (pushname) => {
return `*ᴇɴɪɢᴍᴀ ʀᴇsᴏʟᴠɪᴅᴏ! ᴘᴀʀᴀʙᴇ́ɴs ${pushname}, ᴠᴏᴄᴇ̂ ɢᴀɴʜᴏᴜ 5 ɴ-ᴄᴏɪɴs.*\n*ɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5 sᴇɢᴜɴᴅᴏs.*`
}

exports.resolveE = (enigmaD, prefix) => {
return `*📜 ʀᴇsᴏʟᴠᴀ ᴏ sᴇɢᴜɪɴᴛᴇ ᴇɴɪɢᴍᴀ:*\n–\n${enigmaD.charada}\n–\n❓️ *ɴᴀ̃ᴏ sᴀʙᴇ ᴀ ʀᴇsᴘᴏsᴛᴀ?*\nᴘᴇᴄ̧ᴀ ᴀᴏ ᴀᴅᴍ ᴘᴀʀᴀ ᴜsᴀʀ *${prefix}revelarenigma*`
}

exports.descobert = (pushname) => {
return `*ᴅᴇsᴄᴏʙᴇʀᴛᴏ! ᴘᴀʀᴀʙᴇ́ɴs ${pushname}, ᴠᴏᴄᴇ̂ ɢᴀɴʜᴏᴜ 5 ɴ-ᴄᴏɪɴs.*\n*ɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5 sᴇɢᴜɴᴅᴏs.*`
}

exports.gartic = (dataGartic2, prefix) => { 
return `*👩🏼‍🏫 ᴘɪsᴛᴀ ꜱᴏʙʀᴇ ᴀ ᴘᴀʟᴀᴠʀᴀ:*\n*• ᴛɪᴘᴏ: ${dataGartic2.pergunta}*\n*• ɪɴɪᴄɪᴀ ᴄᴏᴍ: "${dataGartic2.letra_inicial}"*\n*• ᴄᴏɴᴛᴇ́ᴍ ᴛʀᴀᴄ̧ᴏꜱ? ${dataGartic2.contem_traços}*\n–\n*❓️ᴅᴜ́ᴠɪᴅᴀ? ᴜsᴇ ${prefix}revelargartic*`
}

exports.quizC = (pushname, dQF) => {
return `*🎉 ᴘᴀʀᴀʙᴇ́ɴs ${pushname}, ᴠᴏᴄᴇ̂ ᴀᴄᴇʀᴛᴏᴜ!*\n*ᴏ ᴛɪᴍᴇ ᴇʀᴀ: ${dQF.resposta}*\n*• ɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5s!*`
}

exports.quizfut = (dataQF) => {
return `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️ ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴘᴇʀɢᴜɴᴛᴀ:* \n*• _${dataQF.pergunta}_*`
}

exports.quizaC = (pushname, dQ) => {
return `*🎉 ᴘᴀʀᴀʙᴇ́ɴs ${pushname}, ᴠᴏᴄᴇ̂ ᴀᴄᴇʀᴛᴏᴜ!*\n*ᴏ ᴀɴɪᴍᴀʟ ᴇʀᴀ: ${dQ.resposta}*\n*• ɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5s!*`
}

exports.anagrama = (shuffle, dataAB) => {
return `*🌟😲 ᴅᴇᴄɪғʀᴇ ᴏ ᴀɴᴀɢʀᴀᴍᴀ ᴀʙᴀɪxᴏ:*\n—\n*• ᴀɴᴀɢʀᴀᴍᴀ: ${shuffle(dataAB.palavraOriginal)}*\n*• ᴅɪᴄᴀ: ${dataAB.dica}*`
}


exports.Velocidade = (fast, secondV, groupList, TimeCount, NomeDoBot, freeRam, totalRam, totalComandos) => {
    return `╭✘━𑁁━፝֟🩸₊˚✮𝆺𝅥✿𝆺𝅥✮˚₊‧🩸፝֟━𑁁━✘╮
┃ │⌇˚₊· ͟͟͞͞🩸*🎮 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳𝙴 𝙿𝙸𝙽𝙶 🎮*
┃ │⌇˚₊· ͟͟͞͞👑 ▪︎ *𝚄𝚜𝚞á𝚛𝚒𝚘:* * ${pushname}*
┃ │⌇˚₊· ͟͟͞͞🏃‍♀️ ▪︎ 𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲: ${fast.toFixed(3)}s
┃ │⌇˚₊· ͟͟͞͞📥 ▪︎ 𝗔𝘁𝗿𝗮𝘀𝗼: ${secondV.toFixed(4)}s
┃ │⌇˚₊· ͟͟͞͞🖨 ▪︎ 𝗥𝗔𝗠: ${freeRam}GB / ${totalRam}GB
┃ │⌇˚₊· ͟͟͞͞👥️ ▪︎ 𝗚𝗿𝘂𝗽𝗼𝘀: ${groupList.length}
┃ │⌇˚₊· ͟͟͞͞📍 ▪︎ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀: ${totalComandos}
┃ │⌇˚₊· ͟͟͞͞✔️ ▪︎ 𝗢𝗻𝗹𝗶𝗻𝗲: ${TimeCount(process.uptime())}
╰✘━𑁁━፝֟🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸፝֟━𑁁━✘╯
- *${NomeDoBot}*`
}

exports.checkme = (u) => {
return `╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
･ 𝐂𝐇𝐄𝐂𝐊 𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄 😻
├─ ⊹°♱𝚄𝚂𝙴𝚁: @${u.id.split('@')[0]}
├─ ⊹°♱𝙼𝚂𝙶: ${u.messages}
├─ ⊹°♱𝙲𝙾𝙽𝙽𝙴𝙲𝚃: ${u.aparelho}
├─ ⊹°♱𝙵𝙸𝙶: ${u.figus}
├─ ⊹°♱𝙲𝙼𝙳: ${u.cmd_messages}
├─ ⊹°♱𝚅𝙸𝙳𝙴𝙾: ${u.videos || 0}
├─ ⊹°♱𝙸𝙼𝙶: ${u.imagens || 0}
├─ ⊹°♱𝙰𝚄𝙳𝙸𝙾: ${u.audios || 0}
├─ ⊹°♱𝙳𝙾𝙲: ${u.documentos || 0}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯`;
}

exports.check = (u) => {
return `╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
･ 𝐂𝐇𝐄𝐂𝐊 𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄 😼
├─ ⊹°♱𝚄𝚂𝙴𝚁: @${u.id.split('@')[0]}
├─ ⊹°♱𝙼𝚂𝙶: ${u.messages}
├─ ⊹°♱𝙲𝙾𝙽𝙽𝙴𝙲𝚃: ${u.aparelho}
├─ ⊹°♱𝙵𝙸𝙶: ${u.figus}
├─ ⊹°♱𝙲𝙼𝙳: ${u.cmd_messages}
├─ ⊹°♱𝚅𝙸𝙳𝙴𝙾: ${u.videos || 0}
├─ ⊹°♱𝙸𝙼𝙶: ${u.imagens || 0}
├─ ⊹°♱𝙰𝚄𝙳𝙸𝙾: ${u.audios || 0}
├─ ⊹°♱𝙳𝙾𝙲: ${u.documentos || 0}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯`;
}

exports.atividade = (u) => {
return `╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
├─ ⊹°♱𝙼𝚂𝙶: ${u.messages}
├─ ⊹°♱𝙲𝙾𝙽𝙽𝙴𝙲𝚃: ${u.aparelho}
├─ ⊹°♱𝙵𝙸𝙶: ${u.figus}
├─ ⊹°♱𝙲𝙼𝙳: ${u.cmd_messages}
├─ ⊹°♱𝚅𝙸𝙳𝙴𝙾: ${u.videos || 0}
├─ ⊹°♱𝙸𝙼𝙶: ${u.imagens || 0}
├─ ⊹°♱𝙰𝚄𝙳𝙸𝙾: ${u.audios || 0}
├─ ⊹°♱𝙳𝙾𝙲: ${u.documentos || 0}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯\n\n`;
}

exports.rankativo = (u, i) => {
return `╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
 ${i + 1}º 𝐋𝐔𝐆𝐀𝐑 🏆
├─ ⊹°♱𝚄𝚂𝙴𝚁: @${u.id.split('@')[0]}
├─ ⊹°♱𝙼𝚂𝙶: ${u.messages}
├─ ⊹°♱𝙲𝙾𝙽𝙽𝙴𝙲𝚃: ${u.aparelho}
├─ ⊹°♱𝙵𝙸𝙶: ${u.figus}
├─ ⊹°♱𝙲𝙼𝙳: ${u.cmd_messages}
├─ ⊹°♱𝚅𝙸𝙳𝙴𝙾: ${u.videos || 0}
├─ ⊹°♱𝙸𝙼𝙶: ${u.imagens || 0}
├─ ⊹°♱𝙰𝚄𝙳𝙸𝙾: ${u.audios || 0}
├─ ⊹°♱𝙳𝙾𝙲: ${u.documentos || 0}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯\n\n`;
}

exports.rankinativo = (u, i) => {
return `╭✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╮
 ${i + 1}º 𝐈𝐍𝐀𝐓𝐈𝐕𝐎 💔
├─ ⊹°♱𝚄𝚂𝙴𝚁: @${u.id.split('@')[0]}
├─ ⊹°♱𝙼𝚂𝙶: ${u.messages}
├─ ⊹°♱𝙲𝙾𝙽𝙽𝙴𝙲𝚃: ${u.aparelho}
├─ ⊹°♱𝙵𝙸𝙶: ${u.figus}
├─ ⊹°♱𝙲𝙼𝙳: ${u.cmd_messages}
├─ ⊹°♱𝚅𝙸𝙳𝙴𝙾: ${u.videos || 0}
├─ ⊹°♱𝙸𝙼𝙶: ${u.imagens || 0}
├─ ⊹°♱𝙰𝚄𝙳𝙸𝙾: ${u.audios || 0}
├─ ⊹°♱𝙳𝙾𝙲: ${u.documentos || 0}
╰✘━𑁁━፝֟━🩸₊˚✮⊰𝆺𝅥✿𝆺𝅥 ⊱✮˚₊‧🩸━፝֟━𑁁━✘╯─\n\n`;
}

exports.namoro = (namoro1, C12, sender, prefix) => {
    return `*「🥳」 𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒 「✨」*
*@${namoro1[C12].usu1.split('@')[0]} ᴇ @${sender.split('@')[0]} ᴀᴄᴀʙᴀʀᴀᴍ ᴅᴇ ᴄᴏᴍᴇᴄᴀʀ ᴜᴍ ɴᴏᴠᴏ ʀᴏᴍᴀɴᴄᴇ 💞*

*💍| ᴀɢᴏʀᴀ sᴀ̃ᴏ ᴏꜰɪᴄɪᴀʟᴍᴇɴᴛᴇ ɴᴀᴍᴏʀᴀᴅᴏꜱ!*

• *📖 | ᴠᴏᴄᴇꜱ ᴘᴏᴅᴇᴍ ᴄᴏɴꜱᴜʟᴛᴀʀ ᴏ ʀᴇʟᴀᴄɪᴏɴᴀᴍᴇɴᴛᴏ ᴇᴍ: ${prefix}minhadupla*

• *ʙᴏᴀ ꜱᴏʀᴛᴇ ᴀᴏ ᴄᴀꜱᴀʟ! 💞*`;
};

exports.fora = (namoro1, C12, sender, prefix) => {
    return `*ǫᴜᴇ ᴘᴇɴɪɴʜᴀ @${namoro1[C12].usu1.split('@')[0]}! ᴏ (ᴀ) @${sender.split('@')[0]} ɴᴀᴏ ᴛᴇ ǫᴜɪs 💔 ᴛᴀʟᴠᴇᴢ ᴇʟᴇ(ᴀ) ɴᴀᴏ sɪɴᴛᴀ ᴏ ᴍᴇsᴍᴏ ᴘᴏʀ ᴠᴏᴄᴇ, ᴍᴀs ɴᴀᴏ ᴅᴇsᴀɴɪᴍᴀ ɴᴀᴏ ᴠɪᴜᴜ 😖*`;
};

exports.minhaDupla = (parceiro1, parceiro2, tempoJuntos, dupla) => {
    return `「💖」 @${parceiro1.split('@')[0]}
- *💍 | ᴇꜱᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ(ᴀ) ᴄᴏᴍ* ↴
『💗』 @${parceiro2.split('@')[0]}

  • 『 *ʜᴀ ${tempoJuntos}* 』 •

*⏳ | ɴᴀᴍᴏʀᴀɴᴅᴏ ᴅᴇꜱᴅᴇ: ${dupla.hora || '??:??'} ᴅᴏ ᴅɪᴀ ${dupla.data || '??/??/????'}*`;
};

exports.pedidoNamoro = (menc_os2, sender, prefix) => {
    return `「❤️」@${menc_os2.split('@')[0]}
- *💌 | ʀᴇᴄᴇʙᴇᴜ ᴜᴍ ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴅᴇ* ↴

『✨』 @${sender.split('@')[0]}

*_ᴅɪɢɪᴛᴇ『 sɪᴍ 』 ᴘᴀʀᴀ ᴀᴄᴇɪᴛᴀʀ ᴏᴜ 『 ɴᴀᴏ 』 ᴘᴀʀᴀ ʀᴇᴄᴜꜱᴀʀ._ 💞*
> *🕊️ | @${sender.split('@')[0]} ᴘᴏᴅᴇ ᴄᴀɴᴄᴇʟᴀʀ ᴄᴏᴍ: ${prefix}cancelar*`;
};


exports.syntaxDownloadMusic = () => {
return `*ᴘᴏʀ ғᴀᴠᴏʀ, ɪɴsɪʀᴀ ᴏ ᴛɪᴛᴜʟᴏ ᴅᴀ ᴍᴜsɪᴄᴀ 🙇‍♂️*`
}

exports.aluguel15day = () => {
return `🌠 15 𝑫𝒊𝒂𝒔 -『 10.00R$ 』🌠\n\n- Alugue por 15 dias por 10,00R$ e tenha praticidade e economia! Ideal para quem precisa de algo rápido, sem complicação, e ainda conta com proteção e segurança durante o período. ⏳`
}

exports.aluguel30day = () => {
return `🌠 30 𝑫𝒊𝒂𝒔 -『 20.00R$ 』🌠\n\nCom 30 dias por 20,00R$, você ganha mais tempo e flexibilidade, além de aproveitar melhor a utilização do que está alugando. Tudo com segurança garantida e mais otimização para o seu dia a dia. 📅`
}

exports.aluguel60day = () => {
return `🌠 60 𝑫𝒊𝒂𝒔 -『 35.00R$ 』🌠\n\n60 dias por 35,00R$ é a opção perfeita para quem precisa de longo prazo. Além de economizar mais, você tem proteção total e tranquilidade durante todo o período, com mais tempo para aproveitar o que alugou. 🛠️`
}

exports.aluguel = (ownerNumber, NumeroDoBot, NomeDoBot) => {
return `*📍 | 𝐀𝐓𝐄𝐍𝐂𝐀𝐎, 𝐆𝐀𝐋𝐄𝐑𝐀! 𝐎 𝐀𝐋𝐔𝐆𝐔𝐄𝐋 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 𝐄𝐗𝐏𝐈𝐑𝐎𝐔.*
> *🤖 → ᴏ ᴀᴄᴇssᴏ ᴅᴏ ʙᴏᴛ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ, ᴘᴏɪs ᴏ ᴘᴇʀɪᴏᴅᴏ ᴅᴇ ᴄᴏɴᴛʀᴀᴛᴏ ᴄʜᴇɢᴏᴜ ᴀᴏ ғɪᴍ.*
•
- *❓ | 𝙾 𝚀𝚄𝙴 𝙸𝚂𝚂𝙾 𝚂𝙸𝙶𝙽𝙸𝙵𝙸𝙲𝙰?*
> *ᴏ ʙᴏᴛ ɴᴀᴏ ᴇɴᴠɪᴀʀᴀ ᴍᴀɪs ᴄᴏᴍᴀɴᴅᴏs, ʀᴇsᴘᴏsᴛᴀs ᴏᴜ ᴀᴜᴛᴏᴍᴀᴄᴏᴇs*
> *ғᴜɴᴄᴏᴇs, sɪsᴛᴇᴍᴀs ᴇ ʀᴇᴄᴜʀsᴏs ғᴏʀᴀᴍ ᴛᴇᴍᴘᴏʀᴀʀɪᴀᴍᴇɴᴛᴇ ᴅᴇsʟɪɢᴀᴅᴏs*
> *ᴏ ɢʀᴜᴘᴏ ᴇsᴛᴀ ᴍᴏᴍᴇɴᴛᴀɴᴇᴀᴍᴇɴᴛᴇ ʙʟᴏǫᴜᴇᴀᴅᴏ ᴀᴛᴇ ᴀ ʀᴇɴᴏᴠᴀᴄᴀᴏ*
•
- *🗿 | 𝚀𝚄𝙴𝚁 𝚁𝙴𝙽𝙾𝚅𝙰𝚁 𝙾 𝙰𝙻𝚄𝙶𝚄𝙴𝙻 𝙳𝙾 𝙱𝙾𝚃?*
> *ᴠᴏᴄᴇ ᴘᴏᴅᴇ ʀᴇsᴏʟᴠᴇʀ ɪssᴏ ʀᴀᴘɪᴅᴏ, ʙᴀsᴛᴀ ᴇɴᴛʀᴀʀ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴏ ᴅᴏɴᴏ.*
•
- *✨ | 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙾 𝙳𝙾𝙽𝙾*
> https://wa.me/${ownerNumber}
•
> *ᴀᴘᴏs ᴏ ᴘᴀɢᴀᴍᴇɴᴛᴏ, ᴏ ʙᴏᴛ ɪʀᴀ ᴠᴏʟᴛᴀʀ ᴀ ғᴜɴᴄɪᴏɴᴀʀ ɴᴏʀᴍᴀʟᴍᴇɴᴛᴇ 💁‍♂️*
- ${NomeDoBot}`
}

exports.syntaxPlayMix = () => {
return `*ᴘᴏʀ ғᴀᴠᴏʀ, ᴄᴏʟᴏǫᴜᴇ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴀʀᴛɪsᴛᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ᴠᴇʀ ᴏs ʀᴇsᴜʟᴛᴀᴅᴏs 🙇‍♂️*`
}


exports.arquived = () => { 
return `— *⚠️ •  AVISO IMPORTANTE • ⚠️*
-
• *🗣️‼️ | TRANSFERÊNCIA DE GRUPO ROLANDO AQUI | 🗣️‼️*
-
> *• ENTRE APENAS SE TIVER A CERTEZA DE QUE VAI SER UM MEMBRO ATIVO ⚡*
•
> *\`• SOLICITA E AGUARDA AI EM BAIXO ⬇️\`*
•
> *\`https://chat.whatsapp.com/Iy3caSh0AwSGW1J8xluuL7?mode=gi_t\`*
•
• Emilly&& yk_`
}

exports.antisp = (lm) => {
return `- 🚨⚠️ 𝐋𝐈𝐍𝐊 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 ⚠️🚨\n\n- 𝐍𝐈𝐂𝐊 📝: ${lm.nome}\n\n- 𝐍𝐔𝐌𝐄𝐑𝐎 📱: ${lm.numero}\n\n- 𝐆𝐑𝐔𝐏𝐎 👥: ${lm.grupo}\n\n- 𝐈𝐃 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 ⚙️: ${lm.groupId}\n\n- 𝐈𝐃 𝐃𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 🗣️: ${lm.id}\n\n- 𝐔𝐒𝐄𝐑 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐄𝐌 📡: ${lm.device}\n\n- 𝐄𝐒𝐓𝐀𝐃𝐎 👀: ${lm.lugar}\n\n- 𝐁𝐈𝐎𝐆𝐑𝐀𝐅𝐈𝐀 🔐: ${lm.bio}\n\n- 𝐃𝐀𝐓𝐀 📆: ${lm.data}\n\n- 𝐇𝐎𝐑𝐀 ⏰: ${lm.time}\n\n- 𝐋𝐈𝐍𝐊 𝐄𝐍𝐕𝐈𝐀𝐃𝐎 🔗: ${lm.full_text}`
}

exports.tiktokDownload = (data) => {
return `*Usuário:*〔 @${data.resultado.username} 〕\n–\n• *Descrição:* ${data.resultado.description}`
}

exports.horoscopo = (q, ABC) =>  {
return `Signo: ${q}\n${ABC.resultado.inform}`
}

exports.respostaChatGPT = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaResumida = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaRedacao = (dataResulted) => {
return `${dataResulted.result}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.memesImages = (teks) => { 
return `${teks.titulo} *ʙᴀɪxᴀᴅᴏ ᴘᴇʟᴏ ʏᴜᴛᴀ ʙᴏᴛ 🙇‍♂️*`
}

exports.iFunnyVideo = (teks) => { 
return `${teks.titulo} *ʙᴀɪxᴀᴅᴏ ᴘᴇʟᴏ ʏᴜᴛᴀ ʙᴏᴛ 🙇‍♂️*`
}

exports.translator = (bla) => {
return `*ᴛᴇxᴛᴏ ᴛʀᴀᴅᴜᴢɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*: ${bla.result}`
}
exports.noresult = () => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴍᴀs ɴᴀᴏ ᴅᴇᴜ ᴘʀᴀ ʙᴜsᴄᴀʀ ᴏ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀɪᴀ....🙇‍♂️*`;
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `*ᴏʟᴀ @${menc_os2.split("@")[0]} - ᴠᴏᴄᴇ ғᴏɪ ᴀᴅᴠᴇʀᴛɪᴅᴏ ${dfqn}/3, ᴄᴀsᴏ ᴛᴏᴍᴇ ᴀ 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴠᴏᴄᴇ sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ! 🙇‍♂️*`
}

exports.finishAdvertencia = (menc_os2) => {
return `*ʙʏᴇ ʙʏᴇ @${menc_os2.split("@")[0]} - ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ᴛᴏᴍᴀʀ ᴀ 3 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ, ᴇsᴘᴇʀᴏ ǫᴜᴇ ᴀᴘʀᴇɴᴅᴀ ᴄᴏᴍ ᴏs sᴇᴜs ᴇʀʀᴏs 👨‍💻*`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*• ᴇxᴇᴍᴘʟᴏ: *${prefix}correio +5591.../ᴍᴇ ɴᴀᴍᴏʀᴀ 🌹.....*`
}

exports.anonymousMail = (tx2) => {
return `📪 ᴠᴏᴄᴇ ʀᴇᴄᴇʙᴇᴜ ᴜᴍᴀ ᴍsɢ ᴅᴏ ᴄᴏʀʀᴇɪᴏ ᴅᴏ ᴀɴᴏɴɪɴᴏ\n–\nǫᴜᴇᴍ ᴛᴇ ᴇɴᴠɪᴏᴜ? *ᴅᴇsᴄᴏɴʜᴇᴄɪᴅᴏ 🧏‍♂️*\n–\n`+"```"+tx2+"```"
}

exports.sucessAnonymousMail = () => {
return `*sᴇᴜ ᴄᴏʀʀᴇɪᴏ ғᴏɪ ᴇɴᴠɪᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🌸*`
}

exports.unbannedMessage = (blcp) => {
return `*@${blcp.split('@')[0]} ғᴏɪ ᴅᴇsʙᴀɴɪᴅᴏ, ᴀɢᴏʀᴀ ᴘᴏᴅᴇ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴏ ʙᴏᴛ 🙆‍♂️*`
}

exports.bannedMessage = (blcp) => {
return `*@${blcp.split('@')[0]} ғᴏɪ ʙᴀɴɪᴅᴏ, ᴇɴᴛᴀᴏ ɴᴀᴏ ᴘᴏᴅᴇʀᴀ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴏ ʙᴏᴛ 🙇‍♂️*`
}

exports.errorUploadImage = () => {
return `*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴍɪɴɪᴍᴏ ᴅᴏ ᴠɪᴅᴇᴏ ᴅᴇᴠᴇ sᴇʀ ᴅᴇ 30 sᴇɢᴜɴᴅᴏs 🙇‍♂️*`
}

exports.noArgsSearch = () => {
return `*ᴄᴏᴍᴏ ᴅᴇsᴇᴊᴀ ғᴀᴢᴇʀ ᴜᴍᴀ ᴘᴇsǫᴜɪsᴀ sᴇᴍ ᴄᴏɴᴛᴇʀ ᴀʟɢᴜᴍ ᴛɪᴛᴜʟᴏ ᴏᴜ ᴀʀɢᴜᴍᴇɴᴛᴏ? 💁‍♂️*`
}

exports.ausente = (afkUser, tempo, m) => {
return `ᯓ ⁺₊ ⋆˖⁺‧ 🕷 ‧⁺˖⋆ ⁺₊ ♱ .ᐟ
♱ !  [  *ᴏ ᴜꜱᴜᴀʀɪᴏ ꜱᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴀᴜꜱᴇɴᴛᴇ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ 💁‍♂️*  ]  
⋆  ⋆  
^_< -  🕊️ |  𝚄𝚂𝙴𝚁 : @${m.split('@')[0]}  
^_< - 🕸️ | 𝙰𝚄𝚂𝙴𝙽𝚃𝙴 𝙷𝙰 : *${tempo}*
^_< - 🪽 | 𝙼𝙾𝚃𝙸𝚅𝙾 : *${afkUser.msg}*
ᯓ ⁺₊ ⋆˖⁺‧ 🕷 ‧⁺˖⋆ ⁺₊ ♱ .ᐟ`
}

exports.on = (sender, tempo) => {
return `*ꜱᴇᴊᴀ ʙᴇᴍ ᴠɪɴᴅᴏ ᴅᴇ ᴠᴏʟᴛᴀ @${sender.split('@')[0]}, ᴠᴏᴄᴇ ꜰɪᴄᴏᴜ ${tempo} ᴏꜰꜰʟɪɴᴇ 💁‍♂️*`
}

exports.syntaxLogos = () => {
return `*ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ᴘʀᴀ ᴍɪᴍ ғᴀᴢᴇʀ ᴀ ʟᴏɢᴏ? 💁‍♂️*`
}

exports.playmixError = (n) => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ ${n}° ᴀᴜᴅɪᴏ...*`
}

exports.thinkingPrefix = (pushname, prefix) => {
return `ᴏʟᴀ ${pushname}, ᴀǫᴜɪ ᴇsᴛᴀ ᴏ ᴍᴇᴜ ᴘʀᴇғɪxᴏ: ${prefix}`
}

exports.removeUserAntiPlvr = () => {
return `*「 ʀᴇᴍᴏᴠɪᴅᴏ(ᴀ) ᴘᴏʀ ᴜsᴀʀ ᴘᴀʟᴀᴠʀᴀs ᴘʀᴏɪʙɪᴅᴀ. 」*\n*ᴠᴏᴄᴇ sᴇʀᴀ ʙᴀɴɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ, ɴᴀ ᴘʀᴏxɪᴍᴀ ᴏʟʜᴇ ᴀs ʀᴇɢʀᴀs ᴅᴏ ɢʀᴜᴘᴏ! 😠*`
}

exports.permissionDenied_rUser = () => {
return `*ᴇᴜ ᴘʀᴇᴄɪsᴏ ᴅᴇ ᴀᴅᴍ ᴘʀᴀ ᴇғᴇᴛᴜᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*`
}

exports.antisRandomMessage = () => {
return `*ᴜᴍᴀs ᴅᴇssᴀs ᴏᴘᴄᴏᴇs ᴇsᴛᴀ ᴀᴛɪᴠᴀᴅᴏ, ᴍᴀs ᴄᴏᴍᴏ ᴠᴏᴄᴇ ᴇ ᴀᴅᴍ ɴᴀᴏ ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ. _(ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ - ᴀɴᴛɪ ᴄᴀᴛᴀʟᴏɢᴏ - ᴀɴᴛɪ ʟᴏᴄᴀʟɪᴢᴀᴄᴀᴏ)_*`
}

exports.charactersAnti = () => {
return `*ᴍᴜɪᴛᴏs ᴄᴀʀᴀᴄᴛᴇʀs ᴇɴᴠɪᴀᴅᴏs ʀᴇᴄᴇɴᴛᴇᴍᴇɴᴛᴇ, ɪʀᴇɪ ʟʜᴇ ʀᴇᴍᴏᴠᴇʀ ᴘᴏʀ sᴇɢᴜʀᴀɴᴄᴀ 🙇‍♂️*`
}

exports.markingAllMember = () => {
return `*ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴍᴀʀᴄᴀɴᴅᴏ ɢᴇʀᴀʟ? ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ ᴀɢᴏʀᴀ 😠*`
}

exports.floodCommands = () => {
return `*sᴇᴍ ғʟᴏᴏᴅs ᴀǫᴜɪ ʀᴀᴘᴀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴘᴀʀᴀ ᴇғᴇᴛᴜᴀʀ ᴏ ᴘʀᴏxɪᴍᴏ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*`
}

exports.timeRequired = () => {
return `*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ ᴇɴᴠɪᴀʀ ᴀᴜᴅɪᴏ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴍᴀɪs ᴅᴇ 20 ᴍɪɴᴜᴛᴏs, ᴛᴀ ᴀᴄʜᴀɴᴅᴏ ǫᴜᴇ ᴇɴᴛʀᴇɢᴏ ᴘᴏᴅᴄᴀsᴛ?🙇‍♂️*`
}

exports.error = () => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*`
}

exports.messageProhibitedDetAdmin = () => {
return `*ᴍᴇɴsᴀɢᴇᴍ ᴘʀᴏɪʙɪᴅᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ, ᴘᴏʀᴇᴍ ᴏ ᴜsᴜᴀʀɪᴏ ᴇ ᴀᴅᴍ 🙇‍♂️*`
}

exports.messageProhibitedDetUser = () => {
return `*ᴍᴇɴsᴀɢᴇᴍ ᴘʀᴏɪʙɪᴅᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ! ɪʀᴇɪ ʀᴇᴍᴏᴠᴇʀ ɪᴍᴇᴅɪᴀᴛᴀᴍᴇɴᴛᴇ. 🙇‍♂️*`
}

exports.antiCalls = () => {
return `*ʟɪɢᴀɴᴅᴏ ᴘʀᴏ ʙᴏᴛ? ɪʀᴇɪ ᴛᴇ ʙʟᴏǫᴜᴇᴀʀ sᴇᴜ ᴄᴀʀᴇɴᴛᴇ 🙇‍♂️*`
}

exports.errorResponseSimi = () => {
return "*ᴇᴜ ɴᴀᴏ sᴇɪ ᴀ ʀᴇsᴘᴏsᴛᴀ, ᴘᴏᴅᴇʀɪᴀ ᴍᴇ ᴇɴsɪɴᴀʀ? 🙇‍♂️*"
}

exports.GshowGE = (dataResult) => {
return dataResult.resultado.map((info, index) => `${index+1}. *${info.titulo || 'Manchete sem título.'}* - (${info.horarioPostagem || 'Há X horas.'})\n• ${info.trechoManchete || 'Manchete sem descrição.'}`).join('\n–\n');
}

