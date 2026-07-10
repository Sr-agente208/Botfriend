const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { getBuffer } = require('./functions.js');

// Gerador de links com suporte a múltiplos provedores
async function generateLink(media, filename = 'arquivo') {
    try {
        // Tenta com o primeiro provedor (Catbox)
        return await uploadToCatbox(media, filename);
    } catch (error1) {
        try {
            // Se falhar, tenta com o segundo provedor (File.io)
            return await uploadToFileIo(media, filename);
        } catch (error2) {
            try {
                // Tenta com terceiro provedor (0x0.st)
                return await uploadTo0x0(media, filename);
            } catch (error3) {
                throw new Error(`Erro ao gerar link. Tente novamente mais tarde.\n${error3.message}`);
            }
        }
    }
}

// Upload para Catbox.moe
async function uploadToCatbox(media, filename) {
    try {
        let buffer;
        
        if (Buffer.isBuffer(media)) {
            buffer = media;
        } else if (typeof media === 'string') {
            if (media.startsWith('http')) {
                buffer = await getBuffer(media);
            } else if (media.startsWith('data:')) {
                buffer = Buffer.from(media.split(',')[1], 'base64');
            } else {
                buffer = fs.readFileSync(media);
            }
        }

        const form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', buffer, filename);

        const response = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: form.getHeaders(),
            timeout: 30000
        });

        return response.data.trim();
    } catch (error) {
        throw error;
    }
}

// Upload para File.io
async function uploadToFileIo(media, filename) {
    try {
        let buffer;
        
        if (Buffer.isBuffer(media)) {
            buffer = media;
        } else if (typeof media === 'string') {
            if (media.startsWith('http')) {
                buffer = await getBuffer(media);
            } else if (media.startsWith('data:')) {
                buffer = Buffer.from(media.split(',')[1], 'base64');
            } else {
                buffer = fs.readFileSync(media);
            }
        }

        const form = new FormData();
        form.append('file', buffer, filename);

        const response = await axios.post('https://file.io', form, {
            headers: form.getHeaders(),
            timeout: 30000
        });

        if (response.data.success) {
            return response.data.link;
        }
        throw new Error(response.data.error);
    } catch (error) {
        throw error;
    }
}

// Upload para 0x0.st
async function uploadTo0x0(media, filename) {
    try {
        let buffer;
        
        if (Buffer.isBuffer(media)) {
            buffer = media;
        } else if (typeof media === 'string') {
            if (media.startsWith('http')) {
                buffer = await getBuffer(media);
            } else if (media.startsWith('data:')) {
                buffer = Buffer.from(media.split(',')[1], 'base64');
            } else {
                buffer = fs.readFileSync(media);
            }
        }

        const form = new FormData();
        form.append('file', buffer, filename);

        const response = await axios.post('https://0x0.st', form, {
            headers: form.getHeaders(),
            timeout: 30000,
            maxRedirects: 5
        });

        const link = response.request.res.responseUrl || response.headers.location;
        if (link) {
            return link;
        }
        throw new Error('Não foi possível obter o link');
    } catch (error) {
        throw error;
    }
}

// Função para processar diferentes tipos de arquivo
async function processFileToLink(fileData, fileType = 'arquivo') {
    try {
        let buffer;
        let filename;

        if (Buffer.isBuffer(fileData)) {
            buffer = fileData;
            filename = `${fileType}_${Date.now()}.bin`;
        } else if (typeof fileData === 'string') {
            if (fileData.startsWith('http')) {
                buffer = await getBuffer(fileData);
                filename = fileData.split('/').pop().split('?')[0] || `${fileType}_${Date.now()}`;
            } else if (fileData.startsWith('data:')) {
                const matches = fileData.match(/data:(.+?);base64,(.+)/);
                if (matches) {
                    const mimeType = matches[1];
                    const base64Data = matches[2];
                    buffer = Buffer.from(base64Data, 'base64');
                    const ext = getExtensionFromMime(mimeType);
                    filename = `${fileType}_${Date.now()}${ext}`;
                }
            } else {
                buffer = fs.readFileSync(fileData);
                filename = fileData.split('/').pop();
            }
        }

        if (!buffer) {
            throw new Error('Formato de arquivo não suportado');
        }

        const link = await generateLink(buffer, filename);
        return {
            success: true,
            link: link,
            filename: filename,
            size: buffer.length
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

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

module.exports = {
    generateLink,
    processFileToLink,
    uploadToCatbox,
    uploadToFileIo,
    uploadTo0x0
};
