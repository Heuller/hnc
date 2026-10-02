import type { ModuloFilho } from '../../../domain/types';

export const submodulo113: ModuloFilho = {
  id: 'sub-11-3',
  numero: '11.3',
  titulo: 'A Arte da Negação e Lógica de Primeira Ordem (Quantificadores Categóricos)',
  descricaoCurta: 'A regra MANÉ para negação da condicional, negação de bicondicionais e disjunções exclusivas, a lógica dos quantificadores (Todo, Nenhum, Algum), o método PEA + NÃO e a resolução de proposições categóricas via Diagramas de Euler e Venn.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['John Venn (Diagramas de Venn)', 'Leonhard Euler (Círculos de Euler)', 'Gottlob Frege (Begriffsschrift - Notação de Quantificadores)', 'Aristóteles (Quadrado das Oposições)'],
  alertasCebraspe: [
    'A MAIOR PEGADINHA DE TODA A BANCA CEBRASPE: Dizer que a negação de "Todo político é corrupto" é "Nenhum político é corrupto". ITEM ABSOLUTAMENTE ERRADO! A negação de "Todo" é existencial: basta encontrar um único político que NÃO seja corrupto (Algum / Pelo menos um / Existe político que não é corrupto).',
    'A regra MANÉ para negar a condicional P → Q: MANTÉM a primeira E NEGA a segunda (P ∧ ~Q). A negação de uma condicional NUNCA começa com a palavra "SE". Ela se transforma obrigatoriamente em uma CONJUNÇÃO ("E").',
    'A negação de "Nenhum A é B" é simplesmente "Algum A é B" (ou "Pelo menos um A é B"). NUNCA use "Todo A é B" para negar "Nenhum".',
    'A negação de uma Bicondicional (P ↔ Q) é uma Disjunção Exclusiva (P ⊻ Q), e vice-versa. Quando a banca pede para negar "P se e somente se Q", basta substituir por "Ou P, ou Q".',
  ],
  quadroComparativo: {
    titulo: 'O Quadrado Lógico das Negações de Quantificadores Categóricos',
    colunas: ['Proposição Categórica', 'Tipo Lógico', 'Negação Correta (Padrão Cebraspe)', 'Erro Típico / Pegadinha da Banca'],
    linhas: [
      ['Todo A é B', 'Universal Afirmativa', 'Algum A NÃO é B (ou: Pelo menos um / Existe A que não é B)', 'Dizer que a negação é "Nenhum A é B" (ERRADO!)'],
      ['Nenhum A é B', 'Universal Negativa', 'Algum A é B (ou: Pelo menos um / Existe A que é B)', 'Dizer que a negação é "Todo A é B" (ERRADO!)'],
      ['Algum A é B', 'Particular Afirmativa', 'Nenhum A é B (ou: Todo A NÃO é B)', 'Dizer que a negação é "Algum A não é B" (ERRADO!)'],
      ['Algum A NÃO é B', 'Particular Negativa', 'Todo A é B', 'Dizer que a negação é "Nenhum A é B" (ERRADO!)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Lógica da Negação Exata: Por que Negar Não é Apenas Dizer o Oposto?

Na lógica formal, a **negação** de uma proposição $P$ (denotada por $\neg P$ ou $\\sim P$) é uma nova proposição que assume obrigatoriamente o valor oposto em todos os cenários possíveis:
* Se a proposição original for Verdadeira, a negação é Falsa.
* Se a proposição original for Falsa, a negação é Verdadeira.

O erro cognitivo mais frequente dos candidatos decorre de aplicar o conceito intuitivo de "antônimo" do senso comum (ex.: o oposto de "tudo branco" é "tudo preto"). Na lógica matemática, **a negação é a menor quebra suficiente da verdade**.

---

### 2. A Negação da Condicional: A Regra de Ouro "MANÉ"

Como vimos, a condicional P → Q só é falsa em um único caso: quando a premissa P acontece, mas a promessa Q falha (**Vera Fischer** = V → F).

Portanto, a negação de P → Q consiste em afirmar exatamente essa única falha:
**¬(P → Q) ≡ P ∧ ¬Q**

#### O Mnemônico Universal: "MANÉ"
* **MA**ntém a primeira proposição (P)
* **E** (troca para o conectivo conjunção ∧)
* **NE**ga a segunda proposição (¬Q)

> **Atenção Inviolável para o Cebraspe:** A negação de uma condicional **NUNCA** é outra condicional! O Cebraspe adora redigir itens como: *"A negação de 'Se eu estudar, passarei' é 'Se eu estudar, não passarei'"*. **GABARITO: ERRADO!** A negação correta é uma conjunção: *"Eu estudo E não passo"* (P ∧ ¬Q).

---

### 3. Lógica de Primeira Ordem: Os Quantificadores Categóricos

A lógica proposicional simples não consegue analisar sentenças que expressam quantidades de um universo, como *"Todos os servidores da Câmara têm nível superior"*. Para isso, recorremos à **Lógica de Predicados (Gottlob Frege, 1879)** e aos quantificadores:

1. **Quantificador Universal (∀):** Abrange 100% dos elementos do conjunto.
   * Afirmativo: **TODO** (Todo A é B).
   * Negativo: **NENHUM** (Nenhum A é B ≡ Todo A não é B).
2. **Quantificador Existencial (∃):** Garante a existência de ao menos um elemento no conjunto.
   * Afirmativo: **ALGUM** / **PELO MENOS UM** / **EXISTE** (A que é B).
   * Negativo: **ALGUM... NÃO** (Pelo menos um A não é B).

---

### 4. O Método "PEA + NÃO" para Negar o "TODO"

Para falsear a afirmação de que *"Todos os gatos são pretos"*, você precisa pintar todos os gatos do mundo de branco? **Não!** Basta apresentar **um único gato malhado ou branco** para destruir a afirmação universal.

Portanto, a negação do quantificador universal afirmativo (**TODO**) é feita pela tríade existencial acompanhada de negação:
**¬(Todo A é B) ≡ Pelo menos um A NÃO é B ≡ Existe A que NÃO é B ≡ Algum A NÃO é B**

#### Mnemônico: Regra do "PEA + NÃO"
* **P**elo menos um...
* **E**xiste...
* **A**lgum...
* $+$ **NÃO**!

---

### 5. Representação Geométrica por Diagramas de Euler e Venn

A forma mais rápida e segura de resolver problemas categóricos do Cebraspe é desenhar mentalmente (ou no rascunho) os **círculos de Euler**:

1. **"Todo A é B":** O círculo A está **totalmente contido** dentro do círculo B (A ⊂ B).
   * *Atenção:* Todo A é B não significa que todo B é A! Podem existir elementos de B fora de A.
2. **"Nenhum A é B":** Os círculos A e B são **completamente disjuntos** (A ∩ B = ∅). Não há nenhum elemento em comum.
3. **"Algum A é B":** Há uma **interseção** não vazia entre os círculos (A ∩ B ≠ ∅).`,
  checkpoints: [
    {
      id: 'chk-11-3-1',
      pergunta: 'Julgue o item sobre a negação lógica de sentenças condicionais segundo a banca Cebraspe:',
      item: 'A negação lógica da proposição "Se o relator acolher a emenda, o projeto será modificado" é expressa por "O relator acolheu a emenda e o projeto não foi modificado".',
      gabarito: 'C',
      justificativa: 'Aplicação perfeita da regra MANÉ: ~(P → Q) ≡ P ∧ ~Q. Mantém-se o antecedente P ("O relator acolheu a emenda"), troca-se pelo conectivo E (∧) e nega-se o consequente Q ("o projeto não foi modificado").',
    },
    {
      id: 'chk-11-3-2',
      pergunta: 'Julgue a assertiva relativa à negação de proposições quantificadas:',
      item: 'A negação lógica da sentença "Todos os relatórios técnicos foram protocolados no prazo regimental" é "Nenhum relatório técnico foi protocolado no prazo regimental".',
      gabarito: 'E',
      justificativa: 'Pegadinha clássica e recorrente do Cebraspe! A negação de "Todo" é dada pelo quantificador existencial com negação (PEA + NÃO): "Pelo menos um relatório técnico NÃO foi protocolado no prazo regimental" (ou "Existe algum... que não"). Dizer "Nenhum" é um extremo contrário, e não a negação contraditória estrita.',
    },
    {
      id: 'chk-11-3-3',
      pergunta: 'Julgue o item referente à negação do quantificador universal negativo (Nenhum):',
      item: 'A negação lógica da afirmação "Nenhum documento arquivado na biblioteca é confidencial" é dada por "Pelo menos um documento arquivado na biblioteca é confidencial".',
      gabarito: 'C',
      justificativa: 'Correto. Para negar que "Nenhum A é B", basta comprovar a existência de ao menos um elemento em comum entre os conjuntos ("Algum A é B" / "Existe pelo menos um A que é B").',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-11-3-1',
        periodo: '1768',
        disciplina: 'Geometria Lógica',
        focoPrincipal: 'Círculos e Diagramas de Euler para Proposições Categóricas',
        figuraChave: 'Leonhard Euler',
      },
      {
        id: 'tm-11-3-2',
        periodo: '1880',
        disciplina: 'Lógica Visual',
        focoPrincipal: 'Diagramas de Venn e Teoria dos Conjuntos',
        figuraChave: 'John Venn',
      },
      {
        id: 'tm-11-3-3',
        periodo: '1879',
        disciplina: 'Lógica Moderna',
        focoPrincipal: 'Begriffsschrift e a Lógica de Primeira Ordem (Quantificadores)',
        figuraChave: 'Gottlob Frege',
      },
    ],
    autores: [
      {
        id: 'aut-11-3-1',
        nome: 'John Venn',
        ano: 1880,
        obraPrincipal: 'On the Diagrammatic and Mechanical Representation of Propositions and Reasonings',
        ideiaChave: 'Visualização espacial de interseções, uniões e negações de conjuntos categóricos.',
        chipPegadinha: 'Diagramas de Venn',
      },
      {
        id: 'aut-11-3-2',
        nome: 'Gottlob Frege',
        ano: 1879,
        obraPrincipal: 'Begriffsschrift (Conceitografia)',
        ideiaChave: 'Criação da lógica de predicados moderna e formulação dos quantificadores universal e existencial.',
        chipPegadinha: 'Quantificadores Categóricos',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-3-1',
        afirmacao: 'A negação de "Se Maria estudou, ela passou no concurso da Câmara" é "Se Maria não estudou, ela não passou no concurso da Câmara".',
        gabarito: 'E',
        porQue: 'A negação de uma condicional JAMAIS é outra condicional! Aplica-se a regra MANÉ: ~(P → Q) ≡ P ∧ ~Q ("Maria estudou E ela não passou no concurso da Câmara").',
      },
      {
        id: 'peg-11-3-2',
        afirmacao: 'Para refutar a tese de que "Todas as leis aprovadas beneficiam o povo", é necessário provar que nenhuma lei aprovada beneficia o povo.',
        gabarito: 'E',
        porQue: 'Para refutar uma afirmação universal ("Todo"), basta apresentar um único contraexemplo (PEA + NÃO: "Existe pelo menos uma lei aprovada que não beneficia o povo").',
      },
    ],
  },
};
