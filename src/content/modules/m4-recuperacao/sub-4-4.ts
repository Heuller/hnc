import type { ModuloFilho } from '../../../domain/types';

export const submodulo44: ModuloFilho = {
  id: 'sub-4-4',
  numero: '4.4',
  titulo: 'Serviço de Referência, DSI, Estudos de Usuários e Competência Informacional',
  descricaoCurta: 'O processo de referência de Denis Grogan (8 etapas), entrevista e mediação, Disseminação Seletiva da Informação (DSI de Luhn), modelos teóricos de comportamento informacional (Wilson, Dervin - Sense Making, Belkin - ASK) e Competência em Informação (Information Literacy).',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Denis Grogan', 'Hans Peter Luhn', 'Tom D. Wilson', 'Brenda Dervin', 'Nicholas Belkin', 'Carol Kuhlthau'],
  alertasCebraspe: [
    'A sequência lógica de 8 etapas do processo de referência de Denis Grogan é cobrada literal e repetidamente pelo Cebraspe: 1. O Problema -> 2. A Necessidade de Informação -> 3. A Questão Inicial -> 4. A Questão Negociada -> 5. A Estratégia de Busca -> 6. O Processo de Busca -> 7. A Resposta -> 8. A Solução. Memorize essa ordem exata!',
    'Quem é o ator principal nas primeiras etapas do processo de referência? O USUÁRIO (ele vivencia o problema, a necessidade e formula a questão inicial). A mediação do bibliotecário atua decisivamente a partir da Questão Negociada em diante.',
    'A Disseminação Seletiva da Informação (DSI) é um serviço de NOTIFICAÇÃO CORRENTE ativo e personalizado, criado por Hans Peter Luhn, fundamentado no cruzamento automatizado entre o perfil do usuário e os novos documentos que entram no acervo.',
    'Modelos de Estudos de Usuários: Abordagem Tradicional (centrada no sistema, acervo e métodos quantitativos) vs. Abordagem Alternativa/Moderna (centrada no usuário, fenomenológica, cognitiva e métodos qualitativos).',
    'O modelo Sense-Making de Brenda Dervin estrutura-se na tríade: Situação (o contexto histórico) -> Lacuna / Gap (a incerteza cognitiva) -> Ponte (as estratégias e informações encontradas) -> Uso / Resultado (a superação do problema).',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Modelos Seminais de Necessidades e Comportamento Informacional',
    colunas: ['Teórico e Ano', 'Modelo Conceitual', 'Pressuposto Epistemológico Central', 'Conceito Chave Cobrado pelo Cebraspe'],
    linhas: [
      ['Tom D. Wilson (1981 / 1996)', 'Modelo de Comportamento Informacional', 'A necessidade de informação não é primária; decorre de necessidades fisiológicas, afetivas e cognitivas básicas do ser humano', 'Barreiras intervenientes (psicológicas, ambientais) e busca ativa vs. passiva'],
      ['Brenda Dervin (1983 / 1992)', 'Abordagem do Sense-Making', 'A informação não existe isolada no vácuo; ela é construída pelo indivíduo para dar sentido ao seu mundo e transpor incertezas', 'Triângulo do Sense-Making: Situação -> Lacuna (Gap) -> Ponte -> Uso'],
      ['Nicholas Belkin (1980)', 'ASK (Anomalous State of Knowledge)', 'O usuário busca informação precisamente porque seu conhecimento sobre o tema é imperfeito, vago ou incompleto', 'Dificuldade intrínseca do usuário de articular sua dúvida em termos precisos no início'],
      ['Carol Kuhlthau (1991)', 'ISP (Information Search Process)', 'A busca de informação é um processo holístico que combina pensamentos (cognitivo), sentimentos (afetivo) e ações (físico)', 'A ansiedade e a dúvida diminuem à medida que a busca progride da incerteza para a clareza'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Processo de Referência segundo Denis Grogan (1995)
Na obra clássica *A Prática do Serviço de Referência* (presente em nosso acervo em \`Recuperação, fontes, referência e usuários\`), **Denis Grogan** define o serviço de referência como o contato pessoal e a assistência direta prestada pelo bibliotecário ao leitor em busca de conhecimento.

\`\`\`mermaid
graph TD
    E1["1. O PROBLEMA (Usuário vivencia um impasse prático ou teórico)"] --> E2["2. A NECESSIDADE DE INFORMAÇÃO (Consciência da lacuna cognitiva)"]
    E2 --> E3["3. A QUESTÃO INICIAL (Pergunta expressa ao bibliotecário - vaga/imperfeita)"]
    E3 --> E4["4. A QUESTÃO NEGOCIADA (Entrevista de referência decodifica a necessidade real)"]
    E4 --> E5["5. A ESTRATÉGIA DE BUSCA (Plano lógico: termos, fontes e operadores)"]
    E5 --> E6["6. O PROCESSO DE BUSCA (Execução física ou eletrônica nas bases e acervos)"]
    E6 --> E7["7. A RESPOSTA (Entrega dos documentos, citações ou dados localizados)"]
    E7 --> E8["8. A SOLUÇÃO (Julgamento de valor pelo usuário: o problema foi resolvido?)"]
\`\`\`

#### As Oito Etapas Decisórias e os Papéis dos Atores
A banca **CEBRASPE** cobra a sequência exata e a atribuição de responsabilidades em cada etapa:
1. **O Problema:** Situação fática ou dilema intelectual que o usuário precisa resolver em seu trabalho ou estudo. **Ator: Usuário**.
2. **A Necessidade de Informação:** O reconhecimento interno de que o conhecimento acumulado é insuficiente e que dados externos são necessários. **Ator: Usuário**.
3. **A Questão Inicial:** A verbalização da dúvida apresentada no balcão de referência, telefone ou chat. É quase invariavelmente **imperfeita, distorcida ou excessivamente genérica** em relação à necessidade real. **Ator: Usuário**.
4. **A Questão Negociada:** O cerne da mediação do bibliotecário. Por meio da **entrevista de referência**, o profissional filtra ambiguidades e formula a verdadeira questão técnica a ser respondida. **Atores: Bibliotecário e Usuário em cooperação**.
5. **A Estratégia de Busca:** A tradução da questão negociada na linguagem do sistema (seleção de vocabulários controlados, tesauros, campos e operadores booleanos). **Ator: Bibliotecário**.
6. **O Processo de Busca:** A navegação concreta em catálogos, estantes, bases de dados comerciais ou repositórios digitais. **Ator: Bibliotecário**.
7. **A Resposta:** O produto informativo entregue ao usuário (livros, artigos, relatórios ou referências). **Ator: Bibliotecário**.
8. **A Solução:** A etapa final de validação pragmática. Somente o próprio usuário tem competência epistemológica para determinar se a resposta obtida efetivamente sanou seu problema original. **Ator: Usuário**.

---

### 2. Tipologia das Questões de Referência segundo William Katz (2002)
O autor norte-americano William Katz categorizou as consultas recebidas pelo serviço de referência em quatro classes fundamentais:

| Categoria da Questão (Katz) | Complexidade | Fontes Utilizadas | Exemplo Prático na Câmara dos Deputados |
| :--- | :--- | :--- | :--- |
| **1. Questões de Direção / Administrativas** | Mínima (não bibliográfica). | Nenhuma fonte documental técnica; conhecimento do prédio e regulamento. | *"Onde fica o banheiro?", "Qual o horário de funcionamento da Seção de Raras?", "Onde tiro cópias?"* |
| **2. Questões de Pronta-Referência (*Ready Reference*)** | Baixa / Factual pontual. | Obras de referência rápida (dicionários, anuários estatísticos, diretórios). | *"Qual é o número da Lei de Responsabilidade Fiscal?", "Quem é o atual Presidente da Câmara dos Deputados?"* |
| **3. Questões de Pesquisa Específica (*Specific Search*)** | Média. | Catálogos em linha (OPAC), bibliografias especializadas e bases referenciais. | *"Quais monografias a biblioteca possui sobre a reforma tributária aprovada na Emenda Constitucional 132?"* |
| **4. Questões de Pesquisa Ampla / Avançada (*Research / Extended*)** | Máxima. | Múltiplas bases heterogêneas, literatura cinzenta, comutação e consulta a especialistas. | *"Elaborar dossiê bibliográfico e jurisprudencial exaustivo sobre a evolução do controle de constitucionalidade de medidas provisórias nos últimos 20 anos."* |

---

### 3. A Entrevista de Referência e os Níveis de Necessidade de Robert S. Taylor (1968)
Em seu artigo clássico *Question-Negotiation and Information Seeking in Libraries* (1968), **Robert S. Taylor** formulou os quatro níveis estruturais de necessidade de informação que habitam a mente do consulente:

* **$Q_1$ — Necessidade Visceral:** A necessidade vaga, subconsciente e nebulosa de informação. O indivíduo sente que algo lhe falta, mas é totalmente incapaz de expressar isso em palavras (*informação intangível*).
* **$Q_2$ — Necessidade Consciente:** A necessidade mentalmente reconhecida e articulada em pensamento interior. O usuário sabe o que quer para si, mas a ideia ainda carece de estruturação formal.
* **$Q_3$ — Necessidade Formalizada:** A formulação linguística explícita da dúvida comunicada ao bibliotecário. Pode ser imperfeita ou distorcida (*a Questão Inicial de Grogan*).
* **$Q_4$ — Necessidade Comprometida com o Sistema:** A questão adaptada e traduzida para os limites técnicos e operacionais do sistema de recuperação da biblioteca (*a Questão Negociada / Estratégia de Busca*).

#### A Técnica do "Funil de Perguntas" na Entrevista
Para transformar uma questão inicial vaga em uma consulta eficiente sem constranger o usuário:
1. **Perguntas Abertas no Início:** *"Conte-me mais sobre o foco da sua pesquisa", "Para qual finalidade o senhor utilizará esses dados?"* (estimula a contextualização ampla);
2. **Perguntas Exploratórias Intermediárias:** *"Quais autores ou correntes teóricas o senhor já consultou?", "O enfoque é de direito público ou privado?"*;
3. **Perguntas Fechadas no Encerramento:** *"O senhor precisa apenas de legislação federal ou também estadual?", "Podemos restringir aos últimos 5 anos?", "O idioma em inglês atende?"* (delimita os parâmetros exatos da busca).

---

### 4. A Disseminação Seletiva da Informação (DSI) de Hans Peter Luhn (1958)
Criada pelo pesquisador da IBM **Hans Peter Luhn**, a DSI é o serviço proativo de alerta corrente no qual o sistema toma a iniciativa de informar o usuário:

\`\`\`mermaid
graph LR
    P["PERFIL DO USUÁRIO<br>(Descritores, Autores e Temas de Interesse)"] --> M["MECANISMO DE CASAMENTO (Matching)"]
    D["PERFIL DO DOCUMENTO<br>(Metadados de Novas Obras Adquiridas)"] --> M
    M --> N["NOTIFICAÇÃO / ALERTA (E-mail, RSS, App)"]
    N --> F["RETROALIMENTAÇÃO (Feedback: Útil vs Inútil)"]
    F -->|Calibração Contínua| P
\`\`\`

#### A. As Duas Gerações de DSI Cobradas pelo Cebraspe (*Prova STJ 2024*)
* **DSI de 1ª Geração (Tradicional / Analógica / Em Lote):**
  * Baseada em cartões perfurados ou perfis fixos de interesse preenchidos em formulários em papel;
  * Cruzamentos periódicos manuais ou em lotes computacionais (*batch processing*);
  * Alertas físicos encaminhados em fichas impressas ou boletins datilografados;
  * Feedback lento e baixa flexibilidade de calibração.
* **DSI de 2ª Geração (Digital / Automatizada / Semântica):**
  * Perfis dinâmicos alimentados continuamente por algoritmos de aprendizado de máquina (*machine learning*) e rastreamento do histórico de consultas do usuário;
  * Alertas instantâneos disparados em tempo real via feeds RSS, e-mails automatizados, APIs e notificações em aplicativos móveis;
  * *Feedback* com um único clique (botão de "relevante/não relevante"), ajustando os pesos estatísticos do perfil do usuário em tempo de execução.

---

### 5. Modelos Canônicos de Comportamento Informacional (*Information Behavior*)

1. **Modelo de Tom D. Wilson (1981 / 1996):**
   * A necessidade de informação não nasce no vácuo; ela é uma **necessidade secundária** gerada por necessidades primárias (fisiológicas, afetivas ou cognitivas) no contexto de papéis sociais do indivíduo.
   * Introduz as **variáveis intervenientes**: barreiras psicológicas, demográficas, ambientais e características da fonte que podem impedir ou desviar o comportamento de busca.
2. **Abordagem do *Sense-Making* de Brenda Dervin (1983 / 1992):**
   * O ser humano é visto como um viajante que se desloca no tempo e no espaço construindo sentido para sua vida.
   * **O Triângulo do Sense-Making:**
     * **Situação:** O contexto histórico e espaço-temporal onde o indivíduo está inserido;
     * **Lacuna (*Gap*):** A barreira cognitiva, dúvida ou incerteza que interrompe a sua caminhada;
     * **Ponte:** As informações, ideias e estratégias mobilizadas para superar a barreira;
     * **Resultado / Uso:** A nova compreensão alcançada que permite continuar a caminhada.
3. **Modelo ASK (*Anomalous State of Knowledge*) de Nicholas Belkin (1980):**
   * O usuário busca informação em um sistema precisamente porque reconhece uma **anomalia ou lacuna em seu estado de conhecimento**. Por não dominar o tema, ele tem extrema dificuldade de formular a consulta exata em termos técnicos no início da interação.
4. **Modelo ISP (*Information Search Process*) de Carol Kuhlthau (1991):**
   * Integra três domínios do ser humano na busca: **Sentimentos (afetivo)**, **Pensamentos (cognitivo)** e **Ações (físico)**.
   * Divide a pesquisa em 6 estágios: Iniciação $\\rightarrow$ Seleção $\\rightarrow$ Exploração $\\rightarrow$ Formulação $\\rightarrow$ Coleta $\\rightarrow$ Apresentação.
   * Revela que os sentimentos de incerteza, confusão e frustração são máximos no início e na fase de exploração, convertendo-se em confiança e satisfação após a formulação do foco.

---

### 6. Competência em Informação (*Information Literacy*)
* Definida pela ACRL/ALA e pelas Declarações de Praga (2003) e Alexandria (2005 - Farol da Sociedade da Informação):
* A competência informacional é a capacidade do indivíduo de **reconhecer quando necessita de informação, saber localizá-la, avaliá-la criticamente em sua autoridade e exatidão, e utilizá-la de forma ética e legal**.
* Na Câmara dos Deputados, manifesta-se nos programas de capacitação continuada oferecidos pela Biblioteca Pedro Aleixo e pelo Cefor aos servidores e assessores parlamentares.

---

### 7. Quadro Sinóptico de Cascas de Banana do Cebraspe em Referência e Usuários

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"Na oitava etapa do processo de referência de Denis Grogan (A Solução), o bibliotecário decide unilateralmente se a pesquisa foi concluída."* | **ERRADO** | A Solução é uma avaliação de competência **EXCLUSIVA DO USUÁRIO** (somente ele sabe se seu problema foi resolvido). |
| *"No modelo de Denis Grogan, a formulação da estratégia de busca precede o processo de negociação da questão com o usuário."* | **ERRADO** | A Questão Negociada (etapa 4) **antecede** a Estratégia de Busca (etapa 5). Não se pode planejar a busca antes de negociar a dúvida. |
| *"Segundo Brenda Dervin, a informação é um objeto físico estático independente do contexto existencial do indivíduo."* | **ERRADO** | No *Sense-Making*, a informação é **construída ativamente** pelo sujeito para transpor lacunas cognitivas situadas. |
| *"Nas questões de pronta-referência de William Katz, o bibliotecário precisa elaborar buscas exaustivas em bases de teses e patentes."* | **ERRADO** | Pronta-referência destina-se a **fatos rápidos e pontuais** consultados em obras de referência básica (dicionários, anuários). |`,
  checkpoints: [
    {
      id: 'cp-4-4-1',
      pergunta: 'Micro-Checkpoint 1: As Etapas do Processo de Referência de Grogan',
      item: 'No processo de referência conceituado por Denis Grogan, a sequência lógica de etapas compreende: problema, necessidade de informação, questão inicial, questão negociada, estratégia de busca, processo de busca, resposta e solução.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a exata ordenação de 8 passos formulada por Grogan e sistematicamente exigida pela banca Cebraspe.',
    },
    {
      id: 'cp-4-4-2',
      pergunta: 'Micro-Checkpoint 2: O Modelo Sense-Making de Brenda Dervin',
      item: 'A teoria do Sense-Making, formulada por Brenda Dervin para estudos de usuários, assenta-se na premissa de que as necessidades de informação são exclusivamente quantitativas e devem ser investigadas mediante a contagem estatística de itens emprestados nas estantes.',
      gabarito: 'E',
      justificativa: 'Errado! O Sense-Making é o exemplo paradigmático da abordagem qualitativa e construtivista, que estuda a criação de sentido pelo usuário em situações de lacuna cognitiva (Gap).',
    },
      {
      id: 'cp-4-4-3',
      pergunta: "Micro-Checkpoint 3: Modelo ISP de Carol Kuhlthau",
      item: "No Modelo de Processo de Busca de Informação (ISP) de Carol Kuhlthau, os estágios iniciais de 'Iniciação' e 'Seleção' são tipicamente acompanhados por sentimentos de incerteza, dúvida e ansiedade por parte do usuário.",
      gabarito: 'C',
      justificativa: "Certo! O modelo pioneiro de Kuhlthau integra as dimensões cognitiva, física e afetiva, demonstrando que a incerteza inicial diminui à medida que o foco de pesquisa é formulado com clareza.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-4-1',
        periodo: '1958',
        disciplina: 'DSI (Disseminação Seletiva)',
        focoPrincipal: 'Criação do conceito de Selective Dissemination of Information com cruzamento automatizado de perfis',
        figuraChave: 'Hans Peter Luhn',
      },
      {
        id: 'tl-4-4-2',
        periodo: '1979 / 1995',
        disciplina: 'Serviço de Referência',
        focoPrincipal: 'Sistematização do processo de referência em 8 etapas e a prática da entrevista',
        figuraChave: 'Denis Grogan',
      },
      {
        id: 'tl-4-4-3',
        periodo: '1981 / 1983',
        disciplina: 'Comportamento Informacional',
        focoPrincipal: 'Ruptura com o modelo tradicional: modelos de Wilson e teoria do Sense-Making de Dervin',
        figuraChave: 'Tom Wilson e Brenda Dervin',
      },
    ],
    autores: [
      {
        id: 'aut-4-4-1',
        nome: 'Denis Grogan',
        ano: 1995,
        obraPrincipal: 'A prática do serviço de referência',
        ideiaChave: 'As 8 etapas do processo de referência, a dinâmica da entrevista e a mitigação da ansiedade informacional.',
        chipPegadinha: 'A questão inicial quase nunca expressa a necessidade real do usuário; a questão negociada resulta da entrevista.',
      },
      {
        id: 'aut-4-4-2',
        nome: 'Brenda Dervin',
        ano: 1983,
        obraPrincipal: 'An overview of sense-making research: concepts, methods, and results',
        ideiaChave: 'A abordagem do Sense-Making: o usuário construindo pontes para superar lacunas de incerteza no mundo.',
        chipPegadinha: 'Sense-Making usa métodos qualitativos, não quantitativos.',
      },
      {
        id: 'aut-4-4-3',
        nome: 'Hans Peter Luhn',
        ano: 1958,
        obraPrincipal: 'A Business Intelligence System',
        ideiaChave: 'Criador da DSI: perfil do usuário, perfil dos documentos, matching e feedback contínuo.',
        chipPegadinha: 'DSI é serviço de alerta/notificação corrente personalizado, não mera lista geral de novidades.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-4-1',
        afirmacao: 'O serviço de referência é considerado uma atividade meramente intermediária e de apoio administrativo em uma biblioteca, similar à encadernação e ao reparo físico de obras.',
        gabarito: 'E',
        porQue: 'O serviço de referência é a atividade-fim primordial da biblioteca, onde se concretiza a mediação humana direta entre o conhecimento e o usuário.',
      },
      {
        id: 'peg-4-4-2',
        afirmacao: 'Nos estudos de usuários segundo a teoria de Tom Wilson, as necessidades de informação são consideradas necessidades primárias e autônomas do indivíduo.',
        gabarito: 'E',
        porQue: 'Wilson demonstra que a necessidade de informação é uma necessidade SECUNDÁRIA, que nasce para tentar satisfazer necessidades primárias (fisiológicas, afetivas ou cognitivas).',
      },
    ],
  },
};
