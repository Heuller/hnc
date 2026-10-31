import type { CebraspeQuestion } from './schemas/question.schema';
import type { SessaoSimuladoState, RespostaItemSimulado } from './schemas/progress.schema';

// Identidade editorial determinística; não é um mecanismo criptográfico de segurança.
function assinatura(texto: string): string {
  let a = 0xdeadbeef, b = 0x41c6ce57;
  for (let i = 0; i < texto.length; i++) {
    const c = texto.charCodeAt(i);
    a = Math.imul(a ^ c, 2654435761);
    b = Math.imul(b ^ c, 1597334677);
  }
  return `hnc-v1-${(a >>> 0).toString(16)}-${(b >>> 0).toString(16)}-${texto.length}`;
}
const questoesCache = new WeakMap<CebraspeQuestion, string>();
export function versaoQuestao(q: CebraspeQuestion): string {
  const existente = questoesCache.get(q);
  if (existente) return existente;
  const valor = assinatura(JSON.stringify([q.id, q.contexto, q.item, q.gabarito, q.justificativa, q.gatilho, q.versao_correta, q.versao_errada, q.fonte, q.dataConferencia]));
  questoesCache.set(q, valor);
  return valor;
}
export function versaoSimulado(questoes: CebraspeQuestion[]): string {
  return assinatura(JSON.stringify(questoes.map(versaoQuestao)));
}
export function respostaDaVersaoAtual(r: RespostaItemSimulado, q: CebraspeQuestion): boolean {
  return r.versaoQuestao === versaoQuestao(q) && r.gabaritoNaResposta === q.gabarito;
}
export function sessaoPrecisaAtualizacao(s: SessaoSimuladoState, questoes: CebraspeQuestion[]): boolean {
  const respostas = Object.values(s.respostas);
  if (!respostas.length) return false;
  const mapa = new Map(questoes.map(q => [q.id, q]));
  return s.versaoConteudo !== versaoSimulado(questoes) || respostas.some(r => {
    const q = mapa.get(r.questionId);
    return !q || !respostaDaVersaoAtual(r, q);
  });
}
export function registrarArquivoSessao(s: SessaoSimuladoState) {
  return {
    id: s.tentativaId || `legada-${s.simuladoId}-${assinatura(JSON.stringify(s.respostas))}`,
    arquivadaEm: Date.now(),
    versaoConteudo: s.versaoConteudo,
    respostas: s.respostas,
    tempoGastoSegundos: s.tempoGastoSegundos,
    modoProva: s.modoProva,
    itensSelecionados: s.itensSelecionados,
  };
}
export function unirArquivosSessoes(...sessoes: SessaoSimuladoState[]) {
  return [...new Map(sessoes.flatMap(s => s.tentativasArquivadas || []).map(a => [a.id, a])).values()];
}
