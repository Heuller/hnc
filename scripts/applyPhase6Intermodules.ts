import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const MODULES_DIR = path.join(ROOT, 'src', 'content', 'modules');

console.log('===> Iniciando aplicação da Fase 6: Arquitetura Intermódulos...');

// 1. Atualizar Macro-Módulos (index.ts)
const MACRO_EDGES: Record<string, { blocoEdital: string; preRequisitos: string[] }> = {
  'm1-fundamentos': {
    blocoEdital: 'Bloco A: Ciência da Informação, Gestão, Governança e Ética',
    preRequisitos: [],
  },
  'm2-catalogacao': {
    blocoEdital: 'Bloco D: Representação, Organização, Tratamento e Recuperação',
    preRequisitos: ['m1'],
  },
  'm2-5-orgaos-gov': {
    blocoEdital: 'Bloco A / Institucional',
    preRequisitos: ['m2'],
  },
  'm3-classificacao': {
    blocoEdital: 'Bloco D: Representação, Organização, Tratamento e Recuperação',
    preRequisitos: ['m2'],
  },
  'm4-recuperacao': {
    blocoEdital: 'Bloco B e Bloco E: Recuperação da Informação e Redes',
    preRequisitos: ['m3'],
  },
  'm5-gestao': {
    blocoEdital: 'Bloco A e Bloco D: Gestão de Coleções e Serviços',
    preRequisitos: ['m4'],
  },
  'm6-digital-ia': {
    blocoEdital: 'Bloco B, C e E: Sistemas, Bancos de Dados, IA e Preservação Digital',
    preRequisitos: ['m5'],
  },
  'm7-preservacao': {
    blocoEdital: 'Bloco D e E: Preservação, Conservação e Memória',
    preRequisitos: ['m6'],
  },
  'm8-normalizacao': {
    blocoEdital: 'Bloco D: Normalização Documentária e Publicação',
    preRequisitos: ['m7'],
  },
  'm9-comunicacao': {
    blocoEdital: 'Bloco D e E: Comunicação Científica, Acesso Aberto e Métricas',
    preRequisitos: ['m8'],
  },
  'm10-legislativo': {
    blocoEdital: 'Conhecimentos Básicos: Processo Legislativo e Regimento da Câmara',
    preRequisitos: ['m1'],
  },
  'm11-direito-administrativo': {
    blocoEdital: 'Conhecimentos Básicos: Direito Administrativo',
    preRequisitos: ['m10'],
  },
  'm12-ingles': {
    blocoEdital: 'Conhecimentos Básicos: Língua Inglesa',
    preRequisitos: [],
  },
  'm13-portugues': {
    blocoEdital: 'Conhecimentos Básicos: Língua Portuguesa',
    preRequisitos: [],
  },
  'm14-tecnologia-dados': {
    blocoEdital: 'Conhecimentos Básicos: Tecnologia da Informação e Dados',
    preRequisitos: ['m6'],
  },
};

for (const [folder, meta] of Object.entries(MACRO_EDGES)) {
  const indexPath = path.join(MODULES_DIR, folder, 'index.ts');
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf-8');
    if (!content.includes('blocoEdital:')) {
      const repl = `  blocoEdital: '${meta.blocoEdital}',\n  preRequisitos: ${JSON.stringify(meta.preRequisitos)},\n  modulosFilhos:`;
      content = content.replace('modulosFilhos:', repl);
      fs.writeFileSync(indexPath, content, 'utf-8');
      console.log(`[OK] Macro-módulo ${folder} atualizado com blocoEdital e preRequisitos.`);
    }
  }
}

// 2. Tabela de Metadados de Todos os 74 Submódulos (T6.1, T6.3, T6.4)
interface SubMeta {
  editalRef: string;
  preRequisitos?: string[];
  referenciasCruzadas?: Array<{ submoduloId: string; titulo: string; motivo: string }>;
}

const SUBMODULES_META: Record<string, SubMeta> = {
  // M1
  'sub-1-1': {
    editalRef: 'Bloco A - Item 1.1 e 1.6',
    preRequisitos: [],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-3', titulo: 'Dado, Informação, Documento e Conhecimento', motivo: 'Aprofunda a ontologia documental de Briet e Buckland em relação ao ciclo DIKW.' },
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Conecta a história da documentação à governança contemporânea de dados segundo o DAMA-DMBOK2.' },
    ],
  },
  'sub-1-2': {
    editalRef: 'Bloco A - Item 1.1 e 1.6',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-5-1', titulo: 'Desenvolvimento e Gestão de Coleções', motivo: 'Aplica a 1ª, 2ª e 3ª leis de Ranganathan à política de seleção e censura.' },
      { submoduloId: 'sub-6-1', titulo: 'Bibliotecas Digitais e Discovery', motivo: 'Aplica a 4ª e 5ª leis à economia de tempo e evolução dos repositórios digitais.' },
    ],
  },
  'sub-1-3': {
    editalRef: 'Bloco A - Item 1.1 e 1.4',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-5', titulo: 'Ciclo de Vida, Qualidade e Memória', motivo: 'Analisa a estruturação dos dados e o modelo de qualidade de Wang & Strong.' },
      { submoduloId: 'sub-14-4', titulo: 'Ciência de Dados e Text Mining', motivo: 'Tratamento de dados não estruturados de proposições legislativas.' },
    ],
  },
  'sub-1-4': {
    editalRef: 'Bloco A - Item 4.2',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-4-4', titulo: 'Estudos de Usuários e Entrevista de Referência', motivo: 'Conduta ética e sigilo durante o atendimento de referência parlamentar.' },
      { submoduloId: 'sub-11-12', titulo: 'Transparência, LAI e LGPD', motivo: 'Responsabilidade legal do servidor público e deveres funcionais.' },
    ],
  },
  'sub-1-5': {
    editalRef: 'Bloco A - Item 1.2, 1.7 e 1.8',
    preRequisitos: ['sub-1-3'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-3', titulo: 'Preservação Digital e Repositórios Confiáveis', motivo: 'Fixidez, autenticidade e integridade da informação em longo prazo.' },
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Gestão da qualidade e rastreabilidade ao longo do ciclo de vida dos dados.' },
    ],
  },
  'sub-1-6': {
    editalRef: 'Bloco A - Item 2.1 a 2.9',
    preRequisitos: ['sub-1-5'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-7', titulo: 'BIBFRAME 2.0 e Linked Data', motivo: 'Interoperabilidade semântica e publicação de dados abertos interconectados.' },
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Governança ética, linhagem (W3C PROV) e curadoria de corpora (Datasheets).' },
      { submoduloId: 'sub-9-3', titulo: 'Direito Autoral e Dados Abertos de Pesquisa', motivo: 'Licenças e princípios de abertura de dados públicos.' },
      { submoduloId: 'sub-11-12', titulo: 'Transparência, LAI e LGPD', motivo: 'Conformidade legal sobre proteção de dados e transparência pública.' },
    ],
  },

  // M2
  'sub-2-1': {
    editalRef: 'Bloco D - Item 2.1 e 2.2',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-2', titulo: 'Padrão RDA e Transição Catalográfica', motivo: 'Substituição das regras de pontos de acesso do AACR2r pelas diretrizes do RDA.' },
      { submoduloId: 'sub-2-4', titulo: 'Formato MARC 21 Bibliográfico e Autoridades', motivo: 'Codificação dos pontos de acesso e dados descritivos em campos padronizados.' },
    ],
  },
  'sub-2-2': {
    editalRef: 'Bloco D - Item 2.3',
    preRequisitos: ['sub-2-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-3', titulo: 'Modelos Conceituais: FRBR e IFLA LRM', motivo: 'Fundamentação teórica do RDA centrada nas entidades e relacionamentos LRM.' },
      { submoduloId: 'sub-2-7', titulo: 'BIBFRAME 2.0 e Linked Data', motivo: 'Adoção de URIs e entidades para integração na Web Semântica.' },
    ],
  },
  'sub-2-3': {
    editalRef: 'Bloco D - Item 1.1 e 1.2',
    preRequisitos: ['sub-2-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-5', titulo: 'Sistemas Informacionais e Bancos de Dados', motivo: 'Distinção crucial entre modelagem de domínio bibliográfico (LRM) e modelagem de dados (MER).' },
      { submoduloId: 'sub-2-7', titulo: 'BIBFRAME 2.0 e Linked Data', motivo: 'Mapeamento WEMI para as classes centrais do BIBFRAME (Work, Instance, Item).' },
    ],
  },
  'sub-2-4': {
    editalRef: 'Bloco D - Item 2.7',
    preRequisitos: ['sub-2-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-7', titulo: 'BIBFRAME 2.0 e Linked Data', motivo: 'Transição dos campos legados MARC 21 para triplas RDF na Web Semântica.' },
      { submoduloId: 'sub-6-2', titulo: 'Protocolos de Interoperabilidade (Z39.50 e OAI-PMH)', motivo: 'Transporte e colheita de registros bibliográficos em rede cooperativa.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes de Informação Jurídica e LexML', motivo: 'Estruturação de metadados legislativos e catalogação cooperativa na RVBI.' },
    ],
  },
  'sub-2-6': {
    editalRef: 'Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7',
    preRequisitos: ['sub-2-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-2', titulo: 'Protocolos de Interoperabilidade e SIGB', motivo: 'Uso do Dublin Core na colheita OAI-PMH e em repositórios digitais.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML Brasil', motivo: 'Crosswalk de metadados MARC e Dublin Core para o esquema XML do LexML.' },
    ],
  },
  'sub-2-7': {
    editalRef: 'Bloco D - Item 3.12 e Bloco A - Item 3.8',
    preRequisitos: ['sub-1-6', 'sub-2-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-4', titulo: 'Formato MARC 21 Bibliográfico e Autoridades', motivo: 'Mapeamento de campos legados para classes e propriedades BIBFRAME.' },
      { submoduloId: 'sub-3-4', titulo: 'Tesauros, Ontologias e SKOS', motivo: 'Modelagem semântica de vocabulários controlados em RDF e SPARQL.' },
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Conexão entre grafos de conhecimento, ontologias e recuperação vetorial/RAG.' },
    ],
  },

  // M2.5
  'sub-2-5': {
    editalRef: 'Bloco A - Item 1.6 e Bloco D - Item 2.5',
    preRequisitos: ['sub-2-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-4', titulo: 'Formato MARC 21 Bibliográfico e Autoridades', motivo: 'Catalogação de publicações oficiais governamentais e campos 110/710.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML', motivo: 'Identificação de atos e normas de órgãos da administração pública federal.' },
    ],
  },
  'sub-2-5-orgaos': {
    editalRef: 'Bloco A - Item 1.6 e Bloco D - Item 2.5',
    preRequisitos: ['sub-2-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-4', titulo: 'Formato MARC 21', motivo: 'Catalogação de publicações oficiais governamentais.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML', motivo: 'Identificação de atos de órgãos da administração pública federal.' },
    ],
  },

  // M3
  'sub-3-1': {
    editalRef: 'Bloco D - Item 3.1',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-3-2', titulo: 'Classificação Decimal Universal (CDU)', motivo: 'Contraste entre o modelo enumerativo hierárquico da CDD e o modelo analítico-sintético da CDU.' },
    ],
  },
  'sub-3-2': {
    editalRef: 'Bloco D - Item 3.2 e 3.3',
    preRequisitos: ['sub-3-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-3-1', titulo: 'Classificação Decimal de Dewey (CDD)', motivo: 'Uso de tabelas auxiliares e síntese notacional.' },
      { submoduloId: 'sub-3-3', titulo: 'Classificação Decimal de Direito (CDDir)', motivo: 'Especialização da classe 34 para o ordenamento jurídico brasileiro.' },
    ],
  },
  'sub-3-3': {
    editalRef: 'Bloco D - Item 3.4',
    preRequisitos: ['sub-3-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-3-2', titulo: 'Classificação Decimal Universal (CDU)', motivo: 'Classificação de acervos jurídicos especializados.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML Brasil', motivo: 'Organização temática da biblioteca jurídica parlamentar.' },
    ],
  },
  'sub-3-4': {
    editalRef: 'Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6',
    preRequisitos: ['sub-1-1', 'sub-2-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-7', titulo: 'BIBFRAME 2.0 e Linked Data', motivo: 'Modelagem de tesauros e vocabulários controlados em SKOS e RDF.' },
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Uso de taxonomias e ontologias para extração semântica e controle de alucinações em RAG.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML', motivo: 'Vocabulário Controlado da RVBI aplicado a proposições legislativas.' },
    ],
  },

  // M4
  'sub-4-1': {
    editalRef: 'Bloco B - Item 3.1 a 3.9',
    preRequisitos: ['sub-3-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-14-4', titulo: 'Ciência de Dados e Text Mining', motivo: 'Algoritmos de ponderação vetorial TF-IDF e métricas de precisão e revocação.' },
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Avaliação de relevância e busca semântica vetorial.' },
    ],
  },
  'sub-4-2': {
    editalRef: 'Bloco E - Item 2.1 e 2.2',
    preRequisitos: ['sub-4-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML Brasil', motivo: 'Pesquisa avançada em diários oficiais e bases governamentais.' },
      { submoduloId: 'sub-11-12', titulo: 'Transparência, LAI e LGPD', motivo: 'Acesso a informações públicas e sigilo.' },
    ],
  },
  'sub-4-3': {
    editalRef: 'Bloco E - Item 2.3 a 2.5',
    preRequisitos: ['sub-2-4', 'sub-3-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-1', titulo: 'Regimento Interno da Câmara dos Deputados', motivo: 'Classificação de proposições e atos do processo legislativo.' },
      { submoduloId: 'sub-2-6', titulo: 'Metadados, Dublin Core e Crosswalks', motivo: 'Esquema XML LexML e interoperabilidade com catálogos MARC 21.' },
    ],
  },
  'sub-4-4': {
    editalRef: 'Bloco E - Item 3.1 a 3.5 e Bloco A - Item 1.5',
    preRequisitos: ['sub-4-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-4', titulo: 'Ética Profissional e Legislação', motivo: 'Conduta e sigilo na entrevista de referência.' },
      { submoduloId: 'sub-5-2', titulo: 'Produtos e Serviços Informacionais', motivo: 'Conversão da necessidade do usuário em relatórios temáticos e notas informacionais.' },
    ],
  },

  // M5
  'sub-5-1': {
    editalRef: 'Bloco D - Item 4.1 a 4.6 e 4.9',
    preRequisitos: ['sub-1-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-5-3', titulo: 'Avaliação, Desbastamento e Métricas', motivo: 'Critérios quantitativos e qualitativos de descarte e remanejamento.' },
      { submoduloId: 'sub-9-3', titulo: 'Direito Autoral e Acesso Aberto', motivo: 'Liberdade intelectual versus censura segundo IFLA e CF/88.' },
    ],
  },
  'sub-5-2': {
    editalRef: 'Bloco E - Item 3.6 a 3.14',
    preRequisitos: ['sub-4-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-4-4', titulo: 'Estudos de Usuários e Entrevista de Referência', motivo: 'Identificação de necessidades para elaboração de produtos especializados.' },
      { submoduloId: 'sub-8-5', titulo: 'Editoração e Publicação Digital', motivo: 'Estruturação formal de infográficos, linhas do tempo e relatórios.' },
    ],
  },
  'sub-5-3': {
    editalRef: 'Bloco D - Item 4.7 e Bloco E - Item 1.7',
    preRequisitos: ['sub-5-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-9-4', titulo: 'Bibliometria e Altmetria', motivo: 'Leis bibliométricas e obsolescência da literatura de Burton & Kebler.' },
      { submoduloId: 'sub-6-1', titulo: 'Bibliotecas Digitais', motivo: 'Métricas de uso eletrônico COUNTER R5 e protocolo SUSHI.' },
    ],
  },
  'sub-5-4': {
    editalRef: 'Bloco A - Item 1.6 e Bloco D - Item 4.1',
    preRequisitos: ['sub-1-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Modelos de Gestão do Conhecimento (Nonaka & Takeuchi) e governança DAMA.' },
    ],
  },

  // M6
  'sub-6-1': {
    editalRef: 'Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6',
    preRequisitos: ['sub-2-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-2', titulo: 'Protocolos de Interoperabilidade e SIGB', motivo: 'Integração entre bibliotecas digitais, SIGB e discovery services.' },
      { submoduloId: 'sub-8-5', titulo: 'Acessibilidade de Produtos Informacionais', motivo: 'Diretrizes WCAG 2.2 e eMAG aplicadas a portais de bibliotecas.' },
    ],
  },
  'sub-6-2': {
    editalRef: 'Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12',
    preRequisitos: ['sub-2-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-4', titulo: 'MARC 21 Bibliográfico e Autoridades', motivo: 'Protocolo Z39.50 e catalogação cooperativa.' },
      { submoduloId: 'sub-6-3', titulo: 'Preservação Digital e Repositórios Confiáveis', motivo: 'Colheita OAI-PMH de pacotes de metadados em repositórios digitais.' },
    ],
  },
  'sub-6-3': {
    editalRef: 'Bloco E - Item 1.14 e Bloco A - Item 1.8',
    preRequisitos: ['sub-1-5', 'sub-2-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-7-3', titulo: 'Preservação de Suportes e Acervos Físicos', motivo: 'Políticas integradas de conservação de matrizes e objetos digitais.' },
      { submoduloId: 'sub-14-2', titulo: 'Segurança da Informação e Criptografia', motivo: 'Fixidez e hashes SHA-256 no dicionário PREMIS.' },
    ],
  },
  'sub-6-4': {
    editalRef: 'Bloco C - Item 1.1 a 1.4',
    preRequisitos: ['sub-6-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Modelos fundacionais, prompting e curadoria profissional de corpora.' },
      { submoduloId: 'sub-14-3', titulo: 'Inteligência Artificial e Machine Learning', motivo: 'Conceitos básicos de aprendizado supervisionado e não supervisionado.' },
    ],
  },
  'sub-6-5': {
    editalRef: 'Bloco B - Item 1.1 a 1.4',
    preRequisitos: ['sub-2-3'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-3', titulo: 'Modelos Conceituais (LRM)', motivo: 'Distinção entre modelagem relacional computacional (MER) e LRM.' },
      { submoduloId: 'sub-14-4', titulo: 'Ciência de Dados e Text Mining', motivo: 'Estruturação de dados relacionais e não relacionais para análise.' },
    ],
  },
  'sub-6-6': {
    editalRef: 'Bloco C - Item 3.1 a 3.5',
    preRequisitos: ['sub-6-5'],
    referenciasCruzadas: [
      { submoduloId: 'sub-14-4', titulo: 'Ciência de Dados e Text Mining', motivo: 'Consultas SQL e expressões regulares para mineração de textos.' },
      { submoduloId: 'sub-6-2', titulo: 'Protocolos e APIs', motivo: 'APIs REST e consumo de dados abertos da Câmara.' },
    ],
  },
  'sub-6-7': {
    editalRef: 'Bloco C - Item 2.1 a 2.10',
    preRequisitos: ['sub-1-6', 'sub-6-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-3-4', titulo: 'Tesauros, Ontologias e SKOS', motivo: 'Extração semântica de entidades e controle de alucinação em RAG.' },
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Datasheets for Datasets, viés algorítmico e proveniência.' },
      { submoduloId: 'sub-11-12', titulo: 'Transparência, LAI e LGPD', motivo: 'Uso ético de dados e privacidade em sistemas inteligentes.' },
    ],
  },

  // M7
  'sub-7-1': {
    editalRef: 'Bloco D - Item 4.8',
    preRequisitos: ['sub-5-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-7-3', titulo: 'Suportes e Condições Ambientais', motivo: 'Controle de temperatura e umidade relativa no arquivo da Câmara.' },
    ],
  },
  'sub-7-2': {
    editalRef: 'Bloco D - Item 4.8',
    preRequisitos: ['sub-7-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-7-4', titulo: 'Restauração e Planos de Contingência', motivo: 'Manejo integrado de pragas e intervenções curativas.' },
    ],
  },
  'sub-7-3': {
    editalRef: 'Bloco D - Item 4.8',
    preRequisitos: ['sub-7-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-3', titulo: 'Preservação Digital (OAIS e PREMIS)', motivo: 'Preservação de matrizes digitalizadas e suporte de longo prazo.' },
    ],
  },
  'sub-7-4': {
    editalRef: 'Bloco D - Item 4.8',
    preRequisitos: ['sub-7-3'],
    referenciasCruzadas: [
      { submoduloId: 'sub-14-2', titulo: 'Segurança da Informação e Riscos', motivo: 'Planos de contingência contra desastres e continuidade do negócio.' },
    ],
  },

  // M8
  'sub-8-1': {
    editalRef: 'Bloco D - Item 5.1 e 5.2',
    preRequisitos: ['sub-2-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-8-2', titulo: 'NBR 10520 (Citações)', motivo: 'Regras de citação e remissão cruzada para referências bibliográficas.' },
    ],
  },
  'sub-8-2': {
    editalRef: 'Bloco D - Item 5.3',
    preRequisitos: ['sub-8-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-8-1', titulo: 'NBR 6023 (Referências)', motivo: 'Chamadas no texto pelo sistema autor-data e numérico.' },
    ],
  },
  'sub-8-3': {
    editalRef: 'Bloco D - Item 5.4',
    preRequisitos: ['sub-8-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-8-4', titulo: 'NBR 6028 (Resumos)', motivo: 'Estruturação de trabalhos acadêmicos e elementos pré-textuais.' },
    ],
  },
  'sub-8-4': {
    editalRef: 'Bloco D - Item 5.5',
    preRequisitos: ['sub-8-3'],
    referenciasCruzadas: [
      { submoduloId: 'sub-5-2', titulo: 'Produtos e Serviços Informacionais', motivo: 'Elaboração de resumos indicativos, informativos e estados da arte.' },
    ],
  },
  'sub-8-5': {
    editalRef: 'Bloco D - Item 5.6 e 5.7',
    preRequisitos: ['sub-8-3'],
    referenciasCruzadas: [
      { submoduloId: 'sub-2-1', titulo: 'AACR2r e Fichas Catalográficas', motivo: 'Elaboração técnica de fichas no verso da folha de rosto.' },
      { submoduloId: 'sub-6-1', titulo: 'Acessibilidade Digital', motivo: 'Diretrizes WCAG 2.2 e formatos acessíveis (EPUB, PDF/A).' },
    ],
  },

  // M9
  'sub-9-1': {
    editalRef: 'Bloco D - Item 4.9 e Bloco E - Item 4.1',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-9-2', titulo: 'Acesso Aberto e Repositórios', motivo: 'Modelos de negócios e vias dourada e verde do acesso aberto.' },
    ],
  },
  'sub-9-2': {
    editalRef: 'Bloco E - Item 1.6 e Bloco D - Item 4.9',
    preRequisitos: ['sub-9-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-1', titulo: 'Bibliotecas Digitais e DSpace', motivo: 'Plataformas de repositório e políticas de autoarquivamento.' },
    ],
  },
  'sub-9-3': {
    editalRef: 'Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9',
    preRequisitos: ['sub-9-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Direito autoral, limitações dos arts. 46 a 48 e dados abertos governamentais.' },
      { submoduloId: 'sub-11-12', titulo: 'Transparência, LAI e LGPD', motivo: 'Equilíbrio entre publicidade estatal e tutela da propriedade intelectual.' },
    ],
  },
  'sub-9-4': {
    editalRef: 'Bloco E - Item 4.1 a 4.8',
    preRequisitos: ['sub-9-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-5-3', titulo: 'Avaliação de Coleções e Métricas', motivo: 'Leis de Bradford, Lotka e Zipf aplicadas à gestão de periódicos.' },
      { submoduloId: 'sub-14-4', titulo: 'Ciência de Dados e Text Mining', motivo: 'Lei de Zipf e análise de frequência de vocábulos.' },
    ],
  },

  // M10
  'sub-10-1': {
    editalRef: 'Conhecimentos Básicos - RICD arts. 1 a 24, 65 a 94, 226 a 251, 262 a 273',
    preRequisitos: ['sub-1-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-5', titulo: 'Poder Legislativo na CF/88', motivo: 'Fundamento constitucional do regimento e competências privativas.' },
      { submoduloId: 'sub-10-6', titulo: 'Regimento Comum do Congresso Nacional', motivo: 'Articulação entre a Câmara e as sessões conjuntas do Congresso.' },
      { submoduloId: 'sub-4-3', titulo: 'Fontes Jurídicas e LexML', motivo: 'Tramitação regimental de proposições na Câmara.' },
    ],
  },
  'sub-10-2': {
    editalRef: 'Conhecimentos Básicos - Processo Legislativo Constitucional',
    preRequisitos: ['sub-10-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-5', titulo: 'Poder Legislativo na CF/88', motivo: 'Espécies normativas do art. 59 da Constituição Federal.' },
    ],
  },
  'sub-10-3': {
    editalRef: 'Conhecimentos Básicos - Administração da Câmara e Transparência',
    preRequisitos: ['sub-10-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-11-12', titulo: 'Transparência e LAI', motivo: 'Portal da Transparência da Câmara e dados abertos de despesas parlamentares.' },
    ],
  },
  'sub-10-4': {
    editalRef: 'Conhecimentos Básicos - CF/88 arts. 1º a 41',
    preRequisitos: [],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-5', titulo: 'Poder Legislativo na CF/88', motivo: 'Organização dos Poderes a partir dos princípios fundamentais.' },
    ],
  },
  'sub-10-5': {
    editalRef: 'Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)',
    preRequisitos: ['sub-10-1', 'sub-10-4'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-1', titulo: 'Regimento Interno da Câmara dos Deputados', motivo: 'Imunidades materiais e formais e prerrogativas regimentais.' },
      { submoduloId: 'sub-10-6', titulo: 'Regimento Comum do Congresso Nacional', motivo: 'Atribuições do Congresso em sessão conjunta.' },
    ],
  },
  'sub-10-6': {
    editalRef: 'Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)',
    preRequisitos: ['sub-10-1', 'sub-10-5'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-1', titulo: 'Regimento Interno da Câmara dos Deputados', motivo: 'Mesa do Congresso Nacional e alternância de cargos.' },
      { submoduloId: 'sub-10-5', titulo: 'Poder Legislativo na CF/88', motivo: 'Deliberação sobre vetos presidenciais e projetos de lei orçamentária.' },
    ],
  },

  // M11
  'sub-11-1': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 1: Estado, Governo e Administração Pública)', preRequisitos: [] },
  'sub-11-2': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 2: Princípios Expressos e Implícitos)', preRequisitos: ['sub-11-1'] },
  'sub-11-3': {
    editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)',
    preRequisitos: ['sub-11-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-10-1', titulo: 'Administração da Câmara dos Deputados', motivo: 'Regime funcional dos servidores legislativos e requisição de pessoal.' },
    ],
  },
  'sub-11-4': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)', preRequisitos: ['sub-11-2'] },
  'sub-11-5': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 5: Atos Administrativos)', preRequisitos: ['sub-11-4'] },
  'sub-11-6': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 6: Licitações e Contratos - Lei 14.133/2021)', preRequisitos: ['sub-11-5'] },
  'sub-11-7': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 7: Serviços Públicos)', preRequisitos: ['sub-11-5'] },
  'sub-11-8': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 8: Controle da Administração Pública)', preRequisitos: ['sub-11-5'] },
  'sub-11-9': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 9: Improbidade Administrativa - Lei 8.429/1992)', preRequisitos: ['sub-11-8'] },
  'sub-11-10': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)', preRequisitos: ['sub-11-5'] },
  'sub-11-11': { editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 11: Processo Administrativo Federal - Lei 9.784/1999)', preRequisitos: ['sub-11-5'] },
  'sub-11-12': {
    editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)',
    preRequisitos: ['sub-11-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-1-6', titulo: 'Governança da Informação e de Dados', motivo: 'Diretrizes de transparência ativa, dados abertos e tutela de privacidade.' },
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Conformidade com a LGPD no uso de modelos de linguagem e prompts.' },
    ],
  },

  // M12
  'sub-12-1': {
    editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 1: Compreensão e Vocabulário Técnico Contemporâneo)',
    preRequisitos: [],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-7', titulo: 'IA Aplicada à Informação', motivo: 'Terminologia contemporânea em inglês de inteligência artificial e RAG.' },
    ],
  },
  'sub-12-2': { editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)', preRequisitos: ['sub-12-1'] },
  'sub-12-3': { editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 2: Relações Lógicas e Discursivas)', preRequisitos: ['sub-12-2'] },
  'sub-12-4': { editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)', preRequisitos: ['sub-12-3'] },

  // M13
  'sub-13-1': {
    editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)',
    preRequisitos: [],
    referenciasCruzadas: [
      { submoduloId: 'sub-13-4', titulo: 'Ortografia, Gêneros Textuais e Morfossintaxe', motivo: 'Tipologias e gêneros textuais segundo Marcuschi.' },
    ],
  },
  'sub-13-2': { editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)', preRequisitos: ['sub-13-1'] },
  'sub-13-3': {
    editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 5: Sintaxe da Pontuação, Concordância e Regência)',
    preRequisitos: ['sub-13-2'],
    referenciasCruzadas: [
      { submoduloId: 'sub-13-4', titulo: 'Ortografia, Gêneros Textuais e Colocação Pronominal', motivo: 'Sintaxe da pontuação e casos especiais de colocação pronominal.' },
    ],
  },
  'sub-13-4': {
    editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)',
    preRequisitos: ['sub-13-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-13-1', titulo: 'Compreensão e Interpretação Textual', motivo: 'Classificação de gêneros em correspondências e normas legislativas.' },
    ],
  },

  // M14
  'sub-14-1': { editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Itens 1, 2 e 3: Suíte Microsoft 365, Redes e Colaboração)', preRequisitos: [] },
  'sub-14-2': {
    editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Item 4: Segurança da Informação, Criptografia e Riscos)',
    preRequisitos: ['sub-14-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-3', titulo: 'Preservação Digital e Repositórios Confiáveis', motivo: 'Uso de criptografia hash para verificação de fixidez.' },
    ],
  },
  'sub-14-3': {
    editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Itens 5, 6 e 7: Inteligência Artificial, Engenharia de Prompts e Ética)',
    preRequisitos: ['sub-14-1'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-4', titulo: 'Inteligência Artificial e Curadoria', motivo: 'Modelos Transformer, LLMs e prompting avançado.' },
    ],
  },
  'sub-14-4': {
    editalRef: 'Conhecimentos Básicos - Tecnologia da Informação (Item 8: Ciência de Dados, CRISP-DM, Estatística e Power BI)',
    preRequisitos: ['sub-6-5', 'sub-6-6'],
    referenciasCruzadas: [
      { submoduloId: 'sub-6-5', titulo: 'Sistemas Informacionais e Bancos de Dados', motivo: 'Modelagem relacional (MER) e extração de dados.' },
      { submoduloId: 'sub-6-6', titulo: 'SQL, Regex e APIs', motivo: 'Consultas SQL e filtros de pré-processamento de dados.' },
    ],
  },
};

// 3. Atualizar cada arquivo de submódulo
let totalAtualizados = 0;

function walkDir(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, callback);
    } else if (f.startsWith('sub-') && f.endsWith('.ts')) {
      callback(full);
    }
  }
}

walkDir(MODULES_DIR, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  const matchId = content.match(/id:\s*['"](sub-[a-z0-9-]+)['"]/);
  if (!matchId) return;

  const subId = matchId[1];
  const meta = SUBMODULES_META[subId];
  if (!meta) {
    console.warn(`[AVISO] Submódulo sem metadados mapeados: ${subId}`);
    return;
  }

  let modificado = false;

  // Inserir editalRef
  if (!content.includes('editalRef:') && meta.editalRef) {
    content = content.replace(/numero:\s*['"][^'"]+['"],/, (match) => {
      return `${match}\n  editalRef: '${meta.editalRef}',`;
    });
    modificado = true;
  }

  // Inserir preRequisitos
  if (!content.includes('preRequisitos:') && meta.preRequisitos !== undefined) {
    content = content.replace(/editalRef:\s*['"][^'"]+['"],/, (match) => {
      return `${match}\n  preRequisitos: ${JSON.stringify(meta.preRequisitos)},`;
    });
    modificado = true;
  }

  // Inserir referenciasCruzadas
  if (!content.includes('referenciasCruzadas:') && meta.referenciasCruzadas && meta.referenciasCruzadas.length > 0) {
    const refJson = JSON.stringify(meta.referenciasCruzadas, null, 4)
      .split('\n')
      .map((line, i) => (i === 0 ? line : '  ' + line))
      .join('\n');
    content = content.replace(/preRequisitos:\s*\[[^\]]*\],/, (match) => {
      return `${match}\n  referenciasCruzadas: ${refJson},`;
    });
    modificado = true;
  }

  // Se houver referenciasCruzadas e ainda não estiver no markdown, anexar bloco "Veja Também"
  if (meta.referenciasCruzadas && meta.referenciasCruzadas.length > 0 && !content.includes('🔗 Veja Também (Articulação Intermódulos)')) {
    const vejaTambemMarkdown = `\n\n---\n\n### 🔗 Veja Também (Articulação Intermódulos)\n` +
      meta.referenciasCruzadas.map((r) => `* **${r.titulo} (${r.submoduloId}):** ${r.motivo}`).join('\n') + `\n`;

    // Localiza o final do teoriaDensaMarkdown antes da crase de fechamento
    // Substitui a última crase do template string que fecha teoriaDensaMarkdown
    const targetPattern = /teoriaDensaMarkdown:\s*`([\s\S]*?)`,\s*(?:secoes|checkpoints)/;
    const match = content.match(targetPattern);
    if (match) {
      const fullMatch = match[0];
      const markdownBody = match[1];
      const updatedMarkdown = markdownBody + vejaTambemMarkdown;
      const updatedBlock = fullMatch.replace(markdownBody, updatedMarkdown);
      content = content.replace(fullMatch, updatedBlock);
      modificado = true;
    }
  }

  if (modificado) {
    fs.writeFileSync(filePath, content, 'utf-8');
    totalAtualizados++;
    console.log(`[ATUALIZADO] ${subId} em ${path.basename(filePath)}`);
  }
});

console.log(`===> Finalizado! ${totalAtualizados} arquivos de submódulos atualizados com sucesso.`);
