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
    'O protocolo OAI-PMH opera na camada de aplicação via HTTP e XML para COLHEITA DE METADADOS. Ele NÃO transfere os arquivos de texto completo pesados durante o harvesting; ele coleta apenas os metadados descritivos (no mínimo Dublin Core).',
    'Os 6 verbos canônicos de requisição do OAI-PMH: Identify, ListMetadataFormats, ListSets, ListIdentifiers, GetRecord e ListRecords.',
    'O protocolo Z39.50 é um protocolo de BUSCA DISTRIBUÍDA simultânea em catálogos remotos heterogêneos. O Cebraspe já afirmou que o Z39.50 era um "sistema de preservação de registros": ERRADO!',
    'O SEER (Sistema Eletrônico de Editoração de Revistas) é a customização brasileira do OJS (Open Journal Systems do PKP), servindo à gestão do fluxo editorial e publicação de periódicos científicos de acesso aberto, e não a repositórios de teses.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Protocolos de Interoperabilidade: OAI-PMH vs. Z39.50',
    colunas: ['Critério', 'Protocolo OAI-PMH (Open Archives Initiative)', 'Protocolo Z39.50 (ANSI/NISO Z39.50 / ISO 23950)'],
    linhas: [
      ['Propósito Central', 'Colheita periódica de metadados (*Metadata Harvesting*)', 'Busca distribuída em tempo real (*Federated Search*)'],
      ['Arquitetura de Rede', 'Baseada em requisições REST/HTTP e retornos em XML estruturado', 'Baseada em conexão persistente cliente/servidor com protocolo binário'],
      ['Trabalho do Usuário', 'Busca sobre um índice centralizado já previamente colhido (instantânea)', 'Consulta disparada em tempo real para múltiplos servidores remotos (mais lenta)'],
      ['Formato Mínimo Exigido', 'Dublin Core Não Qualificado (*Simple DC* em XML)', 'Formatos bibliográficos como MARC 21 ou GRS-1'],
      ['Casos de Uso Típicos', 'Oasisbr, BDTD, Repositório da Câmara, Google Acadêmico', 'Busca integrada em redes de bibliotecas, catalogação cooperativa (OCLC)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Repositórios Institucionais (RIs) e a Democratização da Ciência

Conforme **Clifford Lynch** (2003), um repositório institucional universitário ou governamental é um conjunto de serviços que a organização oferece aos seus membros para a **gestão, custódia, preservação e disseminação em acesso aberto de materiais digitais** criados pela instituição e sua comunidade.

#### A. A Arquitetura do Software DSpace
O DSpace é a plataforma de software livre mais difundida no mundo para a criação de repositórios:
* **Estrutura Hierárquica de Dados:**  
  $$\\text{Comunidades} \\rightarrow \\text{Subcomunidades} \\rightarrow \\text{Coleções} \\rightarrow \\text{Itens} \\rightarrow \\text{Bitstreams (Arquivos)}$$
  * *Exemplo na Câmara dos Deputados:* Comunidade "Centro de Documentação e Informação" $\rightarrow$ Subcomunidade "Biblioteca" $\rightarrow$ Coleção "Obras Raras Digitalizadas" $\rightarrow$ Item "Constituição de 1824" $\rightarrow$ Arquivo \`constituicao1824.pdf\`.
* **Esquema de Metadados:** Adota nativamente o padrão **Dublin Core Qualificado**, permitindo a criação de esquemas customizados.
* **Identificador Persistente:** Utiliza nativamente o **Handle System** para garantir que cada item tenha uma URI imutável.

---

### 2. O Protocolo OAI-PMH (*Open Archives Initiative - Protocol for Metadata Harvesting*)

Desenvolvido por **Herbert Van de Sompel e Carl Lagoze**, o OAI-PMH é a espinha dorsal da interoperabilidade dos repositórios e bibliotecas digitais em todo o planeta:

#### A. Os Dois Atores da Rede OAI-PMH
1. **Provedor de Dados (*Data Provider* / Repositório):**
   * Sistema que mantém os documentos digitais e expõe seus metadados para coleta pública.
   * *Requisito Obrigatório:* Deve expor metadados em, no mínimo, **Dublin Core Simples (oai_dc)**, além de facultativamente outros padrões (MARCXML, MODS).
2. **Provedor de Serviços (*Service Provider* / Agregador / Harvester):**
   * Sistema que utiliza um colhedor (*harvester*) para emitir requisições automáticas e periódicas aos provedores de dados, compilando todos os metadados em uma base central de busca (ex.: **Oasisbr** e **BDTD** do IBICT).

#### B. Os Seis Verbos de Requisição HTTP do OAI-PMH
As consultas ao repositório são feitas via chamadas HTTP GET/POST contendo o parâmetro \`?verb=\`:
1. \`Identify\`: Retorna informações gerais sobre o repositório (nome, URL base, versão do protocolo, e-mail do administrador, política de deleção).
2. \`ListMetadataFormats\`: Lista os esquemas de metadados suportados pelo repositório (ex.: oai_dc, marcxml).
3. \`ListSets\`: Retorna a estrutura das coleções ou conjuntos (*sets*) existentes no repositório.
4. \`ListIdentifiers\`: Colhe apenas os cabeçalhos e identificadores unívocos dos registros, sem o corpo dos metadados.
5. \`GetRecord\`: Recupera o registro individual completo de um item específico a partir de seu identificador.
6. \`ListRecords\`: Colhe em lote os registros completos de metadados da base, suportando filtros por data e por conjunto.

---

### 3. O Protocolo Z39.50 e a Busca Federada

* O **ANSI/NISO Z39.50 (ISO 23950)** é um protocolo cliente/servidor formal voltado à recuperação de informações bibliográficas entre sistemas heterogêneos.
* **Funcionamento:** O cliente Z39.50 traduz a consulta formulada pelo usuário para a sintaxe universal do protocolo e a envia a múltiplos servidores remotos. Cada servidor processa a busca em seu catálogo local e devolve os registros bibliográficos para o cliente.
* **Diferença Crucial em Relação ao OAI-PMH:** O Z39.50 executa uma **pesquisa distribuída em tempo real** nos servidores distantes; o OAI-PMH faz **colheita periódica assíncrona** de metadados para busca local subsequente.`,
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
      pergunta: 'Micro-Checkpoint 2: Natureza e Licenciamento do DSpace',
      item: 'O DSpace é um software de paradigma proprietário e comercial desenvolvido para gestão de repositórios digitais, cuja utilização em bibliotecas governamentais depende da aquisição prévia de licença de uso.',
      gabarito: 'E',
      justificativa: 'Errado! O DSpace é um SOFTWARE LIVRE (código aberto / open source), gratuito e customizável, amplamente fomentado no Brasil pelo IBICT.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-2-1',
        periodo: '1988 / 1995',
        disciplina: 'Protocolo de Busca em Rede',
        focoPrincipal: 'Padronização do protocolo ANSI/NISO Z39.50 para busca distribuída cliente-servidor',
        figuraChave: 'NISO / Library of Congress',
      },
      {
        id: 'tl-6-2-2',
        periodo: '2001',
        disciplina: 'Interoperabilidade Aberta',
        focoPrincipal: 'Lançamento oficial do protocolo OAI-PMH e da Open Archives Initiative',
        figuraChave: 'Herbert Van de Sompel e Carl Lagoze',
      },
      {
        id: 'tl-6-2-3',
        periodo: '2002',
        disciplina: 'Software de Repositórios',
        focoPrincipal: 'Lançamento do software livre DSpace pelo MIT e HP Labs',
        figuraChave: 'MIT Libraries e HP Labs',
      },
    ],
    autores: [
      {
        id: 'aut-6-2-1',
        nome: 'Herbert Van de Sompel',
        ano: 2001,
        obraPrincipal: 'The Open Archives Initiative Protocol for Metadata Harvesting',
        ideiaChave: 'Criador do protocolo OAI-PMH; arquitetura de provedores de dados e provedores de serviços.',
        chipPegadinha: 'OAI-PMH colhe metadados estruturados em XML, não o arquivo PDF pesado.',
      },
      {
        id: 'aut-6-2-2',
        nome: 'Clifford Lynch',
        ano: 2003,
        obraPrincipal: 'Institutional Repositories: Essential Infrastructure for Scholarship in the Digital Age',
        ideiaChave: 'O repositório institucional como infraestrutura acadêmica de gestão, preservação e visibilidade.',
        chipPegadinha: 'Repositório não é mero disco virtual de arquivos; envolve curadoria e compromisso institucional perene.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-2-1',
        afirmacao: 'O protocolo Z39.50 foi desenvolvido com a finalidade exclusiva de atuar como sistema de preservação digital de longo prazo em bibliotecas de acesso aberto.',
        gabarito: 'E',
        porQue: 'O Z39.50 é um protocolo de comunicação para busca e recuperação de informações bibliográficas entre computadores, e não um sistema de preservação digital.',
      },
      {
        id: 'peg-6-2-2',
        afirmacao: 'A realização de buscas no portal da Biblioteca Digital Brasileira de Teses e Dissertações (BDTD) é inviabilizada caso os repositórios cooperantes não utilizem o mesmo software DSpace.',
        gabarito: 'E',
        porQue: 'A BDTD baseia-se na interoperabilidade do protocolo OAI-PMH; qualquer repositório (DSpace, EPrints, Fedora) que exponha metadados no padrão OAI-PMH pode ser colhido.',
      },
    ],
  },
};
