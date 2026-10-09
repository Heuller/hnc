/**
 * Configurações Canônicas de Revisão Científica e Agendamento Espaçado
 * 
 * Heurísticas Pedagógicas e Neurocognitivas:
 * - Ebbinghaus (1885): Curva do esquecimento e recuperação ativa.
 * - Pashler, Rohrer, Cepeda et al. (2007, 2008): Espaçamento ótimo de retenção para horizontes longos.
 * - Metodologia CEBRASPE: Simetria estrita 50% C / 50% E e limiar de 85% de retenção factual líquida.
 * 
 * Regra: TODAS as heurísticas de revisão residem exclusivamente neste arquivo.
 */

export type ScheduleDaysPreference = 'weekdays-only' | 'all-days';

export type ExerciseFormatId =
  | 'f1_ce_simples'
  | 'f2_com_justificativa'
  | 'f3_identificacao_erro'
  | 'f4_preenchimento_lacunas'
  | 'f5_associacao'
  | 'f6_caso_pratico'
  | 'f7_flashcard_ativo'
  | 'f8_inversao_papeis';

export interface ExerciseFormatMeta {
  id: ExerciseFormatId;
  codigo: string;
  nome: string;
  descricao: string;
  isFormatoSimuladoPuro: boolean;
  pesoCognitivo: 'baixo' | 'medio' | 'alto';
}

export interface ReviewConfig {
  /**
   * Data oficial do concurso da Câmara dos Deputados (Cebraspe).
   */
  readonly examDateIso: string;

  /**
   * Regime de estudo semanal:
   * 'weekdays-only': Sessões rigorosamente de segunda a sexta-feira. Fins de semana pulados.
   */
  readonly scheduleDays: ScheduleDaysPreference;

  /**
   * Teto diário de itens de revisão confortável (Ebbinghaus/Pashler).
   * 30 itens/dia proporciona ~25-30 minutos diários de recuperação ativa
   * sem causar saturação cognitiva nem cansaço excessivo.
   */
  readonly dailyReviewCap: number;

  /**
   * Teto percentual de itens apresentados em formato de teste/simulado puro por dia (ex: 20%).
   * O restante (80%) é exercitado em formatos cognitivos formativos de alta retenção.
   */
  readonly testCeilingPct: number;

  /**
   * Limiar mínimo de aproveitamento líquido para domínio e aprovação em submódulos Rn (85%).
   */
  readonly minPassingRetention: number;

  /**
   * Quantidade de caixas Leitner para o algoritmo de repetição espaçada.
   */
  readonly leitnerBoxesTotal: number;

  /**
   * Intervalos base (em dias úteis de estudo) por caixa Leitner.
   * Calibrados para o horizonte de retenção duradoura até 17/01/2027.
   */
  readonly intervalsDaysByBox: Record<1 | 2 | 3 | 4 | 5, number>;

  /**
   * Fatores de avanço de repetição de acordo com a autoverificação de confiança do estudante.
   * - Certeza: Consolidação factual alta -> avança normalmente de caixa.
   * - Dúvida: Recuperação insegura -> mantém na mesma caixa ou intervalo reduzido.
   * - Chute: Ausência de consolidação -> trata equivalente a erro factual, reiniciando em Caixa 1.
   */
  readonly confidenceAdvanceRules: {
    certeza: { advanceBox: boolean; boxStep: number; resetOnError: boolean };
    duvida: { advanceBox: boolean; boxStep: number; resetOnError: boolean };
    chute: { advanceBox: boolean; boxStep: number; resetOnError: boolean };
  };

  /**
   * Parâmetros de composição dos novos Submódulos de Revisão Científica (Rn).
   */
  readonly reviewSubmodule: {
    totalItensPorSessao: number;
    proporcaoC: number; // 0.5 (50% Certos)
    proporcaoE: number; // 0.5 (50% Errados)
    pesoSubmoduloAnterior: number; // 0.60 (60% do conteúdo mais recente)
    pesoSubmodulosPrecedentes: number; // 0.40 (40% de recuperação cumulativa)
    tempoEstimadoMinutos: number;
  };

  /**
   * Metadados dos 8 Formatos de Exercícios Cognitivos.
   */
  readonly exerciseFormats: Record<ExerciseFormatId, ExerciseFormatMeta>;
}

export const REVIEW_CONFIG: ReviewConfig = {
  examDateIso: '2027-01-17',
  scheduleDays: 'weekdays-only',
  dailyReviewCap: 30,
  testCeilingPct: 0.20,
  minPassingRetention: 0.85,
  leitnerBoxesTotal: 5,

  // Intervalos em dias úteis (segunda a sexta)
  // Caixa 1: 1 dia útil
  // Caixa 2: 3 dias úteis (~meia semana)
  // Caixa 3: 7 dias úteis (~1 semana e meia)
  // Caixa 4: 16 dias úteis (~3 semanas e meia úteis)
  // Caixa 5: 35 dias úteis (~7 semanas úteis)
  intervalsDaysByBox: {
    1: 1,
    2: 3,
    3: 7,
    4: 16,
    5: 35,
  },

  confidenceAdvanceRules: {
    certeza: { advanceBox: true, boxStep: 1, resetOnError: true },
    duvida: { advanceBox: false, boxStep: 0, resetOnError: true },
    chute: { advanceBox: false, boxStep: -4, resetOnError: true }, // Reinicia para Caixa 1
  },

  reviewSubmodule: {
    totalItensPorSessao: 20,
    proporcaoC: 0.5,
    proporcaoE: 0.5,
    pesoSubmoduloAnterior: 0.6,
    pesoSubmodulosPrecedentes: 0.4,
    tempoEstimadoMinutos: 15,
  },

  exerciseFormats: {
    f1_ce_simples: {
      id: 'f1_ce_simples',
      codigo: 'F1',
      nome: 'Julgamento C/E Cebraspe',
      descricao: 'Sentença declarativa clássica para julgamento de CERTO ou ERRADO sem distratores.',
      isFormatoSimuladoPuro: true,
      pesoCognitivo: 'medio',
    },
    f2_com_justificativa: {
      id: 'f2_com_justificativa',
      codigo: 'F2',
      nome: 'C/E com Justificativa Ativa',
      descricao: 'Julgamento C/E seguido da identificação da justificativa canônica correta.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'alto',
    },
    f3_identificacao_erro: {
      id: 'f3_identificacao_erro',
      codigo: 'F3',
      nome: 'Identificação Cirúrgica de Erro',
      descricao: 'Assertiva com armadilha da banca: aponte o fragmento ou termo invertido.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'alto',
    },
    f4_preenchimento_lacunas: {
      id: 'f4_preenchimento_lacunas',
      codigo: 'F4',
      nome: 'Recuperação de Lacunas (Cloze)',
      descricao: 'Preencha o termo técnico normativo indispensável para a veracidade da regra.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'medio',
    },
    f5_associacao: {
      id: 'f5_associacao',
      codigo: 'F5',
      nome: 'Associação Conceito-Norma',
      descricao: 'Relacione os campos MARC21, regras AACR2/RDA ou princípios biblioteconômicos.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'medio',
    },
    f6_caso_pratico: {
      id: 'f6_caso_pratico',
      codigo: 'F6',
      nome: 'Caso Prático Legislativo',
      descricao: 'Cenário da Seção de Catalogação e Referência da Câmara dos Deputados.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'alto',
    },
    f7_flashcard_ativo: {
      id: 'f7_flashcard_ativo',
      codigo: 'F7',
      nome: 'Flashcard com Elaborative Retrieval',
      descricao: 'Recuperação ativa imediata: tente formular mentalmente a regra antes de julgar.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'medio',
    },
    f8_inversao_papeis: {
      id: 'f8_inversao_papeis',
      codigo: 'F8',
      nome: 'Inversão de Papéis (Você é a Banca)',
      descricao: 'Identifique qual das quatro armadilhas clássicas do Cebraspe foi utilizada no item.',
      isFormatoSimuladoPuro: false,
      pesoCognitivo: 'alto',
    },
  },
};
