import * as fs from 'fs';
import * as path from 'path';
import { ALL_COURSE_MODULES } from '../src/content/registry';
import { auditarSubmoduloJargoes } from '../src/domain/jargonLinter';
import type { ModuloFilho } from '../src/domain/schemas/modulo.schema';

const todosSubmodulos: ModuloFilho[] = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);
const map = new Map<string, ModuloFilho>();
for (const sub of todosSubmodulos) {
  map.set(sub.id, sub);
}

const dividaConhecida: Record<string, string[]> = {};
let totalViolacoes = 0;

for (const sub of todosSubmodulos) {
  const rel = auditarSubmoduloJargoes(sub, map);
  if (!rel.valido && rel.violacoes.length > 0) {
    const termos = rel.violacoes.map((v) => v.termo);
    dividaConhecida[sub.id] = termos;
    totalViolacoes += termos.length;
  }
}

const baseline = {
  versao: '1.0',
  dataCriacao: new Date().toISOString(),
  descricao: 'Linha de base de jargões técnicos não conceituados previamente (U3.2)',
  submodulosTratados: [] as string[],
  dividaConhecida,
};

const targetPath = path.resolve(process.cwd(), 'src/content/jargon-baseline.json');
fs.writeFileSync(targetPath, JSON.stringify(baseline, null, 2), 'utf-8');

console.log(`Linha de base gerada com sucesso em: ${targetPath}`);
console.log(`Total de submódulos auditados: ${todosSubmodulos.length}`);
console.log(`Submódulos com dívida: ${Object.keys(dividaConhecida).length}`);
console.log(`Total de ocorrências de dívida inicial: ${totalViolacoes}`);
