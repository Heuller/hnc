import type { ModuloFilho } from '../../../domain/types';

export const submodulo132: ModuloFilho = {
  id: 'sub-13-2',
  numero: '13.2',
  titulo: 'A Arte da Reescritura e Paráfrase no Padrão Cebraspe',
  descricaoCurta:
    'A metodologia dos três filtros (Correção Gramatical vs Sentido Original vs Coerência Textual), desdobramento de orações reduzidas, transposição rigorosa de vozes verbais e as sutis armadilhas de modalidade epistêmica.',
  tempoEstimadoMinutos: 40,
  autoresChave: [
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Othon Moacyr Garcia (Comunicação em Prosa Moderna)',
    'Provas Oficiais Cebraspe - Câmara dos Deputados e Senado Federal',
  ],
  alertasCebraspe: [
    'A tríade clássica do comando Cebraspe exige verificação em etapas independentes: "A correção gramatical e os sentidos do texto seriam preservados caso...". Mais de 80% das assertivas cujo gabarito é ERRADO possuem perfeita correção gramatical, mas introduzem uma sutil alteração no sentido original ou na hierarquia argumentativa.',
    'Na transposição de voz ativa para voz passiva analítica, o verbo auxiliar ("ser") DEVE manter com rigor absoluto o mesmo tempo e modo do verbo principal da oração ativa. Por exemplo: "O plenário aprovou o projeto" (pretérito perfeito do indicativo) torna-se "O projeto foi aprovado pelo plenário" (pretérito perfeito do indicativo). Trocar por "era aprovado" ou "seria aprovado" torna a assertiva ERRADA por alteração de tempo verbal.',
    'A transformação de orações reduzidas (de particípio, gerúndio ou infinitivo) em orações desenvolvidas exige a inserção da conjunção subordinativa canônica e a correlação do modo verbal (geralmente subjuntivo). O Cebraspe testa se o candidato percebe quando a banca troca um nexo causal ("ao constatar") por um temporal ("enquanto constatava") ou condicional.',
    'Cuidado supremo com operadores modais e advérbios de intensidade: substituir "pode gerar divergência" por "gera divergência", ou "alguns parlamentares" por "os parlamentares" preserva integralmente a gramática, mas altera a modalidade epistêmica de probabilidade para certeza absoluta, gerando gabarito ERRADO.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Cebraspe de Reescritura: O Teste dos Três Filtros Decisórios',
    colunas: [
      'Tipo de Reescritura',
      'Estrutura Original',
      'Proposta da Banca Cebraspe',
      'Correção Gramatical',
      'Sentidos Originais',
      'Gabarito Oficial',
    ],
    linhas: [
      [
        'Transposição de Voz (Tempo Alterado)',
        'A comissão analisou os documentos com presteza.',
        'Os documentos eram analisados pela comissão com presteza.',
        '✅ Mantida (Sintaxe correta)',
        '❌ Alterado (Perfeito pontual vs Imperfeito contínuo)',
        'ERRADO',
      ],
      [
        'Transposição de Voz (Tempo Preservado)',
        'O relator apresentou o parecer na sessão matutina.',
        'O parecer foi apresentado pelo relator na sessão matutina.',
        '✅ Mantida',
        '✅ Mantido (Identidade semântica plena)',
        'CERTO',
      ],
      [
        'Modificação de Modalidade Epistêmica',
        'A alteração legislativa pode suscitar controvérsias.',
        'A alteração legislativa suscitará controvérsias.',
        '✅ Mantida',
        '❌ Alterado (Possibilidade convertida em certeza futura)',
        'ERRADO',
      ],
      [
        'Desdobramento de Oração Reduzida',
        'Ao término dos debates, o presidente encerrou a sessão.',
        'Logo que os debates terminaram, o presidente encerrou a sessão.',
        '✅ Mantida',
        '✅ Mantido (Equivalência temporal imediata preservada)',
        'CERTO',
      ],
      [
        'Supressão de Restritor / Quantificador',
        'Grande parte dos servidores aderiu ao novo protocolo.',
        'Os servidores aderiram ao novo protocolo.',
        '✅ Mantida',
        '❌ Alterado (Generalização indevida: de maioria para totalidade)',
        'ERRADO',
      ],
    ],
  },
  secoes: [
    {
      id: 'sec-tres-filtros',
      nivel: 3,
      titulo: '1. O Protocolo dos Três Filtros: Correção, Sentido e Coerência',
      conteudo:
        'A distinção técnica entre preservar a norma culta (correção), manter a verdade informativa das proposições (sentido) e garantir a lógica interna do parágrafo (coerência).',
    },
    {
      id: 'sec-vozes-verbais',
      nivel: 3,
      titulo: '2. Transposição Rigorosa de Vozes Verbais',
      conteudo:
        'A conversão sistemática entre voz ativa, passiva analítica e passiva pronominal com preservação estrita do aspecto e tempo verbal segundo Celso Cunha e Lindley Cintra.',
    },
    {
      id: 'sec-oracoes-reduzidas',
      nivel: 3,
      titulo: '3. Desdobramento de Orações Reduzidas e Nexos Subordinativos',
      conteudo:
        'A passagem de infinitivos, gerúndios e particípios para orações desenvolvidas. O rastreamento dos valores adverbiais temporais, causais, concessivos e finais.',
    },
    {
      id: 'sec-modalidade-epistemica',
      nivel: 3,
      titulo: '4. Modalidade Epistêmica e Alterações Semânticas Sutis',
      conteudo:
        'O impacto de verbos modais (poder, dever), quantificadores partitivos e advérbios asseverativos na fidelidade ao texto original.',
    },
  ],
  teoriaDensaMarkdown: `### 1. O Protocolo dos Três Filtros: Correção, Sentido e Coerência

Nas provas do **Cebraspe** para a Câmara dos Deputados e o Senado Federal, os itens de reescritura e paráfrase representam cerca de **30% a 35% de toda a prova de Língua Portuguesa**. O candidato deve compreender que o comando da banca não formula perguntas casuais; ele estabelece critérios técnicos que devem ser avaliados de forma compartimentada.

---

#### A. A Definição Canônica dos Três Filtros

| Conceito Avaliado | Definição Linguística Estrita | O que a Banca Cebraspe Testa |
|---|---|---|
| **Correção Gramatical** | Conformidade irrestrita com a norma culta formal (concordância, regência, crase, ortografia, pontuação e colocação pronominal). | Se a nova estrutura contém desvios gramaticais objetivos, independentemente do que o texto original dizia. |
| **Sentidos Originais** | Identidade semântica da informação: valores de tempo, modo, causa, consequência, escopo de quantificadores e modalidade. | Se a nova frase diz exatamente a mesma coisa que o trecho original, sem ampliar, restringir ou alterar ênfases. |
| **Coerência Textual** | Relação de não contradição lógica entre as premissas e a harmonia discursiva com o restante do parágrafo. | Se a frase reescrita ainda faz sentido no encadeamento lógico do texto-fonte, mesmo que tenha tido o sentido ligeiramente modificado. |

> **Atenção Máxima:** É perfeitamente possível que uma assertiva reescrita mantenha a **correção gramatical** e a **coerência**, mas **NÃO preserve os sentidos originais**. Se o enunciado exigir preservação da correção E dos sentidos originais, qualquer alteração semântica determina o gabarito **ERRADO**.

---

### 2. Transposição Rigorosa de Vozes Verbais (Cunha & Cintra, p. 385)

A transposição entre voz ativa e voz passiva analítica é um dos terrenos preferidos do Cebraspe para inserir distratores temporais e aspectuais disfarçados:

#### Regra Áurea de Conversão:
1. O **Objeto Direto** da voz ativa torna-se o **Sujeito Paciente** da voz passiva.
2. O **Sujeito Agente** da voz ativa torna-se o **Agente da Passiva** (precedido por *por* ou *de*).
3. O verbo ativo é transformado na locução verbal: **Verbo Auxiliar ("ser") + Particípio do Verbo Principal**.
4. **O Verbo "Ser" deve assumir rigorosamente o mesmo tempo e modo do verbo ativo original.**

#### Matriz de Espelhamento Verbal Cebraspe:
* *Presente do Indicativo:* *"A Mesa promulga a emenda"* $\rightarrow$ *"A emenda **é promulgada** pela Mesa"*.
* *Pretérito Perfeito:* *"O plenário aprovou o projeto"* $\rightarrow$ *"O projeto **foi aprovado** pelo plenário"*.
* *Pretérito Imperfeito:* *"A comissão debatia as diretrizes"* $\rightarrow$ *"As diretrizes **eram debatidas** pela comissão"*.
* *Pretérito Mais-que-Perfeito:* *"O relator redigira o voto"* $\rightarrow$ *"O voto **fora redigido** pelo relator"*.
* *Futuro do Presente:* *"O Congresso votará o orçamento"* $\rightarrow$ *"O orçamento **será votado** pelo Congresso"*.
* *Futuro do Pretérito:* *"O presidente vetaria o dispositivo"* $\rightarrow$ *"O dispositivo **seria vetado** pelo presidente"*.

**Armadilha Clássica do Cebraspe:** A banca reescreve *"O colegiado concluiu a auditoria"* por *"A auditoria era concluída pelo colegiado"*. A frase passiva está impecável gramaticalmente, mas a troca de *foi concluída* (ação concluída e pontual) por *era concluída* (ação habitual ou contínua no passado) viola o sentido original.

---

### 3. Desdobramento de Orações Reduzidas e Nexos Subordinativos

As orações reduzidas (cujo verbo se encontra no infinitivo, gerúndio ou particípio) são frequentes no estilo legislativo formal por sua concisão e fluidez.

#### A. Protocolo de Desdobramento:
Para desenvolver uma oração reduzida mantendo correção e sentido:
1. Identifica-se o **nexo lógico implícito** (temporal, causal, concessivo, final ou condicional).
2. Insere-se a **conjunção subordinativa correspondente**.
3. Conjuga-se o verbo no **modo e tempo adequados** (frequentemente o modo subjuntivo).

#### Exemplos de Alta Incidência em Provas:
* **Reduzida de Infinitivo:** *"**Ao constatar** irregularidades na prestação de contas, o TCU instaurou tomada de contas especial."*
  - *Desenvolvimento com sentido temporal imediato:* *"**Assim que constatou** irregularidades..."* (CERTO).
  - *Pegadinha do Cebraspe:* Trocar por *"**Caso constatasse** irregularidades..."* (ERRADO: transformou fato certo em hipótese condicional incerta).
* **Reduzida de Gerúndio:** *"O relator acolheu a emenda parlamentar, **atendendo** a reivindicações da bancada temática."*
  - *Desenvolvimento legítimo:* *"..., **uma vez que atendeu** a reivindicações..."* ou *"..., **e atendeu** a reivindicações..."* (dependendo do nexo contextual).
* **Reduzida de Particípio:** *"**Concluída** a fase de instrução documental, os autos foram encaminhados à assessoria jurídica."*
  - *Desenvolvimento:* *"**Logo que foi concluída** a fase de instrução..."* (CERTO).

---

### 4. Modalidade Epistêmica e Alterações Semânticas Sutis

A moderna Semântica Formal (**Othon Moacyr Garcia**, *Comunicação em Prosa Moderna*, 2010; **Evanildo Bechara**, 2009) destaca que o grau de certeza que o autor atribui a um enunciado define o seu valor de verdade.

O Cebraspe explora minuciosamente as seguintes adulterações semânticas:

1. **Desativação de Modais de Probabilidade:**
   - *Original:* *"A estagnação do processo legislativo **pode comprometer** a governabilidade."* (possibilidade / hipótese).
   - *Reescritura Cebraspe:* *"A estagnação do processo legislativo **comprometerá** a governabilidade."* (certeza futura categórica).
   - *Gabarito:* **ERRADO**. Houve usurpação do sentido prudente adotado pelo autor.

2. **Supressão ou Adição de Quantificadores Indefinidos:**
   - *Original:* *"**Determinadas** proposições legislativas encontram resistência no Senado."*
   - *Reescritura Cebraspe:* *"**As** proposições legislativas encontram resistência no Senado."*
   - *Gabarito:* **ERRADO**. O termo original é restritivo/indefinido; a reescrita generalizou para a totalidade dos projetos.

3. **Inversão da Posição do Adjetivo em Relação ao Substantivo (Cunha & Cintra, p. 257):**
   - Na língua portuguesa, a anteposição do adjetivo tende a conferir valor afetivo, conotativo ou subjetivo, enquanto a posposição confere sentido denotativo, objetivo e classificador.
   - Exemplo: *"um **simples** deputado"* (insignificante, modesto) $\neq$ *"um deputado **simples**"* (sem afetação, humilde). O Cebraspe testa se o candidato julga que essa inversão preserva sempre o sentido original.`,
  checkpoints: [
    {
      id: 'chk-13-2-1',
      pergunta:
        'Julgue o item quanto à preservação da correção gramatical e dos sentidos originais na transposição de vozes verbais:',
      item: 'A substituição da oração "O relator elaborou o parecer conclusivo sobre o projeto de lei" por "O parecer conclusivo sobre o projeto de lei foi elaborado pelo relator" preserva a correção gramatical e as informações originais do texto.',
      gabarito: 'C',
      justificativa:
        'Conforme ensina Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo, p. 385), a transposição de voz ativa com verbo no pretérito perfeito do indicativo ("elaborou") para voz passiva analítica com o auxiliar "ser" no pretérito perfeito ("foi elaborado") preserva a identidade de tempo, modo e sentido referencial das proposições.',
    },
    {
      id: 'chk-13-2-2',
      pergunta:
        'Julgue a assertiva referente à alteração de modalidade epistêmica em itens de paráfrase do Cebraspe:',
      item: 'No trecho "A aprovação célere da reforma tributária pode impulsionar os investimentos do setor produtivo", a substituição de "pode impulsionar" por "impulsionará" manteria a correção gramatical e os sentidos originais do texto, uma vez que ambas as construções expressam a eficácia futura da norma.',
      gabarito: 'E',
      justificativa:
        'Embora a correção gramatical seja mantida, os sentidos originais são claramente violados. A locução "pode impulsionar" expressa modalidade de possibilidade/potencialidade (hipótese), enquanto a forma verbal "impulsionará" expressa certeza categórica no futuro. No padrão Cebraspe (Othon Garcia, 2010), a troca de probabilidade por certeza altera substancialmente o sentido da mensagem.',
    },
    {
      id: 'chk-13-2-3',
      pergunta:
        'Julgue a assertiva sobre o desdobramento de orações reduzidas e a manutenção do nexo lógico:',
      item: 'No período "Ao constatar divergência regimental, o presidente suspendeu os trabalhos da comissão", a oração reduzida "Ao constatar divergência regimental" possui valor semântico temporal imediato e pode ser substituída, sem prejuízo para a correção gramatical e o sentido original, por "Assim que constatou divergência regimental".',
      gabarito: 'C',
      justificativa:
        'Conforme as lições de Evanildo Bechara (Moderna Gramática Portuguesa, p. 502), a estrutura preposição "a" + artigo "o" + verbo no infinitivo ("ao constatar") expressa tempo pontual coincidente ou imediato, equivalendo rigorosamente à locução conjuntiva temporal "assim que constatou" ou "logo que constatou".',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-13-2-1',
        periodo: '1967',
        disciplina: 'Comunicação e Estilística',
        focoPrincipal: 'Estrutura da Frase e Paráfrase Analítica na Prosa Moderna',
        figuraChave: 'Othon Moacyr Garcia',
      },
      {
        id: 'tm-13-2-2',
        periodo: '2008',
        disciplina: 'Sintaxe Funcional',
        focoPrincipal: 'Transposição de Vozes Verbais e Desdobramento de Orações Reduzidas',
        figuraChave: 'Celso Cunha & Lindley Cintra',
      },
    ],
    autores: [
      {
        id: 'aut-13-2-1',
        nome: 'Othon Moacyr Garcia',
        ano: 1967,
        obraPrincipal: 'Comunicação em Prosa Moderna',
        ideiaChave:
          'A paráfrase fiel requer a preservação exata dos valores modais, da ênfase tópica e da hierarquia informativa entre ideias principais e secundárias.',
        chipPegadinha: 'Modalidade Epistêmica',
      },
      {
        id: 'aut-13-2-2',
        nome: 'Evanildo Bechara',
        ano: 2009,
        obraPrincipal: 'Moderna Gramática Portuguesa (37ª Ed.)',
        ideiaChave:
          'O desdobramento de orações reduzidas exige compatibilização morfológica de tempo e modo verbal, preservando a relação subordinativa de origem.',
        chipPegadinha: 'Desdobramento de Reduzidas',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-2-1',
        afirmacao:
          'A frase "O relatório foi lido com atenção pelo secretário" expressa a mesma relação temporal e aspectual que "O relatório era lido com atenção pelo secretário".',
        gabarito: 'E',
        porQue:
          '"Foi lido" expressa pretérito perfeito (fato concluído e acabado), enquanto "era lido" expressa pretérito imperfeito (fato habitual ou em curso no passado). A troca altera o sentido.',
      },
      {
        id: 'peg-13-2-2',
        afirmacao:
          'A substituição de "a maioria dos projetos" por "todos os projetos" mantém os sentidos originais quando o contexto tratar da atividade ordinária do plenário.',
        gabarito: 'E',
        porQue:
          'Trata-se de generalização indevida. "A maioria" é quantificador partitivo (admite exceções), ao passo que "todos" é quantificador universal totalizador.',
      },
      {
        id: 'peg-13-2-3',
        afirmacao:
          'Na transposição da voz ativa para a passiva analítica, o agente da passiva deve vir obrigatoriamente precedido da preposição "por" (ou de sua contração).',
        gabarito: 'C',
        porQue:
          'Segundo Cunha & Cintra (p. 386), o agente da passiva é introduzido ordinariamente pela preposição "por" (por, pelo, pela) e, mais raramente em construções literárias arcaicas, pela preposição "de".',
      },
    ],
  },
};
