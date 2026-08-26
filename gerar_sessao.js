const fs = require('fs');
const path = require('path');

const sessionDir = path.join(__dirname, 'DADOS DO KEISEN', 'qr-code');
const credsPath = path.join(sessionDir, 'creds.json');

console.log('🪷 WHITE LOTUS - Gerador de SESSION_DATA para Railway 🪷\n');

if (!fs.existsSync(credsPath)) {
    console.log('❌ creds.json não encontrado em:', credsPath);
    console.log('📱 Conecte o bot primeiro escaneando o QR Code!');
    console.log('💡 Depois rode este script novamente');
    process.exit(1);
}

try {
    const data = fs.readFileSync(credsPath, 'utf-8');
    const parsed = JSON.parse(data);
    
    if (!parsed || Object.keys(parsed).length === 0) {
        console.log('❌ creds.json está vazio ou inválido');
        process.exit(1);
    }

    const base64 = Buffer.from(data).toString('base64');
    
    console.log('✅ Sessão encontrada!');
    console.log(`📁 Tamanho: ${data.length} bytes`);
    console.log(`🔑 Base64 tamanho: ${base64.length} chars\n`);
    
    console.log('📋 INSTRUÇÕES RAILWAY:\n');
    console.log('1️⃣  Vá no Railway > Seu Projeto > Variables');
    console.log('2️⃣  Clique em + New Variable');
    console.log('3️⃣  Nome: SESSION_DATA');
    console.log('4️⃣  Valor: Cole o base64 abaixo (todo o conteúdo)\n');
    
    console.log('─'.repeat(60));
    console.log(base64);
    console.log('─'.repeat(60));
    
    console.log('\n5️⃣  Salve e faça Redeploy');
    console.log('✅ Agora seu bot NÃO vai pedir QR toda vez que atualizar!\n');
    
    console.log('💡 ALTERNATIVA - VOLUME (mais simples):');
    console.log('   No Railway > Settings > Volumes > Add Volume');
    console.log('   Mount Path: /app/DADOS DO KEISEN/qr-code');
    console.log('   Isso persiste a pasta automaticamente!\n');
    
    // Salvar em arquivo também
    const outPath = path.join(sessionDir, 'session_base64.txt');
    fs.writeFileSync(outPath, base64);
    console.log(`💾 Base64 também salvo em: ${outPath}`);

} catch (e) {
    console.log('❌ Erro:', e.message);
    console.log(e.stack);
}
