import type { ModuloFilho } from '../../../domain/types';

export const submodulo118: ModuloFilho = {
  id: 'sub-11-8',
  numero: '11.8',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 8: Controle da Administração Pública)',
  preRequisitos: ["sub-11-5"],
  titulo: 'Evolução da Gestão Pública: Patrimonialismo, Burocracia, NPM e Nova Governança Pública',
  titulo_curto: 'Modelos de Gestão e NPG',
  antesDeLer: [
  {
    "termo": "Produto e resultado",
    "definicao": "Produto é entrega; resultado é mudança associada à intervenção/uso.",
    "exemploBiblioteca": "Páginas digitalizadas são entrega; melhoria de acesso precisa de avaliação."
  },
  {
    "termo": "Valor público",
    "definicao": "Valor proposto deve ser articulado a ambiente autorizador e capacidade operacional.",
    "exemploBiblioteca": "Uma solução tecnicamente viável ainda exige legitimidade e autorização."
  }
],
  descricaoCurta: "Comparar modelos sem pressupor substituição histórica integral. Reconhecer rede, coordenação e coprodução. Relacionar proposta de valor, autorização e capacidade.",
  tempoEstimadoMinutos: 16,
  autoresChave: [
  "Plano Diretor da Reforma do Aparelho do Estado — 1995",
  "TCU — Referencial Básico de Governança Organizacional"
],
  alertasCebraspe: [
  "A ênfase muda, mas não elimina legalidade e controles necessários.",
  "Os três vértices precisam de alinhamento; capacidade de executar não legitima por si uma iniciativa.",
  "A entrega pode ser observada sem que se tenha demonstrado o efeito posterior e sua causalidade."
],
  teoriaDensaMarkdown: "### Evolução Histórica dos Modelos de Gestão Pública\n\nO estudo da evolução da gestão pública reflete a busca contínua do Estado por legitimidade, combate à corrupção e eficácia social. Três modelos sucessivos e coexistentes marcaram essa trajetória:\n\n#### 1.1 O Modelo Patrimonialista\nPredominante nas monarquias absolutistas e no Brasil colonial e imperial:\n* **Características:** Total confusão entre o patrimônio público (*res publica*) e os bens privados do soberano (*res principis*). O Estado é gerido como propriedade privada do governante.\n* **Mecanismos Típicos:** Concessão de cargos públicos como benesses pessoais, sinecuras, prebendas hereditárias, corrupção institucionalizada, compadrio, clientelismo e nepotismo. Não há carreiras estruturadas nem concurso público.\n\n#### 1.2 O Modelo Burocrático (Racional-Legal de Max Weber)\nNasce a partir da segunda metade do século XIX (e no Brasil na década de 1930 com a criação do DASP na Era Vargas) com o objetivo primordial de combater a corrupção e o clientelismo patrimonialista:\n* **Pilares Centrais:**\n  1. **Formalismo e Impessoalidade:** A autoridade decorre da lei e do cargo, e não da pessoa que o ocupa. Ênfase na documentação, regras e previsibilidade; isso não significa que qualquer atividade humana na organização seja obrigatoriamente um documento escrito.\n  2. **Hierarquia Rigorosa:** Linha verticalizada de comando, supervisão e subordinação de competências.\n  3. **Profissionalização e Meritocracia:** Seleção por qualificação, carreira e profissionalização no modelo ideal; concurso e estabilidade no Brasil têm disciplina constitucional própria e não se aplicam universalmente a todo vínculo.\n  4. **Controle *a priori* dos Processos:** Controle preventivo rígido de procedimentos e compras para evitar qualquer desvio.\n* **Disfunções da Burocracia (Merton, Selznick e Gouldner):**\n  * O cumprimento cego das regras torna-se o próprio fim da organização (*inversão de meios e fins*);\n  * Rigidez procedimental absoluta, aversão ao risco, despersonalização do atendimento e lentidão exasperante perante demandas novas da sociedade.\n\n#### 1.3 A Nova Gestão Pública (New Public Management - NPM)\nEmerge na década de 1980 na Grã-Bretanha e nos EUA, refletindo a crise fiscal do Estado e o esgotamento da burocracia rígida:\n* **Pilares e Diretrizes (David Osborne e Ted Gaebler - *Reinventando o Governo*):**\n  * **Foco no Cidadão-Cliente:** O cidadão é visto como consumidor que merece serviços públicos de alto padrão e satisfação.\n  * **Orientação para Resultados:** Ênfase em **resultados e desempenho**, sem eliminar controles de legalidade, procedimentos ou controles prévios necessários.\n  * **Descentralização e Desregulamentação:** Delegação de autonomia operacional com contratualização de resultados (contratos de gestão).\n  * **Introdução de Mecanismos de Mercado:** Parcerias, terceirização de atividades-meio, leilões competitivos e privatizações de setores não estratégicos.\n* **O Gerencialismo no Brasil (O PDRAE de 1995):**\n  * O Plano Diretor da Reforma do Aparelho do Estado, liderado por Bresser-Pereira, dividiu o Estado em 4 setores:\n    1. *Núcleo Estratégico:* Formulação de leis e políticas (Poderes da República, Presidência, Ministérios) - propriedade estatal obrigatória;\n    2. *Atividades Exclusivas do Estado:* Poder de polícia e fiscalização (agências reguladoras, diplomacia, Receita Federal);\n    3. *Serviços Não Exclusivos:* Educação, saúde, cultura, pesquisa, bibliotecas e museus (prestados concorrencialmente pelo Estado e pelo terceiro setor, com discussão histórica de publicização e organizações sociais; OSCIP pertence a marco legal posterior, não é criação do PDRAE de 1995);\n    4. *Produção de Bens e Serviços para o Mercado:* Empresas estatais concorrenciais sujeitas a privatização.\n\n**Aplicação e recuperação:** Um órgão usa seleção profissional e também avalia metas: os modelos coexistem. Descrever controle de resultados não autoriza dispensar licitação ou garantias. Diferencie características do tipo ideal de Weber, disfunções observadas e regras jurídicas brasileiras; não atribua automaticamente toda demora ao conceito de burocracia.\n\n### A Nova Governança Pública (New Public Governance - NPG)\n\nFormulada academicamente por **Stephen Osborne** nos anos 2000, a **Nova Governança Pública** nasce para superar as limitações do NPM (que fragmentou excessivamente o Estado em agências autônomas que competiam entre si e reduziu o cidadão à condição mercadológica de mero consumidor passivo):\n\n* **Ação Pública em Redes de Cooperação:** O governo não é mais o único detentor do monopólio da solução de problemas complexos (\"problemas perversos\" ou *wicked problems*, como sustentabilidade, inclusão digital e desinformação). O Estado pode atuar na coordenação de **redes híbridas**, sem que todo arranjo tenha obrigatoriamente um único centro compostas por órgãos públicos, empresas privadas, universidades, terceiro setor e coletivos cidadãos.\n* **Coprodução do Bem Público:**\n  * Rompe com a visão de que o Estado produz e o cidadão consome.\n  * Cidadãos e sociedade civil participam ativamente do diagnóstico, desenho, execução e avaliação dos serviços públicos (ex.: curadoria comunitária de acervos orais da Biblioteca Parlamentar, plataformas de legislação colaborativa e hackathons cívicos).\n* **Transparência Ativa e Governo Aberto:**\n  * O poder público divulga dados abertos proativamente em formatos legíveis por máquina, promovendo o *accountability* democrático e o controle social permanente.\n\n**Aplicação e recuperação:** A biblioteca pede opinião numa pesquisa: há participação, mas coprodução exige examinar como cidadãos contribuem para produzir o serviço/resultado. Uma rede de bibliotecas pode coordenar recursos sem competição mercantil. NPG é lente analítica, não promessa de que toda rede é inclusiva ou eficiente; conflitos e responsabilização permanecem.\n\n### A Teoria do Valor Público de Mark Moore\n\nDesenvolvida na Universidade de Harvard por **Mark Moore** (*Creating Public Value*), a teoria estabelece que o objetivo primordial de qualquer gestor público não é meramente cumprir o orçamento ou obedecer regras burocráticas, mas **gerar Valor Público** — entendido como o benefício real, tangível e intangível, que melhora a vida coletiva e fortalece a coesão democrática.\n\n#### 3.1 O Triângulo Estratégico de Moore\nPara que uma política pública ou projeto governamental seja sustentável, o gestor deve alinhar três vértices:\n1. **Valor Substantivo (Objetivo da Política):** O que a instituição está propondo tem utilidade real para a sociedade e gera valor público?\n2. **Sustentabilidade Política e Legalidade (Ambiente Autorizador):** O projeto conta com respaldo legal, legitimidade institucional, apoio dos parlamentares, dos órgãos de controle e dos cidadãos?\n3. **Capacidade Operacional (Capacidade de Entrega):** A organização dispõe de orçamento, sistemas de tecnologia, processos de trabalho e pessoal qualificado para realizar o que prometeu?\n\n#### 3.2 A Cadeia de Valor Público\nA transformação da ação governamental em impacto social percorre cinco etapas integradas:\n\n$$\\text{Insumos (Inputs)} \\longrightarrow \\text{Processos (Activities)} \\longrightarrow \\text{Produtos (Outputs)} \\longrightarrow \\text{Resultados (Outcomes)} \\longrightarrow \\text{Impacto Social (Impacts)}$$\n\n* **Insumos (*Inputs*):** Orçamento, servidores bibliotecários, computadores, instalações físicas da biblioteca.\n* **Processos (*Activities*):** Indexação, catalogação descritiva, curadoria e restauração de documentos parlamentares.\n* **Produtos (*Outputs*):** Quantidade de obras indexadas e disponibilizadas no serviço delimitado; LexML é uma rede/portal de informação jurídica, não o destino obrigatório de toda catalogação.\n* **Resultados (*Outcomes*):** O aumento na celeridade e na precisão técnica dos pareceres emitidos pelas comissões legislativas em virtude do acervo acessível.\n* **Impacto (*Impacts*):** Leis de melhor qualidade para o país e fortalecimento da confiança democrática da sociedade no Parlamento.\n\n**Aplicação e recuperação:** Um projeto tecnicamente viável carece de respaldo institucional. No triângulo de Moore, capacidade operacional não substitui ambiente autorizador e valor substantivo. Digitalizar dez mil páginas é produto; melhorar acesso pode ser resultado; atribuir melhora da democracia à digitalização exige evidência causal adicional. Um indicador de volume não prova impacto.",
  teoriaDidaticaMarkdown: "### Revisão: modelos como lentes, não rótulos absolutos\n\nPatrimonialismo mistura interesses públicos e privados; burocracia racional-legal enfatiza regras e profissionalização; NPM enfatiza desempenho; NPG, relações e coprodução. Elementos coexistem. Controle de resultados não abole legalidade. Moore articula valor, autorização e capacidade. Produto é entrega; resultado é mudança associada ao uso; impacto pede exame mais amplo e evidência. Não atribua efeito social automaticamente ao volume produzido.\n",
  checkpoints: [
  {
    "id": "cp-11-8-1",
    "pergunta": "Micro-Checkpoint 1: Distinção entre NPM e Nova Governança Pública (NPG)",
    "item": "Enquanto a Nova Gestão Pública (NPM) introduziu a lógica de mercado e a centralidade do cidadão como cliente consumidor, a Nova Governança Pública (NPG) enfatiza a atuação estatal em redes de cooperação interinstitucional e a coprodução de bens e serviços públicos pelo cidadão.",
    "gabarito": "C",
    "justificativa": "O contraste resume ênfases analíticas de NPM e NPG. Não afirma que todo cidadão foi passivo em toda gestão gerencial nem que um modelo eliminou o outro.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.)."
  },
  {
    "id": "cp-11-8-2",
    "pergunta": "Micro-Checkpoint 2: Triângulo Estratégico de Mark Moore e Capacidade Operacional",
    "item": "No modelo do triângulo estratégico de Mark Moore, a criação de valor público prescinde da legitimidade política e do respaldo legal formal, bastando a existência de capacidade operacional técnica suficiente da administração para a execução da medida.",
    "gabarito": "E",
    "justificativa": "O ambiente autorizador é um dos vértices. Capacidade técnica não substitui legitimidade e autorização no modelo.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.).",
    "versao_correta": "Valor, ambiente autorizador e capacidade operacional precisam de alinhamento."
  },
  {
    "id": "cp-11-8-3",
    "pergunta": "Micro-Checkpoint 3: Cadeia de Valor Público: Output vs. Outcome",
    "item": "Na cadeia de valor público aplicada à gestão documental, a quantidade de proposições legislativas devidamente digitalizadas e disponibilizadas em repositório institucional consubstancia um resultado (outcome), e não um mero produto (output).",
    "gabarito": "E",
    "justificativa": "O número de itens digitalizados mede entrega, ou output. Melhorias no uso e efeitos posteriores exigem indicadores e evidências diferentes.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.).",
    "versao_correta": "A quantidade digitalizada é produto; não prova por si resultado ou impacto."
  },
  {
    "id": "rt-11-8-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Avaliar metas torna dispensável todo controle prévio de legalidade no modelo gerencial.",
    "gabarito": "E",
    "justificativa": "A ênfase muda, mas não elimina legalidade e controles necessários.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.).",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 8: Controle da Administração Pública)",
    "habilidade": "aplicar",
    "versao_correta": "A orientação a resultados convive com controles prévios pertinentes."
  },
  {
    "id": "rt-11-8-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma contagem de documentos digitalizados mede diretamente produto; não demonstra, por si, impacto social.",
    "gabarito": "C",
    "justificativa": "A entrega pode ser observada sem que se tenha demonstrado o efeito posterior e sua causalidade.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.).",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 8: Controle da Administração Pública)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-8-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No triângulo de Moore, recursos técnicos bastam, independentemente de valor proposto e ambiente autorizador.",
    "gabarito": "E",
    "justificativa": "Os três vértices precisam de alinhamento; capacidade de executar não legitima por si uma iniciativa.",
    "fonte": "PDRAE (1995); Mark Moore, Creating Public Value; Stephen Osborne, The New Public Governance?; TCU, Referencial Básico de Governança Organizacional (3ª ed.).",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 8: Controle da Administração Pública)",
    "habilidade": "aplicar",
    "versao_correta": "Capacidade operacional deve ser alinhada a valor público e ambiente autorizador."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-8-fonte-pdrae",
      "nome": "Plano Diretor da Reforma do Aparelho do Estado — 1995",
      "ano": "Referência de consulta",
      "obraPrincipal": "Plano Diretor da Reforma do Aparelho do Estado — 1995",
      "ideiaChave": "Modelos e quatro setores; não confundir proposta histórica e arranjo atual.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-8-fonte-tcu",
      "nome": "TCU — Referencial Básico de Governança Organizacional",
      "ano": "Referência de consulta",
      "obraPrincipal": "TCU — Referencial Básico de Governança Organizacional",
      "ideiaChave": "Governança, necessidades sociais e geração de valor público.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-8-1",
      "afirmacao": "Avaliar metas torna dispensável todo controle prévio de legalidade no modelo gerencial.",
      "gabarito": "E",
      "porQue": "A ênfase muda, mas não elimina legalidade e controles necessários."
    },
    {
      "id": "memoria-rt-11-8-2",
      "afirmacao": "Uma contagem de documentos digitalizados mede diretamente produto; não demonstra, por si, impacto social.",
      "gabarito": "C",
      "porQue": "A entrega pode ser observada sem que se tenha demonstrado o efeito posterior e sua causalidade."
    },
    {
      "id": "memoria-rt-11-8-3",
      "afirmacao": "No triângulo de Moore, recursos técnicos bastam, independentemente de valor proposto e ambiente autorizador.",
      "gabarito": "E",
      "porQue": "Os três vértices precisam de alinhamento; capacidade de executar não legitima por si uma iniciativa."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-8-bloco-1",
    "titulo": "Evolução Histórica dos Modelos de Gestão Pública",
    "objetivos": [
      "Comparar modelos sem pressupor substituição histórica integral."
    ],
    "conteudo": "O estudo da evolução da gestão pública reflete a busca contínua do Estado por legitimidade, combate à corrupção e eficácia social. Três modelos sucessivos e coexistentes marcaram essa trajetória:\n\n#### 1.1 O Modelo Patrimonialista\nPredominante nas monarquias absolutistas e no Brasil colonial e imperial:\n* **Características:** Total confusão entre o patrimônio público (*res publica*) e os bens privados do soberano (*res principis*). O Estado é gerido como propriedade privada do governante.\n* **Mecanismos Típicos:** Concessão de cargos públicos como benesses pessoais, sinecuras, prebendas hereditárias, corrupção institucionalizada, compadrio, clientelismo e nepotismo. Não há carreiras estruturadas nem concurso público.\n\n#### 1.2 O Modelo Burocrático (Racional-Legal de Max Weber)\nNasce a partir da segunda metade do século XIX (e no Brasil na década de 1930 com a criação do DASP na Era Vargas) com o objetivo primordial de combater a corrupção e o clientelismo patrimonialista:\n* **Pilares Centrais:**\n  1. **Formalismo e Impessoalidade:** A autoridade decorre da lei e do cargo, e não da pessoa que o ocupa. Ênfase na documentação, regras e previsibilidade; isso não significa que qualquer atividade humana na organização seja obrigatoriamente um documento escrito.\n  2. **Hierarquia Rigorosa:** Linha verticalizada de comando, supervisão e subordinação de competências.\n  3. **Profissionalização e Meritocracia:** Seleção por qualificação, carreira e profissionalização no modelo ideal; concurso e estabilidade no Brasil têm disciplina constitucional própria e não se aplicam universalmente a todo vínculo.\n  4. **Controle *a priori* dos Processos:** Controle preventivo rígido de procedimentos e compras para evitar qualquer desvio.\n* **Disfunções da Burocracia (Merton, Selznick e Gouldner):**\n  * O cumprimento cego das regras torna-se o próprio fim da organização (*inversão de meios e fins*);\n  * Rigidez procedimental absoluta, aversão ao risco, despersonalização do atendimento e lentidão exasperante perante demandas novas da sociedade.\n\n#### 1.3 A Nova Gestão Pública (New Public Management - NPM)\nEmerge na década de 1980 na Grã-Bretanha e nos EUA, refletindo a crise fiscal do Estado e o esgotamento da burocracia rígida:\n* **Pilares e Diretrizes (David Osborne e Ted Gaebler - *Reinventando o Governo*):**\n  * **Foco no Cidadão-Cliente:** O cidadão é visto como consumidor que merece serviços públicos de alto padrão e satisfação.\n  * **Orientação para Resultados:** Ênfase em **resultados e desempenho**, sem eliminar controles de legalidade, procedimentos ou controles prévios necessários.\n  * **Descentralização e Desregulamentação:** Delegação de autonomia operacional com contratualização de resultados (contratos de gestão).\n  * **Introdução de Mecanismos de Mercado:** Parcerias, terceirização de atividades-meio, leilões competitivos e privatizações de setores não estratégicos.\n* **O Gerencialismo no Brasil (O PDRAE de 1995):**\n  * O Plano Diretor da Reforma do Aparelho do Estado, liderado por Bresser-Pereira, dividiu o Estado em 4 setores:\n    1. *Núcleo Estratégico:* Formulação de leis e políticas (Poderes da República, Presidência, Ministérios) - propriedade estatal obrigatória;\n    2. *Atividades Exclusivas do Estado:* Poder de polícia e fiscalização (agências reguladoras, diplomacia, Receita Federal);\n    3. *Serviços Não Exclusivos:* Educação, saúde, cultura, pesquisa, bibliotecas e museus (prestados concorrencialmente pelo Estado e pelo terceiro setor, com discussão histórica de publicização e organizações sociais; OSCIP pertence a marco legal posterior, não é criação do PDRAE de 1995);\n    4. *Produção de Bens e Serviços para o Mercado:* Empresas estatais concorrenciais sujeitas a privatização.\n\n**Aplicação e recuperação:** Um órgão usa seleção profissional e também avalia metas: os modelos coexistem. Descrever controle de resultados não autoriza dispensar licitação ou garantias. Diferencie características do tipo ideal de Weber, disfunções observadas e regras jurídicas brasileiras; não atribua automaticamente toda demora ao conceito de burocracia.",
    "checkpointIds": [
      "rt-11-8-1"
    ]
  },
  {
    "id": "sub-11-8-bloco-2",
    "titulo": "A Nova Governança Pública (New Public Governance - NPG)",
    "objetivos": [
      "Reconhecer rede, coordenação e coprodução."
    ],
    "conteudo": "Formulada academicamente por **Stephen Osborne** nos anos 2000, a **Nova Governança Pública** nasce para superar as limitações do NPM (que fragmentou excessivamente o Estado em agências autônomas que competiam entre si e reduziu o cidadão à condição mercadológica de mero consumidor passivo):\n\n* **Ação Pública em Redes de Cooperação:** O governo não é mais o único detentor do monopólio da solução de problemas complexos (\"problemas perversos\" ou *wicked problems*, como sustentabilidade, inclusão digital e desinformação). O Estado pode atuar na coordenação de **redes híbridas**, sem que todo arranjo tenha obrigatoriamente um único centro compostas por órgãos públicos, empresas privadas, universidades, terceiro setor e coletivos cidadãos.\n* **Coprodução do Bem Público:**\n  * Rompe com a visão de que o Estado produz e o cidadão consome.\n  * Cidadãos e sociedade civil participam ativamente do diagnóstico, desenho, execução e avaliação dos serviços públicos (ex.: curadoria comunitária de acervos orais da Biblioteca Parlamentar, plataformas de legislação colaborativa e hackathons cívicos).\n* **Transparência Ativa e Governo Aberto:**\n  * O poder público divulga dados abertos proativamente em formatos legíveis por máquina, promovendo o *accountability* democrático e o controle social permanente.\n\n**Aplicação e recuperação:** A biblioteca pede opinião numa pesquisa: há participação, mas coprodução exige examinar como cidadãos contribuem para produzir o serviço/resultado. Uma rede de bibliotecas pode coordenar recursos sem competição mercantil. NPG é lente analítica, não promessa de que toda rede é inclusiva ou eficiente; conflitos e responsabilização permanecem.",
    "checkpointIds": [
      "cp-11-8-1"
    ]
  },
  {
    "id": "sub-11-8-bloco-3",
    "titulo": "A Teoria do Valor Público de Mark Moore",
    "objetivos": [
      "Relacionar proposta de valor, autorização e capacidade."
    ],
    "conteudo": "Desenvolvida na Universidade de Harvard por **Mark Moore** (*Creating Public Value*), a teoria estabelece que o objetivo primordial de qualquer gestor público não é meramente cumprir o orçamento ou obedecer regras burocráticas, mas **gerar Valor Público** — entendido como o benefício real, tangível e intangível, que melhora a vida coletiva e fortalece a coesão democrática.\n\n#### 3.1 O Triângulo Estratégico de Moore\nPara que uma política pública ou projeto governamental seja sustentável, o gestor deve alinhar três vértices:\n1. **Valor Substantivo (Objetivo da Política):** O que a instituição está propondo tem utilidade real para a sociedade e gera valor público?\n2. **Sustentabilidade Política e Legalidade (Ambiente Autorizador):** O projeto conta com respaldo legal, legitimidade institucional, apoio dos parlamentares, dos órgãos de controle e dos cidadãos?\n3. **Capacidade Operacional (Capacidade de Entrega):** A organização dispõe de orçamento, sistemas de tecnologia, processos de trabalho e pessoal qualificado para realizar o que prometeu?\n\n#### 3.2 A Cadeia de Valor Público\nA transformação da ação governamental em impacto social percorre cinco etapas integradas:\n\n$$\\text{Insumos (Inputs)} \\longrightarrow \\text{Processos (Activities)} \\longrightarrow \\text{Produtos (Outputs)} \\longrightarrow \\text{Resultados (Outcomes)} \\longrightarrow \\text{Impacto Social (Impacts)}$$\n\n* **Insumos (*Inputs*):** Orçamento, servidores bibliotecários, computadores, instalações físicas da biblioteca.\n* **Processos (*Activities*):** Indexação, catalogação descritiva, curadoria e restauração de documentos parlamentares.\n* **Produtos (*Outputs*):** Quantidade de obras indexadas e disponibilizadas no serviço delimitado; LexML é uma rede/portal de informação jurídica, não o destino obrigatório de toda catalogação.\n* **Resultados (*Outcomes*):** O aumento na celeridade e na precisão técnica dos pareceres emitidos pelas comissões legislativas em virtude do acervo acessível.\n* **Impacto (*Impacts*):** Leis de melhor qualidade para o país e fortalecimento da confiança democrática da sociedade no Parlamento.\n\n**Aplicação e recuperação:** Um projeto tecnicamente viável carece de respaldo institucional. No triângulo de Moore, capacidade operacional não substitui ambiente autorizador e valor substantivo. Digitalizar dez mil páginas é produto; melhorar acesso pode ser resultado; atribuir melhora da democracia à digitalização exige evidência causal adicional. Um indicador de volume não prova impacto.",
    "checkpointIds": [
      "cp-11-8-2",
      "cp-11-8-3",
      "rt-11-8-2",
      "rt-11-8-3"
    ]
  }
],
fontesTeoria: [
  {
    "id": "pdrae",
    "titulo": "Plano Diretor da Reforma do Aparelho do Estado — 1995",
    "localizador": "Modelos e quatro setores; não confundir proposta histórica e arranjo atual.",
    "url": "https://www.bresserpereira.org.br/documents/mare/planodiretor/planodiretor.pdf"
  },
  {
    "id": "tcu",
    "titulo": "TCU — Referencial Básico de Governança Organizacional",
    "localizador": "Governança, necessidades sociais e geração de valor público.",
    "url": "https://portal.tcu.gov.br/governanca/governancapublica/"
  }
],
};
