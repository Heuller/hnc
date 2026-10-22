import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'src/content/questions';
const files = readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalC = 0, totalE = 0, totalQ = 0;
const results = [];

for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  
  // Correct pattern: double-quoted keys in JSON-like objects
  const cCount = (content.match(/"gabarito":\s*"C"/g) || []).length;
  const eCount = (content.match(/"gabarito":\s*"E"/g) || []).length;
  const totalFile = cCount + eCount;
  
  if (totalFile > 0) {
    totalC += cCount;
    totalE += eCount;
    totalQ += totalFile;
    const balance = Math.abs(cCount - eCount);
    const ok = balance <= 5;
    results.push({ file, C: cCount, E: eCount, total: totalFile, pctC: ((cCount/totalFile)*100).toFixed(1), ok, balance });
  }
}

console.log('=== CADERNOS COM QUESTÕES ===');
results.forEach(r => {
  const flag = r.ok ? '✅' : '⚠️ DESEQUILÍBRIO';
  console.log(`${flag} ${r.file}: C=${r.C} E=${r.E} total=${r.total} (${r.pctC}%)`);
});

console.log('\n=== TOTAIS GERAIS ===');
console.log(`Total C: ${totalC} | Total E: ${totalE} | Total: ${totalQ}`);
console.log(`Paridade: C=${((totalC/totalQ)*100).toFixed(1)}% E=${((totalE/totalQ)*100).toFixed(1)}%`);

// Check for real-confirmada without provaId
console.log('\n=== REAL-CONFIRMADA SEM provaId ===');
for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  
  const realCount = (content.match(/"tipo":\s*"real-confirmada"/g) || []).length;
  const provaIdCount = (content.match(/"provaId":/g) || []).length;
  
  if (realCount > 0) {
    const status = provaIdCount >= realCount ? '✅' : '⚠️ ';
    console.log(`${status} ${file}: ${realCount} real-confirmada, ${provaIdCount} provaId`);
  }
}

// Check questoes-submodulos for structure
const checkpointFile = readFileSync(join(dir, 'questoes-submodulos-ampliados.ts'), 'utf8');
const cpC = (checkpointFile.match(/gabarito:\s*'C'/g) || []).length + (checkpointFile.match(/"gabarito":\s*"C"/g) || []).length;
const cpE = (checkpointFile.match(/gabarito:\s*'E'/g) || []).length + (checkpointFile.match(/"gabarito":\s*"E"/g) || []).length;
console.log(`\n=== questoes-submodulos-ampliados.ts ===\nC=${cpC} E=${cpE} total=${cpC+cpE}`);
