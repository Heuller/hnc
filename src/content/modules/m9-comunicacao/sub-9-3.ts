import type { ModuloFilho } from '../../../domain/types';

export const submodulo93: ModuloFilho = {
  id: 'sub-9-3',
  numero: '9.3',
  editalRef: 'Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9',
  preRequisitos: ["sub-9-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Direito autoral, limitações dos arts. 46 a 48 e dados abertos governamentais."
      },
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência, LAI e LGPD",
          "motivo": "Equilíbrio entre publicidade estatal e tutela da propriedade intelectual."
      }
  ],
  titulo: 'Curadoria Digital, Gestão de Dados de Pesquisa, Direitos Autorais e Creative Commons',
  antesDeLer: [
    {
      termo: 'Curadoria Digital',
      definicao: 'Manutenção, preservação e agregação de valor a dados de pesquisa e acervos digitais ao longo de todo o seu ciclo de vida.',
      exemploBiblioteca: 'Preservação e validação de metadados dos conjuntos de dados brutos que subsidiaram relatórios de comissões parlamentares de inquérito.',
    },
    {
      termo: 'Plano de Gestão de Dados (PGD / DMP)',
      definicao: 'Documento formal elaborado antes da pesquisa que descreve como os dados serão coletados, organizados, preservados e compartilhados.',
      exemploBiblioteca: 'Orientação do bibliotecário aos consultores legislativos na elaboração de PGDs para grandes estudos amostrais.',
    },
    {
      termo: 'Licenças Creative Commons (CC)',
      definicao: 'Instrumentos jurídicos padronizados que autorizam o público a utilizar, compartilhar e reutilizar obras protegidas por direitos autorais.',
      exemploBiblioteca: 'Adoção da licença CC BY 4.0 em todas as bases e publicações do portal da Câmara, permitindo livre reuso com citação da fonte.',
    },
    {
      termo: 'Lei de Direitos Autorais (Lei nº 9.610/1998)',
      definicao: 'Legislação brasileira que disciplina os direitos morais e patrimoniais de autores sobre criações do espírito expressas em qualquer suporte.',
      exemploBiblioteca: 'Aplicação das exceções e limitações do direito autoral para cópia e consulta em bibliotecas públicas sem infração legal.',
    },
  ],
  descricaoCurta: 'Ciclo de vida dos dados de pesquisa e Planos de Gestão de Dados (PGD), curadoria digital (DCC), a Lei de Direitos Autorais brasileira (Lei 9.610/98: direitos morais vs. patrimoniais e limitações), o sistema Creative Commons e métricas de impacto editorial (JCR/Garfield).',
  tempoEstimadoMinutos: 27,
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

\`\`\`timeline
P1 | 1º Paradigma: Empírico / Experimental | Antiguidade e Idade Média | Observação direta e descrição de fenômenos naturais sem formalização matemática abstrata
---> Formalização Teórica
P2 | 2º Paradigma: Teórico / Analítico | Revolução Científica (Galileu, Newton) | Leis universais da física, equações analíticas, modelos teóricos e generalizações generalizáveis
---> Computação Eletrônica
P3 | 3º Paradigma: Computacional / Simulacional | Pós-Guerra / Século XX | Simulações complexas de equações diferenciais em computadores para fenômenos não observáveis diretamente
---> Dilúvio de Dados
P4 | 4º Paradigma: e-Science / Big Data | Século XXI (Jim Gray) | Investigação intensiva em dados brutos (*Data-Intensive Science*), mineração distribuída e curadoria digital permanente
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

A **Curadoria Digital** transcende a preservação digital técnica e o arquivamento passivo. Na linha do *Digital Curation Centre* (Reino Unido) e dos estudos de Luís Fernando Sayão e Luana Farias Sales (2014):

<!-- [NÃO CONFERIDO]: convertido de aspas rígidas em paráfrase autoral doutrinária -->
> **Conceituação Doutrinária (DCC; Sayão & Sales, 2014):** Segundo as formulações do Digital Curation Centre e de Sayão & Sales (2014), a Curadoria Digital consiste na gestão ativa, seleção, preservação continuada, enriquecimento com metadados e agregação de valor aos ativos digitais durante todo o seu ciclo vital, prevenindo a degradação e a obsolescência para assegurar a autenticidade e o reúso legítimo no longo prazo.

\`\`\`timeline
C1 | 1. Conceber (Conceptualise) | Planejamento Inicial | Definir métodos de captura, requisitos de dados e formatos de preservação no Plano de Gestão de Dados (PGD)
---> Coleta e Documentação
C2 | 2. Criar ou Receber (Create/Receive) | Produção dos Ativos | Gerar os dados conforme protocolos técnicos e registrar metadados de proveniência inicial
---> Aplicação da Política Institucional
C3 | 3. Avaliar e Selecionar (Appraise & Select) | Filtragem Técnica | Determinar quais conjuntos de dados possuem valor de longo prazo para custódia permanente
---> Validação de Fixidez e Formato
C4 | 4. Ingerir (Ingest) | Entrada no Repositório | Transferência para o repositório confiável com verificação de integridade (*checksum*) e empacotamento
---> Conversão e Tratamento Perene
C5 | 5. Ação de Preservação (Preservation Action) | Salvaguarda Técnica | Limpeza, conversão para formatos abertos padrão (ex.: CSV, PNG, TIFF) e monitoramento de integridade
---> Custódia Segura e Redundante
C6 | 6. Armazenar (Store) | Infraestrutura Físico-Digital | Armazenamento em servidores seguros com redundância geográfica e política de cópias múltiplas (LOCKSS)
---> Disseminação e Localização
C7 | 7. Acesso, Uso e Reúso (Access & Reuse) | Entrega à Sociedade | Disponibilização via identificadores persistentes (DOI), interfaces de busca abertas e licenças Creative Commons
---> Criação de Novos Conhecimentos
C8 | 8. Transformar (Transform) | Retroalimentação Científica | Criação de novos subconjuntos de dados derivados, migrações para padrões futuros e reprocessamento
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

\`\`\`tree
TITLE: Estrutura dos Direitos Autorais na Lei Federal nº 9.610/1998
- Direitos Autorais no Brasil (Lei 9.610/98) | Proteção jurídica das criações do espírito expressas em qualquer suporte
  - Direitos Morais do Autor (Art. 24) | Vínculo perene de personalidade entre o criador e a sua criação
    - Características Canônicas | Inalienáveis, irrenunciáveis e imprescritíveis (não podem ser vendidos nem cedidos)
    - Paternidade da Obra | Direito de reivindicar a autoria a qualquer tempo e ter o nome ou pseudônimo indicado
    - Integridade e Ineditismo | Direito de manter a obra inédita e opor-se a alterações que desabonem a criação
    - Modificação e Retirada | Direito de alterar a obra ou retirá-la de circulação por motivo de consciência moral
  - Direitos Patrimoniais do Autor (Arts. 28 a 45) | Prerrogativa de exploração econômica e fruição pecuniária
    - Características Canônicas | Renunciáveis, alienáveis, transferíveis, cedíveis contratualmente e temporários
    - Modalidades de Exploração | Reprodução integral/parcial, tradução, adaptação, distribuição, edição e venda
    - Prazo de Proteção Geral | Perduram por 70 anos contados de 1º de janeiro do ano subsequente ao falecimento do autor
    - Domínio Público | Findo o prazo de 70 anos pós-morte (ou para autores falecidos sem herdeiros), a obra cai em domínio público
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

### 4. Limitações aos Direitos Autorais na Lei nº 9.610/1998 Constituem Rol Taxativo (Numerus Clausus)

O sistema jurídico brasileiro adota o modelo de **rol taxativo (numerus clausus)** de exceções aos direitos autorais. O Brasil **não adota** a doutrina aberta norte-americana do *fair use* (uso razoável). Portanto, somente as condutas expressamente tipificadas nos artigos 46 a 48 da Lei nº 9.610/1998 dispensam a autorização prévia e o pagamento de retribuição ao titular:

##### 1. As Hipóteses do Artigo 46 de Maior Relevância para Bibliotecas:
* **Citação Justificada (Art. 46, VIII):** É livre a citação em livros, revistas ou relatórios de passagens de qualquer obra para fins de estudo, crítica ou polêmica, na medida estritamente necessária para o fim a atingir, **indicando-se obrigatoriamente o nome do autor e a origem da obra**.
* **Reprodução Privada de Pequenos Trechos (Art. 46, II):** É livre a reprodução, em **um só exemplar de pequenos trechos**, para **uso privado do copista**, desde que feita por este e **sem intuito de lucro**.
  * *Conceito de Pequenos Trechos:* A lei não fixou percentual numérico (não existe a lenda urbana dos "10% ou 20%"). A doutrina e a jurisprudência do STJ definem pequeno trecho como fração que não concorra com a exploração comercial da obra original nem desestimule sua aquisição (ex.: um capítulo, um artigo de periódico, poucas páginas).
  * *Proibição da Obra Integral:* É terminantemente proibida a cópia reprográfica ou digital integral de livros, mesmo para fins exclusivamente didáticos ou de estudo.
* **Acessibilidade para Pessoas com Deficiência (Art. 46, I, 'd' e Tratado de Marraqueche):**
  * A Lei 9.610/98 autoriza a reprodução para uso exclusivo de pessoas com deficiência visual ou outras dificuldades para ter acesso ao texto impresso, sem fins comerciais, em Braille ou outro suporte adaptado.
  * *Tratado de Marraqueche (promulgado pelo Decreto nº 9.522/2018):* Possui estatura de emenda constitucional (CF, art. 5º, § 3º) e autoriza "entidades autorizadas" (incluindo bibliotecas públicas e universitárias) a produzir, disponibilizar e intercambiar transfronteiriçamente cópias em formatos acessíveis (DAISY, audiolivros, e-books acessíveis) para beneficiários sem incorrer em infração autoral.
* **Instrução Probatória e Atos Oficiais (Art. 46, I, 'c'):** É livre a utilização de trechos de obras em juízo ou procedimentos administrativos para prova judiciária ou instrução probatória.
* **Execução em Estabelecimentos de Ensino (Art. 46, VI):** É livre a representação teatral e a execução musical, quando realizadas no recesso familiar ou, para fins exclusivamente didáticos, nos estabelecimentos de ensino, sem intuito de lucro.
* **Retrato Encomendado (Art. 46, V):** A utilização de retrato sob encomenda pelo proprietário da coisa.

##### 2. Paródias, Paráfrases e Obras em Logradouro Público (Arts. 47 e 48):
* **Paródias e Paráfrases (Art. 47):** São livres as paráfrases e paródias que não forem verdadeiras reproduções da obra originária nem lhe trouxerem descrédito.
* **Obras em Logradouros Públicos (Art. 48):** As obras situadas permanentemente em logradouros públicos (esculturas, estátuas, monumentos, fachadas de edifícios) podem ser representadas livremente por meio de pinturas, desenhos, fotografias e procedimentos audiovisuais.

##### 3. O que NÃO É Permitido às Bibliotecas (Práticas Ilegais e Distratores Cebraspe):
1. **Fotocópia ou Digitalização Integral de Livros:** Ainda que a obra esteja esgotada nas livrarias, que a biblioteca seja pública e gratuita, ou que a cópia se destine a estudante carente, a reprodução integral sem autorização do autor/editor é ilícita (jurisprudência consolidada na Súmula 522 do STJ).
2. **Digitalização de Acervo para Download Aberto na Internet:** Escanear o acervo físico protegido para disponibilização em PDF no portal da biblioteca sem licença prévia constitui violação de direitos autorais.
3. **Empréstimo Digital Não Licenciado (*Controlled Digital Lending - CDL* sem amparo legal):** O empréstimo físico é legítimo pelo princípio do exaurimento dos direitos de distribuição do exemplar (Art. 37); contudo, a transmissão digital envolve ato autônomo de reprodução e comunicação ao público (Art. 29), exigindo contratos de licenciamento eletrônico com editoras.
4. **Reprodução Integral de Partituras Musicais:** A reprodução integral de partituras é proibida pela Lei 9.610/98 em qualquer hipótese não autorizada.

##### 4. Quadro Comparativo Estruturado: O que Pode vs. O que Não Pode em Bibliotecas

| Ação em Unidade de Informação | É Permitido por Lei? | Dispositivo Legal da Lei 9.610/1998 | Condições Mandatórias e Requisitos |
| :--- | :---: | :--- | :--- |
| **Cópia de pequenos trechos para estudo** | **SIM** | Art. 46, inciso II | Cópia de 1 só exemplar, feita pelo próprio copista, para uso privado e sem intuito de lucro. |
| **Cópia integral de livro pelo usuário ou biblioteca** | **NÃO** | Art. 29, I e Art. 46, II (STJ Súmula 522) | Proibido mesmo para fins educativos, sem lucro ou para livros esgotados. |
| **Conversão para formatos acessíveis (Braille, áudio)** | **SIM** | Art. 46, I, 'd' e Decreto nº 9.522/2018 | Uso exclusivo de pessoas com deficiência, sem fins comerciais, por entidades autorizadas. |
| **Citação de passagens em artigos ou pareceres** | **SIM** | Art. 46, inciso VIII | Na medida estrita do fim científico/crítico, com indicação expressa de autor e fonte. |
| **Disponibilização de PDF integral protegido na web** | **NÃO** | Art. 29, incisos I e VII | Violação de reprodução e disponibilização pública; exige licença ou domínio público. |
| **Fotografar monumento permanente em praça pública** | **SIM** | Art. 48 | A obra deve estar em logradouro público em caráter permanente. |
| **Elaboração de paródia ou paráfrase** | **SIM** | Art. 47 | Não pode ser mera cópia disfarçada nem trazer descrédito à honra do autor. |
| **Empréstimo de livro físico adquirido legalmente** | **SIM** | Art. 37 (Exaurimento da distribuição) | A aquisição do exemplar físico esgota o direito do titular de impedir o empréstimo gratuito. |

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

$\\text{FI}_{\\text{Ano } A} = \\frac{\\text{Citações recebidas no Ano } A \\text{ a artigos publicados nos Anos } (A-1) \\text{ e } (A-2)}{\\text{Número de itens citáveis publicados nos Anos } (A-1) \\text{ e } (A-2)}$

* **A Distorção dos "Itens Citáveis" (*Citable Items* — Pegadinha de Ouro Cebraspe):**
  * O denominador computa estritamente **artigos de pesquisa originais e artigos de revisão**;
  * O denominador **NÃO inclui** cartas ao editor (*letters*), editoriais, resenhas de livros, obituários ou erratas;
  * Contudo, se um editorial ou carta receber citações no ano de referência, essas citações entram normalmente no **numerador**! Periódicos que publicam cartas e comentários muito citados conseguem inflar artificialmente seu Fator de Impacto.
* **Autocitação de Periódicos (*Journal Self-Citation*):** Citações que os artigos de uma revista fazem a artigos da própria revista. Quando essa taxa ultrapassa limites razoáveis ou quando há "cartéis de citação" entre periódicos parceiros, a Clarivate Analytics aplica a pena de **supressão (*title suppression*)**, excluindo o periódico do JCR por um ou mais anos.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Governança da Informação e de Dados (sub-1-6):** Direito autoral, limitações dos arts. 46 a 48 e dados abertos governamentais.
* **Transparência, LAI e LGPD (sub-11-12):** Equilíbrio entre publicidade estatal e tutela da propriedade intelectual.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Curadoria Digital**, a **Gestão de Dados de Pesquisa (GDP)** e as licenças de **Direito Autoral e Creative Commons** garantem a preservação ativa e o reuso legal da informação:
1. **O Ciclo de Curadoria Digital (Modelo DCC - *Digital Curation Centre*):**
   - Curadoria digital é a gestão ativa e contínua, conservação e preservação de dados e objetos digitais ao longo de todo o seu ciclo de vida.
   - **Ações Seqüenciais do Modelo DCC:** Conceituação $\to$ Criação ou Coleta de dados $\to$ Avaliação e Seleção $\to$ Ingresso (*Ingest*) $\to$ Ações de Preservação $\to$ Armazenamento seguro $\to$ Acesso, uso e reuso $\to$ Transformação (migração de dados).
2. **Plano de Gestão de Dados (PGD / DMP - *Data Management Plan*):**
   - Documento formal obrigatório em agências de fomento (CNPq, FAPESP) e órgãos públicos que descreve: que dados serão coletados, quais formatos abertos serão usados, como serão documentados com metadados, onde serão arquivados e como serão compartilhados.
3. **Direito Autoral Brasileiro (Lei Federal nº 9.610/1998):**
   - **Direitos Morais:** Imprescritíveis, inalienáveis e irrenunciáveis (reivindicar a autoria, ter seu nome indicado, defender a integridade da obra). O autor **nunca pode vender ou renunciar** a seus direitos morais!
   - **Direitos Patrimoniais:** O direito exclusivo de utilizar, fruir e dispor da obra (reproduzir, editar, comercializar, traduzir). Podem ser cedidos ou transferidos a terceiros.
   - **Prazo de Proteção Geral:** Os direitos patrimoniais perduram por **70 anos contados de 1º de janeiro do ano subsequente ao falecimento do autor** (art. 41). Após esse prazo, a obra cai em **Domínio Público**.
   - **Exclusões da Proteção Autoral (Art. 8º da Lei 9.610/98):** Leis, decretos, decisões judiciais e atos oficiais do governo **NÃO são protegidos por direito autoral** (são de livre reprodução pública!).
4. **Licenças Creative Commons (CC):**
   - Conjunto modular de licenças públicas baseadas em 4 cláusulas:
     - \`BY\` (Atribuição): Obrigatoriedade de dar os créditos ao autor original. Presente em **todas as licenças CC**!
     - \`NC\` (Não Comercial): Proíbe o uso para fins comerciais ou de lucro.
     - \`ND\` (Sem Derivações): Proíbe alterações, traduções ou obras derivadas.
     - \`SA\` (Compartilha Igual): Exige que obras derivadas usem a mesma licença aberta.
   - A licença \`CC BY\` é a mais aberta; a \`CC BY-NC-ND\` é a mais restritiva.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Livre Uso de Leis e Atos Oficiais conforme o Art. 8º da Lei 9.610/98):** Uma editora privada publica uma coletânea comercial com o texto integral do Regimento Interno da Câmara dos Deputados. O bibliotecário sabe que isso é **perfeitamente legítimo e legal**, pois textos de leis e atos regimentais públicos não possuem direito autoral (art. 8º da Lei nº 9.610/98).
- **Cenário 2 (Aplicação de Licença Creative Commons CC BY na BDCam):** Todas as publicações e relatórios técnicos das Edições Câmara são disponibilizados no portal sob licença **CC BY 4.0 Internacional**. Qualquer cidadão ou pesquisador pode copiar, traduzir e até criar aplicativos comerciais usando esses relatórios, desde que dê o devido crédito institucional à Câmara dos Deputados.
- **Cenário 3 (Cálculo de Domínio Público em Obras Raras da Biblioteca):** Um pesquisador deseja digitalizar os livros de um deputado constituinte falecido em 1952. O bibliotecário calcula: falecimento em 1952 $\to$ contagem inicia em 1º de janeiro de 1953 $\to$ 70 anos completados em 31 de dezembro de 2022. Em **1º de janeiro de 2023** a obra caiu oficialmente em **domínio público**, podendo ser integralmente escaneada e disponibilizada na web sem autorização de herdeiros.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Vertente / Cláusula CC | Natureza Jurídica | Alienabilidade / Cessão | Regra Inegociável |
| :--- | :--- | :--- | :--- |
| **Direitos Morais** | Ligados à personalidade | **Inalienáveis e irrenunciáveis** | O autor nunca perde o direito à paternidade |
| **Direitos Patrimoniais** | Econômicos / Comerciais | Podem ser cedidos e vendidos | Duram 70 anos *post mortem* auctoris |
| **Atos Oficiais e Leis** | Sem direito autoral (Art. 8º) | Domínio público permanente | Livre reprodução por qualquer cidadão |
| **Cláusula CC BY** | Atribuição de autoria | Obrigatória em todas as licenças | Sempre deve citar o autor original |
| **Cláusula CC ND** | Sem derivações (*NoDerivs*) | Proíbe adaptações e traduções | Só permite distribuição da cópia idêntica |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Cessão dos Direitos Morais em Contrato de Trabalho:** O Cebraspe afirma que o contrato de trabalho de um servidor da Câmara pode prever a renúncia expressa aos seus direitos morais de autor sobre os livros que escrever. **Gabarito: ERRADO.** O art. 27 da Lei nº 9.610/98 é taxativo: os direitos morais são **inalienáveis e irrenunciáveis**; qualquer cláusula de renúncia é juridicamente nula.
- **Contagem do Prazo de 70 Anos de Domínio Público:** A banca conta os 70 anos a partir do dia exato do falecimento do autor. **Gabarito: ERRADO.** O prazo conta-se **a partir de 1º de janeiro do ano subsequente** ao falecimento (art. 41).
- **Direito Autoral de Leis e Sentenças:** Afirmar que uma lei federal ou decisão judicial do STF é protegida por direito autoral. **Gabarito: ERRADO.** O art. 8º da Lei nº 9.610/98 exclui taxativamente textos de tratados, leis, decretos, regulamentos e decisões judiciais da proteção de direitos autorais.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 9.610, de 19 de fevereiro de 1998*. Altera, atualiza e consolida a legislação sobre direitos autorais. (A lei canônica de direito autoral no Brasil).
- **DIGITAL CURATION CENTRE (DCC).** *DCC Curation Lifecycle Model*. Edinburgh: DCC, 2008. (O modelo canônico internacional de curadoria digital).
- **SAYÃO, Luís Fernando; SALES, Luana Farias.** Dados de pesquisa: um novo desafio para os bibliotecários. *Biblios: Journal of Librarianship and Information Science*, n. 48, p. 1-14, 2012.
- **LESSIG, Lawrence.** *Free Culture: How Big Media Uses Technology and the Law to Lock Down Culture and Control Creativity*. New York: Penguin Press, 2004. (A base conceitual das licenças Creative Commons).
- **BITTAR, Carlos Alberto.** *Direito de autor*. 6. ed. Rio de Janeiro: Forense Universitária, 2015.`,
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
      pergunta: 'Micro-Checkpoint 2: Limitações aos Direitos Autorais em Bibliotecas (Lei nº 9.610/1998)',
      item: 'Nos termos da Lei nº 9.610/1998, é lícito a uma biblioteca pública realizar a reprodução fotocopiada ou digital integral de livros protegidos por direitos autorais para empréstimo aos seus usuários, desde que a instituição não persiga intuito de lucro.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme a Lei nº 9.610/1998 (art. 29, I, e art. 46, II) e a jurisprudência pacificada do STJ (Súmula 522/STJ), a ausência de intuito de lucro não autoriza a reprodução integral de obras protegidas. A limitação legal do art. 46, II, restringe-se estritamente à cópia em um só exemplar de pequenos trechos para uso privado do copista.',
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
