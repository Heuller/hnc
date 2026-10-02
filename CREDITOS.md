# Créditos e Atribuições — Identidade Visual e Ilustrações

Este documento registra a autoria, especificações técnicas, linguagem visual e diretrizes das ilustrações e componentes gráficos da plataforma **Heuller na Câmara** (HNC).

---

## 1. Diretriz e Linguagem Visual: "Ex-Libris / Gravura Editorial"

* **Conceito Estético:** Tradição tipográfica e biblioteconômica com traço clássico de gravura/ex-libris sobre papel de linho. Evita deliberadamente linguagem infantil, lúdica, cartoons ou estética de gamificação rasa (sem mascotes, confetes ou medalhas plásticas).
* **Especificação Técnica do Traço:**
  * Espessura de linha padronizada: `1.2px` a `1.8px` (nominal `1.5px`).
  * Terminações e junções: `stroke-linecap="round"` e `stroke-linejoin="round"`.
  * Geometrias suaves e arcos clássicos com cantos arredondados.
* **Paleta Duotom Adaptativa:**
  * Uso de `currentColor`, variáveis CSS de tema (`solidVar`, `var(--color-ink)`, `var(--color-surface)`, `var(--color-border)`) e opacidades calibradas (`0.06` a `0.2` para preenchimentos, `0.3` a `0.7` para hachuras).
  * Funcionamento perfeito e nativo tanto no modo claro (papel marfim/linho) quanto no modo escuro (grafite de biblioteca noturna).
* **Acessibilidade e Semântica:**
  * Gráficos decorativos usam `aria-hidden="true"`.
  * Gráficos temáticos e informativos usam `role="img"` e `aria-label` descritivo.
* **Orçamento de Bytes:**
  * 100% vetorial em SVG inline puro (zero imagens raster JPEG/PNG/WebP em ilustrações).
  * Menos de 4 KB por elemento e menos de 40 KB no conjunto completo, mantendo a performance de carregamento e precache PWA instantâneos.
* **Movimento e Animação:**
  * Transições suaves de opacidade e elevação respeitando estritamente a preferência do sistema operacional (`prefers-reduced-motion: reduce`).

---

## 2. Inventário de Emblemas por Módulo (`ModuleEmblems.tsx`)

Criados originalmente sob medida para o projeto, inspirados na literatura canônica da Ciência da Informação e nos marcos temáticos do edital da Câmara dos Deputados:

| Emblema | Dimensões | Módulo Temático | Metáfora Visual da Gravura |
| :--- | :---: | :--- | :--- |
| **M1** | 64×64 | Fundamentos e Teoria | Livro clássico aberto ladeado por colunas arquitetônicas e marcador de página. |
| **M2** | 64×64 | Representação Descritiva | Fichário clássico de madeira de carvalho com gavetas, puxadores de latão e ficha catalográfica inclinada. |
| **M3** | 64×64 | Representação Temática | Estante de biblioteca com volumes alinhados e árvore hierárquica de classes (CDD / CDU). |
| **M4** | 64×64 | Recuperação da Informação | Lupa ótica de pesquisa sobre rede relacional de nós, descritores e tesauros. |
| **M5** | 64×64 | Gestão de Unidades e Serviços | Prancheta técnica de avaliação sobreposta a balança equilibrada de tomada de decisão. |
| **M6** | 64×64 | Tecnologia da Informação | Livro com circuitos integrados, nó de servidor de dados e pixels de automação. |
| **M7** | 64×64 | Preservação e Arquivos | Caixa de arquivo permanente (box arquivístico), orifício de manuseio e selo de conservação. |
| **M8** | 64×64 | Normalização Documentária | Página A4 estruturada com margens normalizadas, régua milimetrada e esquadro técnico (ABNT). |
| **M9** | 64×64 | Produção Científica | Fascículo de periódico aberto com colunas de dispersão bibliométrica (Leis de Bradford e Lotka). |
| **M10** | 64×64 | Legislação, Ética e Cidadania | Pergaminho normativo encadernado com chancela e selo de cera oficial da chancelaria. |
| **Bloco G** | 64×64 | Conhecimentos Gerais | Ampulheta clássica com areia do tempo sobre pergaminho, marcando a prontidão para o edital. |

---

## 3. Ilustrações Contextuais (`ContextualIllustrations.tsx`)

| Ilustração | Função na Plataforma | Elementos Gráficos |
| :--- | :--- | :--- |
| **`IllustrationLogin`** | Tela de Login / Gabinete de Estudos | Arco monumental da biblioteca, estantes em perspectiva com livros, mesa solene, luminária de leitura e tinteiro. |
| **`IllustrationPortal`** | Modal de Portais de Revisão $P_k$ | Pórtico com colunas clássicas, arquitrave com chave de abóbada e fechadura de passagem. |
| **`IllustrationConclusao`** | Conclusão de Módulo / Desafio (85%+) | Chancela de cera circular com fitas de seda, coroa de louros de gravura e check de validação canônica. |
| **`IllustrationBloqueio`** | Estados Bloqueados na Trilha | Portão de ferro forjado e cadeado clássico de latão com fechadura reforçada. |
| **`IllustrationVazio`** | Sem Revisões Pendentes / Zero Erros | Prateleira em madeira nobre com um livro em repouso e xícara quente com vapor suave de tranquilidade. |
| **`IllustrationDiscursiva`** | Treino de Redação e Peça Técnica | Lauda pautada de manuscrito, tinteiro sextavado e pena caligráfica. |

---

## 4. Tipografia e Iconografia

* **Famílias Tipográficas:**
  * **Inter:** Interface de usuário, métricas, botões e controles (legibilidade estrita em telas retina e compactas).
  * **Source Serif 4:** Títulos editoriais, teoria profunda, citações de doutrina e enunciados discursivos.
  * **JetBrains Mono:** Códigos, identificadores, contadores de tempo, fórmulas e metadados.
* **Ícones de Ação:**
  * Biblioteca **Lucide React** com espessura uniforme calibrada em `strokeWidth={1.75}`, preservando coerência visual com as gravuras ex-libris.
