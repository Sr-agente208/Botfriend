const fs = require('fs');
const { prepareWAMessageMedia } = require('@whiskeysockets/baileys');

async function sendWhiteLotusMenu(keisen, from, prefix, NomeDoBot, sender, selo, linguagem, carregarMidia, NkChannelKk) {
    try {
        // Tentar enviar com botões interativos White Lotus
        const caption = linguagem.menulotus ? linguagem.menulotus(prefix) : linguagem.menu(prefix);
        const midia = carregarMidia ? carregarMidia("fotomenu") : { type: "text" };
        
        // Botões White Lotus - IDs sem caracteres especiais para compatibilidade
        const buttons = [
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "🎮 Brincadeiras", id: `${prefix}menubn` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💍 Casal", id: `${prefix}menucasal` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "🎲 Jogos", id: `${prefix}menujogos` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💰 Coins", id: `${prefix}menucoins` }) },
            { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "🪷 Canal White Lotus", url: "https://whatsapp.com/channel/0029VbAkhcA2ZjCrjvK5PQ1f", merchant_url: "https://whatsapp.com/channel/0029VbAkhcA2ZjCrjvK5PQ1f" }) }
        ];

        // Se tem mídia, prepara
        if (midia.type === "image") {
            const img = await prepareWAMessageMedia({ image: midia.data }, { upload: keisen.waUploadToServer });
            await keisen.relayMessage(from, {
                interactiveMessage: {
                    header: { hasMediaAttachment: true, imageMessage: img.imageMessage },
                    headerType: 4,
                    body: { text: caption },
                    footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷\nO Lótus Branco floresce novamente` },
                    nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                    contextInfo: { mentionedJid: [sender], ...NkChannelKk }
                }
            }, {});
            return true;
        } else if (midia.type === "video") {
            const vid = await prepareWAMessageMedia({ video: midia.data }, { upload: keisen.waUploadToServer });
            await keisen.relayMessage(from, {
                interactiveMessage: {
                    header: { hasMediaAttachment: true, videoMessage: vid.videoMessage },
                    headerType: 4,
                    body: { text: caption },
                    footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷` },
                    nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                    contextInfo: { mentionedJid: [sender], ...NkChannelKk }
                }
            }, {});
            return true;
        } else {
            await keisen.relayMessage(from, {
                interactiveMessage: {
                    body: { text: caption },
                    footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷` },
                    nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                    contextInfo: { mentionedJid: [sender], ...NkChannelKk }
                }
            }, {});
            return true;
        }
    } catch (e) {
        console.log('[WhiteLotus Menu Botões ERRO]', e.message);
        console.log(e.stack);
        return false;
    }
}

async function sendBrincadeirasButtons(keisen, from, prefix, NomeDoBot, sender, selo, linguagem, NkChannelKk) {
    try {
        const caption = linguagem.menubn ? linguagem.menubn(prefix) : linguagem.brincadeiras(prefix);
        
        const buttons = [
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "😂 Comer", id: `${prefix}comer` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💋 Beijo", id: `${prefix}beijo` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "🤗 Abraço", id: `${prefix}abraco` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💥 Tapa", id: `${prefix}tapa` }) },
            { name: "single_select", buttonParamsJson: JSON.stringify({
                title: "🎮 Ver todas brincadeiras",
                sections: [{
                    title: "Brincadeiras Interativas",
                    highlight_label: "WHITE LOTUS",
                    rows: [
                        { title: "Comer", description: "Comer alguém 😋", id: `${prefix}comer` },
                        { title: "Beijo", description: "Beijar alguém 😘", id: `${prefix}beijo` },
                        { title: "Abraço", description: "Abraçar fofo 🥰", id: `${prefix}abraco` },
                        { title: "Tapa", description: "Dar tapa 😏", id: `${prefix}tapa` },
                        { title: "Soco", description: "Dar soco 🥊", id: `${prefix}soco` },
                        { title: "Chute", description: "Chutar 🦶", id: `${prefix}chute` },
                        { title: "Matar", description: "Matar 💀", id: `${prefix}matar` },
                        { title: "Gay", description: "Ver % gay 🏳️‍🌈", id: `${prefix}gay` },
                        { title: "Feio", description: "Ver % feio 🤡", id: `${prefix}feio` },
                        { title: "Casal", description: "Shipar casal 💑", id: `${prefix}casal` }
                    ]
                }]
            })}
        ];

        await keisen.relayMessage(from, {
            interactiveMessage: {
                body: { text: caption },
                footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷\nResponda a mensagem com o comando!` },
                nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                contextInfo: { mentionedJid: [sender], ...NkChannelKk }
            }
        }, {});
        return true;
    } catch (e) {
        console.log('[Brincadeiras Buttons ERRO]', e.message);
        return false;
    }
}

async function sendCasalButtons(keisen, from, prefix, NomeDoBot, sender, selo, linguagem, NkChannelKk, namorar) {
    try {
        const caption = linguagem.menucasal ? linguagem.menucasal(prefix) : "Menu Casal";
        
        const buttons = [
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💍 Namorar", id: `${prefix}namorar` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💔 Terminar", id: `${prefix}terminar` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💞 Voltar", id: `${prefix}voltar` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💒 Casar", id: `${prefix}casar` }) },
            { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "💔 Divorciar", id: `${prefix}divorciar` }) }
        ];

        const imgUrl = namorar || "https://files.catbox.moe/a1m5cr.jpg";
        let img = null;
        try {
            img = await prepareWAMessageMedia({ image: { url: imgUrl } }, { upload: keisen.waUploadToServer });
        } catch {}

        if (img) {
            await keisen.relayMessage(from, {
                interactiveMessage: {
                    header: { hasMediaAttachment: true, imageMessage: img.imageMessage },
                    headerType: 4,
                    body: { text: caption },
                    footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷\nSegunda chance com voltar` },
                    nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                    contextInfo: { mentionedJid: [sender], ...NkChannelKk }
                }
            }, {});
        } else {
            await keisen.relayMessage(from, {
                interactiveMessage: {
                    body: { text: caption },
                    footer: { text: `🪷 WHITE LOTUS • ${NomeDoBot} 🪷` },
                    nativeFlowMessage: { buttons: buttons, messageParamsJson: "" },
                    contextInfo: { mentionedJid: [sender], ...NkChannelKk }
                }
            }, {});
        }
        return true;
    } catch (e) {
        console.log('[Casal Buttons ERRO]', e.message);
        return false;
    }
}

module.exports = { sendWhiteLotusMenu, sendBrincadeirasButtons, sendCasalButtons };
