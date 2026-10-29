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
    "termo": "Perfil de aplicação",
    "definicao": "Termos e condições de uso para necessidades de uma comunidade.",
    "exemploBiblioteca": "Título pode ser exigido no perfil embora seja opcional no conjunto básico DC."
  },
  {
    "termo": "Crosswalk",
    "definicao": "Mapeamento entre esquemas sujeito a diferenças de semântica e granularidade.",
    "exemploBiblioteca": "Unir dois papéis de autoria num campo pode dificultar a conversão de volta."
  }
],
  descricaoCurta: "Classificar metadados pela função e reconhecer sobreposição. Avaliar completude, exatidão e conformidade separadamente. Construir perfil com reúso, restrições e semântica. Analisar perda e cardinalidade em um crosswalk. Escolher dados audiovisuais segundo requisito e versão.",
  tempoEstimadoMinutos: 23,
  autoresChave: [
  "Jenn Riley — Understanding Metadata (NISO, 2017)",
  "DCMI — Metadata Terms",
  "Library of Congress — MIX",
  "PBCore — documentação"
],
  alertasCebraspe: [
  "Validade estrutural não certifica verdade dos valores.",
  "O risco de perda não implica perda necessária em todo caso. É preciso examinar dados, granularidade e regras.",
  "TIFF é um contêiner com opções de codificação/compressão. O formato do contêiner não basta para essa conclusão."
],
  teoriaDensaMarkdown: "### Conceito, Funções e a Tipologia de Metadados da NISO\n\nEtimologicamente consagrados como \"dados sobre dados\" ou \"informação estruturada sobre uma fonte de informação\", os **metadados** são atributos formalmente descritos e codificados que viabilizam a descoberta, identificação, avaliação, gestão, uso, preservação e interoperabilidade de recursos físicos e digitais.\n\nA *National Information Standards Organization* (NISO), em seu relatório de referência *Understanding Metadata* (edição revisada em 2017), categorizou as funções dos metadados no ciclo informacional contemporâneo. Para estudar as funções solicitadas, distinguimos seis dimensões abaixo. Na NISO 2017, técnicos, direitos e preservação aparecem na esfera administrativa; não são seis classes mutuamente exclusivas nem uma sequência temporal obrigatória:\n\n```timeline\n1. DESCRITIVOS | O que é o recurso? | Identificação e recuperação temática pelo usuário (Título, Autor, Assunto, Data)\n---> Gestão e Infraestrutura\n2. ADMINISTRATIVOS | Como o recurso é gerido? | Controle do ciclo de vida, localização e custódia documental\n---> Decodificação de Arquivos\n3. TÉCNICOS | Quais os parâmetros digitais? | Formato, resolução, amostragem, codec, compressão e software de renderização\n---> Navegação Hipertextual\n4. ESTRUTURAIS | Como as partes se conectam? | Hierarquia, sequência física de páginas, relação pai-filho e mapas de montagem\n---> Segurança e Acesso\n5. DE DIREITOS | Quais os limites de uso? | Propriedade intelectual, direitos autorais, licenças Creative Commons e embargos\n---> Longevidade Sistêmica\n6. DE PRESERVAÇÃO | O recurso permanece autêntico? | Fixidez criptográfica (hashes), histórico de migração e ambiente de emulação\n```\n\n#### Seis funções em análise, com sobreposições:\n1. **Metadados Descritivos:** Descrevem o conteúdo intelectual e as características formais para viabilizar a busca, a identificação unívoca, a seleção por relevância e o acesso pelo usuário final. Padrões clássicos: Dublin Core, MARC 21 (campos 1XX, 2XX, 6XX, 7XX) e MODS.\n2. **Metadados Administrativos:** Provêm informações indispensáveis para gerenciar um recurso informacional dentro de um acervo ou repositório. Incluem quando e como o objeto foi criado, histórico de tramitação, descarte ou migração de custódia.\n3. **Metadados Técnicos:** Documentam as propriedades computacionais, de hardware e de software necessárias para decodificar, processar e exibir adequadamente o arquivo digital. Ex.: taxa de quadros (*frame rate*) de um vídeo da TV Câmara, taxa de amostragem de áudio (44.1 kHz ou 48 kHz), dimensões em pixels e modelo de compressão.\n4. **Metadados Estruturais:** Mapeiam os relacionamentos internos e lógicos entre as partes de um objeto complexo. Se um livro foi digitalizado em 500 imagens separadas, são os metadados estruturais (como a seção `structMap` do padrão METS) que definem a ordem de leitura (página 1 precede a página 2) e articulam as imagens ao índice de capítulos.\n5. **Metadados de Direitos (*Rights Metadata*):** Documentam o regime de direitos autorais, termos de licenciamento, detentores patrimoniais e eventuais restrições de uso, reprodução ou comercialização. Padrões: vocabulários Creative Commons, especificações RightsStatements.org e extensões PREMIS Rights.\n6. **Metadados de Preservação:** Registram informações que apoiam a custódia e preservação e a preservação digital a longo prazo (conforme o modelo OAIS/ISO 14721). Monitoram a integridade física e lógica (*fixity*), dependências de software e histórico de eventos de migração (padrão PREMIS).\n\n**Aplicação e recuperação:** Um checksum auxilia controle de fixidez e integra atividades de preservação. Na taxonomia NISO, isso pode estar no âmbito administrativo. A mesma informação apoia mais de uma função; não é uma competição para escolher uma única categoria em qualquer referência.\n\n### Qualidade e Governança de Metadados\n\nA eficácia de um catálogo informatizado, discovery service ou repositório digital depende intrinsecamente da qualidade dos seus metadados (item 3.3 do Bloco A). Metadados corrompidos, ausentes ou inconsistentes geram \"silêncio\" (recursos relevantes não recuperados) ou \"ruído\" (recuperação de falsos positivos).\n\n#### A. As Dimensões da Qualidade de Metadados:\n* **Completude (*Completeness*):** Presença de Os elementos requeridos pelo perfil e a cobertura dos recomendados definidos pelo perfil de aplicação institucional. Ausências podem prejudicar descoberta e identificação conforme a função; não se deduz uma medida de revocação sem avaliação.\n* **Exatidão (*Accuracy*):** Fidelidade com que o valor atribuído ao elemento reflete a realidade do recurso (ex.: grafia correta do nome do parlamentar, ano exato da promulgação da lei, código ISBN/ISSN verificado).\n* **Consistência (*Consistency*):** Uso uniforme de regras de catalogação, formatos padronizados (ex.: datas no padrão ISO 8601 `AAAA-MM-DD`) e vocabulários controlados de autoridade ao longo de todo o catálogo.\n* **Atualidade (*Timeliness*):** Atualização tempestiva dos metadados quando há alterações no recurso (ex.: mudança na situação de tramitação de um projeto de lei ou incorporação de errata).\n* **Conformidade (*Conformance*):** Estrita aderência às regras sintáticas do esquema XML/JSON e às restrições semânticas do perfil adotado.\n\n#### B. Governança de Metadados:\nA governança de metadados estabelece:\n* A definição formal da política de metadados da instituição;\n* A designação do responsável (*metadata steward*) pela manutenção do esquema e dicionário de dados;\n* Procedimentos de controle de qualidade automatizado (validação contra XML Schema/JSON Schema) e manual (revisão por bibliotecários catalogadores);\n* Gestão de versões e ciclo de atualização dos esquemas e perfis de aplicação.\n\n**Aplicação e recuperação:** Um XML válido contém ano errado. Ele pode satisfazer esquema e falhar em exatidão. Um registro com todos os campos repetidos mecanicamente pode ser completo na contagem e inútil na identificação. Validação automática e revisão de valores se complementam; nenhum carimbo de “válido” prova verdade documental.\n\n### Perfis de Aplicação (Application Profiles)\n\nO conceito de **Perfil de Aplicação** (*Application Profile*) foi formulado de forma seminal por **Rachel Heery e Manjula Patel (2000)** em artigo clássico na revista *Ariadne* (*Application profiles: mixing and matching metadata schemas*).\n\n```timeline\n1. ESQUEMAS GLOBAIS | Dublin Core, MARC 21, MIX, PREMIS | Padrões genéricos universais concebidos para interoperabilidade ampla\n---> Análise de Domínio\n2. SELEÇÃO & MIXAGEM | Princípio do \"Mix and Match\" | Pinçar elementos de diferentes esquemas existentes para um propósito específico\n---> Restrições Locais\n3. REGRAS DO PERFIL | Cardinalidade e Vocabulários | Definir campos obrigatórios, repetitividade e vincular tesauros locais\n---> Especificação Publicada\n4. APLICAÇÃO LOCAL | Perfil Institucional Concluído | Ex.: Perfil BNDigital, Perfil LexML Brasil (sem criar novas tags redundantes!)\n```\n\n#### Princípios Fundamentais de Heery e Patel (2000):\n1. **Reuso de Vocabulários Pré-Existentes:** No sentido clássico de Heery e Patel, o perfil reutiliza termos de namespaces, não redefine arbitrariamente sua semântica. Novas necessidades podem levar a um vocabulário/namespace próprio documentado, depois usado no perfil; reúso não proíbe toda extensão. Em vez de inventar uma tag `<autor_da_lei>`, o perfil reutiliza `dc:creator` do Dublin Core.\n2. **Mistura de Esquemas (*Mix and Match*):** Combina elementos provenientes de múltiplos esquemas ontológicos distintos para atender aos requisitos de uma comunidade específica (ex.: usar elementos descritivos do Dublin Core, elementos técnicos do NISO MIX e elementos de preservação do PREMIS em um único perfil).\n3. **Restrições e Qualificadores Locais:** Define regras sobre cardinalidade (se o campo é obrigatório ou opcional; se é unívoco ou repetitivo), esquemas de codificação e listas controladas de valores (ex.: obrigar que o campo `dc:subject` seja preenchido exclusivamente com termos do *Tesauro da Câmara dos Deputados*).\n4. **Interoperabilidade Semântica:** Permite que sistemas externos processem os metadados em um nível básico de interoperabilidade (revertendo aos esquemas-base), buscando preservar a riqueza local, sem garantia automática de compreensão integral por qualquer receptor.\n\n**Aplicação e recuperação:** Perfil exige assunto de um tesauro e datas em sintaxe definida. Ele deve declarar namespace, cardinalidade, vocabulários e regras de uso. “Date” é amplo; uma data de publicação não pode ser convertida em data de criação só porque o destino tem apenas um campo de data. Documente o significado escolhido.\n\n### Crosswalks: Mapeamento Semântico e Perda de Informação\n\nUm **crosswalk** (mapeamento de metadados) é uma especificação formal que mapeia a correspondência semântica e funcional entre os elementos de dois esquemas de metadados distintos (por exemplo, a tabela de conversão entre o **MARC 21 Bibliográfico** e o **Dublin Core Simples**).\n\n#### A. A Ilusão da \"Conversão Sem Perda\":\nNão se pode inferir conversão simétrica e sem perdas só da existência de um mapeamento:\n* **Diferença de Granularidade:** O MARC 21 possui centenas de campos, subcampos e indicadores ultra-específicos (ex.: campo 100 para autor pessoal, 110 para entidade coletiva, 111 para eventos/congressos, com qualificadores de datas e funções). O Dublin Core Simples possui apenas o elemento `dc:creator`. Ao converter de MARC 21 para Dublin Core, há um colapso de granularidade.\n* **Assimetria e Perda Semântica (*Semantic Drift*):** A conversão de um esquema rico para um esquema simplificado perde especificidade. A reversão (de Dublin Core de volta para MARC 21) pode não recuperar os detalhes perdidos sem informação complementar; nem intervenção humana adivinha necessariamente o dado ausente, pois o sistema não tem como inferir se aquele `dc:creator` era uma pessoa física (100) ou um órgão público (110).\n* **Relações de Mapeamento:** Podem ser de um-para-um (1:1), muitos-para-um (N:1, gerando perda de especificidade), um-para-muitos (1:N, exigindo regras de desambiguação complexas) ou nula (elementos sem equivalente no esquema de destino).\n\n**Aplicação e recuperação:** Dois campos distintos viram um único creator. Sem preservar papel/tipo em outro lugar, a volta pode ser ambígua. Porém nem todo crosswalk perde dados em todo registro: campos equivalentes num subconjunto podem ser convertidos sem perda pertinente. Analise mapeamento e dados, evitando tanto garantia universal quanto perda obrigatória universal.\n\n### Metadados para Recursos Visuais e Sonoros: Imagem e Audiovisual\n\nO edital nº 1/2026 exige explicitamente os metadados aplicados a **imagem e som** (item 3.5 do Bloco A):\n\n#### A. Imagens Digitais Estáticas: NISO Z39.87 / MIX\n* **NISO Z39.87 / MIX (*Data Dictionary – Technical Metadata for Digital Still Images / Metadata for Images in XML*):** Mantido conjuntamente pela NISO e pela *Library of Congress*, é o padrão internacional em XML para documentar metadados técnicos de imagens digitais capturadas por digitalizadores (scanners) ou câmeras digitais.\n* **Elementos Típicos do MIX:**\n  * Informações do formato básico: MIME type, versão do formato, ordem dos bytes (*byte order*).\n  * Informações de captura: modelo e fabricante do scanner, tempo de exposição, abertura, tipo de sensor.\n  * Características da imagem: largura, altura, espaço de cores (*color space* — RGB, CMYK, escala de cinza), profundidade de cor (*bit depth* — 8, 16, 24 bits), resolução espacial (DPI/PPI) e método de compressão; TIFF é contêiner que admite diferentes opções, e não sinônimo universal de ausência de perdas.\n* **Metadados Embutidos (*Embedded Metadata*):**\n  * **EXIF (*Exchangeable Image File Format*):** Especificação padrão da indústria de câmeras que grava dados técnicos (data/hora, velocidade do obturador, lente, coordenadas GPS) no cabeçalho dos arquivos JPEG/TIFF.\n  * **IPTC / XMP (*Extensible Metadata Platform* da Adobe):** Padrões para embutir metadados descritivos, autoria e direitos diretamente nos arquivos binários.\n\n#### B. Som e Recursos Audiovisuais: PBCore\n* **PBCore (*Public Broadcasting Metadata Dictionary Project*):** Desenvolvido pelo setor de radiodifusão pública norte-americano, o PBCore é um esquema voltado à descrição audiovisual, entre outras alternativas (som, transmissões de rádio e produções televisivas).\n* **Estrutura do PBCore:**\n  * `pbcoreDescriptionDocument`: Contêiner raiz para a descrição completa de um programa ou recurso audiovisual.\n  * `pbcoreTitle`, `pbcoreDescription`, `pbcoreCoverage`: Metadados descritivos de conteúdo.\n  * `pbcoreInstantiation`: Descreve a manifestação física ou digital concreta da gravação (codec de áudio/vídeo, taxa de bits, taxa de amostragem, número de canais — mono/estéreo/5.1, suporte de mídia física e duração precisa em código de tempo *timecode*).\n  * `pbcoreRightsSummary`: Informações detalhadas de direitos e termos de retransmissão.\n* **Aplicação Legislativa:** No Parlamento, PBCore é uma opção a avaliar para acervos sonoros/videográficos, sem afirmar adoção real ou superioridade universal para a Rádio/TV Câmara (discursos históricos, sessões de CPI e transmissões plenárias).\n\n**Aplicação e recuperação:** Um vídeo possui título, produtor, duração, codec e direitos. Eles atendem a funções distintas; o contêiner não determina sozinho a possibilidade de preservação. EXIF e IPTC/XMP também podem conter dados que exigem cuidado antes da publicação, como localização. Escolha esquema e perfil pela necessidade e interoperabilidade, não por chamar uma ferramenta de ideal.",
  teoriaDidaticaMarkdown: "### Revisão: qualidade é adequação demonstrada\n\nTipos descrevem funções e podem se sobrepor. Preservação/direitos/técnicos estão na esfera administrativa da NISO 2017. Completude não prova exatidão; validade de esquema não prova verdade. Perfil declara termos, cardinalidade, vocabulários e regras. Reúso não permite alterar silenciosamente semântica. Crosswalk pode perder detalhe e ser assimétrico, sem perda obrigatória em todo subconjunto. MIX e PBCore atendem funções específicas; nenhum esquema garante por si preservação ou é universalmente ideal.\n",
  checkpoints: [
  {
    "id": "cp-2-6-1",
    "pergunta": "Micro-Checkpoint 1: Conceito de Perfil de Aplicação (Heery & Patel 2000)",
    "item": "Um perfil de aplicação combina elementos de diferentes esquemas de metadados, adaptados às necessidades de uma comunidade ou sistema.",
    "gabarito": "C",
    "justificativa": "O perfil combina termos e condições de uso para uma aplicação, preservando semântica e documentando restrições. Não se limita a criar nomes locais parecidos com os originais.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação."
  },
  {
    "id": "cp-2-6-2",
    "pergunta": "Micro-Checkpoint 2: Crosswalks e Equivalência Semântica",
    "item": "O crosswalk entre dois esquemas de metadados garante a conversão integral e sem perda de informação, dada a equivalência semântica plena de seus elementos.",
    "gabarito": "E",
    "justificativa": "Um crosswalk não garante equivalência plena universal. Pode haver perda e assimetria; também não é correto afirmar perda inevitável em cada registro possível.",
    "versao_correta": "A conversão depende dos esquemas, regras e dados; pode perder informação e não ser reversível.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação."
  },
  {
    "id": "cp-2-6-3",
    "pergunta": "Micro-Checkpoint 3: Tipologia NISO: Metadados Estruturais (Item 3.2)",
    "item": "A indicação da ordem das páginas de um livro digitalizado e da relação entre seus arquivos de imagem constitui exemplo de metadado estrutural.",
    "gabarito": "C",
    "justificativa": "Ordem de páginas e relação de partes são funções estruturais. O tipo é reconhecido pela função, não pela extensão do arquivo que armazena o dado.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação."
  },
  {
    "id": "rt-2-6-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um registro validado contra XML Schema está necessariamente correto quanto à autoria e à data factual.",
    "gabarito": "E",
    "justificativa": "Validade estrutural não certifica verdade dos valores.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação.",
    "editalRef": "Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7",
    "habilidade": "aplicar",
    "versao_correta": "É preciso avaliar exatidão dos valores além da conformidade estrutural."
  },
  {
    "id": "rt-2-6-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na classificação da NISO 2017, metadados técnicos, de direitos e de preservação podem ser considerados na esfera administrativa.",
    "gabarito": "C",
    "justificativa": "As funções podem se sobrepor. Não se trata de seis classes necessariamente disjuntas.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação.",
    "editalRef": "Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-6-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo crosswalk perde informação em qualquer registro, mesmo quando os dados usados possuem equivalência exata no destino.",
    "gabarito": "E",
    "justificativa": "O risco de perda não implica perda necessária em todo caso. É preciso examinar dados, granularidade e regras.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação.",
    "editalRef": "Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7",
    "habilidade": "aplicar",
    "versao_correta": "Crosswalk pode perder informação; o resultado depende do mapeamento e dos dados."
  },
  {
    "id": "rt-2-6-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um perfil pode exigir vocabulário e cardinalidade mais restritos para atender uma comunidade, sem redefinir silenciosamente o termo de origem.",
    "gabarito": "C",
    "justificativa": "Essa delimitação deve ser documentada; reúso preserva a semântica e explicita condições de aplicação.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação.",
    "editalRef": "Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-6-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "TIFF significa que todo arquivo nele armazenado foi necessariamente comprimido sem perdas.",
    "gabarito": "E",
    "justificativa": "TIFF é um contêiner com opções de codificação/compressão. O formato do contêiner não basta para essa conclusão.",
    "fonte": "Jenn Riley, Understanding Metadata (NISO, 2017); DCMI, perfis de aplicação; Heery e Patel (2000); Library of Congress, MIX; PBCore, documentação.",
    "editalRef": "Bloco A - Item 3.1 a 3.5 e Bloco D - Item 2.7",
    "habilidade": "aplicar",
    "versao_correta": "É necessário examinar a codificação e a compressão efetivamente usadas."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-2-6-fonte-niso",
      "nome": "Jenn Riley — Understanding Metadata (NISO, 2017)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Jenn Riley — Understanding Metadata (NISO, 2017)",
      "ideiaChave": "Tipos e funções; técnicos, direitos e preservação na esfera administrativa.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-6-fonte-dcmi",
      "nome": "DCMI — Metadata Terms",
      "ano": "Referência de consulta",
      "obraPrincipal": "DCMI — Metadata Terms",
      "ideiaChave": "Distinguir elementos básicos, termos e perfil de aplicação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-6-fonte-mix",
      "nome": "Library of Congress — MIX",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — MIX",
      "ideiaChave": "Metadados técnicos de imagem; distinguir esquema XML e dicionário de dados.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-6-fonte-pbcore",
      "nome": "PBCore — documentação",
      "ano": "Referência de consulta",
      "obraPrincipal": "PBCore — documentação",
      "ideiaChave": "Descrição audiovisual e instanciações; adequação depende de requisitos.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-2-6-3",
      "afirmacao": "Todo crosswalk perde informação em qualquer registro, mesmo quando os dados usados possuem equivalência exata no destino.",
      "gabarito": "E",
      "porQue": "O risco de perda não implica perda necessária em todo caso. É preciso examinar dados, granularidade e regras."
    },
    {
      "id": "memoria-rt-2-6-4",
      "afirmacao": "Um perfil pode exigir vocabulário e cardinalidade mais restritos para atender uma comunidade, sem redefinir silenciosamente o termo de origem.",
      "gabarito": "C",
      "porQue": "Essa delimitação deve ser documentada; reúso preserva a semântica e explicita condições de aplicação."
    },
    {
      "id": "memoria-rt-2-6-5",
      "afirmacao": "TIFF significa que todo arquivo nele armazenado foi necessariamente comprimido sem perdas.",
      "gabarito": "E",
      "porQue": "TIFF é um contêiner com opções de codificação/compressão. O formato do contêiner não basta para essa conclusão."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-2-6-bloco-1",
    "titulo": "Conceito, Funções e a Tipologia de Metadados da NISO",
    "objetivos": [
      "Classificar metadados pela função e reconhecer sobreposição."
    ],
    "conteudo": "Etimologicamente consagrados como \"dados sobre dados\" ou \"informação estruturada sobre uma fonte de informação\", os **metadados** são atributos formalmente descritos e codificados que viabilizam a descoberta, identificação, avaliação, gestão, uso, preservação e interoperabilidade de recursos físicos e digitais.\n\nA *National Information Standards Organization* (NISO), em seu relatório de referência *Understanding Metadata* (edição revisada em 2017), categorizou as funções dos metadados no ciclo informacional contemporâneo. Para estudar as funções solicitadas, distinguimos seis dimensões abaixo. Na NISO 2017, técnicos, direitos e preservação aparecem na esfera administrativa; não são seis classes mutuamente exclusivas nem uma sequência temporal obrigatória:\n\n```timeline\n1. DESCRITIVOS | O que é o recurso? | Identificação e recuperação temática pelo usuário (Título, Autor, Assunto, Data)\n---> Gestão e Infraestrutura\n2. ADMINISTRATIVOS | Como o recurso é gerido? | Controle do ciclo de vida, localização e custódia documental\n---> Decodificação de Arquivos\n3. TÉCNICOS | Quais os parâmetros digitais? | Formato, resolução, amostragem, codec, compressão e software de renderização\n---> Navegação Hipertextual\n4. ESTRUTURAIS | Como as partes se conectam? | Hierarquia, sequência física de páginas, relação pai-filho e mapas de montagem\n---> Segurança e Acesso\n5. DE DIREITOS | Quais os limites de uso? | Propriedade intelectual, direitos autorais, licenças Creative Commons e embargos\n---> Longevidade Sistêmica\n6. DE PRESERVAÇÃO | O recurso permanece autêntico? | Fixidez criptográfica (hashes), histórico de migração e ambiente de emulação\n```\n\n#### Seis funções em análise, com sobreposições:\n1. **Metadados Descritivos:** Descrevem o conteúdo intelectual e as características formais para viabilizar a busca, a identificação unívoca, a seleção por relevância e o acesso pelo usuário final. Padrões clássicos: Dublin Core, MARC 21 (campos 1XX, 2XX, 6XX, 7XX) e MODS.\n2. **Metadados Administrativos:** Provêm informações indispensáveis para gerenciar um recurso informacional dentro de um acervo ou repositório. Incluem quando e como o objeto foi criado, histórico de tramitação, descarte ou migração de custódia.\n3. **Metadados Técnicos:** Documentam as propriedades computacionais, de hardware e de software necessárias para decodificar, processar e exibir adequadamente o arquivo digital. Ex.: taxa de quadros (*frame rate*) de um vídeo da TV Câmara, taxa de amostragem de áudio (44.1 kHz ou 48 kHz), dimensões em pixels e modelo de compressão.\n4. **Metadados Estruturais:** Mapeiam os relacionamentos internos e lógicos entre as partes de um objeto complexo. Se um livro foi digitalizado em 500 imagens separadas, são os metadados estruturais (como a seção `structMap` do padrão METS) que definem a ordem de leitura (página 1 precede a página 2) e articulam as imagens ao índice de capítulos.\n5. **Metadados de Direitos (*Rights Metadata*):** Documentam o regime de direitos autorais, termos de licenciamento, detentores patrimoniais e eventuais restrições de uso, reprodução ou comercialização. Padrões: vocabulários Creative Commons, especificações RightsStatements.org e extensões PREMIS Rights.\n6. **Metadados de Preservação:** Registram informações que apoiam a custódia e preservação e a preservação digital a longo prazo (conforme o modelo OAIS/ISO 14721). Monitoram a integridade física e lógica (*fixity*), dependências de software e histórico de eventos de migração (padrão PREMIS).\n\n**Aplicação e recuperação:** Um checksum auxilia controle de fixidez e integra atividades de preservação. Na taxonomia NISO, isso pode estar no âmbito administrativo. A mesma informação apoia mais de uma função; não é uma competição para escolher uma única categoria em qualquer referência.",
    "checkpointIds": [
      "cp-2-6-3",
      "rt-2-6-2"
    ]
  },
  {
    "id": "sub-2-6-bloco-2",
    "titulo": "Qualidade e Governança de Metadados",
    "objetivos": [
      "Avaliar completude, exatidão e conformidade separadamente."
    ],
    "conteudo": "A eficácia de um catálogo informatizado, discovery service ou repositório digital depende intrinsecamente da qualidade dos seus metadados (item 3.3 do Bloco A). Metadados corrompidos, ausentes ou inconsistentes geram \"silêncio\" (recursos relevantes não recuperados) ou \"ruído\" (recuperação de falsos positivos).\n\n#### A. As Dimensões da Qualidade de Metadados:\n* **Completude (*Completeness*):** Presença de Os elementos requeridos pelo perfil e a cobertura dos recomendados definidos pelo perfil de aplicação institucional. Ausências podem prejudicar descoberta e identificação conforme a função; não se deduz uma medida de revocação sem avaliação.\n* **Exatidão (*Accuracy*):** Fidelidade com que o valor atribuído ao elemento reflete a realidade do recurso (ex.: grafia correta do nome do parlamentar, ano exato da promulgação da lei, código ISBN/ISSN verificado).\n* **Consistência (*Consistency*):** Uso uniforme de regras de catalogação, formatos padronizados (ex.: datas no padrão ISO 8601 `AAAA-MM-DD`) e vocabulários controlados de autoridade ao longo de todo o catálogo.\n* **Atualidade (*Timeliness*):** Atualização tempestiva dos metadados quando há alterações no recurso (ex.: mudança na situação de tramitação de um projeto de lei ou incorporação de errata).\n* **Conformidade (*Conformance*):** Estrita aderência às regras sintáticas do esquema XML/JSON e às restrições semânticas do perfil adotado.\n\n#### B. Governança de Metadados:\nA governança de metadados estabelece:\n* A definição formal da política de metadados da instituição;\n* A designação do responsável (*metadata steward*) pela manutenção do esquema e dicionário de dados;\n* Procedimentos de controle de qualidade automatizado (validação contra XML Schema/JSON Schema) e manual (revisão por bibliotecários catalogadores);\n* Gestão de versões e ciclo de atualização dos esquemas e perfis de aplicação.\n\n**Aplicação e recuperação:** Um XML válido contém ano errado. Ele pode satisfazer esquema e falhar em exatidão. Um registro com todos os campos repetidos mecanicamente pode ser completo na contagem e inútil na identificação. Validação automática e revisão de valores se complementam; nenhum carimbo de “válido” prova verdade documental.",
    "checkpointIds": [
      "rt-2-6-1"
    ]
  },
  {
    "id": "sub-2-6-bloco-3",
    "titulo": "Perfis de Aplicação (Application Profiles)",
    "objetivos": [
      "Construir perfil com reúso, restrições e semântica."
    ],
    "conteudo": "O conceito de **Perfil de Aplicação** (*Application Profile*) foi formulado de forma seminal por **Rachel Heery e Manjula Patel (2000)** em artigo clássico na revista *Ariadne* (*Application profiles: mixing and matching metadata schemas*).\n\n```timeline\n1. ESQUEMAS GLOBAIS | Dublin Core, MARC 21, MIX, PREMIS | Padrões genéricos universais concebidos para interoperabilidade ampla\n---> Análise de Domínio\n2. SELEÇÃO & MIXAGEM | Princípio do \"Mix and Match\" | Pinçar elementos de diferentes esquemas existentes para um propósito específico\n---> Restrições Locais\n3. REGRAS DO PERFIL | Cardinalidade e Vocabulários | Definir campos obrigatórios, repetitividade e vincular tesauros locais\n---> Especificação Publicada\n4. APLICAÇÃO LOCAL | Perfil Institucional Concluído | Ex.: Perfil BNDigital, Perfil LexML Brasil (sem criar novas tags redundantes!)\n```\n\n#### Princípios Fundamentais de Heery e Patel (2000):\n1. **Reuso de Vocabulários Pré-Existentes:** No sentido clássico de Heery e Patel, o perfil reutiliza termos de namespaces, não redefine arbitrariamente sua semântica. Novas necessidades podem levar a um vocabulário/namespace próprio documentado, depois usado no perfil; reúso não proíbe toda extensão. Em vez de inventar uma tag `<autor_da_lei>`, o perfil reutiliza `dc:creator` do Dublin Core.\n2. **Mistura de Esquemas (*Mix and Match*):** Combina elementos provenientes de múltiplos esquemas ontológicos distintos para atender aos requisitos de uma comunidade específica (ex.: usar elementos descritivos do Dublin Core, elementos técnicos do NISO MIX e elementos de preservação do PREMIS em um único perfil).\n3. **Restrições e Qualificadores Locais:** Define regras sobre cardinalidade (se o campo é obrigatório ou opcional; se é unívoco ou repetitivo), esquemas de codificação e listas controladas de valores (ex.: obrigar que o campo `dc:subject` seja preenchido exclusivamente com termos do *Tesauro da Câmara dos Deputados*).\n4. **Interoperabilidade Semântica:** Permite que sistemas externos processem os metadados em um nível básico de interoperabilidade (revertendo aos esquemas-base), buscando preservar a riqueza local, sem garantia automática de compreensão integral por qualquer receptor.\n\n**Aplicação e recuperação:** Perfil exige assunto de um tesauro e datas em sintaxe definida. Ele deve declarar namespace, cardinalidade, vocabulários e regras de uso. “Date” é amplo; uma data de publicação não pode ser convertida em data de criação só porque o destino tem apenas um campo de data. Documente o significado escolhido.",
    "checkpointIds": [
      "cp-2-6-1",
      "rt-2-6-4"
    ]
  },
  {
    "id": "sub-2-6-bloco-4",
    "titulo": "Crosswalks: Mapeamento Semântico e Perda de Informação",
    "objetivos": [
      "Analisar perda e cardinalidade em um crosswalk."
    ],
    "conteudo": "Um **crosswalk** (mapeamento de metadados) é uma especificação formal que mapeia a correspondência semântica e funcional entre os elementos de dois esquemas de metadados distintos (por exemplo, a tabela de conversão entre o **MARC 21 Bibliográfico** e o **Dublin Core Simples**).\n\n#### A. A Ilusão da \"Conversão Sem Perda\":\nNão se pode inferir conversão simétrica e sem perdas só da existência de um mapeamento:\n* **Diferença de Granularidade:** O MARC 21 possui centenas de campos, subcampos e indicadores ultra-específicos (ex.: campo 100 para autor pessoal, 110 para entidade coletiva, 111 para eventos/congressos, com qualificadores de datas e funções). O Dublin Core Simples possui apenas o elemento `dc:creator`. Ao converter de MARC 21 para Dublin Core, há um colapso de granularidade.\n* **Assimetria e Perda Semântica (*Semantic Drift*):** A conversão de um esquema rico para um esquema simplificado perde especificidade. A reversão (de Dublin Core de volta para MARC 21) pode não recuperar os detalhes perdidos sem informação complementar; nem intervenção humana adivinha necessariamente o dado ausente, pois o sistema não tem como inferir se aquele `dc:creator` era uma pessoa física (100) ou um órgão público (110).\n* **Relações de Mapeamento:** Podem ser de um-para-um (1:1), muitos-para-um (N:1, gerando perda de especificidade), um-para-muitos (1:N, exigindo regras de desambiguação complexas) ou nula (elementos sem equivalente no esquema de destino).\n\n**Aplicação e recuperação:** Dois campos distintos viram um único creator. Sem preservar papel/tipo em outro lugar, a volta pode ser ambígua. Porém nem todo crosswalk perde dados em todo registro: campos equivalentes num subconjunto podem ser convertidos sem perda pertinente. Analise mapeamento e dados, evitando tanto garantia universal quanto perda obrigatória universal.",
    "checkpointIds": [
      "cp-2-6-2",
      "rt-2-6-3"
    ]
  },
  {
    "id": "sub-2-6-bloco-5",
    "titulo": "Metadados para Recursos Visuais e Sonoros: Imagem e Audiovisual",
    "objetivos": [
      "Escolher dados audiovisuais segundo requisito e versão."
    ],
    "conteudo": "O edital nº 1/2026 exige explicitamente os metadados aplicados a **imagem e som** (item 3.5 do Bloco A):\n\n#### A. Imagens Digitais Estáticas: NISO Z39.87 / MIX\n* **NISO Z39.87 / MIX (*Data Dictionary – Technical Metadata for Digital Still Images / Metadata for Images in XML*):** Mantido conjuntamente pela NISO e pela *Library of Congress*, é o padrão internacional em XML para documentar metadados técnicos de imagens digitais capturadas por digitalizadores (scanners) ou câmeras digitais.\n* **Elementos Típicos do MIX:**\n  * Informações do formato básico: MIME type, versão do formato, ordem dos bytes (*byte order*).\n  * Informações de captura: modelo e fabricante do scanner, tempo de exposição, abertura, tipo de sensor.\n  * Características da imagem: largura, altura, espaço de cores (*color space* — RGB, CMYK, escala de cinza), profundidade de cor (*bit depth* — 8, 16, 24 bits), resolução espacial (DPI/PPI) e método de compressão; TIFF é contêiner que admite diferentes opções, e não sinônimo universal de ausência de perdas.\n* **Metadados Embutidos (*Embedded Metadata*):**\n  * **EXIF (*Exchangeable Image File Format*):** Especificação padrão da indústria de câmeras que grava dados técnicos (data/hora, velocidade do obturador, lente, coordenadas GPS) no cabeçalho dos arquivos JPEG/TIFF.\n  * **IPTC / XMP (*Extensible Metadata Platform* da Adobe):** Padrões para embutir metadados descritivos, autoria e direitos diretamente nos arquivos binários.\n\n#### B. Som e Recursos Audiovisuais: PBCore\n* **PBCore (*Public Broadcasting Metadata Dictionary Project*):** Desenvolvido pelo setor de radiodifusão pública norte-americano, o PBCore é um esquema voltado à descrição audiovisual, entre outras alternativas (som, transmissões de rádio e produções televisivas).\n* **Estrutura do PBCore:**\n  * `pbcoreDescriptionDocument`: Contêiner raiz para a descrição completa de um programa ou recurso audiovisual.\n  * `pbcoreTitle`, `pbcoreDescription`, `pbcoreCoverage`: Metadados descritivos de conteúdo.\n  * `pbcoreInstantiation`: Descreve a manifestação física ou digital concreta da gravação (codec de áudio/vídeo, taxa de bits, taxa de amostragem, número de canais — mono/estéreo/5.1, suporte de mídia física e duração precisa em código de tempo *timecode*).\n  * `pbcoreRightsSummary`: Informações detalhadas de direitos e termos de retransmissão.\n* **Aplicação Legislativa:** No Parlamento, PBCore é uma opção a avaliar para acervos sonoros/videográficos, sem afirmar adoção real ou superioridade universal para a Rádio/TV Câmara (discursos históricos, sessões de CPI e transmissões plenárias).\n\n**Aplicação e recuperação:** Um vídeo possui título, produtor, duração, codec e direitos. Eles atendem a funções distintas; o contêiner não determina sozinho a possibilidade de preservação. EXIF e IPTC/XMP também podem conter dados que exigem cuidado antes da publicação, como localização. Escolha esquema e perfil pela necessidade e interoperabilidade, não por chamar uma ferramenta de ideal.",
    "checkpointIds": [
      "rt-2-6-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "niso",
    "titulo": "Jenn Riley — Understanding Metadata (NISO, 2017)",
    "localizador": "Tipos e funções; técnicos, direitos e preservação na esfera administrativa.",
    "url": "https://www.niso.org/publications/understanding-metadata-2017"
  },
  {
    "id": "dcmi",
    "titulo": "DCMI — Metadata Terms",
    "localizador": "Distinguir elementos básicos, termos e perfil de aplicação.",
    "url": "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/"
  },
  {
    "id": "mix",
    "titulo": "Library of Congress — MIX",
    "localizador": "Metadados técnicos de imagem; distinguir esquema XML e dicionário de dados.",
    "url": "https://www.loc.gov/standards/mix/"
  },
  {
    "id": "pbcore",
    "titulo": "PBCore — documentação",
    "localizador": "Descrição audiovisual e instanciações; adequação depende de requisitos.",
    "url": "https://pbcore.org/"
  }
],
};
