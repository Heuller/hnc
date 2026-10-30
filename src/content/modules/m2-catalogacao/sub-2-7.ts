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
    "termo": "Modelo e formato",
    "definicao": "Representar relações conceituais difere de serializar e transportar dados.",
    "exemploBiblioteca": "MODS e MARCXML usam XML, mas não têm esquemas idênticos."
  },
  {
    "termo": "Grafo RDF",
    "definicao": "No RDF 1.1, triplas têm termos permitidos conforme posição.",
    "exemploBiblioteca": "Um objeto pode ser literal e um sujeito pode ser nó em branco."
  }
],
  descricaoCurta: "Distinguir MODS, MARCXML e conversão. Relacionar empacotamento e estrutura, explicitando versão METS. Mapear Work, Instance e Item sem equivalência perfeita forçada. Interpretar RDF, SPARQL e SKOS com limites de implementação. Distinguir relações semânticas e interpretar o alcance do exemplo SPARQL. Separar identificar, autenticar e manter resolução. Diagnosticar dimensões de interoperabilidade.",
  tempoEstimadoMinutos: 31,
  autoresChave: [
  "Library of Congress — MODS",
  "Library of Congress — METS e METS 2",
  "Library of Congress — BIBFRAME",
  "W3C — RDF 1.1 Concepts",
  "W3C — SPARQL 1.1 Query",
  "W3C — SKOS Reference"
],
  alertasCebraspe: [
  "Compartilhar sintaxe não elimina diferenças de esquema e granularidade.",
  "A especificação deixa a descrição à implementação do serviço; não há promessa de completude universal.",
  "Associação e hierarquia têm semânticas distintas; não se devem trocar predicados apenas por ligarem conceitos."
],
  teoriaDensaMarkdown: "### MODS (Metadata Object Description Schema): O Padrão XML da Library of Congress\n\nDesenvolvido pela *Library of Congress* (LoC) como iniciativa do *Network Development and MARC Standards Office*, o **MODS** (*Metadata Object Description Schema*) foi projetado para suprir a lacuna existente entre a excessiva complexidade do formato **MARC 21** e a extrema simplicidade do padrão **Dublin Core**.\n\n**Comparação por finalidade, sem sequência evolutiva obrigatória:** MARC codifica dados catalográficos; DC oferece propriedades gerais; MODS descreve recursos em XML com granularidade própria; BIBFRAME representa dados bibliográficos conectados. Um não é simplesmente a nova versão do outro. A origem do MARC na década de 1960 não é a data de criação da denominação MARC 21.\n\n#### A. Características Arquiteturais do MODS:\n* **Compatibilidade e Derivação do MARC 21:** O MODS foi concebido expressamente a partir do conjunto de elementos do MARC 21. Um subconjunto substancial de dados catalográficos pode ser convertido de MARC 21 para MODS mas a equivalência e a reversibilidade dependem dos dados e mapeamentos; o formato não garante ida e volta sem perda, utilizando scripts de transformação XSLT mantidos pela própria Biblioteca do Congresso.\n* **Linguagem Natural Legível (*Human-Readable Tags*):** Em vez de empregar campos crípticos de três dígitos como `100 1# $a`, o MODS utiliza elementos semânticos legíveis em XML, tais como `<titleInfo><title>`, `<name type=\"personal\"><namePart>`, `<genre>` e `<subject>`.\n* **Riqueza Superior ao Dublin Core:** Enquanto o Dublin Core possui apenas `dc:creator` e `dc:contributor`, o MODS permite especificar papéis detalhados de autoria (`<role><roleTerm>`), qualificadores de edição, formas variantes de títulos e datas estruturadas de forma muito mais sofisticada.\n* **Uso Típico:** Muito empregado na descrição de acervos digitais de bibliotecas acadêmicas, como formato de entrega em repositórios digitais e como metadado descritivo embutido em contêineres METS.\n\n**Aplicação e recuperação:** MARCXML expressa estrutura MARC em XML; MODS possui elementos e granularidade próprios. O fato de ambos usarem XML não prova identidade de significado. Para migração, compare campos e teste ida/volta com registros reais; etiquetas legíveis não garantem preservação de todos os detalhes.\n\n### METS (Metadata Encoding and Transmission Standard): O Padrão Envelope XML\n\nTambém mantido pela *Library of Congress*, o **METS** (*Metadata Encoding and Transmission Standard*) não é um esquema de metadados descritivos isolado (ele não define como descrever o autor ou o título de um livro). O METS é um **padrão de empacotamento e contêiner estrutural** (*wrapper/envelope*) codificado em XML, cujo propósito primordial é congregar, em um único documento padronizado, informações e referências a componentes de um objeto digital; não exige embutir no próprio XML todos os arquivos binários.\n\n#### As Sete Seções Formais da Estrutura do METS:\n**No METS 1**, a organização é usualmente explicada pelas sete seções abaixo, com obrigatoriedades e cardinalidades definidas no esquema/perfil. **METS 2 foi disponibilizado em 2025**, com simplificações e retirada da dependência de XLink; não transporte automaticamente toda estrutura ou regra do METS 1 para ele:\n\n1. **Cabeçalho METS (`metsHdr` - *METS Header*):** Armazena metadados sobre o próprio documento METS em si (data de criação, data da última modificação, agência responsável e agentes que manipularam o arquivo).\n2. **Seção de Metadados Descritivos (`dmdSec` - *Descriptive Metadata Section*):** Contém ou aponta para metadados descritivos externos. Pode embutir diretamente registros em MARCXML, MODS ou Dublin Core (`<mdWrap>`) ou apontar para um URI externo (`<mdRef>`).\n3. **Seção de Metadados Administrativos (`amdSec` - *Administrative Metadata Section*):** Reúne metadados de gestão, subdividindo-se em:\n   * `techMD`: Metadados técnicos sobre a criação e os parâmetros do arquivo (ex.: NISO MIX para imagens).\n   * `rightsMD`: Direitos autorais e termos de licença (ex.: Creative Commons).\n   * `sourceMD`: Metadados sobre a fonte analógica original que foi digitalizada.\n   * `digiprovMD`: Metadados de proveniência digital e eventos de preservação (ex.: PREMIS).\n4. **Seção de Arquivos (`fileSec` - *File Section*):** Lista e inventaria todos os arquivos de conteúdo digital que compõem o objeto (arquivos master TIFF, arquivos derivados JPEG, PDFs, áudios MP3), organizados em grupos de arquivos (`fileGrp`).\n5. **Mapa Estrutural (`structMap` - *Structural Map*):** **É o coração obrigatório do documento METS.** Organiza a hierarquia lógica e física do objeto digital (capítulos, seções, páginas, fólios) e permite relacionar divisões e componentes, segundo estrutura e mecanismos do esquema; nem toda divisão precisa apontar diretamente a um arquivo.\n6. **Ligações Estruturais (`structLink` - *Structural Links*):** Seção opcional que estabelece hiperlinks e conexões não hierárquicas entre diferentes nós da árvore estruturada no `structMap`.\n7. **Seção de Comportamento (`behaviorSec` - *Behavior Section*):** Associa executáveis, scripts ou códigos de software específicos a nós do documento para renderizar interativamente o recurso.\n\n**Aplicação e recuperação:** Um pacote aponta às imagens e descreve a ordem de páginas. Os arquivos podem continuar externos ao documento XML. O mapa estrutural articula partes, enquanto dmdSec pode usar outro esquema descritivo. Ao encontrar “sete seções”, identifique que a explicação é do METS 1; o esquema METS 2 deve ser consultado separadamente.\n\n### BIBFRAME 2.0: A Transição da Catalogação para o Linked Data\n\nA *Bibliographic Framework Initiative* (BIBFRAME) foi lançada pela *Library of Congress* para suceder o formato **MARC 21**, projetando a catalogação e os registros das bibliotecas no ecossistema da **Web Semântica e do Linked Data**.\n\n#### A. As Três Classes Centrais do BIBFRAME 2.0:\nDiferentemente do modelo conceitual IFLA LRM (que utiliza a tetralogia Obra, Expressão, Manifestação e Item — WEMI), o BIBFRAME 2.0 adota outro recorte conceitual em **três classes nucleares**:\n\n```timeline\n1. WORK (Obra) | Conteúdo Intelectual Abstrato | Conceito imaterial, tema, autores, gênero e forma artística da criação\n---> Concretização Editorial\n2. INSTANCE (Instância) | Publicação Material / Digital | Publicação concreta da Obra (editora, data de publicação, paginação, suporte)\n---> Cópia Física ou Eletrônica\n3. ITEM (Item) | O Exemplar Concreto | A cópia tangível única mantida no acervo físico ou arquivo específico com código de barras\n```\n\n* **1. Work (Obra):** Representa o nível mais elevado de abstração intelectual ou artística. Reflete o conteúdo conceitual e a essência da criação (título uniforme, assunto, autoria, gênero/forma). No BIBFRAME, o Work absorve grande parte das propriedades da \"Expressão\" do LRM.\n* **2. Instance (Instância):** Representa a publicação, emissão ou distribuição concreta de uma Obra em determinado suporte físico ou digital (uma edição de bolso pela Editora Saraiva em 2020; o e-book em EPUB publicado pela Câmara dos Deputados em 2024). Equivale aproximadamente à \"Manifestação\" do IFLA LRM.\n* **3. Item (Item):** É o exemplar físico individual ou a cópia digital localizada custodiada por uma biblioteca (o exemplar nº 3 da Biblioteca Pedro Aleixo com código de barras e anotações marginais).\n\n#### B. Classes e Conceitos Acessórios:\nO modelo BIBFRAME complementa essas classes nucleares com entidades-chave:\n* **Agents (Agentes):** Pessoas, organizações corporativas ou jurisdições associadas a uma Obra ou Instância (autores, tradutores, editores).\n* **Subjects (Assuntos):** O que a Obra aborda (conceitos, lugares, eventos, períodos históricos).\n* **Events (Eventos):** Ocorrências que caracterizam a história do recurso.\n\n#### C. A Conversão MARC 21 para BIBFRAME:\nA transição não ocorre por \"extinção abrupta\", mas pela coexistência e conversão automatizada:\n* A Library of Congress mantém ferramentas de código aberto como o programa **`marc2bibframe2`** (disponível publicamente no GitHub da LoC), que recebe registros MARC 21 em formato MARCXML e os transforma em grafos RDF de BIBFRAME 2.0.\n* O enriquecimento pode reconciliar nomes e assuntos com **URIs** em vocabulários de autoridade. Isso não acontece perfeitamente por simples transposição de strings e exige regras/validação (ex.: `id.loc.gov`, VIAF, ISNI e Wikidata).\n\n**Aplicação e recuperação:** Uma tradução pode ser modelada em Work BIBFRAME com relações próprias, sem equivalência um-para-um com Work LRM. Instância aproxima-se de manifestação, mas aproximação didática não é identidade formal. Conversores da LoC têm versões e regras que devem ser registradas na migração.\n\n### Linked Data, Grafos de Conhecimento e a Web Semântica (Alvo E4)\n\nO cientista britânico **Sir Tim Berners-Lee** estabeleceu em 2006 os quatro princípios axiomáticos para a publicação de dados interligados (*Linked Data*) na Web Semântica:\n\n1. **Use URIs como nomes para as coisas:** Use identificadores para as coisas de interesse. Isso não implica uma autoridade mundial única que impeça duas URIs de se referirem à mesma entidade.\n2. **Use URIs HTTP:** Os identificadores devem adotar o protocolo HTTP (`http://...` ou `https://...`), permitindo que pessoas e programas de computador consultem esses identificadores (*dereferencing*).\n3. **Forneça informações úteis quando alguém consultar a URI:** Ao acessar a URI, o servidor deve retornar uma descrição estruturada da entidade utilizando padrões abertos recomendados pelo W3C (em especial **RDF** e consultas via **SPARQL**).\n4. **Inclua links para outras URIs:** A descrição do recurso deve conter hiperlinks que apontem para URIs externas correlatas, viabilizando a descoberta de novos conhecimentos na teia global de dados (*Web of Data*).\n\n#### A. Grafos Semânticos RDF (*Triplestores*) vs. Grafos de Propriedades (*Property Graphs*)\nNa Ciência da Informação e na Computação contemporânea, os grafos de conhecimento estruturam-se em dois paradigmas fundamentais:\n\n| Critério de Comparação | Grafo Semântico RDF (Padrão W3C) | Grafo de Propriedades (*Property Graph*) |\n| :--- | :--- | :--- |\n| **Unidade Básica de Dados** | **Tríplice Atômica:** `[Sujeito] ──(Predicado)──> [Objeto]` | **Nós e Arestas Atributados:** Nós com rótulos e pares chave-valor; arestas direcionadas tipadas e com atributos |\n| **Identificação Global** | No RDF 1.1, sujeito pode ser IRI ou nó em branco; predicado é IRI; objeto pode ser IRI, nó em branco ou literal | Pode usar identificadores locais e propriedades, inclusive valores que sejam identificadores externos conforme o projeto |\n| **Padrão Normativo** | Recomendações abertas e universais do **W3C** (RDF, RDFS, OWL, SPARQL) | Existem implementações e linguagens diversas; **ISO/IEC 39075:2024 (GQL)** é norma de linguagem para grafos de propriedades |\n| **Capacidade de Inferência** | RDFS/OWL oferecem semântica para inferências, mas sua execução depende do regime e do motor configurados; um grafo RDF não deduz automaticamente tudo | Capacidades dependem da implementação e das regras; não se infere impossibilidade universal apenas pelo modelo |\n| **Federação na Web** | Padrões apoiam ligação e consultas federadas quando serviços e permissões forem implementados; não há federação operacional automática | Projetado primordialmente para alto desempenho em clusters fechados ou corporativos |\n| **Linguagem de Consulta** | **SPARQL** (*SPARQL Protocol and RDF Query Language*) | **Cypher**, Gremlin ou padrão ISO GQL (*Graph Query Language*) |\n| **Uso Canônico em Bibliotecas** | Modelos BIBFRAME 2.0, SKOS, LexML Brasil e redes de dados abertos interconectadas | Sistemas internos de análise de redes sociais, rastreamento de fraudes e motores de busca rápida |\n\n#### B. A Linguagem de Consulta SPARQL (W3C Recommendation)\nO **SPARQL** é a linguagem canônica de consulta e protocolo para bases de dados em grafos RDF (*Triplestores*). Opera por **casamento de padrões de triplas (*graph pattern matching*)**, nas quais variáveis são identificadas pelo prefixo de interrogação (`?x`, `?autor`).\n\n* **As Quatro Formas Canônicas de Consulta SPARQL:**\n  1. `SELECT`: Retorna os valores das variáveis que satisfizeram o padrão do grafo em um formato tabular bidimensional (semelhante ao `SELECT` do SQL).\n  2. `CONSTRUCT`: Retorna um **novo subgrafo RDF** gerado a partir de um modelo de triplas especificado, permitindo transformar dados de uma ontologia para outra.\n  3. `ASK`: Retorna uma resposta booleana estrita (`true` ou `false`), verificando se determinado padrão de tripla existe na base sem retornar os dados em si.\n  4. `DESCRIBE`: Retorna um grafo descritivo dos recursos; a especificação deixa ao serviço a definição do conjunto de triplas retornadas, não garante todos os dados.\n* **Cláusulas e Operadores Fundamentais:**\n  * `PREFIX`: Declara apelidos curtos para URIs longas (ex.: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>`).\n  * `WHERE { ... }`: Bloco que delimita os padrões de triplas a serem casados no grafo.\n  * `FILTER`: Aplica restrições lógicas, numéricas, textuais (regex) ou de idioma (ex.: `FILTER (lang(?nome) = \"pt\")`).\n  * `OPTIONAL { ... }`: Permite recuperar dados complementares sem descartar a linha caso o predicado não exista para aquele recurso (análogo ao `LEFT JOIN` relacional).\n  * `ORDER BY`, `LIMIT` e `OFFSET`: Paginação e ordenação dos resultados tabulares.\n\n### SKOS e exemplo de consulta\n\n#### C. O Modelo SKOS (Simple Knowledge Organization System)\nPadronizado pelo W3C (2009), o **SKOS** é o vocabulário ontológico projetado para converter linguagens documentárias tradicionais (tesauros, sistemas de classificação, listas de cabeçalhos de assunto) em grafos semânticos legíveis por máquinas:\n* `skos:Concept`: A unidade conceitual fundamental (o nó conceitual abstrato).\n* `skos:prefLabel`: O termo preferido ou descritor oficial na língua indicada (ex.: `\"Poder Legislativo\"@pt`).\n* `skos:altLabel`: Termos não preferidos, sinônimos ou remissivas \"ver\" (ex.: `\"Parlamento\"@pt`).\n* `skos:hiddenLabel`: Grafias errôneas comuns ou variantes fonéticas para indexação interna sem exibição ao usuário.\n* **Relações Semânticas Estruturadas:**\n  * `skos:broader`: Relação hierárquica para termo mais genérico / amplo (TG / BT).\n  * `skos:narrower`: Relação hierárquica para termo mais específico / restrito (TE / NT).\n  * `skos:related`: Relação associativa para termos semanticamente afins (TR / RT).\n\n#### D. Exemplo autoral hipotético: consulta SPARQL\nConsidere um grafo hipotético, sem afirmar que esta ontologia ou endpoint foi implantado pela Câmara. A consulta ilustra busca por rótulo exato de tema, retorna tipo/número/ano e relator e limita cinquenta soluções. Ela **não retorna data de apresentação nem garante todos os projetos**. Busca por URI de conceito e tratamento de hierarquia/idiomas seriam outras decisões:\n\n```sparql\nPREFIX leg: <https://example.org/legislativo/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?proposicao ?siglaTipo ?numero ?ano ?nomeRelator\nWHERE {\n  # 1. Localiza a proposição e seus atributos básicos\n  ?proposicao a leg:Proposicao ;\n              leg:siglaTipo ?siglaTipo ;\n              leg:numero ?numero ;\n              leg:ano ?ano ;\n              leg:tema ?conceito ;\n              leg:relator ?parlamentar .\n\n  # 2. Conecta ao conceito do Tesauro em SKOS\n  ?conceito a skos:Concept ;\n            skos:prefLabel ?rotuloTema .\n  \n  # 3. Recupera o nome do parlamentar relator\n  ?parlamentar rdfs:label ?nomeRelator .\n\n  # 4. Filtra proposições indexadas com o termo exato\n  FILTER (?rotuloTema = \"Inteligência Artificial\"@pt)\n}\nORDER BY DESC(?ano) ?numero\nLIMIT 50\n```\n\n**Aplicação e recuperação:** No RDF 1.1, o nome de uma pessoa pode ser literal e a pessoa pode ser IRI ou nó em branco. ASK verifica soluções do padrão; SELECT projeta variáveis; CONSTRUCT produz grafo a partir do modelo; DESCRIBE não promete todas as relações. Em SKOS, rótulo preferido não deve ser confundido com o conceito. broader não equivale automaticamente a broaderTransitive, e related não expressa hierarquia.\n\n### Identificadores Persistentes e Autoridade de Entidades\n\nPara viabilizar a autoridade e a rastreabilidade unívoca na web, utilizam-se identificadores persistentes e bases de autoridade universais (item 2.12 do Bloco D):\n\n* **ISNI (*International Standard Name Identifier* — ISO 27729):** Identificador de dezesseis caracteres, com dígito de controle que pode ser X, para distinguir identidades públicas de pessoas, criadores e organizações envolvidas em atividades criativas (autores, músicos, parlamentares, instituições).\n* **VIAF (*Virtual International Authority File*):** Projeto global hospedado pelo OCLC que interconecta catálogos de autoridade de dezenas de bibliotecas nacionais ao redor do mundo (incluindo Library of Congress e Biblioteca Nacional do Brasil), reunindo registros de autoridade em agrupamentos; reconciliação pode precisar de revisão e não garante ausência de erros.\n* **ORCID (*Open Researcher and Contributor ID*):** Identificador persistente de dezesseis caracteres para pesquisadores e contribuidores, com dígito de controle que pode ser X; não é certificado de qualificação nem se limita a docentes.\n* **DOI (*Digital Object Identifier* — ISO 26324):** Identificador persistente unívoco e acionável atribuído a objetos nos termos do sistema DOI, não exclusivamente arquivos digitais; resolução e metadados dependem de gestão.\n* **Wikidata:** Base de dados em grafo aberta e colaborativa, amplamente utilizada como nó central de autoridade na interligação de identificadores de Linked Data.\n\n**Aplicação e recuperação:** Um DOI continua identificando objeto quando a URL muda se os registros forem mantidos. Isso não torna o artigo verdadeiro nem prova identidade de quem o enviou. ORCID distingue contribuidores; ISNI cobre identidades públicas; VIAF agrega autoridades. Identificador persistente é compromisso de gestão, não propriedade mágica de uma string.\n\n### Os Quatro Níveis de Interoperabilidade\n\nA interoperabilidade é a capacidade de sistemas distintos e autônomos comunicarem-se e trocarem dados de maneira eficiente e sem atritos semânticos. Para analisar os tópicos, usamos quatro dimensões abaixo. Outros referenciais podem adotar divisões e nomes diferentes; não há taxonomia única universal:\n\n| Nível de Interoperabilidade | Definição Teórica e Tecnológica | Foco Principal | Exemplo Prático na Câmara dos Deputados |\n| :--- | :--- | :--- | :--- |\n| **1. Interoperabilidade Sintática** | Refere-se à estrutura de codificação e às linguagens de formatação das mensagens. Garante que os sistemas consigam ler e realizar o *parsing* mecânico dos caracteres transmitidos. | Formatos e codificações: XML, JSON, UTF-8, delimitadores. | Um sistema conseguir ler os caracteres de um arquivo XML sem erros de codificação ou sintaxe. |\n| **2. Interoperabilidade Estrutural** | Refere-se aos esquemas de dados formais e à arquitetura de relacionamentos que organizam as tabelas e os campos dos arquivos. | Esquemas e contêineres: XML Schema (XSD), DTD, METS, tabelas SQL. | Validação de que um arquivo segue rigorosamente a estrutura hierárquica exigida pelo esquema do LexML Brasil. |\n| **3. Interoperabilidade Semântica** | Refere-se ao significado partilhado e à interpretação unívoca dos conceitos trocados, assegurando que o receptor compreenda exatamente o que o emissor quis expressar. | Ontologias, vocabulários controlados, tesauros, SKOS, OWL, Dublin Core. | Uso do *Tesauro da Câmara dos Deputados* para apoiar correspondência conceitual, que exige governança e mapeamento; mesmo rótulo não prova identidade de significado. |\n| **4. Interoperabilidade Organizacional** | Refere-se ao alinhamento de processos de trabalho, políticas públicas, acordos formais de cooperação institucional e requisitos jurídicos entre órgãos autônomos. | Governança institucional, acordos de cooperação técnica, fluxos de trabalho. | Convênio formal entre a Câmara dos Deputados, o Senado Federal e o STF para manutenção cooperativa da Rede Virtual de Bibliotecas (RVBI). |\n\n**Aplicação e recuperação:** XML bem formado resolve parte sintática; dois sistemas ainda podem discordar sobre se a data é publicação ou aprovação. Um acordo institucional pode faltar mesmo com formatos e vocabulários comuns. Localize o problema pela função, sem presumir que validar um XSD resolve todos os níveis.",
  teoriaDidaticaMarkdown: "### Revisão: formato, modelo e serviço\n\nMODS não é MARCXML nem garante reversibilidade. METS articula componentes e metadados; detalhes das sete seções referem-se ao METS 1, distinguindo a versão 2 de 2025. BIBFRAME 2.0 tem Work, Instance e Item, sem correspondência perfeita obrigatória com WEMI. RDF 1.1 admite IRIs, nós em branco e literais segundo posição; inferência e federação dependem de implementação. SELECT projeta soluções, ASK responde existência, CONSTRUCT cria grafo e DESCRIBE usa descrição definida pelo serviço. SKOS distingue conceito e rótulo. Identificadores não certificam verdade nem se mantêm sozinhos. Interoperabilidade exige sintaxe, estrutura, significado e acordos pertinentes.\n",
  checkpoints: [
  {
    "id": "cp-2-7-1",
    "pergunta": "Micro-Checkpoint 1: Estrutura Conceitual do Modelo BIBFRAME 2.0 (LoC)",
    "item": "No BIBFRAME 2.0, as classes centrais do modelo são Work, Instance e Item.",
    "gabarito": "C",
    "justificativa": "Work, Instance e Item são classes centrais. O modelo possui outras classes e propriedades e não é uma equivalência literal com as quatro entidades WEMI.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores."
  },
  {
    "id": "cp-2-7-2",
    "pergunta": "Micro-Checkpoint 2: Compatibilidade do Padrão MODS com o Formato MARC 21",
    "item": "O MODS é um padrão de metadados incompatível com o MARC 21, uma vez que utiliza XML e rótulos em linguagem natural em lugar de campos numéricos.",
    "gabarito": "E",
    "justificativa": "MODS tem origem relacionada a elementos MARC e existem mapeamentos. Usar XML não o torna incompatível, mas também não assegura equivalência integral e sem perdas.",
    "versao_correta": "MODS e MARC possuem mapeamentos; a conversão precisa avaliar diferenças de granularidade e perdas.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores."
  },
  {
    "id": "cp-2-7-3",
    "pergunta": "Micro-Checkpoint 3: Arquitetura e Funções do Padrão METS (Library of Congress)",
    "item": "O METS é um padrão que atua como envelope XML, podendo reunir metadados descritivos e administrativos, a lista de arquivos e o mapa estrutural de um objeto digital.",
    "gabarito": "C",
    "justificativa": "METS pode articular essas informações e referências a arquivos. Não exige embutir todos os binários no XML; detalhes estruturais dependem da versão e perfil.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores."
  },
  {
    "id": "rt-2-7-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Usar XML tanto em MARCXML quanto em MODS assegura identidade integral dos elementos e conversão reversível universal.",
    "gabarito": "E",
    "justificativa": "Compartilhar sintaxe não elimina diferenças de esquema e granularidade.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar",
    "versao_correta": "A equivalência deve ser examinada nos esquemas, dados e mapeamentos."
  },
  {
    "id": "rt-2-7-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A explicação tradicional de sete seções deve ser contextualizada como METS 1, pois METS 2 foi disponibilizado com mudanças em 2025.",
    "gabarito": "C",
    "justificativa": "Versões maiores têm estruturas e regras próprias; não basta citar METS sem delimitação ao cobrar detalhes.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-7-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No RDF 1.1, o objeto de uma tripla pode ser literal, e o sujeito pode ser um nó em branco.",
    "gabarito": "C",
    "justificativa": "O modelo distingue posições e tipos de termos; não exige IRI para todo nó.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-7-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "DESCRIBE obriga o serviço SPARQL a retornar todas as relações existentes sobre os recursos, sem liberdade de descrição.",
    "gabarito": "E",
    "justificativa": "A especificação deixa a descrição à implementação do serviço; não há promessa de completude universal.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar",
    "versao_correta": "DESCRIBE retorna grafo descritivo segundo o serviço, sem garantia de todas as relações."
  },
  {
    "id": "rt-2-7-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Ter identificador persistente não certifica a verdade do conteúdo identificado.",
    "gabarito": "C",
    "justificativa": "Identificação, resolução e qualidade factual são propriedades diferentes.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-7-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um arquivo validado contra esquema pode continuar semanticamente incompatível com o receptor se as datas forem interpretadas como eventos diferentes.",
    "gabarito": "C",
    "justificativa": "Estrutura válida não prova acordo sobre o significado dos valores.",
    "fonte": "Library of Congress, MODS, METS 1/METS 2 e BIBFRAME 2.0; W3C, RDF 1.1 Concepts, SPARQL 1.1 e SKOS Reference; documentação dos identificadores.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-7-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No SKOS, uma relação associativa related equivale necessariamente a uma relação hierárquica broader.",
    "gabarito": "E",
    "justificativa": "Associação e hierarquia têm semânticas distintas; não se devem trocar predicados apenas por ligarem conceitos.",
    "fonte": "W3C — SKOS Reference, relações semânticas.",
    "editalRef": "Bloco D - Item 3.12 e Bloco A - Item 3.8",
    "habilidade": "aplicar",
    "versao_correta": "related expressa associação; broader expressa relação hierárquica no modelo."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-2-7-fonte-mods",
      "nome": "Library of Congress — MODS",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — MODS",
      "ideiaChave": "Descrição e mapeamentos; não equivale a MARCXML.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-7-fonte-mets",
      "nome": "Library of Congress — METS e METS 2",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — METS e METS 2",
      "ideiaChave": "Distinguir a estrutura METS 1 da revisão disponibilizada em 2025.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-7-fonte-bf",
      "nome": "Library of Congress — BIBFRAME",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — BIBFRAME",
      "ideiaChave": "Modelo 2.0, vocabulário e ferramentas de conversão.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-7-fonte-rdf",
      "nome": "W3C — RDF 1.1 Concepts",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — RDF 1.1 Concepts",
      "ideiaChave": "Termos RDF e estrutura de triplas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-7-fonte-sparql",
      "nome": "W3C — SPARQL 1.1 Query",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — SPARQL 1.1 Query",
      "ideiaChave": "Formas de consulta e solução de padrões.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-7-fonte-skos",
      "nome": "W3C — SKOS Reference",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — SKOS Reference",
      "ideiaChave": "Conceitos, rótulos, relações e mapeamentos.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-2-7-5",
      "afirmacao": "Ter identificador persistente não certifica a verdade do conteúdo identificado.",
      "gabarito": "C",
      "porQue": "Identificação, resolução e qualidade factual são propriedades diferentes."
    },
    {
      "id": "memoria-rt-2-7-6",
      "afirmacao": "Um arquivo validado contra esquema pode continuar semanticamente incompatível com o receptor se as datas forem interpretadas como eventos diferentes.",
      "gabarito": "C",
      "porQue": "Estrutura válida não prova acordo sobre o significado dos valores."
    },
    {
      "id": "memoria-rt-2-7-7",
      "afirmacao": "No SKOS, uma relação associativa related equivale necessariamente a uma relação hierárquica broader.",
      "gabarito": "E",
      "porQue": "Associação e hierarquia têm semânticas distintas; não se devem trocar predicados apenas por ligarem conceitos."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-2-7-bloco-1",
    "titulo": "MODS (Metadata Object Description Schema): O Padrão XML da Library of Congress",
    "objetivos": [
      "Distinguir MODS, MARCXML e conversão."
    ],
    "conteudo": "Desenvolvido pela *Library of Congress* (LoC) como iniciativa do *Network Development and MARC Standards Office*, o **MODS** (*Metadata Object Description Schema*) foi projetado para suprir a lacuna existente entre a excessiva complexidade do formato **MARC 21** e a extrema simplicidade do padrão **Dublin Core**.\n\n**Comparação por finalidade, sem sequência evolutiva obrigatória:** MARC codifica dados catalográficos; DC oferece propriedades gerais; MODS descreve recursos em XML com granularidade própria; BIBFRAME representa dados bibliográficos conectados. Um não é simplesmente a nova versão do outro. A origem do MARC na década de 1960 não é a data de criação da denominação MARC 21.\n\n#### A. Características Arquiteturais do MODS:\n* **Compatibilidade e Derivação do MARC 21:** O MODS foi concebido expressamente a partir do conjunto de elementos do MARC 21. Um subconjunto substancial de dados catalográficos pode ser convertido de MARC 21 para MODS mas a equivalência e a reversibilidade dependem dos dados e mapeamentos; o formato não garante ida e volta sem perda, utilizando scripts de transformação XSLT mantidos pela própria Biblioteca do Congresso.\n* **Linguagem Natural Legível (*Human-Readable Tags*):** Em vez de empregar campos crípticos de três dígitos como `100 1# $a`, o MODS utiliza elementos semânticos legíveis em XML, tais como `<titleInfo><title>`, `<name type=\"personal\"><namePart>`, `<genre>` e `<subject>`.\n* **Riqueza Superior ao Dublin Core:** Enquanto o Dublin Core possui apenas `dc:creator` e `dc:contributor`, o MODS permite especificar papéis detalhados de autoria (`<role><roleTerm>`), qualificadores de edição, formas variantes de títulos e datas estruturadas de forma muito mais sofisticada.\n* **Uso Típico:** Muito empregado na descrição de acervos digitais de bibliotecas acadêmicas, como formato de entrega em repositórios digitais e como metadado descritivo embutido em contêineres METS.\n\n**Aplicação e recuperação:** MARCXML expressa estrutura MARC em XML; MODS possui elementos e granularidade próprios. O fato de ambos usarem XML não prova identidade de significado. Para migração, compare campos e teste ida/volta com registros reais; etiquetas legíveis não garantem preservação de todos os detalhes.",
    "checkpointIds": [
      "cp-2-7-2",
      "rt-2-7-1"
    ]
  },
  {
    "id": "sub-2-7-bloco-2",
    "titulo": "METS (Metadata Encoding and Transmission Standard): O Padrão Envelope XML",
    "objetivos": [
      "Relacionar empacotamento e estrutura, explicitando versão METS."
    ],
    "conteudo": "Também mantido pela *Library of Congress*, o **METS** (*Metadata Encoding and Transmission Standard*) não é um esquema de metadados descritivos isolado (ele não define como descrever o autor ou o título de um livro). O METS é um **padrão de empacotamento e contêiner estrutural** (*wrapper/envelope*) codificado em XML, cujo propósito primordial é congregar, em um único documento padronizado, informações e referências a componentes de um objeto digital; não exige embutir no próprio XML todos os arquivos binários.\n\n#### As Sete Seções Formais da Estrutura do METS:\n**No METS 1**, a organização é usualmente explicada pelas sete seções abaixo, com obrigatoriedades e cardinalidades definidas no esquema/perfil. **METS 2 foi disponibilizado em 2025**, com simplificações e retirada da dependência de XLink; não transporte automaticamente toda estrutura ou regra do METS 1 para ele:\n\n1. **Cabeçalho METS (`metsHdr` - *METS Header*):** Armazena metadados sobre o próprio documento METS em si (data de criação, data da última modificação, agência responsável e agentes que manipularam o arquivo).\n2. **Seção de Metadados Descritivos (`dmdSec` - *Descriptive Metadata Section*):** Contém ou aponta para metadados descritivos externos. Pode embutir diretamente registros em MARCXML, MODS ou Dublin Core (`<mdWrap>`) ou apontar para um URI externo (`<mdRef>`).\n3. **Seção de Metadados Administrativos (`amdSec` - *Administrative Metadata Section*):** Reúne metadados de gestão, subdividindo-se em:\n   * `techMD`: Metadados técnicos sobre a criação e os parâmetros do arquivo (ex.: NISO MIX para imagens).\n   * `rightsMD`: Direitos autorais e termos de licença (ex.: Creative Commons).\n   * `sourceMD`: Metadados sobre a fonte analógica original que foi digitalizada.\n   * `digiprovMD`: Metadados de proveniência digital e eventos de preservação (ex.: PREMIS).\n4. **Seção de Arquivos (`fileSec` - *File Section*):** Lista e inventaria todos os arquivos de conteúdo digital que compõem o objeto (arquivos master TIFF, arquivos derivados JPEG, PDFs, áudios MP3), organizados em grupos de arquivos (`fileGrp`).\n5. **Mapa Estrutural (`structMap` - *Structural Map*):** **É o coração obrigatório do documento METS.** Organiza a hierarquia lógica e física do objeto digital (capítulos, seções, páginas, fólios) e permite relacionar divisões e componentes, segundo estrutura e mecanismos do esquema; nem toda divisão precisa apontar diretamente a um arquivo.\n6. **Ligações Estruturais (`structLink` - *Structural Links*):** Seção opcional que estabelece hiperlinks e conexões não hierárquicas entre diferentes nós da árvore estruturada no `structMap`.\n7. **Seção de Comportamento (`behaviorSec` - *Behavior Section*):** Associa executáveis, scripts ou códigos de software específicos a nós do documento para renderizar interativamente o recurso.\n\n**Aplicação e recuperação:** Um pacote aponta às imagens e descreve a ordem de páginas. Os arquivos podem continuar externos ao documento XML. O mapa estrutural articula partes, enquanto dmdSec pode usar outro esquema descritivo. Ao encontrar “sete seções”, identifique que a explicação é do METS 1; o esquema METS 2 deve ser consultado separadamente.",
    "checkpointIds": [
      "cp-2-7-3",
      "rt-2-7-2"
    ]
  },
  {
    "id": "sub-2-7-bloco-3",
    "titulo": "BIBFRAME 2.0: A Transição da Catalogação para o Linked Data",
    "objetivos": [
      "Mapear Work, Instance e Item sem equivalência perfeita forçada."
    ],
    "conteudo": "A *Bibliographic Framework Initiative* (BIBFRAME) foi lançada pela *Library of Congress* para suceder o formato **MARC 21**, projetando a catalogação e os registros das bibliotecas no ecossistema da **Web Semântica e do Linked Data**.\n\n#### A. As Três Classes Centrais do BIBFRAME 2.0:\nDiferentemente do modelo conceitual IFLA LRM (que utiliza a tetralogia Obra, Expressão, Manifestação e Item — WEMI), o BIBFRAME 2.0 adota outro recorte conceitual em **três classes nucleares**:\n\n```timeline\n1. WORK (Obra) | Conteúdo Intelectual Abstrato | Conceito imaterial, tema, autores, gênero e forma artística da criação\n---> Concretização Editorial\n2. INSTANCE (Instância) | Publicação Material / Digital | Publicação concreta da Obra (editora, data de publicação, paginação, suporte)\n---> Cópia Física ou Eletrônica\n3. ITEM (Item) | O Exemplar Concreto | A cópia tangível única mantida no acervo físico ou arquivo específico com código de barras\n```\n\n* **1. Work (Obra):** Representa o nível mais elevado de abstração intelectual ou artística. Reflete o conteúdo conceitual e a essência da criação (título uniforme, assunto, autoria, gênero/forma). No BIBFRAME, o Work absorve grande parte das propriedades da \"Expressão\" do LRM.\n* **2. Instance (Instância):** Representa a publicação, emissão ou distribuição concreta de uma Obra em determinado suporte físico ou digital (uma edição de bolso pela Editora Saraiva em 2020; o e-book em EPUB publicado pela Câmara dos Deputados em 2024). Equivale aproximadamente à \"Manifestação\" do IFLA LRM.\n* **3. Item (Item):** É o exemplar físico individual ou a cópia digital localizada custodiada por uma biblioteca (o exemplar nº 3 da Biblioteca Pedro Aleixo com código de barras e anotações marginais).\n\n#### B. Classes e Conceitos Acessórios:\nO modelo BIBFRAME complementa essas classes nucleares com entidades-chave:\n* **Agents (Agentes):** Pessoas, organizações corporativas ou jurisdições associadas a uma Obra ou Instância (autores, tradutores, editores).\n* **Subjects (Assuntos):** O que a Obra aborda (conceitos, lugares, eventos, períodos históricos).\n* **Events (Eventos):** Ocorrências que caracterizam a história do recurso.\n\n#### C. A Conversão MARC 21 para BIBFRAME:\nA transição não ocorre por \"extinção abrupta\", mas pela coexistência e conversão automatizada:\n* A Library of Congress mantém ferramentas de código aberto como o programa **`marc2bibframe2`** (disponível publicamente no GitHub da LoC), que recebe registros MARC 21 em formato MARCXML e os transforma em grafos RDF de BIBFRAME 2.0.\n* O enriquecimento pode reconciliar nomes e assuntos com **URIs** em vocabulários de autoridade. Isso não acontece perfeitamente por simples transposição de strings e exige regras/validação (ex.: `id.loc.gov`, VIAF, ISNI e Wikidata).\n\n**Aplicação e recuperação:** Uma tradução pode ser modelada em Work BIBFRAME com relações próprias, sem equivalência um-para-um com Work LRM. Instância aproxima-se de manifestação, mas aproximação didática não é identidade formal. Conversores da LoC têm versões e regras que devem ser registradas na migração.",
    "checkpointIds": [
      "cp-2-7-1"
    ]
  },
  {
    "id": "sub-2-7-bloco-4",
    "titulo": "Linked Data, Grafos de Conhecimento e a Web Semântica (Alvo E4)",
    "objetivos": [
      "Interpretar RDF, SPARQL e SKOS com limites de implementação."
    ],
    "conteudo": "O cientista britânico **Sir Tim Berners-Lee** estabeleceu em 2006 os quatro princípios axiomáticos para a publicação de dados interligados (*Linked Data*) na Web Semântica:\n\n1. **Use URIs como nomes para as coisas:** Use identificadores para as coisas de interesse. Isso não implica uma autoridade mundial única que impeça duas URIs de se referirem à mesma entidade.\n2. **Use URIs HTTP:** Os identificadores devem adotar o protocolo HTTP (`http://...` ou `https://...`), permitindo que pessoas e programas de computador consultem esses identificadores (*dereferencing*).\n3. **Forneça informações úteis quando alguém consultar a URI:** Ao acessar a URI, o servidor deve retornar uma descrição estruturada da entidade utilizando padrões abertos recomendados pelo W3C (em especial **RDF** e consultas via **SPARQL**).\n4. **Inclua links para outras URIs:** A descrição do recurso deve conter hiperlinks que apontem para URIs externas correlatas, viabilizando a descoberta de novos conhecimentos na teia global de dados (*Web of Data*).\n\n#### A. Grafos Semânticos RDF (*Triplestores*) vs. Grafos de Propriedades (*Property Graphs*)\nNa Ciência da Informação e na Computação contemporânea, os grafos de conhecimento estruturam-se em dois paradigmas fundamentais:\n\n| Critério de Comparação | Grafo Semântico RDF (Padrão W3C) | Grafo de Propriedades (*Property Graph*) |\n| :--- | :--- | :--- |\n| **Unidade Básica de Dados** | **Tríplice Atômica:** `[Sujeito] ──(Predicado)──> [Objeto]` | **Nós e Arestas Atributados:** Nós com rótulos e pares chave-valor; arestas direcionadas tipadas e com atributos |\n| **Identificação Global** | No RDF 1.1, sujeito pode ser IRI ou nó em branco; predicado é IRI; objeto pode ser IRI, nó em branco ou literal | Pode usar identificadores locais e propriedades, inclusive valores que sejam identificadores externos conforme o projeto |\n| **Padrão Normativo** | Recomendações abertas e universais do **W3C** (RDF, RDFS, OWL, SPARQL) | Existem implementações e linguagens diversas; **ISO/IEC 39075:2024 (GQL)** é norma de linguagem para grafos de propriedades |\n| **Capacidade de Inferência** | RDFS/OWL oferecem semântica para inferências, mas sua execução depende do regime e do motor configurados; um grafo RDF não deduz automaticamente tudo | Capacidades dependem da implementação e das regras; não se infere impossibilidade universal apenas pelo modelo |\n| **Federação na Web** | Padrões apoiam ligação e consultas federadas quando serviços e permissões forem implementados; não há federação operacional automática | Projetado primordialmente para alto desempenho em clusters fechados ou corporativos |\n| **Linguagem de Consulta** | **SPARQL** (*SPARQL Protocol and RDF Query Language*) | **Cypher**, Gremlin ou padrão ISO GQL (*Graph Query Language*) |\n| **Uso Canônico em Bibliotecas** | Modelos BIBFRAME 2.0, SKOS, LexML Brasil e redes de dados abertos interconectadas | Sistemas internos de análise de redes sociais, rastreamento de fraudes e motores de busca rápida |\n\n#### B. A Linguagem de Consulta SPARQL (W3C Recommendation)\nO **SPARQL** é a linguagem canônica de consulta e protocolo para bases de dados em grafos RDF (*Triplestores*). Opera por **casamento de padrões de triplas (*graph pattern matching*)**, nas quais variáveis são identificadas pelo prefixo de interrogação (`?x`, `?autor`).\n\n* **As Quatro Formas Canônicas de Consulta SPARQL:**\n  1. `SELECT`: Retorna os valores das variáveis que satisfizeram o padrão do grafo em um formato tabular bidimensional (semelhante ao `SELECT` do SQL).\n  2. `CONSTRUCT`: Retorna um **novo subgrafo RDF** gerado a partir de um modelo de triplas especificado, permitindo transformar dados de uma ontologia para outra.\n  3. `ASK`: Retorna uma resposta booleana estrita (`true` ou `false`), verificando se determinado padrão de tripla existe na base sem retornar os dados em si.\n  4. `DESCRIBE`: Retorna um grafo descritivo dos recursos; a especificação deixa ao serviço a definição do conjunto de triplas retornadas, não garante todos os dados.\n* **Cláusulas e Operadores Fundamentais:**\n  * `PREFIX`: Declara apelidos curtos para URIs longas (ex.: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>`).\n  * `WHERE { ... }`: Bloco que delimita os padrões de triplas a serem casados no grafo.\n  * `FILTER`: Aplica restrições lógicas, numéricas, textuais (regex) ou de idioma (ex.: `FILTER (lang(?nome) = \"pt\")`).\n  * `OPTIONAL { ... }`: Permite recuperar dados complementares sem descartar a linha caso o predicado não exista para aquele recurso (análogo ao `LEFT JOIN` relacional).\n  * `ORDER BY`, `LIMIT` e `OFFSET`: Paginação e ordenação dos resultados tabulares.",
    "checkpointIds": [
      "rt-2-7-3",
      "rt-2-7-4"
    ]
  },
  {
    "id": "sub-2-7-bloco-7",
    "titulo": "SKOS e exemplo de consulta",
    "objetivos": [
      "Distinguir relações semânticas e interpretar o alcance do exemplo SPARQL."
    ],
    "conteudo": "#### C. O Modelo SKOS (Simple Knowledge Organization System)\nPadronizado pelo W3C (2009), o **SKOS** é o vocabulário ontológico projetado para converter linguagens documentárias tradicionais (tesauros, sistemas de classificação, listas de cabeçalhos de assunto) em grafos semânticos legíveis por máquinas:\n* `skos:Concept`: A unidade conceitual fundamental (o nó conceitual abstrato).\n* `skos:prefLabel`: O termo preferido ou descritor oficial na língua indicada (ex.: `\"Poder Legislativo\"@pt`).\n* `skos:altLabel`: Termos não preferidos, sinônimos ou remissivas \"ver\" (ex.: `\"Parlamento\"@pt`).\n* `skos:hiddenLabel`: Grafias errôneas comuns ou variantes fonéticas para indexação interna sem exibição ao usuário.\n* **Relações Semânticas Estruturadas:**\n  * `skos:broader`: Relação hierárquica para termo mais genérico / amplo (TG / BT).\n  * `skos:narrower`: Relação hierárquica para termo mais específico / restrito (TE / NT).\n  * `skos:related`: Relação associativa para termos semanticamente afins (TR / RT).\n\n#### D. Exemplo autoral hipotético: consulta SPARQL\nConsidere um grafo hipotético, sem afirmar que esta ontologia ou endpoint foi implantado pela Câmara. A consulta ilustra busca por rótulo exato de tema, retorna tipo/número/ano e relator e limita cinquenta soluções. Ela **não retorna data de apresentação nem garante todos os projetos**. Busca por URI de conceito e tratamento de hierarquia/idiomas seriam outras decisões:\n\n```sparql\nPREFIX leg: <https://example.org/legislativo/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nSELECT ?proposicao ?siglaTipo ?numero ?ano ?nomeRelator\nWHERE {\n  # 1. Localiza a proposição e seus atributos básicos\n  ?proposicao a leg:Proposicao ;\n              leg:siglaTipo ?siglaTipo ;\n              leg:numero ?numero ;\n              leg:ano ?ano ;\n              leg:tema ?conceito ;\n              leg:relator ?parlamentar .\n\n  # 2. Conecta ao conceito do Tesauro em SKOS\n  ?conceito a skos:Concept ;\n            skos:prefLabel ?rotuloTema .\n  \n  # 3. Recupera o nome do parlamentar relator\n  ?parlamentar rdfs:label ?nomeRelator .\n\n  # 4. Filtra proposições indexadas com o termo exato\n  FILTER (?rotuloTema = \"Inteligência Artificial\"@pt)\n}\nORDER BY DESC(?ano) ?numero\nLIMIT 50\n```\n\n**Aplicação e recuperação:** No RDF 1.1, o nome de uma pessoa pode ser literal e a pessoa pode ser IRI ou nó em branco. ASK verifica soluções do padrão; SELECT projeta variáveis; CONSTRUCT produz grafo a partir do modelo; DESCRIBE não promete todas as relações. Em SKOS, rótulo preferido não deve ser confundido com o conceito. broader não equivale automaticamente a broaderTransitive, e related não expressa hierarquia.",
    "checkpointIds": [
      "rt-2-7-7"
    ]
  },
  {
    "id": "sub-2-7-bloco-5",
    "titulo": "Identificadores Persistentes e Autoridade de Entidades",
    "objetivos": [
      "Separar identificar, autenticar e manter resolução."
    ],
    "conteudo": "Para viabilizar a autoridade e a rastreabilidade unívoca na web, utilizam-se identificadores persistentes e bases de autoridade universais (item 2.12 do Bloco D):\n\n* **ISNI (*International Standard Name Identifier* — ISO 27729):** Identificador de dezesseis caracteres, com dígito de controle que pode ser X, para distinguir identidades públicas de pessoas, criadores e organizações envolvidas em atividades criativas (autores, músicos, parlamentares, instituições).\n* **VIAF (*Virtual International Authority File*):** Projeto global hospedado pelo OCLC que interconecta catálogos de autoridade de dezenas de bibliotecas nacionais ao redor do mundo (incluindo Library of Congress e Biblioteca Nacional do Brasil), reunindo registros de autoridade em agrupamentos; reconciliação pode precisar de revisão e não garante ausência de erros.\n* **ORCID (*Open Researcher and Contributor ID*):** Identificador persistente de dezesseis caracteres para pesquisadores e contribuidores, com dígito de controle que pode ser X; não é certificado de qualificação nem se limita a docentes.\n* **DOI (*Digital Object Identifier* — ISO 26324):** Identificador persistente unívoco e acionável atribuído a objetos nos termos do sistema DOI, não exclusivamente arquivos digitais; resolução e metadados dependem de gestão.\n* **Wikidata:** Base de dados em grafo aberta e colaborativa, amplamente utilizada como nó central de autoridade na interligação de identificadores de Linked Data.\n\n**Aplicação e recuperação:** Um DOI continua identificando objeto quando a URL muda se os registros forem mantidos. Isso não torna o artigo verdadeiro nem prova identidade de quem o enviou. ORCID distingue contribuidores; ISNI cobre identidades públicas; VIAF agrega autoridades. Identificador persistente é compromisso de gestão, não propriedade mágica de uma string.",
    "checkpointIds": [
      "rt-2-7-5"
    ]
  },
  {
    "id": "sub-2-7-bloco-6",
    "titulo": "Os Quatro Níveis de Interoperabilidade",
    "objetivos": [
      "Diagnosticar dimensões de interoperabilidade."
    ],
    "conteudo": "A interoperabilidade é a capacidade de sistemas distintos e autônomos comunicarem-se e trocarem dados de maneira eficiente e sem atritos semânticos. Para analisar os tópicos, usamos quatro dimensões abaixo. Outros referenciais podem adotar divisões e nomes diferentes; não há taxonomia única universal:\n\n| Nível de Interoperabilidade | Definição Teórica e Tecnológica | Foco Principal | Exemplo Prático na Câmara dos Deputados |\n| :--- | :--- | :--- | :--- |\n| **1. Interoperabilidade Sintática** | Refere-se à estrutura de codificação e às linguagens de formatação das mensagens. Garante que os sistemas consigam ler e realizar o *parsing* mecânico dos caracteres transmitidos. | Formatos e codificações: XML, JSON, UTF-8, delimitadores. | Um sistema conseguir ler os caracteres de um arquivo XML sem erros de codificação ou sintaxe. |\n| **2. Interoperabilidade Estrutural** | Refere-se aos esquemas de dados formais e à arquitetura de relacionamentos que organizam as tabelas e os campos dos arquivos. | Esquemas e contêineres: XML Schema (XSD), DTD, METS, tabelas SQL. | Validação de que um arquivo segue rigorosamente a estrutura hierárquica exigida pelo esquema do LexML Brasil. |\n| **3. Interoperabilidade Semântica** | Refere-se ao significado partilhado e à interpretação unívoca dos conceitos trocados, assegurando que o receptor compreenda exatamente o que o emissor quis expressar. | Ontologias, vocabulários controlados, tesauros, SKOS, OWL, Dublin Core. | Uso do *Tesauro da Câmara dos Deputados* para apoiar correspondência conceitual, que exige governança e mapeamento; mesmo rótulo não prova identidade de significado. |\n| **4. Interoperabilidade Organizacional** | Refere-se ao alinhamento de processos de trabalho, políticas públicas, acordos formais de cooperação institucional e requisitos jurídicos entre órgãos autônomos. | Governança institucional, acordos de cooperação técnica, fluxos de trabalho. | Convênio formal entre a Câmara dos Deputados, o Senado Federal e o STF para manutenção cooperativa da Rede Virtual de Bibliotecas (RVBI). |\n\n**Aplicação e recuperação:** XML bem formado resolve parte sintática; dois sistemas ainda podem discordar sobre se a data é publicação ou aprovação. Um acordo institucional pode faltar mesmo com formatos e vocabulários comuns. Localize o problema pela função, sem presumir que validar um XSD resolve todos os níveis.",
    "checkpointIds": [
      "rt-2-7-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "mods",
    "titulo": "Library of Congress — MODS",
    "localizador": "Descrição e mapeamentos; não equivale a MARCXML.",
    "url": "https://www.loc.gov/standards/mods/"
  },
  {
    "id": "mets",
    "titulo": "Library of Congress — METS e METS 2",
    "localizador": "Distinguir a estrutura METS 1 da revisão disponibilizada em 2025.",
    "url": "https://www.loc.gov/standards/mets/mets2.html"
  },
  {
    "id": "bf",
    "titulo": "Library of Congress — BIBFRAME",
    "localizador": "Modelo 2.0, vocabulário e ferramentas de conversão.",
    "url": "https://www.loc.gov/bibframe/"
  },
  {
    "id": "rdf",
    "titulo": "W3C — RDF 1.1 Concepts",
    "localizador": "Termos RDF e estrutura de triplas.",
    "url": "https://www.w3.org/TR/rdf11-concepts/"
  },
  {
    "id": "sparql",
    "titulo": "W3C — SPARQL 1.1 Query",
    "localizador": "Formas de consulta e solução de padrões.",
    "url": "https://www.w3.org/TR/sparql11-query/"
  },
  {
    "id": "skos",
    "titulo": "W3C — SKOS Reference",
    "localizador": "Conceitos, rótulos, relações e mapeamentos.",
    "url": "https://www.w3.org/TR/skos-reference/"
  }
],
};
