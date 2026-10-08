import type { ModuloFilho } from '../../../domain/types';

export const submodulo11: ModuloFilho = {
  id: 'sub-1-1',
  numero: '1.1',
  titulo: 'Biblioteconomia, Documentação e Ciência da Informação: objeto, fronteiras e evolução histórica',
  titulo_curto: 'Biblioteconomia, Documentação e CI',
  descricaoCurta: 'Gênese disciplinar, Paul Otlet e o Tratado de Documentação, Harold Borko e a emergência da CI pós-guerra, interdisciplinaridade e as divisões de Le Coadic.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Paul Otlet', 'Henri La Fontaine', 'Harold Borko', 'Yves-François Le Coadic', 'Tefko Saracevic', 'Vannevar Bush'],
  alertasCebraspe: [
    'O Cebraspe frequentemente atribui a definição canônica de Ciência da Informação de Harold Borko (1968) à Biblioteconomia para induzir o candidato ao erro.',
    'Atenção à divisão de Le Coadic: a "Biblioteconomia dos livros" cuida da gestão física/técnica do acervo, enquanto a "Biblioteconomia dos leitores" foca nas necessidades, uso e mediação humana.',
    'A Documentação não substituiu a Biblioteconomia; ela expandiu o universo documental para qualquer suporte informacional e antecipou as técnicas de recuperação da informação.',
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
No manifesto seminal *Qu'est-ce que la documentation?* (1951), a bibliotecária e documentalista francesa **Suzanne Briet** formulou a mais influente definição de documento da área:
> *"Documento é todo indício material, conservado ou registrado, com a finalidade de representar, reconstituir ou provar um fenômeno físico ou intelectual."*

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
  * Borko formulou a definição canônica mais cobrada em concursos públicos federais:
  > *"A Ciência da Informação é a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam o seu fluxo e os meios de processamento para otimizar a sua acessibilidade e uso. Ela se ocupa daquele corpo de conhecimentos relativos à origem, coleta, organização, armazenamento, recuperação, interpretação, transmissão, transformação e utilização da informação. Possui uma componente de ciência pura (que investiga o assunto sem relação com a aplicação imediata) e uma componente de ciência aplicada (que desenvolve serviços e produtos)."*

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

### 7. Quadro de Distratores Típicos do Cebraspe em Fundamentos

| Afirmação Típica da Banca | Diagnóstico | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"A Ciência da Informação surgiu na Antiguidade clássica em Alexandria com o objetivo de guardar o livro impresso."* | **ERRADO** | Confunde CI com Biblioteconomia antiga. A CI surgiu na metade do séc. XX (pós-Segunda Guerra). |
| *"Harold Borko definiu a Biblioteconomia como a ciência que investiga as propriedades e fluxos da informação."* | **ERRADO** | A definição canônica de Borko (1968) é de **Ciência da Informação**, e não de Biblioteconomia. |
| *"O Princípio Monográfico de Paul Otlet propunha manter o livro encadernado intacto como unidade indivisível de conhecimento."* | **ERRADO** | O Princípio Monográfico propunha justamente o oposto: **desmembrar** o livro em fichas móveis analíticas. |
| *"Suzanne Briet excluiu categoricamente do conceito de documento qualquer entidade que não fosse suporte em papel."* | **ERRADO** | Briet ampliou radicalmente o conceito de documento para qualquer objeto físico/natural que sirva de prova (o antílope). |
| *"A Lei Federal nº 12.244/2010 estabeleceu que as bibliotecas escolares poderiam ser substituídas por salas de leitura sem bibliotecário."* | **ERRADO** | A Lei 12.244/2010 determinou a obrigatoriedade de biblioteca com acervo mínimo e presença de bibliotecário habilitado. |`,
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
      pergunta: "Micro-Checkpoint 3: Conceito de Documento em Suzanne Briet",
      item: "Para Suzanne Briet, qualquer objeto material, natural ou cultural, pode ser considerado documento, desde que colocado sob observação ou tratamento informacional com a finalidade de servir como prova ou testemunho.",
      gabarito: 'C',
      justificativa: "Certo! No manifesto canônico 'Qu'est-ce que la documentation?' (1951), Briet afirma que até mesmo um antílope em seu habitat selvagem não é documento, mas, uma vez capturado, classificado e exposto em um zoológico com ficha descritiva, torna-se documento primário.",
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
        nome: 'Vannevar Bush',
        ano: 1945,
        obraPrincipal: 'As We May Think',
        ideiaChave: 'Idealizador do conceito do Memex e trilhas associativas precursoras do hipertexto.',
        chipPegadinha: 'Dispositivo conceitual eletromecânico, não um computador digital operacional.',
      },
      {
        id: 'aut-1-1-6',
        nome: 'Calvin Mooers',
        ano: 1950,
        obraPrincipal: 'Information Retrieval',
        ideiaChave: 'Criador da expressão Recuperação da Informação (Information Retrieval).',
        chipPegadinha: 'Pilar fundacional da Ciência da Informação pós-guerra.',
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
        afirmacao: 'Segundo Le Coadic, a biblioteconomia dos livros compreende os estudos dedicados aos usuários e às suas práticas de leitura.',
        gabarito: 'E',
        porQue: 'A biblioteconomia dos livros foca na organização técnica e física do acervo; é a biblioteconomia dos leitores que cuida dos usuários.',
      },
    ],
  },
};
