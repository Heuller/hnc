import type { ModuloFilho } from '../../../domain/types';

export const submodulo114: ModuloFilho = {
  id: 'sub-11-4',
  numero: '11.4',
  titulo: 'Argumentação Lógica, Validade de Silogismos e Resolução Cebraspe / Câmara dos Deputados',
  descricaoCurta: 'Diferença entre verdade empírica e validade lógica, regras de inferência dedutiva (Modus Ponens e Modus Tollens), o método do contraexemplo para testar validade, matrizes de associação lógica e resolução de problemas reais Cebraspe da Câmara dos Deputados.',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Aristóteles (Silogística Formal)', 'Daniel Kahneman (Heurística da Validade vs Crença Factual)', 'Charles Sanders Peirce (Lógica de Dedução e Indução)', 'Karl Popper (Critério de Falsificabilidade)'],
  alertasCebraspe: [
    'Verdade vs Validade: O Cebraspe testa reiteradamente se o candidato confunde a veracidade das frases com a validade formal do argumento. Um argumento pode ter premissas empiricamente absurdas ("Todo pássaro é feito de ferro") e ser 100% VÁLIDO do ponto de vista dedutivo.',
    'O Teste da Refutação (Falsificação): Para provar que um argumento é INVÁLIDO perante a banca, basta encontrar um único cenário em que TODAS as premissas sejam verdadeiras e a conclusão seja FALSA. Se esse cenário for possível, o argumento é inválido.',
    'Modus Ponens vs Falácia: Em P → Q, se afirmamos P, concluímos legitimamente Q (Modus Ponens). Porém, se afirmamos Q, NÃO podemos concluir P (Falácia da Afirmação do Consequente).',
    'Modus Tollens vs Falácia: Em P → Q, se negamos Q (~Q), concluímos legitimamente ~P (Modus Tollens). Porém, se negamos P (~P), NÃO podemos concluir ~Q (Falácia da Negação do Antecedente).',
    'Problemas de Verdade e Mentira: Quando duas pessoas fazem afirmações que se contradizem diretamente (ex.: João diz "Fui eu" e Pedro diz "Não foi o João"), obrigatoriamente UMA DELAS MENTE e A OUTRA FALA A VERDADE. Use essa contradição como ponto de apoio inicial.',
  ],
  quadroComparativo: {
    titulo: 'Estruturas de Inferência Dedutiva: Formas Válidas vs Falácias Comuns Cebraspe',
    colunas: ['Estrutura Dedutiva', 'Premissa 1', 'Premissa 2', 'Conclusão', 'Classificação Cebraspe'],
    linhas: [
      ['Modus Ponens', 'Se P, então Q (P → Q)', 'Ocorre P', 'Portanto, ocorre Q', '✅ FORMA VÁLIDA (Regra de Ouro)'],
      ['Modus Tollens', 'Se P, então Q (P → Q)', 'Ocorre não Q (~Q)', 'Portanto, ocorre não P (~P)', '✅ FORMA VÁLIDA (Contrapositiva)'],
      ['Silogismo Hipotético', 'Se P, então Q (P → Q)', 'Se Q, então R (Q → R)', 'Portanto, se P, então R (P → R)', '✅ FORMA VÁLIDA (Transitividade)'],
      ['Afirmação do Consequente', 'Se P, então Q (P → Q)', 'Ocorre Q', 'Portanto, ocorre P', '❌ INVÁLIDO (Falácia Clássica)'],
      ['Negação do Antecedente', 'Se P, então Q (P → Q)', 'Ocorre não P (~P)', 'Portanto, ocorre não Q (~Q)', '❌ INVÁLIDO (Falácia Clássica)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura de um Argumento Lógico: Premissas e Conclusão

Um **argumento lógico** é um conjunto estruturado de proposições no qual uma delas — a **conclusão** (C) — é deduzida e sustentada pelas demais — as **premissas** (P₁, P₂, ..., Pₖ):
**P₁, P₂, ..., Pₖ ⊢ C**

Palavras indicadoras de premissa no texto da prova: *"dado que"*, *"pois"*, *"visto que"*, *"considerando que"*.  
Palavras indicadoras de conclusão: *"portanto"*, *"logo"*, *"conclui-se que"*, *"por conseguinte"*, *"assim"*.

---

### 2. Verdade Empírica vs. Validade Dedutiva: O Choque Cognitivo do Cebraspe

Este é o ponto onde o estudante autodidata sem preparo erra com mais frequência:
* **Verdade / Falsidade:** É uma propriedade do **conteúdo** de cada proposição isolada frente à realidade factual do mundo (ex.: *"A capital do Brasil é Brasília"* é V; *"A Lua é de queijo"* é F).
* **Validade / Invalidade:** É uma propriedade da **relação formal** entre as premissas e a conclusão de um argumento dedutivo. Não depende se as premissas são fatos reais no mundo físico!

> **Exemplo Clássico de Argumento VÁLIDO com Premissas Falsas:**
> * Premissa 1: Todos os deputados federais têm quatro asas.
> * Premissa 2: Sócrates é um deputado federal.
> * Conclusão: Logo, Sócrates tem quatro asas.
> 
> *Julgamento Cebraspe:* O argumento é **FORMALMENTE VÁLIDO**! Embora as premissas sejam empiricamente falsas na biologia, a conclusão decorre de forma necessária e inescapável das premissas assumidas como verdadeiras.

---

### 3. O Método da Refutação (Falsificação Rápida)

Para provar que um argumento do Cebraspe é **INVÁLIDO**, não tente provar que ele é válido em mil casos. Aplique o teste de falsificação:
1. Assuma que **todas as premissas são VERDADEIRAS**.
2. Force a **conclusão a ser FALSA**.
3. Verifique se existe alguma combinação lógica possível que permita isso sem gerar contradição nas premissas.
   * Se for possível ter **Premissas Verdadeiras + Conclusão Falsa**, o argumento é **INVÁLIDO (Falácia)**.
   * Se for absolutamente impossível tornar a conclusão falsa mantendo as premissas verdadeiras, o argumento é **VÁLIDO**.

---

### 4. Resolução Estratégica de Problemas de Verdade e Mentira e Associação Lógica

Nos concursos da **Câmara dos Deputados** e grandes tribunais, o Cebraspe apresenta cenários como:
> *"Quatro servidores prestaram depoimento à corregedoria. Um deles praticou irregularidade e apenas um disse a verdade."*

#### O Passo a Passo Infalível:
1. **Identifique a Contradição Direta:** Procure dois depoimentos que afirmam fatos opostos (ex.: $A$ diz *"Foi B"* e $B$ diz *"Não fui eu"*).
2. **Isole o Par de Contradição:** Como as afirmações são contraditórias, **uma delas é obrigatoriamente V e a outra é obrigatoriamente F**.
3. **Analise as Demais Sentenças:** Se o enunciado diz que *"apenas um servidor falou a verdade"*, e você já sabe que essa única verdade está dentro do par contraditório, então **todos os outros servidores fora do par falaram obrigatoriamente MENTIRAS (F)**!
4. **Substitua e Resolva:** Com o valor falso dos outros depoimentos, deduza instantaneamente quem cometeu a ação.`,
  checkpoints: [
    {
      id: 'chk-11-4-1',
      pergunta: 'Julgue o item relativo à teoria dos argumentos e à validade lógica segundo a banca Cebraspe:',
      item: 'Considere o seguinte argumento: "Se a proposta orçamentária for aprovada pela comissão mista, então haverá concurso público. Não houve concurso público. Portanto, a proposta orçamentária não foi aprovada pela comissão mista.". Nesse caso, a estrutura apresentada constitui um argumento logicamente válido.',
      gabarito: 'C',
      justificativa: 'Trata-se de uma inferência legítima por Modus Tollens (ou Contrapositiva): P → Q, ~Q ⊢ ~P. Se a primeira garante a segunda, a ausência da segunda prova necessariamente que a primeira não ocorreu. O argumento é impecavelmente válido.',
    },
    {
      id: 'chk-11-4-2',
      pergunta: 'Julgue a assertiva referente à validade formal versus verdade factual:',
      item: 'Um argumento dedutivo que apresente premissas factualmente verdadeiras no mundo real terá, obrigatoriamente, uma estrutura lógica válida.',
      gabarito: 'E',
      justificativa: 'Erro conceitual gravíssimo explorado pelo Cebraspe! A validade não depende da verdade dos fatos, mas sim da relação de necessidade dedutiva entre premissas e conclusão. É perfeitamente possível construir um argumento inválido com premissas verdadeiras (ex.: "O Brasil é uma república. A França é uma república. Logo, os brasileiros falam francês" - premissas verdadeiras, conclusão falsa e argumento inválido).',
    },
    {
      id: 'chk-11-4-3',
      pergunta: 'Julgue o item baseado em prova real do Cebraspe para a Câmara dos Deputados (Analista Legislativo):',
      item: 'Considere as proposições P: "Maria pagou e não assistiu." e Q: "João assistiu sem pagar.". Nesse caso, a proposição Q é a negação lógica de "Se João assistiu, então ele pagou".',
      gabarito: 'C',
      justificativa: 'Item real CEBRASPE / Câmara dos Deputados. A negação de uma condicional (Se A então B) segue a regra MANÉ: mantém a primeira E nega a segunda (A ∧ ~B). Para "Se João assistiu, então ele pagou", a negação é "João assistiu E não pagou", o que equivale com precisão semântico-lógica a "João assistiu sem pagar" (proposição Q). Item CERTO.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-11-4-1',
        periodo: 'Séc. IV a.C.',
        disciplina: 'Lógica Clássica',
        focoPrincipal: 'Primeiros Analíticos e a Teoria do Silogismo Categórico',
        figuraChave: 'Aristóteles',
      },
      {
        id: 'tm-11-4-2',
        periodo: '1934',
        disciplina: 'Epistemologia da Ciência',
        focoPrincipal: 'Lógica da Pesquisa Científica e o Critério de Falsificabilidade',
        figuraChave: 'Karl Popper',
      },
      {
        id: 'tm-11-4-3',
        periodo: '2011',
        disciplina: 'Economia Comportamental e Cognição',
        focoPrincipal: 'Rápido e Devagar: Duas Formas de Pensar (Heurísticas de Julgamento)',
        figuraChave: 'Daniel Kahneman',
      },
    ],
    autores: [
      {
        id: 'aut-11-4-1',
        nome: 'Aristóteles',
        ano: -350,
        obraPrincipal: 'Primeiros Analíticos (Órganon)',
        ideiaChave: 'Fundamentação do silogismo dedutivo: se as premissas forem verdadeiras, a conclusão segue-se necessariamente.',
        chipPegadinha: 'Silogismo Dedutivo',
      },
      {
        id: 'aut-11-4-2',
        nome: 'Daniel Kahneman',
        ano: 2011,
        obraPrincipal: 'Thinking, Fast and Slow (Rápido e Devagar)',
        ideiaChave: 'Belief Bias: a tendência humana de julgar um argumento como válido apenas porque concordamos com a conclusão.',
        chipPegadinha: 'Belief Bias em Lógica',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-4-1',
        afirmacao: 'Se um argumento dedutivo possui premissas verdadeiras e conclusão verdadeira, então ele é necessariamente válido.',
        gabarito: 'E',
        porQue: 'A validade exige nexo causal-dedutivo estrito, e não mera coincidência de veracidade factual. As premissas precisam OBRIGAR a conclusão a ser verdadeira.',
      },
      {
        id: 'peg-11-4-2',
        afirmacao: 'Em um problema de lógica com cinco suspeitos, se dois deles fazem afirmações que se contradizem, ambos são culpados.',
        gabarito: 'E',
        porQue: 'Em afirmações contraditórias (A e ~A), um deles está dizendo a verdade e o outro está mentindo. A contradição delimita a verdade, não a culpa de ambos.',
      },
    ],
  },
};
