import type { ModuloFilho } from '../../../domain/types';

export const submodulo93: ModuloFilho = {
  id: 'sub-9-3',
  numero: '9.3',
  titulo: 'Curadoria Digital, Gestão de Dados de Pesquisa, Direitos Autorais e Creative Commons',
  descricaoCurta: 'Ciclo de vida dos dados de pesquisa e Planos de Gestão de Dados (PGD), curadoria digital (DCC), a Lei de Direitos Autorais brasileira (Lei 9.610/98: direitos morais vs. patrimoniais e limitações), o sistema Creative Commons e métricas de impacto editorial (JCR/Garfield).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Digital Curation Centre (DCC)', 'Lawrence Lessig', 'Luís Fernando Sayão & Luana Sales', 'Eugene Garfield', 'Lei 9.610/1998', 'IBICT'],
  alertasCebraspe: [
    'Curadoria Digital: processo dinâmico, abrangente e contínuo que envolve a seleção, preservação, manutenção, agregação de valor e arquivamento de ativos digitais durante todo o seu ciclo de vida para viabilizar seu reúso futuro e confiável (questão literal do Cebraspe no STJ 2024 e EMBRAPA 2025).',
    'Direitos Morais vs. Direitos Patrimoniais (Lei nº 9.610/1998): os direitos morais (reivindicação de paternidade, integridade, conservação inédita) são INALIENÁVEIS, IRRENUNCIÁVEIS e IMPRESCRITÍVEIS (Art. 24). Os direitos patrimoniais (reprodução, distribuição, tradução, cessão comercial) são alienáveis, negociáveis e temporários.',
    'Prazo de proteção dos direitos patrimoniais no Brasil (Art. 41): perduram por 70 ANOS, contados de 1º de janeiro do ano subsequente ao FALECIMENTO do autor (post mortem auctoris). Não confunda com a data de publicação ou com o prazo de 50 anos de outros tratados internacionais!',
    'Limitações aos Direitos Autorais (Art. 46): a citação de passagens para estudo, crítica ou polêmica com menção expressa de autor e fonte, e a cópia de pequenos trechos para uso privado do copista sem intuito de lucro NÃO constituem ofensa aos direitos autorais.',
    'Creative Commons (Lawrence Lessig): a condição "BY" (Atribuição) é OBRIGATÓRIA em todas as seis licenças padronizadas. A licença CC0 representa a renúncia voluntária máxima aos direitos patrimoniais em prol do Domínio Público.',
    'Fator de Impacto (Eugene Garfield - JCR / Web of Science): calcula a razão entre citações no ano X e os artigos citáveis publicados no biênio precedente (X-1 e X-2). O denominador inclui apenas itens citáveis (artigos originais e de revisão), excluindo cartas e editoriais.',
  ],
  quadroComparativo: {
    titulo: 'As Seis Licenças Oficiais do Creative Commons e Instrumentos de Domínio Público',
    colunas: ['Licença / Instrumento', 'Módulos Ativos', 'Uso Comercial?', 'Obras Derivadas?', 'Exigência Copyleft?', 'Aplicações Típicas'],
    linhas: [
      ['CC0 (Domínio Público)', 'Nenhum (Renúncia universal)', 'Sim', 'Sim', 'Não', 'Bases de dados abertos (Open Data), metadados de bibliotecas e genômica'],
      ['CC BY', 'BY (Atribuição)', 'Sim', 'Sim', 'Não (livre escolha posterior)', 'Artigos em periódicos de Acesso Aberto ouro (SciELO, PLOS, Nature Comms)'],
      ['CC BY-SA', 'BY + SA (ShareAlike)', 'Sim', 'Sim', 'Sim (mesma licença CC BY-SA)', 'Wikipédia, repositórios educacionais abertos e projetos comunitários'],
      ['CC BY-NC', 'BY + NC (Não Comercial)', 'Não', 'Sim', 'Não', 'Teses, dissertações e materiais de aula acadêmicos sem fins lucrativos'],
      ['CC BY-NC-SA', 'BY + NC + SA', 'Não', 'Sim', 'Sim (mesma licença CC BY-NC-SA)', 'Recursos educacionais institucionais com proteção contra apropriação privada'],
      ['CC BY-ND', 'BY + ND (Sem Derivações)', 'Sim', 'Não (cópia integral apenas)', 'Não se aplica', 'Relatórios oficiais, pareceres técnicos e manifestos políticos integrais'],
      ['CC BY-NC-ND', 'BY + NC + ND', 'Não', 'Não (cópia integral sem lucro)', 'Não se aplica', 'A mais restritiva de todas: e-books comerciais de divulgação gratuita'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Da e-Science à Gestão de Dados de Pesquisa (*RDM*)

Com a emergência do chamado **Quarto Paradigma da Ciência** (formulado pelo cientista da computação Jim Gray), a investigação científica deixou de ser puramente experimental, teórica ou computacional simulada, passando a ser **intensiva em dados (*Data-Intensive Science* ou *e-Science*)**.

Nesse novo ecossistema, os **dados de pesquisa (*Research Data*)** ganharam o estatuto de produtos informacionais primários autônomos, exigindo tratamento documental tão rigoroso quanto as publicações bibliográficas tradicionais (Sayão & Sales, 2014; IBICT):

\`\`\`mermaid
flowchart LR
    A["1º Paradigma:<br/>Empírico/Experimental<br/>(Observação direta)"] --> B["2º Paradigma:<br/>Teórico/Analítico<br/>(Leis da Física/Modelos)"]
    B --> C["3º Paradigma:<br/>Computacional<br/>(Simulações complexas)"]
    C --> D["4º Paradigma:<br/>e-Science / Big Data<br/>(Intensivo em Dados Brutos)"]
\`\`\`

#### A. Tipologia de Dados de Pesquisa
A literatura e o Cebraspe classificam os dados de pesquisa quanto à sua origem e natureza:
* **Dados Observacionais:** Capturados em tempo real por sensores, satélites, questionários de campo ou observação astronômica. São **únicos e irrepetíveis** (se perdidos, jamais poderão ser reproduzidos exatamente sob as mesmas condições).
* **Dados Experimentais:** Gerados em ensaios controlados em laboratório (ex.: reações químicas, culturas biológicas). Em tese são reproduzíveis, embora a um custo financeiro e temporal elevadíssimo.
* **Dados Computacionais / Simulados:** Fruto de modelos matemáticos e simulações em supercomputadores (ex.: modelos climáticos ou de aerodinâmica). Dependem criticamente da preservação do código-fonte e dos parâmetros de entrada.
* **Dados Derivados ou Compilados:** Resultados de análises, agregações, data mining e transformações efetuadas sobre dados primários pré-existentes.
* **Dados Canônicos ou de Referência:** Conjuntos consolidados e certificados internacionalmente (ex.: sequências de DNA no GenBank, tabelas de constantes físicas do NIST).

#### B. Planos de Gestão de Dados (*PGD / Data Management Plan - DMP*)
O **Plano de Gestão de Dados (PGD)** é o documento formal, dinâmico e prospectivo elaborado pelos pesquisadores antes ou no início de um projeto científico, detalhando as ações de governança sobre os dados:
* **Obrigatoriedade Institucional:** Exigido pelas principais agências de fomento nacionais (FAPESP, CNPq, CAPES) e internacionais (Horizon Europe, NIH, NSF) como condicionante para liberação de verbas.
* **Componentes Canônicos de um PGD:**
  1. *Identificação e Tipos de Dados:* Descrição precisa dos formatos gerados, priorizando **formatos abertos e não proprietários** (ex.: \`.csv\` em vez de \`.xlsx\`, \`.txt\` em vez de \`.docx\`, \`.tiff\` ou \`.png\` em vez de \`.psd\`).
  2. *Metadados e Padronização:* Vocabulários controlados e esquemas de metadados adotados (ex.: Dublin Core, DataCite, proveniência W3C PROV).
  3. *Segurança e Privacidade Ético-Jurídica:* Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), protocolos de anonimização ou pseudoanonimização de participantes de pesquisas humanas.
  4. *Repositório de Depósito e Licenciamento:* Onde os dados serão arquivados perenemente (Zenodo, Figshare, Dataverse, LattesData do IBICT) e qual licença de reúso será atribuída (idealmente CC0 ou CC BY).
  5. *Preservação de Longo Prazo e Custos:* Recursos financeiros e servidores alocados para garantir a sobrevivência dos dados por pelo menos 10 a 20 anos após a conclusão do projeto.

---

### 2. Curadoria Digital e o Modelo do *Digital Curation Centre (DCC)*

A **Curadoria Digital** transcende a preservação digital técnica e o arquivamento passivo. Segundo a definição canônica do *Digital Curation Centre* (Reino Unido) e de Luís Fernando Sayão e Luana Farias Sales (2014):

> *"A Curadoria Digital é a seleção, preservação, manutenção, agregação de valor e disponibilização continuada de ativos digitais ao longo de todo o seu ciclo de vida, com o propósito de mitigar a obsolescência tecnológica, atestar sua proveniência e permitir seu reúso futuro e confiável."*

\`\`\`mermaid
flowchart TD
    subgraph Ciclo["Ciclo de Vida do Modelo DCC (Digital Curation Centre)"]
        direction TB
        C1["1. Conceber (Conceptualise)"] --> C2["2. Criar ou Receber (Create/Receive)"]
        C2 --> C3["3. Avaliar e Selecionar (Appraise & Select)"]
        C3 --> C4["4. Ingerir (Ingest)"]
        C4 --> C5["5. Ação de Preservação (Preservation Action)"]
        C5 --> C6["6. Armazenar (Store)"]
        C6 --> C7["7. Acesso, Uso e Reúso (Access, Use & Reuse)"]
        C7 --> C8["8. Transformar (Transform)"]
    end
    subgraph Continuas["Ações Contínuas (Transversais)"]
        A1["Descrição e Informação de Representação (Metadados)"]
        A2["Planejamento de Preservação"]
        A3["Monitoramento da Comunidade (Community Watch)"]
        A4["Curar e Preservar Continuamente"]
    end
    subgraph Ocasiao["Ações de Ocasião"]
        O1["Descarte (Dispose)"]
        O2["Reavaliação (Reappraise)"]
        O3["Migração de Formato (Migrate)"]
    end
    Ciclo -.-> Continuas
    Ciclo -.-> Ocasiao
\`\`\`

#### A. Ações Sequenciais do Modelo DCC:
1. **Concepção (*Conceptualise*):** Planejar a criação do ativo digital, definindo formatos de captura e requisitos de metadados.
2. **Criação ou Recepção (*Create or Receive*):** Gerar os dados conforme os padrões de qualidade e documentar os metadados de proveniência técnica.
3. **Avaliação e Seleção (*Appraise and Select*):** Aplicar políticas institucionais para decidir quais dados devem ser preservados a longo prazo e quais podem ser descartados com segurança.
4. **Ingestão (*Ingest*):** Transferir os dados e seus metadados para um repositório confiável, cumprindo critérios de validação de checksum e segurança (semelhante ao SIP do OAIS).
5. **Ação de Preservação (*Preservation Action*):** Limpeza, conversão para formatos de preservação, validação estrutural e verificação de integridade periódica.
6. **Armazenamento (*Store*):** Manter os dados em servidores seguros com estratégias de contingência e redundância geográfica (princípio LOCKSS).
7. **Acesso, Uso e Reúso (*Access, Use and Reuse*):** Disponibilizar os dados para a comunidade acadêmica e a sociedade, fornecendo interfaces de busca, APIs abertas e identificadores persistentes (DOIs).
8. **Transformação (*Transform*):** Criar novos conjuntos de dados através de agregação, reprocessamento, migração para novos formatos ou derivação de produtos informacionais.

#### B. Princípios FAIR aplicados aos Dados de Pesquisa
Formulados por Wilkinson et al. (2016), orientam a curadoria para que os dados sejam legíveis tanto por seres humanos quanto por máquinas:
* **F - Findable (Localizável):** Metadados ricos e identificadores persistentes globais e únicos (DOI, Handle).
* **A - Accessible (Acessível):** Recuperáveis por meio de protocolos de comunicação padronizados, abertos e gratuitos (ex.: HTTP/HTTPS, OAI-PMH). O acesso pode exigir autenticação e autorização por sigilo legítimo (*"tão aberto quanto possível, tão fechado quanto necessário"*).
* **I - Interoperable (Interoperável):** Uso de formatos de dados abertos, vocabulários controlados e ontologias formais compartilhadas (RDF, XML, JSON-LD).
* **R - Reusable (Reutilizável):** Documentação detalhada da proveniência, atendimento aos padrões da comunidade científica e atribuição de licenças de uso explícitas (Creative Commons).

---

### 3. A Lei de Direitos Autorais no Brasil (Lei nº 9.610/1998)

A legislação autoral brasileira insere-se no ramo do **Direito da Propriedade Intelectual**, subdividido em:
1. **Direito Autoral (Lei nº 9.610/98):** Abrange os direitos de autor e os direitos que lhes são conexos (artistas intérpretes, produtores fonográficos e empresas de radiodifusão). Registrado no Escritório de Direitos Autorais (EDA) da Biblioteca Nacional.
2. **Propriedade Industrial (Lei nº 9.279/96):** Patentes de invenção, modelos de utilidade, marcas e desenhos industriais, sob gestão do Instituto Nacional da Propriedade Industrial (INPI).
3. **Proteção *Sui Generis*:** Programas de computador (Lei nº 9.609/98) e cultivares.

#### A. O que É e o que NÃO É Objeto de Proteção Autoral
* **Obras Protegidas (Art. 7º):** As criações do espírito, expressas por qualquer meio ou fixadas em qualquer suporte, tangível ou intangível, conhecido ou que se invente no futuro (textos literários, científicos, obras dramáticas, composições musicais, ilustrações, cartas geográficas, projetos de arquitetura, coletâneas, antologias e bases de dados que constituam criação intelectual).
* **O que NÃO É Protegido (Art. 8º — Pegadinha Clássica do Cebraspe!):**
  * As ideias, procedimentos normativos, sistemas, métodos, projetos ou conceitos matemáticos como tais;
  * Os esquemas, planos ou regras para realizar atos mentais, jogos ou negócios;
  * Os formulários em branco para serem preenchidos por qualquer tipo de informação;
  * Os textos de tratados ou convenções, leis, decretos, regulamentos, decisões judiciais e demais atos oficiais;
  * As informações de uso comum, tais como calendários, agendas, cadastros ou legendas;
  * Os nomes e títulos isolados;
  * O aproveitamento industrial ou comercial das ideias contidas nas obras.

#### B. A Dicotomia Canônica: Direitos Morais vs. Direitos Patrimoniais

\`\`\`mermaid
flowchart TD
    DA["Direitos Autorais (Lei 9.610/98)"] --> DM["Direitos Morais (Art. 24)<br/>• Vínculo de personalidade<br/>• INALIENÁVEIS<br/>• IRRENUNCIÁVEIS<br/>• IMPRESCRITÍVEIS"]
    DA --> DP["Direitos Patrimoniais (Arts. 28-45)<br/>• Conteúdo econômico<br/>• CESSÍVEIS e negociáveis<br/>• TEMPORÁRIOS (70 anos pós-morte)<br/>• Prescritíveis"]
    
    DM --> DM1["Reivindicar paternidade a qualquer tempo"]
    DM --> DM2["Ter seu nome/pseudônimo indicado na obra"]
    DM --> DM3["Conservar a obra inédita"]
    DM --> DM4["Assegurar a integridade da obra"]
    
    DP --> DP1["Reprodução parcial ou integral"]
    DP --> DP2["Edição, tradução e adaptação"]
    DP --> DP3["Distribuição e comercialização"]
    DP --> DP4["Comunicação ao público"]
\`\`\`

* **Direitos Morais (Art. 24):**
  * Emana da própria condição humana do criador.
  * São **inalienáveis, irrenunciáveis e imprescritíveis**. O autor não pode, por contrato ou vontade própria, renunciar ao direito de ser reconhecido como criador de sua obra nem transferir esse vínculo moral a outrem.
  * Rol do Art. 24: I - reivindicar a autoria da obra a qualquer tempo; II - ter seu nome, pseudônimo ou sinal indicado na utilização da obra; III - conservar a obra inédita; IV - assegurar a integridade da obra, opondo-se a modificações que a desabonem; V - modificar a obra antes ou depois de utilizada; VI - retirar a obra de circulação por motivo de consciência moral (mediante indenização aos terceiros prejudicados).
* **Direitos Patrimoniais (Arts. 28 a 45):**
  * Prerrogativa exclusiva do autor de fruir e auferir os benefícios econômicos decorrentes da exploração da obra.
  * Podem ser transferidos total ou parcialmente, mediante cessão contratual, licenciamento ou transmissão causa mortis.
  * **Prazo de Proteção (Art. 41):** Os direitos patrimoniais perduram por **70 anos**, contados a partir de **1º de janeiro do ano subsequente ao do falecimento do autor** (*post mortem auctoris*).
  * Regras Especiais de Prazos:
    * *Obras anônimas ou pseudônimas:* 70 anos contados de 1º de janeiro do ano subsequente ao da primeira publicação (Art. 43).
    * *Obras audiovisuais e fotográficas:* 70 anos a contar de 1º de janeiro do ano subsequente ao de sua divulgação (Art. 44).
    * *Coautoria indivisível:* O prazo de 70 anos conta-se a partir da morte do **último dos coautores sobreviventes** (Art. 42).

#### C. Domínio Público (Art. 45)
Decorrido o prazo de 70 anos do falecimento do autor (ou do último coautor), a obra ingressa no **Domínio Público**. Também pertencem ao domínio público as obras de autores falecidos sem deixar sucessores e as obras de autores desconhecidos.
* *Atenção Cebraspe:* A entrada no domínio público extingue apenas os direitos patrimoniais (qualquer pessoa pode imprimir, traduzir ou vender a obra sem pagar direitos autorais). No entanto, os **direitos morais permanecem eternos** (é mandatório creditar a autoria original de Machado de Assis ou Shakespeare e preservar a integridade do texto!).

#### D. Limitações aos Direitos Autorais (Art. 46 — Exceções Legais de Uso Livre)
O Art. 46 lista as condutas que **não constituem ofensa aos direitos autorais** e dispensam prévia autorização ou pagamento de royalties:
* **Citação (Inciso VIII):** A citação em livros, jornais, revistas ou qualquer outro meio, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida estritamente justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra.
* **Cópia Privada de Pequenos Trechos (Inciso II):** A reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita por este e sem intuito de lucro. *(Atenção: copiar o livro inteiro em reprografia é ilegal, mas a cópia de um capítulo para estudo individual é amparada por lei!)*.
* **Acessibilidade para Pessoas com Deficiência Visual (Inciso I, 'd'):** A reprodução de obras literárias, artísticas ou científicas para uso exclusivo de deficientes visuais, sempre que a reprodução seja feita sem fins comerciais, seja em Braille ou outro procedimento em suporte adaptado.
* **Trechos para Defesa em Juízo (Inciso I, 'c'):** A utilização em juízo ou procedimentos administrativos de peças e documentos necessários à instrução probatória.
* **Paródias e Paráfrases (Art. 47):** São livres as paráfrases e paródias que não forem verdadeiras reproduções da obra originária nem lhe trouxerem descrédito.

---

### 4. O Sistema Creative Commons (Lawrence Lessig) e as Licenças Abertas

Fundado em 2001 pelo jurista norte-americano **Lawrence Lessig** na Universidade de Stanford, o projeto **Creative Commons (CC)** nasceu para sanar o descompasso entre a legislação autoral analógica e a cultura digital da internet:

* Em vez do rígido modelo binário *"Todos os direitos reservados"* (*All Rights Reserved*), o Creative Commons consagrou a flexibilidade de **"Alguns direitos reservados" (*Some Rights Reserved*)**.
* As licenças CC **não anulam nem substituem o Direito Autoral**; ao contrário, são contratos-padrão outorgados pelo próprio autor com base na legislação autoral vigente, autorizando previamente à coletividade certos usos de sua obra.

#### A. A Estrutura em Três Camadas das Licenças CC
1. **Código Legal (*Legal Code*):** O texto jurídico integral e formal, redigido por juristas especializados, para garantir validade jurídica perante os tribunais em múltiplas jurisdições ao redor do mundo.
2. **Resumo Visual / Legível por Humanos (*Commons Deed*):** Resumo simplificado da licença, com linguagem acessível e acompanhado dos ícones visuais padronizados.
3. **Código Legível por Máquinas (*Machine-Readable Code*):** Metadados estruturados em formato RDF/XML, XMP e Schema.org que permitem a mecanismos de busca (Google, Bing) e indexadores identificar automaticamente os direitos concedidos sobre o arquivo.

#### B. As Quatro Condições Modulares do Creative Commons

| Módulo | Nome Oficial | Ícone / Sigla | Significado Jurídico e Regra de Ouro |
| :--- | :--- | :---: | :--- |
| **Atribuição** | *Attribution* | **BY** | **Obrigatória em todas as licenças.** Exige que o usuário cite o autor original, forneça o link da fonte e indique se modificações foram feitas. |
| **Não Comercial** | *NonCommercial* | **NC** | Proíbe o uso da obra com intuito de lucro direto, vantagem comercial ou remuneração econômica pelo usuário. |
| **Sem Derivações** | *NoDerivatives* | **ND** | Permite a redistribuição da obra original integral, mas **veda qualquer alteração, corte, tradução, adaptação ou remixagem**. |
| **Compartilha Igual** | *ShareAlike* | **SA** | Cláusula *copyleft*: se o usuário alterar ou transformar a obra, a obra derivada **deve ser distribuída obrigatoriamente sob a mesma licença exata**. |

#### C. As Ferramentas de Domínio Público do CC
* **CC0 (*Public Domain Dedication*):** Instrumento jurídico em que o criador abdica, voluntariamente e em escala global, de todos os direitos patrimoniais e conexos sobre a obra, até o limite máximo permitido pelas leis locais. É o padrão internacional mais recomendado para **conjuntos de dados abertos (*Open Datasets*)**, pois desonera o usuário de obrigações contratuais complexas.
* **Marca de Domínio Público (*Public Domain Mark - PDM*):** Um rótulo de identificação utilizado para catalogar obras cujo prazo de proteção já expirou ou que já pertencem legitimamente ao domínio público internacional.

---

### 5. Métricas de Periódicos no Ecossistema Editorial e de Dados

Para avaliar o prestígio e o impacto de periódicos científicos que publicam dados e artigos, a Ciência da Informação utiliza métricas bibliométricas consolidadas:

#### A. Fator de Impacto (*Impact Factor - IF*) de Eugene Garfield
Desenvolvido na década de 1960 pelo fundador do *Institute for Scientific Information (ISI)*, **Eugene Garfield**, e publicado no relatório anual **Journal Citation Reports (JCR)** (atualmente mantido pela Clarivate Analytics integrado à plataforma Web of Science):

$$\text{FI}_{\text{Ano } A} = \frac{\text{Citações recebidas no Ano } A \text{ a artigos publicados nos Anos } (A-1) \text{ e } (A-2)}{\text{Número de itens citáveis publicados nos Anos } (A-1) \text{ e } (A-2)}$$

* **A Distorção dos "Itens Citáveis" (*Citable Items* — Pegadinha de Ouro Cebraspe):**
  * O denominador computa estritamente **artigos de pesquisa originais e artigos de revisão**;
  * O denominador **NÃO inclui** cartas ao editor (*letters*), editoriais, resenhas de livros, obituários ou erratas;
  * Contudo, se um editorial ou carta receber citações no ano de referência, essas citações entram normalmente no **numerador**! Periódicos que publicam cartas e comentários muito citados conseguem inflar artificialmente seu Fator de Impacto.
* **Autocitação de Periódicos (*Journal Self-Citation*):** Citações que os artigos de uma revista fazem a artigos da própria revista. Quando essa taxa ultrapassa limites razoáveis ou quando há "cartéis de citação" entre periódicos parceiros, a Clarivate Analytics aplica a pena de **supressão (*title suppression*)**, excluindo o periódico do JCR por um ou mais anos.`,
  checkpoints: [
    {
      id: 'cp-9-3-1',
      pergunta: 'Micro-Checkpoint 1: Conceito de Curadoria Digital',
      item: 'A curadoria digital pode ser corretamente definida como o processo dinâmico que compreende a seleção, a preservação, a manutenção, a agregação de valor e o arquivamento de ativos digitais ao longo de seu ciclo de vida para viabilizar seu reúso futuro.',
      gabarito: 'C',
      justificativa: 'Correto! Essa definição canônica do Digital Curation Centre (DCC) foi cobrada literalmente pelo Cebraspe em provas recentes (STJ 2024 e EMBRAPA 2025).',
    },
    {
      id: 'cp-9-3-2',
      pergunta: 'Micro-Checkpoint 2: Direitos Morais e Patrimoniais (Lei 9.610/98)',
      item: 'De acordo com a Lei de Direitos Autorais brasileira (Lei nº 9.610/1998), tanto os direitos morais quanto os direitos patrimoniais do autor sobre sua obra podem ser objeto de renúncia, cessão ou alienação comercial definitiva a terceiros.',
      gabarito: 'E',
      justificativa: 'Errado! Apenas os direitos PATRIMONIAIS podem ser cedidos ou comercializados. Os direitos MORAIS são inalienáveis, irrenunciáveis e imprescritíveis por força expressa de lei.',
    },
    {
      id: 'cp-9-3-3',
      pergunta: 'Micro-Checkpoint 3: Fator de Impacto e Autocitações de Periódicos',
      item: 'O Fator de Impacto de uma revista científica, calculado pelo Journal Citation Reports (JCR), expressa a razão entre as citações recebidas no ano de referência e o número de artigos citáveis publicados nos dois anos precedentes.',
      gabarito: 'C',
      justificativa: 'Certo! A fórmula clássica de Eugene Garfield divide o total de citações no ano X recebidas por artigos dos anos X-1 e X-2 pelo número de itens citáveis publicados nesse biênio.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-3-1',
        periodo: '1963 / 1975',
        disciplina: 'Fator de Impacto e JCR',
        focoPrincipal: 'Eugene Garfield cria o Science Citation Index (SCI) e lança o Journal Citation Reports (JCR)',
        figuraChave: 'Eugene Garfield / ISI',
      },
      {
        id: 'tl-9-3-2',
        periodo: '1998',
        disciplina: 'Legislação Autoral Brasileira',
        focoPrincipal: 'Promulgação da Lei nº 9.610/1998 (Lei de Direitos Autorais e Conexos)',
        figuraChave: 'Congresso Nacional',
      },
      {
        id: 'tl-9-3-3',
        periodo: '2001',
        disciplina: 'Licenças Livres e Cultura Aberta',
        focoPrincipal: 'Fundação do Creative Commons por Lawrence Lessig na Universidade de Stanford',
        figuraChave: 'Lawrence Lessig',
      },
      {
        id: 'tl-9-3-4',
        periodo: '2004 / 2014',
        disciplina: 'Curadoria Digital e RDM',
        focoPrincipal: 'Criação do Digital Curation Centre (DCC) e difusão dos Planos de Gestão de Dados no Brasil',
        figuraChave: 'Digital Curation Centre / Sayão & Sales',
      },
    ],
    autores: [
      {
        id: 'aut-9-3-1',
        nome: 'Lawrence Lessig',
        ano: 2001,
        obraPrincipal: 'The Future of Ideas / Free Culture',
        ideiaChave: 'Idealizador do Creative Commons e pioneiro da cultura livre no ciberespaço.',
        chipPegadinha: 'Creative Commons baseia-se na lei autoral vigente, não em sua anulação.',
      },
      {
        id: 'aut-9-3-2',
        nome: 'Luís Fernando Sayão e Luana Farias Sales',
        ano: 2014,
        obraPrincipal: 'Guia de Gestão e Curadoria de Dados de Pesquisa',
        ideiaChave: 'Pioneiros brasileiros nos estudos de curadoria digital e e-Science na Ciência da Informação.',
        chipPegadinha: 'Dados de pesquisa exigem curadoria contínua desde a fase de planejamento do projeto.',
      },
      {
        id: 'aut-9-3-3',
        nome: 'Eugene Garfield',
        ano: 1963,
        obraPrincipal: 'Science Citation Index / Essays of an Information Scientist',
        ideiaChave: 'Criador do Fator de Impacto e pioneiro da indexação por citação no ISI.',
        chipPegadinha: 'O FI calcula o impacto do periódico, e não o de um autor ou artigo específico.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-3-1',
        afirmacao: 'Na licença Creative Commons CC BY-ND (Atribuição - Sem Derivações), o usuário está plenamente autorizado a traduzir a obra para outro idioma e publicá-la comercialmente.',
        gabarito: 'E',
        porQue: 'A cláusula ND (No Derivatives / Sem Derivações) proíbe qualquer modificação, adaptação ou tradução da obra original.',
      },
      {
        id: 'peg-9-3-2',
        afirmacao: 'No Brasil, os direitos patrimoniais sobre uma obra autoral extinguem-se exatamente 50 anos após a data de sua primeira publicação impressa.',
        gabarito: 'E',
        porQue: 'O prazo no Brasil (Lei 9.610/98) é de 70 ANOS, contados de 1º de janeiro do ano subsequente ao FALECIMENTO do autor.',
      },
      {
        id: 'peg-9-3-3',
        afirmacao: 'Os direitos morais do autor sobre sua criação extinguem-se simultaneamente com a entrada da obra no domínio público, decorridos os 70 anos pós-morte.',
        gabarito: 'E',
        porQue: 'A entrada no domínio público afeta APENAS os direitos patrimoniais. Os direitos morais (paternidade e integridade) são perpétuos e imprescritíveis.',
      },
      {
        id: 'peg-9-3-4',
        afirmacao: 'Ideias inovadoras, métodos científicos e sistemas normativos descritos em artigos de periódicos são protegidos automaticamente pela Lei de Direitos Autorais nº 9.610/1998.',
        gabarito: 'E',
        porQue: 'O Artigo 8º da Lei 9.610/98 exclui expressamente da proteção autoral ideias, métodos, sistemas e conceitos puramente abstratos.',
      },
    ],
  },
};
