import type { ModuloFilho } from '../../../domain/types';

export const submodulo134: ModuloFilho = {
  id: 'sub-13-4',
  numero: '13.4',
  editalRef: 'Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)',
  preRequisitos: ["sub-13-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-13-1",
          "titulo": "Compreensão e Interpretação Textual",
          "motivo": "Classificação de gêneros em correspondências e normas legislativas."
      }
  ],
  titulo: 'Ortografia Oficial, Tipologia e Gêneros Textuais, Tempos Verbais e Colocação Pronominal',
  antesDeLer: [
  {
    "termo": "Tonicidade",
    "definicao": "Posição da sílaba tônica, que precisa ser identificada antes da regra de acento.",
    "exemploBiblioteca": "Distinguir público de legislativo ao justificar suas grafias."
  },
  {
    "termo": "Gênero e tipo",
    "definicao": "Gênero é forma de comunicação situada; tipo descreve organização linguística.",
    "exemploBiblioteca": "Um relatório pode reunir narrativa de atividades e argumento por uma decisão."
  },
  {
    "termo": "Construção verbal",
    "definicao": "A forma do verbo deve ser interpretada junto do contexto, dos participantes e das relações.",
    "exemploBiblioteca": "Amanhã a equipe apresenta o relatório usa presente com referência futura."
  }
],
  descricaoCurta:
    'Acordo Ortográfico (acentuação e hífen), a distinção teórico-empírica entre tipos e gêneros textuais segundo Marcuschi, semântica e correlação dos tempos e modos verbais, e sintaxe rigorosa de colocação pronominal (próclise, mesóclise e ênclise).',
  tempoEstimadoMinutos: 19,
  autoresChave: [
    'Luiz Antônio Marcuschi (Da Fala para a Escrita / Gêneros Textuais e Ensino)',
    'Ingedore Villaça Koch (A Coesão Textual / Desvendando os Segredos do Texto)',
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Domingos Paschoal Cegalla (Novíssima Gramática da Língua Portuguesa)',
  ],
  alertasCebraspe: [
  "Classifique tonicidade e terminação antes de dizer que duas palavras seguem a mesma regra.",
  "O gênero não impõe exclusividade de um tipo textual. Observe o segmento e a finalidade.",
  "Futuro, indicativo e subjuntivo não devem ser tratados como etiquetas universais de certeza ou dúvida."
],
  quadroComparativo: {
    titulo: 'Quadro Sinótico de Gramática Aplicada: Ortografia, Verbos, Tipologia e Colocação Pronominal',
    colunas: [
      'Eixo Gramatical',
      'Regra Geral da Norma Culta',
      'Exceção / Particularidade Crítica',
      'Armadilha Típica do Cebraspe',
    ],
    linhas: [
      [
        'Acentuação (Ditongos Abertos)',
        'Ditongos abertos ÉI e ÓI em paroxítonas NÃO são acentuados (ideia, assembleia)',
        'Em oxítonas e monossílabos tônicos o acento É MANTIDO (herói, pastéis, dói, céu)',
        'Dizer que "herói" e "ideia" perderam o acento pela mesma regra após o Acordo Ortográfico',
      ],
      [
        'Emprego do Hífen (Prefixos)',
        'Letras iguais separam com hífen (micro-ondas); letras diferentes unem-se (autoescola)',
        'Se o segundo elemento inicia com R ou S, duplicam-se as consoantes sem hífen (antirreligioso, minissaia)',
        'Afirmar que "anti-inflamatório" não tem hífen ou grafar "anti-social" com hífen e um só "s"',
      ],
      [
        'Tipos vs. Gêneros Textuais',
        'Tipos textuais são finitos e estruturais (narração, descrição, dissertação, injunção)',
        'Gêneros textuais são infinitos e sociocomunicativos (ata, parecer, ofício, lei)',
        'Classificar um "parecer legislativo" como "tipo de texto" em vez de "gênero textual"',
      ],
      [
        'Correlação Verbal Condicional',
        'Imperfeito do Subjuntivo ("se fizesse") correlaciona-se com Futuro do Pretérito ("faria")',
        'Futuro do Subjuntivo ("se fizer") correlaciona-se com Futuro do Presente ("fará")',
        'Misturar modos e tempos criando frases anômalas como "Se ele fizesse, eu farei"',
      ],
      [
        'Colocação Pronominal',
        'Palavra atrativa exige próclise ("Não se disse", "Quem me chamou?")',
        'Verbos no futuro do indicativo sem atração exigem mesóclise ("Dir-se-ia", "Aprovar-se-á")',
        'Colocar pronome átono iniciando período ("Me parece") ou usar ênclise após advérbio atrativo',
      ],
    ],
  },
  teoriaDensaMarkdown: "### Ortografia: grafia, tonicidade e acento são decisões diferentes\n\nOrtografia disciplina a escrita convencional; acentuação gráfica é parte desse sistema. A sílaba tônica existe na pronúncia mesmo quando não recebe sinal gráfico. Para aplicar uma regra, identifique primeiro onde recai a tonicidade e qual é a terminação pertinente. O assunto da palavra não determina sua classificação.\n\n**Proparoxítonas** têm tonicidade na antepenúltima sílaba, como **público, hipótese e lâmpada**, e recebem acento conforme a regra. **Paroxítonas** têm tonicidade na penúltima, como **legislativo e parlamentares**; não devem ser apresentadas como proparoxítonas. “Parlâmentares” é grafia inadequada. **Oxítonas** têm tonicidade na última, como café e também. Monossílabos tônicos têm regras próprias, como pá, mês e nós.\n\nEntre oxítonas, são relevantes terminações a(s), e(s), o(s), em e ens. Entre paroxítonas, examine terminações como r, l, x, n, i(s), us, um/uns, ã(s), ão(s) e os casos previstos de ditongo. Não use a lista sem classificar a palavra: o que explica café não é a mesma combinação de critérios que explica fácil.\n\n**Exemplo resolvido:** caráter recebe acento pela classificação/terminação pertinente; público é proparoxítona; café é oxítona terminada em e. As três são acentuadas, mas não pela mesma justificativa. Um item que peça identidade de regra exige explicar o critério, não apenas constatar o sinal.\n\nA análise de certas terminações admite tratamentos fonológicos diferentes em gramáticas; quando isso importar ao julgamento, delimite a abordagem. Para a grafia oficial de uma palavra duvidosa, consulte a forma registrada, em vez de criar uma regra a partir de uma impressão sonora.\n\n### Acordo Ortográfico: alterações com condições e contrastes\n\nO Acordo Ortográfico promulgado pelo Decreto 6.583/2008 contém regras e ressalvas, não uma eliminação geral de acentos. **Ideia, plateia e heroico** não recebem o antigo acento dos ditongos abertos nas paroxítonas. **Herói, pastéis e céu** preservam a acentuação aplicável a suas classes. A condição acentual precisa acompanhar a explicação.\n\n**Veem, leem, creem e deem** não levam o antigo circunflexo do encontro eem; **voo e enjoo** perderam o sinal em oo. Não confunda com **têm e vêm**, formas de plural que se distinguem de tem e vem. Nos derivados, também se observam oposições como **mantém/mantêm** e **intervém/intervêm**.\n\n**Pôde/pode** distingue formas temporais; **pôr/por** distingue verbo e preposição. A grafia **fôrma** é admitida como diferencial facultativo na condição pertinente. A eliminação de alguns diferenciais não autoriza apagar todos.\n\n**Hiatos:** a análise de i/u tônicos pede considerar sílaba, tonicidade e contexto. Exemplos como feiura contrastam com Piauí. Não aplique “toda sequência de duas vogais recebe acento” nem “o Acordo acabou com todos os hiatos acentuados”. O problema deve fornecer uma palavra e pedir a regra apropriada.\n\n**Procedimento de revisão:** compare a forma atual, identifique a condição e produza um contraexemplo de outra classe. Para ideia, use herói como contraste; para veem, use vêm. Esse método retém a diferença que decide uma questão nova, em vez de apenas decorar uma lista de palavras alteradas.\n\n### Hífen: prefixo e elemento de composição não são um único caso\n\nO hífen depende da formação: prefixação, composição e locução têm tratamentos diferentes. O macete “iguais se separam, diferentes se unem” pode lembrar alguns casos com vogais, mas não substitui as condições e exceções do Acordo.\n\nCompare **micro-ondas** e **anti-inflamatório**, em que há encontro de vogais iguais no limite indicado, com **autoescola** e **infraestrutura**, que têm vogais diferentes. Em **antissocial, antirreflexo e ultrassom**, a junção com r/s produz duplicação da consoante nos casos apresentados. Não se generaliza essa duplicação a prefixos terminados em qualquer consoante.\n\nCom h, examine a formação e as ressalvas: **anti-higiênico** e **super-homem** são exemplos de hífen, mas uma regra “todo h de qualquer formação sempre permanece” ignora casos de supressão e formas lexicalizadas. **Cooperação, reeleger e reescrever** também mostram por que a regra de vogais iguais não cobre todos os prefixos.\n\nFormas como **ex-presidente, vice-diretor e recém-eleito** seguem condições próprias. Não confunda pro-/pre- átonos com elementos tônicos como pré- e pró- em suas formações. A acentuação participa da distinção; omiti-la ao enunciar a regra cria ambiguidade.\n\n**Exemplo resolvido:** para antissocial, identifique anti + social, observe o s inicial e a vogal final do prefixo e aplique a duplicação pertinente. Para micro-ondas, o encontro é o + o. A conclusão decorre de formações diferentes, embora ambas envolvam prefixação.\n\nEm caso de palavra rara ou forma consagrada que pareça escapar ao padrão lembrado, confira o vocabulário ortográfico e o trecho normativo. A consulta deve resolver a dúvida, não ser substituída pela fabricação de uma grafia plausível.\n\n### Gêneros e tipos: prática social e organização linguística\n\nNa distinção trabalhada por Marcuschi, **gêneros** são formas de comunicação situadas em práticas sociais: ata, edital, relatório, parecer, notícia. **Tipos ou sequências textuais** descrevem organizações linguísticas, como narração, descrição, exposição, argumentação e injunção, conforme a classificação adotada. O conjunto de gêneros é aberto e pode mudar com as práticas de comunicação; isso não significa um número infinito empiricamente contado.\n\nUm mesmo relatório pode **narrar** atividades realizadas, **descrever** características de uma coleção e **argumentar** por uma decisão. O gênero continua sendo relatório; a combinação de sequências depende de sua finalidade. Não há correspondência obrigatória de um tipo para cada gênero.\n\n**Texto autoral:** “Durante março, a equipe revisou os registros. O catálogo contém campos de autoria, assunto e localização. Como parte dos registros permanece incompleta, recomenda-se uma nova rodada de revisão.” A primeira frase relata evento; a segunda descreve estrutura; a terceira apresenta justificativa e recomendação. As funções se articulam em um mesmo documento.\n\nUma ordem ou instrução pode aparecer em manual e também em edital. O nome do gênero não dispensa examinar o segmento. Verbos no imperativo são indícios de orientação, mas instruções também podem usar infinitivo ou formas de obrigação. Narração não exige exclusivamente um tempo verbal, nem descrição se reduz à presença de adjetivos.\n\nA questão deve distinguir **predominância** e **exclusividade**. Dizer que uma notícia contém trecho argumentativo não prova que todo seu funcionamento seja de editorial. Reconheça tema, finalidade, circulação, interlocutores e estrutura antes de classificar.\n\n### Tempos e modos verbais: forma, cronologia e aspecto\n\nO nome de um tempo verbal não determina sozinho a data do acontecimento. **“Amanhã a equipe apresenta o relatório”** usa presente para um evento futuro contextualizado. **“Em 1988, promulga-se a Constituição”** pode usar presente histórico. Forma morfológica e localização cronológica devem ser relacionadas, não confundidas.\n\nNo passado, **“revisou”** apresenta um evento de modo perfectivo no contexto; **“revisava”** pode apresentá-lo em curso ou habitual. **“Quando a reunião começou, a equipe já concluíra a revisão”** situa a conclusão antes de outro evento passado. Não transforme aspecto perfeito em sinônimo universal de ação pontual: uma atividade longa também pode ser apresentada como concluída.\n\nO **indicativo** frequentemente apresenta conteúdo como assumido no discurso; o **subjuntivo** participa de hipóteses, desejos e outras relações; o **imperativo** pode orientar, pedir ou ordenar. Não classifique toda frase no indicativo como prova de certeza real nem toda ocorrência de subjuntivo como dúvida subjetiva. A escolha depende da construção e da relação estabelecida.\n\nCompare **“Se revisar, reduzirá”**, **“Se revisasse, reduziria”** e **“Se tivesse revisado, teria reduzido”**. São enquadramentos condicionais diferentes. A reescrita pode mudar uma hipótese projetada para outra contrafactual no contexto. O aluno precisa reconhecer flexão e relação temporal/modal, e não apenas combinar terminações como num algoritmo.\n\n**Exemplo resolvido:** “Gostaria de solicitar o documento” não se refere necessariamente a uma intenção localizada num futuro de um passado real. O futuro do pretérito pode atenuar a solicitação. O uso discursivo deve acompanhar a classificação da forma.\n\n### Colocação pronominal: construção, registro e contexto\n\n**Próclise** coloca o pronome antes do verbo; **ênclise**, depois; **mesóclise**, no interior de formas de futuro em construções pertinentes. A norma-padrão formal ensinada para a prova não esgota todas as variedades de uso do português. Descrever a preferência de registro não exige chamar a fala cotidiana de incapaz de comunicar.\n\n**“Não se publicará o arquivo.”** A palavra negativa é fator de próclise; o futuro não exige trocar a frase por “Não publicar-se-á”. Sem fator que determine próclise, a construção formal de início como **“Publicar-se-á o resultado”** é possível. Não se acrescenta se depois da forma futura inteira para criar “publicará-se”.\n\nRelativos e elementos subordinativos podem favorecer a próclise em construções como “o texto que se publicou” e “quando se concluir a revisão”. A análise é local: a mera existência de uma palavra atrativa em qualquer ponto distante da frase não determina mecanicamente toda colocação. Pausas, estrutura da oração e formas verbais importam.\n\nLocuções exigem atenção ao verbo principal: **“Não se deve divulgar”** e **“Não deve divulgar-se”** ilustram possibilidades na construção com infinitivo. Com particípio, não se prende o pronome diretamente a ele como em “tinha divulgado-se”; é preciso usar posição compatível. O estudo não deve transformar uma opção admissível em única solução sem examinar a estrutura.\n\n**“Em se tratando de preservação”** é uma construção particular com em + gerúndio. Antes de comparar com “tratando-se”, considere o contexto e a expressão completa. O fato de duas sequências aparecerem no uso não prova que sejam substituíveis em qualquer oração.\n\n**Recuperação:** explique por que o não mantém se antes de publicará e por que o particípio pede cuidado diferente do infinitivo. Depois formule uma frase nova no registro formal e confronte a regra pertinente.",
  teoriaDidaticaMarkdown: "### Revisão: contexto e condição da regra\n\nPúblico é proparoxítona; legislativo e parlamentares são paroxítonas. Acentos iguais podem resultar de regras diferentes. Ideia/plateia contrastam com herói/céu; veem/leem não se confundem com têm/vêm. Pôde/pode e pôr/por conservam distinções. Hífen exige identificar a formação: micro-ondas, autoescola, antissocial, cooperação e reeleger mostram condições diferentes. Gêneros podem combinar sequências narrativas, descritivas, expositivas, argumentativas e injuntivas. Forma verbal e tempo cronológico não são idênticos; observe aspecto e enquadramento. Na colocação pronominal, examine construção e registro: não se publicará; publicar-se-á; não se deve divulgar.\n\n**Recupere:** justifique a diferença entre ideia e herói; explique uma sequência heterogênea dentro de um relatório; compare três construções condicionais e o que muda em cada uma. Por que o futuro não anula o fator de próclise de não?\n",
  checkpoints: [
  {
    "id": "cp-13-4-1",
    "pergunta": "Micro-Checkpoint 1: Ditongos Abertos no Acordo Ortográfico",
    "item": "Com a vigência do Acordo Ortográfico da Língua Portuguesa, palavras como \"ideia\", \"plateia\" e \"herói\" deixaram de ser grafadas com acento agudo, em razão da regra de simplificação que extinguiu o acento gráfico sobre os ditongos abertos \"ei\" e \"oi\".",
    "gabarito": "E",
    "justificativa": "Errado! O Acordo Ortográfico extinguiu o acento agudo nos ditongos abertos \"éi\" e \"ói\" exclusivamente nas palavras PAROXÍTONAS (como \"ideia\", \"plateia\", \"heroico\", \"jiboia\", \"assembleia\"). Nas palavras OXÍTONAS e nos MONOSSÍLABOS TÔNICOS terminados nesses ditongos, o acento gráfico PERMANECE OBRIGATÓRIO (como \"herói\", \"troféu\", \"pastéis\", \"coronéis\", \"dói\", \"céu\"). Portanto, \"herói\" continua sendo obrigatoriamente acentuada.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "versao_correta": "Ideia e plateia perderam o acento pertinente às paroxítonas; herói mantém sua acentuação como oxítona."
  },
  {
    "id": "cp-13-4-2",
    "pergunta": "Micro-Checkpoint 2: Tipos vs. Gêneros Textuais segundo Luiz Antônio Marcuschi",
    "item": "Na distinção de Marcuschi, tipos textuais são categorias de organização linguística, enquanto gêneros se vinculam a práticas sociocomunicativas, como ata, edital e parecer. Um gênero pode combinar sequências de tipos diferentes.",
    "gabarito": "C",
    "justificativa": "A oposição distingue classificação linguística e forma de ação comunicativa. Um relatório pode narrar, descrever e argumentar. Não se exige afirmar que os gêneros foram contados como um conjunto literalmente infinito, nem atribuir a um só autor a criação de toda teoria textual.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais."
  },
  {
    "id": "cp-13-4-3",
    "pergunta": "Micro-Checkpoint 3: Colocação Pronominal e Palavra Atrativa",
    "item": "No trecho \"Não se admitirão emendas fora dos prazos estabelecidos\", a alteração da colocação pronominal para \"Não admitir-se-ão emendas fora dos prazos estabelecidos\" preservaria a correção gramatical do texto, por se tratar de verbo conjugado no futuro do presente do indicativo, tempo verbal que exige prioritariamente a mesóclise.",
    "gabarito": "E",
    "justificativa": "Na construção apresentada, não determina a próclise. O fato de o verbo estar no futuro não afasta esse fator e não torna adequada a mesóclise proposta. A explicação depende da oração completa.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "versao_correta": "Não se admitirão emendas fora dos prazos estabelecidos."
  },
  {
    "id": "rt-13-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Público é proparoxítona; parlamentares e legislativo não pertencem à mesma classe acentual apenas por serem termos do contexto parlamentar.",
    "gabarito": "C",
    "justificativa": "Em público, a tonicidade recai na antepenúltima sílaba. Parlamentares e legislativo são paroxítonas. O campo temático não determina a sílaba tônica nem autoriza acrescentar acentos.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “As equipes têm acesso” e “A equipe tem acesso”, a diferença de número do sujeito explica o acento diferencial nas formas de ter.",
    "gabarito": "C",
    "justificativa": "Tem é singular; têm é plural. A oposição permanece pertinente. Não se deve aplicar a perda de acentos de veem/leem ao par tem/têm.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A grafia antissocial exemplifica a junção de prefixo terminado em vogal a elemento iniciado por s, com duplicação da consoante nesse caso.",
    "gabarito": "C",
    "justificativa": "Anti termina em vogal e social começa por s. A forma antissocial duplica o s, sem que isso crie uma regra universal para toda palavra composta.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um relatório pode narrar atividades, descrever um acervo e argumentar por uma decisão, sem deixar de constituir um mesmo gênero textual.",
    "gabarito": "C",
    "justificativa": "Gênero se relaciona à prática e função comunicativa; pode reunir sequências de diferentes tipos. Não há correspondência obrigatória de um gênero para um único tipo.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “Amanhã a equipe apresenta o relatório”, a forma de presente pode ser usada para um evento situado no futuro pelo contexto.",
    "gabarito": "C",
    "justificativa": "O advérbio amanhã e o contexto projetam o evento. Forma morfológica de presente e tempo cronológico não são idênticos em todo uso.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "“Se a equipe revisasse os dados, reduziria os erros” e “Se a equipe revisar os dados, reduzirá os erros” apresentam necessariamente o mesmo enquadramento da hipótese.",
    "gabarito": "E",
    "justificativa": "A primeira construção enquadra a hipótese com imperfeito do subjuntivo e futuro do pretérito; a segunda projeta hipótese futura com futuro do subjuntivo e futuro do presente. A mudança de enquadramento deve ser avaliada no contexto.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar",
    "versao_correta": "As construções podem apresentar enquadramentos hipotéticos diferentes."
  },
  {
    "id": "rt-13-4-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “Não se publicará o arquivo”, a palavra negativa favorece a próclise; o fato de o verbo estar no futuro não exige trocar a frase por “Não publicar-se-á o arquivo”.",
    "gabarito": "C",
    "justificativa": "A presença de não é fator de próclise na construção. O futuro não anula essa condição. A mesóclise não deve ser aplicada como regra isolada da oração.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-13-4-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A expressão “Em se tratando de preservação” apresenta uma construção com em e gerúndio que não se resolve simplesmente aplicando a posição do pronome de um verbo isolado.",
    "gabarito": "C",
    "justificativa": "A estrutura em + gerúndio favorece a colocação apresentada. A análise da locução e do contexto antecede a classificação de próclise/ênclise.",
    "fonte": "Acordo Ortográfico promulgado pelo Decreto 6.583/2008, Anexo I; Manual de Redação da Presidência (2018); Marcuschi, Gêneros textuais: definição e funcionalidade. Exemplos autorais.",
    "editalRef": "Conhecimentos Básicos - Língua Portuguesa (Itens 3, 4 e 5: Ortografia, Gêneros, Tempos Verbais e Próclise)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "aut-13-4-1",
      "nome": "Luiz Antônio Marcuschi",
      "ano": 2008,
      "obraPrincipal": "Da Fala para a Escrita / Produção Textual, Análise de Gêneros e Compreensão",
      "ideiaChave": "Tipos textuais são finitos e teóricos; gêneros textuais são infinitos, dinâmicos e sociocomunicativos.",
      "chipPegadinha": "Classificar ata, parecer ou relatório como tipo textual em vez de gênero textual."
    },
    {
      "id": "aut-13-4-2",
      "nome": "Evanildo Bechara",
      "ano": 2019,
      "obraPrincipal": "Moderna Gramática Portuguesa",
      "ideiaChave": "Sintaxe rigorosa de colocação pronominal com primazia absoluta da próclise diante de fatores de atração.",
      "chipPegadinha": "Usar mesóclise com verbo no futuro quando houver palavra atrativa anterior."
    }
  ],
  "pegadinhas": [
    {
      "id": "peg-13-4-1",
      "afirmacao": "O Acordo Ortográfico extinguiu o acento gráfico de todas as palavras terminadas no ditongo aberto \"ói\", como \"heroico\" e \"herói\".",
      "gabarito": "E",
      "porQue": "Pegadinha manjada do Cebraspe! O acento caiu apenas nas PAROXÍTONAS (\"heroico\", \"jiboia\"). Nas OXÍTONAS e monossílabos (\"herói\", \"dói\"), o acento permanece obrigatório."
    },
    {
      "id": "peg-13-4-2",
      "afirmacao": "Um parecer legislativo emitido pela CCJC é classificado como um tipo textual dissertativo.",
      "gabarito": "E",
      "porQue": "Parecer legislativo é GÊNERO TEXTUAL, e não tipo textual. O parecer mobiliza sequências tipológicas dissertativas, mas sua categoria pragmática é gênero."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-13-4-bloco-1",
    "titulo": "Ortografia: grafia, tonicidade e acento são decisões diferentes",
    "objetivos": [
      "Classificar palavras corretamente antes de aplicar regra de acentuação."
    ],
    "conteudo": "Ortografia disciplina a escrita convencional; acentuação gráfica é parte desse sistema. A sílaba tônica existe na pronúncia mesmo quando não recebe sinal gráfico. Para aplicar uma regra, identifique primeiro onde recai a tonicidade e qual é a terminação pertinente. O assunto da palavra não determina sua classificação.\n\n**Proparoxítonas** têm tonicidade na antepenúltima sílaba, como **público, hipótese e lâmpada**, e recebem acento conforme a regra. **Paroxítonas** têm tonicidade na penúltima, como **legislativo e parlamentares**; não devem ser apresentadas como proparoxítonas. “Parlâmentares” é grafia inadequada. **Oxítonas** têm tonicidade na última, como café e também. Monossílabos tônicos têm regras próprias, como pá, mês e nós.\n\nEntre oxítonas, são relevantes terminações a(s), e(s), o(s), em e ens. Entre paroxítonas, examine terminações como r, l, x, n, i(s), us, um/uns, ã(s), ão(s) e os casos previstos de ditongo. Não use a lista sem classificar a palavra: o que explica café não é a mesma combinação de critérios que explica fácil.\n\n**Exemplo resolvido:** caráter recebe acento pela classificação/terminação pertinente; público é proparoxítona; café é oxítona terminada em e. As três são acentuadas, mas não pela mesma justificativa. Um item que peça identidade de regra exige explicar o critério, não apenas constatar o sinal.\n\nA análise de certas terminações admite tratamentos fonológicos diferentes em gramáticas; quando isso importar ao julgamento, delimite a abordagem. Para a grafia oficial de uma palavra duvidosa, consulte a forma registrada, em vez de criar uma regra a partir de uma impressão sonora.",
    "checkpointIds": [
      "rt-13-4-1"
    ]
  },
  {
    "id": "sub-13-4-bloco-2",
    "titulo": "Acordo Ortográfico: alterações com condições e contrastes",
    "objetivos": [
      "Distinguir ideias paroxítonas de herói oxítona e preservar acentos diferenciais pertinentes."
    ],
    "conteudo": "O Acordo Ortográfico promulgado pelo Decreto 6.583/2008 contém regras e ressalvas, não uma eliminação geral de acentos. **Ideia, plateia e heroico** não recebem o antigo acento dos ditongos abertos nas paroxítonas. **Herói, pastéis e céu** preservam a acentuação aplicável a suas classes. A condição acentual precisa acompanhar a explicação.\n\n**Veem, leem, creem e deem** não levam o antigo circunflexo do encontro eem; **voo e enjoo** perderam o sinal em oo. Não confunda com **têm e vêm**, formas de plural que se distinguem de tem e vem. Nos derivados, também se observam oposições como **mantém/mantêm** e **intervém/intervêm**.\n\n**Pôde/pode** distingue formas temporais; **pôr/por** distingue verbo e preposição. A grafia **fôrma** é admitida como diferencial facultativo na condição pertinente. A eliminação de alguns diferenciais não autoriza apagar todos.\n\n**Hiatos:** a análise de i/u tônicos pede considerar sílaba, tonicidade e contexto. Exemplos como feiura contrastam com Piauí. Não aplique “toda sequência de duas vogais recebe acento” nem “o Acordo acabou com todos os hiatos acentuados”. O problema deve fornecer uma palavra e pedir a regra apropriada.\n\n**Procedimento de revisão:** compare a forma atual, identifique a condição e produza um contraexemplo de outra classe. Para ideia, use herói como contraste; para veem, use vêm. Esse método retém a diferença que decide uma questão nova, em vez de apenas decorar uma lista de palavras alteradas.",
    "checkpointIds": [
      "cp-13-4-1",
      "rt-13-4-2"
    ]
  },
  {
    "id": "sub-13-4-bloco-3",
    "titulo": "Hífen: prefixo e elemento de composição não são um único caso",
    "objetivos": [
      "Aplicar as condições mais frequentes e reconhecer quando consultar o registro."
    ],
    "conteudo": "O hífen depende da formação: prefixação, composição e locução têm tratamentos diferentes. O macete “iguais se separam, diferentes se unem” pode lembrar alguns casos com vogais, mas não substitui as condições e exceções do Acordo.\n\nCompare **micro-ondas** e **anti-inflamatório**, em que há encontro de vogais iguais no limite indicado, com **autoescola** e **infraestrutura**, que têm vogais diferentes. Em **antissocial, antirreflexo e ultrassom**, a junção com r/s produz duplicação da consoante nos casos apresentados. Não se generaliza essa duplicação a prefixos terminados em qualquer consoante.\n\nCom h, examine a formação e as ressalvas: **anti-higiênico** e **super-homem** são exemplos de hífen, mas uma regra “todo h de qualquer formação sempre permanece” ignora casos de supressão e formas lexicalizadas. **Cooperação, reeleger e reescrever** também mostram por que a regra de vogais iguais não cobre todos os prefixos.\n\nFormas como **ex-presidente, vice-diretor e recém-eleito** seguem condições próprias. Não confunda pro-/pre- átonos com elementos tônicos como pré- e pró- em suas formações. A acentuação participa da distinção; omiti-la ao enunciar a regra cria ambiguidade.\n\n**Exemplo resolvido:** para antissocial, identifique anti + social, observe o s inicial e a vogal final do prefixo e aplique a duplicação pertinente. Para micro-ondas, o encontro é o + o. A conclusão decorre de formações diferentes, embora ambas envolvam prefixação.\n\nEm caso de palavra rara ou forma consagrada que pareça escapar ao padrão lembrado, confira o vocabulário ortográfico e o trecho normativo. A consulta deve resolver a dúvida, não ser substituída pela fabricação de uma grafia plausível.",
    "checkpointIds": [
      "rt-13-4-3"
    ]
  },
  {
    "id": "sub-13-4-bloco-4",
    "titulo": "Gêneros e tipos: prática social e organização linguística",
    "objetivos": [
      "Reconhecer a heterogeneidade tipológica num gênero concreto."
    ],
    "conteudo": "Na distinção trabalhada por Marcuschi, **gêneros** são formas de comunicação situadas em práticas sociais: ata, edital, relatório, parecer, notícia. **Tipos ou sequências textuais** descrevem organizações linguísticas, como narração, descrição, exposição, argumentação e injunção, conforme a classificação adotada. O conjunto de gêneros é aberto e pode mudar com as práticas de comunicação; isso não significa um número infinito empiricamente contado.\n\nUm mesmo relatório pode **narrar** atividades realizadas, **descrever** características de uma coleção e **argumentar** por uma decisão. O gênero continua sendo relatório; a combinação de sequências depende de sua finalidade. Não há correspondência obrigatória de um tipo para cada gênero.\n\n**Texto autoral:** “Durante março, a equipe revisou os registros. O catálogo contém campos de autoria, assunto e localização. Como parte dos registros permanece incompleta, recomenda-se uma nova rodada de revisão.” A primeira frase relata evento; a segunda descreve estrutura; a terceira apresenta justificativa e recomendação. As funções se articulam em um mesmo documento.\n\nUma ordem ou instrução pode aparecer em manual e também em edital. O nome do gênero não dispensa examinar o segmento. Verbos no imperativo são indícios de orientação, mas instruções também podem usar infinitivo ou formas de obrigação. Narração não exige exclusivamente um tempo verbal, nem descrição se reduz à presença de adjetivos.\n\nA questão deve distinguir **predominância** e **exclusividade**. Dizer que uma notícia contém trecho argumentativo não prova que todo seu funcionamento seja de editorial. Reconheça tema, finalidade, circulação, interlocutores e estrutura antes de classificar.",
    "checkpointIds": [
      "cp-13-4-2",
      "rt-13-4-4"
    ]
  },
  {
    "id": "sub-13-4-bloco-5",
    "titulo": "Tempos e modos verbais: forma, cronologia e aspecto",
    "objetivos": [
      "Interpretar o uso em contexto e explicar correlações condicionais."
    ],
    "conteudo": "O nome de um tempo verbal não determina sozinho a data do acontecimento. **“Amanhã a equipe apresenta o relatório”** usa presente para um evento futuro contextualizado. **“Em 1988, promulga-se a Constituição”** pode usar presente histórico. Forma morfológica e localização cronológica devem ser relacionadas, não confundidas.\n\nNo passado, **“revisou”** apresenta um evento de modo perfectivo no contexto; **“revisava”** pode apresentá-lo em curso ou habitual. **“Quando a reunião começou, a equipe já concluíra a revisão”** situa a conclusão antes de outro evento passado. Não transforme aspecto perfeito em sinônimo universal de ação pontual: uma atividade longa também pode ser apresentada como concluída.\n\nO **indicativo** frequentemente apresenta conteúdo como assumido no discurso; o **subjuntivo** participa de hipóteses, desejos e outras relações; o **imperativo** pode orientar, pedir ou ordenar. Não classifique toda frase no indicativo como prova de certeza real nem toda ocorrência de subjuntivo como dúvida subjetiva. A escolha depende da construção e da relação estabelecida.\n\nCompare **“Se revisar, reduzirá”**, **“Se revisasse, reduziria”** e **“Se tivesse revisado, teria reduzido”**. São enquadramentos condicionais diferentes. A reescrita pode mudar uma hipótese projetada para outra contrafactual no contexto. O aluno precisa reconhecer flexão e relação temporal/modal, e não apenas combinar terminações como num algoritmo.\n\n**Exemplo resolvido:** “Gostaria de solicitar o documento” não se refere necessariamente a uma intenção localizada num futuro de um passado real. O futuro do pretérito pode atenuar a solicitação. O uso discursivo deve acompanhar a classificação da forma.",
    "checkpointIds": [
      "rt-13-4-5",
      "rt-13-4-6"
    ]
  },
  {
    "id": "sub-13-4-bloco-6",
    "titulo": "Colocação pronominal: construção, registro e contexto",
    "objetivos": [
      "Distinguir próclise, ênclise e mesóclise sem aplicar o futuro isoladamente."
    ],
    "conteudo": "**Próclise** coloca o pronome antes do verbo; **ênclise**, depois; **mesóclise**, no interior de formas de futuro em construções pertinentes. A norma-padrão formal ensinada para a prova não esgota todas as variedades de uso do português. Descrever a preferência de registro não exige chamar a fala cotidiana de incapaz de comunicar.\n\n**“Não se publicará o arquivo.”** A palavra negativa é fator de próclise; o futuro não exige trocar a frase por “Não publicar-se-á”. Sem fator que determine próclise, a construção formal de início como **“Publicar-se-á o resultado”** é possível. Não se acrescenta se depois da forma futura inteira para criar “publicará-se”.\n\nRelativos e elementos subordinativos podem favorecer a próclise em construções como “o texto que se publicou” e “quando se concluir a revisão”. A análise é local: a mera existência de uma palavra atrativa em qualquer ponto distante da frase não determina mecanicamente toda colocação. Pausas, estrutura da oração e formas verbais importam.\n\nLocuções exigem atenção ao verbo principal: **“Não se deve divulgar”** e **“Não deve divulgar-se”** ilustram possibilidades na construção com infinitivo. Com particípio, não se prende o pronome diretamente a ele como em “tinha divulgado-se”; é preciso usar posição compatível. O estudo não deve transformar uma opção admissível em única solução sem examinar a estrutura.\n\n**“Em se tratando de preservação”** é uma construção particular com em + gerúndio. Antes de comparar com “tratando-se”, considere o contexto e a expressão completa. O fato de duas sequências aparecerem no uso não prova que sejam substituíveis em qualquer oração.\n\n**Recuperação:** explique por que o não mantém se antes de publicará e por que o particípio pede cuidado diferente do infinitivo. Depois formule uma frase nova no registro formal e confronte a regra pertinente.",
    "checkpointIds": [
      "cp-13-4-3",
      "rt-13-4-7",
      "rt-13-4-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "acordo",
    "titulo": "Acordo Ortográfico — Decreto 6.583/2008",
    "localizador": "Anexo I: acentuação e hífen; observar as condições e ressalvas de cada base.",
    "url": "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm"
  },
  {
    "id": "mrpr",
    "titulo": "Manual de Redação da Presidência, 3ª ed. (2018)",
    "localizador": "Aspectos gramaticais e aplicação à escrita formal.",
    "url": "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf"
  },
  {
    "id": "marcuschi",
    "titulo": "Marcuschi — Gêneros textuais: definição e funcionalidade",
    "localizador": "Distinção de tipos e gêneros e heterogeneidade tipológica.",
    "url": "https://sigconteudo.ufsb.edu.br/arquivos/2023027236fd0b90089186d2fffad860/Art_Marcuschi_Gneros_textuais_definies_funcionalidade.pdf"
  }
],
};
