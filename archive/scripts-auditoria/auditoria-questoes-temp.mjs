import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'src/content/questions';
const files = readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalC = 0, totalE = 0, totalQ = 0;
const results = [];

for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  
  const cCount = (content.match(/gabarito:\s*'C'/g) || []).length;
  const eCount = (content.match(/gabarito:\s*'E'/g) || []).length;
  const totalFile = cCount + eCount;
  
  if (totalFile > 0) {
    totalC += cCount;
    totalE += eCount;
    totalQ += totalFile;
    results.push({ file, C: cCount, E: eCount, total: totalFile, pctC: ((cCount/totalFile)*100).toFixed(1) });
  }
}

console.log('=== CADERNOS COM QUESTÕES ===');
results.forEach(r => {
  const ok = Math.abs(r.C - r.E) <= 5;
  console.log(`${ok ? '✅' : '⚠️ '} ${r.file}: C=${r.C} E=${r.E} total=${r.total} (${r.pctC}% Certo)`);
});

console.log('\n=== TOTAIS GERAIS ===');
console.log(`Total C: ${totalC} | Total E: ${totalE} | Total: ${totalQ}`);
console.log(`Paridade: C=${((totalC/totalQ)*100).toFixed(1)}% E=${((totalE/totalQ)*100).toFixed(1)}%`);

// Check for real-confirmada without provaId  
console.log('\n=== VERIFICANDO PROVENIÊNCIA ===');
let realConfIssues = [];
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  
  // Find all real-confirmada items and check if they have provaId
  const itemBlocks = content.split(/(?=\{\s*(?:id:|questaoId:))/);
  let realConfCount = 0;
  let realConfWithProva = 0;
  let realConfWithoutProva = [];
  
  for (const block of itemBlocks) {
    if (block.includes("'real-confirmada'")) {
      realConfCount++;
      if (block.includes('provaId') && block.includes('questaoOriginalId')) {
        realConfWithProva++;
      } else {
        // Try to get the ID
        const idMatch = block.match(/(?:id|questaoId):\s*'([^']+)'/);
        if (idMatch) realConfWithoutProva.push(idMatch[1]);
      }
    }
  }
  
  if (realConfCount > 0) {
    const status = realConfWithoutProva.length === 0 ? '✅' : '⚠️ ';
    console.log(`${status} ${file}: ${realConfCount} real-confirmada, ${realConfWithoutProva.length} sem provaId`);
    if (realConfWithoutProva.length > 0 && realConfWithoutProva.length <= 10) {
      console.log(`   IDs sem prova: ${realConfWithoutProva.join(', ')}`);
    }
  }
}
