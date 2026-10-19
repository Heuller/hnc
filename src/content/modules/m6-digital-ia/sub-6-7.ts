import type { ModuloFilho } from '../../../domain/types';

export const submodulo67: ModuloFilho = {
  id: 'sub-6-7',
  numero: '6.7',
  editalRef: 'Bloco C - Item 2.1 a 2.10',
  preRequisitos: ["sub-1-6","sub-6-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-3-4",
          "titulo": "Tesauros, Ontologias e SKOS",
          "motivo": "Extração semântica de entidades e controle de alucinação em RAG."
      },
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Datasheets for Datasets, viés algorítmico e proveniência."
      },
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência, LAI e LGPD",
          "motivo": "Uso ético de dados e privacidade em sistemas inteligentes."
      }
  ],
  titulo: 'IA Aplicada à Informação: Classificação, OCR/HTR, Curadoria de Corpora, Avaliação e Vieses',
  antesDeLer: [
    {
      termo: 'OCR (Optical Character Recognition)',
      definicao: 'Tecnologia de conversão de imagens de texto impresso ou datilografado em caracteres de texto legíveis e pesquisáveis por máquina.',
      exemploBiblioteca: 'Digitalização e OCR dos diários da Constituinte de 1987-1988 para permitir busca por palavras no texto integral.',
    },
    {
      termo: 'HTR (Handwritten Text Recognition)',
      definicao: 'Tecnologia de aprendizado profundo focada na transcrição automática de manuscritos históricos com grafias cursivas complexas.',
      exemploBiblioteca: 'Transcrição assistida por IA de livros de atas e correspondências do Império arquivados na Biblioteca Pedro Aleixo.',
    },
    {
      termo: 'Processamento de Linguagem Natural (PLN)',
      definicao: 'Subcampo da IA que investiga a compreensão, análise, síntese e geração automática de linguagem humana por sistemas computacionais.',
      exemploBiblioteca: 'Sumarização automática de justificativas de projetos de lei para gerar ementas prévias nos sistemas legislativos.',
    },
    {
      termo: 'Vieses Algorítmicos (Bias)',
      definicao: 'Desvios sistemáticos e preconceitos incorporados em modelos de IA decorrentes de distorções nos dados de treinamento ou nos algoritmos.',
      exemploBiblioteca: 'Auditoria ética de algoritmos de busca para evitar que determinados temas sociais sejam silenciados nos resultados.',
    },
  ],
  descricaoCurta:
    'Aprendizado supervisionado vs. não supervisionado na organização informacional; sumarização extrativa vs. abstrativa; tecnologias de OCR e HTR (métricas CER e WER); curadoria e documentação de corpora (Datasheets for Datasets e Model Cards); avaliação em sistemas RAG (groundedness e alucinação); vieses algorítmicos e ética informacional.',
  tempoEstimadoMinutos: 14,
  autoresChave: [
    'Timnit Gebru et al. (Datasheets for Datasets, 2018/2021)',
    'Margaret Mitchell et al. (Model Cards for Model Reporting, 2019)',
    'Patrick Lewis et al. (RAG: Retrieval-Augmented Generation, NeurIPS 2020)',
    'Kate Crawford (Atlas of AI, 2021)',
  ],
  alertasCebraspe: [
    'RAG Reduz, mas NÃO Elimina Alucinações: A arquitetura RAG (Retrieval-Augmented Generation) ancora a geração de texto em fragmentos documentais recuperados previamente de bases confiáveis, reduzindo expressivamente o risco de alucinação factual. Contudo, o Cebraspe frequentemente afirma que o RAG "garante a imunidade contra alucinações" ou "elimina integralmente qualquer erro factual do modelo": ERRADO! O modelo generativo ainda pode interpretar incorretamente os trechos recuperados ou preencher lacunas com inferências inverídicas.',
    'Sumarização Extrativa vs. Abstrativa: A sumarização extrativa seleciona e concatena sentenças literais originais do próprio texto-fonte, preservando 100% da fidelidade terminológica da autoria (sem risco de alucinação criativa); já a sumarização abstrativa gera novas construções oracionais e paráfrases em linguagem natural através de modelos generativos, sendo mais fluida, porém sujeita a distorções semânticas e alucinações factuais.',
    'Volume de Dados NÃO Compensa Viés de Amostragem: O Cebraspe adora a falácia de que "um corpus com volume massivo de bilhões de palavras neutraliza automaticamente quaisquer vieses históricos ou de amostragem". ERRADO! A literatura de curadoria (Gebru et al., 2018; Bender et al., 2021) comprova que o aumento cego do volume de dados pode, ao contrário, amplificar e perpetuar preconceitos, termos discriminatórios e sub-representação histórica de minorias presentes na Web.',
    'Métricas de Reconhecimento em Textos Históricos (CER e WER): Para avaliar a qualidade de conversão de imagens em texto digital, utilizam-se a Taxa de Erro de Caracteres (CER - Character Error Rate) e a Taxa de Erro de Palavras (WER - Word Error Rate). Enquanto o OCR (Optical Character Recognition) aplica-se a documentos impressos/tipografados, o HTR (Handwritten Text Recognition) destina-se ao reconhecimento de caligrafias e manuscritos históricos em arquivos patrimoniais.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo de Dimensões Avaliativas de Respostas e Modelos de IA',
    colunas: [
      'Dimensão Avaliativa',
      'O que Mensura Formalmente',
      'Método de Detecção / Cálculo',
      'Falha Típica Associada',
      'Ação de Mitigação Curatorial',
    ],
    linhas: [
      [
        'Precisão (Precision)',
        'Proporção de itens recuperados/classificados que são verdadeiramente relevantes',
        'Verdadeiros Positivos / (Verdadeiros Positivos + Falsos Positivos)',
        'Retorno de ruído informacional (documentos irrelevantes misturados ao resultado)',
        'Refinamento de filtros de busca e elevação do limiar de similaridade vetorial.',
      ],
      [
        'Revocação (Recall)',
        'Capacidade do sistema de encontrar todos os itens relevantes existentes na base',
        'Verdadeiros Positivos / (Verdadeiros Positivos + Falsos Negativos)',
        'Omissão de documentos vitais (silêncio informacional)',
        'Expansão semântica da consulta via sinônimos, tesauros ou embeddings mais abrangentes.',
      ],
      [
        'Fundamentação em Fonte (Groundedness / Faithfulness)',
        'Grau de adesão estrita das afirmações da resposta aos fatos do contexto recuperado',
        'Verificação cruzada de sentenças contra as passagens anexadas no prompt RAG',
        'Alucinação intrínseca (geração de dados inexistentes nas fontes fornecidas)',
        'Instruções de sistema rígidas ("Responda estritamente com base nos textos anexados") e penalização de extrapolamento.',
      ],
      [
        'Relevância do Contexto (Context Relevance)',
        'Pertinência dos fragmentos documentais selecionados pelo retriever para sanar a dúvida',
        'Cálculo de similaridade por cosseno entre o vetor da pergunta e os chunks recuperados',
        'Contexto truncado, ruidoso ou com fragmentos desconexos da dúvida real',
        'Aprimoramento da estratégia de chunking (fragmentação semântica) e reranking de passagens.',
      ],
      [
        'Alucinação (Hallucination)',
        'Geração de informações factualmente falsas, datas inventadas ou citações fictícias de leis',
        'Avaliação humana cega (HITL) ou modelos juízes (LLM-as-a-judge) com verificação em base real',
        'Citação de número de lei ou decisão do STF que nunca existiu no mundo real',
        'Uso mandatório de RAG ancorado em bases oficiais (LexML, portal da Câmara) e supervisão por especialista.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Aplicações de IA e Processamento de Linguagem Natural (PLN) na Gestão Documental

A aplicação de técnicas de **Inteligência Artificial (IA)** e **Processamento de Linguagem Natural (PLN)** em bibliotecas e arquivos legislativos transforma radicalmente os fluxos de tratamento, análise e disseminação da informação:

* **1. Aprendizado Supervisionado na Gestão da Informação:**
  * O modelo é treinado com um conjunto de dados previamente rotulado por especialistas humanos (pares de entrada e saída esperada).
  * *Classificação Automática de Documentos:* Atribuição automática de classes documentais (ex.: classificar uma petição como "Recurso", "Consulta" ou "Denúncia").
  * *Reconhecimento de Entidades Nomeadas (NER - Named Entity Recognition):* Identificação e extração automatizada de entidades discretas em textos legislativos:
    * Nomes de parlamentares e autoridades públicas;
    * Nomes de órgãos da administração pública e entidades federativas;
    * Citações expressas a normas jurídicas (ex.: "Lei nº 14.133/2021", "art. 5º da CF/88").

* **2. Aprendizado Não Supervisionado na Gestão da Informação:**
  * O algoritmo processa dados não rotulados para identificar padrões latentes, agrupamentos naturais ou reduções dimensionais.
  * *Agrupamento Temático (Clustering):* Agregação de discursos parlamentares por similaridade semântica vetorial, sem categorização prévia.
  * *Modelagem de Tópicos (Topic Modeling com LDA / BERTopic):* Descoberta automatizada dos temas latentes discutidos em milhões de proposições legislativas ao longo de uma década.

* **3. Sumarização Automática: Extrativa vs. Abstrativa:**
  * *Sumarização Extrativa:*
    * O algoritmo pontua e extrai **frases e trechos literais originais** do próprio documento, concatenando-os para formar o resumo executivo.
    * *Vantagens e Desvantagens:* Preserva integralmente a autenticidade e a precisão do texto original (risco zero de inventar fatos ou adulterar termos jurídicos), porém pode produzir textos com quebras de coesão e fluidez.
  * *Sumarização Abstrativa:*
    * O modelo generativo (como um LLM) "compreende" o conteúdo do documento e **redige um novo texto de síntese com suas próprias palavras e estruturas sintáticas**.
    * *Vantagens e Desvantagens:* Gera resumos altamente fluídos, coesos e adaptados ao público leitor, mas carrega o risco intrínseco de **alucinações factuais**, omissões sutis de condicionantes legais e perda de nuances semânticas.

---

### 2. Digitalização Avançada: OCR (Impresso) e HTR (Manuscrito)

A preservação e o acesso a acervos históricos parlamentares dependem de tecnologias de visão computacional e reconhecimento de caracteres:

* **1. OCR (Optical Character Recognition - Reconhecimento Óptico de Caracteres):**
  * Converte imagens rasterizadas de **textos impressos ou tipografados** (documentos datilografados, livros impressos, diários oficiais) em texto digital pesquisável e codificado (UTF-8).
  * Cria o formato **PDF Pesquisável (PDF/A)**, que sobrepõe à imagem escaneada uma camada invisível de texto correspondente, permitindo busca booleana e cópia de trechos.

* **2. HTR (Handwritten Text Recognition - Reconhecimento de Manuscritos):**
  * Tecnologia avançada baseada em redes neurais profundas (CNNs e Transformers) projetada para reconhecer **escrita manual, caligrafias históricas e documentos paleográficos**.
  * Aplicada no acervo de obras raras e documentos fundacionais da Câmara dos Deputados (ex.: atas manuscritas da Assembleia Geral Constituinte do Império de 1823).

* **3. Métricas Padronizadas de Acurácia em OCR/HTR:**
  * **Taxa de Erro de Caracteres (CER - Character Error Rate):**
    $\\text{CER} = \\frac{S + D + I}{N}$
    Onde:
    * $S$ = Substituições (caracteres trocados incorretamente);
    * $D$ = Deleções (caracteres omitidos pelo leitor);
    * $I$ = Inserções (caracteres espúrios adicionados);
    * $N$ = Número total de caracteres no texto de referência (*ground truth*).
  * **Taxa de Erro de Palavras (WER - Word Error Rate):**
    * Mensura a proporção de palavras inteiras que sofreram falhas na transcrição.
  * *Human-in-the-Loop (HITL):* Em acervos patrimoniais e jurídicos, nenhum sistema de OCR/HTR opera de forma 100% autônoma sem uma etapa de revisão, curadoria e pós-correção manual por arquivistas e bibliotecários.

---

### 3. Curadoria de Dados e Governança de Corpora para IA

A integridade e a confiabilidade de qualquer sistema de IA dependem estritamente da qualidade do seu corpus de dados de treinamento e avaliação:

#### A. O Ciclo de Curadoria de Corpora
1. **Seleção e Aquisição:** Coleta orientada a fins de pesquisa com critérios explícitos de representatividade e legalidade (respeito aos direitos autorais da Lei nº 9.610/1998 e à LGPD).
2. **Limpeza e Normalização:** Remoção de caracteres de controle, correção de codificação (UTF-8), expurgo de ruídos de digitalização e eliminação de duplicatas (*deduplication*).
3. **Anotação e Rotulagem:** Inserção de metadados semânticos e etiquetas de classe segundo diretrizes rigorosas (*guidelines*) com cálculo de concordância entre anotadores (ex.: Coeficiente Kappa de Cohen).
4. **Particionamento Metodológico do Dataset:**
   * *Conjunto de Treinamento (Training Set - ~70-80%):* Utilizado para ajustar os parâmetros e pesos matemáticos do modelo.
   * *Conjunto de Validação / Desenvolvimento (Validation / Dev Set - ~10-15%):* Utilizado para ajuste de hiperparâmetros e prevenção de superajuste (*overfitting*).
   * *Conjunto de Teste (Test Set - ~10-15%):* **Dados mantidos estritamente isolados**, nunca vistos pelo modelo durante o treino, utilizados para a avaliação final e independente de desempenho.

#### B. Documentação Padronizada: Datasheets e Model Cards
A literatura contemporânea de ética e governança de dados consagrou instrumentos de transparência audital:
* **Datasheets for Datasets (Timnit Gebru et al., 2018/2021):**
  * Documento formal que acompanha cada conjunto de dados publicado, detalhando:
    * Motivação da criação do dataset e financiamento;
    * Composição dos dados (atributos, presença de PII / dados pessoais, tamanho);
    * Processo de coleta e consentimento de titulares;
    * Pré-processamento e limpeza aplicados;
    * Casos de uso recomendados e **usos expressamente desaconselhados**.
* **Model Cards for Model Reporting (Margaret Mitchell et al., 2019):**
  * Documentação transparente que acompanha modelos de IA treinados, explicitando:
    * Detalhes do modelo (arquitetura, desenvolvedores, data);
    * Usuários pretendidos e tarefas intencionais;
    * Fatores de desempenho e métricas em subpopulações;
    * Dados de treinamento e dados de avaliação;
    * Limitações éticas, vieses conhecidos e advertências de segurança.

---

### 4. Avaliação de Modelos de Linguagem e Sistemas RAG

A arquitetura **RAG (Retrieval-Augmented Generation - Patrick Lewis et al., NeurIPS 2020)** combina um modelo de recuperação documental (*retriever*) com um modelo gerador (*LLM*):

\`\`\`
[Usuário Faz Pergunta] 
        │
        ▼
[Mecanismo de Busca Vetorial / Retriever] ──> [Base de Documentos Oficiais / LexML]
        │                                           │
        ▼                                           ▼
[Fragmentos Relevantes Recuperados (Contexto Chunks)]
        │
        ▼
[Prompt Enriquecido: Contexto + Pergunta] ──> [Modelo de Linguagem (LLM)]
                                                    │
                                                    ▼
                                            [Resposta Ancorada]
\`\`\`

#### A. A Tríade de Avaliação RAG
Para auditar a confiabilidade de um sistema RAG em ambiente parlamentar, avaliam-se três pilares interdependentes:
1. **Fidelidade / Fundamentação em Fonte (Faithfulness / Groundedness):**
   * Mensura se todas as afirmações presentes na resposta final encontram respaldo direto nos fragmentos de contexto que foram fornecidos no prompt.
   * Respostas que inventam artigos de leis não presentes nos chunks recuperados são penalizadas como **alucinações**.
2. **Relevância do Contexto (Context Relevance):**
   * Avalia se os documentos recuperados pelo retriever são pertinentes e suficientes para sanar a dúvida do usuário, evitando o envio de trechos irrelevantes que poluam a janela de contexto.
3. **Relevância da Resposta (Answer Relevance):**
   * Avalia se a resposta atende pontualmente ao que foi questionado pelo usuário, sem desviar do foco temático.

#### B. O Papel do Bibliotecário e Human-in-the-Loop (HITL)
Embora o RAG reduza drasticamente as alucinações ao forçar o modelo a consultar fontes verificadas, ele **não é à prova de falhas**. A curadoria das bases de vetores, a fragmentação semântica (*chunking strategy*) e a validação final por profissionais da informação são salvaguardas mandatórias em instituições do Estado Democrático de Direito.

---

### 5. Vieses Algorítmicos, Ética e Governança no Setor Público

A governança responsável de IA na administração pública exige a compreensão crítica dos tipos de vieses:

* **1. Viés de Dados (Data Bias / Amostragem Histórica):**
  * Decorre de distorções históricas presentes nos dados documentais do passado. Por exemplo, treinar um modelo de indexação com acervos bibliográficos do século XIX pode perpetuar terminologias preconceituosas ou categorias obsoletas se não houver mediação curatorial.
* **2. Viés de Algoritmo (Algorithmic Bias):**
  * Surge quando a função de otimização matemática do modelo prioriza padrões predominantes da maioria, marginalizando minorias ou outliers legítimos.
* **3. Viés de Confirmação e Automação (Automation Bias):**
  * Tendência psicológica de operadores humanos confiarem cegamente nas decisões ou sugestões emitidas pelo sistema automatizado, deixando de exercer o senso crítico e a checagem manual de evidências.
* **4. Segurança e LGPD em Prompts de IA:**
  * Enviar textos que contenham dados pessoais protegidos, relatórios de inteligência parlamentar sob sigilo ou minutas de votos em comissões para APIs públicas de IA em nuvem de terceiros viola as diretrizes de segurança da informação da Câmara dos Deputados e os preceitos da Lei nº 13.709/2018.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Tesauros, Ontologias e SKOS (sub-3-4):** Extração semântica de entidades e controle de alucinação em RAG.
* **Governança da Informação e de Dados (sub-1-6):** Datasheets for Datasets, viés algorítmico e proveniência.
* **Transparência, LAI e LGPD (sub-11-12):** Uso ético de dados e privacidade em sistemas inteligentes.
`,
  checkpoints: [
    {
      id: 'cp-6-7-1',
      pergunta: 'Micro-Checkpoint 1: Arquitetura RAG e o Controle de Alucinações',
      item: 'A adoção da arquitetura de geração aumentada por recuperação (RAG) em bibliotecas digitais tem como finalidade primordial fundamentar as respostas do modelo de linguagem em evidências documentais extraídas de bases institucionais confiáveis, reduzindo significativamente as alucinações, embora não elimine por completo o risco de geração de imprecisões factuais pelo modelo generativo.',
      gabarito: 'C',
      justificativa:
        'Correto! O RAG (Lewis et al., 2020) ancora a geração em fontes externas fornecidas no prompt, reduzindo alucinações factuais de forma expressiva; contudo, a literatura e a prática técnica reconhecem que o risco residual de inferências incorretas ou alucinações não é eliminado a zero.',
    },
    {
      id: 'cp-6-7-2',
      pergunta: 'Micro-Checkpoint 2: Documentação de Dados e Modelos (Datasheets e Model Cards)',
      item: 'Segundo os padrões consagrados na literatura de ética e governança de inteligência artificial, o instrumento denominado Model Card é utilizado precipuamente para catalogar a proveniência e a coleta de dados de um dataset bruto, ao passo que o Datasheet for Datasets destina-se a reportar os hiperparâmetros de treinamento e as métricas de inferência de um modelo de aprendizado de máquina.',
      gabarito: 'E',
      justificativa:
        'Errado! Os conceitos foram invertidos: "Datasheets for Datasets" (Gebru et al., 2018) destina-se a documentar o conjunto de DADOS (motivação, composição, coleta, usos recomendados); "Model Cards for Model Reporting" (Mitchell et al., 2019) destina-se a documentar os MODELOS treinados (arquitetura, limitações, métricas e casos de uso).',
    },
    {
      id: 'cp-6-7-3',
      pergunta: 'Micro-Checkpoint 3: Volume de Dados Massivo e Neutralização de Vieses',
      item: 'Em projetos de inteligência artificial voltados à organização de acervos governamentais, a expansão quantitativa de um corpus textual para a escala de bilhões de palavras dispensa a necessidade de documentação qualitativa e auditoria de proveniência, uma vez que a representatividade matemática de grandes volumes de dados neutraliza automaticamente quaisquer vieses históricos e terminológicos.',
      gabarito: 'E',
      justificativa:
        'Errado! Aumentar arbitrariamente o volume de um corpus textual sem curadoria crítica e auditoria qualitativa não neutraliza vieses; pelo contrário, modelos treinados em grandes volumes não filtrados da internet absorvem, amplificam e perpetuam preconceitos históricos, disparidades linguísticas e distorções terminológicas.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-7-1',
        periodo: '2018 / 2019',
        disciplina: 'Transparência e Governança de IA',
        focoPrincipal: 'Proposição dos frameworks "Datasheets for Datasets" e "Model Cards for Model Reporting"',
        figuraChave: 'Timnit Gebru e Margaret Mitchell',
      },
      {
        id: 'tl-6-7-2',
        periodo: '2020',
        disciplina: 'Arquitetura RAG e Recuperação Semântica',
        focoPrincipal: 'Publicação do artigo seminal sobre Retrieval-Augmented Generation (NeurIPS)',
        figuraChave: 'Patrick Lewis et al. (Facebook AI / UCL)',
      },
      {
        id: 'tl-6-7-3',
        periodo: '2021 / 2024',
        disciplina: 'Ética e Regulação de IA',
        focoPrincipal: 'Consolidação de auditorias de viés algorítmico, marcos regulatórios globais e Human-in-the-Loop',
        figuraChave: 'Kate Crawford / Comunidade Científica de IA',
      },
    ],
    autores: [
      {
        id: 'aut-6-7-1',
        nome: 'Timnit Gebru et al.',
        ano: 2018,
        obraPrincipal: 'Datasheets for Datasets (Communications of the ACM, 2021)',
        ideiaChave: 'Ficha técnica padronizada documentando motivação, composição, processo de coleta e usos recomendados de conjuntos de dados.',
        chipPegadinha: 'Datasheet documenta o DATASET (dados); Model Card documenta o MODELO de IA.',
      },
      {
        id: 'aut-6-7-2',
        nome: 'Patrick Lewis et al.',
        ano: 2020,
        obraPrincipal: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS)',
        ideiaChave: 'Arquitetura RAG combinando recuperação densa de trechos documentais com modelos generativos pré-treinados.',
        chipPegadinha: 'RAG reduz alucinações ancorando em evidências, mas não garante a sua eliminação absoluta.',
      },
      {
        id: 'aut-6-7-3',
        nome: 'Margaret Mitchell et al.',
        ano: 2019,
        obraPrincipal: 'Model Cards for Model Reporting (FAT* 2019)',
        ideiaChave: 'Relatório estruturado de transparência para modelos de aprendizado de máquina, detalhando limitações, métricas e casos de uso intencionais.',
        chipPegadinha: 'O Model Card exige explicitar onde o modelo NÃO deve ser empregado.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-7-1',
        afirmacao: 'A técnica de sumarização abstrativa de textos documentais caracteriza-se pela cópia literal e justaposição de fragmentos pré-existentes no texto original, não apresentando qualquer risco de distorção semântica.',
        gabarito: 'E',
        porQue: 'A técnica que copia trechos literais é a sumarização EXTRATIVA; a sumarização ABSTRATIVA gera novas orações e paráfrases, sujeitando-se a riscos de alucinação e distorção semântica.',
      },
      {
        id: 'peg-6-7-2',
        afirmacao: 'O emprego da arquitetura RAG elimina por completo a necessidade de validação humana das respostas geradas pelo modelo de inteligência artificial em unidades de informação jurídica.',
        gabarito: 'E',
        porQue: 'A supervisão humana (Human-in-the-Loop) permanece indispensável, pois o modelo ainda pode cometer erros de interpretação ou alucinar inferências a partir dos textos recuperados.',
      },
      {
        id: 'peg-6-7-3',
        afirmacao: 'Na avaliação de qualidade de OCR e HTR, a métrica CER (Character Error Rate) mensura o percentual de palavras grafadas incorretamente no texto resultante da transcrição digital.',
        gabarito: 'E',
        porQue: 'O CER mensura a taxa de erro no nível de CARACTERES (letras/símbolos); a métrica que avalia palavras inteiras é o WER (Word Error Rate).',
      },
    ],
  },
};
