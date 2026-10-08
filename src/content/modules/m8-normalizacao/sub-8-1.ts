import type { ModuloFilho } from '../../../domain/types';

export const submodulo81: ModuloFilho = {
  id: 'sub-8-1',
  numero: '8.1',
  titulo: 'ABNT NBR 6023: Referências Bibliográficas',
  descricaoCurta: 'Norma ABNT NBR 6023 (versão atualizada), elementos essenciais e complementares, padronização tipográfica do destaque, regras de autoria pessoal e institucional, referências de monografias, partes de coletâneas, artigos de periódicos, legislação e documentos eletrônicos.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro de Informação e Documentação (CB-014)', 'Antônio Agenor Briquet de Lemos', 'Maria Luísa Leite Leão'],
  alertasCebraspe: [
    'O destaque tipográfico na NBR 6023: o título da obra deve ser destacado com itálico, negrito OU sublinhado (aplicado uniformemente a todas as referências do trabalho). O subtítulo NUNCA recebe destaque tipográfico! Além disso, é TERMINANTEMENTE PROIBIDO usar aspas para destacar o título de um livro referenciado.',
    'Regras de Autoria na NBR 6023: para obras com até três autores, indicam-se todos, separados por ponto e vírgula seguidos de espaço. Para obras com quatro ou mais autores, a regra geral é indicar todos os autores; permite-se, facultativamente, indicar apenas o primeiro seguido da expressão "et al.". O Cebraspe adora inventar que o uso de "et al." é obrigatório: na norma atual, é uma FACULDADE!',
    'Em artigos de periódicos (revistas científicas), quem recebe o destaque tipográfico (negrito/itálico) é o TÍTULO DO PERIÓDICO, e JAMAIS o título do artigo!',
    'Documentos Eletrônicos em Linha: a indicação da disponibilidade e da data de acesso é elemento essencial, registrada no formato: "Disponível em: URL. Acesso em: dia mês abreviado ano" (ex.: "Disponível em: https://www.camara.leg.br. Acesso em: 15 mar. 2026."). Todos os meses do ano são abreviados nas três primeiras letras com ponto, COM A EXCEÇÃO ABSOLUTA DO MÊS DE MAIO, que se grafa por extenso!',
    'Indicação de Edição: indica-se a partir da segunda edição, utilizando números arábicos seguidos de ponto e da abreviatura da palavra edição na língua do texto (ex.: "2. ed.", "3. ed. rev. e ampl."). A primeira edição NUNCA se indica.',
    'Alinhamento da Lista de Referências: conforme a NBR 6023 e NBR 14724, as referências devem ser alinhadas exclusivamente À MARGEM ESQUERDA do texto (não são justificadas), em espaçamento simples e separadas entre si por um espaço simples em branco.',
  ],
  quadroComparativo: {
    titulo: 'Elementos Essenciais para os Principais Tipos de Documentos na ABNT NBR 6023',
    colunas: ['Tipo de Documento', 'Ordem dos Elementos Essenciais Obrigatórios', 'Exemplo Canônico Formatado', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Monografia / Livro no todo', 'AUTOR. Título: subtítulo. Edição. Local: Editora, data de publicação.', 'VERGUEIRO, Waldomiro. **Desenvolvimento de coleções**. 2. ed. São Paulo: Polis, 1989.', 'Destacar o subtítulo ou registrar "1. ed." para a primeira edição (ambos são ERROS crassos).'],
      ['Parte de Monografia (Capítulo)', 'AUTOR DA PARTE. Título da parte. In: AUTOR DO LIVRO. Título do livro. Edição. Local: Editora, data. Paginação da parte.', 'MEADOWS, A. J. Como a pesquisa é comunicada. In: MEADOWS, A. J. **A comunicação científica**. Brasília: Briquet de Lemos, 1999. p. 35-68.', 'Destacar o título do capítulo em vez do título da obra coletiva no todo.'],
      ['Artigo de Periódico', 'AUTOR DO ARTIGO. Título do artigo. Título do Periódico, Local, volume, número, fascículo, paginação inicial-final, data.', 'BORKO, Harold. Information science: what is it? **American Documentation**, Washington, v. 19, n. 1, p. 3-5, jan. 1968.', 'Colocar o título do artigo em negrito/itálico (quem leva destaque é o título do periódico).'],
      ['Documento em Meio Eletrônico', 'Elementos do documento + Disponível em: URL. Acesso em: dia mês abreviado ano.', 'BRASIL. [Constituição (1988)]. **Constituição da República Federativa do Brasil**. Brasília: Senado Federal, 1988. Disponível em: https://www.planalto.gov.br. Acesso em: 10 fev. 2026.', 'Abreviar o mês de maio como "mai." (ERRADO: maio grafa-se sempre por extenso).'],
      ['Obra sem Autoria Declarada', 'PRIMEIRA PALAVRA DO TÍTULO EM MAIÚSCULAS... Local: Editora, data.', '**DIAGNÓSTICO** do setor editorial brasileiro. São Paulo: Câmara Brasileira do Livro, 1993.', 'Iniciar a referência pela expressão "ANÔNIMO" (terminantemente PROIBIDO pela ABNT).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Escopo e a Sistemática da ABNT NBR 6023

A norma **ABNT NBR 6023** (*Informação e Documentação — Referências — Elaboração*) estabelece os requisitos exigíveis para a apresentação e padronização de referências destinadas a trabalhos acadêmicos, relatórios técnicos, artigos científicos, livros e documentos oficiais:

* **Conceito Canônico de Referência:** Conjunto padronizado de elementos descritivos estruturados, retirados diretamente de um documento consultado, que permite sua identificação individual unívoca e rastreabilidade por terceiros.
* **Elementos Essenciais vs. Complementares:**
  * *Elementos Essenciais:* São os dados mínimos indispensáveis sem os quais o documento não pode ser identificado no comércio livreiro ou em acervos: autor(es), título da obra, edição (a partir da 2ª), local de publicação, editora e ano de publicação.
  * *Elementos Complementares:* Informações adicionais que enriquecem o registro bibliográfico: subtítulo, número de páginas ou volumes, ilustrações, dimensões físicas (altura em cm), coleção/série editorial e ISBN/ISSN.
  * *Regra Geral de Padronização:* A decisão de incluir elementos complementares deve ser aplicada uniformemente a **todas as referências do trabalho**.
* **Apresentação e Alinhamento Gráfico:**
  * As referências devem ser alinhadas exclusivamente **à margem esquerda** da página (não são justificadas à direita).
  * O espaçamento entrelinhas interno da referência é **simples**.
  * As referências são separadas entre si por **um espaço simples em branco** (linha em branco).

---

### 2. Regras Fundamentais de Autoria e Tipografia

\`\`\`tree
TITLE: Tipos de Autoria e Regras de Entrada (ABNT NBR 6023)
- Autoria na ABNT NBR 6023 | Regras formais para representação e ordenação de pontos de acesso
  - Autoria Pessoal | Sobrenome em MAIÚSCULAS seguido de prenomes por extenso ou abreviados
    - Até 3 Autores | Indicam-se obrigatoriamente TODOS, separados por ponto e vírgula (; )
    - 4 ou Mais Autores | Regra geral indica TODOS; é facultativo indicar o primeiro seguido de et al.
    - Organizadores e Coordenadores | Sobrenome em MAIÚSCULAS seguido do tipo de responsabilidade (Org., Coord., Ed.)
  - Autoria Institucional / Governamental | Entidades coletivas, órgãos públicos e associações
    - Administração Direta | Entrada pela jurisdição geográfica em MAIÚSCULAS (ex: BRASIL. Congresso Nacional.)
    - Entidades com Nome Distintivo | Entrada direta pelo nome da entidade em MAIÚSCULAS (ex: UNIVERSIDADE DE BRASÍLIA.)
  - Obra sem Autoria Declarada (Anônima) | Inexistência de autor pessoal ou institucional identificado
    - Entrada pelo Título | Primeira palavra do título em MAIÚSCULAS (desconsiderando artigo definido inicial)
    - Proibição de Anon | É terminantemente vedado o uso da expressão latina 'Anon.' ou 'Anônimo'
\`\`\`

#### A. Entrada de Autoria Pessoal
* O sobrenome do autor entra em **letras maiúsculas (caixa alta)**, seguido do prenome e demais nomes:
  * Ex.: \`CUNHA, Murilo Bastos da;\` ou abreviado: \`CUNHA, M. B. da.\` (a opção por abreviar prenomes deve ser uniforme em todo o trabalho).
* **Obras com 1, 2 ou 3 autores:** Indicam-se obrigatoriamente os nomes de todos os autores, separados por **ponto e vírgula** seguido de um espaço:
  * Ex.: \`ROSENFELD, Louis; MORVILLE, Peter; ARANGO, Jorge.\`
* **Obras com 4 ou mais autores:**
  * *Regra canônica da versão atualizada:* **Convém indicar todos os autores**.
  * Permite-se, facultativamente, indicar apenas o primeiro autor seguido da expressão latina **et al.** (em fonte redonda ou itálica):
  * Ex.: \`NONAKA, Ikujiro et al.\`
  * *Pegadinha Cebraspe:* A banca afirma que "em obras com quatro ou mais autores é obrigatório o emprego de et al.". **ERRADO!** É facultativo.
* **Organizadores, Compiladores e Coordenadores:**
  * Quando não há um autor único, mas uma figura responsável pela compilação intelectual da coletânea, a entrada é feita pelo seu nome seguido da abreviatura da função entre parênteses:
  * Ex.: \`FERREIRA, Sueli Mara Soares Pinto (org.).\` / \`TARAPANOFF, Kira (coord.).\`.

#### B. Entrada de Autoria Institucional e Governamental
* **Órgãos Governamentais de Administração Direta:** A entrada é feita obrigatoriamente pelo nome geográfico da respectiva jurisdição em letras maiúsculas:
  * Federal: \`BRASIL. Congresso Nacional. Câmara dos Deputados.\`
  * Estadual: \`SÃO PAULO (Estado). Secretaria da Educação.\`
  * Municipal: \`RIO DE JANEIRO (Município). Secretaria Municipal de Cultura.\`
* **Entidades Coletivas com Denominação Própria Distintiva:** Autarquias, universidades, empresas públicas e associações entram diretamente por seu nome oficial em letras maiúsculas:
  * Ex.: \`UNIVERSIDADE DE BRASÍLIA.\` / \`EMPRESA BRASILEIRA DE CORREIOS E TELÉGRAFOS.\` / \`INSTITUTO BRASILEIRO DE INFORMAÇÃO EM CIÊNCIA E TECNOLOGIA.\`

#### C. Obra sem Autoria Declarada (Anônima)
* A entrada é feita diretamente pelo **título da obra**, com a **primeira palavra grafada em letras maiúsculas**:
  * Ex.: \`DIAGNÓSTICO do setor editorial brasileiro. São Paulo: CBL, 1993.\`
  * Se a obra iniciar por artigo (definido ou indefinido) ou monossílabo, este é incluído em letras maiúsculas juntamente com a palavra subsequente:
  * Ex.: \`A BÍBLIA sagrada. Tradução de João Ferreira de Almeida...\`
* *Atenção:* É expressamente proibido o uso da palavra "Anônimo" ou das iniciais "A.N." como cabeçalho de autoria.

---

### 3. Destaque Tipográfico e Pontuação Canônica

* **O Elemento que Recebe Destaque:**
  * O **título principal da obra** deve ser destacado graficamente utilizando **negrito, itálico OU sublinhado** (o padrão deve ser uniforme em toda a lista).
  * **O subtítulo NUNCA recebe destaque tipográfico!** É registrado em fonte redonda comum, separado do título por dois pontos:
  * Ex.: \`VERGUEIRO, Waldomiro. **Seleção de materiais de informação**: princípios e técnicas. 3. ed. Brasília: Briquet de Lemos, 2010.\`
  * *Proibição Terminante:* O uso de aspas para destacar títulos de livros é expressamente vedado na NBR 6023.
* **Destaque em Partes de Coletâneas (*In:*):**
  * O título do capítulo fica em fonte redonda normal. O elemento que recebe destaque tipográfico é o **título do livro que contém a parte**:
  * Ex.: \`KOBASHI, Nair. Análise documentária. In: SMIT, Johanna (org.). **A representação do conhecimento**. São Paulo: Polis, 1993. p. 15-32.\`
* **Destaque em Artigos de Periódicos:**
  * O título do artigo permanece em fonte redonda comum. O elemento que recebe o destaque tipográfico é o **TÍTULO DA REVISTA / PERIÓDICO**:
  * Ex.: \`LANCASTER, F. W. Ameaças à biblioteca tradicional. **Ciência da Informação**, Brasília, v. 24, n. 1, p. 10-15, jan./abr. 1995.\`

---

### 4. Imprenta: Local, Editora, Edição e Casos de Omissão

* **Indicação de Edição:**
  * Registra-se a partir da **segunda edição**, em algarismos arábicos seguidos de ponto e da abreviatura da palavra na língua do texto: \`2. ed.\`, \`5. ed. rev. e ampl.\`, \`3rd ed.\`. A primeira edição **jamais se indica**.
* **Omissões de Local e Editora (Sine Loco e Sine Nomine):**
  * Quando não é possível identificar o local de publicação: utiliza-se entre colchetes a expressão latina abreviada \`[S.l.]\` (*sine loco*).
  * Quando não é possível identificar a editora comercial: utiliza-se entre colchetes a expressão \`[s.n.]\` (*sine nomine*).
  * Quando ambos faltam: indica-se \`[S.l.: s.n.]\`.
  * Se o local for inferido com certeza embora não esteja expresso na obra: registra-se entre colchetes (ex.: \`[Brasília]\` ou \`[São Paulo?]\`).
* **Regras Estritas para Abreviatura dos Meses:**
  * Na indicação de datas de fascículos periódicos ou datas de acesso a documentos eletrônicos na Web, **todos os meses são abreviados pelas suas três primeiras letras seguidas de ponto final**:
  * \`jan.\`, \`fev.\`, \`mar.\`, \`abr.\`, \`jun.\`, \`jul.\`, \`ago.\`, \`set.\`, \`out.\`, \`nov.\`, \`dez.\`.
  * **A Exceção Inegociável da Norma:** O mês de **MAIO** possui quatro letras e **NÃO se abrevia** (grafa-se integralmente por extenso: \`maio\`).

---

### 5. Documentos Eletrônicos em Linha e Legislação

* **Documentos Obtidos na Internet:**
  * Registram-se todos os elementos essenciais da obra física, seguidos obrigatoriamente por:
  * \`Disponível em: <URL ou URL direta>. Acesso em: dia mês abreviado ano.\`
  * Ex.: \`Disponível em: https://www.camara.leg.br. Acesso em: 18 maio 2026.\`
* **Legislação e Atos Normativos Federais:**
  * Estrutura canônica:
    $$\\text{JURISDIÇÃO. } \\text{Tipo de Ato e Número, de dia mês ano. } \\text{Ementa oficial. } \\textbf{Veículo Oficial}, \\text{ Local, data de publicação. Seção, páginas.}$$
  * Ex.: \`BRASIL. Lei nº 14.133, de 1º de abril de 2021. Lei de Licitações e Contratos Administrativos. **Diário Oficial da União**, Brasília, Seção 1, p. 1, 1 abr. 2021.\``,
  checkpoints: [
    {
      id: 'cp-8-1-1',
      pergunta: 'Micro-Checkpoint 1: Destaque Tipográfico na NBR 6023',
      item: 'Na elaboração de referências conforme a norma ABNT NBR 6023, o título e o subtítulo da obra devem receber o mesmo destaque tipográfico, podendo ser empregado o itálico, o negrito ou aspas duplas.',
      gabarito: 'E',
      justificativa: 'Errado! O subtítulo NUNCA recebe destaque tipográfico (permanece em fonte redonda). Além disso, aspas duplas são expressamente proibidas para destacar títulos de livros na NBR 6023.',
    },
    {
      id: 'cp-8-1-2',
      pergunta: 'Micro-Checkpoint 2: Indicação de Mês na NBR 6023',
      item: 'Ao se referenciar um documento acessado em sítio da Internet segundo a ABNT NBR 6023, todos os meses do ano devem ser abreviados pelas suas três primeiras letras seguidas de ponto, excetuando-se apenas o mês de maio, que deve ser grafado por extenso.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é uma das regras mais minuciosas da ABNT: maio não se abrevia.',
    },
    {
      id: 'cp-8-1-3',
      pergunta: 'Micro-Checkpoint 3: ABNT NBR 6023 e Autoria Institucional',
      item: 'De acordo com a norma ABNT NBR 6023, publicações de órgãos governamentais de administração direta devem ter sua entrada de autoria realizada pelo nome do órgão subordinado, omitindo-se a jurisdição geográfica correspondente.',
      gabarito: 'E',
      justificativa: 'Errado! A entrada oficial de órgãos governamentais deve ser iniciada pelo nome geográfico da jurisdição que o subordina (ex: BRASIL. Congresso Nacional. Câmara dos Deputados).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-1-1',
        periodo: '2002',
        disciplina: 'NBR 6023:2002',
        focoPrincipal: 'Versão histórica anterior que vigorou por 16 anos',
        figuraChave: 'ABNT / CB-014',
      },
      {
        id: 'tl-8-1-2',
        periodo: '2018 / 2020 / Atual',
        disciplina: 'NBR 6023 Atualizada',
        focoPrincipal: 'Revisão profunda da NBR 6023: novos formatos digitais, flexibilização de quatro ou mais autores e alinhamento à margem esquerda',
        figuraChave: 'Comitê Brasileiro de Documentação (CB-014)',
      },
    ],
    autores: [
      {
        id: 'aut-8-1-1',
        nome: 'ABNT / CB-014',
        ano: 2018,
        obraPrincipal: 'ABNT NBR 6023: Informação e documentação — Referências — Elaboração',
        ideiaChave: 'Padronização nacional de elementos essenciais e complementares para listas de referências bibliográficas.',
        chipPegadinha: 'A NBR 6023 regula as referências no final do texto; quem regula as citações no corpo é a NBR 10520.',
      },
      {
        id: 'aut-8-1-2',
        nome: 'Antonio Agenor Briquet de Lemos',
        ano: 2000,
        obraPrincipal: 'Para uma história da normalização bibliográfica no Brasil',
        ideiaChave: 'Pioneirismo na transposição das normas da ISO (ISO 690) para o sistema normativo brasileiro.',
        chipPegadinha: 'A NBR 6023 adota a lógica internacional da ISO 690 adaptada à prática bibliotecária brasileira.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-1-1',
        afirmacao: 'Conforme a ABNT NBR 6023, caso uma obra monográfica tenha sido publicada em sua primeira edição, o elemento "1. ed." deve constar compulsoriamente como elemento essencial da referência.',
        gabarito: 'E',
        porQue: 'A primeira edição NUNCA é indicada. A menção de edição na NBR 6023 só é registrada a partir da segunda edição (ex.: "2. ed.").',
      },
      {
        id: 'peg-8-1-2',
        afirmacao: 'Na referência de um artigo extraído de um periódico científico, o título do artigo é o elemento que deve receber destaque em negrito ou itálico.',
        gabarito: 'E',
        porQue: 'Em artigos de periódicos, quem recebe o destaque tipográfico é o TÍTULO DA REVISTA/PERIÓDICO, e não o título do artigo.',
      },
      {
        id: 'peg-8-1-3',
        afirmacao: 'Na compilação de referências bibliográficas conforme a ABNT NBR 6023, o alinhamento do texto deve ser justificado e com recuo de parágrafo de 1,25 cm na primeira linha.',
        gabarito: 'E',
        porQue: 'A norma determina alinhamento exclusivo À MARGEM ESQUERDA (sem justificação) e sem recuo de parágrafo, com espaçamento simples entre linhas.',
      },
    ],
  },
};
