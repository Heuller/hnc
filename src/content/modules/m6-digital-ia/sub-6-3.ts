import type { ModuloFilho } from '../../../domain/types';

export const submodulo63: ModuloFilho = {
  id: 'sub-6-3',
  numero: '6.3',
  editalRef: 'Bloco E - Item 1.14 e Bloco A - Item 1.8',
  preRequisitos: ["sub-1-5","sub-2-6"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-7-3",
          "titulo": "Preservação de Suportes e Acervos Físicos",
          "motivo": "Políticas integradas de conservação de matrizes e objetos digitais."
      },
      {
          "submoduloId": "sub-14-2",
          "titulo": "Segurança da Informação e Criptografia",
          "motivo": "Fixidez e hashes SHA-256 no dicionário PREMIS."
      }
  ],
  titulo: 'Preservação Digital: OAIS (ISO 14721), Fixidez, Formatos Abertos (ISO) e Estratégias Práticas',
  descricaoCurta: 'Desafios da obsolescência digital, fixidez (checksums SHA-256), estratégias práticas (migração, normalização, emulação, encapsulamento), formatos abertos e normas ISO (PDF/A ISO 19005, TIFF ISO 12639, BWF ITU-R BS.1382, FFV1/MKV, WARC ISO 28500), arquitetura OAIS (ISO 14721), PREMIS 3.0, METS e Rede Cariniana (LOCKSS).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['CCSDS / ISO 14721', 'Miguel Ángel Márdero Arellano', 'Sônia Miguel', 'David Rosenthal', 'NDSA / Library of Congress', 'Luciana Duranti'],
  alertasCebraspe: [
    'O modelo OAIS (Open Archival Information System / ISO 14721) NÃO é um software nem uma ferramenta de computador: é um MODELO CONCEITUAL internacional de referência que define a arquitetura funcional e os requisitos de repositórios digitais confiáveis (RDC-Arq e ISO 16363).',
    'A tríade dos Pacotes de Informação do OAIS: 1. SIP (Submission Information Package - enviado pelo produtor na ingestão); 2. AIP (Archival Information Package - custodiado com metadados exaustivos de preservação, proveniência e integridade); e 3. DIP (Dissemination Information Package - entregue ao usuário na busca, derivado do AIP).',
    'Diferença crucial entre Emulação e Migração: a Migração converte o arquivo digital de um formato obsoleto para um formato contemporâneo (alterando a estrutura binária do arquivo); a Emulação mantém o arquivo binário original estritamente intocado e recria o ambiente original de software e hardware através de um programa emulador em computadores modernos.',
    'A norma ISO 19005 (PDF/A partes 1 a 4) impõe restrições severas: PROÍBE terminantemente código executável (JavaScript), áudio/vídeo embutido executável e criptografia por senha, exigindo a incorporação obrigatória de todas as fontes tipográficas (embedded fonts) e perfis de cor independentes de dispositivo (ICC Device-Independent).',
    'Fixidez (Fixity) não é sinônimo de backup: fixidez consiste na verificação matemática contínua da integridade dos bits de um arquivo mediante o cálculo periódico de funções criptográficas hash (SHA-256 ou MD5), registrando eventos de auditoria no PREMIS para detecção precoce de corrupção silenciosa (bit rot / bit decay).',
    'Backups em discos rígidos ou em nuvem NÃO equivalem a preservação digital de longo prazo: backups combatem unicamente falhas físicas imediatas de perda de dados; não solucionam a obsolescência lógica dos formatos, não monitoram a perda de renderização e não garantem autenticidade jurídica ao longo dos anos.',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Principais Estratégias de Preservação Digital',
    colunas: ['Estratégia de Preservação', 'Mecanismo Operacional', 'Vantagens Principais', 'Limitações e Riscos Críticos', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Refrescamento (*Refreshing*)', 'Cópia periódica dos bits de uma mídia degradada para outra mídia mais nova do mesmo formato', 'Combate a deterioração física do suporte magnético ou óptico', 'Não soluciona a obsolescência lógica dos formatos de arquivo nem dos softwares de leitura', 'Afirmar que o refrescamento converte arquivos DOC em PDF/A (FALSO: quem converte é a Migração).'],
      ['Migração de Formatos', 'Conversão de arquivos de formatos proprietários/obsoletos para novos padrões abertos (ex.: DOC para PDF/A)', 'Garante leitura em softwares contemporâneos sem exigir equipamentos arcaicos', 'Risco de perda cumulativa de formatação, layout, fontes especiais e scripts dinâmicos', 'Dizer que a migração não altera o código binário original (FALSO: o arquivo é transformado).'],
      ['Normalização na Ingestão', 'Conversão padronizada de formatos heterogêneos submetidos (SIP) para formatos canônicos institucionais de preservação (AIP)', 'Padroniza o repositório em um conjunto reduzido e controlado de formatos abertos', 'Exige manter o arquivo SIP original em custódia para garantir rastreabilidade histórica', 'Afirmar que a normalização substitui definitivamente a necessidade de futuras migrações.'],
      ['Emulação (*Emulation*)', 'Recriação do hardware e sistema operacional original por software emulador em máquinas modernas', 'Preserva a integridade e o comportamento original exato mantendo o arquivo binário intocado', 'Depende de alto domínio técnico para desenvolver e manter emuladores de sistemas complexos', 'Afirmar que a emulação converte o arquivo para formatos web modernos (FALSO: mantém o arquivo antigo).'],
      ['Encapsulamento', 'Agrupamento do documento digital com seus metadados descritivos e softwares de leitura em um único pacote contêiner', 'Autossuficiência informativa do pacote preservado (ex.: contêineres BagIt RFC 8493 ou METS)', 'Aumenta significativamente o tamanho em disco e a complexidade de desempacotamento', 'Confundir encapsulamento com descompactação simples de arquivos ZIP comerciais.'],
      ['Preservação de Tecnologia', 'Manutenção física e operacional de computadores, placas e unidades de leitura originais (museu de hardware)', 'Execução no suporte físico original nativo', 'Completamente inviável a longo prazo por ausência de peças sobressalentes e custo exorbitante', 'Achar que manter computadores antigos em funcionamento é a recomendação oficial do OAIS.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Os Desafios e as Três Dimensões da Preservação Digital

Preservar documentos digitais é um desafio radicalmente mais complexo e dinâmico do que a conservação tradicional de livros em papel. Enquanto o papel alcalino sobrevive por séculos em ambientes climaticamente estáveis, **o documento digital pode tornar-se ilegível em poucos anos**, vitimado pela degradação das mídias magnéticas/ópticas e pela **obsolescência tecnológica acelerada** de softwares e formatos (Arellano, 2004; Miguel, 2008):

#### As Três Dimensões da Preservação Digital:
1. **Preservação Física:**
   * Cuida da integridade física dos suportes magnéticos, discos rígidos corporativos, fitas LTO e discos ópticos contra poeira, calor, umidade, descargas eletrostáticas e campos magnéticos.
2. **Preservação Lógica:**
   * Enfrenta a obsolescência de formatos de arquivos e linguagens de codificação. Garante que os fluxos de bits (*bitstreams*) armazenados continuem sendo decodificáveis, interpretáveis e renderizáveis por novos softwares no futuro.
3. **Preservação Intelectual:**
   * Garante a **autenticidade, integridade, fidedignidade e proveniência** do documento digital ao longo de sucessivas migrações e transferências de custódia.
   * Assegura que o documento não sofreu adulterações fraudulentas ou corrupções acidentais, mantendo sua validade jurídica e probatória (projeto InterPARES / Luciana Duranti).

> [!CAUTION]
> **Pegadinha Clássica do Cebraspe:** A banca afirma que "a realização sistemática de rotinas de backup garante a preservação digital de longo prazo dos documentos de uma biblioteca". **ERRADO!** O backup é mera cópia física de segurança para recuperação de curto prazo em caso de desastre operacional. Ele não resolve a obsolescência de formatos nem registra metadados de proveniência e autenticidade.

---

### 2. Fixidez (*Fixity*) e Auditoria de Integridade Digital

A preservação digital no nível de bits (*bit-level preservation*) depende do princípio da **Fixidez (*Fixity*)**:

* **Conceito:** Propriedade de um objeto digital permanecer exatamente inalterado ao longo do tempo, livre de corrupções acidentais, degradação física silenciosa das mídias magnéticas/ópticas (*bit rot* ou *bit decay*) ou manipulações maliciosas.
* **Mecanismo Criptográfico de Checksum:**
  * No momento da ingestão do documento no repositório, calcula-se o resumo criptográfico do fluxo de bits através de algoritmos matemáticos unívocos e irreversíveis, prioritariamente **SHA-256** (padrão FIPS 180-4) e subsidiariamente **MD5** (RFC 1321).
  * O menor bit alterado no arquivo (por exemplo, a troca de um único caractere ou corrupção de cabeçalho) produz um *hash* completamente díspar (efeito avalanche).
* **Auditoria Contínua e Registro PREMIS:**
  * Repositórios digitais confiáveis (RDC-Arq e ISO 16363) programam rotinas automatizadas e periódicas de varredura (*checksum scrubbing*). O repositório recalcula o hash de cada arquivo custodiado e o compara com o hash canônico registrado na entidade *Object/Fixity* do PREMIS.
  * Se houver divergência, o repositório aciona a autocura (*self-healing*), recuperando a réplica autêntica e íntegra de um nó geograficamente distribuído (como na infraestrutura LOCKSS da Rede Cariniana/IBICT).

---

### 3. Estratégias Práticas de Preservação Digital

O planejamento da preservação exige a escolha ponderada da estratégia técnica adequada ao tipo de acervo:

\`\`\`tree
TITLE: Estratégias de Preservação Digital (Arellano, Rosenthal, NDSA)
- Estratégias a Nível de Bits (Físicas)
  - Refrescamento (Refreshing) | Transferência periódica de bits para mídias físicas modernas sem alterar o formato
  - Redundância Geográfica e Auditoria | Cópias múltiplas e descentralizadas com checagem de fixidez (LOCKSS/Cariniana)
- Estratégias Lógicas e Estruturais
  - Migração de Formatos | Conversão de arquivos de formatos obsoletos para novos padrões contemporâneos
  - Normalização na Ingestão | Conversão padronizada de arquivos SIP para formatos abertos canônicos no AIP
  - Encapsulamento | Reunião de arquivo, metadados de representação e decodificadores em pacote autocontido
- Estratégias Comportamentais e de Ambiente
  - Emulação | Recriação virtual do sistema operacional e hardware legados sem tocar no código binário
  - Preservação de Tecnologia | Manutenção de equipamentos e placas originais em museu de hardware (inviável a longo prazo)
\`\`\`

#### Quando Utilizar Cada Estratégia:
1. **Normalização na Ingestão:** Indicada para **repositórios institucionais e bibliotecas digitais ativas**. Quando um autor submete um texto em formato proprietário (ex.: DOCX), o repositório preserva o arquivo original de submissão e gera automaticamente uma versão normalizada em padrão aberto (ex.: PDF/A-1a ou PDF/A-2), simplificando a gestão de formatos a longo prazo.
2. **Migração Periódica:** Indicada para **grandes coleções documentais de texto, imagem e som**. Requer monitoramento permanente do mercado (*Preservation Planning* no OAIS). Quando um formato dá sinais de obsolescência, realiza-se a conversão em lote para um formato substituto, registrando os metadados de evento de migração no PREMIS.
3. **Emulação:** Indicada para **obras digitais complexas, bases de dados relacionais arcaicas, softwares educativos e produções multimídia interativas**. Nesses casos, a migração destruiria a experiência e o código do software. A emulação preserva o arquivo binário original estritamente intocado e emula a máquina virtual em computadores modernos.
4. **Encapsulamento:** Utilizado na geração dos pacotes **AIP (Archival Information Package)** e em contêineres como **BagIt (IETF RFC 8493)** e **WARC (ISO 28500)**, garantindo que o objeto digital viaje sempre acoplado aos seus metadados de preservação.

---

### 4. Formatos Abertos de Preservação e Normas ISO

A preservação digital sustentável exige a adoção estrita de **formatos abertos, públicos, não proprietários e padronizados internacionalmente**:

#### A. Documentos Textuais: O Padrão PDF/A (ISO 19005)
O **Portable Document Format for Archiving (PDF/A)** é a família de normas ISO que padroniza o PDF para arquivamento de longo prazo:
* **ISO 19005-1:2005 (PDF/A-1):** Baseado no PDF 1.4. Possui dois níveis de conformidade:
  * *PDF/A-1a (Acessível):* Exige estrutura lógica completa (tags estruturais, ordem de leitura semântica e suporte a leitores de tela para acessibilidade).
  * *PDF/A-1b (Básico):* Garante unicamente a preservação visual e gráfica do leiaute da página.
* **ISO 19005-2:2011 (PDF/A-2):** Baseado na norma PDF 1.7 (ISO 32000-1). Introduz suporte a compressão de imagens em JPEG 2000, transparências gráficas, camadas (*layers*) e possibilidade de embutir anexos que também sejam conformes ao PDF/A.
* **ISO 19005-3:2012 (PDF/A-3):** Permite a incorporação de **qualquer formato de arquivo como anexo** dentro do PDF/A (inclusive arquivos XML, planilhas brutas CSV ou arquivos CAD), sendo muito utilizado em faturamento eletrônico e relatórios parlamentares que anexam dados de pesquisa.
* **ISO 19005-4:2020 (PDF/A-4):** Baseado no PDF 2.0 (ISO 32000-2). Simplifica os perfis para 4 (geral), 4e (para engenharia) e 4f (permite anexos em qualquer formato).
* **Vedações Estritas do PDF/A (O que é PROIBIDO no PDF/A):**
  1. *Proibição Absoluta de Código Executável e Scripts:* Códigos em JavaScript são proibidos porque softwares futuros podem não interpretar o interpretador de script ou sofrer brechas de segurança.
  2. *Proibição de Áudio e Vídeo Dinâmicos Embutidos:* Conteúdos multimídia dependem de codecs externos que se tornam obsoletos.
  3. *Proibição de Proteção por Senha e Criptografia:* Arquivos cifrados não podem ser auditados por repositórios nem recuperados se a chave for perdida no tempo.
  4. *Incorporação Mandatória de Todas as Fontes Tipográficas (*Embedded Fonts*):* Todas as fontes utilizadas devem vir 100% embutidas no arquivo, impedindo que o documento seja renderizado com fontes genéricas substitutas.
  5. *Perfis de Cor Independentes de Dispositivo:* Uso obrigatório de perfis ICC para que as cores sejam visualizadas de forma idêntica em qualquer monitor ou impressora futura.

#### B. Imagens Estáticas: TIFF, PNG e JPEG 2000
* **TIFF (Tagged Image File Format):** Padronizado pela ISO 12639:2004 (TIFF/IT) e pela especificação Adobe 6.0. É o formato matriz (*master*) inconteste para digitalização de acervos históricos em bibliotecas e arquivos. Armazenado sem compressão (*uncompressed*) ou com compressão sem perdas (*lossless* LZW), garantindo máxima fidelidade aos detalhes do original.
* **PNG (Portable Network Graphics):** Homologado pela norma **ISO/IEC 15948:2004**. Formato aberto com compressão sem perdas (*lossless*), substituto aberto e livre de patentes do formato GIF.
* **JPEG 2000:** Norma **ISO/IEC 15444-1**. Suporta compressão matemática por *wavelets* sem perdas (*lossless*), gerando matrizes de altíssima qualidade com arquivos substancialmente mais compactos que o TIFF.

#### C. Áudio: Broadcast WAVE Format (BWF / WAV)
* **BWF (Broadcast WAVE Format):** Padronizado pela recomendação **ITU-R BS.1382** e especificação **EBU Tech 3285**, adotado como padrão mundial pelas diretrizes **IASA-TC 04** (International Association of Sound and Audiovisual Archives).
* Baseia-se em áudio linear não comprimido (Linear PCM), gravado tipicamente em **96 kHz / 24-bit** (para matrizes históricas) ou **48 kHz / 24-bit**.
* Contém o bloco estrutural de metadados *Broadcast Audio Extension Chunk* (\`bext\`), que armazena metadados descritivos, data/hora da gravação, operador e histórico de codificação dentro do cabeçalho do próprio arquivo de áudio.

#### D. Vídeo: FFV1 em Matroska (MKV) e Motion JPEG 2000
* **FFV1 / Matroska (MKV):** Padronizado pela **IETF RFC 9043 (FFV1)** e **IETF RFC 8428 / RFC 9559 (Matroska)**. É o padrão aberto moderno recomendado para preservação de fitas de vídeo analógicas digitalizadas (ex.: gravações históricas de sessões plenárias e audiências públicas da TV Câmara).
* Oferece compressão de vídeo 100% sem perdas (*lossless*), com checagem de integridade interna por CRC em cada quadro (*frame*), reduzindo em mais de 50% o tamanho em disco comparado a vídeos não comprimidos brutos.

#### E. Web e Redes Sociais: Padrão WARC (ISO 28500)
* **WARC (Web ARChive file format):** Norma **ISO 28500:2017**. Especifica o formato padrão para armazenamento e preservação de coletas web (*web crawling*), preservando as requisições HTTP, cabeçalhos, respostas dos servidores e metadados de contexto de páginas e redes sociais institucionais.

---

### 5. Matriz de Decisão Arquitetural de Preservação

| Categoria Documental | Formato Matriz (AIP - Preservação) | Formato de Difusão (DIP - Acesso) | Estratégia de Preservação | Norma / Padrão Internacional |
|---|---|---|---|---|
| **Textos e Livros Raros** | TIFF sem compressão + PDF/A-1a | PDF otimizado para web / EPUB | Normalização + Fixidez SHA-256 | ISO 19005-1 (PDF/A) / ISO 12639 (TIFF) |
| **Proposições Legislativas e Atos** | PDF/A-2 ou PDF/A-3 + XML nativo | HTML responsivo / PDF leve | Normalização na ingestão | ISO 19005-2/3 e W3C XML |
| **Mapas, Gravuras e Fotografias** | TIFF não comprimido (16-bit) | JPEG de alta qualidade / WebP | Fixidez contínua + Migração | ISO 12639 (TIFF) / ISO/IEC 15444 (JPEG 2000) |
| **Gravações Sonoras e Discursos** | BWF / WAV (96 kHz / 24-bit PCM) | MP3 / AAC comprimido (320 kbps) | Refrescamento + Fixidez | ITU-R BS.1382 / EBU Tech 3285 (BWF) |
| **Sessões Plenárias em Vídeo** | FFV1 codec em contêiner MKV | MP4 (codec H.264 / AAC) | Normalização + Fixidez contínua | IETF RFC 9043 (FFV1) / ISO 14721 |
| **Portais Web e Mídias Sociais** | Arquivo WARC com metadados | Visualização via Wayback Machine | Encapsulamento de requisições | ISO 28500:2017 (WARC) |

---

### 6. Caso Concreto Aplicado: O Acervo Histórico da Câmara dos Deputados

Na **Biblioteca Pedro Aleixo** e no **Centro de Documentação e Informação (Cedi)** da Câmara dos Deputados:
1. **Digitalização de Anais e Diários Históricos:** Os volumes encadernados do século XIX e XX são digitalizados em scanners planetários gerando imagens matrizes em **TIFF descompactado a 600 DPI (ISO 12639)**.
2. **Geração do AIP e Normalização:** O arquivo TIFF é processado por OCR/HTR para geração de camada de texto pesquisável e convertido em **PDF/A-1a (ISO 19005-1)** com metadados estruturais em **METS** e dados de proveniência e fixidez (*hash* SHA-256) em **PREMIS 3.0**.
3. **Distribuição em Rede Confiável:** Os AIPs gerados são replicados para nós geograficamente distribuídos da **Rede Cariniana (IBICT)** sob a arquitetura **LOCKSS**, garantindo auditoria cruzada contínua de integridade.
4. **Disseminação (DIP):** Para o usuário externo do portal da Câmara, o repositório entrega pacotes leves em PDF comprimido com marcas d'água de procedência gerados sob demanda pelo módulo de Acesso do OAIS.

---

### 7. O Modelo de Referência OAIS (ISO 14721) e Padrões PREMIS / METS

\`\`\`timeline
PROD | Produtor (Producer) | Ambiente Externo | Submete os objetos digitais originais encapsulados no pacote de submissão (SIP)
---> Ingestão (Ingest) no Repositório
ING | Módulo de Ingestão | Validação e Conversão | Valida integridade (checksum SHA-256), extrai metadados e empacota o pacote de arquivamento (AIP)
---> Armazenamento Arquivístico (Archival Storage)
STORE | Armazenamento & Gestão de Dados | Custódia Segura Permanente | Guarda os AIPs com redundância física e gerencia metadados sob vigilância do Planejamento da Preservação
---> Solicitação de Consulta
ACC | Módulo de Acesso (Access) | Transformação em DIP | Recebe requisições de busca, descompacta os AIPs e gera o pacote de disseminação (DIP)
---> Entrega Final
CONS | Consumidor / Comunidade-Alvo | Usuário Final | Recebe o DIP customizado com garantia de inteligibilidade, proveniência e autenticidade
\`\`\`

#### A. A Tríade de Pacotes de Informação (*Information Packages*)
* **SIP (*Submission Information Package*):** Pacote de submissão elaborado pelo autor/produtor, contendo o documento bruto e metadados preliminares.
* **AIP (*Archival Information Package*):** O pacote nuclear da preservação. Reúne o objeto digital acompanhado de sua **Informação de Representação** (como decodificar os bits) e de sua **Informação de Preservação e Descrição (PDI)**: Proveniência, Contexto, Referência, Fixidez (*checksum* SHA-256) e Direitos de Acesso.
* **DIP (*Dissemination Information Package*):** Pacote leve e otimizado gerado a partir do AIP quando o usuário solicita o download na interface web (ex.: versão PDF compactada gerada a partir de arquivos TIFF matrizes pesados).

#### B. Padrão PREMIS (Preservation Metadata: Implementation Strategies)
Coordenado pela Library of Congress, estrutura-se em 5 entidades:
1. **Objetos (*Objects*):** Arquivos, representações ou fluxos de bits (*bitstreams*).
2. **Eventos (*Events*):** Ações que afetam o objeto (ingestão, migração, validação de fixidez).
3. **Agentes (*Agents*):** Pessoas ou softwares que executam os eventos.
4. **Direitos (*Rights*):** Permissões legais e licenças de acesso e preservação.
5. **Ambientes (*Environments*):** Especificações de hardware e software necessárias para renderizar os objetos.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Preservação de Suportes e Acervos Físicos (sub-7-3):** Políticas integradas de conservação de matrizes e objetos digitais.
* **Segurança da Informação e Criptografia (sub-14-2):** Fixidez e hashes SHA-256 no dicionário PREMIS.
`,
  checkpoints: [
    {
      id: 'cp-6-3-1',
      pergunta: 'Micro-Checkpoint 1: O Modelo de Referência OAIS',
      item: 'O modelo de referência OAIS (Open Archival Information System), formalizado pela norma ISO 14721, estabelece as bases conceituais para a arquitetura de repositórios digitais confiáveis, estruturando o fluxo documental nos pacotes SIP, AIP e DIP.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme a norma internacional ISO 14721 (CCSDS), o modelo de referência OAIS define a arquitetura funcional de repositórios digitais confiáveis e estrutura o ciclo documental nos pacotes SIP (submissão), AIP (arquivamento de longo prazo com metadados exaustivos de preservação) e DIP (disseminação ao usuário final).',
    },
    {
      id: 'cp-6-3-2',
      pergunta: 'Micro-Checkpoint 2: Formatos de Preservação e a Norma ISO 19005 (PDF/A)',
      item: 'O padrão PDF/A, homologado pela norma ISO 19005, permite a inclusão de códigos executáveis em JavaScript e áudios dinâmicos embutidos, bem como a proteção por criptografia com senha, com o objetivo de assegurar maior interatividade e confidencialidade aos documentos arquivados.',
      gabarito: 'E',
      justificativa: 'Errado! A norma ISO 19005 (partes 1 a 4) veda expressamente o uso de códigos executáveis em JavaScript, arquivos executáveis externos, conteúdos em áudio e vídeo dinâmicos e proteção por senha/criptografia em arquivos PDF/A, pois tais recursos impedem a renderização independente e a preservação digital autônoma a longo prazo.',
    },
    {
      id: 'cp-6-3-3',
      pergunta: 'Micro-Checkpoint 3: Emulação, Migração e Fixidez Digital',
      item: 'Diferentemente da migração de formatos, a estratégia de emulação altera o código binário interno do documento digital para torná-lo compatível com os novos sistemas operacionais vigentes no mercado.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme a literatura clássica de preservação digital (Arellano, 2004; Rosenthal, 2005) e o padrão PREMIS, quem altera a estrutura binária do arquivo é a MIGRAÇÃO. A emulação preserva o arquivo binário estritamente intocado e recria o ambiente computacional original por meio de um software emulador.',
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
        periodo: '2005 / 2020',
        disciplina: 'Normas ISO de Preservação',
        focoPrincipal: 'Homologação do padrão PDF/A (ISO 19005 partes 1 a 4), TIFF (ISO 12639) e WARC (ISO 28500)',
        figuraChave: 'ISO / Library of Congress',
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
        afirmacao: 'O formato PDF/A permite senhas de criptografia e códigos executáveis em JavaScript para garantir confidencialidade e dinamismo aos arquivos arquivados.',
        gabarito: 'E',
        porQue: 'A norma ISO 19005 veda terminantemente senhas de criptografia, JavaScript e áudio/vídeo executáveis para assegurar renderização perene e independente.',
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

