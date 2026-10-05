import type { ModuloFilho } from '../../../domain/types';

export const submodulo62: ModuloFilho = {
  id: 'sub-6-2',
  numero: '6.2',
  titulo: 'Repositórios Institucionais, Softwares de Bibliotecas e Interoperabilidade (OAI-PMH e Z39.50)',
  descricaoCurta: 'Arquitetura e gestão de repositórios digitais, o software DSpace e SEER/OJS, SIGBs livres (Koha) e comerciais (Pergamum, Aleph), o protocolo OAI-PMH (seis verbos e colheita de metadados) e o protocolo de busca Z39.50.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Herbert Van de Sompel', 'Carl Lagoze', 'IBICT', 'Public Knowledge Project (PKP)', 'Clifford Lynch'],
  alertasCebraspe: [
    'O software DSpace é um SOFTWARE LIVRE (open source), e NÃO software proprietário. Desenvolvido pelo MIT e HP, é o padrão hegemônico nos repositórios institucionais brasileiros e na BDTD (fomentado pelo IBICT). O Cebraspe já tentou classificar o DSpace como software comercial proprietário!',
    'Evolução de SIGB para LSP (Library Services Platform): sistemas tradicionais (Koha, Aleph, Pergamum) foram projetados para acervos físicos; as Plataformas de Serviços de Bibliotecas (como o FOLIO e o Alma) utilizam arquitetura de microsserviços na nuvem, APIs abertas e gerenciam de forma unificada recursos físicos, digitais e eletrônicos licenciados.',
    'FOLIO (The Future of Library is Open - Viana 2022 / Chauhan 2018): plataforma de código aberto baseada em microsserviços integrados pelo gateway Okapi, desacoplando módulos funcionais e suportando tanto metadados MARC 21 quanto dados conectados (Linked Data / BIBFRAME).',
    'Koha: primeiro SIGB de código aberto do mundo (criado em 1999 na Nova Zelândia), baseado em arquitetura web (LAMP: Linux, Apache, MySQL/MariaDB, Perl) e motor de indexação e recuperação Zebra, com suporte nativo a MARC 21, Z39.50 e OAI-PMH.',
    'Metabusca (Pesquisa Federada) vs. Discovery Services Web-Scale (WSDS): a metabusca tradicional realiza consulta distribuída simultânea em tempo real (broadcast search via Z39.50/SRU), sendo lenta e sem ranqueamento uniforme; os Discovery Services (Summon, Primo, EDS) consultam um ÍNDICE CENTRALIZADO PRÉ-COLETADO na nuvem (pre-harvested central index), retornando resultados instantâneos em milissegundos com facetas e ranqueamento de relevância unificado.',
    'A Open Discovery Initiative (NISO ODI - RP-19): estabelece padrões internacionais para garantir transparência na indexação de fontes, neutralidade de relevância e interoperabilidade justa entre provedores de conteúdo e serviços de descoberta.',
    'Protocolos SRU/SRW: representam a modernização do Z39.50 para o ambiente web, utilizando requisições REST/HTTP (SRU) e SOAP/XML (SRW) orientadas pela linguagem de consulta contextual CQL (Contextual Query Language).',
    'Os 6 verbos canônicos de requisição do OAI-PMH: Identify, ListMetadataFormats, ListSets, ListIdentifiers, GetRecord e ListRecords.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Tecnologias de Recuperação: Metabusca Federada vs. Discovery Services Web-Scale',
    colunas: ['Critério', 'Metabuscadores Tradicionais (Pesquisa Federada)', 'Serviços de Descoberta Web-Scale (WSDS)'],
    linhas: [
      ['Mecanismo de Consulta', 'Busca distribuída em tempo real (*broadcast search*) via Z39.50/APIs', 'Busca instantânea sobre Índice Central Pré-Indexado (*Pre-harvested Cloud Index*)'],
      ['Tempo de Resposta', 'Lento: depende da resposta do servidor mais lento da rede federada', 'Extremamente veloz: milissegundos, similar aos motores de busca da web comercial'],
      ['Ranqueamento de Relevância', 'Fragmentado e inconsistente: cada base remota ranqueia à sua maneira', 'Algoritmo unificado de relevância em toda a coleção impressa, digital e eletrônica'],
      ['Navegação por Facetas', 'Limitada ou inexistente após a combinação dos resultados', 'Rica e dinâmica: filtragem instantânea por autor, assunto, ano, tipo de mídia e peer-review'],
      ['Padrões e Governança', 'ANSI/NISO Z39.50, SRU/SRW e protocolos ponto a ponto', 'Iniciativa NISO ODI (*Open Discovery Initiative - RP-19*) e APIs RESTful'],
      ['Exemplos de Mercado', 'MetaLib (Ex Libris), WebBridge, MultiSearch', 'EBSCO Discovery Service (EDS), Primo (Ex Libris), Summon (ProQuest), WorldCat'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Repositórios Institucionais (RIs) e a Arquitetura DSpace

Conforme **Clifford Lynch** (2003), um repositório institucional universitário ou governamental é um conjunto integrado de serviços oferecido pela organização para **gestão, custódia perene, preservação e disseminação em acesso aberto** de sua produção intelectual e técnica:

* **Arquitetura Hierárquica do Software DSpace:**
  $$\\text{Comunidades} \\rightarrow \\text{Subcomunidades} \\rightarrow \\text{Coleções} \\rightarrow \\text{Itens} \\rightarrow \\text{Bitstreams (Arquivos)}$$
  * Cada item no DSpace possui metadados descritivos em **Dublin Core Qualificado** e recebe um identificador persistente e resolúvel através do sistema **Handle** (ex.: \`hdl.handle.net/...\`).
* **Preservação no DSpace:** Adota o modelo de referência OAIS (ISO 14721), recebendo pacotes SIP de submissão, gerando pacotes AIP de arquivamento para custódia segura e entregando pacotes DIP para download e disseminação ao público.

---

### 2. A Evolução dos Softwares de Biblioteca: De SIGBs a Plataformas LSP

A literatura de Ciência da Informação (Corrêa da Silva & Borges, 2024; Viana, 2022) delimita os estágios da automação de bibliotecas:

1. **Sistemas Integrados de Gestão de Bibliotecas (SIGB / ILS):**
   * *Exemplos:* **Koha** (software livre pioneiro, arquitetura LAMP com motor Zebra e suporte a MARC 21/Z39.50), Pergamum, SophiA e Aleph.
   * *Limitação:* Arquitetura monolítica estruturada primariamente em torno de fluxos de acervos físicos (compra, tombamento, catalogação de exemplares e empréstimo no balcão).
2. **Plataformas de Serviços de Bibliotecas (LSP - *Library Services Platforms*):**
   * *Exemplos:* **FOLIO** (*The Future of Library is Open*) e **Alma** (Ex Libris).
   * *Características Estruturais do FOLIO (Viana, 2022; Chauhan et al., 2018):*
     * Plataforma livre e comunitária desenvolvida sob governança da OLE (*Open Library Environment*), EBSCO e Index Data.
     * **Arquitetura de Microsserviços:** Opera por meio do gateway central **Okapi**, permitindo instalar, atualizar ou remover módulos de negócio (aquisições, circulação, gestão de e-resources) de forma totalmente desacoplada.
     * **Gestão Unificada de Recursos:** Gerencia em fluxo único materiais impressos, coleções digitais e assinaturas eletrônicas complexas (*e-books*, licenças de periódicos, pacotes de bases).
     * **Interoperabilidade:** Suporta tanto o padrão tradicional MARC 21 quanto novas estruturas de dados conectados (*Linked Data* e BIBFRAME).

---

### 3. Dos Catálogos ao OPAC, Metabusca e Discovery Services (WSDS)

O acesso à informação bibliográfica evoluiu através de gerações tecnológicas sucessivas:

1. **OPAC (Online Public Access Catalog):** Interface de consulta ao catálogo informatizado de uma biblioteca local ou rede cooperativa específica.
2. **Metabuscadores (Pesquisa Federada / Broadcast Search):**
   * Sistemas que enviam uma consulta em tempo real a múltiplos catálogos remotos via protocolo Z39.50 ou APIs proprietárias.
   * *Gargalos Críticos:* Lentidão excessiva (tempo de resposta determinado pelo servidor mais lento), ausência de desduplicação eficiente e impossibilidade de aplicar um ranqueamento de relevância uniforme.
3. **Serviços de Descoberta Web-Scale (WSDS - *Web-Scale Discovery Services*):**
   * Ferramentas contemporâneas como **EDS (EBSCO Discovery Service)**, **Primo**, **Summon** e **WorldCat Discovery**.
   * *Princípio Tecnológico:* Substituem a busca distribuída em tempo real por um **Índice Centralizado na Nuvem (*Pre-harvested Central Index*)**.
   * Os metadados de milhões de artigos científicos, livros, teses e itens do acervo local são previamente colhidos, normalizados e indexados. A busca do usuário ocorre diretamente no índice unificado, entregando resposta em frações de segundo com facetas dinâmicas e relevância combinada.
   * **Iniciativa NISO ODI (*Open Discovery Initiative - NISO RP-19*):** Norma internacional que disciplina a transparência dos serviços de descoberta, coibindo manipulações comerciais e exigindo clareza quanto às fontes indexadas e critérios de pontuação.

---

### 4. Protocolos de Interoperabilidade: OAI-PMH, Z39.50 e SRU/SRW

* **Protocolo OAI-PMH (*Open Archives Initiative Protocol for Metadata Harvesting*):**
  * Opera na camada de aplicação via HTTP e XML para **colheita de metadados descritivos**.
  * Arquitetura bipartida: Provedor de Dados (*Data Provider* - repositório) e Provedor de Serviços (*Service Provider* - agregadores como BDTD e Oasisbr).
  * Exige compulsoriamente suporte a Dublin Core Simples (\`oai_dc\`).
  * **Os Seis Verbos Canônicos:** \`Identify\`, \`ListMetadataFormats\`, \`ListSets\`, \`ListIdentifiers\`, \`GetRecord\` e \`ListRecords\`.
* **ANSI/NISO Z39.50 (ISO 23950):**
  * Protocolo cliente/servidor para recuperação de registros bibliográficos em rede, suportando formatos como MARC 21. Opera por conexão direta de busca federada.
* **Protocolos SRU/SRW (*Search/Retrieve via URL / Web Service*):**
  * Desenvolvidos pela Library of Congress para transpor o Z39.50 aos padrões modernos da Web.
  * O **SRU** transporta a consulta via parâmetros URL (HTTP GET/REST); o **SRW** opera via mensagens SOAP/XML. Ambos utilizam a **CQL** (*Contextual Query Language*) para formular expressões booleanas e relacionais precisas.`,
  checkpoints: [
    {
      id: 'cp-6-2-1',
      pergunta: 'Micro-Checkpoint 1: O Papel do Protocolo OAI-PMH',
      item: 'O protocolo OAI-PMH é um mecanismo de comunicação que permite a colheita automatizada de metadados entre repositórios provedores de dados e sistemas provedores de serviços, exigindo como formato mínimo o padrão Dublin Core.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a função exata do OAI-PMH, que utiliza HTTP/XML para transferir metadados estruturados.',
    },
    {
      id: 'cp-6-2-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Metabusca e Discovery Services (WSDS)',
      item: 'Diferentemente dos metabuscadores tradicionais, que disparam consultas simultâneas distribuídas em tempo real a múltiplos servidores, os serviços de descoberta web-scale (WSDS) realizam a pesquisa sobre um índice centralizado previamente coletado e normalizado na nuvem.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a distinção tecnológica basilar cobrada pelo Cebraspe: os discovery services consultam um índice pré-unificado na nuvem (pre-harvested index), garantindo respostas em milissegundos e relevância unificada.',
    },
    {
      id: 'cp-6-2-3',
      pergunta: 'Micro-Checkpoint 3: Arquitetura de Microsserviços do FOLIO',
      item: 'A plataforma FOLIO (The Future of Library is Open) é estruturada como um sistema integrado monolítico de código proprietário, inviabilizando a adição ou substituição modular de componentes de gestão bibliotecária.',
      gabarito: 'E',
      justificativa: 'Errado! O FOLIO é uma plataforma livre (open-source) estruturada em microsserviços integrados pelo gateway Okapi, caracterizando-se pela flexibilidade e modularidade de seus componentes funcionais.',
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
        chipPegadinha: 'OAI-PMH colhe metadados estruturados em XML, e não o arquivo de texto completo.',
      },
      {
        id: 'aut-6-2-2',
        nome: 'Satbir Chauhan & Luciana Viana',
        ano: 2018,
        obraPrincipal: 'FOLIO: The Future of Library is Open / Plataformas de Serviços de Bibliotecas',
        ideiaChave: 'Transição dos SIGBs monolíticos para plataformas de serviços em nuvem com microsserviços (Okapi) e Linked Data.',
        chipPegadinha: 'O FOLIO é software aberto e gerencia recursos físicos e eletrônicos integradamente.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-2-1',
        afirmacao: 'O protocolo Z39.50 foi desenvolvido com a finalidade exclusiva de atuar como sistema de preservação digital de longo prazo em bibliotecas de acesso aberto.',
        gabarito: 'E',
        porQue: 'O Z39.50 é um protocolo de busca distribuída cliente/servidor para recuperação de registros bibliográficos em rede, e não sistema de preservação.',
      },
      {
        id: 'peg-6-2-2',
        afirmacao: 'Nos serviços de descoberta web-scale (WSDS), as buscas dos usuários dependem do envio síncrono e concorrente da consulta a todos os catálogos remotos cadastrados no momento da digitação do termo.',
        gabarito: 'E',
        porQue: 'Essa é a mecânica dos METABUSCADORES tradicionais. Os Discovery Services operam sobre um índice centralizado pré-coletado na nuvem, sem consulta síncrona aos servidores de origem.',
      },
    ],
  },
};
