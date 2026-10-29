import type { CebraspeQuestion } from '../../domain/types';

export const simuladoTecnologiaDados100Q: CebraspeQuestion[] = [
  {
    "id": "m14-q-1",
    "numero": 1,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No ambiente Microsoft 365, a funcionalidade de coautoria em tempo real no Word e no Excel permite que múltiplos usuários editem o mesmo documento simultaneamente, registrando a presença de cada colaborador e salvando as alterações automaticamente no OneDrive ou SharePoint.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No ecossistema Microsoft 365, a coautoria simultânea em tempo real apoia-se nos serviços em nuvem do SharePoint Online e OneDrive for Business. As alterações são sincronizadas continuamente por meio de algoritmos de resolução de conflitos em nível de parágrafo, sinalizando visualmente os cursores e a presença dos demais editores ativos e gravando versões automaticamente no histórico de revisões sem risco de sobrescrita de arquivos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-2",
    "numero": 2,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Excel para a Web, o recurso de coautoria simultânea exige o bloqueio exclusivo de todo o arquivo pelo primeiro usuário que o abrir, impedindo a visualização ou inserção de dados por outros membros da equipe até que a sessão seja encerrada.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O recurso de coautoria (co-authoring) em nuvem do ecossistema Microsoft 365 foi concebido especificamente para eliminar o bloqueio exclusivo de arquivos, permitindo que vários colaboradores editem simultaneamente a mesma pasta de trabalho, com sincronização automática e controle de alterações concorrentes.",
    "armadilhaBanca": "Inversão do princípio de colaboração em nuvem: atribuir comportamento arcaico de bloqueio de arquivo (file locking da rede local) à coautoria moderna em nuvem.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Microsoft Excel para a Web, o recurso de coautoria em tempo real permite a edição simultânea e concorrente por múltiplos usuários autorizados, exibindo cursores coloridos de presença sem bloquear o arquivo de modo exclusivo."
  },
  {
    "id": "m14-q-3",
    "numero": 3,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Google Workspace (Google Docs e Google Sheets), o histórico de versões armazena todas as revisões realizadas em um documento, possibilitando aos usuários com permissão de edição restaurar versões anteriores ou nomear marcos específicos de alteração.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No Google Workspace (Docs, Sheets e Slides), o Histórico de Versões armazena cronologicamente cada modificação realizada pelos usuários com identificação individualizada por cores e carimbos de data/hora. A plataforma permite a auditabilidade integral das alterações, a restauração direta de qualquer versão pregressa sem perda de dados e a atribuição de rótulos personalizados ('Nomear versão atual') para marcar marcos formais de redação legislativa.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-4",
    "numero": 4,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "Ao restaurar uma versão anterior de um arquivo compartilhado no Microsoft SharePoint, o sistema exclui permanentemente todo o histórico de versões subsequentes, impossibilitando qualquer reversão futura à versão mais recente.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O mecanismo de versionamento do SharePoint e do OneDrive é não destrutivo: a restauração de uma versão histórica copia o conteúdo correspondente para o topo da pilha de versões como um novo número de versão, mantendo todas as versões intermediárias e posteriores intactas no log.",
    "armadilhaBanca": "Suposição de comportamento destrutivo no versionamento de arquivos em nuvem corporativa.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Ao restaurar uma versão anterior de um arquivo no Microsoft SharePoint ou OneDrive, o sistema preserva integralmente todo o histórico prévio e registra o documento restaurado como uma nova versão mais recente, assegurando reversibilidade total."
  },
  {
    "id": "m14-q-5",
    "numero": 5,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Teams, os canais privados permitem delimitar a colaboração e o acesso a arquivos e conversas a um subconjunto restrito de membros da equipe, criando automaticamente uma coleção de sites dedicada no SharePoint para armazenar seus documentos com isolamento de permissões.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No Microsoft Teams, a criação de um 'canal privado' isola o conteúdo e as conversas de modo que apenas membros especificamente convidados tenham acesso. Do ponto de vista da infraestrutura técnica, o Teams provisiona automaticamente uma nova coleção de sites (site collection) independente no SharePoint Online, garantindo que as permissões de acesso aos arquivos fiquem totalmente segregadas da equipe principal e dos canais públicos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-6",
    "numero": 6,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "Ao criar um canal compartilhado no Microsoft Teams, qualquer participante externo pertencente a outra organização adquire automaticamente permissões de administrador global sobre a equipe proprietária.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Teams Connect e os canais compartilhados aplicam o princípio do menor privilégio (least privilege): o convidado externo acessa unicamente as conversas e arquivos daquele canal compartilhado pontual, sem acesso a outros canais e sem qualquer privilégio administrativo corporativo.",
    "armadilhaBanca": "Extrapolação de privilégios de acesso: equiparar colaboração em canal compartilhado pontual a concessão de perfil de administrador global.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Ao ingressar em um canal compartilhado (Teams Connect) no Microsoft Teams, participantes externos de outras organizações recebem permissão estrita de membro do canal específico, sem jamais adquirir poderes administrativos globais sobre a organização hospedeira."
  },
  {
    "id": "m14-q-7",
    "numero": 7,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Google Drive e no Microsoft OneDrive, links de compartilhamento podem ser configurados com data de expiração e senha de acesso, constituindo boas práticas de governança e segurança da informação no tratamento de dados institucionais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Nas plataformas corporativas de armazenamento em nuvem (Google Drive e Microsoft OneDrive/SharePoint), a concessão de links de compartilhamento conta com controles refinados de segurança da informação: prazos de expiração compulsórios (após os quais o link torna-se inoperante), proteção por senha alfanumérica e bloqueio de download, mecanismos essenciais de governança para atender aos princípios de segurança e minimização da LGPD.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-8",
    "numero": 8,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Google Docs, a permissão de 'Comentador' confere ao usuário poderes irrestritos para excluir parágrafos do texto definitivo sem que a exclusão passe por aprovação prévia do proprietário do arquivo.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. No modelo de permissões do Google Workspace, o perfil \"Comentador\" não tem permissão para alterar diretamente o conteúdo consolidado. Quaisquer edições sugeridas figuram como marcas de revisão pendentes de homologação por usuários com perfil de \"Editor\" ou \"Proprietário\".",
    "armadilhaBanca": "Confusão de papéis no controle de acesso: atribuir prerrogativa de edição destrutiva ao nível de comentador/revisor.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Google Docs, a permissão de \"Comentador\" autoriza apenas a inserção de anotações marginais e a proposição de alterações no modo de sugestão, dependendo qualquer exclusão definitiva de aprovação explícita do proprietário ou editor."
  },
  {
    "id": "m14-q-9",
    "numero": 9,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "Políticas de Prevenção contra Perda de Dados (DLP - Data Loss Prevention) no Microsoft Purview permitem identificar automaticamente números de CPF ou dados sensíveis em mensagens do Teams ou arquivos do OneDrive, bloqueando o envio não autorizado para domínios externos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Microsoft Purview Data Loss Prevention (DLP) realiza a inspeção profunda de conteúdo e pacotes em tempo real no Teams, Exchange, OneDrive e SharePoint, utilizando classificadores baseados em expressões regulares, dicionários de palavras-chave e impressões digitais de documentos (document fingerprinting) para detectar dados sensíveis (como números de CPF, dados bancários ou prontuários), bloqueando transferências indevidas para o exterior ou domínios não autorizados.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-10",
    "numero": 10,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "As políticas de Prevenção contra Perda de Dados (DLP) no ecossistema corporativo da Microsoft restringem-se ao tráfego de mensagens no Exchange Online, operando de modo desvinculado dos arquivos compartilhados no OneDrive ou das conversas realizadas no Teams.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O DLP corporativo opera como uma camada transversal de conformidade e segurança da informação: ele identifica e bloqueia o vazamento de dados sensíveis (como números de CPF, cartões e dados protegidos pela LGPD) em chats do Teams, sites do SharePoint, bibliotecas do OneDrive e mensagens de e-mail.",
    "armadilhaBanca": "Reducionismo de escopo de segurança: confinar solução integrada de DLP corporativo a um único protocolo legado de correio eletrônico.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "As políticas de Prevenção contra Perda de Dados (DLP) no ecossistema Microsoft 365 aplicam-se de forma integrada a múltiplos repositórios e serviços, abrangendo Exchange Online, SharePoint, OneDrive, Microsoft Teams e endpoints Windows."
  },
  {
    "id": "m14-q-11",
    "numero": 11,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Teams e no Google Meet, a gravação de reuniões na nuvem gera automaticamente transcrições textuais que podem ser pesquisadas e integradas a fluxos de trabalho institucionais, respeitadas as diretrizes de consentimento e privacidade.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. As plataformas corporativas Microsoft Teams e Google Meet contam com recursos nativos de inteligência artificial que realizam o reconhecimento de fala em tempo real (Speech-to-Text), transcrevendo e indexando os diálogos das reuniões gravadas na nuvem. A funcionalidade viabiliza a pesquisa semântica dos temas discutidos, gera atas automatizadas e amplia a acessibilidade, exigindo aviso prévio aos participantes para conformidade ética e legal.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-12",
    "numero": 12,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "A funcionalidade de gravação de reuniões em plataformas colaborativas corporativas autoriza o organizador a realizar a captura audiovisual em segundo plano sem a exibição de indicativos visuais ou alertas aos participantes conectados.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Por diretrizes universais de segurança, conformidade e privacidade (LGPD e GDPR), as ferramentas corporativas de videoconferência impedem gravações secretas ou em segundo plano: no momento do acionamento, uma faixa de notificação é exibida a todos os participantes e um alerta sonoro pode ser emitido.",
    "armadilhaBanca": "Desrespeito à governança e conformidade: alegar permissão de captura oculta em ferramentas corporativas auditáveis.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A gravação de reuniões em plataformas corporativas como Microsoft Teams e Google Meet dispara notificações visuais e avisos automáticos ostensivos a todos os presentes, em cumprimento aos requisitos legais de privacidade e consentimento."
  },
  {
    "id": "m14-q-13",
    "numero": 13,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "O Microsoft OneDrive e o Google Drive oferecem clientes de sincronização que suportam a funcionalidade de 'Arquivos sob Demanda' (Files On-Demand / Drive para Computador), permitindo que os arquivos sejam visualizados no explorador local do sistema operacional sem ocupar espaço em disco até que sejam abertos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A tecnologia de Arquivos sob Demanda (Files On-Demand no OneDrive e Drive para Computador no Google Workspace) sincroniza inicialmente apenas os ponteiros e metadados lógicos dos arquivos no explorador de arquivos local (Windows Explorer ou macOS Finder). O conteúdo binário só é baixado sob demanda quando o usuário abre o documento ou o marca para acesso offline permanente, liberando gigabytes de espaço em disco nas estações de trabalho.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-14",
    "numero": 14,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "O recurso de sincronização de arquivos sob demanda no OneDrive requer que todos os gigabytes armazenados na nuvem sejam integralmente clonados na unidade de disco rígido local antes que qualquer busca de arquivos possa ser iniciada.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A funcionalidade Arquivos sob Demanda visa economizar espaço em disco: os itens figuram no explorador de arquivos local com ícone de nuvem (indicando presença exclusiva online) e são transferidos para o disco rígido sob demanda quando solicitados pelo usuário, sem exigir download preliminar do acervo integral.",
    "armadilhaBanca": "Inversão do propósito tecnológico: transformar uma funcionalidade de economia de armazenamento em exigência de download integral mandatório.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O recurso de arquivos sob demanda (Files On-Demand) do OneDrive permite visualizar e pesquisar a estrutura completa de pastas na nuvem baixando apenas metadados e ponteiros leves, realizando o download do conteúdo pesado somente quando o arquivo for aberto."
  },
  {
    "id": "m14-q-15",
    "numero": 15,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Excel, a funcionalidade 'Power Query' permite extrair dados de diversas fontes externas (bancos de dados, arquivos CSV, páginas web), transformar esses dados por meio de etapas sequenciais gravadas e carregá-los em planilhas ou no modelo de dados interno.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Power Query é o motor canônico de ETL (Extração, Transformação e Carga) self-service integrado ao Microsoft Excel e ao Power BI. Ele extrai dados de fontes heterogêneas (bancos relacionais, APIs Web, arquivos JSON, pastas locais) e aplica etapas lineares e gravadas de higienização, tipagem e mesclagem codificadas na linguagem funcional 'M', permitindo a repetição automática do fluxo de transformação a cada atualização.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-16",
    "numero": 16,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Excel, uma fórmula que contenha uma referência circular (uma célula que depende direta ou indiretamente de seu próprio valor) é processada normalmente sem qualquer alerta ou limitação matemática pelo software.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Uma referência circular ocorre quando uma fórmula faz referência à sua própria célula direta ou indiretamente. O Excel detecta a inconsistência, emite uma mensagem de aviso e interrompe o cálculo automático da cadeia, exigindo correção ou configuração voluntária do cálculo iterativo nas opções.",
    "armadilhaBanca": "Omissão de erro sistêmico: alegar processamento transparente e silencioso para falha matemática de dependência cíclica.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Microsoft Excel, a ocorrência não planejada de uma referência circular gera um alerta explícito de erro de cálculo, pois o programa não consegue resolver computacionalmente a dependência cíclica a menos que a iteração seja expressamente ativada."
  },
  {
    "id": "m14-q-17",
    "numero": 17,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "Em apresentações no Microsoft PowerPoint e Google Slides, o slide mestre (ou tema mestre) centraliza a formatação de fontes, cores, logotipos e leiautes, garantindo que qualquer alteração nele efetuada se propague uniformemente por todos os slides que dele derivam.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Nos softwares de apresentação corporativa (PowerPoint e Google Slides), o 'Slide Mestre' funciona como a matriz estrutural e hierárquica do leiaute. Nele são padronizados tipografia institucional, paletas de cores, cabeçalhos, rodapés, numeração de slides e logotipos oficiais. Modificações aplicadas no slide mestre propagam-se automaticamente por toda a apresentação, assegurando uniformidade visual e produtividade.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-18",
    "numero": 18,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft PowerPoint, o uso do slide mestre restringe a criação da apresentação a um único leiaute fixo, impossibilitando a utilização de leiautes diferenciados para títulos, seções e conteúdo com duas colunas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Slide Mestre é a camada superior de padronização visual da apresentação; abaixo do mestre principal, existem múltiplos leiautes de slides especializados (Título, Título e Conteúdo, Cabeçalho de Seção, Duas Colunas, Comparação), permitindo diversidade visual sob uma identidade unificada.",
    "armadilhaBanca": "Restrição indevida de funcionalidade: julgar que o padrão mestre uniformiza a apresentação impondo um leiaute singular e inflexível.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Microsoft PowerPoint, o slide mestre funciona como matriz hierárquica que engloba múltiplos leiautes filhos customizáveis, viabilizando formatos variados de títulos, transições de seções e comparações em múltiplas colunas."
  },
  {
    "id": "m14-q-19",
    "numero": 19,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Outlook, o protocolo IMAP sincroniza as pastas e o status das mensagens (lidas, não lidas, marcadas) entre o servidor de e-mail e múltiplos dispositivos clientes, ao passo que o protocolo POP3 tradicionalmente transfere os e-mails para um único dispositivo local e os remove da caixa de entrada do servidor.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Distinção clássica da arquitetura de correio eletrônico: o protocolo IMAP (Internet Message Access Protocol, porta padrão 993 em SSL) realiza sincronização bidirecional em tempo real, mantendo mensagens, status (lido/não lido) e pastas centralizadas no servidor e replicadas em múltiplos dispositivos; ao passo que o POP3 (porta padrão 995 em SSL) historicamente descarrega os e-mails para um único cliente local, esvaziando a caixa postal no servidor.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-20",
    "numero": 20,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "O protocolo POP3 é superior ao IMAP para usuários que acessam simultaneamente suas mensagens corporativas a partir de celulares, tablets e computadores, pois mantém todas as pastas rigorosamente sincronizadas em tempo real na nuvem.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O protocolo POP3 (Post Office Protocol) descarrega as mensagens da caixa de entrada para o dispositivo local e historicamente as remove do servidor, gerando descompasso entre múltiplos aparelhos. O protocolo que garante sincronia contínua de pastas e estados é o IMAP (Internet Message Access Protocol).",
    "armadilhaBanca": "Inversão clássica de protocolos de correio eletrônico: atribuir a sincronização em nuvem multi-dispositivo ao POP3 em vez do IMAP.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O protocolo IMAP (ou tecnologias Exchange/MAPI) é o padrão recomendado para acesso simultâneo em múltiplos dispositivos, pois sincroniza mensagens, pastas e status de leitura bidirecionalmente no servidor na nuvem, diferentemente do POP3 que prioriza download local."
  },
  {
    "id": "m14-q-21",
    "numero": 21,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "A criptografia de ponta a ponta (E2EE) em reuniões corporativas assegura que os dados de áudio e vídeo trafeguem cifrados de modo que apenas os dispositivos dos participantes consigam decifrá-los, impedindo inclusive que os servidores da empresa fornecedora da plataforma acessem o conteúdo bruto.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na Criptografia de Ponta a Ponta (End-to-End Encryption - E2EE), as chaves criptográficas de cifração e decifração de fluxos de áudio e vídeo residem com exclusividade nos dispositivos finais dos participantes da comunicação. Mesmo que os dados cifrados trafeguem pelos servidores corporativos do fornecedor da plataforma (provedor de nuvem), este não dispõe dos segredos criptográficos necessários para inspecionar, gravar ou decodificar o conteúdo da chamada.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-22",
    "numero": 22,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Google Meet, qualquer usuário anônimo sem conta Google pode ingressar diretamente em uma reunião institucional restrita sem autorização prévia do organizador ou passagem pela sala de espera (lobby).",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Em reuniões corporativas e institucionais, políticas de controle de acesso exigem triagem no lobby para usuários não autenticados ou externos à organização contratante, evitando invasões de reuniões (zoombombing) e vazamento de discussões confidenciais.",
    "armadilhaBanca": "Supressão de barreiras de segurança: alegar entrada livre e anônima em salas de videoconferência restritas da administração pública.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Google Meet corporativo, participantes anônimos ou sem credenciais da organização não entram diretamente na conferência restrita, sendo obrigatoriamente retidos na sala de espera (lobby) até que um anfitrião aprove seu ingresso."
  },
  {
    "id": "m14-q-23",
    "numero": 23,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "O recurso de rotulagem de sensibilidade (Sensitivity Labels) no Microsoft Information Protection permite classificar documentos como 'Público', 'Interno' ou 'Altamente Confidencial', aplicando automaticamente marcas d'água, criptografia e restrições de impressão conforme a classificação.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. As Etiquetas de Sensibilidade (Sensitivity Labels) do Microsoft Information Protection (Purview) materializam a governança da informação na prática: permitem classificar dados de acordo com seu grau de sigilo (Público, Geral, Confidencial, Altamente Confidencial), aplicando de forma automatizada criptografia com certificados digitais, marcas d'água dinâmicas com o nome do usuário e restrições de encaminhamento e cópia.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-24",
    "numero": 24,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "A aplicação de rótulo de confidencialidade com criptografia em um documento do Microsoft Word impede que o autor legítimo do arquivo consiga abri-lo novamente após fechar o programa.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A proteção criptográfica de rótulos do Microsoft Purview Information Protection atua vinculada ao Azure AD / Entra ID: os usuários autorizados autenticam-se com suas identidades institucionais e recebem os direitos de descriptografia e edição correspondentes, sem perda de acesso pelo autor.",
    "armadilhaBanca": "Confusão sobre direitos de uso em criptografia de documentos: presumir que a cifra bloqueia o próprio criador do conteúdo protegido.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A aplicação de rótulo de sensibilidade com criptografia no Microsoft Word restringe o acesso com base na identidade dos usuários, permitindo que o autor e pessoas expressamente credenciadas abram e editem o arquivo normalmente."
  },
  {
    "id": "m14-q-25",
    "numero": 25,
    "macroModuloId": "M14",
    "submoduloId": "14.1",
    "contexto": "No que concerne às ferramentas de produtividade, colaboração em nuvem, trabalho remoto e governança documental, julgue o item a seguir.",
    "item": "No Microsoft Teams, a exclusão de uma equipe departamental preserva intactos e de forma indelével todos os canais, mensagens de chat e arquivos associados no SharePoint, não gerando qualquer impacto sobre os dados históricos da unidade.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A equipe no Teams está intrinsecamente amarrada a um Grupo Microsoft 365 subjacente. Deletar a equipe remove o grupo, seus canais, conversas e o repositório de documentos no SharePoint (com retenção provisória de soft-delete de 30 dias para recuperação por administradores), afetando diretamente os dados da unidade.",
    "armadilhaBanca": "Ilusão de independência arquitetural: supor que a exclusão da equipe preserve indefinidamente o repositório SharePoint subjacente.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Microsoft Teams, a exclusão de uma equipe desencadeia a exclusão do grupo Microsoft 365 correspondente e dos recursos vinculados (canais, plano do Planner e site de arquivos do SharePoint), ficando os dados sujeitos a período de retenção transitória na lixeira."
  },
  {
    "id": "m14-q-26",
    "numero": 26,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Na arquitetura TCP/IP, o protocolo TCP opera na camada de transporte garantindo a entrega confiável e sequenciada dos pacotes de dados por meio de controle de fluxo e mecanismo de confirmação (three-way handshake), ao passo que o UDP opera sem conexão e sem garantia de entrega, priorizando a velocidade.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na camada de transporte do modelo TCP/IP: o TCP (Transmission Control Protocol) é orientado a conexão, realiza a negociação tripartite em três vias (three-way handshake: SYN, SYN-ACK, ACK), garante a entrega sequenciada e retransmite pacotes perdidos por controle de fluxo; enquanto o UDP (User Datagram Protocol) é não orientado a conexão (connectionless) e não confiável, ideal para streaming de voz e vídeo em tempo real onde a baixa latência é prioritária sobre a retransmissão.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-27",
    "numero": 27,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo UDP é prioritariamente utilizado em transferências bancárias e downloads de arquivos institucionais sensíveis devido à sua capacidade infalível de retransmitir pacotes corrompidos e reordenar dados perdidos na rota.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O protocolo UDP (User Datagram Protocol) é não orientado à conexão (connectionless) e não oferece garantias de entrega, ordenação ou retransmissão, sendo indicado para transmissões de áudio/vídeo em tempo real e jogos. Operações financeiras e download de arquivos críticos exigem o TCP (Transmission Control Protocol).",
    "armadilhaBanca": "Troca de protocolos da camada de transporte: apontar o UDP como protocolo de confiabilidade estrita e integridade transacional.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O protocolo TCP é utilizado em transferências bancárias, navegação web e transferência de arquivos por garantir entrega ordenada, verificação de integridade e retransmissão de pacotes perdidos, ao passo que o UDP prioriza velocidade sem garantias de retransmissão."
  },
  {
    "id": "m14-q-28",
    "numero": 28,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo DNS (Domain Name System) desempenha a função de resolução de nomes, traduzindo nomes de domínio alfanuméricos legíveis por humanos (como www.camara.leg.br) em endereços IP numéricos necessários para o roteamento na internet.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O DNS (Domain Name System, operando na porta 53 via UDP/TCP) atua como o sistema hierárquico e distribuído de diretórios da internet, resolvendo nomes de domínio amigáveis (como 'camara.leg.br') nos respectivos endereços IP numéricos (IPv4 ou IPv6) necessários para o roteamento e comutação de pacotes na camada de rede. Sem o DNS, a navegação na World Wide Web dependeria da memorização de cadeias numéricas de IP.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-29",
    "numero": 29,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo DHCP tem como função exclusiva criptografar todo o tráfego de páginas da web utilizando certificados digitais X.509.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O protocolo DHCP (Dynamic Host Configuration Protocol) opera na camada de aplicação para atribuir dinamicamente endereços IP e configurações de rede às estações clientes. A segurança e criptografia de aplicações web com certificados digitais X.509 é prerrogativa do protocolo TLS/HTTPS.",
    "armadilhaBanca": "Atribuição funcional cruzada de protocolos: transferir atribuições de criptografia do HTTPS/TLS para o serviço de endereçamento DHCP.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O protocolo DHCP destina-se à configuração automática e dinâmica de parâmetros de rede IP (como endereço IP, máscara e gateway), enquanto a cifragem de páginas web mediante certificados X.509 cabe aos protocolos TLS/HTTPS."
  },
  {
    "id": "m14-q-30",
    "numero": 30,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo HTTPS utiliza os protocolos criptográficos SSL/TLS sobre a porta 443 para prover autenticação do servidor via certificados digitais e confidencialidade das comunicações por meio de criptografia simétrica e assimétrica.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O protocolo HTTPS (operando na porta 443) é a extensão segura do HTTP obtida pelo encapsulamento sobre o protocolo TLS (Transport Layer Security). O processo conjuga criptografia assimétrica de chaves pública e privada (durante o handshake inicial para autenticar a identidade do servidor via certificado digital X.509 e negociar a chave de sessão) com criptografia simétrica (para a transmissão ágil dos dados da sessão).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-31",
    "numero": 31,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo de comunicação HTTP em sua versão básica sem camada TLS cifra o corpo das requisições web por meio de chaves simétricas, inviabilizando a captura de senhas em trânsito por ferramentas de monitoramento de tráfego na rede local.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O HTTP padrão opera sem criptografia de ponta a ponta: requisições, respostas, parâmetros e cabeçalhos trafegam em texto legível, vulneráveis a ataques de sniffing e man-in-the-middle na rede. A proteção criptográfica mediante chaves simétricas e assimétricas decorre do uso de TLS no protocolo HTTPS.",
    "armadilhaBanca": "Atribuição errônea de criptografia ao HTTP legado: desconsiderar que a cifra de tráfego é exclusiva do protocolo HTTPS (com TLS).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O protocolo HTTP trafega informações e credenciais em texto claro (clear text) na camada de aplicação, exigindo a implementação da extensão criptográfica HTTPS (HTTP sobre TLS) para proteger os dados contra interceptações em trânsito."
  },
  {
    "id": "m14-q-32",
    "numero": 32,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Ameaças do tipo Ransomware operam sequestrando dados corporativos por meio de criptografia forte aplicada a arquivos e volumes de armazenamento, exigindo o pagamento de resgate para o fornecimento da chave de decifração.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Ransomware é uma categoria de software malicioso projetada para extorsão financeira: ele compromete o sistema e cifra silenciosamente volumes de armazenamento, bancos de dados e documentos confidenciais utilizando algoritmos de criptografia de chave pública/simétrica forte (como AES-256 e RSA-4096), tornando os dados inacessíveis até que a vítima pague um resgate (frequentemente em criptomoedas) pela chave privada de decifração.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-33",
    "numero": 33,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Ataques de Phishing diferenciam-se do Spear-Phishing porque o Spear-Phishing consiste em disparos em massa e impessoais de e-mails para milhões de vítimas aleatórias sem qualquer pesquisa prévia de perfil.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A assertiva inverteu com precisão os dois conceitos: o Phishing convencional adota abordagem ampla, pulverizada e impessoal (\"pesca com rede\"); já o Spear-Phishing (\"pesca com arpão\") é um ataque refinado, customizado e focado em um indivíduo, setor ou instituição específica.",
    "armadilhaBanca": "Inversão simétrica entre modalidades de engenharia social: trocar a definição de phishing genérico pela de spear-phishing.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Ataques de phishing tradicional consistem em mensagens eletrônicas massivas e genéricas disparadas a grandes públicos, enquanto o spear-phishing é uma investida altamente direcionada, elaborada com base em informações específicas sobre uma pessoa ou órgão."
  },
  {
    "id": "m14-q-34",
    "numero": 34,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Um ataque de Negação de Serviço Distribuída (DDoS) visa indisponibilizar um servidor ou serviço na nuvem sobrecarregando sua largura de banda ou seus recursos computacionais com uma torrente massiva de requisições originadas de uma rede distribuída de máquinas zumbis (botnet).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Um ataque de Negação de Serviço Distribuída (DDoS) atenta diretamente contra a Disponibilidade (tríade CID) do sistema alvo. O atacante comanda uma rede distribuída de dispositivos previamente comprometidos (botnet de zumbis) para disparar milhões de requisições simultâneas em massa contra os servidores da organização, saturando a largura de banda da rede ou exaurindo os recursos de CPU e memória, tornando o serviço inoperante.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-35",
    "numero": 35,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "No modelo da segurança da informação, o atributo da confidencialidade assegura o acesso tempestivo aos sistemas de informação e bancos de dados institucionais por parte dos colaboradores credenciados.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O enunciado descreveu a Disponibilidade. A Confidencialidade visa resguardar o sigilo da informação, assegurando que o acesso seja restrito estritamente a quem tem autorização legal ou legítima para visualizá-la.",
    "armadilhaBanca": "Troca de atributos da tríade CID: conceituar a disponibilidade rotulando-a falsamente como confidencialidade.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No modelo clássico de segurança da informação (CID), a disponibilidade é o atributo que assegura que os sistemas e bases de dados permaneçam acessíveis tempestivamente aos usuários autorizados sempre que requisitados."
  },
  {
    "id": "m14-q-36",
    "numero": 36,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Na tríade fundamental de segurança da informação (CID - Confidencialidade, Integridade e Disponibilidade), a integridade assegura que a informação não seja alterada ou corrompida de forma indevida ou fraudulenta durante o armazenamento ou transmissão.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na clássica tríade CID da segurança da informação (ISO/IEC 27001), o pilar da Integridade garante a exatidão, inteireza e completude dos dados e métodos de processamento, assegurando que a informação não sofra alterações, acréscimos, fraudes, truncamentos ou exclusões não autorizadas, quer durante seu repouso em bancos de dados, quer em trânsito pelas redes computacionais.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-37",
    "numero": 37,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Um Firewall de Próxima Geração (NGFW) opera restrito à inspeção do cabeçalho de pacotes nas camadas 3 e 4 do modelo OSI, sendo tecnicamente incapaz de inspecionar o conteúdo de aplicações (camada 7) ou bloquear comandos específicos de banco de dados.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Firewalls tradicionais (packet filtering) restringiam-se às camadas de rede e transporte (portas e IPs). O NGFW destaca-se exatamente pela capacidade de entender a camada de aplicação (Camada 7), inspecionando o payload e bloqueando tráfegos de risco em aplicações modernas.",
    "armadilhaBanca": "Subdimensionamento técnico do NGFW: rebaixar firewall de próxima geração a filtro de pacotes básico de camadas 3 e 4.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Um Firewall de Próxima Geração (NGFW) realiza inspeção profunda de pacotes (DPI) na camada de aplicação (Camada 7 do modelo OSI), identificando serviços específicos, assinaturas de software e prevenindo intrusões complexas."
  },
  {
    "id": "m14-q-38",
    "numero": 38,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "A autenticação multifator (MFA) eleva a segurança ao exigir que o usuário comprove sua identidade combinando pelo menos dois fatores de categorias distintas: algo que ele sabe (como uma senha), algo que ele possui (como um token físico ou aplicativo autenticador) ou algo que ele é (como biometria facial ou digital).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A Autenticação Multifator (MFA) fundamenta-se na exigência de que o usuário comprove sua identidade utilizando pelo menos dois fatores de categorias ontológicas distintas: 1) Fator de conhecimento (algo que só o usuário sabe: senha alfanumérica, PIN); 2) Fator de posse (algo que só o usuário tem: aplicativo autenticador OTP, token FIDO2, cartão inteligente); e 3) Fator de inerência (algo que o usuário é: biometria facial, digital ou íris).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-39",
    "numero": 39,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "A inserção de duas senhas textuais sequenciais criadas pelo próprio usuário (como a senha de rede e a senha do correio eletrônico) caracteriza formalmente uma autenticação multifator robusta segundo os padrões internacionais de segurança.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Segundo as normas NIST SP 800-63B e ISO/IEC 27001, a autenticação multifator exige fatores pertencentes a diferentes categorias (conhecimento, posse e inerência). Utilizar duas senhas distintas ou senhas sequenciais constitui apenas dois elementos do fator conhecimento, falhando na definição técnica de MFA.",
    "armadilhaBanca": "Falsa multifatoração: considerar que duas senhas textuais diferentes configuram autenticação de múltiplos fatores.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A autenticação multifator (MFA) requer o emprego de pelo menos dois fatores de categorias distintas: algo que você sabe (senha/PIN), algo que você tem (token/smartphone) ou algo que você é (biometria); o uso de duas senhas representa um mesmo fator repetido."
  },
  {
    "id": "m14-q-40",
    "numero": 40,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "A regra de backup 3-2-1 preconiza que a organização mantenha pelo menos 3 cópias dos dados importantes, armazenadas em 2 mídias de tipos diferentes, com pelo menos 1 dessas cópias guardada fora das instalações físicas principais (offsite ou nuvem).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A regra de ouro 3-2-1 de backup é o padrão internacional de referência para planos de continuidade de negócios e recuperação de desastres (Disaster Recovery): orienta que a instituição mantenha no mínimo 3 cópias completas de seus dados críticos, armazenadas em pelo menos 2 tipos de mídias físicas ou lógicas diferentes (ex.: disco SAN e fita magnética/objeto S3), com pelo menos 1 cópia mantida externamente fora do datacenter principal (offsite ou em nuvem).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-41",
    "numero": 41,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "No procedimento de backup incremental, a rotina diária copia as modificações ocorridas em relação ao último backup integral (full), permitindo que a restauração de desastre requeira o conjunto de fitas do backup full e o suporte referente ao dia mais recente.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O enunciado descreveu a rotina de backup DIFERENCIAL (que copia as alterações em relação ao último full e exige para restauração apenas o full + o último diferencial). O backup incremental copia as mudanças em relação ao último backup (full ou incremental), necessitando de toda a cadeia cronológica de arquivos para recomposição.",
    "armadilhaBanca": "Confusão clássica entre backup incremental e backup diferencial no tocante ao ponto de referência e ao procedimento de recuperação.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No backup incremental, a rotina grava apenas os arquivos criados ou alterados desde o último backup de qualquer tipo, exigindo para a restauração completa o último backup full acrescido de todos os incrementos sucessivos até a data do incidente."
  },
  {
    "id": "m14-q-42",
    "numero": 42,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O Recovery Point Objective (RPO) define a quantidade máxima tolerável de dados perdidos medida em tempo (por exemplo, 1 hora de transações), enquanto o Recovery Time Objective (RTO) estipula o tempo máximo aceitável para que o sistema volte a operar após a ocorrência de um desastre.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Dois dos parâmetros métricos mais cobrados em governança de TI e gestão de continuidade: o RPO (Recovery Point Objective) mede a tolerância à perda de dados expressa em tempo (ex.: se o backup é diário, o RPO é de até 24 horas de transações perdidas); enquanto o RTO (Recovery Time Objective) define o tempo limite aceitável de indisponibilidade desde a declaração do desastre até o restabelecimento completo das operações do sistema.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-43",
    "numero": 43,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Um RTO de valor zero e um RPO de valor infinito constituem a meta ideal de alta resiliência para bancos de dados críticos da administração pública.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O RPO (Recovery Point Objective) quantifica a perda máxima de dados tolerável expressa em tempo. Ter um RPO infinito significaria aceitar perder toda a base histórica de dados da organização, o que é inaceitável em órgãos públicos. Alta disponibilidade exige tanto RTO quanto RPO próximos de zero.",
    "armadilhaBanca": "Distorção do parâmetro RPO: sugerir que tolerar perda infinita de dados históricos constitui meta de alta disponibilidade.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em planos de continuidade de negócios e recuperação de desastres, ambientes de alta resiliência buscam metas de RTO (tempo de recuperação) e RPO (ponto de recuperação/perda de dados tolerada) tão próximas de zero quanto viável tecnologicamente."
  },
  {
    "id": "m14-q-44",
    "numero": 44,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Em um ataque de Man-in-the-Middle (MitM), o invasor intercepta e potencialmente altera as mensagens trocadas entre duas partes que acreditam estar se comunicando diretamente de forma privada, o que pode ser mitigado pelo uso de canais criptografados com validação estrita de certificados digitais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Em um ataque de Man-in-the-Middle (MitM), o atacante intercepta, espiona e potencialmente adultera pacotes trafegados entre duas entidades que acreditam manter um canal direto e seguro. A principal contramedida é a utilização obrigatória do protocolo TLS com validação estrita da cadeia de autoridade certificadora (CA) e uso de certificados digitais confiáveis (além de técnicas de HSTS e Certificate Pinning).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-45",
    "numero": 45,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "A vulnerabilidade de SQL Injection decorre da sanitização e parametrização excessiva de dados fornecidos pelo usuário em formulários de consulta, o que bloqueia o processamento das instruções SQL no servidor.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O SQL Injection ocorre exatamente quando o código da aplicação concatena dados fornecidos externamente sem a devida sanitização ou sem o uso de Prepared Statements / consultas parametrizadas. A parametrização adequada é a técnica de correção e proteção recomendada pela OWASP, e não a causa da falha.",
    "armadilhaBanca": "Inversão de causa e remédio em segurança de software: apontar a técnica de parametrização defensiva como causadora da falha de SQLi.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Vulnerabilidades de injeção de SQL decorrem da falta ou insuficiência de validação, sanitização e parametrização de entradas fornecidas por usuários em comandos dinâmicos submetidos ao banco de dados relacional."
  },
  {
    "id": "m14-q-46",
    "numero": 46,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Conforme as diretrizes da LGPD e as normas ISO/IEC 27001, o princípio da 'Segurança por Padrão' (Security by Default) determina que os sistemas de informação sejam entregues aos usuários com as configurações mais restritivas de privacidade e segurança já pré-ativadas de fábrica.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Os princípios de Privacy by Design (Privacidade desde a Concepção) e Privacy/Security by Default (Privacidade por Padrão), consagrados no Art. 46 da LGPD e no GDPR europeu, determinam que os sistemas de informação sejam concebidos arquiteturalmente com salvaguardas de privacidade e que suas configurações de fábrica sejam as mais restritivas possíveis, exigindo ação voluntária do usuário para flexibilizar acessos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-47",
    "numero": 47,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "A Lei Geral de Proteção de Dados Pessoais condiciona o tratamento de bases cadastrais da administração pública à guarda física em servidores locais instalados na sede do órgão, considerando ilícita a contratação de infraestrutura em nuvem pública.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Não há qualquer proibição legal na LGPD quanto ao uso de nuvem pública por órgãos da administração pública. O art. 33 da Lei 13.709/2018 regula inclusive a transferência internacional de dados pessoais, desde que o país ou organização forneça grau de proteção adequado ou haja cláusulas contratuais específicas.",
    "armadilhaBanca": "Invenção de vedação legal anacrônica: supor que a LGPD obriga órgãos governamentais a manter servidores físicos próprios locais.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A LGPD (Lei nº 13.709/2018) autoriza o tratamento de dados pessoais pela administração pública em infraestruturas de computação em nuvem pública ou privada, desde que atendidos os requisitos de segurança, confidencialidade e governança legal."
  },
  {
    "id": "m14-q-48",
    "numero": 48,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O padrão FIDO2 e o protocolo WebAuthn viabilizam a autenticação sem senha (passwordless) por meio de criptografia de chave pública e armazenamento seguro em chips TPM ou chaves de segurança físicas, eliminando a vulnerabilidade a ataques de phishing de senhas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A especificação FIDO2 (Fast Identity Online) e a API WebAuthn (W3C) constituem a vanguarda da segurança corporativa na eliminação de senhas (passwordless). O mecanismo baseia-se em criptografia assimétrica de chave pública com chaves privadas protegidas por hardware (módulos TPM em laptops ou chaves físicas USB FIDO), tornando a autenticação intrinsecamente imune a ataques de phishing de credenciais e interceptações na rede.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "dificil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-49",
    "numero": 49,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "O protocolo SSH (Secure Shell) opera por padrão na porta 23 e trafega todo o fluxo de comandos e senhas de administração remota em texto claro sem criptografia.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O protocolo SSH opera convencionalmente na porta 22 e foi criado precisamente para substituir o Telnet (porta 23) e o Rlogin, provendo criptografia forte com chaves assimétricas e simétricas para impedir a interceptação de senhas e tráfego administrativo.",
    "armadilhaBanca": "Troca de parâmetros de administração remota: atribuir a porta 23 e a ausência de criptografia ao protocolo SSH.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O protocolo SSH (Secure Shell) utiliza por padrão a porta TCP 22 e implementa criptografia robusta de ponta a ponta para sessões e transferência de arquivos, ao passo que o Telnet (porta 23) transmite comandos em texto claro."
  },
  {
    "id": "m14-q-50",
    "numero": 50,
    "macroModuloId": "M14",
    "submoduloId": "14.2",
    "contexto": "No que tange a redes de computadores, protocolos de internet, segurança da informação, ameaças cibernéticas e políticas de backup, julgue o item a seguir.",
    "item": "Sistemas de Detecção de Intrusão (IDS) limitam-se a monitorar e emitir alertas sobre atividades suspeitas na rede, ao passo que os Sistemas de Prevenção de Intrusão (IPS) possuem capacidade de atuar ativamente para bloquear e interromper o tráfego malicioso em tempo real.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Distinção clássica de segurança perimetral: o IDS (Intrusion Detection System) atua de modo passivo e fora da rota crítica de pacotes (out-of-band), analisando cópias do tráfego para emitir alertas e logs para os analistas do SOC; ao passo que o IPS (Intrusion Prevention System) opera em linha direta com o tráfego (in-line), inspecionando pacotes em tempo real e executando bloqueios e descartes imediatos de fluxos maliciosos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-51",
    "numero": 51,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A arquitetura de redes neurais denominada Transformer baseia-se fundamentalmente no mecanismo de autoatenção (Self-Attention), o qual permite ao modelo calcular correlações e pesos de dependência entre todas as palavras de uma sequência simultaneamente, independentemente da distância entre elas no texto.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Introduzida no artigo seminal 'Attention Is All You Need' (Vaswani et al., 2017), a arquitetura Transformer revolucionou o processamento de linguagem natural ao substituir redes recorrentes (RNNs/LSTMs) pelo mecanismo de Autoatenção Multi-Cabeça (Multi-Head Self-Attention). O mecanismo permite ao modelo ponderar e relacionar todos os tokens de uma sentença em paralelo, capturando dependências contextuais de longo alcance.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-52",
    "numero": 52,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Diferentemente dos modelos Transformer, as redes neurais recorrentes (RNNs) destacavam-se por sua capacidade de paralelizar perfeitamente o processamento de longos documentos de texto, sem qualquer problema de desvanecimento de gradiente.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. As RNNs processavam textos palavra por palavra (sequencialmente), o que gerava gargalo na computação e perda de memória de longo prazo (vanishing gradient). A revolução dos Transformers (Vaswani et al., 2017) consistiu na introdução do mecanismo de autoatenção que permite processar o texto inteiro em paralelo.",
    "armadilhaBanca": "Inversão das características de arquiteturas neurais: atribuir às redes recorrentes o paralelismo massivo que é marca registrada dos Transformers.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Ao contrário das arquiteturas Transformer que processam todos os tokens simultaneamente em paralelo, as redes neurais recorrentes (RNNs) operavam de forma estritamente sequencial, enfrentando limitações severas de paralelização e desvanecimento de gradiente."
  },
  {
    "id": "m14-q-53",
    "numero": 53,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Em Grandes Modelos de Linguagem (LLMs), os embeddings representam palavras, sentenças ou documentos como vetores numéricos densos em um espaço multidimensional, onde a proximidade geométrica entre dois vetores (medida, por exemplo, pela similaridade de cosseno) reflete sua afinidade semântica.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na Ciência de Dados e no aprendizado de máquina, embeddings são representações numéricas densas e contínuas de palavras, sentenças ou documentos dispostas em espaços vetoriais de centenas ou milhares de dimensões (ex.: 768 ou 1536 dimensões). A distância geométrica entre os vetores (calculada pela similaridade de cosseno ou distância euclidiana) reflete o grau de proximidade semântica dos termos no corpus de treinamento.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-54",
    "numero": 54,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "No espaço vetorial de representação de linguagem natural (embeddings), a distância de cosseno entre vetores associados a vocábulos com forte oposição semântica converge para zero.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A similaridade de cosseno mede o cosseno do ângulo entre dois vetores: ângulo 0° implica cosseno 1 (identidade/máxima correlação semântica); ângulo 90° implica cosseno 0 (ortogonalidade/ausência de relação). Conceitos com forte oposição situam-se em direções divergentes no espaço multidimensional.",
    "armadilhaBanca": "Confusão geométrica entre distância e similaridade de cosseno em espaços vetoriais de embeddings.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em espaços vetoriais de representação semântica (embeddings), termos com forte afinidade ou sinonímia apresentam similaridade de cosseno próxima de 1 (e distância de cosseno próxima de 0), ao passo que conceitos antagônicos e descorrelacionados convergem para valores baixos ou negativos."
  },
  {
    "id": "m14-q-55",
    "numero": 55,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O processo de alinhamento de LLMs denominado Aprendizado por Reforço com Feedback Humano (RLHF - Reinforcement Learning from Human Feedback) emprega avaliações e preferências de anotadores humanos para treinar um modelo de recompensa (Reward Model), orientando o comportamento do modelo em direção a respostas mais úteis, precisas e seguras.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Aprendizado por Reforço com Feedback Humano (RLHF - Reinforcement Learning from Human Feedback) é a técnica central de alinhamento utilizada após a fase de pré-treinamento de LLMs. Especialistas humanos ranqueiam múltiplas respostas geradas pelo modelo para treinar um 'Modelo de Recompensa' (Reward Model), que então guia a otimização dos pesos da rede via algoritmos como PPO (Proximal Policy Optimization), tornando as respostas úteis, corretas e seguras.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-56",
    "numero": 56,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O pré-treinamento de grandes modelos de linguagem (LLMs) constitui a fase mais simplificada do ciclo de desenvolvimento, dependendo da inserção de exemplos curtos estruturados manualmente por anotadores humanos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O pré-treinamento (pre-training) exige milhares de GPUs/TPUs durante semanas ou meses para aprender representações gerais da linguagem a partir de vastos corpora textuais via aprendizado auto-supervisionado. A anotação manual com exemplos curtos refere-se à etapa posterior de alinhamento ou instrução (SFT).",
    "armadilhaBanca": "Minimização do esforço computacional no ciclo de vida de IA: classificar a fase de pré-treinamento como a mais simples e manual.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O pré-treinamento de grandes modelos de linguagem (LLMs) constitui a etapa computacionalmente mais dispendiosa e complexa do pipeline, processando terabytes ou petabytes de texto não estruturado em clusters de aceleradores de hardware."
  },
  {
    "id": "m14-q-57",
    "numero": 57,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A técnica de Geração Aumentada por Recuperação (RAG - Retrieval-Augmented Generation) combina um mecanismo de busca em uma base documental externa com a capacidade generativa do LLM, injetando os trechos relevantes recuperados diretamente no prompt para que o modelo responda com base em fatos atualizados e verificáveis, reduzindo expressivamente as alucinações.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A Geração Aumentada por Recuperação (RAG - Retrieval-Augmented Generation) resolve duas limitações estruturais dos LLMs: o corte temporal do conhecimento e as alucinações. O fluxo RAG segmenta documentos institucionais em blocos (chunks), gera embeddings armazenados em um banco de dados vetorial e, diante da pergunta do usuário, busca os trechos semanticamente mais relevantes e os insere no prompt como contexto fático obrigatório para a resposta.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-58",
    "numero": 58,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O uso de arquiteturas RAG elimina a necessidade de bancos de dados vetoriais, pois todos os documentos corporativos da organização são automaticamente gravados nos pesos fixos da rede neural do modelo durante a fase de consulta em tempo real.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O objetivo central do RAG é desacoplar a memória fática da rede neural: em vez de retreinar ou embutir dados nos pesos sinápticos do modelo, o sistema consulta uma base vetorial externa (ex: Pinecone, Qdrant, PGVector) e fornece os documentos recuperados como subsídio ao prompt.",
    "armadilhaBanca": "Equívoco fundamental sobre RAG: acreditar que o modelo absorve dados corporativos em seus pesos neurais em tempo de consulta.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Arquiteturas RAG (Retrieval-Augmented Generation) utilizam bancos de dados vetoriais externos para recuperar fragmentos documentais pertinentes em tempo real e injetá-los na janela de contexto do LLM, sem alterar os pesos paramétricos fixos do modelo."
  },
  {
    "id": "m14-q-59",
    "numero": 59,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Na engenharia de prompts, a técnica de Chain-of-Thought (Cadeia de Pensamento) estimula o modelo a decompor problemas complexos de raciocínio lógico ou cálculo em etapas intermediárias explícitas antes de emitir a conclusão definitiva, aumentando significativamente a precisão das respostas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A técnica de Chain-of-Thought (Cadeia de Raciocínio, proposta por Wei et al., 2022) instrui o modelo de linguagem a externalizar explicitamente seus passos intermediários de reflexão e inferência lógica antes de emitir a resposta definitiva ('Vamos pensar passo a passo'). Essa decomposição do problema permite ao modelo alocar mais capacidade computacional para problemas matemáticos, lógicos e interpretativos complexos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-60",
    "numero": 60,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O 'zero-shot prompting' caracteriza-se pelo fornecimento prévio de dezenas de exemplos comentados de entrada e saída dentro do prompt para que o modelo aprenda o padrão antes de resolver o novo caso.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A denominação \"zero-shot\" indica ausência de tiros/exemplos (o modelo executa a tarefa apenas interpretando o comando descritivo). Quando o prompt fornece um ou mais exemplos orientadores para guiar a resposta, a estratégia classifica-se como \"one-shot\" ou \"few-shot prompting\".",
    "armadilhaBanca": "Inversão conceitual de técnicas de engenharia de prompt: descrever few-shot chamando-o de zero-shot.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O método de \"zero-shot prompting\" consiste em submeter uma solicitação ao modelo sem o fornecimento prévio de exemplos ilustrativos de tarefa, ao passo que a apresentação de múltiplos pares de entrada/saída denomina-se \"few-shot prompting\"."
  },
  {
    "id": "m14-q-61",
    "numero": 61,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Na interação com LLMs, a técnica de 'Few-shot Prompting' consiste em incluir no prompt alguns exemplos representativos do formato e do resultado esperado, permitindo que o modelo aprenda o padrão por indução em contexto (in-context learning) sem necessidade de atualizar os parâmetros da rede neural.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No paradigma do aprendizado em contexto (In-Context Learning), o 'Few-shot Prompting' consiste em fornecer ao modelo, no corpo do próprio prompt, alguns poucos exemplos resolvidos contendo pares de entrada e saída esperada. O modelo infere a regra ou o formato por indução estatística sem necessidade de retreinamento de pesos ou fine-tuning especializado, garantindo conformidade com padrões formais de resposta.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-62",
    "numero": 62,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O ajuste fino (Fine-Tuning) de um modelo de linguagem é idêntico à engenharia de prompt, pois nenhum dos dois altera os pesos ou parâmetros matemáticos da rede neural subjacente.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A engenharia de prompt atua externamente no texto de entrada da janela de contexto sem modificar a estrutura matemática do modelo. O Fine-Tuning envolve processo de aprendizado supervisionado (backpropagation) que ajusta e grava novos pesos nos parâmetros do modelo.",
    "armadilhaBanca": "Equiparação indevida entre técnicas de inferência e de treino: igualar manipulação de prompt em tempo de execução ao ajuste estrutural de pesos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O ajuste fino (Fine-Tuning) atualiza efetivamente os pesos e parâmetros matemáticos da rede neural através de retreinamento com novos dados, enquanto a engenharia de prompt altera exclusivamente o contexto e instruções fornecidas em tempo de inferência."
  },
  {
    "id": "m14-q-63",
    "numero": 63,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O fenômeno da 'alucinação' (hallucination) em LLMs ocorre quando o modelo gera informações factualmente inverídicas, inventa fontes bibliográficas ou constrói enunciados falsos com elevado grau de persuasão e convicção sintática, decorrente de sua natureza de previsão estatística de próximos tokens.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A alucinação em modelos generativos decorre de sua arquitetura autoregressiva: o modelo calcula probabilisticamente o próximo token mais plausível estatisticamente em determinado contexto sintático, desprovido de compreensão consciente do mundo real. Quando confrontado com lacunas informacionais, ele pode articular fatos inexistentes, inventar números de leis ou citar referências bibliográficas forjadas com absoluta aparência de verossimilhança.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-64",
    "numero": 64,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Os grandes modelos de linguagem contemporâneos operam com base em mecanismos lógicos estritamente determinísticos, o que impede a geração de respostas factualmente inconsistentes ou citações doutrinárias fictícias.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Os LLMs não são motores dedutivos determinísticos ou bancos de dados indexados; são modelos estocásticos de cálculo de probabilidades de distribuição de palavras. A ocorrência de \"alucinações\" (respostas convincentes, porém factualmente erradas) é um fenômeno intrínseco que exige verificação e ancoragem externa.",
    "armadilhaBanca": "Mito do determinismo dos modelos generativos: atribuir infalibilidade lógica e ausência de alucinações aos LLMs.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Grandes modelos de linguagem operam como sistemas probabilísticos de geração textual baseados em predição de tokens subsequentes, estando passíveis de gerar alucinações factuais e citações inexistentes se desprovidos de mecanismos de ancoragem."
  },
  {
    "id": "m14-q-65",
    "numero": 65,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O viés algorítmico (algorithmic bias) em sistemas de inteligência artificial pode refletir e amplificar preconceitos históricos, desigualdades sociais e estereótipos presentes nos dados brutos da internet utilizados para o treinamento dos modelos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O viés algorítmico (algorithmic bias) em modelos de IA generativa decorre primordialmente da ingestão massiva de dados brutos extraídos da internet pública para o pré-treinamento. Esses corpora refletem desigualdades estruturais, preconceitos históricos, disparidades regionais e assimetrias de gênero presentes na produção textual humana, exigindo processos rigorosos de curadoria ética de dados e auditoria algorítmica para mitigação.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-66",
    "numero": 66,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A prática de 'Shadow AI' no serviço público refere-se ao desenvolvimento de sistemas de inteligência artificial certificados e auditados formalmente pela equipe de governança de TI do órgão.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Trata-se de uma derivação do conceito clássico de \"Shadow IT\": refere-se ao risco cibernético decorrente do fato de colaboradores utilizarem soluções de terceiros (como chatbots públicos e geradores de imagem em nuvem) sem supervisão e auditoria institucional, colocando em risco a privacidade e o sigilo de dados públicos.",
    "armadilhaBanca": "Inversão semântica de termo de segurança cibernética: definir prática clandestina de risco como processo formalmente certificado.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A expressão \"Shadow AI\" designa o uso não autorizado, oculto ou informal de ferramentas de inteligência artificial por servidores e equipes de trabalho sem o conhecimento, homologação e controle formal da governança de TI e segurança da instituição."
  },
  {
    "id": "m14-q-67",
    "numero": 67,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "O envio de minutas de proposições legislativas sigilosas ou de dados pessoais de cidadãos para plataformas públicas gratuitas de inteligência artificial generativa viola as políticas de segurança da informação e a LGPD, devido ao risco de os dados serem utilizados para o retreinamento dos modelos proprietários da fornecedora.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A submissão de documentos oficiais restritos, minutas legislativas em elaboração ou bases com dados pessoais protegidos pela LGPD para serviços públicos gratuitos de IA generativa acarreta quebra direta de confidencialidade e segurança da informação. A maioria das plataformas públicas de consumo utiliza os prompts de usuários gratuitos para alimentar seus ciclos de retreinamento, gerando risco severo de vazamento institucional.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-68",
    "numero": 68,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A engenharia de prompt que utiliza delimitadores estruturados (como tags XML ou blocos de código Markdown) é desaconselhada pelas fornecedoras de LLMs por gerar sobrecarga de processamento nos transformadores.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. As principais empresas desenvolvedoras de LLMs recomendam expressamente o uso de delimitadores explícitos (ex: <documento>...</documento> ou ```texto```). Isso auxilia a atenção do modelo a separar o comando da instrução em relação aos dados de suporte, elevando a precisão e reduzindo vulnerabilidades.",
    "armadilhaBanca": "Desestímulo a boas práticas consagradas: contraindicar a estruturação clara de prompts alegando sobrecarga computacional infundada.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "O emprego de delimitadores estruturados (como tags XML, marcadores Markdown ou chaves) é amplamente encorajado na engenharia de prompt, pois delimita com clareza instruções, dados de entrada e contextos, mitigando ataques de prompt injection."
  },
  {
    "id": "m14-q-69",
    "numero": 69,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A técnica de 'Prompt Injection' consiste em um ataque cibernético no qual entradas maliciosas manipuladas pelo usuário induzem o modelo de linguagem a ignorar suas diretrizes de segurança e instruções originais (system prompt), executando ações não autorizadas.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Prompt Injection (Injeção de Instruções) é uma vulnerabilidade de segurança crítica em sistemas de IA generativa (listada no Top 10 da OWASP para LLMs). O invasor manipula a entrada de dados (diretamente no prompt ou indiretamente em documentos processados) para induzir o modelo a ignorar suas diretrizes de sistema originais (system prompt) e executar comandos maliciosos, vazando dados sensíveis ou contornando filtros de moderação.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-70",
    "numero": 70,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Em processamento de linguagem natural, a 'temperatura' de amostragem em um LLM é um hiperparâmetro que, quando configurado com valor zero, faz com que o modelo gere respostas com máxima aleatoriedade, criatividade e imprevisibilidade léxica.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O hiperparâmetro de temperatura modula a distribuição de probabilidades no softmax final: temperatura = 0 (ou próxima de zero) colapsa a amostragem na escolha puramente gananciosa (greedy decoding) e reproduzível; já temperaturas elevadas (0.8 a 1.2) tornam o modelo mais inventivo, criativo e variado.",
    "armadilhaBanca": "Inversão do comportamento do hiperparâmetro temperatura: atribuir máxima aleatoriedade à temperatura zero.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em modelos de linguagem, a configuração do hiperparâmetro \"temperatura\" com valor zero torna a decodificação estritamente determinística (selecionando sempre o token de maior probabilidade), ao passo que valores elevados ampliam a diversidade e a aleatoriedade da resposta."
  },
  {
    "id": "m14-q-71",
    "numero": 71,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "No contexto da governança da inteligência artificial no setor público, a 'Inteligência Artificial Explicável' (XAI - Explainable AI) busca assegurar que as decisões e recomendações automatizadas apoiadas por algoritmos possam ser compreendidas, auditadas e justificadas perante a sociedade e os órgãos de controle externo.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A Inteligência Artificial Explicável (XAI - Explainable AI) visa superar o paradigma da 'caixa-preta' (black-box) dos modelos complexos de aprendizado profundo (Deep Learning). No âmbito da administração pública, a explicabilidade algorítmica é um imperativo ético e constitucional decorrente dos princípios republicanos da motivação dos atos administrativos, da ampla defesa, do contraditório e da prestação de contas (accountability).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-72",
    "numero": 72,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A governança de soluções de inteligência artificial no setor público afasta avaliações de viés algorítmico e equidade quando os modelos fundacionais forem obtidos de fornecedores comerciais consolidados no mercado internacional.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O uso de modelos fundacionais proprietários de grandes corporações não isenta o poder público de auditar o sistema contra discriminações algorítmicas, violações a direitos fundamentais e distorções sistêmicas, em estrito atendimento aos princípios constitucionais da moralidade, impessoalidade e publicidade.",
    "armadilhaBanca": "Isenção de responsabilidade regulatória: alegar que a contratação de fornecedores comerciais de renome dispensa auditoria ética governamental.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A governança responsável de IA na administração pública exige avaliação contínua e mandatória de viés algorítmico, equidade e transparência das respostas, inclusive quando os modelos e ferramentas forem contratados de grandes fornecedores privados."
  },
  {
    "id": "m14-q-73",
    "numero": 73,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "A janela de contexto de um LLM define a quantidade máxima de tokens (unidades de texto) que o modelo consegue processar simultaneamente em uma única requisição, abrangendo as instruções do sistema, o histórico da conversa e a resposta a ser gerada.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A janela de contexto (Context Window) de um Large Language Model define o teto máximo de tokens (aproximadamente 4 caracteres por token em média) que a camada de atenção consegue processar simultaneamente em uma única iteração. Esse espaço de memória de trabalho efêmera deve acomodar compulsoriamente a soma de: instruções de sistema, contexto externo injetado (via RAG), histórico de mensagens da sessão e o próprio texto a ser gerado.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-74",
    "numero": 74,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "No processo de tokenização de modelos de linguagem, a unidade de token corresponde à delimitação ortográfica de uma palavra individual presente no léxico gramatical.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Algoritmos de tokenização amplamente utilizados (como Byte-Pair Encoding - BPE e WordPiece) fragmentam palavras complexas, raras ou flexionadas em submorfemas menores (sub-tokens) para permitir a representação universal do vocabulário dentro de uma tabela de tamanho fixo.",
    "armadilhaBanca": "Equiparação reducionista: assumir que a unidade de token de um LLM é sempre uma palavra ortográfica inteira da gramática.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No processo de tokenização de modelos de linguagem, um token não coincide necessariamente com uma palavra completa, correspondendo frequentemente a fragmentos de palavras (subwords), caracteres individuais ou pontuações."
  },
  {
    "id": "m14-q-75",
    "numero": 75,
    "macroModuloId": "M14",
    "submoduloId": "14.3",
    "contexto": "No que se refere à Inteligência Artificial Generativa, arquiteturas neurais Transformer, modelos de linguagem (LLMs), engenharia de prompt e ética no setor público, julgue o item a seguir.",
    "item": "Modelos de linguagem generativos possuem atualização contínua e autônoma de seus pesos neurais em tempo real a cada pesquisa feita na web pelo usuário comum, prescindindo de processos formais de fine-tuning ou retreinamento periódico.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. As consultas do usuário e a recuperação de dados em tempo real (como via browsing ou RAG) atuam exclusivamente na composição do prompt de entrada (inferência). O modelo não retreina ou altera seus pesos sinápticos durante a execução ordinária em produção.",
    "armadilhaBanca": "Mito da autoatualização em tempo de execução: crer que a busca em tempo real grava conhecimento de forma permanente nos parâmetros da rede.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Modelos de linguagem generativos possuem pesos neurais congelados e estáticos após a conclusão de suas fases de treinamento, não sofrendo alteração direta de parâmetros durante pesquisas ou interações em tempo real com usuários."
  },
  {
    "id": "m14-q-76",
    "numero": 76,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "No ciclo de vida de dados, o processo de ETL (Extract, Transform, Load) tradicionalmente extrai dados brutos de fontes transacionais, realiza transformações e limpezas em uma área intermediária (staging area) e carrega os dados consolidados em um Data Warehouse.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O fluxo de ETL (Extract, Transform, Load) é a espinha dorsal tradicional das arquiteturas corporativas de Business Intelligence: extrai dados heterogêneos de sistemas transacionais OLTP operacionais, encaminha-os para uma área de preparação (staging area) para sofrerem deduplicação, tratamento de nulos, tipagem e enriquecimento, e finalmente os carrega de forma estruturada no Data Warehouse para alimentar relatórios e dashboards.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-77",
    "numero": 77,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na abordagem moderna de ELT (Extract, Load, Transform), todas as transformações e higienizações de dados são executadas em servidores intermediários locais antes que qualquer registro seja inserido no repositório de destino em nuvem.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Na arquitetura tradicional ETL, a transformação ocorria em servidores intermediários antes da carga. Na abordagem moderna ELT, inverte-se a ordem: os dados são carregados de imediato no Data Warehouse/Lakehouse em sua forma bruta e as transformações ocorrem sob demanda aproveitando o poder computacional distribuído.",
    "armadilhaBanca": "Confusão arquitetural entre ETL tradicional e ELT moderno: descrever a mecânica pré-carga do ETL rotulando-a indevidamente como ELT.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Na abordagem de dados ELT (Extract, Load, Transform), os dados brutos são extraídos das fontes e carregados diretamente no repositório corporativo em nuvem, sendo transformados posteriormente pelo motor analítico elástico da própria nuvem."
  },
  {
    "id": "m14-q-78",
    "numero": 78,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Em bancos de dados relacionais, as propriedades ACID asseguram a confiabilidade das transações, onde a Atomicidade garante que uma transação seja executada em sua totalidade ou completamente revertida caso ocorra alguma falha.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Em sistemas de gerenciamento de bancos de dados relacionais (SGBD RDBMS), a confiabilidade das transações é garantida pelas quatro propriedades ACID: Atomicidade (a transação é indivisível: todas as suas operações são confirmadas com sucesso via COMMIT ou integralmente revertidas via ROLLBACK caso ocorra qualquer falha); Consistência; Isolamento; e Durabilidade.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-79",
    "numero": 79,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "A propriedade de Consistência no modelo ACID determina que duas transações concorrentes possam ler dados não confirmados uma da outra, gerando o fenômeno de leitura suja (dirty read) como comportamento desejável.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Leitura suja (dirty read) é uma clássica anomalia de concorrência que corrompe o princípio do Isolamento. O Isolamento (Isolation) garante que a execução simultânea de transações produza o mesmo resultado que a sua execução puramente sequencial, não sendo a leitura de dados pendentes jamais um objetivo benéfico.",
    "armadilhaBanca": "Classificação de falha transacional como virtude de integridade: apresentar a anomalia de leitura suja como comportamento preconizado pelo ACID.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A propriedade de Isolamento no modelo transacional ACID impede que operações concorrentes interfiram entre si, vedando a leitura de dados intermediários não confirmados (leitura suja/dirty read) como medida indispensável de integridade."
  },
  {
    "id": "m14-q-80",
    "numero": 80,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na modelagem dimensional proposta por Ralph Kimball, o Esquema Estrela (Star Schema) organiza o modelo com uma tabela fato central, que armazena métricas quantitativas e chaves estrangeiras, cercada por tabelas de dimensão desnormalizadas que fornecem o contexto das análises (como tempo, produto e localização).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na clássica modelagem dimensional proposta por Ralph Kimball para Data Warehouses, o Esquema Estrela (Star Schema) organiza os dados em torno de uma tabela fato central (que armazena medidas numéricas de negócios e chaves estrangeiras) cercada por tabelas de dimensões desnormalizadas (nível 1). A desnormalização intencional simplifica a escrita de consultas SQL e otimiza o desempenho analítico minimizando junções.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-81",
    "numero": 81,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na modelagem multidimensional em estrela (star schema), a tabela fato reúne atributos descritivos e textuais do negócio, enquanto as tabelas de dimensão concentram medidas quantitativas numéricas sujeitas a operações de agregação.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O item inverteu os papéis das tabelas: na arquitetura dimensional proposta por Ralph Kimball, a Tabela Fato contém os fatos mensuráveis do negócio (valores numéricos aditivos/semiaditivos), enquanto as Tabelas de Dimensão fornecem o contexto circunstancial qualitativo (quem, onde, quando, o quê).",
    "armadilhaBanca": "Inversão conceitual simétrica entre tabela fato e tabelas dimensão em modelagem dimensional de Data Warehouse.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Na modelagem multidimensional em estrela (Star Schema), a tabela fato centraliza métricas quantitativas numéricas e chaves estrangeiras transacionais, ao passo que as tabelas de dimensão contêm atributos descritivos e textuais do negócio."
  },
  {
    "id": "m14-q-82",
    "numero": 82,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "O Esquema Floco de Neve (Snowflake Schema) constitui uma variação da modelagem dimensional na qual as tabelas de dimensão são normalizadas em múltiplas tabelas hierárquicas, visando reduzir redundâncias de dados à custa de consultas com maior número de junções (joins).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O Esquema Floco de Neve (Snowflake Schema) é a variação da modelagem dimensional de Ralph Kimball na qual as tabelas de dimensão sofrem normalização formal em múltiplas tabelas hierárquicas relacionadas (ex.: desmembrar a dimensão Cliente em tabelas separadas de Cidade, Estado e Região). Embora economize espaço de armazenamento e elimine redundâncias, o Snowflake encarece o custo computacional de consultas analíticas.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-83",
    "numero": 83,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Em Business Intelligence, as Chaves Substitutas (Surrogate Keys) são números de CPF ou códigos de identificação fiscal gerados diretamente pelo sistema de origem transacional da organização.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Chaves como CPF, CNPJ ou código de matrícula são Chaves de Negócio ou Chaves Naturais (Natural Keys). As Surrogate Keys são criadas artificialmente pela engenharia do Data Warehouse (geralmente inteiros simples) para otimizar desempenho de joins e suportar histórico de mudanças lentas em dimensões (SCD).",
    "armadilhaBanca": "Confusão conceitual entre Natural Key do sistema operacional de origem e Surrogate Key artificial do Data Warehouse.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em ambientes de Business Intelligence, as Surrogate Keys (chaves substitutas) são identificadores artificiais sequenciais gerados internamente no Data Warehouse para desacoplar a modelagem analítica das regras e alterações das chaves naturais dos sistemas transacionais."
  },
  {
    "id": "m14-q-84",
    "numero": 84,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "No Power BI, a distinção entre coluna calculada e medida reside no fato de que as colunas calculadas são avaliadas linha a linha durante o carregamento de dados e ocupam espaço na memória, ao passo que as medidas são calculadas dinamicamente no momento da interação do usuário com base no contexto de filtro visual.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No Power BI e no Analysis Services, a distinção é basilar: Colunas Calculadas são avaliadas estaticamente linha a linha durante o processamento/atualização dos dados e ocupam espaço físico na memória RAM compactada do motor VertiPaq; ao passo que Medidas são fórmulas analíticas avaliadas dinamicamente sob demanda em tempo real, calculadas apenas no momento em que o visual é renderizado com base no contexto de filtro ativo.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-85",
    "numero": 85,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "No Power BI, a criação de uma medida com DAX aumenta permanentemente o tamanho do arquivo em disco em proporção direta ao número de linhas da tabela subjacente.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Quem expande o arquivo e ocupa memória estática linha a linha são as Colunas Calculadas. As Medidas DAX residem no modelo como fórmulas lógicas e são processadas sob demanda a cada filtragem ou interação do usuário, garantindo alta eficiência e economia de armazenamento.",
    "armadilhaBanca": "Confusão arquitetural no Power BI entre coluna calculada (armazenamento estático em disco/RAM) e medida DAX (cálculo dinâmico sob demanda).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No Power BI, as medidas em linguagem DAX não são gravadas fisicamente nas linhas das tabelas do modelo de dados nem expandem o tamanho do arquivo em disco, sendo computadas dinamicamente na memória em tempo de visualização via CPU."
  },
  {
    "id": "m14-q-86",
    "numero": 86,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na linguagem DAX (Data Analysis Expressions) do Power BI, a função CALCULATE avalia uma expressão sob um contexto de filtro modificado por um oumais filtros explícitos, constituindo a função mais poderosa para manipulação de regras de negócio em modelos analíticos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na linguagem DAX (Data Analysis Expressions), a função CALCULATE é considerada a função mais importante e poderosa da modelagem analítica no Power BI: ela é a única função capaz de modificar o contexto de filtro original da avaliação (adicionando, removendo ou substituindo filtros de coluna) e executar a 'transição de contexto' (context transition), convertendo o contexto de linha ativo em um contexto de filtro equivalente.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-87",
    "numero": 87,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na linguagem DAX, a função SUMX é classificada como uma função de agregação escalar simples que não possui capacidade de iterar linha a linha sobre uma tabela.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. As funções terminadas em \"X\" em DAX (como SUMX, AVERAGEX, MINX) são explicitamente iteradoras: elas recebem uma tabela e uma expressão, criando um contexto de linha (row context) para calcular a fórmula linha a linha antes de consolidar a agregação. A função escalar simples é a função SUM.",
    "armadilhaBanca": "Descaracterização de função iteradora DAX: negar a capacidade de iteração linha a linha da função SUMX.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Na linguagem DAX do Power BI, a função SUMX é uma função iteradora de tabela que percorre linha por linha o conjunto de dados, avalia a expressão solicitada em nível individual de registro e, ao final, soma os valores apurados."
  },
  {
    "id": "m14-q-88",
    "numero": 88,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "No Power BI, a ferramenta Power Query utiliza a linguagem de fórmulas M para realizar etapas sequenciais de transformação de dados (como remoção de colunas, tipagem de dados, substituição de valores e mesclagem de consultas) antes que os dados sejam carregados no modelo relacional.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No ecossistema Microsoft Power BI e Excel, a interface visual do Power Query atua como front-end para a linguagem funcional 'M' (Data Mashup Language). Cada clique de limpeza, renomeação de coluna, filtro de registros ou divisão de texto gera um passo sequencial de código 'M' em uma estrutura encadeada 'let ... in', permitindo uma rastreabilidade completa e reprodutível de todas as transformações de dados aplicadas.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-89",
    "numero": 89,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "No Power BI, a linguagem M do Power Query é a linguagem utilizada para criar gráficos e medidas analíticas dinâmicas nos relatórios em tempo real.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Trata-se da bifurcação funcional básica da ferramenta: a linguagem M cuida da preparação, tratamento e estruturação preliminar das fontes (back-end de dados). Uma vez os dados carregados no modelo relacional, emprega-se a linguagem DAX para expressar regras analíticas e agregações em relatórios.",
    "armadilhaBanca": "Troca de escopo de linguagens no Power BI: inverter as funções da linguagem M (ETL) e da linguagem DAX (análise e métricas).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No ecossistema Power BI, a linguagem M é utilizada no mecanismo do Power Query para conexão, limpeza, transformação e ingestão de dados (ETL), enquanto a linguagem DAX destina-se à modelagem analítica e cálculo de medidas dinâmicas."
  },
  {
    "id": "m14-q-90",
    "numero": 90,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Em preparação de dados (Data Wrangling), a imputação consiste na técnica de preenchimento de valores ausentes (missing values) utilizando estimativas estatísticas, como a média, a mediana ou algoritmos de vizinhos mais próximos (K-NN), permitindo preservar o tamanho da amostra.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No processo de Data Wrangling e preparação estatística de dados para análise, a imputação consiste no conjunto de técnicas matemáticas voltadas a estimar e preencher valores nulos ou faltantes (missing values). Pode-se aplicar imputação por medidas de tendência central (média ou mediana para dados numéricos, moda para dados categóricos) ou modelos avançados de regressão e vizinhos mais próximos (K-NN), evitando o descarte de amostras.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-91",
    "numero": 91,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Na presença de valores ausentes em uma base de dados com milhões de registros, a única prática cientificamente recomendada é a exclusão sumária de todas as colunas que possuam pelo menos um dado faltante.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A eliminação automática de colunas inteiras em virtude de valores nulos pontuais resulta em drástica perda de variabilidade e poder explicativo da base de dados. As práticas consolidadas de ciência de dados prescrevem a investigação da causa dos nulos (MCAR, MAR, MNAR) e a aplicação de técnicas apropriadas de imputação.",
    "armadilhaBanca": "Conduta drástica e anticientífica: propor a exclusão indiscriminada de atributos como norma universal diante de dados faltantes.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "No pré-processamento de dados para análise, a existência pontual de valores ausentes deve ser tratada por meio de análise de padrões e técnicas de imputação estatística (média, mediana, regressão) ou exclusão orientada, evitando a eliminação sumária de atributos relevantes."
  },
  {
    "id": "m14-q-92",
    "numero": 92,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "A arquitetura de Data Lake armazena grandes volumes de dados em seus formatos nativos brutos (estruturados, semiestruturados como JSON/XML e não estruturados como imagens e logs), permitindo a análise sob o paradigma 'Schema-on-Read' (o esquema é aplicado apenas no momento da consulta).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A arquitetura de Data Lake (como Azure Data Lake Storage ou AWS S3) foi projetada para armazenar volumes massivos de dados em seus formatos brutos originais sem estruturação prévia (estruturados, semiestruturados como JSON e não estruturados como logs e imagens). Adota o paradigma 'Schema-on-Read' (a estrutura e a semântica são definidas no momento em que a consulta analítica é executada), em contraposição ao 'Schema-on-Write' rígido de DWs.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-93",
    "numero": 93,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Um Data Lakehouse é uma estrutura obsoleta que foi integralmente banida da engenharia de dados moderna por ser incapaz de suportar suporte transacional e relatórios de BI.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O Data Lakehouse é o paradigma arquitetural mais moderno e em franca expansão no mercado (utilizando camadas como Delta Lake, Apache Iceberg e Apache Hudi). Longe de estar obsoleto, ele unifica cargas de trabalho analíticas de Business Intelligence e inteligência artificial sobre um único repositório governado.",
    "armadilhaBanca": "Declaração falsa de obsolescência tecnológica: categorizar a arquitetura de ponta de Data Lakehouse como tecnologia banida do mercado.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "A arquitetura de Data Lakehouse une os benefícios de escalabilidade e custo acessível de armazenamento em formato aberto do Data Lake às garantias de integridade transacional ACID, governança e alta performance de consultas do Data Warehouse."
  },
  {
    "id": "m14-q-94",
    "numero": 94,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Segundo as diretrizes consagradas de Storytelling com Dados (como as postuladas por Cole Nussbaumer Knaflic), o processo de 'decluttering' (eliminação da desordem visual) recomenda a remoção de bordas desnecessárias, cores saturadas sem função comunicativa e linhas de grade excessivas, direcionando a carga cognitiva do usuário para as mensagens e dados centrais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na metodologia de Storytelling com Dados formulada por Cole Nussbaumer Knaflic, a prática do 'decluttering' (eliminação do entulho visual) prescreve a remoção impiedosa de todo elemento gráfico que não agregue valor informativo: bordas pesadas, fundos sombreados, cores artificiais sem significado e linhas de grade densas. Reduzir a carga cognitiva desnecessária permite que a atenção do tomador de decisão foque nos pontos de interesse crítico.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-95",
    "numero": 95,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "O uso de gráficos de pizza tridimensionais (3D) com mais de dez fatias é altamente recomendado em relatórios de diretoria por facilitar a comparação precisa de ângulos e áreas entre categorias muito semelhantes.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Autores seminais de visualização quantitativa (como Edward Tufte e Stephen Few) apontam que a perspectiva 3D distorce visualmente a área das fatias, induzindo o leitor a erro de interpretação. Além disso, a capacidade humana de diferenciar ângulos e áreas em muitas categorias é sensivelmente inferior à comparação linear em gráficos de barras.",
    "armadilhaBanca": "Elogio a antipadrão de visualização: defender gráfico de pizza 3D com muitas fatias contrariando os cânones da literatura de visualização analítica.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em conformidade com as boas práticas de visualização de dados e design analítico, o uso de gráficos de pizza tridimensionais (3D) com inúmeras fatias é fortemente desencorajado, recomendando-se gráficos de barras ou colunas para comparações nítidas."
  },
  {
    "id": "m14-q-96",
    "numero": 96,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Para a representação da evolução temporal contínua de um indicador financeiro ou orçamentário ao longo de meses ou anos, o gráfico de linhas é preferível ao gráfico de dispersão sem linhas, pois as conexões sequenciais evidenciam com clareza as tendências de alta, queda e sazonalidade.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Em visualização de dados e dashboards analíticos, gráficos de linhas são especificamente indicados para representar séries temporais contínuas (evolução de despesas, receitas ou proposições ao longo de dias, meses ou anos), pois a linha contínua estabelece uma conexão visual intuitiva que evidencia tendências de crescimento, declínio, sazonalidade e pontos de inflexão, superando o ruído de gráficos de dispersão discretos.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-97",
    "numero": 97,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Em visualização de dados, o gráfico de dispersão (scatter plot) é indicado primordialmente para exibir a divisão proporcional estática de um orçamento municipal em três categorias de despesas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Gráficos de dispersão plotam pontos em eixos cartesianos X e Y para identificar padrões de correlação (positiva, negativa ou nula) e agrupamentos (clusters). Para demonstrar a repartição proporcional estática de poucas categorias orçamentárias, o recurso visual indicado é o gráfico de barras, barras 100% empilhadas ou gráfico de rosca simples.",
    "armadilhaBanca": "Inadequação de tipo gráfico: associar gráfico cartesiano de correlação bivariada à demonstração de divisão proporcional orçamentária simples.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Em visualização de dados, o gráfico de dispersão (Scatter Plot) é concebido primordialmente para examinar a correlação, dependência e distribuição conjunta entre duas variáveis numéricas contínuas, e não para demonstrar fatias proporcionais de um orçamento."
  },
  {
    "id": "m14-q-98",
    "numero": 98,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Em bancos de dados relacionais e em ferramentas de BI, o relacionamento 'muitos-para-muitos' (N:N) não tratado pode introduzir ambiguidades no contexto de filtro e gerar duplicidade de cálculos, sendo recomendada a introdução de uma tabela ponte (Bridge Table) com relacionamentos 1:N.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na modelagem de dados no Power BI e em bancos de dados relacionais, relacionamentos diretos de muitos-para-muitos (N:N) geram ambiguidade semântica na propagação do contexto de filtro e acarretam distorções quantitativas em cálculos agregados. A melhor prática consagrada pela engenharia de BI é introduzir uma 'tabela ponte' (Bridge Table) com valores únicos, transformando a relação em dois relacionamentos limpos de 1 para Muitos (1:N).",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-99",
    "numero": 99,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "A normalização de bancos de dados até a Terceira Forma Normal (3FN) objetiva eliminar redundâncias e dependências anômalas (como dependências transitivas e parciais), otimizando a integridade das operações de inserção, atualização e exclusão em sistemas OLTP.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A Terceira Forma Normal (3FN) de Edgar F. Codd exige cumulativamente: 1) que a tabela esteja na 2FN (todas as colunas não-chave dependam funcionalmente da chave primária em sua totalidade, sem dependências parciais); e 2) que não contenha dependências transitivas (nenhuma coluna não-chave pode depender funcionalmente de outra coluna não-chave). A 3FN elimina anomalias de inserção, atualização e exclusão em sistemas transacionais OLTP.",
    "armadilhaBanca": "Assertiva correta: exige domínio aprofundado dos conceitos técnicos e normativos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    }
  },
  {
    "id": "m14-q-100",
    "numero": 100,
    "macroModuloId": "M14",
    "submoduloId": "14.4",
    "contexto": "No tocante a fundamentos de ciência de dados, pipelines de ETL/ELT, modelagem relacional e dimensional, Business Intelligence (Power BI) e Storytelling com dados, julgue o item a seguir.",
    "item": "Bancos de dados orientados a grafos armazenam registros sob a estrutura matricial de tabelas relacionais com esquemas rígidos, revelando-se inadequados para representar redes de interconexão entre entidades complexas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Os bancos de grafos (como Neo4j) libertam-se das limitações de esquemas relacionais rígidos e de operações computacionalmente onerosas de múltiplos joins. Seu objetivo precípuo é justamente representar e consultar com extrema velocidade conexões complexas, hierarquias, redes sociais e fluxos de conhecimento.",
    "armadilhaBanca": "Desfiguração do modelo de dados em grafos: classificar o banco de grafos sob o paradigma tabular rígido dos bancos relacionais legados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Simulado Cebraspe M14 (Tecnologia da Informação e Dados)",
      "verificado": false
    },
    "versao_correta": "Bancos de dados orientados a grafos armazenam informações sob a estrutura de nós (vértices), arestas (relacionamentos) e propriedades, sendo a modelagem nativamente indicada para explorar redes densas de relacionamentos entre entidades."
  }
];

export const questoesM14 = simuladoTecnologiaDados100Q;
