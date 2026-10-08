import type { ModuloFilho } from '../../../domain/types';

export const submodulo54: ModuloFilho = {
  id: 'sub-5-4',
  numero: '5.4',
  titulo: 'Gestão da Informação e Gestão do Conhecimento Organizacional',
  descricaoCurta: 'Distinção epistemológica entre Gestão da Informação e Gestão do Conhecimento, modelo da Organização do Conhecimento de Chun Wei Choo, Espiral do Conhecimento SECI de Nonaka e Takeuchi, e ecologia da informação de Davenport.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Chun Wei Choo', 'Ikujiro Nonaka', 'Hirotaka Takeuchi', 'Michael Polanyi', 'Thomas H. Davenport', 'Laurence Prusak', 'Etienne Wenger'],
  alertasCebraspe: [
    'O Cebraspe adora trocar os papéis da Gestão da Informação (GI) e da Gestão do Conhecimento (GC): a Gestão da Informação cuida dos fluxos formais, do conhecimento explícito e dos suportes documentais/tecnológicos; a Gestão do Conhecimento cuida do capital intelectual, dos fluxos informais e do conhecimento tácito residente nas pessoas.',
    'Atenção máxima aos 4 modos de conversão do modelo SECI de Nonaka & Takeuchi: 1. Socialização (tácito para tácito via observação, convívio e mestre-aprendiz); 2. Externalização (tácito para explícito via metáforas, conceitos, modelos visuais e manuais - é a chave da criação do conhecimento); 3. Combinação (explícito para explícito via agregação, cruzamento de relatórios e bases); e 4. Internalização (explícito para tácito via "aprender fazendo" / learning by doing).',
    'Conhecimento tácito não pode ser armazenado diretamente em bancos de dados digitais ou sistemas de TI; para ser gravado e manipulado computacionalmente, ele DEVE ser primeiramente articulado e transformado em conhecimento explícito (externalização).',
    'Chun Wei Choo estabelece que a organização inteligente opera em três arenas articuladas: Construção de Sentido (Sense Making de Karl Weick), Criação do Conhecimento (SECI de Nonaka) e Tomada de Decisão (Racionalidade Limitada de Herbert Simon).',
    'Davenport e Prusak rejeitam o tecnocentrismo: na Ecologia da Informação, a tecnologia é apenas um dos componentes e deve subordinar-se aos fatores humanos, políticos e culturais da organização.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa: Gestão da Informação vs. Gestão do Conhecimento',
    colunas: ['Critério', 'Gestão da Informação (GI)', 'Gestão do Conhecimento (GC)'],
    linhas: [
      ['Objeto Central', 'Dados e informações estruturadas (conhecimento explícito e documentos)', 'Modelos mentais, intuições, experiências e competências das pessoas (conhecimento tácito)'],
      ['Enfoque Primário', 'Processos técnicos, fluxos formais, repositórios digitais e sistemas de TI', 'Pessoas, cultura organizacional, liderança, colaboração e redes informais'],
      ['Natureza do Fluxo', 'Fluxos verticais, padronizados, controlados e documentados', 'Fluxos horizontais, espontâneos, espiralados e interativos'],
      ['Local de Armazenamento', 'Servidores, bases de dados, arquivos físicos e catálogos bibliográficos', 'Cérebros humanos, vivências individuais e memórias compartilhadas de equipes'],
      ['Resultado Esperado', 'Disponibilidade, organização, integridade e recuperação rápida da informação', 'Inovação contínua, geração de novos saberes, tomada de decisão estratégica e aprendizado coletivo'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Fronteira Epistemológica entre Informação e Conhecimento

A Ciência da Informação contemporânea estabelece uma clara demarcação teórica e prática entre a **Gestão da Informação (GI)** e a **Gestão do Conhecimento (GC)** (Choo, 2003; Davenport & Prusak, 1998):

* **Gestão da Informação (GI):**
  * Tem como objeto os **dados estruturados**, as **informações registradas** e o **conhecimento explícito**.
  * Opera o ciclo documental completo: mapeamento de necessidades, coleta/aquisição, classificação/catalogação, armazenamento físico e digital, recuperação e disseminação.
  * Atua predominantemente sobre os **fluxos formais** de comunicação organizacional (sistemas informatizados, memorandos, boletins oficiais, SIGBs e repositórios).
* **Gestão do Conhecimento (GC):**
  * Tem como objeto o **capital intelectual**, o **conhecimento tácito** e as pessoas que formam o tecido social da organização.
  * Visa estabelecer um clima e uma cultura organizacional propícios ao compartilhamento de experiências, à retenção do saber crítico e à geração de inovações.
  * Mobiliza os **fluxos informais** de comunicação (as conversas de trabalho, os encontros fortuitos, as comunidades de prática e o relacionamento interdepartamental).

---

### 2. Conhecimento Tácito vs. Conhecimento Explícito (Michael Polanyi)

A distinção canônica entre as naturezas do conhecimento foi formulada pelo filósofo **Michael Polanyi** (*The Tacit Dimension*, 1966) e popularizada na administração por Nonaka e Takeuchi:

$$\\text{"Podemos saber mais do que podemos dizer."} \\quad - \\; \\text{Michael Polanyi}$$

| Dimensão | Conhecimento Tácito | Conhecimento Explícito |
| :--- | :--- | :--- |
| **Definição** | Altamente pessoal, intuitivo, subjetivo e profundamente enraizado na ação e no contexto de cada indivíduo. | Formal, articulado, codificado e expresso em linguagem simbólica formal (palavras, números, diagramas). |
| **Componentes** | *Dimensão técnica:* Habilidades práticas, *know-how*, truques de ofício (*craftsmanship*).<br>*Dimensão cognitiva:* Modelos mentais, esquemas conceituais, crenças e valores pessoais. | Manuais de instrução, especificações técnicas, patentes, bases de dados relacionais e livros de procedimentos. |
| **Transmissibilidade** | Difícil de formalizar e comunicar; transmite-se sobretudo por convivência, observação direta e prática partilhada. | Facilmente comunicável, reproduzível, armazenável eletronicamente e transmissível por redes digitais. |
| **Armazenamento em TI** | **Não pode ser armazenado diretamente em sistemas de TI.** Exige prévia explicitação/externalização. | Armazenado nativamente em servidores, bancos de dados, arquivos e catálogos. |

---

### 3. A Espiral do Conhecimento (Modelo SECI) de Nonaka e Takeuchi (1995)

Em sua obra seminal *Criação de Conhecimento na Empresa*, **Ikujiro Nonaka e Hirotaka Takeuchi** postulam que o conhecimento organizacional é criado a partir da interação dinâmica e contínua entre as dimensões ontológicas (indivíduo, grupo, organização, interorganizacional) e epistemológicas (tácito e explícito).

Essa dinâmica ocorre por meio de **quatro modos de conversão do conhecimento (SECI)**:

\`\`\`timeline
S | 1. Socialização | Tácito → Tácito | Compartilhamento de modelos mentais e experiências pelo convívio, observação e prática mestre-aprendiz
---> Diálogo e Reflexão Coletiva
E | 2. Externalização | Tácito → Explícito | Modo crítico: articulação do saber tácito em conceitos claros via metáforas, modelos visuais e manuais
---> Sistematização e Difusão
C | 3. Combinação | Explícito → Explícito | Reconfiguração e agregação de conhecimentos explícitos em relatórios, bases de dados e repositórios
---> Aprendizagem Prática (Learning by Doing)
I | 4. Internalização | Explícito → Tácito | Incorporação do conhecimento explícito aos modelos mentais individuais, reiniciando a espiral em nível superior
\`\`\`

1. **Socialização ($Tácito \rightarrow Tácito$):**
   * Compartilhamento de experiências vividas, percepções e modelos mentais sem a mediação necessária de códigos escritos.
   * Dá-se por observação, imitação, convívio diário e relação mestre-aprendiz.
   * *Exemplo em biblioteca:* Um bibliotecário recém-empossado acompanha um colega sênior em entrevistas de referência difíceis com parlamentares, absorvendo o tom de voz, o equilíbrio postural e a perspicácia na condução do diálogo.
2. **Externalização ($Tácito \rightarrow Explícito$):**
   * **É o modo crítico da criação do conhecimento.** Consiste na articulação do saber tácito individual em conceitos compreensíveis a todos, por meio do uso deliberado de **metáforas, analogias, conceitos formalizados, hipóteses ou modelos visuais**.
   * *Exemplo em biblioteca:* A equipe técnica de indexadores se reúne para redigir o *Manual de Indexação Parlamentar*, transformando regras intuitivas não escritas em diretrizes e fluxogramas objetivos.
3. **Combinação ($Explícito \rightarrow Explícito$):**
   * Reconfiguração, agregação e sistematização de diferentes corpos de conhecimentos explícitos já existentes.
   * Envolve a coleta de fontes diversas, análise de dados e criação de novos documentos integrados.
   * *Exemplo em biblioteca:* O bibliotecário cruza dados do catálogo automatizado com as estatísticas de votações da Câmara e relatórios de empréstimo para gerar um *Dashboard Executivo de Tendências Temáticas do Parlamento*.
4. **Internalização ($Explícito \rightarrow Tácito$):**
   * Incorporação do conhecimento explícito às rotinas mentais e à vivência prática dos colaboradores (*learning by doing*).
   * Ocorre quando a leitura de manuais e procedimentos técnicos se transforma em um hábito quase instintivo de atuação.
   * *Exemplo em biblioteca:* Após estudar profundamente o modelo conceitual IFLA LRM e o novo RDA Toolkit, o catalogador passa a atribuir atributos e relacionamentos de entidades de forma fluida e automática no dia a dia.

#### O Conceito de "Ba" (Nonaka e Konno, 1998)
O conhecimento não pode ser criado no vácuo; ele exige um espaço compartilhado de interação denominado **Ba**:
* **Originating Ba:** Espaço físico individual e face a face onde opera a Socialização (conversas informais, cafezinho).
* **Interacting / Dialoguing Ba:** Espaço de diálogo e reflexão coletiva onde atua a Externalização (oficinas de cocriação).
* **Cyber / Systemizing Ba:** Espaço virtual mediado por redes computacionais onde ocorre a Combinação (intranets, bases de dados, wikis).
* **Exercising Ba:** Espaço de treinamento prático e aplicação operacional onde se concretiza a Internalização.

---

### 4. A Organização do Conhecimento de Chun Wei Choo (2003)

Em *A Organização do Conhecimento: como as organizações usam a informação para criar significado, criar conhecimento e tomar decisões*, **Chun Wei Choo** articula a gestão em três arenas interdependentes:

1. **Construção de Sentido (*Sense Making* de Karl Weick):**
   * As organizações operam em ambientes externos turbulentos, dinâmicos e ambíguos.
   * A construção de sentido é o processo pelo qual os colaboradores interpretam sinais fracos, filtram ruídos e atribuem significado coletivo compartilhado àquilo que está acontecendo no mundo exterior.
2. **Criação de Conhecimento (Modelo de Nonaka & Takeuchi):**
   * Uma vez compreendido o ambiente, a instituição gera novas ideias, competências e capacidades a partir da espiral SECI, integrando o conhecimento tácito pessoal ao conhecimento cultural da organização.
3. **Tomada de Decisão (Racionalidade Limitada de Herbert Simon):**
   * O ser humano possui limites cognitivos de processamento da informação (*racionalidade limitada*).
   * A tomada de decisão consiste na identificação estruturada de alternativas, pesagem de consequências e seleção do curso de ação mais satisfatório para resolver problemas e cumprir a missão institucional.

\`\`\`timeline
A | Incerteza e Ruído do Ambiente | Ponto de Partida | Cenário externo dinâmico, turbulento e ambíguo com fluxo volumoso de dados dispersos
---> Filtragem Cognitiva
B | 1. Construção de Sentido (Sense Making) | Interpretação Coletiva | Mapeamento de sinais fracos, filtragem de ruído e atribuição de significado compartilhado (Karl Weick)
---> Conversão Epistêmica
C | 2. Criação de Conhecimento | Inovação Institucional | Geração de novas competências a partir da espiral SECI (tácito/explícito de Nonaka & Takeuchi)
---> Escolha Racional
D | 3. Tomada de Decisão | Ação Eficaz e Racionalidade | Seleção de cursos de ação sob racionalidade limitada de Herbert Simon, retroalimentando o ambiente
\`\`\`

---

### 5. A Ecologia da Informação de Thomas Davenport e Laurence Prusak

**Thomas H. Davenport** (*Ecologia da Informação*, 1997) faz uma crítica contundente ao reducionismo tecnicista (*tecnocentrismo*):

* **O Erro Tecnológico Clássico:** A falsa premissa de que basta comprar softwares sofisticados, instalar servidores potentes ou adquirir plataformas de IA para que a organização se torne inteligente.
* **A Visão Ecológica Integrada:**
  A informação deve ser gerenciada com foco primordial no **comportamento humano, nos valores culturais, na política interna e nos hábitos informacionais**.
* **Os Três Ambientes da Ecologia da Informação:**
  1. *Ambiente Informacional:* Composto por estratégia, política de informação (quem tem poder sobre a informação), cultura informacional, equipe de informação e tecnologia.
  2. *Ambiente Organizacional:* Estrutura hierárquica, modelo de negócios e processos operacionais da instituição.
  3. *Ambiente Externo:* Mercados, legislação, concorrentes e sociedade civil.

---

### 6. Ferramentas e Práticas de GC em Bibliotecas e CEDI

No âmbito de órgãos governamentais de cúpula e do Poder Legislativo, a gestão do conhecimento mobiliza práticas colaborativas avançadas:

* **Comunidades de Prática (CoPs - Etienne Wenger):**
  * Grupos de profissionais que compartilham uma paixão comum por determinado campo técnico e se reúnem regularmente para debater desafios, trocar soluções práticas e aprender continuamente.
  * Em bibliotecas: grupos de estudos permanentes de catalogadores e indexadores para harmonização de terminologias no Vocabulário Controlado Básico (VCB).
* **Mapeamento de Competências e Páginas Amarelas Corporativas (*Yellow Pages*):**
  * Diretório institucional detalhado que cadastra não apenas cargos formais, mas as **competências tácitas, idiomas, especializações temáticas e experiências prévias** dos servidores, facilitando a formação rápida de forças-tarefa interdisciplinares.
* **Memória Organizacional e Gestão de Lições Aprendidas (*After-Action Reviews*):**
  * Metodologia estruturada de debriefing realizada logo após a conclusão de grandes projetos (ex.: inauguração de nova biblioteca digital ou implantação do RDA), documentando o que funcionou, o que falhou e como evitar erros no futuro.
* **Barreiras ao Compartilhamento do Conhecimento:**
  * *Barreiras Culturais:* A crença arcaica de que "reter informação é reter poder", gerando feudos departamentais.
  * *Barreiras Organizacionais:* Estruturas excessivamente burocráticas e verticais que inibem o diálogo horizontal.
  * *Barreiras Tecnológicas:* Sistemas fragmentados que não conversam entre si e interfaces pouco amigáveis.`,
  checkpoints: [
    {
      id: 'cp-5-4-1',
      pergunta: 'Micro-Checkpoint 1: Modelo SECI de Nonaka e Takeuchi',
      item: 'No modelo SECI de conversão do conhecimento, a externalização é o modo pelo qual o conhecimento tácito é convertido em conceitos explícitos por meio de metáforas, modelos visuais e manuais formalizados.',
      gabarito: 'C',
      justificativa: 'Correto! Externalização é a passagem do tácito para o explícito, permitindo que intuições individuais sejam formalizadas e compartilhadas pela organização.',
    },
    {
      id: 'cp-5-4-2',
      pergunta: 'Micro-Checkpoint 2: Escopo da Gestão da Informação vs. do Conhecimento',
      item: 'A gestão da informação atua primordialmente na perspectiva do conhecimento tácito dos colaboradores, mapeando suas relações informais, enquanto a gestão do conhecimento restringe-se ao controle e armazenamento de suportes físicos de dados.',
      gabarito: 'E',
      justificativa: 'Errado! O item inverteu completamente os conceitos: a Gestão da Informação foca no conhecimento explícito e nos suportes registrados; a Gestão do Conhecimento foca no conhecimento tácito e no capital humano.',
    },
    {
      id: 'cp-5-4-3',
      pergunta: 'Micro-Checkpoint 3: Modelo SECI de Conversão do Conhecimento',
      item: 'No modelo SECI de Nonaka e Takeuchi, a conversão de conhecimento tácito em conhecimento explícito recebe o nome técnico de Externalização.',
      gabarito: 'C',
      justificativa: 'Certo! As quatro conversões clássicas da espiral do conhecimento são: Socialização (tácito para tácito), Externalização (tácito para explícito), Combinação (explícito para explícito) e Internalização (explícito para tácito).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-4-1',
        periodo: '1966',
        disciplina: 'Epistemologia do Conhecimento',
        focoPrincipal: 'Michael Polanyi estabelece a dimensão tácita do conhecimento ("sabemos mais do que podemos dizer")',
        figuraChave: 'Michael Polanyi',
      },
      {
        id: 'tl-5-4-2',
        periodo: '1995',
        disciplina: 'Gestão do Conhecimento',
        focoPrincipal: 'Criação do modelo SECI e da Espiral do Conhecimento Organizacional',
        figuraChave: 'Ikujiro Nonaka e Hirotaka Takeuchi',
      },
      {
        id: 'tl-5-4-3',
        periodo: '1997 / 1998',
        disciplina: 'Ecologia da Informação',
        focoPrincipal: 'Abordagem humanística e ecológica da informação contra o reducionismo da engenharia de TI',
        figuraChave: 'Thomas H. Davenport e Laurence Prusak',
      },
      {
        id: 'tl-5-4-4',
        periodo: '1998 / 2002',
        disciplina: 'Comunidades de Prática',
        focoPrincipal: 'Etienne Wenger sistematiza as Comunidades de Prática (CoPs) como motor de aprendizagem social',
        figuraChave: 'Etienne Wenger',
      },
      {
        id: 'tl-5-4-5',
        periodo: '2003',
        disciplina: 'Ciência da Informação Organizacional',
        focoPrincipal: 'Modelo integrado: Construção de Sentido, Criação do Conhecimento e Tomada de Decisão',
        figuraChave: 'Chun Wei Choo',
      },
    ],
    autores: [
      {
        id: 'aut-5-4-1',
        nome: 'Ikujiro Nonaka e Hirotaka Takeuchi',
        ano: 1995,
        obraPrincipal: 'The Knowledge-Creating Company (Criação de Conhecimento na Empresa)',
        ideiaChave: 'Espiral do Conhecimento (SECI): Socialização, Externalização, Combinação e Internalização; conceito de Ba.',
        chipPegadinha: 'Externalização converte Tácito em Explícito (chave da criação); Combinação converte Explícito em Explícito.',
      },
      {
        id: 'aut-5-4-2',
        nome: 'Chun Wei Choo',
        ano: 2003,
        obraPrincipal: 'A organização do conhecimento: como as organizações usam a informação para criar sentido, conhecimento e decisões',
        ideiaChave: 'A organização inteligente opera em três arenas: Construção de Sentido (Sense Making), Criação de Conhecimento e Tomada de Decisão.',
        chipPegadinha: 'A construção de sentido (Karl Weick) antecede a tomada de decisão em ambientes com alta ambiguidade.',
      },
      {
        id: 'aut-5-4-3',
        nome: 'Thomas H. Davenport',
        ano: 1997,
        obraPrincipal: 'Information Ecology (Ecologia da Informação)',
        ideiaChave: 'A gestão informacional envolve pessoas, política, cultura e comportamento, superando o tecnocentrismo.',
        chipPegadinha: 'Tecnologia sozinha não resolve a gestão do conhecimento; é apenas suporte às pessoas.',
      },
      {
        id: 'aut-5-4-4',
        nome: 'Etienne Wenger',
        ano: 1998,
        obraPrincipal: 'Communities of Practice: Learning, Meaning, and Identity',
        ideiaChave: 'Comunidades de Prática (CoPs) como grupos informais de aprendizagem social e compartilhamento tácito.',
        chipPegadinha: 'CoPs são auto-organizadas e focadas no domínio de uma prática, não equipes hierárquicas formais.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-4-1',
        afirmacao: 'O conhecimento tácito pode ser diretamente arquivado em bancos de dados digitais de uma biblioteca sem passar por qualquer processo de formalização ou explicitação.',
        gabarito: 'E',
        porQue: 'Conhecimento tácito reside exclusivamente na mente, intuição e práticas das pessoas. Para entrar em sistemas de TI, deve ser externalizado em linguagem explícita.',
      },
      {
        id: 'peg-5-4-2',
        afirmacao: 'A aplicação da gestão do conhecimento na biblioteconomia é restrita a organizações privadas com fins lucrativos.',
        gabarito: 'E',
        porQue: 'A gestão do conhecimento é amplamente aplicada a bibliotecas universitárias, órgãos públicos e casas legislativas para retenção de memória e inovação de serviços.',
      },
      {
        id: 'peg-5-4-3',
        afirmacao: 'No modelo SECI de criação do conhecimento, a combinação consiste na troca de experiências e vivências interpessoais não documentadas entre mestres e aprendizes.',
        gabarito: 'E',
        porQue: 'A troca de experiências não documentadas entre mestre e aprendiz é a SOCIALIZAÇÃO (tácito para tácito). A Combinação é a síntese e agregação de conhecimentos EXPLÍCITOS existentes.',
      },
    ],
  },
};
