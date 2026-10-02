import type { ItemSimuladoAdaptativo } from './types';

export const BASE_QUESTOES_ADAPTATIVAS: ItemSimuladoAdaptativo[] = [
  // M1: FUNDAMENTOS
  {
    id: 'adp-m1-01',
    numero: 1,
    macroModuloId: 'm1',
    submoduloId: '1.1',
    topicoNome: 'Fundamentos e Epistemologia da Documentação',
    item: 'De acordo com a concepção de Suzanne Briet exposta em sua obra canônica, qualquer objeto natural pode ser considerado documento se colocado em relação indexical para servir de indício a um fenômeno.',
    gabarito: 'C',
    justificativa:
      'Para Suzanne Briet (1951), o documento é qualquer indício concreto ou simbólico que é conservado ou registrado com o objetivo de representar, reconstituir ou provar um fenômeno.',
    armadilhaBanca: 'Achar que documentos precisam obrigatoriamente de suporte em papel ou texto escrito.',
    autorOuNormaReferencia: "Suzanne Briet (1951) - Qu'est-ce que la documentation?",
  },
  {
    id: 'adp-m1-02',
    numero: 2,
    macroModuloId: 'm1',
    submoduloId: '1.1',
    topicoNome: 'Conceito de Ciência da Informação por Harold Borko',
    item: 'Segundo Harold Borko, a Ciência da Informação constitui uma disciplina unidisciplinar e pura, desprovida de ramificações práticas ou interdisciplinares com a Biblioteconomia ou a Ciência da Computação.',
    gabarito: 'E',
    justificativa:
      'Em seu artigo clássico de 1968, Harold Borko estabelece categoricamente que a Ciência da Informação é interdisciplinar por natureza, possuindo tanto dimensão de ciência pura quanto de ciência aplicada.',
    armadilhaBanca: 'Emprego do termo restritivo "unidisciplinar" e "desprovida de ramificações práticas".',
    autorOuNormaReferencia: 'Harold Borko (1968) - Information Science: What is it?',
  },
  {
    id: 'adp-m1-03',
    numero: 3,
    macroModuloId: 'm1',
    submoduloId: '1.3',
    topicoNome: 'Legislação e Ética do Bibliotecário',
    item: 'Conforme a Lei nº 4.084/1962, o exercício da profissão de bibliotecário em todo o território nacional é privativo dos bacharéis em Biblioteconomia devidamente registrados nos respectivos Conselhos Regionais.',
    gabarito: 'C',
    justificativa:
      'O art. 2º da Lei Federal nº 4.084/1962 estipula a obrigatoriedade do diploma reconhecido e do registro profissional no CRB para o exercício das atribuições privativas de bibliotecário.',
    armadilhaBanca: 'Supor que o registro em conselho seja facultativo para quem possui diploma.',
    autorOuNormaReferencia: 'Lei Federal nº 4.084/1962 e Decreto nº 56.725/1965',
  },

  // M2: CATALOGAÇÃO & REPRESENTAÇÃO DESCRITIVA
  {
    id: 'adp-m2-01',
    numero: 4,
    macroModuloId: 'm2',
    submoduloId: '2.1',
    topicoNome: 'Modelagem Conceitual IFLA LRM e RDA',
    item: 'No IFLA Library Reference Model (LRM), a entidade "Expressão" corresponde à realização intelectual ou artística de uma Obra na forma de signos alfanuméricos, sonoros ou visuais, independentemente de sua corporificação material física.',
    gabarito: 'C',
    justificativa:
      'No LRM (assim como nos FRBR), a Expressão reside no plano imaterial do conteúdo (o texto específico, a tradução, o arranjo musical), ao passo que a Manifestação e o Item tratam da produção e do suporte físico.',
    armadilhaBanca: 'Confundir Expressão com Manifestação (suporte físico/impressão).',
    autorOuNormaReferencia: 'IFLA Library Reference Model (LRM) e RDA Toolkit',
  },
  {
    id: 'adp-m2-02',
    numero: 5,
    macroModuloId: 'm2',
    submoduloId: '2.2',
    topicoNome: 'Formato MARC 21 Bibliográfico',
    item: 'No formato MARC 21 para dados bibliográficos, os campos do bloco 1XX destinam-se exclusivamente ao registro do título principal e variantes do documento catalogado.',
    gabarito: 'E',
    justificativa:
      'No MARC 21, os campos 1XX são reservados para a Entrada Principal (Autor Pessoal 100, Entidade 110, Evento 111). Os campos de Título residem no bloco 2XX (ex: campo 245).',
    armadilhaBanca: 'Inversão proposital entre bloco 1XX (Entrada Principal) e bloco 2XX (Título e Edição).',
    autorOuNormaReferencia: 'Library of Congress - MARC 21 Format for Bibliographic Data',
  },

  // M3: CLASSIFICAÇÃO & LINGUAGENS DOCUMENTÁRIAS
  {
    id: 'adp-m3-01',
    numero: 6,
    macroModuloId: 'm3',
    submoduloId: '3.1',
    topicoNome: 'Estrutura da Classificação Decimal Universal (CDU)',
    item: 'Na Classificação Decimal Universal (CDU), os sinais de coordenação e adição (sinal +) e extensão consecutiva (sinal /) conectam dois ou mais assuntos correlatos, ao passo que os dois pontos (:) expressam uma relação de subordinação ou reciprocidade conceitual.',
    gabarito: 'C',
    justificativa:
      'Na CDU, o sinal "+" indica adição de assuntos não consecutivos; "/" indica extensão contínua; e os ":" indicam a relação simples (associação/interdependência entre assuntos).',
    armadilhaBanca: 'Trocar o uso do sinal de relação (:) pelo sinal de adição (+).',
    autorOuNormaReferencia: 'Norma CDU / Tabela Principal e Auxiliares Comuns',
  },
  {
    id: 'adp-m3-02',
    numero: 7,
    macroModuloId: 'm3',
    submoduloId: '3.2',
    topicoNome: 'Tesauros e Relações Semânticas',
    item: 'Em um tesauro documentário estruturado conforme a NBR ISO 25964, a relação entre um termo geral e seus termos específicos imediatos é denominada relação de equivalência (USE/UP).',
    gabarito: 'E',
    justificativa:
      'A relação de equivalência (USE / UP) trata de sinonímia ou quase-sinonímia. A relação entre termo geral e termos específicos é estritamente uma relação hierárquica (TG / TE).',
    armadilhaBanca: 'Trocar o conceito de relação hierárquica pelo de relação de equivalência.',
    autorOuNormaReferencia: 'ISO 25964 e ABNT - Tesauros Documentários',
  },

  // M4: INDEXAÇÃO E RECUPERAÇÃO DA INFORMAÇÃO
  {
    id: 'adp-m4-01',
    numero: 8,
    macroModuloId: 'm4',
    submoduloId: '4.1',
    topicoNome: 'Revocação versus Precisão (Lancaster)',
    item: 'Nos sistemas de recuperação de informação, a elevação da especificidade dos termos de indexação tende a aumentar a taxa de revocação do sistema, reduzindo paralelamente a sua precisão.',
    gabarito: 'E',
    justificativa:
      'A relação clássica descrita por Lancaster (2004) demonstra o inverso: termos altamente específicos aumentam a PRECISÃO (diminuem o ruído), mas reduzem a revocação (deixam de recuperar documentos afins com termos genéricos).',
    armadilhaBanca: 'Inversão proposital da regra áurea da recuperação da informação de Lancaster.',
    autorOuNormaReferencia: 'F. W. Lancaster (2004) - Indexação e Resumos: Teoria e Prática',
  },
  {
    id: 'adp-m4-02',
    numero: 9,
    macroModuloId: 'm4',
    submoduloId: '4.2',
    topicoNome: 'NBR 6028 e Tipologia de Resumos',
    item: 'De acordo com a NBR 6028 da ABNT, o resumo indicativo apresenta as finalidades, a metodologia, os resultados e as conclusões do documento original, dispensando a leitura do texto completo para tomada de decisão.',
    gabarito: 'E',
    justificativa:
      'A definição apresentada é do resumo INFORMATIVO. O resumo indicativo apenas indica os pontos principais do documento sem apresentar dados qualitativos e quantitativos, não dispensando a consulta do original.',
    armadilhaBanca: 'Inverter as características do resumo indicativo com o resumo informativo.',
    autorOuNormaReferencia: 'ABNT NBR 6028:2021 - Informação e documentação: Resumo',
  },

  // M5: DESENVOLVIMENTO DE COLEÇÕES
  {
    id: 'adp-m5-01',
    numero: 10,
    macroModuloId: 'm5',
    submoduloId: '5.1',
    topicoNome: 'Processo Cíclico de Desenvolvimento de Coleções',
    item: 'Segundo Waldomiro Vergueiro, o desbastamento difere do descarte porque o primeiro transfere materiais de baixo uso para depósitos ou áreas de menor circulação sem excluí-los do patrimônio, ao passo que o descarte consiste na eliminação definitiva do acervo.',
    gabarito: 'C',
    justificativa:
      'Vergueiro (1989) preconiza que o desbastamento (relocação/remoção temporária ou para acervo de menor acesso) não acarreta a exclusão patrimonial, enquanto o descarte é o expurgo irreversível.',
    armadilhaBanca: 'Tratar desbastamento e descarte como atos idênticos de anulação patrimonial.',
    autorOuNormaReferencia: 'Waldomiro Vergueiro (1989) - Desenvolvimento de Coleções',
  },
  {
    id: 'adp-m5-02',
    numero: 11,
    macroModuloId: 'm5',
    submoduloId: '5.2',
    topicoNome: 'Políticas de Aquisição e Compras Públicas',
    item: 'Em bibliotecas de órgãos públicos, a aquisição de obras raras ou esgotadas para reconstituição de acervos históricos parlamentares pode ser realizada mediante processo de inexigibilidade de licitação, desde que comprovada a inviabilidade de competição.',
    gabarito: 'C',
    justificativa:
      'Nos termos da Nova Lei de Licitações (Lei nº 14.133/2021) e da Lei 8.666/93, a compra de obras com fornecedor exclusivo ou singularidade que impossibilite competição configura hipótese legítima de inexigibilidade.',
    armadilhaBanca: 'Supor que todo e qualquer livro deva passar obrigatoriamente por pregão eletrônico ordinário.',
    autorOuNormaReferencia: 'Lei nº 14.133/2021 e Prática em Bibliotecas Públicas/Parlamentares',
  },

  // M6: SERVIÇOS DE REFERÊNCIA E ESTUDO DE USUÁRIOS
  {
    id: 'adp-m6-01',
    numero: 12,
    macroModuloId: 'm6',
    submoduloId: '6.1',
    topicoNome: 'Entrevista de Referência e DSI',
    item: 'O serviço de Disseminação Seletiva da Informação (DSI) é caracterizado pelo fornecimento passivo de informações a qualquer cidadão que compareça fisicamente ao balcão de referência da biblioteca.',
    gabarito: 'E',
    justificativa:
      'O DSI é um serviço essencialmente PROATIVO e PERSONALIZADO, baseado no perfil de interesses de usuários previamente cadastrados (ex: parlamentares e comissões da Câmara).',
    armadilhaBanca: 'Reduzir o DSI a um atendimento passivo presencial indiscriminado.',
    autorOuNormaReferencia: 'Dennis Grogan / Figueiredo - Serviços de Referência',
  },

  // M7: GESTÃO E AUTOMAÇÃO DE UNIDADES DE INFORMAÇÃO
  {
    id: 'adp-m7-01',
    numero: 13,
    macroModuloId: 'm7',
    submoduloId: '7.1',
    topicoNome: 'Interoperabilidade e Protocolos (OAI-PMH e Z39.50)',
    item: 'O protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) baseia-se na arquitetura cliente-servidor para a coleta automatizada de metadados em repositórios digitais abertos utilizando XML sobre HTTP.',
    gabarito: 'C',
    justificativa:
      'O OAI-PMH é o padrão internacional para interoperabilidade e coleta (harvesting) de metadados entre repositórios digitais e agregadores, empregando o esquema Dublin Core como formato mínimo obrigatório.',
    armadilhaBanca: 'Confundir coleta de metadados (OAI-PMH) com busca distribuída em tempo real (Z39.50/SRU).',
    autorOuNormaReferencia: 'Open Archives Initiative (OAI) & DSpace Architecture',
  },

  // M8: LEGISLAÇÃO DA INFORMAÇÃO, LAI & PRESERVAÇÃO
  {
    id: 'adp-m8-01',
    numero: 14,
    macroModuloId: 'm8',
    submoduloId: '8.1',
    topicoNome: 'Classificação de Sigilo na Lei de Acesso à Informação',
    item: 'Conforme preceitua a Lei nº 12.527/2011 (LAI), os prazos máximos de restrição de acesso a informações no âmbito da administração pública federal são: ultrassecreta (25 anos), secreta (15 anos) e reservada (5 anos).',
    gabarito: 'C',
    justificativa:
      'O art. 24, § 1º, da Lei 12.527/2011 estabelece expressamente os prazos máximos de 25, 15 e 5 anos para as categorias ultrassecreta, secreta e reservada, respectivamente.',
    armadilhaBanca: 'Troca de prazos (ex: afirmar que reservada dura 10 anos ou secreta 20 anos).',
    autorOuNormaReferencia: 'Lei Federal nº 12.527/2011 (LAI), art. 24',
  },
  {
    id: 'adp-m8-02',
    numero: 15,
    macroModuloId: 'm8',
    submoduloId: '8.2',
    topicoNome: 'Conservação Preventiva de Acervos',
    item: 'A higienização mecânica de livros em bibliotecas históricas deve ser realizada preferencialmente com soluções alcoólicas ou hipoclorito de sódio aplicados diretamente sobre as folhas em papel de trapo.',
    gabarito: 'E',
    justificativa:
      'O uso de líquidos químicos como álcool e cloro é expressamente contraindicado na conservação preventiva, pois causa oxidação acelerada, dissolução de tintas e degradação da celulose. A higienização correta utiliza trinchas macias, pó de borracha neutro e aspiradores com filtro HEPA.',
    armadilhaBanca: 'Supor que a desinfecção doméstica química seja aplicável a documentos bibliográficos raros.',
    autorOuNormaReferencia: 'Cassares & Spinelli - Manual de Conservação e Preservação de Documentos',
  },

  // M9: SISTEMAS DE INFORMAÇÃO PARLAMENTAR & CÂMARA DOS DEPUTADOS
  {
    id: 'adp-m9-01',
    numero: 16,
    macroModuloId: 'm9',
    submoduloId: '9.1',
    topicoNome: 'Organização da Biblioteca da Câmara dos Deputados',
    item: 'A Biblioteca da Câmara dos Deputados adota a Classificação Decimal de Dewey (CDD) como sistema primário de classificação para seu acervo jurídico e legislativo especializado.',
    gabarito: 'E',
    justificativa:
      'A Biblioteca da Câmara dos Deputados e do Senado Federal utilizam primariamente a Classificação Decimal Universal (CDU) combinada com esquemas próprios e o Vocabulário Controlado do Congresso Nacional (VCCN) para matérias legislativas e jurídicas.',
    armadilhaBanca: 'Trocar CDU por CDD na prática de bibliotecas parlamentares brasileiras.',
    autorOuNormaReferencia: 'Regimento Interno e Prática Técnica da Biblioteca da Câmara dos Deputados',
  },

  // M10: REPOSITÓRIOS E COMPETÊNCIA EM INFORMAÇÃO
  {
    id: 'adp-m10-01',
    numero: 17,
    macroModuloId: 'm10',
    submoduloId: '10.1',
    topicoNome: 'Modelo OAIS (Open Archival Information System)',
    item: 'Na arquitetura de preservação digital OAIS (ISO 14721), o pacote Submission Information Package (SIP) é aquele efetivamente preservado a longo prazo no módulo de armazenamento arquivístico.',
    gabarito: 'E',
    justificativa:
      'No modelo OAIS: o SIP é o pacote submetido pelo produtor; o AIP (Archival Information Package) é o pacote efetivamente armazenado e preservado; e o DIP (Dissemination Information Package) é entregue ao consumidor.',
    armadilhaBanca: 'Inversão conceitual entre SIP (submissão), AIP (armazenamento permanente) e DIP (difusão).',
    autorOuNormaReferencia: 'ISO 14721 - Open Archival Information System (OAIS)',
  },
];
