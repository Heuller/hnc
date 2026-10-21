import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/content/questions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
const pattern = /gabarito oficial|cobrado no concurso|pela banca|concurso [A-Z]/i;

const contradictory = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Parse question objects roughly or precisely
  // Each question starts with { and has id, enunciado/item, gabarito, justificativa, fonteOriginal
  // Let's use regex or eval/import
}

console.log('Script written');
