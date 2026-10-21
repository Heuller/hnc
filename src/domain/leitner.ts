import {
  JORNADA_CONFIG,
  calcularIntervaloAlvo,
} from '../config/jornada.config';

export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export interface LeitnerItem {
  id: string; // ID único do item (ex: checkpointId ou id de assertiva)
  submoduloId: string;
  caixa: LeitnerBox;
  ultimaRevisao: string; // Formato YYYY-MM-DD
  proximaRevisao: string; // Formato YYYY-MM-DD
  historicoAcertos: number;
  historicoErros: number;
  vezesExposto?: number; // Contador de exposições totais
}

export const LEITNER_INTERVALOS_DIAS: Record<LeitnerBox, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
};

export const LEITNER_INTERVALOS_DIAS_P20: Record<LeitnerBox, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 21,
};

export const EXAM_DATE_CAMARA = '2027-01-17';
export const DATA_LIMITE_REVISAO = '2027-01-15'; // EXAM_DATE - 2 dias

export type FaseEstudo = 'fase1_cobertura' | 'fase2_intercalacao' | 'fase3_consolidacao';

export interface EtapaFilaErro {
  itemId: string;
  submoduloId: string;
  etapa: 1 | 2 | 3;
  diasOffset: number;
  dataAgendada: string;
  concluida: boolean;
}

export interface LeitnerItemP20 {
  id: string;
  submoduloId: string;
  caixa: LeitnerBox;
  ultimaRevisao: string;
  proximaRevisao: string;
  historicoAcertos: number;
  historicoErros: number;
  vezesExposto?: number;
  taxaAcerto?: number;
  ultimaConfianca?: 'certeza' | 'provavel' | 'duvida' | 'chute';
  filaErros?: EtapaFilaErro[];
}

export interface ResultadoProcessamentoP20 {
  item: LeitnerItemP20;
  entrouFilaErros: boolean;
  etapasFilaErro?: EtapaFilaErro[];
  intervaloDias: number;
}

/**
 * Adiciona um número de dias a uma data no formato YYYY-MM-DD (UTC para evitar drift de fuso horário)
 */
export function somarDiasDataIso(dataIso: string, dias: number): string {
  const [ano, mes, dia] = dataIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia));
  data.setUTCDate(data.getUTCDate() + dias);
  return data.toISOString().split('T')[0];
}

/**
 * Calcula a diferença em dias entre duas datas no formato YYYY-MM-DD (dataFim - dataInicio)
 */
export function calcularDiferencaDias(dataInicioIso: string, dataFimIso: string): number {
  const [a1, m1, d1] = dataInicioIso.split('-').map(Number);
  const [a2, m2, d2] = dataFimIso.split('-').map(Number);
  const t1 = Date.UTC(a1, m1 - 1, d1);
  const t2 = Date.UTC(a2, m2 - 1, d2);
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.round((t2 - t1) / msPorDia);
}

/**
 * P20: Encurta o intervalo caso a próxima revisão calculada ultrapasse o teto da prova (EXAM_DATE - 2 dias).
 * Se a data atual já for a data limite ou posterior, não agenda mais revisões (retorna 0).
 */
export function calcularIntervaloComTetoProva(
  dataAtualIso: string,
  intervaloCalculado: number,
  dataProvaIso: string = EXAM_DATE_CAMARA
): number {
  const dataLimiteIso = somarDiasDataIso(dataProvaIso, -2);
  const diffDias = calcularDiferencaDias(dataAtualIso, dataLimiteIso);
  if (diffDias <= 0) return 0;
  return Math.max(0, Math.min(intervaloCalculado, diffDias));
}

/**
 * P20: Soma dias corridos pulando apenas os dias de folga explicitamente configurados pelo estudante.
 * Exemplo: se diasDeFolga = [0] (apenas Domingo), sábados contam e domingos são pulados.
 */
export function calcularProximaDataRevisaoCorridos(
  dataAtualIso: string,
  dias: number,
  diasDeFolga: number[] = []
): string {
  if (dias <= 0) return dataAtualIso;
  const [ano, mes, dia] = dataAtualIso.split('-').map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia, 12, 0, 0));
  let adicionados = 0;
  while (adicionados < dias) {
    data.setUTCDate(data.getUTCDate() + 1);
    const diaSemana = data.getUTCDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    if (!diasDeFolga.includes(diaSemana)) {
      adicionados++;
    }
  }
  return data.toISOString().split('T')[0];
}

/**
 * P20: Gera a Fila de Erros com as 3 etapas de reexposição em +1, +3 e +7 dias corridos.
 */
export function gerarEtapasFilaErro(
  itemId: string,
  submoduloId: string,
  dataErroIso: string,
  diasDeFolga: number[] = []
): EtapaFilaErro[] {
  return [
    {
      itemId,
      submoduloId,
      etapa: 1,
      diasOffset: 1,
      dataAgendada: calcularProximaDataRevisaoCorridos(dataErroIso, 1, diasDeFolga),
      concluida: false,
    },
    {
      itemId,
      submoduloId,
      etapa: 2,
      diasOffset: 3,
      dataAgendada: calcularProximaDataRevisaoCorridos(dataErroIso, 3, diasDeFolga),
      concluida: false,
    },
    {
      itemId,
      submoduloId,
      etapa: 3,
      diasOffset: 7,
      dataAgendada: calcularProximaDataRevisaoCorridos(dataErroIso, 7, diasDeFolga),
      concluida: false,
    },
  ];
}

/**
 * P20: Processamento Leitner atualizado com:
 * - Regressão de apenas 1 caixa em vez de rebaixamento cego total para Caixa 1.
 * - Inserção imediata na Fila de Erros (+1, +3, +7 dias).
 * - Intervalos de caixas calibrados com teto de 21 dias.
 * - Teto absoluto de agendamento em EXAM_DATE - 2 dias (15/01/2027).
 */
export function processarRespostaLeitnerP20(
  item: LeitnerItemP20,
  acertou: boolean,
  dataAtualIso: string,
  confianca: 'certeza' | 'provavel' | 'duvida' | 'chute' = 'certeza',
  dataProvaIso: string = EXAM_DATE_CAMARA,
  diasDeFolga: number[] = []
): ResultadoProcessamentoP20 {
  const isVencido = dataAtualIso >= item.proximaRevisao;
  const vezesExposto = (item.vezesExposto || 0) + 1;

  if (!acertou) {
    const novaCaixa = Math.max(1, item.caixa - 1) as LeitnerBox;
    const etapas = gerarEtapasFilaErro(item.id, item.submoduloId, dataAtualIso, diasDeFolga);
    const novoItem: LeitnerItemP20 = {
      ...item,
      caixa: novaCaixa,
      ultimaRevisao: dataAtualIso,
      proximaRevisao: etapas[0].dataAgendada,
      historicoErros: item.historicoErros + 1,
      vezesExposto,
      ultimaConfianca: confianca,
      filaErros: etapas,
    };
    return {
      item: novoItem,
      entrouFilaErros: true,
      etapasFilaErro: etapas,
      intervaloDias: 1,
    };
  }

  // Acertou
  let novaCaixa = item.caixa;
  if (isVencido) {
    novaCaixa = Math.min(5, item.caixa + 1) as LeitnerBox;
  }

  const intervaloBruto = LEITNER_INTERVALOS_DIAS_P20[novaCaixa];
  const intervaloAjustado = calcularIntervaloComTetoProva(dataAtualIso, intervaloBruto, dataProvaIso);
  const proximaRevisao = calcularProximaDataRevisaoCorridos(dataAtualIso, intervaloAjustado, diasDeFolga);

  const novoItem: LeitnerItemP20 = {
    ...item,
    caixa: novaCaixa,
    ultimaRevisao: dataAtualIso,
    proximaRevisao,
    historicoAcertos: item.historicoAcertos + 1,
    vezesExposto,
    ultimaConfianca: confianca,
  };

  return {
    item: novoItem,
    entrouFilaErros: false,
    intervaloDias: intervaloAjustado,
  };
}

/**
 * P20: Proporções de intercalação por fase de estudo.
 */
export function obterProporcoesFase(fase: FaseEstudo): { atual: number; precedentes: number } {
  switch (fase) {
    case 'fase1_cobertura':
      return { atual: 0.70, precedentes: 0.30 };
    case 'fase2_intercalacao':
      return { atual: 0.40, precedentes: 0.60 };
    case 'fase3_consolidacao':
      return { atual: 0.25, precedentes: 0.75 };
    default:
      return { atual: 0.40, precedentes: 0.60 };
  }
}

/**
 * P20: Score de prioridade por fragilidade mnemônica.
 * Prioriza itens com menor taxa de acerto, mais reincidência de erros e chutes/dúvidas.
 */
export function calcularPrioridadeFragilidade(
  taxaAcerto: number = 0.5,
  historicoErros: number = 0,
  ultimaConfianca?: 'certeza' | 'provavel' | 'duvida' | 'chute'
): number {
  const pesoErroTaxa = (1 - Math.max(0, Math.min(1, taxaAcerto))) * 100;
  const pesoHistoricoErros = historicoErros * 15;
  let pesoConfianca = 0;
  if (ultimaConfianca === 'chute') pesoConfianca = 50;
  else if (ultimaConfianca === 'duvida') pesoConfianca = 25;
  else if (ultimaConfianca === 'provavel') pesoConfianca = 10;
  return pesoErroTaxa + pesoHistoricoErros + pesoConfianca;
}

function criarPrng(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface ParamsSelecaoIntercalada<
  T extends {
    id: string;
    submoduloId: string;
    taxaAcerto?: number;
    historicoErros?: number;
    ultimaConfianca?: 'certeza' | 'provavel' | 'duvida' | 'chute';
  }
> {
  fase: FaseEstudo;
  totalDesejado: number;
  candidatosAtuais: T[];
  candidatosPrecedentes: T[];
  semente?: number;
}

/**
 * P20: Seleção intercalada com proporções por fase e ordenação determinística por fragilidade.
 */
export function selecionarItensIntercaladosPorFase<
  T extends {
    id: string;
    submoduloId: string;
    taxaAcerto?: number;
    historicoErros?: number;
    ultimaConfianca?: 'certeza' | 'provavel' | 'duvida' | 'chute';
  }
>(params: ParamsSelecaoIntercalada<T>): T[] {
  const { fase, totalDesejado, candidatosAtuais, candidatosPrecedentes, semente = 42 } = params;
  const proporcoes = obterProporcoesFase(fase);
  const prng = criarPrng(semente);

  const ordenarPorFragilidade = (lista: T[]) => {
    return [...lista].sort((a, b) => {
      const scoreB = calcularPrioridadeFragilidade(b.taxaAcerto ?? 0.5, b.historicoErros ?? 0, b.ultimaConfianca);
      const scoreA = calcularPrioridadeFragilidade(a.taxaAcerto ?? 0.5, a.historicoErros ?? 0, a.ultimaConfianca);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return a.id.localeCompare(b.id);
    });
  };

  const ordenadosAtuais = ordenarPorFragilidade(candidatosAtuais);
  const ordenadosPrecedentes = ordenarPorFragilidade(candidatosPrecedentes);

  let qtdAtual = Math.round(totalDesejado * proporcoes.atual);
  let qtdPrec = totalDesejado - qtdAtual;

  if (ordenadosAtuais.length < qtdAtual) {
    qtdAtual = ordenadosAtuais.length;
    qtdPrec = Math.min(ordenadosPrecedentes.length, totalDesejado - qtdAtual);
  } else if (ordenadosPrecedentes.length < qtdPrec) {
    qtdPrec = ordenadosPrecedentes.length;
    qtdAtual = Math.min(ordenadosAtuais.length, totalDesejado - qtdPrec);
  }

  const selecionadosAtuais = ordenadosAtuais.slice(0, qtdAtual);
  const selecionadosPrecedentes = ordenadosPrecedentes.slice(0, qtdPrec);

  // Embaralha deterministicamente mantendo a reprodutibilidade da semente
  const combinado = [...selecionadosAtuais, ...selecionadosPrecedentes];
  for (let i = combinado.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [combinado[i], combinado[j]] = [combinado[j], combinado[i]];
  }

  return combinado;
}

/**
 * Cria ou inicializa um novo item no baralho Leitner (Compatibilidade Legada)
 */
export function criarItemLeitner(
  id: string,
  submoduloId: string,
  dataAtualIso: string
): LeitnerItem {
  return {
    id,
    submoduloId,
    caixa: 1,
    ultimaRevisao: dataAtualIso,
    proximaRevisao: somarDiasDataIso(dataAtualIso, LEITNER_INTERVALOS_DIAS[1]),
    historicoAcertos: 0,
    historicoErros: 0,
    vezesExposto: 0,
  };
}

/**
 * Calcula o intervalo de revisão (em dias) para a caixa especificada (Compatibilidade Legada)
 */
export function calcularIntervaloRevisao(
  caixa: LeitnerBox,
  dataAtualIso: string,
  dataProvaIso?: string
): number {
  if (dataProvaIso) {
    const diasRestantes = calcularDiferencaDias(dataAtualIso, dataProvaIso);
    if (diasRestantes > 0) {
      const lacunaBase = calcularIntervaloAlvo(diasRestantes);
      const multiplicador = Math.pow(2, caixa - 1);
      const intervaloCalculado = Math.round(lacunaBase * multiplicador);
      return Math.min(
        JORNADA_CONFIG.limiteMaximoIntervaloDias,
        Math.max(JORNADA_CONFIG.limiteMinimoIntervaloDias, intervaloCalculado)
      );
    }
  }

  return LEITNER_INTERVALOS_DIAS[caixa];
}

/**
 * Processa o resultado de um estudo no item Leitner (Compatibilidade Legada)
 */
export function processarRespostaLeitner(
  item: LeitnerItem,
  acertou: boolean,
  dataAtualIso: string,
  dataProvaIso?: string
): LeitnerItem {
  const isVencido = dataAtualIso >= item.proximaRevisao;
  const vezesExposto = (item.vezesExposto || 0) + 1;

  if (!acertou) {
    const novaCaixa: LeitnerBox = 1;
    const proximaRevisao = somarDiasDataIso(dataAtualIso, 1);

    return {
      ...item,
      caixa: novaCaixa,
      ultimaRevisao: dataAtualIso,
      proximaRevisao,
      historicoAcertos: item.historicoAcertos,
      historicoErros: item.historicoErros + 1,
      vezesExposto,
    };
  }

  if (!isVencido) {
    return {
      ...item,
      ultimaRevisao: dataAtualIso,
      historicoAcertos: item.historicoAcertos + 1,
      vezesExposto,
    };
  }

  const novaCaixa = Math.min(5, item.caixa + 1) as LeitnerBox;
  const intervalo = calcularIntervaloRevisao(novaCaixa, dataAtualIso, dataProvaIso);
  const proximaRevisao = somarDiasDataIso(dataAtualIso, intervalo);

  return {
    ...item,
    caixa: novaCaixa,
    ultimaRevisao: dataAtualIso,
    proximaRevisao,
    historicoAcertos: item.historicoAcertos + 1,
    historicoErros: item.historicoErros,
    vezesExposto,
  };
}

/**
 * Retorna todos os itens cuja próxima data de revisão seja menor ou igual à data de referência.
 */
export function getItensPendentesRevisao(
  itens: LeitnerItem[],
  dataReferenciaIso: string
): LeitnerItem[] {
  return itens.filter((item) => item.proximaRevisao <= dataReferenciaIso);
}

/**
 * Retorna estatísticas de distribuição das caixas Leitner
 */
export function getDistribuicaoCaixasLeitner(itens: LeitnerItem[]): Record<LeitnerBox, number> {
  const dist: Record<LeitnerBox, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const item of itens) {
    dist[item.caixa] = (dist[item.caixa] || 0) + 1;
  }
  return dist;
}
