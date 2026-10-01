import type { ModuloFilho } from '../../../domain/types';

export const submodulo83: ModuloFilho = {
  id: 'sub-8-3',
  numero: '8.3',
  titulo: 'ABNT NBR 14724: Apresentação de Trabalhos Acadêmicos',
  descricaoCurta: 'A estrutura formal de teses, dissertações e monografias (elementos pré-textuais, textuais e pós-textuais), a distinção canônica entre Apêndice (autoria própria) e Anexo (autoria de terceiros), regras de margens, paginação e espaçamento.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro CB-014'],
  alertasCebraspe: [
    'A MAIOR PEGADINHA DA NBR 14724: Apêndice vs. Anexo. Apêndice é o documento elaborado PELO PRÓPRIO AUTOR do trabalho (ex.: questionário, roteiro de entrevista); Anexo é o documento elaborado POR TERCEIROS (ex.: texto de lei, laudo pericial, estatuto). O Cebraspe inverte essas definições sistematicamente!',
    'Elementos Obrigatórios vs. Opcionais na parte Pré-Textual: Obrigatórios = Folha de Rosto, Folha de Aprovação (quando exigida pela instituição), Resumo na língua vernácula, Resumo em língua estrangeira e Sumário. Opcionais = Errata, Dedicatória, Agradecimentos, Epígrafe, Listas de Ilustrações, Tabelas e Siglas.',
    'Regra de Paginação: todas as folhas a partir da FOLHA DE ROSTO são CONTADAS, mas o número da página só é IMPRESSO a partir da primeira folha da parte textual (INTRODUÇÃO), no canto superior direito a 2 cm da borda.',
    'Margens do trabalho (no anverso/frente): Superior e Esquerda com 3 cm; Inferior e Direita com 2 cm.',
    'Espaçamento interlinear: 1,5 no texto corrido; espaçamento SIMPLES para citações longas (recuadas), notas de rodapé, referências bibliográficas, legendas de ilustrações e tabelas.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Completa de Trabalhos Acadêmicos segundo a ABNT NBR 14724',
    colunas: ['Parte Estrutural', 'Elementos Constitutivos Obrigatórios', 'Elementos Constitutivos Opcionais', 'Regra Específica de Formatação'],
    linhas: [
      ['Parte Externa', 'Capa (com instituição, autor, título, local e ano)', 'Lombada (conforme NBR 12225)', 'Não é contada nem numerada na paginação do miolo'],
      ['Elementos Pré-Textuais', 'Folha de rosto, Folha de aprovação, Resumo em português, Resumo em língua estrangeira, Sumário', 'Errata, Dedicatória, Agradecimentos, Epígrafe, Lista de ilustrações, tabelas, abreviaturas e símbolos', 'Contados a partir da folha de rosto, mas NÃO exibem número de página impresso'],
      ['Elementos Textuais', 'Introdução, Desenvolvimento (seções e subseções numeradas - NBR 6024) e Conclusão', 'Nenhum (todos os textuais são de redação compulsória)', 'Inicia a impressão do número da página no canto superior direito (algarismos arábicos)'],
      ['Elementos Pós-Textuais', 'Referências (conforme NBR 6023)', 'Glossário, Apêndice (próprio autor), Anexo (terceiros) e Índice (NBR 6034)', 'Continuam a numeração arábica sequencial do texto principal'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura Formal da NBR 14724

A norma **ABNT NBR 14724** (*Informação e Documentação — Trabalhos Acadêmicos — Apresentação*, presente em nosso acervo em \`ABNT/NBR14724.pdf\`) padroniza a produção formal de teses de doutorado, dissertações de mestrado, trabalhos de conclusão de curso (TCC) e monografias científicas:

#### A Divisão Tripartite Padronizada:
1. **Elementos Pré-Textuais:** Antecedem o corpo da pesquisa, preparando e contextualizando o leitor.
2. **Elementos Textuais:** O núcleo substantivo do trabalho (a introdução teórica, o desenvolvimento metodológico e a conclusão).
3. **Elementos Pós-Textuais:** Complementam e enriquecem o texto após a conclusão.

---

### 2. Elementos Obrigatórios vs. Facultativos

O Cebraspe frequentemente constrói itens cobrando a identificação de quais elementos são obrigatórios:

* **Pré-Textuais Obrigatórios:**
  * Folha de rosto (com o anverso e o verso contendo a Ficha Catalográfica / CIP);
  * Folha de aprovação (obrigatória para teses e dissertações);
  * Resumo na língua vernácula (em português, com palavras-chave);
  * Resumo em língua estrangeira (*abstract*, com *keywords*);
  * Sumário (a última folha dos pré-textuais).
* **Pré-Textuais Opcionais:**
  * Errata (folha avulsa inserida logo após a folha de rosto);
  * Dedicatória, Agradecimentos e Epígrafe;
  * Lista de ilustrações, Lista de tabelas, Lista de abreviaturas e siglas, Lista de símbolos.
* **Pós-Textuais Obrigatórios:**
  * **Referências:** O único elemento pós-textual obrigatório da norma.
* **Pós-Textuais Opcionais:**
  * Glossário, Apêndices, Anexos e Índices.

---

### 3. A Distinção Canônica: Apêndice vs. Anexo

A confusão entre apêndice e anexo é uma das armadilhas mais antigas e frequentes da banca Cebraspe:
* **Apêndice (Autoria Própria):**
  * Elemento pós-textual **elaborado pelo próprio autor do trabalho** para complementar sua argumentação sem sobrecarregar o texto principal.
  * *Identificação:* Letras maiúsculas consecutivas, travessão e respectivo título.
  * *Exemplo:* \`APÊNDICE A – Formulário de pesquisa aplicado aos servidores da Câmara dos Deputados\`.
* **Anexo (Autoria de Terceiros):**
  * Elemento pós-textual **NÃO elaborado pelo autor**, consistindo em documentos pré-existentes de terceiros incorporados para fundamentação, ilustração ou comprovação jurídica/histórica.
  * *Identificação:* Letras maiúsculas consecutivas, travessão e título original.
  * *Exemplo:* \`ANEXO A – Cópia integral do Regimento Interno da Câmara dos Deputados\`.

---

### 4. Regras Gráficas de Formatação e Paginação

* **Formato do Papel e Margens:**
  * Papel branco formato A4 ($210 \\times 297$ mm).
  * *Para impressão apenas no anverso (frente da folha):*
    * Margem Esquerda e Margem Superior = **3 cm**;
    * Margem Direita e Margem Inferior = **2 cm**.
* **Fonte e Espaçamento:**
  * Fonte padronizada em todo o trabalho (tamanho 12 para o corpo do texto).
  * Tamanho menor (corpo 10 ou 11) reservado para: citações longas de mais de 3 linhas, notas de rodapé, paginação e legendas de figuras e tabelas.
  * Espaçamento entre linhas de **1,5** no texto corrido.
  * Espaçamento **simples** para: citações longas, notas, referências ao final do trabalho e legendas.
* **Regra de Contagem e Impressão da Paginação:**
  * A contagem das folhas inicia-se na **Folha de Rosto** (a capa não é contada nem numerada).
  * As páginas pré-textuais são todas contadas, mas **nenhum número é impresso nelas**.
  * A numeração só é fisicamente **impressa a partir da primeira folha da INTRODUÇÃO**, no canto superior direito, em algarismos arábicos a 2 cm da borda superior.`,
  checkpoints: [
    {
      id: 'cp-8-3-1',
      pergunta: 'Micro-Checkpoint 1: Diferença entre Apêndice e Anexo na NBR 14724',
      item: 'Nos termos da ABNT NBR 14724, denomina-se anexo o documento complementar elaborado pelo próprio autor da monografia, enquanto apêndice designa o documento de autoria de terceiros incluído para comprovação.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverteu os conceitos: APÊNDICE é o documento elaborado pelo PRÓPRIO AUTOR; ANEXO é o documento de autoria de TERCEIROS.',
    },
    {
      id: 'cp-8-3-2',
      pergunta: 'Micro-Checkpoint 2: Regra de Paginação de Trabalhos Acadêmicos',
      item: 'Conforme a NBR 14724, todas as folhas do trabalho acadêmico a partir da folha de rosto são contadas, porém a numeração só deve figurar impressa a partir da primeira folha da parte textual.',
      gabarito: 'C',
      justificativa: 'Correto! A contagem começa na folha de rosto, mas a impressão dos números em algarismos arábicos ocorre apenas na introdução.',
    },
      {
      id: 'cp-8-3-3',
      pergunta: "Micro-Checkpoint 3: Estrutura do Sumário conforme ABNT NBR 6027",
      item: "Segundo a ABNT NBR 6027, os elementos pré-textuais, como a dedicatória, o agradecimento e a lista de abreviaturas, devem constar obrigatoriamente no sumário do trabalho acadêmico.",
      gabarito: 'E',
      justificativa: "Errado! Os elementos pré-textuais NÃO devem constar no sumário. O sumário subordina exclusivamente a enumeração das divisões textuais e pós-textuais (NBR 6027:2012 item 4.2).",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-3-1',
        periodo: '2002',
        disciplina: 'Primeira Edição da NBR 14724',
        focoPrincipal: 'Unificação dos padrões de apresentação de teses, dissertações e monografias no país',
        figuraChave: 'ABNT / Comitê CB-014',
      },
      {
        id: 'tl-8-3-2',
        periodo: '2011 (Vigente)',
        disciplina: 'Revisão da NBR 14724',
        focoPrincipal: 'Consolidação da estrutura pré-textual, textual e pós-textual, regras estritas de paginação e distinção cabal entre apêndice e anexo',
        figuraChave: 'ABNT CB-014',
      },
    ],
    autores: [
      {
        id: 'aut-8-3-1',
        nome: 'ABNT CB-014',
        ano: 2011,
        obraPrincipal: 'ABNT NBR 14724: Informação e documentação — Trabalhos acadêmicos — Apresentação',
        ideiaChave: 'Divisão tripartite pré-textual, textual e pós-textual; diferenciação de apêndice e anexo.',
        chipPegadinha: 'Memorize: Apêndice = Autor do trabalho; Anexo = Alheio (terceiros).',
      },
      {
        id: 'aut-8-3-2',
        nome: 'IBGE / Diretoria de Geociências',
        ano: 1993,
        obraPrincipal: 'Normas de Apresentação Tabular',
        ideiaChave: 'Padronização visual e semântica de tabelas (topo e base com traços horizontais; sem fechamento lateral vertical).',
        chipPegadinha: 'Tabelas seguem normas do IBGE (lados abertos); quadros seguem a ABNT (lados fechados).',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-3-1',
        afirmacao: 'O sumário e o resumo na língua vernácula são classificados como elementos pré-textuais opcionais na elaboração de teses e dissertações acadêmicas.',
        gabarito: 'E',
        porQue: 'Tanto o sumário quanto o resumo em língua portuguesa são elementos pré-textuais OBRIGATÓRIOS pela NBR 14724.',
      },
      {
        id: 'peg-8-3-2',
        afirmacao: 'Na formatação gráfica da folha de um trabalho acadêmico, as margens esquerda e superior devem ser configuradas com 2 cm, e as margens direita e inferior com 3 cm.',
        gabarito: 'E',
        porQue: 'As medidas são inversas: Esquerda e Superior = 3 cm (para permitir encadernação); Direita e Inferior = 2 cm.',
      },
    ],
  },
};
