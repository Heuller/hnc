import * as fs from 'fs';
import * as path from 'path';
import { GLOSSARIO_TECNICO } from '../src/content/glossario-tecnico';

const dictPath = path.resolve(process.cwd(), 'src/content/glossario/dicionario.json');
const dicionario = JSON.parse(fs.readFileSync(dictPath, 'utf-8'));

const dictTermos = new Set(dicionario.map((d: any) => d.termo.trim().toLowerCase()));

console.log('=== VERIFICAÇÃO DE SIGLAS DO EDITAL NO DICIONÁRIO (U3.10) ===');
const presentesNoDicionario: string[] = [];
const exclusivosAcervoB: string[] = [];

for (const item of GLOSSARIO_TECNICO) {
  const tNorm = item.termo.trim().toLowerCase();
  const slugNorm = item.slug.trim().toLowerCase();
  const existe = dictTermos.has(tNorm) || dictTermos.has(slugNorm);

  if (existe) {
    presentesNoDicionario.push(item.termo);
  } else {
    exclusivosAcervoB.push(item.termo);
  }
}

console.log(`\nTotal de siglas técnicas auditadas: ${GLOSSARIO_TECNICO.length}`);
console.log(`Encontradas no Dicionário Cunha & Lemos (2008): ${presentesNoDicionario.length}`);
console.log('Siglas:', presentesNoDicionario);

console.log(`\nExclusivas do Acervo B (TI/IA recentes ou específicas): ${exclusivosAcervoB.length}`);
console.log('Siglas exclusivas:', exclusivosAcervoB);
