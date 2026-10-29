import type { ModuloFilho } from '../../../domain/types';

export const submodulo81: ModuloFilho = {
  id: 'sub-8-1',
  numero: '8.1',
  editalRef: 'Bloco D - Item 5.1 e 5.2',
  preRequisitos: ["sub-2-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-8-2",
          "titulo": "NBR 10520 (Citações)",
          "motivo": "Regras de citação e remissão cruzada para referências bibliográficas."
      }
  ],
  titulo: 'ABNT NBR 6023:2025 (3ª Edição): Referências Bibliográficas',
  antesDeLer: [
    {
      termo: 'ABNT NBR 6023:2025',
      definicao: 'Norma brasileira que estabelece os elementos a serem incluídos em referências bibliográficas e fixa padrões de apresentação.',
      exemploBiblioteca: 'Orientação aos pesquisadores sobre a inclusão obrigatória do DOI e formatação de links de documentos legislativos.',
    },
    {
      termo: 'Elementos Essenciais vs. Complementares',
      definicao: 'Essenciais são indispensáveis à identificação do documento (autor, título, local, editora, data); complementares detalham a descrição física.',
      exemploBiblioteca: 'Elaboração de lista de referências em notas técnicas contendo rigorosamente todos os elementos essenciais da NBR 6023.',
    },
    {
      termo: 'Destaque Tipográfico na NBR 6023',
      definicao: 'Uso uniforme de itálico, negrito ou sublinhado para o título da publicação em toda a obra, não se aplicando a obras sem autoria.',
      exemploBiblioteca: 'Padronização pelo uso de itálico no título dos livros referenciados nas publicações institucionais da Câmara.',
    },
    {
      termo: 'Referência de Documentos Legislativos',
      definicao: 'Regra que determina entrada pela jurisdição em caixa alta, seguida do título oficial do ato, data de promulgação e dados da publicação oficial.',
      exemploBiblioteca: 'BRASIL. Lei nº 14.133, de 1º de abril de 2021. Diário Oficial da União: seção 1, Brasília, DF, ano 159, n. 61-E, p. 1-43, 1 abr. 2021.',
    },
  ],
  descricaoCurta: 'Norma ABNT NBR 6023:2025 (3ª edição de 21.05.2025), elementos essenciais e complementares, padronização tipográfica do destaque, regras de autoria pessoal e institucional, referências de monografias, partes de coletâneas, artigos de periódicos, legislação e documentos eletrônicos.',
  tempoEstimadoMinutos: 13,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro de Informação e Documentação (CB-014)', 'Antônio Agenor Briquet de Lemos', 'Maria Luísa Leite Leão'],
  alertasCebraspe: [
  "Escolha o modelo pelo documento, distinguindo parte e publicação hospedeira.",
  "Convém, deve e permite-se têm forças diferentes; confira a regra específica.",
  "Uma edição histórica da norma deve ser julgada em seu contexto, sem atualização retroativa silenciosa."
],
  quadroComparativo: {
  "titulo": "Referência: perguntas que orientam o modelo",
  "colunas": [
    "Situação",
    "Decisão",
    "Cuidado"
  ],
  "linhas": [
    [
      "Livro no todo",
      "Identificar obra e responsabilidade",
      "Não confundir com capítulo"
    ],
    [
      "Capítulo",
      "Identificar parte, obra e localização",
      "Organizador do todo não é automaticamente autor da parte"
    ],
    [
      "Artigo",
      "Identificar artigo e periódico",
      "Título do artigo e da publicação cumprem funções distintas"
    ],
    [
      "Online",
      "Manter modelo e acrescentar acesso pertinente",
      "URL não substitui identificação"
    ],
    [
      "Sem autoria",
      "Entrada pelo título",
      "Não inventar Anônimo"
    ]
  ]
},
  teoriaDensaMarkdown: "### O que uma referência precisa permitir ao leitor\n\nUma referência funciona como uma identificação estruturada. O leitor deve conseguir reconhecer o documento que sustentou a informação e distingui-lo de outros. Não se trata apenas de colocar sobrenome em maiúsculas. Uma referência visualmente elegante pode apontar para a obra errada; uma lista uniforme pode estar incompleta para o tipo de recurso consultado.\n\nA **NBR 6023:2025** é a edição trabalhada neste capítulo. A seção 4 distingue elementos essenciais e complementares. **Essenciais** são os necessários à identificação, definidos conforme o tipo documental. **Complementares** acrescentam caracterização. Não existe uma lista única de essenciais válida de modo idêntico para livro, artigo, legislação, vídeo e página de site.\n\n**Exemplo resolvido.** Você consultou um artigo em uma revista. Registrar apenas autora, título do artigo e ano deixa de identificar adequadamente a publicação hospedeira e a localização pertinentes. Copiar um modelo de livro e acrescentar uma URL não resolve essa falta. Primeiro reconheça o objeto: artigo; depois examine os elementos daquele modelo.\n\nOs dados devem refletir o documento consultado. Quando a informação for obtida de outra fonte ou precisar de indicação específica, use a convenção prevista, em vez de inventar editora, data ou cidade. A ausência de um dado não autoriza preencher com aquilo que parece provável. Colchetes também não são licença para adivinhação: distinguem informação suprida nas condições da norma.\n\n**Roteiro de montagem:** identifique tipo e parte/no todo; recolha os elementos do documento; determine responsabilidade e entrada; organize a sequência do modelo; acrescente meio e acesso quando pertinentes; confira uniformidade. Essa sequência é um procedimento didático, não uma lista de passos obrigatoriamente transcrita da norma.\n\nDiferencie referência de citação: uma chamada no texto remete à fonte e é tratada pela NBR 10520; a referência descreve o documento e é tratada pela NBR 6023. Uma não substitui a outra.\n\n### Autoria pessoal: transcrever sem transformar uma permissão em obrigação\n\nNa seção 8.1.1, a autoria pessoal começa pelo sobrenome seguido dos demais nomes, com a apresentação pertinente. Os autores são separados por ponto e vírgula. A padronização dos nomes precisa respeitar as informações e os casos especiais; não reduza toda estrutura de nome a “pegar a última palavra”, pois sobrenomes compostos, parentesco e outras convenções exigem tratamento.\n\nCom **até três autores**, indicam-se todos. Com **quatro ou mais**, convém indicar todos e é permitido indicar o primeiro seguido de *et al.*. O contraste decisivo é entre recomendação e alternativa permitida. “Todos são obrigatórios em qualquer situação” desconsidera a permissão; “com três autores pode-se sempre abreviar a lista por et al.” transporta a alternativa para a faixa errada.\n\n**Exemplo didático fictício.** Livro assinado por Ana Lima, Bruno Costa e Carla Reis. A entrada reúne os três, na ordem de responsabilidade apresentada no documento: `LIMA, Ana; COSTA, Bruno; REIS, Carla.` Se uma quarta pessoa também for autora, passa a existir a alternativa de primeiro autor seguido de *et al.*, sem que os demais dados bibliográficos desapareçam.\n\nOrganizador, coordenador e editor não são automaticamente o autor intelectual de cada capítulo. Em obra coletiva, a responsabilidade pelo todo e a responsabilidade pela parte devem ser distinguidas. O indicador de responsabilidade acompanha o nome conforme o modelo; não deve ser inventado a partir de suposição sobre a profissão da pessoa.\n\n**Contraexemplo:** duas referências do mesmo autor trazem prenomes por extenso numa ocorrência e abreviados noutra sem critério. O problema é de padronização. Já duas pessoas diferentes com sobrenome igual não devem ser fundidas como um único autor por mera semelhança. A normalização melhora a identificação; não pode apagar diferenças reais.\n\n### Autoria institucional e ausência de autoria\n\nA seção 8.1.2 trata de pessoa jurídica. A forma conhecida ou destacada no documento orienta a apresentação, com atenção às regras específicas. Para instituição governamental da administração direta, o nome é precedido pelo órgão superior ou pela jurisdição pertinente. Quando houver denominação específica que a identifique, examine a regra correspondente antes de impor uma cadeia hierárquica a toda instituição.\n\n**Exemplo próprio:** um relatório da Câmara dos Deputados pode exigir a representação da jurisdição e da estrutura institucional pertinente: `BRASIL. Congresso Nacional. Câmara dos Deputados.` Não se deve colocar apenas o nome da unidade subordinada e omitir todos os elementos necessários à identificação. Já uma universidade de denominação específica pede análise distinta, e não uma cópia automática da entrada de um ministério.\n\n**Sem autoria identificada**, a entrada pelo título não equivale a criar o autor “Anônimo”. A referência deve descrever o que se conhece. A primeira palavra recebe o tratamento de entrada; se o título começa por artigo definido ou indefinido, a seção 8.2.1 determina maiúsculas no artigo e na palavra subsequente. Não descarte o artigo com base numa regra de outro sistema.\n\n**Exemplo fictício:** `OS ARQUIVOS da memória: práticas de organização.` Aqui, OS e ARQUIVOS identificam o início da entrada pelo título. Isso é diferente de destacar tipograficamente um título com autor conhecido. Entrada e destaque são decisões relacionadas, mas não idênticas.\n\nAo resolver o item, responda: existe responsabilidade identificada? É pessoa física, jurídica ou obra sem indicação? Há órgão subordinado ou denominação própria? A referência é do todo ou de uma parte? Essa análise evita tentar resolver tudo por caixa alta.\n\n### Tipos documentais: do livro ao artigo e à parte de obra\n\nOs modelos da seção 7 especificam a identificação de diferentes recursos. A estrutura deve corresponder ao objeto consultado. **Livro no todo**, **capítulo** e **artigo** não são categorias intercambiáveis: um capítulo integra uma monografia; um artigo integra uma publicação periódica. O autor pode ser o mesmo, mas a relação documental muda.\n\n**Livro fictício:** `LIMA, Ana. Gestão de acervos: decisões e práticas. 2. ed. Brasília, DF: Editora Exemplo, 2025.` O título destacado no modelo é o da obra; o subtítulo a complementa e não recebe automaticamente o mesmo destaque. Os dados foram criados para exercício, não constituem uma referência a livro real.\n\n**Parte de livro fictício:** `COSTA, Bruno. Seleção de documentos. In: LIMA, Ana (org.). Gestão de acervos: decisões e práticas. Brasília, DF: Editora Exemplo, 2025. p. 21-35.` A entrada começa pela responsabilidade da parte. Depois de `In:`, identifica-se a obra hospedeira e, ao final, a localização da parte. Não atribua a autoria do capítulo ao organizador apenas por ele aparecer na capa do livro.\n\n**Artigo fictício:** `REIS, Carla. Indicadores em bibliotecas. Revista Exemplo de Informação, Brasília, DF, v. 4, n. 2, p. 10-22, jul./dez. 2025.` O nome da publicação periódica identifica a fonte hospedeira; volume, número e localização cumprem papéis próprios. Na aplicação do destaque, não troque o título do artigo pelo título da revista.\n\n| Objeto consultado | Relação que precisa ficar clara |\n|---|---|\n| Livro no todo | Responsabilidade e identificação da obra |\n| Capítulo | Parte consultada e obra que a contém |\n| Artigo | Artigo e publicação periódica hospedeira |\n| Documento online | Tipo documental e condições de disponibilidade/acesso pertinentes |\n\nEstes modelos ensinam relações estruturais. Tipos como legislação, jurisprudência, evento, tese, audiovisual e documento cartográfico têm particularidades na norma. Ao aplicar um modelo novo, consulte sua seção, em vez de substituir todo recurso por “página da internet”.\n\n### Disponibilidade online, datas e informações não identificadas\n\n“Está na internet” descreve uma condição de acesso, não um tipo documental único. Pode haver um livro digital, artigo, relatório, lei, vídeo ou página institucional. A seção 6.6 estabelece os dados de disponibilidade e acesso aplicáveis ao recurso online. Eles se somam à identificação pertinente; não substituem título e responsabilidade por uma URL isolada.\n\n**Exemplo resolvido.** Um relatório foi publicado em 2024 e consultado em 2026. A data de publicação identifica a edição/documento; a data de acesso registra a consulta. Usar 2026 como ano de publicação sem evidência alteraria o dado bibliográfico. Do mesmo modo, o ano de copyright, o ano de atualização e o de publicação não devem ser fundidos sem analisar o recurso.\n\nA data de acesso usa a forma pertinente de dia, mês e ano. No **Anexo A**, a tabela em português apresenta `jan., fev., mar., abr., maio, jun., jul., ago., set., out., nov., dez.`. Maio não é reduzido a “mai.” nesse quadro. Para documentos e informações em outros idiomas, é preciso observar a regra aplicável e a tabela correspondente; não generalize a frase “três letras e ponto” a todas as línguas.\n\nQuando local ou editora não forem identificados, examine a convenção indicada na seção de transcrição pertinente, em vez de presumir a cidade da instituição que digitalizou o arquivo. A digitalização por uma biblioteca não transforma essa biblioteca em editora da obra original. A data aproximada, quando admitida, também deve representar informação fundamentada e sinalizada, não um ano conveniente.\n\nEm provas antigas, pode haver regras de outra edição. A NBR 6023:2002 e as edições posteriores não devem ser sobrepostas retroativamente. O julgamento de uma questão histórica exige saber a referência temporal pedida; a aula atual não deve chamar um item antigo de errado apenas porque a regra mudou. Quando o enunciado omite edição relevante, esse é um ponto de revisão editorial.\n\n### Padronização e revisão: conferir relações, não só pontuação\n\nAs regras gerais da seção 6 tratam da sequência, alinhamento, espaçamento, pontuação, destaque e uso de elementos complementares. Nas listas, as referências são alinhadas à esquerda e elaboradas em espaço simples, separadas por linha em branco de espaço simples. Notas de rodapé têm tratamento específico; não se deve transferir automaticamente toda regra visual da lista para qualquer contexto.\n\nO recurso tipográfico usado para destacar o elemento título precisa ser uniforme conforme o modelo. Negrito, itálico ou sublinhado são alternativas indicadas na regra geral; aspas não são uma quarta alternativa equivalente. Há particularidades para entradas pelo título, sem indicação de autoria/responsabilidade. Logo, “destacar título e subtítulo de qualquer referência exatamente do mesmo modo” é uma regra excessiva.\n\n**Revisão em cinco perguntas:** o documento está correto? A responsabilidade e a entrada correspondem ao caso? A publicação hospedeira foi identificada quando necessária? Elementos e sequência seguem o modelo? Tipografia, abreviações e complementares mantêm coerência?\n\n**Caso de comparação.** Dois artigos estão identificados com seus respectivos periódicos. Um foi referenciado só com URL e acesso; o outro possui todos os dados pertinentes. O primeiro não se torna completo apenas porque segue o mesmo estilo de fonte e pontuação. Inversamente, duas referências de tipos diferentes podem ter elementos distintos sem violar uniformidade. A regra não manda tornar um capítulo idêntico a um livro no todo.\n\nA leitura de um item deve separar obrigação, recomendação, permissão e hipótese. Nas questões sobre quatro ou mais autores, esse cuidado é decisivo. Um único “deve” no lugar de “permite-se” pode alterar a conclusão, mas a palavra só importa porque modifica a força da regra específica.\n\nPara estudar ativamente, corrija uma referência com dados fornecidos e explique cada alteração. Não complete o que o exercício não informa. Quando a tarefa admite opções normativas, apresente uma solução válida e declare a opção usada; não marque como errada outra alternativa permitida apenas por ser diferente do exemplo.",
  teoriaDidaticaMarkdown: "### Revisão: NBR 6023:2025\n\n1. Identifique o documento: todo, parte, artigo, legislação ou outro tipo. “Online” não substitui essa classificação.\n2. Recolha dados do recurso consultado. Essenciais variam por tipo; complementares melhoram a caracterização.\n3. Até três autores: indicar todos. Quatro ou mais: convém todos; permite-se primeiro e et al.\n4. Pessoa jurídica exige contexto institucional. Sem autoria identificada, use entrada pelo título; não invente “Anônimo”. Em entrada por título iniciado por artigo, artigo e palavra seguinte ficam em maiúsculas.\n5. Capítulo identifica parte e livro; artigo identifica artigo e periódico. A publicação hospedeira importa.\n6. Disponibilidade e acesso complementam a referência online. A data de acesso não vira ano de publicação.\n7. Uniformidade não significa elementos idênticos para todos os tipos. Distinga título, subtítulo e título da fonte hospedeira.\n8. Em português, a tabela usa maio por extenso. Não estenda essa regra a todos os idiomas.\n\n**Recupere:** por que uma URL não basta? Quando et al. é alternativa permitida? Como a referência do capítulo distingue autoria da parte e responsabilidade pelo todo?\n",
  checkpoints: [
  {
    "id": "cp-8-1-1",
    "pergunta": "Micro-Checkpoint 1: Destaque Tipográfico na NBR 6023",
    "item": "Na elaboração de referências conforme a norma ABNT NBR 6023, o título e o subtítulo da obra devem receber o mesmo destaque tipográfico, podendo ser empregado o itálico, o negrito ou aspas duplas.",
    "gabarito": "E",
    "justificativa": "A regra geral prevê negrito, itálico ou sublinhado para o elemento título, com uniformidade e particularidades por modelo; aspas não são alternativa equivalente. O subtítulo não recebe automaticamente o mesmo destaque do título. Deve-se distinguir ainda a entrada pelo título quando não há autoria.",
    "fonte": "ABNT NBR 6023:2025, seções 6.7 e 8.2.",
    "versao_correta": "O destaque do elemento título segue a regra e o tipo documental, com recurso uniforme; não se estende automaticamente ao subtítulo."
  },
  {
    "id": "cp-8-1-2",
    "pergunta": "Micro-Checkpoint 2: Indicação de Mês na NBR 6023",
    "item": "Na tabela de meses em português do Anexo A da ABNT NBR 6023:2025, os meses são apresentados por três letras e ponto, com exceção de maio, grafado por extenso.",
    "gabarito": "C",
    "justificativa": "O item delimita idioma, edição e tabela. A coluna portuguesa apresenta jan., fev., mar., abr., maio, jun., jul., ago., set., out., nov. e dez. A generalização para todos os idiomas seria inadequada.",
    "fonte": "ABNT NBR 6023:2025, Anexo A, coluna Português."
  },
  {
    "id": "cp-8-1-3",
    "pergunta": "Micro-Checkpoint 3: ABNT NBR 6023 e Autoria Institucional",
    "item": "De acordo com a norma ABNT NBR 6023, publicações de órgãos governamentais de administração direta devem ter sua entrada de autoria realizada pelo nome do órgão subordinado, omitindo-se a jurisdição geográfica correspondente.",
    "gabarito": "E",
    "justificativa": "A instituição governamental da administração direta é precedida do órgão superior ou da jurisdição pertinente. O item manda omitir o elemento que contextualiza a instituição e por isso não segue a regra. Denominações específicas exigem exame do caso correspondente.",
    "fonte": "ABNT NBR 6023:2025, seção 8.1.2.2.",
    "versao_correta": "A entrada da instituição governamental da administração direta observa o órgão superior ou a jurisdição pertinente, conforme a norma."
  },
  {
    "id": "rt-8-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Os elementos essenciais de uma referência variam conforme o tipo de documento, razão pela qual um modelo de livro não pode ser aplicado mecanicamente a um artigo de periódico.",
    "gabarito": "C",
    "justificativa": "A seção 4.1 vincula os elementos ao tipo documental. Um artigo precisa ser identificado em sua publicação hospedeira; um livro no todo tem outra estrutura. Primeiro classifique o objeto que foi consultado e só então selecione o modelo.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Ao referenciar um artigo, deve-se substituir o título do periódico pelo título de um livro do mesmo autor para uniformizar a lista.",
    "gabarito": "E",
    "justificativa": "Uniformidade é coerência de apresentação, não troca dos dados do documento. O artigo pertence ao periódico identificado, e sua referência precisa preservar essa relação. A identidade do autor não autoriza substituir a fonte.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar",
    "versao_correta": "A referência do artigo deve identificar o próprio artigo e o periódico em que foi publicado."
  },
  {
    "id": "rt-8-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em obra com quatro autores, a NBR 6023:2025 permite indicar apenas o primeiro seguido de et al., embora recomende indicar todos.",
    "gabarito": "C",
    "justificativa": "A seção 8.1.1.2 diferencia recomendação e permissão. Convém não equivale a obrigação exclusiva. A opção não dispensa seguir a apresentação coerente dos nomes e demais elementos.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A inexistência de autor identificado permite iniciar a referência com ANÔNIMO, dispensando a entrada pelo título.",
    "gabarito": "E",
    "justificativa": "Quando não há indicação de autoria ou responsabilidade, a entrada é feita pelo título, conforme o modelo aplicável. Não se deve inventar um nome de autor para preencher o campo.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar",
    "versao_correta": "Sem autoria ou responsabilidade identificada, a entrada é feita pelo título, conforme a norma."
  },
  {
    "id": "rt-8-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em uma referência com entrada pelo título iniciado por artigo, devem ficar em maiúsculas o artigo e a palavra seguinte, conforme a regra específica da NBR 6023:2025.",
    "gabarito": "C",
    "justificativa": "A seção 8.2.1 trata dessa situação. No exemplo didático OS ARQUIVOS da memória, o artigo não é simplesmente descartado. A regra de entrada da referência não deve ser substituída por regra de ordenação de outro sistema.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-1-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Adicionar a data de acesso a um documento online permite omitir seu título, porque a data torna o recurso identificável por si só.",
    "gabarito": "E",
    "justificativa": "URL e data de acesso complementam os elementos de identificação pertinentes ao tipo documental. Não substituem título, autoria quando identificada e demais dados exigidos pelo modelo.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar",
    "versao_correta": "O documento online deve conservar os elementos pertinentes ao seu tipo e acrescentar os dados de disponibilidade e acesso aplicáveis."
  },
  {
    "id": "rt-8-1-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma referência de capítulo precisa identificar tanto a parte consultada quanto a obra que a contém.",
    "gabarito": "C",
    "justificativa": "O leitor precisa localizar a unidade citada e sua publicação hospedeira. O modelo de parte de monografia articula responsabilidade e título da parte, In:, dados da obra e localização da parte, conforme o caso.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-1-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A opção por um recurso de destaque tipográfico deve ser aplicada de modo coerente ao elemento que recebe destaque nos modelos, sem presumir que o título da parte e o da obra hospedeira tenham a mesma função.",
    "gabarito": "C",
    "justificativa": "A seção 6.7 exige padronização. O elemento destacado depende do tipo de referência: em artigo, a publicação periódica é diferente do título do artigo. A coerência não é destacar indiscriminadamente todos os títulos.",
    "fonte": "ABNT NBR 6023:2025, seções 4, 6, 7 e 8 e Anexo A; exemplar disponível no acervo do projeto.",
    "editalRef": "Bloco D - Item 5.1 e 5.2",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-1-1',
        periodo: '2002',
        disciplina: 'NBR 6023:2002',
        focoPrincipal: 'Versão histórica anterior que vigorou por 16 anos',
        figuraChave: 'ABNT / CB-014',
      },
      {
        id: 'tl-8-1-2',
        periodo: '2025 (Vigente)',
        disciplina: 'NBR 6023:2025 (3ª Edição)',
        focoPrincipal: 'Publicação da 3ª edição da NBR 6023 em 21.05.2025: consolidação de formatos digitais, flexibilização de quatro ou mais autores e alinhamento à margem esquerda',
        figuraChave: 'Comitê Brasileiro de Documentação (CB-014)',
      },
    ],
    autores: [
      {
        id: 'aut-8-1-1',
        nome: 'ABNT / CB-014',
        ano: 2025,
        obraPrincipal: 'ABNT NBR 6023:2025: Informação e documentação — Referências — Elaboração (3ª Edição)',
        ideiaChave: 'Padronização nacional de elementos essenciais e complementares para listas de referências bibliográficas.',
        chipPegadinha: 'A NBR 6023 regula as referências no final do texto; quem regula as citações no corpo é a NBR 10520.',
      },
      {
        id: 'aut-8-1-2',
        nome: 'Antonio Agenor Briquet de Lemos',
        ano: 2000,
        obraPrincipal: 'Para uma história da normalização bibliográfica no Brasil',
        ideiaChave: 'Pioneirismo na transposição das normas da ISO (ISO 690) para o sistema normativo brasileiro.',
        chipPegadinha: 'A NBR 6023 adota a lógica internacional da ISO 690 adaptada à prática bibliotecária brasileira.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-1-1',
        afirmacao: 'Conforme a ABNT NBR 6023, caso uma obra monográfica tenha sido publicada em sua primeira edição, o elemento "1. ed." deve constar compulsoriamente como elemento essencial da referência.',
        gabarito: 'E',
        porQue: 'A primeira edição NUNCA é indicada. A menção de edição na NBR 6023 só é registrada a partir da segunda edição (ex.: "2. ed.").',
      },
      {
        id: 'peg-8-1-2',
        afirmacao: 'Na referência de um artigo extraído de um periódico científico, o título do artigo é o elemento que deve receber destaque em negrito ou itálico.',
        gabarito: 'E',
        porQue: 'Em artigos de periódicos, quem recebe o destaque tipográfico é o TÍTULO DA REVISTA/PERIÓDICO, e não o título do artigo.',
      },
      {
        id: 'peg-8-1-3',
        afirmacao: 'Na compilação de referências bibliográficas conforme a ABNT NBR 6023, o alinhamento do texto deve ser justificado e com recuo de parágrafo de 1,25 cm na primeira linha.',
        gabarito: 'E',
        porQue: 'A norma determina alinhamento exclusivo À MARGEM ESQUERDA (sem justificação) e sem recuo de parágrafo, com espaçamento simples entre linhas.',
      },
    ],
  },

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-8-1-bloco-1",
    "titulo": "O que uma referência precisa permitir ao leitor",
    "objetivos": [
      "Selecionar o modelo pelo documento consultado e distinguir elementos essenciais e complementares."
    ],
    "conteudo": "Uma referência funciona como uma identificação estruturada. O leitor deve conseguir reconhecer o documento que sustentou a informação e distingui-lo de outros. Não se trata apenas de colocar sobrenome em maiúsculas. Uma referência visualmente elegante pode apontar para a obra errada; uma lista uniforme pode estar incompleta para o tipo de recurso consultado.\n\nA **NBR 6023:2025** é a edição trabalhada neste capítulo. A seção 4 distingue elementos essenciais e complementares. **Essenciais** são os necessários à identificação, definidos conforme o tipo documental. **Complementares** acrescentam caracterização. Não existe uma lista única de essenciais válida de modo idêntico para livro, artigo, legislação, vídeo e página de site.\n\n**Exemplo resolvido.** Você consultou um artigo em uma revista. Registrar apenas autora, título do artigo e ano deixa de identificar adequadamente a publicação hospedeira e a localização pertinentes. Copiar um modelo de livro e acrescentar uma URL não resolve essa falta. Primeiro reconheça o objeto: artigo; depois examine os elementos daquele modelo.\n\nOs dados devem refletir o documento consultado. Quando a informação for obtida de outra fonte ou precisar de indicação específica, use a convenção prevista, em vez de inventar editora, data ou cidade. A ausência de um dado não autoriza preencher com aquilo que parece provável. Colchetes também não são licença para adivinhação: distinguem informação suprida nas condições da norma.\n\n**Roteiro de montagem:** identifique tipo e parte/no todo; recolha os elementos do documento; determine responsabilidade e entrada; organize a sequência do modelo; acrescente meio e acesso quando pertinentes; confira uniformidade. Essa sequência é um procedimento didático, não uma lista de passos obrigatoriamente transcrita da norma.\n\nDiferencie referência de citação: uma chamada no texto remete à fonte e é tratada pela NBR 10520; a referência descreve o documento e é tratada pela NBR 6023. Uma não substitui a outra.",
    "checkpointIds": [
      "rt-8-1-1"
    ]
  },
  {
    "id": "sub-8-1-bloco-2",
    "titulo": "Autoria pessoal: transcrever sem transformar uma permissão em obrigação",
    "objetivos": [
      "Aplicar as regras de até três e de quatro ou mais autores."
    ],
    "conteudo": "Na seção 8.1.1, a autoria pessoal começa pelo sobrenome seguido dos demais nomes, com a apresentação pertinente. Os autores são separados por ponto e vírgula. A padronização dos nomes precisa respeitar as informações e os casos especiais; não reduza toda estrutura de nome a “pegar a última palavra”, pois sobrenomes compostos, parentesco e outras convenções exigem tratamento.\n\nCom **até três autores**, indicam-se todos. Com **quatro ou mais**, convém indicar todos e é permitido indicar o primeiro seguido de *et al.*. O contraste decisivo é entre recomendação e alternativa permitida. “Todos são obrigatórios em qualquer situação” desconsidera a permissão; “com três autores pode-se sempre abreviar a lista por et al.” transporta a alternativa para a faixa errada.\n\n**Exemplo didático fictício.** Livro assinado por Ana Lima, Bruno Costa e Carla Reis. A entrada reúne os três, na ordem de responsabilidade apresentada no documento: `LIMA, Ana; COSTA, Bruno; REIS, Carla.` Se uma quarta pessoa também for autora, passa a existir a alternativa de primeiro autor seguido de *et al.*, sem que os demais dados bibliográficos desapareçam.\n\nOrganizador, coordenador e editor não são automaticamente o autor intelectual de cada capítulo. Em obra coletiva, a responsabilidade pelo todo e a responsabilidade pela parte devem ser distinguidas. O indicador de responsabilidade acompanha o nome conforme o modelo; não deve ser inventado a partir de suposição sobre a profissão da pessoa.\n\n**Contraexemplo:** duas referências do mesmo autor trazem prenomes por extenso numa ocorrência e abreviados noutra sem critério. O problema é de padronização. Já duas pessoas diferentes com sobrenome igual não devem ser fundidas como um único autor por mera semelhança. A normalização melhora a identificação; não pode apagar diferenças reais.",
    "checkpointIds": [
      "rt-8-1-3"
    ]
  },
  {
    "id": "sub-8-1-bloco-3",
    "titulo": "Autoria institucional e ausência de autoria",
    "objetivos": [
      "Escolher a entrada sem confundir órgão subordinado e entidade de denominação própria."
    ],
    "conteudo": "A seção 8.1.2 trata de pessoa jurídica. A forma conhecida ou destacada no documento orienta a apresentação, com atenção às regras específicas. Para instituição governamental da administração direta, o nome é precedido pelo órgão superior ou pela jurisdição pertinente. Quando houver denominação específica que a identifique, examine a regra correspondente antes de impor uma cadeia hierárquica a toda instituição.\n\n**Exemplo próprio:** um relatório da Câmara dos Deputados pode exigir a representação da jurisdição e da estrutura institucional pertinente: `BRASIL. Congresso Nacional. Câmara dos Deputados.` Não se deve colocar apenas o nome da unidade subordinada e omitir todos os elementos necessários à identificação. Já uma universidade de denominação específica pede análise distinta, e não uma cópia automática da entrada de um ministério.\n\n**Sem autoria identificada**, a entrada pelo título não equivale a criar o autor “Anônimo”. A referência deve descrever o que se conhece. A primeira palavra recebe o tratamento de entrada; se o título começa por artigo definido ou indefinido, a seção 8.2.1 determina maiúsculas no artigo e na palavra subsequente. Não descarte o artigo com base numa regra de outro sistema.\n\n**Exemplo fictício:** `OS ARQUIVOS da memória: práticas de organização.` Aqui, OS e ARQUIVOS identificam o início da entrada pelo título. Isso é diferente de destacar tipograficamente um título com autor conhecido. Entrada e destaque são decisões relacionadas, mas não idênticas.\n\nAo resolver o item, responda: existe responsabilidade identificada? É pessoa física, jurídica ou obra sem indicação? Há órgão subordinado ou denominação própria? A referência é do todo ou de uma parte? Essa análise evita tentar resolver tudo por caixa alta.",
    "checkpointIds": [
      "cp-8-1-3",
      "rt-8-1-4",
      "rt-8-1-5"
    ]
  },
  {
    "id": "sub-8-1-bloco-4",
    "titulo": "Tipos documentais: do livro ao artigo e à parte de obra",
    "objetivos": [
      "Montar modelos com dados fictícios suficientes e identificar a publicação hospedeira."
    ],
    "conteudo": "Os modelos da seção 7 especificam a identificação de diferentes recursos. A estrutura deve corresponder ao objeto consultado. **Livro no todo**, **capítulo** e **artigo** não são categorias intercambiáveis: um capítulo integra uma monografia; um artigo integra uma publicação periódica. O autor pode ser o mesmo, mas a relação documental muda.\n\n**Livro fictício:** `LIMA, Ana. Gestão de acervos: decisões e práticas. 2. ed. Brasília, DF: Editora Exemplo, 2025.` O título destacado no modelo é o da obra; o subtítulo a complementa e não recebe automaticamente o mesmo destaque. Os dados foram criados para exercício, não constituem uma referência a livro real.\n\n**Parte de livro fictício:** `COSTA, Bruno. Seleção de documentos. In: LIMA, Ana (org.). Gestão de acervos: decisões e práticas. Brasília, DF: Editora Exemplo, 2025. p. 21-35.` A entrada começa pela responsabilidade da parte. Depois de `In:`, identifica-se a obra hospedeira e, ao final, a localização da parte. Não atribua a autoria do capítulo ao organizador apenas por ele aparecer na capa do livro.\n\n**Artigo fictício:** `REIS, Carla. Indicadores em bibliotecas. Revista Exemplo de Informação, Brasília, DF, v. 4, n. 2, p. 10-22, jul./dez. 2025.` O nome da publicação periódica identifica a fonte hospedeira; volume, número e localização cumprem papéis próprios. Na aplicação do destaque, não troque o título do artigo pelo título da revista.\n\n| Objeto consultado | Relação que precisa ficar clara |\n|---|---|\n| Livro no todo | Responsabilidade e identificação da obra |\n| Capítulo | Parte consultada e obra que a contém |\n| Artigo | Artigo e publicação periódica hospedeira |\n| Documento online | Tipo documental e condições de disponibilidade/acesso pertinentes |\n\nEstes modelos ensinam relações estruturais. Tipos como legislação, jurisprudência, evento, tese, audiovisual e documento cartográfico têm particularidades na norma. Ao aplicar um modelo novo, consulte sua seção, em vez de substituir todo recurso por “página da internet”.",
    "checkpointIds": [
      "rt-8-1-2",
      "rt-8-1-7"
    ]
  },
  {
    "id": "sub-8-1-bloco-5",
    "titulo": "Disponibilidade online, datas e informações não identificadas",
    "objetivos": [
      "Distinguir data do documento, data de acesso e endereço de disponibilidade."
    ],
    "conteudo": "“Está na internet” descreve uma condição de acesso, não um tipo documental único. Pode haver um livro digital, artigo, relatório, lei, vídeo ou página institucional. A seção 6.6 estabelece os dados de disponibilidade e acesso aplicáveis ao recurso online. Eles se somam à identificação pertinente; não substituem título e responsabilidade por uma URL isolada.\n\n**Exemplo resolvido.** Um relatório foi publicado em 2024 e consultado em 2026. A data de publicação identifica a edição/documento; a data de acesso registra a consulta. Usar 2026 como ano de publicação sem evidência alteraria o dado bibliográfico. Do mesmo modo, o ano de copyright, o ano de atualização e o de publicação não devem ser fundidos sem analisar o recurso.\n\nA data de acesso usa a forma pertinente de dia, mês e ano. No **Anexo A**, a tabela em português apresenta `jan., fev., mar., abr., maio, jun., jul., ago., set., out., nov., dez.`. Maio não é reduzido a “mai.” nesse quadro. Para documentos e informações em outros idiomas, é preciso observar a regra aplicável e a tabela correspondente; não generalize a frase “três letras e ponto” a todas as línguas.\n\nQuando local ou editora não forem identificados, examine a convenção indicada na seção de transcrição pertinente, em vez de presumir a cidade da instituição que digitalizou o arquivo. A digitalização por uma biblioteca não transforma essa biblioteca em editora da obra original. A data aproximada, quando admitida, também deve representar informação fundamentada e sinalizada, não um ano conveniente.\n\nEm provas antigas, pode haver regras de outra edição. A NBR 6023:2002 e as edições posteriores não devem ser sobrepostas retroativamente. O julgamento de uma questão histórica exige saber a referência temporal pedida; a aula atual não deve chamar um item antigo de errado apenas porque a regra mudou. Quando o enunciado omite edição relevante, esse é um ponto de revisão editorial.",
    "checkpointIds": [
      "cp-8-1-2",
      "rt-8-1-6"
    ]
  },
  {
    "id": "sub-8-1-bloco-6",
    "titulo": "Padronização e revisão: conferir relações, não só pontuação",
    "objetivos": [
      "Detectar erros por checklist e explicar a correção."
    ],
    "conteudo": "As regras gerais da seção 6 tratam da sequência, alinhamento, espaçamento, pontuação, destaque e uso de elementos complementares. Nas listas, as referências são alinhadas à esquerda e elaboradas em espaço simples, separadas por linha em branco de espaço simples. Notas de rodapé têm tratamento específico; não se deve transferir automaticamente toda regra visual da lista para qualquer contexto.\n\nO recurso tipográfico usado para destacar o elemento título precisa ser uniforme conforme o modelo. Negrito, itálico ou sublinhado são alternativas indicadas na regra geral; aspas não são uma quarta alternativa equivalente. Há particularidades para entradas pelo título, sem indicação de autoria/responsabilidade. Logo, “destacar título e subtítulo de qualquer referência exatamente do mesmo modo” é uma regra excessiva.\n\n**Revisão em cinco perguntas:** o documento está correto? A responsabilidade e a entrada correspondem ao caso? A publicação hospedeira foi identificada quando necessária? Elementos e sequência seguem o modelo? Tipografia, abreviações e complementares mantêm coerência?\n\n**Caso de comparação.** Dois artigos estão identificados com seus respectivos periódicos. Um foi referenciado só com URL e acesso; o outro possui todos os dados pertinentes. O primeiro não se torna completo apenas porque segue o mesmo estilo de fonte e pontuação. Inversamente, duas referências de tipos diferentes podem ter elementos distintos sem violar uniformidade. A regra não manda tornar um capítulo idêntico a um livro no todo.\n\nA leitura de um item deve separar obrigação, recomendação, permissão e hipótese. Nas questões sobre quatro ou mais autores, esse cuidado é decisivo. Um único “deve” no lugar de “permite-se” pode alterar a conclusão, mas a palavra só importa porque modifica a força da regra específica.\n\nPara estudar ativamente, corrija uma referência com dados fornecidos e explique cada alteração. Não complete o que o exercício não informa. Quando a tarefa admite opções normativas, apresente uma solução válida e declare a opção usada; não marque como errada outra alternativa permitida apenas por ser diferente do exemplo.",
    "checkpointIds": [
      "cp-8-1-1",
      "rt-8-1-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "nbr6023",
    "titulo": "ABNT NBR 6023:2025 — Referências — Elaboração",
    "localizador": "Seção 4 (elementos); seção 6 (regras gerais); seção 7 (modelos); 8.1 (responsabilidade), 8.2 (título), transcrição e datas; Anexo A (meses). Exemplar do acervo ABNT do projeto. Exemplos bibliográficos da aula são fictícios e didáticos."
  }
],
};
