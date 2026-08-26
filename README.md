# WHITE LOTUS - Botfriend | Railway Deploy Fixed ✅

Bot de WhatsApp Baileys configurado para deploy estável no Railway.

## 🚀 Deploy no Railway - PASSO A PASSO

### 1. Conectar Repositório
- Crie um novo projeto no [Railway](https://railway.app/)
- Clique em "Deploy from GitHub repo" e selecione este repositório
- Railway vai detectar automaticamente Node.js via `nixpacks.toml`

### 2. Variáveis de Ambiente (Opcional)
No painel do Railway > Variables, adicione se quiser pairing code:

```
USE_PAIRING=true
PHONE_NUMBER=5511999999999
PORT=3000
```

- `PHONE_NUMBER`: Seu número com DDI (ex: 5511986059638) sem + ou espaços
- `USE_PAIRING`: true para usar código de 8 dígitos ao invés de QR
- `PORT`: Railway já injeta automaticamente, não precisa criar

### 3. Deploy
- O build vai rodar `npm install --legacy-peer-deps`
- O start roda `npm start` = `node ./ARQUIVES/connect.js`
- O servidor web sobe imediatamente em `0.0.0.0:PORT` com healthcheck em `/health`
- Isso garante que o Railway não marque como falho mesmo enquanto o WhatsApp conecta

### 4. Conectar WhatsApp
- Após deploy, Railway gera um domínio: `seu-projeto.up.railway.app`
- Acesse esse link no navegador
- Você verá:
  - **QR Code** para escanear: WhatsApp > Aparelhos conectados > Conectar aparelho
  - **Código de Pareamento** se usar PHONE_NUMBER: Aparelhos conectados > Conectar com número

## 🔧 O que foi corrigido para Railway

### Problemas anteriores:
- ❌ `package.json` com dependências faltando (`pino`, `@hapi/boom`, `fs-extra`, `uuid`, etc)
- ❌ Dependência duplicada `baileys` obsoleta
- ❌ Sem `engines` - Railway usava Node incompatível
- ❌ Sem `nixpacks.toml` - faltava `ffmpeg` para stickers/áudio
- ❌ `connect.js` sem healthcheck - Railway marcava como crash
- ❌ `keisen.js` com `fs.watchFile` causando loop de reload no Railway
- ❌ Interval de fechamento de grupo sendo recriado a cada mensagem
- ❌ Export confuso `module.exports = startkeisen` que perdia primeira mensagem
- ❌ Sem tratamento de `SIGTERM` e `uncaughtException` - crashava

### Correções aplicadas:
- ✅ `package.json` completo com todas deps e `engines: Node >=18`
- ✅ `nixpacks.toml` instala Node 20 + ffmpeg + python3 + git
- ✅ `railway.json` + `railway.toml` com healthcheck em `/health`
- ✅ `Dockerfile` alternativo com ffmpeg e healthcheck
- ✅ `connect.js` reescrito:
  - Web sobe ANTES do WhatsApp (Railway healthcheck passa)
  - `/health` retorna 200 JSON
  - `/status` retorna estado da conexão
  - Cria diretórios automaticamente
  - Reconnect com backoff exponencial
  - Suporte a pairing code via env
  - Handler do bot carregado uma vez, não a cada mensagem
  - Graceful shutdown
- ✅ `keisen.js`:
  - Removido `fs.watchFile`
  - Export direto `module.exports = keisen`
  - Interval de grupo só cria uma vez (`global.intervalHorarios`)

## 📁 Estrutura Importante

```
Botfriend/
├── ARQUIVES/connect.js          # Conexão + servidor web (FIXED)
├── keisen.js                    # Lógica do bot (FIXED)
├── package.json                 # Deps completas
├── nixpacks.toml               # Config Railway - instala ffmpeg
├── railway.json                # Healthcheck config
├── Dockerfile                  # Fallback builder
├── Procfile                    # web: npm start
└── DADOS DO KEISEN/qr-code/    # Sessão WhatsApp (volume efêmero)
```

## ⚠️ Notas Railway

- **Sessão efêmera**: No plano free, se o container reiniciar, você precisa escanear QR de novo. Use volume ou backup do `qr-code` se quiser persistência.
- **Logs**: Veja logs em Railway > Deployments > View Logs
- **Se falhar**: Verifique se `PORT` está sendo usada e se `/health` retorna 200. Nosso fix garante isso.

## 🔑 Configurações

Edite `DADOS DO KEISEN/INFO_KEISEN/media/INFO_KEISEN.json`:

```json
{
  "prefix": "©",
  "NomeDoBot": "WHITE LOTUS",
  "ownerName": "Sr-agente208",
  "ownerNumber": "5511986059638"
}
```

## 📞 Suporte

Se ainda falhar no Railway:
1. Ver logs de build - deve mostrar `Build OK - White Lotus`
2. Ver logs de deploy - deve mostrar `[WEB] Servidor rodando na porta ...`
3. Acessar `/health` - deve retornar `{"status":"ok"}`
4. Se QR não aparece, aguarde 15s e recarregue - Baileys demora para gerar
