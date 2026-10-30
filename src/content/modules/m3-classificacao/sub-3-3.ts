import type { ModuloFilho } from '../../../domain/types';

export const submodulo33: ModuloFilho = {
  id: 'sub-3-3',
  numero: '3.3',
  editalRef: 'Bloco D - Item 3.4',
  preRequisitos: ["sub-3-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-3-2",
          "titulo": "Classificação Decimal Universal (CDU)",
          "motivo": "Classificação de acervos jurídicos especializados."
      },
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML Brasil",
          "motivo": "Organização temática da biblioteca jurídica parlamentar."
      }
  ],
  titulo: 'Análise Documentária e Processo de Indexação',
  antesDeLer: [
  {
    "termo": "Análise e tradução",
    "definicao": "Identificar assuntos e escolher formas de representação são operações distintas.",
    "exemploBiblioteca": "Trocar variante por descritor vem depois de reconhecer o conceito pertinente."
  },
  {
    "termo": "Precisão e revocação",
    "definicao": "Medidas usam denominadores diferentes e exigem universo/relevância definidos.",
    "exemploBiblioteca": "Melhorar ambas é possível; não há proporcionalidade inversa necessária."
  }
],
  descricaoCurta: "Aplicar leitura orientada sem proibir aprofundamento. Separar análise conceitual e tradução. Distinguir extração/atribuição e pré/pós-coordenação. Reconhecer funções dos sistemas históricos sem confundi-los. Calcular e interpretar concordância, precisão e revocação. Julgar tendências sem convertê-las em leis universais.",
  tempoEstimadoMinutos: 22,
  autoresChave: [
  "F. W. Lancaster — Indexação e resumos: teoria e prática",
  "ISO 5963 e ABNT NBR 12676"
],
  alertasCebraspe: [
  "A profundidade é decisão contextual. Exaustividade não significa registrar todo detalhe sem relevância.",
  "Ambas podem melhorar; não há relação matemática universal de produto constante.",
  "Concordância é consistência, não certificação de exatidão ou utilidade."
],
  teoriaDensaMarkdown: "### A Teoria da Análise Documentária: Da Leitura à Síntese Conceitual\n\nA análise documentária é uma operação cognitiva e semiótica que visa transformar documentos primários em representações secundárias condensadas para viabilizar sua guarda, busca e disseminação (Kobashi & Cintra, 2003; Chaumier, 1988).\n\n#### A. A Leitura Documentária Técnica\nDiferentemente da leitura literária ou recreativa, a leitura documentária é uma **leitura estratégica, seletiva e orientada por objetivos**:\n* A leitura pode ser seletiva e estratégica, mas o profissional deve aprofundar as partes necessárias; não é proibição de leitura integral quando o conteúdo e o risco exigirem.\n* O indexador examina estrategicamente a **superestrutura textual**:\n  1. Título e subtítulo da obra;\n  2. Resumo (*abstract*) e palavras-chave do autor;\n  3. Introdução e delimitação do problema;\n  4. Conclusões e considerações finais;\n  5. Tópicos frasais e organização argumentativa, sem presumir que sempre estejam na primeira frase;\n  6. Sumário, títulos de capítulos, tabelas e gráficos.\n* A partir dessa exploração estrutural, o indexador extrai a **macroestrutura semântica** (os núcleos temáticos fundamentais do texto).\n\n**Aplicação e recuperação:** Título fala de “redes”, mas o artigo pode tratar redes sociais ou redes de computadores. Resumo e estrutura delimitam o conceito. A análise não é selecionar mecanicamente a palavra mais frequente; deve representar conteúdo útil à comunidade, sem inventar aplicações não sustentadas pelo texto.\n\n### O Processo Canônico de Indexação: Lancaster (1993) e a Norma ISO 5963\n\nNa obra seminal *Indexação e Resumos: Teoria e Prática* (disponível no acervo em `Classificação e indexação/livro-indexac3a7c3a3o-e-resumos-teoria-e-prc3a1tica-lancaster.pdf`), o professor **F. W. Lancaster** formalizou as etapas do ato de indexar:\n\n#### A. As Duas Etapas Canônicas de Lancaster\n1. **Etapa 1: Análise Conceitual (*Subject Analysis*):**\n   * Exame crítico do documento para determinar de forma criteriosa e contextualizada **\"do que trata\"** o conteúdo.\n   * Identificação dos conceitos que representam tanto o núcleo temático principal quanto os tópicos secundários que atendem ao perfil de interesse dos usuários da instituição.\n   * Realiza-se em **linguagem natural** (o indexador formula os conceitos livremente, sem se preocupar nesta fase com as palavras exatas autorizadas pelo sistema).\n2. **Etapa 2: Tradução (*Translation*):**\n   * Conversão dos conceitos formulados em linguagem natural para os termos autorizados de uma **linguagem documentária** (vocabulário controlado, tesauro, lista de cabeçalhos de assunto ou notação de classificação).\n   * O vocabulário controlado disciplina homônimos, controla representações de sinonímia e orienta o indexador por meio de remissivas (*USE/UP*, *TG/TE*, *TR*).\n\n#### B. Os Três Passos Operacionais da Norma ISO 5963 (1985)\nA norma internacional **ISO 5963** (*Documentation — Methods for examining documents, determining their subjects, and selecting indexing terms* / ABNT NBR 12676) desdobra esse fluxo em três passos:\n1. *Exame do documento:* Leitura técnica preliminar da estrutura formal do texto;\n2. *Identificação dos conceitos:* Isolamento dos tópicos essenciais que respondem às perguntas: *\"Qual o tema principal?\"*, *\"Qual o objeto estudado?\"*, *\"Qual o método empregado?\"*, *\"Qual a localização espacial e temporal?\"*;\n3. *Tradução dos conceitos:* Mapeamento e correspondência dos conceitos aos descritores da linguagem de indexação adotada.\n\n**Aplicação e recuperação:** O texto usa expressão não preferida e o tesauro indica descritor. Reconhecer o tema é análise; escolher a forma do vocabulário é tradução. São etapas intelectualmente distinguíveis, embora o trabalho possa voltar de uma à outra. Não se afirma neutralidade absoluta do indexador só porque usa linguagem controlada.\n\n### Modalidades Estruturais de Indexação\n\nA literatura e a banca Cebraspe classificam os métodos de indexação em diversos eixos taxonômicos:\n\n#### A. Pelo Modo de Obtenção dos Termos\n* **Indexação por Extração (Derivada):** Os termos de indexação são retirados **literalmente** do próprio texto original do documento (ex.: termos extraídos por software de processamento de linguagem natural ou palavras-chave indicadas pelo autor).\n* **Indexação por Atribuição:** Os termos são atribuídos a partir de um instrumento de controle terminológico externo (tesauro, tabela de classificação), mesmo que tais vocábulos não figurem textualmente no documento original.\n\n#### B. Pelo Momento da Combinação dos Conceitos\n* **Indexação Pré-Coordenada:** A combinação entre o termo principal e suas subdivisões temáticas, geográficas ou formais é construída pelo indexador **no momento do processamento técnico**, antes da consulta do usuário.\n  * *Exemplo Canônico:* Cabeçalhos de assunto de catálogo em fichas ou do vocabulário da Library of Congress (LCSH):  \n    `DIREITO CONSTITUCIONAL -- BRASIL -- JURISPRUDÊNCIA`\n* **Indexação Pós-Coordenada:** Os termos são atribuídos de forma atômica e independente no cadastro bibliográfico. A coordenação (junção) é realizada **pelo usuário no momento da busca**, por meio da álgebra de Boole (operadores AND, OR, NOT).\n  * *Exemplo Canônico:* O usuário digita no sistema: `\"Direito Constitucional\" AND \"Brasil\" AND \"Jurisprudência\"`. Sistemas podem combinar pontos pré-coordenados e busca pós-coordenada; não se generaliza uma única arquitetura a todos os OPACs.\n\n#### C. Pela Profundidade de Cobertura\n* **Sumarização (*Summarization*):** O indexador restringe-se a capturar e representar apenas o tema dominante do documento como um todo. É o padrão utilizado na catalogação de livros em estantes de bibliotecas universitárias e públicas.\n* **Indexação em Profundidade (*Depth Indexing*):** O indexador mapeia detalhadamente subtópicos, capítulos individuais, tabelas estatísticas, metodologias e conclusões parcelares. O grau de profundidade depende da política, necessidades e recursos; não é obrigação universal de toda biblioteca jurídica.\n\n**Aplicação e recuperação:** “Direito constitucional — Brasil” pode estar preestabelecido no registro; o sistema também pode permitir combiná-lo com período na consulta. Não há incompatibilidade em oferecer ambos. Atribuição usa instrumento externo; extração usa termos do recurso, com operações de normalização conforme o método.\n\n### Sistemas Históricos Notáveis de Indexação\n\nO Cebraspe costuma incluir itens conceituais sobre sistemas clássicos desenvolvidos ao longo do século XX:\n1. **UNITERMO (Mortimer Taube, 1951):** O marco inaugural da indexação pós-coordenada. Cada ficha representava uma palavra única (*uniterm*), dividida em 10 colunas decimais onde se registravam os números dos documentos que continham aquele termo. A busca comparava os números de documentos nas fichas dos termos. Não se deve confundir automaticamente esse procedimento com sobreposição física de cartões perfurados de outro sistema.\n2. **KWIC (*Key Word in Context*) e KWOC (*Key Word Out of Context*):** Relacionados ao desenvolvimento de índices por palavras do título, com KWIC associado ao trabalho de H. P. Luhn; não se atribui sem distinção a mesma autoria/data a toda variante. Sistemas de permutação automática em que as palavras significativas dos títulos dos documentos são alinhadas alfabeticamente no centro da linha (KWIC) ou destacadas à margem esquerda como cabeçalho (KWOC).\n3. **SLIC (*Selective Listing in Combination*, J. R. Sharp, 1965):** Método combinatório que gera entradas de indexação pré-coordenadas em ordem alfabética estrita, combinando cada termo apenas com seus subsequentes, eliminando combinações redundantes e contendo a explosão exponencial de fichas.\n4. **PRECIS (*Preserved Context Indexing System*, Derek Austin, 1974):** Sistema sintático desenvolvido para a *British National Bibliography*. Utilizava operadores de função (*role operators*) para preservar a estrutura semântica das orações em cadeias rotativas no índice impresso.\n\n**Aplicação e recuperação:** KWIC conserva contexto visual em torno da palavra; KWOC destaca palavra fora do contexto. Isso não garante análise semântica profunda. PRECIS busca preservar papéis/contexto na formação das entradas. Compare a operação feita pelo sistema, sem presumir que todo índice automático usa IA ou vocabulário controlado.\n\n### Coerência de Indexação e Métricas de Recuperação\n\n#### A. A Coerência da Indexação\nA coerência avalia a repetibilidade e estabilidade das decisões de indexação na unidade de informação:\n* **Coerência Interindexadores:** O grau de concordância entre dois ou mais indexadores diferentes ao atribuírem termos ao mesmo documento.\n* **Coerência Intraindexador:** O grau de concordância do mesmo indexador consigo mesmo ao indexar o mesmo documento em dois momentos temporais distintos.\n* *Exemplo de medida de concordância por interseção/união (índice de Jaccard):*\n  $\\text{Consistência} = \\frac{C}{A + B - C}$\n  Onde $A$ é o número de termos do indexador 1, $B$ é o número de termos do indexador 2, e $C$ é o número de termos em comum atribuídos por ambos.\n\n#### B. As Métricas dos Testes de Cranfield (Cleverdon, 1960)\n* **Revocação (*Recall*):**\n  $\\text{Revocação} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes no Acervo}}$\n* **Precisão (*Precision*):**\n  $\\text{Precisão} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Itens Recuperados na Busca}}$\n\nPode existir **tensão entre precisão e revocação**, mas não uma lei de proporcionalidade inversa. Os valores dependem de relevância, política, vocabulário, consulta e algoritmo. Aumentar cobertura de conceitos pode ampliar oportunidades de recuperação; especificidade pode reduzir resultados alheios à necessidade, desde que vocabulário e busca sejam adequados. Nenhuma dessas relações garante um resultado em qualquer consulta.\n\n**Exemplo calculado:** de 25 documentos julgados relevantes, a busca recupera 20, dos quais 10 relevantes: precisão = 10/20 = 50%; revocação = 10/25 = 40%. Outra busca recupera 20, dos quais 15 relevantes: precisão = 75% e revocação = 60%. As duas melhoraram, refutando a proporcionalidade inversa necessária. Denominador zero exige convenção explícita; não se aplica a divisão automaticamente.\n\n**Aplicação e recuperação:** Indexador A atribui cinco termos, B sete e há três comuns. Pela fórmula apresentada: 3/(5+7−3) = 1/3. Concordância elevada não prova que ambos estão corretos: podem concordar num erro. Para precisão/revocação, declare conjunto e critério de relevância; sem saber todos os relevantes, a revocação não é diretamente observável pela lista de resultados.\n\n### Contrastes autorais sobre indexação\n\n| Tema de Prova | Assertiva autoral em análise | Análise conceitual |\n| :--- | :--- | :--- |\n| **Etapas de Lancaster** | *\"No processo de indexação, a tradução dos termos para a linguagem documentária precede a análise conceitual do documento.\"* | **ERRADO.** A **análise conceitual** (identificação do assunto) é a primeira etapa inegociável; a **tradução** é a segunda. |\n| **Exaustividade vs Precisão** | *\"Uma política de indexação que priorize a alta exaustividade tem como consequência direta o aumento da precisão das pesquisas no catálogo.\"* | **ERRADO.** Exaustividade pode ampliar a cobertura e afetar revocação, mas não garante elevação da precisão nem impõe sua queda em toda consulta. A avaliação precisa medir os resultados. |\n| **Sumarização** | *\"Denomina-se sumarização a indexação exaustiva de todas as tabelas, notas de rodapé e apêndices de um relatório técnico.\"* | **ERRADO.** Essa é a **indexação em profundidade**. A **sumarização** limita-se a cobrir o tema central do documento como uma unidade total. |\n| **Pós-Coordenação** | *\"Nos sistemas pós-coordenados, a associação lógica entre os conceitos é realizada compulsoriamente pelo catalogador no momento da indexação.\"* | **ERRADO.** Nos sistemas pós-coordenados, a combinação é realizada **pelo usuário no momento da busca** via operadores booleanos. |\n\n**Aplicação e recuperação:** Uma consulta acrescenta variantes corretas e remove um termo ambíguo. Pode recuperar mais relevantes e menos irrelevantes ao mesmo tempo. A frase “sempre que revocação sobe, precisão cai” é refutada por um único contraexemplo válido. Distinguir possibilidade, tendência e necessidade é parte central do julgamento.",
  teoriaDidaticaMarkdown: "### Revisão: representar para uma necessidade\n\nLeia o suficiente para compreender e delimitar conteúdo. Lancaster distingue análise e tradução; o documento do acervo é a edição brasileira de 2004, não a de 1993. Extração/atribuição, pré/pós-coordenação e profundidade são eixos distintos. Concordância não prova correção. Precisão = relevantes recuperados/total recuperado; revocação = relevantes recuperados/total relevante no universo. Não há proporcionalidade inversa necessária. Exaustividade e especificidade dependem de política e consultas; não se convertem em garantias universais de desempenho.\n",
  checkpoints: [
  {
    "id": "cp-3-3-1",
    "pergunta": "Micro-Checkpoint 1: As Etapas do Processo de Indexação de Lancaster",
    "item": "Segundo F. W. Lancaster, o processo de indexação desdobra-se tradicionalmente em duas etapas consecutivas: a análise conceitual, que identifica do que trata o documento em linguagem natural, e a tradução, que converte esses conceitos em termos de uma linguagem documentária.",
    "gabarito": "C",
    "justificativa": "A distinção entre identificar assuntos e escolher termos de representação está no capítulo 2. As etapas podem interagir na prática; não se trata de alegação de frequência universal de prova.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas."
  },
  {
    "id": "cp-3-3-2",
    "pergunta": "Micro-Checkpoint 2: Exaustividade e Revocação",
    "item": "No processo de indexação, a exaustividade refere-se à quantidade de temas e conceitos indexados no documento, e sua elevação tende a aumentar a taxa de revocação do sistema de recuperação da informação.",
    "gabarito": "C",
    "justificativa": "A formulação usa tende, não garante. Mais conceitos relevantes indexados podem ampliar oportunidades de recuperação, mas a medida depende da consulta e do universo de relevância.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas."
  },
  {
    "id": "cp-3-3-3",
    "pergunta": "Micro-Checkpoint 3: Relação Inversa entre Revocação e Precisão",
    "item": "A especificidade dos termos determina, por lei matemática de proporcionalidade inversa, que qualquer aumento de precisão reduza necessariamente a revocação do sistema.",
    "gabarito": "E",
    "justificativa": "Não há essa lei. Melhorias de vocabulário e consulta podem aumentar ambas; a aula apresenta um contraexemplo numérico.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "versao_correta": "Precisão e revocação podem apresentar tensão, mas não são necessariamente inversamente proporcionais."
  },
  {
    "id": "rt-3-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Análise conceitual e tradução são intelectualmente distinguíveis, ainda que o trabalho real possa ter retornos entre elas.",
    "gabarito": "C",
    "justificativa": "Lancaster diferencia identificar matéria e escolher rótulos. Não é uma linha de produção mental sem qualquer revisão.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "editalRef": "Bloco D - Item 3.4",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-3-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma biblioteca jurídica deve indexar obrigatoriamente toda nota e tabela de qualquer documento, independentemente da política e necessidade.",
    "gabarito": "E",
    "justificativa": "A profundidade é decisão contextual. Exaustividade não significa registrar todo detalhe sem relevância.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "editalRef": "Bloco D - Item 3.4",
    "habilidade": "aplicar",
    "versao_correta": "A profundidade deve seguir política e necessidades, com análise de relevância."
  },
  {
    "id": "rt-3-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma busca recuperou 20 itens, dos quais 10 relevantes, num conjunto que tem 25 relevantes: precisão de 50% e revocação de 40%.",
    "gabarito": "C",
    "justificativa": "Precisão divide relevantes recuperados pelo total recuperado; revocação divide pelos relevantes existentes no universo avaliado.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "editalRef": "Bloco D - Item 3.4",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-3-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Precisão e revocação são necessariamente inversamente proporcionais em qualquer melhoria de sistema.",
    "gabarito": "E",
    "justificativa": "Ambas podem melhorar; não há relação matemática universal de produto constante.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "editalRef": "Bloco D - Item 3.4",
    "habilidade": "aplicar",
    "versao_correta": "Pode existir tensão entre as medidas, mas ambas podem melhorar conforme a mudança."
  },
  {
    "id": "rt-3-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Dois indexadores que concordam em todos os termos necessariamente representam corretamente o documento.",
    "gabarito": "E",
    "justificativa": "Concordância é consistência, não certificação de exatidão ou utilidade.",
    "fonte": "F. W. Lancaster, Indexação e resumos: teoria e prática, 2ª ed. brasileira (2004), cap. 2 (trechos do acervo conferidos por OCR); ISO 5963/NBR 12676, processo de análise; exemplos autorais de métricas.",
    "editalRef": "Bloco D - Item 3.4",
    "habilidade": "aplicar",
    "versao_correta": "Concordância precisa ser distinguida de qualidade conceitual e utilidade."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-3-3-fonte-lancaster",
      "nome": "F. W. Lancaster — Indexação e resumos: teoria e prática",
      "ano": "Referência de consulta",
      "obraPrincipal": "F. W. Lancaster — Indexação e resumos: teoria e prática",
      "ideiaChave": "2ª edição brasileira, 2004, baseada na edição original de 2003; capítulo 2: análise, tradução e orientação à comunidade. Trechos do PDF escaneado do acervo conferidos por OCR, não leitura integral do livro.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-3-fonte-norma",
      "nome": "ISO 5963 e ABNT NBR 12676",
      "ano": "Referência de consulta",
      "obraPrincipal": "ISO 5963 e ABNT NBR 12676",
      "ideiaChave": "Métodos de exame de documentos, determinação dos assuntos e seleção de termos; distinguir os passos operacionais da síntese em duas etapas.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-3-3-3",
      "afirmacao": "Uma busca recuperou 20 itens, dos quais 10 relevantes, num conjunto que tem 25 relevantes: precisão de 50% e revocação de 40%.",
      "gabarito": "C",
      "porQue": "Precisão divide relevantes recuperados pelo total recuperado; revocação divide pelos relevantes existentes no universo avaliado."
    },
    {
      "id": "memoria-rt-3-3-4",
      "afirmacao": "Precisão e revocação são necessariamente inversamente proporcionais em qualquer melhoria de sistema.",
      "gabarito": "E",
      "porQue": "Ambas podem melhorar; não há relação matemática universal de produto constante."
    },
    {
      "id": "memoria-rt-3-3-5",
      "afirmacao": "Dois indexadores que concordam em todos os termos necessariamente representam corretamente o documento.",
      "gabarito": "E",
      "porQue": "Concordância é consistência, não certificação de exatidão ou utilidade."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-3-3-bloco-1",
    "titulo": "A Teoria da Análise Documentária: Da Leitura à Síntese Conceitual",
    "objetivos": [
      "Aplicar leitura orientada sem proibir aprofundamento."
    ],
    "conteudo": "A análise documentária é uma operação cognitiva e semiótica que visa transformar documentos primários em representações secundárias condensadas para viabilizar sua guarda, busca e disseminação (Kobashi & Cintra, 2003; Chaumier, 1988).\n\n#### A. A Leitura Documentária Técnica\nDiferentemente da leitura literária ou recreativa, a leitura documentária é uma **leitura estratégica, seletiva e orientada por objetivos**:\n* A leitura pode ser seletiva e estratégica, mas o profissional deve aprofundar as partes necessárias; não é proibição de leitura integral quando o conteúdo e o risco exigirem.\n* O indexador examina estrategicamente a **superestrutura textual**:\n  1. Título e subtítulo da obra;\n  2. Resumo (*abstract*) e palavras-chave do autor;\n  3. Introdução e delimitação do problema;\n  4. Conclusões e considerações finais;\n  5. Tópicos frasais e organização argumentativa, sem presumir que sempre estejam na primeira frase;\n  6. Sumário, títulos de capítulos, tabelas e gráficos.\n* A partir dessa exploração estrutural, o indexador extrai a **macroestrutura semântica** (os núcleos temáticos fundamentais do texto).\n\n**Aplicação e recuperação:** Título fala de “redes”, mas o artigo pode tratar redes sociais ou redes de computadores. Resumo e estrutura delimitam o conceito. A análise não é selecionar mecanicamente a palavra mais frequente; deve representar conteúdo útil à comunidade, sem inventar aplicações não sustentadas pelo texto.",
    "checkpointIds": []
  },
  {
    "id": "sub-3-3-bloco-2",
    "titulo": "O Processo Canônico de Indexação: Lancaster (1993) e a Norma ISO 5963",
    "objetivos": [
      "Separar análise conceitual e tradução."
    ],
    "conteudo": "Na obra seminal *Indexação e Resumos: Teoria e Prática* (disponível no acervo em `Classificação e indexação/livro-indexac3a7c3a3o-e-resumos-teoria-e-prc3a1tica-lancaster.pdf`), o professor **F. W. Lancaster** formalizou as etapas do ato de indexar:\n\n#### A. As Duas Etapas Canônicas de Lancaster\n1. **Etapa 1: Análise Conceitual (*Subject Analysis*):**\n   * Exame crítico do documento para determinar de forma criteriosa e contextualizada **\"do que trata\"** o conteúdo.\n   * Identificação dos conceitos que representam tanto o núcleo temático principal quanto os tópicos secundários que atendem ao perfil de interesse dos usuários da instituição.\n   * Realiza-se em **linguagem natural** (o indexador formula os conceitos livremente, sem se preocupar nesta fase com as palavras exatas autorizadas pelo sistema).\n2. **Etapa 2: Tradução (*Translation*):**\n   * Conversão dos conceitos formulados em linguagem natural para os termos autorizados de uma **linguagem documentária** (vocabulário controlado, tesauro, lista de cabeçalhos de assunto ou notação de classificação).\n   * O vocabulário controlado disciplina homônimos, controla representações de sinonímia e orienta o indexador por meio de remissivas (*USE/UP*, *TG/TE*, *TR*).\n\n#### B. Os Três Passos Operacionais da Norma ISO 5963 (1985)\nA norma internacional **ISO 5963** (*Documentation — Methods for examining documents, determining their subjects, and selecting indexing terms* / ABNT NBR 12676) desdobra esse fluxo em três passos:\n1. *Exame do documento:* Leitura técnica preliminar da estrutura formal do texto;\n2. *Identificação dos conceitos:* Isolamento dos tópicos essenciais que respondem às perguntas: *\"Qual o tema principal?\"*, *\"Qual o objeto estudado?\"*, *\"Qual o método empregado?\"*, *\"Qual a localização espacial e temporal?\"*;\n3. *Tradução dos conceitos:* Mapeamento e correspondência dos conceitos aos descritores da linguagem de indexação adotada.\n\n**Aplicação e recuperação:** O texto usa expressão não preferida e o tesauro indica descritor. Reconhecer o tema é análise; escolher a forma do vocabulário é tradução. São etapas intelectualmente distinguíveis, embora o trabalho possa voltar de uma à outra. Não se afirma neutralidade absoluta do indexador só porque usa linguagem controlada.",
    "checkpointIds": [
      "cp-3-3-1",
      "rt-3-3-1"
    ]
  },
  {
    "id": "sub-3-3-bloco-3",
    "titulo": "Modalidades Estruturais de Indexação",
    "objetivos": [
      "Distinguir extração/atribuição e pré/pós-coordenação."
    ],
    "conteudo": "A literatura e a banca Cebraspe classificam os métodos de indexação em diversos eixos taxonômicos:\n\n#### A. Pelo Modo de Obtenção dos Termos\n* **Indexação por Extração (Derivada):** Os termos de indexação são retirados **literalmente** do próprio texto original do documento (ex.: termos extraídos por software de processamento de linguagem natural ou palavras-chave indicadas pelo autor).\n* **Indexação por Atribuição:** Os termos são atribuídos a partir de um instrumento de controle terminológico externo (tesauro, tabela de classificação), mesmo que tais vocábulos não figurem textualmente no documento original.\n\n#### B. Pelo Momento da Combinação dos Conceitos\n* **Indexação Pré-Coordenada:** A combinação entre o termo principal e suas subdivisões temáticas, geográficas ou formais é construída pelo indexador **no momento do processamento técnico**, antes da consulta do usuário.\n  * *Exemplo Canônico:* Cabeçalhos de assunto de catálogo em fichas ou do vocabulário da Library of Congress (LCSH):  \n    `DIREITO CONSTITUCIONAL -- BRASIL -- JURISPRUDÊNCIA`\n* **Indexação Pós-Coordenada:** Os termos são atribuídos de forma atômica e independente no cadastro bibliográfico. A coordenação (junção) é realizada **pelo usuário no momento da busca**, por meio da álgebra de Boole (operadores AND, OR, NOT).\n  * *Exemplo Canônico:* O usuário digita no sistema: `\"Direito Constitucional\" AND \"Brasil\" AND \"Jurisprudência\"`. Sistemas podem combinar pontos pré-coordenados e busca pós-coordenada; não se generaliza uma única arquitetura a todos os OPACs.\n\n#### C. Pela Profundidade de Cobertura\n* **Sumarização (*Summarization*):** O indexador restringe-se a capturar e representar apenas o tema dominante do documento como um todo. É o padrão utilizado na catalogação de livros em estantes de bibliotecas universitárias e públicas.\n* **Indexação em Profundidade (*Depth Indexing*):** O indexador mapeia detalhadamente subtópicos, capítulos individuais, tabelas estatísticas, metodologias e conclusões parcelares. O grau de profundidade depende da política, necessidades e recursos; não é obrigação universal de toda biblioteca jurídica.\n\n**Aplicação e recuperação:** “Direito constitucional — Brasil” pode estar preestabelecido no registro; o sistema também pode permitir combiná-lo com período na consulta. Não há incompatibilidade em oferecer ambos. Atribuição usa instrumento externo; extração usa termos do recurso, com operações de normalização conforme o método.",
    "checkpointIds": [
      "rt-3-3-2"
    ]
  },
  {
    "id": "sub-3-3-bloco-4",
    "titulo": "Sistemas Históricos Notáveis de Indexação",
    "objetivos": [
      "Reconhecer funções dos sistemas históricos sem confundi-los."
    ],
    "conteudo": "O Cebraspe costuma incluir itens conceituais sobre sistemas clássicos desenvolvidos ao longo do século XX:\n1. **UNITERMO (Mortimer Taube, 1951):** O marco inaugural da indexação pós-coordenada. Cada ficha representava uma palavra única (*uniterm*), dividida em 10 colunas decimais onde se registravam os números dos documentos que continham aquele termo. A busca comparava os números de documentos nas fichas dos termos. Não se deve confundir automaticamente esse procedimento com sobreposição física de cartões perfurados de outro sistema.\n2. **KWIC (*Key Word in Context*) e KWOC (*Key Word Out of Context*):** Relacionados ao desenvolvimento de índices por palavras do título, com KWIC associado ao trabalho de H. P. Luhn; não se atribui sem distinção a mesma autoria/data a toda variante. Sistemas de permutação automática em que as palavras significativas dos títulos dos documentos são alinhadas alfabeticamente no centro da linha (KWIC) ou destacadas à margem esquerda como cabeçalho (KWOC).\n3. **SLIC (*Selective Listing in Combination*, J. R. Sharp, 1965):** Método combinatório que gera entradas de indexação pré-coordenadas em ordem alfabética estrita, combinando cada termo apenas com seus subsequentes, eliminando combinações redundantes e contendo a explosão exponencial de fichas.\n4. **PRECIS (*Preserved Context Indexing System*, Derek Austin, 1974):** Sistema sintático desenvolvido para a *British National Bibliography*. Utilizava operadores de função (*role operators*) para preservar a estrutura semântica das orações em cadeias rotativas no índice impresso.\n\n**Aplicação e recuperação:** KWIC conserva contexto visual em torno da palavra; KWOC destaca palavra fora do contexto. Isso não garante análise semântica profunda. PRECIS busca preservar papéis/contexto na formação das entradas. Compare a operação feita pelo sistema, sem presumir que todo índice automático usa IA ou vocabulário controlado.",
    "checkpointIds": []
  },
  {
    "id": "sub-3-3-bloco-5",
    "titulo": "Coerência de Indexação e Métricas de Recuperação",
    "objetivos": [
      "Calcular e interpretar concordância, precisão e revocação."
    ],
    "conteudo": "#### A. A Coerência da Indexação\nA coerência avalia a repetibilidade e estabilidade das decisões de indexação na unidade de informação:\n* **Coerência Interindexadores:** O grau de concordância entre dois ou mais indexadores diferentes ao atribuírem termos ao mesmo documento.\n* **Coerência Intraindexador:** O grau de concordância do mesmo indexador consigo mesmo ao indexar o mesmo documento em dois momentos temporais distintos.\n* *Exemplo de medida de concordância por interseção/união (índice de Jaccard):*\n  $\\text{Consistência} = \\frac{C}{A + B - C}$\n  Onde $A$ é o número de termos do indexador 1, $B$ é o número de termos do indexador 2, e $C$ é o número de termos em comum atribuídos por ambos.\n\n#### B. As Métricas dos Testes de Cranfield (Cleverdon, 1960)\n* **Revocação (*Recall*):**\n  $\\text{Revocação} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes no Acervo}}$\n* **Precisão (*Precision*):**\n  $\\text{Precisão} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Itens Recuperados na Busca}}$\n\nPode existir **tensão entre precisão e revocação**, mas não uma lei de proporcionalidade inversa. Os valores dependem de relevância, política, vocabulário, consulta e algoritmo. Aumentar cobertura de conceitos pode ampliar oportunidades de recuperação; especificidade pode reduzir resultados alheios à necessidade, desde que vocabulário e busca sejam adequados. Nenhuma dessas relações garante um resultado em qualquer consulta.\n\n**Exemplo calculado:** de 25 documentos julgados relevantes, a busca recupera 20, dos quais 10 relevantes: precisão = 10/20 = 50%; revocação = 10/25 = 40%. Outra busca recupera 20, dos quais 15 relevantes: precisão = 75% e revocação = 60%. As duas melhoraram, refutando a proporcionalidade inversa necessária. Denominador zero exige convenção explícita; não se aplica a divisão automaticamente.\n\n**Aplicação e recuperação:** Indexador A atribui cinco termos, B sete e há três comuns. Pela fórmula apresentada: 3/(5+7−3) = 1/3. Concordância elevada não prova que ambos estão corretos: podem concordar num erro. Para precisão/revocação, declare conjunto e critério de relevância; sem saber todos os relevantes, a revocação não é diretamente observável pela lista de resultados.",
    "checkpointIds": [
      "cp-3-3-2",
      "cp-3-3-3",
      "rt-3-3-3",
      "rt-3-3-4",
      "rt-3-3-5"
    ]
  },
  {
    "id": "sub-3-3-bloco-6",
    "titulo": "Contrastes autorais sobre indexação",
    "objetivos": [
      "Julgar tendências sem convertê-las em leis universais."
    ],
    "conteudo": "| Tema de Prova | Assertiva autoral em análise | Análise conceitual |\n| :--- | :--- | :--- |\n| **Etapas de Lancaster** | *\"No processo de indexação, a tradução dos termos para a linguagem documentária precede a análise conceitual do documento.\"* | **ERRADO.** A **análise conceitual** (identificação do assunto) é a primeira etapa inegociável; a **tradução** é a segunda. |\n| **Exaustividade vs Precisão** | *\"Uma política de indexação que priorize a alta exaustividade tem como consequência direta o aumento da precisão das pesquisas no catálogo.\"* | **ERRADO.** Exaustividade pode ampliar a cobertura e afetar revocação, mas não garante elevação da precisão nem impõe sua queda em toda consulta. A avaliação precisa medir os resultados. |\n| **Sumarização** | *\"Denomina-se sumarização a indexação exaustiva de todas as tabelas, notas de rodapé e apêndices de um relatório técnico.\"* | **ERRADO.** Essa é a **indexação em profundidade**. A **sumarização** limita-se a cobrir o tema central do documento como uma unidade total. |\n| **Pós-Coordenação** | *\"Nos sistemas pós-coordenados, a associação lógica entre os conceitos é realizada compulsoriamente pelo catalogador no momento da indexação.\"* | **ERRADO.** Nos sistemas pós-coordenados, a combinação é realizada **pelo usuário no momento da busca** via operadores booleanos. |\n\n**Aplicação e recuperação:** Uma consulta acrescenta variantes corretas e remove um termo ambíguo. Pode recuperar mais relevantes e menos irrelevantes ao mesmo tempo. A frase “sempre que revocação sobe, precisão cai” é refutada por um único contraexemplo válido. Distinguir possibilidade, tendência e necessidade é parte central do julgamento.",
    "checkpointIds": []
  }
],
fontesTeoria: [
  {
    "id": "lancaster",
    "titulo": "F. W. Lancaster — Indexação e resumos: teoria e prática",
    "localizador": "2ª edição brasileira, 2004, baseada na edição original de 2003; capítulo 2: análise, tradução e orientação à comunidade. Trechos do PDF escaneado do acervo conferidos por OCR, não leitura integral do livro."
  },
  {
    "id": "norma",
    "titulo": "ISO 5963 e ABNT NBR 12676",
    "localizador": "Métodos de exame de documentos, determinação dos assuntos e seleção de termos; distinguir os passos operacionais da síntese em duas etapas."
  }
],
};
