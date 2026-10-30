import type { CebraspeQuestion } from './schemas/question.schema';
import type { ItemAttempt } from './itemAttempts';
import { elegivelParaEstudo } from './questoesElegiveis';

export interface AnaliseItemReverso {
  itemId: string;
  gabarito: 'C' | 'E';
  habilidade: string;
  dificuldadeEstimada: 'fundamento' | 'aplicacao' | 'analise';
  regra: string;
  passos: [string, string, string];
  fonte: { titulo: string; url: string; localizador: string };
  transferencia: { item: string; gabarito: 'C' | 'E'; justificativa: string };
}

export interface ItemTreinoReverso { questao: CebraspeQuestion; analise: AnaliseItemReverso }

/** Junta apenas itens elegíveis já registrados. Metadados de raciocínio não homologam o banco inteiro. */
export function montarAcervoReverso(questoes: CebraspeQuestion[], analises: AnaliseItemReverso[]): ItemTreinoReverso[] {
  const porId = new Map(questoes.map(q => [q.id, q]));
  return analises.flatMap(analise => {
    const questao = porId.get(analise.itemId);
    if (!questao || questao.gabarito !== analise.gabarito || !elegivelParaEstudo(questao)) return [];
    return [{ questao, analise }];
  });
}

/** Política inicial de produto, não intervalo ótimo científico: erro/chute 1d, acerto 3d, recuperação tardia 7d. */
export function proximaRevisaoReversa(attempt: ItemAttempt, anteriores: ItemAttempt[] = []): string {
  const dia = attempt.criado_em.slice(0, 10);
  const recuperouEmOutroDia = anteriores.some(a => a.item_id === attempt.item_id && a.user_id === attempt.user_id && a.correto && a.certeza === 'alta' && a.criado_em.slice(0, 10) < dia);
  const intervalo = !attempt.correto || attempt.certeza !== 'alta' ? 1 : recuperouEmOutroDia ? 7 : 3;
  const data = new Date(`${dia}T12:00:00Z`);
  data.setUTCDate(data.getUTCDate() + intervalo);
  return data.toISOString().slice(0, 10);
}

/** Fila curta: vencidos, novos, depois os futuros apenas em prática voluntária. Nunca duplica um item. */
export function selecionarTreinoReverso(acervo: ItemTreinoReverso[], attempts: ItemAttempt[], userId: string, hoje: string, limite = 6): ItemTreinoReverso[] {
  const historico = attempts.filter(a => a.user_id === userId && a.contexto === 'treino' && !a.review_prefilled && a.criado_em.slice(0, 10) <= hoje);
  const candidatos = acervo.map(item => {
    // Desempate estável no dia, sem ensinar uma sequência fixa de gabaritos entre sessões.
    const ordem = [...`${userId}:${hoje}:${item.questao.id}`].reduce((seed, char) => (Math.imul(seed, 31) + char.charCodeAt(0)) >>> 0, 2166136261);
    const respostas = historico.filter(a => a.item_id === item.questao.id).sort((a, b) => b.criado_em.localeCompare(a.criado_em));
    const ultima = respostas[0];
    const proxima = ultima ? proximaRevisaoReversa(ultima, respostas.slice(1)) : undefined;
    return { item, ordem, prioridade: !ultima ? 1 : proxima! <= hoje ? 0 : 2, proxima };
  }).sort((a, b) => a.prioridade - b.prioridade || (a.proxima || '').localeCompare(b.proxima || '') || a.ordem - b.ordem);
  const selecionados: ItemTreinoReverso[] = [];
  const restantes = [...candidatos];
  // Mantém a prioridade, alternando módulos quando possível dentro do mesmo grupo.
  while (restantes.length && selecionados.length < Math.max(0, limite)) {
    const prioridade = restantes[0].prioridade;
    const anterior = selecionados.at(-1)?.questao.macroModuloId;
    let index = restantes.findIndex(c => c.prioridade === prioridade && c.item.questao.macroModuloId !== anterior);
    if (index < 0) index = 0;
    selecionados.push(restantes.splice(index, 1)[0].item);
  }
  return selecionados;
}
