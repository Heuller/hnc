import type { ModuloFilho } from '../../../domain/types';

export const submodulo22: ModuloFilho = {
  id: 'sub-2-2',
  numero: '2.2',
  titulo: 'O Padrão RDA (Resource Description and Access) e o Projeto 3R',
  descricaoCurta: 'Gênese do RDA, superação do AACR2r para o ambiente de dados conectados (Linked Data), alinhamento com FRBR e IFLA LRM, o Projeto 3R (RDA Toolkit Oficial), eliminação radical da DGM e adoção do trio 336/337/338, fim das abreviaturas latinas ([S.l.] e [s.n.]), transcrição de autoria aberta e vocabulários controlados.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Joint Steering Committee (JSC)', 'RDA Steering Committee (RSC)', 'Barbara Tillett', 'Tom Delsey', 'Gordon Dunsire', 'Eliane Mey'],
  alertasCebraspe: [
    'O RDA NÃO é um simples código de catalogação de fichas ou um sucessor linear do AACR2; é um PADRÃO DE CONTEÚDO estruturado em modelo entidade-relacionamento (IFLA LRM e FRBR), projetado especificamente para a Web Semântica e Linked Open Data.',
    'Eliminação radical da DGM (Designação Geral do Material): o RDA aboliu termos soltos entre colchetes como "[recurso eletrônico]" ou "[gravação de vídeo]" e criou três atributos analíticos obrigatórios: Tipo de Conteúdo (MARC 336), Tipo de Mídia (MARC 337) e Tipo de Suporte (MARC 338).',
    'Fim categórico das abreviaturas latinas: no RDA é TERMINANTEMENTE PROIBIDO utilizar as expressões latinas tradicionais do AACR2r como "[S.l.]" (sine loco) e "[s.n.]" (sine nomine). Quando o dado não constar no recurso, registra-se no idioma da catalogação por extenso: "[lugar de publicação não identificado]" e "[editor não identificado]".',
    'Abandono da Regra dos Três Autores: o RDA encerrou a obrigatoriedade de cortar autores além do terceiro com "[et al.]". O padrão geral preconiza a transcrição e o ponto de acesso para TODOS os agentes responsáveis identificados no recurso, garantindo visibilidade e justiça de autoria.',
    'Substituição terminológica de conceitos clássicos: "cabeçalho" passa a ser "ponto de acesso autorizado"; "título uniforme" passa a ser denominado "título preferencial"; "referência remissiva" passa a ser "ponto de acesso variante".',
    'Compatibilidade com o MARC 21: o RDA não substituiu o MARC 21; ele define O QUE catalogar (conteúdo), enquanto o MARC 21 define COMO codificar (estrutura de intercâmbio). A Library of Congress adaptou o MARC 21 para abrigar com perfeição todos os elementos do RDA.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Analítico de Rupturas: AACR2r versus Padrão RDA (Oficial)',
    colunas: ['Dimensão Conceitual', 'Tradição do AACR2r (1978/2002)', 'Padrão RDA / Projeto 3R (2010/2020)', 'Jurisprudência / Foco da Banca Cebraspe'],
    linhas: [
      ['Modelo Estrutural', 'Baseado na ISBD, voltado à descrição de suportes físicos isolados', 'Baseado no modelo relacional IFLA LRM (entidades, atributos e relacionamentos)', 'Cebraspe cobra se o RDA é modelo ou padrão de conteúdo (é padrão de conteúdo baseado em modelo)'],
      ['Identificação do Recurso', 'DGM (Designação Geral do Material) inserida entre colchetes logo após o título', 'Trio Analítico Desagregado: Tipo de Conteúdo + Tipo de Mídia + Tipo de Suporte', 'Itens exigindo a identificação dos campos MARC 336 ($a texto), 337 ($a computador) e 338 ($a recurso online)'],
      ['Princípio de Transcrição', 'Uso extensivo de abreviaturas formais e termos latinos ([S.l.], [s.n.], ed., il., p., et al.)', 'Princípio "Take what you see" (transcreva o que vê); abreviaturas proibidas, texto por extenso', 'Cebraspe elabora assertivas afirmando falsamente que [S.l.] permanece válido no RDA (GABARITO: ERRADO)'],
      ['Tratamento de Autoria Múltipla', 'Regra restritiva: mais de 3 autores corta no primeiro seguido de [et al.]', 'Sem corte automático: registra todos os autores para permitir recuperação exaustiva', 'Cebraspe testa se há limite fixo de três autores no RDA (GABARITO: NÃO HÁ)'],
      ['Terminologia Canônica', 'Cabeçalho, Título Uniforme, Ponto de acesso principal', 'Ponto de Acesso Autorizado, Título Preferencial, Ponto de Acesso Variante', 'Substituição formal de termos para adequação a ontologias e grafos de conhecimento'],
      ['Ambiente de Aplicação', 'Sistemas de catálogos locais (OPAC) e redes legadas de intercâmbio (ISO 2709)', 'Ambiente de dados conectados (Linked Open Data), identificadores URI e Web Semântica', 'Capacidade de integração com BIBFRAME e dados abertos governamentais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Da Crise Estrutural do AACR2 à Gênese do Padrão RDA

O Código de Catalogação Anglo-Americano (AACR2r), apesar de seu sucesso histórico global ao longo do século XX, foi concebido na era pré-internet das fichas catalográficas de cartolina e das monografias impressas. Com o surgimento da Web, dos documentos eletrônicos, das bases de dados em rede e dos recursos digitais complexos (datasets, e-books dinâmicos, streaming, websites integradores), o AACR2r entrou em colapso conceitual:
* **Mistura entre Conteúdo e Suporte:** O código classificava documentos pelo seu invólucro físico (Capítulo 2 para livros, Capítulo 7 para vídeos, Capítulo 9 para arquivos de computador), tornando-se incapaz de lidar com um mesmo texto disponibilizado simultaneamente em papel, PDF, HTML e audiolivro.
* **Incompatibilidade com Bancos Relacionais e a Web:** O formato descritivo corrido do AACR2r não dialogava com a modelagem de entidades, gerando dados isolados (*silos informacionais*) invisíveis aos motores de busca da Web semântica.

Em 2004, o *Joint Steering Committee for Revision of AACR* (JSC) abandonou o projeto de uma terceira edição (AACR3) e decidiu criar uma norma inteiramente nova: o **RDA — Resource Description and Access** (Recursos: Descrição e Acesso), lançado em 2010 e transformado no padrão internacional oficial adotado pelas maiores bibliotecas nacionais do mundo (Library of Congress, British Library, Deutsche Nationalbibliothek e Biblioteca Nacional do Brasil).

---

### 2. O Projeto 3R (*RDA Restructure and Redesign Project*) e o RDA Toolkit Oficial

Entre 2017 e 2020, o *RDA Steering Committee* (RSC) promoveu uma reestruturação profunda do padrão denominada **Projeto 3R**:
1. **Alinhamento Completo com o IFLA LRM:** O RDA foi totalmente reescrito para incorporar as 11 entidades conceituais, atributos e relacionamentos do modelo *IFLA Library Reference Model* (2017).
2. **Abordagem Modular e Flexível:** O novo *RDA Toolkit Oficial* superou a estrutura linear de capítulos, organizando as orientações em torno de **Entidades** (*Res, Work, Expression, Manifestation, Item, Agent, Person, Collective Agent, Nomen, Place, Time-span*), **Elementos** e **Instruções de Gravação de Dados**.
3. **Quatro Métodos de Gravação de Dados do RDA:**
   * *Dado Não Estruturado:* Texto livre transcrito exatamente como figura na fonte (ex.: nota livre).
   * *Dado Estruturado:* Texto formatado de acordo com uma regra ou vocabulário formal (ex.: data no formato AAAA-MM-DD).
   * *Identificador:* Código alfanumérico unívoco atribuído por agência formal (ex.: ISBN, ISSN, DOI, Handle).
   * *URI (Uniform Resource Identifier):* Identificador Web permanente que aponta diretamente para uma entidade em um grafo de dados conectados (*Linked Data*).

---

### 3. A Extinção da DGM e a Consagração do Trio MARC 336, 337 e 338

A mais célebre ruptura técnica do RDA com o AACR2r foi a **abolição definitiva da Designação Geral do Material (DGM)**. No AACR2r, termos soltos entre colchetes inseridos logo após o título próprio — como \`[recurso eletrônico]\`, \`[gravação de som]\`, \`[filme]\` ou \`[microforma]\` — misturavam de forma incoerente a natureza do conteúdo intelectual com o suporte físico do objeto.

O RDA substituiu a DGM pela decomposição analítica em **três atributos fundamentais independentes**, codificados no formato MARC 21 nos campos 336, 337 e 338:

\`\`\`tree
TITLE: Decomposição da DGM no Trio RDA / MARC 21 (Campos 336, 337 e 338)
- Abolição da DGM do AACR2r | Fim de termos genéricos confusos como [recurso eletrônico]
  - 1. Tipo de Conteúdo (MARC 336) | O QUE é a mensagem intelectual expressa (ex: texto $b txt, imagem estática $b sti)
  - 2. Tipo de Mídia (MARC 337) | QUAL dispositivo é exigido para mediar o acesso (ex: não mediado $b n, computador $b c)
  - 3. Tipo de Suporte (MARC 338) | ONDE fisicamente o recurso está corporificado (ex: volume $b nc, recurso online $b cr)
\`\`\`

#### A. Detalhamento Técnico do Trio de Campos MARC 21 / RDA:

| Atributo RDA | Campo MARC 21 | Definição Canônica | Subcampos Obrigatórios | Exemplos Canônicos de Vocabulário |
| :--- | :--- | :--- | :--- | :--- |
| **Tipo de Conteúdo (*Content Type*)** | **Campo 336** | Refere-se à forma fundamental de comunicação intelectual ou artística por meio da qual a obra é expressa. | **$a** (termo por extenso)<br>**$b** (código)<br>**$2** (código da fonte: \`rdacontent\`) | • \`texto\` ($b txt)<br>• \`imagem estática\` ($b sti)<br>• \`música executada\` ($b prm)<br>• \`imagem bidimensional em movimento\` ($b tdi)<br>• \`dados computacionais\` ($b cod) |
| **Tipo de Mídia (*Media Type*)** | **Campo 337** | Refere-se ao tipo geral de dispositivo intermediário ou aparelho necessário para visualizar, executar ou acessar o conteúdo do recurso. | **$a** (termo por extenso)<br>**$b** (código)<br>**$2** (código da fonte: \`rdamedia\`) | • \`não mediado\` ($b n - não requer aparelho, ex.: livro impresso)<br>• \`computador\` ($b c)<br>• \`áudio\` ($b s)<br>• \`vídeo\` ($b v)<br>• \`projetado\` ($b g) |
| **Tipo de Suporte (*Carrier Type*)** | **Campo 338** | Refere-se ao formato ou invólucro físico específico que armazena a mídia e o conteúdo. | **$a** (termo por extenso)<br>**$b** (código)<br>**$2** (código da fonte: \`rdacarrier\`) | • \`volume\` ($b nc - livros encadernados)<br>• \`recurso online\` ($b cr)<br>• \`disco óptico\` ($b cd)<br>• \`folha\` ($b nb) |

#### Exemplo Prático de Aplicação em Concurso:
* **Livro Impresso Tradicional da Câmara dos Deputados:**
  \`\`\`text
  336 ## $a texto $b txt $2 rdacontent
  337 ## $a não mediado $b n $2 rdamedia
  338 ## $a volume $b nc $2 rdacarrier
  \`\`\`
* **E-book em PDF disponível no Portal da Câmara dos Deputados:**
  \`\`\`text
  336 ## $a texto $b txt $2 rdacontent
  337 ## $a computador $b c $2 rdamedia
  338 ## $a recurso online $b cr $2 rdacarrier
  \`\`\`

---

### 4. O Princípio da Representação e o Fim das Abreviaturas Latinas

O RDA adotou o princípio fundamental denominado **"Take what you see"** (*Transcreva o que você vê*): os dados de manifestação devem refletir exatamente como aparecem na fonte de informação, erradicando convenções arcaicas:

#### A. Banimento de Expressões Latinas:
* No AACR2r, na ausência de local de publicação, utilizava-se obrigatoriamente a expressão latina entre colchetes \`[S.l.]\` (*sine loco*). Na ausência de editor, utilizava-se \`[s.n.]\` (*sine nomine*).
* **No RDA, as abreviaturas latinas são TERMINANTEMENTE PROIBIDAS!**
  * Não havendo local de publicação identificado: registra-se no idioma da agência de catalogação por extenso: \`[lugar de publicação não identificado]\`.
  * Não havendo editor identificado: registra-se por extenso: \`[editor não identificado]\`.
  * Não havendo data de publicação identificada: registra-se a data provável estimada (ex.: \`[entre 2020 e 2025]\` ou \`[data de publicação não identificada]\`).

#### B. Erradicação de Abreviaturas nas Áreas de Descrição:
* O AACR2r utilizava abreviaturas padronizadas em língua portuguesa (ex.: \`3. ed.\`, \`250 p.\`, \`il.\`, \`23 cm\`).
* O RDA preconiza a transcrição **por extenso** ou tal como consta no recurso:
  * Em vez de \`p.\`, registra-se \`páginas\` ou \`volumes\`.
  * Em vez de \`il.\`, registra-se \`ilustrações\`.
  * A menção de edição é transcrita exatamente como consta na página de rosto (ex.: se estiver escrito "Terceira edição revista e ampliada", transcreve-se textualmente assim).

#### C. Abertura do Registro de Autoria Múltipla (Fim do Limite de 3 Autores):
* No AACR2r, obras com 4 ou mais autores tinham a menção de responsabilidade cortada obrigatoriamente no primeiro autor seguido de \`[et al.]\`.
* No RDA, **a regra geral não impõe limite de corte**: permite e encoraja a transcrição de **todos os autores** nomeados na fonte de informação e a criação de pontos de acesso autorizados para todos eles, garantindo a encontrabilidade de cada pesquisador e a correta atribuição de crédito. As bibliotecas podem definir políticas locais apenas para casos excepcionais com dezenas de colaboradores.

---

### 5. As Tarefas do Usuário no Ecossistema RDA / IFLA LRM

Toda a arquitetura do RDA é orientada ao atendimento das **cinco tarefas do usuário** definidas pelo *IFLA Library Reference Model* (2017):
1. **Encontrar (*Find*):** Reunir informações sobre recursos bibliográficos ou entidades de interesse pesquisando por meio de qualquer atributo ou relacionamento.
2. **Identificar (*Identify*):** Confirmar com precisão que o recurso encontrado corresponde exatamente àquele procurado, distinguindo entre recursos semelhantes (ex.: diferenciar edições de um mesmo texto).
3. **Selecionar (*Select*):** Escolher o recurso que melhor atende às necessidades do usuário quanto ao formato, idioma, data de publicação ou suporte físico.
4. **Obter (*Obtain*):** Adquirir ou ter acesso efetivo ao recurso selecionado (seja por empréstimo físico na estante, download de arquivo digital ou acesso via link eletrônico).
5. **Explorar (*Explore*):** Navegar pelas conexões e relacionamentos entre entidades (descobrir outras obras do mesmo autor, obras sobre o mesmo tema ou outras expressões da mesma criação intelectual).

---

### 6. Padrões Decisórios e Armadilhas do Cebraspe sobre o RDA

| Padrão de Armadilha Cebraspe | Como a Banca Formula o Item Falso | Fundamentação Técnica Oficial (Gabarito) |
| :--- | :--- | :--- |
| **Abreviaturas Latinas no RDA** | *"Ao catalogar uma obra sob o padrão RDA na qual o local de publicação é desconhecido, o catalogador deve inserir a notação [S.l.] na área de publicação."* | **ERRADO.** O RDA baniu expressões latinas. Deve-se registrar por extenso: \`[lugar de publicação não identificado]\`. |
| **Substituição do MARC 21** | *"A adoção da norma RDA implica a revogação e o descarte definitivo do formato MARC 21 pelas bibliotecas, exigindo a transição imediata para bancos de dados nativos em grafos RDF."* | **ERRADO.** O MARC 21 foi amplamente atualizado para codificar todos os elementos do RDA (como os campos 336, 337 e 338). O RDA é padrão de conteúdo; o MARC é formato de codificação. |
| **DGM vs Trio Analítico** | *"No padrão RDA, a Designação Geral do Material (DGM) foi preservada entre colchetes logo após o título principal, tendo sido apenas complementada pelos campos 336, 337 e 338."* | **ERRADO.** A DGM foi **completamente eliminada e extinta**. O RDA utiliza exclusivamente o trio de tipo de conteúdo, mídia e suporte. |
| **Limite de Autores** | *"De acordo com as diretrizes do RDA, em obras com quatro ou mais autores, o catalogador deve obrigatoriamente registrar apenas o primeiro seguido de et al."* | **ERRADO.** Essa regra restritiva era do AACR2r. O RDA eliminou o corte automático obrigatório e permite registrar todos os autores. |
| **Cabeçalho vs Ponto de Acesso** | *"No padrão RDA, o termo 'cabeçalho' continua sendo a denominação técnica canônica para o ponto de acesso principal padronizado."* | **ERRADO.** O RDA substituiu o termo 'cabeçalho' por **'Ponto de Acesso Autorizado'** (*Authorized Access Point*). |
`,
  checkpoints: [
    {
      id: 'cp-2-2-1',
      pergunta: 'Micro-Checkpoint 1: Substituição da DGM no Padrão RDA',
      item: 'No padrão RDA (Resource Description and Access), a tradicional Designação Geral do Material (DGM) foi suprimida e substituída por três atributos analíticos fundamentais: tipo de conteúdo, tipo de mídia e tipo de suporte.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é uma das principais inovações do RDA, refletida diretamente nos campos 336, 337 e 338 do formato MARC 21.',
    },
    {
      id: 'cp-2-2-2',
      pergunta: 'Micro-Checkpoint 2: Uso de Expressões Latinas no RDA',
      item: 'Na catalogação baseada nas instruções do RDA, caso não seja possível identificar a editora de uma publicação na fonte de informação, o catalogador deve registrar a expressão latina tradicional [s.n.] entre colchetes.',
      gabarito: 'E',
      justificativa: 'Errado! O RDA baniu expressamente o uso de abreviaturas latinas. No lugar de [s.n.], registra-se no idioma da agência por extenso: [editor não identificado].',
    },
    {
      id: 'cp-2-2-3',
      pergunta: 'Micro-Checkpoint 3: Campos MARC 21 do Trio RDA',
      item: 'No formato MARC 21 Bibliográfico adaptado ao RDA, o campo 336 é destinado à codificação do tipo de conteúdo intelectual do recurso, ao passo que o campo 338 registra o tipo de suporte físico ou invólucro do documento.',
      gabarito: 'C',
      justificativa: 'Correto! O campo 336 corresponde ao tipo de conteúdo (ex.: texto), o 337 ao tipo de mídia (ex.: computador) e o 338 ao tipo de suporte (ex.: recurso online, volume).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-2-1',
        periodo: '2004',
        disciplina: 'Transição Normativa',
        focoPrincipal: 'Decisão do JSC de abandonar a elaboração do AACR3 e desenvolver um padrão baseado no modelo FRBR',
        figuraChave: 'Joint Steering Committee (JSC)',
      },
      {
        id: 'tl-2-2-2',
        periodo: '2010',
        disciplina: 'Lançamento Oficial',
        focoPrincipal: 'Publicação oficial do RDA (Resource Description and Access) e lançamento do RDA Toolkit',
        figuraChave: 'RDA Steering Committee (RSC)',
      },
      {
        id: 'tl-2-2-3',
        periodo: '2013',
        disciplina: 'Implementação Global',
        focoPrincipal: 'Adoção plena do RDA pela Library of Congress, British Library e bibliotecas nacionais parceiras',
        figuraChave: 'Library of Congress',
      },
      {
        id: 'tl-2-2-4',
        periodo: '2017-2020',
        disciplina: 'Projeto 3R',
        focoPrincipal: 'RDA Restructure and Redesign Project: alinhamento pleno com as 11 entidades do modelo IFLA LRM (2017)',
        figuraChave: 'Gordon Dunsire e IFLA',
      },
    ],
    autores: [
      {
        id: 'aut-2-2-1',
        nome: 'Barbara Tillett',
        ano: 2011,
        obraPrincipal: 'RDA: Resource Description & Access — Background and Overview',
        ideiaChave: 'A catalogação como rede de relacionamentos bibliográficos para conectar pessoas, obras e entidades na Web semântica.',
        chipPegadinha: 'Tillett liderou a transição da Library of Congress e a formulação da teoria de relacionamentos.',
      },
      {
        id: 'aut-2-2-2',
        nome: 'Tom Delsey',
        ano: 2005,
        obraPrincipal: 'The Logical Structure of the Anglo-American Cataloguing Rules',
        ideiaChave: 'Modelagem analítica que revelou as falhas estruturais do AACR2 e desenhou a arquitetura relacional do RDA.',
        chipPegadinha: 'Foi o principal arquiteto conceitual da ponte entre o modelo FRBR e as regras de catalogação.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-2-1',
        afirmacao: 'No padrão RDA, as abreviaturas latinas tradicionais [S.l.] e [s.n.] devem ser mantidas sempre que o local de publicação ou a editora não constarem expressamente do recurso.',
        gabarito: 'E',
        porQue: 'No RDA é proibido o uso de expressões latinas. Deve-se transcrever no idioma da agência por extenso: [lugar de publicação não identificado] e [editor não identificado].',
      },
      {
        id: 'peg-2-2-2',
        afirmacao: 'O campo 337 do MARC 21 corresponde ao Tipo de Conteúdo intelectual e o campo 336 corresponde ao Tipo de Mídia.',
        gabarito: 'E',
        porQue: 'Inversão clássica do Cebraspe: Campo 336 é TIPO DE CONTEÚDO (texto, imagem, áudio). Campo 337 é TIPO DE MÍDIA (computador, áudio, não mediado). Campo 338 é TIPO DE SUPORTE (volume, recurso online).',
      },
      {
        id: 'peg-2-2-3',
        afirmacao: 'A introdução do padrão RDA tornou o formato MARC 21 obsoleto e incompatível com os novos registros das bibliotecas.',
        gabarito: 'E',
        porQue: 'O MARC 21 foi amplamente atualizado para receber os dados do RDA (campos 336, 337, 338, 264, etc.). Ambos são perfeitamente integrados.',
      },
    ],
  },
};
