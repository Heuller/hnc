import type { TemaDiscursiva } from './types';

export const TEMAS_OFICIAIS_DISCURSIVA: TemaDiscursiva[] = [
  {
    id: 'tema-desbastamento-vergueiro',
    tipo: 'questao_20',
    titulo: 'Desbastamento e Descarte de Coleções Parlamentares',
    enunciado:
      'Considerando que a gestão e o desenvolvimento de coleções constituem processos contínuos e cíclicos nas unidades de informação, redija um texto dissertativo, de até 20 linhas, atendendo necessariamente ao que se pede: 1. Diferencie conceitualmente desbastamento (desbaste) de descarte segundo a literatura canônica (Waldomiro Vergueiro); 2. Indique critérios objetivos técnicos que fundamentam a seleção de materiais para desbaste; 3. Discorra sobre as destinações técnicas recomendadas para os materiais descartados no âmbito da administração pública e a salvaguarda da memória institucional legislativa.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve conceituar desbastamento como a retirada física temporária ou definitiva de documentos de baixa frequência de uso para depósitos secundários ou outro suporte, sem perda patrimonial. Diferenciar de descarte, que é a eliminação ou alienação definitiva de itens obsoletos ou irrecuperáveis do patrimônio da biblioteca, respeitando normativos de bens públicos e preservação da memória legislativa da Câmara.',
    criteriosPontuacao: [
      {
        item: '1. Diferenciação Conceitual entre Desbaste e Descarte (Vergueiro)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu claramente desbaste (transferência de suporte/local sem exclusão patrimonial) e descarte (eliminação patrimonial definitiva).',
      },
      {
        item: '2. Critérios Objetivos Técnicos de Seleção para Desbastamento',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou critérios válidos (frequência de uso, pertinência temática ao parlamento, obsolescência temporal e estado físico).',
      },
      {
        item: '3. Destinação dos Materiais Descartados e Memória Institucional',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Discorreu sobre descarte legal (doação, reciclagem e incineração restrita), resguardando obras raras e documentos parlamentares históricos.',
      },
    ],
  },
  {
    id: 'tema-rda-lrm-camara',
    tipo: 'questao_20',
    titulo: 'Catalogação com RDA e Modelo Conceitual IFLA LRM',
    enunciado:
      'A transição dos padrões tradicionais de representação descritiva (como o AACR2) para as normas modernas alinhadas ao Resource Description and Access (RDA) e ao modelo conceitual IFLA LRM reflete a necessidade de adequação aos dados abertos e à web semântica. Em até 20 linhas: 1. Explique como o IFLA LRM consolidou os modelos da família FR (FRBR, FRAD, FRSAD); 2. Defina sucintamente as entidades do nível WEMI (Obra, Expressão, Manifestação e Item) no escopo do RDA; 3. Discorra sobre como o RDA otimiza a recuperação e interoperabilidade de proposições e atos legislativos da Câmara dos Deputados.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve explicar que o IFLA LRM consolidou e refinou os modelos da família FR (FRBR, FRAD, FRSAD) em um modelo de referência unificado de alto nível. Deve definir a cadeia WEMI: Obra (conceito intelectual abstrato), Expressão (realização linguística ou formal da obra), Manifestação (corporificação física ou digital da expressão) e Item (exemplar concreto possuído pela biblioteca). Por fim, deve correlacionar com a Câmara dos Deputados: o RDA facilita o rastreamento de projetos de lei em suas diversas redações (Expressões) e edições publicadas no Diário da Câmara (Manifestações), potencializando o uso de Linked Open Data e interoperabilidade via URN LexML.',
    criteriosPontuacao: [
      {
        item: '1. Evolução da Família FRBR para o IFLA LRM',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Mencionou a convergência e unificação conceitual dos modelos funcionais em um modelo de dados relacional e abstrato consistente.',
      },
      {
        item: '2. Entidades do Nível WEMI no RDA',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu com precisão analítica as quatro entidades do grupo WEMI (Obra, Expressão, Manifestação, Item) e suas inter-relações hierárquicas.',
      },
      {
        item: '3. Interoperabilidade e Dados Conectados na Atividade Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Demonstrou como o RDA amplia a descoberta semântica de atos legislativos, versões de proposições e conexão com outros órgãos governamentais.',
      },
    ],
  },
  {
    id: 'tema-lai-acesso-informacao',
    tipo: 'questao_20',
    titulo: 'Acesso à Informação Pública e Transparência Passiva/Ativa',
    enunciado:
      'A Lei n.º 12.527/2011 (Lei de Acesso à Informação - LAI) estabelece diretrizes fundamentais para o fornecimento de informações pelo poder público. Redija um texto de até 20 linhas que aborde: 1. A distinção entre transparência ativa e transparência passiva no contexto da Câmara dos Deputados; 2. Os prazos e procedimentos legais para resposta ao cidadão quando a informação não estiver disponível imediatamente; 3. O papel do profissional bibliotecário como mediador na classificação de sigilo e na promoção de dados abertos governamentais.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve expor que transparência ativa é a divulgação proativa de dados de interesse coletivo independentemente de solicitação (Portal da Câmara, proposições, despesas), enquanto a transparência passiva atende a pedidos específicos de cidadãos via Serviço de Informação ao Cidadão (SIC). O prazo geral de resposta imediata ou, não sendo possível, em até 20 dias, prorrogáveis por mais 10 mediante justificativa. O bibliotecário atua na catalogação e organização de metadados dos repositórios de dados abertos, garantindo formatos abertos, não proprietários e legíveis por máquina, além de zelar para que o sigilo seja tratado como exceção estrita da lei.',
    criteriosPontuacao: [
      {
        item: '1. Distinção entre Transparência Ativa e Passiva',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Explicou que transparência ativa decorre de obrigação legal de publicação de ofício, enquanto passiva decorre de demanda formulada via SIC.',
      },
      {
        item: '2. Prazos e Rito de Resposta da LAI',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Citou o prazo de 20 dias corridos prorrogável por mais 10 dias com justificativa expressa.',
      },
      {
        item: '3. Mediação Biblioteconômica e Dados Abertos',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Evidenciou o papel técnico na padronização semântica, formatos abertos (CSV, XML, JSON) e tratamento do sigilo como estrita exceção.',
      },
    ],
  },
  {
    id: 'tema-oais-memoria-camara',
    tipo: 'peca_50',
    titulo: 'Projeto de Repositório Institucional Digital em Conformidade com o Modelo OAIS',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário designado para liderar o grupo de trabalho de modernização da memória documental da Câmara dos Deputados, elabore uma PEÇA TÉCNICA (projeto de parecer com plano de implantação), de até 50 linhas, estruturada conforme as normas da redação oficial. Sua peça deve contemplar obrigatoriamente: 1. Diagnóstico da transição documental física para o ambiente digital e riscos de obsolescência tecnológica; 2. Arquitetura do repositório baseada no modelo OAIS (Open Archival Information System), detalhando o ciclo de vida dos pacotes de submissão (SIP), arquivamento (AIP) e disseminação (DIP); 3. Estratégias de preservação digital de longo prazo (emulação, migração e níveis de preservação NDSA); 4. Requisitos de metadados para preservação e acesso (PREMIS e Dublin Core); 5. Diretrizes para integração do acervo com a consulta pública dos cidadãos e pesquisadores parlamentares.',
    limiteLinhas: 50,
    padraoRespostaPreliminar:
      'A peça técnica deve apresentar estrutura formal sóbria (Introdução/Diagnóstico, Fundamentação Técnica, Proposta Metodológica, Requisitos de Preservação e Conclusão/Encaminhamento). No diagnóstico, elencar a fragilidade dos suportes magnéticos/ópticos e a rápida obsolescência de formatos proprietários. Na arquitetura OAIS (ISO 14721), detalhar o fluxo: Produtor gera SIP (Submission Information Package), a unidade gerencia e preserva o AIP (Archival Information Package) com metadados estruturados de proveniência (PREMIS), e disponibiliza o DIP (Dissemination Information Package) no formato PDF/A ou web amigável. Detalhar as estratégias de preservação: migração periódica de formatos (evitando aprisionamento tecnológico) e emulação de sistemas legados. Enfatizar a aplicação dos metadados descritivos Dublin Core e de preservação PREMIS. Na conclusão, recomendar a publicação sob licença aberta com integração URN LexML.',
    criteriosPontuacao: [
      {
        item: '1. Diagnóstico e Adequação Estrutural da Peça Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Estruturou a peça como documento técnico formal com linguagem culta, impessoal e diagnóstico claro da obsolescência digital.',
      },
      {
        item: '2. Arquitetura do Modelo OAIS (SIP, AIP, DIP)',
        pontuacaoMaxima: 7.0,
        descricaoEsperada:
          'Definiu e correlacionou corretamente as entidades de informação SIP (entrada), AIP (preservação mestra) e DIP (acesso público).',
      },
      {
        item: '3. Estratégias de Preservação Digital (Migração, Emulação, NDSA)',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Abordou com exatidão as estratégias técnicas de migração de formatos, checagem de fixidez (checksum) e preservação multinível.',
      },
      {
        item: '4. Esquemas de Metadados PREMIS e Dublin Core',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Diferenciou a função de metadados de preservação (PREMIS - eventos, direitos, agentes) e de descrição de acesso (Dublin Core).',
      },
      {
        item: '5. Integração com Pesquisa Cidadã e Acesso Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou soluções para busca federada, identificadores persistentes e atendimento aos princípios da LAI e transparência institucional.',
      },
    ],
  },
  {
    id: 'tema-governanca-dados-legislativa',
    tipo: 'questao_20',
    titulo: 'Política de Governança de Dados em Biblioteca Legislativa',
    enunciado:
      'Considerando o papel estratégico dos dados na gestão da informação pública, redija um texto dissertativo, de até 20 linhas, atendendo necessariamente ao que se pede: 1. Defina o papel nuclear da Governança de Dados segundo o DAMA-DMBOK2 no contexto de uma biblioteca parlamentar; 2. Diferencie analiticamente as atribuições do Data Owner (proprietário), Data Steward (curador funcional) e Data Custodian (custodiante de TI); 3. Indique as dimensões essenciais de qualidade de dados (DAMA/Wang & Strong) aplicáveis aos metadados bibliográficos e proposições legislativas.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve conceituar Governança de Dados com base no DAMA-DMBOK2 como o exercício de autoridade e controle sobre o gerenciamento dos ativos de dados, posicionada no centro da DAMA Wheel articulando as demais funções. Diferenciar os papéis: Data Owner é o decisor estratégico de negócio responsável por políticas e autorizações; Data Steward é o bibliotecário/curador funcional que zela pela qualidade, padronização de vocabulários e regras semânticas dos metadados; Data Custodian é a equipe de TI responsável pela infraestrutura técnica, armazenamento e segurança física/lógica. Indicar dimensões de qualidade (acurácia, completude, consistência, validade, pontualidade e integridade), essenciais para subsidiar o processo legislativo e a transparência pública.',
    criteriosPontuacao: [
      {
        item: '1. Conceito e Função Nuclear da Governança de Dados (DAMA-DMBOK2)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu Governança de Dados como autoridade e controle sobre ativos de dados no núcleo articulador do DMBOK.',
      },
      {
        item: '2. Diferenciação dos Papéis DAMA (Owner, Steward e Custodian)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Diferenciou com exatidão o Data Owner (decisão estratégica), Data Steward (curador de metadados e regras de negócio) e Data Custodian (infraestrutura de TI).',
      },
      {
        item: '3. Dimensões de Qualidade de Dados Aplicadas ao Legislativo',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou dimensões canônicas (acurácia, completude, consistência, validade) vinculadas a metadados e transparência parlamentar.',
      },
    ],
  },
  {
    id: 'tema-migracao-marc-bibframe',
    tipo: 'questao_20',
    titulo: 'Transição do Formato MARC 21 para BIBFRAME e Linked Data',
    enunciado:
      'A evolução da catalogação bibliográfica impõe a superação dos formatos legados isolados em direção à interoperabilidade na Web Semântica. Em até 20 linhas: 1. Aponte as limitações estruturais do formato MARC 21 frente aos requisitos da Web Semântica; 2. Apresente as três classes fundamentais do modelo conceitual BIBFRAME 2.0 (Work, Instance e Item) da Library of Congress; 3. Discorra sobre como o modelo RDF e o uso de URIs permitem converter catálogos de bibliotecas parlamentares em grafos de conhecimento conectados (Linked Open Data).',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve apontar que o MARC 21 foi concebido para automação de fichas impressas nos anos 1960, possuindo estrutura rígida de campos numéricos (tags/subcampos) ilegíveis para motores de busca da web, gerando silos fechados de informação. No BIBFRAME 2.0 (Library of Congress), as três classes nucleares são: Work (Obra - essência conceitual e conteúdo intelectual), Instance (Instância - publicação material ou digital da obra) e Item (Item concreto e exemplar físico custodiado). No RDF, as informações estruturam-se em triplas (Sujeito-Predicado-Objeto) identificadas por URIs universais, permitindo que os registros da Biblioteca Pedro Aleixo sejam linkados a ontologias mundiais, ao LexML e a outras bases semânticas abertas.',
    criteriosPontuacao: [
      {
        item: '1. Limitações Estruturais do MARC 21 na Web',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Demonstrou a obsolescência da estrutura isolada do MARC 21 frente aos motores de busca e grafos da Web Semântica.',
      },
      {
        item: '2. As Três Classes do BIBFRAME 2.0 (Work, Instance, Item)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Definiu e caracterizou com clareza as três entidades nucleares do BIBFRAME 2.0 padronizado pela Library of Congress.',
      },
      {
        item: '3. RDF, URIs e Grafos de Conhecimento na Biblioteca Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Explicou a mecânica das triplas RDF, o uso de URIs persistentes e o papel do Linked Open Data para integração com LexML e portais públicos.',
      },
    ],
  },
  {
    id: 'tema-rag-referencia-legislativa',
    tipo: 'questao_20',
    titulo: 'Uso de RAG (Retrieval-Augmented Generation) no Serviço de Referência Legislativa',
    enunciado:
      'A incorporação de modelos de inteligência artificial generativa em unidades de informação parlamentares exige rigor técnico e salvaguardas metodológicas. Redija um texto de até 20 linhas que aborde: 1. A arquitetura e o funcionamento técnico de sistemas de Geração Aumentada por Recuperação (RAG - Retrieval-Augmented Generation); 2. Os riscos informacionais críticos em tarefas de referência parlamentar (alucinações algorítmicas, viés de representatividade e tratamento de dados pessoais conforme a LGPD); 3. O papel do bibliotecário e os mecanismos de supervisão profissional (human-in-the-loop, groundedness e vocabulários controlados).',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve explicar que o RAG (Lewis et al., 2020) ancora as respostas de modelos de linguagem (LLMs) em bases de conhecimento proprietárias confiáveis: o sistema converte a pergunta do usuário e os documentos em embeddings vetoriais, recupera trechos documentais faticamente relevantes via busca por similaridade semântica e os envia ao modelo junto ao prompt gerador. Riscos críticos: alucinações (respostas inverídicas sem lastro), viés na amostragem dos corpora e risco de vazamento de dados protegidos pelo sigilo parlamentar ou LGPD em prompts. Papel biblioteconômico: curadoria dos corpora, auditoria de fundamentação em fonte (groundedness), indexação por vocabulários controlados e supervisão mandatória humana (human-in-the-loop) para homologação de respostas formais.',
    criteriosPontuacao: [
      {
        item: '1. Funcionamento Técnico e Arquitetura do RAG',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Explicou a integração entre recuperação de evidências documentais ancoradas em vetores e a geração orientada de respostas por LLMs.',
      },
      {
        item: '2. Riscos Informacionais, Éticos e de Conformidade com a LGPD',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Identificou alucinações, viés algorítmico e riscos de privacidade e segurança da informação em consultas legislativas.',
      },
      {
        item: '3. Mediação Biblioteconômica, Vocabulários e Human-in-the-Loop',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Destacou a supervisão profissional humana necessária, auditoria de groundedness e indexação controlada do acervo de referência.',
      },
    ],
  },
  {
    id: 'tema-dados-abertos-bibliograficos',
    tipo: 'questao_20',
    titulo: 'Política de Dados Abertos Governamentais e Catálogos Bibliográficos',
    enunciado:
      'A abertura de dados governamentais constitui exigência legal de transparência e cidadania no Estado Democrático de Direito. Em até 20 linhas: 1. Apresente o fundamento legal da abertura de dados no Brasil (Lei nº 12.527/2011, art. 8º, § 3º e Decreto nº 8.777/2016); 2. Enuncie os princípios centrais de dados abertos governamentais (completude, primariedade, formatos abertos não proprietários e legibilidade por máquina); 3. Explique a aplicação da escala de 5 estrelas de Tim Berners-Lee na disponibilização de acervos bibliográficos e proposições da Câmara dos Deputados.',
    limiteLinhas: 20,
    padraoRespostaPreliminar:
      'O candidato deve fundamentar a política na Lei de Acesso à Informação (art. 8º, § 3º) e no Decreto Federal nº 8.777/2016, que institui a Política de Dados Abertos do Poder Executivo Federal, balizando também as boas práticas do Legislativo. Deve citar os princípios de Sebastopol e do governo federal: dados completos, primários, oportunos, acessíveis, processáveis por máquina, em formatos não proprietários (CSV, XML, JSON) e livres de licenças restritivas. Na escala de 5 estrelas de Berners-Lee: 1 estrela (PDF na web com licença aberta); 2 estrelas (formato estruturado proprietário como XLS); 3 estrelas (formato não proprietário como CSV); 4 estrelas (padrões W3C abertos como RDF e URIs); 5 estrelas (Linked Open Data conectado a outros repositórios mundiais).',
    criteriosPontuacao: [
      {
        item: '1. Fundamentação Legal e Normativa dos Dados Abertos (LAI e Dec. 8.777/16)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Citou expressamente os dispositivos da Lei nº 12.527/2011 e do Decreto nº 8.777/2016 como base da transparência ativa.',
      },
      {
        item: '2. Princípios de Abertura e Formatos Legíveis por Máquina',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Listou dados primários, completos, formatos abertos e livres de patentes (CSV, JSON, XML).',
      },
      {
        item: '3. A Escala de 5 Estrelas de Tim Berners-Lee Aplicada à Câmara',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Explicou progressivamente os 5 níveis de maturidade da escala e sua relevância para a integração semântica do parlamento.',
      },
    ],
  },
  {
    id: 'tema-preservacao-acervo-audiovisual',
    tipo: 'peca_50',
    titulo: 'Projeto de Preservação Digital de Acervo Audiovisual Parlamentar (TV Câmara)',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário, elabore uma PEÇA TÉCNICA (projeto de parecer técnico com diretrizes de preservação), de até 50 linhas, estruturada conforme as normas da redação técnica oficial, para a salvaguarda do acervo histórico sonoro e imagético da TV Câmara e das sessões plenárias. Sua peça deve contemplar obrigatoriamente: 1. Diagnóstico dos riscos de deterioração física e obsolescência lógica dos suportes e fitas magnéticas analógicas legadas; 2. Padrões de formatos abertos de arquivamento matriz (AIP) para áudio (BWF ITU-R BS.1382 / IASA-TC 04) e vídeo (codec FFV1 em contêiner Matroska / RFC 9043); 3. Esquemas de metadados especializados para recursos audiovisuais (PBCore e NISO Z39.87 / MIX); 4. Protocolos de auditoria contínua de fixidez com funções criptográficas hash (SHA-256); 5. Diretrizes de disseminação pública em pacotes DIP otimizados para consulta cidadã no portal da Câmara dos Deputados.',
    limiteLinhas: 50,
    padraoRespostaPreliminar:
      'A peça técnica deve apresentar estrutura formal sóbria (Diagnóstico, Fundamentação Técnica, Especificação de Formatos de Matriz, Metadados Especializados, Protocolo de Fixidez e Diretrizes de Disseminação). No diagnóstico, elencar a síndrome do desprendimento do aglutinante (sticky-shed syndrome) e a obsolescência de aparelhos reprodutores mecânicos. Nos formatos matrizes: para áudio, Broadcast WAVE Format (BWF / WAV) linear PCM não comprimido em 96 kHz / 24-bit (ITU-R BS.1382 e IASA-TC 04); para vídeo, codec FFV1 de compressão estritamente sem perdas (lossless) encapsulado em contêiner Matroska (MKV / IETF RFC 9043), reduzindo armazenamento sem qualquer perda de pixels. Nos metadados: PBCore (Public Broadcasting Metadata Dictionary) para descrição de mídia e NISO Z39.87/MIX para aspectos técnicos. Na fixidez: geração de hashes SHA-256 no momento da ingestão e rotinas periódicas de checagem. Na disseminação (DIP): transcodificação para MP4 (H.264/AAC) e MP3 com streaming adaptativo.',
    criteriosPontuacao: [
      {
        item: '1. Diagnóstico e Adequação Estrutural da Peça Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Elaborou peça técnica impessoal, coesa e com fundamentação precisa da obsolescência física e lógica de acervos audiovisuais.',
      },
      {
        item: '2. Formatos Abertos Normatizados de Matriz (BWF e FFV1/Matroska)',
        pontuacaoMaxima: 7.0,
        descricaoEsperada:
          'Especificou com exatidão o formato BWF (ITU-R BS.1382) para áudio e o codec FFV1 em Matroska (RFC 9043) para matriz de preservação de vídeo.',
      },
      {
        item: '3. Padrões de Metadados Especializados (PBCore e MIX)',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Identificou e aplicou o esquema PBCore para radiodifusão pública e metadados técnicos NISO Z39.87.',
      },
      {
        item: '4. Protocolos de Fixidez Criptográfica SHA-256 e PREMIS',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Demonstrou a rotina automatizada de checagem periódica de hash contra corrupção silenciosa de bits (bit rot).',
      },
      {
        item: '5. Estratégias de Disseminação Pública (DIP) e Acesso Cidadão',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Apresentou soluções eficientes de streaming e pacotes derivados leves com respeito aos direitos autorais e transparência legislativa.',
      },
    ],
  },
  {
    id: 'tema-colecoes-digitais-licenciamento',
    tipo: 'peca_50',
    titulo: 'Diretrizes de Desenvolvimento de Coleções Digitais, Licenciamento e Norma COUNTER',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário, elabore uma PEÇA TÉCNICA (projeto de política de gestão e avaliação de coleções eletrônicas), de até 50 linhas, estruturada conforme o padrão documental oficial, abordando necessariamente: 1. Modelos contratuais de licenciamento de conteúdos digitais (assinatura temporária com acesso remoto, compra perpétua de e-books e consórcios interinstitucionais), apontando cláusulas mandatórias de direitos autorais e custódia perpétua; 2. Adoção da Norma COUNTER (Release 5) para aferição de uso, detalhando as métricas Unique_Item_Requests e Total_Item_Investigations; 3. Metodologia de Custo por Uso (CPU) e parâmetros de obsolescência da literatura para fundamentar decisões de renovação ou descarte/desbastamento; 4. Requisitos de conformidade com a LGPD e sigilo nas consultas parlamentares; 5. Integração cooperativa com repositórios de acesso aberto e a Rede Virtual de Bibliotecas (RVBI).',
    limiteLinhas: 50,
    padraoRespostaPreliminar:
      'A peça técnica deve apresentar estrutura formal equilibrada (Introdução Justificada, Modelos de Aquisição e Licenciamento, Métricas COUNTER e Avaliação por Custo, Privacidade/LGPD e Recomendações Finais). Nos modelos: contrastar assinatura temporária (risco de perda de acesso com término do contrato) com compra perpétua com direito de arquivamento local (garantia de preservação), exigindo cláusulas de mineração de textos (TDM) e acesso remoto seguro via proxy/VPN. Na Norma COUNTER R5: diferenciar Unique_Item_Requests (número real de conteúdos únicos acessados) de Total_Item_Investigations (todas as interações, incluindo cliques em sumários e visualizações). No Custo por Uso (CPU): demonstrar a fórmula Custo Total / Total de Usos Únicos e a relação com a meia-vida da literatura e desbastamento. Na LGPD: anonimização dos logs de pesquisa dos parlamentares e servidores para resguardar sigilo de proposições em elaboração. Na cooperação: articular compras consorciadas com a RVBI e priorizar repositórios de acesso aberto.',
    criteriosPontuacao: [
      {
        item: '1. Diagnóstico e Estrutura Formal da Peça Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Estruturou documento formal com redação técnica clara, vocabulário especializado e argumentação jurídica sólida.',
      },
      {
        item: '2. Modelos de Licenciamento Eletrônico e Cláusulas de Preservação',
        pontuacaoMaxima: 7.0,
        descricaoEsperada:
          'Diferenciou assinatura, compra perpétua e consórcios, exigindo salvaguardas contratuais de custódia e uso justo.',
      },
      {
        item: '3. Métricas da Norma COUNTER (Release 5) e Custo por Uso (CPU)',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Explicou com precisão as métricas Unique_Item_Requests e Total_Item_Investigations, e a aplicação matemática do CPU para desbastamento.',
      },
      {
        item: '4. Conformidade com a LGPD e Sigilo na Atividade Parlamentar',
        pontuacaoMaxima: 6.0,
        descricaoEsperada:
          'Estabeleceu diretrizes estritas de anonimização e proteção da privacidade de consultas de deputados e assessorias.',
      },
      {
        item: '5. Integração com Redes Cooperativas (RVBI) e Acesso Aberto',
        pontuacaoMaxima: 5.0,
        descricaoEsperada:
          'Propôs articulação de aquisições compartilhadas na RVBI e valorização de repositórios institucionais em consonância com a ciência aberta.',
      },
    ],
  },
];

