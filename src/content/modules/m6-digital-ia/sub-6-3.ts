import type { ModuloFilho } from '../../../domain/types';

export const submodulo63: ModuloFilho = {
  id: 'sub-6-3',
  numero: '6.3',
  titulo: 'Preservação Digital e o Modelo de Referência OAIS (ISO 14721)',
  descricaoCurta: 'Desafios da obsolescência digital, dimensões física, lógica e intelectual, estratégias de preservação (migração, emulação, refrescamento, encapsulamento), a arquitetura funcional do modelo OAIS (SIP, AIP e DIP), o padrão de metadados PREMIS, RDF e a Rede Cariniana (LOCKSS).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['CCSDS / ISO 14721', 'Miguel Ángel Márdero Arellano', 'Sônia Miguel', 'David Rosenthal', 'NDSA / Library of Congress', 'Luciana Duranti'],
  alertasCebraspe: [
    'O modelo OAIS (Open Archival Information System / ISO 14721) NÃO é um software nem uma ferramenta de computador: é um MODELO CONCEITUAL internacional de referência que define a arquitetura funcional e os requisitos de repositórios digitais confiáveis (RDC-Arq).',
    'A tríade dos Pacotes de Informação do OAIS: 1. SIP (Submission Information Package - enviado pelo produtor na ingestão); 2. AIP (Archival Information Package - custodiado com metadados exaustivos de preservação, proveniência e integridade); e 3. DIP (Dissemination Information Package - entregue ao usuário na busca, derivado do AIP).',
    'Diferença crucial entre Emulação e Migração: a Migração converte o arquivo digital de um formato obsoleto para um formato contemporâneo (alterando a estrutura binária do arquivo); a Emulação mantém o arquivo binário original estritamente intocado e recria o ambiente original de software e hardware através de um programa emulador em computadores modernos.',
    'Backups em discos rígidos ou em nuvem NÃO equivalem a preservação digital de longo prazo: backups combatem unicamente falhas físicas imediatas de perda de dados; não solucionam a obsolescência lógica dos formatos, não monitoram a perda de renderização e não garantem autenticidade jurídica ao longo dos anos.',
    'Metadados de Preservação Digital (PREMIS 3.0): estruturam-se em 5 entidades essenciais: Objetos (arquivos e representações), Eventos (ações exercidas sobre o objeto), Agentes (pessoas ou softwares executores), Direitos (permissões legais de acesso e cópia) e Ambientes.',
    'A estrutura de dados fundamental da Web Semântica e do RDF (Resource Description Framework) consiste em TRIPLAS: Sujeito, Predicado e Objeto, expressas por meio de URIs.',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Principais Estratégias de Preservação Digital',
    colunas: ['Estratégia de Preservação', 'Mecanismo Operacional', 'Vantagens Principais', 'Limitações e Riscos Críticos', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Refrescamento (*Refreshing*)', 'Cópia periódica dos bits de uma mídia degradada para outra mídia mais nova do mesmo formato', 'Combate a deterioração física do suporte magnético ou óptico', 'Não soluciona a obsolescência lógica dos formatos de arquivo nem dos softwares de leitura', 'Afirmar que o refrescamento converte arquivos DOC em PDF/A (FALSO: quem converte é a Migração).'],
      ['Migração de Formatos', 'Conversão de arquivos de formatos proprietários/obsoletos para novos padrões abertos (ex.: DOC para PDF/A)', 'Garante leitura em softwares contemporâneos sem exigir equipamentos arcaicos', 'Risco de perda cumulativa de formatação, layout, fontes especiais e scripts dinâmicos', 'Dizer que a migração não altera o código binário original (FALSO: o arquivo é transformado).'],
      ['Emulação (*Emulation*)', 'Recriação do hardware e sistema operacional original por software emulador em máquinas modernas', 'Preserva a integridade e o comportamento original exato mantendo o arquivo binário intocado', 'Depende de alto domínio técnico para desenvolver e manter emuladores de sistemas complexos', 'Afirmar que a emulação converte o arquivo para formatos web modernos (FALSO: mantém o arquivo antigo).'],
      ['Encapsulamento', 'Agrupamento do documento digital com seus metadados descritivos e softwares de leitura em um único pacote', 'Autossuficiência informativa do pacote preservado', 'Aumenta significativamente o tamanho em disco e a complexidade de desempacotamento', 'Confundir encapsulamento com descompactação simples de arquivos ZIP.'],
      ['Preservação de Tecnologia', 'Manutenção física e operacional de computadores, placas e unidades de leitura originais (museu de hardware)', 'Execução no suporte físico original nativo', 'Completamente inviável a longo prazo por ausência de peças sobressalentes e custo exorbitante', 'Achar que manter computadores antigos em funcionamento é a recomendação oficial do OAIS.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Os Desafios e as Três Dimensões da Preservação Digital

Preservar documentos digitais é um desafio radicalmente mais complexo e dinâmico do que a conservação tradicional de livros em papel. Enquanto o papel alcalino sobrevive por séculos em ambientes climaticamente estáveis, **o documento digital pode tornar-se ilegível em poucos anos**, vitimado pela degradação das mídias magnéticas/ópticas e pela **obsolescência tecnológica acelerada** de softwares e formatos (Arellano, 2004; Miguel, 2008):

#### As Três Dimensões da Preservação Digital:
1. **Preservação Física:**
   * Cuida da integridade física dos suportes e suportes magnéticos, discos rígidos corporativos, fitas LTO e discos ópticos contra poeira, calor, umidade, descargas eletrostáticas e campos magnéticos.
2. **Preservação Lógica:**
   * Enfrenta a obsolescência de formatos de arquivos e linguagens de codificação. Garante que os fluxos de bits (*bitstreams*) armazenados continuem sendo decodificáveis, interpretáveis e renderizáveis por novos softwares no futuro.
3. **Preservação Intelectual:**
   * Garante a **autenticidade, integridade, fidedignidade e proveniência** do documento digital ao longo de sucessivas migrações e transferências de custódia.
   * Assegura que o documento não sofreu adulterações fraudulentas ou corrupções acidentais, mantendo sua validade jurídica e probatória (projeto InterPARES / Luciana Duranti).

> [!CAUTION]
> **Pegadinha Clássica do Cebraspe:** A banca afirma que "a realização sistemática de rotinas de backup garante a preservação digital de longo prazo dos documentos de uma biblioteca". **ERRADO!** O backup é mera cópia física de segurança para recuperação de curto prazo em caso de desastre operacional. Ele não resolve a obsolescência de formatos nem registra metadados de proveniência e autenticidade.

---

### 2. O Modelo de Referência OAIS (ISO 14721:2012 / 2025)

O **Open Archival Information System (OAIS)**, padronizado internacionalmente pela norma **ISO 14721**, é o arcabouço conceitual definidor de todo Repositório Digital Confiável (RDC-Arq e ISO 16363):

\`\`\`mermaid
graph LR
    subgraph Ambiente Externo
        P[Produtor]
        C[Consumidor / Comunidade Alvo]
        M[Administração / Gestão]
    end
    subgraph Repositório OAIS - ISO 14721
        ING[Ingestão - Ingest]
        AS[Armazenamento - Archival Storage]
        DM[Gestão de Dados - Data Management]
        ADM[Administração - Administration]
        PP[Planejamento da Preservação - Preservation Planning]
        ACC[Acesso - Access]
    end
    P -->|Envia SIP| ING
    ING -->|Gera AIP| AS
    ING -. Metadados .-> DM
    PP -. Monitora Tecnologia .-> ADM
    ADM -. Diretrizes .-> AS
    AS -->|AIP para DIP| ACC
    ACC -->|Entrega DIP| C
\`\`\`

#### A. As Três Entidades do Ambiente Externo
1. **Produtor (*Producer*):** Pessoa ou entidade que submete os documentos e metadados ao repositório.
2. **Consumidor (*Consumer*):** Usuário final ou sistema que pesquisa e recupera conteúdos preservados. O OAIS destaca o conceito de **Comunidade-Alvo (*Designated Community*)**: o grupo específico de usuários para quem o repositório é projetado e cujos conhecimentos prévios definem a quantidade de metadados de representação exigida.
3. **Administração / Gestão (*Management*):** Órgão de direção que estabelece políticas institucionais e assegura recursos financeiros para a sustentabilidade do arquivo.

#### B. Os Seis Módulos Funcionais do OAIS
1. **Ingestão (*Ingest*):** Recebe o SIP do Produtor, valida sua fixidez (*checksum*), extrai metadados, formata o conteúdo e produz o pacote de arquivamento (AIP).
2. **Armazenamento Arquivístico (*Archival Storage*):** Custodia os pacotes AIP com redundância física, monitora mídias e executa rotinas de refrescamento.
3. **Gestão de Dados (*Data Management*):** Administra os bancos de dados que armazenam os metadados descritivos e administrativos para pesquisa.
4. **Administração (*Administration*):** Gerencia a operação rotineira, negocia acordos de submissão com produtores e supervisiona os padrões de serviço.
5. **Planejamento da Preservação (*Preservation Planning*):** Módulo intelectual que monitora o ambiente tecnológico externo, identifica formatos em vias de extinção e planeja planos de migração preventiva antes que os documentos se tornem inacessíveis.
6. **Acesso (*Access*):** Interface que atende às solicitações dos consumidores, consulta o Data Management, extrai o conteúdo do Archival Storage, gera o pacote de disseminação (DIP) e o entrega ao usuário.

#### C. A Tríade de Pacotes de Informação (*Information Packages*)
* **SIP (*Submission Information Package*):** Pacote de submissão elaborado pelo autor/produtor, contendo o documento bruto e metadados preliminares.
* **AIP (*Archival Information Package*):** O pacote nuclear da preservação. Reúne o objeto digital acompanhado de sua **Informação de Representação** (como decodificar os bits) e de sua **Informação de Preservação e Descrição (PDI)**: Proveniência, Contexto, Referência, Fixidez (*checksum* SHA-256) e Direitos de Acesso.
* **DIP (*Dissemination Information Package*):** Pacote leve e otimizado gerado a partir do AIP quando o usuário solicita o download na interface web (ex.: versão PDF compactada gerada a partir de arquivos TIFF matrizes pesados).

---

### 3. Padrões de Metadados: PREMIS, METS e RDF na Web Semântica

#### A. O Dicionário de Dados PREMIS (Preservation Metadata: Implementation Strategies)
Coordenado pela Library of Congress, o PREMIS é o padrão de metadados de preservação por excelência, estruturado em **cinco entidades nucleares**:
1. **Objetos (*Objects*):** As unidades discretas de informação digital (arquivos, representações ou fluxos de bits).
2. **Eventos (*Events*):** Ações e intervenções que afetam um Objeto ao longo de sua existência (ex.: ingestão, migração de formato, validação de fixidez, assinatura digital).
3. **Agentes (*Agents*):** Pessoas, instituições ou softwares executores dos Eventos.
4. **Direitos (*Rights*):** Declarações formais sobre permissões e proibições de direitos autorais e licenças de custódia e cópia.
5. **Ambientes (*Environments*):** Especificações de hardware e software necessárias para renderizar e utilizar os Objetos.

#### B. O Padrão METS (Metadata Encoding and Transmission Standard)
Esquema XML padronizado pela Library of Congress para empacotar e estruturar objetos digitais complexos:
* Divide-se em seções rigorosas: Cabeçalho METS (*metsHdr*), Metadados Descritivos (*dmdSec*), Metadados Administrativos (*amdSec*), Grupo de Arquivos (*fileSec*), Mapa Estrutural (*structMap* - obrigatório, define a hierarquia da obra) e Vínculos Estruturais (*structLink*).

#### C. O Modelo RDF (Resource Description Framework) na Web Semântica
* Modelo conceitual desenvolvido pelo W3C para representar dados e relacionamentos na Web Semântica.
* **Estrutura Canônica:** Baseia-se em declarações expressas por meio de **TRIPLAS**:

$$\\langle \\text{Sujeito} \\rangle \\; \\xrightarrow{\\text{Predicado}} \\; \\langle \\text{Objeto} \\rangle$$

* Sujeitos, Predicados e Objetos são identificados universalmente por **URIs / IRIs**, permitindo que computadores processem o sentido semântico das conexões e construam grafos de conhecimento conectados (*Linked Data*).

---

### 4. A Rede Cariniana e a Tecnologia LOCKSS

No Brasil, o IBICT estruturou em 2012 a **Rede Cariniana**:
* Congrega repositórios institucionais de universidades federais e órgãos governamentais para garantir a custódia compartilhada de teses, dissertações e periódicos.
* **A Tecnologia LOCKSS (*Lots of Copies Keep Stuff Safe* de Stanford):**
  * Baseia-se no princípio clássico da Biblioteconomia de que a conservação assegura-se pela **distribuição geográfica descentralizada de cópias redundantes**.
  * Opera em rede *peer-to-peer* (P2P): servidores espalhados por todo o país realizam auditorias recíprocas e contínuas por meio de protocolos criptográficos (*polling* de integridade).
  * Se um nó da rede sofrer perda de dados ou ataque cibernético, os outros nós restauram automaticamente o arquivo idêntico e íntegro.`,
  checkpoints: [
    {
      id: 'cp-6-3-1',
      pergunta: 'Micro-Checkpoint 1: O Modelo de Referência OAIS',
      item: 'O modelo de referência OAIS (Open Archival Information System), formalizado pela norma ISO 14721, estabelece as bases conceituais para a arquitetura de repositórios digitais confiáveis, estruturando o fluxo documental nos pacotes SIP, AIP e DIP.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a definição exata do OAIS e de seus três pacotes de informação padronizados.',
    },
    {
      id: 'cp-6-3-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Emulação e Migração',
      item: 'Diferentemente da migração de formatos, a estratégia de emulação altera o código binário interno do documento digital para torná-lo compatível com os novos sistemas operacionais vigentes no mercado.',
      gabarito: 'E',
      justificativa: 'Errado! Quem altera o arquivo e seu formato é a MIGRAÇÃO. A emulação preserva o arquivo binário exatamente intocado e recria o ambiente do sistema antigo por meio de um software emulador.',
    },
    {
      id: 'cp-6-3-3',
      pergunta: 'Micro-Checkpoint 3: Triplas RDF na Web Semântica',
      item: 'A estrutura de dados fundamental do padrão RDF (Resource Description Framework) consiste em triplas compostas por Sujeito, Predicado e Objeto.',
      gabarito: 'C',
      justificativa: 'Certo! As triplas RDF formam grafos de conhecimento que permitem computadores interpretarem o significado semântico das conexões entre entidades identificadas por URIs.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-3-1',
        periodo: '2002 / 2012',
        disciplina: 'Modelo OAIS',
        focoPrincipal: 'Publicação do modelo OAIS pela NASA/CCSDS e homologação como norma internacional ISO 14721',
        figuraChave: 'CCSDS / ISO',
      },
      {
        id: 'tl-6-3-2',
        periodo: '2004 / 2015',
        disciplina: 'Metadados PREMIS',
        focoPrincipal: 'Criação do dicionário de dados PREMIS pela Library of Congress e OCLC para metadados de preservação digital',
        figuraChave: 'Library of Congress',
      },
      {
        id: 'tl-6-3-3',
        periodo: '2012',
        disciplina: 'Preservação em Rede no Brasil',
        focoPrincipal: 'Criação da Rede Cariniana pelo IBICT utilizando a infraestrutura distribuída LOCKSS',
        figuraChave: 'Miguel Ángel Márdero Arellano / IBICT',
      },
    ],
    autores: [
      {
        id: 'aut-6-3-1',
        nome: 'Miguel Ángel Márdero Arellano',
        ano: 2004,
        obraPrincipal: 'Preservação de documentos digitais e Repositórios Confiáveis',
        ideiaChave: 'Sistematização da preservação digital no Brasil e liderança na implantação da Rede Cariniana.',
        chipPegadinha: 'Preservação digital exige intervenção política e metadados estruturados, não apenas backup físico.',
      },
      {
        id: 'aut-6-3-2',
        nome: 'David Rosenthal',
        ano: 2005,
        obraPrincipal: 'LOCKSS: Lots of Copies Keep Stuff Safe',
        ideiaChave: 'Rede distribuída P2P de cópias redundantes com auditoria contínua e autocura.',
        chipPegadinha: 'A segurança do LOCKSS baseia-se na descentralização e no consenso criptográfico entre múltiplos nós.',
      },
      {
        id: 'aut-6-3-3',
        nome: 'Luciana Duranti',
        ano: 1999,
        obraPrincipal: 'The InterPARES Project (International Research on Permanent Authentic Records in Electronic Systems)',
        ideiaChave: 'Diplomática contemporânea e garantia de autenticidade jurídica e integridade de documentos eletrônicos.',
        chipPegadinha: 'Documentos autênticos exigem cadeia ininterrupta de custódia e fixidez inviolável.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-3-1',
        afirmacao: 'O modelo de referência OAIS (ISO 14721) define um software de código aberto pronto para download e instalação direta em servidores de arquivos.',
        gabarito: 'E',
        porQue: 'O OAIS é um MODELO CONCEITUAL e normativo de referência que orienta o projeto de sistemas, e não um software ou pacote executável de computador.',
      },
      {
        id: 'peg-6-3-2',
        afirmacao: 'A realização periódica de rotinas de backup físico em discos rígidos assegura plenamente a preservação digital de longo prazo dos documentos de um repositório.',
        gabarito: 'E',
        porQue: 'Backups combatem apenas panes físicas de hardware no curto prazo; não combatem a obsolescência lógica dos formatos nem garantem integridade conceitual e autenticidade.',
      },
      {
        id: 'peg-6-3-3',
        afirmacao: 'Na arquitetura funcional do OAIS, o módulo de Ingestão é o responsável exclusivo por realizar a entrega dos pacotes de disseminação (DIP) aos usuários consumidores.',
        gabarito: 'E',
        porQue: 'A Ingestão recebe o SIP do Produtor e gera o AIP. Quem entrega o DIP ao Consumidor na interface externa é o módulo funcional de ACESSO (Access).',
      },
    ],
  },
};
