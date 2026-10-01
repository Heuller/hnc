import type { ModuloFilho } from '../../../domain/types';

export const submodulo111: ModuloFilho = {
  id: 'sub-11-1',
  numero: '11.1',
  titulo: 'Fundamentos da Lógica Proposicional e Conectivos (Método dos Cenários Mentais)',
  descricaoCurta: 'Sentenças declarativas vs não proposições, os três princípios lógicos supremos (Identidade, Não Contradição e Terceiro Excluído), conectivos proposicionais e a técnica do Falso/Verdadeiro Único baseada na Teoria dos Modelos Mentais de Johnson-Laird.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Philip Johnson-Laird (Mental Models Theory)', 'George Boole (Álgebra Booleana)', 'Aristóteles (Órganon)', 'Gottlob Frege'],
  alertasCebraspe: [
    'O Cebraspe adora colocar sentenças interrogativas ("Qual o valor do orçamento?"), exclamativas ("Que excelente parecer!"), imperativas ("Arquive este processo!") ou paradoxos abertos ("Esta frase é falsa"). NENHUMA delas é proposição lógica perante a banca.',
    'Sentenças com variáveis não quantificadas (ex.: "x + 5 = 12" ou "Ele foi o relator da matéria") são sentenças ABERTAS. Não possuem valor de verdade definido, portanto NÃO são proposições no Cebraspe a menos que a variável seja determinada.',
    'A conjunção disfarçada em "MAS": No padrão Cebraspe, conectivos adversativos do português ("mas", "porém", "contudo", "todavia") possuem valor estrito de CONJUNÇÃO LÓGICA (conectivo "E" / ∧).',
    'A disjunção inclusiva ("OU" / ∨) só é FALSA se ambas as partes forem falsas. Se ao menos uma proposição for verdadeira, o "OU" já é verdadeiro. Já a disjunção exclusiva ("OU... OU" / ⊻) exige valores lógicos diferentes.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Cognitiva dos 5 Conectivos Lógicos (Regra do Ponto Único de Decisão)',
    colunas: ['Conectivo Lógico', 'Símbolo Formal', 'Leitura Canônica', 'Gatilho do Falso / Verdadeiro Único', 'Regra Mental Rápida'],
    linhas: [
      ['Conjunção', 'P ∧ Q', 'P e Q', 'Regra do V ÚNICO: Só é Verdadeira se AMBOS forem V', 'Basta 1 Falso para contaminar e derrubar a sentença'],
      ['Disjunção Inclusiva', 'P ∨ Q', 'P ou Q', 'Regra do F ÚNICO: Só é Falsa se AMBOS forem F', 'Basta 1 Verdadeiro para salvar toda a sentença'],
      ['Condicional', 'P → Q', 'Se P, então Q', 'Regra do F ÚNICO (Vera Fischer): Só é Falsa se V → F', 'Se o antecedente P for Falso, a condicional é SEMPRE V'],
      ['Bicondicional', 'P ↔ Q', 'P se e somente se Q', 'Regra da IGUALDADE: V se valores forem IGUAIS (V↔V ou F↔F)', 'Valores opostos geram sempre Falso'],
      ['Disjunção Exclusiva', 'P ⊻ Q', 'Ou P, ou Q', 'Regra da DIFERENÇA: V se valores forem DIFERENTES', 'Valores iguais (V⊻V ou F⊻F) geram sempre Falso'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Ciência da Aprendizagem Lógica do Zero: Por que Métodos Tradicionais Falham?

Estudos seminais de psicologia cognitiva (**Philip Johnson-Laird**, *Mental Models Theory*, 1983; 2006) comprovam que a mente humana não processa o raciocínio através de tabelas sintáticas puramente abstratas, mas sim construindo **modelos mentais** de mundos possíveis (cenários em que uma afirmação é verdadeira ou falsa).

A abordagem tradicional de forçar o estudante iniciante a memorizar as 20 linhas das tabelas-verdade gera **sobrecarga cognitiva extrínseca** (*Cognitive Load Theory* de John Sweller). Para aprender lógica do zero com retenção definitiva para o Cebraspe, adotamos a **Metodologia dos Cenários Mentais**:
1. **Concreto:** Tradução da linguagem natural em cenários de compromisso factual.
2. **Representacional (Chunking):** Identificação do *Gatilho Único de Decisão* (a linha crítica de cada conectivo).
3. **Abstrato:** Formalização algébrica precisa requerida pela banca.

---

### 2. O que é uma Proposição Lógica no Padrão Cebraspe?

Uma **proposição** (ou sentença fechada) é toda oração declarativa que expressa um pensamento completo, à qual se pode atribuir, sem ambiguidade, um e apenas um valor lógico: **Verdadeiro (V)** ou **Falso (F)**.

#### A. Os Três Princípios Fundamentais do Pensamento Lógico (Aristóteles)
1. **Princípio da Identidade:** Uma proposição verdadeira é verdadeira; uma proposição falsa é falsa (P = P).
2. **Princípio da Não Contradição:** Uma proposição não pode ser verdadeira e falsa simultaneamente (¬(P ∧ ¬P)).
3. **Princípio do Terceiro Excluído:** Uma proposição ou é verdadeira ou é falsa, não havendo um terceiro valor lógico possível.

#### B. O que NÃO é Proposição (Armadilhas Clássicas Cebraspe)
O Cebraspe frequentemente coloca itens tentando fazer o candidato analisar o valor lógico de sentenças que **não** são proposições:
* **Sentenças Interrogativas:** "A Câmara aprovou a matéria?" (Sem valor V/F).
* **Sentenças Exclamativas:** "Excelente discurso do parlamentar!" (Expressão emotiva).
* **Sentenças Imperativas:** "Analise o relatório imediatamente." (Comando / ordem).
* **Sentenças Abertas:** "Ele foi presidente da comissão" ou "x + 2 > 10". Como o sujeito ou a variável não estão determinados, não há valor de verdade estável.
* **Paradoxos:** "Esta frase é mentirosa." (Se for V, é mentira, logo F; se for F, é verdade que mente, logo V).

---

### 3. A Gramática dos Conectivos Lógicos e a Regra do Ponto Único

Uma proposição composta é formada pela união de proposições simples por meio de **conectivos lógicos**. Cada conectivo obedece a uma regra de valoração estrita.

#### A. Conjunção (P ∧ Q — "E", "MAS", "BEM COMO")
* **Modelo Mental:** Imagine um contrato em que você se compromete com duas tarefas: *"Vou redigir o parecer E vou protocolar o processo"*. Se você fizer uma e esquecer a outra, quebrou o contrato.
* **Regra do V Único:** A conjunção só é **VERDADEIRA** quando todos os seus membros forem verdadeiros (V ∧ V = V). Qualquer componente falso contamina o todo, tornando o resultado **FALSO**.
* **Alerta Cebraspe:** Palavras como *"mas"*, *"porém"*, *"contudo"*, *"embora"* e *"além disso"* operam logicamente como conjunção (∧). Exemplo: *"O deputado votou, mas não discursou"* ≡ P ∧ ¬Q.

#### B. Disjunção Inclusiva (P ∨ Q — "OU")
* **Modelo Mental:** Imagine a exigência: *"Para o cargo, exige-se diploma de Biblioteconomia OU Ciência da Informação"*. Se o candidato tiver um deles, cumpre. Se tiver ambos, também cumpre perfeitamente!
* **Regra do F Único:** A disjunção inclusiva só é **FALSA** quando ambos os componentes forem simultaneamente falsos (F ∨ F = F). Basta uma única verdade para que toda a sentença seja verdadeira.

#### C. Disjunção Exclusiva (P ⊻ Q — "OU... OU...")
* **Modelo Mental:** *"Ou o projeto será aprovado hoje, ou a sessão será encerrada sem votação"*. É impossível que ambas as situações ocorram ao mesmo tempo.
* **Regra da Diferença:** A disjunção exclusiva só é **VERDADEIRA** quando os valores lógicos dos componentes forem **diferentes** (V ⊻ F = V ou F ⊻ V = V). Se forem iguais (V ⊻ V ou F ⊻ F), o resultado é **FALSO**.

#### D. O Conectivo Bicondicional (P ↔ Q — "SE E SOMENTE SE")
* **Modelo Mental:** Expressa uma equivalência mútua de duas vias: a ida e a volta são obrigatórias.
* **Regra da Igualdade:** A bicondicional só é **VERDADEIRA** quando os componentes tiverem o **mesmo valor lógico** (V ↔ V = V e F ↔ F = V). Se os valores divergirem, é **FALSA**.

---

### 4. Construção Cognitiva da Tabela-Verdade sem Sobrecarga

Para calcular o número de linhas da tabela-verdade de uma proposição com *n* proposições simples distintas, utiliza-se a fórmula matemática:
**Número de Linhas = 2ⁿ**

* Com 2 proposições ($P, Q$): $2^2 = 4$ linhas ($VV, VF, FV, FF$).
* Com 3 proposições ($P, Q, R$): $2^3 = 8$ linhas.
* Com 4 proposições: $2^4 = 16$ linhas.

O Cebraspe testa com frequência se o candidato sabe calcular esse quantitativo sem precisar montar a tabela inteira na folha de prova.`,
  checkpoints: [
    {
      id: 'chk-11-1-1',
      pergunta: 'Julgue o item sobre o conceito canônico de proposição lógica segundo a banca Cebraspe:',
      item: 'A sentença "Arquive todos os pareceres técnicos da Comissão de Finanças e Tributação até as 18 horas!" é classificada como uma proposição lógica simples cujo valor de verdade é indeterminado.',
      gabarito: 'E',
      justificativa: 'Trata-se de uma sentença IMPERATIVA (que expressa uma ordem). Sentenças imperativas, exclamativas e interrogativas não possuem valor de verdade (nem verdadeiro nem falso) e, portanto, NÃO são proposições lógicas perante a banca.',
    },
    {
      id: 'chk-11-1-2',
      pergunta: 'Julgue a assertiva referente ao valor lógico dos conectivos segundo as regras proposicionais:',
      item: 'Considerando que P seja uma proposição verdadeira e Q seja uma proposição falsa, a proposição composta "(P ou Q) e (P e não Q)" possui valor lógico verdadeiro.',
      gabarito: 'C',
      justificativa: 'Vamos resolver por partes: 1) (P ou Q) = (V ou F) = V. 2) Como Q é F, não Q é V. Logo, (P e não Q) = (V e V) = V. 3) Por fim, a conjunção entre ambas: V e V = V. A proposição é inteiramente verdadeira.',
    },
    {
      id: 'chk-11-1-3',
      pergunta: 'Julgue o item referente à estrutura quantitativa da tabela-verdade:',
      item: 'A tabela-verdade de uma proposição lógica composta formada por 4 proposições simples distintas possui exatamente 16 linhas.',
      gabarito: 'C',
      justificativa: 'O número de linhas de uma tabela-verdade é dado estritamente pela fórmula 2^n, em que n é o número de proposições atômicas distintas. Para n = 4, temos 2^4 = 2 * 2 * 2 * 2 = 16 linhas.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-11-1-1',
        periodo: 'Séc. IV a.C.',
        disciplina: 'Lógica Aristotélica',
        focoPrincipal: 'Órganon e Formulação dos Princípios do Pensamento',
        figuraChave: 'Aristóteles',
      },
      {
        id: 'tm-11-1-2',
        periodo: '1854',
        disciplina: 'Álgebra da Lógica',
        focoPrincipal: 'As Leis do Pensamento e a Álgebra Booleana (0 e 1 / V e F)',
        figuraChave: 'George Boole',
      },
      {
        id: 'tm-11-1-3',
        periodo: '1983 - Atual',
        disciplina: 'Ciência Cognitiva',
        focoPrincipal: 'Teoria dos Modelos Mentais no Raciocínio Humano',
        figuraChave: 'Philip Johnson-Laird',
      },
    ],
    autores: [
      {
        id: 'aut-11-1-1',
        nome: 'Philip Johnson-Laird',
        ano: 1983,
        obraPrincipal: 'Mental Models: Towards a Cognitive Science of Language, Inference, and Consciousness',
        ideiaChave: 'Raciocínio lógico opera via simulação de cenários mentais possíveis, e não por regras sintáticas cegas.',
        chipPegadinha: 'Mental Models Theory',
      },
      {
        id: 'aut-11-1-2',
        nome: 'George Boole',
        ano: 1854,
        obraPrincipal: 'An Investigation of the Laws of Thought',
        ideiaChave: 'Criação da lógica binária simbólica moderna, conectivos proposicionais e tabelas-verdade.',
        chipPegadinha: 'Álgebra Booleana',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-1-1',
        afirmacao: 'A frase "Ele é o presidente do Senado Federal" é uma proposição lógica com valor verdadeiro.',
        gabarito: 'E',
        porQue: 'Trata-se de sentença aberta com pronome indefinido ("Ele"). Sem a identificação expressa do sujeito, não há como atribuir V ou F de forma objetiva.',
      },
      {
        id: 'peg-11-1-2',
        afirmacao: 'Na frase "O parecer foi redigido, mas não foi votado", a palavra "mas" expressa uma disjunção entre as orações.',
        gabarito: 'E',
        porQue: 'Na lógica proposicional, o conectivo adversativo "mas" equivale rigorosamente à conjunção "E" (∧). Ambas as orações são afirmadas simultaneamente.',
      },
    ],
  },
};
