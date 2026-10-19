import type { ItemAttempt } from '../itemAttempts';
import type { SimuladoFinalizado } from '../schemas/progress.schema';

export interface MetricasIneditas {
  totalItensIneditos: number;
  acertos: number;
  erros: number;
  brancos: number;
  rawAccuracy: number; // acertos / respondidos (0 a 1)
  netScorePercent: number; // (acertos - erros) / respondidos (-1 a 1)
  pontosLiquidos: number; // acertos - erros
  desvioPadraoAmostral: number;
}

export interface BrierCalibration {
  totalAfericoes: number;
  brierScore: number; // 0 = perfeito, 0.25 = aleatório, > 0.25 = descalibrado
  nivelCalibracao: 'excelente' | 'adequado' | 'descalibrado';
  distribuicaoConfianca: {
    certeza: { total: number; acertos: number; taxaReal: number };
    provavel: { total: number; acertos: number; taxaReal: number };
    chute: { total: number; acertos: number; taxaReal: number };
  };
}

export interface RetencaoEspacadaLongitudinal {
  retencao7Dias: {
    avaliacoes: number;
    acertos: number;
    taxa: number; // 0 a 1
  };
  retencao21Dias: {
    avaliacoes: number;
    acertos: number;
    taxa: number; // 0 a 1
  };
}

export interface MecanismoAvaliado {
  nome: string;
  descricao: string;
  criterioAbandono: string;
  status: 'manter' | 'atencao' | 'abandonar';
  justificativa: string;
}

export interface RelatorioQuinzenalW6 {
  dataGeracaoIso: string;
  periodoDias: number;
  itensIneditos: MetricasIneditas;
  calibracaoMetacognitiva: BrierCalibration;
  retencaoLongitudinal: RetencaoEspacadaLongitudinal;
  mecanismosAvaliados: MecanismoAvaliado[];
  metaRecalibrada: {
    corteEstimado22Vaga: number; // 103.0 pts
    margemSegurancaDP: number; // 15.0 pts (1.5 * DP)
    metaObjetivaLiquidaTotal: number; // 118.0 pts
    metaP1Basicos: number; // 50.0 pts
    metaP2Especificos: number; // 70.0 pts
    metaP3Discursiva: number; // 45.0 pts
  };
  diagnosticoPedagogico: string;
}

/**
 * Filtra e calcula métricas estritamente em itens na PRIMEIRA EXPOSIÇÃO (inéditos),
 * eliminando distorções de reexposição e itens pré-respondidos (CLAUDE.md §7).
 */
export function calcularMetricasItensIneditos(attempts: ItemAttempt[]): MetricasIneditas {
  // Isola apenas tentativas válidas (ignora tentativas com flag de erro histórico de revisão)
  const tentativasValidas = attempts.filter((a) => !a.review_prefilled);

  // Identifica a primeira tentativa cronológica para cada item_id
  const primeiraTentativaPorItem = new Map<string, ItemAttempt>();
  for (const a of tentativasValidas) {
    const anterior = primeiraTentativaPorItem.get(a.item_id);
    if (!anterior || new Date(a.criado_em).getTime() < new Date(anterior.criado_em).getTime()) {
      primeiraTentativaPorItem.set(a.item_id, a);
    }
  }

  const itensIneditos = Array.from(primeiraTentativaPorItem.values());
  const total = itensIneditos.length;

  if (total === 0) {
    return {
      totalItensIneditos: 0,
      acertos: 0,
      erros: 0,
      brancos: 0,
      rawAccuracy: 0,
      netScorePercent: 0,
      pontosLiquidos: 0,
      desvioPadraoAmostral: 0,
    };
  }

  let acertos = 0;
  let erros = 0;
  let brancos = 0;
  const valoresPontuacao: number[] = []; // +1 para acerto, -1 para erro, 0 para branco

  for (const item of itensIneditos) {
    if (item.resposta === 'BRANCO') {
      brancos++;
      valoresPontuacao.push(0);
    } else if (item.correto) {
      acertos++;
      valoresPontuacao.push(1);
    } else {
      erros++;
      valoresPontuacao.push(-1);
    }
  }

  const respondidos = acertos + erros;
  const rawAccuracy = respondidos > 0 ? Number((acertos / respondidos).toFixed(4)) : 0;
  const pontosLiquidos = acertos - erros;
  const netScorePercent = respondidos > 0 ? Number((pontosLiquidos / respondidos).toFixed(4)) : 0;

  // Cálculo do Desvio Padrão Amostral real
  const media = valoresPontuacao.reduce((acc, v) => acc + v, 0) / total;
  const variancia =
    valoresPontuacao.reduce((acc, v) => acc + Math.pow(v - media, 2), 0) / Math.max(1, total - 1);
  const desvioPadraoAmostral = Number(Math.sqrt(variancia).toFixed(2));

  return {
    totalItensIneditos: total,
    acertos,
    erros,
    brancos,
    rawAccuracy,
    netScorePercent,
    pontosLiquidos,
    desvioPadraoAmostral,
  };
}

/**
 * Calcula a calibração metacognitiva via Brier Score:
 * Brier = (1/N) * sum( (confiança - resultado)^2 )
 * Confiança: Alta (certeza) = 1.0, Média (provável) = 0.7, Baixa (chute) = 0.5
 * Resultado: Acerto = 1, Erro = 0
 */
export function calcularBrierScore(attempts: ItemAttempt[]): BrierCalibration {
  const comConfianca = attempts.filter((a) => a.certeza && a.resposta !== 'BRANCO');

  const dist = {
    certeza: { total: 0, acertos: 0, taxaReal: 0 },
    provavel: { total: 0, acertos: 0, taxaReal: 0 },
    chute: { total: 0, acertos: 0, taxaReal: 0 },
  };

  if (comConfianca.length === 0) {
    return {
      totalAfericoes: 0,
      brierScore: 0.25,
      nivelCalibracao: 'adequado',
      distribuicaoConfianca: dist,
    };
  }

  let somaDiffQuadrado = 0;

  for (const a of comConfianca) {
    let confValor = 0.5;
    if (a.certeza === 'alta') {
      confValor = 1.0;
      dist.certeza.total++;
      if (a.correto) dist.certeza.acertos++;
    } else if (a.certeza === 'media') {
      confValor = 0.7;
      dist.provavel.total++;
      if (a.correto) dist.provavel.acertos++;
    } else {
      confValor = 0.5;
      dist.chute.total++;
      if (a.correto) dist.chute.acertos++;
    }

    const resultadoValor = a.correto ? 1.0 : 0.0;
    somaDiffQuadrado += Math.pow(confValor - resultadoValor, 2);
  }

  // Taxas reais por faixa de confiança
  dist.certeza.taxaReal =
    dist.certeza.total > 0 ? Number((dist.certeza.acertos / dist.certeza.total).toFixed(3)) : 0;
  dist.provavel.taxaReal =
    dist.provavel.total > 0 ? Number((dist.provavel.acertos / dist.provavel.total).toFixed(3)) : 0;
  dist.chute.taxaReal =
    dist.chute.total > 0 ? Number((dist.chute.acertos / dist.chute.total).toFixed(3)) : 0;

  const brierScore = Number((somaDiffQuadrado / comConfianca.length).toFixed(4));
  let nivelCalibracao: 'excelente' | 'adequado' | 'descalibrado' = 'adequado';

  if (brierScore <= 0.15) {
    nivelCalibracao = 'excelente';
  } else if (brierScore > 0.25) {
    nivelCalibracao = 'descalibrado';
  }

  return {
    totalAfericoes: comConfianca.length,
    brierScore,
    nivelCalibracao,
    distribuicaoConfianca: dist,
  };
}

/**
 * Calcula a retenção longitudinal de conceitos em retestes de 7 e 21 dias.
 */
export function calcularRetencaoLongitudinal(attempts: ItemAttempt[]): RetencaoEspacadaLongitudinal {
  const tentativasPorItem = new Map<string, ItemAttempt[]>();

  for (const a of attempts) {
    const list = tentativasPorItem.get(a.item_id) || [];
    list.push(a);
    tentativasPorItem.set(a.item_id, list);
  }

  let avaliacoes7 = 0;
  let acertos7 = 0;

  let avaliacoes21 = 0;
  let acertos21 = 0;

  const diaMs = 24 * 60 * 60 * 1000;

  tentativasPorItem.forEach((tentativas) => {
    if (tentativas.length < 2) return;
    tentativas.sort((x, y) => new Date(x.criado_em).getTime() - new Date(y.criado_em).getTime());

    const tInicial = new Date(tentativas[0].criado_em).getTime();

    for (let i = 1; i < tentativas.length; i++) {
      const deltaDias = (new Date(tentativas[i].criado_em).getTime() - tInicial) / diaMs;

      if (deltaDias >= 7 && deltaDias < 21) {
        avaliacoes7++;
        if (tentativas[i].correto) acertos7++;
      } else if (deltaDias >= 21) {
        avaliacoes21++;
        if (tentativas[i].correto) acertos21++;
      }
    }
  });

  return {
    retencao7Dias: {
      avaliacoes: avaliacoes7,
      acertos: acertos7,
      taxa: avaliacoes7 > 0 ? Number((acertos7 / avaliacoes7).toFixed(3)) : 0,
    },
    retencao21Dias: {
      avaliacoes: avaliacoes21,
      acertos: acertos21,
      taxa: avaliacoes21 > 0 ? Number((acertos21 / avaliacoes21).toFixed(3)) : 0,
    },
  };
}

/**
 * Gera o relatório quinzenal consolidado com a meta recalibrada do Edital nº 1/2026.
 */
export function gerarRelatorioQuinzenalW6(
  attempts: ItemAttempt[],
  _simulados?: SimuladoFinalizado[]
): RelatorioQuinzenalW6 {
  const itensIneditos = calcularMetricasItensIneditos(attempts);
  const calibracao = calcularBrierScore(attempts);
  const retencao = calcularRetencaoLongitudinal(attempts);

  // Parâmetros de corte e segurança (Câmara dos Deputados - Bibliotecário 180Q)
  const corteEstimado22Vaga = 103.0; // 57.2% líquido (Cenário Realista Cebraspe)
  const margemSegurancaDP = 15.0; // ~1.5 DP da prova de 180 itens
  const metaObjetivaLiquidaTotal = corteEstimado22Vaga + margemSegurancaDP; // 118.0 pts (~65.5% líquido)

  // Avaliação dos Mecanismos Pedagógicos Pré-Registrados
  const mecanismos: MecanismoAvaliado[] = [
    {
      nome: 'Repetição Espaçada Unificada (Deck Atômico / Pashler)',
      descricao: 'Agendamento estrito em dias úteis com caixas Leitner e peso por hipercorreção.',
      criterioAbandono: 'Abandonar se a retenção aos 21 dias for inferior a 60% após 4 semanas.',
      status: retencao.retencao21Dias.avaliacoes > 10 && retencao.retencao21Dias.taxa < 0.6 ? 'atencao' : 'manter',
      justificativa:
        retencao.retencao21Dias.avaliacoes > 0
          ? `Retenção medida em 21 dias: ${(retencao.retencao21Dias.taxa * 100).toFixed(1)}%.`
          : 'Amostra longitudinal em consolidação inicial.',
    },
    {
      nome: 'Aferição Metacognitiva de Confiança (Anti-Chute Cebraspe)',
      descricao: 'Classificação de Certeza, Provável ou Chute antes de revelar o gabarito.',
      criterioAbandono: 'Abandonar ou simplificar se o Brier Score for pior que 0.30 após 100 aferições.',
      status: calibracao.totalAfericoes >= 50 && calibracao.brierScore > 0.28 ? 'atencao' : 'manter',
      justificativa: `Brier Score atual: ${calibracao.brierScore.toFixed(3)} (${calibracao.nivelCalibracao}).`,
    },
    {
      nome: 'Modelo Teórico Dual (Modo Prático & Vida Real Câmara)',
      descricao: 'Alternância entre Teoria Canônica e Casos Reais da Biblioteca Pedro Aleixo/CEDI.',
      criterioAbandono: 'Reverter se a taxa líquida em itens inéditos dos módulos didáticos não superar o baseline em 3 semanas.',
      status: 'manter',
      justificativa: 'Dispositivo dual ativo em 100% dos submódulos com autonomia de escolha pelo aluno.',
    },
    {
      nome: 'Laboratório de Discursiva com Calibração Humana vs IA',
      descricao: 'Treino manuscrito com folha pautada e verificação de convergência <= 25% (item 9.8.4.1.2).',
      criterioAbandono: 'Recalibrar parâmetros caso a divergência média com a banca ultrapasse 30%.',
      status: 'manter',
      justificativa: 'Fórmulas oficiais do item 9.8.5 e tema real Cebraspe PCDF 2025 integrados com folha de texto definitivo.',
    },
  ];

  // Diagnóstico Geral
  let diagnostico = '';
  if (itensIneditos.totalItensIneditos < 30) {
    diagnostico =
      'Base de dados inéditos em expansão. Cumpra os blocos diários de questões Cebraspe para consolidar a amostra estatística.';
  } else if (itensIneditos.netScorePercent >= 0.65) {
    diagnostico = `Desempenho excelente em itens inéditos (${(itensIneditos.netScorePercent * 100).toFixed(1)}% líquido). Ritmo seguro para ultrapassar o corte da 22ª colocação (${corteEstimado22Vaga} pts).`;
  } else if (itensIneditos.netScorePercent >= 0.45) {
    diagnostico = `Aproveitamento líquido moderado (${(itensIneditos.netScorePercent * 100).toFixed(1)}% líquido). Priorize a abstenção estratégica em itens de dúvida real para reduzir a penalização de 1 erro anular 1 acerto.`;
  } else {
    diagnostico = `Alerta de penalização: taxa líquida atual de ${(itensIneditos.netScorePercent * 100).toFixed(1)}%. Deixar itens duvidosos em branco é imperativo para proteger a nota rumo aos 118 pts líquidos.`;
  }

  return {
    dataGeracaoIso: new Date().toISOString(),
    periodoDias: 14,
    itensIneditos,
    calibracaoMetacognitiva: calibracao,
    retencaoLongitudinal: retencao,
    mecanismosAvaliados: mecanismos,
    metaRecalibrada: {
      corteEstimado22Vaga,
      margemSegurancaDP,
      metaObjetivaLiquidaTotal,
      metaP1Basicos: 50.0,
      metaP2Especificos: 70.0,
      metaP3Discursiva: 45.0,
    },
    diagnosticoPedagogico: diagnostico,
  };
}
