import type { ModuloFilho } from '../../../domain/types';

export const submodulo22: ModuloFilho = {
  id: 'sub-2-2',
  numero: '2.2',
  titulo: 'O Padrão RDA (Resource Description and Access)',
  descricaoCurta: 'Gênese do RDA, superação do AACR2r para o ambiente digital, alinhamento com FRBR e IFLA LRM, eliminação da DGM e adoção do trio 336/337/338, fim das abreviaturas latinas e foco nas tarefas do usuário.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Joint Steering Committee (JSC)', 'Barbara Tillett', 'Tom Delsey', 'Eliane Mey'],
  alertasCebraspe: [
    'O RDA NÃO é um simples conjunto de regras de pontuação como o AACR2; é um padrão de conteúdo baseado em modelo entidade-relacionamento (FRBR/LRM) projetado para a Web Semântica e Linked Open Data.',
    'Eliminação radical da DGM (Designação Geral do Material): o RDA aboliu termos entre colchetes como "[recurso eletrônico]" ou "[gravação de vídeo]" e criou três atributos específicos: Tipo de Conteúdo (MARC 336), Tipo de Mídia (MARC 337) e Tipo de Suporte (MARC 338).',
    'O princípio do RDA "Take what you see" (transcreva o que vê) eliminou expressões latinas e abreviaturas tradicionais como "[s.l.]" (sem local) e "[s.n.]" (sem editor), bem como "[et al.]" obrigatório. No RDA, transcrevem-se todos os autores ou registra-se "lugar de publicação não identificado".',
    'O RDA não substituiu o formato MARC 21; dados RDA são perfeitamente codificáveis no MARC 21 por meio de novos campos criados pela Library of Congress (como 336, 337 e 338).',
    'Terminologia nova do RDA: abandona-se o termo "cabeçalho" em favor de "ponto de acesso autorizado", e "título uniforme" passa a ser denominado "título preferencial".',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: AACR2r vs. RDA (Resource Description and Access)',
    colunas: ['Critério', 'AACR2r (1978 / 2002)', 'RDA (2010 / Oficial)', 'Impacto na Prática do Concurso'],
    linhas: [
      ['Fundamento Conceitual', 'Baseado na ISBD e voltado ao suporte analógico/fichas', 'Baseado em modelos conceituais (FRBR, FRAD e IFLA LRM)', 'RDA requer pensamento relacional de entidades, atributos e relacionamentos'],
      ['Identificação do Formato', 'DGM (Designação Geral do Material) entre colchetes após o título', 'Trio analítico: Tipo de Conteúdo + Tipo de Mídia + Tipo de Suporte', 'Campos MARC 21: 336 ($a texto), 337 ($a não mediado / computador), 338 ($a volume / disco online)'],
      ['Regra de Transcrição', 'Abreviaturas obrigatórias ([S.l.], [s.n.], ed., p., il., et al.)', 'Transcrição literal ("o que você vê"); abreviaturas em português por extenso', 'Cebraspe cobra itens afirmando que [S.l.] continua obrigatório no RDA (ERRADO)'],
      ['Limite de Autoria', 'Regra restritiva de até 3 autores (acima de 3: corta e usa et al.)', 'Sem limite restritivo: permite registrar todos os agentes colaboradores', 'Aumenta a encontrabilidade e justiça de citação para todos os autores'],
      ['Terminologia Chave', 'Cabeçalho, Título Uniforme, Ponto de acesso principal', 'Ponto de Acesso Autorizado, Título Preferencial, Ponto de Acesso', 'Substituição formal de termos para adequação a bancos de dados relacionais'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Da Crise do AACR2 ao Nascimento do RDA

O Código de Catalogação Anglo-Americano (AACR2r), concebido na era das fichas catalográficas de cartolina e do texto impresso, tornou-se anacrônico com a emergência da Web, das bases de dados relacionais e dos suportes digitais multimídia (áudio, vídeo, e-books, datasets e objetos digitais complexos).

Em 2004, o *Joint Steering Committee for Revision of AACR* decidiu abandonar o plano de uma terceira edição (AACR3) e construir um padrão inteiramente novo: o **RDA — Resource Description and Access** (Recursos: Descrição e Acesso), lançado oficialmente em 2010:
* **Independência de Suporte:** O RDA foi desenhado para descrever qualquer tipo de recurso analógico ou digital com a mesma coerência.
* **Projetado para o Ambiente Web:** Estruturado com base em identificadores unívocos (URIs), vocabulários controlados abertos e ontologias compatíveis com Linked Data e a Web Semântica.
* **Orientado às Tarefas do Usuário:** O RDA adota as tarefas definidas nos FRBR/LRM como foco supremo da descrição:
  1. *Encontrar* (*Find*);
  2. *Identificar* (*Identify*);
  3. *Selecionar* (*Select*);
  4. *Obter* (*Obtain*);
  5. *Explorar / Navegar* (*Explore*).

---

### 2. A Ruptura com a Designação Geral do Material (DGM)

A maior e mais célebre alteração do RDA em relação ao AACR2r foi o banimento da DGM (*General Material Designation*), como \`[livro]\`, \`[microforma]\`, \`[gravação de som]\`, \`[recurso eletrônico]\`. A DGM misturava equivocadamente o tipo de conteúdo intelectual com o suporte físico do objeto.

O RDA decompôs a descrição da natureza do documento no **Trio Canônico (Campos 336, 337 e 338 do MARC 21)**:
1. **Tipo de Conteúdo (*Content Type* - Campo MARC 336):**
   * Refere-se à forma fundamental de comunicação intelectual/artística contida no recurso.
   * *Exemplos:* \`texto\`, \`imagem estática\`, \`música executada\`, \`imagem em movimento bidimensional\`, \`dados computacionais\`.
2. **Tipo de Mídia (*Media Type* - Campo MARC 337):**
   * Refere-se ao tipo de dispositivo ou aparelho intermediário necessário para visualizar, executar ou acessar o conteúdo.
   * *Exemplos:* \`computador\`, \`áudio\`, \`vídeo\`, \`projetado\`, \`não mediado\` (para livros impressos que não exigem aparelho).
3. **Tipo de Suporte (*Carrier Type* - Campo MARC 338):**
   * Refere-se ao invólucro ou formato físico específico que armazena a mídia.
   * *Exemplos:* \`volume\` (para livros encadernados), \`disco óptico\` (CD/DVD), \`recurso online\`, \`cartão de memória\`.

---

### 3. O Princípio da Representação: "Take What You See"

O RDA estabelece o princípio de transcrever os dados exatamente como aparecem na fonte primária de informação:
* **Fim das Abreviaturas Latinas:**
  * No AACR2r, se faltava o local de publicação, registrava-se \`[S.l.]\` (*sine loco*); se faltava o editor, \`[s.n.]\` (*sine nomine*).
  * No RDA, essas abreviaturas são PROIBIDAS. Registra-se em linguagem clara e no idioma da catalogação: \`[lugar de publicação não identificado]\` e \`[editor não identificado]\`.
* **Fim do Limite Restritivo de Três Autores:**
  * No AACR2r, com mais de 3 autores, registrava-se apenas o primeiro seguido de \`[et al.]\`.
  * No RDA, a regra geral permite e recomenda a transcrição de **todos os autores** nomeados na fonte, garantindo autoria e recuperação completa, embora faculte à agência estabelecer limites locais caso haja um número excessivo (ex.: centenas de autores num artigo médico).
* **Correção de Erros de Impressão:**
  * No AACR2r, erros tipográficos no título eram transcritos seguidos de \`[sic]\` ou \`[i.e. correção]\`.
  * No RDA, transcreve-se o título exatamente como está grafado e insere-se uma nota explicativa ou um título variante corrigido como ponto de acesso secundário.`,
  checkpoints: [
    {
      id: 'cp-2-2-1',
      pergunta: 'Micro-Checkpoint 1: O Padrão RDA e a Designação Geral do Material (DGM)',
      item: 'Na transição do código AACR2r para o padrão RDA, a designação geral do material (DGM) foi extinta, sendo substituída pelo conjunto articulado de três novos atributos: tipo de conteúdo, tipo de mídia e tipo de suporte.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a substituição estrutural mais célebre do RDA, refletida nos campos 336, 337 e 338 do MARC 21.',
    },
    {
      id: 'cp-2-2-2',
      pergunta: 'Micro-Checkpoint 2: Codificação de Dados RDA no Formato MARC 21',
      item: 'Por ser um padrão moderno voltado à Web Semântica, o RDA impede o uso do formato MARC 21, exigindo que as bibliotecas adotem exclusivamente bancos de dados em grafos RDF sem qualquer interoperabilidade com sistemas legados.',
      gabarito: 'E',
      justificativa: 'Errado! O formato MARC 21 foi amplamente atualizado pela Library of Congress para codificar perfeitamente todos os dados e elementos do RDA.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-2-1',
        periodo: '2004',
        disciplina: 'Comitê Diretor Conjunto (JSC)',
        focoPrincipal: 'Decisão histórica de abandonar o AACR3 e desenvolver um novo padrão baseado em modelos conceituais',
        figuraChave: 'Joint Steering Committee',
      },
      {
        id: 'tl-2-2-2',
        periodo: '2010',
        disciplina: 'Publicação do RDA',
        focoPrincipal: 'Lançamento do Toolkit do RDA e início dos testes pela Library of Congress, British Library e parceiros',
        figuraChave: 'Barbara Tillett e Tom Delsey',
      },
      {
        id: 'tl-2-2-3',
        periodo: '2013 / Presente',
        disciplina: 'Implementação Global',
        focoPrincipal: 'Adoção plena pelas bibliotecas nacionais e atualização para o modelo consolidado IFLA LRM',
        figuraChave: 'RDA Steering Committee (RSC)',
      },
    ],
    autores: [
      {
        id: 'aut-2-2-1',
        nome: 'Barbara Tillett',
        ano: 2011,
        obraPrincipal: 'RDA: Resource Description & Access — What it is and how to use it',
        ideiaChave: 'A catalogação como teia de relações na Web Semântica centrada no usuário e não no livro físico.',
        chipPegadinha: 'Tillett foi a principal porta-voz da transição do AACR2 para o RDA na Library of Congress.',
      },
      {
        id: 'aut-2-2-2',
        nome: 'Tom Delsey',
        ano: 2008,
        obraPrincipal: 'Mapping RDA to FRBR and FRAD',
        ideiaChave: 'Arquiteto da modelagem conceitual que alinhou cada instrução do RDA às entidades e atributos do FRBR.',
        chipPegadinha: 'O RDA é a aplicação prática direta do modelo FRBR/LRM.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-2-1',
        afirmacao: 'O RDA mantém a mesma terminologia tradicional do AACR2r para os pontos de acesso, preservando a expressão "cabeçalho de assunto" e "título uniforme".',
        gabarito: 'E',
        porQue: 'O RDA substituiu "cabeçalho" por "ponto de acesso autorizado" e "título uniforme" por "título preferencial".',
      },
      {
        id: 'peg-2-2-2',
        afirmacao: 'Na ausência de indicação do local de publicação na obra, o catalogador sob as diretrizes do RDA deve obrigatoriamente registrar a abreviatura latina [S.l.].',
        gabarito: 'E',
        porQue: 'O RDA baniu [S.l.] e [s.n.]. Em seu lugar, registra-se por extenso: [lugar de publicação não identificado].',
      },
    ],
  },
};
