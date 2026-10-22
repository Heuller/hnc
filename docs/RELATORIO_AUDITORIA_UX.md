# Relatório de Auditoria — UX/UI e Técnica (Fases 3 e 4)
**Data:** Outubro de 2026  
**Branch:** `auditoria/outubro-2026`  

---

## Fase 4 — Auditoria Técnica

| Verificação | Resultado |
|---|---|
| `npm run lint` (oxlint) | 0 erros, 0 warnings (os 2 warnings vinham de scripts temporários da Fase 2, arquivados em `archive/scripts-auditoria/`) |
| `npx tsc -b` | 0 erros |
| `npm test` | 114 arquivos, 893 testes aprovados (3 novos em `auditoriaUxOutubro2026.test.tsx`) |
| `npm run build` | 0 erros; orçamento de pacote respeitado (entry 255,8 KB, vendor-core 216,3 KB, precache 4,78 MB) |

### `any` substituídos por tipos precisos
- `EditorialDiagram.tsx`, `DiscursivaPage.tsx`: `catch (err: any)` → `catch (err: unknown)` com `instanceof Error`.
- `CronometroDiscursiva.tsx`: `useRef<any>` → `useRef<ReturnType<typeof setInterval>>`.
- `questoesElegiveis.ts`: `fonteOriginal?: any` → `{ revisar?: boolean; tipo?: string }`.
- `SimuladoPage.tsx`: `(f: any)` e `(sub: any)` removidos (tipos inferidos de `ModuloFilho`).
- `progressoEngine.ts`: `simuladoTentativas: any[]` → `TentativaSimuladoModulo & Partial<SimuladoFinalizado>`.

`any` remanescentes (fora do escopo desta rodada): nós de AST em `markdownProcessors.ts`/`tableProcessors.ts`, `lazyWithRetry` em `App.tsx`, migrações de dados legados em `useProgressStore.ts`/`migracaoTentativas.ts`/`tentativasSyncService.ts`, `respostaDada` em `exercicios/types.ts`.

### Pendência encontrada (não corrigida — exige decisão de produto)
- **[progressoEngine] Simulado de módulo nunca é contabilizado:** `derivarProgresso` filtra `historicoSimulados` por `moduloId`/`targetId`/`moduloNumero` e lê `aproveitamento`/`notaConsolidada`, mas `SimuladoFinalizado` não possui nenhum desses campos (tem `simuladoId` e `aproveitamentoPercent` em escala 0–100, enquanto o limiar `minimoSimuladoModulo` é 0,80). Resultado: `simuladoTentativasCount` é sempre 0 e `simuladoAprovado` sempre `false`. Sem impacto atual porque `simuladoObrigatorioParaAvancar = false`, mas a regra quebra se a trava for reativada. O `any` escondia o problema; o tipo novo o documenta.

---

## Bugs de Acessibilidade Corrigidos

- **[ItemCE, SimuladoPage, ExercicioX2, ExercicioX5, F1CeSimples, ConfidenceSelector, SimuladoAdaptativoModal]:** atalhos de letra/número disparavam com modificadores — **Ctrl+C para copiar um trecho julgava o item como CERTO** (e o `preventDefault` ainda bloqueava a cópia); Ctrl+E/Ctrl+B idem → atalhos ignoram Ctrl/Cmd/Alt (WCAG 2.1.4). SimuladoPage também passou a ignorar `SELECT` e `contentEditable`. Coberto por teste.
- **[AuthModal]:** `<label>` de usuário e senha não associados aos inputs → `htmlFor`/`id`.
- **[DiscursivaPage]:** labels de Título, Tipo e Enunciado do novo tema não associados → `htmlFor`/`id`; textarea da resposta sem nome acessível → `aria-label`.
- **[PainelCalibracaoHumana]:** 3 sliders de pontuação e o campo de erros gramaticais sem nome acessível → `aria-label`.
- **[GlobalSearchModal, CadernoErrosPage, DevRascunhosPage]:** campos de busca só com placeholder → `aria-label`.
- **[ProgressoPage]:** input de arquivo de importação sem nome → `aria-label`.
- **[KeyboardShortcutsModal, ReaderPreferencesModal]:** botão fechar só com ícone e alvo de ~24px → `aria-label="Fechar"`, `type="button"`, alvo de 44×44px e foco visível.
- **[GlobalSearchModal]:** botão "limpar busca" só com ícone → `aria-label` e alvo de 44×44px.
- **[UserMenuDropdown]:** switch Modo Livre sem nome acessível → `aria-label`.
- **[ModuleProgressRing]:** SVG decorativo sem `aria-hidden`; percentual só em `title` → SVG com `aria-hidden`, contêiner `role="img"` com `aria-label`.
- **[App / PageSkeletonLoader]:** região `aria-live` sem texto (leitor de tela não anunciava nada) → `role="status"` com mensagem contextual; skeleton com `aria-hidden`.

### Verificado e já conforme
- Feedback CERTO/ERRADO em todos os exercícios (X2–X9), ItemCE e simulado: ícone + texto + cor.
- Ícones lucide-react (v1.47) recebem `aria-hidden="true"` automaticamente quando não têm rótulo; ilustrações SVG próprias já declaram `role`/`aria-label`.
- `outline: none` só existe na classe `.foco`, que define substituto `:focus-visible` (outline + anel âmbar).

---

## Melhorias UX Implementadas

- **[Loading contextualizado]:** o fallback de carregamento de tela agora diz o que está sendo preparado ("Preparando simulado...", "Carregando módulo de teoria...", "Abrindo seu Caderno de Erros..." etc., uma mensagem por tela); a tela inicial diz "Preparando seu ambiente de estudos...".
- **[Estados vazios]:** Caderno de Erros vazio, Revisão do Dia (Leitner) sem cartões e histórico de simulados vazio agora têm ilustração (`IllustrationVazio`) + mensagem; o histórico de simulados ganhou título e botão "Fazer um simulado".
- **[Barra de progresso de leitura]:** linha âmbar de 3px fixa no topo da TeoriaPage, proporcional às seções lidas/total do submódulo (`role="progressbar"` com `aria-valuetext`; sem animação com `prefers-reduced-motion`).
- **[Breadcrumb na teoria]:** o breadcrumb do cabeçalho passou de "Início > Estudar > Submódulo 1.1" para "Início > Teoria > M1 Fundamentos > 1.1 Biblioteconomia". A TeoriaPage publica os rótulos no store de navegação, para não puxar o catálogo de conteúdo para o chunk de entrada.
- **[Atalhos de teclado no simulado]:** verificado — C/E/B/←/→ já têm hint visual `<Kbd>` nos botões e na legenda do desktop (sem alteração além da correção de modificadores acima).

---

## Inconsistências do Design System

### Corrigidas
- **[Callout `> [!CAUTION]` / "Casca de banana"]:** usava a paleta `rose-*` do Tailwind → passa a usar o token semântico `alerta-cebraspe` (#9F1239 claro / #FB7185 escuro) com fundo `alerta-soft`. Mantém borda esquerda vermelha e ícone de alerta (`AlertOctagon`).

### Verificadas e conformes
- Fundo de leitura `#FAF7F0` / `#0D1220`; `#FFFFFF` aparece só como `surface` de cartão (previsto nas diretrizes), nos botões deslizantes dos switches e na folha de resposta manuscrita (simula papel impresso — intencional).
- Nenhum gradiente cosmético ou efeito de brilho (glow) em `src/`.
- Fontes: Source Serif 4 (leitura), Inter (interface), JetBrains Mono (código), auto-hospedadas.
- Raios: `--radius-md` 12px, `--radius-lg` 16px.
- Os 5 alertas no estilo GitHub (`NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`) são normalizados em `markdownProcessors.ts` e renderizados como `<aside role="note">` com ícone e título em `ConteudoMarkdown.tsx`.

### Observação (não alterada)
- `--surface-2` está em `#FFFFFF`/`#141B2E`, enquanto as diretrizes (§6.1) definem `surface-2` como `#F2EEE4`/`#1B2440` — esses valores estão em `--surface-3`. É uma renumeração dos tokens com uso amplo; trocar agora mudaria o visual de dezenas de componentes, então fica registrado para decisão.
