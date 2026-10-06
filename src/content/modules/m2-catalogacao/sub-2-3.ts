import type { ModuloFilho } from '../../../domain/types';

export const submodulo23: ModuloFilho = {
  id: 'sub-2-3',
  numero: '2.3',
  titulo: 'Modelos Conceituais: A Família FRBR e o IFLA LRM',
  descricaoCurta: 'Modelagem Entidade-Relacionamento no universo bibliográfico: o quarteto WEMI, a evolução FRBR/FRAD/FRSAD e a consolidação no IFLA LRM (2017) com suas 11 entidades ontológicas e 5 tarefas do usuário.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['IFLA Study Group on FRBR', 'Pat Riva', 'Maja Žumer', 'Glenn Patton', 'Barbara Tillett', 'Peter Chen'],
  alertasCebraspe: [
    'O IFLA LRM (Library Reference Model, 2017) consolidou e substituiu integralmente os três modelos conceituais anteriores da família FR: o FRBR (1998, dados bibliográficos), o FRAD (2009, dados de autoridade) e o FRSAD (2010, dados de autoridade de assunto). A banca Cebraspe frequentemente tenta confundir o candidato afirmando que os três modelos ainda coexistem como padrões ativos e independentes.',
    'A entidade raiz e superclasse máxima do IFLA LRM é "Res" (do latim: "coisa"). Absolutamente todas as entidades do universo bibliográfico (LRM-E2 a LRM-E11) são subclasses diretas ou indiretas de Res, o que permite atribuir a qualquer elemento propriedades de relacionamento e identificação ontológica na Web Semântica.',
    'As 11 entidades canônicas do IFLA LRM com seus códigos oficiais: LRM-E1 Res; LRM-E2 Work (Obra); LRM-E3 Expression (Expressão); LRM-E4 Manifestation (Manifestação); LRM-E5 Item (Item); LRM-E6 Agent (Agente); LRM-E7 Person (Pessoa); LRM-E8 Collective Agent (Agente Coletivo); LRM-E9 Nomen (Nomen); LRM-E10 Place (Lugar); LRM-E11 Time-span (Intervalo de Tempo).',
    'Fusão de Agentes no IFLA LRM: no FRAD existiam três entidades de agentes (Pessoa, Família e Entidade Coletiva). No IFLA LRM, "Família" e "Entidade Coletiva" foram fundidas na subclasse "Agente Coletivo" (LRM-E8), que juntamente com "Pessoa" (LRM-E7) forma a superclasse "Agente" (LRM-E6). Grupos de agentes não formalizados que agem de modo coordenado também se enquadram em Agente Coletivo.',
    'As 5 Tarefas do Usuário no IFLA LRM: Encontrar (Find), Identificar (Identify), Selecionar (Select), Obter (Obtain) e EXPLORAR (Explore). O FRBR original previa apenas quatro tarefas (Find, Identify, Select, Obtain). A inclusão da tarefa "Explorar" é uma das marcas registradas do LRM mais cobradas em provas recentes do Cebraspe.',
    'Quarteto WEMI e regras de descontinuidade ontológica: Qualquer modificação no conteúdo intelectual/artístico, idioma, tradução, arranjo musical, revisão de texto ou versão abreviada cria uma NOVA EXPRESSÃO. Por outro lado, alterações puramente físicas, industriais ou distributivas (mudança de editora, ano de tiragem, formato de encadernação, dimensões, ISBN ou passagem de livro impresso para e-book em PDF) criam uma NOVA MANIFESTAÇÃO da mesma expressão.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Ontológico de Transição: Da Família FRBR ao IFLA LRM (2017)',
    colunas: ['Modelo Original (FRBR / FRAD / FRSAD)', 'Entidade no IFLA LRM', 'Hierarquia / Natureza', 'Definição e Escopo Canônico'],
    linhas: [
      ['Nenhum (Entidade Raiz Nova)', 'LRM-E1 Res', 'Superclasse Universal', 'Qualquer entidade no universo do discurso; inclui tudo o que pode ser objeto de interesse humano ou catalográfico.'],
      ['FRBR Grupo 1: Work', 'LRM-E2 Work (Obra)', 'Subclasse de Res', 'Criação intelectual ou artística distinta, no plano puramente abstrato e conceitual.'],
      ['FRBR Grupo 1: Expression', 'LRM-E3 Expression (Expressão)', 'Subclasse de Res', 'A realização intelectual ou artística de uma obra na forma de signos alfanuméricos, sonoros, visuais, gestuais, etc.'],
      ['FRBR Grupo 1: Manifestation', 'LRM-E4 Manifestation (Manifestação)', 'Subclasse de Res', 'A corporificação física ou digital de uma ou mais expressões de uma ou mais obras (produção editorial/industrial).'],
      ['FRBR Grupo 1: Item', 'LRM-E5 Item (Item)', 'Subclasse de Res', 'Um exemplar único e individual de uma manifestação (o objeto concreto ou arquivo singular possuído pela biblioteca).'],
      ['FRBR Grupo 2: Person + Corporate Body + FRAD Family', 'LRM-E6 Agent (Agente)', 'Subclasse de Res', 'Entidade capaz de realizar ações deliberadas e deter responsabilidade sobre obras, expressões, manifestações ou itens.'],
      ['FRBR Grupo 2 / FRAD: Person', 'LRM-E7 Person (Pessoa)', 'Subclasse de Agent', 'Um indivíduo humano vivo ou já falecido.'],
      ['FRAD: Corporate Body + Family', 'LRM-E8 Collective Agent (Agente Coletivo)', 'Subclasse de Agent', 'Um grupo ou organização de pessoas que atuam de forma coordenada, formal ou informalmente.'],
      ['FRSAD: Nomen', 'LRM-E9 Nomen (Nomen)', 'Subclasse de Res', 'Qualquer signo ou sequência de signos (nome, termo, código, símbolo) pelo qual uma entidade é conhecida, referida ou designada.'],
      ['FRBR Grupo 3 / FRAD: Place', 'LRM-E10 Place (Lugar)', 'Subclasse de Res', 'Uma extensão ou ponto físico no espaço terrestre ou extraterrestre.'],
      ['FRSAD (implícito) / FRAD', 'LRM-E11 Time-span (Intervalo de Tempo)', 'Subclasse de Res', 'Uma extensão temporal definida, tendo início, fim e duração precisa ou estimada.'],
      ['FRSAD: Thema', 'Absorvido por LRM-E1 Res', 'Equivalência Total', 'No LRM não há entidade "Thema" separada: qualquer Res (obra, agente, lugar, etc.) pode ser assunto de uma Work.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Origem, Fundamentação e Evolução Epistemológica

A modelagem de dados bibliográficos sofreu uma profunda transformação conceitual no final do século XX. O modelo tradicional de fichas e os formatos de intercâmbio legíveis por máquina (como o MARC original) foram desenvolvidos sob um prisma estritamente documental e descritivo: descrevia-se "o livro em mãos" (*document-centric*).

Para responder aos desafios das bases de dados automatizadas e à explosão de recursos eletrônicos em múltiplos suportes, a IFLA (*International Federation of Library Associations and Institutions*) constituiu em 1990 o Grupo de Estudos sobre os Requisitos Funcionais para Registros Bibliográficos, presidido por Olivia Madison. 

O resultado foi a publicação, em 1998, do relatório final dos **FRBR (*Functional Requirements for Bibliographic Records*)**, marco divisor da Biblioteconomia contemporânea (IFLA, 1998; Mey & Silveira, 2009).

#### A. A Metodologia Entidade-Relacionamento (E-R)
Os FRBR adotaram a metodologia de **Modelagem Entidade-Relacionamento (E-R)**, proposta originalmente pelo cientista da computação **Peter Chen** em 1976. Em termos formais:
* **Entidade:** O objeto de interesse no universo do discurso bibliográfico, sobre o qual se deseja coletar ou armazenar dados.
* **Atributo:** Característica, propriedade ou dado descritivo que singulariza uma entidade (ex.: título, data, extensão física).
* **Relacionamento:** A ligação semântica ou funcional que interconecta duas entidades distintas (ex.: "Obra *é realizada por* Expressão", "Pessoa *cria* Obra").

---

### 2. A Família FRBR Clássica (1998 – 2010)

O ecossistema original da IFLA desenvolveu-se em três publicações sequenciais complementares, que a literatura e a banca Cebraspe denominam como "a família FR":

#### A. O Modelo FRBR (1998)
Estruturou o universo dos registros bibliográficos em **10 entidades**, divididas em **três grupos funcionais**:
1. **Grupo 1 — Produtos do Esforço Intelectual ou Artístico (O Quarteto WEMI):**
   * **Obra (*Work*):** Criação intelectual ou artística pura, autônoma e abstrata. Não possui matéria nem suporte.  
     *Exemplo:* O romance *Dom Casmurro* concebido por Machado de Assis em 1899.
   * **Expressão (*Expression*):** A realização intelectual ou artística da obra sob uma forma linguística, textual, sonora, gráfica ou notacional específica.  
     *Exemplo:* O texto original em português redigido por Machado; a tradução para a língua inglesa realizada por Helen Caldwell; a gravação sonora do romance em audiolivro.  
     *Casca de Banana Cebraspe:* Qualquer alteração que modifique os signos ou o conteúdo intelectual (tradução, adaptação infantil, revisão textual substancial, nova orquestração) cria uma **nova expressão**.
   * **Manifestação (*Manifestation*):** A corporificação material ou digital de uma ou mais expressões de uma obra. Representa a produção física, industrial ou eletrônica.  
     *Exemplo:* A edição lançada pela Editora Record em 2020 (brochura, 208 páginas, com ISBN próprio); a edição crítica da Garnier de 1900; o arquivo digital em formato EPUB disponibilizado pela plataforma Domínio Público.  
     *Casca de Banana Cebraspe:* Alterações de editora, ano de publicação, tipografia, paginação, suporte físico (papel vs. CD-ROM vs. arquivo PDF) criam uma **nova manifestação** da mesma expressão.
   * **Item (*Item*):** Um exemplar concreto, singular e tangível de uma manifestação. É a unidade física ou o arquivo unívoco mantido sob custódia de uma biblioteca específica.  
     *Exemplo:* O volume físico existente na Biblioteca da Câmara dos Deputados com o carimbo patrimonial nº 104.592 e com dedicatória manuscrita na folha de guarda.
2. **Grupo 2 — Responsáveis pelo Conteúdo (Agentes):**
   * **Pessoa (*Person*):** Indivíduo humano vivo ou falecido.
   * **Entidade Coletiva (*Corporate Body*):** Organização ou grupo formal de pessoas que atua como uma unidade (governos, universidades, tribunais, conferências).
3. **Grupo 3 — Assuntos das Obras (Temas):**
   * **Conceito (*Concept*):** Noção abstrata, ideia ou princípio científico/filosófico (ex.: *Direito Constitucional*, *Sustentabilidade*).
   * **Objeto (*Object*):** Coisa material, inanimada ou animada (ex.: *Satélite Sputnik*, *Palácio Tiradentes*).
   * **Evento (*Event*):** Acontecimento histórico ou temporal delimitado (ex.: *Revolução Constitucionalista de 1932*, *Conferência de Estocolmo*).
   * **Lugar (*Place*):** Localização geográfica ou espacial (ex.: *Brasília*, *Rio São Francisco*).  
   *Nota Canônica:* As entidades dos Grupos 1 e 2 também funcionam como assuntos do Grupo 3 (uma Obra, Pessoa ou Entidade pode ser tema de uma obra biográfica ou crítica).

#### B. As Quatro Tarefas do Usuário nos FRBR (1998)
O FRBR estabeleceu que a avaliação de qualidade de qualquer catálogo depende de sua eficácia em apoiar quatro tarefas fundamentais do usuário:
1. **Encontrar (*Find*):** Encontrar recursos que correspondam aos critérios de busca do usuário (autor, assunto, título, data).
2. **Identificar (*Identify*):** Confirmar que o recurso encontrado corresponde à entidade procurada (distinguir edições homônimas ou homônimos de autores).
3. **Selecionar (*Select*):** Escolher o recurso que atende às necessidades do usuário (selecionar o idioma adequado, o formato PDF ou impresso).
4. **Obter (*Obtain*):** Adquirir ou ter acesso físico/eletrônico ao recurso (empréstimo domiciliar, download de documento, compra).

#### C. FRAD (2009) e FRSAD (2010)
* **FRAD (*Functional Requirements for Authority Data*, 2009):** Ampliou o modelo para o controle de autoridade de nomes de pessoas, famílias e entidades coletivas, introduzindo a entidade **Família** no rol de agentes e formalizando as tarefas: *Encontrar*, *Identificar*, *Contextualizar* (*Contextualise*) e *Justificar* (*Justify*).
* **FRSAD (*Functional Requirements for Subject Authority Data*, 2010):** Dedicou-se à autoridade de assunto, sintetizando o universo temático em duas entidades: **Thema** (qualquer coisa que pode ser assunto de uma obra) e **Nomen** (qualquer signo, símbolo, código ou palavra utilizada para designar um Thema).

---

### 3. A Unificação Definitiva: O IFLA LRM (2017)

Para sanar inconsistências lógicas e discrepâncias de modelagem entre os três relatórios anteriores (FRBR, FRAD e FRSAD), a IFLA desenvolveu o **IFLA LRM (*Library Reference Model*)**, aprovado em agosto de 2017 e elaborado por Pat Riva, Patrick Le Bœuf e Maja Žumer.

O IFLA LRM é uma **ontologia de alto nível** baseada no paradigma orientado a objetos, desenhada especificamente para conectar catálogos bibliográficos à Web Semântica e ao universo dos Dados Conectados (*Linked Open Data*).

#### A. A Estrutura Hierárquica e a Superclasse "Res"
Ao contrário dos FRBR, onde as entidades eram tratadas em silos conceituais planos, o IFLA LRM organiza suas entidades em uma estrutura hierárquica rigorosa de herança (superclasses e subclasses).

A raiz do modelo é a entidade **LRM-E1 Res** (do latim: *coisa*), definida como:
> *"Qualquer entidade no universo do discurso; inclui tudo o que pode ser de interesse para catalogadores ou usuários."*

Como consequência direta do princípio de herança ontológica:
* Todas as entidades de LRM-E2 a LRM-E11 são **subclasses de Res**.
* Toda e qualquer entidade herda os atributos e relacionamentos de Res.
* Não existe mais uma entidade "Thema" separada (como havia no FRSAD): como qualquer entidade é uma *Res*, **qualquer entidade pode ser assunto de uma Obra** (*Work*).

\`\`\`mermaid
graph TD
    Res["LRM-E1 Res (Entidade Raiz)"]
    Res --> Work["LRM-E2 Work"]
    Res --> Expr["LRM-E3 Expression"]
    Res --> Manif["LRM-E4 Manifestation"]
    Res --> Item["LRM-E5 Item"]
    Res --> Agent["LRM-E6 Agent"]
    Agent --> Person["LRM-E7 Person"]
    Agent --> CollAgent["LRM-E8 Collective Agent"]
    Res --> Nomen["LRM-E9 Nomen"]
    Res --> Place["LRM-E10 Place"]
    Res --> TimeSpan["LRM-E11 Time-span"]
\`\`\`

#### B. As 11 Entidades Oficiais do IFLA LRM
1. **LRM-E1 Res:** Superclasse universal. Qualquer conceito, objeto, pessoa, evento ou entidade material/imaterial.
2. **LRM-E2 Work (Obra):** Criação intelectual ou artística pura e distinta (subclasse de Res).
3. **LRM-E3 Expression (Expressão):** A realização intelectual ou artística de uma obra sob forma de signos linguísticos, sonoros, visuais, notacionais, etc. (subclasse de Res).
4. **LRM-E4 Manifestation (Manifestação):** O conjunto de todos os suportes físicos ou digitais que corporificam a mesma expressão com idênticas características de produção industrial/editorial (subclasse de Res).
5. **LRM-E5 Item (Item):** Um exemplar físico ou digital singular de uma manifestação (subclasse de Res).
6. **LRM-E6 Agent (Agente):** Qualquer entidade dotada de capacidade de ação intencional e que assume direitos e responsabilidades legais/intelectuais (subclasse de Res; superclasse de Person e Collective Agent).
7. **LRM-E7 Person (Pessoa):** Um ser humano individual, vivo ou falecido (subclasse de Agent).
8. **LRM-E8 Collective Agent (Agente Coletivo):** Reunião ou organização de duas ou mais pessoas que operam de modo coordenado como uma unidade deliberativa. Engloba as antigas entidades *Corporate Body* (órgãos, empresas, tribunais) e *Family* (famílias, dinastias) do FRAD, bem como grupos informais com atuação conjunta (subclasse de Agent).
9. **LRM-E9 Nomen (Nomen):** Qualquer signo ou combinação ordenada de signos (letras, numerais, símbolos, palavras, códigos alfanuméricos) pelo qual uma entidade é nomeada, referida ou identificada no discurso humano (subclasse de Res).
10. **LRM-E10 Place (Lugar):** Uma extensão espacial ou localização delimitada no espaço geográfico terrestre ou extraterrestre (subclasse de Res).
11. **LRM-E11 Time-span (Intervalo de Tempo):** Uma extensão temporal delimitada que possui data de início, data de término e duração contínua (subclasse de Res).

#### C. As 5 Tarefas do Usuário no IFLA LRM
O IFLA LRM consolidou as tarefas do usuário em **exatamente cinco ações cognitivas e operacionais**:
1. **Encontrar (*Find*):** Localizar informações sobre uma ou mais entidades em um catálogo a partir de atributos ou relações pesquisadas.
2. **Identificar (*Identify*):** Reconhecer com exatidão se a entidade localizada corresponde à entidade desejada pelo usuário, distinguindo entidades semelhantes ou homônimas.
3. **Selecionar (*Select*):** Determinar a adequação da entidade encontrada às necessidades do usuário (idioma, versão, formato de acesso, suporte).
4. **Obter (*Obtain*):** Acessar o conteúdo do recurso de forma física (empréstimo de estante) ou digital (download, streaming, visualização web).
5. **EXPLORAR (*Explore*):** Descobrir novas entidades, conexões e relações contextuais a partir da navegação em teias de dados conectados e associações semânticas entre obras, agentes, assuntos e períodos temporais.  
   *(Atenção: A tarefa "Explorar" foi formalmente introduzida pelo LRM, refletindo as potencialidades da Web Semântica e do Linked Open Data).*

---

### 4. Relacionamentos Fundamentais do IFLA LRM

Os relacionamentos no LRM são expressos na forma de predicados lógicos direcionados:

* **Relacionamentos Estruturais do WEMI:**
  * Work *is realized through* Expression (Uma Obra é realizada por meio de uma ou mais Expressões).
  * Expression *is embodied in* Manifestation (Uma Expressão é corporificada em uma ou mais Manifestações).
  * Manifestation *is exemplified by* Item (Uma Manifestação é exemplificada por um ou mais Itens).
* **Relacionamento Temático Fundamental:**
  * Work *has as subject* Res (Uma Obra tem como assunto qualquer Res).  
    *Regra de Ouro:* A relação de assunto vincula-se **estritamente à Obra (Work)**. Manifestações e Itens não têm assunto próprio; eles corporificam expressões de obras que tratam de um assunto.
* **Relacionamento de Atribuição de Nome:**
  * Res *is appellation of / is named by* Nomen (Qualquer Res é designada por um ou mais Nomens).
* **Relacionamentos de Agência:**
  * Agent *created* Work (Agente criou Obra).
  * Agent *realized* Expression (Agente realizou Expressão — ex.: tradutor, ilustrador, narrador).
  * Agent *manufactured / distributed* Manifestation (Agente produziu/distribuiu Manifestação — editora, tipógrafo).
  * Agent *owns* Item (Agente possui/custodia Item — biblioteca, colecionador).

---

### 5. Aplicação Prática: Desmontagem de Casos Reais de Provas

Para consolidar a teoria em nível de prova Cebraspe, analise o desdobramento do seguinte caso do universo jurídico-governamental:

| Nível Ontológico | Elemento Prático | Justificativa Catalográfica |
| :--- | :--- | :--- |
| **LRM-E2 Work** | *Lei nº 14.133, de 1º de abril de 2021* (Nova Lei de Licitações e Contratos Administrativos). | O conceito jurídico e dispositivo normativo aprovado pelo Congresso Nacional, independentemente de sua formatação. |
| **LRM-E3 Expression 1** | O texto oficial sancionado em língua portuguesa publicado originariamente. | A realização da obra em signos alfanuméricos da língua portuguesa. |
| **LRM-E3 Expression 2** | A tradução oficial para o idioma inglês encomendada pelo Ministério das Relações Exteriores. | Nova expressão, pois houve alteração na realização semiótica/linguística. |
| **LRM-E3 Expression 3** | O audiolivro com a gravação da leitura integral da lei para pessoas com deficiência visual. | Nova expressão, pois houve transposição do código textual para o código sonoro. |
| **LRM-E4 Manifestation 1** | Edição impressa em brochura pelas Edições Câmara em 2021 (ISBN 978-65-87317-00-1). | Corporificação física com atributos industriais e comerciais próprios. |
| **LRM-E4 Manifestation 2** | Arquivo digital em formato PDF disponível no Portal da Legislação do Planalto. | Nova manifestação (suporte digital e características técnicas distintas). |
| **LRM-E5 Item** | O exemplar físico tombado sob o nº de patrimônio 2021.0049 na estante 12B da Biblioteca do STJ. | O objeto físico singular mantido sob a guarda da unidade de informação. |`,
  checkpoints: [
    {
      id: 'cp-2-3-1',
      pergunta: 'Micro-Checkpoint 1: O Quarteto WEMI do Grupo 1 do FRBR / IFLA LRM',
      item: 'No modelo conceitual IFLA LRM, a tradução da obra Dom Quixote para a língua portuguesa e a sua narração em formato de audiolivro constituem novas manifestações da mesma expressão textual original.',
      gabarito: 'E',
      justificativa: 'Errado! A tradução para outro idioma e a narração sonora modificam a forma de realização semiótica e os signos linguísticos do conteúdo, constituindo, portanto, NOVAS EXPRESSÕES (LRM-E3) da mesma obra, e não meras manifestações.',
    },
    {
      id: 'cp-2-3-2',
      pergunta: 'Micro-Checkpoint 2: Unificação e a Superclasse Res no IFLA LRM',
      item: 'O modelo IFLA LRM (Library Reference Model), aprovado em 2017, consolidou e substituiu os modelos conceituais FRBR, FRAD e FRSAD, adotando a entidade máxima Res como a superclasse universal de todas as demais entidades do universo do discurso.',
      gabarito: 'C',
      justificativa: 'Correto! O IFLA LRM estabeleceu a entidade LRM-E1 Res como superclasse raiz, da qual todas as demais entidades (Work, Expression, Manifestation, Item, Agent, Nomen, etc.) derivam por herança direta ou indireta.',
    },
    {
      id: 'cp-2-3-3',
      pergunta: 'Micro-Checkpoint 3: As Tarefas do Usuário no IFLA LRM',
      item: 'Em comparação com o modelo FRBR original, que contemplava as quatro tarefas clássicas (Find, Identify, Select, Obtain), o IFLA LRM incorporou formalmente a quinta tarefa do usuário denominada Explorar (Explore).',
      gabarito: 'C',
      justificativa: 'Certo! O IFLA LRM define exatamente cinco tarefas do usuário: Encontrar (Find), Identificar (Identify), Selecionar (Select), Obter (Obtain) e Explorar (Explore), enfatizando a navegação por teias de dados conectados (Linked Data).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-3-1',
        periodo: '1998',
        disciplina: 'IFLA FRBR',
        focoPrincipal: 'Publicação do relatório dos Requisitos Funcionais para Registros Bibliográficos: metodologia E-R, quarteto WEMI e 4 tarefas do usuário.',
        figuraChave: 'IFLA Study Group on FRBR (Olivia Madison)',
      },
      {
        id: 'tl-2-3-2',
        periodo: '2009 / 2010',
        disciplina: 'FRAD e FRSAD',
        focoPrincipal: 'Extensão da modelagem conceitual para registros de autoridade de nomes (FRAD: pessoa, família, entidade) e autoridade temática (FRSAD: Thema e Nomen).',
        figuraChave: 'Glenn Patton e Maja Žumer',
      },
      {
        id: 'tl-2-3-3',
        periodo: '2017',
        disciplina: 'IFLA LRM',
        focoPrincipal: 'Consolidação e unificação definitiva dos três modelos no Library Reference Model: 11 entidades, superclasse Res e 5 tarefas do usuário.',
        figuraChave: 'Pat Riva, Patrick Le Bœuf e Maja Žumer',
      },
    ],
    autores: [
      {
        id: 'aut-2-3-1',
        nome: 'Pat Riva',
        ano: 2017,
        obraPrincipal: 'IFLA Library Reference Model (LRM)',
        ideiaChave: 'Liderou o comitê que unificou FRBR, FRAD e FRSAD em uma ontologia de alto nível voltada aos dados abertos conectados (Linked Data).',
        chipPegadinha: 'Res é a superclasse raiz e engloba o antigo Thema do FRSAD; Agente Coletivo uniu Família e Entidade Coletiva.',
      },
      {
        id: 'aut-2-3-2',
        nome: 'Peter Chen',
        ano: 1976,
        obraPrincipal: 'The Entity-Relationship Model: Toward a Unified View of Data',
        ideiaChave: 'Cientista da computação que formulou a Modelagem Entidade-Relacionamento (E-R), paradigma adotado pela IFLA para superar o modelo documental plano.',
        chipPegadinha: 'O modelo FRBR não é um software nem um banco de dados relacional físico: é um modelo conceitual E-R abstrato.',
      },
      {
        id: 'aut-2-3-3',
        nome: 'Eliane Mey e Naira Silveira',
        ano: 2009,
        obraPrincipal: 'Catalogação no Plural',
        ideiaChave: 'Principal referência bibliográfica brasileira sobre a transição do paradigma documental clássico para a modelagem conceitual FRBR.',
        chipPegadinha: 'Enfatizam a ruptura entre o "registro plano de ficha" e a rede de entidades interligadas por relacionamentos semânticos.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-3-1',
        afirmacao: 'O modelo FRBR é composto por nove entidades divididas em três grupos, sendo o Grupo 1 constituído por conceito, objeto, evento e lugar.',
        gabarito: 'E',
        porQue: 'O Grupo 1 é rigorosamente formado pelo quarteto WEMI (Obra, Expressão, Manifestação e Item). Conceito, Objeto, Evento e Lugar compõem o Grupo 3 do FRBR.',
      },
      {
        id: 'peg-2-3-2',
        afirmacao: 'No IFLA LRM, os atributos de assunto (subject) podem ser vinculados diretamente a manifestações ou a itens individuais.',
        gabarito: 'E',
        porQue: 'No IFLA LRM, o relacionamento "has as subject" vincula-se de forma estrita à entidade Work (LRM-E2). Uma manifestação ou item apenas veicula expressões de uma obra temática.',
      },
      {
        id: 'peg-2-3-3',
        afirmacao: 'O IFLA LRM manteve integralmente as quatro tarefas do usuário propostas no FRBR de 1998, considerando que a exploração contextual é uma tarefa exclusiva de cientistas da computação.',
        gabarito: 'E',
        porQue: 'O IFLA LRM incorporou expressamente a quinta tarefa do usuário: Explorar (Explore), voltada à navegação em redes de dados semânticos.',
      },
    ],
  },
};
