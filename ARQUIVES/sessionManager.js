const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * WHITE LOTUS - Session Manager para Railway
 * Evita ter que escanear QR toda vez que faz deploy/atualização
 * 
 * Como funciona:
 * 1. No Railway, adicione um VOLUME montado em /app/DADOS DO KEISEN/qr-code
 *    OU
 * 2. Use variável SESSION_DATA com base64 do creds.json
 * 
 * Para gerar SESSION_DATA local:
 * node -e "console.log(require('fs').readFileSync('./DADOS DO KEISEN/qr-code/creds.json','base64'))"
 * Cole o base64 no Railway Variables como SESSION_DATA
 */

function log(msg, color = 'cyan') {
    console.log(chalk[color](`[SESSION] ${msg}`));
}

function restoreFromBase64(sessionDir, base64Data) {
    try {
        const credsPath = path.join(sessionDir, 'creds.json');
        const buffer = Buffer.from(base64Data, 'base64');
        const jsonStr = buffer.toString('utf-8');
        // Valida se é JSON válido
        JSON.parse(jsonStr);
        fs.ensureDirSync(sessionDir);
        fs.writeFileSync(credsPath, jsonStr);
        log(`creds.json restaurado de SESSION_DATA (${buffer.length} bytes)`, 'green');
        return true;
    } catch (e) {
        log(`Falha ao restaurar de base64: ${e.message}`, 'red');
        return false;
    }
}

function restoreFromJsonString(sessionDir, jsonString) {
    try {
        const credsPath = path.join(sessionDir, 'creds.json');
        // Se for JSON string direta (não base64)
        let jsonStr = jsonString.trim();
        if (jsonStr.startsWith('{')) {
            JSON.parse(jsonStr); // valida
            fs.ensureDirSync(sessionDir);
            fs.writeFileSync(credsPath, jsonStr);
            log(`creds.json restaurado de CREDS_JSON`, 'green');
            return true;
        }
        return false;
    } catch (e) {
        log(`Falha ao restaurar de JSON string: ${e.message}`, 'red');
        return false;
    }
}

function restoreSession(sessionDir) {
    try {
        fs.ensureDirSync(sessionDir);
        const credsPath = path.join(sessionDir, 'creds.json');
        
        // Se já tem creds.json válido, não precisa restaurar
        if (fs.existsSync(credsPath)) {
            try {
                const data = fs.readFileSync(credsPath, 'utf-8');
                const parsed = JSON.parse(data);
                if (parsed && Object.keys(parsed).length > 0) {
                    log(`Sessão existente encontrada (${Object.keys(parsed).length} chaves)`, 'gray');
                    return true;
                }
            } catch {}
        }

        log(`Nenhuma sessão válida encontrada, tentando restaurar de variáveis...`, 'yellow');

        // Tenta restaurar de SESSION_DATA (base64)
        if (process.env.SESSION_DATA) {
            log(`SESSION_DATA encontrada, restaurando...`, 'cyan');
            if (restoreFromBase64(sessionDir, process.env.SESSION_DATA)) {
                return true;
            }
            // Tenta como JSON direto também
            if (restoreFromJsonString(sessionDir, process.env.SESSION_DATA)) {
                return true;
            }
        }

        // Tenta restaurar de CREDS_DATA (base64)
        if (process.env.CREDS_DATA) {
            log(`CREDS_DATA encontrada, restaurando...`, 'cyan');
            if (restoreFromBase64(sessionDir, process.env.CREDS_DATA)) {
                return true;
            }
        }

        // Tenta restaurar de CREDS_JSON (JSON raw)
        if (process.env.CREDS_JSON) {
            log(`CREDS_JSON encontrada, restaurando...`, 'cyan');
            if (restoreFromJsonString(sessionDir, process.env.CREDS_JSON)) {
                return true;
            }
        }

        // Tenta restaurar de arquivo de backup local se existir
        const backupPaths = [
            path.join(sessionDir, 'creds.json.bak'),
            path.join(sessionDir, 'backup_creds.json'),
            path.join(__dirname, '..', 'session_backup.json')
        ];
        for (const bp of backupPaths) {
            if (fs.existsSync(bp)) {
                try {
                    const backupData = fs.readFileSync(bp, 'utf-8');
                    JSON.parse(backupData);
                    fs.writeFileSync(credsPath, backupData);
                    log(`Sessão restaurada de backup ${bp}`, 'green');
                    return true;
                } catch {}
            }
        }

        log(`Nenhum backup encontrado, será necessário escanear QR Code`, 'yellow');
        return false;

    } catch (e) {
        log(`Erro ao restaurar sessão: ${e.message}`, 'red');
        return false;
    }
}

function backupSession(sessionDir) {
    try {
        const credsPath = path.join(sessionDir, 'creds.json');
        if (!fs.existsSync(credsPath)) return;

        const data = fs.readFileSync(credsPath, 'utf-8');
        const backupPath = path.join(sessionDir, 'creds.json.bak');
        fs.writeFileSync(backupPath, data);

        // Gera base64 para usuário copiar para Railway Variables
        const base64 = Buffer.from(data).toString('base64');
        
        // Salva base64 em arquivo para facilitar
        const base64Path = path.join(sessionDir, 'session_base64.txt');
        fs.writeFileSync(base64Path, base64);

        log(`Backup criado: ${backupPath}`, 'gray');
        log(`Base64 salvo em: ${base64Path} (${base64.length} chars)`, 'gray');
        
        // Loga instrução a cada 10 minutos para não spammar
        if (!global.lastBackupLog || Date.now() - global.lastBackupLog > 10*60*1000) {
            global.lastBackupLog = Date.now();
            console.log(chalk.magenta.bold(`\n[BACKUP INSTRUÇÃO] Para persistir sessão no Railway:`));
            console.log(chalk.cyan(`1. Copie o conteúdo de DADOS DO KEISEN/qr-code/session_base64.txt`));
            console.log(chalk.cyan(`2. No Railway > Variables > Add SESSION_DATA com esse base64`));
            console.log(chalk.cyan(`3. Ou adicione um VOLUME montado em /app/DADOS DO KEISEN/qr-code\n`));
        }

        return base64;
    } catch (e) {
        log(`Erro ao fazer backup: ${e.message}`, 'red');
    }
}

function getSessionStatus(sessionDir) {
    try {
        const credsPath = path.join(sessionDir, 'creds.json');
        if (!fs.existsSync(credsPath)) return { exists: false, size: 0, valid: false };
        
        const stats = fs.statSync(credsPath);
        const data = fs.readFileSync(credsPath, 'utf-8');
        let valid = false;
        try {
            const parsed = JSON.parse(data);
            valid = parsed && Object.keys(parsed).length > 0;
        } catch {}
        
        return {
            exists: true,
            size: stats.size,
            valid: valid,
            mtime: stats.mtime
        };
    } catch {
        return { exists: false, size: 0, valid: false };
    }
}

module.exports = {
    restoreSession,
    backupSession,
    getSessionStatus
};
