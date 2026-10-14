import type { ModuloFilho } from '../../../domain/types';

export const submodulo51: ModuloFilho = {
  id: 'sub-5-1',
  numero: '5.1',
  editalRef: 'Bloco D - Item 4.1 a 4.6 e 4.9',
  preRequisitos: ["sub-1-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-5-3",
          "titulo": "Avaliação, Desbastamento e Métricas",
          "motivo": "Critérios quantitativos e qualitativos de descarte e remanejamento."
      },
      {
          "submoduloId": "sub-9-3",
          "titulo": "Direito Autoral e Acesso Aberto",
          "motivo": "Liberdade intelectual versus censura segundo IFLA e CF/88."
      }
  ],
  titulo: 'Planejamento de Bibliotecas, Avaliação de Serviços e Indicadores de Desempenho',
  descricaoCurta: 'Planejamento estratégico, tático e operacional em unidades de informação, diagnóstico organizacional, matriz SWOT, avaliação de insumos, processos e produtos, e indicadores de desempenho (Lancaster, Almeida, Maciel).',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Maria Christina Barbosa de Almeida', 'F. W. Lancaster', 'Alba Costa Maciel', 'Amélia Silveira', 'Peter Drucker', 'IFLA (1999)', 'CF/88'],
  alertasCebraspe: [
    'O Cebraspe adora afirmar que o planejamento estratégico é de competência exclusiva da alta administração da instituição mantenedora e que o bibliotecário cuida apenas do nível operacional: ERRADO! O bibliotecário lidera o planejamento da unidade em todos os níveis.',
    'Cuidado com a confusão entre eficiência (relação insumo/custo e produtividade) e eficácia (grau de atendimento aos objetivos e satisfação do usuário). Lancaster pontua que um serviço pode ser altamente eficiente gastando pouco, mas completamente ineficaz por não satisfazer os usuários.',
    'A missão da biblioteca não decorre apenas de seus produtos imediatos; ela expressa a razão de ser social e o alinhamento com a missão da instituição maior à qual está vinculada.',
    'O planejamento não é um evento episódico ou estático realizado apenas em momentos de crise, mas um processo dinâmico, contínuo, participativo e proativo.',
  ],
  quadroComparativo: {
    titulo: 'Níveis de Planejamento em Unidades de Informação',
    colunas: ['Critério', 'Planejamento Estratégico', 'Planejamento Tático', 'Planejamento Operacional'],
    linhas: [
      ['Horizonte Temporal', 'Longo prazo (3 a 5 anos ou mais)', 'Médio prazo (1 a 2 anos)', 'Curto prazo (diário, semanal, mensal)'],
      ['Abrangência', 'Institucional, macro-orientado, sistêmico', 'Departamental / Setorial (seções da biblioteca)', 'Específico / Tarefas e procedimentos detalhados'],
      ['Conteúdo Principal', 'Missão, visão, valores, análise SWOT e diretrizes gerais', 'Programas, alocação de recursos e projetos setoriais', 'Planos de ação, rotinas, cronogramas, metas quantificadas'],
      ['Atuação do Bibliotecário', 'Líder estratégico junto à direção e stakeholders', 'Coordenador de processos e setores técnicos/atendimento', 'Supervisor e executor direto de rotinas procedimentais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos e Filosofia do Planejamento Estratégico Bibliotecário
O planejamento em unidades de informação contemporâneas deixou de ser um mero instrumento burocrático de previsão orçamentária e converteu-se em **ferramenta de gestão estratégica essencial** para a sobrevivência, inovação e legitimidade social das bibliotecas públicas e parlamentares (**Maria Christina Barbosa de Almeida, 2005; Alba Costa Maciel & Marília Alvarenga Mendonça, 2000**).

\`\`\`timeline
PE | 1. Planejamento Estratégico | Longo Prazo (3 a 5+ anos) | Foco macroinstitucional: missão, visão de futuro, valores éticos, análise SWOT e alinhamento com a mantenedora
---> Desdobramento Setorial
PT | 2. Planejamento Tático | Médio Prazo (1 a 2 anos) | Foco departamental: programas de aquisição, projetos de conservação, captação de recursos e gestão de referência
---> Detalhamento Operacional
PO | 3. Planejamento Operacional | Curto Prazo (diário/mensal) | Foco procedimental: rotinas de catalogação, escalas de balcão, cronogramas de tarefas e checklists de metas
\`\`\`

#### A. Conceito e Princípios do Planejamento
Conforme Almeida (2005), o planejamento é um **processo contínuo, dinâmico, participativo e flexível** de tomada de decisões racionais sobre o futuro da unidade de informação:
1. **Proatividade vs. Reatividade:** O planejamento visa antecipar tendências tecnológicas e demandas de informação da sociedade, em vez de apenas reagir a crises orçamentárias ou espaciais.
2. **Alinhamento Institucional:** A biblioteca universitária ou parlamentar não possui missão autônoma dissociada da instituição mantenedora. Seus objetivos estratégicos devem refletir e subsidiar diretamente a missão da instituição matriz (na Câmara dos Deputados: subsidiar o processo legislativo, a fiscalização orçamentária e o controle social da cidadania).
3. **Diagnóstico Situacional Prévio:** Antes de estabelecer metas futuras, é indispensável realizar um diagnóstico detalhado da realidade da unidade (quadro de pessoal, acervo, infraestrutura predial, tecnologia e necessidades reais dos usuários).

#### B. As Três Dimensões Hierárquicas do Planejamento
* **1. Planejamento Estratégico:**
  * Horizonte temporal de longo prazo (normalmente de 3 a 5 anos);
  * Abrange a organização como um todo e seu relacionamento com o ambiente externo;
  * Define a **Missão** (razão de existir da instituição, seu propósito social perene), a **Visão de Futuro** (onde a biblioteca almeja estar em um horizonte temporal) e os **Valores** (princípios éticos inegociáveis de conduta);
  * Liderado pelo bibliotecário-gestor em interlocução direta com a alta administração.
* **2. Planejamento Tático:**
  * Horizonte temporal de médio prazo (1 a 2 anos);
  * Ocupa-se das grandes áreas funcionais ou seções da biblioteca (Processamento Técnico, Atendimento e Referência, Tecnologia da Informação, Preservação e Obras Raras);
  * Desdobra os objetivos estratégicos em programas, projetos específicos e alocação orçamentária setorial.
* **3. Planejamento Operacional:**
  * Curto prazo (execução diária, semanal ou mensal);
  * Foco na execução prática e no cumprimento de metas quantificadas;
  * Materializa-se em manuais de serviços, fluxogramas de trabalho, cronogramas de tarefas (*Gantt*) e procedimentos operacionais padrão (POPs).

---

### 2. Metodologias e Ferramentas Estratégicas: Matriz SWOT e Balanced Scorecard (BSC)

#### A. A Matriz SWOT / FOFA em Bibliotecas
A Análise SWOT avalia o posicionamento estratégico através de duas variáveis espaciais fundamentais:

| Ambiente de Análise | Fatores Positivos (Alavancadores) | Fatores Negativos (Restritivos) |
| :--- | :--- | :--- |
| **Ambiente Interno**<br>*(Totalmente controlável pela gestão da biblioteca)* | **FORÇAS (*Strengths*):**<br>• Equipe técnica altamente qualificada e concursada;<br>• Acervo histórico e de obras raras único no país;<br>• Infraestrutura tecnológica moderna com OPAC rápido. | **FRAQUEZAS (*Weaknesses*):**<br>• Espaço físico saturado nas estantes;<br>• Atraso no processamento técnico de doações;<br>• Falta de sinalização predial acessível. |
| **Ambiente Externo**<br>*(Incontrolável pela biblioteca; exige adaptação)* | **OPORTUNIDADES (*Opportunities*):**<br>• Avanço de verbas de emendas para inteligência artificial;<br>• Cooperação com a rede RVBI e Portal LexML;<br>• Crescente demanda social por transparência pública. | **AMEAÇAS (*Threats*):**<br>• Contingenciamento ou corte de orçamento federal;<br>• Crise fiscal que afeta a assinatura de bases internacionais;<br>• Mudanças bruscas na legislação de direitos autorais. |

> [!CAUTION]
> **Casca de Banana Cebraspe nº 1:** A banca adora afirmar que *"o corte orçamentário decorrente de diretriz governamental constitui uma fraqueza interna da biblioteca"*. Isso é **ERRADO**! O corte orçamentário externo é uma **AMEAÇA** (ambiente externo incontrolável). Fraqueza é uma deficiência interna da própria unidade (como obsolescência de computadores ou desorganização de estantes).

#### B. O Balanced Scorecard (BSC) de Kaplan & Norton Adaptado a Bibliotecas
O BSC traduz a estratégia em objetivos operacionais equilibrados sob quatro perspectivas interligadas por relações de causa e efeito:
1. **Perspectiva dos Usuários / Clientes:** Como os parlamentares, servidores e cidadãos enxergam a biblioteca? (Métricas: taxa de satisfação, tempo de resposta na referência, índice de uso do OPAC).
2. **Perspectiva dos Processos Internos:** Em quais processos internos a biblioteca deve alcançar a excelência? (Métricas: tempo médio de catalogação e indexação de novas obras, taxa de catalogação cooperativa na RVBI, índice de preservação preventiva).
3. **Perspectiva do Aprendizado e Crescimento (Pessoas e Inovação):** Como podemos continuar melhorando e agregando valor? (Métricas: horas de capacitação da equipe em RDA/MARC21/IA, índice de retenção de talentos, clima organizacional).
4. **Perspectiva Financeira / Orçamentária:** Como gerenciamos os recursos públicos para maximizar o retorno à sociedade? (Métricas: custo por consulta atendida, índice de execução orçamentária, custo de manutenção de assinaturas de bases).

---

### 3. Avaliação de Serviços de Bibliotecas segundo F. W. Lancaster (1996)
No tratado canônico *Avaliação de Serviços de Bibliotecas*, **F. W. Lancaster** estabeleceu os fundamentos teóricos da avaliação de desempenho:

\`\`\`timeline
I | 1. Insumos (Inputs) | Recursos e Estrutura | Orçamento público, quadro de bibliotecários, espaço físico, equipamentos e acervo disponível
---> Aplicação Operacional
P | 2. Processos (Throughput) | Métricas de Eficiência | Produtividade da equipe, velocidade de catalogação na RVBI, rotinas de processamento e conservação
---> Entregas Concretas
S | 3. Produtos (Outputs) | Serviços Disponibilizados | Volume de consultas atendidas no balcão, empréstimos realizados e downloads no repositório BDCam
---> Avaliação de Valor
R | 4. Resultados e Impacto (Outcomes) | Métricas de Eficácia | Resolução da lacuna cognitiva do usuário, subsídio a votos parlamentares e satisfação do leitor
\`\`\`

#### A. A Distinção Vital entre Eficiência e Eficácia
* **Eficiência (Foco nos Meios e Processos):** Mede a relação entre os insumos aplicados e a produtividade alcançada (fazer as coisas direito, com o menor custo e desperdício de tempo). Exemplo: *uma equipe que cataloga 50 livros por dia por funcionário é altamente eficiente*.
* **Eficácia (Foco nos Fins e Resultados):** Mede o grau em que o serviço satisfaz as reais necessidades informacionais dos usuários (fazer a coisa certa que resolve o problema). Exemplo: *entregar ao parlamentar exatamente a doutrina que ele necessita para fundamentar um voto em plenário*.
* **O Paradoxo de Lancaster:** Um serviço de biblioteca pode ser **extremamente eficiente** (custar muito pouco e operar com grande velocidade burocrática) e ao mesmo tempo ser **completamente ineficaz** (porque as informações entregues não atendem à necessidade do usuário e geram insatisfação).

#### B. Custo-Eficácia vs. Custo-Benefício
* **Análise de Custo-Eficácia (*Cost-Effectiveness*):** Relaciona o custo financeiro incorrido com o nível de desempenho técnico alcançado. Expressa-se em unidades quantitativas de serviço (ex.: *custo de R$ 15,00 por documento recuperado via empréstimo entre bibliotecas*).
* **Análise de Custo-Benefício (*Cost-Benefit*):** Tenta mensurar o retorno de valor, benefício ou impacto positivo (geralmente intangível e social) gerado para o indivíduo ou para a instituição em comparação ao custo investido (ex.: *o valor econômico e democrático de aprovar uma lei bem fundamentada em estudos fornecidos pela biblioteca parlamentar*).

---

### 4. A Norma Internacional ISO 11620: Indicadores de Desempenho para Bibliotecas
A **ISO 11620** (*Information and documentation — Library performance indicators*) é a norma técnica internacional que padroniza a mensuração quantitativa e qualitativa dos serviços de informação:
* **Requisitos de um Bom Indicador segundo a ISO 11620:**
  * **Validade:** O indicador mede exatamente aquilo a que se propõe medir;
  * **Confiabilidade:** O resultado é reproduzível quando aplicado sob as mesmas condições;
  * **Relevância:** A métrica é útil para a tomada de decisão gerencial;
  * **Praticabilidade:** Os dados podem ser coletados com custo e esforço razoáveis.
* **Indicadores Padronizados Clássicos:**
  * *Taxa de Disponibilidade de Títulos Requeridos:* Proporção de obras buscadas que estavam efetivamente disponíveis na estante no momento da procura (Teste de Orr);
  * *Velocidade do Processamento Técnico:* Tempo médio decorrido entre a chegada física de um livro à biblioteca e sua disponibilização final para empréstimo no catálogo;
  * *Custo por Usuário Atendido:* Orçamento total dividido pelo número de usuários ativos da instituição;
  * *Custo por Download de Recursos Eletrônicos (Padrão COUNTER R5 / Protocolo SUSHI — ver 5.3):* Mede o custo-eficácia de assinaturas dividindo o valor contratual pelo total de acessos efetivos (\`Unique_Item_Requests\`).

---

### 5. Censura, Liberdade Intelectual e a Política de Coleções como Escudo Institucional (Edital Bloco D, item 4.9)

No contexto das bibliotecas públicas, universitárias e parlamentares, a salvaguarda da **liberdade intelectual** constitui um dos pilares deontológicos mais expressivos da profissão bibliotecária e do Estado Democrático de Direito (**IFLA, 1999; Waldomiro Vergueiro, 1989; Simone Weitzel, 2013**):

#### A. A Distinção Teórica Vital: Seleção Técnica vs. Censura Arbitrária
O Cebraspe explora com frequência a tentativa de disfarçar atos de censura ideológica sob o manto de "discricionariedade técnica na seleção":

* **Seleção Técnica:**
  * É um processo **positivo, planejado, inclusivo e transparente**, fundamentado em critérios técnicos objetivos pré-fixados no documento formal de Política de Desenvolvimento de Coleções (PDC);
  * Orienta-se pelo estudo das necessidades da comunidade, representatividade do pensamento científico/filosófico, autoridade, atualidade e equilíbrio de correntes antagônicas;
  * O objetivo da seleção é **construir um acervo plural e representativo** da sociedade.
* **Censura Arbitrária:**
  * É um processo **negativo, excludente, coercitivo e autoritário**, motivado por preconceitos morais, dogmas religiosos, intolerância política ou pressões corporativas de grupos hegemônicos;
  * Consiste na rejeição a priori de livros, na rotulagem pejorativa discriminatória de obras ou na retirada forçada (expurgo) de materiais legalmente incorporados ao acervo, com o propósito de **impedir que os cidadãos tenham acesso a ideias divergentes**.

#### B. O Manifesto da IFLA sobre a Liberdade Intelectual e de Expressão (1999 / Declaração de Glasgow 2002)
A *International Federation of Library Associations and Institutions* (IFLA) estabeleceu princípios universais inegociáveis:
1. **O Acesso Livre à Informação como Direito Humano:** Fundamenta-se no Artigo 19 da Declaração Universal dos Direitos Humanos (DUDH/ONU);
2. **Rejeição a Toda Forma de Censura:** As bibliotecas devem disponibilizar seus acervos e serviços a todos os membros da comunidade, rejeitando qualquer censura de natureza ideológica, política ou religiosa promovida pelo Estado ou por grupos de pressão;
3. **Imparcialidade Pessoal do Bibliotecário:** O profissional de informação tem o dever ético de assegurar que suas próprias convicções pessoais, crenças religiosas ou preferências partidárias **jamais interfiram** na seleção, catalogação, disponibilização ou descarte de obras;
4. **Resistência às Pressões Externas:** As bibliotecas devem resistir ativamente a exigências de censura impostas por indivíduos, grupos organizados ou autoridades governamentais.

#### C. Arcabouço Constitucional Brasileiro (CF/88)
A Constituição da República Federativa do Brasil de 1988 consagrou garantias expressas de vedação à censura:
* **Art. 5º, inciso IX:** *"É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença"*;
* **Art. 220, caput:** *"A manifestação do pensamento, a criação, a expressão e a informação, sob qualquer forma, processo ou veículo não sofrerão qualquer restrição, observado o disposto nesta Constituição"*;
* **Art. 220, § 2º (Mandamento Pétreo de Vedação):** *"É vedada toda e qualquer censura de natureza política, ideológica e artística"*.

#### D. A Política de Desenvolvimento de Coleções (PDC) como Escudo Institucional no Parlamento
No ambiente do Poder Legislativo, onde convivem bancadas partidárias com visões de mundo polarizadas, a biblioteca pública parlamentar (Biblioteca Pedro Aleixo) está sob constante escrutínio:
* **O Caráter Político da PDC:** Conforme Waldomiro Vergueiro (1989), a política de seleção formalmente aprovada pela Mesa Diretora da Câmara dos Deputados funciona como um **escudo protetor legal e técnico** para a equipe de bibliotecários;
* **Caso Concreto de Pressão Externa:** Se um parlamentar ou grupo de pressão exigir a retirada de circulação de uma obra sobre direitos humanos, diversidade ou história política sob alegação de "conteúdo impróprio", o bibliotecário não cede à arbitrariedade: ampara-se formalmente na PDC aprovada, na CF/88 (arts. 5º, IX, e 220, § 2º) e no Código de Ética do Bibliotecário (CFB) para demonstrar que a presença da obra atende aos critérios técnicos de pluralismo e representatividade do acervo.

#### E. Matriz Comparativa Estruturada: Seleção Técnica vs. Censura Arbitrária

| Critério de Confronto | Seleção Técnica de Acervos | Censura Ideológica de Acervos |
| :--- | :--- | :--- |
| **Natureza do Ato** | Positiva, técnica, democrática e inclusiva. | Negativa, arbitrária, coercitiva e excludente. |
| **Fundamentação** | Documento formal escrito de política e estudo da comunidade. | Preconceito moral, dogma religioso ou conveniência partidária. |
| **Objetivo Primordial** | Enriquecer o acervo com a diversidade do pensamento humano. | Suprimir o acesso público a ideias e visões divergentes. |
| **Ator Decisório** | Comissão técnica multidisciplinar e corpo de bibliotecários. | Grupos de pressão, autoridades autoritárias ou censores individuais. |
| **Conformidade Jurídica** | Plena adesão à CF/88 (Art. 5º, IX) e Manifesto da IFLA (1999). | Violação frontal da CF/88 (Art. 220, § 2º) e do Código de Ética Profissional. |

---

### 6. Quadro Sinóptico de Cascas de Banana do Cebraspe em Gestão e Planejamento

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"O planejamento estratégico de uma biblioteca compete exclusivamente à alta administração do órgão mantenedor, cabendo aos bibliotecários apenas o planejamento operacional."* | **ERRADO** | O bibliotecário deve atuar como líder estratégico da unidade de informação, participando ativamente de **todos os níveis** de planejamento. |
| *"Um serviço de biblioteca que atinge alto índice de eficiência operacional é necessariamente eficaz no atendimento às necessidades dos usuários."* | **ERRADO** | Eficiência diz respeito ao uso econômico de recursos (meios); um serviço eficiente pode ser **ineficaz** se entregar informações inúteis ao usuário. |
| *"Na análise SWOT aplicada a bibliotecas parlamentares, o corte de verbas orçamentárias imposto pelo Congresso Nacional classifica-se como fraqueza interna."* | **ERRADO** | Cortes orçamentários governamentais decorrem do ambiente externo incontrolável, configurando uma **AMEAÇA** (e não fraqueza). |
| *"A análise de custo-benefício expressa estritamente a relação matemática entre os custos financeiros e as unidades físicas de produtos catalogados."* | **ERRADO** | Essa é a análise de **custo-eficácia**. A de **custo-benefício** mensura o retorno de valor/impacto qualitativo e social em relação aos custos. |
| *"A recusa de aquisição de um livro de autor renomado exclusivamente em razão de seu viés ideológico contrário à bancada majoritária da Câmara constitui legítimo exercício da seleção técnica de coleções."* | **ERRADO** | Trata-se de hipótese cabal de **CENSURA POLÍTICO-IDEOLÓGICA**, vedada expressamente pelo art. 220, § 2º, da CF/88 e pelos princípios da IFLA. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Avaliação, Desbastamento e Métricas (sub-5-3):** Critérios quantitativos e qualitativos de descarte e remanejamento.
* **Direito Autoral e Acesso Aberto (sub-9-3):** Liberdade intelectual versus censura segundo IFLA e CF/88.
`,
  checkpoints: [
    {
      id: 'cp-5-1-1',
      pergunta: 'Micro-Checkpoint 1: Níveis de Planejamento em Unidades de Informação',
      item: 'O planejamento estratégico de uma biblioteca é uma prerrogativa exclusiva dos níveis de direção da organização mantenedora, cabendo à equipe de bibliotecários atuar restritamente no planejamento operacional e na execução de rotinas.',
      gabarito: 'E',
      justificativa: 'Errado! O bibliotecário deve atuar como gestor e líder estratégico da unidade de informação, participando ativamente da formulação estratégica, tática e operacional da biblioteca.',
    },
    {
      id: 'cp-5-1-2',
      pergunta: 'Micro-Checkpoint 2: Eficiência e Eficácia segundo Lancaster',
      item: 'Na avaliação de serviços de informação segundo Lancaster, a eficácia está relacionada ao nível de alcance das metas e à satisfação das necessidades informacionais dos usuários, ao passo que a eficiência foca na otimização de recursos e custos aplicados.',
      gabarito: 'C',
      justificativa: 'Correto! Eficácia foca nos fins e no atendimento ao usuário; eficiência foca nos meios e na economia de recursos/processos.',
    },
    {
      id: 'cp-5-1-3',
      pergunta: 'Micro-Checkpoint 3: Censura versus Seleção de Coleções (IFLA e CF/88)',
      item: 'A recusa de inclusão ou o expurgo de uma obra de renome acadêmico do acervo de uma biblioteca parlamentar, motivados exclusivamente por discordância ideológica ou partidária de autoridade da Casa com as ideias do autor, configura ato legítimo de seleção técnica discricionária.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme as diretrizes internacionais da IFLA (Manifesto sobre Liberdade Intelectual, 1999) e a Constituição Federal de 1988 (art. 5º, IX e art. 220, § 2º), a exclusão de obras por motivações ideológicas, morais ou políticas caracteriza CENSURA arbitrária, sendo vedada no ordenamento jurídico pátrio. A seleção técnica rege-se pelo pluralismo e por critérios objetivos previstos formalmente na Política de Desenvolvimento de Coleções, que atua como escudo institucional da biblioteca.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-1-1',
        periodo: 'Década de 1970-1980',
        disciplina: 'Administração de Bibliotecas',
        focoPrincipal: 'Transição da gestão patrimonial e mecanicista para o planejamento formal de serviços',
        figuraChave: 'Maria Christina Barbosa de Almeida e Alba Maciel',
      },
      {
        id: 'tl-5-1-2',
        periodo: '1988 / 1996',
        disciplina: 'Avaliação de Bibliotecas',
        focoPrincipal: 'Sistematização da avaliação de custo-eficácia, insumos, produtos e benefícios',
        figuraChave: 'F. W. Lancaster',
      },
    ],
    autores: [
      {
        id: 'aut-5-1-1',
        nome: 'Maria Christina Barbosa de Almeida',
        ano: 2005,
        obraPrincipal: 'Planejamento de bibliotecas e serviços de informação',
        ideiaChave: 'Processo dinâmico, participativo e proativo articulado aos níveis estratégico, tático e operacional.',
        chipPegadinha: 'Planejamento não é estático nem exclusivo da alta direção.',
      },
      {
        id: 'aut-5-1-2',
        nome: 'F. W. Lancaster',
        ano: 1996,
        obraPrincipal: 'Avaliação de serviços de bibliotecas',
        ideiaChave: 'Tríade de custos, eficácia e benefícios; indicadores de insumos, processos e produtos.',
        chipPegadinha: 'Eficiência não garante eficácia: baixo custo pode coexistir com insatisfação total.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-1-1',
        afirmacao: 'O planejamento bibliotecário caracteriza-se como processo esporádico, elaborado prioritariamente em situações de crise organizacional.',
        gabarito: 'E',
        porQue: 'O planejamento é um processo contínuo, dinâmico e preventivo/proativo, não uma medida emergencial episódica.',
      },
      {
        id: 'peg-5-1-2',
        afirmacao: 'A missão de uma unidade de informação deve ser definida exclusivamente com base nos produtos físicos que ela produz no presente.',
        gabarito: 'E',
        porQue: 'A missão declara a função e razão social da biblioteca e seu papel estratégico articulado aos objetivos da instituição mantenedora.',
      },
    ],
  },
};
