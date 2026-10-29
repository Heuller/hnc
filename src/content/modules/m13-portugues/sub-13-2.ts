import type { ModuloFilho } from '../../../domain/types';

export const submodulo132: ModuloFilho = {
  id: 'sub-13-2',
  numero: '13.2',
  editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)',
  preRequisitos: ["sub-13-1"],
  titulo: 'A Arte da Reescritura e Paráfrase no Padrão Cebraspe',
  antesDeLer: [
    {
      termo: 'Reescritura e Paráfrase no Padrão Cebraspe',
      definicao: 'Tipo de item que propõe alteração da ordem, vocabulário ou pontuação de um trecho exigindo avaliação de sentido e correção gramatical.',
      exemploBiblioteca: 'Reescrever despachos legislativos garantindo clareza, concisão e estrita observância à norma culta.',
    },
    {
      termo: 'Sentido Original vs. Correção Gramatical',
      definicao: 'Distingo fundamental do Cebraspe: uma proposta de reescritura pode ser gramaticalmente impecável, mas alterar o sentido pretendido pelo autor.',
      exemploBiblioteca: 'Trocar \'todos os livros que continham erros\' por \'todos os livros, que continham erros\' (restritiva vs. explicativa: altera o sentido).',
    },
    {
      termo: 'Inversão de Termos da Oração',
      definicao: 'Deslocamento de adjuntos adverbiais ou complementos para o início da frase com exigência de vírgulas obrigatórias ou facultativas.',
      exemploBiblioteca: 'Avaliar se o deslocamento do adjunto adverbial de tempo para o início do período exige vírgula de isolamento.',
    },
    {
      termo: 'Equivalência Semântica de Conjunções',
      definicao: 'Substituição de conectivos mantendo a mesma classe lógica (ex.: \'conquanto\' por \'embora\'; \'porquanto\' por \'porque\').',
      exemploBiblioteca: 'Cuidado com \'porquanto\' (explicativa/causal) vs. \'conquanto\' (concessiva), armadilha clássica da banca Cebraspe.',
    },
  ],
  descricaoCurta:
    'A metodologia dos três filtros (Correção Gramatical vs Sentido Original vs Coerência Textual), desdobramento de orações reduzidas, transposição rigorosa de vozes verbais e as sutis armadilhas de modalidade epistêmica.',
  tempoEstimadoMinutos: 11,
  autoresChave: [
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Othon Moacyr Garcia (Comunicação em Prosa Moderna)',
    'Provas Oficiais Cebraspe - Câmara dos Deputados e Senado Federal',
  ],
  alertasCebraspe: [
  "Leia o comando: preservar correção e preservar sentido são exigências distintas.",
  "Tempo, aspecto e modalidade não devem ser trocados por semelhança lexical.",
  "A reescrita deve conservar as ressalvas pertinentes; não introduza conclusão ou precisão ausentes."
],
  quadroComparativo: {
    titulo: 'Matriz Cebraspe de Reescritura: O Teste dos Três Filtros Decisórios',
    colunas: [
      'Tipo de Reescritura',
      'Estrutura Original',
      'Proposta da Banca Cebraspe',
      'Correção Gramatical',
      'Sentidos Originais',
      'Gabarito Oficial',
    ],
    linhas: [
      [
        'Transposição de Voz (Tempo Alterado)',
        'A comissão analisou os documentos com presteza.',
        'Os documentos eram analisados pela comissão com presteza.',
        '✅ Mantida (Sintaxe correta)',
        '❌ Alterado (Perfeito pontual vs Imperfeito contínuo)',
        'ERRADO',
      ],
      [
        'Transposição de Voz (Tempo Preservado)',
        'O relator apresentou o parecer na sessão matutina.',
        'O parecer foi apresentado pelo relator na sessão matutina.',
        '✅ Mantida',
        '✅ Mantido (Identidade semântica plena)',
        'CERTO',
      ],
      [
        'Modificação de Modalidade Epistêmica',
        'A alteração legislativa pode suscitar controvérsias.',
        'A alteração legislativa suscitará controvérsias.',
        '✅ Mantida',
        '❌ Alterado (Possibilidade convertida em certeza futura)',
        'ERRADO',
      ],
      [
        'Desdobramento de Oração Reduzida',
        'Ao término dos debates, o presidente encerrou a sessão.',
        'Logo que os debates terminaram, o presidente encerrou a sessão.',
        '✅ Mantida',
        '✅ Mantido (Equivalência temporal imediata preservada)',
        'CERTO',
      ],
      [
        'Supressão de Restritor / Quantificador',
        'Grande parte dos servidores aderiu ao novo protocolo.',
        'Os servidores aderiram ao novo protocolo.',
        '✅ Mantida',
        '❌ Alterado (Generalização indevida: de maioria para totalidade)',
        'ERRADO',
      ],
    ],
  },
  secoes: [
    {
      id: 'sec-tres-filtros',
      nivel: 3,
      titulo: '1. O Protocolo dos Três Filtros: Correção, Sentido e Coerência',
      conteudo:
        'A distinção técnica entre preservar a norma culta (correção), manter a verdade informativa das proposições (sentido) e garantir a lógica interna do parágrafo (coerência).',
    },
    {
      id: 'sec-vozes-verbais',
      nivel: 3,
      titulo: '2. Transposição Rigorosa de Vozes Verbais',
      conteudo:
        'A conversão sistemática entre voz ativa, passiva analítica e passiva pronominal com preservação estrita do aspecto e tempo verbal segundo Celso Cunha e Lindley Cintra.',
    },
    {
      id: 'sec-oracoes-reduzidas',
      nivel: 3,
      titulo: '3. Desdobramento de Orações Reduzidas e Nexos Subordinativos',
      conteudo:
        'A passagem de infinitivos, gerúndios e particípios para orações desenvolvidas. O rastreamento dos valores adverbiais temporais, causais, concessivos e finais.',
    },
    {
      id: 'sec-modalidade-epistemica',
      nivel: 3,
      titulo: '4. Modalidade Epistêmica e Alterações Semânticas Sutis',
      conteudo:
        'O impacto de verbos modais (poder, dever), quantificadores partitivos e advérbios asseverativos na fidelidade ao texto original.',
    },
  ],
  teoriaDensaMarkdown: "### Reescrita: três perguntas e o comando da questão\n\nReescrever pode mudar a estrutura e preservar informação relevante; também pode produzir frase correta que afirma algo diferente. Antes de julgar, leia o comando: pede correção? Preservação de sentido? Referência? Coerência com o restante? Quando há exigência conjunta, todos os critérios precisam ser satisfeitos.\n\n**“A revisão pode reduzir inconsistências.”** A nova frase “A revisão eliminará inconsistências” é gramatical, mas muda modalidade e resultado. Possibilidade de redução não é previsão categórica de eliminação. Já “É possível que a revisão reduza inconsistências” pode preservar o núcleo modal no contexto apresentado.\n\n**Correção** envolve construção conforme a norma-padrão pertinente. **Sentido** envolve participantes, evento, modalidade, tempo, quantidade, condição e relações. **Coerência contextual** pede compatibilidade com o encadeamento. Não se deve tratar a frase nova como isolada se o enunciado exige manter os sentidos do parágrafo.\n\nNão há porcentagem de incidência de reescrita estimada neste capítulo. O método serve para examinar a operação concreta. Uma reescrita não precisa reproduzir cada palavra para ser válida; o aluno deve conseguir explicar o que foi mantido e o que foi alterado.\n\n**Exemplo:** “Somente a equipe técnica revisou o arquivo” não equivale a “A equipe técnica revisou somente o arquivo”. No primeiro, restringe-se quem revisou; no segundo, o objeto da revisão. A posição do operador afeta seu escopo, embora as palavras sejam quase idênticas.\n\n### Vozes verbais: preservar participantes e relações temporais\n\nEm **“A equipe revisou os registros”**, a equipe é sujeito e os registros, objeto direto. Em **“Os registros foram revisados pela equipe”**, registros passa a sujeito paciente; a locução concorda com ele, e a equipe aparece como agente da passiva. O acontecimento principal pode ser preservado, mas a organização da informação muda.\n\nA conversão precisa respeitar tempo, modo e aspecto no contexto. **Revisou** corresponde, no exemplo simples, a **foram revisados**; **revisava** pede outra relação aspectual; **revisará** aponta para posterioridade. Não substitua “foi concluída” por “era concluída” afirmando identidade automática de sentido. O perfeito e o imperfeito podem apresentar o evento de maneiras diferentes.\n\nNem todo verbo admite a mesma transformação. É necessário haver estrutura compatível com a passiva e preservar a acepção. Inserir ser + particípio em qualquer oração pode produzir outra relação ou construção inadequada. Locuções verbais também exigem atenção: “pode revisar” e “pode ser revisado” mantêm modalidade somente se os participantes e a estrutura forem ajustados.\n\n**Exemplo resolvido:** “O relator elaborou o parecer” → “O parecer foi elaborado pelo relator”. O objeto vira sujeito; o verbo mantém o evento no passado apresentado; o agente continua identificado. A transformação não prova que o foco discursivo seja idêntico em todo contexto, mas preserva a informação básica solicitada no exercício.\n\nQuando o agente é omitido na passiva, examine se a tarefa exige manter sua identificação. “O parecer foi elaborado” não fornece, isoladamente, quem o fez. Pode ser suficiente em um contexto e insuficiente em outro.\n\n### Orações reduzidas: explicitar a relação sem inventá-la\n\nOrações reduzidas usam formas nominais do verbo. Desenvolvê-las requer identificar sua relação com a principal, acrescentar elemento de ligação compatível e flexionar o verbo. O fato de aparecer gerúndio não determina, por si, causa ou tempo; o contexto precisa sustentar a relação.\n\n**“Ao identificar o erro, a equipe interrompeu a publicação.”** A estrutura admite leitura temporal. “Quando identificou o erro, a equipe interrompeu a publicação” explicita essa relação. “Se identificasse o erro, a equipe interromperia a publicação” transforma o fato narrado em hipótese e muda a construção temporal/modal.\n\n**“Concluída a revisão, o relatório foi enviado.”** Uma formulação como “Depois que a revisão foi concluída, o relatório foi enviado” pode preservar a sequência. Não é necessário inserir “imediatamente” se esse intervalo não está assegurado. A reescrita não deve acrescentar precisão temporal inexistente.\n\n**Gerúndio:** “A equipe respondeu ao usuário, indicando as fontes consultadas.” A segunda parte pode caracterizar o modo ou uma ação associada à resposta. Desenvolver automaticamente como “porque indicou” impõe causa sem verificá-la. Um comentário correto identifica as possibilidades e delimita a leitura utilizada no exercício.\n\n**Ambiguidade:** “Ao entrar na sala, o relatório foi entregue ao pesquisador” deixa dúvida sobre o sujeito da ação de entrar. Uma reescrita pode precisar explicitar quem entrou. Não atribua a ação ao relatório apenas porque ele é sujeito da principal; reconheça a inadequação ou ambiguidade da construção e a exigência da tarefa.\n\n### Substituições: quantificadores, adjetivos e relações de causa\n\n**Alguns, todos, nenhum, apenas, até e pelo menos** delimitam conjuntos e quantidades. Trocar alguns por todos costuma ampliar uma proposição; se o contexto já define um conjunto específico, a análise pode ser diferente. Não interprete todo artigo definido como quantificador universal sobre todos os objetos existentes.\n\nA posição de um adjetivo pode mudar o sentido: **“um simples procedimento”** pode indicar que se trata apenas de um procedimento; **“um procedimento simples”** destaca sua falta de complexidade. Contudo, não há uma regra de que todo adjetivo antes seja subjetivo e todo adjetivo depois seja objetivo. Teste a expressão concreta e o contexto.\n\n**Causa e concessão:** “A publicação foi adiada porque faltavam dados” atribui motivo. “A publicação foi adiada, embora houvesse dados” concede a existência de dados como fato que poderia contrariar uma expectativa. Trocar conectivos muda a relação, mesmo que a concordância verbal seja ajustada. Não são apenas estilos de dizer a mesma coisa.\n\nA supressão de uma ressalva também muda alcance. “A consulta é permitida, salvo restrição legal” não equivale a “A consulta é permitida em qualquer situação”. O comentário precisa recuperar a condição retirada, em vez de se limitar a apontar a palavra qualquer.\n\n**Prática:** forme pares de frases e escreva uma frase curta explicando qual dimensão mudou: conjunto, intensidade, condição, agente ou tempo. Isso produz um diagnóstico transferível ao próximo item.\n\n### Oficina de reescrita: o parágrafo como unidade\n\n> A equipe concluiu a descrição de parte do acervo. Embora o novo catálogo possa facilitar a localização dos documentos, a instituição ainda precisa avaliar sua acessibilidade. Por isso, a versão anterior continuará disponível durante a transição.\n\nTexto autoral. **Proposta 1:** “Parte do acervo teve sua descrição concluída pela equipe.” A reformulação preserva o conjunto parcial e os participantes no contexto. **Proposta 2:** “O acervo foi integralmente descrito.” Ela amplia parte para totalidade e não é equivalente. **Proposta 3:** “O novo catálogo facilitará toda consulta e já teve sua acessibilidade comprovada.” Ela altera modalidade e inverte o estado da avaliação.\n\n**Proposta 4:** “A versão anterior será mantida disponível enquanto ocorrer a transição.” Pode preservar a informação de continuidade no contexto. A proposta deve ser avaliada em relação à frase, sem exigir que uma paráfrase repita continuar literalmente. **Proposta 5:** “A versão anterior será mantida porque a acessibilidade do novo catálogo foi rejeitada.” A justificativa não foi dada: necessidade de avaliar não significa reprovação já ocorrida.\n\nAo comentar uma opção correta, explique o que foi preservado. Ao comentar uma incorreta, apresente a diferença e, quando útil, uma correção mínima. O aluno que acertou também precisa enxergar o caminho, sobretudo quando seu julgamento resultou de impressão geral.\n\n**Recupere sem consulta:** liste as três ressalvas do parágrafo: descrição parcial, benefício possível e acessibilidade ainda a avaliar. Em seguida, crie uma frase que preserve as três e confira se não introduziu uma conclusão definitiva.",
  teoriaDidaticaMarkdown: "### Revisão: conferir o que a reescrita preserva\n\nLeia os critérios do comando separadamente. Uma frase pode ser gramatical e mudar o sentido. Na passiva, confira participantes, transitividade, concordância, tempo e modalidade. Desenvolva reduzidas conforme a relação contextual; gerúndio não é sempre causa e sequência não fixa automaticamente imediatismo. Quantificadores, operadores e condições têm escopo. A posição do adjetivo pode importar, mas não cria regra universal. Use o parágrafo para decidir se a opção preserva o conteúdo relevante.\n\n**Recupere:** por que uma descrição parcial não pode virar integral numa paráfrase? Quando a omissão do agente numa passiva pode importar? Por que “ainda será avaliado” não é “já foi reprovado”?\n",
  checkpoints: [
  {
    "id": "chk-13-2-1",
    "pergunta": "Julgue o item quanto à preservação da correção gramatical e dos sentidos originais na transposição de vozes verbais:",
    "item": "A substituição da oração \"O relator elaborou o parecer conclusivo sobre o projeto de lei\" por \"O parecer conclusivo sobre o projeto de lei foi elaborado pelo relator\" preserva a correção gramatical e as informações originais do texto.",
    "gabarito": "C",
    "justificativa": "A transformação altera a voz e ajusta o sujeito, mantendo o evento de elaborar, a identificação do relator e o parecer. No contexto do exercício, a relação temporal básica também é preservada. Não se atribui página de gramática sem edição conferida.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula."
  },
  {
    "id": "chk-13-2-2",
    "pergunta": "Julgue a assertiva referente à alteração de modalidade epistêmica em itens de paráfrase do Cebraspe:",
    "item": "No trecho \"A aprovação célere da reforma tributária pode impulsionar os investimentos do setor produtivo\", a substituição de \"pode impulsionar\" por \"impulsionará\" manteria a correção gramatical e os sentidos originais do texto, uma vez que ambas as construções expressam a eficácia futura da norma.",
    "gabarito": "E",
    "justificativa": "A troca conserva uma construção gramatical possível, mas retira a modalização explícita de possibilidade em pode impulsionar. A projeção no futuro não é equivalente à mesma formulação cautelosa no contexto dado. É desnecessário afirmar que toda forma futura representa certeza absoluta.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula."
  },
  {
    "id": "chk-13-2-3",
    "pergunta": "Julgue a assertiva sobre o desdobramento de orações reduzidas e a manutenção do nexo lógico:",
    "item": "No período “Ao constatar divergência regimental, o presidente suspendeu os trabalhos”, a formulação “Quando constatou divergência regimental, o presidente suspendeu os trabalhos” preserva a relação temporal apresentada.",
    "gabarito": "C",
    "justificativa": "A oração reduzida com ao constatar é desenvolvida por quando constatou no contexto narrativo dado. A reescrita não acrescenta uma condição hipotética nem exige afirmar uma precisão temporal absoluta que a frase não fornece.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula."
  },
  {
    "id": "rt-13-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "“Somente a equipe revisou os arquivos” e “A equipe revisou somente os arquivos” restringem necessariamente o mesmo elemento.",
    "gabarito": "E",
    "justificativa": "Na primeira, somente incide sobre a equipe; na segunda, sobre os arquivos. A posição muda o escopo no contexto dado.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)",
    "habilidade": "aplicar",
    "versao_correta": "As frases podem restringir elementos diferentes: agente e objeto."
  },
  {
    "id": "rt-13-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A conversão “Os registros foram revisados pela equipe” preserva, em relação a “A equipe revisou os registros”, a relação básica entre quem revisou e o que foi revisado.",
    "gabarito": "C",
    "justificativa": "A passiva reorganiza sujeito e agente, preservando a relação de revisão e a identificação dos participantes. O foco discursivo pode mudar sem invalidar essa informação básica.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "De “Concluída a revisão, o relatório foi enviado” decorre obrigatoriamente que o envio ocorreu no mesmo segundo da conclusão.",
    "gabarito": "E",
    "justificativa": "A sequência não fixa intervalo de precisão tão específico. Inserir imediatamente ou no mesmo segundo acrescenta uma condição temporal não assegurada.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)",
    "habilidade": "aplicar",
    "versao_correta": "A construção apresenta a conclusão como anterior ao envio, sem fixar esse intervalo exato."
  },
  {
    "id": "rt-13-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em um contexto usual, “um procedimento simples” e “um simples procedimento” podem apresentar sentidos diferentes, sem que isso estabeleça uma lei sobre todo adjetivo.",
    "gabarito": "C",
    "justificativa": "A relação entre posição e sentido depende do adjetivo e da expressão. O exemplo admite diferença, mas não autoriza universalizar subjetividade e objetividade por posição.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No texto da oficina, dizer que a acessibilidade ainda precisa ser avaliada equivale a afirmar que ela já foi reprovada.",
    "gabarito": "E",
    "justificativa": "Necessidade de avaliação e resultado negativo de uma avaliação são estados diferentes. A reprovação foi acrescentada pela assertiva.",
    "fonte": "Manual de Redação da Presidência da República (2018), seções 3.4, 11.4–11.10; análise dos textos autorais desta aula.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Item 2: Coesão, Coerência e Reescrita)",
    "habilidade": "aplicar",
    "versao_correta": "O texto registra uma avaliação ainda necessária, sem fornecer resultado de reprovação."
  }
],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-13-2-1',
        periodo: '1967',
        disciplina: 'Comunicação e Estilística',
        focoPrincipal: 'Estrutura da Frase e Paráfrase Analítica na Prosa Moderna',
        figuraChave: 'Othon Moacyr Garcia',
      },
      {
        id: 'tm-13-2-2',
        periodo: '2008',
        disciplina: 'Sintaxe Funcional',
        focoPrincipal: 'Transposição de Vozes Verbais e Desdobramento de Orações Reduzidas',
        figuraChave: 'Celso Cunha & Lindley Cintra',
      },
    ],
    autores: [
      {
        id: 'aut-13-2-1',
        nome: 'Othon Moacyr Garcia',
        ano: 1967,
        obraPrincipal: 'Comunicação em Prosa Moderna',
        ideiaChave:
          'A paráfrase fiel requer a preservação exata dos valores modais, da ênfase tópica e da hierarquia informativa entre ideias principais e secundárias.',
        chipPegadinha: 'Modalidade Epistêmica',
      },
      {
        id: 'aut-13-2-2',
        nome: 'Evanildo Bechara',
        ano: 2009,
        obraPrincipal: 'Moderna Gramática Portuguesa (37ª Ed.)',
        ideiaChave:
          'O desdobramento de orações reduzidas exige compatibilização morfológica de tempo e modo verbal, preservando a relação subordinativa de origem.',
        chipPegadinha: 'Desdobramento de Reduzidas',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-2-1',
        afirmacao:
          'A frase "O relatório foi lido com atenção pelo secretário" expressa a mesma relação temporal e aspectual que "O relatório era lido com atenção pelo secretário".',
        gabarito: 'E',
        porQue:
          '"Foi lido" expressa pretérito perfeito (fato concluído e acabado), enquanto "era lido" expressa pretérito imperfeito (fato habitual ou em curso no passado). A troca altera o sentido.',
      },
      {
        id: 'peg-13-2-2',
        afirmacao:
          'A substituição de "a maioria dos projetos" por "todos os projetos" mantém os sentidos originais quando o contexto tratar da atividade ordinária do plenário.',
        gabarito: 'E',
        porQue:
          'Trata-se de generalização indevida. "A maioria" é quantificador partitivo (admite exceções), ao passo que "todos" é quantificador universal totalizador.',
      },
      {
        id: 'peg-13-2-3',
        afirmacao:
          'Na transposição da voz ativa para a passiva analítica, o agente da passiva deve vir obrigatoriamente precedido da preposição "por" (ou de sua contração).',
        gabarito: 'C',
        porQue:
          'Segundo Cunha & Cintra (p. 386), o agente da passiva é introduzido ordinariamente pela preposição "por" (por, pelo, pela) e, mais raramente em construções literárias arcaicas, pela preposição "de".',
      },
    ],
  },

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-13-2-bloco-1",
    "titulo": "Reescrita: três perguntas e o comando da questão",
    "objetivos": [
      "Separar correção gramatical, sentido e adequação ao encadeamento."
    ],
    "conteudo": "Reescrever pode mudar a estrutura e preservar informação relevante; também pode produzir frase correta que afirma algo diferente. Antes de julgar, leia o comando: pede correção? Preservação de sentido? Referência? Coerência com o restante? Quando há exigência conjunta, todos os critérios precisam ser satisfeitos.\n\n**“A revisão pode reduzir inconsistências.”** A nova frase “A revisão eliminará inconsistências” é gramatical, mas muda modalidade e resultado. Possibilidade de redução não é previsão categórica de eliminação. Já “É possível que a revisão reduza inconsistências” pode preservar o núcleo modal no contexto apresentado.\n\n**Correção** envolve construção conforme a norma-padrão pertinente. **Sentido** envolve participantes, evento, modalidade, tempo, quantidade, condição e relações. **Coerência contextual** pede compatibilidade com o encadeamento. Não se deve tratar a frase nova como isolada se o enunciado exige manter os sentidos do parágrafo.\n\nNão há porcentagem de incidência de reescrita estimada neste capítulo. O método serve para examinar a operação concreta. Uma reescrita não precisa reproduzir cada palavra para ser válida; o aluno deve conseguir explicar o que foi mantido e o que foi alterado.\n\n**Exemplo:** “Somente a equipe técnica revisou o arquivo” não equivale a “A equipe técnica revisou somente o arquivo”. No primeiro, restringe-se quem revisou; no segundo, o objeto da revisão. A posição do operador afeta seu escopo, embora as palavras sejam quase idênticas.",
    "checkpointIds": [
      "chk-13-2-2",
      "rt-13-2-1"
    ]
  },
  {
    "id": "sub-13-2-bloco-2",
    "titulo": "Vozes verbais: preservar participantes e relações temporais",
    "objetivos": [
      "Converter ativa e passiva quando a estrutura admitir."
    ],
    "conteudo": "Em **“A equipe revisou os registros”**, a equipe é sujeito e os registros, objeto direto. Em **“Os registros foram revisados pela equipe”**, registros passa a sujeito paciente; a locução concorda com ele, e a equipe aparece como agente da passiva. O acontecimento principal pode ser preservado, mas a organização da informação muda.\n\nA conversão precisa respeitar tempo, modo e aspecto no contexto. **Revisou** corresponde, no exemplo simples, a **foram revisados**; **revisava** pede outra relação aspectual; **revisará** aponta para posterioridade. Não substitua “foi concluída” por “era concluída” afirmando identidade automática de sentido. O perfeito e o imperfeito podem apresentar o evento de maneiras diferentes.\n\nNem todo verbo admite a mesma transformação. É necessário haver estrutura compatível com a passiva e preservar a acepção. Inserir ser + particípio em qualquer oração pode produzir outra relação ou construção inadequada. Locuções verbais também exigem atenção: “pode revisar” e “pode ser revisado” mantêm modalidade somente se os participantes e a estrutura forem ajustados.\n\n**Exemplo resolvido:** “O relator elaborou o parecer” → “O parecer foi elaborado pelo relator”. O objeto vira sujeito; o verbo mantém o evento no passado apresentado; o agente continua identificado. A transformação não prova que o foco discursivo seja idêntico em todo contexto, mas preserva a informação básica solicitada no exercício.\n\nQuando o agente é omitido na passiva, examine se a tarefa exige manter sua identificação. “O parecer foi elaborado” não fornece, isoladamente, quem o fez. Pode ser suficiente em um contexto e insuficiente em outro.",
    "checkpointIds": [
      "chk-13-2-1",
      "rt-13-2-2"
    ]
  },
  {
    "id": "sub-13-2-bloco-3",
    "titulo": "Orações reduzidas: explicitar a relação sem inventá-la",
    "objetivos": [
      "Desenvolver infinitivo, gerúndio e particípio conforme o contexto."
    ],
    "conteudo": "Orações reduzidas usam formas nominais do verbo. Desenvolvê-las requer identificar sua relação com a principal, acrescentar elemento de ligação compatível e flexionar o verbo. O fato de aparecer gerúndio não determina, por si, causa ou tempo; o contexto precisa sustentar a relação.\n\n**“Ao identificar o erro, a equipe interrompeu a publicação.”** A estrutura admite leitura temporal. “Quando identificou o erro, a equipe interrompeu a publicação” explicita essa relação. “Se identificasse o erro, a equipe interromperia a publicação” transforma o fato narrado em hipótese e muda a construção temporal/modal.\n\n**“Concluída a revisão, o relatório foi enviado.”** Uma formulação como “Depois que a revisão foi concluída, o relatório foi enviado” pode preservar a sequência. Não é necessário inserir “imediatamente” se esse intervalo não está assegurado. A reescrita não deve acrescentar precisão temporal inexistente.\n\n**Gerúndio:** “A equipe respondeu ao usuário, indicando as fontes consultadas.” A segunda parte pode caracterizar o modo ou uma ação associada à resposta. Desenvolver automaticamente como “porque indicou” impõe causa sem verificá-la. Um comentário correto identifica as possibilidades e delimita a leitura utilizada no exercício.\n\n**Ambiguidade:** “Ao entrar na sala, o relatório foi entregue ao pesquisador” deixa dúvida sobre o sujeito da ação de entrar. Uma reescrita pode precisar explicitar quem entrou. Não atribua a ação ao relatório apenas porque ele é sujeito da principal; reconheça a inadequação ou ambiguidade da construção e a exigência da tarefa.",
    "checkpointIds": [
      "chk-13-2-3",
      "rt-13-2-3"
    ]
  },
  {
    "id": "sub-13-2-bloco-4",
    "titulo": "Substituições: quantificadores, adjetivos e relações de causa",
    "objetivos": [
      "Examinar o alcance de termos e evitar regras universais sobre ordem."
    ],
    "conteudo": "**Alguns, todos, nenhum, apenas, até e pelo menos** delimitam conjuntos e quantidades. Trocar alguns por todos costuma ampliar uma proposição; se o contexto já define um conjunto específico, a análise pode ser diferente. Não interprete todo artigo definido como quantificador universal sobre todos os objetos existentes.\n\nA posição de um adjetivo pode mudar o sentido: **“um simples procedimento”** pode indicar que se trata apenas de um procedimento; **“um procedimento simples”** destaca sua falta de complexidade. Contudo, não há uma regra de que todo adjetivo antes seja subjetivo e todo adjetivo depois seja objetivo. Teste a expressão concreta e o contexto.\n\n**Causa e concessão:** “A publicação foi adiada porque faltavam dados” atribui motivo. “A publicação foi adiada, embora houvesse dados” concede a existência de dados como fato que poderia contrariar uma expectativa. Trocar conectivos muda a relação, mesmo que a concordância verbal seja ajustada. Não são apenas estilos de dizer a mesma coisa.\n\nA supressão de uma ressalva também muda alcance. “A consulta é permitida, salvo restrição legal” não equivale a “A consulta é permitida em qualquer situação”. O comentário precisa recuperar a condição retirada, em vez de se limitar a apontar a palavra qualquer.\n\n**Prática:** forme pares de frases e escreva uma frase curta explicando qual dimensão mudou: conjunto, intensidade, condição, agente ou tempo. Isso produz um diagnóstico transferível ao próximo item.",
    "checkpointIds": [
      "rt-13-2-4"
    ]
  },
  {
    "id": "sub-13-2-bloco-5",
    "titulo": "Oficina de reescrita: o parágrafo como unidade",
    "objetivos": [
      "Validar propostas completas e justificar acerto e erro."
    ],
    "conteudo": "> A equipe concluiu a descrição de parte do acervo. Embora o novo catálogo possa facilitar a localização dos documentos, a instituição ainda precisa avaliar sua acessibilidade. Por isso, a versão anterior continuará disponível durante a transição.\n\nTexto autoral. **Proposta 1:** “Parte do acervo teve sua descrição concluída pela equipe.” A reformulação preserva o conjunto parcial e os participantes no contexto. **Proposta 2:** “O acervo foi integralmente descrito.” Ela amplia parte para totalidade e não é equivalente. **Proposta 3:** “O novo catálogo facilitará toda consulta e já teve sua acessibilidade comprovada.” Ela altera modalidade e inverte o estado da avaliação.\n\n**Proposta 4:** “A versão anterior será mantida disponível enquanto ocorrer a transição.” Pode preservar a informação de continuidade no contexto. A proposta deve ser avaliada em relação à frase, sem exigir que uma paráfrase repita continuar literalmente. **Proposta 5:** “A versão anterior será mantida porque a acessibilidade do novo catálogo foi rejeitada.” A justificativa não foi dada: necessidade de avaliar não significa reprovação já ocorrida.\n\nAo comentar uma opção correta, explique o que foi preservado. Ao comentar uma incorreta, apresente a diferença e, quando útil, uma correção mínima. O aluno que acertou também precisa enxergar o caminho, sobretudo quando seu julgamento resultou de impressão geral.\n\n**Recupere sem consulta:** liste as três ressalvas do parágrafo: descrição parcial, benefício possível e acessibilidade ainda a avaliar. Em seguida, crie uma frase que preserve as três e confira se não introduziu uma conclusão definitiva.",
    "checkpointIds": [
      "rt-13-2-5"
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
