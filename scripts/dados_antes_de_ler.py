"""
Banco canônico de termos 'antesDeLer' para os 69 submódulos que estavam sem pré-requisitos conceituais.
Cada termo possui:
- termo: Conceito essencial para a fluência na leitura
- definicao: Conceituação canônica e alinhada ao rigor do Cebraspe
- exemploBiblioteca: Aplicação prática na Biblioteca da Câmara dos Deputados, CEDI, RVBI ou rotina legislativa
"""

DADOS_ANTES_DE_LER = {
    # =========================================================================
    # MÓDULO 1: FUNDAMENTOS, HISTÓRIA E EPISTEMOLOGIA
    # =========================================================================
    "1.1": [
        {
            "termo": "Documentação",
            "definicao": "Disciplina fundada por Paul Otlet e Henri La Fontaine voltada à reunião, organização e disseminação de informações registradas em qualquer suporte físico ou gráfico.",
            "exemploBiblioteca": "Na Biblioteca da Câmara, o princípio monográfico de Otlet fundamenta a indexação granular de artigos de periódicos e capítulos de livros parlamentares.",
        },
        {
            "termo": "Ciência da Informação",
            "definicao": "Campo interdisciplinar que investiga as propriedades, o comportamento, as forças que regem o fluxo e os meios de processamento da informação para sua ótima acessibilidade.",
            "exemploBiblioteca": "A modelagem dos fluxos de busca na base de dados legislativa do portal da Câmara reflete diretamente os princípios da Ciência da Informação.",
        },
        {
            "termo": "Princípio Monográfico",
            "definicao": "Metodologia preconizada por Paul Otlet consistente em fragmentar o conteúdo intelectual em fichas e unidades conceituais autônomas para facilitar a classificação e recombinação.",
            "exemploBiblioteca": "Fichamento analítico de pareceres e notas técnicas da Consultoria Legislativa da Câmara.",
        },
        {
            "termo": "IFLA",
            "definicao": "Federação Internacional de Associações e Instituições Bibliotecárias; principal organismo não governamental global que define diretrizes para a prática profissional e manifestos de bibliotecas.",
            "exemploBiblioteca": "Adoção das diretrizes do IFLA LRM e dos manifestos sobre bibliotecas digitais no catálogo unificado da Rede Virtual de Bibliotecas (RVBI).",
        },
    ],
    "1.2": [
        {
            "termo": "Cinco Leis de Ranganathan",
            "definicao": "Conjunto de enunciados normativos formulados por S. R. Ranganathan em 1931 que regem a filosofia, a organização e o serviço de referência das bibliotecas modernas.",
            "exemploBiblioteca": "A 4ª lei ('Poupe o tempo do leitor') orienta a criação de alertas legislativos rápidos e dossiês sintéticos para os parlamentares em plenário.",
        },
        {
            "termo": "Biblioteca como Organismo em Crescimento",
            "definicao": "Quinta lei de Ranganathan que determina a necessidade de planejamento constante de espaço físico, sistemas digitais e expansão contínua da equipe e das coleções.",
            "exemploBiblioteca": "A ampliação do repositório digital BDCam e a migração de servidores para nuvem refletem a adaptação contínua da biblioteca.",
        },
        {
            "termo": "Livre Acesso às Estantes",
            "definicao": "Prática introduzida na biblioteconomia moderna decorrente da 1ª lei ('Os livros são para usar'), superando o paradigma custodial de acervos trancados.",
            "exemploBiblioteca": "Organização do acervo de livre consulta na sala de leitura da Biblioteca Pedro Aleixo.",
        },
        {
            "termo": "Mediação da Informação",
            "definicao": "Ação de interferência realizada pelo bibliotecário entre o usuário e os recursos informacionais para viabilizar a apropriação do conhecimento.",
            "exemploBiblioteca": "Atendimento especializado aos assessores parlamentares na formulação de estratégias de busca sobre proposições legislativas.",
        },
    ],
    "1.3": [
        {
            "termo": "Dado",
            "definicao": "Registro bruto de um evento ou símbolo desprovido de contexto, interpretação ou significação direta.",
            "exemploBiblioteca": "O número 'PL 2630' isolado em uma planilha de controle de tramitação.",
        },
        {
            "termo": "Informação",
            "definicao": "Conjunto de dados contextualizados, dotados de significado e organizados para alterar o estado de conhecimento de um indivíduo.",
            "exemploBiblioteca": "O texto completo do relatório com parecer favorável da Comissão de Constituição e Justiça.",
        },
        {
            "termo": "Conhecimento",
            "definicao": "Informação internalizada, compreendida e integrada à estrutura cognitiva e à experiência prática do sujeito.",
            "exemploBiblioteca": "A compreensão dos impactos jurídicos de uma emenda regimental pelo bibliotecário ao elaborar uma pesquisa legislativa.",
        },
        {
            "termo": "Documento (Ontologia de Briet)",
            "definicao": "Qualquer suporte material preservado ou registrado para fins de prova, consulta ou demonstração de um fenômeno, segundo Suzanne Briet.",
            "exemploBiblioteca": "Um áudio taquigráfico gravado durante sessão da CPI arquivado digitalmente no CEDI.",
        },
    ],
    "1.4": [
        {
            "termo": "CFB / CRB",
            "definicao": "Conselho Federal e Conselhos Regionais de Biblioteconomia, autarquias federais dotadas de personalidade jurídica de direito público que fiscalizam o exercício profissional.",
            "exemploBiblioteca": "Exigência de registro ativo no CRB-1 (Distrito Federal) para a posse no cargo de Analista Legislativo - Biblioteconomia.",
        },
        {
            "termo": "Lei nº 4.084/1962",
            "definicao": "Lei federal que dispõe sobre a profissão de bibliotecário e regula suas funções privativas em todo o território nacional.",
            "exemploBiblioteca": "Fundamentação legal para que a direção e chefia da Biblioteca da Câmara sejam exercidas privativamente por bibliotecários de carreira.",
        },
        {
            "termo": "Código de Ética do Bibliotecário",
            "definicao": "Resolução do CFB que estabelece deveres, vedações, direitos e responsabilidades ético-profissionais em relação aos usuários e à sociedade.",
            "exemploBiblioteca": "Preservação estrita do sigilo sobre temas e proposições sensíveis pesquisadas por gabinetes parlamentares.",
        },
        {
            "termo": "Atribuições Privativas",
            "definicao": "Atividades técnicas que a legislação brasileira reserva com exclusividade ao bacharel em Biblioteconomia registrado no respectivo conselho.",
            "exemploBiblioteca": "Classificação, catalogação de acervos bibliográficos e emissão de pareceres técnicos sobre serviços de informação.",
        },
    ],
    "1.5": [
        {
            "termo": "Função Social da Biblioteca",
            "definicao": "Papel das unidades de informação como instrumentos de emancipação cidadã, preservação da memória democrática e redução de desigualdades sociais.",
            "exemploBiblioteca": "Abertura do acervo da Biblioteca Pedro Aleixo à consulta de cidadãos, pesquisadores acadêmicos e movimentos sociais.",
        },
        {
            "termo": "Mediação Cultural",
            "definicao": "Prática que promove a interação reflexiva e dialógica do usuário com as linguagens artísticas, literárias e informacionais no espaço da biblioteca.",
            "exemploBiblioteca": "Exposições temáticas sobre os 200 anos do Parlamento Brasileiro integrando obras raras e documentos do arquivo histórico.",
        },
        {
            "termo": "Letramento Informacional",
            "definicao": "Processo de desenvolvimento de competências para reconhecer a necessidade de informação, localizá-la, avaliá-la criticamente e utilizá-la eticamente.",
            "exemploBiblioteca": "Oficinas de capacitação para servidores e estagiários da Câmara sobre busca avançada em bases legislativas e acadêmicas.",
        },
        {
            "termo": "Democratização do Acesso",
            "definicao": "Garantia de que todo cidadão tenha acesso irrestrito às fontes de informação públicas sem barreiras físicas, econômicas ou tecnológicas.",
            "exemploBiblioteca": "Disponibilização universal das publicações da Edições Câmara em formato digital aberto no portal institucional.",
        },
    ],
    "1.6": [
        {
            "termo": "Governança de Dados (DAMA-DMBOK2)",
            "definicao": "Exercício de autoridade, controle e planejamento sobre a gestão de ativos de dados dentro de uma organização.",
            "exemploBiblioteca": "Definição de papéis de custódia e padrões de metadados para os documentos digitais no ecossistema da Câmara.",
        },
        {
            "termo": "Dados Mestres (Master Data)",
            "definicao": "Dados fundamentais e consistentes que fornecem o contexto central para transações de negócio através de toda a instituição.",
            "exemploBiblioteca": "Tabela padronizada de autores corporativos governamentais e parlamentares utilizada conjuntamente pelo CEDI e pelo Plenário.",
        },
        {
            "termo": "Data Stewardship",
            "definicao": "Atividade operacional e tática de zelar pela qualidade, conformidade, segurança e integridade de conjuntos de dados sob sua responsabilidade.",
            "exemploBiblioteca": "O bibliotecário atuando como curador responsável por validar metadados e metadados de preservação no repositório institucional.",
        },
        {
            "termo": "Dicionário de Dados",
            "definicao": "Repositório centralizado de metadados que descreve o significado, a estrutura, as relações e os formatos dos elementos de dados.",
            "exemploBiblioteca": "Documento técnico que padroniza os campos de busca e filtros do Sistema de Informações Legislativas (Sileg).",
        },
    ],

    # =========================================================================
    # MÓDULO 2: REPRESENTAÇÃO DESCRITIVA E METADADOS
    # =========================================================================
    "2.1": [
        {
            "termo": "Princípios Internacionais de Catalogação (ICP)",
            "definicao": "Declaração emitida pela IFLA que orienta a formulação de códigos de catalogação globais baseados nos interesses primordiais dos usuários.",
            "exemploBiblioteca": "Adesão aos ICP na definição de pontos de acesso de pessoas e órgãos públicos no catálogo da RVBI.",
        },
        {
            "termo": "Ponto de Acesso Principal",
            "definicao": "Nome, título ou termo formal escolhido de acordo com as regras de catalogação para encabeçar o registro de uma obra no catálogo.",
            "exemploBiblioteca": "Determinar se um projeto de lei com múltiplos signatários deve ter como entrada principal o primeiro autor ou o título.",
        },
        {
            "termo": "Controle de Autoridade",
            "definicao": "Processo de padronização dos pontos de acesso para garantir que autores, títulos uniformes e assuntos tenham uma única forma autorizada.",
            "exemploBiblioteca": "Registro de autoridade unificado para 'BRASIL. Congresso Nacional. Câmara dos Deputados' com suas remissivas 'ver' e 'ver também'.",
        },
        {
            "termo": "Áreas de Descrição do AACR2r",
            "definicao": "Oito áreas padronizadas baseadas na ISBD (título, edição, publicação, descrição física, série, notas, etc.) com pontuação prescrita.",
            "exemploBiblioteca": "Aplicação de espaço-travessão-espaço ( . — ) entre áreas na catalogação tradicional de monografias e relatórios parlamentares.",
        },
    ],
    "2.2": [
        {
            "termo": "RDA (Resource Description and Access)",
            "definicao": "Padrão de catalogação concebido para o ambiente digital, estruturado com base nos modelos conceituais da IFLA (LRM/FRBR).",
            "exemploBiblioteca": "Catalogação de relatórios técnicos digitais na Biblioteca da Câmara identificando claramente obra, expressão, manifestação e item.",
        },
        {
            "termo": "Projeto 3R (RDA Steering Committee)",
            "definicao": "Projeto de reestruturação do RDA Toolkit para alinhamento estrito ao IFLA LRM e adaptação às tecnologias de Linked Data.",
            "exemploBiblioteca": "Transição dos manuais de catalogação da RVBI para contemplar entidades e relacionamentos orientados a grafos.",
        },
        {
            "termo": "Entidades WEMI",
            "definicao": "Work (Obra), Expression (Expressão), Manifestation (Manifestação) e Item: entidades centrais do modelo do Grupo 1 do FRBR mantidas no RDA.",
            "exemploBiblioteca": "Diferenciar a Constituição de 1988 (Obra), sua tradução para o inglês (Expressão), a edição impressa da Edições Câmara (Manifestação) e o exemplar com dedicatória (Item).",
        },
        {
            "termo": "WEMI na Prática",
            "definicao": "Abordagem que separa a criação intelectual e artística de suas realizações físicas ou formatos de arquivo.",
            "exemploBiblioteca": "Evitar duplicidade de registros ao ligar múltiplos arquivos PDF de uma mesma emenda constitucional a uma única entidade Obra.",
        },
    ],
    "2.3": [
        {
            "termo": "IFLA LRM (Library Reference Model)",
            "definicao": "Modelo conceitual unificado de alto nível desenvolvido pela IFLA que consolidou FRBR, FRAD e FRSAD em uma estrutura única entidade-relacionamento.",
            "exemploBiblioteca": "Modelagem dos dados bibliográficos da Câmara dos Deputados para viabilizar buscas semânticas avançadas.",
        },
        {
            "termo": "Res (Entidade Raiz)",
            "definicao": "Entidade topo do IFLA LRM que abrange qualquer coisa que possa ser objeto de discurso ou interesse intelectual.",
            "exemploBiblioteca": "Classificar tanto um projeto de lei quanto o conceito de 'Reforma Tributária' como instâncias de Res.",
        },
        {
            "termo": "Agente (Agent)",
            "definicao": "Entidade do LRM que reúne Pessoas e Coletividades dotadas de capacidade de agir e assumir responsabilidade sobre criações.",
            "exemploBiblioteca": "Tratamento unificado para Deputados (Pessoa) e Comissões Permanentes (Coletividade) como criadores de relatórios legislativos.",
        },
        {
            "termo": "Tarefas do Usuário (User Tasks)",
            "definicao": "Objetivos funcionais do usuário nos catálogos modernos: Encontrar (Find), Identificar (Identify), Selecionar (Select), Obter (Obtain) e Explorar (Explore).",
            "exemploBiblioteca": "Avaliação da usabilidade do catálogo da biblioteca verificando se o usuário consegue 'Explorar' relações temáticas entre leis correlatas.",
        },
    ],
    "2.4": [
        {
            "termo": "Formato MARC 21",
            "definicao": "Padrão de metadados legível por máquina composto por campos numéricos de 3 dígitos (tags), indicadores e subcampos ($a, $b, etc.).",
            "exemploBiblioteca": "Preenchimento do campo 245 com título da proposição e 100/110 com a autoria parlamentar ou governamental.",
        },
        {
            "termo": "Tabela Cutter-Sanborn",
            "definicao": "Tabela alfanumérica utilizada para gerar notação de autor associada ao sobrenome ou entrada principal, ordenando itens nas estantes.",
            "exemploBiblioteca": "Criação do número de chamada combinando classificação e Cutter para um livro sobre processo legislativo.",
        },
        {
            "termo": "Dublin Core (DC)",
            "definicao": "Padrão simplificado e aberto de metadados composto por 15 elementos básicos projetado para facilitar a recuperação de recursos digitais na web.",
            "exemploBiblioteca": "Esquema padrão utilizado na indexação de discursos parlamentares no repositório digital DSpace da Câmara.",
        },
        {
            "termo": "Tags Fundamentais do MARC",
            "definicao": "Campos essenciais: 020 (ISBN), 100 (Autor Pessoal), 110 (Autor Coletivo), 245 (Título), 260/264 (Imprenta) e 650 (Assunto).",
            "exemploBiblioteca": "Catalogação de pareceres parlamentares no sistema integrado da biblioteca utilizando a tag 650 para tesauro legislativo.",
        },
    ],
    "2.5": [
        {
            "termo": "Entrada de Órgãos Governamentais",
            "definicao": "Regra canônica do AACR2r e ICP que estabelece a jurisdição seguida pelo nome do órgão subordinado que não possua autonomia funcional.",
            "exemploBiblioteca": "Entrada correta: 'BRASIL. Congresso Nacional. Câmara dos Deputados' e não 'Câmara dos Deputados do Brasil'.",
        },
        {
            "termo": "RVBI (Rede Virtual de Bibliotecas)",
            "definicao": "Rede cooperativa de bibliotecas do Distrito Federal coordenada pelo Senado Federal, integrada pela Câmara dos Deputados, TCU e STF.",
            "exemploBiblioteca": "Compartilhamento cooperativo de catalogação para que um livro processado pela Câmara fique imediatamente visível para o Senado.",
        },
        {
            "termo": "Biblioteca Pedro Aleixo",
            "definicao": "Biblioteca oficial da Câmara dos Deputados, vinculada ao CEDI, depositária legal da memória legislativa e doutrinária da Casa.",
            "exemploBiblioteca": "Atendimento presencial e digital a deputados, comissões técnicas e cidadãos com acervo focado em direito e ciências sociais.",
        },
        {
            "termo": "Publicação Oficial",
            "definicao": "Documento editado por autoridade ou órgão do poder público contendo leis, atos normativos, relatórios de gestão ou anais.",
            "exemploBiblioteca": "Catalogação em série dos 'Anais da Câmara dos Deputados' com indicação de periodicidade e notas de continuação.",
        },
    ],
    "2.6": [
        {
            "termo": "Metadados de Preservação (PREMIS)",
            "definicao": "Dicionário internacional de dados focado em garantir a viabilidade, autenticidade, integridade e identificação de longo prazo de objetos digitais.",
            "exemploBiblioteca": "Registro da assinatura digital e da cadeia de custódia de projetos de lei assinados eletronicamente no arquivo da Câmara.",
        },
        {
            "termo": "Crosswalk (Mapeamento de Metadados)",
            "definicao": "Tabela de conversão que mapeia semanticamente elementos de um esquema de metadados em outro (ex.: MARC 21 para Dublin Core).",
            "exemploBiblioteca": "Exportação automática de registros do sistema de biblioteca (MARC tag 245) para o repositório DSpace (dc.title).",
        },
        {
            "termo": "Perfil de Aplicação (Application Profile)",
            "definicao": "Conjunto de termos e restrições de metadados customizados a partir de um ou mais esquemas para atender às necessidades de uma comunidade específica.",
            "exemploBiblioteca": "Perfil de metadados Dublin Core da RVBI com qualificadores obrigatórios para tipos específicos de leis e decretos.",
        },
        {
            "termo": "Metadados de Proveniência",
            "definicao": "Informações que documentam a origem, história de custódia, alterações e contexto de produção de um registro informacional.",
            "exemploBiblioteca": "Rastrear em que gabinete ou comissão determinado texto substitutivo foi gerado e quando foi protocolado.",
        },
    ],
    "2.7": [
        {
            "termo": "MODS e METS",
            "definicao": "Padrões XML da Library of Congress: MODS para descrição bibliográfica rica e METS para empacotamento estrutural de objetos digitais complexos.",
            "exemploBiblioteca": "Empacotamento de livros raros digitalizados contendo imagens em alta resolução e texto transcrito na Biblioteca Digital da Câmara.",
        },
        {
            "termo": "BIBFRAME",
            "definicao": "Modelo de dados bibliográficos baseado em Linked Data desenvolvido pela Library of Congress para substituir o padrão MARC 21.",
            "exemploBiblioteca": "Conexão de autores e assuntos do catálogo da Câmara com identidades de dados abertos como Wikidata e VIAF.",
        },
        {
            "termo": "Linked Data e RDF",
            "definicao": "Prática de publicar dados estruturados na web utilizando triplas RDF (Sujeito - Predicado - Objeto) com URIs para conectar informações.",
            "exemploBiblioteca": "Disponibilizar a relação entre um Deputado e a autoria de uma Proposição em formato RDF no portal de Dados Abertos da Câmara.",
        },
        {
            "termo": "Interoperabilidade Semântica",
            "definicao": "Capacidade de diferentes sistemas trocarem informações mantendo o significado preciso e inequívoco dos dados transmitidos.",
            "exemploBiblioteca": "Intercâmbio automático de legislação entre os portais da Câmara dos Deputados, Senado Federal e Presidência da República.",
        },
    ],

    # =========================================================================
    # MÓDULO 3: REPRESENTAÇÃO TEMÁTICA E LINGUAGENS DOCUMENTÁRIAS
    # =========================================================================
    "3.1": [
        {
            "termo": "Classificação Decimal de Dewey (CDD)",
            "definicao": "Sistema de classificação bibliográfica hierárquico e numérico criado por Melvil Dewey em 1876, baseado em 10 classes principais (000 a 900).",
            "exemploBiblioteca": "Classificação na classe 328 (Processo legislativo) e 340 (Direito) para organização das estantes na biblioteca.",
        },
        {
            "termo": "Classificação Decimal Universal (CDU)",
            "definicao": "Sistema semianalítico-sintético desenvolvido por Otlet e La Fontaine que utiliza números principais e sinais auxiliares de relação e facetas.",
            "exemploBiblioteca": "Uso do sinal de relação ':' (dois pontos) e parênteses de lugar '(81)' para indicar direito constitucional brasileiro: 342(81).",
        },
        {
            "termo": "Auxiliares Comuns e Especiais na CDU",
            "definicao": "Símbolos convencionados que indicam tempo ('...'), lugar ((...)), forma ((0...)) e língua (=...) aplicáveis a qualquer classe principal.",
            "exemploBiblioteca": "Representação de uma lei comentada de 2024: classe do assunto seguida pelo auxiliar de forma de leis e de data '2024'.",
        },
        {
            "termo": "Notação e Ordem de Citação",
            "definicao": "Sequência lógica em que os elementos de um conceito composto devem ser arranjados e codificados para compor o número de classificação.",
            "exemploBiblioteca": "Padronização da sequência de auxiliares para que obras sobre o mesmo tema fiquem agrupadas no mesmo setor do acervo.",
        },
    ],
    "3.2": [
        {
            "termo": "Classificação Decimal de Direito (CDDir)",
            "definicao": "Sistema brasileiro especializado desenvolvido por Doris de Queiroz Carvalho e adotado pelas bibliotecas jurídicas para o detalhamento da classe 340.",
            "exemploBiblioteca": "Classificação temática específica dos tratados de direito tributário e processual na Rede Virtual de Bibliotecas (RVBI).",
        },
        {
            "termo": "Tabela PHA (Paulo Homem de Albuquerque)",
            "definicao": "Tabela de notação de autor desenvolvida especificamente para a língua portuguesa, concorrente da Cutter-Sanborn em bibliotecas brasileiras.",
            "exemploBiblioteca": "Atribuição de código alfanumérico para autores nacionais com grafias compostas na Biblioteca da Câmara.",
        },
        {
            "termo": "Número de Chamada",
            "definicao": "Conjunto alfanumérico composto pela notação de classificação, notação de autor e elementos complementares (ano, volume, exemplar) que localiza a obra.",
            "exemploBiblioteca": "Etiqueta na lombada: 342.53 C172p 2023 ex. 1, permitindo ao usuário ou atendente retirar o livro exato na estante.",
        },
        {
            "termo": "Doutrina Jurídica",
            "definicao": "Conjunto de estudos, pareceres e teorias formulados pelos juristas que interpretam as normas legais e orientam a aplicação do direito.",
            "exemploBiblioteca": "Acervo central da Biblioteca Pedro Aleixo que subsidia pareceres das comissões temáticas da Câmara.",
        },
    ],
    "3.3": [
        {
            "termo": "Análise Documentária",
            "definicao": "Operação intelectual que compreende a leitura técnica, a identificação dos conceitos centrais e a síntese do conteúdo temático de um documento.",
            "exemploBiblioteca": "Leitura de um projeto de lei de 200 páginas para extrair os 5 tópicos fundamentais que serão indexados no sistema.",
        },
        {
            "termo": "Indexação",
            "definicao": "Processo de representar o conteúdo substantivo de um documento por meio de termos padronizados ou descritores controlados.",
            "exemploBiblioteca": "Atribuição de termos do Tesauro da Câmara para garantir que o projeto seja recuperado por 'Reforma Política' e 'Voto Distrital'.",
        },
        {
            "termo": "Exaustividade vs. Revocação",
            "definicao": "Exaustividade é o número de termos atribuídos a um documento; quanto maior a exaustividade, maior a revocação (recuperação de mais itens).",
            "exemploBiblioteca": "Decidir indexar artigos de revistas parlamentares detalhadamente para recuperar pequenos trechos citados em plenário.",
        },
        {
            "termo": "Especificidade vs. Precisão",
            "definicao": "Especificidade é a correspondência estrita entre o termo e o conceito; quanto maior a especificidade, maior a precisão (menos lixo nos resultados).",
            "exemploBiblioteca": "Indexar por 'Imposto sobre Bens e Serviços (IBS)' em vez do termo genérico 'Tributo' para evitar falsos positivos.",
        },
    ],
    "3.4": [
        {
            "termo": "Linguagem Documentária",
            "definicao": "Sistema de signos e vocabulário controlado construído artificialmente para a representação e recuperação de informações.",
            "exemploBiblioteca": "Vocabulário controlado da RVBI que unifica termos para busca entre Câmara, Senado e tribunais superiores.",
        },
        {
            "termo": "Tesauro",
            "definicao": "Vocabulário controlado estruturado por relações semânticas formais: hierárquicas (TG/TE), associativas (TA) e de equivalência (USE/UP).",
            "exemploBiblioteca": "Consulta ao Tesauro do Congresso Nacional para verificar que 'Parlamentar' tem como Termo Específico 'Deputado Federal' e 'Senador'.",
        },
        {
            "termo": "SKOS (Simple Knowledge Organization System)",
            "definicao": "Modelo de dados W3C baseado em RDF para expressar tesauros, taxonomias e esquemas de classificação como Linked Data na web.",
            "exemploBiblioteca": "Publicação do Tesauro da Câmara dos Deputados em formato SKOS para interoperabilidade com o portal de dados abertos.",
        },
        {
            "termo": "Ontologia",
            "definicao": "Especificação formal e explícita de uma conceitualização compartilhada que define classes, propriedades, restrições e axiomas lógicos.",
            "exemploBiblioteca": "Modelagem de ontologia legislativa para inferir automaticamente relações de dependência entre leis ordinárias e a CF/88.",
        },
    ],

    # =========================================================================
    # MÓDULO 4: RECUPERAÇÃO DA INFORMAÇÃO E SERVIÇO DE REFERÊNCIA
    # =========================================================================
    "4.1": [
        {
            "termo": "Álgebra Booleana",
            "definicao": "Lógica formal baseada nos operadores AND, OR e NOT utilizada para combinar termos em buscas e filtros informacionais.",
            "exemploBiblioteca": "Estratégia de busca: 'Processo Legislativo' AND 'Quórum' NOT 'Medida Provisória' no catálogo da biblioteca.",
        },
        {
            "termo": "Revocação (Recall)",
            "definicao": "Proporção de documentos relevantes recuperados pelo sistema em relação ao total de documentos relevantes existentes no acervo.",
            "exemploBiblioteca": "Garantir alta revocação em pesquisa para subsidiar CPI, onde nenhuma nota técnica pertinente pode ficar de fora.",
        },
        {
            "termo": "Precisão (Precision)",
            "definicao": "Proporção de documentos relevantes entre todos os documentos efetivamente retornados na resposta de uma busca.",
            "exemploBiblioteca": "Garantir alta precisão ao fornecer uma resposta imediata de 3 artigos fundamentais para um parlamentar discursar no Plenário.",
        },
        {
            "termo": "Truncagem e Máscara",
            "definicao": "Recursos de busca que utilizam símbolos (*, ?, $) para recuperar variações de gênero, número ou radicais de palavras.",
            "exemploBiblioteca": "Busca por 'parlament*' para retornar simultaneamente parlamento, parlamentar, parlamentarismo e parlamentares.",
        },
    ],
    "4.2": [
        {
            "termo": "Fontes Primárias",
            "definicao": "Documentos originais que contêm informações inéditas de primeira mão, não filtradas ou interpretadas por terceiros.",
            "exemploBiblioteca": "Texto oficial de um projeto de lei publicado no Diário da Câmara dos Deputados e notas taquigráficas.",
        },
        {
            "termo": "Fontes Secundárias",
            "definicao": "Documentos que compilam, organizam, referenciam ou analisam informações extraídas de fontes primárias.",
            "exemploBiblioteca": "Bases de dados bibliográficas da RVBI, índices de jurisprudência e enciclopédias jurídicas.",
        },
        {
            "termo": "Fontes Terciárias",
            "definicao": "Instrumentos que sinalizam a localização de fontes secundárias e primárias, funcionando como guias da literatura.",
            "exemploBiblioteca": "Diretório de bibliotecas parlamentares, bibliografias de bibliografias e guias de fontes do direito legislativo.",
        },
        {
            "termo": "Literatura Cinzenta (Grey Literature)",
            "definicao": "Documentos não convencionais publicados fora dos canais comerciais tradicionais de editoração (relatórios técnicos, teses, atas).",
            "exemploBiblioteca": "Notas técnicas e pareceres emitidos pela Consultoria Legislativa e Consultoria de Orçamento da Câmara.",
        },
    ],
    "4.3": [
        {
            "termo": "Portal LexML Brasil",
            "definicao": "Rede de informação legislativa e jurídica que unifica a busca de legislação, jurisprudência e doutrina de órgãos federais, estaduais e municipais.",
            "exemploBiblioteca": "O bibliotecário da Câmara utilizando o LexML para localizar uma lei estadual correlata a uma PEC em tramitação federal.",
        },
        {
            "termo": "Diário Oficial da União (DOU)",
            "definicao": "Jornal oficial da Imprensa Nacional dividido em seções que publica leis, atos normativos, decretos e atos de pessoal da administração federal.",
            "exemploBiblioteca": "Monitoramento diário da Seção 1 do DOU para catalogar promulgações e vetos presidenciais que impactam a biblioteca.",
        },
        {
            "termo": "Jurisprudência",
            "definicao": "Conjunto reiterado de decisões, acórdãos e súmulas dos tribunais judiciais que consubstanciam a interpretação das normas jurídicas.",
            "exemploBiblioteca": "Pesquisa de decisões do STF sobre constitucionalidade de matérias regimentais da Câmara dos Deputados.",
        },
        {
            "termo": "URN Lex (Uniform Resource Name)",
            "definicao": "Identificador persistente e padronizado utilizado pelo LexML para nomear univocamente cada ato normativo no tempo e espaço.",
            "exemploBiblioteca": "Link permanente atribuído à Lei nº 14.133/2021 que garante que referências em pareceres legislativos nunca quebrem.",
        },
    ],
    "4.4": [
        {
            "termo": "Processo de Referência (Denis Grogan)",
            "definicao": "Sequência de etapas intelectuais e comunicacionais de atendimento: do problema inicial, negociação da questão, estratégia até a resposta final.",
            "exemploBiblioteca": "Entrevista com assessor parlamentar para filtrar se a demanda por 'impostos' se refere especificamente à Reforma Tributária de 2023.",
        },
        {
            "termo": "Disseminação Seletiva da Informação (DSI)",
            "definicao": "Serviço que envia alertas periódicos e personalizados de novas publicações a usuários cadastrados com base em seus perfis de interesse.",
            "exemploBiblioteca": "Envio automático aos membros da Comissão de Educação de novas teses e normas sobre financiamento escolar.",
        },
        {
            "termo": "Estudo de Usuários",
            "definicao": "Investigação sistemática sobre o comportamento, as necessidades, os padrões de busca e a satisfação da comunidade atendida.",
            "exemploBiblioteca": "Pesquisa de opinião com deputados federais sobre o uso do acervo digital no aplicativo da Câmara.",
        },
        {
            "termo": "Competência Informacional (Information Literacy)",
            "definicao": "Habilidade dos usuários em identificar, acessar, avaliar e utilizar criticamente a informação no contexto da sociedade do conhecimento.",
            "exemploBiblioteca": "Treinamento oferecido pelo CEDI aos novos servidores sobre como verificar a vigência de leis no portal da Câmara.",
        },
    ],

    # =========================================================================
    # MÓDULO 5: GESTÃO DE SERVIÇOS, PRODUTOS E COLEÇÕES
    # =========================================================================
    "5.1": [
        {
            "termo": "Planejamento Estratégico em Bibliotecas",
            "definicao": "Processo gerencial de formulação de objetivos, estratégias e metas com base na análise de cenários internos e externos (Matriz SWOT).",
            "exemploBiblioteca": "Alinhamento do Plano de Ação da Biblioteca Pedro Aleixo ao Plano Estratégico Institucional da Câmara 2024-2035.",
        },
        {
            "termo": "Indicadores de Desempenho",
            "definicao": "Métricas quantitativas e qualitativas (KPIs) utilizadas para monitorar a eficiência, eficácia e impacto dos serviços bibliotecários.",
            "exemploBiblioteca": "Acompanhamento mensal da taxa de atendimento de consultas parlamentares dentro do prazo de 24 horas.",
        },
        {
            "termo": "Matriz SWOT / FOFA",
            "definicao": "Ferramenta de gestão que mapeia Forças, Oportunidades, Fraquezas e Ameaças que afetam a organização e seus projetos.",
            "exemploBiblioteca": "Identificar como força o acervo histórico único e como fraqueza a necessidade de migração de sistemas legados.",
        },
        {
            "termo": "Benchmarking",
            "definicao": "Processo contínuo de comparação de processos e serviços com as melhores bibliotecas do mundo para identificar oportunidades de melhoria.",
            "exemploBiblioteca": "Estudo comparativo entre os serviços de referência da Biblioteca da Câmara e da Library of Congress (EUA).",
        },
    ],
    "5.2": [
        {
            "termo": "CRM (Customer Relationship Management)",
            "definicao": "Estratégia e conjunto de ferramentas tecnológicas voltadas ao gerenciamento e estreitamento das relações com os usuários/clientes.",
            "exemploBiblioteca": "Registro no sistema de referência das preferências temáticas e histórico de consultas de cada comissão parlamentar.",
        },
        {
            "termo": "Curadoria de Conteúdo",
            "definicao": "Processo contínuo de selecionar, organizar, enriquecer e contextualizar as informações mais relevantes sobre determinado domínio temático.",
            "exemploBiblioteca": "Elaboração de dossiê temático curado sobre inteligência artificial no setor público para apoiar debate em comissão mista.",
        },
        {
            "termo": "Produtos de Inteligência Informacional",
            "definicao": "Relatórios sintetizados, informativos analíticos e resumos executivos que agregam valor e orientam a tomada de decisão estratégica.",
            "exemploBiblioteca": "Boletim legislativo semanal distribuído pela biblioteca aos líderes partidários com panorama de matérias internacionais.",
        },
        {
            "termo": "Segmentação de Usuários",
            "definicao": "Divisão da comunidade de usuários em grupos homogêneos segundo suas necessidades de informação para oferta de serviços customizados.",
            "exemploBiblioteca": "Criação de trilhas de serviços distintas para parlamentares, pesquisadores acadêmicos e cidadãos comuns.",
        },
    ],
    "5.3": [
        {
            "termo": "Política de Desenvolvimento de Coleções (PDC)",
            "definicao": "Documento formal que estabelece diretrizes, critérios e prioridades para seleção, aquisição, descarte e avaliação do acervo.",
            "exemploBiblioteca": "Norma interna do CEDI que define que a compra de livros de direito constitucional tem prioridade orçamentária máxima.",
        },
        {
            "termo": "Desbaste e Descarte (Weeding)",
            "definicao": "Operações de remoção física ou remanejamento de itens obsoletos, danificados ou duplicados para manter a vitalidade do acervo.",
            "exemploBiblioteca": "Descarte legal de edições desatualizadas de códigos comentados mediante termo de doação ou alienação.",
        },
        {
            "termo": "Depósito Legal",
            "definicao": "Exigência legal que determina o envio obrigatório de exemplares de todas as publicações produzidas no país a bibliotecas depositárias.",
            "exemploBiblioteca": "A Biblioteca da Câmara recebendo compulsoriamente todas as publicações e relatórios oficiais editados pela Casa.",
        },
        {
            "termo": "Critérios de Seleção",
            "definicao": "Parâmetros qualitativos (autoridade do autor, atualidade, relevância temática, custo) que orientam a incorporação de novos itens.",
            "exemploBiblioteca": "Avaliação de sugestões bibliográficas enviadas por gabinetes parlamentares à comissão de seleção da biblioteca.",
        },
    ],
    "5.4": [
        {
            "termo": "Gestão do Conhecimento (GC)",
            "definicao": "Abordagem sistemática para identificar, capturar, estruturar, compartilhar e alavancar o capital intelectual coletivo da organização.",
            "exemploBiblioteca": "Criação de um repositório interno de notas técnicas e pareceres da Consultoria Legislativa da Câmara para evitar retrabalho.",
        },
        {
            "termo": "Conhecimento Tácito vs. Explícito",
            "definicao": "Tácito é o saber pessoal internalizado e prático (Nonaka & Takeuchi); explícito é o conhecimento formalizado em documentos e sistemas.",
            "exemploBiblioteca": "Entrevistas de saída com bibliotecários aposentados para registrar em manuais seus métodos de busca de legislação histórica.",
        },
        {
            "termo": "Espiral do Conhecimento (SECI)",
            "definicao": "Modelo de conversão contínua de conhecimento: Socialização, Externalização, Combinação e Internalização.",
            "exemploBiblioteca": "Grupos de trabalho onde consultores seniores debatem tramitações complexas (Socialização) e redigem guias práticos (Externalização).",
        },
        {
            "termo": "Comunidades de Prática (CoPs)",
            "definicao": "Grupos de servidores que compartilham paixão por um domínio técnico e interagem regularmente para aprofundar seu aprendizado.",
            "exemploBiblioteca": "Rede cooperativa de catalogadores da RVBI que se reúne para deliberar sobre aplicações práticas de novos padrões de metadados.",
        },
    ],

    # =========================================================================
    # MÓDULO 6: TECNOLOGIA, BIBLIOTECA DIGITAL E IA
    # =========================================================================
    "6.1": [
        {
            "termo": "Biblioteca Digital vs. Virtual vs. Eletrônica",
            "definicao": "Eletrônica usa computadores para gestão; Digital possui acervo nato-digital ou digitalizado em rede; Virtual é desprovida de espaço físico.",
            "exemploBiblioteca": "A Biblioteca Digital da Câmara (BDCam) funcionando como o nó digital do acervo da Biblioteca Pedro Aleixo.",
        },
        {
            "termo": "Arquitetura da Informação (AI)",
            "definicao": "Arte e ciência de estruturar e organizar ecossistemas de informação para facilitar a usabilidade e a encontrabilidade pelo usuário.",
            "exemploBiblioteca": "Desenho dos menus de navegação, taxonomia e hierarquia visual da nova interface do portal de pesquisa da Câmara.",
        },
        {
            "termo": "Encontrabilidade (Findability)",
            "definicao": "Grau de facilidade com que um objeto ou conteúdo pode ser descoberto e localizado em um ambiente informacional.",
            "exemploBiblioteca": "Melhoria dos filtros por data de proposição e comissão para que o cidadão encontre imediatamente uma lei em vigor.",
        },
        {
            "termo": "Heurísticas de Usabilidade de Nielsen",
            "definicao": "Dez princípios gerais para design de interação: visibilidade do status, consistência, prevenção de erros e flexibilidade de uso.",
            "exemploBiblioteca": "Inserção de breadcrumbs (trilhas de navegação) e mensagens de erro claras na página de busca da biblioteca.",
        },
    ],
    "6.3": [
        {
            "termo": "Modelo OAIS (ISO 14721)",
            "definicao": "Open Archival Information System: modelo de referência internacional que padroniza os conceitos e funções de preservação digital perene.",
            "exemploBiblioteca": "Estruturação dos pacotes de submissão (SIP), arquivamento (AIP) e disseminação (DIP) no repositório de memória da Câmara.",
        },
        {
            "termo": "Fixidez e Checksum",
            "definicao": "Mecanismo criptográfico (como SHA-256 ou MD5) que gera uma hash única para certificar que o arquivo digital não foi alterado ou corrompido.",
            "exemploBiblioteca": "Auditoria periódica de checksums de arquivos PDF/A de decretos e discursos históricos para garantir sua autenticidade jurídica.",
        },
        {
            "termo": "Formatos Abertos de Preservação",
            "definicao": "Padrões com especificações públicas e sem royalties (PDF/A, TIFF, XML) indicados para garantir a longevidade da informação.",
            "exemploBiblioteca": "Conversão mandatória de documentos textuais legados para PDF/A-1a na Biblioteca Digital da Câmara.",
        },
        {
            "termo": "Estratégias de Preservação Digital",
            "definicao": "Métodos operacionais para combater a obsolescência tecnológica: migração de formato, emulação, encapsulamento e preservação de tecnologia.",
            "exemploBiblioteca": "Migração programada de acervos em disquetes e CD-ROMs antigos para storages seguros e replicados.",
        },
    ],
    "6.5": [
        {
            "termo": "Banco de Dados Relacional (SQL)",
            "definicao": "Sistema de gestão de banco de dados baseado em tabelas com chaves primárias e estrangeiras que cumprem propriedades ACID.",
            "exemploBiblioteca": "Tabelas interligadas de 'Usuários', 'Empréstimos' e 'Exemplares' no sistema integrado de gestão da biblioteca (SIGB).",
        },
        {
            "termo": "Banco de Dados Não Relacional (NoSQL)",
            "definicao": "Sistemas de armazenamento flexíveis projetados para dados não estruturados ou semiestruturados (orientados a documentos, grafos ou chave-valor).",
            "exemploBiblioteca": "Armazenamento de registros JSON de documentos legislativos dinâmicos em bancos orientados a documentos como MongoDB.",
        },
        {
            "termo": "Chave Primária e Chave Estrangeira",
            "definicao": "Chave primária identifica unicamente uma linha em uma tabela; chave estrangeira estabelece a relação e integridade referencial com outra tabela.",
            "exemploBiblioteca": "O ID único do parlamentar como chave estrangeira na tabela de autoria de proposições.",
        },
        {
            "termo": "Modelagem Conceitual (DER)",
            "definicao": "Diagrama Entidade-Relacionamento que mapeia as entidades do negócio, seus atributos e as cardinalidades de relacionamento (1:1, 1:N, N:M).",
            "exemploBiblioteca": "Modelagem de que um 'Deputado' pode subscrever N 'Proposições' e uma 'Proposição' pode ter N 'Autores'.",
        },
    ],
    "6.7": [
        {
            "termo": "OCR (Optical Character Recognition)",
            "definicao": "Tecnologia de conversão de imagens de texto impresso ou datilografado em caracteres de texto legíveis e pesquisáveis por máquina.",
            "exemploBiblioteca": "Digitalização e OCR dos diários da Constituinte de 1987-1988 para permitir busca por palavras no texto integral.",
        },
        {
            "termo": "HTR (Handwritten Text Recognition)",
            "definicao": "Tecnologia de aprendizado profundo focada na transcrição automática de manuscritos históricos com grafias cursivas complexas.",
            "exemploBiblioteca": "Transcrição assistida por IA de livros de atas e correspondências do Império arquivados na Biblioteca Pedro Aleixo.",
        },
        {
            "termo": "Processamento de Linguagem Natural (PLN)",
            "definicao": "Subcampo da IA que investiga a compreensão, análise, síntese e geração automática de linguagem humana por sistemas computacionais.",
            "exemploBiblioteca": "Sumarização automática de justificativas de projetos de lei para gerar ementas prévias nos sistemas legislativos.",
        },
        {
            "termo": "Vieses Algorítmicos (Bias)",
            "definicao": "Desvios sistemáticos e preconceitos incorporados em modelos de IA decorrentes de distorções nos dados de treinamento ou nos algoritmos.",
            "exemploBiblioteca": "Auditoria ética de algoritmos de busca para evitar que determinados temas sociais sejam silenciados nos resultados.",
        },
    ],

    # =========================================================================
    # MÓDULO 7: PRESERVAÇÃO E CONSERVAÇÃO
    # =========================================================================
    "7.1": [
        {
            "termo": "Celulose e Hidrólise Ácida",
            "definicao": "A celulose é o polímero básico do papel; a hidrólise ácida rompe suas cadeias moleculares, tornando o papel quebradiço e amarelado.",
            "exemploBiblioteca": "Identificação de acervos parlamentares do início do século XX produzidos com papel ácido de pasta mecânica de madeira.",
        },
        {
            "termo": "Parâmetros Ambientais de Acervos",
            "definicao": "Condições ideais de conservação de papel: temperatura entre 18°C e 22°C e umidade relativa (UR) entre 45% e 55% com oscilações mínimas.",
            "exemploBiblioteca": "Monitoramento termo-higrométrico 24h nas salas de guarda de obras raras da Biblioteca Pedro Aleixo.",
        },
        {
            "termo": "Radiação Ultravioleta (UV)",
            "definicao": "Fração energética da luz solar e de lâmpadas que catalisa a fotoxidação da celulose e da lignina, acelerando a perda de resistência do papel.",
            "exemploBiblioteca": "Instalação de películas com filtro UV nas janelas e luminárias de LED na área de exposição da biblioteca.",
        },
        {
            "termo": "Poluição Atmosférica e Particulados",
            "definicao": "Gases ácidos (óxidos de enxofre e nitrogênio) e poeira que reagem com a umidade ambiental, formando ácidos e promovendo abrasão física.",
            "exemploBiblioteca": "Sistemas de ar-condicionado central com filtros especiais de carvão ativado nos depósitos de livros da Câmara.",
        },
    ],
    "7.2": [
        {
            "termo": "Controle Integrado de Pragas (CIP)",
            "definicao": "Estratégia holística e sustentável de monitoramento, prevenção física e controle ambiental de agentes biológicos sem uso indiscriminado de químicos.",
            "exemploBiblioteca": "Armadilhas adesivas não tóxicas instaladas estrategicamente nos rodapés das estantes para detecção precoce de insetos.",
        },
        {
            "termo": "Insetos Bibliófagos",
            "definicao": "Espécies que atacam materiais celulósicos e colas: brocas (Anobiidae), traças de livros (Thysanura), cupins e baratas.",
            "exemploBiblioteca": "Identificação de orifícios de broca em encadernações históricas em couro tratadas no laboratório de restauração.",
        },
        {
            "termo": "Fungos e Mofo",
            "definicao": "Microrganismos cujos esporos proliferam rapidamente quando a umidade relativa ultrapassa 65%, causando manchas e biodegradação estrutural.",
            "exemploBiblioteca": "Ação imediata de isolamento e higienização a seco quando há falha no sistema de climatização no período de chuvas em Brasília.",
        },
        {
            "termo": "Quarentena de Acervos",
            "definicao": "Isolamento preventivo temporário de livros recém-adquiridos ou doados em sala especial antes de sua integração ao acervo geral.",
            "exemploBiblioteca": "Inspeção minuciosa de caixas de doações de arquivos pessoais de ex-deputados federais.",
        },
    ],
    "7.3": [
        {
            "termo": "Conservação Preventiva",
            "definicao": "Conjunto de ações indiretas contínuas destinadas a mitigar a deterioração e prevenir danos ao acervo sem intervir fisicamente no documento.",
            "exemploBiblioteca": "Higienização mecânica periódica das estantes e controle de manuseio com suportes de apoio para livros volumosos.",
        },
        {
            "termo": "Acondicionamento e Embalagem",
            "definicao": "Uso de invólucros, caixas, pastas e jaquetas confeccionadas com materiais inertes e de pH neutro para proteger documentos de agentes externos.",
            "exemploBiblioteca": "Guarda de mapas e plantas históricas do Congresso Nacional em pastas de mylar e papel alcalino barrier.",
        },
        {
            "termo": "Higienização Mecânica a Seco",
            "definicao": "Remoção de sujidades superficiais utilizando trinchas macias, pó de borracha específico ou aspiradores com filtro HEPA.",
            "exemploBiblioteca": "Limpeza folha a folha de anais do Senado e da Câmara antes de sua digitalização em scanner planetário.",
        },
        {
            "termo": "Treinamento de Manuseio",
            "definicao": "Capacitação de equipes e orientação a usuários sobre o correto transporte, abertura e retirada de volumes nas estantes.",
            "exemploBiblioteca": "Orientação para nunca puxar o livro pela coifa (topo da lombada) para evitar rasgos no couro ou tecido.",
        },
    ],
    "7.4": [
        {
            "termo": "Intervenção Curativa e Restauração",
            "definicao": "Ações diretas sobre o objeto danificado para estabilizar sua deterioração e recuperar sua integridade física segundo princípios éticos.",
            "exemploBiblioteca": "Enxerto mecânico de papel japonês com metilcelulose em páginas rasgadas de um exemplar de 1824 da Carta Outorgada.",
        },
        {
            "termo": "Princípio da Reversibilidade",
            "definicao": "Norma ética fundamental que determina que qualquer material ou técnica aplicada na restauração deve poder ser removida sem danificar o original.",
            "exemploBiblioteca": "Proibição estrita do uso de fitas adesivas comerciais tipo 'durex' ou colas plásticas sintéticas em livros raros.",
        },
        {
            "termo": "Plano de Contingência contra Desastres",
            "definicao": "Protocolo formal de emergência que estabelece rotinas e prioridades de resgate em caso de incêndio, inundação ou vandalismo.",
            "exemploBiblioteca": "Lista de prioridade de evacuação que coloca as primeiras edições e manuscritos raros como itens número 1 a serem resgatados.",
        },
        {
            "termo": "Liofilização (Secagem por Congelamento)",
            "definicao": "Técnica de resgate de documentos molhados por inundação através de sublimação a vácuo, evitando proliferação de fungos e deformação.",
            "exemploBiblioteca": "Congelamento imediato de caixas de documentos atingidas por vazamento acidental em depósito subterrâneo.",
        },
    ],

    # =========================================================================
    # MÓDULO 8: NORMALIZAÇÃO DOCUMENTÁRIA (ABNT)
    # =========================================================================
    "8.1": [
        {
            "termo": "ABNT NBR 6023:2025",
            "definicao": "Norma brasileira que estabelece os elementos a serem incluídos em referências bibliográficas e fixa padrões de apresentação.",
            "exemploBiblioteca": "Orientação aos pesquisadores sobre a inclusão obrigatória do DOI e formatação de links de documentos legislativos.",
        },
        {
            "termo": "Elementos Essenciais vs. Complementares",
            "definicao": "Essenciais são indispensáveis à identificação do documento (autor, título, local, editora, data); complementares detalham a descrição física.",
            "exemploBiblioteca": "Elaboração de lista de referências em notas técnicas contendo rigorosamente todos os elementos essenciais da NBR 6023.",
        },
        {
            "termo": "Destaque Tipográfico na NBR 6023",
            "definicao": "Uso uniforme de itálico, negrito ou sublinhado para o título da publicação em toda a obra, não se aplicando a obras sem autoria.",
            "exemploBiblioteca": "Padronização pelo uso de itálico no título dos livros referenciados nas publicações institucionais da Câmara.",
        },
        {
            "termo": "Referência de Documentos Legislativos",
            "definicao": "Regra que determina entrada pela jurisdição em caixa alta, seguida do título oficial do ato, data de promulgação e dados da publicação oficial.",
            "exemploBiblioteca": "BRASIL. Lei nº 14.133, de 1º de abril de 2021. Diário Oficial da União: seção 1, Brasília, DF, ano 159, n. 61-E, p. 1-43, 1 abr. 2021.",
        },
    ],
    "8.2": [
        {
            "termo": "ABNT NBR 10520:2023",
            "definicao": "Versão atualizada da norma de citações que aboliu a caixa alta nos sobrenomes dos autores no sistema autor-data no texto.",
            "exemploBiblioteca": "Mudança crucial: a citação no texto agora é grafada '(Silva, 2023, p. 10)' e não mais '(SILVA, 2023, p. 10)'.",
        },
        {
            "termo": "Citação Direta vs. Indireta",
            "definicao": "Direta é a transcrição textual exata; indireta é a paráfrase livre das ideias do autor consultado sem transcrição literal.",
            "exemploBiblioteca": "Uso de citação indireta em pareceres legislativos para resumir a posição de consagrados juristas constitucionais.",
        },
        {
            "termo": "Citação Direta Longa",
            "definicao": "Trecho com mais de três linhas que deve ser destacado em parágrafo próprio com recuo de 4 cm da margem esquerda e fonte menor.",
            "exemploBiblioteca": "Formatação do voto do relator com recuo de 4 cm para transcrever dispositivo de tratado internacional.",
        },
        {
            "termo": "Expressões Latinas em Notas",
            "definicao": "Termos convencionais como 'Ibidem' (na mesma obra), 'Op. cit.' (na obra citada) e 'Apud' (citado por) no sistema numérico.",
            "exemploBiblioteca": "Uso correto de 'apud' na citação de uma emenda histórica acessada apenas por meio de obra de terceiros.",
        },
    ],
    "8.3": [
        {
            "termo": "ABNT NBR 14724:2011",
            "definicao": "Norma que especifica os princípios gerais para a apresentação formal de trabalhos acadêmicos (teses, dissertações e TCCs).",
            "exemploBiblioteca": "Revisão formal das monografias produzidas pelos alunos dos cursos de pós-graduação do Centro de Formação (Cefor) da Câmara.",
        },
        {
            "termo": "Estrutura do Trabalho Acadêmico",
            "definicao": "Divisão formal tripartite: elementos pré-textuais, elementos textuais (introdução, desenvolvimento, conclusão) e elementos pós-textuais.",
            "exemploBiblioteca": "Verificação da correta paginação, onde a contagem inicia na folha de rosto, mas a numeração só aparece na primeira folha textual.",
        },
        {
            "termo": "Elementos Pré-Textuais Obrigatórios",
            "definicao": "Folha de rosto, folha de aprovação, resumo na língua vernácula, resumo em língua estrangeira e sumário.",
            "exemploBiblioteca": "Checklist de conferência de teses depositadas na Biblioteca Pedro Aleixo para publicação institucional.",
        },
        {
            "termo": "Anexo vs. Apêndice",
            "definicao": "Apêndice é documento elaborado pelo próprio autor do trabalho para complementar sua argumentação; Anexo é texto de terceiros não elaborado pelo autor.",
            "exemploBiblioteca": "Questionário aplicado aos parlamentares entra como Apêndice; cópia do texto do Regimento Interno entra como Anexo.",
        },
    ],
    "8.4": [
        {
            "termo": "ABNT NBR 6028:2021",
            "definicao": "Norma que estabelece os requisitos para redação e apresentação de resumos informativos, indicativos e críticos (resenhas).",
            "exemploBiblioteca": "Elaboração de resumos informativos de 100 a 250 palavras para acompanhar artigos da Revista de Informação Legislativa.",
        },
        {
            "termo": "Resumo Informativo",
            "definicao": "Tipo de resumo que informa ao leitor finalidades, metodologia, resultados e conclusões do documento original, dispensando a leitura integral.",
            "exemploBiblioteca": "Resumo analítico publicado no início de cada dossiê da Consultoria da Câmara para rápida leitura dos deputados.",
        },
        {
            "termo": "ABNT NBR 6027:2012 (Sumário)",
            "definicao": "Norma que define sumário como a enumeração das divisões, seções e outras partes de uma publicação na mesma ordem em que a matéria se sucede.",
            "exemploBiblioteca": "Garantia de que a grafia dos títulos e subtítulos no sumário seja rigorosamente idêntica à grafia no corpo do texto.",
        },
        {
            "termo": "Palavras-Chave (Keywords)",
            "definicao": "Termos representativos do conteúdo do documento que devem figurar logo abaixo do resumo precedidos da expressão 'Palavras-chave:'.",
            "exemploBiblioteca": "Atribuição de 3 a 5 palavras-chave separadas entre si por ponto e finalizadas por ponto, conforme preconizado pela NBR 6028.",
        },
    ],
    "8.5": [
        {
            "termo": "Ficha Catalográfica (CIP)",
            "definicao": "Catalogação na Publicação impressa no verso da folha de rosto de livros conforme padrão do AACR2 e regras da NBR 14724.",
            "exemploBiblioteca": "Elaboração pelo bibliotecário da Câmara da ficha catalográfica para as publicações da Edições Câmara com número de chamada e ISBN.",
        },
        {
            "termo": "ISBN e ISSN",
            "definicao": "Padrões numéricos internacionais de identificação unívoca de publicações: ISBN para monografias/livros e ISSN para publicações seriadas.",
            "exemploBiblioteca": "Gestão e solicitação de novos prefixos ISBN junto à Câmara Brasileira do Livro (CBL) para relatórios parlamentares.",
        },
        {
            "termo": "ABNT NBR 6034:2004 (Índice)",
            "definicao": "Norma que estabelece os requisitos para apresentação de índices remissivos, onomásticos e temáticos em publicações.",
            "exemploBiblioteca": "Criação do índice remissivo analítico ao final da edição anotada do Regimento Interno da Câmara dos Deputados.",
        },
        {
            "termo": "Acessibilidade Editorial",
            "definicao": "Práticas de design e diagramação que garantem o acesso a pessoas com deficiência (descrição de imagens, contraste, fontes legíveis).",
            "exemploBiblioteca": "Adaptação das publicações institucionais da Câmara para formatos acessíveis em áudio e ePub compatíveis com leitores de tela.",
        },
    ],

    # =========================================================================
    # MÓDULO 9: COMUNICAÇÃO CIENTÍFICA E ESTUDOS MÉTRICOS
    # =========================================================================
    "9.1": [
        {
            "termo": "Comunicação Científica",
            "definicao": "Processo social e formal pelo qual os cientistas comunicam, debatem, validam e disseminam seus resultados de pesquisa.",
            "exemploBiblioteca": "Apoio a pesquisadores do Cefor na escolha de periódicos indexados para publicação de estudos sobre orçamento público.",
        },
        {
            "termo": "Avaliação por Pares (Peer Review)",
            "definicao": "Mecanismo clássico de controle de qualidade e validação em que manuscritos são avaliados anonimamente por especialistas da mesma área.",
            "exemploBiblioteca": "Gestão do fluxo editorial da Revista de Informação Legislativa garantindo o sistema duplo-cego (double-blind review).",
        },
        {
            "termo": "Canais Formais vs. Informais",
            "definicao": "Formais são canais permanentes e públicos (artigos de periódicos, livros); informais são contatos diretos (congressos, e-mails, pré-prints).",
            "exemploBiblioteca": "Disponibilização de servidor institucional de pré-prints para que notas técnicas sejam debatidas antes da publicação oficial.",
        },
        {
            "termo": "Colégios Invisíveis (Derek de Solla Price)",
            "definicao": "Redes informais de cooperação e intercâmbio de dados entre cientistas líderes de uma mesma especialidade ao redor do mundo.",
            "exemploBiblioteca": "Mapeamento das redes de consultores legislativos de parlamentos mundiais que trocam minutas sobre regulamentação digital.",
        },
    ],
    "9.2": [
        {
            "termo": "Acesso Aberto (Open Access)",
            "definicao": "Movimento global que defende o acesso digital gratuito, público e sem barreiras de licenciamento a publicações científicas financiadas com fundos públicos.",
            "exemploBiblioteca": "A política de acesso aberto da Câmara que disponibiliza 100% da produção bibliográfica institucional sem custos para a sociedade.",
        },
        {
            "termo": "Vias Verde, Dourada e Diamante",
            "definicao": "Verde: autoarquivamento em repositórios; Dourada: periódicos com taxas (APCs); Diamante: periódicos gratuitos para autores e leitores.",
            "exemploBiblioteca": "A revista acadêmica da Câmara operando estritamente na Via Diamante, sem cobrança de taxa de processamento de artigos.",
        },
        {
            "termo": "Princípios FAIR",
            "definicao": "Diretrizes para que dados e metadados científicos sejam Localizáveis (Findable), Acessíveis (Accessible), Interoperáveis (Interoperable) e Reutilizáveis (Reusable).",
            "exemploBiblioteca": "Adesão aos princípios FAIR no repositório de dados de votações e emendas orçamentárias da Câmara.",
        },
        {
            "termo": "Declarações de Budapeste, Bethesda e Berlim",
            "definicao": "Marcos históricos fundacionais do movimento mundial de acesso aberto que definiram seus pilares e diretrizes.",
            "exemploBiblioteca": "Fundamentação teórica do ato da Mesa Diretora que instituiu o Repositório Digital BDCam em consonância com as declarações internacionais.",
        },
    ],
    "9.3": [
        {
            "termo": "Curadoria Digital",
            "definicao": "Manutenção, preservação e agregação de valor a dados de pesquisa e acervos digitais ao longo de todo o seu ciclo de vida.",
            "exemploBiblioteca": "Preservação e validação de metadados dos conjuntos de dados brutos que subsidiaram relatórios de comissões parlamentares de inquérito.",
        },
        {
            "termo": "Plano de Gestão de Dados (PGD / DMP)",
            "definicao": "Documento formal elaborado antes da pesquisa que descreve como os dados serão coletados, organizados, preservados e compartilhados.",
            "exemploBiblioteca": "Orientação do bibliotecário aos consultores legislativos na elaboração de PGDs para grandes estudos amostrais.",
        },
        {
            "termo": "Licenças Creative Commons (CC)",
            "definicao": "Instrumentos jurídicos padronizados que autorizam o público a utilizar, compartilhar e reutilizar obras protegidas por direitos autorais.",
            "exemploBiblioteca": "Adoção da licença CC BY 4.0 em todas as bases e publicações do portal da Câmara, permitindo livre reuso com citação da fonte.",
        },
        {
            "termo": "Lei de Direitos Autorais (Lei nº 9.610/1998)",
            "definicao": "Legislação brasileira que disciplina os direitos morais e patrimoniais de autores sobre criações do espírito expressas em qualquer suporte.",
            "exemploBiblioteca": "Aplicação das exceções e limitações do direito autoral para cópia e consulta em bibliotecas públicas sem infração legal.",
        },
    ],
    "9.4": [
        {
            "termo": "Lei de Bradford (Dispersão)",
            "definicao": "Lei bibliométrica que estabelece que um núcleo reduzido de periódicos concentra a maior parte dos artigos relevantes sobre determinado tema.",
            "exemploBiblioteca": "Otimização das assinaturas da biblioteca selecionando os periódicos de direito público que compõem o núcleo de Bradford.",
        },
        {
            "termo": "Lei de Lotka (Produtividade dos Autores)",
            "definicao": "Lei empírica que postula que um pequeno número de autores muito prolíficos produz a maioria das publicações em determinado campo.",
            "exemploBiblioteca": "Identificação dos autores parlamentares e juristas mais citados na tramitação de matérias econômicas.",
        },
        {
            "termo": "Lei de Zipf (Frequência de Palavras)",
            "definicao": "Princípio do menor esforço que demonstra que poucas palavras têm frequência altíssima no texto, enquanto a maioria ocorre raramente.",
            "exemploBiblioteca": "Ajuste de stop words em mecanismos de busca de discursos parlamentares para ignorar termos de frequência extrema sem valor semântico.",
        },
        {
            "termo": "Altmetria (Métricas Alternativas)",
            "definicao": "Medição do impacto de publicações acadêmicas em redes sociais, notícias, blogs, políticas públicas e gerenciadores de referências.",
            "exemploBiblioteca": "Monitoramento de menções e downloads de relatórios da consultoria da Câmara no Twitter, portais de notícias e Wikipédia.",
        },
    ],

    # =========================================================================
    # MÓDULO 10: PROCESSO LEGISLATIVO E NORMAS DA CÂMARA
    # =========================================================================
    "10.2": [
        {
            "termo": "Processo Legislativo Constitucional",
            "definicao": "Conjunto de atos e procedimentos previstos na CF/88 (arts. 59 a 69) para elaboração de emendas, leis, medidas provisórias e decretos legislativos.",
            "exemploBiblioteca": "Classificação jurídica das proposições em tramitação para correta catalogação de suas fases na base de dados.",
        },
        {
            "termo": "Bicameralismo e Casa Iniciadora",
            "definicao": "Sistema em que duas Casas compõem o Parlamento; a Casa iniciadora vota a matéria primeiro e a Casa revisora pode aprovar, emendar ou rejeitar.",
            "exemploBiblioteca": "Acompanhamento da tramitação de projetos iniciados na Câmara dos Deputados e remetidos ao Senado Federal.",
        },
        {
            "termo": "Quórum de Aprovação",
            "definicao": "Número mínimo de votos exigido para aprovação: maioria simples para leis ordinárias e maioria absoluta para leis complementares.",
            "exemploBiblioteca": "Registro fidedigno do tipo de matéria e quórum nas ementas documentárias para consulta da mesa da presidência.",
        },
        {
            "termo": "Sanção e Veto Presidencial",
            "definicao": "Ato privativo do Presidente da República de concordância (sanção) ou recusa parcial/total (veto) ao projeto aprovado pelo Congresso.",
            "exemploBiblioteca": "Catalogação de mensagens presidenciais de veto e atualização imediata do status da lei na biblioteca.",
        },
    ],
    "10.3": [
        {
            "termo": "Comissões Parlamentares",
            "definicao": "Órgãos colegiados integrados por deputados constituídos para debater matérias técnicas especializadas antes do Plenário.",
            "exemploBiblioteca": "Fornecimento de pesquisas temáticas diretamente aos consultores da Comissão de Constituição e Justiça e de Cidadania (CCJC).",
        },
        {
            "termo": "Poder Conclusivo das Comissões",
            "definicao": "Competência conferida pelo Regimento para que a comissão vote definitivamente o projeto de lei sem necessidade de ir ao Plenário, salvo recurso.",
            "exemploBiblioteca": "Identificação em catálogo do rito conclusivo da proposição para fins de histórico e publicação nos diários da Casa.",
        },
        {
            "termo": "Comissão Parlamentar de Inquérito (CPI)",
            "definicao": "Comissão temporária dotada de poderes de investigação próprios das autoridades judiciais para apurar fato determinado e por prazo certo.",
            "exemploBiblioteca": "Tratamento confidencial de acervos documentais e depoimentos coletados por CPIs depositados no CEDI.",
        },
        {
            "termo": "Relator e Parecer",
            "definicao": "Deputado designado para analisar a matéria e emitir relatório e voto; uma vez aprovado pelo colegiado, passa a se chamar Parecer da Comissão.",
            "exemploBiblioteca": "Catalogação analítica do parecer do relator, destacando o voto em separado e emendas acatadas.",
        },
    ],
    "10.4": [
        {
            "termo": "Espécies de Proposições Legislativas",
            "definicao": "Tipologia regimental: Proposta de Emenda à Constituição (PEC), Projeto de Lei (PL), Projeto de Decreto Legislativo (PDC) e Requerimento.",
            "exemploBiblioteca": "Indexação precisa de siglas e numerações regimentais que alimentam os filtros de busca do portal da Câmara.",
        },
        {
            "termo": "Regime de Urgência",
            "definicao": "Mecanismo regimental que dispensa exigências, prazos e formalidades para que a proposição seja imediatamente apreciada em Plenário.",
            "exemploBiblioteca": "Alerta aos bibliotecários de referência para atendimento com prioridade máxima de solicitações ligadas a matérias com urgência aprovada.",
        },
        {
            "termo": "Substitutivo",
            "definicao": "Emenda global apresentada pelo relator ou comissão que substitui integralmente o texto do projeto original sob análise.",
            "exemploBiblioteca": "Vinculação semântica no sistema entre o projeto original e seu substitutivo para que o usuário compreenda a evolução do texto.",
        },
        {
            "termo": "Prejudicialidade e Arquivamento",
            "definicao": "Extinção da tramitação de uma matéria por ter sido rejeitada, perdido o objeto ou por aprovação de outra proposição em sentido contrário.",
            "exemploBiblioteca": "Atualização dos metadados de status para que documentos arquivados não apareçam como projetos vigentes.",
        },
    ],
    "10.5": [
        {
            "termo": "Artigos 48 a 75 da CF/88",
            "definicao": "Núcleo constitucional que estabelece as atribuições do Congresso Nacional e as competências privativas da Câmara dos Deputados (art. 51).",
            "exemploBiblioteca": "Fundamentação de dossiê técnico sobre as competências exclusivas da Câmara na autorização de processo contra o Presidente da República.",
        },
        {
            "termo": "Imunidades Parlamentares",
            "definicao": "Prerrogativas constitucionais conferidas aos membros do Parlamento: material (inviolabilidade por palavras e votos) e formal (processual/prisão).",
            "exemploBiblioteca": "Compilação de doutrina sobre os limites da imunidade material para a assessoria jurídica da Mesa Diretora.",
        },
        {
            "termo": "Fiscalização Contábil, Financeira e Orçamentária",
            "definicao": "Competência do Poder Legislativo exercida mediante controle externo com o auxílio técnico do Tribunal de Contas da União (TCU).",
            "exemploBiblioteca": "Integração das publicações de acórdãos e relatórios do TCU no catálogo compartilhado da RVBI.",
        },
        {
            "termo": "Perda de Mandato Parlamentar",
            "definicao": "Hipóteses constitucionais (art. 55) em que o mandato é cassado por deliberação do Plenário ou declarado extinto pela Mesa Diretora.",
            "exemploBiblioteca": "Registro histórico nos perfis dos parlamentares na base de dados de ex-deputados da Câmara.",
        },
    ],
    "10.6": [
        {
            "termo": "Regimento Comum do Congresso Nacional (RCCN)",
            "definicao": "Norma regulamentadora das sessões conjuntas da Câmara e do Senado, das comissões mistas e da deliberação sobre matérias orçamentárias e vetos.",
            "exemploBiblioteca": "Catalogação de pareceres emitidos pela Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO).",
        },
        {
            "termo": "Sessão Conjunta",
            "definicao": "Reunião simultânea dos deputados federais e senadores no plenário da Câmara dos Deputados presidida pelo Presidente do Senado Federal.",
            "exemploBiblioteca": "Catalogação das atas e diários do Congresso Nacional relativos à apreciação de vetos presidenciais.",
        },
        {
            "termo": "Comissão Mista de Orçamento (CMO)",
            "definicao": "Colegiado paritário composto por deputados e senadores encarregado de examinar e emitir parecer sobre o PPA, a LDO e a LOA.",
            "exemploBiblioteca": "Atendimento técnico contínuo à Consultoria de Orçamento da Câmara na análise de emendas parlamentares.",
        },
        {
            "termo": "Apreciação de Vetos em Sessão Conjunta",
            "definicao": "Procedimento regimental em que o veto presidencial só é rejeitado pela maioria absoluta de votos de ambas as Casas legislativas.",
            "exemploBiblioteca": "Registro da derrubada de vetos e a subsequente promulgação de trechos legais pelo Presidente do Congresso Nacional.",
        },
    ],

    # =========================================================================
    # MÓDULO 11: DIREITO PÚBLICO E ADMINISTRAÇÃO PÚBLICA
    # =========================================================================
    "11.1": [
        {
            "termo": "Princípios Constitucionais (LIMPE)",
            "definicao": "Princípios fundamentais do art. 37 da CF/88: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
            "exemploBiblioteca": "Aplicação do princípio da publicidade no livre acesso às informações e gastos públicos na administração da biblioteca.",
        },
        {
            "termo": "Administração Pública Direta vs. Indireta",
            "definicao": "Direta compreende os órgãos integrantes das pessoas políticas (União, Estados, DF, Municípios); Indireta compreende autarquias, fundações e estatais.",
            "exemploBiblioteca": "A Câmara dos Deputados atuando como órgão independente da Administração Direta da União.",
        },
        {
            "termo": "Desconcentração vs. Descentralização",
            "definicao": "Desconcentração é a partição de competências dentro de uma mesma pessoa jurídica (órgãos); descentralização cria nova pessoa jurídica.",
            "exemploBiblioteca": "A criação do CEDI como órgão interno da Câmara por ato regimental constitui caso clássico de desconcentração administrativa.",
        },
        {
            "termo": "Autotutela Administrativa",
            "definicao": "Poder da administração de anular seus próprios atos quando eivados de vícios de legalidade, ou revogá-los por conveniência e oportunidade.",
            "exemploBiblioteca": "Anulação de ato de descarte de acervo que não tenha observado o rito legal previsto em norma institucional.",
        },
    ],
    "11.2": [
        {
            "termo": "Elementos do Ato Administrativo (COMFIFOR)",
            "definicao": "Requisitos de validade: Competência, Finalidade, Forma, Motivo e Objeto.",
            "exemploBiblioteca": "Elaboração de termo de doação de livros contendo motivo justificado, competência da chefia e forma escrita oficial.",
        },
        {
            "termo": "Atributos do Ato (PATI)",
            "definicao": "Características dos atos administrativos: Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.",
            "exemploBiblioteca": "Presunção de que certidões e relatórios emitidos pela Biblioteca Pedro Aleixo são verdadeiros e conformes à lei.",
        },
        {
            "termo": "Atos Vinculados vs. Discricionários",
            "definicao": "Vinculado é aquele em que a lei não deixa margem de escolha; discricionário permite juízo de conveniência e oportunidade nos limites da lei.",
            "exemploBiblioteca": "A escolha dos temas das exposições culturais da biblioteca como ato discricionário da direção do CEDI.",
        },
        {
            "termo": "Anulação vs. Revogação",
            "definicao": "Anulação extingue ato ilegal com efeitos retroativos (ex tunc); revogação extingue ato legal inconveniente com efeitos prospectivos (ex nunc).",
            "exemploBiblioteca": "Revogação de uma portaria interna sobre horários de empréstimo para atender ao novo expediente da Câmara.",
        },
    ],
    "11.3": [
        {
            "termo": "Regime Jurídico Único (Lei nº 8.112/1990)",
            "definicao": "Estatuto federal que disciplina os direitos, deveres, proibições e regime disciplinar dos servidores públicos civis da União.",
            "exemploBiblioteca": "Regulação da posse, exercício, estágio probatório e estabilidade do Analista Legislativo - Biblioteconomia.",
        },
        {
            "termo": "Estágio Probatório e Estabilidade",
            "definicao": "Período de 3 anos de efetivo exercício com avaliação especial de desempenho exigido para aquisição da estabilidade no cargo público.",
            "exemploBiblioteca": "Avaliação de desempenho do novo servidor bibliotecário por comissão instituída pela Diretoria-Geral da Câmara.",
        },
        {
            "termo": "Formas de Provimento (Lei nº 8.112/90)",
            "definicao": "Modalidades de investidura: nomeação (única originária), promoção, readaptação, reversão, aproveitamento, reintegração e recondução.",
            "exemploBiblioteca": "Nomeação de candidatos aprovados no concurso público para posse em vaga desocupada por aposentadoria.",
        },
        {
            "termo": "Deveres e Proibições do Servidor",
            "definicao": "Obrigações funcionais (zelo, lealdade, sigilo) e vedações (valer-se do cargo para proveito próprio, exercer comércio em serviço).",
            "exemploBiblioteca": "Manutenção rigorosa de conduta ética e apartidária no atendimento a todos os gabinetes parlamentares.",
        },
    ],
    "11.4": [
        {
            "termo": "Processo Administrativo Federal (Lei nº 9.784/1999)",
            "definicao": "Norma geral que regula o processo administrativo no âmbito da Administração Pública Federal para garantir direitos dos administrados.",
            "exemploBiblioteca": "Rito seguido para apuração de extravio culposo de obra rara da biblioteca e cobrança de indenização.",
        },
        {
            "termo": "Processo Administrativo Disciplinar (PAD)",
            "definicao": "Instrumento destinado a apurar responsabilidade de servidor por infração praticada no exercício de suas atribuições que comine demissão ou suspensão.",
            "exemploBiblioteca": "Comissão de três servidores estáveis designada para instruir autos com ampla defesa e contraditório.",
        },
        {
            "termo": "Princípios do Processo Administrativo",
            "definicao": "Contraditório, ampla defesa, oficialidade, informalismo moderado, verdade material e motivação das decisões.",
            "exemploBiblioteca": "Necessidade de fundamentar formalmente qualquer indeferimento de acesso a documento arquivado.",
        },
        {
            "termo": "Sindicância",
            "definicao": "Procedimento investigativo sumário preparatório destinado a apurar autoria ou materialidade antes da instauração do PAD.",
            "exemploBiblioteca": "Sindicância para identificar responsáveis por dano físico ocorrido em equipamentos da sala de leitura.",
        },
    ],
    "11.5": [
        {
            "termo": "Poder de Polícia",
            "definicao": "Atividade estatal discricionária que limita ou disciplina direitos, interesses ou liberdades em benefício do interesse público.",
            "exemploBiblioteca": "Atuação da Polícia Legislativa da Câmara controlando crachás, bagagens e acesso aos recintos da biblioteca.",
        },
        {
            "termo": "Poder Hierárquico e Disciplinar",
            "definicao": "Hierárquico organiza, fiscaliza e delega atribuições internamente; disciplinar pune internamente servidores que cometem faltas.",
            "exemploBiblioteca": "A chefia imediata da biblioteca delegando atribuições de supervisão de turno aos analistas seniores.",
        },
        {
            "termo": "Poder Regulamentar",
            "definicao": "Prerrogativa conferida aos chefes do Executivo e Mesas Diretoras de expedir decretos e portarias para fiel execução das leis.",
            "exemploBiblioteca": "Ato da Mesa da Câmara regulamentando o empréstimo interinstitucional de obras entre bibliotecas públicas.",
        },
        {
            "termo": "Abuso de Poder (Excesso vs. Desvio)",
            "definicao": "Excesso de poder ocorre quando o agente atua fora de sua competência legal; desvio de finalidade ocorre quando busca fim alheio ao interesse público.",
            "exemploBiblioteca": "Proibição expressa de usar recursos da biblioteca para fins de autopromoção partidária de qualquer parlamentar.",
        },
    ],
    "11.6": [
        {
            "termo": "Responsabilidade Civil Objetiva do Estado",
            "definicao": "Dever estatal de indenizar danos causados por seus agentes no exercício da função, independentemente de dolo ou culpa (art. 37, § 6º da CF/88).",
            "exemploBiblioteca": "A União indenizando pesquisador cujo notebook foi danificado por queda de teto na biblioteca durante reforma da Casa.",
        },
        {
            "termo": "Teoria do Risco Administrativo",
            "definicao": "Doutrina que fundamenta a responsabilidade objetiva, admitindo excludentes: culpa exclusiva da vítima, caso fortuito e força maior.",
            "exemploBiblioteca": "Isenção de responsabilidade do órgão se o visitante danificou voluntariamente seu próprio celular ao tropeçar desatento.",
        },
        {
            "termo": "Direito de Regresso",
            "definicao": "Ação regressiva pela qual o Estado cobra do servidor o valor da indenização paga a terceiros, nos casos de dolo ou culpa do servidor.",
            "exemploBiblioteca": "Cobrança regressiva caso um servidor jogue intencionalmente água sobre material de um visitante credenciado.",
        },
        {
            "termo": "Responsabilidade por Omissão",
            "definicao": "Regra geral subjetiva (falha do serviço / faute du service), exigindo comprovação de que o Estado tinha o dever legal de agir e foi negligente.",
            "exemploBiblioteca": "Análise de omissão caso o sistema de proteção contra incêndio estivesse inoperante sem manutenção programada.",
        },
    ],
    "11.7": [
        {
            "termo": "Lei de Improbidade Administrativa (Lei nº 8.429/1992)",
            "definicao": "Norma reformada pela Lei nº 14.230/2021 que pune atos que causam enriquecimento ilícito, dano ao erário ou violação de princípios.",
            "exemploBiblioteca": "Tipificação rigorosa que exige comprovação de dolo específico para configuração do ato de improbidade.",
        },
        {
            "termo": "Exigência de Dolo Específico (Reforma 2021)",
            "definicao": "Não se admite mais a modalidade culposa em improbidade; exige-se a vontade livre e consciente de alcançar o resultado ilícito.",
            "exemploBiblioteca": "Mero erro formal ou imperícia no inventário de livros não configura improbidade, exigindo apuração apenas disciplinar se cabível.",
        },
        {
            "termo": "Sanções por Improbidade",
            "definicao": "Penalidades cominadas judicialmente: perda da função pública, suspensão dos direitos políticos, ressarcimento ao erário e multa civil.",
            "exemploBiblioteca": "Perda do cargo público de gestor que desviar verbas destinadas à aquisição de obras raras para benefício próprio.",
        },
        {
            "termo": "Princípio da Intranscendência das Penas",
            "definicao": "Regra que assegura que as sanções por ato de improbidade não podem passar da pessoa do agente condenado.",
            "exemploBiblioteca": "A responsabilidade patrimonial atinge sucessores até o limite do valor da herança transferida.",
        },
    ],
    "11.8": [
        {
            "termo": "Modelos de Administração Pública",
            "definicao": "Evolução histórica da gestão pública: Patrimonialismo (confusão público-privado), Burocracia (regras e impessoalidade) e Gerencialismo (resultados).",
            "exemploBiblioteca": "Transição da gestão de acervos focada em carimbos e fichários burocráticos para sistemas ágeis orientados à satisfação do usuário.",
        },
        {
            "termo": "Burocracia Weberiana",
            "definicao": "Modelo organizacional racional-legal baseado na hierarquia formal, divisão rigorosa do trabalho, regras escritas e meritocracia.",
            "exemploBiblioteca": "O concurso público para bibliotecário como expressão pura do princípio weberiano da competência técnica comprovada.",
        },
        {
            "termo": "Nova Gestão Pública (NPM)",
            "definicao": "Movimento de reforma da década de 1990 que introduziu conceitos de gestão privada: foco no cidadão-cliente, eficiência e contratualização.",
            "exemploBiblioteca": "Adoção de metas de satisfação e acordos de nível de serviço (SLA) para entrega de pesquisas legislativas aos deputados.",
        },
        {
            "termo": "Nova Governança Pública (NPG)",
            "definicao": "Paradigma contemporâneo baseado em redes de cooperação, coprodução de serviços públicos, transparência ativa e participação social.",
            "exemploBiblioteca": "Projetos de ciência cidadã e transcrição colaborativa de acervos históricos com a participação da sociedade civil no portal da Câmara.",
        },
    ],
    "11.9": [
        {
            "termo": "Governança Pública (Decreto nº 9.203/2017)",
            "definicao": "Conjunto de mecanismos de liderança, estratégia e controle postos em prática para avaliar, direcionar e monitorar a gestão pública.",
            "exemploBiblioteca": "Atuação do Comitê de Governança Digital da Câmara para homologar novos projetos de modernização da biblioteca.",
        },
        {
            "termo": "Princípios da Governança (Decreto nº 9.203)",
            "definicao": "Capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas (accountability) e transparência.",
            "exemploBiblioteca": "Publicação anual de relatórios de gestão da biblioteca demonstrando custos e volumes de consultas atendidas.",
        },
        {
            "termo": "Mecanismos de Governança",
            "definicao": "Três pilares fundamentais: Liderança (pessoas e competências), Estratégia (diretrizes e metas) e Controle (gestão de riscos e auditoria).",
            "exemploBiblioteca": "Elaboração da Matriz de Riscos de TI da Biblioteca Pedro Aleixo para mitigar falhas de backup no repositório digital.",
        },
        {
            "termo": "Accountability",
            "definicao": "Dever legal e ético de prestar contas, assumir responsabilidade pelos atos e resultados e submeter-se ao escrutínio público.",
            "exemploBiblioteca": "Disponibilização do catálogo patrimonial de obras raras para auditoria regular do TCU e dos órgãos de controle interno.",
        },
    ],
    "11.10": [
        {
            "termo": "Modalidades de Licitação (Lei nº 14.133/2021)",
            "definicao": "Rol taxativo de cinco modalidades: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo (Convite e Tomada de Preços foram extintos).",
            "exemploBiblioteca": "Uso obrigatório do Pregão Eletrônico pela Câmara para a aquisição de assinaturas de bases de dados acadêmicas e serviços comuns.",
        },
        {
            "termo": "Inversão de Fases",
            "definicao": "Regra geral procedimental da nova lei em que a fase de julgamento de propostas antecede a fase de habilitação documental dos licitantes.",
            "exemploBiblioteca": "Abertura apenas dos envelopes de documentos de habilitação da empresa vencedora na licitação de scanners planetários da biblioteca.",
        },
        {
            "termo": "Inexigibilidade vs. Dispensa",
            "definicao": "Inexigibilidade ocorre quando há inviabilidade de competição (exclusividade, notória especialização); dispensa ocorre quando a competição é viável, mas a lei desobriga o certame.",
            "exemploBiblioteca": "Inexigibilidade na contratação de restaurador de renome internacional para recuperar exemplar único de 1823.",
        },
        {
            "termo": "Estudo Técnico Preliminar (ETP)",
            "definicao": "Documento constitutivo da fase preparatória que evidencia o problema público a ser resolvido e a melhor solução técnica disponível.",
            "exemploBiblioteca": "Elaboração de ETP pela equipe da biblioteca para justificar a migração do software de gerenciamento de acervos para nuvem.",
        },
    ],
    "11.11": [
        {
            "termo": "Cláusulas Exorbitantes",
            "definicao": "Prerrogativas especiais conferidas à Administração Pública nos contratos administrativos (alteração unilateral, rescisão unilateral, fiscalização).",
            "exemploBiblioteca": "Alteração unilateral de até 25% no contrato de encadernação para atender ao aumento inesperado de relatórios parlamentares.",
        },
        {
            "termo": "Fiscal Técnico vs. Gestor do Contrato",
            "definicao": "O fiscal acompanha diariamente a conformidade técnica da execução do objeto; o gestor coordena os aspectos administrativos gerais e termos aditivos.",
            "exemploBiblioteca": "O bibliotecário designado como fiscal técnico conferindo se os livros entregues pela editora correspondem exatamente às edições solicitadas.",
        },
        {
            "termo": "Serviços Contínuos (Prazo de até 10 Anos)",
            "definicao": "Regra da Lei nº 14.133/2021 que permite contratos de serviços e fornecimentos contínuos com prazo inicial de até 5 anos, prorrogáveis até 10 anos.",
            "exemploBiblioteca": "Contrato de suporte técnico e manutenção do sistema integrado de bibliotecas celebrado para vigência plurianual.",
        },
        {
            "termo": "Sanções da Nova Lei de Licitações",
            "definicao": "Advertência, multa, impedimento de licitar (atinge a Administração Direta/Indireta do ente por até 3 anos) e declaração de inidoneidade (atinge todos os entes por até 6 anos).",
            "exemploBiblioteca": "Aplicação de multa à fornecedora de papel alcalino neutro que atrasar a entrega das caixas de acondicionamento para o acervo raro.",
        },
    ],
    "11.12": [
        {
            "termo": "Transparência Ativa vs. Passiva (LAI)",
            "definicao": "Ativa é a disponibilização espontânea de dados de interesse coletivo em sítios oficiais; passiva é o fornecimento de informação em resposta a pedido formal do cidadão.",
            "exemploBiblioteca": "Publicação proativa do catálogo da biblioteca e gastos de aquisição no portal da Câmara como transparência ativa.",
        },
        {
            "termo": "Prazos de Resposta da LAI (Lei nº 12.527/2011)",
            "definicao": "Acesso imediato se disponível; caso contrário, prazo de até 20 dias, prorrogável justificadamente por mais 10 dias.",
            "exemploBiblioteca": "Atendimento a pedido formulado via e-SIC sobre relatórios de consulta pública realizados pela biblioteca.",
        },
        {
            "termo": "Graus de Sigilo e Prazos Máximos",
            "definicao": "Três categorias legais de classificação da informação: Ultrassecreta (máximo 25 anos), Secreta (15 anos) e Reservada (5 anos).",
            "exemploBiblioteca": "Identificação de notas técnicas ministeriais desclassificadas após expiração do prazo de 15 anos para livre consulta na biblioteca.",
        },
        {
            "termo": "LGPD na Administração Pública (Lei nº 13.709/2018)",
            "definicao": "Tratamento de dados pessoais pelo poder público para o cumprimento de finalidades públicas e execução de competências legais com transparência.",
            "exemploBiblioteca": "Anonimização de CPFs e telefones de pesquisadores no cadastro aberto de empréstimos entre bibliotecas.",
        },
    ],

    # =========================================================================
    # MÓDULO 12: LÍNGUA INGLESA APLICADA
    # =========================================================================
    "12.1": [
        {
            "termo": "Skimming e Scanning",
            "definicao": "Técnicas de leitura rápida: skimming identifica a ideia geral e o tom do texto; scanning localiza informações pontuais específicas (datas, nomes).",
            "exemploBiblioteca": "Localizar rapidamente a data de publicação de uma diretriz da IFLA em inglês sem ler o manual inteiro.",
        },
        {
            "termo": "Tópico Frasal (Topic Sentence)",
            "definicao": "Primeira frase ou oração nuclear de um parágrafo que resume sua ideia central e orienta o desenvolvimento do argumento.",
            "exemploBiblioteca": "Leitura focada dos tópicos frasais de um artigo sobre preservação digital para elaborar resumo executivo para a chefia.",
        },
        {
            "termo": "Gênero Textual Acadêmico em Inglês",
            "definicao": "Estrutura típica de artigos científicos (IMRAD: Introduction, Methods, Results, and Discussion) com linguagem impessoal.",
            "exemploBiblioteca": "Identificação das seções de resultados de um artigo da Journal of the Association for Information Science and Technology (JASIST).",
        },
        {
            "termo": "Inferência Contextual",
            "definicao": "Habilidade de deduzir o significado de vocábulos desconhecidos a partir das pistas sintáticas e do contexto discursivo geral.",
            "exemploBiblioteca": "Compreender o sentido da expressão 'data curation workflow' em manual técnico da Library of Congress sem usar dicionário.",
        },
    ],
    "12.2": [
        {
            "termo": "Discourse Markers (Conectivos)",
            "definicao": "Palavras e locuções que estabelecem relações lógicas entre orações: adição, contraste, causa, consequência, conclusão.",
            "exemploBiblioteca": "Identificar a relação de contraste indicada pelo conectivo 'However' em texto da IFLA sobre acesso aberto.",
        },
        {
            "termo": "Conectivos de Oposição e Concessão",
            "definicao": "Termos chave: Although, Even though, Despite, In spite of, However, Nevertheless, On the other hand, Whereas.",
            "exemploBiblioteca": "O Cebraspe frequentemente pergunta se 'Although' pode ser substituído por 'Despite' sem alterar o sentido (atenção à estrutura gramatical seguinte).",
        },
        {
            "termo": "Conectivos de Causa e Consequência",
            "definicao": "Causa: Because, Since, As, Due to; Consequência: Therefore, Thus, Consequently, Hence, As a result.",
            "exemploBiblioteca": "Identificar a relação causal em: 'Due to severe budget constraints, the digitisation project was delayed'.",
        },
        {
            "termo": "Conectivos de Adição e Ênfase",
            "definicao": "Adição: Furthermore, Moreover, In addition, Besides; Ênfase: Indeed, Notably, In fact, Particularly.",
            "exemploBiblioteca": "Reconhecer que 'Furthermore' introduz um novo argumento convergente em texto sobre metadados Linked Data.",
        },
    ],
    "12.3": [
        {
            "termo": "Anáfora e Catáfora em Inglês",
            "definicao": "Anáfora retoma elemento textual anterior; catáfora antecipa elemento que será introduzido adiante no discurso.",
            "exemploBiblioteca": "Questão clássica Cebraspe: identificar a que substantivo o pronome 'its' ou 'they' se refere no parágrafo 2.",
        },
        {
            "termo": "Pronomes Relativos (Relative Pronouns)",
            "definicao": "Who (pessoas), Which (coisas/animais), That (pessoas/coisas em restritivas) e Whose (posse).",
            "exemploBiblioteca": "Analisar se a omissão do pronome relativo em orações adjetivas restritivas prejudica a correção gramatical da frase.",
        },
        {
            "termo": "Elipse e Substituição",
            "definicao": "Mecanismos de coesão que evitam repetições desnecessárias omitindo termos facilmente recuperáveis pelo contexto ('one', 'do so').",
            "exemploBiblioteca": "Compreender que 'the modern ones' retoma 'the ancient libraries' citado na linha anterior.",
        },
        {
            "termo": "Cadeia Coesiva Lexical",
            "definicao": "Uso de sinônimos, hiperônimos e termos derivados para manter o fluxo temático sem repetição vocabular excessiva.",
            "exemploBiblioteca": "O autor alternando 'records', 'documents', 'archives' e 'materials' para se referir ao mesmo acervo histórico.",
        },
    ],
    "12.4": [
        {
            "termo": "Falsos Cognatos (False Friends)",
            "definicao": "Palavras com grafia ou som semelhantes em português e inglês, mas com significados completamente distintos.",
            "exemploBiblioteca": "'Library' é biblioteca (e não livraria, que é 'bookstore'); 'Policy' é política/diretriz (e não polícia, que é 'police').",
        },
        {
            "termo": "Modal Verbs (Verbos Modais)",
            "definicao": "Verbos auxiliares que expressam graus de certeza, obrigação, permissão ou probabilidade: must, should, may, might, can, could.",
            "exemploBiblioteca": "O Cebraspe explora a troca de 'may' (possibilidade/permissão) por 'must' (obrigação/certeza) para tornar o item errado.",
        },
        {
            "termo": "Voz Passiva Acadêmica",
            "definicao": "Estrutura (be + past participle) utilizada em textos formais para dar ênfase à ação ou ao objeto, mantendo a impessoalidade do autor.",
            "exemploBiblioteca": "Tradução e julgamento de frases como 'The rare manuscripts were restored by the conservation team'.",
        },
        {
            "termo": "Paráfrase Cebraspe",
            "definicao": "Item de prova que reescreve uma frase do texto em inglês com outras palavras mantendo o sentido original estrito.",
            "exemploBiblioteca": "Avaliar se 'digital preservation ensures perennity' expressa exatamente a mesma ideia de 'digital curation guarantees long-term survival'.",
        },
    ],

    # =========================================================================
    # MÓDULO 13: LÍNGUA PORTUGUESA E REDAÇÃO OFICIAL
    # =========================================================================
    "13.2": [
        {
            "termo": "Reescritura e Paráfrase no Padrão Cebraspe",
            "definicao": "Tipo de item que propõe alteração da ordem, vocabulário ou pontuação de um trecho exigindo avaliação de sentido e correção gramatical.",
            "exemploBiblioteca": "Reescrever despachos legislativos garantindo clareza, concisão e estrita observância à norma culta.",
        },
        {
            "termo": "Sentido Original vs. Correção Gramatical",
            "definicao": "Distingo fundamental do Cebraspe: uma proposta de reescritura pode ser gramaticalmente impecável, mas alterar o sentido pretendido pelo autor.",
            "exemploBiblioteca": "Trocar 'todos os livros que continham erros' por 'todos os livros, que continham erros' (restritiva vs. explicativa: altera o sentido).",
        },
        {
            "termo": "Inversão de Termos da Oração",
            "definicao": "Deslocamento de adjuntos adverbiais ou complementos para o início da frase com exigência de vírgulas obrigatórias ou facultativas.",
            "exemploBiblioteca": "Avaliar se o deslocamento do adjunto adverbial de tempo para o início do período exige vírgula de isolamento.",
        },
        {
            "termo": "Equivalência Semântica de Conjunções",
            "definicao": "Substituição de conectivos mantendo a mesma classe lógica (ex.: 'conquanto' por 'embora'; 'porquanto' por 'porque').",
            "exemploBiblioteca": "Cuidado com 'porquanto' (explicativa/causal) vs. 'conquanto' (concessiva), armadilha clássica da banca Cebraspe.",
        },
    ],
    "13.3": [
        {
            "termo": "Crase e Regência",
            "definicao": "Fusão da preposição 'a' exigida pelo termo regente com o artigo feminino 'a' ou pronomes demonstrativos.",
            "exemploBiblioteca": "Uso correto: 'Acesso à informação' (regência de acesso exige preposição 'a' + artigo 'a').",
        },
        {
            "termo": "Concordância Verbal e Nominal",
            "definicao": "Harmonização de número e pessoa entre o verbo e seu sujeito, e de gênero e número entre o substantivo e seus modificadores.",
            "exemploBiblioteca": "Atenção ao sujeito paciente posposto com a partícula 'se': 'Catalogaram-se novos livros' e não 'Catalogou-se novos livros'.",
        },
        {
            "termo": "Pontuação Sintática",
            "definicao": "Emprego de vírgulas, ponto e vírgula e travessões para demarcar limites sintáticos; proibição absoluta de separar sujeito e predicado por vírgula.",
            "exemploBiblioteca": "Isolamento de orações subordinadas adjetivas explicativas e termos intercalados em atas de sessões.",
        },
        {
            "termo": "Partícula 'SE': Apassivador vs. Indeterminação",
            "definicao": "Pronome apassivador acompanha verbo transitivo direto com sujeito paciente; índice de indeterminação acompanha VTI, VI ou VL com verbo na 3ª pessoa do singular.",
            "exemploBiblioteca": "Diferenciar 'Precisou-se de mais bibliotecários' (VTI: índice, singular) de 'Contrataram-se mais bibliotecários' (VTD: apassivador, plural).",
        },
    ],
    "13.4": [
        {
            "termo": "Manual de Redação da Presidência da República (MRPR)",
            "definicao": "Documento normativo que padroniza a redação dos atos e comunicações oficiais do Poder Executivo e do serviço público federal.",
            "exemploBiblioteca": "Redação de memorandos, ofícios e notas técnicas da biblioteca de acordo com os atributos da redação oficial.",
        },
        {
            "termo": "Atributos da Redação Oficial",
            "definicao": "Clareza, precisão, concisão, impessoalidade, formalidade e padronização, e uso do padrão culto da língua.",
            "exemploBiblioteca": "Eliminação de jargões desnecessários e adjetivações emocionais em relatórios dirigidos à Mesa Diretora.",
        },
        {
            "termo": "Pronomes de Tratamento no MRPR (3ª Edição)",
            "definicao": "Simplificação oficial: 'Vossa Excelência' reservada aos chefes de poder, parlamentares e ministros; 'Vossa Senhoria' para as demais autoridades e cidadãos.",
            "exemploBiblioteca": "Endereçamento correto em ofício: 'A Sua Excelência o Senhor Deputado Federal...'.",
        },
        {
            "termo": "Colocação Pronominal (Próclise, Mesóclise e Ênclise)",
            "definicao": "Regras de posicionamento do pronome átono: atrativos de próclise (palavras negativas, advérbios, pronomes relativos) e proibição de iniciar frase com pronome.",
            "exemploBiblioteca": "Emprego mesoclítico em tempos de futuro: 'Apresentar-se-á o novo relatório em plenário' quando não houver termo atrativo.",
        },
    ],

    # =========================================================================
    # MÓDULO 14: TECNOLOGIA DA INFORMAÇÃO E ANÁLISE DE DADOS
    # =========================================================================
    "14.1": [
        {
            "termo": "Microsoft 365 e Nuvem Corporativa",
            "definicao": "Suíte de produtividade e colaboração em nuvem (Teams, SharePoint, OneDrive, Word, Excel) adotada na administração pública.",
            "exemploBiblioteca": "Armazenamento compartilhado de minutas e controle de versão de pareceres no SharePoint da biblioteca.",
        },
        {
            "termo": "Controle de Versão Colaborativo",
            "definicao": "Capacidade de múltiplos usuários editarem o mesmo documento simultaneamente com histórico de alterações auditável.",
            "exemploBiblioteca": "Edição simultânea por bibliotecários e técnicos do relatório semestral de aquisições no Word Online.",
        },
        {
            "termo": "SharePoint Online",
            "definicao": "Plataforma de intranet e gerenciamento eletrônico de documentos com controle granular de permissões e listas estruturadas.",
            "exemploBiblioteca": "Construção do portal interno da biblioteca para comunicação rápida com os gabinetes parlamentares.",
        },
        {
            "termo": "Segurança e Permissões de Acesso (RBAC)",
            "definicao": "Controle de acesso baseado em papéis (Role-Based Access Control) que restringe permissões a arquivos conforme a função do usuário.",
            "exemploBiblioteca": "Configuração de pastas restritas a servidores comissionados da Mesa Diretora para matérias em elaboração.",
        },
    ],
    "14.3": [
        {
            "termo": "Engenharia de Prompts (Prompt Engineering)",
            "definicao": "Técnica de estruturar instruções precisas, contexto, formato de saída e restrições para orientar modelos de linguagem (LLMs).",
            "exemploBiblioteca": "Criação de prompts padronizados para que a IA gere resumos estruturados de proposições orçamentárias no formato Cebraspe.",
        },
        {
            "termo": "Modelos de Linguagem Grande (LLMs)",
            "definicao": "Redes neurais treinadas em grandes volumes de texto baseadas na arquitetura Transformer capazes de gerar e analisar linguagem natural.",
            "exemploBiblioteca": "Uso de LLMs institucionais homologadas pela Câmara para extração de entidades em discursos parlamentares.",
        },
        {
            "termo": "Alucinação em IA (Hallucination)",
            "definicao": "Fenômeno em que o modelo gerador produz afirmações factualmente incorretas com alta confiança e tom plausível.",
            "exemploBiblioteca": "Necessidade indispensável de curadoria humana do bibliotecário para checar a veracidade de leis citadas por chatbots.",
        },
        {
            "termo": "Human-in-the-Loop (HITL)",
            "definicao": "Abordagem que integra a validação e supervisão humana em etapas críticas de tomada de decisão de sistemas de IA.",
            "exemploBiblioteca": "O bibliotecário revisando e aprovando os termos de indexação sugeridos automaticamente pelo algoritmo antes de publicá-los no catálogo.",
        },
    ],
    "14.4": [
        {
            "termo": "Ciência de Dados e Ciclo de Vida dos Dados",
            "definicao": "Campo multidisciplinar que engloba coleta, limpeza, exploração, modelagem estatística e comunicação de insights baseados em dados.",
            "exemploBiblioteca": "Análise da série histórica de 10 anos de empréstimos da biblioteca para prever demanda por novas aquisições.",
        },
        {
            "termo": "Mineração de Texto (Text Mining)",
            "definicao": "Extração de padrões, tendências e relações relevantes a partir de grandes volumes de texto não estruturado.",
            "exemploBiblioteca": "Agrupamento temático automático de discursos proferidos no Plenário da Câmara por análise de frequência de tópicos.",
        },
        {
            "termo": "Visualização de Dados e Storytelling",
            "definicao": "Comunicação de conclusões analíticas complexas por meio de gráficos eficazes (barras, box plots, mapas de calor) e narrativa lógica.",
            "exemploBiblioteca": "Painel em Power BI demonstrando aos diretores o crescimento no uso do repositório digital BDCam por estado brasileiro.",
        },
        {
            "termo": "Box Plot e Histograma",
            "definicao": "Gráficos estatísticos: box plot exibe mediana, quartis e outliers; histograma mostra a distribuição de frequência de variáveis contínuas.",
            "exemploBiblioteca": "Análise da distribuição do tempo de atendimento de solicitações parlamentares com detecção de valores discrepantes (outliers).",
        },
    ],
}
