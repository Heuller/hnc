# Changelog de Conteúdo — Plataforma Heuller na Câmara (HNC)

Este documento registra todas as alterações estruturais, correções normativas, podas e migrações realizadas no conteúdo teórico e avaliativo da plataforma, em estrita conformidade com a auditoria editalícia do Concurso da Câmara dos Deputados (Edital nº 1/2026 — Cargo 5: Bibliotecário) e o padrão metodológico Cebraspe.

---

## [Fase 0] — Integridade e Contenção de Risco (13/10/2026)

### P0.1 — Procedência dos Alertas "Câmara 2026"
- **Arquivos modificados:**
  - `src/content/modules/m6-digital-ia/sub-6-4.ts`
  - `src/content/modules/m10-legislativo/sub-10-1.ts`
- **Ação:** Substituição de 20 ocorrências de menções prospectivas desprovidas de comprovação histórica ("Câmara 2026") pela redação formal e verificável: *"tema de alta probabilidade de cobrança Cebraspe"*.
- **Impacto:** Eliminação de qualquer risco de ruído temporal ou alucinação sobre editais passados/futuros.

### P0.2 — Mesa do Congresso Nacional (Correção Regimental / CF/88)
- **Arquivos modificados:**
  - `src/content/modules/m10-legislativo/sub-10-1.ts`
  - `src/content/questions/m10-legislativo-100q.ts` (Questão 2)
- **Fundamentação:** Art. 57, § 5º da CF/88 e Art. 2º da Resolução nº 1/1970-CN (Regimento Comum do Congresso Nacional).
- **Ação:** Correção da redação para esclarecer com precisão que a Mesa da Câmara dos Deputados e a Mesa do Senado Federal são órgãos monocamerais privativos de cada Casa, ao passo que a **Mesa do Congresso Nacional** é órgão bicameral presidido pelo **Presidente do Senado Federal** (e não da Câmara), com alternância nos demais cargos de direção entre deputados e senadores.

### P0.3 — Edições Vigentes das Normas ABNT (Catálogo ABNT)
- **Arquivos modificados:**
  - `src/content/modules/m8-normalizacao/sub-8-1.ts`
  - `src/content/modules/m8-normalizacao/sub-8-3.ts`
  - `src/content/modules/m8-normalizacao/sub-8-4.ts`
- **Ação:** Fixação do ano exato das edições vigentes em conformidade com o Catálogo de Normas ABNT:
  - **ABNT NBR 6023:2018 (com Emenda 1:2020)** — Referências;
  - **ABNT NBR 10520:2023** — Citações em documentos (já fixada);
  - **ABNT NBR 14724:2011** — Trabalhos acadêmicos;
  - **ABNT NBR 12225:2023** — Lombadas;
  - **ABNT NBR 6028:2021** — Resumos;
  - **ABNT NBR 6027:2012** — Sumários;
  - **ABNT NBR 6022:2018** — Artigo em publicação periódica;
  - **ABNT NBR 6024:2012** — Numeração progressiva;
  - **ABNT NBR 6034:2004** — Índices.

### P0.4 — Remoção de Redação Oficial e Migração de Pontuação para 13.3
- **Arquivos modificados:**
  - `src/content/modules/m13-portugues/sub-13-3.ts`
  - `src/content/modules/m13-portugues/index.ts`
  - `src/content/simuladosRegistry.ts`
  - `src/content/questions/m13-portugues-100q.ts`
  - `src/content/questions/mega-simulado-camara-120q.ts`
  - `src/content/modules/m13-portugues/sub-13-4.ts` (excluído)
- **Racional:** O edital de Conhecimentos Básicos para Analista Legislativo — Bibliotecário (Cargo 5) não cobra o Manual de Redação da Presidência da República (MRPR 2018), mas cobra expressamente Pontuação (item 5.4).
- **Ação:**
  - Seções 1 e 2 de pontuação (vírgula proibida, obrigatória, facultativa e orações adjetivas explicativas vs. restritivas), alertas e pegadinhas foram integrados ao **Submódulo 13.3**, renomeado para *"Sintaxe Avançada, Pontuação, Concordância, Regência e Crase"*.
  - Seções 3 e 4 (Manual da Presidência, pronomes de tratamento e fechos oficiais) foram definitivamente expurgadas.
  - Submódulo 13.4 desvinculado de M13 (será recriado na Fase 4 como T4.5: Ortografia, Gêneros Textuais, Tempos/Modos e Colocação Pronominal).
  - 8 questões de Redação Oficial no Simulado M13 foram substituídas por questões de Pontuação, Crase, Regência e Ortografia, mantendo exatamente a proporção de 50 Certas e 50 Erradas (50/50).
  - 2 questões de Redação Oficial no Mega Simulado 120Q foram substituídas por questões de Pontuação/Sintaxe, preservando a proporção de 60 Certas e 60 Erradas.
  - `git grep` confirma zero ocorrências residuais de Redação Oficial, Manual da Presidência ou Pronomes de Tratamento em `src/content/`.

### P0.5 — Priorização de M7 (Preservação e Memória)
- **Arquivos modificados:**
  - `src/domain/schemas/modulo.schema.ts`
  - `src/content/modules/m7-preservacao/sub-7-1.ts`
  - `src/content/modules/m7-preservacao/sub-7-2.ts`
  - `src/content/modules/m7-preservacao/sub-7-3.ts`
  - `src/content/modules/m7-preservacao/sub-7-4.ts`
- **Ação:**
  - Adicionado o campo `prioridade: z.enum(['alta', 'normal', 'baixa']).default('normal').optional()` ao `ModuloFilhoSchema`.
  - Submódulos 7.1 (Agentes Ambientais) e 7.3 (Conservação Preventiva) marcados com `prioridade: 'normal'`.
  - Submódulos 7.2 (Agentes Biológicos e CIP) e 7.4 (Intervenções Curativas) marcados com `prioridade: 'baixa'`, direcionando a cadência de estudos e as revisões espaçadas de forma equilibrada com o edital (uma linha no Bloco D).

---

## [Fase 1] — Bloco A: Ciência da Informação, Governança, Metadados e Linked Data (13/10/2026)

### T1.1 — Novo Submódulo 1.5: Ciclo de Vida, Qualidade e Memória da Informação
- **Arquivo criado:** `src/content/modules/m1-fundamentos/sub-1-5.ts`
- **Conteúdo teórico denso (15.700+ caracteres):**
  - **Ciclo de Vida da Informação:** Abordagem de McGee & Prusak (1994) com 5 fases lineares (Necessidade/Requisitos, Coleta/Obtenção, Classificação/Organização, Armazenamento/Manutenção, Disseminação/Uso) e modelo ecológico-processual de Choo (2006).
  - **Dimensões de Qualidade da Informação:** Modelo de Wang & Strong (1996) com 4 categorias (Intrínseca, Contextual, Representacional e Acessibilidade) e 15 dimensões operacionais.
  - **Tipologia de Dados:** Dados estruturados (modelo relacional/SQL), semiestruturados (XML, JSON, YAML) e não estruturados (textos livres, relatórios em PDF, gravações audiovisuais de sessões plenárias).
  - **Memória Institucional e Patrimônio na Câmara dos Deputados:** Papel da Coordenação de Edições Técnicas e Preservação (Cedi) e da Biblioteca Pedro Aleixo na salvaguarda da memória legislativa e do patrimônio bibliográfico nacional.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos fundamentados, tabela comparativa de tipologias de dados e 3 categorias de mnemônicos (Linha do Tempo, Autores-Chave, Pegadinhas).

### T1.2 — Novo Submódulo 1.6: Governança da Informação e Governança de Dados
- **Arquivo criado:** `src/content/modules/m1-fundamentos/sub-1-6.ts`
- **Conteúdo teórico denso (16.200+ caracteres):**
  - **DAMA-DMBOK (2ª ed., 2017):** Estrutura da DAMA Wheel posicionando a Governança de Dados no núcleo articulador das demais 10 funções de gestão de dados.
  - **Papéis e Responsabilidades:** Distinção rigorosa entre *Data Owner* (decisor estratégico de negócio), *Data Steward* (curador funcional da qualidade, metadados e regras de negócio) e *Data Custodian* (gestor da infraestrutura técnica de TI e armazenamento).
  - **Qualidade e Linhagem:** Dimensões do DAMA (completude, unicidade, consistência, validade, acurácia, pontualidade), proveniência e modelo W3C PROV-O (Entity, Activity, Agent).
  - **Gestão de Dados Mestres e Referência:** Diferenciação entre Master Data Management (MDM) e Reference Data Management (RDM).
  - **Dados Abertos Governamentais:** 8 Princípios de Sebastopol (2007), escala de 5 estrelas de Tim Berners-Lee (2010), obrigações da Lei nº 12.527/2011 (LAI art. 8º § 3º) e Decreto Federal nº 8.777/2016 (Política de Dados Abertos do Poder Executivo Federal).
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos fundamentados, tabela comparativa de papéis DAMA e mnemônicos estruturados.

### T1.3 — Novo Submódulo 2.6: Metadados: Tipologia, Qualidade, Perfis de Aplicação, Crosswalks, Imagem e Som
- **Arquivo criado:** `src/content/modules/m2-catalogacao/sub-2-6.ts`
- **Conteúdo teórico denso (16.500+ caracteres):**
  - **Tipologia NISO (2004/2017):** Metadados descritivos, administrativos, técnicos, estruturais, direitos de acesso e de preservação.
  - **Qualidade de Metadados:** Dimensões de Bruce & Hillmann (2004) — completude, acurácia, proveniência, conformidade com expectativas, consistência lógica, pontualidade e acessibilidade.
  - **Perfis de Aplicação:** Conceito de Heery & Patel (2000) e Dublin Core Application Profiles (DCAP), permitindo reuso e combinação de termos de múltiplos esquemas sem criar novos namespaces arbitrários.
  - **Crosswalks e Perda Semântica:** Mapeamento entre esquemas, equivalências 1:1, 1:N, N:1 e o fenômeno de *dumbing down* / simplificação redutiva de metadados especializados para genéricos.
  - **Metadados de Imagem e Som:** Padrão NISO Z39.87 / MIX (metadados técnicos para imagens estáticas digitais), metadados embutidos EXIF e padrão PBCore (Public Broadcasting Metadata Dictionary para rádio e TV pública).
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos, tabela comparativa NISO vs. Esquemas e mnemônicos de retenção.

### T1.4 — Novo Submódulo 2.7: MODS, METS, BIBFRAME, Linked Data e Interoperabilidade
- **Arquivo criado:** `src/content/modules/m2-catalogacao/sub-2-7.ts`
- **Conteúdo teórico denso (17.100+ caracteres):**
  - **MODS (Metadata Object Description Schema):** Especificação da Library of Congress, sintaxe XML, vocabulário legível, conjunto intermediário entre Dublin Core (simplicidade) e MARC 21 (alta complexidade técnica).
  - **METS (Metadata Encoding and Transmission Standard):** Estrutura e as 7 seções mandatórias/opcionais (`metsHdr`, `dmdSec`, `amdSec`, `fileSec`, `structMap`, `structLink`, `behaviorSec`), com foco na `structMap` como única seção mandatória.
  - **BIBFRAME 2.0:** Iniciativa da Library of Congress para transição do formato MARC 21 para a Web Semântica; entidades nucleares *Work*, *Instance* e *Item*; mapeamento via ferramenta oficial `marc2bibframe2`.
  - **Linked Data & Web Semântica:** 4 regras de Tim Berners-Lee (2006), arquitetura de triplas RDF (Sujeito-Predicado-Objeto), ontologias OWL e taxonomias SKOS.
  - **Identificadores Persistentes Globais:** ISNI, VIAF, ORCID, DOI e Wikidata na catalogação moderna de autoridades e entidades.
  - **Níveis de Interoperabilidade:** Sintática, estrutural, semântica e organizacional.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos com gabaritos detalhados, tabela de seções METS e mnemônicos estruturados.

### T1.5 — Extensões Curriculares em 1.1 e 4.4
- **Arquivos modificados:**
  - `src/content/modules/m1-fundamentos/sub-1-1.ts`
  - `src/content/modules/m4-recuperacao/sub-4-4.ts`
- **Conteúdo incorporado em 1.1:**
  - Seção 7: *A IFLA, Governança Internacional da Informação e Manifestos Históricos*.
  - Missão, governança (Assembleia Geral, Conselho de Administração e Comitê Profissional) e padrões biblioteconômicos internacionais IFLA (ISBD, LRM, ICP).
  - Manifesto IFLA/UNESCO sobre Bibliotecas Públicas (revisão de Dublin, 2022) — inclusão digital, sustentabilidade, liberdade de acesso e bibliotecas como agentes comunitários.
  - Manifesto IFLA/UNESCO sobre Bibliotecas Digitais (2010) — preservação digital, interoperabilidade e acesso aberto ao patrimônio científico e cultural.
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.
- **Conteúdo incorporado em 4.4:**
  - Seção 6: *Competência em Dados (Data Literacy): Fundamentos, Dimensões e Fronteiras*.
  - Modelos seminais de Calzada Prado & Marzal (2013) e Koltay (2017).
  - As 5 dimensões nucleares da competência em dados: compreensão do dado, localização/acesso, avaliação crítica, gestão/organização e uso ético/comunicação.
  - Tabela comparativa sistematizada: *Information Literacy* (Competência Informacional) vs. *Data Literacy* (Competência em Dados).
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### Integração, Métricas e Dossiê Teórico
- **Arquivos de integração e testes ajustados:**
  - `src/content/modules/m1-fundamentos/index.ts` (6 submódulos exportados)
  - `src/content/modules/m2-catalogacao/index.ts` (6 submódulos exportados)
  - `src/content/simuladosRegistry.ts` (submodulosIds de M1 e M2 atualizados)
  - `src/tests/contentIntegrity.test.ts` (total de submódulos atualizado para 67)
  - `src/tests/mapaLacunas.test.ts` (67 submódulos, 201 checkpoints e 1721 itens ativos)
  - `src/tests/faseE6Realinhamento.test.ts` (compatibilização com novos submódulos de M1 e M2)
  - `src/tests/metrics.test.ts` (métricas de tempo, checkpoints e progresso de M1 atualizadas)
  - `src/tests/rodada5bParte2.test.ts` e `src/tests/rodada5bReproduction.test.ts` (ajuste para 1.6 como submódulo terminal de M1 que aciona o portão do simulado)
- **Status da suíte de testes:** 39 arquivos de teste executados, 382 testes aprovados (100% verde).
- **Compilação editorial:** Dossiê Teórico Completo recompilado em Markdown, HTML e PDF editorial Cebraspe (`Heuller_na_Camara_Dossie_Teorico_Completo.pdf` — 10.85 MB).

---

## [Fase 2] — Blocos B e C: Dados, Computação, Inteligência Artificial e Visualização (13/10/2026)

### T2.1 — Novo Submódulo 6.5: Sistemas Informacionais, Modelagem de Dados, Bancos Relacionais e NoSQL
- **Arquivo criado:** `src/content/modules/m6-digital-ia/sub-6-5.ts`
- **Conteúdo teórico denso (17.500+ caracteres):**
  - **Engenharia de Requisitos em Ambientes Documentários:** Requisitos funcionais (catalogação cooperativa Z39.50/SRU, fichas AACR2/RDA/ABNT, recuperação booleana) vs. não funcionais (desempenho, segurança AES-256/TLS 1.3, acessibilidade WCAG, conformidade LGPD);
  - **Modelo Entidade-Relacionamento (MER de Peter Chen, 1976):** Entidades fortes e fracas, atributos (simples, compostos, monovalorados, multivalorados, derivados) e cardinalidades (1:1, 1:N, N:M) com exemplo bibliográfico e legislativo completo (Autor-Obra-Exemplar);
  - **Diferenciação Crítica MER vs. IFLA LRM:** O MER é técnica geral de modelagem lógica da Ciência da Computação; o IFLA LRM é modelo conceitual de domínio bibliográfico;
  - **Modelo Relacional e Formas Normais de Edgar F. Codd (1970):** Chaves primárias (PK - integridade de entidade) e chaves estrangeiras (FK - integridade referencial); 1FN (atributos atômicos e monovalorados), 2FN (eliminação de dependências parciais em chaves compostas) e 3FN (eliminação de dependências transitivas); propriedades ACID dos RDBMS transacionais;
  - **Bancos NoSQL e Teorema CAP (Eric Brewer):** Consistência, Disponibilidade e Tolerância ao Particionamento; as 4 grandes famílias: Documentos (JSON/BSON - MongoDB), Chave-Valor (Redis), Família de Colunas (Cassandra) e Grafos (Neo4j);
  - **Grafos de Conhecimento (Knowledge Graphs):** Transição de strings para entidades (*things, not strings*), serialização em triplas RDF e consulta SPARQL.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos, quadro comparativo Relacional vs. 4 Famílias NoSQL e mnemônicos estruturados.

### T2.2 — Novo Submódulo 6.6: Fundamentos Computacionais: Algoritmos, SQL, Regex, APIs e Web Scraping
- **Arquivo criado:** `src/content/modules/m6-digital-ia/sub-6-6.ts`
- **Conteúdo teórico denso (18.100+ caracteres):**
  - **Pensamento Computacional (Jeannette Wing, 2006):** Decomposição, Reconhecimento de Padrões, Abstração e Algoritmo; estruturas de controle (sequência, seleção `if/else`, repetição `for/while`);
  - **Linguagem SQL e Ordem Lógica de Execução:** Ordem escrita vs. ordem lógica de execução do motor (`FROM/JOIN` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `DISTINCT` -> `ORDER BY` -> `LIMIT/OFFSET`); distinção vital entre `WHERE` (filtra tuplas antes da agregação) e `HAVING` (filtra grupos após agregação); tipos de `JOIN` (`INNER`, `LEFT`, `RIGHT`, `FULL`); 3 consultas SQL comentadas no universo bibliotecário da Câmara;
  - **Expressões Regulares (Stephen Kleene):** Metacaracteres (`.`, `^`, `$`, `*`, `+`, `?`, `{}`, `[]`, `\d`, `\w`, `\s`, `\b`) e escape com `\.`; padrões de validação de ISBN-13 (`^97[89]\d{10}$`), anos de publicação (`\b(19|20)\d{2}\b`) e leis federais (`Lei n[ºo]\s*\d+(?:\.\d+)?/\d{4}`);
  - **Arquitetura REST (Roy Fielding, 2000):** Stateless, recursos em URIs, verbos HTTP semânticos (`GET`, `POST`, `PUT`, `DELETE`), idempotência e códigos de status; **API de Dados Abertos da Câmara dos Deputados (v2)**;
  - **Web Scraping e Limites Ético-Jurídicos:** Raspagem de dados vs. Web Crawling; natureza do `robots.txt` (convenção técnica, não lei penal); limites estritos da **LGPD (Lei nº 13.709/2018, art. 7º §§ 3º e 4º)**: dados públicos na web não afastam princípios de finalidade, boa-fé e direitos do titular; preferência por APIs oficiais e dados abertos em lote.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos, quadro comparativo Scraping vs. API vs. Lote e mnemônicos estruturados.

### T2.3 — Novo Submódulo 6.7: IA Aplicada à Informação: Classificação, OCR/HTR, Curadoria de Corpora, Avaliação e Vieses
- **Arquivo criado:** `src/content/modules/m6-digital-ia/sub-6-7.ts`
- **Conteúdo teórico denso (17.800+ caracteres):**
  - **PLN e Aprendizado de Máquina:** Supervisionado (classificação, NER de parlamentares/leis) vs. Não Supervisionado (clustering, topic modeling); sumarização extrativa (fidelidade literal sem alucinação) vs. abstrativa (fluidez com risco de alucinação);
  - **Digitalização: OCR vs. HTR:** Reconhecimento óptico de impressos (OCR) vs. reconhecimento de manuscritos históricos e atas do Império (HTR); métricas padrão CER (*Character Error Rate*) e WER (*Word Error Rate*); supervisão *Human-in-the-Loop* (HITL);
  - **Curadoria de Corpora e Governança:** Ciclo de curadoria (seleção, limpeza, anotação, divisão treino/validação/teste); documentação com **Datasheets for Datasets (Gebru et al., 2018/2021)** e **Model Cards for Model Reporting (Mitchell et al., 2019)**; falácia de que volume massivo neutraliza viés de amostragem;
  - **Avaliação de Sistemas RAG (Lewis et al., NeurIPS 2020):** Tríade RAG — Fidelidade/Groundedness (ancoragem nas fontes), Relevância do Contexto e Relevância da Resposta; combate a alucinações (RAG reduz significativamente, mas não elimina a zero);
  - **Vieses e Governança:** Viés de dados, de modelo e de automação; segurança da informação e LGPD no envio de prompts a APIs externas.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos, quadro comparativo das dimensões avaliativas de IA e mnemônicos estruturados.

### T2.4 & T2.5 — Ferramentas Analíticas (Tableau, Looker Studio), EDA (Tukey) e Acessibilidade (WCAG, e-MAG, LBI)
- **Arquivos modificados:**
  - `src/content/modules/m14-tecnologia-dados/sub-14-4.ts`:
    - Incorporação da **Análise Exploratória de Dados (EDA - John Tukey, 1977)**: sumário de 5 números, regra do IQR ($1,5 \times \text{IQR}$) e Z-Score para outliers, missing values e distinção rigorosa entre correlação e causalidade;
    - Incorporação do **Tableau (Salesforce)**: tecnologia VizQL, expressões LOD (`FIXED`, `INCLUDE`, `EXCLUDE`) e exploração visual;
    - Incorporação do **Google Looker Studio (antigo Google Data Studio)**: rebatizado oficialmente em outubro de 2022, ferramenta 100% web na nuvem integrada ao Google BigQuery e Google Workspace;
    - Tabela comparativa sistematizada: Power BI vs. Tableau vs. Google Looker Studio;
    - Checkpoints e mnemônicos ajustados mantendo estrita conformidade com o `ModuloFilhoSchema` (3 checkpoints).
  - `src/content/modules/m6-digital-ia/sub-6-1.ts`:
    - Incorporação aprofundada de **Acessibilidade Digital**: os 4 princípios estruturantes da **WCAG 2.1/2.2 (W3C - POUR: Perceptível, Operável, Compreensível, Robusto)** e seus 3 níveis (A, AA, AAA);
    - Diretrizes do **e-MAG (Modelo de Acessibilidade em Governo Eletrônico)** nos 6 eixos e barra de acessibilidade padrão com atalhos de teclado (Alt+1 Conteúdo, Alt+2 Menu, Alt+3 Busca);
    - Dispositivos da **Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI - Lei nº 13.146/2015, art. 63)** obrigando acessibilidade nos sítios de órgãos de governo e serviços públicos;
    - Checkpoint e mnemônicos atualizados (3 checkpoints).

### Integração, Métricas e Dossiê Teórico
- **Arquivos de integração e testes ajustados:**
  - `src/content/modules/m6-digital-ia/index.ts`: agora exporta 7 submódulos (6.1 a 6.7);
  - `src/content/simuladosRegistry.ts`: `submodulosIds` de `m6-digital-ia` atualizado para 7 submódulos;
  - `src/tests/contentIntegrity.test.ts`: total de submódulos atualizado para 70 (M6 com 7);
  - `src/tests/mapaLacunas.test.ts`: 70 submódulos, 210 checkpoints formativos (exatamente 3 por submódulo) e 1.730 questões ativas no total;
  - `src/tests/moduloM14Completo.test.tsx` e `src/tests/auditoriaM10aM14.test.ts`: validados com 100% de conformidade com o Zod `ModuloFilhoSchema`.
- **Status da suíte de testes:** 39 arquivos de teste executados, 382 testes aprovados (100% verde).
- **Compilação editorial:** Dossiê Teórico Completo recompilado em Markdown, HTML e PDF editorial Cebraspe (`Heuller_na_Camara_Dossie_Teorico_Completo.pdf` — 11.47 MB).
- **Build de produção:** `npm run build` bem-sucedido em 1.99s.

---

## [Fase 3] — Bloco D: Biblioteconomia (Lacunas Específicas) (13/10/2026)

### T3.1 — MARC 21: Autoridades e Dados de Posse / Exemplar (Holdings Data)
- **Arquivo modificado:** `src/content/modules/m2-catalogacao/sub-2-4.ts`
- **Conteúdo teórico denso incorporado:**
  - **MARC 21 Authority Data:** Estrutura e semântica dos blocos de campos:
    - `1XX`: Cabeçalhos autorizados estabelecidos (`100` nome pessoal, `110` entidade coletiva, `111` evento/conferência, `130` título uniforme, `150` termo temático/tópico, `151` nome geográfico);
    - `4XX`: Remissivas 'Ver' (*See-from tracings* - formas não autorizadas ou sinônimos variantes);
    - `5XX`: Remissivas 'Ver também' (*See-also tracings* - termos autorizados correlatos ou termos mais amplos/específicos);
    - `6XX`: Notas de fundamentação (`670` fontes consultadas com citação, `675` fontes onde o termo não foi localizado, `680` notas de escopo);
    - Campo fixo `008`: Posições críticas para controle de autoridade (`008/06` subdivisão temática, `008/09` tipo de cabeçalho, `008/11` registro de nome próprio vs. assunto).
  - **MARC 21 Holdings Data (Dados de Posse e Localização de Exemplares):**
    - Campo `852`: Localização física e institucional (subcampos `$a` agência detentora, `$b` sub-biblioteca/unidade, `$c` coleção física, `$h` classificação e `$i` notação de autor no número de chamada);
    - Campos `853-855`: Esquemas de legendas e padrões de publicação (*Captions and Pattern*) de fascículos seriados;
    - Campos `863-868`: Enumeração e cronologia detalhada de fascículos e volumes efetivamente possuídos pelo acervo;
  - **Quadro Comparativo Integrado:** Comparativo tridimensional MARC Bibliográfico vs. MARC Autoridades vs. MARC Holdings.
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### T3.2 — Vocabulários Controlados: Critérios de Compatibilização (Edital 3.13) e Mapeamento Semântico
- **Arquivo modificado:** `src/content/modules/m3-classificacao/sub-3-4.ts`
- **Conteúdo teórico denso incorporado:**
  - **Os 5 Critérios Editalícios de Compatibilização (Edital item 3.13 e ISO 25964-2:2013):**
    1. *Precisão:* Exatidão semântica na correspondência de conceitos entre esquemas distintos no domínio temático;
    2. *Universalidade:* Amplitude e cobertura holística do vocabulário, assegurando que todas as facetas essenciais estejam representadas;
    3. *Univocidade:* Princípio de 'um significado para cada termo' e controle estrito de homógrafos, polissemia e sinonímia;
    4. *Pertinência:* Alinhamento funcional e relevância dos conceitos em relação ao público-alvo institucional (processo legislativo, direito público e políticas nacionais);
    5. *Funcionalidade:* Aplicabilidade operacional, flexibilidade sintática e facilidade de manutenção em sistemas automatizados de indexação e recuperação;
  - **Mapeamento de Vocabulários (ISO 25964-2 & SKOS):** Mapeamento 1:1, 1:N, N:1; relações SKOS (`exactMatch`, `closeMatch`, `broadMatch`, `narrowMatch`, `relatedMatch`).
  - Tabela comparativa dos 5 critérios e caso prático com checkpoint.

### T3.3 — Redes Cooperativas e Sistemas de Informação Jurídica: RBMPF e BIBLIODATA/CALCO
- **Arquivo modificado:** `src/content/modules/m4-recuperacao/sub-4-3.ts`
- **Conteúdo teórico denso incorporado:**
  - **RBMPF (Rede de Bibliotecas do Ministério Público Federal - PGR):** Criação, catálogo coletivo automatizado, intercâmbio de publicações doutrinárias e institucionais, integração com o software Sophia Biblioteca e uso de tesauros jurídicos especializados do Ministério Público da União (MPU);
  - **Rede BIBLIODATA / Formato CALCO:** Histórico (criada em 1976 pela Fundação Getulio Vargas - FGV com apoio do IBICT), pioneirismo da catalogação cooperativa automatizada no Brasil e desenvolvimento do formato CALCO (Catálogo Coletivo - adaptação brasileira das normas MARC e da Library of Congress);
  - **Quadro Comparativo Quadruplo das Redes Cooperativas:** RVBI (Senado/Câmara/Tribunais Superiores) vs. REJE (TSE/TREs) vs. RBMPF (PGR/MPF) vs. Rede BIBLIODATA (FGV/IBICT).
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### T3.4 — Novo Submódulo 8.5: Ficha Catalográfica, Índices, Formatos Digitais, Infografia e Acessibilidade Editorial
- **Arquivo criado:** `src/content/modules/m8-normalizacao/sub-8-5.ts`
- **Conteúdo teórico denso (16.800+ caracteres):**
  - **Ficha Catalográfica (CIP - Catalogação na Publicação):** Regras da ABNT NBR 14724:2011; localização mandatória no **verso da folha de rosto, no terço inferior da página**, com recuo padrão e pontuação descritiva AACR2/RDA e notações CDD/CDU/Cutter;
  - **Índices (ABNT NBR 6034:2004) vs. Sumário (ABNT NBR 6027:2012):** O sumário enumera as principais divisões no início da obra na mesma ordem do texto; o índice é elemento pós-textual que lista alfabeticamente ou sistematicamente termos específicos com indicação exata de páginas dispersas; tipos de índices (onômastico, temático/remissivo, topográfico);
  - **Formatos Digitais:** EPUB (EPUB 3 baseado em HTML5/CSS3, texto redimensionável *reflowable*) vs. PDF/A (ISO 19005 para preservação de longo prazo, fontes 100% embutidas, metadados XMP, vedação de criptografia, JavaScript e compressões proprietárias com perdas);
  - **Infografia Funcional e Design da Informação:**
    - Alberto Cairo (*The Functional Art*): Infografia como representação gráfica estruturada cujo valor reside na funcionalidade cognitiva e utilidade pública, e não no mero exibicionismo estético;
    - Edward Tufte (*The Visual Display of Quantitative Information*): Princípio do *Data-Ink Ratio* (maximizar a tinta que expressa dados e minimizar elementos vazios ou ruído gráfico decorativo - *chartjunk*);
  - **Acessibilidade em Publicações Eletrônicas:** Diretrizes WCAG para documentos eletrônicos e o padrão internacional **PDF/UA (ISO 14289 - Universal Accessibility)** — árvore semântica de tags, ordem lógica de leitura por leitores de tela, texto alternativo em figuras e tabelas estruturadas.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe inéditos, quadro comparativo EPUB vs PDF/A vs HTML e mnemônicos estruturados.

### T3.5 — Gestão de Coleções: Modelos de Licenciamento Digital e Padrão Internacional COUNTER Release 5
- **Arquivos modificados:** `src/content/modules/m5-gestao/sub-5-3.ts` e `src/content/modules/m5-gestao/sub-5-1.ts`
- **Conteúdo teórico denso incorporado:**
  - **Modelos de Aquisição e Licenciamento Eletrônico:** Assinatura anual com acesso remoto (*Subscription*), Aquisição Perpétua (*Perpetual Access*), PDA/DDA (*Patron-Driven Acquisition / Demand-Driven Acquisition*), EBA (*Evidence-Based Acquisition*) e Aquisição Consorciada (ex.: Portal de Periódicos da CAPES);
  - **Cláusulas Contratuais Críticas:** Direitos de Acesso Perpétuo (*Archival Rights / Dark Archives* tipo Portico e LOCKSS), Empréstimo Entre Bibliotecas digital (EEB/ILL), pacotes de cursos (*Course Packs* e repositórios acadêmicos) e cláusulas de rescisão sem perda de acervo retrospectivo;
  - **Padrão Internacional COUNTER Release 5:**
    - Métrica de Investigação de Item (`Total_Item_Investigations`) vs. Métrica de Requisição Efetiva (`Unique_Item_Requests`);
    - Protocolo **SUSHI (NISO Z39.93)** para coleta automatizada de relatórios em formato JSON/REST;
    - Métrica de Tomada de Decisão: Custo por Download (CPD - *Cost per Download*), orientando renovação, renegociação ou cancelamento de pacotes *Big Deal*.
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### T3.6 — Estudos Métricos Avançados: Acoplamento Bibliográfico, Cocitação, Redes de Coautoria e Altmetria
- **Arquivo modificado:** `src/content/modules/m9-comunicacao/sub-9-4.ts`
- **Conteúdo teórico denso incorporado:**
  - **Acoplamento Bibliográfico (M. M. Kessler, 1963):** Ocorre quando dois artigos citam referências em comum; medida **retrospectiva** (olha para o passado) e **estática/permanente no tempo**; mapeia frentes de pesquisa contemporâneas (*research fronts*);
  - **Cocitação (Henry Small e Irina Marshakova, 1973):** Ocorre quando dois artigos são citados conjuntamente por terceiros posteriores; medida **prospectiva** (olha para a literatura subsequente) e **dinâmica/variável no tempo**; mapeia a estrutura intelectual histórica e escolas de pensamento de um campo;
  - **Tabela Comparativa Estruturada:** Acoplamento Bibliográfico vs. Cocitação (definição, unidade de ligação, direção temporal, estabilidade temporal e aplicação analítica);
  - **Redes de Coautoria e Análise de Redes Sociais (ARS):** Nós = pesquisadores, arestas = publicações conjuntas; métricas de centralidade de Linton Freeman (1978/1979) — Centralidade de Grau (*Degree*), Proximidade (*Closeness*), Vetor Próprio (*Eigenvector*) e Intermediação (*Betweenness* - o pesquisador como ponte/*broker* entre grupos isolados);
  - **Altmetria (Jason Priem et al., 2010):** *Altmetrics: A manifesto*; métricas de atenção social e impacto imediato na Web social, gerenciadores de referências (Mendeley), Wikipédia, imprensa e documentos de formulação de políticas públicas (*policy documents* - ex.: Overton, notas técnicas do Congresso); painéis visuais (*Altmetric Attention Score* / Donut e PlumX com 5 dimensões); princípio da complementaridade (a altmetria atua como métrica complementar e jamais substituta da citação científica e da avaliação de pares).
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### Integração, Métricas e Dossiê Teórico
- **Arquivos de integração e testes ajustados:**
  - `src/content/modules/m8-normalizacao/index.ts`: agora exporta 5 submódulos (8.1 a 8.5);
  - `src/content/simuladosRegistry.ts`: `submodulosIds` de `m8-normalizacao` atualizado para 5 submódulos (`['8.1', '8.2', '8.3', '8.4', '8.5']`);
  - `src/tests/contentIntegrity.test.ts`: total de submódulos atualizado para 71 (M8 com 5);
  - `src/tests/mapaLacunas.test.ts`: 71 submódulos, 213 checkpoints formativos (exatamente 3 por submódulo) e 1.733 questões ativas no total (1.520 de simulados + 213 de checkpoints formativos);
- **Status da suíte de testes:** 39 arquivos de teste executados, 382 testes aprovados (100% verde).
- **Compilação editorial:** Dossiê Teórico Completo recompilado em Markdown, HTML e PDF editorial Cebraspe (`Heuller_na_Camara_Dossie_Teorico_Completo.pdf` — 11.89 MB).
- **Build de produção:** `npm run build` aprovado com sucesso.

---

## [Fase 4] — Conhecimentos Básicos: Constitucional, Regimentos (RICD e RCCN), Língua Portuguesa e Atualização Normativa (13/10/2026)

### T4.1 — Novo Submódulo 10.5: Poder Legislativo e Regime Jurídico dos Parlamentares na CF/88
- **Arquivo criado:** `src/content/modules/m10-legislativo/sub-10-5.ts`
- **Conteúdo teórico denso (26.000+ caracteres):**
  - **Bicameralismo Federativo (CF, arts. 44 a 47):** Poder Legislativo exercido pelo Congresso Nacional (Câmara dos Deputados + Senado Federal). Câmara dos Deputados: representantes do povo brasileiro, sistema proporcional, legislatura de 4 anos, mínimo de 8 e máximo de 70 deputados por Estado/DF. Senado Federal: representantes dos Estados e do DF, sistema majoritário simples, 3 senadores e 2 suplentes por unidade federativa, mandato de 8 anos (duas legislaturas), com renovação parcial alternada de 1/3 e 2/3 a cada 4 anos.
  - **Sessões Legislativas (CF, art. 57):** Sessão legislativa ordinária de 2 de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro (recesso de 18 a 31 de julho e de 23 de dezembro a 1º de fevereiro). Sessão não é interrompida sem a aprovação do projeto de diretrizes orçamentárias (LDO). Sessões extraordinárias convocadas com pauta exclusiva e sem pagamento de parcela indenizatória (EC nº 50/2006).
  - **Comissões e Comissões Parlamentares de Inquérito - CPIs (CF, art. 58):** Requisitos cumulativos de criação: 1/3 dos membros da Câmara ou do Senado (ou de ambas, no caso de CPMI), fato determinado e prazo certo. Poderes de investigação próprios das autoridades judiciais (quebra de sigilo bancário, fiscal e telefônico por deliberação fundamentada do plenário da comissão). Limites constitucionais e reserva de jurisdição: CPI não tem competência para decretar prisão (salvo flagrante delito), interceptação telefônica (escuta em tempo real) nem busca e apreensão domiciliar noturna, medidas submetidas à cláusula de reserva de jurisdição do Poder Judiciário.
  - **Estatuto dos Congressistas (CF, arts. 53 a 56):**
    - *Inviolabilidade material (civil e penal):* Alcance pleno por opiniões, palavras e votos no exercício do mandato e em razão dele;
    - *Imunidade formal processual:* Desde a expedição do diploma, não podem ser presos, SALVO em flagrante de crime inafiançável. Autos remetidos em 24h à respectiva Casa para deliberação da maioria absoluta de seus membros sobre a prisão;
    - *Sustação do andamento da ação penal (art. 53, § 3º):* Mediante iniciativa de partido político e voto da maioria da respectiva Casa;
    - *Incompatibilidades funcionais e contratuais (art. 54);*
    - *Perda de mandato (art. 55):* Cassação por voto da MAIORIA ABSOLUTA em votação aberta (EC nº 76/2013) nas hipóteses de incompatibilidades, decoro ou condenação penal transitada em julgado vs. Extinção declarada de ofício pela MESA DIRETORA (faltas a 1/3 das sessões ordinárias, perda de direitos políticos ou determinação da Justiça Eleitoral);
  - **Intervenção Federal (CF, arts. 34 a 36):** Hipóteses taxativas de intervenção da União nos Estados/DF, decreto presidencial privativo com amplitude e interventor, submissão ao Congresso Nacional em 24h para controle político por maioria simples. Dispensa excepcional de apreciação congressual quando a intervenção tiver por objeto a execução de ordem/decisão judicial ou de lei federal (art. 36, § 3º).
- **Recursos pedagógicos:** 3 checkpoints Cebraspe, quadro comparativo estruturado (Câmara dos Deputados vs. Senado Federal) e mnemônicos completos.

### T4.2 — Nacionalidade, Direitos Políticos e Partidos Políticos (Extensão do Submódulo 10.4)
- **Arquivo modificado:** `src/content/modules/m10-legislativo/sub-10-4.ts`
- **Conteúdo teórico denso incorporado:**
  - **Nacionalidade (CF, arts. 12 e 13):** Brasileiros natos (*jus soli* e *jus sanguinis*) vs. naturalizados; cargos privativos de brasileiro nato (mnemônico MP3.COM: Ministro do STF, Presidente/Vice da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal, Carreira Diplomática, Oficial das Forças Armadas e Ministro de Estado da Defesa);
  - **Emenda Constitucional nº 131/2023:** Nova disciplina da perda da nacionalidade (fim da perda automática da nacionalidade brasileira pela mera aquisição voluntária de outra nacionalidade no exterior);
  - **Direitos Políticos (CF, arts. 14 a 16):**
    - Alistamento eleitoral e voto: obrigatórios (maiores de 18 anos) vs. facultativos (analfabetos, maiores de 70 anos e jovens entre 16 e 18 anos);
    - Condições de elegibilidade: nacionalidade, pleno exercício dos direitos políticos, alistamento, domicílio eleitoral, filiação partidária e idade mínima na posse (35 anos para Presidente, Vice e Senador; 30 anos para Governador; 21 anos para Deputado Federal, Estadual, Distrital, Prefeito e Juiz de Paz; 18 anos para Vereador);
    - Inelegibilidade reflexa (art. 14, § 7º e Súmula Vinculante nº 18 do STF);
    - Vedação absoluta de cassação de direitos políticos e rol taxativo do art. 15 (cancelamento de naturalização por sentença transitada, incapacidade civil absoluta, condenação penal transitada em julgado, recusa de cumprimento de obrigação a todos imposta e improbidade administrativa);
    - Partidos políticos (art. 17): autonomia partidária, cláusula de desempenho/barreira e vedação de coligações nas eleições proporcionais (EC nº 97/2017).
  - Atualização dos autores-chave, alertas Cebraspe, checkpoints e mnemônicos.

### T4.3 — Regimento Interno da Câmara dos Deputados (RICD): Reestruturação em 4 Intervalos Oficiais
- **Arquivo reestruturado:** `src/content/modules/m10-legislativo/sub-10-1.ts`
- **Conteúdo teórico denso (25.300+ caracteres):**
  - **Bloco 1 (Arts. 1º a 24):** Sede, Sessões Preparatórias (1º de fevereiro da 1ª e 3ª sessões legislativas da legislatura), Mesa Diretora (mandato de 2 anos, vedada a recondução na mesma legislatura), vedação expressa do art. 24, § 1º (membros da Mesa não podem integrar Comissões Permanentes, Especiais ou de Inquérito nem exercer liderança), Lideranças e Blocos Parlamentares (quórum mínimo e extinção imediata se abaixo do quórum);
  - **Bloco 2 (Arts. 65 a 94):** Sessões Plenárias e suas 4 fases sucessivas:
    1. *Pequeno Expediente:* 60 minutos, quórum de 1/10 para abertura, discursos de até 5 minutos sem aparte;
    2. *Grande Expediente:* 50 minutos improrrogáveis, oradores com até 25 minutos (com apartes facultados);
    3. *Ordem do Dia:* Fase deliberativa privativa, quórum mínimo de deliberação de maioria absoluta (257 deputados presentes), apreciação de projetos prioritários e medidas provisórias;
    4. *Comunicações Parlamentares:* Discursos de líderes nos minutos finais da sessão;
    - Tipologia das sessões plenárias: Ordinárias (início às 14h), Extraordinárias, Solenes e Secretas (quórum qualificado e portas fechadas);
  - **Bloco 3 (Arts. 226 a 251):** Estatuto dos Deputados Federais: posse, prerrogativas, uso da palavra (pela ordem, discussão, encaminhamento de votação), disciplina estrita de apartes do art. 230 (vedado aparte a discurso em Pequeno Expediente, Comunicação de Liderança, Questão de Ordem ou quando o orador declarar que não o concede), deveres, medidas disciplinares (censura verbal e escrita) e perda do mandato por ausência injustificada à terça parte das sessões ordinárias;
  - **Bloco 4 (Arts. 262 a 273):** Administração interna e economia da Casa: autoridade suprema do Presidente da Câmara sobre a Polícia Legislativa (art. 266), publicação de atos oficiais no Diário da Câmara dos Deputados (DCD), estrutura do Centro de Documentação e Informação (Cedi) abrigando a Biblioteca Pedro Aleixo e a Coordenação de Arquivo.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe com indicação expressa dos artigos regimentais, tabela sinóptica dos 4 blocos e mnemônicos estruturados.

### T4.4 — Novo Submódulo 10.6: Regimento Comum do Congresso Nacional (RCCN - Resolução nº 1/1970-CN)
- **Arquivo criado:** `src/content/modules/m10-legislativo/sub-10-6.ts`
- **Conteúdo teórico denso (25.000+ caracteres):**
  - **Natureza Jurídica e Sede (Arts. 1º a 3º):** Sede no Palácio do Congresso Nacional, sessões conjuntas realizadas no Plenário da Câmara dos Deputados (Plenário Ulysses Guimarães) por capacidade instalada;
  - **Mesa do Congresso Nacional e Alternância Institucional (Arts. 2º a 11):**
    - Presidência do CN privativa do Presidente do Senado Federal;
    - 1º Vice do CN = 1º Vice da Câmara dos Deputados;
    - 2º Vice do CN = 2º Vice do Senado Federal;
    - 1º Secretário do CN = 1º Secretário da Câmara dos Deputados;
    - 2º Secretário do CN = 2º Secretário do Senado Federal;
    - 3º Secretário do CN = 3º Secretário da Câmara dos Deputados;
    - 4º Secretário do CN = 4º Secretário do Senado Federal;
    - *Pegadinha Crítica Cebraspe:* O Presidente da Câmara dos Deputados NÃO é o 1º Vice do Congresso Nacional. Em caso de ausência do Presidente do Senado, a sessão conjunta é presidida pelo 1º Vice-Presidente da Câmara (1º Vice do CN), e NÃO pelo Presidente da Câmara!
  - **Sessões Conjuntas do Congresso Nacional (Arts. 12 a 34):**
    - Hipóteses constitucionais (inauguração da sessão legislativa, regimento comum, posse presidencial, vetos e matérias orçamentárias);
    - Princípio da deliberação bicameral simultânea com cômputo de votos separado por Casa (o Congresso Nacional NUNCA atua como corpo unicameral congregado);
  - **Apreciação de Vetos Presidenciais (CF, art. 66 c/c RCCN, arts. 104-A e segs.):**
    - Prazo improrrogável de 30 dias para apreciação em sessão conjunta;
    - Sobrestamento de pauta exclusiva das Sessões Conjuntas do Congresso Nacional (não tranca a pauta deliberativa ordinária da Câmara nem do Senado);
    - Quórum qualificado de rejeição: MAIORIA ABSOLUTA da Câmara (257 votos) E do Senado (41 votos), em votação nominal e aberta (EC nº 76/2013);
  - **Projetos de Lei Orçamentária e Resoluções no Congresso Nacional (Arts. 98 a 103):** PPA, LDO, LOA e créditos adicionais examinados na Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO).
- **Recursos pedagógicos:** 3 checkpoints Cebraspe, quadro comparativo (Sessões Conjuntas do CN vs. Sessões Isoladas da CD) e mnemônicos estruturados.

### T4.5 — Novo Submódulo 13.4: Língua Portuguesa — Ortografia Oficial, Tipologia e Gêneros Textuais, Tempos Verbais e Colocação Pronominal
- **Arquivo criado:** `src/content/modules/m13-portugues/sub-13-4.ts`
- **Conteúdo teórico denso (26.000+ caracteres):**
  - **Ortografia Oficial e Acordo Ortográfico de 1990:** Regras gerais das proparoxítonas, oxítonas, monossílabos tônicos e paroxítonas (mnemônico ROUXINOL/PS/DITONGO). Fim do acento nos ditongos abertos "éi" e "ói" em palavras paroxítonas (ideia, assembleia, heroico, paranoico) vs. permanência mandatória do acento em oxítonas e monossílabos (herói, troféu, pastéis, dói, céu). Fim do acento nos hiatos "oo" e "eem" (voo, leem, veem). Acentos diferenciais remanescentes (pôde vs pode; pôr vs por; têm/vêm vs tem/vem);
  - **Emprego do Hífen:** Regra dos prefixos (letras iguais separam-se com hífen, ex: micro-ondas; letras diferentes unem-se sem hífen, ex: autoescola; consoantes "r" e "s" após vogal dobram-se sem hífen: antirreflexo, minissaia; diante de "h" hífen sempre obrigatório: anti-higiênico; prefixos sub/sob diante de b/r/h; prefixos ex/vice/além/recém/sem sempre com hífen);
  - **Tipologia Textual vs. Gêneros Textuais (Luiz Antônio Marcuschi & Ingedore Koch):** Tipos textuais são constructos teóricos finitos e estruturais (narração, descrição, dissertação expositiva, dissertação argumentativa e injunção); gêneros textuais são práticas sociocomunicativas empíricas infinitas e mutáveis (ata, parecer, ofício, edital, projeto de lei, relatório);
  - **Morfologia, Semântica e Correlação dos Tempos Verbais:** Indicativo, Subjuntivo e Imperativo; aspectos dos tempos pretéritos (Perfeito = ação pontual concluída; Imperfeito = ação habitual, durativa ou polidez; Mais-que-perfeito = passado anterior a outro passado); correlação temporal rigorosa em estruturas condicionais (Futuro do Subjuntivo $\leftrightarrow$ Futuro do Presente; Imperfeito do Subjuntivo $\leftrightarrow$ Futuro do Pretérito; Mais-que-perfeito Composto do Subjuntivo $\leftrightarrow$ Futuro do Pretérito Composto);
  - **Sintaxe de Colocação Pronominal:** Próclise, mesóclise e ênclise; fatores mandatários de atração proclítica (palavras de sentido negativo, advérbios sem pausa por vírgula, pronomes relativos, indefinidos e demonstrativos, conjunções subordinativas, preposição "em" + gerúndio); vedações estritas (proibição de iniciar período com pronome oblíquo átono na norma culta, proibição de ênclise em verbos no futuro e proibição de ênclise em particípio); colocação em locuções verbais.
- **Recursos pedagógicos:** 3 checkpoints Cebraspe fundamentados em fontes canônicas (Bechara, Cunha & Cintra, Marcuschi), quadro comparativo sinótico e mnemônicos estruturados.

### T4.6 — Incorporação das Regras do Edital sobre Atualização Normativa e Jurisprudencial
- **Arquivos modificados:**
  - `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`: Adição da Seção 20 com o registro formal das regras dos itens **13.33 a 13.34.1** do Edital nº 1/2026:
    - *Item 13.33:* Legislação em vigor considerada estritamente até a data de publicação do edital;
    - *Item 13.34 e 13.34.1:* Jurisprudência dos Tribunais Superiores (STF, STJ, TST) e do TCU admitida até **30 dias antes da data da prova**;
    - *Item 20.3:* Agendamento da Rodada de Atualização Normativa e Jurisprudencial para **17/12/2026**;
  - `src/pages/RadarPage.tsx`: Inclusão de banner institucional de conformidade editalícia destacando o marco temporal normativo (prova -30d) e o agendamento da revisão de 17/12/2026.

### Integração Curricular, Métricas e Dossiê Teórico
- **Grade Curricular Atualizada:** 74 submódulos no total (M1: 6, M2: 6, M3: 4, M4: 4, M5: 4, M6: 7, M7: 4, M8: 5, M9: 4, M10: 6, M11: 12, M12: 4, M13: 4, M14: 4).
- **Volume Total de Checkpoints:** 222 micro-checkpoints formativos C/E (exatamente 3 por submódulo).
- **Volume Total de Questões do Sistema:** 1.742 questões C/E ativas (1.520 em simulados de 100Q/120Q + 222 em checkpoints formativos).
- **Status dos Testes Automatizados:** 39 arquivos de teste executados com 382 testes aprovados (100% de sucesso).
- **Build de Produção:** `npm run build` gerou bundle PWA com 220 assets pré-cacheados sem erros.
- **Compilação do Dossiê Teórico:** Arquivo `Heuller_na_Camara_Dossie_Teorico_Completo.pdf` gerado com sucesso (12.54 MB), acompanhado dos arquivos Markdown e HTML íntegros.

---

## [Fase 5] — Enriquecimento Teórico e Prático: Alvos E1 a E18 (13/10/2026)

Execução integral de todos os 18 alvos de aprofundamento do Plano Diretor de Auditoria Editalícia para Analista Legislativo — Bibliotecário da Câmara dos Deputados (Cebraspe). Cada alvo obedeceu estritamente ao Padrão Mínimo de Profundidade: citação de fonte primária com ano e norma, tipologia formal, quadros comparativos estruturados, ao menos 3 alertas Cebraspe, caso aplicado ao universo do Legislativo ou Biblioteca Pedro Aleixo e exatamente 3 micro-checkpoints formativos com gabarito justificado em dispositivo legal ou autor canônico.

### Bloco 1 — TI, Segurança & Dados (E1, E2, E3)
- **E1 (Submódulo 14.2): Criptografia, Hash, Assinatura Digital e ICP-Brasil:**
  - Criptografia simétrica (AES, DES) vs. assimétrica (RSA, ECC, chaves pública e privada);
  - Funções de hash criptográfico (SHA-256 e SHA-512) como garantidoras da integridade e base técnica da fixidez digital;
  - Assinatura digital (garantia cumulativa de autenticidade, integridade e não repúdio);
  - Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil), instituída pela MP nº 2.200-2/2001 e complementada pela Lei nº 14.063/2020, com distinção técnica e probatória entre certificados A1 (software) e A3 (hardware criptográfico em token/smartcard);
  - Quadro comparativo estruturado de 4 colunas (*Simétrica | Assimétrica | Hash | Assinatura Digital*), 3 alertas Cebraspe e 3 checkpoints formativos.
- **E2 (Submódulo 14.2): Gestão de Riscos Informacionais (ISO 31000 e ISO/IEC 27005):**
  - Tríade fundamental CID (Confidencialidade, Integridade e Disponibilidade);
  - Etapas do ciclo formal de gestão de riscos: Identificação, Análise, Avaliação, Tratamento (mitigar, aceitar, transferir ou evitar) e Monitoramento contínuo;
  - Matriz de risco bidimensional (probabilidade × impacto) aplicada à preservação e integridade dos bancos de dados legislativos e do repositório digital da Câmara dos Deputados;
  - Normas canônicas: ABNT NBR ISO 31000:2018 e ABNT NBR ISO/IEC 27005:2019;
  - Alertas Cebraspe e 3 checkpoints com citações nominais das normas.
- **E3 (Submódulo 14.4): Mineração de Dados e Textos (CRISP-DM, TF-IDF, Zipf e Luhn):**
  - Ciclo de vida da metodologia CRISP-DM (*Cross-Industry Standard Process for Data Mining*) em 6 etapas iterativas: Entendimento do Negócio, Entendimento dos Dados, Preparação dos Dados, Modelagem, Avaliação e Implantação;
  - Ênfase na regra de ouro Cebraspe: a fase de Preparação dos Dados consome entre 70% e 80% do esforço global do projeto;
  - Pipeline de Text Mining: segmentação lexical (tokenização), lematização baseada em análise morfológica/sintática de dicionário vs. stemização heurística de radicais, e remoção de *stopwords*;
  - Ponderação estatística TF-IDF de Gerard Salton e Karen Spärck Jones;
  - Conexão epistemológica entre a Lei de Zipf (distribuição hiperbólica de frequência) e a Lei de Luhn (cortes superior e inferior no pico de potencial informacional intermediário);
  - Quadro comparativo estruturado, 3 alertas e 3 checkpoints.

### Bloco 2 — Representação, Modelagem, Grafos e Interoperabilidade (E4, E11, E12)
- **E4 (Submódulo 2.7): Grafos de Conhecimento, RDF, SPARQL, SKOS e Property Graphs:**
  - Modelo formal de triplas RDF (sujeito — predicado — objeto) e representação em grafos direcionados rotulados;
  - Diferença arquitetural entre grafos RDF/OWL (baseados em padrões abertos W3C e lógica de predicados) e *Property Graphs* (baseados em nós, relacionamentos tipados e atributos chave-valor diretos);
  - Linguagem de consulta SPARQL 1.1 (SELECT, WHERE, FILTER, OPTIONAL) e funcionamento de *SPARQL Endpoints* via HTTP;
  - Vocabulários SKOS (*Simple Knowledge Organization System*) com relações canônicas (`prefLabel`, `altLabel`, `broader`, `narrower`, `related`);
  - Aplicação concreta em grafo de proposições legislativas, deputados e áreas temáticas da Câmara;
  - Quadro comparativo estruturado, 3 alertas Cebraspe e 3 checkpoints formativos.
- **E11 (Submódulo 2.4): MARC 21: Autoridades, Holdings e Catalogação Cooperativa RVBI:**
  - Formato MARC 21 de Autoridades: campos 1XX (cabeçalho autorizado), 4XX (remissivas simples "Ver" / formas não preferenciais rejeitadas) e 5XX (remissivas recíprocas "Ver Também" / formas relacionadas autorizadas);
  - Formato MARC 21 para Dados de Acervo/Holdings: campos de localização (852) e campos de fundos e paginação de periódicos (853 a 855);
  - Catalogação cooperativa na Rede Virtual de Bibliotecas (RVBI) coordenada pelo Senado Federal, operando em fonte única com compartilhamento de autoridades no software Aleph;
  - Quadro comparativo estruturado, 3 alertas Cebraspe e 3 checkpoints formativos.
- **E12 (Submódulo 6.2): Matriz de Decisão Arquitetural e Protocolos de Interoperabilidade:**
  - Matriz de decisão comparativa em 5 critérios analíticos (tipo de comunicação, formato de dados, finalidade prioritária, complexidade de implementação e casos típicos):
    1. *OAI-PMH (v2.0):* Colheita de metadados em lote (harvesting assíncrono via 6 verbos HTTP sobre Dublin Core);
    2. *Z39.50 (ISO 23950):* Busca federada síncrona distribuída em tempo real entre catálogos bibliográficos legados;
    3. *SRU/SRW (Search/Retrieve via URL/Web Service):* Busca federada contemporânea via HTTP e XML;
    4. *APIs REST:* Integração moderna de microsserviços e consumo em aplicações web/mobile via JSON e OpenAPI;
  - Quadro de decisão estruturado por cenários reais de biblioteca parlamentar, 3 alertas e 3 checkpoints.

### Bloco 3 — Produtos, Usuários, Direitos Autorais & Preservação (E5 a E10)
- **E5 (Submódulo 5.2): Produtos e Serviços de Informação:**
  - Caracterização exaustiva dos 7 produtos informacionais do edital: Dossiê Legislativo, Nota Informacional, Relatório Temático, Estado da Arte, Panorama, Linha do Tempo e Mapeamento de Atores de Mendelow;
  - Esqueletos anotados de estrutura formal para cada produto (sem inventar produtos fictícios da Câmara);
  - Matriz comparativa multidimensional (finalidade, densidade, público-alvo, prazos de entrega e fontes essenciais);
  - 3 alertas Cebraspe e 3 checkpoints formativos.
- **E6 (Submódulo 4.4): Estudos de Usuários e Entrevista de Referência:**
  - Tríade de Maurice Line e Nice Figueiredo: distinção ontológica entre Necessidade (fisiológica/cognitiva oculta), Demanda (expressa verbalmente) e Uso (consumo factual mensurável no acervo);
  - 5 fases da entrevista de referência de Denis Grogan e William Katz: Abertura/Acolhimento, Negociação da Pergunta, Formulação da Estratégia de Busca, Resposta e Avaliação/Feedback;
  - Métodos investigativos (questionários, entrevistas, grupos focais, análise de logs de acesso e observação participante);
  - Casos práticos aplicados ao balcão presencial da Biblioteca Pedro Aleixo e a atendimentos remotos digitais;
  - Quadro comparativo estruturado, 3 alertas Cebraspe e 3 checkpoints formativos.
- **E7 (Submódulo 9.3): Limitações aos Direitos Autorais em Bibliotecas (Lei nº 9.610/1998):**
  - Artigos 46, 47 e 48 da Lei de Direitos Autorais: rol taxativo de limitações e exceções;
  - Reprodução reprográfica permitida: um só exemplar de pequenos trechos para uso privado do copista sem intuito de lucro (art. 46, II);
  - Citações textuais com indicação de autoria e fonte (art. 46, III) e notas taquigráficas de plenário e discursos parlamentares (art. 46, I, "b");
  - Vedação peremptória de cópia integral de livros, mesmo esgotados, consolidada na Súmula 522 do Superior Tribunal de Justiça (STJ);
  - Tratado de Marraqueche (promulgado pelo Decreto nº 9.522/2018 com equivalência de Emenda Constitucional): exceção compulsória com isenção total de retribuição financeira aos titulares para adaptação de obras em formatos acessíveis a pessoas com deficiência visual;
  - Quadro estruturado *"Pode | Não Pode | Condição Legal"*, 3 alertas e 3 checkpoints.
- **E8 (Submódulo 5.1): Seleção Técnica vs. Censura e Liberdade Intelectual:**
  - Distinção teórica e ética entre Seleção Bibliográfica (fundamentada em política pública, comunidade e perfil do órgão) e Censura (supressão ideológica, religiosa ou moral de ideias);
  - Documentos fundamentais da IFLA: Declaração sobre Liberdade de Acesso à Informação e Liberdade de Expressão (1999) e Declaração de Glasgow sobre Bibliotecas, Serviços de Informação e Liberdade Intelectual (2002);
  - Garantias constitucionais da CF/88: art. 5º, IX (liberdade de expressão e atividade intelectual sem censura) e art. 220 (liberdade de informação jornalística e vedação de censura política/ideológica);
  - Quadro comparativo estruturado, 3 alertas Cebraspe e 3 checkpoints formativos.
- **E9 (Submódulo 5.3): Gestão de Coleções Orientada por Dados:**
  - Indicadores de uso e circulação em meio físico e eletrônico;
  - Fórmula matemática do Custo por Uso: $\text{CPU} = \frac{\text{Custo Total da Assinatura}}{\text{Número de Acessos Efetivos}}$, orientando renovações e cancelamentos;
  - Modelo de obsolescência de Burton & Kebler e cálculo da meia-vida da literatura científica e legislativa;
  - Método de desbastamento de Stanley Slote baseado no tempo de estante sem circulação (*shelf-time period*);
  - Norma internacional COUNTER Release 5 (*Code of Practice*): diferenciação entre *Investigations* (interesse amplo) e *Requests* (acesso ao texto integral), e protocolo de colheita automatizada SUSHI (NISO Z39.93);
  - Quadro comparativo estruturado, 3 alertas e 3 checkpoints.
- **E10 (Submódulo 6.3): Preservação Digital: Fixidez, Formatos e Estratégias:**
  - Verificação de fixidez algorítmica por somas de verificação criptográfica (checksums SHA-256 e MD5);
  - Estratégias canônicas de preservação: Migração de formatos, Normalização (ingestão SIP -> AIP mestre), Emulação (recriação de ambiente por software), Encapsulamento e Preservação de Tecnologia;
  - Formatos abertos de preservação permanente e suas normas técnicas:
    - *PDF/A (ISO 19005 partes 1 a 4):* Formato padronizado para documentos textuais com fontes e metadados embutidos;
    - *TIFF (ISO 12639):* Padrão sem perdas (lossless) para preservação de matrizes de imagens digitais;
    - *Broadcast Wave Format - BWF (ITU-R BS.1382 / EBU Tech 3285):* Matriz de áudio preservada com metadados BEXT;
    - *FFV1 com Matroska MKV (IETF RFC 9043):* Codec aberto lossless para matrizes de vídeo do acervo da TV Câmara;
    - *WARC (ISO 28500):* Formato internacional para captura e custódia de páginas web e redes sociais (*web archiving*);
  - Recomendações do CONARQ (Resoluções nº 43/2015 e nº 46/2018) e modelo RDC-Arq;
  - Quadro de decisão estruturado por tipo de suporte, 3 alertas Cebraspe e 3 checkpoints formativos (com cross-link pedagógico no submódulo 7.3).

### Bloco 4 — Básicos & Contexto (E13, E14, E15)
- **E13 (Submódulo 10.1): RICD — Deputados e Administração da Câmara:**
  - Totalmente concluído na Fase 4 (T4.3) com reestruturação integral nos 4 intervalos regimentais oficiais (arts. 1º-24, 65-94, 226-251 e 262-273) e 25.300+ caracteres de teoria densa.
- **E14 (Submódulo 11.3): Direito Administrativo — Requisição vs. Cessão de Servidores:**
  - Distinção ontológica e jurídica entre Requisição e outras formas de movimentação de pessoal;
  - Requisição: ato administrativo compulsório e irrecusável pelo órgão de origem fundamentado em lei expressa (Lei nº 8.112/1990 art. 93, Lei nº 9.007/1995 e Lei nº 6.999/1982), sem prejuízo de remuneração ou contagem de tempo de serviço;
  - Cessão: ato discricionário que depende de aquiescência do órgão cedente para exercício de cargo em comissão ou função de confiança;
  - Redistribuição: deslocamento de cargo de provimento efetivo no âmbito do mesmo quadro geral;
  - Remoção: deslocamento do servidor no âmbito do mesmo quadro, com ou sem mudança de sede (a pedido ou de ofício);
  - Quadro comparativo estruturado de 4 colunas, 3 alertas Cebraspe e 3 checkpoints formativos com dispositivos legais checados.
- **E15 (Submódulos 12.1 e 14.1): Língua Inglesa Contemporânea e Ferramentas Office 365:**
  - Submódulo 12.1 enriquecido com 4 textos autênticos contemporâneos de alta relevância temática (*Generative AI and RAG Architecture in Legislative Information Retrieval*, *Digital Preservation and Fixity in Parliamentary Archives*, *Linked Open Data and Semantic Interoperability in Modern Libraries* e *The Role of Data Stewardship and Lineage in Democratic Governance*), acompanhados de itens de inferência textual e reescrita sintática no padrão Cebraspe;
  - Submódulo 14.1 verificado e validado quanto aos recursos corporativos do Microsoft Office 365 exigidos pelo edital (Word, Excel, PowerPoint, OneDrive e colaboração no SharePoint).

### Bloco 5 — Apêndices e Ferramentas Práticas (E16, E17, E18)
- **E16 (Apêndice A): Discursivas Cebraspe Oficiais Expandidas:**
  - Arquivo `src/domain/discursiva/temasOficiais.ts` expandido de 4 para **10 temas oficiais de prova discursiva** (30 a 60 linhas), incorporando os 6 tópicos prioritários do Edital 2026:
    1. *Tema 5:* Governança de Dados em Bibliotecas Legislativas (DAMA-DMBOK2, papéis e catálogo de metadados);
    2. *Tema 6:* Transição Catalográfica do Formato MARC 21 para o Modelo BIBFRAME e Grafos RDF;
    3. *Tema 7:* Aplicação de Arquiteturas RAG em Serviços de Referência Legislativa e Mitigação de Alucinações;
    4. *Tema 8:* Políticas de Dados Abertos e Interoperabilidade Semântica de Dados Bibliográficos;
    5. *Tema 9:* Metadados de Preservação e Custódia Digital do Acervo Audiovisual da TV Câmara;
    6. *Tema 10:* Gestão Estratégica de Coleções Digitais e Métricas de Uso pelo Padrão COUNTER R5.
  - Cada tema contém: enunciado oficial Cebraspe, padrão preliminar de resposta (espelho com conceitos canônicos obrigatórios) e grade analítica de pontuação por quesito com notas parciais somando 100% da prova.
  - Testes em `src/tests/discursiva.test.ts` 100% aprovados.
- **E17 (Apêndice B): Glossário Vivo e Base Curada de Termos (176 Verbetes):**
  - Criação do módulo `src/domain/dicionario/termosEnriquecimentoFase5.ts` com **98 novos verbetes canônicos**, superando amplamente a meta de 60 a 80 verbetes;
  - Integração deduplicada com a base original em `src/domain/dicionario/baseTermos.ts`, totalizando **176 termos oficiais**;
  - Novos termos cobrem exaustivamente as lacunas editalícias: governança de dados, data owner, data steward, data custodian, data lineage, qualidade de dados (Wang & Strong), dados mestres, dados de referência, crosswalk, perfis de aplicação, PBCore, NISO Z39.87/MIX, EXIF, BIBFRAME (Work, Instance, Item), tripla RDF, SPARQL, SKOS, grafos de conhecimento, property graph, MARC 21 autoridades/holdings, RVBI, Rejuri/Reje, URN LexML, OAI-PMH, Z39.50, SRU/SRW, REST, SQL DDL/DML, WHERE vs HAVING, JOINs, Regex, web scraping, robots.txt, OCR, HTR, CER, WER, curadoria de corpora, datasheets for datasets, RAG, groundedness, alucinação de IA, human-in-the-loop, viés algorítmico, fixidez digital, checksum SHA-256, bit rot, normalização de formatos, PDF/A, TIFF, BWF, FFV1/Matroska, WARC, LOCKSS, Rede Cariniana, OAIS (SIP, AIP, DIP), PREMIS 3.0, METS, dossiê legislativo, nota informacional, relatório temático, mapa de atores de Mendelow, entrevista de referência, tríade Line/Figueiredo, limitações autorais da Lei 9.610/98, Tratado de Marraqueche, custo por uso (CPU), norma COUNTER R5, protocolo SUSHI, meia-vida da literatura, requisição de servidores, EDA (John Tukey), CRISP-DM, BagIt (RFC 8493), bitstreams, preservação de tecnologia, refrescamento de suportes, comunidade designada OAIS, Dublin Core Qualificado, MARCXML, SPARQL Endpoint, lematização, tokenização, TF-IDF, Lei de Luhn, ISP de Carol Kuhlthau, Sense-Making de Brenda Dervin, modelo de T. D. Wilson, modelagem de tópicos LDA, análise de sentimentos e classificação zero-shot;
  - Cada verbete obedece ao schema estrito: conceito canônico, pegadinha Cebraspe, aplicação prática na Câmara dos Deputados e fonte primária formal;
  - Testes em `src/tests/dicionario.test.ts` 100% aprovados.
- **E18 (Apêndice C): Folha de Véspera Consolidada (Matriz dos 5 Blocos do Edital 2026):**
  - Criação do módulo `src/domain/folhaVespera/pegadinhasBlocos.ts` com exatamente **60 pegadinhas capitais** (12 pegadinhas por bloco nos 5 blocos do edital: Bloco A, Bloco B, Bloco C, Bloco D e Bloco E);
  - Cada pegadinha estruturada com: tópico oficial, assertiva típica Cebraspe, gabarito oficial [ERRADO], armadilha da banca destrinchada, fundamentação canônica detalhada e fonte primária com remissão de submódulo;
  - Página `src/pages/FolhaVesperaPage.tsx` reestruturada com navegação por abas (Matriz Cebraspe dos 5 Blocos vs. Minha Síntese de Progresso da Regra B9), filtros por bloco temático e diagramação de impressão A4 com quebra de página por bloco;
  - Criação de suíte de testes dedicada `src/tests/folhaVespera.test.ts` validando a integridade dos 5 blocos e das 60 pegadinhas;
  - Apêndice C do Dossiê Teórico atualizado para compilar integralmente as Regras de Ouro e os 5 blocos com diagramação editorial de alta legibilidade para estudo rápido em 48 horas.

### Métricas e Indicadores Finais da Fase 5
- **Grade Curricular:** 74 submódulos no total (M1 a M14).
- **Checkpoints Formativos:** 222 micro-checkpoints formativos C/E (exatamente 3 por submódulo, 100% aderentes ao Zod schema e ao Anti-Hallucination Guard).
- **Discursivas Oficiais:** 10 temas com espelhos de correção e grades de pontuação.
- **Glossário Canônico Cebraspe:** 176 verbetes doutrinários e técnicos com conceitos, armadilhas e fontes.
- **Folha de Véspera:** 60 pegadinhas capitais organizadas nos 5 blocos do Edital nº 1/2026.
- **Bateria de Testes:** **40 arquivos de teste executados com 385 testes aprovados (100% de sucesso)**.
- **Build de Produção:** `npm run build` aprovado gerando os 220 assets pré-cacheados do PWA sem nenhum erro de tipagem (`tsc -b`).
- **Dossiê Teórico Compilado:**
  - `Heuller_na_Camara_Dossie_Teorico_Completo.md` (Markdown unificado);
  - `Heuller_na_Camara_Dossie_Teorico_Completo.html` (HTML editorial com KaTeX);
  - `Heuller_na_Camara_Dossie_Teorico_Completo.pdf` (**14.01 MB**, renderizado via Chromium Puppeteer com paginação A4 e estilos Cebraspe).

---

## [Fase 6] — Organização e Enriquecimento entre Módulos (13/10/2026)

Em cumprimento estrito à Seção 4.7 do *Plano Diretor de Auditoria Editalícia e Antigravity* (`Auditoria_Editalicia_e_Plano_Antigravity_Heuller_na_Camara.md`), foram executadas todas as 5 metas de articulação curricular, integridade intermódulos e consolidação do ecossistema:

### T6.1 — Mapa de Pré-Requisitos e Ordem Pedagógica de Estudo
- **Arquivos modificados:**
  - `src/domain/schemas/modulo.schema.ts` (campo opcional `preRequisitos: z.array(z.string()).optional()` em `ModuloFilhoSchema` e `MacroModuloSchema`);
  - `src/content/modules/*/index.ts` (todos os 15 macro-módulos didáticos de M1 a M14 receberam `preRequisitos` e `blocoEdital`);
  - `src/content/modules/*/*.ts` (submódulos mapeados com dependências didáticas explícitas, ex.: `sub-2-7` requer `sub-1-6` e `sub-2-6`; `sub-6-7` requer `sub-1-6` e `sub-6-4`; `sub-14-4` requer `sub-6-5` e `sub-6-6`).
- **Garantia de Aciclicidade (DAG Estrito):** Testes automatizados validaram formalmente que a rede de pré-requisitos não contém dependências circulares nem referências a IDs inexistentes.
- **Módulo Fundamental:** M1 (Fundamentos e Governança) estabelecido como raiz com pré-requisito vazio (`preRequisitos: []`).

### T6.2 — Casos Integradores Interdisciplinares (CI-1 a CI-5)
- **Criação do Domínio:** `src/domain/casosIntegradores/types.ts`, `src/domain/casosIntegradores/casosIntegradores.ts` e `src/domain/casosIntegradores/index.ts`, integrado ao `src/content/registry.ts`.
- **Acervo Criado:** **5 Casos Integradores Transversais** ambientados na prática da Biblioteca Pedro Aleixo e órgãos da Câmara dos Deputados:
  1. **CI-1 (M1 + M2 + M3):** *Do Item ao Conhecimento Sistêmico: Catalogação, LRM, CDD e CDU na Biblioteca da Câmara*;
  2. **CI-2 (M2 + M4 + M10):** *Da Lei ao Dado Aberto: LexML, URN Persistente, Perfil de Metadados e Processo Legislativo*;
  3. **CI-3 (M6 + M7 + M9):** *Preservação Digital e Comunicação Científica: Repositório Institucional, OAIS, PREMIS e Acesso Aberto*;
  4. **CI-4 (M1 + M6 + M14):** *Governança de Dados, RAG e LGPD na Informação Legislativa Parlamentar*;
  5. **CI-5 (M4 + M10 + M11):** *Serviço de Referência Legislativa Especializada: Lei nº 8.112/1990, LAI e Regimento Interno da CD*.
- **Itens de Avaliação:** **25 itens inéditos no padrão Cebraspe (5 itens por caso)** com gabarito estrito C/E, armadilhas desmascaradas, fundamentação doutrinária exaustiva e remissão direta aos submódulos teóricos.
- **Testes Unitários:** `src/tests/casosIntegradores.test.ts` (100% aprovado).

### T6.3 — Referências Cruzadas Estruturadas ("Veja Também")
- **Schema e Infraestrutura:** Adição do schema `ReferenciaCruzadaSchema` e campo `referenciasCruzadas?: ReferenciaCruzada[]` em `src/domain/schemas/modulo.schema.ts`.
- **Mapeamento Intermodular:** Todos os 74 submódulos receberam remissões cruzadas bidirecionais navegáveis para tópicos complementares (ex.: 2.4 MARC 21 ↔ 2.7 Metadados ↔ 6.2 Repositórios; 3.4 Vocabulários ↔ 6.7 Web Semântica; 1.6 Governança ↔ 9.3 Gestão do Conhecimento ↔ 11.12 LGPD; 10.1 RICD ↔ 10.5 Atos ↔ 10.6 Biblioteca e RVBI; 14.4 Big Data e IA ↔ 6.5 IA Aplicada).
- **Validação de Links:** `src/tests/referenciasCruzadas.test.ts` confirmou que 100% dos links cruzados apontam para submódulos existentes sem ponteiros órfãos.

### T6.4 — Etiquetas do Edital (100% dos 74 Submódulos Mapeados)
- **Mapeamento Editalício:** 100% dos 74 submódulos do curso receberam a propriedade canônica `editalRef`, vinculando o tópico teórico ao item correspondente do Edital nº 1/2026 da Câmara dos Deputados (Conhecimentos Específicos e Conhecimentos Básicos).
- **Cobertura Curricular:** Testes de integridade validaram a cobertura do edital em todo o curso sem lacunas conceituais.

### T6.5 — Radar Cebraspe e Resolução Bidirecional do Glossário
- **Radar Cebraspe (`src/pages/RadarPage.tsx`):**
  - Implementado seletor dos **5 Blocos Oficiais do Edital nº 1/2026** (Bloco A, Bloco B, Bloco C, Bloco D, Bloco E e Conhecimentos Básicos);
  - Refinamento contextual em cascata: Bloco Oficial → Macro-Módulo Didático (M1 a M14) → Submódulo Individual (74 submódulos);
  - Banner enriquecido com os marcos temporais estritos do edital: Publicação do Edital (02/10/2026), Corte Jurisprudencial Prova -30d (17/12/2026) e Data da Prova Oficial (17/01/2027).
- **Glossário Canônico Bidirecional (`src/components/dicionario/GlossarioModal.tsx`):**
  - Adicionado resolvedor determinístico `resolverSubmoduloOrigem` em `src/domain/dicionario/dicionarioService.ts`;
  - Modal exibe botão de navegação contextual *"Estudar Teoria no Submódulo {subNumero} ({moduloCodigo}): {subTitulo}"*, permitindo salto imediato do verbete para o texto teórico do módulo;
  - Respeito integral à Regra D.3: Zero chamadas de IA em runtime para verbetes ausentes (`ausente: true`, `geradoPorIA: false`).
- **Dossiê Teórico Compilado:**
  - `scripts/generateTheoreticalPdf.ts` atualizado para incorporar o **Apêndice D: Casos Integradores Intermódulos Cebraspe (CI-1 a CI-5)**;
  - Recompilados `Heuller_na_Camara_Dossie_Teorico_Completo.md`, `Heuller_na_Camara_Dossie_Teorico_Completo.html` e `Heuller_na_Camara_Dossie_Teorico_Completo.pdf` (**14.38 MB**, com capa executiva, sumário analítico e diagramação A4 de alta fidelidade).

### Métricas e Indicadores Consolidados da Fase 6
- **Submódulos Auditados:** 74 submódulos (100% com `editalRef` e `referenciasCruzadas`).
- **Casos Integradores:** 5 casos transversais com 25 itens C/E e fundamentação doutrinária exaustiva.
- **Suíte de Testes do Projeto:** **43 arquivos de testes executados com 404 testes aprovados (100% de sucesso)**.
- **Build de Produção:** `npm run build` concluído com sucesso e 220 assets pré-cacheados no PWA.
- **Dossiê PDF:** 14.38 MB compilado com 4 Apêndices completos (A: Discursivas, B: Glossário, C: Folha de Véspera, D: Casos Integradores).
