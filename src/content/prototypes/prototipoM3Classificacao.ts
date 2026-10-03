import type { CebraspeQuestion } from '../../domain/types';

export const prototipoM3Classificacao: CebraspeQuestion[] = [
  {
    id: 'e4-m3-01',
    numero: 1,
    macroModuloId: 'M3',
    submoduloId: '3.1',
    item: 'A Classificação Decimal de Dewey (CDD) estrutura o conhecimento humano em dez classes principais (000 a 900) e adota o princípio da notação decimal pura composta exclusivamente por algarismos arábicos, na qual a hierarquia dos assuntos é refletida pela extensão da notação.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. A CDD emprega notação decimal pura (algarismos arábicos de 0 a 9) e estrutura hierárquica por subordinação lógica (Dewey, 23ª ed.). Quanto mais específica a matéria, mais dígitos são adicionados após o ponto decimal que sucede as três primeiras cifras.',
    armadilhaBanca: 'Assertiva correta conceitual sobre a notação pura decimal da CDD.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-02',
    numero: 2,
    macroModuloId: 'M3',
    submoduloId: '3.1',
    item: 'Conforme a metodologia da CDD 23ª edição, a Tabela 1 (Subdivisões Padrão) e a Tabela 2 (Áreas Geográficas) podem ser utilizadas como notações autônomas para a representação de documentos que tratem exclusivamente de métodos de pesquisa ou de um determinado país.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Categórico Absoluto / Regra de Aplicação]: Na CDD, os números das Tabelas Auxiliares (T1 a T6) NUNCA podem ser utilizados isoladamente como números de classificação autônomos. Eles obrigatoriamente exigem um número-base extraído das tabelas principais ao qual serão agregados.',
    armadilhaBanca: 'Afirmação de que tabelas auxiliares da CDD podem ser usadas isoladamente.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-03',
    numero: 3,
    macroModuloId: 'M3',
    submoduloId: '3.2',
    item: 'Na Classificação Decimal Universal (CDU), o sinal de dois pontos simples (:) é empregado para expressar a relação coordenada reversível entre dois ou mais assuntos independentes, permitindo a inversão da ordem dos elementos na busca e na catalogação.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. O sinal de dois pontos simples (:) na CDU indica relação simples reversível (ex.: 17:7 Ética com relação à Arte, ou 7:17 Arte com relação à Ética). Trata-se de um sinal relacional que viabiliza a permutação de pontos de acesso.',
    armadilhaBanca: 'Assertiva canônica correta sobre a reversibilidade do sinal de relação simples da CDU.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-04',
    numero: 4,
    macroModuloId: 'M3',
    submoduloId: '3.2',
    item: 'Na CDU, o sinal de dois pontos duplos (::) possui a mesma função semântica do sinal de adição (+), sendo empregado para unir dois conceitos independentes e indicar que o documento deve ser classificado em ambos os lugares com possibilidade de intercalação reversível.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão Relacional]: Na CDU, o sinal de dois pontos duplos (::) representa uma relação de ORDENAÇÃO FIXA e NÃO REVERSÍVEL (relação subordinante/fixa), indicando que o segundo conceito apenas qualifica o primeiro e não deve ser invertido. A adição simples reversível de assuntos não conexos utiliza o sinal de mais (+).',
    armadilhaBanca: 'Confusão deliberada entre relação reversível (+ ou :) e relação fixa irreversível (::).',
    dificuldade: 'dificil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-05',
    numero: 5,
    macroModuloId: 'M3',
    submoduloId: '3.2',
    item: 'A Classificação Decimal de Direito (CDDir), concebida por Doris de Queiroz Carvalho, constitui uma adaptação sistemática do Direito Positivo Brasileiro e dos sistemas jurídicos romano-germânicos, alocando o Direito Público Constitucional e Administrativo na subclasse 342 e o Direito Processual Civil na subclasse 345.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Na CDDir de Doris de Queiroz Carvalho, a classe 340 subdivide-se atendendo perfeitamente ao ordenamento jurídico nacional: 341 (Direito Internacional), 342 (Direito Público, Constitucional e Administrativo), 343 (Direito Penal), 344 (Direito Social, Trabalho e Previdência), 345 (Direito Processual Civil), 346 (Direito Civil) e 347 (Direito Comercial/Empresarial).',
    armadilhaBanca: 'Assertiva precisa sobre a estrutura da CDDir de Doris de Queiroz Carvalho.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-06',
    numero: 6,
    macroModuloId: 'M3',
    submoduloId: '3.2',
    item: 'Por ter sido desenvolvida no Brasil na década de 1970, a Classificação Decimal de Direito de Doris de Queiroz Carvalho adota notação mista alfanumérica obrigatória em todas as suas classes, sendo incompatível com a notação decimal tradicional da CDD.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Categórico Falso]: A CDDir é DECIMAL e baseia-se exatamente na classe 340 da CDD e da CDU, preservando a notação numérica decimal em dígitos puros arábicos, sendo plenamente integrável e compatível com sistemas de classificação decimal.',
    armadilhaBanca: 'Afirmação de que a CDDir adota notação mista alfanumérica obrigatória.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-07',
    numero: 7,
    macroModuloId: 'M3',
    submoduloId: '3.3',
    item: 'O processo de indexação documentária preconizado por Lancaster é constituído fundamentalmente por duas etapas sequenciais: a análise conceitual, na qual se examina o documento e identificam-se os conceitos temáticos, e a tradução, na qual os conceitos identificados são convertidos para termos de uma linguagem documentária ou vocabulário controlado.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme Lancaster (1993) e a NBR 12676, a indexação de assuntos divide-se estritamente em: 1) Análise conceitual (leitura técnica, determinação do assunto central e seleção de conceitos); 2) Tradução dos conceitos para os termos autorizados da linguagem de indexação.',
    armadilhaBanca: 'Definição canônica clássica de Lancaster para as etapas da indexação.',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-08',
    numero: 8,
    macroModuloId: 'M3',
    submoduloId: '3.3',
    item: 'Em sistemas de recuperação da informação, o aumento da exaustividade na indexação de um acervo — caracterizado pela atribuição de um número elevado de termos a cada documento — resulta necessariamente no aumento da precisão da busca, reduzindo o número de documentos irrelevantes recuperados.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão Métrica]: A exaustividade elevada faz com que mais termos sejam atribuídos ao documento, aumentando a REVOCAÇÃO (probabilidade de encontrar o documento em buscas amplas) e DIMINUINDO a precisão (aumento de ruído e falsas recuperações). A alta precisão está correlacionada à especificidade da indexação, e não à exaustividade.',
    armadilhaBanca: 'Inversão clássica do Cebraspe entre exaustividade (revocação) e especificidade (precisão).',
    dificuldade: 'dificil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-09',
    numero: 9,
    macroModuloId: 'M3',
    submoduloId: '3.4',
    item: 'Em um tesauro documentário estruturado conforme as normas internacionais, a relação hierárquica entre um Termo Geral (TG) e um Termo Específico (TE) reflete uma relação intrínseca do tipo gênero-espécie ou todo-parte, devendo ser simétrica e recíproca.',
    gabarito: 'C',
    justificativa:
      'Gabarito CERTO. Conforme a ISO 25964 e Gomes & Campos, a relação hierárquica (TG/TE) é estritamente simétrica e recíproca: se o conceito A é Termo Geral (TG) de B, obrigatoriamente o conceito B deve figurar como Termo Específico (TE) de A, fundamentada em subordinação lógica (gênero/espécie, todo/parte ou classe/membro).',
    armadilhaBanca: 'Conceito canônico sobre reciprocidade estrutural das relações em tesauros.',
    dificuldade: 'media',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
  {
    id: 'e4-m3-10',
    numero: 10,
    macroModuloId: 'M3',
    submoduloId: '3.4',
    item: 'Nos tesauros documentários, a relação de equivalência entre termos preferidos e não preferidos é representada exclusivamente pelo operador Termo Relacionado (TR), indicando que os descritores possuem correlação semântica contingente.',
    gabarito: 'E',
    justificativa:
      'Gabarito ERRADO. [Armadilha de Inversão Semântica]: A relação de equivalência (sinonímia ou quase-sinonímia) é representada pelos operadores USE (remete do termo não autorizado para o autorizado) e UP / Usado Para (remete do termo autorizado para o não autorizado). O operador TR (Termo Relacionado) representa a relação ASSOCIATIVA, e não a de equivalência.',
    armadilhaBanca: 'Confusão deliberada entre relação de equivalência (USE/UP) e associativa (TR).',
    dificuldade: 'facil',
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Inédita Cebraspe (Fase E4 / Validação M3)',
      verificado: true,
    },
  },
];
