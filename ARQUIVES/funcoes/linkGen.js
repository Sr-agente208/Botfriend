const { uploadToCatbox, uploadToFileIo, uploadTo0x0 } = require('./uploaders.js');
const fs = require('fs');

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
    try {
        return await uploadToCatbox(media, filename);
    } catch (error1) {
        try {
            return await uploadToFileIo(media, filename);
        } catch (error2) {
            try {
                return await uploadTo0x0(media, filename);
            } catch (error3) {
                throw new Error(`Erro ao gerar link: ${error3.message}`);
            }
        }
    }
}

async function processFileToLink(fileData, fileType = 'arquivo') {
    try {
        let buffer, filename;
        if (Buffer.isBuffer(fileData)) {
            buffer = fileData;
            filename = `${fileType}_${Date.now()}.bin`;
        } else if (typeof fileData === 'string') {
            if (fileData.startsWith('http')) {
                const { getBuffer } = require('./functions.js');
                buffer = await getBuffer(fileData);
                filename = fileData.split('/').pop().split('?')[0] || `${fileType}`;
            } else if (fileData.startsWith('data:')) {
                const matches = fileData.match(/data:(.+?);base64,(.+)/);
                if (matches) {
                    buffer = Buffer.from(matches[2], 'base64');
                    filename = `${fileType}_${Date.now()}${getExtensionFromMime(matches[1])}`;
                }
            } else {
                buffer = fs.readFileSync(fileData);
                filename = fileData.split('/').pop();
            }
        }
        if (!buffer) throw new Error('Formato não suportado');
        const link = await generateLink(buffer, filename);
        return { success: true, link, filename, size: buffer.length };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

module.exports = { generateLink, processFileToLink };
