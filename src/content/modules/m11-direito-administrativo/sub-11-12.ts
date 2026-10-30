import type { ModuloFilho } from '../../../domain/types';

export const submodulo1112: ModuloFilho = {
  id: 'sub-11-12',
  numero: '11.12',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)',
  preRequisitos: ["sub-11-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Diretrizes de transparência ativa, dados abertos e tutela de privacidade."
      },
      {
          "submoduloId": "sub-6-7",
          "titulo": "IA Aplicada à Informação",
          "motivo": "Conformidade com a LGPD no uso de modelos de linguagem e prompts."
      }
  ],
  titulo: 'Transparência e Privacidade: Lei de Acesso à Informação e LGPD',
  titulo_curto: 'LAI e LGPD no Setor Público',
  antesDeLer: [
  {
    "termo": "Acesso parcial",
    "definicao": "Fornecimento da parte acessível quando outra está protegida nos termos legais.",
    "exemploBiblioteca": "Ocultar dado médico não implica negar todo o relatório de despesas."
  },
  {
    "termo": "Dado pessoal e sensível",
    "definicao": "Sensível é categoria específica da LGPD; nem todo identificador é sensível.",
    "exemploBiblioteca": "Nome/CPF identificam pessoa; dados de saúde têm tratamento específico."
  }
],
  descricaoCurta: "Separar divulgação ativa e resposta a requerimento. Diferenciar classificação, informação pessoal e instância recursal. Aplicar definições e distinguir dado pessoal de sensível. Escolher fundamento e limitar tratamento à finalidade. Compatibilizar acesso parcial e proteção, sem negar tudo.",
  tempoEstimadoMinutos: 19,
  autoresChave: [
  "Lei 12.527/2011 — LAI",
  "Lei 13.709/2018 — LGPD",
  "ANPD — Tratamento de dados pelo poder público"
],
  alertasCebraspe: [
  "A LAI veda exigir os motivos determinantes da solicitação de informação de interesse público.",
  "Sensíveis são categorias especificadas no art. 5º, II. Nome ou CPF não são sensíveis apenas por identificarem alguém.",
  "A dispensa de consentimento não afasta princípios e demais deveres."
],
  teoriaDensaMarkdown: "### A Lei de Acesso à Informação (Lei nº 12.527/2011 - LAI)\n\nA LAI regulamenta o direito constitucional fundamental de acesso à informação pública consagrado no art. 5º, XXXIII, da CF/88. Estabelece o princípio da **publicidade como preceito geral** e da restrição como exceção fundamentada no regime pertinente; classificação, proteção pessoal e outros sigilos legais têm regras diferentes:\n\n#### 1.1 Transparência Ativa vs. Transparência Passiva\n* **Transparência Ativa (Art. 8º):** Divulgação obrigatória, sistemática e proativa de informações de interesse geral nos portais institucionais oficiais, **independentemente de requerimento** de qualquer cidadão:\n  * Exige ferramentas de pesquisa de conteúdo, formatos abertos não proprietários estruturados e legíveis por máquina (CSV, XML, JSON), acessibilidade a pessoas com deficiência e atualização permanente de despesas, licitações, contratos e tabelas de remunerações.\n* **Transparência Passiva (Arts. 10 a 14):** Disponibilização de informações específicas **mediante prévio requerimento** formulado pelo cidadão:\n  * O pedido pode ser feito por qualquer meio legítimo (físico ou eletrônico - e-SIC / Fala.BR).\n  * **Vedações Estritas à Administração:** É expressamente vedado exigir quaisquer justificativas determinantes da solicitação de informação de interesse público (art. 10, § 3º). O cidadão não precisa explicar por que quer a informação!\n  * **Prazos da LAI (Art. 11):** Acesso imediato se disponível; caso contrário, prazo de **20 dias**, prorrogável motivadamente por mais **10 dias** mediante comunicação expressa ao requerente com as razões da dilação.\n\n**Aplicação e recuperação:** Relatório de despesas já existe e pode ser disponibilizado. Não se exige que o requerente demonstre interesse jurídico ou explique motivos. Se não houver acesso imediato, aplicam-se prazo e procedimentos da LAI, inclusive comunicação da prorrogação motivada. Transparência ativa não substitui responder pedidos sobre o que não foi publicado.\n\n### Classificação de Informações Sigilosas na LAI\n\nSão passíveis de classificação temporária as informações cujo sigilo seja comprovadamente imprescindível à segurança da sociedade e do Estado (art. 23):\n\n#### 2.1 Os Três Graus de Sigilo (Art. 24)\n$\\text{Prazos de Sigilo} = \\begin{cases} \\text{Ultrassecreto} & \\longrightarrow \\text{Até 25 anos (prorrogável 1x por igual período pela CMRI)} \\\\ \\text{Secreto} & \\longrightarrow \\text{Até 15 anos (sem prorrogação)} \\\\ \\text{Reservado} & \\longrightarrow \\text{Até 5 anos (sem prorrogação)} \\end{cases}$\n\n* **Comissão Mista de Reavaliação de Informações (CMRI):** Órgão colegiado que decide, em última instância na esfera do Executivo federal, sobre a prorrogação do prazo de sigilo de documentos ultrassecretos e aprecia recursos nos limites do Executivo federal. Não é instância universal de recurso para todas as Casas e Poderes.\n* **Informações Pessoais (Art. 31):** Informações relativas à intimidade, vida privada, honra e imagem dos cidadãos têm acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de **100 anos** a contar da data de sua produção, tendo acesso assegurado o próprio titular e agentes públicos para cumprimento de atribuições legais.\n\n**Aplicação e recuperação:** Documento contém dado privado, mas não trata de segurança do Estado. Ele não se torna automaticamente reservado, secreto ou ultrassecreto. O prazo de até cem anos do art. 31 não é uma classificação universal de qualquer dado pessoal nem obrigação de negar acesso por um século. Existem titulares autorizados, exceções e critérios específicos.\n\n### A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)\n\nA LGPD dispõe sobre o tratamento de dados pessoais em meios físicos e digitais com o objetivo de proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural:\n\n#### 3.1 Conceitos Chave da LGPD\n* **Dado Pessoal:** Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, endereço, e-mail, matrícula funcional, geolocalização).\n* **Dado Pessoal Sensível:** Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a pessoa natural, conforme a definição legal.\n* **Tratamento:** Toda operação realizada com dados pessoais (coleta, classificação, acesso, reprodução, armazenamento, eliminação ou transferência).\n* **Figuras / Agentes de Tratamento:**\n  * **Controlador:** Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões sobre o tratamento (ex.: a Câmara dos Deputados).\n  * **Operador:** Pessoa natural ou jurídica que realiza o tratamento em nome do controlador (ex.: empresa contratada que processa dados de cadastro).\n  * **Encarregado pelo Tratamento de Dados (DPO):** Na redação do art. 5º, VIII, dada pela Lei 15.352/2026, pessoa indicada pelo controlador e operador para atuar como canal entre controlador, titulares e a **Agência Nacional de Proteção de Dados (ANPD)**. Confira também as regras específicas de indicação e dispensa aplicáveis; não confunda encarregado com controlador ou operador.\n\n**Aplicação e recuperação:** Nome e CPF identificam pessoa; convicção religiosa vinculada a pessoa integra a lista de sensíveis. Trocar o nome por matrícula ainda pode permitir identificação. Pseudonimização não equivale necessariamente à anonimização do art. 12. O contexto e os meios razoáveis de reidentificação precisam ser considerados.\n\n### O Tratamento de Dados pelo Poder Público (Arts. 23 a 30)\n\nO tratamento de dados pessoais pelas pessoas jurídicas de direito público deve atender à sua **finalidade pública**, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público:\n\n#### 4.1 Bases Legais no Setor Público (Art. 7º da LGPD)\nNo setor público, não se deve presumir que todo tratamento dependa de consentimento. A base deve ser adequada à operação e ao regime, entre as hipóteses legais; exemplos pertinentes incluem:\n1. Cumprimento de **obrigação legal ou regulatória** pelo controlador (ex.: publicação de atos de nomeação e despesas funcionais);\n2. Execução de **políticas públicas** previstas em leis, regulamentos ou contratos/convênios (ex.: cadastro de pesquisadores e consulentes na Biblioteca Pedro Aleixo);\n3. Proteção da vida ou da incolumidade física do titular ou de terceiros.\n\n**Aplicação e recuperação:** A biblioteca precisa cadastrar usuário para executar atribuição. Identifique operação, necessidade, base e retenção; não escolha consentimento apenas por ser o primeiro inciso da lei. Outra base legítima também não libera coleta excessiva. Se dados forem sensíveis, examine art. 11; o art. 7º não resolve sozinho todos os casos.\n\n### Harmonização entre LAI e LGPD na Biblioteca e na Câmara dos Deputados\n\nA jurisprudência do STF (Tema 483 da Repercussão Geral) e as diretrizes conjuntas da CGU e da ANPD fixaram a harmonização dos dois diplomas:\n* **Não há contradição:** A LAI garante o acesso à informação pública e governamental; a LGPD protege a privacidade dos dados pessoais de pessoas físicas.\n* **Remuneração de Servidores Públicos:** O Tema 483 reconhece a legitimidade de publicar nomes e valores de vencimentos e vantagens. Não autoriza divulgar indistintamente toda informação privada do servidor ou qualquer campo cadastral.\n* **Dados Pessoais em Documentos Públicos:** É preciso avaliar a base de acesso, finalidade e alcance. Quando a restrição incide apenas em parte, o art. 7º, § 2º, da LAI assegura acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação. Tarja pode reduzir exposição, mas não é automaticamente anonimização irreversível. CPF e endereço são dados pessoais, não entram por esse fato na lista legal de sensíveis; prontuários podem conter dados de saúde sensíveis.\n\n**Aplicação e recuperação:** Processo de compra contém valores públicos e documento médico anexo. A existência de uma parte protegida não justifica necessariamente negar todo o processo. Preserve a parte acessível e fundamente a restrição da outra. Também não divulgue prontuário inteiro alegando que a pasta foi produzida por órgão público. Em ambos os sentidos é necessário delimitar objeto e finalidade.",
  teoriaDidaticaMarkdown: "### Revisão: acesso e proteção dependem do objeto\n\nAtiva: divulgar sem pedido; passiva: responder ao requerimento, sem exigir motivos. Acesso imediato se disponível; caso contrário, vinte dias com prorrogação motivada de dez nas condições legais. Classificação (25/15/5 anos) não é a mesma restrição de informação pessoal do art. 31. A CMRI tem âmbito específico. LGPD: dado pessoal não equivale a sensível; controlador e operador têm funções distintas; encarregado é canal, com redação atualizada em 2026. Base legal não substitui finalidade, necessidade e segurança. Acesso parcial e ocultação podem compatibilizar direitos; tarja não prova anonimização.\n",
  checkpoints: [
  {
    "id": "cp-11-12-1",
    "pergunta": "Micro-Checkpoint 1: Exigência de Justificativa em Pedido de Acesso (LAI)",
    "item": "Servidor responsável pelo atendimento de serviço de informação ao cidadão (SIC) na Câmara dos Deputados pode condicionar o fornecimento de relatório de gastos com acervo à declaração formal, pelo solicitante, dos motivos determinantes e do interesse jurídico no pedido.",
    "gabarito": "E",
    "justificativa": "O art. 10, § 3º, da LAI veda exigir motivos determinantes do pedido de informação de interesse público. Identificação legítima do requerente não é justificativa dos motivos.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "versao_correta": "O pedido não pode ser condicionado à explicação dos motivos determinantes."
  },
  {
    "id": "cp-11-12-2",
    "pergunta": "Micro-Checkpoint 2: Prazos Máximos de Classificação de Sigilo na LAI",
    "item": "No âmbito das competências federais pertinentes, a LAI fixa até vinte e cinco anos para ultrassecreto e admite prorrogação pela CMRI, uma única vez por igual período, nas condições restritas do art. 35.",
    "gabarito": "C",
    "justificativa": "O prazo inicial está no art. 24; a prorrogação é excepcional e condicionada pelo art. 35. Não se trata de sigilo automático nem instância comum a todos os Poderes.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483."
  },
  {
    "id": "cp-11-12-3",
    "pergunta": "Micro-Checkpoint 3: Base Legal para Tratamento de Dados no Setor Público (LGPD)",
    "item": "Sob a égide da LGPD, a Biblioteca da Câmara dos Deputados só pode tratar os dados cadastrais de pesquisadores externos e parlamentares caso obtenha previamente o consentimento expresso e inequívoco de cada titular.",
    "gabarito": "E",
    "justificativa": "Consentimento é uma das bases, não condição universal. A operação pública deve ter fundamento adequado e observar finalidade, necessidade e demais exigências, inclusive art. 11 se houver sensíveis.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "versao_correta": "O tratamento pode apoiar-se em outra hipótese legal pertinente, sem dispensar princípios e direitos."
  },
  {
    "id": "rt-11-12-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O órgão pode exigir que o cidadão explique por que deseja relatório de gastos públicos antes de analisar o pedido de acesso.",
    "gabarito": "E",
    "justificativa": "A LAI veda exigir os motivos determinantes da solicitação de informação de interesse público.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)",
    "habilidade": "aplicar",
    "versao_correta": "Não se exige justificativa de motivos para o pedido de informação pública."
  },
  {
    "id": "rt-11-12-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo dado pessoal é automaticamente dado sensível na LGPD.",
    "gabarito": "E",
    "justificativa": "Sensíveis são categorias especificadas no art. 5º, II. Nome ou CPF não são sensíveis apenas por identificarem alguém.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)",
    "habilidade": "aplicar",
    "versao_correta": "Dado sensível é categoria específica; nem todo dado pessoal o é."
  },
  {
    "id": "rt-11-12-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Quando apenas parte do documento está protegida, a LAI prevê acesso à parte não sigilosa com os meios do art. 7º, § 2º.",
    "gabarito": "C",
    "justificativa": "Acesso parcial permite compatibilizar proteção e publicidade. Exige delimitar a informação protegida, sem negar automaticamente tudo.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-12-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma base legal diferente de consentimento dispensa observar necessidade e segurança.",
    "gabarito": "E",
    "justificativa": "A dispensa de consentimento não afasta princípios e demais deveres.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)",
    "habilidade": "aplicar",
    "versao_correta": "Toda base legal exige observar os princípios e deveres aplicáveis."
  },
  {
    "id": "rt-11-12-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Trocar nomes por códigos sempre torna os dados anonimizados e fora da LGPD, mesmo que se possa reidentificar facilmente.",
    "gabarito": "E",
    "justificativa": "A reversibilidade e os meios razoáveis de reidentificação importam no art. 12. Código não demonstra anonimização por si.",
    "fonte": "Lei 12.527/2011, arts. 7º–14, 23–24, 31 e 35; LGPD, arts. 5º–7º, 11–12 e 23–30, com Lei 15.352/2026; STF, Tema 483.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 12: LAI, LGPD e Ética Pública)",
    "habilidade": "aplicar",
    "versao_correta": "A substituição por códigos não basta para demonstrar anonimização nos termos legais."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-12-fonte-lai",
      "nome": "Lei 12.527/2011 — LAI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 12.527/2011 — LAI",
      "ideiaChave": "Acesso, classificação, informação pessoal e âmbito dos recursos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-12-fonte-lgpd",
      "nome": "Lei 13.709/2018 — LGPD",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 13.709/2018 — LGPD",
      "ideiaChave": "Texto atualizado, inclusive definições alteradas em 2026.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-12-fonte-anpd",
      "nome": "ANPD — Tratamento de dados pelo poder público",
      "ano": "Referência de consulta",
      "obraPrincipal": "ANPD — Tratamento de dados pelo poder público",
      "ideiaChave": "Guia orientativo e princípios; não substitui a lei.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-12-3",
      "afirmacao": "Quando apenas parte do documento está protegida, a LAI prevê acesso à parte não sigilosa com os meios do art. 7º, § 2º.",
      "gabarito": "C",
      "porQue": "Acesso parcial permite compatibilizar proteção e publicidade. Exige delimitar a informação protegida, sem negar automaticamente tudo."
    },
    {
      "id": "memoria-rt-11-12-4",
      "afirmacao": "Uma base legal diferente de consentimento dispensa observar necessidade e segurança.",
      "gabarito": "E",
      "porQue": "A dispensa de consentimento não afasta princípios e demais deveres."
    },
    {
      "id": "memoria-rt-11-12-5",
      "afirmacao": "Trocar nomes por códigos sempre torna os dados anonimizados e fora da LGPD, mesmo que se possa reidentificar facilmente.",
      "gabarito": "E",
      "porQue": "A reversibilidade e os meios razoáveis de reidentificação importam no art. 12. Código não demonstra anonimização por si."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-12-bloco-1",
    "titulo": "A Lei de Acesso à Informação (Lei nº 12.527/2011 - LAI)",
    "objetivos": [
      "Separar divulgação ativa e resposta a requerimento."
    ],
    "conteudo": "A LAI regulamenta o direito constitucional fundamental de acesso à informação pública consagrado no art. 5º, XXXIII, da CF/88. Estabelece o princípio da **publicidade como preceito geral** e da restrição como exceção fundamentada no regime pertinente; classificação, proteção pessoal e outros sigilos legais têm regras diferentes:\n\n#### 1.1 Transparência Ativa vs. Transparência Passiva\n* **Transparência Ativa (Art. 8º):** Divulgação obrigatória, sistemática e proativa de informações de interesse geral nos portais institucionais oficiais, **independentemente de requerimento** de qualquer cidadão:\n  * Exige ferramentas de pesquisa de conteúdo, formatos abertos não proprietários estruturados e legíveis por máquina (CSV, XML, JSON), acessibilidade a pessoas com deficiência e atualização permanente de despesas, licitações, contratos e tabelas de remunerações.\n* **Transparência Passiva (Arts. 10 a 14):** Disponibilização de informações específicas **mediante prévio requerimento** formulado pelo cidadão:\n  * O pedido pode ser feito por qualquer meio legítimo (físico ou eletrônico - e-SIC / Fala.BR).\n  * **Vedações Estritas à Administração:** É expressamente vedado exigir quaisquer justificativas determinantes da solicitação de informação de interesse público (art. 10, § 3º). O cidadão não precisa explicar por que quer a informação!\n  * **Prazos da LAI (Art. 11):** Acesso imediato se disponível; caso contrário, prazo de **20 dias**, prorrogável motivadamente por mais **10 dias** mediante comunicação expressa ao requerente com as razões da dilação.\n\n**Aplicação e recuperação:** Relatório de despesas já existe e pode ser disponibilizado. Não se exige que o requerente demonstre interesse jurídico ou explique motivos. Se não houver acesso imediato, aplicam-se prazo e procedimentos da LAI, inclusive comunicação da prorrogação motivada. Transparência ativa não substitui responder pedidos sobre o que não foi publicado.",
    "checkpointIds": [
      "cp-11-12-1",
      "rt-11-12-1"
    ]
  },
  {
    "id": "sub-11-12-bloco-2",
    "titulo": "Classificação de Informações Sigilosas na LAI",
    "objetivos": [
      "Diferenciar classificação, informação pessoal e instância recursal."
    ],
    "conteudo": "São passíveis de classificação temporária as informações cujo sigilo seja comprovadamente imprescindível à segurança da sociedade e do Estado (art. 23):\n\n#### 2.1 Os Três Graus de Sigilo (Art. 24)\n$\\text{Prazos de Sigilo} = \\begin{cases} \\text{Ultrassecreto} & \\longrightarrow \\text{Até 25 anos (prorrogável 1x por igual período pela CMRI)} \\\\ \\text{Secreto} & \\longrightarrow \\text{Até 15 anos (sem prorrogação)} \\\\ \\text{Reservado} & \\longrightarrow \\text{Até 5 anos (sem prorrogação)} \\end{cases}$\n\n* **Comissão Mista de Reavaliação de Informações (CMRI):** Órgão colegiado que decide, em última instância na esfera do Executivo federal, sobre a prorrogação do prazo de sigilo de documentos ultrassecretos e aprecia recursos nos limites do Executivo federal. Não é instância universal de recurso para todas as Casas e Poderes.\n* **Informações Pessoais (Art. 31):** Informações relativas à intimidade, vida privada, honra e imagem dos cidadãos têm acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de **100 anos** a contar da data de sua produção, tendo acesso assegurado o próprio titular e agentes públicos para cumprimento de atribuições legais.\n\n**Aplicação e recuperação:** Documento contém dado privado, mas não trata de segurança do Estado. Ele não se torna automaticamente reservado, secreto ou ultrassecreto. O prazo de até cem anos do art. 31 não é uma classificação universal de qualquer dado pessoal nem obrigação de negar acesso por um século. Existem titulares autorizados, exceções e critérios específicos.",
    "checkpointIds": [
      "cp-11-12-2"
    ]
  },
  {
    "id": "sub-11-12-bloco-3",
    "titulo": "A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)",
    "objetivos": [
      "Aplicar definições e distinguir dado pessoal de sensível."
    ],
    "conteudo": "A LGPD dispõe sobre o tratamento de dados pessoais em meios físicos e digitais com o objetivo de proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural:\n\n#### 3.1 Conceitos Chave da LGPD\n* **Dado Pessoal:** Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, endereço, e-mail, matrícula funcional, geolocalização).\n* **Dado Pessoal Sensível:** Dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a pessoa natural, conforme a definição legal.\n* **Tratamento:** Toda operação realizada com dados pessoais (coleta, classificação, acesso, reprodução, armazenamento, eliminação ou transferência).\n* **Figuras / Agentes de Tratamento:**\n  * **Controlador:** Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões sobre o tratamento (ex.: a Câmara dos Deputados).\n  * **Operador:** Pessoa natural ou jurídica que realiza o tratamento em nome do controlador (ex.: empresa contratada que processa dados de cadastro).\n  * **Encarregado pelo Tratamento de Dados (DPO):** Na redação do art. 5º, VIII, dada pela Lei 15.352/2026, pessoa indicada pelo controlador e operador para atuar como canal entre controlador, titulares e a **Agência Nacional de Proteção de Dados (ANPD)**. Confira também as regras específicas de indicação e dispensa aplicáveis; não confunda encarregado com controlador ou operador.\n\n**Aplicação e recuperação:** Nome e CPF identificam pessoa; convicção religiosa vinculada a pessoa integra a lista de sensíveis. Trocar o nome por matrícula ainda pode permitir identificação. Pseudonimização não equivale necessariamente à anonimização do art. 12. O contexto e os meios razoáveis de reidentificação precisam ser considerados.",
    "checkpointIds": [
      "rt-11-12-2",
      "rt-11-12-5"
    ]
  },
  {
    "id": "sub-11-12-bloco-4",
    "titulo": "O Tratamento de Dados pelo Poder Público (Arts. 23 a 30)",
    "objetivos": [
      "Escolher fundamento e limitar tratamento à finalidade."
    ],
    "conteudo": "O tratamento de dados pessoais pelas pessoas jurídicas de direito público deve atender à sua **finalidade pública**, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público:\n\n#### 4.1 Bases Legais no Setor Público (Art. 7º da LGPD)\nNo setor público, não se deve presumir que todo tratamento dependa de consentimento. A base deve ser adequada à operação e ao regime, entre as hipóteses legais; exemplos pertinentes incluem:\n1. Cumprimento de **obrigação legal ou regulatória** pelo controlador (ex.: publicação de atos de nomeação e despesas funcionais);\n2. Execução de **políticas públicas** previstas em leis, regulamentos ou contratos/convênios (ex.: cadastro de pesquisadores e consulentes na Biblioteca Pedro Aleixo);\n3. Proteção da vida ou da incolumidade física do titular ou de terceiros.\n\n**Aplicação e recuperação:** A biblioteca precisa cadastrar usuário para executar atribuição. Identifique operação, necessidade, base e retenção; não escolha consentimento apenas por ser o primeiro inciso da lei. Outra base legítima também não libera coleta excessiva. Se dados forem sensíveis, examine art. 11; o art. 7º não resolve sozinho todos os casos.",
    "checkpointIds": [
      "cp-11-12-3",
      "rt-11-12-4"
    ]
  },
  {
    "id": "sub-11-12-bloco-5",
    "titulo": "Harmonização entre LAI e LGPD na Biblioteca e na Câmara dos Deputados",
    "objetivos": [
      "Compatibilizar acesso parcial e proteção, sem negar tudo."
    ],
    "conteudo": "A jurisprudência do STF (Tema 483 da Repercussão Geral) e as diretrizes conjuntas da CGU e da ANPD fixaram a harmonização dos dois diplomas:\n* **Não há contradição:** A LAI garante o acesso à informação pública e governamental; a LGPD protege a privacidade dos dados pessoais de pessoas físicas.\n* **Remuneração de Servidores Públicos:** O Tema 483 reconhece a legitimidade de publicar nomes e valores de vencimentos e vantagens. Não autoriza divulgar indistintamente toda informação privada do servidor ou qualquer campo cadastral.\n* **Dados Pessoais em Documentos Públicos:** É preciso avaliar a base de acesso, finalidade e alcance. Quando a restrição incide apenas em parte, o art. 7º, § 2º, da LAI assegura acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação. Tarja pode reduzir exposição, mas não é automaticamente anonimização irreversível. CPF e endereço são dados pessoais, não entram por esse fato na lista legal de sensíveis; prontuários podem conter dados de saúde sensíveis.\n\n**Aplicação e recuperação:** Processo de compra contém valores públicos e documento médico anexo. A existência de uma parte protegida não justifica necessariamente negar todo o processo. Preserve a parte acessível e fundamente a restrição da outra. Também não divulgue prontuário inteiro alegando que a pasta foi produzida por órgão público. Em ambos os sentidos é necessário delimitar objeto e finalidade.",
    "checkpointIds": [
      "rt-11-12-3"
    ]
  }
],
fontesTeoria: [
  {
    "id": "lai",
    "titulo": "Lei 12.527/2011 — LAI",
    "localizador": "Acesso, classificação, informação pessoal e âmbito dos recursos.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2011/lei-12527-18-novembro-2011-611802-normaatualizada-pl.html"
  },
  {
    "id": "lgpd",
    "titulo": "Lei 13.709/2018 — LGPD",
    "localizador": "Texto atualizado, inclusive definições alteradas em 2026.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
  },
  {
    "id": "anpd",
    "titulo": "ANPD — Tratamento de dados pelo poder público",
    "localizador": "Guia orientativo e princípios; não substitui a lei.",
    "url": "https://www.gov.br/anpd/pt-br/documentos-e-publicacoes"
  }
],
};
