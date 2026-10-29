import type { ModuloFilho } from '../../../domain/types';

export const submodulo23: ModuloFilho = {
  id: 'sub-2-3',
  numero: '2.3',
  editalRef: 'Bloco D - Item 1.1 e 1.2',
  preRequisitos: ["sub-2-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-5",
          "titulo": "Sistemas Informacionais e Bancos de Dados",
          "motivo": "Distinção crucial entre modelagem de domínio bibliográfico (LRM) e modelagem de dados (MER)."
      },
      {
          "submoduloId": "sub-2-7",
          "titulo": "BIBFRAME 2.0 e Linked Data",
          "motivo": "Mapeamento WEMI para as classes centrais do BIBFRAME (Work, Instance, Item)."
      }
  ],
  titulo: 'Modelos Conceituais: A Família FRBR e o IFLA LRM',
  antesDeLer: [
  {
    "termo": "WEMI",
    "definicao": "Obra, expressão, manifestação e item distinguem níveis de identidade bibliográfica.",
    "exemploBiblioteca": "Tradução e nova edição não são automaticamente a mesma operação conceitual."
  },
  {
    "termo": "Nomen",
    "definicao": "Associação entre entidade e designação; nomen string é atributo.",
    "exemploBiblioteca": "Duas pessoas com nome igual não se tornam a mesma entidade."
  }
],
  descricaoCurta: "Separar entidade, atributo e relacionamento. Comparar tarefas e escopos da família FR. Interpretar Res, agência e Nomen. Respeitar direção e domínio das relações. Modelar um caso sem inventar dados institucionais.",
  tempoEstimadoMinutos: 24,
  autoresChave: [
  "IFLA — Library Reference Model (2017)",
  "IFLA — Princípios Internacionais de Catalogação (2016)"
],
  alertasCebraspe: [
  "O LRM aponta adaptações infantis entre exemplos usuais de novas obras por derivação. O limite depende da natureza da transformação.",
  "Nomen associa entidade e designação; nomen string é atributo. Coincidência de texto não prova identidade dos nomens.",
  "Ele é modelo conceitual de alto nível, não implementação física obrigatória."
],
  teoriaDensaMarkdown: "### Origem, Fundamentação e Evolução Epistemológica\n\nA modelagem de dados bibliográficos sofreu uma profunda transformação conceitual no final do século XX. O modelo tradicional de fichas e os formatos de intercâmbio legíveis por máquina (como o MARC original) foram desenvolvidos sob um prisma estritamente documental e descritivo: descrevia-se \"o livro em mãos\" (*document-centric*).\n\nPara responder aos desafios das bases de dados automatizadas e à explosão de recursos eletrônicos em múltiplos suportes, a IFLA (*International Federation of Library Associations and Institutions*) constituiu em 1990 o Grupo de Estudos sobre os Requisitos Funcionais para Registros Bibliográficos, presidido por Olivia Madison. \n\nO resultado foi a publicação, em 1998, do relatório final dos **FRBR (*Functional Requirements for Bibliographic Records*)**, marco divisor da Biblioteconomia contemporânea (IFLA, 1998; Mey & Silveira, 2009).\n\n#### A. A Metodologia Entidade-Relacionamento (E-R)\nOs FRBR adotaram a metodologia de **Modelagem Entidade-Relacionamento (E-R)**, proposta originalmente pelo cientista da computação **Peter Chen** em 1976. Em termos formais:\n* **Entidade:** O objeto de interesse no universo do discurso bibliográfico, sobre o qual se deseja coletar ou armazenar dados.\n* **Atributo:** Característica, propriedade ou dado descritivo que singulariza uma entidade (ex.: título, data, extensão física).\n* **Relacionamento:** A ligação semântica ou funcional que interconecta instâncias de entidades, inclusive da mesma classe quando a relação permitir (ex.: \"Obra *é realizada por* Expressão\", \"Pessoa *cria* Obra\").\n\n**Aplicação e recuperação:** Um título é dado sobre a entidade; uma tradução realiza a obra sob outra expressão. Modelo conceitual não é formulário obrigatório nem desenho de tabelas pronto. Uma base pode representar as mesmas relações com implementações diferentes; é a semântica que está sendo examinada.\n\n### A Família FRBR Clássica (1998 – 2010)\n\nO ecossistema original da IFLA desenvolveu-se em três publicações sequenciais complementares, que a literatura e a banca Cebraspe denominam como \"a família FR\":\n\n#### A. O Modelo FRBR (1998)\nEstruturou o universo dos registros bibliográficos em **10 entidades**, divididas em **três grupos funcionais**:\n1. **Grupo 1 — Produtos do Esforço Intelectual ou Artístico (O Quarteto WEMI):**\n   * **Obra (*Work*):** Criação intelectual ou artística pura, autônoma e abstrata. Não possui matéria nem suporte.  \n     *Exemplo:* O romance *Dom Casmurro* concebido por Machado de Assis em 1899.\n   * **Expressão (*Expression*):** A realização intelectual ou artística da obra sob uma forma linguística, textual, sonora, gráfica ou notacional específica.  \n     *Exemplo:* O texto original em português redigido por Machado; a tradução para a língua inglesa realizada por Helen Caldwell; a gravação sonora do romance em audiolivro.  \n     *Casca de Banana Cebraspe:* Tradução e outras mudanças na realização podem gerar nova expressão. Esforço criativo independente significativo — como adaptações infantis e dramatizações nos exemplos do LRM — pode gerar **nova obra** relacionada. Não há regra “qualquer mudança = apenas expressão”.\n   * **Manifestação (*Manifestation*):** A corporificação material ou digital de uma ou mais expressões de uma obra. Representa a produção física, industrial ou eletrônica.  \n     *Exemplo:* A edição lançada pela Editora Record em 2020 (brochura, 208 páginas, com ISBN próprio); a edição crítica da Garnier de 1900; o arquivo digital em formato EPUB disponibilizado pela plataforma Domínio Público.  \n     *Casca de Banana Cebraspe:* Alterações de editora, ano de publicação, tipografia, paginação, suporte físico (papel vs. CD-ROM vs. arquivo PDF) criam uma **nova manifestação** da mesma expressão.\n   * **Item (*Item*):** Um exemplar concreto e singular, físico ou digital de uma manifestação. É a unidade física ou o arquivo unívoco mantido sob custódia de uma biblioteca específica.  \n     *Exemplo:* O volume físico existente na Biblioteca da Câmara dos Deputados com o carimbo patrimonial nº 104.592 e com dedicatória manuscrita na folha de guarda.\n2. **Grupo 2 — Responsáveis pelo Conteúdo (Agentes):**\n   * **Pessoa (*Person*):** Indivíduo humano vivo ou falecido.\n   * **Entidade Coletiva (*Corporate Body*):** Organização ou grupo formal de pessoas que atua como uma unidade (governos, universidades, tribunais, conferências).\n3. **Grupo 3 — Assuntos das Obras (Temas):**\n   * **Conceito (*Concept*):** Noção abstrata, ideia ou princípio científico/filosófico (ex.: *Direito Constitucional*, *Sustentabilidade*).\n   * **Objeto (*Object*):** Coisa material, inanimada ou animada (ex.: *Satélite Sputnik*, *Palácio Tiradentes*).\n   * **Evento (*Event*):** Acontecimento histórico ou temporal delimitado (ex.: *Revolução Constitucionalista de 1932*, *Conferência de Estocolmo*).\n   * **Lugar (*Place*):** Localização geográfica ou espacial (ex.: *Brasília*, *Rio São Francisco*).  \n   *Nota Canônica:* As entidades dos Grupos 1 e 2 também funcionam como assuntos do Grupo 3 (uma Obra, Pessoa ou Entidade pode ser tema de uma obra biográfica ou crítica).\n\n#### B. As Quatro Tarefas do Usuário nos FRBR (1998)\nO FRBR estabeleceu que a avaliação de qualidade de qualquer catálogo depende de sua eficácia em apoiar quatro tarefas fundamentais do usuário:\n1. **Encontrar (*Find*):** Encontrar recursos que correspondam aos critérios de busca do usuário (autor, assunto, título, data).\n2. **Identificar (*Identify*):** Confirmar que o recurso encontrado corresponde à entidade procurada (distinguir edições homônimas ou homônimos de autores).\n3. **Selecionar (*Select*):** Escolher o recurso que atende às necessidades do usuário (selecionar o idioma adequado, o formato PDF ou impresso).\n4. **Obter (*Obtain*):** Adquirir ou ter acesso físico/eletrônico ao recurso (empréstimo domiciliar, download de documento, compra).\n\n#### C. FRAD (2009) e FRSAD (2010)\n* **FRAD (*Functional Requirements for Authority Data*, 2009):** Ampliou o modelo para o controle de autoridade de nomes de pessoas, famílias e entidades coletivas, introduzindo a entidade **Família** no rol de agentes e formalizando as tarefas: *Encontrar*, *Identificar*, *Contextualizar* (*Contextualise*) e *Justificar* (*Justify*).\n* **FRSAD (*Functional Requirements for Subject Authority Data*, 2010):** Dedicou-se à autoridade de assunto, sintetizando o universo temático em duas entidades: **Thema** (qualquer coisa que pode ser assunto de uma obra) e **Nomen** (qualquer signo, símbolo, código ou palavra utilizada para designar um Thema).\n\n**Aplicação e recuperação:** Texto traduzido preserva a obra no exemplo usual; uma versão infantil com reelaboração criativa substancial pode ser outra obra derivada. “Mudou uma palavra” não basta para qualquer classificação automática. O limite depende das convenções e do esforço intelectual descritos. Distinguir FRBR e LRM evita importar grupos antigos para o modelo consolidado.\n\n### A Unificação Definitiva: O IFLA LRM (2017)\n\nPara sanar inconsistências lógicas e discrepâncias de modelagem entre os três relatórios anteriores (FRBR, FRAD e FRSAD), a IFLA desenvolveu o **IFLA LRM (*Library Reference Model*)**, aprovado em agosto de 2017 e elaborado por Pat Riva, Patrick Le Bœuf e Maja Žumer.\n\nO IFLA LRM é um **modelo conceitual de referência de alto nível**, desenvolvido em estrutura aperfeiçoada de entidade-relacionamento. Apoia ambientes de dados conectados, sem prescrever sozinho armazenamento, sintaxe RDF ou interface.\n\n#### A. A Estrutura Hierárquica e a Superclasse \"Res\"\nAo consolidar a família de modelos anteriores, o IFLA LRM organiza suas entidades em uma estrutura hierárquica rigorosa de herança (superclasses e subclasses).\n\nA raiz do modelo é a entidade **LRM-E1 Res** (do latim: *coisa*), definida pelo modelo conceitual da IFLA:\n\n<!-- [CONFERIDO EM ACERVO: ifla-lrm-august-2017_rev201712-por.pdf, p. 21] -->\n> *\"Qualquer entidade no universo do discurso; inclui tudo o que pode ser de interesse para catalogadores ou usuários.\"* (IFLA LRM, 2017, p. 21)\n\nComo consequência direta do princípio de herança ontológica:\n* Todas as entidades de LRM-E2 a LRM-E11 são **subclasses de Res**.\n* Toda e qualquer entidade herda os atributos e relacionamentos de Res.\n* Não existe mais uma entidade \"Thema\" separada (como havia no FRSAD): como qualquer entidade é uma *Res*, **qualquer entidade pode ser assunto de uma Obra** (*Work*).\n\n```tree\nTITLE: Hierarquia Ontológica do IFLA LRM (Herança de Res)\n- LRM-E1 Res | Entidade Raiz — Superclasse universal de tudo no universo do discurso\n  - LRM-E2 Work (Obra) | Criação intelectual ou artística pura e distinta\n  - LRM-E3 Expression (Expressão) | Realização em signos linguísticos, visuais ou sonoros\n  - LRM-E4 Manifestation (Manifestação) | Corporificação física ou digital da expressão\n  - LRM-E5 Item (Item) | Exemplar singular de uma manifestação\n  - LRM-E6 Agent (Agente) | Entidade capaz de ação intencional e responsabilidade\n    - LRM-E7 Person (Pessoa) | Ser humano individual\n    - LRM-E8 Collective Agent (Agente Coletivo) | Órgãos coletivos, empresas e famílias\n  - LRM-E9 Nomen (Nomen) | Associação de qualquer signo/nome para identificar uma entidade\n  - LRM-E10 Place (Lugar) | Extensão espacial geográfica delimitada\n  - LRM-E11 Time-span (Intervalo de Tempo) | Extensão temporal com início, término e duração\n```\n\n#### B. As 11 Entidades Oficiais do IFLA LRM\n1. **LRM-E1 Res:** Superclasse universal. Qualquer conceito, objeto, pessoa, evento ou entidade material/imaterial.\n2. **LRM-E2 Work (Obra):** Criação intelectual ou artística pura e distinta (subclasse de Res).\n3. **LRM-E3 Expression (Expressão):** A realização intelectual ou artística de uma obra sob forma de signos linguísticos, sonoros, visuais, notacionais, etc. (subclasse de Res).\n4. **LRM-E4 Manifestation (Manifestação):** O conjunto de todos os suportes físicos ou digitais que corporificam a mesma expressão com idênticas características de produção industrial/editorial (subclasse de Res).\n5. **LRM-E5 Item (Item):** Um exemplar físico ou digital singular de uma manifestação (subclasse de Res).\n6. **LRM-E6 Agent (Agente):** Qualquer entidade dotada de capacidade de ação intencional e que assume direitos e responsabilidades legais/intelectuais (subclasse de Res; superclasse de Person e Collective Agent).\n7. **LRM-E7 Person (Pessoa):** Um ser humano individual, vivo ou falecido (subclasse de Agent).\n8. **LRM-E8 Collective Agent (Agente Coletivo):** Reunião ou organização de duas ou mais pessoas que operam de modo coordenado como uma unidade deliberativa. Engloba as antigas entidades *Corporate Body* (órgãos, empresas, tribunais) e *Family* (famílias, dinastias) do FRAD, bem como grupos informais com atuação conjunta (subclasse de Agent).\n9. **LRM-E9 Nomen (Nomen):** Uma **associação entre uma entidade e uma designação que se refere a ela**. A sequência de signos é o atributo *nomen string*, não toda a entidade nomen. Duas sequências idênticas podem corresponder a nomens distintos conforme entidade e contexto (subclasse de Res).\n10. **LRM-E10 Place (Lugar):** Uma extensão espacial ou localização delimitada no espaço geográfico terrestre ou extraterrestre (subclasse de Res).\n11. **LRM-E11 Time-span (Intervalo de Tempo):** Uma extensão temporal delimitada que possui data de início, data de término e duração contínua (subclasse de Res).\n\n#### C. As 5 Tarefas do Usuário no IFLA LRM\nO IFLA LRM consolidou as tarefas do usuário em **exatamente cinco ações cognitivas e operacionais**:\n1. **Encontrar (*Find*):** Localizar informações sobre uma ou mais entidades em um catálogo a partir de atributos ou relações pesquisadas.\n2. **Identificar (*Identify*):** Reconhecer com exatidão se a entidade localizada corresponde à entidade desejada pelo usuário, distinguindo entidades semelhantes ou homônimas.\n3. **Selecionar (*Select*):** Determinar a adequação da entidade encontrada às necessidades do usuário (idioma, versão, formato de acesso, suporte).\n4. **Obter (*Obtain*):** Acessar o conteúdo do recurso de forma física (empréstimo de estante) ou digital (download, streaming, visualização web).\n5. **EXPLORAR (*Explore*):** Descobrir novas entidades, conexões e relações contextuais a partir da navegação em teias de dados conectados e associações semânticas entre obras, agentes, assuntos e períodos temporais.  \n   *(Explorar integra a lista LRM e também tem antecedente no FRSAD; o contraste de quatro para cinco aqui é com o FRBR original.)*\n\n**Aplicação e recuperação:** Duas pessoas têm o nome “Ana Lima”. A string coincide; a associação de nome a cada pessoa não. É por isso que Nomen não é apenas texto. Res é classe ampla; Agent é mais restrita, envolvendo capacidade de ação intencional. Pessoas fictícias podem ser assunto/Res sem se tornarem automaticamente Person no recorte LRM.\n\n### Relacionamentos Fundamentais do IFLA LRM\n\nOs relacionamentos no LRM são expressos na forma de predicados lógicos direcionados:\n\n* **Relacionamentos Estruturais do WEMI:**\n  * Work *is realized through* Expression (Uma Obra é realizada por meio de uma ou mais Expressões).\n  * Expression *is embodied in* Manifestation (Uma Expressão é corporificada em uma ou mais Manifestações).\n  * Manifestation *is exemplified by* Item (Uma Manifestação é exemplificada por um ou mais Itens).\n* **Relacionamento Temático Fundamental:**\n  * Work *has as subject* Res (Uma Obra tem como assunto qualquer Res).  \n    *Regra de Ouro:* A relação de assunto vincula-se **estritamente à Obra (Work)**. Na relação de assunto definida no modelo, o domínio é obra; ela pode ter como assunto qualquer res, inclusive um item particular. Não se deve concluir que é impossível falar de um exemplar ou relacioná-lo a assuntos em qualquer implementação.\n* **Relacionamento de Atribuição de Nome:**\n  * Res *has appellation* Nomen; inversamente Nomen *is appellation of* Res (Qualquer Res é designada por um ou mais Nomens).\n* **Relacionamentos de Agência:**\n  * Agent *created* Work (Agente criou Obra).\n  * Agent *realized* Expression (Agente realizou Expressão — ex.: tradutor, ilustrador, narrador).\n  * Agent *manufactured / distributed* Manifestation (Agente produziu/distribuiu Manifestação — editora, tipógrafo).\n  * Agent *owns* Item (Agente possui/custodia Item — biblioteca, colecionador).\n\n**Aplicação e recuperação:** “Res tem denominação Nomen” e “Nomen é denominação de Res” são direções inversas. Inverter palavras sem inverter sujeito/objeto gera relação errada. Uma obra sobre um exemplar autografado tem esse item como assunto; isso não transforma o domínio da relação de assunto em Item.\n\n### Aplicação prática: cenário jurídico hipotético\n\nPara consolidar a teoria em nível de prova Cebraspe, analise o desdobramento do seguinte caso do universo jurídico-governamental:\n\n| Nível Ontológico | Elemento Prático | Justificativa Catalográfica |\n| :--- | :--- | :--- |\n| **LRM-E2 Work** | *Lei nº 14.133, de 1º de abril de 2021* (Nova Lei de Licitações e Contratos Administrativos). | O conceito jurídico e dispositivo normativo aprovado pelo Congresso Nacional, independentemente de sua formatação. |\n| **LRM-E3 Expression 1** | O texto oficial sancionado em língua portuguesa publicado originariamente. | A realização da obra em signos alfanuméricos da língua portuguesa. |\n| **LRM-E3 Expression 2** | Uma tradução hipotética para inglês, sem afirmar existência de edição oficial. | Nova expressão, pois houve alteração na realização semiótica/linguística. |\n| **LRM-E3 Expression 3** | O audiolivro com a gravação da leitura integral da lei para pessoas com deficiência visual. | Nova expressão, pois houve transposição do código textual para o código sonoro. |\n| **LRM-E4 Manifestation 1** | Uma edição impressa hipotética em brochura, com características editoriais definidas; sem ISBN inventado. | Corporificação física com atributos industriais e comerciais próprios. |\n| **LRM-E4 Manifestation 2** | Arquivo digital em formato PDF disponível no Portal da Legislação do Planalto. | Nova manifestação (suporte digital e características técnicas distintas). |\n| **LRM-E5 Item** | Um exemplar físico hipotético com número patrimonial próprio; não é registro real do STJ. | O objeto físico singular mantido sob a guarda da unidade de informação. |\n\n**Aplicação e recuperação:** Modele um romance, uma tradução, duas edições da tradução e um exemplar anotado. Depois altere o caso: a obra é adaptada para teatro. Justifique se o esforço descrito produz nova obra. Anotação singular pode ser característica de item; nem todo detalhe manuscrito exige inventar nova manifestação editorial.",
  teoriaDidaticaMarkdown: "### Revisão: identidade e transformação\n\nObra é criação; expressão é realização; manifestação é corporificação/conjunto definido por características de produção; item é exemplar. Tradução usualmente gera expressão; adaptação criativa significativa pode gerar obra. Res é superclasse ampla; Agent exige capacidade pertinente de ação. Nomen associa entidade e designação; nomen string é atributo. Res tem denominação Nomen, não o inverso sem mudar o predicado. Obra pode ter qualquer Res como assunto, inclusive item. LRM é conceitual, não banco físico nem formato obrigatório. Explore integra suas cinco tarefas, com antecedentes na família FR.\n",
  checkpoints: [
  {
    "id": "cp-2-3-1",
    "pergunta": "Micro-Checkpoint 1: O Quarteto WEMI do Grupo 1 do FRBR / IFLA LRM",
    "item": "No modelo conceitual IFLA LRM, a tradução da obra Dom Quixote para a língua portuguesa e a sua narração em formato de audiolivro constituem novas manifestações da mesma expressão textual original.",
    "gabarito": "E",
    "justificativa": "O cenário descreve mudança de realização linguística/sonora, não apenas corporificação da mesma expressão. Tradução e leitura integral no exemplo são expressões distintas; adaptações criativas significativas exigiriam outro exame.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010).",
    "versao_correta": "Tradução e narração integral no cenário correspondem a expressões distintas, não apenas manifestações da expressão original."
  },
  {
    "id": "cp-2-3-2",
    "pergunta": "Micro-Checkpoint 2: Unificação e a Superclasse Res no IFLA LRM",
    "item": "O modelo IFLA LRM (Library Reference Model), aprovado em 2017, consolidou e substituiu os modelos conceituais FRBR, FRAD e FRSAD, adotando a entidade máxima Res como a superclasse universal de todas as demais entidades do universo do discurso.",
    "gabarito": "C",
    "justificativa": "O modelo consolidou a família FR e usa Res como superclasse, com subclasses diretas e indiretas. Isso não impõe implementação física única.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010)."
  },
  {
    "id": "cp-2-3-3",
    "pergunta": "Micro-Checkpoint 3: As Tarefas do Usuário no IFLA LRM",
    "item": "Em comparação com o modelo FRBR original, que contemplava as quatro tarefas clássicas (Find, Identify, Select, Obtain), o IFLA LRM incorporou formalmente a quinta tarefa do usuário denominada Explorar (Explore).",
    "gabarito": "C",
    "justificativa": "A comparação é com as quatro tarefas FRBR. LRM contempla Explorar; a tarefa já tinha antecedente no FRSAD, portanto não foi inventada sem antecedente em toda a família.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010)."
  },
  {
    "id": "rt-2-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma adaptação infantil que envolve esforço intelectual independente significativo deve ser sempre tratada apenas como nova expressão, nunca como nova obra.",
    "gabarito": "E",
    "justificativa": "O LRM aponta adaptações infantis entre exemplos usuais de novas obras por derivação. O limite depende da natureza da transformação.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010).",
    "editalRef": "Bloco D - Item 1.1 e 1.2",
    "habilidade": "aplicar",
    "versao_correta": "Transformação criativa significativa pode gerar nova obra relacionada."
  },
  {
    "id": "rt-2-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Nomen e nomen string são a mesma entidade: uma sequência de caracteres basta para esgotar a definição.",
    "gabarito": "E",
    "justificativa": "Nomen associa entidade e designação; nomen string é atributo. Coincidência de texto não prova identidade dos nomens.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010).",
    "editalRef": "Bloco D - Item 1.1 e 1.2",
    "habilidade": "aplicar",
    "versao_correta": "Nomen é associação; nomen string é a sequência de signos como atributo."
  },
  {
    "id": "rt-2-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma obra pode ter como assunto um item específico, porque a relação de assunto tem obra como domínio e res como alcance.",
    "gabarito": "C",
    "justificativa": "Item é subclasse de Res. O assunto pode ser exemplar determinado sem alterar o domínio da relação.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010).",
    "editalRef": "Bloco D - Item 1.1 e 1.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O LRM prescreve um banco relacional físico único que toda biblioteca deve instalar.",
    "gabarito": "E",
    "justificativa": "Ele é modelo conceitual de alto nível, não implementação física obrigatória.",
    "fonte": "IFLA LRM (2017), capítulos 2–5, entidades LRM-E2, E3 e E9 e relação LRM-R13; FRBR (1998), FRAD (2009) e FRSAD (2010).",
    "editalRef": "Bloco D - Item 1.1 e 1.2",
    "habilidade": "aplicar",
    "versao_correta": "O LRM define semântica conceitual e admite implementações distintas."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-2-3-fonte-lrm",
      "nome": "IFLA — Library Reference Model (2017)",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA — Library Reference Model (2017)",
      "ideiaChave": "Modelo conceitual; tradução portuguesa disponível no acervo, entidades e relacionamentos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-3-fonte-icp",
      "nome": "IFLA — Princípios Internacionais de Catalogação (2016)",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA — Princípios Internacionais de Catalogação (2016)",
      "ideiaChave": "Seções 2 e 6; tradução portuguesa do PDF do acervo.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-2-3-2",
      "afirmacao": "Nomen e nomen string são a mesma entidade: uma sequência de caracteres basta para esgotar a definição.",
      "gabarito": "E",
      "porQue": "Nomen associa entidade e designação; nomen string é atributo. Coincidência de texto não prova identidade dos nomens."
    },
    {
      "id": "memoria-rt-2-3-3",
      "afirmacao": "Uma obra pode ter como assunto um item específico, porque a relação de assunto tem obra como domínio e res como alcance.",
      "gabarito": "C",
      "porQue": "Item é subclasse de Res. O assunto pode ser exemplar determinado sem alterar o domínio da relação."
    },
    {
      "id": "memoria-rt-2-3-4",
      "afirmacao": "O LRM prescreve um banco relacional físico único que toda biblioteca deve instalar.",
      "gabarito": "E",
      "porQue": "Ele é modelo conceitual de alto nível, não implementação física obrigatória."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-2-3-bloco-1",
    "titulo": "Origem, Fundamentação e Evolução Epistemológica",
    "objetivos": [
      "Separar entidade, atributo e relacionamento."
    ],
    "conteudo": "A modelagem de dados bibliográficos sofreu uma profunda transformação conceitual no final do século XX. O modelo tradicional de fichas e os formatos de intercâmbio legíveis por máquina (como o MARC original) foram desenvolvidos sob um prisma estritamente documental e descritivo: descrevia-se \"o livro em mãos\" (*document-centric*).\n\nPara responder aos desafios das bases de dados automatizadas e à explosão de recursos eletrônicos em múltiplos suportes, a IFLA (*International Federation of Library Associations and Institutions*) constituiu em 1990 o Grupo de Estudos sobre os Requisitos Funcionais para Registros Bibliográficos, presidido por Olivia Madison. \n\nO resultado foi a publicação, em 1998, do relatório final dos **FRBR (*Functional Requirements for Bibliographic Records*)**, marco divisor da Biblioteconomia contemporânea (IFLA, 1998; Mey & Silveira, 2009).\n\n#### A. A Metodologia Entidade-Relacionamento (E-R)\nOs FRBR adotaram a metodologia de **Modelagem Entidade-Relacionamento (E-R)**, proposta originalmente pelo cientista da computação **Peter Chen** em 1976. Em termos formais:\n* **Entidade:** O objeto de interesse no universo do discurso bibliográfico, sobre o qual se deseja coletar ou armazenar dados.\n* **Atributo:** Característica, propriedade ou dado descritivo que singulariza uma entidade (ex.: título, data, extensão física).\n* **Relacionamento:** A ligação semântica ou funcional que interconecta instâncias de entidades, inclusive da mesma classe quando a relação permitir (ex.: \"Obra *é realizada por* Expressão\", \"Pessoa *cria* Obra\").\n\n**Aplicação e recuperação:** Um título é dado sobre a entidade; uma tradução realiza a obra sob outra expressão. Modelo conceitual não é formulário obrigatório nem desenho de tabelas pronto. Uma base pode representar as mesmas relações com implementações diferentes; é a semântica que está sendo examinada.",
    "checkpointIds": [
      "rt-2-3-4"
    ]
  },
  {
    "id": "sub-2-3-bloco-2",
    "titulo": "A Família FRBR Clássica (1998 – 2010)",
    "objetivos": [
      "Comparar tarefas e escopos da família FR."
    ],
    "conteudo": "O ecossistema original da IFLA desenvolveu-se em três publicações sequenciais complementares, que a literatura e a banca Cebraspe denominam como \"a família FR\":\n\n#### A. O Modelo FRBR (1998)\nEstruturou o universo dos registros bibliográficos em **10 entidades**, divididas em **três grupos funcionais**:\n1. **Grupo 1 — Produtos do Esforço Intelectual ou Artístico (O Quarteto WEMI):**\n   * **Obra (*Work*):** Criação intelectual ou artística pura, autônoma e abstrata. Não possui matéria nem suporte.  \n     *Exemplo:* O romance *Dom Casmurro* concebido por Machado de Assis em 1899.\n   * **Expressão (*Expression*):** A realização intelectual ou artística da obra sob uma forma linguística, textual, sonora, gráfica ou notacional específica.  \n     *Exemplo:* O texto original em português redigido por Machado; a tradução para a língua inglesa realizada por Helen Caldwell; a gravação sonora do romance em audiolivro.  \n     *Casca de Banana Cebraspe:* Tradução e outras mudanças na realização podem gerar nova expressão. Esforço criativo independente significativo — como adaptações infantis e dramatizações nos exemplos do LRM — pode gerar **nova obra** relacionada. Não há regra “qualquer mudança = apenas expressão”.\n   * **Manifestação (*Manifestation*):** A corporificação material ou digital de uma ou mais expressões de uma obra. Representa a produção física, industrial ou eletrônica.  \n     *Exemplo:* A edição lançada pela Editora Record em 2020 (brochura, 208 páginas, com ISBN próprio); a edição crítica da Garnier de 1900; o arquivo digital em formato EPUB disponibilizado pela plataforma Domínio Público.  \n     *Casca de Banana Cebraspe:* Alterações de editora, ano de publicação, tipografia, paginação, suporte físico (papel vs. CD-ROM vs. arquivo PDF) criam uma **nova manifestação** da mesma expressão.\n   * **Item (*Item*):** Um exemplar concreto e singular, físico ou digital de uma manifestação. É a unidade física ou o arquivo unívoco mantido sob custódia de uma biblioteca específica.  \n     *Exemplo:* O volume físico existente na Biblioteca da Câmara dos Deputados com o carimbo patrimonial nº 104.592 e com dedicatória manuscrita na folha de guarda.\n2. **Grupo 2 — Responsáveis pelo Conteúdo (Agentes):**\n   * **Pessoa (*Person*):** Indivíduo humano vivo ou falecido.\n   * **Entidade Coletiva (*Corporate Body*):** Organização ou grupo formal de pessoas que atua como uma unidade (governos, universidades, tribunais, conferências).\n3. **Grupo 3 — Assuntos das Obras (Temas):**\n   * **Conceito (*Concept*):** Noção abstrata, ideia ou princípio científico/filosófico (ex.: *Direito Constitucional*, *Sustentabilidade*).\n   * **Objeto (*Object*):** Coisa material, inanimada ou animada (ex.: *Satélite Sputnik*, *Palácio Tiradentes*).\n   * **Evento (*Event*):** Acontecimento histórico ou temporal delimitado (ex.: *Revolução Constitucionalista de 1932*, *Conferência de Estocolmo*).\n   * **Lugar (*Place*):** Localização geográfica ou espacial (ex.: *Brasília*, *Rio São Francisco*).  \n   *Nota Canônica:* As entidades dos Grupos 1 e 2 também funcionam como assuntos do Grupo 3 (uma Obra, Pessoa ou Entidade pode ser tema de uma obra biográfica ou crítica).\n\n#### B. As Quatro Tarefas do Usuário nos FRBR (1998)\nO FRBR estabeleceu que a avaliação de qualidade de qualquer catálogo depende de sua eficácia em apoiar quatro tarefas fundamentais do usuário:\n1. **Encontrar (*Find*):** Encontrar recursos que correspondam aos critérios de busca do usuário (autor, assunto, título, data).\n2. **Identificar (*Identify*):** Confirmar que o recurso encontrado corresponde à entidade procurada (distinguir edições homônimas ou homônimos de autores).\n3. **Selecionar (*Select*):** Escolher o recurso que atende às necessidades do usuário (selecionar o idioma adequado, o formato PDF ou impresso).\n4. **Obter (*Obtain*):** Adquirir ou ter acesso físico/eletrônico ao recurso (empréstimo domiciliar, download de documento, compra).\n\n#### C. FRAD (2009) e FRSAD (2010)\n* **FRAD (*Functional Requirements for Authority Data*, 2009):** Ampliou o modelo para o controle de autoridade de nomes de pessoas, famílias e entidades coletivas, introduzindo a entidade **Família** no rol de agentes e formalizando as tarefas: *Encontrar*, *Identificar*, *Contextualizar* (*Contextualise*) e *Justificar* (*Justify*).\n* **FRSAD (*Functional Requirements for Subject Authority Data*, 2010):** Dedicou-se à autoridade de assunto, sintetizando o universo temático em duas entidades: **Thema** (qualquer coisa que pode ser assunto de uma obra) e **Nomen** (qualquer signo, símbolo, código ou palavra utilizada para designar um Thema).\n\n**Aplicação e recuperação:** Texto traduzido preserva a obra no exemplo usual; uma versão infantil com reelaboração criativa substancial pode ser outra obra derivada. “Mudou uma palavra” não basta para qualquer classificação automática. O limite depende das convenções e do esforço intelectual descritos. Distinguir FRBR e LRM evita importar grupos antigos para o modelo consolidado.",
    "checkpointIds": [
      "cp-2-3-1",
      "rt-2-3-1"
    ]
  },
  {
    "id": "sub-2-3-bloco-3",
    "titulo": "A Unificação Definitiva: O IFLA LRM (2017)",
    "objetivos": [
      "Interpretar Res, agência e Nomen."
    ],
    "conteudo": "Para sanar inconsistências lógicas e discrepâncias de modelagem entre os três relatórios anteriores (FRBR, FRAD e FRSAD), a IFLA desenvolveu o **IFLA LRM (*Library Reference Model*)**, aprovado em agosto de 2017 e elaborado por Pat Riva, Patrick Le Bœuf e Maja Žumer.\n\nO IFLA LRM é um **modelo conceitual de referência de alto nível**, desenvolvido em estrutura aperfeiçoada de entidade-relacionamento. Apoia ambientes de dados conectados, sem prescrever sozinho armazenamento, sintaxe RDF ou interface.\n\n#### A. A Estrutura Hierárquica e a Superclasse \"Res\"\nAo consolidar a família de modelos anteriores, o IFLA LRM organiza suas entidades em uma estrutura hierárquica rigorosa de herança (superclasses e subclasses).\n\nA raiz do modelo é a entidade **LRM-E1 Res** (do latim: *coisa*), definida pelo modelo conceitual da IFLA:\n\n<!-- [CONFERIDO EM ACERVO: ifla-lrm-august-2017_rev201712-por.pdf, p. 21] -->\n> *\"Qualquer entidade no universo do discurso; inclui tudo o que pode ser de interesse para catalogadores ou usuários.\"* (IFLA LRM, 2017, p. 21)\n\nComo consequência direta do princípio de herança ontológica:\n* Todas as entidades de LRM-E2 a LRM-E11 são **subclasses de Res**.\n* Toda e qualquer entidade herda os atributos e relacionamentos de Res.\n* Não existe mais uma entidade \"Thema\" separada (como havia no FRSAD): como qualquer entidade é uma *Res*, **qualquer entidade pode ser assunto de uma Obra** (*Work*).\n\n```tree\nTITLE: Hierarquia Ontológica do IFLA LRM (Herança de Res)\n- LRM-E1 Res | Entidade Raiz — Superclasse universal de tudo no universo do discurso\n  - LRM-E2 Work (Obra) | Criação intelectual ou artística pura e distinta\n  - LRM-E3 Expression (Expressão) | Realização em signos linguísticos, visuais ou sonoros\n  - LRM-E4 Manifestation (Manifestação) | Corporificação física ou digital da expressão\n  - LRM-E5 Item (Item) | Exemplar singular de uma manifestação\n  - LRM-E6 Agent (Agente) | Entidade capaz de ação intencional e responsabilidade\n    - LRM-E7 Person (Pessoa) | Ser humano individual\n    - LRM-E8 Collective Agent (Agente Coletivo) | Órgãos coletivos, empresas e famílias\n  - LRM-E9 Nomen (Nomen) | Associação de qualquer signo/nome para identificar uma entidade\n  - LRM-E10 Place (Lugar) | Extensão espacial geográfica delimitada\n  - LRM-E11 Time-span (Intervalo de Tempo) | Extensão temporal com início, término e duração\n```\n\n#### B. As 11 Entidades Oficiais do IFLA LRM\n1. **LRM-E1 Res:** Superclasse universal. Qualquer conceito, objeto, pessoa, evento ou entidade material/imaterial.\n2. **LRM-E2 Work (Obra):** Criação intelectual ou artística pura e distinta (subclasse de Res).\n3. **LRM-E3 Expression (Expressão):** A realização intelectual ou artística de uma obra sob forma de signos linguísticos, sonoros, visuais, notacionais, etc. (subclasse de Res).\n4. **LRM-E4 Manifestation (Manifestação):** O conjunto de todos os suportes físicos ou digitais que corporificam a mesma expressão com idênticas características de produção industrial/editorial (subclasse de Res).\n5. **LRM-E5 Item (Item):** Um exemplar físico ou digital singular de uma manifestação (subclasse de Res).\n6. **LRM-E6 Agent (Agente):** Qualquer entidade dotada de capacidade de ação intencional e que assume direitos e responsabilidades legais/intelectuais (subclasse de Res; superclasse de Person e Collective Agent).\n7. **LRM-E7 Person (Pessoa):** Um ser humano individual, vivo ou falecido (subclasse de Agent).\n8. **LRM-E8 Collective Agent (Agente Coletivo):** Reunião ou organização de duas ou mais pessoas que operam de modo coordenado como uma unidade deliberativa. Engloba as antigas entidades *Corporate Body* (órgãos, empresas, tribunais) e *Family* (famílias, dinastias) do FRAD, bem como grupos informais com atuação conjunta (subclasse de Agent).\n9. **LRM-E9 Nomen (Nomen):** Uma **associação entre uma entidade e uma designação que se refere a ela**. A sequência de signos é o atributo *nomen string*, não toda a entidade nomen. Duas sequências idênticas podem corresponder a nomens distintos conforme entidade e contexto (subclasse de Res).\n10. **LRM-E10 Place (Lugar):** Uma extensão espacial ou localização delimitada no espaço geográfico terrestre ou extraterrestre (subclasse de Res).\n11. **LRM-E11 Time-span (Intervalo de Tempo):** Uma extensão temporal delimitada que possui data de início, data de término e duração contínua (subclasse de Res).\n\n#### C. As 5 Tarefas do Usuário no IFLA LRM\nO IFLA LRM consolidou as tarefas do usuário em **exatamente cinco ações cognitivas e operacionais**:\n1. **Encontrar (*Find*):** Localizar informações sobre uma ou mais entidades em um catálogo a partir de atributos ou relações pesquisadas.\n2. **Identificar (*Identify*):** Reconhecer com exatidão se a entidade localizada corresponde à entidade desejada pelo usuário, distinguindo entidades semelhantes ou homônimas.\n3. **Selecionar (*Select*):** Determinar a adequação da entidade encontrada às necessidades do usuário (idioma, versão, formato de acesso, suporte).\n4. **Obter (*Obtain*):** Acessar o conteúdo do recurso de forma física (empréstimo de estante) ou digital (download, streaming, visualização web).\n5. **EXPLORAR (*Explore*):** Descobrir novas entidades, conexões e relações contextuais a partir da navegação em teias de dados conectados e associações semânticas entre obras, agentes, assuntos e períodos temporais.  \n   *(Explorar integra a lista LRM e também tem antecedente no FRSAD; o contraste de quatro para cinco aqui é com o FRBR original.)*\n\n**Aplicação e recuperação:** Duas pessoas têm o nome “Ana Lima”. A string coincide; a associação de nome a cada pessoa não. É por isso que Nomen não é apenas texto. Res é classe ampla; Agent é mais restrita, envolvendo capacidade de ação intencional. Pessoas fictícias podem ser assunto/Res sem se tornarem automaticamente Person no recorte LRM.",
    "checkpointIds": [
      "cp-2-3-2",
      "cp-2-3-3",
      "rt-2-3-2"
    ]
  },
  {
    "id": "sub-2-3-bloco-4",
    "titulo": "Relacionamentos Fundamentais do IFLA LRM",
    "objetivos": [
      "Respeitar direção e domínio das relações."
    ],
    "conteudo": "Os relacionamentos no LRM são expressos na forma de predicados lógicos direcionados:\n\n* **Relacionamentos Estruturais do WEMI:**\n  * Work *is realized through* Expression (Uma Obra é realizada por meio de uma ou mais Expressões).\n  * Expression *is embodied in* Manifestation (Uma Expressão é corporificada em uma ou mais Manifestações).\n  * Manifestation *is exemplified by* Item (Uma Manifestação é exemplificada por um ou mais Itens).\n* **Relacionamento Temático Fundamental:**\n  * Work *has as subject* Res (Uma Obra tem como assunto qualquer Res).  \n    *Regra de Ouro:* A relação de assunto vincula-se **estritamente à Obra (Work)**. Na relação de assunto definida no modelo, o domínio é obra; ela pode ter como assunto qualquer res, inclusive um item particular. Não se deve concluir que é impossível falar de um exemplar ou relacioná-lo a assuntos em qualquer implementação.\n* **Relacionamento de Atribuição de Nome:**\n  * Res *has appellation* Nomen; inversamente Nomen *is appellation of* Res (Qualquer Res é designada por um ou mais Nomens).\n* **Relacionamentos de Agência:**\n  * Agent *created* Work (Agente criou Obra).\n  * Agent *realized* Expression (Agente realizou Expressão — ex.: tradutor, ilustrador, narrador).\n  * Agent *manufactured / distributed* Manifestation (Agente produziu/distribuiu Manifestação — editora, tipógrafo).\n  * Agent *owns* Item (Agente possui/custodia Item — biblioteca, colecionador).\n\n**Aplicação e recuperação:** “Res tem denominação Nomen” e “Nomen é denominação de Res” são direções inversas. Inverter palavras sem inverter sujeito/objeto gera relação errada. Uma obra sobre um exemplar autografado tem esse item como assunto; isso não transforma o domínio da relação de assunto em Item.",
    "checkpointIds": [
      "rt-2-3-3"
    ]
  },
  {
    "id": "sub-2-3-bloco-5",
    "titulo": "Aplicação prática: cenário jurídico hipotético",
    "objetivos": [
      "Modelar um caso sem inventar dados institucionais."
    ],
    "conteudo": "Para consolidar a teoria em nível de prova Cebraspe, analise o desdobramento do seguinte caso do universo jurídico-governamental:\n\n| Nível Ontológico | Elemento Prático | Justificativa Catalográfica |\n| :--- | :--- | :--- |\n| **LRM-E2 Work** | *Lei nº 14.133, de 1º de abril de 2021* (Nova Lei de Licitações e Contratos Administrativos). | O conceito jurídico e dispositivo normativo aprovado pelo Congresso Nacional, independentemente de sua formatação. |\n| **LRM-E3 Expression 1** | O texto oficial sancionado em língua portuguesa publicado originariamente. | A realização da obra em signos alfanuméricos da língua portuguesa. |\n| **LRM-E3 Expression 2** | Uma tradução hipotética para inglês, sem afirmar existência de edição oficial. | Nova expressão, pois houve alteração na realização semiótica/linguística. |\n| **LRM-E3 Expression 3** | O audiolivro com a gravação da leitura integral da lei para pessoas com deficiência visual. | Nova expressão, pois houve transposição do código textual para o código sonoro. |\n| **LRM-E4 Manifestation 1** | Uma edição impressa hipotética em brochura, com características editoriais definidas; sem ISBN inventado. | Corporificação física com atributos industriais e comerciais próprios. |\n| **LRM-E4 Manifestation 2** | Arquivo digital em formato PDF disponível no Portal da Legislação do Planalto. | Nova manifestação (suporte digital e características técnicas distintas). |\n| **LRM-E5 Item** | Um exemplar físico hipotético com número patrimonial próprio; não é registro real do STJ. | O objeto físico singular mantido sob a guarda da unidade de informação. |\n\n**Aplicação e recuperação:** Modele um romance, uma tradução, duas edições da tradução e um exemplar anotado. Depois altere o caso: a obra é adaptada para teatro. Justifique se o esforço descrito produz nova obra. Anotação singular pode ser característica de item; nem todo detalhe manuscrito exige inventar nova manifestação editorial.",
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
    "id": "icp",
    "titulo": "IFLA — Princípios Internacionais de Catalogação (2016)",
    "localizador": "Seções 2 e 6; tradução portuguesa do PDF do acervo.",
    "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/icp/icp_2016-pt.pdf"
  }
],
};
