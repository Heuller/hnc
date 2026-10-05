import type { ModuloFilho } from '../../../domain/types';

export const submodulo104: ModuloFilho = {
  id: 'sub-10-4',
  numero: '10.4',
  titulo: 'Noções de Direito Constitucional Aplicadas ao Processo Legislativo',
  descricaoCurta: 'Constituição Federal de 1988: conceito, características, princípios fundamentais (arts. 1º a 4º), direitos e garantias fundamentais (art. 5º e remédios constitucionais), direitos políticos (arts. 14 a 17), organização do Estado (arts. 18 a 36) e a Administração Pública na CF/88 (arts. 37 a 41).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Constituição Federal de 1988', 'José Afonso da Silva', 'Gilmar Ferreira Mendes', 'Alexandre de Moraes', 'Pedro Lenza'],
  alertasCebraspe: [
    'Classificação da CF/88: é Formal, Escrita, Dogmática, Promulgada (votada/popular), Rígida (alterável somente por rito especial de 3/5 em 2 turnos), Analítica (extensa e detalhista) e Dirigente (programática, orientada a metas socioeconômicas).',
    'Fundamentos vs. Objetivos da República: o Cebraspe troca sistematicamente os fundamentos (art. 1º - mnemônico SO-CI-DI-VA-PLU: Soberania, Cidadania, Dignidade da pessoa humana, Valores sociais do trabalho e da livre iniciativa, Pluralismo político) com os objetivos fundamentais (art. 3º - mnemônico CON-GAR-ER-PRO: Construir, Garantir, Erradicar e Promover - todos iniciados por verbos no infinitivo!).',
    'Remédios Constitucionais do Art. 5º: Habeas Corpus (liberdade de locomoção - gratuito); Habeas Data (conhecimento ou retificação de dados pessoais em bancos de dados governamentais ou de caráter público - gratuito); Mandado de Segurança (direito líquido e certo residual contra ilegalidade ou abuso de autoridade pública); Mandado de Injunção (falta de norma regulamentadora que inviabilize direito fundamental); Ação Popular (qualquer cidadão contra ato lesivo ao patrimônio, moralidade ou meio ambiente - isento de custas, salvo comprovada má-fé).',
    'Organização do Estado (arts. 18 a 36): os entes federados (União, Estados, Distrito Federal e Municípios) são dotados de AUTONOMIA política, legislativa e financeira, mas NÃO de soberania (a soberania é atributo exclusivo e indivisível da República Federativa do Brasil perante a ordem internacional). A vedação à secessão é garantida pela intervenção federal.',
    'Regime Jurídico dos Servidores na CF/88 (arts. 37 a 41): obedece aos princípios LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência). Concurso público tem prazo de validade de até 2 anos (prorrogável uma vez por igual período). A estabilidade é adquirida após 3 anos de efetivo exercício, exigindo aprovação em avaliação especial de desempenho.',
  ],
  quadroComparativo: {
    titulo: 'Comparação: Fundamentos vs. Objetivos Fundamentais da República (CF/88)',
    colunas: ['Critério', 'Fundamentos da República (Art. 1º)', 'Objetivos Fundamentais da República (Art. 3º)'],
    linhas: [
      ['Natureza Jurídica', 'Pilares axiológicos e estruturais preexistentes da ordem constitucional', 'Metas programáticas e fins a serem alcançados pelo Estado e sociedade'],
      ['Mnemônico Cebraspe', 'SO-CI-DI-VA-PLU', 'CON-GAR-ER-PRO'],
      ['Itens Taxativos', 'Soberania, Cidadania, Dignidade humana, Valores sociais do trabalho, Pluralismo político', 'Construir sociedade livre/justa, Garantir desenvolvimento, Erradicar pobreza, Promover o bem de todos'],
      ['Identificação Rápida', 'Substantivos abstratos que qualificam o Estado de Direito', 'Formulado compulsoriamente com verbos no INFINITIVO'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Constituição Federal de 1988: Conceito, Características e Estrutura

A Carta Magna de 1988 ("Constituição Cidadã") é o ápice do ordenamento jurídico brasileiro (Silva, 2021; Mendes & Gonet, 2022):

* **Classificação Dogmática Canônica:**
  * **Origem:** Promulgada (democrática ou popular, originada de Assembleia Nacional Constituinte eleita pelo povo).
  * **Forma:** Escrita e codificada em documento solene único.
  * **Conteúdo:** Formal (todas as matérias contidas no texto possuem estatura constitucional suprema).
  * **Modo de Elaboração:** Dogmática (estruturada a partir das teorias e ideologias dominantes no momento de sua criação).
  * **Estabilidade:** Rígida (sua alteração exige rito legislativo qualificado e solene — quórum de 3/5 dos votos em dois turnos em cada Casa legislativa, art. 60 da CF/88).
  * **Extensão:** Analítica (minuciosa e extensa, disciplinando desde direitos individuais até o sistema tributário, orçamentário e previdenciário).
  * **Finalidade:** Dirigente (estabelece um plano de evolução social e metas estatais para as futuras gerações).
* **Estrutura do Texto Constitucional:**
  1. **Preâmbulo:** Documento de intenções políticas e axiológicas; não possui força normativa direta, nem serve de parâmetro para controle concentrado de constitucionalidade (STF, ADI 2.076).
  2. **Corpo Permanente:** Composto por 250 artigos de força jurídica vinculante plena.
  3. **Ato das Disposições Constitucionais Transitórias (ADCT):** Normas com eficácia temporária para a transição do regime anterior para o novo ordenamento, possuindo o mesmo status formal das normas constitucionais permanentes.

---

### 2. Princípios Fundamentais da República (Arts. 1º a 4º da CF/88)

* **Fundamentos (Art. 1º - SO-CI-DI-VA-PLU):**
  1. **SO**berania;
  2. **CI**dadania;
  3. **DI**gnidade da pessoa humana (núcleo essencial dos direitos fundamentais);
  4. **VA**lores sociais do trabalho e da livre iniciativa;
  5. **PLU**ralismo político (diversidade ideológica, partidária e filosófica).
* **Separação dos Poderes (Art. 2º):**
  * São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário. Adota o sistema de freios e contrapesos (*checks and balances*).
* **Objetivos Fundamentais (Art. 3º - CON-GAR-ER-PRO):**
  * I - **Construir** uma sociedade livre, justa e solidária;
  * II - **Garantir** o desenvolvimento nacional;
  * III - **Erradicar** a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;
  * IV - **Promover** o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.
* **Princípios das Relações Internacionais (Art. 4º):**
  * Independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos e concessão de asilo político.

---

### 3. Direitos e Garantias Fundamentais e os Remédios Constitucionais (Art. 5º)

Os direitos fundamentais vinculam diretamente os poderes públicos e os particulares (eficácia horizontal dos direitos fundamentais):

* **Remédios Constitucionais e suas Aplicações:**
  * **Habeas Corpus (art. 5º, LXVIII):** Protege a liberdade de locomoção corporal contra ilegalidade ou abuso de poder. É gratuito e dispensa representação por advogado.
  * **Habeas Data (art. 5º, LXXII):** Assegura o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, bem como para retificação de dados. É ação gratuita e personalíssima (não cabe para obter dados de terceiros).
  * **Mandado de Segurança (art. 5º, LXIX):** Protege direito líquido e certo, não amparado por HC ou HD, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público. Prazo decadencial de 120 dias para impetração.
  * **Mandado de Injunção (art. 5º, LXXI):** Concedido sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.
  * **Ação Popular (art. 5º, LXXIII):** Qualquer cidadão (eleitor) é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. O autor fica isento de custas judiciais e ônus da sucumbência, salvo comprovada má-fé.

---

### 4. Direitos Políticos e Partidos Políticos (Arts. 14 a 17 da CF/88)

* **Soberania Popular:** Exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e, nos termos da lei, mediante:
  * **Plebiscito:** Consulta popular prévia à formulação do ato legislativo ou administrativo.
  * **Referendo:** Consulta popular posterior à aprovação da lei para confirmação ou rejeição pelos cidadãos.
  * **Iniciativa Popular:** Apresentação à Câmara dos Deputados de projeto de lei subscrito por, no mínimo, 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com não menos de 0,3% dos eleitores de cada um deles.
* **Alistabilidade e Elegibilidade:**
  * O alistamento e o voto são obrigatórios para os maiores de 18 anos e facultativos para analfabetos, maiores de 70 anos e jovens entre 16 e 18 anos.

---

### 5. Organização do Estado e Administração Pública (Arts. 18 a 41 da CF/88)

* **Organização Político-Administrativa:**
  * A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal, todos autônomos.
  * *⚠️ Pegadinha Cebraspe:* A União, os Estados, o DF e os Municípios possuem autonomia política, administrativa e financeira, mas **não possuem soberania**. A soberania pertence com exclusividade à República Federativa do Brasil.
* **Servidores Públicos Civis (Arts. 37 a 41):**
  * A investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos.
  * A estabilidade do servidor público nomeado para cargo de provimento efetivo em virtude de concurso público ocorre após **3 anos de efetivo exercício**, condicionada à aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.`,
  checkpoints: [
    {
      id: 'cp-10-4-1',
      pergunta: 'Micro-Checkpoint 1: Classificação da CF/88 e Soberania Federativa',
      item: 'No ordenamento constitucional brasileiro, a União, os Estados-membros, o Distrito Federal e os Municípios são pessoas jurídicas dotadas de soberania nacional perante a comunidade internacional.',
      gabarito: 'E',
      justificativa: 'Errado! Os entes federados (União, Estados, DF e Municípios) possuem apenas AUTONOMIA. A SOBERANIA é atributo indivisível e exclusivo da República Federativa do Brasil.',
    },
    {
      id: 'cp-10-4-2',
      pergunta: 'Micro-Checkpoint 2: Fundamentos vs. Objetivos Fundamentais',
      item: 'A garantia do desenvolvimento nacional e a erradicação da pobreza e da marginalização constituem fundamentos da República Federativa do Brasil elencados no art. 1º da Constituição de 1988.',
      gabarito: 'E',
      justificativa: 'Errado! Desenvolvimento nacional e erradicação da pobreza são OBJETIVOS fundamentais da República (art. 3º - mnemônico CON-GAR-ER-PRO), e não fundamentos (art. 1º - SO-CI-DI-VA-PLU).',
    },
    {
      id: 'cp-10-4-3',
      pergunta: 'Micro-Checkpoint 3: Remédios Constitucionais - Habeas Data',
      item: 'O habeas data é a ação constitucional adequada para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme o art. 5º, LXXII, a, da CF/88, o habeas data destina-se a garantir o conhecimento ou retificação de informações pessoais do impetrante.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-4-1',
        periodo: '1988',
        disciplina: 'Constituição Cidadã',
        focoPrincipal: 'Promulgação da Constituição da República Federativa do Brasil de 1988',
        figuraChave: 'Ulysses Guimarães / Assembleia Nacional Constituinte',
      },
      {
        id: 'tl-10-4-2',
        periodo: '1998',
        disciplina: 'Reforma Administrativa',
        focoPrincipal: 'Emenda Constitucional nº 19/1998: inclusão do princípio da Eficiência no caput do art. 37 da CF/88',
        figuraChave: 'Congresso Nacional',
      },
    ],
    autores: [
      {
        id: 'aut-10-4-1',
        nome: 'José Afonso da Silva',
        ano: 2021,
        obraPrincipal: 'Curso de Direito Constitucional Positivo',
        ideiaChave: 'Eficácia das normas constitucionais (plena, contida e limitada) e classificação dogmática da CF/88.',
        chipPegadinha: 'A CF/88 é classificada como formal, escrita, dogmática, promulgada, rígida e analítica.',
      },
      {
        id: 'aut-10-4-2',
        nome: 'Gilmar Mendes e Paulo Gonet',
        ano: 2022,
        obraPrincipal: 'Curso de Direito Constitucional',
        ideiaChave: 'Teoria dos direitos fundamentais, dimensões/gerações, remédios constitucionais e federação.',
        chipPegadinha: 'O Preâmbulo da CF/88 não possui força cogente nem serve de parâmetro para controle de constitucionalidade.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-4-1',
        afirmacao: 'O preâmbulo da Constituição Federal de 1988 possui eficácia jurídica plena e força vinculante, podendo servir de parâmetro exclusivo para a declaração de inconstitucionalidade de lei em sede de ADI.',
        gabarito: 'E',
        porQue: 'Conforme pacífica jurisprudência do STF (ADI 2.076), o preâmbulo constitucional situa-se no campo da política e da ideologia, carecendo de força normativa cogente.',
      },
      {
        id: 'peg-10-4-2',
        afirmacao: 'Constituem fundamentos da República Federativa do Brasil a erradicação da pobreza e a garantia do desenvolvimento nacional.',
        gabarito: 'E',
        porQue: 'A erradicação da pobreza e o desenvolvimento nacional são OBJETIVOS fundamentais (art. 3º), e não fundamentos (art. 1º).',
      },
    ],
  },
};
