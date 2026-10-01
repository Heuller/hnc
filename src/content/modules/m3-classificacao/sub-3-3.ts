import type { ModuloFilho } from '../../../domain/types';

export const submodulo33: ModuloFilho = {
  id: 'sub-3-3',
  numero: '3.3',
  titulo: 'Análise Documentária e Processo de Indexação',
  descricaoCurta: 'Teoria da análise documentária (Kobashi, Cintra), as duas etapas canônicas da indexação de Lancaster (análise conceitual e tradução), exaustividade vs. especificidade, coerência e a relação inversamente proporcional entre revocação e precisão.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['F. W. Lancaster', 'Jacques Chaumier', 'Nair Yumiko Kobashi', 'Anna Maria Marques Cintra', 'Rogério Henrique de Araújo Júnior'],
  alertasCebraspe: [
    'As duas etapas clássicas da indexação (Lancaster): 1ª Análise Conceitual (leitura documentária e identificação dos conceitos centrais) e 2ª Tradução (conversão dos conceitos em termos de uma linguagem controlada). A análise conceitual antecede a tradução!',
    'Exaustividade vs. Especificidade: Exaustividade é a amplitude (número de conceitos indexados); Especificidade é a exatidão e profundidade com que o termo reflete o conceito. Quanto maior a exaustividade, maior a REVOCAÇÃO; quanto maior a especificidade, maior a PRECISÃO.',
    'Pegadinha de cálculo/definição de métricas: Revocação (Recall) = Relevantes Recuperados / Total de Relevantes Existentes no Acervo. Precisão (Precision) = Relevantes Recuperados / Total de Itens Recuperados na Busca. O Cebraspe inverte as frações constantemente!',
    'Coerência interindexadores (concordância entre indexadores distintos para o mesmo texto) vs. coerência intraindexador (concordância do mesmo indexador consigo mesmo em momentos temporais diferentes).',
    'Indexação por extração (utiliza palavras presentes textualmente no documento) vs. Indexação por atribuição (atribui termos de um vocabulário controlado mesmo que a palavra não conste no documento).',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa das Dimensões da Indexação e Impacto no Desempenho de RI',
    colunas: ['Dimensão / Métrica', 'Conceito Fundamental', 'Fator que Influencia', 'Efeito no Sistema de Busca'],
    linhas: [
      ['Exaustividade', 'Número de temas e conceitos indexados no documento', 'Política de indexação e decisão do gestor da unidade', 'Alta exaustividade eleva a Revocação (recupera mais itens, mas com risco de ruído)'],
      ['Especificidade', 'Exatidão com que o termo reflete o conceito do texto', 'Qualidade do vocabulário controlado e rigor do indexador', 'Alta especificidade eleva a Precisão (reduz ruído, mas arrisca silêncio)'],
      ['Revocação (Recall)', 'Capacidade do sistema de encontrar todos os itens relevantes', 'Proporção: Relevantes Recuperados / Total Relevante no Acervo', 'Aumenta com uso de sinônimos, truncagem e operador booleano OR'],
      ['Precisão (Precision)', 'Capacidade do sistema de evitar itens inúteis/ruído', 'Proporção: Relevantes Recuperados / Total de Itens Trazidos na Busca', 'Aumenta com termos específicos e operador booleano AND ou NOT'],
      ['Coerência', 'Grau de concordância na atribuição de termos', 'Consistência interindexadores e intraindexador', 'Indicador de estabilidade e confiabilidade da política de indexação'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Análise Documentária: Da Leitura à Síntese

Conforme **Nair Kobashi** e **Anna Maria Cintra** (*Linguagens Documentárias e Análise de Conteúdo*), a análise documentária é uma operação semiótica e cognitiva que processa a forma e o conteúdo dos documentos com o propósito de condensá-los e representá-los temática e informacionalmente.

#### A Leitura Documentária
A leitura documentária não é uma leitura linear ou literária comum de entretenimento:
* É uma **leitura seletiva, técnica e orientada por objetivos**: o indexador explora a superestrutura do texto (título, subtítulos, resumo, introdução, conclusões, tópicos frasais, tabelas e gráficos) para apreender a **macroestrutura semântica** do documento.
* O contexto sociocognitivo do indexador e o conhecimento do perfil dos usuários da biblioteca influenciam diretamente a seleção dos conceitos relevantes.

---

### 2. O Processo Canônico de Indexação de F. W. Lancaster (1993)

Na obra clássica *Indexação e Resumos: Teoria e Prática* (presente em nosso acervo \`Classificação e indexação/livro-indexac3a7c3a3o-e-resumos-teoria-e-prc3a1tica-lancaster.pdf\`), Lancaster estabelece que a indexação compreende **duas etapas intelectuais distintas e sequenciais**:

1. **Etapa 1: Análise Conceitual (*Subject Analysis*):**
   * Exame cuidadoso do documento para decidir **"do que trata"** o texto.
   * Identificação dos conceitos que representam o tema central e os aspectos secundários de interesse da comunidade de usuários.
   * Ocorre em **linguagem natural** e não deve ser engessada pelas limitações do vocabulário do sistema nesta primeira fase.
2. **Etapa 2: Tradução (*Translation*):**
   * Conversão dos conceitos identificados nos termos autorizados de uma **linguagem documentária** (tesauro, lista de cabeçalhos de assunto ou código de classificação).
   * O vocabulário controlado controla sinônimos, desfaz homógrafos e estabelece relações hierárquicas e associativas.

---

### 3. Modalidades e Tipos de Indexação

* **Indexação por Extração (Derivada):** Os termos de indexação são retirados literalmente do próprio texto do documento (muito comum em sistemas de indexação automática por palavras-chave).
* **Indexação por Atribuição:** Os termos de indexação são atribuídos a partir de um vocabulário controlado externo, representando os conceitos do documento mesmo que as palavras exatas não constem no texto original.
* **Indexação Pós-Coordenada:** Os termos de indexação são atribuídos de forma independente no momento do processamento técnico e são coordenados (combinados) pelo usuário apenas no momento da busca, por meio de operadores booleanos (AND, OR, NOT). É o modelo hegemônico nos catálogos informatizados e bancos de dados modernos.
* **Indexação Pré-Coordenada:** A coordenação entre os termos e subdivisões é fixada no momento da indexação pelo bibliotecário (ex.: catálogos em fichas alfabéticos de assunto e cabeçalhos da Biblioteca do Congresso/LCSH: *Direito Constitucional – Brasil – Jurisprudência*).
* **Indexação Ponderada:** Atribuição de pesos numéricos (ex.: de 1 a 5, ou de 0,1 a 1,0) aos termos para indicar seu grau de relevância e importância no documento.

---

### 4. As Métricas Fundamentais de Avaliação: Revocação e Precisão

A avaliação de sistemas de recuperação foi consolidada nos históricos **Testes de Cranfield** conduzidos por Cyril Cleverdon na década de 1960:

$$\\text{Revocação (Recall)} = \\frac{\\text{Número de Itens Relevantes Recuperados}}{\\text{Total de Itens Relevantes Existentes no Acervo}}$$

$$\\text{Precisão (Precision)} = \\frac{\\text{Número de Itens Relevantes Recuperados}}{\\text{Total de Itens Recuperados na Busca}}$$

* **Relação Inversamente Proporcional:**  
  Em qualquer sistema de recuperação, quanto mais se força o aumento da revocação (para não perder nada), maior é a quantidade de documentos inúteis trazidos na resposta (**ruído**), diminuindo a precisão.  
  Por outro lado, estratégias muito restritivas de alta precisão deixam de recuperar documentos relevantes que não continham a sintaxe exata (**silêncio informacional**).`,
  checkpoints: [
    {
      id: 'cp-3-3-1',
      pergunta: 'Micro-Checkpoint 1: As Etapas do Processo de Indexação de Lancaster',
      item: 'Segundo F. W. Lancaster, o processo de indexação desdobra-se tradicionalmente em duas etapas consecutivas: a análise conceitual, que identifica do que trata o documento, e a tradução, que converte esses conceitos em termos de uma linguagem documentária.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a formulação canônica de Lancaster universalmente cobrada pelo Cebraspe.',
    },
    {
      id: 'cp-3-3-2',
      pergunta: 'Micro-Checkpoint 2: Exaustividade e Revocação',
      item: 'No processo de indexação, a exaustividade refere-se à especificidade do termo empregado para abranger o documento, e sua elevação tende a aumentar o índice de precisão do sistema de busca.',
      gabarito: 'E',
      justificativa: 'Errado! Exaustividade refere-se à quantidade/amplitude de conceitos indexados, e sua elevação aumenta a REVOCAÇÃO (e não a precisão). É a especificidade que está ligada à precisão.',
    },
      {
      id: 'cp-3-3-3',
      pergunta: "Micro-Checkpoint 3: Relação Inversa entre Revocação e Precisão",
      item: "Conforme a doutrina de F. W. Lancaster, o aumento da especificidade da linguagem de indexação tende a elevar a revocação do sistema, reduzindo paralelamente a precisão das buscas.",
      gabarito: 'E',
      justificativa: "Errado! Alta especificidade eleva a PRECISÃO (elimina falsos positivos) e reduz a revocação. A exaustividade de indexação é que eleva a revocação à custa da precisão.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-3-1',
        periodo: '1957 / 1966',
        disciplina: 'Testes de Cranfield',
        focoPrincipal: 'Formulação matemática empírica de Revocação (Recall) e Precisão (Precision) em sistemas de RI',
        figuraChave: 'Cyril Cleverdon',
      },
      {
        id: 'tl-3-3-2',
        periodo: '1993',
        disciplina: 'Teoria da Indexação',
        focoPrincipal: 'Publicação de "Indexação e Resumos: Teoria e Prática" e consolidação das duas etapas da indexação',
        figuraChave: 'F. W. Lancaster',
      },
      {
        id: 'tl-3-3-3',
        periodo: '2007',
        disciplina: 'Análise Documentária no Brasil',
        focoPrincipal: 'Estudos de precisão, leitura documentária e linguística documental aplicada aos tribunais e legislativo',
        figuraChave: 'Rogério Henrique de Araújo Júnior e Nair Kobashi',
      },
    ],
    autores: [
      {
        id: 'aut-3-3-1',
        nome: 'F. W. Lancaster',
        ano: 1993,
        obraPrincipal: 'Indexação e resumos: teoria e prática',
        ideiaChave: 'Processo de indexação em 2 etapas (análise conceitual + tradução); compromisso entre revocação e precisão.',
        chipPegadinha: 'A exaustividade é decisão de política gerencial, e não mero capricho do indexador.',
      },
      {
        id: 'aut-3-3-2',
        nome: 'Cyril Cleverdon',
        ano: 1966,
        obraPrincipal: 'The Cranfield Tests on Indexing Language Devices',
        ideiaChave: 'Demonstrou que revocação e precisão possuem relação inversamente proporcional nos sistemas de busca.',
        chipPegadinha: 'Cranfield foi experimental e prático, não uma teoria abstrata e filosófica.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-3-1',
        afirmacao: 'A coerência entre diferentes indexadores (coerência interindexadores) é indicativo suficiente e isolado para garantir a qualidade final da recuperação da informação em uma biblioteca.',
        gabarito: 'E',
        porQue: 'A coerência mede apenas concordância na escolha de termos; dois indexadores podem ser perfeitamente coerentes entre si escolhendo termos equivocados ou inadequados à demanda dos usuários.',
      },
      {
        id: 'peg-3-3-2',
        afirmacao: 'Na indexação por atribuição, os descritores selecionados devem constar compulsoriamente na redação explícita do texto do documento.',
        gabarito: 'E',
        porQue: 'Essa é a indexação por extração. Na indexação por atribuição, os termos vêm de uma linguagem controlada externa, mesmo que ausentes do texto.',
      },
    ],
  },
};
