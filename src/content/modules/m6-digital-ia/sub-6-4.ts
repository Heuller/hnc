import type { ModuloFilho } from '../../../domain/types';

export const submodulo64: ModuloFilho = {
  id: 'sub-6-4',
  numero: '6.4',
  titulo: 'Inteligência Artificial na Biblioteconomia e na Ciência da Informação',
  descricaoCurta: 'Fundamentos de IA na Biblioteconomia, Grandes Modelos de Linguagem (LLMs), Embeddings vetoriais e busca semântica, catalogação assistida, RAG, Declaração da IFLA sobre Bibliotecas e IA, e as Diretrizes de Uso Responsável de IA da Câmara dos Deputados.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['IFLA Advisory Committee', 'Câmara dos Deputados (Ditec/Cedi)', 'Ashish Vaswani', 'Cole Nussbaumer Knaflic', 'Stuart Russell', 'Edward Tufte'],
  alertasCebraspe: [
    'A IA não substitui o bibliotecário nem torna dispensáveis as técnicas de representação temática e descritiva (classificação e indexação): pelo contrário, a acurácia dos sistemas de IA depende diretamente de bases bem estruturadas, ontologias, grafos de conhecimento e metadados de alta qualidade gerados com curadoria humana.',
    'A arquitetura tecnológica que deflagrou a revolução dos Grandes Modelos de Linguagem (LLMs) é a rede neural baseada em TRANSFORMERS (mecanismo de autoatenção / self-attention, Vaswani et al., 2017), viabilizando processamento altamente paralelizado de linguagem natural.',
    'Foundation Models: o Cebraspe (Câmara 2026 Analista) exige o conhecimento exato de que os modelos fundacionais baseiam-se em redes neurais de aprendizado profundo (deep learning) e métodos auto-supervisionados em gigantescos volumes de dados não rotulados, e NÃO em regras lógicas formais explícitas programadas por especialistas (GOFAI).',
    'Engenharia de Prompts (Câmara 2026 Técnico): Zero-shot prompting consiste em submeter a instrução ao modelo sem nenhum exemplo de demonstração prévio; Few-shot prompting fornece demonstrações in-context com pares de entrada/saída para condicionar a resposta; Chain-of-Thought (CoT) induz o modelo a decompor o raciocínio em etapas lógicas intermediárias antes de responder.',
    'Arquitetura RAG (Retrieval-Augmented Generation): integra modelos generativos a bancos vetoriais de documentos institucionais canônicos (como o LexML e proposições da Câmara), recuperando trechos factuais pertinentes para ancorar o prompt, mitigando alucinações e garantindo rastreabilidade jurídica com citação de fontes.',
    'Segurança e Ransomware (Câmara 2026 Analista): o procedimento de backup offline (air-gapped ou mídia fisicamente desconectada da rede corporativa) é a salvaguarda técnica mais segura contra ataques de ransomware, pois o versionamento em nuvem ou backups em rede compartilhada podem ser igualmente infectados e criptografados.',
    'Visualização de Dados e Power BI (STJ 2024): o recurso "Analisar no Excel" conecta-se diretamente ao modelo semântico (semantic model) do Power BI mantendo medidas DAX e relações intactas. Em Dataviz, o Histograma avalia a distribuição de frequências de variáveis contínuas em faixas (bins), enquanto o Gráfico de Barras compara dados categóricos discretos; o Box Plot expõe mediana, quartis e outliers.',
    'Diretrizes da Câmara dos Deputados para o Uso de IA: estabelecem o princípio inegociável do "human-in-the-loop" (supervisão humana no circuito), a explicabilidade dos algoritmos, o alinhamento com a LGPD e a responsabilidade indelegável do agente público nas decisões legislativas.',
  ],
  quadroComparativo: {
    titulo: 'Comparação: Recuperação Clássica por Palavras-Chave vs. Busca Semântica por IA',
    colunas: ['Critério', 'Busca Lexical Tradicional (Booleana / Invertida)', 'Busca Semântica por IA (Embeddings & LLMs)', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Mecanismo de Casamento', 'Coincidência literal de caracteres e strings (*exact keyword matching*)', 'Proximidade matemática em espaço vetorial multidimensional denso (*dense vectors*)', 'Afirmar que a busca semântica depende da coincidência exata dos termos digitados.'],
      ['Tratamento de Sinônimos', 'Depende de vocabulário controlado explícito ou operador OR', 'Reconhece automaticamente sinonímia, paráfrases e intenções conceituais latentes', 'Dizer que modelos vetoriais não conseguem relacionar sinônimos sem um tesauro prévio.'],
      ['Tolerância à Ambiguidade', 'Baixa: termos polissêmicos geram ruído imediato nos resultados', 'Alta: analisa o contexto gramatical e temático completo da consulta para desambiguar', 'Considerar que sistemas booleanos tradicionais realizam desambiguação contextual automática.'],
      ['Técnica de Indexação', 'Arquivo Invertido (*Inverted Index*) com listas de ocorrências (*postings*)', 'Indexação Vetorial de Alta Densidade (*HNSW, FAISS, pgvector*) com cálculo de cosseno', 'Confundir o algoritmo TF-IDF com redes neurais de geração de embeddings.'],
      ['Papel do Bibliotecário', 'Indexador manual de metadados e construtor de sintaxes booleanas', 'Curador de dados de treino, auditor ético de viés e supervisor dos prompts e RAG', 'Afirmar que a introdução de IA torna prescindível o papel técnico do bibliotecário.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Inteligência Artificial como Novo Paradigma na Ciência da Informação

A Inteligência Artificial (IA), historicamente dividida entre as abordagens simbólicas (sistemas especialistas baseados em regras formais explícitas — GOFAI) e as abordagens conexionistas (redes neurais artificiais), vivenciou uma ruptura revolucionária a partir de 2017 com o desenvolvimento da arquitetura de **Transformers** (*Attention Is All You Need*, Vaswani et al., 2017):

\`\`\`mermaid
graph TD
    A[Evolução da IA na Informação] --> B[1. IA Simbólica / GOFAI: Regras e Sistemas Especialistas]
    A --> C[2. Machine Learning Clássico: Estatística e Vetores TF-IDF]
    A --> D[3. Deep Learning e Transformers: Autoatenção e LLMs]
    D --> D1[Foundation Models: Aprendizado Auto-Supervisionado]
    D --> D2[Embeddings Vetoriais Densos e Busca Semântica]
    D --> D3[Arquitetura RAG: Recuperação Aumentada com Fontes Oficiais]
\`\`\`

#### A. A Arquitetura de Transformers e os Grandes Modelos de Linguagem (LLMs)
* **O Mecanismo de Autoatenção (*Self-Attention*):** Permite que o modelo analise simultaneamente todas as palavras de uma sentença ou documento, calculando a relevância contextual de cada termo em relação a todos os demais, independentemente da distância linear entre eles.
* **Superação das Redes Anteriores:** As redes neurais recorrentes (RNNs) e LSTMs processavam o texto sequencialmente palavra por palavra, gerando lentidão e perda de memória de longo prazo em textos extensos. Os Transformers processam sequências inteiras em paralelo.
* **Foundation Models (*Modelos Fundacionais*):**
  * Modelos de escala gigantesca (bilhões ou trilhões de parâmetros) pré-treinados em massas monumentais de dados não rotulados por métodos auto-supervisionados (*self-supervised learning*).
  * *⚠️ Alerta Crítico Cebraspe (Câmara 2026 Analista):* Os Foundation Models operam a partir da extração estatística de representações em redes neurais profundas, e **NÃO** a partir de sistemas dedutivos pré-programados com regras lógicas explícitas por engenheiros do conhecimento!

#### B. Embeddings Vetoriais e Busca Semântica
* O processamento de linguagem natural converte textos em **vetores numéricos densos** (embeddings) em espaços vetoriais de centenas ou milhares de dimensões:
* Documentos conceitualmente correlatos situam-se em coordenadas espaciais próximas.
* **Métricas de Similaridade Vetorial:** A distância entre o vetor da consulta do usuário e os vetores dos documentos é calculada matematicamente por meio da **Similaridade por Cosseno** (ângulo entre vetores), Produto Escalar (*Dot Product*) ou Distância Euclidiana ($L_2$).
* Isso viabiliza a recuperação semântica por conceito: uma busca por "remuneração de servidores" recupera documentos sobre "vencimentos e subsídios do funcionalismo", mesmo sem coincidência literal de palavras.

---

### 2. Paradigmas de Aprendizado de Máquina (Machine Learning)

1. **Aprendizado Supervisionado (*Supervised Learning*):**
   * O algoritmo é treinado a partir de exemplos rotulados (*labeled data*), aprendendo a mapear entradas em saídas corretas conhecidas.
   * *Classificação:* Atribuição a categorias discretas (ex.: classificar proposições legislativas em "Tributário", "Saúde" ou "Educação").
   * *Regressão:* Previsão de valores contínuos (ex.: estimar o tempo em dias para a tramitação de uma PEC).
2. **Aprendizado Não Supervisionado (*Unsupervised Learning*):**
   * O algoritmo analisa dados brutos sem rótulos (*unlabeled data*), descobrindo padrões intrínsecos, agrupamentos naturais ou anomalias.
   * *Agrupamento (*Clustering*):* Algoritmos como **K-Means** e agrupamento hierárquico, aplicados para segmentar perfis de usuários de bibliotecas e mapear frentes de pesquisa científica.
   * *Redução de Dimensionalidade:* Técnicas como **PCA** (*Principal Component Analysis*) e **t-SNE**, utilizadas para projetar espaços vetoriais de milhares de dimensões em gráficos 2D/3D legíveis.
3. **Aprendizado por Reforço (*Reinforcement Learning - RL*) e RLHF:**
   * O modelo aprende por tentativa e erro em um ambiente interativo, guiado por funções de recompensa (*rewards*) e penalidades.
   * **RLHF (*Reinforcement Learning from Human Feedback*):** Avaliadores humanos pontuam e ranqueiam diferentes respostas geradas por um LLM. Esse feedback calibra a política do modelo, alinhando-o a diretrizes éticas, eliminando discursos ofensivos e mitigando alucinações.

---

### 3. Engenharia de Prompts e a Arquitetura RAG

#### A. Estratégias de Engenharia de Prompts (Câmara 2026 Técnico):
* **Zero-Shot Prompting:** Envio direto do comando ou pergunta ao modelo sem incluir nenhum exemplo prévio no contexto. O modelo apoia-se estritamente no seu conhecimento pré-treinado.
* **Few-Shot Prompting:** Inclusão no corpo do prompt de alguns pares exemplificativos de entrada e saída esperada antes do comando definitivo. O modelo aprende o formato e o tom desejados por aprendizado em contexto (*in-context learning*).
* **Chain-of-Thought (CoT - Cadeia de Pensamento):** Técnica na qual o modelo é instruído a explicitar seu raciocínio passo a passo antes de emitir a conclusão final, reduzindo drasticamente erros em inferências lógicas, interpretações normativas complexas e análises quantitativas.

#### B. Arquitetura RAG (*Retrieval-Augmented Generation*):
* Em instituições como a Câmara dos Deputados, LLMs genéricos não devem responder consultas jurídicas diretamente de sua memória estatística, sob grave risco de **alucinação** (invenção de leis ou números inexistentes).
* **O Fluxo RAG em Três Etapas:**
  1. *Recuperação (*Retrieve*):* A pergunta do usuário é convertida em embedding e confronta um banco de dados vetorial de fontes primárias canônicas (bases do LexML, Diários da Câmara e jurisprudência consolidada).
  2. *Aumento (*Augment*):* Os fragmentos factuais mais pertinentes recuperados são injetados diretamente no contexto do prompt enviado ao LLM.
  3. *Geração (*Generate*):* O modelo redige a resposta fundamentando-se estritamente nos trechos fornecidos e citando formalmente as fontes oficiais.

---

### 4. Segurança da Informação, Governança Digital e Salvaguarda contra Ransomware

* **A Ameaça Crítica do Ransomware:**
  * Malware que realiza o sequestro digital de arquivos institucionais por meio de criptografia de chave pública/privada (RSA/AES), exigindo resgates financeiros vultosos em criptomoedas.
* **A Salvaguarda Técnica Definitiva (*Alerta Cebraspe - Câmara 2026 Analista*):**
  * Backups em nuvem sincronizados em tempo real ou pastas compartilhadas em rede local (*network shares*) são vulneráveis à infecção cruzada imediata pelo ransomware durante o ataque.
  * A proteção institucional definitiva requer **procedimentos de backup offline (air-gapped)**: cópias de segurança gravadas em mídias físicas desconectadas de qualquer rede computacional (ex.: fitas LTO guardadas em cofres ou unidades em modo WORM — *Write Once, Read Many*).
* **Mecanismos Complementares de Defesa:** Autenticação multifator (MFA) obrigatória, segmentação de redes em VLANs, privilégios mínimos de acesso (*least privilege*) e soluções de EDR (*Endpoint Detection and Response*).

---

### 5. Visualização de Dados e Storytelling Analítico (Power BI & Métricas)

* **Microsoft Power BI no Setor Público (STJ 2024):**
  * O recurso *"Analisar no Excel"* viabiliza a criação de tabelas dinâmicas diretamente conectadas ao modelo semântico (*semantic model*) hospedado no Power BI Service, garantindo fonte única e fidedigna de dados sem duplicações estáticas desatualizadas.
* **Seleção Criteriosa de Gráficos:**
  * **Histograma:** Exibe a distribuição de frequências de uma **variável quantitativa contínua** agrupada em intervalos regulares (*bins*). *Atenção:* Não confundir com gráfico de barras, que representa variáveis categóricas discretas.
  * **Box Plot (Diagrama de Caixa):** Representa a dispersão e a simetria de um conjunto de dados por meio de 5 medidas sumárias: valor mínimo, primeiro quartil (Q1 - 25%), mediana (Q2 - 50%), terceiro quartil (Q3 - 75%) e valor máximo, evidenciando de forma visual clara os pontos atípicos (*outliers*).
  * **Gráfico de Dispersão (*Scatter Plot*):** Revela correlações e padrões de associação bivariada entre duas variáveis contínuas.
* **Storytelling com Dados (Cole Nussbaumer Knaflic & Edward Tufte):**
  * Maximização da taxa de dados-tinta (*data-ink ratio*): remoção de enfeites supérfluos (*chartjunk*, bordas pesadas, efeitos 3D falsos).
  * Uso estratégico de **atributos pré-atencionais** (cor de destaque contrastante, tamanho e posicionamento) para direcionar o olhar do gestor imediatamente à conclusão analítica pretendida.

---

### 6. Diretrizes da Câmara dos Deputados e Ética da IFLA no Uso de IA

* **Diretrizes de Uso Responsável de IA da Câmara dos Deputados (Ditec/Cedi, 2023):**
  * **Princípio da Supervisão Humana (*Human-in-the-Loop*):** É vedada a emissão de atos administrativos, pareceres técnicos ou decisões parlamentares automatizadas sem a revisão, validação substantiva e responsabilização de um servidor público humano habilitado.
  * **Conformidade Estrita com a LGPD (Lei 13.709/2018):** Vedada a inserção de minutas legislativas sigilosas, documentos preparatórios ou dados pessoais sensíveis em plataformas abertas de IA comercial.
  * **Explicabilidade e Auditabilidade:** Os sistemas de IA aplicados a processos legislativos devem manter trilhas de auditoria que explicitem as fontes consultadas e a lógica do processamento.
* **Declaração da IFLA sobre Bibliotecas e Inteligência Artificial:**
  * Reafirma o compromisso histórico das bibliotecas com a **privacidade do leitor**, a preservação da diversidade cultural e o combate aos vieses algorítmicos discriminatórios.
  * As bibliotecas devem liderar iniciativas de **Letramento em Inteligência Artificial (*AI Literacy*)**, capacitando os cidadãos a avaliarem criticamente a proveniência e a veracidade das respostas geradas por IA.`,
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
        figuraChave: 'Câmara dos Deputados / Ditec/Cedi',
      },
    ],
    autores: [
      {
        id: 'aut-6-4-1',
        nome: 'IFLA Advisory Committee',
        ano: 2020,
        obraPrincipal: 'IFLA Statement on Libraries and Artificial Intelligence',
        ideiaChave: 'Princípios éticos para IA em bibliotecas: privacidade do leitor, combate a preconceitos e letramento em IA.',
        chipPegadinha: 'As bibliotecas devem manter supervisão ativa sobre sistemas automatizados de aquisição e mediação.',
      },
      {
        id: 'aut-6-4-2',
        nome: 'Cole Nussbaumer Knaflic',
        ano: 2019,
        obraPrincipal: 'Storytelling com Dados',
        ideiaChave: 'Eliminação de desordem visual (data-ink ratio), direcionamento da atenção do tomador de decisão e adequação do tipo de gráfico.',
        chipPegadinha: 'Gráficos de pizza (pie charts) devem ser evitados para comparações de múltiplos dados; o box plot é o modelo ideal para dispersão e outliers.',
      },
      {
        id: 'aut-6-4-3',
        nome: 'Ashish Vaswani et al.',
        ano: 2017,
        obraPrincipal: 'Attention Is All You Need',
        ideiaChave: 'Criação da arquitetura de redes neurais baseada em Transformers com mecanismo de autoatenção.',
        chipPegadinha: 'Transformers permitem processamento massivamente paralelo de sequências, superando as limitações das RNNs.',
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
      {
        id: 'peg-6-4-3',
        afirmacao: 'Na arquitetura RAG (Retrieval-Augmented Generation), o modelo generativo produz respostas autônomas sem consultar bases externas de conhecimento.',
        gabarito: 'E',
        porQue: 'O propósito central do RAG é justamente ancorar a resposta em uma base externa confiável (banco vetorial institucional), injetando fatos reais no prompt antes da geração.',
      },
    ],
  },
};
