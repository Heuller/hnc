# Glossário de Domínio da Plataforma Heuller na Câmara (HNC)

Este documento define o vocabulário ubíquo (*Ubiquitous Language*) da plataforma **Heuller na Câmara**. Todos os desenvolvedores, agentes de IA, interfaces de usuário, testes e documentações devem empregar rigorosamente os termos aqui definidos.

---

## 1. Entidades Pedagógicas e de Conteúdo

### Módulo Teórico (`Modulo`)
- **Definição**: Agrupamento temático de alto nível correspondente a uma grande área do edital do concurso da Câmara dos Deputados (ex: Módulo 1 - Regimento Interno, Módulo 2 - Processo Legislativo, Módulo 3 - Direito Constitucional).
- **Identificador**: Inteiro de 1 a 13.
- **Termos proibidos**: *Curso, Matéria genérica, Pasta.*

### Submódulo (`Submodulo`)
- **Definição**: Unidade de estudo granular que compõe um Módulo Teórico (ex: `3.4 - Direitos e Garantias Fundamentais`). Cada submódulo contém teoria detalhada, artigos correlatos, mnemônicos, exemplos resolvidos, jurisprudência e exercícios de fixação.
- **Identificador**: Formato decimal `<modulo>.<ordem>` (ex: `1.1`, `3.4`).
- **Invariante**: Todos os submódulos da plataforma são funcionalidades definitivas e 100% integradas.
- **Termos proibidos**: *Piloto, Versão preliminar, Rascunho.*

### Seção Teórica (`SecaoTeorica`)
- **Definição**: Bloco estruturado dentro de um submódulo (ex: *Antes de Ler*, *Teoria Detalhada*, *Mnemônicos & Síntese*, *Exemplos Resolvidos*, *Exercícios*).
- **Regra de layout**: Deve respeitar limite de largura de leitura confortável (< 80 caracteres por linha) e hierarquia semântica pura.

### Questão Cebraspe Real (`QuestaoCebraspe`)
- **Definição**: Item oficial de prova prévia do Cebraspe/Cespe ou adaptado rigorosamente ao estilo da banca (formato Certo/Errado), com gabarito fundamentado, embasamento legal/regimental e classificação por matéria, cargo e ano.
- **Regra de pontuação**: Formato padrão Cebraspe (1 acerto = +1 ponto líquido; 1 erro = -1 ponto líquido; em branco/não respondida = 0 ponto).

### Exercício de Fixação (`ExercicioFixacao`)
- **Definição**: Item formativo embutido ao final de um submódulo para verificação imediata de retenção do conteúdo recém-estudado.

---

## 2. Métricas, Avaliação & Retenção

### Simulado Fixo (`SimuladoFixo`)
- **Definição**: Prova simulada com conjunto fechado de itens previamente curados, distribuídos conforme os pesos e quóruns do edital de Analista Legislativo - Técnica Legislativa.

### Simulado Adaptativo (`SimuladoAdaptativo`)
- **Definição**: Simulado dinâmico cujo algoritmo seleciona questões com base nos pontos fracos diagnosticados no histórico de erros e no nível de proficiência estimado do usuário.

### Caderno de Erros (`CadernoErros`)
- **Definição**: Repositório inteligente de questões erradas pelo usuário em simulados e treinos, com agendamento de repetição espaçada (*spaced repetition*) e análise diagnóstica da causa raiz do erro (falha de interpretação, desconhecimento da lei seca, pegadinha de banca ou jurisprudência).

### Folha de Véspera (`FolhaVespera`)
- **Definição**: Compêndio condensado de mnemônicos, quóruns constitucionais, prazos regimentais e prazos de medidas provisórias projetado para revisão de alto impacto nos últimos dias antes da prova.

### Índice de Retenção (`IndiceRetencao`)
- **Definição**: Métrica percentual calculada que estima a probabilidade de lembrança ativa de um submódulo com base no tempo decorrido desde a última revisão e no histórico de acertos.

---

## 3. Arquitetura de Software e Interface

### Módulo de Código (`CodeModule`)
- **Definição**: Qualquer unidade de código que apresente uma interface pública e uma implementação interna (deliberadamente independente de escala: função, store, pacote ou fatia vertical).
- **Termos preferidos**: *Módulo* (não usar "serviço" ou "componente" quando se referir à unidade lógica de arquitetura).

### Costura (`Seam`)
- **Definição**: Ponto de fronteira público onde o comportamento pode ser observado e testado sem acessar detalhes internos privados.
- **Invariante**: Todos os testes automatizados da plataforma devem atracar em costuras públicas estabelecidas.

### Interface Pública (`Interface`)
- **Definição**: Tudo o que um chamador ou teste precisa conhecer para operar o módulo (assinatura, tipos, invariantes de estado e tratamento de erro).

---

## 4. Diretrizes de Interface e Anti-Slop (UI/UX)

### Cabeçalho Sticky Mobile (`HeaderStickyMobile`)
- **Definição**: O cabeçalho de navegação superior móvel, com altura fixa estrita de **56px** (`h-14`), atracado em `top: 0` (`z-index: 40`).
- **Invariante**: Não contém elementos de altura dinâmica variável que quebrem a ancoragem downstream.

### Barra de Contexto do Submódulo (`TeoriaStickyBar`)
- **Definição**: Barra móvel de atalhos e progresso do submódulo (`[M3 · 3.4] [Teoria Detalhada] [Mnemônicos] [65%]`), fixada com `sticky top-14` (56px) e fundo opaco `bg-surface`.
- **Invariante**: Encaixa perfeitamente na borda inferior do cabeçalho móvel sem sobreposição e sem vazamento de texto por transparência.

### Proibição de Barras Horizontais (`NoHorizontalBarsRule`)
- **Definição**: Norma de design que proíbe o uso de barras horizontais decorativas desnecessárias (`<hr>`, divisores pesados e bordas decorativas soltas) na plataforma, substituindo-as por respiro de espaçamento vertical e contraste de superfícies.
