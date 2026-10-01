import type { ModuloFilho } from '../../../domain/types';

export const submodulo81: ModuloFilho = {
  id: 'sub-8-1',
  numero: '8.1',
  titulo: 'ABNT NBR 6023: Referências Bibliográficas',
  descricaoCurta: 'Norma ABNT NBR 6023 (versão atualizada), elementos essenciais e complementares, padronização tipográfica do destaque, regras de autoria pessoal e institucional, referências de monografias, partes de coletâneas, artigos de periódicos e documentos eletrônicos.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro de Informação e Documentação (CB-014)', 'Antônio Agenor Briquet de Lemos'],
  alertasCebraspe: [
    'O destaque tipográfico na NBR 6023: o título da obra deve ser destacado com itálico, negrito OU sublinhado. O subtítulo NUNCA recebe destaque! Além disso, é TERMINANTEMENTE PROIBIDO usar aspas para destacar o título de um livro referenciado.',
    'Regras de Autoria na NBR 6023: para obras com até três autores, indicam-se todos, separados por ponto e vírgula seguidos de espaço. Para obras com quatro ou mais autores, convém indicar todos; permite-se indicar apenas o primeiro seguido da expressão "et al.". O Cebraspe adora inventar que "et al." é obrigatório: na norma atual, é uma faculdade!',
    'Documentos Eletrônicos em Linha: a indicação da disponibilidade e da data de acesso é elemento essencial, devendo ser registrada exatamente no formato: "Disponível em: URL. Acesso em: dia mês abreviado ano" (ex.: "Disponível em: https://www.camara.leg.br. Acesso em: 15 mar. 2026."). O mês de maio NUNCA se abrevia!',
    'Indicação de Edição: indica-se a partir da segunda edição, utilizando números arábicos seguidos de ponto e da abreviatura da palavra edição na língua do texto (ex.: "2. ed.", "3. ed. rev. e ampl."). A primeira edição NÃO se indica.',
    'Obras sem local ou editora identificada: utiliza-se entre colchetes [S.l.] (sine loco) e [s.n.] (sine nomine). Quando ambos faltam: [S.l.: s.n.].',
  ],
  quadroComparativo: {
    titulo: 'Elementos Essenciais para os Principais Tipos de Documentos na ABNT NBR 6023',
    colunas: ['Tipo de Documento', 'Ordem dos Elementos Essenciais Obrigatórios', 'Exemplo Canônico Formatado'],
    linhas: [
      ['Monografia / Livro no todo', 'AUTOR. Título: subtítulo. Edição. Local: Editora, data de publicação.', 'VERGUEIRO, Waldomiro. **Desenvolvimento de coleções**. 2. ed. São Paulo: Polis, 1989.'],
      ['Parte de Monografia (Capítulo)', 'AUTOR DA PARTE. Título da parte. In: AUTOR DO LIVRO. Título do livro. Edição. Local: Editora, data. Paginação da parte.', 'MEADOWS, A. J. Como a pesquisa é comunicada. In: MEADOWS, A. J. **A comunicação científica**. Brasília: Briquet de Lemos, 1999. p. 35-68.'],
      ['Artigo de Periódico', 'AUTOR DO ARTIGO. Título do artigo. Título do Periódico, Local, volume, número, fascículo, paginação inicial-final, data.', 'BORKO, Harold. Information science: what is it? **American Documentation**, Washington, v. 19, n. 1, p. 3-5, Jan. 1968.'],
      ['Documento em Meio Eletrônico', 'Elementos do documento físico + Disponível em: <URL>. Acesso em: dia mês abreviado ano.', 'BRASIL. [Constituição (1988)]. **Constituição da República Federativa do Brasil**. Brasília: Senado Federal, 1988. Disponível em: https://www.planalto.gov.br. Acesso em: 10 fev. 2026.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Escopo e a Sistemática da ABNT NBR 6023

A norma **ABNT NBR 6023** (*Informação e Documentação — Referências — Elaboração*, documento presente em nosso repositório \`ABNT/Referencias-NBR-6023-2025.pdf\`) fixa os padrões para a apresentação e compilação de referências de documentos citados em trabalhos acadêmicos, relatórios técnicos, publicações oficiais e bibliografias:

* **Conceito de Referência:** Conjunto padronizado de elementos descritivos retirados de um documento, que permite sua identificação individual unívoca.
* **Elementos Essenciais vs. Complementares:**
  * *Essenciais:* Informações indispensáveis à identificação do documento (autor, título, edição, local, editora e data).
  * *Complementares:* Dados adicionais que enriquecem a descrição (número de páginas, ilustrações, dimensões, série, notas explicativas e ISBN).
  * *Regra de Ouro da Norma:* A opção por incluir elementos complementares deve ser aplicada uniformemente a todas as referências do mesmo trabalho.

---

### 2. Regras Fundamentais de Autoria e Tipografia

#### A. Destaque Tipográfico e Pontuação
* O **título da obra** deve ser uniformemente destacado em toda a lista bibliográfica, utilizando-se **negrito, itálico OU sublinhado** (o negrito é o padrão editorial mais comum no Brasil).
* **O subtítulo NUNCA recebe destaque tipográfico!** É grafado em fonte redonda comum, separado do título principal por dois pontos (ex.: *Catalogação no plural: princípios e teorias*).
* É expressamente vedado colocar o título da obra entre aspas na referência.
* O ponto separa os campos principais (autor. título. edição. imprenta.). Dois pontos separam o local da editora (Local : Editora). A vírgula separa a editora da data.

#### B. Entrada de Autoria Pessoal
* O sobrenome do autor é grafado em **letras maiúsculas (caixa alta)**, seguido do prenome e outros nomes (ex.: \`CUNHA, Murilo Bastos da\`).
* **Até três autores:** Indicam-se os nomes de todos os autores, na ordem em que aparecem no documento, separados por **ponto e vírgula** seguidos de espaço:
  * Ex.: \`ROSENFELD, Louis; MORVILLE, Peter; ARANGO, Jorge.\`
* **Quatro ou mais autores:**
  * A regra geral recomenda indicar todos os autores.
  * Faculta-se indicar apenas o primeiro autor, seguido da expressão latina em itálico ou redondo **et al.**:
  * Ex.: \`NONAKA, Ikujiro et al.\`

#### C. Autoria Institucional e Governamental
* Órgãos governamentais de administração direta entram sob o nome geográfico da respectiva jurisdição em letras maiúsculas:
  * Ex.: \`BRASIL. Ministério da Educação.\` / \`CÂMARA DOS DEPUTADOS.\`
* Entidades coletivas com denominação própria distintiva entram diretamente por seu nome oficial em letras maiúsculas:
  * Ex.: \`UNIVERSIDADE DE BRASÍLIA.\` / \`INSTITUTO BRASILEIRO DE INFORMAÇÃO EM CIÊNCIA E TECNOLOGIA.\`

---

### 3. Casos Especiais: Omissões, Séries e Meio Eletrônico

* **Ausência de Local ou Editor:**
  * Quando não foi possível identificar o local de publicação: utiliza-se \`[S.l.]\` (*sine loco*).
  * Quando a editora não é mencionada: utiliza-se \`[s.n.]\` (*sine nomine*).
  * Quando ambos faltam: utiliza-se \`[S.l.: s.n.]\`.
* **Abreviatura dos Meses:**
  * Na indicação de datas de periódicos e datas de acesso à Internet, todos os meses são abreviados nas três primeiras letras com ponto final (\`jan.\`, \`fev.\`, \`mar.\`, \`abr.\`, \`jun.\`, \`jul.\`, \`ago.\`, \`set.\`, \`out.\`, \`nov.\`, \`dez.\`), **com exceção absoluta do mês de MAIO**, que é grafado por extenso (\`maio\`).
* **Documentos Jurídicos e Legislativos:**
  * Seguem a estrutura: JURISDIÇÃO. Título da norma, número e data completa. Ementa oficial. *Veículo de publicação* (DOU), local, volume, data de publicação, seção e páginas.`,
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
      pergunta: "Micro-Checkpoint 3: ABNT NBR 6023 e Autoria Institucional",
      item: "De acordo com a norma ABNT NBR 6023, publicações de órgãos governamentais de administração direta devem ter sua entrada de autoria realizada pelo nome do órgão subordinado, omitindo-se a jurisdição geográfica correspondente.",
      gabarito: 'E',
      justificativa: "Errado! A entrada oficial de órgãos governamentais deve ser iniciada pelo nome geográfico da jurisdição que o subordina (ex: BRASIL. Congresso Nacional. Câmara dos Deputados).",
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
        focoPrincipal: 'Revisão profunda da NBR 6023: elementos de redes, novos formatos e flexibilização de quatro ou mais autores',
        figuraChave: 'Comitê Brasileiro de Documentação',
      },
    ],
    autores: [
      {
        id: 'aut-8-1-1',
        nome: 'ABNT / CB-014',
        ano: 2018,
        obraPrincipal: 'ABNT NBR 6023: Informação e documentação — Referências — Elaboração',
        ideiaChave: 'Padronização nacional de elementos essenciais e complementares para citações bibliográficas.',
        chipPegadinha: 'A NBR 6023 regula as referências no final do texto; quem regula as citações no corpo é a NBR 10520.',
      },
      {
        id: 'aut-8-1-2',
        nome: 'Antonio Agenor Briquet de Lemos',
        ano: 2000,
        obraPrincipal: 'Para uma história da normalização bibliográfica no Brasil',
        ideiaChave: 'Pioneirismo na transposição das normas da International Organization for Standardization (ISO 690) para o sistema normativo brasileiro.',
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
    ],
  },
};
