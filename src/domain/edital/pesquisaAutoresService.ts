// Serviço Canônico de Pesquisa de Autores e Fontes Primárias (Fase E2)
// Referência: Edital nº 1/2026 - Analista Legislativo - Bibliotecário (Cebraspe)
// HNC - Heuller na Câmara

export interface AutorCanonico {
  nome: string;
  nacionalidade: string;
  obraPrincipal: string;
  anoReferencia: number | string;
  conceitoChave: string;
  citacaoLiteralOuDefinicao: string;
  armadilhaBancaRecorrente: string;
}

export interface CompendioModuloPesquisa {
  moduloId: string;
  moduloCodigo: string;
  nome: string;
  bloco: 'CONHECIMENTOS_ESPECIFICOS' | 'CONHECIMENTOS_BASICOS';
  submodulosIds: string[];
  autoresPrincipais: AutorCanonico[];
  normasOuRegulamentos: Array<{
    codigo: string;
    titulo: string;
    orgaoEmissor: string;
    anoEdicao: number | string;
    pontoCriticoCebraspe: string;
  }>;
  conceitosAltaFrequencia: Array<{
    termo: string;
    definicaoOficial: string;
    sinonimosOuVariantes: string[];
    pegadinhaBanca: string;
  }>;
}

export const COMPENDIO_PESQUISA_AUTORES: Record<string, CompendioModuloPesquisa> = {
  m3: {
    moduloId: 'm3',
    moduloCodigo: 'M3',
    nome: 'Classificação Documentária, CDD, CDU & CDDir',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['3.1', '3.2', '3.3', '3.4'],
    autoresPrincipais: [
      {
        nome: 'Melvil Dewey',
        nacionalidade: 'Norte-Americano',
        obraPrincipal: 'Decimal Classification and Relative Index (CDD 23ª ed.)',
        anoReferencia: 1876,
        conceitoChave: 'Classificação decimal hierárquica baseada em 10 classes fundamentais e notação pura',
        citacaoLiteralOuDefinicao:
          'O conhecimento humano é subdividido em 10 classes principais (000 a 900), com princípio decimal mnemônico e Tabelas Auxiliares T1 a T6 para síntese de assuntos.',
        armadilhaBancaRecorrente:
          'Afirmar que a CDD utiliza notação mista ou que suas tabelas auxiliares podem ser utilizadas de forma isolada sem número-base.',
      },
      {
        nome: 'Paul Otlet e Henri La Fontaine',
        nacionalidade: 'Belga',
        obraPrincipal: 'Classification Décimale Universelle (CDU)',
        anoReferencia: 1905,
        conceitoChave: 'Classificação facetada/analítico-sintética com notação mista e sinais auxiliares relacionais',
        citacaoLiteralOuDefinicao:
          'Permite a síntese e a coordenação de conceitos complexos por meio de sinais relacionais (+, /, :, ::, [ ]) e auxiliares comuns de lugar, tempo, forma, língua e pessoas.',
        armadilhaBancaRecorrente:
          'Inverter as funções do sinal de dois pontos simples (:) que denota relação coordenada reversível com o sinal de dois pontos duplos (::) que fixa relação não reversível de ordenação.',
      },
      {
        nome: 'Doris de Queiroz Carvalho',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'Classificação Decimal de Direito (CDDir)',
        anoReferencia: 1977,
        conceitoChave: 'Adaptação sistemática do Direito Positivo Brasileiro e Romano-Germânico',
        citacaoLiteralOuDefinicao:
          'Estrutura decimal aplicada ao Direito: 340 (Direito Geral), 341 (Internacional), 342 (Público/Constitucional/Administrativo), 343 (Penal), 344 (Trabalho/Previdência), 345 (Processual Civil), 346 (Civil), 347 (Comercial).',
        armadilhaBancaRecorrente:
          'Afirmar que a CDDir segue estritamente a Common Law norte-americana da CDD pura, ignorando sua calibração para a legislação brasileira.',
      },
      {
        nome: 'F. W. Lancaster',
        nacionalidade: 'Britânico/Norte-Americano',
        obraPrincipal: 'Indexação e Resumos: Teoria e Prática',
        anoReferencia: 1993,
        conceitoChave: 'Processo bifásico de indexação: Análise Conceitual e Tradução Terminológica',
        citacaoLiteralOuDefinicao:
          'A indexação compreende a identificação do assunto central e conceitos secundários na análise conceitual, seguida de sua tradução para termos de um vocabulário controlado ou linguagem documentária.',
        armadilhaBancaRecorrente:
          'Afirmar que o aumento da exaustividade na indexação acarreta necessariamente maior precisão na busca (na realidade, eleva a revocação e reduz a precisão).',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'ABNT NBR 12676:1992',
        titulo: 'Métodos para análise de documentos, determinação de seus assuntos e seleção de termos de indexação',
        orgaoEmissor: 'ABNT',
        anoEdicao: 1992,
        pontoCriticoCebraspe:
          'Etapas sequenciais da análise documental: exame do documento, identificação dos conceitos e seleção dos termos de representação.',
      },
      {
        codigo: 'ISO 25964-1/2',
        titulo: 'Thesauri and interoperability with other vocabularies',
        orgaoEmissor: 'ISO',
        anoEdicao: 2011,
        pontoCriticoCebraspe:
          'Definição das relações simétricas e assimétricas em tesauros: equivalência (USE/UP), hierarquia (TG/TE) e associação (TR).',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Notação Mista da CDU',
        definicaoOficial: 'Uso combinado de algarismos arábicos, letras e sinais tipográficos matemáticos e de pontuação.',
        sinonimosOuVariantes: ['Síntese notacional', 'Composição facetada'],
        pegadinhaBanca: 'Afirmar que a CDU possui notação pura decimal assim como a CDD.',
      },
      {
        termo: 'Garantia Literária (Literary Warrant)',
        definicaoOficial: 'Princípio de Hulme segundo o qual uma classe ou termo só deve constar no sistema se houver literatura existente sobre ele.',
        sinonimosOuVariantes: ['Garantia de assunto', 'Validação documental'],
        pegadinhaBanca: 'Atribuir a garantia literária a Ranganathan ou Melvil Dewey.',
      },
    ],
  },

  m4: {
    moduloId: 'm4',
    moduloCodigo: 'M4',
    nome: 'Recuperação da Informação, Fontes & Usuários',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['4.1', '4.2', '4.3', '4.4'],
    autoresPrincipais: [
      {
        nome: 'Denis Grogan',
        nacionalidade: 'Britânico',
        obraPrincipal: 'A Prática do Serviço de Referência',
        anoReferencia: 1979,
        conceitoChave: 'As 8 fases cíclicas da Entrevista de Referência',
        citacaoLiteralOuDefinicao:
          'O bibliotecário atua como intermediário entre a mente do consulente e a estrutura do conhecimento, decodificando o problema em necessidade, questão formulada e estratégia negociada.',
        armadilhaBancaRecorrente:
          'Inverter a ordem entre a questão formulada pelo usuário (3ª fase) e a necessidade de informação real (2ª fase), ou suprimir a fase de negociação.',
      },
      {
        nome: 'Robert S. Taylor',
        nacionalidade: 'Norte-Americano',
        obraPrincipal: 'Question-Negotiation and Information Seeking in Libraries',
        anoReferencia: 1968,
        conceitoChave: 'Os Quatro Níveis de Necessidade de Informação (Q1 a Q4)',
        citacaoLiteralOuDefinicao:
          'Q1 (Visceral - necessidade vaga inconsciente), Q2 (Consciente - necessidade mental reconhecida), Q3 (Formalizada - expressa em linguagem natural), Q4 (Comprometida - adaptada ao sistema).',
        armadilhaBancaRecorrente:
          'Afirmar que a necessidade Q4 é aquela formulada oralmente ao bibliotecário (esta é a Q3; a Q4 já está adaptada à sintaxe e aos descritores do sistema).',
      },
      {
        nome: 'Ricardo Baeza-Yates e Berthier Ribeiro-Neto',
        nacionalidade: 'Chileno / Brasileiro',
        obraPrincipal: 'Modern Information Retrieval',
        anoReferencia: 1999,
        conceitoChave: 'Modelos de RI e Métricas de Eficácia (Recall, Precision, Fallout)',
        citacaoLiteralOuDefinicao:
          'A eficácia de um sistema de recuperação da informação é avaliada pela Revocação (relevantes recuperados sobre total de relevantes no acervo) e pela Precisão (relevantes recuperados sobre total de recuperados).',
        armadilhaBancaRecorrente:
          'Inverter o denominador da fórmula de Precisão com o da Revocação, ou afirmar que é possível maximizar ambos a 100% simultaneamente em bases abertas.',
      },
      {
        nome: 'Murilo Bastos da Cunha',
        nacionalidade: 'Brasileiro',
        obraPrincipal: 'Para Saber Mais: Fontes de Informação em Ciência e Tecnologia',
        anoReferencia: 2001,
        conceitoChave: 'Tipologia das Fontes de Informação e Fontes Jurídicas Especializadas',
        citacaoLiteralOuDefinicao:
          'Fontes primárias contêm dados originais; secundárias organizam e referenciam as primárias; terciárias guiam o usuário para fontes primárias e secundárias.',
        armadilhaBancaRecorrente:
          'Classificar bibliografias, enciclopédias ou catálogos de biblioteca como fontes primárias em vez de secundárias/terciárias.',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'LexML Brasil',
        titulo: 'Padrão de Metadados e Identificadores Uniformes de Recursos Legislativos e Jurídicos (URN)',
        orgaoEmissor: 'Senado Federal / Prodasen / Comunidade LexML',
        anoEdicao: 2009,
        pontoCriticoCebraspe:
          'Uso de URN persistente para individualizar normas federais, estaduais e municipais, e integração com o catálogo da RVBI.',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Disseminação Seletiva da Informação (DSI)',
        definicaoOficial: 'Serviço personalizado proativo que envia novos documentos aos usuários com base em perfis de interesse pré-cadastrados.',
        sinonimosOuVariantes: ['Selective Dissemination of Information (SDI)', 'Alerta informacional'],
        pegadinhaBanca: 'Afirmar que o DSI é um serviço passivo prestado apenas mediante demanda espontânea no balcão.',
      },
      {
        termo: 'Ponto de Transição de Goffman',
        definicaoOficial: 'Região da curva de frequência de palavras onde os termos possuem máxima capacidade de discriminação temática.',
        sinonimosOuVariantes: ['Transition Point', 'T-Point'],
        pegadinhaBanca: 'Afirmar que as palavras de maior frequência total em um texto são as melhores para indexação.',
      },
    ],
  },

  m5: {
    moduloId: 'm5',
    moduloCodigo: 'M5',
    nome: 'Gestão de Unidades de Informação & Coleções',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['5.1', '5.2', '5.3', '5.4'],
    autoresPrincipais: [
      {
        nome: 'Waldomiro Vergueiro',
        nacionalidade: 'Brasileiro',
        obraPrincipal: 'Desenvolvimento de Coleções / Seleção de Materiais de Informação',
        anoReferencia: 1989,
        conceitoChave: 'O Processo Cíclico de Desenvolvimento de Coleções em 6 Etapas',
        citacaoLiteralOuDefinicao:
          'O desenvolvimento de coleções é um processo ininterrupto composto por: Estudo da Comunidade, Seleção, Aquisição, Desbastamento/Descarte, Avaliação e Preservação.',
        armadilhaBancaRecorrente:
          'Confundir desbastamento (remanejamento de materiais para depósito de menor acesso) com descarte (saída definitiva da obra do patrimônio da biblioteca).',
      },
      {
        nome: 'F. W. Lancaster',
        nacionalidade: 'Britânico / Norte-Americano',
        obraPrincipal: 'Seus Serviços de Informação: Como Avaliar',
        anoReferencia: 1996,
        conceitoChave: 'Métodos Quantitativos e Qualitativos de Avaliação de Coleções',
        citacaoLiteralOuDefinicao:
          'A avaliação pode ser centrada na coleção (listas de verificação, idade do acervo, fórmulas matemáticas) ou centrada no usuário (estatísticas de uso, empréstimos, disponibilidade nas estantes).',
        armadilhaBancaRecorrente:
          'Afirmar que a avaliação baseada em listas de verificação (checklists) é um método centrado no usuário e não na coleção.',
      },
      {
        nome: 'Maria Christina Barbosa de Almeida',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'Planejamento de Bibliotecas e Serviços de Informação',
        anoReferencia: 2005,
        conceitoChave: 'Níveis de Planejamento em Bibliotecas (Estratégico, Tático e Operacional)',
        citacaoLiteralOuDefinicao:
          'O planejamento estratégico define a visão, missão e macro-objetivos de longo prazo; o tático aloca recursos por setor; o operacional estabelece rotinas e planos de ação de curto prazo.',
        armadilhaBancaRecorrente:
          'Atribuir a formulação de rotinas diárias e escalas de atendimento ao planejamento estratégico.',
      },
      {
        nome: 'Ikujiro Nonaka e Hirotaka Takeuchi',
        nacionalidade: 'Japonesa',
        obraPrincipal: 'The Knowledge-Creating Company (Modelo SECI)',
        anoReferencia: 1995,
        conceitoChave: 'A Espiral do Conhecimento: Tácito vs. Explícito',
        citacaoLiteralOuDefinicao:
          'O conhecimento tácito se transforma em explícito e vice-versa em quatro modos: Socialização (tácito para tácito), Externalização (tácito para explícito), Combinação (explícito para explícito) e Internalização (explícito para tácito).',
        armadilhaBancaRecorrente:
          'Trocar as definições de Externalização (que gera conceitos expressos em documentos) com Internalização (apropriação e aprendizado individual).',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'IFLA Guidelines for Collection Development',
        titulo: 'Diretrizes da IFLA para Política de Desenvolvimento de Coleções',
        orgaoEmissor: 'IFLA',
        anoEdicao: 2001,
        pontoCriticoCebraspe:
          'Estrutura formal do documento de política: missão institucional, critérios de seleção, responsabilidade de escolha e cláusulas contra censura ideológica.',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Método CREW (Continuous Re-evaluation, Weeding, and Exchanging)',
        definicaoOficial: 'Metodologia estruturada de descarte e desbaste contínuo baseada na fórmula MUSTIE de obsolescência e danos físicos.',
        sinonimosOuVariantes: ['Fórmula MUSTIE', 'Descarte planejado'],
        pegadinhaBanca: 'Afirmar que bibliotecas públicas e legislativas são proibidas de realizar descarte sob qualquer hipótese.',
      },
    ],
  },

  m6: {
    moduloId: 'm6',
    moduloCodigo: 'M6',
    nome: 'Bibliotecas Digitais, Repositórios, IA & RAG',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['6.1', '6.2', '6.3', '6.4'],
    autoresPrincipais: [
      {
        nome: 'Open Archives Initiative (OAI)',
        nacionalidade: 'Consórcio Internacional',
        obraPrincipal: 'The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH v2.0)',
        anoReferencia: 2002,
        conceitoChave: 'Protocolo de Coleta e Interoperabilidade de Metadados em Repositórios Digitais',
        citacaoLiteralOuDefinicao:
          'Opera sobre HTTP com requisições GET/POST e respostas estruturadas em XML, permitindo que Service Providers colham metadados em lote de Data Providers.',
        armadilhaBancaRecorrente:
          'Afirmar que o OAI-PMH colhe os arquivos binários dos documentos (PDFs/vídeos), quando na verdade colhe estritamente metadados estruturados.',
      },
      {
        nome: 'DSpace Community (DuraSpace / Lyrasis)',
        nacionalidade: 'MIT / HP Labs',
        obraPrincipal: 'DSpace System Documentation & Data Model',
        anoReferencia: 2002,
        conceitoChave: 'Arquitetura de Objetos Digitais em Repositórios Institucionais',
        citacaoLiteralOuDefinicao:
          'Modelo hierárquico rígido: Comunidades congregam Subcomunidades ou Coleções; Coleções contêm Itens; Itens possuem metadados Dublin Core e agregam Bundles; Bundles contêm Bitstreams.',
        armadilhaBancaRecorrente:
          'Afirmar que os metadados Dublin Core no DSpace ficam associados diretamente aos Bitstreams e não aos Itens.',
      },
      {
        nome: 'IFLA / UNESCO',
        nacionalidade: 'Internacional',
        obraPrincipal: 'IFLA Statement on Libraries and Artificial Intelligence',
        anoReferencia: 2023,
        conceitoChave: 'Ética, Transparência e Mitigação de Vieses de IA em Bibliotecas',
        citacaoLiteralOuDefinicao:
          'As bibliotecas devem promover o acesso equitativo à IA, garantindo a proteção da privacidade do usuário, transparência algorítmica e combate às alucinações e desinformação.',
        armadilhaBancaRecorrente:
          'Afirmar que a adoção de LLMs em bibliotecas legislativas substitui o controle de autoridade humano e a validação canônica de fontes.',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'RFC 5013 (ANSI/NISO Z39.85)',
        titulo: 'The Dublin Core Metadata Element Set',
        orgaoEmissor: 'DCMI / IETF',
        anoEdicao: 2007,
        pontoCriticoCebraspe:
          'Os 15 elementos básicos: Title, Creator, Subject, Description, Publisher, Contributor, Date, Type, Format, Identifier, Source, Language, Relation, Coverage, Rights.',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Retrieval-Augmented Generation (RAG)',
        definicaoOficial: 'Arquitetura de IA que combina busca vetorial semântica em bases de documentos confiáveis com modelos geradores para fornecer respostas fundamentadas com links de citação.',
        sinonimosOuVariantes: ['Geração Aumentada por Recuperação', 'Busca Híbrida'],
        pegadinhaBanca: 'Afirmar que sistemas RAG dispensam armazenamento de documentos ou bancos de vetores por realizarem fine-tuning dos pesos do modelo.',
      },
    ],
  },

  m7: {
    moduloId: 'm7',
    moduloCodigo: 'M7',
    nome: 'Preservação, Conservação & Modelo OAIS',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['7.1', '7.2', '7.3', '7.4'],
    autoresPrincipais: [
      {
        nome: 'CCSDS / ISO',
        nacionalidade: 'Internacional',
        obraPrincipal: 'ISO 14721: Open Archival Information System (OAIS)',
        anoReferencia: 2012,
        conceitoChave: 'Modelo de Referência para Preservação Digital a Longo Prazo',
        citacaoLiteralOuDefinicao:
          'Define os pacotes SIP (submissão pelo produtor), AIP (armazenamento arquivístico permanente com metadados completos de preservação) e DIP (disseminação para o consumidor).',
        armadilhaBancaRecorrente:
          'Afirmar que o usuário final consulta e baixa diretamente o pacote AIP da câmara segura de preservação (ele recebe o DIP, que é uma derivação de acesso).',
      },
      {
        nome: 'PREMIS Editorial Committee',
        nacionalidade: 'Library of Congress',
        obraPrincipal: 'Data Dictionary for Preservation Metadata (PREMIS v3.0)',
        anoReferencia: 2015,
        conceitoChave: 'Dicionário de Dados de Metadados de Preservação Digital',
        citacaoLiteralOuDefinicao:
          'Estruturado em 5 entidades semânticas interdependentes: Entidade Intelectual, Objeto (arquivo/bitstream), Evento, Agente e Direito.',
        armadilhaBancaRecorrente:
          'Afirmar que o PREMIS substitui formatos descritivos como MARC 21 ou Dublin Core (PREMIS é estritamente voltado a metadados de preservação e proveniência técnica).',
      },
      {
        nome: 'James M. Reilly / IPI (Image Permanence Institute)',
        nacionalidade: 'Norte-Americano',
        obraPrincipal: 'Storage Guide for Color Photographic Materials / Preservation Management',
        anoReferencia: 1998,
        conceitoChave: 'Fatores Ambientais de Degradação do Papel e Suportes Físicos',
        citacaoLiteralOuDefinicao:
          'A temperatura e a umidade relativa do ar atuam sinergicamente na aceleração das reações de hidrólise ácida da celulose, exigindo estabilidade climática constante.',
        armadilhaBancaRecorrente:
          'Afirmar que a umidade relativa alta (ex: 80%) é recomendada para evitar o ressecamento do papel (umidade acima de 65% dispara proliferação fúngica imediata).',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'Resolução CONARQ nº 43/2015',
        titulo: 'Diretrizes para a implementação de Repositórios Arquivísticos Digitais Confiáveis (RDC-Arq)',
        orgaoEmissor: 'Conselho Nacional de Arquivos (CONARQ)',
        anoEdicao: 2015,
        pontoCriticoCebraspe:
          'Requisitos de autenticidade, custódia contínua, preservação baseada no modelo OAIS e adoção do e-ARQ Brasil.',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Princípio da Reversibilidade na Restauração',
        definicaoOficial: 'Regra ética segundo a qual nenhum procedimento ou material utilizado na restauração de um documento físico pode ser permanente a ponto de não poder ser removido sem danificar a peça original.',
        sinonimosOuVariantes: ['Reversibility principle', 'Ética na conservação'],
        pegadinhaBanca: 'Afirmar que intervenções com cola sintética instantânea ou fitas adesivas comuns são admitidas se melhorarem a legibilidade imediata da obra.',
      },
    ],
  },

  m8: {
    moduloId: 'm8',
    moduloCodigo: 'M8',
    nome: 'Normalização Documental & ABNT (NBRs)',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['8.1', '8.2', '8.3', '8.4'],
    autoresPrincipais: [
      {
        nome: 'ABNT / Comitê Brasileiro de Informação e Documentação (CB-014)',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'ABNT NBR 10520:2023 (Citações em Documentos)',
        anoReferencia: 2023,
        conceitoChave: 'Regra Universal de Chamada em Letras Maiúsculas e Minúsculas',
        citacaoLiteralOuDefinicao:
          'A indicação da autoria na chamada de citação, seja no texto corrido, seja entre parênteses, é grafada em letras maiúsculas e minúsculas: "(Oliveira, 2024)" e "segundo Oliveira (2024)".',
        armadilhaBancaRecorrente:
          'Cobrar a regra antiga de 2002 onde autores entre parênteses eram obrigatoriamente grafados em CAIXA ALTA "(OLIVEIRA, 2024)", que hoje constitui ERRO na norma de 2023.',
      },
      {
        nome: 'ABNT / CB-014',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'ABNT NBR 6023:2018 (Referências — Elaboração)',
        anoReferencia: 2018,
        conceitoChave: 'Regras de Autoria e Destaque Tipográfico do Título',
        citacaoLiteralOuDefinicao:
          'Até 3 autores citam-se todos; 4 ou mais cita-se o primeiro seguido de et al. (embora seja facultado citar todos). O destaque tipográfico (negrito, itálico ou sublinhado) é aplicado exclusivamente ao título, nunca ao subtítulo.',
        armadilhaBancaRecorrente:
          'Destacar o subtítulo junto com o título, ou afirmar que é proibido citar todos os autores quando há mais de 3 autores.',
      },
      {
        nome: 'ABNT / CB-014',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'ABNT NBR 6028:2021 (Resumos)',
        anoReferencia: 2021,
        conceitoChave: 'Tipologia de Resumos (Indicativo, Informativo e Crítico)',
        citacaoLiteralOuDefinicao:
          'Resumo indicativo não dispensa a leitura do original; resumo informativo apresenta finalidades, métodos, resultados e conclusões, dispensando a consulta ao original; resumo crítico faz julgamento valorativo.',
        armadilhaBancaRecorrente:
          'Afirmar que o resumo indicativo apresenta dados quantitativos e conclusões completas que dispensam a leitura do texto integral.',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'ABNT NBR 14724:2011',
        titulo: 'Trabalhos acadêmicos — Apresentação',
        orgaoEmissor: 'ABNT',
        anoEdicao: 2011,
        pontoCriticoCebraspe:
          'Estrutura em elementos pré-textuais, textuais e pós-textuais; folha de rosto obrigatória; paginação contada a partir da folha de rosto e impressa a partir da introdução.',
      },
      {
        codigo: 'ABNT NBR 6027:2012',
        titulo: 'Sumário — Apresentação',
        orgaoEmissor: 'ABNT',
        anoEdicao: 2012,
        pontoCriticoCebraspe:
          'O sumário é elemento pré-textual e enumera as divisões e seções na mesma ordem em que se sucedem no documento, diferindo do índice (elemento pós-textual).',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Citação Direta Curta vs. Longa',
        definicaoOficial: 'Curta: até 3 linhas, entre aspas duplas, no corpo do texto. Longa: mais de 3 linhas, recuo de 4 cm da margem esquerda, fonte menor, espaçamento simples, sem aspas.',
        sinonimosOuVariantes: ['Citação textual'],
        pegadinhaBanca: 'Colocar aspas em citação direta longa com recuo de 4 cm.',
      },
    ],
  },

  m9: {
    moduloId: 'm9',
    moduloCodigo: 'M9',
    nome: 'Comunicação Científica, Métricas & FAIR',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['9.1', '9.2', '9.3', '9.4'],
    autoresPrincipais: [
      {
        nome: 'Samuel C. Bradford',
        nacionalidade: 'Britânico',
        obraPrincipal: 'Documentation (Lei de Bradford)',
        anoReferencia: 1934,
        conceitoChave: 'Lei da Dispersão Periódica da Literatura Científica',
        citacaoLiteralOuDefinicao:
          'Se periódicos científicos são ordenados em ordem decrescente de produtividade, dividem-se em um núcleo e zonas sucessivas contendo igual número de artigos, na proporção 1 : n : n² : n³.',
        armadilhaBancaRecorrente:
          'Inverter a proporção das zonas afirmando que a quantidade de artigos cresce exponencialmente (são os periódicos que crescem em razão geométrica, enquanto o número de artigos por zona é constante).',
      },
      {
        nome: 'Alfred J. Lotka',
        nacionalidade: 'Norte-Americano',
        obraPrincipal: 'The Frequency Distribution of Scientific Productivity (Lei de Lotka)',
        anoReferencia: 1926,
        conceitoChave: 'Lei do Quadrado Inverso da Produtividade dos Autores',
        citacaoLiteralOuDefinicao:
          'A proporção de autores que realizam n publicações é inversamente proporcional a n² (An = A1 / n²). A maioria expressiva dos autores publica apenas um trabalho.',
        armadilhaBancaRecorrente:
          'Afirmar que a produtividade dos autores cresce de maneira linear ou que a distribuição de autores é homogênea entre veteranos e iniciantes.',
      },
      {
        nome: 'George K. Zipf',
        nacionalidade: 'Norte-Americano',
        obraPrincipal: 'Human Behavior and the Principle of Least Effort (Lei de Zipf)',
        anoReferencia: 1949,
        conceitoChave: 'Lei da Frequência de Ocorrência de Palavras no Texto',
        citacaoLiteralOuDefinicao:
          'O produto do ranking de uma palavra por sua frequência em um texto é aproximadamente constante (r × f = C). Primeira Lei de Zipf governa termos comuns; Segunda Lei governa termos raros (Lei de Estoup-Zipf).',
        armadilhaBancaRecorrente:
          'Atribuir a Lei de Zipf à dispersão de periódicos ou afirmar que palavras de rank 1 são as mais relevantes para indexação temática (são stopwords gramaticais).',
      },
      {
        nome: 'Mark D. Wilkinson et al.',
        nacionalidade: 'Consórcio Internacional FORCE11',
        obraPrincipal: 'The FAIR Guiding Principles for scientific data management and stewardship',
        anoReferencia: 2016,
        conceitoChave: 'Princípios FAIR para Gestão e Curadoria de Dados de Pesquisa',
        citacaoLiteralOuDefinicao:
          'Dados de pesquisa devem ser: Findable (localizáveis por máquinas e humanos), Accessible (acessíveis via protocolos abertos), Interoperable (interoperáveis com vocabulários controlados) e Reusable (reutilizáveis com licenças claras).',
        armadilhaBancaRecorrente:
          'Afirmar que "Accessible" no FAIR significa obrigatoriamente que o dado é público e irrestrito (o dado pode ter acesso restrito ou sob embargo, desde que os metadados de acesso sejam padronizados e localizáveis).',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'Declarações de Budapeste, Bethesda e Berlim (Declarações dos 3 Bs)',
        titulo: 'Marcos Internacionais do Movimento de Acesso Aberto (Open Access)',
        orgaoEmissor: 'BOAI / Max Planck Society',
        anoEdicao: '2002-2003',
        pontoCriticoCebraspe:
          'Diferenciação entre Via Verde (Green Road / autoarquivamento em repositórios) e Via Dourada (Gold Road / revistas de acesso aberto).',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Índice H (Hirsch Index)',
        definicaoOficial: 'Um pesquisador possui índice h se h de seus N artigos têm pelo menos h citações cada um, e os outros artigos têm não mais que h citações.',
        sinonimosOuVariantes: ['h-index'],
        pegadinhaBanca: 'Afirmar que o índice h é simplesmente a média de citações por artigo ou o total de citações recebidas.',
      },
    ],
  },

  m10: {
    moduloId: 'm10',
    moduloCodigo: 'M10',
    nome: 'Legislação, Processo Legislativo & RVBI',
    bloco: 'CONHECIMENTOS_ESPECIFICOS',
    submodulosIds: ['10.1', '10.2', '10.3', '10.4'],
    autoresPrincipais: [
      {
        nome: 'Câmara dos Deputados (Mesa Diretora)',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'Regimento Interno da Câmara dos Deputados (RICD — Resolução nº 17/1989)',
        anoReferencia: 1989,
        conceitoChave: 'Processo Legislativo, Atribuições das Comissões e Estrutura da Casa',
        citacaoLiteralOuDefinicao:
          'A Câmara dos Deputados compõe-se de representantes do povo, exercendo funções legislativas e fiscalizatórias por meio da Mesa Diretora, Colégio de Líderes, Comissões e Plenário soberano.',
        armadilhaBancaRecorrente:
          'Afirmar que comissões temporárias podem legislar em caráter terminativo sem possibilidade de recurso ao Plenário (apenas comissões permanentes têm poder terminativo regimental, ressalvado recurso de 1/10 dos deputados).',
      },
      {
        nome: 'Centro de Documentação e Informação (CEDI)',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'Regulamento da Estrutura Administrativa da Câmara dos Deputados',
        anoReferencia: 2024,
        conceitoChave: 'Gestão da Memória Parlamentar, Arquivo e Biblioteca Pedro Aleixo',
        citacaoLiteralOuDefinicao:
          'O CEDI é o órgão responsável pelo acervo arquivístico, bibliográfico, legislativo e de publicações da Câmara dos Deputados, promovendo a preservação, tratamento e disseminação da informação parlamentar.',
        armadilhaBancaRecorrente:
          'Subordinar o CEDI a uma comissão parlamentar permanente, em vez de reconhecer sua vinculação administrativa direta à Diretoria-Geral da Câmara.',
      },
      {
        nome: 'Rede Virtual de Bibliotecas (RVBI)',
        nacionalidade: 'Brasileira',
        obraPrincipal: 'Regulamento e Estatuto da RVBI',
        anoReferencia: 2000,
        conceitoChave: 'Rede Cooperativa de Bibliotecas do Poder Legislativo e Judiciário Federal',
        citacaoLiteralOuDefinicao:
          'Rede coordenada pelo Senado Federal, integrada pela Câmara dos Deputados e tribunais superiores, operando sob base bibliográfica e de autoridades unificada em MARC 21.',
        armadilhaBancaRecorrente:
          'Afirmar que a RVBI é subordinada à Biblioteca Nacional ou que seus órgãos integrantes mantêm bases de dados isoladas e não cooperativas.',
      },
    ],
    normasOuRegulamentos: [
      {
        codigo: 'Lei Federal nº 12.527/2011',
        titulo: 'Lei de Acesso à Informação (LAI)',
        orgaoEmissor: 'Congresso Nacional',
        anoEdicao: 2011,
        pontoCriticoCebraspe:
          'Prazos de sigilo máximo: Ultrassecreta (25 anos), Secreta (15 anos), Reservada (5 anos); prazo de resposta de 20 dias prorrogável por mais 10 mediante justificativa.',
      },
      {
        codigo: 'Lei Federal nº 13.709/2018',
        titulo: 'Lei Geral de Proteção de Dados Pessoais (LGPD)',
        orgaoEmissor: 'Congresso Nacional',
        anoEdicao: 2018,
        pontoCriticoCebraspe:
          'Tratamento de dados por pessoas jurídicas de direito público para cumprimento de obrigação legal e execução de políticas públicas dispensando consentimento prévio nas hipóteses legais.',
      },
      {
        codigo: 'Lei Federal nº 10.994/2004',
        titulo: 'Lei do Depósito Legal na Biblioteca Nacional',
        orgaoEmissor: 'Congresso Nacional',
        anoEdicao: 2004,
        pontoCriticoCebraspe:
          'Objetivo de assegurar o registro e a guarda da produção intelectual nacional e garantir a preservação da memória documental do país.',
      },
    ],
    conceitosAltaFrequencia: [
      {
        termo: 'Tramitação Conclusiva nas Comissões (Poder Terminativo)',
        definicaoOficial: 'Competência regimental conferida às Comissões Permanentes para discutir e votar projetos de lei dispensando a deliberação do Plenário, salvo recurso firmado por 1/10 dos membros da Casa.',
        sinonimosOuVariantes: ['Art. 24, II do RICD', 'Aprovação terminativa'],
        pegadinhaBanca: 'Afirmar que qualquer deputado isolado pode avocar o projeto para o Plenário (exige-se recurso formal subscrito por pelo menos 1/10 dos membros da Câmara).',
      },
    ],
  },
};

export function obterPesquisaModulo(moduloId: string): CompendioModuloPesquisa | undefined {
  return COMPENDIO_PESQUISA_AUTORES[moduloId.toLowerCase()];
}

export function listarTodosModulosPesquisa(): CompendioModuloPesquisa[] {
  return Object.values(COMPENDIO_PESQUISA_AUTORES);
}
