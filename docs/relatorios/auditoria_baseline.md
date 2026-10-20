# Relatório de Linha de Base da Auditoria — P0

- **Data:** 20/10/2026
- **Branch de Execução:** `ux/plano-v3` (espelhada em `auditoria-2026-10`)
- **Tag:** `pre-auditoria-20261019`
- **Ambiente:** Node.js v24.6.0 / Windows x64 / PowerShell

---

## 1. Métricas da Linha de Base Medida

| Métrica | Linha de Base Original | Medição Real Atual (P14 + P15) | Status |
| :--- | :--- | :--- | :--- |
| **Suíte de Testes (Vitest)** | $\ge 706$ testes | **716 testes passando** (85 arquivos) | ✅ Superado (+10 testes) |
| **Erros de TypeScript (`tsc -b`)** | 0 erros | **0 erros** | ✅ 100% limpo |
| **Avisos do Linter (`oxlint`)** | $\le 57$ avisos | **36 avisos** (0 erros) | ✅ Reduzido em 37% |
| **Build de Produção (`vite build`)** | OK | **OK** (31.52s) | ✅ Concluído |
| **Orçamento Precache PWA** | $\le 13,3$ MB | **13.314 KiB (~13,0 MB)** | ✅ Respeitado |

---

## 2. Detalhamento dos Comandos Executados

### A. TypeScript (`npx tsc -b`)
- Resultado: **0 erros**. Compilação estrita limpa.

### B. Linter (`npx oxlint`)
- Resultado: **36 avisos e 0 erros**.
- Todas as 21 ocorrências de `no-useless-escape` em `src/content/modules/**` foram resolvidas no prompt P15.
- Restam apenas 36 avisos em componentes de UI que serão tratados nos prompts subsequentes (P4, P16, etc.).

### C. Testes Automatizados (`npx vitest run`)
- **Test Files:** 85 passed (85)
- **Tests:** 716 passed (716)
- Novos testes adicionados:
  - `src/tests/jornadaPortaoP14.test.tsx` (6 testes)
  - `src/tests/latexIntegridadeP15.test.tsx` (4 testes)

### D. Build & Orçamento de Pacote (`npm run build`)
- Chunks de produção gerados com sucesso.
- Precache do Service Worker: 221 entradas (13.314 KiB).
- `scripts/verificarOrcamentoPacote.mjs`: aprovado sem ressalvas.

---

## 3. Regras de Execução Estabelecidas
1. Um commit por item do relatório com mensagem no formato `fix(F-xx): ...`.
2. Nunca desligar testes existentes nem degradar a cobertura da plataforma.
3. Preservar a imutabilidade e persistência dos dados de progresso dos usuários.
4. Preservar rigorosamente os IDs estáveis de módulos, simulados e itens de questão.
