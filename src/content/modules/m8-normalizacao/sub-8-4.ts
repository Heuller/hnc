import type { ModuloFilho } from '../../../domain/types';

export const submodulo84: ModuloFilho = {
  id: 'sub-8-4',
  numero: '8.4',
  titulo: 'ABNT NBR 6028 (Resumos - 2021), NBR 6027 (Sumários) e NBR 6022 (Artigos)',
  descricaoCurta: 'Tipologia de resumos (indicativo, informativo e crítico/resenha), regras de redação da NBR 6028:2021 (parágrafo único, voz ativa e contagem de palavras), diferença entre Sumário (NBR 6027) e Índice (NBR 6034), estrutura de artigos (NBR 6022) e a sintaxe do DOI.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'F. W. Lancaster', 'Comitê Brasileiro CB-014', 'International DOI Foundation (IDF)'],
  alertasCebraspe: [
    'Tipos de Resumos na NBR 6028: Resumo Informativo (informa finalidades, metodologia, resultados e conclusões, DISPENSANDO a consulta ao original); Resumo Indicativo (aponta os temas principais SEM detalhar dados ou conclusões, NÃO dispensando a leitura do original); Resumo Crítico / Resenha / Recensão (análise crítica valorativa elaborada por especialista). O Cebraspe inverte sistematicamente informativo e indicativo!',
    'Extensão recomendada de palavras na NBR 6028: 150 a 500 palavras para teses, dissertações e relatórios técnico-científicos; 100 a 250 palavras para artigos de periódicos; 50 a 100 palavras para notas editoriais e comunicações breves.',
    'Regras de redação do Resumo: deve ser composto em PARÁGRAFO ÚNICO contínuo, com verbo na VOZ ATIVA e na TERCEIRA PESSOA DO SINGULAR (ex.: "Analisa...", "Demonstra..."). Palavras-chave ficam logo abaixo, separadas entre si por PONTO E VÍRGULA e finalizadas por PONTO.',
    'A grande confusão: SUMÁRIO vs. ÍNDICE. O Sumário (NBR 6027) apresenta as seções na MESMA ORDEM LINEAR em que aparecem no corpo do trabalho (pré-textual obrigatório); o Índice (NBR 6034) é ordenado ALFABETICAMENTE ou SISTEMATICAMENTE para localização pontual de termos (pós-textual opcional). Os elementos pré-textuais que antecedem o sumário NÃO devem constar nele!',
    'Identificador de Objeto Digital (DOI - ISO 26324): estruturado na sintaxe canônica "prefixo/sufixo", em que o prefixo (iniciado por 10.) identifica a autoridade nomeadora/editora junto à Crossref/IDF, e o sufixo é definido pelo editor para identificar a obra de forma persistente.',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Tipos de Resumos segundo a ABNT NBR 6028:2021',
    colunas: ['Tipo de Resumo', 'Conteúdo e Finalidade', 'Dispensa o Original?', 'Público / Autoria', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Resumo Informativo', 'Informa objetivos, metodologia, principais resultados e conclusões obtidas na pesquisa', 'Sim (o leitor apreende a substância do trabalho sem precisar abrir o texto completo)', 'Redigido pelo próprio autor para acompanhar artigos e trabalhos acadêmicos', 'Afirmar que o resumo informativo não aborda resultados para obrigar o leitor a ler a tese (FALSO).'],
      ['Resumo Indicativo', 'Apenas indica os tópicos gerais tratados, sem apresentar dados estatísticos nem conclusões', 'Não (requer compulsoriamente a leitura do texto original para entender os achados)', 'Redigido pelo autor ou catalogador para notas sumárias de conteúdo', 'Dizer que o resumo indicativo permite dispensar a leitura do documento primário (FALSO).'],
      ['Resumo Crítico / Resenha', 'Emite julgamento crítico, opinião valorativa e análise contextual sobre a obra (recensão)', 'Não (visa orientar a reflexão e escolha do leitor sobre o mérito científico do livro)', 'Redigido por especialista independente na área temática da publicação', 'Confundir resenha crítica com resumo acadêmico neutro de trabalho de conclusão.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A ABNT NBR 6028:2021 (Resumo, Resenha e Recensão)

A norma **ABNT NBR 6028** (*Informação e Documentação — Resumo, Resenha e Recensão — Apresentação*, revisada em 2021) padroniza a condensação do conteúdo documental em qualquer área do conhecimento humano:

\`\`\`tree
TITLE: Tipologia de Resumos (ABNT NBR 6028:2021)
- Resumos, Resenhas e Recensões (NBR 6028) | Apresentação condensada de documentos informacionais
  - 1. Resumo Informativo | Condensa objetivos, metodologia, principais resultados e conclusões
    - Suficiência Informativa | DISPENSA a leitura imediata do documento original
    - Extensão Padrão | De 150 a 500 palavras em trabalhos acadêmicos; 100 a 250 em artigos de periódicos
    - Estilo de Redação | Parágrafo único, voz ativa, verbo na 3ª pessoa do singular, sem enumeração de tópicos
  - 2. Resumo Indicativo | Aponta apenas os pontos gerais abordados sem dados empíricos ou resultados
    - Caráter Sumário | NÃO dispensa a consulta ao documento original
    - Aplicação Prática | Índices de periódicos, alertas rápidos e guias bibliográficos sumários
  - 3. Resumo Crítico (Resenha / Recensão) | Análise valorativa redigida por especialista temático
    - Juízo de Valor | Emite julgamento crítico explícito sobre mérito científico e originalidade
    - Extensão Livre | Não se submete ao limite numérico rígido de palavras da NBR 6028
\`\`\`

#### A. A Tipologia Tripartite Canônica:
1. **Resumo Informativo:**
   * Condensa o conteúdo do documento expondo de forma clara e suficiente seus **objetivos/finalidades, metodologia empregada, principais resultados e conclusões alcançadas**.
   * Pela sua densidade e suficiência informativa, **dispensa a consulta ao documento original**, permitindo ao pesquisador julgar com precisão se a obra atende à sua necessidade informacional.
2. **Resumo Indicativo:**
   * Aponta apenas os pontos gerais abordados no documento, sem discorrer sobre dados empíricos, metodologia detalhada ou conclusões da pesquisa.
   * **Não dispensa a leitura do documento original**.
3. **Resumo Crítico (Resenha / Recensão):**
   * Resumo redigido por um especialista temático que analisa criticamente a obra, emite **julgamento de valor sobre seu mérito científico**, originalidade e limitações metodológicas.

#### B. Regras Gramaticais e Estruturais de Redação
* **Parágrafo Único:** O resumo deve ser redigido em **um único bloco de parágrafo contínuo e coeso**. É terminantemente vedada a redação em tópicos, alíneas ou itens com marcadores.
* **Estilo e Voz:** O texto deve ser composto por frases concisas e afirmativas, utilizando o verbo na **voz ativa e na terceira pessoa do singular** (ex.: *"Analisa a política arquivística...", "Demonstra o comportamento eleitoral..."*). Evita-se a voz passiva longa e a primeira pessoa do singular ou plural.
* **A Primeira Frase:** Deve ser significativa, contextualizando imediatamente o assunto central tratado no documento.
* **Proibições:** Não devem figurar no resumo símbolos, equações, fórmulas matemáticas e diagramas, nem citações bibliográficas de outros autores, a menos que o trabalho seja estritamente sobre a obra de terceiros.

#### C. Extensão de Palavras Padronizada na Norma
* **De 150 a 500 palavras:** para trabalhos acadêmicos (teses de doutorado, dissertações de mestrado, TCCs e monografias) e relatórios técnico-científicos;
* **De 100 a 250 palavras:** para artigos de periódicos científicos;
* **De 50 a 100 palavras:** para notas editoriais, comunicados breves e documentos curtos.

#### D. Palavras-chave (*Keywords*):
* Devem figurar logo abaixo do texto do resumo, antecedidas da expressão com hífen e dois pontos: \`Palavras-chave:\`.
* São grafadas com a inicial em letra maiúscula, **separadas entre si por ponto e vírgula (\`;\`)** e finalizadas por **ponto final (\`.\`)**:
* *Exemplo canônico:* \`Palavras-chave: Biblioteconomia; Preservação digital; Repositórios institucionais; OAI-PMH.\`

---

### 2. A ABNT NBR 6027 (Sumário) vs. NBR 6034 (Índice)

A delimitação conceitual e posicional entre sumário e índice constitui uma das pegadinhas clássicas do Cebraspe:

| Critério Comparativo | Sumário (ABNT NBR 6027) | Índice (ABNT NBR 6034) |
| :--- | :--- | :--- |
| **Definição Canônica** | Enumeração das divisões, seções e capítulos **na mesma ordem física de ocorrência no texto**. | Relação detalhada de termos, nomes ou assuntos **ordenada alfabeticamente ou sistematicamente**. |
| **Localização no Trabalho** | Elemento **pré-textual obrigatório** (o último dos pré-textuais). | Elemento **pós-textual opcional** (localizado no final da obra). |
| **Finalidade Primária** | Fornecer uma visão panorâmica linear da estrutura lógica da obra. | Permitir a rápida localização pontual de termos e assuntos específicos no texto. |
| **O que NÃO deve conter** | **Os elementos pré-textuais que o antecedem** (resumos, dedicatória, listas) NÃO constam no sumário. | Não segue a linearidade cronológica dos capítulos do livro. |

---

### 3. A ABNT NBR 6022: Artigo em Publicação Periódica

A norma disciplina a estrutura formal de artigos científicos e técnicos publicados em revistas:
* **Estrutura Tripartite do Artigo:**
  * *Elementos Pré-Textuais:* Título e subtítulo (na língua do texto), autor(es) com nota de rodapé de filiação institucional (*biorresumo*), resumo em língua vernácula e palavras-chave.
  * *Elementos Textuais:* Introdução (contextualização e problema), Desenvolvimento (fundamentação teórica, materiais e métodos e resultados) e Conclusão (considerações finais).
  * *Elementos Pós-Textuais:* Título e subtítulo em língua estrangeira, resumo e palavras-chave em língua estrangeira (*abstract/keywords*), notas explicativas, referências (obrigatórias), apêndices e anexos.

---

### 4. O Identificador de Objeto Digital (DOI - ISO 26324)

O **Digital Object Identifier (DOI)**, administrado pela *International DOI Foundation* (IDF) e regido pela norma internacional **ISO 26324**, é o padrão global para citação permanente de objetos intelectuais na Web:

* **Mecanismo Operacional e Resolução:**
  * Resolve a patologia do *link rot* (endereços HTTP quebrados quando revistas mudam de servidor). O DOI atua como um URN resolúvel pelo servidor central \`https://doi.org/\`.
* **A Sintaxe Padronizada do DOI:**
  O identificador é alfanumérico e divide-se em duas partes estritas separadas por uma **barra oblíqua (\`/\`)**:

$$\\underbrace{10.1000}_{\\text{Prefixo}} \\; / \\; \\underbrace{182.v2n1.art5}_{\\text{Sufixo}}$$

1. **Prefixo:** Inicia obrigatoriamente pelos caracteres numéricos \`10.\`, seguidos pelo código da autoridade nomeadora (editora comercial, universidade ou agência depositária registrada junto à Crossref, DataCite ou mEDRA).
2. **Sufixo:** Sequência livre atribuída pela própria instituição publicadora para identificar unicamente o artigo, tese, relatório ou capítulo dentro de seu catálogo.`,
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
    {
      id: 'cp-8-4-3',
      pergunta: 'Micro-Checkpoint 3: Estrutura do Identificador de Objeto Digital (DOI)',
      item: 'Um número DOI (Digital Object Identifier) é composto por duas partes separadas por uma barra oblíqua: o prefixo, que identifica a autoridade nomeadora, e o sufixo, que identifica o objeto específico.',
      gabarito: 'C',
      justificativa: 'Certo! A sintaxe padrão é "prefixo/sufixo" (ex: 10.1000/182), onde "10.xxxx" é registrado junto à International DOI Foundation e o sufixo é definido pelo editor.',
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
        periodo: '2012',
        disciplina: 'Norma ISO 26324',
        focoPrincipal: 'Padronização internacional da sintaxe e resolução do sistema DOI',
        figuraChave: 'International DOI Foundation (IDF)',
      },
      {
        id: 'tl-8-4-3',
        periodo: 'Maio de 2021',
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
        ideiaChave: 'Tipologia de resumos (informativo, indicativo, crítico), limites de palavras (150-500, 100-250, 50-100) e parágrafo único.',
        chipPegadinha: 'Resumo informativo dispensa a leitura do original; indicativo não dispensa.',
      },
      {
        id: 'aut-8-4-2',
        nome: 'F. W. Lancaster',
        ano: 2003,
        obraPrincipal: 'Indexação e Resumos: Teoria e Prática',
        ideiaChave: 'Teoria da condensação e sumarização da informação; regras de fidelidade e concisão em resumos.',
        chipPegadinha: 'O resumo não deve emitir opiniões pessoais do sintetizador, salvo quando for expressamente uma resenha crítica.',
      },
      {
        id: 'aut-8-4-3',
        nome: 'International DOI Foundation',
        ano: 2012,
        obraPrincipal: 'DOI Handbook (ISO 26324)',
        ideiaChave: 'Sintaxe alfanumérica de prefixo/sufixo para resolução persistente de recursos digitais na Web.',
        chipPegadinha: 'O prefixo sempre se inicia por "10." e identifica a autoridade nomeadora, nunca o autor individual.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-4-1',
        afirmacao: 'De acordo com a ABNT NBR 6028:2021, o resumo informativo de uma tese de doutorado deve ser estruturado em seções numeradas por tópicos com marcadores para facilitar a leitura.',
        gabarito: 'E',
        porQue: 'A norma veda tópicos e marcadores no corpo do resumo: ele deve ser composto estritamente em um ÚNICO PARÁGRAFO corrido e coeso.',
      },
      {
        id: 'peg-8-4-2',
        afirmacao: 'Conforme a ABNT NBR 6027, as páginas pré-textuais da monografia, como a dedicatória e o resumo em português, devem constar obrigatoriamente listadas no sumário.',
        gabarito: 'E',
        porQue: 'O item 4.2 da NBR 6027 determina expressamente que os elementos pré-textuais que antecedem o sumário NÃO devem figurar nele.',
      },
      {
        id: 'peg-8-4-3',
        afirmacao: 'Na sintaxe de um código DOI (Digital Object Identifier), o prefixo identifica o número do artigo individual, enquanto o sufixo identifica a editora da revista.',
        gabarito: 'E',
        porQue: 'A ordem é a inversa: o PREFIXO identifica a autoridade nomeadora / editora (ex.: 10.1000), e o SUFIXO identifica o objeto digital individual.',
      },
    ],
  },
};
