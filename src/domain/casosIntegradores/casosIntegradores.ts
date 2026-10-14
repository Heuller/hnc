import type { CasoIntegrador } from './types';

export const CASOS_INTEGRADORES: CasoIntegrador[] = [
  {
    id: 'ci-1',
    numero: 1,
    titulo: 'CI-1: Catalogação, Modelagem LRM e Classificação de Obra sobre Processo Legislativo',
    subtitulo: 'Articulação entre Fundamentos, Modelagem Bibliográfica e Sistemas de Classificação',
    modulosEnvolvidos: ['m1', 'm2', 'm3'],
    modulosCodigos: ['M1', 'M2', 'M3'],
    temaGeral: 'Catalogação descritiva (AACR2r/RDA), IFLA LRM, MARC 21, CDD, CDU e Vocabulário Controlado',
    enunciadoContexto: `A Biblioteca Pedro Aleixo da Câmara dos Deputados adquiriu uma monografia jurídica contemporânea intitulada "O Devido Processo Legislativo Constitucional e a Tramitação de Proposições no Congresso Nacional", de autoria de dois docentes de universidade federal sem indicação de autor principal. A obra contempla análise doutrinária do Regimento Interno da Câmara, estudos comparados de direito parlamentar e tabelas sinóticas de prazos de tramitação. O bibliotecário responsável pelo processamento técnico foi incumbido de: (1) realizar a modelagem conceitual e catalogação descritiva da obra segundo o modelo IFLA LRM e as normas RDA e AACR2r; (2) definir os pontos de acesso principais e secundários, transcrevendo os dados no formato MARC 21 Bibliográfico; e (3) atribuir a notação de classificação temática em CDD e CDU, além de termos de indexação a partir do Vocabulário Controlado da Rede Virtual de Bibliotecas (RVBI/BDCam). Considerando essa situação hipotética e os preceitos de catalogação, classificação e modelagem, julgue os itens a seguir.`,
    questoes: [
      {
        id: 'ci-1-q1',
        item: 'Segundo o modelo IFLA LRM, o texto intelectual abstrato da monografia jurídica em análise constitui a entidade Expressão quando materializado linguisticamente em língua portuguesa, ao passo que os exemplares físicos impressos depositados nas estantes da Câmara dos Deputados configuram a entidade Item.',
        gabarito: 'C',
        submoduloRef: '2.3',
        editalRef: 'Bloco D - 1.1 e 1.2',
        justificativa: 'CERTO. No modelo conceitual IFLA LRM (e no modelo FRBR precursor), a cadeia WEMI estrutura-se em: Obra (concepção intelectual abstrata), Expressão (realização linguística, sonora ou gráfica de uma obra), Manifestação (incorporação física ou digital em tiragem/publicação) e Item (exemplar individualizado e tangível pertencente a uma coleção específica). A distinção é canônica no LRM e na RDA (IFLA LRM, 2017; Riva, Le Bœuf & Žumer).'
      },
      {
        id: 'ci-1-q2',
        item: 'De acordo com as regras do AACR2r (Capítulo 21), por se tratar de obra de autoria compartilhada entre dois autores sem indicação explícita de responsabilidade principal, a entrada principal deve ser formulada compulsoriamente pelo título da publicação, criando-se entradas secundárias para ambos os autores no campo 700 do formato MARC 21.',
        gabarito: 'E',
        submoduloRef: '2.1',
        editalRef: 'Bloco D - 2.1 e 2.2',
        justificativa: 'ERRADO. A regra 21.6B1 do AACR2r determina expressamente que, em obras produzidas em colaboração com dois ou três autores sem destaque de autor principal, a entrada principal é feita sob o nome do primeiro autor mencionado na folha de rosto (campo 100 no MARC 21), criando-se entrada secundária de autor para os demais colaboradores (campo 700). A entrada principal pelo título só ocorre quando há mais de três autores e nenhum é destacado como principal (regra 21.6C2).'
      },
      {
        id: 'ci-1-q3',
        item: 'No formato MARC 21 Bibliográfico, os termos autorizados de assunto extraídos do Vocabulário Controlado da RVBI/BDCam devem ser inseridos no campo 650 com segundo indicador 7 e subcampo $2 preenchido com a sigla do vocabulário ("rvbi"), preservando formalmente a proveniência terminológica no registro.',
        gabarito: 'C',
        submoduloRef: '2.4',
        editalRef: 'Bloco D - 2.7 e 3.6',
        justificativa: 'CERTO. No padrão MARC 21 Bibliográfico para o campo 650 (Topical Term), o segundo indicador "7" especifica que o esquema ou tesauro de assunto é identificado no subcampo $2 (Source of heading or term). O uso de "rvbi" no subcampo $2 é a prática canônica cooperativa da Rede Virtual de Bibliotecas coordenada pelo Senado e integrada pela Câmara dos Deputados (Library of Congress MARC 21 Formats; Rede RVBI).'
      },
      {
        id: 'ci-1-q4',
        item: 'Ao classificar a obra na Classificação Decimal de Dewey (CDD - classe 340) e na Classificação Decimal Universal (CDU - classe 34), a síntese de assuntos na CDD permite a livre combinação de classes distintas mediante o uso do sinal de dois pontos (:), recurso de coordenação próprio herdado da tradição de Melvil Dewey.',
        gabarito: 'E',
        submoduloRef: '3.1',
        editalRef: 'Bloco D - 3.1, 3.2 e 3.3',
        justificativa: 'ERRADO. Pegadinha clássica da banca Cebraspe. O sinal de dois pontos (:) é o sinal auxiliar de relação/coordenação simples privativo da Classificação Decimal Universal (CDU), derivado da adaptação facetada e documentalista de Paul Otlet e Henri La Fontaine (1905). A CDD original de Dewey é essencialmente enumerativa e hierárquica, utilizando números compostos rígidos e tabelas auxiliares predefinidas (T1 a T6), sem o operador de dois pontos para coordenação livre de classes.'
      },
      {
        id: 'ci-1-q5',
        item: 'No âmbito do IFLA LRM e do padrão RDA, a atribuição de ponto de acesso de autoridade para os parlamentares e juristas autores mobiliza a entidade LRM Agente (e sua subclasse Pessoa), viabilizando tecnicamente a futura conversão dos registros bibliográficos legados em MARC 21 para grafos RDF e Linked Data no padrão BIBFRAME 2.0.',
        gabarito: 'C',
        submoduloRef: '2.7',
        editalRef: 'Bloco D - 1.2, 2.3 e 3.12',
        justificativa: 'CERTO. O modelo IFLA LRM redefine agentes em Agente (LRM-E6), Pessoa (LRM-E7) e Agente Coletivo (LRM-E8). A transição de catálogos relacionais baseados em campos legados MARC 21 para a Web Semântica dá-se por meio do framework BIBFRAME 2.0 (desenvolvido pela Library of Congress), que modela entidades e relacionamentos em triplas RDF (sujeito-predicado-objeto), permitindo que agentes sejam identificados por URIs persistentes interoperáveis na rede (W3C; LoC BIBFRAME 2.0).'
      }
    ]
  },
  {
    id: 'ci-2',
    numero: 2,
    titulo: 'CI-2: Publicação de Metadados de Proposições Legislativas no LexML Brasil e no Catálogo Institucional',
    subtitulo: 'Integração de Identificadores Persistentes, Crosswalks e Recuperação da Informação Jurídica',
    modulosEnvolvidos: ['m2', 'm3', 'm4'],
    modulosCodigos: ['M2', 'M3', 'M4'],
    temaGeral: 'LexML Brasil, URN LEX, XML, Crosswalk MARC-DC, Vocabulário Controlado e Recuperação da Informação',
    enunciadoContexto: `O Centro de Documentação e Informação (CEDI) e a Biblioteca da Câmara dos Deputados estão integrando a base de dados de Proposições e Pareceres Legislativos ao portal LexML Brasil e ao discovery service institucional. A arquitetura exige a atribuição de identificadores persistentes baseados no padrão URN LEX, a aplicação de crosswalk entre esquemas de metadados heterogêneos (MARC 21, Dublin Core e XML LexML) e a interoperabilidade semântica entre os termos livres das ementas legislativas e o Vocabulário Controlado da RVBI. Considerando as exigências de tratamento da informação jurídica, julgue os itens subsequentes.`,
    questoes: [
      {
        id: 'ci-2-q1',
        item: 'O padrão URN LEX adota uma estrutura puramente hierárquica baseada em protocolo HTTP dinâmico, sendo sua persistência e integridade garantidas pela invariabilidade do endereço IP do servidor web da Câmara dos Deputados.',
        gabarito: 'E',
        submoduloRef: '4.3',
        editalRef: 'Bloco E - 2.4 e 2.6',
        justificativa: 'ERRADO. A URN LEX é um identificador persistente do tipo Uniform Resource Name (conforme a RFC 2141 / RFC 8141), e não uma URL dependente de localização física, protocolo de transporte (como HTTP) ou endereço IP de servidor. A URN LEX codifica autoridade emissora, tipo de documento, data e evento numa sintaxe independente da localização do arquivo (ex.: "urn:lex:br:federal:lei:2020-09-18;14063"), sendo resolvida para URLs reais por meio de um serviço de resolução descentralizado do LexML.'
      },
      {
        id: 'ci-2-q2',
        item: 'No mapeamento semântico (crosswalk) entre o formato MARC 21 Bibliográfico e o conjunto de elementos Dublin Core simples (15 elementos), o campo MARC 245 é mapeado para o elemento dc:title, ocorrendo perda de granularidade dos subcampos $b (subtítulo) e $c (indicação de responsabilidade), fenômeno estrutural típico da conversão de esquemas ricos para esquemas simplificados.',
        gabarito: 'C',
        submoduloRef: '2.6',
        editalRef: 'Bloco A - 3.4 e Bloco E - 1.10',
        justificativa: 'CERTO. Um crosswalk (tabela de concordância ou mapeamento semântico) entre esquemas de complexidades díspares — como o MARC 21 (altamente granular, com centenas de campos e subcampos) e o Dublin Core simples (apenas 15 elementos sem qualificadores) — acarreta inevitável achatamento ou perda de granularidade (down-mapping). Os dados dos subcampos $a, $b e $c do campo 245 são concatenados no elemento único "dc:title" (Library of Congress MARC-to-Dublin Core Crosswalk; NISO Z39.85).'
      },
      {
        id: 'ci-2-q3',
        item: 'Os relacionamentos conceituais no Tesauro da RVBI representados na linguagem SKOS (Simple Knowledge Organization System) utilizam a propriedade skos:broader para indicar termos associativos de mesmo nível hierárquico e a propriedade skos:related para indicar termos genéricos subordinantes.',
        gabarito: 'E',
        submoduloRef: '3.4',
        editalRef: 'Bloco A - 3.6 e 3.7',
        justificativa: 'ERRADO. A banca inverte as definições fundamentais do padrão SKOS (W3C Recommendation, 2009). No modelo SKOS: (1) `skos:broader` expressa relacionamento hierárquico de subordinação (Termo Mais Amplo / Termo Genérico - TG); (2) `skos:narrower` expressa termo mais específico (TE); e (3) `skos:related` expressa relacionamento associativo não hierárquico (Termo Associado - TA).'
      },
      {
        id: 'ci-2-q4',
        item: 'Na indexação e busca textual de proposições legislativas para alimentar o mecanismo do LexML, o cálculo de relevância dos resultados pode associar o modelo vetorial de ponderação TF-IDF (Frequência do Termo e Frequência Inversa no Documento) nas ementas com filtros exatos booleanos por espécie normativa e data, equilibrando revocação e precisão.',
        gabarito: 'C',
        submoduloRef: '4.1',
        editalRef: 'Bloco B - 3.1, 3.2 e 3.6',
        justificativa: 'CERTO. A abordagem híbrida de busca da informação jurídica conjuga o rigor booleano para metadados estruturados (tipo de proposição, ano, comissão) com a flexibilidade da ponderação vetorial TF-IDF ou BM25 sobre o texto integral e ementas (Salton & McGill, 1983; Manning, Raghavan & Schütze). Isso evita o "silêncio" informacional em buscas amplas e mitiga o "ruído" em buscas refinadas.'
      },
      {
        id: 'ci-2-q5',
        item: 'O portal LexML Brasil funciona como uma rede federada de recuperação da informação legislativa e jurídica, na qual os órgãos provedores de dados mantêm a custódia de seus documentos primários e disponibilizam periodicamente metadados em XML estruturado compatível com o esquema aberto do LexML.',
        gabarito: 'C',
        submoduloRef: '4.3',
        editalRef: 'Bloco E - 2.4 e 2.5',
        justificativa: 'CERTO. O LexML Brasil é concebido como uma arquitetura distribuída e federada: cada órgão legislativo ou judiciário (Câmara, Senado, STF, Tribunais Regionais) mantém a guarda soberana de seus acervos originais, alimentando o nó integrador nacional por meio de coletores OAI-PMH e esquemas XML padronizados (Decreto nº 6.932/2009 e especificações técnicas LexML Brasil).'
      }
    ]
  },
  {
    id: 'ci-3',
    numero: 3,
    titulo: 'CI-3: Repositório Institucional Confiável e Preservação Digital de Longo Prazo do Patrimônio Parlamentar',
    subtitulo: 'Integração entre Modelo OAIS (ISO 14721), Fixidez PREMIS, Protocolo OAI-PMH e Acesso Aberto',
    modulosEnvolvidos: ['m6', 'm7', 'm9'],
    modulosCodigos: ['M6', 'M7', 'M9'],
    temaGeral: 'Preservação digital (OAIS, PREMIS, RDC-Arq), OAI-PMH, Conservação preventiva e Licenças Abertas',
    enunciadoContexto: `A Câmara dos Deputados aprovou a modernização de seu Repositório Institucional Digital (BDCam) com vistas a obter a certificação de Repositório Digital Confiável (RDC-Arq / ISO 16363). O repositório abriga tanto a produção técnico-científica dos consultores legislativos quanto anais históricos, manuscritos parlamentares digitalizados dos séculos XIX e XX e dados de pesquisas abertas. A infraestrutura adota a plataforma DSpace, implementa o modelo de referência OAIS (ISO 14721), metadados de preservação PREMIS, estratégias de fixidez criptográfica e colheita via protocolo OAI-PMH. Com base nas boas práticas de preservação e comunicação científica, julgue os itens que se seguem.`,
    questoes: [
      {
        id: 'ci-3-q1',
        item: 'Segundo o modelo OAIS (ISO 14721), os pacotes de informação submetidos pelos consultores legislativos (SIP) são transformados internamente em pacotes de arquivamento (AIP) com metadados de preservação PREMIS, gerando pacotes de disseminação (DIP) quando solicitados pelos cidadãos no portal de acesso aberto.',
        gabarito: 'C',
        submoduloRef: '6.3',
        editalRef: 'Bloco E - 1.8 e 1.14',
        justificativa: 'CERTO. O modelo de referência OAIS (ISO 14721:2012) estrutura o ciclo do repositório em três entidades de informação canônicas: (1) SIP (Submission Information Package), entregue pelo produtor; (2) AIP (Archival Information Package), enriquecido com metadados de proveniência e preservação (PREMIS) e armazenado na custódia de longo prazo; e (3) DIP (Dissemination Information Package), gerado e entregue ao usuário final ou consumidor.'
      },
      {
        id: 'ci-3-q2',
        item: 'Em repositórios digitais confiáveis, a fixidez (fixity) dos arquivos digitais é comprovada satisfatoriamente pela conferência periódica dos carimbos de data e hora do sistema de arquivos do servidor, sendo dispensável o cômputo e registro de hashes criptográficos como SHA-256 no dicionário de dados PREMIS.',
        gabarito: 'E',
        submoduloRef: '6.3',
        editalRef: 'Bloco E - 1.14 e Bloco B - 4.2',
        justificativa: 'ERRADO. Em preservação digital e segundo o dicionário de dados PREMIS (Data Dictionary for Preservation Metadata), a fixidez exige a geração e validação sistemática de algoritmos de hash criptográfico de via única (como SHA-256 ou SHA-512) para cada arquivo binário. O carimbo de data/hora do sistema operacional pode ser alterado por simples operações de leitura/cópia ou por atacantes, não fornecendo nenhuma garantia matemática de integridade bit a bit contra degradação (*bit rot*) ou adulteração.'
      },
      {
        id: 'ci-3-q3',
        item: 'A disponibilização da produção intelectual da Consultoria Legislativa sob licenças Creative Commons do tipo CC BY-NC-SA harmoniza o princípio do Acesso Aberto com as limitações patrimoniais da Lei nº 9.610/1998, viabilizando o reuso educacional e vedando a apropriação comercial privada por terceiros.',
        gabarito: 'C',
        submoduloRef: '9.3',
        editalRef: 'Bloco D - 4.9 e Bloco E - 1.6',
        justificativa: 'CERTO. As licenças Creative Commons operam no modelo "alguns direitos reservados", em conformidade com a Lei de Direitos Autorais (Lei nº 9.610/1998). A licença CC BY-NC-SA (Atribuição - Não Comercial - Compartilha Igual) autoriza terceiros a remixar, adaptar e criar a partir da obra para fins não comerciais, desde que atribuam o crédito aos autores originais da Câmara e licenciem as novas criações sob os mesmos termos (Manifesto de Budapeste de Acesso Aberto; Creative Commons International).'
      },
      {
        id: 'ci-3-q4',
        item: 'O protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) opera sobre o protocolo HTTP e emprega verbos como ListRecords para permitir que agregadores e indexadores globais realizem a colheita em lote de metadados descritivos em Dublin Core do repositório da Câmara, sem demandar a transferência compulsória dos arquivos binários correspondentes.',
        gabarito: 'C',
        submoduloRef: '6.2',
        editalRef: 'Bloco E - 1.9 e 1.10',
        justificativa: 'CERTO. O protocolo OAI-PMH (versão 2.0) foi desenhado especificamente para a colheita interoperável de metadados (metadata harvesting), operando mediante requisições HTTP GET/POST com respostas estruturadas em XML. O verbo `ListRecords` extrai metadados completos em formato padrão Dublin Core (ou outros esquemas suportados), trafegando dados descritivos sem necessidade de baixar os arquivos de conteúdo digital integral (Lagoze et al., 2002).'
      },
      {
        id: 'ci-3-q5',
        item: 'Para documentos textuais e manuscritos históricos dos séculos XIX e XX preservados em meio digital, a estratégia de normalização autoriza o descarte sumário das matrizes em formato TIFF descompactado (ISO 12639), bastando conservar cópias compactadas com perdas em formato JPEG convencional para assegurar economia de espaço de armazenamento no repositório.',
        gabarito: 'E',
        submoduloRef: '7.3',
        editalRef: 'Bloco E - 1.14 e Bloco D - 4.8',
        justificativa: 'ERRADO. Na preservação digital arquivística de documentos históricos (conforme normas do CONARQ, RDC-Arq e ISO 14721), a matriz master de preservação digital deve ser mantida indefinidamente em formato padronizado aberto e sem compactação com perdas (como TIFF sem compressão ou PDF/A partes 1 ou 2 - ISO 19005). O descarte do master em favor de formatos com perdas (JPEG lossy) constitui erro grave de preservação, ocasionando degradação visual e inviabilizando futuras restaurações digitais.'
      }
    ]
  },
  {
    id: 'ci-4',
    numero: 4,
    titulo: 'CI-4: Política de Governança de Dados, RAG e Inteligência Artificial no Atendimento da Biblioteca Parlamentar',
    subtitulo: 'Convergência entre DAMA-DMBOK2, Modelos Generativos em RAG, Gestão de Riscos e LGPD',
    modulosEnvolvidos: ['m1', 'm5', 'm6'],
    modulosCodigos: ['M1', 'M5', 'M6'],
    temaGeral: 'Governança de Dados (DAMA-DMBOK2), IA Generativa e RAG, Gestão de Riscos e LGPD',
    enunciadoContexto: `A Diretoria da Câmara dos Deputados autorizou a implantação de um assistente de inteligência artificial de suporte consultivo aos gabinetes parlamentares e comissões temáticas, gerido tecnicamente pela equipe da Biblioteca Pedro Aleixo. O sistema opera em arquitetura RAG (Retrieval-Augmented Generation), ingerindo notas técnicas, proposições legislativas, dados abertos e relatórios setoriais. Paralelamente, instituiu-se uma Política de Governança de Dados e IA alinhada ao framework DAMA-DMBOK2, com gestão de riscos informacionais conforme a ISO/IEC 27005 e estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018). Julgue os itens subsequentes.`,
    questoes: [
      {
        id: 'ci-4-q1',
        item: 'Segundo as diretrizes de governança do framework DAMA-DMBOK2, o Data Owner dos acervos bibliográficos e legislativos detém a autoridade e responsabilidade executiva de definir políticas de classificação e acesso aos dados, ao passo que o Data Steward bibliotecário atua como zelador operacional da consistência, integridade e qualidade dos metadados ingeridos pela base vetorial.',
        gabarito: 'C',
        submoduloRef: '1.6',
        editalRef: 'Bloco A - 2.1, 2.2 e 2.3',
        justificativa: 'CERTO. No framework DAMA-DMBOK2 (2ª edição, 2017), a distinção estrutural estabelece que: (1) o Data Owner (Proprietário do Dado) possui autoridade decisória estratégica e responsabilização corporativa sobre a posse, uso e classificação do ativo informacional; (2) o Data Steward (Curador/Zelador) atua como especialista funcional no dia a dia, zelando por regras de qualidade, definições de vocabulários, metadados e ciclo de vida do dado.'
      },
      {
        id: 'ci-4-q2',
        item: 'A arquitetura RAG (Retrieval-Augmented Generation) aplicada a serviços de referência parlamentar mitiga substancialmente o risco de alucinação de modelos generativos, pois ancora a resposta em trechos (chunks) recuperados de documentos oficiais autênticos da Câmara, não prescindindo, contudo, de supervisão humana (human-in-the-loop) para consultas com impacto normativo.',
        gabarito: 'C',
        submoduloRef: '6.7',
        editalRef: 'Bloco C - 2.8, 2.9 e Bloco B - 3.7',
        justificativa: 'CERTO. Conforme demonstrado no artigo canônico de Lewis et al. (2020), o RAG ancora a geração probabilística do modelo de linguagem (LLM) em evidências recuperadas de uma base de conhecimento factual. Isso reduz sensivelmente a alucinação (confabulação), mas não a elimina a 100%. Em ambientes legislativos sensíveis, o princípio da supervisão profissional humana (human-in-the-loop) é mandatário para validação de análises doutrinárias e pareceres regimentais.'
      },
      {
        id: 'ci-4-q3',
        item: 'A ingestão e vetorização de notas taquigráficas que contenham menções incidentais a dados pessoais de cidadãos em sessões públicas dispensa a observância dos princípios da LGPD, uma vez que dados manifestamente públicos na internet são classificados como de domínio público universal, imunes a qualquer controle de finalidade ou boa-fé.',
        gabarito: 'E',
        submoduloRef: '1.6',
        editalRef: 'Bloco A - 4.1 e Bloco C - 2.10',
        justificativa: 'ERRADO. Alerta Cebraspe crucial. A Lei nº 13.709/2018 (LGPD), no seu art. 7º, §§ 3º e 4º, estipula expressamente que o tratamento de dados pessoais cujo acesso é público deve resguardar a boa-fé e os fins específicos que justificaram sua disponibilização originária. A dispensa do consentimento para dados tornados manifestamente públicos pelo titular não autoriza o uso para finalidades abusivas ou incompatíveis, tampouco afasta os princípios da finalidade, necessidade, segurança e prevenção.'
      },
      {
        id: 'ci-4-q4',
        item: 'Em bancos de dados relacionais que sustentam o catálogo automatizado da biblioteca, o modelo entidade-relacionamento (MER) e as restrições de chave estrangeira são técnica e conceitualmente idênticos às entidades e relacionamentos do modelo IFLA LRM, podendo a normalização em 3ª Forma Normal substituir o controle de autoridade RDA.',
        gabarito: 'E',
        submoduloRef: '6.5',
        editalRef: 'Bloco B - 1.2, 1.4 e Bloco D - 1.2',
        justificativa: 'ERRADO. Alerta Cebraspe explícito do Master Plan. O MER (Modelo Entidade-Relacionamento) de Peter Chen (1976) e as formas normais de Codd são técnicas computacionais genéricas de modelagem lógica e física de bancos de dados. Já o IFLA LRM (Library Reference Model) é um modelo conceitual do universo informacional bibliográfico. Uma chave estrangeira em SQL garante integridade referencial relacional em tabelas computacionais, mas não equivale ao controle semântico de autoridades intelectuais (autor, título uniforme, vocabulário) exigido pelo RDA.'
      },
      {
        id: 'ci-4-q5',
        item: 'No monitoramento da acurácia do assistente de inteligência artificial da biblioteca, a avaliação técnica deve abranger tanto métricas de recuperação informacional (como precisão e revocação dos fragmentos documentais selecionados) quanto métricas de geração linguística, a exemplo da fundamentação fática (groundedness) da resposta em relação ao contexto fornecido.',
        gabarito: 'C',
        submoduloRef: '6.7',
        editalRef: 'Bloco C - 2.8 e Bloco B - 3.8',
        justificativa: 'CERTO. Em sistemas de IA operando em arquitetura RAG, a avaliação desdobra-se em duas camadas indispensáveis: (1) o subsistema de recuperação (*retrieval*), aferido por métricas clássicas de RI (precisão, revocação, MRR); e (2) o subsistema de síntese generativa (*generation*), avaliado por métricas de fidelidade factual (*groundedness* / *faithfulness* - proporção de alegações sustentadas diretamente pelo contexto recuperado) e relevância da resposta em relação à pergunta original.'
      }
    ]
  },
  {
    id: 'ci-5',
    numero: 5,
    titulo: 'CI-5: Serviço de Referência Legislativa e Tramitação Regimental de Proposições Concorrentes',
    subtitulo: 'Conexão entre Entrevista de Referência, RICD, Regimento Comum, LAI e Regime do Servidor',
    modulosEnvolvidos: ['m10', 'm11', 'm4'],
    modulosCodigos: ['M10', 'M11', 'M4'],
    temaGeral: 'Entrevista de referência (Grogan/Katz), Processo Legislativo (RICD e Regimento Comum), LAI e Lei 8.112/90',
    enunciadoContexto: `Um Analista Legislativo - Bibliotecário lotado na Seção de Atendimento e Referência da Biblioteca da Câmara recebe uma solicitação com urgência do gabinete de uma liderança partidária. O parlamentar solicita a compilação de um dossiê informativo circunstanciado sobre duas proposições concorrentes que versam sobre a regulação de plataformas digitais e inteligência artificial no Brasil, requisitando: (1) histórico detalhado de tramitação do projeto principal e dos apensados, com base no RICD e na Constituição Federal; (2) identificação das comissões temáticas competentes e regimes de tramitação aplicáveis; e (3) disponibilização de pareceres, notas taquigráficas e estudos preliminares com fundamento na Lei de Acesso à Informação (Lei nº 12.527/2011). Considerando a técnica da entrevista de referência e a disciplina normativa do processo legislativo e do serviço público, julgue os itens a seguir.`,
    questoes: [
      {
        id: 'ci-5-q1',
        item: 'Na fase inicial da entrevista de referência (abertura e negociação da questão, segundo a doutrina de Denis Grogan), o bibliotecário deve aceitar passivamente a formulação textual exata apresentada pelo assessor do parlamentar sem efetuar perguntas clarificadoras, sob pena de cometer usurpação de competência regimental e quebra de sigilo funcional.',
        gabarito: 'E',
        submoduloRef: '4.4',
        editalRef: 'Bloco E - 3.2 e 3.5',
        justificativa: 'ERRADO. Conforme a doutrina clássica de Denis Grogan (1995) e William Katz sobre o serviço de referência, o bibliotecário não deve aceitar cegamente a primeira formulação da questão ("pergunta de compromisso" ou necessidade expressa). A negociação da questão é a fase técnica crucial para diagnosticar a necessidade real de informação do consulente, identificando prazos, nível de aprofundamento, escopo temporal e contexto de uso, sem que isso configure qualquer interferência indevida na atuação parlamentar.'
      },
      {
        id: 'ci-5-q2',
        item: 'Conforme as disposições do Regimento Interno da Câmara dos Deputados (RICD), quando duas proposições da mesma espécie regulam matéria idêntica ou correlata, a tramitação conjunta deve ser procedida mediante o apensamento da proposição mais recente à mais antiga, ato de competência do Presidente da Câmara ou determinado por deliberação de comissão temática.',
        gabarito: 'C',
        submoduloRef: '10.1',
        editalRef: 'Básicos - RICD arts. 139 a 143',
        justificativa: 'CERTO. O art. 142 e seguintes do RICD disciplinam a tramitação conjunta de proposições. A regra regimental determina que, havendo proposições com matéria idêntica ou correlata da mesma espécie, a mais recente é apensada à mais antiga (que se torna a proposição principal), cabendo o ato ao Presidente da Mesa Diretora da Câmara dos Deputados, ex officio ou a requerimento de qualquer Deputado ou Comissão (RICD art. 142).'
      },
      {
        id: 'ci-5-q3',
        item: 'À luz da Lei de Acesso à Informação (Lei nº 12.527/2011), as notas técnicas da Consultoria Legislativa e as pesquisas temáticas da Biblioteca que subsidiam a instrução de projetos de lei em comissões são documentos públicos em sua essência, subordinados ao princípio da publicidade ampla e acessíveis a qualquer cidadão, ressalvadas apenas as parcelas formalmente classificadas com fundamento em hipóteses legais de sigilo.',
        gabarito: 'C',
        submoduloRef: '11.12',
        editalRef: 'Básicos - LAI (Lei 12.527/2011) e Bloco A - 4.1',
        justificativa: 'CERTO. A LAI (Lei nº 12.527/2011, arts. 3º e 7º) consagrou a publicidade como preceito geral e o sigilo como exceção. Estudos, notas técnicas e pesquisas elaboradas por órgãos de consultoria parlamentar e bibliotecas legislativas voltados a subsidiar o processo legiferante constituem documentos públicos, garantindo-se o direito de acesso e transparência ativa/passiva, salvo se recaírem em hipóteses expressas de sigilo legal (segurança nacional ou dados pessoais protegidos).'
      },
      {
        id: 'ci-5-q4',
        item: 'Caso o bibliotecário responsável pelo atendimento legislativo seja convidado a prestar assessoria técnica contínua junto à assessoria de um Ministério do Poder Executivo em Brasília, essa movimentação dar-se-á compulsoriamente pelo instituto da redistribuição de cargo, perdendo o servidor o vínculo funcional original com o quadro de pessoal da Câmara dos Deputados.',
        gabarito: 'E',
        submoduloRef: '11.3',
        editalRef: 'Básicos - Lei 8.112/1990 art. 93 e Lei 9.007/1995',
        justificativa: 'ERRADO. A movimentação temporária de servidor público federal para prestar serviços em órgão de outro Poder ou Ministério dá-se por *cessão* ou *requisição* (Lei nº 8.112/1990, art. 93 e Lei nº 9.007/1995), com ônus para o órgão cessionário no caso de exercício de cargo em comissão ou função de confiança, preservando-se intacto o vínculo do servidor com o seu cargo efetivo na Câmara dos Deputados. A *redistribuição* (art. 37 da Lei 8.112/90) é deslocamento de cargo efetivo ocupado ou vago no interesse da administração, não aplicável a cessões funcionais interorgânicas.'
      },
      {
        id: 'ci-5-q5',
        item: 'Na hipótese de deliberação sobre o veto presidencial a projeto de lei aprovado pelo Congresso Nacional, a sessão conjunta disciplinada pelo art. 66 da Constituição Federal e pelo Regimento Comum (Resolução nº 1/1970-CN) é presidida pelo Presidente do Senado Federal, computando-se os votos separadamente na Câmara dos Deputados e no Senado para a verificação de maioria absoluta necessária à rejeição do veto.',
        gabarito: 'C',
        submoduloRef: '10.6',
        editalRef: 'Básicos - CF/88 art. 57 e 66; Resolução nº 1/1970-CN',
        justificativa: 'CERTO. Nos termos do art. 57, § 5º, e art. 66, § 4º, da Constituição Federal de 1988, combinados com o Regimento Comum do Congresso Nacional (Resolução nº 1/1970-CN, arts. 42 a 46): a sessão conjunta do Congresso Nacional é dirigida pela Mesa do Congresso, presidida pelo Presidente do Senado Federal; e o veto presidencial só pode ser rejeitado pelo voto da maioria absoluta dos Deputados (257 votos) E dos Senadores (41 votos), computados em escrutínios separados.'
      }
    ]
  }
];
