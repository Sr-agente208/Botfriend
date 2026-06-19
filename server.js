const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let currentQR = null;
let currentPairingCode = null;
let connectionStatus = 'Desconectado';

io.on('connection', (socket) => {
    console.log('Cliente conectado ao painel web');
    socket.emit('qr', currentQR);
    socket.emit('pairingCode', currentPairingCode);
    socket.emit('status', connectionStatus);
});

function updateQR(qr) {
    QRCode.toDataURL(qr, (err, url) => {
        if (!err) {
            currentQR = url;
            currentPairingCode = null;
            io.emit('qr', url);
        }
    });
}

function updatePairingCode(code) {
    currentPairingCode = code;
    currentQR = null;
    io.emit('pairingCode', code);
}

function updateStatus(status) {
    connectionStatus = status;
    io.emit('status', status);
}

server.listen(PORT, () => {
    console.log(`Servidor web rodando na porta ${PORT}`);
});

module.exports = { updateQR, updatePairingCode, updateStatus };
