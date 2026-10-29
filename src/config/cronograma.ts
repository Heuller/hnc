/**
 * HNC - Cronograma Oficial Dia a Dia e Trilha Pedagógica
 * Concurso: Câmara dos Deputados | Analista Legislativo - Biblioteconomia (Cargo 5)
 * Período: 22/10/2026 a 15/01/2027 (Segunda a Sexta)
 * Data da Prova: Domingo, 17/01/2027
 * Documento de Referência: docs/HNC_Cronograma_e_Trilha_Discursiva.md
 */

export type DiaSemana = 'seg' | 'ter' | 'qua' | 'qui' | 'sex';
export type TipoDia = 'estudo' | 'reserva';
export type FaseCronograma = 1 | 2 | 3;

export interface CronogramaSubmoduloRef {
  id: string;
  codigo: string;
  titulo: string;
  tipo: 'especifico' | 'basico';
}

export interface CronogramaDia {
  dataIso: string; // Formato YYYY-MM-DD
  diaSemana: DiaSemana;
  diaIndice: number; // 1 a 62
  fase: FaseCronograma;
  tipo: TipoDia;
  feriadoNome?: string;
  submodulos: CronogramaSubmoduloRef[];
  revisaoSemanal?: boolean;
  discursivaId?: string; // D1 a D9
  discursivaTitulo?: string;
  atividadePrincipal?: string;
  observacao?: string;
}

export interface DiagnosticoCronograma {
  dataReferenciaIso: string;
  diaAtual?: CronogramaDia;
  faseAtual: FaseCronograma;
  submodulosDoDia: CronogramaSubmoduloRef[];
  atrasoSubmodulos: number;
  submodulosPendentesAteHoje: string[];
  totalPlanejadosAteHoje: number;
  totalConcluidosAteHoje: number;
  sugerirPlanoB: boolean;
  mensagemPlanoB?: string;
  diasUteisRestantes: number;
  diasEstudoRestantes: number;
}

export const FERIADOS_RESERVA: Record<string, string> = {
  '2026-11-02': 'Finados (Colchão de Reserva)',
  '2026-11-20': 'Consciência Negra (Colchão de Reserva)',
  '2026-12-25': 'Natal (Colchão de Reserva)',
  '2027-01-01': 'Confraternização Universal (Colchão de Reserva)',
};

export const PLANO_B_CONFIG = {
  dataLimiteIso: '2026-11-06',
  limiarAtrasoSubmodulos: 3,
  moduloComprimivel: 'm7',
  moduloComprimivelNome: 'Módulo 7 · Preservação e Conservação de Acervos',
  razaoPedagogica:
    'Nas provas reais do Cebraspe para Biblioteconomia, o M7 representa apenas 0,7% dos itens classificados (16 de 2.200), apesar de deter 9,2% dos itens da plataforma. Comprimir o M7 em 1 único dia de leitura e questões libera até 3 dias úteis para sanar o atraso sem cortar os Básicos (Português/Inglês protegem o piso eliminatório de 18 pontos de P1).',
} as const;

/**
 * Tabela Canônica dos 62 Dias Úteis (22/10/2026 a 15/01/2027)
 * 58 Dias de Estudo Efetivo + 4 Feriados de Reserva (Colchão de Segurança)
 */
export const CRONOGRAMA_DIAS: CronogramaDia[] = [
  // ==========================================
  // SEMANA 1 (22/10 qui a 23/10 sex) - 2 dias
  // ==========================================
  {
    dataIso: '2026-10-22',
    diaSemana: 'qui',
    diaIndice: 1,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-1',
        codigo: '1.1',
        titulo: 'Biblioteconomia, Documentação e Ciência da Informação: objeto, fronteiras e evolução histórica',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-1',
        codigo: '11.1',
        titulo: 'Estado, Governo, Princípios e Organização Administrativa',
        tipo: 'basico',
      },
    ],
    atividadePrincipal: 'Início da Fase 1: Cobertura Intercalada (Específico + Básico)',
  },
  {
    dataIso: '2026-10-23',
    diaSemana: 'sex',
    diaIndice: 2,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-2',
        codigo: '1.2',
        titulo: 'As Cinco Leis de Ranganathan e Releituras Contemporâneas',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D1',
    discursivaTitulo: 'D1 · Anatomia da prova e dissecação de padrão real Cebraspe (CAPES 2023 e TSE 2024)',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D1',
  },

  // ==========================================
  // SEMANA 2 (26/10 seg a 30/10 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-10-26',
    diaSemana: 'seg',
    diaIndice: 3,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-3',
        codigo: '1.3',
        titulo: 'Conceitos de Informação, Conhecimento e Documento: Ontologia e Dimensões',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-1',
        codigo: '10.1',
        titulo: 'Regimento Interno da Câmara dos Deputados (RICD: Arts. 1-24, 65-94, 226-251 e 262-273)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-10-27',
    diaSemana: 'ter',
    diaIndice: 4,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-4',
        codigo: '1.4',
        titulo: 'Profissão: Legislação Federal, Código de Ética do CFB e Atribuições Privativas',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-2',
        codigo: '11.2',
        titulo: 'Ato Administrativo, Invalidação e Responsabilidade por Pareceres',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-10-28',
    diaSemana: 'qua',
    diaIndice: 5,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-5',
        codigo: '1.5',
        titulo: 'Ciclo de Vida, Qualidade e Memória da Informação',
        tipo: 'especifico',
      },
      {
        id: 'sub-12-1',
        codigo: '12.1',
        titulo: 'Modelo Interativo-Compensatório e Leitura Estratégica (Skimming, Scanning & Ideia Central)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-10-29',
    diaSemana: 'qui',
    diaIndice: 6,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-1-6',
        codigo: '1.6',
        titulo: 'Governança da Informação e Governança de Dados',
        tipo: 'especifico',
      },
      {
        id: 'sub-13-1',
        codigo: '13.1',
        titulo: 'Mecânica da Interpretação, Coesão e Relações Semânticas no Padrão Cebraspe',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-10-30',
    diaSemana: 'sex',
    diaIndice: 7,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-1',
        codigo: '2.1',
        titulo: 'Princípios Internacionais de Catalogação (ICP), Catálogos e o Código AACR2r',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D2',
    discursivaTitulo: 'D2 · Questão de 20 linhas (com consulta, sem relógio): As Cinco Leis na Biblioteca Legislativa',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D2',
  },

  // ==========================================
  // SEMANA 3 (02/11 seg a 06/11 sex) - 5 dias (1 feriado)
  // ==========================================
  {
    dataIso: '2026-11-02',
    diaSemana: 'seg',
    diaIndice: 8,
    fase: 1,
    tipo: 'reserva',
    feriadoNome: 'Finados',
    submodulos: [],
    atividadePrincipal: 'Colchão de Reserva (Finados): Descanso programado ou recuperação de atrasos',
  },
  {
    dataIso: '2026-11-03',
    diaSemana: 'ter',
    diaIndice: 9,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-2',
        codigo: '2.2',
        titulo: 'O Padrão RDA (Resource Description and Access) e o Projeto 3R',
        tipo: 'especifico',
      },
      {
        id: 'sub-14-1',
        codigo: '14.1',
        titulo: 'MSOffice 365 e Ferramentas de Comunicação e Colaboração',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-04',
    diaSemana: 'qua',
    diaIndice: 10,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-3',
        codigo: '2.3',
        titulo: 'Modelos Conceituais: A Família FRBR e o IFLA LRM',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-3',
        codigo: '11.3',
        titulo: 'Agentes Públicos e Regime Jurídico Único (Lei nº 8.112/1990)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-05',
    diaSemana: 'qui',
    diaIndice: 11,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-4',
        codigo: '2.4',
        titulo: 'Notação de Autor, Formato MARC 21 e Padrão Dublin Core',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-2',
        codigo: '10.2',
        titulo: 'Processo Legislativo Constitucional e Espécies de Proposições',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-06',
    diaSemana: 'sex',
    diaIndice: 12,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-6',
        codigo: '2.6',
        titulo: 'Metadados: Tipologia, Qualidade, Perfis de Aplicação, Crosswalks, Imagem e Som',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D3',
    discursivaTitulo: 'D3 · Questão de 20 linhas (35 min, sem consulta): Governança da Informação × Dados',
    observacao: 'Marco de calibração do Plano B (verificação de atraso acumulado); Discursiva D3',
  },

  // ==========================================
  // SEMANA 4 (09/11 seg a 13/11 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-11-09',
    diaSemana: 'seg',
    diaIndice: 13,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-7',
        codigo: '2.7',
        titulo: 'MODS, METS, BIBFRAME, Linked Data e Interoperabilidade',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-4',
        codigo: '11.4',
        titulo: 'Processo Administrativo Federal e Direito Disciplinar (Leis 9.784/99 e 8.112/90)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-10',
    diaSemana: 'ter',
    diaIndice: 14,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-2-5',
        codigo: '2.5',
        titulo: 'Órgãos Públicos, Catalogação Governamental e Biblioteca da Câmara dos Deputados',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-5',
        codigo: '11.5',
        titulo: 'Poderes Administrativos, Ciclo de Polícia e Abuso de Poder',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-11',
    diaSemana: 'qua',
    diaIndice: 15,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-3-1',
        codigo: '3.1',
        titulo: 'Teoria da Classificação, CDD (23ª ed.) e CDU',
        tipo: 'especifico',
      },
      {
        id: 'sub-12-2',
        codigo: '12.2',
        titulo: 'Marcadores Discursivos (Linking Words) e Conjunções de Transição Argumentativa',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-12',
    diaSemana: 'qui',
    diaIndice: 16,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-3-2',
        codigo: '3.2',
        titulo: 'Classificação Decimal de Direito (CDDir) e Notação de Autor (Cutter-Sanborn e PHA)',
        tipo: 'especifico',
      },
      {
        id: 'sub-13-2',
        codigo: '13.2',
        titulo: 'A Arte da Reescritura e Paráfrase no Padrão Cebraspe',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-13',
    diaSemana: 'sex',
    diaIndice: 17,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-3-3',
        codigo: '3.3',
        titulo: 'Análise Documentária e Processo de Indexação',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D4',
    discursivaTitulo: 'D4 · Questão de 20 linhas (35 min): Da AACR2r ao RDA na prática do catalogador',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D4',
  },

  // ==========================================
  // SEMANA 5 (16/11 seg a 20/11 sex) - 5 dias (1 feriado)
  // ==========================================
  {
    dataIso: '2026-11-16',
    diaSemana: 'seg',
    diaIndice: 18,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-3-4',
        codigo: '3.4',
        titulo: 'Linguagens Documentárias, Tesauros, Ontologias e SKOS',
        tipo: 'especifico',
      },
      {
        id: 'sub-14-2',
        codigo: '14.2',
        titulo: 'Redes de Computadores, Internet/Intranet, Criptografia e Gestão de Riscos de Segurança da Informação',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-17',
    diaSemana: 'ter',
    diaIndice: 19,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-4-1',
        codigo: '4.1',
        titulo: 'Recuperação da Informação, Álgebra Booleana e Mecanismos de Busca',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-3',
        codigo: '10.3',
        titulo: 'Lei de Acesso à Informação (LAI) e LGPD na Gestão Documental Pública',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-18',
    diaSemana: 'qua',
    diaIndice: 20,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-4-2',
        codigo: '4.2',
        titulo: 'Fontes de Informação: Tipologia, Literatura Cinzenta e Avaliação',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-6',
        codigo: '11.6',
        titulo: 'Responsabilidade Civil do Estado: Ação, Omissão e Direito de Regresso',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-19',
    diaSemana: 'qui',
    diaIndice: 21,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-4-3',
        codigo: '4.3',
        titulo: 'Fontes de Informação Jurídica, Diários Oficiais e o Portal LexML Brasil',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-7',
        codigo: '11.7',
        titulo: 'Improbidade Administrativa (Lei nº 8.429/1992 e Reforma da Lei nº 14.230/2021)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-20',
    diaSemana: 'sex',
    diaIndice: 22,
    fase: 1,
    tipo: 'reserva',
    feriadoNome: 'Consciência Negra',
    submodulos: [],
    atividadePrincipal: 'Colchão de Reserva (Consciência Negra): Descanso programado ou recuperação de atrasos',
  },

  // ==========================================
  // SEMANA 6 (23/11 seg a 27/11 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-11-23',
    diaSemana: 'seg',
    diaIndice: 23,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-4-4',
        codigo: '4.4',
        titulo: 'Serviço de Referência, DSI, Estudos de Usuários e Competência Informacional',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-4',
        codigo: '10.4',
        titulo: 'Noções de Direito Constitucional Aplicadas ao Processo Legislativo',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-24',
    diaSemana: 'ter',
    diaIndice: 24,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-5-1',
        codigo: '5.1',
        titulo: 'Planejamento de Bibliotecas, Avaliação de Serviços e Indicadores de Desempenho',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-8',
        codigo: '11.8',
        titulo: 'Evolução da Gestão Pública: Patrimonialismo, Burocracia, NPM e Nova Governança Pública',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-25',
    diaSemana: 'qua',
    diaIndice: 25,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-5-2',
        codigo: '5.2',
        titulo: 'CRM em Serviços de Informação, Curadoria e Produtos de Inteligência Informacional',
        tipo: 'especifico',
      },
      {
        id: 'sub-12-3',
        codigo: '12.3',
        titulo: 'Mecanismos de Coesão Textual e Referenciação (Anáfora, Catáfora e Pronomes)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-26',
    diaSemana: 'qui',
    diaIndice: 26,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-5-3',
        codigo: '5.3',
        titulo: 'Política de Desenvolvimento de Coleções: Seleção, Aquisição, Desbaste e Avaliação',
        tipo: 'especifico',
      },
      {
        id: 'sub-13-3',
        codigo: '13.3',
        titulo: 'Sintaxe Avançada, Pontuação, Concordância, Regência e Crase',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-11-27',
    diaSemana: 'sex',
    diaIndice: 27,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-5-4',
        codigo: '5.4',
        titulo: 'Gestão da Informação e Gestão do Conhecimento Organizacional',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D5',
    discursivaTitulo: 'D5 · Primeira Peça Técnica (50 linhas, com consulta): Nota Técnica sobre perfil de metadados e interoperabilidade',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D5',
  },

  // ==========================================
  // SEMANA 7 (30/11 seg a 04/12 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-11-30',
    diaSemana: 'seg',
    diaIndice: 28,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-1',
        codigo: '6.1',
        titulo: 'Bibliotecas Digitais vs. Eletrônicas, Arquitetura da Informação e Usabilidade',
        tipo: 'especifico',
      },
      {
        id: 'sub-14-3',
        codigo: '14.3',
        titulo: 'Inteligência Artificial, Engenharia de Prompts e Ética Digital no Serviço Público',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-01',
    diaSemana: 'ter',
    diaIndice: 29,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-2',
        codigo: '6.2',
        titulo: 'Repositórios Institucionais, Softwares de Bibliotecas e Interoperabilidade (OAI-PMH e Z39.50)',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-9',
        codigo: '11.9',
        titulo: 'Governança no Setor Público Federal (Decreto Federal nº 9.203/2017)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-02',
    diaSemana: 'qua',
    diaIndice: 30,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-3',
        codigo: '6.3',
        titulo: 'Preservação Digital: OAIS (ISO 14721), Fixidez, Formatos Abertos (ISO) e Estratégias Práticas',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-5',
        codigo: '10.5',
        titulo: 'Poder Legislativo e Regime Jurídico dos Parlamentares na CF/88',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-03',
    diaSemana: 'qui',
    diaIndice: 31,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-4',
        codigo: '6.4',
        titulo: 'Inteligência Artificial na Biblioteconomia e na Ciência da Informação',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-10',
        codigo: '11.10',
        titulo: 'Licitações Públicas: Nova Lei nº 14.133/2021, ETP e Termo de Referência',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-04',
    diaSemana: 'sex',
    diaIndice: 32,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-5',
        codigo: '6.5',
        titulo: 'Sistemas Informacionais, Modelagem de Dados, Bancos Relacionais e NoSQL',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D6',
    discursivaTitulo: 'D6 · Questão de 20 linhas (35 min): Indexação e tesauro na recuperação jurídica',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D6',
  },

  // ==========================================
  // SEMANA 8 (07/12 seg a 11/12 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-12-07',
    diaSemana: 'seg',
    diaIndice: 33,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-6',
        codigo: '6.6',
        titulo: 'Fundamentos Computacionais: Algoritmos, SQL, Regex, APIs e Web Scraping',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-11',
        codigo: '11.11',
        titulo: 'Contratos Administrativos, Gestão e Fiscalização Contratual',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-08',
    diaSemana: 'ter',
    diaIndice: 34,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-6-7',
        codigo: '6.7',
        titulo: 'IA Aplicada à Informação: Classificação, OCR/HTR, Curadoria de Corpora, Avaliação e Vieses',
        tipo: 'especifico',
      },
      {
        id: 'sub-12-4',
        codigo: '12.4',
        titulo: 'Vocabulário Contextual, Falsos Cognatos, Modalizadores e Paráfrase Cebraspe',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-09',
    diaSemana: 'qua',
    diaIndice: 35,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-7-1',
        codigo: '7.1',
        titulo: 'Agentes Ambientais e Físico-Químicos de Degradação de Acervos',
        tipo: 'especifico',
      },
      {
        id: 'sub-13-4',
        codigo: '13.4',
        titulo: 'Ortografia Oficial, Tipologia e Gêneros Textuais, Tempos Verbais e Colocação Pronominal',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-10',
    diaSemana: 'qui',
    diaIndice: 36,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-7-2',
        codigo: '7.2',
        titulo: 'Agentes Biológicos de Degradação e Controle Integrado de Pragas (CIP)',
        tipo: 'especifico',
      },
      {
        id: 'sub-14-4',
        codigo: '14.4',
        titulo: 'Ciência de Dados, Mineração de Dados/Textos, Visualização e Storytelling',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-11',
    diaSemana: 'sex',
    diaIndice: 37,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-7-3',
        codigo: '7.3',
        titulo: 'Conservação Preventiva: Higienização, Acondicionamento e Manuseio de Acervos',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D7',
    discursivaTitulo: 'D7 · Questão de 20 linhas (formato TSE 2024): Características da informação jurídica e gestão',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D7',
  },

  // ==========================================
  // SEMANA 9 (14/12 seg a 18/12 sex) - 5 dias
  // ==========================================
  {
    dataIso: '2026-12-14',
    diaSemana: 'seg',
    diaIndice: 38,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-7-4',
        codigo: '7.4',
        titulo: 'Intervenções Curativas, Restauração e Planos de Contingência contra Desastres',
        tipo: 'especifico',
      },
      {
        id: 'sub-10-6',
        codigo: '10.6',
        titulo: 'Regimento Comum do Congresso Nacional (RCCN - Resolução nº 1/1970-CN)',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-15',
    diaSemana: 'ter',
    diaIndice: 39,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-8-1',
        codigo: '8.1',
        titulo: 'ABNT NBR 6023:2025 (3ª Edição): Referências Bibliográficas',
        tipo: 'especifico',
      },
      {
        id: 'sub-11-12',
        codigo: '11.12',
        titulo: 'Transparência e Privacidade: Lei de Acesso à Informação e LGPD',
        tipo: 'basico',
      },
    ],
  },
  {
    dataIso: '2026-12-16',
    diaSemana: 'qua',
    diaIndice: 40,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-8-2',
        codigo: '8.2',
        titulo: 'ABNT NBR 10520: Citações em Documentos (Versão 2023)',
        tipo: 'especifico',
      },
      {
        id: 'sub-8-3',
        codigo: '8.3',
        titulo: 'ABNT NBR 14724:2024: Apresentação de Trabalhos Acadêmicos',
        tipo: 'especifico',
      },
    ],
  },
  {
    dataIso: '2026-12-17',
    diaSemana: 'qui',
    diaIndice: 41,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-8-4',
        codigo: '8.4',
        titulo: 'ABNT NBR 6028:2021 (Resumos), NBR 6027:2012 (Sumários) e NBR 6022:2018 (Artigos)',
        tipo: 'especifico',
      },
      {
        id: 'sub-8-5',
        codigo: '8.5',
        titulo: 'Editoração, Fichas Catalográficas, Índices, Infografia e Acessibilidade',
        tipo: 'especifico',
      },
    ],
  },
  {
    dataIso: '2026-12-18',
    diaSemana: 'sex',
    diaIndice: 42,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-9-1',
        codigo: '9.1',
        titulo: 'Ciclo da Comunicação Científica, Canais e Avaliação por Pares',
        tipo: 'especifico',
      },
    ],
    revisaoSemanal: true,
    discursivaId: 'D8',
    discursivaTitulo: 'D8 · Questão de 20 linhas (formato CAPES 2023): Política de desenvolvimento de coleções',
    observacao: 'Revisão semanal intercalada (60 min); Discursiva D8',
  },

  // ==========================================
  // SEMANA 10 (21/12 seg a 22/12 ter) - 2 dias (Fim da Fase 1)
  // ==========================================
  {
    dataIso: '2026-12-21',
    diaSemana: 'seg',
    diaIndice: 43,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-9-2',
        codigo: '9.2',
        titulo: 'Acesso Aberto (Vias Verde, Dourada e Diamante) e Princípios FAIR',
        tipo: 'especifico',
      },
      {
        id: 'sub-9-3',
        codigo: '9.3',
        titulo: 'Curadoria Digital, Gestão de Dados de Pesquisa, Direitos Autorais e Creative Commons',
        tipo: 'especifico',
      },
    ],
  },
  {
    dataIso: '2026-12-22',
    diaSemana: 'ter',
    diaIndice: 44,
    fase: 1,
    tipo: 'estudo',
    submodulos: [
      {
        id: 'sub-9-4',
        codigo: '9.4',
        titulo: 'Estudos Métricos da Informação: Leis Bibliométricas, Análise de Citação e Altmetria',
        tipo: 'especifico',
      },
    ],
    atividadePrincipal: 'Fim da Fase 1: Cobertura completa dos 75 submódulos do edital',
  },

  // ==========================================
  // FASE 2: SIMULADOS E LACUNAS (23/12/2026 a 08/01/2027) - 13 dias úteis (11 estudo + 2 reservas)
  // ==========================================
  {
    dataIso: '2026-12-23',
    diaSemana: 'qua',
    diaIndice: 45,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Dirigido P1 (Conhecimentos Básicos - 90 itens) e Mapeamento de Lacunas',
  },
  {
    dataIso: '2026-12-24',
    diaSemana: 'qui',
    diaIndice: 46,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Dirigido P2 (Conhecimentos Específicos - 90 itens) e Mapeamento de Lacunas',
  },
  {
    dataIso: '2026-12-25',
    diaSemana: 'sex',
    diaIndice: 47,
    fase: 2,
    tipo: 'reserva',
    feriadoNome: 'Natal',
    submodulos: [],
    atividadePrincipal: 'Colchão de Reserva (Natal): Descanso programado ou recuperação de atrasos',
  },
  {
    dataIso: '2026-12-28',
    diaSemana: 'seg',
    diaIndice: 48,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Revisão Dirigida de Lacunas (Foco em subtemas com acerto abaixo de 60%)',
  },
  {
    dataIso: '2026-12-29',
    diaSemana: 'ter',
    diaIndice: 49,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Revisão Intercalada de Pares Confundíveis (CDD × CDU; AACR2 × RDA; Tesauro × SKOS)',
  },
  {
    dataIso: '2026-12-30',
    diaSemana: 'qua',
    diaIndice: 50,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    discursivaId: 'D9-P1',
    discursivaTitulo: 'D9 · Peça Técnica Cronometrada - Parte 1 (Modelo OAIS e Preservação Digital)',
    atividadePrincipal: 'Simulado Cronometrado de Discursiva: 2×20 linhas em 70 minutos',
  },
  {
    dataIso: '2026-12-31',
    diaSemana: 'qui',
    diaIndice: 51,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Revisão Ativa do Caderno de Erros (Itens de alta relevância com erro prévio)',
  },
  {
    dataIso: '2027-01-01',
    diaSemana: 'sex',
    diaIndice: 52,
    fase: 2,
    tipo: 'reserva',
    feriadoNome: 'Confraternização Universal',
    submodulos: [],
    atividadePrincipal: 'Colchão de Reserva (Ano Novo): Descanso programado ou recuperação de atrasos',
  },
  {
    dataIso: '2027-01-04',
    diaSemana: 'seg',
    diaIndice: 53,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    discursivaId: 'D9-P2',
    discursivaTitulo: 'D9 · Peça Técnica Cronometrada - Parte 2 (50 linhas em 60 minutos: Preservação Digital)',
    atividadePrincipal: 'Simulado Cronometrado de Peça Técnica: 50 linhas em 60 minutos',
  },
  {
    dataIso: '2027-01-05',
    diaSemana: 'ter',
    diaIndice: 54,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Completo P1 (90 itens Cebraspe): Treino de Piso Eliminatório (≥ 18 pontos)',
  },
  {
    dataIso: '2027-01-06',
    diaSemana: 'qua',
    diaIndice: 55,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Completo P2 (90 itens Cebraspe): Treino de Piso Eliminatório (≥ 27 pontos)',
  },
  {
    dataIso: '2027-01-07',
    diaSemana: 'qui',
    diaIndice: 56,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Análise de Lacunas Pós-Simulado e Calibração de Confiança Cebraspe',
  },
  {
    dataIso: '2027-01-08',
    diaSemana: 'sex',
    diaIndice: 57,
    fase: 2,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Revisão Final de Legislação e Regimentos (RICD, RCCN, Lei 8.112, LAI e LGPD)',
  },

  // ==========================================
  // FASE 3: FECHAMENTO (11/01/2027 a 15/01/2027) - 5 dias úteis de estudo
  // ==========================================
  {
    dataIso: '2027-01-11',
    diaSemana: 'seg',
    diaIndice: 58,
    fase: 3,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Revisão Rápida de Sínteses: Prazos Regimentais, Fórmulas e Regras ABNT Críticas',
  },
  {
    dataIso: '2027-01-12',
    diaSemana: 'ter',
    diaIndice: 59,
    fase: 3,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Oficial Completo 90+90 (180 itens): Ritmo real de prova e gestão do tempo',
  },
  {
    dataIso: '2027-01-13',
    diaSemana: 'qua',
    diaIndice: 60,
    fase: 3,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Simulado Discursivo Completo à Mão (3 horas: 2 questões 20L + 1 peça técnica 50L)',
  },
  {
    dataIso: '2027-01-14',
    diaSemana: 'qui',
    diaIndice: 61,
    fase: 3,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Leitura da Folha de Véspera: Relembrar esquemas, sínteses e mnemônicos',
  },
  {
    dataIso: '2027-01-15',
    diaSemana: 'sex',
    diaIndice: 62,
    fase: 3,
    tipo: 'estudo',
    submodulos: [],
    atividadePrincipal: 'Fechamento Emocional e Descanso Ativo: Preparação de canetas pretas transparentes, sem conteúdo novo',
  },
];

/**
 * Retorna a entrada do cronograma para uma data ISO ('YYYY-MM-DD').
 */
export function obterCronogramaDia(dataIso: string): CronogramaDia | undefined {
  return CRONOGRAMA_DIAS.find((d) => d.dataIso === dataIso);
}

/**
 * Calcula a lista de submódulos planejados até uma data de referência (inclusive).
 */
export function obterSubmodulosPlanejadosAteData(dataIso: string): string[] {
  const planejados: string[] = [];
  for (const dia of CRONOGRAMA_DIAS) {
    if (dia.dataIso <= dataIso) {
      for (const sub of dia.submodulos) {
        if (!planejados.includes(sub.id)) {
          planejados.push(sub.id);
        }
      }
    }
  }
  return planejados;
}

/**
 * Calcula o atraso acumulado em relação aos submódulos esperados até a data de referência.
 */
export function calcularAtrasoSubmodulos(
  dataReferenciaIso: string,
  concluidosIds: string[]
): {
  atrasoSubmodulos: number;
  submodulosEsperados: string[];
  submodulosPendentes: string[];
} {
  const esperados = obterSubmodulosPlanejadosAteData(dataReferenciaIso);
  const pendentes = esperados.filter((id) => !concluidosIds.includes(id));
  return {
    atrasoSubmodulos: pendentes.length,
    submodulosEsperados: esperados,
    submodulosPendentes: pendentes,
  };
}

/**
 * Diagnóstico completo do cronograma: dia ativo, submódulos do dia, atraso e gatilho do Plano B.
 */
export function calcularDiagnosticoCronograma(
  dataReferenciaIso: string,
  concluidosIds: string[]
): DiagnosticoCronograma {
  const primeiraData = CRONOGRAMA_DIAS[0].dataIso;
  const ultimaData = CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1].dataIso;

  // Normalização de data caso fora do período do cronograma
  let dataEfetiva = dataReferenciaIso;
  if (dataReferenciaIso < primeiraData) {
    dataEfetiva = primeiraData;
  } else if (dataReferenciaIso > ultimaData) {
    dataEfetiva = ultimaData;
  }

  // Se a data for fim de semana, avança para o próximo dia útil do cronograma ou dia anterior
  let diaEncontrado = obterCronogramaDia(dataEfetiva);
  if (!diaEncontrado) {
    // Procura o próximo dia útil no cronograma
    diaEncontrado = CRONOGRAMA_DIAS.find((d) => d.dataIso >= dataEfetiva) || CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1];
    dataEfetiva = diaEncontrado.dataIso;
  }

  const { atrasoSubmodulos, submodulosEsperados, submodulosPendentes } = calcularAtrasoSubmodulos(
    dataEfetiva,
    concluidosIds
  );

  // Regra do Plano B (HNC_Cronograma_e_Trilha_Discursiva.md seção 3.4):
  // Se atrasar 3 ou mais submódulos até 06/11, sugerir o Plano B (comprimir o M7 em 1 dia).
  const sugerirPlanoB =
    dataEfetiva <= PLANO_B_CONFIG.dataLimiteIso &&
    atrasoSubmodulos >= PLANO_B_CONFIG.limiarAtrasoSubmodulos;

  const mensagemPlanoB = sugerirPlanoB
    ? `Atenção: você acumulou ${atrasoSubmodulos} submódulos de atraso antes de 06/11. Recomendamos aplicar o Plano B: comprima o Módulo 7 (Preservação) em 1 único dia (ele representa apenas 0,7% das questões Cebraspe do acervo) para retomar o ritmo sem sacrificar Português ou Inglês (que garantem o piso eliminatório de 18 pontos de P1).`
    : undefined;

  const diasRestantesLista = CRONOGRAMA_DIAS.filter((d) => d.dataIso >= dataEfetiva);
  const diasUteisRestantes = diasRestantesLista.length;
  const diasEstudoRestantes = diasRestantesLista.filter((d) => d.tipo === 'estudo').length;

  return {
    dataReferenciaIso: dataEfetiva,
    diaAtual: diaEncontrado,
    faseAtual: diaEncontrado.fase,
    submodulosDoDia: diaEncontrado.submodulos,
    atrasoSubmodulos,
    submodulosPendentesAteHoje: submodulosPendentes,
    totalPlanejadosAteHoje: submodulosEsperados.length,
    totalConcluidosAteHoje: submodulosEsperados.length - submodulosPendentes.length,
    sugerirPlanoB,
    mensagemPlanoB,
    diasUteisRestantes,
    diasEstudoRestantes,
  };
}
