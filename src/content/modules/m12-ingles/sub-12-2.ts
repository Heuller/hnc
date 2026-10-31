import type { ModuloFilho } from '../../../domain/types';

export const submodulo122: ModuloFilho = {
  id: 'sub-12-2',
  numero: '12.2',
  editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)',
  preRequisitos: ["sub-12-1"],
  titulo: 'Marcadores Discursivos (Linking Words) e Conjunções de Transição Argumentativa',
  antesDeLer: [
  {
    "termo": "Referente",
    "definicao": "Elemento ao qual uma expressão remete no contexto.",
    "exemploBiblioteca": "This pode retomar uma ideia anterior, não apenas o substantivo mais próximo."
  },
  {
    "termo": "Conector",
    "definicao": "Marca relação discursiva a confirmar pela oração e contexto.",
    "exemploBiblioteca": "Although introduz concessão; não basta reconhecer a palavra sem comparar as proposições."
  }
],
  descricaoCurta: "Identificar adição, contraste, causa, consequência, condição e tempo. Reescrever although e despite sem apagar a estrutura exigida. Evitar transformar condição suficiente em necessária ou resultado em motivo. Julgar substituições e justificar o resultado em um texto completo.",
  tempoEstimadoMinutos: 16,
  autoresChave: [
  "British Council — Contrasting ideas",
  "British Council — Relative pronouns and relative clauses",
  "British Council — Modals: deductions about the present"
],
  alertasCebraspe: [
  "Despite não recebe diretamente essa oração finita; é possível usar Despite the incomplete files ou Despite the fact that the files were incomplete. O sentido concessivo semelhante não torna a sintaxe idêntica.",
  "A condição apresentada não esgota todos os regimes possíveis. A conclusão acrescenta uma exclusividade que não foi fornecida. Esse é um problema de alcance lógico, não de tradução isolada de public.",
  "A oração explica a decisão de mudar a reunião. Não há aqui indicação necessária de um marco inicial de duração; o valor precisa ser lido na relação entre as ideias."
],
  teoriaDensaMarkdown: "### Relações entre ideias: não confundir conectivo com tradução fixa\n\nConsidere duas proposições: a biblioteca ampliou o acervo; o espaço disponível diminuiu. Um conectivo pode apresentar a segunda como contraste, consequência ou informação adicional, conforme a relação construída e o contexto. Reconhecer uma palavra traduzida não dispensa identificar o argumento completo.\n\n**Adição** reúne informações na mesma direção: *moreover, furthermore, in addition*. **Contraste** opõe ou limita: *however, nevertheless, yet* em seus usos pertinentes. **Causa** apresenta fundamento: *because, since, as* quando causais. **Consequência** apresenta resultado ou conclusão: *therefore, thus, consequently*. **Condição** delimita hipótese: *if, unless, provided that*. Marcadores de tempo situam eventos: *before, after, while, since* nos contextos temporais.\n\nO mesmo termo pode exercer funções distintas. *Since 2020* situa início de período; *since the system was unavailable, the service was postponed* apresenta motivo. *While* pode situar simultaneidade ou contrastar posições. Nenhuma lista de equivalentes elimina a necessidade de ler a construção.\n\n**Procedimento:** delimite as duas ideias; formule sua relação em português; identifique a estrutura exigida pelo conector; teste se a substituição preserva sentido e sintaxe. Um item pode falhar em apenas um desses critérios. Trocar *however* por *therefore* pode deixar uma frase formalmente possível, mas mudar contraste em conclusão.\n\nNão há base nesta aula para afirmar que determinada porcentagem da prova é composta por conectivos. Os exemplos demonstram operações de leitura e reescrita; não estimam frequência de cobrança.\n\n### Contraste e concessão: mesma relação geral, construções diferentes\n\n**Although the collection was small, it attracted researchers.** A oração introduzida por although tem sujeito e verbo. **Despite its small size, the collection attracted researchers.** Depois de despite há um grupo nominal. Ambas as frases apresentam um resultado que contrasta com uma expectativa, mas a forma dos complementos é diferente.\n\nTambém é possível *despite being small* ou *despite the fact that it was small*. A expressão *the fact that* permite introduzir uma oração dentro dessa construção. O problema não é a ocorrência de qualquer verbo após despite, mas a estrutura usada. *Despite of* não é a combinação-padrão: compare **despite** com **in spite of**.\n\n**Exemplo resolvido:** trocar apenas although por despite em *Although the staff had little time, they completed the review* produz ligação inadequada com a oração finita apresentada. Uma reescrita possível é *Despite having little time, the staff completed the review*. A transformação precisa manter quem dispunha de pouco tempo: não crie um sujeito implícito incompatível com o da oração principal.\n\n*Although* e *even though* podem compartilhar função concessiva, com diferenças de ênfase. *Even if* costuma introduzir condição hipotética, e não simplesmente repetir uma concessão factual. Em “Even if the report is delayed, we will meet”, o atraso é admitido como hipótese. Em “Even though the report was delayed, we met”, a formulação apresenta o atraso como fato no contexto.\n\nPalavras de uma mesma família semântica não são intercambiáveis em qualquer posição. Examine pontuação, função e complemento em vez de substituir por semelhança de tradução.\n\n### Causa, conclusão e condição: a direção do raciocínio\n\n**Because the server failed, access was interrupted.** A falha explica a interrupção. **The server failed; therefore, access was interrupted.** A segunda estrutura destaca a conclusão a partir da primeira. A relação de base pode se aproximar, mas a troca exige reorganização, não mera substituição local de because por therefore.\n\n**Because** introduz oração; **because of** introduz grupo nominal: *because of the failure*. Essa distinção é comparável à diferença entre although e despite, sem confundir causa com concessão. “Apesar da falha” e “por causa da falha” produzem relações diferentes.\n\nEm **“If the document is public, users can download it”**, a condição autoriza uma conclusão naquele domínio. A frase não diz, por si, que todo documento não público jamais pode ser acessado em outra condição. Converter *if* em *only if* pode introduzir uma exigência necessária que não constava do original.\n\n**Unless** pode expressar exceção condicional equivalente a if not em contextos apropriados, mas a reescrita exige verificar polaridade e modais. “Access is allowed unless the item is restricted” apresenta a restrição como exceção. Adicionar outra negação sem análise pode inverter a permissão.\n\n**Exemplo:** *The files were encrypted because they contained personal data.* Uma assertiva que diga “os arquivos passaram a conter dados pessoais porque foram criptografados” inverte motivo e consequência e não é uma paráfrase. A semelhança lexical esconde mudança de relação. Identifique primeiro a direção da explicação.\n\n### Leitura aplicada: o parágrafo tem uma arquitetura\n\n> The library planned to replace its catalogue in July. However, the migration required additional testing. The team therefore postponed the launch. Moreover, it kept the old catalogue available so that users could continue their research. Although the change was delayed, the staff did not abandon the project.\n\nTexto autoral. **However** limita a expectativa de substituição em julho. **Therefore** apresenta a consequência dos testes adicionais. **Moreover** acrescenta a informação sobre continuidade do serviço. **So that** introduz a finalidade de manter o catálogo antigo. **Although** apresenta o atraso como concessão em relação à continuidade do projeto.\n\n**Resolução:** “A substituição foi adiada para que usuários deixassem de pesquisar.” O texto declara a finalidade oposta: permitir continuidade. “However poderia ser trocado por therefore sem alterar a relação” também não se sustenta, pois o primeiro liga o plano ao obstáculo por contraste; o segundo mudaria a direção argumentativa.\n\nUma substituição de moreover por furthermore é plausível no contexto aditivo, mas isso não é uma licença para trocar qualquer ocorrência em qualquer frase sem observar estrutura e registro. O julgamento precisa da passagem.\n\n**Prática de recuperação:** retire mentalmente os conectivos e explique a relação entre cada par de orações. Depois recoloque-os e compare sua leitura. Esse exercício ensina a arquitetura do texto em vez de memorizar uma tabela de traduções desconectadas.",
  teoriaDidaticaMarkdown: "### Revisão: relações e estruturas\n\nAdição soma; contraste limita/opõe; causa explica; consequência conclui; condição delimita hipótese. Identifique a relação antes de traduzir o marcador. Although introduz oração; despite e in spite of pedem estrutura nominal ou compatível, podendo combinar-se com the fact that. Because e because of também exigem complementos diferentes. Since e while têm usos dependentes do contexto. If não é automaticamente only if. Uma substituição deve preservar relação, polaridade e sintaxe.\n\n**Recupere:** explique os cinco conectivos do texto do catálogo. Transforme uma concessiva com although em uma estrutura com despite, ajustando o complemento. Por que trocar apenas o marcador pode produzir frase inadequada?\n",
  checkpoints: [
  {
    "id": "chk-12-2-1",
    "pergunta": "Julgue o item sobre substituição de marcadores discursivos no padrão Cebraspe:",
    "item": "No par “The launch was scheduled for July. However, further tests were needed”, trocar However por Therefore preserva a relação de contraste entre o plano inicial e a necessidade adicional.",
    "gabarito": "E",
    "justificativa": "However marca contraste, enquanto therefore apresenta conclusão. O texto foi incluído no próprio item para evitar referência a um segundo parágrafo inexistente. A substituição proposta altera a relação exigida.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "versao_correta": "However estabelece contraste; Therefore introduziria uma conclusão e alteraria a relação."
  },
  {
    "id": "chk-12-2-2",
    "pergunta": "Julgue a assertiva referente à estrutura sintática das linking words concessivas:",
    "item": "A sentença \"Despite the president presented strong arguments, the council rejected the proposal\" está gramaticalmente correta de acordo com a norma-padrão da língua inglesa.",
    "gabarito": "E",
    "justificativa": "Incorreto. A preposição \"Despite\" não pode ser seguida diretamente por uma oração com sujeito e verbo conjugado (\"the president presented\"). O correto seria utilizar a conjunção \"Although\" (\"Although the president presented...\") ou a locução \"Despite the fact that the president presented...\".",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "versao_correta": "Although the president presented strong arguments, the council rejected the proposal."
  },
  {
    "id": "chk-12-2-3",
    "pergunta": "Julgue o item acerca da equivalência semântica e gramatical de conectivos:",
    "item": "Em “The service is free. Furthermore, it is available remotely”, Moreover pode substituir Furthermore preservando a relação aditiva apresentada.",
    "gabarito": "C",
    "justificativa": "No par dado, os dois marcadores introduzem informação adicional. A validação é da substituição contextual, não de uma equivalência universal em toda posição sintática.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC."
  },
  {
    "id": "rt-12-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A troca de “Although the files were incomplete” por “Despite the files were incomplete”, sem outra alteração, preserva a estrutura-padrão da frase.",
    "gabarito": "E",
    "justificativa": "Despite não recebe diretamente essa oração finita; é possível usar Despite the incomplete files ou Despite the fact that the files were incomplete. O sentido concessivo semelhante não torna a sintaxe idêntica.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)",
    "habilidade": "aplicar",
    "versao_correta": "Pode-se usar Despite the fact that the files were incomplete."
  },
  {
    "id": "rt-12-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Em “Since the room was closed, the meeting was moved”, since pode introduzir o motivo da mudança de local.",
    "gabarito": "C",
    "justificativa": "A oração explica a decisão de mudar a reunião. Não há aqui indicação necessária de um marco inicial de duração; o valor precisa ser lido na relação entre as ideias.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-12-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A afirmação “If a record is public, it can be downloaded” garante, por si, que nenhum registro não público admite acesso sob condição alguma.",
    "gabarito": "E",
    "justificativa": "A condição apresentada não esgota todos os regimes possíveis. A conclusão acrescenta uma exclusividade que não foi fornecida. Esse é um problema de alcance lógico, não de tradução isolada de public.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)",
    "habilidade": "aplicar",
    "versao_correta": "A frase condiciona a possibilidade indicada sem declarar todas as hipóteses de acesso de registros não públicos."
  },
  {
    "id": "rt-12-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No texto do catálogo, so that apresenta a continuidade da pesquisa dos usuários como finalidade de manter o catálogo antigo disponível.",
    "gabarito": "C",
    "justificativa": "A oração explica para que o serviço foi mantido, dentro do plano de transição. Ela não afirma que usuários deveriam interromper sua pesquisa.",
    "fonte": "British Council LearnEnglish: Contrasting ideas; Relative pronouns and relative clauses; Modals: deductions about the present. Textos e exemplos autorais do HNC.",
    "editalRef": "Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)",
    "habilidade": "aplicar",
    "contexto": "The library planned to replace its catalogue in July. However, the migration required additional testing. The team therefore postponed the launch. Moreover, it kept the old catalogue available so that users could continue their research. Although the change was delayed, the staff did not abandon the project."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-12-2-fonte-bc-contraste",
      "nome": "British Council — Contrasting ideas",
      "ano": "Referência de consulta",
      "obraPrincipal": "British Council — Contrasting ideas",
      "ideiaChave": "Although, despite e estruturas de contraste.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-12-2-fonte-bc-relativos",
      "nome": "British Council — Relative pronouns and relative clauses",
      "ano": "Referência de consulta",
      "obraPrincipal": "British Council — Relative pronouns and relative clauses",
      "ideiaChave": "Forma e função dos relativos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-12-2-fonte-bc-modais",
      "nome": "British Council — Modals: deductions about the present",
      "ano": "Referência de consulta",
      "obraPrincipal": "British Council — Modals: deductions about the present",
      "ideiaChave": "Possibilidade e dedução conforme evidência e contexto.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-12-2-2",
      "afirmacao": "Em “Since the room was closed, the meeting was moved”, since pode introduzir o motivo da mudança de local.",
      "gabarito": "C",
      "porQue": "A oração explica a decisão de mudar a reunião. Não há aqui indicação necessária de um marco inicial de duração; o valor precisa ser lido na relação entre as ideias."
    },
    {
      "id": "memoria-rt-12-2-3",
      "afirmacao": "A afirmação “If a record is public, it can be downloaded” garante, por si, que nenhum registro não público admite acesso sob condição alguma.",
      "gabarito": "E",
      "porQue": "A condição apresentada não esgota todos os regimes possíveis. A conclusão acrescenta uma exclusividade que não foi fornecida. Esse é um problema de alcance lógico, não de tradução isolada de public."
    },
    {
      "id": "memoria-rt-12-2-4",
      "afirmacao": "No texto do catálogo, so that apresenta a continuidade da pesquisa dos usuários como finalidade de manter o catálogo antigo disponível.",
      "gabarito": "C",
      "porQue": "A oração explica para que o serviço foi mantido, dentro do plano de transição. Ela não afirma que usuários deveriam interromper sua pesquisa."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-12-2-bloco-1",
    "titulo": "Relações entre ideias: não confundir conectivo com tradução fixa",
    "objetivos": [
      "Identificar adição, contraste, causa, consequência, condição e tempo."
    ],
    "conteudo": "Considere duas proposições: a biblioteca ampliou o acervo; o espaço disponível diminuiu. Um conectivo pode apresentar a segunda como contraste, consequência ou informação adicional, conforme a relação construída e o contexto. Reconhecer uma palavra traduzida não dispensa identificar o argumento completo.\n\n**Adição** reúne informações na mesma direção: *moreover, furthermore, in addition*. **Contraste** opõe ou limita: *however, nevertheless, yet* em seus usos pertinentes. **Causa** apresenta fundamento: *because, since, as* quando causais. **Consequência** apresenta resultado ou conclusão: *therefore, thus, consequently*. **Condição** delimita hipótese: *if, unless, provided that*. Marcadores de tempo situam eventos: *before, after, while, since* nos contextos temporais.\n\nO mesmo termo pode exercer funções distintas. *Since 2020* situa início de período; *since the system was unavailable, the service was postponed* apresenta motivo. *While* pode situar simultaneidade ou contrastar posições. Nenhuma lista de equivalentes elimina a necessidade de ler a construção.\n\n**Procedimento:** delimite as duas ideias; formule sua relação em português; identifique a estrutura exigida pelo conector; teste se a substituição preserva sentido e sintaxe. Um item pode falhar em apenas um desses critérios. Trocar *however* por *therefore* pode deixar uma frase formalmente possível, mas mudar contraste em conclusão.\n\nNão há base nesta aula para afirmar que determinada porcentagem da prova é composta por conectivos. Os exemplos demonstram operações de leitura e reescrita; não estimam frequência de cobrança.",
    "checkpointIds": [
      "chk-12-2-1"
    ]
  },
  {
    "id": "sub-12-2-bloco-2",
    "titulo": "Contraste e concessão: mesma relação geral, construções diferentes",
    "objetivos": [
      "Reescrever although e despite sem apagar a estrutura exigida."
    ],
    "conteudo": "**Although the collection was small, it attracted researchers.** A oração introduzida por although tem sujeito e verbo. **Despite its small size, the collection attracted researchers.** Depois de despite há um grupo nominal. Ambas as frases apresentam um resultado que contrasta com uma expectativa, mas a forma dos complementos é diferente.\n\nTambém é possível *despite being small* ou *despite the fact that it was small*. A expressão *the fact that* permite introduzir uma oração dentro dessa construção. O problema não é a ocorrência de qualquer verbo após despite, mas a estrutura usada. *Despite of* não é a combinação-padrão: compare **despite** com **in spite of**.\n\n**Exemplo resolvido:** trocar apenas although por despite em *Although the staff had little time, they completed the review* produz ligação inadequada com a oração finita apresentada. Uma reescrita possível é *Despite having little time, the staff completed the review*. A transformação precisa manter quem dispunha de pouco tempo: não crie um sujeito implícito incompatível com o da oração principal.\n\n*Although* e *even though* podem compartilhar função concessiva, com diferenças de ênfase. *Even if* costuma introduzir condição hipotética, e não simplesmente repetir uma concessão factual. Em “Even if the report is delayed, we will meet”, o atraso é admitido como hipótese. Em “Even though the report was delayed, we met”, a formulação apresenta o atraso como fato no contexto.\n\nPalavras de uma mesma família semântica não são intercambiáveis em qualquer posição. Examine pontuação, função e complemento em vez de substituir por semelhança de tradução.",
    "checkpointIds": [
      "chk-12-2-2",
      "rt-12-2-1"
    ]
  },
  {
    "id": "sub-12-2-bloco-3",
    "titulo": "Causa, conclusão e condição: a direção do raciocínio",
    "objetivos": [
      "Evitar transformar condição suficiente em necessária ou resultado em motivo."
    ],
    "conteudo": "**Because the server failed, access was interrupted.** A falha explica a interrupção. **The server failed; therefore, access was interrupted.** A segunda estrutura destaca a conclusão a partir da primeira. A relação de base pode se aproximar, mas a troca exige reorganização, não mera substituição local de because por therefore.\n\n**Because** introduz oração; **because of** introduz grupo nominal: *because of the failure*. Essa distinção é comparável à diferença entre although e despite, sem confundir causa com concessão. “Apesar da falha” e “por causa da falha” produzem relações diferentes.\n\nEm **“If the document is public, users can download it”**, a condição autoriza uma conclusão naquele domínio. A frase não diz, por si, que todo documento não público jamais pode ser acessado em outra condição. Converter *if* em *only if* pode introduzir uma exigência necessária que não constava do original.\n\n**Unless** pode expressar exceção condicional equivalente a if not em contextos apropriados, mas a reescrita exige verificar polaridade e modais. “Access is allowed unless the item is restricted” apresenta a restrição como exceção. Adicionar outra negação sem análise pode inverter a permissão.\n\n**Exemplo:** *The files were encrypted because they contained personal data.* Uma assertiva que diga “os arquivos passaram a conter dados pessoais porque foram criptografados” inverte motivo e consequência e não é uma paráfrase. A semelhança lexical esconde mudança de relação. Identifique primeiro a direção da explicação.",
    "checkpointIds": [
      "rt-12-2-2",
      "rt-12-2-3"
    ]
  },
  {
    "id": "sub-12-2-bloco-4",
    "titulo": "Leitura aplicada: o parágrafo tem uma arquitetura",
    "objetivos": [
      "Julgar substituições e justificar o resultado em um texto completo."
    ],
    "conteudo": "> The library planned to replace its catalogue in July. However, the migration required additional testing. The team therefore postponed the launch. Moreover, it kept the old catalogue available so that users could continue their research. Although the change was delayed, the staff did not abandon the project.\n\nTexto autoral. **However** limita a expectativa de substituição em julho. **Therefore** apresenta a consequência dos testes adicionais. **Moreover** acrescenta a informação sobre continuidade do serviço. **So that** introduz a finalidade de manter o catálogo antigo. **Although** apresenta o atraso como concessão em relação à continuidade do projeto.\n\n**Resolução:** “A substituição foi adiada para que usuários deixassem de pesquisar.” O texto declara a finalidade oposta: permitir continuidade. “However poderia ser trocado por therefore sem alterar a relação” também não se sustenta, pois o primeiro liga o plano ao obstáculo por contraste; o segundo mudaria a direção argumentativa.\n\nUma substituição de moreover por furthermore é plausível no contexto aditivo, mas isso não é uma licença para trocar qualquer ocorrência em qualquer frase sem observar estrutura e registro. O julgamento precisa da passagem.\n\n**Prática de recuperação:** retire mentalmente os conectivos e explique a relação entre cada par de orações. Depois recoloque-os e compare sua leitura. Esse exercício ensina a arquitetura do texto em vez de memorizar uma tabela de traduções desconectadas.",
    "checkpointIds": [
      "chk-12-2-3",
      "rt-12-2-4"
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
