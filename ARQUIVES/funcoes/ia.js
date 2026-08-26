const axios = require('axios');
const fs = require('fs');

// Configuração
const GROQ_API_KEY = process.env.GROQ_API_KEY || process.env.GROQ_KEY || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const TOKITO_API_KEY = process.env.TOKITO_API_KEY || "Ykemi2606191225";

// Função para tentar Groq (melhor qualidade)
async function tryGroq(prompt, model = 'llama-3.3-70b-versatile') {
    if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY não configurada');
    try {
        const resp = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: model,
            messages: [
                { role: 'system', content: 'Você é o WHITE LOTUS, um bot de WhatsApp amigável, engraçado e inteligente. Responda em português do Brasil, de forma natural e humana. Nunca diga que é IA, GPT ou similar. Seja curto quando possível, mas ajude de verdade.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 1000
        }, {
            headers: { 
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            timeout: 25000
        });
        const content = resp.data?.choices?.[0]?.message?.content;
        if (content && content.trim()) return content.trim();
        throw new Error('Groq resposta vazia');
    } catch (e) {
        console.log('[IA Groq ERRO]', e.response?.data || e.message);
        throw e;
    }
}

// Fallback 1: Tokito API (se disponível)
async function tryTokito(prompt) {
    try {
        const url = `https://tokito-apis.site/api/ias/dracarys-llama-3?prompt=${encodeURIComponent(prompt)}&apikey=${TOKITO_API_KEY}`;
        const resp = await axios.get(url, { timeout: 20000 });
        const data = resp.data;
        const result = data?.resultado?.response || data?.resultado?.resultado || data?.response || data?.result || data?.resposta;
        if (result && String(result).trim()) return String(result).trim();
        throw new Error('Tokito vazio');
    } catch (e) {
        console.log('[IA Tokito ERRO]', e.message);
        throw e;
    }
}

// Fallback 2: API gratuita - Siputzx
async function trySiputzx(prompt) {
    try {
        const url = `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(prompt)}&content=Você é o WHITE LOTUS, bot do WhatsApp, responda em pt-br de forma natural e curta.`;
        const resp = await axios.get(url, { timeout: 20000 });
        const result = resp.data?.data || resp.data?.result || resp.data?.resposta;
        if (result && String(result).trim()) return String(result).trim();
        throw new Error('Siputzx vazio');
    } catch (e) {
        console.log('[IA Siputzx ERRO]', e.message);
        throw e;
    }
}

// Fallback 3: Ryzendesu free
async function tryRyzendesu(prompt) {
    try {
        const url = `https://api.ryzendesu.vip/api/ai/chatgpt?text=${encodeURIComponent(prompt)}`;
        const resp = await axios.get(url, { timeout: 20000 });
        const result = resp.data?.result || resp.data?.response || resp.data?.answer;
        if (result && String(result).trim()) return String(result).trim();
        throw new Error('Ryzendesu vazio');
    } catch (e) {
        console.log('[IA Ryzendesu ERRO]', e.message);
        throw e;
    }
}

// Fallback 4: Delirius ou outras
async function tryDelirius(prompt) {
    try {
        // Tentativa com API pública
        const url = `https://api.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(prompt)}`;
        const resp = await axios.get(url, { timeout: 20000 });
        const result = resp.data?.result || resp.data?.response || resp.data?.message;
        if (result && String(result).trim()) return String(result).trim();
        throw new Error('Delirius vazio');
    } catch (e) {
        console.log('[IA Delirius ERRO]', e.message);
        throw e;
    }
}

// Função principal com fallbacks
async function responderIA(prompt, estiloExtra = "") {
    const fullPrompt = estiloExtra ? `${estiloExtra}\n\nUsuário: ${prompt}` : prompt;
    
    // Lista de tentativas em ordem de qualidade
    const tentativas = [
        () => tryGroq(fullPrompt, 'llama-3.3-70b-versatile'),
        () => tryGroq(fullPrompt, 'llama-3.1-8b-instant'), // modelo mais rápido
        () => tryTokito(fullPrompt),
        () => trySiputzx(fullPrompt),
        () => tryRyzendesu(fullPrompt),
        () => tryDelirius(fullPrompt)
    ];

    for (let i = 0; i < tentativas.length; i++) {
        try {
            console.log(`[IA] Tentativa ${i+1}/${tentativas.length}`);
            const result = await tentativas[i]();
            if (result) {
                console.log(`[IA] Sucesso na tentativa ${i+1}`);
                return result;
            }
        } catch (e) {
            // Continua para próxima tentativa
            continue;
        }
    }

    // Se todas falharem, retorna mensagem amigável
    return `😅 Opa, minha IA está com uma leve dor de cabeça agora, mas já estou melhorando!\n\nVocê perguntou: "${prompt.slice(0,100)}"\n\nTenta de novo em alguns segundos? Ou verifica se a variável GROQ_API_KEY está configurada no Railway.`;
}

// Função para GPT comando específico
async function chatGPT(prompt) {
    return await responderIA(prompt, "Responda de forma inteligente, útil e em português do Brasil. Seja natural.");
}

// Função para Gemini (usa mesmo handler mas com estilo diferente)
async function geminiIA(prompt) {
    return await responderIA(prompt, "Você é o Gemini, mas responda como WHITE LOTUS, de forma criativa e em pt-br.");
}

module.exports = {
    responderIA,
    chatGPT,
    geminiIA,
    tryGroq,
    tryTokito
};
