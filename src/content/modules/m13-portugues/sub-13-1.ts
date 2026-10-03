import type { ModuloFilho } from '../../../domain/types';

export const submodulo131: ModuloFilho = {
  id: 'sub-13-1',
  numero: '13.1',
  titulo: 'Mecânica da Interpretação, Coesão e Relações Semânticas no Padrão Cebraspe',
  descricaoCurta: 'Diferenciação científica entre Compreensão e Interpretação, identificação de anáforas e elipses, operadores argumentativos e as armadilhas clássicas de extrapolação e inversão causal.',
  tempoEstimadoMinutos: 35,
  autoresChave: [
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Ingedore Villaça Koch (A Coesão Textual)',
    'Luiz Antônio Marcuschi (Produção Textual, Análise de Gêneros e Compreensão)',
  ],
  alertasCebraspe: [
    'O Cebraspe diferencia com precisão milimétrica "compreensão" (o que está estritamente dito no texto) e "interpretação" (o que se infere ou depreende com base nas premissas textuais). Qualquer assertiva que traga conhecimento enciclopédico externo ao texto incorre em EXTRAPOLAÇÃO e deve ser julgada ERRADA.',
    'A banca adora inverter os papéis lógicos de causa e consequência. Em períodos com conectivos como "já que", "visto que" ou "porquanto", o Cebraspe afirma no item que a oração subordinada causal é a consequência do fato principal.',
    'O pronome relativo "cujo" (e flexões) SEMPRE estabelece relação de posse entre dois substantivos e JAMAIS admite artigo posposto ("cujo o" é erro grave). Além disso, ele concorda em gênero e número com o termo subsequente (a coisa possuída), e não com o antecedente (o possuidor).',
    'Concessão versus Adversidade: A conjunção concessiva ("embora", "conquanto", "ainda que") subordina um fato que poderia impedir a oração principal, mas não impede. O Cebraspe testa se o candidato confunde a oração mais forte do argumento com a concessiva atenuada.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Cebraspe dos Operadores Argumentativos e Conectivos de Alta Incidência',
    colunas: ['Relação Semântica', 'Conectivos Canônicos', 'Impacto Argumentativo', 'Armadilha Típica da Banca', 'Regra Mental de Reconhecimento'],
    linhas: [
      [
        'Causalidade',
        'Porque, visto que, já que, porquanto, como (início)',
        'Apresenta o fato motivador / deflagrador que gerou a oração principal',
        'Inverter a ordem, chamando a causa de consequência ou de conclusão',
        'Pergunte: "O que aconteceu primeiro no tempo real?" O que aconteceu primeiro é a causa.',
      ],
      [
        'Concessão',
        'Embora, conquanto, ainda que, malgrado, a despeito de',
        'Introduz ressalva fraca que não tem força para anular o fato principal',
        'Substituir por "contudo" ou "mas" e afirmar que a estrutura oracional e modo verbal se mantêm intactos',
        'Concessivas exigem verbo no MODO SUBJUNTIVO (embora faça, conquanto seja).',
      ],
      [
        'Adversidade',
        'Mas, porém, contudo, todavia, entretanto, no entanto',
        'Introduz a ideia com maior peso argumentativo no parágrafo',
        'Afirmar que a conjunção "mas" pode ser deslocada para o meio da oração (o "mas" é estritamente inicial)',
        'Todas as adversativas aceitam deslocamento entre vírgulas, EXCETO o "mas".',
      ],
      [
        'Conclusão',
        'Portanto, por conseguinte, logo, destarte, dessarte, pois (posposto)',
        'Encerra uma dedução lógica decorrente de premissas apresentadas',
        'Confundir o "pois" explicativo (início da oração) com o "pois" conclusivo (entre vírgulas após o verbo)',
        'Pois antes do verbo = Causa/Explicação. Pois depois do verbo (entre vírgulas) = Portanto (Conclusão).',
      ],
      [
        'Condição',
        'Se, caso, desde que, contanto que, a menos que',
        'Subordina a eficácia de um ato a evento futuro e incerto',
        'Trocar "se" por "caso" sem alterar o modo verbal (se fizer / caso faça)',
        '"Se" rege Futuro do Subjuntivo; "Caso" rege Presente do Subjuntivo.',
      ],
    ],
  },
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
  teoriaDensaMarkdown: `### 1. A Arquitetura da Leitura Crítica: Compreensão versus Interpretação

Nos concursos de alto nível do **Cebraspe** para o Poder Legislativo (Câmara dos Deputados e Senado Federal), as questões de texto exigem rigor técnico e recusa absoluta ao "achismo". A banca opera sob a moderna Linguística Textual (**Ingedore Koch**, *A Coesão Textual*, 2002; **Luiz Antônio Marcuschi**, *Produção Textual, Análise de Gêneros e Compreensão*, 2008), exigindo que o candidato identifique com precisão as marcas linguísticas que autorizam ou refutam cada assertiva.

---

#### A. A Linha Divisória: Compreensão vs Interpretação

| Critério de Análise | Compreensão Textual (*Decoding*) | Interpretação Textual (*Inferencing*) |
|---|---|---|
| **Comando Típico do Cebraspe** | *"De acordo com o texto..."*, *"O autor afirma expressamente que..."*, *"Segundo o primeiro parágrafo..."* | *"Depreende-se do texto que..."*, *"Infere-se das informações apresentadas que..."*, *"Conclui-se da argumentação que..."* |
| **Localização da Resposta** | A informação está presente na **superfície textual** (literalmente ou por paráfrase direta). | A informação está nas **entrelinhas legítimas**, como decorrência lógica autorizada pelas premissas do texto. |
| **Exigência Cognitiva** | Rastreamento léxico e validação de sinônimos/antônimos. | Dedução lógica estrita a partir de pistas textuais comprováveis. |
| **Limite do Julgamento** | O que o texto realmente diz. | O que o texto autoriza concluir, sem acrescentar dados externos. |

---

#### B. As Três Patologias Clássicas de Julgamento no Cebraspe

Quando a banca elabora um item de interpretação cujo gabarito é **ERRADO (E)**, ela quase invariavelmente utiliza uma das seguintes falhas:

1. **Extrapolação:** O item introduz uma afirmação que até pode ser verdadeira no mundo real ou na jurisprudência do candidato, mas **não encontra amparo no texto fornecido**. Lembre-se: no Cebraspe, o texto é o universo fechado da prova.
2. **Redução:** O texto aborda um fenômeno amplo (ex: *"a transformação digital atinge todos os setores do serviço público"*), e o item afirma que tal fenômeno limita-se a um caso particular (*"a transformação digital restringe-se às secretarias de tecnologia"*).
3. **Contradição:** O item inverte uma relação de causa e efeito, confunde o posicionamento do autor com a tese de um debatedor citado, ou afirma o oposto do que foi exposto.

---

### 2. Coesão Referencial: Rastreamento Anafórico, Elipses e Pronomes Relativos

A coesão textual é o mecanismo gramatical que tece a malha do texto, conectando termos e orações. No padrão Cebraspe, as assertivas de coesão referencial testam a capacidade de rastrear a quem determinado pronome, numeral ou substantivo elíptico se refere.

#### A. A Dinâmica dos Pronomes Demonstrativos (Cunha & Cintra, p. 336)

Na construção do texto formal, os pronomes demonstrativos exercem funções temporais, espaciais e, fundamentalmente, **textuais (endofóricas)**:

* **Este / Esta / Isto (Função Catafórica ou Referente Imediatamente Anterior):**
  - Anuncia algo que ainda será dito: *"A tese defendida pelo relator é **esta**: a despesa pública deve ser contingenciada."*
  - Em oposição com outro referente citado, retoma o elemento **mais próximo** (o último citado).
* **Esse / Essa / Isso (Função Anafórica Canônica):**
  - Retoma um termo ou ideia que já foi expressa anteriormente: *"A Câmara aprovou o projeto de lei orçamentária. **Essa** decisão assegura os investimentos sociais."*
* **Aquele / Aquela / Aquilo (Oposição de Extremos):**
  - Numa correlação com *este*, retoma o elemento **mais distante** (o primeiro citado): *"O Poder Executivo e o Poder Legislativo possuem atribuições distintas: **este** (o Legislativo) fiscaliza e legisla; **aquele** (o Executivo) administra a máquina pública."*

---

#### B. O Comportamento Rigoroso do Pronome Relativo "Cujo"

O pronome relativo **cujo** (e suas flexões *cuja, cujos, cujas*) é um dos temas prediletos do Cebraspe em provas para a Câmara dos Deputados:

1. **Relação de Posse Obrigatória:** Liga dois substantivos, indicando que o segundo pertence ao primeiro (*"O deputado **cujo** parecer foi lido..."* $\rightarrow$ o parecer do deputado).
2. **Proibição Absoluta de Artigo:** É gramaticalmente **proibido** pospor artigo ao pronome (*cujo o*, *cuja a*). A assertiva que sugerir a inserção de artigo após *cujo* deve ser julgada **ERRADA**.
3. **Regra de Concordância:** O pronome *cujo* concorda em gênero e número com o **termo subsequente** (a coisa possuída), e nunca com o antecedente:
   - *"A instituição [fem. sing.] **cujos** regulamentos [masc. pl.] foram revistos..."* (concorda com *regulamentos*).
4. **Preposição Anteposta:** Se o verbo da oração adjetiva exigir preposição, ela deve ser colocada **antes** de *cujo*:
   - *"O projeto legislativo **a cujos** termos aludimos ontem..."* (quem alude, alude **a**).

---

### 3. Coesão Sequencial e a Mecânica dos Operadores Argumentativos

A coesão sequencial diz respeito ao encadeamento linear dos argumentos por meio de conectivos e conjunções. O Cebraspe testa com frequência a **permutabilidade de conectivos** e a preservação do sentido original.

#### A. A Distinção entre Concessão e Adversidade (Bechara, p. 488)

A distinção entre concessão e adversidade é vital na análise textual de pareceres legislativos e debates parlamentares:

* **Oração Coordenada Adversativa (Foco na ideia mais forte):**
  - Conectivos: *mas, porém, contudo, todavia, entretanto, no entanto*.
  - Exemplo: *"O projeto de lei continha inovações louváveis, **mas** feria a Lei de Responsabilidade Fiscal."*
  - **Efeito:** O argumento dominante é o que vem introduzido pela adversativa (a violação fiscal prevalece e o projeto tende a ser rejeitado).
* **Oração Subordinada Concessiva (Atenuação da ressalva):**
  - Conectivos: *embora, conquanto, ainda que, malgrado, a despeito de, posto que*.
  - Exemplo: *"**Embora** ferisse a Lei de Responsabilidade Fiscal, o projeto de lei foi mantido pela comissão temática."*
  - **Efeito:** A concessão apresenta um obstáculo ineficaz; a ideia da oração principal é que prevalece.
  - **Alerta Cebraspe:** Substituir uma oração adversativa por concessiva **altera a hierarquia argumentativa do texto**, mesmo que preserve a correção gramatical geral.

---

#### B. A Sintaxe do Conectivo "Pois": Explicativo vs Conclusivo

O Cebraspe adora explorar a dupla personalidade do vocábulo **pois**:

1. **Pois Causal / Explicativo:** Surge no início da oração, antes do verbo. Equivale a *porque*, *já que*, *visto que*:
   - *"O quórum não foi alcançado, **pois** chovia torrencialmente na capital."*
2. **Pois Conclusivo:** Surge deslocado para o interior da oração, obrigatoriamente **entre vírgulas e após o verbo**. Equivale a *portanto*, *por conseguinte*:
   - *"O quórum não foi alcançado; a sessão foi, **pois**, cancelada pelo presidente."*

---

### 4. Pressupostos e Subentendidos no Discurso Institucional

No discurso formal, a distinção entre o que está linguisticamente marcado e o que depende do contexto de enunciação é basilar:

* **Pressupostos Textuais:** Ideias introduzidas obrigatoriamente por um elemento linguístico (gatilho). Se negarmos a oração, o pressuposto permanece verdadeiro.
  - *Advérbios de tempo/mudança:* *"A comissão **ainda** não concluiu os trabalhos"* $\rightarrow$ Pressupõe que a conclusão é esperada e que os trabalhos continuam.
  - *Verbos de cessação/permanência:* *"O parlamentar **deixou de** integrar o colegiado"* $\rightarrow$ Pressupõe que antes ele integrava o colegiado.
* **Subentendidos:** Mensagens insinuadas nas entrelinhas, que dependem da inferência do interlocutor e que o autor pode negar sem se contradizer gramaticalmente. O Cebraspe somente aceita subentendidos em itens de interpretação quando o contexto geral da passagem fornece evidências inequívocas de sua validade.`,
  checkpoints: [
    {
      id: 'chk-13-1-1',
      pergunta: 'Julgue o item sobre a distinção metodológica entre compreensão e interpretação no Cebraspe:',
      item: 'Nas questões em que o enunciado do Cebraspe utiliza a expressão "Depreende-se do texto que", é permitido ao candidato validar a assertiva com base em fatos e leis notórias da realidade brasileira, ainda que tais elementos não encontrem respaldo direto ou indireto nas premissas do texto apresentado na prova.',
      gabarito: 'E',
      justificativa: 'Trata-se do erro clássico de EXTRAPOLAÇÃO. A expressão "depreende-se" autoriza a realização de inferências lógicas, mas tais inferências devem obrigatoriamente derivar das premissas e evidências textuais fornecidas na prova. O uso de informações extratextuais não mencionadas nem sugeridas torna o item incorreto.',
    },
    {
      id: 'chk-13-1-2',
      pergunta: 'Julgue o item referente ao emprego dos pronomes relativos segundo Celso Cunha e Lindley Cintra:',
      item: 'No trecho "A comissão parlamentar, cujos membros defenderam a urgência da votação, encerrou os trabalhos", o pronome "cujos" estabelece relação de posse com "comissão parlamentar", concorda em gênero e número com "membros" e rejeita a anteposição ou posposição de artigo definido.',
      gabarito: 'C',
      justificativa: 'Conforme preceitua Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo, p. 348), o pronome relativo cujo estabelece nexo de posse entre o termo antecedente (comissão) e o subsequente (membros), concordando estritamente com a coisa possuída (membros - masculino plural) e repelindo qualquer artigo ("cujo o" é proibido).',
    },
    {
      id: 'chk-13-1-3',
      pergunta: 'Julgue a assertiva referente ao valor sintático e semântico dos conectivos oracionais:',
      item: 'A substituição da conjunção "conquanto" por "embora" no período "Conquanto houvesse divergência regimental, o parecer foi aprovado" preservaria a correção gramatical e os sentidos originais do texto, uma vez que ambas as conjunções possuem valor estritamente concessivo e regem o modo subjuntivo.',
      gabarito: 'C',
      justificativa: 'Conforme a lição de Evanildo Bechara (Moderna Gramática Portuguesa, p. 488), tanto "conquanto" quanto "embora" são conjunções subordinativas concessivas canônicas da norma culta, ambas regendo verbo no modo subjuntivo (no caso, "houvesse" - pretérito imperfeito do subjuntivo). A permuta é perfeita e preserva integralmente a sintaxe e a semântica.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-13-1-1',
        periodo: 'Linguística Moderna (2002)',
        disciplina: 'Linguística Textual',
        focoPrincipal: 'Conceito de Textualidade e Coesão como Fator de Eficácia Comunicativa',
        figuraChave: 'Ingedore Koch',
      },
      {
        id: 'tm-13-1-2',
        periodo: 'Gramática Canônica (2008)',
        disciplina: 'Morfossintaxe da Norma Culta',
        focoPrincipal: 'Estruturação dos Conectivos, Regência e Concordância Oficial',
        figuraChave: 'Celso Cunha & Lindley Cintra',
      },
    ],
    autores: [
      {
        id: 'aut-13-1-1',
        nome: 'Celso Cunha & Lindley Cintra',
        ano: 2008,
        obraPrincipal: 'Nova Gramática do Português Contemporâneo',
        ideiaChave: 'Referência magna da norma culta para concursos federais: regência de pronomes relativos, proibições de artigos pós-cujo e emprego de demonstrativos.',
        chipPegadinha: 'Pronome Cujo sem Artigo',
      },
      {
        id: 'aut-13-1-2',
        nome: 'Evanildo Bechara',
        ano: 2009,
        obraPrincipal: 'Moderna Gramática Portuguesa (37ª Ed.)',
        ideiaChave: 'Sintaxe dos períodos compostos, orações coordenadas adversativas versus subordinadas concessivas e distinção funcional do conectivo "pois".',
        chipPegadinha: 'Concessão vs Adversidade',
      },
      {
        id: 'aut-13-1-3',
        nome: 'Ingedore Villaça Koch',
        ano: 2002,
        obraPrincipal: 'A Coesão Textual',
        ideiaChave: 'Mecanismos de progressão textual: anáfora, catáfora, elipse e cadeias de correferencialidade que sustentam o sentido do discurso.',
        chipPegadinha: 'Rastreamento Anafórico',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-1-1',
        afirmacao: 'Na frase "A comissão parlamentar, cuja a votação foi adiada, reunir-se-á amanhã", a inserção do artigo "a" após "cuja" confere maior formalidade e correção gramatical ao texto.',
        gabarito: 'E',
        porQue: 'É erro gramatical crasso pospor artigo definido ao pronome relativo "cujo" (e flexões). O pronome já incorpora valor determinante.',
      },
      {
        id: 'peg-13-1-2',
        afirmacao: 'O conectivo "pois", quando empregado no início da oração, possui valor conclusivo equivalente a "portanto".',
        gabarito: 'E',
        porQue: '"Pois" no início da oração é causal ou explicativo (equivale a "porque"). Para ser conclusivo, deve vir obrigatoriamente deslocado após o verbo e isolado entre vírgulas.',
      },
      {
        id: 'peg-13-1-3',
        afirmacao: 'A substituição de uma conjunção concessiva ("embora") por uma adversativa ("mas") altera a hierarquia argumentativa e a força ilocucionária do período.',
        gabarito: 'C',
        porQue: 'A adversativa introduz o argumento dominante (mais forte), enquanto a concessiva introduz uma ressalva atenuada que não impede a ação principal.',
      },
    ],
  },
};
