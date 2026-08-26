FROM node:20-slim

# Instalar dependências do sistema necessárias
RUN apt-get update && apt-get install -y \
    ffmpeg \
    git \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps --production=false

# Copiar resto do código
COPY . .

# Criar diretórios necessários
RUN mkdir -p "DADOS DO KEISEN/qr-code" \
    "DADOS DO KEISEN/grupos/ATIVAÇÕES-keisen" \
    "DADOS DO KEISEN/grupos/games/anagrama" \
    "DADOS DO KEISEN/grupos/games/enigma" \
    "DADOS DO KEISEN/grupos/games/gartic" \
    "DADOS DO KEISEN/grupos/games/quiz-animais" \
    "DADOS DO KEISEN/grupos/games/quiz-futebol" \
    "DADOS DO KEISEN/grupos/games/wmusic" \
    "ARQUIVES/tictactoe/db" \
    "DADOS DO KEISEN/func/prefixo" \
    "database" \
    && chmod -R 755 "DADOS DO KEISEN" ARQUIVES database || true

# Expor porta
EXPOSE 3000

# Variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:'+ (process.env.PORT || 3000) + '/health', (r)=>{process.exit(r.statusCode===200?0:1)}).on('error',()=>process.exit(1))"

CMD ["npm", "start"]
