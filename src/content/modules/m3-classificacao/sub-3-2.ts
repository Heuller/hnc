import type { ModuloFilho } from '../../../domain/types';

export const submodulo32: ModuloFilho = {
  id: 'sub-3-2',
  numero: '3.2',
  editalRef: 'Bloco D - Item 3.2 e 3.3',
  preRequisitos: ["sub-3-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-3-1",
          "titulo": "Classificação Decimal de Dewey (CDD)",
          "motivo": "Uso de tabelas auxiliares e síntese notacional."
      },
      {
          "submoduloId": "sub-3-3",
          "titulo": "Classificação Decimal de Direito (CDDir)",
          "motivo": "Especialização da classe 34 para o ordenamento jurídico brasileiro."
      }
  ],
  titulo: 'Classificação Decimal de Direito (CDDir) e Notação de Autor (Cutter-Sanborn e PHA)',
  antesDeLer: [
  {
    "termo": "Sistema e edição",
    "definicao": "Notações devem ser interpretadas na tabela e versão pertinentes.",
    "exemploBiblioteca": "O mesmo número pode ter significado diferente em CDD, CDU e CDDir."
  },
  {
    "termo": "Número de chamada",
    "definicao": "Combinação de elementos para organizar/localizar conforme política.",
    "exemploBiblioteca": "Arranjo pelo biografado não altera autoria do biógrafo."
  }
],
  descricaoCurta: "Distinguir sistema especializado e regras de catalogação. Validar significado antes de construir notação. Separar assunto, entrada, marca de obra e exemplar. Aplicar a notação à entrada adotada sem universalizar o acesso. Distinguir opção de arranjo e autoria intelectual.",
  tempoEstimadoMinutos: 17,
  autoresChave: [
  "Senado Federal — CDDir: apresentação e vocabulário",
  "Senado Federal — Descrição bibliográfica: diretrizes para a RVBI",
  "Doris de Queiroz Carvalho — Classificação Decimal de Direito, 4ª edição (2002)"
],
  alertasCebraspe: [
  "O instrumento organiza classes, mas não faz sozinho a análise documental. Título pode ser insuficiente ou ambíguo; confirme conteúdo, disciplina e notas.",
  "Arranjo físico e responsabilidade bibliográfica são dimensões distintas. A opção de agrupar biografias não altera a autoria do texto."
],
  teoriaDensaMarkdown: "### CDDir: especialização de um domínio\n\nA Classificação Decimal de Direito está associada a **Doris de Queiroz Carvalho** e ao detalhamento da representação de documentos jurídicos. A especialização responde à necessidade de organizar o domínio do direito brasileiro e comparado. Não é um código de descrição bibliográfica, uma tabela de autoria ou uma ontologia OWL pronta.\n\nA relação histórica com a classe de direito da CDD não torna as notações intercambiáveis. Também é incorreto explicar sua origem afirmando que a CDU belga foi criada sob a mesma matriz inglesa e é necessariamente inadequada a todo direito de tradição romano-germânica. Sistemas e contextos são distintos; sua adequação deve ser avaliada por cobertura, atualização, granularidade e necessidades do acervo.\n\n**Linha histórica delimitada:** as quatro edições tradicionalmente estudadas são 1948, 1953, 1977 e 2002. A quarta teve participação da Subchefia para Assuntos Jurídicos da Casa Civil da Presidência. A página do Senado informa autorização para atualizar a CDDir desde 2014. Não se deve atribuir a edição de 2002 a autores de estudos posteriores para outra revisão.\n\n**Aplicação:** uma biblioteca jurídica pode precisar distinguir ramos, instituições e tipos de documentos que uma classificação geral apresenta com outro recorte. Especialização aumenta possibilidades, mas não dispensa análise do conteúdo. Classifique pela questão tratada e abordagem; título, resumo e estrutura ajudam a reconhecer o assunto, sem uma regra automática de palavras-chave.\n\n**Recupere:** por que “usa números decimais” não permite concluir que CDDir, CDD e CDU têm as mesmas classes?\n\n### Consultar classes, notas e versões\n\nComece identificando a **edição ou versão** e o objetivo da classificação. Consulte o termo no índice, confirme a posição hierárquica e examine notas e subdivisões. Um índice auxilia localizar; não substitui a tabela. A atualização de um portal deve ser distinguida de uma edição impressa histórica.\n\nO vocabulário CDDir publicado pelo Senado oferece, por exemplo, **341.253 — Direito parlamentar. Parlamentos e assembleias**. O exemplo demonstra uma correspondência consultável; não autoriza deduzir todas as demais classes a partir de memória de outro sistema. Não se pode atribuir a esse ramo qualquer número lembrado de outro sistema sem consulta à tabela adequada.\n\n**Forma, assunto e lugar** são dimensões que podem exigir subdivisões diferentes. Uma revista de direito parlamentar tem assunto e apresentação seriada; a construção final depende das instruções de forma da edição. Não copie a Tabela 1 da CDD ou os parênteses de lugar da CDU para CDDir supondo equivalência universal.\n\n**Exemplo resolvido:** o documento compara procedimentos de parlamentos e não é simplesmente o texto de uma lei. A análise distingue tema, gênero documental e âmbito. Depois consulta a classe e a possibilidade de subdivisão. Se faltar a tabela ou a instrução necessária, não invente sufixo numérico para fazer o exemplo parecer completo: localize a referência e confirme a construção.\n\nO catálogo coletivo da RVBI utiliza CDDir no tratamento de documentos jurídicos segundo suas diretrizes. Isso não prova que todas as bibliotecas mencionadas em listas antigas usem exclusivamente o mesmo sistema para todo acervo. Confirme política e documentação institucional quando a questão nomear uma instituição.\n\n### Número de chamada e notação de autor\n\nO **número de chamada** organiza/localiza recursos segundo uma política. Frequentemente combina notação de classificação, notação de autor/entrada, marca de obra e dados como edição, volume e cópia. Não existe uma etiqueta universal obrigatória com o mesmo número de linhas em toda biblioteca.\n\nA notação de autor é instrumento de ordenação. **Cutter-Sanborn** e **PHA**, esta associada a Heloísa de Almeida Prado, são tabelas distintas. Não misture suas regras nem atribua um código de dois algarismos à tabela de três algarismos sem verificar edição e uso. PHA atende contexto linguístico de nomes em português, mas não garante eliminação absoluta de colisões.\n\n**Marca de obra** diferencia títulos sob a mesma entrada; costuma empregar letras significativas conforme política. Quando duas obras começam com a mesma letra, podem ser necessários caracteres adicionais ou outro desempate. O procedimento deve preservar a ordenação e ser documentado, em vez de afirmar uma regra universal para qualquer colisão.\n\n**Caso:** duas obras do mesmo autor e mesma classe não podem ter localização indistinguível se a biblioteca precisa reuni-las e separá-las. O sistema pode usar marcas diferentes. Já duas cópias da mesma edição podem compartilhar a base bibliográfica e diferir no indicador de exemplar. Patrimônio, número de controle de registro e número de chamada não são sinônimos.\n\n**Exercício sem código fabricado:** dado autor, título e uma tabela real, encontre a entrada, consulte a faixa numérica, forme a notação segundo a política e compare com os vizinhos. Um código lembrado de outra biblioteca não substitui essa verificação.\n\n### Entradas por sigla ou título: explicitar a premissa\n\nPrimeiro determine a entrada conforme o código e a política de autoridade; depois aplique a tabela de notação. Se a premissa do exercício informa que a entrada autorizada é a **sigla**, a consulta considera essa forma. Isso não significa que toda entidade com sigla conhecida tenha obrigatoriamente entrada por sigla em qualquer catálogo.\n\nSe a entrada é pelo título, a política de ordenação e de marca de obra precisa ser explicitada. Desconsiderar artigo inicial em determinadas operações não autoriza descartar qualquer palavra funcional de todo título. A regra “marca de obra sempre é a segunda palavra, inclusive do/de” não deve ser apresentada como universal da tabela Cutter-Sanborn.\n\nO código de catalogação importa: a regra de responsabilidade compartilhada de quatro ou mais autores sem principal no AACR2 não é regra universal de entrada por título em RDA ou referência ABNT. O mesmo documento pode receber tratamentos diferentes conforme padrão e finalidade, sem que os códigos se tornem equivalentes.\n\n**Caso resolvido:** o enunciado fixa entrada por uma sigla e pede apenas o elemento para consultar a tabela. Expandir arbitrariamente o nome mudaria a premissa. Em outro cenário, o catálogo adota o nome por extenso: é essa entrada que deve ser considerada. Não decida a forma autorizada só olhando o logotipo da publicação.\n\n### Biografias e controle de consistência\n\nAlgumas políticas organizam biografias individuais pela pessoa biografada, acrescentando marca para o biógrafo. O propósito é reunir estudos sobre a mesma pessoa. Trata-se de uma convenção de arranjo a ser delimitada, não de regra que transforma o biografado em autor da obra.\n\n**Exemplo:** duas biografias de uma parlamentar, escritas por pessoas diferentes. A política informada pode usar a mesma base associada à biografada e marcas distintas dos biógrafos. O registro bibliográfico continua indicando quem escreveu cada texto, e os assuntos permitem recuperar a pessoa estudada. Não confunda o código de estante com o ponto de acesso de responsabilidade.\n\nVerifique consistência com o acervo existente, tratamento de homônimos, títulos semelhantes, volumes e exemplares. Consistência não é repetir um erro antigo: alteração de política pode exigir registro de decisão, remissões e revisão de etiquetas/registros, preservando a possibilidade de localizar o material.\n\n**Recuperação final:** diferencie quatro operações: identificar o autor intelectual, escolher a forma autorizada de seu nome, classificar o assunto e ordenar o exemplar. Explique qual instrumento orienta cada uma. Esse raciocínio permite julgar casos novos sem decorar códigos possivelmente inventados de um exemplo.",
  teoriaDidaticaMarkdown: "### Revisão: consultar, distinguir e documentar\n\nCDDir é classificação especializada de domínio jurídico, associada a Doris de Queiroz Carvalho. Não confunda histórico de edições e atualizações posteriores. Números de sistemas diferentes não garantem o mesmo significado. Confirme classe, notas e regras de construção; não copie auxiliares de outro sistema. Número de chamada combina elementos conforme política. Cutter-Sanborn e PHA precisam de consulta e versão; não eliminam toda colisão. Entrada por sigla depende da premissa/código. Arranjo de biografias pelo biografado não altera autoria. Não há código numérico inventado que substitua a tabela.\n",
  checkpoints: [
  {
    "id": "cp-3-2-1",
    "pergunta": "Micro-Checkpoint 1: Origem e Aplicação da CDDir",
    "item": "A Classificação Decimal de Direito (CDDir), concebida por Doris de Queiroz Carvalho, foi estruturada para adaptar a classificação jurídica às particularidades do ordenamento jurídico brasileiro e comparado de matriz romano-germânica (Civil Law).",
    "gabarito": "C",
    "justificativa": "A especialização responde à representação do domínio jurídico; isso não permite chamar toda classificação geral de anglo-saxônica nem presume adoção exclusiva por toda instituição.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo."
  },
  {
    "id": "cp-3-2-2",
    "pergunta": "Micro-Checkpoint 2: Notação de Autor para Entidades com Sigla",
    "item": "Se a entrada autorizada adotada no exercício é uma sigla, deve-se substituí-la necessariamente pelo nome por extenso para consultar a tabela de notação.",
    "gabarito": "E",
    "justificativa": "A notação parte da entrada estabelecida na premissa e da tabela/política. Não existe obrigação de mudar para nome por extenso nessa situação.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo.",
    "versao_correta": "A consulta considera a entrada adotada e as regras da tabela e política aplicáveis."
  },
  {
    "id": "cp-3-2-3",
    "pergunta": "Micro-Checkpoint 3: Notação de Autor em Biografias Individuais",
    "item": "Em uma política que ordena biografias individuais pela pessoa biografada e distingue o biógrafo por marca, a base de notação é atribuída ao biografado, sem alterar a autoria intelectual da biografia.",
    "gabarito": "C",
    "justificativa": "O item explicita a convenção de arranjo. O efeito é reunir estudos da pessoa; não declarar que ela escreveu a biografia.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo."
  },
  {
    "id": "rt-3-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "CDD, CDU e CDDir podem usar números parecidos, mas isso não garante identidade de significado para uma mesma sequência.",
    "gabarito": "C",
    "justificativa": "Cada sistema tem tabelas, divisões e edições próprias. É preciso declarar qual classificação está sendo usada antes de interpretar ou sintetizar a notação.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo.",
    "editalRef": "Bloco D - Item 3.2 e 3.3",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-3-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma adaptação de classificação jurídica dispensa analisar assunto e pode ser aplicada escolhendo apenas uma palavra do título.",
    "gabarito": "E",
    "justificativa": "O instrumento organiza classes, mas não faz sozinho a análise documental. Título pode ser insuficiente ou ambíguo; confirme conteúdo, disciplina e notas.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo.",
    "editalRef": "Bloco D - Item 3.2 e 3.3",
    "habilidade": "aplicar",
    "versao_correta": "A classificação exige análise do conteúdo e consulta às tabelas, notas e edição."
  },
  {
    "id": "rt-3-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A notação de autor atribuída pelo biografado numa política de estante prova que o biografado é autor intelectual da biografia.",
    "gabarito": "E",
    "justificativa": "Arranjo físico e responsabilidade bibliográfica são dimensões distintas. A opção de agrupar biografias não altera a autoria do texto.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo.",
    "editalRef": "Bloco D - Item 3.2 e 3.3",
    "habilidade": "aplicar",
    "versao_correta": "Arranjar pelo biografado não altera a autoria intelectual do biógrafo."
  },
  {
    "id": "rt-3-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Para aplicar uma tabela Cutter, é necessário considerar a entrada escolhida e a edição da tabela; o número não deve ser inventado apenas pela inicial do nome.",
    "gabarito": "C",
    "justificativa": "A sequência depende da consulta e pode precisar de ajustes para ordenação e colisões. Um exemplo de código sem conferência não deve ser usado como tabela normativa.",
    "fonte": "Senado Federal, CDDir — apresentação e vocabulário; Carvalho, Classificação Decimal de Direito, 4ª ed. (2002); política de número de chamada explicitada no exemplo.",
    "editalRef": "Bloco D - Item 3.2 e 3.3",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-3-2-fonte-cddir",
      "nome": "Senado Federal — CDDir: apresentação e vocabulário",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado Federal — CDDir: apresentação e vocabulário",
      "ideiaChave": "Histórico da quarta edição e autorização de atualização; classes consultáveis, incluindo 341.253.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-2-fonte-rvbi",
      "nome": "Senado Federal — Descrição bibliográfica: diretrizes para a RVBI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado Federal — Descrição bibliográfica: diretrizes para a RVBI",
      "ideiaChave": "Tratamento de classificação de direito e campos de registro; verificar versão das diretrizes.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-3-2-fonte-carvalho",
      "nome": "Doris de Queiroz Carvalho — Classificação Decimal de Direito, 4ª edição (2002)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Doris de Queiroz Carvalho — Classificação Decimal de Direito, 4ª edição (2002)",
      "ideiaChave": "Consultar tabelas e instruções da edição; não copiar automaticamente códigos de outras classificações.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-3-2-2",
      "afirmacao": "Uma adaptação de classificação jurídica dispensa analisar assunto e pode ser aplicada escolhendo apenas uma palavra do título.",
      "gabarito": "E",
      "porQue": "O instrumento organiza classes, mas não faz sozinho a análise documental. Título pode ser insuficiente ou ambíguo; confirme conteúdo, disciplina e notas."
    },
    {
      "id": "memoria-rt-3-2-3",
      "afirmacao": "A notação de autor atribuída pelo biografado numa política de estante prova que o biografado é autor intelectual da biografia.",
      "gabarito": "E",
      "porQue": "Arranjo físico e responsabilidade bibliográfica são dimensões distintas. A opção de agrupar biografias não altera a autoria do texto."
    },
    {
      "id": "memoria-rt-3-2-4",
      "afirmacao": "Para aplicar uma tabela Cutter, é necessário considerar a entrada escolhida e a edição da tabela; o número não deve ser inventado apenas pela inicial do nome.",
      "gabarito": "C",
      "porQue": "A sequência depende da consulta e pode precisar de ajustes para ordenação e colisões. Um exemplo de código sem conferência não deve ser usado como tabela normativa."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-3-2-bloco-1",
    "titulo": "CDDir: especialização de um domínio",
    "objetivos": [
      "Distinguir sistema especializado e regras de catalogação."
    ],
    "conteudo": "A Classificação Decimal de Direito está associada a **Doris de Queiroz Carvalho** e ao detalhamento da representação de documentos jurídicos. A especialização responde à necessidade de organizar o domínio do direito brasileiro e comparado. Não é um código de descrição bibliográfica, uma tabela de autoria ou uma ontologia OWL pronta.\n\nA relação histórica com a classe de direito da CDD não torna as notações intercambiáveis. Também é incorreto explicar sua origem afirmando que a CDU belga foi criada sob a mesma matriz inglesa e é necessariamente inadequada a todo direito de tradição romano-germânica. Sistemas e contextos são distintos; sua adequação deve ser avaliada por cobertura, atualização, granularidade e necessidades do acervo.\n\n**Linha histórica delimitada:** as quatro edições tradicionalmente estudadas são 1948, 1953, 1977 e 2002. A quarta teve participação da Subchefia para Assuntos Jurídicos da Casa Civil da Presidência. A página do Senado informa autorização para atualizar a CDDir desde 2014. Não se deve atribuir a edição de 2002 a autores de estudos posteriores para outra revisão.\n\n**Aplicação:** uma biblioteca jurídica pode precisar distinguir ramos, instituições e tipos de documentos que uma classificação geral apresenta com outro recorte. Especialização aumenta possibilidades, mas não dispensa análise do conteúdo. Classifique pela questão tratada e abordagem; título, resumo e estrutura ajudam a reconhecer o assunto, sem uma regra automática de palavras-chave.\n\n**Recupere:** por que “usa números decimais” não permite concluir que CDDir, CDD e CDU têm as mesmas classes?",
    "checkpointIds": [
      "cp-3-2-1",
      "rt-3-2-1"
    ]
  },
  {
    "id": "sub-3-2-bloco-2",
    "titulo": "Consultar classes, notas e versões",
    "objetivos": [
      "Validar significado antes de construir notação."
    ],
    "conteudo": "Comece identificando a **edição ou versão** e o objetivo da classificação. Consulte o termo no índice, confirme a posição hierárquica e examine notas e subdivisões. Um índice auxilia localizar; não substitui a tabela. A atualização de um portal deve ser distinguida de uma edição impressa histórica.\n\nO vocabulário CDDir publicado pelo Senado oferece, por exemplo, **341.253 — Direito parlamentar. Parlamentos e assembleias**. O exemplo demonstra uma correspondência consultável; não autoriza deduzir todas as demais classes a partir de memória de outro sistema. Não se pode atribuir a esse ramo qualquer número lembrado de outro sistema sem consulta à tabela adequada.\n\n**Forma, assunto e lugar** são dimensões que podem exigir subdivisões diferentes. Uma revista de direito parlamentar tem assunto e apresentação seriada; a construção final depende das instruções de forma da edição. Não copie a Tabela 1 da CDD ou os parênteses de lugar da CDU para CDDir supondo equivalência universal.\n\n**Exemplo resolvido:** o documento compara procedimentos de parlamentos e não é simplesmente o texto de uma lei. A análise distingue tema, gênero documental e âmbito. Depois consulta a classe e a possibilidade de subdivisão. Se faltar a tabela ou a instrução necessária, não invente sufixo numérico para fazer o exemplo parecer completo: localize a referência e confirme a construção.\n\nO catálogo coletivo da RVBI utiliza CDDir no tratamento de documentos jurídicos segundo suas diretrizes. Isso não prova que todas as bibliotecas mencionadas em listas antigas usem exclusivamente o mesmo sistema para todo acervo. Confirme política e documentação institucional quando a questão nomear uma instituição.",
    "checkpointIds": [
      "rt-3-2-2"
    ]
  },
  {
    "id": "sub-3-2-bloco-3",
    "titulo": "Número de chamada e notação de autor",
    "objetivos": [
      "Separar assunto, entrada, marca de obra e exemplar."
    ],
    "conteudo": "O **número de chamada** organiza/localiza recursos segundo uma política. Frequentemente combina notação de classificação, notação de autor/entrada, marca de obra e dados como edição, volume e cópia. Não existe uma etiqueta universal obrigatória com o mesmo número de linhas em toda biblioteca.\n\nA notação de autor é instrumento de ordenação. **Cutter-Sanborn** e **PHA**, esta associada a Heloísa de Almeida Prado, são tabelas distintas. Não misture suas regras nem atribua um código de dois algarismos à tabela de três algarismos sem verificar edição e uso. PHA atende contexto linguístico de nomes em português, mas não garante eliminação absoluta de colisões.\n\n**Marca de obra** diferencia títulos sob a mesma entrada; costuma empregar letras significativas conforme política. Quando duas obras começam com a mesma letra, podem ser necessários caracteres adicionais ou outro desempate. O procedimento deve preservar a ordenação e ser documentado, em vez de afirmar uma regra universal para qualquer colisão.\n\n**Caso:** duas obras do mesmo autor e mesma classe não podem ter localização indistinguível se a biblioteca precisa reuni-las e separá-las. O sistema pode usar marcas diferentes. Já duas cópias da mesma edição podem compartilhar a base bibliográfica e diferir no indicador de exemplar. Patrimônio, número de controle de registro e número de chamada não são sinônimos.\n\n**Exercício sem código fabricado:** dado autor, título e uma tabela real, encontre a entrada, consulte a faixa numérica, forme a notação segundo a política e compare com os vizinhos. Um código lembrado de outra biblioteca não substitui essa verificação.",
    "checkpointIds": [
      "rt-3-2-4"
    ]
  },
  {
    "id": "sub-3-2-bloco-4",
    "titulo": "Entradas por sigla ou título: explicitar a premissa",
    "objetivos": [
      "Aplicar a notação à entrada adotada sem universalizar o acesso."
    ],
    "conteudo": "Primeiro determine a entrada conforme o código e a política de autoridade; depois aplique a tabela de notação. Se a premissa do exercício informa que a entrada autorizada é a **sigla**, a consulta considera essa forma. Isso não significa que toda entidade com sigla conhecida tenha obrigatoriamente entrada por sigla em qualquer catálogo.\n\nSe a entrada é pelo título, a política de ordenação e de marca de obra precisa ser explicitada. Desconsiderar artigo inicial em determinadas operações não autoriza descartar qualquer palavra funcional de todo título. A regra “marca de obra sempre é a segunda palavra, inclusive do/de” não deve ser apresentada como universal da tabela Cutter-Sanborn.\n\nO código de catalogação importa: a regra de responsabilidade compartilhada de quatro ou mais autores sem principal no AACR2 não é regra universal de entrada por título em RDA ou referência ABNT. O mesmo documento pode receber tratamentos diferentes conforme padrão e finalidade, sem que os códigos se tornem equivalentes.\n\n**Caso resolvido:** o enunciado fixa entrada por uma sigla e pede apenas o elemento para consultar a tabela. Expandir arbitrariamente o nome mudaria a premissa. Em outro cenário, o catálogo adota o nome por extenso: é essa entrada que deve ser considerada. Não decida a forma autorizada só olhando o logotipo da publicação.",
    "checkpointIds": [
      "cp-3-2-2"
    ]
  },
  {
    "id": "sub-3-2-bloco-5",
    "titulo": "Biografias e controle de consistência",
    "objetivos": [
      "Distinguir opção de arranjo e autoria intelectual."
    ],
    "conteudo": "Algumas políticas organizam biografias individuais pela pessoa biografada, acrescentando marca para o biógrafo. O propósito é reunir estudos sobre a mesma pessoa. Trata-se de uma convenção de arranjo a ser delimitada, não de regra que transforma o biografado em autor da obra.\n\n**Exemplo:** duas biografias de uma parlamentar, escritas por pessoas diferentes. A política informada pode usar a mesma base associada à biografada e marcas distintas dos biógrafos. O registro bibliográfico continua indicando quem escreveu cada texto, e os assuntos permitem recuperar a pessoa estudada. Não confunda o código de estante com o ponto de acesso de responsabilidade.\n\nVerifique consistência com o acervo existente, tratamento de homônimos, títulos semelhantes, volumes e exemplares. Consistência não é repetir um erro antigo: alteração de política pode exigir registro de decisão, remissões e revisão de etiquetas/registros, preservando a possibilidade de localizar o material.\n\n**Recuperação final:** diferencie quatro operações: identificar o autor intelectual, escolher a forma autorizada de seu nome, classificar o assunto e ordenar o exemplar. Explique qual instrumento orienta cada uma. Esse raciocínio permite julgar casos novos sem decorar códigos possivelmente inventados de um exemplo.",
    "checkpointIds": [
      "cp-3-2-3",
      "rt-3-2-3"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cddir",
    "titulo": "Senado Federal — CDDir: apresentação e vocabulário",
    "localizador": "Histórico da quarta edição e autorização de atualização; classes consultáveis, incluindo 341.253.",
    "url": "https://adm.senado.leg.br/cddir/vocab/sobre.php"
  },
  {
    "id": "rvbi",
    "titulo": "Senado Federal — Descrição bibliográfica: diretrizes para a RVBI",
    "localizador": "Tratamento de classificação de direito e campos de registro; verificar versão das diretrizes.",
    "url": "https://www2.senado.leg.br/bdsf/handle/id/231030"
  },
  {
    "id": "carvalho",
    "titulo": "Doris de Queiroz Carvalho — Classificação Decimal de Direito, 4ª edição (2002)",
    "localizador": "Consultar tabelas e instruções da edição; não copiar automaticamente códigos de outras classificações."
  }
],
};
