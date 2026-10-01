import type { ModuloFilho } from '../../../domain/types';

export const submodulo53: ModuloFilho = {
  id: 'sub-5-3',
  numero: '5.3',
  titulo: 'Política de Desenvolvimento de Coleções: Seleção, Aquisição, Desbaste e Avaliação',
  descricaoCurta: 'O modelo cíclico de Waldomiro Vergueiro, documento formal de política de seleção, critérios e agentes, modalidades de aquisição, desbastamento vs. descarte, política de crescimento zero e métodos de avaliação do acervo (Conspectus e Figueiredo).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Waldomiro Vergueiro', 'Nice Menezes de Figueiredo', 'Peggy Johnson', 'Daniel Gore', 'Evans'],
  alertasCebraspe: [
    'A política de desenvolvimento de coleções é um documento formal que possui tríplice caráter: administrativo, político e de relações públicas. O Cebraspe adora afirmar que seu caráter é "exclusivamente administrativo" ou "meramente técnico": ERRADO!',
    'Não confunda desbastamento (relocação/remanejamento de itens de baixa circulação para depósitos ou áreas secundárias) com descarte (eliminação definitiva ou baixa patrimonial). O desbastamento precede e nem sempre resulta em descarte.',
    'A política de "crescimento zero" (zero growth), proposta por Daniel Gore, determina que o acervo físico deve estabilizar em determinado limite de volume: a cada novo livro que entra, outro menos utilizado deve sair para desbaste ou descarte. O Cebraspe tenta associar isso falsamente a bibliotecas que não têm verbas ou que só recebem doações!',
    'No modelo de Vergueiro, a comunidade de usuários é subsídio para TODAS as etapas do processo cíclico, sem exceção.',
    'Métodos qualitativos de avaliação (ex.: método impressionista por especialistas) possuem ressalvas: o especialista conhece bem a literatura da área, mas frequentemente desconhece o perfil e as necessidades dos usuários daquela biblioteca específica.',
  ],
  quadroComparativo: {
    titulo: 'As Seis Fases do Modelo Cíclico de Desenvolvimento de Coleções (Vergueiro)',
    colunas: ['Fase do Ciclo', 'Objetivo Central', 'Atores Envolvidos', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['1. Estudo da Comunidade', 'Mapear as necessidades, interesses e características dos usuários reais e potenciais', 'Bibliotecário e comunidade de usuários', 'Afirmar que o estudo da comunidade só importa para a seleção, ignorando o descarte e a avaliação.'],
      ['2. Políticas de Seleção', 'Estabelecer critérios, prioridades, instrumentos e diretrizes formais escritas', 'Comissão de seleção (bibliotecários, especialistas, direção)', 'Dizer que a política é prescindível por serem mutáveis as demandas da biblioteca.'],
      ['3. Seleção', 'Decidir quais obras específicas farão ou não parte do acervo', 'Bibliotecários e especialistas/comissão', 'Confundir seleção (decisão intelectual) com aquisição (procedimento operacional).'],
      ['4. Aquisição', 'Efetivar a incorporação das obras selecionadas (compra, doação, permuta)', 'Setor de aquisição, compras e administração patrimonial', 'Afirmar que a aquisição é feita de forma avulsa e sem planejamento financeiro prévio.'],
      ['5. Desbastamento / Descarte', 'Reavaliar a pertinência física do acervo: remanejamento e expurgo', 'Bibliotecários e comissão técnica', 'Confundir desbastamento (mudar de lugar) com descarte (saída definitiva do patrimônio).'],
      ['6. Avaliação da Coleção', 'Verificar o grau de adequação do acervo aos objetivos institucionais e demandas', 'Bibliotecários e avaliadores externos', 'Considerar que métodos quantitativos de contagem de livros são suficientes para atestar qualidade.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Conceito e a Evolução do Desenvolvimento de Coleções

Conforme **Waldomiro Vergueiro** (*Desenvolvimento de Coleções*, 1989; *Seleção de Materiais de Informação*, presentes em nosso acervo \`Gestão e Coleções\`), o termo "Desenvolvimento de Coleções" substituiu a antiga e reducionista expressão "Seleção e Aquisição". Trata-se de um **processo dinâmico, contínuo, planejado e cíclico** que abrange o ciclo de vida documental na unidade de informação.

#### A. O Modelo Cíclico de Waldomiro Vergueiro
O desenvolvimento de coleções constitui um sistema de seis fases interdependentes que se retroalimentam:
1. **Estudo da Comunidade:** Identificação de carências informacionais e perfil sociocultural da população-alvo.
2. **Políticas de Seleção:** Elaboração de documento oficial e formalizado aprovado pela administração.
3. **Seleção:** Processo decisório intelectual de triagem do que deve integrar a coleção.
4. **Aquisição:** Operacionalização da posse ou do acesso aos documentos.
5. **Desbastamento e Descarte:** Gestão do espaço e da vitalidade da coleção.
6. **Avaliação da Coleção:** Diagnóstico da representatividade e uso da coleção.

---

### 2. O Documento de Política de Seleção e seus Critérios

O documento de política de desenvolvimento de coleções é o sustentáculo da gestão do acervo:
* **Funções Canônicas:**
  1. *Caráter Administrativo:* Padroniza rotinas, orienta compras e planeja recursos financeiros.
  2. *Caráter Político:* Protege a biblioteca e o bibliotecário contra pressões externas, censura ideológica e pedidos arbitrários de indivíduos ou dirigentes.
  3. *Caráter de Relações Públicas:* Esclarece à comunidade acadêmica ou parlamentar as regras transparentes de aceitação de doações e prioridades de compras.
* **Critérios para Seleção de Documentos:**
  * **Relativos ao Conteúdo:** Autoridade do autor/editor, exatidão e precisão dos fatos, atualidade da temática, imparcialidade e profundidade.
  * **Relativos ao Usuário:** Grau de adequação ao nível cognitivo, estilo, idioma e interesse dos públicos reais e potenciais.
  * **Relativos ao Suporte / Aspectos Físicos:** Durabilidade, legibilidade, formato (impresso vs. digital), facilidade de manuseio e requisitos tecnológicos de acesso.
  * **Relativos ao Custo:** Preço em relação ao orçamento disponível e relação custo-benefício.

---

### 3. Modalidades de Aquisição, Desbastamento e Crescimento Zero

#### A. Formas de Aquisição
* **Compra:** Aquisição onerosa que exige planejamento orçamentário, respeito à legislação licitatória (Lei 14.133/21 no setor público) e listas de desejos (*desideratas*).
* **Doação:** Nem toda doação deve ser aceita. A política deve estabelecer critérios rígidos de descarte prévio de doações que não atendam ao escopo da biblioteca ou que contenham danos físicos irreversíveis.
* **Permuta (Intercâmbio):** Troca sistemática de publicações institucionais entre entidades congêneres (muito comum entre órgãos dos Poderes Legislativo e Judiciário).

#### B. Desbastamento vs. Descarte
* **Desbastamento (*Weeding*):** Processo de retirada de documentos de pouca frequência de uso das estantes de acesso direto para áreas de depósito ou armazenamento compacto (estantes deslizantes), preservando a integridade física do acervo e desafogando as estantes ativas.
* **Descarte:** Retirada definitiva do documento da instituição (baixa patrimonial), por desatualização irreversível, obsolescência conceitual grave, ou deterioração física total. Pode resultar em doação a outras entidades ou destruição/reciclagem.
* **Política de Crescimento Zero (*Zero Growth* - Daniel Gore):** Conceito que propõe que uma biblioteca madura atinja um equilíbrio físico estável: o número de títulos descartados ou remanejados deve igualar o número de novas aquisições, impedindo a expansão física infinita dos prédios.

---

### 4. Métodos de Avaliação de Coleções (Figueiredo, 1994)

* **Métodos Quantitativos:**
  * Volume total de títulos e volumes; taxa de crescimento anual; fórmula de Clapp-Jordan.
  * Estatísticas de uso: empréstimos por classe, contagem de consultas internas, consultas remotas ao catálogo e downloads.
* **Métodos Qualitativos:**
  * **Opinião de Especialistas (Método Impressionista):** Consulta a docentes ou juristas para julgar a coleção. *Ressalva da banca:* o especialista domina a literatura teórica, mas muitas vezes desconhece a realidade e demanda prática dos demais usuários da unidade.
  * **Listas de Verificação (*Checklists*):** Confrontação do acervo da biblioteca contra bibliografias especializadas e catálogos padrão reconhecidos.
* **O Modelo *Conspectus* (WLN / RLG):**
  Classifica os níveis de cobertura do acervo em 6 categorias padronizadas:
  * \`Nível 0\`: Fora do escopo da biblioteca (*Out of scope*).
  * \`Nível 1\`: Mínimo (*Minimal*).
  * \`Nível 2\`: Informação Básica (*Basic*).
  * \`Nível 3\`: Suporte a Estudo ou Ensino (*Study or Instructional Support*).
  * \`Nível 4\`: Pesquisa (*Research*).
  * \`Nível 5\`: Completeza / Abrangência Total (*Comprehensive*).`,
  checkpoints: [
    {
      id: 'cp-5-3-1',
      pergunta: 'Micro-Checkpoint 1: Política de Seleção e suas Funções',
      item: 'O documento formal de política de desenvolvimento de coleções de uma biblioteca possui finalidades exclusivamente técnicas e administrativas, não exercendo papel na mediação de conflitos ou na proteção institucional do profissional.',
      gabarito: 'E',
      justificativa: 'Errado! A política possui caráter administrativo, político e de relações públicas, servindo justamente como escudo institucional contra pressões e censura.',
    },
    {
      id: 'cp-5-3-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Desbastamento e Descarte',
      item: 'Enquanto o desbastamento compreende o remanejamento de materiais para locais de menor acesso sem retirá-los da custódia da biblioteca, o descarte consiste na eliminação definitiva ou na baixa patrimonial do documento.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a distinção clássica consolidada por Vergueiro e cobrada com frequência pelo Cebraspe.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-3-1',
        periodo: '1976',
        disciplina: 'Gestão de Acervos',
        focoPrincipal: 'Formulação do conceito de "Biblioteca de Crescimento Zero" (Zero-Growth Library)',
        figuraChave: 'Daniel Gore',
      },
      {
        id: 'tl-5-3-2',
        periodo: '1989',
        disciplina: 'Desenvolvimento de Coleções',
        focoPrincipal: 'Consolidação do modelo cíclico de desenvolvimento de coleções no Brasil',
        figuraChave: 'Waldomiro Vergueiro',
      },
      {
        id: 'tl-5-3-3',
        periodo: '1994',
        disciplina: 'Avaliação de Coleções',
        focoPrincipal: 'Sistematização de metodologias quantitativas e qualitativas de avaliação de acervos',
        figuraChave: 'Nice Menezes de Figueiredo',
      },
    ],
    autores: [
      {
        id: 'aut-5-3-1',
        nome: 'Waldomiro Vergueiro',
        ano: 1989,
        obraPrincipal: 'Desenvolvimento de coleções',
        ideiaChave: 'Modelo cíclico de 6 fases; documento formal de seleção como proteção política e administrativa.',
        chipPegadinha: 'A comunidade de usuários é insumo indispensável em todas as fases, incluindo aquisição.',
      },
      {
        id: 'aut-5-3-2',
        nome: 'Nice Menezes de Figueiredo',
        ano: 1994,
        obraPrincipal: 'Metodologias para avaliação de coleções',
        ideiaChave: 'Classificação dos métodos de avaliação em quantitativos (estatísticas, circulação) e qualitativos (checklists, especialistas).',
        chipPegadinha: 'Método impressionista de especialistas tem a falha de não conhecer a demanda real do usuário local.',
      },
      {
        id: 'aut-5-3-3',
        nome: 'Daniel Gore',
        ano: 1976,
        obraPrincipal: 'Farewell to Alexandria: solutions to space, growth, and performance problems of libraries',
        ideiaChave: 'Crescimento Zero: equilíbrio entre aquisições e desbaste/descarte para manter o acervo funcional.',
        chipPegadinha: 'Crescimento zero não significa falta de verba nem ausência de compras, mas estabilização volumétrica.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-3-1',
        afirmacao: 'O conceito de crescimento zero aplica-se exclusivamente a bibliotecas comunitárias sem orçamento que vivem de doações.',
        gabarito: 'E',
        porQue: 'A teoria de Daniel Gore é uma estratégia de gestão de espaço físico e renovação de acervo, aplicável a grandes bibliotecas universitárias e de pesquisa.',
      },
      {
        id: 'peg-5-3-2',
        afirmacao: 'No modelo de desenvolvimento de coleções de Vergueiro, as necessidades da comunidade servem como subsídio para a seleção e avaliação, mas são dispensáveis na etapa de aquisição.',
        gabarito: 'E',
        porQue: 'O modelo é sistêmico: o estudo da comunidade orienta e subsidia todas as etapas do ciclo documental, inclusive a aquisição (formatos, velocidade e canais adequados).',
      },
    ],
  },
};
