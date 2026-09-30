import type { MacroModulo } from './types';

export const moduloFundamentos: MacroModulo = {
  id: 'fundamentos',
  slug: 'fundamentos',
  titulo: 'Bloco A: Fundamentos da Biblioteconomia, Documentação e Ciência da Informação',
  subtitulo: 'A base epistemológica, histórica, normativa e ética indispensável para a Câmara dos Deputados',
  descricao: 'Estudo aprofundado dos objetos de estudo, fronteiras disciplinares, Leis de Ranganathan e releituras contemporâneas, ontologia documental (Buckland, Briet e Otlet) e arcabouço normativo da profissão com Código de Ética do CFB.',
  icone: 'BookOpen',
  corTema: 'amber',
  modulosFilhos: [
    {
      id: 'sub-1-1',
      numero: '1.1',
      titulo: 'Biblioteconomia, Documentação e Ciência da Informação: objeto, fronteiras e evolução histórica',
      descricaoCurta: 'Gênese disciplinar, Paul Otlet e o Tratado de Documentação, Harold Borko e a emergência da CI pós-guerra, interdisciplinaridade e as divisões de Le Coadic.',
      tempoEstimadoMinutos: 25,
      autoresChave: ['Paul Otlet', 'Henri La Fontaine', 'Harold Borko', 'Yves-François Le Coadic', 'Tefko Saracevic', 'Vannevar Bush'],
      alertasCebraspe: [
        'O Cebraspe frequentemente atribui a definição canônica de Ciência da Informação de Harold Borko (1968) à Biblioteconomia para induzir o candidato ao erro.',
        'Atenção à divisão de Le Coadic: a "Biblioteconomia dos livros" cuida da gestão física/técnica do acervo, enquanto a "Biblioteconomia dos leitores" foca nas necessidades, uso e mediação humana.',
        'A Documentação não substituiu a Biblioteconomia; ela expandiu o universo documental para qualquer suporte informacional e antecipou as técnicas de recuperação da informação.'
      ],
      quadroComparativo: {
        titulo: 'Matriz Comparativa das Três Disciplinas da Informação',
        colunas: ['Critério', 'Biblioteconomia Tradicional', 'Documentação (Otlet & Briet)', 'Ciência da Informação (Borko & Saracevic)'],
        linhas: [
          ['Surgimento / Marco', 'Antiguidade (Alexandria) / Consolidação no séc. XIX', 'Fim do séc. XIX (1895: IIB; 1934: Tratado de Otlet)', 'Pós-Segunda Guerra Mundial (décadas de 1950-1960; Borko 1968)'],
          ['Objeto Central', 'O livro, coleções impressas e a instituição biblioteca', 'O documento em qualquer suporte material e o princípio monográfico', 'A informação em si: propriedades, comportamento, fluxos e transferência'],
          ['Enfoque Principal', 'Custódia, organização técnica e preservação do acervo', 'Disseminação ativa da pesquisa científica e acesso universal', 'Investigação científica teórica e sistemas tecnológicos de recuperação (IR)'],
          ['Público-Alvo', 'Comunidade geral e leitores da instituição', 'Pesquisadores especializados e cientistas', 'Usuários de sistemas de informação complexos e redes globais']
        ]
      },
      teoriaDensaMarkdown: `### 1. A Trajetória Histórica e Rupturas Epistemológicas

A evolução da gestão social do conhecimento registrado é marcada por três grandes momentos epistemológicos que o Cebraspe explora com rigor cirúrgico: **a Biblioteconomia**, **a Documentação** e **a Ciência da Informação**.

#### A. A Biblioteconomia: Da Guarda Patrimonial à Função Social
Historicamente, a biblioteconomia nasceu vinculada à **instituição biblioteca** e à conservação física dos suportes textuais (rolos de papiro, códices medievais e livros impressos pós-Gutenberg). 
* Durante séculos predominou o **paradigma patrimonialista** (guardar para preservar).
* A partir do final do século XIX e início do século XX, com o avanço da educação pública e as formulações de teóricos como Melvil Dewey e S. R. Ranganathan, a biblioteconomia assume o **paradigma social e educacional**: a biblioteca como agente democrático de mediação entre o leitor e o conhecimento.
* **A visão de Yves-François Le Coadic (1996):** O teórico francês divide a área em duas dimensões complementares:
  1. *Biblioteconomia dos Livros:* Ocupa-se da organização administrativa, técnica, orçamentária e física dos acervos.
  2. *Biblioteconomia dos Leitores:* Centrada no usuário, nas práticas de leitura, nos serviços de referência e na mediação sociocultural. *(Alerta de Prova: o Cebraspe adora trocar essas duas definições!)*.

---

#### B. A Documentação e a Revolução de Paul Otlet
No final do século XIX, a explosão das publicações periódicas e relatórios científicos internacionais tornou os métodos bibliotecários tradicionais insuficientes para atender à velocidade exigida pelos cientistas.
* **Paul Otlet e Henri La Fontaine (1895):** Criam em Bruxelas o Instituto Internacional de Bibliografia (IIB) e concebem o ambicioso projeto do *Mundaneum* e do *Repertório Bibliográfico Universal (RBU)*.
* **O Tratado de Documentação (1934):** Obra máxima de Otlet (presente em nosso acervo na pasta \`Fundamentos/003043331.pdf\`). Otlet cunha o termo **Documentação** e estabelece o **Princípio Monográfico** (desmembrar o conteúdo das publicações em fichas analíticas padronizadas para recombinar o saber).
* **A ampliação do suporte:** Para Otlet e, posteriormente, Suzanne Briet (1951), documento deixa de ser sinônimo estrito de livro em papel e passa a abranger fotografias, mapas, esquemas gráficos, patentes, microfichas e registros sonoros.

---

#### C. A Emergência da Ciência da Informação
No contexto da Guerra Fria e da explosão informacional (*information explosion*) do pós-guerra:
* **Vannevar Bush (1945):** Publica o ensaio visionário *"As We May Think"*, propondo o *Memex* (dispositivo conceitual eletromecânico para armazenamento e associação hipertextual de informações).
* **Calvin Mooers (1950):** Cunhou o termo **Recuperação da Informação** (*Information Retrieval*), que se tornou um dos pilares estruturantes da nova ciência.
* **Harold Borko (1968) - O Conceito Canônico:** No artigo histórico *"Information Science: What is it?"*, Borko define:
  > *"A Ciência da Informação é a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam o seu fluxo e os meios de processamento para otimizar a sua acessibilidade e uso. Ela se ocupa daquele corpo de conhecimentos relativos à origem, coleta, organização, armazenamento, recuperação, interpretação, transmissão, transformação e utilização da informação."*

---

### 2. Interdisciplinaridade e Fronteiras Disciplinares
A Ciência da Informação não substituiu nem extinguiu a Biblioteconomia. Conforme demonstrado por Tefko Saracevic (1995) e Lena Vânia Pinheiro (1995):
* A Ciência da Informação é intrinsecamente **interdisciplinar**: conecta-se à Ciência da Computação, Linguística, Semiótica, Comunicação, Psicologia Cognitiva, Lógica e Administração.
* Enquanto a Biblioteconomia se foca primordialmente nas práticas e serviços de unidades de informação e bibliotecas, a Ciência da Informação possui um escopo teórico mais abrangente voltado aos fenômenos informacionais em sistemas sociais e tecnológicos complexos.`,
      resumoEsquematizadoMarkdown: `### 📌 Mnemônicos e Esquemas Rápidos: Submódulo 1.1

\`\`\`
[Séc. XIX: Biblioteconomia] ──> Foco: Acervo, Livro, Instituição Biblioteca
          │
[1895/1934: Documentação]  ──> Foco: Paul Otlet, Princípio Monográfico, Qualquer Suporte
          │
[1945/1968: C. Informação] ──> Foco: Borko (Propriedades/Fluxo), Bush (Memex), Saracevic
\`\`\`

* **Autores e Ideias-Chave:**
  * **Harold Borko (1968):** Propriedades, comportamento e fluxos da informação *(memorize: é CI, não Biblioteconomia!)*.
  * **Paul Otlet (1934):** Pai da documentação, Tratado de Documentação, CDU com La Fontaine.
  * **Suzanne Briet (1951):** O documento como indício físico em suporte material (o "antílope vivo").
  * **Yves-François Le Coadic (1996):** Biblioteconomia dos Livros (técnica/gestão) vs Biblioteconomia dos Leitores (uso/usuário).
  * **Vannevar Bush (1945):** Ensaio *As We May Think*, idealizador do conceito do *Memex*.
  * **Calvin Mooers (1950):** Criador da expressão *Information Retrieval* (Recuperação da Informação).`
    },
    {
      id: 'sub-1-2',
      numero: '1.2',
      titulo: 'As Cinco Leis de Ranganathan e Releituras Contemporâneas',
      descricaoCurta: 'O tratado de Shiyali Ramamrita Ranganathan (1931), análise sistêmica de cada lei, implicações em bibliotecas legislativas e as formulações de Michael Gorman, Jim Thompson e Rettig.',
      tempoEstimadoMinutos: 30,
      autoresChave: ['Shiyali Ramamrita Ranganathan', 'Michael Gorman', 'James Rettig', 'Jim Thompson', 'Alire'],
      alertasCebraspe: [
        'A 1ª Lei ("Livros são para usar") ataca a preservação estéril e exige políticas ativas de circulação, localização acessível e horários estendidos.',
        'Atenção à 2ª Lei ("A cada leitor o seu livro") vs 3ª Lei ("A cada livro o seu leitor"): a 2ª parte do usuário e exige democratização/inclusão; a 3ª parte do item documental e exige técnicas de divulgação, estantes abertas e catalogação analítica.',
        'A 4ª Lei ("Poupe o tempo do leitor") fundamenta a eficiência dos sistemas de busca, indexação precisa, sinalização predial e automação.',
        'A 5ª Lei ("A biblioteca é um organismo em crescimento") rege o planejamento dinâmico do espaço físico, tecnológico, orçamentário e de pessoal.'
      ],
      quadroComparativo: {
        titulo: 'Quadro Analítico das Cinco Leis e Releituras na Era Digital',
        colunas: ['Lei Clássica (Ranganathan, 1931)', 'Foco Primário', 'Releitura Contemporânea (Gorman, 1995)', 'Impacto na Câmara dos Deputados'],
        linhas: [
          ['1ª: Os livros são para usar', 'Acesso e Usabilidade', 'As bibliotecas servem à humanidade em todas as mídias', 'Garantir que a documentação legislativa e doutrinária esteja imediatamente utilizável pelos parlamentares'],
          ['2ª: A todo leitor seu livro', 'Democratização / Usuário', 'Respeite todas as formas pelas quais o conhecimento é comunicado', 'Atendimento personalizado aos assessores, comissões temáticas e cidadãos'],
          ['3ª: A todo livro seu leitor', 'Disseminação / Documento', 'Use a tecnologia de modo inteligente para aprimorar o serviço', 'DSI (Disseminação Seletiva de Informações), portais temáticos e visibilidade da produção parlamentar'],
          ['4ª: Poupe o tempo do leitor', 'Velocidade e Eficiência', 'Proteja o livre acesso ao conhecimento em tempo hábil', 'Bases de busca ultrarrápidas, tesauros legislativos consolidados e recuperação sem ruído'],
          ['5ª: A biblioteca é um organismo em crescimento', 'Adaptação e Futuro', 'Honre o passado e crie o futuro continuamente', 'Expansão constante para repositórios digitais, IA aplicada e preservação digital contínua']
        ]
      },
      teoriaDensaMarkdown: `### 1. A Filosofia das Cinco Leis de Shiyali Ramamrita Ranganathan (1931)

Publicada em 1931, a obra *The Five Laws of Library Science* (disponível integralmente em nosso repositório \`Fundamentos/pdf-as-cinco-leis-da-biblioteconomi-ranganathanpdf_compress.pdf\`) é a mais perfeita e duradoura síntese normativa da história da Biblioteconomia. Ranganathan, matemático indiano e bibliotecário, estruturou uma teoria axiológica dedutiva:

#### 1ª Lei: Os livros são para usar (*Books are for use*)
* **Ruptura de Paradigma:** Rompe violentamente com o antigo modelo medieval e patrimonialista onde o livro ficava acorrentado e a conservação era o fim supremo.
* **Diretriz Prática:** O objetivo último de uma unidade de informação é o **uso**. A preservação existe para viabilizar o uso futuro, e não para obstruir o acesso.
* **Desdobramentos:** Localização geográfica da biblioteca, horários ampliados de funcionamento, mobiliário confortável, iluminação adequada e simplificação das regras de empréstimo.

#### 2ª Lei: A todo leitor seu livro (*Every reader his or her book*)
* **Foco no Usuário e Inclusão Social:** Toda pessoa tem direito ao acesso ao conhecimento registrado, sem distinção de classe, raça, credo ou condição física.
* **Obrigações:**
  1. *Do Estado:* Financiar bibliotecas públicas e legislativas mantendo acervos representativos.
  2. *Do Bibliotecário:* Conhecer a fundo a comunidade de usuários e praticar a mediação ativa.
  3. *Do Leitor:* Respeitar o patrimônio comum.

#### 3ª Lei: A todo livro seu leitor (*Every book its reader*)
* **Foco no Documento:** Para cada item existente no acervo existe um público em potencial. A tarefa é dar visibilidade a ele para que encontre seu destinatário.
* **Mecanismos de Concretização:** Sistema de **livre acesso às estantes** (*open shelves*), arranjo temático intuitivo, catalogação de títulos e assuntos pormenorizada, exposições bibliográficas e serviços de **Disseminação Seletiva da Informação (DSI)**.

#### 4ª Lei: Poupe o tempo do leitor (*Save the time of the reader*)
* **Eficiência e Produtividade:** O tempo do usuário é um recurso escasso e valioso.
* **Mecanismos:** Catálogos rápidos, sistemas de indexação precisos que evitem revocação excessiva ou silêncio documental, processos ágeis de referência, sinalização predial clara e automação dos fluxos de trabalho.

#### 5ª Lei: A biblioteca é um organismo em crescimento (*A library is a growing organism*)
* **Natureza Biológica da Instituição:** A biblioteca nunca atinge um estado estático; ela cresce em tamanho material (acervo), em usuários, em pessoal e em complexidade tecnológica.
* **Requisitos:** Planejamento flexível da infraestrutura física, desbaste (*weeding*) e descarte criterioso para manter o acervo vitalizado, migração tecnológica e contínua capacitação dos recursos humanos.

---

### 2. As Releituras Contemporâneas para a Era Digital
O Cebraspe tem cobrado com muita frequência como as leis foram reinterpretadas por teóricos modernos:

* **Michael Gorman (1995) — *Our Singular Strengths*:**
  1. *As bibliotecas servem à humanidade.*
  2. *Respeite todas as formas pelas quais o conhecimento é comunicado.*
  3. *Use a tecnologia inteligentemente para enriquecer os serviços.*
  4. *Proteja o livre acesso ao conhecimento.*
  5. *Honre o passado e crie o futuro.*
* **James Rettig e Jim Thompson:** Adaptaram os preceitos substituindo o termo *livro* por *informação* e *leitor* por *usuário*:
  1. A informação é para ser utilizada.
  2. A cada usuário sua informação.
  3. A cada informação seu usuário.
  4. Poupe o tempo do usuário e da equipe técnica.
  5. Os sistemas de informação são organismos dinâmicos em constante mutação.`,
      resumoEsquematizadoMarkdown: `### 📌 Mnemônicos e Esquemas Rápidos: Submódulo 1.2

\`\`\`
1ª LEI: USO        ──> Rompe com a preservação pura. Livro existe para circular.
2ª LEI: USUÁRIO    ──> "A cada leitor..." Democratização, inclusão, acervo plural.
3ª LEI: DOCUMENTO  ──> "A cada livro..." Estante aberta, divulgação, catalogação analítica.
4ª LEI: TEMPO      ──> Eficiência na busca, DSI, recuperação veloz, sinalização.
5ª LEI: ORGANISMO  ──> Crescimento vivo, desbaste, expansão predial e tecnológica.
\`\`\`

* **Armadilha Frequente Cebraspe:**
  * O Cebraspe troca o sujeito da 2ª Lei ("usuário") pelo da 3ª Lei ("livro").
  * Exemplo de prova: *"Afirmar que a 2ª Lei preconiza a técnica de estantes abertas para que o documento encontre interessados."* -> **ERRADO!** Esse é o cerne da **3ª Lei**.`
    },
    {
      id: 'sub-1-3',
      numero: '1.3',
      titulo: 'Conceitos de Informação, Conhecimento e Documento: Ontologia e Dimensões',
      descricaoCurta: 'A pirâmide informacional (Dado, Informação, Conhecimento, Sabedoria), Michael Buckland e a Informação como Coisa, o conceito de documento segundo Briet, Mey e Le Coadic.',
      tempoEstimadoMinutos: 25,
      autoresChave: ['Michael Buckland', 'Suzanne Briet', 'Eliane Mey', 'Russell Ackoff', 'Claude Shannon'],
      alertasCebraspe: [
        'Michael Buckland classifica a informação em: (1) Informação como Processo; (2) Informação como Conhecimento; (3) Informação como Coisa. O Cebraspe tenta restringir "informação como coisa" a papéis e livros, quando abrange QUALQUER entidade tangível (incluindo fósseis, esculturas, gravações).',
        'Suzanne Briet definiu documento a partir de quatro condições necessárias: materialidade, intencionalidade, tratamento e capacidade de servir de prova/indício.',
        'Dado é um registro bruto desprovido de contexto; Informação é o dado dotado de significado e relevância; Conhecimento é a apropriação cognitiva pelo ser humano.'
      ],
      quadroComparativo: {
        titulo: 'A Tríade de Michael Buckland (1991): Information as Thing',
        colunas: ['Dimensão de Buckland', 'Natureza Ontológica', 'Características', 'Exemplo Prático na Câmara'],
        linhas: [
          ['1. Informação-como-processo', 'Intangível / Ação', 'O ato de informar; a mudança de estado cognitivo de quem recebe uma mensagem', 'O assessor legislativo lendo uma nota técnica e assimilando seus argumentos'],
          ['2. Informação-como-conhecimento', 'Intangível / Cognitivo', 'Aquilo que é apreendido; crença justificada incorporada à estrutura mental do sujeito', 'O saber acumulado pelo analista legislativo sobre o regimento interno'],
          ['3. Informação-como-coisa', 'Tangível / Físico / Digital', 'Dados, registros, textos, suportes materiais que podem ser processados em sistemas', 'O arquivo em PDF do Diário da Câmara, um livro impresso ou um áudio de audiência pública']
        ]
      },
      teoriaDensaMarkdown: `### 1. A Hierarquia Conceitual: Dado, Informação e Conhecimento

A Ciência da Informação estabelece distinções fundamentais na cadeia ontológica:

1. **Dado (*Data*):** Elemento quantitativo ou qualitativo isolado, registro bruto, sem contexto ou valor semântico intrínseco (ex.: o número \`2026\`).
2. **Informação (*Information*):** Conjunto estruturado e contextualizado de dados que possui significado, transmitindo uma mensagem e reduzindo a incerteza no receptor (ex.: \`Ano de realização do concurso da Câmara dos Deputados: 2026\`).
3. **Conhecimento (*Knowledge*):** Informação internalizada, interpretada, confrontada com experiências prévias e compreendida pelo intelecto humano (estruturas mentais cognitivas).
4. **Sabedoria (*Wisdom*):** O uso ético e prudente do conhecimento acumulado para a tomada de decisões estratégicas em sociedade.

---

### 2. A Teoria da Informação de Michael Buckland (1991)
No clássico ensaio *"Information as Thing"* (disponível em \`Fundamentos/Informacao como Coisa (thing).pdf\`), Michael Buckland desmistifica o uso polissêmico da palavra "informação", categorizando-a em três noções fundamentais:

* **Informação como Processo (*Information-as-process*):** Refere-se à dinâmica comunicativa, ao ato de informar e ser informado. É uma experiência psicológica subjetiva e intangível.
* **Informação como Conhecimento (*Information-as-knowledge*):** Refere-se àquilo que foi compreendido e retido. Reduz a incerteza, mas também é intangível e reside exclusivamente na mente humana.
* **Informação como Coisa (*Information-as-thing*):** É a única dimensão que pode ser armazenada, catalogada, transferida, duplicada e recuperada por **sistemas de informação**. Abrange:
  * Textos, números, imagens e sons.
  * Artefatos materiais, espécimes biológicos e fósseis em museus.
  * Objetos físicos que contêm evidências informativas (o chamado documento tridimensional).

*(Ponto Crítico Cebraspe: A banca adora afirmar que objetos tridimensionais ou artefatos não são considerados "informação-como-coisa". Isso é FALSO!)*.

---

### 3. O Conceito Canônico de Documento
Para que um objeto seja caracterizado como **Documento**, a tradição que une Paul Otlet, Suzanne Briet (1951) e Eliane Mey estabelece quatro atributos essenciais:

1. **Materialidade (Suporte Físico ou Eletrônico):** Deve haver um suporte físico tangível ou suporte de dados magnético/digital registrando signos.
2. **Intencionalidade:** O objeto foi produzido, coletado ou selecionado com o propósito deliberado de comunicar ou preservar um registro.
3. **Tratamento Documentário:** O objeto foi inserido em um sistema ou coleção (catalogado, indexado, conservado).
4. **Valor Probatório / Evidencial:** O objeto funciona como indício, testemunho ou prova de um fato perante uma comunidade social.
* **O Antílope de Suzanne Briet:** Um antílope correndo livre na savana africana não é um documento; porém, quando capturado, descrito por zoólogos, exposto em um jardim zoológico e classificado em uma ficha taxonômica, transforma-se em documento!`,
      resumoEsquematizadoMarkdown: `### 📌 Mnemônicos e Esquemas Rápidos: Submódulo 1.3

\`\`\`
DADO         ──> Registro bruto, desprovido de contexto (ex: "4.084").
INFORMACAO   ──> Dado dotado de significado (ex: "Lei 4.084 regula a profissão").
CONHECIMENTO ──> Apropriação humana ativa / compreensão cognitiva internalizada.
\`\`\`

* **Buckland em 3 Palavras:**
  1. *Processo:* Ato de comunicar (intangível).
  2. *Conhecimento:* Significado interiorizado (intangível).
  3. *Coisa:* Registros físicos/digitais operáveis em sistemas (TANGÍVEL).

* **Requisitos do Documento (Suzanne Briet):**
  * Materialidade + Intencionalidade + Processamento + Valor Probatório.`
    },
    {
      id: 'sub-1-4',
      numero: '1.4',
      titulo: 'Profissão: Legislação Federal, Código de Ética do CFB e Atribuições Privativas',
      descricaoCurta: 'A Lei Federal nº 4.084/1962, o Decreto regulamentador nº 56.725/1965, a estrutura CFB/CRB, o Código de Ética Profissional do Bibliotecário (Resolução CFB) e as infrações disciplinares.',
      tempoEstimadoMinutos: 25,
      autoresChave: ['Conselho Federal de Biblioteconomia (CFB)', 'Lei 4.084/1962', 'Decreto 56.725/1965', 'Conselhos Regionais (CRB)'],
      alertasCebraspe: [
        'A Lei 4.084/1962 estipula atividades PRIVATIVAS de bacharéis em biblioteconomia (planejamento, organização e direção de serviços de bibliotecas; classificação e catalogação; ensino de disciplinas de biblioteconomia). Não confunda atribuições privativas com atividades concorrentes!',
        'No Código de Ética do CFB, memorize a distinção entre DEVERES (zelo, aprimoramento, denúncia de exercício ilegal) e PROIBIÇÕES (assinar trabalhos não executados, praticar concorrência desleal, reter documentação alheia).',
        'Penalidades disciplinares: Advertência confidencial, Censura confidencial, Censura pública, Multa, Suspensão do exercício profissional (até 3 anos) e Cassação do registro (pelo CFB).'
      ],
      quadroComparativo: {
        titulo: 'Regime Disciplinar e Ético da Profissão de Bibliotecário',
        colunas: ['Esfera Normativa', 'Dispositivo / Órgão Competente', 'Principais Atribuições / Diretrizes', 'Sanções Previstas'],
        linhas: [
          ['Regulamentação Legal', 'Lei Federal nº 4.084/1962 e Dec. 56.725/1965', 'Exercício condicionado a diploma reconhecido e registro ativo no CRB da jurisdição', 'Exercício ilegal tipificado na Lei de Contravenções Penais'],
          ['Atribuições Privativas', 'Art. 6º da Lei 4.084/1962', 'Organização e direção de bibliotecas; catalogação e classificação de documentos; perícias documentais', 'Nulidade dos atos praticados por leigos'],
          ['Deveres Éticos', 'Código de Ética do CFB (Art. 3º)', 'Guardar sigilo profissional; zelar pela reputação da classe; denunciar o exercício clandestino', 'Fiscalização direta pelos CRBs'],
          ['Proibições Éticas', 'Código de Ética do CFB (Art. 4º)', 'Assinar laudos ou fichas catalográficas elaboradas por terceiros leigos; reter documentos', 'Advertência, Censura, Multa, Suspensão e Cassação']
        ]
      },
      teoriaDensaMarkdown: `### 1. O Marco Legal da Profissão no Brasil

O exercício da profissão de bibliotecário no território nacional é rigorosamente regulado por diplomas legais federais:

* **Lei Federal nº 4.084, de 30 de junho de 1962:**
  * Dispõe sobre a profissão de bibliotecário e regula o seu exercício.
  * O exercício da profissão em qualquer de seus ramos é privativo dos bacharéis em Biblioteconomia por escolas oficiais ou reconhecidas, portadores de carteira de identidade profissional expedida pelo respectivo Conselho Regional de Biblioteconomia (CRB).
* **Decreto nº 56.725, de 16 de agosto de 1965:**
  * Regulamenta a Lei 4.084/62 e detalha a estrutura dos órgãos fiscalizadores.
* **Estrutura CFB / CRB:**
  * **CFB (Conselho Federal de Biblioteconomia):** Órgão superior com sede em Brasília, responsável por normatizar, julgar em grau de recurso, expedir resoluções e aprovar o Código de Ética.
  * **CRBs (Conselhos Regionais de Biblioteconomia):** Autarquias fiscalizadoras nos âmbitos regionais estaduais/distritais, responsáveis pelo registro, fiscalização e aplicação inicial de sanções.

---

### 2. Atribuições Privativas (Art. 6º da Lei 4.084/62)
São privativas dos bacharéis em Biblioteconomia as seguintes funções:
1. Planejamento, organização, direção e execução dos serviços técnicos de bibliotecas e centros de documentação.
2. Planejamento e execução dos serviços de catalogação e classificação de documentos.
3. Organização e direção de serviços de bibliografia e documentação.
4. Ensino de disciplinas específicas de Biblioteconomia nos cursos de graduação e pós-graduação.
5. Realização de perícias documentais e emissão de laudos técnicos pertinentes.

---

### 3. Código de Ética Profissional do Bibliotecário (Resolução CFB)
O Código de Ética fixa os padrões de conduta que orientam o relacionamento do bibliotecário com os usuários, a sociedade, a profissão e os órgãos de classe.

#### Deveres Fundamentais (Art. 3º):
* Desempenhar suas atividades com zelo, dedicação, dignidade e decoro.
* Guardar **sigilo profissional** sobre dados ou fatos conhecidos em razão do ofício (essencial para quem atua em gabinetes parlamentares e comissões da Câmara!).
* Manter constante aprimoramento cultural e profissional.
* Tratar os usuários com equidade, sem discriminação de qualquer natureza.
* Denunciar tempestivamente às autoridades competentes qualquer prática de exercício ilegal da profissão.

#### Proibições Expressas (Art. 4º):
* Praticar atos que desabonem a classe ou concorram para o descrédito da profissão.
* Assinar ou referendar trabalhos, catálogos, fichas ou laudos elaborados por indivíduos não habilitados perante a lei.
* Praticar concorrência desleal ou aviltamento de honorários.
* Reter abusivamente documentos ou bens confiados à sua guarda.

#### Escala de Penalidades Disciplinares:
1. Advertência confidencial (aplicada pelo CRB).
2. Censura confidencial.
3. Censura pública (divulgada no Diário Oficial e mural do conselho).
4. Multa.
5. Suspensão do exercício profissional (por prazo de até 3 anos).
6. Cassação do registro profissional (sanção extrema de competência privativa do CFB).`,
      resumoEsquematizadoMarkdown: `### 📌 Mnemônicos e Esquemas Rápidos: Submódulo 1.4

\`\`\`
LEI 4.084/62 ──> Regula a profissão. Privativa de Bacharel registrado no CRB.
CFB          ──> Órgão superior em Brasília. Edita Código de Ética e cassa registro.
CRB          ──> Órgão fiscalizador regional. Registra e fiscaliza no dia a dia.
\`\`\`

* **Atribuições Privativas Chave:**
  * Direção e organização técnica de bibliotecas.
  * Catalogação e Classificação de documentos.
  * Ensino de disciplinas de biblioteconomia.
  * Emissão de laudos periciais sobre acervos.

* **Penalidades Disciplinares em Ordem de Gravidade:**
  \`Advertência -> Censura Confidencial -> Censura Pública -> Multa -> Suspensão (até 3 anos) -> Cassação (só CFB)\`.`
    }
  ]
};
