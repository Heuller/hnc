import type { ModuloFilho } from '../../../domain/types';

export const submodulo1110: ModuloFilho = {
  id: 'sub-11-10',
  numero: '11.10',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)',
  preRequisitos: ["sub-11-5"],
  titulo: 'Licitações Públicas: Nova Lei nº 14.133/2021, ETP e Termo de Referência',
  titulo_curto: 'Licitações na Lei 14.133/2021',
  antesDeLer: [
  {
    "termo": "Contratação direta",
    "definicao": "Contratação com fundamento legal de dispensa ou inexigibilidade e instrução própria.",
    "exemploBiblioteca": "Notoriedade isolada não demonstra toda inviabilidade de competição."
  },
  {
    "termo": "Modalidade e critério",
    "definicao": "Modalidade organiza o procedimento; critério orienta julgamento.",
    "exemploBiblioteca": "Pregão não é sinônimo de menor preço nem de registro de preços."
  }
],
  descricaoCurta: "Aplicar finalidade e segregação sem criar vedação genérica. Escolher modalidade pelo objeto e condições legais. Separar modalidade e critério de julgamento. Fundamentar contratação direta e conferir hipótese temporal. Relacionar necessidade, alternativas e especificação.",
  tempoEstimadoMinutos: 18,
  autoresChave: [
  "Lei 14.133/2021 — texto atualizado na Câmara",
  "TCU — Licitações e Contratos"
],
  alertasCebraspe: [
  "Os três termos pertencem a categorias distintas. Identificar a categoria evita decidir pelo nome familiar.",
  "O art. 72 exige instrução e justificativas. A ausência de competição não equivale à ausência de processo.",
  "É preciso distinguir o objeto e verificar competição e hipóteses de dispensa ou inexigibilidade, inclusive arts. 74 e 75, IV, k."
],
  teoriaDensaMarkdown: "### Princípios e Finalidades da Licitação na Nova Lei nº 14.133/2021\n\nA Lei nº 14.133/2021 estabelece normas gerais para os sujeitos e hipóteses de seu âmbito, incluindo Legislativo e Judiciário quando exercem função administrativa; empresas estatais têm, em regra, a Lei 13.303/2016. Conforme seu art. 11, o processo licitatório tem por **finalidades precípuas**:\n1. Assegurar a seleção da proposta apta a gerar o **resultado de contratação mais vantajoso**, inclusive no que se refere ao ciclo de vida do objeto;\n2. Assegurar **tratamento isonômico** entre os licitantes e a justa competição;\n3. Evitar contratações com sobrepreço, preços manifestamente inexequíveis ou superfaturamento na execução;\n4. Incentivar a **inovação** e o **desenvolvimento nacional sustentável**.\n\n* **O Princípio da Segregação de Funções (Art. 5º):** Orienta a distribuição de atribuições para reduzir riscos. O art. 7º, § 1º, veda designar o mesmo agente simultaneamente para funções mais suscetíveis a riscos, de modo a reduzir ocultação de erros e fraudes. Não é uma proibição genérica e idêntica de toda participação em duas etapas; devem ser analisadas funções, riscos e normas aplicáveis.\n\n**Aplicação e recuperação:** Um software caro não se torna automaticamente objeto de concorrência só pelo valor. Defina natureza e padrões do objeto. Contratação mais vantajosa não é sinônimo de menor número inicial: manutenção, licenças e descarte podem alterar custo de ciclo de vida, conforme critérios mensuráveis e previstos.\n\n### As Cinco Modalidades Licitatórias (Rol Taxativo do Art. 28)\n\n$$\\text{Modalidades} = \\text{Pregão} + \\text{Concorrência} + \\text{Concurso} + \\text{Leilão} + \\text{Diálogo Competitivo}$$\n\n* **Pregão (Art. 29):** Modalidade obrigatória para a aquisição de **bens e serviços comuns**, cujos padrões de desempenho e qualidade possam ser objetivamente definidos pelo edital por meio de especificações usuais de mercado. Critérios de julgamento: menor preço ou maior desconto.\n* **Concorrência (Art. 6º, XXXVIII; art. 29):** Destinada a contratação de **bens e serviços especiais** e de **obras e serviços comuns e especiais de engenharia**. Admite os critérios de menor preço, melhor técnica ou conteúdo artístico, técnica e preço, maior retorno econômico e maior desconto.\n* **Concurso (Art. 30):** Destinado à escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração ao vencedor. O edital deve ser publicado com antecedência mínima de 35 dias úteis.\n* **Leilão (Art. 31):** Destinado à alienação de bens móveis inservíveis ou legalmente apreendidos e de bens imóveis da Administração. Critério: exclusivamente **maior lance**.\n* **Diálogo Competitivo (Art. 32):** Modalidade inovadora inspirada no direito europeu, restrita a contratações complexas em que o órgão não consegue especificar a solução no mercado:\n  * Desenrola-se em duas fases: na primeira, dialoga-se confidencialmente com os licitantes pré-selecionados para desenvolver soluções; na segunda, abre-se a disputa competitiva entre eles sobre a melhor solução consolidada.\n\n**Aplicação e recuperação:** Uma base pode ter fornecedor exclusivo; um serviço pode ser comum com vários prestadores. “Biblioteca” não define modalidade. Convite não é modalidade da Lei 14.133, mas contratos antigos validamente regidos pelo regime anterior não mudam de lei automaticamente. Não declare apagadas todas as situações históricas.\n\n### Critérios de Julgamento das Propostas (Art. 33)\n\n1. **Menor Preço:** Busca o menor dispêndio, atendidos os parâmetros mínimos de qualidade e os critérios legais; custos de ciclo de vida podem ser considerados quando objetivamente mensuráveis;\n2. **Maior Desconto:** Vence quem oferecer o maior percentual de desconto sobre tabela de preços de referência oficial;\n3. **Melhor Técnica ou Conteúdo Artístico:** Avalia a técnica ou conteúdo artístico segundo critérios objetivos; não se restringe necessariamente ao concurso;\n4. **Técnica e Preço:** Média ponderada de notas atribuídas à qualidade técnica da proposta e ao preço;\n5. **Maior Lance:** Utilizado exclusivamente na modalidade Leilão;\n6. **Maior Retorno Econômico:** Utilizado nos contratos de eficiência, nos quais a remuneração da empresa é vinculada a percentual da economia financeira gerada para a Administração (ex.: eficiência energética em prédios da Câmara).\n\n**Aplicação e recuperação:** Pregão é modalidade; menor preço é critério; registro de preços é procedimento auxiliar. Trocar esses níveis cria erro mesmo usando palavras reais. O art. 17 põe julgamento antes de habilitação como regra, mas admite antecipação da habilitação por ato motivado com benefícios explicitados e previsão no edital.\n\n### Contratação Direta: Inexigibilidade vs. Dispensa de Licitação\n\nA regra constitucional é licitar (art. 37, XXI, CF/88). A contratação direta é exceção estrita que se bifurca em dois institutos inconfundíveis:\n\n#### 4.1 Inexigibilidade de Licitação (Art. 74 - Rol Exemplificativo)\nOcorre quando há **inviabilidade fática ou jurídica de competição**:\n1. **Fornecedor Exclusivo:** Aquisição de materiais, equipamentos ou gêneros que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivo (demonstrado por documentos idôneos nos termos do art. 74, § 1º; não há exclusividade de um único tipo de emissor de atestado);\n2. **Serviços Técnicos Especializados de Natureza Predominantemente Intelectual:** Contratação com profissionais ou empresas de **notória especialização** (estudos técnicos, pareceres jurídicos, restauração de obras de arte e acervos históricos, treinamento e aperfeiçoamento de pessoal);\n3. **Artista Consagrado:** Profissional do setor artístico, diretamente ou por empresário exclusivo, consagrado pela crítica especializada ou pela opinião pública;\n4. **Credenciamento:** Procedimento auxiliar de chamamento de interessados nas hipóteses e condições do art. 79; não se resume universalmente a preço fixo único (ex.: credenciamento de médicos, peritos ou tradutores);\n5. **Aquisição ou Locação de Imóvel:** Cujas características singulares de localização e instalações tornem sua escolha necessária para atender às finalidades do órgão.\n\n#### 4.2 Dispensa de Licitação (Art. 75 - Rol Taxativo)\nA competição seria teoricamente possível, mas a lei expressamente autoriza ou impõe a contratação direta por razões de conveniência pública, celeridade ou pequeno valor:\n* **Dispensa em Razão do Valor (Inciso I e II):** Os incisos I e II usam valores **inferiores** aos limites, atualizados por decreto conforme art. 182. Os números originais de R$ 100 mil/R$ 50 mil não são os valores vigentes de 2026. Consulte o Decreto 12.807/2025 aplicável e observe agregação/fracionamento conforme o art. 75, § 1º, sem transportar limite antigo para caso atual.\n* **Dispensa por Emergência ou Calamidade (Inciso VIII):** Para atendimento imediato de situação emergencial que cause risco a pessoas, obras ou serviços públicos. Limita-se rigorosamente à parcela indispensável ao atendimento do perigo, pelo prazo máximo de **1 ano** (vedada prorrogação contratual).\n* **Licitação Deserta ou Fracassada (Inciso III):** O art. 75, III, exige licitação realizada há menos de um ano e manutenção de todas as condições do edital; delimita ausência de interessados/propostas válidas e propostas com preços manifestamente superiores ao mercado ou incompatíveis com referências oficiais. O rótulo genérico “fracassada” não substitui conferir a hipótese legal.\n\n**Aplicação e recuperação:** Aquisição ou restauração de obra de arte/objeto histórico de autenticidade certificada e compatível com a finalidade pode se enquadrar no art. 75, IV, k. Serviço técnico de restauração com notória especialização pode exigir examinar art. 74, III, g, e inviabilidade. Não transforme o tema “obra rara” em inexigibilidade automática. O art. 72 exige instrução, justificativas e autorização também na contratação direta.\n\n### Fase Preparatória: Estudo Técnico Preliminar (ETP) e Termo de Referência (TR)\n\nA Lei nº 14.133/2021 estabeleceu o **Planejamento** como princípio expresso de observância obrigatória:\n* **Estudo Técnico Preliminar (ETP - Art. 18, § 1º):**\n  * É a certidão de nascimento da contratação.\n  * Avalia o problema a ser resolvido pela biblioteca ou setor da Câmara, estuda as alternativas tecnológicas e de mercado, analisa o ciclo de vida do objeto, calcula os impactos orçamentários e demonstra conclusivamente a viabilidade técnica e econômica da opção escolhida.\n* **Termo de Referência (TR - Art. 6º, XXIII):**\n  * Elaborado com base no ETP aprovado.\n  * Define pormenorizadamente o objeto a ser licitado, os prazos de entrega, o modelo de fiscalização e gestão contratual, os critérios objetivos de medição e recebimento provisório/definitivo e as obrigações das partes.\n\n**Aplicação e recuperação:** A necessidade é conservar documentos frágeis; comprar o scanner mais recente é uma possível solução, não a definição inicial do problema. O ETP compara alternativas e viabilidade. O TR especifica objeto, requisitos, execução, gestão e critérios pertinentes. Modelos e dispensas de documentos dependem do regime; copiar marcas sem justificar necessidade não constitui planejamento.",
  teoriaDidaticaMarkdown: "### Revisão: objeto, hipótese e procedimento\n\nIdentifique o âmbito da lei, a necessidade e a natureza do objeto. Modalidade não é critério nem procedimento auxiliar. Julgamento precede habilitação como regra, com exceção motivada do art. 17. Inexigibilidade pressupõe inviabilidade; dispensa depende de hipótese legal. Ambas exigem processo do art. 72. Valores originais da lei precisam de atualização aplicável, sem fracionamento indevido. Obra histórica não significa inexigibilidade automática. ETP analisa necessidade/alternativas; TR especifica a contratação.\n",
  checkpoints: [
  {
    "id": "cp-11-10-1",
    "pergunta": "Micro-Checkpoint 1: Modalidades Licitatórias na Lei nº 14.133/2021",
    "item": "Para a aquisição emergencial de obras raras para restauração na Biblioteca da Câmara, o administrador público pode utilizar validamente a modalidade convite, desde que o valor total da compra não ultrapasse os limites fixados para contratações de pequeno valor.",
    "gabarito": "E",
    "justificativa": "Convite não integra as modalidades da Lei 14.133. Além disso, obra histórica não determina inexigibilidade por si: aquisição/restauração pode exigir examinar também o art. 75, IV, k.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "versao_correta": "A contratação sob a Lei 14.133 deve usar modalidade ou fundamento direto previsto nessa lei, com os pressupostos demonstrados."
  },
  {
    "id": "cp-11-10-2",
    "pergunta": "Micro-Checkpoint 2: Inexigibilidade para Serviços Técnicos Notórios",
    "item": "A contratação de treinamento técnico de natureza predominantemente intelectual com especialista, quando demonstradas a notória especialização, a adequação essencial ao objeto e a inviabilidade de competição, pode fundamentar inexigibilidade no art. 74, III, f, da Lei 14.133.",
    "gabarito": "C",
    "justificativa": "O enquadramento exige os requisitos legais e instrução. Fama do profissional isoladamente não basta.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026."
  },
  {
    "id": "cp-11-10-3",
    "pergunta": "Micro-Checkpoint 3: Inversão de Fases no Rito Procedimental Comum",
    "item": "Na sistemática procedimental da Lei nº 14.133/2021, a fase de habilitação documental dos licitantes antecede obrigatoriamente a abertura e o julgamento das propostas de preços em todas as modalidades de licitação.",
    "gabarito": "E",
    "justificativa": "O art. 17 coloca julgamento antes de habilitação em regra e admite antecipação motivada nas condições legais. Portanto, não exige habilitação anterior em todas as modalidades.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "versao_correta": "A ordem legal geral coloca julgamento antes de habilitação, admitida a exceção do art. 17, § 1º."
  },
  {
    "id": "rt-11-10-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Modalidade, critério de julgamento e procedimento auxiliar são categorias equivalentes: pregão, menor preço e registro de preços podem ser usados como sinônimos.",
    "gabarito": "E",
    "justificativa": "Os três termos pertencem a categorias distintas. Identificar a categoria evita decidir pelo nome familiar.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)",
    "habilidade": "aplicar",
    "versao_correta": "Pregão é modalidade; menor preço é critério; registro de preços é procedimento auxiliar."
  },
  {
    "id": "rt-11-10-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O rito do art. 17 admite antecipar habilitação mediante as condições e motivação previstas no § 1º.",
    "gabarito": "C",
    "justificativa": "A regra de julgamento anterior não elimina a exceção legal. Exige motivação dos benefícios e previsão no edital.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-10-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A contratação direta dispensa demonstrar a escolha do contratado e a justificativa de preço.",
    "gabarito": "E",
    "justificativa": "O art. 72 exige instrução e justificativas. A ausência de competição não equivale à ausência de processo.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)",
    "habilidade": "aplicar",
    "versao_correta": "A contratação direta exige instrução e justificativas legais, inclusive escolha e preço."
  },
  {
    "id": "rt-11-10-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O nome “obra rara” é suficiente para impor inexigibilidade em qualquer aquisição ou restauração.",
    "gabarito": "E",
    "justificativa": "É preciso distinguir o objeto e verificar competição e hipóteses de dispensa ou inexigibilidade, inclusive arts. 74 e 75, IV, k.",
    "fonte": "Lei 14.133/2021, arts. 1º, 5º–7º, 11, 17–18, 28–39 e 72–75; Decreto 12.807/2025 para valores de 2026.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 10: Responsabilidade Civil do Estado)",
    "habilidade": "aplicar",
    "versao_correta": "O fundamento depende do objeto e dos pressupostos legais, não apenas do nome obra rara."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-10-fonte-nllc",
      "nome": "Lei 14.133/2021 — texto atualizado na Câmara",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 14.133/2021 — texto atualizado na Câmara",
      "ideiaChave": "Licitações e contratos; observar o corte do edital e atualizações de valores.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-10-fonte-tcu",
      "nome": "TCU — Licitações e Contratos",
      "ano": "Referência de consulta",
      "obraPrincipal": "TCU — Licitações e Contratos",
      "ideiaChave": "Orientações e jurisprudência sobre contratação pública.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-10-2",
      "afirmacao": "O rito do art. 17 admite antecipar habilitação mediante as condições e motivação previstas no § 1º.",
      "gabarito": "C",
      "porQue": "A regra de julgamento anterior não elimina a exceção legal. Exige motivação dos benefícios e previsão no edital."
    },
    {
      "id": "memoria-rt-11-10-3",
      "afirmacao": "A contratação direta dispensa demonstrar a escolha do contratado e a justificativa de preço.",
      "gabarito": "E",
      "porQue": "O art. 72 exige instrução e justificativas. A ausência de competição não equivale à ausência de processo."
    },
    {
      "id": "memoria-rt-11-10-4",
      "afirmacao": "O nome “obra rara” é suficiente para impor inexigibilidade em qualquer aquisição ou restauração.",
      "gabarito": "E",
      "porQue": "É preciso distinguir o objeto e verificar competição e hipóteses de dispensa ou inexigibilidade, inclusive arts. 74 e 75, IV, k."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-10-bloco-1",
    "titulo": "Princípios e Finalidades da Licitação na Nova Lei nº 14.133/2021",
    "objetivos": [
      "Aplicar finalidade e segregação sem criar vedação genérica."
    ],
    "conteudo": "A Lei nº 14.133/2021 estabelece normas gerais para os sujeitos e hipóteses de seu âmbito, incluindo Legislativo e Judiciário quando exercem função administrativa; empresas estatais têm, em regra, a Lei 13.303/2016. Conforme seu art. 11, o processo licitatório tem por **finalidades precípuas**:\n1. Assegurar a seleção da proposta apta a gerar o **resultado de contratação mais vantajoso**, inclusive no que se refere ao ciclo de vida do objeto;\n2. Assegurar **tratamento isonômico** entre os licitantes e a justa competição;\n3. Evitar contratações com sobrepreço, preços manifestamente inexequíveis ou superfaturamento na execução;\n4. Incentivar a **inovação** e o **desenvolvimento nacional sustentável**.\n\n* **O Princípio da Segregação de Funções (Art. 5º):** Orienta a distribuição de atribuições para reduzir riscos. O art. 7º, § 1º, veda designar o mesmo agente simultaneamente para funções mais suscetíveis a riscos, de modo a reduzir ocultação de erros e fraudes. Não é uma proibição genérica e idêntica de toda participação em duas etapas; devem ser analisadas funções, riscos e normas aplicáveis.\n\n**Aplicação e recuperação:** Um software caro não se torna automaticamente objeto de concorrência só pelo valor. Defina natureza e padrões do objeto. Contratação mais vantajosa não é sinônimo de menor número inicial: manutenção, licenças e descarte podem alterar custo de ciclo de vida, conforme critérios mensuráveis e previstos.",
    "checkpointIds": []
  },
  {
    "id": "sub-11-10-bloco-2",
    "titulo": "As Cinco Modalidades Licitatórias (Rol Taxativo do Art. 28)",
    "objetivos": [
      "Escolher modalidade pelo objeto e condições legais."
    ],
    "conteudo": "$$\\text{Modalidades} = \\text{Pregão} + \\text{Concorrência} + \\text{Concurso} + \\text{Leilão} + \\text{Diálogo Competitivo}$$\n\n* **Pregão (Art. 29):** Modalidade obrigatória para a aquisição de **bens e serviços comuns**, cujos padrões de desempenho e qualidade possam ser objetivamente definidos pelo edital por meio de especificações usuais de mercado. Critérios de julgamento: menor preço ou maior desconto.\n* **Concorrência (Art. 6º, XXXVIII; art. 29):** Destinada a contratação de **bens e serviços especiais** e de **obras e serviços comuns e especiais de engenharia**. Admite os critérios de menor preço, melhor técnica ou conteúdo artístico, técnica e preço, maior retorno econômico e maior desconto.\n* **Concurso (Art. 30):** Destinado à escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração ao vencedor. O edital deve ser publicado com antecedência mínima de 35 dias úteis.\n* **Leilão (Art. 31):** Destinado à alienação de bens móveis inservíveis ou legalmente apreendidos e de bens imóveis da Administração. Critério: exclusivamente **maior lance**.\n* **Diálogo Competitivo (Art. 32):** Modalidade inovadora inspirada no direito europeu, restrita a contratações complexas em que o órgão não consegue especificar a solução no mercado:\n  * Desenrola-se em duas fases: na primeira, dialoga-se confidencialmente com os licitantes pré-selecionados para desenvolver soluções; na segunda, abre-se a disputa competitiva entre eles sobre a melhor solução consolidada.\n\n**Aplicação e recuperação:** Uma base pode ter fornecedor exclusivo; um serviço pode ser comum com vários prestadores. “Biblioteca” não define modalidade. Convite não é modalidade da Lei 14.133, mas contratos antigos validamente regidos pelo regime anterior não mudam de lei automaticamente. Não declare apagadas todas as situações históricas.",
    "checkpointIds": [
      "cp-11-10-1",
      "rt-11-10-1"
    ]
  },
  {
    "id": "sub-11-10-bloco-3",
    "titulo": "Critérios de Julgamento das Propostas (Art. 33)",
    "objetivos": [
      "Separar modalidade e critério de julgamento."
    ],
    "conteudo": "1. **Menor Preço:** Busca o menor dispêndio, atendidos os parâmetros mínimos de qualidade e os critérios legais; custos de ciclo de vida podem ser considerados quando objetivamente mensuráveis;\n2. **Maior Desconto:** Vence quem oferecer o maior percentual de desconto sobre tabela de preços de referência oficial;\n3. **Melhor Técnica ou Conteúdo Artístico:** Avalia a técnica ou conteúdo artístico segundo critérios objetivos; não se restringe necessariamente ao concurso;\n4. **Técnica e Preço:** Média ponderada de notas atribuídas à qualidade técnica da proposta e ao preço;\n5. **Maior Lance:** Utilizado exclusivamente na modalidade Leilão;\n6. **Maior Retorno Econômico:** Utilizado nos contratos de eficiência, nos quais a remuneração da empresa é vinculada a percentual da economia financeira gerada para a Administração (ex.: eficiência energética em prédios da Câmara).\n\n**Aplicação e recuperação:** Pregão é modalidade; menor preço é critério; registro de preços é procedimento auxiliar. Trocar esses níveis cria erro mesmo usando palavras reais. O art. 17 põe julgamento antes de habilitação como regra, mas admite antecipação da habilitação por ato motivado com benefícios explicitados e previsão no edital.",
    "checkpointIds": [
      "cp-11-10-3",
      "rt-11-10-2"
    ]
  },
  {
    "id": "sub-11-10-bloco-4",
    "titulo": "Contratação Direta: Inexigibilidade vs. Dispensa de Licitação",
    "objetivos": [
      "Fundamentar contratação direta e conferir hipótese temporal."
    ],
    "conteudo": "A regra constitucional é licitar (art. 37, XXI, CF/88). A contratação direta é exceção estrita que se bifurca em dois institutos inconfundíveis:\n\n#### 4.1 Inexigibilidade de Licitação (Art. 74 - Rol Exemplificativo)\nOcorre quando há **inviabilidade fática ou jurídica de competição**:\n1. **Fornecedor Exclusivo:** Aquisição de materiais, equipamentos ou gêneros que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivo (demonstrado por documentos idôneos nos termos do art. 74, § 1º; não há exclusividade de um único tipo de emissor de atestado);\n2. **Serviços Técnicos Especializados de Natureza Predominantemente Intelectual:** Contratação com profissionais ou empresas de **notória especialização** (estudos técnicos, pareceres jurídicos, restauração de obras de arte e acervos históricos, treinamento e aperfeiçoamento de pessoal);\n3. **Artista Consagrado:** Profissional do setor artístico, diretamente ou por empresário exclusivo, consagrado pela crítica especializada ou pela opinião pública;\n4. **Credenciamento:** Procedimento auxiliar de chamamento de interessados nas hipóteses e condições do art. 79; não se resume universalmente a preço fixo único (ex.: credenciamento de médicos, peritos ou tradutores);\n5. **Aquisição ou Locação de Imóvel:** Cujas características singulares de localização e instalações tornem sua escolha necessária para atender às finalidades do órgão.\n\n#### 4.2 Dispensa de Licitação (Art. 75 - Rol Taxativo)\nA competição seria teoricamente possível, mas a lei expressamente autoriza ou impõe a contratação direta por razões de conveniência pública, celeridade ou pequeno valor:\n* **Dispensa em Razão do Valor (Inciso I e II):** Os incisos I e II usam valores **inferiores** aos limites, atualizados por decreto conforme art. 182. Os números originais de R$ 100 mil/R$ 50 mil não são os valores vigentes de 2026. Consulte o Decreto 12.807/2025 aplicável e observe agregação/fracionamento conforme o art. 75, § 1º, sem transportar limite antigo para caso atual.\n* **Dispensa por Emergência ou Calamidade (Inciso VIII):** Para atendimento imediato de situação emergencial que cause risco a pessoas, obras ou serviços públicos. Limita-se rigorosamente à parcela indispensável ao atendimento do perigo, pelo prazo máximo de **1 ano** (vedada prorrogação contratual).\n* **Licitação Deserta ou Fracassada (Inciso III):** O art. 75, III, exige licitação realizada há menos de um ano e manutenção de todas as condições do edital; delimita ausência de interessados/propostas válidas e propostas com preços manifestamente superiores ao mercado ou incompatíveis com referências oficiais. O rótulo genérico “fracassada” não substitui conferir a hipótese legal.\n\n**Aplicação e recuperação:** Aquisição ou restauração de obra de arte/objeto histórico de autenticidade certificada e compatível com a finalidade pode se enquadrar no art. 75, IV, k. Serviço técnico de restauração com notória especialização pode exigir examinar art. 74, III, g, e inviabilidade. Não transforme o tema “obra rara” em inexigibilidade automática. O art. 72 exige instrução, justificativas e autorização também na contratação direta.",
    "checkpointIds": [
      "cp-11-10-2",
      "rt-11-10-3",
      "rt-11-10-4"
    ]
  },
  {
    "id": "sub-11-10-bloco-5",
    "titulo": "Fase Preparatória: Estudo Técnico Preliminar (ETP) e Termo de Referência (TR)",
    "objetivos": [
      "Relacionar necessidade, alternativas e especificação."
    ],
    "conteudo": "A Lei nº 14.133/2021 estabeleceu o **Planejamento** como princípio expresso de observância obrigatória:\n* **Estudo Técnico Preliminar (ETP - Art. 18, § 1º):**\n  * É a certidão de nascimento da contratação.\n  * Avalia o problema a ser resolvido pela biblioteca ou setor da Câmara, estuda as alternativas tecnológicas e de mercado, analisa o ciclo de vida do objeto, calcula os impactos orçamentários e demonstra conclusivamente a viabilidade técnica e econômica da opção escolhida.\n* **Termo de Referência (TR - Art. 6º, XXIII):**\n  * Elaborado com base no ETP aprovado.\n  * Define pormenorizadamente o objeto a ser licitado, os prazos de entrega, o modelo de fiscalização e gestão contratual, os critérios objetivos de medição e recebimento provisório/definitivo e as obrigações das partes.\n\n**Aplicação e recuperação:** A necessidade é conservar documentos frágeis; comprar o scanner mais recente é uma possível solução, não a definição inicial do problema. O ETP compara alternativas e viabilidade. O TR especifica objeto, requisitos, execução, gestão e critérios pertinentes. Modelos e dispensas de documentos dependem do regime; copiar marcas sem justificar necessidade não constitui planejamento.",
    "checkpointIds": []
  }
],
fontesTeoria: [
  {
    "id": "nllc",
    "titulo": "Lei 14.133/2021 — texto atualizado na Câmara",
    "localizador": "Licitações e contratos; observar o corte do edital e atualizações de valores.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2021/lei-14133-1-abril-2021-791222-normaatualizada-pl.pdf"
  },
  {
    "id": "tcu",
    "titulo": "TCU — Licitações e Contratos",
    "localizador": "Orientações e jurisprudência sobre contratação pública.",
    "url": "https://licitacoesecontratos.tcu.gov.br/"
  }
],
};
