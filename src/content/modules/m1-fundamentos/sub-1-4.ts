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
  teoriaDensaMarkdown: `### 1. O Marco Legal da Profissão no Brasil

O exercício da profissão de bibliotecário no território nacional é rigorosamente regulado por diplomas legais federais:

* **Lei Federal nº 4.084, de 30 de junho de 1962:**
  * Dispõe sobre a profissão de bibliotecário e regula o seu exercício.
  * O exercício da profissão em qualquer de seus ramos é privativo dos bacharéis em Biblioteconomia por escolas oficiais ou reconhecidas, portadores de carteira de identidade profissional expedida pelo respectivo Conselho Regional de Biblioteconomia (CRB).
* **Decreto nº 56.725, de 16 de agosto de 1965:**
  * Regulamenta a Lei 4.084/62 e detalha a estrutura dos órgãos fiscalizadores.
* **Estrutura CFB / CRB:**
  * **CFB (Conselho Federal de Biblioteconomia):** Órgão superior com sede em Brasília, responsável por normatizar, julgar em grau de recurso, expedir resoluções e aprovar o Código de Ética.
  * **CRBs (Conselhos Regionais de Biblioteconomia):** Autarquias fiscalizadoras nos âmbitos regionais estaduais/distritais, responsáveis pelo registro, fiscalização e aplicação inicial de sanções.

---

### 2. Atribuições Privativas (Art. 6º da Lei 4.084/62)
São privativas dos bacharéis em Biblioteconomia as seguintes funções:
1. Planejamento, organização, direção e execução dos serviços técnicos de bibliotecas e centros de documentação.
2. Planejamento e execução dos serviços de catalogação e classificação de documentos.
3. Organização e direção de serviços de bibliografia e documentação.
4. Ensino de disciplinas específicas de Biblioteconomia nos cursos de graduação e pós-graduação.
5. Realização de perícias documentais e emissão de laudos técnicos pertinentes.

---

### 3. Código de Ética Profissional do Bibliotecário (Resolução CFB)
O Código de Ética fixa os padrões de conduta que orientam o relacionamento do bibliotecário com os usuários, a sociedade, a profissão e os órgãos de classe.

#### Deveres Fundamentais (Art. 3º):
* Desempenhar suas atividades com zelo, dedicação, dignidade e decoro.
* Guardar **sigilo profissional** sobre dados ou fatos conhecidos em razão do ofício (essencial para quem atua em gabinetes parlamentares e comissões da Câmara!).
* Manter constante aprimoramento cultural e profissional.
* Tratar os usuários com equidade, sem discriminação de qualquer natureza.
* Denunciar tempestivamente às autoridades competentes qualquer prática de exercício ilegal da profissão.

#### Proibições Expressas (Art. 4º):
* Praticar atos que desabonem a classe ou concorram para o descrédito da profissão.
* Assinar ou referendar trabalhos, catálogos, fichas ou laudos elaborados por indivíduos não habilitados perante a lei.
* Praticar concorrência desleal ou aviltamento de honorários.
* Reter abusivamente documentos ou bens confiados à sua guarda.

#### Escala de Penalidades Disciplinares:
1. Advertência confidencial (aplicada pelo CRB).
2. Censura confidencial.
3. Censura pública (divulgada no Diário Oficial e mural do conselho).
4. Multa.
5. Suspensão do exercício profissional (por prazo de até 3 anos).
6. Cassação do registro profissional (sanção extrema de competência privativa do CFB).`,
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
