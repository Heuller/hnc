import { QUESTOES_REAIS, type QuestaoReal } from './questoesReais';
import revisoes from './adaptacoesReais.json';
import type { FundamentacaoDidatica } from '../components/common/PainelEstudoReverso';

interface AdaptacaoRevisada {
  data: string;
  versao: number;
  motivo: string;
  contexto: string;
  item: string;
  gabarito: 'C' | 'E';
  gatilho: string;
  justificativa: string;
  contraste: string;
  tecnica: string;
  conceito: string;
  regra: string;
  exemplo: string;
  referencia: FundamentacaoDidatica['referencia'];
}

/** Projeta a curadoria sem reescrever enunciados, gabaritos ou conferências da banca. */
export function aplicarAdaptacoesRevisadas(questoes: QuestaoReal[], dados: Record<string, AdaptacaoRevisada>): QuestaoReal[] {
  const ids = new Set(questoes.map(q => q.id));
  for (const id of Object.keys(dados)) {
    if (!ids.has(id)) throw new Error(`Adaptação sem questão de origem: ${id}`);
  }
  return questoes.map(q => {
    const d = dados[q.id];
    if (!d) return q;
    if (!d.item.includes(d.gatilho) || !['C', 'E'].includes(d.gabarito) || !d.referencia.localizador || !d.motivo) {
      throw new Error(`Adaptação incompleta: ${q.id}`);
    }
    return {
      ...q,
      contexto: d.contexto, item: d.item, gabarito: d.gabarito, justificativa: d.justificativa,
      gatilho: d.gatilho, armadilhaBanca: d.tecnica,
      versao_correta: d.gabarito === 'E' ? d.contraste : undefined,
      versao_errada: d.gabarito === 'C' ? d.contraste : undefined,
      fonte: `Adaptação autoral HNC, ${d.data}. Origem: ${q.prova}. ${d.referencia.titulo}.`,
      fundamentacaoDidatica: { conceito: d.conceito, regra: d.regra, exemplo: d.exemplo, referencia: d.referencia },
      adaptacaoEditorial: {
        data: d.data, versao: d.versao, motivo: d.motivo,
        original: { item: q.item, contexto: q.contexto, gabarito: q.gabarito, justificativa: q.justificativa },
      },
    };
  });
}

export const QUESTOES_REAIS_PARA_TREINO = aplicarAdaptacoesRevisadas(QUESTOES_REAIS, revisoes as Record<string, AdaptacaoRevisada>);
