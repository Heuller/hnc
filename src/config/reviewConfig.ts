/**
 * Configurações Canônicas de Revisão Científica e Agendamento Espaçado
 * 
 * Heurísticas Pedagógicas e Neurocognitivas:
 * - Ebbinghaus (1885): Curva do esquecimento e recuperação ativa.
 * - Pashler, Rohrer, Cepeda et al. (2007, 2008): Espaçamento ótimo de retenção para horizontes longos.
 * - Parâmetros do projeto (não vêm do edital nem do Cebraspe): simetria 50% C / 50% E nos cadernos
 *   e limiar de 85% de retenção factual líquida para considerar um item consolidado.
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
   * Orçamento de tempo diário dedicado a revisões (20% a 25% ≈ 60 min de 4 a 5 h/dia, segunda a sexta).
   */
  readonly orcamentoTempoRevisaoPct: number;

  /**
   * Limiar de tolerância de atraso acumulado em dias úteis antes de emitir alerta (2 dias úteis).
   */
  readonly alertaAcumuloDiasUteis: number;

  /**
   * Submódulos novos e de alta densidade técnica que exigem revisão de ativação precoce
   * (2 dias úteis após a 1ª revisão).
   */
  readonly submodulosAltaDensidadeTecnica: readonly string[];

  /**
   * Regras dinâmicas de aceleração e retrocesso de intervalo:
   * - taxaAceleracao (>= 0.85 em 2 revisões seguidas): dobra o intervalo
   * - taxaRetrocesso (< 0.70): recua ao intervalo anterior e reativa itens
   * - diasAtivacaoConteudoNovo (2 dias úteis)
   */
  readonly dynamicIntervalRules: {
    taxaAceleracao: number; // 0.85
    minRevisoesParaAcelerar: number; // 2
    fatorMultiplicadorAceleracao: number; // 2.0 (dobra)
    taxaRetrocesso: number; // 0.70
    diasAtivacaoConteudoNovo: number; // 2 dias úteis
  };

  /**
   * Pesos de risco por módulo para priorização no agendador (T7.1):
   * M7 possui P0.5 (baixa prioridade editalícia para preservação física).
   */
  readonly pesosRiscoModulo: Record<string, number>;

  /**
   * Parâmetros da Trilha Reta Final (T7.3) para as últimas 3 semanas antes da prova.
   */
  readonly retaFinal: {
    dataInicioIso: string; // '2026-12-28'
    dataProvaIso: string; // '2027-01-17'
    dataCorteNormativoIso: string; // '2026-12-17'
    totalItensSimuladoGeral: number; // 180
    distribuicaoQuestoes: {
      conhecimentosBasicos: number; // 90 (P1 - Conhecimentos Básicos)
      conhecimentosEspecificos: number; // 90 (P2 - Conhecimentos Específicos)

    };
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

export interface ParConceitualConfundivel {
  readonly id: string;
  readonly termoA: string;
  readonly termoB: string;
  readonly moduloIdA: string;
  readonly moduloIdB: string;
  readonly submoduloIdA?: string;
  readonly submoduloIdB?: string;
  readonly diferencaChave: string;
  readonly pegadinhaCebraspe: string;
  readonly baseCientifica: string;
}

export const PARES_CONCEITUAIS_CONFUNDIVEIS: readonly ParConceitualConfundivel[] = [
  {
    id: 'par-crosswalk-conversao',
    termoA: 'Crosswalk de Metadados (Mapeamento)',
    termoB: 'Conversão de Metadados (Transformação)',
    moduloIdA: 'm2',
    moduloIdB: 'm6',
    diferencaChave:
      'Crosswalk estabelece equivalência semântica e sintática entre esquemas distintos sem alterar fisicamente a base de origem; Conversão executa a transformação e gera novos registros fisicamente em outro padrão.',
    pegadinhaCebraspe: 'Afirmar que a aplicação de um crosswalk altera os metadados nativos gravados na base original.',
    baseCientifica: 'Par confundível escolhido pelo HNC. Intercalação de categorias: Kornell & Bjork (2008), citada aqui uma única vez.',
  },
  {
    id: 'par-owner-steward',
    termoA: 'Data Owner (Proprietário de Dados)',
    termoB: 'Data Steward (Curador / Custodiante de Dados)',
    moduloIdA: 'm8',
    moduloIdB: 'm8',
    submoduloIdA: 'sub-8-5',
    submoduloIdB: 'sub-8-5',
    diferencaChave:
      'Data Owner detém autoridade decisória e orçamentária sobre o ciclo de vida e classificação de acesso; Data Steward é o guardião técnico-operacional da qualidade, conformidade com metadados e integridade.',
    pegadinhaCebraspe: 'Atribuir a responsabilidade decisória de classificação e descarte dos dados ao Data Steward.',
    baseCientifica: 'DAMA-DMBOK v2 (distinção conceitual); par escolhido pelo HNC.',
  },
  {
    id: 'par-acoplamento-cocitacao',
    termoA: 'Acoplamento Bibliográfico (Kessler, 1963)',
    termoB: 'Co-citação (Small, 1973; Marshakova, 1973)',
    moduloIdA: 'm1',
    moduloIdB: 'm1',
    submoduloIdA: 'sub-1-6',
    submoduloIdB: 'sub-1-6',
    diferencaChave:
      'Acoplamento bibliográfico é fixo e imutável (dois artigos citam a mesma referência na data da publicação); Co-citação é dinâmica e prospectiva (dois artigos são citados conjuntamente por publicações posteriores).',
    pegadinhaCebraspe: 'Sustentar que a intensidade de acoplamento bibliográfico se altera dinamicamente com citações futuras.',
    baseCientifica: 'Par confundível escolhido pelo HNC (categorias bibliométricas).',
  },
  {
    id: 'par-aacr2r-rda',
    termoA: 'AACR2r (Código Prescritivo Centrado no Suporte)',
    termoB: 'RDA (Diretrizes Baseadas em Entidades LRM)',
    moduloIdA: 'm2',
    moduloIdB: 'm2',
    diferencaChave:
      'AACR2r estrutura classes de materiais e Designação Geral de Material (DGM) atrelada ao suporte físico; RDA organiza dados com base em Entidades (WEMI), Atributos e Relacionamentos independentes de mídia (campos 336/337/338).',
    pegadinhaCebraspe: 'Tratar os campos RDA 336/337/338 como mera substituição textual do DGM colcheteado do AACR2r.',
    baseCientifica: 'Par confundível escolhido pelo HNC (critério editorial).',
  },
  {
    id: 'par-mods-mets-dublin-core',
    termoA: 'MODS (Metadata Object Description Schema)',
    termoB: 'METS (Metadata Encoding and Transmission Standard)',
    moduloIdA: 'm2',
    moduloIdB: 'm6',
    submoduloIdA: 'sub-2-6',
    submoduloIdB: 'sub-6-5',
    diferencaChave:
      'MODS provê semântica descritiva bibliográfica rica derivada do MARC em XML; METS provê um invólucro estrutural que organiza arquivos digitais, mapas estruturais e metadados administrativos/técnicos.',
    pegadinhaCebraspe: 'Classificar o METS como vocabulário de catalogação temática ou bibliográfica descritiva primária.',
    baseCientifica: 'Par confundível escolhido pelo HNC (critério editorial).',
  },
  {
    id: 'par-precisao-revocacao',
    termoA: 'Precisão (Precision - Relevantes Recuperados / Total Recuperados)',
    termoB: 'Revocação (Recall - Relevantes Recuperados / Total Relevantes no Acervo)',
    moduloIdA: 'm4',
    moduloIdB: 'm4',
    diferencaChave:
      'Precisão mede a pureza da busca minimizando ruído; Revocação mede a completude da busca minimizando silêncio documental. Tendem a uma relação de compromisso inverso.',
    pegadinhaCebraspe: 'Inverter os denominadores do cálculo ou afirmar que o operador booleano OR eleva a precisão do resultado.',
    baseCientifica: 'Par confundível escolhido pelo HNC (critério editorial).',
  },
  {
    id: 'par-proveniencia-linhagem',
    termoA: 'Princípio da Proveniência Arquivística (Respeito aos Fundos)',
    termoB: 'Linhagem de Dados (Data Lineage - Governança DAMA)',
    moduloIdA: 'm5',
    moduloIdB: 'm8',
    submoduloIdA: 'sub-5-1',
    submoduloIdB: 'sub-8-5',
    diferencaChave:
      'Proveniência arquivística exige manter reunidos e indivisos os fundos da entidade geradora; Linhagem de dados rastreia o fluxo de ponta a ponta (ETL, transformações, pipelines e consumo) em ambientes informacionais.',
    pegadinhaCebraspe: 'Tratar a linhagem técnica de dados como mero sinônimo de proveniência arquivística sem considerar a rastreabilidade algorítmica de pipelines.',
    baseCientifica: 'Par confundível escolhido pelo HNC (critério editorial).',
  },
  {
    id: 'par-cdd-cdu',
    termoA: 'CDD (Classificação Decimal de Dewey - Estrutura Pura)',
    termoB: 'CDU (Classificação Decimal Universal - Facetada e Sintética)',
    moduloIdA: 'm3',
    moduloIdB: 'm3',
    diferencaChave:
      'CDD baseia-se em notação decimal pura (000-990) com tabelas auxiliares restritas (T1 a T6); CDU é uma linguagem sintético-analítica com tabelas de auxiliares comuns e ricos símbolos de relação e coordenação (: + / :: [ ]).',
    pegadinhaCebraspe: 'Atribuir operadores sintéticos da CDU (dois-pontos ou apóstrofo) à notação padrão pura da CDD.',
    baseCientifica: 'Par confundível escolhido pelo HNC (critério editorial).',
  },
];

export const SUBMODULOS_ALTA_DENSIDADE_TECNICA: readonly string[] = [
  'sub-1-5',
  'sub-1-6',
  'sub-2-6',
  'sub-2-7',
  'sub-6-5',
  'sub-6-6',
  'sub-6-7',
  'sub-8-5',
  'sub-10-5',
  'sub-10-6',
  'sub-13-4',
  'sub-14-3',
  'sub-14-4',
];

export const REVIEW_CONFIG: ReviewConfig = {
  examDateIso: '2027-01-17',
  scheduleDays: 'weekdays-only',
  dailyReviewCap: 30,
  testCeilingPct: 0.20,
  minPassingRetention: 0.85,
  leitnerBoxesTotal: 5,
  orcamentoTempoRevisaoPct: 0.25, // 20% a 25% do tempo de estudo (≈ 60 min de 4 a 5 h/dia, segunda a sexta)
  alertaAcumuloDiasUteis: 2, // Aviso se pendências > 2 dias de capacidade

  submodulosAltaDensidadeTecnica: SUBMODULOS_ALTA_DENSIDADE_TECNICA,

  dynamicIntervalRules: {
    taxaAceleracao: 0.85,
    minRevisoesParaAcelerar: 2,
    fatorMultiplicadorAceleracao: 2.0,
    taxaRetrocesso: 0.70,
    diasAtivacaoConteudoNovo: 2,
  },

  pesosRiscoModulo: {
    m1: 1.5,
    m2: 1.5,
    m3: 1.2,
    m4: 1.2,
    m5: 1.0,
    m6: 1.5,
    m7: 0.5, // P0.5: Preservação física tem peso reduzido à metade conforme diretriz editalícia
    m8: 1.5,
    m9: 1.0,
    m10: 1.5,
    m11: 1.0,
    m12: 1.0,
    m13: 1.2,
    m14: 1.5,
  },

  retaFinal: {
    dataInicioIso: '2026-12-28', // 3 semanas antes da prova (17/01/2027)
    dataProvaIso: '2027-01-17',
    dataCorteNormativoIso: '2026-12-17', // Corte a 30 dias da prova
    totalItensSimuladoGeral: 180,
    distribuicaoQuestoes: {
      conhecimentosBasicos: 90,
      conhecimentosEspecificos: 90,

    },
  },

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
