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
      termo: 'OAI-PMH',
      definicao: 'Protocolo baseado em HTTP e XML para colheita automatizada de metadados entre repositórios digitais.',
      exemploBiblioteca: 'A Biblioteca Digital da Câmara expõe seus metadados para colheita pela BDTD (IBICT) via OAI-PMH.',
    },
    {
      termo: 'DSpace',
      definicao: 'Software livre de código aberto para criação e gestão de repositórios digitais e institucionais.',
      exemploBiblioteca: 'Armazenar teses, artigos e publicações legislativas estruturados em Comunidades, Coleções e Itens.',
    },
    {
      termo: 'Z39.50',
      definicao: 'Protocolo cliente-servidor para busca e recuperação simultânea de registros em catálogos remotos.',
      exemploBiblioteca: 'Importar ficha catalográfica da Biblioteca Nacional diretamente para o catálogo da Câmara sem redigitar.',
    },
    {
      termo: 'Handle',
      definicao: 'Sistema de identificadores persistentes atribuído a objetos digitais para links permanentes que não quebram.',
      exemploBiblioteca: 'Cada documento no Repositório da Câmara recebe um prefixo Handle exclusivo permanente.',
    },
    {
      termo: 'SIGB',
      definicao: 'Sistema Integrado de Gestão de Bibliotecas; software que automatiza catalogação, circulação e consulta.',
      exemploBiblioteca: 'Gerenciar empréstimos e reservas de livros físicos aos gabinetes parlamentares.',
    },
  ],
  descricaoCurta: 'Arquitetura e gestão de repositórios digitais, o software DSpace e SEER/OJS, SIGBs livres (Koha) e comerciais (Pergamum, Aleph), o protocolo OAI-PMH (seis verbos e colheita de metadados), Z39.50, SRU/SRW e Discovery Services Web-Scale.',
  tempoEstimadoMinutos: 15,
  autoresChave: ['Herbert Van de Sompel', 'Carl Lagoze', 'Clifford Lynch', 'IBICT', 'Satbir Chauhan', 'Luciana Viana'],
  alertasCebraspe: [
    'O software DSpace é um SOFTWARE LIVRE (open source), e NÃO software proprietário. Desenvolvido pelo MIT e HP Labs, é o padrão hegemônico nos repositórios institucionais brasileiros e na BDTD (fomentado pelo IBICT). O Cebraspe já tentou classificá-lo falsamente como software comercial fechado!',
    'A hierarquia interna do DSpace organiza-se estritamente na cadeia: Comunidades -> Subcomunidades -> Coleções -> Itens -> Bitstreams (arquivos digitais). Cada item recebe um identificador persistente e permanente via Handle System.',
    'Evolução de SIGB para LSP (Library Services Platform): sistemas tradicionais (Koha, Aleph, Pergamum) foram projetados para acervos físicos monolíticos; as Plataformas de Serviços de Bibliotecas (como o FOLIO e o Alma) utilizam arquitetura de microsserviços na nuvem pelo gateway Okapi, APIs abertas, gerenciam recursos físicos e digitais unificados e suportam BIBFRAME / Linked Data.',
    'Metabusca Federada vs. Discovery Services Web-Scale (WSDS): a metabusca tradicional realiza consulta simultânea distribuída em tempo real (broadcast search via Z39.50), sendo lenta e sem ranqueamento uniforme; os Discovery Services (EDS, Primo, Summon) consultam um ÍNDICE CENTRALIZADO PRÉ-COLETADO na nuvem (pre-harvested cloud index), retornando respostas instantâneas em milissegundos com facetas e ranqueamento de relevância unificado.',
    'Os 6 verbos canônicos de requisição do protocolo OAI-PMH: Identify, ListMetadataFormats, ListSets, ListIdentifiers, GetRecord e ListRecords. O protocolo colhe exclusivamente METADADOS em XML (com suporte obrigatório a Dublin Core simples - oai_dc), e NÃO arquivos integrais em PDF.',
    'A Open Discovery Initiative (NISO ODI - RP-19): norma internacional que assegura transparência das fontes indexadas, neutralidade algorítmica de relevância e equidade entre provedores de conteúdo e motores de descoberta.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Tecnologias de Recuperação: Metabusca Federada vs. Discovery Services Web-Scale',
    colunas: ['Critério', 'Metabuscadores Tradicionais (Pesquisa Federada)', 'Serviços de Descoberta Web-Scale (WSDS)', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Mecanismo de Consulta', 'Busca distribuída em tempo real (*broadcast search*) via Z39.50/APIs', 'Busca instantânea sobre Índice Central Pré-Indexado (*Pre-harvested Cloud Index*)', 'Afirmar que o Discovery Service envia a busca síncrona aos servidores originais no momento da digitação.'],
      ['Tempo de Resposta', 'Lento: limitado pelo tempo do servidor mais lento da federação', 'Extremamente veloz: milissegundos, com alta capacidade de concorrência', 'Dizer que metabuscadores são mais velozes por consultarem menos servidores.'],
      ['Ranqueamento de Relevância', 'Fragmentado e inconsistente: cada base remota ranqueia à sua maneira', 'Algoritmo unificado de relevância em toda a coleção impressa, digital e eletrônica', 'Afirmar que a metabusca consegue gerar uma lista ordenada homogênea de relevância global.'],
      ['Navegação por Facetas', 'Limitada ou inexistente após a combinação dos resultados', 'Rica e dinâmica: filtragem instantânea por autor, assunto, ano, tipo de mídia e peer-review', 'Considerar que facetas dinâmicas são nativas de buscas remotas por Z39.50.'],
      ['Padrões e Governança', 'ANSI/NISO Z39.50, SRU/SRW e protocolos ponto a ponto', 'Iniciativa NISO ODI (*Open Discovery Initiative - RP-19*) e APIs RESTful', 'Dizer que a NISO ODI é um formato de catalogação concorrente do MARC 21.'],
      ['Exemplos de Mercado', 'MetaLib (Ex Libris), WebBridge, MultiSearch', 'EBSCO Discovery Service (EDS), Primo (Ex Libris), Summon (ProQuest), WorldCat', 'Confundir DSpace (repositório) com EDS (serviço de descoberta agregador).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Repositórios Institucionais (RIs) e a Arquitetura DSpace

Conforme **Clifford Lynch** (2003), um repositório institucional universitário ou governamental é um conjunto integrado de serviços oferecido pela organização para **gestão, custódia perene, preservação e disseminação em acesso aberto** de sua produção intelectual e técnica:

* **Arquitetura Hierárquica do Software DSpace:**
  O DSpace (software livre hegemônico mundialmente, desenvolvido em consórcio pelo MIT e HP Labs) organiza os dados em cinco níveis concêntricos rigorosos:

$\\text{Comunidades} \\longrightarrow \\text{Subcomunidades} \\longrightarrow \\text{Coleções} \\longrightarrow \\text{Itens} \\longrightarrow \\text{Bitstreams (Arquivos Finais)}$

  1. **Comunidades (*Communities*):** Representam grandes divisões orgânicas institucionais (ex.: CEDI, Consultoria Legislativa, Secretarias).
  2. **Subcomunidades (*Subcommunities*):** Departamentos ou núcleos subordinados.
  3. **Coleções (*Collections*):** Agrupamentos temáticos ou tipológicos de documentos (ex.: "Notas Técnicas", "Revista de Informação Legislativa").
  4. **Itens (*Items*):** A unidade bibliográfica intelectual individual, descrita por um conjunto de metadados em **Dublin Core Qualificado**.
  5. **Bitstreams (Fluxos de Bits):** Os arquivos binários anexados ao item (arquivos PDF, imagens TIFF, dados em CSV, áudios MP3).
* **Identificadores Persistentes (Handle System):**
  * Cada item inserido no DSpace recebe automaticamente um URI persistente e permanente no formato \`hdl.handle.net/...\`.
  * Isso impede o fenômeno do *link rot* (links quebrados quando a URL do servidor muda).

---

### 2. A Evolução dos Softwares de Biblioteca: De SIGBs a Plataformas LSP

A literatura especializada de Ciência da Informação (Corrêa da Silva & Borges, 2024; Viana, 2022; Chauhan et al., 2018) mapeia a transição dos sistemas de gestão:

\`\`\`timeline
SIGB | 1. SIGB Tradicional Monolítico | Era Analógica / Centrado no Suporte Físico | Softwares como Koha, Aleph e Pergamum: arquitetura em silo para controle de acervo físico, tombo e empréstimos
---> Nuvem, Microsserviços e APIs REST
LSP | 2. LSP (Library Services Platform) | Era Digital e Híbrida / Centrado em Serviços | Plataformas como FOLIO e Alma: arquitetura desacoplada com gateway Okapi e gestão integrada (físico, digital e licenças)
---> Web Semântica e Interoperabilidade Aberta
LINKED | 3. Dados Conectados e BIBFRAME | Próxima Fronteira dos Catálogos | Superação do padrão MARC 21 tradicional com ontologias de Linked Open Data e grafos de conhecimento
\`\`\`

#### A. Sistemas Integrados de Gestão de Bibliotecas (SIGB / ILS)
* **Koha:** Primeiro software livre de automação de bibliotecas do mundo (criado em 1999 na Nova Zelândia). Baseado na pilha LAMP (Linux, Apache, MySQL/MariaDB, Perl) e no motor de indexação Zebra, com suporte completo a MARC 21 e protocolos Z39.50 e OAI-PMH.
* **Sistemas Comerciais:** Pergamum (PUCPR), SophiA e Aleph (Ex Libris).
* **Limitação Estrutural dos SIGBs:** Foram projetados na era analógica com arquiteturas monolíticas centradas na circulação física de exemplares impressos (tombamento, etiquetas de lombada e controle de empréstimos).

#### B. Plataformas de Serviços de Bibliotecas (LSP - *Library Services Platforms*)
* Exemplificadas por **FOLIO** (*The Future of Library is Open*) e **Alma** (Ex Libris).
* **Características Canônicas do FOLIO (Viana, 2022):**
  * Projeto colaborativo de código aberto sob governança da OLE (*Open Library Environment*), EBSCO e Index Data.
  * **Arquitetura de Microsserviços:** Desacoplada e operada pelo gateway central **Okapi**. Cada funcionalidade (circulação, aquisição, inventário) é um microsserviço independente com suas próprias APIs REST.
  * **Gestão Unificada de Recursos:** Elimina a separação entre silos físicos e bases eletrônicas. Um único fluxo administrativo gerencia livros de papel, e-books perpétuos e pacotes de periódicos sob licença.
  * **Interoperabilidade Avançada:** Suporta nativamente esquemas tradicionais (MARC 21) e modelos de dados conectados da Web Semântica (**BIBFRAME e Linked Open Data**).

---

### 3. Dos Catálogos ao OPAC, Metabusca e Discovery Services (WSDS)

1. **OPAC (Online Public Access Catalog):** Catálogo online voltado ao acervo local da biblioteca ou de uma rede fechada.
2. **Metabuscadores (Pesquisa Federada / Broadcast Search):**
   * Sistemas pioneiros (MetaLib, WebBridge) que disparam uma consulta síncrona em tempo real para múltiplos servidores remotos via protocolo Z39.50 ou APIs proprietárias.
   * *Gargalos estruturais:* Lentidão excessiva (o usuário espera a resposta do servidor mais lento da rede), falhas frequentes de timeout e impossibilidade de aplicar um algoritmo de relevância homogêneo sobre os resultados mesclados.
3. **Serviços de Descoberta Web-Scale (WSDS - *Web-Scale Discovery Services*):**
   * Ferramentas contemporâneas como **EDS (EBSCO Discovery Service)**, **Primo**, **Summon** e **WorldCat Discovery**.
   * *Inovação Tecnológica Central:* A pesquisa do usuário não consulta bases remotas em tempo real; ela é executada diretamente sobre um **Índice Centralizado Pré-Indexado na Nuvem (*Pre-harvested Central Index*)**.
   * Bilhões de registros de periódicos científicos, e-books, repositórios e bases institucionais são previamente coletados, normalizados e indexados pelos provedores.
   * A busca entrega resultados em frações de segundo, com navegação por facetas dinâmicas e relevância calculada de forma unificada.
   * **A Iniciativa NISO ODI (*Open Discovery Initiative - NISO RP-19*):** Estabelece padrões de transparência na cobertura dos índices, impedindo privilégios comerciais injustos a determinadas editoras.

---

### 4. Protocolos de Interoperabilidade: OAI-PMH, Z39.50 e SRU/SRW

#### A. O Protocolo OAI-PMH (Van de Sompel & Lagoze)
O *Open Archives Initiative Protocol for Metadata Harvesting* é o mecanismo padrão da Web para colheita automatizada de metadados entre repositórios:
* **Arquitetura Bipartida:**
  * *Provedor de Dados (Data Provider):* O repositório institucional (ex.: DSpace da Câmara) que expõe seus metadados.
  * *Provedor de Serviços (Service Provider):* O agregador ou colhedor (ex.: BDTD, Oasisbr, Google Acadêmico) que extrai os metadados periodicamente para criar serviços agregados de busca.
* **Formato Obrigatório:** Todo repositório compatível com OAI-PMH DEVE obrigatoriamente fornecer suporte a **Dublin Core Simples** (\`oai_dc\`).
* **Os Seis Verbos Canônicos de Requisição (HTTP GET/POST):**
  1. \`Identify\`: Retorna informações gerais sobre o repositório (nome institucional, URL base, versão do protocolo, e-mail do administrador, política de exclusão de registros e granularidade de datas).
  2. \`ListMetadataFormats\`: Retorna a lista dos esquemas de metadados suportados pelo repositório (ex.: \`oai_dc\`, \`mods\`, \`marcxml\`).
  3. \`ListSets\`: Retorna a estrutura hierárquica de conjuntos/coleções do repositório, permitindo colheitas temáticas seletivas.
  4. \`ListIdentifiers\`: Recupera apenas os cabeçalhos (*headers*) e identificadores únicos dos registros, sem transferir o corpo de metadados completo.
  5. \`GetRecord\`: Recupera um registro bibliográfico individual completo com todos os seus metadados a partir de seu identificador persistente e do formato solicitado.
  6. \`ListRecords\`: Realiza a colheita em massa de registros completos com todos os metadados, aceitando filtros por data (\`from\`, \`until\`) e conjunto (\`set\`).
* **Paginação e Controle de Fluxo (*resumptionToken*):** Quando uma requisição \`ListRecords\` retorna milhares de registros, o repositório entrega os primeiros em lotes (ex.: 100 itens) e anexa um elemento \`resumptionToken\`, permitindo ao colhedor continuar a extração sem sobrecarregar o servidor.

#### B. ANSI/NISO Z39.50 e os Protocolos SRU/SRW
* **ANSI/NISO Z39.50 (ISO 23950):**
  * Protocolo de comunicação cliente/servidor pioneiro (camada de aplicação), concebido para pesquisa distribuída e transferência de registros bibliográficos estruturados (MARC 21).
  * Amplamente utilizado para catalogação cooperativa: o bibliotecário busca a ficha catalográfica de um livro na base da Library of Congress ou da Biblioteca Nacional e a importa diretamente para seu SIGB local via Z39.50.
* **Protocolos SRU/SRW (*Search/Retrieve via URL / Web Service*):**
  * Modernização do Z39.50 liderada pela Library of Congress para adaptá-lo às tecnologias contemporâneas da Web.
  * O **SRU** utiliza requisições RESTful simples via HTTP GET (parâmetros de URL); o **SRW** utiliza mensagens estruturadas via SOAP/XML.
  * Ambos adotam a **CQL** (*Contextual Query Language*), permitindo formular buscas booleanas, relacionais e por campos de forma padronizada.

#### C. Matriz de Decisão Arquitetural: Qual Protocolo de Interoperabilidade Adotar? (Alvo E12)
Para a gestão de tecnologia e interoperabilidade na Biblioteca da Câmara dos Deputados, a escolha do protocolo é orientada pelo cenário operacional e pelo tipo de fluxo informacional:

| Protocolo / Padrão | Mecanismo e Transporte | Quando DEVE ser Utilizado | Quando NÃO deve ser Utilizado | Exemplo Prático no Legislativo |
| :--- | :--- | :--- | :--- | :--- |
| **OAI-PMH** (Van de Sompel & Lagoze) | **Colheita em lote assíncrona** (*Batch Harvesting*) via HTTP GET/POST com XML. Exige Dublin Core (*oai_dc*). | Alimentação de portais agregadores de dados abertos, repositórios nacionais e índices coletivos (BDTD, Oasisbr, LexML Brasil, Europeana). | Consultas interativas em tempo real de usuários no catálogo; operações transacionais (reserva, empréstimo); transferência de arquivos binários pesados. | O Repositório Digital da Câmara dos Deputados expondo metadados para coleta periódica pelo IBICT (Oasisbr). |
| **ANSI/NISO Z39.50** (ISO 23950) | **Busca síncrona cliente/servidor com sessão (*stateful*)** em conexão TCP dedicada na porta 210. Sintaxe MARC 21. | **Catalogação cooperativa pontual**: importação direta de registros bibliográficos da Library of Congress ou Biblioteca Nacional para o SIGB local. | Aplicações web modernas e leves no navegador; ambientes com firewalls restritivos que barram a porta 210; agregação de grandes volumes de dados. | Bibliotecário da Câmara importando a ficha MARC 21 de um livro estrangeiro diretamente do servidor Z39.50 da LoC. |
| **SRU / SRW** (Library of Congress) | **Busca síncrona na Web** via HTTP GET (SRU) ou SOAP (SRW) com sintaxe CQL (*Contextual Query Language*) e XML. | Consultas bibliográficas padronizadas pela Web entre bibliotecas parceiras que requerem busca por campos sem manter sessão TCP aberta na porta 210. | Colheita massiva de acervos inteiros em lote (cenário próprio do OAI-PMH); transações operacionais de circulação de exemplares. | Consulta federada a catálogos legislativos estaduais a partir do portal da Biblioteca Pedro Aleixo via HTTP/CQL. |
| **APIs RESTful** (HTTP / JSON) | **Integração transacional e microsserviços em tempo real** via métodos HTTP (GET, POST, PUT, DELETE) com JSON sobre HTTPS (porta 443). | Interligação do SIGB com o Portal da Câmara, aplicativos móveis para parlamentares e cidadãos, serviços de circulação (renovação, reserva) e gateways LSP (Okapi/FOLIO). | Intercâmbio formal com agregadores acadêmicos internacionais que exigem estrita conformidade com o protocolo OAI-PMH e Dublin Core. | Aplicativo móvel da Câmara consultando em tempo real o status de disponibilidade de um exemplar na Biblioteca Pedro Aleixo. |

---

### 🔗 Veja Também (Articulação Intermódulos)
* **MARC 21 Bibliográfico e Autoridades (sub-2-4):** Protocolo Z39.50 e catalogação cooperativa.
* **Preservação Digital e Repositórios Confiáveis (sub-6-3):** Colheita OAI-PMH de pacotes de metadados em repositórios digitais.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Repositórios Institucionais (RI)**, os softwares de automação de bibliotecas (SIGB) e os protocolos de comunicação garantem o Acesso Aberto e a interoperabilidade global:
1. **O que é um Repositório Institucional (RI):**
   - Sistema de informação digital que reúne, organiza, preserva e dissemina a produção intelectual, técnica e científica de uma instituição em regime de **Acesso Aberto (*Open Access*)**.
   - Promove a visibilidade da produção da casa, estimula o reuso e assegura a custódia a longo prazo da memória institucional.
2. **Softwares Canônicos de Bibliotecas:**
   - **DSpace:** Software livre de código aberto líder mundial para repositórios digitais e institucionais, mantido pela DuraSpace/Lyrasis. Suporta Dublin Core, OAI-PMH, identificadores persistentes e modelo OAIS.
   - **Koha / Aleph / Alma:** Sistemas Integrados de Gestão de Bibliotecas (SIGB) para circulação, catalogação MARC 21, aquisição e OPAC.
3. **Protocolo OAI-PMH (*Open Archives Initiative Protocol for Metadata Harvesting* v2.0):**
   - Protocolo baseado em HTTP e XML para **coleta automatizada de metadados** entre repositórios na web.
   - **Papéis:**
     - *Data Provider (Provedor de Dados):* O repositório institucional que expõe seus metadados para o mundo.
     - *Service Provider (Provedor de Serviços):* O agregador que coleta (*harvesting*) os metadados de múltiplos repositórios para criar portais de busca unificados (ex.: Oasisbr do IBICT).
   - **Os 6 Verbos Canônicos do OAI-PMH:**
     1. \`Identify\` (Retorna dados gerais do repositório).
     2. \`ListMetadataFormats\` (Lista formatos suportados; **o Dublin Core Simples é obrigatório**!).
     3. \`ListSets\` (Lista as coleções/conjuntos temáticos).
     4. \`ListIdentifiers\` (Lista os cabeçalhos de identificadores dos registros).
     5. \`ListRecords\` (Coleta em lote os metadados completos dos registros).
     6. \`GetRecord\` (Recupera os metadados completos de um único registro específico).
4. **Protocolo Z39.50 e SRU/SRW:**
   - Protocolo cliente-servidor para busca federada e intercâmbio de registros bibliográficos completos (MARC 21) diretamente entre catálogos de bibliotecas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A BDCam como Data Provider OAI-PMH):** A Biblioteca Digital da Câmara opera o DSpace. Periodicamente, o portal *Oasisbr* do IBICT executa o verbo OAI-PMH \`ListRecords\` no endpoint da BDCam, coletando os metadados de todas as teses e estudos técnicos produzidos por servidores da Câmara para exibi-los no portal nacional de ciência aberta.
- **Cenário 2 (Catalogação Cooperativa via Protocolo Z39.50 na RVBI):** O catalogador da Biblioteca Pedro Aleixo precisa registrar uma obra estrangeira recém-chegada. Ele abre o módulo de catalogação e dispara uma consulta Z39.50 aos servidores da *Library of Congress* (EUA). Em dois segundos, o registro MARC 21 completo é importado para o catálogo da Câmara sem necessidade de digitação manual.
- **Cenário 3 (Organização de Comunidades e Coleções no DSpace da Câmara):** No DSpace da BDCam, o bibliotecário estrutura a hierarquia: Comunidade *Processo Legislativo* $\to$ Subcomunidade *Comissões Permanentes* $\to$ Coleção *Relatórios Finais de CPI*. O verbo OAI-PMH \`ListSets\` reflete exatamente essa árvore para os sistemas coletores.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Protocolo / Padrão | Função Principal | Tecnologia Base | Formato Obrigatório |
| :--- | :--- | :--- | :--- |
| **OAI-PMH** | Coleta automatizada de metadados | HTTP + XML | **Dublin Core Simples (oai_dc)** |
| **Z39.50** | Busca remota e cópia de registros bibliográficos | TCP/IP (Cliente-Servidor) | Registros MARC 21 / UNIMARC |
| **SRU / SRW** | Evolução web moderna do Z39.50 | HTTP / REST / SOAP | XML (MODS, Dublin Core) |
| **DSpace** | Software de Repositório Institucional | Java, PostgreSQL, Solr | Dublin Core qualificado / OAI-PMH |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Formato Obrigatório no OAI-PMH:** O Cebraspe pergunta se um repositório OAI-PMH pode optar por não disponibilizar o Dublin Core Simples. **Gabarito: ERRADO.** O esquema \`oai_dc\` (Dublin Core Simples) é **mandatório e obrigatório** em qualquer implementação OAI-PMH no mundo. Outros formatos (MODS, MARCXML) são opcionais.
- **OAI-PMH Coleta os Arquivos em PDF:** A banca afirma que o OAI-PMH serve para baixar em lote os arquivos em PDF dos livros. **Gabarito: ERRADO.** O OAI-PMH é um protocolo estritamente para **coleta de metadados** (*metadata harvesting*); o download dos arquivos em texto completo é feito via HTTP comum.
- **Os 6 Verbos do OAI-PMH:** A banca inventa verbos falsos como \`DeleteRecord\` ou \`UpdateRecord\`. **Gabarito: ERRADO.** Os únicos 6 verbos válidos são: *Identify, ListMetadataFormats, ListSets, ListIdentifiers, ListRecords e GetRecord*.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **OPEN ARCHIVES INITIATIVE.** *The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH) — Version 2.0*. OAI, 2015. (A especificação técnica canônica do protocolo).
- **LEITE, Fernando César Lima.** *Como gerenciar e ampliar a visibilidade da informação científica brasileira: repositórios institucionais de acesso aberto*. Brasília: IBICT, 2009. (Obra fundamental sobre repositórios no Brasil).
- **ANSI/NISO Z39.50-2003.** *Information Retrieval (Z39.50): Application Service Definition & Protocol Specification*. Bethesda: NISO Press, 2003.
- **SMITH, MacKenzie et al.** DSpace: an open source dynamic digital repository. *D-Lib Magazine*, v. 9, n. 1, 2003. (Artigo clássico de fundação da arquitetura DSpace).
- **KURAMOTO, Hélio.** Informação científica: proposta de um novo modelo para o Brasil. *Ciência da Informação*, v. 35, n. 2, p. 91-102, 2006.`,
  checkpoints: [
    {
      id: 'cp-6-2-1',
      pergunta: 'Micro-Checkpoint 1: O Papel do Protocolo OAI-PMH',
      item: 'O protocolo OAI-PMH é um mecanismo de comunicação que permite a colheita automatizada de metadados entre repositórios provedores de dados e sistemas provedores de serviços, exigindo como formato mínimo o padrão Dublin Core.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme conceituado por Herbert Van de Sompel e Carl Lagoze (2004), o OAI-PMH utiliza HTTP/XML para transferir metadados estruturados, tendo o Dublin Core simples (oai_dc) como requisito mandatório.',
    },
    {
      id: 'cp-6-2-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Metabusca e Discovery Services (WSDS)',
      item: 'Diferentemente dos metabuscadores tradicionais, que disparam consultas simultâneas distribuídas em tempo real a múltiplos servidores, os serviços de descoberta web-scale (WSDS) realizam a pesquisa sobre um índice centralizado previamente coletado e normalizado na nuvem.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme analisado por Clifford Lynch (2003) e pelas diretrizes da NISO ODI (RP-19), os discovery services consultam um índice pré-unificado na nuvem (pre-harvested index), garantindo respostas em milissegundos e relevância unificada.',
    },
    {
      id: 'cp-6-2-3',
      pergunta: 'Micro-Checkpoint 3: Arquitetura de Microsserviços do FOLIO',
      item: 'A plataforma FOLIO (The Future of Library is Open) é estruturada como um sistema integrado monolítico de código proprietário, inviabilizando a adição ou substituição modular de componentes de gestão bibliotecária.',
      gabarito: 'E',
      justificativa: 'Errado! Segundo Luciana Viana (2022) e Satbir Chauhan (2018), o FOLIO é uma plataforma livre (open-source) estruturada em microsserviços integrados pelo gateway Okapi, caracterizando-se pela flexibilidade e modularidade de seus componentes funcionais.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-2-1',
        periodo: '1988 / 1999',
        disciplina: 'Z39.50 e Koha',
        focoPrincipal: 'Padronização do ANSI/NISO Z39.50 e criação do primeiro SIGB livre do mundo (Koha na Nova Zelândia)',
        figuraChave: 'Library of Congress / Katipo Communications',
      },
      {
        id: 'tl-6-2-2',
        periodo: '2001 / 2002',
        disciplina: 'OAI-PMH e DSpace',
        focoPrincipal: 'Lançamento do protocolo OAI-PMH (Van de Sompel) e do software DSpace (MIT/HP Labs)',
        figuraChave: 'Herbert Van de Sompel e Clifford Lynch',
      },
      {
        id: 'tl-6-2-3',
        periodo: '2014 / 2022',
        disciplina: 'LSP e Discovery Services',
        focoPrincipal: 'Publicação das diretrizes NISO ODI (RP-19) e consolidação da plataforma aberta FOLIO baseada em microsserviços',
        figuraChave: 'NISO / Open Library Environment (OLE) e EBSCO',
      },
    ],
    autores: [
      {
        id: 'aut-6-2-1',
        nome: 'Herbert Van de Sompel',
        ano: 2001,
        obraPrincipal: 'The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)',
        ideiaChave: 'Criador do protocolo OAI-PMH; arquitetura de provedores de dados e provedores de serviços.',
        chipPegadinha: 'OAI-PMH colhe metadados estruturados em XML, e não o arquivo binário integral em PDF.',
      },
      {
        id: 'aut-6-2-2',
        nome: 'Satbir Chauhan & Luciana Viana',
        ano: 2018,
        obraPrincipal: 'FOLIO: The Future of Library is Open / Plataformas de Serviços de Bibliotecas',
        ideiaChave: 'Transição dos SIGBs monolíticos para plataformas de serviços em nuvem com microsserviços (Okapi) e Linked Data.',
        chipPegadinha: 'O FOLIO é software aberto e gerencia recursos físicos e eletrônicos integradamente.',
      },
      {
        id: 'aut-6-2-3',
        nome: 'Clifford Lynch',
        ano: 2003,
        obraPrincipal: 'Institutional Repositories: Essential Infrastructure for Scholarship in the Digital Age',
        ideiaChave: 'Conceito canônico de Repositórios Institucionais como conjunto integrado de serviços universitários e governamentais.',
        chipPegadinha: 'Repositório não é mero depósito de arquivos estáticos, é serviço estratégico de preservação e disseminação.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-2-1',
        afirmacao: 'O protocolo Z39.50 foi desenvolvido com a finalidade exclusiva de atuar como sistema de preservação digital de longo prazo em bibliotecas de acesso aberto.',
        gabarito: 'E',
        porQue: 'O Z39.50 é um protocolo de busca distribuída cliente/servidor para recuperação e cópia de registros bibliográficos em rede, e não sistema de preservação.',
      },
      {
        id: 'peg-6-2-2',
        afirmacao: 'Nos serviços de descoberta web-scale (WSDS), as buscas dos usuários dependem do envio síncrono e concorrente da consulta a todos os catálogos remotos cadastrados no momento da digitação do termo.',
        gabarito: 'E',
        porQue: 'Essa é a mecânica dos METABUSCADORES tradicionais. Os Discovery Services operam sobre um índice centralizado pré-coletado na nuvem, sem consulta síncrona aos servidores de origem.',
      },
      {
        id: 'peg-6-2-3',
        afirmacao: 'Na arquitetura do software DSpace, os arquivos finais digitalizados em PDF ou TIFF são denominados Comunidades.',
        gabarito: 'E',
        porQue: 'Na hierarquia do DSpace, Comunidades são os agrupamentos institucionais de topo. Os arquivos de conteúdo digital anexados aos itens são tecnicamente denominados BITSTREAMS.',
      },
    ],
  },
};
