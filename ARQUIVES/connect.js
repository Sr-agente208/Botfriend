const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeCacheableSignalKeyStore 
} = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const fs = require("fs-extra");
const path = require("path");
const pino = require("pino");
const express = require("express");
const qrcode = require("qrcode");
const chalk = require("chalk");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

let qrCodeData = null;
let pairingCodeData = null;
let connectionStatus = "Iniciando WHITE LOTUS...";
let socketStatus = "closed";

const sessionDir = "./DADOS DO KEISEN/qr-code";

// SERVIDOR WEB INTEGRADO (O segredo do Railway)
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WHITE LOTUS - Login</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #1a1a1a; color: #ffffff; }
            .container { background: #2d2d2d; padding: 2.5rem; border-radius: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); text-align: center; max-width: 450px; width: 90%; border: 1px solid #444; }
            h1 { color: #ffffff; font-size: 2.5rem; margin-bottom: 0.5rem; letter-spacing: 2px; text-transform: uppercase; }
            .subtitle { color: #888; margin-bottom: 2rem; font-style: italic; }
            .status { margin-top: 1.5rem; font-weight: bold; color: #00ffcc; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
            img { background: white; padding: 10px; border-radius: 10px; margin-top: 1rem; width: 250px; height: 250px; }
            .code { background: #3d3d3d; padding: 1rem; border-radius: 8px; font-size: 2.5rem; font-weight: bold; color: #ffffff; margin-top: 1.5rem; letter-spacing: 8px; }
            .footer { margin-top: 2rem; font-size: 0.8rem; color: #555; }
        </style>
        <script>setTimeout(() => { location.reload(); }, 10000);</script>
    </head>
    <body>
        <div class="container">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663758025417/jmSTWbHcILhgLCJZ.png" alt="White Lotus Logo" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #ffffff; margin-bottom: 1rem;">
            <h1>WHITE LOTUS</h1>
            <div class="subtitle">O Lótus Branco floresce novamente.</div>
            <div class="status">Status: ${connectionStatus}</div>
            
            ${qrCodeData ? `<div><p>Escaneie o QR Code abaixo:</p><img src="${qrCodeData}" alt="QR Code"></div>` : ""}
            ${pairingCodeData ? `<div><p>Código de Pareamento:</p><div class="code">${pairingCodeData}</div></div>` : ""}
            
            ${!qrCodeData && !pairingCodeData && connectionStatus !== "Online!" ? "<p style='margin-top:20px; color:#888;'>Aguardando o WhatsApp gerar o acesso...</p>" : ""}
            ${connectionStatus === "Online!" ? "<p style='margin-top:20px; color:#00ffcc;'>O Bot está online e pronto para uso!</p>" : ""}
        </div>
        <div class="footer">WHITE LOTUS SYSTEM - Sr-agente208</div>
    </body>
    </html>`;
    res.send(html);
});

app.listen(port, "0.0.0.0", () => {
    console.log(chalk.magenta(`[WEB] Servidor rodando na porta ${port}`));
});

async function startConnect() {
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version } = await fetchLatestBaileysVersion();

    const keisen = makeWASocket({
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
        },
        syncFullHistory: false,
        connectTimeoutMs: 60000,
        keepAliveIntervalMs: 30000,
    });

    keisen.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            qrCodeData = await qrcode.toDataURL(qr);
            connectionStatus = "Aguardando Escaneamento...";
        }

        if (connection === "close") {
            const code = (lastDisconnect.error instanceof Boom) ? lastDisconnect.error.output.statusCode : 0;
            const shouldReconnect = code !== DisconnectReason.loggedOut;
            
            console.log(chalk.red(`[CONEXÃO] Fechada (Código: ${code}). Reconectando: ${shouldReconnect}`));
            connectionStatus = "Reconectando...";
            qrCodeData = null;
            pairingCodeData = null;
            if (shouldReconnect) setTimeout(startConnect, 5000);
        } else if (connection === "open") {
            connectionStatus = "Online!";
            qrCodeData = null;
            pairingCodeData = null;
            console.log(chalk.green("[CONEXÃO] WHITE LOTUS está online!"));
        }
    });

    // SUPORTE A PAREAMENTO VIA VARIÁVEL DE AMBIENTE
    if (!keisen.authState.creds.registered && process.env.PHONE_NUMBER) {
        setTimeout(async () => {
            if (connectionStatus === "Online!") return;
            try {
                const code = await keisen.requestPairingCode(process.env.PHONE_NUMBER.replace(/\D/g, ""));
                pairingCodeData = code;
                connectionStatus = "Aguardando Pareamento...";
                console.log(chalk.green(`[PAREAMENTO] Código: ${code}`));
            } catch (e) {
                console.log(chalk.red("[PAREAMENTO] Falha:"), e.message);
            }
        }, 10000);
    }

    keisen.ev.on("creds.update", saveCreds);

    keisen.ev.on("messages.upsert", (upsert) => {
        const startkeisen = require('../keisen.js');
const { banner2, banner3, colors, mess, date, time } = require('../ARQUIVES/funcoes/exports.js');
        startkeisen(upsert, keisen, sessionDir).catch(console.log);
    });
}

startConnect().catch(err => console.log(chalk.red("[ERRO START]:"), err));
