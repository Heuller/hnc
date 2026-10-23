import type { ModuloFilho } from '../../../domain/types';

export const submodulo119: ModuloFilho = {
  id: 'sub-11-9',
  numero: '11.9',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 9: Improbidade Administrativa - Lei 8.429/1992)',
  preRequisitos: ["sub-11-8"],
  titulo: 'Governança no Setor Público Federal (Decreto Federal nº 9.203/2017)',
  titulo_curto: 'Governança Pública Federal',
  antesDeLer: [
    {
      termo: 'Governança Pública (Decreto nº 9.203/2017)',
      definicao: 'Conjunto de mecanismos de liderança, estratégia e controle postos em prática para avaliar, direcionar e monitorar a gestão pública.',
      exemploBiblioteca: 'Atuação do Comitê de Governança Digital da Câmara para homologar novos projetos de modernização da biblioteca.',
    },
    {
      termo: 'Princípios da Governança (Decreto nº 9.203)',
      definicao: 'Capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas (accountability) e transparência.',
      exemploBiblioteca: 'Publicação anual de relatórios de gestão da biblioteca demonstrando custos e volumes de consultas atendidas.',
    },
    {
      termo: 'Mecanismos de Governança',
      definicao: 'Três pilares fundamentais: Liderança (pessoas e competências), Estratégia (diretrizes e metas) e Controle (gestão de riscos e auditoria).',
      exemploBiblioteca: 'Elaboração da Matriz de Riscos de TI da Biblioteca Pedro Aleixo para mitigar falhas de backup no repositório digital.',
    },
    {
      termo: 'Accountability',
      definicao: 'Dever legal e ético de prestar contas, assumir responsabilidade pelos atos e resultados e submeter-se ao escrutínio público.',
      exemploBiblioteca: 'Disponibilização do catálogo patrimonial de obras raras para auditoria regular do TCU e dos órgãos de controle interno.',
    },
  ],
  descricaoCurta: 'Conceito e distinção: Governança vs. Gestão vs. Governabilidade. A tríade de mecanismos: Liderança, Estratégia e Controle. Princípios e diretrizes do Decreto nº 9.203/2017. Gestão de riscos, programas de integridade e o modelo das Três Linhas de Defesa no serviço público federal.',
  tempoEstimadoMinutos: 10,
  autoresChave: [
    'Decreto Federal nº 9.203/2017',
    'Tribunal de Contas da União (TCU - Referencial Básico de Governança)',
    'Instituto dos Auditores Internos (IIA - Três Linhas de Defesa)',
    'Comitê Interministerial de Governança (CIG)',
  ],
  alertasCebraspe: [
    'DISTINÇÃO INDISPENSÁVEL (GOVERNANÇA VS. GESTÃO VS. GOVERNABILIDADE): A técnica de distrator recorrente consiste em trocar esses três conceitos! 1) GOVERNABILIDADE: condições políticas de legitimidade e apoio partidário no Parlamento para governar; 2) GOVERNANÇA: mecanismos de liderança, estratégia e controle para AVALIAR, DIRECIONAR e MONITORAR a atuação organizacional; 3) GESTÃO: função técnico-operacional responsável por PLANEJAR, EXECUTAR, CONTROLAR e AGIR no dia a dia da instituição.',
    'MECANISMOS DE GOVERNANÇA DO DECRETO 9.203/2017 (TRÍADE LEC): São três e apenas três mecanismos fundamentais: Liderança (capacidade da alta administração), Estratégia (diretrizes, planos e objetivos) e Controle (gestão de riscos e integridade).',
    'PRINCÍPIOS DA GOVERNANÇA PÚBLICA (ART. 3º): Capacidade de resposta (responsiveness), Integridade, Confiabilidade, Melhoria regulatória, Prestação de contas (accountability) e Transparência.',
    'MODELO DAS TRÊS LINHAS DE DEFESA (CONTROLE E RISCOS): 1ª Linha: Gestores operacionais diretos da atividade-fim (são os donos dos riscos e responsáveis pelo controle operacional imediato); 2ª Linha: Funções de conformidade, riscos e controle interno da gestão (monitoram e apoiam a 1ª linha); 3ª Linha: Auditoria Interna (presta avaliação e consultoria independente e objetiva à alta administração).',
  ],
  quadroComparativo: {
    titulo: 'Distinção Técnica: Governança, Gestão e Governabilidade',
    colunas: ['Conceito', 'Definição Central', 'Verbos de Ação Típicos', 'Nível de Atuação', 'Responsáveis Primordiais'],
    linhas: [
      ['Governabilidade', 'Condições políticas substantivas e legitimidade para exercer o poder', 'Articular, pactuar, coligar, negociar', 'Macropolítico / Constitucional', 'Chefes de Poder e Lideranças Parlamentares'],
      ['Governança Pública', 'Mecanismos que avaliam, direcionam e monitoram as estratégias', 'Avaliar, Direcionar e Monitorar', 'Estratégico / Diretivo', 'Alta Administração e Comitês de Governança'],
      ['Gestão Pública', 'Processos operacionais e técnicos de entrega dos serviços públicos', 'Planejar, Executar, Controlar e Agir (PDCA)', 'Tático e Operacional', 'Secretários, Diretores, Chefes de Setor e Servidores'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Conceito e Distinção Essencial: Governança, Gestão e Governabilidade

Para o Cebraspe, a precisão terminológica entre estas três dimensões institucionais é decisiva:

* **Governabilidade:** Refere-se à **dimensão política** do poder. É a capacidade política substantiva e a legitimidade que o governante possui para governar, derivada do apoio da sociedade civil, da estabilidade democrática e da construção de maioria partidária no Poder Legislativo (coalizão governamental). Sem governabilidade, o Executivo perde a capacidade de aprovar leis e reformas.
* **Governança Pública:** Refere-se à **dimensão institucional e instrumental** de direção. Conforme a definição canônica do art. 2º, I, do Decreto Federal nº 9.203/2017:
  > *"Governança pública: conjunto de mecanismos de liderança, estratégia e controle postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade."*
  * A governança atua na alta cúpula, determinando para *onde* a instituição deve ir, quais os limites éticos de risco e como será medida a criação de valor público.
* **Gestão Pública:** Refere-se à **dimensão executiva e operacional**. É a engrenagem interna incumbida de planejar, executar, alocar recursos orçamentários, gerir pessoas e controlar os processos cotidianos para materializar as diretrizes e metas fixadas pela governança.

---

### 2. A Tríade de Mecanismos de Governança (Decreto nº 9.203/2017)

A governança pública federal estrutura-se sob três mecanismos vitais (**L-E-C**):

$$\\text{Mecanismos de Governança} = \\text{Liderança} + \\text{Estratégia} + \\text{Controle}$$

1. **Mecanismo de Liderança:** Compreende as competências técnicas e comportamentais, o comprometimento ético, a integridade funcional e o engajamento da alta administração para guiar os servidores e a organização em direção aos objetivos públicos prioritários.
2. **Mecanismo de Estratégia:** Compreende a definição clara da visão de futuro, dos objetivos institucionais de longo prazo, dos planos de ação, do alinhamento das políticas públicas às necessidades da sociedade e da alocação racional dos recursos orçamentários.
3. **Mecanismo de Controle:** Compreende os processos estruturados de gestão de riscos, salvaguardas internas, auditorias, ouvidorias e prestação de contas (*accountability*), com o objetivo de assegurar que as metas sejam alcançadas com integridade e tempestividade, prevenindo fraudes, desvios e ineficiências.

---

### 3. Princípios e Diretrizes da Política de Governança Federal

O Decreto nº 9.203/2017 fixa seis princípios cardeais no seu art. 3º:
* **Capacidade de Resposta (*Responsiveness*):** Agilidade e aptidão da instituição pública para atender com presteza e qualidade às demandas reais e mutáveis dos cidadãos.
* **Integridade:** Coerência inabalável entre os atos administrativos e os padrões éticos, com combate permanente a conflitos de interesse, nepotismo e corrupção.
* **Confiabilidade:** Capacidade de gerar segurança jurídica, previsibilidade e estabilidade na prestação dos serviços e na guarda de informações oficiais.
* **Melhoria Regulatória:** Produção de normas e regulamentos simples, claros, necessários e baseados em evidências empíricas, evitando inflação legislativa inútil.
* **Prestação de Contas (*Accountability*):** Dever indeclinável de justificar publicamente as decisões, resultados e o uso dos recursos públicos à sociedade.
* **Transparência:** Acesso proativo, amplo e tempestivo aos dados e atos governamentais.

---

### 4. Gestão de Riscos e o Modelo das Três Linhas de Defesa

A gestão de riscos é elemento central da governança pública, conceituada como o processo contínuo de identificar, avaliar, tratar e monitorar eventos potenciais que possam comprometer os objetivos estratégicos do órgão:

#### O Modelo das Três Linhas (The Three Lines Model do IIA / TCU)
Para mitigar falhas e fraudes na Administração Pública Federal, adota-se o modelo estruturado em três linhas interdependentes:
1. **Primeira Linha (Gestão Operacional):**
   * Composta pelos servidores e gestores que executam diretamente a atividade-fim e a atividade-meio (ex.: bibliotecários que realizam a aquisição e preservação do acervo).
   * **Papel:** São os "donos dos riscos". Devem identificar os riscos operacionais no dia a dia e aplicar controles preventivos imediatos.
2. **Segunda Linha (Funções de Conformidade, Riscos e Controle Interno):**
   * Composta por comitês de risco, assessorias de integridade e órgãos setoriais de controle interno da gestão.
   * **Papel:** Estabelecem as metodologias de risco, monitoram o cumprimento das normas de conformidade (*compliance*) e apoiam tecnicamente a primeira linha.
3. **Terceira Linha (Auditoria Interna Governamental):**
   * Atua com independência funcional em relação à gestão executiva, reportando-se diretamente à alta administração e aos comitês de governança.
   * **Papel:** Presta avaliação (*assurance*) e consultoria imparcial e independente sobre a eficácia de toda a estrutura de governança, gestão de riscos e controles internos.`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Governança no Setor Público Federal (Decreto nº 9.203/2017 e Referencial do TCU)** orienta as instâncias de liderança para assegurar resultados que atendam às necessidades da sociedade:
1. **Governança vs. Gestão (A Diferença Crítica no Cebraspe!):**
   - **Governança Pública:** Conjunto de mecanismos de **Liderança, Estratégia e Controle** postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade. A governança responde à pergunta: *"O que fazer e para onde ir?"*.
   - **Gestão Pública:** É a ação executiva e operacional responsável por planejar, executar, gerenciar recursos, construir e entregar produtos e serviços de acordo com as diretrizes da governança. A gestão responde à pergunta: *"Como fazer no dia a dia?"*.
2. **Princípios da Governança Pública (Decreto nº 9.203/2017, art. 3º):**
   - Capacidade de resposta; Integridade; Confiabilidade; Melhoria regulatória; Prestação de contas e responsabilidade (*Accountability*); e Transparência.
3. **As Diretrizes e os Mecanismos da Governança (TCU):**
   - **Liderança:** Recursos humanos qualificados, integridade, competência técnica e ética dos altos dirigentes.
   - **Estratégia:** Definição de objetivos de longo prazo, alinhamento institucional, planos táticos e escuta das partes interessadas (*stakeholders*).
   - **Controle:** Gestão de riscos corporativos, controle interno e auditoria independente.
4. **Gestão de Riscos (ISO 31000 e COSO-ERM):**
   - Processo para identificar, analisar, avaliar e tratar incertezas que possam comprometer os objetivos estratégicos da organização pública.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Comitê de Governança Estratégica da Câmara dos Deputados):** A Mesa Diretora e a Diretoria-Geral instituem o Comitê de Governança da Câmara (órgão de governança pura). O comitê define que o plano quadrienal deve focar na digitalização total de processos e na transparência legislativa, transmitindo essas diretrizes estratégicas para o CEDI e para a biblioteca executarem (gestão).
- **Cenário 2 (Gestão de Riscos Operacionais no Acervo Histórico):** A chefia da Biblioteca Pedro Aleixo elabora a matriz de riscos do acervo de acordo com o referencial do TCU: identifica o risco de alagamento por rompimento de ar-condicionado (Probabilidade Média / Impacto Alto) e estabelece controles preventivos imediatos (instalação de sensores de umidade com alerta no celular da brigada).
- **Cenário 3 (Aplicação do Princípio da *Accountability* no Relatório de Gestão):** Anualmente, a Câmara dos Deputados publica em seu portal o Relatório Integrado de Gestão no formato preconizado pelo TCU, prestando contas de cada real do orçamento executado na compra de livros e assinaturas de bases de dados.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Dimensão | Governança Pública | Gestão Pública |
| :--- | :--- | :--- |
| **Instância** | Alta Administração / Comitês Estratégicos | Diretorias, Coordenações e Chefias Operacionais |
| **Ações Chave** | **Avaliar, Direcionar e Monitorar** | **Planejar, Executar e Controlar** |
| **Pergunta Central** | *"O que fazer?"* / *"Para onde vamos?"* | *"Como fazer?"* / *"Com quais recursos?"* |
| **Mecanismos TCU** | Liderança, Estratégia e Controle | Pessoas, Processos e Tecnologia |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão entre Governança e Gestão:** A banca diz que a governança é responsável por executar diretamente as compras e rotinas de catalogação da biblioteca. **Gabarito: ERRADO.** Quem executa é a **Gestão**; a Governança apenas avalia, direciona e monitora a estratégia.
- **Os Três Mecanismos do TCU:** O Cebraspe testa os três mecanismos canônicos de governança do TCU: **Liderança, Estratégia e Controle**.
- **Gestão de Riscos Visa Eliminar 100% dos Riscos:** Afirmar que a gestão de riscos tem como meta eliminar completamente todo e qualquer risco da organização. **Gabarito: ERRADO.** O risco zero não existe; a gestão de riscos busca manter as incertezas dentro do nível aceitável de tolerância da instituição.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Decreto Federal nº 9.203, de 22 de novembro de 2017*. Dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional.
- **TRIBUNAL DE CONTAS DA UNIÃO (TCU).** *Referencial Básico de Governança Aplicável a Órgãos e Entidades da Administração Pública*. 3. ed. Brasília: TCU, 2020.
- **COSO (Committee of Sponsoring Organizations of the Treadway Commission).** *Gerenciamento de Riscos Corporativos: estrutura integrada (COSO-ERM)*. 2017.
- **ABNT NBR ISO 31000:2018.** *Gestão de riscos — Diretrizes*. Rio de Janeiro: ABNT, 2018.
- **MATIAS-PEREIRA, José.** *Governança no setor público*. São Paulo: Atlas, 2010.`,
  checkpoints: [
    {
      id: 'cp-11-9-1',
      pergunta: 'Micro-Checkpoint 1: Distinção entre Governança e Gestão Pública',
      item: 'No âmbito da administração pública federal, a governança é responsável pelo planejamento operacional, execução das rotinas administrativas e gestão orçamentária cotidiana, cabendo à gestão a definição de estratégias e o monitoramento da alta administração.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverteu os papéis: a GOVERNANÇA avalia, direciona e monitora a alta administração e as diretrizes estratégicas. A GESTÃO é a responsável por planejar, executar, controlar e coordenar as rotinas e orçamentos operacionais no dia a dia.',
    },
    {
      id: 'cp-11-9-2',
      pergunta: 'Micro-Checkpoint 2: Mecanismos da Governança Federal (Decreto 9.203/2017)',
      item: 'De acordo com o Decreto Federal nº 9.203/2017, a política de governança da administração pública federal fundamenta-se nos mecanismos essenciais de liderança, estratégia e controle.',
      gabarito: 'C',
      justificativa: 'Correto! O art. 2º, II, do Decreto nº 9.203/2017 prevê textualmente a tríade de mecanismos de governança pública: liderança, estratégia e controle.',
    },
    {
      id: 'cp-11-9-3',
      pergunta: 'Micro-Checkpoint 3: Modelo das Três Linhas e Auditoria Interna',
      item: 'No modelo das três linhas de defesa acolhido pelos órgãos federais e pelo TCU, a auditoria interna integra a primeira linha, sendo responsável imediata pela execução dos controles operacionais preventivos contra fraudes.',
      gabarito: 'E',
      justificativa: 'Errado! A Auditoria Interna compõe a TERCEIRA LINHA de defesa, atuando com independência e prestando avaliação objetiva da governança. Quem executa os controles operacionais preventivos imediatos é a PRIMEIRA LINHA (gestores e servidores da atividade-fim).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-9-1',
        periodo: '2014',
        disciplina: 'Controle Externo',
        focoPrincipal: 'TCU publica o Referencial Básico de Governança Aplicável a Órgãos e Entidades Públicas',
        figuraChave: 'Tribunal de Contas da União',
      },
      {
        id: 'tl-11-9-2',
        periodo: '2017',
        disciplina: 'Governança Federal',
        focoPrincipal: 'Publicação do Decreto Federal nº 9.203/2017: marco normativo da governança no Executivo e reflexos na Administração',
        figuraChave: 'Decreto 9.203/2017',
      },
      {
        id: 'tl-11-9-3',
        periodo: '2020',
        disciplina: 'Gestão de Riscos',
        focoPrincipal: 'Atualização do Modelo das Três Linhas pelo Institute of Internal Auditors (IIA)',
        figuraChave: 'IIA Global',
      },
    ],
    autores: [
      {
        id: 'aut-11-9-1',
        nome: 'Tribunal de Contas da União (TCU)',
        ano: '2020',
        obraPrincipal: 'Referencial Básico de Governança do Setor Público (3ª edição)',
        ideiaChave: 'A separação conceitual rígida entre Governança (direcionar, monitorar) e Gestão (executar) e a relevância do valor público.',
        chipPegadinha: 'Afirmar que comitês de governança devem interferir na execução operacional dos contratos.',
      },
      {
        id: 'aut-11-9-2',
        nome: 'José Matias-Pereira',
        ano: '2021',
        obraPrincipal: 'Governança no Setor Público',
        ideiaChave: 'Distinção ontológica entre governança (capacidade de direção e controle) e governabilidade (condições políticas de apoio).',
        chipPegadinha: 'Tratar governabilidade e governança como sinônimos intercambiáveis.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-9-1',
        afirmacao: 'Governabilidade e governança pública são conceitos equivalentes que designam o conjunto de processos internos de compras e controle financeiro de uma instituição.',
        gabarito: 'E',
        porQue: 'Governabilidade é a capacidade POLÍTICA de sustentação e legitimidade de um governo perante o Parlamento e o eleitorado. Governança é a capacidade institucional de liderança, estratégia e controle.',
      },
      {
        id: 'peg-11-9-2',
        afirmacao: 'O princípio da capacidade de resposta (responsiveness), consagrado no Decreto nº 9.203/2017, exige que os órgãos públicos adaptem suas entregas e serviços com celeridade às necessidades da sociedade.',
        gabarito: 'C',
        porQue: 'Correto! A capacidade de resposta é princípio expresso no art. 3º, I, do Decreto nº 9.203/2017.',
      },
      {
        id: 'peg-11-9-3',
        afirmacao: 'A segunda linha de defesa na governança é constituída exclusivamente pelos órgãos de controle externo, como o TCU e o Congresso Nacional.',
        gabarito: 'E',
        porQue: 'A segunda linha de defesa é INTERNA à organização, composta pelas áreas de conformidade (compliance), gestão de riscos e assessorias jurídicas de controle interno. O TCU atua no controle externo.',
      },
    ],
  },
};
