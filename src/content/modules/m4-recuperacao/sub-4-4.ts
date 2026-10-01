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

#### As Oito Etapas Decisórias do Processo de Referência
Grogan decompõe a dinâmica da referência em uma cadeia sequencial inegociável:
1. **O Problema:** O contexto real, acadêmico ou legislativo do usuário que gera um impasse prático ou intelectual.
2. **A Necessidade de Informação:** A tomada de consciência interior pelo usuário de que ele necessita de dados ou subsídios para solucionar seu problema.
3. **A Questão Inicial:** A pergunta expressa pelo usuário ao chegar ao balcão ou chat. Quase sempre é uma pergunta imperfeita, vaga ou distorcida da real necessidade.
4. **A Questão Negociada:** O resultado da **entrevista de referência**: mediante escuta ativa e perguntas bem formuladas, o bibliotecário decodifica a real necessidade informacional oculta por trás da questão inicial.
5. **A Estratégia de Busca:** O plano mental ou estruturado em operadores booleanos, campos e fontes adequadas para executar a consulta.
6. **O Processo de Busca:** A navegação concreta e a recuperação física ou eletrônica nos sistemas, bases de dados e estantes.
7. **A Resposta:** O conjunto de dados, citações, referências ou documentos entregues ao usuário.
8. **A Solução:** O julgamento de relevância feito pelo próprio usuário, avaliando se a resposta de fato resolveu o seu problema original.

---

### 2. A Entrevista de Referência e o Serviço Digital

* **A Entrevista de Referência:**
  * Diálogo interpessoal que tem por objetivo clarificar a dúvida do usuário e reduzir a **ansiedade informacional**.
  * Requer o uso hábil de **perguntas abertas** no início (para estimular o usuário a contextualizar o problema) e **perguntas fechadas** no fechamento (para delimitar datas, idiomas, escopo e nível de aprofundamento).
* **Serviço de Referência Virtual (SRV):**
  * *Modalidade Síncrona:* Interação em tempo real (chat, mensagens instantâneas, videoconferência). Exige agilidade e competências comunicacionais textuais.
  * *Modalidade Assíncrona:* O usuário formula a demanda e recebe a resposta com intervalo de tempo (e-mail, formulários web, sistemas de tickets e FAQs).

---

### 3. A Disseminação Seletiva da Informação (DSI) de Hans Peter Luhn

Desenvolvida pelo engenheiro da IBM **Hans Peter Luhn** em 1958, a DSI é a modalidade mais refinada de serviço de alerta corrente:
* **Conceito:** Canalização contínua de novos itens de informação relevantes diretamente para o usuário cuja probabilidade de uso seja alta.
* **Componentes Estruturais:**
  1. *Perfil de Interesse do Usuário:* Conjunto de termos, descritores, autores ou áreas temáticas que representam os interesses de pesquisa do usuário.
  2. *Perfil do Documento:* Descritores e metadados atribuídos aos novos documentos ingressados no sistema.
  3. *Mecanismo de Comparação (*Matching*):* Software que cruza periodicamente a base de perfis com as novas entradas.
  4. *Envio de Notificações / Alertas:* Mensagens personalizadas via e-mail, feeds RSS ou aplicativo.
  5. *Mecanismo de Retroalimentação (*Feedback*):* O usuário avalia a pertinência dos itens recebidos ("relevante" / "não relevante"), permitindo refinar e calibrar continuamente seu perfil.

---

### 4. Teorias do Comportamento Informacional e Estudos de Usuários

A evolução dos estudos de usuários transitou do paradigma tradicional para o alternativo:

* **Abordagem Tradicional (Centrada no Sistema):**
  * Foco nos produtos, no acervo e na tecnologia. Métodos puramente quantitativos de contagem de circulação e frequência à biblioteca. Considera o usuário como consumidor passivo.
* **Abordagem Alternativa / Moderna (Centrada no Usuário):**
  * Foco no ser humano que busca sentido, em seus processos cognitivos, modelos mentais e estados emocionais em contextos socioculturais específicos (métodos qualitativos).

#### Os Quatro Modelos Teóricos Canônicos:
1. **Tom Wilson (1981 / 1996):** As necessidades de informação são necessidades secundárias decorrentes de necessidades fisiológicas, afetivas ou cognitivas. O comportamento de busca é modulado por variáveis psicológicas, ambientais e demográficas, e envolve desde buscas ativas até o encontro fortuito com a informação (*information encountering*).
2. **Brenda Dervin (*Sense-Making*):** O ser humano movimenta-se pelo tempo e espaço construindo sentido. Quando encontra uma descontinuidade ou barreira cognitiva (**lacuna / gap**), cria estratégias (**pontes**) para obter a informação e alcançar um novo resultado funcional.
3. **Nicholas Belkin (*Anomalous State of Knowledge - ASK*):** O usuário inicia a busca por estar em um estado cognitivo imperfeito. Por não saber exatamente o que lhe falta, é incapaz de formular uma busca perfeita de início, necessitando da mediação interativa do sistema ou do bibliotecário.
4. **Carol Kuhlthau (*Information Search Process - ISP*):** Mapeia os seis estágios da pesquisa (Iniciação, Seleção, Exploração, Formulação, Coleta, Apresentação), demonstrando que o usuário vivencia sentimentos de grande ansiedade, dúvida e frustração no início, os quais se convertem em confiança e alívio à medida que a clareza conceitual é alcançada.

---

### 5. Competência Informacional (*Information Literacy*)

Conforme a Declaração de Alexandria da UNESCO (2005) e as diretrizes da ALA/ACRL:
* É o conjunto integrado de conhecimentos, habilidades e atitudes que permite a um indivíduo **reconhecer quando precisa de informação, saber localizá-la, avaliá-la criticamente e utilizá-la eticamente** para a tomada de decisões e a produção de novos conhecimentos.
* No contexto parlamentar da Câmara dos Deputados, o bibliotecário atua como educador e mediador infocomunicacional, capacitando assessores e cidadãos no uso crítico das fontes públicas.`,
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
