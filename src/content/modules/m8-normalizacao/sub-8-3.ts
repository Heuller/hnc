import type { ModuloFilho } from '../../../domain/types';

export const submodulo83: ModuloFilho = {
  id: 'sub-8-3',
  numero: '8.3',
  titulo: 'ABNT NBR 14724: Apresentação de Trabalhos Acadêmicos',
  descricaoCurta: 'A estrutura formal de teses, dissertações e monografias (elementos pré-textuais, textuais e pós-textuais), a distinção canônica entre Apêndice (autoria própria) e Anexo (autoria de terceiros), numeração progressiva de seções (NBR 6024), regras de margens, paginação e apresentação tabular (IBGE vs. ABNT).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro CB-014', 'Instituto Brasileiro de Geografia e Estatística (IBGE)', 'Júnia Lessa França'],
  alertasCebraspe: [
    'A MAIOR PEGADINHA DA NBR 14724: Apêndice vs. Anexo. Apêndice é o texto ou documento elaborado PELO PRÓPRIO AUTOR do trabalho (ex.: questionário aplicado, formulário de pesquisa, roteiro de entrevista); Anexo é o documento pré-existente elaborado POR TERCEIROS (ex.: texto de lei, laudo pericial, regimento interno). O Cebraspe inverte essas definições sistematicamente!',
    'Elementos Obrigatórios vs. Opcionais na parte Pré-Textual: Obrigatórios = Folha de Rosto (com ficha catalográfica no verso), Folha de Aprovação (obrigatória para teses e dissertações), Resumo na língua vernácula, Resumo em língua estrangeira e Sumário. Opcionais = Errata, Dedicatória, Agradecimentos, Epígrafe, Listas de Ilustrações, Listas de Tabelas, Siglas e Símbolos.',
    'Regra Estrita de Paginação: todas as folhas a partir da FOLHA DE ROSTO são CONTADAS na sequência numérica, mas o número da página só é IMPRESSO a partir da primeira folha da parte textual (INTRODUÇÃO), posicionado no canto superior direito a 2 cm da borda superior.',
    'Margens regulamentares da folha (para impressão no anverso): Margem Superior e Margem Esquerda = 3 cm; Margem Inferior e Margem Direita = 2 cm. Para anverso e verso, as margens externas e internas alternam-se.',
    'Espaçamento interlinear: 1,5 para o texto corrido; espaçamento SIMPLES para citações diretas longas (recuadas a 4 cm), notas de rodapé, referências bibliográficas, legendas de ilustrações e tabelas.',
    'Diferença entre Tabela (IBGE) e Quadro (ABNT): Tabelas apresentam prioritariamente dados numéricos/quantitativos, têm topo e base delimitados por traços horizontais e NÃO possuem traços verticais de fechamento lateral (são abertas dos lados); Quadros apresentam dados textuais/qualitativos e são totalmente fechados por linhas em todos os quatro lados.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Completa de Trabalhos Acadêmicos segundo a ABNT NBR 14724',
    colunas: ['Parte Estrutural', 'Elementos Constitutivos Obrigatórios', 'Elementos Constitutivos Opcionais', 'Regra Específica de Formatação e Paginação', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Parte Externa', 'Capa (com instituição, autor, título, subtítulo, local e ano)', 'Lombada (conforme NBR 12225)', 'Não é contada nem numerada na paginação do miolo', 'Considerar a capa como a primeira folha contada na paginação (FALSO: conta da folha de rosto).'],
      ['Elementos Pré-Textuais', 'Folha de rosto, Folha de aprovação, Resumo em português, Resumo em língua estrangeira, Sumário', 'Errata, Dedicatória, Agradecimentos, Epígrafe, Lista de ilustrações, tabelas, siglas e símbolos', 'Contados a partir da folha de rosto, mas NÃO exibem número de página impresso', 'Afirmar que o sumário é pós-textual ou opcional (FALSO: é pré-textual obrigatório).'],
      ['Elementos Textuais', 'Introdução, Desenvolvimento (seções e subseções numeradas - NBR 6024) e Conclusão', 'Nenhum (todos os elementos textuais são de redação compulsória)', 'Inicia a impressão física do número da página no canto superior direito (algarismos arábicos)', 'Dizer que a introdução não é numerada (FALSO: é a primeira página impressa).'],
      ['Elementos Pós-Textuais', 'Referências (conforme NBR 6023)', 'Glossário, Apêndice (próprio autor), Anexo (terceiros) e Índice (NBR 6034)', 'Continuam a numeração arábica sequencial do texto principal', 'Inverter apêndice (próprio autor) e anexo (terceiros), ou achar que anexo é obrigatório.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura Formal da ABNT NBR 14724

A norma **ABNT NBR 14724** (*Informação e Documentação — Trabalhos Acadêmicos — Apresentação*) padroniza a produção formal de teses de doutorado, dissertações de mestrado, trabalhos de conclusão de curso (TCC), monografias de especialização e relatórios de pesquisa:

\`\`\`mermaid
graph TD
    TRAB[Estrutura do Trabalho Acadêmico - NBR 14724] --> EXT[Parte Externa: Capa e Lombada]
    TRAB --> PRE[Elementos Pré-Textuais]
    TRAB --> TEX[Elementos Textuais: Introdução, Desenvolvimento, Conclusão]
    TRAB --> POS[Elementos Pós-Textuais: Referências, Apêndices, Anexos]
    PRE --> PRE_OB[Obrigatórios: Folha de Rosto, Aprovação, Resumos PT/EN, Sumário]
    PRE --> PRE_OP[Opcionais: Errata, Dedicatória, Agradecimentos, Epígrafe, Listas]
    POS --> POS_OB[Obrigatório: Referências - NBR 6023]
    POS --> POS_OP[Opcionais: Glossário, Apêndices, Anexos, Índice - NBR 6034]
\`\`\`

#### A Divisão Tripartite Padronizada:
1. **Elementos Pré-Textuais:** Antecedem o corpo da pesquisa, preparando e contextualizando o leitor.
2. **Elementos Textuais:** O núcleo substantivo do trabalho (a introdução teórica e problemática, o desenvolvimento com revisão e metodologia, e a conclusão/considerações finais).
3. **Elementos Pós-Textuais:** Complementam e enriquecem o texto após a conclusão.

---

### 2. Elementos Obrigatórios vs. Facultativos

O Cebraspe constrói com frequência assertivas exigindo distinguir quais elementos são de inclusão compulsória:

* **Pré-Textuais Obrigatórios:**
  * **Folha de Rosto:** No verso, deve conter a **Ficha Catalográfica (CIP)** elaborada por bibliotecário registrado no CRB.
  * **Folha de Aprovação:** Obrigatória em trabalhos submetidos a banca examinadora (teses e dissertações), contendo data de aprovação, assinaturas e titulações dos membros.
  * **Resumo na língua vernácula:** Em português, acompanhado das palavras-chave (NBR 6028).
  * **Resumo em língua estrangeira:** Usualmente em inglês (*abstract/keywords*).
  * **Sumário:** O último elemento pré-textual antes da Introdução (NBR 6027).
* **Pré-Textuais Opcionais:**
  * **Errata:** Folha avulsa inserida logo após a folha de rosto quando erros tipográficos substantivos são corrigidos após a impressão final.
  * **Dedicatória, Agradecimentos e Epígrafe:** Manifestações pessoais do autor. A epígrafe contém pensamento alheio e deve ser seguida da indicação de autoria.
  * **Listas Técnicas:** Lista de ilustrações (gráficos, fluxogramas, fotografias), Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos. Quando elaboradas, devem figurar em folhas próprias.
* **Pós-Textuais Obrigatórios:**
  * **Referências:** O único elemento pós-textual obrigatório da norma (elaborado segundo a NBR 6023).
* **Pós-Textuais Opcionais:**
  * **Glossário:** Lista em ordem alfabética de termos técnicos pouco conhecidos com suas respectivas definições.
  * **Apêndices:** Documentos elaborados pelo próprio autor.
  * **Anexos:** Documentos de autoria de terceiros.
  * **Índices:** Relações sistemáticas ou alfabéticas de assuntos e autores (NBR 6034).

---

### 3. A Distinção Canônica: Apêndice vs. Anexo

Esta é a distinção mais reiteradamente cobrada pela banca Cebraspe em provas de Biblioteconomia:

| Critério | Apêndice (NBR 14724) | Anexo (NBR 14724) |
| :--- | :--- | :--- |
| **Autoria Intelectual** | **Elaborado pelo PRÓPRIO AUTOR do trabalho.** | **Elaborado por TERCEIROS (entidades ou autores alheios).** |
| **Finalidade** | Complementar a argumentação com dados primários sem sobrecarregar o corpo do texto. | Servir de fundamentação, ilustração ou comprovação fática/documental pré-existente. |
| **Exemplos Típicos** | Questionário aplicado, roteiro de entrevista, transcrição bruta de dados coletados. | Cópia de Lei, parecer de agência reguladora, laudo pericial, estatuto partidário. |
| **Identificação Formal** | Letras maiúsculas consecutivas, travessão e título em caixa alta/baixa. | Letras maiúsculas consecutivas, travessão e título original da peça. |
| **Exemplo Formatado** | \`APÊNDICE A – Roteiro da entrevista com bibliotecários da Câmara\` | \`ANEXO A – Regimento Interno da Câmara dos Deputados\` |

* *Nota de Esgotamento das Letras:* Quando se esgotam as 26 letras do alfabeto, utilizam-se letras maiúsculas dobradas: \`APÊNDICE AA\`, \`APÊNDICE AB\`.

---

### 4. Regras Gráficas de Formatação, Margens e Paginação

* **Formato e Margens (Impressão no Anverso / Frente da Folha):**
  * Papel branco formato A4 ($210 \\times 297$ mm).
  * **Margem Superior = 3,0 cm**
  * **Margem Esquerda = 3,0 cm** (espaço ampliado para permitir encadernação e furação)
  * **Margem Inferior = 2,0 cm**
  * **Margem Direita = 2,0 cm**
* **Tipografia e Espaçamento:**
  * Fonte uniforme recomendada (Arial ou Times New Roman), tamanho 12 para todo o texto.
  * Tamanho menor (corpo 10 ou 11) reservado exclusivamente para: citações diretas longas recuadas, notas de rodapé explicativas, paginação e legendas/fontes de ilustrações e tabelas.
  * Espaçamento entre linhas de **1,5** para o texto corrido.
  * Espaçamento **simples** para: citações longas recuadas, notas, referências bibliográficas ao final, legendas de figuras e natureza do trabalho na folha de rosto.
* **A Regra de Ouro da Paginação (Contagem vs. Impressão):**
  1. A contagem sequencial das páginas inicia-se formalmente na **Folha de Rosto** (a capa NÃO é contada nem numerada).
  2. Todas as folhas pré-textuais são contadas na sequência matemática, mas **nenhum número é impresso nelas**.
  3. O número da página só deve figurar fisicamente **impresso a partir da primeira folha da parte textual (a INTRODUÇÃO)**.
  4. A numeração é impressa no **canto superior direito da folha**, em algarismos arábicos, a exatamente 2 cm da borda superior.

---

### 5. Numeração Progressiva (NBR 6024) e Apresentação Tabular (IBGE vs. ABNT)

#### A. Numeração Progressiva das Seções (ABNT NBR 6024)
* As seções do documento são numeradas em algarismos arábicos até o limite recomendado de 5 níveis (seções quinárias):
  * Primária: \`1 INTRODUÇÃO\`
  * Secundária: \`1.1 OBJETIVOS\`
  * Terciária: \`1.1.1 Objetivos específicos\`
  * Quaternária: \`1.1.1.1 Detalhamento\`
* *Regra de Pontuação da NBR 6024:* **NÃO se utiliza ponto, hífen ou travessão** entre o número da seção e o seu respectivo título (ex.: grafa-se \`1 INTRODUÇÃO\`, e NUNCA \`1. INTRODUÇÃO\` ou \`1 - INTRODUÇÃO\`).
* Títulos sem numeração (agrupados no centro): errata, agradecimentos, resumos, sumário, referências e anexos.

#### B. Apresentação de Tabelas (IBGE) vs. Quadros (ABNT)
* **Tabelas (Normas de Apresentação Tabular do IBGE):**
  * Destinam-se a apresentar informações **quantitativas e dados numéricos**.
  * São delimitadas no topo e na base por **linhas horizontais**; linhas horizontais internas separam o cabeçalho do conteúdo.
  * **Traços Verticais de Fechamento Lateral são PROIBIDOS:** As laterais esquerda e direita de uma tabela permanecem **sempre abertas**.
* **Quadros (ABNT NBR 14724):**
  * Destinam-se a apresentar informações **qualitativas, descritivas e textuais**.
  * São **fechados lateralmente por linhas verticais em todos os quatro lados**, formando uma grade completa.`,
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
      pergunta: 'Micro-Checkpoint 3: Estrutura do Sumário conforme ABNT NBR 6027',
      item: 'Segundo a ABNT NBR 6027, os elementos pré-textuais, como a dedicatória, o agradecimento e a lista de abreviaturas, devem constar obrigatoriamente no sumário do trabalho acadêmico.',
      gabarito: 'E',
      justificativa: 'Errado! Os elementos pré-textuais NÃO devem constar no sumário. O sumário subordina exclusivamente a enumeração das divisões textuais e pós-textuais (NBR 6027:2012 item 4.2).',
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
      {
        id: 'tl-8-3-3',
        periodo: '2012',
        disciplina: 'NBR 6024 (Numeração Progressiva)',
        focoPrincipal: 'Padronização da numeração de seções sem pontuação entre o número e o título',
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
      {
        id: 'peg-8-3-3',
        afirmacao: 'De acordo com a ABNT NBR 6024, deve-se obrigatoriamente inserir um ponto final após o número indicativo de uma seção primária e antes do título correspondente (exemplo: 1. INTRODUÇÃO).',
        gabarito: 'E',
        porQue: 'A NBR 6024 veda expressamente o uso de ponto, hífen ou qualquer sinal entre o número da seção e o seu título. O correto é "1 INTRODUÇÃO".',
      },
    ],
  },
};
