# 🏛️ DIRETRIZES E MANUAL DE EXECUÇÃO: HEULLER NA CÂMARA
**Plataforma de Alta Performance para o Concurso da Câmara dos Deputados**
*Cargo: Analista Legislativo — Área: Bibliotecário | Banca Examinadora: CEBRASPE / CESPE*

---

## 1. IDENTIFICAÇÃO E VISÃO GERAL DO PROJETO

* **Nome Oficial da Plataforma:** **Heuller na Câmara**
* **Instituição-Alvo:** **Câmara dos Deputados** (Congresso Nacional, Brasília/DF).
* **Cargo em Foco:** **Analista Legislativo — Atribuição: Bibliotecário**.
* **Banca Examinadora Oficial:** **CEBRASPE (antigo CESPE/UnB)**.
* **Repositório Local do Código:** \`c:/Users/bibli/Downloads/CEBRASPE/curso-revisao\`
* **Repositório GitHub:** \`https://github.com/Heuller/hnc\`
* **Endereço Web Ativo (Vercel Produção):** \`https://heuller.vercel.app/\`
* **Tecnologias Utilizadas:** React 19, TypeScript estrito, Vite, Tailwind CSS v4, Lucide React, Framer Motion (`motion`), Zod, Vaul, Zustand com `persist`, KaTeX (`rehype-katex`, `remark-gfm`), Recharts, Fontsource, `vite-plugin-pwa`, Vitest, Supabase (PostgreSQL, Auth e RLS), Vercel CI/CD.

### Objetivo Primordial
Transformar o antigo projeto de revisão em uma **grande plataforma definitiva de estudos avançados em Biblioteconomia**, com embasamento direto na literatura acadêmica e profissional canônica (livros clássicos, artigos seminais, normas da ABNT e legislação federal), ajustada de ponta a ponta à metodologia estrita e ao elevado nível de exigência da banca **CEBRASPE**.

---

## 2. METODOLOGIA DA BANCA CEBRASPE / CESPE

A metodologia do Cebraspe possui regras de engenharia de avaliação únicas no Brasil. O candidato e a plataforma devem operar sob os seguintes parâmetros:

### 2.1. O Formato do Item
* **Sentenças Declarativas Afirmativas:** Não há perguntas diretas com múltiplas alternativas (A, B, C, D, E). O modelo consiste em um contexto temático seguido por itens declarativos para julgamento estrito entre **CERTO (C)** ou **ERRADO (E)**.
* **Complexidade Sintática:** Enunciados com períodos compostos por subordinação, emprego de orações adverbiais concessivas (*embora, conquanto, a despeito de*), condicionais (*desde que, caso*) e termos restritivos (*exclusivamente, apenas, unicamente*). A armadilha frequentemente reside no detalhe do aposto explicativo ou na troca sutil de uma palavra-chave.

### 2.2. A Regra de Pontuação Líquida (Fator de Correção)
$$\text{Nota Líquida} = \text{Acertos (C)} - \text{Erros (E)}$$
* **1 Acerto:** $+1{,}00$ ponto positivo.
* **1 Erro:** $-1{,}00$ ponto (anula integralmente um item que o candidato acertou).
* **Deixar em Branco:** $0{,}00$ ponto (nem pontua, nem desconta; risco neutro).

### 2.3. Gestão Estratégica de Risco (A Decisão do Branco)
* Deixar em branco não é sinal de omissão, mas **estratégia matemática de aprovação**.
* *Cenário A (Afoito):* Responde 100 itens $\rightarrow$ 65 acertos e 35 erros $\rightarrow$ **Nota Líquida: 30 pontos**.
* *Cenário B (Estratégico Cebraspe):* Responde 75 itens com convicção e deixa 25 em branco $\rightarrow$ 68 acertos e 7 erros $\rightarrow$ **Nota Líquida: 61 pontos (Aprovado)**.
* A plataforma deve treinar ativamente o aluno nessa gestão de risco por meio do seletor e do botão **DEIXAR EM BRANCO**.

### 2.4. Simetria de Gabarito (Distribuição 50% / 50%)
* Em blocos de 100 ou 120 itens, o Cebraspe mantém uma simetria rigorosa em torno de **50% Certos e 50% Errados** (ex.: 51C / 49E ou 48C / 52E).
* Todos os simulados da plataforma devem respeitar obrigatoriamente essa proporção, com itens aleatorizados para impedir vícios de resposta.

### 2.5. Tipologia de Armadilhas (Cascas de Banana Mapeadas)
1. **Inversão Canônica de Termos:** Atribuir a um autor ou disciplina a definição de outra (ex.: trocar Ciência da Informação por Biblioteconomia; inverter Biblioteconomia dos Livros por dos Leitores; trocar 2ª Lei por 3ª Lei de Ranganathan).
2. **Generalização ou Restrição Ilícita:** Emprego de termos categóricos para tornar uma assertiva falsa (ex.: *"a informação como coisa restringe-se a livros em papel, excluindo objetos da natureza"* $\rightarrow$ Errado!).
3. **Anacronismos Históricos:** Atribuir a uma tecnologia passada efeitos modernos (ex.: *"a prensa de tipos móveis revolucionou a representação temática"* $\rightarrow$ Errado, revolucionou a circulação/difusão).
4. **Interdisciplinaridade Legislativa/Jurídica:** Contextualização das normas de biblioteconomia com o processo legislativo, fontes do direito (leis, jurisprudência, doutrina) e rotinas do Congresso Nacional.

---

## 3. MÉTODOS PEDAGÓGICOS CIENTIFICAMENTE COMPROVADOS

Para evitar apostilas extensas, passivas e cansativas que geram a falsa ilusão de competência (*fluency illusion*), a plataforma adota as descobertas da Psicologia Cognitiva e Ciência da Aprendizagem (**Dunlosky et al., 2013; Roediger & Karpicke, 2006; Sweller, 1988**):

### 3.1. Práticas Rejeitadas (Baixa Eficiência)
* ❌ Releitura passiva de textos intermináveis sem pausas de processamento.
* ❌ Grifar/destacar palavras de forma indiscriminada.
* ❌ Gamificação superficial e infantil (badges infantis, sons estridentes, avatares cosméticos e cronômetros de pânico que geram sobrecarga cognitiva extrínseca).

### 3.2. Práticas Adotadas (Alta Utilidade Comprovada)
1. **Prática de Recuperação Ativa (*Retrieval Practice* / *Testing Effect*):**
   * O cérebro consolida a memória de longo prazo ao ser forçado a evocar e reconstruir o conhecimento.
   * Aplicação: Micro-checkpoints inseridos dentro de cada tópico da leitura teórica + Simulado integral de 100 itens.
2. **Interrogação Elaborativa (*Elaborative Interrogation*):**
   * Em cada questão errada, o sistema não mostra apenas "gabarito E", mas desvela a **Armadilha da Banca** e a fundamentação canônica, forçando o estudante a processar o porquê do distrator.
3. **Calibração Metacognitiva (*Confidence-Based Learning*):**
   * Treinar o estudante a mensurar seu grau de certeza antes de julgar o item (avaliar se vale o risco ou se a conduta ideal é o branco).
4. **Matrizes Comparativas e Ancoragem Visual (*Dual Coding Theory*):**
   * Quadros sinópticos e tabelas estruturadas lado a lado para fixação de contrastes conceituais difíceis.

---

## 4. ARQUITETURA E ESTRUTURA DOS MÓDULOS

O curso é construído de forma modular, avançando área por área. Cada Macro-Módulo representa um grande eixo do edital e se subdivide em Módulos-Filhos verticais, culminando em um Simulado de 100 Questões C/E.

### 4.1. Estrutura Padrão de Cada Módulo-Filho
Cada submódulo conterá obrigatoriamente:
* **Identificação e Carga Horária:** Número (ex: 1.1), título preciso e tempo estimado em minutos.
* **Autores Canônicos em Destaque:** Lista dos teóricos centrais abordados.
* **⚠️ Alertas Cebraspe:** Boxes destacados em vermelho/laranja com as armadilhas mapeadas da banca naquele assunto específico.
* **Quadro Comparativo / Matriz Sinóptica:** Tabela analítica estruturada contrastando conceitos correlatos.
* **Teoria Densa com Fundamentação Rigorosa:** Texto teórico estruturado em blocos e tópicos, com citações diretas de livros clássicos e artigos das pastas do projeto (sem superficialidade).
* **Micro-Checkpoints de Recuperação Ativa:** 2 a 3 itens interativos no formato C/E ao final da leitura com validação e feedback instantâneos.
* **Resumo Esquematizado & Mnemônicos Estruturados:** Dados estritamente tipados via Zod em 4 formatos canônicos, eliminando markdown cru e blocos de código monospaçados: (1) Linha do Tempo histórica, (2) Fichas "Quem é Quem" de autores com chips de pegadinha e expansão interativa, (3) Pares de Pegadinha da Banca (afirmação x julgamento Cebraspe x porquê da indução a erro), e (4) Flashcards com autoavaliação. No desktop: coluna lateral fixa ("Resumo Rápido") com abas; no mobile: botão flutuante e bottom sheet (Vaul Drawer).

---

## 5. DIRETRIZES PARA OS SIMULADOS DE 100 QUESTÕES C/E

Ao final de cada Macro-Módulo, haverá um Simulado completo e exclusivo daquela grande área, obedecendo às seguintes regras:

1. **Volume Estrito:** Exatamente **100 questões**.
2. **Equiprobabilidade de Subtópicos:** As 100 questões são divididas equitativamente entre os módulos-filhos daquela área (ex.: 25 questões por submódulo em módulos com 4 divisões).
3. **Balanço Cebraspe Rigoroso:** Exatamente **50 Certas (C) e 50 Erradas (E)**, distribuídas de forma pseudoaleatória realista.
4. **Modo Estudo Guiado:**
   * O candidato visualiza o item, decide entre **CERTO**, **ERRADO** ou **EM BRANCO**.
   * Ao clicar, o sistema exibe imediatamente o resultado visual:
     * ✅ **Acerto (+1 pt líquido)**
     * ❌ **Erro (-1 pt líquido, com aviso de anulação de acerto)**
     * ⚪ **Em Branco (0 pt, sem risco)**
   * **Armadilha Cebraspe:** Card explicativo revelando a técnica de distorção da banca.
   * **Justificativa Canônica:** Citação do livro, autor, ano de publicação ou dispositivo legal que fundamenta o gabarito.
   * **Fonte Original:** Identificação do concurso real do Cebraspe (ex.: PC-DF 2025, UNEAL 2026, TCE-MG 2026, STJ 2024, TSE 2024, TJDFT) ou identificação como *Inédita Cebraspe / Especial Câmara dos Deputados*.
5. **Painel de Controle e Folha de Respostas:**
   * Grade numérica com 100 botões coloridos por status (Verde, Vermelho, Cinza, Borda Dourada para o item selecionado).
   * Filtros rápidos: *Todas (100)*, *Apenas Erros* (para revisão de pegadinhas), *Acertos*, *Em Branco* e *Pendentes*.
   * Placar em tempo real: Nota Líquida ($C - E$), Acertos Brutos, Erros Brutos, Em Branco e Aproveitamento %.
   * Atalhos de Teclado no Desktop: <kbd>C</kbd> para Certo, <kbd>E</kbd> para Errado, <kbd>B</kbd> para Em Branco, <kbd>→</kbd> e <kbd>←</kbd> para navegar.

---

## 6. DESIGN SYSTEM EDITORIAL: "PAPEL E TINTA" (PADRÃO V2 OFICIAL)

A interface serve à leitura atenta e ao estudo por longas horas, rejeitando o visual amador, gradientes cosméticos, brilhos (glow) e sombras coloridas. O conceito reitor é **"Papel e Tinta"**: sobriedade, precisão tipográfica e alto contraste. O tom âmbar atua como cor plana com função exclusiva de marca-texto.

### 6.1. Temas e Paleta Semântica (WCAG 2.2 AA)
Suporte nativo a Temas Claro e Escuro, sincronizados com `prefers-color-scheme` e alternador manual persistido. É proibido o uso de preto puro (#000000) e branco puro (#FFFFFF) como plano de fundo de leitura:

* **Tema Claro:**
  * Fundo (`bg`): `#FAF7F0` (papel editorial levemente aquecido)
  * Superfícies: `surface` `#FFFFFF`, `surface-2` `#F2EEE4`, `border` `#E4DED0`
  * Textos: `ink` `#1A2238` (tinta profunda, contraste 15.8:1), `ink-2` `#4A5468`
  * Destaques: `primary` `#16244A` (azul marinho institucional, texto branco), `accent` `#B45309` (marca-texto), `accent-soft` `#FEF3C7`
  * Feedback Funcional: `ok` `#166534` / `ok-soft` `#DCFCE7`, `err` `#B91C1C` / `err-soft` `#FEE2E2`, `alerta-cebraspe` `#9F1239` / `alerta-soft` `#FFF1F2`, `info` `#1D4ED8`
* **Tema Escuro:**
  * Fundo (`bg`): `#0D1220` (azul-noite profundo, reduz fadiga visual)
  * Superfícies: `surface` `#141B2E`, `surface-2` `#1B2440`, `border` `#2A3555`
  * Textos: `ink` `#E9ECF5` (papel iluminado), `ink-2` `#A9B2C7`
  * Destaques: `primary` `#FBBF24` (texto `#0D1220`), `accent` `#FBBF24`, `accent-soft` `#1B2440`
  * Feedback Funcional: `ok` `#4ADE80`, `err` `#F87171`, `alerta` `#FB7185`

* **Regra Inviolável de Estado:** O estado de julgamento NUNCA é comunicado apenas por cor. Deve conter obrigatoriamente ícone + rótulo textual + cor:
  * ✅ Certo (+1 ponto líquido)
  * ❌ Errado (-1 ponto líquido, anula uma questão certa)
  * ⚪ Em branco (0 pontos, abstenção estratégica)

### 6.2. Tipografia e Ritmo Vertical
* **Fonte de Leitura Profunda:** *Source Serif 4* (autohospedada via `@fontsource/source-serif-4`), corpo de 17–18px no desktop e 16px no mobile, `line-height` 1.6–1.7, coluna de 62–72 caracteres (`max-w-3xl`).
* **Fonte de Interface e Controles:** *Inter* (autohospedada via `@fontsource/inter`).
* **Código, Fórmulas e Atalhos:** *JetBrains Mono* (autohospedada via `@fontsource/jetbrains-mono`).
* **Tracking e Text-Wrap:** `letter-spacing` do corpo fixado em 0; títulos no máximo -0.01em (proibido o tracking negativo que funde palavras). Títulos com `text-wrap: balance` e parágrafos com `text-wrap: pretty`.

### 6.3. Espaço, Forma e Responsividade
* **Grade e Raios:** Grade modular de 8px; raios de curvatura de 12px (controles/botões) e 16px (cartões).
* **Acessibilidade e Toque:** Alvos de toque $\ge 44\times 44\text{px}$; respeito estrito às margens seguras `env(safe-area-inset-*)`.
* **Tabelas sem Rolagem Horizontal:** Em qualquer tela $\ge 320\text{px}$, tabelas e matrizes comparativas adaptam-se dinamicamente:
  * $\ge 768\text{px}$: `<table>` semântica com cabeçalho fixo.
  * $< 768\text{px}$: seletor por facetas segmentadas por coluna com modo alternativo "Ver tudo empilhado" em cartões.
* **Fórmulas Matemáticas:** Renderizadas estritamente com KaTeX (`rehype-katex`). Zero LaTeX cru exposto na interface.
* **Performance e Offline:** Lazy loading por rota (`React.lazy`), PWA offline (`vite-plugin-pwa`) e meta de Lighthouse $\ge 95$ em todas as categorias.

---

## 7. MAPA DOS MACRO-MÓDULOS DO CURSO

| Módulo | Macro-Área | Módulos-Filhos Previstos | Simulado 100Q | Status |
| :---: | :--- | :--- | :---: | :---: |
| **M1** | **Fundamentos da Biblioteconomia, Documentação e CI** | **1.1** História, Fronteiras & CI<br/>**1.2** Cinco Leis de Ranganathan & Releituras<br/>**1.3** Dado, Informação e Documento (Buckland, Briet)<br/>**1.4** Legislação, Código de Ética CFB & Atribuições | **100 Itens C/E**<br/>(50C / 50E) | **✅ CONCLUÍDO & NO AR** |
| **M2** | **Catalogação, Metadados e Modelos Conceituais** | AACR2r, RDA (*Resource Description and Access*), Formato MARC 21, FRBR / IFLA LRM e Dublin Core | 100 Itens C/E | Planejado |
| **M3** | **Classificação Documentária e Indexação** | Teoria da Classificação, CDD, CDU, CDDir (Dóris de Carvalho - Direito), Linguagens Documentárias e Tesauros | 100 Itens C/E | Planejado |
| **M4** | **Recuperação da Informação, Fontes e Usuários** | Estratégias de Busca, Álgebra Booleana, Fontes Jurídicas/Legislativas, DSI e Estudos de Usuários | 100 Itens C/E | Planejado |
| **M5** | **Gestão de Unidades de Informação e Coleções** | Planejamento Estratégico, Desenvolvimento de Coleções (Vergueiro), Avaliação e Marketing | 100 Itens C/E | Planejado |
| **M6** | **Bibliotecas Digitais, Repositórios e IA** | DSpace, OAI-PMH, Interoperabilidade, Repositórios Institucionais e IA em Bibliotecas | 100 Itens C/E | Planejado |
| **M7** | **Preservação, Conservação e Memória Institucional** | Preservação Física, Higienização, Restauração, Preservação Digital e Modelo OAIS | 100 Itens C/E | Planejado |
| **M8** | **Normalização Documental e ABNT** | NBR 6023 (Referências), NBR 10520 (Citações), NBR 6028 (Resumos), NBR 6027 (Sumários) e Artigos | 100 Itens C/E | Planejado |
| **M9** | **Comunicação Científica, Ciência Aberta e Métricas** | Leis Bibliométricas (Bradford, Lotka, Zipf), Acesso Aberto, Dados FAIR e Altmetria | 100 Itens C/E | Planejado |
| **M10** | **Legislação Federal e Contexto Legislativo** | Regimento Interno da Câmara, Processo Legislativo, LAI (Lei 12.527/11), LGPD (Lei 13.709/18) e Depósito Legal | 100 Itens C/E | Planejado |
| **M11** | **Raciocínio Lógico-Matemático (Conhecimentos Básicos - Cebraspe / Câmara dos Deputados)** | **11.1** Lógica Proposicional & Conectivos (Método dos Modelos Mentais de Johnson-Laird)<br/>**11.2** A Condicional Cebraspe ($P \to Q$), Equivalências (Contrapositiva e NÉOU) & Freio do Sistema 2<br/>**11.3** A Arte da Negação (Regra MANÉ) & Quantificadores Categóricos (Método PEA + NÃO e Euler-Venn)<br/>**11.4** Argumentação Lógica, Silogismos & Questões Reais da Câmara dos Deputados | 100 Itens C/E | **✅ CONCLUÍDO & DISPONÍVEL** |
| **M12** | **Língua Inglesa Instrumental (Conhecimentos Básicos - Cebraspe / Câmara dos Deputados)** | **12.1** Modelo Interativo-Compensatório & Leitura Estratégica (Stanovich & Rumelhart / Skimming & Scanning)<br/>**12.2** Marcadores Discursivos (Linking Words) & Conjunções de Transição Argumentativa (Halliday & Hasan)<br/>**12.3** Mecanismos de Coesão Textual, Referenciação Anafórica/Catafórica & Pronomes Relativos<br/>**12.4** Vocabulário Contextual, Falsos Cognatos, Modalizadores de Certeza/Possibilidade & Paráfrase Cebraspe | 100 Itens C/E | **✅ CONCLUÍDO & DISPONÍVEL** |

### 7.1. Metodologia Científica do Módulo M11 (Raciocínio Lógico do Zero)
Para atender às especificidades cognitivas do raciocínio lógico-matemático formal, o módulo M11 adota fundamentos da ciência cognitiva:
1. **Teoria dos Modelos Mentais (Philip Johnson-Laird):** A mente humana compreende lógica simulando cenários factuais possíveis (mundos verdadeiros), e não manipulando regras sintáticas cegas. Cada conectivo é ensinado via matriz de cenários.
2. **Controle de Carga Cognitiva (John Sweller - CLT):** Substituição da memorização forçada de tabelas de 20 linhas pela técnica do *Gatilho Único de Decisão* (o ponto de falha único de cada operador).
3. **Protocolo Freio do Sistema 2 (Evans & Kahneman):** Treinamento da pausa analítica contra o viés intuitivo de correspondência (*Matching Bias* e Falácia da Afirmação do Consequente no problema de Wason).
4. **Sequência Concreto-Representacional-Abstrato (CRA - Bruner):** Do contexto legislativo factual aos diagramas de Euler-Venn, culminando na álgebra booleana e equivalências formais.
5. **Mnemônicos de Prova Cebraspe:** MANÉ (negação de $P \to Q$), NÉOU (equivalência disjuntiva), Contrapositiva e PEA + NÃO (negação de quantificador universal afirmativo "Todo").

### 7.2. Metodologia Científica do Módulo M12 (Língua Inglesa Instrumental e Leitura Estratégica)
Para superar a armadilha da tradução literal exaustiva e garantir compreensão textual de alta velocidade em nível Cebraspe/Câmara dos Deputados, o módulo M12 fundamenta-se na linguística aplicada e na psicologia cognitiva da leitura em segunda língua (L2):
1. **Modelo Interativo-Compensatório de Leitura (Keith Stanovich & David Rumelhart):** A compreensão decorre da interação simultânea entre o processamento ascendente (*bottom-up*, decodificação lexical) e descendente (*top-down*, esquemas conceituais prévios). Leitores proficientes compensam lacunas de vocabulário usando pistas do gênero discursivo e da macroestrutura textual.
2. **Gramática Sistêmico-Funcional e Coesão Discursiva (M.A.K. Halliday, Ruqaiya Hasan & Ken Hyland):** O cerne dos itens de interpretação do Cebraspe reside em relações lógicas intersentenciais (concessão com *although/even though/despite/in spite of*, contraste com *however/nevertheless/yet*, causa com *since/due to/as*, consequência com *thus/therefore/hence*) e em cadeias de referenciação anafórica/catafórica (*it, this, which, the former, the latter*).
3. **Hipótese do Limiar Lexical e Decomposição Morfológica (Paul Nation & Batia Laufer):** Foco prioritário nos vocábulos mais frequentes da prosa acadêmica e institucional, complementado pela desconstrução de afixos (prefixos negativos *un-, in-, dis-* e sufixos nominalizadores/adjetivadores *-less, -ness, -ful, -able*), com desmistificação ativa de falsos cognatos críticos (*actually, eventually, pretend, intend, comprehensive, notice*).
4. **Semântica de Modalizadores e Evidencialidade (Joan Bybee & Frank R. Palmer):** Treinamento metacognitivo para identificar a mudança sutil de força epistêmica promovida pela banca nas assertivas C/E (transição indevida de probabilidade/possibilidade com *may, might, could, likely* para certeza categórica ou obrigação com *must, will, shall, definitely, always*).

---

## 8. FLUXO DE PUBLICAÇÃO E CI/CD

1. **Desenvolvimento Local:** O código é desenvolvido e testado no diretório \`curso-revisao\`.
2. **Validação Rigorosa:** Sempre executar \`npm run build\` antes de qualquer commit para garantir que o TypeScript (\`tsc -b\`), os testes unitários (\`vitest run\`) e o bundler (\`vite build\`) estejam com 0 erros.
3. **Commit & Push:** O push nas branches \`master\` e \`main\` aciona automaticamente a pipeline da **Vercel** com Edge Network global.
4. **Deploy Automático:** A Vercel compila a aplicação com as variáveis de ambiente em produção e disponibiliza a versão atualizada instantaneamente em \`https://heuller.vercel.app\`.

---

## 9. INFRAESTRUTURA BACKEND E HOSPEDAGEM (OUTUBRO DE 2026)

### 9.1. Backend-as-a-Service: Supabase
A plataforma agora conta com infraestrutura de banco de dados relacional e autenticação gerenciada pelo **Supabase**:
* **Banco de Dados PostgreSQL:** Tabelas estruturadas com Row Level Security (RLS) para proteção estrita dos dados dos alunos:
  * \`profiles\`: Dados de identificação do aluno.
  * \`user_progress\`: Sincronização em nuvem do progresso por módulo, checkpoints C/E respondidos, seções visualizadas e caixas do método Leitner.
  * \`simulado_tentativas\`: Registro de cada execução do Simulado de 100 Questões Cebraspe, gravando pontuação líquida ($C - E$), acertos, erros, itens em branco, calibração metacognitiva de certeza/chute e tempo total.
* **Autenticação:** Sessão persistente com suporte a login flexível por e-mail ou nome de usuário direto, com sincronização automática com Zustand.
* **Resiliência Offline:** O cliente Supabase (\`src/lib/supabase.ts\`) opera de forma resiliente: caso o usuário esteja sem conexão, a persistência local garante o estudo contínuo sem interrupções.

### 9.2. Hospedagem e Produção: Vercel
* **Domínio Oficial Ativo:** \`https://heuller.vercel.app\`
* **Roteamento SPA:** Configurado via \`vercel.json\` com rewrite para \`/index.html\` (evitando erro 404 em recarregamento direto).

### 9.3. Camada de Segurança e Acesso Restrito (AuthGate)
* **Gating Obrigatório:** Acesso fechado a visitantes não autenticados; toda a plataforma de estudos é carregada apenas após validação de credenciais ativas.
* **Interface Neutra de Entrada:** A tela de login/cadastro é propositalmente discreta, sem exposição de temas, cargos ou menções a concursos públicos na área externa.
* **Usuário de Teste / Demonstração:** Conta criada e confirmada no Supabase para homologação rápida:
  * *Usuário:* `teste` (ou `teste@teste.com`)
  * *Senha:* `teste4344`

---

## 10. ACERVO DE CONTEÚDO E MATERIAIS DE ESTUDO NO REPOSITÓRIO
Para permitir a continuidade do desenvolvimento e dos estudos a partir de qualquer computador:
* O repositório integra o diretório canônico `acervo-estudos/`, contendo as pastas organizadas por eixos temáticos do edital (ABNT, Catalogação, Classificação, Comunicação Científica, Digital/Repositórios, Fundamentos, Gestão de Coleções, Legislação, Preservação, Questões, Recuperação de Informação, Skills e Livros de Referência).
* Documentação de diretrizes e manuais técnicos mantidos versionados na raiz do projeto.

---

## 11. A ARQUITETURA DA JORNADA E PROGRESSÃO POR DOMÍNIO (RODADA 3 — OUTUBRO DE 2026)

A Rodada 3 institui a **Jornada de Domínio Vertical**, transformando o acesso livre em uma progressão pedagógica estruturada que assegura retenção antes de permitir avanço.

### 11.1. Regra de Ouro: Desbloqueio por 85% de Aproveitamento
* Cada etapa (submódulo, desafio ou portal) só é dada como concluída quando o candidato alcança um aproveitamento bruto $\ge 85\%$ em itens de verificação (acertos inteiros).
* **Fórmula de Domínio:**
  $$\text{Aproveitamento} = \frac{\text{Acertos Brutos}}{\text{Total de Itens Submetidos}} \ge 0{,}85$$
* A nota líquida Cebraspe ($C - E$) é apresentada em destaque paralelo como indicador de calibração competitiva, mas o critério de desbloqueio pedagógico é a retenção factual mínima de 85%.

### 11.2. Desafios de Módulo ($N=100$ no M1)
* Ao concluir todos os submódulos de um macro-módulo, o candidato é submetido ao **Desafio do Módulo**.
* No M1 (Fundamentos), o desafio constitui-se de **100 itens inéditos e canônicos** (25 itens por submódulo, simetria 50C/50E).
* **Critério de Aprovação:** Mínimo de 85 acertos inteiros (máximo de 15 erros ou abstenções).

### 11.3. Portais de Revisão Cumulativa $P_k$ (para $k \ge 2$)
* Entre a conclusão do macro-módulo $k-1$ e a abertura do macro-módulo $k$, ergue-se um **Portal de Revisão Cumulativa**.
* **Composição Estratificada ($N=20$ itens):**
  * **70% dos itens (14 itens):** Selecionados aleatoriamente a partir dos checkpoints e simulados do módulo imediatamente anterior ($M_{k-1}$).
  * **30% dos itens (6 itens):** Selecionados a partir dos módulos anteriores históricos ($M_1$ até $M_{k-2}$).
  * **Ponderação de Erros:** O algoritmo prioriza itens que o candidato errou em sessões passadas.
  * **Simetria:** Exatamente 10 itens Certos e 10 itens Errados.
* **Critério de Transposição:** Mínimo de 17 acertos inteiros em 20 itens ($\ge 85\%$).

### 11.4. Protocolo de Revisão Dirigida em Falha
* Caso o aproveitamento fique abaixo de 85%, a etapa entra no estado estrito `em_revisao_dirigida`.
* O sistema identifica as seções exatas cujos itens foram respondidos incorretamente e bloqueia novas tentativas até que o estudante reabra e confirme a releitura reflexiva desses tópicos específicos.
* As tentativas são ilimitadas, mas cada nova tentativa gera um registro imutável no histórico.

### 11.5. Modo Livre (Consulta e Pesquisa)
* Um seletor com confirmação explícita permite ativar temporariamente o **Modo Livre**, liberando a navegação em qualquer submódulo sem desvirtuar nem anular o mapa de progresso e as métricas oficiais da Jornada.

---

## 12. MODELO DE TENTATIVAS IMUTÁVEIS E AUDITORIA DO BACKEND

### 12.1. Arquitetura Relacional com RLS no PostgreSQL
* **Tabela `tentativas_itens`:**
  * `id` (UUID, PK), `user_id` (UUID referenciando `auth.users`), `etapa_id`, `tipo` (`checkpoint`, `desafio_modulo`, `portal_revisao`, `simulado`), `respostas` (JSONB com assertiva, gabarito e resposta do aluno), `acertos`, `erros`, `em_branco`, `pontuacao_liquida` ($C - E$), `aproveitamento` (%), `tempo_segundos` e `created_at`.
* **Tabela `usuario_progresso_jornada`:**
  * Armazena o snapshot derivado do estado da Jornada, etapas concluídas, modo livre e timestamp de última sincronização.
* **Políticas RLS:** Políticas rigorosas garantem que cada usuário só pode ler e gravar seus próprios registros (`auth.uid() = user_id`).

### 12.2. Serviço de Sincronização Resiliente (`tentativasSyncService.ts`)
* Arquitetura *Offline-First*: o progresso é registrado instantaneamente no armazenamento local criptografado/estruturado e sincronizado em segundo plano com o Supabase.
* Em ambientes sem conectividade ou sem variáveis configuradas, o sistema opera sem quebras ou travamentos, mantendo a integridade de todas as telas.

---

## 13. SISTEMA DE NAVEGAÇÃO E NÚCLEOS DE ESTUDO

A navegação da plataforma foi reorganizada em **5 núcleos canônicos**, presentes tanto no cabeçalho superior quanto na barra de navegação inferior mobile:

1. **Painel (`#painel`):**
   * **Card 1 (Próximo Passo):** Calculado dinamicamente pela máquina de estados da Jornada, direcionando o aluno com um clique para a leitura ou verificação que desbloqueia a etapa seguinte.
   * **Card 2 (Progresso da Jornada):** Percentual acumulado, contagem de etapas concluídas e atalho para o mapa visual da trilha.
   * **Card 3 (Revisão do Dia):** Repetição espaçada pelo Sistema Leitner (com a regra estrita de que itens respondidos fora da data de vencimento não avançam de caixa) e 7 marcadores discretos de constância semanal.
2. **Jornada (`#jornada`):**
   * Mapa visual da trilha com nós interativos de cada submódulo, indicador de "Você está aqui", cartões de Desafio do Módulo, Portais $P_k$, modal de regras "Como Funciona" e alternador do Modo Livre.
3. **Treinos (`#treinos`):**
   * Central de prática livre com 4 hubs dedicados: (1) Revisão do Dia Leitner, (2) Caderno de Erros ativos para eliminação de pontos cegos, (3) Laboratório de Discursiva e (4) Folha de Véspera (48h).
4. **Radar Cebraspe (`#radar`):**
   * Análise analítica de frequência de cobrança por tema, perfil da banca e calibração de risco de chutes.
5. **Progresso (`#progresso`):**
   * Auditoria detalhada de tempo de estudo, histórico de tentativas imutáveis e proficiência por macro-eixo do edital.

### 13.1. Laboratório de Discursiva e Peça Técnica (`#discursiva`)
* Configuração pedagógica provisória: **2 questões técnicas (até 20 linhas)** e **1 peça técnica legislativa (até 50 linhas)**.
* **Contador Estimado de Linhas:** Baseado na proporção tipográfica de ~70 caracteres por linha manuscrita.
* **Rubrica Analítica de Estudo:** Domínio Técnico (50%), Estrutura e Coesão (30%) e Correção Linguística (20%).
* **Integração com IA Segura:** Botão para copiar prompt analítico especializado diretamente para a área de transferência do aluno (para colar em LLMs externas como Claude ou ChatGPT), sem qualquer chamada de API no cliente ou armazenamento de chaves secretas.
* **Histórico de Rascunhos:** Registro de versões com carimbo de data/hora, linhas estimadas, devolutiva arquivada e botão de restauração imediata no editor.

### 13.2. Relatório Pedagógico do Simulado (E.6)
* O pós-teste do Simulado de 100 Itens passa a ser ordenado pelo princípio **"Erros Primeiro"**:
  1. Primeiro todas as questões incorretas (com análise da pegadinha da banca e justificativa).
  2. Em seguida, os itens deixados em branco (abstenção estratégica).
  3. Ao final, os itens acertados com convicção.
* Relatório consolidado por submódulo com botão nativo "Imprimir / Salvar PDF" estilizado via CSS print.

### 13.3. Bloco de Conhecimentos Gerais (Macro-Bloco G)
* Estruturado separadamente dos conhecimentos específicos na Jornada, devidamente sinalizado com a chancela *"Aguardando publicação do edital"*, preservando a pureza e a prioridade dos 10 módulos de Biblioteconomia e Ciência da Informação.

---

## 14. IDENTIDADE VISUAL EDITORIAL E ILUSTRAÇÕES EX-LIBRIS GRAVURA

### 14.1. Conceito: Ex-Libris / Gravura em Linha Única
* **Estilo:** Linhas finas contínuas (1.5px), cantos suaves e arcos arquitetônicos clássicos inspirados na tradição biblioteconômica do século XIX e na seriedade do Parlamento brasileiro.
* **Anti-Gamificação:** Rejeição absoluta a badges infantis, sons de vitória, medalhas, níveis de XP fictícios ou confetes animados. O reforço psicológico decorre exclusivamente da clareza métrica do domínio atingido.
* **Duotom Dinâmico:** Gráficos 100% vetoriais em SVG inline utilizando `currentColor` e as variáveis cromáticas de cada macro-módulo, com legibilidade perfeita em fundos claros e escuros.

### 14.2. Acervo de Ilustrações e Emblemas
* **Emblemas 64×64 (`ModuleEmblems.tsx`):**
  * **M1:** Livro aberto clássico com colunas arquitetônicas e fita marcadora.
  * **M2:** Fichário de madeira com gavetas, puxadores de latão e ficha catalográfica inclinada.
  * **M3:** Estante de biblioteca e árvore hierárquica de classes (CDD / CDU).
  * **M4:** Lupa ótica com prisma sobre rede topológica de nós e tesauros.
  * **M5:** Prancheta técnica de avaliação com balança de decisões em equilíbrio.
  * **M6:** Livro com circuitos integrados, nó de servidor e matriz de pixels binários.
  * **M7:** Caixa de arquivo permanente (box arquivístico), orifício de manuseio e selo lacrado.
  * **M8:** Página A4 com margens normalizadas, régua milimetrada e esquadro técnico (ABNT).
  * **M9:** Periódico acadêmico aberto com histograma de dispersão e curvas bibliométricas.
  * **M10:** Pergaminho com fita e selo em cera de chancelaria clássica (sem brasão oficial).
  * **Bloco G:** Ampulheta de linho e pergaminho aguardando a deflagração do certame.
* **Ilustrações Contextuais (`ContextualIllustrations.tsx`):**
  * `IllustrationLogin`: Fachada e gabinete de estudos com estantes, luminária clássica e manuscritos.
  * `IllustrationPortal`: Pórtico clássico de transição com chave de abóbada e fechadura de passagem.
  * `IllustrationConclusao`: Chancela circular com louros de gravura e carimbo de proficiência.
  * `IllustrationBloqueio`: Portão de ferro forjado e cadeado clássico de latão.
  * `IllustrationVazio`: Prateleira em repouso com um livro inclinado e xícara quente de café.
  * `IllustrationDiscursiva`: Lauda pautada, tinteiro sextavado e pena caligráfica.
* Registro formal de autoria e detalhes no arquivo [`CREDITOS.md`](file:///C:/Users/USER/.gemini/antigravity-ide/scratch/hnc/CREDITOS.md).

---

## 15. REGRAS ESTATUTÁRIAS DE DEPLOY E CONTROLE DE VERSÃO

1. **Controle de Branches:** Sincronização estrita entre `master` e `main` via Vercel CI/CD automatizado.
2. **Proibição de Deploy Prematuro:** Nenhuma publicação no ambiente de produção da Vercel pode ser executada sem a autorização textual explícita do usuário com o comando *"pode publicar"*.
3. **Validação Obrigatória:** Antes de qualquer entrega, é compulsório verificar que:
   * `npm run lint` (`oxlint`) executa com zero erros e zero advertências (0 warnings, 0 errors).
   * `vitest run` executa com 100% dos testes aprovados (101/101 em 13 suítes).
   * `npm run build` (`vitest run && tsc -b && vite build`) conclui com êxito e gera o pacote PWA precache.
   * A aplicação não expõe segredos ou chaves privadas no código do cliente.

---

## 16. MOTOR DE INTELIGÊNCIA ARTIFICIAL E CAPACIDADES PEDAGÓGICAS AVANÇADAS (RODADA 4)

Com a incorporação do backend serverless (Vercel Functions + Gemini API) e arquitetura de resiliência *offline-first* (0ms), a plataforma Heuller na Câmara evoluiu para um ecossistema com 4 novos módulos de inteligência ativa calibrados especificamente para a metodologia Cebraspe:

### 16.1. Glossário Vivo Cebraspe & Dicionário Técnico Flutuante
* **Mecanismo:** Ouvinte global de seleção de texto (`TextSelectionListener.tsx`) ativo em todos os módulos e simulados. Ao destacar qualquer termo (2 a 60 caracteres), surge um chip flutuante não intrusivo.
* **Base Curada Canônica:** Mais de 20 verbetes seminais baseados no *Dicionário de Biblioteconomia e Arquivologia* (Murilo Bastos da Cunha & Cordélia Cavalcanti) com:
  1. Conceito Canônico formal.
  2. Pegadinha e Distrator clássico da banca Cebraspe.
  3. Aplicação prática no acervo e assessoria parlamentar da Câmara dos Deputados.
  4. Fonte e autoridade bibliográfica.
* **Enriquecimento Dinâmico com IA (`/api/dictionary`):** Termos não catalogados localmente são sintetizados em tempo real via Gemini com cache automático no `localStorage` (`hnc_dicionario_ia_cache_v1`).
* **Meu Baralho de Vocabulário:** Aba dedicada no modal (`GlossarioModal.tsx`) para salvar termos e gerenciar cartões pessoais de vocabulário com sincronização no store de progresso.

### 16.2. Avaliador Cebraspe de Discursivas (com IA)
* **Fórmula Oficial de Correção:** Implementação rigorosa do cálculo estatístico adotado pelo Cebraspe nos concursos federais:
  $$\text{NC} = \text{NC}_P - 2 \times \frac{\text{NE}}{\text{TL}}$$
  Onde $\text{NC}$ é a Nota da Prova Discursiva, $\text{NC}_P$ é a soma das notas dos quesitos de conteúdo, $\text{NE}$ é o número de erros gramaticais e $\text{TL}$ é o total de linhas escritas.
* **Penalidade de Linha Menor:** Se o candidato redige poucas linhas, a penalidade por erro de língua portuguesa é amplificada proporcionalmente pelo divisor $\text{TL}$.
* **Auditoria Gramatical por Linha:** Devolutiva estruturada apontando o número da linha, trecho com desvio, forma corrigida e fundamentação sintático-morfológica (ortografia, concordância, regência, crase, pontuação).
* **Temas Oficiais com Padrão Preliminar:**
  1. *Desbastamento versus Descarte de Acervos* (Waldomiro Vergueiro).
  2. *Catalogação e Modelagem Conceitual* (RDA e IFLA LRM).
  3. *Transparência Pública e Acesso à Informação* (Lei 12.527/2011 - LAI).
  4. *Peça Técnica Legislativa OAIS de 50 Linhas* (Preservação Digital e Repositórios).
* **Reescrita Padrão Ouro:** Devolutiva pedagógica com texto de referência para nota máxima.

### 16.3. Modo Socrático no Caderno de Erros ("Discuta com a Banca")
* **O Tribunal Cebraspe:** No `CadernoErrosPage.tsx`, cada assertiva que o aluno errou possui o botão *"Recorrer / Discutir com a Banca Cebraspe (IA)"*.
* **Parecer Técnico Inicial:** A banca emite parecer formal com:
  1. *Tese Principal*: Ratificação doutrinária do gabarito oficial (Certo ou Errado).
  2. *Ponto Cego Identificado*: Desmontagem da intuição errônea ou falácia que levou o candidato ao erro.
  3. *Fundamentação Canônica Irrefutável*: Citação direta de autores e normas (Suzanne Briet, Paul Otlet, Harold Borko, Jesse Shera, S. R. Ranganathan, Waldomiro Vergueiro, F. W. Lancaster, ABNT, LAI, etc.).
  4. *Pergunta Desafio Socrática*: Contra-pergunta desafiando o candidato a provar a lógica da distinção conceitual.
* **Peticionamento Interativo (Chat Turn-by-Turn):** O candidato pode redigir recursos administrativos contra o gabarito. O examinador do Cebraspe responde na primeira pessoa do plural com tom formal e estrita fidelidade ao edital.
* **Ações Pedagógicas:**
  - Exportação direta do ponto cego para o "Meu Baralho".
  - Marcação de status *"Lacuna Superada ✓"* com persistência no armazenamento.

### 16.4. Gerador Inteligente de Simulados Adaptativos de Fraquezas
* **Motor Diagnóstico (`diagnosticEngine.ts`):** Varre a telemetria do candidato (erros em micro-checkpoints, histórico do Simulado 100Q, repetição espaçada) e mapeia vulnerabilidades categorizadas em gravidade: *Crítica, Alta ou Moderada*.
* **Geração Adaptativa Inédita (`/api/generate-adaptive-quiz`):** Gera baterias customizadas de 10, 15 ou 20 itens no formato Certo/Errado estritamente concentradas nos tópicos de maior fraqueza ou nos itens do Caderno de Erros.
* **Sala de Prova Cebraspe (`SimuladoAdaptativoModal.tsx`):**
  - Cronômetro em tempo real.
  - Atalhos universais de teclado: `C` (Certo), `E` (Errado), `B` ou `Espaço` (Em Branco), `←` e `→` (navegação).
  - Régua interativa de navegação entre assertivas.
* **Espelho de Notas e Penalização Real:**
  $$\text{Nota Líquida} = \text{Certos} - \text{Errados}$$
  Apresenta o aproveitamento líquido percentual, discrimina *Lacunas Superadas* e *Lacunas Persistentes*.
* **Conexão Socrática:** Qualquer item errado no simulado adaptativo exibe botão para abrir diretamente o Diálogo Socrático com a banca.

### 16.5. Princípio da Autonomia Offline-First (Resiliência Total)
* **Zero Falhas:** Nenhuma funcionalidade de IA bloqueia ou quebra a plataforma se o usuário estiver sem internet, com API keys não configuradas ou em quota esgotada.
* **Fallbacks Heurísticos Canônicos:** Todos os 4 serviços contam com geradores determinísticos locais em 0ms (`baseTermos.ts`, `temasOficiais.ts`, `socraticService.ts` e `baseQuestoesAdaptativas.ts`).
* **Segurança de Credenciais:** As chaves de API residem exclusivamente em variáveis de ambiente de backend na nuvem da Vercel (`GEMINI_API_KEY` / `GOOGLE_API_KEY`), nunca sendo expostas no bundle do cliente.

---
*Documento atualizado em 02 de Outubro de 2026.*  
*Projeto Heuller na Câmara — Plataforma Pessoal de Domínio Cebraspe.*

