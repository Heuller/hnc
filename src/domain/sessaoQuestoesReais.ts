import type { QuestaoReal } from '../content/questoesReais';
import type { JulgamentoCebraspe } from './schemas/question.schema';

export interface SessaoQuestoesReais {
  modulo?: string;
  questaoId?: string;
  respostas: Record<string, { resposta: JulgamentoCebraspe; assinatura: string }>;
}
export const sessaoRealVazia = (): SessaoQuestoesReais => ({ respostas: {} });
export function assinaturaQuestaoReal(q: QuestaoReal): string {
  // Preserva somente respostas da mesma redação e gabarito.
  return JSON.stringify([q.item, q.contexto, q.gabarito]);
}
export function lerSessaoReal(raw: string | null, questoes: QuestaoReal[]): SessaoQuestoesReais {
  if (!raw) return sessaoRealVazia();
  try {
    const d = JSON.parse(raw);
    if (!d || typeof d !== 'object' || !d.respostas || typeof d.respostas !== 'object') return sessaoRealVazia();
    const respostas: SessaoQuestoesReais['respostas'] = {};
    for (const q of questoes) {
      const r = d.respostas[q.id];
      if (r && ['C', 'E', 'BRANCO'].includes(r.resposta) && r.assinatura === assinaturaQuestaoReal(q)) respostas[q.id] = r;
    }
    const modulo = questoes.some(q => q.modulo === d.modulo) ? d.modulo : undefined;
    const questaoId = questoes.some(q => q.id === d.questaoId && q.modulo === modulo) ? d.questaoId : undefined;
    return { respostas, modulo, questaoId };
  } catch { return sessaoRealVazia(); }
}
