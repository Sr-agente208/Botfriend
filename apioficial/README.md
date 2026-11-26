# 🤖 Botfriend Oficial — WhatsApp Cloud API (Meta)

Bot rodando na **API oficial** do WhatsApp, exatamente como a Zapia. Nunca cai em
análise, nunca pede QR, número imune a ban. Baseado na documentação oficial:
https://developers.facebook.com/documentation/business-messaging/whatsapp/overview

> ⚠️ **Importante:** a API oficial funciona **no privado (PV)**. Em grupo, só existe
> a Groups API, que exige *Official Business Account* (selo aprovado pela Meta) e
> grupos criados pela própria API com até 8 pessoas. Os comandos de grupo
> (namorar, rpg, ranks) continuam no bot de grupo (`keisen.js`).

---

## Passo 1 — Criar o app na Meta (~10 min)

1. Acesse https://developers.facebook.com/apps e faça login com tua conta
2. **Create App** → nome (ex.: `Botfriend`) + teu email → **Next**
3. Use case: **Connect with customers through WhatsApp** → **Next** → **Create app**
4. Na página que abre, clique **Start using the API**
5. Em **API Setup**: conecte/crie uma *WhatsApp Business Account*
6. A Meta te dá um **número de teste grátis** (Test Number). Anote:
   - **Test number ID** (o *Phone number ID*) → será o `PHONE_NUMBER_ID`
   - Clique **Generate access token** → copie o token → `ACCESS_TOKEN` (temporário, só pra testar)
7. Em **To**, adicione **teu número** (até 5 números podem receber do número de teste) e clique **Send message** — você deve receber "hello_world" no teu WhatsApp ✅

## Passo 2 — Colocar o bot no Railway

1. Railway → **+ New** → **GitHub Repo** → este repositório
2. No serviço criado: **Settings → Root Directory**: `apioficial`
3. **Variables**, adicione:

| Variável | Valor |
|---|---|
| `ACCESS_TOKEN` | o token do Passo 1 |
| `PHONE_NUMBER_ID` | o ID do número do Passo 1 |
| `VERIFY_TOKEN` | invente uma senha qualquer (ex.: `meu-token-123`) — anote! |
| `APP_SECRET` | (opcional, recomendado) Painel do app → App settings → Basic → **App Secret** |

4. Deploy → copie o **domínio público** gerado (Settings → Networking → Generate Domain)

## Passo 3 — Conectar o webhook

1. Painel da Meta → teu app → **WhatsApp → Configuration → Webhook** (ou *Callback URL*)
2. **Callback URL**: `https://<dominio-do-railway>/webhook`
3. **Verify token**: o mesmo `VERIFY_TOKEN` do Railway → **Verify and save**
   (o nosso bot responde o handshake sozinho — se der erro, veja os logs do Railway)
4. Na mesma página, em **Webhook fields**, dê **Subscribe** no campo **`messages`**

## Passo 4 — Usar!

Manda uma mensagem pro número de teste a partir de um dos 5 números permitidos:

```
oi        → saudação + dica
!menu     → lista de comandos
!ping     → pong
!dado 20  → rola um d20
!moeda    → cara ou coroa
!piada    → piada (qualidade duvidosa)
!conselho → sabedoria duvidosa
!escolha pizza, hambúrguer, sushi → decide por você
```

## Passo 5 — Token permanente (obrigatório após o teste)

O token do Passo 1 expira em 24h. Pra gerar um permanente:

1. business.facebook.com → **Business Settings** → **Users → System users** → **Add**
2. Nome qualquer, função **Admin**
3. **Generate new token** → permissões: `whatsapp_business_messaging` + `whatsapp_business_management`
4. Copie o token → atualiza a variável `ACCESS_TOKEN` no Railway → redeploy

## Como funciona (arquitetura)

```
WhatsApp (Meta)  ⇄  Webhook /webhook (Flask, este bot)  ⇄  Graph API (enviar resposta)
```

- **Verificação** do webhook: `GET /webhook` ecoa o `hub.challenge` se o token bater
- **Recepção**: `POST /webhook` — assinatura `X-Hub-Signature-256` validada com `APP_SECRET`
- **Dedupe**: a Meta reenvia notificações; IDs já vistos são ignorados (sem resposta dupla)
- **Marcar lida**: toda mensagem recebida é marcada como lida (bolinha azul)
- **Sempre responde 200** pra Meta (webhook que erra é desativado por eles)

## Rodando local (pra desenvolver)

```bash
pip install -r requirements.txt
GRAPH_BASE=http://localhost:8899 ACCESS_TOKEN=x PHONE_NUMBER_ID=1 VERIFY_TOKEN=t python app.py
# em outro terminal, exponha com ngrok e configure no painel da Meta
ngrok http 5000
```

## Testes

25 testes (unitários dos comandos + integração com mock da Graph API):

```bash
python3 teste.py   # precisa do flask + requests
```

## Limites e custos (resumo honesto)

- Número de **teste**: só conversa com até 5 números cadastrados
- Número real: conversa iniciada pelo usuário tem **janela de 24h** pra você responder de graça; fora isso, precisa de *template* aprovado
- Cobrança é **por mensagem** (com franquia mensal grátis de mensagens de serviço) — veja https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
- **Grupos**: só com Official Business Account (Groups API, máx. 8 participantes)
