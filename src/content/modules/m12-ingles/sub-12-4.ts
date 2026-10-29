import type { ModuloFilho } from '../../../domain/types';

export const submodulo124: ModuloFilho = {
  id: 'sub-12-4',
  numero: '12.4',
  editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)',
  preRequisitos: ["sub-12-3"],
  titulo: 'Vocabulário Contextual, Falsos Cognatos, Modalizadores e Paráfrase Cebraspe',
  antesDeLer: [
    {
      termo: 'Falsos Cognatos (False Friends)',
      definicao: 'Palavras com grafia ou som semelhantes em português e inglês, mas com significados completamente distintos.',
      exemploBiblioteca: '\'Library\' é biblioteca (e não livraria, que é \'bookstore\'); \'Policy\' é política/diretriz (e não polícia, que é \'police\').',
    },
    {
      termo: 'Modal Verbs (Verbos Modais)',
      definicao: 'Verbos auxiliares que expressam graus de certeza, obrigação, permissão ou probabilidade: must, should, may, might, can, could.',
      exemploBiblioteca: 'O Cebraspe explora a troca de \'may\' (possibilidade/permissão) por \'must\' (obrigação/certeza) para tornar o item errado.',
    },
    {
      termo: 'Voz Passiva Acadêmica',
      definicao: 'Estrutura (be + past participle) utilizada em textos formais para dar ênfase à ação ou ao objeto, mantendo a impessoalidade do autor.',
      exemploBiblioteca: 'Tradução e julgamento de frases como \'The rare manuscripts were restored by the conservation team\'.',
    },
    {
      termo: 'Paráfrase Cebraspe',
      definicao: 'Item de prova que reescreve uma frase do texto em inglês com outras palavras mantendo o sentido original estrito.',
      exemploBiblioteca: 'Avaliar se \'digital preservation ensures perennity\' expressa exatamente a mesma ideia de \'digital curation guarantees long-term survival\'.',
    },
  ],
  descricaoCurta: 'O arsenal de falsos amigos (actually, eventually, intend, pretend, comprehensive), a armadilha da alteração de grau nos verbos modais (may/might vs must/will), e o método para julgar itens de paráfrase e reescrita de sentenças no Cebraspe.',
  tempoEstimadoMinutos: 9,
  autoresChave: [
  "British Council — LearnEnglish"
],
  alertasCebraspe: [
  "Não reduza modais a uma escala universal de certeza: examine sua função no contexto.",
  "Uma substituição precisa preservar alcance e construção; sinônimos aproximados não se aplicam automaticamente a toda frase.",
  "Compreensão lexical melhora com frases e conferência, não com proibição de consulta ou promessa de inferência infalível."
],
  quadroComparativo: {
    titulo: 'Guia Crítico de Falsos Cognatos Perigosos no Padrão Cebraspe',
    colunas: ['Termo em Inglês', 'Significado Real em Português', 'Falsa Tradução Intuitiva (Erro Comum)', 'Como se diz o Falso Sentido'],
    linhas: [
      ['Actually', 'Na verdade, de fato, realmente', 'Atualmente (ERRADO!)', 'Currently, nowadays, at present'],
      ['Eventually', 'Ao final, com o tempo, por fim', 'Eventualmente / às vezes (ERRADO!)', 'Occasionally, sometimes'],
      ['Pretend', 'Fingir, simular', 'Pretender (ERRADO!)', 'Intend, plan to'],
      ['Intend', 'Pretender, ter a intenção de', 'Entender (ERRADO!)', 'Understand'],
      ['Comprehensive', 'Amplo, abrangente, minucioso', 'Compreensivo / tolerante (ERRADO!)', 'Understanding, sympathetic'],
      ['Notice', 'Notar, perceber, prestar atenção', 'Notícia de jornal (ERRADO!)', 'News, report'],
      ['Policy', 'Política pública, diretriz, norma', 'Polícia ou política partidária (ERRADO!)', 'Politics (ciência política), Police (polícia)'],
    ],
  },
  teoriaDensaMarkdown: "### Vocabulário em contexto: hipótese lexical e conferência\n\nConhecer uma palavra inclui reconhecer seus sentidos possíveis, as construções em que aparece e o registro. Em uma tarefa de compreensão, interessa o sentido que realiza naquele trecho. *Issue* pode designar assunto, edição ou emissão em contextos diferentes; traduzir sempre como problema produz erros.\n\nA formação de palavras oferece pistas: *careless* e *careful* relacionam-se a cuidado, mas os sufixos mudam a propriedade; *misleading* sugere algo que conduz a interpretação equivocada. Essas pistas não substituem o contexto. Decompor uma palavra como se todos os prefixos operassem sempre com o mesmo sentido pode gerar etimologia imaginada.\n\n**Procedimento:** identifique a classe e o papel na frase; observe a combinação com outras palavras; proponha um sentido; substitua-o no trecho; confira coerência com o parágrafo. Se a palavra decide uma oposição, uma negação ou uma quantidade, a hipótese deve ser especialmente cuidadosa.\n\n**Exemplo:** *The review was comprehensive but not conclusive.* Comprehensive indica abrangência; conclusive diz respeito a conclusão suficiente/decisiva no contexto. A frase pode afirmar que a revisão cobriu amplamente o assunto sem encerrar a questão. Traduzir ambas como “completa” apagaria o contraste.\n\nDicionários são apoio legítimo no estudo. Treinar inferência não significa proibir consulta nem prometer leitura fluente sem vocabulário. Registre palavras em frases, recupere o sentido em outro momento e teste-o em contexto diferente.\n\n### Falsos amigos e combinações: além da lista de tradução\n\n**Actually** pode introduzir correção ou ênfase factual: *The service is actually free* contraria uma suposição ou reforça o fato. Não equivale automaticamente a atualmente, normalmente expresso por *currently, at present* ou outra construção contextual. **Eventually** apresenta desfecho após processo ou tempo, e não a frequência ocasional sugerida pelo português eventualmente em certos usos.\n\n**Pretend** é fingir; **intend** é ter intenção. *They intended to digitise the files, but only pretended to have completed the work* distingue intenção e simulação de conclusão. A semelhança de forma não permite trocar os verbos sem alterar a informação.\n\n**Comprehensive** aponta para abrangência; **understanding** pode indicar compreensão ou atitude compreensiva conforme a construção. Não é necessário classificar toda relação entre inglês e português como inimiga: cognatos transparentes ajudam, desde que sejam testados. Um termo pode ter vários sentidos, dos quais apenas alguns coincidem com a palavra portuguesa semelhante.\n\n**Caso:** *The institution eventually published the revised report.* O evento ocorreu ao final de uma trajetória; a frase não diz que a instituição publica o relatório de vez em quando. Para avaliar uma paráfrase, identifique o acontecimento e a relação temporal, não apenas a tradução de um advérbio isolado.\n\nPalavras se combinam de formas próprias: *make a decision*, *conduct a study*, *access to information*. A competência lexical inclui essas combinações. No estudo, crie exemplos curtos que preservem o padrão e explique o sentido, em vez de acumular listas sem aplicação.\n\n### Modais: possibilidade, obrigação, capacidade e dedução\n\nModais não compõem uma escala única e fixa de certeza. **May, might e could** podem expressar possibilidade; **can** pode indicar capacidade ou permissão; **must** pode expressar obrigação ou dedução forte. **Should** pode trazer recomendação ou expectativa. O contexto e o tipo de proposição decidem a leitura.\n\nCompare **“Users must register before borrowing.”** Há uma exigência do regulamento. **“The lights are on; someone must be working.”** Há dedução a partir de evidência, e não uma ordem para alguém trabalhar. Converter ambos em “obrigação absoluta” apaga essa diferença.\n\n**Must not** normalmente proíbe; **do not have to** pode indicar ausência de necessidade/obrigação. “You must not photograph this item” não equivale a “You do not have to photograph it”. A primeira impede; a segunda dispensa. A negação interage com a modalidade.\n\n**“The new search tool may reduce delays.”** A frase não garante eliminação dos atrasos. *May* preserva possibilidade e *reduce* não significa eliminar. A assertiva que transforma a frase em certeza de extinção altera dois componentes independentes. Identificá-los melhora o comentário, em vez de apenas chamar a frase de exagerada.\n\n**Will** pode expressar projeção, decisão ou outros valores no contexto, sem ser prova científica de certeza sobre qualquer futuro. A análise deve preservar a força da fala do autor, não substituir o texto por uma escala decorada.\n\n### Paráfrase: comparar papéis, polaridade, quantidade e tempo\n\n> The revised platform may help small libraries describe their collections more consistently. It does not remove the need for professional judgment. Although the pilot covered several types of material, its results cannot yet be generalised to every institution. The team intends to test the tool again before recommending wider adoption.\n\nTexto autoral. A primeira frase propõe benefício possível e delimitado. A segunda preserva a necessidade de julgamento profissional. A terceira reconhece variedade no piloto e limita a generalização. A última relata intenção de testar novamente, sem afirmar que o teste já terminou.\n\n**Paráfrase adequada:** “The pilot does not yet justify conclusions about all institutions.” Ela preserva o limite de generalização. **Inadequada:** “The team pretends to have tested the platform again.” Além de trocar intenção por fingimento, muda o estado temporal do teste.\n\nUse um checklist: quem age ou recebe a ação? A frase é afirmativa ou negativa? Qual modal e qual força? Quanto ou quantos? Em que período? Com qual condição? Uma voz passiva pode reorganizar participantes sem mudar a relação principal. “No more than five” pode ser equivalente a “up to five”. Uma mudança de palavras não é, por si, mudança de sentido.\n\nO checklist serve para investigar, não para marcar automaticamente errado sempre que a superfície muda. Leia o comando: ele pode exigir equivalência global, substituição lexical local ou correção gramatical. Uma opção pode ser gramatical, mas alterar o conteúdo exigido.\n\n**Recupere:** escreva duas paráfrases do texto, uma mantendo a cautela e outra exagerando o resultado. Aponte exatamente o termo ou a relação que produziu a diferença. Depois teste sua explicação em uma frase nova, para reduzir memorização do exemplo.",
  teoriaDidaticaMarkdown: "### Revisão: o sentido realizado na frase\n\nFormação de palavras e cognatos são pistas, não garantias. Actually não é automaticamente atualmente; eventually não é frequência ocasional; pretend e intend contrastam fingimento e intenção. Comprehensive destaca abrangência, sem provar conclusão definitiva. Modais têm funções: obrigação, permissão, capacidade, possibilidade e dedução dependem da construção. Must not e do not have to não são equivalentes. Para paráfrase, compare participantes, negação, modalidade, quantidade, tempo e condição; verifique o comando antes de concluir.\n\n**Recupere:** explique os dois erros ao transformar may reduce em certainly eliminate. Crie um exemplo de must como dever e outro como dedução. Por que uma frase gramatical pode falhar como paráfrase do texto?\n",
  checkpoints: [
  {
    "id": "chk-12-4-1",
    "pergunta": "Julgue o item referente aos falsos amigos (false friends) no padrão Cebraspe:",
    "item": "No trecho \"The minister actually defended the immediate review of the policy\", o vocábulo \"actually\" expressa uma circunstância de tempo, indicando que a ação ocorre no momento presente.",
    "gabarito": "E",
    "justificativa": "\"Actually\" é um advérbio que significa \"na verdade\", \"de fato\" ou \"realmente\" (indicando ênfase factual). A ideia temporal de \"no momento presente / atualmente\" é expressa em inglês por \"currently\", \"at present\" ou \"nowadays\".",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC."
  },
  {
    "id": "chk-12-4-2",
    "pergunta": "Julgue a assertiva referente à modalização e grau de certeza epistêmica segundo o Cebraspe:",
    "item": "Se o texto original afirma que \"The new technology may reduce operating costs in parliamentary libraries\", é correto inferir que a nova tecnologia certamente extinguirá os custos de manutenção desses órgãos.",
    "gabarito": "E",
    "justificativa": "O texto original emprega o modal \"may\", que indica mera POSSIBILIDADE (pode reduzir), e o verbo \"reduce\" (reduzir). A assertiva substitui essa possibilidade por certeza absoluta (\"certamente\") e amplia indevidamente para extinção total dos custos.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC."
  },
  {
    "id": "chk-12-4-3",
    "pergunta": "Julgue o item acerca do significado contextual do vocábulo \"comprehensive\":",
    "item": "A expressão \"a comprehensive reform\" pode ser corretamente interpretada como \"uma reforma abrangente e minuciosa\", e não como uma reforma que demonstra empatia ou benevolência.",
    "gabarito": "C",
    "justificativa": "\"Comprehensive\" é um falso cognato cujo significado técnico e formal é \"amplo\", \"abrangente\", \"global\" ou \"detalhado\". O sentido de demonstrar compreensão ou empatia para com alguém é expresso em inglês por \"understanding\" ou \"sympathetic\".",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC."
  },
  {
    "id": "rt-12-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “The study was comprehensive but not conclusive”, o contraste permite distinguir abrangência da análise e força de sua conclusão.",
    "gabarito": "C",
    "justificativa": "Comprehensive não implica automaticamente conclusive. A frase reconhece cobertura e limita o resultado conclusivo; traduzir os dois termos do mesmo modo apagaria o contraste.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-12-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “The report was eventually released”, eventually significa necessariamente que a publicação ocorre ocasionalmente, sem indicar desfecho.",
    "gabarito": "E",
    "justificativa": "Eventually aponta para um resultado ao final de um processo ou período. O item transporta um uso do português eventualmente que não corresponde ao advérbio nessa construção.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)",
    "habilidade": "aplicar",
    "versao_correta": "Eventually apresenta a publicação como desfecho, não como frequência ocasional."
  },
  {
    "id": "rt-12-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “The lights are on; someone must be working”, must pode expressar dedução a partir de uma evidência, e não uma obrigação imposta a alguém.",
    "gabarito": "C",
    "justificativa": "A primeira oração fornece a evidência da qual o falante tira uma conclusão forte. Não existe agente impondo um dever de trabalho nessa construção.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-12-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "“You must not copy this file” e “You do not have to copy this file” são equivalentes, pois ambas negam a obrigação de copiar.",
    "gabarito": "E",
    "justificativa": "Must not apresenta proibição no contexto; do not have to indica que não é necessário copiar. Proibir e dispensar não são a mesma orientação.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)",
    "habilidade": "aplicar",
    "versao_correta": "Must not proíbe; do not have to dispensa a necessidade/obrigação."
  },
  {
    "id": "rt-12-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No texto da plataforma, o fato de o piloto abranger diferentes materiais não é apresentado como suficiente para generalizar os resultados a todas as instituições.",
    "gabarito": "C",
    "justificativa": "Although admite a variedade, mas a oração principal limita a generalização. A assertiva preserva essa relação concessiva e o escopo do resultado.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "aut-12-4-referencia",
      "nome": "British Council — LearnEnglish",
      "ano": "Material de consulta",
      "obraPrincipal": "Recursos de gramática e leitura indicados nas fontes da aula",
      "ideiaChave": "Conferir a função e a construção no contexto; os exemplos de aplicação são autorais do HNC.",
      "chipPegadinha": "Evidência e estrutura"
    }
  ],
  "pegadinhas": []
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-12-4-bloco-1",
    "titulo": "Vocabulário em contexto: hipótese lexical e conferência",
    "objetivos": [
      "Usar contexto e formação de palavras sem transformar pistas em garantia."
    ],
    "conteudo": "Conhecer uma palavra inclui reconhecer seus sentidos possíveis, as construções em que aparece e o registro. Em uma tarefa de compreensão, interessa o sentido que realiza naquele trecho. *Issue* pode designar assunto, edição ou emissão em contextos diferentes; traduzir sempre como problema produz erros.\n\nA formação de palavras oferece pistas: *careless* e *careful* relacionam-se a cuidado, mas os sufixos mudam a propriedade; *misleading* sugere algo que conduz a interpretação equivocada. Essas pistas não substituem o contexto. Decompor uma palavra como se todos os prefixos operassem sempre com o mesmo sentido pode gerar etimologia imaginada.\n\n**Procedimento:** identifique a classe e o papel na frase; observe a combinação com outras palavras; proponha um sentido; substitua-o no trecho; confira coerência com o parágrafo. Se a palavra decide uma oposição, uma negação ou uma quantidade, a hipótese deve ser especialmente cuidadosa.\n\n**Exemplo:** *The review was comprehensive but not conclusive.* Comprehensive indica abrangência; conclusive diz respeito a conclusão suficiente/decisiva no contexto. A frase pode afirmar que a revisão cobriu amplamente o assunto sem encerrar a questão. Traduzir ambas como “completa” apagaria o contraste.\n\nDicionários são apoio legítimo no estudo. Treinar inferência não significa proibir consulta nem prometer leitura fluente sem vocabulário. Registre palavras em frases, recupere o sentido em outro momento e teste-o em contexto diferente.",
    "checkpointIds": [
      "chk-12-4-3",
      "rt-12-4-1"
    ]
  },
  {
    "id": "sub-12-4-bloco-2",
    "titulo": "Falsos amigos e combinações: além da lista de tradução",
    "objetivos": [
      "Distinguir actually, currently, eventually, pretend e intend em frases."
    ],
    "conteudo": "**Actually** pode introduzir correção ou ênfase factual: *The service is actually free* contraria uma suposição ou reforça o fato. Não equivale automaticamente a atualmente, normalmente expresso por *currently, at present* ou outra construção contextual. **Eventually** apresenta desfecho após processo ou tempo, e não a frequência ocasional sugerida pelo português eventualmente em certos usos.\n\n**Pretend** é fingir; **intend** é ter intenção. *They intended to digitise the files, but only pretended to have completed the work* distingue intenção e simulação de conclusão. A semelhança de forma não permite trocar os verbos sem alterar a informação.\n\n**Comprehensive** aponta para abrangência; **understanding** pode indicar compreensão ou atitude compreensiva conforme a construção. Não é necessário classificar toda relação entre inglês e português como inimiga: cognatos transparentes ajudam, desde que sejam testados. Um termo pode ter vários sentidos, dos quais apenas alguns coincidem com a palavra portuguesa semelhante.\n\n**Caso:** *The institution eventually published the revised report.* O evento ocorreu ao final de uma trajetória; a frase não diz que a instituição publica o relatório de vez em quando. Para avaliar uma paráfrase, identifique o acontecimento e a relação temporal, não apenas a tradução de um advérbio isolado.\n\nPalavras se combinam de formas próprias: *make a decision*, *conduct a study*, *access to information*. A competência lexical inclui essas combinações. No estudo, crie exemplos curtos que preservem o padrão e explique o sentido, em vez de acumular listas sem aplicação.",
    "checkpointIds": [
      "chk-12-4-1",
      "rt-12-4-2"
    ]
  },
  {
    "id": "sub-12-4-bloco-3",
    "titulo": "Modais: possibilidade, obrigação, capacidade e dedução",
    "objetivos": [
      "Distinguir funções de must, may, can, should e formas negativas."
    ],
    "conteudo": "Modais não compõem uma escala única e fixa de certeza. **May, might e could** podem expressar possibilidade; **can** pode indicar capacidade ou permissão; **must** pode expressar obrigação ou dedução forte. **Should** pode trazer recomendação ou expectativa. O contexto e o tipo de proposição decidem a leitura.\n\nCompare **“Users must register before borrowing.”** Há uma exigência do regulamento. **“The lights are on; someone must be working.”** Há dedução a partir de evidência, e não uma ordem para alguém trabalhar. Converter ambos em “obrigação absoluta” apaga essa diferença.\n\n**Must not** normalmente proíbe; **do not have to** pode indicar ausência de necessidade/obrigação. “You must not photograph this item” não equivale a “You do not have to photograph it”. A primeira impede; a segunda dispensa. A negação interage com a modalidade.\n\n**“The new search tool may reduce delays.”** A frase não garante eliminação dos atrasos. *May* preserva possibilidade e *reduce* não significa eliminar. A assertiva que transforma a frase em certeza de extinção altera dois componentes independentes. Identificá-los melhora o comentário, em vez de apenas chamar a frase de exagerada.\n\n**Will** pode expressar projeção, decisão ou outros valores no contexto, sem ser prova científica de certeza sobre qualquer futuro. A análise deve preservar a força da fala do autor, não substituir o texto por uma escala decorada.",
    "checkpointIds": [
      "chk-12-4-2",
      "rt-12-4-3",
      "rt-12-4-4"
    ]
  },
  {
    "id": "sub-12-4-bloco-4",
    "titulo": "Paráfrase: comparar papéis, polaridade, quantidade e tempo",
    "objetivos": [
      "Validar equivalência contextual e aplicar a leitura a um texto novo."
    ],
    "conteudo": "> The revised platform may help small libraries describe their collections more consistently. It does not remove the need for professional judgment. Although the pilot covered several types of material, its results cannot yet be generalised to every institution. The team intends to test the tool again before recommending wider adoption.\n\nTexto autoral. A primeira frase propõe benefício possível e delimitado. A segunda preserva a necessidade de julgamento profissional. A terceira reconhece variedade no piloto e limita a generalização. A última relata intenção de testar novamente, sem afirmar que o teste já terminou.\n\n**Paráfrase adequada:** “The pilot does not yet justify conclusions about all institutions.” Ela preserva o limite de generalização. **Inadequada:** “The team pretends to have tested the platform again.” Além de trocar intenção por fingimento, muda o estado temporal do teste.\n\nUse um checklist: quem age ou recebe a ação? A frase é afirmativa ou negativa? Qual modal e qual força? Quanto ou quantos? Em que período? Com qual condição? Uma voz passiva pode reorganizar participantes sem mudar a relação principal. “No more than five” pode ser equivalente a “up to five”. Uma mudança de palavras não é, por si, mudança de sentido.\n\nO checklist serve para investigar, não para marcar automaticamente errado sempre que a superfície muda. Leia o comando: ele pode exigir equivalência global, substituição lexical local ou correção gramatical. Uma opção pode ser gramatical, mas alterar o conteúdo exigido.\n\n**Recupere:** escreva duas paráfrases do texto, uma mantendo a cautela e outra exagerando o resultado. Aponte exatamente o termo ou a relação que produziu a diferença. Depois teste sua explicação em uma frase nova, para reduzir memorização do exemplo.",
    "checkpointIds": [
      "rt-12-4-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "bc-contraste",
    "titulo": "British Council — Contrasting ideas",
    "localizador": "Although, despite e estruturas de contraste.",
    "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/contrasting-ideas-although-despite-others"
  },
  {
    "id": "bc-relativos",
    "titulo": "British Council — Relative pronouns and relative clauses",
    "localizador": "Forma e função dos relativos.",
    "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses"
  },
  {
    "id": "bc-modais",
    "titulo": "British Council — Modals: deductions about the present",
    "localizador": "Possibilidade e dedução conforme evidência e contexto.",
    "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-present"
  }
],
};
