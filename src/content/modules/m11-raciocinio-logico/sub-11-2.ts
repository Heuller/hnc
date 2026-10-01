import type { ModuloFilho } from '../../../domain/types';

export const submodulo112: ModuloFilho = {
  id: 'sub-11-2',
  numero: '11.2',
  titulo: 'A Condicional Cebraspe (P → Q), Equivalências e o Freio do Sistema 2',
  descricaoCurta: 'A anatomia da condicional, condição suficiente vs necessária, as falácias de Wason (afirmação do consequente e negação do antecedente), as duas equivalências canônicas da condicional (Contrapositiva e NÉOU) e as Leis de De Morgan.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Peter Wason (Wason Selection Task)', 'Jonathan Evans (Dual-Process Reasoning)', 'Augustus De Morgan', 'Daniel Kahneman'],
  alertasCebraspe: [
    'A banca Cebraspe explora massivamente a Falácia da Afirmação do Consequente: dada a sentença "Se chove, a rua fica molhada", a banca afirma que isso equivale a "Se a rua está molhada, então choveu". ITEM TOTALMENTE ERRADO! A volta não é garantida.',
    'A regra "NÉOU" da condicional: P → Q equivale logicamente a ~P ∨ Q (Nega a primeira OU Mantém a segunda). O Cebraspe testa essa equivalência em praticamente todas as provas de tribunais e legislativo.',
    'A Contrapositiva é a ÚNICA equivalência puramente condicional: P → Q equivale a ~Q → ~P (Inverte as posições e nega ambas as proposições).',
    'Condição Suficiente vs Necessária: Na estrutura "Se P, então Q", o antecedente P é condição SUFICIENTE para Q, enquanto o consequente Q é condição NECESSÁRIA para P. O Cebraspe inverte propositalmente esses termos nas assertivas.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Mestre de Equivalências e Falácias da Condicional (P → Q)',
    colunas: ['Transformação Lógica', 'Fórmula', 'Exemplo em Linguagem Natural', 'Status Lógico no Cebraspe'],
    linhas: [
      ['Sentença Original', 'P → Q', 'Se estudo com foco, sou aprovado na Câmara', 'Padrão de Referência'],
      ['Equivalência Contrapositiva', '~Q → ~P', 'Se NÃO fui aprovado na Câmara, então NÃO estudei com foco', '✅ EQUIVALÊNCIA VÁLIDA (Inverte e Nega)'],
      ['Equivalência Disjuntiva (NÉOU)', '~P ∨ Q', 'NÃO estudo com foco OU sou aprovado na Câmara', '✅ EQUIVALÊNCIA VÁLIDA (Nega a 1ª OU Mantém a 2ª)'],
      ['Falácia da Inversão Simples (Recíproca)', 'Q → P', 'Se sou aprovado na Câmara, então estudei com foco', '❌ FALÁCIA (Afirmação do Consequente)'],
      ['Falácia da Negação Direta (Contrário)', '~P → ~Q', 'Se NÃO estudo com foco, então NÃO sou aprovado na Câmara', '❌ FALÁCIA (Negação do Antecedente)'],
      ['Negação Lógica (MANÉ)', 'P ∧ ~Q', 'Estudo com foco E NÃO sou aprovado na Câmara', '⚠️ NEGAÇÃO (Não é equivalente, é o oposto!)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Condicional e o Paradoxo de Wason: Por que Erramos sem o Freio do Sistema 2?

A proposição condicional (**Se P, então Q**, representada por $P \to Q$) é a estrutura lógica com **maior índice de erros em concursos públicos**.

Em 1966, o psicólogo cognitivo **Peter Wason** idealizou o famoso *Wason Selection Task* (Tarefa de Seleção de Cartas). Ele demonstrou que mais de 80% das pessoas adultas falham ao testar uma regra condicional porque o cérebro intuitivo (**Sistema 1** de Daniel Kahneman e Jonathan Evans) busca confirmação imediata (*Matching Bias*), presumindo equivocadamente que a condicional é uma via de mão dupla.

#### O Protocolo Freio do Sistema 2
Para acertar 100% dos itens da banca Cebraspe, você deve acionar deliberadamente o **Sistema 2** através de duas perguntas-guia:
1. *"O Cebraspe está tentando me induzir a achar que o consequente garante o antecedente?"*
2. *"Existe algum cenário em que a primeira parte é verdadeira e a segunda é falsa?"* Se não existir, a condicional é verdadeira!

---

### 2. A Tabela-Verdade da Condicional e a Regra "Vera Fischer"

Na condicional $P \to Q$:
* $P$ é chamado de **antecedente** (ou premissa).
* $Q$ é chamado de **consequente** (ou conclusão).

| P | Q | P → Q | Cenário Mental | Resultado |
| :---: | :---: | :---: | :--- | :---: |
| V | V | **V** | Prometeu e cumpriu | **Verdadeiro** |
| V | F | **F** | Prometeu e NÃO cumpriu (**V**era **F**ischer = **F**alsa) | **FALSO (Único Caso!)** |
| F | V | **V** | Não prometeu, mas algo ocorreu (Sem quebra de contrato) | **Verdadeiro** |
| F | F | **V** | Não prometeu e não ocorreu (Sem quebra de contrato) | **Verdadeiro** |

> **Princípio Fundamental Cebraspe:** Se o antecedente $P$ for **Falso**, a condicional $P \to Q$ é **SEMPRE VERDADEIRA**, independentemente do que aconteça em $Q$! O Cebraspe usa essa regra teórica para aprovar assertivas que parecem absurdas no senso comum.

---

### 3. Condição Suficiente vs. Condição Necessária

O Cebraspe frequentemente substitui a expressão "Se... então" pelas expressões "condição suficiente" e "condição necessária":

**[Condição Suficiente: P] ───→ [Condição Necessária: Q]**

* **P é condição SUFICIENTE para Q:** Basta que P aconteça para que Q ocorra com certeza absoluta.
* **Q é condição NECESSÁRIA para P:** Q é uma exigência prévia indispensável para que P possa ter ocorrido. Sem Q, P jamais existiria.

**Exemplo Prático Legislativo:**
> *"Se o candidato for nomeado Analista Legislativo, então ele prestou o concurso da Câmara."*
> * Nomear-se Analista é **condição suficiente** para garantir que prestou o concurso.
> * Prestar o concurso é **condição necessária** para ser nomeado (mas não suficiente, pois muitos prestaram e não foram nomeados).

---

### 4. As Duas Equivalências Mestras da Condicional no Cebraspe

Duas proposições são **equivalentes** (A ≡ B) quando possuem exatamente a mesma tabela-verdade (são verdadeiras nos mesmos casos e falsas nos mesmos casos). No Cebraspe, a condicional possui duas transformações canônicas obrigatórias:

#### 1ª Equivalência: A Contrapositiva (Inverte e Nega Tudo)
**P → Q ≡ ¬Q → ¬P**
* Para manter a mesma validade com um "Se... então", você deve inverter as proposições e negar ambas.
* *Frase:* "Se chove, então o trânsito atrasa."
* *Contrapositiva válida:* "Se o trânsito NÃO atrasa, então NÃO chove."

#### 2ª Equivalência: A Regra Disjuntiva "NÉOU" (Nega a 1ª OU Mantém a 2ª)
**P → Q ≡ ¬P ∨ Q**
* Transforma a condicional em uma disjunção inclusiva ("OU").
* *Frase:* "Se o deputado comparecer, haverá quórum."
* *Equivalência NÉOU:* "O deputado NÃO comparece OU haverá quórum."

---

### 5. As Leis de De Morgan (Negação de Conjunções e Disjunções)

Formuladas pelo matemático **Augustus De Morgan**, explicam como negar proposições compostas por "E" e "OU":

1. **Negação de Conjunção:** **¬(P ∧ Q) ≡ ¬P ∨ ¬Q**
   * Nega a primeira, nega a segunda e **troca o E pelo OU**.
   * *"Não é verdade que leio e escrevo"* ≡ *"Não leio OU não escrevo"*.
2. **Negação de Disjunção:** **¬(P ∨ Q) ≡ ¬P ∧ ¬Q**
   * Nega a primeira, nega a segunda e **troca o OU pelo E**.
   * *"Não é verdade que o projeto foi aprovado ou rejeitado"* ≡ *"O projeto NÃO foi aprovado E NÃO foi rejeitado"* (permanece pendente).`,
  checkpoints: [
    {
      id: 'chk-11-2-1',
      pergunta: 'Julgue o item acerca da equivalência lógica de proposições condicionais no padrão Cebraspe:',
      item: 'A proposição "Se o processo legislativo é célere, os cidadãos são beneficiados" é logicamente equivalente à proposição "Se os cidadãos são beneficiados, o processo legislativo é célere".',
      gabarito: 'E',
      justificativa: 'Item clássico da Falácia da Afirmação do Consequente (inversão simples). A proposição P → Q NÃO equivale a Q → P. A equivalência legítima por contraposição exige a inversão acompanhada da dupla negação: ~Q → ~P ("Se os cidadãos NÃO são beneficiados, o processo legislativo NÃO é célere").',
    },
    {
      id: 'chk-11-2-2',
      pergunta: 'Julgue a assertiva referente à transformação disjuntiva da condicional:',
      item: 'A proposição "Se a matéria for constitucional, então ela será admitida na CCJC" possui a mesma tabela-verdade que "A matéria não é constitucional ou ela será admitida na CCJC".',
      gabarito: 'C',
      justificativa: 'Aplicação exata da regra NÉOU: P → Q equivale a ~P ∨ Q. Nega-se a primeira ("A matéria não é constitucional"), insere-se a disjunção "OU" e mantém-se a segunda ("ela será admitida na CCJC"). Ambas as proposições são estritamente equivalentes.',
    },
    {
      id: 'chk-11-2-3',
      pergunta: 'Julgue o item relativo às Leis de De Morgan para negação de proposições:',
      item: 'A negação lógica da proposição "O deputado votou a favor da emenda e o parecer foi aprovado" é corretamente expressa por "O deputado não votou a favor da emenda ou o parecer não foi aprovado".',
      gabarito: 'C',
      justificativa: 'Aplicação exata da primeira Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se a primeira oração ("O deputado não votou..."), troca-se a conjunção "e" pela disjunção "ou" e nega-se a segunda oração ("o parecer não foi aprovado").',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-11-2-1',
        periodo: '1847',
        disciplina: 'Lógica Matemática',
        focoPrincipal: 'Formalização das Leis de De Morgan para Conjunções e Disjunções',
        figuraChave: 'Augustus De Morgan',
      },
      {
        id: 'tm-11-2-2',
        periodo: '1966',
        disciplina: 'Psicologia do Raciocínio',
        focoPrincipal: 'Wason Selection Task e a demonstração das falácias condicionais',
        figuraChave: 'Peter Wason',
      },
      {
        id: 'tm-11-2-3',
        periodo: '2002 - Atual',
        disciplina: 'Ciência Cognitiva Comportamental',
        focoPrincipal: 'Teoria do Duplo Processo: Sistema 1 (Intuição) e Sistema 2 (Análise)',
        figuraChave: 'Jonathan Evans & Daniel Kahneman',
      },
    ],
    autores: [
      {
        id: 'aut-11-2-1',
        nome: 'Peter Wason',
        ano: 1966,
        obraPrincipal: 'Reasoning about a Rule (The Wason Selection Task)',
        ideiaChave: 'Humanos têm tendência natural a confirmar em vez de falsear hipóteses condicionais.',
        chipPegadinha: 'Matching Bias Condicional',
      },
      {
        id: 'aut-11-2-2',
        nome: 'Augustus De Morgan',
        ano: 1847,
        obraPrincipal: 'Formal Logic: or, The Calculus of Inference, Necessary and Probable',
        ideiaChave: 'Equivalências de negação: a negação de E vira OU; a negação de OU vira E.',
        chipPegadinha: 'Leis de De Morgan',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-2-1',
        afirmacao: 'Dizer que "Se chove, não vou à praia" é logicamente equivalente a afirmar que "Se não chove, vou à praia".',
        gabarito: 'E',
        porQue: 'Falácia da Negação do Antecedente (~P → ~Q). O fato de não chover não obriga a pessoa a ir à praia (ela pode ficar em casa por outro motivo). A contrapositiva correta seria: "Se vou à praia, então não chove".',
      },
      {
        id: 'peg-11-2-2',
        afirmacao: 'A negação de "João é bibliotecário e Maria é arquivista" é "João não é bibliotecário e Maria não é arquivista".',
        gabarito: 'E',
        porQue: 'Erro gravíssimo nas Leis de De Morgan! A negação de P ∧ Q é ~P ∨ ~Q (troca o "E" pelo "OU"). Para negar que ambos têm aquelas profissões, basta que pelo menos um deles NÃO a tenha.',
      },
    ],
  },
};
