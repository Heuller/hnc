import type { ModuloFilho } from '../../../domain/types';

export const submodulo21: ModuloFilho = {
  id: 'sub-2-1',
  numero: '2.1',
  titulo: 'Princípios Internacionais de Catalogação (ICP) e Catalogação pelo AACR2r',
  descricaoCurta: 'Declaração de Princípios da IFLA (ICP 2016), objetivos e conveniência do usuário (Cutter), estrutura do AACR2r, as 8 áreas de descrição da ISBD, níveis de catalogação e regras canônicas de escolha de pontos de acesso (autoria pessoal, coletiva e obras governamentais).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Eliane Serrão Alves Mey', 'Naira Christofoletti Silveira', 'Charles Ammi Cutter', 'Bernadete Campello', 'Michael Gorman'],
  alertasCebraspe: [
    'O princípio mais importante da Declaração de Princípios Internacionais de Catalogação (ICP) da IFLA é a CONVENIÊNCIA DO USUÁRIO. O Cebraspe já afirmou que o mais importante era a "conveniência entre o acervo e a instituição" para tornar o item errado.',
    'Regra dos Três Autores no AACR2r: para obras com até 3 autores sem destaque, a entrada principal é pelo primeiro autor citado, gerando-se entradas secundárias para os outros dois. Se houver 4 ou mais autores sem destaque, a entrada principal é OBRIGATORIAMENTE PELO TÍTULO, gerando-se secundária apenas para o primeiro autor citado seguido de et al.',
    'Obras sob coordenação, organização ou compilação: no AACR2r, coordenadores e organizadores NÃO recebem entrada principal! A entrada principal é feita pelo TÍTULO, e eles recebem entrada secundária.',
    'Entidades governamentais e leis: a entrada principal de leis e atos normativos é feita pelo cabeçalho da JURISDIÇÃO (ex.: "Brasil", "São Paulo (Estado)"), seguido do título uniforme da lei ou [Leis, etc.]. Tribunais entram por sua jurisdição (ex.: "Brasil. Supremo Tribunal Federal").',
    'A Área 3 do AACR2r (Detalhes Específicos do Material) é utilizada apenas para tipos específicos: materiais cartográficos (escala/projeção), música impressa, publicações seriadas e recursos eletrônicos.',
  ],
  quadroComparativo: {
    titulo: 'As Oito Áreas de Descrição Bibliográfica do AACR2r / ISBD',
    colunas: ['Área', 'Denominação Oficial', 'Fontes Principais de Informação', 'Pontuação Canônica de Destaque'],
    linhas: [
      ['Área 1', 'Título e Indicação de Responsabilidade', 'Página de rosto / Fonte principal', ': subtítulo ; = título equivalente ; / primeira responsabilidade ; ; responsabilidade subsequente'],
      ['Área 2', 'Edição', 'Página de rosto, outras preliminares, colofão', '. – Transcreve-se como consta (ex.: 3. ed.) ; / responsabilidade da edição'],
      ['Área 3', 'Detalhes Específicos do Material', 'Todo o recurso', '. – Utilizada apenas em: cartográficos (escala), música, seriados e recursos eletrônicos'],
      ['Área 4', 'Publicação, Distribuição etc. (Imprenta)', 'Página de rosto e preliminares', '. – Lugar : Nome da editora, Data (ex.: Brasília : Câmara dos Deputados, 2026.)'],
      ['Área 5', 'Descrição Física (Colação)', 'Todo o recurso', '. – Paginação/volumes : outros detalhes físicos (il.) ; dimensões (cm) + material adicional'],
      ['Área 6', 'Série', 'Todo o recurso', '. – (Título da série ; número da série)'],
      ['Área 7', 'Notas', 'Qualquer fonte', '. – Parágrafos independentes para informações complementares necessárias'],
      ['Área 8', 'Número Normalizado e Termos de Disponibilidade', 'Qualquer fonte', '. – ISBN ou ISSN : preço ou condição de acesso'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Filosofia da Catalogação e os Princípios Internacionais (ICP 2016)

A catalogação descritiva é a técnica fundamental da Biblioteconomia destinada a criar representações padronizadas dos recursos informacionais para viabilizar sua identificação, localização e acesso (Mey & Silveira, 2009, *Catalogação no Plural*).

#### A. A Herança de Charles Ammi Cutter (1876) e os Objetivos do Catálogo
Cutter formulou os objetivos clássicos que ainda regem os catálogos modernos:
1. **Permitir a localização** de um livro quando se conhece o autor, o título ou o assunto.
2. **Mostrar o que a biblioteca possui** de determinado autor, sobre determinado assunto ou em determinado gênero literário.
3. **Auxiliar na escolha** de um livro quanto à sua edição (critério bibliográfico) ou quanto ao seu caráter (literário, técnico).

#### B. A Declaração de Princípios Internacionais de Catalogação (ICP - IFLA 2016)
O documento da IFLA (presente em nosso acervo em \`Catalogação/icp_2016-pt.pdf\`) orienta a construção de todos os códigos modernos:
* **Conveniência do Usuário (Princípio Supremo):** Todas as decisões de descrição e pontos de acesso devem priorizar o esforço e a facilidade de busca do usuário.
* **Uso Comum e Clareza:** Vocabulário natural e inteligível nas descrições.
* **Representação Fidedigna:** O recurso deve ser descrito tal como se apresenta.
* **Interoperabilidade:** Capacidade de compartilhamento global de dados em redes abertas.

---

### 2. A Estrutura do AACR2r (*Anglo-American Cataloguing Rules*, 2ª Edição Revisada)

O AACR2r é dividido estruturalmente em duas partes basilares:
* **Parte I (Capítulos 1 a 13) — Descrição Bibliográfica:** Baseada na ISBD (*International Standard Bibliographic Description*). Define as 8 áreas padronizadas e as regras para cada suporte físico (monografias, cartográficos, manuscritos, música, filmes, recursos eletrônicos e publicações seriadas).
* **Parte II (Capítulos 21 a 26) — Pontos de Acesso, Cabeçalhos e Remissivas:**
  * *Capítulo 21:* Escolha dos pontos de acesso (quem recebe entrada principal e quem recebe secundária).
  * *Capítulo 22:* Cabeçalhos para pessoas físicas.
  * *Capítulo 23:* Nomes geográficos.
  * *Capítulo 24:* Cabeçalhos para entidades coletivas.
  * *Capítulo 25:* Títulos uniformes.
  * *Capítulo 26:* Remissivas (*ver* e *ver também*).

---

### 3. Regras Críticas de Escolha de Pontos de Acesso (Capítulo 21)

#### A. Autoria Pessoal Compartilhada
* **Até 3 autores sem destaque:** Entrada principal pelo primeiro autor citado. Entradas secundárias para o 2º e o 3º autores.
* **4 ou mais autores sem destaque:** Entrada principal OBRIGATORIAMENTE pelo **Título**. Entrada secundária apenas para o primeiro autor citado na fonte de informação seguido da expressão "et al.".
* **Obras com destaque de autoria:** Se a folha de rosto der destaque explícito a um autor (por tipografia ou redação), a entrada principal será dele, independentemente do número de colaboradores.

#### B. Responsabilidade por Coordenação, Organização e Compilação
* No AACR2r, termos como "organizador", "coordenador", "compilador" e "editor" expressam funções editoriais e **não constituem autoria intelectual primária**.
* Portanto, coletâneas organizadas por coordenadores têm **entrada principal pelo TÍTULO**, gerando-se entradas secundárias para os organizadores/coordenadores (Regra 21.7).

#### C. Obras Administrativas, Legislativas e Governamentais
* **Leis, Decretos e Constituições:** Entrada principal sob o nome da jurisdição territorial que promulga o ato (ex.: \`Brasil\`, \`Distrito Federal (Brasil)\`, \`Ceará (Estado)\`), seguida do título uniforme (\`[Constituição (1988)]\` ou \`[Lei n. 8.112, de 11 de dezembro de 1990]\`).
* **Tribunais:** Entram pelo nome da jurisdição seguido da denominação do órgão judicial (ex.: \`Brasil. Supremo Tribunal Federal\`, \`Brasil. Tribunal Superior Eleitoral\`).
* **Entidades Coletivas Subordinadas:** Entram diretamente sob o próprio nome se este for distintivo, ou sob a jurisdição/entidade superior se for um nome genérico (ex.: \`Brasil. Ministério da Fazenda\`).`,
  checkpoints: [
    {
      id: 'cp-2-1-1',
      pergunta: 'Micro-Checkpoint 1: Princípios Internacionais de Catalogação (ICP)',
      item: 'De acordo com a Declaração de Princípios Internacionais de Catalogação (ICP) da IFLA, o princípio primordial que deve nortear a construção de catálogos e códigos é o da conveniência entre o acervo e a instituição mantenedora.',
      gabarito: 'E',
      justificativa: 'Errado! O princípio reitor primordial e inegociável da IFLA é a CONVENIÊNCIA DO USUÁRIO, e não da instituição.',
    },
    {
      id: 'cp-2-1-2',
      pergunta: 'Micro-Checkpoint 2: Entrada Principal de Obras Legislativas no AACR2r',
      item: 'Na catalogação de uma lei federal brasileira segundo o AACR2r, a entrada principal deve ser realizada pelo nome da jurisdição que a promulgou, isto é, sob o cabeçalho Brasil.',
      gabarito: 'C',
      justificativa: 'Correto! Leis, decretos, tratados e constituições têm como ponto de acesso principal a jurisdição governamental responsável.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-1-1',
        periodo: '1876',
        disciplina: 'Teoria da Catalogação',
        focoPrincipal: 'Regras para Catálogo Dicionário e objetivos clássicos de busca do catálogo',
        figuraChave: 'Charles Ammi Cutter',
      },
      {
        id: 'tl-2-1-2',
        periodo: '1978 / 1988 / 2002',
        disciplina: 'Códigos Anglo-Americanos',
        focoPrincipal: 'Publicação do AACR2 e AACR2r, estruturação em 8 áreas da ISBD e 2 partes funcionais',
        figuraChave: 'Michael Gorman e Paul Winkler',
      },
      {
        id: 'tl-2-1-3',
        periodo: '2009 / 2016',
        disciplina: 'Princípios Internacionais IFLA',
        focoPrincipal: 'Declaração dos Princípios Internacionais de Catalogação (ICP): foco na conveniência do usuário',
        figuraChave: 'IFLA Cataloguing Section',
      },
    ],
    autores: [
      {
        id: 'aut-2-1-1',
        nome: 'Eliane Serrão Alves Mey',
        ano: 2009,
        obraPrincipal: 'Catalogação no plural',
        ideiaChave: 'A catalogação como sistema de mensagens codificadas que viabiliza a interseção entre o documento e a mente do usuário.',
        chipPegadinha: 'Catalogação descritiva abrange descrição bibliográfica, pontos de acesso e localização.',
      },
      {
        id: 'aut-2-1-2',
        nome: 'Charles Ammi Cutter',
        ano: 1876,
        obraPrincipal: 'Rules for a Dictionary Catalog',
        ideiaChave: 'Objetivos do catálogo: encontrar, mostrar e auxiliar na escolha.',
        chipPegadinha: 'Cutter foca na relação leitor-acervo, não em procedimentos burocráticos internos.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-1-1',
        afirmacao: 'Na catalogação de um livro que possua quatro organizadores na folha de rosto, deve-se fazer a entrada principal pelo nome do primeiro organizador e entradas secundárias para os outros três.',
        gabarito: 'E',
        porQue: 'No AACR2r, obras sob coordenação ou organização têm entrada principal OBRIGATORIAMENTE PELO TÍTULO, recebendo os organizadores entradas secundárias.',
      },
      {
        id: 'peg-2-1-2',
        afirmacao: 'A área dos detalhes específicos do material (Área 3) é de preenchimento obrigatório para monografias e livros impressos comuns.',
        gabarito: 'E',
        porQue: 'A Área 3 é restrita a materiais cartográficos, música, seriados e recursos eletrônicos. Livros impressos comuns pulam da Área 2 (Edição) direto para a Área 4 (Publicação).',
      },
    ],
  },
};
