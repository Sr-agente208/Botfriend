/**
 * reconexao.js — política de reconexão do bot (pura, testável).
 *
 * Códigos conhecidos do Baileys (DisconnectReason):
 *   401 loggedOut | 403 forbidden | 404 userNotFound | 408 timedOut
 *   411 clientInterrupted | 428 connectionClosed | 440 connectionLost
 *   500 badAck | 501 unavailable | 503 serviceUnavailable | 515 restartRequired
 */
const SESSAO_INVALIDA = new Set([401, 403, 404]);

const MAX_ATRASO = 60000;
const BASE = 5000;

/**
 * Dado o código de fechamento e o nº de tentativas já feitas,
 * devolve { tipo, atraso } — o que fazer e quanto tempo esperar.
 *   tipo 'sessao-invalida': recria o socket pra gerar QR novo (pouco depois)
 *   tipo 'rapida': reconecta quase na hora (WhatsApp pediu restart)
 *   tipo 'normal': backoff exponencial 5s→10s→20s→40s→60s (teto)
 *   tipo 'aberto': não usado aqui (conexão aberta zera tentativas)
 */
function decidirReconexao(code, tentativas) {
  if (SESSAO_INVALIDA.has(code)) return { tipo: 'sessao-invalida', atraso: 2000 };
  if (code === 515) return { tipo: 'rapida', atraso: 1000 };
  const atraso = Math.min(BASE * Math.pow(2, tentativas), MAX_ATRASO);
  return { tipo: 'normal', atraso };
}

module.exports = { decidirReconexao, SESSAO_INVALIDA };
