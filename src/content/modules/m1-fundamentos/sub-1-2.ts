import type { ModuloFilho } from '../../../domain/types';

export const submodulo12: ModuloFilho = {
  id: 'sub-1-2',
  numero: '1.2',
  titulo: 'As Cinco Leis de Ranganathan e Releituras Contemporâneas',
  titulo_curto: 'Cinco Leis de Ranganathan',
  descricaoCurta: 'O tratado de Shiyali Ramamrita Ranganathan (1931), análise sistêmica de cada lei, implicações em bibliotecas legislativas e as formulações de Michael Gorman, Jim Thompson e Rettig.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Shiyali Ramamrita Ranganathan', 'Michael Gorman', 'James Rettig', 'Jim Thompson', 'Alire'],
  alertasCebraspe: [
    'A 1ª Lei ("Livros são para usar") ataca a preservação estéril e exige políticas ativas de circulação, localização acessível e horários estendidos.',
    'Atenção à 2ª Lei ("A cada leitor o seu livro") vs 3ª Lei ("A cada livro o seu leitor"): a 2ª parte do usuário e exige democratização/inclusão; a 3ª parte do item documental e exige técnicas de divulgação, estantes abertas e catalogação analítica.',
    'A 4ª Lei ("Poupe o tempo do leitor") fundamenta a eficiência dos sistemas de busca, indexação precisa, sinalização predial e automação.',
    'A 5ª Lei ("A biblioteca é um organismo em crescimento") rege o planejamento dinâmico do espaço físico, tecnológico, orçamentário e de pessoal.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Analítico das Cinco Leis e Releituras na Era Digital',
    colunas: ['Lei Clássica (Ranganathan, 1931)', 'Foco Primário', 'Releitura Contemporânea (Gorman, 1995)', 'Impacto na Câmara dos Deputados'],
    linhas: [
      ['1ª: Os livros são para usar', 'Acesso e Usabilidade', 'As bibliotecas servem à humanidade em todas as mídias', 'Garantir que a documentação legislativa e doutrinária esteja imediatamente utilizável pelos parlamentares'],
      ['2ª: A todo leitor seu livro', 'Democratização / Usuário', 'Respeite todas as formas pelas quais o conhecimento é comunicado', 'Atendimento personalizado aos assessores, comissões temáticas e cidadãos'],
      ['3ª: A todo livro seu leitor', 'Disseminação / Documento', 'Use a tecnologia de modo inteligente para aprimorar o serviço', 'DSI (Disseminação Seletiva de Informações), portais temáticos e visibilidade da produção parlamentar'],
      ['4ª: Poupe o tempo do leitor', 'Velocidade e Eficiência', 'Proteja o livre acesso ao conhecimento em tempo hábil', 'Bases de busca ultrarrápidas, tesauros legislativos consolidados e recuperação sem ruído'],
      ['5ª: A biblioteca é um organismo em crescimento', 'Adaptação e Futuro', 'Honre o passado e crie o futuro continuamente', 'Expansão constante para repositórios digitais, IA aplicada e preservação digital contínua'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Filosofia Axiomática das Cinco Leis de Shiyali Ramamrita Ranganathan (1931)
Publicada em 1931 na Índia, a obra *The Five Laws of Library Science* de **Shiyali Ramamrita Ranganathan** (matemático, filósofo e bibliotecário indiano) é considerada o mais perfeito modelo dedutivo normativo da Biblioteconomia. Ranganathan estruturou princípios axiológicos que regem o planejamento, a arquitetura predial, o processamento técnico e a interação humana em qualquer unidade de informação.

\`\`\`timeline
L1 | 1ª Lei: Os livros são para usar | Princípio de Acesso | Derrubada de barreiras físicas, burocracia e elitismo no acesso ao conhecimento
---> →
L2 | 2ª Lei: A cada leitor, seu livro | Princípio do Leitor | Foco na democratização — o sistema se organiza em torno da necessidade do usuário
---> →
L3 | 3ª Lei: A cada livro, seu leitor | Princípio do Documento | Disseminação ativa — o bibliotecário vai ao encontro do potencial leitor
---> →
L4 | 4ª Lei: Poupe o tempo do leitor | Princípio da Eficiência | Catálogos, automação, indexação e sinalização adequada para buscas rápidas
---> →
L5 | 5ª Lei: A biblioteca é um organismo em crescimento | Princípio da Adaptação | Desbaste, novos suportes, espaço flexível e evolução contínua dos serviços
\`\`\`

---

#### 1ª Lei: Os livros são para usar (*Books are for use*)
* **Ruptura de Paradigma:** Rompe com a tradição milenar da preservação restritiva e do colecionismo aristocrático, na qual o livro ficava acorrentado à mesa (*catenati*) ou guardado sob chaves para não se desgastar.
* **Preceito Teórico:** A preservação é meio, e não fim. Uma obra que não é lida nem consultada não cumpre sua função social.
* **Desdobramentos Práticos:**
  * Localização geográfica acessível do edifício da biblioteca no centro da comunidade;
  * Horários amplos de atendimento, inclusive noturnos e finais de semana;
  * Mobiliário confortável, ventilação e iluminação adequadas;
  * Políticas de empréstimo desburocratizadas e eliminação de cauções financeiras excludentes.

#### 2ª Lei: A cada leitor seu livro (*Every reader his or her book*)
* **Foco Central no SUJEITO / USUÁRIO:** Representa a democratização universal do acesso ao saber, antecipando o princípio dos Direitos Humanos.
* **Tríplice Responsabilidade:**
  1. **Do Estado / Poder Público:** Financiar e manter redes de bibliotecas públicas, escolares e parlamentares com dotação orçamentária perene.
  2. **Do Bibliotecário:** Conhecer profundamente sua comunidade real e potencial (estudos de usuários), selecionando materiais sem viés ideológico, religioso ou elitista.
  3. **Do Usuário / Cidadão:** Zelar pela integridade dos documentos públicos para que outros possam usufruí-los.

#### 3ª Lei: A cada livro seu leitor (*Every book its reader*)
* **Foco Central no DOCUMENTO / OBJETO BIBLIOGRÁFICO:** Todo item incorporado ao acervo possui um leitor em potencial no mundo; a missão do bibliotecário é torná-lo visível e encontrável.
* **Mecanismos de Concretização:**
  * **Livre Acesso às Estantes (*Open Access / Open Shelves*):** Permitir que o usuário circule livremente entre as estantes, possibilitando a descoberta fortuita por serenidade (*serendipity*);
  * **Catalogação e Indexação Analítica Exaustiva:** Elaboração de entradas secundárias para coordenadores, tradutores, títulos e múltiplos assuntos;
  * **Disseminação Seletiva da Informação (DSI):** Envio proativo de novas aquisições diretamente aos parlamentares e pesquisadores interessados;
  * Exposições bibliográficas, murais de lançamentos e boletins informativos.

#### 4ª Lei: Poupe o tempo do leitor (*Save the time of the reader*)
* **Foco na Eficiência Operacional e na Economia do Tempo:** O tempo do consulente é um recurso escasso e irreversível. Em ambientes de alta pressão decisória (como o plenário e comissões da Câmara dos Deputados), um atraso de minutos na recuperação de uma lei pode inviabilizar uma votação.
* **Mecanismos de Concretização:**
  * Arranjo lógico e intuitivo dos livros nas estantes por notação de classificação decimal;
  * Catálogos em linha (OPAC) ultrarrápidos, com busca facetada e termos padronizados;
  * Redução do ruído documental e do silêncio de busca mediante vocabulários controlados rigorosos;
  * Sinalização predial autoexplicativa;
  * Integração de serviços de referência rápida e comutação bibliográfica digital.
* **Desdobramento Interno:** A 4ª Lei também abrange *"poupar o tempo da equipe técnica"*, justificando a catalogação cooperativa em rede e a adoção de padrões internacionais (MARC 21, RDA, Z39.50) para evitar retrabalho.

#### 5ª Lei: A biblioteca é um organismo em crescimento (*A library is a growing organism*)
* **Foco na Natureza Dinâmica e Biológica da Unidade:** A biblioteca nunca alcança um estado estático e final. Ela cresce simultaneamente em acervo, usuários, quadro funcional, área física e complexidade de serviços.
* **Desdobramentos no Planejamento:**
  * O projeto arquitetônico deve prever expansão modular futura;
  * O crescimento físico contínuo exige políticas ativas de **Desbastamento (*Weeding*) e Descarte** para manter o acervo vitalizado e evitar colapso de espaço;
  * Adoção de suportes digitais, repositórios institucionais e computação em nuvem para absorver o crescimento exponencial sem demandar novos edifícios indefinidamente.

---

### 2. Releituras Modernas das Cinco Leis
Teóricos contemporâneos atualizaram a formulação de Ranganathan para abarcar a era digital, a Web e os repositórios eletrônicos:

* **Michael Gorman (1995) — *Our Singular Strengths: Five New Laws of Librarianship*:**
  1. *As bibliotecas servem à humanidade* (compromisso ético e universal);
  2. *Respeite todas as formas pelas quais o conhecimento é comunicado* (abrangência de todas as mídias e suportes);
  3. *Use a tecnologia de modo inteligente para aprimorar os serviços* (tecnologia como instrumento, nunca como fim em si mesma);
  4. *Proteja o livre acesso ao conhecimento* (combate à censura e barreiras proprietárias);
  5. *Honre o passado e crie o futuro* (preservação da memória histórica combinada à inovação contínua).
* **James Rettig (1992) e Jim Thompson (1999):** Realizaram a transposição terminológica direta:
  * Livros $\\rightarrow$ **Informação**;
  * Leitores $\\rightarrow$ **Usuários**;
  * Bibliotecas $\\rightarrow$ **Sistemas de Informação e Redes Digitais**.
* **Alire (2007) e Noruzi (2004 - Leis para a Web):**
  1. *Recursos da Web são para usar*;
  2. *A cada usuário seu recurso web*;
  3. *A cada recurso web seu usuário*;
  4. *Poupe o tempo do internauta*;
  5. *A Web é um organismo em crescimento exponencial*.

---

### 3. Estudos Métricos da Informação: As Leis Canônicas da Bibliometria
O edital da Câmara dos Deputados cobra com destaque os **Estudos Métricos da Informação** (Bibliometria, Cientometria, Informetria e Webometria). O CEBRASPE exige o conhecimento das leis empíricas, suas fórmulas matemáticas, curvas de distribuição e aplicações práticas na gestão de coleções:

| Lei Bibliométrica | Autor e Ano | Fenômeno Mensurado | Relação Matemática / Fórmula | Aplicação Prática na Biblioteca |
| :--- | :--- | :--- | :--- | :--- |
| **Lei de Bradford** | Samuel C. Bradford (1934) | **Dispersão da Literatura Periódica** em uma área do saber. | Relação geométrica entre zonas: $1 : n : n^2$. | Identificação do **núcleo de periódicos essenciais** (*core journals*) para assinaturas prioritárias. |
| **Lei de Lotka** | Alfred J. Lotka (1926) | **Produtividade dos Autores** científicos (Lei do Quadrado Inverso). | $A_n = \\frac{A_1}{n^2}$ (a proporção de autores com $n$ artigos é $1/n^2$ dos que publicam 1). | Mapeamento da elite de pesquisadores e concentração de autoria científica. |
| **Lei de Zipf** | George K. Zipf (1935) | **Frequência de Ocorrência de Palavras** em um texto. | $r \\times f = C$ (o produto do posto pela frequência é uma constante). | Indexação automática (H. P. Luhn), extração de termos e criação de *stop words*. |
| **Lei de Derek de Solla Price** | Derek de Solla Price (1963) | **Crescimento Exponencial da Ciência** e Obsolescência. | Crescimento logarítmico: a literatura científica dobra a cada 10 a 15 anos. | Políticas de descarte/desbastamento e cálculo da **meia-vida** (*half-life*) de citações. |
| **Teoria Epidêmica** | William Goffman (1966) | **Disseminação de Ideias e Informações** em redes de pesquisa. | Modelo matemático SIR (Suscetíveis, Infecciosos e Recuperados). | Análise do contágio informacional e surgimento de novos paradigmas científicos. |

#### A. Detalhamento da Lei de Bradford (1934)
Bradford investigou a publicação de artigos científicos sobre geofísica e lubrificação, descobrindo que, ao ordenar os periódicos em ordem decrescente de produtividade de artigos sobre um determinado tema:
* Pode-se dividir o conjunto total de artigos em zonas que contêm aproximadamente o **mesmo número de artigos**;
* O número de periódicos necessários para cobrir cada zona sucessiva cresce segundo uma proporção multiplicativa constante $n$:
  * **Zona 1 (Núcleo Central - *Core*):** Pequeno número de periódicos ($T_1$) altamente produtivos e especializados.
  * **Zona 2 (Periódicos de Assunto Correlato):** Exige $T_1 \\times n$ periódicos para produzir o mesmo número de artigos.
  * **Zona 3 (Periódicos Periféricos / Gerais):** Exige $T_1 \\times n^2$ periódicos para produzir a mesma quantidade.
* **Implicação para a Câmara dos Deputados:** Se o orçamento for reduzido, a biblioteca deve assinar exclusivamente os periódicos do **núcleo de Bradford**, obtendo o restante por comutação bibliográfica sob demanda.

#### B. Detalhamento da Lei de Lotka (1926)
Ao analisar o índice de resumos químicos (*Chemical Abstracts*) e de física, Lotka demonstrou a desigualdade extrema na produtividade acadêmica:
* O número de pesquisadores que publicam $n$ artigos em um dado campo é inversamente proporcional a $n^2$ em relação àqueles que publicam apenas um artigo ($A_n = A_1 / n^2$).
* **Exemplo Numérico:** Se 100 autores publicaram 1 artigo ($A_1 = 100$):
  * Autores que publicaram 2 artigos: $100 / 2^2 = 100 / 4 = 25$ autores;
  * Autores que publicaram 3 artigos: $100 / 3^2 = 100 / 9 \\approx 11$ autores;
  * Autores que publicaram 10 artigos: $100 / 10^2 = 100 / 100 = 1$ autor!
* Mais de 60% dos autores científicos de qualquer domínio publicam um único trabalho ao longo de toda a sua vida acadêmica.

#### C. Detalhamento da Lei de Zipf (1935) e a Contribuição de H. P. Luhn (1958)
Zipf analisou a língua inglesa e estabeleceu que, se listarmos todas as palavras de um texto por ordem decrescente de frequência:
* A palavra mais comum ocorre aproximadamente com o dobro da frequência da 2ª mais comum, o triplo da 3ª, e assim sucessivamente.
* A fórmula clássica é:
  $$r \\times f = C$$
  *(onde $r$ é a ordem de colocação ou posto, $f$ é a frequência absoluta e $C$ é uma constante).*
* **O Princípio do Menor Esforço (*Principle of Least Effort*):** O ser humano tende a reutilizar um vocabulário restrito de palavras econômicas e polissêmicas.
* **Aplicação em Ciência da Informação (H. P. Luhn, 1958):**
  * **Palavras de Alta Frequência:** Artigos, preposições, pronomes (*stop words* como "de", "para", "o", "que"). Possuem altíssima ocorrência e **baixíssimo valor semântico** discriminatório (devem ser eliminadas na indexação).
  * **Palavras de Baixa Frequência (*Hápax Legomena*):** Palavras que aparecem apenas 1 ou 2 vezes em todo o texto. Possuem alto valor específico, mas pouca representatividade estatística.
  * **Palavras de Média Frequência:** Zona intermediária de Luhn. São as palavras que apresentam o **máximo valor para indexação automática e recuperação**, pois carregam o núcleo conceitual do texto.

---

### 4. Quadro de Distratores Típicos do Cebraspe em Ranganathan e Bibliometria

| Afirmação da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"A Segunda Lei de Ranganathan parte do documento e exige técnicas ativas de disseminação e estantes abertas."* | **ERRADO** | A 2ª Lei foca no **LEITOR** (inclusão). É a **3ª Lei** (*A cada livro seu leitor*) que parte do documento e exige estantes abertas e DSI. |
| *"A Lei de Lotka trata da dispersão de artigos científicos em periódicos nucleares e periféricos."* | **ERRADO** | A dispersão de artigos em periódicos é a **Lei de Bradford**. Lotka trata da **produtividade dos autores** (quadrado inverso). |
| *"Segundo a Lei de Zipf, as palavras com maior frequência absoluta em um texto são as ideais para atuar como descritores de indexação."* | **ERRADO** | Palavras de frequência máxima são *stop words* (artigos, preposições) e têm valor nulo de recuperação. Os descritores situam-se na **média frequência** (Luhn). |
| *"A Quarta Lei de Ranganathan ('Poupe o tempo do leitor') recomenda que os usuários não tenham acesso direto às estantes para não desorganizá-las."* | **ERRADO** | A 4ª Lei exige expressamente o **livre acesso às estantes** para agilizar a consulta e evitar esperas burocráticas no balcão. |
| *"A 5ª Lei de Ranganathan impede o descarte de materiais em bibliotecas públicas, pois o acervo deve apenas crescer cumulativamente."* | **ERRADO** | Como organismo vivo, a biblioteca precisa tanto crescer quanto eliminar células mortas: a 5ª Lei **fundamenta e exige o desbastamento e o descarte** periódico. |`,
  checkpoints: [
    {
      id: 'cp-1-2-1',
      pergunta: 'Micro-Checkpoint 1: Foco da Segunda vs Terceira Lei',
      item: "A segunda lei de Ranganathan ('A cada leitor o seu livro') tem o documento bibliográfico como elemento central de sua formulação.",
      gabarito: 'E',
      justificativa: "Errado! A 2ª Lei parte do LEITOR (usuário) e exige democratização. A 3ª Lei ('A cada livro o seu leitor') é que parte do DOCUMENTO para garantir visibilidade.",
      versao_correta: "A terceira lei de Ranganathan ('A cada livro o seu leitor') tem o documento bibliográfico como elemento central de sua formulação, enquanto a segunda lei foca no leitor.",
    },
    {
      id: 'cp-1-2-2',
      pergunta: 'Micro-Checkpoint 2: Releituras Contemporâneas',
      item: "Na releitura das Cinco Leis para a era da informação, os termos clássicos 'livro' e 'leitor' foram reinterpretados respectivamente como 'informação' e 'usuário'.",
      gabarito: 'C',
      justificativa: "Certo! Formulações de teóricos contemporâneos como Rettig e Thompson realizaram essa transposição direta para o universo digital.",
    },
      {
      id: 'cp-1-2-3',
      pergunta: "Micro-Checkpoint 3: Implicações Práticas da Quarta Lei",
      item: "A Quarta Lei de Ranganathan ('Poupe o tempo do leitor') fundamenta prioritariamente a adoção de sistemas de estantes fechadas e o controle burocrático de acesso aos livros para evitar desordem física.",
      gabarito: 'E',
      justificativa: "Errado! A 4ª Lei exige exatamente o oposto: a implantação do livre acesso às estantes (open access), catálogos eficientes e arranjo lógico com guias para minimizar o tempo despendido pelo usuário na busca.",
      versao_correta: "A Quarta Lei de Ranganathan ('Poupe o tempo do leitor') fundamenta prioritariamente a adoção de livre acesso às estantes, catálogos eficientes e sinalização clara para agilizar a consulta.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-2-1',
        periodo: '1931',
        disciplina: 'Biblioteconomia Axiológica',
        focoPrincipal: 'As Cinco Leis dedutivas: Uso, Leitor, Livro, Tempo e Organismo vivo',
        figuraChave: 'Shiyali Ramamrita Ranganathan',
      },
      {
        id: 'tl-1-2-2',
        periodo: '1995',
        disciplina: 'Releitura Humanista',
        focoPrincipal: 'Our Singular Strengths: bibliotecas a serviço da humanidade e mídias plurais',
        figuraChave: 'Michael Gorman',
      },
      {
        id: 'tl-1-2-3',
        periodo: 'Anos 1990 / 2000',
        disciplina: 'Releitura Informacional Digital',
        focoPrincipal: 'Transposição conceitual direta: Livro -> Informação / Leitor -> Usuário',
        figuraChave: 'James Rettig e Jim Thompson',
      },
    ],
    autores: [
      {
        id: 'aut-1-2-1',
        nome: 'S. R. Ranganathan',
        ano: 1931,
        obraPrincipal: 'The Five Laws of Library Science',
        ideiaChave: 'Teoria axiológica dedutiva que rege o ciclo de vida da biblioteca.',
        chipPegadinha: '2ª Lei foca no LEITOR (inclusão); 3ª Lei foca no LIVRO (estantes abertas/DSI).',
      },
      {
        id: 'aut-1-2-2',
        nome: 'Michael Gorman',
        ano: 1995,
        obraPrincipal: 'Our Singular Strengths',
        ideiaChave: 'Releitura das cinco leis sob a ótica dos novos suportes e da preservação contínua.',
        chipPegadinha: 'Afirma que as bibliotecas servem à humanidade em todas as suas mídias.',
      },
      {
        id: 'aut-1-2-3',
        nome: 'James Rettig & Jim Thompson',
        ano: 1992,
        obraPrincipal: 'Releituras para Sistemas Digitais',
        ideiaChave: 'Adaptação do vocabulário ranganathaniano para informação e usuário.',
        chipPegadinha: 'Poupe o tempo do usuário e da equipe técnica.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-2-1',
        afirmacao: 'A segunda lei de Ranganathan preconiza o livre acesso às estantes como técnica primordial para que o documento encontre leitores interessados.',
        gabarito: 'E',
        porQue: 'A técnica de livre acesso às estantes (open shelves) e a DSI decorrem diretamente da TERCEIRA LEI (A todo livro seu leitor). A 2ª Lei parte do usuário e da inclusão.',
      },
      {
        id: 'peg-1-2-2',
        afirmacao: 'O princípio de que a preservação física do acervo deve sobrepor-se ao seu uso imediato encontra esteio direto na primeira lei de Ranganathan.',
        gabarito: 'E',
        porQue: 'A 1ª Lei ("Livros são para usar") estabelece exatamente o oposto: a preservação só tem razão de ser para viabilizar o uso, rompendo com o paradigma patrimonialista puro.',
      },
    ],
  },
};
