// Mede a cobertura dos campos de estudo reverso no banco de questões.
import { ALL_SIMULADOS_REGISTRY, MINI_SIMULADOS_REGISTRY } from '../src/content/simuladosRegistry.ts';
import type { CebraspeQuestion } from '../src/domain/schemas/question.schema.ts';

const vistos = new Map<string, CebraspeQuestion>();
for (const m of [...ALL_SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY]) for (const q of m.questoes) vistos.set(q.id, q);
const qs = [...vistos.values()];
const pct = (n: number, d: number) => `${n}/${d} (${d ? ((100 * n) / d).toFixed(1) : '0'}%)`;
const E = qs.filter((q) => q.gabarito === 'E');
const C = qs.filter((q) => q.gabarito === 'C');
const len = qs.map((q) => q.justificativa.length).sort((a, b) => a - b);
const p = (x: number) => len[Math.floor(x * (len.length - 1))];
const restate = qs.filter((q) => /^(certo|errado|correto|incorreto|item (certo|errado|correto|incorreto))[.!:,]?\s*$/i.test(q.justificativa.trim()) || q.justificativa.length < 80);
console.log('itens únicos:', qs.length, '| C:', C.length, '| E:', E.length);
console.log('justificativa chars p10/p50/p90:', p(0.1), p(0.5), p(0.9), '| < 80 chars:', pct(restate.length, qs.length));
console.log('armadilhaBanca:', pct(qs.filter((q) => q.armadilhaBanca?.trim()).length, qs.length));
console.log('versao_correta em itens E:', pct(E.filter((q) => q.versao_correta?.trim()).length, E.length));
console.log('secao_ref:', pct(qs.filter((q) => q.secao_ref?.trim()).length, qs.length));
console.log('fonte:', pct(qs.filter((q) => q.fonte?.trim()).length, qs.length));
// justificativa de item E que não aponta o que está errado (heurística: sem termos de contraste)
const semContraste = E.filter((q) => !/(na verdade|e não|não é|não se|ao contrário|incorret|equivoc|erro|errad|troca|invert|confund|diferente|porém|mas |contudo|entretanto|na realidade|correto seria|o correto)/i.test(q.justificativa));
console.log('itens E sem apontar o desvio (heurística):', pct(semContraste.length, E.length));
const semPorque = C.filter((q) => !/(porque|pois|já que|uma vez que|visto que|conforme|segundo|de acordo|art\.|lei|norma|define|estabelece|prevê)/i.test(q.justificativa));
console.log('itens C sem fundamento explícito (heurística):', pct(semPorque.length, C.length));
const porArquivo = new Map<string, { n: number; arm: number; vc: number; e: number; sr: number }>();
for (const m of [...ALL_SIMULADOS_REGISTRY, ...MINI_SIMULADOS_REGISTRY]) {
  const s = { n: 0, arm: 0, vc: 0, e: 0, sr: 0 };
  for (const q of m.questoes) { s.n++; if (q.armadilhaBanca?.trim()) s.arm++; if (q.secao_ref) s.sr++; if (q.gabarito === 'E') { s.e++; if (q.versao_correta?.trim()) s.vc++; } }
  porArquivo.set(m.id, s);
}
console.log('\nsimulado | n | armadilha | versao_correta(E) | secao_ref');
for (const [id, s] of porArquivo) console.log(id, '|', s.n, '|', s.arm, '|', `${s.vc}/${s.e}`, '|', s.sr);
if (process.argv.includes('--amostra')) {
  const rnd = (a: CebraspeQuestion[], k: number) => a.filter((_, i) => i % Math.floor(a.length / k) === 0).slice(0, k);
  for (const q of [...rnd(C, 4), ...rnd(E, 4)]) console.log('\n---', q.id, q.gabarito, '\nITEM:', q.item, '\nJUST:', q.justificativa, '\nARM:', q.armadilhaBanca, '\nVC:', q.versao_correta, '\nSEC:', q.secao_ref);
}
