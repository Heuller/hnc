import type { ModuloFilho } from '../../../domain/types';

export const submodulo23: ModuloFilho = {
  id: 'sub-2-3',
  numero: '2.3',
  titulo: 'Modelos Conceituais: A Família FRBR e o IFLA LRM',
  descricaoCurta: 'Modelagem Entidade-Relacionamento no universo bibliográfico, o quarteto WEMI (Obra, Expressão, Manifestação e Item), FRAD, FRSAD e a consolidação no IFLA LRM (2017).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['IFLA Study Group on FRBR', 'Pat Riva', 'Maja Žumer', 'Glenn Patton', 'Barbara Tillett'],
  alertasCebraspe: [
    'O quarteto WEMI do Grupo 1 do FRBR é o tema mais cobrado pela banca: Obra (criação intelectual abstrata, ex.: Dom Quixote de Cervantes) -> Expressão (realização linguística/artística específica, ex.: a tradução de Dom Quixote para o português) -> Manifestação (a corporificação física ou digital da expressão, ex.: a edição da Editora Record de 2020 em livro impresso) -> Item (o exemplar físico ou arquivo único possuído pela biblioteca, com código de barras específico).',
    'Atenção às pegadinhas do Grupo 1: mudança no texto, idioma ou arranjo musical gera uma NOVA EXPRESSÃO. Mudança no suporte físico, editora, tipo de papel, tamanho de fonte ou data gera uma NOVA MANIFESTAÇÃO.',
    'Pegadinha recorrente sobre o Grupo 1 vs Grupo 3: o Grupo 1 NÃO é composto por conceito, objeto, evento e lugar! Essas entidades compõem o GRUPO 3 (assuntos). O Grupo 1 é estritamente WEMI.',
    'O IFLA LRM (Library Reference Model, 2017) unificou e substituiu os três modelos anteriores (FRBR, FRAD e FRSAD) em uma estrutura conceitual única e mais enxuta, introduzindo a entidade máxima "Res" (qualquer coisa do universo).',
  ],
  quadroComparativo: {
    titulo: 'O Quarteto WEMI: Hierarquia Conceitual do Grupo 1 do FRBR / IFLA LRM',
    colunas: ['Nível Entidade', 'Natureza Ontológica', 'Definição Canônica', 'Exemplo Prático (Contexto Jurídico/Literário)'],
    linhas: [
      ['Obra (Work)', 'Abstrata / Conceitual', 'Criação intelectual ou artística distinta e autônoma', 'A Constituição da República Federativa do Brasil de 1988 (o texto constitucional idealizado)'],
      ['Expressão (Expression)', 'Semiótica / Linguística', 'A realização intelectual/artística da obra em uma forma específica de linguagem, texto ou som', 'O texto original da CF/88 em língua portuguesa ou sua tradução oficial para o inglês'],
      ['Manifestação (Manifestation)', 'Física / Corporificada', 'A corporificação física ou digital da expressão, produzida por um processo editorial/industrial', 'A publicação da CF/88 pelas Edições Câmara em formato brochura de 2026 (ISBN específico)'],
      ['Item (Item)', 'Exemplar Concreto / Objeto', 'Um exemplar único e individual de uma manifestação', 'O exemplar físico com código de barras CAM-0012948 na estante da Biblioteca da Câmara'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Revolução Conceitual da Família FRBR

A publicação dos **Requisitos Funcionais para Registros Bibliográficos (FRBR)** pela IFLA em 1998 representou a maior virada epistemológica da catalogação descritiva desde Cutter e Panizzi. Em vez de olhar para fichas ou campos de computador, os FRBR aplicaram a metodologia de **Modelagem Entidade-Relacionamento (E-R)** desenvolvida por Peter Chen na Ciência da Computação ao universo documental (IFLA, 1998; Mey & Silveira, 2009).

#### A. A Estrutura Tripartite das Entidades do FRBR
O FRBR original definiu **10 entidades**, organizadas em três grandes grupos:
1. **Grupo 1 — Os Produtos do Esforço Intelectual ou Artístico (WEMI):**
   * **Obra (*Work*):** Conceito abstrato que representa a criação intelectual ou artística pura, independente de qualquer forma ou suporte (ex.: *Memórias Póstumas de Brás Cubas* de Machado de Assis).
   * **Expressão (*Expression*):** A realização intelectual concreta dessa obra em signos linguísticos, sonoros ou visuais (ex.: o texto em português, a tradução para o francês, a narração em audiobook).  
     * *Alerta da Banca:* Se o texto for revisado, traduzido, resumido ou adaptado, surge uma **nova expressão**.
   * **Manifestação (*Manifestation*):** A corporificação material ou digital de uma expressão, refletindo a produção e distribuição física/eletrônica (ex.: uma tiragem específica de uma editora, com um dado ISBN, tipo de encadernação e tamanho).  
     * *Alerta da Banca:* Se mudar a editora, a data da tiragem, o suporte (papel vs. PDF) ou a paginação, surge uma **nova manifestação**.
   * **Item (*Item*):** O exemplar físico ou a cópia digital única pertencente a uma unidade de informação específica (ex.: o livro com o carimbo e número de inventário 85.421 da biblioteca).
2. **Grupo 2 — Os Responsáveis pelo Conteúdo (Agentes):**
   * **Pessoa** (*Person*): Indivíduo humano.
   * **Entidade Coletiva** (*Corporate Body*): Grupo ou organização formal (empresas, órgãos governamentais, tribunais).  
   * *(O modelo FRAD posterior acrescentou a entidade **Família**).*
3. **Grupo 3 — Os Assuntos das Obras (Temas):**
   * **Conceito** (*Concept*): Ideia abstrata ou princípio (ex.: *Democracia*, *Processo Legislativo*).
   * **Objeto** (*Object*): Coisa material animada ou inanimada (ex.: *O Palácio do Congresso Nacional*).
   * **Evento** (*Event*): Acontecimento histórico ou temporal (ex.: *A Proclamação da República*).
   * **Lugar** (*Place*): Localização geográfica ou espacial (ex.: *Brasília*).  
   * *(Observação:* O Grupo 3 também engloba todas as entidades dos Grupos 1 e 2, pois uma obra, pessoa ou família pode ser assunto de outra obra).*

---

### 2. A Expansão: FRAD e FRSAD

* **FRAD (2009) — *Functional Requirements for Authority Data*:**
  * Estendeu o modelo conceitual aos **registros de autoridade** (nomes de autores, títulos de obras e entidades).
  * Foco em como os nomes são controlados por meio de pontos de acesso autorizados e variantes remissivas.
* **FRSAD (2010) — *Functional Requirements for Subject Authority Data*:**
  * Modelou a representação temática em duas entidades essenciais: **Thema** (qualquer coisa que pode ser assunto de uma obra) e **Nomen** (qualquer signo, termo, símbolo ou código utilizado para denominar um Thema).

---

### 3. O IFLA LRM (Library Reference Model, 2017)

Para superar redundâncias e complexidades entre os três modelos anteriores, a IFLA unificou-os no **IFLA LRM** (disponível em nosso acervo em \`Catalogação/ifla-lrm-august-2017_rev201712-por.pdf\`):
* **Modelo Consolidado de Alto Nível:** Estrutura unificada e elegante para dados abertos conectados (*Linked Data*).
* **Entidade Raiz "Res":** Todas as entidades do LRM são subclasses da entidade máxima **Res** (do latim: *coisa*), que representa absolutamente qualquer entidade do universo do discurso.
* **Hierarquia de Agentes:** A entidade **Agente** subdivide-se em **Pessoa** e **Agente Coletivo** (que engloba Entidade Coletiva e Família).
* **O Nomen Unificado:** O **Nomen** passa a representar qualquer associação entre uma entidade e sua designação verbal ou numérica (nomes de pessoas, títulos de obras, termos de indexação ou códigos de classificação).`,
  checkpoints: [
    {
      id: 'cp-2-3-1',
      pergunta: 'Micro-Checkpoint 1: O Quarteto WEMI do Grupo 1 do FRBR',
      item: 'No modelo conceitual FRBR, a tradução da obra Dom Quixote para a língua portuguesa e a sua narração em formato de audiolivro representam novas manifestações da mesma expressão.',
      gabarito: 'E',
      justificativa: 'Errado! A tradução para outro idioma e a narração sonora modificam a forma de realização semiótica do texto, constituindo, portanto, NOVAS EXPRESSÕES da mesma obra.',
    },
    {
      id: 'cp-2-3-2',
      pergunta: 'Micro-Checkpoint 2: Unificação pelo IFLA LRM',
      item: 'O modelo IFLA LRM (Library Reference Model), publicado em 2017, consolidou e unificou os modelos conceituais FRBR, FRAD e FRSAD, adotando a entidade máxima Res como raiz de todas as entidades do universo bibliográfico.',
      gabarito: 'C',
      justificativa: 'Correto! O IFLA LRM unificou os três modelos anteriores em uma ontologia de alto nível compatível com a Web Semântica.',
    },
      {
      id: 'cp-2-3-3',
      pergunta: "Micro-Checkpoint 3: Elementos Obrigatórios e Repetibilidade no Dublin Core",
      item: "O padrão Dublin Core em sua especificação original estabelece que todos os seus 15 elementos constitutivos são opcionais e repetíveis.",
      gabarito: 'C',
      justificativa: "Certo! No Dublin Core simples (DCMI Metadata Terms), nenhum elemento é mandatório por especificação do padrão e todos podem ser repetidos tantas vezes quantas necessárias.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-3-1',
        periodo: '1998',
        disciplina: 'IFLA FRBR',
        focoPrincipal: 'Publicação do modelo conceitual E-R e do quarteto WEMI para registros bibliográficos',
        figuraChave: 'IFLA Study Group on FRBR',
      },
      {
        id: 'tl-2-3-2',
        periodo: '2009 / 2010',
        disciplina: 'FRAD e FRSAD',
        focoPrincipal: 'Extensão da modelagem conceitual para registros de autoridade (nomes) e temas (Thema/Nomen)',
        figuraChave: 'Glenn Patton e Maja Žumer',
      },
      {
        id: 'tl-2-3-3',
        periodo: '2017',
        disciplina: 'IFLA LRM',
        focoPrincipal: 'Consolidação e unificação definitiva em um modelo único de alto nível com a entidade Res',
        figuraChave: 'Pat Riva, Patrick Le Bœuf e Maja Žumer',
      },
    ],
    autores: [
      {
        id: 'aut-2-3-1',
        nome: 'Pat Riva',
        ano: 2017,
        obraPrincipal: 'IFLA Library Reference Model (LRM)',
        ideiaChave: 'Consolidação ontológica de alto nível que unificou FRBR, FRAD e FRSAD para a Web Semântica.',
        chipPegadinha: 'Res é a entidade máxima de onde derivam todas as outras (Work, Expression, Agent etc.).',
      },
      {
        id: 'aut-2-3-2',
        nome: 'Peter Chen',
        ano: 1976,
        obraPrincipal: 'The Entity-Relationship Model',
        ideiaChave: 'Criador da Modelagem Entidade-Relacionamento (E-R), a base matemática adotada pela IFLA.',
        chipPegadinha: 'FRBR é modelo E-R puro, não um banco de dados relacional físico.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-3-1',
        afirmacao: 'O modelo FRBR é composto por nove entidades divididas em três grupos, sendo o Grupo 1 constituído por conceito, objeto, evento e lugar.',
        gabarito: 'E',
        porQue: 'O Grupo 1 é formado pelo quarteto WEMI (Obra, Expressão, Manifestação e Item). Conceito, Objeto, Evento e Lugar compõem o Grupo 3.',
      },
      {
        id: 'peg-2-3-2',
        afirmacao: 'Conforme o FRBR, uma obra é um conteúdo intelectual estritamente vinculado ao seu formato impresso, de modo que a criação de uma versão digital descaracteriza a sua natureza de obra.',
        gabarito: 'E',
        porQue: 'A Obra é uma entidade totalmente abstrata e intangível; o formato físico ou digital afeta apenas a manifestação e o item.',
      },
    ],
  },
};
