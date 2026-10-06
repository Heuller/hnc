import type { ModuloFilho } from '../../../domain/types';

export const submodulo104: ModuloFilho = {
  id: 'sub-10-4',
  numero: '10.4',
  titulo: 'Noções de Direito Constitucional Aplicadas ao Processo Legislativo',
  descricaoCurta: 'Constituição Federal de 1988: conceito, características, princípios fundamentais (arts. 1º a 4º), direitos e garantias fundamentais (art. 5º e remédios constitucionais), organização político-administrativa (arts. 18 a 36) e a Administração Pública na CF/88 (arts. 37 a 41).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Constituição Federal de 1988', 'José Afonso da Silva', 'Gilmar Mendes & Paulo Gonet', 'Alexandre de Moraes', 'Pedro Lenza'],
  alertasCebraspe: [
    'Classificação Dogmática da CF/88: é Formal, Escrita, Dogmática, Promulgada (democrática/votada), Rígida (alterável somente por rito especial de 3/5 em 2 turnos nas duas Casas), Analítica (extensa e minuciosa) e Dirigente (programática, orientada a metas futuras).',
    'Preâmbulo Constitucional (STF, ADI 2.076): não possui força normativa cogente, não constitui norma de reprodução obrigatória para os Estados e não serve de parâmetro autônomo para o controle concentrado de constitucionalidade.',
    'Fundamentos vs. Objetivos Fundamentais da República: o Cebraspe troca sistematicamente os Fundamentos (art. 1º - mnemônico SO-CI-DI-VA-PLU) com os Objetivos Fundamentais (art. 3º - mnemônico CON-GAR-ER-PRO - formulados obrigatoriamente com verbos no infinitivo!).',
    'Remédios Constitucionais do Art. 5º: Habeas Corpus (locomoção física - gratuito); Habeas Data (conhecimento ou retificação de dados pessoais em registros públicos - gratuito); Mandado de Segurança (direito líquido e certo residual contra ilegalidade/abuso - prazo de 120 dias); Mandado de Injunção (falta de norma regulamentadora inviabilizando direito); Ação Popular (proposta por cidadão contra ato lesivo ao patrimônio/moralidade - isento de custas, salvo má-fé).',
    'Organização Federativa (arts. 18 a 36): os entes federados (União, Estados, DF e Municípios) são dotados de AUTONOMIA política, administrativa e financeira, mas NÃO possuem soberania. A soberania é atributo exclusivo e indivisível da República Federativa do Brasil.',
    'Regime dos Servidores na CF/88 (arts. 37 a 41): princípios LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência). Concurso público tem validade de até 2 anos (prorrogável 1x por igual período). A estabilidade ocorre após 3 ANOS de efetivo exercício, condicionada à avaliação especial de desempenho.',
  ],
  quadroComparativo: {
    titulo: 'Comparação: Fundamentos vs. Objetivos Fundamentais da República (CF/88)',
    colunas: ['Critério Comparativo', 'Fundamentos da República (Art. 1º)', 'Objetivos Fundamentais da República (Art. 3º)'],
    linhas: [
      ['Natureza Jurídica', 'Pilares axiológicos e estruturais preexistentes da ordem constitucional', 'Metas programáticas e fins a serem alcançados pelo Estado e sociedade'],
      ['Mnemônico Cebraspe', 'SO-CI-DI-VA-PLU', 'CON-GAR-ER-PRO'],
      ['Itens Taxativos', 'Soberania, Cidadania, Dignidade humana, Valores sociais do trabalho, Pluralismo político', 'Construir sociedade livre/justa, Garantir desenvolvimento, Erradicar pobreza, Promover o bem de todos'],
      ['Identificação Rápida', 'Substantivos abstratos que qualificam o Estado Democrático de Direito', 'Formulados compulsoriamente com verbos de ação no INFINITIVO'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Constituição Federal de 1988: Conceito, Classificação e Estrutura

A Carta Magna de 1988 ("Constituição Cidadã") ocupa o ápice da pirâmide normativa brasileira (Kelsen), servindo de fundamento de validade para todas as leis e atos do Poder Público (Silva, 2021; Mendes & Gonet, 2022):

\`\`\`mermaid
flowchart TD
    CF["Classificação Dogmática da CF/88"]
    CF --> C1["Origem: PROMULGADA (Democrática / Votada pelo povo via Constituinte)"]
    CF --> C2["Forma: ESCRITA (Codificada em documento solene)"]
    CF --> C3["Conteúdo: FORMAL (Todas as matérias no texto possuem status supremo)"]
    CF --> C4["Modo: DOGMÁTICA (Sistematiza os valores dominantes no momento constituinte)"]
    CF --> C5["Estabilidade: RÍGIDA (Alteração exige rito solene e quórum de 3/5 em 2 turnos)"]
    CF --> C6["Extensão: ANALÍTICA (Minuciosa, extensa e detalhista)"]
    CF --> C7["Finalidade: DIRIGENTE (Estabelece metas e programas socioeconômicos futuros)"]
\`\`\`

#### A. Estrutura do Texto Constitucional
1. **Preâmbulo:** Documento introdutório de intenções políticas, filosóficas e religiosas. Segundo jurisprudência pacífica e reiterada do Supremo Tribunal Federal (**STF, ADI 2.076 — Pegadinha Clássica Cebraspe**):
   * O preâmbulo **não possui força normativa cogente** nem eficácia jurídica vinculante;
   * Não constitui norma de reprodução obrigatória para as Constituições estaduais ou Leis Orgânicas municipais;
   * Não serve de parâmetro autônomo para o controle concentrado de constitucionalidade de leis em sede de ADI.
2. **Corpo Permanente:** Composto por 250 artigos dotados de plena eficácia jurídica e força imperativa vinculante.
3. **Ato das Disposições Constitucionais Transitórias (ADCT):** Normas com eficácia temporal destinada a regular a transição entre a ordem jurídica anterior e o novo regime constitucional. Possui o **mesmo nível hierárquico formal** das normas permanentes da Constituição.

---

### 2. Princípios Fundamentais da República (Arts. 1º a 4º da CF/88)

#### A. Os Fundamentos da República (Art. 1º - Mnemônico SO-CI-DI-VA-PLU):
A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:
1. **SO**berania;
2. **CI**dadania;
3. **DI**gnidade da pessoa humana (matriz axiológica de todo o sistema de direitos fundamentais);
4. **VA**lores sociais do trabalho e da livre iniciativa;
5. **PLU**ralismo político (garantia da diversidade ideológica, filosófica, social e partidária).

#### B. A Separação dos Poderes (Art. 2º da CF/88)
* São Poderes da União, **independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário**.
* Adota a teoria de Montesquieu aperfeiçoada pelo sistema de freios e contrapesos (*checks and balances*): cada poder possui **funções típicas** (preponderantes) e **funções atípicas** (secundárias):
  * O Poder Legislativo tem como função típica **legislar e fiscalizar** contábil e financeiramente os atos do Executivo; e como funções atípicas **administrar** seus serviços internos e **julgar** o Presidente e Ministros nos crimes de responsabilidade (Art. 52, I e II).
* A separação dos Poderes é **cláusula pétrea insuprimível** da ordem constitucional (Art. 60, § 4º, III).

#### C. Os Objetivos Fundamentais (Art. 3º - Mnemônico CON-GAR-ER-PRO):
Constituem objetivos fundamentais da República Federativa do Brasil:
* I - **Construir** uma sociedade livre, justa e solidária;
* II - **Garantir** o desenvolvimento nacional;
* III - **Erradicar** a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;
* IV - **Promover** o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.
*(Dica infalível Cebraspe: objetivos fundamentais expressam METAS de futuro e começam sempre com VERBOS NO INFINITIVO!).*

#### D. Princípios nas Relações Internacionais (Art. 4º):
Independência nacional; prevalência dos direitos humanos; autodeterminação dos povos; não intervenção; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; repúdio ao terrorismo e ao racismo; cooperação entre os povos para o progresso da humanidade; e concessão de asilo político. Parágrafo único: busca pela integração econômica, política, social e cultural dos povos da América Latina.

---

### 3. Direitos e Garantias Fundamentais e os Remédios Constitucionais (Art. 5º)

Os direitos fundamentais vinculam tanto o Estado quanto as relações particulares (eficácia horizontal dos direitos):

\`\`\`mermaid
flowchart TD
    REM["Os Cinco Remédios Constitucionais do Art. 5º"]
    REM --> HC["Habeas Corpus (inciso LXVIII)<br/>• Tutela a liberdade de locomoção corporal<br/>• Ação GRATUITA; dispensa advogado"]
    REM --> HD["Habeas Data (inciso LXXII)<br/>• Acesso ou retificação de dados pessoais em registros públicos<br/>• Ação GRATUITA; personalíssima"]
    REM --> MS["Mandado de Segurança (inciso LXIX)<br/>• Direito líquido e certo contra ilegalidade/abuso<br/>• Prazo decadencial de 120 dias"]
    REM --> MI["Mandado de Injunção (inciso LXXI)<br/>• Omissão legislativa que inviabiliza direito fundamental<br/>• Não cabe se houver norma aplicável"]
    REM --> AP["Ação Popular (inciso LXXIII)<br/>• Anular ato lesivo ao patrimônio, moralidade ou meio ambiente<br/>• Proposta por CIDADÃO (eleitor); isenta de custas"]
\`\`\`

#### A. Eficácia e Aplicabilidade das Normas Constitucionais (José Afonso da Silva):
* **Normas de Eficácia Plena:** Têm aplicabilidade direta, imediata e integral desde a promulgação da Constituição, produzindo todos os seus efeitos sem depender de lei posterior (ex.: Art. 5º, II - princípio da legalidade).
* **Normas de Eficácia Contida (Redutível):** Têm aplicabilidade direta, imediata, mas não integral. Produzem efeitos plenos desde logo, mas o constituinte conferiu ao legislador infraconstitucional a faculdade de restringir ou limitar o seu alcance (ex.: Art. 5º, XIII - "é livre o exercício de qualquer trabalho, ofício ou profissão, *atendidas as qualificações profissionais que a lei estabelecer*").
* **Normas de Eficácia Limitada:** Têm aplicabilidade indireta, mediata e diferida. Não produzem plenamente seus efeitos com a simples promulgação, dependendo obrigatoriamente da edição de lei posterior integrativa (ex.: Art. 37, VII - direito de greve dos servidores públicos).

#### B. Regime dos Remédios Constitucionais em Concursos:
1. **Habeas Data:** Ação personalíssima (não serve para obter dados de parentes ou terceiros). Conforme a **Súmula Vinculante nº 2 do STF**, exige a comprovação da recusa da autoridade administrativa em fornecer ou retificar a informação, ou o decurso de prazo sem decisão.
2. **Mandado de Segurança:** A prova do direito deve ser pré-constituída documentalmente (não admite dilação probatória ou testemunhas). Pode ser impetrado no prazo improrrogável de **120 dias** contados da ciência do ato lesivo.
3. **Mandado de Injunção:** Regulamentado pela Lei nº 13.300/2016. Adota preponderantemente a teoria concretista (o Judiciário fixa as condições para o exercício do direito até que o Legislativo supra a mora normativa).
4. **Ação Popular:** O autor deve comprovar a condição de **cidadão mediante apresentação do título de eleitor**. Pessoas jurídicas e estrangeiros não eleitores não têm legitimidade ativa para propor Ação Popular.

---

### 4. Organização do Estado e Administração Pública (Arts. 18 a 41 da CF/88)

#### A. A Estrutura da Federação Brasileira (Arts. 18 a 36):
* A Federação brasileira é de **segundo grau (tridimensional)**, formada pela União, Estados-membros, Distrito Federal e Municípios.
* **Autonomia vs. Soberania (*⚠️ Pegadinha Recorrente Cebraspe*):**
  * Todos os entes federados são dotados de **autonomia** política (capacidade de auto-organização, autolegislação, autogoverno e auto-administração);
  * **Nenhum ente federado possui soberania!** A soberania pertence com exclusividade e de forma indivisível à República Federativa do Brasil perante a comunidade internacional.
  * É vedada a secessão territorial (princípio da indissolubilidade do pacto federativo, assegurado pelo instituto da intervenção federal, Arts. 34 a 36).

#### B. A Administração Pública e os Servidores Públicos (Arts. 37 a 41 da CF/88):
* **Princípios Constitucionais Expressos do Caput do Art. 37 (LIMPE):**
  * **Legalidade:** Enquanto o particular pode fazer tudo o que a lei não proíbe, o administrador público só pode agir quando e conforme a lei expressamente autoriza.
  * **Impessoalidade:** Finalidade estrita do interesse público, sem favorecimentos pessoais nem perseguições; veda a promoção pessoal de autoridades em publicidade institucional governamental (Art. 37, § 1º).
  * **Moralidade:** Pauta-se pela ética, probidade e boa-fé administrativa (distinta da moral comum).
  * **Publicidade:** Transparência como condição de eficácia dos atos administrativos.
  * **Eficiência:** Inserido pela Emenda Constitucional nº 19/1998 (Reforma Administrativa); impõe produtividade, economicidade e otimização de recursos estatais.
* **Regras Fundamentais de Pessoal:**
  * **Concurso Público (Art. 37, II):** Prazo de validade de **até 2 anos**, prorrogável uma única vez por igual período.
  * **Acumulação de Cargos (Art. 37, XVI):** É vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.
  * **Estabilidade do Servidor Público (Art. 41):** São estáveis após **3 anos de efetivo exercício** os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Exige-se compulsoriamente a aprovação em **avaliação especial de desempenho** por comissão instituída para essa finalidade.`,
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
      {
        id: 'tl-10-4-3',
        periodo: '2004',
        disciplina: 'Reforma do Judiciário',
        focoPrincipal: 'Emenda Constitucional nº 45/2004: criação do CNJ, súmulas vinculantes e tratados de direitos humanos',
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
      {
        id: 'aut-10-4-3',
        nome: 'Pedro Lenza',
        ano: 2023,
        obraPrincipal: 'Direito Constitucional Esquematizado',
        ideiaChave: 'Sistematização didática dos remédios constitucionais, mnemônicos e organização dos poderes.',
        chipPegadinha: 'Ação popular exige prova da condição de cidadão eleitor; pessoa jurídica não tem legitimidade ativa.',
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
      {
        id: 'peg-10-4-3',
        afirmacao: 'O mandado de segurança é a ação constitucional adequada para a obtenção de dados sobre a pessoa do impetrante constantes de bancos de dados públicos quando negados administrativamente.',
        gabarito: 'E',
        porQue: 'Para conhecer ou retificar dados pessoais em bancos de dados governamentais, o remédio constitucional específico é o HABEAS DATA, e não o Mandado de Segurança.',
      },
      {
        id: 'peg-10-4-4',
        afirmacao: 'Uma empresa privada (pessoa jurídica) com sede regular no Brasil possui plena legitimidade ativa para impetrar Ação Popular com o objetivo de anular ato lesivo ao patrimônio público.',
        gabarito: 'E',
        porQue: 'A Ação Popular é remédio restrito e exclusivo ao CIDADÃO (pessoa física no pleno gozo dos direitos políticos e com título de eleitor). Pessoa jurídica não pode propor Ação Popular (Súmula 365 do STF).',
      },
    ],
  },
};
