import type { ModuloFilho } from '../../../domain/types';

export const submodulo22: ModuloFilho = {
  id: 'sub-2-2',
  numero: '2.2',
  editalRef: 'Bloco D - Item 2.3',
  preRequisitos: ["sub-2-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-3",
          "titulo": "Modelos Conceituais: FRBR e IFLA LRM",
          "motivo": "Fundamentação teórica do RDA centrada nas entidades e relacionamentos LRM."
      },
      {
          "submoduloId": "sub-2-7",
          "titulo": "BIBFRAME 2.0 e Linked Data",
          "motivo": "Adoção de URIs e entidades para integração na Web Semântica."
      }
  ],
  titulo: 'O Padrão RDA (Resource Description and Access) e o Projeto 3R',
  antesDeLer: [
  {
    "termo": "Conteúdo e codificação",
    "definicao": "RDA orienta dados; MARC codifica segundo campos e subcampos.",
    "exemploBiblioteca": "Adotar RDA não exige abandonar MARC imediatamente."
  },
  {
    "termo": "IRI",
    "definicao": "Identificador no método de registro de dados conectados.",
    "exemploBiblioteca": "A IRI identifica; não garante sozinha disponibilidade permanente ou verdade."
  }
],
  descricaoCurta: "Distinguir evolução do padrão e cronogramas de adoção. Relacionar entidades e quatro métodos sem confundir RDA e LRM. Classificar conteúdo, mídia e suporte em exemplos MARC. Distinguir transcrever e fornecer informação. Aplicar as tarefas de usuário ao serviço. Julgar coexistência de padrões e formatos.",
  tempoEstimadoMinutos: 22,
  autoresChave: [
  "IFLA — Library Reference Model (2017)",
  "RDA Registry — guia e perguntas frequentes",
  "Library of Congress — MARC 21 Bibliographic"
],
  alertasCebraspe: [
  "Conteúdo e codificação têm funções diferentes; há uso de RDA em MARC.",
  "Identificação não equivale a validação de conteúdo ou garantia operacional.",
  "O RDA tem sua própria especialização e RDA Entity. Alinhamento não significa identidade literal das listas."
],
  teoriaDensaMarkdown: "### Da Crise Estrutural do AACR2 à Gênese do Padrão RDA\n\nO Código de Catalogação Anglo-Americano (AACR2r), apesar de seu sucesso histórico global ao longo do século XX, foi concebido na era pré-internet das fichas catalográficas de cartolina e das monografias impressas. Com o surgimento da Web, dos documentos eletrônicos, das bases de dados em rede e dos recursos digitais complexos (datasets, e-books dinâmicos, streaming, websites integradores), o AACR2r passou por revisão crítica diante de necessidades novas:\n* **Mistura entre Conteúdo e Suporte:** O código classificava documentos pelo seu invólucro físico (Capítulo 2 para livros, Capítulo 7 para vídeos, Capítulo 9 para arquivos de computador), o que motivou aperfeiçoamentos, sem significar incapacidade absoluta de descrever recursos eletrônicos.\n* **Dados e relações:** a transição busca explicitar entidades e vínculos para novos ambientes. AACR2 não determina sozinho arquitetura de banco, indexação web ou visibilidade de todo registro.\n\nEm 2005, o *Joint Steering Committee for Revision of AACR* (JSC) abandonou o projeto de uma terceira edição (AACR3) e decidiu criar uma norma inteiramente nova: o **RDA — Resource Description and Access** (Recursos: Descrição e Acesso), lançado em 2010 e adotado em diferentes calendários e perfis por instituições; não se presume adoção universal ou implantação idêntica sem consultar documentação local.\n\n**Aplicação e recuperação:** Uma biblioteca registra RDA em MARC e outra usa dados conectados. Ambas podem aplicar o padrão de conteúdo. Não há obrigação lógica de converter tudo para RDF só por adotar RDA, nem garantia de que todo campo terá equivalente perfeito. Implantação envolve perfil e política documentada.\n\n### O Projeto 3R (*RDA Restructure and Redesign Project*) e o RDA Toolkit Oficial\n\nEntre 2017 e 2020, o *RDA Steering Committee* (RSC) promoveu uma reestruturação profunda do padrão denominada **Projeto 3R**:\n1. **Alinhamento Completo com o IFLA LRM:** A reestruturação alinhou o padrão ao IFLA LRM, mas o conjunto de entidades RDA não é uma cópia literal da lista de onze entidades do modelo.\n2. **Abordagem Modular e Flexível:** O novo *RDA Toolkit Oficial* superou a estrutura linear de capítulos, organizando as orientações em torno de **Entidades** (incluindo *RDA Entity, Work, Expression, Manifestation, Item, Agent, Person, Collective Agent, Corporate Body, Family, Nomen, Place* e *Timespan*), **Elementos** e **Instruções de Gravação de Dados**.\n3. **Quatro Métodos de Gravação de Dados do RDA:**\n   * *Dado Não Estruturado:* Texto livre transcrito exatamente como figura na fonte (ex.: nota livre).\n   * *Dado Estruturado:* Texto formatado de acordo com uma regra ou vocabulário formal (ex.: data no formato AAAA-MM-DD).\n   * *Identificador:* Código alfanumérico unívoco atribuído por agência formal (ex.: ISBN, ISSN, DOI, Handle).\n   * *IRI (Internationalized Resource Identifier):* referência à entidade no método de dados conectados. IRI não garante por si permanência, disponibilidade ou veracidade; URI é uma categoria relacionada, mas não deve substituir silenciosamente a terminologia do método.\n\n**Aplicação e recuperação:** Nome livre, ponto de acesso construído, identificador e IRI representam métodos diferentes. Uma IRI pode identificar uma entidade sem ser uma página para leitura humana. Família e entidade coletiva têm tratamento RDA próprio; não substitua o conjunto pelo diagrama de onze entidades LRM.\n\n### A Extinção da DGM e a Consagração do Trio MARC 336, 337 e 338\n\nA mais célebre ruptura técnica do RDA com o AACR2r foi a **substituição da DGM por elementos mais específicos no padrão RDA**, sem apagar automaticamente registros legados. No AACR2r, termos soltos entre colchetes inseridos logo após o título próprio — como `[recurso eletrônico]`, `[gravação de som]`, `[filme]` ou `[microforma]` — misturavam de forma incoerente a natureza do conteúdo intelectual com o suporte físico do objeto.\n\nO RDA substituiu a DGM pela decomposição analítica em **três atributos fundamentais independentes**, codificados no formato MARC 21 nos campos 336, 337 e 338:\n\n```tree\nTITLE: Decomposição da DGM no Trio RDA / MARC 21 (Campos 336, 337 e 338)\n- Abolição da DGM do AACR2r | Fim de termos genéricos confusos como [recurso eletrônico]\n  - 1. Tipo de Conteúdo (MARC 336) | O QUE é a mensagem intelectual expressa (ex: texto $b txt, imagem estática $b sti)\n  - 2. Tipo de Mídia (MARC 337) | QUAL dispositivo é exigido para mediar o acesso (ex: não mediado $b n, computador $b c)\n  - 3. Tipo de Suporte (MARC 338) | ONDE fisicamente o recurso está corporificado (ex: volume $b nc, recurso online $b cr)\n```\n\n#### A. Detalhamento Técnico do Trio de Campos MARC 21 / RDA:\n\n| Atributo RDA | Campo MARC 21 | Definição Canônica | Subcampos usuais (não todos obrigatórios em cada ocorrência) | Exemplos Canônicos de Vocabulário |\n| :--- | :--- | :--- | :--- | :--- |\n| **Tipo de Conteúdo (*Content Type*)** | **Campo 336** | Refere-se à forma fundamental de comunicação intelectual ou artística por meio da qual a obra é expressa. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdacontent`) | • `texto` (`$b` txt)<br>• `imagem estática` (`$b` sti)<br>• `música executada` (`$b` prm)<br>• `imagem bidimensional em movimento` (`$b` tdi)<br>• `dados computacionais` (`$b` cod) |\n| **Tipo de Mídia (*Media Type*)** | **Campo 337** | Refere-se ao tipo geral de dispositivo intermediário ou aparelho necessário para visualizar, executar ou acessar o conteúdo do recurso. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdamedia`) | • `não mediado` (`$b` n - não requer aparelho, ex.: livro impresso)<br>• `computador` (`$b` c)<br>• `áudio` (`$b` s)<br>• `vídeo` (`$b` v)<br>• `projetado` (`$b` g) |\n| **Tipo de Suporte (*Carrier Type*)** | **Campo 338** | Refere-se ao formato ou invólucro físico específico que armazena a mídia e o conteúdo. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdacarrier`) | • `volume` (`$b` nc - livros encadernados)<br>• `recurso online` (`$b` cr)<br>• `disco de computador` (`$b` cd), distinguindo videodisco (`vd`) e disco de áudio (`sd`)<br>• `folha` (`$b` nb) |\n\n#### Exemplo Prático de Aplicação em Concurso:\n* **Livro Impresso Tradicional da Câmara dos Deputados:**\n  ```text\n  336 ## $a texto $b txt $2 rdacontent\n  337 ## $a não mediado $b n $2 rdamedia\n  338 ## $a volume $b nc $2 rdacarrier\n  ```\n* **E-book em PDF disponível no Portal da Câmara dos Deputados:**\n  ```text\n  336 ## $a texto $b txt $2 rdacontent\n  337 ## $a computador $b c $2 rdamedia\n  338 ## $a recurso online $b cr $2 rdacarrier\n  ```\n\n**Aplicação e recuperação:** Dois recursos contêm texto, um em volume impresso e outro online. O tipo de conteúdo pode ser o mesmo enquanto mídia e suporte mudam. Em MARC, 338 permite registro de termo ou código conforme as regras; não exige universalmente a presença simultânea de $a e $b em toda ocorrência.\n\n### O Princípio da Representação e o Fim das Abreviaturas Latinas\n\nO RDA adotou o princípio fundamental denominado **\"Take what you see\"** (*Transcreva o que você vê*): os dados de manifestação devem refletir exatamente como aparecem na fonte de informação, distinguindo transcrição e informação fornecida pelo catalogador:\n\n#### A. Banimento de Expressões Latinas:\n* No AACR2r, na ausência de local de publicação, utilizava-se obrigatoriamente a expressão latina entre colchetes `[S.l.]` (*sine loco*). Na ausência de editor, utilizava-se `[s.n.]` (*sine nomine*).\n* **Na prática RDA pertinente à informação não identificada, não se acrescenta automaticamente a abreviatura latina como no código anterior.** Isso não é proibição de transcrever abreviatura ou expressão latina realmente presente no recurso.\n  * Não havendo local de publicação identificado: registra-se no idioma da agência de catalogação por extenso: `[lugar de publicação não identificado]`.\n  * Não havendo editor identificado: registra-se por extenso: `[editor não identificado]`.\n  * Não havendo data de publicação identificada: registra-se a data provável estimada (ex.: `[entre 2020 e 2025]` ou `[data de publicação não identificada]`).\n\n#### B. Erradicação de Abreviaturas nas Áreas de Descrição:\n* O AACR2r utilizava abreviaturas padronizadas em língua portuguesa (ex.: `3. ed.`, `250 p.`, `il.`, `23 cm`).\n* O RDA preconiza a transcrição **por extenso** ou tal como consta no recurso:\n  * Em vez de `p.`, registra-se `páginas` ou `volumes`.\n  * Em vez de `il.`, registra-se `ilustrações`.\n  * A menção de edição é transcrita exatamente como consta na página de rosto (ex.: se estiver escrito \"Terceira edição revista e ampliada\", transcreve-se textualmente assim).\n\n#### C. Abertura do Registro de Autoria Múltipla (Fim do Limite de 3 Autores):\n* No AACR2r, obras com 4 ou mais autores tinham a menção de responsabilidade cortada obrigatoriamente no primeiro autor seguido de `[et al.]`.\n* No RDA, **a regra geral não impõe limite de corte**: permite e encoraja a transcrição de **todos os autores** nomeados na fonte de informação e a criação de pontos de acesso autorizados para todos eles, garantindo a encontrabilidade de cada pesquisador e a correta atribuição de crédito. As bibliotecas podem definir políticas locais apenas para casos excepcionais com dezenas de colaboradores.\n\n**Aplicação e recuperação:** Se “3. ed.” aparece no recurso, uma regra de transcrição não exige expandir cegamente tudo para “terceira edição”. Informação transcrita, termo de vocabulário e dado fornecido pelo catalogador têm tratamentos diferentes. O slogan “take what you see” ajuda, mas não substitui instrução, opção e perfil aplicáveis.\n\n### As Tarefas do Usuário no Ecossistema RDA / IFLA LRM\n\nToda a arquitetura do RDA é orientada ao atendimento das **cinco tarefas do usuário** definidas pelo *IFLA Library Reference Model* (2017):\n1. **Encontrar (*Find*):** Reunir informações sobre recursos bibliográficos ou entidades de interesse pesquisando por meio de qualquer atributo ou relacionamento.\n2. **Identificar (*Identify*):** Confirmar com precisão que o recurso encontrado corresponde exatamente àquele procurado, distinguindo entre recursos semelhantes (ex.: diferenciar edições de um mesmo texto).\n3. **Selecionar (*Select*):** Escolher o recurso que melhor atende às necessidades do usuário quanto ao formato, idioma, data de publicação ou suporte físico.\n4. **Obter (*Obtain*):** Adquirir ou ter acesso efetivo ao recurso selecionado (seja por empréstimo físico na estante, download de arquivo digital ou acesso via link eletrônico).\n5. **Explorar (*Explore*):** Navegar pelas conexões e relacionamentos entre entidades (descobrir outras obras do mesmo autor, obras sobre o mesmo tema ou outras expressões da mesma criação intelectual).\n\n**Aplicação e recuperação:** Usuário compara português e inglês: seleção depende da necessidade. Confirmar que dois títulos semelhantes representam a mesma entidade é identificação. Explorar relações pode revelar traduções e obras relacionadas. As tarefas não impõem ordem fixa obrigatória de interface.\n\n### Contrastes autorais: conteúdo, codificação e implementação\n\n| Padrão de Armadilha Cebraspe | Como a Banca Formula o Item Falso | Análise dos exemplos autorais |\n| :--- | :--- | :--- |\n| **Abreviaturas Latinas no RDA** | *\"Ao catalogar uma obra sob o padrão RDA na qual o local de publicação é desconhecido, o catalogador deve inserir a notação [S.l.] na área de publicação.\"* | **ERRADO.** Para local não identificado, a prática descrita usa informação fornecida por extenso; isso não proíbe toda expressão latina presente na fonte. Deve-se registrar por extenso: `[lugar de publicação não identificado]`. |\n| **Substituição do MARC 21** | *\"A adoção da norma RDA implica a revogação e o descarte definitivo do formato MARC 21 pelas bibliotecas, exigindo a transição imediata para bancos de dados nativos em grafos RDF.\"* | **ERRADO.** O MARC 21 dispõe de mapeamentos para muitos elementos RDA, sem que isso assegure equivalência universal e sem perdas (como os campos 336, 337 e 338). O RDA é padrão de conteúdo; o MARC é formato de codificação. |\n| **DGM vs Trio Analítico** | *\"No padrão RDA, a Designação Geral do Material (DGM) foi preservada entre colchetes logo após o título principal, tendo sido apenas complementada pelos campos 336, 337 e 338.\"* | **ERRADO.** O RDA distingue conteúdo, mídia e suporte. Dados legados não desaparecem por decreto, e esses três elementos não esgotam a descrição do recurso. |\n| **Limite de Autores** | *\"De acordo com as diretrizes do RDA, em obras com quatro ou mais autores, o catalogador deve obrigatoriamente registrar apenas o primeiro seguido de et al.\"* | **ERRADO.** Essa regra restritiva era do AACR2r. O RDA eliminou o corte automático obrigatório e permite registrar todos os autores. |\n| **Cabeçalho vs Ponto de Acesso** | *\"No padrão RDA, o termo 'cabeçalho' continua sendo a denominação técnica canônica para o ponto de acesso principal padronizado.\"* | **ERRADO.** O RDA substituiu o termo 'cabeçalho' por **'Ponto de Acesso Autorizado'** (*Authorized Access Point*). |\n\n**Aplicação e recuperação:** Um registro antigo possui DGM e foi enriquecido com 336–338. Isso pode ser decisão de tratamento de legado; não prova que RDA manteve DGM como elemento substituto do trio. Distinguir norma de conteúdo e estado de uma base evita concluir pela aparência de um único registro.",
  teoriaDidaticaMarkdown: "### Revisão: RDA define dados, não uma única implementação\n\nDiferencie RDA original, reestruturação 3R e perfis institucionais. O alinhamento ao LRM não torna idênticas as listas de entidades. Métodos: descrição não estruturada, estruturada, identificador e IRI. Conteúdo, mídia e suporte são dimensões distintas, codificáveis em 336–338; não se impõe $a e $b simultâneos universalmente. Transcrição e dados fornecidos seguem instruções próprias; não existe proibição indiscriminada de qualquer abreviatura realmente presente. RDA pode coexistir com MARC e dados legados; migração exige planejamento e verificação.\n",
  checkpoints: [
  {
    "id": "cp-2-2-1",
    "pergunta": "Micro-Checkpoint 1: Substituição da DGM no Padrão RDA",
    "item": "No padrão RDA (Resource Description and Access), a tradicional Designação Geral do Material (DGM) foi suprimida e substituída por três atributos analíticos fundamentais: tipo de conteúdo, tipo de mídia e tipo de suporte.",
    "gabarito": "C",
    "justificativa": "O RDA distingue as três dimensões, codificáveis em 336–338. Isso não apaga automaticamente DGM em registros legados nem torna esses campos toda a descrição.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338."
  },
  {
    "id": "cp-2-2-2",
    "pergunta": "Micro-Checkpoint 2: Uso de Expressões Latinas no RDA",
    "item": "Na catalogação baseada nas instruções do RDA, caso não seja possível identificar a editora de uma publicação na fonte de informação, o catalogador deve registrar a expressão latina tradicional [s.n.] entre colchetes.",
    "gabarito": "E",
    "justificativa": "Na situação de editor não identificado, registra-se informação fornecida apropriada segundo instrução/perfil, em vez de impor [s.n.]. Isso não proíbe transcrever toda abreviatura que realmente conste no recurso.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338.",
    "versao_correta": "Para editor não identificado, usa-se a indicação pertinente por extenso, conforme o RDA e o perfil aplicado."
  },
  {
    "id": "cp-2-2-3",
    "pergunta": "Micro-Checkpoint 3: Campos MARC 21 do Trio RDA",
    "item": "No formato MARC 21 Bibliográfico adaptado ao RDA, o campo 336 é destinado à codificação do tipo de conteúdo intelectual do recurso, ao passo que o campo 338 registra o tipo de suporte físico ou invólucro do documento.",
    "gabarito": "C",
    "justificativa": "336 representa conteúdo; 337, mediação; 338, suporte. Livro impresso e texto online podem compartilhar conteúdo e diferir em mídia/suporte.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338."
  },
  {
    "id": "rt-2-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Adotar RDA obriga abandonar MARC 21 imediatamente.",
    "gabarito": "E",
    "justificativa": "Conteúdo e codificação têm funções diferentes; há uso de RDA em MARC.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338.",
    "editalRef": "Bloco D - Item 2.3",
    "habilidade": "aplicar",
    "versao_correta": "RDA pode ser registrado em MARC conforme mapeamentos e perfil."
  },
  {
    "id": "rt-2-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Mudar de texto impresso para texto online pode conservar tipo de conteúdo e alterar mídia/suporte.",
    "gabarito": "C",
    "justificativa": "Texto descreve conteúdo; volume e recurso online descrevem suportes distintos, com mediação diferente.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338.",
    "editalRef": "Bloco D - Item 2.3",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma IRI garante por si que a entidade descrita é verdadeira e que o endereço estará disponível para sempre.",
    "gabarito": "E",
    "justificativa": "Identificação não equivale a validação de conteúdo ou garantia operacional.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338.",
    "editalRef": "Bloco D - Item 2.3",
    "habilidade": "aplicar",
    "versao_correta": "Uma IRI identifica conforme o esquema; permanência e confiabilidade dependem de governança e implementação."
  },
  {
    "id": "rt-2-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No RDA oficial, a lista de entidades é idêntica à do LRM, inclusive usando Res como único nome da entidade geral e sem Family ou Corporate Body.",
    "gabarito": "E",
    "justificativa": "O RDA tem sua própria especialização e RDA Entity. Alinhamento não significa identidade literal das listas.",
    "fonte": "IFLA LRM (2017), capítulos 2–4; RDA Registry, métodos de registro e classes; Library of Congress, MARC 21, campos 336–338.",
    "editalRef": "Bloco D - Item 2.3",
    "habilidade": "aplicar",
    "versao_correta": "RDA e LRM são alinhados, com conjuntos e nomes que devem ser distinguidos."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-2-2-fonte-lrm",
      "nome": "IFLA — Library Reference Model (2017)",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA — Library Reference Model (2017)",
      "ideiaChave": "Modelo conceitual; tradução portuguesa disponível no acervo, entidades e relacionamentos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-2-fonte-rda",
      "nome": "RDA Registry — guia e perguntas frequentes",
      "ano": "Referência de consulta",
      "obraPrincipal": "RDA Registry — guia e perguntas frequentes",
      "ideiaChave": "Métodos de registro, elementos e relações; distinguir RDA original e oficial.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-2-fonte-marc",
      "nome": "Library of Congress — MARC 21 Bibliographic",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — MARC 21 Bibliographic",
      "ideiaChave": "Campos 336, 337 e 338 e vocabulários de tipo.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-2-2-2",
      "afirmacao": "Mudar de texto impresso para texto online pode conservar tipo de conteúdo e alterar mídia/suporte.",
      "gabarito": "C",
      "porQue": "Texto descreve conteúdo; volume e recurso online descrevem suportes distintos, com mediação diferente."
    },
    {
      "id": "memoria-rt-2-2-3",
      "afirmacao": "Uma IRI garante por si que a entidade descrita é verdadeira e que o endereço estará disponível para sempre.",
      "gabarito": "E",
      "porQue": "Identificação não equivale a validação de conteúdo ou garantia operacional."
    },
    {
      "id": "memoria-rt-2-2-4",
      "afirmacao": "No RDA oficial, a lista de entidades é idêntica à do LRM, inclusive usando Res como único nome da entidade geral e sem Family ou Corporate Body.",
      "gabarito": "E",
      "porQue": "O RDA tem sua própria especialização e RDA Entity. Alinhamento não significa identidade literal das listas."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-2-2-bloco-1",
    "titulo": "Da Crise Estrutural do AACR2 à Gênese do Padrão RDA",
    "objetivos": [
      "Distinguir evolução do padrão e cronogramas de adoção."
    ],
    "conteudo": "O Código de Catalogação Anglo-Americano (AACR2r), apesar de seu sucesso histórico global ao longo do século XX, foi concebido na era pré-internet das fichas catalográficas de cartolina e das monografias impressas. Com o surgimento da Web, dos documentos eletrônicos, das bases de dados em rede e dos recursos digitais complexos (datasets, e-books dinâmicos, streaming, websites integradores), o AACR2r passou por revisão crítica diante de necessidades novas:\n* **Mistura entre Conteúdo e Suporte:** O código classificava documentos pelo seu invólucro físico (Capítulo 2 para livros, Capítulo 7 para vídeos, Capítulo 9 para arquivos de computador), o que motivou aperfeiçoamentos, sem significar incapacidade absoluta de descrever recursos eletrônicos.\n* **Dados e relações:** a transição busca explicitar entidades e vínculos para novos ambientes. AACR2 não determina sozinho arquitetura de banco, indexação web ou visibilidade de todo registro.\n\nEm 2005, o *Joint Steering Committee for Revision of AACR* (JSC) abandonou o projeto de uma terceira edição (AACR3) e decidiu criar uma norma inteiramente nova: o **RDA — Resource Description and Access** (Recursos: Descrição e Acesso), lançado em 2010 e adotado em diferentes calendários e perfis por instituições; não se presume adoção universal ou implantação idêntica sem consultar documentação local.\n\n**Aplicação e recuperação:** Uma biblioteca registra RDA em MARC e outra usa dados conectados. Ambas podem aplicar o padrão de conteúdo. Não há obrigação lógica de converter tudo para RDF só por adotar RDA, nem garantia de que todo campo terá equivalente perfeito. Implantação envolve perfil e política documentada.",
    "checkpointIds": [
      "rt-2-2-1"
    ]
  },
  {
    "id": "sub-2-2-bloco-2",
    "titulo": "O Projeto 3R (*RDA Restructure and Redesign Project*) e o RDA Toolkit Oficial",
    "objetivos": [
      "Relacionar entidades e quatro métodos sem confundir RDA e LRM."
    ],
    "conteudo": "Entre 2017 e 2020, o *RDA Steering Committee* (RSC) promoveu uma reestruturação profunda do padrão denominada **Projeto 3R**:\n1. **Alinhamento Completo com o IFLA LRM:** A reestruturação alinhou o padrão ao IFLA LRM, mas o conjunto de entidades RDA não é uma cópia literal da lista de onze entidades do modelo.\n2. **Abordagem Modular e Flexível:** O novo *RDA Toolkit Oficial* superou a estrutura linear de capítulos, organizando as orientações em torno de **Entidades** (incluindo *RDA Entity, Work, Expression, Manifestation, Item, Agent, Person, Collective Agent, Corporate Body, Family, Nomen, Place* e *Timespan*), **Elementos** e **Instruções de Gravação de Dados**.\n3. **Quatro Métodos de Gravação de Dados do RDA:**\n   * *Dado Não Estruturado:* Texto livre transcrito exatamente como figura na fonte (ex.: nota livre).\n   * *Dado Estruturado:* Texto formatado de acordo com uma regra ou vocabulário formal (ex.: data no formato AAAA-MM-DD).\n   * *Identificador:* Código alfanumérico unívoco atribuído por agência formal (ex.: ISBN, ISSN, DOI, Handle).\n   * *IRI (Internationalized Resource Identifier):* referência à entidade no método de dados conectados. IRI não garante por si permanência, disponibilidade ou veracidade; URI é uma categoria relacionada, mas não deve substituir silenciosamente a terminologia do método.\n\n**Aplicação e recuperação:** Nome livre, ponto de acesso construído, identificador e IRI representam métodos diferentes. Uma IRI pode identificar uma entidade sem ser uma página para leitura humana. Família e entidade coletiva têm tratamento RDA próprio; não substitua o conjunto pelo diagrama de onze entidades LRM.",
    "checkpointIds": [
      "rt-2-2-3",
      "rt-2-2-4"
    ]
  },
  {
    "id": "sub-2-2-bloco-3",
    "titulo": "A Extinção da DGM e a Consagração do Trio MARC 336, 337 e 338",
    "objetivos": [
      "Classificar conteúdo, mídia e suporte em exemplos MARC."
    ],
    "conteudo": "A mais célebre ruptura técnica do RDA com o AACR2r foi a **substituição da DGM por elementos mais específicos no padrão RDA**, sem apagar automaticamente registros legados. No AACR2r, termos soltos entre colchetes inseridos logo após o título próprio — como `[recurso eletrônico]`, `[gravação de som]`, `[filme]` ou `[microforma]` — misturavam de forma incoerente a natureza do conteúdo intelectual com o suporte físico do objeto.\n\nO RDA substituiu a DGM pela decomposição analítica em **três atributos fundamentais independentes**, codificados no formato MARC 21 nos campos 336, 337 e 338:\n\n```tree\nTITLE: Decomposição da DGM no Trio RDA / MARC 21 (Campos 336, 337 e 338)\n- Abolição da DGM do AACR2r | Fim de termos genéricos confusos como [recurso eletrônico]\n  - 1. Tipo de Conteúdo (MARC 336) | O QUE é a mensagem intelectual expressa (ex: texto $b txt, imagem estática $b sti)\n  - 2. Tipo de Mídia (MARC 337) | QUAL dispositivo é exigido para mediar o acesso (ex: não mediado $b n, computador $b c)\n  - 3. Tipo de Suporte (MARC 338) | ONDE fisicamente o recurso está corporificado (ex: volume $b nc, recurso online $b cr)\n```\n\n#### A. Detalhamento Técnico do Trio de Campos MARC 21 / RDA:\n\n| Atributo RDA | Campo MARC 21 | Definição Canônica | Subcampos usuais (não todos obrigatórios em cada ocorrência) | Exemplos Canônicos de Vocabulário |\n| :--- | :--- | :--- | :--- | :--- |\n| **Tipo de Conteúdo (*Content Type*)** | **Campo 336** | Refere-se à forma fundamental de comunicação intelectual ou artística por meio da qual a obra é expressa. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdacontent`) | • `texto` (`$b` txt)<br>• `imagem estática` (`$b` sti)<br>• `música executada` (`$b` prm)<br>• `imagem bidimensional em movimento` (`$b` tdi)<br>• `dados computacionais` (`$b` cod) |\n| **Tipo de Mídia (*Media Type*)** | **Campo 337** | Refere-se ao tipo geral de dispositivo intermediário ou aparelho necessário para visualizar, executar ou acessar o conteúdo do recurso. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdamedia`) | • `não mediado` (`$b` n - não requer aparelho, ex.: livro impresso)<br>• `computador` (`$b` c)<br>• `áudio` (`$b` s)<br>• `vídeo` (`$b` v)<br>• `projetado` (`$b` g) |\n| **Tipo de Suporte (*Carrier Type*)** | **Campo 338** | Refere-se ao formato ou invólucro físico específico que armazena a mídia e o conteúdo. | **`$a`** (termo por extenso)<br>**`$b`** (código)<br>**`$2`** (código da fonte: `rdacarrier`) | • `volume` (`$b` nc - livros encadernados)<br>• `recurso online` (`$b` cr)<br>• `disco de computador` (`$b` cd), distinguindo videodisco (`vd`) e disco de áudio (`sd`)<br>• `folha` (`$b` nb) |\n\n#### Exemplo Prático de Aplicação em Concurso:\n* **Livro Impresso Tradicional da Câmara dos Deputados:**\n  ```text\n  336 ## $a texto $b txt $2 rdacontent\n  337 ## $a não mediado $b n $2 rdamedia\n  338 ## $a volume $b nc $2 rdacarrier\n  ```\n* **E-book em PDF disponível no Portal da Câmara dos Deputados:**\n  ```text\n  336 ## $a texto $b txt $2 rdacontent\n  337 ## $a computador $b c $2 rdamedia\n  338 ## $a recurso online $b cr $2 rdacarrier\n  ```\n\n**Aplicação e recuperação:** Dois recursos contêm texto, um em volume impresso e outro online. O tipo de conteúdo pode ser o mesmo enquanto mídia e suporte mudam. Em MARC, 338 permite registro de termo ou código conforme as regras; não exige universalmente a presença simultânea de $a e $b em toda ocorrência.",
    "checkpointIds": [
      "cp-2-2-1",
      "cp-2-2-3",
      "rt-2-2-2"
    ]
  },
  {
    "id": "sub-2-2-bloco-4",
    "titulo": "O Princípio da Representação e o Fim das Abreviaturas Latinas",
    "objetivos": [
      "Distinguir transcrever e fornecer informação."
    ],
    "conteudo": "O RDA adotou o princípio fundamental denominado **\"Take what you see\"** (*Transcreva o que você vê*): os dados de manifestação devem refletir exatamente como aparecem na fonte de informação, distinguindo transcrição e informação fornecida pelo catalogador:\n\n#### A. Banimento de Expressões Latinas:\n* No AACR2r, na ausência de local de publicação, utilizava-se obrigatoriamente a expressão latina entre colchetes `[S.l.]` (*sine loco*). Na ausência de editor, utilizava-se `[s.n.]` (*sine nomine*).\n* **Na prática RDA pertinente à informação não identificada, não se acrescenta automaticamente a abreviatura latina como no código anterior.** Isso não é proibição de transcrever abreviatura ou expressão latina realmente presente no recurso.\n  * Não havendo local de publicação identificado: registra-se no idioma da agência de catalogação por extenso: `[lugar de publicação não identificado]`.\n  * Não havendo editor identificado: registra-se por extenso: `[editor não identificado]`.\n  * Não havendo data de publicação identificada: registra-se a data provável estimada (ex.: `[entre 2020 e 2025]` ou `[data de publicação não identificada]`).\n\n#### B. Erradicação de Abreviaturas nas Áreas de Descrição:\n* O AACR2r utilizava abreviaturas padronizadas em língua portuguesa (ex.: `3. ed.`, `250 p.`, `il.`, `23 cm`).\n* O RDA preconiza a transcrição **por extenso** ou tal como consta no recurso:\n  * Em vez de `p.`, registra-se `páginas` ou `volumes`.\n  * Em vez de `il.`, registra-se `ilustrações`.\n  * A menção de edição é transcrita exatamente como consta na página de rosto (ex.: se estiver escrito \"Terceira edição revista e ampliada\", transcreve-se textualmente assim).\n\n#### C. Abertura do Registro de Autoria Múltipla (Fim do Limite de 3 Autores):\n* No AACR2r, obras com 4 ou mais autores tinham a menção de responsabilidade cortada obrigatoriamente no primeiro autor seguido de `[et al.]`.\n* No RDA, **a regra geral não impõe limite de corte**: permite e encoraja a transcrição de **todos os autores** nomeados na fonte de informação e a criação de pontos de acesso autorizados para todos eles, garantindo a encontrabilidade de cada pesquisador e a correta atribuição de crédito. As bibliotecas podem definir políticas locais apenas para casos excepcionais com dezenas de colaboradores.\n\n**Aplicação e recuperação:** Se “3. ed.” aparece no recurso, uma regra de transcrição não exige expandir cegamente tudo para “terceira edição”. Informação transcrita, termo de vocabulário e dado fornecido pelo catalogador têm tratamentos diferentes. O slogan “take what you see” ajuda, mas não substitui instrução, opção e perfil aplicáveis.",
    "checkpointIds": [
      "cp-2-2-2"
    ]
  },
  {
    "id": "sub-2-2-bloco-5",
    "titulo": "As Tarefas do Usuário no Ecossistema RDA / IFLA LRM",
    "objetivos": [
      "Aplicar as tarefas de usuário ao serviço."
    ],
    "conteudo": "Toda a arquitetura do RDA é orientada ao atendimento das **cinco tarefas do usuário** definidas pelo *IFLA Library Reference Model* (2017):\n1. **Encontrar (*Find*):** Reunir informações sobre recursos bibliográficos ou entidades de interesse pesquisando por meio de qualquer atributo ou relacionamento.\n2. **Identificar (*Identify*):** Confirmar com precisão que o recurso encontrado corresponde exatamente àquele procurado, distinguindo entre recursos semelhantes (ex.: diferenciar edições de um mesmo texto).\n3. **Selecionar (*Select*):** Escolher o recurso que melhor atende às necessidades do usuário quanto ao formato, idioma, data de publicação ou suporte físico.\n4. **Obter (*Obtain*):** Adquirir ou ter acesso efetivo ao recurso selecionado (seja por empréstimo físico na estante, download de arquivo digital ou acesso via link eletrônico).\n5. **Explorar (*Explore*):** Navegar pelas conexões e relacionamentos entre entidades (descobrir outras obras do mesmo autor, obras sobre o mesmo tema ou outras expressões da mesma criação intelectual).\n\n**Aplicação e recuperação:** Usuário compara português e inglês: seleção depende da necessidade. Confirmar que dois títulos semelhantes representam a mesma entidade é identificação. Explorar relações pode revelar traduções e obras relacionadas. As tarefas não impõem ordem fixa obrigatória de interface.",
    "checkpointIds": []
  },
  {
    "id": "sub-2-2-bloco-6",
    "titulo": "Contrastes autorais: conteúdo, codificação e implementação",
    "objetivos": [
      "Julgar coexistência de padrões e formatos."
    ],
    "conteudo": "| Padrão de Armadilha Cebraspe | Como a Banca Formula o Item Falso | Análise dos exemplos autorais |\n| :--- | :--- | :--- |\n| **Abreviaturas Latinas no RDA** | *\"Ao catalogar uma obra sob o padrão RDA na qual o local de publicação é desconhecido, o catalogador deve inserir a notação [S.l.] na área de publicação.\"* | **ERRADO.** Para local não identificado, a prática descrita usa informação fornecida por extenso; isso não proíbe toda expressão latina presente na fonte. Deve-se registrar por extenso: `[lugar de publicação não identificado]`. |\n| **Substituição do MARC 21** | *\"A adoção da norma RDA implica a revogação e o descarte definitivo do formato MARC 21 pelas bibliotecas, exigindo a transição imediata para bancos de dados nativos em grafos RDF.\"* | **ERRADO.** O MARC 21 dispõe de mapeamentos para muitos elementos RDA, sem que isso assegure equivalência universal e sem perdas (como os campos 336, 337 e 338). O RDA é padrão de conteúdo; o MARC é formato de codificação. |\n| **DGM vs Trio Analítico** | *\"No padrão RDA, a Designação Geral do Material (DGM) foi preservada entre colchetes logo após o título principal, tendo sido apenas complementada pelos campos 336, 337 e 338.\"* | **ERRADO.** O RDA distingue conteúdo, mídia e suporte. Dados legados não desaparecem por decreto, e esses três elementos não esgotam a descrição do recurso. |\n| **Limite de Autores** | *\"De acordo com as diretrizes do RDA, em obras com quatro ou mais autores, o catalogador deve obrigatoriamente registrar apenas o primeiro seguido de et al.\"* | **ERRADO.** Essa regra restritiva era do AACR2r. O RDA eliminou o corte automático obrigatório e permite registrar todos os autores. |\n| **Cabeçalho vs Ponto de Acesso** | *\"No padrão RDA, o termo 'cabeçalho' continua sendo a denominação técnica canônica para o ponto de acesso principal padronizado.\"* | **ERRADO.** O RDA substituiu o termo 'cabeçalho' por **'Ponto de Acesso Autorizado'** (*Authorized Access Point*). |\n\n**Aplicação e recuperação:** Um registro antigo possui DGM e foi enriquecido com 336–338. Isso pode ser decisão de tratamento de legado; não prova que RDA manteve DGM como elemento substituto do trio. Distinguir norma de conteúdo e estado de uma base evita concluir pela aparência de um único registro.",
    "checkpointIds": []
  }
],
fontesTeoria: [
  {
    "id": "lrm",
    "titulo": "IFLA — Library Reference Model (2017)",
    "localizador": "Modelo conceitual; tradução portuguesa disponível no acervo, entidades e relacionamentos.",
    "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf"
  },
  {
    "id": "rda",
    "titulo": "RDA Registry — guia e perguntas frequentes",
    "localizador": "Métodos de registro, elementos e relações; distinguir RDA original e oficial.",
    "url": "https://www.rdaregistry.info/rgAbout/rgFAQ.html"
  },
  {
    "id": "marc",
    "titulo": "Library of Congress — MARC 21 Bibliographic",
    "localizador": "Campos 336, 337 e 338 e vocabulários de tipo.",
    "url": "https://www.loc.gov/marc/bibliographic/"
  }
],
};
