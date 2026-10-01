import type { ModuloFilho } from '../../../domain/types';

export const submodulo122: ModuloFilho = {
  id: 'sub-12-2',
  numero: '12.2',
  titulo: 'Marcadores Discursivos (Linking Words) e Conjunções de Transição Argumentativa',
  descricaoCurta: 'As famílias funcionais de conectivos em inglês (contraste, concessão, causa, consequência, adição e condição), a distinção sintática entre Although e Despite, e as técnicas de substituição e equivalência semântica cobradas pelo Cebraspe.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Ken Hyland (Discourse Analysis & Metadiscourse)', 'M.A.K. Halliday (Cohesion in English)', 'Ruqaiya Hasan', 'Prof. Gabriela Kruger'],
  alertasCebraspe: [
    'Substituição de Conectivos de Famílias Diferentes: O Cebraspe propõe trocar "however" por "therefore", ou "furthermore" por "although". O item é INVANCIVELMENTE ERRADO, pois altera a orientação argumentativa do parágrafo.',
    'Diferença estrutural entre Although e Despite: "Although" e "Even though" são seguidos de ORAÇÃO COMPLETA (sujeito + verbo). Já "Despite" e "In spite of" são preposições seguidas exclusivamente de SUBSTANTIVO ou VERBO NO GERÚNDIO (-ing). O Cebraspe testa se o candidato sabe que não se pode colocar "Despite" antes de uma oração verbal sem "the fact that".',
    'A palavra "Unless": Equivale rigorosamente a "If... not" (a menos que, a não ser que). Frase: "Unless parliament approves the bill..." = "If parliament does not approve the bill...".',
    'Conectivos de Causa vs Conclusão: "Because / Since / As" introduzem a CAUSA. "Therefore / Thus / Hence / Consequently" introduzem o EFEITO ou a CONCLUSÃO.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Canônico de Linking Words e Conjunções para o Cebraspe',
    colunas: ['Família Semântica', 'Conectivos Principais em Inglês', 'Tradução / Sentido', 'Regra de Substituição Válida'],
    linhas: [
      ['Contraste / Concessão', 'However, nevertheless, nonetheless, yet, although, despite', 'Porém, contudo, não obstante, embora, apesar de', 'However pode ser substituído por Nevertheless / Nonetheless'],
      ['Adição', 'Furthermore, moreover, in addition, besides, as well as', 'Além disso, ademais, bem como', 'Furthermore pode ser substituído por Moreover / In addition'],
      ['Causa / Motivo', 'Because, since, as, due to, owing to', 'Porque, já que, visto que, devido a', 'Since (com valor causal) pode ser substituído por As / Because'],
      ['Consequência / Efeito', 'Therefore, thus, hence, consequently, as a result', 'Portanto, assim, por conseguinte, logo', 'Therefore pode ser substituído por Thus / Consequently / Hence'],
      ['Condição', 'Unless, provided that, as long as', 'A menos que, contanto que, desde que', 'Unless equivale logicamente a If... not'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Os Marcadores Discursivos (*Linking Words*) e a Arquitetura da Coesão

Em textos legislativos, acadêmicos e analíticos em língua inglesa, os **marcadores discursivos** (*Discourse Markers* / *Linking Words* — **Ken Hyland**, 2005) atuam como os "sinais de trânsito" do texto. Eles informam ao leitor se a próxima sentença vai:
* **Somar** um argumento novo à mesma linha de defesa (**Adição**).
* **Contradizer** ou limitar o que acabou de ser afirmado (**Contraste / Concessão**).
* Apresentar o **motivo** gerador (**Causa**).
* Mostrar a **consequência** inescapável (**Efeito / Conclusão**).

No concurso da Câmara dos Deputados e exames federais do Cebraspe, **mais de 30% das questões de gramática aplicada giram em torno da substituição semântica de conectivos**.

---

### 2. A Família do Contraste e da Concessão (Oposto / Quebra de Expectativa)

Esta é a família com **maior recorrência de questões** na banca Cebraspe.

#### A. Conectivos Adversativos de Transição
* **However / Nevertheless / Nonetheless / Yet:** Traduzem-se por *contudo*, *no entanto*, *todavia*, *entretanto*. Vêm geralmente entre vírgulas ou no início de um período após ponto-e-vírgula.
* *Equivalência Direta Cebraspe:* "However" pode ser substituído por "Nevertheless" ou "Nonetheless" sem prejuízo para o sentido e para a correção gramatical do texto.

#### B. Concessivos com Oração Subordinada vs Preposições
Esta é a distinção gramatical mais sofisticada cobrada pela banca:
* **Although / Even though / Though:** Exigem **Sujeito + Verbo**.
  * *Exemplo:* *"Although the bill was controversial, it passed the vote."* (Oração completa).
* **Despite / In spite of:** Exigem **Substantivo** ou **Verbo no Gerúndio (-ing)**.
  * *Exemplo:* *"Despite the intense controversy, the bill passed the vote."* (Substantivo).
  * *Exemplo:* *"In spite of having strong opposition, the bill passed the vote."* (Gerúndio).

> **Alerta Cebraspe:** "Despite" **NÃO aceita a preposição "of"**! É "Despite" ou "In spite of". Dizer "Despite of" é erro gramatical grosseiro.

---

### 3. A Família da Adição (Acúmulo de Evidências)

Usados pelo autor para demonstrar que seu ponto de vista possui múltiplos pilares:
* **Furthermore / Moreover / In addition / Besides:** Traduzem-se por *além disso*, *ademais*, *outrossim*.
* **Not only... but also:** Estrutura enfática correlata: *"O projeto não apenas reduz os custos, mas também aumenta a transparência pública."*

---

### 4. A Família da Causa e da Consequência: Quem Gera Quem?

O Cebraspe adora redigir assertivas invertendo a relação de causalidade. Guarde com precisão:

#### A. Indicadores de Causa (A Origem / O Porquê)
* **Because / Since / As:** Introduzem a justificativa.
  * *Cuidado Especial com "Since":* Em inglês, "Since" tem dois sentidos canônicos:
    1. **Temporal:** *"Since 1988..."* (Desde 1988).
    2. **Causal:** *"Since the committee has no quorum, the session is cancelled."* (Já que / Visto que a comissão não tem quórum...). O Cebraspe testa se o aluno percebe o valor de "já que".
* **Due to / Owing to / Because of:** Preposições de causa seguidas de substantivo.

#### B. Indicadores de Efeito / Conclusão (O Resultado)
* **Therefore / Thus / Hence / Consequently / As a result:** Traduzem-se por *portanto*, *assim*, *por conseguinte*.`,
  checkpoints: [
    {
      id: 'chk-12-2-1',
      pergunta: 'Julgue o item sobre substituição de marcadores discursivos no padrão Cebraspe:',
      item: 'No texto, o vocábulo "However" no início do segundo parágrafo poderia ser substituído por "Therefore" sem prejuízo para a coerência e para a correção gramatical do texto.',
      gabarito: 'E',
      justificativa: 'Erro conceitual gravíssimo! "However" é um conectivo adversativo de CONTRASTE (oposição de ideias, equivalente a "contudo/no entanto"), enquanto "Therefore" é um conectivo conclusivo de CONSEQUÊNCIA (equivalente a "portanto/por conseguinte"). A troca altera totalmente o sentido pretendido pelo autor.',
    },
    {
      id: 'chk-12-2-2',
      pergunta: 'Julgue a assertiva referente à estrutura sintática das linking words concessivas:',
      item: 'A sentença "Despite the president presented strong arguments, the council rejected the proposal" está gramaticalmente correta de acordo com a norma-padrão da língua inglesa.',
      gabarito: 'E',
      justificativa: 'Incorreto. A preposição "Despite" não pode ser seguida diretamente por uma oração com sujeito e verbo conjugado ("the president presented"). O correto seria utilizar a conjunção "Although" ("Although the president presented...") ou a locução "Despite the fact that the president presented...".',
    },
    {
      id: 'chk-12-2-3',
      pergunta: 'Julgue o item acerca da equivalência semântica e gramatical de conectivos:',
      item: 'Em textos argumentativos, a palavra "Furthermore" pode ser adequadamente substituída por "Moreover", sem alteração do sentido original de adição de argumentos.',
      gabarito: 'C',
      justificativa: 'Correto. Tanto "Furthermore" quanto "Moreover" pertencem à mesma família semântica de conectivos aditivos transfrásticos (traduzidos como "além disso", "ademais"), compartilhando o mesmo papel retórico de introduzir um argumento suplementar.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-12-2-1',
        periodo: '1976',
        disciplina: 'Linguística Textual',
        focoPrincipal: 'Cohesion in English e a Taxonomia das Conjunções Coesivas',
        figuraChave: 'M.A.K. Halliday & Ruqaiya Hasan',
      },
      {
        id: 'tm-12-2-2',
        periodo: '2005',
        disciplina: 'Análise do Discurso',
        focoPrincipal: 'Metadiscourse e a Função Interpessoal dos Linking Words',
        figuraChave: 'Ken Hyland',
      },
    ],
    autores: [
      {
        id: 'aut-12-2-1',
        nome: 'Ken Hyland',
        ano: 2005,
        obraPrincipal: 'Metadiscourse: Exploring Interaction in Writing',
        ideiaChave: 'Conectivos discursivos orientam a cognição do leitor e estabelecem a autoridade argumentativa.',
        chipPegadinha: 'Linking Words & Metadiscurso',
      },
      {
        id: 'aut-12-2-2',
        nome: 'M.A.K. Halliday',
        ano: 1976,
        obraPrincipal: 'Cohesion in English',
        ideiaChave: 'A coesão textual é tecida por marcadores de relação lógica entre as proposições.',
        chipPegadinha: 'Coesão Conjuntiva',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-12-2-1',
        afirmacao: 'A locução prepositiva "In spite of" pode ser livremente reduzida para "In spite" sem a preposição "of".',
        gabarito: 'E',
        porQue: 'A locução prepositiva exige a preposição "of" ("In spite of"). Apenas "Despite" é utilizado de forma autônoma sem preposição.',
      },
      {
        id: 'peg-12-2-2',
        afirmacao: 'O conectivo "Unless" possui valor aditivo semelhante a "Besides".',
        gabarito: 'E',
        porQue: '"Unless" é um conectivo condicional negativo equivalente a "If... not" (a menos que, a não ser que).',
      },
    ],
  },
};
