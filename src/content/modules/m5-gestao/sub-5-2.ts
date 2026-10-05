import type { ModuloFilho } from '../../../domain/types';

export const submodulo52: ModuloFilho = {
  id: 'sub-5-2',
  numero: '5.2',
  titulo: 'CRM em Serviços de Informação, Curadoria e Produtos de Inteligência Informacional',
  descricaoCurta: 'Gestão de Relacionamento (CRM de Paul Greenberg: operacional, analítico e colaborativo), Personalização e DSI (Eirão & Cunha), Curadoria de Informação (Bezerra) e elaboração de Dossiês, Estados da Arte e Panoramas (Candido).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Paul Greenberg', 'Thiago Gomes Eirão', 'Murilo Bastos da Cunha', 'Arthur Bezerra', 'Renato Alexandre Candido'],
  alertasCebraspe: [
    'CRM em Serviços de Informação (Paul Greenberg): divide-se na tríade canônica: 1. CRM Operacional (pontos de contato direto, automação de balcão e circulação); 2. CRM Analítico (mineração de dados, identificação de padrões de busca e antecipação de demandas); e 3. CRM Colaborativo (interação multicanal e diálogo contínuo com os usuários para cocriação de serviços). O Cebraspe adora inverter as funções de CRM Analítico e Operacional!',
    'Disseminação Seletiva da Informação (DSI) e Personalização (Eirão & Cunha): modernizada por tecnologias de alerta, feeds RSS e agentes inteligentes, a DSI não envia tudo para todos; ela confronta o perfil de interesse previamente cadastrado com as novas entradas do acervo, reduzindo a sobrecarga informacional (infoxicação).',
    'Curadoria de Informação (Arthur Bezerra): transcende a mera coleta e guarda mecânica de documentos; envolve seleção crítica, validação de autoridade, filtragem contra desinformação, contextualização e enriquecimento semântico para entregar valor analítico ao tomador de decisão.',
    'Produtos de Inteligência Informacional (Candido): a elaboração de Dossiês, Estados da Arte e Panoramas baseia-se na triangulação metodológica entre indicadores bibliométricos (núcleo de autores e periódicos mais citados) e análise qualitativa contextual, organizando linhas do tempo e matrizes comparativas.',
  ],
  quadroComparativo: {
    titulo: 'As Três Dimensões do CRM (Customer Relationship Management) de Paul Greenberg',
    colunas: ['Dimensão do CRM', 'Foco de Atuação', 'Aplicação Prática em Bibliotecas e CEDI', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['CRM Operacional', 'Processos e pontos de contato com o usuário (*front-office*)', 'Balcão de referência, empréstimo automatizado, canais de atendimento e agendamentos', 'Afirmar que o CRM operacional faz mineração preditiva de dados (FALSO: é função do Analítico).'],
      ['CRM Analítico', 'Análise de dados de uso e perfis de comportamento (*back-office*)', 'Identificação de padrões de empréstimo, termos mais buscados e antecipação de temas legislativos', 'Dizer que o CRM analítico é apenas o envio de formulários de pesquisa de satisfação (FALSO).'],
      ['CRM Colaborativo', 'Comunicação e integração multicanal com os usuários', 'Portais participativos, integração com redes sociais institucionais, chats e ouvidoria', 'Afirmar que o CRM colaborativo substitui o atendimento técnico presencial (FALSO).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O CRM (Customer Relationship Management) Aplicado a Serviços de Informação

Com a transição paradigmática para a gestão focada nas necessidades do cidadão e do parlamentar, as bibliotecas especializadas e centros de documentação adotam a metodologia de **CRM** (*Customer Relationship Management*), conceituada por **Paul Greenberg** (*CRM na Velocidade da Luz*):

* **Conceito Canônico:** CRM é uma estratégia de negócios e gestão informacional, apoiada por tecnologia, projetada para otimizar a rentabilidade, as receitas e a **satisfação dos usuários**, organizando a instituição em torno de segmentos de clientes.
* **A Tríade Estrutural do CRM (Paul Greenberg):**
  1. **CRM Operacional (*Front-Office*):**
     * Abrange a automação e integração de todos os pontos de contato direto com o usuário: serviços de referência presencial e virtual, circulação de obras, atendimento a consultas legislativas e gestão de solicitações no balcão.
  2. **CRM Analítico (*Back-Office*):**
     * Utiliza ferramentas de análise de dados, *data warehouse* e mineração (*data mining*) para capturar, estruturar e interpretar o histórico de interações informacionais dos usuários.
     * *Aplicação na Câmara:* Analisa quais temas normativos, proposições e bases doutrinárias apresentam maior pico de demanda pelas consultorias em diferentes períodos legislativos, permitindo a aquisição e o processamento técnico antecipado de acervos estratégicos.
  3. **CRM Colaborativo:**
     * Promove a integração e o compartilhamento de dados entre diferentes setores da instituição (Biblioteca, Arquivo, Consultoria Legislativa e Gabinetes), garantindo que o parlamentar receba atendimento unificado e coerente independentemente do canal escolhido (presencial, e-mail, intranet ou aplicativo móvel).

---

### 2. Disseminação Seletiva da Informação (DSI) e Personalização de Serviços

A Disseminação Seletiva da Informação, concebida originalmente por Hans Peter Luhn (1958) e aprofundada por **Thiago Gomes Eirão** e **Murilo Bastos da Cunha** (2011), é o serviço no qual a unidade de informação atua proativamente:

* **O Mecanismo da DSI:**
  $$\\text{Perfil de Interesses do Usuário} \\longleftrightarrow \\text{Perfil das Novas Informações do Acervo} \\implies \\text{Notificação Direcionada}$$
* **Adoção de Tecnologias Contemporâneas:**
  * Uso de canais RSS (*Really Simple Syndication*), alertas automatizados por e-mail, notificações via push em aplicativos e agentes inteligentes.
  * O usuário cadastra temas e palavras-chave de seu interesse (ex.: "Reforma Tributária", "Inteligência Artificial no Setor Público") e o sistema dispara relatórios analíticos periódicos apenas quando novas proposições, leis promulgadas ou artigos especializados ingressam nas bases canônicas (SILEG, LexML, RVBI).
* **Mitigação da Infoxicação (*Information Overload*):** A personalização é uma barreira técnica contra a sobrecarga informacional, garantindo que o assessor receba apenas o que é relevante e acionável.

---

### 3. Curadoria de Informação e Curadoria Digital (Arthur Bezerra)

Conforme **Arthur Bezerra** (2017), a curadoria de informação supera a mera catalogação descritiva ou arquivamento técnico passivo:

* **O Ciclo da Curadoria Informacional:**
  1. **Identificação e Seleção Crítica:** Filtragem rigorosa em meio ao dilúvio informacional (*big data*), avaliando autoridade, atualidade e confiabilidade da fonte.
  2. **Validação e Combate à Desinformação:** Verificação contra manipulações factuais, notícias falsas (*fake news*) e alucinações de modelos generativos.
  3. **Contextualização e Enriquecimento:** Adição de metadados analíticos, vínculos com normas correlatas, sínteses executivas e notas de rodapé explicativas.
  4. **Preservação e Acesso Contínuo:** Manutenção da integridade do objeto digital e disponibilização em plataformas abertas e interoperáveis.

---

### 4. Produtos de Inteligência Informacional: Dossiês, Estados da Arte e Panoramas

Na dinâmica do Poder Legislativo, os parlamentares e formuladores de políticas públicas demandam sínteses executivas de alta precisão (Candido, 2023):

* **Notas Informacionais:** Textos sintéticos e objetivos (1 a 3 páginas) que elucidam um ponto jurídico ou técnico controverso de uma matéria em tramitação urgente.
* **Relatórios Temáticos e Panoramas:** Mapeamentos amplos que reúnem a contextualização histórica, os atores envolvidos (stakeholders), as posições divergentes e os impactos orçamentários de uma determinada política pública.
* **Dossiês Informacionais e Linhas do Tempo:**
  * Reúnem a íntegra de proposições anteriores, pareceres de comissões, legislações comparadas de outros países e decisões jurisprudenciais vinculantes sobre o tema.
  * *Metodologia de Recortes Temporais (Renato Candido):* Utiliza a associação entre a **análise bibliométrica** (identificação do núcleo de publicações mais citadas via leis bibliométricas) e a **revisão de estado da arte**, estruturando linhas do tempo cronológicas sem viés ideológico pré-concebido.`,
  checkpoints: [
    {
      id: 'cp-5-2-1',
      pergunta: 'Micro-Checkpoint 1: Dimensões do CRM em Unidades de Informação',
      item: 'No âmbito do modelo de CRM proposto por Paul Greenberg, a dimensão analítica é responsável pelo atendimento presencial no balcão e pelo empréstimo de livros físicos, enquanto a dimensão operacional cuida da mineração de dados estatísticos.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverte sistematicamente os papéis: o atendimento no balcão e os pontos de contato direto constituem o CRM OPERACIONAL; a mineração de dados e identificação de padrões de comportamento integram o CRM ANALÍTICO.',
    },
    {
      id: 'cp-5-2-2',
      pergunta: 'Micro-Checkpoint 2: Papel da Curadoria de Informação',
      item: 'A curadoria de informação difere da mera coleta e custódia documental por envolver um processo intelectual contínuo de seleção crítica, validação de autoridade, enriquecimento de metadados e contextualização para a tomada de decisão.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme demonstrado por Arthur Bezerra, a curadoria informacional é um processo ativo de agregação de valor semântico e filtragem crítica contra a desinformação.',
    },
    {
      id: 'cp-5-2-3',
      pergunta: 'Micro-Checkpoint 3: DSI e Sobrecarga Informacional',
      item: 'Os serviços de Disseminação Seletiva da Informação (DSI) atuam no combate à sobrecarga informacional ao confrontarem os perfis individuais de interesse com as novas entradas do acervo, encaminhando notificações direcionadas aos usuários.',
      gabarito: 'C',
      justificativa: 'Certo! A DSI (Eirão & Cunha) filtra o fluxo informacional, evitando a dispersão cognitiva e entregando apenas o que é pertinente ao usuário.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-2-1',
        periodo: '1958',
        disciplina: 'Origem da DSI',
        focoPrincipal: 'Hans Peter Luhn publica o conceito pioneiro de Disseminação Seletiva da Informação na IBM',
        figuraChave: 'Hans Peter Luhn',
      },
      {
        id: 'tl-5-2-2',
        periodo: '2001 / 2004',
        disciplina: 'Fundamentos de CRM',
        focoPrincipal: 'Publicação de "CRM na Velocidade da Luz": CRM operacional, analítico e colaborativo',
        figuraChave: 'Paul Greenberg',
      },
      {
        id: 'tl-5-2-3',
        periodo: '2011 / 2017',
        disciplina: 'DSI Moderna e Curadoria',
        focoPrincipal: 'Estudo de DSI com RSS no Judiciário (Eirão/Cunha) e consolidação da Curadoria Informacional (Bezerra)',
        figuraChave: 'Thiago Gomes Eirão e Arthur Bezerra',
      },
    ],
    autores: [
      {
        id: 'aut-5-2-1',
        nome: 'Paul Greenberg',
        ano: 2004,
        obraPrincipal: 'CRM at the Speed of Light (CRM na Velocidade da Luz)',
        ideiaChave: 'Tríade do CRM: operacional (contato), analítico (dados e mineração) e colaborativo (integração multicanal).',
        chipPegadinha: 'CRM analítico foca em padrões estatísticos de dados de uso, não no atendimento físico.',
      },
      {
        id: 'aut-5-2-2',
        nome: 'Arthur Bezerra',
        ano: 2017,
        obraPrincipal: 'Curadoria de Informação e Curadoria Digital',
        ideiaChave: 'Seleção crítica, agregação de valor semântico, validação de autoridade e combate à desinformação.',
        chipPegadinha: 'Curadoria não é mero arquivamento passivo; exige intervenção intelectual crítica.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-2-1',
        afirmacao: 'O CRM colaborativo limita-se ao envio de mensagens promocionais de marketing sem recolher feedbacks ou dados interativos dos usuários da biblioteca.',
        gabarito: 'E',
        porQue: 'O CRM colaborativo baseia-se na interação bidirecional multicanal, permitindo a cocriação e o diálogo constante entre o usuário e a instituição informacional.',
      },
      {
        id: 'peg-5-2-2',
        afirmacao: 'Para garantir a universalidade de atendimento, os serviços de Disseminação Seletiva da Informação (DSI) devem encaminhar a totalidade das novas publicações adquiridas a todos os servidores cadastrados.',
        gabarito: 'E',
        porQue: 'A premissa da DSI é a SELETIVIDADE: cruzar o perfil específico do usuário com o perfil do documento, evitando a infoxicação e o envio indiscriminado de dados.',
      },
    ],
  },
};
