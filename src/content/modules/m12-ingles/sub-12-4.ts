import type { ModuloFilho } from '../../../domain/types';

export const submodulo124: ModuloFilho = {
  id: 'sub-12-4',
  numero: '12.4',
  editalRef: 'Conhecimentos Básicos - Língua Inglesa (Item 3: Reescrita e Paráfrase Semântica)',
  preRequisitos: ["sub-12-3"],
  titulo: 'Vocabulário Contextual, Falsos Cognatos, Modalizadores e Paráfrase Cebraspe',
  antesDeLer: [
    {
      termo: 'Falsos Cognatos (False Friends)',
      definicao: 'Palavras com grafia ou som semelhantes em português e inglês, mas com significados completamente distintos.',
      exemploBiblioteca: '\'Library\' é biblioteca (e não livraria, que é \'bookstore\'); \'Policy\' é política/diretriz (e não polícia, que é \'police\').',
    },
    {
      termo: 'Modal Verbs (Verbos Modais)',
      definicao: 'Verbos auxiliares que expressam graus de certeza, obrigação, permissão ou probabilidade: must, should, may, might, can, could.',
      exemploBiblioteca: 'O Cebraspe explora a troca de \'may\' (possibilidade/permissão) por \'must\' (obrigação/certeza) para tornar o item errado.',
    },
    {
      termo: 'Voz Passiva Acadêmica',
      definicao: 'Estrutura (be + past participle) utilizada em textos formais para dar ênfase à ação ou ao objeto, mantendo a impessoalidade do autor.',
      exemploBiblioteca: 'Tradução e julgamento de frases como \'The rare manuscripts were restored by the conservation team\'.',
    },
    {
      termo: 'Paráfrase Cebraspe',
      definicao: 'Item de prova que reescreve uma frase do texto em inglês com outras palavras mantendo o sentido original estrito.',
      exemploBiblioteca: 'Avaliar se \'digital preservation ensures perennity\' expressa exatamente a mesma ideia de \'digital curation guarantees long-term survival\'.',
    },
  ],
  descricaoCurta: 'O arsenal de falsos amigos (actually, eventually, intend, pretend, comprehensive), a armadilha da alteração de grau nos verbos modais (may/might vs must/will), e o método para julgar itens de paráfrase e reescrita de sentenças no Cebraspe.',
  tempoEstimadoMinutos: 9,
  autoresChave: ['Paul Nation (Teaching and Learning Vocabulary)', 'Batia Laufer (Lexical Threshold & Vocabulary Size)', 'Joan Bybee (Modality in Grammar)', 'F.R. Palmer (Mood and Modality)'],
  alertasCebraspe: [
    'A armadilha dos verbos modais (Possibilidade vs Certeza): O texto original diz que uma medida "MAY lead to economic growth" (pode levar, possibilidade). A assertiva do Cebraspe afirma que a medida "WILL lead" ou "MUST guarantee growth". ITEM ERRADO! O Cebraspe altera propositalmente a modalidade epistêmica de possibilidade para certeza absoluta.',
    'Os falsos cognatos "Actually" e "Eventually": "Actually" significa "na verdade / realmente" (nunca atualmente, que se diz "currently"). "Eventually" significa "ao final / com o tempo" (nunca eventualmente, que se diz "occasionally"). O Cebraspe cobra essas duas palavras sistematicamente.',
    '"Policy" vs "Politics": Em textos de órgãos públicos e da Câmara dos Deputados, "Policy" refere-se a políticas públicas, diretrizes e planos de ação. "Politics" refere-se à política partidária e à disputa pelo poder político.',
    'Paráfrase com alteração sutil de quantificador: O texto diz que "several studies suggest...". A assertiva do Cebraspe reescreve dizendo que "all scientific research proves...". ITEM ERRADO por generalização indevida (troca de "vários" por "todos" e "sugere" por "prova").',
  ],
  quadroComparativo: {
    titulo: 'Guia Crítico de Falsos Cognatos Perigosos no Padrão Cebraspe',
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
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Vocabulário Contextual, os Falsos Cognatos (*False Friends*), os Verbos Modais e a Paráfrase** definem o padrão de exigência avançada do Cebraspe em inglês:
1. **Falsos Cognatos Críticos no Contexto Jurídico e Administrativo:**
   - **Policy:** Política pública, diretriz ou apólice (e NÃO "polícia" — polícia é *police*).
   - **Notice:** Notificação, aviso, edital ou perceber (e NÃO "notícia" — notícia é *news*).
   - **Pretend:** Fingir (e NÃO "pretender" — pretender é *intend*).
   - **Intend:** Pretender, ter a intenção de (e NÃO "entender" — entender é *understand*).
   - **Actually:** Na verdade, realmente, de fato (e NÃO "atualmente" — atualmente é *currently / nowadays*).
   - **Eventually:** No final das contas, com o tempo, por fim (e NÃO "eventualmente" — eventualmente é *occasionally*).
   - **Comprehensive:** Amplo, abrangente, detalhado (e NÃO "compreensivo" — compreensivo é *understanding*).
   - **Legislation:** Conjunto de leis (e NÃO o ato de legislar apenas).
2. **Verbos Modais (*Modal Verbs*) e Graus de Certeza/Obrigação:**
   - **Must / Have to:** Obrigação estrita, necessidade mandatória ou dedução lógica quase certa.
   - **Should / Ought to:** Recomendação, conselho, dever moral ou expectativa (*ought to* = *should*).
   - **May / Might / Could:** Possibilidade e probabilidade incerta (*might* indica menor probabilidade que *may*). *May* também indica permissão formal.
   - **Can:** Capacidade, habilidade ou permissão informal.
3. **A Paráfrase no Cebraspe:**
   - O item propõe uma nova redação para uma sentença do texto usando palavras distintas e pergunta se o sentido original e a coerência argumentativa foram rigorosamente preservados.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Alerta de Falso Cognato em Tradução de Política Pública):** Ao traduzir documento da ONU sobre *"Public Health Policies"*, um estagiário redige *"Polícias de Saúde Pública"*. O bibliotecário da Câmara corrige imediatamente para **"Políticas Públicas de Saúde"**, evitando um erro diplomático crasso na publicação oficial.
- **Cenário 2 (Diferença entre Must e Should em Norma Técnica Internacional):** Ao interpretar a norma ISO sobre preservação de arquivos, o analista verifica a cláusula: *"The temperature **must** not exceed 22 °C, and relative humidity **should** be around 50%"*. Ele informa à engenharia: o limite de 22 °C é **obrigatório e inegociável** (*must*); a umidade de 50% é uma **meta recomendada** (*should*).
- **Cenário 3 (Identificação de Sentido de Actually em Discurso Parlamentar Estrangeiro):** Em depoimento transmitido na TV Câmara, um diplomata afirma: *"Actually, the treaty has not been ratified yet"*. O intérprete traduz corretamente: *"Na verdade / De fato, o tratado ainda não foi ratificado"*, e não *"Atualmente"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Palavra em Inglês | O que Parece (Falso Cognato) | O que Realmente Significa | Como se Diz em Inglês o que Parecia |
| :--- | :--- | :--- | :--- |
| **Actually** | Atualmente | Na verdade, de fato | *Currently, nowadays* |
| **Eventually** | Eventualmente (às vezes) | Por fim, com o passar do tempo | *Occasionally, sometimes* |
| **Pretend** | Pretender | Fingir | *Intend* |
| **Policy** | Polícia | Política pública / Diretriz | *Police* |
| **Comprehensive** | Compreensivo (tolerante) | Amplo, completo, exaustivo | *Understanding, tolerant* |
| **Notice** | Notícia de jornal | Aviso, edital, notificação | *News* |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Actually como Sinônimo de Currently:** A banca afirma que *actually* pode ser substituído por *currently* sem alteração de sentido. **Gabarito: ERRADO.** *Actually* significa "de fato/na verdade"; *currently* significa "atualmente".
- **Must como Mero Conselho:** O Cebraspe propõe que o verbo modal *must* expressa uma mera recomendação facultativa. **Gabarito: ERRADO.** *Must* expressa **obrigação categórica** ou forte dedução lógica; quem expressa conselho ou recomendação é *should* ou *ought to*.
- **Pretend como Intenção:** Dizer que *The government pretended to reform the law* significa que o governo pretendia reformar a lei. **Gabarito: ERRADO.** A frase significa que o governo **fingiu** reformar a lei!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **PALMER, F. R.** *Mood and Modality*. 2. ed. Cambridge: Cambridge University Press, 2001. (A obra canônica sobre a semântica dos verbos modais).
- **SCHUTZ, Ricardo.** *Falsos Cognatos em Língua Inglesa: guia prático e contextual*. São Paulo: Disal, 2018.
- **MURPHY, Raymond.** *English Grammar in Use*. 5. ed. Cambridge: Cambridge University Press, 2019. (Capítulos sobre Modal Verbs).
- **SWALES, John M.; FEAK, Christine B.** *Academic Writing for Graduate Students*. Ann Arbor: University of Michigan Press, 2012.
- **CEBRASPE.** *Guia de Elaboração de Itens de Língua Inglesa*. Brasília: Cebraspe, 2021.`,
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
