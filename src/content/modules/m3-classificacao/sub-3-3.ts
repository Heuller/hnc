import type { ModuloFilho } from '../../../domain/types';

export const submodulo33: ModuloFilho = {
  id: 'sub-3-3',
  numero: '3.3',
  titulo: 'Análise Documentária e Processo de Indexação',
  descricaoCurta: 'Teoria da análise documentária (Kobashi e Cintra), as etapas da indexação segundo Lancaster e a ISO 5963, pré-coordenação vs pós-coordenação, sumarização vs indexação em profundidade, coerência de indexação e as métricas de avaliação de recuperação (revocação, precisão, ruído e silêncio).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['F. W. Lancaster', 'Jacques Chaumier', 'Nair Yumiko Kobashi', 'Anna Maria Marques Cintra', 'Cyril Cleverdon', 'Derek Austin', 'Mortimer Taube'],
  alertasCebraspe: [
    'As duas etapas clássicas da indexação segundo F. W. Lancaster: 1ª Análise Conceitual (leitura técnica documentária e identificação do que trata o documento, formulada em linguagem natural) e 2ª Tradução (conversão dos conceitos em termos de uma linguagem documentária controlada). A análise conceitual SEMPRE antecede a tradução!',
    'A norma internacional ISO 5963 (1985) desdobra o processo em três passos operacionais: (1) Exame do documento e estabelecimento do assunto; (2) Identificação dos conceitos presentes; (3) Tradução dos conceitos para a linguagem documentária.',
    'Sumarização vs Indexação em Profundidade: A sumarização identifica apenas o tema central do documento como um todo (típica de catalogação de livros em estantes). A indexação em profundidade (depth indexing) identifica exaustivamente aspectos secundários, tabelas, seções e dados analíticos (típica de bases de periódicos e de jurisprudência).',
    'Exaustividade vs Especificidade: Exaustividade é a AMPLITUDE (quantidade de temas abordados e indexados); Especificidade é a EXATIDÃO e profundidade do termo em relação ao conceito. Quanto maior a exaustividade, maior a REVOCAÇÃO; quanto maior a especificidade, maior a PRECISÃO.',
    'Fórmulas Canônicas das Métricas de Cranfield (Cleverdon): Revocação (Recall) = [Itens Relevantes Recuperados / Total de Relevantes no Acervo]. Precisão (Precision) = [Itens Relevantes Recuperados / Total de Itens Recuperados na Busca]. O Cebraspe inverte os denominadores em itens maliciosos!',
    'Coerência de Indexação: A coerência interindexadores mede a concordância entre indexadores distintos para o mesmo texto; a coerência intraindexador mede a estabilidade do mesmo indexador ao processar o mesmo documento em períodos diferentes. Alta coerência reflete a padronização e eficácia da política de indexação da instituição.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa das Dimensões e Métricas de Recuperação da Informação (RI)',
    colunas: ['Dimensão / Métrica', 'Conceito e Definição Canônica', 'Fator Determinante', 'Efeito no Desempenho da Busca'],
    linhas: [
      ['Exaustividade', 'Número total de conceitos e tópicos atribuídos ao documento', 'Política de indexação da biblioteca e tempo disponível', 'Eleva a Revocação (recupera mais itens, mas com maior risco de ruído)'],
      ['Especificidade', 'Grau de precisão com que o termo reflete o conceito exato do texto', 'Qualidade do vocabulário controlado e rigor terminológico', 'Eleva a Precisão (reduz falsos positivos, mas arrisca silêncio)'],
      ['Revocação (Recall)', 'Capacidade do sistema de resgatar todos os documentos pertinentes existentes', 'Fórmula: [Relevantes Recuperados / Relevantes no Acervo]', 'Aumenta com truncagem, termos genéricos e operador booleano OR'],
      ['Precisão (Precision)', 'Capacidade do sistema de filtrar e trazer apenas documentos pertinentes', 'Fórmula: [Relevantes Recuperados / Total Recuperados na Busca]', 'Aumenta com termos específicos, descritores compostos e operador AND / NOT'],
      ['Ruído Informacional', 'Conjunto de documentos inúteis/irrelevantes trazidos na busca', 'Estratégia muito aberta, sinônimos ambíguos ou termos genéricos', 'Derruba a Precisão da pesquisa'],
      ['Silêncio Informacional', 'Conjunto de documentos relevantes existentes no acervo que não foram resgatados', 'Estratégia excessivamente restritiva ou vocabulário deficiente', 'Derruba a Revocação da pesquisa'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Teoria da Análise Documentária: Da Leitura à Síntese Conceitual

A análise documentária é uma operação cognitiva e semiótica que visa transformar documentos primários em representações secundárias condensadas para viabilizar sua guarda, busca e disseminação (Kobashi & Cintra, 2003; Chaumier, 1988).

#### A. A Leitura Documentária Técnica
Diferentemente da leitura literária ou recreativa, a leitura documentária é uma **leitura estratégica, seletiva e orientada por objetivos**:
* O profissional não lê linearmente todo o texto página por página.
* O indexador examina estrategicamente a **superestrutura textual**:
  1. Título e subtítulo da obra;
  2. Resumo (*abstract*) e palavras-chave do autor;
  3. Introdução e delimitação do problema;
  4. Conclusões e considerações finais;
  5. Tópicos frasais (primeiras frases de parágrafos-chave);
  6. Sumário, títulos de capítulos, tabelas e gráficos.
* A partir dessa exploração estrutural, o indexador extrai a **macroestrutura semântica** (os núcleos temáticos fundamentais do texto).

---

### 2. O Processo Canônico de Indexação: Lancaster (1993) e a Norma ISO 5963

Na obra seminal *Indexação e Resumos: Teoria e Prática* (disponível no acervo em \`Classificação e indexação/livro-indexac3a7c3a3o-e-resumos-teoria-e-prc3a1tica-lancaster.pdf\`), o professor **F. W. Lancaster** formalizou as etapas do ato de indexar:

#### A. As Duas Etapas Canônicas de Lancaster
1. **Etapa 1: Análise Conceitual (*Subject Analysis*):**
   * Exame crítico do documento para determinar de forma neutra e rigorosa **"do que trata"** o conteúdo.
   * Identificação dos conceitos que representam tanto o núcleo temático principal quanto os tópicos secundários que atendem ao perfil de interesse dos usuários da instituição.
   * Realiza-se em **linguagem natural** (o indexador formula os conceitos livremente, sem se preocupar nesta fase com as palavras exatas autorizadas pelo sistema).
2. **Etapa 2: Tradução (*Translation*):**
   * Conversão dos conceitos formulados em linguagem natural para os termos autorizados de uma **linguagem documentária** (vocabulário controlado, tesauro, lista de cabeçalhos de assunto ou notação de classificação).
   * O vocabulário controlado disciplina homônimos, elimina sinonímias e orienta o indexador por meio de remissivas (*USE/UP*, *TG/TE*, *TR*).

#### B. Os Três Passos Operacionais da Norma ISO 5963 (1985)
A norma internacional **ISO 5963** (*Documentation — Methods for examining documents, determining their subjects, and selecting indexing terms* / ABNT NBR 12676) desdobra esse fluxo em três passos:
1. *Exame do documento:* Leitura técnica preliminar da estrutura formal do texto;
2. *Identificação dos conceitos:* Isolamento dos tópicos essenciais que respondem às perguntas: *"Qual o tema principal?"*, *"Qual o objeto estudado?"*, *"Qual o método empregado?"*, *"Qual a localização espacial e temporal?"*;
3. *Tradução dos conceitos:* Mapeamento e correspondência dos conceitos aos descritores da linguagem de indexação adotada.

---

### 3. Modalidades Estruturais de Indexação

A literatura e a banca Cebraspe classificam os métodos de indexação em diversos eixos taxonômicos:

#### A. Pelo Modo de Obtenção dos Termos
* **Indexação por Extração (Derivada):** Os termos de indexação são retirados **literalmente** do próprio texto original do documento (ex.: termos extraídos por software de processamento de linguagem natural ou palavras-chave indicadas pelo autor).
* **Indexação por Atribuição:** Os termos são atribuídos a partir de um instrumento de controle terminológico externo (tesauro, tabela de classificação), mesmo que tais vocábulos não figurem textualmente no documento original.

#### B. Pelo Momento da Combinação dos Conceitos
* **Indexação Pré-Coordenada:** A combinação entre o termo principal e suas subdivisões temáticas, geográficas ou formais é construída pelo indexador **no momento do processamento técnico**, antes da consulta do usuário.
  * *Exemplo Canônico:* Cabeçalhos de assunto de catálogo em fichas ou do vocabulário da Library of Congress (LCSH):  
    \`DIREITO CONSTITUCIONAL -- BRASIL -- JURISPRUDÊNCIA\`
* **Indexação Pós-Coordenada:** Os termos são atribuídos de forma atômica e independente no cadastro bibliográfico. A coordenação (junção) é realizada **pelo usuário no momento da busca**, por meio da álgebra de Boole (operadores AND, OR, NOT).
  * *Exemplo Canônico:* O usuário digita no sistema: \`"Direito Constitucional" AND "Brasil" AND "Jurisprudência"\`. É o modelo hegemônico de todas as bases de dados e OPACs modernos.

#### C. Pela Profundidade de Cobertura
* **Sumarização (*Summarization*):** O indexador restringe-se a capturar e representar apenas o tema dominante do documento como um todo. É o padrão utilizado na catalogação de livros em estantes de bibliotecas universitárias e públicas.
* **Indexação em Profundidade (*Depth Indexing*):** O indexador mapeia detalhadamente subtópicos, capítulos individuais, tabelas estatísticas, metodologias e conclusões parcelares. É o padrão obrigatório em centros de documentação especializados, acervos legislativos e bibliotecas jurídicas (como a Rede RVBI e a BDJur).

---

### 4. Sistemas Históricos Notáveis de Indexação

O Cebraspe costuma incluir itens conceituais sobre sistemas clássicos desenvolvidos ao longo do século XX:
1. **UNITERMO (Mortimer Taube, 1951):** O marco inaugural da indexação pós-coordenada. Cada ficha representava uma palavra única (*uniterm*), dividida em 10 colunas decimais onde se registravam os números dos documentos que continham aquele termo. A busca era feita pela sobreposição manual das fichas para encontrar números idênticos.
2. **KWIC (*Key Word in Context*) e KWOC (*Key Word Out of Context*):** Criados por H. P. Luhn na IBM em 1958. Sistemas de permutação automática em que as palavras significativas dos títulos dos documentos são alinhadas alfabeticamente no centro da linha (KWIC) ou destacadas à margem esquerda como cabeçalho (KWOC).
3. **SLIC (*Selective Listing in Combination*, J. R. Sharp, 1965):** Método combinatório que gera entradas de indexação pré-coordenadas em ordem alfabética estrita, combinando cada termo apenas com seus subsequentes, eliminando combinações redundantes e contendo a explosão exponencial de fichas.
4. **PRECIS (*Preserved Context Indexing System*, Derek Austin, 1974):** Sistema sintático desenvolvido para a *British National Bibliography*. Utilizava operadores de função (*role operators*) para preservar a estrutura semântica das orações em cadeias rotativas no índice impresso.

---

### 5. Coerência de Indexação e Métricas de Recuperação

#### A. A Coerência da Indexação
A coerência avalia a repetibilidade e estabilidade das decisões de indexação na unidade de informação:
* **Coerência Interindexadores:** O grau de concordância entre dois ou mais indexadores diferentes ao atribuírem termos ao mesmo documento.
* **Coerência Intraindexador:** O grau de concordância do mesmo indexador consigo mesmo ao indexar o mesmo documento em dois momentos temporais distintos.
* *Coeficiente de Consistência de Hooper:*
  $$\\text{Consistência} = \\frac{C}{A + B - C}$$
  Onde $A$ é o número de termos do indexador 1, $B$ é o número de termos do indexador 2, e $C$ é o número de termos em comum atribuídos por ambos.

#### B. As Métricas dos Testes de Cranfield (Cleverdon, 1960)
* **Revocação (*Recall*):**
  $$\\text{Revocação} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Relevantes Existentes no Acervo}}$$
* **Precisão (*Precision*):**
  $$\\text{Precisão} = \\frac{\\text{Relevantes Recuperados}}{\\text{Total de Itens Recuperados na Busca}}$$

A relação entre revocação e precisão é fundamentalmente **inversamente proporcional**:
* **Alta Exaustividade -> Alta Revocação -> Risco de Ruído** (recupera-se muito lixo informacional irrelevante).
* **Alta Especificidade -> Alta Precisão -> Risco de Silêncio** (o sistema recupera poucos itens, mas omite documentos relevantes pertinentes que foram indexados sob termos ligeiramente divergentes).

---

### 6. Padrões de Cobrança e Armadilhas do Cebraspe em Provas

| Tema de Prova | Como o Cebraspe Tenta Confundir o Candidato | Fundamentação Técnica Oficial (Gabarito) |
| :--- | :--- | :--- |
| **Etapas de Lancaster** | *"No processo de indexação, a tradução dos termos para a linguagem documentária precede a análise conceitual do documento."* | **ERRADO.** A **análise conceitual** (identificação do assunto) é a primeira etapa inegociável; a **tradução** é a segunda. |
| **Exaustividade vs Precisão** | *"Uma política de indexação que priorize a alta exaustividade tem como consequência direta o aumento da precisão das pesquisas no catálogo."* | **ERRADO.** Alta exaustividade eleva a **revocação** (e diminui a precisão, gerando ruído informacional). Quem eleva a precisão é a **alta especificidade**. |
| **Sumarização** | *"Denomina-se sumarização a indexação exaustiva de todas as tabelas, notas de rodapé e apêndices de um relatório técnico."* | **ERRADO.** Essa é a **indexação em profundidade**. A **sumarização** limita-se a cobrir o tema central do documento como uma unidade total. |
| **Pós-Coordenação** | *"Nos sistemas pós-coordenados, a associação lógica entre os conceitos é realizada compulsoriamente pelo catalogador no momento da indexação."* | **ERRADO.** Nos sistemas pós-coordenados, a combinação é realizada **pelo usuário no momento da busca** via operadores booleanos. |`,
  checkpoints: [
    {
      id: 'cp-3-3-1',
      pergunta: 'Micro-Checkpoint 1: As Etapas do Processo de Indexação de Lancaster',
      item: 'Segundo F. W. Lancaster, o processo de indexação desdobra-se tradicionalmente em duas etapas consecutivas: a análise conceitual, que identifica do que trata o documento em linguagem natural, e a tradução, que converte esses conceitos em termos de uma linguagem documentária.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a formulação clássica de Lancaster (1993), universalmente cobrada pela banca Cebraspe.',
    },
    {
      id: 'cp-3-3-2',
      pergunta: 'Micro-Checkpoint 2: Exaustividade e Revocação',
      item: 'No processo de indexação, a exaustividade refere-se à quantidade de temas e conceitos indexados no documento, e sua elevação tende a aumentar a taxa de revocação do sistema de recuperação da informação.',
      gabarito: 'C',
      justificativa: 'Correto! Quanto maior o número de conceitos indexados (alta exaustividade), maior é a probabilidade de o documento ser encontrado na busca (alta revocação), aumentando concomitantemente o risco de ruído informacional.',
    },
    {
      id: 'cp-3-3-3',
      pergunta: 'Micro-Checkpoint 3: Relação Inversa entre Revocação e Precisão',
      item: 'Conforme a doutrina de F. W. Lancaster e os resultados históricos dos testes de Cranfield, o aumento da especificidade dos termos de indexação tende a elevar a revocação do sistema, reduzindo paralelamente a precisão das buscas.',
      gabarito: 'E',
      justificativa: 'Errado! Alta especificidade eleva a PRECISÃO (elimina falsos positivos) e reduz a revocação. É a alta exaustividade que eleva a revocação à custa da precisão.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-3-1',
        periodo: '1951',
        disciplina: 'Pioneirismo Pós-Coordenado',
        focoPrincipal: 'Mortimer Taube desenvolve o sistema UNITERMO, inaugurando a era da indexação pós-coordenada em fichas manipuláveis.',
        figuraChave: 'Mortimer Taube',
      },
      {
        id: 'tl-3-3-2',
        periodo: '1960 / 1966',
        disciplina: 'Avaliação Experimental de RI',
        focoPrincipal: 'Cyril Cleverdon conduz os históricos Testes de Cranfield no Aslib, formalizando os conceitos de Revocação, Precisão e Ruído.',
        figuraChave: 'Cyril Cleverdon',
      },
      {
        id: 'tl-3-3-3',
        periodo: '1993',
        disciplina: 'Consolidação Teórica da Indexação',
        focoPrincipal: 'F. W. Lancaster publica "Indexação e Resumos: Teoria e Prática", estabelecendo as duas etapas clássicas (análise e tradução).',
        figuraChave: 'F. W. Lancaster',
      },
    ],
    autores: [
      {
        id: 'aut-3-3-1',
        nome: 'F. W. Lancaster',
        ano: 1993,
        obraPrincipal: 'Indexação e Resumos: Teoria e Prática',
        ideiaChave: 'Maior autoridade mundial em avaliação de sistemas de indexação; estruturou as etapas de análise conceitual e tradução.',
        chipPegadinha: 'A análise conceitual ocorre em linguagem natural; a tradução é que utiliza a linguagem documentária.',
      },
      {
        id: 'aut-3-3-2',
        nome: 'Nair Yumiko Kobashi e Anna Maria Cintra',
        ano: 2003,
        obraPrincipal: 'Linguagens documentárias e análise de conteúdo',
        ideiaChave: 'Fundamentação semiótica da leitura documentária como ato cognitivo e comunicativo que reconstrói a macroestrutura do texto.',
        chipPegadinha: 'Leitura documentária não é linear; ela analisa estrategicamente a superestrutura textual.',
      },
      {
        id: 'aut-3-3-3',
        nome: 'Cyril Cleverdon',
        ano: 1966,
        obraPrincipal: 'The Cranfield Tests on Indexing Systems',
        ideiaChave: 'Desenvolveu as métricas matemáticas de Revocação (Recall) e Precisão (Precision), demonstrando sua relação inversamente proporcional.',
        chipPegadinha: 'Alta exaustividade eleva revocação; alta especificidade eleva precisão.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-3-1',
        afirmacao: 'A indexação pré-coordenada caracteriza-se pelo fato de os termos serem combinados exclusivamente pelo usuário durante a pesquisa por meio de operadores booleanos.',
        gabarito: 'E',
        porQue: 'A combinação pelo usuário na busca define a indexação PÓS-COORDENADA. A pré-coordenada constrói a cadeia de termos no momento do processamento técnico.',
      },
      {
        id: 'peg-3-3-2',
        afirmacao: 'O silêncio informacional ocorre quando uma pesquisa recupera uma quantidade massiva de documentos irrelevantes e desnecessários ao pesquisador.',
        gabarito: 'E',
        porQue: 'A recuperação de documentos irrelevantes é denominada RUÍDO. O SILÊNCIO informacional é a não recuperação de documentos pertinentes que existiam no acervo.',
      },
      {
        id: 'peg-3-3-3',
        afirmacao: 'A coerência interindexadores é uma medida que avalia a concordância de um mesmo indexador ao processar o mesmo texto em dois anos consecutivos.',
        gabarito: 'E',
        porQue: 'A concordância do mesmo profissional consigo mesmo em momentos distintos denomina-se coerência INTRAINDEXADOR. A coerência entre profissionais diferentes é INTERINDEXADORES.',
      },
    ],
  },
};
