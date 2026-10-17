# Relatório de Execução — Fase U9 (Plano v3)
**Plataforma de Estudos "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5)  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Data da Prova:** 17/01/2027  
**Branch de Trabalho:** `ux/plano-v3`  
**Data:** 17 de outubro de 2026  

---

## 1. Resumo Executivo da Fase U9

A **Fase U9 — Qualidade contínua e testes de regressão** conclui formalmente o **Plano v3** (correções, UX/UI, pedagogia e modo livre), estabelecendo um cinturão de proteção automatizado e definitivo contra regressões funcionais, visuais, normativas e de desempenho.

Principais conquistas da fase:
1. **Suíte Consolidada de Testes de Regressão (U9.1):** Criação de `src/tests/regressaoPlanoV3D1aD14.test.tsx` com 21 testes unitários e de integração cobrindo exaustivamente cada um dos 14 defeitos diagnosticados (**D1 a D14**), além de validações do calendário de revisões e das heurísticas neurocognitivas de Ebbinghaus.
2. **Controle de Orçamento de Pacote e Build em CI (U9.2):** Implementação de script verificador (`scripts/verificarOrcamentoPacote.mjs`) e teste automatizado (`src/tests/bundleBudgetU9.test.ts`), integrado diretamente ao comando `npm run build`. O pipeline de CI agora falha automaticamente caso o tamanho dos pacotes (JS total, CSS, vendor-core, chunks de entrada) exceda os limites rigorosamente orçados, ou caso o número de assets precacheados pelo ServiceWorker fique abaixo do mínimo necessário para uso offline.
3. **Capturas em Viewports Mobile-First e Checklist de Lançamento (U9.3):** Execução do script `scripts/capturarScreenshotsU9.mjs` com Puppeteer, registrando 18 capturas nas resoluções 360×800 (mobile compacto), 412×915 (mobile moderno - Galaxy/Pixel) e 1440×900 (desktop de referência) para as 6 telas-chave da aplicação (*Painel*, *Teoria*, *Treinos*, *Simulado*, *Discursiva* e *Progresso*), comprovando **zero overflow horizontal** e alvos de toque perfeitamente dimensionados.
4. **Consolidação do Plano v3:** Cumprimento integral de todas as fases (U0 a U9), elevando a suíte de testes de 535 testes em 51 suítes (linha de base inicial do plano) para **711 testes em 79 suítes**, todos rigorosamente verdes.

---

## 2. Tabela de Tarefas e Commits da Fase U9

| Tarefa | Descrição Sintética | Commit | Arquivos Principais Alterados |
| :--- | :--- | :--- | :--- |
| **U9.1** | Suíte consolidada de testes de regressão para os 14 defeitos do Plano v3 (D1 a D14) | `04d6916` | `src/tests/regressaoPlanoV3D1aD14.test.tsx` |
| **U9.2** | Script verificador de orçamento de pacote e build em CI com teste dedicado | `41c693d` | `package.json`, `scripts/verificarOrcamentoPacote.mjs`, `src/tests/bundleBudgetU9.test.ts` |
| **U9.2 (Refinamento)** | Ajuste de tipagem e importações limpas para conformidade estrita no `tsc -b` e `oxlint` | `1acc34e` | `scripts/verificarOrcamentoPacote.mjs`, `src/tests/bundleBudgetU9.test.ts`, `src/tests/regressaoPlanoV3D1aD14.test.tsx` |
| **U9.3** | Captura automatizada de screenshots mobile-first (360×800 e 412×915) e validação sem overflow | `61443cc` | `scripts/capturarScreenshotsU9.mjs`, `docs/relatorios/screenshots/u9_*.png` |

---

## 3. Matriz de Cobertura de Regressão dos Defeitos D1 a D14

| Defeito | Problema Original Observado | Correção Aplicada nas Fases Anteriores | Como é Protegido na Suíte de Testes (U9.1) |
| :--- | :--- | :--- | :--- |
| **D1** | Fórmulas com comandos LaTeX crus (`\Delta`, `\times`) e cifrões desbalanceados | Instalação e unificação de `remark-math` e `rehype-katex` com parser de moeda | Renderização de equações sem expor comandos no DOM e preservação de `R$` e `US$` |
| **D2** | Alertas GitHub crus (`[!CAUTION]`) sem tradução editorial | Plugin de alertas mapeando para callouts em português (*Nota*, *Dica*, *Importante*, *Atenção*, *Casca de banana*) | Verificação de ausência de `[!` e presença dos rótulos traduzidos com semântica |
| **D3** | Texto fixo "Todos os 4 pares" exibido mesmo com 3 pares na tela | Dinamização para `authorCards.length` | Teste assegura contagem dinâmica igual ao número real de cartões |
| **D4** | Itens escondidos somados a checkpoints gerando pendências fantasma e bloqueios | Modo livre permanente em `JORNADA_CONFIG` e desativação de travas forçadas | `modoLivreDefault === true` e `simuladoObrigatorioParaAvancar === false` |
| **D5** | Risco de travamento de interface e telas com carregamento despadronizado | Componentes `LoadingSkeleton` e `ErrorState` com botões acessíveis $\ge 44\text{ px}$ | Teste de acessibilidade (`role="status"`, `role="alert"`) e botão de nova tentativa |
| **D6** | Tabelas com quebra de palavras ("GABARI TO") e botão amarelo FAB cobrindo texto | `TabelaResponsiva` com cabeçalhos `nowrap` e Mnemônicos movidos para gaveta móvel | Teste de estrutura tabular sem quebra e validação de ausência de FAB flutuante |
| **D7** | Cabeçalho desktop quebrando em 3 linhas devido a excesso de abas | Simplificação para 4 abas centrais e logotipo com `whitespace-nowrap` | Validação da lista exata de 4 abas (*Painel*, *Jornada*, *Treinos*, *Progresso*) |
| **D8** | Uso do termo "verbatim" gerando falsa aparência de transcrição literal | Remoção completa de "verbatim" (`grep` = 0) e auditoria de citações contra acervo | Schema valida `conteudoEditorial` e ausência total de "verbatim" |
| **D9** | Rótulos sugerindo dados oficiais da banca sem fonte ("Armadilha Mapeada") | Rótulos honestos: *"Itens autorais no estilo Cebraspe"* e *"Modelo Cebraspe (Fator 1:1)"* | Asserções de rótulos transparentes sem falsa oficialidade |
| **D10** | Fórmulas da discursiva divergentes e uso do fator incorreto $2 \times (NE/TL)$ | Centralização das fórmulas do Edital 1/2026: Questão ($3 \times$) e Peça ($6 \times$) | Teste canônico de notas ($11,10$ e $22,80$), eliminação a zero e aprovação com $\ge 30,00$ |
| **D11** | Mensagem de privacidade afirmando "100% local" apesar de sync com Supabase | Alinhamento transparente: persistência primária local e nuvem opcional | Validação das diretrizes de armazenamento e independência de rede |
| **D12** | Contagens divergentes digitadas no código ("10 cadernos" vs M1..M14) | Contagens derivadas dinamicamente de `COURSE_REGISTRY` | Total de módulos ($\ge 14$) e submódulos ($\ge 56$) extraídos do registro |
| **D13** | Vocabulário técnico sem pré-requisitos conceituais para iniciantes | Dicionário de 10.000 verbetes e destaques conceituais antes da leitura | Validação da disponibilidade de termos fundamentais da Biblioteconomia |
| **D14** | Checkpoints monótonos (somente 3 itens C/E sem formatos variados) | 8 formatos cognitivos de exercício (F1 a F8) na revisão e leitura | Presença e integridade dos 8 formatos em `REVIEW_CONFIG.exerciseFormats` |

---

## 4. Medições de Orçamento de Pacote e Build (U9.2)

A verificação executada por `scripts/verificarOrcamentoPacote.mjs` produziu as seguintes métricas na compilação de produção:

| Métrica de Orçamento | Limite Máximo Permitido | Medição Real do Build | Status de Conformidade |
| :--- | :--- | :--- | :--- |
| **JavaScript Total (`dist/assets/*.js`)** | 26.00 MB | **16.96 MB** | ✅ Aprovado com folga de 9,04 MB |
| **CSS Total (`dist/assets/*.css`)** | 1.00 MB (1024 kB) | **237.09 kB** | ✅ Aprovado com folga de 786,91 kB |
| **Chunk de Entrada (`index-*.js`)** | 350.00 kB | **126.43 kB** | ✅ Aprovado com folga de 223,57 kB |
| **Chunk Vendor Core (`vendor-core-*.js`)** | 350.00 kB | **216.28 kB** | ✅ Aprovado com folga de 133,72 kB |
| **Chunk Vendor UI (`vendor-ui-primitives-*.js`)** | 150.00 kB | **85.37 kB** | ✅ Aprovado com folga de 64,63 kB |
| **Total de Assets Precacheados (PWA)** | Mínimo 200 assets | **333 assets** | ✅ Precache offline completo garantido |

---

## 5. Capturas de Tela em Dispositivos Móveis e Desktop (U9.3)

Foram geradas 18 capturas oficiais com Puppeteer nos viewports obrigatórios (360×800, 412×915 e 1440×900) para as 6 telas-chave da aplicação, localizadas em `docs/relatorios/screenshots/`:

| Tela | 360×800 (Mobile Compacto) | 412×915 (Galaxy / Pixel) | 1440×900 (Desktop) | Rolagem Horizontal |
| :--- | :--- | :--- | :--- | :--- |
| **Painel** | `u9_painel_360x800.png` | `u9_painel_412x915.png` | `u9_painel_1440x900.png` | **ZERO** (0 px) |
| **Teoria** | `u9_teoria_360x800.png` | `u9_teoria_412x915.png` | `u9_teoria_1440x900.png` | **ZERO** (0 px) |
| **Treinos** | `u9_treinos_360x800.png` | `u9_treinos_412x915.png` | `u9_treinos_1440x900.png` | **ZERO** (0 px) |
| **Simulado** | `u9_simulado_360x800.png` | `u9_simulado_412x915.png` | `u9_simulado_1440x900.png` | **ZERO** (0 px) |
| **Discursiva** | `u9_discursiva_360x800.png` | `u9_discursiva_412x915.png` | `u9_discursiva_1440x900.png` | **ZERO** (0 px) |
| **Progresso** | `u9_progresso_360x800.png` | `u9_progresso_412x915.png` | `u9_progresso_1440x900.png` | **ZERO** (0 px) |

Todas as telas operam com rolagem vertical suave e sem cortes ou sobreposições.

---

## 6. Checklist de Lançamento por Fase (Fases U0 a U9)

| Fase | Foco do Plano v3 | Principais Entregas | Status |
| :--- | :--- | :--- | :--- |
| **U0** | Higiene e contenção de risco | Criação da branch `ux/plano-v3`, confirmação da base da Fase 8 e regras de não-destruição de progresso | ✅ Concluída |
| **U1** | Leitura e renderização matemática | Instalação de `remark-math`, unificação em `ConteudoMarkdown`, suporte a KaTeX e callouts em português | ✅ Concluída |
| **U2** | Modo livre e fim das travas | Eliminação de bloqueios de submódulos, módulos e simulados; navegação 100% aberta e preservação de histórico | ✅ Concluída |
| **U3** | Pedagogia de vocabulário | Dicionário Cunha & Cavalcanti com 10.000 verbetes, "Antes de Ler" e busca rápida | ✅ Concluída |
| **U4** | Variedade cognitiva de exercícios | Checkpoints com 8 formatos formativos (F1 a F8), feedback imediato e calibração de confiança | ✅ Concluída |
| **U5** | Revisões espaçadas científicas | Motor unificado de agendamento (Ebbinghaus/Pashler), intervalos R1..Rn e fixação da prova em 17/01/2027 | ✅ Concluída |
| **U6** | UI/UX profissional mobile-first | Identidade "Papel e Tinta", tokens unificados, 3 níveis de superfície, cabeçalho enxuto e eliminação de FABs | ✅ Concluída |
| **U7** | Desempenho e modularização | Code-splitting por rota e módulos sob demanda, mantendo velocidade de carregamento e suporte offline | ✅ Concluída |
| **U8** | Integridade de rótulos e conteúdo | Remoção de "verbatim", auditoria de citações, rótulos honestos e fórmulas oficiais da discursiva do Edital 1/2026 | ✅ Concluída |
| **U9** | Qualidade contínua e regressão | Suíte de regressão D1..D14 (711 testes verdes), orçamentos de build em CI e homologação mobile-first | ✅ Concluída |

---

## 7. Evolução da Linha de Base de Testes

| Etapa | Suítes de Teste | Total de Testes | Falhas | Delta de Testes |
| :--- | :--- | :--- | :--- | :--- |
| **Linha de Base Inicial (Pré-Plano v3)** | 51 suítes | 535 testes | 0 | Início |
| **Fim da Fase U5** | 70 suítes | 654 testes | 0 | +119 testes |
| **Fim da Fase U6** | 76 suítes | 674 testes | 0 | +20 testes |
| **Fim da Fase U8** | 77 suítes | 687 testes | 0 | +13 testes |
| **Fim da Fase U9 (Fechamento do Plano v3)** | **79 suítes** | **711 testes** | **0** | **+24 testes** (+176 testes totais) |

---

## 8. Itens `[VERIFICAR]` Pendentes

- **Ocorrências no código de produção (`src/`):** **ZERO** (`git grep -in "\[VERIFICAR\]" src/` retorna 0).
- **Citações literais sem correspondência (`[NÃO CONFERIDO]`):** As 7 citações identificadas na Fase U8 foram convertidas em paráfrases autorais fundamentadas com anotação doutrinária interna, preservando a honestidade bibliográfica e a integridade do acervo.

---

## 9. Riscos e Decisões que Dependem do Usuário

1. **Visibilidade do Repositório (U0.1):** O repositório permanece público no GitHub. Recomenda-se a alteração para privado caso o candidato deseje resguardar o acervo proprietário de estudos.
2. **Item 8 do Edital (Provas Objetivas):** As pontuações mínimas de aprovação nas provas objetivas (P1 e P2) exibidas na tela do Edital podem ser revisadas pontualmente caso o usuário forneça o extrato formal do item 8 do Edital nº 1/2026.
3. **Próximo Passo — Fase 9 (Consolidação):** Com o encerramento triunfal do Plano v3 (U0 a U9), a plataforma encontra-se tecnicamente blindada, ultra-rápida, com design profissional mobile-first e pedagogicamente alinhada. O candidato está pronto para avançar para a Fase 9 revisada (Consolidação do Conteúdo e Ciclos de Estudos).
