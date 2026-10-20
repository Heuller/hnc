import fs from 'node:fs';
import path from 'node:path';

const QUESTIONS_DIR = path.resolve('src', 'content', 'questions');
const RELATORIOS_DIR = path.resolve('docs', 'relatorios');

if (!fs.existsSync(RELATORIOS_DIR)) {
  fs.mkdirSync(RELATORIOS_DIR, { recursive: true });
}

// Carrega todos os arquivos de questões
const files = fs.readdirSync(QUESTIONS_DIR).filter((f) => f.endsWith('.ts'));
console.log(`Encontrados ${files.length} arquivos de questões em ${QUESTIONS_DIR}`);

const todosItens = [];
const seenIds = new Set();
const idDuplicados = [];
const contagemPorBanco = {};

for (const file of files) {
  const filePath = path.join(QUESTIONS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extrai objetos de questões via regex ou avaliação
  // Como são arquivos TS com arrays exportados, podemos extrair as propriedades usando regex seguro
  const itemMatches = [...content.matchAll(/\{\s*"id":\s*"([^"]+)",[\s\S]*?"macroModuloId":\s*"([^"]+)",[\s\S]*?"item":\s*"([^"]+)",[\s\S]*?"gabarito":\s*"([^"]+)",[\s\S]*?"justificativa":\s*"([^"]+)",[\s\S]*?"dificuldade":\s*"([^"]+)"/g)];

  let countInFile = 0;
  for (const match of itemMatches) {
    const [, id, macroModuloId, itemText, gabarito, justificativa, dificuldade] = match;

    if (seenIds.has(id)) {
      idDuplicados.push({ id, file });
    }
    seenIds.add(id);

    const palavras = itemText.trim().split(/\s+/).filter(Boolean).length;
    let distancia = 0;
    if (palavras < 25) {
      distancia = 25 - palavras;
    } else if (palavras > 48) {
      distancia = palavras - 48;
    }

    const itemObj = {
      id,
      modulo: macroModuloId,
      arquivo: file,
      palavras,
      distancia,
      foraDaFaixa: palavras < 25 || palavras > 48,
      texto: itemText.replace(/"/g, '""'), // escape para CSV
      gabarito,
      justificativa,
      dificuldade,
    };

    todosItens.push(itemObj);
    countInFile++;
  }

  contagemPorBanco[file] = countInFile;
}

console.log(`Total de itens parseados: ${todosItens.length}`);
console.log('Contagem por banco:', contagemPorBanco);

const itensForaDaFaixa = todosItens
  .filter((i) => i.foraDaFaixa)
  .sort((a, b) => b.distancia - a.distancia);

console.log(`Itens fora da faixa (25-48 palavras): ${itensForaDaFaixa.length} (${((itensForaDaFaixa.length / todosItens.length) * 100).toFixed(1)}%)`);

// Gera CSV: id, modulo, nº de palavras, texto
const csvRows = [
  'id,modulo,palavras,distancia,texto',
  ...itensForaDaFaixa.map((i) => `"${i.id}","${i.modulo}",${i.palavras},${i.distancia},"${i.texto}"`),
];

const csvPath = path.join(RELATORIOS_DIR, 'itens_fora_da_faixa.csv');
fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf-8');
console.log(`✅ CSV gerado com sucesso em: ${csvPath}`);
