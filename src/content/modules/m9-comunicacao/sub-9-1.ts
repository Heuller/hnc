import type { ModuloFilho } from '../../../domain/types';

export const submodulo91: ModuloFilho = {
  id: 'sub-9-1',
  numero: '9.1',
  titulo: 'Ciclo da Comunicação Científica, Canais e Avaliação por Pares',
  descricaoCurta: 'O fluxo e ciclo da comunicação científica (A. J. Meadows), distinção entre canais formais e informais (colégios invisíveis), preprints e modalidades de avaliação por pares (cega, duplo-cega e avaliação aberta).',
  tempoEstimadoMinutos: 30,
  autoresChave: ['A. J. Meadows', 'Derek de Solla Price', 'Robert K. Merton', 'John Ziman'],
  alertasCebraspe: [
    'Diferenciação canônica entre canais formais e informais (A. J. Meadows): Canais Formais (periódicos científicos revisados, livros acadêmicos, patentes) têm validação institucional, registro público permanente e controle bibliográfico; Canais Informais (conversas interpessoais, e-mails, colégios invisíveis, reuniões científicas) são efêmeros, rápidos e sem controle bibliográfico prévio.',
    'Colégios Invisíveis (Derek de Solla Price): redes informais de cooperação entre pesquisadores de elite que compartilham dados, manuscritos e ideias preliminares muito antes da publicação formal. O Cebraspe adora afirmar que nos colégios invisíveis os cientistas "não se comunicam": ERRADO!',
    'Avaliação por Pares (Peer Review): simples-cega (o autor não sabe quem é o avaliador, mas o avaliador sabe quem é o autor); duplo-cega / double-blind (nem autor nem avaliador sabem a identidade um do outro - padrão tradicional de periódicos); aberta / open peer review (as identidades de autor e avaliador são públicas, e os pareceres podem ser publicados junto com o artigo).',
    'Preprints: manuscritos científicos disponibilizados publicamente em servidores abertos (como arXiv, SciELO Preprints, bioRxiv) ANTES de passarem pela avaliação formal por pares.',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Canais de Comunicação Científica (Meadows & Price)',
    colunas: ['Critério', 'Canais Informais de Comunicação', 'Canais Formais de Comunicação'],
    linhas: [
      ['Velocidade de Transmissão', 'Quase instantânea (tempo real)', 'Lenta (meses ou anos de submissão, revisão e editoração)'],
      ['Público e Alcance', 'Restrito a grupos de pesquisa e redes pessoais (Colégios Invisíveis)', 'Universal, aberto a qualquer leitor e pesquisador no mundo'],
      ['Controle e Validação', 'Sem controle formal de qualidade institucional', 'Validação rigorosa por pares (*peer review*) e comitê editorial'],
      ['Memória e Registro', 'Efêmero, volátil e de difícil rastreamento', 'Permanente, indexado em bases e depositado na memória científica'],
      ['Exemplos Típicos', 'E-mails, conversas de corredor, mensagens em chats, debates em eventos', 'Artigos em revistas indexadas, monografias acadêmicas, patentes concedidas'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Natureza da Comunicação Científica (A. J. Meadows)

Em sua obra monumental *A Comunicação Científica* (presente em nosso acervo \`Comunicação científica, Ciência Aberta e métricas/pdf-p-classtruncatedtext-module-lineclamped-85ulhh-style-max-lines5a-comunicacao-cientifica-by-a-j-meadows-p_compress.pdf\`), **Arthur Jack Meadows** demonstra que a ciência é essencialmente um empreendimento social e comunicativo:
> *"Uma pesquisa científica só se completa verdadeiramente quando os seus resultados são comunicados, validados criticamente pela comunidade e incorporados ao patrimônio do saber público registrado."*

#### O Ciclo da Publicação Científica
O ciclo da informação científica percorre etapas bem definidas:
$$\\text{Ideia / Hipótese} \\rightarrow \\text{Experimento} \\rightarrow \\text{Comunicação Informal} \\rightarrow \\text{Redação de Preprint} \\rightarrow \\text{Submissão a Periódico} \\rightarrow \\text{Peer Review} \\rightarrow \\text{Publicação Formal} \\rightarrow \\text{Indexação e Citação}$$

---

### 2. Canais Formais vs. Canais Informais e os Colégios Invisíveis

* **Canais Formais:**
  * Meios públicos de transmissão do conhecimento que garantem **autoria, data de prioridade intelectual e perenidade**.
  * O **periódico científico** (cujo nascimento remonta a 1665 com o *Journal des Sçavans* na França e a *Philosophical Transactions* na Inglaterra) é o veículo formal hegemônico.
* **Canais Informais e os Colégios Invisíveis:**
  * O historiador da ciência **Derek de Solla Price** cunhou a expressão **"Colégios Invisíveis"** (*Invisible Colleges*) para descrever as redes informais de comunicação mantidas por grupos de ponta na pesquisa científica.
  * *Mecanismo:* Cientistas trocam versões preliminares de textos, impressões sobre experimentos e comentários críticos de maneira rápida e não hierarquizada. Essa comunicação informal direciona as futuras publicações formais.

---

### 3. A Avaliação por Pares (*Peer Review*) e a Transição para a Ciência Aberta

A avaliação por pares é o crivo de controle de qualidade e validação epistemológica da literatura científica:

1. **Avaliação Simples-Cega (*Single-Blind Review*):**
   * O revisor conhece a autoria do artigo, mas o autor desconhece quem são os revisores.
   * *Crítica:* Pode gerar viés contra autores desconhecidos ou de instituições periféricas.
2. **Avaliação Duplo-Cega (*Double-Blind Review*):**
   * Nem o autor sabe a identidade dos pareceristas, nem os pareceristas sabem a identidade do autor (anonimização do manuscrito).
   * Modelo historicamente mais adotado pelas ciências humanas e sociais aplicadas.
3. **Avaliação Aberta por Pares (*Open Peer Review*):**
   * Um dos pilares da **Ciência Aberta**. As identidades de autores e revisores são tornadas públicas, os pareceres críticos podem ser publicados juntamente com o artigo aprovado e, em alguns modelos, a comunidade acadêmica em geral pode comentar e sugerir correções ao texto na Web de forma transparente.`,
  checkpoints: [
    {
      id: 'cp-9-1-1',
      pergunta: 'Micro-Checkpoint 1: Os Colégios Invisíveis de Solla Price',
      item: 'No âmbito da comunicação científica, a teoria dos colégios invisíveis descreve redes de trabalho científico compostas por pesquisadores que se isolam institucionalmente e que não se comunicam entre si.',
      gabarito: 'E',
      justificativa: 'Errado! Essa é uma casca de banana clássica do Cebraspe (SUFRAMA). Os colégios invisíveis são exatamente o OPOSTO: redes intensas e ágeis de comunicação informal direta e compartilhamento entre cientistas.',
    },
    {
      id: 'cp-9-1-2',
      pergunta: 'Micro-Checkpoint 2: Canais Formais da Ciência',
      item: 'Os canais formais da comunicação científica, exemplificados pelos periódicos científicos arbitrados, caracterizam-se por propiciar o registro público permanente, a ampla visibilidade e o controle bibliográfico da produção científica.',
      gabarito: 'C',
      justificativa: 'Correto! Os canais formais garantem o rigor, o controle de qualidade por pares e a preservação duradoura na memória científica mundial.',
    },
      {
      id: 'cp-9-1-3',
      pergunta: "Micro-Checkpoint 3: Canais Formais vs Informais de Garvey-Griffith",
      item: "No modelo de comunicação científica de Garvey e Griffith, os artigos publicados em periódicos científicos indexados com revisão por pares enquadram-se na categoria de canais informais de comunicação.",
      gabarito: 'E',
      justificativa: "Errado! Artigos em periódicos científicos com peer review são o exemplo canônico e central de canal FORMAL (público, arquivável e validado pela comunidade). Canais informais englobam cartas, e-mails, pré-prints e conversas orais em congressos.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-1-1',
        periodo: '1665',
        disciplina: 'Nascimento dos Periódicos',
        focoPrincipal: 'Surgimento do Journal des Sçavans e da Philosophical Transactions na Europa',
        figuraChave: 'Royal Society e Denis de Sallo',
      },
      {
        id: 'tl-9-1-2',
        periodo: '1963',
        disciplina: 'Cientometria e Redes',
        focoPrincipal: 'Publicação de "Little Science, Big Science" e conceituação dos Colégios Invisíveis',
        figuraChave: 'Derek de Solla Price',
      },
      {
        id: 'tl-9-1-3',
        periodo: '1974 / 1998',
        disciplina: 'Comunicação Científica',
        focoPrincipal: 'Sistematização do ciclo da comunicação científica e impacto da editoração eletrônica',
        figuraChave: 'A. J. Meadows',
      },
    ],
    autores: [
      {
        id: 'aut-9-1-1',
        nome: 'A. J. Meadows',
        ano: 1998,
        obraPrincipal: 'The Scientific Journal / A Comunicação Científica',
        ideiaChave: 'O ciclo da comunicação formal e informal na ciência e a sociologia da publicação acadêmica.',
        chipPegadinha: 'A pesquisa não termina no laboratório; só existe se for comunicada formalmente.',
      },
      {
        id: 'aut-9-1-2',
        nome: 'Derek de Solla Price',
        ano: 1963,
        obraPrincipal: 'Little Science, Big Science',
        ideiaChave: 'Pai da Cientometria; conceito de Colégios Invisíveis e crescimento exponencial da ciência.',
        chipPegadinha: 'Colégios Invisíveis são redes informais de cientistas em comunicação ativa e ágil.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-1-1',
        afirmacao: 'O livre acesso à literatura científica dispensou a necessidade de avaliação por pares na editoração de periódicos acadêmicos.',
        gabarito: 'E',
        porQue: 'O Acesso Aberto mantém integralmente o rigor da avaliação por pares (peer review); o que muda é o modelo de cobrança de assinaturas, não o crivo científico.',
      },
      {
        id: 'peg-9-1-2',
        afirmacao: 'Informações científicas preliminares divulgadas em palestras, comunicações orais e correspondências eletrônicas constituem canais formais da comunicação científica.',
        gabarito: 'E',
        porQue: 'Palestras, conversas e correspondências são canais INFORMAIS. Canais formais são os registros publicados de forma perene com revisão editorial.',
      },
    ],
  },
};
