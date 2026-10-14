# Linha de Base de Qualidade Inicial — Plano v3 (Fase U0)
**Data:** 14/10/2026 · **Branch:** `ux/plano-v3`  
**Commit de Referência:** `4283eee` (U0.2) · Base: Fase 8 (`08785a3`)  

---

## 1. Sumário Executivo

Esta linha de base estabelece o marco zero de confiabilidade e integridade para as correções de UX/UI, renderização KaTeX/Markdown e pedagogia do **Plano v3**.

| Verificação | Ferramenta | Status | Métricas Principais |
|---|---|---|---|
| **Testes Unitários / Integração** | Vitest v5.0.3 | **100% Aprovado** | 46 arquivos de teste · 435 testes passando (0 falhas) |
| **Tipagem Estrita** | TypeScript Compiler (`tsc -b`) | **100% Aprovado** | 0 erros de compilação |
| **Qualidade de Código & Linter** | Oxlint v1.81.0 | **100% Aprovado** | 328 arquivos escaneados · 0 erros · 30 avisos cosméticos |
| **Compilação de Produção** | Vite v8.3.0 / Rolldown / PWA | **100% Aprovado** | Build em 2.01s · PWA com 220 assets pré-cacheados |

---

## 2. Detalhamento dos Testes Automatizados (`npm test`)

- **Total de Suítes Executadas:** 46
- **Total de Testes:** 435
- **Tempo de Execução:** ~7.25 segundos
- **Principais Suítes Validadas:**
  - `src/tests/activeRetrievalDynamicPairs.test.tsx` (2 testes): Validação de contagem dinâmica com 3 e 5 pares de autores (U0.2);
  - `src/tests/fase8SimuladosIntegridade.test.ts` (16 testes): Integridade dos simulados M10A (100Q), M10B (100Q) e Simulado Geral (180Q);
  - `src/tests/fase7RevisaoAgendador.test.ts` (13 testes): Agendamento de revisões espaçadas, ativação precoce e trilha reta final;
  - `src/tests/contentIntegrity.test.ts` (22 testes): Estrutura canônica de todos os módulos de Biblioteconomia;
  - `src/tests/cadernosE5Integrity.test.ts` (60 testes): Integridade dos cadernos formativos e questões Cebraspe;
  - `src/tests/moduloM13Completo.test.tsx` e `moduloM14Completo.test.tsx`: Renderização íntegra da teoria e modo foco em Língua Portuguesa e TI & Dados.

---

## 3. Verificação Estática de Tipagem (`npx tsc -b`)

- **Resultado:** Código 0 (limpo).
- **Cobertura:** Todos os arquivos de domínio (`src/domain/`), schemas Zod (`src/domain/schemas/`), páginas (`src/pages/`), componentes (`src/components/`) e testes (`src/tests/`).
- **Nota:** Schema de `CheckpointSchema` e `CebraspeQuestionSchema` alinhados com `habilidade` e `nivel` opcionais sem defaults forçados.

---

## 4. Auditoria de Linter (`npm run lint`)

- **Arquivos Inspecionados:** 328 arquivos
- **Regras Ativas:** 116
- **Erros:** **0**
- **Avisos (30 avisos menores não-bloqueantes):**
  - Caracteres de escape redundantes em tabelas de markdown (`\*` em vez de `*` em exemplos de sintaxe CDU);
  - Variáveis não utilizadas em scripts auxiliares (`scripts/generateTheoreticalPdf.ts`);
  - Chamadas de `setState` síncronas em `useEffect` de inicialização de simulado e diagramas (a serem refinadas na Fase U6 e U7).

---

## 5. Compilação de Produção e PWA (`npm run build`)

- **Tempo de Build:** 2.01s
- **Modo PWA:** `generateSW`
- **Cache Precache:** 220 entradas (12.766 KiB)
- **Principais Chunks:**
  - `simuladosRegistry`: 1.672 kB (541 kB gzip) — *Oportunidade de lazy-loading identificada para a Fase U7*;
  - `content-questions`: 1.810 kB (333 kB gzip);
  - `vendor-katex-markdown`: 682 kB (203 kB gzip);
  - `vendor-charts`: 483 kB (142 kB gzip);
  - `useProgressStore`: 313 kB (82 kB gzip).
