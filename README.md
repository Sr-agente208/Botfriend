# YUNA-BASE Botfriend

Bot de WhatsApp configurado para deploy no Railway.

## Como colocar para funcionar:

1. **GitHub**: O código já está neste repositório.
2. **Railway**:
   - Crie um novo projeto no [Railway](https://railway.app/).
   - Conecte este repositório GitHub.
   - Adicione uma variável de ambiente chamada `PORT` (geralmente o Railway já faz isso).
   - Se quiser usar Código de Emparelhamento, adicione `USE_PAIRING=true` e `PHONE_NUMBER=seu_numero_com_ddi`.
3. **Conexão via Site**:
   - Após o deploy, o Railway gerará um domínio (ex: `botfriend-production.up.railway.app`).
   - Acesse esse link no seu navegador.
   - Você verá o **QR Code** ou o **Código de Emparelhamento** diretamente na página, facilitando o login.

## Configurações:
As configurações principais estão em `DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json`.
