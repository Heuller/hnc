import type { ModuloFilho } from '../../../domain/types';

export const submodulo134: ModuloFilho = {
  id: 'sub-13-4',
  numero: '13.4',
  titulo: 'Pontuação Crítica e Redação Oficial Legislativa (Manual da Presidência, 3ª ed.)',
  descricaoCurta:
    'A semântica da vírgula nas orações adjetivas (explicativa vs restritiva), adjuntos adverbiais deslocados e os preceitos do Manual de Redação da Presidência da República (2018): impessoalidade, concisão, pronomes de tratamento e fechos oficiais.',
  tempoEstimadoMinutos: 40,
  autoresChave: [
    'Presidência da República (Manual de Redação da Presidência da República, 3ª ed., 2018)',
    'Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo)',
    'Evanildo Bechara (Moderna Gramática Portuguesa)',
    'Rocha Lima (Gramática Normativa da Língua Portuguesa)',
  ],
  alertasCebraspe: [
    'A supressão ou inserção de vírgulas em orações subordinadas adjetivas é a questão semântica número 1 do Cebraspe. Com vírgulas, a oração é EXPLICATIVA (generaliza para a totalidade dos elementos); sem vírgulas, torna-se RESTRITIVA (limita a apenas parte dos elementos). O Cebraspe propõe: "A supressão das vírgulas preservaria a correção gramatical e os sentidos do texto". GABARITO ERRADO! A correção gramatical é mantida, mas o sentido original é substancialmente alterado.',
    'Nunca separe por vírgula o Sujeito do seu respectivo Verbo, nem o Verbo de seus Complementos diretos ou indiretos imediatos (salvo se houver termo intercalado devidamente isolado por DUAS vírgulas). As assertivas que propõem a inserção de uma única vírgula entre sujeito longo e verbo incorrem em erro gramatical crasso.',
    'Pronomes de Tratamento no Manual de Redação da Presidência da República (3ª ed., 2018): embora se refiram à 2ª pessoa do discurso (com quem se fala), a concordância gramatical do verbo e dos pronomes possessivos faz-se RIGOROSAMENTE NA 3ª PESSOA ("Vossa Excelência apresentou seu parecer", e NUNCA "apresentastes vosso parecer"). Além disso, o adjetivo concorda com o gênero da autoridade ("Vossa Excelência será recebido [se homem] / recebida [se mulher]").',
    'Fechos Oficiais Simplificados (Manual de 2018): Existem APENAS DOIS fechos admitidos para comunicações oficiais federais: "Respeitosamente," (para autoridades de hierarquia superior à do remetente, inclusive o Presidente da República e chefes de Poder) e "Atenciosamente," (para autoridades de mesma hierarquia, inferior ou particulares). Expressões como "Digníssimo (DD.)", "Ilustríssimo", "Saudações cordiais" foram expressamente ABOLIDAS pela Presidência.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Cebraspe de Pontuação Semântica e Redação Oficial (MRPR 2018)',
    colunas: [
      'Estrutura Sintática / Padrão Oficial',
      'Regra Gramatical / Norma MRPR',
      'Impacto na Correção Gramatical',
      'Impacto no Sentido Original',
      'Armadilha Típica do Cebraspe',
    ],
    linhas: [
      [
        'Oração Adjetiva Explicativa -> Restritiva',
        'Supressão das vírgulas que isolam a oração adjetiva com pronome relativo',
        '✅ Mantida (Frase continua gramaticalmente correta)',
        '❌ Alterado (Passa de totalidade para recorte restrito)',
        'Afirmar que os sentidos originais são preservados na supressão.',
      ],
      [
        'Adjunto Adverbial Longo Deslocado',
        'Anteposição de adjunto adverbial de 3 ou mais palavras no início da oração',
        'Obrigatória a presença da vírgula',
        '✅ Mantido',
        'Afirmar que a vírgula após adjunto longo inicial seria mera faculdade estilística.',
      ],
      [
        'Pronome de Tratamento (Vossa Excelência)',
        'Concordância verbal e pronominal de 3ª pessoa (verbo em 3ª pessoa + pronome "seu")',
        'Obrigatória a 3ª pessoa do singular',
        '✅ Mantido',
        'Utilizar formas arcaicas de 2ª pessoa do plural ("apresentastes", "vosso parecer").',
      ],
      [
        'Fecho para Autoridade Superior (Presidente / Ministros)',
        'Uso do fecho "Respeitosamente," com vírgula ao final',
        'Obrigatório na administração pública federal',
        '✅ Mantido',
        'Empregar "Atenciosamente" para autoridade superior ou usar adjetivos abolidos como "Digníssimo".',
      ],
      [
        'Vocativo para Deputado / Senador',
        'Emprego de "Senhor Deputado," ou "Senhor Senador,"',
        'Padrão canônico do Manual da Presidência (p. 23)',
        '✅ Mantido',
        'Afirmar ser obrigatório o tratamento "Excelentíssimo" (reservado apenas aos Chefes de Poder).',
      ],
    ],
  },
  secoes: [
    {
      id: 'sec-pontuacao-sintatica',
      nivel: 3,
      titulo: '1. A Sintaxe da Pontuação: A Vírgula Proibida, Obrigatória e Facultativa',
      conteudo:
        'A interdição da vírgula entre sujeito e predicado, adjuntos adverbiais curtos vs longos, e o isolamento de vocativos e apostos explicativos.',
    },
    {
      id: 'sec-adjetivas-semantica',
      nivel: 3,
      titulo: '2. A Vírgula Semântica nas Orações Subordinadas Adjetivas',
      conteudo:
        'O contraste semântico entre explicitação universal (com vírgulas) e restrição partitiva (sem vírgulas) e o padrão decisório da banca Cebraspe.',
    },
    {
      id: 'sec-principios-redacao-oficial',
      nivel: 3,
      titulo: '3. Princípios e Atributos da Redação Oficial (Manual da Presidência, 2018)',
      conteudo:
        'A impessoalidade (da perspectiva, do remetente e do destinatário), clareza, concisão, precisão e o padrão ofício unificado.',
    },
    {
      id: 'sec-tratamento-fechos',
      nivel: 3,
      titulo: '4. Pronomes de Tratamento, Vocativos e Fechos para o Legislativo Federal',
      conteudo:
        'O emprego de Vossa Excelência no Congresso Nacional, a regra da 3ª pessoa gramatical, a abolição de tratamentos arcaicos e os dois únicos fechos oficiais.',
    },
  ],
  teoriaDensaMarkdown: `### 1. A Sintaxe da Pontuação: A Vírgula Proibida, Obrigatória e Facultativa

A pontuação não é um recurso de "respiração" ou pausa oral, mas sim um instrumento de **organização sintática e semântica da frase** (**Celso Cunha & Lindley Cintra**, *Nova Gramática do Português Contemporâneo*, 2008, p. 640).

---

#### A. As Duas Proibições Absolutas da Vírgula
1. **É proibido separar o Sujeito do seu Verbo:**
   - Mesmo que o sujeito seja extenso ou oracional:
   - *"A aprovação da reforma orçamentária pela comissão mista [sem vírgula] viabilizou os investimentos públicos."*
   - *Pegadinha do Cebraspe:* A banca insere uma única vírgula após sujeitos longos, alegando que "facilita a clareza da leitura". O item é categoricamente **ERRADO**.
2. **É proibido separar o Verbo dos seus Complementos Imediatos:**
   - Entre o verbo transitivo e o objeto direto ou indireto:
   - *"O presidente declarou [sem vírgula] que a sessão seria suspensa."*

---

#### B. A Dinâmica dos Adjuntos Adverbiais Deslocados
* **Ordem Direta (No fim da oração):** Não requer vírgula (*"O plenário deliberou com presteza ontem"*).
* **Adjunto Adverbial Curto Deslocado (1 ou 2 palavras):** Vírgula **FACULTATIVA** (*"Ontem, o plenário deliberou"* ou *"Ontem o plenário deliberou"*).
* **Adjunto Adverbial Longo Deslocado (3 ou mais palavras):** Vírgula **OBRIGATÓRIA** segundo a Academia Brasileira de Letras e o Cebraspe:
  - *"**Durante a última sessão deliberativa**, o plenário aprovou a proposta."* (Obrigatória a vírgula).

---

### 2. A Vírgula Semântica nas Orações Subordinadas Adjetivas

Este é o padrão de questão de pontuação com **maior frequência histórica nas provas do Cebraspe**:

#### Oposição Fundamental:
* **Com Vírgulas = Oração Subordinada Adjetiva Explicativa:**
  - *"Os parlamentares, **que votaram favoravelmente ao texto**, comemoraram o resultado."*
  - **Sentido:** **TODOS** os parlamentares votaram favoravelmente e todos comemoraram. A oração atribui uma qualidade geral ao todo.
* **Sem Vírgulas = Oração Subordinada Adjetiva Restritiva:**
  - *"Os parlamentares **que votaram favoravelmente ao texto** comemoraram o resultado."*
  - **Sentido:** **APENAS ALGUNS** parlamentares votaram favoravelmente (aqueles que votaram a favor) e somente eles comemoraram. Os demais parlamentares não comemoraram.

> **Regra Canônica Cebraspe:** A eliminação ou a inserção das vírgulas que isolam oração adjetiva com pronome relativo **mantém a correção gramatical**, mas **ALTERA SUBSTANCIALMENTE OS SENTIDOS ORIGINAIS DO TEXTO**.

---

### 3. Princípios e Atributos da Redação Oficial (Manual da Presidência da República 2018)

O *Manual de Redação da Presidência da República* (3ª edição, revista, atualizada e ampliada, 2018) é a norma soberana que rege os expedientes do serviço público federal:

#### Os Atributos da Redação Oficial (Cap. I, Seção 1.2):
1. **Impessoalidade:**
   - Ausência de impressões individuais do redator (uso da 3ª pessoa ou voz passiva).
   - Impessoalidade de quem comunica (é o órgão público que emite, não a pessoa física).
   - Impessoalidade de com quem se comunica (o cidadão ou destinatário é tratado com equidade).
2. **Clareza e Precisão:** Compreensão imediata sem ambiguidade, utilizando vocabulário exato e termos técnicos apenas quando indispensáveis.
3. **Concisão:** Eliminação de palavras inúteis, circunlóquios e adjetivações vazias. Dizer o máximo com o mínimo de palavras.
4. **Formalidade e Padronização:** Obediência aos pronomes de tratamento e à diagramação padrão do Padrão Ofício.

---

### 4. Pronomes de Tratamento, Vocativos e Fechos para o Legislativo Federal

O Manual de 2018 promoveu uma racionalização profunda e eliminou velhos vícios burocráticos:

#### A. A Concordância dos Pronomes de Tratamento (Manual de 2018, p. 22):
* **Concordância Verbal de 3ª Pessoa:** Embora designem a 2ª pessoa gramatical (o interlocutor), os pronomes de tratamento exigem verbo rigorosamente na **3ª pessoa do singular**:
  - *"Vossa Excelência **aprovou** o requerimento."* (e NUNCA *"aprovastes"*).
* **Concordância Pronominal de 3ª Pessoa:** Os possessivos e pronomes oblíquos devem ser de 3ª pessoa:
  - *"Vossa Excelência solicitou a inclusão de **seu** projeto na pauta."* (e NUNCA *"vosso projeto"*).
* **Concordância Nominal com o Gênero do Ocupante:**
  - Se a autoridade for mulher: *"Vossa Excelência foi **designada** relatora."*
  - Se a autoridade for homem: *"Vossa Excelência foi **designado** relator."*

#### B. O Vocativo Correto para Autoridades Legislativas:
* Para os Chefes dos Três Poderes (Presidente da República, Presidente do Congresso Nacional / Câmara dos Deputados / Senado Federal, Presidente do STF):
  - Vocativo: *"**Excelentíssimo Senhor Presidente da Câmara dos Deputados,**"*.
* Para as demais autoridades (Deputados Federais, Senadores, Ministros, Governadores):
  - Vocativo: *"**Senhor Deputado,**"* ou *"**Senhor Senador,**"*.
  - O uso de "Excelentíssimo" para deputados e senadores comuns é desvio em relação ao Manual de 2018.

#### C. Os Fechos Oficiais (Manual de 2018, Seção 2.2):
Restam **exclusivamente dois fechos** para fechar ofícios e memorandos:
1. *"**Respeitosamente,**"* $\rightarrow$ para autoridades de hierarquia **superior** à do remetente (inclusive ao Presidente da República).
2. *"**Atenciosamente,**"* $\rightarrow$ para autoridades de **mesma hierarquia**, de hierarquia **inferior** ou para o cidadão.
* **Abolições Expressas:** É terminantemente **proibido** utilizar *"Digníssimo (DD.)"*, *"Ilustríssimo (Ilmo.)"*, *"Cordialmente"*, *"Sem mais para o momento"* ou fechos frasais longos.`,
  checkpoints: [
    {
      id: 'chk-13-4-1',
      pergunta:
        'Julgue o item quanto à pontuação de orações adjetivas e seu impacto semântico no Cebraspe:',
      item: 'No trecho "Os técnicos legislativos, que participaram do treinamento de preservação digital, foram certificados pela diretoria", a supressão de ambas as vírgulas preservaria a correção gramatical do período, mas alteraria os sentidos originais do texto.',
      gabarito: 'C',
      justificativa:
        'Conforme preceitua Celso Cunha & Lindley Cintra (Nova Gramática do Português Contemporâneo, p. 642), o isolamento por vírgulas confere à oração adjetiva valor explicativo, atribuindo a participação no treinamento à totalidade dos técnicos. A supressão das vírgulas transforma a oração em restritiva, limitando a certificação apenas à parcela dos técnicos que concluiu o treinamento. Portanto, a gramática permanece impecável, mas o sentido original é substancialmente alterado.',
    },
    {
      id: 'chk-13-4-2',
      pergunta:
        'Julgue a assertiva referente à concordância gramatical com pronomes de tratamento no Manual de Redação da Presidência da República (3ª ed., 2018):',
      item: 'Em correspondência oficial endereçada a um Senador da República, é gramaticalmente correta e adequada ao padrão culto a redação: "Informamos que Vossa Excelência devereis comparecer à sessão solene acompanhado de vossa comitiva".',
      gabarito: 'E',
      justificativa:
        'Conforme estabelece categoricamente o Manual de Redação da Presidência da República (3ª ed., 2018, p. 22), os pronomes de tratamento exigem concordância verbal e pronominal rigorosamente na 3ª pessoa gramatical, sendo incorreto o emprego da 2ª pessoa do plural ("devereis", "vossa"). A forma correta seria: "Vossa Excelência deverá comparecer (...) acompanhado de sua comitiva".',
    },
    {
      id: 'chk-13-4-3',
      pergunta:
        'Julgue o item quanto aos fechos oficiais de expedientes no serviço público federal:',
      item: 'De acordo com o Manual de Redação da Presidência da República (2018), o fecho "Respeitosamente," é empregado para autoridades de hierarquia superior à do remetente, enquanto "Atenciosamente," destina-se a autoridades de mesma hierarquia ou de hierarquia inferior.',
      gabarito: 'C',
      justificativa:
        'Conforme o Manual de Redação da Presidência da República (3ª ed., 2018, Seção 2.2), existem apenas dois fechos padronizados na administração pública federal: "Respeitosamente," para autoridades superiores, e "Atenciosamente," para autoridades de mesma hierarquia ou inferior.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-13-4-1',
        periodo: '2008',
        disciplina: 'Pontuação da Norma Culta',
        focoPrincipal: 'Sintaxe da Vírgula nas Orações Adjetivas e Adjuntos Deslocados',
        figuraChave: 'Celso Cunha & Lindley Cintra',
      },
      {
        id: 'tm-13-4-2',
        periodo: '2018',
        disciplina: 'Redação Oficial da República',
        focoPrincipal: 'Manual de Redação da Presidência (3ª Edição Revista e Ampliada)',
        figuraChave: 'Presidência da República',
      },
    ],
    autores: [
      {
        id: 'aut-13-4-1',
        nome: 'Manual de Redação da Presidência da República',
        ano: 2018,
        obraPrincipal: 'Manual de Redação Oficial (3ª Edição)',
        ideiaChave:
          'Padronização oficial dos expedientes, concordância em 3ª pessoa para pronomes de tratamento e unificação dos fechos em Respeitosamente e Atenciosamente.',
        chipPegadinha: 'Fechos e Tratamentos Oficiais',
      },
      {
        id: 'aut-13-4-2',
        nome: 'Celso Cunha & Lindley Cintra',
        ano: 2008,
        obraPrincipal: 'Nova Gramática do Português Contemporâneo',
        ideiaChave:
          'A vírgula nas orações adjetivas define a fronteira semântica entre generalização explicativa e restrição partitiva.',
        chipPegadinha: 'Vírgula Explicativa vs Restritiva',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-13-4-1',
        afirmacao:
          'É legítima a inserção de vírgula entre o sujeito e o predicado quando o sujeito for composto por mais de dez vocábulos.',
        gabarito: 'E',
        porQue:
          'A interdição de vírgula entre o sujeito e o verbo principal é uma regra absoluta na norma culta, independentemente da extensão do sujeito (Cunha & Cintra, p. 640).',
      },
      {
        id: 'peg-13-4-2',
        afirmacao:
          'O pronome de tratamento "Digníssimo" (DD.) é obrigatório no endereçamento de expedientes dirigidos a parlamentares do Congresso Nacional.',
        gabarito: 'E',
        porQue:
          'O Manual de Redação da Presidência da República (2018) aboliu terminantemente o uso de "Digníssimo" e "Ilustríssimo", considerando a dignidade um pressuposto inerente ao cargo público.',
      },
      {
        id: 'peg-13-4-3',
        afirmacao:
          'A frase "Em conformidade com o regimento interno, a audiência foi iniciada às dez horas" apresenta pontuação correta com adjunto adverbial longo anteposto isolado por vírgula.',
        gabarito: 'C',
        porQue:
          'Adjuntos adverbiais de longa extensão (três ou mais vocábulos) antepostos exigem obrigatoriamente a presença de vírgula para marcar o deslocamento sintático.',
      },
    ],
  },
};
