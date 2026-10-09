import { REVIEW_CONFIG, type ExerciseFormatId } from '../../config/reviewConfig';
import type { Concept, ConceptState, ConfidenceLevel, DominioEstado, ConceptReviewLogEntry } from '../concepts/types';

/**
 * Verifica se uma data ISO (YYYY-MM-DD) é dia útil (Segunda a Sexta).
 * Garante que sábados e domingos sejam descartados da grade de estudos.
 */
export function isDiaUtil(dataIso: string): boolean {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0));
  const diaSemana = data.getUTCDay(); // 0 = Domingo, 6 = Sábado
  return diaSemana >= 1 && diaSemana <= 5;
}

/**
 * Retorna a próxima data útil (YYYY-MM-DD) somando a quantidade especificada de dias úteis.
 * Pula automaticamente sábados e domingos.
 */
export function somarDiasUteis(dataInicioIso: string, diasUteisParaAdicionar: number): string {
  const [ano, mes, dia] = dataInicioIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0));

  let adicionados = 0;
  while (adicionados < diasUteisParaAdicionar) {
    data.setUTCDate(data.getUTCDate() + 1);
    const diaSemana = data.getUTCDay();
    if (diaSemana >= 1 && diaSemana <= 5) {
      adicionados++;
    }
  }

  return data.toISOString().split('T')[0];
}

/**
 * Se a data atual cair em fim de semana, avança para a próxima segunda-feira.
 */
export function ajustarParaDiaUtil(dataIso: string): string {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0));
  const diaSemana = data.getUTCDay();

  if (diaSemana === 0) {
    // Domingo -> Segunda
    data.setUTCDate(data.getUTCDate() + 1);
  } else if (diaSemana === 6) {
    // Sábado -> Segunda
    data.setUTCDate(data.getUTCDate() + 2);
  }

  return data.toISOString().split('T')[0];
}

/**
 * Cria o estado inicial para um novo conceito no baralho de repetição.
 */
export function criarEstadoInicialConceito(
  conceptId: string,
  userId: string,
  dataAtualIso: string
): ConceptState {
  const dataBase = ajustarParaDiaUtil(dataAtualIso);
  const proximaRevisao = somarDiasUteis(dataBase, REVIEW_CONFIG.intervalsDaysByBox[1]);

  return {
    conceptId,
    userId,
    caixaLeitner: 1,
    proximaRevisao,
    totalAparicoes: 0,
    totalAcertos: 0,
    totalErros: 0,
    totalChutes: 0,
    estadoDominio: 'novo',
    historico: [],
  };
}

export interface ResultadoProcessamentoRevisao {
  novoEstado: ConceptState;
  avancouCaixa: boolean;
  diasAteProximaRevisao: number;
  mensagemPedagogica: string;
}

/**
 * Processa a resposta do estudante a um conceito atômico (Leitner + Pashler + Confiança).
 */
export function processarRevisaoConceito(
  estadoAtual: ConceptState,
  acertou: boolean,
  confianca: ConfidenceLevel,
  formatoUsado: ExerciseFormatId,
  respostaDada: string,
  tempoSegundos: number,
  dataAtualIso: string
): ResultadoProcessamentoRevisao {
  const dataRef = ajustarParaDiaUtil(dataAtualIso);
  const isVencido = dataRef >= estadoAtual.proximaRevisao;
  const caixaAntiga = estadoAtual.caixaLeitner;

  let novaCaixa = caixaAntiga;
  let diasIntervalo = 1;
  let avancouCaixa = false;
  let novoDominio: DominioEstado = estadoAtual.estadoDominio;
  let mensagem = '';

  const totalAparicoes = estadoAtual.totalAparicoes + 1;
  let totalAcertos = estadoAtual.totalAcertos;
  let totalErros = estadoAtual.totalErros;
  let totalChutes = estadoAtual.totalChutes;

  if (confianca === 'chute') {
    totalChutes++;
  }

  // Regra 1: Erro ou Chute -> Rebaixa para Caixa 1 e agenda para o próximo dia útil
  if (!acertou || confianca === 'chute') {
    novaCaixa = 1;
    diasIntervalo = REVIEW_CONFIG.intervalsDaysByBox[1]; // 1 dia útil
    totalErros = acertou ? totalErros : totalErros + 1;
    novoDominio = totalErros >= 2 ? 'critico' : 'em_aprendizado';

    mensagem = !acertou
      ? 'A banca Cebraspe anula 1 acerto por erro. Conceito retornado à Caixa 1 para re-consolidação ativa.'
      : 'Julgamento classificado como "chute". Para consolidação duradoura, o item foi agendado para o próximo dia útil.';
  } else if (confianca === 'duvida') {
    // Regra 2: Acertou com Dúvida -> Consolidação parcial.
    // Não avança de caixa; agenda em intervalo curto (metade da caixa atual ou 1 dia)
    totalAcertos++;
    novaCaixa = caixaAntiga;
    diasIntervalo = Math.max(1, Math.floor(REVIEW_CONFIG.intervalsDaysByBox[caixaAntiga] / 2));
    novoDominio = 'em_aprendizado';
    mensagem = 'Acerto com dúvida factual. Intervalo curto mantido para fixar a justificativa sem suposições.';
  } else {
    // Regra 3: Acertou com Certeza -> Consolidação plena
    totalAcertos++;
    if (isVencido) {
      novaCaixa = Math.min(5, (caixaAntiga + 1)) as 1 | 2 | 3 | 4 | 5;
      avancouCaixa = novaCaixa > caixaAntiga;
      diasIntervalo = REVIEW_CONFIG.intervalsDaysByBox[novaCaixa];
      novoDominio = novaCaixa >= 4 ? 'dominado' : 'revisando';
      mensagem = `Excelente recuperação ativa! Conceito avançado para a Caixa ${novaCaixa} (+${diasIntervalo} dias úteis).`;
    } else {
      // Acertou antes da data prevista de revisão (sem avanço prematuro de caixa)
      diasIntervalo = REVIEW_CONFIG.intervalsDaysByBox[caixaAntiga];
      mensagem = 'Recuperação pré-prazo confirmada. Intervalo da caixa atual preservado.';
    }
  }

  const proximaRevisao = somarDiasUteis(dataRef, diasIntervalo);

  const logEntry: ConceptReviewLogEntry = {
    id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    timestamp: new Date().toISOString(),
    dataIso: dataRef,
    formatoUsado,
    respostaDada,
    acertou,
    confianca,
    tempoRespostaSegundos: tempoSegundos,
    caixaAnterior: caixaAntiga,
    caixaNova: novaCaixa,
  };

  const novoEstado: ConceptState = {
    ...estadoAtual,
    caixaLeitner: novaCaixa,
    proximaRevisao,
    totalAparicoes,
    totalAcertos,
    totalErros,
    totalChutes,
    ultimaConfianca: confianca,
    ultimoJulgamento: respostaDada === 'C' || respostaDada === 'E' ? (respostaDada as 'C' | 'E') : undefined,
    dataUltimaRevisao: dataRef,
    estadoDominio: novoDominio,
    historico: [logEntry, ...(estadoAtual.historico || [])].slice(0, 50),
  };

  return {
    novoEstado,
    avancouCaixa,
    diasAteProximaRevisao: diasIntervalo,
    mensagemPedagogica: mensagem,
  };
}

export interface ItemFilaRevisao {
  conceito: Concept;
  estado: ConceptState;
  formatoDesignado: ExerciseFormatId;
  prioridadeScore: number;
  diasAtraso: number;
}

export interface FilaRevisaoDiaria {
  dataReferenciaIso: string;
  totalPendentes: number;
  itensNaFila: ItemFilaRevisao[];
  totalSimuladoPuro: number;
  totalFormatosCognitivos: number;
  limiteDiarioAtingido: boolean;
}

/**
 * Selecionador inteligente da Fila Diária de Recuperação Ativa.
 * Respeita:
 * 1. scheduleDays: somente de segunda a sexta.
 * 2. dailyReviewCap: teto confortável de 30 itens/dia.
 * 3. testCeilingPct: máximo de 20% em formato de simulado puro (F1).
 * 4. Priorização: Erros Críticos > Vencidos há mais tempo > Caixas Iniciais (1 e 2).
 */
export function selecionarFilaRevisaoDiaria(params: {
  estados: Record<string, ConceptState>;
  conceitos: Record<string, Concept>;
  dataHojeIso: string;
  submodulosLiberados?: string[];
  limiteDiario?: number;
}): FilaRevisaoDiaria {
  const {
    estados,
    conceitos,
    dataHojeIso,
    submodulosLiberados,
    limiteDiario = REVIEW_CONFIG.dailyReviewCap,
  } = params;

  const dataRef = ajustarParaDiaUtil(dataHojeIso);
  const submodulosPermitidos = submodulosLiberados ? new Set(submodulosLiberados) : null;

  const candidatos: Array<{
    conceito: Concept;
    estado: ConceptState;
    prioridadeScore: number;
    diasAtraso: number;
  }> = [];

  for (const [id, conceito] of Object.entries(conceitos)) {
    // Filtra por submódulos desbloqueados
    if (submodulosPermitidos && !submodulosPermitidos.has(conceito.submoduloId)) {
      continue;
    }

    const estado = estados[id] || criarEstadoInicialConceito(id, 'anon', dataRef);

    // Se está vencido ou na data de hoje
    if (estado.proximaRevisao <= dataRef) {
      const msDia = 1000 * 60 * 60 * 24;
      const tHoje = new Date(dataRef).getTime();
      const tPrev = new Date(estado.proximaRevisao).getTime();
      const diasAtraso = Math.max(0, Math.floor((tHoje - tPrev) / msDia));

      let score = 0;
      // Prioridade 1: Estado Crítico (erros recentes)
      if (estado.estadoDominio === 'critico') score += 2000;
      // Prioridade 2: Caixa 1
      if (estado.caixaLeitner === 1) score += 1000;
      else if (estado.caixaLeitner === 2) score += 500;
      // Prioridade 3: Dias de atraso (10 pts por dia)
      score += diasAtraso * 10;
      // Prioridade 4: Menor taxa de acerto
      const taxaAcerto = estado.totalAparicoes > 0 ? estado.totalAcertos / estado.totalAparicoes : 0;
      score += Math.round((1 - taxaAcerto) * 100);

      candidatos.push({
        conceito,
        estado,
        prioridadeScore: score,
        diasAtraso,
      });
    }
  }

  // Ordena por prioridade decrescente
  candidatos.sort((a, b) => b.prioridadeScore - a.prioridadeScore);

  const selecionados = candidatos.slice(0, limiteDiario);

  // Alocação inteligente de formatos de exercício (respeitando teto de 20% para F1)
  const maxF1 = Math.max(1, Math.floor(selecionados.length * REVIEW_CONFIG.testCeilingPct));
  let countF1 = 0;
  let countFormatosCognitivos = 0;

  const formatosAlternativos: ExerciseFormatId[] = [
    'f2_com_justificativa',
    'f3_identificacao_erro',
    'f4_preenchimento_lacunas',
    'f5_associacao',
    'f6_caso_pratico',
    'f7_flashcard_ativo',
    'f8_inversao_papeis',
  ];

  const itensNaFila: ItemFilaRevisao[] = selecionados.map((item, index) => {
    let formato: ExerciseFormatId;

    // A cada 5 itens (20%), atribui F1 (simulado clássico C/E)
    if (countF1 < maxF1 && index % 5 === 0) {
      formato = 'f1_ce_simples';
      countF1++;
    } else {
      // Distribui ciclicamente entre formatos cognitivos compatíveis
      const disponiveis = item.conceito.formatosDisponiveis.filter((f) => f !== 'f1_ce_simples');
      const formatoCandidato = disponiveis.length > 0
        ? disponiveis[index % disponiveis.length]
        : formatosAlternativos[index % formatosAlternativos.length];
      formato = formatoCandidato;
      countFormatosCognitivos++;
    }

    return {
      conceito: item.conceito,
      estado: item.estado,
      formatoDesignado: formato,
      prioridadeScore: item.prioridadeScore,
      diasAtraso: item.diasAtraso,
    };
  });

  return {
    dataReferenciaIso: dataRef,
    totalPendentes: candidatos.length,
    itensNaFila,
    totalSimuladoPuro: countF1,
    totalFormatosCognitivos: countFormatosCognitivos,
    limiteDiarioAtingido: candidatos.length > limiteDiario,
  };
}
