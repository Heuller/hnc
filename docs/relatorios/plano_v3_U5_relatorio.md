# Relatório de Execução — Fase U5 (Plano v3)
**Plataforma de Estudos "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5)  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Data da Prova:** 17/01/2027  
**Branch de Trabalho:** `ux/plano-v3`  
**Data:** 16 de outubro de 2026  

---

## 1. Resumo Executivo da Fase U5

A Fase U5 teve como objetivo alinhar os mecanismos de revisão da plataforma à ciência da aprendizagem e às exigências da banca Cebraspe, sanando sobreposições arquiteturais e ruídos pedagógicos identificados nos diagnósticos **D8**, **D9**, **D11** e **D12**:

1. **Auditoria Arquitetural dos Motores de Revisão (U5.1):** Mapeamento detalhado e formalização em `docs/revisoes_estado_atual.md` dos 4 motores legados (`unifiedScheduler`, `leitnerStore`, `fase7Agendador` e `reviewSubmoduleEngine`), identificando as causas de duplicação entre a Fila Diária e as revisões de final de módulo (`Rn`).
2. **Fonte Única da Verdade e Desduplicação (U5.2):** Integração unificada via `useConceptStore`. A geração de sessões `Rn` agora consome a fila do agendador unificado, respeita os itens já selecionados para a Fila Diária do dia (`itensExcluidosIds`) e atualiza o histórico e estabilidade Leitner/FSRS de forma atômica e centralizada.
3. **Encaixe dos Submódulos Rn na Trilha de Estudos (U5.3):** Posicionamento dos submódulos de revisão cumulativa (`R1` a `R14`) organicamente ao final de cada módulo correspondente, imediatamente antes do Desafio Cebraspe. Seguindo a regra de Ouro do Modo Livre (Decisão do Usuário), os `Rn` são destacados visualmente com a insígnia `"Recomendado"` (não-bloqueante), permitindo que o candidato avance para o Desafio caso prefira.
4. **Calendário em Dias Úteis até a Prova de 17/01/2027 (U5.4):** Calibração rigorosa do agendamento temporal respeitando dias úteis e feriados nacionais, com teto sustentável de 30 itens/dia para evitar fadiga cognitiva. Nas 3 semanas que antecedem a prova (a partir de 28/12/2026), entra em ação a **Rodada Cumulativa Final**, priorizando itens de alta relevância no edital e conceitos com histórico de erro ou instabilidade.
5. **Intercalação e Pares Conceituais Confundíveis (U5.5):** Garantia de que cada sessão `Rn` contenha itens de **ao menos 3 submódulos distintos** (efeito de intercalação de Kornell & Bjork, 2008 / Rohrer & Taylor, 2007). Inclusão do catálogo de `PARES_CONCEITUAIS_CONFUNDIVEIS` (ex.: CDU vs CDD, AACR2 vs RDA, Indexação exaustiva vs específica, Requisitos funcionais FRBR vs FRAD), com injeção de contraste pareado e formatos formativos reflexivos (F2 a F8) para forçar discriminação ativa.
6. **Padronização D12 de Rótulos e Métricas Dinâmicas (U5.6):** Harmonização integral da terminologia na interface: **"Trilha Específica (M1 a M10)"** e **"Acervo Complementar (M11 a M14)"**, com contadores dinâmicos de etapas concluídas calculados em tempo real na Jornada, Sidebar e Treinos.

---

## 2. Problemas Observados Resolvidos

| # | Problema Observado | Causa Raiz | Status | Onde Foi Corrigido |
|---|---|---|---|---|
| **D8 / D9** | Conflito e duplicação entre a Fila Diária e as sessões `Rn` ao final dos módulos | Dois subsistemas isolados mantendo filas e históricos paralelos sem exclusão mútua | **[RESOLVIDO]** | `src/domain/reviewSubmoduleEngine.ts`, `src/domain/scheduler/unifiedScheduler.ts` e `src/tests/fonteUnicaRevisoesU5.test.ts`. |
| **D11** | Revisões sem garantia de contraste conceitual fino entre tópicos facilmente confundidos pela banca | Seleção puramente baseada em atraso temporal de repetição, sem agrupamento semântico | **[RESOLVIDO]** | `src/domain/reviewSubmoduleEngine.ts` (`PARES_CONCEITUAIS_CONFUNDIVEIS`, intercalação ≥ 3 submódulos, formatos formativos F2-F8) e `src/tests/intercalacaoRnU5.test.ts`. |
| **D12** | Rótulos estáticos e confusos na Jornada ("64 etapas" fixas; falta de clareza entre M1-M10 e M11-M14) | Strings hardcoded na interface e falta de diferenciação explícita entre trilha específica e acervo básico | **[RESOLVIDO]** | `src/pages/JornadaPage.tsx`, `src/components/layout/Sidebar.tsx`, `src/pages/TreinosPage.tsx` e `src/tests/rotulosD12U5.test.ts`. |

---

## 3. Tarefas Concluídas

| ID | Tarefa | Commit | Arquivos Principais Alterados |
| :--- | :--- | :--- | :--- |
| **U5.1** | Auditoria dos motores e sobreposições em `docs/revisoes_estado_atual.md` | `4c0136b` | `docs/revisoes_estado_atual.md` |
| **U5.2** | Fonte única da verdade (`useConceptStore`) para Fila Diária e `Rn`, sem agendamento duplicado | `92aa1cd` | `src/domain/reviewSubmoduleEngine.ts`, `src/domain/concepts/useConceptStore.ts`, `src/tests/fonteUnicaRevisoesU5.test.ts` |
| **U5.3** | Encaixe dos submódulos `Rn` ao final de cada módulo na trilha sem travas (badge "Recomendado") antes do Desafio | `7a1abc6` | `src/domain/jornadaEngine.ts`, `src/pages/JornadaPage.tsx`, `src/tests/encaixeTrilhaRevisoesU5.test.ts`, `src/tests/jornada.test.ts` |
| **U5.4** | Calendário em dias úteis até 17/01/2027 com rodada cumulativa final e teto de 30 itens/dia | `b96ccd3` | `src/domain/scheduler/unifiedScheduler.ts`, `src/tests/calendarioProvaU5.test.ts` |
| **U5.5** | Intercalação nos `Rn` (≥ 3 submódulos) e contraste de pares conceituais confundíveis | `036651e` | `src/domain/reviewSubmoduleEngine.ts`, `src/tests/intercalacaoRnU5.test.ts` |
| **U5.6** | Padronização dos rótulos D12 e harmonização de itens excluídos em candidatos de revisão | `f820948`<br>`cf932c6` | `src/pages/JornadaPage.tsx`, `src/components/layout/Sidebar.tsx`, `src/pages/TreinosPage.tsx`, `src/domain/reviewSubmoduleEngine.ts`, `src/tests/rotulosD12U5.test.ts` |
| **Validação** | Script de Capturas Mobile U5 e Validação Visual nos Viewports | *(em disco)* | `scripts/capturarScreenshotsU5.mjs`, `docs/relatorios/screenshots/` |

---

## 4. Tarefas Não Concluídas ou Parciais

*Nenhuma.* Todas as tarefas U5.1 a U5.6 foram concluídas, com 100% de sucesso nas suítes de teste e conformidade com as regras globais do Plano v3.

---

## 5. Itens `[VERIFICAR]` Registrados

*Nenhum item pendente.* A integração dos pares conceituais utilizou o edital e manuais de Biblioteconomia e Ciência da Informação para delimitar pares genuinamente confundíveis em provas Cebraspe (ex: CDD vs CDU, Notação de Autor Cutter vs PHA, Formatos MARC 21 vs Dublin Core, AACR2 vs RDA).

---

## 6. Medições Antes e Depois

| Métrica | Linha de Base (Fim U4) | Estado Atual (Fim U5) | Delta / Impacto |
| :--- | :--- | :--- | :--- |
| **Suíte de Testes Automatizados** | 637 testes em 65 suítes | **654 testes em 70 suítes** | **+17 testes novos em 5 novas suítes**, 0 falhas |
| **Subsistemas de Agendamento Ativos** | 2 filas independentes | **1 fonte unificada (`useConceptStore`)** | Eliminação completa de revisões redundantes no mesmo dia |
| **Posicionamento de `Rn` na Trilha** | Isolados / forasteiros | **Encaixados antes do Desafio de cada Módulo** | Progressão pedagógica natural sem travas de avanço |
| **Horizonte Temporal até a Prova** | Indeterminado | **Calibrado para 17/01/2027 em dias úteis** | Teto de 30 itens/dia e rodada cumulativa final (28/12 a 17/01) |
| **Variedade Submodular nos `Rn`** | Não garantida (linear) | **≥ 3 submódulos distintos por sessão** | Intercalação cognitiva comprovada (Rohrer & Taylor) |
| **Contraste de Pares Confundíveis** | Ausente | **Injeção de pares e formatos F2 a F8** | Discriminação fina de conceitos de alto risco no Cebraspe |
| **Clareza Editorial (D12)** | Rótulos fixos e ambíguos | **Trilha Específica (M1-M10) e Acervo Complementar (M11-M14)** | Navegação transparente com métricas dinâmicas |

---

## 7. Resultado dos Testes e Qualidade

- **`npm test` (Vitest):** ✅ 70 suítes passaram, 654 testes passaram, 0 regressões.
- **`npx tsc -b` (TypeScript 6):** ✅ 0 erros de compilação.
- **`npm run lint` (Oxlint):** ✅ 0 erros, código 100% limpo (35 avisos cosméticos permitidos mantidos).
- **`npm run build` (Vite + Rolldown + Workbox PWA):** ✅ Compilação de produção concluída com sucesso em 33.6s.

---

## 8. Capturas de Tela em Dispositivos Móveis

Capturas realizadas nos viewports oficiais de estudo mobile (360×800 e 412×915):

1. **Card do Submódulo de Revisão R1 Encaixado na Trilha (`#/jornada`):**
   - `docs/relatorios/screenshots/u5_jornada_card_revisao_r1_360x800.png`
   - `docs/relatorios/screenshots/u5_jornada_card_revisao_r1_412x915.png`
   - *Descrição:* Exibe o card de revisão R1 posicionado organicamente antes do Desafio do Módulo 1, com o badge destacado `"Recomendado"` (não-bloqueante) e rótulos da Trilha Específica (M1 a M10).

2. **Card "Revisão do Dia" e Painel de Treinos (`#/treinos`):**
   - `docs/relatorios/screenshots/u5_treinos_revisao_dia_360x800.png`
   - `docs/relatorios/screenshots/u5_treinos_revisao_dia_412x915.png`
   - *Descrição:* Apresenta a central de treinos com o card "Revisão do Dia" conectado à fonte unificada e as abas alinhadas com a terminologia D12.

---

## 9. Próxima Fase (Fase U6)

A próxima fase prevista no Plano v3 é a **Fase U6 — Treino tático do estilo Cebraspe, cronômetro e penalização**:
- Cronômetro tático com calibração Cebraspe (tempo médio por item C/E: ~72 a 90 segundos).
- Mecanismo tático de decisão deliberada: marcar com certeza, arriscar conscientemente ou **"deixar em branco"** para neutralizar penalização (-1).
- Análise de calibragem metacognitiva pós-treino (escore bruto vs escore líquido Cebraspe).
