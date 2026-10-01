import type { ModuloFilho } from '../../../domain/types';

export const submodulo51: ModuloFilho = {
  id: 'sub-5-1',
  numero: '5.1',
  titulo: 'Planejamento de Bibliotecas, Avaliação de Serviços e Indicadores de Desempenho',
  descricaoCurta: 'Planejamento estratégico, tático e operacional em unidades de informação, diagnóstico organizacional, matriz SWOT, avaliação de insumos, processos e produtos, e indicadores de desempenho (Lancaster, Almeida, Maciel).',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Maria Christina Barbosa de Almeida', 'F. W. Lancaster', 'Alba Costa Maciel', 'Amélia Silveira', 'Peter Drucker'],
  alertasCebraspe: [
    'O Cebraspe adora afirmar que o planejamento estratégico é de competência exclusiva da alta administração da instituição mantenedora e que o bibliotecário cuida apenas do nível operacional: ERRADO! O bibliotecário lidera o planejamento da unidade em todos os níveis.',
    'Cuidado com a confusão entre eficiência (relação insumo/custo e produtividade) e eficácia (grau de atendimento aos objetivos e satisfação do usuário). Lancaster pontua que um serviço pode ser altamente eficiente gastando pouco, mas completamente ineficaz por não satisfazer os usuários.',
    'A missão da biblioteca não decorre apenas de seus produtos imediatos; ela expressa a razão de ser social e o alinhamento com a missão da instituição maior à qual está vinculada.',
    'O planejamento não é um evento episódico ou estático realizado apenas em momentos de crise, mas um processo dinâmico, contínuo, participativo e proativo.',
  ],
  quadroComparativo: {
    titulo: 'Níveis de Planejamento em Unidades de Informação',
    colunas: ['Critério', 'Planejamento Estratégico', 'Planejamento Tático', 'Planejamento Operacional'],
    linhas: [
      ['Horizonte Temporal', 'Longo prazo (3 a 5 anos ou mais)', 'Médio prazo (1 a 2 anos)', 'Curto prazo (diário, semanal, mensal)'],
      ['Abrangência', 'Institucional, macro-orientado, sistêmico', 'Departamental / Setorial (seções da biblioteca)', 'Específico / Tarefas e procedimentos detalhados'],
      ['Conteúdo Principal', 'Missão, visão, valores, análise SWOT e diretrizes gerais', 'Programas, alocação de recursos e projetos setoriais', 'Planos de ação, rotinas, cronogramas, metas quantificadas'],
      ['Atuação do Bibliotecário', 'Líder estratégico junto à direção e stakeholders', 'Coordenador de processos e setores técnicos/atendimento', 'Supervisor e executor direto de rotinas procedimentais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos e Filosofia do Planejamento Bibliotecário

O planejamento em unidades de informação deixou de ser mero instrumento burocrático de previsão orçamentária e converteu-se em **ferramenta de gestão estratégica essencial** para a sobrevivência e relevância social das bibliotecas modernas (Almeida, 2005; Maciel & Mendonça, 2000).

#### A. Conceito e Finalidades do Planejamento
Conforme Maria Christina Barbosa de Almeida (*Planejamento de Bibliotecas e Serviços de Informação*, obra canônica de nosso acervo), o planejamento é um **processo contínuo, dinâmico e flexível** de tomada de decisões racionais sobre o futuro da unidade de informação:
* **Proatividade vs. Reatividade:** O planejamento visa antecipar mudanças ambientais, tecnológicas e de demandas informacionais, em vez de apenas reagir passivamente às crises.
* **Alinhamento Institucional:** Uma biblioteca parlamentar ou universitária não possui autonomia dissociada da instituição mantenedora. Seus objetivos e metas devem refletir diretamente as diretrizes da entidade matriz (na Câmara dos Deputados, subsidiar o processo legislativo e a transparência pública).
* **Diagnóstico da Situação Atual:** Antes de formular planos futuros, é indispensável a realização de um diagnóstico exaustivo da realidade da unidade (recursos humanos, acervo, tecnologia, infraestrutura e estudo de necessidades dos usuários).

---

#### B. As Três Dimensões do Planejamento
1. **Planejamento Estratégico:**
   * Foco no longo prazo e na relação da biblioteca com o ambiente externo.
   * Define a **Missão** (razão de existir da biblioteca, seu papel social), a **Visão** (onde a instituição deseja chegar) e os **Valores**.
   * Utiliza metodologias como a **Análise SWOT / FOFA** (Forças e Fraquezas no ambiente interno; Oportunidades e Ameaças no ambiente externo).
2. **Planejamento Tático:**
   * Traduz as diretrizes estratégicas em planos concretos para cada grande área funcional (desenvolvimento de coleções, processamento técnico, referência, TI).
   * Médio prazo, integrando recursos humanos, financeiros e materiais.
3. **Planejamento Operacional:**
   * Micro-orientado, detalhado e voltado para o curto prazo.
   * Formaliza manuais de rotinas e procedimentos, fluxogramas, cronogramas de execução e metas quantitativas imediatas.

---

### 2. Avaliação de Serviços e Indicadores de Desempenho (F. W. Lancaster)

A avaliação não é o fim do processo gerencial, mas um elo permanente de retroalimentação (*feedback*) que viabiliza o controle e a melhoria contínua dos serviços.

#### A. A Tríade Canônica de F. W. Lancaster (1996)
No clássico *Avaliação de Serviços de Bibliotecas*, Lancaster divide a avaliação em três dimensões cruciais:
* **Custos:** Os insumos e recursos financeiros, humanos e materiais consumidos na prestação do serviço.
* **Eficácia (*Effectiveness*):** Mede em que proporção o serviço ou produto alcança seus objetivos declarados e atende às necessidades e expectativas dos usuários.
* **Benefício (*Benefit*):** O impacto positivo real (social, educacional, acadêmico ou legislativo) propiciado pela informação obtida pelo usuário.

> **⚠️ Alerta Cebraspe — Custo-Eficácia vs. Custo-Benefício:**  
> * **Custo-Eficácia:** Avalia a relação entre o custo investido e a qualidade/volume do produto gerado (ex.: custo por consulta respondida com exatidão).  
> * **Custo-Benefício:** Tenta mensurar o retorno de valor (muitas vezes intangível) obtido em relação ao custo econômico aplicado.

#### B. Medidas de Avaliação: Insumos, Processos e Produtos
* **Medidas de Insumo (*Inputs*):** Recursos alocados (orçamento, número de funcionários, área física, títulos adquiridos).
* **Medidas de Processo (*Throughput*):** Produtividade interna (tempo médio de catalogação, taxa de processamento físico).
* **Medidas de Produto / Saída (*Outputs*):** Itens circulados, buscas realizadas, usuários atendidos, downloads de artigos.
* **Medidas de Resultado / Impacto (*Outcomes*):** Satisfação do usuário, sucesso na pesquisa parlamentar, economia de tempo dos assessores.`,
  checkpoints: [
    {
      id: 'cp-5-1-1',
      pergunta: 'Micro-Checkpoint 1: Níveis de Planejamento em Unidades de Informação',
      item: 'O planejamento estratégico de uma biblioteca é uma prerrogativa exclusiva dos níveis de direção da organização mantenedora, cabendo à equipe de bibliotecários atuar restritamente no planejamento operacional e na execução de rotinas.',
      gabarito: 'E',
      justificativa: 'Errado! O bibliotecário deve atuar como gestor e líder estratégico da unidade de informação, participando ativamente da formulação estratégica, tática e operacional da biblioteca.',
    },
    {
      id: 'cp-5-1-2',
      pergunta: 'Micro-Checkpoint 2: Eficiência e Eficácia segundo Lancaster',
      item: 'Na avaliação de serviços de informação segundo Lancaster, a eficácia está relacionada ao nível de alcance das metas e à satisfação das necessidades informacionais dos usuários, ao passo que a eficiência foca na otimização de recursos e custos aplicados.',
      gabarito: 'C',
      justificativa: 'Correto! Eficácia foca nos fins e no atendimento ao usuário; eficiência foca nos meios e na economia de recursos/processos.',
    },
      {
      id: 'cp-5-1-3',
      pergunta: "Micro-Checkpoint 3: Matriz SWOT em Bibliotecas",
      item: "Na análise estratégica SWOT (FOFA) aplicada à gestão bibliotecária, a obsolescência tecnológica dos servidores locais e o corte orçamentário institucional constituem fraquezas intrínsecas da unidade de informação.",
      gabarito: 'E',
      justificativa: "Errado! A obsolescência interna dos equipamentos é de fato uma 'fraqueza' (fator interno), mas o corte orçamentário decorrente do ambiente externo governamental ou institucional é categorizado como 'ameaça' (fator externo).",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-1-1',
        periodo: 'Década de 1970-1980',
        disciplina: 'Administração de Bibliotecas',
        focoPrincipal: 'Transição da gestão patrimonial e mecanicista para o planejamento formal de serviços',
        figuraChave: 'Maria Christina Barbosa de Almeida e Alba Maciel',
      },
      {
        id: 'tl-5-1-2',
        periodo: '1988 / 1996',
        disciplina: 'Avaliação de Bibliotecas',
        focoPrincipal: 'Sistematização da avaliação de custo-eficácia, insumos, produtos e benefícios',
        figuraChave: 'F. W. Lancaster',
      },
    ],
    autores: [
      {
        id: 'aut-5-1-1',
        nome: 'Maria Christina Barbosa de Almeida',
        ano: 2005,
        obraPrincipal: 'Planejamento de bibliotecas e serviços de informação',
        ideiaChave: 'Processo dinâmico, participativo e proativo articulado aos níveis estratégico, tático e operacional.',
        chipPegadinha: 'Planejamento não é estático nem exclusivo da alta direção.',
      },
      {
        id: 'aut-5-1-2',
        nome: 'F. W. Lancaster',
        ano: 1996,
        obraPrincipal: 'Avaliação de serviços de bibliotecas',
        ideiaChave: 'Tríade de custos, eficácia e benefícios; indicadores de insumos, processos e produtos.',
        chipPegadinha: 'Eficiência não garante eficácia: baixo custo pode coexistir com insatisfação total.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-1-1',
        afirmacao: 'O planejamento bibliotecário caracteriza-se como processo esporádico, elaborado prioritariamente em situações de crise organizacional.',
        gabarito: 'E',
        porQue: 'O planejamento é um processo contínuo, dinâmico e preventivo/proativo, não uma medida emergencial episódica.',
      },
      {
        id: 'peg-5-1-2',
        afirmacao: 'A missão de uma unidade de informação deve ser definida exclusivamente com base nos produtos físicos que ela produz no presente.',
        gabarito: 'E',
        porQue: 'A missão declara a função e razão social da biblioteca e seu papel estratégico articulado aos objetivos da instituição mantenedora.',
      },
    ],
  },
};
