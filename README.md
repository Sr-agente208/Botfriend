# YUNA-BASE Botfriend

Bot de WhatsApp configurado para deploy no Railway.

## Como colocar para funcionar:

1. **GitHub**: O código já está neste repositório.
2. **Railway**:
   - Crie um novo projeto no [Railway](https://railway.app/).
   - Conecte este repositório GitHub.
   - O Railway usará o `Procfile` automaticamente para iniciar o bot.
3. **Conexão**:
   - Como o Railway é um ambiente headless (sem terminal interativo fácil para QR Code), o bot está configurado para usar **Pairing Code**.
   - Verifique os logs do Railway para ver o código de emparelhamento e digite seu número quando solicitado (ou configure via variáveis de ambiente se o código permitir).

## Configurações:
As configurações principais estão em `DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json`.
