import type { ModuloFilho } from '../../../domain/types';

export const submodulo143: ModuloFilho = {
  id: 'sub-14-3',
  numero: '14.3',
  titulo: 'Inteligência Artificial, Engenharia de Prompts e Ética Digital no Serviço Público',
  descricaoCurta: 'Paradigmas de Machine Learning (supervisionado, não-supervisionado e por reforço/RLHF); arquitetura Transformer e LLMs; técnicas de engenharia de prompts (Zero-shot, Few-shot, Chain-of-Thought e RAG); governança ética, LGPD, explicabilidade e supervisão humana (human-in-the-loop).',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Stuart Russell & Peter Norvig', 'Ashish Vaswani et al. (2017)', 'Jason Wei et al. (2022)', 'Câmara dos Deputados (Ditec)', 'OCDE / UNESCO'],
  alertasCebraspe: [
    'Paradigmas de Aprendizado de Máquina: O Aprendizado Supervisionado exige dados rotulados (features e rótulos alvo) para tarefas de classificação e regressão; o Não-Supervisionado atua sobre dados sem rótulos, buscando agrupamentos (clustering com K-Means) ou redução de dimensionalidade (PCA); o Aprendizado por Reforço treina agentes por tentativa, erro e funções de recompensa (essencial no alinhamento humano via RLHF - Reinforcement Learning from Human Feedback).',
    'Arquitetura Transformer e Mecanismo de Atenção: Introduzida por Vaswani et al. (2017) no artigo "Attention Is All You Need", a arquitetura Transformer superou as redes neurais recorrentes (RNN/LSTM) ao viabilizar processamento paralelo maciço e capturar relações contextuais globais entre tokens por meio de mecanismos de Autoatenção (Self-Attention).',
    'Técnicas de Engenharia de Prompts: Zero-shot (tarefa solicitada diretamente sem exemplos prévios); Few-shot In-Context Learning (apresentação de 2 a 5 exemplos no prompt demonstrando o padrão de entrada e saída esperado); Chain-of-Thought - CoT (instrução explícita para o modelo "pensar passo a passo", decompondo problemas lógicos complexos em premissas intermediárias encadeadas).',
    'RAG (Retrieval-Augmented Generation): Técnica que combina recuperação de informações em bases de conhecimento corporativas/vetoriais com a geração de texto por LLMs. O RAG reduz drasticamente as alucinações factuais ao ancorar a resposta em documentos externos fidedignos e atualizados, sem exigir o retreinamento ou fine-tuning completo do modelo.',
    'Ética Digital e Human-in-the-Loop no Serviço Público: No serviço público e na atividade legislativa, a IA atua estritamente como suporte técnico auxiliar à decisão. É vedada a delegação de atos decisórios soberanos à máquina; a responsabilidade administrativa e funcional é indelegável do agente público humano (supervisão human-in-the-loop). Exigem-se respeito irrestrito à LGPD (minimização e finalidade) e garantia de explicabilidade algorítmica.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Estratégias de Prompting e Otimização de LLMs',
    colunas: ['Técnica', 'Mecanismo Operacional', 'Quando Utilizar', 'Vantagem Crítica / Atenção Cebraspe'],
    linhas: [
      ['Zero-shot Prompting', 'Instrução direta sem fornecer nenhum exemplo demonstrativo no contexto', 'Tarefas canônicas de síntese, tradução ou classificação simples', 'Baixo consumo de tokens; pode falhar em tarefas de raciocínio abstrato ou formatações rígidas.'],
      ['Few-shot Prompting', 'Inclusão de 2 ou mais pares de (Entrada $\\rightarrow$ Saída) no corpo do prompt', 'Padronização de formatos específicos de saída (JSON, tabelas ou ementas)', 'Ensina o padrão por indução em tempo de inferência (*in-context learning*) sem alterar pesos da rede.'],
      ['Chain-of-Thought (CoT)', 'Estimulação de raciocínio passo a passo antes de emitir a conclusão final', 'Problemas matemáticos, inferências jurídicas e interpretação de regras lógicas', 'Reduz saltos ilógicos e erros de dedução ao exteriorizar a cadeia de premissas intermediárias.'],
      ['RAG (Recuperação Aumentada)', 'Busca vetorial em base de documentos indexada + injeção de contexto no prompt', 'Consultas a bases normativas, acervos jurisprudenciais ou manuais internos da Câmara', 'Elimina alucinações ao ancorar a resposta em fatos comprovados; dispensa retreinamento oneroso.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos da Inteligência Artificial e Modelos de Machine Learning

#### A. A Evolução Epistemológica: Da IA Simbólica ao Deep Learning
* **IA Simbólica / Sistemas Especialistas (GOFAI - Good Old-Fashioned AI):** Baseada em lógica formal, regras determinísticas explícitas (*IF-THEN*) e ontologias estruturadas. Apresenta alta explicabilidade, mas extrema rigidez e fragilidade para lidar com ambiguidade, linguagem natural e incerteza.
* **Aprendizado Estatístico / Conexionismo (Machine Learning & Deep Learning):** Os algoritmos não recebem regras prontas; aprendem padrões e representações latentes diretamente a partir de dados massivos através do ajuste de parâmetros numéricos (pesos sinápticos).

#### B. Os Três Grandes Paradigmas de Aprendizado de Máquina
1. **Aprendizado Supervisionado (*Supervised Learning*):**
   * **Dados:** Conjuntos rotulados compostos por atributos preditores ($X$) e um rótulo-alvo verdadeiro ($y$).
   * **Classificação:** O rótulo é discreto/categórico (ex.: classificar se uma petição é constitucional ou inconstitucional; detecção de spam/phishing).
   * **Regressão:** O rótulo é contínuo/numérico (ex.: estimar o tempo de tramitação de uma proposição legislativa em dias).
2. **Aprendizado Não-Supervisionado (*Unsupervised Learning*):**
   * **Dados:** Conjuntos não rotulados. O algoritmo identifica padrões ocultos, estruturas intrínsecas e similaridades.
   * **Agrupamento (*Clustering*):** Algoritmos como o **K-Means** e agrupamento hierárquico, que particionam observações em grupos com alta homogeneidade interna e máxima heterogeneidade mútua.
   * **Redução de Dimensionalidade:** Técnicas como **PCA (Principal Component Analysis)** e **t-SNE**, que condensam centenas de variáveis mantendo a máxima variância da informação.
3. **Aprendizado por Reforço (*Reinforcement Learning - RL*):**
   * Um **Agente** interage dinamicamente com um **Ambiente**, tomando decisões sequenciais através de uma política com o objetivo de maximizar uma função de recompensa cumulativa (*reward*).
   * **RLHF (Reinforcement Learning from Human Feedback):** Técnica crucial no alinhamento de Grandes Modelos de Linguagem (LLMs), na qual humanos avaliam respostas candidatas para treinar um modelo de recompensa (*Reward Model*), que posteriormente refina o comportamento da IA via otimização de política proximal (PPO), tornando as respostas úteis, verídicas e inofensivas.

---

### 2. A Revolução dos Transformers, LLMs e Engenharia de Prompts

#### A. Arquitetura Transformer e Mecanismos de Autoatenção
* **A Ruptura de 2017 (Vaswani et al. - *Attention Is All You Need*):**
  * As redes neurais tradicionais para linguagem (RNN e LSTM) processavam palavras sequencialmente, sofrendo com o esquecimento de contexto de longo alcance e impossibilidade de paralelização de hardware.
  * O **Transformer** eliminou a recorrência temporal e implementou a **Autoatenção Multicabeça (Multi-Head Self-Attention)**: cada token calcula simultaneamente pesos de relevância em relação a todos os demais tokens da frase, ponderando o contexto bidirecional instantaneamente em placas gráficas (GPUs).
* **Conceitos Operacionais Fundamentais:**
  * **Tokenização:** Processo de fragmentação do texto de entrada em unidades mínimas de significado (caracteres, subpalavras ou palavras completas).
  * **Embeddings:** Vetorização de palavras ou sentenças em espaços multidimensionais densos, nos quais termos semanticamente correlatos situam-se geometricamente próximos (medidos por *similaridade de cosseno*).
  * **Janela de Contexto (*Context Window*):** Limite máximo de tokens que o modelo consegue reter na memória de trabalho durante uma única interação.
  * **Temperatura (0 a 1):** Hiperparâmetro que calibra a distribuição de probabilidades do próximo token. Temperaturas próximas a 0 geram respostas determinísticas, precisas e lógicas (essenciais no direito); temperaturas elevadas (0.7 a 1.0) aumentam a diversidade e criatividade lexical.

#### B. Engenharia de Prompts: Metodologias e Melhores Práticas
* **Zero-shot Prompting:** O agente solicita a resposta informando apenas a tarefa, sem disponibilizar exemplos prévios.
* **Few-shot Prompting:** O prompt fornece um cabeçalho com 2 a 5 exemplos resolvidos (*exemplars*), aproveitando a capacidade intrínseca do modelo de aprender o padrão em tempo de inferência (*in-context learning*).
* **Chain-of-Thought Prompting (CoT - Wei et al., 2022):**
  * Inclui a instrução explícita para o modelo "pensar passo a passo" antes de concluir. Ao externalizar o raciocínio em etapas lógicas sequenciais, a taxa de erros lógicos e saltos dedutivos precipitados reduz-se drasticamente.
* **RAG (Retrieval-Augmented Generation):**
  * Arquitetura em duas fases:
    1. *Recuperação (Retrieval):* A consulta do usuário é convertida em embedding; um banco de dados vetorial localiza os fragmentos textuais oficiais mais relevantes do acervo (ex.: regimento interno, leis ou bases de dados parlamentares).
    2. *Geração Aumentada (Generation):* O LLM recebe a pergunta do usuário associada aos fragmentos documentais autênticos como premissa factual obrigatória, formulando a resposta com citações verificáveis e mitigando alucinações.

---

### 3. Ética Digital, LGPD e Diretrizes para o Serviço Público

#### A. Riscos Éticos Sistêmicos em Modelos de Linguagem
* **Alucinação (*Hallucination*):** Fenômeno em que o modelo prediz tokens linguisticamente fluentes e convincentes, mas que carecem de base na realidade objetiva (ex.: criação de precedentes judiciais inexistentes ou artigos de leis fictícios).
* **Viés Algorítmico (*Algorithmic Bias*):** Reprodução sistemática de distorções históricas, discriminações de gênero, raça ou classe social presentes nos textos de treinamento recolhidos da internet.
* **Vazamento de Dados e Quebra de Sigilo:** Risco crítico decorrente do envio de informações protegidas por sigilo funcional ou dados pessoais sensíveis para servidores públicos em nuvem de provedores de IA sem garantias contratuais de não utilização para retreinamento.

#### B. Diretrizes Institucionais e Princípios de Governança
* **Princípio da Supervisão Humana (*Human-in-the-Loop*):**
  * A inteligência artificial é ferramenta de suporte informacional e automação operacional secundária.
  * O julgamento técnico, a análise de mérito legislativo e a emissão de atos com efeitos jurídicos permanecem de responsabilidade exclusiva, pessoal e indelegável do agente público.
* **Transparência e Explicabilidade (*Explainable AI - XAI*):**
  * Qualquer parecer, relatório ou minuta elaborada com suporte de ferramentas de IA generativa deve registrar expressamente essa condição, garantindo o controle social, o contraditório e o direito à ampla defesa do cidadão interessado.
* **Conformidade com a LGPD (Lei nº 13.709/2018):**
  * Respeito rigoroso aos princípios da **Finalidade**, da **Necessidade** (minimização da coleta de dados pessoais ao estritamente essencial para o fim público) e da **Não Discriminação**, sendo vedado o uso de IA para traçar perfis comportamentais discriminatórios ilícitos.`,
  checkpoints: [
    {
      id: 'cp-14-3-1',
      pergunta: 'Micro-Checkpoint 1: Engenharia de Prompts - Chain-of-Thought (CoT)',
      item: 'A técnica de engenharia de prompts denominada Chain-of-Thought (CoT) fundamenta-se na instrução para que o modelo de linguagem decomponha o raciocínio em etapas lógicas intermediárias antes de emitir a resposta definitiva, demonstrando eficácia sobretudo em problemas de inferência e cálculo.',
      gabarito: 'C',
      justificativa: 'Correto! O CoT (Wei et al., 2022) força a geração de premissas dedutivas sequenciais passo a passo, o que reduz substancialmente saltos lógicos e respostas incorretas em tarefas analíticas complexas.',
    },
    {
      id: 'cp-14-3-2',
      pergunta: 'Micro-Checkpoint 2: Recuperação de Informações - Arquitetura RAG',
      item: 'A arquitetura RAG (Retrieval-Augmented Generation) atua exclusivamente por meio da alteração e do retreinamento profundo dos pesos da rede neural do LLM, dispensando a consulta a bancos de dados externos de documentos.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme demonstrado por Vaswani et al. (2017) e Lewis et al. (2020), o RAG combina a busca em bases de dados externas com a injeção do contexto recuperado no prompt em tempo de inferência, sem realizar retreinamento nem alterar os pesos sinápticos do modelo.',
    },
    {
      id: 'cp-14-3-3',
      pergunta: 'Micro-Checkpoint 3: Governança Pública de IA - Supervisão Humana',
      item: 'No âmbito da administração pública e do Poder Legislativo, a incorporação de sistemas de inteligência artificial generativa autoriza a transferência da competência decisória final para os algoritmos em procedimentos administrativos rotineiros, dispensando a revisão por servidor público.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme a Lei nº 13.709/2018 (LGPD) e as diretrizes éticas da UNESCO e OCDE, a responsabilidade administrativa e legal por decisões públicas é indelegável de agentes públicos humanos. Os sistemas de IA atuam exclusivamente como ferramentas de apoio e subsídio analítico com supervisão humana (human-in-the-loop).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-3-1',
        periodo: '2017',
        disciplina: 'Inteligência Artificial',
        focoPrincipal: 'Publicação do artigo seminal "Attention Is All You Need" instituindo a arquitetura Transformer',
        figuraChave: 'Vaswani et al. (Google Brain / Research)',
      },
      {
        id: 'tl-14-3-2',
        periodo: '2022 / 2023',
        disciplina: 'IA Generativa e Governança',
        focoPrincipal: 'Popularização dos LLMs com RLHF, formalização do CoT e publicação de marcos éticos globais',
        figuraChave: 'Jason Wei / UNESCO / OCDE',
      },
    ],
    autores: [
      {
        id: 'aut-14-3-1',
        nome: 'Stuart Russell & Peter Norvig',
        ano: 2022,
        obraPrincipal: 'Inteligência Artificial: Uma Abordagem Moderna (4ª Ed.)',
        ideiaChave: 'Classificação de paradigmas de aprendizado (supervisionado, não-supervisionado, reforço) e agentes inteligentes.',
        chipPegadinha: 'Supervisionado usa dados rotulados; não supervisionado identifica agrupamentos sem rótulos.',
      },
      {
        id: 'aut-14-3-2',
        nome: 'Jason Wei et al.',
        ano: 2022,
        obraPrincipal: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
        ideiaChave: 'Formulação de prompts com encadeamento de raciocínio passo a passo para problemas complexos.',
        chipPegadinha: 'CoT induz raciocínio intermediário sem retreinar o modelo.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-14-3-1',
        afirmacao: 'O aprendizado de máquina não-supervisionado baseia-se na apresentação prévia de dados rotulados para que o algoritmo aprenda a mapear entradas em saídas predeterminadas.',
        gabarito: 'E',
        porQue: 'Apresentar dados rotulados é a definição de aprendizado SUPERVISIONADO. O não-supervisionado opera com dados não rotulados para descobrir padrões intrínsecos e clusters.',
      },
      {
        id: 'peg-14-3-2',
        afirmacao: 'O mecanismo de RAG (Retrieval-Augmented Generation) exige que todos os documentos da base de conhecimento da organização sejam incorporados diretamente aos parâmetros internos da rede neural por meio de um processo obrigatório de fine-tuning.',
        gabarito: 'E',
        porQue: 'O RAG recupera os documentos externamente e os anexa dinamicamente ao contexto do prompt no momento da inferência, sem qualquer modificação nos parâmetros do modelo.',
      },
    ],
  },
};
