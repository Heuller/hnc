import type { ModuloFilho } from '../../../domain/types';

export const submodulo34: ModuloFilho = {
  id: 'sub-3-4',
  numero: '3.4',
  editalRef: 'Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6',
  preRequisitos: ["sub-1-1","sub-2-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-7",
          "titulo": "BIBFRAME 2.0 e Linked Data",
          "motivo": "Modelagem de tesauros e vocabulários controlados em SKOS e RDF."
      },
      {
          "submoduloId": "sub-6-7",
          "titulo": "IA Aplicada à Informação",
          "motivo": "Uso de taxonomias e ontologias para extração semântica e controle de alucinações em RAG."
      },
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML",
          "motivo": "Vocabulário Controlado da RVBI aplicado a proposições legislativas."
      }
  ],
  titulo: 'Linguagens Documentárias, Tesauros, Ontologias e SKOS',
  antesDeLer: [
  {
    "termo": "Termo e conceito",
    "definicao": "A forma linguística não se confunde com o conceito representado.",
    "exemploBiblioteca": "Siglas iguais podem designar coisas diferentes conforme contexto."
  },
  {
    "termo": "SKOS",
    "definicao": "Vocabulário/modelo RDF para representar sistemas de organização do conhecimento.",
    "exemploBiblioteca": "Um conceito pode ter prefLabel em idiomas diferentes; a restrição é por idioma."
  }
],
  descricaoCurta: "Distinguir variação de termos e conceitos. Usar características para definir e relacionar conceitos. Aplicar equivalência, hierarquia, associação e nota de escopo. Explicar garantia literária e escopo do VCB. Separar tesauro, ontologia e representação SKOS. Mapear vocabulários com tipo e direção explícitos. Julgar orientação linguística sem universalizar. Avaliar indexação automática e seus limites.",
  tempoEstimadoMinutos: 30,
  autoresChave: [
  "Ingetraut Dahlberg — Teoria do conceito (1978)",
  "Maculan, Dias e Lara — Subsídios teórico-metodológicos para a construção de vocabulários controlados",
  "W3C — SKOS Reference",
  "Senado Federal — Vocabulário Controlado Básico"
],
  alertasCebraspe: [
  "Variantes podem ser mantidas como acessos e remissivas. Controle não equivale a apagar a diversidade lexical.",
  "Genérica e partitiva são relações distintas; há limites à representação hierárquica de partes.",
  "O princípio não fornece esse limiar numérico universal. A política e o domínio precisam justificar inclusão."
],
  teoriaDensaMarkdown: "### As Linguagens Documentárias: Natureza, Tipologia e Funções\n\nAs linguagens documentárias são sistemas artificiais de signos criados para padronizar e controlar o vocabulário em unidades de informação, atuando como instrumentos mediadores entre o conteúdo dos documentos e as necessidades de informação dos usuários (Cintra et al., 2002; Lara, 1993).\n\n#### A. A Superação das Limitações da Linguagem Natural\nA linguagem natural humana caracteriza-se pela flexibilidade e expressividade poética, mas é repleta de variações que precisam ser tratadas na recuperação, sem tornar toda busca em linguagem natural inviável:\n1. **Sinonímia:** Múltiplos vocábulos expressando o mesmo conceito (exemplo de variantes em um domínio: uma sigla e sua forma por extenso; juiz e árbitro não devem ser tratados automaticamente como sinônimos jurídicos). Se a busca for feita em linguagem natural pura, o sistema omite documentos que usaram termos correlatos.\n2. **Polissemia e Homografia:** O mesmo significante carregando múltiplos sentidos distintos (ex.: *banco* = instituição financeira vs. assento de madeira; *pena* = sanção penal vs. pluma de ave).\n3. **Ambiguidade Sintática:** Dificuldade em definir papéis gramaticais nas combinações de palavras.\n\nA linguagem documentária busca reduzir ambiguidades e controlar representações estabelecendo **regras estritas de controle terminológico**: seleciona um único descritor preferido para cada conceito, desfaz homônimos por meio de qualificadores entre parênteses e estabelece uma rede explícita de relacionamentos, sujeita a revisão, contexto e política.\n\n**Aplicação e recuperação:** A mesma sigla designa entidades diferentes. Controlar o termo exige contexto e qualificação, sem apagar a existência dos outros sentidos. Linguagem natural e vocabulário controlado podem ser combinados numa busca. O instrumento reduz problemas, não torna qualquer resultado automaticamente pertinente.\n\n### A Teoria do Conceito de Ingetraut Dahlberg\n\nUma contribuição importante para a construção de tesauros e sistemas de classificação modernos é a **Teoria do Conceito** formulada pela filósofa e bibliotecária alemã **Ingetraut Dahlberg** (1978).\n\n#### A. O Triângulo do Conceito de Dahlberg\nPara Dahlberg, o conceito é uma unidade de conhecimento estruturada em três polos integrados:\n* **Referente (*Referent*):** O objeto da realidade material, social ou mental sobre o qual se pensa.\n* **Caracteres (*Characteristics*):** O conjunto de propriedades, atributos e traços distintivos essenciais que definem e singularizam o referente.\n* **Termo / Símbolo (*Sign / Term*):** A representação verbal ou notação formal atribuída para comunicar o conceito na linguagem.\n\n#### B. Definição, características e relações\n\nAnalisar conceitos exige reconhecer referente, características e forma de representação. A comparação de características ajuda a identificar relações genéricas, partitivas e outras relações. Uma definição não é apenas lista de sinônimos; deve delimitar o conceito no domínio.\n\nA separação entre uma coisa e a palavra usada para nomeá-la evita confundir variação linguística e diferença conceitual. Uma classe pode ser subdividida por critérios distintos: misturá-los no mesmo nível cria problemas de coerência. Isso não permite atribuir a Dahlberg uma lista canônica de três princípios sem referência nem proibir toda poli-hierarquia em tesauros e ontologias.\n\n**Exemplo:** “biblioteca parlamentar” contém características de biblioteca e de contexto de atuação. Comparar sua definição à de biblioteca pública exige verificar função, comunidade e âmbito; não basta aproximar os nomes. Em sistemas multifacetados, uma entidade pode ser analisada por diferentes aspectos sem erro lógico automático.\n\n**Aplicação e recuperação:** Duas definições usam palavras parecidas, mas uma inclui apenas bibliotecas de parlamentos e outra todas as bibliotecas de órgãos públicos. O segundo conceito pode ser mais amplo. Decida pelo conjunto de características e extensão, não por semelhança lexical. Não confunda ausência de sinônimos concorrentes com inexistência de variantes registradas.\n\n### A Arquitetura e Normas dos Tesauros Documentários (ISO 25964)\n\nUm **tesauro** é um vocabulário controlado e dinâmico de termos relacionados semântica e genericamente, abrangendo um domínio específico do conhecimento humano (ISO 25964-1, 2011; Meneses, 2005; Currás, 1995).\n\n#### A. A Morfologia e Forma Gramatical dos Descritores\nAs normas internacionais disciplinam a apresentação física dos termos:\n* **Forma Substantivada:** Os descritores devem ser expressos por **substantivos** ou locuções substantivadas (sintagmas nominais). Adjetivos e verbos não devem figurar isoladamente como descritores.\n* **Regra do Número Gramatical (Plural vs. Singular):**\n  * **PLURAL:** Recomendação frequente para **entidades e objetos contáveis**, observada a língua e política, isto é, coisas que respondem à pergunta *\"quantos?\"* (ex.: `Bibliotecas`, `Tribunais`, `Computadores`, `Leis`, `Processos judiciais`).\n  * **SINGULAR:** Recomendação frequente para **conceitos abstratos, propriedades, qualidades, ações, ciências** e **materiais contínuos / massas não contáveis** (ex.: `Democracia`, `Informação`, `Administração pública`, `Direito constitucional`, `Água`, `Petróleo`).\n\n#### B. As Três Relações Semânticas Canônicas\n1. **Relação de Equivalência:**\n   * Estabelece a ligação entre o termo preferido (**descritor**) e os termos não preferidos (**não-descritores**).\n   * Notações: `USE` (remete do termo não preferido para o preferido) e `UP / UF` (*Usado Para / Used For* — registra no descritor quais variantes ele representa).\n   * Abrange: sinônimos puros, termos populares vs. científicos, variantes ortográficas e siglas vs. formas por extenso.\n2. **Relação Hierárquica:**\n   * Expressa a subordinação e supraordenação lógica entre conceitos.\n   * Notações: `TG / BT` (*Termo Geral / Broader Term*) e `TE / NT` (*Termo Específico / Narrower Term*).\n   * Desdobra-se em três subtipos:\n     * *Gênero / Espécie:* A espécie herda todos os caracteres do gênero (ex.: Mamíferos -> Cetáceos).\n     * *Todo / Parte (Partitiva):* Aplica-se a relações todo-parte nas condições delimitadas pelas normas e pelo domínio. Não é qualquer relação de componente: parte que pode integrar diversos tipos de todo pode exigir outra relação. Exemplo deve explicitar o âmbito institucional/geográfico.\n     * *Instancial:* A relação entre uma categoria geral e uma entidade individual própria (ex.: Cidade -> Brasília).\n3. **Relação Associativa:**\n   * Conecta descritores que possuem forte proximidade contextual, mas cuja relação não é hierárquica nem de sinonímia.\n   * Notação: `TR / RT` (*Termo Relacionado / Related Term*).\n   * Relações de: causa e efeito (*Inflação TR Desemprego*), ciência e objeto (*Astronomia TR Estrelas*), processo e agente (*Julgamento TR Juízes*).\n4. **Notas de Escopo (`NE / SN` - *Scope Notes*):**\n   * Instruções breves que definem o alcance semântico do descritor naquele tesauro ou orientam o indexador sobre como e quando aplicá-lo.\n\n**Aplicação e recuperação:** USE orienta de variante ao preferido; TG/TE articulam hierarquia; TR aponta associação; nota delimita uso. Uma roda pode pertencer a diferentes meios de transporte: todo-parte não deve ser automaticamente convertido em hierarquia genérica. Um tesauro pode ter poli-hierarquia quando o modelo/política a admite.\n\n### O Princípio da Garantia Literária e o VCB da RVBI\n\n#### A. A Garantia Literária de E. Wyndham Hulme (1911)\nO princípio da **garantia literária (*literary warrant*)** postula que o vocabulário de um tesauro deve ser extraído diretamente da **literatura documental efetivamente existente** no acervo da unidade. A literatura e os documentos do domínio justificam termos e classes; não se deduz daí um número mínimo universal de documentos. Outras garantias, como uso pelos usuários e necessidades institucionais, podem compor políticas próprias.\n\n#### B. O Vocabulário Controlado Básico (VCB) do Congresso Nacional\nO **VCB** é o tesauro estruturado oficial da **Rede Virtual de Bibliotecas (RVBI)**, gerido sob a liderança técnica da Biblioteca do Senado Federal com cooperação direta da Biblioteca da Câmara dos Deputados:\n* Possui estrutura facetada especializada nas áreas de Direito, Ciência Política, Administração Pública e Economia.\n* Padroniza as remissivas (USE, UP, TG, TE, TR, NE) em conformidade com as particularidades do processo legislativo federal brasileiro.\n* O VCB apoia uniformidade na indexação e recuperação do catálogo coletivo RVBI. Relação com outras iniciativas deve ser verificada na documentação; não se confunde automaticamente com tesauro da Câmara ou com toda indexação do LexML.\n\n**Aplicação e recuperação:** Um tema surge na literatura e nos pedidos de usuários. Isso pode justificar revisão de termos. Não é necessário esperar um número inventado de dez ou cem documentos. A documentação deve registrar decisão e escopo. VCB da RVBI e tesauro da Câmara não devem ser presumidos idênticos por ambos pertencerem ao ambiente legislativo.\n\n### Da Indexação à Web Semântica: Ontologias e o Padrão SKOS\n\nA Ciência da Informação contemporânea estendeu o estudo dos tesauros para os Sistemas de Organização do Conhecimento (SOC / KOS) na Web Semântica:\n\n```timeline\nL | 1. Lista de Termos / Vocabulário Simples | Nível Básico | Relações não estruturadas: definições textuais sem controle de hierarquia ou rede de equivalência\n---> Introdução de Relações de Subordinação\nT | 2. Taxonomia Hierárquica | Estrutura em Árvore | Organização formal por classes e subclasses (relação todo-parte e gênero-espécie)\n---> Controle Terminológico e Equivalência\nTE | 3. Tesauro Documentário | Padrão ISO 25964 | Vocabulário controlado completo com relações de equivalência (USE/UP), hierarquia (TG/TE) e associação (TR)\n---> Modelagem em Grafo RDF\nSK | 4. Padrão SKOS (W3C) | Simple Knowledge Organization System | Representação de tesauros em modelo/vocabulário RDF, não uma única sintaxe de serialização na Web Semântica via conceitos RDF (prefLabel, altLabel, broader, narrower)\n---> Axiomas formais e inferência conforme linguagem/perfil\nO | 5. Ontologia Formal | Padrão W3C (OWL / RDFS) | Especificação formal e explícita com classes, propriedades e axiomas lógicos para inferência automatizada\n```\n\n#### A. Ontologias (Thomas Gruber, 1993)\nGruber é associado à definição de ontologia como especificação explícita de uma conceituação. A formulação ampliada com formalidade e compartilhamento foi consolidada na literatura posterior; não é apresentada aqui como citação literal dele em 1993:\n* **Formal:** É legível e processável por computadores (expressa em lógica de descrição/predicados).\n* **Explícita:** Conceitos, propriedades e axiomas são declarados para tornar compromissos explícitos; isso não garante ausência de todo erro ou ambiguidade de modelagem.\n* **Componentes:** Classes, Indivíduos/Instâncias, Propriedades de Objeto (*Object Properties*), Propriedades de Dados (*Datatype Properties*) e **Axiomas Lógicos** (que permitem inferências automáticas dedutivas).\n\n#### B. O Padrão SKOS (*Simple Knowledge Organization System*) do W3C\nO SKOS é o padrão internacional da Web Semântica desenvolvido para expressar tesauros, esquemas de classificação e taxonomias em grafos RDF interoperáveis:\n* `skos:Concept`: A classe básica que representa cada conceito do tesauro.\n* `skos:prefLabel`: O termo preferido (descritor principal).\n* `skos:altLabel`: O termo alternativo / não-descritor (para relações USE/UP).\n* `skos:broader`: Propriedade RDF para a relação de termo geral (TG).\n* `skos:narrower`: Propriedade RDF para a relação de termo específico (TE).\n* `skos:related`: Propriedade RDF para a relação associativa (TR).\n* `skos:scopeNote`: Propriedade RDF para a nota de escopo (NE).\n\n**Aplicação e recuperação:** Em SKOS, um conceito pode ter no máximo um prefLabel por idioma, mas vários altLabel. Pode haver prefLabel em português e outro em inglês sem violar essa condição. broader não é declarado transitivo como broaderTransitive. Uma serialização Turtle ou JSON-LD pode representar o modelo; SKOS não é nome de uma única sintaxe.\n\n### Critérios de Compatibilização de Vocabulários e Linguagens Documentárias (Edital Item 3.13)\n\nNo contexto de cooperação bibliotecária (como a RVBI, a RBMPF e redes internacionais), distintas instituições frequentemente empregam vocabulários controlados próprios. A **compatibilização de linguagens documentárias** (normatizada pela **ISO 25964-2:2013** — *Interoperability with other vocabularies*) é o processo sistemático de estabelecer correspondências conceituais e mapeamentos entre diferentes linguagens para permitir a busca integrada e o intercâmbio de dados.\n\nOs critérios de precisão, universalidade, univocidade, pertinência e funcionalidade ajudam a analisar o escopo de compatibilização. As descrições abaixo são sínteses didáticas e não transcrição literal da ISO:\n\n| Critério de Compatibilização | O que Mensura / Princípio Teórico | Aplicação Prática no Mapeamento de Vocabulários | Armadilha Típica Cebraspe |\n| :--- | :--- | :--- | :--- |\n| **1. Precisão** | Grau de exatidão e correspondência semântica estrita entre os termos mapeados de duas linguagens. | Mapeamento exato (1:1), em que o conceito da linguagem-fonte cobre precisamente a mesma extensão e compreensão do termo na linguagem-alvo, sem perdas ou acréscimos indevidos. | A banca afirma que a compatibilização admite aproximações grosseiras sem comprometer a precisão do sistema (Errado). |\n| **2. Universalidade** | Amplitude e capacidade do esquema compatibilizado de abranger exaustivamente a totalidade das ramificações temáticas e tipológicas do domínio. | O sistema harmonizado deve cobrir todas as áreas do conhecimento previstas pelo escopo cooperativo, evitando \"zonas cegas\" ou omissão de conceitos estruturantes. | A banca confunde universalidade com generalismo superficial (omissão de termos específicos). |\n| **3. Univocidade** | Princípio da relação biunívoca entre o termo autorizado e o conceito representado (um conceito = um único termo preferido). | Controle de ambiguidade e de termos preferidos no domínio e língua pertinentes. Variantes continuam registradas como acessos; idiomas diferentes podem ter termos preferidos diferentes para o mesmo conceito. | A banca afirma que a univocidade permite múltiplos descritores concorrentes para o mesmo conceito no mesmo nível hierárquico (Errado). |\n| **4. Pertinência** | Grau de relevância, utilidade e adequação direta dos termos compatibilizados às necessidades reais dos usuários da unidade. | Considera utilidade para a comunidade. Um termo histórico ou acadêmico pode ser pertinente quando necessário ao conteúdo ou aos usuários; não é excluído apenas por esse rótulo. | A banca afirma que a pertinência é aferida exclusivamente pela erudição teórica do bibliotecário indexador. |\n| **5. Funcionalidade** | Viabilidade técnica, simplicidade de aplicação, custo-benefício e eficiência operacional da linguagem compatibilizada. | Avalia se o vocabulário integrado é ágil de consultar no OPAC e viável de manter pela equipe sem gerar lentidão ou custos insustentáveis de atualização. | A banca afirma que a compatibilização deve ser buscada a qualquer custo, mesmo que inviabilize o fluxo operacional cotidiano. |\n\n#### A. Tipos de Mapeamento segundo a ISO 25964-2\n* **Mapeamento de Equivalência Exata (*Exact Equivalence*):** Os termos de ambos os vocabulários possuem rigorosamente o mesmo significado e escopo ($A = B$).\n* **Mapeamento de Equivalência Inexata / Quase-equivalência (*Inexact Equivalence*):** Há pequena divergência de nuance ou escopo cultural, mas os termos são tratados como equivalentes para viabilizar a busca cruzada ($A \\approx B$).\n* **Mapeamento hierárquico (mais amplo/mais restrito):** Não se deve confundir relação hierárquica com equivalência exata; a relação de mapeamento deve registrar a direção e o escopo ($A < B$ ou $A > B$).\n* **Mapeamento Composto (*Compound Equivalence*):** Um termo em um vocabulário exige a combinação de dois ou mais termos no outro vocabulário ($A = B + C$).\n\n**Aplicação e recuperação:** Um conceito do vocabulário A é mais amplo que o correspondente em B. Declarar exactMatch para facilitar busca apaga a diferença. Escolha relação adequada e direção. Compatibilização pode usar relações exatas, próximas, hierárquicas ou associativas; não exige transformar todo par em equivalência um-para-um.\n\n### Contrastes autorais sobre vocabulários\n\n| Tema de Prova | Assertiva autoral em análise | Análise conceitual |\n| :--- | :--- | :--- |\n| **Número Gramatical** | *\"Nos tesauros documentários, todos os descritores sem exceção devem ser obrigatoriamente grafados no singular.\"* | **ERRADO.** Entidades contáveis (bibliotecas, tribunais, leis) são grafadas no **PLURAL**. A aplicação também depende da língua, convenções e política; não se transforma essa orientação em regra sem exceção para todo tesauro. |\n| **Garantia Literária** | *\"O princípio da garantia literária determina que o vocabulário de um tesauro deve refletir exclusivamente a vontade subjetiva do bibliotecário indexador.\"* | **ERRADO.** A garantia literária exige que os termos decorram da **literatura técnica real** existente e processada no acervo. |\n| **Compatibilização (Univocidade)** | *\"No processo de compatibilização de linguagens documentárias, o critério da univocidade dispensa a eliminação de termos sinônimos concorrentes no esquema harmonizado.\"* | **ERRADO.** A univocidade exige estritamente a relação biunívoca (um termo preferido para cada conceito), eliminando sinônimos concorrentes. |\n| **Padrão SKOS** | *\"O padrão SKOS é incompatível com o modelo de dados RDF da Web Semântica.\"* | **ERRADO.** O SKOS é **nativamente expresso em RDF** como vocabulário oficial do W3C para sistemas de organização do conhecimento. |\n\n**Aplicação e recuperação:** Uma orientação em língua inglesa não pode ser copiada mecanicamente para singular/plural em todos os idiomas. A pergunta deve delimitar a norma/política. A identificação de equivalência depende do domínio: juiz e árbitro não são sinônimos jurídicos apenas porque ambos resolvem conflitos.\n\n### Indexação Automática e Extração Terminológica sob o Princípio da Univocidade\n\nCom a proliferação exponencial de proposições legislativas em texto integral, diários oficiais e acervos digitais, a **indexação automática** consolidou-se como instrumento indispensável de apoio ao trabalho do catalogador humano:\n\n#### A. Modalidades de Indexação Automática\n1. **Indexação por Extração (*Derived Indexing*):** Os termos de indexação são extraídos diretamente do próprio texto analisado, selecionados com base em métricas estatísticas e morfológicas (frequência de ocorrência segundo a Lei de Zipf, corte de palavras funcionais/stopwords e cálculo ponderado de TF-IDF — *Term Frequency-Inverse Document Frequency*).\n2. **Indexação por Atribuição (*Assigned Indexing*):** O sistema computacional analisa o texto e atribui descritores padronizados oriundos de um vocabulário controlado externo (como o Vocabulário Controlado Básico da RVBI ou o Tesauro do Congresso Nacional). Pode usar regras, dicionários, PLN ou aprendizado de máquina conforme o projeto. Não exige que toda solução reúna simultaneamente ontologia e aprendizado de máquina.\n\n#### B. A Preservação da Univocidade no Processamento Automatizado\nO maior desafio dos algoritmos de indexação automática reside na garantia da **univocidade** (relação biunívoca entre termo autorizado e conceito):\n* **Desambiguação Semântica:** O algoritmo deve desambiguar homógrafos (ex.: *pena* como sanção penal versus *pena* como pluma; *banco* como instituição financeira versus assento físico) por meio da análise de coocorrência léxica e contexto frasal (*word sense disambiguation*).\n* **Controle de Sinônimos:** Expressões variantes e jargões devem ser mapeados automaticamente para o descritor preferido (`USE`), buscando apoiar a recuperação; o mapeamento automático precisa de avaliação e não garante todos os pertinentes sem ruído.\n\n**Aplicação e recuperação:** Um sistema extrai palavra frequente sem analisar contexto. Isso não prova que captou o conceito principal. Outro usa regra para atribuir descritor de tesauro, sem rede neural: ainda pode ser atribuição automática. Avalie falsos positivos, omissões e necessidade de revisão, em vez de certificar univocidade pela tecnologia anunciada.",
  teoriaDidaticaMarkdown: "### Revisão: conceito, termo e relação\n\nControle terminológico organiza variantes e sentidos sem garantir neutralidade ou eliminar todo erro. Dahlberg ajuda a analisar características e definições; não se atribui lista sem fonte. USE/UP: equivalência de termos; TG/TE: hierarquia; TR: associação; nota de escopo: limites de uso. Todo-parte não equivale sempre a gênero/espécie. Garantia literária não fixa número universal de documentos. VCB tem uso documentado na RVBI. SKOS é modelo/vocabulário RDF, não sintaxe única: prefLabel por idioma, altLabel e relações próprias. Ontologias e mapeamentos precisam de axiomas/tipos adequados; automação não garante ausência de ambiguidade.\n",
  checkpoints: [
  {
    "id": "cp-3-4-1",
    "pergunta": "Micro-Checkpoint 1: Relações Semânticas em Tesauros",
    "item": "Nos tesauros documentários estruturados segundo as normas internacionais, a relação entre dois termos na qual um é preferido e outro é não preferido caracteriza a relação de equivalência, expressa formalmente pelas convenções USE e UP (Usado Para).",
    "gabarito": "C",
    "justificativa": "USE remete da forma não preferida à preferida e UP registra as variantes no descritor. A equivalência é delimitada pelo contexto, não identidade universal de toda palavra.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB."
  },
  {
    "id": "cp-3-4-2",
    "pergunta": "Micro-Checkpoint 2: Diferença entre Tesauro e Ontologia",
    "item": "Diferentemente dos tesauros tradicionais, cuja função primordial é apoiar a recuperação documental mediante termos padronizados, as ontologias contêm axiomas formais e propriedades lógicas que viabilizam o raciocínio automatizado por máquinas.",
    "gabarito": "C",
    "justificativa": "Ontologias podem explicitar axiomas e propriedades que apoiam inferência segundo linguagem/motor. Não significa que todo tesauro é incapaz de ter formalização: SKOS também possui semântica e pode combinar-se com OWL.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB."
  },
  {
    "id": "cp-3-4-3",
    "pergunta": "Micro-Checkpoint 3: Critérios de Compatibilização de Vocabulários (Edital 3.13)",
    "item": "Na compatibilização, a univocidade orienta o controle de termos preferidos e sentidos no domínio e idioma pertinentes; a precisão exige examinar a correspondência conceitual, sem forçar todo mapeamento a equivalência exata.",
    "gabarito": "C",
    "justificativa": "Um conceito pode ter rótulos preferidos em idiomas diferentes. Correspondências podem ser exatas, próximas ou hierárquicas; semelhança de palavra não basta para declarar identidade.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB."
  },
  {
    "id": "rt-3-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um termo alternativo registrado deixa de existir no tesauro porque não é o termo preferido para indexação.",
    "gabarito": "E",
    "justificativa": "Variantes podem ser mantidas como acessos e remissivas. Controle não equivale a apagar a diversidade lexical.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar",
    "versao_correta": "Variantes podem permanecer como termos não preferidos ligados ao preferido."
  },
  {
    "id": "rt-3-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo-parte é necessariamente relação hierárquica genérica, sem considerar o domínio ou a possibilidade de a parte integrar outros tipos de todo.",
    "gabarito": "E",
    "justificativa": "Genérica e partitiva são relações distintas; há limites à representação hierárquica de partes.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar",
    "versao_correta": "É preciso distinguir gênero/espécie e todo/parte e observar as condições de representação."
  },
  {
    "id": "rt-3-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em SKOS, um conceito pode ter rótulos preferidos em dois idiomas diferentes, sem violar a condição de no máximo um prefLabel por idioma.",
    "gabarito": "C",
    "justificativa": "A restrição é por idioma, não um único rótulo em toda comunidade linguística.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-3-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A garantia literária impõe número mínimo universal de cem documentos para admitir qualquer descritor.",
    "gabarito": "E",
    "justificativa": "O princípio não fornece esse limiar numérico universal. A política e o domínio precisam justificar inclusão.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar",
    "versao_correta": "A literatura fundamenta a escolha, sem limiar universal de cem documentos."
  },
  {
    "id": "rt-3-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um mapeamento entre conceitos de escopos diferentes pode precisar de relação mais ampla/mais restrita, em vez de equivalência exata.",
    "gabarito": "C",
    "justificativa": "Preservar direção e escopo evita transformar diferenças semânticas em falsos sinônimos.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-3-4-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma atribuição automática por regras de dicionário só pode ser chamada indexação se também usar uma rede neural.",
    "gabarito": "E",
    "justificativa": "Automação admite técnicas diversas. Rede neural não é requisito definidor de todo processo.",
    "fonte": "Dahlberg (1978), Teoria do conceito; Maculan, Dias e Lara, Subsídios teórico-metodológicos para a construção de vocabulários controlados (capítulo no PDF 003017427 do acervo, trechos conferidos por OCR); W3C, SKOS Reference; Senado, VCB.",
    "editalRef": "Bloco D - Item 3.5 a 3.13 e Bloco A - Item 3.6",
    "habilidade": "aplicar",
    "versao_correta": "A indexação automática pode usar regras, dicionários ou outras técnicas conforme o método."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-3-4-fonte-dahlberg",
      "nome": "Ingetraut Dahlberg — Teoria do conceito (1978)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Ingetraut Dahlberg — Teoria do conceito (1978)",
      "ideiaChave": "Conceito, características, definição e relações; artigo original.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-4-fonte-capitulo",
      "nome": "Maculan, Dias e Lara — Subsídios teórico-metodológicos para a construção de vocabulários controlados",
      "ano": "Referência de consulta",
      "obraPrincipal": "Maculan, Dias e Lara — Subsídios teórico-metodológicos para a construção de vocabulários controlados",
      "ideiaChave": "Capítulo em Do tratamento à organização da informação. Arquivo 003017427.pdf do acervo; trechos sobre ISO 25964, equivalência e hierarquia conferidos por OCR. O arquivo não é a CDDir.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-4-fonte-skos",
      "nome": "W3C — SKOS Reference",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — SKOS Reference",
      "ideiaChave": "Rótulos por idioma, relações e mapeamentos; não é simples formato de serialização.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-4-fonte-vcb",
      "nome": "Senado Federal — Vocabulário Controlado Básico",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado Federal — Vocabulário Controlado Básico",
      "ideiaChave": "Escopo e uso na RVBI; consultar versão e notas.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-3-4-4",
      "afirmacao": "A garantia literária impõe número mínimo universal de cem documentos para admitir qualquer descritor.",
      "gabarito": "E",
      "porQue": "O princípio não fornece esse limiar numérico universal. A política e o domínio precisam justificar inclusão."
    },
    {
      "id": "memoria-rt-3-4-5",
      "afirmacao": "Um mapeamento entre conceitos de escopos diferentes pode precisar de relação mais ampla/mais restrita, em vez de equivalência exata.",
      "gabarito": "C",
      "porQue": "Preservar direção e escopo evita transformar diferenças semânticas em falsos sinônimos."
    },
    {
      "id": "memoria-rt-3-4-6",
      "afirmacao": "Uma atribuição automática por regras de dicionário só pode ser chamada indexação se também usar uma rede neural.",
      "gabarito": "E",
      "porQue": "Automação admite técnicas diversas. Rede neural não é requisito definidor de todo processo."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-3-4-bloco-1",
    "titulo": "As Linguagens Documentárias: Natureza, Tipologia e Funções",
    "objetivos": [
      "Distinguir variação de termos e conceitos."
    ],
    "conteudo": "As linguagens documentárias são sistemas artificiais de signos criados para padronizar e controlar o vocabulário em unidades de informação, atuando como instrumentos mediadores entre o conteúdo dos documentos e as necessidades de informação dos usuários (Cintra et al., 2002; Lara, 1993).\n\n#### A. A Superação das Limitações da Linguagem Natural\nA linguagem natural humana caracteriza-se pela flexibilidade e expressividade poética, mas é repleta de variações que precisam ser tratadas na recuperação, sem tornar toda busca em linguagem natural inviável:\n1. **Sinonímia:** Múltiplos vocábulos expressando o mesmo conceito (exemplo de variantes em um domínio: uma sigla e sua forma por extenso; juiz e árbitro não devem ser tratados automaticamente como sinônimos jurídicos). Se a busca for feita em linguagem natural pura, o sistema omite documentos que usaram termos correlatos.\n2. **Polissemia e Homografia:** O mesmo significante carregando múltiplos sentidos distintos (ex.: *banco* = instituição financeira vs. assento de madeira; *pena* = sanção penal vs. pluma de ave).\n3. **Ambiguidade Sintática:** Dificuldade em definir papéis gramaticais nas combinações de palavras.\n\nA linguagem documentária busca reduzir ambiguidades e controlar representações estabelecendo **regras estritas de controle terminológico**: seleciona um único descritor preferido para cada conceito, desfaz homônimos por meio de qualificadores entre parênteses e estabelece uma rede explícita de relacionamentos, sujeita a revisão, contexto e política.\n\n**Aplicação e recuperação:** A mesma sigla designa entidades diferentes. Controlar o termo exige contexto e qualificação, sem apagar a existência dos outros sentidos. Linguagem natural e vocabulário controlado podem ser combinados numa busca. O instrumento reduz problemas, não torna qualquer resultado automaticamente pertinente.",
    "checkpointIds": [
      "rt-3-4-1"
    ]
  },
  {
    "id": "sub-3-4-bloco-2",
    "titulo": "A Teoria do Conceito de Ingetraut Dahlberg",
    "objetivos": [
      "Usar características para definir e relacionar conceitos."
    ],
    "conteudo": "Uma contribuição importante para a construção de tesauros e sistemas de classificação modernos é a **Teoria do Conceito** formulada pela filósofa e bibliotecária alemã **Ingetraut Dahlberg** (1978).\n\n#### A. O Triângulo do Conceito de Dahlberg\nPara Dahlberg, o conceito é uma unidade de conhecimento estruturada em três polos integrados:\n* **Referente (*Referent*):** O objeto da realidade material, social ou mental sobre o qual se pensa.\n* **Caracteres (*Characteristics*):** O conjunto de propriedades, atributos e traços distintivos essenciais que definem e singularizam o referente.\n* **Termo / Símbolo (*Sign / Term*):** A representação verbal ou notação formal atribuída para comunicar o conceito na linguagem.\n\n#### B. Definição, características e relações\n\nAnalisar conceitos exige reconhecer referente, características e forma de representação. A comparação de características ajuda a identificar relações genéricas, partitivas e outras relações. Uma definição não é apenas lista de sinônimos; deve delimitar o conceito no domínio.\n\nA separação entre uma coisa e a palavra usada para nomeá-la evita confundir variação linguística e diferença conceitual. Uma classe pode ser subdividida por critérios distintos: misturá-los no mesmo nível cria problemas de coerência. Isso não permite atribuir a Dahlberg uma lista canônica de três princípios sem referência nem proibir toda poli-hierarquia em tesauros e ontologias.\n\n**Exemplo:** “biblioteca parlamentar” contém características de biblioteca e de contexto de atuação. Comparar sua definição à de biblioteca pública exige verificar função, comunidade e âmbito; não basta aproximar os nomes. Em sistemas multifacetados, uma entidade pode ser analisada por diferentes aspectos sem erro lógico automático.\n\n**Aplicação e recuperação:** Duas definições usam palavras parecidas, mas uma inclui apenas bibliotecas de parlamentos e outra todas as bibliotecas de órgãos públicos. O segundo conceito pode ser mais amplo. Decida pelo conjunto de características e extensão, não por semelhança lexical. Não confunda ausência de sinônimos concorrentes com inexistência de variantes registradas.",
    "checkpointIds": []
  },
  {
    "id": "sub-3-4-bloco-3",
    "titulo": "A Arquitetura e Normas dos Tesauros Documentários (ISO 25964)",
    "objetivos": [
      "Aplicar equivalência, hierarquia, associação e nota de escopo."
    ],
    "conteudo": "Um **tesauro** é um vocabulário controlado e dinâmico de termos relacionados semântica e genericamente, abrangendo um domínio específico do conhecimento humano (ISO 25964-1, 2011; Meneses, 2005; Currás, 1995).\n\n#### A. A Morfologia e Forma Gramatical dos Descritores\nAs normas internacionais disciplinam a apresentação física dos termos:\n* **Forma Substantivada:** Os descritores devem ser expressos por **substantivos** ou locuções substantivadas (sintagmas nominais). Adjetivos e verbos não devem figurar isoladamente como descritores.\n* **Regra do Número Gramatical (Plural vs. Singular):**\n  * **PLURAL:** Recomendação frequente para **entidades e objetos contáveis**, observada a língua e política, isto é, coisas que respondem à pergunta *\"quantos?\"* (ex.: `Bibliotecas`, `Tribunais`, `Computadores`, `Leis`, `Processos judiciais`).\n  * **SINGULAR:** Recomendação frequente para **conceitos abstratos, propriedades, qualidades, ações, ciências** e **materiais contínuos / massas não contáveis** (ex.: `Democracia`, `Informação`, `Administração pública`, `Direito constitucional`, `Água`, `Petróleo`).\n\n#### B. As Três Relações Semânticas Canônicas\n1. **Relação de Equivalência:**\n   * Estabelece a ligação entre o termo preferido (**descritor**) e os termos não preferidos (**não-descritores**).\n   * Notações: `USE` (remete do termo não preferido para o preferido) e `UP / UF` (*Usado Para / Used For* — registra no descritor quais variantes ele representa).\n   * Abrange: sinônimos puros, termos populares vs. científicos, variantes ortográficas e siglas vs. formas por extenso.\n2. **Relação Hierárquica:**\n   * Expressa a subordinação e supraordenação lógica entre conceitos.\n   * Notações: `TG / BT` (*Termo Geral / Broader Term*) e `TE / NT` (*Termo Específico / Narrower Term*).\n   * Desdobra-se em três subtipos:\n     * *Gênero / Espécie:* A espécie herda todos os caracteres do gênero (ex.: Mamíferos -> Cetáceos).\n     * *Todo / Parte (Partitiva):* Aplica-se a relações todo-parte nas condições delimitadas pelas normas e pelo domínio. Não é qualquer relação de componente: parte que pode integrar diversos tipos de todo pode exigir outra relação. Exemplo deve explicitar o âmbito institucional/geográfico.\n     * *Instancial:* A relação entre uma categoria geral e uma entidade individual própria (ex.: Cidade -> Brasília).\n3. **Relação Associativa:**\n   * Conecta descritores que possuem forte proximidade contextual, mas cuja relação não é hierárquica nem de sinonímia.\n   * Notação: `TR / RT` (*Termo Relacionado / Related Term*).\n   * Relações de: causa e efeito (*Inflação TR Desemprego*), ciência e objeto (*Astronomia TR Estrelas*), processo e agente (*Julgamento TR Juízes*).\n4. **Notas de Escopo (`NE / SN` - *Scope Notes*):**\n   * Instruções breves que definem o alcance semântico do descritor naquele tesauro ou orientam o indexador sobre como e quando aplicá-lo.\n\n**Aplicação e recuperação:** USE orienta de variante ao preferido; TG/TE articulam hierarquia; TR aponta associação; nota delimita uso. Uma roda pode pertencer a diferentes meios de transporte: todo-parte não deve ser automaticamente convertido em hierarquia genérica. Um tesauro pode ter poli-hierarquia quando o modelo/política a admite.",
    "checkpointIds": [
      "cp-3-4-1",
      "rt-3-4-2"
    ]
  },
  {
    "id": "sub-3-4-bloco-4",
    "titulo": "O Princípio da Garantia Literária e o VCB da RVBI",
    "objetivos": [
      "Explicar garantia literária e escopo do VCB."
    ],
    "conteudo": "#### A. A Garantia Literária de E. Wyndham Hulme (1911)\nO princípio da **garantia literária (*literary warrant*)** postula que o vocabulário de um tesauro deve ser extraído diretamente da **literatura documental efetivamente existente** no acervo da unidade. A literatura e os documentos do domínio justificam termos e classes; não se deduz daí um número mínimo universal de documentos. Outras garantias, como uso pelos usuários e necessidades institucionais, podem compor políticas próprias.\n\n#### B. O Vocabulário Controlado Básico (VCB) do Congresso Nacional\nO **VCB** é o tesauro estruturado oficial da **Rede Virtual de Bibliotecas (RVBI)**, gerido sob a liderança técnica da Biblioteca do Senado Federal com cooperação direta da Biblioteca da Câmara dos Deputados:\n* Possui estrutura facetada especializada nas áreas de Direito, Ciência Política, Administração Pública e Economia.\n* Padroniza as remissivas (USE, UP, TG, TE, TR, NE) em conformidade com as particularidades do processo legislativo federal brasileiro.\n* O VCB apoia uniformidade na indexação e recuperação do catálogo coletivo RVBI. Relação com outras iniciativas deve ser verificada na documentação; não se confunde automaticamente com tesauro da Câmara ou com toda indexação do LexML.\n\n**Aplicação e recuperação:** Um tema surge na literatura e nos pedidos de usuários. Isso pode justificar revisão de termos. Não é necessário esperar um número inventado de dez ou cem documentos. A documentação deve registrar decisão e escopo. VCB da RVBI e tesauro da Câmara não devem ser presumidos idênticos por ambos pertencerem ao ambiente legislativo.",
    "checkpointIds": [
      "rt-3-4-4"
    ]
  },
  {
    "id": "sub-3-4-bloco-5",
    "titulo": "Da Indexação à Web Semântica: Ontologias e o Padrão SKOS",
    "objetivos": [
      "Separar tesauro, ontologia e representação SKOS."
    ],
    "conteudo": "A Ciência da Informação contemporânea estendeu o estudo dos tesauros para os Sistemas de Organização do Conhecimento (SOC / KOS) na Web Semântica:\n\n```timeline\nL | 1. Lista de Termos / Vocabulário Simples | Nível Básico | Relações não estruturadas: definições textuais sem controle de hierarquia ou rede de equivalência\n---> Introdução de Relações de Subordinação\nT | 2. Taxonomia Hierárquica | Estrutura em Árvore | Organização formal por classes e subclasses (relação todo-parte e gênero-espécie)\n---> Controle Terminológico e Equivalência\nTE | 3. Tesauro Documentário | Padrão ISO 25964 | Vocabulário controlado completo com relações de equivalência (USE/UP), hierarquia (TG/TE) e associação (TR)\n---> Modelagem em Grafo RDF\nSK | 4. Padrão SKOS (W3C) | Simple Knowledge Organization System | Representação de tesauros em modelo/vocabulário RDF, não uma única sintaxe de serialização na Web Semântica via conceitos RDF (prefLabel, altLabel, broader, narrower)\n---> Axiomas formais e inferência conforme linguagem/perfil\nO | 5. Ontologia Formal | Padrão W3C (OWL / RDFS) | Especificação formal e explícita com classes, propriedades e axiomas lógicos para inferência automatizada\n```\n\n#### A. Ontologias (Thomas Gruber, 1993)\nGruber é associado à definição de ontologia como especificação explícita de uma conceituação. A formulação ampliada com formalidade e compartilhamento foi consolidada na literatura posterior; não é apresentada aqui como citação literal dele em 1993:\n* **Formal:** É legível e processável por computadores (expressa em lógica de descrição/predicados).\n* **Explícita:** Conceitos, propriedades e axiomas são declarados para tornar compromissos explícitos; isso não garante ausência de todo erro ou ambiguidade de modelagem.\n* **Componentes:** Classes, Indivíduos/Instâncias, Propriedades de Objeto (*Object Properties*), Propriedades de Dados (*Datatype Properties*) e **Axiomas Lógicos** (que permitem inferências automáticas dedutivas).\n\n#### B. O Padrão SKOS (*Simple Knowledge Organization System*) do W3C\nO SKOS é o padrão internacional da Web Semântica desenvolvido para expressar tesauros, esquemas de classificação e taxonomias em grafos RDF interoperáveis:\n* `skos:Concept`: A classe básica que representa cada conceito do tesauro.\n* `skos:prefLabel`: O termo preferido (descritor principal).\n* `skos:altLabel`: O termo alternativo / não-descritor (para relações USE/UP).\n* `skos:broader`: Propriedade RDF para a relação de termo geral (TG).\n* `skos:narrower`: Propriedade RDF para a relação de termo específico (TE).\n* `skos:related`: Propriedade RDF para a relação associativa (TR).\n* `skos:scopeNote`: Propriedade RDF para a nota de escopo (NE).\n\n**Aplicação e recuperação:** Em SKOS, um conceito pode ter no máximo um prefLabel por idioma, mas vários altLabel. Pode haver prefLabel em português e outro em inglês sem violar essa condição. broader não é declarado transitivo como broaderTransitive. Uma serialização Turtle ou JSON-LD pode representar o modelo; SKOS não é nome de uma única sintaxe.",
    "checkpointIds": [
      "cp-3-4-2",
      "rt-3-4-3"
    ]
  },
  {
    "id": "sub-3-4-bloco-6",
    "titulo": "Critérios de Compatibilização de Vocabulários e Linguagens Documentárias (Edital Item 3.13)",
    "objetivos": [
      "Mapear vocabulários com tipo e direção explícitos."
    ],
    "conteudo": "No contexto de cooperação bibliotecária (como a RVBI, a RBMPF e redes internacionais), distintas instituições frequentemente empregam vocabulários controlados próprios. A **compatibilização de linguagens documentárias** (normatizada pela **ISO 25964-2:2013** — *Interoperability with other vocabularies*) é o processo sistemático de estabelecer correspondências conceituais e mapeamentos entre diferentes linguagens para permitir a busca integrada e o intercâmbio de dados.\n\nOs critérios de precisão, universalidade, univocidade, pertinência e funcionalidade ajudam a analisar o escopo de compatibilização. As descrições abaixo são sínteses didáticas e não transcrição literal da ISO:\n\n| Critério de Compatibilização | O que Mensura / Princípio Teórico | Aplicação Prática no Mapeamento de Vocabulários | Armadilha Típica Cebraspe |\n| :--- | :--- | :--- | :--- |\n| **1. Precisão** | Grau de exatidão e correspondência semântica estrita entre os termos mapeados de duas linguagens. | Mapeamento exato (1:1), em que o conceito da linguagem-fonte cobre precisamente a mesma extensão e compreensão do termo na linguagem-alvo, sem perdas ou acréscimos indevidos. | A banca afirma que a compatibilização admite aproximações grosseiras sem comprometer a precisão do sistema (Errado). |\n| **2. Universalidade** | Amplitude e capacidade do esquema compatibilizado de abranger exaustivamente a totalidade das ramificações temáticas e tipológicas do domínio. | O sistema harmonizado deve cobrir todas as áreas do conhecimento previstas pelo escopo cooperativo, evitando \"zonas cegas\" ou omissão de conceitos estruturantes. | A banca confunde universalidade com generalismo superficial (omissão de termos específicos). |\n| **3. Univocidade** | Princípio da relação biunívoca entre o termo autorizado e o conceito representado (um conceito = um único termo preferido). | Controle de ambiguidade e de termos preferidos no domínio e língua pertinentes. Variantes continuam registradas como acessos; idiomas diferentes podem ter termos preferidos diferentes para o mesmo conceito. | A banca afirma que a univocidade permite múltiplos descritores concorrentes para o mesmo conceito no mesmo nível hierárquico (Errado). |\n| **4. Pertinência** | Grau de relevância, utilidade e adequação direta dos termos compatibilizados às necessidades reais dos usuários da unidade. | Considera utilidade para a comunidade. Um termo histórico ou acadêmico pode ser pertinente quando necessário ao conteúdo ou aos usuários; não é excluído apenas por esse rótulo. | A banca afirma que a pertinência é aferida exclusivamente pela erudição teórica do bibliotecário indexador. |\n| **5. Funcionalidade** | Viabilidade técnica, simplicidade de aplicação, custo-benefício e eficiência operacional da linguagem compatibilizada. | Avalia se o vocabulário integrado é ágil de consultar no OPAC e viável de manter pela equipe sem gerar lentidão ou custos insustentáveis de atualização. | A banca afirma que a compatibilização deve ser buscada a qualquer custo, mesmo que inviabilize o fluxo operacional cotidiano. |\n\n#### A. Tipos de Mapeamento segundo a ISO 25964-2\n* **Mapeamento de Equivalência Exata (*Exact Equivalence*):** Os termos de ambos os vocabulários possuem rigorosamente o mesmo significado e escopo ($A = B$).\n* **Mapeamento de Equivalência Inexata / Quase-equivalência (*Inexact Equivalence*):** Há pequena divergência de nuance ou escopo cultural, mas os termos são tratados como equivalentes para viabilizar a busca cruzada ($A \\approx B$).\n* **Mapeamento hierárquico (mais amplo/mais restrito):** Não se deve confundir relação hierárquica com equivalência exata; a relação de mapeamento deve registrar a direção e o escopo ($A < B$ ou $A > B$).\n* **Mapeamento Composto (*Compound Equivalence*):** Um termo em um vocabulário exige a combinação de dois ou mais termos no outro vocabulário ($A = B + C$).\n\n**Aplicação e recuperação:** Um conceito do vocabulário A é mais amplo que o correspondente em B. Declarar exactMatch para facilitar busca apaga a diferença. Escolha relação adequada e direção. Compatibilização pode usar relações exatas, próximas, hierárquicas ou associativas; não exige transformar todo par em equivalência um-para-um.",
    "checkpointIds": [
      "cp-3-4-3",
      "rt-3-4-5"
    ]
  },
  {
    "id": "sub-3-4-bloco-7",
    "titulo": "Contrastes autorais sobre vocabulários",
    "objetivos": [
      "Julgar orientação linguística sem universalizar."
    ],
    "conteudo": "| Tema de Prova | Assertiva autoral em análise | Análise conceitual |\n| :--- | :--- | :--- |\n| **Número Gramatical** | *\"Nos tesauros documentários, todos os descritores sem exceção devem ser obrigatoriamente grafados no singular.\"* | **ERRADO.** Entidades contáveis (bibliotecas, tribunais, leis) são grafadas no **PLURAL**. A aplicação também depende da língua, convenções e política; não se transforma essa orientação em regra sem exceção para todo tesauro. |\n| **Garantia Literária** | *\"O princípio da garantia literária determina que o vocabulário de um tesauro deve refletir exclusivamente a vontade subjetiva do bibliotecário indexador.\"* | **ERRADO.** A garantia literária exige que os termos decorram da **literatura técnica real** existente e processada no acervo. |\n| **Compatibilização (Univocidade)** | *\"No processo de compatibilização de linguagens documentárias, o critério da univocidade dispensa a eliminação de termos sinônimos concorrentes no esquema harmonizado.\"* | **ERRADO.** A univocidade exige estritamente a relação biunívoca (um termo preferido para cada conceito), eliminando sinônimos concorrentes. |\n| **Padrão SKOS** | *\"O padrão SKOS é incompatível com o modelo de dados RDF da Web Semântica.\"* | **ERRADO.** O SKOS é **nativamente expresso em RDF** como vocabulário oficial do W3C para sistemas de organização do conhecimento. |\n\n**Aplicação e recuperação:** Uma orientação em língua inglesa não pode ser copiada mecanicamente para singular/plural em todos os idiomas. A pergunta deve delimitar a norma/política. A identificação de equivalência depende do domínio: juiz e árbitro não são sinônimos jurídicos apenas porque ambos resolvem conflitos.",
    "checkpointIds": []
  },
  {
    "id": "sub-3-4-bloco-8",
    "titulo": "Indexação Automática e Extração Terminológica sob o Princípio da Univocidade",
    "objetivos": [
      "Avaliar indexação automática e seus limites."
    ],
    "conteudo": "Com a proliferação exponencial de proposições legislativas em texto integral, diários oficiais e acervos digitais, a **indexação automática** consolidou-se como instrumento indispensável de apoio ao trabalho do catalogador humano:\n\n#### A. Modalidades de Indexação Automática\n1. **Indexação por Extração (*Derived Indexing*):** Os termos de indexação são extraídos diretamente do próprio texto analisado, selecionados com base em métricas estatísticas e morfológicas (frequência de ocorrência segundo a Lei de Zipf, corte de palavras funcionais/stopwords e cálculo ponderado de TF-IDF — *Term Frequency-Inverse Document Frequency*).\n2. **Indexação por Atribuição (*Assigned Indexing*):** O sistema computacional analisa o texto e atribui descritores padronizados oriundos de um vocabulário controlado externo (como o Vocabulário Controlado Básico da RVBI ou o Tesauro do Congresso Nacional). Pode usar regras, dicionários, PLN ou aprendizado de máquina conforme o projeto. Não exige que toda solução reúna simultaneamente ontologia e aprendizado de máquina.\n\n#### B. A Preservação da Univocidade no Processamento Automatizado\nO maior desafio dos algoritmos de indexação automática reside na garantia da **univocidade** (relação biunívoca entre termo autorizado e conceito):\n* **Desambiguação Semântica:** O algoritmo deve desambiguar homógrafos (ex.: *pena* como sanção penal versus *pena* como pluma; *banco* como instituição financeira versus assento físico) por meio da análise de coocorrência léxica e contexto frasal (*word sense disambiguation*).\n* **Controle de Sinônimos:** Expressões variantes e jargões devem ser mapeados automaticamente para o descritor preferido (`USE`), buscando apoiar a recuperação; o mapeamento automático precisa de avaliação e não garante todos os pertinentes sem ruído.\n\n**Aplicação e recuperação:** Um sistema extrai palavra frequente sem analisar contexto. Isso não prova que captou o conceito principal. Outro usa regra para atribuir descritor de tesauro, sem rede neural: ainda pode ser atribuição automática. Avalie falsos positivos, omissões e necessidade de revisão, em vez de certificar univocidade pela tecnologia anunciada.",
    "checkpointIds": [
      "rt-3-4-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "dahlberg",
    "titulo": "Ingetraut Dahlberg — Teoria do conceito (1978)",
    "localizador": "Conceito, características, definição e relações; artigo original.",
    "url": "https://revista.ibict.br/ciinf/article/view/115"
  },
  {
    "id": "capitulo",
    "titulo": "Maculan, Dias e Lara — Subsídios teórico-metodológicos para a construção de vocabulários controlados",
    "localizador": "Capítulo em Do tratamento à organização da informação. Arquivo 003017427.pdf do acervo; trechos sobre ISO 25964, equivalência e hierarquia conferidos por OCR. O arquivo não é a CDDir."
  },
  {
    "id": "skos",
    "titulo": "W3C — SKOS Reference",
    "localizador": "Rótulos por idioma, relações e mapeamentos; não é simples formato de serialização.",
    "url": "https://www.w3.org/TR/skos-reference/"
  },
  {
    "id": "vcb",
    "titulo": "Senado Federal — Vocabulário Controlado Básico",
    "localizador": "Escopo e uso na RVBI; consultar versão e notas.",
    "url": "https://adm.senado.leg.br/vcb/vocab/sobre.php"
  }
],
};
