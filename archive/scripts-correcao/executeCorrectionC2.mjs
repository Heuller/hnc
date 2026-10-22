import fs from 'node:fs';
import path from 'node:path';

// 1. Atualizar m12-ingles-100q.ts adicionando revisar: true aos 10 itens
const m12Path = 'src/content/questions/m12-ingles-100q.ts';
let m12Content = fs.readFileSync(m12Path, 'utf8');

const m12TargetIds = [
  'm12-q-4', 'm12-q-9', 'm12-q-23', 'm12-q-44', 'm12-q-50',
  'm12-q-54', 'm12-q-59', 'm12-q-70', 'm12-q-79', 'm12-q-93'
];

for (const id of m12TargetIds) {
  // Encontra o bloco da questão pelo id e injeta "revisar": true dentro de fonteOriginal
  const idRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"fonteOriginal":\\s*\\{[\\s\\S]*?"questaoOriginalId":\\s*"[^"]+")`, 'm');
  const match = m12Content.match(idRegex);
  if (match) {
    if (!match[1].includes('"revisar": true')) {
      const replacement = match[1] + ',\n      "revisar": true';
      m12Content = m12Content.replace(match[1], replacement);
      console.log(`[m12] Adicionado revisar: true em ${id}`);
    } else {
      console.log(`[m12] ${id} já possui revisar: true`);
    }
  } else {
    console.warn(`[m12] Não encontrou bloco para ${id}`);
  }
}
fs.writeFileSync(m12Path, m12Content, 'utf8');

// 2. Atualizar mega-simulado-camara-120q.ts adicionando revisar: true a mega-q-13 e mega-q-14
const megaPath = 'src/content/questions/mega-simulado-camara-120q.ts';
let megaContent = fs.readFileSync(megaPath, 'utf8');

const megaTargetIds = ['mega-q-13', 'mega-q-14'];
for (const id of megaTargetIds) {
  const idRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"fonteOriginal":\\s*\\{[\\s\\S]*?"questaoOriginalId":\\s*"[^"]+")`, 'm');
  const match = megaContent.match(idRegex);
  if (match) {
    if (!match[1].includes('"revisar": true')) {
      const replacement = match[1] + ',\n      "revisar": true';
      megaContent = megaContent.replace(match[1], replacement);
      console.log(`[mega] Adicionado revisar: true em ${id}`);
    } else {
      console.log(`[mega] ${id} já possui revisar: true`);
    }
  } else {
    console.warn(`[mega] Não encontrou bloco para ${id}`);
  }
}
fs.writeFileSync(megaPath, megaContent, 'utf8');

// 3. Atualizar simulado-oficial-camara-180q.ts substituindo oficial-180q-028 e oficial-180q-033
// Pegamos m12-q-16 (E) e m12-q-19 (C) do arquivo m12 já atualizado
import { simuladoIngles100Q } from '../src/content/questions/m12-ingles-100q.ts';
const q16 = simuladoIngles100Q.find(x => x.id === 'm12-q-16');
const q19 = simuladoIngles100Q.find(x => x.id === 'm12-q-19');

const oficialPath = 'src/content/questions/simulado-oficial-camara-180q.ts';
let oficialContent = fs.readFileSync(oficialPath, 'utf8');

// Substitui oficial-180q-028
const regex028 = /\{\s*"id":\s*"oficial-180q-028"[\s\S]*?"provaBloco":\s*"P1_BASICOS"\s*\}/m;
const new028 = `{
    "id": "oficial-180q-028",
    "numero": 28,
    "macroModuloId": "M12",
    "submoduloId": "${q16.submoduloId}",
    "contexto": ${JSON.stringify(q16.contexto)},
    "item": ${JSON.stringify(q16.item)},
    "gabarito": "E",
    "justificativa": ${JSON.stringify(q16.justificativa)},
    "armadilhaBanca": ${JSON.stringify(q16.armadilhaBanca)},
    "dificuldade": "${q16.dificuldade}",
    "fonteOriginal": ${JSON.stringify(q16.fonteOriginal, null, 6).replace(/\n\s{6}/g, '\n      ')},
    "provaBloco": "P1_BASICOS"
  }`;

if (regex028.test(oficialContent)) {
  oficialContent = oficialContent.replace(regex028, new028);
  console.log('[oficial] Substituído oficial-180q-028 pelo item de reserva m12-q-16 (E)');
} else {
  console.warn('[oficial] Não encontrou regex para oficial-180q-028');
}

// Substitui oficial-180q-033
const regex033 = /\{\s*"id":\s*"oficial-180q-033"[\s\S]*?"provaBloco":\s*"P1_BASICOS"\s*\}/m;
const new033 = `{
    "id": "oficial-180q-033",
    "numero": 33,
    "macroModuloId": "M12",
    "submoduloId": "${q19.submoduloId}",
    "contexto": ${JSON.stringify(q19.contexto)},
    "item": ${JSON.stringify(q19.item)},
    "gabarito": "C",
    "justificativa": ${JSON.stringify(q19.justificativa)},
    "armadilhaBanca": ${JSON.stringify(q19.armadilhaBanca)},
    "dificuldade": "${q19.dificuldade}",
    "fonteOriginal": ${JSON.stringify(q19.fonteOriginal, null, 6).replace(/\n\s{6}/g, '\n      ')},
    "provaBloco": "P1_BASICOS"
  }`;

if (regex033.test(oficialContent)) {
  oficialContent = oficialContent.replace(regex033, new033);
  console.log('[oficial] Substituído oficial-180q-033 pelo item de reserva m12-q-19 (C)');
} else {
  console.warn('[oficial] Não encontrou regex para oficial-180q-033');
}

fs.writeFileSync(oficialPath, oficialContent, 'utf8');

// 4. Atualizar PortaoVerificacaoModal.tsx para filtrar questões com revisar === true
const portaoPath = 'src/components/jornada/PortaoVerificacaoModal.tsx';
let portaoContent = fs.readFileSync(portaoPath, 'utf8');

const targetPortaoCode = `      const simulado = SIMULADOS_REGISTRY.find((s) => s.numero === etapa.moduloNumero);
      if (simulado && simulado.questoes.length > 0) {
        return simulado.questoes.map((q) => ({`;

const replacementPortaoCode = `      const simulado = SIMULADOS_REGISTRY.find((s) => s.numero === etapa.moduloNumero);
      if (simulado && simulado.questoes.length > 0) {
        // Exclui do portão de verificação itens sob revisão/divergência (C2)
        const questoesValidas = simulado.questoes.filter((q) => !q.fonteOriginal?.revisar);
        return questoesValidas.map((q) => ({`;

if (portaoContent.includes(targetPortaoCode)) {
  portaoContent = portaoContent.replace(targetPortaoCode, replacementPortaoCode);
  fs.writeFileSync(portaoPath, portaoContent, 'utf8');
  console.log('[portao] Atualizado PortaoVerificacaoModal para filtrar q.fonteOriginal?.revisar');
} else {
  console.log('[portao] Código de filtro já presente ou alvo não encontrado');
}

console.log('\nExecução de C2 concluída no código!');
