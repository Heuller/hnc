import type { ModuloFilho } from '../../../domain/types';

export const submodulo131: ModuloFilho = {
  id: 'sub-13-1',
  numero: '13.1',
  editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)',
  preRequisitos: [],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-13-4",
          "titulo": "Ortografia, Gêneros Textuais e Morfossintaxe",
          "motivo": "Tipologias e gêneros textuais segundo Marcuschi."
      }
  ],
  titulo: 'Mecânica da Interpretação, Coesão e Relações Semânticas no Padrão Cebraspe',
  antesDeLer: [
  {
    "termo": "Inferência",
    "definicao": "Conclusão sustentada por pistas e relações do texto.",
    "exemploBiblioteca": "Ainda não publicou não prova sozinho que a redação está em andamento."
  },
  {
    "termo": "Coesão",
    "definicao": "Recursos que articulam referências e relações no texto.",
    "exemploBiblioteca": "Um pronome pode retomar informação sem repetir o nome."
  }
],
  descricaoCurta: "Separar o que foi dito, o que se pode concluir e uma hipótese acrescentada. Reconhecer quem assume cada posição e o papel de um trecho. Reconstruir referentes por compatibilidade e preservar relações de pertença. Distinguir oposição, concessão, causa, conclusão e condição. Reconhecer informação de fundo sem transformar todo implícito em certeza.",
  tempoEstimadoMinutos: 19,
  autoresChave: [
  "Manual de Redação da Presidência da República, 3ª ed. (2018)"
],
  alertasCebraspe: [
  "O texto informa que a variável não foi avaliada. Não medir não demonstra melhora nem piora. A assertiva transforma limite do estudo em resultado negativo.",
  "A condição e o modal de possibilidade não afirmam realização passada. Já foi publicado acrescenta temporalidade e efetividade ausentes.",
  "A falta de publicação é compatível com redação em curso ou com documento concluído que aguarda divulgação. A conclusão sobre redação acrescenta dado não fornecido."
],
  secoes: [
    {
      id: 'sec-compreensao-interpretacao',
      nivel: 3,
      titulo: '1. A Arquitetura da Leitura Crítica: Compreensão versus Interpretação',
      conteudo: 'A distinção metodológica entre compreender e interpretar no Cebraspe: comandos explícitos, deduções legítimas, pressupostos e os três desvios clássicos (extrapolação, redução e contradição).',
    },
    {
      id: 'sec-coesao-referencial',
      nivel: 3,
      titulo: '2. Coesão Referencial: Rastreamento Anafórico, Elipses e Pronomes Relativos',
      conteudo: 'O mecanismo das cadeias de referência: pronomes demonstrativos (este vs esse vs aquele), o comportamento sintático do pronome cujo e a elipse como elemento de concisão legislativa.',
    },
    {
      id: 'sec-operadores-argumentativos',
      nivel: 3,
      titulo: '3. Coesão Sequencial e a Mecânica dos Operadores Argumentativos',
      conteudo: 'Conexões de causa, consequência, concessão e adversidade no discurso formal. Como o Cebraspe formula itens de substituição de conectivos e alteração de sentido.',
    },
    {
      id: 'sec-pressupostos-subentendidos',
      nivel: 3,
      titulo: '4. Pressupostos e Subentendidos no Discurso Institucional',
      conteudo: 'Marcas linguísticas explícitas deixadas pelo autor (pressupostos) versus deduções pragmáticas de contexto (subentendidos) segundo Marcuschi e Koch.',
    },
  ],
  teoriaDensaMarkdown: "### Construir a leitura: informação explícita e inferência\n\nCompreender um texto envolve relacionar suas informações, reconhecer a situação comunicativa e construir inferências pertinentes. A separação entre informação explícita e inferida é uma ferramenta de análise; não significa que a leitura literal dispense qualquer conhecimento de língua ou de mundo. O limite da resposta depende do texto e do comando.\n\n**Texto autoral:** “A biblioteca estendeu o atendimento em duas noites por semana. Nos primeiros trinta dias, aumentou a presença de estudantes, mas não houve avaliação da qualidade do auxílio à pesquisa. A equipe propôs manter o projeto por mais um mês antes de decidir sobre sua expansão.”\n\nÉ explícito que o horário foi ampliado em duas noites e que o público estudantil aumentou no período. É sustentado que a decisão definitiva de expansão ainda não foi tomada, pois há proposta de prorrogar o projeto antes de decidir. Não é sustentado que a qualidade piorou ou melhorou: a variável não foi avaliada. Inferir exige ligar premissas, não preencher a lacuna com preferência pessoal.\n\n**Resolução:** “O aumento de presença comprovou melhora do auxílio à pesquisa.” A primeira parte usa dado do texto, mas o predicado atribui conclusão sobre outra variável. O item não se salva por conter palavras verdadeiras do original. Também seria indevido afirmar que o projeto fracassou por não ter avaliação de qualidade: ausência de medição não é demonstração de fracasso.\n\nAo estudar, registre a passagem que decide a resposta e escreva qual foi a relação usada. “Está nas entrelinhas” não é justificativa suficiente. Há inferências de graus diferentes e textos com ironia ou vozes citadas; o exercício deve fornecer contexto bastante para seu julgamento.\n\n### Tese, argumento, exemplo e voz citada\n\nO **tema** é aquilo de que o texto trata. A **tese** é uma posição defendida quando há argumentação. **Argumentos** sustentam essa posição; **exemplos** podem ilustrar ou apoiar, sem se tornarem automaticamente a conclusão principal. Textos informativos podem organizar informação sem defender uma tese controversa no mesmo sentido.\n\n**Texto autoral:** “Alguns gestores afirmam que disponibilizar arquivos basta para democratizar o acesso. Essa visão, porém, ignora barreiras de descrição e de acessibilidade. Um catálogo sem rótulos compreensíveis pode afastar leitores. A política de acesso deve, portanto, integrar infraestrutura e mediação.”\n\nA primeira frase atribui uma visão a alguns gestores. A seguinte a critica. O catálogo é exemplo de barreira, e a conclusão propõe integração. Um item que atribua ao autor a suficiência dos arquivos confunde voz citada com posição assumida. Um item que apresente o catálogo como único tema de todo o texto reduz o alcance do argumento.\n\nA informação introduzida por “portanto” deve ser relacionada às premissas. Isso não garante que todo argumento real seja válido; a prova pode pedir identificar uma posição sem exigir concordar com ela. Reconstruir o argumento e avaliar sua verdade externa são tarefas diferentes.\n\n**Transferência:** altere “alguns gestores afirmam” para “o relatório demonstra”. A mudança altera a fonte e o compromisso discursivo. Preserve atribuições ao reescrever e examine verbos como afirmar, sugerir, negar, supor e comprovar. Eles sinalizam relações e graus de compromisso distintos.\n\n### Coesão referencial: demonstrativos, cujo e elipse\n\n**“A biblioteca digitalizou os relatórios. Essa iniciativa ampliou a consulta remota.”** Essa iniciativa recupera o acontecimento da digitalização. Não é necessário restringir a retomada ao substantivo relatórios. Demonstrativos podem apontar para uma entidade, um conjunto de fatos ou algo que será explicado.\n\nEm correlação explicitamente construída, **este** pode retomar o elemento mais próximo e **aquele** o mais distante: “O catálogo e o repositório têm funções diferentes: este dá acesso aos objetos; aquele descreve e localiza recursos.” Ainda assim, o contexto e os predicados precisam confirmar a referência. Não se deve ensinar proximidade como algoritmo para todo pronome de todo texto.\n\n**Cujo** estabelece relação entre um antecedente e um nome subsequente: “a instituição cujos documentos foram preservados”. A flexão acompanha documentos; não se insere artigo entre cujos e documentos. Se a regência exigir preposição, ela antecede o relativo: “a norma a cujos dispositivos nos referimos”. A preposição não é artigo acrescido depois de cujo.\n\n**Elipse:** “A primeira equipe revisou os títulos; a segunda, os descritores.” O verbo da segunda parte é recuperado do contexto. A vírgula pode assinalar essa omissão. Não invente ação diferente para o segundo grupo sem sinal textual.\n\n**Exemplo resolvido.** “A comissão divulgou o parecer e o relatório; este contém os indicadores.” A leitura correlativa favorece relatório, mas a análise deve confirmar compatibilidade com a continuação e o contexto. Um bom item evita atribuição única quando há duas leituras igualmente plausíveis.\n\n### Coesão sequencial e relações argumentativas\n\nConectivos articulam ideias; sua função precisa ser reconhecida no trecho. **Mas, porém e contudo** podem estabelecer oposição. **Embora, conquanto e ainda que** podem introduzir concessão. **Porque e já que** podem explicar motivo; **portanto e por conseguinte** apresentar conclusão. **Se e caso** introduzem hipóteses em usos condicionais.\n\nCompare “O sistema é rápido, mas exige treinamento” e “Embora o sistema seja rápido, exige treinamento”. É possível preservar os conteúdos principais em uma reorganização, mas é preciso conferir flexão e destaque argumentativo. Não se deve concluir que toda transformação adversativa/concessiva é proibida; tampouco que toda troca local mantém sintaxe e ênfase.\n\n**Pois** apresenta usos diferentes. Em “O atendimento foi suspenso, pois faltou energia”, introduz explicação/motivo. Em “Faltou energia; o atendimento foi, pois, suspenso”, participa da conclusão. A posição e a construção ajudam, mas a análise semântica continua necessária.\n\n**Exemplo resolvido.** “Se o registro estiver completo, poderá ser publicado.” A frase não declara, por si, que todos os registros completos já foram publicados. Condição, possibilidade e realização efetiva são dimensões distintas. Uma assertiva pode usar o mesmo vocabulário e alterar o estatuto do evento.\n\nA aula não atribui percentuais de recorrência à banca. Os exemplos ensinam relações transferíveis. Para cada item, explique quais proposições foram ligadas, por qual relação e com qual alcance, em vez de apenas classificar uma palavra fora da frase.\n\n### Pressuposição, contexto e limites da conclusão\n\n**“A equipe deixou de usar o formulário antigo.”** A construção apresenta cessação de uma prática antes existente. **“A equipe não deixou de usar o formulário antigo”** mantém a referência a uma prática anterior, embora negue sua cessação. Esse teste de negação pode ajudar a analisar pressupostos, sem funcionar como detector infalível de todo caso pragmático.\n\nSubentendidos dependem de contexto e intenção comunicativa. “Está frio aqui” pode funcionar como observação ou pedido indireto para fechar uma janela. Sem o cenário, não se deve impor ao enunciado um pedido inequívoco. A redação de uma questão precisa dar as condições para a inferência solicitada.\n\n**“A equipe ainda não publicou o relatório”** informa ausência de publicação até o momento e pode sinalizar expectativa de publicação. Não permite concluir automaticamente que o trabalho continua sendo executado: ele pode ter sido concluído e aguardar divulgação. Esse é um exemplo de como uma inferência excessiva pode entrar na própria explicação didática.\n\n**Prática:** separe em colunas o fato expresso, o conteúdo de fundo e a hipótese que você acrescentou. Depois procure o elemento que autoriza cada leitura. Quando não houver evidência suficiente, a conclusão não deve ser ensinada como obrigatória.\n\nUm aluno que sabe explicar a diferença entre não medido, não realizado e não esperado terá mais recursos para interpretar novos textos do que quem procura apenas palavras extremas. O estudo por questões deve revelar esse raciocínio no feedback.",
  teoriaDidaticaMarkdown: "### Revisão: provar a leitura\n\nLocalize informação explícita e formule as premissas de cada inferência. Tema, tese, argumento e exemplo são papéis diferentes; distinga a posição do autor de uma voz citada. Para um referente, teste forma e sentido. Cujo concorda com o nome subsequente e não recebe artigo entre ambos; pode haver preposição antes por regência. Conectivos ligam proposições e precisam ser lidos no contexto. Pressupostos e subentendidos têm comportamentos distintos; nenhum teste isolado resolve todos os casos.\n\n**Recupere:** por que ausência de avaliação não demonstra piora? O que muda entre uma condição para publicar e um fato já publicado? O que “ainda não publicou” permite e não permite concluir sobre a redação?\n",
  checkpoints: [
  {
    "id": "chk-13-1-1",
    "pergunta": "Julgue o item sobre a distinção metodológica entre compreensão e interpretação no Cebraspe:",
    "item": "Nas questões em que o enunciado do Cebraspe utiliza a expressão \"Depreende-se do texto que\", é permitido ao candidato validar a assertiva com base em fatos e leis notórias da realidade brasileira, ainda que tais elementos não encontrem respaldo direto ou indireto nas premissas do texto apresentado na prova.",
    "gabarito": "E",
    "justificativa": "Trata-se do erro clássico de EXTRAPOLAÇÃO. A expressão \"depreende-se\" autoriza a realização de inferências lógicas, mas tais inferências devem obrigatoriamente derivar das premissas e evidências textuais fornecidas na prova. O uso de informações extratextuais não mencionadas nem sugeridas torna o item incorreto.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "versao_correta": "Uma inferência deve ser sustentada pelas premissas do texto; fatos externos não bastam para validar uma conclusão sem apoio textual."
  },
  {
    "id": "chk-13-1-2",
    "pergunta": "Julgue o item referente ao emprego dos pronomes relativos segundo Celso Cunha e Lindley Cintra:",
    "item": "Em “A comissão, cujos membros defenderam a urgência, encerrou os trabalhos”, cujos relaciona comissão e membros, concorda com membros e não admite artigo entre o relativo e esse substantivo.",
    "gabarito": "C",
    "justificativa": "Cujos estabelece a relação de pertença e acompanha membros em masculino plural. A sequência cujos os membros seria inadequada. Isso não impede preposição antes de cujo quando a regência exigir, como em a cujos dispositivos nos referimos.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula."
  },
  {
    "id": "chk-13-1-3",
    "pergunta": "Julgue a assertiva referente ao valor sintático e semântico dos conectivos oracionais:",
    "item": "A substituição da conjunção \"conquanto\" por \"embora\" no período \"Conquanto houvesse divergência regimental, o parecer foi aprovado\" preservaria a correção gramatical e os sentidos originais do texto, uma vez que ambas as conjunções possuem valor estritamente concessivo e regem o modo subjuntivo.",
    "gabarito": "C",
    "justificativa": "No período apresentado, conquanto e embora introduzem a concessão e combinam com houvesse. A substituição contextual preserva a relação e a construção; não se estabelece uma equivalência universal para todos os usos da língua.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula."
  },
  {
    "id": "rt-13-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No texto do horário ampliado, a ausência de avaliação da qualidade comprova que a qualidade do auxílio à pesquisa piorou.",
    "gabarito": "E",
    "justificativa": "O texto informa que a variável não foi avaliada. Não medir não demonstra melhora nem piora. A assertiva transforma limite do estudo em resultado negativo.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)",
    "habilidade": "aplicar",
    "versao_correta": "A qualidade do auxílio à pesquisa não foi avaliada no período descrito.",
    "contexto": "A biblioteca estendeu o atendimento em duas noites por semana. Nos primeiros trinta dias, aumentou a presença de estudantes, mas não houve avaliação da qualidade do auxílio à pesquisa. A equipe propôs manter o projeto por mais um mês antes de decidir sobre sua expansão."
  },
  {
    "id": "rt-13-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No texto dos arquivos online, a suficiência da simples disponibilização é uma posição citada e criticada, não a conclusão defendida pelo autor.",
    "gabarito": "C",
    "justificativa": "A abertura atribui a posição a alguns gestores. Porém introduz a crítica, e a conclusão integra infraestrutura e mediação. Identificar a voz é essencial ao julgamento.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)",
    "habilidade": "aplicar",
    "contexto": "Alguns gestores afirmam que disponibilizar arquivos basta para democratizar o acesso. Essa visão, porém, ignora barreiras de descrição e de acessibilidade. Um catálogo sem rótulos compreensíveis pode afastar leitores. A política de acesso deve, portanto, integrar infraestrutura e mediação."
  },
  {
    "id": "rt-13-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na expressão “a norma a cujos dispositivos nos referimos”, a preposição antes de cujos pode ser exigida pela regência de referir-se.",
    "gabarito": "C",
    "justificativa": "Referir-se a exige a preposição. Cujos continua concordando com dispositivos e não recebe artigo entre o relativo e esse nome. Preposição antes e artigo depois são situações diferentes.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "“O registro poderá ser publicado se estiver completo” informa que todo registro completo já foi publicado.",
    "gabarito": "E",
    "justificativa": "A condição e o modal de possibilidade não afirmam realização passada. Já foi publicado acrescenta temporalidade e efetividade ausentes.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)",
    "habilidade": "aplicar",
    "versao_correta": "A frase condiciona uma possibilidade de publicação, sem declarar que ela já ocorreu."
  },
  {
    "id": "rt-13-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A frase “A equipe ainda não publicou o relatório” garante que o relatório continua em redação.",
    "gabarito": "E",
    "justificativa": "A falta de publicação é compatível com redação em curso ou com documento concluído que aguarda divulgação. A conclusão sobre redação acrescenta dado não fornecido.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 1: Compreensão e Tipologias Textuais)",
    "habilidade": "aplicar",
    "versao_correta": "A frase informa ausência de publicação até o momento, sem garantir o estágio de redação."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-13-1-fonte-mrpr",
      "nome": "Manual de Redação da Presidência da República, 3ª ed. (2018)",
      "ano": "Referência de consulta",
      "obraPrincipal": "Manual de Redação da Presidência da República, 3ª ed. (2018)",
      "ideiaChave": "Coesão/coerência, ambiguidade, sintaxe, regência e pontuação. Exemplos de aplicação autorais.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-13-1-3",
      "afirmacao": "Na expressão “a norma a cujos dispositivos nos referimos”, a preposição antes de cujos pode ser exigida pela regência de referir-se.",
      "gabarito": "C",
      "porQue": "Referir-se a exige a preposição. Cujos continua concordando com dispositivos e não recebe artigo entre o relativo e esse nome. Preposição antes e artigo depois são situações diferentes."
    },
    {
      "id": "memoria-rt-13-1-4",
      "afirmacao": "“O registro poderá ser publicado se estiver completo” informa que todo registro completo já foi publicado.",
      "gabarito": "E",
      "porQue": "A condição e o modal de possibilidade não afirmam realização passada. Já foi publicado acrescenta temporalidade e efetividade ausentes."
    },
    {
      "id": "memoria-rt-13-1-5",
      "afirmacao": "A frase “A equipe ainda não publicou o relatório” garante que o relatório continua em redação.",
      "gabarito": "E",
      "porQue": "A falta de publicação é compatível com redação em curso ou com documento concluído que aguarda divulgação. A conclusão sobre redação acrescenta dado não fornecido."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-13-1-bloco-1",
    "titulo": "Construir a leitura: informação explícita e inferência",
    "objetivos": [
      "Separar o que foi dito, o que se pode concluir e uma hipótese acrescentada."
    ],
    "conteudo": "Compreender um texto envolve relacionar suas informações, reconhecer a situação comunicativa e construir inferências pertinentes. A separação entre informação explícita e inferida é uma ferramenta de análise; não significa que a leitura literal dispense qualquer conhecimento de língua ou de mundo. O limite da resposta depende do texto e do comando.\n\n**Texto autoral:** “A biblioteca estendeu o atendimento em duas noites por semana. Nos primeiros trinta dias, aumentou a presença de estudantes, mas não houve avaliação da qualidade do auxílio à pesquisa. A equipe propôs manter o projeto por mais um mês antes de decidir sobre sua expansão.”\n\nÉ explícito que o horário foi ampliado em duas noites e que o público estudantil aumentou no período. É sustentado que a decisão definitiva de expansão ainda não foi tomada, pois há proposta de prorrogar o projeto antes de decidir. Não é sustentado que a qualidade piorou ou melhorou: a variável não foi avaliada. Inferir exige ligar premissas, não preencher a lacuna com preferência pessoal.\n\n**Resolução:** “O aumento de presença comprovou melhora do auxílio à pesquisa.” A primeira parte usa dado do texto, mas o predicado atribui conclusão sobre outra variável. O item não se salva por conter palavras verdadeiras do original. Também seria indevido afirmar que o projeto fracassou por não ter avaliação de qualidade: ausência de medição não é demonstração de fracasso.\n\nAo estudar, registre a passagem que decide a resposta e escreva qual foi a relação usada. “Está nas entrelinhas” não é justificativa suficiente. Há inferências de graus diferentes e textos com ironia ou vozes citadas; o exercício deve fornecer contexto bastante para seu julgamento.",
    "checkpointIds": [
      "chk-13-1-1",
      "rt-13-1-1"
    ]
  },
  {
    "id": "sub-13-1-bloco-2",
    "titulo": "Tese, argumento, exemplo e voz citada",
    "objetivos": [
      "Reconhecer quem assume cada posição e o papel de um trecho."
    ],
    "conteudo": "O **tema** é aquilo de que o texto trata. A **tese** é uma posição defendida quando há argumentação. **Argumentos** sustentam essa posição; **exemplos** podem ilustrar ou apoiar, sem se tornarem automaticamente a conclusão principal. Textos informativos podem organizar informação sem defender uma tese controversa no mesmo sentido.\n\n**Texto autoral:** “Alguns gestores afirmam que disponibilizar arquivos basta para democratizar o acesso. Essa visão, porém, ignora barreiras de descrição e de acessibilidade. Um catálogo sem rótulos compreensíveis pode afastar leitores. A política de acesso deve, portanto, integrar infraestrutura e mediação.”\n\nA primeira frase atribui uma visão a alguns gestores. A seguinte a critica. O catálogo é exemplo de barreira, e a conclusão propõe integração. Um item que atribua ao autor a suficiência dos arquivos confunde voz citada com posição assumida. Um item que apresente o catálogo como único tema de todo o texto reduz o alcance do argumento.\n\nA informação introduzida por “portanto” deve ser relacionada às premissas. Isso não garante que todo argumento real seja válido; a prova pode pedir identificar uma posição sem exigir concordar com ela. Reconstruir o argumento e avaliar sua verdade externa são tarefas diferentes.\n\n**Transferência:** altere “alguns gestores afirmam” para “o relatório demonstra”. A mudança altera a fonte e o compromisso discursivo. Preserve atribuições ao reescrever e examine verbos como afirmar, sugerir, negar, supor e comprovar. Eles sinalizam relações e graus de compromisso distintos.",
    "checkpointIds": [
      "rt-13-1-2"
    ]
  },
  {
    "id": "sub-13-1-bloco-3",
    "titulo": "Coesão referencial: demonstrativos, cujo e elipse",
    "objetivos": [
      "Reconstruir referentes por compatibilidade e preservar relações de pertença."
    ],
    "conteudo": "**“A biblioteca digitalizou os relatórios. Essa iniciativa ampliou a consulta remota.”** Essa iniciativa recupera o acontecimento da digitalização. Não é necessário restringir a retomada ao substantivo relatórios. Demonstrativos podem apontar para uma entidade, um conjunto de fatos ou algo que será explicado.\n\nEm correlação explicitamente construída, **este** pode retomar o elemento mais próximo e **aquele** o mais distante: “O catálogo e o repositório têm funções diferentes: este dá acesso aos objetos; aquele descreve e localiza recursos.” Ainda assim, o contexto e os predicados precisam confirmar a referência. Não se deve ensinar proximidade como algoritmo para todo pronome de todo texto.\n\n**Cujo** estabelece relação entre um antecedente e um nome subsequente: “a instituição cujos documentos foram preservados”. A flexão acompanha documentos; não se insere artigo entre cujos e documentos. Se a regência exigir preposição, ela antecede o relativo: “a norma a cujos dispositivos nos referimos”. A preposição não é artigo acrescido depois de cujo.\n\n**Elipse:** “A primeira equipe revisou os títulos; a segunda, os descritores.” O verbo da segunda parte é recuperado do contexto. A vírgula pode assinalar essa omissão. Não invente ação diferente para o segundo grupo sem sinal textual.\n\n**Exemplo resolvido.** “A comissão divulgou o parecer e o relatório; este contém os indicadores.” A leitura correlativa favorece relatório, mas a análise deve confirmar compatibilidade com a continuação e o contexto. Um bom item evita atribuição única quando há duas leituras igualmente plausíveis.",
    "checkpointIds": [
      "chk-13-1-2",
      "rt-13-1-3"
    ]
  },
  {
    "id": "sub-13-1-bloco-4",
    "titulo": "Coesão sequencial e relações argumentativas",
    "objetivos": [
      "Distinguir oposição, concessão, causa, conclusão e condição."
    ],
    "conteudo": "Conectivos articulam ideias; sua função precisa ser reconhecida no trecho. **Mas, porém e contudo** podem estabelecer oposição. **Embora, conquanto e ainda que** podem introduzir concessão. **Porque e já que** podem explicar motivo; **portanto e por conseguinte** apresentar conclusão. **Se e caso** introduzem hipóteses em usos condicionais.\n\nCompare “O sistema é rápido, mas exige treinamento” e “Embora o sistema seja rápido, exige treinamento”. É possível preservar os conteúdos principais em uma reorganização, mas é preciso conferir flexão e destaque argumentativo. Não se deve concluir que toda transformação adversativa/concessiva é proibida; tampouco que toda troca local mantém sintaxe e ênfase.\n\n**Pois** apresenta usos diferentes. Em “O atendimento foi suspenso, pois faltou energia”, introduz explicação/motivo. Em “Faltou energia; o atendimento foi, pois, suspenso”, participa da conclusão. A posição e a construção ajudam, mas a análise semântica continua necessária.\n\n**Exemplo resolvido.** “Se o registro estiver completo, poderá ser publicado.” A frase não declara, por si, que todos os registros completos já foram publicados. Condição, possibilidade e realização efetiva são dimensões distintas. Uma assertiva pode usar o mesmo vocabulário e alterar o estatuto do evento.\n\nA aula não atribui percentuais de recorrência à banca. Os exemplos ensinam relações transferíveis. Para cada item, explique quais proposições foram ligadas, por qual relação e com qual alcance, em vez de apenas classificar uma palavra fora da frase.",
    "checkpointIds": [
      "chk-13-1-3",
      "rt-13-1-4"
    ]
  },
  {
    "id": "sub-13-1-bloco-5",
    "titulo": "Pressuposição, contexto e limites da conclusão",
    "objetivos": [
      "Reconhecer informação de fundo sem transformar todo implícito em certeza."
    ],
    "conteudo": "**“A equipe deixou de usar o formulário antigo.”** A construção apresenta cessação de uma prática antes existente. **“A equipe não deixou de usar o formulário antigo”** mantém a referência a uma prática anterior, embora negue sua cessação. Esse teste de negação pode ajudar a analisar pressupostos, sem funcionar como detector infalível de todo caso pragmático.\n\nSubentendidos dependem de contexto e intenção comunicativa. “Está frio aqui” pode funcionar como observação ou pedido indireto para fechar uma janela. Sem o cenário, não se deve impor ao enunciado um pedido inequívoco. A redação de uma questão precisa dar as condições para a inferência solicitada.\n\n**“A equipe ainda não publicou o relatório”** informa ausência de publicação até o momento e pode sinalizar expectativa de publicação. Não permite concluir automaticamente que o trabalho continua sendo executado: ele pode ter sido concluído e aguardar divulgação. Esse é um exemplo de como uma inferência excessiva pode entrar na própria explicação didática.\n\n**Prática:** separe em colunas o fato expresso, o conteúdo de fundo e a hipótese que você acrescentou. Depois procure o elemento que autoriza cada leitura. Quando não houver evidência suficiente, a conclusão não deve ser ensinada como obrigatória.\n\nUm aluno que sabe explicar a diferença entre não medido, não realizado e não esperado terá mais recursos para interpretar novos textos do que quem procura apenas palavras extremas. O estudo por questões deve revelar esse raciocínio no feedback.",
    "checkpointIds": [
      "rt-13-1-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "mrpr",
    "titulo": "Manual de Redação da Presidência da República, 3ª ed. (2018)",
    "localizador": "Coesão/coerência, ambiguidade, sintaxe, regência e pontuação. Exemplos de aplicação autorais.",
    "url": "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf"
  }
],
};
