import type { ModuloFilho } from '../../../domain/types';

export const submodulo62: ModuloFilho = {
  id: 'sub-6-2',
  numero: '6.2',
  editalRef: 'Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12',
  preRequisitos: ["sub-2-6"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-4",
          "titulo": "MARC 21 Bibliográfico e Autoridades",
          "motivo": "Protocolo Z39.50 e catalogação cooperativa."
      },
      {
          "submoduloId": "sub-6-3",
          "titulo": "Preservação Digital e Repositórios Confiáveis",
          "motivo": "Colheita OAI-PMH de pacotes de metadados em repositórios digitais."
      }
  ],
  titulo: 'Repositórios Institucionais, Softwares de Bibliotecas e Interoperabilidade (OAI-PMH e Z39.50)',
  antesDeLer: [
  {
    "termo": "Colheita e busca",
    "definicao": "OAI-PMH colhe metadados; não é o mesmo fluxo de uma busca federada em tempo real.",
    "exemploBiblioteca": "Um índice pode estar desatualizado entre duas colheitas."
  },
  {
    "termo": "Versão de plataforma",
    "definicao": "Arquitetura e capacidades dependem da versão e da configuração.",
    "exemploBiblioteca": "Okapi é referência histórica do FOLIO; não descreve automaticamente todo release de 2026."
  }
],
  descricaoCurta: "Relacionar repositório, metadados e identificação persistente. Comparar plataformas por versão e requisitos. Distinguir pesquisa federada e índice pré-coletado. Escolher protocolo por fluxo e interpretar verbos OAI.",
  tempoEstimadoMinutos: 25,
  autoresChave: [
  "Open Archives Initiative — OAI-PMH 2.0",
  "DSpace — documentação",
  "FOLIO — Sunflower Release",
  "Library of Congress — Z39.50",
  "NISO — Open Discovery Initiative"
],
  alertasCebraspe: [
  "O protocolo distingue item, registro e recurso. O identificador OAI tem função e sintaxe próprias e não é necessariamente o identificador público do objeto.",
  "Eles usam datestamps do registro nas condições do protocolo, não data bibliográfica por padrão.",
  "O anúncio Sunflower apresenta transição a Eureka. Histórico e instalação devem ser delimitados."
],
  teoriaDensaMarkdown: "### Repositórios Institucionais (RIs) e a Arquitetura DSpace\n\nConforme **Clifford Lynch** (2003), um repositório institucional universitário ou governamental é um conjunto integrado de serviços oferecido pela organização para **gestão e disseminação da produção**, com compromissos de preservação e políticas de acesso. A existência do repositório não certifica custódia perpétua nem abertura de todo arquivo de sua produção intelectual e técnica:\n\n* **Arquitetura Hierárquica do Software DSpace:**\n  O DSpace (software de código aberto, desenvolvido em consórcio pelo MIT e HP Labs) organiza os dados em entidades e relações; subcomunidades podem existir e arquivos são organizados em bundles, sem obrigar uma árvore de cinco níveis em todo caso:\n\n$\\text{Comunidades} \\longrightarrow \\text{Subcomunidades} \\longrightarrow \\text{Coleções} \\longrightarrow \\text{Itens} \\longrightarrow \\text{Bundles} \\longrightarrow \\text{Bitstreams (Arquivos)}$\n\n  1. **Comunidades (*Communities*):** Representam grandes divisões orgânicas institucionais (ex.: CEDI, Consultoria Legislativa, Secretarias).\n  2. **Subcomunidades (*Subcommunities*):** Departamentos ou núcleos subordinados.\n  3. **Coleções (*Collections*):** Agrupamentos temáticos ou tipológicos de documentos (ex.: \"Notas Técnicas\", \"Revista de Informação Legislativa\").\n  4. **Itens (*Items*):** A unidade bibliográfica intelectual individual, descrita por metadados conforme os esquemas configurados; Dublin Core qualificado é comum, sem excluir outros esquemas.\n  5. **Bitstreams (Fluxos de Bits):** Os arquivos, organizados em bundles vinculados ao item (arquivos PDF, imagens TIFF, dados em CSV, áudios MP3).\n* **Identificadores Persistentes (Handle System):**\n  * O DSpace pode atribuir identificadores Handle conforme configuração e serviço; a resolução depende de manutenção do registro e infraestrutura.\n  * Identificação persistente ajuda a tratar mudanças de localização; não impede toda falha por si nem elimina manutenção.\n\n**Aplicação e recuperação:** Um item tem dois arquivos em bundles diferentes e acesso restrito ao arquivo principal. Metadados públicos não tornam todo conteúdo aberto. Se o servidor mudar, Handle precisa apontar ao destino atualizado; não é a string que garante continuidade. Serviço institucional exige política, responsabilidade e monitoramento.\n\n### A Evolução dos Softwares de Biblioteca: De SIGBs a Plataformas LSP\n\nA literatura especializada de Ciência da Informação (Corrêa da Silva & Borges, 2024; Viana, 2022; Chauhan et al., 2018) mapeia a transição dos sistemas de gestão:\n\n```timeline\nSIGB | 1. SIGB Tradicional Monolítico | Ênfase histórica em integração de processos | Softwares como Koha, Aleph e Pergamum: funcionalidades e arquitetura dependem da versão; SIGB também pode integrar recursos digitais e APIs\n---> Nuvem, Microsserviços e APIs REST\nLSP | 2. LSP (Library Services Platform) | Era Digital e Híbrida / Centrado em Serviços | Plataformas como FOLIO e Alma: arquiteturas e componentes específicos de cada produto/versão (físico, digital e licenças)\n---> Web Semântica e Interoperabilidade Aberta\nLINKED | 3. Dados Conectados e BIBFRAME | Próxima Fronteira dos Catálogos | Superação do padrão MARC 21 tradicional com ontologias de Linked Open Data e grafos de conhecimento\n```\n\n#### A. Sistemas Integrados de Gestão de Bibliotecas (SIGB / ILS)\n* **Koha:** Primeiro software livre de automação de bibliotecas do mundo (criado em 1999 na Nova Zelândia). Possui componentes e opções de indexação conforme a versão, com integrações catalográficas. Não se reduz toda instalação ao mesmo motor nem se usa “suporte completo” como garantia de configuração correta.\n* **Sistemas Comerciais:** Pergamum (PUCPR), SophiA e Aleph (Ex Libris).\n* **Escolha por requisitos:** SIGBs e LSPs devem ser avaliados quanto a recursos físicos/eletrônicos, integrações, circulação, licenças, dados, custos e governança. A sigla sozinha não define incapacidade estrutural ou superioridade universal.\n\n#### B. Plataformas de Serviços de Bibliotecas (LSP - *Library Services Platforms*)\n* Exemplificadas por **FOLIO** (*The Future of Library is Open*) e **Alma** (Ex Libris).\n* **Características Canônicas do FOLIO (Viana, 2022):**\n  * Projeto colaborativo de código aberto sob governança da OLE (*Open Library Environment*), EBSCO e Index Data.\n  * **Arquitetura de Microsserviços:** A modularidade é característica relevante. **Okapi** pertence à arquitetura histórica; o anúncio **Sunflower de 17/03/2026** apresenta mudança para **Eureka**, com componentes como Kong e Keycloak. A versão/instalação precisam ser delimitadas; não se descreve toda instalação atual apenas por Okapi.\n  * **Gestão Unificada de Recursos:** Busca integrar gestão de recursos e serviços. Integração depende de módulos, dados e configuração; não elimina automaticamente todo silo ou dispensa modelagem de licenças.\n  * **Interoperabilidade Avançada:** Examine o suporte efetivo a formatos e integrações em cada versão. Ser modular não prova implementação nativa completa de BIBFRAME nem conversão perfeita de todo MARC.\n\n**Aplicação e recuperação:** Uma questão de 2022 descreve Okapi; o anúncio Sunflower de 2026 apresenta Eureka. As afirmações precisam de contexto temporal. Também não se copia a arquitetura do FOLIO para Alma só porque ambos são chamados LSP. Compare módulos, integrações e versões efetivamente instalados.\n\n### Dos Catálogos ao OPAC, Metabusca e Discovery Services (WSDS)\n\n1. **OPAC (Online Public Access Catalog):** Catálogo online voltado ao acervo local da biblioteca ou de uma rede fechada.\n2. **Metabuscadores (Pesquisa Federada / Broadcast Search):**\n   * Sistemas pioneiros (MetaLib, WebBridge) que disparam uma consulta síncrona em tempo real para múltiplos servidores remotos via protocolo Z39.50 ou APIs proprietárias.\n   * *Gargalos estruturais:* Lentidão excessiva (o usuário espera a resposta do servidor mais lento da rede), falhas frequentes de timeout e desafios para comparar escores e normalizar resultados; não é impossibilidade matemática de qualquer fusão/ranqueamento.\n3. **Serviços de Descoberta Web-Scale (WSDS - *Web-Scale Discovery Services*):**\n   * Ferramentas contemporâneas como **EDS (EBSCO Discovery Service)**, **Primo**, **Summon** e **WorldCat Discovery**.\n   * *Inovação Tecnológica Central:* A pesquisa do usuário não consulta bases remotas em tempo real; ela é executada diretamente sobre um **Índice Centralizado Pré-Indexado na Nuvem (*Pre-harvested Central Index*)**.\n   * Bilhões de registros de periódicos científicos, e-books, repositórios e bases institucionais são previamente coletados, normalizados e indexados pelos provedores.\n   * A busca pode reduzir dependência de respostas remotas para o conjunto pré-indexado; desempenho e cobertura dependem do serviço, com navegação por facetas dinâmicas e relevância calculada de forma unificada.\n   * **A Iniciativa NISO ODI (*Open Discovery Initiative - NISO RP-19*):** Estabelece padrões de transparência na cobertura dos índices, promovendo práticas de transparência, sem garantir automaticamente ausência de viés comercial ou cobertura integral.\n\n**Aplicação e recuperação:** O artigo novo ainda não foi coletado pelo índice central: consulta rápida pode não encontrá-lo. Na busca federada, uma fonte indisponível pode produzir resultado parcial ou atraso. Os sistemas podem combinar fluxos; velocidade não prova completude nem identidade de cobertura. A política deve explicitar fontes, atualização e tratamento de resultados.\n\n### Protocolos de Interoperabilidade: OAI-PMH, Z39.50 e SRU/SRW\n\n#### A. O Protocolo OAI-PMH (Van de Sompel & Lagoze)\nO *Open Archives Initiative Protocol for Metadata Harvesting* é o mecanismo padrão da Web para colheita automatizada de metadados entre repositórios:\n* **Arquitetura Bipartida:**\n  * *Provedor de Dados (Data Provider):* O repositório institucional (ex.: DSpace da Câmara) que expõe seus metadados.\n  * *Provedor de Serviços (Service Provider):* O agregador ou colhedor (ex.: BDTD e Oasisbr em seus fluxos próprios; Google Acadêmico não é presumido colhedor OAI-PMH neste exemplo) que extrai os metadados periodicamente para criar serviços agregados de busca.\n* **Formato Obrigatório:** Todo repositório compatível com OAI-PMH DEVE obrigatoriamente fornecer suporte a **Dublin Core Simples** (`oai_dc`).\n* **Os Seis Verbos Canônicos de Requisição (HTTP GET/POST):**\n  1. `Identify`: Retorna informações gerais sobre o repositório (nome institucional, URL base, versão do protocolo, e-mail do administrador, política de exclusão de registros e granularidade de datas).\n  2. `ListMetadataFormats`: Retorna a lista dos formatos de metadados disponíveis pelo repositório (ex.: `oai_dc`, `mods`, `marcxml`).\n  3. `ListSets`: Lista conjuntos quando suportados. Sets são opcionais e não precisam coincidir com todas as coleções ou com a árvore institucional; pode haver resposta noSetHierarchy.\n  4. `ListIdentifiers`: Recupera apenas os cabeçalhos (*headers*) e identificadores únicos dos registros, sem transferir o corpo de metadados completo.\n  5. `GetRecord`: Obtém um registro de um item no **formato solicitado**. O identificador OAI não é necessariamente o Handle/DOI do recurso, e um registro não reúne automaticamente todos os formatos de metadados.\n  6. `ListRecords`: Realiza a colheita em massa de registros no formato solicitado, aceitando filtros por data (`from`, `until`) e conjunto (`set`).\n* **Paginação e Controle de Fluxo (*resumptionToken*):** Quando uma requisição `ListRecords` retorna milhares de registros, o repositório entrega os primeiros em lotes (ex.: 100 itens) e anexa um elemento `resumptionToken`, permitindo ao colhedor continuar a extração sem sobrecarregar o servidor.\n\n#### B. ANSI/NISO Z39.50 e os Protocolos SRU/SRW\n* **ANSI/NISO Z39.50 (ISO 23950):**\n  * Protocolo de comunicação cliente/servidor pioneiro (camada de aplicação), concebido para pesquisa distribuída e transferência de registros bibliográficos estruturados (MARC 21).\n  * Amplamente utilizado para catalogação cooperativa: o bibliotecário busca a ficha catalográfica de um livro na base da Library of Congress ou da Biblioteca Nacional e a importa diretamente para seu SIGB local via Z39.50.\n* **Protocolos SRU/SRW (*Search/Retrieve via URL / Web Service*):**\n  * Modernização do Z39.50 liderada pela Library of Congress para adaptá-lo às tecnologias contemporâneas da Web.\n  * O **SRU** utiliza requisições RESTful simples via HTTP GET (parâmetros de URL); o **SRW** utiliza mensagens estruturadas via SOAP/XML.\n  * Ambos adotam a **CQL** (*Contextual Query Language*), permitindo formular buscas booleanas, relacionais e por campos de forma padronizada.\n\n#### C. Matriz de Decisão Arquitetural: Qual Protocolo de Interoperabilidade Adotar? (Alvo E12)\nPara a gestão de tecnologia e interoperabilidade na Biblioteca da Câmara dos Deputados, a escolha do protocolo é orientada pelo cenário operacional e pelo tipo de fluxo informacional:\n\n| Protocolo / Padrão | Mecanismo e Transporte | Usos que podem ser adequados | Limites a verificar | Exemplo Prático no Legislativo |\n| :--- | :--- | :--- | :--- | :--- |\n| **OAI-PMH** (Van de Sompel & Lagoze) | **Colheita em lote assíncrona** (*Batch Harvesting*) via HTTP GET/POST com XML. Exige Dublin Core (*oai_dc*). | Alimentação de portais agregadores de dados abertos, repositórios nacionais e índices coletivos (BDTD, Oasisbr, LexML Brasil, Europeana). | Consultas interativas em tempo real de usuários no catálogo; operações transacionais (reserva, empréstimo); transferência de arquivos binários pesados. | O Repositório Digital da Câmara dos Deputados expondo metadados para coleta periódica pelo IBICT (Oasisbr). |\n| **ANSI/NISO Z39.50** (ISO 23950) | **Busca síncrona cliente/servidor com sessão (*stateful*)** em implementações usuais sobre TCP, com porta 210 convencional, não obrigatória universal. A sintaxe de registros é negociada; não se limita conceitualmente a MARC 21. | **Catalogação cooperativa pontual**: importação direta de registros bibliográficos da Library of Congress ou Biblioteca Nacional para o SIGB local. | Aplicações web modernas e leves no navegador; ambientes com firewalls restritivos que barram a porta 210; agregação de grandes volumes de dados. | Bibliotecário da Câmara importando a ficha MARC 21 de um livro estrangeiro diretamente do servidor Z39.50 da LoC. |\n| **SRU / SRW** (Library of Congress) | **Busca síncrona na Web** via HTTP GET (SRU) ou SOAP (SRW) com sintaxe CQL (*Contextual Query Language*) e XML. | Consultas bibliográficas padronizadas pela Web entre bibliotecas parceiras que requerem busca por campos sem manter sessão TCP aberta na porta 210. | Colheita massiva de acervos inteiros em lote (cenário próprio do OAI-PMH); transações operacionais de circulação de exemplares. | Consulta federada a catálogos legislativos estaduais a partir do portal da Biblioteca Pedro Aleixo via HTTP/CQL. |\n| **APIs RESTful** (HTTP / JSON) | **Integração transacional e microsserviços em tempo real** com representações e operações definidas pela API; JSON/HTTPS são escolhas comuns, não definição universal de REST. | Interligação do SIGB com o Portal da Câmara, aplicativos móveis para parlamentares e cidadãos, serviços de circulação (renovação, reserva) e gateways LSP (Okapi/FOLIO). | Intercâmbio formal com agregadores acadêmicos internacionais que exigem estrita conformidade com o protocolo OAI-PMH e Dublin Core. | Aplicativo móvel da Câmara consultando em tempo real o status de disponibilidade de um exemplar na Biblioteca Pedro Aleixo. |\n\n**Aplicação e recuperação:** Para coleta incremental OAI, from/until usam o datestamp pertinente à criação/modificação/exclusão do registro, não a data de publicação da obra. resumptionToken é opaco: a continuação usa a combinação de argumentos definida pelo protocolo, sem recompor livremente todos os filtros junto ao token. Um GetRecord pede um formato; ListMetadataFormats informa os disponíveis. OAI trata metadados, não renovação de empréstimo ou transmissão automática de todos os binários.",
  teoriaDidaticaMarkdown: "### Revisão: fluxo e versão antes da sigla\n\nRI não garante abertura de todo conteúdo nem preservação automática. DSpace possui entidades e bundles; identificador persistente requer manutenção. Compare SIGB/LSP por requisitos. FOLIO histórico usou Okapi; Sunflower anuncia Eureka em 2026. Pesquisa federada consulta fontes; descoberta usa índice previamente agregado e pode ter defasagem. OAI-PMH: seis verbos, XML/HTTP, oai_dc mínimo, formatos adicionais, sets opcionais, datestamps e token opaco. Identificador de item OAI não é necessariamente DOI/Handle do recurso. Z39.50/SRU e APIs atendem fluxos diferentes, sem uma escolha universal.\n",
  checkpoints: [
  {
    "id": "cp-6-2-1",
    "pergunta": "Micro-Checkpoint 1: O Papel do Protocolo OAI-PMH",
    "item": "O protocolo OAI-PMH é um mecanismo de comunicação que permite a colheita automatizada de metadados entre repositórios provedores de dados e sistemas provedores de serviços, exigindo como formato mínimo o padrão Dublin Core.",
    "gabarito": "C",
    "justificativa": "O protocolo 2.0 usa colheita HTTP/XML e exige Dublin Core não qualificado como mínimo. Pode oferecer formatos adicionais e não transmite automaticamente todos os arquivos do objeto.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative."
  },
  {
    "id": "cp-6-2-2",
    "pergunta": "Micro-Checkpoint 2: Diferença entre Metabusca e Discovery Services (WSDS)",
    "item": "Diferentemente dos metabuscadores tradicionais, que disparam consultas simultâneas distribuídas em tempo real a múltiplos servidores, os serviços de descoberta web-scale (WSDS) realizam a pesquisa sobre um índice centralizado previamente coletado e normalizado na nuvem.",
    "gabarito": "C",
    "justificativa": "O contraste descreve o índice previamente agregado, mas não garante milissegundos, cobertura integral nem ausência de consultas adicionais em implementações híbridas. Atribuir essa tecnologia genericamente a Lynch 2003 seria impróprio.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative."
  },
  {
    "id": "cp-6-2-3",
    "pergunta": "Micro-Checkpoint 3: Arquitetura de Microsserviços do FOLIO",
    "item": "A plataforma FOLIO (The Future of Library is Open) é estruturada como um sistema integrado monolítico de código proprietário, inviabilizando a adição ou substituição modular de componentes de gestão bibliotecária.",
    "gabarito": "E",
    "justificativa": "FOLIO é projeto de código aberto e modular. Okapi é referência histórica; a atualização de 2026 anuncia Eureka. O item erra ao descrevê-lo como monolítico proprietário.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "versao_correta": "FOLIO é modular e de código aberto; seus componentes devem ser descritos conforme a versão."
  },
  {
    "id": "rt-6-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O identificador OAI-PMH de um item precisa ser necessariamente o mesmo DOI ou Handle do recurso descrito.",
    "gabarito": "E",
    "justificativa": "O protocolo distingue item, registro e recurso. O identificador OAI tem função e sintaxe próprias e não é necessariamente o identificador público do objeto.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar",
    "versao_correta": "O identificador OAI não precisa coincidir com DOI/Handle do recurso."
  },
  {
    "id": "rt-6-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Os filtros from e until do OAI-PMH devem ser aplicados automaticamente ao ano de publicação da obra.",
    "gabarito": "E",
    "justificativa": "Eles usam datestamps do registro nas condições do protocolo, não data bibliográfica por padrão.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar",
    "versao_correta": "A coleta seletiva por data usa o datestamp pertinente ao registro."
  },
  {
    "id": "rt-6-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um índice pré-coletado pode oferecer resposta rápida e ainda não conter registros recém-publicados.",
    "gabarito": "C",
    "justificativa": "Latência de consulta e atualização/cobertura são dimensões diferentes.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Descrever FOLIO apenas por Okapi, sem versão, é suficiente para representar toda arquitetura anunciada em 2026.",
    "gabarito": "E",
    "justificativa": "O anúncio Sunflower apresenta transição a Eureka. Histórico e instalação devem ser delimitados.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar",
    "versao_correta": "A arquitetura deve ser descrita conforme versão; Sunflower anuncia mudança para Eureka."
  },
  {
    "id": "rt-6-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O suporte obrigatório a oai_dc não impede um repositório de oferecer outros formatos no OAI-PMH.",
    "gabarito": "C",
    "justificativa": "Dublin Core não qualificado é mínimo de interoperabilidade, não exclusividade de formato.",
    "fonte": "Open Archives Initiative, OAI-PMH 2.0; DSpace, modelo de dados; FOLIO, arquitetura e release Sunflower (17/03/2026); Library of Congress, Z39.50/SRU; NISO, Open Discovery Initiative.",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-2-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Instalar software de repositório basta, por si só, para assegurar participação, qualidade dos depósitos e preservação sustentável.",
    "gabarito": "E",
    "justificativa": "A plataforma é parte do serviço; política, pessoas, fluxos e recursos precisam de gestão.",
    "fonte": "Open Archives Initiative — OAI-PMH 2.0",
    "editalRef": "Bloco E - Item 1.1 a 1.5 e 1.9 a 1.12",
    "habilidade": "aplicar",
    "versao_correta": "Instalação não substitui política, curadoria e sustentabilidade."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-6-2-fonte-oai",
      "nome": "Open Archives Initiative — OAI-PMH 2.0",
      "ano": "Referência de consulta",
      "obraPrincipal": "Open Archives Initiative — OAI-PMH 2.0",
      "ideiaChave": "Itens, registros, identificadores, datas, conjuntos, verbos e controle de fluxo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-2-fonte-dspace",
      "nome": "DSpace — documentação",
      "ano": "Referência de consulta",
      "obraPrincipal": "DSpace — documentação",
      "ideiaChave": "Modelo de dados e configuração; versão deve ser explicitada.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-2-fonte-folio",
      "nome": "FOLIO — Sunflower Release",
      "ano": "Referência de consulta",
      "obraPrincipal": "FOLIO — Sunflower Release",
      "ideiaChave": "Anúncio de 17/03/2026: transição de Okapi para Eureka; não generalizar a toda instalação histórica.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-2-fonte-loc",
      "nome": "Library of Congress — Z39.50",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — Z39.50",
      "ideiaChave": "Protocolos de busca e recuperação e referências SRU.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-2-fonte-odi",
      "nome": "NISO — Open Discovery Initiative",
      "ano": "Referência de consulta",
      "obraPrincipal": "NISO — Open Discovery Initiative",
      "ideiaChave": "Transparência, cobertura e práticas de descoberta; não garante desempenho universal.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-6-2-4",
      "afirmacao": "Descrever FOLIO apenas por Okapi, sem versão, é suficiente para representar toda arquitetura anunciada em 2026.",
      "gabarito": "E",
      "porQue": "O anúncio Sunflower apresenta transição a Eureka. Histórico e instalação devem ser delimitados."
    },
    {
      "id": "memoria-rt-6-2-5",
      "afirmacao": "O suporte obrigatório a oai_dc não impede um repositório de oferecer outros formatos no OAI-PMH.",
      "gabarito": "C",
      "porQue": "Dublin Core não qualificado é mínimo de interoperabilidade, não exclusividade de formato."
    },
    {
      "id": "memoria-rt-6-2-6",
      "afirmacao": "Instalar software de repositório basta, por si só, para assegurar participação, qualidade dos depósitos e preservação sustentável.",
      "gabarito": "E",
      "porQue": "A plataforma é parte do serviço; política, pessoas, fluxos e recursos precisam de gestão."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-6-2-bloco-1",
    "titulo": "Repositórios Institucionais (RIs) e a Arquitetura DSpace",
    "objetivos": [
      "Relacionar repositório, metadados e identificação persistente."
    ],
    "conteudo": "Conforme **Clifford Lynch** (2003), um repositório institucional universitário ou governamental é um conjunto integrado de serviços oferecido pela organização para **gestão e disseminação da produção**, com compromissos de preservação e políticas de acesso. A existência do repositório não certifica custódia perpétua nem abertura de todo arquivo de sua produção intelectual e técnica:\n\n* **Arquitetura Hierárquica do Software DSpace:**\n  O DSpace (software de código aberto, desenvolvido em consórcio pelo MIT e HP Labs) organiza os dados em entidades e relações; subcomunidades podem existir e arquivos são organizados em bundles, sem obrigar uma árvore de cinco níveis em todo caso:\n\n$\\text{Comunidades} \\longrightarrow \\text{Subcomunidades} \\longrightarrow \\text{Coleções} \\longrightarrow \\text{Itens} \\longrightarrow \\text{Bundles} \\longrightarrow \\text{Bitstreams (Arquivos)}$\n\n  1. **Comunidades (*Communities*):** Representam grandes divisões orgânicas institucionais (ex.: CEDI, Consultoria Legislativa, Secretarias).\n  2. **Subcomunidades (*Subcommunities*):** Departamentos ou núcleos subordinados.\n  3. **Coleções (*Collections*):** Agrupamentos temáticos ou tipológicos de documentos (ex.: \"Notas Técnicas\", \"Revista de Informação Legislativa\").\n  4. **Itens (*Items*):** A unidade bibliográfica intelectual individual, descrita por metadados conforme os esquemas configurados; Dublin Core qualificado é comum, sem excluir outros esquemas.\n  5. **Bitstreams (Fluxos de Bits):** Os arquivos, organizados em bundles vinculados ao item (arquivos PDF, imagens TIFF, dados em CSV, áudios MP3).\n* **Identificadores Persistentes (Handle System):**\n  * O DSpace pode atribuir identificadores Handle conforme configuração e serviço; a resolução depende de manutenção do registro e infraestrutura.\n  * Identificação persistente ajuda a tratar mudanças de localização; não impede toda falha por si nem elimina manutenção.\n\n**Aplicação e recuperação:** Um item tem dois arquivos em bundles diferentes e acesso restrito ao arquivo principal. Metadados públicos não tornam todo conteúdo aberto. Se o servidor mudar, Handle precisa apontar ao destino atualizado; não é a string que garante continuidade. Serviço institucional exige política, responsabilidade e monitoramento.",
    "checkpointIds": [
      "rt-6-2-6"
    ]
  },
  {
    "id": "sub-6-2-bloco-2",
    "titulo": "A Evolução dos Softwares de Biblioteca: De SIGBs a Plataformas LSP",
    "objetivos": [
      "Comparar plataformas por versão e requisitos."
    ],
    "conteudo": "A literatura especializada de Ciência da Informação (Corrêa da Silva & Borges, 2024; Viana, 2022; Chauhan et al., 2018) mapeia a transição dos sistemas de gestão:\n\n```timeline\nSIGB | 1. SIGB Tradicional Monolítico | Ênfase histórica em integração de processos | Softwares como Koha, Aleph e Pergamum: funcionalidades e arquitetura dependem da versão; SIGB também pode integrar recursos digitais e APIs\n---> Nuvem, Microsserviços e APIs REST\nLSP | 2. LSP (Library Services Platform) | Era Digital e Híbrida / Centrado em Serviços | Plataformas como FOLIO e Alma: arquiteturas e componentes específicos de cada produto/versão (físico, digital e licenças)\n---> Web Semântica e Interoperabilidade Aberta\nLINKED | 3. Dados Conectados e BIBFRAME | Próxima Fronteira dos Catálogos | Superação do padrão MARC 21 tradicional com ontologias de Linked Open Data e grafos de conhecimento\n```\n\n#### A. Sistemas Integrados de Gestão de Bibliotecas (SIGB / ILS)\n* **Koha:** Primeiro software livre de automação de bibliotecas do mundo (criado em 1999 na Nova Zelândia). Possui componentes e opções de indexação conforme a versão, com integrações catalográficas. Não se reduz toda instalação ao mesmo motor nem se usa “suporte completo” como garantia de configuração correta.\n* **Sistemas Comerciais:** Pergamum (PUCPR), SophiA e Aleph (Ex Libris).\n* **Escolha por requisitos:** SIGBs e LSPs devem ser avaliados quanto a recursos físicos/eletrônicos, integrações, circulação, licenças, dados, custos e governança. A sigla sozinha não define incapacidade estrutural ou superioridade universal.\n\n#### B. Plataformas de Serviços de Bibliotecas (LSP - *Library Services Platforms*)\n* Exemplificadas por **FOLIO** (*The Future of Library is Open*) e **Alma** (Ex Libris).\n* **Características Canônicas do FOLIO (Viana, 2022):**\n  * Projeto colaborativo de código aberto sob governança da OLE (*Open Library Environment*), EBSCO e Index Data.\n  * **Arquitetura de Microsserviços:** A modularidade é característica relevante. **Okapi** pertence à arquitetura histórica; o anúncio **Sunflower de 17/03/2026** apresenta mudança para **Eureka**, com componentes como Kong e Keycloak. A versão/instalação precisam ser delimitadas; não se descreve toda instalação atual apenas por Okapi.\n  * **Gestão Unificada de Recursos:** Busca integrar gestão de recursos e serviços. Integração depende de módulos, dados e configuração; não elimina automaticamente todo silo ou dispensa modelagem de licenças.\n  * **Interoperabilidade Avançada:** Examine o suporte efetivo a formatos e integrações em cada versão. Ser modular não prova implementação nativa completa de BIBFRAME nem conversão perfeita de todo MARC.\n\n**Aplicação e recuperação:** Uma questão de 2022 descreve Okapi; o anúncio Sunflower de 2026 apresenta Eureka. As afirmações precisam de contexto temporal. Também não se copia a arquitetura do FOLIO para Alma só porque ambos são chamados LSP. Compare módulos, integrações e versões efetivamente instalados.",
    "checkpointIds": [
      "cp-6-2-3",
      "rt-6-2-4"
    ]
  },
  {
    "id": "sub-6-2-bloco-3",
    "titulo": "Dos Catálogos ao OPAC, Metabusca e Discovery Services (WSDS)",
    "objetivos": [
      "Distinguir pesquisa federada e índice pré-coletado."
    ],
    "conteudo": "1. **OPAC (Online Public Access Catalog):** Catálogo online voltado ao acervo local da biblioteca ou de uma rede fechada.\n2. **Metabuscadores (Pesquisa Federada / Broadcast Search):**\n   * Sistemas pioneiros (MetaLib, WebBridge) que disparam uma consulta síncrona em tempo real para múltiplos servidores remotos via protocolo Z39.50 ou APIs proprietárias.\n   * *Gargalos estruturais:* Lentidão excessiva (o usuário espera a resposta do servidor mais lento da rede), falhas frequentes de timeout e desafios para comparar escores e normalizar resultados; não é impossibilidade matemática de qualquer fusão/ranqueamento.\n3. **Serviços de Descoberta Web-Scale (WSDS - *Web-Scale Discovery Services*):**\n   * Ferramentas contemporâneas como **EDS (EBSCO Discovery Service)**, **Primo**, **Summon** e **WorldCat Discovery**.\n   * *Inovação Tecnológica Central:* A pesquisa do usuário não consulta bases remotas em tempo real; ela é executada diretamente sobre um **Índice Centralizado Pré-Indexado na Nuvem (*Pre-harvested Central Index*)**.\n   * Bilhões de registros de periódicos científicos, e-books, repositórios e bases institucionais são previamente coletados, normalizados e indexados pelos provedores.\n   * A busca pode reduzir dependência de respostas remotas para o conjunto pré-indexado; desempenho e cobertura dependem do serviço, com navegação por facetas dinâmicas e relevância calculada de forma unificada.\n   * **A Iniciativa NISO ODI (*Open Discovery Initiative - NISO RP-19*):** Estabelece padrões de transparência na cobertura dos índices, promovendo práticas de transparência, sem garantir automaticamente ausência de viés comercial ou cobertura integral.\n\n**Aplicação e recuperação:** O artigo novo ainda não foi coletado pelo índice central: consulta rápida pode não encontrá-lo. Na busca federada, uma fonte indisponível pode produzir resultado parcial ou atraso. Os sistemas podem combinar fluxos; velocidade não prova completude nem identidade de cobertura. A política deve explicitar fontes, atualização e tratamento de resultados.",
    "checkpointIds": [
      "cp-6-2-2",
      "rt-6-2-3"
    ]
  },
  {
    "id": "sub-6-2-bloco-4",
    "titulo": "Protocolos de Interoperabilidade: OAI-PMH, Z39.50 e SRU/SRW",
    "objetivos": [
      "Escolher protocolo por fluxo e interpretar verbos OAI."
    ],
    "conteudo": "#### A. O Protocolo OAI-PMH (Van de Sompel & Lagoze)\nO *Open Archives Initiative Protocol for Metadata Harvesting* é o mecanismo padrão da Web para colheita automatizada de metadados entre repositórios:\n* **Arquitetura Bipartida:**\n  * *Provedor de Dados (Data Provider):* O repositório institucional (ex.: DSpace da Câmara) que expõe seus metadados.\n  * *Provedor de Serviços (Service Provider):* O agregador ou colhedor (ex.: BDTD e Oasisbr em seus fluxos próprios; Google Acadêmico não é presumido colhedor OAI-PMH neste exemplo) que extrai os metadados periodicamente para criar serviços agregados de busca.\n* **Formato Obrigatório:** Todo repositório compatível com OAI-PMH DEVE obrigatoriamente fornecer suporte a **Dublin Core Simples** (`oai_dc`).\n* **Os Seis Verbos Canônicos de Requisição (HTTP GET/POST):**\n  1. `Identify`: Retorna informações gerais sobre o repositório (nome institucional, URL base, versão do protocolo, e-mail do administrador, política de exclusão de registros e granularidade de datas).\n  2. `ListMetadataFormats`: Retorna a lista dos formatos de metadados disponíveis pelo repositório (ex.: `oai_dc`, `mods`, `marcxml`).\n  3. `ListSets`: Lista conjuntos quando suportados. Sets são opcionais e não precisam coincidir com todas as coleções ou com a árvore institucional; pode haver resposta noSetHierarchy.\n  4. `ListIdentifiers`: Recupera apenas os cabeçalhos (*headers*) e identificadores únicos dos registros, sem transferir o corpo de metadados completo.\n  5. `GetRecord`: Obtém um registro de um item no **formato solicitado**. O identificador OAI não é necessariamente o Handle/DOI do recurso, e um registro não reúne automaticamente todos os formatos de metadados.\n  6. `ListRecords`: Realiza a colheita em massa de registros no formato solicitado, aceitando filtros por data (`from`, `until`) e conjunto (`set`).\n* **Paginação e Controle de Fluxo (*resumptionToken*):** Quando uma requisição `ListRecords` retorna milhares de registros, o repositório entrega os primeiros em lotes (ex.: 100 itens) e anexa um elemento `resumptionToken`, permitindo ao colhedor continuar a extração sem sobrecarregar o servidor.\n\n#### B. ANSI/NISO Z39.50 e os Protocolos SRU/SRW\n* **ANSI/NISO Z39.50 (ISO 23950):**\n  * Protocolo de comunicação cliente/servidor pioneiro (camada de aplicação), concebido para pesquisa distribuída e transferência de registros bibliográficos estruturados (MARC 21).\n  * Amplamente utilizado para catalogação cooperativa: o bibliotecário busca a ficha catalográfica de um livro na base da Library of Congress ou da Biblioteca Nacional e a importa diretamente para seu SIGB local via Z39.50.\n* **Protocolos SRU/SRW (*Search/Retrieve via URL / Web Service*):**\n  * Modernização do Z39.50 liderada pela Library of Congress para adaptá-lo às tecnologias contemporâneas da Web.\n  * O **SRU** utiliza requisições RESTful simples via HTTP GET (parâmetros de URL); o **SRW** utiliza mensagens estruturadas via SOAP/XML.\n  * Ambos adotam a **CQL** (*Contextual Query Language*), permitindo formular buscas booleanas, relacionais e por campos de forma padronizada.\n\n#### C. Matriz de Decisão Arquitetural: Qual Protocolo de Interoperabilidade Adotar? (Alvo E12)\nPara a gestão de tecnologia e interoperabilidade na Biblioteca da Câmara dos Deputados, a escolha do protocolo é orientada pelo cenário operacional e pelo tipo de fluxo informacional:\n\n| Protocolo / Padrão | Mecanismo e Transporte | Usos que podem ser adequados | Limites a verificar | Exemplo Prático no Legislativo |\n| :--- | :--- | :--- | :--- | :--- |\n| **OAI-PMH** (Van de Sompel & Lagoze) | **Colheita em lote assíncrona** (*Batch Harvesting*) via HTTP GET/POST com XML. Exige Dublin Core (*oai_dc*). | Alimentação de portais agregadores de dados abertos, repositórios nacionais e índices coletivos (BDTD, Oasisbr, LexML Brasil, Europeana). | Consultas interativas em tempo real de usuários no catálogo; operações transacionais (reserva, empréstimo); transferência de arquivos binários pesados. | O Repositório Digital da Câmara dos Deputados expondo metadados para coleta periódica pelo IBICT (Oasisbr). |\n| **ANSI/NISO Z39.50** (ISO 23950) | **Busca síncrona cliente/servidor com sessão (*stateful*)** em implementações usuais sobre TCP, com porta 210 convencional, não obrigatória universal. A sintaxe de registros é negociada; não se limita conceitualmente a MARC 21. | **Catalogação cooperativa pontual**: importação direta de registros bibliográficos da Library of Congress ou Biblioteca Nacional para o SIGB local. | Aplicações web modernas e leves no navegador; ambientes com firewalls restritivos que barram a porta 210; agregação de grandes volumes de dados. | Bibliotecário da Câmara importando a ficha MARC 21 de um livro estrangeiro diretamente do servidor Z39.50 da LoC. |\n| **SRU / SRW** (Library of Congress) | **Busca síncrona na Web** via HTTP GET (SRU) ou SOAP (SRW) com sintaxe CQL (*Contextual Query Language*) e XML. | Consultas bibliográficas padronizadas pela Web entre bibliotecas parceiras que requerem busca por campos sem manter sessão TCP aberta na porta 210. | Colheita massiva de acervos inteiros em lote (cenário próprio do OAI-PMH); transações operacionais de circulação de exemplares. | Consulta federada a catálogos legislativos estaduais a partir do portal da Biblioteca Pedro Aleixo via HTTP/CQL. |\n| **APIs RESTful** (HTTP / JSON) | **Integração transacional e microsserviços em tempo real** com representações e operações definidas pela API; JSON/HTTPS são escolhas comuns, não definição universal de REST. | Interligação do SIGB com o Portal da Câmara, aplicativos móveis para parlamentares e cidadãos, serviços de circulação (renovação, reserva) e gateways LSP (Okapi/FOLIO). | Intercâmbio formal com agregadores acadêmicos internacionais que exigem estrita conformidade com o protocolo OAI-PMH e Dublin Core. | Aplicativo móvel da Câmara consultando em tempo real o status de disponibilidade de um exemplar na Biblioteca Pedro Aleixo. |\n\n**Aplicação e recuperação:** Para coleta incremental OAI, from/until usam o datestamp pertinente à criação/modificação/exclusão do registro, não a data de publicação da obra. resumptionToken é opaco: a continuação usa a combinação de argumentos definida pelo protocolo, sem recompor livremente todos os filtros junto ao token. Um GetRecord pede um formato; ListMetadataFormats informa os disponíveis. OAI trata metadados, não renovação de empréstimo ou transmissão automática de todos os binários.",
    "checkpointIds": [
      "cp-6-2-1",
      "rt-6-2-1",
      "rt-6-2-2",
      "rt-6-2-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "oai",
    "titulo": "Open Archives Initiative — OAI-PMH 2.0",
    "localizador": "Itens, registros, identificadores, datas, conjuntos, verbos e controle de fluxo.",
    "url": "https://www.openarchives.org/OAI/openarchivesprotocol.html"
  },
  {
    "id": "dspace",
    "titulo": "DSpace — documentação",
    "localizador": "Modelo de dados e configuração; versão deve ser explicitada.",
    "url": "https://wiki.lyrasis.org/display/DSDOC/"
  },
  {
    "id": "folio",
    "titulo": "FOLIO — Sunflower Release",
    "localizador": "Anúncio de 17/03/2026: transição de Okapi para Eureka; não generalizar a toda instalação histórica.",
    "url": "https://folio.org/about/news/folios-sunflower-release/"
  },
  {
    "id": "loc",
    "titulo": "Library of Congress — Z39.50",
    "localizador": "Protocolos de busca e recuperação e referências SRU.",
    "url": "https://www.loc.gov/z3950/agency/"
  },
  {
    "id": "odi",
    "titulo": "NISO — Open Discovery Initiative",
    "localizador": "Transparência, cobertura e práticas de descoberta; não garante desempenho universal.",
    "url": "https://www.niso.org/standards-committees/odi"
  }
],
};
