import type { ModuloFilho } from '../../../domain/types';

export const submodulo11: ModuloFilho = {
  id: 'sub-1-1',
  numero: '1.1',
  titulo: 'Biblioteconomia, Documentação e Ciência da Informação: objeto, fronteiras e evolução histórica',
  titulo_curto: 'Biblioteconomia, Documentação e CI',
  descricaoCurta: 'Gênese disciplinar, Paul Otlet e o Tratado de Documentação, Harold Borko e a emergência da CI pós-guerra, interdisciplinaridade e as divisões de Le Coadic.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Paul Otlet', 'Henri La Fontaine', 'Harold Borko', 'Yves-François Le Coadic', 'Tefko Saracevic', 'Vannevar Bush'],
  alertasCebraspe: [
    'O Cebraspe frequentemente atribui a definição canônica de Ciência da Informação de Harold Borko (1968) à Biblioteconomia para induzir o candidato ao erro.',
    'Atenção à divisão de Le Coadic: a "Biblioteconomia dos livros" cuida da gestão física/técnica do acervo, enquanto a "Biblioteconomia dos leitores" foca nas necessidades, uso e mediação humana.',
    'A Documentação não substituiu a Biblioteconomia; ela expandiu o universo documental para qualquer suporte informacional e antecipou as técnicas de recuperação da informação.',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa das Três Disciplinas da Informação',
    colunas: ['Critério', 'Biblioteconomia Tradicional', 'Documentação (Otlet & Briet)', 'Ciência da Informação (Borko & Saracevic)'],
    linhas: [
      ['Surgimento / Marco', 'Antiguidade (Alexandria) / Consolidação no séc. XIX', 'Fim do séc. XIX (1895: IIB; 1934: Tratado de Otlet)', 'Pós-Segunda Guerra Mundial (décadas de 1950-1960; Borko 1968)'],
      ['Objeto Central', 'O livro, coleções impressas e a instituição biblioteca', 'O documento em qualquer suporte material e o princípio monográfico', 'A informação em si: propriedades, comportamento, fluxos e transferência'],
      ['Enfoque Principal', 'Custódia, organização técnica e preservação do acervo', 'Disseminação ativa da pesquisa científica e acesso universal', 'Investigação científica teórica e sistemas tecnológicos de recuperação (IR)'],
      ['Público-Alvo', 'Comunidade geral e leitores da instituição', 'Pesquisadores especializados e cientistas', 'Usuários de sistemas de informação complexos e redes globais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Trajetória Histórica e Rupturas Epistemológicas

A evolução da gestão social do conhecimento registrado é marcada por três grandes momentos epistemológicos que o Cebraspe explora com rigor cirúrgico: **a Biblioteconomia**, **a Documentação** e **a Ciência da Informação**.

#### A. A Biblioteconomia: Da Guarda Patrimonial à Função Social
Historicamente, a biblioteconomia nasceu vinculada à **instituição biblioteca** e à conservação física dos suportes textuais (rolos de papiro, códices medievais e livros impressos pós-Gutenberg). 
* Durante séculos predominou o **paradigma patrimonialista** (guardar para preservar).
* A partir do final do século XIX e início do século XX, com o avanço da educação pública e as formulações de teóricos como Melvil Dewey e S. R. Ranganathan, a biblioteconomia assume o **paradigma social e educacional**: a biblioteca como agente democrático de mediação entre o leitor e o conhecimento.
* **A visão de Yves-François Le Coadic (1996):** O teórico francês divide a área em duas dimensões complementares:
  1. *Biblioteconomia dos Livros:* Ocupa-se da organização administrativa, técnica, orçamentária e física dos acervos.
  2. *Biblioteconomia dos Leitores:* Centrada no usuário, nas práticas de leitura, nos serviços de referência e na mediação sociocultural. *(Alerta de Prova: o Cebraspe adora trocar essas duas definições!)*.

---

#### B. A Documentação e a Revolução de Paul Otlet
No final do século XIX, a explosão das publicações periódicas e relatórios científicos internacionais tornou os métodos bibliotecários tradicionais insuficientes para atender à velocidade exigida pelos cientistas.
* **Paul Otlet e Henri La Fontaine (1895):** Criam em Bruxelas o Instituto Internacional de Bibliografia (IIB) e concebem o ambicioso projeto do *Mundaneum* e do *Repertório Bibliográfico Universal (RBU)*.
* **O Tratado de Documentação (1934):** Obra máxima de Otlet (presente em nosso acervo na pasta \`Fundamentos/003043331.pdf\`). Otlet cunha o termo **Documentação** e estabelece o **Princípio Monográfico** (desmembrar o conteúdo das publicações em fichas analíticas padronizadas para recombinar o saber).
* **A ampliação do suporte:** Para Otlet e, posteriormente, Suzanne Briet (1951), documento deixa de ser sinônimo estrito de livro em papel e passa a abranger fotografias, mapas, esquemas gráficos, patentes, microfichas e registros sonoros.

---

#### C. A Emergência da Ciência da Informação
No contexto da Guerra Fria e da explosão informacional (*information explosion*) do pós-guerra:
* **Vannevar Bush (1945):** Publica o ensaio visionário *"As We May Think"*, propondo o *Memex* (dispositivo conceitual eletromecânico para armazenamento e associação hipertextual de informações).
* **Calvin Mooers (1950):** Cunhou o termo **Recuperação da Informação** (*Information Retrieval*), que se tornou um dos pilares estruturantes da nova ciência.
* **Harold Borko (1968) - O Conceito Canônico:** No artigo histórico *"Information Science: What is it?"*, Borko define:
  > *"A Ciência da Informação é a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam o seu fluxo e os meios de processamento para otimizar a sua acessibilidade e uso. Ela se ocupa daquele corpo de conhecimentos relativos à origem, coleta, organização, armazenamento, recuperação, interpretação, transmissão, transformação e utilização da informação."*

---

### 2. Interdisciplinaridade e Fronteiras Disciplinares
A Ciência da Informação não substituiu nem extinguiu a Biblioteconomia. Conforme demonstrado por Tefko Saracevic (1995) e Lena Vânia Pinheiro (1995):
* A Ciência da Informação é intrinsecamente **interdisciplinar**: conecta-se à Ciência da Computação, Linguística, Semiótica, Comunicação, Psicologia Cognitiva, Lógica e Administração.
* Enquanto a Biblioteconomia se foca primordialmente nas práticas e serviços de unidades de informação e bibliotecas, a Ciência da Informação possui um escopo teórico mais abrangente voltado aos fenômenos informacionais em sistemas sociais e tecnológicos complexos.`,
  checkpoints: [
    {
      id: 'cp-1-1-1',
      pergunta: 'Micro-Checkpoint 1: Conceito Canônico de Ciência da Informação',
      item: 'A Ciência da Informação é definida como a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.',
      gabarito: 'C',
      justificativa: 'Correto! Esta é a clássica definição de Harold Borko (1968), uma das mais cobradas pelo Cebraspe.',
    },
    {
      id: 'cp-1-1-2',
      pergunta: 'Micro-Checkpoint 2: A Divisão de Yves-François Le Coadic',
      item: "Conforme Le Coadic, a 'biblioteconomia dos livros' refere-se ao estudo das práticas de leitura e necessidades de informação dos usuários.",
      gabarito: 'E',
      justificativa: "Errado! A 'biblioteconomia dos livros' foca na gestão técnica e física do acervo; é a 'biblioteconomia dos leitores' que se ocupa dos usuários e de suas práticas.",
    },
      {
      id: 'cp-1-1-3',
      pergunta: "Micro-Checkpoint 3: Conceito de Documento em Suzanne Briet",
      item: "Para Suzanne Briet, qualquer objeto material, natural ou cultural, pode ser considerado documento, desde que colocado sob observação ou tratamento informacional com a finalidade de servir como prova ou testemunho.",
      gabarito: 'C',
      justificativa: "Certo! No manifesto canônico 'Qu'est-ce que la documentation?' (1951), Briet afirma que até mesmo um antílope em seu habitat selvagem não é documento, mas, uma vez capturado, classificado e exposto em um zoológico com ficha descritiva, torna-se documento primário.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-1-1',
        periodo: 'Séc. XIX',
        disciplina: 'Biblioteconomia',
        focoPrincipal: 'Acervo, Livro físico e a Instituição Biblioteca',
        figuraChave: 'Tradição patrimonial e social',
      },
      {
        id: 'tl-1-1-2',
        periodo: '1895 / 1934',
        disciplina: 'Documentação',
        focoPrincipal: 'Princípio Monográfico, múltiplos suportes e disseminação científica',
        figuraChave: 'Paul Otlet e Henri La Fontaine',
      },
      {
        id: 'tl-1-1-3',
        periodo: '1945 / 1968',
        disciplina: 'Ciência da Informação',
        focoPrincipal: 'Propriedades, comportamento e fluxos da informação; sistemas de busca (IR)',
        figuraChave: 'Harold Borko, Vannevar Bush e Calvin Mooers',
      },
    ],
    autores: [
      {
        id: 'aut-1-1-1',
        nome: 'Harold Borko',
        ano: 1968,
        obraPrincipal: 'Information Science: What is it?',
        ideiaChave: 'Propriedades, comportamento e fluxos da informação.',
        chipPegadinha: 'Memorize: é Ciência da Informação, NÃO Biblioteconomia!',
      },
      {
        id: 'aut-1-1-2',
        nome: 'Paul Otlet',
        ano: 1934,
        obraPrincipal: 'Traité de Documentation',
        ideiaChave: 'Pai da Documentação, Princípio Monográfico e criador da CDU com La Fontaine.',
        chipPegadinha: 'Documentação abrange qualquer suporte, não apenas livros em papel.',
      },
      {
        id: 'aut-1-1-3',
        nome: 'Suzanne Briet',
        ano: 1951,
        obraPrincipal: "Qu'est-ce que la documentation?",
        ideiaChave: 'O documento como indício físico em suporte material (o exemplo clássico do antílope).',
        chipPegadinha: 'Exige 4 condições: materialidade, intencionalidade, tratamento e valor de prova.',
      },
      {
        id: 'aut-1-1-4',
        nome: 'Yves-François Le Coadic',
        ano: 1996,
        obraPrincipal: 'A Ciência da Informação',
        ideiaChave: 'Biblioteconomia dos Livros (gestão técnica) vs Biblioteconomia dos Leitores (mediação/usuário).',
        chipPegadinha: 'Cebraspe adora inverter as duas dimensões conceituais.',
      },
      {
        id: 'aut-1-1-5',
        nome: 'Vannevar Bush',
        ano: 1945,
        obraPrincipal: 'As We May Think',
        ideiaChave: 'Idealizador do conceito do Memex e trilhas associativas precursoras do hipertexto.',
        chipPegadinha: 'Dispositivo conceitual eletromecânico, não um computador digital operacional.',
      },
      {
        id: 'aut-1-1-6',
        nome: 'Calvin Mooers',
        ano: 1950,
        obraPrincipal: 'Information Retrieval',
        ideiaChave: 'Criador da expressão Recuperação da Informação (Information Retrieval).',
        chipPegadinha: 'Pilar fundacional da Ciência da Informação pós-guerra.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-1-1',
        afirmacao: 'Denomina-se biblioteconomia a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.',
        gabarito: 'E',
        porQue: 'Essa definição canônica é de Harold Borko (1968) e refere-se estritamente à Ciência da Informação.',
      },
      {
        id: 'peg-1-1-2',
        afirmacao: 'Segundo Le Coadic, a biblioteconomia dos livros compreende os estudos dedicados aos usuários e às suas práticas de leitura.',
        gabarito: 'E',
        porQue: 'A biblioteconomia dos livros foca na organização técnica e física do acervo; é a biblioteconomia dos leitores que cuida dos usuários.',
      },
    ],
  },
};
