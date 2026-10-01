import type { ModuloFilho } from '../../../domain/types';

export const submodulo63: ModuloFilho = {
  id: 'sub-6-3',
  numero: '6.3',
  titulo: 'Preservação Digital e o Modelo de Referência OAIS (ISO 14721)',
  descricaoCurta: 'Desafios da obsolescência digital, dimensões física, lógica e intelectual, estratégias de preservação (migração, emulação, refrescamento), a arquitetura funcional do modelo OAIS (SIP, AIP e DIP) e a Rede Cariniana (LOCKSS).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['CCSDS / ISO 14721', 'Miguel Ángel Márdero Arellano', 'Sônia Miguel', 'David Rosenthal'],
  alertasCebraspe: [
    'O modelo OAIS (Open Archival Information System / ISO 14721) NÃO é um software nem um sistema proprietário brasileiro de direitos autorais: é um MODELO CONCEITUAL internacional de referência para arquivos e bibliotecas digitais abertas.',
    'A tríade dos Pacotes de Informação do OAIS: SIP (Submission Information Package - enviado pelo produtor na ingestão); AIP (Archival Information Package - armazenado em custódia permanente com metadados completos de preservação); e DIP (Dissemination Information Package - entregue ao usuário na busca).',
    'Diferença entre Emulação e Migração: a Migração converte o arquivo digital de um formato em desuso para um formato mais novo (altera o arquivo); a Emulação mantém o arquivo binário original intacto e recria o ambiente original de software/hardware executável por meio de outro programa emulador.',
    'Fazer backups em discos rígidos ou nuvem NÃO é suficiente para garantir a preservação digital de longo prazo: backups combatem apenas falhas físicas de curto prazo, não resolvendo a obsolescência lógica dos formatos nem garantindo autenticidade e proveniência.',
    'A Rede Cariniana (coordenada pelo IBICT) utiliza o software livre LOCKSS (Lots of Copies Keep Stuff Safe), baseado em uma rede distribuída e descentralizada peer-to-peer (P2P) de cópias espelhadas.',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Principais Estratégias de Preservação Digital',
    colunas: ['Estratégia de Preservação', 'Mecanismo Operacional', 'Vantagens Principais', 'Limitações e Riscos Críticos'],
    linhas: [
      ['Refrescamento (*Refreshing*)', 'Cópia periódica dos dados de uma mídia antiga para outra mídia mais recente do mesmo tipo', 'Combate a degradação física do suporte magnético ou óptico', 'Não soluciona a obsolescência lógica dos formatos nem dos softwares de leitura'],
      ['Migração de Formatos', 'Conversão de arquivos de formatos obsoletos para novos padrões abertos (ex.: DOC para PDF/A)', 'Permite a leitura em softwares atuais e ampla disseminação', 'Risco de perda cumulativa de formatação, layout original, fontes e metadados intrínsecos'],
      ['Emulação (*Emulation*)', 'Recriação do hardware e sistema operacional original por meio de software emulador em máquinas modernas', 'Preserva a integridade e o comportamento exato original sem alterar o arquivo binário', 'Depende de conhecimento técnico profundo dos sistemas operacionais e hardware arcaicos'],
      ['Preservação de Tecnologia', 'Manutenção física e operacional de computadores, drives e placas originais (museu de hardware)', 'Permite a execução em sua forma nativa física', 'Completamente inviável a longo prazo por falta de peças sobressalentes e custo astronômico'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Os Desafios e as Três Dimensões da Preservação Digital

Preservar documentos digitais é um desafio radicalmente mais complexo do que guardar papel em estantes. Enquanto o papel alcalino dura séculos sob condições ambientais estáveis, documentos digitais tornam-se inacessíveis em poucos anos devido à **obsolescência tecnológica acelerada** (Arellano, 2004; Miguel, 2008, presentes em nosso acervo em \`Digital, repositórios e IA\`):

#### As Três Dimensões da Preservação Digital:
1. **Preservação Física:**
   * Cuida da integridade física dos suportes e mídias de armazenamento (discos magnéticos, fitas LTO, discos de estado sólido e ópticos) contra poeira, campos magnéticos e degradação de materiais.
2. **Preservação Lógica:**
   * Enfrenta a obsolescência de formatos e codificações de dados face à evolução dos sistemas operacionais e softwares aplicativos (garantindo que o arquivo binário possa ser interpretado no futuro).
3. **Preservação Intelectual:**
   * Garante a **autenticidade, integridade e confiabilidade** do documento digital ao longo de sucessivas migrações, certificando que o conteúdo não foi adulterado, forjado ou descontextualizado (controle de cadeias de custódia e metadados de proveniência - PREMIS).

---

### 2. O Modelo de Referência OAIS (ISO 14721:2012 / 2025)

O **Open Archival Information System (OAIS)**, padronizado pela norma internacional ISO 14721 (disponível integralmente em nosso acervo na pasta \`Digital, repositórios e IA/ISO-14721-2025.pdf\`), é a espinha dorsal de todo Repositório Digital Confiável (RDC-Arq):

#### A. A Arquitetura Funcional do OAIS
O modelo é composto por seis entidades funcionais interdependentes:
1. **Ingestão (*Ingest*):** Recebe os dados do Produtor, valida a integridade e gera o pacote de arquivamento.
2. **Armazenamento Arquivístico (*Archival Storage*):** Custodia com redundância e segurança os pacotes preservados.
3. **Gestão de Dados (*Data Management*):** Administra os metadados de busca e os bancos de dados do repositório.
4. **Administração (*Administration*):** Gerencia a operação geral, padrões e políticas institucionais.
5. **Planejamento da Preservação (*Preservation Planning*):** Monitora a evolução tecnológica externa, detecta formatos em risco de obsolescência e formula planos de migração preventiva.
6. **Acesso (*Access*):** Interface de busca e entrega de conteúdos ao Consumidor (usuário final).

#### B. A Tríade de Pacotes de Informação (*Information Packages*)
* **SIP (*Submission Information Package*):** Pacote de submissão criado pelo autor ou setor produtor e submetido ao repositório para ingestão.
* **AIP (*Archival Information Package*):** Pacote de arquivamento gerado a partir do SIP, contendo os arquivos originais acompanhados de metadados exaustivos de representação, fixidez (hashes SHA-256), proveniência, contexto e direitos (o coração do repositório).
* **DIP (*Dissemination Information Package*):** Pacote de disseminação gerado a partir do AIP quando o usuário solicita o acesso, adaptado para navegação rápida na Web (ex.: gerando um PDF web a partir de matrizes TIFF pesadas).

---

### 3. A Rede Cariniana e a Estratégia LOCKSS

No Brasil, o Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT) criou em 2012 a **Rede Cariniana**:
* É a **Rede Brasileira de Serviços de Preservação Digital**, que congrega universidades, centros de pesquisa e bibliotecas governamentais.
* **A Tecnologia LOCKSS (*Lots of Copies Keep Stuff Safe*):** Desenvolvida pela Universidade de Stanford, baseia-se no princípio de que a segurança e preservação de documentos digitais advêm da **distribuição geográfica de múltiplas cópias redundantes** em servidores independentes que realizam auditoria contínua entre si por protocolo *peer-to-peer* (P2P), restaurando automaticamente cópias corrompidas.`,
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
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-3-1',
        periodo: '1999 / 2002',
        disciplina: 'Padrão Espacial e Arquivístico',
        focoPrincipal: 'Desenvolvimento do modelo OAIS pelo comitê CCSDS e homologação como ISO 14721',
        figuraChave: 'CCSDS / ISO',
      },
      {
        id: 'tl-6-3-2',
        periodo: '1999',
        disciplina: 'Preservação Distribuída',
        focoPrincipal: 'Criação do projeto LOCKSS na Universidade de Stanford',
        figuraChave: 'David Rosenthal e Vicky Reich',
      },
      {
        id: 'tl-6-3-3',
        periodo: '2012',
        disciplina: 'Preservação Digital no Brasil',
        focoPrincipal: 'Criação da Rede Cariniana pelo IBICT para preservação digital de periódicos e teses',
        figuraChave: 'Miguel Ángel Márdero Arellano / IBICT',
      },
    ],
    autores: [
      {
        id: 'aut-6-3-1',
        nome: 'Miguel Ángel Márdero Arellano',
        ano: 2004,
        obraPrincipal: 'Preservação de documentos digitais',
        ideiaChave: 'Coordenador da Rede Cariniana; referência nacional em estratégias de migração, emulação e modelo OAIS.',
        chipPegadinha: 'Arellano lidera a aplicação prática do modelo OAIS e LOCKSS no Brasil.',
      },
      {
        id: 'aut-6-3-2',
        nome: 'David Rosenthal',
        ano: 1999,
        obraPrincipal: 'LOCKSS: A permanent publishing system for digital networks',
        ideiaChave: 'Princípio do LOCKSS: muitas cópias distribuídas garantem a segurança de longo prazo.',
        chipPegadinha: 'LOCKSS opera em rede peer-to-peer com auditoria contínua de integridade de hashes.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-3-1',
        afirmacao: 'O modelo de referência OAIS consiste em um sistema governamental brasileiro para a gestão e comercialização de direitos de propriedade intelectual em repositórios abertos.',
        gabarito: 'E',
        porQue: 'Essa assertiva é uma pegadinha clássica do Cebraspe (IPHAN). O OAIS é um modelo conceitual internacional de preservação digital de longo prazo (ISO 14721), sem relação com comércio de propriedade intelectual.',
      },
      {
        id: 'peg-6-3-2',
        afirmacao: 'A realização periódica de backups em mídias físicas de memória não volátil é suficiente para garantir a preservação digital permanente em bibliotecas universitárias.',
        gabarito: 'E',
        porQue: 'Backup apenas salva cópias do arquivo físico; não resolve a degradação lógica dos formatos de software, a quebra de links nem a obsolescência de programas leitores.',
      },
    ],
  },
};
