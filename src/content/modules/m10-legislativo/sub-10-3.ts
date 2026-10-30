import type { ModuloFilho } from '../../../domain/types';

export const submodulo103: ModuloFilho = {
  id: 'sub-10-3',
  numero: '10.3',
  editalRef: 'Conhecimentos Básicos - Administração da Câmara e Transparência',
  preRequisitos: ["sub-10-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência e LAI",
          "motivo": "Portal da Transparência da Câmara e dados abertos de despesas parlamentares."
      }
  ],
  titulo: 'Lei de Acesso à Informação (LAI) e LGPD na Gestão Documental Pública',
  antesDeLer: [
  {
    "termo": "Transparência ativa",
    "definicao": "Divulgação de informações de ofício, independentemente de requerimento.",
    "exemploBiblioteca": "O órgão publica despesas no portal antes de receber qualquer pedido."
  },
  {
    "termo": "Acesso parcial",
    "definicao": "Fornecimento da parcela acessível quando outra informação do documento estiver legitimamente protegida.",
    "exemploBiblioteca": "A parte pública de um processo pode ser fornecida com ocultação fundamentada de informação protegida."
  }
],
  descricaoCurta: "Aplicar publicidade e resposta a pedidos com âmbito e exceções próprios. Distinguir classificação de segurança, acesso parcial e proteção de direitos. Interpretar o art. 31 sem criar sigilo geral de cem anos. Compatibilizar base legal, princípios e categorias de dados. Produzir pesquisa imparcial com recorte e limites declarados.",
  tempoEstimadoMinutos: 23,
  autoresChave: [
  "Lei 12.527/2011 — LAI",
  "Lei 13.709/2018 — LGPD",
  "ANPD — documentos e publicações"
],
  alertasCebraspe: [
  "Publicação de ofício e atendimento de requerimentos são deveres relacionados, mas distintos.",
  "O regime exige analisar informação, contexto, hipóteses e acesso parcial.",
  "Finalidade, necessidade e segurança continuam exigíveis."
],
  teoriaDensaMarkdown: "### O Marco Regulatório da Transparência Pública: A Lei nº 12.527/2011 (LAI)\n\nA Lei de Acesso à Informação regulamenta o direito fundamental consagrado no **Art. 5º, XXXIII**, no **Art. 37, § 3º, II** e no **Art. 216, § 2º** da Constituição Federal de 1988, aplicável a todos os Poderes da União, dos Estados, do Distrito Federal e dos Municípios, e, no que couber, às entidades privadas sem fins lucrativos abrangidas pelo art. 2º, quanto à parcela dos recursos públicos recebidos e sua destinação:\n\n```tree\nTITLE: Princípios Estruturantes da LAI (Lei nº 12.527/2011)\n- Direito Constitucional de Acesso (CF/88) | Arts. 5º XXXIII, 37 § 3º II e 216 § 2º\n  - Lei de Acesso à Informação (LAI) | Marco regulatório da transparência republicana\n    - Publicidade como Regra Geral | Acesso amplo de ofício (transparência ativa) e sob demanda (passiva)\n    - Sigilo como Exceção Estrita | Classificação por segurança é regime específico; proteção pessoal e outros sigilos legais têm fundamentos próprios\n    - Gratuidade do Acesso | Isenção total de tarifas, admitida cobrança exclusiva de custos de reprografia\n    - Vedação de Exigência de Motivo | Ilegalidade de qualquer exigência sobre os motivos determinantes do pedido\n```\n\n#### A. Diretrizes Fundamentais (Art. 3º):\n1. A **publicidade como preceito geral** e o **sigilo como exceção**;\n2. Divulgação de informações de interesse público, independentemente de solicitações;\n3. Utilização de meios de comunicação viabilizados pela tecnologia da informação;\n4. Fomento ao desenvolvimento da cultura de transparência na administração pública;\n5. Desenvolvimento do controle social da administração pública.\n\n#### B. Transparência Ativa vs. Transparência Passiva\n* **Transparência Ativa (Art. 8º):**\n  * Dever de ofício dos órgãos e entidades públicas de promover a divulgação na Internet de informações de interesse coletivo ou geral produzidas ou custodiadas por eles, **independentemente de qualquer requerimento cidadão**.\n  * *Requisitos Mínimos Obrigatórios:* Registro das competências e estrutura organizacional; endereços e telefones das unidades e horários de atendimento; registros de quaisquer repasses ou transferências de recursos financeiros; registros das despesas e receitas; informações concernentes a procedimentos licitatórios (com editais e contratos na íntegra); dados gerais para o acompanhamento de programas, ações, projetos e obras; respostas a perguntas mais frequentes da sociedade (FAQ).\n  * *Padrões Tecnológicos:* Formatos abertos, estruturados e legíveis por máquina (ex.: CSV, JSON, XML), observados requisitos de autenticidade, integridade e acesso; ser CSV ou JSON não comprova, sozinho, a autenticidade ou integridade.\n* **Transparência Passiva (Serviço de Informações ao Cidadão - SIC - Arts. 9º a 14):**\n  * Mecanismo pelo qual o órgão atende a demandas individuais específicas formuladas pela sociedade.\n  * *Proibição de Exigência de Motivação (Art. 10, § 3º — técnica de distrator recorrente):* **São expressamente vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.** O requerente precisa apenas identificar-se (nome e documento) e especificar a informação pretendida.\n  * *Prazos Oficiais de Resposta:*\n    * Se a informação requerida estiver disponível, o acesso deve ser concedido de forma **imediata**.\n    * Não sendo possível o acesso imediato, o órgão público tem o prazo de **até 20 dias** para responder, prazo este que pode ser prorrogado por mais **10 dias** mediante justificativa expressa encaminhada ao cidadão.\n\n---\n\n\n\nO art. 8º tem regras específicas, incluindo tratamento de municípios com até dez mil habitantes no § 4º, sem eliminar as obrigações fiscais de transparência ali ressalvadas. A busca e o fornecimento são gratuitos, admitido ressarcimento de serviços e materiais de reprodução nas condições do art. 12, com isenção para quem se enquadre na hipótese legal. Identificar o requerente não autoriza exigências que inviabilizem a solicitação. A decisão negativa deve indicar fundamentos e meios de recurso.\n\n**Aplicação e recuperação:** Se o órgão já possui informação acessível, deve fornecê-la de imediato. Não sendo possível, há prazo e prorrogação motivada, não silêncio administrativo ilimitado.\n\n### A Classificação de Informações Sigilosas e os Prazos Máximos\n\nQuando a publicidade da informação comprometer a segurança da sociedade e do Estado (Art. 23), ela poderá ser excepcionalmente classificada em um dos três graus de sigilo (Art. 24):\n\n```timeline\nRES | 1. Grau Reservado | Até 5 Anos de Restrição | Classificável por autoridades até DAS 101.5. Salvaguarda planos estratégicos e operações em andamento.\n---> Escalação de Gravidade\nSEC | 2. Grau Secreto | Até 15 Anos de Restrição | Classificável por Ministros, Comandantes Militares e dirigentes de estatais/autarquias federais.\n---> Grau Máximo\nULTRA | 3. Grau Ultrassecreto | Até 25 Anos de Restrição | Prorrogável 1x pela CMRI (até +25 anos). Competência restrita: Presidência, Ministros, Forças Armadas e Chefes de Missão.\n```\n\n#### A. Prazos e competências — atenção ao âmbito\n\nA enumeração de autoridades do art. 27 refere-se à **administração pública federal**. Outros Poderes e entes regulamentam a aplicação conforme suas competências. Não transforme ministros e DAS em autoridades universais para qualquer biblioteca municipal ou parlamentar. Os prazos contam da produção da informação, com possibilidade de termo final por evento nas condições do art. 24.\n1. **Ultrassecreta (até 25 anos):**\n   * Classificada privativamente por: Presidente e Vice-Presidente da República; Ministros de Estado e autoridades com prerrogativas equivalentes; Comandantes da Marinha, do Exército e da Aeronáutica; Chefes de Missões Diplomáticas permanentes no exterior.\n   * *Prorrogação Única:* No âmbito pertinente, a CMRI pode prorrogar uma vez o prazo ultrassecreto, por período não superior a 25 anos, **nas condições do art. 35, § 1º, III, e § 2º**. Não é extensão automática de qualquer classificação.\n2. **Secreta (até 15 anos):**\n   * Classificada pelas autoridades acima indicadas, acrescidas dos dirigentes de autarquias, fundações públicas e empresas estatais federais.\n3. **Reservada (até 5 anos):**\n   * Classificada por todas as autoridades precedentes, acrescidas dos agentes públicos que exerçam funções de direção, comando ou chefia de nível DAS 101.5 (ou hierarquicamente equivalentes).\n\n#### B. Tutela de direitos fundamentais e violações de direitos humanos\nO art. 21 veda negar informação necessária à tutela judicial ou administrativa de direitos fundamentais e impede restrição sobre condutas de violação de direitos humanos praticadas por agentes públicos ou a mando de autoridades públicas. Não use classificação de segurança para encobrir esses fatos. A aplicação deve preservar o acesso ao conteúdo pertinente e considerar a proteção de terceiros e dados que não sejam necessários à finalidade, sem converter isso em pretexto para ocultação do abuso.\n\nQuando apenas uma parte estiver protegida, o art. 7º, § 2º, prevê acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação. A existência de um anexo protegido não torna automaticamente todo o processo secreto.\n\n**Aplicação e recuperação:** Um relatório tem valores públicos e um anexo médico. Ocultar a parte protegida pode permitir acesso ao restante, sem classificar tudo como ultrassecreto.\n\n### Proteção das Informações Pessoais (Art. 31 da LAI)\n\nA LAI, art. 31, trata de informações pessoais com respeito à intimidade, vida privada, honra, imagem, liberdades e garantias individuais. A restrição das informações abrangidas pelo § 1º, I, é de **até cem anos desde a produção**, independentemente da classificação de segurança. Não constitui quarto grau de sigilo nem prazo obrigatório para todo dado pessoal.\n\nO acesso pode ocorrer por agentes legalmente autorizados e pelo titular; divulgação ou acesso por terceiros depende de previsão legal ou consentimento, ressalvadas as hipóteses pertinentes. O § 3º dispensa consentimento em situações específicas, como prevenção/diagnóstico médico com as condições legais, estatísticas/pesquisas de evidente interesse público sem identificação, ordem judicial, defesa de direitos humanos e proteção de interesse público geral preponderante.\n\nO § 4º impede invocar a restrição para prejudicar apuração de irregularidades em que o titular esteja envolvido ou recuperação de fatos históricos de maior relevância. Essa regra não equivale a uma autorização geral para expor qualquer dado íntimo em todo processo administrativo.\n\n**Roteiro de aplicação:** identifique a informação concreta e o titular; determine finalidade e base de acesso; verifique necessidade, hipótese legal e proteção de terceiros; forneça a parte acessível; documente a decisão. “Contém nomes” não é fundamento suficiente para negar integralmente um documento de interesse público.\n\n**Aplicação e recuperação:** A presença do nome de servidor não basta para impor restrição por cem anos. Identifique informação e fundamento concretos.\n\n### A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) no Setor Público\n\nA LGPD tem âmbito definido nos arts. 1º–4º, com hipóteses de incidência e exclusões específicas; não se aplica indistintamente a toda operação de qualquer pessoa:\n\n```tree\nTITLE: Conceitos Fundamentais da LGPD (Lei nº 13.709/2018)\n- Marco Legal da Proteção de Dados | Aplicação a pessoas naturais e pessoas jurídicas públicas e privadas\n  - Dado Pessoal | Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, RG, IP, geolocalização)\n  - Dado Pessoal Sensível | Dados sobre origem racial/étnica, convicção religiosa, opinião política, saúde, biometria ou genética\n  - Tratamento pelo Setor Público | Exige base legal adequada à operação, princípios e condições do setor público; consentimento não é a única base\n  - Encarregado de Proteção (DPO) | Canal de comunicação institucional entre o controlador dos dados, os titulares e a ANPD\n```\n\n#### A. Princípios Norteadores do Tratamento (Art. 6º):\n* **Finalidade e Adequação:** Propósitos legítimos, específicos e informados ao titular, compatíveis com as atribuições legais da instituição.\n* **Necessidade (Minimização):** Limitação do tratamento ao mínimo necessário para a realização das finalidades públicas.\n* **Livre Acesso e Qualidade dos Dados:** Garantia aos titulares de consulta facilitada e exatidão dos registros.\n* **Segurança e Prevenção:** Adoção de medidas técnicas e organizacionais contra acessos não autorizados, incidentes e vazamentos.\n\n---\n\n\n\nA Lei 15.352/2026 atualizou a definição de encarregado e a referência à **Agência Nacional de Proteção de Dados (ANPD)**. Distinga controlador, operador e encarregado. Nem todo dado pessoal é sensível; sensíveis são as categorias do art. 5º, II. Pseudonimização pode manter possibilidade de associação e não equivale automaticamente à anonimização do art. 12.\n\nNo setor público, arts. 23–30 devem ser lidos com as bases dos arts. 7º e 11 conforme o dado e a operação. A dispensa de consentimento não afasta necessidade, adequação, segurança, transparência e responsabilização. Acesso a documento público não autoriza qualquer tratamento posterior para qualquer finalidade.\n\n**Aplicação e recuperação:** Cumprir obrigação legal pode dispensar consentimento para uma operação, sem autorizar coletar dados excessivos.\n\n### Ética da Informação e Neutralidade Técnica na Pesquisa Parlamentar\n\nNo ecossistema de assessoria informacional da Câmara dos Deputados e do Congresso Nacional, a atuação do bibliotecário e do analista documental rege-se por cânones deontológicos e funcionais intransigíveis:\n\n* **Princípio da Imparcialidade e Neutralidade Técnica:**\n  * O bibliotecário parlamentar atende a deputados federais de todas as agremiações políticas, ideologias e correntes partidárias (bancadas do governo e da oposição).\n  * Em consultas de pesquisa doutrinária, legislativa e jurisprudencial formuladas por parlamentares ou comissões, **é estritamente vedado ao bibliotecário direcionar a seleção informacional** para favorecer a tese política ou a preferência ideológica do solicitante.\n  * O dossiê bibliográfico deve refletir com método explícito, pluralidade pertinente e avaliação da qualidade das evidências o estado da arte do tema em debate, apresentando tanto a corrente doutrinária majoritária quanto os argumentos das correntes minoritárias e dissidentes.\n* **Sigilo Profissional da Demanda Parlamentar:** A confidencialidade da demanda depende das normas, atribuições e condições aplicáveis; não existe regra geral de sigilo automático de toda pesquisa até o protocolo de uma proposição. Proteção de demanda, sigilo legal e restrição de dados pessoais são fundamentos distintos.\n\n---\n\n\nImparcialidade não exige atribuir igual peso a evidências robustas e alegações sem fundamento. Uma pesquisa pode ter escopo específico solicitado, mas precisa declarar esse recorte, evitar manipulação e não ocultar deliberadamente fontes relevantes que contradigam uma conclusão apresentada como abrangente.\n\n**Aplicação e recuperação:** Relatório encomendado para uma tese específica precisa declarar o escopo e não apresentar busca seletiva como revisão completa e neutra.",
  teoriaDidaticaMarkdown: "LAI combina divulgação e resposta a pedidos. Classificação de segurança, informação pessoal e outros sigilos têm fundamentos próprios. Cem anos é máximo específico, não sigilo automático. Acesso parcial pode preservar publicidade e proteção. LGPD exige base e princípios; consentimento não é universal. Pesquisa imparcial explicita recorte, fontes e limites.",
  checkpoints: [
  {
    "id": "cp-10-3-1",
    "pergunta": "Micro-Checkpoint 1: Prazos Máximos de Sigilo na LAI",
    "item": "Nos termos da Lei nº 12.527/2011 (LAI), os prazos máximos de restrição de acesso a informações classificadas como reservadas, secretas e ultrassecretas são de cinco, quinze e vinte e cinco anos, respectivamente.",
    "gabarito": "C",
    "justificativa": "Correto! Essa é a exata escala temporal de sigilo do Art. 24 da LAI: Reservada (5 anos), Secreta (15 anos) e Ultrassecreta (25 anos).",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público."
  },
  {
    "id": "cp-10-3-2",
    "pergunta": "Micro-Checkpoint 2: Sigilo e Violações de Direitos Humanos",
    "item": "Autoridades públicas competentes podem classificar como ultrassecretos documentos oficiais que contenham relatos e provas de violações de direitos humanos perpetradas por agentes do Estado, com a finalidade de proteger a soberania nacional.",
    "gabarito": "E",
    "justificativa": "Errado! O Art. 21 da LAI proíbe expressamente qualquer restrição de acesso a informações e documentos que versem sobre condutas que impliquem violação de direitos humanos praticada por agentes do Estado.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "versao_correta": "A LAI impede usar restrição de acesso para encobrir informações sobre violações de direitos humanos nas condições do art. 21."
  },
  {
    "id": "cp-10-3-3",
    "pergunta": "Micro-Checkpoint 3: Neutralidade Técnica na Pesquisa Legislativa",
    "item": "Na elaboração de pesquisas informacionais solicitadas por gabinetes parlamentares, o bibliotecário legislativo deve selecionar preferencialmente a doutrina alinhada ao posicionamento partidário do solicitante para resguardar a celeridade do trabalho.",
    "gabarito": "E",
    "justificativa": "Errado. Atender com celeridade não autoriza selecionar doutrina apenas para confirmar preferência partidária e apresentar isso como pesquisa abrangente. O recorte pode ser delimitado, mas deve ser declarado e acompanhado de método e fontes pertinentes.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "versao_correta": "A pesquisa deve observar método, escopo declarado, qualidade de fontes e imparcialidade profissional."
  },
  {
    "id": "rt-10-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Transparência ativa dispensa responder qualquer pedido posterior sobre dados não publicados no portal.",
    "gabarito": "E",
    "justificativa": "Publicação de ofício e atendimento de requerimentos são deveres relacionados, mas distintos.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "editalRef": "Conhecimentos Básicos - Administração da Câmara e Transparência",
    "habilidade": "aplicar",
    "versao_correta": "Pedidos devem ser analisados conforme a LAI."
  },
  {
    "id": "rt-10-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A classificação de segurança e a proteção de informações pessoais são regimes distintos da LAI.",
    "gabarito": "C",
    "justificativa": "Os graus do art. 24 não se confundem com a restrição do art. 31.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "editalRef": "Conhecimentos Básicos - Administração da Câmara e Transparência",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo documento que menciona pessoa natural deve permanecer integralmente inacessível por cem anos.",
    "gabarito": "E",
    "justificativa": "O regime exige analisar informação, contexto, hipóteses e acesso parcial.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "editalRef": "Conhecimentos Básicos - Administração da Câmara e Transparência",
    "habilidade": "aplicar",
    "versao_correta": "A restrição é delimitada e não incide automaticamente sobre todo documento com nomes."
  },
  {
    "id": "rt-10-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma base legal diferente de consentimento dispensa o cumprimento dos princípios da LGPD.",
    "gabarito": "E",
    "justificativa": "Finalidade, necessidade e segurança continuam exigíveis.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "editalRef": "Conhecimentos Básicos - Administração da Câmara e Transparência",
    "habilidade": "aplicar",
    "versao_correta": "Base legal e princípios devem ser observados conjuntamente."
  },
  {
    "id": "rt-10-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Imparcialidade exige conferir sempre peso idêntico a evidência científica robusta e alegação sem fundamento.",
    "gabarito": "E",
    "justificativa": "É preciso avaliar qualidade, pertinência e limites das evidências.",
    "fonte": "Lei 12.527/2011 — LAI — Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.; Lei 13.709/2018 — LGPD — Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.; ANPD — documentos e publicações — Orientações de tratamento de dados pelo poder público.",
    "editalRef": "Conhecimentos Básicos - Administração da Câmara e Transparência",
    "habilidade": "aplicar",
    "versao_correta": "Pluralidade não dispensa análise crítica das fontes."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-10-3-fonte-lai",
      "nome": "Lei 12.527/2011 — LAI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 12.527/2011 — LAI",
      "ideiaChave": "Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-3-fonte-lgpd",
      "nome": "Lei 13.709/2018 — LGPD",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 13.709/2018 — LGPD",
      "ideiaChave": "Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-3-fonte-anpd",
      "nome": "ANPD — documentos e publicações",
      "ano": "Referência de consulta",
      "obraPrincipal": "ANPD — documentos e publicações",
      "ideiaChave": "Orientações de tratamento de dados pelo poder público.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-10-3-3",
      "afirmacao": "Todo documento que menciona pessoa natural deve permanecer integralmente inacessível por cem anos.",
      "gabarito": "E",
      "porQue": "O regime exige analisar informação, contexto, hipóteses e acesso parcial."
    },
    {
      "id": "memoria-rt-10-3-4",
      "afirmacao": "Uma base legal diferente de consentimento dispensa o cumprimento dos princípios da LGPD.",
      "gabarito": "E",
      "porQue": "Finalidade, necessidade e segurança continuam exigíveis."
    },
    {
      "id": "memoria-rt-10-3-5",
      "afirmacao": "Imparcialidade exige conferir sempre peso idêntico a evidência científica robusta e alegação sem fundamento.",
      "gabarito": "E",
      "porQue": "É preciso avaliar qualidade, pertinência e limites das evidências."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-10-3-bloco-1",
    "titulo": "O Marco Regulatório da Transparência Pública: A Lei nº 12.527/2011 (LAI)",
    "objetivos": [
      "Aplicar publicidade e resposta a pedidos com âmbito e exceções próprios."
    ],
    "conteudo": "A Lei de Acesso à Informação regulamenta o direito fundamental consagrado no **Art. 5º, XXXIII**, no **Art. 37, § 3º, II** e no **Art. 216, § 2º** da Constituição Federal de 1988, aplicável a todos os Poderes da União, dos Estados, do Distrito Federal e dos Municípios, e, no que couber, às entidades privadas sem fins lucrativos abrangidas pelo art. 2º, quanto à parcela dos recursos públicos recebidos e sua destinação:\n\n```tree\nTITLE: Princípios Estruturantes da LAI (Lei nº 12.527/2011)\n- Direito Constitucional de Acesso (CF/88) | Arts. 5º XXXIII, 37 § 3º II e 216 § 2º\n  - Lei de Acesso à Informação (LAI) | Marco regulatório da transparência republicana\n    - Publicidade como Regra Geral | Acesso amplo de ofício (transparência ativa) e sob demanda (passiva)\n    - Sigilo como Exceção Estrita | Classificação por segurança é regime específico; proteção pessoal e outros sigilos legais têm fundamentos próprios\n    - Gratuidade do Acesso | Isenção total de tarifas, admitida cobrança exclusiva de custos de reprografia\n    - Vedação de Exigência de Motivo | Ilegalidade de qualquer exigência sobre os motivos determinantes do pedido\n```\n\n#### A. Diretrizes Fundamentais (Art. 3º):\n1. A **publicidade como preceito geral** e o **sigilo como exceção**;\n2. Divulgação de informações de interesse público, independentemente de solicitações;\n3. Utilização de meios de comunicação viabilizados pela tecnologia da informação;\n4. Fomento ao desenvolvimento da cultura de transparência na administração pública;\n5. Desenvolvimento do controle social da administração pública.\n\n#### B. Transparência Ativa vs. Transparência Passiva\n* **Transparência Ativa (Art. 8º):**\n  * Dever de ofício dos órgãos e entidades públicas de promover a divulgação na Internet de informações de interesse coletivo ou geral produzidas ou custodiadas por eles, **independentemente de qualquer requerimento cidadão**.\n  * *Requisitos Mínimos Obrigatórios:* Registro das competências e estrutura organizacional; endereços e telefones das unidades e horários de atendimento; registros de quaisquer repasses ou transferências de recursos financeiros; registros das despesas e receitas; informações concernentes a procedimentos licitatórios (com editais e contratos na íntegra); dados gerais para o acompanhamento de programas, ações, projetos e obras; respostas a perguntas mais frequentes da sociedade (FAQ).\n  * *Padrões Tecnológicos:* Formatos abertos, estruturados e legíveis por máquina (ex.: CSV, JSON, XML), observados requisitos de autenticidade, integridade e acesso; ser CSV ou JSON não comprova, sozinho, a autenticidade ou integridade.\n* **Transparência Passiva (Serviço de Informações ao Cidadão - SIC - Arts. 9º a 14):**\n  * Mecanismo pelo qual o órgão atende a demandas individuais específicas formuladas pela sociedade.\n  * *Proibição de Exigência de Motivação (Art. 10, § 3º — técnica de distrator recorrente):* **São expressamente vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.** O requerente precisa apenas identificar-se (nome e documento) e especificar a informação pretendida.\n  * *Prazos Oficiais de Resposta:*\n    * Se a informação requerida estiver disponível, o acesso deve ser concedido de forma **imediata**.\n    * Não sendo possível o acesso imediato, o órgão público tem o prazo de **até 20 dias** para responder, prazo este que pode ser prorrogado por mais **10 dias** mediante justificativa expressa encaminhada ao cidadão.\n\n---\n\n\n\nO art. 8º tem regras específicas, incluindo tratamento de municípios com até dez mil habitantes no § 4º, sem eliminar as obrigações fiscais de transparência ali ressalvadas. A busca e o fornecimento são gratuitos, admitido ressarcimento de serviços e materiais de reprodução nas condições do art. 12, com isenção para quem se enquadre na hipótese legal. Identificar o requerente não autoriza exigências que inviabilizem a solicitação. A decisão negativa deve indicar fundamentos e meios de recurso.\n\n**Aplicação e recuperação:** Se o órgão já possui informação acessível, deve fornecê-la de imediato. Não sendo possível, há prazo e prorrogação motivada, não silêncio administrativo ilimitado.",
    "checkpointIds": [
      "rt-10-3-1"
    ]
  },
  {
    "id": "sub-10-3-bloco-2",
    "titulo": "A Classificação de Informações Sigilosas e os Prazos Máximos",
    "objetivos": [
      "Distinguir classificação de segurança, acesso parcial e proteção de direitos."
    ],
    "conteudo": "Quando a publicidade da informação comprometer a segurança da sociedade e do Estado (Art. 23), ela poderá ser excepcionalmente classificada em um dos três graus de sigilo (Art. 24):\n\n```timeline\nRES | 1. Grau Reservado | Até 5 Anos de Restrição | Classificável por autoridades até DAS 101.5. Salvaguarda planos estratégicos e operações em andamento.\n---> Escalação de Gravidade\nSEC | 2. Grau Secreto | Até 15 Anos de Restrição | Classificável por Ministros, Comandantes Militares e dirigentes de estatais/autarquias federais.\n---> Grau Máximo\nULTRA | 3. Grau Ultrassecreto | Até 25 Anos de Restrição | Prorrogável 1x pela CMRI (até +25 anos). Competência restrita: Presidência, Ministros, Forças Armadas e Chefes de Missão.\n```\n\n#### A. Prazos e competências — atenção ao âmbito\n\nA enumeração de autoridades do art. 27 refere-se à **administração pública federal**. Outros Poderes e entes regulamentam a aplicação conforme suas competências. Não transforme ministros e DAS em autoridades universais para qualquer biblioteca municipal ou parlamentar. Os prazos contam da produção da informação, com possibilidade de termo final por evento nas condições do art. 24.\n1. **Ultrassecreta (até 25 anos):**\n   * Classificada privativamente por: Presidente e Vice-Presidente da República; Ministros de Estado e autoridades com prerrogativas equivalentes; Comandantes da Marinha, do Exército e da Aeronáutica; Chefes de Missões Diplomáticas permanentes no exterior.\n   * *Prorrogação Única:* No âmbito pertinente, a CMRI pode prorrogar uma vez o prazo ultrassecreto, por período não superior a 25 anos, **nas condições do art. 35, § 1º, III, e § 2º**. Não é extensão automática de qualquer classificação.\n2. **Secreta (até 15 anos):**\n   * Classificada pelas autoridades acima indicadas, acrescidas dos dirigentes de autarquias, fundações públicas e empresas estatais federais.\n3. **Reservada (até 5 anos):**\n   * Classificada por todas as autoridades precedentes, acrescidas dos agentes públicos que exerçam funções de direção, comando ou chefia de nível DAS 101.5 (ou hierarquicamente equivalentes).\n\n#### B. Tutela de direitos fundamentais e violações de direitos humanos\nO art. 21 veda negar informação necessária à tutela judicial ou administrativa de direitos fundamentais e impede restrição sobre condutas de violação de direitos humanos praticadas por agentes públicos ou a mando de autoridades públicas. Não use classificação de segurança para encobrir esses fatos. A aplicação deve preservar o acesso ao conteúdo pertinente e considerar a proteção de terceiros e dados que não sejam necessários à finalidade, sem converter isso em pretexto para ocultação do abuso.\n\nQuando apenas uma parte estiver protegida, o art. 7º, § 2º, prevê acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação. A existência de um anexo protegido não torna automaticamente todo o processo secreto.\n\n**Aplicação e recuperação:** Um relatório tem valores públicos e um anexo médico. Ocultar a parte protegida pode permitir acesso ao restante, sem classificar tudo como ultrassecreto.",
    "checkpointIds": [
      "cp-10-3-1",
      "cp-10-3-2",
      "rt-10-3-2"
    ]
  },
  {
    "id": "sub-10-3-bloco-3",
    "titulo": "Proteção das Informações Pessoais (Art. 31 da LAI)",
    "objetivos": [
      "Interpretar o art. 31 sem criar sigilo geral de cem anos."
    ],
    "conteudo": "A LAI, art. 31, trata de informações pessoais com respeito à intimidade, vida privada, honra, imagem, liberdades e garantias individuais. A restrição das informações abrangidas pelo § 1º, I, é de **até cem anos desde a produção**, independentemente da classificação de segurança. Não constitui quarto grau de sigilo nem prazo obrigatório para todo dado pessoal.\n\nO acesso pode ocorrer por agentes legalmente autorizados e pelo titular; divulgação ou acesso por terceiros depende de previsão legal ou consentimento, ressalvadas as hipóteses pertinentes. O § 3º dispensa consentimento em situações específicas, como prevenção/diagnóstico médico com as condições legais, estatísticas/pesquisas de evidente interesse público sem identificação, ordem judicial, defesa de direitos humanos e proteção de interesse público geral preponderante.\n\nO § 4º impede invocar a restrição para prejudicar apuração de irregularidades em que o titular esteja envolvido ou recuperação de fatos históricos de maior relevância. Essa regra não equivale a uma autorização geral para expor qualquer dado íntimo em todo processo administrativo.\n\n**Roteiro de aplicação:** identifique a informação concreta e o titular; determine finalidade e base de acesso; verifique necessidade, hipótese legal e proteção de terceiros; forneça a parte acessível; documente a decisão. “Contém nomes” não é fundamento suficiente para negar integralmente um documento de interesse público.\n\n**Aplicação e recuperação:** A presença do nome de servidor não basta para impor restrição por cem anos. Identifique informação e fundamento concretos.",
    "checkpointIds": [
      "rt-10-3-3"
    ]
  },
  {
    "id": "sub-10-3-bloco-4",
    "titulo": "A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) no Setor Público",
    "objetivos": [
      "Compatibilizar base legal, princípios e categorias de dados."
    ],
    "conteudo": "A LGPD tem âmbito definido nos arts. 1º–4º, com hipóteses de incidência e exclusões específicas; não se aplica indistintamente a toda operação de qualquer pessoa:\n\n```tree\nTITLE: Conceitos Fundamentais da LGPD (Lei nº 13.709/2018)\n- Marco Legal da Proteção de Dados | Aplicação a pessoas naturais e pessoas jurídicas públicas e privadas\n  - Dado Pessoal | Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, RG, IP, geolocalização)\n  - Dado Pessoal Sensível | Dados sobre origem racial/étnica, convicção religiosa, opinião política, saúde, biometria ou genética\n  - Tratamento pelo Setor Público | Exige base legal adequada à operação, princípios e condições do setor público; consentimento não é a única base\n  - Encarregado de Proteção (DPO) | Canal de comunicação institucional entre o controlador dos dados, os titulares e a ANPD\n```\n\n#### A. Princípios Norteadores do Tratamento (Art. 6º):\n* **Finalidade e Adequação:** Propósitos legítimos, específicos e informados ao titular, compatíveis com as atribuições legais da instituição.\n* **Necessidade (Minimização):** Limitação do tratamento ao mínimo necessário para a realização das finalidades públicas.\n* **Livre Acesso e Qualidade dos Dados:** Garantia aos titulares de consulta facilitada e exatidão dos registros.\n* **Segurança e Prevenção:** Adoção de medidas técnicas e organizacionais contra acessos não autorizados, incidentes e vazamentos.\n\n---\n\n\n\nA Lei 15.352/2026 atualizou a definição de encarregado e a referência à **Agência Nacional de Proteção de Dados (ANPD)**. Distinga controlador, operador e encarregado. Nem todo dado pessoal é sensível; sensíveis são as categorias do art. 5º, II. Pseudonimização pode manter possibilidade de associação e não equivale automaticamente à anonimização do art. 12.\n\nNo setor público, arts. 23–30 devem ser lidos com as bases dos arts. 7º e 11 conforme o dado e a operação. A dispensa de consentimento não afasta necessidade, adequação, segurança, transparência e responsabilização. Acesso a documento público não autoriza qualquer tratamento posterior para qualquer finalidade.\n\n**Aplicação e recuperação:** Cumprir obrigação legal pode dispensar consentimento para uma operação, sem autorizar coletar dados excessivos.",
    "checkpointIds": [
      "rt-10-3-4"
    ]
  },
  {
    "id": "sub-10-3-bloco-5",
    "titulo": "Ética da Informação e Neutralidade Técnica na Pesquisa Parlamentar",
    "objetivos": [
      "Produzir pesquisa imparcial com recorte e limites declarados."
    ],
    "conteudo": "No ecossistema de assessoria informacional da Câmara dos Deputados e do Congresso Nacional, a atuação do bibliotecário e do analista documental rege-se por cânones deontológicos e funcionais intransigíveis:\n\n* **Princípio da Imparcialidade e Neutralidade Técnica:**\n  * O bibliotecário parlamentar atende a deputados federais de todas as agremiações políticas, ideologias e correntes partidárias (bancadas do governo e da oposição).\n  * Em consultas de pesquisa doutrinária, legislativa e jurisprudencial formuladas por parlamentares ou comissões, **é estritamente vedado ao bibliotecário direcionar a seleção informacional** para favorecer a tese política ou a preferência ideológica do solicitante.\n  * O dossiê bibliográfico deve refletir com método explícito, pluralidade pertinente e avaliação da qualidade das evidências o estado da arte do tema em debate, apresentando tanto a corrente doutrinária majoritária quanto os argumentos das correntes minoritárias e dissidentes.\n* **Sigilo Profissional da Demanda Parlamentar:** A confidencialidade da demanda depende das normas, atribuições e condições aplicáveis; não existe regra geral de sigilo automático de toda pesquisa até o protocolo de uma proposição. Proteção de demanda, sigilo legal e restrição de dados pessoais são fundamentos distintos.\n\n---\n\n\nImparcialidade não exige atribuir igual peso a evidências robustas e alegações sem fundamento. Uma pesquisa pode ter escopo específico solicitado, mas precisa declarar esse recorte, evitar manipulação e não ocultar deliberadamente fontes relevantes que contradigam uma conclusão apresentada como abrangente.\n\n**Aplicação e recuperação:** Relatório encomendado para uma tese específica precisa declarar o escopo e não apresentar busca seletiva como revisão completa e neutra.",
    "checkpointIds": [
      "cp-10-3-3",
      "rt-10-3-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "lai",
    "titulo": "Lei 12.527/2011 — LAI",
    "localizador": "Arts. 2º, 7º–14, 21, 24, 27, 31 e 35.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2011/lei-12527-18-novembro-2011-611802-normaatualizada-pl.html"
  },
  {
    "id": "lgpd",
    "titulo": "Lei 13.709/2018 — LGPD",
    "localizador": "Texto atualizado, inclusive alterações de 2026; arts. 4º–7º, 11–12 e 23–30.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
  },
  {
    "id": "anpd",
    "titulo": "ANPD — documentos e publicações",
    "localizador": "Orientações de tratamento de dados pelo poder público.",
    "url": "https://www.gov.br/anpd/pt-br/documentos-e-publicacoes"
  }
],
};
