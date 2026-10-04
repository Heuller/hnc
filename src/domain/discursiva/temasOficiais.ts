import type { TemaDiscursiva } from './types';

export const TEMAS_OFICIAIS_DISCURSIVA: TemaDiscursiva[] = [
  {
    id: 'tema-desbastamento-vergueiro',
    tipo: 'questao_20',
    titulo: 'Desbastamento e Descarte de Coleções Parlamentares',
    enunciado:
      'Considerando que a gestão e o desenvolvimento de coleções constituem processos contínuos e cíclicos nas unidades de informação, redija um texto dissertativo, de até 20 linhas, atendendo necessariamente ao que se pede: 1. Diferencie conceitualmente desbastamento (desbaste) de descarte segundo a literatura canônica (Waldomiro Vergueiro); 2. Indique critérios objetivos técnicos que fundamentam a seleção de materiais para desbaste; 3. Discorra sobre as destinações técnicas recomendadas para os materiais descartados no âmbito da administração pública e a salvaguarda da memória institucional legislativa.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve conceituar desbastamento como a retirada física temporária ou definitiva de documentos de baixa frequência de uso para depósitos secundários ou outro suporte, sem perda patrimonial. Diferenciar de descarte, que é a eliminação ou alienação definitiva de itens obsoletos ou irrecuperáveis do patrimônio da biblioteca, respeitando normativos de bens públicos e preservação da memória legislativa da Câmara.',
    criteriosPontuacao: [
      {
        item: '1. Diferenciação Conceitual entre Desbaste e Descarte (Vergueiro)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu claramente desbaste (transferência de suporte/local sem exclusão patrimonial) e descarte (eliminação patrimonial definitiva).',
      },
      {
        item: '2. Critérios Objetivos Técnicos de Seleção para Desbastamento',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou critérios válidos (frequência de uso, pertinência temática ao parlamento, obsolescência temporal e estado físico).',
      },
      {
        item: '3. Destinação dos Materiais Descartados e Memória Institucional',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Discorreu sobre descarte legal (doação, reciclagem e incineração restrita), resguardando obras raras e documentos parlamentares históricos.',
      },
    ],
  },
  {
    id: 'tema-rda-lrm-camara',
    tipo: 'questao_20',
    titulo: 'Catalogação com RDA e Modelo Conceitual IFLA LRM',
    enunciado:
      'A transição dos padrões tradicionais de representação descritiva (como o AACR2) para as normas modernas alinhadas ao Resource Description and Access (RDA) e ao modelo conceitual IFLA LRM reflete a necessidade de adequação aos dados abertos e à web semântica. Em até 20 linhas: 1. Explique como o IFLA LRM consolidou os modelos da família FR (FRBR, FRAD, FRSAD); 2. Defina sucintamente as entidades do nível WEMI (Obra, Expressão, Manifestação e Item) no escopo do RDA; 3. Discorra sobre como o RDA otimiza a recuperação e interoperabilidade de proposições e atos legislativos da Câmara dos Deputados.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve explicar que o IFLA LRM consolidou e refinou os modelos da família FR (FRBR, FRAD, FRSAD) em um modelo de referência unificado de alto nível. Deve definir a cadeia WEMI: Obra (conceito intelectual abstrato), Expressão (realização linguística ou formal da obra), Manifestação (corporificação física ou digital da expressão) e Item (exemplar concreto possuído pela biblioteca). Por fim, deve correlacionar com a Câmara dos Deputados: o RDA facilita o rastreamento de projetos de lei em suas diversas redações (Expressões) e edições publicadas no Diário da Câmara (Manifestações), potencializando o uso de Linked Open Data e interoperabilidade via URN LexML.',
    criteriosPontuacao: [
      {
        item: '1. Evolução da Família FRBR para o IFLA LRM',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Mencionou a convergência e unificação conceitual dos modelos funcionais em um modelo de dados relacional e abstrato consistente.',
      },
      {
        item: '2. Entidades do Nível WEMI no RDA',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu com precisão analítica as quatro entidades do grupo WEMI (Obra, Expressão, Manifestação, Item) e suas inter-relações hierárquicas.',
      },
      {
        item: '3. Interoperabilidade e Dados Conectados na Atividade Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Demonstrou como o RDA amplia a descoberta semântica de atos legislativos, versões de proposições e conexão com outros órgãos governamentais.',
      },
    ],
  },
  {
    id: 'tema-lai-acesso-informacao',
    tipo: 'questao_20',
    titulo: 'Acesso à Informação Pública e Transparência Passiva/Ativa',
    enunciado:
      'A Lei n.º 12.527/2011 (Lei de Acesso à Informação - LAI) estabelece diretrizes fundamentais para o fornecimento de informações pelo poder público. Redija um texto de até 20 linhas que aborde: 1. A distinção entre transparência ativa e transparência passiva no contexto da Câmara dos Deputados; 2. Os prazos e procedimentos legais para resposta ao cidadão quando a informação não estiver disponível imediatamente; 3. O papel do profissional bibliotecário como mediador na classificação de sigilo e na promoção de dados abertos governamentais.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve expor que transparência ativa é a divulgação proativa de dados de interesse coletivo independentemente de solicitação (Portal da Câmara, proposições, despesas), enquanto a transparência passiva atende a pedidos específicos de cidadãos via Serviço de Informação ao Cidadão (SIC). O prazo geral de resposta imediata ou, não sendo possível, em até 20 dias, prorrogáveis por mais 10 mediante justificativa. O bibliotecário atua na catalogação e organização de metadados dos repositórios de dados abertos, garantindo formatos abertos, não proprietários e legíveis por máquina, além de zelar para que o sigilo seja tratado como exceção estrita da lei.',
    criteriosPontuacao: [
      {
        item: '1. Distinção entre Transparência Ativa e Passiva',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Explicou que transparência ativa decorre de obrigação legal de publicação de ofício, enquanto passiva decorre de demanda formulada via SIC.',
      },
      {
        item: '2. Prazos e Rito de Resposta da LAI',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Citou o prazo de 20 dias corridos prorrogável por mais 10 dias com justificativa expressa.',
      },
      {
        item: '3. Mediação Biblioteconômica e Dados Abertos',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Evidenciou o papel técnico na padronização semântica, formatos abertos (CSV, XML, JSON) e tratamento do sigilo como estrita exceção.',
      },
    ],
  },
  {
    id: 'tema-oais-memoria-camara',
    tipo: 'peca_50',
    titulo: 'Projeto de Repositório Institucional Digital em Conformidade com o Modelo OAIS',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário designado para liderar o grupo de trabalho de modernização da memória documental da Câmara dos Deputados, elabore uma PEÇA TÉCNICA (projeto de parecer com plano de implantação), de até 50 linhas, estruturada conforme as normas da redação oficial. Sua peça deve contemplar obrigatoriamente: 1. Diagnóstico da transição documental física para o ambiente digital e riscos de obsolescência tecnológica; 2. Arquitetura do repositório baseada no modelo OAIS (Open Archival Information System), detalhando o ciclo de vida dos pacotes de submissão (SIP), arquivamento (AIP) e disseminação (DIP); 3. Estratégias de preservação digital de longo prazo (emulação, migração e níveis de preservação NDSA); 4. Requisitos de metadados para preservação e acesso (PREMIS e Dublin Core); 5. Diretrizes para integração do acervo com a consulta pública dos cidadãos e pesquisadores parlamentares.',
    limiteLinhas: 50,
    padraoRespostaPreliminar:
      'A peça técnica deve apresentar estrutura formal sóbria (Introdução/Diagnóstico, Fundamentação Técnica, Proposta Metodológica, Requisitos de Preservação e Conclusão/Encaminhamento). No diagnóstico, elencar a fragilidade dos suportes magnéticos/ópticos e a rápida obsolescência de formatos proprietários. Na arquitetura OAIS (ISO 14721), detalhar o fluxo: Produtor gera SIP (Submission Information Package), a unidade gerencia e preserva o AIP (Archival Information Package) com metadados estruturados de proveniência (PREMIS), e disponibiliza o DIP (Dissemination Information Package) no formato PDF/A ou web amigável. Detalhar as estratégias de preservação: migração periódica de formatos (evitando aprisionamento tecnológico) e emulação de sistemas legados. Enfatizar a aplicação dos metadados descritivos Dublin Core e de preservação PREMIS. Na conclusão, recomendar a publicação sob licença aberta com integração URN LexML.',
    criteriosPontuacao: [
      {
        item: '1. Diagnóstico e Adequação Estrutural da Peça Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Estruturou a peça como documento técnico formal com linguagem culta, impessoal e diagnóstico claro da obsolescência digital.',
      },
      {
        item: '2. Arquitetura do Modelo OAIS (SIP, AIP, DIP)',
        pontuacaoMaxima: 7.0,
        descricaoEsperada:
          'Definiu e correlacionou corretamente as entidades de informação SIP (entrada), AIP (preservação mestra) e DIP (acesso público).',
      },
      {
        item: '3. Estratégias de Preservação Digital (Migração, Emulação, NDSA)',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Abordou com exatidão as estratégias técnicas de migração de formatos, checagem de fixidez (checksum) e preservação multinível.',
      },
      {
        item: '4. Esquemas de Metadados PREMIS e Dublin Core',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Diferenciou a função de metadados de preservação (PREMIS - eventos, direitos, agentes) e de descrição de acesso (Dublin Core).',
      },
      {
        item: '5. Integração com Pesquisa Cidadã e Acesso Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou soluções para busca federada, identificadores persistentes e atendimento aos princípios da LAI e transparência institucional.',
      },
    ],
  },
];
