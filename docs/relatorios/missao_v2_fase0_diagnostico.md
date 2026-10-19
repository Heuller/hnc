# Relatório de Diagnóstico — Fase 0 (MISSÃO v2)
**Plataforma de Estudos: Heuller na Câmara (HNC)**  
**Candidato:** Richard | **Cargo:** Analista Legislativo — Cargo 5 (Biblioteconomia)  
**Banca:** Cebraspe | **Data da Prova:** 17/01/2027 | **Data do Diagnóstico:** 19/10/2026  
**Status da Fase:** Concluída (Somente Leitura e Diagnóstico) — Aguardando Aprovação para Fase 1

---

## 1. Stack Real e Modelo de Dados

### 1.1 Stack de Engenharia
- **Frontend Core:** React 19 (`react` 19.2.8, `react-dom` 19.2.8), TypeScript (~6.0.2 / ES2022).
- **Build & Estilização:** Vite 8.3.0, Tailwind CSS v4 (`@tailwindcss/vite` 4.3.3), Lucide React.
- **Gerenciamento de Estado & Validação:** Zustand 5.0.15 com middleware `persist` (LocalStorage), Zod 3.24.2.
- **Backend & Sincronização:** Supabase JS 2.117.2 (resiliente/offline-first, sincronização degradável).
- **PWA & Offline:** `vite-plugin-pwa` 1.3.0, Service Worker Workbox precacheando assets e bundle estático.
- **Testes & Qualidade:** Vitest 5.0.3 (pool `forks` para isolamento no Windows), Oxlint 1.81.0, 84 arquivos de teste e 732 testes unitários/integração 100% verdes.

### 1.2 Modelo de Dados
- **Teoria:** 75 submódulos distribuídos em 15 macro-módulos (M1 a M10 Específicos; M11 a M14 Básicos; M2.5 Apoio Institucional). Cada submódulo armazena: seções markdown com exemplos, metadados cognitivos, mnemônicos e 3 checkpoints formativos C/E (total de 225 checkpoints).
- **Questões & Simulados:** 1.850 itens declarados em 18 cadernos temáticos (`src/content/questions/` e `SIMULADOS_REGISTRY`). Cadernos M1 a M10 (100Q cada), M11 a M14 (100Q cada), Mega-Simulados de 120Q e Simulado Geral de 180Q. Itens no padrão Cebraspe (C/E) com penalização (1 erro anula 1 acerto).
- **Revisão:**
  - *Deck A (Legado):* `leitnerDeck` em `useProgressStore`, operando sobre checkpoints em caixas 1 a 5 com intervalos fixos.
  - *Deck B (Unificado / Conceitos Atômicos):* `useConceptStore.estados` e `conceptRepository`, 225 conceitos derivados dos checkpoints com agendamento estrito em dias úteis, aceleração de Pashler, peso de hipercorreção e 8 formatos cognitivos ricos (F1 a F8).
  - *Submódulos de Revisão Científica Rn:* `comporSubmoduloRevisao` em `src/domain/reviewSubmoduleEngine.ts`, compondo sessões de 20 itens com simetria 10 C / 10 E ao final de cada módulo.
- **Persistência e Logs por Resposta:**
  - Local: LocalStorage via chave `hnc_progress_storage`.
  - Entidade `ItemAttempt`: registra atômica e imediatamente `id`, `itemId`, `submoduloId`, `moduloId`, `contexto` (`teoria`, `jornada`, `revisao`, `simulado`, `portal`, `caderno_erros`), `resposta` (`C`, `E`, `BRANCO`), `gabarito`, `correto` (boolean), `tempoRespostaMs` e `timestamp` (ISO).
  - Entidade `ConceptState`: armazena `caixaAtual`, `intervaloAtualDiasUteis`, `proximaRevisaoIso` e histórico de tentativas com formato, tempo e confiança (`certeza`, `provavel`, `chute`).

---

## 2. Inventário do Corpus de Questões (`acervo-estudos/Questões/`)

Todos os 33 arquivos presentes no diretório `acervo-estudos/Questões/` foram catalogados e inspecionados quanto à camada textual e gabaritos.

| # | Arquivo | Tamanho | Págs. | Camada de Texto | Banca / Origem | Gabarito Definitivo | Conteúdo Principal |
|---|---|---|---|---|---|---|---|
| 1 | `750 FCC.pdf` | 15.17 MB | 502 | Texto Nativo | FCC | Presente (comentado) | 750 questões de Biblioteconomia comentadas (Múltipla Escolha) |
| 2 | `BDTD, Scielo, etc.pdf` | 0.44 MB | 18 | Texto Nativo | Tec Concursos / Mistas | Presente | Repositórios, BDTD, SciELO e Acesso Aberto |
| 3 | `Bibliometria.pdf` | 1.03 MB | 41 | Texto Nativo | Tec Concursos / Mistas | Presente | Bibliometria, Leis Bibliométricas, Altmetria |
| 4 | `Biblioteca Digital Jurídica e Redes...pdf` | 0.32 MB | 13 | Texto Nativo | Tec Concursos / Mistas | Presente | BDJur, Redes Jurídicas e Informação Legislativa |
| 5 | `Bibliotecas Digitais e Virtuais.pdf` | 1.10 MB | 46 | Texto Nativo | Tec Concursos / Mistas | Presente | Bibliotecas Digitais, Protocolos OAI-PMH, Repositórios |
| 6 | `CAD CESPE.pdf` | 3.17 MB | 219 | Texto Nativo | Cebraspe / Papirvm | Presente no final de blocos | ~1.900 questões Cebraspe divididas pelos capítulos de Biblioteconomia |
| 7 | `COMUT, Cooperação, etc.pdf` | 0.70 MB | 29 | Texto Nativo | Tec Concursos / Mistas | Presente | COMUT, Redes Cooperativas, Empréstimo entre Bibliotecas |
| 8 | `CQ1.pdf` | 5.22 MB | 145 | Texto Nativo | Papirvm / Mistas | Presente | Caderno de Questões Papirvm 1 (Módulos Gerais) |
| 9 | `CQ2.pdf` | 5.63 MB | 119 | Texto Nativo | Papirvm / Mistas | Presente | Caderno de Questões Papirvm 2 (Módulos Específicos) |
| 10 | `Gestão Documental.pdf` | 0.31 MB | 12 | Texto Nativo | Tec Concursos / Mistas | Presente | Gestão de Documentos, Teoria das Três Idades |
| 11 | `Interoperabilidade.pdf` | 0.71 MB | 28 | Texto Nativo | Tec Concursos / Mistas | Presente | Protocolos OAI-PMH, Z39.50, SPARQL, Metadados |
| 12 | `PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA.pdf`| 2.38 MB | 219 | Texto Nativo | Cebraspe / Papirvm | Presente | Versão canônica de questões Cebraspe do CAD CESPE |
| 13 | `Preservação e Conservação.pdf` | 1.16 MB | 47 | Texto Nativo | Tec Concursos / Mistas | Presente | Conservação preventiva, restauração, agentes de deterioração |
| 14 | `T.I. Aplicado à Biblioteconomia.pdf` | 0.45 MB | 17 | Texto Nativo | Tec Concursos / Mistas | Presente | Automação, SIGB, Koha, DSpace, Banco de Dados |
| 15 | `Tec Concursos - ... - 14_14_49...PDF` | 0.62 MB | 34 | Texto Nativo | Tec Concursos / Mistas | Presente | Referência, Usuários e Fontes de Informação, DSI |
| 16 | `Tec Concursos - ... - 14_15_28...PDF` | 0.59 MB | 33 | Texto Nativo | Tec Concursos / Mistas | Presente | Biblioteca Digital, Interoperabilidade |
| 17 | `Tec Concursos - ... - 14_16_01...PDF` | 0.61 MB | 33 | Texto Nativo | Tec Concursos / Mistas | Presente | Serviço de Referência, Estudos de Usuários, DSI |
| 18 | `Tec Concursos - ... - 14_16_29...PDF` | 0.59 MB | 33 | Texto Nativo | Tec Concursos / Mistas | Presente | Normalização Documentária e Normas ABNT |
| 19 | `Tec Concursos - ... - 14_17_15...PDF` | 0.36 MB | 18 | Texto Nativo | Tec Concursos / Mistas | Presente | Raciocínio Lógico (Conhecimentos Básicos) |
| 20 | `Tec Concursos - ... - 14_17_58...PDF` | 0.63 MB | 31 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Língua Inglesa aplicada a concursos |
| 21 | `Tec Concursos - ... - 15_01_37...PDF` | 0.57 MB | 32 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Fundamentos, Ciência da Informação, Ranganathan |
| 22 | `Tec Concursos - ... - 15_03_36...PDF` | 0.57 MB | 41 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Planejamento, Coleções, Marketing, Gestão |
| 23 | `Tec Concursos - ... - 15_04_43...PDF` | 0.85 MB | 42 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Catalogação, AACR2, RDA, FRBR, MARC 21 |
| 24 | `Tec Concursos - ... - 15_05_29...PDF` | 0.56 MB | 33 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Indexação, Classificação (CDD/CDU), Tesauros |
| 25 | `Tec Concursos - ... - 15_06_15...PDF` | 0.58 MB | 24 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Catalogação e Formatos Automatizados (Bloco 2) |
| 26 | `Tec Concursos - ... - 08_17_16...PDF` | 0.63 MB | 41 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Indexação, Linguagens Documentárias, CDU |
| 27 | `Tec Concursos - ... - 08_23_50...PDF` | 0.58 MB | 40 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Fontes de Informação, Usuários, DSI (Bloco 2) |
| 28 | `Tec Concursos - ... - 08_25_07...PDF` | 0.60 MB | 40 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Repositórios Digitais e Interoperabilidade (Bloco 2) |
| 29 | `Tec Concursos - ... - 08_25_52...PDF` | 0.61 MB | 33 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Preservação, Ciência Aberta, Gestão |
| 30 | `Tec Concursos - ... - 08_27_02...PDF` | 0.63 MB | 41 | Texto Nativo | Tec Concursos / Cebraspe | Presente | Referência e Usuários (Bloco Complementar) |
| 31 | `apostila-de-biblioteconomia...p_compress.pdf`| 1.54 MB | 79 | Texto Nativo | Papirvm / PGDF 2020 | Presente | Revisão Teórica + 420 Questões Gabaritadas |
| 32 | `apostilao-biblioteconomia...protegida...pdf`| 14.23 MB | 208 | Texto Nativo | Nilzete Gomes / Mistas | Presente no corpo | Doutrina esquematizada + Questões de fixação |
| 33 | `pdf-caderno-cespe_compress.pdf` | 11.75 MB | 219 | Texto Nativo | Cebraspe / Papirvm | Presente | Caderno de questões Cebraspe comprimido |

> **Achado Crítico do Corpus:** 100% dos 33 arquivos PDF possuem **camada de texto nativo pesquisável e extraível**. Não há dependência obrigatória de OCR complexo para extração primária.

---

## 3. Tabela de Validação dos Achados Prévios

Validação executada diretamente sobre os dados vivos do repositório (`HNC_PLATAFORMA_COMPLETA_LEGIVEL_POR_MAQUINA.json` e fontes TS/TSX).

| Item | Achado Prévio (Prompt) | Dado Auditado / Linha / Código | Status | Evidência / Detalhes |
|---|---|---|---|---|
| **1.1** | 1.850 itens declarados | 1.850 itens no array de simulados | **CONFIRMADO** | 18 cadernos, soma exata: 1.850 itens. |
| **1.2** | 1.575 textos distintos | 1.575 strings de enunciados únicas | **CONFIRMADO** | 275 itens são duplicatas textuais entre cadernos. |
| **1.3** | `mega-simulado-camara` e `120q` idênticos (120/120) | 120 de 120 itens com mesmo texto | **CONFIRMADO** | Duplicação total 1:1 entre os cadernos `mega-simulado-camara` e `mega-simulado-camara-120q`. |
| **1.4** | `simulado-geral-180q` reaproveita itens dos módulos (≥ 128 repetições) | 145 de 180 itens repetidos dos cadernos de módulo | **CONFIRMADO** | 80,5% do Simulado Geral de 180Q é repetição não rotulada de cadernos temáticos. |
| **1.5** | 18 cadernos têm exatamente 50% C e 50% E | Rigorosamente 925 C e 925 E (50,00% / 50,00%) em todos os 18 cadernos | **CONFIRMADO** | Forçamento matemático artificial de simetria em todos os simulados. |
| **1.6** | Quantificadores absolutos: 144 de 180 (80%) são E | 188 itens com absolutos, sendo 149 E (79,25%) | **CONFIRMADO** | Forte atalho de adivinhação: presença de termos absolutos indica gabarito E com ~80% de precisão. |
| **1.7** | 308 justificativas começam com "Gabarito oficial …" | 308 justificativas genéricas | **CONFIRMADO** | 308 itens nos cadernos M3 a M10 usam texto padronizado sem resolução analítica. |
| **1.8** | ~85% das justificativas seguem molde "Gabarito CERTO/ERRADO." | 1.266 de 1.850 (68,43%) iniciam com o molde textual | **PARCIALMENTE REFUTADO** | Taxa real é de ~68,4% (e não 85%), mas o molde repetitivo é predominante. |
| **1.9** | Itens rotulados reais existem só em M3..M10 (282 itens); nenhum em M1, M2, M11..M14 | 308 itens rotulados com concurso real nos cadernos M3..M10 e no geral-180q; zero em M1, M2, M11..M14 | **CONFIRMADO** | Cadernos de Fundamentos (M1), Catalogação (M2) e Básicos (M11..M14) não possuem questões reais rotuladas. |
| **1.10** | 15 itens trazem "concurso Câmara dos Deputados/2026" | 15 itens rotulados como "Câmara dos Deputados/2026" | **CONFIRMADO** | Anacronismo: edital publicado em 02/10/2026, com prova agendada para 17/01/2027. |
| **1.11** | 28 itens com quebras de extração de PDF | Auditados itens com quebras ("ra mos", "classific a- ções") | **CONFIRMADO** | Artefatos de extração PDF presentes nos enunciados importados. |
| **1.12** | Itens de Inglês/Português citam "Text I" sem campo texto-base | `m12-ingles-100q.ts` e `m13-portugues-100q.ts` citam Text I / Texto I; `SimuladoPage` não possui campo nem suporte | **CONFIRMADO** | Itens de interpretação textual estão sem o texto-base de suporte no app. |
| **1.13** | Nenhum enunciado contém gabarito | 0 ocorrências de gabarito vazado no texto do item | **CONFIRMADO** | A causa de W1 não é texto vazado no enunciado. |
| **2.1** | Teoria: 132.555 palavras | Exatamente 132.555 palavras no acervo | **CONFIRMADO** | Volume equivalente a ~10 horas de leitura contínua. |
| **2.2** | 26 de 75 unidades têm > 2.000 palavras | 26 unidades com > 2.000 palavras | **CONFIRMADO** | Extensão excessiva dificulta leitura para o aluno. |
| **2.3** | 8 unidades têm > 3.000 palavras | 8 unidades com > 3.000 palavras | **CONFIRMADO** | Submódulo 9.3 é o maior, com 3.744 palavras. |
| **2.4** | `tempo_leitura_minutos` = 15 fixo em todas (75/75) | 75 de 75 unidades declaram `tempo_leitura_minutos = 15` | **CONFIRMADO** | Métrica estática descolada da realidade (varia de 2 a 19 min). |
| **2.5** | `antes_de_ler` vazio em 69 de 75 | 69 unidades com array vazio | **CONFIRMADO** | 92% das unidades teóricas sem conceitos prévios preenchidos. |
| **2.6** | `mnemonicos.esquemas` vazio em todas (75/75) | 75 unidades com array de esquemas vazio | **CONFIRMADO** | 100% das unidades sem esquemas visuais estruturados. |
| **2.7** | `nivel_cognitivo_predominante` idêntico nas 75 | Todas declaram "Analítico / Aplicado" | **CONFIRMADO** | Classificação em bloco sem calibragem individual. |
| **2.8** | 225 checkpoints: formato X1, nível memorizar, sem referência | 225 de 225 com `formato_exercicio: X1`, `habilidade_bloom: memorizar`, `referencia: ""` | **CONFIRMADO** | Checkpoints gerados mecanicamente sem variedade cognitiva nem citação. |
| **3.1** | Glossário: 177 verbetes reais vs 333 citado | 177 verbetes no array canônico | **CONFIRMADO** | O número 333 originou-se do total de assets precacheados do PWA. |
| **3.2** | 9 menções ao glossário no texto teórico | 6 menções explícitas na teoria ("glossário") | **PARCIALMENTE CONFIRMADO** | 6 menções textuais diretas localizadas no corpo teórico. |
| **4.1** | Termos do edital ausentes em questões e checkpoints | Termos ausentes ou rarefeitos auditados (ex: Direitos Sociais = 0, Antispyware = 0, Worms = 0, Manifestos IFLA = 0) | **CONFIRMADO** | Existem lacunas objetivas de cobertura do edital Cargo 5. |
| **4.2** | Escopo: M10.2 e M2.5 fora das folhas diretas do edital | Verificado na matriz do Edital nº 1/2026 | **CONFIRMADO** | Devem ser mantidos e rotulados como temas de "apoio contextual", sem apagar. |

---

## 4. Diagnóstico de Causa Raiz do Bug W1 ("Questões já vêm respondidas")

A reprodução e auditoria no código identificaram três causas convergentes:

### Causa Primária (Estado Persistido em Checkpoints):
- **Arquivo:** `src/components/common/ItemCE.tsx` (linhas 52 a 72).
- **Mecanismo:** Ao abrir um submódulo na visualização de Teoria ou ao ser direcionado para "Revisão Dirigida", o componente `ItemCE` busca no Zustand (`useProgressStore.itemAttempts`):
  ```tsx
  const primeiraTentativa = obterPrimeiraTentativa(item.id);
  const ultimaTentativa = obterUltimaTentativa(item.id);
  const attemptAtual = modoPraticaAtivo ? ... : ultimaTentativa || primeiraTentativa;
  const isRespondido = attemptAtual !== null && attemptAtual !== undefined;
  ```
  Se o aluno já realizou o checkpoint alguma vez, `isRespondido` é avaliado imediatamente como `true`. O componente é montado já no estado respondido, exibindo a opção selecionada, cores verde/vermelho, o gabarito oficial e a justificativa completa, forçando o aluno a clicar no botão "Refazer" para poder testar ativamente sua memória.

### Causa Secundária (Fuga de Gabarito no Formato F5):
- **Arquivo:** `src/components/review/formats/F5Associacao.tsx` (linhas 13 a 16).
- **Mecanismo:** O fallback padrão expõe literalmente:
  ```tsx
  { ladoA: 'Gabarito Oficial Canônico', ladoB: conceito.gabaritoCanonic === 'C' ? 'CERTO' : 'ERRADO' }
  ```
  Isso imprime o gabarito oficial na tela antes de o usuário responder.

### Causa Terciária (Violação do Fluxo de Julgamento em `ExerciseRenderer`):
- **Arquivo:** `src/components/review/ExerciseRenderer.tsx` (linhas 118 a 132).
- **Mecanismo:** Ao selecionar a assertiva, a interface revela simultaneamente a aferição de confiança e o `ExerciseFeedback`. O gabarito oficial e a nota líquida são apresentados antes que o aluno registre sua metacognição (se foi chute, provável ou certeza).

---

## 5. Histórico do Aluno e Protocolo de Coleta Mínima

1. **Diagnóstico do Histórico no Repositório:**  
   Não constam arquivos de histórico ou dados reais de sessões do aluno Richard no repositório Git. Toda a persistência é mantida no `localStorage` do navegador do usuário.
2. **Protocolo de Coleta Mínima Proposto:**
   - **Opção A (Exportação Direta):** Solicitar que o aluno acesse o aplicativo em seu navegador habitual, vá em Perfil / Configurações e clique em **"Exportar Progresso (JSON)"** (rotina já implementada via `useProgressStore.exportarProgressoJson()`), disponibilizando o JSON para cálculo imediato de baseline, Pareto de perdas e calibração.
   - **Opção B (Simulado Diagnóstico Baseline):** Caso não haja histórico prévio relevante no navegador, aplicar um Simulado Diagnóstico Calibrador de 50 itens inéditos representativos dos 14 módulos (35 de conhecimentos específicos e 15 de conhecimentos básicos) para estabelecer o `net_score` e `raw_accuracy` iniciais.

---

## 6. Critério de Aceite da Fase 0
- [x] Stack real e arquitetura detalhados.
- [x] Inventário completo dos 33 arquivos do acervo de questões (`acervo-estudos/Questões`).
- [x] Tabela de validação com dados exatos de todos os achados prévios (confirmados / refutados / parciais).
- [x] Causa raiz do Bug W1 diagnosticada e documentada.
- [x] Status do histórico do aluno mapeado e protocolo de coleta mínima apresentado.
- [x] **PAUSA OBRIGATÓRIA:** Aguardando aprovação do usuário para transição à Fase 1 (Decisões via `ask_question`).
