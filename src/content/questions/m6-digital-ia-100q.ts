import type { CebraspeQuestion } from '../../domain/types';

export const simuladoDigitalIA100Q: CebraspeQuestion[] = [
  {
    "id": "m6-q-1",
    "numero": 1,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O DSpace é uma plataforma de software livre e de código aberto amplamente utilizada para a criação de repositórios institucionais, organizando seu acervo em uma estrutura hierárquica constituída por Comunidades, Subcomunidades, Coleções e Itens.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É a arquitetura conceitual clássica do DSpace: uma instituição abriga comunidades (ex: departamentos ou diretorias), que contêm coleções temáticas, as quais reúnem os itens com seus respectivos metadados e arquivos (bitstreams).",
    "armadilhaBanca": "Estrutura hierárquica do DSpace.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-2",
    "numero": 2,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "No DSpace, cada item depositado pode conter exclusivamente metadados textuais puros, sendo terminantemente vedado o upload ou armazenamento de arquivos digitais primários (bitstreams) como PDFs ou áudios.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O DSpace foi projetado especificamente para gerenciar tanto os metadados descritivos quanto os arquivos digitais de conteúdo (bitstreams e bundles), incluindo PDFs, imagens, vídeos, planilhas e áudios.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Proibir armazenamento de arquivos digitais no DSpace.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-3",
    "numero": 3,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O software Koha é um sistema integrado de gestão de bibliotecas (ILS) de código aberto que contempla módulos completos para catalogação com suporte ao MARC 21, circulação, aquisições, periódicos e catálogo público de acesso em linha (OPAC).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Koha foi o primeiro software livre ILS para bibliotecas e possui suporte integral aos padrões internacionais como MARC 21 e Z39.50.",
    "armadilhaBanca": "Módulos e características do Koha.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-4",
    "numero": 4,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O Open Journal Systems (OJS), conhecido no Brasil como Sistema Eletrônico de Editoração de Revistas (SEER), é um sistema desenvolvido especificamente para a digitalização mecânica de microfilmes sem revisão editorial.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O OJS/SEER (desenvolvido pelo Public Knowledge Project - PKP e disseminado no Brasil pelo Ibict) é um sistema para gestão e publicação eletrônica de periódicos científicos, cobrindo todo o fluxo editorial (submissão, avaliação por pares cega, editoração e publicação).",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir sistema de fluxo editorial (OJS) com digitalizador de microfilmes.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-5",
    "numero": 5,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O identificador persistente do tipo Handle System é nativamente integrado ao DSpace para atribuir URLs perenes e imutáveis a cada documento depositado no repositório, prevenindo a quebra de links na web.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O DSpace adota o Handle como padrão nativo para identificação persistente de itens (ex: `hdl.handle.net/1234/5678`).",
    "armadilhaBanca": "Uso de identificadores Handle no DSpace.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-6",
    "numero": 6,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O DSpace exige o pagamento anual compulsório de licença de uso à empresa proprietária do código-fonte para que órgãos públicos possam manter seus repositórios ativos na internet.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O DSpace é distribuído sob licença livre (BSD Open Source License), sendo gratuito, sem custos de licenciamento e com código aberto mantido colaborativamente pela comunidade global liderada pela LYRASIS.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Declarar que o DSpace cobra licença anual proprietária.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-7",
    "numero": 7,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "No DSpace, o fluxo de submissão (workflow) pode ser parametrizado para exigir aprovação técnica por revisores e bibliotecários catalogadores antes que o item se torne visível ao público geral no repositório.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O DSpace permite configurar etapas customizadas de mediação editorial e controle de qualidade dos metadados antes da publicação definitiva do documento.",
    "armadilhaBanca": "Workflow de submissão no DSpace.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-8",
    "numero": 8,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "Uma biblioteca digital e um repositório institucional possuem finalidades idênticas e restritas exclusivamente ao arquivamento de cópias piratas de filmes comerciais de entretenimento.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Bibliotecas digitais e repositórios institucionais destinam-se à guarda, organização, preservação e disseminação em acesso aberto da produção científica, intelectual, artística e legislativa legítima das instituições.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Caricaturar repositórios institucionais como depósitos piratas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-9",
    "numero": 9,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "A plataforma AtoM (Access to Memory) é um software livre baseado na web concebido para a descrição arquivística em conformidade com as normas internacionais do Conselho Internacional de Arquivos (ICA), como a ISAD(G) e a ISAAR(CPF).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. AtoM é o padrão de software de código aberto para difusão e descrição de fundos e coleções arquivísticas.",
    "armadilhaBanca": "Software arquivístico AtoM e ISAD(G).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-10",
    "numero": 10,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "No DSpace, a exclusão física de um arquivo acarreta automaticamente a exclusão de todos os registros catalográficos de todas as bibliotecas da federação vinculadas ao protocolo MARC.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A gestão de itens no DSpace afeta apenas a base local do repositório, não exercendo controle destrutivo automático sobre bases e catálogos independentes de outras instituições.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Supor efeito destrutivo nacional imediato ao excluir arquivo no DSpace.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-11",
    "numero": 11,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O DSpace 7 introduziu uma reformulação arquitetural profunda em sua camada de apresentação, adotando uma interface de usuário baseada em Angular e uma API REST desacoplada para comunicação com o backend em Java.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O DSpace 7 unificou as antigas interfaces (JSPUI e XMLUI) em uma moderna Single Page Application em Angular integrada via REST API.",
    "armadilhaBanca": "Evolução técnica do DSpace 7.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-12",
    "numero": 12,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "Em softwares livres como Koha e DSpace, é proibida a alteração do código-fonte pelos desenvolvedores da biblioteca, sob pena de bloqueio do acesso aos bancos de dados pelo consórcio internacional.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Uma das liberdades fundamentais do software livre (conforme a FSF e a Open Source Initiative) é justamente a liberdade de estudar, modificar e adaptar o código-fonte às necessidades da instituição sem qualquer restrição de uso.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Proibir customização de código em software livre.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-13",
    "numero": 13,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O repositório digital da Câmara dos Deputados organiza e dissemina a memória legislativa e a produção técnico-científica de seus servidores e parlamentares, facilitando o acesso aberto às publicações institucionais da Casa.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Aplicação prática do repositório institucional na Câmara para transparência ativa e guarda da produção institucional.",
    "armadilhaBanca": "Repositório institucional da Câmara dos Deputados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-14",
    "numero": 14,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O DSpace impede a atribuição de embargos temporais de acesso a teses e artigos, exigindo que todo documento submetido tenha seu texto completo aberto de forma imediata e irrestrita na internet.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O DSpace possui funcionalidades nativas completas para gestão de embargos: permite liberar apenas os metadados de início e restringir o acesso ao bitstream (texto completo) até o decurso do prazo acordado com o autor ou com a editora.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Negar capacidade de gestão de embargo no DSpace.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-15",
    "numero": 15,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "A indexação por texto completo em repositórios DSpace é tipicamente provida por motores de busca de alta performance integrados, como o Apache Solr, que indexam os termos contidos no interior dos arquivos PDF.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Solr é o motor de indexação e descoberta padrão embutido no DSpace para pesquisa facetada e busca em texto integral.",
    "armadilhaBanca": "Motor Apache Solr no DSpace.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-16",
    "numero": 16,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O software livre Biblivre é um sistema operacional completo que substitui o Linux e o Windows no hardware dos computadores da biblioteca.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Biblivre é uma aplicação web de automação de bibliotecas (voltada a bibliotecas escolares e comunitárias), funcionando sobre um servidor web (como Tomcat/PostgreSQL) em sistemas Linux ou Windows, e não um sistema operacional.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir software aplicativo de biblioteca com sistema operacional.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-17",
    "numero": 17,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "A política institucional de informação de um repositório universitário ou parlamentar deve disciplinar os tipos de documentos aceitos, os direitos autorais e licenças de uso (como Creative Commons), as responsabilidades de depósito e a política de preservação digital.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O repositório necessita de governança formalizada para assegurar a idoneidade, legalidade e continuidade dos depósitos.",
    "armadilhaBanca": "Políticas de repositório digital.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-18",
    "numero": 18,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "No DSpace, a autoarquivamento é o procedimento em que robôs de inteligência artificial autônomos invadem os computadores pessoais dos cidadãos e capturam seus diários íntimos sem autorização.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Autoarquivamento (self-archiving) é o ato legítimo e voluntário pelo qual o próprio autor (pesquisador/servidor) deposita a versão de seu trabalho intelectual no repositório institucional, em consonância com as políticas de acesso aberto.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Caricaturar autoarquivamento como invasão cibernética.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-19",
    "numero": 19,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "A interoperabilidade entre o DSpace e sistemas de gestão de currículos e perfis acadêmicos (como o ORCID e o Lattes) viabiliza a sincronização automática de metadados de autoria e publicações.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A integração com ORCID iDs é funcionalidade padrão em repositórios modernos para desambiguar a identidade dos pesquisadores.",
    "armadilhaBanca": "Integração DSpace e identificadores ORCID.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-20",
    "numero": 20,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O Koha rejeita a utilização de leitores de código de barras ou etiquetas RFID para a circulação de livros, exigindo que os empréstimos sejam registrados em cadernos de capa dura manuscritos a pena.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Koha suporta amplamente leitores de código de barras, impressoras térmicas de recibos e protocolos de integração com equipamentos RFID e de autoempréstimo (como o protocolo SIP2).",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Afirmar que o Koha rejeita código de barras e RFID.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-21",
    "numero": 21,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O DSpace-CRIS constitui uma extensão especializada do DSpace voltada à gestão de informações de pesquisa corrente (Current Research Information System), permitindo modelar entidades como pesquisadores, projetos, organizações e publicações de forma relacional.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. DSpace-CRIS expande as capacidades nativas do DSpace para além dos documentos, gerenciando todo o ecossistema de pesquisa.",
    "armadilhaBanca": "DSpace-CRIS e ecossistema de pesquisa.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-22",
    "numero": 22,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "Nos repositórios digitais, a conversão de um arquivo proprietário em formato obsoleto para um formato aberto padronizado de longa duração é expressamente proibida, devendo o documento ficar corrompido para manter a autenticidade.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A migração de formatos (migration) é uma das estratégias mais consolidadas de preservação digital para evitar a obsolescência tecnológica, convertendo formatos proprietários em padrões abertos e sustentáveis (ex: DOC para PDF/A).",
    "armadilhaBanca": "INVERSAO_CANONICA: Afirmar que a migração de formatos na preservação é proibida.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-23",
    "numero": 23,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "O uso de esquemas de metadados padronizados como o Dublin Core no DSpace possibilita a integração do repositório a agregadores nacionais e internacionais, como o Oasisbr e o Portal de Periódicos da Capes.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A padronização em Dublin Core é a linguagem franca que viabiliza a indexação e visibilidade global pelos agregadores.",
    "armadilhaBanca": "Padronização e agregação de repositórios.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-24",
    "numero": 24,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "A instalação e manutenção de repositórios digitais livres dispensa totalmente a realização de cópias de segurança (backups), pois a computação em nuvem é infensa a qualquer pane elétrica ou falha humana.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Rotinas de backup redundantes, armazenamento geodistribuído e planos de continuidade de negócios são requisitos elementares de governança de TI e preservação digital em qualquer repositório confiável.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Dispensar backups em repositórios digitais.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-25",
    "numero": 25,
    "macroModuloId": "M6",
    "submoduloId": "6.1",
    "contexto": "No que concerne à arquitetura de repositórios digitais, aos softwares livres de automação de bibliotecas (DSpace, Koha, OJS) e à gestão de documentos eletrônicos, julgue o item a seguir.",
    "item": "No DSpace, uma comunidade é sempre um único arquivo PDF individual, ao passo que um item é o servidor físico de data center onde o programa está instalado.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conceitos invertidos e deturpados: Comunidade é a unidade organizacional de mais alto nível no DSpace (ex: uma faculdade ou departamento); o Item é o objeto digital que agrega os metadados do documento e seus arquivos (bitstreams).",
    "armadilhaBanca": "INVERSAO_CANONICA: Distorcer os conceitos de comunidade e item no DSpace.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-26",
    "numero": 26,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) é uma especificação técnica aberta baseada em HTTP e XML destinada à colheita automatizada e periódica de metadados entre repositórios digitais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É a definição oficial do OAI-PMH: opera sobre a camada de transporte web (HTTP) com respostas encapsuladas em XML, permitindo colheitas incrementais.",
    "armadilhaBanca": "Conceito fundamental do OAI-PMH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-27",
    "numero": 27,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O protocolo OAI-PMH foi concebido para transferir em tempo real arquivos executáveis pesados de jogos eletrônicos, sendo inadequado para a troca de registros de metadados descritivos em XML.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O OAI-PMH é voltado estritamente à transferência de METADADOS estruturados (especialmente Dublin Core), não tendo sido desenhado para a transferência massiva direta de binários ou arquivos pesados de entretenimento.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Atribuir função espúria de transferência de jogos ao OAI-PMH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-28",
    "numero": 28,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "Na arquitetura do OAI-PMH, distinguem-se duas entidades operacionais fundamentais: o Provedor de Dados (Data Provider), que armazena e expõe os metadados para colheita, e o Provedor de Serviços (Service Provider), que colhe os metadados para oferecer serviços agregados de busca aos usuários.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Trata-se da dualidade básica de papéis no OAI-PMH (ex: o repositório da Câmara é um Provedor de Dados; o Oasisbr/Ibict é um Provedor de Serviços agregador).",
    "armadilhaBanca": "Provedores de dados e de serviços no OAI-PMH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-29",
    "numero": 29,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O protocolo OAI-PMH prevê dezenas de milhares de comandos de requisição, não existindo qualquer padronização quanto aos verbos permitidos nas URLs de consulta.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O OAI-PMH especifica exatamente SEIS VERBOS canônicos: `Identify`, `ListMetadataFormats`, `ListSets`, `ListIdentifiers`, `ListRecords` e `GetRecord`. Nenhum outro verbo é válido.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Negar a padronização dos 6 verbos do OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-30",
    "numero": 30,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No OAI-PMH, a requisição que utiliza o verbo `Identify` retorna informações globais sobre o repositório, incluindo o nome institucional, a URL base, a versão do protocolo suportada, o e-mail do administrador e a política de exclusão de registros.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É a função primária do verbo `Identify`: fornecer a descrição formal e técnica do repositório colhido.",
    "armadilhaBanca": "Verbo Identify no OAI-PMH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-31",
    "numero": 31,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O verbo `GetRecord` do OAI-PMH tem como finalidade listar todos os milhares de identificadores de um repositório simultaneamente em uma única resposta de texto simples sem XML.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. `GetRecord` recupera os metadados de UM ÚNICO registro específico, identificado obrigatoriamente por seu identificador único persistente (passado no parâmetro `identifier`) e pelo formato de metadados desejado.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir GetRecord (registro individual) com ListRecords (múltiplos registros).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-32",
    "numero": 32,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "A especificação do OAI-PMH estabelece o suporte ao formato Dublin Core simples (oai_dc) codificado em XML como requisito mínimo obrigatório para qualquer repositório em conformidade com o protocolo.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Para garantir interoperabilidade universal mínima, todo provedor de dados OAI-PMH DEVE ser capaz de entregar metadados no esquema `oai_dc`.",
    "armadilhaBanca": "Obrigatoriedade do oai_dc no OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-33",
    "numero": 33,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O conjunto básico de metadados Dublin Core simples (DCMI Metadata Terms) é constituído por quinhentos elementos obrigatórios, dos quais nenhum admite repetição.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Dublin Core simples possui apenas 15 ELEMENTOS básicos (Title, Creator, Subject, Description, Publisher, Contributor, Date, Type, Format, Identifier, Source, Language, Relation, Coverage, Rights). Além disso, todos os 15 elementos são OPCIONAIS e REPETÍVEIS.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Afirmar que Dublin Core tem 500 elementos obrigatórios não repetíveis.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-34",
    "numero": 34,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No Dublin Core qualificado, utilizam-se refinamentos de elementos e esquemas de codificação controlada para aumentar a precisão semântica da descrição, a exemplo de especificar que uma data é de publicação (`date.issued`) ou de criação (`date.created`).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Dublin Core qualificado refina os 15 elementos básicos introduzindo qualificadores e vocabulários controlados.",
    "armadilhaBanca": "Dublin Core qualificado e qualificadores.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-35",
    "numero": 35,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No Dublin Core simples, o elemento `Creator` destina-se a registrar exclusivamente o nome da gráfica e o tipo de máquina impressora que imprimiu a publicação física.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O elemento `Creator` identifica a entidade primariamente responsável pela criação do conteúdo intelectual da obra (autor pessoal, autor institucional ou organizador). A editora/gráfica é descrita no elemento `Publisher`.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir Creator (autor) com Publisher ou gráfica.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-36",
    "numero": 36,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No protocolo OAI-PMH, o mecanismo de 'resumptionToken' é utilizado para paginar e particionar respostas volumosas que excedem o limite de registros configurado no servidor, permitindo que a colheita ocorra em sucessivas requisições controladas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O `resumptionToken` previne sobrecargas no servidor: se um conjunto tiver 10.000 itens, o servidor envia lotes de (ex: 100) com um token para o cliente pedir a próxima página.",
    "armadilhaBanca": "Uso do resumptionToken no OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-37",
    "numero": 37,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O protocolo Z39.50 opera com a mesma filosofia de colheita periódica de arquivos estáticos em lote do OAI-PMH, sendo incapaz de realizar buscas dinâmicas em tempo real em catálogos remotos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Z39.50 é um protocolo cliente-servidor para busca federada e recuperação em TEMPO REAL (interrogação direta no catálogo remoto com retorno imediato dos registros). O OAI-PMH é que opera por colheita periódica assíncrona (harvesting).",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir o modelo de busca em tempo real do Z39.50 com o modelo de colheita em lote do OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-38",
    "numero": 38,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O padrão SRU/SRW (Search/Retrieve via URL e Web Service) é a evolução moderna e simplificada do Z39.50 para o ambiente web, utilizando requisições HTTP RESTful ou SOAP e retornando resultados em formatos padronizados como XML e JSON.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. SRU (via URL) e SRW (via Web Services) adaptaram a robustez de busca do antigo Z39.50 para a arquitetura nativa da internet.",
    "armadilhaBanca": "SRU/SRW como evolução web do Z39.50.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-39",
    "numero": 39,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No Dublin Core, o elemento `Coverage` é utilizado exclusivamente para indicar a cor da capa de um livro encadernado em couro.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O elemento `Coverage` (Cobertura) define o escopo espacial/geográfico (jurisdição, topônimo) ou o escopo temporal/cronológico (período histórico) abrangido pelo conteúdo do recurso.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir Coverage (cobertura espacial/temporal) com capa física de livro.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-40",
    "numero": 40,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No OAI-PMH, o particionamento temático ou organizacional dos registros em um repositório é viabilizado pelo conceito de 'Sets' (conjuntos), permitindo a colheita seletiva de subconjuntos de dados pelo verbo `ListSets` e pelo parâmetro `set`.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conjuntos (Sets) organizam o acervo em agrupamentos lógicos (por faculdade, tipo de documento ou tema), facultando ao colhedor baixar apenas o que lhe interessa.",
    "armadilhaBanca": "Estrutura de Sets no OAI-PMH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-41",
    "numero": 41,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "A interoperabilidade sintática assegura por si só que dois sistemas computacionais distintos compreendam perfeitamente o significado semântico profundo dos termos utilizados sem necessidade de mapeamentos ontológicos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Interoperabilidade sintática garante apenas a compatibilidade de formatos de dados e codificação (ex: ambos leem XML). A compreensão mútua do significado requer interoperabilidade SEMÂNTICA (vocabulários compartilhados, ontologias e mapeamento de conceitos).",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir interoperabilidade sintática com interoperabilidade semântica.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-42",
    "numero": 42,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O elemento `Rights` do Dublin Core é destinado ao registro de informações relativas aos direitos autorais, termos de licenciamento de uso (ex: licença Creative Commons) ou restrições legais aplicáveis ao documento.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Elemento essencial para comunicar aos usuários e sistemas automatizados as condições de reuso legítimo do item.",
    "armadilhaBanca": "Elemento Rights do Dublin Core.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-43",
    "numero": 43,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O protocolo OAI-PMH opera com base em conexões de telemetria analógica via rádio amador, sendo incompatível com a internet e redes IP.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O OAI-PMH é uma tecnologia web pura, concebida para rodar sobre a pilha TCP/IP utilizando o protocolo HTTP padrão da World Wide Web.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Supor que OAI-PMH roda via rádio analógico.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-44",
    "numero": 44,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O formato de metadados METS (Metadata Encoding and Transmission Standard), mantido pela Library of Congress, atua como um esquema encapsulador em XML que estrutura e relaciona metadados descritivos, administrativos, estruturais e arquivos de um objeto digital complexo.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O METS é o padrão arquivístico de empacotamento estruturado mais prestigiado, organizando as várias partes de um documento digital.",
    "armadilhaBanca": "Padrão estrutural METS.",
    "dificuldade": "dificil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-45",
    "numero": 45,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "Em uma requisição OAI-PMH, o parâmetro `from` e o parâmetro `until` são proibidos, obrigando o colhedor a baixar diariamente a totalidade de todos os milhões de registros desde o início dos tempos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Os parâmetros `from` e `until` são exatamente a base da 'colheita seletiva por data' (harvesting incremental), permitindo coletar somente os registros criados, alterados ou excluídos dentro de um intervalo de datas específico.",
    "armadilhaBanca": "INVERSAO_CANONICA: Negar a colheita incremental por datas no OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-46",
    "numero": 46,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O padrão MODS (Metadata Object Description Schema) é um formato de metadados em XML derivado do MARC 21, projetado para manter a riqueza descritiva de catálogos bibliográficos com uma sintaxe mais legível e flexível para a web.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Desenvolvido pela Library of Congress como um meio-termo ideal entre a simplicidade do Dublin Core e a complexidade técnica do MARC 21.",
    "armadilhaBanca": "Padrão MODS da Library of Congress.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-47",
    "numero": 47,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O Dublin Core não admite a indicação de datas no formato ISO 8601 (AAAA-MM-DD), exigindo que os anos sejam escritos exclusivamente por extenso em latim arcaico.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A recomendação expressa do DCMI para o elemento `Date` é a adoção do padrão internacional W3CDTF/ISO 8601 (ex: `2026-10-03`), facilitando o processamento computacional.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Impor redação de datas em latim arcaico no Dublin Core.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-48",
    "numero": 48,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O crosswalk (mapeamento cruzado de metadados) consiste na conversão sistemática de equivalências entre campos de esquemas distintos, como mapear o campo 245$a do MARC 21 para o elemento `dc:title` do Dublin Core.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O crosswalk semântico é o processo basilar que viabiliza a interoperabilidade entre catálogos tradicionais e repositórios digitais.",
    "armadilhaBanca": "Conceito de crosswalk de metadados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-49",
    "numero": 49,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "O Portal Oasisbr, mantido pelo Ibict, funciona como um provedor de serviços OAI-PMH de escala nacional, colhendo metadados de centenas de repositórios institucionais brasileiros e disponibilizando uma interface única de busca em acesso aberto para o público.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Papel canônico do Oasisbr no ecossistema da Ciência da Informação brasileira.",
    "armadilhaBanca": "Papel agregador do Oasisbr (Ibict).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-50",
    "numero": 50,
    "macroModuloId": "M6",
    "submoduloId": "6.2",
    "contexto": "A respeito da interoperabilidade de sistemas documentais, do protocolo OAI-PMH, do conjunto de elementos Dublin Core e dos padrões de troca de dados bibliográficos, julgue o item a seguir.",
    "item": "No OAI-PMH, quando um registro é excluído de um repositório, o protocolo prescreve que o servidor envie uma mensagem de erro fatal 404 que derrube a conexão do colhedor.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O OAI-PMH trata exclusões de forma limpa e estruturada: o cabeçalho do registro (`<header>`) é retornado com o atributo `status=\"deleted\"`, informando ao provedor de serviços que aquele registro foi desativado no repositório de origem.",
    "armadilhaBanca": "INVERSAO_CANONICA: Descrever erro fatal 404 em vez de status deleted no OAI-PMH.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-51",
    "numero": 51,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Os Princípios FAIR, formulados em 2016 pela comunidade científica internacional, estabelecem que os dados e metadados de pesquisa devem ser Localizáveis (Findable), Acessíveis (Accessible), Interoperáveis (Interoperable) e Reutilizáveis (Reusable), tanto por seres humanos quanto por sistemas computacionais automatizados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Os Princípios FAIR (Wilkinson et al., 2016) são o marco universal contemporâneo da gestão de dados de pesquisa e da Ciência Aberta.",
    "armadilhaBanca": "Conceito e sigla dos Princípios FAIR.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-52",
    "numero": 52,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O princípio FAIR de dados 'Localizáveis' (Findable) é plenamente satisfeito quando os dados brutos são salvos em um pen-drive sem identificador, guardados na gaveta trancada do pesquisador e sem qualquer tipo de metadado cadastrado.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O princípio Findable exige: identificador persistente globalmente único (como DOI), metadados ricos e estruturados, identificador explicitado nos metadados e registro em mecanismos de busca indexados.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Considerar pen-drive em gaveta compatível com Findable.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-53",
    "numero": 53,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Conforme os Princípios FAIR, para que os dados sejam 'Acessíveis' (Accessible), o protocolo de comunicação utilizado para recuperação dos metadados e dos dados deve ser aberto, livre e universalmente implementável, a exemplo do protocolo HTTP/HTTPS.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É o requisito A1.1 dos Princípios FAIR: protocolos abertos e padronizados para garantir que ninguém fique impedido de acessar dados públicos por barreiras proprietárias de rede.",
    "armadilhaBanca": "Requisito de acessibilidade FAIR (A1.1).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-54",
    "numero": 54,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Os Princípios FAIR determinam que todo e qualquer dado de pesquisa, inclusive prontuários médicos nominais com histórico genético de pacientes e segredos industriais de defesa nacional, deve ser obrigatoriamente liberado sem qualquer controle de acesso na web.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Os Princípios FAIR não equivalem a 'acesso aberto irrestrito e indiscriminado'. O lema consagrado da Ciência Aberta e FAIR é: 'tão aberto quanto possível, tão fechado quanto necessário' (as open as possible, as closed as necessary). Dados sensíveis devem ser protegidos por regras de autorização legítimas.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Impor abertura obrigatória de dados médicos e segredos de Estado no FAIR.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-55",
    "numero": 55,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Um Plano de Gestão de Dados (PGD) é um documento formal que descreve como os dados serão coletados, processados, organizados, documentados com metadados, armazenados com segurança, compartilhados e preservados ao longo do ciclo de vida de um projeto de pesquisa.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Instrumento de governança de dados exigido por agências de fomento (como FAPESP e CNPq) e instituições internacionais de fomento.",
    "armadilhaBanca": "Conceito e função do Plano de Gestão de Dados (PGD).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-56",
    "numero": 56,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A curadoria digital de dados de pesquisa cessa de forma imediata assim que o pesquisador clica no botão de submissão do formulário de upload, não exigindo qualquer preservação a longo prazo.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Curadoria digital é a gestão ativa e contínua dos dados ao longo de todo o seu ciclo de vida e a longo prazo, garantindo integridade de bits, atualização de formatos contra obsolescência e enriquecimento de metadados ao longo do tempo.",
    "armadilhaBanca": "INVERSAO_CANONICA: Reduzir curadoria digital a ato momentâneo de upload.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-57",
    "numero": 57,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Para atender ao princípio de 'Interoperabilidade' (Interoperable) do FAIR, os dados e metadados devem utilizar linguagens de representação do conhecimento formais, acessíveis e compartilhadas (como RDF, OWL, XML e JSON-LD) e vocabulários ontológicos controlados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É o requisito I1 dos Princípios FAIR: a interoperabilidade requer padrões sintáticos e semânticos comuns de Web Semântica.",
    "armadilhaBanca": "Interoperabilidade segundo os princípios FAIR.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-58",
    "numero": 58,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Para que os dados sejam considerados 'Reutilizáveis' (Reusable), é proibido associar a eles qualquer tipo de licença de uso, devendo o usuário presumir que qualquer uso comercial ou não comercial gerará processo judicial criminal.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O requisito R1.1 do FAIR determina explicitamente que dados e metadados devem ser acompanhados de uma licença de uso clara, acessível e inequívoca (como as licenças Creative Commons CC-BY ou CC0), definindo exatamente como podem ser reutilizados.",
    "armadilhaBanca": "INVERSAO_CANONICA: Proibir licenças de uso em dados reutilizáveis.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-59",
    "numero": 59,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O Dataverse é um software livre de repositório especializado na gestão, compartilhamento e citação de dados brutos de pesquisa (datasets), permitindo o versionamento de dados e a geração automática de citações formais com DOI.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Desenvolvido na Universidade de Harvard, o Dataverse é uma das plataformas livres mais adotadas mundialmente para repositórios de dados de pesquisa.",
    "armadilhaBanca": "Software Dataverse para dados de pesquisa.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-60",
    "numero": 60,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A citação de dados (data citation) é uma prática repudiada pela comunidade científica internacional, devendo o autor que reutilizou dados alheios omitir a fonte para evitar redundância textual.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A citação formal de dados é um princípio ético e técnico essencial (Joint Declaration of Data Citation Principles), que confere crédito acadêmico aos criadores dos dados, possibilita a reprodutibilidade da pesquisa e a verificação empírica.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Repudiar e proibir citação de dados de pesquisa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-61",
    "numero": 61,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A proveniência dos dados (data provenance) registra a linhagem, a cadeia de custódia, os métodos experimentais e as transformações sofridas pelos dados desde sua geração original, sendo crucial para a validação da credibilidade científica.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Proveniência assegura a rastreabilidade e a transparência metodológica, aspecto formal contemplado pelo requisito R1.2 do FAIR.",
    "armadilhaBanca": "Proveniência e linhagem dos dados.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-62",
    "numero": 62,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Nos repositórios de dados abertos governamentais, a disponibilização de planilhas orçamentárias salvas exclusivamente como imagens em formato JPEG é considerada a melhor prática internacional de dados abertos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Imagens em JPEG não são processáveis por máquina. As diretrizes de dados abertos da W3C e do governo federal (e-PING / Lei de Acesso à Informação) exigem dados estruturados e legíveis por máquina em formatos abertos e não proprietários (como CSV, JSON, XML).",
    "armadilhaBanca": "INVERSAO_CANONICA: Considerar imagem JPEG padrão ideal de dados abertos legíveis por máquina.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-63",
    "numero": 63,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O esquema de classificação de dados abertos em 5 Estrelas proposto por Tim Berners-Lee estabelece que a 5ª estrela máxima é alcançada quando os dados estão disponíveis na web em padrão aberto estruturado (como RDF) e conectados a outros dados por meio de links (Linked Open Data).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Modelo clássico das 5 Estrelas de Berners-Lee: 1★ (qualquer formato na web com licença aberta), 2★ (estruturado, ex: Excel), 3★ (formato não proprietário, ex: CSV), 4★ (usando URIs e padrões W3C/RDF), 5★ (Linked Data conectado a outras bases).",
    "armadilhaBanca": "Modelo 5 Estrelas de Tim Berners-Lee.",
    "dificuldade": "dificil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-64",
    "numero": 64,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Na curadoria de dados de pesquisa, os metadados descritivos e administrativos tornam-se completamente inúteis e devem ser destruídos no momento em que o artigo científico principal é aceito para publicação em periódico.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O princípio FAIR (F4 e A2) estabelece expressamente que os metadados devem permanecer perenes e acessíveis indefinidamente, mesmo que os dados brutos primários eventualmente venham a não estar mais disponíveis.",
    "armadilhaBanca": "INVERSAO_CANONICA: Destruir metadados após a publicação do artigo.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-65",
    "numero": 65,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O consórcio re3data.org (Registry of Research Data Repositories) é um catálogo global de referência que indexa e descreve repositórios de dados de pesquisa de diversas disciplinas, informando sobre suas políticas de acesso, certificação e padrões técnicos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O re3data é a fonte terciária mais confiável para localizar repositórios de dados idôneos para depósito ou consulta.",
    "armadilhaBanca": "Registro de repositórios re3data.org.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-66",
    "numero": 66,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O princípio FAIR impõe que um conjunto de dados nunca deve receber um identificador persistente do tipo DOI, devendo mudar de endereço URL a cada semana para dificultar ataques cibernéticos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O requisito F1 do FAIR exige justamente o inverso: a atribuição de um identificador persistente e único globalmente (como o DOI), que garanta rastreabilidade e localização perene do recurso ao longo do tempo.",
    "armadilhaBanca": "INVERSAO_CANONICA: Preconizar URLs mutáveis semanais em vez de DOIs persistentes.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-67",
    "numero": 67,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A anonimização e a pseudonimização são técnicas de tratamento técnico de dados pessoais em pesquisas exigidas pela Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) para viabilizar o compartilhamento seguro de microdados sem violar a privacidade dos titulares.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Harmonização necessária entre Ciência Aberta/FAIR e a LGPD: dados pessoais devem ser desidentificados antes da abertura pública de bases de dados de pesquisa.",
    "armadilhaBanca": "Interseção entre Princípios FAIR e LGPD.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-68",
    "numero": 68,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O selo de certificação CoreTrustSeal destina-se a certificar a habilidade de cozinheiros de refeitórios de universidades, não tendo qualquer relação com repositórios de dados digitais confiáveis.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O CoreTrustSeal é uma certificação internacional de prestígio que avalia a confiabilidade, sustentabilidade e conformidade de repositórios de dados digitais segundo requisitos de preservação e governança.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Caricaturar certificação CoreTrustSeal como culinária.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-69",
    "numero": 69,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O 'dicionário de dados' (codebook) é um componente essencial na documentação de um dataset, explicando o significado de cada variável, a unidade de medida, os códigos numéricos adotados e os tratamentos de valores ausentes.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Sem codebook, os dados brutos tornam-se incompreensíveis para outros pesquisadores e inviabilizam o reuso legítimo (Reusable).",
    "armadilhaBanca": "Importância do codebook/dicionário de dados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-70",
    "numero": 70,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "Na Ciência de Dados aplicada à Biblioteconomia, o termo 'dados sujos' (dirty data) refere-se unicamente a livros impressos que acumularam poeira física após uma reforma de alvenaria na biblioteca.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Dados sujos (dirty data) é termo técnico para conjuntos de dados digitais que contêm registros duplicados, valores corrompidos, inconsistências ortográficas, campos vazios e formatos incompatíveis, exigindo limpeza e tratamento.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir dirty data conceitual com poeira física em livros.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-71",
    "numero": 71,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A atribuição de licenças públicas do tipo Creative Commons Zero (CC0) a conjuntos de dados abertos renuncia aos direitos autorais patrimoniais na extensão máxima permitida pela lei, colocando os dados em domínio público para maximizar a reutilização irrestrita.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A dedicação CC0 é a mais recomendada para bases de dados científicas e governamentais, eliminando fricções jurídicas de agregação e mineração de dados.",
    "armadilhaBanca": "Licença CC0 e domínio público em dados abertos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-72",
    "numero": 72,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O modelo FAIR foi desenvolvido com o propósito de substituir integralmente e extinguir as bibliotecas universitárias e os centros de documentação em todo o planeta.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O modelo FAIR valoriza e reforça o papel profissional dos bibliotecários e profissionais da informação, que assumem posição de liderança na gestão de dados de pesquisa, catalogação de datasets e administração de repositórios confiáveis.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Afirmar que o FAIR visa extinguir bibliotecas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-73",
    "numero": 73,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "O conceito de 'reprodutibilidade científica' pressupõe que pesquisadores independentes possam obter os mesmos resultados originais utilizando os mesmos dados brutos, códigos computacionais e procedimentos analíticos documentados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Pilar da integridade científica contemporânea fortalecido pela governança dos Princípios FAIR.",
    "armadilhaBanca": "Reprodutibilidade científica e integridade de dados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-74",
    "numero": 74,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "A gestão de dados de pesquisa desaconselha o versionamento de datasets, recomendando que qualquer nova coleta de dados sobrescreva e apague irreversivelmente os dados do ano anterior.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O versionamento de datasets (ex: v1.0, v1.1, v2.0) é obrigatório nos repositórios de dados para preservar a historicidade das análises e garantir que publicações vinculadas a versões anteriores continuem auditáveis.",
    "armadilhaBanca": "INVERSAO_CANONICA: Desaconselhar versionamento e recomendar sobrescrita destrutiva.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-75",
    "numero": 75,
    "macroModuloId": "M6",
    "submoduloId": "6.3",
    "contexto": "No que diz respeito à gestão e curadoria de dados de pesquisa, aos Princípios FAIR e aos repositórios de dados abertos científicos e governamentais, julgue o item a seguir.",
    "item": "No ambiente governamental, a política de dados abertos veda que cidadãos utilizem dados públicos do Poder Legislativo para desenvolver aplicativos móveis de fiscalização cidadã.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A própria finalidade da política de dados abertos governamentais (Lei 12.527/11 e Decreto de Dados Abertos) é incentivar a transparência ativa, a fiscalização social e o desenvolvimento de novas aplicações e negócios pela sociedade civil.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Proibir o uso de dados abertos para fiscalização cidadã.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-76",
    "numero": 76,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A arquitetura RAG (Retrieval-Augmented Generation) em sistemas de inteligência artificial de bibliotecas combina a recuperação de informação por busca vetorial semântica em bases de documentos confiáveis com modelos geradores de linguagem (LLMs), reduzindo o risco de 'alucinações' e fornecendo respostas fundamentadas com referências canônicas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conceito canônico de RAG: o modelo não responde a partir de 'memória estocástica', mas busca os trechos reais dos documentos da biblioteca e os utiliza como contexto fundamentador para sintetizar a resposta com citações verificáveis.",
    "armadilhaBanca": "Definição canônica de Retrieval-Augmented Generation (RAG).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-77",
    "numero": 77,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "O fenômeno da 'alucinação' em Grandes Modelos de Linguagem (LLMs) refere-se ao superaquecimento do processador de vídeo, não afetando a veracidade factual dos textos gerados pela IA.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. 'Alucinação' (hallucination) é a geração de textos que parecem perfeitamente plausíveis e gramaticalmente articulados, mas que contêm dados factualmente falsos, leis inexistentes, autores forjados ou citações fictícias inventadas pelo modelo probabilístico.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir alucinação textual com superaquecimento de hardware.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-78",
    "numero": 78,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Na aplicação de IA em bibliotecas legislativas e jurídicas, a curadoria e a validação humana das fontes (Human-in-the-Loop) são indispensáveis para garantir que pareceres e subsídios técnicos apoiem-se estritamente na legislação em vigor e em jurisprudência autêntica.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A responsabilidade técnica e a fé pública institucional exigem que a IA atue como ferramenta de apoio, permanecendo a validação e supervisão final sob responsabilidade de profissionais humanos qualificados.",
    "armadilhaBanca": "Princípio Human-in-the-Loop em ambientes governamentais.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-79",
    "numero": 79,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A engenharia de prompts (prompt engineering) em biblioteconomia consiste no conserto mecânico com solda elétrica de portas de aço quebradas no depósito de livros.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Engenharia de prompts é a técnica estruturada de formulação, refinamento e parametrização de instruções textuais submetidas a modelos de IA para obter respostas precisas, contextualizadas e sem vieses.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Caricaturar engenharia de prompts como solda mecânica de portas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-80",
    "numero": 80,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A incorporação de vetores semânticos (dense embeddings) permite que sistemas de busca em bibliotecas digitais realizem recuperação conceitual, agrupando documentos que compartilham o mesmo significado temático mesmo que utilizem vocabulários ou idiomas distintos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Embeddings projetam textos em um espaço vetorial contínuo onde a proximidade geométrica reflete proximidade semântica, superando as limitações da busca puramente léxica.",
    "armadilhaBanca": "Embeddings semânticos em bibliotecas digitais.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-81",
    "numero": 81,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Grandes Modelos de Linguagem (LLMs) são detentores de consciência própria, autoria moral e personalidade jurídica civil, devendo ser registrados no Conselho Regional de Biblioteconomia como bibliotecários chefes concursados.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. LLMs são modelos computacionais matemáticos e probabilísticos preditores de padrões de tokens, desprovidos de senciência, consciência moral ou capacidade jurídica civil. A autoria e a responsabilidade profissional permanecem exclusivas de seres humanos.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Atribuir consciência e personalidade jurídica de servidor a LLMs.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-82",
    "numero": 82,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A automação da catalogação e da extração de metadados auxiliada por IA pode acelerar o processamento técnico de acervos digitais volumosos, atuando na sugestão prévia de termos de tesauro e resumos para posterior homologação pelo bibliotecário.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. É o modelo simbiótico de IA na catalogação: ganho de escala e produtividade na extração automatizada, mantendo a curadoria de autoridade do profissional.",
    "armadilhaBanca": "Automação de catalogação com assistência de IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-83",
    "numero": 83,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A utilização de dados pessoais não anonimizados de leitores para o treinamento de modelos comerciais públicos de IA de terceiros é uma conduta incentivada e dispensada de qualquer conformidade com a LGPD.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O envio de dados pessoais ou sigilosos de usuários a modelos externos sem consentimento e sem base legal viola flagrantemente a LGPD e as normas éticas de sigilo e privacidade informacional.",
    "armadilhaBanca": "INVERSAO_CANONICA: Afirmar conformidade na violação de privacidade de leitores com IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-84",
    "numero": 84,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "O viés algorítmico (algorithmic bias) em sistemas de IA em unidades de informação pode reproduzir e amplificar preconceitos históricos presentes nos textos de treinamento, exigindo auditorias contínuas de equidade e representatividade dos dados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Modelos treinados em corpora históricos sem filtragem crítica podem reforçar discriminações raciais, de gênero ou políticas, constituindo sério desafio ético para bibliotecários.",
    "armadilhaBanca": "Viés algorítmico e ética em IA.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-85",
    "numero": 85,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Em arquiteturas de busca vetorial, a distância euclidiana ou a similaridade por cosseno entre vetores de consulta e vetores de documentos é calculada por meio da contagem de folhas físicas impressas em cada prateleira.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Similaridade de cosseno e distância euclidiana são cálculos algébricos no espaço multidimensional dos vetores numéricos de embeddings gerados pelo modelo matemático, nada tendo a ver com contagem de folhas físicas em prateleiras.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir álgebra linear de vetores com contagem física de papel.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-86",
    "numero": 86,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "O uso de técnicas de Reconhecimento Óptico de Caracteres (OCR) associadas a modelos de inteligência artificial de visão computacional permite transformar documentos históricos impressos ou datilografados da Câmara em textos digitais pesquisáveis em bases de dados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O OCR moderno com redes neurais garante alta taxa de acerto no reconhecimento de caracteres em fontes históricas e manuscritos parlamentares.",
    "armadilhaBanca": "OCR e visão computacional em arquivos históricos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-87",
    "numero": 87,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A Inteligência Artificial torna desnecessária a preservação de arquivos históricos e livros originais da biblioteca, que devem ser triturados assim que uma imagem digital for capturada.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A substituição do original físico por cópia digital não autoriza a destruição de documentos de valor histórico, probatório ou patrimonial permanente. O documento original mantém valor intrínseco de autenticidade primária.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Defender a trituração de originais históricos após digitalização.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-88",
    "numero": 88,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Na elaboração de prompts para síntese bibliográfica, a técnica de 'Few-Shot Prompting' consiste em fornecer ao modelo alguns exemplos prévios de entrada e saída esperadas para guiar o formato e a precisão da resposta gerada.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Few-Shot é a técnica comprovada em engenharia de prompts que condiciona o modelo a seguir um padrão específico mediante exemplos ilustrativos no próprio prompt.",
    "armadilhaBanca": "Técnica de Few-Shot Prompting.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-89",
    "numero": 89,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Um modelo de IA com arquitetura fechada que não disponibiliza pesos, dados de treinamento nem documentação de funcionamento é considerado um exemplo perfeito de software de código aberto e Ciência Aberta.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Modelos proprietários fechados (black-box) contrariam os pilares da Ciência Aberta e do software livre, pois impedem a auditabilidade independente, a reprodutibilidade e a verificação de vieses de treinamento.",
    "armadilhaBanca": "INVERSAO_CANONICA: Classificar modelo proprietário fechado como modelo aberto.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-90",
    "numero": 90,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A curadoria de dados para treinamento ou ajuste fino (fine-tuning) de modelos de linguagem exige a seleção criteriosa de corpora de alta qualidade textual, remoção de redundâncias e descarte de fontes desinformativas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Princípio clássico da Ciência da Computação e da Informação: 'Garbage In, Garbage Out' (GIGO). A qualidade do modelo depende diretamente da idoneidade dos dados de treinamento.",
    "armadilhaBanca": "Curadoria de dados para IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-91",
    "numero": 91,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Os sistemas de recomendação baseados em filtragem colaborativa utilizam exclusivamente a temperatura climática da cidade para recomendar romances aos leitores de uma biblioteca.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A filtragem colaborativa analisa padrões de comportamento, empréstimos e preferências de grupos de usuários semelhantes ('quem leu X também leu Y') para recomendar obras pertinentes, e não a temperatura meteorológica.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Reduzir filtragem colaborativa a temperatura climática.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-92",
    "numero": 92,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A 'explicabilidade' (Explainable AI - XAI) em sistemas de informação governamentais refere-se à capacidade de explicar e justificar de forma inteligível para os cidadãos e auditores a lógica e os critérios que fundamentaram uma recomendação ou decisão apoiada por IA.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Diretriz central de governança de IA pública para assegurar transparência, devido processo legal e prestação de contas (accountability).",
    "armadilhaBanca": "Conceito de XAI (Explainable AI) no setor público.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-93",
    "numero": 93,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A tecnologia de Web Semântica e ontologias formais é concorrente e incompatível com o desenvolvimento de sistemas de inteligência artificial em bibliotecas, sendo proibido usar ambas no mesmo servidor.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Web Semântica, grafos de conhecimento (Knowledge Graphs) e ontologias são sinérgicos e frequentemente integrados a sistemas de IA modernos (GraphRAG), enriquecendo as respostas dos modelos com relações semânticas precisas.",
    "armadilhaBanca": "INVERSAO_CANONICA: Declarar incompatibilidade entre ontologias/grafos e IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-94",
    "numero": 94,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "Em ambientes legislativos, chatbots equipados com IA generativa e RAG podem auxiliar cidadãos na localização simplificada de proposições de seu interesse, traduzindo termos do jargão parlamentar formal para linguagem cidadã acessível.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Aplicação inclusiva e democrática da IA para ampliar a transparência pública e aproximar a sociedade do Parlamento.",
    "armadilhaBanca": "Linguagem simples e acessibilidade cidadã via IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-95",
    "numero": 95,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A alucinação em sistemas de inteligência artificial jurídica é inofensiva e desejável, sendo recomendável que pareceres parlamentares inventem números de leis inexistentes para enriquecer a retórica legislativa.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A citação de jurisprudência ou leis forjadas por IA é gravíssima falha de conformidade que pode levar à anulação de atos, sanções disciplinares e descrédito institucional do Parlamento.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Afirmar que forjar leis fictícias por IA é desejável.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-96",
    "numero": 96,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A busca híbrida em recuperação da informação moderna combina a precisão da busca léxica tradicional baseada em palavras-chave (BM25) com a abrangência da busca semântica por vetores densos (embeddings), otimizando o ranking final dos resultados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A busca híbrida (Hybrid Search com Reciprocal Rank Fusion) é o estado da arte na engenharia de busca em grandes bases de conhecimento.",
    "armadilhaBanca": "Busca híbrida (BM25 + vetorial).",
    "dificuldade": "dificil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-97",
    "numero": 97,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "O bibliotecário contemporâneo deve recusar-se a aprender sobre novas tecnologias de inteligência artificial e linguagens de metadados, restringindo sua atuação ao carimbo manual e guarda física de livros impressos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O perfil do bibliotecário moderno na era da informação digital exige competências informacionais avançadas, domínio de curadoria de dados, governança de metadados, arquitetura de informação e letramento em inteligência artificial.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Preconizar recusa e estagnação tecnológica para bibliotecários.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-98",
    "numero": 98,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A integridade de dados e o controle de versão de bases de dados de treinamento são fundamentais para auditar a reprodutibilidade dos resultados de algoritmos de classificação automática em bibliotecas digitais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Prática essencial de MLOps e curadoria para garantir que modelos automatizados possam ser auditados e ajustados ao longo do tempo.",
    "armadilhaBanca": "Governança e auditoria de modelos em MLOps.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-99",
    "numero": 99,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "A Declaração de Barcelona sobre Informação de Pesquisa Aberta preconiza o uso de infraestruturas abertas e dados transparentes para a governança e avaliação da produção científica, criticando a dependência excessiva de métricas proprietárias fechadas e caixas-pretas de IA.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A Declaração de Barcelona (2024) é um marco recente de fortalecimento da governança de dados abertos para pesquisa e inovação responsável.",
    "armadilhaBanca": "Declaração de Barcelona e governança de dados de pesquisa.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  },
  {
    "id": "m6-q-100",
    "numero": 100,
    "macroModuloId": "M6",
    "submoduloId": "6.4",
    "contexto": "Com relação à aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), arquitetura RAG (Retrieval-Augmented Generation) e curadoria de dados em unidades de informação, julgue o item a seguir.",
    "item": "O emprego de inteligência artificial na Câmara dos Deputados dispensa a observância aos princípios constitucionais da administração pública, como legalidade, impessoalidade, moralidade, publicidade e eficiência.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O uso de IA pelo poder público subordina-se incondicionalmente aos princípios constitucionais do art. 37 da CF/88, ao Marco Civil da Internet, à LGPD e às diretrizes éticas de governança digital do Estado brasileiro.",
    "armadilhaBanca": "CATEGORICO_ABSOLUTO: Dispensar observância aos princípios do art. 37 da CF no uso de IA.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M6)",
      "verificado": true
    }
  }
];
