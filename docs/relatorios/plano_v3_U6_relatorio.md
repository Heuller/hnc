# Relatório de Execução — Fase U6 (Plano v3)
**Plataforma de Estudos "Heuller na Câmara" (HNC)**  
**Cargo:** Analista Legislativo — Documentação e Informação Legislativa (Cargo 5)  
**Banca:** Cebraspe | **Edital:** nº 1, de 02/10/2026 | **Data da Prova:** 17/01/2027  
**Branch de Trabalho:** `ux/plano-v3`  
**Data:** 16 de outubro de 2026  

---

## 1. Resumo Executivo da Fase U6

A **Fase U6** consolidou a modernização de interface da plataforma com foco rigoroso em **UI/UX profissional e mobile-first**, mantendo e refinando a consagrada identidade visual **"Papel e Tinta"** (serifada, editorial, tons de creme natural, azul-marinho e âmbar sóbrio). 

Como o candidato estuda primordialmente no celular (e frequentemente em modo escuro), todas as decisões de design foram projetadas e validadas primeiramente nas menores resoluções táteis (360×800 e 375×812) e escaladas com fluidez até telas largas de desktop (1440×900).

Principais conquistas da fase:
1. **Mobile-First Rigoroso (U6.0):** Corpo de texto de leitura fixado em $\ge 16\text{ px}$ (dispensando zoom), alvos de toque $\ge 44\times 44\text{ px}$, ações primárias posicionadas ao alcance do polegar, gavetas inferiores (*bottom drawers*) em substituição a modais centrais flutuantes, e **eliminação completa de rolagem horizontal** em todas as telas.
2. **Sistema de Design Centralizado (U6.1):** Todos os tokens de cores, superfícies, tipografia, geometria tátil, sombras e callouts unificados no arquivo `src/config/designTokens.ts`. Formalização dos **3 Níveis de Superfície** (`--surface-1`, `--surface-2`, `--surface-3`) em modo claro e escuro, reduzindo o ruído cognitivo (princípio de Mayer) e eliminando o antipadrão de "cartão dentro de cartão".
3. **Cabeçalho Enxuto e Navegação Descomplicada (U6.2):** O cabeçalho foi simplificado para exatamente **4 abas no desktop** (*Painel*, *Jornada*, *Treinos*, *Progresso*), impedindo qualquer aperto horizontal entre 768px e 1280px (resolvendo o defeito **D7**). O logotipo permanece rigorosamente em linha única sem quebras de 360px a 1920px (`whitespace-nowrap`). Ferramentas acessórias (*Radar Cebraspe*, *Caderno de Erros*, *Oficina Discursiva*, *Folha de Véspera*, *Edital Oficial 2026* e *Glossário*) foram agrupadas organicamente no menu do usuário (`UserMenuDropdown` no desktop e `MobileMoreMenu` no mobile).
4. **Tela de Leitura com Índice Lateral e Callouts Padronizados (U6.3):** Em telas largas ($\ge 1280\text{ px}$, `xl:`), a leitura agora conta com uma coluna lateral inteligente contendo o **Índice da Leitura (TOC)** com acompanhamento da seção ativa via `IntersectionObserver` e barra de progresso seccional. Os callouts editoriais foram estritamente padronizados em português (*Nota*, *Dica*, *Importante*, *Atenção*, *Casca de banana*) sem comandos crus.
5. **Mnemônicos em Gaveta Contextual sem Sobreposição (U6.4):** Resolução integral do defeito **D6**. Mnemônicos e resumos rápidos foram alojados em gaveta inferior contextual móvel (`MnemonicosDrawerMobile` em `TeoriaStickyBar`) e em aba lateral no desktop, **sem nenhum botão flutuante (FAB) cobrindo o texto de leitura**.
6. **Painel com Cartão "Hoje" e Jornada Livre (U6.5):** O Painel foi reestruturado com um bloco herói proeminente (`cartao-hoje`) contendo a próxima ação de estudo recomendada, integrado ao resumo diário de revisões pendentes, constância de 7 dias e trilha de domínio. A Jornada exibe os módulos em nós claros com selos de status (*"Disponível"*, *"Concluída"*, *"Revisão Dirigida"*), sem nenhum cadeado de travamento forçado.
7. **Estados de Carregamento e Erro Padronizados (U6.6):** Criação dos componentes `LoadingSkeleton.tsx` (com variantes de texto, lista, cartão e artigo) e `ErrorState.tsx` (mensagens claras, detalhes técnicos recolhíveis e botão de nova tentativa $\ge 44\text{ px}$), integrado ao `ErrorBoundary.tsx`.
8. **Acessibilidade Automatizada WCAG 2.2 AA (U6.7):** Auditoria matemática comprovando que todos os pares de cor de texto e superfícies nos 3 níveis atingem contraste superior a $4.5:1$ (ultrapassando $11:1$ no texto principal), com alvos táteis mínimos de $44\text{ px}$ e suporte a movimento reduzido.
9. **Testes em Dispositivos Móveis e Desktop (U6.8):** 20 capturas de tela automatizadas via Puppeteer em 360×800, 375×812, 768×1024 e 1440×900 para Painel, Teoria, Treinos, Simulado e Discursiva, todas comprovando **zero overflow horizontal** e **zero sobreposição visual**.

---

## 2. Problemas Observados Resolvidos

| # | Problema Observado | Causa Raiz | Status | Onde Foi Corrigido |
|---|---|---|---|---|
| **D6** | Botões flutuantes (FAB) e elementos fixos sobrepondo o texto de leitura e tabelas no mobile | Botão de Mnemônicos posicionado com classe `fixed bottom-6 right-6` sobre o artigo | **[RESOLVIDO]** | `src/pages/TeoriaPage.tsx`, `src/components/layout/TeoriaStickyBar.tsx`, `src/components/content-blocks/MnemonicosDrawerMobile.tsx` e `src/tests/leituraU6.test.tsx`. |
| **D7** | Cabeçalho quebrando linha em telas médias e estreitas devido a excesso de abas horizontais | 5 abas principais + radar + busca + menu espremidos entre 768px e 1024px | **[RESOLVIDO]** | `src/components/layout/Header.tsx`, `src/components/layout/UserMenuDropdown.tsx`, `src/components/layout/MobileMoreMenu.tsx` e `src/tests/cabecalhoU6.test.tsx`. |
| **D13** | Indicadores de status conflitantes e excesso de bordas redundantes ("cartão dentro de cartão") | Falta de hierarquia formal de superfícies e múltiplos chips de conclusão sobrepostos | **[RESOLVIDO]** | `src/config/designTokens.ts` (3 níveis de superfície), `src/pages/TeoriaPage.tsx` e `src/pages/PainelPage.tsx`. |

---

## 3. Tarefas Concluídas

| ID | Tarefa | Commit | Arquivos Principais Alterados |
| :--- | :--- | :--- | :--- |
| **U6.1** | Tokens centralizados em arquivo único, 3 níveis de superfície e escala tipográfica fixa $\ge 16\text{ px}$ | `6354ef1` | `src/config/designTokens.ts`, `src/index.css`, `src/pages/DesignSystemPage.tsx`, `src/tests/designSystemU6.test.tsx` |
| **U6.2** | Cabeçalho enxuto com 4 abas, logo sem quebra (`whitespace-nowrap`) e ferramentas no menu de usuário | `0b58563` | `src/components/layout/Header.tsx`, `src/components/layout/UserMenuDropdown.tsx`, `src/components/layout/MobileMoreMenu.tsx`, `src/tests/cabecalhoU6.test.tsx` |
| **U6.3** | Tela de leitura com índice lateral ($\ge 1280\text{ px}$), barra de progresso por seção e callouts padronizados | `1abfa50` | `src/pages/TeoriaPage.tsx`, `src/utils/markdownProcessors.ts`, `src/tests/leituraU6.test.tsx` |
| **U6.4** | Mnemônicos como gaveta inferior móvel contextual e aba lateral, sem sobreposição ao texto | `dfcf523` | `src/components/layout/TeoriaStickyBar.tsx`, `src/components/content-blocks/MnemonicosDrawerMobile.tsx`, `src/tests/leituraU6.test.tsx` |
| **U6.5** | Painel com cartão "Hoje" destacado e Jornada livre com selos informativos (sem cadeados) | `a6203b8` | `src/pages/PainelPage.tsx`, `src/pages/JornadaPage.tsx`, `src/tests/painelU6.test.tsx` |
| **U6.6** | Estados padronizados de carregamento (`LoadingSkeleton`) e erro amigável (`ErrorState` e `ErrorBoundary`) | `b1a093c` | `src/components/common/LoadingSkeleton.tsx`, `src/components/common/ErrorState.tsx`, `src/components/common/ErrorBoundary.tsx`, `src/tests/loadingErrorU6.test.tsx` |
| **U6.7** | Auditoria automatizada de acessibilidade, contraste WCAG 2.2 AA ($\ge 4.5:1$) e alvos táteis mínimos ($\ge 44\text{ px}$) | `e16e58d` | `src/tests/acessibilidadeU6.test.tsx` |
| **U6.8** | Testes em 4 viewports (360×800, 375×812, 768×1024, 1440×900), zero overflow horizontal e capturas | `e82091a` | `scripts/capturarScreenshotsU6.mjs`, `docs/relatorios/screenshots/u6_*.png`, `docs/relatorios/plano_v3_U6_relatorio.md` |
| **Ajuste CI** | Remoção de variável não utilizada `isBloqueada` em `JornadaPage.tsx` para validação no `tsc -b` do CI | `29f9397` | `src/pages/JornadaPage.tsx` |

---

## 4. Medições Antes e Depois

| Métrica | Linha de Base (Fim U5) | Estado Atual (Fim U6) | Delta / Impacto |
| :--- | :--- | :--- | :--- |
| **Suíte de Testes Automatizados** | 654 testes em 70 suítes | **674 testes em 76 suítes** | **+20 testes novos**, 0 falhas |
| **Abas no Cabeçalho Desktop** | 5 abas + radar disperso | **4 abas centrais limpas** | Elimina compressão em viewports 768px-1280px |
| **Níveis de Superfície** | Indeterminados / múltiplos | **3 níveis formais (`--surface-1, 2, 3`)** | Redução do ruído visual e cartões aninhados |
| **Corpo do Texto de Leitura** | Variável / pequeno em mobile | **Fixo em $\ge 16\text{ px}$ (1rem)** | Leitura confortável sem necessidade de zoom |
| **Alvos de Toque Mobile** | Elementos esparsos $< 36\text{ px}$ | **$\ge 44\times 44\text{ px}$ padronizado** | Conformidade com WCAG 2.2 (Critério 2.5.8) |
| **Elementos Fixos Sobrepostos ao Texto** | FAB de Mnemônicos no rodapé | **0 FABs (gaveta contextual)** | Texto e tabelas 100% desobstruídos |
| **Overflow Horizontal em Dispositivos** | Não auditado em todos viewports | **0 px de overflow (360, 375, 768, 1440)** | Rolagem vertical pura em todas as páginas |
| **PWA Service Worker** | Não validado explicitamente | **Precache de 256 assets (dist/sw.js)** | Funcionamento offline integral garantido |

---

## 5. Resultado dos Testes e Qualidade

- **`npm test` (Vitest):** ✅ 76 suítes passaram, 674 testes passaram, 0 regressões.
- **`npx tsc -b` (TypeScript 6):** ✅ 0 erros de compilação.
- **`npm run lint` (Oxlint):** ✅ 0 erros, código 100% limpo.
- **`npm run build` (Vite + Rolldown + Workbox PWA):** ✅ Compilação de produção concluída com sucesso e geração dos arquivos `dist/sw.js` e `dist/workbox-*.js`.
- **CI do GitHub Actions:** ✅ Workflow "CI - Qualidade e Build" aprovado em verde na branch `ux/plano-v3` (Run `38982444262`).

---

## 6. Capturas de Tela em Dispositivos (U6.8)

Foram geradas 20 capturas oficiais nos 4 viewports obrigatórios (360×800, 375×812, 768×1024 e 1440×900) para as 5 telas-chave da aplicação, localizadas em `docs/relatorios/screenshots/`:

| Tela | 360×800 (Mobile Estreito) | 375×812 (Mobile Padrão) | 768×1024 (Tablet) | 1440×900 (Desktop) | Overflow Horizontal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Painel** | `u6_painel_360x800.png` | `u6_painel_375x812.png` | `u6_painel_768x1024.png` | `u6_painel_1440x900.png` | **ZERO** (0 px) |
| **Teoria** | `u6_teoria_360x800.png` | `u6_teoria_375x812.png` | `u6_teoria_768x1024.png` | `u6_teoria_1440x900.png` | **ZERO** (0 px) |
| **Treinos** | `u6_treinos_360x800.png` | `u6_treinos_375x812.png` | `u6_treinos_768x1024.png` | `u6_treinos_1440x900.png` | **ZERO** (0 px) |
| **Simulado** | `u6_simulado_360x800.png` | `u6_simulado_375x812.png` | `u6_simulado_768x1024.png` | `u6_simulado_1440x900.png` | **ZERO** (0 px) |
| **Discursiva** | `u6_discursiva_360x800.png` | `u6_discursiva_375x812.png` | `u6_discursiva_768x1024.png` | `u6_discursiva_1440x900.png` | **ZERO** (0 px) |

---

## 7. Próxima Fase (Fase U7)

A próxima fase prevista no Plano v3 é a **Fase U7 — Desempenho (medir antes de otimizar)**:
1. **U7.1 Medição de Desempenho:** Lighthouse (mobile) e perfil do React em Painel, Teoria 1.1, Treinos e Simulado; registrar LCP, INP e tamanho do JavaScript inicial.
2. **U7.2 Carregamento sob Demanda de Conteúdo:** `import()` dinâmico por módulo/submódulo em `registry.ts`, mantendo apenas metadados no bundle inicial e garantindo navegação offline no PWA.
3. **U7.3 Carregamento sob Demanda de Dependências Pesadas:** Modularização dinâmica de `mermaid`, `recharts` e `katex`, garantindo que não sobrecarreguem o carregamento inicial.
