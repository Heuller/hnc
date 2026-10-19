import type { ModuloFilho } from '../../../domain/types';

export const submodulo26: ModuloFilho = {
  id: 'sub-2-6',
  numero: '2.6',
  editalRef: 'Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7',
  preRequisitos: ["sub-2-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-2",
          "titulo": "Protocolos de Interoperabilidade e SIGB",
          "motivo": "Uso do Dublin Core na colheita OAI-PMH e em repositórios digitais."
      },
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML Brasil",
          "motivo": "Crosswalk de metadados MARC e Dublin Core para o esquema XML do LexML."
      }
  ],
  titulo: 'Metadados: Tipologia, Qualidade, Perfis de Aplicação, Crosswalks, Imagem e Som',
  titulo_curto: 'Tipologia e Governança de Metadados',
  antesDeLer: [
    {
      termo: 'Metadados de Preservação (PREMIS)',
      definicao: 'Dicionário internacional de dados focado em garantir a viabilidade, autenticidade, integridade e identificação de longo prazo de objetos digitais.',
      exemploBiblioteca: 'Registro da assinatura digital e da cadeia de custódia de projetos de lei assinados eletronicamente no arquivo da Câmara.',
    },
    {
      termo: 'Crosswalk (Mapeamento de Metadados)',
      definicao: 'Tabela de conversão que mapeia semanticamente elementos de um esquema de metadados em outro (ex.: MARC 21 para Dublin Core).',
      exemploBiblioteca: 'Exportação automática de registros do sistema de biblioteca (MARC tag 245) para o repositório DSpace (dc.title).',
    },
    {
      termo: 'Perfil de Aplicação (Application Profile)',
      definicao: 'Conjunto de termos e restrições de metadados customizados a partir de um ou mais esquemas para atender às necessidades de uma comunidade específica.',
      exemploBiblioteca: 'Perfil de metadados Dublin Core da RVBI com qualificadores obrigatórios para tipos específicos de leis e decretos.',
    },
    {
      termo: 'Metadados de Proveniência',
      definicao: 'Informações que documentam a origem, história de custódia, alterações e contexto de produção de um registro informacional.',
      exemploBiblioteca: 'Rastrear em que gabinete ou comissão determinado texto substitutivo foi gerado e quando foi protocolado.',
    },
  ],
  descricaoCurta: 'Tipologia NISO (descritivos, administrativos, técnicos, estruturais, direitos, preservação), qualidade e governança de metadados, perfis de aplicação (Heery & Patel 2000), crosswalks (perda e granularidade) e padrões para imagem (MIX/Z39.87) e som (PBCore).',
  tempoEstimadoMinutos: 15,
  autoresChave: [
    'National Information Standards Organization (NISO)',
    'Rachel Heery',
    'Manjula Patel',
    'Library of Congress',
    'PBCore Association',
  ],
  alertasCebraspe: [
    'Crosswalk é mapeamento, harmonização e ponte semântica, e NÃO conversão automática sem perda de informação. A banca Cebraspe frequentemente tenta induzir o candidato ao erro afirmando equivalência total ou reversibilidade perfeita entre esquemas de granularidades distintas (como o mapeamento de MARC 21 para Dublin Core).',
    'Metadados estruturais descrevem a organização interna, a paginação e as relações lógicas/físicas entre os componentes de um objeto digital (como a sequência de fólios de um manuscrito raro ou o relacionamento pai-filho entre arquivos em PDF e TIFF), e não o conteúdo temático, assunto ou autoria da obra.',
    'Um perfil de aplicação (application profile), segundo o modelo conceitual canônico de Rachel Heery e Manjula Patel (2000), combina elementos e propriedades pinçados de diferentes esquemas de metadados pré-existentes, customizando-os com qualificadores locais sem criar termos desnecessários para conceitos já padronizados.',
    'Na tipologia formal da NISO (Understanding Metadata), metadados técnicos, metadados de direitos e metadados de preservação são historicamente considerados especializações funcionais dos metadados administrativos; todavia, o edital nº 1/2026 da Câmara dos Deputados os distingue como dimensões operacionais autônomas, exigindo domínio individualizado de cada categoria.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa da Tipologia Funcional de Metadados (NISO / Edital Cebraspe)',
    colunas: ['Tipo de Metadado (Edital 3.2)', 'Pergunta Central Respondida', 'Foco Primordial do Esquema', 'Padrão / Esquema Canônico', 'Exemplo Prático na Câmara dos Deputados'],
    linhas: [
      [
        'Descritivo',
        'Sobre o que é o recurso e como identificá-lo?',
        'Descoberta, identificação, localização e recuperação temática por usuários.',
        'Dublin Core (DCMI), MARC 21 Bibliográfico, MODS.',
        'Título do projeto de lei, autor parlamentar, data de apresentação e termos de indexação temática do Tesauro.',
      ],
      [
        'Administrativo',
        'Como o recurso foi gerenciado institucionalmente?',
        'Controle do ciclo de vida, proveniência de guarda, tramitação e descarte.',
        'EAD (Encoded Archival Description), METS (amdSec), esquemas institucionais.',
        'Data de digitalização da ata parlamentar, número do lote de digitalização e identificação do operador.',
      ],
      [
        'Técnico',
        'Quais são as características físicas/digitais do arquivo?',
        'Decodificação, renderização por software, formatos de arquivo e características de captura.',
        'NISO Z39.87 / MIX (imagens), PBCore (áudio/vídeo), EXIF, BWF.',
        'Resolução de 400 DPI, espaço de cores sRGB de 24 bits, formato TIFF sem compressão de um fólio da Constituição de 1988.',
      ],
      [
        'Estrutural',
        'Como as partes do recurso se organizam e se relacionam?',
        'Navegação, hierarquia de páginas, ordenação de capítulos e agregação de múltiplos arquivos.',
        'METS (seção structMap), MPEG-21 (DIDL).',
        'Mapa que ordena os 120 arquivos de imagem JPG escaneados correspondentes aos 120 fólios sequenciais de um relatório de CPI.',
      ],
      [
        'De Direitos (Rights)',
        'Quem detém os direitos e quais usos são legalmente autorizados?',
        'Propriedade intelectual, direitos autorais (Lei 9.610/98), termos de licença e embargos.',
        'Creative Commons (cc:license), RightsStatements.org, METS (rightsMD), PREMIS.',
        'Declaração de domínio público ou licença CC-BY 4.0 para os dados abertos e discursos oficiais produzidos na Câmara.',
      ],
      [
        'De Preservação',
        'O recurso permaneceu íntegro, autêntico e legível ao longo do tempo?',
        'Fixidez, integridade criptográfica, histórico de migrações e emulação de ambiente computacional.',
        'PREMIS 3.0 (Data Dictionary for Preservation Metadata), ISO 14721 (OAIS).',
        'Checksum SHA-256 gerado no momento do depósito do áudio de uma sessão plenária e registro de sua migração de WAV para FLAC.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Conceito, Funções e a Tipologia de Metadados da NISO

Etimologicamente consagrados como "dados sobre dados" ou "informação estruturada sobre uma fonte de informação", os **metadados** são atributos formalmente descritos e codificados que viabilizam a descoberta, identificação, avaliação, gestão, uso, preservação e interoperabilidade de recursos físicos e digitais.

A *National Information Standards Organization* (NISO), em seu relatório de referência *Understanding Metadata* (edição revisada em 2017), categorizou as funções dos metadados no ciclo informacional contemporâneo. O edital nº 1/2026 (item 3.2 do Bloco A) estruturou uma tipologia de seis categorias essenciais:

\`\`\`timeline
1. DESCRITIVOS | O que é o recurso? | Identificação e recuperação temática pelo usuário (Título, Autor, Assunto, Data)
---> Gestão e Infraestrutura
2. ADMINISTRATIVOS | Como o recurso é gerido? | Controle do ciclo de vida, localização e custódia documental
---> Decodificação de Arquivos
3. TÉCNICOS | Quais os parâmetros digitais? | Formato, resolução, amostragem, codec, compressão e software de renderização
---> Navegação Hipertextual
4. ESTRUTURAIS | Como as partes se conectam? | Hierarquia, sequência física de páginas, relação pai-filho e mapas de montagem
---> Segurança e Acesso
5. DE DIREITOS | Quais os limites de uso? | Propriedade intelectual, direitos autorais, licenças Creative Commons e embargos
---> Longevidade Sistêmica
6. DE PRESERVAÇÃO | O recurso permanece autêntico? | Fixidez criptográfica (hashes), histórico de migração e ambiente de emulação
\`\`\`

#### As Seis Dimensões Tipológicas Canônicas:
1. **Metadados Descritivos:** Descrevem o conteúdo intelectual e as características formais para viabilizar a busca, a identificação unívoca, a seleção por relevância e o acesso pelo usuário final. Padrões clássicos: Dublin Core, MARC 21 (campos 1XX, 2XX, 6XX, 7XX) e MODS.
2. **Metadados Administrativos:** Provêm informações indispensáveis para gerenciar um recurso informacional dentro de um acervo ou repositório. Incluem quando e como o objeto foi criado, histórico de tramitação, descarte ou migração de custódia.
3. **Metadados Técnicos:** Documentam as propriedades computacionais, de hardware e de software necessárias para decodificar, processar e exibir adequadamente o arquivo digital. Ex.: taxa de quadros (*frame rate*) de um vídeo da TV Câmara, taxa de amostragem de áudio (44.1 kHz ou 48 kHz), dimensões em pixels e modelo de compressão.
4. **Metadados Estruturais:** Mapeiam os relacionamentos internos e lógicos entre as partes de um objeto complexo. Se um livro foi digitalizado em 500 imagens separadas, são os metadados estruturais (como a seção \`structMap\` do padrão METS) que definem a ordem de leitura (página 1 precede a página 2) e articulam as imagens ao índice de capítulos.
5. **Metadados de Direitos (*Rights Metadata*):** Documentam o regime de direitos autorais, termos de licenciamento, detentores patrimoniais e eventuais restrições de uso, reprodução ou comercialização. Padrões: vocabulários Creative Commons, especificações RightsStatements.org e extensões PREMIS Rights.
6. **Metadados de Preservação:** Registram informações necessárias para assegurar a custódia perene e a preservação digital a longo prazo (conforme o modelo OAIS/ISO 14721). Monitoram a integridade física e lógica (*fixity*), dependências de software e histórico de eventos de migração (padrão PREMIS).

---

### 2. Qualidade e Governança de Metadados

A eficácia de um catálogo informatizado, discovery service ou repositório digital depende intrinsecamente da qualidade dos seus metadados (item 3.3 do Bloco A). Metadados corrompidos, ausentes ou inconsistentes geram "silêncio" (recursos relevantes não recuperados) ou "ruído" (recuperação de falsos positivos).

#### A. As Dimensões da Qualidade de Metadados:
* **Completude (*Completeness*):** Presença de todos os elementos obrigatórios e recomendados definidos pelo perfil de aplicação institucional. A ausência de identificadores ou de termos de assunto empobrece a revocação do sistema.
* **Exatidão (*Accuracy*):** Fidelidade com que o valor atribuído ao elemento reflete a realidade do recurso (ex.: grafia correta do nome do parlamentar, ano exato da promulgação da lei, código ISBN/ISSN verificado).
* **Consistência (*Consistency*):** Uso uniforme de regras de catalogação, formatos padronizados (ex.: datas no padrão ISO 8601 \`AAAA-MM-DD\`) e vocabulários controlados de autoridade ao longo de todo o catálogo.
* **Atualidade (*Timeliness*):** Atualização tempestiva dos metadados quando há alterações no recurso (ex.: mudança na situação de tramitação de um projeto de lei ou incorporação de errata).
* **Conformidade (*Conformance*):** Estrita aderência às regras sintáticas do esquema XML/JSON e às restrições semânticas do perfil adotado.

#### B. Governança de Metadados:
A governança de metadados estabelece:
* A definição formal da política de metadados da instituição;
* A designação do responsável (*metadata steward*) pela manutenção do esquema e dicionário de dados;
* Procedimentos de controle de qualidade automatizado (validação contra XML Schema/JSON Schema) e manual (revisão por bibliotecários catalogadores);
* Gestão de versões e ciclo de atualização dos esquemas e perfis de aplicação.

---

### 3. Perfis de Aplicação (Application Profiles)

O conceito de **Perfil de Aplicação** (*Application Profile*) foi formulado de forma seminal por **Rachel Heery e Manjula Patel (2000)** em artigo clássico na revista *Ariadne* (*Application profiles: mixing and matching metadata schemas*).

\`\`\`timeline
1. ESQUEMAS GLOBAIS | Dublin Core, MARC 21, MIX, PREMIS | Padrões genéricos universais concebidos para interoperabilidade ampla
---> Análise de Domínio
2. SELEÇÃO & MIXAGEM | Princípio do "Mix and Match" | Pinçar elementos de diferentes esquemas existentes para um propósito específico
---> Restrições Locais
3. REGRAS DO PERFIL | Cardinalidade e Vocabulários | Definir campos obrigatórios, repetitividade e vincular tesauros locais
---> Especificação Publicada
4. APLICAÇÃO LOCAL | Perfil Institucional Concluído | Ex.: Perfil BNDigital, Perfil LexML Brasil (sem criar novas tags redundantes!)
\`\`\`

#### Princípios Fundamentais de Heery e Patel (2000):
1. **Reuso de Vocabulários Pré-Existentes:** Um perfil de aplicação não cria novas propriedades ou termos semânticos para conceitos que já possuem definições padronizadas em esquemas globais reconhecidos. Em vez de inventar uma tag \`<autor_da_lei>\`, o perfil reutiliza \`dc:creator\` do Dublin Core.
2. **Mistura de Esquemas (*Mix and Match*):** Combina elementos provenientes de múltiplos esquemas ontológicos distintos para atender aos requisitos de uma comunidade específica (ex.: usar elementos descritivos do Dublin Core, elementos técnicos do NISO MIX e elementos de preservação do PREMIS em um único perfil).
3. **Restrições e Qualificadores Locais:** Define regras sobre cardinalidade (se o campo é obrigatório ou opcional; se é unívoco ou repetitivo), esquemas de codificação e listas controladas de valores (ex.: obrigar que o campo \`dc:subject\` seja preenchido exclusivamente com termos do *Tesauro da Câmara dos Deputados*).
4. **Interoperabilidade Semântica:** Permite que sistemas externos processem os metadados em um nível básico de interoperabilidade (revertendo aos esquemas-base), preservando a riqueza funcional no ambiente local.

---

### 4. Crosswalks: Mapeamento Semântico e Perda de Informação

Um **crosswalk** (mapeamento de metadados) é uma especificação formal que mapeia a correspondência semântica e funcional entre os elementos de dois esquemas de metadados distintos (por exemplo, a tabela de conversão entre o **MARC 21 Bibliográfico** e o **Dublin Core Simples**).

#### A. A Ilusão da "Conversão Sem Perda":
O **CEBRASPE** adora afirmar que crosswalks garantem "conversão simétrica e sem perda informacional". Isso é uma **falácia conceitual**:
* **Diferença de Granularidade:** O MARC 21 possui centenas de campos, subcampos e indicadores ultra-específicos (ex.: campo 100 para autor pessoal, 110 para entidade coletiva, 111 para eventos/congressos, com qualificadores de datas e funções). O Dublin Core Simples possui apenas o elemento \`dc:creator\`. Ao converter de MARC 21 para Dublin Core, há um colapso de granularidade.
* **Assimetria e Perda Semântica (*Semantic Drift*):** A conversão de um esquema rico para um esquema simplificado perde especificidade. A reversão (de Dublin Core de volta para MARC 21) é impossível de ser realizada perfeitamente sem intervenção humana, pois o sistema não tem como inferir se aquele \`dc:creator\` era uma pessoa física (100) ou um órgão público (110).
* **Relações de Mapeamento:** Podem ser de um-para-um (1:1), muitos-para-um (N:1, gerando perda de especificidade), um-para-muitos (1:N, exigindo regras de desambiguação complexas) ou nula (elementos sem equivalente no esquema de destino).

---

### 5. Metadados para Recursos Visuais e Sonoros: Imagem e Audiovisual

O edital nº 1/2026 exige explicitamente os metadados aplicados a **imagem e som** (item 3.5 do Bloco A):

#### A. Imagens Digitais Estáticas: NISO Z39.87 / MIX
* **NISO Z39.87 / MIX (*Data Dictionary – Technical Metadata for Digital Still Images / Metadata for Images in XML*):** Mantido conjuntamente pela NISO e pela *Library of Congress*, é o padrão internacional em XML para documentar metadados técnicos de imagens digitais capturadas por digitalizadores (scanners) ou câmeras digitais.
* **Elementos Típicos do MIX:**
  * Informações do formato básico: MIME type, versão do formato, ordem dos bytes (*byte order*).
  * Informações de captura: modelo e fabricante do scanner, tempo de exposição, abertura, tipo de sensor.
  * Características da imagem: largura, altura, espaço de cores (*color space* — RGB, CMYK, escala de cinza), profundidade de cor (*bit depth* — 8, 16, 24 bits), resolução espacial (DPI/PPI) e método de compressão (sem perdas / TIFF, com perdas / JPEG).
* **Metadados Embutidos (*Embedded Metadata*):**
  * **EXIF (*Exchangeable Image File Format*):** Especificação padrão da indústria de câmeras que grava dados técnicos (data/hora, velocidade do obturador, lente, coordenadas GPS) no cabeçalho dos arquivos JPEG/TIFF.
  * **IPTC / XMP (*Extensible Metadata Platform* da Adobe):** Padrões para embutir metadados descritivos, autoria e direitos diretamente nos arquivos binários.

#### B. Som e Recursos Audiovisuais: PBCore
* **PBCore (*Public Broadcasting Metadata Dictionary Project*):** Desenvolvido pelo setor de radiodifusão pública norte-americano, o PBCore é o esquema de metadados padrão mundial para recursos audiovisuais (som, transmissões de rádio e produções televisivas).
* **Estrutura do PBCore:**
  * \`pbcoreDescriptionDocument\`: Contêiner raiz para a descrição completa de um programa ou recurso audiovisual.
  * \`pbcoreTitle\`, \`pbcoreDescription\`, \`pbcoreCoverage\`: Metadados descritivos de conteúdo.
  * \`pbcoreInstantiation\`: Descreve a manifestação física ou digital concreta da gravação (codec de áudio/vídeo, taxa de bits, taxa de amostragem, número de canais — mono/estéreo/5.1, suporte de mídia física e duração precisa em código de tempo *timecode*).
  * \`pbcoreRightsSummary\`: Informações detalhadas de direitos e termos de retransmissão.
* **Aplicação Legislativa:** No Parlamento, o PBCore é o esquema ideal para catalogar e preservar o monumental acervo sonoro e videográfico da **Rádio Câmara e da TV Câmara** (discursos históricos, sessões de CPI e transmissões plenárias).

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Protocolos de Interoperabilidade e SIGB (sub-6-2):** Uso do Dublin Core na colheita OAI-PMH e em repositórios digitais.
* **Fontes Jurídicas e LexML Brasil (sub-4-3):** Crosswalk de metadados MARC e Dublin Core para o esquema XML do LexML.
`,
  checkpoints: [
    {
      id: 'cp-2-6-1',
      pergunta: 'Micro-Checkpoint 1: Conceito de Perfil de Aplicação (Heery & Patel 2000)',
      item: 'Um perfil de aplicação combina elementos de diferentes esquemas de metadados, adaptados às necessidades de uma comunidade ou sistema.',
      gabarito: 'C',
      justificativa:
        'Certo! Conforme definido classicamente por Rachel Heery e Manjula Patel (2000), um Perfil de Aplicação (Application Profile) reúne e customiza propriedades de esquemas de metadados pré-existentes distintos (mix and match), adaptando-os aos requisitos locais de um domínio sem a declaração desnecessária de novos termos semânticos.',
    },
    {
      id: 'cp-2-6-2',
      pergunta: 'Micro-Checkpoint 2: Crosswalks e Equivalência Semântica',
      item: 'O crosswalk entre dois esquemas de metadados garante a conversão integral e sem perda de informação, dada a equivalência semântica plena de seus elementos.',
      gabarito: 'E',
      justificativa:
        'Errado! O crosswalk constitui um mapeamento aproximado de harmonização semântica. Devido às divergências fundamentais de granularidade e especificidade entre esquemas (como na conversão do complexo MARC 21 para o simplificado Dublin Core), ocorrem inevitáveis perdas de informação (semantic drift) e assimetrias que inviabilizam conversões reversíveis sem perda.',
      versao_correta:
        'O crosswalk entre esquemas de metadados envolve mapeamentos aproximados sujeitos a perdas de informação e alterações de granularidade, inexistindo equivalência semântica plena e universal.',
    },
    {
      id: 'cp-2-6-3',
      pergunta: 'Micro-Checkpoint 3: Tipologia NISO: Metadados Estruturais (Item 3.2)',
      item: 'A indicação da ordem das páginas de um livro digitalizado e da relação entre seus arquivos de imagem constitui exemplo de metadado estrutural.',
      gabarito: 'C',
      justificativa:
        'Certo! Conforme a tipologia da NISO e o edital Cebraspe, metadados estruturais descrevem como os componentes internos de um objeto digital complexo se relacionam e se organizam (como a sequência de fólios de um documento, a relação entre arquivos e o mapa estrutural de páginas), diferindo dos metadados descritivos ou temáticos.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-6-1',
        periodo: '2000',
        disciplina: 'Arquitetura de Metadados e Perfis',
        focoPrincipal: 'Formulação teórica seminal dos Perfis de Aplicação (Application Profiles)',
        figuraChave: 'Rachel Heery e Manjula Patel',
      },
      {
        id: 'tl-2-6-2',
        periodo: '2002 / 2006',
        disciplina: 'Metadados de Imagem Digital',
        focoPrincipal: 'Padrão NISO Z39.87 e esquema XML MIX para imagens digitais estáticas',
        figuraChave: 'NISO e Library of Congress',
      },
      {
        id: 'tl-2-6-3',
        periodo: '2005',
        disciplina: 'Metadados Audiovisuais',
        focoPrincipal: 'Lançamento do padrão PBCore para áudio, som e produções de radiodifusão pública',
        figuraChave: 'PBCore Association',
      },
      {
        id: 'tl-2-6-4',
        periodo: '2017',
        disciplina: 'Padronização Global de Metadados',
        focoPrincipal: 'Publicação revisada do guia Understanding Metadata com a tipologia funcional consolidada',
        figuraChave: 'NISO (National Information Standards Organization)',
      },
    ],
    autores: [
      {
        id: 'aut-2-6-1',
        nome: 'Rachel Heery e Manjula Patel',
        ano: 2000,
        obraPrincipal: 'Application profiles: mixing and matching metadata schemas',
        ideiaChave: 'Perfis de aplicação combinam termos de esquemas existentes sem inventar novas ontologias desnecessárias.',
        chipPegadinha: 'O perfil de aplicação seleciona e restringe; ele não deve criar vocabulários concorrentes.',
      },
      {
        id: 'aut-2-6-2',
        nome: 'NISO (National Information Standards Organization)',
        ano: 2017,
        obraPrincipal: 'Understanding Metadata',
        ideiaChave: 'Tipologia dos metadados articulada por funções de descoberta, administração, tecnologia, estrutura e direitos.',
        chipPegadinha: 'Metadados estruturais não descrevem assunto; descrevem a arquitetura física e lógica interna.',
      },
      {
        id: 'aut-2-6-3',
        nome: 'PBCore Association',
        ano: 2005,
        obraPrincipal: 'Public Broadcasting Metadata Dictionary',
        ideiaChave: 'Padrão ouro para descrição, catalogação e preservação de gravações sonoras e vídeos de radiodifusão.',
        chipPegadinha: 'A classe pbcoreInstantiation descreve as propriedades técnicas e mídias físicas da gravação.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-6-1',
        afirmacao: 'O mapeamento de metadados (crosswalk) entre o formato MARC 21 e o Dublin Core permite a conversão bidirecional perfeitamente simétrica e reversível sem necessidade de validação humana.',
        gabarito: 'E',
        porQue: 'A conversão do MARC 21 (rico e granular) para o Dublin Core (genérico) colapsa múltiplos campos em poucos elementos. Reverter Dublin Core para MARC 21 sem perdas é impossível, pois a especificidade original foi descartada.',
      },
      {
        id: 'peg-2-6-2',
        afirmacao: 'O padrão NISO MIX destina-se primordialmente à gravação de discursos parlamentares em áudio e à indexação de podcasts legislativos.',
        gabarito: 'E',
        porQue: 'O NISO MIX (Z39.87) é voltado exclusivamente para IMAGENS DIGITAIS ESTÁTICAS (fotografias, fólios digitalizados, microfilmes). Para som e audiovisual, o padrão canônico é o PBCore.',
      },
    ],
  },
};
