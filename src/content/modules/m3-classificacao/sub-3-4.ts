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
      termo: 'Linguagem Documentária',
      definicao: 'Sistema de signos e vocabulário controlado construído artificialmente para a representação e recuperação de informações.',
      exemploBiblioteca: 'Vocabulário controlado da RVBI que unifica termos para busca entre Câmara, Senado e tribunais superiores.',
    },
    {
      termo: 'Tesauro',
      definicao: 'Vocabulário controlado estruturado por relações semânticas formais: hierárquicas (TG/TE), associativas (TA) e de equivalência (USE/UP).',
      exemploBiblioteca: 'Consulta ao Tesauro do Congresso Nacional para verificar que \'Parlamentar\' tem como Termo Específico \'Deputado Federal\' e \'Senador\'.',
    },
    {
      termo: 'SKOS (Simple Knowledge Organization System)',
      definicao: 'Modelo de dados W3C baseado em RDF para expressar tesauros, taxonomias e esquemas de classificação como Linked Data na web.',
      exemploBiblioteca: 'Publicação do Tesauro da Câmara dos Deputados em formato SKOS para interoperabilidade com o portal de dados abertos.',
    },
    {
      termo: 'Ontologia',
      definicao: 'Especificação formal e explícita de uma conceitualização compartilhada que define classes, propriedades, restrições e axiomas lógicos.',
      exemploBiblioteca: 'Modelagem de ontologia legislativa para inferir automaticamente relações de dependência entre leis ordinárias e a CF/88.',
    },
  ],
  descricaoCurta: 'Tipologia das linguagens documentárias (Cintra, Lara), a Teoria do Conceito de Ingetraut Dahlberg, arquitetura e normas de tesauros (ISO 25964), forma gramatical dos descritores, o Vocabulário Controlado Básico (VCB da RVBI), Ontologias e o padrão SKOS do W3C.',
  tempoEstimadoMinutos: 18,
  autoresChave: ['Ingetraut Dahlberg', 'Estevão de Meneses', 'Emilia Currás', 'Thomas Gruber', 'Anna Maria Marques Cintra', 'Marilda Lopes Ginez de Lara', 'E. Wyndham Hulme'],
  alertasCebraspe: [
    'Relações semânticas canônicas de um tesauro segundo a ISO 25964: (1) Equivalência (USE / UP para sinônimos, variantes ortográficas e quase-sinônimos); (2) Hierárquica (TG / TE para relações de gênero-espécie, todo-parte ou instancial); e (3) Associativa (TR para conexões laterais simétricas que não são hierárquicas nem sinônimas, como causa-efeito, processo-agente ou matéria-produto).',
    'Forma gramatical padronizada dos descritores: Substantivos no PLURAL para entidades contáveis (ex.: Bibliotecas, Tribunais, Leis); substantivos no SINGULAR para conceitos abstratos, propriedades, ações e materiais contínuos/não contáveis (ex.: Democracia, Informação, Justiça, Petróleo). O Cebraspe adora inventar que todos os termos devem estar obrigatoriamente no singular.',
    'Garantia Literária (Literary Warrant de E. Wyndham Hulme, 1911): Princípio segundo o qual nenhum descritor deve ser criado arbitrariamente na imaginação do bibliotecário; a inclusão de um termo no tesauro exige comprovação de que o assunto já foi abordado em documentos concretos da área e presentes no acervo.',
    'O Vocabulário Controlado Básico (VCB) da Rede Virtual de Bibliotecas (RVBI): É o tesauro estruturado oficial coordenado pela Biblioteca do Senado Federal com participação da Câmara dos Deputados e tribunais federais. É a linguagem de indexação hegemônica da produção legislativa e jurídica nacional e o padrão semântico do LexML Brasil.',
    'Diferença estrutural entre Tesauro e Ontologia: Enquanto o tesauro organiza termos lexicais para humanos indexarem e recuperarem textos via descritores, a ontologia é uma base de conhecimento formal legível por computadores, com axiomas lógicos e propriedades que permitem a agentes de Inteligência Artificial realizarem inferências dedutivas automáticas.',
    'O padrão SKOS (Simple Knowledge Organization System) do W3C: Padrão ontológico do Linked Data que converte tesauros e taxonomias tradicionais em grafos RDF interoperáveis, empregando propriedades semânticas como skos:prefLabel, skos:altLabel, skos:broader, skos:narrower e skos:related.',
    'Critérios de Compatibilização de Linguagens Documentárias (Edital Item 3.13): A harmonização e o mapeamento entre vocabulários controlados heterogêneos exigem a observância estrita dos cinco critérios canônicos: (1) Precisão (rigor na equivalência semântica termo a termo, evitando distorções conceituais); (2) Universalidade (cobertura ampla e exaustiva do domínio sem omissão de áreas temáticas essenciais); (3) Univocidade (relação biunívoca entre termo autorizado e conceito, eliminando ambiguidades e polissemias); (4) Pertinência (relevância e adequação direta dos descritores às reais demandas informacionais dos usuários); e (5) Funcionalidade (viabilidade operacional, facilidade de manutenção e eficiência prática no fluxo diário de indexação e busca).',
  ],
  quadroComparativo: {
    titulo: 'As Três Relações Semânticas em Tesauros (ISO 25964) e Critérios de Compatibilização (Edital 3.13)',
    colunas: ['Tipo de Relação / Critério', 'Símbolos / Princípio Operacional', 'Natureza Semântica do Vínculo', 'Exemplo Prático no Contexto Legislativo/Jurídico'],
    linhas: [
      ['Equivalência', 'USE (Usar) / UP (Usado Para) [USE / UF]', 'Conecta termos sinônimos, grafias variantes e quase-sinônimos, elegendo o descritor oficial preferido', 'Crime de Responsabilidade -> UP Impeachment; Impeachment -> USE Crime de Responsabilidade'],
      ['Hierárquica (Gênero/Espécie)', 'TG (Termo Geral) / TE (Termo Específico) [BT / NT]', 'Relação lógica de subordinação em que a espécie compartilha todos os atributos do gênero', 'TG: Proposição Legislativa / TE: Projeto de Lei Complementar'],
      ['Hierárquica (Todo/Parte)', 'TG (Termo Geral) / TE (Termo Específico) [BT / NT]', 'Relação partitiva onde o termo subordinado é uma fração física ou estrutural do todo', 'TG: Congresso Nacional / TE: Câmara dos Deputados'],
      ['Hierárquica (Instancial)', 'TG (Termo Geral) / TE (Termo Específico) [BT / NT]', 'Relação entre uma classe geral de entidades e um exemplar histórico ou geográfico individual', 'TG: Tribunal Superior / TE: Supremo Tribunal Federal'],
      ['Associativa', 'TR (Termo Relacionado) / RT (Related Term)', 'Relação simétrica de afinidade conceitual ou causal que não é hierárquica nem de equivalência', 'Processo Legislativo TR Imunidade Parlamentar; Direito Constitucional TR Controle de Constitucionalidade'],
      ['Nota de Escopo', 'NE (Nota de Escopo) / SN (Scope Note)', 'Instrução textual explicativa que delimita o significado do descritor naquele tesauro ou orienta seu uso', 'NE: Aplica-se exclusivamente a matérias submetidas à deliberação do Plenário'],
      ['Compatibilização: Univocidade e Precisão', 'Critérios do Edital 3.13 (ISO 25964-2)', 'Assegura relação biunívoca (termo = conceito) e exatidão semântica no mapeamento entre vocabulários', 'Mapeamento exato entre descritor do VCB da RVBI e termo de tesauro parlamentar internacional'],
    ],
  },
  teoriaDensaMarkdown: `### 1. As Linguagens Documentárias: Natureza, Tipologia e Funções

As linguagens documentárias são sistemas artificiais de signos criados para padronizar e controlar o vocabulário em unidades de informação, atuando como instrumentos mediadores entre o conteúdo dos documentos e as necessidades de informação dos usuários (Cintra et al., 2002; Lara, 1993).

#### A. A Superação das Limitações da Linguagem Natural
A linguagem natural humana caracteriza-se pela flexibilidade e expressividade poética, mas é repleta de armadilhas que inviabilizam a busca documental precisa:
1. **Sinonímia:** Múltiplos vocábulos expressando o mesmo conceito (ex.: *magistrado*, *juiz*, *árbitro*). Se a busca for feita em linguagem natural pura, o sistema omite documentos que usaram termos correlatos.
2. **Polissemia e Homografia:** O mesmo significante carregando múltiplos sentidos distintos (ex.: *banco* = instituição financeira vs. assento de madeira; *pena* = sanção penal vs. pluma de ave).
3. **Ambiguidade Sintática:** Dificuldade em definir papéis gramaticais nas combinações de palavras.

A linguagem documentária elimina essas distorções estabelecendo **regras estritas de controle terminológico**: seleciona um único descritor preferido para cada conceito, desfaz homônimos por meio de qualificadores entre parênteses e estabelece uma rede unívoca de relacionamentos conceituais.

---

### 2. A Teoria do Conceito de Ingetraut Dahlberg

A base epistemológica mais sólida para a construção de tesauros e sistemas de classificação modernos é a **Teoria do Conceito** formulada pela filósofa e bibliotecária alemã **Ingetraut Dahlberg** (1978).

#### A. O Triângulo do Conceito de Dahlberg
Para Dahlberg, o conceito é uma unidade de conhecimento estruturada em três polos integrados:
* **Referente (*Referent*):** O objeto da realidade material, social ou mental sobre o qual se pensa.
* **Caracteres (*Characteristics*):** O conjunto de propriedades, atributos e traços distintivos essenciais que definem e singularizam o referente.
* **Termo / Símbolo (*Sign / Term*):** A representação verbal ou notação formal atribuída para comunicar o conceito na linguagem.

#### B. Os Três Princípios Básicos de Eleição Conceitual
Ao construir categorias e classes em linguagens documentárias, o catalogador deve respeitar os três princípios seminais de Dahlberg:
1. **Irredutibilidade:** Cada conceito deve ser decomposto e analisado em suas características lógicas fundamentais, até alcançar predicados irredutíveis.
2. **Completude:** O sistema conceitual deve cobrir a totalidade das propriedades essenciais e das ramificações temáticas do domínio delimitado.
3. **Mútua Exclusividade:** Classes e descritores situados no mesmo nível hierárquico não devem sobrepor-se semanticamente, garantindo que um mesmo elemento não pertença simultaneamente a duas espécies coordenadas da mesma família.

---

### 3. A Arquitetura e Normas dos Tesauros Documentários (ISO 25964)

Um **tesauro** é um vocabulário controlado e dinâmico de termos relacionados semântica e genericamente, abrangendo um domínio específico do conhecimento humano (ISO 25964-1, 2011; Meneses, 2005; Currás, 1995).

#### A. A Morfologia e Forma Gramatical dos Descritores
As normas internacionais disciplinam a apresentação física dos termos:
* **Forma Substantivada:** Os descritores devem ser expressos por **substantivos** ou locuções substantivadas (sintagmas nominais). Adjetivos e verbos não devem figurar isoladamente como descritores.
* **Regra do Número Gramatical (Plural vs. Singular):**
  * **PLURAL:** Utilizado obrigatoriamente para designar **entidades e objetos contáveis**, isto é, coisas que respondem à pergunta *"quantos?"* (ex.: \`Bibliotecas\`, \`Tribunais\`, \`Computadores\`, \`Leis\`, \`Processos judiciais\`).
  * **SINGULAR:** Utilizado obrigatoriamente para designar **conceitos abstratos, propriedades, qualidades, ações, ciências** e **materiais contínuos / massas não contáveis** (ex.: \`Democracia\`, \`Informação\`, \`Administração pública\`, \`Direito constitucional\`, \`Água\`, \`Petróleo\`).

#### B. As Três Relações Semânticas Canônicas
1. **Relação de Equivalência:**
   * Estabelece a ligação entre o termo preferido (**descritor**) e os termos não preferidos (**não-descritores**).
   * Notações: \`USE\` (remete do termo não preferido para o preferido) e \`UP / UF\` (*Usado Para / Used For* — registra no descritor quais variantes ele representa).
   * Abrange: sinônimos puros, termos populares vs. científicos, variantes ortográficas e siglas vs. formas por extenso.
2. **Relação Hierárquica:**
   * Expressa a subordinação e supraordenação lógica entre conceitos.
   * Notações: \`TG / BT\` (*Termo Geral / Broader Term*) e \`TE / NT\` (*Termo Específico / Narrower Term*).
   * Desdobra-se em três subtipos:
     * *Gênero / Espécie:* A espécie herda todos os caracteres do gênero (ex.: Mamíferos -> Cetáceos).
     * *Todo / Parte (Partitiva):* O termo específico é uma fração estrutural ou geográfica do termo geral (ex.: Poder Legislativo -> Câmara dos Deputados).
     * *Instancial:* A relação entre uma categoria geral e uma entidade individual própria (ex.: Cidade -> Brasília).
3. **Relação Associativa:**
   * Conecta descritores que possuem forte proximidade contextual, mas cuja relação não é hierárquica nem de sinonímia.
   * Notação: \`TR / RT\` (*Termo Relacionado / Related Term*).
   * Relações de: causa e efeito (*Inflação TR Desemprego*), ciência e objeto (*Astronomia TR Estrelas*), processo e agente (*Julgamento TR Juízes*).
4. **Notas de Escopo (\`NE / SN\` - *Scope Notes*):**
   * Instruções breves que definem o alcance semântico do descritor naquele tesauro ou orientam o indexador sobre como e quando aplicá-lo.

---

### 4. O Princípio da Garantia Literária e o VCB da RVBI

#### A. A Garantia Literária de E. Wyndham Hulme (1911)
O princípio da **garantia literária (*literary warrant*)** postula que o vocabulário de um tesauro deve ser extraído diretamente da **literatura documental efetivamente existente** no acervo da unidade. Um novo descritor só é admitido no vocabulário quando passa a existir uma massa crítica de documentos que justifique sua criação.

#### B. O Vocabulário Controlado Básico (VCB) do Congresso Nacional
O **VCB** é o tesauro estruturado oficial da **Rede Virtual de Bibliotecas (RVBI)**, gerido sob a liderança técnica da Biblioteca do Senado Federal com cooperação direta da Biblioteca da Câmara dos Deputados:
* Possui estrutura facetada especializada nas áreas de Direito, Ciência Política, Administração Pública e Economia.
* Padroniza as remissivas (USE, UP, TG, TE, TR, NE) em conformidade com as particularidades do processo legislativo federal brasileiro.
* Serve como alicerce terminológico do **Portal LexML Brasil**, permitindo que leis, atos administrativos e acórdãos judiciais sejam recuperados sob os mesmos descritores conceituais padronizados.

---

### 5. Da Indexação à Web Semântica: Ontologias e o Padrão SKOS

A Ciência da Informação contemporânea estendeu o estudo dos tesauros para os Sistemas de Organização do Conhecimento (SOC / KOS) na Web Semântica:

\`\`\`timeline
L | 1. Lista de Termos / Vocabulário Simples | Nível Básico | Relações não estruturadas: definições textuais sem controle de hierarquia ou rede de equivalência
---> Introdução de Relações de Subordinação
T | 2. Taxonomia Hierárquica | Estrutura em Árvore | Organização formal por classes e subclasses (relação todo-parte e gênero-espécie)
---> Controle Terminológico e Equivalência
TE | 3. Tesauro Documentário | Padrão ISO 25964 | Vocabulário controlado completo com relações de equivalência (USE/UP), hierarquia (TG/TE) e associação (TR)
---> Modelagem em Grafo RDF
SK | 4. Padrão SKOS (W3C) | Simple Knowledge Organization System | Serialização de tesauros na Web Semântica via conceitos RDF (prefLabel, altLabel, broader, narrower)
---> Formalização Lógica Completa e Inferência
O | 5. Ontologia Formal | Padrão W3C (OWL / RDFS) | Especificação formal e explícita com classes, propriedades e axiomas lógicos para inferência automatizada
\`\`\`

#### A. Ontologias (Thomas Gruber, 1993)
Gruber definiu ontologia como *"uma especificação formal e explícita de uma conceituação compartilhada"*:
* **Formal:** É legível e processável por computadores (expressa em lógica de descrição/predicados).
* **Explícita:** Conceitos, propriedades e axiomas são declarados abertamente sem ambiguidades.
* **Componentes:** Classes, Indivíduos/Instâncias, Propriedades de Objeto (*Object Properties*), Propriedades de Dados (*Datatype Properties*) e **Axiomas Lógicos** (que permitem inferências automáticas dedutivas).

#### B. O Padrão SKOS (*Simple Knowledge Organization System*) do W3C
O SKOS é o padrão internacional da Web Semântica desenvolvido para expressar tesauros, esquemas de classificação e taxonomias em grafos RDF interoperáveis:
* \`skos:Concept\`: A classe básica que representa cada conceito do tesauro.
* \`skos:prefLabel\`: O termo preferido (descritor principal).
* \`skos:altLabel\`: O termo alternativo / não-descritor (para relações USE/UP).
* \`skos:broader\`: Propriedade RDF para a relação de termo geral (TG).
* \`skos:narrower\`: Propriedade RDF para a relação de termo específico (TE).
* \`skos:related\`: Propriedade RDF para a relação associativa (TR).
* \`skos:scopeNote\`: Propriedade RDF para a nota de escopo (NE).

---

### 6. Critérios de Compatibilização de Vocabulários e Linguagens Documentárias (Edital Item 3.13)

No contexto de cooperação bibliotecária (como a RVBI, a RBMPF e redes internacionais), distintas instituições frequentemente empregam vocabulários controlados próprios. A **compatibilização de linguagens documentárias** (normatizada pela **ISO 25964-2:2013** — *Interoperability with other vocabularies*) é o processo sistemático de estabelecer correspondências conceituais e mapeamentos entre diferentes linguagens para permitir a busca integrada e o intercâmbio de dados.

O Edital nº 1/2026 (Cargo 5, Bloco D, item 3.13) elenca expressamente **cinco critérios fundamentais** que norteiam o processo de compatibilização:

| Critério de Compatibilização | O que Mensura / Princípio Teórico | Aplicação Prática no Mapeamento de Vocabulários | Armadilha Típica Cebraspe |
| :--- | :--- | :--- | :--- |
| **1. Precisão** | Grau de exatidão e correspondência semântica estrita entre os termos mapeados de duas linguagens. | Mapeamento exato (1:1), em que o conceito da linguagem-fonte cobre precisamente a mesma extensão e compreensão do termo na linguagem-alvo, sem perdas ou acréscimos indevidos. | A banca afirma que a compatibilização admite aproximações grosseiras sem comprometer a precisão do sistema (Errado). |
| **2. Universalidade** | Amplitude e capacidade do esquema compatibilizado de abranger exaustivamente a totalidade das ramificações temáticas e tipológicas do domínio. | O sistema harmonizado deve cobrir todas as áreas do conhecimento previstas pelo escopo cooperativo, evitando "zonas cegas" ou omissão de conceitos estruturantes. | A banca confunde universalidade com generalismo superficial (omissão de termos específicos). |
| **3. Univocidade** | Princípio da relação biunívoca entre o termo autorizado e o conceito representado (um conceito = um único termo preferido). | Eliminação total de sinônimos concorrentes, homógrafos não qualificados e ambiguidades. Cada termo preferido na linguagem harmonizada remete a um e apenas um conceito. | A banca afirma que a univocidade permite múltiplos descritores concorrentes para o mesmo conceito no mesmo nível hierárquico (Errado). |
| **4. Pertinência** | Grau de relevância, utilidade e adequação direta dos termos compatibilizados às necessidades reais dos usuários da unidade. | Impede a introdução de termos obsoletos, puramente acadêmicos ou descolados do perfil de busca dos parlamentares e cidadãos. | A banca afirma que a pertinência é aferida exclusivamente pela erudição teórica do bibliotecário indexador. |
| **5. Funcionalidade** | Viabilidade técnica, simplicidade de aplicação, custo-benefício e eficiência operacional da linguagem compatibilizada. | Avalia se o vocabulário integrado é ágil de consultar no OPAC e viável de manter pela equipe sem gerar lentidão ou custos insustentáveis de atualização. | A banca afirma que a compatibilização deve ser buscada a qualquer custo, mesmo que inviabilize o fluxo operacional cotidiano. |

#### A. Tipos de Mapeamento segundo a ISO 25964-2
* **Mapeamento de Equivalência Exata (*Exact Equivalence*):** Os termos de ambos os vocabulários possuem rigorosamente o mesmo significado e escopo ($A = B$).
* **Mapeamento de Equivalência Inexata / Quase-equivalência (*Inexact Equivalence*):** Há pequena divergência de nuance ou escopo cultural, mas os termos são tratados como equivalentes para viabilizar a busca cruzada ($A \\approx B$).
* **Mapeamento de Equivalência Parcial / Hierárquica (*Partial Equivalence*):** Um termo em uma linguagem é mais amplo ou mais restrito que o termo correspondente na outra linguagem ($A < B$ ou $A > B$).
* **Mapeamento Composto (*Compound Equivalence*):** Um termo em um vocabulário exige a combinação de dois ou mais termos no outro vocabulário ($A = B + C$).

---

### 7. Padrões de Cobrança e Armadilhas do Cebraspe em Provas

| Tema de Prova | Como o Cebraspe Formula o Item Falso | Fundamentação Técnica Oficial (Gabarito) |
| :--- | :--- | :--- |
| **Número Gramatical** | *"Nos tesauros documentários, todos os descritores sem exceção devem ser obrigatoriamente grafados no singular."* | **ERRADO.** Entidades contáveis (bibliotecas, tribunais, leis) são grafadas no **PLURAL**. Apenas termos abstratos e massas não contáveis ficam no singular. |
| **Garantia Literária** | *"O princípio da garantia literária determina que o vocabulário de um tesauro deve refletir exclusivamente a vontade subjetiva do bibliotecário indexador."* | **ERRADO.** A garantia literária exige que os termos decorram da **literatura técnica real** existente e processada no acervo. |
| **Compatibilização (Univocidade)** | *"No processo de compatibilização de linguagens documentárias, o critério da univocidade dispensa a eliminação de termos sinônimos concorrentes no esquema harmonizado."* | **ERRADO.** A univocidade exige estritamente a relação biunívoca (um termo preferido para cada conceito), eliminando sinônimos concorrentes. |
| **Padrão SKOS** | *"O padrão SKOS é incompatível com o modelo de dados RDF da Web Semântica."* | **ERRADO.** O SKOS é **nativamente expresso em RDF** como vocabulário oficial do W3C para sistemas de organização do conhecimento. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **BIBFRAME 2.0 e Linked Data (sub-2-7):** Modelagem de tesauros e vocabulários controlados em SKOS e RDF.
* **IA Aplicada à Informação (sub-6-7):** Uso de taxonomias e ontologias para extração semântica e controle de alucinações em RAG.
* **Fontes Jurídicas e LexML (sub-4-3):** Vocabulário Controlado da RVBI aplicado a proposições legislativas.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Linguagens Documentárias**, com destaque para os **Tesauros**, estruturam o vocabulário e a interoperabilidade semântica nos sistemas de informação:
1. **O que é um Tesauro (ISO 25964 e ANSI/NISO Z39.19):**
   - Vocabulário controlado e dinâmico de termos relacionados formal e semanticamente, cobrindo de modo exaustivo um domínio específico do conhecimento.
   - **Relações Semânticas Canônicas:**
     - **Equivalência (Sinonímia):** \`USE\` (Termo Autorizado) e \`UP\` (*Usado Para* / Não autorizado). Controla sinônimos, variantes ortográficas e siglas.
     - **Hierárquica (Gênero-Espécie e Todo-Parte):** \`TG\` (*Termo Geral* / *Broader Term* - BT) e \`TE\` (*Termo Específico* / *Narrower Term* - NT).
     - **Associativa (Afinidade Conceitual):** \`TA\` (*Termo Associado* / *Related Term* - RT). Liga termos que não são sinônimos nem pertencem à mesma hierarquia, mas compartilham relação de causa-efeito, processo-produto ou instrumento.
     - **Notas de Escopo (\`NE\` / *Scope Note*):** Definem a acepção precisa em que o termo é utilizado naquele sistema e orientam o indexador.
2. **Estrutura de Apresentação:**
   - Alfabética (ordem A-Z de termos e referências cruzadas), Sistemática (agrupamentos temáticos hierárquicos) e Gráfica (árvores conceituais).
3. **SKOS (*Simple Knowledge Organization System* - W3C):**
   - Padrão da Web Semântica baseado em RDF para representar tesauros, taxonomias e esquemas de classificação no ambiente de Dados Conectados (*Linked Data*). Propriedades canônicas: \`skos:prefLabel\` (termo preferido), \`skos:altLabel\` (sinônimo/termo alternativo), \`skos:broader\` (TG), \`skos:narrower\` (TE) e \`skos:related\` (TA).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Relação de Equivalência no VCB da RVBI):** O usuário busca no catálogo da Câmara por *"Direito Cibernético"*. O tesauro da Rede RVBI contém a relação de equivalência:
  \`DIREITO CIBERNÉTICO\`
  \`USE DIREITO DA INFORMÁTICA\`
  O sistema redireciona automaticamente a busca para o termo autorizado \`DIREITO DA INFORMÁTICA\`, onde estão reunidas todas as leis e doutrinas.
- **Cenário 2 (Relação Hierárquica na Tramitação de Projetos):** Ao indexar a regulamentação do trabalho intermitente, o bibliotecário utiliza o termo específico \`TRABALHO INTERMITENTE\`. No tesauro, ele verifica que \`TG DIREITO DO TRABALHO\`. Caso um parlamentar busque genericamente por Direito do Trabalho com expansão hierárquica ativada, a busca recupera também todos os termos específicos vinculados.
- **Cenário 3 (Exportação de Tesauro em SKOS para o Portal de Dados Abertos):** O CEDI disponibiliza o Vocabulário Controlado da Câmara dos Deputados em formato \`SKOS/RDF\`, permitindo que pesquisadores universitários de IA importem toda a hierarquia jurídica para treinar algoritmos semânticos de análise legislativa.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Relação no Tesauro | Sigla em Português | Sigla em Inglês | Função Exata na Indexação |
| :--- | :--- | :--- | :--- |
| **Equivalência (Preferido)** | \`USE\` | \`USE\` | Remete do termo proibido/sinônimo para o termo adotado |
| **Equivalência (Recíproca)** | \`UP\` (Usado Para) | \`UF\` (Used For) | Indica os termos sinônimos que o termo autorizado substitui |
| **Hierárquica (Geral)** | \`TG\` (Termo Geral) | \`BT\` (Broader Term) | Conceito mais amplo na taxonomia (gênero/todo) |
| **Hierárquica (Específico)** | \`TE\` (Termo Específico) | \`NT\` (Narrower Term) | Conceito subordinado mais detalhado (espécie/parte) |
| **Associativa** | \`TA\` (Termo Associado) | \`RT\` (Related Term) | Relação de proximidade semântica não hierárquica |
| **Nota de Escopo** | \`NE\` | \`SN\` (Scope Note) | Esclarece o sentido, restrição ou histórico do termo |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca de Relações Hierárquicas por Associativas:** A banca diz que *"a relação entre Doença e Medicamento é hierárquica do tipo TG/TE"*. **Gabarito: ERRADO.** Medicamento não é uma espécie de doença; a relação entre ambos é puramente **associativa (TA)**.
- **Bidirecionalidade Obrigatória:** Toda relação em um tesauro deve ser estritamente recíproca. Se o termo A tem \`TG B\`, obrigatoriamente o termo B deve ter \`TE A\`. Se A tem \`USE B\`, B deve ter \`UP A\`. A ausência de reciprocidade é erro estrutural do vocabulário.
- **Equivalência no SKOS:** O Cebraspe testa as propriedades SKOS: \`skos:prefLabel\` corresponde ao termo autorizado e \`skos:altLabel\` corresponde ao termo não autorizado (\`UP\`).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ISO 25964-1:2011.** *Information and documentation — Thesauri and interoperability with other vocabularies — Part 1: Thesauri for information retrieval*. Genebra: ISO, 2011.
- **ANSI/NISO Z39.19-2005 (R2010).** *Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies*. Baltimore: NISO, 2010.
- **GOMES, Hagar Espanha (Coord.).** *Manual de elaboração de tesauros monolíngues*. Brasília: Programa Nacional de Bibliotecas das Instituições de Ensino Superior, 1990.
- **W3C.** *SKOS Simple Knowledge Organization System Reference*. W3C Recommendation, 2009.
- **MOREIRO GONZÁLEZ, José Antonio.** *Linguagens documentárias e vocabulários controlados para indexação e recuperação da informação*. São Paulo: Ed. Senac São Paulo, 2011.`,
  checkpoints: [
    {
      id: 'cp-3-4-1',
      pergunta: 'Micro-Checkpoint 1: Relações Semânticas em Tesauros',
      item: 'Nos tesauros documentários estruturados segundo as normas internacionais, a relação entre dois termos na qual um é preferido e outro é não preferido caracteriza a relação de equivalência, expressa formalmente pelas convenções USE e UP (Usado Para).',
      gabarito: 'C',
      justificativa: 'Correto! A relação de equivalência conecta termos sinônimos, variantes ortográficas e quase-sinônimos, estabelecendo o descritor autorizado.',
    },
    {
      id: 'cp-3-4-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Tesauro e Ontologia',
      item: 'Diferentemente dos tesauros tradicionais, cuja função primordial é apoiar a recuperação documental mediante termos padronizados, as ontologias contêm axiomas formais e propriedades lógicas que viabilizam o raciocínio automatizado por máquinas.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a distinção ontológica fundamental cobrada pelo Cebraspe entre instrumentos terminológicos (tesauros) e modelos conceituais da Web Semântica e inteligência artificial (ontologias).',
    },
    {
      id: 'cp-3-4-3',
      pergunta: 'Micro-Checkpoint 3: Critérios de Compatibilização de Vocabulários (Edital 3.13)',
      item: 'No processo de compatibilização de linguagens documentárias, o critério da univocidade assegura que cada conceito seja representado por um único descritor autorizado no vocabulário harmonizado, ao passo que o critério da precisão afere o rigor e a exatidão da correspondência semântica entre os termos mapeados de diferentes esquemas.',
      gabarito: 'C',
      justificativa: 'Certo! Univocidade garante a relação biunívoca entre significante e significado (eliminando duplicidade de descritores autorizados para o mesmo conceito), enquanto a precisão mede o rigor da correspondência conceitual (exatidão de mapeamento 1:1) entre vocabulários compatibilizados (ISO 25964-2 e Edital 3.13).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-4-1',
        periodo: '1911',
        disciplina: 'Princípios Terminológicos',
        focoPrincipal: 'E. Wyndham Hulme formula o Princípio da Garantia Literária (Literary Warrant) para sistemas de classificação e linguagens documentárias.',
        figuraChave: 'E. Wyndham Hulme',
      },
      {
        id: 'tl-3-4-2',
        periodo: '1978',
        disciplina: 'Epistemologia Documentária',
        focoPrincipal: 'Ingetraut Dahlberg publica a Teoria do Conceito, estabelecendo o triângulo Referente-Caracteres-Termo e os princípios de irredutibilidade e completude.',
        figuraChave: 'Ingetraut Dahlberg',
      },
      {
        id: 'tl-3-4-3',
        periodo: '2009 / 2011',
        disciplina: 'Web Semântica e Normatização',
        focoPrincipal: 'Publicação do padrão SKOS pelo W3C e lançamento da norma internacional ISO 25964 (Thesauri and interoperability with other vocabularies).',
        figuraChave: 'W3C e ISO Technical Committee 46',
      },
    ],
    autores: [
      {
        id: 'aut-3-4-1',
        nome: 'Ingetraut Dahlberg',
        ano: 1978,
        obraPrincipal: 'Teoria do Conceito',
        ideiaChave: 'Pioneira da Classificação moderna; estruturou a unidade de conhecimento como tríade de referente, caracteres essenciais e termo linguístico.',
        chipPegadinha: 'Postulou os princípios de completude, irredutibilidade e mútua exclusividade das classes.',
      },
      {
        id: 'aut-3-4-2',
        nome: 'Thomas Gruber',
        ano: 1993,
        obraPrincipal: 'A Translation Approach to Portable Ontology Specifications',
        ideiaChave: 'Cientista da computação que formulou a definição canônica de ontologia como especificação formal e explícita de uma conceituação compartilhada.',
        chipPegadinha: 'Ontologias contêm axiomas para inferência de máquina; tesauros são para busca de documentos por humanos.',
      },
      {
        id: 'aut-3-4-3',
        nome: 'E. Wyndham Hulme',
        ano: 1911,
        obraPrincipal: 'Principles of Book Classification',
        ideiaChave: 'Formulou a Garantia Literária: descritores devem emergir dos documentos reais processados no acervo, e não de conjecturas abstratas.',
        chipPegadinha: 'A garantia literária é baseada no acervo documental concreto da instituição.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-4-1',
        afirmacao: 'Em um tesauro documentário, a remissiva do tipo "Ver também" ou TR (Termo Relacionado) estabelece um vínculo de subordinação hierárquica entre duas classes.',
        gabarito: 'E',
        porQue: 'A remissiva TR estabelece uma relação ASSOCIATIVA e simétrica fora do eixo hierárquico. Vínculos de subordinação hierárquica utilizam as tags TG e TE.',
      },
      {
        id: 'peg-3-4-2',
        afirmacao: 'O Vocabulário Controlado Básico (VCB) da RVBI é um tesauro internacional desenhado pela Library of Congress para a classificação exclusiva de livros de literatura inglesa.',
        gabarito: 'E',
        porQue: 'O VCB é o tesauro oficial da Rede Virtual de Bibliotecas do Congresso Nacional brasileiro (Senado e Câmara), especializado em Direito e Ciências Sociais.',
      },
      {
        id: 'peg-3-4-3',
        afirmacao: 'O padrão SKOS é restrito a dicionários terminológicos impressos, não admitindo integração com ontologias nem representações em grafos RDF na Web.',
        gabarito: 'E',
        porQue: 'O SKOS é exatamente o padrão do W3C voltado à Web Semântica e formulado nativamente em RDF para representação de tesauros e taxonomias em grafos de dados abertos.',
      },
    ],
  },
};
