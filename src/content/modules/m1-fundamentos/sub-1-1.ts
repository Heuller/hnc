import type { ModuloFilho } from '../../../domain/types';

export const submodulo11: ModuloFilho = {
  id: 'sub-1-1',
  numero: '1.1',
  editalRef: 'Bloco A - Item 1.1 e 1.6',
  preRequisitos: [],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-1-3",
          "titulo": "Dado, Informação, Documento e Conhecimento",
          "motivo": "Aprofunda a ontologia documental de Briet e Buckland em relação ao ciclo DIKW."
      },
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Conecta a história da documentação à governança contemporânea de dados segundo o DAMA-DMBOK2."
      }
  ],
  titulo: 'Biblioteconomia, Documentação e Ciência da Informação: objeto, fronteiras e evolução histórica',
  titulo_curto: 'Biblioteconomia, Documentação e CI',
  antesDeLer: [
    {
      termo: 'Documentação',
      definicao: 'Disciplina fundada por Paul Otlet e Henri La Fontaine voltada à reunião, organização e disseminação de informações registradas em qualquer suporte físico ou gráfico.',
      exemploBiblioteca: 'Na Biblioteca da Câmara, o princípio monográfico de Otlet fundamenta a indexação granular de artigos de periódicos e capítulos de livros parlamentares.',
    },
    {
      termo: 'Ciência da Informação',
      definicao: 'Campo interdisciplinar que investiga as propriedades, o comportamento, as forças que regem o fluxo e os meios de processamento da informação para sua ótima acessibilidade.',
      exemploBiblioteca: 'A modelagem dos fluxos de busca na base de dados legislativa do portal da Câmara reflete diretamente os princípios da Ciência da Informação.',
    },
    {
      termo: 'Princípio Monográfico',
      definicao: 'Metodologia preconizada por Paul Otlet consistente em fragmentar o conteúdo intelectual em fichas e unidades conceituais autônomas para facilitar a classificação e recombinação.',
      exemploBiblioteca: 'Fichamento analítico de pareceres e notas técnicas da Consultoria Legislativa da Câmara.',
    },
    {
      termo: 'IFLA',
      definicao: 'Federação Internacional de Associações e Instituições Bibliotecárias; principal organismo não governamental global que define diretrizes para a prática profissional e manifestos de bibliotecas.',
      exemploBiblioteca: 'Adoção das diretrizes do IFLA LRM e dos manifestos sobre bibliotecas digitais no catálogo unificado da Rede Virtual de Bibliotecas (RVBI).',
    },
  ],
  descricaoCurta: 'Gênese disciplinar, Paul Otlet e o Tratado de Documentação, Harold Borko e a emergência da CI pós-guerra, interdisciplinaridade e as divisões de Le Coadic.',
  tempoEstimadoMinutos: 22,
  autoresChave: ['Paul Otlet', 'Henri La Fontaine', 'Harold Borko', 'Yves-François Le Coadic', 'Tefko Saracevic', 'Vannevar Bush', 'IFLA / UNESCO'],
  alertasCebraspe: [
    'O Cebraspe frequentemente atribui a definição canônica de Ciência da Informação de Harold Borko (1968) à Biblioteconomia para induzir o candidato ao erro.',
    'Atenção à divisão de Le Coadic: a "Biblioteconomia dos livros" cuida da gestão física/técnica do acervo, enquanto a "Biblioteconomia dos leitores" foca nas necessidades, uso e mediação humana.',
    'A Documentação não substituiu a Biblioteconomia; ela expandiu o universo documental para qualquer suporte informacional e antecipou as técnicas de recuperação da informação.',
    'A IFLA é a voz global da profissão bibliotecária e formuladora de padrões internacionais (como ISBD e IFLA LRM). Em relação aos seus manifestos com a UNESCO, o Cebraspe explora o Manifesto da Biblioteca Pública IFLA/UNESCO (atualizado em 2022 com ênfase na inclusão digital e sustentabilidade/Agenda 2030 da ONU) e o Manifesto sobre Bibliotecas Digitais (2010 com foco na redução da exclusão digital e preservação digital perene). Lembre-se: os serviços básicos da biblioteca pública devem ser fundamentalmente gratuitos e acessíveis sem qualquer discriminação.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa das Três Disciplinas da Informação',
    colunas: ['Critério', 'Biblioteconomia Tradicional', 'Documentação (Otlet & Briet)', 'Ciência da Informação (Borko & Saracevic)'],
    linhas: [
      ['Surgimento / Marco', 'Antiguidade (Alexandria) / Consolidação no séc. XIX', 'Fim do séc. XIX (1895: IIB; 1934: Tratado de Otlet)', 'Pós-Segunda Guerra Mundial (décadas de 1950-1960; Borko 1968)'],
      ['Objeto Central', 'O livro, coleções impressas e a instituição biblioteca', 'O documento em qualquer suporte material e o princípio monográfico', 'A informação em si: propriedades, comportamento, fluxos e transferência'],
      ['Enfoque Principal', 'Custódia, organização técnica e preservação do acervo', 'Disseminação ativa da pesquisa científica e acesso universal', 'Investigação científica teórica e sistemas tecnológicos de recuperação (IR)'],
      ['Público-Alvo', 'Comunidade geral e leitores da instituição', 'Pesquisadores especializados e cientistas', 'Usuários de sistemas de informação complexos e redes globais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Trajetória Epistemológica e Rupturas Históricas
A gestão social e científica do conhecimento registrado evoluiu ao longo de séculos através de rupturas epistemológicas fundamentais. O **CEBRASPE** cobra com rigor cirúrgico a diferenciação conceitual, cronológica e metodológica entre as três disciplinas correlatas: **a Biblioteconomia**, **a Documentação** e **a Ciência da Informação (CI)**.

\`\`\`timeline
BIBLIO | Biblioteconomia (Antiguidade / Séc. XIX) | Objeto: O Livro e a Biblioteca | Foco: Custódia, Tratamento Técnico e Uso Social
---> Explosão de Periódicos Científicos
DOC | Documentação (Otlet & Briet — 1895/1934) | Objeto: O Documento em Qualquer Suporte | Foco: Princípio Monográfico e Disseminação
---> Pós-Segunda Guerra / Guerra Fria
CI | Ciência da Informação (Bush, Mooers, Borko — 1968) | Objeto: A Informação em Si (Propriedades e Fluxos) | Foco: Sistemas de RI, Redes e Cognição
\`\`\`

---

### 2. A Biblioteconomia: Da Guarda Patrimonial à Função Social Democrática
Historicamente, a Biblioteconomia nasceu umbilicalmente ligada à **instituição biblioteca** e à custódia física de suportes textuais (rolos de papiro em Alexandria e Pérgamo, códices medievais nos mosteiros e o livro impresso tipográfico após a revolução de Gutenberg no século XV).

#### A. A Transição de Paradigmas
1. **Paradigma Patrimonialista / Conservacionista (Antiguidade ao Séc. XVIII):** O livro era visto como patrimônio raro, tesouro material e relíquia. A biblioteca funcionava como depósito sagrado onde o objetivo primordial era a custódia, guarda e preservação física dos suportes, muitas vezes com acesso restrito a sacerdotes, monges e elites aristocráticas.
2. **Paradigma Educacional, Social e Democrático (Final do Séc. XIX e Séc. XX):** Com a expansão da escolarização pública, a industrialização e as teorizações de Melvil Dewey (1876) e S. R. Ranganathan (1931), a biblioteca transformou-se em equipamento público e social. O objetivo primordial passou a ser a **disseminação, o livre acesso e o uso social da informação**.

#### B. A Dualidade Canônica de Yves-François Le Coadic (1996)
O epistemólogo francês Yves-François Le Coadic (*A Ciência da Informação*) estabelece uma distinção teórica clássica frequentemente explorada pela banca:
* **Biblioteconomia dos Livros:** Centrada na dimensão técnica, administrativa, patrimonial e física. Ocupa-se da formação e desenvolvimento de coleções, catalogação, classificação, tombamento, inventário, preservação física das estantes e gestão orçamentária do prédio.
* **Biblioteconomia dos Leitores:** Centrada na dimensão humana, social e comunicativa. Ocupa-se do usuário, do estudo de comunidades, dos hábitos e práticas de leitura, dos serviços de referência, da mediação pedagógica e da inclusão sociocultural.

> [!CAUTION]
> **Casca de Banana Cebraspe nº 1:** A banca costuma inverter maliciosamente esses dois conceitos, afirmando que *"a biblioteconomia dos livros foca nas necessidades dos leitores e nos serviços de referência"*, ou que *"a biblioteconomia dos leitores restringe-se aos procedimentos de conservação predial e inventário de volumes"*. O item é categoricamente **ERRADO**.

---

### 3. A Documentação e a Revolução Conceitual de Paul Otlet
No final do século XIX, a Revolução Industrial e a especialização das ciências provocaram uma explosão no número de **artigos de periódicos, relatórios técnicos, atas de congressos e patentes**. A Biblioteconomia tradicional, estruturada em torno do livro monográfico encadernado, revelou-se incapaz de catalogar e recuperar rapidamente as frações mínimas do saber exigidas pela comunidade científica.

#### A. Paul Otlet, Henri La Fontaine e o Instituto Internacional de Bibliografia (IIB - 1895)
* Em 1895, os advogados e juristas belgas **Paul Otlet** e **Henri La Fontaine** fundaram em Bruxelas o **Instituto Internacional de Bibliografia (IIB)**.
* **O Repertório Bibliográfico Universal (RBU):** Concebido como um catálogo universal de todo o conhecimento registrado da humanidade.
* **O *Mundaneum*:** O "museu mundial" e cidade do saber idealizado por Otlet para reunir, indexar e conectar globalmente os saberes humanos (precursor analógico da internet).
* **Criação da CDU:** Para indexar as fichas do RBU com detalhamento facetado e relacional, Otlet e La Fontaine adaptaram a CDD de Dewey, criando a **Classificação Decimal Universal (CDU)**.

#### B. O Tratado de Documentação (1934) e o Princípio Monográfico
Na obra seminal *Traité de Documentation: le livre sur le livre, théorie et pratique* (1934), Otlet sistematizou:
1. **O Princípio Monográfico:** Consiste em desmembrar o conteúdo das publicações em seus elementos conceituais constitutivos (ideias, fatos, dados, fórmulas), registrando cada unidade analítica em uma ficha móvel padronizada independente (o formato internacional 12,5 × 7,5 cm). Dessa forma, o conhecimento podia ser infinitamente reorganizado, recombinado e atualizado, superando a rigidez estática do livro encadernado.
2. **Ampliação do Suporte Documental:** Para Otlet, a documentação não se restringe a livros impressos. Abrange gráficos, mapas, fotografias, esquemas, cartazes, diapositivos, patentes e discos sonoros.

#### C. Suzanne Briet e as Quatro Condições do Documento (1951)
No manifesto seminal *Qu'est-ce que la documentation?* (1951), a bibliotecária e documentalista francesa **Suzanne Briet** formulou a mais influente conceituação de documento da área.

<!-- [NÃO CONFERIDO]: convertido de aspas rígidas em paráfrase autoral doutrinária -->
> **Definição Doutrinária (Suzanne Briet, 1951):** Segundo Suzanne Briet (1951), o documento se caracteriza como todo indício material, conservado ou registrado, que tem por finalidade representar, reconstituir ou provar determinado fenômeno físico ou intelectual.

Para Briet, um objeto torna-se documento se preencher cumulativamente **quatro condições**:
1. **Materialidade:** Deve possuir base material tangível ou registro físico/magnético de signos.
2. **Intencionalidade:** O artefato foi criado, coletado ou selecionado com a intenção expressa de comunicar ou registrar algo.
3. **Tratamento Documentário / Institucional:** O objeto foi inserido em um sistema ou unidade de informação (catalogado, indexado, descrito ou classificado).
4. **Valor de Prova / Indício:** O objeto serve de evidência, testemunho ou elemento probatório perante uma comunidade social.

> **O Célebre Exemplo do Antílope de Briet (Cobrado na Prova CAPES 2024 e IPEA):**
> * Um antílope correndo livre na savana africana **NÃO** é documento; é apenas um espécime biológico vivo.
> * No entanto, se o antílope for capturado, transportado para a Europa, alojado no Jardin des Plantes (zoológico), examinado por zoólogos, receber uma placa taxonômica descritiva e constar no catálogo do museu de história natural, ele **TORNA-SE UM DOCUMENTO PRIMÁRIO**.
> * Os artigos científicos redigidos sobre ele, suas fotografias e as radiografias de seus ossos são documentos secundários derivados.

#### D. Evolução Institucional da Documentação
* 1895: **IIB** (Instituto Internacional de Bibliografia);
* 1931: **IID** (Instituto Internacional de Documentação);
* 1938: **FID** (Federação Internacional de Documentação), que liderou o desenvolvimento e a governança internacional da CDU até sua dissolução em 2002.

---

### 4. A Emergência da Ciência da Informação no Pós-Guerra
A emergência da Ciência da Informação ocorreu no contexto da Segunda Guerra Mundial e da Guerra Fria (décadas de 1940 a 1960), impulsionada pela explosão da pesquisa científica militar, pela cibernética e pelo surgimento dos computadores eletrônicos.

#### A. Marcos Fundacionais
* **Vannevar Bush e o Ensaio "As We May Think" (1945):**
  * Bush, conselheiro científico do presidente Franklin Roosevelt, publicou na revista *The Atlantic Monthly* o ensaio visionário alertando que a humanidade estava submergindo em um oceano de publicações científicas sem capacidade física de localizá-las.
  * Propôs o **Memex** (*Memory Extender*): um dispositivo conceitual eletromecânico, baseado em microfilmes e fotocélulas, no qual um cientista poderia armazenar todos os seus livros, anotações e comunicações, consultando-os através de **trilhas associativas** (*associative trails*). O Memex é universalmente reconhecido como o precursor conceitual do hipertexto e da Web.
* **Calvin Mooers e a Recuperação da Informação (1950):**
  * Mooers cunhou a expressão **Recuperação da Informação** (*Information Retrieval - IR*), que veio a constituir o coração operacional da nova disciplina. Formulou a famosa **Lei de Mooers**: *"Um sistema de recuperação da informação tende a não ser utilizado quando for mais penoso e incômodo para o usuário obter a informação do que ficar sem ela"*.
* **Conferências do Georgia Institute of Technology (1961-1962):**
  * Consideradas o marco zero da definição formal da área. Estabeleceram que a Ciência da Informação é uma ciência interdisciplinar que estuda as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processamento.
* **Harold Borko e o Artigo "Information Science: What is it?" (1968):**
  * Borko formulou a caracterização canônica mais cobrada em concursos públicos federais:

<!-- [NÃO CONFERIDO]: convertido de aspas rígidas em paráfrase autoral doutrinária -->
> **Fundamentação Doutrinária (Harold Borko, 1968):** Segundo Harold Borko (1968), a Ciência da Informação investiga as propriedades e o comportamento da informação, as forças que regem seu fluxo e os meios de processamento destinados a aperfeiçoar sua acessibilidade e uso. O campo abrange os saberes relativos à gênese, coleta, organização, guarda, recuperação, interpretação, difusão, transformação e uso da informação, integrando uma vertente de ciência pura e uma de ciência aplicada (desenvolvimento de produtos e serviços).

---

### 5. Interdisciplinaridade e Fronteiras Disciplinares (Saracevic & Borko)
Conforme demonstrado por **Tefko Saracevic (1995/1999)** e **Lena Vânia Pinheiro (1995)**, a Ciência da Informação não extinguiu nem substituiu a Biblioteconomia:
* **Interdisciplinaridade Constitutiva:** A CI nutre-se da Ciência da Computação (algoritmos e bancos de dados), Linguística e Semiótica (estruturas de linguagem e tesauros), Comunicação (teorias da recepção e canais), Psicologia Cognitiva (modelos mentais e necessidades de informação), Lógica e Filosofia (ontologias e epistemologia).
* **Diferenciação de Escopo:**
  * A **Biblioteconomia** é uma disciplina aplicada de natureza eminentemente profissional, institucional e social, voltada à operação, curadoria e prestação de serviços no âmbito das bibliotecas.
  * A **Ciência da Informação** é um campo científico abrangente que investiga fenômenos informacionais gerais em sistemas sociais, institucionais e tecnológicos, independentemente de estarem confinados a uma biblioteca física.

---

### 6. Tipologia Completa de Bibliotecas no Edital da Câmara
O edital da Câmara dos Deputados exige o domínio das características institucionais de cada tipo de unidade de informação:

| Tipo de Biblioteca | Missão Principal | Coleção Típica | Usuário Alvo | Marco / Característica Diferencial |
| :--- | :--- | :--- | :--- | :--- |
| **Biblioteca Nacional** | Preservar a memória bibliográfica do país e produzir a Bibliografia Nacional. | Exaustiva de publicações nacionais via **Depósito Legal** (Lei 10.994/2004). | Pesquisadores, historiadores e sociedade em geral. | Custódia patrimonial perpétua; atua como agência bibliográfica nacional (ISBN/ISMN). |
| **Biblioteca Pública** | Promover o livre acesso à cultura, informação e fomento à cidadania e leitura. | Enciclopédica, diversificada (literatura, artes, ciências básicas). | Toda a comunidade local sem distinção de idade, renda ou escolaridade. | Manifesto da UNESCO sobre Bibliotecas Públicas; serviços gratuitos de empréstimo. |
| **Biblioteca Universitária** | Dar suporte às atividades de ensino, pesquisa e extensão da instituição superior. | Especializada e didática em múltiplas áreas do conhecimento; periódicos e teses. | Comunidade acadêmica (professores, pesquisadores e alunos de graduação/pós). | Redes cooperativas de comutação bibliográfica (COMUT); repositórios institucionais. |
| **Biblioteca Especializada** | Subsidiar a pesquisa técnica e o desenvolvimento institucional ou empresarial. | Altamente focada em um domínio temático específico (ex.: Direito, Medicina, Engenharia). | Especialistas, cientistas, técnicos e gestores da corporação. | Ênfase em **DSI ativa**, busca em bases de dados restritas e indexação em profundidade. |
| **Biblioteca Escolar** | Apoiar o projeto pedagógico e desenvolver habilidades de letramento informacional. | Acervo infantil, infantojuvenil e livros didáticos curriculares. | Alunos, professores e corpo técnico da escola básica. | **Lei Federal nº 12.244/2010** (universalização de bibliotecas escolares no Brasil). |
| **Biblioteca Parlamentar (Ex.: Câmara / Senado)** | Subsidiar o processo legislativo, a fiscalização orçamentária e a cidadania. | Direito, Ciência Política, Administração Pública, Economia, anais e projetos de lei. | Deputados, senadores, assessores legislativos, comissões temáticas e cidadãos. | Integra a **RVBI** (Rede Virtual de Bibliotecas); alimentação do Portal **LexML Brasil**. |

---

### 7. A Cooperação Internacional e a IFLA: Missão, Governança, Padrões e Manifestos Históricos

A **IFLA** (*International Federation of Library Associations and Institutions* — Federação Internacional de Associações e Instituições Bibliotecárias) é o principal organismo internacional não governamental de representação dos interesses dos serviços de bibliotecas, informação e de seus usuários no mundo.

#### A. Natureza Institucional, Missão e Estrutura de Governança
* **Fundação e Sede:** Fundada em 1927 em Edimburgo (Escócia) e sediada na Haia (Holanda), a IFLA possui relações formais de consulta e cooperação estreita com a **UNESCO**, com a Organização Mundial da Propriedade Intelectual (OMPI) e com a International Organization for Standardization (ISO).
* **Missão Estratégica:** Promover padrões internacionais de alta qualidade para a prestação de serviços bibliotecários, defender a liberdade intelectual e o livre acesso à informação, e capacitar os membros da profissão globalmente.
* **Estrutura de Governança:** Organizada em Assembleia Geral, Conselho de Administração (*Governing Board*), Divisões Profissionais e dezenas de Seções Especializadas — destacando-se, no contexto parlamentar, a **Seção de Serviços de Bibliotecas e Pesquisa para Parlamentos** (*Library and Research Services for Parliaments Section*), que formula diretrizes mundiais para bibliotecas legislativas como a da Câmara dos Deputados do Brasil.
* **Papel Normativo Global:** A IFLA é a responsável pelo desenvolvimento e manutenção dos maiores referenciais descritivos da história da Biblioteconomia: a **ISBD** (Descrição Bibliográfica Internacional Normalizada), o modelo conceitual **IFLA LRM** (*Library Reference Model*), a **Declaração de Princípios Internacionais de Catalogação (ICP)** e o padrão **UNIMARC**.

#### B. O Manifesto da Biblioteca Pública IFLA/UNESCO (Atualização de 2022)
Publicado originalmente em 1949 e periodicamente atualizado (1972, 1994 e **revisado em Dublin em 2022**), o **Manifesto da Biblioteca Pública IFLA/UNESCO** é o documento político e doutrinário mais cobrado pelo Cebraspe no tocante a políticas públicas de informação.
* **Proclamação Central:** A biblioteca pública é proclamada como a **porta de entrada local para o conhecimento**, constituindo uma **força viva para a educação, a cultura, a inclusão social e a paz**, bem como um agente essencial para o desenvolvimento sustentável e o exercício pleno da cidadania.
* **Princípio da Universalidade e Gratuidade:** Os serviços da biblioteca pública devem ser oferecidos com base na **igualdade de acesso para todos, sem distinção de idade, raça, sexo, religião, nacionalidade, idioma ou condição social**. O Manifesto estipula expressamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**.
* **Inovações Críticas da Edição 2022 (Atenção ao Edital!):**
  1. **Inclusão Digital e Alfabetização Midiática:** O manifesto incorpora a missão de capacitar os cidadãos com habilidades de letramento digital e midiático (*media and information literacy*), capacitando a sociedade a combater ativamente a desinformação (*fake news*).
  2. **Alinhamento à Agenda 2030 da ONU:** Estabelece o compromisso explícito das bibliotecas públicas com a sustentabilidade ambiental, justiça social e os Objetivos de Desenvolvimento Sustentável (ODS).
  3. **Espaço Comunitário Democrático:** Reafirma a biblioteca como terceiro lugar (*third place*) neutro, seguro e acolhedor para o diálogo cívico e a coesão social.

#### C. O Manifesto da IFLA/UNESCO sobre Bibliotecas Digitais (2010)
Adotado em 2010 e chancelado pela UNESCO, este documento estabelece as diretrizes para a construção de pontes informacionais no ciberespaço:
* **Missão Central:** Superar a exclusão digital (*digital divide*) e garantir que o patrimônio cultural, científico e documental mundial em formato digital seja preservado, mantido acessível e compartilhado de maneira equitativa.
* **Diretrizes e Requisitos de Sustentabilidade:**
  1. Promoção da digitalização do patrimônio analógico e preservação a longo prazo dos objetos digitais nativos (*born-digital*);
  2. Garantia do acesso aberto e universal com respeito estrito aos direitos autorais e à propriedade intelectual (incentivando exceções e limitações para bibliotecas);
  3. Adoção obrigatória de **padrões abertos e interoperáveis** de metadados para viabilizar redes globais e colheita federada;
  4. Cooperação transversal entre instituições de memória: Bibliotecas, Arquivos e Museus (*GLAM - Galleries, Libraries, Archives, Museums*).

---

### 8. Quadro de Distratores Típicos do Cebraspe em Fundamentos

| Afirmação Típica da Banca | Diagnóstico | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"A Ciência da Informação surgiu na Antiguidade clássica em Alexandria com o objetivo de guardar o livro impresso."* | **ERRADO** | Confunde CI com Biblioteconomia antiga. A CI surgiu na metade do séc. XX (pós-Segunda Guerra). |
| *"Harold Borko definiu a Biblioteconomia como a ciência que investiga as propriedades e fluxos da informação."* | **ERRADO** | A definição canônica de Borko (1968) é de **Ciência da Informação**, e não de Biblioteconomia. |
| *"O Princípio Monográfico de Paul Otlet propunha manter o livro encadernado intacto como unidade indivisível de conhecimento."* | **ERRADO** | O Princípio Monográfico propunha justamente o oposto: **desmembrar** o livro em fichas móveis analíticas. |
| *"Suzanne Briet excluiu categoricamente do conceito de documento qualquer entidade que não fosse suporte em papel."* | **ERRADO** | Briet ampliou radicalmente o conceito de documento para qualquer objeto físico/natural que sirva de prova (o antílope). |
| *"O Manifesto da Biblioteca Pública IFLA/UNESCO preconiza que a cobrança de mensalidades para empréstimo domiciliar é legítima como fonte primária de custeio da unidade."* | **ERRADO** | O Manifesto afirma categoricamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**. |
| *"A Lei Federal nº 12.244/2010 estabeleceu que as bibliotecas escolares poderiam ser substituídas por salas de leitura sem bibliotecário."* | **ERRADO** | A Lei 12.244/2010 determinou a obrigatoriedade de biblioteca com acervo mínimo e presença de bibliotecário habilitado. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Dado, Informação, Documento e Conhecimento (sub-1-3):** Aprofunda a ontologia documental de Briet e Buckland em relação ao ciclo DIKW.
* **Governança da Informação e de Dados (sub-1-6):** Conecta a história da documentação à governança contemporânea de dados segundo o DAMA-DMBOK2.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Para o **Cebraspe**, o universo da informação organiza-se historicamente em três disciplinas complementares com marcos, objetos e focos distintos:
1. **Biblioteconomia (Antiguidade ao séc. XIX):** Centrada na **instituição biblioteca** e no **livro impresso**. Sua missão histórica começou na custódia e preservação patrimonial e evoluiu (com Dewey e Ranganathan) para a democratização e o livre acesso social.
2. **Documentação (Otlet e Briet, 1895/1934):** Rompe com o livro como suporte único. Seu objeto é o **documento em qualquer suporte físico** (artigos, relatórios, patentes, fotografias, microfilmes). Introduz o **princípio monográfico** (fracionamento e indexação analítica de partes).
3. **Ciência da Informação - CI (Pós-Segunda Guerra, 1968):** Consolidada pela definição canônica de **Harold Borko (1968)**. Não tem como objeto uma instituição nem um suporte, mas **a informação em si**: suas propriedades, comportamento, fluxos, forças sociais e meios de processamento para ótima recuperação (*Information Retrieval*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
Como o Analista Legislativo - Bibliotecário vivencia essa tríade na rotina da Câmara:
- **Cenário 1 (Biblioteconomia no Acervo Raro):** Ao salvaguardar um exemplar original da *Constituição de 1824* na Seção de Obras Raras da Biblioteca Pedro Aleixo, você aplica a tradição biblioteconômica de custódia, higienização e organização patrimonial.
- **Cenário 2 (Documentação nas Comissões Temáticas):** Ao receber um projeto de lei de 300 páginas e extrair separadamente os pareceres das subcomissões, as notas técnicas de consultores e os votos em separado para indexação isolada no Sileg, você aplica rigorosamente o **princípio monográfico de Paul Otlet**.
- **Cenário 3 (Ciência da Informação na Busca Legislativa):** Ao modelar os filtros semânticos e a busca por relevância na base de dados legislativa do portal da Câmara — garantindo que deputados encontrem normas correlatas em segundos durante uma votação em plenário —, você atua como um cientista da informação gerindo fluxos e recuperação da informação.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério de Prova | Biblioteconomia | Documentação | Ciência da Informação |
| :--- | :--- | :--- | :--- |
| **Objeto Central** | O livro e a biblioteca física | O documento em qualquer suporte | A informação (fluxos e propriedades) |
| **Marco Canônico** | Antiguidade / Melvil Dewey (1876) | Paul Otlet e Henri La Fontaine (1895) | Harold Borko (1968) / Saracevic |
| **Público Primário** | Leitores gerais e comunidade social | Cientistas e pesquisadores especializados | Usuários de redes e sistemas digitais |
| **Técnica Típica** | Catálogo em fichas / estantes abertas | Repertório Bibliográfico / fichas analíticas | Algoritmos de busca / tesauros / IA |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Armadilha do Autor Trocado:** A banca adora colocar o texto literal de Harold Borko (*"disciplina que investiga as propriedades e o comportamento da informação..."*) e afirmar que se trata da definição clássica de Biblioteconomia. **Gabarito: ERRADO.**
- **Armadilha da Substituição Histórica:** Dizer que a Documentação ou a CI "tornaram obsoleta" ou "substituíram integralmente" a Biblioteconomia. **Gabarito: ERRADO.** As disciplinas convivem e complementam-se.
- **Divisão de Le Coadic:** Lembre-se: *Biblioteconomia dos livros* = foco na gestão física e tratamento técnico do acervo; *Biblioteconomia dos leitores* = foco na mediação humana, necessidades e uso social da informação.

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
Antes de responder aos checkpoints, feche os olhos por 15 segundos e responda mentalmente:
1. *Quem definiu a Ciência da Informação em 1968?* (Harold Borko).
2. *Qual o marco e o princípio central da Documentação?* (1895 / Princípio Monográfico de Paul Otlet).
3. *A Biblioteconomia cuida do quê?* (Do livro, da coleção e de sua função social na biblioteca).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
* **BORKO, Harold.** *Information science: what is it?* American Documentation, v. 19, n. 1, p. 3-5, 1968. (Artigo canônico que consagrou a interdisciplinaridade da Ciência da Informação).
* **OTLET, Paul.** *Traité de documentation: le livre sur le livre, théorie et pratique*. Bruxelles: Editiones Mundaneum, 1934. (Fundação da Documentação e Princípio Monográfico).
* **BRIET, Suzanne.** *Qu'est-ce que la documentation?* Paris: EDIT, 1951. (Conceito de documento e o célebre exemplo do antílope).
* **LE COADIC, Yves-François.** *A Ciência da Informação*. 2. ed. Brasília: Briquet de Lemos, 2004. (Evolução histórica, ciclo e ecologia da informação).
* **PINHEIRO, Lena Vania Ribeiro; LOUREIRO, José Maria Jardim.** *Traçados e limites da Ciência da Informação*. Ciência da Informação, Brasília, v. 24, n. 1, 1995.`,
  checkpoints: [
    {
      id: 'cp-1-1-1',
      pergunta: 'Micro-Checkpoint 1: Conceito Canônico de Ciência da Informação',
      item: 'A Ciência da Informação é definida como a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.',
      gabarito: 'C',
      justificativa: 'Correto! Esta é a clássica definição de Harold Borko (1968), esteio conceitual fundacional da Ciência da Informação.',
    },
    {
      id: 'cp-1-1-2',
      pergunta: 'Micro-Checkpoint 2: A Divisão de Yves-François Le Coadic',
      item: "Conforme Le Coadic, a 'biblioteconomia dos livros' refere-se ao estudo das práticas de leitura e necessidades de informação dos usuários.",
      gabarito: 'E',
      justificativa: "Errado! A 'biblioteconomia dos livros' foca na gestão técnica e física do acervo; é a 'biblioteconomia dos leitores' que se ocupa dos usuários e de suas práticas.",
      versao_correta: "Conforme Le Coadic, a 'biblioteconomia dos leitores' refere-se ao estudo das práticas de leitura e necessidades de informação dos usuários, enquanto a 'biblioteconomia dos livros' foca na gestão técnica e física do acervo.",
    },
    {
      id: 'cp-1-1-3',
      pergunta: 'Micro-Checkpoint 3: Manifesto da Biblioteca Pública IFLA/UNESCO (Atualização 2022)',
      item: 'Segundo o Manifesto da Biblioteca Pública IFLA/UNESCO, a biblioteca pública constitui uma força viva pela educação, cultura e inclusão social, cujos serviços fundamentais devem ser prestados com base na igualdade de acesso e de forma gratuita para toda a comunidade.',
      gabarito: 'C',
      justificativa: 'Certo! O Manifesto da Biblioteca Pública IFLA/UNESCO (com sua versão atualizada em 2022) reafirma categoricamente que a biblioteca pública é a porta de entrada local para o conhecimento e que seus serviços básicos devem ser inteiramente gratuitos e abertos a todos sem discriminação.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-1-1',
        periodo: 'Séc. XIX',
        disciplina: 'Biblioteconomia',
        focoPrincipal: 'Acervo, Livro físico e a Instituição Biblioteca',
        figuraChave: 'Tradição patrimonial e social',
      },
      {
        id: 'tl-1-1-2',
        periodo: '1895 / 1934',
        disciplina: 'Documentação',
        focoPrincipal: 'Princípio Monográfico, múltiplos suportes e disseminação científica',
        figuraChave: 'Paul Otlet e Henri La Fontaine',
      },
      {
        id: 'tl-1-1-3',
        periodo: '1945 / 1968',
        disciplina: 'Ciência da Informação',
        focoPrincipal: 'Propriedades, comportamento e fluxos da informação; sistemas de busca (IR)',
        figuraChave: 'Harold Borko, Vannevar Bush e Calvin Mooers',
      },
      {
        id: 'tl-1-1-4',
        periodo: '1949 / 2022',
        disciplina: 'Políticas Públicas Globais de Bibliotecas',
        focoPrincipal: 'Manifesto da Biblioteca Pública IFLA/UNESCO (acesso universal, gratuidade, inclusão digital e ODS da Agenda 2030)',
        figuraChave: 'IFLA e UNESCO',
      },
    ],
    autores: [
      {
        id: 'aut-1-1-1',
        nome: 'Harold Borko',
        ano: 1968,
        obraPrincipal: 'Information Science: What is it?',
        ideiaChave: 'Propriedades, comportamento e fluxos da informação.',
        chipPegadinha: 'Memorize: é Ciência da Informação, NÃO Biblioteconomia!',
      },
      {
        id: 'aut-1-1-2',
        nome: 'Paul Otlet',
        ano: 1934,
        obraPrincipal: 'Traité de Documentation',
        ideiaChave: 'Pai da Documentação, Princípio Monográfico e criador da CDU com La Fontaine.',
        chipPegadinha: 'Documentação abrange qualquer suporte, não apenas livros em papel.',
      },
      {
        id: 'aut-1-1-3',
        nome: 'Suzanne Briet',
        ano: 1951,
        obraPrincipal: "Qu'est-ce que la documentation?",
        ideiaChave: 'O documento como indício físico em suporte material (o exemplo clássico do antílope).',
        chipPegadinha: 'Exige 4 condições: materialidade, intencionalidade, tratamento e valor de prova.',
      },
      {
        id: 'aut-1-1-4',
        nome: 'Yves-François Le Coadic',
        ano: 1996,
        obraPrincipal: 'A Ciência da Informação',
        ideiaChave: 'Biblioteconomia dos Livros (gestão técnica) vs Biblioteconomia dos Leitores (mediação/usuário).',
        chipPegadinha: 'Cebraspe adora inverter as duas dimensões conceituais.',
      },
      {
        id: 'aut-1-1-5',
        nome: 'IFLA / UNESCO',
        ano: 2022,
        obraPrincipal: 'Public Library Manifesto / Digital Library Manifesto',
        ideiaChave: 'Biblioteca pública como força viva pela educação, cultura e sustentabilidade, com serviços básicos gratuitos.',
        chipPegadinha: 'Serviços básicos da biblioteca pública são gratuitos; discriminação de qualquer natureza é vedada.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-1-1',
        afirmacao: 'Denomina-se biblioteconomia a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.',
        gabarito: 'E',
        porQue: 'Essa definição canônica é de Harold Borko (1968) e refere-se estritamente à Ciência da Informação.',
      },
      {
        id: 'peg-1-1-2',
        afirmacao: 'Segundo o Manifesto da Biblioteca Pública IFLA/UNESCO, a prestação de serviços deve priorizar os cidadãos alfabetizados, podendo os analfabetos ser direcionados exclusivamente a outros órgãos assistenciais.',
        gabarito: 'E',
        porQue: 'O Manifesto IFLA/UNESCO estipula que a biblioteca pública deve atender a toda a comunidade sem distinção de escolaridade, desempenhando papel ativo fundamental justamente no combate ao analfabetismo e na inclusão social.',
      },
    ],
  },
};
