import type { ModuloFilho } from '../../../domain/types';

export const submodulo61: ModuloFilho = {
  id: 'sub-6-1',
  numero: '6.1',
  editalRef: 'Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6',
  preRequisitos: ["sub-2-6"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-6-2",
          "titulo": "Protocolos de Interoperabilidade e SIGB",
          "motivo": "Integração entre bibliotecas digitais, SIGB e discovery services."
      },
      {
          "submoduloId": "sub-8-5",
          "titulo": "Acessibilidade de Produtos Informacionais",
          "motivo": "Diretrizes WCAG 2.2 e eMAG aplicadas a portais de bibliotecas."
      }
  ],
  titulo: 'Bibliotecas Digitais vs. Eletrônicas, Arquitetura da Informação e Usabilidade',
  antesDeLer: [
  {
    "termo": "Objeto digital e registro",
    "definicao": "O objeto é o recurso; o registro é sua representação descritiva.",
    "exemploBiblioteca": "Uma ficha informa autor e localização; o PDF permite ler o relatório."
  },
  {
    "termo": "Critério de classificação",
    "definicao": "Aspecto usado para distinguir conceitos dentro de uma abordagem identificada.",
    "exemploBiblioteca": "Distinguir automação de circulação e fornecimento remoto do texto integral."
  }
],
  descricaoCurta: "Distinguir objeto digital, registro descritivo e serviço de acesso. Identificar critérios e limites de uma classificação sem impor consenso inexistente. Aplicar organização, navegação, rotulagem e busca a um portal. Avaliar uma interface a partir da tarefa e distinguir orientação de garantia. Identificar barreiras concretas e relacioná-las aos princípios da WCAG.",
  tempoEstimadoMinutos: 22,
  autoresChave: [
  "Cunha e Cavalcanti (2008) — Dicionário de Biblioteconomia e Arquivologia",
  "Cunha — Desafios na construção de uma biblioteca digital",
  "Rosenfeld e Morville — Information Architecture for the World Wide Web",
  "Nielsen — 10 Usability Heuristics",
  "W3C/WAI — Accessibility Principles",
  "Lei Brasileira de Inclusão"
],
  alertasCebraspe: [
  "O catálogo oferece representação e localização do item. Acesso ao registro não equivale a acesso ao documento. Um catálogo pode conter links para documentos, mas esse recurso adicional precisa existir e ser examinado; não decorre automaticamente da informatização.",
  "Organização, navegação, rotulagem e busca se articulam. Uma busca útil pode depender de metadados e categorias coerentes, enquanto rótulos permitem interpretar resultados. A existência de um mecanismo não elimina os demais.",
  "O critério é a coexistência e integração de recursos e serviços. Descrever um modelo híbrido como transição em determinada abordagem não prova que toda biblioteca seguirá uma sequência única ou abandonará suportes físicos."
],
  quadroComparativo: {
  "titulo": "Funções de um serviço digital",
  "colunas": [
    "Componente",
    "Função",
    "Não permite concluir sozinho"
  ],
  "linhas": [
    [
      "Catálogo",
      "Descrever e localizar recursos",
      "Que todo documento tem texto integral aberto"
    ],
    [
      "Repositório",
      "Organizar e disponibilizar objetos e metadados conforme política",
      "Que todo objeto está livre de restrições"
    ],
    [
      "Busca",
      "Recuperar resultados a partir de consulta",
      "Que organização e rótulos se tornaram desnecessários"
    ],
    [
      "Avaliação automática",
      "Detectar verificações programáveis",
      "Que toda experiência está acessível"
    ]
  ]
},
  teoriaDensaMarkdown: "### O que torna uma biblioteca digital: coleção, organização e serviço\n\nImagine uma instituição com três ofertas: consulta ao catálogo dos livros impressos, download de relatórios digitalizados e orientação remota para encontrar legislação. Elas usam tecnologia, mas não oferecem exatamente o mesmo objeto ao usuário. **Registro**, **documento** e **serviço** são componentes diferentes. O registro representa e descreve; o documento contém a informação procurada; o serviço organiza o acesso e apoia o uso.\n\nUma biblioteca digital envolve coleções de objetos digitais, descrições, organização e serviços para uma comunidade. O acervo pode conter objetos digitalizados e materiais produzidos originalmente em ambiente digital. Sua utilidade depende de seleção, descrição, busca, acesso e manutenção, e não apenas de arquivos colocados numa pasta pública. A literatura de Cunha e os verbetes de Cunha e Cavalcanti ajudam a perceber essa integração.\n\n**Exemplo resolvido.** Um portal apresenta título, autor e número de chamada de um livro. O leitor consegue descobrir que a biblioteca possui o exemplar, mas precisa obtê-lo fisicamente. Esse acesso ao catálogo não se converte em acesso ao texto integral. Se o registro também possuir um link para uma cópia digital acessível, haverá uma possibilidade adicional que deve ser verificada. Não se pode inferir o arquivo a partir do registro.\n\nO mesmo cuidado vale para metadados e acesso aberto: um registro pode estar visível e o documento depender de autorização ou licença. A existência de serviços digitais também não determina que toda a coleção física desapareceu. Em um item de prova, pergunte qual objeto está disponível, para quem, por qual caminho e sob quais condições.\n\nA preservação é outra dimensão: conseguir abrir um arquivo hoje não garante mantê-lo inteligível ao longo do tempo. O detalhamento sobre OAIS e estratégias está em 6.3; o ponto aqui é não confundir disponibilização imediata com preservação demonstrada.\n\n### Eletrônica, digital, virtual e híbrida: aprender a comparar autores\n\nEsses termos não têm uso perfeitamente uniforme em toda a literatura. Há abordagens que destacam a informatização de rotinas ao falar em **biblioteca eletrônica**; outras ampliam seu alcance para serviços e documentos em rede. No dicionário de Cunha e Cavalcanti, os verbetes mostram relações e remissões entre as expressões. A leitura da fonte é necessária quando uma questão atribui uma definição a um autor.\n\n**Biblioteca digital** enfatiza objetos digitais e serviços associados. **Biblioteca virtual** pode destacar acesso remoto e distribuído, ultrapassando a experiência de uma única instalação. Não se deve transformar “sem paredes” em afirmação literal de que não existem servidores, instituições responsáveis ou infraestrutura física. **Biblioteca híbrida** caracteriza a articulação de recursos e serviços de diferentes suportes. Ela pode ser discutida como transição em certos textos, sem significar uma lei histórica obrigatória para toda biblioteca.\n\n| Eixo de comparação | Pergunta útil |\n|---|---|\n| Suporte | Há impressos, objetos digitais ou ambos? |\n| Automação | Quais rotinas estão informatizadas? |\n| Acesso | O usuário chega ao registro, ao documento, a um serviço ou aos três? |\n| Organização | Metadados e estruturas permitem localizar e interpretar? |\n| Distribuição | Os recursos estão concentrados ou articulados entre instituições? |\n\n**Caso:** uma biblioteca mantém coleção física e oferece repositório e consulta remota. A descrição pode evidenciar seu caráter híbrido e seus serviços digitais simultaneamente. Não há contradição necessária. Já afirmar que o repositório de texto completo é apenas um catálogo de localização física troca a função do componente.\n\nA distinção didática entre automatizar rotinas e oferecer objetos digitais continua útil, desde que seu recorte seja anunciado. Se o enunciado omite autor e contexto e depende de uma distinção controversa para ter resposta, o problema editorial deve ser resolvido antes de usar o item como avaliação. Ambiguidade não é dificuldade de nível alto.\n\n### Arquitetura da informação: quatro sistemas que trabalham juntos\n\nNa abordagem de Rosenfeld e Morville, **organização**, **navegação**, **rotulagem** e **busca** são sistemas centrais da arquitetura da informação. O objetivo é estruturar conteúdo de modo que o usuário consiga encontrar, compreender e utilizar aquilo de que precisa. Arquitetura não é apenas aparência: decisões sobre categorias e nomes afetam a recuperação.\n\n**Organização** estabelece agrupamentos e relações. Um acervo pode ser organizado por assunto, tipo documental, data ou público. Esses critérios atendem a necessidades diferentes. **Rotulagem** escolhe os nomes e sinais que representam os conteúdos e ações: “Publicações” e “Solicitar cópia”, por exemplo. **Navegação** oferece os caminhos e a localização: menu global, links locais, relações entre conteúdos e trilha de navegação. **Busca** recebe uma expressão de necessidade e oferece resultados conforme indexação e mecanismos de consulta.\n\n**Exemplo resolvido.** Um usuário procura pareceres sobre preservação. A categoria “Documentos técnicos” é uma decisão de organização; o texto que nomeia essa categoria pertence à rotulagem; o menu que leva até ela é navegação; consultar termos e filtrar resultados envolve busca. O mesmo elemento visual pode participar de mais de uma decisão de projeto; as categorias analíticas ajudam a explicar funções, não exigem isolamento físico de componentes.\n\nUm portal com busca não dispensa navegação. Pessoas podem não saber o termo adequado e precisar explorar categorias. Tampouco uma classificação cuidadosa garante sucesso se os rótulos forem incompreensíveis. Ao avaliar a interface, analise uma tarefa e o caminho concreto do usuário. “Há muitos botões” não é diagnóstico suficiente de boa ou má arquitetura.\n\n**Contraexemplo.** Adicionar um filtro chamado “Classe X42” a um portal público pode ser tecnicamente consistente com uma classificação interna, mas inútil a quem desconhece essa nomenclatura. A solução envolve rótulo inteligível e contextualização, não apenas velocidade de busca.\n\n### Usabilidade: a tarefa, a pessoa e o contexto\n\nUsabilidade pergunta se uma pessoa consegue realizar sua tarefa com resultados adequados no contexto de uso. Uma interface bonita pode impedir o envio de uma solicitação; uma interface funcional pode impor esforço desnecessário. É preciso observar o objetivo, os recursos disponíveis e as dificuldades encontradas, em vez de classificar toda tela por gosto pessoal.\n\nAs heurísticas de Nielsen incluem: visibilidade do estado; linguagem compatível com a experiência do usuário; controle e possibilidade de sair; consistência; prevenção de erros; reconhecimento em vez de exigência desnecessária de memória; flexibilidade; apresentação focada no essencial; mensagens que permitam recuperar erros; ajuda. São critérios de inspeção, não certificado automático nem substituto de teste com usuários.\n\n**Caso próprio.** Uma solicitação de reprodução demora alguns segundos. Durante a operação, a tela deve permitir entender que o envio está em andamento. Antes de receber confirmação efetiva, não deve afirmar “pedido concluído”. Se houver falha, precisa explicar o estado e permitir nova tentativa sem induzir envio duplicado. A mensagem deve falar da tarefa do usuário, não expor códigos internos como única orientação.\n\nOutro problema surge quando filtros desaparecem ao abrir um resultado e voltar. O usuário precisa reconstruir o caminho e perde a localização. Preservar contexto e informar filtros ativos melhora a tarefa. Isso é diferente de manter dados sensíveis indefinidamente; decisões de persistência também precisam respeitar privacidade e finalidade.\n\nUm teste de uso deve observar tarefas concretas: localizar um documento, identificar a licença, solicitar acesso ou entender por que um resultado está restrito. Medir apenas quantos links existem não demonstra facilidade de uso. Inspeção técnica e observação de pessoas fornecem evidências diferentes e complementares.\n\n### Acessibilidade: perceber, operar, compreender e usar tecnologia assistiva\n\nA W3C organiza os princípios de acessibilidade em **perceptível, operável, compreensível e robusto**. Conteúdo precisa chegar por formas adequadas de percepção; a interação deve ser possível; instruções e comportamento precisam ser entendidos; a implementação deve permitir interpretação por tecnologias e agentes de usuário. Uma pessoa pode enfrentar mais de uma barreira na mesma tarefa.\n\n**Aplicação própria:** um gráfico de crescimento do acervo não será informativo para quem não percebe suas cores se o único código for verde/vermelho. Nomear séries, oferecer dados e descrever a conclusão melhora o acesso. Uma descrição não precisa enumerar pixels: deve transmitir o que é relevante à finalidade da imagem. Imagens meramente decorativas têm tratamento diferente de imagens que carregam informação.\n\nUm menu que só abre com mouse exclui quem opera por teclado. Um campo sem rótulo torna difícil identificar a informação esperada. Uma mensagem de erro longe do formulário pode passar despercebida. Esses exemplos mostram por que tamanho de fonte e contraste são apenas parte da acessibilidade.\n\nO art. 63 da Lei Brasileira de Inclusão trata da acessibilidade de sítios mantidos por empresas com sede ou representação comercial no país e por órgãos de governo, conforme melhores práticas e diretrizes internacionais. Isso não significa que o dispositivo transcreva, por nome, todos os critérios de uma edição específica da WCAG. A lei e o padrão técnico têm papéis distintos. O e-MAG constitui referência do governo eletrônico brasileiro e precisa ser identificado por sua versão, sem ser confundido com uma norma internacional.\n\nAo julgar um item, identifique a barreira e a exigência correspondente. Uma ferramenta automática detecta parte dos problemas, mas não prova sozinha que o texto faz sentido, que o foco está adequado ou que a tarefa é realizável. Testes manuais e uso de tecnologia assistiva complementam a análise.",
  teoriaDidaticaMarkdown: "### Revisão: biblioteca, informação e experiência de uso\n\n- Registro descreve; documento contém; serviço organiza e apoia o uso. Acesso ao catálogo não implica texto integral.\n- Digital, eletrônica e virtual têm variações autorais. Confira a fonte e o critério. Híbrida pode integrar suportes e serviços sem calendário obrigatório de abandono do impresso.\n- Organização: agrupamentos; rotulagem: nomes; navegação: caminhos; busca: consultas e resultados. Os sistemas se complementam.\n- Usabilidade deve ser observada numa tarefa. Uma confirmação na tela precisa corresponder ao estado real da operação.\n- Acessibilidade trata de barreiras: perceber, operar, compreender e interoperar com tecnologias. Contraste não resolve sozinho teclado, semântica ou alternativas textuais.\n- Lei, diretriz técnica e resultado de teste não são a mesma coisa. Uma ferramenta automática não certifica toda a experiência.\n\n**Explique sem consultar:** um portal pode ser fácil de usar por um grupo e inacessível para outro? Por que uma busca não dispensa categorias e rótulos? Que diferença há entre um registro MARC e o arquivo digital de uma obra?\n",
  checkpoints: [
  {
    "id": "cp-6-1-1",
    "pergunta": "Micro-Checkpoint 1: Os Quatro Sistemas da Arquitetura da Informação",
    "item": "Segundo Rosenfeld e Morville, a arquitetura da informação em ambientes digitais organiza-se a partir de quatro sistemas estruturantes: sistemas de organização, sistemas de navegação, sistemas de rotulagem e sistemas de busca.",
    "gabarito": "C",
    "justificativa": "A enumeração corresponde aos quatro sistemas tratados na abordagem de Rosenfeld e Morville. Eles são complementares: categorias, rótulos, caminhos e consulta participam da experiência de encontrar informação. Não é uma lista de etapas obrigatoriamente sequenciais.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles."
  },
  {
    "id": "cp-6-1-2",
    "pergunta": "Micro-Checkpoint 2: Diferença Conceitual entre Biblioteca Eletrônica e Digital",
    "item": "Na distinção didática que enfatiza automação de rotinas e acesso ao objeto, a biblioteca digital oferece documentos digitais, enquanto biblioteca eletrônica pode designar o uso da computação nas rotinas de uma coleção principalmente física. Essa distinção deve ser contextualizada, pois a terminologia varia entre autores.",
    "gabarito": "C",
    "justificativa": "A distinção pode ser usada dentro do recorte anunciado. O próprio item evita apresentá-la como consenso universal. Os verbetes de Cunha e Cavalcanti e a discussão histórica de Cunha demonstram por que se deve conferir o autor e as funções descritas.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles."
  },
  {
    "id": "cp-6-1-3",
    "pergunta": "Micro-Checkpoint 3: Acessibilidade Digital no Setor Público (WCAG e LBI)",
    "item": "A Lei Brasileira de Inclusão exige acessibilidade em sítios mantidos por órgãos de governo. Como referência técnica internacional, a WCAG organiza seus princípios em perceptível, operável, compreensível e robusto.",
    "gabarito": "C",
    "justificativa": "O item separa a obrigação legal da organização técnica dos princípios. O art. 63 remete a melhores práticas e diretrizes internacionais; a enumeração dos quatro princípios pertence à WCAG. Não se afirma que uma edição específica da WCAG esteja transcrita na lei.",
    "fonte": "Lei 13.146/2015, art. 63; W3C/WAI, Accessibility Principles."
  },
  {
    "id": "rt-6-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um catálogo que apenas informa em qual estante está o livro oferece, por esse fato isolado, acesso remoto ao texto integral da obra.",
    "gabarito": "E",
    "justificativa": "O catálogo oferece representação e localização do item. Acesso ao registro não equivale a acesso ao documento. Um catálogo pode conter links para documentos, mas esse recurso adicional precisa existir e ser examinado; não decorre automaticamente da informatização.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar",
    "versao_correta": "O catálogo pode informar a localização do livro sem disponibilizar seu texto integral."
  },
  {
    "id": "rt-6-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma biblioteca que integra documentos impressos, objetos digitais e serviços de acesso a ambos pode ser descrita como híbrida, sem que isso imponha uma data para eliminação dos impressos.",
    "gabarito": "C",
    "justificativa": "O critério é a coexistência e integração de recursos e serviços. Descrever um modelo híbrido como transição em determinada abordagem não prova que toda biblioteca seguirá uma sequência única ou abandonará suportes físicos.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A presença de busca por palavra-chave dispensa a organização das coleções e a rotulagem dos links, porque os quatro sistemas de arquitetura da informação são alternativas excludentes.",
    "gabarito": "E",
    "justificativa": "Organização, navegação, rotulagem e busca se articulam. Uma busca útil pode depender de metadados e categorias coerentes, enquanto rótulos permitem interpretar resultados. A existência de um mecanismo não elimina os demais.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar",
    "versao_correta": "Os sistemas de organização, navegação, rotulagem e busca podem atuar de modo complementar."
  },
  {
    "id": "rt-6-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um botão que apresenta mensagem clara de envio em andamento ajuda o usuário a perceber o estado da operação, mas não comprova, sozinho, que o processo será concluído com sucesso.",
    "gabarito": "C",
    "justificativa": "Feedback de estado informa o que ocorre; confirmação de conclusão exige resultado efetivo. O exemplo distingue a heurística de visibilidade do estado de uma garantia operacional que a interface não pode inventar.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Oferecer descrição textual de uma imagem informativa e permitir operação por teclado trata de barreiras diferentes de acesso.",
    "gabarito": "C",
    "justificativa": "A alternativa textual atende à percepção do conteúdo não textual; a operação por teclado enfrenta barreiras de interação. A acessibilidade reúne requisitos distintos, e uma solução isolada não cobre todas as necessidades.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-6-1-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Dois autores podem usar biblioteca eletrônica com alcances diferentes; para julgar uma afirmação explicitamente atribuída a um deles, é necessário conferir o recorte desse autor.",
    "gabarito": "C",
    "justificativa": "O vocabulário da área tem variações históricas e autorais, documentadas nos verbetes e discussões conceituais. Uma tabela didática ajuda a comparar, mas não deve ser imposta como definição universal contra a fonte expressamente indicada.",
    "fonte": "Cunha e Cavalcanti (2008), Dicionário de Biblioteconomia e Arquivologia, verbetes de biblioteca; Cunha (1999), Desafios na construção de uma biblioteca digital; Rosenfeld e Morville, Information Architecture; W3C/WAI, Accessibility Principles.",
    "editalRef": "Bloco E - Item 1.6 a 1.8 e Bloco B - Item 1.6",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-6-1-fonte-cunha-dicionario",
      "nome": "Cunha e Cavalcanti (2008) — Dicionário de Biblioteconomia e Arquivologia",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha e Cavalcanti (2008) — Dicionário de Biblioteconomia e Arquivologia",
      "ideiaChave": "Verbetes de biblioteca digital, eletrônica, híbrida e virtual; acervo do projeto, Fundamentos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-1-fonte-cunha-digital",
      "nome": "Cunha — Desafios na construção de uma biblioteca digital",
      "ano": "Referência de consulta",
      "obraPrincipal": "Cunha — Desafios na construção de uma biblioteca digital",
      "ideiaChave": "Discussão conceitual e tecnológica; acervo do projeto, Digital, repositórios e IA.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-1-fonte-ia",
      "nome": "Rosenfeld e Morville — Information Architecture for the World Wide Web",
      "ano": "Referência de consulta",
      "obraPrincipal": "Rosenfeld e Morville — Information Architecture for the World Wide Web",
      "ideiaChave": "Sistemas de organização, rotulagem, navegação e busca.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-1-fonte-nielsen",
      "nome": "Nielsen — 10 Usability Heuristics",
      "ano": "Referência de consulta",
      "obraPrincipal": "Nielsen — 10 Usability Heuristics",
      "ideiaChave": "Critérios de inspeção; casos da aula são exemplos próprios.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-1-fonte-wai",
      "nome": "W3C/WAI — Accessibility Principles",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C/WAI — Accessibility Principles",
      "ideiaChave": "Quatro princípios de acessibilidade.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-6-1-fonte-lbi",
      "nome": "Lei Brasileira de Inclusão",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei Brasileira de Inclusão",
      "ideiaChave": "Lei 13.146/2015, art. 63.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-6-1-4",
      "afirmacao": "Um botão que apresenta mensagem clara de envio em andamento ajuda o usuário a perceber o estado da operação, mas não comprova, sozinho, que o processo será concluído com sucesso.",
      "gabarito": "C",
      "porQue": "Feedback de estado informa o que ocorre; confirmação de conclusão exige resultado efetivo. O exemplo distingue a heurística de visibilidade do estado de uma garantia operacional que a interface não pode inventar."
    },
    {
      "id": "memoria-rt-6-1-5",
      "afirmacao": "Oferecer descrição textual de uma imagem informativa e permitir operação por teclado trata de barreiras diferentes de acesso.",
      "gabarito": "C",
      "porQue": "A alternativa textual atende à percepção do conteúdo não textual; a operação por teclado enfrenta barreiras de interação. A acessibilidade reúne requisitos distintos, e uma solução isolada não cobre todas as necessidades."
    },
    {
      "id": "memoria-rt-6-1-6",
      "afirmacao": "Dois autores podem usar biblioteca eletrônica com alcances diferentes; para julgar uma afirmação explicitamente atribuída a um deles, é necessário conferir o recorte desse autor.",
      "gabarito": "C",
      "porQue": "O vocabulário da área tem variações históricas e autorais, documentadas nos verbetes e discussões conceituais. Uma tabela didática ajuda a comparar, mas não deve ser imposta como definição universal contra a fonte expressamente indicada."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-6-1-bloco-1",
    "titulo": "O que torna uma biblioteca digital: coleção, organização e serviço",
    "objetivos": [
      "Distinguir objeto digital, registro descritivo e serviço de acesso."
    ],
    "conteudo": "Imagine uma instituição com três ofertas: consulta ao catálogo dos livros impressos, download de relatórios digitalizados e orientação remota para encontrar legislação. Elas usam tecnologia, mas não oferecem exatamente o mesmo objeto ao usuário. **Registro**, **documento** e **serviço** são componentes diferentes. O registro representa e descreve; o documento contém a informação procurada; o serviço organiza o acesso e apoia o uso.\n\nUma biblioteca digital envolve coleções de objetos digitais, descrições, organização e serviços para uma comunidade. O acervo pode conter objetos digitalizados e materiais produzidos originalmente em ambiente digital. Sua utilidade depende de seleção, descrição, busca, acesso e manutenção, e não apenas de arquivos colocados numa pasta pública. A literatura de Cunha e os verbetes de Cunha e Cavalcanti ajudam a perceber essa integração.\n\n**Exemplo resolvido.** Um portal apresenta título, autor e número de chamada de um livro. O leitor consegue descobrir que a biblioteca possui o exemplar, mas precisa obtê-lo fisicamente. Esse acesso ao catálogo não se converte em acesso ao texto integral. Se o registro também possuir um link para uma cópia digital acessível, haverá uma possibilidade adicional que deve ser verificada. Não se pode inferir o arquivo a partir do registro.\n\nO mesmo cuidado vale para metadados e acesso aberto: um registro pode estar visível e o documento depender de autorização ou licença. A existência de serviços digitais também não determina que toda a coleção física desapareceu. Em um item de prova, pergunte qual objeto está disponível, para quem, por qual caminho e sob quais condições.\n\nA preservação é outra dimensão: conseguir abrir um arquivo hoje não garante mantê-lo inteligível ao longo do tempo. O detalhamento sobre OAIS e estratégias está em 6.3; o ponto aqui é não confundir disponibilização imediata com preservação demonstrada.",
    "checkpointIds": [
      "rt-6-1-1"
    ]
  },
  {
    "id": "sub-6-1-bloco-2",
    "titulo": "Eletrônica, digital, virtual e híbrida: aprender a comparar autores",
    "objetivos": [
      "Identificar critérios e limites de uma classificação sem impor consenso inexistente."
    ],
    "conteudo": "Esses termos não têm uso perfeitamente uniforme em toda a literatura. Há abordagens que destacam a informatização de rotinas ao falar em **biblioteca eletrônica**; outras ampliam seu alcance para serviços e documentos em rede. No dicionário de Cunha e Cavalcanti, os verbetes mostram relações e remissões entre as expressões. A leitura da fonte é necessária quando uma questão atribui uma definição a um autor.\n\n**Biblioteca digital** enfatiza objetos digitais e serviços associados. **Biblioteca virtual** pode destacar acesso remoto e distribuído, ultrapassando a experiência de uma única instalação. Não se deve transformar “sem paredes” em afirmação literal de que não existem servidores, instituições responsáveis ou infraestrutura física. **Biblioteca híbrida** caracteriza a articulação de recursos e serviços de diferentes suportes. Ela pode ser discutida como transição em certos textos, sem significar uma lei histórica obrigatória para toda biblioteca.\n\n| Eixo de comparação | Pergunta útil |\n|---|---|\n| Suporte | Há impressos, objetos digitais ou ambos? |\n| Automação | Quais rotinas estão informatizadas? |\n| Acesso | O usuário chega ao registro, ao documento, a um serviço ou aos três? |\n| Organização | Metadados e estruturas permitem localizar e interpretar? |\n| Distribuição | Os recursos estão concentrados ou articulados entre instituições? |\n\n**Caso:** uma biblioteca mantém coleção física e oferece repositório e consulta remota. A descrição pode evidenciar seu caráter híbrido e seus serviços digitais simultaneamente. Não há contradição necessária. Já afirmar que o repositório de texto completo é apenas um catálogo de localização física troca a função do componente.\n\nA distinção didática entre automatizar rotinas e oferecer objetos digitais continua útil, desde que seu recorte seja anunciado. Se o enunciado omite autor e contexto e depende de uma distinção controversa para ter resposta, o problema editorial deve ser resolvido antes de usar o item como avaliação. Ambiguidade não é dificuldade de nível alto.",
    "checkpointIds": [
      "cp-6-1-2",
      "rt-6-1-2",
      "rt-6-1-6"
    ]
  },
  {
    "id": "sub-6-1-bloco-3",
    "titulo": "Arquitetura da informação: quatro sistemas que trabalham juntos",
    "objetivos": [
      "Aplicar organização, navegação, rotulagem e busca a um portal."
    ],
    "conteudo": "Na abordagem de Rosenfeld e Morville, **organização**, **navegação**, **rotulagem** e **busca** são sistemas centrais da arquitetura da informação. O objetivo é estruturar conteúdo de modo que o usuário consiga encontrar, compreender e utilizar aquilo de que precisa. Arquitetura não é apenas aparência: decisões sobre categorias e nomes afetam a recuperação.\n\n**Organização** estabelece agrupamentos e relações. Um acervo pode ser organizado por assunto, tipo documental, data ou público. Esses critérios atendem a necessidades diferentes. **Rotulagem** escolhe os nomes e sinais que representam os conteúdos e ações: “Publicações” e “Solicitar cópia”, por exemplo. **Navegação** oferece os caminhos e a localização: menu global, links locais, relações entre conteúdos e trilha de navegação. **Busca** recebe uma expressão de necessidade e oferece resultados conforme indexação e mecanismos de consulta.\n\n**Exemplo resolvido.** Um usuário procura pareceres sobre preservação. A categoria “Documentos técnicos” é uma decisão de organização; o texto que nomeia essa categoria pertence à rotulagem; o menu que leva até ela é navegação; consultar termos e filtrar resultados envolve busca. O mesmo elemento visual pode participar de mais de uma decisão de projeto; as categorias analíticas ajudam a explicar funções, não exigem isolamento físico de componentes.\n\nUm portal com busca não dispensa navegação. Pessoas podem não saber o termo adequado e precisar explorar categorias. Tampouco uma classificação cuidadosa garante sucesso se os rótulos forem incompreensíveis. Ao avaliar a interface, analise uma tarefa e o caminho concreto do usuário. “Há muitos botões” não é diagnóstico suficiente de boa ou má arquitetura.\n\n**Contraexemplo.** Adicionar um filtro chamado “Classe X42” a um portal público pode ser tecnicamente consistente com uma classificação interna, mas inútil a quem desconhece essa nomenclatura. A solução envolve rótulo inteligível e contextualização, não apenas velocidade de busca.",
    "checkpointIds": [
      "cp-6-1-1",
      "rt-6-1-3"
    ]
  },
  {
    "id": "sub-6-1-bloco-4",
    "titulo": "Usabilidade: a tarefa, a pessoa e o contexto",
    "objetivos": [
      "Avaliar uma interface a partir da tarefa e distinguir orientação de garantia."
    ],
    "conteudo": "Usabilidade pergunta se uma pessoa consegue realizar sua tarefa com resultados adequados no contexto de uso. Uma interface bonita pode impedir o envio de uma solicitação; uma interface funcional pode impor esforço desnecessário. É preciso observar o objetivo, os recursos disponíveis e as dificuldades encontradas, em vez de classificar toda tela por gosto pessoal.\n\nAs heurísticas de Nielsen incluem: visibilidade do estado; linguagem compatível com a experiência do usuário; controle e possibilidade de sair; consistência; prevenção de erros; reconhecimento em vez de exigência desnecessária de memória; flexibilidade; apresentação focada no essencial; mensagens que permitam recuperar erros; ajuda. São critérios de inspeção, não certificado automático nem substituto de teste com usuários.\n\n**Caso próprio.** Uma solicitação de reprodução demora alguns segundos. Durante a operação, a tela deve permitir entender que o envio está em andamento. Antes de receber confirmação efetiva, não deve afirmar “pedido concluído”. Se houver falha, precisa explicar o estado e permitir nova tentativa sem induzir envio duplicado. A mensagem deve falar da tarefa do usuário, não expor códigos internos como única orientação.\n\nOutro problema surge quando filtros desaparecem ao abrir um resultado e voltar. O usuário precisa reconstruir o caminho e perde a localização. Preservar contexto e informar filtros ativos melhora a tarefa. Isso é diferente de manter dados sensíveis indefinidamente; decisões de persistência também precisam respeitar privacidade e finalidade.\n\nUm teste de uso deve observar tarefas concretas: localizar um documento, identificar a licença, solicitar acesso ou entender por que um resultado está restrito. Medir apenas quantos links existem não demonstra facilidade de uso. Inspeção técnica e observação de pessoas fornecem evidências diferentes e complementares.",
    "checkpointIds": [
      "rt-6-1-4"
    ]
  },
  {
    "id": "sub-6-1-bloco-5",
    "titulo": "Acessibilidade: perceber, operar, compreender e usar tecnologia assistiva",
    "objetivos": [
      "Identificar barreiras concretas e relacioná-las aos princípios da WCAG."
    ],
    "conteudo": "A W3C organiza os princípios de acessibilidade em **perceptível, operável, compreensível e robusto**. Conteúdo precisa chegar por formas adequadas de percepção; a interação deve ser possível; instruções e comportamento precisam ser entendidos; a implementação deve permitir interpretação por tecnologias e agentes de usuário. Uma pessoa pode enfrentar mais de uma barreira na mesma tarefa.\n\n**Aplicação própria:** um gráfico de crescimento do acervo não será informativo para quem não percebe suas cores se o único código for verde/vermelho. Nomear séries, oferecer dados e descrever a conclusão melhora o acesso. Uma descrição não precisa enumerar pixels: deve transmitir o que é relevante à finalidade da imagem. Imagens meramente decorativas têm tratamento diferente de imagens que carregam informação.\n\nUm menu que só abre com mouse exclui quem opera por teclado. Um campo sem rótulo torna difícil identificar a informação esperada. Uma mensagem de erro longe do formulário pode passar despercebida. Esses exemplos mostram por que tamanho de fonte e contraste são apenas parte da acessibilidade.\n\nO art. 63 da Lei Brasileira de Inclusão trata da acessibilidade de sítios mantidos por empresas com sede ou representação comercial no país e por órgãos de governo, conforme melhores práticas e diretrizes internacionais. Isso não significa que o dispositivo transcreva, por nome, todos os critérios de uma edição específica da WCAG. A lei e o padrão técnico têm papéis distintos. O e-MAG constitui referência do governo eletrônico brasileiro e precisa ser identificado por sua versão, sem ser confundido com uma norma internacional.\n\nAo julgar um item, identifique a barreira e a exigência correspondente. Uma ferramenta automática detecta parte dos problemas, mas não prova sozinha que o texto faz sentido, que o foco está adequado ou que a tarefa é realizável. Testes manuais e uso de tecnologia assistiva complementam a análise.",
    "checkpointIds": [
      "cp-6-1-3",
      "rt-6-1-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cunha-dicionario",
    "titulo": "Cunha e Cavalcanti (2008) — Dicionário de Biblioteconomia e Arquivologia",
    "localizador": "Verbetes de biblioteca digital, eletrônica, híbrida e virtual; acervo do projeto, Fundamentos."
  },
  {
    "id": "cunha-digital",
    "titulo": "Cunha — Desafios na construção de uma biblioteca digital",
    "localizador": "Discussão conceitual e tecnológica; acervo do projeto, Digital, repositórios e IA."
  },
  {
    "id": "ia",
    "titulo": "Rosenfeld e Morville — Information Architecture for the World Wide Web",
    "localizador": "Sistemas de organização, rotulagem, navegação e busca."
  },
  {
    "id": "nielsen",
    "titulo": "Nielsen — 10 Usability Heuristics",
    "localizador": "Critérios de inspeção; casos da aula são exemplos próprios.",
    "url": "https://www.nngroup.com/articles/ten-usability-heuristics/"
  },
  {
    "id": "wai",
    "titulo": "W3C/WAI — Accessibility Principles",
    "localizador": "Quatro princípios de acessibilidade.",
    "url": "https://www.w3.org/WAI/fundamentals/accessibility-principles/"
  },
  {
    "id": "lbi",
    "titulo": "Lei Brasileira de Inclusão",
    "localizador": "Lei 13.146/2015, art. 63.",
    "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm"
  }
],
};
