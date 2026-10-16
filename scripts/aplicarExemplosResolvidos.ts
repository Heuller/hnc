import fs from 'node:fs';
import path from 'node:path';

const fileSub66 = path.resolve('src/content/modules/m6-digital-ia/sub-6-6.ts');
let content66 = fs.readFileSync(fileSub66, 'utf8');

// 1. Substituir seção 2.C de sub-6-6.ts
const targetSqlOld = `#### C. Três Consultas SQL de Exemplo no Universo da Câmara dos Deputados`;
const targetSqlEnd = `### 3. Expressões Regulares (Regex): Sintaxe, Metacaracteres e Padrões Documentais`;

const newSqlContent = `#### C. Exemplos Resolvidos com Esmaecimento: Consultas SQL (3 Degraus)

##### Degrau 1: Exemplo Completo (Filtro Prévio no WHERE e Filtro Agregado no HAVING)
* **Problema:** Na base de dados bibliográfica da Câmara dos Deputados, listar os assuntos que possuem pelo menos 2 obras editadas a partir do ano 2020, ordenando pelo total de obras em ordem decrescente.
* **Consulta SQL Resolvida:**
\\\`\\\`\\\`sql
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
\\\`\\\`\\\`
* **Explicação Passo a Passo:**
  1. \\\`FROM\\\` e \\\`INNER JOIN\\\` unem as tabelas \\\`assunto\\\`, \\\`livro_assunto\\\` e \\\`livro\\\`.
  2. \\\`WHERE livro.ano >= 2020\\\` descarta previamente títulos mais antigos antes do agrupamento.
  3. \\\`GROUP BY assunto.nome\\\` reúne as obras por área temática.
  4. \\\`HAVING COUNT(livro.id) >= 2\\\` descarta assuntos com apenas 1 publicação.
  5. \\\`SELECT\\\` projeta as colunas e \\\`ORDER BY\\\` ordena.
* **Saída Declarada:**
| termo_assunto | total_obras |
| :--- | :--- |
| Direito Constitucional | 3 |
| Ciência Política | 2 |

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: LEFT JOIN e Verificação de Nulo)
* **Problema:** Encontrar proposições legislativas que ainda não possuem relator designado, exibindo sigla, número, ano e ementa.
* **Código com Lacuna:**
\\\`\\\`\\\`sql
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
\\\`\\\`\\\`
* **Resolução Completa:**
\\\`\\\`\\\`sql
SELECT 
    prop.sigla_tipo,
    prop.numero,
    prop.ano,
    prop.ementa
FROM proposicao prop
LEFT JOIN relatoria rel ON prop.id = rel.id_proposicao
WHERE rel.id_relator IS NULL
ORDER BY prop.ano DESC, prop.numero DESC;
\\\`\\\`\\\`
* **Saída Declarada:**
| sigla_tipo | numero | ano | ementa |
| :--- | :--- | :--- | :--- |
| PL | 1042 | 2026 | Institui a Política Nacional de Livros Abertos |
| PEC | 45 | 2026 | Altera regime constitucional de bibliotecas públicas |

##### Degrau 3: Aplicação Autônoma (Mapeamento de Autoria e Produtividade com Agrupamento)
* **Desafio:** Elaborar consulta para gerar ranking de autores por quantidade de livros cadastrados, exibindo apenas autores que tenham pelo menos 1 livro, ordenando decrescentemente pela quantidade.
* **Resolução Completa:**
\\\`\\\`\\\`sql
SELECT 
    autor.nome AS nome_autor,
    COUNT(livro_autor.id_livro) AS total_livros
FROM autor
INNER JOIN livro_autor ON autor.id = livro_autor.id_autor
GROUP BY autor.id, autor.nome
HAVING COUNT(livro_autor.id_livro) >= 1
ORDER BY total_livros DESC, nome_autor ASC;
\\\`\\\`\\\`
* **Saída Declarada:**
| nome_autor | total_livros |
| :--- | :--- |
| Machado de Assis | 3 |
| Clarice Lispector | 2 |
| Darcy Ribeiro | 1 |

---

`;

if (content66.includes(targetSqlOld)) {
  const startIdx = content66.indexOf(targetSqlOld);
  const endIdx = content66.indexOf(targetSqlEnd);
  if (endIdx > startIdx) {
    content66 = content66.slice(0, startIdx) + newSqlContent + content66.slice(endIdx);
    console.log('✅ Seção 2.C de SQL atualizada com 3 degraus');
  }
}

// 2. Atualizar Seção 3 (Regex)
const targetRegexTitleOld = `### 3. Expressões Regulares (Regex): Sintaxe, Metacaracteres e Padrões Documentais`;
const targetRegexTitleNew = `### 3. Regex Exige Escape no Ponto Literal e Ancoragem para Evitar Falsos Positivos`;
content66 = content66.replace(targetRegexTitleOld, targetRegexTitleNew);

const targetRegexBOld = `#### B. Aplicação de Regex em Ambientes de Bibliotecas e Documentação`;
const targetRegexBEnd = `### 4. Arquitetura REST, Formato JSON e a API de Dados Abertos da Câmara`;

const newRegexBContent = `#### B. Exemplos Resolvidos com Esmaecimento: Expressões Regulares (3 Degraus)

##### Degrau 1: Exemplo Completo (Validação e Extração de Proposições Legislativas)
* **Problema:** Validar e extrair componentes de identificação formal de proposições da Câmara (ex.: \\\`PL 1042/2026\\\`, \\\`PEC 45/2026\\\`, \\\`PLP 12/2025\\\`).
* **Padrão Regex Resolvido:**
\\\`\\\`\\\`regex
^(PL|PLP|PEC|PDL)\\\\s+(\\\\d{1,5})\\\\/(\\\\d{4})$
\\\`\\\`\\\`
* **Casos Testados e Saída Declarada:**
  * \\\`"PL 1042/2026"\\\` -> Casa: Sim. Grupo 1: \\\`"PL"\\\`, Grupo 2: \\\`"1042"\\\`, Grupo 3: \\\`"2026"\\\`.
  * \\\`"PEC 45/2026"\\\` -> Casa: Sim. Grupo 1: \\\`"PEC"\\\`, Grupo 2: \\\`"45"\\\`, Grupo 3: \\\`"2026"\\\`.
  * \\\`"MPV 100/2026"\\\` -> Casa: Não (sigla não permitida na lista de alternativas).
  * \\\`"PL 123456/2026"\\\` -> Casa: Não (excede 5 dígitos no número).

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: Citação de Artigo em Ementas)
* **Problema:** Capturar o número de artigos citados em documentos legislativos (ex.: \\\`art. 5º\\\`, \\\`artigo 37\\\`, \\\`Art. 102\\\`).
* **Padrão com Lacuna:**
\\\`\\\`\\\`regex
/* LACUNA: Usar grupo não capturador (?:...) para prefixo art. ou artigo, seguido de dígitos e ordinal opcional */
/* \\\\b(?:art\\\\.|artigo)\\\\s+(\\\\d+)(?:[º°]|___)?\\\\b */
\\\`\\\`\\\`
* **Resolução Completa:**
\\\`\\\`\\\`regex
\\\\b(?:art\\\\.|artigo)\\\\s+(\\\\d+)(?:[º°]|\\\\b)
\\\`\\\`\\\`
* **Casos Testados e Saída Declarada:**
  * \\\`"Em cumprimento ao art. 5º da CF"\\\` -> Casa: Sim. Número capturado no Grupo 1: \\\`"5"\\\`.
  * \\\`"conforme previsto no artigo 37, caput"\\\` -> Casa: Sim. Número capturado no Grupo 1: \\\`"37"\\\`.
  * \\\`"artesanato regional"\\\` -> Casa: Não casa (respeita fronteira de palavra \\\`\\\\b\\\`).

##### Degrau 3: Aplicação Autônoma (Validação de Notação de Classificação Decimal CDU/CDD)
* **Desafio:** Construir expressão regular rigorosa para validar notações de classes principais e subdivisões decimais da CDU/CDD (ex.: \\\`020\\\`, \\\`025.4\\\`, \\\`342.7\\\`), recusando números com pontos duplicados ou letras.
* **Resolução Completa:**
\\\`\\\`\\\`regex
^\\\\d{3}(?:\\\\.\\\\d+)*$
\\\`\\\`\\\`
* **Casos Testados e Saída Declarada:**
  * \\\`"020"\\\` -> Casa: Sim.
  * \\\`"025.4"\\\` -> Casa: Sim.
  * \\\`"342.721"\\\` -> Casa: Sim.
  * \\\`"25.4"\\\` -> Casa: Não (exige 3 dígitos iniciais).
  * \\\`"025..4"\\\` -> Casa: Não (rejeita ponto duplo consecutivo).

---

`;

if (content66.includes(targetRegexBOld)) {
  const startIdx = content66.indexOf(targetRegexBOld);
  const endIdx = content66.indexOf(targetRegexBEnd);
  if (endIdx > startIdx) {
    content66 = content66.slice(0, startIdx) + newRegexBContent + content66.slice(endIdx);
    console.log('✅ Seção 3.B de Regex atualizada com 3 degraus');
  }
}

// 3. Atualizar Seção 4 (API)
const targetApiTitleOld = `### 4. Arquitetura REST, Formato JSON e a API de Dados Abertos da Câmara`;
const targetApiTitleNew = `### 4. APIs REST São Sem Estado (Stateless) e Manipulam Recursos por URIs e Verbos Semânticos`;
content66 = content66.replace(targetApiTitleOld, targetApiTitleNew);

const targetApiEnd = `### 5. Web Scraping: Técnicas, Limitações e Fronteiras Jurídicas`;
const newApiDContent = `#### D. Exemplos Resolvidos com Esmaecimento: Consumo de APIs REST e JSON (3 Degraus)

##### Degrau 1: Exemplo Completo (Requisição com Parâmetros e Extração de Lista de Dados)
* **Problema:** Consumir o endpoint \\\`/proposicoes\\\` filtrando por projetos de lei de 2026 com limite de 2 registros e extrair o identificador e a ementa de cada item.
* **Requisição:** \\\`GET https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&ordem=ASC&ordenarPor=id&itens=2\\\`
* **Payload JSON Retornado pelo Servidor:**
\\\`\\\`\\\`json
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
\\\`\\\`\\\`
* **Processamento e Saída Declarada:**
  * Item 1: ID = \\\`24001\\\`, Ementa = \\\`"Dispõe sobre o depósito legal de obras digitais na Biblioteca da Câmara."\\\`
  * Item 2: ID = \\\`24002\\\`, Ementa = \\\`"Institui o Plano Nacional de Acessibilidade Documental Legislativa."\\\`

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: Extração de Objeto Aninhado em Perfil)
* **Problema:** Recuperar dados detalhados de um parlamentar pelo ID e extrair o partido e a UF de sua situação funcional atual no nó \\\`ultimoStatus\\\`.
* **Requisição:** \\\`GET https://dadosabertos.camara.leg.br/api/v2/deputados/204521\\\`
* **Código de Extração com Lacuna:**
\\\`\\\`\\\`javascript
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
\\\`\\\`\\\`
* **Resolução Completa:**
\\\`\\\`\\\`javascript
const partido = resposta.dados.ultimoStatus.siglaPartido;
const uf = resposta.dados.ultimoStatus.siglaUf;
\\\`\\\`\\\`
* **Saída Declarada:**
  * \\\`partido\\\` = \\\`"PLD"\\\`
  * \\\`uf\\\` = \\\`"DF"\\\`

##### Degrau 3: Aplicação Autônoma (Paginação HATEOAS Navegando por Links Hipermídia)
* **Desafio:** Implementar função de controle que recebe a resposta de uma requisição e localiza a URL da próxima página de dados utilizando a convenção \\\`rel="next"\\\` dos links hipermídia.
* **Resolução Completa:**
\\\`\\\`\\\`javascript
function extrairProximaPagina(respostaJson) {
  const linkNext = respostaJson.links.find(link => link.rel === 'next');
  return linkNext ? linkNext.href : null;
}
\\\`\\\`\\\`
* **Saída Declarada para o Payload do Degrau 1:**
  * Retorno: \\\`"https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2026&siglaTipo=PL&itens=2&pagina=2"\\\`

---

`;

if (content66.includes(targetApiEnd)) {
  const apiEndIdx = content66.indexOf(targetApiEnd);
  const prevDivider = content66.lastIndexOf('---', apiEndIdx);
  if (prevDivider > 0) {
    content66 = content66.slice(0, prevDivider) + newApiDContent + content66.slice(apiEndIdx);
    console.log('✅ Seção 4.D de API REST atualizada com 3 degraus');
  }
}

// 4. Atualizar Seção 5 título
const targetScrapingOld = `### 5. Web Scraping: Técnicas, Limitações e Fronteiras Jurídicas`;
const targetScrapingNew = `### 5. Web Scraping Possui Restrições Éticas (robots.txt) e Legais (LGPD e Direitos Autorais), Sendo APIs Oficiais Preferíveis`;
content66 = content66.replace(targetScrapingOld, targetScrapingNew);

fs.writeFileSync(fileSub66, content66, 'utf8');
console.log('Salvo sub-6-6.ts com sucesso!');

// 5. Atualizar sub-6-5.ts com MER e Normalização
const fileSub65 = path.resolve('src/content/modules/m6-digital-ia/sub-6-5.ts');
let content65 = fs.readFileSync(fileSub65, 'utf8');

const targetMerTitleOld = `### 2. O Modelo Entidade-Relacionamento (MER) de Peter Chen (1976)`;
const targetMerTitleNew = `### 2. O Modelo MER de Chen É Metodologia de Banco de Dados, Não Se Confundindo com Ontologias Bibliográficas como IFLA LRM`;
content65 = content65.replace(targetMerTitleOld, targetMerTitleNew);

const targetRelTitleOld = `### 3. O Modelo Relacional e as Formas Normais de Edgar F. Codd (1970)`;
const targetRelTitleNew = `### 3. O Modelo Relacional Elimina Redundâncias Operacionais Através das Formas Normais (1FN, 2FN e 3FN)`;
content65 = content65.replace(targetRelTitleOld, targetRelTitleNew);

const newMerContent = `#### D. Exemplos Resolvidos com Esmaecimento: Modelagem MER e Normalização Relacional (3 Degraus)

##### Degrau 1: Exemplo Completo (Mapeamento de Relacionamento N:M para Tabela Associativa)
* **Problema:** No modelo conceitual de uma biblioteca, \\\`AUTOR\\\` e \\\`OBRA\\\` possuem relacionamento N:M ("Autor escreve Obra"). Modelar o esquema relacional em SQL com chave primária composta e chaves estrangeiras, garantindo integridade referencial.
* **DDL e Inserções Resolvidas:**
\\\`\\\`\\\`sql
CREATE TABLE autor (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL
);

CREATE TABLE obra (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    ano INTEGER NOT NULL
);

CREATE TABLE autor_obra (
    id_autor INTEGER NOT NULL,
    id_obra INTEGER NOT NULL,
    PRIMARY KEY (id_autor, id_obra),
    FOREIGN KEY (id_autor) REFERENCES autor(id),
    FOREIGN KEY (id_obra) REFERENCES obra(id)
);

INSERT INTO autor (id, nome) VALUES (1, 'Machado de Assis'), (2, 'Joaquim Nabuco');
INSERT INTO obra (id, titulo, ano) VALUES (10, 'O Abolicionismo', 1883), (20, 'Esaú e Jacó', 1904);
INSERT INTO autor_obra (id_autor, id_obra) VALUES (2, 10), (1, 20);
\\\`\\\`\\\`
* **Consulta Relacional e Saída Declarada:**
\\\`\\\`\\\`sql
SELECT autor.nome, obra.titulo, obra.ano
FROM autor
INNER JOIN autor_obra ON autor.id = autor_obra.id_autor
INNER JOIN obra ON autor_obra.id_obra = obra.id
ORDER BY obra.ano ASC;
\\\`\\\`\\\`
| nome | titulo | ano |
| :--- | :--- | :--- |
| Joaquim Nabuco | O Abolicionismo | 1883 |
| Machado de Assis | Esaú e Jacó | 1904 |

##### Degrau 2: Exemplo Parcial com Esmaecimento (Lacuna: Entidade Fraca e Deleção em Cascata)
* **Problema:** A entidade \\\`EXEMPLAR\\\` é uma entidade fraca dependente de \\\`OBRA\\\`. Se uma obra for descartada/excluída, todos os seus exemplares físicos associados devem ser automaticamente eliminados pelo SGBD.
* **DDL com Lacuna:**
\\\`\\\`\\\`sql
CREATE TABLE exemplar (
    id_exemplar INTEGER NOT NULL,
    id_obra INTEGER NOT NULL,
    codigo_barras TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'disponivel',
    PRIMARY KEY (id_exemplar, id_obra),
    /* LACUNA: Cláusula de chave estrangeira com deleção em cascata */
    /* FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE ___ */
);
\\\`\\\`\\\`
* **Resolução Completa:**
\\\`\\\`\\\`sql
CREATE TABLE exemplar (
    id_exemplar INTEGER NOT NULL,
    id_obra INTEGER NOT NULL,
    codigo_barras TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'disponivel',
    PRIMARY KEY (id_exemplar, id_obra),
    FOREIGN KEY (id_obra) REFERENCES obra(id) ON DELETE CASCADE
);

INSERT INTO exemplar (id_exemplar, id_obra, codigo_barras) VALUES (1, 10, 'EX-10-A'), (2, 10, 'EX-10-B');
\\\`\\\`\\\`
* **Verificação e Saída Declarada:**
Ao executar \\\`DELETE FROM obra WHERE id = 10;\\\`, a contagem de exemplares restantes com \\\`id_obra = 10\\\` é exatamente \\\`0\\\` (deleção automática propagada pelo motor relacional).

##### Degrau 3: Aplicação Autônoma (Normalização até a 3ª Forma Normal - 3FN)
* **Desafio:** A tabela desnormalizada \\\`livro_desnormalizado(id, titulo, ano, id_editora, nome_editora, cidade_editora)\\\` viola a 3FN porque \\\`cidade_editora\\\` depende de \\\`id_editora\\\` (dependência transitiva em relação à PK \\\`id\\\`). Projetar a decomposição normalizada em 3FN e comprovar a integridade dos dados.
* **Resolução Completa (Esquema Decomposto em 3FN):**
\\\`\\\`\\\`sql
CREATE TABLE editora (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    cidade TEXT NOT NULL
);

CREATE TABLE livro_3fn (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    ano INTEGER NOT NULL,
    id_editora INTEGER NOT NULL,
    FOREIGN KEY (id_editora) REFERENCES editora(id)
);

INSERT INTO editora (id, nome, cidade) VALUES (1, 'Edições Câmara', 'Brasília');
INSERT INTO livro_3fn (id, titulo, ano, id_editora) VALUES (100, 'Regimento Interno Comentado', 2026, 1);
\\\`\\\`\\\`
* **Consulta e Saída Declarada:**
\\\`\\\`\\\`sql
SELECT livro_3fn.titulo, editora.nome AS editora, editora.cidade
FROM livro_3fn
INNER JOIN editora ON livro_3fn.id_editora = editora.id;
\\\`\\\`\\\`
| titulo | editora | cidade |
| :--- | :--- | :--- |
| Regimento Interno Comentado | Edições Câmara | Brasília |

---

`;

const targetRelEnd = `### 4. Sistemas de Bancos de Dados NoSQL e Grafos de Conhecimento`;
if (content65.includes(targetRelEnd)) {
  const relEndIdx = content65.indexOf(targetRelEnd);
  const prevDiv = content65.lastIndexOf('---', relEndIdx);
  if (prevDiv > 0) {
    content65 = content65.slice(0, prevDiv) + newMerContent + content65.slice(relEndIdx);
    console.log('✅ Seção 3.D de MER/Normalização atualizada com 3 degraus');
  }
}

fs.writeFileSync(fileSub65, content65, 'utf8');
console.log('Salvo sub-6-5.ts com sucesso!');
