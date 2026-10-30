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
    "termo": "CER",
    "definicao": "Distância de edição normalizada pelo comprimento da referência.",
    "exemploBiblioteca": "Muitas inserções podem produzir taxa superior a 100%."
  },
  {
    "termo": "Vazamento de dados",
    "definicao": "Informação do teste interfere indevidamente no treinamento ou na seleção.",
    "exemploBiblioteca": "Versões quase iguais do documento em partições distintas podem inflar a avaliação."
  }
],
  descricaoCurta:
    "Escolher tarefa e reconhecer riscos de síntese. Aplicar OCR/HTR e calcular erro com referência definida. Documentar corpus e impedir vazamento entre conjuntos. Avaliar recuperação, fundamentação e adequação da resposta. Distinguir tipos de viés e responsabilidades.",
  tempoEstimadoMinutos: 25,
  autoresChave: [
  "Gebru et al. — Datasheets for Datasets",
  "Mitchell et al. — Model Cards for Model Reporting",
  "Lewis et al. — Retrieval-Augmented Generation",
  "Hugging Face Evaluate — CER",
  "Lei 13.709/2018 — LGPD"
],
  alertasCebraspe: [
  "Omissão, concatenação e perda de condição/referente podem alterar a interpretação.",
  "Inserções podem superar o comprimento da referência.",
  "Duplicatas e versões relacionadas podem vazar informação; é preciso examinar unidades de separação."
],
  teoriaDensaMarkdown: "### Aplicações de IA e Processamento de Linguagem Natural (PLN) na Gestão Documental\n\nA aplicação de técnicas de **Inteligência Artificial (IA)** e **Processamento de Linguagem Natural (PLN)** em bibliotecas e arquivos legislativos transforma radicalmente os fluxos de tratamento, análise e disseminação da informação:\n\n* **1. Aprendizado Supervisionado na Gestão da Informação:**\n  * O modelo é treinado com um conjunto de dados rotulado segundo o método; os rótulos podem ter diferentes processos de produção e precisam de qualidade/documentação (pares de entrada e saída esperada).\n  * *Classificação Automática de Documentos:* Atribuição automática de classes documentais (ex.: classificar uma petição como \"Recurso\", \"Consulta\" ou \"Denúncia\").\n  * *Reconhecimento de Entidades Nomeadas (NER - Named Entity Recognition):* Identificação e extração automatizada de entidades discretas em textos legislativos:\n    * Nomes de parlamentares e autoridades públicas;\n    * Nomes de órgãos da administração pública e entidades federativas;\n    * Citações expressas a normas jurídicas (ex.: \"Lei nº 14.133/2021\", \"art. 5º da CF/88\").\n\n* **2. Aprendizado Não Supervisionado na Gestão da Informação:**\n  * O algoritmo processa dados não rotulados para identificar padrões latentes, agrupamentos naturais ou reduções dimensionais.\n  * *Agrupamento Temático (Clustering):* Agregação de discursos parlamentares por similaridade semântica vetorial, sem categorização prévia.\n  * *Modelagem de Tópicos (Topic Modeling com LDA / BERTopic):* Descoberta automatizada dos temas latentes discutidos em milhões de proposições legislativas ao longo de uma década.\n\n* **3. Sumarização Automática: Extrativa vs. Abstrativa:**\n  * *Sumarização Extrativa:*\n    * O algoritmo pontua e extrai **frases e trechos literais originais** do próprio documento, concatenando-os para formar o resumo executivo.\n    * *Vantagens e Desvantagens:* Extrai material existente, mas a seleção/concatenação pode omitir condições, perder referentes e induzir sentido enganoso. Não há risco zero de erro factual da síntese, porém pode produzir textos com quebras de coesão e fluidez.\n  * *Sumarização Abstrativa:*\n    * O modelo generativo (como um LLM) processa a entrada e **redige um novo texto de síntese com suas próprias palavras e estruturas sintáticas**.\n    * *Vantagens e Desvantagens:* Gera resumos altamente fluídos, coesos e adaptados ao público leitor, mas carrega o risco intrínseco de **alucinações factuais**, omissões sutis de condicionantes legais e perda de nuances semânticas.\n\n**Aplicação e recuperação:** O documento diz “não se aplica aos contratos anteriores”. Um resumo extrativo conserva só “se aplica aos contratos anteriores” após corte indevido: usar palavras da fonte não garante fidelidade da seleção. NER detecta menção, mas ligar a menção à entidade correta é tarefa adicional. Classificação e extração também podem usar regras, sem um único método obrigatório.\n\n### Digitalização Avançada: OCR (Impresso) e HTR (Manuscrito)\n\nA preservação e o acesso a acervos históricos parlamentares dependem de tecnologias de visão computacional e reconhecimento de caracteres:\n\n* **1. OCR (Optical Character Recognition - Reconhecimento Óptico de Caracteres):**\n  * Converte imagens rasterizadas de **textos impressos ou tipografados** (documentos datilografados, livros impressos, diários oficiais) em texto digital pesquisável e codificado (UTF-8).\n  * Pode criar uma camada de texto num **PDF pesquisável**, que não é automaticamente conforme a um perfil PDF/A, que sobrepõe à imagem escaneada uma camada invisível de texto correspondente, permitindo busca booleana e cópia de trechos.\n\n* **2. HTR (Handwritten Text Recognition - Reconhecimento de Manuscritos):**\n  * Tecnologia avançada baseada em redes neurais profundas (CNNs e Transformers) projetada para reconhecer **escrita manual, caligrafias históricas e documentos paleográficos**.\n  * Aplicável, em cenário hipotético, a acervos de obras raras e documentos históricos (ex.: atas manuscritas da Assembleia Geral Constituinte do Império de 1823).\n\n* **3. Métricas Padronizadas de Acurácia em OCR/HTR:**\n  * **Taxa de Erro de Caracteres (CER - Character Error Rate):**\n    $\\text{CER} = \\frac{S + D + I}{N}$\n    Onde:\n    * $S$ = Substituições (caracteres trocados incorretamente);\n    * $D$ = Deleções (caracteres omitidos pelo leitor);\n    * $I$ = Inserções (caracteres espúrios adicionados);\n    * $N$ = Número total de caracteres no texto de referência (*ground truth*).\n  * **Taxa de Erro de Palavras (WER - Word Error Rate):**\n    * Mensura a proporção de palavras inteiras que sofreram falhas na transcrição.\n  * *Human-in-the-Loop (HITL):* A decisão sobre automação, amostragem e revisão deve considerar risco e finalidade. Não se declara inexistente toda operação automática: é necessário planejar controle e corrigir erros relevantes, especialmente em usos jurídicos/patrimoniais.\n\n**Aplicação e recuperação:** Referência com 100 caracteres; oito substituições, duas deleções e cinco inserções: CER = 15/100 = 15%. Muitas inserções podem levar a CER acima de 100%, pois o denominador é a referência. WER usa unidades de palavra, com alinhamento e regras de tokenização; não equivale à porcentagem de páginas corretas. Ignorar um “não” pode ser grave mesmo com CER global baixo.\n\n### Curadoria de Dados e Governança de Corpora para IA\n\nA integridade e a confiabilidade de qualquer sistema de IA dependem estritamente da qualidade do seu corpus de dados de treinamento e avaliação:\n\n#### A. O Ciclo de Curadoria de Corpora\n1. **Seleção e Aquisição:** Coleta orientada a fins de pesquisa com critérios explícitos de representatividade e legalidade (respeito aos direitos autorais da Lei nº 9.610/1998 e à LGPD).\n2. **Limpeza e Normalização:** Remoção de caracteres de controle, correção de codificação (UTF-8), expurgo de ruídos de digitalização e eliminação de duplicatas (*deduplication*).\n3. **Anotação e Rotulagem:** Inserção de metadados semânticos e etiquetas de classe segundo diretrizes rigorosas (*guidelines*) com cálculo de concordância entre anotadores (ex.: Coeficiente Kappa de Cohen).\n4. **Particionamento Metodológico do Dataset:**\n   * *Conjunto de Treinamento (Training Set — proporção a definir):* Utilizado para ajustar os parâmetros e pesos matemáticos do modelo.\n   * *Conjunto de Validação / Desenvolvimento (Validation / Dev Set — proporção a definir):* Utilizado para ajuste de hiperparâmetros e prevenção de superajuste (*overfitting*).\n   * *Conjunto de Teste (Test Set — proporção a definir):* **Dados mantidos estritamente isolados**, nunca vistos pelo modelo durante o treino, utilizados para avaliação final do desempenho. Independência exige verificar duplicatas, versões, pessoas/grupos e vazamento, não apenas separar arquivos aleatoriamente.\n\n#### B. Documentação Padronizada: Datasheets e Model Cards\nA literatura contemporânea de ética e governança de dados consagrou instrumentos de transparência audital:\n* **Datasheets for Datasets (Timnit Gebru et al., 2018/2021):**\n  * Documento formal que acompanha cada conjunto de dados publicado, detalhando:\n    * Motivação da criação do dataset e financiamento;\n    * Composição dos dados (atributos, presença de PII / dados pessoais, tamanho);\n    * Processo de coleta e consentimento de titulares;\n    * Pré-processamento e limpeza aplicados;\n    * Casos de uso recomendados e **usos expressamente desaconselhados**.\n* **Model Cards for Model Reporting (Margaret Mitchell et al., 2019):**\n  * Documentação transparente que acompanha modelos de IA treinados, explicitando:\n    * Detalhes do modelo (arquitetura, desenvolvedores, data);\n    * Usuários pretendidos e tarefas intencionais;\n    * Fatores de desempenho e métricas em subpopulações;\n    * Dados de treinamento e dados de avaliação;\n    * Limitações éticas, vieses conhecidos e advertências de segurança.\n\n**Aplicação e recuperação:** Duas versões quase idênticas de uma lei entram uma no treino e outra no teste. Separar arquivos não remove vazamento. Agrupe versões e escolha divisão temporal/por fonte quando adequada. Não existe proporção 80/10/10 universalmente superior; tamanho, distribuição e finalidade orientam o desenho. Datasheet documenta os dados; model card documenta o modelo e seu uso/avaliação.\n\n### Avaliação de Modelos de Linguagem e Sistemas RAG\n\nA arquitetura **RAG (Retrieval-Augmented Generation - Patrick Lewis et al., NeurIPS 2020)** combina um modelo de recuperação documental (*retriever*) com um modelo gerador (*LLM*):\n\n```\n[Usuário Faz Pergunta] \n        │\n        ▼\n[Mecanismo de Busca Vetorial / Retriever] ──> [Base de Documentos Oficiais / LexML]\n        │                                           │\n        ▼                                           ▼\n[Fragmentos Relevantes Recuperados (Contexto Chunks)]\n        │\n        ▼\n[Prompt Enriquecido: Contexto + Pergunta] ──> [Modelo de Linguagem (LLM)]\n                                                    │\n                                                    ▼\n                                            [Resposta Ancorada]\n```\n\n#### A. A Tríade de Avaliação RAG\nPara auditar a confiabilidade de um sistema RAG em ambiente parlamentar, avaliam-se três pilares interdependentes:\n1. **Fidelidade / Fundamentação em Fonte (Faithfulness / Groundedness):**\n   * Mensura se todas as afirmações presentes na resposta final encontram respaldo direto nos fragmentos de contexto que foram fornecidos no prompt.\n   * Respostas que inventam artigos de leis não presentes nos chunks recuperados são penalizadas como **alucinações**.\n2. **Relevância do Contexto (Context Relevance):**\n   * Avalia se os documentos recuperados pelo retriever são pertinentes e suficientes para sanar a dúvida do usuário, evitando o envio de trechos irrelevantes que poluam a janela de contexto.\n3. **Relevância da Resposta (Answer Relevance):**\n   * Avalia se a resposta atende pontualmente ao que foi questionado pelo usuário, sem desviar do foco temático.\n\n#### B. O Papel do Bibliotecário e Human-in-the-Loop (HITL)\nEmbora recuperação possa apoiar a geração e reduzir certos erros em avaliações específicas, ele **não é à prova de falhas**. A curadoria das bases de vetores, a fragmentação semântica (*chunking strategy*) e a validação final por profissionais da informação são decisões de projeto e governança a justificar conforme risco e regras aplicáveis; não se inventa uma obrigação legal universal para cada técnica.\n\n**Aplicação e recuperação:** Uma resposta pode ser fiel a fonte revogada e ainda errar a pergunta atual. Outra recupera fonte pertinente, mas não segue seu conteúdo. Avalie separadamente recuperação, fidelidade, correção temporal, completude e atendimento ao usuário. Uma tríade de métricas é ferramenta, não certificação universal. Registre também casos em que a evidência é insuficiente e o sistema deve abster-se.\n\n### Vieses Algorítmicos, Ética e Governança no Setor Público\n\nA governança responsável de IA na administração pública exige a compreensão crítica dos tipos de vieses:\n\n* **1. Viés de Dados (Data Bias / Amostragem Histórica):**\n  * Decorre de distorções históricas presentes nos dados documentais do passado. Por exemplo, treinar um modelo de indexação com acervos bibliográficos do século XIX pode perpetuar terminologias preconceituosas ou categorias obsoletas se não houver mediação curatorial.\n* **2. Viés de Algoritmo (Algorithmic Bias):**\n  * Surge quando a função de otimização matemática do modelo prioriza padrões predominantes da maioria, marginalizando minorias ou outliers legítimos.\n* **3. Viés de automação e confirmação: mecanismos distintos:**\n  * Viés de automação envolve confiar excessivamente em saída automática; confirmação envolve favorecer evidências que sustentam crença prévia. Ambos podem ocorrer na mesma tarefa. Operadores podem confiar nas decisões ou sugestões emitidas pelo sistema automatizado, deixando de exercer o senso crítico e a checagem manual de evidências.\n* **4. Segurança e LGPD em Prompts de IA:**\n  * Antes de enviar dados a terceiros, identifique classificação, finalidade, base legal, necessidade, condições contratuais, retenção e segurança. Não se presume autorização por a API estar disponível nem ilegalidade automática de todo uso de nuvem. Conteúdo sigiloso e dados sensíveis exigem os controles/regras pertinentes, sem atribuir proibição interna não documentada.\n\n**Aplicação e recuperação:** Em mil documentos, 900 são da classe A. Um sistema que responde sempre A atinge 90% de acurácia e não reconhece nenhum dos cem da classe B. Examine matriz de confusão, precisão/revocação/F1 por classe, erros críticos e dados fora da distribuição. Volume total ou média alta não provam equidade, adequação jurídica ou neutralidade terminológica.",
  teoriaDidaticaMarkdown: "### Revisão: avalie por tarefa e por erro\n\nExtração não elimina omissão enganosa; geração não garante síntese fiel. OCR pesquisável não certifica PDF/A. CER/WER exigem referência, alinhamento e unidade; CER pode superar 100%. Controle duplicatas, versões e vazamento; percentuais de partição não são universais. Datasheet documenta dados; model card, modelo e avaliação. RAG precisa de exame de recuperação, fidelidade e correção temporal, além de resposta adequada. Médias podem ocultar falha em minorias; supervisão deve conferir evidência e erros críticos, sem presumir neutralidade por volume ou tecnologia.\n",
  checkpoints: [
  {
    "id": "cp-6-7-1",
    "pergunta": "Micro-Checkpoint 1: Arquitetura RAG e o Controle de Alucinações",
    "item": "RAG busca apoiar a geração em evidências recuperadas e pode reduzir certos erros, mas não elimina necessariamente imprecisões, omissões ou inadequação temporal da resposta.",
    "gabarito": "C",
    "justificativa": "O resultado depende do corpus, recuperação, contexto, gerador e avaliação. Não se atribui redução significativa universal sem experimento pertinente.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação."
  },
  {
    "id": "cp-6-7-2",
    "pergunta": "Micro-Checkpoint 2: Documentação de Dados e Modelos (Datasheets e Model Cards)",
    "item": "Segundo os padrões consagrados na literatura de ética e governança de inteligência artificial, o instrumento denominado Model Card é utilizado precipuamente para catalogar a proveniência e a coleta de dados de um dataset bruto, ao passo que o Datasheet for Datasets destina-se a reportar os hiperparâmetros de treinamento e as métricas de inferência de um modelo de aprendizado de máquina.",
    "gabarito": "E",
    "justificativa": "Datasheet é voltado ao conjunto de dados e suas condições; model card, ao modelo, uso e avaliação. Há informação relacionada, mas as finalidades não se invertem.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "versao_correta": "Datasheet documenta dados; model card documenta modelo e condições de avaliação/uso."
  },
  {
    "id": "cp-6-7-3",
    "pergunta": "Micro-Checkpoint 3: Volume de Dados Massivo e Neutralização de Vieses",
    "item": "Em projetos de inteligência artificial voltados à organização de acervos governamentais, a expansão quantitativa de um corpus textual para a escala de bilhões de palavras dispensa a necessidade de documentação qualitativa e auditoria de proveniência, uma vez que a representatividade matemática de grandes volumes de dados neutraliza automaticamente quaisquer vieses históricos e terminológicos.",
    "gabarito": "E",
    "justificativa": "Mais dados não garantem representatividade nem neutralizam vieses. É preciso documentar composição, proveniência e desempenho por grupos/tarefas.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "versao_correta": "Volume não substitui curadoria, documentação e avaliação de vieses."
  },
  {
    "id": "rt-6-7-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um resumo extrativo não pode induzir erro porque usa apenas frases do documento.",
    "gabarito": "E",
    "justificativa": "Omissão, concatenação e perda de condição/referente podem alterar a interpretação.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar",
    "versao_correta": "Extração não garante fidelidade de seleção e contexto."
  },
  {
    "id": "rt-6-7-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "CER de 15 erros de edição em referência com 100 caracteres corresponde a 15%, no alinhamento definido.",
    "gabarito": "C",
    "justificativa": "Substituições, deleções e inserções são divididas pelo comprimento da referência.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-7-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma taxa de erro de caracteres não pode exceder 100%, independentemente do número de inserções.",
    "gabarito": "E",
    "justificativa": "Inserções podem superar o comprimento da referência.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar",
    "versao_correta": "CER pode exceder 100% com muitas inserções."
  },
  {
    "id": "rt-6-7-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Separar arquivos aleatoriamente garante teste independente mesmo quando versões quase idênticas estão no treino e teste.",
    "gabarito": "E",
    "justificativa": "Duplicatas e versões relacionadas podem vazar informação; é preciso examinar unidades de separação.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar",
    "versao_correta": "A independência exige controlar duplicatas, versões e outros vínculos."
  },
  {
    "id": "rt-6-7-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma acurácia global de 90% pode coexistir com ausência total de reconhecimento de uma classe minoritária.",
    "gabarito": "C",
    "justificativa": "No caso de 90% de classe majoritária, predizer sempre essa classe produz a média alta e revocação zero na outra.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-7-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma resposta fiel a fonte desatualizada pode falhar quanto à correção para a data perguntada.",
    "gabarito": "C",
    "justificativa": "Fundamentação no contexto não substitui adequação temporal e material.",
    "fonte": "Gebru et al., Datasheets for Datasets (2021); Mitchell et al., Model Cards (2019); Lewis et al., RAG (2020); documentação CER; LGPD, arts. 6º–7º, 11 e 23–30; exemplos autorais de avaliação.",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-7-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O uso de dados públicos para treinar IA afasta automaticamente os deveres de finalidade e necessidade da LGPD.",
    "gabarito": "E",
    "justificativa": "Publicidade não equivale a dispensa geral das condições de tratamento.",
    "fonte": "Gebru et al. — Datasheets for Datasets",
    "editalRef": "Bloco C - Item 2.1 a 2.10",
    "habilidade": "aplicar",
    "versao_correta": "O tratamento de dados pessoais públicos continua sujeito às condições e aos princípios aplicáveis."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-6-7-fonte-datasheets",
      "nome": "Gebru et al. — Datasheets for Datasets",
      "ano": "Referência de consulta",
      "obraPrincipal": "Gebru et al. — Datasheets for Datasets",
      "ideiaChave": "Motivação, composição, coleta, usos e manutenção do conjunto.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-7-fonte-cards",
      "nome": "Mitchell et al. — Model Cards for Model Reporting",
      "ano": "Referência de consulta",
      "obraPrincipal": "Mitchell et al. — Model Cards for Model Reporting",
      "ideiaChave": "Uso pretendido, avaliação desagregada e limitações.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-7-fonte-rag",
      "nome": "Lewis et al. — Retrieval-Augmented Generation",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lewis et al. — Retrieval-Augmented Generation",
      "ideiaChave": "Arquitetura e resultados experimentais, sem garantia universal.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-7-fonte-cer",
      "nome": "Hugging Face Evaluate — CER",
      "ano": "Referência de consulta",
      "obraPrincipal": "Hugging Face Evaluate — CER",
      "ideiaChave": "Cálculo, referência e possibilidade de resultado superior a um.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-7-fonte-lgpd",
      "nome": "Lei 13.709/2018 — LGPD",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 13.709/2018 — LGPD",
      "ideiaChave": "Finalidade, necessidade e condições do tratamento público.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-6-7-5",
      "afirmacao": "Uma acurácia global de 90% pode coexistir com ausência total de reconhecimento de uma classe minoritária.",
      "gabarito": "C",
      "porQue": "No caso de 90% de classe majoritária, predizer sempre essa classe produz a média alta e revocação zero na outra."
    },
    {
      "id": "memoria-rt-6-7-6",
      "afirmacao": "Uma resposta fiel a fonte desatualizada pode falhar quanto à correção para a data perguntada.",
      "gabarito": "C",
      "porQue": "Fundamentação no contexto não substitui adequação temporal e material."
    },
    {
      "id": "memoria-rt-6-7-7",
      "afirmacao": "O uso de dados públicos para treinar IA afasta automaticamente os deveres de finalidade e necessidade da LGPD.",
      "gabarito": "E",
      "porQue": "Publicidade não equivale a dispensa geral das condições de tratamento."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-6-7-bloco-1",
    "titulo": "Aplicações de IA e Processamento de Linguagem Natural (PLN) na Gestão Documental",
    "objetivos": [
      "Escolher tarefa e reconhecer riscos de síntese."
    ],
    "conteudo": "A aplicação de técnicas de **Inteligência Artificial (IA)** e **Processamento de Linguagem Natural (PLN)** em bibliotecas e arquivos legislativos transforma radicalmente os fluxos de tratamento, análise e disseminação da informação:\n\n* **1. Aprendizado Supervisionado na Gestão da Informação:**\n  * O modelo é treinado com um conjunto de dados rotulado segundo o método; os rótulos podem ter diferentes processos de produção e precisam de qualidade/documentação (pares de entrada e saída esperada).\n  * *Classificação Automática de Documentos:* Atribuição automática de classes documentais (ex.: classificar uma petição como \"Recurso\", \"Consulta\" ou \"Denúncia\").\n  * *Reconhecimento de Entidades Nomeadas (NER - Named Entity Recognition):* Identificação e extração automatizada de entidades discretas em textos legislativos:\n    * Nomes de parlamentares e autoridades públicas;\n    * Nomes de órgãos da administração pública e entidades federativas;\n    * Citações expressas a normas jurídicas (ex.: \"Lei nº 14.133/2021\", \"art. 5º da CF/88\").\n\n* **2. Aprendizado Não Supervisionado na Gestão da Informação:**\n  * O algoritmo processa dados não rotulados para identificar padrões latentes, agrupamentos naturais ou reduções dimensionais.\n  * *Agrupamento Temático (Clustering):* Agregação de discursos parlamentares por similaridade semântica vetorial, sem categorização prévia.\n  * *Modelagem de Tópicos (Topic Modeling com LDA / BERTopic):* Descoberta automatizada dos temas latentes discutidos em milhões de proposições legislativas ao longo de uma década.\n\n* **3. Sumarização Automática: Extrativa vs. Abstrativa:**\n  * *Sumarização Extrativa:*\n    * O algoritmo pontua e extrai **frases e trechos literais originais** do próprio documento, concatenando-os para formar o resumo executivo.\n    * *Vantagens e Desvantagens:* Extrai material existente, mas a seleção/concatenação pode omitir condições, perder referentes e induzir sentido enganoso. Não há risco zero de erro factual da síntese, porém pode produzir textos com quebras de coesão e fluidez.\n  * *Sumarização Abstrativa:*\n    * O modelo generativo (como um LLM) processa a entrada e **redige um novo texto de síntese com suas próprias palavras e estruturas sintáticas**.\n    * *Vantagens e Desvantagens:* Gera resumos altamente fluídos, coesos e adaptados ao público leitor, mas carrega o risco intrínseco de **alucinações factuais**, omissões sutis de condicionantes legais e perda de nuances semânticas.\n\n**Aplicação e recuperação:** O documento diz “não se aplica aos contratos anteriores”. Um resumo extrativo conserva só “se aplica aos contratos anteriores” após corte indevido: usar palavras da fonte não garante fidelidade da seleção. NER detecta menção, mas ligar a menção à entidade correta é tarefa adicional. Classificação e extração também podem usar regras, sem um único método obrigatório.",
    "checkpointIds": [
      "cp-6-7-1",
      "rt-6-7-1"
    ]
  },
  {
    "id": "sub-6-7-bloco-2",
    "titulo": "Digitalização Avançada: OCR (Impresso) e HTR (Manuscrito)",
    "objetivos": [
      "Aplicar OCR/HTR e calcular erro com referência definida."
    ],
    "conteudo": "A preservação e o acesso a acervos históricos parlamentares dependem de tecnologias de visão computacional e reconhecimento de caracteres:\n\n* **1. OCR (Optical Character Recognition - Reconhecimento Óptico de Caracteres):**\n  * Converte imagens rasterizadas de **textos impressos ou tipografados** (documentos datilografados, livros impressos, diários oficiais) em texto digital pesquisável e codificado (UTF-8).\n  * Pode criar uma camada de texto num **PDF pesquisável**, que não é automaticamente conforme a um perfil PDF/A, que sobrepõe à imagem escaneada uma camada invisível de texto correspondente, permitindo busca booleana e cópia de trechos.\n\n* **2. HTR (Handwritten Text Recognition - Reconhecimento de Manuscritos):**\n  * Tecnologia avançada baseada em redes neurais profundas (CNNs e Transformers) projetada para reconhecer **escrita manual, caligrafias históricas e documentos paleográficos**.\n  * Aplicável, em cenário hipotético, a acervos de obras raras e documentos históricos (ex.: atas manuscritas da Assembleia Geral Constituinte do Império de 1823).\n\n* **3. Métricas Padronizadas de Acurácia em OCR/HTR:**\n  * **Taxa de Erro de Caracteres (CER - Character Error Rate):**\n    $\\text{CER} = \\frac{S + D + I}{N}$\n    Onde:\n    * $S$ = Substituições (caracteres trocados incorretamente);\n    * $D$ = Deleções (caracteres omitidos pelo leitor);\n    * $I$ = Inserções (caracteres espúrios adicionados);\n    * $N$ = Número total de caracteres no texto de referência (*ground truth*).\n  * **Taxa de Erro de Palavras (WER - Word Error Rate):**\n    * Mensura a proporção de palavras inteiras que sofreram falhas na transcrição.\n  * *Human-in-the-Loop (HITL):* A decisão sobre automação, amostragem e revisão deve considerar risco e finalidade. Não se declara inexistente toda operação automática: é necessário planejar controle e corrigir erros relevantes, especialmente em usos jurídicos/patrimoniais.\n\n**Aplicação e recuperação:** Referência com 100 caracteres; oito substituições, duas deleções e cinco inserções: CER = 15/100 = 15%. Muitas inserções podem levar a CER acima de 100%, pois o denominador é a referência. WER usa unidades de palavra, com alinhamento e regras de tokenização; não equivale à porcentagem de páginas corretas. Ignorar um “não” pode ser grave mesmo com CER global baixo.",
    "checkpointIds": [
      "rt-6-7-2",
      "rt-6-7-3"
    ]
  },
  {
    "id": "sub-6-7-bloco-3",
    "titulo": "Curadoria de Dados e Governança de Corpora para IA",
    "objetivos": [
      "Documentar corpus e impedir vazamento entre conjuntos."
    ],
    "conteudo": "A integridade e a confiabilidade de qualquer sistema de IA dependem estritamente da qualidade do seu corpus de dados de treinamento e avaliação:\n\n#### A. O Ciclo de Curadoria de Corpora\n1. **Seleção e Aquisição:** Coleta orientada a fins de pesquisa com critérios explícitos de representatividade e legalidade (respeito aos direitos autorais da Lei nº 9.610/1998 e à LGPD).\n2. **Limpeza e Normalização:** Remoção de caracteres de controle, correção de codificação (UTF-8), expurgo de ruídos de digitalização e eliminação de duplicatas (*deduplication*).\n3. **Anotação e Rotulagem:** Inserção de metadados semânticos e etiquetas de classe segundo diretrizes rigorosas (*guidelines*) com cálculo de concordância entre anotadores (ex.: Coeficiente Kappa de Cohen).\n4. **Particionamento Metodológico do Dataset:**\n   * *Conjunto de Treinamento (Training Set — proporção a definir):* Utilizado para ajustar os parâmetros e pesos matemáticos do modelo.\n   * *Conjunto de Validação / Desenvolvimento (Validation / Dev Set — proporção a definir):* Utilizado para ajuste de hiperparâmetros e prevenção de superajuste (*overfitting*).\n   * *Conjunto de Teste (Test Set — proporção a definir):* **Dados mantidos estritamente isolados**, nunca vistos pelo modelo durante o treino, utilizados para avaliação final do desempenho. Independência exige verificar duplicatas, versões, pessoas/grupos e vazamento, não apenas separar arquivos aleatoriamente.\n\n#### B. Documentação Padronizada: Datasheets e Model Cards\nA literatura contemporânea de ética e governança de dados consagrou instrumentos de transparência audital:\n* **Datasheets for Datasets (Timnit Gebru et al., 2018/2021):**\n  * Documento formal que acompanha cada conjunto de dados publicado, detalhando:\n    * Motivação da criação do dataset e financiamento;\n    * Composição dos dados (atributos, presença de PII / dados pessoais, tamanho);\n    * Processo de coleta e consentimento de titulares;\n    * Pré-processamento e limpeza aplicados;\n    * Casos de uso recomendados e **usos expressamente desaconselhados**.\n* **Model Cards for Model Reporting (Margaret Mitchell et al., 2019):**\n  * Documentação transparente que acompanha modelos de IA treinados, explicitando:\n    * Detalhes do modelo (arquitetura, desenvolvedores, data);\n    * Usuários pretendidos e tarefas intencionais;\n    * Fatores de desempenho e métricas em subpopulações;\n    * Dados de treinamento e dados de avaliação;\n    * Limitações éticas, vieses conhecidos e advertências de segurança.\n\n**Aplicação e recuperação:** Duas versões quase idênticas de uma lei entram uma no treino e outra no teste. Separar arquivos não remove vazamento. Agrupe versões e escolha divisão temporal/por fonte quando adequada. Não existe proporção 80/10/10 universalmente superior; tamanho, distribuição e finalidade orientam o desenho. Datasheet documenta os dados; model card documenta o modelo e seu uso/avaliação.",
    "checkpointIds": [
      "cp-6-7-2",
      "cp-6-7-3",
      "rt-6-7-4"
    ]
  },
  {
    "id": "sub-6-7-bloco-4",
    "titulo": "Avaliação de Modelos de Linguagem e Sistemas RAG",
    "objetivos": [
      "Avaliar recuperação, fundamentação e adequação da resposta."
    ],
    "conteudo": "A arquitetura **RAG (Retrieval-Augmented Generation - Patrick Lewis et al., NeurIPS 2020)** combina um modelo de recuperação documental (*retriever*) com um modelo gerador (*LLM*):\n\n```\n[Usuário Faz Pergunta] \n        │\n        ▼\n[Mecanismo de Busca Vetorial / Retriever] ──> [Base de Documentos Oficiais / LexML]\n        │                                           │\n        ▼                                           ▼\n[Fragmentos Relevantes Recuperados (Contexto Chunks)]\n        │\n        ▼\n[Prompt Enriquecido: Contexto + Pergunta] ──> [Modelo de Linguagem (LLM)]\n                                                    │\n                                                    ▼\n                                            [Resposta Ancorada]\n```\n\n#### A. A Tríade de Avaliação RAG\nPara auditar a confiabilidade de um sistema RAG em ambiente parlamentar, avaliam-se três pilares interdependentes:\n1. **Fidelidade / Fundamentação em Fonte (Faithfulness / Groundedness):**\n   * Mensura se todas as afirmações presentes na resposta final encontram respaldo direto nos fragmentos de contexto que foram fornecidos no prompt.\n   * Respostas que inventam artigos de leis não presentes nos chunks recuperados são penalizadas como **alucinações**.\n2. **Relevância do Contexto (Context Relevance):**\n   * Avalia se os documentos recuperados pelo retriever são pertinentes e suficientes para sanar a dúvida do usuário, evitando o envio de trechos irrelevantes que poluam a janela de contexto.\n3. **Relevância da Resposta (Answer Relevance):**\n   * Avalia se a resposta atende pontualmente ao que foi questionado pelo usuário, sem desviar do foco temático.\n\n#### B. O Papel do Bibliotecário e Human-in-the-Loop (HITL)\nEmbora recuperação possa apoiar a geração e reduzir certos erros em avaliações específicas, ele **não é à prova de falhas**. A curadoria das bases de vetores, a fragmentação semântica (*chunking strategy*) e a validação final por profissionais da informação são decisões de projeto e governança a justificar conforme risco e regras aplicáveis; não se inventa uma obrigação legal universal para cada técnica.\n\n**Aplicação e recuperação:** Uma resposta pode ser fiel a fonte revogada e ainda errar a pergunta atual. Outra recupera fonte pertinente, mas não segue seu conteúdo. Avalie separadamente recuperação, fidelidade, correção temporal, completude e atendimento ao usuário. Uma tríade de métricas é ferramenta, não certificação universal. Registre também casos em que a evidência é insuficiente e o sistema deve abster-se.",
    "checkpointIds": [
      "rt-6-7-5",
      "rt-6-7-6"
    ]
  },
  {
    "id": "sub-6-7-bloco-5",
    "titulo": "Vieses Algorítmicos, Ética e Governança no Setor Público",
    "objetivos": [
      "Distinguir tipos de viés e responsabilidades."
    ],
    "conteudo": "A governança responsável de IA na administração pública exige a compreensão crítica dos tipos de vieses:\n\n* **1. Viés de Dados (Data Bias / Amostragem Histórica):**\n  * Decorre de distorções históricas presentes nos dados documentais do passado. Por exemplo, treinar um modelo de indexação com acervos bibliográficos do século XIX pode perpetuar terminologias preconceituosas ou categorias obsoletas se não houver mediação curatorial.\n* **2. Viés de Algoritmo (Algorithmic Bias):**\n  * Surge quando a função de otimização matemática do modelo prioriza padrões predominantes da maioria, marginalizando minorias ou outliers legítimos.\n* **3. Viés de automação e confirmação: mecanismos distintos:**\n  * Viés de automação envolve confiar excessivamente em saída automática; confirmação envolve favorecer evidências que sustentam crença prévia. Ambos podem ocorrer na mesma tarefa. Operadores podem confiar nas decisões ou sugestões emitidas pelo sistema automatizado, deixando de exercer o senso crítico e a checagem manual de evidências.\n* **4. Segurança e LGPD em Prompts de IA:**\n  * Antes de enviar dados a terceiros, identifique classificação, finalidade, base legal, necessidade, condições contratuais, retenção e segurança. Não se presume autorização por a API estar disponível nem ilegalidade automática de todo uso de nuvem. Conteúdo sigiloso e dados sensíveis exigem os controles/regras pertinentes, sem atribuir proibição interna não documentada.\n\n**Aplicação e recuperação:** Em mil documentos, 900 são da classe A. Um sistema que responde sempre A atinge 90% de acurácia e não reconhece nenhum dos cem da classe B. Examine matriz de confusão, precisão/revocação/F1 por classe, erros críticos e dados fora da distribuição. Volume total ou média alta não provam equidade, adequação jurídica ou neutralidade terminológica.",
    "checkpointIds": [
      "rt-6-7-7"
    ]
  }
],
fontesTeoria: [
  {
    "id": "datasheets",
    "titulo": "Gebru et al. — Datasheets for Datasets",
    "localizador": "Motivação, composição, coleta, usos e manutenção do conjunto.",
    "url": "https://arxiv.org/abs/1803.09010"
  },
  {
    "id": "cards",
    "titulo": "Mitchell et al. — Model Cards for Model Reporting",
    "localizador": "Uso pretendido, avaliação desagregada e limitações.",
    "url": "https://arxiv.org/abs/1810.03993"
  },
  {
    "id": "rag",
    "titulo": "Lewis et al. — Retrieval-Augmented Generation",
    "localizador": "Arquitetura e resultados experimentais, sem garantia universal.",
    "url": "https://arxiv.org/abs/2005.11401"
  },
  {
    "id": "cer",
    "titulo": "Hugging Face Evaluate — CER",
    "localizador": "Cálculo, referência e possibilidade de resultado superior a um.",
    "url": "https://huggingface.co/spaces/evaluate-metric/cer/blob/main/README.md"
  },
  {
    "id": "lgpd",
    "titulo": "Lei 13.709/2018 — LGPD",
    "localizador": "Finalidade, necessidade e condições do tratamento público.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
  }
],
};
