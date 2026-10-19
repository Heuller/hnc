# Relatório de Execução — Missão v2 (Fase 3: W3 e W4)

**Data:** 19/10/2026  
**Candidato:** Richard — Analista Legislativo: Biblioteconomia (Cargo 5, Edital nº 1/2026, Prova: 17/01/2027)  
**Banca:** Cebraspe (Itens C/E com Fator de Correção 1:1)  
**Branch:** `ux/plano-v3`  

---

## 1. Resumo Executivo da Fase 3

A **Fase 3 (W3 e W4)** consolidou a maior reformulação e auditoria de qualidade do banco de questões da história da plataforma Heuller na Câmara (HNC):
- **W3 (Auditoria, Integridade e Matriz de Cobertura):** Mapeamento 1:1 e cobertura de 100% dos 64 tópicos do Edital nº 1/2026 (Cargo 5); erradicação absoluta de 15 anacronismos "Câmara 2026" (restituídos à sua procedência histórica oficial comprovada: *Câmara dos Deputados / 2014 Cespe* e *IPHAN / 2018 Cebraspe*); higienização completa de 94 ocorrências de quebras de palavras com hífen/espaço oriundas de OCR/PDF (`classific a- ções`, `ra mos`, `con- sultas`, `cientí- fica`, etc.); e enriquecimento do texto-base (Texto I) no caderno de Língua Portuguesa (M13).
- **W4 (Injeção Massiva de Questões Reais Cebraspe):** Mineração de **5.239 questões reais Cebraspe** a partir dos 33 PDFs do acervo (`CAD CESPE.pdf` e 32 cadernos do Tec Concursos), catalogadas com gabarito oficial definitivo no arquivo canônico `archive/corpus_questoes_reais_cebraspe.json` (3.32 MB).
- **Reconstrução do Mega Simulado Oficial 120Q (`mega-simulado-camara-120q.ts`):** Transformado de 0% para **100% de questões reais Cebraspe** (60 Certos e 60 Errados), estruturado em 40 itens de Conhecimentos Básicos (M13, M12, M11, M14) e 80 itens de Conhecimentos Específicos (8 itens para cada um dos 10 módulos de Biblioteconomia: M01 a M10).
- **Reconstrução do Simulado de Língua Inglesa 100Q (`m12-ingles-100q.ts`):** De 0% para **100% de questões reais Cebraspe** (50 Certos e 50 Errados), incorporando provas reais da própria Câmara dos Deputados (Consultor Legislativo e Analista de Processo Legislativo).
- **Saneamento e Elevação de Preservação (`m7-preservacao-100q.ts`):** Substituição de itens sintéticos caricatos (confeitaria, doces) por 60 novas questões reais Cebraspe de preservação e conservação, elevando a densidade real do módulo de 12% para **72%**.
- **Descoberta Empírica dos Quantificadores Absolutos no Mundo Real Cebraspe:** Medição direta nos 5.239 itens reais evidenciou que **47.1% das assertivas reais com quantificadores absolutos (*sempre, nunca, apenas, exclusivamente, todos*) possuem gabarito CERTO**, desmistificando o atalho ingênuo de 80% Errado que inflava o desempenho do aluno em questões sintéticas.
- **Registro da Diretriz Estratégica (Fases 4 e 5):** Registrada a Seção 21 no manual `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`, garantindo a implementação de um alternador/toggle por módulo entre a Teoria Canônica e o Novo Formato Didático/Prático.

---

## 2. Entregas Detalhadas por Pacote de Trabalho

### 2.1 W3 — Auditoria, Higienização de OCR, Anacronismos e Matriz de Cobertura

#### A) Erradicação dos 15 Anacronismos "Câmara 2026"
No inventário inicial, 15 questões nos cadernos vivos continham metadados atribuídos a "Câmara dos Deputados/2026", o que configurava ruído temporal e histórico:
- **14 itens em `m10-legislativo-100q.ts`:** Tratavam de temas regimentais e constitucionais da Câmara dos Deputados (CPIs, Mesa Diretora, blocos partidários, aposentadorias de servidores, convocação de Ministros de Estado). A investigação documental confirmou que são itens reais extraídos do concurso histórico da **Câmara dos Deputados / 2014 (Cespe)**. A fonte foi corrigida formalmente para `"Câmara dos Deputados / 2014 (Cespe/Cebraspe)"`.
- **1 item em `m7-preservacao-100q.ts` (`m7-q-96`):** Tratava indevidamente da teoria motivacional de Maslow no meio do caderno de Preservação. Foi integralmente substituído por uma questão real Cebraspe de preservação digital sobre o modelo **OAIS (ISO 14721)** do concurso **IPHAN / 2018 (Cebraspe)**, com gabarito oficial ERRADO, preservando a simetria exata do módulo.
- **Resultado:** **0 itens anacrônicos** no acervo vivo.

#### B) Higienização Sistemática de Quebras de OCR/PDF
Na extração automatizada de PDFs, hífens de fim de linha acabaram gerando palavras cindidas dentro de strings de enunciados. Foram higienizadas 94 ocorrências em 9 cadernos (`src/content/questions/*.ts`), restaurando o vernáculo padrão:
- `classific a- ções` $\rightarrow$ `classificações`
- `ra mos` $\rightarrow$ `ramos`
- `e- gislativo` $\rightarrow$ `legislativo`
- `con- sultas` $\rightarrow$ `consultas`
- `cientí- fica` $\rightarrow$ `científica`
- `estabe- lecidos` / `estabe- lecida` $\rightarrow$ `estabelecidos` / `estabelecida`
- `especifici- dade` $\rightarrow$ `especificidade`
- `enumera- tiva` $\rightarrow$ `enumerativa`
- `i- derados` $\rightarrow$ `considerados`
- `i- berações` $\rightarrow$ `deliberações`
- `r- dência` $\rightarrow$ `jurisprudência`
- `o- níveis` $\rightarrow$ `disponíveis`
- `n- formação` / `n- formações` $\rightarrow$ `informação` / `informações`
- `d ireito` $\rightarrow$ `direito`
- `inform a- ção` / `inform a- ções` $\rightarrow$ `informação` / `informações`
- `co n- junto` $\rightarrow$ `conjunto`
- `repr e- sentar` $\rightarrow$ `representar`
- `e s- trutura` $\rightarrow$ `estrutura`
- `a- ções` $\rightarrow$ `ações`
- `e- cas` $\rightarrow$ `bibliotecas`
- `u- mento` $\rightarrow$ `documento`
- `i- mais` $\rightarrow$ `decimais`
- `o- pédias` $\rightarrow$ `enciclopédias`
- `e- goria` $\rightarrow$ `categoria`
- `e- ro` $\rightarrow$ `número`
- `a- belas` $\rightarrow$ `tabelas`
- `enquadra -se` $\rightarrow$ `enquadra-se`
- `denomina -se` $\rightarrow$ `denomina-se`
- `considerando - se` $\rightarrow$ `considerando-se`
- `partidário -parlamentar` $\rightarrow$ `partidário-parlamentar`
- `surg imento` $\rightarrow$ `surgimento`
- `process amento` $\rightarrow$ `processamento`
- `co m- portamento` $\rightarrow$ `comportamento`
- `prov e- dores` $\rightarrow$ `provedores`
- `dicio- nários` $\rightarrow$ `dicionários`
- `confiá- veis` $\rightarrow$ `confiáveis`
- `refe- rências` $\rightarrow$ `referências`
- `Su- perior` $\rightarrow$ `Superior`
- `u m` $\rightarrow$ `um`
- **Resultado:** **0 palavras quebradas** remanescentes no acervo.

#### C) Enriquecimento de Textos-Base em M13 (Língua Portuguesa)
Os itens 1 a 10 de `m13-portugues-100q.ts` faziam referência ao "Texto I", mas o campo `contexto` trazia apenas uma instrução genérica sem o texto-base. O texto integral sobre *Linguagem Simples na Produção Legislativa* foi incorporado diretamente ao campo `contexto` dos 10 itens, permitindo leitura e julgamento autônomos na tela de estudos.

#### D) Matriz Viva do Edital nº 1/2026 (Cargo 5)
Executada a validação via `scripts/gerarMatrizVivaEdital.ts` e documentada em `docs/matriz_edital_cargo5.md`:
- **Total de tópicos mapeados:** 64 tópicos oficiais.
- **Tópicos sem submódulo teórico:** 0 (100% de cobertura teórica).
- **Tópicos sem itens de simulado:** 0 (100% de cobertura prática).
- **Tópicos com cobertura fraca:** 0.

---

### 2.2 W4 — Mineração do Corpus e Injeção Massiva de Questões Reais Cebraspe

#### A) O Corpus de 5.239 Itens Reais Cebraspe (`archive/corpus_questoes_reais_cebraspe.json`)
A partir dos 33 PDFs do diretório `acervo-estudos/Questões/`, foi desenvolvido um pipeline de extração e reconciliação com o gabarito oficial definitivo:
- `CAD CESPE.pdf` (1.921 itens)
- 15 Cadernos do Tec Concursos (3.318 itens)
- **Total Catalogado:** **5.239 itens reais Cebraspe**, com gabarito oficial C/E conferido, metadados de órgão/ano e guardados fora do bundle final em `archive/corpus_questoes_reais_cebraspe.json` (3.32 MB).

#### B) Descoberta Empírica: A Verdade sobre os Quantificadores Absolutos no Cebraspe
Nos itens sintéticos antigos, assertivas com quantificadores absolutos (*sempre, nunca, apenas, somente, exclusivamente, todos, nenhum, jamais, unicamente*) tinham 80% de gabarito Errado, criando um "atalho cognitivo" que enganava o aluno e mascarava deficiências conceituais.

Ao medirmos pela primeira vez o comportamento da banca Cebraspe no **corpus real de 5.239 itens**:
- **Total de assertivas reais com quantificadores absolutos:** 399 itens (7.6% de todo o acervo).
- **Gabarito CERTO no mundo real:** **188 itens (47.1%)**!
- **Gabarito ERRADO no mundo real:** **211 itens (52.9%)**!

**Conclusão Pedagógica Fundamental:** O Cebraspe ativamente constrói itens onde termos como "exclusivamente", "apenas" e "sempre" são **doutrinária ou legalmente CORRETOS** (ex.: depósito legal mandatório, atribuições privativas regimentais, requisitos técnicos de catalogação cooperativa). Treinar exclusivamente com itens sintéticos onde "tem 'apenas' = marque Errado" causaria reprovação direta na prova do dia 17/01/2027. O aluno Richard agora treina com a distribuição estatística autêntica da banca examinadora.

#### C) Reconstrução do Mega Simulado Oficial 120Q (`mega-simulado-camara-120q.ts`)
O caderno `mega-simulado-camara-120q.ts` foi 100% reconstruído com questões reais Cebraspe:
- **Total:** 120 itens com IDs sequenciais (`mega-q-1` a `mega-q-120`).
- **Simetria Global:** Exatamente **60 Certos e 60 Errados** (50% / 50%).
- **Parte 1 (Conhecimentos Básicos — Itens 1 a 40):** Exatamente 20 Certos e 20 Errados.
  - 10 Língua Portuguesa (M13): 5 C / 5 E
  - 10 Língua Inglesa (M12): 5 C / 5 E (itens da Câmara dos Deputados)
  - 10 Direito Administrativo e RLM (M11): 5 C / 5 E
  - 10 Tecnologia da Informação e Dados (M14): 5 C / 5 E
- **Parte 2 (Conhecimentos Específicos — Itens 41 a 120):** Exatamente 40 Certos e 40 Errados (8 questões por módulo em M01 a M10, com 4 C e 4 E cada):
  - M01 (Fundamentos da Biblioteconomia): 4 C / 4 E
  - M02 (Catalogação e Metadados): 4 C / 4 E
  - M03 (Classificação Documentária CDD/CDU): 4 C / 4 E
  - M04 (Recuperação da Informação e Fontes Jurídicas): 4 C / 4 E
  - M05 (Gestão de Unidades de Informação e Coleções): 4 C / 4 E
  - M06 (Bibliotecas Digitais e IA): 4 C / 4 E
  - M07 (Preservação e Conservação): 4 C / 4 E
  - M08 (Normalização Documental ABNT): 4 C / 4 E
  - M09 (Comunicação Científica e Bibliometria): 4 C / 4 E
  - M10 (Legislação e Regimento da Câmara dos Deputados): 4 C / 4 E
- **Proveniência:** 100% dos 120 itens com `"fonteOriginal": { "tipo": "cebraspe-real", "descricao": "...", "verificado": true }`.

#### D) Reconstrução do Simulado de Língua Inglesa (`m12-ingles-100q.ts`)
- **Total:** 100 itens com IDs sequenciais (`m12-q-1` a `m12-q-100`).
- **Simetria:** Exatamente **50 Certos e 50 Errados**.
- **100% de questões reais Cebraspe**, incluindo as provas oficiais de Consultor Legislativo e Analista Legislativo da própria Câmara dos Deputados.
- Todos os itens com texto-base em língua inglesa no campo `contexto` e enunciados livres de caracteres ilegais ou ligaduras tipográficas (`fi`, `fl`).

#### E) Saneamento do Simulado de Preservação (`m7-preservacao-100q.ts`)
- Injetadas 60 novas questões reais Cebraspe de preservação física e digital (30 C e 30 E), eliminando os distratores caricatos (confeitaria, animações GIF).
- A densidade de itens reais em M7 subiu de 12% para **72%**.

#### F) Censo Geral de Questões Reais Vivas na Plataforma
| Caderno de Simulado | Total Itens | Reais Pré-Fase 3 | Reais Pós-Fase 3 | % Reais Atual |
| :--- | :---: | :---: | :---: | :---: |
| **mega-simulado-camara-120q** | 120 | 0 | **120** | **100%** |
| **m12-ingles-100q** | 100 | 0 | **100** | **100%** |
| **m11-administrativo-100q** | 100 | 100 | **100** | **100%** |
| **m7-preservacao-100q** | 100 | 12 | **72** | **72%** |
| **m1-fundamentos-100q** | 100 | 51 | **51** | **51%** |
| **m2-catalogacao-100q** | 100 | 51 | **51** | **51%** |
| **m3-classificacao-100q** | 100 | 48 | **48** | **48%** |
| **m5-gestao-100q** | 100 | 48 | **48** | **48%** |
| **m6-digital-ia-100q** | 100 | 43 | **43** | **43%** |
| **m4-recuperacao-100q** | 100 | 38 | **38** | **38%** |
| **m8-normalizacao-100q** | 100 | 36 | **36** | **36%** |
| **m10-legislativo-100q** | 100 | 31 | **31** | **31%** |
| **m9-comunicacao-100q** | 100 | 29 | **29** | **29%** |
| **Total Global Vivo** | **1.550** | **487 (31.4%)** | **767 (49.5%)** | **49.5%** |

O acervo ativo de questões reais Cebraspe saltou de 487 para **767 itens reais verificados**!

---

## 3. Registro da Diretriz Estratégica (Fases 4 e 5)

Em cumprimento ao pedido do aluno Richard, foi adicionada a **Seção 21** em `DIRETRIZES_PROJETO_HEULLER_NA_CAMARA.md`:
- **NÃO substituir** a teoria atual exclusivamente pelo novo formato em bloco.
- **Implementar um alternador/toggle por módulo/submódulo**, permitindo que o usuário escolha dinamicamente se deseja estudar pela **Teoria Canônica (formato institucional denso atual)** ou pelo **Novo Formato Didático / Vida Real** (focado em casos práticos do dia a dia, menor sobrecarga cognitiva, exemplos e aplicação prática imediata).
- Essa preferência será persistida no store (`useProgressStore` / `localStorage`) individualmente para cada módulo/submódulo.

---

## 4. Indicadores de Validação e Qualidade Técnica

1. **Testes Automatizados (Vitest):**
   - Criação de `src/tests/w3w4CoberturaEQuestoesReais.test.ts` (7 testes).
   - Suíte geral executada com `npx vitest run --pool=forks`: **81 arquivos de teste aprovados, 692 testes passando com 100% de sucesso**.
   - Zero regressões em relação à linha de base.
2. **TypeScript Estrito (`npx tsc -b`):**
   - 0 erros em todo o projeto.
3. **Linter Estrito (`npm run lint`):**
   - 0 erros em todos os arquivos modificados.
4. **Build e Orçamento de Pacote (`npm run build`):**
   - Compilação concluída com sucesso em 58.8s.
   - PWA Service Worker gerado com 298 assets pré-cacheados.
   - Script `verificarOrcamentoPacote.mjs` executado: **100% dos limites de tamanho e performance rigorosamente respeitados**.
5. **Git e Versionamento:**
   - Trabalho realizado exclusivamente na branch `ux/plano-v3`.
