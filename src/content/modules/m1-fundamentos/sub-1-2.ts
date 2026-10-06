import type { ModuloFilho } from '../../../domain/types';

export const submodulo12: ModuloFilho = {
  id: 'sub-1-2',
  numero: '1.2',
  titulo: 'As Cinco Leis de Ranganathan e Releituras Contemporâneas',
  titulo_curto: 'Cinco Leis de Ranganathan',
  descricaoCurta: 'O tratado de Shiyali Ramamrita Ranganathan (1931), análise sistêmica de cada lei, implicações em bibliotecas legislativas e as formulações de Michael Gorman, Jim Thompson e Rettig.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Shiyali Ramamrita Ranganathan', 'Michael Gorman', 'James Rettig', 'Jim Thompson', 'Alire'],
  alertasCebraspe: [
    'A 1ª Lei ("Livros são para usar") ataca a preservação estéril e exige políticas ativas de circulação, localização acessível e horários estendidos.',
    'Atenção à 2ª Lei ("A cada leitor o seu livro") vs 3ª Lei ("A cada livro o seu leitor"): a 2ª parte do usuário e exige democratização/inclusão; a 3ª parte do item documental e exige técnicas de divulgação, estantes abertas e catalogação analítica.',
    'A 4ª Lei ("Poupe o tempo do leitor") fundamenta a eficiência dos sistemas de busca, indexação precisa, sinalização predial e automação.',
    'A 5ª Lei ("A biblioteca é um organismo em crescimento") rege o planejamento dinâmico do espaço físico, tecnológico, orçamentário e de pessoal.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Analítico das Cinco Leis e Releituras na Era Digital',
    colunas: ['Lei Clássica (Ranganathan, 1931)', 'Foco Primário', 'Releitura Contemporânea (Gorman, 1995)', 'Impacto na Câmara dos Deputados'],
    linhas: [
      ['1ª: Os livros são para usar', 'Acesso e Usabilidade', 'As bibliotecas servem à humanidade em todas as mídias', 'Garantir que a documentação legislativa e doutrinária esteja imediatamente utilizável pelos parlamentares'],
      ['2ª: A todo leitor seu livro', 'Democratização / Usuário', 'Respeite todas as formas pelas quais o conhecimento é comunicado', 'Atendimento personalizado aos assessores, comissões temáticas e cidadãos'],
      ['3ª: A todo livro seu leitor', 'Disseminação / Documento', 'Use a tecnologia de modo inteligente para aprimorar o serviço', 'DSI (Disseminação Seletiva de Informações), portais temáticos e visibilidade da produção parlamentar'],
      ['4ª: Poupe o tempo do leitor', 'Velocidade e Eficiência', 'Proteja o livre acesso ao conhecimento em tempo hábil', 'Bases de busca ultrarrápidas, tesauros legislativos consolidados e recuperação sem ruído'],
      ['5ª: A biblioteca é um organismo em crescimento', 'Adaptação e Futuro', 'Honre o passado e crie o futuro continuamente', 'Expansão constante para repositórios digitais, IA aplicada e preservação digital contínua'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Filosofia das Cinco Leis de Shiyali Ramamrita Ranganathan (1931)

Publicada em 1931, a obra *The Five Laws of Library Science* (disponível integralmente em nosso repositório \`Fundamentos/pdf-as-cinco-leis-da-biblioteconomi-ranganathanpdf_compress.pdf\`) é a mais perfeita e duradoura síntese normativa da história da Biblioteconomia. Ranganathan, matemático indiano e bibliotecário, estruturou uma teoria axiológica dedutiva:

#### 1ª Lei: Os livros são para usar (*Books are for use*)
* **Ruptura de Paradigma:** Rompe violentamente com o antigo modelo medieval e patrimonialista onde o livro ficava acorrentado e a conservação era o fim supremo.
* **Diretriz Prática:** O objetivo último de uma unidade de informação é o **uso**. A preservação existe para viabilizar o uso futuro, e não para obstruir o acesso.
* **Desdobramentos:** Localização geográfica da biblioteca, horários ampliados de funcionamento, mobiliário confortável, iluminação adequada e simplificação das regras de empréstimo.

#### 2ª Lei: A todo leitor seu livro (*Every reader his or her book*)
* **Foco no Usuário e Inclusão Social:** Toda pessoa tem direito ao acesso ao conhecimento registrado, sem distinção de classe, raça, credo ou condição física.
* **Obrigações:**
  1. *Do Estado:* Financiar bibliotecas públicas e legislativas mantendo acervos representativos.
  2. *Do Bibliotecário:* Conhecer a fundo a comunidade de usuários e praticar a mediação ativa.
  3. *Do Leitor:* Respeitar o patrimônio comum.

#### 3ª Lei: A todo livro seu leitor (*Every book its reader*)
* **Foco no Documento:** Para cada item existente no acervo existe um público em potencial. A tarefa é dar visibilidade a ele para que encontre seu destinatário.
* **Mecanismos de Concretização:** Sistema de **livre acesso às estantes** (*open shelves*), arranjo temático intuitivo, catalogação de títulos e assuntos pormenorizada, exposições bibliográficas e serviços de **Disseminação Seletiva da Informação (DSI)**.

#### 4ª Lei: Poupe o tempo do leitor (*Save the time of the reader*)
* **Eficiência e Produtividade:** O tempo do usuário é um recurso escasso e valioso.
* **Mecanismos:** Catálogos rápidos, sistemas de indexação precisos que evitem revocação excessiva ou silêncio documental, processos ágeis de referência, sinalização predial clara e automação dos fluxos de trabalho.

#### 5ª Lei: A biblioteca é um organismo em crescimento (*A library is a growing organism*)
* **Natureza Biológica da Instituição:** A biblioteca nunca atinge um estado estático; ela cresce em tamanho material (acervo), em usuários, em pessoal e em complexidade tecnológica.
* **Requisitos:** Planejamento flexível da infraestrutura física, desbaste (*weeding*) e descarte criterioso para manter o acervo vitalizado, migração tecnológica e contínua capacitação dos recursos humanos.

---

### 2. As Releituras Contemporâneas para a Era Digital
Principais reformulações doutrinárias das leis desenvolvidas por teóricos modernos:

* **Michael Gorman (1995) — *Our Singular Strengths*:**
  1. *As bibliotecas servem à humanidade.*
  2. *Respeite todas as formas pelas quais o conhecimento é comunicado.*
  3. *Use a tecnologia inteligentemente para enriquecer os serviços.*
  4. *Proteja o livre acesso ao conhecimento.*
  5. *Honre o passado e crie o futuro.*
* **James Rettig e Jim Thompson:** Adaptaram os preceitos substituindo o termo *livro* por *informação* e *leitor* por *usuário*:
  1. A informação é para ser utilizada.
  2. A cada usuário sua informação.
  3. A cada informação seu usuário.
  4. Poupe o tempo do usuário e da equipe técnica.
  5. Os sistemas de informação são organismos dinâmicos em constante mutação.`,
  checkpoints: [
    {
      id: 'cp-1-2-1',
      pergunta: 'Micro-Checkpoint 1: Foco da Segunda vs Terceira Lei',
      item: "A segunda lei de Ranganathan ('A cada leitor o seu livro') tem o documento bibliográfico como elemento central de sua formulação.",
      gabarito: 'E',
      justificativa: "Errado! A 2ª Lei parte do LEITOR (usuário) e exige democratização. A 3ª Lei ('A cada livro o seu leitor') é que parte do DOCUMENTO para garantir visibilidade.",
      versao_correta: "A terceira lei de Ranganathan ('A cada livro o seu leitor') tem o documento bibliográfico como elemento central de sua formulação, enquanto a segunda lei foca no leitor.",
    },
    {
      id: 'cp-1-2-2',
      pergunta: 'Micro-Checkpoint 2: Releituras Contemporâneas',
      item: "Na releitura das Cinco Leis para a era da informação, os termos clássicos 'livro' e 'leitor' foram reinterpretados respectivamente como 'informação' e 'usuário'.",
      gabarito: 'C',
      justificativa: "Certo! Formulações de teóricos contemporâneos como Rettig e Thompson realizaram essa transposição direta para o universo digital.",
    },
      {
      id: 'cp-1-2-3',
      pergunta: "Micro-Checkpoint 3: Implicações Práticas da Quarta Lei",
      item: "A Quarta Lei de Ranganathan ('Poupe o tempo do leitor') fundamenta prioritariamente a adoção de sistemas de estantes fechadas e o controle burocrático de acesso aos livros para evitar desordem física.",
      gabarito: 'E',
      justificativa: "Errado! A 4ª Lei exige exatamente o oposto: a implantação do livre acesso às estantes (open access), catálogos eficientes e arranjo lógico com guias para minimizar o tempo despendido pelo usuário na busca.",
      versao_correta: "A Quarta Lei de Ranganathan ('Poupe o tempo do leitor') fundamenta prioritariamente a adoção de livre acesso às estantes, catálogos eficientes e sinalização clara para agilizar a consulta.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-2-1',
        periodo: '1931',
        disciplina: 'Biblioteconomia Axiológica',
        focoPrincipal: 'As Cinco Leis dedutivas: Uso, Leitor, Livro, Tempo e Organismo vivo',
        figuraChave: 'Shiyali Ramamrita Ranganathan',
      },
      {
        id: 'tl-1-2-2',
        periodo: '1995',
        disciplina: 'Releitura Humanista',
        focoPrincipal: 'Our Singular Strengths: bibliotecas a serviço da humanidade e mídias plurais',
        figuraChave: 'Michael Gorman',
      },
      {
        id: 'tl-1-2-3',
        periodo: 'Anos 1990 / 2000',
        disciplina: 'Releitura Informacional Digital',
        focoPrincipal: 'Transposição conceitual direta: Livro -> Informação / Leitor -> Usuário',
        figuraChave: 'James Rettig e Jim Thompson',
      },
    ],
    autores: [
      {
        id: 'aut-1-2-1',
        nome: 'S. R. Ranganathan',
        ano: 1931,
        obraPrincipal: 'The Five Laws of Library Science',
        ideiaChave: 'Teoria axiológica dedutiva que rege o ciclo de vida da biblioteca.',
        chipPegadinha: '2ª Lei foca no LEITOR (inclusão); 3ª Lei foca no LIVRO (estantes abertas/DSI).',
      },
      {
        id: 'aut-1-2-2',
        nome: 'Michael Gorman',
        ano: 1995,
        obraPrincipal: 'Our Singular Strengths',
        ideiaChave: 'Releitura das cinco leis sob a ótica dos novos suportes e da preservação contínua.',
        chipPegadinha: 'Afirma que as bibliotecas servem à humanidade em todas as suas mídias.',
      },
      {
        id: 'aut-1-2-3',
        nome: 'James Rettig & Jim Thompson',
        ano: 1992,
        obraPrincipal: 'Releituras para Sistemas Digitais',
        ideiaChave: 'Adaptação do vocabulário ranganathaniano para informação e usuário.',
        chipPegadinha: 'Poupe o tempo do usuário e da equipe técnica.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-2-1',
        afirmacao: 'A segunda lei de Ranganathan preconiza o livre acesso às estantes como técnica primordial para que o documento encontre leitores interessados.',
        gabarito: 'E',
        porQue: 'A técnica de livre acesso às estantes (open shelves) e a DSI decorrem diretamente da TERCEIRA LEI (A todo livro seu leitor). A 2ª Lei parte do usuário e da inclusão.',
      },
      {
        id: 'peg-1-2-2',
        afirmacao: 'O princípio de que a preservação física do acervo deve sobrepor-se ao seu uso imediato encontra esteio direto na primeira lei de Ranganathan.',
        gabarito: 'E',
        porQue: 'A 1ª Lei ("Livros são para usar") estabelece exatamente o oposto: a preservação só tem razão de ser para viabilizar o uso, rompendo com o paradigma patrimonialista puro.',
      },
    ],
  },
};
