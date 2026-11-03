# DESIGN.md — Papel e Tinta

Sistema visual do HNC (Heuller na Câmara). Este arquivo documenta o que **já está no código**; a fonte de verdade é `src/index.css` (tokens) e os ADRs em `docs/adr/`. Se os dois divergirem, vale o código, e este arquivo deve ser corrigido.

Escopo: **somente aparência e comportamento visual**. Texto de estudo (teoria, questões, simulados, checkpoints) não faz parte deste documento e não deve ser alterado por mudanças de design.

## 1. Princípios

- **Papel e tinta:** fundo creme, texto em azul-marinho, destaque âmbar. Leitura longa no celular vem primeiro; o desktop herda o mesmo sistema.
- **Editorial, sem ruído:** separar por respiro, plano de fundo e tipografia, não por linhas (ADR-002).
- **Previsível:** alturas fixas onde o layout depende delas (ADR-003) e um nível de cartão por nível de hierarquia.
- **Contraste medido, não presumido:** todo par texto/fundo passa no axe nos dois temas.

## 2. Tipografia

| Papel | Família | Uso |
| --- | --- | --- |
| Serifa | `Source Serif 4` (fallback Georgia) | Títulos (inclusive o h1 de cada página) e texto corrido de leitura |
| Sans | `Inter` | Interface: botões, selos, rótulos, navegação |
| Mono | `JetBrains Mono` | Códigos, notações, numeração técnica |

Variáveis: `--font-serif`, `--font-sans`, `--font-mono`. Classes: `font-serif`, `font-sans`, `font-mono`.

Regras:
- Hierarquia de títulos sem saltos: h1 (página) → h2 (seção) → h3 (item). Painéis reutilizáveis que podem aparecer em dois níveis recebem o nível por prop (`nivelTitulo` em `PainelEstudoReverso`).
- Campos de formulário a **16px** no celular, para o iOS não dar zoom.
- `-webkit-text-size-adjust: 100%` já está na raiz.

## 3. Cores

Sempre usar **token**, nunca cor literal. `text-white` e `bg-white` para texto sobre preenchimento sólido foram substituídos por `on-*` (rodada 1) e não devem voltar.

### 3.1 Base

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#FAF7F0` | `#0D1220` | Fundo da página |
| `--surface` | `#FFFFFF` | `#141B2E` | Cartões e painéis |
| `--surface-3` | `#F2EEE4` | `#1B2440` | Planos rebaixados |
| `--border` | `#E4DED0` | `#2A3555` | Contorno padrão |
| `--border-strong` | `#CBC3AE` | `#3B4764` | Contorno em hover/ênfase |
| `--ink` | `#1A2238` | `#E9ECF5` | Texto principal |
| `--ink-2` | `#4A5468` | `#A9B2C7` | Texto secundário |
| `--ink-3` | `#5C6579` | `#8F9AB3` | Texto terciário |

Também existem `--surface-1`, `--surface-2` e `--border-subtle`; consulte `src/index.css` antes de usá-los.

### 3.2 Ação e destaque

| Token | Claro | Escuro | Observação |
| --- | --- | --- | --- |
| `--primary` / `--primary-text` | `#16244A` / `#FFFFFF` | `#FBBF24` / `#0D1220` | Botão principal: marinho no claro, âmbar no escuro |
| `--accent` / `--accent-text` | `#92400E` / `#FFFFFF` | `#FBBF24` / `#0D1220` | Destaque, estado selecionado, selos |
| `--accent-soft` | `#FEF3C7` | `#2E2305` | Fundo suave de destaque |
| `--accent-hover` | `#78350F` | `#FCD34D` | Hover do destaque |
| `--accent-fill` | `#FBBF24` | `#FBBF24` | Preenchimentos decorativos (barras, marcadores) |

Par obrigatório: usar `--accent` com `--accent-text` e `--primary` com `--primary-text`. No escuro, o texto sobre âmbar é escuro; por isso `text-white` quebra o contraste.

### 3.3 Semânticas

| Significado | Sólido | Suave | Texto sobre sólido |
| --- | --- | --- | --- |
| Certo / ok | `--ok` | `--ok-soft` | `--on-ok` |
| Errado | `--err` | `--err-soft` | `--on-err` |
| Informação | `--info` | `--info-soft` | `--on-info` |
| Alerta (Cebraspe) | `--alerta` | `--alerta-soft` | — |

Claro: `--ok #166534`, `--err #B91C1C`, `--info #1D4ED8`, `--alerta #9F1239`, e os três `--on-*` são `#FFFFFF`. Escuro: `--ok #4ADE80`, `--err #F87171`, `--info #60A5FA`, `--alerta #FB7185`, e os três `--on-*` são `#0D1220` (os preenchimentos são claros).

### 3.4 Módulos

Cada módulo tem quatro tokens: `--mN-solid`, `--mN-soft`, `--mN-text`, `--mN-border`, de `m1` a `m14`, definidos em OKLCH (claro: luminosidade 0,50 no sólido e 0,96 no suave). Utilitários: `bg-mN`, `bg-mN-soft`, `text-mN-text`, `border-mN-border`.

## 4. Superfícies, bordas e sombras

Três níveis de cartão, um por nível de hierarquia:

| Nível | Classes | Quando |
| --- | --- | --- |
| Seção | `rounded-2xl shadow-editorial-sm` | Bloco principal de uma tela |
| Peça | `rounded-xl shadow-editorial-xs` | Cartão dentro de uma seção |
| Detalhe | `rounded-lg`, sem sombra | Selo, campo, item de lista |

Sombras do sistema: `shadow-editorial-xs`, `-sm`, `-md`, a base `shadow-editorial`, `-lg` e `-xl`. Antes de usar uma classe de cor ou sombra nova, confirme que ela existe em `@theme` ou como `@utility` em `src/index.css`: classes inexistentes não geram erro, apenas deixam de ter efeito (foram achadas 11 assim na auditoria).

## 5. Linhas e separadores (ADR-002)

Proibido: `<hr>`, barras horizontais decorativas e `border-b` puramente decorativo. Separar com `space-y-*`/`gap-*`, contraste entre `bg-surface` e `bg-bg` e hierarquia tipográfica.

Exceção funcional (ADR-003): a `TeoriaStickyBar` usa `bg-surface border-b border-border` porque precisa de plano opaco e limite visível ao rolar. Borda que cumpre função estrutural é permitida; borda que só enfeita não é.

## 6. Layout e espaçamento

- **Cabeçalho fixo (ADR-003):** `h-14` (56px) no mobile e `sm:h-16` (64px) no desktop. O breadcrumb fica fora do `<header>` e rola junto com a página. A barra de contexto da Teoria usa `sticky top-14`.
- **Conteúdo útil:** o `main` reserva `pb-[calc(6rem+env(safe-area-inset-bottom,0px))]` no celular por causa da barra inferior.
- **Cabeçalho responsivo (rodada 9):** a marca e o nome aparecem a partir de `lg`; o "/ título" a partir de `min-[1600px]`; selo e subtítulo a partir de `min-[1800px]`; os rótulos das abas a partir de `xl` (abaixo disso, só ícone com `title`). As 21 combinações de largura e pior caso testadas cabem sem estouro.
- **Armadilha do Tailwind v4:** `m-0` num filho anula o `space-y-*` do pai, porque o `space-y` usa `:where` (baixa especificidade). Em contêineres com `space-y`, não zerar margem de filhos.

## 7. Componentes

- **Selos e badges:** texto curto com `whitespace-nowrap`; quando houver risco de quebrar, o contêiner usa `flex-wrap` com `gap-x`/`gap-y`. Selo sobre fundo âmbar usa `bg-accent-text/20 text-accent-text`.
- **Estado selecionado:** deve ser visível sem depender só de cor e declarado com `aria-pressed` (segmentado Estudo/Prova do Simulado) ou `aria-current`.
- **Alvos de toque:** no mínimo 44px de altura em controles interativos no celular.
- **Feedback de pressão:** `active:scale` sutil em botões (já em 31 lugares); manter nos novos.
- **Foco:** classe `foco` para anel de foco visível; nunca remover o contorno sem substituto.
- **Diálogos e painéis roláveis:** `overscroll-contain` no scroller (já há regra global para `[role="dialog"]`); região rolável focável por teclado recebe `tabIndex={0}` e `aria-label`.
- **Marcos:** só um `main`/`nav`/`region` com o mesmo nome por tela. Painéis reutilizáveis usam `div role="group"` em vez de `section`.
- **Botões:** `user-select: none` e `-webkit-touch-callout: none` já são globais; texto que deve ser selecionável usa `.select-text`.

## 8. Movimento

- **Transições:** listar só as propriedades que mudam. Cor: `transition-colors`; opacidade: `transition-opacity`; combinações: `transition-[color,background-color,box-shadow]`. Não usar `transition-all` em elementos novos (rodada 10 trocou 127 dos 158 usos).
- **Exceção legítima:** barra de progresso com `style={{ width }}` anima a largura de propósito.
- **Redução de movimento:** o app usa `MotionConfig reducedMotion="user"` e regras `prefers-reduced-motion` no CSS.
- **Aviso de atualização do service worker:** não interrompe o simulado em andamento; só pausa nessa tela.

## 9. Tema e PWA

- Tema claro e escuro por classe `html.dark`, persistido em `localStorage` (`heuller_camara_v2_theme`).
- `index.html` declara duas metas `theme-color` (`#FFFFFF` e `#141B2E`) por `prefers-color-scheme`; `useThemeStore` as atualiza ao trocar de tema.
- **Divergência conhecida:** o `theme_color` do manifest PWA continua azul-marinho e não acompanha o tema.

## 10. Como validar uma mudança de design

1. `tsc`, `oxlint` e a suíte de testes sem erros.
2. axe nos dois temas, em celular e desktop, nas telas afetadas e nos overlays abertos.
3. Sem overflow horizontal em 360, 390 e 1440 px.
4. Comparar hover/estado final antes e depois quando trocar classes de transição.
5. Confirmar que nenhum arquivo de conteúdo entrou no diff.

## 11. Limites conhecidos

- Nada foi validado em aparelho físico (toque longo, barra de status, overscroll, área segura).
- Sem teste de teclado ponta a ponta nem leitor de tela real.
- Abas só com ícone entre 768 e 1279 px não passaram por teste com usuários.
- Valores deste documento foram lidos de `src/index.css` em 2026-11-03; tokens novos ou alterados depois disso não estão aqui.
