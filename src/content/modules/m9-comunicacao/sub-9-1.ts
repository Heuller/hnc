import type { ModuloFilho } from '../../../domain/types';

export const submodulo91: ModuloFilho = {
  id: 'sub-9-1',
  numero: '9.1',
  titulo: 'Ciclo da Comunicação Científica, Canais e Avaliação por Pares',
  descricaoCurta: 'O fluxo e ciclo da comunicação científica (A. J. Meadows e Garvey-Griffith), distinção entre canais formais e informais, os colégios invisíveis (Derek de Solla Price), as 4 normas mertonianas (CUDOS), preprints e modalidades de avaliação por pares.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['A. J. Meadows', 'Derek de Solla Price', 'Robert K. Merton', 'William Garvey & Belver Griffith', 'John Ziman'],
  alertasCebraspe: [
    'Diferenciação canônica entre canais formais e informais (A. J. Meadows / Garvey-Griffith): Canais Formais (periódicos científicos revisados, livros acadêmicos, patentes) têm validação institucional, registro público permanente, ampla acessibilidade e controle bibliográfico; Canais Informais (conversas de laboratório, e-mails, colégios invisíveis, reuniões científicas) são efêmeros, rápidos, não indexados e sem controle bibliográfico prévio.',
    'Colégios Invisíveis (Derek de Solla Price): redes informais de cooperação ativa e ágil entre pesquisadores de ponta que compartilham dados, manuscritos preliminares e impressões muito antes da publicação formal. O Cebraspe adora afirmar que nos colégios invisíveis os cientistas "são isolados e não se comunicam": ERRADO!',
    'As Quatro Normas Institucionais de Merton (Ethos Científico - CUDOS): Comunismo/Comunalismo (conhecimento como herança pública comum), Universalismo (critérios de validade independentes da pessoa do cientista), Desinteresse (motivação pela verdade, e não por ganho pessoal escuso) e Ceticismo Organizado (escrutínio crítico e suspensão de juízo até provas empíricas).',
    'Avaliação por Pares (Peer Review): simples-cega (o autor não sabe quem é o avaliador, mas o avaliador sabe quem é o autor); duplo-cega / double-blind (nem autor nem avaliador sabem a identidade recíproca - anonimização tradicional); aberta / open peer review (as identidades de autor e avaliador são públicas e os pareceres podem ser divulgados com o artigo).',
    'Preprints: manuscritos científicos completos disponibilizados publicamente em servidores abertos (arXiv, SciELO Preprints, bioRxiv) ANTES de passarem pela avaliação formal por pares, garantindo prioridade de descoberta e disseminação em tempo real.',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Canais de Comunicação Científica (Meadows, Price e Garvey-Griffith)',
    colunas: ['Critério Comparativo', 'Canais Informais de Comunicação', 'Canais Formais de Comunicação', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Velocidade de Transmissão', 'Quase instantânea (tempo real, trocas diretas)', 'Lenta (meses ou anos de submissão, peer review e editoração)', 'Afirmar que a publicação em periódicos formais é mais rápida que a troca informal.'],
      ['Público e Alcance', 'Restrito a grupos de pesquisa e redes pessoais (Colégios Invisíveis)', 'Universal, aberto a qualquer leitor e pesquisador no mundo', 'Considerar que os colégios invisíveis têm circulação universal e aberta ao público geral.'],
      ['Controle e Validação', 'Sem controle formal de qualidade institucional', 'Validação rigorosa por pares (*peer review*) e comitê editorial', 'Dizer que artigos de periódicos são canais informais por circularem em congressos.'],
      ['Memória e Registro', 'Efêmero, volátil e de difícil rastreamento documental', 'Permanente, indexado em bases de dados e arquivado perenemente', 'Afirmar que conversas informais e e-mails garantem controle bibliográfico duradouro.'],
      ['Exemplos Típicos', 'E-mails, preprints preliminares, conversas em laboratório e chats', 'Artigos em revistas indexadas, livros acadêmicos e patentes concedidas', 'Confundir o artigo de periódico científico publicado com canal informal da ciência.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Natureza Sociológica da Ciência e da Comunicação Científica

A Ciência da Informação contemporânea apoia-se nas formulações de **Arthur Jack Meadows** (*A Comunicação Científica*, 1999) e **John Ziman** (*Conhecimento Público*, 1979) para definir o caráter indissociável entre ciência e comunicação:

> *"Uma pesquisa científica só se completa verdadeiramente quando os seus resultados são comunicados, validados criticamente pela comunidade e incorporados ao patrimônio do saber público registrado."* — A. J. Meadows

* **O Princípio do Conhecimento Público:** Uma descoberta mantida em segredo no laboratório não possui valor científico social. A ciência é um processo coletivo de consenso racional decorrente da crítica interpares.
* **O Ethos Científico de Robert K. Merton (As Quatro Normas CUDOS - 1942):**
  A conduta da comunidade científica apoia-se em quatro imperativos institucionais normativos:
  1. **Comunalismo / Comunismo Epistêmico (C):** Os achados da ciência são frutos de cooperação social e pertencem a toda a humanidade como patrimônio comum. A apropriação privada de leis da natureza é vedada; o cientista reivindica apenas o reconhecimento moral da autoria e da prioridade da descoberta.
  2. **Universalismo (U):** As afirmações científicas devem ser submetidas a critérios impessoais pré-estabelecidos. A validação de uma teoria independe da raça, nacionalidade, religião, gênero ou prestígio social de quem a propôs.
  3. **Desinteresse (D):** A atividade científica deve ser orientada primordialmente pela busca desinteressada da verdade e pelo progresso do saber, e não pela obtenção de lucros pecuniários pessoais egoístas.
  4. **Ceticismo Organizado (OS):** Suspensão temporária de julgamento e escrutínio crítico impiedoso sobre todas as hipóteses. Nenhuma verdade científica é imune a testes empíricos rigorosos e refutações.

---

### 2. O Fluxo da Informação Científica: O Modelo Garvey-Griffith

Desenvolvido pelos psicólogos e cientistas da informação **William Garvey e Belver Griffith** (1972), o modelo descreve a trajetória temporal que uma ideia científica percorre:

\`\`\`timeline
INF | 1. Canais Informais | Fase Preliminar e Restrita | Trocas verbais de laboratório, correios eletrônicos e debates em colégios invisíveis
---> Registro Escrito Aberto
PRE | 2. Preprints e Relatórios | Comunicação Semiformal Rápida | Depósito preliminar em servidores abertos de preprints e relatórios técnicos institucionais
---> Validação e Feedback Entre Pares
CONG | 3. Congressos e Anais | Exposição Acadêmica Pública | Apresentações em simpósios, debates em painéis e publicação de resumos em anais de eventos
---> Submissão e Revisão por Pares (Peer Review)
REV | 4. Periódico Científico | Canal Formal Canônico | Avaliação cega por pares (*double-blind review*), editoração, atribuição de DOI e publicação oficial
---> Impacto, Disseminação e Mapeamento
INDEX | 5. Indexação e Citações | Absorção pela Comunidade Científica | Inclusão em bases de resumos/índices (Scopus, Web of Science, SciELO) e acúmulo de citações
---> Sedimentação Epistêmica
CONS | 6. Saber Consolidado | Livros Didáticos e Tratados | O conhecimento testado e aceito converte-se em paradigma nos manuais (*textbooks*) e enciclopédias
\`\`\`

1. **Fase Informal (Rápida e Restrita):** Trocas diretas no laboratório, correspondência entre pares e distribuição de cópias preliminares de manuscritos aos membros do grupo.
2. **Fase Semi-formal:** Comunicação de resultados em mesas-redondas, congressos científicos e anais de eventos (permite receber feedbacks rápidos da comunidade).
3. **Fase Formal (Lenta e Pública):** Redação do artigo e submissão ao periódico indexado, submissão ao comitê editorial e revisores (*peer review*), editoração, atribuição de DOI e publicação oficial.
4. **Fase de Consolidação e Memória:** O artigo é indexado em bases referenciais (Scopus, Web of Science, SciELO), recebe citações de outros cientistas, é sintetizado em artigos de revisão (*review articles*) e, finalmente, após anos, entra nos livros didáticos (*textbooks*).

---

### 3. Canais Formais vs. Informais e os Colégios Invisíveis de Solla Price

* **Canais Formais de Comunicação:**
  * Veículos oficiais de registro da ciência: periódicos científicos arbitrados, livros acadêmicos monográficos, relatórios técnicos oficiais publicados e patentes concedidas.
  * *Atributos:* Ampla acessibilidade pública universal, estabilidade perene no tempo, rigoroso controle bibliográfico internacional e validação institucionalizada por pareceristas.
  * O **periódico científico** (cujo nascimento remonta a 1665 com o *Journal des Sçavans* em Paris e a *Philosophical Transactions of the Royal Society* em Londres) é o veículo formal hegemônico do saber científico há mais de 350 anos.
* **Canais Informais e os Colégios Invisíveis (*Invisible Colleges*):**
  * Conceito cunhado pelo historiador da ciência **Derek de Solla Price** (*Little Science, Big Science*, 1963):
  * Descreve as redes informais de cooperação e interlocução ágil mantidas pelos principais pesquisadores situados na vanguarda de determinada especialidade científica.
  * *Mecanismo Operacional:* Troca contínua de impressões, dados brutos, manuscritos não publicados e comentários críticos por canais diretos (antigamente por cartas e encontros pessoais; hoje por e-mail, redes sociais acadêmicas e aplicativos de mensagens).
  * *⚠️ Atenção Cebraspe:* A banca adora afirmar que os cientistas dos colégios invisíveis trabalham isolados ou não dialogam entre si. **ERRADO!** Os colégios invisíveis são justamente os canais informais mais intensos, velozes e influentes de cooperação científica internacional.

---

### 4. Modalidades de Avaliação por Pares (*Peer Review*) e a Ciência Aberta

A avaliação por pares é o filtro epistêmico e o mecanismo de controle de qualidade e integridade metodológica que distingue a literatura científica da publicação comum:

| Modalidade de Peer Review | Anonimato do Autor | Anonimato do Revisor | Vantagens Centrais | Críticas e Fragilidades Mapeadas |
| :--- | :--- | :--- | :--- | :--- |
| **Simples-Cega (*Single-Blind*)** | Não (o revisor sabe quem é o autor). | Sim (o autor não sabe quem é o revisor). | O revisor expressa críticas com total liberdade sem temer represálias. | Risco de viés discriminatório contra autores iniciantes, mulheres ou de países periféricos. |
| **Duplo-Cega (*Double-Blind*)** | Sim (o revisor não conhece o autor). | Sim (o autor não conhece o revisor). | **Padrão mais tradicional:** mitiga preconceitos institucionais e foca no mérito do texto. | Em áreas muito especializadas, o revisor frequentemente deduz quem é o autor pelo estilo e citações. |
| **Triplo-Cega (*Triple-Blind*)** | Sim (inclusive para o editor-chefe). | Sim (para todos). | Elimina o viés do editor na triagem inicial (*desk reject*). | Complexidade administrativa e operacional elevada na gestão editorial. |
| **Aberta (*Open Peer Review*)** | Não (público para todos). | Não (público para todos). | **Pilar da Ciência Aberta:** transparência total, civilidade, publicação dos pareceres ao lado do artigo e crédito acadêmico aos pareceristas. | Dificuldade em recrutar revisores que se disponham a assinar publicamente pareceres críticos negativos sobre líderes da área. |

---

### 5. Preprints e a Mudança de Paradigma na Circulação da Ciência

* **Conceito Canônico:** Um *preprint* é uma versão completa de um manuscrito científico disponibilizada publicamente em um repositório aberto de preprints (ex.: arXiv para física/matemática, bioRxiv para biologia, SciELO Preprints para América Latina) **ANTES** de passar pela avaliação formal por pares de um periódico.
* **Benefícios para a Comunidade Científica:**
  1. *Rapidez e Agilidade:* Elimina o longo tempo de espera da publicação formal (que pode levar de 6 meses a 2 anos), permitindo que descobertas urgentes (ex.: vacinas e pandemias) circulem imediatamente.
  2. *Garantia de Prioridade Intelectual:* O depósito recebe um carimbo de data (*timestamp*) e um identificador persistente (DOI), assegurando o pioneirismo da descoberta.
  3. *Aprimoramento Colaborativo:* Permite que a comunidade leia o manuscrito e envie críticas e sugestões ao autor antes da submissão formal definitiva a uma revista científica.`,
  checkpoints: [
    {
      id: 'cp-9-1-1',
      pergunta: 'Micro-Checkpoint 1: Os Colégios Invisíveis de Solla Price',
      item: 'No âmbito da comunicação científica, a teoria dos colégios invisíveis descreve redes de trabalho científico compostas por pesquisadores que se isolam institucionalmente e que não se comunicam entre si.',
      gabarito: 'E',
      justificativa: 'Errado! Essa é uma casca de banana clássica do Cebraspe (SUFRAMA). Os colégios invisíveis são exatamente o OPOSTO: redes intensas e ágeis de comunicação informal direta e compartilhamento entre cientistas.',
    },
    {
      id: 'cp-9-1-2',
      pergunta: 'Micro-Checkpoint 2: Canais Formais da Ciência',
      item: 'Os canais formais da comunicação científica, exemplificados pelos periódicos científicos arbitrados, caracterizam-se por propiciar o registro público permanente, a ampla visibilidade e o controle bibliográfico da produção científica.',
      gabarito: 'C',
      justificativa: 'Correto! Os canais formais garantem o rigor, o controle de qualidade por pares e a preservação duradoura na memória científica mundial.',
    },
    {
      id: 'cp-9-1-3',
      pergunta: 'Micro-Checkpoint 3: Canais Formais vs Informais de Garvey-Griffith',
      item: 'No modelo de comunicação científica de Garvey e Griffith, os artigos publicados em periódicos científicos indexados com revisão por pares enquadram-se na categoria de canais informais de comunicação.',
      gabarito: 'E',
      justificativa: 'Errado! Artigos em periódicos científicos com peer review são o exemplo canônico e central de canal FORMAL (público, arquivável e validado pela comunidade). Canais informais englobam cartas, e-mails, pré-prints e conversas orais em congressos.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-1-1',
        periodo: '1665',
        disciplina: 'Nascimento dos Periódicos',
        focoPrincipal: 'Surgimento do Journal des Sçavans (França) e da Philosophical Transactions (Inglaterra)',
        figuraChave: 'Royal Society e Denis de Sallo',
      },
      {
        id: 'tl-9-1-2',
        periodo: '1942',
        disciplina: 'Sociologia da Ciência',
        focoPrincipal: 'Robert K. Merton formula as 4 normas do Ethos Científico (CUDOS)',
        figuraChave: 'Robert K. Merton',
      },
      {
        id: 'tl-9-1-3',
        periodo: '1963',
        disciplina: 'Cientometria e Redes',
        focoPrincipal: 'Publicação de "Little Science, Big Science" e conceituação dos Colégios Invisíveis',
        figuraChave: 'Derek de Solla Price',
      },
      {
        id: 'tl-9-1-4',
        periodo: '1972 / 1999',
        disciplina: 'Comunicação Científica',
        focoPrincipal: 'Modelo Garvey-Griffith e publicação de "A Comunicação Científica" por A. J. Meadows',
        figuraChave: 'William Garvey e A. J. Meadows',
      },
    ],
    autores: [
      {
        id: 'aut-9-1-1',
        nome: 'A. J. Meadows',
        ano: 1999,
        obraPrincipal: 'A Comunicação Científica / The Scientific Journal',
        ideiaChave: 'O ciclo da comunicação formal e informal na ciência e a sociologia da publicação acadêmica.',
        chipPegadinha: 'A pesquisa não termina no laboratório; só existe se for comunicada formalmente.',
      },
      {
        id: 'aut-9-1-2',
        nome: 'Derek de Solla Price',
        ano: 1963,
        obraPrincipal: 'Little Science, Big Science',
        ideiaChave: 'Pai da Cientometria; conceito de Colégios Invisíveis e crescimento exponencial da ciência.',
        chipPegadinha: 'Colégios Invisíveis são redes informais de cientistas em comunicação ativa e ágil.',
      },
      {
        id: 'aut-9-1-3',
        nome: 'Robert K. Merton',
        ano: 1942,
        obraPrincipal: 'A Estrutura Normativa da Ciência',
        ideiaChave: 'As 4 normas mertonianas (CUDOS): Comunalismo, Universalismo, Desinteresse e Ceticismo Organizado.',
        chipPegadinha: 'Comunalismo mertoniano prega que a ciência é patrimônio público de todos, não propriedade privada.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-1-1',
        afirmacao: 'O livre acesso à literatura científica dispensou a necessidade de avaliação por pares na editoração de periódicos acadêmicos.',
        gabarito: 'E',
        porQue: 'O Acesso Aberto mantém integralmente o rigor da avaliação por pares (peer review); o que muda é o modelo de cobrança de assinaturas, não o crivo científico.',
      },
      {
        id: 'peg-9-1-2',
        afirmacao: 'Informações científicas preliminares divulgadas em palestras, comunicações orais e correspondências eletrônicas constituem canais formais da comunicação científica.',
        gabarito: 'E',
        porQue: 'Palestras, conversas e correspondências são canais INFORMAIS. Canais formais são os registros publicados de forma perene com revisão editorial.',
      },
      {
        id: 'peg-9-1-3',
        afirmacao: 'Um preprint publicado em servidor aberto de preprints equivale formalmente a um artigo científico com validação de peer review concluída.',
        gabarito: 'E',
        porQue: 'O preprint é disponibilizado exatamente ANTES da avaliação formal por pares; ele atesta a prioridade da ideia, mas ainda carece de validação pelos pareceristas de uma revista.',
      },
    ],
  },
};
