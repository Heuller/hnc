import type { ModuloFilho } from '../../../domain/types';

export const submodulo27: ModuloFilho = {
  id: 'sub-2-7',
  numero: '2.7',
  editalRef: 'Bloco D - Item 3.12 e Bloco A - Item 3.8',
  preRequisitos: ["sub-1-6","sub-2-6"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-4",
          "titulo": "Formato MARC 21 Bibliográfico e Autoridades",
          "motivo": "Mapeamento de campos legados para classes e propriedades BIBFRAME."
      },
      {
          "submoduloId": "sub-3-4",
          "titulo": "Tesauros, Ontologias e SKOS",
          "motivo": "Modelagem semântica de vocabulários controlados em RDF e SPARQL."
      },
      {
          "submoduloId": "sub-6-7",
          "titulo": "IA Aplicada à Informação",
          "motivo": "Conexão entre grafos de conhecimento, ontologias e recuperação vetorial/RAG."
      }
  ],
  titulo: 'MODS, METS, BIBFRAME, Linked Data e Interoperabilidade',
  titulo_curto: 'BIBFRAME, METS e Linked Data',
  antesDeLer: [
    {
      termo: 'MODS e METS',
      definicao: 'Padrões XML da Library of Congress: MODS para descrição bibliográfica rica e METS para empacotamento estrutural de objetos digitais complexos.',
      exemploBiblioteca: 'Empacotamento de livros raros digitalizados contendo imagens em alta resolução e texto transcrito na Biblioteca Digital da Câmara.',
    },
    {
      termo: 'BIBFRAME',
      definicao: 'Modelo de dados bibliográficos baseado em Linked Data desenvolvido pela Library of Congress para substituir o padrão MARC 21.',
      exemploBiblioteca: 'Conexão de autores e assuntos do catálogo da Câmara com identidades de dados abertos como Wikidata e VIAF.',
    },
    {
      termo: 'Linked Data e RDF',
      definicao: 'Prática de publicar dados estruturados na web utilizando triplas RDF (Sujeito - Predicado - Objeto) com URIs para conectar informações.',
      exemploBiblioteca: 'Disponibilizar a relação entre um Deputado e a autoria de uma Proposição em formato RDF no portal de Dados Abertos da Câmara.',
    },
    {
      termo: 'Interoperabilidade Semântica',
      definicao: 'Capacidade de diferentes sistemas trocarem informações mantendo o significado preciso e inequívoco dos dados transmitidos.',
      exemploBiblioteca: 'Intercâmbio automático de legislação entre os portais da Câmara dos Deputados, Senado Federal e Presidência da República.',
    },
  ],
  descricaoCurta: 'Padrões XML da Library of Congress (MODS e METS), o modelo BIBFRAME 2.0 (Work, Instance, Item e conversão MARC-BIBFRAME), regras de Linked Data (Berners-Lee 2006), identificadores persistentes e os quatro níveis de interoperabilidade.',
  tempoEstimadoMinutos: 21,
  autoresChave: [
    'Library of Congress',
    'Tim Berners-Lee',
    'World Wide Web Consortium (W3C)',
  ],
  alertasCebraspe: [
    'O BIBFRAME 2.0 NÃO substitui o formato MARC 21 por mera revogação normativa ou decreto administrativo; trata-se de um modelo ontológico baseado em Linked Data projetado para suceder o formato tradicional. Sua estrutura conceitual gravita em torno de TRÊS classes centrais: Work (Obra), Instance (Instância) e Item (Item). Não confunda com a tetralogia WEMI do IFLA LRM (Obra, Expressão, Manifestação, Item).',
    'O MODS (Metadata Object Description Schema) é um esquema derivado e plenamente compatível com o formato MARC 21, expressando seus elementos em XML com tags semânticas em linguagem natural, sendo notadamente mais rico e granular do que o Dublin Core.',
    'O METS (Metadata Encoding and Transmission Standard) atua como um padrão de envelope/empacotamento XML para objetos digitais complexos, composto por sete seções formais estritas (metsHdr, dmdSec, amdSec, fileSec, structMap, structLink e behaviorSec). A seção structMap (mapa estrutural) é o coração obrigatório do documento METS.',
    'Os quatro níveis canônicos de interoperabilidade informacional cobrados no edital são: sintática (estruturas de codificação e parsers), estrutural (esquemas de dados e formatos internos), semântica (significado compartilhado via ontologias, tesauros e vocabulários) e organizacional (processos de trabalho, políticas e cooperação interinstitucional).',
    'Grafos Semânticos RDF vs. Grafos de Propriedades e SPARQL: O RDF estrutura-se na tripla formal W3C (Sujeito-Predicado-Objeto) com identificação global por URIs, sendo consultado via linguagem SPARQL (comandos SELECT, CONSTRUCT, ASK e DESCRIBE) e projetado para federação aberta na Web (Linked Open Data). Já os Grafos de Propriedades (Neo4j / Cypher) utilizam nós e arestas com múltiplos pares chave-valor locais, otimizados para alta performance interna corporativa, sem vocabulários ontológicos abertos universais como SKOS ou OWL.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa dos Padrões de Representação e Empacotamento de Metadados',
    colunas: ['Padrão de Metadados', 'Natureza e Arquitetura', 'Formato de Serialização', 'Nível de Granularidade', 'Relação com o Formato MARC 21', 'Caso de Uso Primordial'],
    linhas: [
      [
        'MARC 21 Bibliográfico',
        'Padrão histórico de intercâmbio bibliográfico estruturado em campos numéricos de 3 dígitos e subcampos.',
        'ISO 2709 (binário) e MARCXML.',
        'Altíssima granularidade catalográfica.',
        'Padrão originário de referência internacional.',
        'Sistemas Integrados de Gestão de Bibliotecas (SIGBs) tradicionais.',
      ],
      [
        'Dublin Core (DCMI)',
        'Conjunto universal simplificado de 15 elementos centrais para descrição genérica de recursos digitais.',
        'XML, RDF, HTML/XHTML meta tags, JSON.',
        'Baixa granularidade (elementos amplos).',
        'Mapeamento aproximado com perda severa de especificidade.',
        'Repositórios digitais abertos (DSpace) e colheita OAI-PMH.',
      ],
      [
        'MODS (LoC)',
        'Esquema XML bibliográfico com rótulos em linguagem natural legíveis por humanos e máquinas.',
        'XML Schema nativo.',
        'Granularidade intermediária-alta (mais rico que DC, mais simples que MARC).',
        'Derivado direto do MARC 21; conversão rica e bidirecional facilitada.',
        'Bibliotecas digitais acadêmicas, federações e exposições temáticas.',
      ],
      [
        'METS (LoC)',
        'Padrão de empacotamento e contêiner estrutural para reunir metadados e arquivos de um objeto digital.',
        'XML Schema nativo.',
        'Nível arquitetural de contêiner e agregação.',
        'Neutro: pode envelopar registros em MARCXML, MODS, DC e PREMIS em suas seções.',
        'Pacotes de submissão e arquivamento em repositórios digitais confiáveis (OAIS SIP/AIP).',
      ],
      [
        'BIBFRAME 2.0 (LoC)',
        'Vocabulário ontológico para modelagem e interligação de dados bibliográficos na Web Semântica.',
        'RDF (Turtle, JSON-LD, RDF/XML).',
        'Alta granularidade baseada em grafos, entidades e URIs.',
        'Sucessor conceitual baseado em Linked Data; ferramentas oficiais de conversão da LoC.',
        'Bases de dados em grafos, motores de busca semântica e catálogos interconectados.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. MODS (Metadata Object Description Schema): O Padrão XML da Library of Congress

Desenvolvido pela *Library of Congress* (LoC) como iniciativa do *Network Development and MARC Standards Office*, o **MODS** (*Metadata Object Description Schema*) foi projetado para suprir a lacuna existente entre a excessiva complexidade do formato **MARC 21** e a extrema simplicidade do padrão **Dublin Core**.

\`\`\`timeline
1. MARC 21 (Anos 1960) | Código Numérico Rígido | Campos de 3 dígitos (100, 245, 650) otimizados para fitas magnéticas e fichas
---> Era da Web e XML
2. DUBLIN CORE (1995) | Simplificação Universal | 15 elementos genéricos amplos (dc:title, dc:creator); baixa granularidade
---> Demanda por Equilíbrio
3. MODS 1.0 (2002) | O Equilíbrio da LoC | XML nativo, tags em linguagem natural legível, rico e compatível com MARC 21
---> Web Semântica
4. BIBFRAME 2.0 (2016) | A Era do Linked Data | Grafo de conhecimento em RDF interligando Work, Instance e Item na Web
\`\`\`

#### A. Características Arquiteturais do MODS:
* **Compatibilidade e Derivação do MARC 21:** O MODS foi concebido expressamente a partir do conjunto de elementos do MARC 21. Um subconjunto substancial de dados catalográficos pode ser convertido de MARC 21 para MODS e vice-versa com perdas mínimas, utilizando scripts de transformação XSLT mantidos pela própria Biblioteca do Congresso.
* **Linguagem Natural Legível (*Human-Readable Tags*):** Em vez de empregar campos crípticos de três dígitos como \`100 1# $a\`, o MODS utiliza elementos semânticos legíveis em XML, tais como \`<titleInfo><title>\`, \`<name type="personal"><namePart>\`, \`<genre>\` e \`<subject>\`.
* **Riqueza Superior ao Dublin Core:** Enquanto o Dublin Core possui apenas \`dc:creator\` e \`dc:contributor\`, o MODS permite especificar papéis detalhados de autoria (\`<role><roleTerm>\`), qualificadores de edição, formas variantes de títulos e datas estruturadas de forma muito mais sofisticada.
* **Uso Típico:** Muito empregado na descrição de acervos digitais de bibliotecas acadêmicas, como formato de entrega em repositórios digitais e como metadado descritivo embutido em contêineres METS.

---

### 2. METS (Metadata Encoding and Transmission Standard): O Padrão Envelope XML

Também mantido pela *Library of Congress*, o **METS** (*Metadata Encoding and Transmission Standard*) não é um esquema de metadados descritivos isolado (ele não define como descrever o autor ou o título de um livro). O METS é um **padrão de empacotamento e contêiner estrutural** (*wrapper/envelope*) codificado em XML, cujo propósito primordial é congregar, em um único documento padronizado, todos os metadados e arquivos que constituem um objeto digital complexo.

#### As Sete Seções Formais da Estrutura do METS:
O documento raiz \`<mets>\` é composto por sete seções formais estritas:

1. **Cabeçalho METS (\`metsHdr\` - *METS Header*):** Armazena metadados sobre o próprio documento METS em si (data de criação, data da última modificação, agência responsável e agentes que manipularam o arquivo).
2. **Seção de Metadados Descritivos (\`dmdSec\` - *Descriptive Metadata Section*):** Contém ou aponta para metadados descritivos externos. Pode embutir diretamente registros em MARCXML, MODS ou Dublin Core (\`<mdWrap>\`) ou apontar para um URI externo (\`<mdRef>\`).
3. **Seção de Metadados Administrativos (\`amdSec\` - *Administrative Metadata Section*):** Reúne metadados de gestão, subdividindo-se em:
   * \`techMD\`: Metadados técnicos sobre a criação e os parâmetros do arquivo (ex.: NISO MIX para imagens).
   * \`rightsMD\`: Direitos autorais e termos de licença (ex.: Creative Commons).
   * \`sourceMD\`: Metadados sobre a fonte analógica original que foi digitalizada.
   * \`digiprovMD\`: Metadados de proveniência digital e eventos de preservação (ex.: PREMIS).
4. **Seção de Arquivos (\`fileSec\` - *File Section*):** Lista e inventaria todos os arquivos de conteúdo digital que compõem o objeto (arquivos master TIFF, arquivos derivados JPEG, PDFs, áudios MP3), organizados em grupos de arquivos (\`fileGrp\`).
5. **Mapa Estrutural (\`structMap\` - *Structural Map*):** **É o coração obrigatório do documento METS.** Organiza a hierarquia lógica e física do objeto digital (capítulos, seções, páginas, fólios) e mapeia cada nó estrutural (\`<div>\`) aos arquivos concretos correspondentes na \`fileSec\`.
6. **Ligações Estruturais (\`structLink\` - *Structural Links*):** Seção opcional que estabelece hiperlinks e conexões não hierárquicas entre diferentes nós da árvore estruturada no \`structMap\`.
7. **Seção de Comportamento (\`behaviorSec\` - *Behavior Section*):** Associa executáveis, scripts ou códigos de software específicos a nós do documento para renderizar interativamente o recurso.

---

### 3. BIBFRAME 2.0: A Transição da Catalogação para o Linked Data

A *Bibliographic Framework Initiative* (BIBFRAME) foi lançada pela *Library of Congress* para suceder o formato **MARC 21**, projetando a catalogação e os registros das bibliotecas no ecossistema da **Web Semântica e do Linked Data**.

#### A. As Três Classes Centrais do BIBFRAME 2.0:
Diferentemente do modelo conceitual IFLA LRM (que utiliza a tetralogia Obra, Expressão, Manifestação e Item — WEMI), o BIBFRAME 2.0 simplificou a arquitetura em **três classes nucleares**:

\`\`\`timeline
1. WORK (Obra) | Conteúdo Intelectual Abstrato | Conceito imaterial, tema, autores, gênero e forma artística da criação
---> Concretização Editorial
2. INSTANCE (Instância) | Publicação Material / Digital | Publicação concreta da Obra (editora, data de publicação, paginação, suporte)
---> Cópia Física ou Eletrônica
3. ITEM (Item) | O Exemplar Concreto | A cópia tangível única mantida no acervo físico ou arquivo específico com código de barras
\`\`\`

* **1. Work (Obra):** Representa o nível mais elevado de abstração intelectual ou artística. Reflete o conteúdo conceitual e a essência da criação (título uniforme, assunto, autoria, gênero/forma). No BIBFRAME, o Work absorve grande parte das propriedades da "Expressão" do LRM.
* **2. Instance (Instância):** Representa a publicação, emissão ou distribuição concreta de uma Obra em determinado suporte físico ou digital (uma edição de bolso pela Editora Saraiva em 2020; o e-book em EPUB publicado pela Câmara dos Deputados em 2024). Equivale aproximadamente à "Manifestação" do IFLA LRM.
* **3. Item (Item):** É o exemplar físico individual ou a cópia digital localizada custodiada por uma biblioteca (o exemplar nº 3 da Biblioteca Pedro Aleixo com código de barras e anotações marginais).

#### B. Classes e Conceitos Acessórios:
O modelo BIBFRAME complementa essas classes nucleares com entidades-chave:
* **Agents (Agentes):** Pessoas, organizações corporativas ou jurisdições associadas a uma Obra ou Instância (autores, tradutores, editores).
* **Subjects (Assuntos):** O que a Obra aborda (conceitos, lugares, eventos, períodos históricos).
* **Events (Eventos):** Ocorrências que caracterizam a história do recurso.

#### C. A Conversão MARC 21 para BIBFRAME:
A transição não ocorre por "extinção abrupta", mas pela coexistência e conversão automatizada:
* A Library of Congress mantém ferramentas de código aberto como o programa **\`marc2bibframe2\`** (disponível publicamente no GitHub da LoC), que recebe registros MARC 21 em formato MARCXML e os transforma em grafos RDF de BIBFRAME 2.0.
* A conversão exige o enriquecimento dos registros: campos de texto estático do MARC (como nomes e assuntos) são convertidos em **URIs abertas** apontando para vocabulários de autoridade globais (ex.: \`id.loc.gov\`, VIAF, ISNI e Wikidata).

---

### 4. Linked Data, Grafos de Conhecimento e a Web Semântica (Alvo E4)

O cientista britânico **Sir Tim Berners-Lee** estabeleceu em 2006 os quatro princípios axiomáticos para a publicação de dados interligados (*Linked Data*) na Web Semântica:

1. **Use URIs como nomes para as coisas:** Cada entidade do mundo real ou conceitual (uma pessoa, um livro, uma lei, um partido político) deve possuir um Identificador de Recurso Uniforme (*Uniform Resource Identifier* — URI) que a identifique de modo único no planeta.
2. **Use URIs HTTP:** Os identificadores devem adotar o protocolo HTTP (\`http://...\` ou \`https://...\`), permitindo que pessoas e programas de computador consultem esses identificadores (*dereferencing*).
3. **Forneça informações úteis quando alguém consultar a URI:** Ao acessar a URI, o servidor deve retornar uma descrição estruturada da entidade utilizando padrões abertos recomendados pelo W3C (em especial **RDF** e consultas via **SPARQL**).
4. **Inclua links para outras URIs:** A descrição do recurso deve conter hiperlinks que apontem para URIs externas correlatas, viabilizando a descoberta de novos conhecimentos na teia global de dados (*Web of Data*).

#### A. Grafos Semânticos RDF (*Triplestores*) vs. Grafos de Propriedades (*Property Graphs*)
Na Ciência da Informação e na Computação contemporânea, os grafos de conhecimento estruturam-se em dois paradigmas fundamentais:

| Critério de Comparação | Grafo Semântico RDF (Padrão W3C) | Grafo de Propriedades (*Property Graph*) |
| :--- | :--- | :--- |
| **Unidade Básica de Dados** | **Tríplice Atômica:** \`[Sujeito] ──(Predicado)──> [Objeto]\` | **Nós e Arestas Atributados:** Nós com rótulos e pares chave-valor; arestas direcionadas tipadas e com atributos |
| **Identificação Global** | Cada nó e predicado utiliza obrigatoriamente **URIs/IRIs globais unívocas** | Utiliza identificadores internos locais do banco de dados (IDs numéricos ou strings) |
| **Padrão Normativo** | Recomendações abertas e universais do **W3C** (RDF, RDFS, OWL, SPARQL) | Sem norma única formal (de facto padronizado por sistemas como Neo4j e linguagem Cypher / GQL) |
| **Capacidade de Inferência** | **Nativa e automatizada:** Motores de inferência (reasoners) deduzem novas triplas a partir de ontologias OWL e taxonomias RDFS | Não nativa: exige programação algorítmica explícita ou regras de aplicação ad hoc |
| **Federação na Web** | **Nativa:** Projetado para cruzar e federar bases distribuídas em múltiplos servidores na Internet (*Linked Open Data*) | Projetado primordialmente para alto desempenho em clusters fechados ou corporativos |
| **Linguagem de Consulta** | **SPARQL** (*SPARQL Protocol and RDF Query Language*) | **Cypher**, Gremlin ou padrão ISO GQL (*Graph Query Language*) |
| **Uso Canônico em Bibliotecas** | Modelos BIBFRAME 2.0, SKOS, LexML Brasil e redes de dados abertos interconectadas | Sistemas internos de análise de redes sociais, rastreamento de fraudes e motores de busca rápida |

#### B. A Linguagem de Consulta SPARQL (W3C Recommendation)
O **SPARQL** é a linguagem canônica de consulta e protocolo para bases de dados em grafos RDF (*Triplestores*). Opera por **casamento de padrões de triplas (*graph pattern matching*)**, nas quais variáveis são identificadas pelo prefixo de interrogação (\`?x\`, \`?autor\`).

* **As Quatro Formas Canônicas de Consulta SPARQL:**
  1. \`SELECT\`: Retorna os valores das variáveis que satisfizeram o padrão do grafo em um formato tabular bidimensional (semelhante ao \`SELECT\` do SQL).
  2. \`CONSTRUCT\`: Retorna um **novo subgrafo RDF** gerado a partir de um modelo de triplas especificado, permitindo transformar dados de uma ontologia para outra.
  3. \`ASK\`: Retorna uma resposta booleana estrita (\`true\` ou \`false\`), verificando se determinado padrão de tripla existe na base sem retornar os dados em si.
  4. \`DESCRIBE\`: Retorna um grafo RDF com todos os dados e relações que descrevem os recursos encontrados pelo padrão.
* **Cláusulas e Operadores Fundamentais:**
  * \`PREFIX\`: Declara apelidos curtos para URIs longas (ex.: \`PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\`).
  * \`WHERE { ... }\`: Bloco que delimita os padrões de triplas a serem casados no grafo.
  * \`FILTER\`: Aplica restrições lógicas, numéricas, textuais (regex) ou de idioma (ex.: \`FILTER (lang(?nome) = "pt")\`).
  * \`OPTIONAL { ... }\`: Permite recuperar dados complementares sem descartar a linha caso o predicado não exista para aquele recurso (análogo ao \`LEFT JOIN\` relacional).
  * \`ORDER BY\`, \`LIMIT\` e \`OFFSET\`: Paginação e ordenação dos resultados tabulares.

#### C. O Modelo SKOS (Simple Knowledge Organization System)
Padronizado pelo W3C (2009), o **SKOS** é o vocabulário ontológico projetado para converter linguagens documentárias tradicionais (tesauros, sistemas de classificação, listas de cabeçalhos de assunto) em grafos semânticos legíveis por máquinas:
* \`skos:Concept\`: A unidade conceitual fundamental (o nó conceitual abstrato).
* \`skos:prefLabel\`: O termo preferido ou descritor oficial na língua indicada (ex.: \`"Poder Legislativo"@pt\`).
* \`skos:altLabel\`: Termos não preferidos, sinônimos ou remissivas "ver" (ex.: \`"Parlamento"@pt\`).
* \`skos:hiddenLabel\`: Grafias errôneas comuns ou variantes fonéticas para indexação interna sem exibição ao usuário.
* **Relações Semânticas Estruturadas:**
  * \`skos:broader\`: Relação hierárquica para termo mais genérico / amplo (TG / BT).
  * \`skos:narrower\`: Relação hierárquica para termo mais específico / restrito (TE / NT).
  * \`skos:related\`: Relação associativa para termos semanticamente afins (TR / RT).

#### D. Caso Concreto Legislativo: Consulta SPARQL no Grafo da Câmara dos Deputados
Considere um grafo de conhecimento da Câmara dos Deputados em que proposições legislativas são interligadas aos seus relatores e indexadas com o *Tesauro da Câmara* modelado em SKOS. A consulta SPARQL abaixo recupera o número da proposição, o nome do relator e a data de apresentação de todos os projetos classificados sob o conceito de "Inteligência Artificial":

\`\`\`sparql
PREFIX leg: <http://camara.leg.br/ontologia/legislativo#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?proposicao ?siglaTipo ?numero ?ano ?nomeRelator
WHERE {
  # 1. Localiza a proposição e seus atributos básicos
  ?proposicao a leg:Proposicao ;
              leg:siglaTipo ?siglaTipo ;
              leg:numero ?numero ;
              leg:ano ?ano ;
              leg:tema ?conceito ;
              leg:relator ?parlamentar .

  # 2. Conecta ao conceito do Tesauro em SKOS
  ?conceito a skos:Concept ;
            skos:prefLabel ?rotuloTema .
  
  # 3. Recupera o nome do parlamentar relator
  ?parlamentar rdfs:label ?nomeRelator .

  # 4. Filtra proposições indexadas com o termo exato
  FILTER (?rotuloTema = "Inteligência Artificial"@pt)
}
ORDER BY DESC(?ano) ?numero
LIMIT 50
\`\`\`

---

### 5. Identificadores Persistentes e Autoridade de Entidades

Para viabilizar a autoridade e a rastreabilidade unívoca na web, utilizam-se identificadores persistentes e bases de autoridade universais (item 2.12 do Bloco D):

* **ISNI (*International Standard Name Identifier* — ISO 27729):** Identificador global de 16 dígitos para certificar a identidade de pessoas, criadores e organizações envolvidas em atividades criativas (autores, músicos, parlamentares, instituições).
* **VIAF (*Virtual International Authority File*):** Projeto global hospedado pelo OCLC que interconecta catálogos de autoridade de dezenas de bibliotecas nacionais ao redor do mundo (incluindo Library of Congress e Biblioteca Nacional do Brasil), atribuindo uma URI agregadora única que reúne todas as grafias variantes de um mesmo autor.
* **ORCID (*Open Researcher and Contributor ID*):** Código persistente internacional alfanumérico de 16 dígitos voltado especificamente para cientistas, docentes e pesquisadores acadêmicos.
* **DOI (*Digital Object Identifier* — ISO 26324):** Identificador persistente unívoco e acionável atribuído a objetos digitais individuais (artigos de periódicos, teses, datasets e relatórios de pesquisa).
* **Wikidata:** Base de dados em grafo aberta e colaborativa, amplamente utilizada como nó central de autoridade na interligação de identificadores de Linked Data.

---

### 6. Os Quatro Níveis de Interoperabilidade

A interoperabilidade é a capacidade de sistemas distintos e autônomos comunicarem-se e trocarem dados de maneira eficiente e sem atritos semânticos. O edital nº 1/2026 estrutura essa matéria em **quatro níveis canônicos**:

| Nível de Interoperabilidade | Definição Teórica e Tecnológica | Foco Principal | Exemplo Prático na Câmara dos Deputados |
| :--- | :--- | :--- | :--- |
| **1. Interoperabilidade Sintática** | Refere-se à estrutura de codificação e às linguagens de formatação das mensagens. Garante que os sistemas consigam ler e realizar o *parsing* mecânico dos caracteres transmitidos. | Formatos e codificações: XML, JSON, UTF-8, delimitadores. | Um sistema conseguir ler os caracteres de um arquivo XML sem erros de codificação ou sintaxe. |
| **2. Interoperabilidade Estrutural** | Refere-se aos esquemas de dados formais e à arquitetura de relacionamentos que organizam as tabelas e os campos dos arquivos. | Esquemas e contêineres: XML Schema (XSD), DTD, METS, tabelas SQL. | Validação de que um arquivo segue rigorosamente a estrutura hierárquica exigida pelo esquema do LexML Brasil. |
| **3. Interoperabilidade Semântica** | Refere-se ao significado partilhado e à interpretação unívoca dos conceitos trocados, assegurando que o receptor compreenda exatamente o que o emissor quis expressar. | Ontologias, vocabulários controlados, tesauros, SKOS, OWL, Dublin Core. | Uso do *Tesauro da Câmara dos Deputados* para garantir que o termo "Direito Tributário" represente rigorosamente o mesmo conceito no Senado e na Câmara. |
| **4. Interoperabilidade Organizacional** | Refere-se ao alinhamento de processos de trabalho, políticas públicas, acordos formais de cooperação institucional e requisitos jurídicos entre órgãos autônomos. | Governança institucional, acordos de cooperação técnica, fluxos de trabalho. | Convênio formal entre a Câmara dos Deputados, o Senado Federal e o STF para manutenção cooperativa da Rede Virtual de Bibliotecas (RVBI). |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Formato MARC 21 Bibliográfico e Autoridades (sub-2-4):** Mapeamento de campos legados para classes e propriedades BIBFRAME.
* **Tesauros, Ontologias e SKOS (sub-3-4):** Modelagem semântica de vocabulários controlados em RDF e SPARQL.
* **IA Aplicada à Informação (sub-6-7):** Conexão entre grafos de conhecimento, ontologias e recuperação vetorial/RAG.
`,
  checkpoints: [
    {
      id: 'cp-2-7-1',
      pergunta: 'Micro-Checkpoint 1: Estrutura Conceitual do Modelo BIBFRAME 2.0 (LoC)',
      item: 'No BIBFRAME 2.0, as classes centrais do modelo são Work, Instance e Item.',
      gabarito: 'C',
      justificativa:
        'Certo! O modelo BIBFRAME 2.0, mantido pela Library of Congress para a catalogação em Linked Data, organiza os recursos bibliográficos a partir de três classes fundamentais: Work (conteúdo conceitual/intelectual), Instance (publicação/emissão concreta em determinado suporte) e Item (cópia física ou digital específica custodiada).',
    },
    {
      id: 'cp-2-7-2',
      pergunta: 'Micro-Checkpoint 2: Compatibilidade do Padrão MODS com o Formato MARC 21',
      item: 'O MODS é um padrão de metadados incompatível com o MARC 21, uma vez que utiliza XML e rótulos em linguagem natural em lugar de campos numéricos.',
      gabarito: 'E',
      justificativa:
        'Errado! O MODS (Metadata Object Description Schema) foi projetado pela própria Library of Congress expressamente a partir do conjunto de elementos do MARC 21, sendo plenamente compatível com ele. Suas tags em linguagem natural expressam a rica semântica do MARC em um formato amigável para a web, com conversores oficiais bidirecionais mantidos pela LoC.',
      versao_correta:
        'O MODS é plenamente compatível com o formato MARC 21, tendo sido derivado dele para expressar sua riqueza catalográfica em linguagem XML com rótulos semânticos legíveis.',
    },
    {
      id: 'cp-2-7-3',
      pergunta: 'Micro-Checkpoint 3: Arquitetura e Funções do Padrão METS (Library of Congress)',
      item: 'O METS é um padrão que atua como envelope XML, podendo reunir metadados descritivos e administrativos, a lista de arquivos e o mapa estrutural de um objeto digital.',
      gabarito: 'C',
      justificativa:
        'Certo! O METS (Metadata Encoding and Transmission Standard) atua como um contêiner estrutural padronizado em XML projetado para empacotar objetos digitais complexos, articulando metadados descritivos (dmdSec), administrativos (amdSec), arquivos digitais (fileSec) e a hierarquia de apresentação no mapa estrutural (structMap).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-7-1',
        periodo: '2001',
        disciplina: 'Padrões de Empacotamento Digital',
        focoPrincipal: 'Lançamento do padrão METS (Metadata Encoding and Transmission Standard)',
        figuraChave: 'Library of Congress',
      },
      {
        id: 'tl-2-7-2',
        periodo: '2002',
        disciplina: 'Metadados Descritivos em XML',
        focoPrincipal: 'Publicação do padrão MODS 1.0 (Metadata Object Description Schema)',
        figuraChave: 'Library of Congress',
      },
      {
        id: 'tl-2-7-3',
        periodo: '2006',
        disciplina: 'Web Semântica e Dados Conectados',
        focoPrincipal: 'Formulação das quatro regras de ouro do Linked Data',
        figuraChave: 'Sir Tim Berners-Lee',
      },
      {
        id: 'tl-2-7-4',
        periodo: '2016',
        disciplina: 'Catalogação para a Web Semântica',
        focoPrincipal: 'Consolidação e lançamento oficial do modelo BIBFRAME 2.0',
        figuraChave: 'Library of Congress (LoC)',
      },
    ],
    autores: [
      {
        id: 'aut-2-7-1',
        nome: 'Library of Congress',
        ano: 2016,
        obraPrincipal: 'BIBFRAME 2.0 / METS / MODS Specifications',
        ideiaChave: 'Liderança global na transição dos registros bibliográficos do MARC 21 para contêineres XML e Linked Data.',
        chipPegadinha: 'O BIBFRAME organiza-se em Work, Instance e Item (não confunda com os 4 níveis WEMI do LRM).',
      },
      {
        id: 'aut-2-7-2',
        nome: 'Tim Berners-Lee',
        ano: 2006,
        obraPrincipal: 'Linked Data Design Issues',
        ideiaChave: 'Uso de URIs HTTP para nomear recursos, padrões RDF/SPARQL e links conectando entidades na Web.',
        chipPegadinha: 'Se uma URI não for HTTP nem usar padrões abertos, viola as regras de Linked Data.',
      },
      {
        id: 'aut-2-7-3',
        nome: 'World Wide Web Consortium (W3C)',
        ano: 2004,
        obraPrincipal: 'RDF and OWL Recommendations',
        ideiaChave: 'Padronização da representação de triplas semânticas (Sujeito-Predicado-Objeto) e ontologias.',
        chipPegadinha: 'SKOS é voltado para sistemas de organização do conhecimento (tesauros); OWL é para ontologias formais.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-7-1',
        afirmacao: 'O padrão METS substitui o esquema Dublin Core por apresentar tags descritivas idênticas para título e autor.',
        gabarito: 'E',
        porQue: 'O METS não é um formato de descrição de conteúdo, mas um contêiner/envelope estrutural. Ele não concorre com o Dublin Core; pelo contrário, o METS hospeda registros em Dublin Core ou MODS dentro de sua seção dmdSec.',
      },
      {
        id: 'peg-2-7-2',
        afirmacao: 'No modelo BIBFRAME 2.0, a classe "Instance" descreve a ideia ou conceito intelectual imaterial da criação antes de qualquer publicação.',
        gabarito: 'E',
        porQue: 'A ideia imaterial e o conceito intelectual correspondem à classe WORK (Obra). A classe INSTANCE (Instância) representa a publicação ou emissão material/digital concreta da obra por uma editora.',
      },
    ],
  },
};
