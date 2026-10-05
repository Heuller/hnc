import type { ModuloFilho } from '../../../domain/types';

export const submodulo64: ModuloFilho = {
  id: 'sub-6-4',
  numero: '6.4',
  titulo: 'Inteligência Artificial na Biblioteconomia e na Ciência da Informação',
  descricaoCurta: 'Fundamentos de IA na Biblioteconomia, Grandes Modelos de Linguagem (LLMs), Embeddings vetoriais e busca semântica, catalogação assistida, Declaração da IFLA sobre Bibliotecas e IA, e as Diretrizes de Uso Responsável de IA da Câmara dos Deputados.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['IFLA Advisory Committee', 'Câmara dos Deputados (Ditec)', 'Ashish Vaswani', 'UNESCO', 'Stuart Russell'],
  alertasCebraspe: [
    'A IA não substitui o bibliotecário nem torna dispensáveis as técnicas de representação da informação (classificação e indexação): pelo contrário, a qualidade dos sistemas de IA depende diretamente de dados bem estruturados, ontologias e metadados com supervisão humana.',
    'A arquitetura tecnológica que fundamentou a revolução dos Grandes Modelos de Linguagem (LLMs) como o ChatGPT é a rede neural baseada em TRANSFORMERS (mecanismo de autoatenção), associada ao treinamento em escala massiva de parâmetros.',
    'Foundation Models: o Cebraspe (Câmara 2026 Analista) exige o conhecimento de que os modelos fundacionais baseiam-se em aprendizagem profunda (deep learning) e métodos auto-supervisionados em grandes volumes de dados não rotulados, e NÃO em regras lógicas formais explícitas (GOFAI).',
    'Engenharia de Prompts (Câmara 2026 Técnico): Zero-shot prompting consiste em submeter a instrução ao modelo sem nenhum exemplo de demonstração prévio; Few-shot prompting fornece demonstrações in-context com pares de entrada/saída para condicionar a resposta; Chain-of-Thought (CoT) induz o modelo a decompor o raciocínio em etapas lógicas intermediárias.',
    'Paradigmas de Machine Learning: Supervisionado (dados rotulados / labeled data, como classificação e regressão); Não Supervisionado (dados não rotulados, descobrindo agrupamentos/clustering como K-Means e redução dimensional); Aprendizado por Reforço e RLHF (recompensas em ambiente dinâmico e alinhamento com feedback humano).',
    'Segurança e Ransomware (Câmara 2026 Analista): o procedimento de backup offline (air-gapped ou mídia desconectada da rede) é a salvaguarda técnica mais segura contra ataques de ransomware, pois o versionamento em nuvem ou backups em rede compartilhada podem ser igualmente infectados e criptografados.',
    'Visualização de Dados e Power BI (STJ 2024): o recurso "Analisar no Excel" conecta-se diretamente ao modelo semântico (semantic model) do Power BI mantendo medidas DAX e relações intactas. Em Dataviz, o Histograma avalia a distribuição de frequências contínuas em faixas (bins), enquanto o Gráfico de Barras compara dados categóricos discretos; o Box Plot expõe mediana, quartis e outliers.',
    'Diretrizes da Câmara dos Deputados para o Uso de IA: estabelece o princípio inegociável do "human-in-the-loop" (supervisão humana no circuito), a explicabilidade dos algoritmos, o alinhamento com a LGPD e a responsabilidade indelegável do agente público nas decisões legislativas.',
  ],
  quadroComparativo: {
    titulo: 'Comparação: Recuperação Clássica por Palavras-Chave vs. Busca Semântica por IA',
    colunas: ['Critério', 'Busca Lexical Tradicional (Booleana / Invertida)', 'Busca Semântica por IA (Embeddings & LLMs)'],
    linhas: [
      ['Mecanismo de Casamento', 'Coincidência literal de strings (*exact keyword matching*)', 'Proximidade semântica em espaço vetorial multidimensional (*dense vectors*)'],
      ['Tratamento de Sinônimos', 'Depende de vocabulário controlado explícito ou operador OR', 'Reconhece automaticamente sinonímia, paráfrases e intenções conceituais'],
      ['Tolerância à Ambiguidade', 'Baixa: termos polissêmicos geram ruído imediato nos resultados', 'Alta: analisa o contexto gramatical e temático da consulta para desambiguar'],
      ['Papel do Bibliotecário', 'Indexador manual de metadados e construtor de sintaxes booleanas', 'Curador de dados de treino, auditor ético de viés e supervisor dos prompts institucionais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Inteligência Artificial como Novo Paradigma na Ciência da Informação

A Inteligência Artificial (IA), historicamente dividida entre as abordagens simbólicas (sistemas especialistas baseados em regras formais explícitas — GOFAI) e conexionistas (redes neurais profundas), vivenciou uma ruptura revolucionária a partir de 2017 com o desenvolvimento da arquitetura de **Transformers** (*Attention Is All You Need*, Vaswani et al., 2017).

Na Biblioteconomia contemporânea e na gestão pública legislativa, a IA converteu-se em **ferramenta estruturante de tratamento, recuperação e disseminação da informação** (IFLA, 2020; Câmara dos Deputados, 2023):

* **Grandes Modelos de Linguagem (*Large Language Models - LLMs*) & Foundation Models:**
  * Modelos massivos de aprendizagem profunda (*deep neural networks*) treinados por métodos auto-supervisionados em gigantescas coleções de dados não rotulados.
  * *⚠️ Alerta Cebraspe (Câmara 2026):* Os Foundation Models operam a partir do reconhecimento de padrões estatísticos e vetoriais em redes neurais de grande escala, e **NÃO** a partir de deduções baseadas em regras lógicas formais pré-programadas por especialistas.
* **Embeddings Vetoriais e Busca Semântica:**
  * O processamento de linguagem natural converte palavras, sentenças ou documentos inteiros em **vetores matemáticos densos** (embeddings) em espaços de centenas ou milhares de dimensões.
  * Documentos conceitualmente semelhantes situam-se próximos no espaço vetorial. A busca semântica calcula a distância matemática (como a similaridade por cosseno) entre o vetor da consulta e os vetores do acervo, permitindo recuperar documentos relevantes mesmo que eles não compartilhem uma única palavra literal com a pergunta do usuário.

---

### 2. Paradigmas de Aprendizado de Máquina (Machine Learning)

1. **Aprendizado Supervisionado (*Supervised Learning*):**
   * O algoritmo é treinado com um conjunto de dados rotulados (*labeled data*), no qual cada exemplo de entrada possui uma resposta correta correspondente (rótulo/alvo).
   * *Aplicações:* Classificação (ex.: categorizar proposições legislativas por área temática) e Regressão (ex.: estimar prazos de tramitação).
2. **Aprendizado Não Supervisionado (*Unsupervised Learning*):**
   * O algoritmo analisa dados não rotulados (*unlabeled data*), identificando padrões ocultos, estruturas intrínsecas e similaridades conceituais sem supervisão humana prévia.
   * *Aplicações:* Agrupamento (*clustering*, como K-Means para segmentar perfis de usuários de bibliotecas) e Redução de Dimensionalidade (ex.: PCA e t-SNE para visualização de grandes acervos).
3. **Aprendizado por Reforço (*Reinforcement Learning - RL*) e RLHF:**
   * O modelo (agente) toma decisões em um ambiente dinâmico, recebendo recompensas (*rewards*) por ações corretas e penalidades por erros, buscando maximizar a pontuação cumulativa.
   * *RLHF (Reinforcement Learning from Human Feedback):* Técnica crítica para o refinamento de LLMs contemporâneos, em que avaliadores humanos ranqueiam respostas geradas pelo modelo para ajustar seus pesos, garantindo alinhamento ético, veracidade e redução de respostas tóxicas ou enviesadas.

---

### 3. Engenharia de Prompts e Recuperação Aumentada (RAG)

A formulação estratégica de instruções em linguagem natural direcionadas aos modelos generativos compreende padrões estruturados cobrados pelo Cebraspe:

* **Zero-Shot Prompting:** Submissão direta da tarefa ou pergunta ao modelo sem a apresentação de qualquer exemplo prévio de demonstração no contexto. O modelo apoia-se unicamente no seu pré-treinamento.
* **Few-Shot Prompting:** Fornecimento de alguns pares de exemplos (entrada e saída esperada) dentro do próprio prompt antes de solicitar a tarefa final, permitindo que o modelo apreenda o formato e o padrão semântico desejado (*in-context learning*).
* **Chain-of-Thought (CoT - Cadeia de Pensamento):** Técnica que instrui o modelo a explicitar as etapas intermediárias de raciocínio passo a passo antes de emitir a resposta conclusiva, elevando a precisão em raciocínios lógicos, sínteses normativas e cálculos complexos.
* **RAG (*Retrieval-Augmented Generation*):** Arquitetura que integra um modelo generativo a uma base canônica externa de documentos (como os Diários da Câmara ou o LexML). Antes de gerar a resposta, o sistema recupera trechos factuais relevantes no banco vetorial e os injeta no prompt, mitigando alucinações e garantindo rastreabilidade institucional.

---

### 4. Segurança da Informação, Governança Digital e Mitigação de Ransomware

* **Ameaça do Ransomware:** Código malicioso que sequestra sistemas e dados corporativos por meio de criptografia assimétrica de alta resistência, exigindo pagamento de resgate para a chave de decodificação.
* **Salvaguarda Crítica (*Alerta Cebraspe - Câmara 2026*):** Backups online sincronizados ou pastas compartilhadas em rede local (*mapped network drives*) são vulneráveis à infecção cruzada durante o ataque. A defesa técnica definitiva exige **procedimentos de backup offline (air-gapped)**, mídias imutáveis (WORM) ou servidores isolados da rede corporativa, garantindo a restauração íntegra dos serviços essenciais.
* **Princípios de Proteção:** Firewall de borda para controle de portas e protocolos, antivírus/EDR comportamental com análise heurística, e autenticação multifator (MFA) em todos os acessos administrativos.

---

### 5. Visualização de Dados e Storytelling Analítico (Power BI & Métricas)

* **Microsoft Power BI no Serviço Público:**
  * O recurso *"Analisar no Excel"* viabiliza a criação de tabelas dinâmicas conectadas em tempo real ao modelo semântico (*semantic model*) hospedado no Power BI Service, garantindo fonte única de verdade sem duplicação estática de dados (*STJ 2024*).
  * Dashboards interativos consolidam métricas de produção bibliográfica, consultas a repositórios e execuções orçamentárias.
* **Seleção Criteriosa de Tipos de Gráficos:**
  * **Histograma:** Representa a distribuição de frequências de uma variável quantitativa contínua agrupada em intervalos regulares (*bins*). Não confundir com gráfico de barras, que expressa variáveis categóricas discretas.
  * **Gráfico de Dispersão (*Scatter Plot*):** Revela correlações e padrões de dependência bivariada entre duas variáveis quantitativas contínuas.
  * **Box Plot (Diagrama de Caixa):** Sintetiza a distribuição de dados por meio de cinco medidas sumárias: valor mínimo, primeiro quartil (Q1 - 25%), mediana (Q2 - 50%), terceiro quartil (Q3 - 75%) e valor máximo, destacando visualmente valores atípicos (*outliers*).
  * **Gráfico de Linhas:** Ideal para evidenciar tendências, continuidades e séries temporais.
* **Storytelling com Dados (Cole Nussbaumer Knaflic & Edward Tufte):**
  * Maximização da *taxa de dados-tinta* (*data-ink ratio*): eliminação sistemática de elementos puramente decorativos (linhas de grade pesadas, 3D dispensável, cores aleatórias).
  * Redução da carga cognitiva estranha e foco em elementos pré-atencionais (cores de destaque contrastantes) para guiar a atenção do gestor para conclusões acionáveis.

---

### 6. Diretrizes da Câmara dos Deputados e Ética na IFLA

A Câmara dos Deputados estabeleceu diretrizes pioneiras para o uso ético de IA generativa (Ditec/Cedi, 2023):
* **Princípio da Supervisão Humana (*Human-in-the-Loop*):** Nenhuma decisão legislativa ou ato de indexação automatizada possui validade sem a revisão, validação e responsabilidade final de um servidor público humano.
* **Conformidade com a LGPD (Lei 13.709/2018):** Vedada a inserção de dados sigilosos ou pessoais em modelos comerciais externos abertos.
* **Declaração da IFLA:** Adoção de IA que respeite a neutralidade algorítmica, proteção irrestrita da privacidade dos leitores e desenvolvimento de programas de letramento informacional em IA (*AI Literacy*).`,
  checkpoints: [
    {
      id: 'cp-6-4-1',
      pergunta: 'Micro-Checkpoint 1: Busca Semântica por IA vs. Busca Tradicional',
      item: 'Diferentemente dos sistemas tradicionais de busca baseados na correspondência estrita de palavras-chave, a busca semântica orientada por inteligência artificial utiliza representações vetoriais de texto (embeddings) para recuperar documentos pelo seu contexto e significado conceitual.',
      gabarito: 'C',
      justificativa: 'Correto! Os modelos de busca semântica baseados em IA processam a proximidade vetorial de significados, superando a rigidez da correspondência literal.',
    },
    {
      id: 'cp-6-4-2',
      pergunta: 'Micro-Checkpoint 2: Foundation Models e Aprendizado Profundo',
      item: 'Os denominados Foundation Models, que alicerçam ferramentas modernas de inteligência artificial generativa, operam com base na aplicação de conjuntos de regras formais pré-programadas por engenheiros, dispensando redes neurais de aprendizado profundo.',
      gabarito: 'E',
      justificativa: 'Errado! Item clássico cobrado pelo Cebraspe (Câmara 2026 Analista). Os Foundation Models baseiam-se em redes neurais profundas (deep learning) e métodos de aprendizagem auto-supervisionada em larga escala, e não em regras lógicas programadas (GOFAI).',
    },
    {
      id: 'cp-6-4-3',
      pergunta: 'Micro-Checkpoint 3: Engenharia de Prompts - Zero-Shot vs. Few-Shot',
      item: 'Na engenharia de prompts para modelos de linguagem generativa, a técnica de few-shot prompting consiste em apresentar ao modelo a instrução da tarefa sem fornecer nenhum exemplo demonstrativo prévio de entrada e saída.',
      gabarito: 'E',
      justificativa: 'Errado! Apresentar a instrução sem exemplos é denominado "zero-shot prompting". O "few-shot prompting" inclui no prompt exemplos concretos de demonstração in-context para guiar o formato da resposta esperada (Câmara 2026 Técnico).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-4-1',
        periodo: '2017',
        disciplina: 'Arquitetura de Transformers',
        focoPrincipal: 'Publicação de "Attention Is All You Need" pelo Google Brain, base estruturante dos modelos LLM',
        figuraChave: 'Ashish Vaswani et al.',
      },
      {
        id: 'tl-6-4-2',
        periodo: '2020 / 2023',
        disciplina: 'Diretrizes Éticas IFLA',
        focoPrincipal: 'Declaração sobre Bibliotecas e Inteligência Artificial: privacidade, inclusão e ética',
        figuraChave: 'IFLA Advisory Committee on Freedom of Access',
      },
      {
        id: 'tl-6-4-3',
        periodo: '2023 / 2026',
        disciplina: 'Governança no Legislativo',
        focoPrincipal: 'Publicação do Guia de Uso Responsável de IA na Câmara dos Deputados e aplicação de RAG institucional',
        figuraChave: 'Câmara dos Deputados / Ditec',
      },
    ],
    autores: [
      {
        id: 'aut-6-4-1',
        nome: 'IFLA Advisory Committee',
        ano: 2020,
        obraPrincipal: 'IFLA Statement on Libraries and Artificial Intelligence',
        ideiaChave: 'Princípios éticos para IA em bibliotecas: privacidade, combate a preconceitos e transparência.',
        chipPegadinha: 'As bibliotecas devem apoiar IAs éticas por meio de decisões conscientes de aquisição.',
      },
      {
        id: 'aut-6-4-2',
        nome: 'Cole Nussbaumer Knaflic',
        ano: 2019,
        obraPrincipal: 'Storytelling com Dados',
        ideiaChave: 'Eliminação de desordem visual (data-ink ratio), direcionamento da atenção do tomador de decisão e adequação do tipo de gráfico.',
        chipPegadinha: 'Gráficos de pizza (pie charts) devem ser evitados para comparações de múltiplos dados; o box plot é o modelo ideal para dispersão e outliers.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-4-1',
        afirmacao: 'Os Foundation Models empregados em processamento de linguagem natural fundamentam-se exclusivamente em representações lógicas explícitas e sistemas especialistas baseados em regras.',
        gabarito: 'E',
        porQue: 'Cobrada na Câmara 2026! Foundation Models utilizam redes neurais profundas (deep learning) com treinamento auto-supervisionado em massas gigantescas de dados, e não sistemas especialistas lógicos clássicos.',
      },
      {
        id: 'peg-6-4-2',
        afirmacao: 'Para neutralizar infecções por ransomware, a realização de backups em nuvem continuamente sincronizados com os servidores da instituição dispensa a manutenção de cópias offline desconectadas da rede.',
        gabarito: 'E',
        porQue: 'Cobrada na Câmara 2026 Analista! Ransomwares conseguem atingir unidades montadas em rede e nuvens sincronizadas. O procedimento mais seguro exige cópias de segurança offline (air-gapped).',
      },
    ],
  },
};
