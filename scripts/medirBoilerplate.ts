import { ALL_SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../src/content/simuladosRegistry';
const m = new Map<string, any>();
for (const s of [...ALL_SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY]) for (const q of s.questoes) m.set(q.id, { ...q, sim: s.id });
const qs = [...m.values()];
// normaliza removendo concurso/ano/módulo para achar textos-modelo repetidos
const norm = (t = '') => t.replace(/\b[A-ZÁÉÍÓÚ][\w-]*\/\d{4}\b/g, 'X/AAAA').replace(/\bM\d+[a-z]?\b/g, 'Mn').replace(/\([^)]*\)/g, '()').replace(/\b(facil|fácil|media|média|dificil|difícil)\b/gi, 'NIVEL').replace(/^Gabarito (oficial )?(CERTO|ERRADO)\.\s*/i, '').trim();
function top(campo: string) {
  const c = new Map<string, number>();
  for (const q of qs) { const k = norm(q[campo]); if (k) c.set(k, (c.get(k) || 0) + 1); }
  const rep = [...c.entries()].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]);
  const tot = rep.reduce((a, [, n]) => a + n, 0);
  console.log(`\n== ${campo}: ${tot}/${qs.length} itens usam texto repetido (>=3x); ${rep.length} modelos`);
  for (const [k, n] of rep.slice(0, 8)) console.log(String(n).padStart(4), '|', k.slice(0, 150));
  return new Set(rep.map(([k]) => k));
}
const bj = top('justificativa'); const ba = top('armadilhaBanca');
// justificativa só "Gabarito X." + algo curto
const vaziaJ = qs.filter((q) => bj.has(norm(q.justificativa)) || norm(q.justificativa).length < 40);
const vaziaA = qs.filter((q) => !q.armadilhaBanca || ba.has(norm(q.armadilhaBanca)));
console.log('\njustificativa sem conteúdo explicativo (modelo ou <40 chars úteis):', vaziaJ.length);
console.log('armadilha ausente ou modelo:', vaziaA.length);
const por = new Map<string, [number, number, number]>();
for (const q of qs) { const r = por.get(q.sim) || [0, 0, 0]; r[0]++; if (vaziaJ.includes(q)) r[1]++; if (vaziaA.includes(q)) r[2]++; por.set(q.sim, r); }
console.log('\nsimulado | n | just. vazia | armadilha vazia');
for (const [k, [n, j, a]] of por) console.log(k, '|', n, '|', j, '|', a);
// módulo declarado vs simulado
const fs = await import('node:fs');
fs.writeFileSync('/tmp/hncaudit/vazios.json', JSON.stringify({ j: vaziaJ.map((q) => q.id), a: vaziaA.map((q) => q.id) }));
