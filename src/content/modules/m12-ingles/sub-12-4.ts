import type { ModuloFilho } from '../../../domain/types';

export const submodulo124: ModuloFilho = {
  id: 'sub-12-4',
  numero: '12.4',
  titulo: 'Vocabulário Contextual, Falsos Cognatos, Modalizadores e Paráfrase Cebraspe',
  descricaoCurta: 'O arsenal de falsos amigos (actually, eventually, intend, pretend, comprehensive), a armadilha da alteração de grau nos verbos modais (may/might vs must/will), e o método para julgar itens de paráfrase e reescrita de sentenças no Cebraspe.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Paul Nation (Teaching and Learning Vocabulary)', 'Batia Laufer (Lexical Threshold & Vocabulary Size)', 'Joan Bybee (Modality in Grammar)', 'F.R. Palmer (Mood and Modality)'],
  alertasCebraspe: [
    'A armadilha dos verbos modais (Possibilidade vs Certeza): O texto original diz que uma medida "MAY lead to economic growth" (pode levar, possibilidade). A assertiva do Cebraspe afirma que a medida "WILL lead" ou "MUST guarantee growth". ITEM ERRADO! O Cebraspe altera propositalmente a modalidade epistêmica de possibilidade para certeza absoluta.',
    'Os falsos cognatos "Actually" e "Eventually": "Actually" significa "na verdade / realmente" (nunca atualmente, que se diz "currently"). "Eventually" significa "ao final / com o tempo" (nunca eventualmente, que se diz "occasionally"). O Cebraspe cobra essas duas palavras sistematicamente.',
    '"Policy" vs "Politics": Em textos de órgãos públicos e da Câmara dos Deputados, "Policy" refere-se a políticas públicas, diretrizes e planos de ação. "Politics" refere-se à política partidária e à disputa pelo poder político.',
    'Paráfrase com alteração sutil de quantificador: O texto diz que "several studies suggest...". A assertiva do Cebraspe reescreve dizendo que "all scientific research proves...". ITEM ERRADO por generalização indevida (troca de "vários" por "todos" e "sugere" por "prova").',
  ],
  quadroComparativo: {
    titulo: 'Glossário Crítico de Falsos Cognatos Perigosos no Padrão Cebraspe',
    colunas: ['Termo em Inglês', 'Significado Real em Português', 'Falsa Tradução Intuitiva (Erro Comum)', 'Como se diz o Falso Sentido'],
    linhas: [
      ['Actually', 'Na verdade, de fato, realmente', 'Atualmente (ERRADO!)', 'Currently, nowadays, at present'],
      ['Eventually', 'Ao final, com o tempo, por fim', 'Eventualmente / às vezes (ERRADO!)', 'Occasionally, sometimes'],
      ['Pretend', 'Fingir, simular', 'Pretender (ERRADO!)', 'Intend, plan to'],
      ['Intend', 'Pretender, ter a intenção de', 'Entender (ERRADO!)', 'Understand'],
      ['Comprehensive', 'Amplo, abrangente, minucioso', 'Compreensivo / tolerante (ERRADO!)', 'Understanding, sympathetic'],
      ['Notice', 'Notar, perceber, prestar atenção', 'Notícia de jornal (ERRADO!)', 'News, report'],
      ['Policy', 'Política pública, diretriz, norma', 'Polícia ou política partidária (ERRADO!)', 'Politics (ciência política), Police (polícia)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Hipótese do Limiar Lexical e a Decomposição Morfológica

Estudos de linguística aplicada (**Paul Nation**, 2001; **Batia Laufer**, 1997) demonstram que em exames de proficiência e concursos de alto nível, os candidatos deparam-se inevitavelmente com vocábulos fora de seu repertório ativo.

Para decodificar termos complexos sem recorrer a dicionários, aplica-se a **Decomposição Morfológica**:
* **Prefixos Negativos / Opositivos:** *un-*, *in-*, *im-*, *dis-*, *mis-* (*unprecedented* = sem precedentes; *misleading* = enganoso; *disclose* = revelar/abrir sigilo).
* **Sufixos Nominais e Adjetivais:** *-less* (ausência: *flawless* = sem falhas); *-ful* (plenitude: *insightful* = perspicaz); *-ness* (estado: *fairness* = justiça/equidade).

---

### 2. A Tabela dos Falsos Cognatos Letais no Cebraspe

Os falsos cognatos (*False Friends*) são palavras de grafia muito semelhante ao português, mas com significado divergente. O Cebraspe explora-os para capturar candidatos desatentos:

1. **Actually:** Significa *na verdade*, *realmente*.
   * *Frase:* *"The reform actually increased public oversight."* (A reforma, na verdade, aumentou a fiscalização pública).
2. **Eventually:** Significa *ao final*, *com o passar do tempo*.
   * *Frase:* *"The bill was eventually approved by the plenary."* (O projeto foi, ao final, aprovado pelo plenário).
3. **Pretend vs. Intend:**
   * *Pretend:* Fingir (*"They pretend to support the cause"* = Eles fingem apoiar).
   * *Intend:* Pretender (*"The commission intends to publish the report"* = A comissão pretende publicar o relatório).
4. **Comprehensive:** Significa *amplo*, *abrangente*, *exaustivo*.
   * *Frase:* *"A comprehensive analysis of the budget"* (Uma análise abrangente/minuciosa do orçamento).

---

### 3. A Linguística da Modalização (*Hedging* e Verbos Modais)

No discurso acadêmico e legislativo em inglês, os autores raramente fazem afirmações dogmáticas absolutas. Eles utilizam a técnica de **Hedging** (cautela argumentativa) por meio de verbos modais (**Joan Bybee**, 1985; **F.R. Palmer**, 2001):

#### Escala de Certeza Epistêmica:
1. **Possibilidade Fraca / Cautela:** *May, Might, Could*
   * *"Digital libraries may enhance accessibility."* (As bibliotecas digitais *podem* melhorar a acessibilidade).
2. **Probabilidade Média:** *Should, Ought to*
   * *"The project should be finalized next month."* (O projeto *deve/provavelmente será* finalizado no próximo mês).
3. **Certeza / Obrigação Absoluta:** *Must, Will, Shall, Have to*
   * *"All agencies must comply with the law."* (Todos os órgãos *devem obrigatoriamente* cumprir a lei).

> **A Técnica de Fraude do Cebraspe em Itens de Prova:** A banca pega uma frase do texto com verbo modal de **possibilidade** (*may*) e afirma na assertiva que o autor garante que o fato **vai acontecer com certeza** (*will / must*). **GABARITO: ERRADO!**

---

### 4. O Checklist Científico para Itens de Paráfrase e Reescrita

Quando o Cebraspe afirma que *"A oração das linhas X-Y poderia ser reescrita da seguinte forma, mantendo-se os sentidos originais e a correção gramatical"*, siga este checklist de 4 passos:
1. **O Agente da Ação Mudou?** (Checar se a voz passiva preservou quem fez o quê).
2. **A Polaridade Mudou?** (Checar se uma dupla negação alterou o sentido original).
3. **O Grau de Certeza Mudou?** (Checar se *may* virou *must*, ou se *suggests* virou *proves*).
4. **O Escopo do Quantificador Mudou?** (Checar se *some* virou *all*, ou se *often* virou *always*).

Se qualquer um desses 4 pontos tiver sido alterado, o item é **ERRADO**.`,
  checkpoints: [
    {
      id: 'chk-12-4-1',
      pergunta: 'Julgue o item referente aos falsos amigos (false friends) no padrão Cebraspe:',
      item: 'No trecho "The minister actually defended the immediate review of the policy", o vocábulo "actually" expressa uma circunstância de tempo, indicando que a ação ocorre no momento presente.',
      gabarito: 'E',
      justificativa: 'Falso cognato clássico! "Actually" é um advérbio que significa "na verdade", "de fato" ou "realmente" (indicando ênfase factual). A ideia temporal de "no momento presente / atualmente" é expressa em inglês por "currently", "at present" ou "nowadays".',
    },
    {
      id: 'chk-12-4-2',
      pergunta: 'Julgue a assertiva referente à modalização e grau de certeza epistêmica segundo o Cebraspe:',
      item: 'Se o texto original afirma que "The new technology may reduce operating costs in parliamentary libraries", é correto inferir que a nova tecnologia certamente extinguirá os custos de manutenção desses órgãos.',
      gabarito: 'E',
      justificativa: 'Duplo erro de extrapolação e modalidade! O texto original emprega o modal "may", que indica mera POSSIBILIDADE (pode reduzir), e o verbo "reduce" (reduzir). A assertiva substitui essa possibilidade por certeza absoluta ("certamente") e amplia indevidamente para extinção total dos custos.',
    },
    {
      id: 'chk-12-4-3',
      pergunta: 'Julgue o item acerca do significado contextual do vocábulo "comprehensive":',
      item: 'A expressão "a comprehensive reform" pode ser corretamente interpretada como "uma reforma abrangente e minuciosa", e não como uma reforma que demonstra empatia ou benevolência.',
      gabarito: 'C',
      justificativa: 'Exato. "Comprehensive" é um falso cognato cujo significado técnico e formal é "amplo", "abrangente", "global" ou "detalhado". O sentido de demonstrar compreensão ou empatia para com alguém é expresso em inglês por "understanding" ou "sympathetic".',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-12-4-1',
        periodo: '1985',
        disciplina: 'Morfossintaxe e Tipologia',
        focoPrincipal: 'Modality in Grammar e a Escala de Certeza Epistêmica',
        figuraChave: 'Joan Bybee',
      },
      {
        id: 'tm-12-4-2',
        periodo: '2001',
        disciplina: 'Linguística Aplicada',
        focoPrincipal: 'Teaching and Learning Vocabulary e a Aquisição Lexical',
        figuraChave: 'Paul Nation',
      },
    ],
    autores: [
      {
        id: 'aut-12-4-1',
        nome: 'Paul Nation',
        ano: 2001,
        obraPrincipal: 'Learning Vocabulary in Another Language',
        ideiaChave: 'O reconhecimento de raízes e afixos morfológicos permite a inferência contextual rápida em provas.',
        chipPegadinha: 'Vocabulário & Inferência',
      },
      {
        id: 'aut-12-4-2',
        nome: 'Joan Bybee',
        ano: 1985,
        obraPrincipal: 'Morphology: A Study of the Relation between Meaning and Form',
        ideiaChave: 'Verbos modais definem a força ilocucionária de possibilidade, dever e obrigação.',
        chipPegadinha: 'Modalizadores Epistêmicos',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-12-4-1',
        afirmacao: 'O verbo "pretend" em inglês pode ser traduzido por "ter a intenção de realizar algo".',
        gabarito: 'E',
        porQue: '"Pretend" significa "fingir". Ter a intenção é expresso pelo verbo "intend".',
      },
      {
        id: 'peg-12-4-2',
        afirmacao: 'A substituição de "several countries" por "all nations" em uma assertiva de reescrita mantém o mesmo sentido factual.',
        gabarito: 'E',
        porQue: 'Trata-se de extrapolação de quantificador: "several" (vários/alguns) restringe a uma parte; "all nations" (todas as nações) generaliza para a totalidade.',
      },
    ],
  },
};
