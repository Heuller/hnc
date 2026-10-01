import type { ModuloFilho } from '../../../domain/types';

export const submodulo84: ModuloFilho = {
  id: 'sub-8-4',
  numero: '8.4',
  titulo: 'ABNT NBR 6028 (Resumos - 2021), NBR 6027 (Sumários) e NBR 6022 (Artigos)',
  descricaoCurta: 'Tipologia de resumos (indicativo, informativo e crítico/resenha), regras de redação da NBR 6028:2021 (parágrafo único, voz ativa e contagem de palavras), diferença entre Sumário (NBR 6027) e Índice (NBR 6034), e estrutura de artigos (NBR 6022).',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'F. W. Lancaster', 'Comitê Brasileiro CB-014'],
  alertasCebraspe: [
    'Tipos de Resumos na NBR 6028: Resumo Informativo (informa finalidades, metodologia, resultados e conclusões, DISPENSANDO a leitura do original); Resumo Indicativo (aponta os temas principais SEM detalhar resultados, NÃO dispensando a leitura do original); Resumo Crítico / Resenha (análise crítica valorativa elaborada por especialista). O Cebraspe inverte indicativo e informativo!',
    'Extensão recomendada de palavras na NBR 6028: 150 a 500 palavras para teses, dissertações e relatórios técnico-científicos; 100 a 250 palavras para artigos de periódicos; 50 a 100 palavras para notas e comunicações breves.',
    'Regras de redação do Resumo: deve ser redigido em PARÁGRAFO ÚNICO, com verbo na VOZ ATIVA e na TERCEIRA PESSOA DO SINGULAR. Palavras-chave ficam logo abaixo, separadas entre si por PONTO E VÍRGULA e finalizadas por PONTO.',
    'A grande confusão: SUMÁRIO vs. ÍNDICE. O Sumário (NBR 6027) apresenta as seções na MESMA ORDEM LINEAR em que aparecem no corpo do trabalho (pré-textual obrigatório); o Índice (NBR 6034) é ordenado ALFABETICAMENTE ou SISTEMATICAMENTE para localização pontual de termos (pós-textual opcional).',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Tipos de Resumos segundo a ABNT NBR 6028:2021',
    colunas: ['Tipo de Resumo', 'Conteúdo e Finalidade', 'Dispensa o Original?', 'Público / Autoria'],
    linhas: [
      ['Resumo Informativo', 'Informa objetivos, metodologia, principais resultados e conclusões obtidas na pesquisa', 'Sim (o leitor apreende a substância do trabalho sem precisar abrir o texto completo)', 'Redigido pelo próprio autor para acompanhar artigos e trabalhos acadêmicos'],
      ['Resumo Indicativo', 'Apenas indica os pontos e tópicos gerais abordados, sem apresentar dados nem conclusões', 'Não (requer compulsoriamente a leitura do texto original para entender os resultados)', 'Redigido pelo autor ou catalogador para notas sumárias de conteúdo'],
      ['Resumo Crítico / Resenha', 'Emite julgamento crítico, opinião valorativa e análise contextual sobre a obra', 'Não (visa orientar a escolha e reflexão do leitor sobre o mérito do livro)', 'Redigido por especialista independente na área temática da publicação'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A ABNT NBR 6028:2021 (Resumo, Resenha e Recensão)

Atualizada recentemente pela ABNT (documento presente em nosso repositório \`ABNT/6028-Resumo-atualizada-em-18.05.2021-.pdf\`), a norma **NBR 6028** fixa as condições de preparação de resumos em qualquer área técnica ou científica:

#### A. A Tipologia Tripartite de Resumos
1. **Resumo Informativo:**
   * Condensa o conteúdo do documento ressaltando suas **finalidades, metodologia, principais resultados e conclusões**.
   * Pela sua densidade e riqueza de dados, **permite que o leitor decida se precisa ou não do original**, podendo dispensar a leitura completa em muitos contextos de revisão rápida.
2. **Resumo Indicativo:**
   * Aponta os aspectos e temas tratados na obra sem detalhar os resultados numéricos, discussões ou conclusões. Não permite dispensar a leitura do original.
3. **Resumo Crítico (Recensão / Resenha):**
   * Resumo redigido por um especialista que analisa comparativamente e emite julgamento de valor sobre a contribuição e as limitações do documento.

#### B. Regras Canônicas de Redação e Extensão de Palavras
* **Formatação Textual:**
  * O resumo deve ser composto por uma sequência de frases concisas e afirmativas reunidas em um **único parágrafo corrido** (é proibido o uso de tópicos ou listas com marcadores).
  * A primeira frase deve ser significativa e expressar o tema principal da obra.
  * O verbo deve ser empregado na **voz ativa e na terceira pessoa do singular** (ex.: *"Analisa a política de indexação...", "Demonstra os resultados..."*).
* **Limites de Palavras por Tipo de Documento:**
  * **150 a 500 palavras:** para trabalhos acadêmicos (teses, dissertações, TCCs) e relatórios técnico-científicos;
  * **100 a 250 palavras:** para artigos de periódicos científicos;
  * **50 a 100 palavras:** para documentos breves, notas preliminares e comunicados.
* **Palavras-chave (*Keywords*):**
  * Localizam-se imediatamente abaixo do texto do resumo, antecedidas pela expressão \`Palavras-chave:\` (com hífen e dois pontos).
  * Devem ser separadas entre si por **ponto e vírgula (\`;\`)** e finalizadas por **ponto final (\`.\`)**.

---

### 2. A ABNT NBR 6027 (Sumário) vs. NBR 6034 (Índice)

A distinção entre sumário e índice é rigorosamente cobrada pelo Cebraspe:

* **Sumário (NBR 6027):**
  * É a enumeração das principais divisões, seções e outras partes do documento, **na mesma ordem e com a mesma grafia** em que sucedem no corpo do trabalho.
  * É elemento **pré-textual obrigatório** em teses, livros e monografias.
  * Não se devem listar no sumário os elementos pré-textuais que o antecedem (como resumo e listas de figuras).
* **Índice (NBR 6034):**
  * É uma relação detalhada de palavras, termos, frases, nomes de pessoas, eventos ou assuntos, **ordenada segundo um critério lógico (alfabético, sistemático ou cronológico)**, que localiza pontualmente onde cada tema é citado no texto.
  * É elemento **pós-textual opcional**, localizado no final da obra.`,
  checkpoints: [
    {
      id: 'cp-8-4-1',
      pergunta: 'Micro-Checkpoint 1: Resumo Informativo vs. Indicativo',
      item: 'De acordo com a ABNT NBR 6028:2021, o resumo informativo tem por finalidade apenas apontar os tópicos gerais de um trabalho sem discorrer sobre metodologia e resultados, não podendo em hipótese alguma dispensar a leitura do documento original.',
      gabarito: 'E',
      justificativa: 'Errado! O item descreve o Resumo INDICATIVO. O Resumo INFORMATIVO inclui finalidades, metodologia, resultados e conclusões, dispensando a leitura do original.',
    },
    {
      id: 'cp-8-4-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Sumário e Índice',
      item: 'Nos termos das normas técnicas brasileiras de documentação, enquanto o sumário enumera as divisões do trabalho na ordem cronológica de sua ocorrência no texto, o índice é organizado alfabeticamente ou sistematicamente para localização de termos e autores.',
      gabarito: 'C',
      justificativa: 'Correto! O sumário segue a ordem física de sucessão dos capítulos; o índice é ordenado alfabética ou tematicamente no final da obra.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-4-1',
        periodo: '2003 / 2012',
        disciplina: 'Normalização de Sumários e Artigos',
        focoPrincipal: 'Consolidação das normas ABNT NBR 6027 (Sumários) e NBR 6022 (Artigos de periódicos)',
        figuraChave: 'ABNT',
      },
      {
        id: 'tl-8-4-2',
        periodo: '2021',
        disciplina: 'Revisão da NBR 6028',
        focoPrincipal: 'Publicação da versão atualizada da ABNT NBR 6028 (Resumo, resenha e recensão)',
        figuraChave: 'Comitê Brasileiro CB-014',
      },
    ],
    autores: [
      {
        id: 'aut-8-4-1',
        nome: 'ABNT CB-014',
        ano: 2021,
        obraPrincipal: 'ABNT NBR 6028: Informação e documentação — Resumo, resenha e recensão — Apresentação',
        ideiaChave: 'Parágrafo único, voz ativa, limites de palavras (150-500, 100-250, 50-100) e palavras-chave com ponto e vírgula.',
        chipPegadinha: 'Resumo de artigo de revista deve ter entre 100 e 250 palavras.',
      },
      {
        id: 'aut-8-4-2',
        nome: 'F. W. Lancaster',
        ano: 2003,
        obraPrincipal: 'Indexação e Resumos: Teoria e Prática',
        ideiaChave: 'Classificação tipológica dos resumos em indicativos, informativos e analítico-críticos; princípios de concisão e fidelidade textual.',
        chipPegadinha: 'O resumo informativo dispensa a leitura do original para a tomada de decisão; o indicativo apenas aponta os tópicos abordados.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-4-1',
        afirmacao: 'Na elaboração do resumo para um trabalho acadêmico (dissertação ou tese) segundo a NBR 6028, é obrigatória a divisão do texto em três parágrafos distintos: um para introdução, um para metodologia e um para os resultados.',
        gabarito: 'E',
        porQue: 'A norma determina expressamente que o resumo deve ser composto em um ÚNICO PARÁGRAFO corrido, sem subdivisão em blocos.',
      },
      {
        id: 'peg-8-4-2',
        afirmacao: 'Em um sumário elaborado conforme a NBR 6027, as palavras-chave e a folha de aprovação devem constar listadas com suas respectivas páginas.',
        gabarito: 'E',
        porQue: 'Os elementos pré-textuais que antecedem o sumário (resumo, folha de rosto, aprovação) NÃO constam no sumário.',
      },
    ],
  },
};
