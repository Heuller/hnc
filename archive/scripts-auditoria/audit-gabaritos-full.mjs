/**
 * Auditoria de Gabaritos — extrai todas as questões para análise
 * Mostra: id, gabarito, primeiros 120 chars do item e primeiros 80 chars da justificativa
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const questionsDir = join(__dirname, '../src/content/questions');

const files = readdirSync(questionsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const content = readFileSync(join(questionsDir, file), 'utf-8');
  
  // Extrai todos os objetos de questão via regex
  const questionBlocks = [];
  
  // Match individual question objects
  const idMatches = [...content.matchAll(/"id"\s*:\s*"([^"]+)"/g)];
  const itemMatches = [...content.matchAll(/"item"\s*:\s*`([\s\S]*?)`/g)];
  const gabaritoMatches = [...content.matchAll(/"gabarito"\s*:\s*"([CE])"/g)];
  const justMatches = [...content.matchAll(/"justificativa"\s*:\s*`([\s\S]*?)`/g)];
  
  if (gabaritoMatches.length === 0) continue;
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`ARQUIVO: ${file} (${gabaritoMatches.length} questões)`);
  console.log(`C: ${gabaritoMatches.filter(m => m[1] === 'C').length} | E: ${gabaritoMatches.filter(m => m[1] === 'E').length}`);
  
  for (let i = 0; i < gabaritoMatches.length; i++) {
    const id = idMatches[i]?.[1] ?? `q${i+1}`;
    const gab = gabaritoMatches[i][1];
    const item = (itemMatches[i]?.[1] ?? '').replace(/\s+/g, ' ').trim().slice(0, 150);
    const just = (justMatches[i]?.[1] ?? '').replace(/\s+/g, ' ').trim().slice(0, 100);
    
    console.log(`\n[${i+1}] ${id} | GAB: ${gab}`);
    console.log(`  ITEM: ${item}`);
    console.log(`  JUST: ${just}`);
  }
}
