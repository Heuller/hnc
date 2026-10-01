import type { ModuloFilho } from '../../../domain/types';

export const submodulo93: ModuloFilho = {
  id: 'sub-9-3',
  numero: '9.3',
  titulo: 'Curadoria Digital, Gestão de Dados de Pesquisa, Direitos Autorais e Creative Commons',
  descricaoCurta: 'Ciclo de vida dos dados de pesquisa e Planos de Gestão de Dados (PGD), curadoria digital (DCC), a Lei de Direitos Autorais brasileira (Lei 9.610/98: direitos morais vs. patrimoniais e limitações) e o sistema de licenças Creative Commons.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Digital Curation Centre (DCC)', 'Lawrence Lessig', 'Sayão & Sales', 'IBICT', 'Lei 9.610/1998'],
  alertasCebraspe: [
    'Curadoria Digital: processo abrangente e contínuo que envolve a seleção, preservação, manutenção, agregação de valor e arquivamento de ativos digitais durante todo o seu ciclo de vida para permitir seu reúso futuro (questão clássica do STJ 2024 e EMBRAPA 2025).',
    'Direitos Morais vs. Direitos Patrimoniais (Lei 9.610/98): os direitos morais (paternidade, reivindicação de autoria e integridade) são INALIENÁVEIS, IRRENUNCIÁVEIS e IMPRESCRITÍVEIS. Os direitos patrimoniais (reprodução, venda, cessão de direitos de publicação) são transferíveis e negociáveis.',
    'Prazo de proteção dos direitos patrimoniais no Brasil: 70 anos contados a partir de 1º de janeiro do ano subsequente ao falecimento do autor. Após esse prazo, a obra cai em Domínio Público.',
    'Licenças Creative Commons: a cláusula "BY" (Atribuição) é OBRIGATÓRIA em todas as seis licenças padronizadas. A licença CC0 representa a renúncia voluntária máxima aos direitos patrimoniais em favor do Domínio Público.',
    'Na Lei 9.610/98 (Art. 46), a citação de passagens de qualquer obra para fins de estudo, crítica ou polêmica na medida estritamente justificada pelo propósito, indicando-se o nome do autor e a fonte, NÃO constitui ofensa aos direitos autorais.',
  ],
  quadroComparativo: {
    titulo: 'As Seis Licenças Oficiais do Sistema Creative Commons (CC)',
    colunas: ['Licença CC', 'Permite Uso Comercial?', 'Permite Criar Obras Derivadas?', 'Exigência de Compartilhamento Igual?'],
    linhas: [
      ['CC BY', 'Sim', 'Sim', 'Não (qualquer licença posterior permitida)'],
      ['CC BY-SA', 'Sim', 'Sim', 'Sim (deve manter a mesma licença CC BY-SA - padrão Wikipedia)'],
      ['CC BY-ND', 'Sim', 'Não (a obra deve ser reproduzida integralmente sem cortes)', 'Não se aplica (não há obras derivadas)'],
      ['CC BY-NC', 'Não (estritamente não comercial)', 'Sim', 'Não'],
      ['CC BY-NC-SA', 'Não (estritamente não comercial)', 'Sim', 'Sim (deve manter a mesma licença CC BY-NC-SA)'],
      ['CC BY-NC-ND', 'Não (estritamente não comercial)', 'Não (sem modificações)', 'Não se aplica (é a licença mais restritiva de todas)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Curadoria Digital e Gestão de Dados de Pesquisa (*RDM*)

Com o advento da *e-Science* (ciência orientada por dados massivos), a Ciência da Informação expandiu seu escopo para além de publicações textuais, abraçando os **dados de pesquisa** (*Research Data*) como ativos de primeira grandeza (Sayão & Sales, 2014; IBICT, 2021, presentes em nosso acervo em \`Comunicação científica, Ciência Aberta e métricas\`):

#### A. O Ciclo da Curadoria Digital (Modelo DCC)
Desenvolvido pelo *Digital Curation Centre* (Reino Unido), a curadoria digital compreende o **planejamento, a gestão e a preservação ativa** dos dados ao longo de todo o seu ciclo:
$$\\text{Concepção} \\rightarrow \\text{Criação / Coleta} \\rightarrow \\text{Acesso e Uso} \\rightarrow \\text{Avaliação e Seleção} \\rightarrow \\text{Ingestão} \\rightarrow \\text{Ação de Preservação} \\rightarrow \\text{Armazenamento} \\rightarrow \\text{Transformação e Reúso}$$

#### B. O Plano de Gestão de Dados (PGD / DMP)
* Documento formal obrigatório exigido por agências de fomento nacionais (FAPESP, CNPq) e internacionais.
* Deve ser elaborado no início da pesquisa, especificando: tipos e formatos de dados a serem gerados; padrões de metadados utilizados; políticas de acesso aberto; medidas de segurança e anonimização de dados pessoais (LGPD); e onde os dados serão depositados para preservação de longo prazo (em repositórios de dados abertos como Zenodo, Figshare ou Repositório de Dados da instituição).

---

### 2. A Lei de Direitos Autorais no Brasil (Lei nº 9.610/1998)

A legislação autoral brasileira harmoniza-se com a Convenção de Berna e divide os direitos autorais em duas esferas inconfundíveis:

#### A. Direitos Morais (Art. 24 da Lei 9.610/98)
* São os vínculos de personalidade entre o criador e sua obra.
* **Características:** São **inalienáveis, irrenunciáveis e imprescritíveis** (o autor não pode renunciar nem vender seu direito moral de ser reconhecido como pai da obra).
* **Prerrogativas Morais:**
  * O direito de reivindicar a autoria da obra a qualquer tempo;
  * O direito de ter seu nome, pseudônimo ou sinal convencional indicado na utilização de sua obra;
  * O direito de conservar a obra inédita;
  * O direito de assegurar a integridade da obra, opondo-se a quaisquer modificações ou atos que a desabonem.

#### B. Direitos Patrimoniais (Arts. 28 a 45)
* O direito exclusivo do autor de fruir e usufruir economicamente dos proventos da obra.
* Podem ser cedidos, transferidos ou licenciados a terceiros (ex.: a uma editora para comercialização).
* **Prazo de Proteção:** Os direitos patrimoniais perduram por **70 anos**, contados de **1º de janeiro do ano subsequente ao falecimento do autor**. Após decorrido esse prazo, a obra cai em **Domínio Público**, podendo ser livremente reproduzida por qualquer cidadão.

#### C. Limitações aos Direitos Autorais (Art. 46)
Casos em que o uso da obra é plenamente permitido sem prévia autorização e sem pagamento:
* A citação em livros, jornais ou trabalhos acadêmicos de passagens de qualquer obra, para fins de estudo ou crítica, na medida estritamente justificada pelo propósito, indicando-se o nome do autor e a fonte;
* A reprodução de obras para uso exclusivo de pessoas com deficiência visual;
* A reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita por este e sem intuito de lucro.

---

### 3. O Sistema de Licenciamento Creative Commons (Lawrence Lessig)

Criado em 2001 pelo jurista norte-americano **Lawrence Lessig**, o **Creative Commons (CC)** propôs uma alternativa jurídica flexível à dicotomia rígida entre *"Todos os direitos reservados"* (copyright tradicional) e *"Nenhum direito reservado"* (domínio público), consagrando a filosofia de **"Alguns direitos reservados"**:

* **Os Quatro Módulos de Condição de Licença:**
  1. \`BY\` **(Atribuição):** O usuário deve sempre dar o devido crédito ao autor original. Presente em todas as licenças.
  2. \`NC\` **(Não Comercial):** A obra não pode ser utilizada para propósitos de lucro ou vantagem comercial.
  3. \`ND\` **(Sem Derivações):** A obra pode ser distribuída, mas não pode ser alterada, traduzida ou remixada.
  4. \`SA\` **(Compartilha Igual):** Se você alterar ou transformar a obra, deve distribuir a obra derivada sob a mesma licença exata da original.
* **Dedicação ao Domínio Público (CC0):**
  * Instrumento pelo qual o autor abre mão de todas as prerrogativas patrimoniais mundialmente, permitindo reúso irrestrito sem necessidade de solicitação prévia.`,
  checkpoints: [
    {
      id: 'cp-9-3-1',
      pergunta: 'Micro-Checkpoint 1: Conceito de Curadoria Digital',
      item: 'A curadoria digital pode ser corretamente definida como o processo dinâmico que compreende a seleção, a preservação, a manutenção, a agregação de valor e o arquivamento de ativos digitais ao longo de seu ciclo de vida para viabilizar seu reúso futuro.',
      gabarito: 'C',
      justificativa: 'Correto! Essa definição canônica do Digital Curation Centre (DCC) foi cobrada literalmente pelo Cebraspe em provas recentes (STJ 2024 e EMBRAPA 2025).',
    },
    {
      id: 'cp-9-3-2',
      pergunta: 'Micro-Checkpoint 2: Direitos Morais e Patrimoniais (Lei 9.610/98)',
      item: 'De acordo com a Lei de Direitos Autorais brasileira (Lei nº 9.610/1998), tanto os direitos morais quanto os direitos patrimoniais do autor sobre sua obra podem ser objeto de renúncia, cessão ou alienação comercial definitiva a terceiros.',
      gabarito: 'E',
      justificativa: 'Errado! Apenas os direitos PATRIMONIAIS podem ser cedidos ou comercializados. Os direitos MORAIS são inalienáveis, irrenunciáveis e imprescritíveis por força expressa de lei.',
    },
      {
      id: 'cp-9-3-3',
      pergunta: "Micro-Checkpoint 3: Fator de Impacto e Autocitações de Periódicos",
      item: "O Fator de Impacto de uma revista científica, calculado pelo Journal Citation Reports (JCR), expressa a razão entre as citações recebidas no ano de referência e o número de artigos citáveis publicados nos dois anos precedentes.",
      gabarito: 'C',
      justificativa: "Certo! A fórmula clássica de Eugene Garfield divide o total de citações no ano X recebidas por artigos dos anos X-1 e X-2 pelo número de itens citáveis publicados nesse biênio.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-3-1',
        periodo: '1998',
        disciplina: 'Legislação Autoral Brasileira',
        focoPrincipal: 'Promulgação da Lei nº 9.610/1998 (Lei de Direitos Autorais)',
        figuraChave: 'Congresso Nacional',
      },
      {
        id: 'tl-9-3-2',
        periodo: '2001',
        disciplina: 'Licenças Abertas',
        focoPrincipal: 'Fundação do Creative Commons por Lawrence Lessig na Universidade de Stanford',
        figuraChave: 'Lawrence Lessig',
      },
      {
        id: 'tl-9-3-3',
        periodo: '2004 / 2014',
        disciplina: 'Curadoria Digital',
        focoPrincipal: 'Criação do Digital Curation Centre (DCC) e difusão dos Planos de Gestão de Dados',
        figuraChave: 'Digital Curation Centre / Sayão & Sales',
      },
    ],
    autores: [
      {
        id: 'aut-9-3-1',
        nome: 'Lawrence Lessig',
        ano: 2001,
        obraPrincipal: 'The Future of Ideas / Free Culture',
        ideiaChave: 'Idealizador do Creative Commons e pioneiro da cultura livre no ciberespaço.',
        chipPegadinha: 'Creative Commons baseia-se na lei autoral vigente, não em sua anulação.',
      },
      {
        id: 'aut-9-3-2',
        nome: 'Luís Fernando Sayão e Luana Farias Sales',
        ano: 2014,
        obraPrincipal: 'Guia de Gestão e Curadoria de Dados de Pesquisa',
        ideiaChave: 'Pioneiros brasileiros nos estudos de curadoria digital e e-Science na Ciência da Informação.',
        chipPegadinha: 'Dados de pesquisa exigem curadoria contínua desde a fase de planejamento do projeto.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-3-1',
        afirmacao: 'Na licença Creative Commons CC BY-ND (Atribuição - Sem Derivações), o usuário está plenamente autorizado a traduzir a obra para outro idioma e publicá-la comercialmente.',
        gabarito: 'E',
        porQue: 'A cláusula ND (No Derivatives / Sem Derivações) proíbe qualquer modificação, adaptação ou tradução da obra original.',
      },
      {
        id: 'peg-9-3-2',
        afirmacao: 'No Brasil, os direitos patrimoniais sobre uma obra autoral extinguem-se exatamente 50 anos após a data de sua primeira publicação impressa.',
        gabarito: 'E',
        porQue: 'O prazo no Brasil (Lei 9.610/98) é de 70 ANOS, contados de 1º de janeiro do ano subsequente ao FALECIMENTO do autor.',
      },
    ],
  },
};
