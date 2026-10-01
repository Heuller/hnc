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

### 7.1. Metodologia Científica do Módulo M11 (Raciocínio Lógico do Zero)
Para atender às especificidades cognitivas do raciocínio lógico-matemático formal, o módulo M11 adota fundamentos da ciência cognitiva:
1. **Teoria dos Modelos Mentais (Philip Johnson-Laird):** A mente humana compreende lógica simulando cenários factuais possíveis (mundos verdadeiros), e não manipulando regras sintáticas cegas. Cada conectivo é ensinado via matriz de cenários.
2. **Controle de Carga Cognitiva (John Sweller - CLT):** Substituição da memorização forçada de tabelas de 20 linhas pela técnica do *Gatilho Único de Decisão* (o ponto de falha único de cada operador).
3. **Protocolo Freio do Sistema 2 (Evans & Kahneman):** Treinamento da pausa analítica contra o viés intuitivo de correspondência (*Matching Bias* e Falácia da Afirmação do Consequente no problema de Wason).
4. **Sequência Concreto-Representacional-Abstrato (CRA - Bruner):** Do contexto legislativo factual aos diagramas de Euler-Venn, culminando na álgebra booleana e equivalências formais.
5. **Mnemônicos de Prova Cebraspe:** MANÉ (negação de $P \to Q$), NÉOU (equivalência disjuntiva), Contrapositiva e PEA + NÃO (negação de quantificador universal afirmativo "Todo").

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
  * *Usuário:* \`teste\` (ou \`teste@teste.com\`)
  * *Senha:* \`teste4344\`

---

## 10. ACERVO DE CONTEÚDO E MATERIAIS DE ESTUDO NO REPOSITÓRIO
Para permitir a continuidade do desenvolvimento e dos estudos a partir de qualquer computador:
* O repositório integra o diretório canônico \`acervo-estudos/\`, contendo as pastas organizadas por eixos temáticos do edital (ABNT, Catalogação, Classificação, Comunicação Científica, Digital/Repositórios, Fundamentos, Gestão de Coleções, Legislação, Preservação, Questões, Recuperação de Informação, Skills e Livros de Referência).
* Documentação de diretrizes e manuais técnicos mantidos versionados na raiz do projeto.

---
*Documento atualizado em 01 de Outubro de 2026.*  
*Projeto Heuller na Câmara — Rumo à Aprovação como Analista Legislativo!*
