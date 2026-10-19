import type { ModuloFilho } from '../../../domain/types';

export const submodulo122: ModuloFilho = {
  id: 'sub-12-2',
  numero: '12.2',
  editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 2: Morfossintaxe e Coesão Textual)',
  preRequisitos: ["sub-12-1"],
  titulo: 'Marcadores Discursivos (Linking Words) e Conjunções de Transição Argumentativa',
  antesDeLer: [
    {
      termo: 'Discourse Markers (Conectivos)',
      definicao: 'Palavras e locuções que estabelecem relações lógicas entre orações: adição, contraste, causa, consequência, conclusão.',
      exemploBiblioteca: 'Identificar a relação de contraste indicada pelo conectivo \'However\' em texto da IFLA sobre acesso aberto.',
    },
    {
      termo: 'Conectivos de Oposição e Concessão',
      definicao: 'Termos chave: Although, Even though, Despite, In spite of, However, Nevertheless, On the other hand, Whereas.',
      exemploBiblioteca: 'O Cebraspe frequentemente pergunta se \'Although\' pode ser substituído por \'Despite\' sem alterar o sentido (atenção à estrutura gramatical seguinte).',
    },
    {
      termo: 'Conectivos de Causa e Consequência',
      definicao: 'Causa: Because, Since, As, Due to; Consequência: Therefore, Thus, Consequently, Hence, As a result.',
      exemploBiblioteca: 'Identificar a relação causal em: \'Due to severe budget constraints, the digitisation project was delayed\'.',
    },
    {
      termo: 'Conectivos de Adição e Ênfase',
      definicao: 'Adição: Furthermore, Moreover, In addition, Besides; Ênfase: Indeed, Notably, In fact, Particularly.',
      exemploBiblioteca: 'Reconhecer que \'Furthermore\' introduz um novo argumento convergente em texto sobre metadados Linked Data.',
    },
  ],
  descricaoCurta: 'As famílias funcionais de conectivos em inglês (contraste, concessão, causa, consequência, adição e condição), a distinção sintática entre Although e Despite, e as técnicas de substituição e equivalência semântica cobradas pelo Cebraspe.',
  tempoEstimadoMinutos: 9,
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
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Marcadores Discursivos (*Linking Words* / Connectors)** e as conjunções estabelecem as relações de sentido lógico entre frases e parágrafos em textos em inglês:
1. **Categorias Semânticas Canônicas de Conectivos:**
   - **Contraste / Oposição / Concessão:**
     - *However, Nevertheless, Nonetheless, Yet, Still* (No entanto, todavia, contudo).
     - *Although, Even though, Though* (Embora, ainda que — introduzem orações subordinadas concessivas).
     - *Despite, In spite of* (Apesar de — seguidos de substantivo ou verbo no \`-ing\`!).
     - *On the other hand, Whereas, While* (Por outro lado, enquanto que).
   - **Causa e Consequência:**
     - *Causa:* *Because, Since, As, Due to, Owing to* (Porque, já que, devido a).
     - *Consequência / Conclusão:* *Therefore, Thus, Hence, Consequently, As a result* (Portanto, dessa forma, por conseguinte).
   - **Adição / Continuidade:**
     - *Furthermore, Moreover, In addition, Besides, Also* (Além disso, ademais).
   - **Condição:**
     - *If, Unless* (a não ser que / a menos que = *if not*), *Provided that, As long as* (contanto que).
   - **Finalidade / Propósito:**
     - *In order to, So as to, So that* (A fim de que, para que).
2. **Equivalência e Substituição Semântica no Cebraspe:**
   - A banca testa frequentemente se a substituição de um conectivo por outro preserva o sentido original e a correção gramatical do texto (ex.: trocar *However* por *Nevertheless*, ou *Due to* por *Owing to*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Interpretação de Relatório do Banco Mundial sobre Dívida Pública):** O texto em inglês afirma: *"Although the fiscal deficit increased, inflation remained under control"*. O analista traduz para a Consultoria de Orçamento: *"Embora o déficit fiscal tenha aumentado, a inflação permaneceu sob controle"*, identificando a oração concessiva introduzida por *Although*.
- **Cenário 2 (Análise de Condição em Acordo de Cooperação Internacional):** Em termo de doação de livros da Biblioteca do Congresso americano para a Câmara, consta a cláusula: *"The books will be delivered, **unless** shipping costs exceed the budget"*. O bibliotecário alerta a Diretoria: os livros serão entregues **a não ser que** os custos de frete superem o teto orçamentário.
- **Cenário 3 (Articulação Argumentativa em Artigo para Publicação Internacional):** Ao redigir artigo em inglês para a IFLA sobre as inovações da BDCam, o bibliotecário utiliza *Furthermore* e *Moreover* para encadear os avanços de inteligência artificial aplicados aos anais históricos da Câmara.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Marcador Discursivo | Relação Lógica Estabelecida | Equivalentes Diretos | Pegadinha Típica Cebraspe |
| :--- | :--- | :--- | :--- |
| **However / Nevertheless** | Contraste / Oposição | *Nonetheless, Yet, Still* | Dizer que expressa causa ou adição |
| **Although / Even though** | Concessão (quebra de expectativa) | *Though, In spite of the fact that* | Exige oração com verbo conjugado |
| **Despite / In spite of** | Concessão | Seguido de nome ou \`-ing\` | Não aceitam oração com sujeito e verbo direto |
| **Therefore / Thus** | Conclusão / Consequência | *Hence, Consequently, As a result* | Dizer que expressa contraste |
| **Unless** | Condição negativa (*If not*) | *Except if* | Confundir com *as long as* (afirmativo) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca de Conector de Causa por Consequência:** A banca afirma que a substituição de *Because* por *Therefore* mantém o sentido original do período. **Gabarito: ERRADO.** *Because* introduz a causa; *Therefore* introduz a consequência (são vetores lógicos opostos!).
- **Substituição de Although por Despite:** Dizer que se pode substituir *Although* por *Despite* sem qualquer alteração sintática na frase. **Gabarito: ERRADO.** *Although* introduz uma oração completa (com sujeito e verbo); *Despite* exige sintagma nominal ou verbo substantivado no gerúndio (\`-ing\`).
- **Sentido de Unless:** A banca afirma que *Unless the law is passed* significa *Se a lei for aprovada*. **Gabarito: ERRADO.** *Unless* significa *A não ser que a lei seja aprovada* (condição negativa).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **HALLIDAY, M. A. K.; HASAN, Ruqaiya.** *Cohesion in English*. London: Longman, 1976. (A obra fundacional sobre coesão e conectivos lógicos).
- **MURPHY, Raymond.** *English Grammar in Use*. 5. ed. Cambridge: Cambridge University Press, 2019. (A gramática prática mais respeitada no mundo).
- **HEWINGS, Martin.** *Advanced Grammar in Use*. 3. ed. Cambridge: Cambridge University Press, 2013.
- **SWALES, John M.; FEAK, Christine B.** *Academic Writing for Graduate Students: Essential Tasks and Skills*. 3. ed. Ann Arbor: University of Michigan Press, 2012.
- **CEBRASPE.** *Banco de Questões de Provas de Língua Inglesa para o Congresso Nacional*. Brasília: Cebraspe, 2022.`,
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
