import type { ModuloFilho } from '../../../domain/types';

export const submodulo123: ModuloFilho = {
  id: 'sub-12-3',
  numero: '12.3',
  titulo: 'Mecanismos de Coesão Textual e Referenciação (Anáfora, Catáfora e Pronomes)',
  descricaoCurta: 'Cadeias de referenciação anafórica e catafórica, o uso exato dos pronomes relativos (who, whom, which, that, whose), a distinção clássica entre "the former" e "the latter", e os itens de remissão pronominal mais cobrados pelo Cebraspe.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['M.A.K. Halliday (Cohesion in English)', 'Ruqaiya Hasan', 'Gillian Brown (Discourse Analysis)', 'George Yule'],
  alertasCebraspe: [
    'O pronome "which" retomando uma oração inteira: Em estruturas do tipo "... the parliament approved the reform, WHICH surprised the opposition", o Cebraspe afirma que "which" refere-se a "the opposition" ou a "the reform". ITEM ERRADO! O pronome "which" após vírgula refere-se a TODO O FATO expresso na oração anterior (o fato de o parlamento ter aprovado a reforma).',
    'A dupla "The former" e "The latter": Quando o texto cita dois elementos (ex.: "France and Germany signed the treaty. The former was satisfied, while the latter demanded revisions"), "The former" refere-se ao PRIMEIRO elemento (França), e "The latter" refere-se ao SEGUNDO/ÚLTIMO elemento (Alemanha). O Cebraspe inverte propositalmente as referências.',
    'O pronome relativo "Whose": Equivale a "cujo(a)(s)" e indica posse. Ele é seguido diretamente de substantivo sem artigo (ex.: "the author whose book was published"). Não existe "whose the" em inglês.',
    'Uso de "That" vs "Which": "That" não é empregado após vírgulas em orações relativas explicativas (*non-defining relative clauses*). Nesse caso, utiliza-se obrigatoriamente "which" para coisas ou "who" para pessoas.',
  ],
  quadroComparativo: {
    titulo: 'Pronomes Relativos e Referenciadores Canônicos no Padrão Cebraspe',
    colunas: ['Elemento Coesivo', 'Natureza do Referente', 'Posição / Função Sintática', 'Exemplo Prático em Contexto'],
    linhas: [
      ['Who', 'Pessoas (seres humanos)', 'Sujeito da oração relativa', 'The senator WHO presented the report...'],
      ['Whom', 'Pessoas (seres humanos)', 'Objeto do verbo ou após preposição', 'The witness to WHOM the police spoke...'],
      ['Which', 'Coisas, animais ou toda a oração anterior', 'Sujeito/objeto ou encapsulador oracional', 'The bill was rejected, WHICH caused protests.'],
      ['Whose', 'Posse (de pessoas ou entidades)', 'Acompanha substantivo sem artigo ("cujo")', 'The committee WHOSE members were appointed...'],
      ['The former', 'Primeiro elemento de uma lista de dois', 'Retomada anafórica do termo inicial', 'Brazil and Chile negotiated; THE FORMER agreed.'],
      ['The latter', 'Segundo/último elemento de uma lista de dois', 'Retomada anafórica do termo final', 'Brazil and Chile negotiated; THE LATTER resisted.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Coesão Referencial: O que Permite ao Texto Ser uma Rede Unificada?

A teoria da coesão textual de **Halliday & Hasan** (1976) demonstra que um texto não é um amontoado de frases soltas, mas um tecido articulado por **laços de dependência semântica**:
* **Anáfora:** Mecanismo pelo qual um pronome ou expressão recupera o sentido de uma entidade previamente mencionada no texto. É o alvo de **mais de 80% das questões de referência do Cebraspe** (ex.: *"Na linha 14, o pronome 'its' refere-se a..."*).
* **Catáfora:** Mecanismo pelo qual um pronome antecipa um referente que só será revelado adiante na oração.

---

### 2. A Bateria de Pronomes Relativos e Suas Restrições Rígidas

Na prova do Cebraspe, a identificação precisa do referente do pronome relativo define o acerto do item:

#### A. Who vs. Whom (Referência a Pessoas)
* **Who:** Atua como sujeito do verbo da oração adjetiva.
  * *Exemplo:* *"The librarian WHO organized the repository received an award."* (Quem organizou? O bibliotecário -> Sujeito).
* **Whom:** Atua como complemento verbal ou vem regido de preposição.
  * *Exemplo:* *"The delegate WITH WHOM we discussed the treaty was absent."* (Regido pela preposição *with*).

#### B. Which como Encapsulador Oracional (Pegadinha Predileta da Banca)
Em inglês, o pronome relativo **which** desempenha dois papéis distintos:
1. **Retomada de Substantivo:** *"The document WHICH was archived..."* (Refere-se ao substantivo *document*).
2. **Encapsulamento de Toda a Oração Anterior:** Quando precedido por vírgula no final de uma oração, **which** frequentemente não se refere à última palavra isolada, mas sim a **todo o acontecimento narrado na oração precedente**.
   * *Exemplo da Prova:* *"The government reduced public spending, WHICH generated severe debate."*
   * *Pegadinha Cebraspe:* A banca afirmará que "which" refere-se a "public spending". **GABARITO: ERRADO!** O que gerou o debate não foi o gasto em si, mas sim o FATO de o governo ter reduzido o gasto.

#### C. Whose (Ideia de Posse)
Traduz-se por *cujo, cuja, cujos, cujas*.
* Liga um possuidor a algo possuído: *"The institution WHOSE archives were digitized..."* (A instituição cujos arquivos foram digitalizados).

---

### 3. A Estrutura de Retomada Binária: The Former vs. The Latter

Quando um parágrafo em inglês discute duas entidades e deseja fazer uma análise comparativa sem repetir os nomes, utiliza-se a construção:
* **The former:** Refere-se à **primeira** das duas mencionadas.
* **The latter:** Refere-se à **segunda** (a mais recente / a última citada).

*Exemplo Clássico:*
> *"The Senate and the Chamber of Deputies reviewed the amendment. **The former** approved the text immediately, whereas **the latter** requested further hearings."*
> * *The former* = O Senado (primeiro citado).
> * *The latter* = A Câmara dos Deputados (segunda citada).`,
  checkpoints: [
    {
      id: 'chk-12-3-1',
      pergunta: 'Julgue o item referente à referenciação pronominal em textos em língua inglesa segundo o Cebraspe:',
      item: 'Na sentença "The Prime Minister resigned unexpectedly, which caused market instability", o pronome "which" refere-se unicamente ao substantivo "Prime Minister".',
      gabarito: 'E',
      justificativa: 'Erro recorrente explorado pelo Cebraspe! O pronome relativo "which" após a vírgula funciona como encapsulador sentencial, referindo-se a todo o fato relatado na oração anterior (a renúncia inesperada do Primeiro-Ministro), e não à pessoa do governante.',
    },
    {
      id: 'chk-12-3-2',
      pergunta: 'Julgue a assertiva referente ao uso anafórico de "the former" e "the latter":',
      item: 'Em "The library acquired both printed books and electronic journals; the latter require dedicated digital infrastructure", a expressão "the latter" refere-se a "printed books".',
      gabarito: 'E',
      justificativa: 'Inversão da referência. A expressão "the latter" refere-se ao segundo/último termo citado no par ("electronic journals"). O primeiro termo ("printed books") seria retomado por "the former".',
    },
    {
      id: 'chk-12-3-3',
      pergunta: 'Julgue o item relativo ao pronome relativo possessivo "whose":',
      item: 'O pronome "whose" na oração "The researcher whose paper was selected" estabelece uma relação de posse entre "The researcher" e "paper", correspondendo ao termo "cujo" em língua portuguesa.',
      gabarito: 'C',
      justificativa: 'Correto. O pronome relativo "whose" expressa posse ou pertença entre o antecedente ("the researcher") e o substantivo imediatamente seguinte ("paper"), correspondendo rigorosamente ao pronome relativo "cujo" em português.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-12-3-1',
        periodo: '1976',
        disciplina: 'Linguística Sistêmico-Funcional',
        focoPrincipal: 'Taxonomia dos Mecanismos de Coesão Referencial Anafórica e Catafórica',
        figuraChave: 'M.A.K. Halliday',
      },
      {
        id: 'tm-12-3-2',
        periodo: '1983',
        disciplina: 'Análise do Discurso',
        focoPrincipal: 'Cadeias de Referenciação e Encapsulamento em Textos Reais',
        figuraChave: 'Gillian Brown & George Yule',
      },
    ],
    autores: [
      {
        id: 'aut-12-3-1',
        nome: 'Ruqaiya Hasan',
        ano: 1976,
        obraPrincipal: 'Cohesion in English (com M.A.K. Halliday)',
        ideiaChave: 'A interpretação de um item anafórico é inescapavelmente dependente de seu antecedente.',
        chipPegadinha: 'Coesão Referencial',
      },
      {
        id: 'aut-12-3-2',
        nome: 'George Yule',
        ano: 1983,
        obraPrincipal: 'Discourse Analysis',
        ideiaChave: 'O leitor reconstrói os referentes a partir de pistas cognitivas e sintáticas no texto.',
        chipPegadinha: 'Cadeias de Referência',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-12-3-1',
        afirmacao: 'O pronome relativo "that" pode ser livremente usado entre vírgulas em orações relativas explicativas em inglês.',
        gabarito: 'E',
        porQue: 'Em orações relativas explicativas (com vírgulas), o uso de "that" é vedado na norma-padrão. Utiliza-se obrigatoriamente "which" (para coisas) ou "who" (para pessoas).',
      },
      {
        id: 'peg-12-3-2',
        afirmacao: 'Na expressão "whose the results", a estrutura gramatical está correta na norma culta da língua inglesa.',
        gabarito: 'E',
        porQue: '"Whose" não admite o artigo definido "the" imediatamente após si. A estrutura correta é "whose results".',
      },
    ],
  },
};
