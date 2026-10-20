import type { ModuloFilho } from '../../../domain/types';

export const submodulo66: ModuloFilho = {
  id: 'sub-6-6',
  numero: '6.6',
  editalRef: 'Bloco C - Item 3.1 a 3.5',
  preRequisitos: ["sub-6-5"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-14-4",
          "titulo": "Ciência de Dados e Text Mining",
          "motivo": "Consultas SQL e expressões regulares para mineração de textos."
      },
      {
          "submoduloId": "sub-6-2",
          "titulo": "Protocolos e APIs",
          "motivo": "APIs REST e consumo de dados abertos da Câmara."
      }
  ],
  titulo: 'Fundamentos Computacionais: Algoritmos, SQL, Regex, APIs e Web Scraping',
  antesDeLer: [
    {
      termo: 'SQL',
      definicao: 'Linguagem declarativa padrão para criação, consulta e manipulação de bancos de dados relacionais.',
      exemploBiblioteca: 'Consultar no banco Koha/Pergamum da Câmara os livros catalogados com mais de 3 exemplares disponíveis.',
    },
    {
      termo: 'API',
      definicao: 'Interface de comunicação padronizada que viabiliza a troca direta de dados entre sistemas distintos.',
      exemploBiblioteca: 'Consumir o endpoint /proposicoes da API de Dados Abertos da Câmara para indexar projetos no catálogo.',
    },
    {
      termo: 'REST',
      definicao: 'Estilo arquitetural para serviços web baseado no protocolo HTTP sem estado (stateless) e recursos com URIs.',
      exemploBiblioteca: 'Requisição HTTP GET para recuperar metadados de parlamentares em formato JSON.',
    },
    {
      termo: 'Regex',
      definicao: 'Expressão regular; sequência de caracteres que define um padrão de busca textual flexível.',
      exemploBiblioteca: 'Validar se números de chamada ou ISBNs digitados pelos usuários seguem a máscara correta.',
    },
    {
      termo: 'Web Scraping',
      definicao: 'Técnica automatizada de extração de dados estruturados a partir do código HTML de páginas web públicas.',
      exemploBiblioteca: 'Coletar listas de publicações parlamentares em sítios históricos que não possuem APIs de exportação.',
    },
  ],
  descricaoCurta:
    'Pensamento computacional e estruturas de controle; ordem lógica de execução em SQL (WHERE vs. HAVING, JOINs e agregações); expressões regulares (metacaracteres e padrões bibliográficos); arquitetura REST, JSON e API de Dados Abertos da Câmara; web scraping, robots.txt e limites ético-jurídicos da LGPD.',
  tempoEstimadoMinutos: 22,
  autoresChave: [
    'Jeanette Wing (Pensamento Computacional)',
    'Roy Fielding (Arquitetura REST, 2000)',
    'Stephen Kleene (Álgebra Regular e Expressões Regulares)',
    'Câmara dos Deputados (API de Dados Abertos v2)',
  ],
  alertasCebraspe: [
    'Ordem Lógica de Execução no SQL vs. Ordem de Escrita: O Cebraspe testa exaustivamente a diferença entre WHERE e HAVING. A cláusula WHERE filtra tuplas individuais ANTES de qualquer agrupamento e não admite funções de agregação (como COUNT ou SUM). Já a cláusula HAVING filtra os GRUPOS formados pelo GROUP BY APÓS a aplicação das funções de agregação. A ordem lógica real de processamento interno é: 1. FROM/JOIN -> 2. WHERE -> 3. GROUP BY -> 4. HAVING -> 5. SELECT -> 6. DISTINCT -> 7. ORDER BY -> 8. LIMIT.',
    'Expressões Regulares (Regex) e o Metacaractere Ponto: Em regex, o metacaractere "." representa qualquer caractere único (exceto quebras de linha na configuração padrão). Para representar o caractere ponto literal (como em abreviaturas ou separadores decimais), é estritamente obrigatório usar o escape com barra invertida "\\.". A banca frequentemente afirma que o ponto em regex busca apenas o ponto ortográfico: ERRADO!',
    'Web Scraping e a Falsa Imunidade de Dados Públicos na LGPD: O Cebraspe adora a seguinte armadilha: "por estarem disponíveis em páginas públicas da internet, dados pessoais podem ser raspados e reutilizados livremente sem submissão à LGPD". ERRADO! O art. 7º, §§ 3º e 4º da Lei nº 13.709/2018 estabelece que o tratamento de dados pessoais tornados manifestamente públicos pelo titular exige a observância dos princípios da finalidade, boa-fé e interesse público, mantendo-se incólumes os direitos do titular.',
    'Natureza Jurídica do Arquivo robots.txt: O arquivo robots.txt é um padrão de exclusão de robôs decorrente de convenção técnica e de etiqueta na Web, não constituindo por si só norma jurídica estatal nem dispositivo da Lei de Direitos Autorais. Contudo, ignorar o robots.txt viola as boas práticas de engenharia e pode violar os Termos de Uso do sítio hospedeiro.',
  ],
  quadroComparativo: {
    titulo: 'Comparativo de Métodos de Obtenção de Dados Digitais: Scraping vs. API vs. Lote',
    colunas: [
      'Método de Coleta',
      'Autorização e Acesso',
      'Estabilidade Estrutural',
      'Estrutura e Qualidade do Dado',
      'Risco Jurídico e Ético (LGPD)',
      'Quando Deve Ser Preferido',
    ],
    linhas: [
      [
        'Web Scraping (Raspagem)',
        'Geralmente não requer credencial, mas consome HTML de páginas públicas',
        'Muito baixa: qualquer alteração de layout ou CSS quebra os seletores do robô',
        'Dado não estruturado ou semiestruturado bruto; exige limpeza e parser intensivo',
        'Alto: risco de extrair dados pessoais protegidos, sobrecarregar servidores e violar termos de uso',
        'Quando a fonte não oferece API pública nem arquivos em lote e a informação tem interesse público legítimo.',
      ],
      [
        'API Oficial REST (ex.: Dados Abertos)',
        'Estruturado via endpoints HTTP (GET); pode exigir chave/token ou ser aberta',
        'Alta: versionada (ex.: /api/v2), com contratos formais e retrocompatibilidade',
        'Dado semiestruturado altamente padronizado (JSON / XML) com metadados e paginação',
        'Mínimo: o órgão custodiante já tratou a conformidade com a LGPD e limites de privacidade',
        'Sempre que disponível para consultas dinâmicas, automatizadas e atualizadas em tempo real.',
      ],
      [
        'Download em Lote (Bulk Data / CSV / Parquet)',
        'Download direto de arquivos compactados disponibilizados pelo custodiante',
        'Altíssima: esquemas pré-definidos e catalogados em dicionários de dados',
        'Dado estruturado consolidado, pronto para ingestão em pipelines de Data Science e BI',
        'Mínimo: dados abertos governamentais já anonimizados e auditados pelo poder público',
        'Para análises históricas completas, treinos massivos de modelos de IA e grandes séries temporais.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Pensamento Computacional e Estruturas de Algoritmos

O **Pensamento Computacional** (conceitualizado por **Jeannette Wing**, 2006) é o processo cognitivo de formulação de problemas e de suas soluções de modo que possam ser efetivamente executadas por um agente de processamento de informações (humano ou máquina):

* **Os Quatro Pilares do Pensamento Computacional:**
  1. *Decomposição:* Fracionar um problema informacional complexo em subproblemas menores, independentes e tratáveis (ex.: dividir o processo de indexação automática em tokenização, remoção de stopwords, lematização e cálculo de TF-IDF).
  2. *Reconhecimento de Padrões:* Identificar regularidades, repetições, similaridades e tendências estruturais em conjuntos de dados (ex.: detectar a estrutura recorrente de números de projetos de lei: "PL 1234/2026").
  3. *Abstração:* Filtrar e suprimir detalhes específicos e irrelevantes, concentrando-se exclusivamente nas propriedades nucleares necessárias para a resolução do problema (ex.: modelar um catálogo bibliográfico considerando apenas autor, título e assunto, ignorando espessura do papel ou cor da capa).
  4. *Algoritmo:* Elaboração de uma sequência finita, ordenada, não ambígua e bem definida de passos lógicos para resolver uma classe de problemas ou processar dados.

* **Estruturas Fundamentais de Controle de Fluxo:**
  * *Sequência:* Execução linear de instruções, uma após a outra, na ordem em que foram declaradas.
  * *Seleção / Decisão (\`if / else\`):* Ramificação condicional que avalia uma expressão booleana (Verdadeiro ou Falso) para determinar qual bloco de código será executado (ex.: \`SE ano_publicacao < 1900 ENTÃO classificar como Obras Raras SENÃO classificar como Acervo Geral\`).
  * *Iteração / Repetição (\`for\`, \`while\`):* Execução repetida de um bloco de instruções enquanto uma condição for satisfeita ou ao longo de uma coleção de itens (ex.: \`PARA CADA exemplar EM lote_livros FAÇA registrar_inventario(exemplar)\`).

---

### 2. Linguagem SQL (Structured Query Language): Fundamentos e Ordem Lógica

A **SQL** é a linguagem declarativa padronizada pela ANSI/ISO para definição, manipulação e consulta de dados em bancos relacionais. O usuário declara **o que deseja obter**, cabendo ao otimizador do banco determinar o melhor plano de acesso físico.

#### A. Sintaxe Escrita vs. Ordem Lógica de Execução
Em provas do Cebraspe, a pegadinha clássica explora a divergência entre a ordem em que a consulta é redigida pelo desenvolvedor e a ordem lógica com que o motor relacional realmente processa os dados:

| Ordem Escrita (Sintaxe) | Ordem Lógica de Execução Interna | Operação Realizada pelo Motor do Banco |
| :--- | :--- | :--- |
| \`1. SELECT\` | **1. FROM / JOIN** | Identifica as tabelas de origem e realiza as junções relacionais cartesianas/filtradas. |
| \`2. FROM / JOIN\` | **2. WHERE** | **Filtra linhas individuais ANTES do agrupamento**. Não aceita funções de agregação. |
| \`3. WHERE\` | **3. GROUP BY** | Agrupa as linhas remanescentes com base nos valores das colunas especificadas. |
| \`4. GROUP BY\` | **4. HAVING** | **Filtra os GRUPOS formados APÓS a agregação**. Avalia condições com \`COUNT\`, \`SUM\`, etc. |
| \`5. HAVING\` | **5. SELECT** | Projeta as colunas solicitadas, calcula expressões matemáticas e avalia aliases. |
| \`6. ORDER BY\` | **6. DISTINCT** | Elimina linhas duplicadas do resultado projetado. |
| \`7. LIMIT / OFFSET\` | **7. ORDER BY** | Ordena as linhas finais de acordo com os critérios definidos (\`ASC\` ou \`DESC\`). |
| | **8. LIMIT / OFFSET** | Restringe a quantidade de linhas retornadas e desloca o ponto de partida (paginação). |

#### B. Tipologia das Operações de Junção (JOINs)
* **INNER JOIN:** Retorna estritamente as linhas que possuem correspondência mútua em ambas as tabelas envolvidas na condição de junção (\`ON\`).
* **LEFT (OUTER) JOIN:** Retorna todas as linhas da tabela à esquerda (declarada após o \`FROM\`), acompanhadas das colunas correspondentes da tabela à direita. Se não houver correspondência, preenche as colunas da direita com \`NULL\`.
* **RIGHT (OUTER) JOIN:** Retorna todas as linhas da tabela à direita e os dados correspondentes da esquerda (ou \`NULL\`).
* **FULL (OUTER) JOIN:** Retorna a união completa de todas as linhas de ambas as tabelas, inserindo \`NULL\` onde inexistir paridade.

#### C. Exemplos Resolvidos com Esmaecimento: Consultas SQL (3 Degraus)

##### Degrau 1: Exemplo Completo (Filtro Prévio no WHERE e Filtro Agregado no HAVING)
* **Problema:** Na base de dados bibliográfica da Câmara dos Deputados, listar os assuntos que possuem pelo menos 2 obras editadas a partir do ano 2020, ordenando pelo total de obras em ordem decrescente.
* **Consulta SQL Resolvida:**
\`\`\`sql
SELECT 
    assunto.nome AS termo_assunto,
    COUNT(livro.id) AS total_obras
FROM assunto
INNER JOIN livro_assunto ON assunto.id = livro_assunto.id_assunto
INNER JOIN livro ON livro_assunto.id_livro = livro.id
WHERE livro.ano >= 2020
GROUP BY assunto.nome
HAVING COUNT(livro.id) >= 2
ORDER BY total_obras DESC, termo_assunto ASC;
\`\`\`
* **Explicação Passo a Passo:**
  1. \`FROM\` e \`INNER JOIN\` unem as tabelas \`assunto\`, \`livro_assunto\` e \`livro\`.
  2. \`WHERE livro.ano >= 2020\` descarta previamente títulos mais antigos antes do agrupamento.
  3. \`GROUP BY assunto.nome\` reúne as obras por área temática.
  4. \`HAVING COUNT(livro.id) >= 2\` descarta assuntos com apenas 1 publicação.
  5. \`SELECT\` projeta as colunas e \`ORDER BY\` ordena.
* **Saída Declarada:**
| termo_assunto | total_obras |
| :--- | :--- |
| Direito Constitucional | 3 |
| Ciência Política | 2 |

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: LEFT JOIN e Verificação de Nulo)
* **Problema:** Encontrar proposições legislativas que ainda não possuem relator designado, exibindo sigla, número, ano e ementa.
* **Código com Lacuna:**
\`\`\`sql
SELECT 
    prop.sigla_tipo,
    prop.numero,
    prop.ano,
    prop.ementa
FROM proposicao prop
/* LACUNA 1: Qual tipo de JOIN preserva proposições sem relator? */
/* ___ JOIN relatoria rel ON prop.id = rel.id_proposicao */
/* LACUNA 2: Qual cláusula filtra onde o relator não existe? */
/* WHERE rel.id_relator IS ___ */
ORDER BY prop.ano DESC, prop.numero DESC;
\`\`\`
* **Resolução Completa:**
\`\`\`sql
SELECT 
    prop.sigla_tipo,
    prop.numero,
    prop.ano,
    prop.ementa
FROM proposicao prop
LEFT JOIN relatoria rel ON prop.id = rel.id_proposicao
WHERE rel.id_relator IS NULL
ORDER BY prop.ano DESC, prop.numero DESC;
\`\`\`
* **Saída Declarada:**
| sigla_tipo | numero | ano | ementa |
| :--- | :--- | :--- | :--- |
| PL | 1042 | 2026 | Institui a Política Nacional de Livros Abertos |
| PEC | 45 | 2026 | Altera regime constitucional de bibliotecas públicas |

##### Degrau 3: Aplicação Autônoma (Mapeamento de Autoria e Produtividade com Agrupamento)
* **Desafio:** Elaborar consulta para gerar ranking de autores por quantidade de livros cadastrados, exibindo apenas autores que tenham pelo menos 1 livro, ordenando decrescentemente pela quantidade.
* **Resolução Completa:**
\`\`\`sql
SELECT 
    autor.nome AS nome_autor,
    COUNT(livro_autor.id_livro) AS total_livros
FROM autor
INNER JOIN livro_autor ON autor.id = livro_autor.id_autor
GROUP BY autor.id, autor.nome
HAVING COUNT(livro_autor.id_livro) >= 1
ORDER BY total_livros DESC, nome_autor ASC;
\`\`\`
* **Saída Declarada:**
| nome_autor | total_livros |
| :--- | :--- |
| Machado de Assis | 3 |
| Clarice Lispector | 2 |
| Darcy Ribeiro | 1 |

---

### 3. Regex Exige Escape no Ponto Literal e Ancoragem para Evitar Falsos Positivos

Expressões Regulares (*Regular Expressions*) baseiam-se na teoria das linguagens formais de **Stephen Kleene** (1951) e fornecem uma sintaxe concisa para casar padrões de texto:

#### A. Metacaracteres Essenciais
* **Ancoragem:**
  * \`^\`: Casa o início da linha ou string.
  * \`$\`: Casa o final da linha ou string.
* **Quantificadores:**
  * \`*\`: Zero ou mais ocorrências do elemento anterior (guloso / *greedy*).
  * \`+\`: Uma ou mais ocorrências do elemento anterior.
  * \`?\`: Zero ou uma ocorrência (opcional).
  * \`{n}\`: Exatamente $n$ ocorrências.
  * \`{n,m}\`: Entre $n$ e $m$ ocorrências.
* **Classes de Caracteres e Atalhos:**
  * \`[abc]\`: Qualquer um dos caracteres enumerados.
  * \`[^abc]\`: Negação (qualquer caractere exceto 'a', 'b' ou 'c').
  * \`[0-9]\` ou \`\\d\`: Qualquer dígito numérico decimal.
  * \`\\D\`: Qualquer caractere que NÃO seja dígito.
  * \`\\w\`: Caractere alfanumérico (letras, números e sublinhado: \`[a-zA-Z0-9_]\`).
  * \`\\W\`: Caractere não alfanumérico.
  * \`\\s\`: Espaço em branco (espaço, tabulação \`\\t\`, quebra de linha \`\\n\`).
  * \`\\S\`: Qualquer caractere que NÃO seja espaço.
  * \`\\b\`: Fronteira de palavra (*word boundary*), delimitando o início ou fim de uma palavra isolada.
* **O Metacaractere Ponto e o Escape:**
  * \`.\`: Casa **qualquer caractere único** (exceto nova linha).
  * \`\\.\`: Casa o **ponto literal** (exige barra invertida de escape).

#### B. Exemplos Resolvidos com Esmaecimento: Expressões Regulares (3 Degraus)

##### Degrau 1: Exemplo Completo (Validação e Extração de Proposições Legislativas)
* **Problema:** Validar e extrair componentes de identificação formal de proposições da Câmara (ex.: \`PL 1042/2026\`, \`PEC 45/2026\`, \`PLP 12/2025\`).
* **Padrão Regex Resolvido:**
\`\`\`regex
^(PL|PLP|PEC|PDL)\\s+(\\d{1,5})\\/(\\d{4})$
\`\`\`
* **Casos Testados e Saída Declarada:**
  * \`"PL 1042/2026"\` -> Casa: Sim. Grupo 1: \`"PL"\`, Grupo 2: \`"1042"\`, Grupo 3: \`"2026"\`.
  * \`"PEC 45/2026"\` -> Casa: Sim. Grupo 1: \`"PEC"\`, Grupo 2: \`"45"\`, Grupo 3: \`"2026"\`.
  * \`"MPV 100/2026"\` -> Casa: Não (sigla não permitida na lista de alternativas).
  * \`"PL 123456/2026"\` -> Casa: Não (excede 5 dígitos no número).

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: Citação de Artigo em Ementas)
* **Problema:** Capturar o número de artigos citados em documentos legislativos (ex.: \`art. 5º\`, \`artigo 37\`, \`Art. 102\`).
* **Padrão com Lacuna:**
\`\`\`regex
/* LACUNA: Usar grupo não capturador (?:...) para prefixo art. ou artigo, seguido de dígitos e ordinal opcional */
/* \\b(?:art\\.|artigo)\\s+(\\d+)(?:[º°]|___)?\\b */
\`\`\`
* **Resolução Completa:**
\`\`\`regex
\\b(?:art\\.|artigo)\\s+(\\d+)(?:[º°]|\\b)
\`\`\`
* **Casos Testados e Saída Declarada:**
  * \`"Em cumprimento ao art. 5º da CF"\` -> Casa: Sim. Número capturado no Grupo 1: \`"5"\`.
  * \`"conforme previsto no artigo 37, caput"\` -> Casa: Sim. Número capturado no Grupo 1: \`"37"\`.
  * \`"artesanato regional"\` -> Casa: Não casa (respeita fronteira de palavra \`\\b\`).

##### Degrau 3: Aplicação Autônoma (Validação de Notação de Classificação Decimal CDU/CDD)
* **Desafio:** Construir expressão regular rigorosa para validar notações de classes principais e subdivisões decimais da CDU/CDD (ex.: \`020\`, \`025.4\`, \`342.7\`), recusando números com pontos duplicados ou letras.
* **Resolução Completa:**
\`\`\`regex
^\\d{3}(?:\\.\\d+)*$
\`\`\`
* **Casos Testados e Saída Declarada:**
  * \`"020"\` -> Casa: Sim.
  * \`"025.4"\` -> Casa: Sim.
  * \`"342.721"\` -> Casa: Sim.
  * \`"25.4"\` -> Casa: Não (exige 3 dígitos iniciais).
  * \`"025..4"\` -> Casa: Não (rejeita ponto duplo consecutivo).

---

### 4. APIs REST São Sem Estado (Stateless) e Manipulam Recursos por URIs e Verbos Semânticos

#### A. Princípios da Arquitetura REST (Roy Fielding, 2000)
Em sua tese de doutorado na Universidade da Califórnia, **Roy Fielding** definiu os princípios de transferência de estado representacional (*Representational State Transfer* - REST):
* **1. Arquitetura Cliente-Servidor:** Separação estrita de responsabilidades entre a interface de usuário e a camada de armazenamento/serviço.
* **2. Sem Estado (Statelessness):** Nenhuma informação de contexto de sessão do cliente é mantida no servidor entre requisições; cada requisição deve conter em si todos os parâmetros e cabeçalhos necessários para seu atendimento completo.
* **3. Cacheabilidade (Cacheable):** As respostas devem explicitar nos cabeçalhos se podem ser armazenadas em cache por proxies ou clientes para otimizar desempenho.
* **4. Interface Uniforme baseada em Recursos:** Recursos do mundo real (ex.: um livro, um deputado, uma emenda) são identificados unicamente por **URIs (Uniform Resource Identifiers)** e manipulados por verbos HTTP padronizados.

#### B. Métodos HTTP Semânticos e Códigos de Retorno
* \`GET\`: Recupera a representação de um recurso existente. É **seguro** (não altera o estado no servidor) e **idempotente** (múltiplas chamadas idênticas produzem o mesmo efeito no estado do servidor).
* \`POST\`: Cria um novo recurso subordinado no servidor. Não é seguro nem idempotente.
* \`PUT\`: Substitui integralmente o recurso identificado pela URI. É idempotente.
* \`PATCH\`: Atualiza parcialmente atributos de um recurso existente.
* \`DELETE\`: Remove o recurso identificado pela URI. É idempotente.
* *Principais Códigos HTTP:* \`200 OK\` (sucesso), \`201 Created\` (criação bem-sucedida), \`400 Bad Request\` (sintaxe inválida do cliente), \`401 Unauthorized\` (ausência de autenticação), \`403 Forbidden\` (acesso negado), \`404 Not Found\` (recurso inexistente), \`500 Internal Server Error\` (falha no servidor).

#### C. A API de Dados Abertos da Câmara dos Deputados (v2)
A Câmara dos Deputados disponibiliza uma API pública RESTful no endereço base:
\`https://dadosabertos.camara.leg.br/api/v2\`

* Respostas padronizadas no formato **JSON (JavaScript Object Notation)**, estruturadas com listas no nó \`dados\` e metadados de paginação com links no nó \`links\` (princípio HATEOAS: rel="self", rel="next", rel="last").
* *Principais Endpoints:*
  * \`GET /deputados\`: Lista parlamentares em exercício, partidos e UFs.
  * \`GET /proposicoes?ano=2026&siglaTipo=PL\`: Recupera projetos de lei apresentados no ano.
  * \`GET /votacoes/{id}/votos\`: Recupera a relação de votos nominais de cada parlamentar em determinada deliberação.

#### D. Exemplos Resolvidos com Esmaecimento: Consumo de APIs REST e JSON (3 Degraus)

##### Degrau 1: Exemplo Completo (Requisição com Parâmetros e Extração de Lista de Dados)
* **Problema:** Consumir o endpoint \`/proposicoes\` filtrando por projetos de lei de 2026 com limite de 2 registros e extrair o identificador e a ementa de cada item.
* **Requisição:** \`GET https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&ordem=ASC&ordenarPor=id&itens=2\`
* **Payload JSON Retornado pelo Servidor:**
\`\`\`json
{
  "dados": [
    {
      "id": 24001,
      "uri": "https://dadosabertos.camara.leg.br/api/v2/proposicoes/24001",
      "siglaTipo": "PL",
      "numero": 101,
      "ano": 2026,
      "ementa": "Dispõe sobre o depósito legal de obras digitais na Biblioteca da Câmara."
    },
    {
      "id": 24002,
      "uri": "https://dadosabertos.camara.leg.br/api/v2/proposicoes/24002",
      "siglaTipo": "PL",
      "numero": 102,
      "ano": 2026,
      "ementa": "Institui o Plano Nacional de Acessibilidade Documental Legislativa."
    }
  ],
  "links": [
    { "rel": "self", "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&itens=2&pagina=1" },
    { "rel": "next", "href": "https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&itens=2&pagina=2" }
  ]
}
\`\`\`
* **Processamento e Saída Declarada:**
  * Item 1: ID = \`24001\`, Ementa = \`"Dispõe sobre o depósito legal de obras digitais na Biblioteca da Câmara."\`
  * Item 2: ID = \`24002\`, Ementa = \`"Institui o Plano Nacional de Acessibilidade Documental Legislativa."\`

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: Extração de Objeto Aninhado em Perfil)
* **Problema:** Recuperar dados detalhados de um parlamentar pelo ID e extrair o partido e a UF de sua situação funcional atual no nó \`ultimoStatus\`.
* **Requisição:** \`GET https://dadosabertos.camara.leg.br/api/v2/deputados/204521\`
* **Código de Extração com Lacuna:**
\`\`\`javascript
// Dado o payload retornado da API:
const resposta = {
  dados: {
    id: 204521,
    nomeCivil: "Deputado Exemplar",
    ultimoStatus: {
      siglaPartido: "PLD",
      siglaUf: "DF",
      condicaoEleitoral: "Titular"
    }
  }
};
/* LACUNA: Acessar a sigla partidária e UF no nó de status atual */
/* const partido = resposta.dados.______.siglaPartido; */
/* const uf = resposta.dados.______.siglaUf; */
\`\`\`
* **Resolução Completa:**
\`\`\`javascript
const partido = resposta.dados.ultimoStatus.siglaPartido;
const uf = resposta.dados.ultimoStatus.siglaUf;
\`\`\`
* **Saída Declarada:**
  * \`partido\` = \`"PLD"\`
  * \`uf\` = \`"DF"\`

##### Degrau 3: Aplicação Autônoma (Paginação HATEOAS Navegando por Links Hipermídia)
* **Desafio:** Implementar função de controle que recebe a resposta de uma requisição e localiza a URL da próxima página de dados utilizando a convenção \`rel="next"\` dos links hipermídia.
* **Resolução Completa:**
\`\`\`javascript
function extrairProximaPagina(respostaJson) {
  const linkNext = respostaJson.links.find(link => link.rel === 'next');
  return linkNext ? linkNext.href : null;
}
\`\`\`
* **Saída Declarada para o Payload do Degrau 1:**
  * Retorno: \`"https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&itens=2&pagina=2"\`

---

### 5. Web Scraping Possui Restrições Éticas (robots.txt) e Legais (LGPD e Direitos Autorais), Sendo APIs Oficiais Preferíveis

O **Web Scraping** consiste no uso de scripts automatizados (robôs ou rastreadores) para extrair dados tabulares ou textuais a partir do código HTML de páginas da Web:

* **Distinção Crítica:**
  * *Web Crawler (Spider):* Navega iterativamente seguindo hiperlinks para indexar o conteúdo integral de páginas em motores de busca (ex.: Googlebot, web crawler do Arquivo da Web).
  * *Web Scraper:* Foca cirurgicamente em elementos específicos do DOM da página (via XPath ou seletores CSS) para extrair tabelas ou campos específicos para um banco de dados estruturado.

#### A. O Arquivo robots.txt e a Cortesia Técnica
* Localizado na raiz do domínio (ex.: \`camara.leg.br/robots.txt\`), o arquivo estabelece o **Robots Exclusion Standard**.
* Utiliza diretivas como \`User-agent: *\`, \`Disallow: /admin/\`, \`Crawl-delay: 5\`.
* **Natureza Jurídica:** É uma **convenção técnica voluntária**, desprovida de força de lei federal cogente. Contudo, seu desrespeito afronta a ética de rede e pode fundamentar o bloqueio por firewall ou ações cíveis baseadas na quebra dos Termos de Uso.

#### B. Limites Jurídicos da LGPD e Direitos Autorais
1. **A LGPD (Lei nº 13.709/2018) e Dados Pessoais Públicos:**
   * O **art. 7º, § 3º** estabelece que o tratamento de dados pessoais cujo acesso é público deve considerar a finalidade, a boa-fé e o interesse público que justificaram sua disponibilização.
   * O **art. 7º, § 4º** preconiza que a dispensa da exigência do consentimento para os dados tornados manifestamente públicos pelo titular não desobriga o agente de tratamento de observar os princípios gerais da lei (finalidade, adequação, necessidade, livre acesso, qualidade, transparência e segurança) e de resguardar os direitos do titular.
   * *Conclusão Cebraspe:* Não existe autorização genérica ou irrestrita para raspagem de dados pessoais na Web. A finalidade do scraping deve ser legítima e fundamentada em uma das bases legais do art. 7º.
2. **Lei de Direitos Autorais (Lei nº 9.610/1998):**
   * Dados e fatos históricos não são protegidos por direitos autorais, mas **bases de dados originais** e a seleção/organização de conteúdos literários, artísticos e científicos possuem proteção autoral contra cópia não autorizada.
3. **Preferência Operacional:** O pesquisador e o bibliotecário devem sempre priorizar **APIs Oficiais e Conjuntos de Dados Abertos (Bulk Data)** em relação à raspagem manual, prevenindo riscos jurídicos e sobrecargas no tráfego dos portais governamentais.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Ciência de Dados e Text Mining (sub-14-4):** Consultas SQL e expressões regulares para mineração de textos.
* **Protocolos e APIs (sub-6-2):** APIs REST e consumo de dados abertos da Câmara.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Fundamentos Computacionais** — algoritmos, consultas SQL, expressões regulares (Regex), APIs e Web Scraping — habilitam a automação bibliotecária em larga escala:
1. **Linguagem SQL (Structured Query Language):**
   - **DQL (Consulta):** \`SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY\`.
   - **DML (Manipulação):** \`INSERT INTO\`, \`UPDATE ... SET\`, \`DELETE FROM\`.
   - **DDL (Definição):** \`CREATE TABLE\`, \`ALTER TABLE\`, \`DROP TABLE\`.
   - **DCL (Controle):** \`GRANT\`, \`REVOKE\`.
   - **Junções Canônicas (*JOINs*):**
     - \`INNER JOIN\`: Retorna apenas os registros com correspondência em ambas as tabelas.
     - \`LEFT JOIN\`: Retorna todos os registros da tabela da esquerda e os correspondentes da direita (com NULL se não houver).
2. **Expressões Regulares (*Regex*):**
   - Padrões formais para busca, validação e manipulação de cadeias de caracteres textuais:
     - \`^\`: Início da linha | \`$\`: Fim da linha.
     - \`.\`: Qualquer caractere (exceto nova linha).
     - \`*\`: Zero ou mais ocorrências | \`+\`: Uma ou mais ocorrências | \`?\`: Zero ou uma ocorrência.
     - \`\\d\`: Qualquer dígito numérico \`[0-9]\` | \`\\w\`: Qualquer caractere alfanumérico.
     - \`[A-Z]\`: Qualquer letra maiúscula | \`( )\`: Grupo de captura.
3. **APIs e Arquitetura REST:**
   - **API (*Application Programming Interface*):** Conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado em requisições e respostas.
   - **REST (*Representational State Transfer*):** Padrão arquitetural web que opera sobre HTTP sem estado (*stateless*), usando métodos padronizados:
     - \`GET\`: Recuperar dados (idempotente e seguro).
     - \`POST\`: Criar um novo recurso.
     - \`PUT\`: Atualizar integralmente um recurso existente.
     - \`DELETE\`: Excluir um recurso.
4. **Web Scraping (Raspagem de Dados):**
   - Extração automatizada de dados de páginas HTML da web quando não há API estruturada disponível. Requer atenção à ética, termos de serviço e à Lei Geral de Proteção de Dados (LGPD).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Consulta SQL para Relatório da Mesa Diretora):** O Diretor-Geral da Câmara solicita a lista de todos os livros de Direito Constitucional adquiridos em 2023 com custo unitário superior a R$ 200,00. O bibliotecário executa a consulta:
  \`\`\`sql
  SELECT titulo, autor, valor_aquisicao 
  FROM acervo 
  WHERE classe_cdu LIKE '342%' AND ano_aquisicao = 2023 AND valor_aquisicao > 200.00 
  ORDER BY valor_aquisicao DESC;
  \`\`\`
  O relatório é exportado em CSV e entregue em segundos.
- **Cenário 2 (Expressão Regular para Limpeza de ISBN e CPF no Catálogo):** Ao higienizar uma base de dados legada com 50.000 registros, o bibliotecário utiliza uma regex no editor de texto para validar e padronizar ISBNs de 13 dígitos: \`^97[89]-\\d{1,5}-\\d{1,7}-\\d{1,7}-\\d$\`.
- **Cenário 3 (Consumo de Dados Abertos via API REST da Câmara):** O bibliotecário programa um script em Python que consome o endpoint REST oficial da Câmara (\`GET https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2024\`) para baixar automaticamente todas as ementas em JSON e integrá-las aos novos sumários temáticos da Biblioteca Pedro Aleixo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Comando / Método | Categoria / Função | Comportamento no Sistema | Efeito no Dado |
| :--- | :--- | :--- | :--- |
| **SELECT** | SQL DQL | Lê e projeta colunas da tabela | Não altera nada no banco |
| **DELETE** | SQL DML | Remove linhas específicas com \`WHERE\` | Exclui tuplas do banco |
| **DROP** | SQL DDL | Destrói a estrutura da tabela inteira | Elimina a tabela do banco |
| **GET (HTTP)** | Método REST | Leitura segura de recursos | Não altera o estado no servidor |
| **POST (HTTP)** | Método REST | Envio de novos dados | Cria um novo registro |
| **Regex \`+\` vs \`*\`** | Metacaracteres | \`+\` exige $\\ge 1$ | \`*\` aceita $\\ge 0$ (inclusive vazio) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O WHERE sem DELETE no SQL:** O Cebraspe adverte sobre o perigo do \`DELETE FROM acervo;\` sem a cláusula \`WHERE\`. **Gabarito: CERTO.** Executar \`DELETE\` sem \`WHERE\` apaga todas as linhas de toda a tabela.
- **Idempotência do Método POST:** Afirmar que o método HTTP POST é idempotente (isto é, que executá-lo 10 vezes produz sempre o mesmo resultado sem criar novos registros). **Gabarito: ERRADO.** O método \`GET\` e \`PUT\` são idempotentes; o \`POST\` não é idempotente (executar 10 vezes cria 10 novos recursos duplicados).
- **Regex \`^\` dentro de colchetes:** O símbolo \`^\` no início da regex significa início de linha, mas **dentro de colchetes** \`[^0-9]\` significa negação lógica (qualquer caractere que NÃO seja dígito).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CORMEN, Thomas H. et al.** *Algoritmos: teoria e prática*. 3. ed. Rio de Janeiro: Elsevier, 2012. (A bíblia mundial de estruturas de dados e algoritmos).
- **FRIEDL, Jeffrey E. F.** *Mastering Regular Expressions*. 3. ed. Sebastopol: O'Reilly Media, 2006. (A obra de referência absoluta em expressões regulares).
- **FIELDING, Roy Thomas.** *Architectural Styles and the Design of Network-based Software Architectures*. 2000. Tese (Doutorado em Ciência da Computação) – University of California, Irvine, 2000. (A tese seminal que definiu o padrão REST).
- **DATE, C. J.** *Introdução a sistemas de bancos de dados*. 8. ed. Rio de Janeiro: Campus, 2004.
- **BRASIL. CÂMARA DOS DEPUTADOS.** *Portal de Dados Abertos da Câmara dos Deputados: Documentação das APIs REST v2*. Brasília: Diretoria de Inovação e TI (DITEC), 2023.`,
  checkpoints: [
    {
      id: 'cp-6-6-1',
      pergunta: 'Micro-Checkpoint 1: Ordem Lógica e Diferença entre WHERE e HAVING no SQL',
      item: 'Em uma consulta SQL, a cláusula WHERE avalia condições lógicas sobre registros individuais antes da execução do agrupamento, sendo vedada a inclusão direta de funções de agregação nessa cláusula; por sua vez, a cláusula HAVING atua filtrando os grupos formados após o processamento do GROUP BY.',
      gabarito: 'C',
      justificativa:
        'Correto! Essa é a regra estrutural da ordem lógica de execução do SQL: o WHERE filtra tuplas no nível atômico antes do agrupamento; o HAVING filtra os agregados resultantes do GROUP BY.',
    },
    {
      id: 'cp-6-6-2',
      pergunta: 'Micro-Checkpoint 2: Semântica do Metacaractere Ponto em Regex',
      item: 'Na sintaxe padrão das expressões regulares (regex), o metacaractere ponto "." é utilizado exclusivamente para localizar instâncias do ponto final ortográfico em um documento textual, devendo-se utilizar "\\." para localizar caracteres curingas quaisquer.',
      gabarito: 'E',
      justificativa:
        'Errado! A afirmação inverteu a sintaxe: o metacaractere ponto "." representa qualquer caractere único (exceto quebras de linha); para localizar o caractere ponto ortográfico literal, é mandatório utilizar o escape com barra invertida "\\.".',
    },
    {
      id: 'cp-6-6-3',
      pergunta: 'Micro-Checkpoint 3: Web Scraping de Dados Pessoais e a LGPD',
      item: 'Considerando que determinado sítio governamental disponibiliza dados em página web pública sem exigência de senha ou cadastro, a coleta automatizada desses dados pessoais por meio de web scraping está integralmente isenta do cumprimento dos princípios e obrigações da Lei Geral de Proteção de Dados (LGPD).',
      gabarito: 'E',
      justificativa:
        'Errado! Conforme dispõe expressamente o art. 7º, §§ 3º e 4º da LGPD (Lei nº 13.709/2018), o fato de o dado pessoal ser de acesso público não desobriga o agente de observar os princípios da finalidade, boa-fé e necessidade, sendo vedado o tratamento abusivo ou incompatível com o propósito original da divulgação.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-6-1',
        periodo: '1951 / 1956',
        disciplina: 'Teoria da Computação e Linguagens Formais',
        focoPrincipal: 'Formulação dos conjuntos regulares e expressões regulares na teoria dos autômatos',
        figuraChave: 'Stephen Cole Kleene',
      },
      {
        id: 'tl-6-6-2',
        periodo: '1974 / 1986',
        disciplina: 'Bancos de Dados Relacionais',
        focoPrincipal: 'Desenvolvimento e padronização internacional da linguagem SQL (ANSI/ISO)',
        figuraChave: 'Donald Chamberlin e Raymond Boyce (IBM)',
      },
      {
        id: 'tl-6-6-3',
        periodo: '2000 / 2018',
        disciplina: 'Web Semântica, APIs e Privacidade',
        focoPrincipal: 'Definição da arquitetura REST por Roy Fielding e promulgação da LGPD no Brasil',
        figuraChave: 'Roy Fielding / Congresso Nacional (Lei 13.709)',
      },
    ],
    autores: [
      {
        id: 'aut-6-6-1',
        nome: 'Jeannette Wing',
        ano: 2006,
        obraPrincipal: 'Computational Thinking (Communications of the ACM)',
        ideiaChave: 'Os 4 pilares: Decomposição, Reconhecimento de Padrões, Abstração e Algoritmos.',
        chipPegadinha: 'Pensamento computacional é uma habilidade conceitual humana, não a mera escrita mecânica de código em uma linguagem específica.',
      },
      {
        id: 'aut-6-6-2',
        nome: 'Roy Fielding',
        ano: 2000,
        obraPrincipal: 'Architectural Styles and the Design of Network-based Software Architectures',
        ideiaChave: 'A arquitetura REST: stateless, recursos identificados por URIs e verbos HTTP padronizados.',
        chipPegadinha: 'GET e DELETE são métodos idempotentes; POST não é idempotente.',
      },
      {
        id: 'aut-6-6-3',
        nome: 'Stephen Kleene',
        ano: 1951,
        obraPrincipal: 'Representation of Events in Nerve Nets and Finite Automata',
        ideiaChave: 'Álgebra de expressões regulares e autômatos finitos para casamento de padrões textuais.',
        chipPegadinha: 'O ponto sem escape reconhece qualquer caractere; o ponto literal exige "\\.".',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-6-1',
        afirmacao: 'Em uma consulta SQL com agrupamento, a cláusula WHERE pode utilizar livremente a função de agregação COUNT(*) para filtrar os dados antes de exibi-los.',
        gabarito: 'E',
        porQue: 'Funções de agregação não podem figurar na cláusula WHERE; filtros baseados em resultados agregados (como COUNT ou SUM) devem obrigatoriamente ser declarados na cláusula HAVING.',
      },
      {
        id: 'peg-6-6-2',
        afirmacao: 'O arquivo robots.txt possui força de lei federal no ordenamento jurídico brasileiro, tipificando como crime cibernético a navegação automatizada em rotas declaradas como Disallow.',
        gabarito: 'E',
        porQue: 'O robots.txt é um protocolo técnico de cortesia e convenção da Web, não possuindo natureza de lei penal nem civil.',
      },
      {
        id: 'peg-6-6-3',
        afirmacao: 'O método HTTP GET, segundo o padrão REST, é caracterizado como uma operação segura e idempotente, por não produzir efeitos colaterais de modificação no estado dos recursos armazenados no servidor.',
        gabarito: 'C',
        porQue: 'GET é puramente de recuperação de dados (leitura); repetidas requisições GET retornam o recurso sem alterar seu estado no servidor.',
      },
    ],
  },
};
