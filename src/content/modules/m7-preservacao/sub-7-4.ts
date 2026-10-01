import type { ModuloFilho } from '../../../domain/types';

export const submodulo74: ModuloFilho = {
  id: 'sub-7-4',
  numero: '7.4',
  titulo: 'Intervenções Curativas e Restauração de Documentos Gráficos',
  descricaoCurta: 'Princípios éticos da restauração (reversibilidade, mínima intervenção e distinguibilidade), testes de solubilidade de tintas, desacidificação, remendos com papel japonês, adesivos estáveis (amido e metilcelulose) e encadernação de conservação.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Cesare Brandi', 'Paul Philippot', 'Antônio Celso Ramos Spinelli', 'Norma Cassares'],
  alertasCebraspe: [
    'O princípio supremo e inegociável da restauração moderna é a REVERSIBILIDADE: qualquer tratamento, adesivo ou reforço aplicado ao documento histórico deve poder ser desfeito a qualquer tempo no futuro sem causar o menor dano ao suporte original.',
    'Princípio da Mínima Intervenção: o restaurador deve intervir apenas o estritamente necessário para garantir a estabilidade física e a legibilidade do texto, sem tentar "embelezar" o documento, criar falsificações históricas ou apagar os traços genuínos de sua história material.',
    'Testes de solubilidade de tintas: antes de qualquer banho de lavagem ou desacidificação aquosa, é OBRIGATÓRIO testar a solubilidade de cada tinta, carimbo ou manuscrito presente na folha com microgotas de água e solventes.',
    'Adesivos e papéis de restauração: utilizam-se exclusivamente colas reversíveis à base de amido de trigo purificado ou metilcelulose e reforços de PAPEL JAPONÊS (fibras longas de Kozo/Gampi, pH neutro e alta translucidez). Colas sintéticas irreversíveis são terminantemente vedadas.',
    'Encadernação de conservação: deve permitir a abertura plana e confortável do livro sem forçar o papel fragilizado, priorizando costuras flexíveis sobre fitas de linho ou cadarço.',
  ],
  quadroComparativo: {
    titulo: 'Os Quatro Princípios Éticos Fundamentais da Restauração de Documentos',
    colunas: ['Princípio Ético', 'Definição e Exigência Teórica', 'Aplicação Prática no Laboratório', 'Erro Frequente em Concursos'],
    linhas: [
      ['Reversibilidade', 'Todo material ou adesivo empregado na restauração deve ser passível de remoção futura sem prejuízo ao original', 'Uso estrito de colas solúveis em água (amido/metilcelulose) e papéis japoneses finos', 'Emprego de colas sintéticas insolúveis (resinas epóxi, superbonder ou PVA industrial).'],
      ['Mínima Intervenção', 'Intervir apenas onde houver risco iminente de perda de matéria ou perda de legibilidade estrutural', 'Não preencher margens sadias; limitar o enxerto às áreas com perda de suporte (furos de broca)', 'Tentar fazer o livro parecer "novo de fábrica" através de refilamento ou lixamento de cortes.'],
      ['Distinguibilidade', 'A intervenção restauradora deve ser harmoniosa, mas identificável sob olhar técnico atento', 'O papel japonês do remendo possui textura levemente distinta da folha original', 'Falsificar tipografia ou tentar camuflar totalmente a intervenção enganando o leitor.'],
      ['Autenticidade Histórica', 'Respeito absoluto à passagem do tempo e aos testemunhos materiais e culturais da obra', 'Preservação de anotações marginais de posse, carimbos históricos e encadernações primitivas', 'Remover anotações de época de parlamentares ou autores por considerá-las "rabiscos".'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Teoria da Restauração e a Ética Internacional

A restauração de bens culturais e acervos bibliográficos apoia-se nos alicerces filosóficos de **Cesare Brandi** (*Teoria da Restauração*, 1963) e nas convenções internacionais da UNESCO e do ICOMOS (Carta de Veneza de 1964):
> *"A restauração constitui o momento metodológico de reconhecimento da obra de arte ou documento histórico na sua consistência física e na sua dupla polaridade estética e histórica, com vistas à sua transmissão para o futuro."*

#### Os Princípios Deontológicos Inegociáveis:
1. **Reversibilidade:**  
   Todo procedimento, adesivo, substância química ou elemento de suporte incorporado na restauração deve poder ser desfeito a qualquer momento pelas futuras gerações, caso surjam tecnologias superiores, sem agredir o documento original.
2. **Mínima Intervenção:**  
   Não se restaura para deixar o documento "bonito" ou com aspecto de novo. O foco é estancar perdas e devolver estabilidade físico-mecânica.
3. **Distinguibilidade (Legibilidade da Intervenção):**  
   O reparo não deve se constituir em falsificação histórica (*pastiche*). Sob exame aproximado, o técnico deve conseguir distinguir com clareza o que é o documento original e o que é o acréscimo restaurador contemporâneo.
4. **Compatibilidade dos Materiais:**  
   Os materiais introduzidos devem possuir coeficientes físico-químicos harmoniosos com o original (não podem ser mais rígidos nem mais ácidos que o papel antigo).

---

### 2. O Processo Laboratorial de Restauração em Papel

O fluxo técnico de tratamento em laboratório de restauração de obras raras segue etapas rigorosas (Spinelli, 2003; Beck, 1995):

1. **Exame Organoléptico e Diagnóstico:**
   * Análise do estado de conservação, mapeamento de rasgos, galerias de insetos, acidez e perdas de suporte, registrado na **Ficha de Diagnóstico e Tratamento**.
2. **Testes de Solubilidade das Tintas:**
   * Teste com microgotas de água destilada, álcool e outros solventes sobre manuscritos, assinaturas e carimbos sob lupa estereoscópica. Se a tinta sangrar ou soltar pigmento, é expressamente vetado qualquer banho de lavagem aquosa sem prévia fixação temporária (ex.: com ciclododecano ou Paraloid B-72).
3. **Desacidificação e Lavagem:**
   * Banho de lavagem em água destilada e neutralização da acidez livre mediante soluções alcalinas de **hidróxido ou bicarbonato de cálcio ou magnésio**.
   * O objetivo é elevar o pH do papel para a faixa neutra (em torno de 7,0 a 7,5) e depositar uma **reserva alcalina** que atue como barreira contra ácidos futuros.
4. **Remendos, Reforços e Enxertos:**
   * **O Papel Japonês (*Washi*):** Confeccionado artesanalmente a partir de cascas de arbustos orientais (*Kozo*, *Mitsumata*, *Gampi*). Possui fibras extremamente longas, pH neutro, sem lignina e com gramaturas ultrafinas (de 5 a 20 g/m²). Quando umedecido com cola reversível, suas fibras fundem-se perfeitamente ao papel rasgado, proporcionando resistência mecânica excepcional com quase invisibilidade ótica.
   * **Adesivos Naturais Reversíveis:**
     * *Cola de Amido de Trigo Purificado (*Wheat Starch Paste*):* Excelente poder de adesão, pH neutro e solubilidade total em água.
     * *Metilcelulose:* Polímero semi-sintético inerte, resistente a ataques biológicos (fungos e traças não o digerem) e facilmente reversível.
5. **Reintegração Mecânica de Suporte (*Leafcasting*):**
   * Em páginas perfuradas por centenas de galerias de brocas, utiliza-se a máquina de obturação de papel (*leafcaster*): uma suspensão aquosa de polpa de algodão é succionada por vácuo através da folha danificada, preenchendo automaticamente apenas as lacunas vazias com fibras novas sem recobrir o texto.

---

### 3. A Encadernação de Conservação

* Diferencia-se radicalmente da encadernação comercial comum (que frequentemente guilhotina as margens históricas das folhas e passa colas plásticas irreversíveis na lombada).
* **Características da Encadernação de Conservação:**
  * Não apara nem refila as bordas das páginas com guilhotina (preserva marcas d'água e barbas do papel);
  * Costura manual com fio de linho cru não alvejado sobre suportes flexíveis (tiras de pergaminho ou cadarços de linho);
  * Uso de folhas de guarda em papel permanente livre de ácido;
  * Permite que o volume se abra suavemente em ângulo de 180° sem sofrer tensão mecânica na lombada.`,
  checkpoints: [
    {
      id: 'cp-7-4-1',
      pergunta: 'Micro-Checkpoint 1: Princípio da Reversibilidade',
      item: 'No âmbito da restauração de documentos gráficos e livros raros, o princípio da reversibilidade estabelece que qualquer substância, adesivo ou reforço introduzido no suporte documental deve poder ser desfeito a qualquer tempo sem provocar novas deteriorações à obra original.',
      gabarito: 'C',
      justificativa: 'Correto! A reversibilidade é o mandamento ético fundamental da moderna ciência da conservação e restauração.',
    },
    {
      id: 'cp-7-4-2',
      pergunta: 'Micro-Checkpoint 2: Materiais para Reparo de Rasgos',
      item: 'Para a consolidação de rasgos e preenchimento de perdas de suporte em manuscritos históricos, a prática laboratorial correta prescreve o uso de papel celofane com adesivo de contato instantâneo (cianoacrilato), devido à sua secagem rápida e alta transparência.',
      gabarito: 'E',
      justificativa: 'Errado! Cianoacrilato (superbonder) e celofane são totalmente proibidos e destrutivos. Utilizam-se exclusivamente papéis japoneses de fibras longas (Kozo/Gampi) e colas naturais reversíveis de amido ou metilcelulose.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-4-1',
        periodo: '1963 / 1964',
        disciplina: 'Teoria da Restauração',
        focoPrincipal: 'Publicação da Teoria da Restauração de Cesare Brandi e homologação da Carta de Veneza',
        figuraChave: 'Cesare Brandi e Paul Philippot',
      },
      {
        id: 'tl-7-4-2',
        periodo: '1966',
        disciplina: 'A Inundação de Florença',
        focoPrincipal: 'Marco histórico de cooperação internacional que refinou as técnicas de restauração e encadernação de conservação',
        figuraChave: 'Restauradores Internacionais',
      },
    ],
    autores: [
      {
        id: 'aut-7-4-1',
        nome: 'Cesare Brandi',
        ano: 1963,
        obraPrincipal: 'Teoria da Restauração',
        ideiaChave: 'Bases teóricas da restauração: reversibilidade, distinguibilidade, mínima intervenção e valor histórico.',
        chipPegadinha: 'A restauração nunca deve criar um falso histórico nem falsificar a passagem do tempo.',
      },
      {
        id: 'aut-7-4-2',
        nome: 'Antônio Celso Ramos Spinelli',
        ano: 2003,
        obraPrincipal: 'Cadernos de Conservação e Restauração',
        ideiaChave: 'Sistematização dos testes de solubilidade, lavagem, desacidificação e uso de papel japonês no Brasil.',
        chipPegadinha: 'Antes de qualquer banho úmido, é obrigatório o teste de gota em todas as tintas.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-7-4-1',
        afirmacao: 'Na restauração de um livro raro do século XVIII, o procedimento correto de encadernação exige que suas margens laterais sejam aparadas por guilhotina mecânica para nivelar o corte e torná-lo uniforme.',
        gabarito: 'E',
        porQue: 'Refilar ou guilhotinar margens históricas destrói anotações marginais, barbas de papel e marcas d\'água originais, constituindo mutilação patrimonial inaceitável.',
      },
      {
        id: 'peg-7-4-2',
        afirmacao: 'A realização de banhos de desacidificação aquosa em folhas de livros antigos prescinde da realização prévia de testes de solubilidade em tintas e carimbos.',
        gabarito: 'E',
        porQue: 'O teste de solubilidade de tintas é obrigatório antes de qualquer contato com água; do contrário, tintas ferrogálicas ou anilinas podem dissolver-se e apagar o texto para sempre.',
      },
    ],
  },
};
