import type { ModuloFilho } from '../../../domain/types';

export const submodulo104: ModuloFilho = {
  id: 'sub-10-4',
  numero: '10.4',
  titulo: 'Legislação do Livro, Bibliotecas, Depósito Legal e a Nova Lei 14.837/2024',
  descricaoCurta: 'A Lei do Depósito Legal (Lei nº 10.994/2004: prazos, FBN, Bibliografia Brasileira e penalidades), a regulamentação profissional (Leis 4.084/62 e 9.674/98 com Código de Ética do CFB) e o Sistema Nacional de Bibliotecas Escolares (Lei nº 14.837/2024).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Conselho Federal de Biblioteconomia (CFB)', 'Fundação Biblioteca Nacional (FBN)', 'Lei 10.994/2004', 'Lei 14.837/2024', 'Lei 9.674/1998'],
  alertasCebraspe: [
    'Depósito Legal no Brasil (Lei 10.994/2004): prazo de envio de até 30 DIAS após a publicação. Destinatária exclusiva: Fundação Biblioteca Nacional (FBN). Responsáveis solidários: o impressor e o editor. Finalidades: guarda da produção nacional e publicação da Bibliografia Brasileira.',
    'Penalidade pelo descumprimento do Depósito Legal: a lei prevê apreensão dos exemplares e MULTA de até 100 vezes o valor de mercado da obra. O Cebraspe adora afirmar que o descumprimento gera apenas "advertência pedagógica": ERRADO!',
    'Exercício da Profissão de Bibliotecário (Lei 9.674/1998): é privativo dos bacharéis registrados no CRB. São atos privativos do bibliotecário: a direção de bibliotecas, o planejamento de serviços de documentação e o processamento técnico (catalogação e classificação).',
    'A NOVA LEI DAS BIBLIOTECAS ESCOLARES (Lei nº 14.837/2024): marco histórico sancionado em 2024 que altera a Lei 12.244/2010 e institui o Sistema Nacional de Bibliotecas Escolares (SNBE), reafirmando expressamente a obrigatoriedade da atuação do Bibliotecário com registro profissional no CRB em todas as escolas do país.',
    'Código de Ética do CFB: veda terminantemente ao bibliotecário exercer censura política, religiosa ou ideológica sobre o acervo e exige dever estrito de sigilo profissional quanto às leituras e consultas efetuadas pelos usuários.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Sinóptico da Legislação Federal sobre Bibliotecas e Informação',
    colunas: ['Diploma Legal', 'Ano / Atualização', 'Objeto Principal Normatizado', 'Ponto Crítico Cobrado pelo Cebraspe'],
    linhas: [
      ['Lei nº 10.994/2004', '2004 (Vigente)', 'Institui o Depósito Legal de publicações na Biblioteca Nacional', 'Prazo de 30 dias; remessa de exemplar; multa pesada (até 100x o valor) e elaboração da Bibliografia Brasileira'],
      ['Lei nº 4.084/1962 e 9.674/1998', '1962 / 1998 (Vigente)', 'Regulamenta o exercício da profissão de Bibliotecário e o Sistema CFB/CRB', 'Exige registro no CRB e define a direção de bibliotecas como atribuição privativa do bibliotecário'],
      ['Lei nº 12.244/2010', '2010', 'Dispõe sobre a universalização das bibliotecas nas instituições de ensino', 'Meta de acervo mínimo de um título por aluno matriculado'],
      ['Lei nº 14.837/2024', 'Abril de 2024 (Nova!)', 'Institui o Sistema Nacional de Bibliotecas Escolares (SNBE)', 'Exige a presença do Bibliotecário registrado no CRB e moderniza o conceito de biblioteca com tecnologias assistivas e digitais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Lei do Depósito Legal (Lei nº 10.994/2004)

O Depósito Legal é o mecanismo secular pelo qual o Estado assegura o recolhimento, a preservação e o registro de toda a produção bibliográfica e fonográfica nacional:

* **Finalidades Canônicas (Art. 1º):**
  1. Assegurar a coleta, a guarda e a preservação da produção intelectual brasileira;
  2. Produzir e publicar a **Bibliografia Nacional Brasileira**;
  3. Proteger e difundir a língua e a cultura nacionais;
  4. Prover os serviços de informação e pesquisa no país e no exterior.
* **Destinatária Legal e Prazos:**
  * O material deve ser entregue à **Fundação Biblioteca Nacional (FBN)**, no Rio de Janeiro.
  * O prazo legal é de **até 30 dias após a publicação** da obra.
* **Responsabilidade Solidária:**
  * O **editor e o impressor** respondem solidariamente pela remessa obrigatória.
* **Penalidades por Omissão (Art. 4º):**
  * O infrator é notificado para entregar a obra em 30 dias.
  * Persistindo a omissão, a FBN apreenderá os exemplares onde se encontrarem e aplicará **multa de até 100 vezes o valor de mercado da obra**, cobrada judicialmente.

---

### 2. A Regulamentação Profissional e o Código de Ética do CFB

A profissão de Bibliotecário é regulamentada pelas **Leis nº 4.084/1962 e nº 9.674/1998** e fiscalizada pelo Conselho Federal de Biblioteconomia (CFB) e Conselhos Regionais (CRB):

* **Atribuições Privativas do Bibliotecário (Art. 6º da Lei 9.674/98):**
  * Direção, chefia, assessoria e consultoria de bibliotecas, centros de documentação e serviços de informação;
  * Classificação, catalogação e indexação de documentos, manuscritos e obras raras;
  * Elaboração de bibliografias, resumos, índices e catálogos coletivos;
  * Ensino de disciplinas de formação profissional em Biblioteconomia.
* **O Código de Ética Profissional do Bibliotecário:**
  * Aprovado pelo CFB (documento em \`Legislação e contexto legislativo/codigo_etica_4ed.2reimp.pdf\`).
  * **Princípios Deontológicos:** Defesa intransigente da **liberdade de pensamento**, da **democracia** e do **livre acesso à informação**, sendo vedada qualquer forma de censura; dever absoluto de **sigilo profissional** quanto aos temas pesquisados pelos usuários; respeito à propriedade intelectual e aprimoramento técnico contínuo.

---

### 3. A Nova Lei do Sistema Nacional de Bibliotecas Escolares (Lei nº 14.837/2024)

Sancionada em abril de 2024, a **Lei nº 14.837/2024** representa a vitória mais recente da categoria bibliotecária e do direito à educação no Brasil (documento presente em \`Legislação e contexto legislativo/Lei-14837-2024-04-08.pdf\`):

* **Criação do SNBE:** Institui formalmente o **Sistema Nacional de Bibliotecas Escolares**, sob coordenação do Ministério da Educação (MEC).
* **Obrigatoriedade Profissional Expressa:** A lei atualiza a Lei 12.244/2010 e determina expressamente que as bibliotecas escolares de todas as redes públicas e privadas do Brasil **devem contar com a presença de profissional Bibliotecário devidamente registrado no Conselho Regional de Biblioteconomia (CRB)**.
* **Biblioteca Escolar como Equipamento Cultural Multimodal:** A biblioteca escolar é redefinida como um ambiente dinâmico de mediação de leitura, acesso à cultura, pesquisa em recursos físicos e digitais e inclusão social através de recursos de acessibilidade e tecnologias assistivas.`,
  checkpoints: [
    {
      id: 'cp-10-4-1',
      pergunta: 'Micro-Checkpoint 1: Prazos e Penalidades do Depósito Legal',
      item: 'Conforme a Lei nº 10.994/2004, o prazo para envio do exemplar de publicação à Fundação Biblioteca Nacional é de até 30 dias contados da publicação da obra, sujeitando-se o infrator omisso à apreensão de exemplares e a multa de até 100 vezes o valor de mercado da publicação.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a literalidade das disposições da Lei do Depósito Legal brasileira (Arts. 2º e 4º).',
    },
    {
      id: 'cp-10-4-2',
      pergunta: 'Micro-Checkpoint 2: A Nova Lei nº 14.837/2024',
      item: 'A Lei nº 14.837/2024, ao instituir o Sistema Nacional de Bibliotecas Escolares, autorizou expressamente que qualquer professor ou servidor com ensino médio atue como responsável técnico pela biblioteca escolar, dispensando o registro profissional de bibliotecário no CRB.',
      gabarito: 'E',
      justificativa: 'Errado! A Lei 14.837/2024 determinou com rigor exatamente o oposto: reafirmou a obrigatoriedade da presença de profissional Bibliotecário diplomado e registrado no CRB nas bibliotecas escolares.',
    },
      {
      id: 'cp-10-4-3',
      pergunta: "Micro-Checkpoint 3: Tramitação e Numeração Progressiva de Proposições",
      item: "No processo legislativo regimental, projetos de lei ordinária que tramitam em regime de urgência são dispensados do parecer das comissões temáticas de mérito e podem ser apreciados diretamente pelo Plenário da Câmara dos Deputados.",
      gabarito: 'C',
      justificativa: "Certo! Conforme o Regimento Interno da Câmara dos Deputados (RICD art. 155), a urgência permite dispensar as formalidades regimentais de instrução ordinária em comissões, incluindo a matéria na Ordem do Dia do Plenário.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-4-1',
        periodo: '1962 / 1998',
        disciplina: 'Leis da Profissão',
        focoPrincipal: 'Promulgação das Leis nº 4.084/62 e nº 9.674/98 com criação do Sistema CFB/CRB e atribuições privativas',
        figuraChave: 'Congresso Nacional / CFB',
      },
      {
        id: 'tl-10-4-2',
        periodo: '2004',
        disciplina: 'Depósito Legal',
        focoPrincipal: 'Sancionada a Lei nº 10.994/2004 disciplinando o depósito legal de obras na Biblioteca Nacional',
        figuraChave: 'Fundação Biblioteca Nacional',
      },
      {
        id: 'tl-10-4-3',
        periodo: '2010 / 2024',
        disciplina: 'Bibliotecas Escolares',
        focoPrincipal: 'Universalização das Bibliotecas Escolares (Lei 12.244/10) e criação do SNBE pela Lei nº 14.837/2024',
        figuraChave: 'Congresso Nacional / MEC',
      },
    ],
    autores: [
      {
        id: 'aut-10-4-1',
        nome: 'Conselho Federal de Biblioteconomia (CFB)',
        ano: 2018,
        obraPrincipal: 'Código de Ética Profissional do Bibliotecário',
        ideiaChave: 'Defesa da liberdade intelectual contra a censura; dever de sigilo e livre acesso.',
        chipPegadinha: 'O bibliotecário não pode exercer censura moral, política ou religiosa.',
      },
      {
        id: 'aut-10-4-2',
        nome: 'Fundação Biblioteca Nacional (FBN)',
        ano: 2004,
        obraPrincipal: 'Regulamento do Depósito Legal Brasileiro',
        ideiaChave: 'Guarda da memória cultural do país e elaboração compulsória da Bibliografia Brasileira.',
        chipPegadinha: 'O editor e o impressor respondem solidariamente pela entrega do depósito legal.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-4-1',
        afirmacao: 'O não cumprimento do depósito legal no Brasil sujeita o editor responsável unicamente à advertência administrativa formal, sem cominação de multas financeiras.',
        gabarito: 'E',
        porQue: 'A Lei nº 10.994/2004 prevê expressamente multa de até cem vezes o valor de mercado da publicação, além da apreensão física dos exemplares.',
      },
      {
        id: 'peg-10-4-2',
        afirmacao: 'Conforme a Lei nº 9.674/1998, as atividades de administração e direção de bibliotecas podem ser exercidas por qualquer profissional de nível superior com pós-graduação em gestão.',
        gabarito: 'E',
        porQue: 'A direção, organização e administração de bibliotecas são atos privativos de bacharéis em Biblioteconomia registrados no CRB.',
      },
    ],
  },
};
