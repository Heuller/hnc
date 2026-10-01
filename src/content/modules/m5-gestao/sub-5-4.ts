import type { ModuloFilho } from '../../../domain/types';

export const submodulo54: ModuloFilho = {
  id: 'sub-5-4',
  numero: '5.4',
  titulo: 'Gestão da Informação e Gestão do Conhecimento Organizacional',
  descricaoCurta: 'Distinção epistemológica entre Gestão da Informação e Gestão do Conhecimento, modelo da Organização do Conhecimento de Chun Wei Choo, Espiral do Conhecimento SECI de Nonaka e Takeuchi, e ecologia da informação de Davenport.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Chun Wei Choo', 'Ikujiro Nonaka', 'Hirotaka Takeuchi', 'Thomas H. Davenport', 'Laurence Prusak'],
  alertasCebraspe: [
    'O Cebraspe adora trocar a Gestão da Informação pela Gestão do Conhecimento: a Gestão da Informação cuida dos fluxos formais, do conhecimento explícito e de suportes documentais/tecnológicos; a Gestão do Conhecimento cuida do capital intelectual, dos fluxos informais e do conhecimento tácito residente nas pessoas.',
    'Atenção máxima aos 4 modos de conversão do modelo SECI de Nonaka & Takeuchi: Socialização (tácito para tácito via observação e convívio), Externalização (tácito para explícito via metáforas, conceitos e fluxogramas), Combinação (explícito para explícito via agregação de relatórios e bases), e Internalização (explícito para tácito via aprender fazendo e vivência prática).',
    'Conhecimento tácito não pode ser armazenado diretamente em bancos de dados ou livros digitais; para ser armazenado em sistemas computacionais, ele precisa ser primeiramente articulado e transformado em conhecimento explícito.',
    'Chun Wei Choo estabelece que a organização do conhecimento compreende três arenas articuladas: Construção de Sentido (Sense Making), Criação do Conhecimento e Tomada de Decisão.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa: Gestão da Informação vs. Gestão do Conhecimento',
    colunas: ['Critério', 'Gestão da Informação (GI)', 'Gestão do Conhecimento (GC)'],
    linhas: [
      ['Objeto Central', 'Dados e informações estruturadas (conhecimento explícito)', 'Experiências, intuições, modelos mentais e competências (conhecimento tácito)'],
      ['Enfoque Primário', 'Processos técnicos, fluxos formais, repositórios e sistemas de TI', 'Pessoas, cultura organizacional, colaboração e redes informais'],
      ['Natureza do Fluxo', 'Fluxos verticais, padronizados e documentados', 'Fluxos horizontais, espontâneos, espiralados e interativos'],
      ['Resultado Esperado', 'Disponibilidade, organização, integridade e recuperação da informação', 'Inovação, geração de novos saberes, tomada de decisão estratégica e aprendizado organizacional'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Fronteira entre Informação e Conhecimento

A Ciência da Informação contemporânea estabelece uma clara distinção conceitual e prática entre a **Gestão da Informação (GI)** e a **Gestão do Conhecimento (GC)** (Choo, 2003; Davenport & Prusak, 1998, obras seminais do nosso acervo):

* **Gestão da Informação (GI):**
  * Foco nos **documentos registrados** e no **conhecimento explícito**.
  * Cuida do ciclo documental: identificação de necessidades, aquisição/coleta, organização temática e descritiva, armazenamento seguro, recuperação e disseminação.
  * Opera predominantemente sobre os **fluxos formais** de informação nas organizações.
* **Gestão do Conhecimento (GC):**
  * Foco no **capital intelectual**, no **conhecimento tácito** e nas pessoas que compõem a instituição.
  * Visa criar um ambiente cultural que favoreça o compartilhamento de saberes, a colaboração em equipes multidisciplinares e a inovação.
  * Mobiliza os **fluxos informais** (as "conversas de corredor", comunidades de prática e redes sociais corporativas).

---

### 2. A Espiral do Conhecimento (Modelo SECI) de Nonaka e Takeuchi (1995)

Um dos modelos mais cobrados pelo Cebraspe em provas para tribunais e legislativo é a espiral de criação do conhecimento organizacional desenvolvida por **Ikujiro Nonaka e Hirotaka Takeuchi** (*Criação de Conhecimento na Empresa*):

O conhecimento transita dinamicamente entre duas dimensões ontológicas (indivíduo, grupo, organização) e epistemológicas (tácito e explícito) em **quatro modos de conversão (SECI)**:

1. **Socialização ($Tácito \rightarrow Tácito$):**
   * Compartilhamento de experiências diretas, intuições e habilidades sem necessidade de linguagem formalizada.
   * *Exemplo em biblioteca:* Um bibliotecário novato acompanha um veterano no balcão de referência, aprendendo a postura e a sensibilidade na condução da entrevista por imitação e prática conjunta.
2. **Externalização ($Tácito \rightarrow Explícito$):**
   * Conversão do conhecimento tácito em conceitos explícitos por meio do uso de **metáforas, analogias, conceitos, hipóteses ou modelos conceituais/visuais**.
   * *Exemplo em biblioteca:* A equipe de referência se reúne em oficina e redige o *Manual de Atendimento ao Usuário*, transformando suas vivências práticas em fluxogramas claros.
3. **Combinação ($Explícito \rightarrow Explícito$):**
   * Articulação, integração e reconfiguração de diferentes corpos de conhecimentos explícitos já existentes.
   * *Exemplo em biblioteca:* Cruzar relatórios estatísticos de empréstimos do SIGB com relatórios de acessos ao portal web para gerar um dashboard gerencial de tendências de pesquisa.
4. **Internalização ($Explícito \rightarrow Tácito$):**
   * Absorção do conhecimento explícito pela vivência e prática individual, convertendo-o em novos modelos mentais e *know-how* internalizado (*learning by doing*).
   * *Exemplo em biblioteca:* O catalogador estuda exaustivamente as novas diretrizes do RDA e, após catalogar centenas de obras, passa a aplicar o modelo de forma intuitiva e automática.

---

### 3. A Organização do Conhecimento de Chun Wei Choo (2003)

Em sua obra clássica *A Organização do Conhecimento*, **Chun Wei Choo** integra informação e ação em três arenas vitais:

1. **Construção de Sentido (*Sense Making*):**
   * Baseada na teoria de Karl Weick. As organizações precisam interpretar as mudanças caóticas e ambíguas do ambiente externo, construindo significado compartilhado para orientar sua conduta.
2. **Criação de Conhecimento:**
   * Geração de novas ideias, competências e capacidades a partir da espiral SECI (Nonaka & Takeuchi), articulando conhecimento tácito, explícito e cultural.
3. **Tomada de Decisão:**
   * Baseada na racionalidade limitada de Herbert Simon. Processamento de informações alternativas para escolher cursos de ação que permitam resolver problemas e atingir metas institucionais.

---

### 4. A Ecologia da Informação de Thomas Davenport e Laurence Prusak

Davenport rejeita a visão tecnocêntrica da informação (a ilusão de que investir em hardware e servidores de ponta resolve a gestão). Ele propõe a **Ecologia da Informação**:
* A informação deve ser gerenciada considerando o **ambiente informacional completo**: pessoas, política informacional, cultura organizacional e comportamento no uso diário.
* A tecnologia é apenas um dos componentes da ecologia, devendo subordinar-se às necessidades dos indivíduos.`,
  checkpoints: [
    {
      id: 'cp-5-4-1',
      pergunta: 'Micro-Checkpoint 1: Modelo SECI de Nonaka e Takeuchi',
      item: 'No modelo SECI de conversão do conhecimento, a externalização é o modo pelo qual o conhecimento tácito é convertido em conceitos explícitos por meio de metáforas, modelos visuais e manuais formalizados.',
      gabarito: 'C',
      justificativa: 'Correto! Externalização é a passagem do tácito para o explícito, permitindo que intuições individuais sejam formalizadas e compartilhadas pela organização.',
    },
    {
      id: 'cp-5-4-2',
      pergunta: 'Micro-Checkpoint 2: Escopo da Gestão da Informação vs. do Conhecimento',
      item: 'A gestão da informação atua primordialmente na perspectiva do conhecimento tácito dos colaboradores, mapeando suas relações informais, enquanto a gestão do conhecimento restringe-se ao controle e armazenamento de suportes físicos de dados.',
      gabarito: 'E',
      justificativa: 'Errado! O item inverteu completamente os conceitos: a Gestão da Informação foca no conhecimento explícito e nos suportes registrados; a Gestão do Conhecimento foca no conhecimento tácito e no capital humano.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-4-1',
        periodo: '1995',
        disciplina: 'Gestão do Conhecimento',
        focoPrincipal: 'Criação do modelo SECI e da Espiral do Conhecimento Organizacional',
        figuraChave: 'Ikujiro Nonaka e Hirotaka Takeuchi',
      },
      {
        id: 'tl-5-4-2',
        periodo: '1997 / 1998',
        disciplina: 'Ecologia da Informação',
        focoPrincipal: 'Abordagem humanística e ecológica da informação contra o reducionismo da engenharia de TI',
        figuraChave: 'Thomas H. Davenport e Laurence Prusak',
      },
      {
        id: 'tl-5-4-3',
        periodo: '2003',
        disciplina: 'Ciência da Informação Organizacional',
        focoPrincipal: 'Modelo integrado: Construção de Sentido, Criação do Conhecimento e Tomada de Decisão',
        figuraChave: 'Chun Wei Choo',
      },
    ],
    autores: [
      {
        id: 'aut-5-4-1',
        nome: 'Ikujiro Nonaka e Hirotaka Takeuchi',
        ano: 1995,
        obraPrincipal: 'The Knowledge-Creating Company',
        ideiaChave: 'Espiral do Conhecimento (SECI): Socialização, Externalização, Combinação e Internalização.',
        chipPegadinha: 'Memorize: Externalização converte Tácito em Explícito; Combinação converte Explícito em Explícito.',
      },
      {
        id: 'aut-5-4-2',
        nome: 'Chun Wei Choo',
        ano: 2003,
        obraPrincipal: 'A organização do conhecimento',
        ideiaChave: 'A organização inteligente opera em três arenas: Construção de Sentido (Sense Making), Criação de Conhecimento e Decisão.',
        chipPegadinha: 'A construção de sentido antecede a tomada de decisão em ambientes com alta incerteza.',
      },
      {
        id: 'aut-5-4-3',
        nome: 'Thomas H. Davenport',
        ano: 1997,
        obraPrincipal: 'Ecologia da informação',
        ideiaChave: 'A gestão informacional envolve pessoas, política, cultura e comportamento, superando o tecnocentrismo.',
        chipPegadinha: 'Tecnologia sozinha não resolve gestão de conhecimento.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-4-1',
        afirmacao: 'O conhecimento tácito pode ser diretamente arquivado em bancos de dados digitais de uma biblioteca sem passar por qualquer processo de formalização ou explicitação.',
        gabarito: 'E',
        porQue: 'Conhecimento tácito reside exclusivamente na mente, intuição e práticas das pessoas. Para entrar em sistemas de TI, deve ser externalizado em linguagem explícita.',
      },
      {
        id: 'peg-5-4-2',
        afirmacao: 'A aplicação da gestão do conhecimento na biblioteconomia é restrita a organizações privadas com fins lucrativos.',
        gabarito: 'E',
        porQue: 'A gestão do conhecimento é amplamente aplicada a bibliotecas universitárias, órgãos públicos e casas legislativas para retenção de memória e inovação de serviços.',
      },
    ],
  },
};
