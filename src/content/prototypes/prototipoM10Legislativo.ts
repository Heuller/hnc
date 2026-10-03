import type { CebraspeQuestion } from '../../domain/types';

export const prototipoM10Legislativo: CebraspeQuestion[] = [
  {
    id: 'e4-m10-01',
    numero: 1,
    macroModuloId: 'M10',
    submoduloId: '10.1',
    item: 'No âmbito da Câmara dos Deputados, a Mesa Diretora compõe-se do Presidente, de dois Vice-Presidentes e de quatro Secretários, contando ainda com quatro Suplentes de Secretário para a substituição dos titulares em suas ausências ou impedimentos.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o art. 14 do Regimento Interno da Câmara dos Deputados (RICD), a Mesa é o órgão diretor dos trabalhos legislativos e dos serviços administrativos da Casa, compondo-se do Presidente, de dois Vice-Presidentes e de quatro Secretários, havendo quatro Suplentes de Secretário para a sua recomposição eventual.',
    armadilhaBanca: 'Composição exata dos membros da Mesa Diretora da Câmara dos Deputados segundo o RICD.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-02',
    numero: 2,
    macroModuloId: 'M10',
    submoduloId: '10.1',
    item: 'Conforme o Regimento Interno da Câmara dos Deputados, qualquer deputado federal, individualmente e a seu livre critério, pode avocar para votação no Plenário projeto de lei ordinária aprovado em caráter conclusivo pelas comissões permanentes.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Pegadinha Regimental / Quórum de Recurso]: Conforme o art. 58, § 2º, I da Constituição Federal e o art. 24, II do RICD, para que um projeto aprovado conclusivamente pelas comissões seja submetido ao Plenário, é obrigatório recurso subscrito por pelo menos 1/10 (um décimo) dos membros da Câmara dos Deputados (52 deputados). Nenhum parlamentar pode avocar a matéria de forma individual e unilateral.',
    armadilhaBanca: 'Afirmação de que um único parlamentar pode anular o poder terminativo de uma comissão.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-03',
    numero: 3,
    macroModuloId: 'M10',
    submoduloId: '10.2',
    item: 'As Propostas de Emenda à Constituição (PEC) são discutidas e votadas em dois turnos na Câmara dos Deputados e no Senado Federal, exigindo-se para sua aprovação o voto favorável de três quintos dos membros de cada Casa parlamentar em ambos os turnos.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o art. 60, § 2º da Constituição Federal de 1988 e o RICD, a proposta de emenda será discutida e votada em cada Casa do Congresso Nacional, em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos respectivos membros (308 deputados na CD e 49 senadores no SF).',
    armadilhaBanca: 'Regra constitucional estrita de tramitação e quórum qualificado de PEC.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-04',
    numero: 4,
    macroModuloId: 'M10',
    submoduloId: '10.2',
    item: 'A aprovação de Projeto de Lei Complementar na Câmara dos Deputados exige o quórum de três quintos dos deputados presentes à sessão deliberativa, dispensando-se o requisito de maioria absoluta da Casa.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Quórum Invertido]: Nos termos do art. 69 da Constituição Federal, as leis complementares serão aprovadas por MAIORIA ABSOLUTA (primeiro número inteiro superior à metade dos membros da Casa = 257 deputados), e não por três quintos de presentes. Três quintos é o quórum de Emenda Constitucional (calculado também sobre a totalidade de membros).',
    armadilhaBanca: 'Confusão deliberada entre maioria absoluta de Lei Complementar e três quintos de PEC.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-05',
    numero: 5,
    macroModuloId: 'M10',
    submoduloId: '10.3',
    item: 'O Centro de Documentação e Informação (CEDI) da Câmara dos Deputados, subordinado à Diretoria-Geral da instituição, é o órgão responsável pela custódia, organização e disseminação da memória arquivística, bibliográfica e legislativa da Casa, integrando a Biblioteca Pedro Aleixo.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o Regulamento da Câmara dos Deputados, o CEDI é vinculado diretamente à Diretoria-Geral e compreende a Coordenação de Arquivo, a Coordenação de Publicações e a Coordenação de Biblioteca (Biblioteca Pedro Aleixo, cujo histórico remonta à Assembleia Constituinte de 1823).',
    armadilhaBanca: 'Estrutura administrativa e histórico do CEDI e da Biblioteca Pedro Aleixo.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-06',
    numero: 6,
    macroModuloId: 'M10',
    submoduloId: '10.3',
    item: 'A Rede Virtual de Bibliotecas (RVBI) é uma rede de cooperação técnica bibliográfica coordenada pelo Centro de Documentação e Informação da Câmara dos Deputados e subordinada hierarquicamente à Fundação Biblioteca Nacional.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão Institucional]: A RVBI é coordenada pela Biblioteca Acadêmico Luiz Viana Filho do SENADO FEDERAL (antiga Rede SABI), não pela Câmara dos Deputados, e NÃO possui qualquer subordinação à Biblioteca Nacional, tratando-se de consórcio cooperativo interinstitucional do Poder Legislativo e Judiciário Federal.',
    armadilhaBanca: 'Atribuição da coordenação da RVBI à Câmara dos Deputados ou à Biblioteca Nacional.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-07',
    numero: 7,
    macroModuloId: 'M10',
    submoduloId: '10.3',
    item: 'A cooperação técnica e bibliográfica entre as instituições participantes da RVBI assenta-se na descentralização da alimentação de dados e no compartilhamento centralizado de um catálogo único de registros bibliográficos e de autoridades sob o padrão internacional MARC 21.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. A RVBI funciona sob modelo cooperativo descentralizado de catalogação e centralizado no armazenamento: cada biblioteca cooperante cataloga seus documentos na mesma base compartilhada, evitando duplicação de esforços e unificando o controle de autoridades em MARC 21.',
    armadilhaBanca: 'Princípio operacional da catalogação cooperativa na RVBI.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-08',
    numero: 8,
    macroModuloId: 'M10',
    submoduloId: '10.3',
    item: 'Por envolver órgãos dos Poderes Legislativo e Judiciário, as bibliotecas consorciadas à RVBI são estritamente impedidas de adotar o formato MARC 21 em seus acervos locais, devendo utilizar exclusivamente planilhas Dublin Core simplificadas.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Categórico Absoluto / Falsidade Técnica]: O formato oficial e obrigatório da RVBI é exatamente o MARC 21 (Bibliográfico e de Autoridades), gerido no sistema integrado Aleph, com alto nível de detalhamento e conformidade com as regras internacionais de catalogação.',
    armadilhaBanca: 'Afirmação de que a RVBI veda o formato MARC 21.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-09',
    numero: 9,
    macroModuloId: 'M10',
    submoduloId: '10.4',
    item: 'Nos termos da Lei Federal nº 12.527/2011 (Lei de Acesso à Informação), o prazo ordinário para a prestação de informações por órgãos públicos é de até 20 dias, admitindo-se prorrogação justificada por até 10 dias adicionais mediante ciência expressa do requerente.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme o art. 11, § 1º e § 2º da Lei 12.527/2011 (LAI), caso a informação não possa ser concedida de imediato, o órgão tem até 20 dias para responder, prazo este que poderá ser prorrogado por mais 10 dias mediante justificativa expressa encaminhada ao interessado.',
    armadilhaBanca: 'Prazos legais da LAI (20 dias prorrogáveis por mais 10 dias).',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
  {
    id: 'e4-m10-10',
    numero: 10,
    macroModuloId: 'M10',
    submoduloId: '10.4',
    item: 'Sob a égide da Lei de Acesso à Informação (LAI), os prazos máximos de restrição de acesso a informações classificadas no âmbito da administração pública são de 25 anos para documentos reservados, 15 anos para documentos secretos e 5 anos para documentos ultrassecretos.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão de Prazos]: A assertiva inverteu completamente os graus de sigilo e os prazos! Conforme o art. 24, § 1º da Lei 12.527/2011, os prazos máximos são: Ultrassecreta = 25 anos; Secreta = 15 anos; Reservada = 5 anos.',
    armadilhaBanca: 'Inversão dos prazos máximos de restrição de acesso da LAI (troca de ultrassecreto por reservado).',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M10)',
      verificado: true,
    },
  },
];
