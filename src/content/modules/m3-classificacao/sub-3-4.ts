import type { ModuloFilho } from '../../../domain/types';

export const submodulo34: ModuloFilho = {
  id: 'sub-3-4',
  numero: '3.4',
  titulo: 'Linguagens Documentárias, Tesauros, Ontologias e SKOS',
  descricaoCurta: 'Tipologia das linguagens documentárias (Cintra, Lara), arquitetura e relações semânticas de tesauros (USE/UP, TG/TE, TR, NE), princípios da Teoria do Conceito de Dahlberg, Sistemas de Organização do Conhecimento (SOC), Ontologias e o padrão SKOS do W3C.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Ingetraut Dahlberg', 'Estevão de Meneses', 'Emilia Currás', 'Thomas Gruber', 'Alba Costa Maciel'],
  alertasCebraspe: [
    'Relações canônicas de um tesauro: Equivalência (USE / UP para sinônimos e quase-sinônimos), Hierárquica (TG / TE para relações de gênero-espécie e todo-parte), e Associativa (TR / RT para conexões laterais como causa-efeito, matéria-produto, processo-agente).',
    'As Notas de Escopo (NE / SN): servem para delimitar o significado específico de um descritor dentro daquele domínio, restringir seu uso ou orientar o indexador, diferenciando homógrafos.',
    'Garantia Literária (E. Wyndham Hulme): os termos de um tesauro devem decorrer da literatura efetivamente produzida na área e indexada no sistema, e não de preferências subjetivas do bibliotecário.',
    'Diferença estrutural entre Tesauro e Ontologia: enquanto o tesauro estabelece relações lexicais pré-definidas (TG, TE, TR) para recuperação de documentos, a ontologia é uma especificação formal de uma conceituação de domínio que define classes, atributos, axiomas lógicos e regras de inferência computacional.',
    'O padrão SKOS (Simple Knowledge Organization System) do W3C converte linguagens documentárias tradicionais (tesauros, taxonomias, cabeçalhos) em grafos RDF interoperáveis para a Web Semântica.',
  ],
  quadroComparativo: {
    titulo: 'As Três Relações Semânticas Fundamentais em Tesauros Documentários',
    colunas: ['Tipo de Relação', 'Símbolos Padronizados (Português / Inglês)', 'Natureza do Vínculo', 'Exemplo Prático no Contexto Legislativo'],
    linhas: [
      ['Equivalência', 'USE (Usar) / UP (Usado Para) [USE / UF]', 'Conecta termos sinônimos, grafias variantes e quase-sinônimos, elegendo o termo autorizado', 'Processo de Impeachment -> USE Julgamento por Crime de Responsabilidade'],
      ['Hierárquica', 'TG (Termo Geral) / TE (Termo Específico) [BT / NT]', 'Relação lógica de subordinação (Gênero/Espécie, Todo/Parte ou Instancial)', 'TG: Proposição Legislativa / TE: Projeto de Lei Complementar'],
      ['Associativa', 'TR (Termo Relacionado) / RT (Related Term)', 'Relação simétrica de afinidade conceitual não hierárquica nem sinônima (causa, efeito, processo)', 'Direito Constitucional TR Controle de Constitucionalidade'],
      ['Nota de Escopo', 'NE (Nota de Escopo) / SN (Scope Note)', 'Instrução explicativa e delimitadora do contexto semântico do descritor', 'NE: Aplica-se exclusivamente a matérias submetidas à apreciação do Plenário'],
    ],
  },
  teoriaDensaMarkdown: `### 1. As Linguagens Documentárias: Conceito e Funções

Conforme **Anna Maria Cintra** e **Marilda Lopes Ginez de Lara**, as linguagens documentárias são sistemas artificiais de signos construídos para padronizar e controlar a terminologia de uma dada área do conhecimento, com o objetivo de eliminar as ambiguidades da linguagem natural (sinonímia, polissemia e homografia) na representação e recuperação de informações:

* **Controle Léxico e Semântico:**
  * *Sinonímia:* Múltiplos termos para o mesmo conceito são controlados elegendo-se um único **descritor preferido** e remetendo os demais via relações de equivalência.
  * *Polissemia / Homografia:* O mesmo significante com múltiplos significados é controlado pelo uso de **qualificadores entre parênteses** ou **notas de escopo** (ex.: \`Manga (Fruta)\` vs. \`Manga (Vestuário)\`).

---

### 2. A Teoria do Conceito de Ingetraut Dahlberg

A fundamentação científica moderna dos tesauros e linguagens documentárias apoia-se na **Teoria do Conceito** de **Ingetraut Dahlberg** (1978):
* O conceito é uma unidade de conhecimento composta por três elementos: o **referente** (objeto da realidade), os **caracteres** (propriedades essenciais do objeto) e o **termo / símbolo** (designação linguística).
* Para Dahlberg, a organização dos conceitos em tesauros deve obedecer a categorias fundamentais e aos princípios de:
  1. *Completude:* Abranger a totalidade do domínio temático.
  2. *Irredutibilidade:* Cada conceito decomposto em suas propriedades irredutíveis.
  3. *Mútua Exclusividade:* Evitar sobreposições conceituais incoerentes nas classes de mesmo nível.

---

### 3. A Estrutura dos Tesauros Documentários

Conforme as normas **ISO 25964** e **ANSI/NISO Z39.19-2005** (e as clássicas obras de Estevão de Meneses e Emilia Currás em nosso acervo), um tesauro é um vocabulário controlado e dinâmico de termos relacionados semântica e genericamente:

#### A. As Três Relações Semânticas Canônicas
1. **Relação de Equivalência:**
   * Liga o termo preferido (descritor) ao termo não-preferido (não-descritor).
   * Notações: \`USE\` (remete do não-descritor para o descritor) e \`UP\` (Usado Para - do descritor para o não-descritor).
2. **Relação Hierárquica:**
   * Estabelece níveis de supraordenação e subordinação lógica.
   * Notações: \`TG\` (Termo Geral / *Broader Term*) e \`TE\` (Termo Específico / *Narrower Term*).
   * Tipologias da hierarquia:
     * *Gênero/Espécie:* A espécie herda todas as características do gênero (ex.: Mamífero -> Baleia).
     * *Todo/Parte:* Relação partitiva de partes constitutivas (ex.: Brasil -> Região Nordeste).
     * *Instancial:* Relação entre uma classe geral e um exemplo histórico ou geográfico individual (ex.: Cordilheira montanhosa -> Andes).
3. **Relação Associativa:**
   * Conecta termos que possuem afinidade semântica ou contextual fora do eixo hierárquico.
   * Notação: \`TR\` (Termo Relacionado / *Related Term*).
   * Relações de causa-efeito, processo-agente, matéria-produto, ciência-objeto de estudo.

#### B. Componentes do Tesauro
* **Macroestrutura:** As divisões globais do tesauro (apresentação sistemática por categorias ou facetas e apresentação alfabética completa).
* **Microestrutura:** O bloco de informação estruturado associado a cada descritor individual, exibindo suas notas de escopo e todas as suas relações (USE, UP, TG, TE, TR).

---

### 4. Sistemas de Organização do Conhecimento (SOC), Ontologias e SKOS

* **Sistemas de Organização do Conhecimento (SOC / KOS):**
  Englobam desde listas de termos simples até estruturas conceituais de alta complexidade semântica: listas de autoridade $\rightarrow$ glossários $\rightarrow$ taxonomias corporativas $\rightarrow$ tesauros $\rightarrow$ redes semânticas $\rightarrow$ ontologias formais.
* **Ontologias (Thomas Gruber, 1993):**
  * *"Uma especificação explícita e formal de uma conceituação compartilhada."*
  * Enquanto o tesauro organiza termos da linguagem para humanos indexarem e buscarem textos, a ontologia é uma base de conhecimento legível por máquinas com **lógica formal (lógica de predicados / descrição)**, composta por: classes, propriedades de objeto (*object properties*), propriedades de dados (*datatype properties*), axiomas e indivíduos/instâncias (codificadas em RDF, RDFS e OWL).
* **SKOS (Simple Knowledge Organization System):**
  * Padrão oficial do W3C para modelar e publicar vocabulários controlados e tesauros na Web Semântica.
  * Utiliza propriedades RDF estruturadas como \`skos:prefLabel\`, \`skos:altLabel\`, \`skos:broader\`, \`skos:narrower\`, \`skos:related\` e \`skos:scopeNote\`, permitindo que tesauros tradicionais sejam compreendidos por algoritmos e agentes inteligentes em todo o mundo.`,
  checkpoints: [
    {
      id: 'cp-3-4-1',
      pergunta: 'Micro-Checkpoint 1: Relações Semânticas em Tesauros',
      item: 'Nos tesauros documentários, a relação entre dois termos na qual um é preferido e outro é não preferido caracteriza a relação de equivalência, expressa formalmente pelas convenções USE e UP (Usado Para).',
      gabarito: 'C',
      justificativa: 'Correto! A relação de equivalência conecta termos sinônimos, variantes ortográficas e quase-sinônimos, estabelecendo o descritor oficial.',
    },
    {
      id: 'cp-3-4-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Tesauro e Ontologia',
      item: 'Diferentemente dos tesauros, cuja função primordial é apoiar a recuperação documental mediante termos normalizados, as ontologias contêm axiomas formais e regras lógicas de inferência automatizada que permitem o processamento do conhecimento por máquinas.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a distinção fundamental cobrada pelo Cebraspe entre instrumentos de indexação (tesauros) e modelos conceituais formais da inteligência artificial (ontologias).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-4-1',
        periodo: '1978',
        disciplina: 'Teoria do Conceito',
        focoPrincipal: 'Formulação da Teoria do Conceito e triangulação semiótica aplicada à indexação',
        figuraChave: 'Ingetraut Dahlberg',
      },
      {
        id: 'tl-3-4-2',
        periodo: '1993',
        disciplina: 'Ontologias em Ciência da Computação e CI',
        focoPrincipal: 'Definição clássica de ontologia como especificação formal e explícita de conceituação compartilhada',
        figuraChave: 'Thomas Gruber',
      },
      {
        id: 'tl-3-4-3',
        periodo: '2009',
        disciplina: 'W3C SKOS',
        focoPrincipal: 'Recomendação oficial do W3C para modelagem de tesauros e vocabulários na Web Semântica',
        figuraChave: 'W3C Semantic Web Deployment Group',
      },
    ],
    autores: [
      {
        id: 'aut-3-4-1',
        nome: 'Ingetraut Dahlberg',
        ano: 1978,
        obraPrincipal: 'Ontical Structures and Universal Classification',
        ideiaChave: 'Fundadora da sociedade ISKO e da Teoria do Conceito; sistematização de categorias e facetas conceituais.',
        chipPegadinha: 'Dahlberg estuda o conceito e seus caracteres, não apenas termos linguísticos soltos.',
      },
      {
        id: 'aut-3-4-2',
        nome: 'Thomas Gruber',
        ano: 1993,
        obraPrincipal: 'A translation approach to portable ontology specifications',
        ideiaChave: 'Definição canônica de Ontologia adotada pela Ciência da Informação e IA.',
        chipPegadinha: 'Ontologia exige formalização lógica e capacidade de raciocínio automatizado por máquina.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-4-1',
        afirmacao: 'O formato ideal e exclusivo recomendado pelo W3C para disponibilização de tesauros na Internet, visando à interoperabilidade e ao reúso na Web Semântica, é o formato PDF.',
        gabarito: 'E',
        porQue: 'Arquivos PDF são formatos de exibição estática para humanos. Para interoperabilidade de dados e Web Semântica, tesauros são publicados em padrões como SKOS/RDF, XML ou JSON-LD.',
      },
      {
        id: 'peg-3-4-2',
        afirmacao: 'Na estrutura de um tesauro, a relação entre América do Sul e Brasil é classificada como uma relação semântica do tipo associativa (TR).',
        gabarito: 'E',
        porQue: 'A relação geográfica entre continente e país é uma relação HIERÁRQUICA do tipo partitiva (todo/parte: TG América do Sul / TE Brasil).',
      },
    ],
  },
};
