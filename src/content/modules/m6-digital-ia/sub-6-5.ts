import type { ModuloFilho } from '../../../domain/types';

export const submodulo65: ModuloFilho = {
  id: 'sub-6-5',
  numero: '6.5',
  editalRef: 'Bloco B - Item 1.1 a 1.4',
  preRequisitos: ["sub-2-3"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-3",
          "titulo": "Modelos Conceituais (LRM)",
          "motivo": "Distinção entre modelagem relacional computacional (MER) e LRM."
      },
      {
          "submoduloId": "sub-14-4",
          "titulo": "Ciência de Dados e Text Mining",
          "motivo": "Estruturação de dados relacionais e não relacionais para análise."
      }
  ],
  titulo: 'Sistemas Informacionais, Modelagem de Dados, Bancos Relacionais e NoSQL',
  antesDeLer: [
    {
      termo: 'Banco de Dados Relacional (SQL)',
      definicao: 'Sistema de gestão de banco de dados baseado em tabelas com chaves primárias e estrangeiras que cumprem propriedades ACID.',
      exemploBiblioteca: 'Tabelas interligadas de \'Usuários\', \'Empréstimos\' e \'Exemplares\' no sistema integrado de gestão da biblioteca (SIGB).',
    },
    {
      termo: 'Banco de Dados Não Relacional (NoSQL)',
      definicao: 'Sistemas de armazenamento flexíveis projetados para dados não estruturados ou semiestruturados (orientados a documentos, grafos ou chave-valor).',
      exemploBiblioteca: 'Armazenamento de registros JSON de documentos legislativos dinâmicos em bancos orientados a documentos como MongoDB.',
    },
    {
      termo: 'Chave Primária e Chave Estrangeira',
      definicao: 'Chave primária identifica unicamente uma linha em uma tabela; chave estrangeira estabelece a relação e integridade referencial com outra tabela.',
      exemploBiblioteca: 'O ID único do parlamentar como chave estrangeira na tabela de autoria de proposições.',
    },
    {
      termo: 'Modelagem Conceitual (DER)',
      definicao: 'Diagrama Entidade-Relacionamento que mapeia as entidades do negócio, seus atributos e as cardinalidades de relacionamento (1:1, 1:N, N:M).',
      exemploBiblioteca: 'Modelagem de que um \'Deputado\' pode subscrever N \'Proposições\' e uma \'Proposição\' pode ter N \'Autores\'.',
    },
  ],
  descricaoCurta:
    'Levantamento de requisitos funcionais e não funcionais; Modelo Entidade-Relacionamento (MER de Chen) e cardinalidades; modelo relacional, chaves (PK/FK) e formas normais (1FN, 2FN, 3FN); bancos NoSQL (documento, chave-valor, coluna, grafo) e grafos de conhecimento.',
  tempoEstimadoMinutos: 17,
  autoresChave: [
    'Peter Chen (1976)',
    'Edgar F. Codd (1970)',
    'Eric Brewer (Teorema CAP)',
    'Ian Robinson, Jim Webber & Emil Eifrem (Graph Databases)',
  ],
  alertasCebraspe: [
    'Distinção Conceitual entre MER e FRBR/LRM: O Modelo Entidade-Relacionamento (Peter Chen, 1976) é uma técnica geral de modelagem lógica e conceitual de bancos de dados para sistemas de software. Já os modelos FRBR e IFLA LRM são modelos conceituais específicos do universo bibliográfico e catalográfico. A técnica de distrator recorrente consiste em afirmar que são intercambiáveis ou que o IFLA LRM é uma variante do MER: ERRADO! O LRM utiliza a lógica de entidades e relacionamentos como paradigma, mas é uma ontologia descritiva do domínio bibliográfico.',
    'Ordem e Regras das Formas Normais de Codd: 1FN exige atributos atômicos e monovalorados (proibição de listas ou tabelas aninhadas dentro de um campo); 2FN exige estar na 1FN e que todos os atributos não-chave dependam da TOTALIDADE da chave primária (elimina dependência parcial em chaves compostas); 3FN exige estar na 2FN e que nenhum atributo não-chave dependa de outro atributo não-chave (elimina dependência transitiva). A banca inverte frequentemente os conceitos de dependência parcial e transitiva.',
    'Propriedades ACID vs. Teorema CAP: Bancos relacionais tradicionais priorizam consistência imediata e atomicidade através das propriedades ACID (Atomicidade, Consistência, Isolamento, Durabilidade). Em sistemas distribuídos modernos (NoSQL), o Teorema CAP de Eric Brewer estabelece que é teoricamente impossível garantir simultaneamente Consistência (C), Disponibilidade (A) e Tolerância ao Particionamento (P), forçando o sistema a optar por CP ou AP.',
    'As Quatro Famílias NoSQL e suas Aplicações: 1. Documento (MongoDB) armazena JSON flexível, ideal para metadados ricos e heterogêneos; 2. Chave-Valor (Redis) armazena dados em memória de acesso ultra-rápido, ideal para sessões e cache; 3. Colunar (Cassandra) armazena por colunas, ideal para Big Data analítico e séries temporais; 4. Grafo (Neo4j) armazena nós e arestas com propriedades, ideal para redes de citação, coautoria e Linked Data.',
  ],
  quadroComparativo: {
    titulo: 'Comparativo de Arquiteturas de Bancos de Dados: Relacional vs. Famílias NoSQL',
    colunas: [
      'Família / Modelo',
      'Estrutura Fundamental de Armazenamento',
      'Linguagem / Mecanismo de Consulta',
      'Propriedade / Força Arquitetural',
      'Exemplo de Aplicação em Bibliotecas e Câmaras',
    ],
    linhas: [
      [
        'Relacional (SQL / RDBMS)',
        'Tabelas bidimensionais com linhas (tuplas) e colunas tipadas estritas',
        'SQL declarativo (JOINs relacionais, GROUP BY, subconsultas)',
        'Consistência estrita (ACID), integridade referencial forte (PK/FK) e normalização',
        'SIGB transacional: controle de circulação de exemplares, multas, cadastros de usuários e inventário de patrimônio.',
      ],
      [
        'NoSQL Documento',
        'Coleções de documentos autossuficientes em JSON / BSON / XML sem esquema rígido',
        'Consultas orientadas a documentos (MQL, JSON queries, APIs REST)',
        'Flexibilidade estrutural, suporte nativo a hierarquias e metadados dinâmicos',
        'Repositórios digitais e coleções especiais: metadados heterogêneos que variam conforme o suporte (texto, partitura, vídeo).',
      ],
      [
        'NoSQL Chave-Valor',
        'Pares atômicos compostos por uma chave identificadora única e um valor binário/texto',
        'Operações primitivas de busca direta O(1): GET, SET, DELETE por chave',
        'Latência em nível de submilissegundos, alto throughput em memória RAM',
        'Gestão de sessões ativas de usuários autenticados no portal, controle de rate limit de APIs e cache de consultas frequentes.',
      ],
      [
        'NoSQL Colunar / Família de Colunas',
        'Tabelas esparsas multidimensionais agrupadas por famílias de colunas lógicas',
        'CQL (Cassandra Query Language), APIs colunares distribuídas',
        'Escalabilidade horizontal massiva de escrita, compressão eficiente e consultas analíticas',
        'Logs de auditoria e telemetria: registro massivo de milhões de acessos, downloads e requisições ao acervo parlamentar.',
      ],
      [
        'NoSQL Grafo (Graph Databases)',
        'Nós (entidades), Arestas direcionadas tipadas (relações) e Propriedades em ambos',
        'Linguagens de travessia de grafos: Cypher, Gremlin, SPARQL',
        'Travessia veloz de relacionamentos complexos sem o custo exponencial de JOINs relacionais',
        'Grafos de conhecimento legislativo: redes de coautoria parlamentar, citações de normas jurídicas e ontologias Linked Data.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Engenharia de Requisitos em Ambientes Documentários e Legislativos

O desenvolvimento e a implantação de sistemas de informação em unidades documentárias — como a Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo) e o Centro de Documentação e Informação (Cedi) — dependem de um rigoroso processo de **Engenharia de Requisitos**:

* **1. Requisitos Funcionais (RF):**
  * Descrevem as **funções, comportamentos e serviços específicos** que o sistema deve executar para atender aos processos de trabalho informacionais.
  * *Exemplos Bibliotecários:*
    * "O sistema deve permitir a catalogação cooperativa com importação de registros via protocolo Z39.50 e SRU."
    * "O sistema deve gerar automaticamente fichas catalográficas no padrão AACR2/RDA e ABNT NBR 14724 em formato PDF/A."
    * "O sistema deve suportar recuperação booleana com operadores AND, OR, NOT, busca por proximidade (NEAR) e truncamento."
    * "O sistema deve controlar a circulação de itens, bloqueando empréstimos para usuários com penalidades ativas."

* **2. Requisitos Não Funcionais (RNF):**
  * Descrevem os **critérios de qualidade, restrições operacionais, segurança e arquitetura** sob os quais os serviços devem operar.
  * *Exemplos Bibliotecários:*
    * *Desempenho e Tempo de Resposta:* "A consulta ao catálogo público (OPAC) deve retornar os primeiros 20 resultados em menos de 1,5 segundo sob carga simultânea de 1.000 usuários."
    * *Segurança e Conformidade:* "O armazenamento de dados biográficos de parlamentares e registros de leitura de cidadãos deve observar a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), com criptografia em repouso (AES-256) e em trânsito (TLS 1.3)."
    * *Acessibilidade Digital:* "Todas as interfaces do catálogo digital devem cumprir o nível AA das Diretrizes de Acessibilidade de Conteúdo Web (WCAG 2.1/2.2) e o modelo e-MAG."
    * *Interoperabilidade:* "O repositório institucional deve expor metadados descritivos em conformidade com o protocolo OAI-PMH no formato Dublin Core simples (oai_dc)."

* **3. Técnicas de Levantamento e Validação de Requisitos:**
  * *Entrevistas Estruturadas e Semi-estruturadas:* Diálogo aprofundado com consultores legislativos, bibliotecários de referência e pesquisadores para mapear dores cognitivas.
  * *Análise de Fluxo Documental (Workflow Analysis):* Rastreamento da trajetória física e digital dos documentos, da entrada por depósito legal/aquisição até a preservação permanente.
  * *Prototipagem Rápida e Design Participativo:* Criação de wireframes de baixa e média fidelidade para validação precoce com usuários reais antes da codificação.

---

### 2. O Modelo MER de Chen É Metodologia de Banco de Dados, Não Se Confundindo com Ontologias Bibliográficas como IFLA LRM

Formulado por **Peter Pin-Shan Chen** em 1976 (*The Entity-Relationship Model: Toward a Unified View of Data*), o MER constitui o padrão conceitual dominante para modelagem lógica de dados:

#### A. Componentes Primitivos do MER
1. **Entidades:**
   * Representam objetos do mundo real, concretos ou abstratos, sobre os quais a organização deseja manter dados.
   * *Entidade Forte (Regular):* Possui existência autônoma e chave primária própria (ex.: \`AUTOR\`, \`OBRA\`, \`DEPUTADO\`).
   * *Entidade Fraca:* Depende existencialmente de outra entidade proprietária para sua identificação (ex.: \`EXEMPLAR\` dependente de \`OBRA\`; \`DEPENDENTE\` de \`PARLAMENTAR\`).
2. **Atributos:**
   * Propriedades ou características que qualificam uma entidade ou um relacionamento:
     * *Simples (Atômico):* Não pode ser decomposto (ex.: \`Ano_Publicacao\`, \`Numero_Mandato\`).
     * *Composto:* Pode ser subdividido em componentes menores com significado próprio (ex.: \`Nome_Completo\` decomposto em \`Primeiro_Nome\` e \`Sobrenome\`; \`Endereco\` em \`Rua\`, \`Numero\` e \`CEP\`).
     * *Monovalorado:* Admite no máximo um valor para cada ocorrência da entidade (ex.: \`CPF\`, \`Data_Nascimento\`).
     * *Multivalorado:* Admite múltiplos valores para uma mesma ocorrência da entidade (ex.: \`Telefones_Contato\`, \`Assuntos_Topicos\`). No modelo relacional, atributos multivalorados violam a 1FN e exigem criação de nova tabela.
     * *Derivado:* Valor calculado ou inferido dinamicamente a partir de outros atributos (ex.: \`Idade\` derivada de \`Data_Nascimento\` e data atual; \`Total_Obras\` derivado de contagem).
3. **Relacionamentos e Cardinalidade:**
   * Associações semânticas entre duas ou mais entidades:
     * **1:1 (Um para Um):** Cada ocorrência de A associa-se a no máximo uma ocorrência de B (ex.: \`GABINETE_LIDER\` ──(1:1)──> \`LIDER_PARTIDARIO\`).
     * **1:N (Um para Muitos):** Uma ocorrência de A associa-se a várias de B, mas cada ocorrência de B associa-se a apenas uma de A (ex.: \`EDITORA\` ──(1:N)──> \`LIVRO\`; \`PROPOSICAO\` ──(1:N)──> \`EMENDA\`).
     * **N:M (Muitos para Muitos):** Várias ocorrências de A associam-se a várias de B (ex.: \`AUTOR\` ──(N:M)──> \`OBRA\`; \`PROPOSICAO\` ──(N:M)──> \`TEMA_COMISSAO\`). No modelo relacional, relacionamentos N:M exigem a criação de uma **tabela associativa (de junção)** contendo as chaves estrangeiras de ambas as entidades.

\`\`\`
[AUTOR] 1 ──────── (Escreve) ──────── N:M [OBRA]
   │                                         │
 (id_autor) PK                             (id_obra) PK
                                             │ 1
                                             │
                                         (Possui)
                                             │
                                             │ N
                                        [EXEMPLAR]
                                             │
                                        (id_exemplar) PK
                                        (id_obra) FK
\`\`\`

---

### 3. O Modelo Relacional Elimina Redundâncias Operacionais Através das Formas Normais (1FN, 2FN e 3FN)

Criado por **Edgar Frank Codd** nos laboratórios da IBM (*A Relational Model of Data for Large Shared Data Banks*, 1970), o modelo relacional organiza os dados sob a fundamentação matemática da teoria dos conjuntos e da lógica de predicados de primeira ordem:

#### A. Estrutura e Chaves Relacionais
* **Relação (Tabela):** Estrutura bidimensional composta por tuplas (linhas) e atributos (colunas).
* **Chave Primária (Primary Key - PK):** Atributo (ou conjunto de atributos) que identifica de maneira unívoca cada linha da tabela. Rege-se pelo princípio da **Integridade de Entidade**: nenhum componente da chave primária pode admitir valor nulo (\`NULL\`).
* **Chave Estrangeira (Foreign Key - FK):** Atributo de uma tabela que referencia a chave primária de outra tabela (ou da mesma). Rege-se pelo princípio da **Integridade Referencial**: o valor da FK deve coincidir com uma PK existente na tabela referenciada ou ser explicitamente nulo (\`NULL\`).

#### B. Teoria da Normalização (1FN, 2FN e 3FN)
A normalização é uma técnica formal de análise de esquemas relacionais que visa **eliminar redundâncias de dados, inconsistências operacionais e anomalias de inserção, alteração e exclusão**:

1. **Primeira Forma Normal (1FN):**
   * Uma tabela está na 1FN se, e somente se, **todos os seus atributos contiverem apenas valores atômicos e indivisíveis**, inexistindo atributos multivalorados, listas separadas por vírgula ou tabelas aninhadas.
   * *Correção:* Se uma tabela de livros armazena "Assuntos" como \`'Direito Constitucional, Processo Legislativo, Ciência Política'\`, o campo viola a 1FN. Deve-se criar uma tabela separada de assuntos e relacioná-la via chave estrangeira.

2. **Segunda Forma Normal (2FN):**
   * Uma tabela está na 2FN se, e somente se, **já estiver na 1FN e todos os atributos não-chave dependerem funcionalmente da TOTALIDADE da chave primária** (inexistência de **dependência funcional parcial**).
   * *Condição Crítica:* A 2FN só é relevante em tabelas cuja chave primária seja **composta** (formada por dois ou mais atributos). Se a tabela possuir chave primária simples (um único atributo), ela estará automaticamente na 2FN se estiver na 1FN.
   * *Exemplo de Violação:* Tabela associativa com chave primária composta (\`id_aluno\`, \`id_curso\`). Se a coluna \`nome_curso\` estiver nessa tabela, ela depende apenas de \`id_curso\`, configurando dependência parcial.

3. **Terceira Forma Normal (3FN):**
   * Uma tabela está na 3FN se, e somente se, **já estiver na 2FN e nenhum atributo não-chave depender transitivamente de outro atributo não-chave** (inexistência de **dependência funcional transitiva**).
   * *Fórmula Lógica:* Se $A \\rightarrow B$ e $B \\rightarrow C$ (onde $A$ é a PK e $B, C$ são atributos não-chave), então $C$ depende transitivamente de $A$ através de $B$.
   * *Exemplo de Violação:* Em uma tabela de exemplares com PK \`id_exemplar\`, temos as colunas \`id_editora\` e \`cidade_editora\`. A cidade da editora depende do \`id_editora\` (que não é PK da tabela), e não diretamente do exemplar. A solução exige transferir \`cidade_editora\` para a tabela própria de \`EDITORA\`.

#### C. As Propriedades ACID em Sistemas RDBMS
Os sistemas gerenciadores de bancos de dados relacionais transacionais (PostgreSQL, Oracle, MySQL, SQL Server) sustentam a confiabilidade dos dados através do acrônimo **ACID**:
* **A - Atomicidade (Atomicity):** Uma transação é tratada como unidade atômica indivisível: ou todas as operações de escrita são executadas com sucesso (\`COMMIT\`), ou nenhuma é gravada, revertendo o estado anterior (\`ROLLBACK\`).
* **C - Consistência (Consistency):** A transação só pode transformar o banco de um estado válido para outro estado válido, respeitando todas as restrições de integridade (PK, FK, CHECK, UNIQUE).
* **I - Isolamento (Isolation):** Transações simultâneas concorrentes executam-se sem interferência mútua, simulando a execução sequencial isolada.
* **D - Durabilidade (Durability):** Uma vez confirmada a transação (\`COMMIT\`), seus efeitos são gravados permanentemente em armazenamento não volátil, sobrevivendo a falhas de energia ou panes de sistema.

---

### 4. Bancos de Dados Não Relacionais (NoSQL) e o Teorema CAP

Com a explosão de dados da Web, mídias sociais, coleções multimídia e big data parlamentar, os modelos relacionais enfrentaram gargalos de escalabilidade e rigidez de esquemas. Surgiu o movimento **NoSQL** (*Not Only SQL*):

#### A. O Teorema CAP de Eric Brewer (2000)
Em sistemas distribuídos de dados, o Teorema CAP estabelece que uma arquitetura só pode garantir simultaneamente **duas das três propriedades fundamentais**:
1. **C - Consistência (Consistency):** Todos os nós do cluster distribuído enxergam a mesma informação simultaneamente; qualquer leitura retorna a escrita mais recente.
2. **A - Disponibilidade (Availability):** Toda requisição não falha recebe uma resposta válida (sem garantia de ser a mais recente).
3. **P - Tolerância a Particionamento (Partition Tolerance):** O sistema continua operando mesmo se houver perda de comunicação ou falhas de rede entre os nós do cluster.

Como redes reais estão inevitavelmente sujeitas a partições e quedas físicas de conexão ($P$ é mandatório em redes distribuídas), os sistemas distribuídos devem optar por:
* **Sistemas CP:** Priorizam a consistência estrita em detrimento da disponibilidade (ex.: se um nó perde sincronia, rejeita requisições até se restabelecer).
* **Sistemas AP:** Priorizam a disponibilidade ininterrupta adotando o modelo de **Consistência Eventual (Eventual Consistency / modelo BASE: Basically Available, Soft-state, Eventual consistency)**.

#### B. As Quatro Grandes Famílias NoSQL
1. **Orientados a Documentos:**
   * Estruturam os dados em documentos semiestruturados autossuficientes, predominantemente em formato **JSON**, **BSON** ou **XML**.
   * Não exigem esquemas fixos predefinidos (*schemaless* ou *schema-flexible*), permitindo que documentos na mesma coleção possuam campos totalmente heterogêneos.
   * *Tecnologias:* **MongoDB**, **CouchDB**.
   * *Uso em Informação:* Ideal para repositórios digitais e arquivos históricos, onde um documento tem dezenas de metadados técnicos de vídeo e outro possui apenas autoria e resumo textual.

2. **Chave-Valor (Key-Value):**
   * O modelo mais simples e performático: armazena pares de chave identificadora única e seu valor binário/texto associado.
   * Operações primitivas de busca direta em complexidade algorítmica $O(1)$.
   * *Tecnologias:* **Redis**, **Memcached**, **Amazon DynamoDB**.
   * *Uso em Informação:* Armazenamento de sessões web de usuários, carrinho de reserva de publicações e cache de consultas pesadas ao catálogo.

3. **Família de Colunas (Wide-Column / Colunar):**
   * Armazenam dados agrupados por colunas físicas em vez de linhas, permitindo tabelas esparsas de bilhões de linhas com altíssima taxa de compressão e velocidade em consultas analíticas agregadas.
   * *Tecnologias:* **Apache Cassandra**, **Apache HBase**, **Google Bigtable**.
   * *Uso em Informação:* Registro massivo de logs de acessos, downloads de proposições legislativas e métricas de audiência de transmissões.

4. **Orientados a Grafos (Graph Databases):**
   * Modelam o domínio sob o paradigma de **Grafos de Propriedades**:
     * **Nós (Vértices):** Entidades discretas (ex.: \`Autor\`, \`Obra\`, \`Deputado\`, \`Lei\`).
     * **Arestas (Relacionamentos):** Conexões direcionadas e tipadas ligando nós (ex.: \`:ESCREVEU\`, \`:CITOU\`, \`:RELATOU\`, \`:REVOGOU\`).
     * **Propriedades:** Pares chave-valor associados tanto aos nós quanto às próprias arestas (ex.: data da citação, peso da colaboração).
   * Elimina o custo de processamento exponencial de múltiplos JOINs do SQL, permitindo travessias profundas em subredes em tempo constante.
   * *Tecnologias:* **Neo4j**, **Amazon Neptune**, **GraphDB**.
   * *Uso em Informação:* Redes de coautoria, genealogia de leis (rastreio de revogações e emendas), e sustentação de Grafos de Conhecimento.

---

### 5. Grafos de Conhecimento (Knowledge Graphs) e Recuperação da Informação

Um **Grafo de Conhecimento (*Knowledge Graph*)** representa uma rede semântica de entidades do mundo real e seus inter-relacionamentos formalizados por ontologias legíveis por máquina:

* **Da Busca por Termos à Busca por Entidades (*Things, not strings*):**
  * Motores de busca tradicionais comparam a presença de cadeias de caracteres em documentos.
  * Grafos de conhecimento identificam a **entidade semântica** por trás do termo digitado, desambiguando pessoas, lugares e conceitos homônimos (ex.: distinguir "Câmara dos Deputados" enquanto instituição de "Câmara municipal" ou "Câmara fotográfica").
* **Interoperabilidade com Padrões W3C:**
  * O grafo pode ser serializado no modelo de triplas **RDF** (Sujeito-Predicado-Objeto) e consultado via linguagem **SPARQL**.
  * Permite conectar o acervo da Biblioteca Pedro Aleixo à Web Semântica global (Wikidata, VIAF, DBpedia, LexML Brasil).

---

### 6. Sistemas de Recomendação em Bibliotecas Digitais e Serviços de Informação

Os **Sistemas de Recomendação (*Recommender Systems*)** são algoritmos de recuperação da informação que auxiliam o usuário na descoberta proativa de itens relevantes em meio a grandes acervos digitais (**Francesco Ricci, Lior Rokach & Bracha Shapira, 2015**):

#### A. As Três Abordagens Canônicas
1. **Filtragem Baseada em Conteúdo (*Content-Based Filtering*):**
   * Recomenda itens com propriedades, termos de indexação ou metadados similares aos itens previamente consultados ou avaliados pelo usuário.
   * Em bibliotecas: baseia-se na proximidade vetorial de descritores de tesauro (VCB/RVBI), cabeçalhos de assunto, termos do resumo ou classificação temática (CDD/CDDir).
2. **Filtragem Colaborativa (*Collaborative Filtering*):**
   * Recomenda itens com base nos padrões de comportamento, empréstimo e avaliação coletiva de usuários com histórico de interesse análogo (*user-based* ou *item-based*).
   * Não depende dos metadados descritivos da obra: baseia-se na máxima "usuários que emprestaram a obra A também emprestaram a obra B".
3. **Sistemas Híbridos (*Hybrid Recommender Systems*):**
   * Combinam filtragem colaborativa e filtragem baseada em conteúdo para maximizar a precisão e mitigar limitações intrínsecas de cada método.
   * **Superação do Problema do Início a Frio (*Cold-Start Problem*):** Quando um novo livro é incorporado ao acervo (ou um novo parlamentar ingressa no sistema), a ausência de histórico de circulação inviabiliza a filtragem colaborativa; nesses casos, a filtragem baseada em conteúdo atua de imediato com base nos metadados catalográficos do item.

#### B. Aplicação no Ambiente Legislativo
Em portais parlamentares e bibliotecas digitais especializadas, os sistemas de recomendação analisam comissões de atuação, discursos e histórico de pesquisas dos assessores para sugerir notas técnicas, anteprojetos correlatos e doutrina jurídica pertinente em tramitação.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Modelos Conceituais (LRM) (sub-2-3):** Distinção entre modelagem relacional computacional (MER) e LRM.
* **Ciência de Dados e Text Mining (sub-14-4):** Estruturação de dados relacionais e não relacionais para análise.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A modelagem de dados e a arquitetura de **Bancos de Dados Relacionais e Não Relacionais (NoSQL)** constituem a espinha dorsal tecnológica dos catálogos modernos:
1. **Modelagem Conceitual (Modelo Entidade-Relacionamento - MER):**
   - Proposto por Peter Chen (1976). Representa o minimundo em:
     - **Entidades:** Objetos do mundo real (ex.: Livro, Autor, Usuário).
     - **Atributos:** Propriedades das entidades (ex.: ISBN, Nome, Matrícula).
     - **Relacionamentos e Cardinalidade:** Associações entre entidades: $1:1$ (um para um), $1:N$ (um para muitos), $N:M$ (muitos para muitos).
2. **Modelo Relacional (Edgar F. Codd, 1970):**
   - Dados organizados em tabelas bidimensionais (**relações**), compostas por linhas (**tuplas**) e colunas (**atributos**).
   - **Chave Primária (*Primary Key* - PK):** Atributo único e não nulo que identifica exclusivamente cada tupla na tabela.
   - **Chave Estrangeira (*Foreign Key* - FK):** Atributo que estabelece a integridade referencial apontando para a chave primária de outra tabela.
   - **Normalização (1FN, 2FN, 3FN):** Técnica sistemática para eliminar redundâncias e evitar anomalias de inserção, alteração e exclusão.
3. **Propriedades ACID nos Bancos Relacionais:**
   - **Atomicidade:** A transação executa tudo ou nada; se falhar no meio, é desfeita (*rollback*).
   - **Consistência:** Mantém as regras de integridade do banco válidas antes e após a transação.
   - **Isolamento:** Transações simultâneas não interferem umas nas outras.
   - **Durabilidade:** Os dados confirmados (*commit*) são persistidos e nunca se perdem por falha de energia.
4. **Bancos Não Relacionais (NoSQL - *Not Only SQL*):**
   - Criados para lidar com grandes volumes de dados não estruturados (*Big Data*), alta velocidade e escalabilidade horizontal.
   - **Quatro Famílias Canônicas de NoSQL:**
     1. *Chave-Valor (*Key-Value*):* Altíssimo desempenho e simplicidade (ex.: Redis, DynamoDB).
     2. *Documentos:* Armazena documentos semiestruturados em JSON/BSON (ex.: MongoDB, CouchDB). Muito usado em repositórios digitais modernos.
     3. *Família de Colunas (*Column-Family*):* Otimizado para consultas analíticas em petabytes (ex.: Apache Cassandra, HBase).
     4. *Grafos:* Modela nós e arestas com relacionamentos complexos e interconectados (ex.: Neo4j). Ideal para Web Semântica, ontologias e *Linked Data*.
   - **Teorema CAP (Eric Brewer):** Um sistema distribuído só pode garantir simultaneamente duas das três propriedades: Consistência (*Consistency*), Disponibilidade (*Availability*) e Tolerância a Partições (*Partition Tolerance*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Modelagem Relacional de Empréstimos no SIGB da Câmara):** O sistema de circulação da Biblioteca Pedro Aleixo modela uma tabela \`USUARIOS\` (com PK \`id_usuario\`), uma tabela \`LIVROS\` (com PK \`id_livro\`) e uma tabela associativa \`EMPRESTIMOS\` de cardinalidade $N:M$ (com FKs apontando para usuário e livro, além da data de devolução). Isso garante que o sistema nunca registre um empréstimo para um livro ou usuário inexistente (integridade referencial).
- **Cenário 2 (Banco NoSQL de Documentos na BDCam):** O repositório DSpace armazena os metadados das proposições em estruturas flexíveis baseadas em JSON/BSON no MongoDB/PostgreSQL, permitindo que cada tipo documental tenha campos dinâmicos específicos sem exigir a alteração rígida do esquema do banco de dados.
- **Cenário 3 (Banco em Grafo para Rastreamento de Influência Parlamentar):** O setor de ciência de dados da Câmara implementa um banco em grafo (Neo4j) onde cada deputado é um nó e as coautorias em projetos de lei são arestas. Os bibliotecários e analistas executam consultas para identificar visualmente quais deputados formam redes de liderança temática em matérias de educação e meio ambiente.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério | Bancos Relacionais (SQL) | Bancos NoSQL (Não Relacionais) |
| :--- | :--- | :--- |
| **Estrutura** | Tabelas estritas, linhas e colunas | Chave-valor, Documentos, Colunas, Grafos |
| **Garantia Central** | Transações ACID rígidas | Teorema CAP / Modelo BASE (consistência eventual) |
| **Esquema (*Schema*)** | Rígido, definido previamente (*Schema-on-write*) | Flexível ou dinâmico (*Schema-on-read*) |
| **Escalabilidade** | Predominantemente vertical (hardware maior) | Horizontal (distribuição em múltiplos nós) |
| **Exemplo de Software** | PostgreSQL, MySQL, Oracle, SQL Server | MongoDB, Redis, Cassandra, Neo4j |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Chave Primária pode ser Nula:** A técnica de distrator recorrente consiste em afirmar que *"uma tupla em uma tabela relacional pode conter valor nulo (NULL) em sua chave primária caso o registro seja provisório"*. **Gabarito: ERRADO.** A integridade de entidade proíbe terminantemente valores nulos em chaves primárias.
- **Bancos em Grafo para Dados Tabulares Simples:** A banca sugere que bancos em grafo são recomendados para armazenar cadastros alfanuméricos planos sem conexões. **Gabarito: ERRADO.** Bancos em grafo são desenhados especificamente para entidades com redes densas de inter-relacionamentos.
- **Normalização e Desempenho:** Afirmar que normalizar tabelas até a 3FN sempre aumenta a velocidade de leitura das consultas. **Gabarito: ERRADO.** A normalização reduz redundâncias e elimina anomalias, mas pode exigir múltiplas junções (*JOINs*), o que por vezes torna consultas analíticas mais lentas (motivo pelo qual se faz *desnormalização* em Data Warehouses).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados*. 6. ed. São Paulo: Pearson, 2011. (O livro-texto definitivo de bancos de dados em concursos).
- **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados*. 7. ed. Rio de Janeiro: Elsevier, 2020.
- **SADALAGE, Pramod J.; FOWLER, Martin.** *NoSQL Essencial: um guia conciso para o mundo emergente da persistência poliglota*. São Paulo: Novatec, 2013.
- **CODD, Edgar F.** A relational model of data for large shared data banks. *Communications of the ACM*, v. 13, n. 6, p. 377-387, 1970. (Artigo de criação do modelo relacional).
- **CHEN, Peter Pin-Shan.** The entity-relationship model: toward a unified view of data. *ACM Transactions on Database Systems*, v. 1, n. 1, p. 9-36, 1976.

### Pausa de Recuperação Ativa: Os 4 Princípios de Linked Data

> [!TIP]
> **Pausa de Recuperação Ativa (Active Recall):** Quais são os 4 princípios estabelecidos por Tim Berners-Lee (2006) para os Linked Data? (1. Usar URIs como nomes; 2. Usar URIs HTTP; 3. Fornecer dados úteis com RDF e SPARQL; 4. Incluir links para outras URIs).
`,
  checkpoints: [
    {
      id: 'cp-6-5-1',
      pergunta: 'Micro-Checkpoint 1: Distinção Epistemológica entre MER e IFLA LRM',
      item: 'O Modelo Entidade-Relacionamento (MER) de Peter Chen e o modelo conceitual IFLA LRM compartilham a lógica de entidades e atributos, mas enquanto o MER é uma metodologia geral de modelagem lógica de bancos de dados para engenharia de software, o LRM constitui um modelo conceitual descritivo voltado especificamente para o universo bibliográfico.',
      gabarito: 'C',
      justificativa:
        'Correto! O MER é uma técnica agnóstica de modelagem de dados da Ciência da Computação (Chen, 1976), ao passo que o IFLA LRM é uma ontologia/modelo conceitual de domínio bibliográfico homologado pela IFLA.',
    },
    {
      id: 'cp-6-5-2',
      pergunta: 'Micro-Checkpoint 2: Segunda e Terceira Formas Normais de Codd',
      item: 'Uma tabela relacional está na Segunda Forma Normal (2FN) quando todos os seus atributos não-chave dependem transitivamente da chave primária, exigindo-se a Terceira Forma Normal (3FN) apenas quando houver dependência parcial em relação a uma chave primária composta.',
      gabarito: 'E',
      justificativa:
        'Errado! Os conceitos foram invertidos: a 2FN exige a eliminação de dependências parciais (todos os atributos não-chave devem depender da totalidade da chave primária composta); a 3FN exige a eliminação de dependências transitivas entre atributos não-chave.',
    },
    {
      id: 'cp-6-5-3',
      pergunta: 'Micro-Checkpoint 3: Teorema CAP e Bancos Orientados a Grafos',
      item: 'Em ambientes de recuperação de informação documental que exigem mapeamento dinâmico de redes de coautoria, genealogia normativa de leis e desambiguação de autoridades por meio de grafos de conhecimento, bancos de dados NoSQL orientados a grafos apresentam desempenho superior ao modelo relacional por realizarem travessias diretas de arestas sem a necessidade de dispendiosas operações de junção (JOINs).',
      gabarito: 'C',
      justificativa:
        'Correto! Em bancos de dados de grafos (como Neo4j), os relacionamentos são armazenados como ponteiros diretos (arestas com propriedades), permitindo travessias semânticas velozes de complexidade O(1) por salto, sem a sobrecarga computacional de múltiplos JOINs do SQL.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-5-1',
        periodo: '1970',
        disciplina: 'Bancos de Dados Relacionais',
        focoPrincipal: 'Publicação do Modelo Relacional e formulação das Formas Normais de dados',
        figuraChave: 'Edgar F. Codd (IBM)',
      },
      {
        id: 'tl-6-5-2',
        periodo: '1976',
        disciplina: 'Modelagem Conceitual de Dados',
        focoPrincipal: 'Formulação do Modelo Entidade-Relacionamento (MER)',
        figuraChave: 'Peter Pin-Shan Chen',
      },
      {
        id: 'tl-6-5-3',
        periodo: '2000 / 2010',
        disciplina: 'Sistemas Distribuídos e NoSQL',
        focoPrincipal: 'Enunciação do Teorema CAP por Brewer e consolidação dos bancos NoSQL (documento, chave-valor, coluna e grafo)',
        figuraChave: 'Eric Brewer / Movimento NoSQL',
      },
    ],
    autores: [
      {
        id: 'aut-6-5-1',
        nome: 'Peter Chen',
        ano: 1976,
        obraPrincipal: 'The Entity-Relationship Model: Toward a Unified View of Data',
        ideiaChave: 'Modelagem conceitual do mundo real por meio de entidades, atributos e relacionamentos (MER).',
        chipPegadinha: 'MER não é modelo físico de banco nem é sinônimo do modelo relacional de tabelas.',
      },
      {
        id: 'aut-6-5-2',
        nome: 'Edgar F. Codd',
        ano: 1970,
        obraPrincipal: 'A Relational Model of Data for Large Shared Data Banks',
        ideiaChave: 'Bancos relacionais estruturados em tuplas e atributos, integridade de entidade/referencial e regras de normalização.',
        chipPegadinha: '2FN elimina dependência parcial em chave composta; 3FN elimina dependência transitiva.',
      },
      {
        id: 'aut-6-5-3',
        nome: 'Eric Brewer',
        ano: 2000,
        obraPrincipal: 'Towards Robust Distributed Systems (Teorema CAP)',
        ideiaChave: 'Impossibilidade de garantir simultaneamente Consistência, Disponibilidade e Tolerância ao Particionamento em sistemas distribuídos.',
        chipPegadinha: 'Sistemas distribuídos reais em rede devem escolher entre consistência (CP) ou disponibilidade (AP), pois a partição de rede (P) é inevitável.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-5-1',
        afirmacao: 'Uma tabela relacional com chave primária simples formada por uma única coluna requer verificação específica de dependências parciais para comprovar seu enquadramento na Segunda Forma Normal (2FN).',
        gabarito: 'E',
        porQue: 'A dependência parcial só pode existir conceitualmente se a chave primária for COMPOSTA (dois ou mais atributos). Com chave simples, se estiver na 1FN, está automaticamente na 2FN.',
      },
      {
        id: 'peg-6-5-2',
        afirmacao: 'O modelo IFLA LRM pode ser considerado uma extensão proprietária do Modelo Entidade-Relacionamento de Peter Chen, motivo pelo qual ambos utilizam idênticas ferramentas de implementação física em bancos relacionais.',
        gabarito: 'E',
        porQue: 'O LRM é um modelo conceitual do domínio bibliográfico, enquanto o MER é uma técnica genérica de modelagem de dados da computação; nenhum dos dois prescreve implementação física proprietária.',
      },
      {
        id: 'peg-6-5-3',
        afirmacao: 'Bancos de dados NoSQL orientados a documentos exigem que todos os documentos pertencentes a uma mesma coleção compartilhem rigorosamente os mesmos campos e tipos de dados.',
        gabarito: 'E',
        porQue: 'Bancos orientados a documentos (como MongoDB) operam com esquemas flexíveis (schemaless), admitindo documentos com estruturas, campos e aninhamentos totalmente heterogêneos na mesma coleção.',
      },
    ],
  },
};
