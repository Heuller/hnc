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
    'Busca Semântica vs. Busca Booleana Tradicional: a busca semântica via embeddings e modelos vetoriais densos compreende o contexto e o significado conceitual da pergunta do usuário, superando a mera coincidência exata de termos (match de strings) da álgebra booleana clássica.',
    'Declaração da IFLA sobre Bibliotecas e IA: destaca que as bibliotecas devem priorizar a aquisição de tecnologias de IA que respeitem padrões éticos rigorosos de privacidade, diversidade, inclusão social e mitigação de viés algorítmico.',
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

A Inteligência Artificial (IA), historicamente dividida entre as abordagens simbólicas (sistemas especialistas baseados em regras) e conexionistas (redes neurais), vivenciou uma ruptura revolucionária a partir de 2017 com o desenvolvimento da arquitetura de **Transformers** (*Attention Is All You Need*, Vaswani et al., 2017).

Na Biblioteconomia contemporânea, a IA deixou de ser mero objeto de ficção científica para se converter em **ferramenta estruturante de tratamento, recuperação e disseminação da informação** (IFLA, 2020; Câmara dos Deputados, 2023, documentos oficiais presentes em nosso repositório \`Digital, repositórios e IA\`):

* **Grandes Modelos de Linguagem (*Large Language Models - LLMs*):**
  * Modelos neurais treinados em massas monumentais de texto, capazes de compreender, sumarizar, traduzir e gerar texto com fluência natural.
* **Embeddings Vetoriais e Busca Semântica:**
  * O processamento de linguagem natural converte palavras, sentenças ou documentos inteiros em **vetores matemáticos densos** (embeddings) em espaços de centenas ou milhares de dimensões.
  * Documentos conceitualmente semelhantes situam-se próximos no espaço vetorial. A busca semântica calcula a distância matemática (como a similaridade por cosseno) entre o vetor da consulta e os vetores do acervo, permitindo recuperar documentos relevantes mesmo que eles não compartilhem uma única palavra literal com a pergunta do usuário.

---

### 2. Aplicações Práticas de IA no Ciclo Biblioteconômico

1. **Catalogação Descritiva Assistida:**
   * Extração automatizada de metadados de fontes de informação (título, autor, editora, ISBN, data) a partir de arquivos digitais em PDF, gerando rascunhos de registros MARC 21 para validação rápida do bibliotecário.
2. **Indexação Temática e Atribuição de Descritores:**
   * Análise do conteúdo textual de proposições legislativas e artigos para sugerir descritores a partir de tesauros controlados (como o Tesauro da Câmara ou o LexML), reduzindo o tempo de processamento técnico.
3. **Serviços de Referência Inteligentes e Chatbots:**
   * Assistentes virtuais baseados em RAG (*Retrieval-Augmented Generation* - Geração Aumentada por Recuperação) capazes de responder a dúvidas frequentes dos cidadãos e assessores parlamentares consultando exclusivamente as bases oficiais da Casa.
4. **Curadoria e Normalização de Dados:**
   * Desduplicação de registros de autoridade, limpeza de dados em catálogos legados e enriquecimento automático de metadados.

---

### 3. As Diretrizes Éticas da IFLA sobre Bibliotecas e Inteligência Artificial

Publicada pelo comitê consultivo da IFLA (*IFLA Statement on Libraries and Artificial Intelligence*):
* **Neutralidade e Transparência:** Os sistemas de IA adotados pelas bibliotecas devem ser auditáveis e transparentes quanto aos dados utilizados em seu treinamento.
* **Privacidade dos Usuários:** O histórico de buscas, consultas e empréstimos dos leitores nunca deve ser exposto a modelos de IA comerciais de terceiros sem anonimização rigorosa.
* **Combate a Vieses Algorítmicos:** Os algoritmos de IA refletem preconceitos históricos presentes nos textos da Web; as bibliotecas têm o dever de selecionar tecnologias inclusivas que mitiguem discriminações raciais, de gênero, culturais e linguísticas.
* **Desenvolvimento da Alfabetização em IA (*AI Literacy*):** O bibliotecário deve capacitar o usuário a compreender o funcionamento, as limitações e os riscos de alucinação e plágio das ferramentas de IA generativa.

---

### 4. A Governança de IA na Câmara dos Deputados

A Câmara dos Deputados consolidou-se como vanguarda na administração pública brasileira ao publicar diretrizes oficiais para o uso responsável de IA generativa no processo legislativo (documento presente em nosso acervo \`Digital, repositórios e IA/uso_responsavel_camara.pdf\`):

* **Princípio da Supervisão Humana (*Human-in-the-Loop*):**
  * Toda produção gerada ou assistida por ferramentas de IA deve passar compulsoriamente pela revisão, validação e responsabilidade final de um servidor ou autor humano. A IA atua estritamente como suporte técnico de produtividade, jamais como decisor final.
* **Segurança e Conformidade com a LGPD (Lei 13.709/18):**
  * É proibida a inserção de documentos sigilosos, minutas confidenciais ou dados pessoais de parlamentares e servidores em plataformas públicas externas de IA.
* **Explicabilidade e Não Discriminação:**
  * Os sistemas de suporte legislativo que utilizem algoritmos preditivos devem ser explicáveis, permitindo que a sociedade compreenda as premissas e a lógica dos resultados gerados.`,
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
      pergunta: 'Micro-Checkpoint 2: Diretrizes Éticas e o Papel do Bibliotecário frente à IA',
      item: 'Em virtude dos avanços da inteligência artificial generativa, que realiza de forma autônoma e infalível todo o processamento documental, as diretrizes da IFLA orientam as bibliotecas a dispensarem a supervisão humana nas rotinas de catalogação e indexação.',
      gabarito: 'E',
      justificativa: 'Errado! A IFLA e as normas institucionais reafirmam o princípio inegociável da supervisão humana ("human-in-the-loop"), sendo a curadoria ética do bibliotecário indispensável para mitigar alucinações e vieses algorítmicos.',
    },
      {
      id: 'cp-6-4-3',
      pergunta: "Micro-Checkpoint 3: Desafios Éticos e Alucinação em Modelos de Linguagem (LLMs)",
      item: "Nos serviços de referência orientados por modelos de inteligência artificial generativa, a técnica de RAG (Retrieval-Augmented Generation) é dispensável quando o modelo possui parâmetros suficientes para garantir acurácia documental absoluta.",
      gabarito: 'E',
      justificativa: "Errado! Modelos de linguagem sofrem de alucinação e obsolescência temporal de dados. A arquitetura RAG conecta o LLM a um repositório canônico externo validado, sendo indispensável para recuperação de fontes fidedignas.",
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
        periodo: '2023 / 2024',
        disciplina: 'Governança no Legislativo',
        focoPrincipal: 'Publicação do Guia e Diretrizes de Uso Responsável de IA na Câmara dos Deputados',
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
        nome: 'Câmara dos Deputados (Comitê de IA)',
        ano: 2023,
        obraPrincipal: 'Diretrizes para o Uso Responsável de Inteligência Artificial Generativa',
        ideiaChave: 'Supervisão humana estrita (human-in-the-loop), conformidade com LGPD e transparência legislativa.',
        chipPegadinha: 'O servidor responde integralmente pelo conteúdo final publicado, mesmo gerado com auxílio de IA.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-4-1',
        afirmacao: 'O modelo que fundamentou a criação de sistemas de inteligência artificial generativa como o ChatGPT é denominado Token Model Process (TMP).',
        gabarito: 'E',
        porQue: 'Essa pegadinha caiu no TCE-MG 2026! O modelo que fundamentou o ChatGPT é o Large Language Model (LLM) baseado na arquitetura de redes neurais Transformers.',
      },
      {
        id: 'peg-6-4-2',
        afirmacao: 'A aplicação de inteligência artificial em unidades de informação impede sua utilização em atividades técnicas de representação temática, como classificação e indexação.',
        gabarito: 'E',
        porQue: 'Pelo contrário, o Cebraspe já reiterou (MPE-CE 2025) que a biblioteconomia contribui e aplica a IA diretamente em métodos de classificação e indexação automatizada.',
      },
    ],
  },
};
