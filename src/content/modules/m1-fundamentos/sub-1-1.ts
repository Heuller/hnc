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
    "termo": "Atribuição",
    "definicao": "Vínculo entre ideia, autor e passagem efetivamente consultada.",
    "exemploBiblioteca": "Uma lista didática não deve ser apresentada como formulação literal de um autor sem suporte."
  },
  {
    "termo": "Instituição e função",
    "definicao": "Órgãos e redes exercem atribuições específicas que podem mudar com o tempo.",
    "exemploBiblioteca": "CBL atribui ISBN; depósito legal é outra função."
  }
],
  descricaoCurta: "Relacionar marcos históricos sem condensar autores e épocas numa única data. Reconhecer acervos, serviço e leitores na passagem efetivamente consultada. Distinguir documento, registro derivado e fonte sem impor lista não documentada. Interpretar surgimento da CI e Lei de Mooers além de slogans tecnológicos. Relacionar interdisciplinaridade e campos sem substituição automática. Comparar tipos de biblioteca e distinguir depósito legal, ISBN e biblioteca escolar. Interpretar manifesto e adoção institucional sem frequência inventada. Identificar troca de autor, época ou regime no enunciado.",
  tempoEstimadoMinutos: 34,
  autoresChave: [
  "Yves-François Le Coadic — A ciência da informação",
  "Harold Borko — Information Science: What is it? (1968)",
  "Michael Buckland — Informação como coisa (1991)",
  "IFLA/UNESCO — Public Library Manifesto 2022",
  "Lei 12.244/2010 — texto atualizado",
  "CBL — Agência Brasileira do ISBN",
  "IBICT — CDU",
  "IFLA — UNESCO endorses the Manifesto for Digital Libraries"
],
  alertasCebraspe: [
  "São eventos diferentes e não devem ser colapsados.",
  "A dificuldade pode ser organizacional e ligada às consequências do conhecimento.",
  "Interseção de conhecimentos não equivale a substituição integral."
],
  teoriaDensaMarkdown: "### A Trajetória Epistemológica e Rupturas Históricas\n\nA gestão social e científica do conhecimento registrado evoluiu ao longo de séculos através de rupturas epistemológicas fundamentais. Para analisar itens, diferencie conceito, marco histórico e método entre as três disciplinas correlatas: **a Biblioteconomia**, **a Documentação** e **a Ciência da Informação (CI)**.\n\n```timeline\nBIBLIO | Biblioteconomia (Antiguidade / Séc. XIX) | Objeto: O Livro e a Biblioteca | Foco: Custódia, Tratamento Técnico e Uso Social\n---> Explosão de Periódicos Científicos\nDOC | Documentação (IIB — 1895; Otlet — 1934; Briet — 1951) | Objeto: O Documento em Qualquer Suporte | Foco: Princípio Monográfico e Disseminação\n---> Pós-Segunda Guerra / Guerra Fria\nCI | Ciência da Informação (Bush — 1945; Mooers — 1950; Borko — 1968) | Objeto: A Informação em Si (Propriedades e Fluxos) | Foco: Sistemas de RI, Redes e Cognição\n```\n\n**Aplicação e recuperação:** IIB, Tratado de Otlet e texto de Briet são marcos de 1895, 1934 e 1951. Reuni-los em uma linha de tempo ajuda; usar a mesma data para todos cria erro. O nascimento de um campo também não precisa se reduzir a um único evento.\n\n### A Biblioteconomia: Da Guarda Patrimonial à Função Social Democrática\n\nHistoricamente, a Biblioteconomia nasceu umbilicalmente ligada à **instituição biblioteca** e à custódia física de suportes textuais (rolos de papiro em Alexandria e Pérgamo, códices medievais nos mosteiros e o livro impresso tipográfico após a revolução de Gutenberg no século XV).\n\n#### A. A Transição de Paradigmas\n1. **Paradigma Patrimonialista / Conservacionista (Antiguidade ao Séc. XVIII):** O livro era visto como patrimônio raro, tesouro material e relíquia. A biblioteca funcionava como depósito sagrado onde o objetivo primordial era a custódia, guarda e preservação física dos suportes, muitas vezes com acesso restrito a sacerdotes, monges e elites aristocráticas.\n2. **Paradigma Educacional, Social e Democrático (Final do Séc. XIX e Séc. XX):** Com a expansão da escolarização pública, a industrialização e as teorizações de Melvil Dewey (1876) e S. R. Ranganathan (1931), a biblioteca transformou-se em equipamento público e social. O objetivo primordial passou a ser a **disseminação, o livre acesso e o uso social da informação**.\n\n#### B. Acervos, serviço organizado e leitores em Le Coadic\n\nNo capítulo 2 do PDF do projeto (pp. 14–15), Le Coadic apresenta problemas relativos **aos acervos**, **à biblioteca como serviço organizado** e **aos leitores/usuários**. É uma formulação identificável no texto consultado. Não se deve substituir essa passagem por uma suposta divisão literal canônica em apenas “biblioteconomia dos livros” e “dos leitores”, sem fonte que a sustente.\n\nPara comparar dimensões, catalogação e conservação incidem sobre organização/acervo; regulamento, pessoal e contabilidade sobre o serviço; acesso e empréstimo envolvem usuários. São dimensões relacionadas: um catálogo tecnicamente consistente também afeta a experiência de busca. A posição histórica do autor sobre o estatuto científico da Biblioteconomia não se apresenta como consenso absoluto de toda a área.\n\n**Aplicação e recuperação:** Um catálogo com metadados consistentes reduz barreiras de acesso. A mesma decisão envolve acervo, serviço e usuário. Uma questão que exclua os leitores da exposição de Le Coadic conflita com o texto consultado, que os menciona expressamente.\n\n### A Documentação e a Revolução Conceitual de Paul Otlet\n\nNo final do século XIX, a Revolução Industrial e a especialização das ciências provocaram uma explosão no número de **artigos de periódicos, relatórios técnicos, atas de congressos e patentes**. A Biblioteconomia tradicional, estruturada em torno do livro monográfico encadernado, enfrentou desafios para representar e recuperar as frações mínimas do saber exigidas pela comunidade científica.\n\n#### A. Paul Otlet, Henri La Fontaine e o Instituto Internacional de Bibliografia (IIB - 1895)\n* Em 1895, os advogados e juristas belgas **Paul Otlet** e **Henri La Fontaine** fundaram em Bruxelas o **Instituto Internacional de Bibliografia (IIB)**.\n* **O Repertório Bibliográfico Universal (RBU):** Concebido como um catálogo universal de todo o conhecimento registrado da humanidade.\n* **O *Mundaneum*:** O \"museu mundial\" e cidade do saber idealizado por Otlet para reunir, indexar e conectar globalmente os saberes humanos (precursor analógico da internet).\n* **Criação da CDU:** Para indexar as fichas do RBU com detalhamento facetado e relacional, Otlet e La Fontaine adaptaram a CDD de Dewey, criando a **Classificação Decimal Universal (CDU)**.\n\n#### B. O Tratado de Documentação (1934) e o Princípio Monográfico\nNa obra seminal *Traité de Documentation: le livre sur le livre, théorie et pratique* (1934), Otlet sistematizou:\n1. **O Princípio Monográfico:** Consiste em desmembrar o conteúdo das publicações em seus elementos conceituais constitutivos (ideias, fatos, dados, fórmulas), registrando cada unidade analítica em uma ficha móvel padronizada independente (o formato internacional 12,5 × 7,5 cm). Dessa forma, unidades de conhecimento poderiam ser reorganizadas, combinadas e atualizadas; isso não significa capacidade material infinita ou corte físico obrigatório de todos os livros, superando a rigidez estática do livro encadernado.\n2. **Ampliação do Suporte Documental:** Para Otlet, a documentação não se restringe a livros impressos. Abrange gráficos, mapas, fotografias, esquemas, cartazes, diapositivos, patentes e discos sonoros.\n\n#### C. Briet: o documento ultrapassa o livro em papel\n\nEm *Qu’est-ce que la documentation?* (1951), Briet amplia a análise documental para indícios organizados e usados como evidência. O exemplo conhecido do **antílope** contrasta o animal fora de uma relação documental e o espécime selecionado, estudado e documentado. A condição de documento depende dessa relação, não de o objeto nascer com texto impresso.\n\n**Quatro perguntas de análise desta aula**, sem atribuir uma lista literal cumulativa a Briet: o que funciona como suporte/indício? Em qual finalidade foi selecionado? Como foi descrito e relacionado a outros registros? De que fenômeno serve como evidência? São perguntas didáticas, não teste jurídico universal de quatro requisitos.\n\nNo exemplo, espécime e registros derivados possuem relações diferentes. Chamar o artigo derivado de “documento secundário” nessa discussão não significa que todo artigo de pesquisa seja fonte secundária na tipologia de fontes. As classificações têm critérios distintos.\n\n#### D. Evolução Institucional da Documentação\n* 1895: **IIB** (Instituto Internacional de Bibliografia);\n* 1931: **IID** (Instituto Internacional de Documentação);\n* 1938: **FID** (Federação Internacional de Documentação), que teve papel histórico no desenvolvimento da classificação. A gestão da CDU passou ao **UDC Consortium em 1992**; não se deve vinculá-la automaticamente à data posterior de encerramento da FID.\n\n**Aplicação e recuperação:** Um objeto recolhido para pesquisa recebe identificação e relações com laudos. Sua função documental não decorre de ser papel. Já chamar o laudo de registro derivado não decide automaticamente se ele contém pesquisa original para uma revisão de literatura.\n\n### A Emergência da Ciência da Informação no Pós-Guerra\n\nA emergência da Ciência da Informação ocorreu no contexto da Segunda Guerra Mundial e da Guerra Fria (décadas de 1940 a 1960), impulsionada pela explosão da pesquisa científica militar, pela cibernética e pelo surgimento dos computadores eletrônicos.\n\n#### A. Marcos Fundacionais\n* **Vannevar Bush e o Ensaio \"As We May Think\" (1945):**\n  * Bush, conselheiro científico do presidente Franklin Roosevelt, publicou na revista *The Atlantic Monthly* o ensaio visionário alertando que a humanidade estava submergindo em um oceano de publicações científicas sem capacidade física de localizá-las.\n  * Propôs o **Memex** (*Memory Extender*): um dispositivo conceitual eletromecânico, baseado em microfilmes e fotocélulas, no qual um cientista poderia armazenar todos os seus livros, anotações e comunicações, consultando-os através de **trilhas associativas** (*associative trails*). Memex é referência histórica para ideias de associação e hipertexto; não foi a Web implementada em 1945 nem a única origem de toda tecnologia posterior.\n* **Calvin Mooers e a Recuperação da Informação (1950):**\n  * Mooers cunhou a expressão **Recuperação da Informação** (*Information Retrieval - IR*), que veio a constituir o coração operacional da nova disciplina. Sua **Lei de Mooers (1959)** trata das condições em que **ter e usar informação** gera mais incômodo do que ficar sem ela. Não deve ser reduzida apenas à dificuldade da interface: consequências organizacionais, dever de agir e incentivos também importam.\n* **Conferências do Georgia Institute of Technology (1961-1962):**\n  * Constituem marcos da discussão institucional da área, sem um nascimento único e incontroverso. Estabeleceram que a Ciência da Informação é uma ciência interdisciplinar que estuda as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processamento.\n* **Harold Borko e o Artigo \"Information Science: What is it?\" (1968):**\n  * Borko apresentou uma caracterização historicamente influente:\n\n> **Fundamentação Doutrinária (Harold Borko, 1968):** Segundo Harold Borko (1968), a Ciência da Informação investiga as propriedades e o comportamento da informação, as forças que regem seu fluxo e os meios de processamento destinados a aperfeiçoar sua acessibilidade e uso. O campo abrange os saberes relativos à gênese, coleta, organização, guarda, recuperação, interpretação, difusão, transformação e uso da informação, integrando uma vertente de ciência pura e uma de ciência aplicada (desenvolvimento de produtos e serviços).\n\n**Aplicação e recuperação:** Uma organização evita consultar um relatório porque terá de enfrentar um problema nele documentado. Mesmo com interface fácil, os incentivos podem desestimular o uso. Essa situação esclarece por que a Lei de Mooers não é apenas uma lei sobre usabilidade.\n\n### Interdisciplinaridade e Fronteiras Disciplinares (Saracevic & Borko)\n\nConforme demonstrado por **Tefko Saracevic (1995/1999)** e **Lena Vânia Pinheiro (1995)**, a Ciência da Informação não extinguiu nem substituiu a Biblioteconomia:\n* **Interdisciplinaridade Constitutiva:** A CI nutre-se da Ciência da Computação (algoritmos e bancos de dados), Linguística e Semiótica (estruturas de linguagem e tesauros), Comunicação (teorias da recepção e canais), Psicologia Cognitiva (modelos mentais e necessidades de informação), Lógica e Filosofia (ontologias e epistemologia).\n* **Diferenciação de Escopo:**\n  * A **Biblioteconomia** é uma disciplina aplicada de natureza eminentemente profissional, institucional e social, voltada à operação, curadoria e prestação de serviços no âmbito das bibliotecas.\n  * A **Ciência da Informação** é um campo científico abrangente que investiga fenômenos informacionais gerais em sistemas sociais, institucionais e tecnológicos, independentemente de estarem confinados a uma biblioteca física.\n\n**Aplicação e recuperação:** A ciência da informação utiliza computação para estudar recuperação, mas inclui dimensões humanas e sociais. Usar algoritmo não a transforma em ramo idêntico à computação nem extingue a Biblioteconomia.\n\n### Tipologia Completa de Bibliotecas no Edital da Câmara\n\nO edital da Câmara dos Deputados exige o domínio das características institucionais de cada tipo de unidade de informação:\n\n| Tipo de Biblioteca | Missão Principal | Coleção Típica | Usuário Alvo | Marco / Característica Diferencial |\n| :--- | :--- | :--- | :--- | :--- |\n| **Biblioteca Nacional** | Preservar a memória bibliográfica do país e produzir a Bibliografia Nacional. | Exaustiva de publicações nacionais via **Depósito Legal** (Lei 10.994/2004). | Pesquisadores, historiadores e sociedade em geral. | Depósito legal, memória e bibliografia nacional não se confundem com agência de identificadores. No Brasil, ISBN é atribuído pela CBL desde março de 2020. |\n| **Biblioteca Pública** | Promover o livre acesso à cultura, informação e fomento à cidadania e leitura. | Enciclopédica, diversificada (literatura, artes, ciências básicas). | Toda a comunidade local sem distinção de idade, renda ou escolaridade. | Manifesto da UNESCO sobre Bibliotecas Públicas; serviços gratuitos de empréstimo. |\n| **Biblioteca Universitária** | Dar suporte às atividades de ensino, pesquisa e extensão da instituição superior. | Especializada e didática em múltiplas áreas do conhecimento; periódicos e teses. | Comunidade acadêmica (professores, pesquisadores e alunos de graduação/pós). | Redes cooperativas de comutação bibliográfica (COMUT); repositórios institucionais. |\n| **Biblioteca Especializada** | Subsidiar a pesquisa técnica e o desenvolvimento institucional ou empresarial. | Altamente focada em um domínio temático específico (ex.: Direito, Medicina, Engenharia). | Especialistas, cientistas, técnicos e gestores da corporação. | Ênfase em **DSI ativa**, busca em bases de dados restritas e indexação em profundidade. |\n| **Biblioteca Escolar** | Apoiar o projeto pedagógico e desenvolver habilidades de letramento informacional. | Acervo infantil, infantojuvenil e livros didáticos curriculares. | Alunos, professores e corpo técnico da escola básica. | **Lei 12.244/2010, alterada pela Lei 14.837/2024**: biblioteca escolar e SNBE, com observância da legislação profissional. |\n| **Biblioteca Parlamentar (Ex.: Câmara / Senado)** | Subsidiar o processo legislativo, a fiscalização orçamentária e a cidadania. | Direito, Ciência Política, Administração Pública, Economia, anais e projetos de lei. | Deputados, senadores, assessores legislativos, comissões temáticas e cidadãos. | Integra a **RVBI** (Rede Virtual de Bibliotecas); alimentação do Portal **LexML Brasil**. |\n\n**Aplicação e recuperação:** Uma editora pede ISBN à CBL e cumpre o depósito legal pertinente. São operações com funções diferentes. Na escola, tampouco basta repetir o antigo número de títulos por aluno sem considerar a reforma legal e as funções do SNBE.\n\n### A Cooperação Internacional e a IFLA: Missão, Governança, Padrões e Manifestos Históricos\n\nA **IFLA** (*International Federation of Library Associations and Institutions* — Federação Internacional de Associações e Instituições Bibliotecárias) é o principal organismo internacional não governamental de representação dos interesses dos serviços de bibliotecas, informação e de seus usuários no mundo.\n\n#### A. Natureza Institucional, Missão e Estrutura de Governança\n* **Fundação e Sede:** Fundada em 1927 em Edimburgo (Escócia) e sediada na Haia (Holanda), a IFLA possui relações formais de consulta e cooperação estreita com a **UNESCO**, com a Organização Mundial da Propriedade Intelectual (OMPI) e com a International Organization for Standardization (ISO).\n* **Missão Estratégica:** Promover padrões internacionais de alta qualidade para a prestação de serviços bibliotecários, defender a liberdade intelectual e o livre acesso à informação, e capacitar os membros da profissão globalmente.\n* **Estrutura de Governança:** Organizada em Assembleia Geral, Conselho de Administração (*Governing Board*), Divisões Profissionais e dezenas de Seções Especializadas — destacando-se, no contexto parlamentar, a **Seção de Serviços de Bibliotecas e Pesquisa para Parlamentos** (*Library and Research Services for Parliaments Section*), que formula diretrizes mundiais para bibliotecas legislativas como a da Câmara dos Deputados do Brasil.\n* **Papel Normativo Global:** A IFLA é a responsável pelo desenvolvimento e manutenção dos maiores referenciais descritivos da história da Biblioteconomia: a **ISBD** (Descrição Bibliográfica Internacional Normalizada), o modelo conceitual **IFLA LRM** (*Library Reference Model*), a **Declaração de Princípios Internacionais de Catalogação (ICP)** e o padrão **UNIMARC**.\n\n#### B. O Manifesto da Biblioteca Pública IFLA/UNESCO (Atualização de 2022)\nPublicado originalmente em 1949 e periodicamente atualizado (1972, 1994 e **revisado em Dublin em 2022**), o **Manifesto da Biblioteca Pública IFLA/UNESCO** é uma referência de políticas e missão; esta aula não apresenta estatística de frequência de cobrança.\n* **Proclamação Central:** A biblioteca pública é proclamada como a **porta de entrada local para o conhecimento**, constituindo uma **força viva para a educação, a cultura, a inclusão social e a paz**, bem como um agente essencial para o desenvolvimento sustentável e o exercício pleno da cidadania.\n* **Princípio da Universalidade e Gratuidade:** Os serviços da biblioteca pública devem ser oferecidos com base na **igualdade de acesso para todos, sem distinção de idade, raça, sexo, religião, nacionalidade, idioma ou condição social**. O Manifesto estipula expressamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**.\n* **Inovações Críticas da Edição 2022 (Atenção ao Edital!):**\n  1. **Inclusão Digital e Alfabetização Midiática:** O manifesto incorpora a missão de capacitar os cidadãos com habilidades de letramento digital e midiático (*media and information literacy*), capacitando a sociedade a combater ativamente a desinformação (*fake news*).\n  2. **Alinhamento à Agenda 2030 da ONU:** Estabelece o compromisso explícito das bibliotecas públicas com a sustentabilidade ambiental, justiça social e os Objetivos de Desenvolvimento Sustentável (ODS).\n  3. **Espaço Comunitário Democrático:** Reafirma a biblioteca como espaço comunitário acessível e acolhedor. “Terceiro lugar” é aproximação teórica que não transforma todos os seus atributos em transcrição literal do manifesto; ofereça condições para o diálogo cívico e a coesão social.\n\n#### C. O Manifesto da IFLA/UNESCO sobre Bibliotecas Digitais (2010)\nElaborado no contexto de 2010 e chancelado pela Conferência Geral da UNESCO em **2011**, este documento estabelece as diretrizes para a construção de pontes informacionais no ciberespaço:\n* **Missão Central:** Superar a exclusão digital (*digital divide*) e garantir que o patrimônio cultural, científico e documental mundial em formato digital seja preservado, mantido acessível e compartilhado de maneira equitativa.\n* **Diretrizes e Requisitos de Sustentabilidade:**\n  1. Promoção da digitalização do patrimônio analógico e preservação a longo prazo dos objetos digitais nativos (*born-digital*);\n  2. Garantia do acesso aberto e universal com respeito estrito aos direitos autorais e à propriedade intelectual (incentivando exceções e limitações para bibliotecas);\n  3. Promoção de **padrões abertos e interoperáveis**; a recomendação política não se torna obrigação legal universal por integrar um manifesto de metadados para viabilizar redes globais e colheita federada;\n  4. Cooperação transversal entre instituições de memória: Bibliotecas, Arquivos e Museus (*GLAM - Galleries, Libraries, Archives, Museums*).\n\n**Aplicação e recuperação:** Um manifesto orienta políticas de acesso e sustentabilidade. Para afirmar obrigação jurídica numa instituição específica, é preciso examinar as normas aplicáveis. Data de elaboração e de chancela também podem ser diferentes.\n\n### Aplicações autorais: distinguir definição, atribuição e vigência\n\n| Afirmação autoral para análise | Diagnóstico | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"A Ciência da Informação surgiu na Antiguidade clássica em Alexandria com o objetivo de guardar o livro impresso.\"* | **ERRADO** | Confunde CI com Biblioteconomia antiga. A CI surgiu na metade do séc. XX (pós-Segunda Guerra). |\n| *\"Harold Borko definiu a Biblioteconomia como a ciência que investiga as propriedades e fluxos da informação.\"* | **ERRADO** | A definição canônica de Borko (1968) é de **Ciência da Informação**, e não de Biblioteconomia. |\n| *\"O Princípio Monográfico de Paul Otlet propunha manter o livro encadernado intacto como unidade indivisível de conhecimento.\"* | **ERRADO** | O Princípio Monográfico propunha justamente o oposto: **desmembrar** o livro em fichas móveis analíticas. |\n| *\"Suzanne Briet excluiu categoricamente do conceito de documento qualquer entidade que não fosse suporte em papel.\"* | **ERRADO** | Briet ampliou radicalmente o conceito de documento para qualquer objeto físico/natural que sirva de prova (o antílope). |\n| *\"O Manifesto da Biblioteca Pública IFLA/UNESCO preconiza que a cobrança de mensalidades para empréstimo domiciliar é legítima como fonte primária de custeio da unidade.\"* | **ERRADO** | O Manifesto afirma categoricamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**. |\n| *\"A Lei Federal nº 12.244/2010 estabeleceu que as bibliotecas escolares poderiam ser substituídas por salas de leitura sem bibliotecário.\"* | **ERRADO** | Consultar o texto atualizado: em 2024, a definição foi ampliada, criou-se o SNBE e revogou-se a antiga regra do parágrafo único de um título por aluno. Permanece a observância da legislação profissional; não usar a redação inicial como se fosse a atual. |\n\n**Aplicação e recuperação:** A afirmação parece familiar, mas substitui Ciência da Informação por Biblioteconomia na definição de Borko. Verificar o sujeito e o alcance da definição permite identificar o erro sem recorrer a palavras absolutas como único sinal.",
  teoriaDidaticaMarkdown: "Biblioteconomia, Documentação e CI têm relações históricas e escopos distintos. Verifique marcos e atribuições no texto. Le Coadic discute acervos, serviço e leitores; não atribua lista binária não conferida. Documento pode ultrapassar papel. Lei de Mooers inclui consequências de ter informação. Depósito legal difere de ISBN; biblioteca escolar deve ser estudada na redação de 2024. Manifestos orientam e não se tornam automaticamente lei.",
  checkpoints: [
  {
    "id": "cp-1-1-1",
    "pergunta": "Micro-Checkpoint 1: Conceito Canônico de Ciência da Informação",
    "item": "A Ciência da Informação é definida como a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.",
    "gabarito": "C",
    "justificativa": "A caracterização corresponde à CI em Borko (1968), articulando investigação e aplicação. Não autoriza substituir seu sujeito por outro campo.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN."
  },
  {
    "id": "cp-1-1-2",
    "pergunta": "Micro-Checkpoint 2: A Divisão de Yves-François Le Coadic",
    "item": "No capítulo consultado de A ciência da informação, Le Coadic limita os problemas da Biblioteconomia ao acervo e exclui expressamente os leitores e o serviço organizado.",
    "gabarito": "E",
    "justificativa": "Le Coadic inclui problemas dos acervos, da biblioteca como serviço organizado e dos leitores nas pp. 14–15. O erro é excluir duas dessas dimensões e reduzir a Biblioteconomia ao acervo.",
    "versao_correta": "Le Coadic inclui problemas dos acervos, do serviço organizado e dos leitores.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN."
  },
  {
    "id": "cp-1-1-3",
    "pergunta": "Micro-Checkpoint 3: Manifesto da Biblioteca Pública IFLA/UNESCO (Atualização 2022)",
    "item": "O Manifesto IFLA/UNESCO de 2022 defende igualdade de acesso à biblioteca pública e que seus serviços sejam, em princípio, gratuitos, reconhecendo sua função educativa, cultural e informacional.",
    "gabarito": "C",
    "justificativa": "A formulação preserva o alcance “em princípio”, sem converter o manifesto em lei brasileira ou inferir que a igualdade dispensa atender necessidades específicas.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN."
  },
  {
    "id": "rt-1-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Os marcos IIB de 1895, Tratado de Otlet de 1934 e texto de Briet de 1951 podem ser usados como se fossem um único acontecimento da mesma data.",
    "gabarito": "E",
    "justificativa": "A fundação do IIB ocorreu em 1895; o Tratado de Documentação de Otlet foi publicado em 1934, e o texto de Briet, em 1951. São três marcos distintos, não um acontecimento com data única.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar",
    "versao_correta": "A fundação do IIB (1895), o tratado de Otlet (1934) e o texto de Briet (1951) são marcos distintos da Documentação."
  },
  {
    "id": "rt-1-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A exposição consultada de Le Coadic inclui problemas do acervo, do serviço organizado e dos leitores.",
    "gabarito": "C",
    "justificativa": "Essas três dimensões aparecem nas pp. 14–15 do PDF.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-1-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A discussão documental de Briet permite analisar objetos como evidência sem restringir documento a livros em papel.",
    "gabarito": "C",
    "justificativa": "O antílope ilustra a ampliação e a relação documental.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-1-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A Lei de Mooers só trata de cliques e tempo de resposta, excluindo consequências de ter e usar informação.",
    "gabarito": "E",
    "justificativa": "A dificuldade pode ser organizacional e ligada às consequências do conhecimento.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar",
    "versao_correta": "Ter e usar informação, com suas consequências, faz parte da interpretação."
  },
  {
    "id": "rt-1-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A interdisciplinaridade da CI implica extinguir a Biblioteconomia como campo profissional.",
    "gabarito": "E",
    "justificativa": "Interseção de conhecimentos não equivale a substituição integral.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar",
    "versao_correta": "Há relações e diferenças de escopo entre os campos."
  },
  {
    "id": "rt-1-1-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Atualmente, o fato de a Biblioteca Nacional receber depósito legal prova que ela é a agência brasileira emissora do ISBN.",
    "gabarito": "E",
    "justificativa": "São funções distintas; a CBL responde pelo ISBN desde março de 2020.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar",
    "versao_correta": "Depósito legal e emissão de ISBN não se confundem."
  },
  {
    "id": "rt-1-1-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Chancela de um manifesto internacional o transforma automaticamente em lei obrigatória para toda biblioteca brasileira.",
    "gabarito": "E",
    "justificativa": "Documento de orientação e obrigação normativa são planos diferentes.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar",
    "versao_correta": "Examinar as normas aplicáveis antes de afirmar obrigação jurídica."
  },
  {
    "id": "rt-1-1-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Identificar o autor, o sujeito e o alcance da definição ajuda a detectar uma atribuição conceitual trocada.",
    "gabarito": "C",
    "justificativa": "Uma troca de campo pode invalidar uma frase aparentemente familiar.",
    "fonte": "Le Coadic, A ciência da informação, PDF do projeto, capítulo 2, pp. 14–15; Borko, Information Science: What is it? (1968); Buckland, Informação como coisa (1991); Manifesto IFLA/UNESCO 2022; Lei 12.244/2010 com Lei 14.837/2024; IBICT, CDU; CBL, ISBN.",
    "editalRef": "Bloco A - Item 1.1 e 1.6",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-1-1-fonte-lecoadic",
      "nome": "Yves-François Le Coadic — A ciência da informação",
      "ano": "Referência de consulta",
      "obraPrincipal": "Yves-François Le Coadic — A ciência da informação",
      "ideiaChave": "PDF do projeto, cap. 2, pp. 14–15: acervos, biblioteca organizada e leitores; não presumir uma taxonomia binária literal.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-borko",
      "nome": "Harold Borko — Information Science: What is it? (1968)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Harold Borko — Information Science: What is it? (1968)",
      "ideiaChave": "American Documentation 19(1), 3–5; definição e relação entre aspectos puros/aplicados.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-buckland",
      "nome": "Michael Buckland — Informação como coisa (1991)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Michael Buckland — Informação como coisa (1991)",
      "ideiaChave": "Tradução presente no acervo; distinguir indício e informação, sem atribuir lista editorial de critérios literalmente a Briet.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-manifesto",
      "nome": "IFLA/UNESCO — Public Library Manifesto 2022",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA/UNESCO — Public Library Manifesto 2022",
      "ideiaChave": "Missão, igualdade de acesso e gratuidade em princípio.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-escolar",
      "nome": "Lei 12.244/2010 — texto atualizado",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 12.244/2010 — texto atualizado",
      "ideiaChave": "Redação da Lei 14.837/2024: definição de biblioteca escolar, SNBE e legislação profissional.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-cbl",
      "nome": "CBL — Agência Brasileira do ISBN",
      "ano": "Referência de consulta",
      "obraPrincipal": "CBL — Agência Brasileira do ISBN",
      "ideiaChave": "Responsabilidade desde março de 2020; não confundir com depósito legal.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-cdu",
      "nome": "IBICT — CDU",
      "ano": "Referência de consulta",
      "obraPrincipal": "IBICT — CDU",
      "ideiaChave": "Transição da gestão internacional ao UDC Consortium em 1992.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-1-1-fonte-digital",
      "nome": "IFLA — UNESCO endorses the Manifesto for Digital Libraries",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA — UNESCO endorses the Manifesto for Digital Libraries",
      "ideiaChave": "Chancela na Conferência Geral da UNESCO em 2011; distinguir elaboração e adoção.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-1-1-6",
      "afirmacao": "Atualmente, o fato de a Biblioteca Nacional receber depósito legal prova que ela é a agência brasileira emissora do ISBN.",
      "gabarito": "E",
      "porQue": "São funções distintas; a CBL responde pelo ISBN desde março de 2020."
    },
    {
      "id": "memoria-rt-1-1-7",
      "afirmacao": "Chancela de um manifesto internacional o transforma automaticamente em lei obrigatória para toda biblioteca brasileira.",
      "gabarito": "E",
      "porQue": "Documento de orientação e obrigação normativa são planos diferentes."
    },
    {
      "id": "memoria-rt-1-1-8",
      "afirmacao": "Identificar o autor, o sujeito e o alcance da definição ajuda a detectar uma atribuição conceitual trocada.",
      "gabarito": "C",
      "porQue": "Uma troca de campo pode invalidar uma frase aparentemente familiar."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-1-1-bloco-1",
    "titulo": "A Trajetória Epistemológica e Rupturas Históricas",
    "objetivos": [
      "Relacionar marcos históricos sem condensar autores e épocas numa única data."
    ],
    "conteudo": "A gestão social e científica do conhecimento registrado evoluiu ao longo de séculos através de rupturas epistemológicas fundamentais. Para analisar itens, diferencie conceito, marco histórico e método entre as três disciplinas correlatas: **a Biblioteconomia**, **a Documentação** e **a Ciência da Informação (CI)**.\n\n```timeline\nBIBLIO | Biblioteconomia (Antiguidade / Séc. XIX) | Objeto: O Livro e a Biblioteca | Foco: Custódia, Tratamento Técnico e Uso Social\n---> Explosão de Periódicos Científicos\nDOC | Documentação (IIB — 1895; Otlet — 1934; Briet — 1951) | Objeto: O Documento em Qualquer Suporte | Foco: Princípio Monográfico e Disseminação\n---> Pós-Segunda Guerra / Guerra Fria\nCI | Ciência da Informação (Bush — 1945; Mooers — 1950; Borko — 1968) | Objeto: A Informação em Si (Propriedades e Fluxos) | Foco: Sistemas de RI, Redes e Cognição\n```\n\n**Aplicação e recuperação:** IIB, Tratado de Otlet e texto de Briet são marcos de 1895, 1934 e 1951. Reuni-los em uma linha de tempo ajuda; usar a mesma data para todos cria erro. O nascimento de um campo também não precisa se reduzir a um único evento.",
    "checkpointIds": [
      "rt-1-1-1"
    ]
  },
  {
    "id": "sub-1-1-bloco-2",
    "titulo": "A Biblioteconomia: Da Guarda Patrimonial à Função Social Democrática",
    "objetivos": [
      "Reconhecer acervos, serviço e leitores na passagem efetivamente consultada."
    ],
    "conteudo": "Historicamente, a Biblioteconomia nasceu umbilicalmente ligada à **instituição biblioteca** e à custódia física de suportes textuais (rolos de papiro em Alexandria e Pérgamo, códices medievais nos mosteiros e o livro impresso tipográfico após a revolução de Gutenberg no século XV).\n\n#### A. A Transição de Paradigmas\n1. **Paradigma Patrimonialista / Conservacionista (Antiguidade ao Séc. XVIII):** O livro era visto como patrimônio raro, tesouro material e relíquia. A biblioteca funcionava como depósito sagrado onde o objetivo primordial era a custódia, guarda e preservação física dos suportes, muitas vezes com acesso restrito a sacerdotes, monges e elites aristocráticas.\n2. **Paradigma Educacional, Social e Democrático (Final do Séc. XIX e Séc. XX):** Com a expansão da escolarização pública, a industrialização e as teorizações de Melvil Dewey (1876) e S. R. Ranganathan (1931), a biblioteca transformou-se em equipamento público e social. O objetivo primordial passou a ser a **disseminação, o livre acesso e o uso social da informação**.\n\n#### B. Acervos, serviço organizado e leitores em Le Coadic\n\nNo capítulo 2 do PDF do projeto (pp. 14–15), Le Coadic apresenta problemas relativos **aos acervos**, **à biblioteca como serviço organizado** e **aos leitores/usuários**. É uma formulação identificável no texto consultado. Não se deve substituir essa passagem por uma suposta divisão literal canônica em apenas “biblioteconomia dos livros” e “dos leitores”, sem fonte que a sustente.\n\nPara comparar dimensões, catalogação e conservação incidem sobre organização/acervo; regulamento, pessoal e contabilidade sobre o serviço; acesso e empréstimo envolvem usuários. São dimensões relacionadas: um catálogo tecnicamente consistente também afeta a experiência de busca. A posição histórica do autor sobre o estatuto científico da Biblioteconomia não se apresenta como consenso absoluto de toda a área.\n\n**Aplicação e recuperação:** Um catálogo com metadados consistentes reduz barreiras de acesso. A mesma decisão envolve acervo, serviço e usuário. Uma questão que exclua os leitores da exposição de Le Coadic conflita com o texto consultado, que os menciona expressamente.",
    "checkpointIds": [
      "cp-1-1-2",
      "rt-1-1-2"
    ]
  },
  {
    "id": "sub-1-1-bloco-3",
    "titulo": "A Documentação e a Revolução Conceitual de Paul Otlet",
    "objetivos": [
      "Distinguir documento, registro derivado e fonte sem impor lista não documentada."
    ],
    "conteudo": "No final do século XIX, a Revolução Industrial e a especialização das ciências provocaram uma explosão no número de **artigos de periódicos, relatórios técnicos, atas de congressos e patentes**. A Biblioteconomia tradicional, estruturada em torno do livro monográfico encadernado, enfrentou desafios para representar e recuperar as frações mínimas do saber exigidas pela comunidade científica.\n\n#### A. Paul Otlet, Henri La Fontaine e o Instituto Internacional de Bibliografia (IIB - 1895)\n* Em 1895, os advogados e juristas belgas **Paul Otlet** e **Henri La Fontaine** fundaram em Bruxelas o **Instituto Internacional de Bibliografia (IIB)**.\n* **O Repertório Bibliográfico Universal (RBU):** Concebido como um catálogo universal de todo o conhecimento registrado da humanidade.\n* **O *Mundaneum*:** O \"museu mundial\" e cidade do saber idealizado por Otlet para reunir, indexar e conectar globalmente os saberes humanos (precursor analógico da internet).\n* **Criação da CDU:** Para indexar as fichas do RBU com detalhamento facetado e relacional, Otlet e La Fontaine adaptaram a CDD de Dewey, criando a **Classificação Decimal Universal (CDU)**.\n\n#### B. O Tratado de Documentação (1934) e o Princípio Monográfico\nNa obra seminal *Traité de Documentation: le livre sur le livre, théorie et pratique* (1934), Otlet sistematizou:\n1. **O Princípio Monográfico:** Consiste em desmembrar o conteúdo das publicações em seus elementos conceituais constitutivos (ideias, fatos, dados, fórmulas), registrando cada unidade analítica em uma ficha móvel padronizada independente (o formato internacional 12,5 × 7,5 cm). Dessa forma, unidades de conhecimento poderiam ser reorganizadas, combinadas e atualizadas; isso não significa capacidade material infinita ou corte físico obrigatório de todos os livros, superando a rigidez estática do livro encadernado.\n2. **Ampliação do Suporte Documental:** Para Otlet, a documentação não se restringe a livros impressos. Abrange gráficos, mapas, fotografias, esquemas, cartazes, diapositivos, patentes e discos sonoros.\n\n#### C. Briet: o documento ultrapassa o livro em papel\n\nEm *Qu’est-ce que la documentation?* (1951), Briet amplia a análise documental para indícios organizados e usados como evidência. O exemplo conhecido do **antílope** contrasta o animal fora de uma relação documental e o espécime selecionado, estudado e documentado. A condição de documento depende dessa relação, não de o objeto nascer com texto impresso.\n\n**Quatro perguntas de análise desta aula**, sem atribuir uma lista literal cumulativa a Briet: o que funciona como suporte/indício? Em qual finalidade foi selecionado? Como foi descrito e relacionado a outros registros? De que fenômeno serve como evidência? São perguntas didáticas, não teste jurídico universal de quatro requisitos.\n\nNo exemplo, espécime e registros derivados possuem relações diferentes. Chamar o artigo derivado de “documento secundário” nessa discussão não significa que todo artigo de pesquisa seja fonte secundária na tipologia de fontes. As classificações têm critérios distintos.\n\n#### D. Evolução Institucional da Documentação\n* 1895: **IIB** (Instituto Internacional de Bibliografia);\n* 1931: **IID** (Instituto Internacional de Documentação);\n* 1938: **FID** (Federação Internacional de Documentação), que teve papel histórico no desenvolvimento da classificação. A gestão da CDU passou ao **UDC Consortium em 1992**; não se deve vinculá-la automaticamente à data posterior de encerramento da FID.\n\n**Aplicação e recuperação:** Um objeto recolhido para pesquisa recebe identificação e relações com laudos. Sua função documental não decorre de ser papel. Já chamar o laudo de registro derivado não decide automaticamente se ele contém pesquisa original para uma revisão de literatura.",
    "checkpointIds": [
      "rt-1-1-3"
    ]
  },
  {
    "id": "sub-1-1-bloco-4",
    "titulo": "A Emergência da Ciência da Informação no Pós-Guerra",
    "objetivos": [
      "Interpretar surgimento da CI e Lei de Mooers além de slogans tecnológicos."
    ],
    "conteudo": "A emergência da Ciência da Informação ocorreu no contexto da Segunda Guerra Mundial e da Guerra Fria (décadas de 1940 a 1960), impulsionada pela explosão da pesquisa científica militar, pela cibernética e pelo surgimento dos computadores eletrônicos.\n\n#### A. Marcos Fundacionais\n* **Vannevar Bush e o Ensaio \"As We May Think\" (1945):**\n  * Bush, conselheiro científico do presidente Franklin Roosevelt, publicou na revista *The Atlantic Monthly* o ensaio visionário alertando que a humanidade estava submergindo em um oceano de publicações científicas sem capacidade física de localizá-las.\n  * Propôs o **Memex** (*Memory Extender*): um dispositivo conceitual eletromecânico, baseado em microfilmes e fotocélulas, no qual um cientista poderia armazenar todos os seus livros, anotações e comunicações, consultando-os através de **trilhas associativas** (*associative trails*). Memex é referência histórica para ideias de associação e hipertexto; não foi a Web implementada em 1945 nem a única origem de toda tecnologia posterior.\n* **Calvin Mooers e a Recuperação da Informação (1950):**\n  * Mooers cunhou a expressão **Recuperação da Informação** (*Information Retrieval - IR*), que veio a constituir o coração operacional da nova disciplina. Sua **Lei de Mooers (1959)** trata das condições em que **ter e usar informação** gera mais incômodo do que ficar sem ela. Não deve ser reduzida apenas à dificuldade da interface: consequências organizacionais, dever de agir e incentivos também importam.\n* **Conferências do Georgia Institute of Technology (1961-1962):**\n  * Constituem marcos da discussão institucional da área, sem um nascimento único e incontroverso. Estabeleceram que a Ciência da Informação é uma ciência interdisciplinar que estuda as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processamento.\n* **Harold Borko e o Artigo \"Information Science: What is it?\" (1968):**\n  * Borko apresentou uma caracterização historicamente influente:\n\n> **Fundamentação Doutrinária (Harold Borko, 1968):** Segundo Harold Borko (1968), a Ciência da Informação investiga as propriedades e o comportamento da informação, as forças que regem seu fluxo e os meios de processamento destinados a aperfeiçoar sua acessibilidade e uso. O campo abrange os saberes relativos à gênese, coleta, organização, guarda, recuperação, interpretação, difusão, transformação e uso da informação, integrando uma vertente de ciência pura e uma de ciência aplicada (desenvolvimento de produtos e serviços).\n\n**Aplicação e recuperação:** Uma organização evita consultar um relatório porque terá de enfrentar um problema nele documentado. Mesmo com interface fácil, os incentivos podem desestimular o uso. Essa situação esclarece por que a Lei de Mooers não é apenas uma lei sobre usabilidade.",
    "checkpointIds": [
      "cp-1-1-1",
      "rt-1-1-4"
    ]
  },
  {
    "id": "sub-1-1-bloco-5",
    "titulo": "Interdisciplinaridade e Fronteiras Disciplinares (Saracevic & Borko)",
    "objetivos": [
      "Relacionar interdisciplinaridade e campos sem substituição automática."
    ],
    "conteudo": "Conforme demonstrado por **Tefko Saracevic (1995/1999)** e **Lena Vânia Pinheiro (1995)**, a Ciência da Informação não extinguiu nem substituiu a Biblioteconomia:\n* **Interdisciplinaridade Constitutiva:** A CI nutre-se da Ciência da Computação (algoritmos e bancos de dados), Linguística e Semiótica (estruturas de linguagem e tesauros), Comunicação (teorias da recepção e canais), Psicologia Cognitiva (modelos mentais e necessidades de informação), Lógica e Filosofia (ontologias e epistemologia).\n* **Diferenciação de Escopo:**\n  * A **Biblioteconomia** é uma disciplina aplicada de natureza eminentemente profissional, institucional e social, voltada à operação, curadoria e prestação de serviços no âmbito das bibliotecas.\n  * A **Ciência da Informação** é um campo científico abrangente que investiga fenômenos informacionais gerais em sistemas sociais, institucionais e tecnológicos, independentemente de estarem confinados a uma biblioteca física.\n\n**Aplicação e recuperação:** A ciência da informação utiliza computação para estudar recuperação, mas inclui dimensões humanas e sociais. Usar algoritmo não a transforma em ramo idêntico à computação nem extingue a Biblioteconomia.",
    "checkpointIds": [
      "rt-1-1-5"
    ]
  },
  {
    "id": "sub-1-1-bloco-6",
    "titulo": "Tipologia Completa de Bibliotecas no Edital da Câmara",
    "objetivos": [
      "Comparar tipos de biblioteca e distinguir depósito legal, ISBN e biblioteca escolar."
    ],
    "conteudo": "O edital da Câmara dos Deputados exige o domínio das características institucionais de cada tipo de unidade de informação:\n\n| Tipo de Biblioteca | Missão Principal | Coleção Típica | Usuário Alvo | Marco / Característica Diferencial |\n| :--- | :--- | :--- | :--- | :--- |\n| **Biblioteca Nacional** | Preservar a memória bibliográfica do país e produzir a Bibliografia Nacional. | Exaustiva de publicações nacionais via **Depósito Legal** (Lei 10.994/2004). | Pesquisadores, historiadores e sociedade em geral. | Depósito legal, memória e bibliografia nacional não se confundem com agência de identificadores. No Brasil, ISBN é atribuído pela CBL desde março de 2020. |\n| **Biblioteca Pública** | Promover o livre acesso à cultura, informação e fomento à cidadania e leitura. | Enciclopédica, diversificada (literatura, artes, ciências básicas). | Toda a comunidade local sem distinção de idade, renda ou escolaridade. | Manifesto da UNESCO sobre Bibliotecas Públicas; serviços gratuitos de empréstimo. |\n| **Biblioteca Universitária** | Dar suporte às atividades de ensino, pesquisa e extensão da instituição superior. | Especializada e didática em múltiplas áreas do conhecimento; periódicos e teses. | Comunidade acadêmica (professores, pesquisadores e alunos de graduação/pós). | Redes cooperativas de comutação bibliográfica (COMUT); repositórios institucionais. |\n| **Biblioteca Especializada** | Subsidiar a pesquisa técnica e o desenvolvimento institucional ou empresarial. | Altamente focada em um domínio temático específico (ex.: Direito, Medicina, Engenharia). | Especialistas, cientistas, técnicos e gestores da corporação. | Ênfase em **DSI ativa**, busca em bases de dados restritas e indexação em profundidade. |\n| **Biblioteca Escolar** | Apoiar o projeto pedagógico e desenvolver habilidades de letramento informacional. | Acervo infantil, infantojuvenil e livros didáticos curriculares. | Alunos, professores e corpo técnico da escola básica. | **Lei 12.244/2010, alterada pela Lei 14.837/2024**: biblioteca escolar e SNBE, com observância da legislação profissional. |\n| **Biblioteca Parlamentar (Ex.: Câmara / Senado)** | Subsidiar o processo legislativo, a fiscalização orçamentária e a cidadania. | Direito, Ciência Política, Administração Pública, Economia, anais e projetos de lei. | Deputados, senadores, assessores legislativos, comissões temáticas e cidadãos. | Integra a **RVBI** (Rede Virtual de Bibliotecas); alimentação do Portal **LexML Brasil**. |\n\n**Aplicação e recuperação:** Uma editora pede ISBN à CBL e cumpre o depósito legal pertinente. São operações com funções diferentes. Na escola, tampouco basta repetir o antigo número de títulos por aluno sem considerar a reforma legal e as funções do SNBE.",
    "checkpointIds": [
      "rt-1-1-6"
    ]
  },
  {
    "id": "sub-1-1-bloco-7",
    "titulo": "A Cooperação Internacional e a IFLA: Missão, Governança, Padrões e Manifestos Históricos",
    "objetivos": [
      "Interpretar manifesto e adoção institucional sem frequência inventada."
    ],
    "conteudo": "A **IFLA** (*International Federation of Library Associations and Institutions* — Federação Internacional de Associações e Instituições Bibliotecárias) é o principal organismo internacional não governamental de representação dos interesses dos serviços de bibliotecas, informação e de seus usuários no mundo.\n\n#### A. Natureza Institucional, Missão e Estrutura de Governança\n* **Fundação e Sede:** Fundada em 1927 em Edimburgo (Escócia) e sediada na Haia (Holanda), a IFLA possui relações formais de consulta e cooperação estreita com a **UNESCO**, com a Organização Mundial da Propriedade Intelectual (OMPI) e com a International Organization for Standardization (ISO).\n* **Missão Estratégica:** Promover padrões internacionais de alta qualidade para a prestação de serviços bibliotecários, defender a liberdade intelectual e o livre acesso à informação, e capacitar os membros da profissão globalmente.\n* **Estrutura de Governança:** Organizada em Assembleia Geral, Conselho de Administração (*Governing Board*), Divisões Profissionais e dezenas de Seções Especializadas — destacando-se, no contexto parlamentar, a **Seção de Serviços de Bibliotecas e Pesquisa para Parlamentos** (*Library and Research Services for Parliaments Section*), que formula diretrizes mundiais para bibliotecas legislativas como a da Câmara dos Deputados do Brasil.\n* **Papel Normativo Global:** A IFLA é a responsável pelo desenvolvimento e manutenção dos maiores referenciais descritivos da história da Biblioteconomia: a **ISBD** (Descrição Bibliográfica Internacional Normalizada), o modelo conceitual **IFLA LRM** (*Library Reference Model*), a **Declaração de Princípios Internacionais de Catalogação (ICP)** e o padrão **UNIMARC**.\n\n#### B. O Manifesto da Biblioteca Pública IFLA/UNESCO (Atualização de 2022)\nPublicado originalmente em 1949 e periodicamente atualizado (1972, 1994 e **revisado em Dublin em 2022**), o **Manifesto da Biblioteca Pública IFLA/UNESCO** é uma referência de políticas e missão; esta aula não apresenta estatística de frequência de cobrança.\n* **Proclamação Central:** A biblioteca pública é proclamada como a **porta de entrada local para o conhecimento**, constituindo uma **força viva para a educação, a cultura, a inclusão social e a paz**, bem como um agente essencial para o desenvolvimento sustentável e o exercício pleno da cidadania.\n* **Princípio da Universalidade e Gratuidade:** Os serviços da biblioteca pública devem ser oferecidos com base na **igualdade de acesso para todos, sem distinção de idade, raça, sexo, religião, nacionalidade, idioma ou condição social**. O Manifesto estipula expressamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**.\n* **Inovações Críticas da Edição 2022 (Atenção ao Edital!):**\n  1. **Inclusão Digital e Alfabetização Midiática:** O manifesto incorpora a missão de capacitar os cidadãos com habilidades de letramento digital e midiático (*media and information literacy*), capacitando a sociedade a combater ativamente a desinformação (*fake news*).\n  2. **Alinhamento à Agenda 2030 da ONU:** Estabelece o compromisso explícito das bibliotecas públicas com a sustentabilidade ambiental, justiça social e os Objetivos de Desenvolvimento Sustentável (ODS).\n  3. **Espaço Comunitário Democrático:** Reafirma a biblioteca como espaço comunitário acessível e acolhedor. “Terceiro lugar” é aproximação teórica que não transforma todos os seus atributos em transcrição literal do manifesto; ofereça condições para o diálogo cívico e a coesão social.\n\n#### C. O Manifesto da IFLA/UNESCO sobre Bibliotecas Digitais (2010)\nElaborado no contexto de 2010 e chancelado pela Conferência Geral da UNESCO em **2011**, este documento estabelece as diretrizes para a construção de pontes informacionais no ciberespaço:\n* **Missão Central:** Superar a exclusão digital (*digital divide*) e garantir que o patrimônio cultural, científico e documental mundial em formato digital seja preservado, mantido acessível e compartilhado de maneira equitativa.\n* **Diretrizes e Requisitos de Sustentabilidade:**\n  1. Promoção da digitalização do patrimônio analógico e preservação a longo prazo dos objetos digitais nativos (*born-digital*);\n  2. Garantia do acesso aberto e universal com respeito estrito aos direitos autorais e à propriedade intelectual (incentivando exceções e limitações para bibliotecas);\n  3. Promoção de **padrões abertos e interoperáveis**; a recomendação política não se torna obrigação legal universal por integrar um manifesto de metadados para viabilizar redes globais e colheita federada;\n  4. Cooperação transversal entre instituições de memória: Bibliotecas, Arquivos e Museus (*GLAM - Galleries, Libraries, Archives, Museums*).\n\n**Aplicação e recuperação:** Um manifesto orienta políticas de acesso e sustentabilidade. Para afirmar obrigação jurídica numa instituição específica, é preciso examinar as normas aplicáveis. Data de elaboração e de chancela também podem ser diferentes.",
    "checkpointIds": [
      "cp-1-1-3",
      "rt-1-1-7"
    ]
  },
  {
    "id": "sub-1-1-bloco-8",
    "titulo": "Aplicações autorais: distinguir definição, atribuição e vigência",
    "objetivos": [
      "Identificar troca de autor, época ou regime no enunciado."
    ],
    "conteudo": "| Afirmação autoral para análise | Diagnóstico | Erro Crítico / Armadilha Oculta |\n| :--- | :--- | :--- |\n| *\"A Ciência da Informação surgiu na Antiguidade clássica em Alexandria com o objetivo de guardar o livro impresso.\"* | **ERRADO** | Confunde CI com Biblioteconomia antiga. A CI surgiu na metade do séc. XX (pós-Segunda Guerra). |\n| *\"Harold Borko definiu a Biblioteconomia como a ciência que investiga as propriedades e fluxos da informação.\"* | **ERRADO** | A definição canônica de Borko (1968) é de **Ciência da Informação**, e não de Biblioteconomia. |\n| *\"O Princípio Monográfico de Paul Otlet propunha manter o livro encadernado intacto como unidade indivisível de conhecimento.\"* | **ERRADO** | O Princípio Monográfico propunha justamente o oposto: **desmembrar** o livro em fichas móveis analíticas. |\n| *\"Suzanne Briet excluiu categoricamente do conceito de documento qualquer entidade que não fosse suporte em papel.\"* | **ERRADO** | Briet ampliou radicalmente o conceito de documento para qualquer objeto físico/natural que sirva de prova (o antílope). |\n| *\"O Manifesto da Biblioteca Pública IFLA/UNESCO preconiza que a cobrança de mensalidades para empréstimo domiciliar é legítima como fonte primária de custeio da unidade.\"* | **ERRADO** | O Manifesto afirma categoricamente que os serviços básicos da biblioteca pública devem ser, em princípio, **gratuitos**. |\n| *\"A Lei Federal nº 12.244/2010 estabeleceu que as bibliotecas escolares poderiam ser substituídas por salas de leitura sem bibliotecário.\"* | **ERRADO** | Consultar o texto atualizado: em 2024, a definição foi ampliada, criou-se o SNBE e revogou-se a antiga regra do parágrafo único de um título por aluno. Permanece a observância da legislação profissional; não usar a redação inicial como se fosse a atual. |\n\n**Aplicação e recuperação:** A afirmação parece familiar, mas substitui Ciência da Informação por Biblioteconomia na definição de Borko. Verificar o sujeito e o alcance da definição permite identificar o erro sem recorrer a palavras absolutas como único sinal.",
    "checkpointIds": [
      "rt-1-1-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "lecoadic",
    "titulo": "Yves-François Le Coadic — A ciência da informação",
    "localizador": "PDF do projeto, cap. 2, pp. 14–15: acervos, biblioteca organizada e leitores; não presumir uma taxonomia binária literal.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Livros%20Extras/Livro%20-%20A%20ci%C3%AAncia%20da%20Informa%C3%A7%C3%A3o%20-%20LeCoadic.pdf"
  },
  {
    "id": "borko",
    "titulo": "Harold Borko — Information Science: What is it? (1968)",
    "localizador": "American Documentation 19(1), 3–5; definição e relação entre aspectos puros/aplicados.",
    "url": "https://doi.org/10.1002/asi.5090190103"
  },
  {
    "id": "buckland",
    "titulo": "Michael Buckland — Informação como coisa (1991)",
    "localizador": "Tradução presente no acervo; distinguir indício e informação, sem atribuir lista editorial de critérios literalmente a Briet.",
    "url": "https://github.com/Heuller/hnc/tree/auditoria-2026-10/acervo-estudos"
  },
  {
    "id": "manifesto",
    "titulo": "IFLA/UNESCO — Public Library Manifesto 2022",
    "localizador": "Missão, igualdade de acesso e gratuidade em princípio.",
    "url": "https://www.ifla.org/g/public-libraries/public-library-manifesto/"
  },
  {
    "id": "escolar",
    "titulo": "Lei 12.244/2010 — texto atualizado",
    "localizador": "Redação da Lei 14.837/2024: definição de biblioteca escolar, SNBE e legislação profissional.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/2010/lei-12244-24-maio-2010-606412-normaatualizada-pl.html"
  },
  {
    "id": "cbl",
    "titulo": "CBL — Agência Brasileira do ISBN",
    "localizador": "Responsabilidade desde março de 2020; não confundir com depósito legal.",
    "url": "https://www.cbl.org.br/plataforma_de_servic/isbn/"
  },
  {
    "id": "cdu",
    "titulo": "IBICT — CDU",
    "localizador": "Transição da gestão internacional ao UDC Consortium em 1992.",
    "url": "https://cdu.ibict.br/"
  },
  {
    "id": "digital",
    "titulo": "IFLA — UNESCO endorses the Manifesto for Digital Libraries",
    "localizador": "Chancela na Conferência Geral da UNESCO em 2011; distinguir elaboração e adoção.",
    "url": "https://www.ifla.org/news/unesco-endorses-the-ifla-manifesto-for-digital-libraries/"
  }
],
};
