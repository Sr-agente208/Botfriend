const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { getBuffer } = require('./functions.js');

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

module.exports = {
    uploadToCatbox,
    uploadToFileIo,
    uploadTo0x0
};
