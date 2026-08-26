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
const { restoreSession, backupSession, getSessionStatus } = require("./sessionManager");

// ================== CONFIGURAÇÕES RAILWAY ==================
const app = express();
const port = process.env.PORT || 3000;

// Estado global para o frontend
let qrCodeData = null;
let pairingCodeData = null;
let connectionStatus = "Iniciando WHITE LOTUS...";
let lastQrTime = null;
let botStartTime = Date.now();

// Diretório de sessão - Railway usa volume efêmero, mas garantimos criação
const sessionDir = path.join(__dirname, "..", "DADOS DO KEISEN", "qr-code");

// Garantir que todos diretórios necessários existam
function ensureDirectories() {
    const dirs = [
        sessionDir,
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "ATIVAÇÕES-keisen"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "anagrama"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "enigma"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "gartic"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "quiz-animais"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "quiz-futebol"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "grupos", "games", "wmusic"),
        path.join(__dirname, "..", "ARQUIVES", "tictactoe", "db"),
        path.join(__dirname, "..", "DADOS DO KEISEN", "func", "prefixo"),
        path.join(__dirname, "..", "database")
    ];
    for (const d of dirs) {
        try {
            fs.ensureDirSync(d);
        } catch (e) {
            console.log(chalk.yellow(`[DIR] Falha ao criar ${d}: ${e.message}`));
        }
    }
}
ensureDirectories();

// Restaurar sessão de variável de ambiente se existir (evita reconectar toda vez)
restoreSession(sessionDir);
const sessStatus = getSessionStatus(sessionDir);
console.log(chalk.magenta(`[SESSION STATUS] Existe: ${sessStatus.exists}, Válida: ${sessStatus.valid}, Tamanho: ${sessStatus.size} bytes`));

// ================== SERVIDOR WEB ==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck - essencial para Railway
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        uptime: Math.floor((Date.now() - botStartTime) / 1000),
        connection: connectionStatus,
        timestamp: new Date().toISOString()
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: connectionStatus,
        qr: !!qrCodeData,
        pairing: !!pairingCodeData,
        uptime: Math.floor((Date.now() - botStartTime) / 1000)
    });
});

// Página principal com QR Code
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WHITE LOTUS - Login</title>
        <style>
            * { box-sizing: border-box; }
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                min-height: 100vh; 
                margin: 0; 
                background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); 
                color: #ffffff; 
                padding: 20px;
            }
            .container { 
                background: #2d2d2d; 
                padding: 2.5rem; 
                border-radius: 20px; 
                box-shadow: 0 12px 40px rgba(0,0,0,0.6); 
                text-align: center; 
                max-width: 500px; 
                width: 100%; 
                border: 1px solid #444; 
                animation: fadeIn 0.5s ease-in;
            }
            @keyframes fadeIn { from { opacity:0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
            h1 { 
                color: #ffffff; 
                font-size: 2.2rem; 
                margin-bottom: 0.5rem; 
                letter-spacing: 3px; 
                text-transform: uppercase; 
                font-weight: 800;
                background: linear-gradient(90deg, #fff, #00ffcc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .subtitle { color: #aaa; margin-bottom: 2rem; font-style: italic; font-size: 0.95rem; }
            .status { 
                margin: 1.5rem 0; 
                font-weight: bold; 
                color: #00ffcc; 
                text-transform: uppercase; 
                font-size: 0.85rem; 
                letter-spacing: 1px; 
                padding: 8px 16px;
                background: rgba(0,255,204,0.1);
                border-radius: 20px;
                border: 1px solid rgba(0,255,204,0.2);
            }
            .status.online { color: #00ff88; background: rgba(0,255,136,0.15); border-color: rgba(0,255,136,0.3); }
            .status.waiting { color: #ffcc00; background: rgba(255,204,0,0.1); border-color: rgba(255,204,0,0.2); }
            .qr-box { 
                background: white; 
                padding: 15px; 
                border-radius: 15px; 
                margin: 1.5rem auto; 
                width: 280px; 
                height: 280px; 
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }
            .qr-box img { width: 100%; height: 100%; object-fit: contain; }
            .code { 
                background: #1a1a1a; 
                padding: 1.2rem; 
                border-radius: 12px; 
                font-size: 2rem; 
                font-weight: bold; 
                color: #00ffcc; 
                margin-top: 1.5rem; 
                letter-spacing: 6px; 
                border: 2px dashed #00ffcc;
                font-family: monospace;
            }
            .info { 
                margin-top: 20px; 
                color: #888; 
                font-size: 0.85rem; 
                line-height: 1.5;
            }
            .footer { margin-top: 2rem; font-size: 0.75rem; color: #555; }
            .btn {
                margin-top: 15px;
                padding: 10px 20px;
                background: #00ffcc;
                color: #000;
                border: none;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            .btn:hover { background: #00e6b8; }
            .log {
                text-align: left;
                background: #1a1a1a;
                padding: 10px;
                border-radius: 8px;
                font-size: 0.7rem;
                color: #aaa;
                margin-top: 15px;
                max-height: 100px;
                overflow-y: auto;
                font-family: monospace;
            }
        </style>
        <script>
            setTimeout(() => { location.reload(); }, 15000);
        </script>
    </head>
    <body>
        <div class="container">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663758025417/jmSTWbHcILhgLCJZ.png" 
                 alt="White Lotus Logo" 
                 style="width: 90px; height: 90px; border-radius: 50%; border: 2px solid #00ffcc; margin-bottom: 1rem; object-fit: cover;">
            <h1>WHITE LOTUS</h1>
            <div class="subtitle">O Lótus Branco floresce novamente.</div>
            <div class="status ${connectionStatus === 'Online!' ? 'online' : connectionStatus.includes('Aguardando') ? 'waiting' : ''}">
                Status: ${connectionStatus}
            </div>
            
            ${qrCodeData ? `
                <div>
                    <p style="color:#ccc; margin-bottom:10px;">📱 Escaneie o QR Code no WhatsApp:</p>
                    <div class="qr-box">
                        <img src="${qrCodeData}" alt="QR Code">
                    </div>
                    <p class="info">WhatsApp > Aparelhos conectados > Conectar aparelho</p>
                </div>
            ` : ""}

            ${pairingCodeData ? `
                <div>
                    <p style="color:#ccc;">🔑 Código de Pareamento:</p>
                    <div class="code">${pairingCodeData}</div>
                    <p class="info">No WhatsApp, vá em Aparelhos conectados > Conectar com número de telefone<br>Digite este código</p>
                </div>
            ` : ""}
            
            ${!qrCodeData && !pairingCodeData && connectionStatus !== "Online!" ? `
                <div>
                    <p class="info">⏳ Aguardando o WhatsApp gerar o acesso...<br>Isso pode levar até 30 segundos</p>
                    <div style="margin:20px auto; width:40px; height:40px; border:3px solid #333; border-top:3px solid #00ffcc; border-radius:50%; animation: spin 1s linear infinite;"></div>
                    <style>@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }</style>
                </div>
            ` : ""}

            ${connectionStatus === "Online!" ? `
                <div>
                    <p style="color:#00ff88; font-size:1.1rem; margin-top:20px;">✅ Bot está online e pronto para uso!</p>
                    <p class="info">Você pode fechar esta página. O bot continuará funcionando.</p>
                </div>
            ` : ""}

            <div class="log">
                <div>🕒 Uptime: ${Math.floor((Date.now() - botStartTime)/1000)}s</div>
                <div>📁 Sessão: ${fs.existsSync(sessionDir) ? 'OK' : 'Criando...'}</div>
                <div>🔌 Porta: ${port}</div>
                ${lastQrTime ? `<div>📷 QR gerado: ${new Date(lastQrTime).toLocaleTimeString()}</div>` : ''}
            </div>
        </div>
        <div class="footer">WHITE LOTUS SYSTEM - Sr-agente208 | Railway Deploy Ready</div>
    </body>
    </html>`;
    res.send(html);
});

// Iniciar servidor WEB imediatamente - essencial para Railway healthcheck
const server = app.listen(port, "0.0.0.0", () => {
    console.log(chalk.magenta(`[WEB] Servidor rodando na porta ${port} - 0.0.0.0`));
    console.log(chalk.cyan(`[WEB] Healthcheck em http://0.0.0.0:${port}/health`));
});

server.on('error', (err) => {
    console.error(chalk.red(`[WEB ERRO] ${err.message}`));
    if (err.code === 'EADDRINUSE') {
        console.log(chalk.yellow(`[WEB] Porta ${port} em uso, tentando ${Number(port)+1}`));
        app.listen(Number(port)+1, "0.0.0.0");
    }
});

// ================== LÓGICA WHATSAPP ==================
let keisenSocket = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_DELAY = 30000;

async function startConnect() {
    try {
        console.log(chalk.blue(`[INIT] Iniciando WHITE LOTUS... Tentativa ${reconnectAttempts + 1}`));
        connectionStatus = reconnectAttempts > 0 ? `Reconectando... (${reconnectAttempts + 1})` : "Iniciando...";

        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(chalk.gray(`[BAILEYS] Versão: ${version.join('.')}, Latest: ${isLatest}`));

        const socket = makeWASocket({
            version,
            logger: pino({ level: "silent" }),
            browser: ["Ubuntu", "Chrome", "20.0.04"],
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
            },
            syncFullHistory: false,
            connectTimeoutMs: 60000,
            keepAliveIntervalMs: 25000,
            retryRequestDelayMs: 250,
            maxMsgRetryCount: 3,
            markOnlineOnConnect: true,
            generateHighQualityLinkPreview: false,
            // Fix para Railway: não imprimir QR no terminal, usamos web
            printQRInTerminal: false,
        });

        keisenSocket = socket;

        // Cache handler para pré-carregar handler apenas uma vez
        let handlerLoaded = null;
        function getHandler() {
            if (!handlerLoaded) {
                try {
                    delete require.cache[require.resolve('../keisen.js')];
                    handlerLoaded = require('../keisen.js');
                    console.log(chalk.green(`[HANDLER] keisen.js carregado`));
                } catch (e) {
                    console.log(chalk.red(`[HANDLER ERRO] ${e.message}`));
                    console.error(e.stack);
                    return null;
                }
            }
            return handlerLoaded;
        }

        socket.ev.on("connection.update", async (update) => {
            const { connection, lastDisconnect, qr } = update;

            if (qr) {
                try {
                    qrCodeData = await qrcode.toDataURL(qr, { width: 400, margin: 1 });
                    lastQrTime = Date.now();
                    connectionStatus = "Aguardando Escaneamento...";
                    console.log(chalk.yellow(`[QR] Novo QR Code gerado`));
                } catch (e) {
                    console.log(chalk.red(`[QR ERRO] ${e.message}`));
                }
            }

            if (connection === "close") {
                const statusCode = (lastDisconnect?.error instanceof Boom)
                    ? lastDisconnect.error.output.statusCode
                    : lastDisconnect?.error?.output?.statusCode || 0;

                const reason = lastDisconnect?.error?.message || "desconhecido";
                console.log(chalk.red(`[CONEXÃO] Fechada - Código: ${statusCode}, Motivo: ${reason}`));

                qrCodeData = null;
                pairingCodeData = null;

                const shouldReconnect = statusCode !== DisconnectReason.loggedOut && statusCode !== 401;
                
                if (shouldReconnect) {
                    reconnectAttempts++;
                    const delay = Math.min(1000 * Math.pow(1.5, reconnectAttempts), MAX_RECONNECT_DELAY);
                    connectionStatus = `Reconectando em ${Math.floor(delay/1000)}s...`;
                    console.log(chalk.yellow(`[RECONNECT] Tentando novamente em ${delay}ms`));
                    setTimeout(startConnect, delay);
                } else {
                    connectionStatus = "Deslogado - Delete a sessão e escaneie novamente";
                    console.log(chalk.red(`[LOGOUT] Sessão expirada. Delete ${sessionDir} e reinicie`));
                    // Backup antes de limpar, caso usuário queira recuperar
                    try { backupSession(sessionDir); } catch {}
                    if (statusCode === DisconnectReason.loggedOut) {
                        try {
                            // Só limpa se NÃO tiver SESSION_DATA configurado (para não apagar volume)
                            if (!process.env.SESSION_DATA && !process.env.CREDS_DATA) {
                                fs.emptyDirSync(sessionDir);
                                console.log(chalk.yellow(`[SESSION] Diretório limpo, reconectando em 5s...`));
                                setTimeout(startConnect, 5000);
                            } else {
                                console.log(chalk.yellow(`[SESSION] Mantendo sessão pois SESSION_DATA está configurado, mas creds inválidos. Remova SESSION_DATA se quiser novo QR`));
                            }
                        } catch (e) {}
                    }
                }
            } else if (connection === "open") {
                connectionStatus = "Online!";
                qrCodeData = null;
                pairingCodeData = null;
                reconnectAttempts = 0;
                botStartTime = Date.now();
                console.log(chalk.green.bold(`[CONEXÃO] WHITE LOTUS está online!`));
                
                // Pré-carregar handler
                getHandler();
            } else if (connection === "connecting") {
                connectionStatus = "Conectando ao WhatsApp...";
            }
        });

        // Pairing code suporte
        const phoneNumber = process.env.PHONE_NUMBER || process.env.NUMERO || "";
        const usePairing = process.env.USE_PAIRING === "true" || !!phoneNumber;

        if (!state.creds.registered && usePairing && phoneNumber) {
            // Aguardar socket estar pronto
            setTimeout(async () => {
                if (connectionStatus === "Online!") return;
                try {
                    const cleanNumber = phoneNumber.replace(/\D/g, "");
                    if (cleanNumber.length < 10) {
                        console.log(chalk.red(`[PAIRING] Número inválido: ${phoneNumber}`));
                        return;
                    }
                    console.log(chalk.cyan(`[PAIRING] Solicitando código para ${cleanNumber}...`));
                    const code = await socket.requestPairingCode(cleanNumber);
                    pairingCodeData = code;
                    connectionStatus = "Aguardando Pareamento...";
                    console.log(chalk.green.bold(`[PAIRING] Código: ${code}`));
                } catch (e) {
                    console.log(chalk.red(`[PAIRING] Falha: ${e.message}`));
                    console.error(e);
                }
            }, 8000);
        } else if (!state.creds.registered) {
            console.log(chalk.yellow(`[INFO] Escaneie o QR em / ou defina PHONE_NUMBER e USE_PAIRING=true para pairing code`));
        }

        socket.ev.on("creds.update", async () => {
            try {
                await saveCreds();
                // Backup automático para Railway persistência
                backupSession(sessionDir);
            } catch (e) {
                console.log(chalk.red(`[CREDS ERRO] ${e.message}`));
            }
        });

        socket.ev.on("messages.upsert", async (upsert) => {
            try {
                const handler = getHandler();
                if (!handler) return;
                await handler(upsert, socket, sessionDir);
            } catch (e) {
                console.log(chalk.red(`[MESSAGE HANDLER ERRO] ${e.message}`));
                // Não crashar o bot por erro em mensagem
            }
        });

        // Outros eventos úteis
        socket.ev.on("groups.upsert", async (groups) => {
            console.log(chalk.gray(`[GROUPS] ${groups.length} novos grupos`));
        });

        socket.ev.on("call", async (calls) => {
            // Auto bloquear chamadas se antical ativado - já tratado em keisen.js
        });

    } catch (err) {
        console.log(chalk.red(`[ERRO START] ${err.message}`));
        console.error(err.stack);
        connectionStatus = `Erro: ${err.message.slice(0, 50)}`;
        const delay = Math.min(5000 * (reconnectAttempts + 1), MAX_RECONNECT_DELAY);
        setTimeout(startConnect, delay);
    }
}

// Iniciar conexão após servidor web estar pronto
setTimeout(startConnect, 1500);

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log(chalk.yellow('[SHUTDOWN] SIGTERM recebido'));
    server.close(() => {
        console.log(chalk.gray('[SHUTDOWN] Servidor web fechado'));
        process.exit(0);
    });
});

process.on('uncaughtException', (err) => {
    console.error(chalk.red(`[UNCAUGHT] ${err.message}`));
    console.error(err.stack);
    // Não sair, apenas logar - Railway vai restartar se necessário
});

process.on('unhandledRejection', (reason) => {
    console.error(chalk.red(`[UNHANDLED REJECTION] ${reason}`));
});
