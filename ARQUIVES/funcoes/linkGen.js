const { uploadToCatbox, uploadToFileIo, uploadTo0x0 } = require('./uploaders.js');
const fs = require('fs');
const path = require('path');

function getExtensionFromMime(mimeType) {
    const mimeMap = {
        'image/jpeg': '.jpg',
        'image/png': '.png',
        'image/gif': '.gif',
        'image/webp': '.webp',
        'video/mp4': '.mp4',
        'video/webm': '.webm',
        'audio/mpeg': '.mp3',
        'audio/wav': '.wav',
        'application/pdf': '.pdf',
        'application/zip': '.zip',
        'text/plain': '.txt'
    };
    return mimeMap[mimeType] || '.bin';
}

async function generateLink(media, filename = 'arquivo') {
    const falhas = [];
    const provedores = [
        ['Catbox', uploadToCatbox],
        ['0x0.st', uploadTo0x0],
        ['File.io', uploadToFileIo]
    ];

    for (const [nome, upload] of provedores) {
        try {
            return await upload(media, filename);
        } catch (error) {
            falhas.push(`${nome}: ${error?.message || error}`);
        }
    }

    throw new Error(`Nenhum host aceitou o arquivo (${falhas.join(' | ')})`);
}

async function processFileToLink(fileData, fileType = 'arquivo') {
    try {
        let media, filename, size;
        if (Buffer.isBuffer(fileData)) {
            media = fileData;
            filename = `${fileType}_${Date.now()}.bin`;
            size = media.length;
        } else if (typeof fileData === 'string') {
            if (/^https?:\/\//i.test(fileData)) {
                const { getBuffer } = require('./functions.js');
                media = await getBuffer(fileData);
                filename = path.basename(new URL(fileData).pathname) || `${fileType}.bin`;
                size = media.length;
            } else if (fileData.startsWith('data:')) {
                const matches = fileData.match(/data:(.+?);base64,(.+)/);
                if (matches) {
                    media = Buffer.from(matches[2], 'base64');
                    filename = `${fileType}_${Date.now()}${getExtensionFromMime(matches[1])}`;
                    size = media.length;
                }
            } else {
                const stat = fs.statSync(fileData);
                if (!stat.isFile()) throw new Error('O caminho informado não é um arquivo');
                media = fileData;
                filename = path.basename(fileData);
                size = stat.size;
            }
        }

        if (!media) throw new Error('Formato não suportado');
        const link = await generateLink(media, filename);
        return { success: true, link, filename, size };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

module.exports = { generateLink, processFileToLink };
