import type { ModuloFilho } from '../../../domain/types';

export const submodulo14: ModuloFilho = {
  id: 'sub-1-4',
  numero: '1.4',
  titulo: 'Profissão: Legislação Federal, Código de Ética do CFB e Atribuições Privativas',
  titulo_curto: 'Legislação e Código de Ética CFB',
  descricaoCurta: 'A Lei Federal nº 4.084/1962, o Decreto regulamentador nº 56.725/1965, a estrutura CFB/CRB, o Código de Ética Profissional do Bibliotecário (Resolução CFB) e as infrações disciplinares.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Conselho Federal de Biblioteconomia (CFB)', 'Lei 4.084/1962', 'Decreto 56.725/1965', 'Conselhos Regionais (CRB)'],
  alertasCebraspe: [
    'A Lei 4.084/1962 estipula atividades PRIVATIVAS de bacharéis em biblioteconomia (planejamento, organização e direção de serviços de bibliotecas; classificação e catalogação; ensino de disciplinas de biblioteconomia). Não confunda atribuições privativas com atividades concorrentes!',
    'No Código de Ética do CFB, memorize a distinção entre DEVERES (zelo, aprimoramento, denúncia de exercício ilegal) e PROIBIÇÕES (assinar trabalhos não executados, praticar concorrência desleal, reter documentação alheia).',
    'Penalidades disciplinares: Advertência confidencial, Censura confidencial, Censura pública, Multa, Suspensão do exercício profissional (até 3 anos) e Cassação do registro (pelo CFB).',
  ],
  quadroComparativo: {
    titulo: 'Regime Disciplinar e Ético da Profissão de Bibliotecário',
    colunas: ['Esfera Normativa', 'Dispositivo / Órgão Competente', 'Principais Atribuições / Diretrizes', 'Sanções Previstas'],
    linhas: [
      ['Regulamentação Legal', 'Lei Federal nº 4.084/1962 e Dec. 56.725/1965', 'Exercício condicionado a diploma reconhecido e registro ativo no CRB da jurisdição', 'Exercício ilegal tipificado na Lei de Contravenções Penais'],
      ['Atribuições Privativas', 'Art. 6º da Lei 4.084/1962', 'Organização e direção de bibliotecas; catalogação e classificação de documentos; perícias documentais', 'Nulidade dos atos praticados por leigos'],
      ['Deveres Éticos', 'Código de Ética do CFB (Art. 3º)', 'Guardar sigilo profissional; zelar pela reputação da classe; denunciar o exercício clandestino', 'Fiscalização direta pelos CRBs'],
      ['Proibições Éticas', 'Código de Ética do CFB (Art. 4º)', 'Assinar laudos ou fichas catalográficas elaboradas por terceiros leigos; reter documentos', 'Advertência, Censura, Multa, Suspensão e Cassação'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Marco Regulatório Federal da Profissão de Bibliotecário
O exercício profissional da Biblioteconomia no Brasil possui estatura legal pública federal, sendo regulado por diplomas normativos específicos cuja literalidade e jurisprudência são intensamente cobradas pelo **CEBRASPE**:

\`\`\`mermaid
graph TD
    L4084["LEI FEDERAL Nº 4.084/1962<br>Dispõe sobre a profissão e cria as atribuições privativas"] --> D56725["DECRETO Nº 56.725/1965<br>Regulamenta a fiscalização e os órgãos de classe"]
    D56725 --> L9674["LEI FEDERAL Nº 9.674/1998<br>Reestrutura o Sistema CFB/CRB e o regime disciplinar"]
    L9674 --> RES207["RESOLUÇÃO CFB Nº 207/2018<br>Código de Ética Profissional do Bibliotecário"]
\`\`\`

---

### 2. A Lei Federal nº 4.084, de 30 de junho de 1962
Promulgada pelo Presidente João Goulart, é o estatuto matriz da profissão no Brasil:
* **Art. 2º (Requisitos de Habilitação Legal):** O exercício da profissão de bibliotecário em todo o território nacional é privativo dos bacharéis em Biblioteconomia por escolas oficiais ou reconhecidas e portadores de registro e carteira profissional expedida pelo respectivo **Conselho Regional de Biblioteconomia (CRB)** de sua jurisdição.
* **Art. 3º (Validade Territorial):** A carteira profissional é válida em todo o território nacional como prova de identidade civil para todos os efeitos legais.

#### Atribuições Privativas (Art. 6º da Lei 4.084/62)
São funções e atividades de competência **EXCLUSIVA e PRIVATIVA** dos bacharéis em Biblioteconomia:
1. **Planejamento, organização, direção e execução** dos serviços técnicos de bibliotecas e centros de documentação;
2. **Planejamento e execução dos serviços de catalogação e classificação de documentos** (atenção: leigos não podem assinar catalogação na fonte nem fichas catalográficas!);
3. **Organização e direção de serviços de bibliografia e documentação**;
4. **Ensino de disciplinas específicas de Biblioteconomia** nos cursos de graduação e pós-graduação da área;
5. **Realização de perícias documentais e emissão de laudos técnicos** pertinentes à organização de acervos e documentos bibliográficos.

> [!IMPORTANT]
> **Distinção Crítica Cebraspe:** Atividades como atendimento ao público, empréstimo no balcão e higienização física podem ser executadas por técnicos ou auxiliares sob supervisão. No entanto, a **classificação, a catalogação, a indexação técnica e a direção do serviço** são atos privativos indelegáveis do bibliotecário registrado!

---

### 3. A Lei Federal nº 9.674, de 26 de junho de 1998: O Sistema CFB / CRB
A Lei nº 9.674/98 reestruturou o Conselho Federal e os Conselhos Regionais de Biblioteconomia como autarquias federais dotadas de personalidade jurídica de direito público e autonomia administrativa e financeira:

#### A. Conselho Federal de Biblioteconomia (CFB)
* Sede e foro no Distrito Federal (Brasília);
* Jurisdição em todo o território nacional;
* **Competências Principais:**
  * Normatizar o exercício da profissão por meio de Resoluções;
  * Aprovar e modificar o Código de Ética Profissional;
  * Julgar, em grau de último recurso administrativo, os processos disciplinares decididos pelos CRBs;
  * Fixar o valor de anuidades, taxas e emolumentos em todo o território nacional;
  * **Competência Privativa Absoluta:** Aplicar a penalidade máxima de **Cassação do Registro Profissional**.

#### B. Conselhos Regionais de Biblioteconomia (CRB)
* Jurisdição regional (abrangem um ou mais estados da federação);
* **Competências Principais:**
  * Fiscalizar o exercício profissional em sua área geográfica;
  * Expedir a carteira de identidade profissional e a cédula do bibliotecário;
  * Fiscalizar bibliotecas públicas, privadas, escolares e governamentais, autuando estabelecimentos sem bibliotecário responsável registrado;
  * Processar e julgar infrações disciplinares em primeira instância administrativa.

---

### 4. O Código de Ética Profissional do Bibliotecário (Resolução CFB nº 207/2018)
O Código de Ética estabelece os princípios deontológicos que guiam a conduta profissional:

#### A. Princípios Fundamentais (Art. 2º)
* O bibliotecário deve pautar sua conduta pelo respeito à dignidade da pessoa humana, pelo livre acesso à informação, pela defesa dos Direitos Humanos e pela recusa a qualquer forma de censura ideológica ou discriminação de raça, gênero, orientação sexual, credo ou convicção política.

#### B. Deveres Expressos do Bibliotecário (Art. 3º)
1. Desempenhar suas funções com zelo, probidade, decoro e independência técnica;
2. **Guardar Sigilo Profissional:** Preservar sigilo absoluto sobre fatos, dados e interesses informacionais de usuários conhecidos em razão do exercício do ofício.
   * *Atenção:* O dever de sigilo **permanece mesmo após a cessação do vínculo de trabalho** ou término da prestação de serviços (regra vital para a Biblioteca da Câmara dos Deputados no atendimento a parlamentares!).
3. Manter permanente atualização e aprimoramento cultural e técnico;
4. Tratar usuários, colegas e colaboradores com urbanidade e estrita equidade;
5. **Dever de Denúncia:** Denunciar aos órgãos fiscalizadores (CRB) qualquer prática de exercício ilegal ou clandestino da profissão;
6. Informar com exatidão suas qualificações profissionais, abstendo-se de atribuir a si títulos que não possua.

#### C. Proibições Expressas (Art. 4º)
É terminantemente vedado ao bibliotecário:
1. **Praticar o "acobertamento":** Assinar, referendar ou rubricar trabalhos técnicos, fichas catalográficas, classificações ou laudos periciais executados por leigos ou pessoas não habilitadas perante o CRB;
2. Reter abusivamente documentos, acervos, prontuários ou materiais confiados à sua guarda profissional;
3. Praticar concorrência desleal, captação ilícita de clientela ou aviltamento de honorários;
4. Utilizar a profissão para obter vantagens indevidas, suborno ou favorecimento ilícito;
5. Deixar de pagar a anuidade ao respectivo CRB (a inadimplência constitui infração disciplinar expressa!).

---

### 5. Regime Disciplinar e Gradação das Penalidades Éticas (Art. 13 da Res. CFB 207/2018 e Art. 40 da Lei 9.674/98)
As sanções aplicáveis em caso de cometimento de falta ética ou descumprimento legal obedecem a uma ordem rigorosa de gradação e dosimetria:

| Penalidade Disciplinar | Caráter da Sanção | Órgão Julgador Competente | Efeitos e Publicidade |
| :--- | :--- | :--- | :--- |
| **1. Advertência Reservada** | Confidencial | Conselho Regional (CRB) | Ofício sigiloso registrado no prontuário do profissional, sem divulgação externa. |
| **2. Censura Reservada** | Confidencial | Conselho Regional (CRB) | Notificação sigilosa com advertência formal por escrito. |
| **3. Censura Pública** | Pública | Conselho Regional (CRB) | **Publicada no Diário Oficial** e afixada no mural oficial da sede do CRB. |
| **4. Multa** | Pecuniária | Conselho Regional (CRB) | Fixada de 1 a 10 vezes o valor da anuidade profissional vigente. |
| **5. Suspensão do Exercício Profissional** | Temporária | Conselho Regional (CRB) / Recurso ao CFB | Proibição de exercer a profissão por prazo de **até 3 (três) anos**. |
| **6. Cassação do Registro Profissional** | Definitiva | **COMPETÊNCIA PRIVATIVA E EXCLUSIVA DO CFB** | Cancelamento definitivo do direito de exercer a profissão de bibliotecário em todo o país. |

> [!CAUTION]
> **Casca de Banana Cebraspe nº 2:** A banca afirma reiteradamente que *"um Conselho Regional de Biblioteconomia pode, por maioria simples de seus conselheiros, cassar definitivamente o registro de um bibliotecário infrator"*. Essa afirmação é **ERRADA**! A cassação é competência **indelegável e privativa do Conselho Federal (CFB)**, dependendo de quórum qualificado de dois terços dos votos e garantido o contraditório e a ampla defesa.

---

### 6. Quadro Sinóptico de Cascas de Banana do Cebraspe em Legislação e Ética

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"A elaboração de fichas catalográficas e a classificação de obras podem ser realizadas por técnicos de nível médio, dispensando-se a supervisão de bibliotecário."* | **ERRADO** | A catalogação e classificação são atribuições **privativas** do bibliotecário (Art. 6º da Lei 4.084/62). |
| *"O bibliotecário está desobrigado do sigilo profissional sobre pesquisas realizadas por parlamentares assim que seu contrato de trabalho for rescindido."* | **ERRADO** | O sigilo profissional **permanece inalterado mesmo após o término do vínculo** funcional ou de prestação de serviços. |
| *"A penalidade de Censura Pública é comunicada apenas em caráter estritamente confidencial ao infrator."* | **ERRADO** | A Censura Pública é obrigatoriamente **publicada no Diário Oficial**, perdendo o caráter sigiloso. |
| *"O ensino de disciplinas de Biblioteconomia nos cursos superiores não exige diploma de graduação na área nem registro profissional."* | **ERRADO** | O ensino de matérias específicas de Biblioteconomia é função **privativa** do bacharel registrado (Art. 6º, 'd', Lei 4.084/62). |`,
  checkpoints: [
    {
      id: 'cp-1-4-1',
      pergunta: 'Micro-Checkpoint 1: Atribuições Privativas (Lei 4.084/62)',
      item: 'A catalogação e a classificação de documentos constituem atribuições privativas dos bacharéis em Biblioteconomia no Brasil.',
      gabarito: 'C',
      justificativa: "Certo! O Art. 6º, alínea 'b', da Lei nº 4.084/1962 estabelece expressamente essa exclusividade profissional.",
    },
    {
      id: 'cp-1-4-2',
      pergunta: 'Micro-Checkpoint 2: Penalidades Éticas e Competência',
      item: 'A sanção de cassação definitiva do registro profissional pode ser aplicada de forma autônoma por qualquer Conselho Regional de Biblioteconomia em decisão singular.',
      gabarito: 'E',
      justificativa: 'Errado! A cassação do registro é a penalidade máxima e é de competência EXCLUSIVA do Conselho Federal de Biblioteconomia (CFB), dependendo de processo com contraditório e ampla defesa.',
      versao_correta: 'A sanção de cassação definitiva do registro profissional é de competência privativa do Conselho Federal de Biblioteconomia (CFB), não podendo ser aplicada de forma autônoma por um CRB.',
    },
      {
      id: 'cp-1-4-3',
      pergunta: "Micro-Checkpoint 3: Sigilo Profissional e Código de Ética do CFB",
      item: "O Código de Ética Profissional do Bibliotecário (Resolução CFB nº 207/2018) estabelece como dever ético a guarda de sigilo sobre dados e hábitos de consulta informacional dos usuários, mesmo após o término do vínculo de trabalho.",
      gabarito: 'C',
      justificativa: "Certo! O sigilo profissional sobre pesquisas, interesses e histórico de consultas dos usuários é dever expressamente resguardado pelo Código de Ética do Conselho Federal de Biblioteconomia.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-4-1',
        periodo: '1962',
        disciplina: 'Lei Federal 4.084',
        focoPrincipal: 'Regulamentação legal da profissão de bibliotecário e definição de atribuições privativas',
        figuraChave: 'Congresso Nacional / Presidente da República',
      },
      {
        id: 'tl-1-4-2',
        periodo: '1965',
        disciplina: 'Decreto 56.725',
        focoPrincipal: 'Regulamentação e estruturação dos Conselhos Federal e Regionais (CFB / CRB)',
        figuraChave: 'Poder Executivo Federal',
      },
      {
        id: 'tl-1-4-3',
        periodo: 'Resolução CFB',
        disciplina: 'Código de Ética Profissional',
        focoPrincipal: 'Deveres (sigilo, denúncia), Proibições e Escala de 6 penalidades disciplinares',
        figuraChave: 'Conselho Federal de Biblioteconomia (CFB)',
      },
    ],
    autores: [
      {
        id: 'aut-1-4-1',
        nome: 'Lei Federal nº 4.084/62',
        ano: 1962,
        obraPrincipal: 'Artigo 6º (Atribuições Privativas)',
        ideiaChave: 'Direção de bibliotecas, catalogação e classificação de documentos.',
        chipPegadinha: 'Prática de atos privativos por terceiros leigos é nula e constitui contravenção.',
      },
      {
        id: 'aut-1-4-2',
        nome: 'CFB (Conselho Federal)',
        ano: 1962,
        obraPrincipal: 'Órgão Normativo e Recursal Máximo',
        ideiaChave: 'Sede em Brasília/DF; competência exclusiva para cassar registro profissional.',
        chipPegadinha: 'CRBs não possuem autonomia para cassar registro definitivamente.',
      },
      {
        id: 'aut-1-4-3',
        nome: 'CRB (Conselho Regional)',
        ano: 1962,
        obraPrincipal: 'Fiscalização Direta nas Jurisdições',
        ideiaChave: 'Concessão de registros, fiscalização do exercício e aplicação de sanções iniciais.',
        chipPegadinha: 'Pode aplicar desde advertência confidencial até suspensão por até 3 anos.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-4-1',
        afirmacao: 'A cassação definitiva do registro profissional do bibliotecário é penalidade de competência originária e exclusiva dos Conselhos Regionais de Biblioteconomia.',
        gabarito: 'E',
        porQue: 'Errado! A cassação do registro é penalidade máxima de competência PRIVATIVA do Conselho Federal de Biblioteconomia (CFB), cabendo ao CRB apenas a instrução.',
      },
      {
        id: 'peg-1-4-2',
        afirmacao: 'O planejamento e a execução dos serviços de classificação e catalogação constituem atribuições compartilhadas entre bibliotecários e técnicos administrativos de bibliotecas.',
        gabarito: 'E',
        porQue: 'Errado! O Art. 6º da Lei 4.084/62 estabelece que a classificação e catalogação são atribuições PRIVATIVAS e indelegáveis de bacharéis em Biblioteconomia.',
      },
    ],
  },
};
