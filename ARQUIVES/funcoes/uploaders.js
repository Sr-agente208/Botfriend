const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { getBuffer } = require('./functions.js');

const UPLOAD_TIMEOUT_MS = 10 * 60 * 1000;

async function appendMedia(form, fieldName, media, filename) {
    let buffer;

    if (Buffer.isBuffer(media)) {
        buffer = media;
    } else if (typeof media === 'string' && media.startsWith('data:')) {
        const base64 = media.split(',')[1];
        if (!base64) throw new Error('Arquivo data URI inválido');
        buffer = Buffer.from(base64, 'base64');
    } else if (typeof media === 'string' && /^https?:\/\//i.test(media)) {
        buffer = await getBuffer(media);
    }

    if (buffer) {
        form.append(fieldName, buffer, {
            filename: filename || 'arquivo.bin',
            knownLength: buffer.length
        });
        return;
    }

    if (typeof media === 'string') {
        const stat = fs.statSync(media);
        if (!stat.isFile()) throw new Error('O caminho informado não é um arquivo');
        form.append(fieldName, fs.createReadStream(media), {
            filename: filename || path.basename(media),
            knownLength: stat.size
        });
        return;
    }

    throw new Error('Formato de mídia não suportado');
}

function assertHttpLink(link, provider) {
    const normalized = String(link || '').trim();
    if (!/^https?:\/\//i.test(normalized)) {
        throw new Error(`${provider} não retornou um link válido`);
    }
    return normalized;
}

// Catbox: links permanentes, até o limite aceito pelo próprio provedor.
async function uploadToCatbox(media, filename) {
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    await appendMedia(form, 'fileToUpload', media, filename);

    const response = await axios.post('https://catbox.moe/user/api.php', form, {
        headers: form.getHeaders(),
        timeout: UPLOAD_TIMEOUT_MS,
        maxBodyLength: Infinity,
        maxContentLength: Infinity
    });
    return assertHttpLink(response.data, 'Catbox');
}

// 0x0.st suporta arquivos maiores que o limite de Catbox; a retenção é temporária.
async function uploadTo0x0(media, filename) {
    const form = new FormData();
    await appendMedia(form, 'file', media, filename);

    const response = await axios.post('https://0x0.st', form, {
        headers: form.getHeaders(),
        timeout: UPLOAD_TIMEOUT_MS,
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        maxRedirects: 5
    });
    const link = response.data || response.request?.res?.responseUrl || response.headers.location;
    return assertHttpLink(link, '0x0.st');
}

// File.io é o último fallback para arquivos muito grandes; pode aplicar expiração/limites próprios.
async function uploadToFileIo(media, filename) {
    const form = new FormData();
    await appendMedia(form, 'file', media, filename);

    const response = await axios.post('https://file.io', form, {
        headers: form.getHeaders(),
        timeout: UPLOAD_TIMEOUT_MS,
        maxBodyLength: Infinity,
        maxContentLength: Infinity
    });

    if (response.data?.success) return assertHttpLink(response.data.link, 'File.io');
    throw new Error(response.data?.error || 'File.io recusou o arquivo');
}

module.exports = {
    uploadToCatbox,
    uploadToFileIo,
    uploadTo0x0
};
