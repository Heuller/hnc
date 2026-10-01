import type { ModuloFilho } from '../../../domain/types';

export const submodulo94: ModuloFilho = {
  id: 'sub-9-4',
  numero: '9.4',
  titulo: 'Estudos Métricos da Informação: Leis Bibliométricas, Fator de Impacto e Índice h',
  descricaoCurta: 'Fronteiras entre Bibliometria, Cientometria e Informetria, as três leis clássicas (Bradford - dispersão de periódicos; Lotka - quadrado inverso de autores; Zipf - menor esforço de palavras), Fator de Impacto (JCR/Garfield) e o Índice h de Hirsch.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Samuel C. Bradford', 'Alfred J. Lotka', 'George K. Zipf', 'Eugene Garfield', 'Jorge E. Hirsch', 'Alan Pritchard'],
  alertasCebraspe: [
    'As Três Leis Bibliométricas e suas associações inegociáveis: 1. Lei de Bradford = PRODUTIVIDADE E DISPERSÃO DE PERIÓDICOS (núcleo e zonas 1:n:n²); 2. Lei de Lotka = PRODUTIVIDADE DE AUTORES (regra do quadrado inverso 1/n²); 3. Lei de Zipf = FREQUÊNCIA E OCORRÊNCIA DE PALAVRAS EM TEXTOS (menor esforço, r x f = C). O Cebraspe adora trocar qual autor mede o quê!',
    'Fator de Impacto (Eugene Garfield - JCR / Web of Science): calcula a média de citações recebidas no ano corrente por artigos publicados por um periódico nos dois anos anteriores. O denominador do cálculo considera apenas "artigos citáveis" (pesquisas originais e revisões), e NÃO todos os tipos de documentos (cartas e editoriais são excluídos do denominador).',
    'Índice h (Jorge Hirsch, 2005): um pesquisador tem índice h se h de seus trabalhos têm pelo menos h citações cada um. Limitação cobrada em prova (UNEAL 2026): o índice h NÃO é uma métrica universal justa para comparar cientistas em diferentes estágios de carreira nem pesquisadores de áreas distintas com dinâmicas de citação desiguais.',
    'Diferenciação conceitual da área métrica: Bibliometria (documentos impressos e publicações); Cientometria (ciência como atividade sociopolítica macro); Informetria (qualquer informação em qualquer suporte e canal, inclusive informal); Altmetria (métricas alternativas de impacto na Web social: downloads, tweets, menções).',
  ],
  quadroComparativo: {
    titulo: 'As Três Leis Bibliométricas Fundamentais e suas Aplicações em Bibliotecas',
    colunas: ['Lei Bibliométrica', 'Objeto de Mensuração', 'Fórmula / Proporção Matemática', 'Aplicação Prática em Bibliotecas e Concursos'],
    linhas: [
      ['Lei de Bradford (1934)', 'Periódicos científicos e dispersão de artigos sobre um assunto', 'Núcleo e zonas sucessivas na proporção $1 : n : n^2$', 'Seleção e renovação de assinaturas de revistas: identifica o núcleo de periódicos essenciais'],
      ['Lei de Lotka (1926)', 'Produtividade científica de autores/pesquisadores', 'Regra do quadrado inverso: $1/n^2$ (poucos produzem muito)', 'Identificação de pesquisadores líderes e avaliação de programas de pós-graduação'],
      ['Lei de Zipf (1949)', 'Frequência de ocorrência de palavras em textos', 'Produto constante do ranking pela frequência: $r \\times f = C$', 'Indexação automática e mineração de textos: identificação da zona de palavras com valor semântico'],
    ],
  },
  teoriaDensaMarkdown: `### 1. As Disciplinas Métricas da Informação

O termo **Bibliometria** foi cunhado formalmente por **Paul Otlet** em 1934 em seu *Traité de Documentation* e popularizado no mundo anglo-saxão por **Alan Pritchard** em 1969. A área expandiu-se em quatro ramificações complementares:

* **Bibliometria:** Aplicação de métodos matemáticos e estatísticos a livros, periódicos, artigos e outros suportes documentais registrados.
* **Cientometria (*Scientometrics*):** Proposta por Vasily Nalimov e Derek de Solla Price; estuda os aspectos quantitativos da ciência como instituição social, apoiando governos na formulação de **políticas científicas e tecnológicas**.
* **Informetria (*Informetrics*):** Proposta por Otto Nacke em 1979; possui escopo mais abrangente, medindo o fluxo da informação em qualquer forma, suporte e contexto comunicativo (formal ou informal).
* **Altmetria (*Altmetrics*):** Conjunto de métricas alternativas que mensuram a atenção, compartilhamento e engajamento online de produtos científicos em mídias sociais (Twitter/X, Mendeley, blogs, Wikipédia, menções jornalísticas), complementando as citações tradicionais.

---

### 2. As Três Leis Clássicas da Bibliometria

#### A. Lei de Bradford (1934) — Dispersão de Periódicos
Samuel Clement Bradford estudou a distribuição de artigos sobre geofísica e lubrificação em revistas científicas:
* Se os periódicos de um domínio forem listados em ordem decrescente do número de artigos que publicam sobre o assunto, eles se distribuem em um **núcleo (*core*) de revistas altamente especializadas** e zonas sucessivas contendo o mesmo número total de artigos que o núcleo.
* O número de periódicos nas zonas cresce em **progressão geométrica**:
  $$1 : n : n^2 : n^3 ...$$
* *Aplicação na Câmara dos Deputados:* Permite ao bibliotecário adquirir apenas o "núcleo de Bradford" de revistas de Direito Constitucional, garantindo a cobertura da maior parte dos artigos de ponta com o menor custo orçamentário.

#### B. Lei de Lotka (1926) — Produtividade de Autores
Alfred J. Lotka formulou a **Lei do Quadrado Inverso**:
* O número de autores que publicam $n$ artigos em um determinado campo é inversamente proporcional a $n^2$:
  $$A_n = \\frac{A_1}{n^2}$$
* *Consequência empírica:* Cerca de **60% dos autores publicam apenas um único trabalho** ao longo da vida; uma minoria elitizada (em torno de 5% a 10%) é responsável pela produção da grande maioria dos artigos da disciplina.

#### C. Lei de Zipf (1949) — O Menor Esforço da Linguagem
O linguista George Kingsley Zipf analisou textos em linguagem natural e constatou que os humanos tendem a usar o menor esforço verbal possível:
* Se as palavras de um texto longo forem ordenadas por frequência decrescente, o produto de sua ordem no ranking ($r$) pela sua frequência ($f$) é constante:
  $$r \\times f = C$$
* **Ponto de Transição de Goffman (Zona de Indexação):**
  * Palavras no topo do ranking têm frequência altíssima, mas valor informativo nulo (*stop words*: de, a, o, em, que);
  * Palavras na base do ranking aparecem apenas uma vez (*hapax legomena*), sendo termos acidentais;
  * Os melhores termos para **indexação e representação do assunto** situam-se na **faixa intermediária de frequência**.

---

### 3. Indicadores de Impacto e Prestígio Científico

#### A. Fator de Impacto (*Impact Factor - IF*) de Eugene Garfield
Criado no âmbito do *Institute for Scientific Information* (ISI) e publicado anualmente no **Journal Citation Reports (JCR / Web of Science)**:
$$\\text{Fator de Impacto (Ano X)} = \\frac{\\text{Citações recebidas no Ano X a artigos publicados nos Anos (X-1) e (X-2)}}{\\text{Total de artigos citáveis publicados nos Anos (X-1) e (X-2)}}$$
* *Atenção Cebraspe:* Mede o impacto do **periódico**, e não de um pesquisador isolado. O denominador inclui apenas artigos citáveis (exclui notas editoriais e cartas).

#### B. O Índice h de Jorge Hirsch (2005)
Publicado pelo físico Jorge Hirsch no PNAS (artigo clássico presente em nosso acervo em \`Comunicação científica, Ciência Aberta e métricas/hirsch-2005...\`):
* **Definição Canônica:** Um pesquisador tem índice $h$ se $h$ de seus $N$ trabalhos tiverem pelo menos $h$ citações cada um, e os outros $(N - h)$ trabalhos tiverem $\\le h$ citações cada um.
* *Exemplo:* Um autor com índice $h = 25$ possui 25 artigos que receberam no mínimo 25 citações cada um.
* **Vantagens:** Não é distorcido por um único artigo amplamente citado nem pela publicação massiva de artigos medíocres nunca citados.
* **Limitações:** Prejudica jovens pesquisadores e favorece cientistas sêniores (pois citações acumulam com os anos); varia enormemente entre áreas do saber (medicina e física têm índices $h$ muito superiores à matemática e às ciências sociais).`,
  checkpoints: [
    {
      id: 'cp-9-4-1',
      pergunta: 'Micro-Checkpoint 1: Associação das Leis Bibliométricas',
      item: 'A lei de Lotka estabelece que a distribuição de artigos científicos em periódicos organiza-se em um núcleo de revistas dedicadas e zonas sucessivas que crescem em progressão geométrica.',
      gabarito: 'E',
      justificativa: 'Errado! Essa definição refere-se à LEI DE BRADFORD (dispersão de periódicos). A Lei de Lotka trata da produtividade de autores segundo a regra do quadrado inverso.',
    },
    {
      id: 'cp-9-4-2',
      pergunta: 'Micro-Checkpoint 2: Aplicação do Índice h',
      item: 'O índice h, formulado por Jorge Hirsch, caracteriza-se por quantificar conjuntamente a produtividade e o impacto das publicações de um pesquisador, baseando-se no número de artigos que atingiram determinado patamar de citações.',
      gabarito: 'C',
      justificativa: 'Correto! O índice h sintetiza volume de produção com relevância/citação acumulada.',
    },
      {
      id: 'cp-9-4-3',
      pergunta: "Micro-Checkpoint 3: Vias Dourada, Verde e Diamante do Acesso Aberto",
      item: "Na tipologia do Acesso Aberto, a 'Via Verde' designa a publicação original em periódico que não cobra taxas de processamento de artigos (APC) nem do leitor nem do autor.",
      gabarito: 'E',
      justificativa: "Errado! A via que não cobra taxas de ninguém é a 'Via Diamante' (ou Platina). A 'Via Verde' consiste no autoarquivamento de pré-prints ou pós-prints pelo próprio autor em repositórios institucionais abertos.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-4-1',
        periodo: '1926',
        disciplina: 'Lei de Lotka',
        focoPrincipal: 'Publicação da lei do quadrado inverso da produtividade de autores',
        figuraChave: 'Alfred J. Lotka',
      },
      {
        id: 'tl-9-4-2',
        periodo: '1934',
        disciplina: 'Lei de Bradford',
        focoPrincipal: 'Formulação da lei da dispersão de periódicos em zonas concêntricas',
        figuraChave: 'Samuel C. Bradford',
      },
      {
        id: 'tl-9-4-3',
        periodo: '1949',
        disciplina: 'Lei de Zipf',
        focoPrincipal: 'Sistematização da lei do menor esforço da linguagem e frequência de vocábulos',
        figuraChave: 'George Kingsley Zipf',
      },
      {
        id: 'tl-9-4-4',
        periodo: '1963 / 2005',
        disciplina: 'Fator de Impacto e Índice h',
        focoPrincipal: 'Criação do Fator de Impacto por Eugene Garfield e formulação do Índice h por Jorge Hirsch',
        figuraChave: 'Eugene Garfield e Jorge E. Hirsch',
      },
    ],
    autores: [
      {
        id: 'aut-9-4-1',
        nome: 'Samuel C. Bradford',
        ano: 1934,
        obraPrincipal: 'Sources of information on specific subjects',
        ideiaChave: 'Dispersão de periódicos: núcleo (core) e zonas geométricas 1:n:n².',
        chipPegadinha: 'Bradford trata de periódicos e artigos, NÃO de autores ou palavras.',
      },
      {
        id: 'aut-9-4-2',
        nome: 'Alfred J. Lotka',
        ano: 1926,
        obraPrincipal: 'The frequency distribution of scientific productivity',
        ideiaChave: 'Produtividade de autores: regra do quadrado inverso 1/n².',
        chipPegadinha: 'Lotka mede autoria individual e produção acumulada de cientistas.',
      },
      {
        id: 'aut-9-4-3',
        nome: 'Jorge E. Hirsch',
        ano: 2005,
        obraPrincipal: 'An index to quantify an individual\'s scientific research output',
        ideiaChave: 'Índice h: h artigos com pelo menos h citações; equilibra quantidade e impacto.',
        chipPegadinha: 'Não serve para comparar pesquisadores de áreas distintas.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-4-1',
        afirmacao: 'O cálculo do fator de impacto de um periódico no Journal Citation Reports (JCR) inclui no denominador todos os tipos de documentos publicados pela revista, tais como resenhas, cartas e editoriais.',
        gabarito: 'E',
        porQue: 'Essa pegadinha caiu na UNEAL 2026! O denominador considera apenas "itens citáveis" (artigos de pesquisa e revisões), excluindo cartas e editoriais.',
      },
      {
        id: 'peg-9-4-2',
        afirmacao: 'Na lei de Zipf, as palavras que apresentam maior frequência de ocorrência em um texto longo são exatamente aquelas que possuem maior especificidade e relevância para a indexação de assuntos.',
        gabarito: 'E',
        porQue: 'Palavras de altíssima frequência são preposições, artigos e conjunções (stop words sem valor substantivo). As palavras ideais de indexação estão na zona intermediária de frequência.',
      },
    ],
  },
};
