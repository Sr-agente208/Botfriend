///\\\\///\\\\\////\\\\\\/////\\\\\//////\\\\\\\\//////////\\\\\\\\\\\\\////////////\\\\\////
// sistema de rpgs criado pelo programadores 
// by yuka devs
// editora tieli devs
const fs = require('fs');
const path = require('path');

// CONFIGURAÇÃO DO BANCO DE DADOS
const DB_PATH = path.join(__dirname, '../../../database/rpg');
const PLAYERS_FILE = path.join(DB_PATH, 'players.json');
const GROUPS_FILE = path.join(DB_PATH, 'groups.json');
const GUILDS_FILE = path.join(DB_PATH, 'guilds.json');
const MARKET_FILE = path.join(DB_PATH, 'market.json');
const QUESTS_FILE = path.join(DB_PATH, 'quests.json');

if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });
for (const file of [PLAYERS_FILE, GROUPS_FILE, GUILDS_FILE, MARKET_FILE, QUESTS_FILE]) {
  if (!fs.existsSync(file)) fs.writeFileSync(file, '{}');
}

let players = JSON.parse(fs.readFileSync(PLAYERS_FILE));
let groups = JSON.parse(fs.readFileSync(GROUPS_FILE));
let guilds = JSON.parse(fs.readFileSync(GUILDS_FILE));
let market = JSON.parse(fs.readFileSync(MARKET_FILE));
let questsGlobal = JSON.parse(fs.readFileSync(QUESTS_FILE));

function saveAll() {
  fs.writeFileSync(PLAYERS_FILE, JSON.stringify(players, null, 2));
  fs.writeFileSync(GROUPS_FILE, JSON.stringify(groups, null, 2));
  fs.writeFileSync(GUILDS_FILE, JSON.stringify(guilds, null, 2));
  fs.writeFileSync(MARKET_FILE, JSON.stringify(market, null, 2));
  fs.writeFileSync(QUESTS_FILE, JSON.stringify(questsGlobal, null, 2));
}

// ========== MODO RPG NO GRUPO ==========
function setGroupRPGMode(groupId, enabled) {
  if (!groups[groupId]) groups[groupId] = { modo_rpg: false };
  groups[groupId].modo_rpg = enabled;
  saveAll();
}
function isRPGModeActive(groupId) {
  return groups[groupId]?.modo_rpg === true;
}

// ========== CLASSES E ATRIBUTOS ==========
const CLASSES = {
  guerreiro: { forca: 8, defesa: 6, agilidade: 4, hpBase: 30, manaBase: 10 },
  mago:      { forca: 4, defesa: 3, agilidade: 6, hpBase: 20, manaBase: 20 },
  arqueiro:  { forca: 6, defesa: 4, agilidade: 8, hpBase: 25, manaBase: 15 }
};

function createPlayer(userId, groupId, className) {
  const classe = CLASSES[className.toLowerCase()];
  if (!classe) return null;
  const key = `${groupId}|${userId}`;
  if (players[key]) return null;
  players[key] = {
    nome: className.toLowerCase(),
    level: 1,
    xp: 0,
    xpProximo: 100,
    hp: classe.hpBase,
    hpMax: classe.hpBase,
    mana: classe.manaBase,
    manaMax: classe.manaBase,
    forca: classe.forca,
    defesa: classe.defesa,
    agilidade: classe.agilidade,
    moedas: 100,
    inventario: [],
    equipamentos: { arma: null, armadura: null, acessorio: null },
    trabalhos: { minerador: 0, lenhador: 0, pescador: 0, guarda: 0 },
    pet: null,
    ultimaBatalha: 0,
    ultimoTrabalho: 0,
    ultimoPvp: 0,
    ascensoes: 0,
    guild: null,
    missoes: [],
    pvpWins: 0,
    pvpLosses: 0
  };
  saveAll();
  return players[key];
}

function getPlayer(userId, groupId) {
  return players[`${groupId}|${userId}`];
}

function addXP(userId, groupId, amount) {
  const key = `${groupId}|${userId}`;
  let p = players[key];
  if (!p) return false;
  p.xp += amount;
  let upou = false;
  while (p.xp >= p.xpProximo) {
    p.xp -= p.xpProximo;
    p.level++;
    p.xpProximo = Math.floor(p.xpProximo * 1.2);
    p.hpMax += 10;
    p.hp = p.hpMax;
    p.manaMax += 5;
    p.mana = p.manaMax;
    p.forca += 2;
    p.defesa += 2;
    p.agilidade += 2;
    upou = true;
  }
  saveAll();
  return upou;
}

// ========== COMBATE CONTRA MONSTRO ==========
const MONSTROS = ["Slime", "Orc", "Lobo", "Goblin", "Esqueleto", "Harpia", "Troll", "Bruxo", "Dragão Jovem", "Cavaleiro Negro"];

function batalhar(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Você não tem personagem. Use !rpg start" };
  const agora = Date.now();
  if (agora - player.ultimaBatalha < 30000) {
    const restante = Math.ceil((30000 - (agora - player.ultimaBatalha)) / 1000);
    return { erro: `Aguarde ${restante}s para outra batalha.` };
  }
  const monstro = {
    nome: MONSTROS[Math.floor(Math.random() * MONSTROS.length)],
    level: Math.max(1, player.level + (Math.random() > 0.7 ? 1 : -1)),
    hp: 20 + player.level * 5,
    ataque: 5 + player.level * 2,
    defesa: 3 + player.level * 1.5,
    moedasDrop: 20 + player.level * 5,
    xpDrop: 30 + player.level * 8
  };
  let playerHp = player.hp;
  let monsterHp = monstro.hp;
  let log = [];
  let turnos = 0;
  while (playerHp > 0 && monsterHp > 0 && turnos < 20) {
    turnos++;
    let danoP = Math.max(1, player.forca + Math.floor(Math.random() * 6) - monstro.defesa);
    monsterHp -= danoP;
    log.push(`🗡️ Você causou ${danoP} dano. Monstro: ${Math.max(0, monsterHp)} HP`);
    if (monsterHp <= 0) break;
    let danoM = Math.max(1, monstro.ataque + Math.floor(Math.random() * 5) - player.defesa);
    playerHp -= danoM;
    log.push(`👹 ${monstro.nome} causou ${danoM} dano. Você: ${Math.max(0, playerHp)} HP`);
  }
  if (playerHp <= 0) {
    player.hp = player.hpMax;
    saveAll();
    return { erro: `Derrota para ${monstro.nome} lvl ${monstro.level}!\n${log.join('\n')}` };
  } else {
    player.hp = playerHp;
    player.moedas += monstro.moedasDrop;
    const upou = addXP(userId, groupId, monstro.xpDrop);
    player.ultimaBatalha = agora;
    saveAll();
    let msg = `⚔️ Vitória contra ${monstro.nome} lvl ${monstro.level}!\n💰 +${monstro.moedasDrop} moedas\n✨ +${monstro.xpDrop} XP`;
    if (upou) msg += `\n🎉 UP! Agora nível ${player.level}!`;
    msg += `\n📜 ${log.join('\n')}`;
    return { sucesso: msg };
  }
}

// ========== TRABALHOS ==========
const JOBS = {
  minerador: { minMoedas: 30, maxMoedas: 80, minXP: 10, maxXP: 25 },
  lenhador:  { minMoedas: 25, maxMoedas: 70, minXP: 8, maxXP: 20 },
  pescador:  { minMoedas: 20, maxMoedas: 60, minXP: 6, maxXP: 18 },
  guarda:    { minMoedas: 40, maxMoedas: 100, minXP: 12, maxXP: 30 }
};

function trabalhar(userId, groupId, jobName) {
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Sem personagem." };
  const job = JOBS[jobName];
  if (!job) return { erro: "Trabalho inválido. Use: minerador, lenhador, pescador, guarda" };
  const agora = Date.now();
  if (agora - player.ultimoTrabalho < 20000) {
    return { erro: "Aguarde 20 segundos antes de trabalhar novamente." };
  }
  const ganhoMoedas = Math.floor(Math.random() * (job.maxMoedas - job.minMoedas + 1) + job.minMoedas);
  const ganhoXP = Math.floor(Math.random() * (job.maxXP - job.minXP + 1) + job.minXP);
  player.moedas += ganhoMoedas;
  addXP(userId, groupId, ganhoXP);
  player.trabalhos[jobName] = (player.trabalhos[jobName] || 0) + 1;
  player.ultimoTrabalho = agora;
  saveAll();
  return { sucesso: `🧑‍🌾 Você trabalhou como ${jobName} e ganhou ${ganhoMoedas} moedas e ${ganhoXP} XP.` };
}

// ========== LOJA E ITENS ==========
const ITENS = {
  pocao_vida: { nome: "Poção de Vida", preco: 50, efeito: "cura 20 HP", tipo: "consumivel" },
  pocao_mana: { nome: "Poção de Mana", preco: 40, efeito: "cura 15 MP", tipo: "consumivel" },
  espada_ferro: { nome: "Espada de Ferro", preco: 200, efeito: "+5 força", tipo: "arma", bonus: { forca: 5 } },
  armadura_couro: { nome: "Armadura de Couro", preco: 150, efeito: "+4 defesa", tipo: "armadura", bonus: { defesa: 4 } },
  anel_sorte: { nome: "Anel da Sorte", preco: 500, efeito: "+2 agilidade", tipo: "acessorio", bonus: { agilidade: 2 } },
  pocao_xp: { nome: "Poção de XP", preco: 100, efeito: "+50 XP", tipo: "consumivel", xpBonus: 50 }
};

function comprarItem(userId, groupId, itemId) {
  const item = ITENS[itemId];
  if (!item) return { erro: "Item não existe." };
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Sem personagem." };
  if (player.moedas < item.preco) return { erro: "Moedas insuficientes." };
  player.moedas -= item.preco;
  player.inventario.push(itemId);
  saveAll();
  return { sucesso: `✅ Comprou ${item.nome} por ${item.preco} moedas!` };
}

function usarItem(userId, groupId, itemId) {
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Sem personagem." };
  const index = player.inventario.indexOf(itemId);
  if (index === -1) return { erro: "Você não possui esse item." };
  const item = ITENS[itemId];
  if (!item) return { erro: "Item inválido." };
  if (item.tipo === "consumivel") {
    if (itemId === "pocao_vida") {
      let cura = 20;
      player.hp = Math.min(player.hpMax, player.hp + cura);
      player.inventario.splice(index, 1);
      saveAll();
      return { sucesso: `💊 Usou ${item.nome}, recuperou ${cura} HP. Agora ${player.hp}/${player.hpMax} HP.` };
    } else if (itemId === "pocao_mana") {
      let mana = 15;
      player.mana = Math.min(player.manaMax, player.mana + mana);
      player.inventario.splice(index, 1);
      saveAll();
      return { sucesso: `💙 Usou ${item.nome}, recuperou ${mana} MP. Agora ${player.mana}/${player.manaMax} MP.` };
    } else if (itemId === "pocao_xp") {
      let xpBonus = 50;
      addXP(userId, groupId, xpBonus);
      player.inventario.splice(index, 1);
      saveAll();
      return { sucesso: `✨ Usou ${item.nome} e ganhou ${xpBonus} XP!` };
    }
  }
  return { erro: "Este item não pode ser usado (equipável use !equipar)." };
}

function equiparItem(userId, groupId, itemId) {
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Sem personagem." };
  const index = player.inventario.indexOf(itemId);
  if (index === -1) return { erro: "Item não encontrado." };
  const item = ITENS[itemId];
  if (!item || !item.tipo || !["arma","armadura","acessorio"].includes(item.tipo)) return { erro: "Item não equipável." };
  // Remove bônus antigo
  const old = player.equipamentos[item.tipo];
  if (old && ITENS[old]) {
    for (let [stat, val] of Object.entries(ITENS[old].bonus || {})) {
      player[stat] -= val;
    }
  }
  player.equipamentos[item.tipo] = itemId;
  for (let [stat, val] of Object.entries(item.bonus || {})) {
    player[stat] += val;
  }
  player.inventario.splice(index, 1);
  saveAll();
  return { sucesso: `⚔️ Equipou ${item.nome}.` };
}

function desequiparItem(userId, groupId, tipo) {
  const player = getPlayer(userId, groupId);
  if (!player) return { erro: "Sem personagem." };
  if (!player.equipamentos[tipo]) return { erro: `Nada equipado em ${tipo}.` };
  const itemId = player.equipamentos[tipo];
  const item = ITENS[itemId];
  if (item && item.bonus) {
    for (let [stat, val] of Object.entries(item.bonus)) {
      player[stat] -= val;
    }
  }
  player.equipamentos[tipo] = null;
  player.inventario.push(itemId);
  saveAll();
  return { sucesso: `🔧 Desequipou ${item.nome}.` };
}

// ========== SISTEMA DE CLÃS ==========
function criarGuild(userId, groupId, nome) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (player.guild) return "Você já pertence a um clã.";
  if (guilds[nome]) return "Nome de clã já existe.";
  guilds[nome] = {
    dono: userId,
    membros: [userId],
    level: 1,
    xp: 0,
    moedas: 0,
    createdAt: Date.now()
  };
  player.guild = nome;
  saveAll();
  return `🏰 Clã "${nome}" criado com sucesso!`;
}

function infoGuild(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player || !player.guild) return "Você não está em um clã.";
  const g = guilds[player.guild];
  if (!g) return "Clã não encontrado.";
  return `🏰 **${player.guild}**\n👑 Dono: ${g.dono}\n👥 Membros: ${g.membros.length}\n📊 Nível: ${g.level}\n💰 Tesouro: ${g.moedas} moedas`;
}

function convidarGuild(userId, groupId, targetId) {
  const player = getPlayer(userId, groupId);
  if (!player || !player.guild) return "Você não está em um clã.";
  const g = guilds[player.guild];
  if (g.dono !== userId) return "Apenas o dono pode convidar.";
  const targetPlayer = getPlayer(targetId, groupId);
  if (!targetPlayer) return "Jogador não encontrado.";
  if (targetPlayer.guild) return "Jogador já está em um clã.";
  targetPlayer.guild = player.guild;
  g.membros.push(targetId);
  saveAll();
  return `✅ ${targetId} foi convidado para o clã ${player.guild}.`;
}

function sairGuild(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player || !player.guild) return "Você não está em um clã.";
  const g = guilds[player.guild];
  if (!g) return "Clã inválido.";
  const index = g.membros.indexOf(userId);
  if (index !== -1) g.membros.splice(index, 1);
  player.guild = null;
  if (g.membros.length === 0) {
    delete guilds[player.guild];
  }
  saveAll();
  return `👋 Você saiu do clã.`;
}

// ========== SISTEMA DE PVP ==========
function pvpDesafiar(userId, groupId, alvoId) {
  const player = getPlayer(userId, groupId);
  const alvo = getPlayer(alvoId, groupId);
  if (!player) return "Você não tem personagem.";
  if (!alvo) return "Jogador não encontrado ou não tem personagem.";
  if (userId === alvoId) return "Você não pode lutar contra si mesmo.";
  const agora = Date.now();
  if (agora - player.ultimoPvp < 60000) {
    const restante = Math.ceil((60000 - (agora - player.ultimoPvp)) / 1000);
    return `Aguarde ${restante}s para outro PvP.`;
  }
  // Simulação de PvP
  let playerHp = player.hp;
  let alvoHp = alvo.hp;
  let log = [];
  while (playerHp > 0 && alvoHp > 0) {
    let danoP = Math.max(1, player.forca + Math.floor(Math.random() * 6) - alvo.defesa);
    alvoHp -= danoP;
    log.push(`🗡️ Você causou ${danoP} dano em ${alvoId}. Ele tem ${Math.max(0, alvoHp)} HP`);
    if (alvoHp <= 0) break;
    let danoA = Math.max(1, alvo.forca + Math.floor(Math.random() * 6) - player.defesa);
    playerHp -= danoA;
    log.push(`⚔️ ${alvoId} causou ${danoA} dano em você. Você tem ${Math.max(0, playerHp)} HP`);
  }
  const vencedor = playerHp > 0 ? userId : alvoId;
  if (vencedor === userId) {
    player.pvpWins++;
    alvo.pvpLosses++;
    player.moedas += 50;
    addXP(userId, groupId, 30);
    player.ultimoPvp = agora;
    alvo.hp = alvo.hpMax;
    player.hp = playerHp;
    saveAll();
    return `🏆 Vitória no PvP contra ${alvoId}!\n💰 +50 moedas\n✨ +30 XP\n📜 ${log.join('\n')}`;
  } else {
    alvo.pvpWins++;
    player.pvpLosses++;
    alvo.moedas += 50;
    addXP(alvoId, groupId, 30);
    player.ultimoPvp = agora;
    player.hp = player.hpMax;
    alvo.hp = alvoHp;
    saveAll();
    return `💀 Derrota no PvP para ${alvoId}.\n📜 ${log.join('\n')}`;
  }
}

// ========== MISSÕES ==========
const MISSOES_GLOBAIS = {
  matar_10_slimes: { nome: "Caçador de Slimes", obj: "matar", monstro: "Slime", qtd: 10, recompensaMoedas: 500, recompensaXP: 300 },
  minerar_20: { nome: "Minerador Iniciante", obj: "trabalhar", trabalho: "minerador", qtd: 20, recompensaMoedas: 400, recompensaXP: 250 }
};

function listarMissoes(userId, groupId) {
  let msg = "📜 **Missões Disponíveis**\n";
  for (const [id, missao] of Object.entries(MISSOES_GLOBAIS)) {
    msg += `\n${id} - ${missao.nome}: ${missao.qtd} ${missao.obj} | Recompensa: ${missao.recompensaMoedas}💰, ${missao.recompensaXP} XP`;
  }
  return msg;
}

function aceitarMissao(userId, groupId, missaoId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (player.missaoAtiva) return "Você já tem uma missão ativa. Conclua-a primeiro.";
  const missao = MISSOES_GLOBAIS[missaoId];
  if (!missao) return "Missão inválida.";
  player.missaoAtiva = { id: missaoId, progresso: 0 };
  saveAll();
  return `✅ Missão "${missao.nome}" aceita! Progresso: 0/${missao.qtd}.`;
}

function progressoMissao(userId, groupId, tipo, nome) {
  const player = getPlayer(userId, groupId);
  if (!player || !player.missaoAtiva) return;
  const missao = MISSOES_GLOBAIS[player.missaoAtiva.id];
  if (!missao) return;
  if (tipo === missao.obj && nome === (missao.monstro || missao.trabalho)) {
    player.missaoAtiva.progresso++;
    if (player.missaoAtiva.progresso >= missao.qtd) {
      player.moedas += missao.recompensaMoedas;
      addXP(userId, groupId, missao.recompensaXP);
      player.missaoAtiva = null;
      saveAll();
      return `🎉 Missão "${missao.nome}" concluída! Ganhou ${missao.recompensaMoedas}💰 e ${missao.recompensaXP} XP.`;
    }
    saveAll();
  }
}

// ========== PETS ==========
const PETS = {
  lobo: { bonusForca: 3, preco: 1000, nivelMax: 10 },
  dragao: { bonusForca: 10, preco: 5000, nivelMax: 20 },
  fada: { bonusMana: 8, preco: 3000, nivelMax: 15 }
};

function adotarPet(userId, groupId, petId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (player.pet) return "Você já tem um pet.";
  const pet = PETS[petId];
  if (!pet) return "Pet inválido. Use: lobo, dragao, fada";
  if (player.moedas < pet.preco) return "Moedas insuficientes.";
  player.moedas -= pet.preco;
  player.pet = { id: petId, level: 1, xp: 0, fome: 100 };
  if (pet.bonusForca) player.forca += pet.bonusForca;
  if (pet.bonusMana) player.manaMax += pet.bonusMana;
  saveAll();
  return `🐾 Você adotou um ${petId}! Agora ele te acompanha.`;
}

function alimentarPet(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player || !player.pet) return "Você não tem um pet.";
  if (player.moedas < 20) return "Você precisa de 20 moedas para comprar comida.";
  player.moedas -= 20;
  player.pet.fome = Math.min(100, player.pet.fome + 30);
  saveAll();
  return `🍖 Você alimentou seu ${player.pet.id}. Fome agora: ${player.pet.fome}%`;
}

// ========== ASCENSÃO (PRESTÍGIO) ==========
function ascender(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (player.level < 50) return "Você precisa ser nível 50 para ascender.";
  player.ascensoes++;
  player.level = 1;
  player.xp = 0;
  player.xpProximo = 100;
  player.forca = CLASSES[player.nome].forca + player.ascensoes * 2;
  player.defesa = CLASSES[player.nome].defesa + player.ascensoes;
  player.agilidade = CLASSES[player.nome].agilidade + player.ascensoes;
  player.hpMax = CLASSES[player.nome].hpBase + player.ascensoes * 20;
  player.hp = player.hpMax;
  player.manaMax = CLASSES[player.nome].manaBase + player.ascensoes * 10;
  player.mana = player.manaMax;
  saveAll();
  return `✨ ASCENSÃO #${player.ascensoes}! Você renasceu mais forte. Agora nível 1 com bônus permanentes.`;
}

// ========== CASSINO ==========
function roletar(userId, groupId, aposta) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (isNaN(aposta) || aposta <= 0) return "Aposta inválida.";
  if (player.moedas < aposta) return "Moedas insuficientes.";
  const numero = Math.floor(Math.random() * 37);
  let ganho = 0;
  if (numero === 0) ganho = aposta * 36;
  else if (numero % 2 === 0) ganho = aposta * 2;
  else ganho = 0;
  player.moedas -= aposta;
  if (ganho > 0) player.moedas += ganho;
  saveAll();
  if (ganho > 0) return `🎰 Roleta: caiu ${numero}. Você ganhou ${ganho} moedas! Saldo: ${player.moedas}`;
  else return `🎰 Roleta: caiu ${numero}. Você perdeu ${aposta} moedas. Saldo: ${player.moedas}`;
}

function jogarDados(userId, groupId, aposta) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  if (isNaN(aposta) || aposta <= 0) return "Aposta inválida.";
  if (player.moedas < aposta) return "Moedas insuficientes.";
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const soma = dado1 + dado2;
  let ganho = 0;
  if (soma === 7 || soma === 11) ganho = aposta * 2;
  else if (soma === 2 || soma === 12) ganho = aposta * 5;
  else ganho = 0;
  player.moedas -= aposta;
  if (ganho > 0) player.moedas += ganho;
  saveAll();
  if (ganho > 0) return `🎲 Dados: ${dado1}+${dado2}=${soma}. Você ganhou ${ganho} moedas! Saldo: ${player.moedas}`;
  else return `🎲 Dados: ${dado1}+${dado2}=${soma}. Você perdeu ${aposta} moedas. Saldo: ${player.moedas}`;
}

// ========== RANKINGS ==========
function rankingGrupo(groupId) {
  const jogadores = Object.entries(players)
    .filter(([key]) => key.startsWith(groupId + '|'))
    .map(([key, p]) => ({ id: key.split('|')[1], level: p.level, xp: p.xp, nome: p.nome }))
    .sort((a,b) => b.level - a.level || b.xp - a.xp)
    .slice(0,5);
  if (jogadores.length === 0) return "Nenhum jogador no grupo.";
  let msg = "🏆 **Ranking do Grupo** 🏆\n";
  jogadores.forEach((j,i) => msg += `${i+1}º - Nível ${j.level} (${j.xp} XP)\n`);
  return msg;
}

function rankingGeral() {
  const top = Object.entries(players)
    .map(([key, p]) => ({ level: p.level, xp: p.xp, nome: p.nome }))
    .sort((a,b) => b.level - a.level || b.xp - a.xp)
    .slice(0,10);
  if (top.length === 0) return "Nenhum jogador ainda.";
  let msg = "🌍 **Ranking Global** 🌍\n";
  top.forEach((j,i) => msg += `${i+1}º - Nível ${j.level} (${j.xp} XP)\n`);
  return msg;
}

// ========== CRAFTING ==========
const RECEITAS = {
  espada_melhorada: { itens: { espada_ferro: 1, ferro: 5 }, resultado: { id: "espada_melhorada", nome: "Espada Melhorada", bonus: { forca: 10 }, tipo: "arma", precoVenda: 300 } }
};

function craftar(userId, groupId, recipeId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  const recipe = RECEITAS[recipeId];
  if (!recipe) return "Receita não encontrada.";
  for (const [item, qtd] of Object.entries(recipe.itens)) {
    let count = player.inventario.filter(i => i === item).length;
    if (count < qtd) return `Faltam ${qtd - count} ${item}(s).`;
  }
  for (const [item, qtd] of Object.entries(recipe.itens)) {
    for (let i = 0; i < qtd; i++) {
      const idx = player.inventario.indexOf(item);
      if (idx !== -1) player.inventario.splice(idx, 1);
    }
  }
  player.inventario.push(recipe.resultado.id);
  saveAll();
  return `🔨 Você craftou ${recipe.resultado.nome}!`;
}

// ========== CURAR ==========
function curar(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  const custo = 30;
  if (player.moedas < custo) return `Você precisa de ${custo} moedas para se curar.`;
  player.moedas -= custo;
  player.hp = player.hpMax;
  player.mana = player.manaMax;
  saveAll();
  return `💚 Você foi totalmente curado por ${custo} moedas. HP: ${player.hp}/${player.hpMax}, MP: ${player.mana}/${player.manaMax}`;
}

// ========== DOAR MOEDAS ==========
function doarMoedas(userId, groupId, targetId, quantia) {
  const player = getPlayer(userId, groupId);
  const target = getPlayer(targetId, groupId);
  if (!player || !target) return "Jogador não encontrado.";
  if (player.moedas < quantia) return "Você não tem moedas suficientes.";
  player.moedas -= quantia;
  target.moedas += quantia;
  saveAll();
  return `💸 Você doou ${quantia} moedas para ${targetId}.`;
}

// ========== SORTEIO DIÁRIO ==========
function bonusDiario(userId, groupId) {
  const player = getPlayer(userId, groupId);
  if (!player) return "Sem personagem.";
  const hoje = new Date().toDateString();
  if (player.ultimoBonus === hoje) return "Você já recebeu seu bônus diário hoje.";
  const bonus = Math.floor(Math.random() * 200) + 100;
  player.moedas += bonus;
  player.ultimoBonus = hoje;
  saveAll();
  return `🎁 Bônus diário: ${bonus} moedas! Volte amanhã.`;
}

// ========== EXPORTAÇÕES ==========
module.exports = {
  setGroupRPGMode,
  isRPGModeActive,
  createPlayer,
  getPlayer,
  addXP,
  batalhar,
  trabalhar,
  comprarItem,
  usarItem,
  equiparItem,
  desequiparItem,
  criarGuild,
  infoGuild,
  convidarGuild,
  sairGuild,
  pvpDesafiar,
  listarMissoes,
  aceitarMissao,
  progressoMissao,
  adotarPet,
  alimentarPet,
  ascender,
  roletar,
  jogarDados,
  rankingGrupo,
  rankingGeral,
  craftar,
  curar,
  doarMoedas,
  bonusDiario,
  ITENS,
  JOBS,
  CLASSES
};