// Serviço Canônico de Engenharia Reversa de Provas e Armadilhas Cebraspe (Fase E3)
// Referência: Edital nº 1/2026 - Analista Legislativo - Bibliotecário (Cebraspe)
// HNC - Heuller na Câmara

export type TipoArmadilhaCebraspe =
  | 'INVERSAO_CANONICA'
  | 'CATEGORICO_ABSOLUTO'
  | 'ANACRONISMO_NORMATIVO'
  | 'INVERSAO_METRICA'
  | 'PEGADINHA_REGIMENTAL'
  | 'MODALIZADOR_EPISTEMICO';

export interface PadraoArmadilhaCebraspe {
  id: string;
  tipo: TipoArmadilhaCebraspe;
  nome: string;
  descricaoMecanica: string;
  gatilhosLinguistiscos: string[];
  exemploItemCebraspe: {
    enunciado: string;
    gabarito: 'C' | 'E';
    justificativaArmadilha: string;
  };
  remedioCognitivo: string;
}

export interface MatrizIncidenciaCebraspe {
  moduloId: string;
  moduloCodigo: string;
  nomeEixo: string;
  pesoConcurso: 'CRITICA' | 'ALTA' | 'MEDIA';
  frequenciaHistoricaPorcentagem: number;
  armadilhasPredominantes: TipoArmadilhaCebraspe[];
  padroesEspecificos: PadraoArmadilhaCebraspe[];
  diretrizesElaboracaoSimulado100Q: {
    proporcaoCertos: number; // 50
    proporcaoErrados: number; // 50
    distribuicaoPorSubmodulo: number; // 25 por submódulo
    focoArmadilhasPrioritarias: string[];
  };
}

export const ARQUETIPOS_ARMADILHAS_CEBRASPE: PadraoArmadilhaCebraspe[] = [
  {
    id: 'arq-1',
    tipo: 'INVERSAO_CANONICA',
    nome: 'Inversão Canônica de Autores e Conceitos',
    descricaoMecanica:
      'A banca constrói uma sentença tecnicamente impecável, porém atribui a teoria, lei ou fórmula a outro autor de notoriedade semelhante.',
    gatilhosLinguistiscos: ['segundo Lancaster', 'conforme proposto por Otlet', 'segundo Grogan', 'na visão de Ranganathan'],
    exemploItemCebraspe: {
      enunciado:
        'A Lei de Bradford estabelece que a grande maioria dos autores científicos publica apenas um único trabalho, enquanto uma minoria de alta produtividade concentra a maioria dos artigos.',
      gabarito: 'E',
      justificativaArmadilha:
        'A armadilha consiste em inverter Bradford com Lotka! A dispersão de artigos por periódicos pertence a Bradford; a produtividade dos autores (quadrado inverso) pertence a Lotka.',
    },
    remedioCognitivo:
      'Associar imediatamente a tríade bibliométrica: Bradford = Periódicos/Zonas; Lotka = Autores/Quadrado Inverso; Zipf = Palavras/Frequência.',
  },
  {
    id: 'arq-2',
    tipo: 'CATEGORICO_ABSOLUTO',
    nome: 'Generalização Categórica ou Restrição Indevida',
    descricaoMecanica:
      'O examinador insere advérbios ou expressões excludentes que transformam uma faculdade ou regra geral em exigência absoluta ou proibição universal.',
    gatilhosLinguistiscos: ['apenas', 'exclusivamente', 'sempre', 'em qualquer hipótese', 'prescinde', 'é vedado terminantemente'],
    exemploItemCebraspe: {
      enunciado:
        'Nas referências elaboradas segundo a NBR 6023:2018, quando uma publicação possui quatro ou mais autores, é obrigatório indicar apenas o primeiro seguido da expressão et al., sendo vedado citar todos os autores.',
      gabarito: 'E',
      justificativaArmadilha:
        'A NBR 6023:2018 faculta a indicação de todos os autores caso a instituição assim decida por política editorial. O termo "sendo vedado" torna o item categoricamente falso.',
    },
    remedioCognitivo:
      'Acionar freio inibitório (Sistema 2) diante de termos absolutos e verificar se a norma admite exceção ou faculdade.',
  },
  {
    id: 'arq-3',
    tipo: 'ANACRONISMO_NORMATIVO',
    nome: 'Anacronismo e Conflito de Versões de Normas',
    descricaoMecanica:
      'A questão cobra com aparência de correção uma regra clássica que foi expressamente revogada pela edição mais recente da norma técnica.',
    gatilhosLinguistiscos: ['segundo a norma de citações vigente', 'de acordo com a ABNT', 'no modelo de metadados atual'],
    exemploItemCebraspe: {
      enunciado:
        'Em conformidade com a ABNT NBR 10520:2023, quando a autoria de uma citação indireta for indicada entre parênteses no final do parágrafo, o sobrenome do autor deve ser grafado obrigatoriamente em letras maiúsculas, como em (SILVA, 2024).',
      gabarito: 'E',
      justificativaArmadilha:
        'A NBR 10520:2023 revogou expressamente a CAIXA ALTA entre parênteses! Agora a chamada é sempre em maiúsculas e minúsculas: (Silva, 2024).',
    },
    remedioCognitivo:
      'Memorizar as rupturas das novas normas: NBR 10520:2023 (fim da caixa alta); NBR 6028:2021 (extensão e tipologia de resumos); RDA Toolkit 3R.',
  },
  {
    id: 'arq-4',
    tipo: 'INVERSAO_METRICA',
    nome: 'Inversão de Métricas, Fórmulas e Relações Diretas/Inversas',
    descricaoMecanica:
      'A assertiva inverte frações, numeradores ou as relações de causalidade entre medidas quantitativas de recuperação ou indexação.',
    gatilhosLinguistiscos: ['proporcionalmente', 'razão direta', 'revocação e precisão', 'coeficiente'],
    exemploItemCebraspe: {
      enunciado:
        'Ao aplicar operadores booleanos OR na estratégia de busca em um catálogo informatizado, o bibliotecário restringe o conjunto recuperado, aumentando a precisão e diminuindo a revocação.',
      gabarito: 'E',
      justificativaArmadilha:
        'O operador OR é de união lógica (ampliativo), o que eleva a revocação e tende a diminuir a precisão. O operador que restringe é o AND.',
    },
    remedioCognitivo:
      'Lembrar que AND restringe (interseção $\\rightarrow$ precisão sobe); OR expande (união $\\rightarrow$ revocação sobe); NOT exclui.',
  },
  {
    id: 'arq-5',
    tipo: 'PEGADINHA_REGIMENTAL',
    nome: 'Armadilha Procedimental e Regimental da Câmara',
    descricaoMecanica:
      'O examinador altera sutilmente quóruns, competências de órgãos ou etapas do processo legislativo no âmbito do RICD.',
    gatilhosLinguistiscos: ['competência exclusiva', 'quórum de maioria', 'em caráter terminativo', 'por deliberação da Mesa'],
    exemploItemCebraspe: {
      enunciado:
        'Uma Proposta de Emenda à Constituição (PEC) será discutida e votada em cada Casa do Congresso Nacional, em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos membros presentes.',
      gabarito: 'E',
      justificativaArmadilha:
        'A Constituição e o RICD exigem três quintos dos votos dos MEMBROS DA CASA (308 deputados federais), e não apenas dos membros presentes!',
    },
    remedioCognitivo:
      'Quórum de PEC é sempre sobre a totalidade dos membros (3/5 = 308 deputados na CD). Maioria simples é que calcula sobre os presentes.',
  },
  {
    id: 'arq-6',
    tipo: 'MODALIZADOR_EPISTEMICO',
    nome: 'Alteração de Modalizadores Epistêmicos e Deônticos',
    descricaoMecanica:
      'A banca troca o sentido deôntico da norma jurídica ou técnica, convertendo uma faculdade ("pode", "é facultado") em obrigação ("deve", "é imperativo").',
    gatilhosLinguistiscos: ['deve', 'é dever do analista', 'é facultado', 'pode extraordinariamente'],
    exemploItemCebraspe: {
      enunciado:
        'Nos termos da Lei de Acesso à Informação (Lei nº 12.527/2011), o órgão público deve conceder o acesso imediato à informação disponível, mas, na impossibilidade de fazê-lo, pode prorrogar o prazo de 20 dias por mais 10 dias de forma tácita e imotivada.',
      gabarito: 'E',
      justificativaArmadilha:
        'A prorrogação por até 10 dias exige justificativa expressa e motivada comunicada ao requerente; jamais pode ser tácita ou imotivada.',
    },
    remedioCognitivo:
      'Na LAI e no Direito Administrativo, prazos excepcionais exigem sempre comunicação formal e justificativa circunstanciada.',
  },
];

export const MATRIZ_INCIDENCIA_MODULOS_ESPECIFICOS: Record<string, MatrizIncidenciaCebraspe> = {
  m3: {
    moduloId: 'm3',
    moduloCodigo: 'M3',
    nomeEixo: 'Classificação Documentária e Indexação',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 18.5,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'CATEGORICO_ABSOLUTO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'CATEGORICO_ABSOLUTO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'CDD: tabelas auxiliares T1 a T6 e regra do zero',
        'CDU: sinais de relação reversível (:) vs fixa (::) e auxiliares independentes',
        'CDDir: classes 341 a 347 aplicadas ao direito brasileiro',
        'Indexação: Lancaster, exaustividade vs revocação, NBR 12676',
      ],
    },
  },

  m4: {
    moduloId: 'm4',
    moduloCodigo: 'M4',
    nomeEixo: 'Recuperação da Informação, Fontes e Usuários',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 16.0,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'MODALIZADOR_EPISTEMICO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'MODALIZADOR_EPISTEMICO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'Denis Grogan: as 8 fases da entrevista de referência',
        'Robert S. Taylor: níveis de necessidade Q1 a Q4',
        'Baeza-Yates: cálculo de precisão, revocação e fallout',
        'Tipologia de fontes de Cunha e portal LexML Brasil',
      ],
    },
  },

  m5: {
    moduloId: 'm5',
    moduloCodigo: 'M5',
    nomeEixo: 'Gestão de Unidades de Informação e Coleções',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 14.5,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'MODALIZADOR_EPISTEMICO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'MODALIZADOR_EPISTEMICO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'Waldomiro Vergueiro: 6 etapas do desenvolvimento de coleções',
        'Desbaste (remanejamento) vs Descarte (baixa patrimonial)',
        'Lancaster: métodos de avaliação centrados na coleção vs no usuário',
        'Espiral do Conhecimento de Nonaka & Takeuchi (SECI)',
      ],
    },
  },

  m6: {
    moduloId: 'm6',
    moduloCodigo: 'M6',
    nomeEixo: 'Bibliotecas Digitais, Repositórios e IA',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 15.0,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'ANACRONISMO_NORMATIVO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'ANACRONISMO_NORMATIVO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'OAI-PMH: os 6 verbos e restrição estrita a metadados XML',
        'DSpace: hierarquia Comunidade-Coleção-Item-Bundle-Bitstream',
        'Dublin Core: 15 elementos básicos e refinamentos',
        'RAG e IA Generativa: vetores, embeddings e citação auditável',
      ],
    },
  },

  m7: {
    moduloId: 'm7',
    moduloCodigo: 'M7',
    nomeEixo: 'Preservação, Conservação e Memória Institucional',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 12.0,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'ANACRONISMO_NORMATIVO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'CATEGORICO_ABSOLUTO', 'ANACRONISMO_NORMATIVO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'Modelo OAIS (ISO 14721): SIP, AIP, DIP e 6 entidades funcionais',
        'PREMIS 3.0: 5 entidades semânticas e finalidade estrita de preservação',
        'Parâmetros ambientais de conservação de papel (Reilly/Beck)',
        'Princípio da Reversibilidade na restauração documental',
      ],
    },
  },

  m8: {
    moduloId: 'm8',
    moduloCodigo: 'M8',
    nomeEixo: 'Normalização Documental e ABNT',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 17.5,
    armadilhasPredominantes: ['ANACRONISMO_NORMATIVO', 'CATEGORICO_ABSOLUTO', 'INVERSAO_CANONICA'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['ANACRONISMO_NORMATIVO', 'CATEGORICO_ABSOLUTO', 'INVERSAO_CANONICA'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'NBR 10520:2023: fim da caixa alta e autor sempre em minúsculas',
        'NBR 6023:2018: 3 autores vs 4 ou mais e destaque restrito ao título',
        'NBR 6028:2021: indicativo, informativo e crítico',
        'NBR 14724: elementos pré, textuais e pós-textuais e paginação',
      ],
    },
  },

  m9: {
    moduloId: 'm9',
    moduloCodigo: 'M9',
    nomeEixo: 'Comunicação Científica, Ciência Aberta e Métricas',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 13.5,
    armadilhasPredominantes: ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'CATEGORICO_ABSOLUTO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['INVERSAO_CANONICA', 'INVERSAO_METRICA', 'CATEGORICO_ABSOLUTO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'Bradford (periódicos/zonas), Lotka (autores/n²) e Zipf (palavras/frequência)',
        'Princípios FAIR (Wilkinson, 2016)',
        'Acesso Aberto: Vias Verde, Dourada e Diamante',
        'Índice H, Fator de Impacto e Altmetria',
      ],
    },
  },

  m10: {
    moduloId: 'm10',
    moduloCodigo: 'M10',
    nomeEixo: 'Legislação, Processo Legislativo e RVBI',
    pesoConcurso: 'CRITICA',
    frequenciaHistoricaPorcentagem: 15.5,
    armadilhasPredominantes: ['PEGADINHA_REGIMENTAL', 'MODALIZADOR_EPISTEMICO', 'CATEGORICO_ABSOLUTO'],
    padroesEspecificos: ARQUETIPOS_ARMADILHAS_CEBRASPE.filter(a =>
      ['PEGADINHA_REGIMENTAL', 'MODALIZADOR_EPISTEMICO', 'CATEGORICO_ABSOLUTO'].includes(a.tipo)
    ),
    diretrizesElaboracaoSimulado100Q: {
      proporcaoCertos: 50,
      proporcaoErrados: 50,
      distribuicaoPorSubmodulo: 25,
      focoArmadilhasPrioritarias: [
        'Regimento Interno da Câmara (RICD): órgãos e poder terminativo das comissões',
        'Quóruns regimentais: maioria simples vs maioria absoluta vs 3/5 para PEC',
        'Centro de Documentação e Informação (CEDI) e Biblioteca Pedro Aleixo',
        'Rede Virtual de Bibliotecas (RVBI) e MARC 21 compartilhado',
      ],
    },
  },
};

export function obterEngenhariaModulo(moduloId: string): MatrizIncidenciaCebraspe | undefined {
  return MATRIZ_INCIDENCIA_MODULOS_ESPECIFICOS[moduloId.toLowerCase()];
}

export function validarSimetriaCebraspe(itens: Array<{ gabarito: 'C' | 'E' }>): {
  total: number;
  certos: number;
  errados: number;
  isSimetrico5050: boolean;
  diferenca: number;
} {
  const certos = itens.filter(i => i.gabarito === 'C').length;
  const errados = itens.filter(i => i.gabarito === 'E').length;
  const total = itens.length;
  return {
    total,
    certos,
    errados,
    isSimetrico5050: certos === errados && total % 2 === 0,
    diferenca: Math.abs(certos - errados),
  };
}
