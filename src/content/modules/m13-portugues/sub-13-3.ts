import type { ModuloFilho } from '../../../domain/types';

export const submodulo133: ModuloFilho = {
  id: 'sub-13-3',
  numero: '13.3',
  titulo: 'Sintaxe Avançada: Concordância, Regência e o Sistema da Crase',
  descricaoCurta:
    'A bipartição funcional da partícula "se" (apassivadora vs índice de indeterminação), concordância com sujeitos partitivos e percentuais, a regência dos verbos parlamentares (implicar, visar, obedecer, aspirar) e o algoritmo decisório da crase.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Celso Pedro Luft (Dicionário Prático de Regência Verbal e Nominal)',
    'Domingos Paschoal Cegalla (Novíssima Gramática da Língua Portuguesa)',
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
  ],
  alertasCebraspe: [
    'A partícula "se" é um dos tópicos de maior taxa de repetição no Cebraspe. Identifique a transitividade do verbo: se for Verbo Transitivo Direto (VTD), o "se" é Pronome Apassivador e o termo subsequente é o SUJEITO PACIENTE, exigindo concordância obrigatória ("Aprovou-se a emenda" / "Aprovaram-se as emendas"). Se for Verbo Transitivo Indireto (VTI), Intransitivo (VI) ou de Ligação, o "se" é Índice de Indeterminação do Sujeito e o verbo fica OBRIGATORIAMENTE no singular ("Precisa-se de novos técnicos", jamais "precisam-se").',
    'Concordância com Expressões Partitivas ("a maioria de", "grande parte de", "a metade de") acompanhadas de adjunto no plural: a norma culta (Cunha & Cintra, p. 504) autoriza a dupla concordância facultativa (no singular com o núcleo ou no plural com o determinante: "A maioria dos parlamentares votou / votaram"). O Cebraspe adora afirmar falsamente que uma das opções é gramaticalmente incorreta ou que a concordância no plural é a única admitida.',
    'Regência do verbo "implicar": no sentido de acarretar, produzir como consequência ou resultar, é VERBO TRANSITIVO DIRETO (VTD) e REJEITA a preposição "em". A frase formal é: "A promulgação da lei implicará mudanças operacionais", e nunca "implicará em mudanças". O Cebraspe explora massivamente esse vício de linguagem comum do meio jurídico.',
    'Algoritmo infalível da Crase: A crase é a fusão da preposição "a" exigida pelo termo regente com o artigo definido feminino "a(s)" admitido pelo termo regido. Para testar com rapidez, substitua a palavra feminina por um substantivo masculino equivalente (ex: "comissão" por "colegiado"). Se surgir a forma combinada "AO", a crase é OBRIGATÓRIA ("Dirigiu-se à comissão" -> "Dirigiu-se ao colegiado"). Se resultar apenas "A" ou "O", a crase é proibida.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Cebraspe da Partícula "SE" e da Regência com Crase',
    colunas: [
      'Estrutura Sintática',
      'Classificação do "SE"',
      'Função do Termo Subsequente',
      'Comportamento do Verbo',
      'Exemplo Canônico Correto',
      'Armadilha Típica da Banca',
    ],
    linhas: [
      [
        'VTD + SE',
        'Partícula Apassivadora (PA)',
        'Sujeito Paciente',
        'Concorda em número com o sujeito (Singular ou Plural)',
        'Divulgaram-se os relatórios da auditoria.',
        'Manter o verbo no singular ("Divulgou-se os relatórios") afirmando ser sujeito indeterminado.',
      ],
      [
        'VTI (com preposição) + SE',
        'Índice de Indeterminação do Sujeito (IIS)',
        'Objeto Indireto Preposicionado',
        'Permanece estritamente na 3ª pessoa do SINGULAR',
        'Tratou-se de questões orçamentárias urgentes.',
        'Flexionar no plural concordando com o termo preposicionado ("Trataram-se de questões").',
      ],
      [
        'Verbo Implicar (Acarretar)',
        'Não aplicável (Regência VTD)',
        'Objeto Direto (sem preposição)',
        'Concorda com o sujeito agente',
        'A sanção do projeto implicou novos custos.',
        'Inserir indevidamente a preposição "em" ("implicou em novos custos").',
      ],
      [
        'Verbo Visar (Almejar / Ter por objetivo)',
        'Não aplicável (Regência VTI)',
        'Objeto Indireto com preposição "a"',
        'Concorda com o sujeito',
        'O parecer visa à garantia da estabilidade.',
        'Omitir a preposição "a" e a crase ("visa a garantia"), confundindo com visar de mirar/assinar.',
      ],
      [
        'Pronome Possessivo Feminino Singular',
        'Crase Facultativa (Mnemônico HAP)',
        'Termo Regido antecedido de possessivo',
        'Conforme regência da oração',
        'O relator fez alusão a sua / à sua proposta.',
        'Afirmar que a inserção ou retirada do acento grave alteraria o sentido ou violaria a norma.',
      ],
    ],
  },
  secoes: [
    {
      id: 'sec-particula-se',
      nivel: 3,
      titulo: '1. A Bipartição Sintática da Partícula "SE"',
      conteudo:
        'A distinção funcional entre Pronome Apassivador (Voz Passiva Sintética) e Índice de Indeterminação do Sujeito. O teste da conversão analítica e as restrições de concordância.',
    },
    {
      id: 'sec-concordancia-critica',
      nivel: 3,
      titulo: '2. Concordância Verbal Crítica: Sujeitos Partitivos e Expressões Percentuais',
      conteudo:
        'A dupla concordância com expressões partitivas (núcleo singular vs especificador plural), percentuais acompanhados de substantivo e sujeitos compostos antepostos vs pospostos.',
    },
    {
      id: 'sec-regencia-parlamentar',
      nivel: 3,
      titulo: '3. A Regência dos Verbos Parlamentares Segundo Celso Pedro Luft',
      conteudo:
        'O comportamento morfossintático dos verbos implicar, visar, assistir, obedecer, atender, aspirar e esquecer/lembrar na redação formal do Congresso.',
    },
    {
      id: 'sec-algoritmo-crase',
      nivel: 3,
      titulo: '4. O Sistema Algorítmico da Crase',
      conteudo:
        'Casos de proibição categórica, obrigatoriedade estrita e os três casos facultativos clássicos (nomes próprios femininos, possessivos adjetivos femininos singulares e após a preposição até).',
    },
  ],
  teoriaDensaMarkdown: `### 1. A Bipartição Sintática da Partícula "SE"

A identificação precisa das funções sintáticas da palavra **"se"** é um dos divisores de águas nas provas de nível superior do **Cebraspe**. Mais de 40% dos erros dos candidatos decorrem da confusão entre a **Voz Passiva Sintética** e o **Sujeito Indeterminado**.

---

#### A. O Algoritmo da Partícula Apassivadora (PA)
A palavra "se" será **Partícula Apassivadora** (ou pronome apassivador) quando:
1. Associar-se a um **Verbo Transitivo Direto (VTD)** ou **Transitivo Direto e Indireto (VTDI)**.
2. Não houver agente explícito na oração.
3. O termo sem preposição que segue o verbo exercer a função de **SUJEITO PACIENTE**.

> **Regra de Concordância Obrigatória:** O verbo DEVE concordar em número e pessoa com o sujeito paciente:
> * *"Identificou-se uma inconformidade no texto."* (Sujeito singular $\rightarrow$ Verbo no singular).
> * *"**Identificaram-se** várias inconformidades no texto."* (Sujeito plural $\rightarrow$ Verbo no plural).

*O Teste da Conversão Analítica:* Para ter certeza absoluta, converta a frase para a voz passiva com o verbo *ser*:
*"Identificaram-se várias inconformidades"* = *"Várias inconformidades **foram identificadas**"*. Se a conversão for natural, o "se" é apassivador!

---

#### B. O Algoritmo do Índice de Indeterminação do Sujeito (IIS)
A palavra "se" será **Índice de Indeterminação do Sujeito** quando:
1. Associar-se a um **Verbo Transitivo Indireto (VTI)** (com preposição), **Verbo Intransitivo (VI)** ou **Verbo de Ligação (VL)**.
2. O termo seguinte vier regido de preposição obrigatória.
3. O sujeito da ação for desconhecido ou deliberadamente omitido.

> **Regra de Bloqueio no Singular:** Sob o IIS, o verbo fica **RIGOROSAMENTE NA 3ª PESSOA DO SINGULAR**, sendo gramaticalmente **proibida** a flexão no plural:
> * *"**Precisa-se** de novos assessores técnicos."* (Certo: "de novos assessores" é Objeto Indireto preposicionado).
> * *"~~Precisam-se de novos assessores técnicos.~~"* (ERRADO: objeto indireto não pode ser sujeito de verbo).
> * *"**Tratava-se** de matérias constitucionais complexas."* (Certo: singular obrigatório).

---

### 2. Concordância Verbal Crítica: Partitivos e Expressões Percentuais

Conforme preceituam **Celso Cunha & Lindley Cintra** (*Nova Gramática do Português Contemporâneo*, 2008, p. 504) e **Evanildo Bechara** (2009):

#### A. Expressões Partitivas com Determinante Plural
Com expressões como *a maioria de, grande parte de, a minoria de, uma porção de, fração expressiva de* seguidas de substantivo no plural:
* **Concordância Lógica (Gramatical):** O verbo flexiona no singular, concordando com o núcleo partitivo:
  - *"A maioria dos deputados **votou** favoravelmente."*
* **Concordância Atrativa (Silepse / Sentido):** O verbo flexiona no plural, concordando com o especificador:
  - *"A maioria dos deputados **votaram** favoravelmente."*
* **Postura da Banca Cebraspe:** Ambas as construções são **plenamente corretas**. O item que afirmar que uma delas é inaceitável ou obrigatória deve ser julgado **ERRADO**.

#### B. Expressões Percentuais e Fracionárias
1. **Sem especificador substantivo:** O verbo concorda com o número da porcentagem:
   - *"Apenas **1%** [singular] **votou** contra."*
   - *"Cerca de **15%** [plural] **rejeitaram** a emenda."*
2. **Com especificador substantivo:** Admite-se a concordância com o numeral ou com o substantivo:
   - *"**1%** dos parlamentares **rejeitou** [com 1%] ou **rejeitaram** [com parlamentares] o texto."*
   - *"**80%** da bancada governista **aprovou** [com a bancada] ou **aprovaram** [com 80%] o projeto."*

---

### 3. A Regência dos Verbos Parlamentares Segundo Celso Pedro Luft

No célebre *Dicionário Prático de Regência Verbal* (São Paulo: Ática, 2002), **Celso Pedro Luft** catalogou as regências mais cobradas pelo Cebraspe:

1. **Implicar (no sentido de produzir como consequência, resultar, acarretar):**
   - É **Transitivo Direto**. REJEITA a preposição *em*.
   - *Padrão Culto:* *"A rejeição da matéria implica o encerramento da sessão."* (Sem "em").
2. **Visar (no sentido de almejar, ter como meta ou objetivo):**
   - É **Transitivo Indireto**, regendo a preposição **a**.
   - *Padrão Culto:* *"O novo regulamento visa **à** simplificação de procedimentos."* (com crase diante de feminina).
   - *Nota:* No sentido de mirar ou colocar o visto (assinar), é VTD: *"O diretor visou o passaporte"*.
3. **Obedecer e Desobedecer:**
   - São estritamente **TransitMicheis Indiretos**, exigindo a preposição **a**.
   - *Padrão Culto:* *"O servidor deve obedecer **às** normas regimentais."* (e não *"as normas"*).
4. **Assistir:**
   - *No sentido de presenciar / ver:* VTI com preposição **a** (*"assistir **ao** debate parlamentar"*).
   - *No sentido de prestar assistência / socorrer:* VTD ou VTI (*"assistir o / ao enfermo"*).
   - *No sentido de caber / pertencer / competir:* VTI com preposição **a** (*"assiste **ao** presidente convocar a reunião"*).

---

### 4. O Sistema Algorítmico da Crase

A crase é um fenômeno fonético-morfossintático de contração da preposição **a** com o artigo feminino **a(s)** ou com a letra inicial dos pronomes demonstrativos **aquele(s), aquela(s), aquilo**.

#### A. Casos de Proibição Absoluta (A crase é ERRADA):
1. **Antes de palavras masculinas:** *"Andar a pé"*, *"votação a prazo"*, *"respeito a princípios"*.
2. **Antes de verbos:** *"Dispostos a colaborar"*, *"começou a redigir"*.
3. **Antes de pronomes que repelem artigo:** *"Fez referência a ela"*, *"pediu a esta comissão"*, *"dirigiu-se a Vossa Excelência"*.
4. **Diante da palavra "quem" ou "cuja":** *"A autoridade a quem nos dirigimos"*.
5. **Com "a" no singular diante de palavra no plural:** *"Referiu-se a questões regimentais"* (apenas preposição).

#### B. Os Três Casos Clássicos de Crase Facultativa (Mnemônico HAP):
Nas três situações a seguir, o uso do acento grave é **opcional**; a sua presença ou supressão não altera a correção gramatical:
1. **H** — Diante de **Nomes Próprios Femininos Humanizados** (sem adjetivo especificador): *"Enviei a correspondência a Maria"* ou *"...à Maria"*.
2. **A** — Após a preposição **Até** (quando indicativa de limite de espaço ou tempo): *"O parlamentar foi até a tribuna"* ou *"...até à tribuna"*.
3. **P** — Diante de **Pronomes Possessivos Femininos Singulares Adjetivos** (*minha, tua, sua, nossa, vossa*): *"Apresentou emendas a sua bancada"* ou *"...à sua bancada"*.
   - *Atenção Cebraspe:* Se o pronome possessivo for plural (*suas propostas*) ou pronome substantivo (que substitui o nome, ex: *"fez referência à minha proposta e à sua"*), a crase torna-se obrigatória!`,
  checkpoints: [
    {
      id: 'chk-13-3-1',
      pergunta:
        'Julgue a assertiva referente à concordância verbal com a partícula "se" apassivadora:',
      item: 'No trecho "Aprovou-se, após intensos debates regimentais, as novas diretrizes orçamentárias da União", a flexão verbal na terceira pessoa do singular justifica-se pelo fato de o sujeito da oração encontrar-se indeterminado pela partícula "se".',
      gabarito: 'E',
      justificativa:
        'Conforme preceitua Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo, p. 388), o verbo "aprovar" é transitivo direto (VTD). Associado ao pronome "se", forma-se a voz passiva sintética, na qual o termo "as novas diretrizes orçamentárias da União" atua como SUJEITO PACIENTE no plural. Logo, a concordância verbal no plural é rigorosamente obrigatória: "Aprovaram-se (...) as novas diretrizes". O item incorre no erro de confundir apassivação com indeterminação do sujeito.',
    },
    {
      id: 'chk-13-3-2',
      pergunta:
        'Julgue o item quanto à regência verbal do verbo implicar na norma culta segundo Celso Pedro Luft:',
      item: 'A substituição da redação "A revogação do decreto implicará custos imprevistos ao erário" por "A revogação do decreto implicará em custos imprevistos ao erário" preservaria a correção gramatical do texto formal.',
      gabarito: 'E',
      justificativa:
        'Conforme o Dicionário Prático de Regência Verbal de Celso Pedro Luft (p. 297), o verbo "implicar", no sentido de acarretar ou ter como consequência, é transitivo direto (VTD) e REJEITA terminantemente a preposição "em". A inserção da preposição "em" constitui desvio gramatical no padrão culto da língua.',
    },
    {
      id: 'chk-13-3-3',
      pergunta:
        'Julgue a assertiva referente ao emprego facultativo do acento grave indicativo de crase:',
      item: 'No trecho "O deputado prestou homenagem a sua bancada partidária", a aposição do acento grave na palavra "a", resultando em "à sua bancada partidária", manteria a correção gramatical e os sentidos originais do texto.',
      gabarito: 'C',
      justificativa:
        'Conforme ensina Domingos Paschoal Cegalla (Novíssima Gramática da Língua Portuguesa, p. 344), diante de pronomes possessivos femininos singulares ("sua") acompanhados de substantivo, o emprego do artigo definido é facultativo na norma culta. Como o termo regente ("prestar homenagem a") exige a preposição "a", a junção com o artigo facultativo torna o uso da crase igualmente facultativo. O sentido e a correção permanecem perfeitamente resguardados.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-13-3-1',
        periodo: '1987',
        disciplina: 'Sintaxe de Regência',
        focoPrincipal: 'Sistematização Científica da Regência Verbal e Nominal no Brasil',
        figuraChave: 'Celso Pedro Luft',
      },
      {
        id: 'tm-13-3-2',
        periodo: '2005',
        disciplina: 'Gramática Normativa',
        focoPrincipal: 'Metodologia Didática dos Casos Canônicos de Crase e Concordância',
        figuraChave: 'Domingos Paschoal Cegalla',
      },
    ],
    autores: [
      {
        id: 'aut-13-3-1',
        nome: 'Celso Pedro Luft',
        ano: 1987,
        obraPrincipal: 'Dicionário Prático de Regência Verbal',
        ideiaChave:
          'O verbo "implicar" no sentido de acarretar é transitivo direto (sem "em"); verbos de sentimento e aspiração exigem regência preposicionada rigorosa.',
        chipPegadinha: 'Regência sem Preposição em Implicar',
      },
      {
        id: 'aut-13-3-2',
        nome: 'Domingos Paschoal Cegalla',
        ano: 2005,
        obraPrincipal: 'Novíssima Gramática da Língua Portuguesa',
        ideiaChave:
          'A crase opera sob a regra da duplicidade: exigência de preposição pelo regente + presença de artigo no regido. Os três casos facultativos compõem a regra HAP.',
        chipPegadinha: 'Mnemônico HAP da Crase',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-3-1',
        afirmacao:
          'Na frase "Tratam-se de assuntos urgentes", a concordância verbal no plural é legítima em virtude do núcleo "assuntos".',
        gabarito: 'E',
        porQue:
          'O verbo "tratar-se" é transitivo indireto (rege a preposição "de"). O "se" atua como Índice de Indeterminação do Sujeito, exigindo que o verbo permaneça OBRIGATORIAMENTE na 3ª pessoa do singular: "Trata-se de assuntos".',
      },
      {
        id: 'peg-13-3-2',
        afirmacao:
          'A frase "O parlamentar fez alusão a questões pertinentes" exige o uso do acento grave indicativo de crase em virtude da regência nominal de "alusão".',
        gabarito: 'E',
        porQue:
          'A palavra "a" está no singular diante de substantivo no plural ("questões"). Isso comprova que existe apenas a preposição "a", sem artigo definido feminino ("as"). Logo, a crase é gramaticalmente proibida.',
      },
      {
        id: 'peg-13-3-3',
        afirmacao:
          'Na oração "A maioria dos servidores públicos compareceu à audiência", a substituição de "compareceu" por "compareceram" preserva a correção gramatical.',
        gabarito: 'C',
        porQue:
          'Com expressões partitivas seguidas de determinante no plural, admite-se a concordância lógica no singular (com "a maioria") ou atrativa no plural (com "servidores").',
      },
    ],
  },
};
