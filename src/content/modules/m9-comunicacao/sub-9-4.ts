import type { ModuloFilho } from '../../../domain/types';

export const submodulo94: ModuloFilho = {
  id: 'sub-9-4',
  numero: '9.4',
  titulo: 'Estudos Métricos da Informação: Leis Bibliométricas, Fator de Impacto e Índice h',
  descricaoCurta: 'Fronteiras entre Bibliometria, Cientometria, Informetria e Altmetria, as três leis clássicas (Bradford, Lotka e Zipf), indicadores de citação (Fator de Impacto, SJR, CiteScore), Índice h de Hirsch, Qualis-CAPES, Declaração DORA e Manifesto de Leiden.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Samuel C. Bradford', 'Alfred J. Lotka', 'George K. Zipf', 'Eugene Garfield', 'Jorge E. Hirsch', 'Alan Pritchard', 'Derek de Solla Price'],
  alertasCebraspe: [
    'As Três Leis Bibliométricas e suas associações inegociáveis: 1. Lei de Bradford = PRODUTIVIDADE E DISPERSÃO DE PERIÓDICOS (núcleo e zonas 1 : n : n²); 2. Lei de Lotka = PRODUTIVIDADE DE AUTORES (regra do quadrado inverso 1/n²); 3. Lei de Zipf = FREQUÊNCIA E OCORRÊNCIA DE PALAVRAS EM TEXTOS (menor esforço, r x f = C). O Cebraspe adora trocar qual autor mede o quê!',
    'Fator de Impacto (Eugene Garfield - JCR / Web of Science): calcula a média de citações recebidas no ano corrente por artigos publicados por um periódico nos dois anos anteriores. O denominador do cálculo considera apenas "artigos citáveis" (pesquisas originais e revisões), e NÃO todos os tipos de documentos (cartas e editoriais são excluídos do denominador).',
    'Índice h (Jorge Hirsch, 2005): um pesquisador tem índice h se h de seus trabalhos têm pelo menos h citações cada um. Limitação cobrada em prova (UNEAL 2026 e Cebraspe): o índice h NÃO é uma métrica justa para comparar cientistas em diferentes estágios de carreira nem pesquisadores de áreas distintas com dinâmicas de citação desiguais.',
    'Diferenciação conceitual da área métrica: Bibliometria (documentos impressos e publicações); Cientometria (ciência como atividade sociopolítica macro); Informetria (qualquer informação em qualquer suporte e canal, inclusive informal); Altmetria (métricas alternativas de impacto na Web social: downloads, tweets, menções).',
    'Declaração DORA (2012) e Manifesto de Leiden (2015): documentos canônicos internacionais que condenam enfaticamente o uso do Fator de Impacto do periódico como substituto da avaliação da qualidade do pesquisador individual ou de artigos específicos.',
    'Vias do Acesso Aberto: a Via Diamante (ou Platina) não cobra taxas de ninguém (nem leitores nem autores via APC), sendo subsidiada por instituições públicas/acadêmicas; a Via Verde é o autoarquivamento em repositórios; e a Via Dourada publica em revistas abertas com ou sem APC.',
  ],
  quadroComparativo: {
    titulo: 'As Três Leis Bibliométricas Clássicas e Aplicações Estratégicas em Bibliotecas',
    colunas: ['Lei Bibliométrica', 'Objeto de Mensuração', 'Fórmula / Proporção Matemática', 'Aplicação Prática no Parlamento e em Concursos'],
    linhas: [
      ['Lei de Bradford (1934)', 'Periódicos científicos e dispersão de artigos sobre um assunto', 'Núcleo e zonas sucessivas na proporção $1 : n : n^2$', 'Seleção, aquisição racional e desbaste de coleções: identifica o núcleo de periódicos essenciais'],
      ['Lei de Lotka (1926)', 'Produtividade científica de autores/pesquisadores', 'Regra do quadrado inverso: $A_n = A_1 / n^2$', 'Identificação de pesquisadores líderes e avaliação de programas de pós-graduação'],
      ['Lei de Zipf (1949)', 'Frequência de ocorrência de palavras em textos', 'Produto constante do ranking pela frequência: $r \\times f = C$', 'Indexação automática e mineração de textos: identificação da zona de palavras com valor semântico'],
    ],
  },
  teoriaDensaMarkdown: `### 1. As Disciplinas Métricas da Informação

O campo dos estudos métricos desenvolveu-se historicamente para quantificar a produção, a circulação e o uso da informação registrada, ramificando-se em quatro subdisciplinas com fronteiras epistemológicas bem definidas pela literatura e cobradas pelo Cebraspe:

\`\`\`tree
TITLE: Disciplinas Métricas da Informação e Suas Fronteiras
- Informetria (Otto Nacke, 1979) | Superconjunto: mensuração de qualquer fluxo informacional (formal e informal) em qualquer suporte
  - Cientometria (Nalimov & Price, 1969) | Estudo quantitativo da ciência como atividade social e insumo para políticas científicas (Science Policy)
  - Bibliometria (Otlet, 1934 / Pritchard, 1969) | Aplicação matemática e estatística sobre livros, periódicos, artigos e documentos registrados
    - Webometria / Cibermetria (Almind & Ingwersen, 1997) | Análise quantitativa de nós, sítios eletrônicos e redes de hiperlinks na World Wide Web
    - Altmetria (Jason Priem et al., 2010) | Métricas de atenção e impacto social imediato em redes sociais, blogs, Wikipédia e políticas públicas
\`\`\`

* **Bibliometria:** Termo cunhado por **Paul Otlet** em 1934 (*Traité de Documentation*) e consolidado no ocidente por **Alan Pritchard** em 1969 (*Statistical bibliography or bibliometrics?*). Aplica técnicas estatísticas e matemáticas a livros, artigos, periódicos e suportes físicos/digitais registrados.
* **Cientometria (*Scientometrics*):** Proposta pelo matemático russo **Vasily Nalimov** e disseminada pelo historiador da ciência **Derek de Solla Price**. Trata dos aspectos quantitativos da ciência como instituição social e processo econômico, servindo de subsídio direto para governos na elaboração de **políticas públicas científicas e tecnológicas (*Science Policy*)**.
* **Informetria (*Informetrics*):** Proposta pelo alemão **Otto Nacke** em 1979 e desenvolvida por Egghe e Rousseau. É o ramo mais abrangente de todos, pois investiga o fluxo e as propriedades matemáticas da informação em **qualquer forma, canal, suporte e contexto comunicativo**, abrangendo tanto os registros formais quanto a comunicação informal humana.
* **Altmetria (*Altmetrics*):** Movimento iniciado em 2010 pelo manifesto de **Jason Priem, Dario Taraborelli, Paul Groth e Cameron Neylon**. Mensura a atenção, o engajamento e a circulação social de produtos de pesquisa na Web social (Twitter/X, Facebook, Mendeley, Zotero, blogs científicos, Wikipédia, notícias jornalísticas e documentos governamentais de políticas públicas).
  * *Atenção Cebraspe:* A altmetria não substitui a contagem de citações acadêmicas tradicionais; ela atua como **métrica complementar**, capturando o impacto sociocultural imediato da pesquisa antes que as citações formais se acumulem (o que leva de 2 a 5 anos).

---

### 2. As Três Leis Fundamentais da Bibliometria

#### A. Lei de Bradford (1934) — Dispersão e Produtividade de Periódicos
Samuel Clement Bradford estudou a distribuição de artigos sobre tópicos específicos (como geofísica aplicada e lubrificação) em milhares de revistas:
* **Enunciado Teórico:** Se periódicos científicos forem ordenados em ordem decrescente de sua produtividade de artigos sobre determinado assunto, eles podem ser divididos em um **núcleo (*core*)** de periódicos altamente dedicados ao tema e várias **zonas sucessivas**, contendo cada zona o **mesmo número total de artigos** que o núcleo.
* **Proporção Geométrica de Bradford:** O número de títulos de periódicos no núcleo e nas zonas subsequentes cresce em progressão geométrica:
  $$1 : n : n^2 : n^3 \\dots$$
  Onde $1$ representa a quantidade de revistas no núcleo central, e $n$ é o multiplicador constante de Bradford.

\`\`\`timeline
Z1 | Núcleo Central (Core) | Proporção: 1 | Poucos títulos de periódicos altamente especializados que concentram 1/3 do total de artigos da área
---> Dispersão Geométrica (multiplicador n)
Z2 | Zona 2: Intermediária | Proporção: 1 × n | Quantidade moderada de periódicos correlatos publicando a mesma quantidade total de artigos que o núcleo
---> Dispersão Máxima (multiplicador n²)
Z3 | Zona 3: Periferia Dispersa | Proporção: 1 × n² | Grande massa de periódicos gerais ou de outras áreas, cada um publicando raros artigos sobre o tema
\`\`\`

* *Aplicação Prática no Parlamento e em Bibliotecas:* A Lei de Bradford fundamenta a **política de seleção, aquisição racional e desbaste/cancelamento de assinaturas**. Um bibliotecário da Câmara dos Deputados adquire apenas as revistas do núcleo de Direito Constitucional, assegurando o acesso à grande maioria dos artigos essenciais ao menor custo financeiro.
* *Curva de Bradford e Groos Droop:* Em representação gráfica semilogarítmica, a curva forma um formato de "S" (*S-shape*). O desvio final para baixo no gráfico é conhecido na literatura como o **"desvio de Groos" (*Groos droop*)**, decorrente do fato de que a dispersão nas zonas periféricas é tão vasta que é praticamente impossível capturar exaustivamente todos os periódicos que publicam apenas um artigo isolado.

#### B. Lei de Lotka (1926) — Produtividade de Autores
Alfred J. Lotka investigou a distribuição de publicações na área da física e da química no século XIX:
* **Enunciado Teórico (Regra do Quadrado Inverso):** O número de autores que publicam $n$ artigos em um determinado campo do saber é inversamente proporcional a $n^2$:
  $$A_n = \\frac{A_1}{n^2}$$
  Onde $A_n$ é o número de autores que publicam $n$ artigos, e $A_1$ é o número de autores que publicam apenas 1 artigo.
* **Consequência Empírica:**
  * Aproximadamente **60% dos autores produzem um único artigo** em toda a sua trajetória científica ($A_1 \\approx 0{,}60$ do total);
  * O número de autores que publicam 2 artigos é de cerca de $1/4$ ($25%$) de $A_1$;
  * Apenas uma pequena fração de cientistas de elite (em torno de 5% a 6%) é hiperprodutiva e responde pela vasta maioria da literatura científica da disciplina.

#### C. Lei de Zipf (1949) — Princípio do Menor Esforço e Frequência de Palavras
O linguista norte-americano George Kingsley Zipf analisou obras em linguagem natural (como o romance *Ulysses* de James Joyce):
* **Primeira Lei de Zipf (Lei do Menor Esforço):** Se as palavras distintas de um texto longo forem ordenadas em ordem decrescente de sua frequência absoluta ($f$), o produto da ordem no ranking ($r$) pela frequência ($f$) é aproximadamente constante ($C$):
  $$r \\times f = C$$
* **Ponto de Transição de Goffman e Zona de Indexação (H. P. Luhn e F. W. Lancaster):**

\`\`\`timeline
ZTOPO | 1. Alta Frequência (Topo) | Stop Words Gramaticais | Palavras funcionais de altíssima frequência ('de', 'a', 'em', 'que') com valor semântico e discriminatório NULO
---> Transição para a Faixa Ótima
ZMEIO | 2. Frequência Intermediária | Zona de Luhn / Ponto de Goffman | Termos conceituais e temáticos substantivos: ZONA IDEAL PARA INDEXAÇÃO e extração de descritores
---> Cauda Longa de Frequência
ZBASE | 3. Baixa Frequência (Base) | Hapax Legomena | Palavras raras de ocorrência única: termos com especificidade excessiva ou ruído textual desprezível
\`\`\`

* *Aplicação na Indexação Automática:* Sistemas de busca e representação temática descartam automaticamente o topo (*stop words*) e a base (*hapax legomena*), extraindo os descritores e termos autorizados preferencialmente da **faixa intermediária de frequência**.

---

### 3. Indicadores de Citação e Avaliação Científica

#### A. Fator de Impacto (*Journal Impact Factor - JIF*) de Eugene Garfield
Calculado anualmente pelo **Journal Citation Reports (JCR)** no âmbito da Web of Science (Clarivate Analytics):
$$\\text{FI}_{\\text{Ano } A} = \\frac{\\text{Citações recebidas no Ano } A \\text{ por itens publicados nos Anos } (A-1) \\text{ e } (A-2)}{\\text{Número total de itens citáveis publicados nos Anos } (A-1) \\text{ e } (A-2)}$$

* **Pegadinha Crucial Cebraspe sobre os "Itens Citáveis":**
  * O denominador computa apenas **artigos originais de pesquisa e artigos de revisão** (*citable items*);
  * Cartas ao editor, notas, resenhas de livros, erratas e editoriais **são excluídos do denominador**;
  * No entanto, se um editorial ou carta receber citações de outros trabalhos, essas citações entram normalmente no **numerador**! Essa assimetria histórica permite distorções e manipulações artificiais do FI por comitês editoriais.
* **Índice de Imediatismo (*Immediacy Index*):** Mede a velocidade com que os artigos de uma revista são citados logo após serem publicados. Divide as citações recebidas no próprio ano $A$ pelos artigos publicados no mesmo ano $A$.

#### B. Métricas do Ecossistema Scopus (Elsevier)
* **CiteScore:** Métrica da base Scopus que utiliza uma **janela de citação de 4 anos** (em vez de 2 anos como o JCR).
* **SCImago Journal Rank (SJR):** Desenvolvido pelo grupo SCImago (Félix de Moya-Anegón) na Universidade de Granada com base no algoritmo *PageRank* do Google. Atribui pesos diferentes às citações recebidas: **uma citação vinda de uma revista de altíssimo prestígio (ex.: *Nature*) vale muito mais** do que uma citação oriunda de um periódico periférico.
* **SNIP (*Source Normalized Impact per Paper*):** Criado por Henk Moed (Universidade de Leiden); corrige e normaliza as variações nas práticas de citação entre diferentes campos do conhecimento, permitindo a comparação direta de revistas de áreas distintas.

#### C. O Índice h de Jorge Hirsch (2005)
Formulado pelo físico argentino Jorge E. Hirsch para mensurar a produtividade e o impacto acumulado de um pesquisador individual:
* **Definição Canônica:** Um cientista tem índice $h$ se $h$ de seus $N$ artigos publicados receberam pelo menos $h$ citações cada um, e os demais $(N - h)$ artigos receberam no máximo $h$ citações cada um.
* **Exemplo Prático de Ordenação para Provas:**
  Organizam-se os artigos em ordem decrescente de citações:
  * Artigo 1: 52 citações $\\ge 1$
  * Artigo 2: 38 citações $\\ge 2$
  * Artigo 3: 20 citações $\\ge 3$
  * Artigo 4: 15 citações $\\ge 4$
  * Artigo 5: 8 citações $\\ge 5$
  * Artigo 6: 6 citações $\\ge 6$
  * Artigo 7: 4 citações $< 7$ (Interrupção!)
  * *Resultado:* O autor possui **índice h = 6** (possui 6 artigos com pelo menos 6 citações).

\`\`\`tree
TITLE: Avaliação do Índice h de Jorge Hirsch (Balanço Crítico)
- Análise Crítica do Índice h | Indicador de produtividade e impacto cumulativo de autores e periódicos
  - Vantagens do Índice h | Equilíbrio entre volume quantitativo e impacto qualitativo
    - Robustez a Outliers | Imune ao impacto distorcido de um único artigo supercitado isolado
    - Síntese Única | Resume produtividade (nº de artigos) e consistência (citações mínimas) em um só número
    - Facilidade de Cálculo | Cálculo direto a partir da ordenação decrescente de citações em bases indexadas
  - Limitações e Vieses (Cebraspe) | Distorções estruturais cobradas em concursos públicos
    - Incomparabilidade Interdisciplinar | Não permite comparar cientistas de áreas distintas (imunologia vs. matemática)
    - Viés de Senilidade da Carreira | Favorece carreiras longevas e aposentados em detrimento de jovens pesquisadores
    - Monotonicidade Permanente | É uma função monótona não decrescente (o índice h de um pesquisador jamais diminui)
    - Desconsideração da Coautoria | Atribui exatamente o mesmo peso a todos os coautores de um artigo coletivo
\`\`\`

* **Limitações Cobradas em Provas (UNEAL 2026 e Cebraspe):**
  1. *Incomparabilidade Interdisciplinar:* Áreas como imunologia e física têm taxas massivas de citação, gerando índices $h$ altíssimos; áreas como matemática, história e ciências sociais possuem taxas lentas de citação, gerando índices $h$ baixos sem que isso signifique menor qualidade.
  2. *Vieses de Tempo de Carreira:* Um cientista sênior aposentado continuará acumulando citações e terá índice $h$ sempre superior a um jovem pesquisador brilhante em início de carreira.
  3. *Ignora a Ordem de Autoria:* Trata com o mesmo peso o autor principal e o 50º coautor de um artigo biomédico massivo.
  4. *Índice g de Leo Egghe (2006):* Criado como alternativa ao índice $h$ para dar mais peso aos artigos do autor que se tornaram "supercitados" (*citation classics*).

---

### 4. Sistemas Institucionais de Avaliação: Qualis-CAPES, DORA e Leiden

#### A. O Sistema Qualis-Periódicos da CAPES
O **Qualis** é o sistema oficial mantido pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) para categorizar os periódicos científicos utilizados pelos programas de pós-graduação brasileiros:
* **Novo Qualis de Referência (Quadriênio 2017-2020 em diante):**
  * Elimina a antiga fragmentação em que a mesma revista tinha notas diferentes em diferentes comitês de área;
  * Classificação única nacional em **8 estratos hierárquicos**:
    $$\text{A1} > \text{A2} > \text{A3} > \text{A4} > \text{B1} > \text{B2} > \text{B3} > \text{B4}$$
  * Periódicos não enquadráveis, sem rigor científico ou predatórios são classificados no estrato **C** (peso zero para fins de fomento).

#### B. A Declaração DORA (San Francisco Declaration on Research Assessment, 2012)
Assinada por cientistas e editores durante o encontro da Sociedade Americana de Biologia Celular:
* **Princípio Fundamental:** O **Fator de Impacto de um periódico NÃO deve ser utilizado** como substituto da qualidade de um artigo de pesquisa individual, nem para avaliar contribuições de cientistas individuais para contratação, estabilidade acadêmica ou financiamento de projetos.
* Defende que a pesquisa seja avaliada por seus próprios méritos intelectuais e científicos, reconhecendo que artigos de excelência são publicados em revistas de menor fator de impacto.

#### C. O Manifesto de Leiden (Hicks, Wouters et al., 2015)
Conjunto de dez princípios canônicos para orientar o uso responsável de indicadores métricos na avaliação da pesquisa científica:
1. *A avaliação quantitativa deve apoiar, e nunca substituir, o julgamento qualitativo de especialistas (*peer review*)*;
2. *Medir o desempenho de acordo com a missão da instituição ou do pesquisador*;
3. *Proteger a excelência na pesquisa relevante localmente (em idiomas locais e contextos regionais)*;
4. *Manter processos de coleta e cálculo de dados totalmente abertos e transparentes*;
5. *Permitir que os pesquisadores avaliados verifiquem seus próprios dados e cálculos*;
6. *Considerar as diferenças sistemáticas entre áreas do conhecimento nas práticas de publicação e citação*;
7. *Basear a avaliação de cientistas individuais em um julgamento qualitativo de seu portfólio, e não em um número métrico único*;
8. *Evitar precisão ilusória e falsas certezas geradas por rankings lineares*;
9. *Reconhecer e mitigar os efeitos sistêmicos e as perversões causadas pelos próprios indicadores*;
10. *Escrutinar e atualizar os indicadores periodicamente*.

---

### 5. Revisão das Vias do Acesso Aberto (Open Access)

Conectando-se ao compromisso de universalização do conhecimento:
* **Via Dourada (*Gold Open Access*):** Publicação em revistas de acesso aberto imediato. Pode ser financiada por taxas de processamento de artigos (**APC - *Article Processing Charges***) pagas pelo autor ou instituição, ou gratuita.
* **Via Verde (*Green Open Access*):** Autoarquivamento (*self-archiving*) pelo próprio pesquisador de versões pré-print (antes da revisão) ou pós-print (artigo aceito após revisão) em **repositórios institucionais ou temáticos abertos**, respeitando eventuais períodos de embargo editorial.
* **Via Diamante ou Platina (*Diamond / Platinum Open Access*):** Publicação em periódicos totalmente abertos que **NÃO cobram taxas de ninguém** — nem dos leitores (acesso 100% gratuito) nem dos autores (sem cobrança de APC). É o modelo amplamente sustentado no Brasil e na América Latina por universidades públicas, sociedades científicas e pelo ecossistema **SciELO**.`,
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
      pergunta: 'Micro-Checkpoint 3: Vias Dourada, Verde e Diamante do Acesso Aberto',
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
        periodo: '1963 / 1975',
        disciplina: 'Fator de Impacto e JCR',
        focoPrincipal: 'Criação do Fator de Impacto por Eugene Garfield no Science Citation Index / ISI',
        figuraChave: 'Eugene Garfield',
      },
      {
        id: 'tl-9-4-5',
        periodo: '2005 / 2012',
        disciplina: 'Índice h e Movimento DORA',
        focoPrincipal: 'Formulação do Índice h por Jorge Hirsch e Declaração DORA de avaliação responsável',
        figuraChave: 'Jorge E. Hirsch / Declaração DORA',
      },
    ],
    autores: [
      {
        id: 'aut-9-4-1',
        nome: 'Samuel C. Bradford',
        ano: 1934,
        obraPrincipal: 'Sources of information on specific subjects',
        ideiaChave: 'Dispersão de periódicos: núcleo (core) e zonas geométricas 1 : n : n².',
        chipPegadinha: 'Bradford trata de periódicos e artigos, NÃO de autores ou palavras.',
      },
      {
        id: 'aut-9-4-2',
        nome: 'Alfred J. Lotka',
        ano: 1926,
        obraPrincipal: 'The frequency distribution of scientific productivity',
        ideiaChave: 'Produtividade de autores: regra do quadrado inverso An = A1 / n².',
        chipPegadinha: 'Lotka mede autoria individual e produção acumulada de cientistas.',
      },
      {
        id: 'aut-9-4-3',
        nome: 'George Kingsley Zipf',
        ano: 1949,
        obraPrincipal: 'Human Behavior and the Principle of Least Effort',
        ideiaChave: 'Frequência de palavras: produto ranking x frequência é constante (r x f = C).',
        chipPegadinha: 'Palavras de altíssima frequência (stop words) não servem para indexação.',
      },
      {
        id: 'aut-9-4-4',
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
      {
        id: 'peg-9-4-3',
        afirmacao: 'O índice h é uma métrica recomendada pela Declaração DORA para a comparação direta e irrestrita entre cientistas de diferentes áreas do conhecimento, tais como medicina e matemática pura.',
        gabarito: 'E',
        porQue: 'A Declaração DORA condena comparações simplistas por métricas numéricas isoladas, e o índice h varia radicalmente pelas tradições de citação díspares de cada campo.',
      },
      {
        id: 'peg-9-4-4',
        afirmacao: 'A via que viabiliza o Acesso Aberto sem custos nem para o leitor (gratuito) nem para o autor (sem cobrança de APC) é denominada pela literatura de Via Dourada.',
        gabarito: 'E',
        porQue: 'A via sem cobrança de taxas nem do autor nem do leitor é a VIA DIAMANTE (ou Platina). A Via Dourada pode cobrar ou não APC.',
      },
    ],
  },
};
