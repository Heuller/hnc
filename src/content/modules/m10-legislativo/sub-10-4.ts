import type { ModuloFilho } from '../../../domain/types';

export const submodulo104: ModuloFilho = {
  id: 'sub-10-4',
  numero: '10.4',
  editalRef: 'Conhecimentos Básicos - CF/88 arts. 1º a 41',
  preRequisitos: [],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-5",
          "titulo": "Poder Legislativo na CF/88",
          "motivo": "Organização dos Poderes a partir dos princípios fundamentais."
      }
  ],
  titulo: 'Noções de Direito Constitucional Aplicadas ao Processo Legislativo',
  antesDeLer: [
  {
    "termo": "Autonomia",
    "definicao": "Capacidade constitucional de organização e atuação de um ente dentro da Federação.",
    "exemploBiblioteca": "Município exerce competências constitucionais próprias, sem soberania internacional."
  },
  {
    "termo": "Eficácia contida",
    "definicao": "Aplicabilidade direta e imediata, sujeita a restrição nos termos constitucionalmente admitidos.",
    "exemploBiblioteca": "O exercício profissional é livre, atendidas qualificações legalmente exigidas nos termos da CF."
  }
],
  descricaoCurta: "Distinguir hierarquia e classificação de eficácia. Relacionar fundamentos, objetivos e princípios internacionais. Escolher garantias sem confundir fonte, objeto e pressupostos. Diferenciar autonomia, soberania, efetividade e estabilidade. Aplicar nacionalidade e cargos privativos de nato. Aplicar condições políticas e aferição de idade na redação pertinente.",
  tempoEstimadoMinutos: 29,
  autoresChave: [
  "Constituição Federal",
  "Emenda Constitucional 138/2025",
  "Lei 9.504/1997 — texto atualizado",
  "STJ — Súmula 2",
  "Lei 9.507/1997"
],
  alertasCebraspe: [
  "Força constitucional não equivale a eficácia plena de todo dispositivo.",
  "A referência pertinente é Súmula 2/STJ, em conjunto com a legislação.",
  "A alínea b passou a admitir outro de qualquer natureza, observadas condições."
],
  teoriaDensaMarkdown: "### A Constituição Federal de 1988: Conceito, Classificação e Estrutura\n\nA Carta Magna de 1988 (\"Constituição Cidadã\") ocupa o ápice da pirâmide normativa brasileira (Kelsen), servindo de fundamento de validade para todas as leis e atos do Poder Público (Silva, 2021; Mendes & Gonet, 2022):\n\n```tree\nTITLE: Classificação Dogmática da Constituição Federal de 1988\n- Constituição Federal de 1988 | Carta Magna e ápice do ordenamento jurídico brasileiro\n  - Origem: Promulgada | Democrática, votada e aprovada por Assembleia Nacional Constituinte\n  - Forma: Escrita | Codificada e solenemente consolidada em um documento único\n  - Conteúdo: Formal | Todas as regras inseridas no texto possuem estatura constitucional suprema\n  - Modo de Elaboração: Dogmática | Sistematiza dogmas e valores dominantes na fase constituinte\n  - Estabilidade: Rígida | Alteração restrita a processo solene e quórum de 3/5 em 2 turnos (Art. 60)\n  - Extensão: Analítica | Minuciosa, extensa e detalhista na disciplina das relações estatais e sociais\n  - Finalidade: Dirigente | Estabelece programas, metas de desenvolvimento e diretrizes para o futuro\n```\n\n#### A. Estrutura do Texto Constitucional\n1. **Preâmbulo:** Documento introdutório de intenções políticas, filosóficas e religiosas. Segundo jurisprudência pacífica e reiterada do Supremo Tribunal Federal (**STF, ADI 2.076 — técnica de distrator recorrente**):\n   * O preâmbulo **não possui força normativa cogente** nem eficácia jurídica vinculante;\n   * Não constitui norma de reprodução obrigatória para as Constituições estaduais ou Leis Orgânicas municipais;\n   * Não serve de parâmetro autônomo para o controle concentrado de constitucionalidade de leis em sede de ADI.\n2. **Corpo Permanente:** Organizado em artigos e alterações posteriores. As normas têm força constitucional, mas não possuem todas eficácia plena: sua aplicabilidade varia conforme o conteúdo e a classificação adotada.\n3. **Ato das Disposições Constitucionais Transitórias (ADCT):** Normas com eficácia temporal destinada a regular a transição entre a ordem jurídica anterior e o novo regime constitucional. Possui o **mesmo nível hierárquico formal** das normas permanentes da Constituição.\n\n---\n\n\n\nA classificação “formal” não significa que qualquer ato de órgão público tenha estatura constitucional. Rigidez decorre do procedimento mais exigente de reforma, com limites formais, circunstanciais e materiais. O ADCT tem hierarquia constitucional; ter finalidade transitória não o transforma em lei ordinária nem significa que todos os seus dispositivos já tenham exaurido efeitos.\n\n**Aplicação e recuperação:** Uma norma do ADCT continua constitucional mesmo com finalidade transitória. Verifique seu conteúdo e efeitos, não apenas o título.\n\n### Princípios Fundamentais da República (Arts. 1º a 4º da CF/88)\n\n#### A. Os Fundamentos da República (Art. 1º - Mnemônico SO-CI-DI-VA-PLU):\nA República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:\n1. **SO**berania;\n2. **CI**dadania;\n3. **DI**gnidade da pessoa humana (matriz axiológica de todo o sistema de direitos fundamentais);\n4. **VA**lores sociais do trabalho e da livre iniciativa;\n5. **PLU**ralismo político (garantia da diversidade ideológica, filosófica, social e partidária).\n\n#### B. A Separação dos Poderes (Art. 2º da CF/88)\n* São Poderes da União, **independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário**.\n* Adota a teoria de Montesquieu aperfeiçoada pelo sistema de freios e contrapesos (*checks and balances*): cada poder possui **funções típicas** (preponderantes) e **funções atípicas** (secundárias):\n  * O Poder Legislativo tem como função típica **legislar e fiscalizar** contábil e financeiramente os atos do Executivo; e como funções atípicas **administrar** seus serviços internos e **julgar** o Presidente e Ministros nos crimes de responsabilidade (Art. 52, I e II).\n* A separação dos Poderes é **cláusula pétrea insuprimível** da ordem constitucional (Art. 60, § 4º, III).\n\n#### C. Os Objetivos Fundamentais (Art. 3º - Mnemônico CON-GAR-ER-PRO):\nConstituem objetivos fundamentais da República Federativa do Brasil:\n* I - **Construir** uma sociedade livre, justa e solidária;\n* II - **Garantir** o desenvolvimento nacional;\n* III - **Erradicar** a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;\n* IV - **Promover** o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.\n*(Dica infalível Cebraspe: objetivos fundamentais expressam METAS de futuro e começam sempre com VERBOS NO INFINITIVO!).*\n\n#### D. Princípios nas Relações Internacionais (Art. 4º):\nIndependência nacional; prevalência dos direitos humanos; autodeterminação dos povos; não intervenção; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; repúdio ao terrorismo e ao racismo; cooperação entre os povos para o progresso da humanidade; e concessão de asilo político. Parágrafo único: busca pela integração econômica, política, social e cultural dos povos da América Latina.\n\n**Aplicação e recuperação:** Dignidade é fundamento; reduzir desigualdades é objetivo; prevalência dos direitos humanos é princípio das relações internacionais. Categorias não são intercambiáveis.\n\n### Direitos e Garantias Fundamentais e os Remédios Constitucionais (Art. 5º)\n\nOs direitos fundamentais vinculam tanto o Estado quanto as relações particulares (eficácia horizontal dos direitos):\n\n```tree\nTITLE: Remédios Constitucionais (Garantias Fundamentais do Art. 5º)\n- Ações Constitucionais de Tutela de Direitos | Instrumentos jurisdicionais de proteção e garantias cívicas\n  - Habeas Corpus (Art. 5º, LXVIII) | Protege a liberdade de locomoção corporal contra ilegalidade ou abuso. Gratuito e dispensa advogado.\n  - Habeas Data (Art. 5º, LXXII) | Assegura acesso ou retificação de dados pessoais em bancos governamentais. Gratuito e de natureza personalíssima.\n  - Mandado de Segurança (Art. 5º, LXIX) | Protege direito líquido e certo não amparado por HC/HD. Prova pré-constituída e prazo decadencial de 120 dias.\n  - Mandado de Injunção (Art. 5º, LXXI) | Combate a falta de norma regulamentadora que inviabilize o exercício de direitos e liberdades constitucionais.\n  - Ação Popular (Art. 5º, LXXIII) | Proposta por cidadão (eleitor) para anular ato lesivo ao patrimônio público, moralidade administrativa ou meio ambiente.\n```\n\n#### A. Eficácia e Aplicabilidade das Normas Constitucionais (José Afonso da Silva):\n* **Normas de Eficácia Plena:** Têm aplicabilidade direta, imediata e integral desde a promulgação da Constituição, produzindo todos os seus efeitos sem depender de lei posterior (ex.: Art. 5º, II - princípio da legalidade).\n* **Normas de Eficácia Contida (Redutível):** Têm aplicabilidade direta e imediata, potencialmente sujeita a restrições constitucionalmente admitidas. Produzem efeitos desde logo, mas o constituinte conferiu ao legislador infraconstitucional a faculdade de restringir ou limitar o seu alcance (ex.: Art. 5º, XIII - \"é livre o exercício de qualquer trabalho, ofício ou profissão, *atendidas as qualificações profissionais que a lei estabelecer*\").\n* **Normas de Eficácia Limitada:** Têm aplicabilidade indireta, mediata e diferida. Não produzem plenamente seus efeitos com a simples promulgação, dependendo obrigatoriamente da edição de lei posterior integrativa (ex.: Art. 37, VII - direito de greve dos servidores públicos).\n\n#### B. Regime dos Remédios Constitucionais em Concursos:\n1. **Habeas Data:** Destina-se ao conhecimento e à retificação de informações pessoais, nos termos constitucionais e legais; não é ação genérica para obter dados de qualquer terceiro. Conforme a **Súmula nº 2 do STJ**, em conjunto com a Lei 9.507/1997, exige a comprovação da recusa da autoridade administrativa em fornecer ou retificar a informação, ou o decurso de prazo sem decisão.\n2. **Mandado de Segurança:** A prova do direito deve ser pré-constituída documentalmente (não admite dilação probatória ou testemunhas). Pode ser impetrado no prazo improrrogável de **120 dias** contados da ciência do ato lesivo.\n3. **Mandado de Injunção:** Regulamentado pela Lei nº 13.300/2016. Adota preponderantemente a teoria concretista (o Judiciário fixa as condições para o exercício do direito até que o Legislativo supra a mora normativa).\n4. **Ação Popular:** O autor deve comprovar a condição de **cidadão mediante apresentação do título de eleitor**. Pessoas jurídicas e estrangeiros não eleitores não têm legitimidade ativa para propor Ação Popular.\n\n---\n\n\n\nA **Súmula Vinculante 2/STF** trata de sorteios, consórcios e loterias, não de habeas data. A exigência de resistência administrativa e os documentos pertinentes ao pedido devem ser conferidos na Lei 9.507/1997 e na jurisprudência, sem trocar o tribunal ou a natureza da súmula. Norma de eficácia limitada não é norma sem efeito: pode vincular o legislador e impedir atos incompatíveis enquanto depende de integração para sua plena execução.\n\n**Aplicação e recuperação:** Para acesso a informação pública geral, não escolha habeas data apenas porque existe um banco de dados. Verifique se a informação é relativa ao próprio impetrante e os pressupostos da ação.\n\n### Organização do Estado e Administração Pública (Arts. 18 a 41 da CF/88)\n\n#### A. A Estrutura da Federação Brasileira (Arts. 18 a 36):\n* A organização político-administrativa brasileira compreende pela União, Estados-membros, Distrito Federal e Municípios.\n* **Autonomia vs. Soberania (*⚠️ Pegadinha Recorrente Cebraspe*):**\n  * Todos os entes federados são dotados de **autonomia** política (capacidade de auto-organização, autolegislação, autogoverno e auto-administração);\n  * **Nenhum ente federado possui soberania!** A soberania pertence com exclusividade e de forma indivisível à República Federativa do Brasil perante a comunidade internacional.\n  * É vedada a secessão territorial (princípio da indissolubilidade do pacto federativo, assegurado pelo instituto da intervenção federal, Arts. 34 a 36).\n\n#### B. A Administração Pública e os Servidores Públicos (Arts. 37 a 41 da CF/88):\n* **Princípios Constitucionais Expressos do Caput do Art. 37 (LIMPE):**\n  * **Legalidade:** Enquanto o particular pode fazer tudo o que a lei não proíbe, a Administração deve observar competência, finalidade e o ordenamento jurídico, sem a liberdade geral atribuída ao particular.\n  * **Impessoalidade:** Finalidade estrita do interesse público, sem favorecimentos pessoais nem perseguições; veda a promoção pessoal de autoridades em publicidade institucional governamental (Art. 37, § 1º).\n  * **Moralidade:** Pauta-se pela ética, probidade e boa-fé administrativa (distinta da moral comum).\n  * **Publicidade:** Transparência como condição de eficácia dos atos administrativos.\n  * **Eficiência:** Inserido pela Emenda Constitucional nº 19/1998 (Reforma Administrativa); impõe produtividade, economicidade e otimização de recursos estatais.\n* **Regras Fundamentais de Pessoal:**\n  * **Concurso Público (Art. 37, II):** Prazo de validade de **até 2 anos**, prorrogável uma única vez por igual período.\n  * **Acumulação de Cargos (Art. 37, XVI):** É vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro de qualquer natureza, **na redação da EC 138/2025**; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.\n  * **Estabilidade do Servidor Público (Art. 41):** São estáveis após **3 anos de efetivo exercício** os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Exige-se compulsoriamente a aprovação em **avaliação especial de desempenho** por comissão instituída para essa finalidade.\n\n---\n\n\n\nAcumulação permitida continua sujeita à compatibilidade de horários e aos demais requisitos constitucionais. Não use a antiga expressão “técnico ou científico” como redação vigente da alínea b em 2026. Estabilidade e efetividade são diferentes: aprovação em concurso e provimento efetivo não dão estabilidade no primeiro dia; o art. 41 exige tempo e avaliação nas condições constitucionais.\n\n**Aplicação e recuperação:** Professor pode acumular outro cargo de qualquer natureza na redação da EC 138/2025, mas precisa observar os requisitos aplicáveis.\n\n### Nacionalidade, Direitos Políticos e Partidos Políticos (Arts. 12 a 17 da CF/88)\n\n#### A. Regime Constitucional da Nacionalidade (Art. 12)\nA nacionalidade é o vínculo jurídico-político que liga o indivíduo ao Estado soberano:\n* **Brasileiros Natos (Art. 12, I):**\n  1. *Critério territorial (Jus soli):* Os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país de origem;\n  2. *Critério sanguíneo e funcional:* Os nascidos no estrangeiro de pai brasileiro ou mãe brasileira, desde que qualquer deles esteja a serviço do Brasil;\n  3. *Critério potestativo (Opção confirmativa):* Os nascidos no estrangeiro de pai ou mãe brasileira, desde que sejam registrados em repartição consular competente ou venham a residir no Brasil e optem, a qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.\n* **Cargos Privativos de Brasileiro Nato (Art. 12, § 3º - Mnemônico MP3.COM):**\n  * **M** - Ministro do Supremo Tribunal Federal (todos os 11 membros do STF);\n  * **P** - Presidente e Vice-Presidente da República;\n  * **P** - Presidente da Câmara dos Deputados (na linha sucessória presidencial);\n  * **P** - Presidente do Senado Federal (na linha sucessória presidencial);\n  * **C** - Carreira Diplomática;\n  * **O** - Oficial das Forças Armadas (Exército, Marinha e Aeronáutica);\n  * **M** - Ministro de Estado da Defesa.\n  * *⚠️ Atenção Crítica Cebraspe:* Deputados Federais e Senadores comuns **podem ser brasileiros naturalizados**! Apenas o cargo de **Presidente da Câmara dos Deputados** e de **Presidente do Senado Federal** é privativo de nato. Ministro do STJ, Procurador-Geral da República e Ministro da Justiça podem ser naturalizados.\n* **Perda da Nacionalidade (Emenda Constitucional nº 131/2023):**\n  * A EC nº 131/2023 alterou profundamente o regime: o brasileiro que adquire outra nacionalidade voluntariamente **NÃO perde mais automaticamente a nacionalidade brasileira**;\n  * A perda só ocorre em duas hipóteses:\n    1. Cancelamento da naturalização por sentença judicial em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional;\n    2. Pedido expresso de renúncia perante autoridade brasileira competente, desde que não acarrete situação de apatridia.\n\n**Aplicação e recuperação:** Brasileiro naturalizado pode ser deputado ou senador; a Presidência de cada Casa é reservada a nato.\n\n### Direitos políticos e partidos\n\n#### Direitos Políticos (Arts. 14 a 16 da CF/88)\nA soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos:\n* **Instrumentos de Democracia Semidireta:**\n  * **Plebiscito:** Consulta popular **prévia** ao ato legislativo ou administrativo;\n  * **Referendo:** Consulta popular **posterior** à edição do ato para ratificação ou rejeição;\n  * **Iniciativa Popular de Leis (Art. 61, § 2º):** Subscrita por no mínimo **1% do eleitorado nacional**, distribuído por pelo menos **5 Estados**, com não menos de **0,3% dos eleitores** de cada um deles.\n* **Alistamento Eleitoral e Voto:**\n  * **Obrigatórios:** Para os maiores de 18 anos;\n  * **Facultativos:** Para os analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos;\n  * **Inalistáveis:** Estrangeiros e os conscritos durante o período do serviço militar obrigatório.\n* **Condições de Elegibilidade e Idades Mínimas Constitucionais (Art. 14, § 3º):**\n  * As idades constitucionais abaixo devem ser lidas com a regra temporal de aferição da Lei 9.504/1997, art. 11, § 2º, alterado pela Lei 15.230/2025:\n    * **35 anos:** Presidente e Vice-Presidente da República e Senador da República;\n    * **30 anos:** Governador e Vice-Governador de Estado e do DF;\n    * **21 anos:** Deputado Federal, Deputado Estadual, Deputado Distrital, Prefeito, Vice-Prefeito e Juiz de Paz;\n    * **18 anos:** Vereador.\n* **Inelegibilidades:**\n  * *Absolutas:* Inalistáveis e analfabetos (analfabeto tem alistamento facultativo, podendo votar, mas não pode ser votado);\n  * *Relativa por Motivo de Parentesco (Inelegibilidade Reflexa - Art. 14, § 7º):* São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o 2º grau ou por adoção, do Presidente da República, Governador ou Prefeito, salvo se já titular de mandato eletivo e candidato à reeleição. Conforme a **Súmula Vinculante nº 18 do STF**, a dissolução da sociedade conjugal no curso do mandato não afasta essa inelegibilidade.\n* **Perda e Suspensão dos Direitos Políticos (Art. 15):**\n  * **É VEDADA A CASSAÇÃO DE DIREITOS POLÍTICOS!** Só ocorrem perda ou suspensão nas hipóteses taxativas:\n    1. Cancelamento da naturalização por sentença transitada em julgado;\n    2. Incapacidade civil absoluta, sem equiparar automaticamente deficiência a incapacidade ou suspensão de direitos políticos;\n    3. Condenação criminal transitada em julgado, enquanto durarem seus efeitos (suspensão);\n    4. Recusa de cumprir obrigação a todos imposta ou prestação alternativa (Art. 5º, VIII - perda/suspensão);\n    5. Improbidade administrativa (Art. 37, § 4º - suspensão).\n\n#### C. Partidos Políticos (Art. 17 da CF/88)\n* É livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais.\n* **Preceitos Constitucionais Obrigatórios:**\n  * Caráter nacional;\n  * Proibição de recebimento de recursos financeiros de entidade ou governo estrangeiros ou de subordinação a estes;\n  * Prestação de contas à Justiça Eleitoral;\n  * Funcionamento parlamentar de acordo com a lei;\n  * **Vedação expressa de coligações partidárias nas eleições proporcionais** (deputados federais, estaduais, distritais e vereadores).\n* **Cláusula de Desempenho / Barreira (Art. 17, § 3º):** Somente têm direito a recursos do fundo partidário e acesso gratuito ao rádio e à televisão na proporção de votos válidos obtidos na eleição para a Câmara dos Deputados distribuídos em pelo menos um terço dos Estados, ou bancada mínima eleita.\n\n---\n\n\n**Aferição da idade após a Lei 15.230/2025:** para cargos do Executivo, data da posse; para Câmaras Municipais, data-limite do pedido de registro; para as demais Casas Legislativas, data da posse presumida definida no art. 11, § 2º, III, dentro do prazo de até noventa dias contado da eleição da respectiva Mesa, nos termos legais. Não aplique “data da posse real” indistintamente a todos os cargos.\n\nDeficiência não retira, por si só, capacidade civil ou direitos políticos. A leitura do art. 15 precisa ser articulada ao regime de capacidade e aos direitos das pessoas com deficiência. Condenação por improbidade também não torna toda sanção automática: tipo, regime, decisão e trânsito devem ser examinados.\n\nA vedação de coligações proporcionais não se confunde com federação partidária. Cláusulas de desempenho têm regras e transições específicas; não basta memorizar um único percentual como permanente para qualquer eleição. Consulte a disciplina do ciclo perguntado.\n\n**Aplicação e recuperação:** A idade de vereador não é aferida simplesmente na posse. A lei eleitoral distingue categorias e datas.",
  teoriaDidaticaMarkdown: "Hierarquia constitucional não implica eficácia plena de toda norma. Fundamentos, objetivos e princípios internacionais são categorias distintas. Habeas data: Súmula 2/STJ, não SV 2/STF. Entes são autônomos; soberania é da República. EC 138/2025 mudou acumulação do professor. Nacionalidade e elegibilidade exigem condições e datas atuais; deficiência não suspende direitos políticos automaticamente.",
  checkpoints: [
  {
    "id": "cp-10-4-1",
    "pergunta": "Micro-Checkpoint 1: Classificação da CF/88 e Soberania Federativa",
    "item": "No ordenamento constitucional brasileiro, a União, os Estados-membros, o Distrito Federal e os Municípios são pessoas jurídicas dotadas de soberania nacional perante a comunidade internacional.",
    "gabarito": "E",
    "justificativa": "Errado! Os entes federados (União, Estados, DF e Municípios) possuem apenas AUTONOMIA. A SOBERANIA é atributo indivisível e exclusivo da República Federativa do Brasil.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "versao_correta": "Os entes federados possuem autonomia; a soberania pertence à República Federativa do Brasil."
  },
  {
    "id": "cp-10-4-2",
    "pergunta": "Micro-Checkpoint 2: Cargos Privativos de Brasileiro Nato e Presidência das Casas",
    "item": "Um cidadão brasileiro naturalizado pode exercer o mandato de Deputado Federal ou de Senador da República, mas é constitucionalmente impedido de assumir a Presidência da Câmara dos Deputados ou do Senado Federal.",
    "gabarito": "C",
    "justificativa": "Correto! Os mandatos de Deputado e Senador são acessíveis ao brasileiro naturalizado, mas a Presidência de ambas as Casas é privativa de brasileiro nato (art. 12, § 3º da CF/88) por figurarem na linha sucessória do Presidente da República.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data."
  },
  {
    "id": "cp-10-4-3",
    "pergunta": "Micro-Checkpoint 3: Direitos Políticos - Cassação vs. Perda e Suspensão",
    "item": "A Constituição Federal de 1988 veda expressamente a cassação de direitos políticos, admitindo a sua perda ou suspensão exclusivamente nos casos taxativos previstos no art. 15, entre os quais figura a condenação criminal transitada em julgado enquanto durarem seus efeitos.",
    "gabarito": "C",
    "justificativa": "Correto! A CF/88 veda peremptoriamente a cassação de direitos políticos (art. 15, caput), estabelecendo rol taxativo de perda ou suspensão, sendo a condenação criminal transitada hipótese de suspensão automática durante a execução da pena.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data."
  },
  {
    "id": "rt-10-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todas as normas do corpo permanente da CF possuem necessariamente eficácia plena e dispensam integração.",
    "gabarito": "E",
    "justificativa": "Força constitucional não equivale a eficácia plena de todo dispositivo.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar",
    "versao_correta": "A aplicabilidade depende do conteúdo e da classificação pertinente."
  },
  {
    "id": "rt-10-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Fundamentos da República e objetivos fundamentais constituem listas constitucionais distintas.",
    "gabarito": "C",
    "justificativa": "Arts. 1º e 3º têm conteúdos e funções próprios.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A Súmula Vinculante 2/STF disciplina a recusa administrativa necessária ao habeas data.",
    "gabarito": "E",
    "justificativa": "A referência pertinente é Súmula 2/STJ, em conjunto com a legislação.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar",
    "versao_correta": "Não se devem trocar tribunal e natureza do enunciado sumular."
  },
  {
    "id": "rt-10-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na redação da EC 138/2025, a acumulação de cargo de professor com outro depende necessariamente de este ser técnico ou científico.",
    "gabarito": "E",
    "justificativa": "A alínea b passou a admitir outro de qualquer natureza, observadas condições.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar",
    "versao_correta": "A restrição ao caráter técnico ou científico não é a redação vigente."
  },
  {
    "id": "rt-10-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Adquirir outra nacionalidade voluntariamente gera, por si só, perda automática da brasileira na redação da EC 131/2023.",
    "gabarito": "E",
    "justificativa": "A alteração constitucional afastou essa hipótese automática.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar",
    "versao_correta": "A perda obedece às hipóteses e condições atuais do art. 12."
  },
  {
    "id": "rt-10-4-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A idade mínima de candidato a vereador é aferida pela mesma regra de data da posse aplicável ao Executivo.",
    "gabarito": "E",
    "justificativa": "A lei distingue a data-limite do registro para Câmaras Municipais.",
    "fonte": "Constituição Federal — Arts. 1º–17, 37, 41 e 60; regras e exceções.; Emenda Constitucional 138/2025 — Art. 37, XVI, b: professor com outro cargo de qualquer natureza.; Lei 9.504/1997 — texto atualizado — Art. 11, § 2º, com redação da Lei 15.230/2025.; STJ — Súmula 2 — Habeas data e recusa administrativa; não é súmula vinculante do STF.; Lei 9.507/1997 — Procedimento e prova da resistência administrativa no habeas data.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 1º a 41",
    "habilidade": "aplicar",
    "versao_correta": "É necessário aplicar a data específica da categoria de candidatura."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-10-4-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 1º–17, 37, 41 e 60; regras e exceções.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-4-fonte-ec138",
      "nome": "Emenda Constitucional 138/2025",
      "ano": "Referência de consulta",
      "obraPrincipal": "Emenda Constitucional 138/2025",
      "ideiaChave": "Art. 37, XVI, b: professor com outro cargo de qualquer natureza.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-4-fonte-eleicoes",
      "nome": "Lei 9.504/1997 — texto atualizado",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 9.504/1997 — texto atualizado",
      "ideiaChave": "Art. 11, § 2º, com redação da Lei 15.230/2025.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-4-fonte-stj2",
      "nome": "STJ — Súmula 2",
      "ano": "Referência de consulta",
      "obraPrincipal": "STJ — Súmula 2",
      "ideiaChave": "Habeas data e recusa administrativa; não é súmula vinculante do STF.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-4-fonte-hd",
      "nome": "Lei 9.507/1997",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 9.507/1997",
      "ideiaChave": "Procedimento e prova da resistência administrativa no habeas data.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-10-4-4",
      "afirmacao": "Na redação da EC 138/2025, a acumulação de cargo de professor com outro depende necessariamente de este ser técnico ou científico.",
      "gabarito": "E",
      "porQue": "A alínea b passou a admitir outro de qualquer natureza, observadas condições."
    },
    {
      "id": "memoria-rt-10-4-5",
      "afirmacao": "Adquirir outra nacionalidade voluntariamente gera, por si só, perda automática da brasileira na redação da EC 131/2023.",
      "gabarito": "E",
      "porQue": "A alteração constitucional afastou essa hipótese automática."
    },
    {
      "id": "memoria-rt-10-4-6",
      "afirmacao": "A idade mínima de candidato a vereador é aferida pela mesma regra de data da posse aplicável ao Executivo.",
      "gabarito": "E",
      "porQue": "A lei distingue a data-limite do registro para Câmaras Municipais."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-10-4-bloco-1",
    "titulo": "A Constituição Federal de 1988: Conceito, Classificação e Estrutura",
    "objetivos": [
      "Distinguir hierarquia e classificação de eficácia."
    ],
    "conteudo": "A Carta Magna de 1988 (\"Constituição Cidadã\") ocupa o ápice da pirâmide normativa brasileira (Kelsen), servindo de fundamento de validade para todas as leis e atos do Poder Público (Silva, 2021; Mendes & Gonet, 2022):\n\n```tree\nTITLE: Classificação Dogmática da Constituição Federal de 1988\n- Constituição Federal de 1988 | Carta Magna e ápice do ordenamento jurídico brasileiro\n  - Origem: Promulgada | Democrática, votada e aprovada por Assembleia Nacional Constituinte\n  - Forma: Escrita | Codificada e solenemente consolidada em um documento único\n  - Conteúdo: Formal | Todas as regras inseridas no texto possuem estatura constitucional suprema\n  - Modo de Elaboração: Dogmática | Sistematiza dogmas e valores dominantes na fase constituinte\n  - Estabilidade: Rígida | Alteração restrita a processo solene e quórum de 3/5 em 2 turnos (Art. 60)\n  - Extensão: Analítica | Minuciosa, extensa e detalhista na disciplina das relações estatais e sociais\n  - Finalidade: Dirigente | Estabelece programas, metas de desenvolvimento e diretrizes para o futuro\n```\n\n#### A. Estrutura do Texto Constitucional\n1. **Preâmbulo:** Documento introdutório de intenções políticas, filosóficas e religiosas. Segundo jurisprudência pacífica e reiterada do Supremo Tribunal Federal (**STF, ADI 2.076 — técnica de distrator recorrente**):\n   * O preâmbulo **não possui força normativa cogente** nem eficácia jurídica vinculante;\n   * Não constitui norma de reprodução obrigatória para as Constituições estaduais ou Leis Orgânicas municipais;\n   * Não serve de parâmetro autônomo para o controle concentrado de constitucionalidade de leis em sede de ADI.\n2. **Corpo Permanente:** Organizado em artigos e alterações posteriores. As normas têm força constitucional, mas não possuem todas eficácia plena: sua aplicabilidade varia conforme o conteúdo e a classificação adotada.\n3. **Ato das Disposições Constitucionais Transitórias (ADCT):** Normas com eficácia temporal destinada a regular a transição entre a ordem jurídica anterior e o novo regime constitucional. Possui o **mesmo nível hierárquico formal** das normas permanentes da Constituição.\n\n---\n\n\n\nA classificação “formal” não significa que qualquer ato de órgão público tenha estatura constitucional. Rigidez decorre do procedimento mais exigente de reforma, com limites formais, circunstanciais e materiais. O ADCT tem hierarquia constitucional; ter finalidade transitória não o transforma em lei ordinária nem significa que todos os seus dispositivos já tenham exaurido efeitos.\n\n**Aplicação e recuperação:** Uma norma do ADCT continua constitucional mesmo com finalidade transitória. Verifique seu conteúdo e efeitos, não apenas o título.",
    "checkpointIds": [
      "rt-10-4-1"
    ]
  },
  {
    "id": "sub-10-4-bloco-2",
    "titulo": "Princípios Fundamentais da República (Arts. 1º a 4º da CF/88)",
    "objetivos": [
      "Relacionar fundamentos, objetivos e princípios internacionais."
    ],
    "conteudo": "#### A. Os Fundamentos da República (Art. 1º - Mnemônico SO-CI-DI-VA-PLU):\nA República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:\n1. **SO**berania;\n2. **CI**dadania;\n3. **DI**gnidade da pessoa humana (matriz axiológica de todo o sistema de direitos fundamentais);\n4. **VA**lores sociais do trabalho e da livre iniciativa;\n5. **PLU**ralismo político (garantia da diversidade ideológica, filosófica, social e partidária).\n\n#### B. A Separação dos Poderes (Art. 2º da CF/88)\n* São Poderes da União, **independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário**.\n* Adota a teoria de Montesquieu aperfeiçoada pelo sistema de freios e contrapesos (*checks and balances*): cada poder possui **funções típicas** (preponderantes) e **funções atípicas** (secundárias):\n  * O Poder Legislativo tem como função típica **legislar e fiscalizar** contábil e financeiramente os atos do Executivo; e como funções atípicas **administrar** seus serviços internos e **julgar** o Presidente e Ministros nos crimes de responsabilidade (Art. 52, I e II).\n* A separação dos Poderes é **cláusula pétrea insuprimível** da ordem constitucional (Art. 60, § 4º, III).\n\n#### C. Os Objetivos Fundamentais (Art. 3º - Mnemônico CON-GAR-ER-PRO):\nConstituem objetivos fundamentais da República Federativa do Brasil:\n* I - **Construir** uma sociedade livre, justa e solidária;\n* II - **Garantir** o desenvolvimento nacional;\n* III - **Erradicar** a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;\n* IV - **Promover** o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.\n*(Dica infalível Cebraspe: objetivos fundamentais expressam METAS de futuro e começam sempre com VERBOS NO INFINITIVO!).*\n\n#### D. Princípios nas Relações Internacionais (Art. 4º):\nIndependência nacional; prevalência dos direitos humanos; autodeterminação dos povos; não intervenção; igualdade entre os Estados; defesa da paz; solução pacífica dos conflitos; repúdio ao terrorismo e ao racismo; cooperação entre os povos para o progresso da humanidade; e concessão de asilo político. Parágrafo único: busca pela integração econômica, política, social e cultural dos povos da América Latina.\n\n**Aplicação e recuperação:** Dignidade é fundamento; reduzir desigualdades é objetivo; prevalência dos direitos humanos é princípio das relações internacionais. Categorias não são intercambiáveis.",
    "checkpointIds": [
      "rt-10-4-2"
    ]
  },
  {
    "id": "sub-10-4-bloco-3",
    "titulo": "Direitos e Garantias Fundamentais e os Remédios Constitucionais (Art. 5º)",
    "objetivos": [
      "Escolher garantias sem confundir fonte, objeto e pressupostos."
    ],
    "conteudo": "Os direitos fundamentais vinculam tanto o Estado quanto as relações particulares (eficácia horizontal dos direitos):\n\n```tree\nTITLE: Remédios Constitucionais (Garantias Fundamentais do Art. 5º)\n- Ações Constitucionais de Tutela de Direitos | Instrumentos jurisdicionais de proteção e garantias cívicas\n  - Habeas Corpus (Art. 5º, LXVIII) | Protege a liberdade de locomoção corporal contra ilegalidade ou abuso. Gratuito e dispensa advogado.\n  - Habeas Data (Art. 5º, LXXII) | Assegura acesso ou retificação de dados pessoais em bancos governamentais. Gratuito e de natureza personalíssima.\n  - Mandado de Segurança (Art. 5º, LXIX) | Protege direito líquido e certo não amparado por HC/HD. Prova pré-constituída e prazo decadencial de 120 dias.\n  - Mandado de Injunção (Art. 5º, LXXI) | Combate a falta de norma regulamentadora que inviabilize o exercício de direitos e liberdades constitucionais.\n  - Ação Popular (Art. 5º, LXXIII) | Proposta por cidadão (eleitor) para anular ato lesivo ao patrimônio público, moralidade administrativa ou meio ambiente.\n```\n\n#### A. Eficácia e Aplicabilidade das Normas Constitucionais (José Afonso da Silva):\n* **Normas de Eficácia Plena:** Têm aplicabilidade direta, imediata e integral desde a promulgação da Constituição, produzindo todos os seus efeitos sem depender de lei posterior (ex.: Art. 5º, II - princípio da legalidade).\n* **Normas de Eficácia Contida (Redutível):** Têm aplicabilidade direta e imediata, potencialmente sujeita a restrições constitucionalmente admitidas. Produzem efeitos desde logo, mas o constituinte conferiu ao legislador infraconstitucional a faculdade de restringir ou limitar o seu alcance (ex.: Art. 5º, XIII - \"é livre o exercício de qualquer trabalho, ofício ou profissão, *atendidas as qualificações profissionais que a lei estabelecer*\").\n* **Normas de Eficácia Limitada:** Têm aplicabilidade indireta, mediata e diferida. Não produzem plenamente seus efeitos com a simples promulgação, dependendo obrigatoriamente da edição de lei posterior integrativa (ex.: Art. 37, VII - direito de greve dos servidores públicos).\n\n#### B. Regime dos Remédios Constitucionais em Concursos:\n1. **Habeas Data:** Destina-se ao conhecimento e à retificação de informações pessoais, nos termos constitucionais e legais; não é ação genérica para obter dados de qualquer terceiro. Conforme a **Súmula nº 2 do STJ**, em conjunto com a Lei 9.507/1997, exige a comprovação da recusa da autoridade administrativa em fornecer ou retificar a informação, ou o decurso de prazo sem decisão.\n2. **Mandado de Segurança:** A prova do direito deve ser pré-constituída documentalmente (não admite dilação probatória ou testemunhas). Pode ser impetrado no prazo improrrogável de **120 dias** contados da ciência do ato lesivo.\n3. **Mandado de Injunção:** Regulamentado pela Lei nº 13.300/2016. Adota preponderantemente a teoria concretista (o Judiciário fixa as condições para o exercício do direito até que o Legislativo supra a mora normativa).\n4. **Ação Popular:** O autor deve comprovar a condição de **cidadão mediante apresentação do título de eleitor**. Pessoas jurídicas e estrangeiros não eleitores não têm legitimidade ativa para propor Ação Popular.\n\n---\n\n\n\nA **Súmula Vinculante 2/STF** trata de sorteios, consórcios e loterias, não de habeas data. A exigência de resistência administrativa e os documentos pertinentes ao pedido devem ser conferidos na Lei 9.507/1997 e na jurisprudência, sem trocar o tribunal ou a natureza da súmula. Norma de eficácia limitada não é norma sem efeito: pode vincular o legislador e impedir atos incompatíveis enquanto depende de integração para sua plena execução.\n\n**Aplicação e recuperação:** Para acesso a informação pública geral, não escolha habeas data apenas porque existe um banco de dados. Verifique se a informação é relativa ao próprio impetrante e os pressupostos da ação.",
    "checkpointIds": [
      "rt-10-4-3"
    ]
  },
  {
    "id": "sub-10-4-bloco-4",
    "titulo": "Organização do Estado e Administração Pública (Arts. 18 a 41 da CF/88)",
    "objetivos": [
      "Diferenciar autonomia, soberania, efetividade e estabilidade."
    ],
    "conteudo": "#### A. A Estrutura da Federação Brasileira (Arts. 18 a 36):\n* A organização político-administrativa brasileira compreende pela União, Estados-membros, Distrito Federal e Municípios.\n* **Autonomia vs. Soberania (*⚠️ Pegadinha Recorrente Cebraspe*):**\n  * Todos os entes federados são dotados de **autonomia** política (capacidade de auto-organização, autolegislação, autogoverno e auto-administração);\n  * **Nenhum ente federado possui soberania!** A soberania pertence com exclusividade e de forma indivisível à República Federativa do Brasil perante a comunidade internacional.\n  * É vedada a secessão territorial (princípio da indissolubilidade do pacto federativo, assegurado pelo instituto da intervenção federal, Arts. 34 a 36).\n\n#### B. A Administração Pública e os Servidores Públicos (Arts. 37 a 41 da CF/88):\n* **Princípios Constitucionais Expressos do Caput do Art. 37 (LIMPE):**\n  * **Legalidade:** Enquanto o particular pode fazer tudo o que a lei não proíbe, a Administração deve observar competência, finalidade e o ordenamento jurídico, sem a liberdade geral atribuída ao particular.\n  * **Impessoalidade:** Finalidade estrita do interesse público, sem favorecimentos pessoais nem perseguições; veda a promoção pessoal de autoridades em publicidade institucional governamental (Art. 37, § 1º).\n  * **Moralidade:** Pauta-se pela ética, probidade e boa-fé administrativa (distinta da moral comum).\n  * **Publicidade:** Transparência como condição de eficácia dos atos administrativos.\n  * **Eficiência:** Inserido pela Emenda Constitucional nº 19/1998 (Reforma Administrativa); impõe produtividade, economicidade e otimização de recursos estatais.\n* **Regras Fundamentais de Pessoal:**\n  * **Concurso Público (Art. 37, II):** Prazo de validade de **até 2 anos**, prorrogável uma única vez por igual período.\n  * **Acumulação de Cargos (Art. 37, XVI):** É vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro de qualquer natureza, **na redação da EC 138/2025**; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.\n  * **Estabilidade do Servidor Público (Art. 41):** São estáveis após **3 anos de efetivo exercício** os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. Exige-se compulsoriamente a aprovação em **avaliação especial de desempenho** por comissão instituída para essa finalidade.\n\n---\n\n\n\nAcumulação permitida continua sujeita à compatibilidade de horários e aos demais requisitos constitucionais. Não use a antiga expressão “técnico ou científico” como redação vigente da alínea b em 2026. Estabilidade e efetividade são diferentes: aprovação em concurso e provimento efetivo não dão estabilidade no primeiro dia; o art. 41 exige tempo e avaliação nas condições constitucionais.\n\n**Aplicação e recuperação:** Professor pode acumular outro cargo de qualquer natureza na redação da EC 138/2025, mas precisa observar os requisitos aplicáveis.",
    "checkpointIds": [
      "cp-10-4-1",
      "rt-10-4-4"
    ]
  },
  {
    "id": "sub-10-4-bloco-5",
    "titulo": "Nacionalidade, Direitos Políticos e Partidos Políticos (Arts. 12 a 17 da CF/88)",
    "objetivos": [
      "Aplicar nacionalidade e cargos privativos de nato."
    ],
    "conteudo": "#### A. Regime Constitucional da Nacionalidade (Art. 12)\nA nacionalidade é o vínculo jurídico-político que liga o indivíduo ao Estado soberano:\n* **Brasileiros Natos (Art. 12, I):**\n  1. *Critério territorial (Jus soli):* Os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país de origem;\n  2. *Critério sanguíneo e funcional:* Os nascidos no estrangeiro de pai brasileiro ou mãe brasileira, desde que qualquer deles esteja a serviço do Brasil;\n  3. *Critério potestativo (Opção confirmativa):* Os nascidos no estrangeiro de pai ou mãe brasileira, desde que sejam registrados em repartição consular competente ou venham a residir no Brasil e optem, a qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.\n* **Cargos Privativos de Brasileiro Nato (Art. 12, § 3º - Mnemônico MP3.COM):**\n  * **M** - Ministro do Supremo Tribunal Federal (todos os 11 membros do STF);\n  * **P** - Presidente e Vice-Presidente da República;\n  * **P** - Presidente da Câmara dos Deputados (na linha sucessória presidencial);\n  * **P** - Presidente do Senado Federal (na linha sucessória presidencial);\n  * **C** - Carreira Diplomática;\n  * **O** - Oficial das Forças Armadas (Exército, Marinha e Aeronáutica);\n  * **M** - Ministro de Estado da Defesa.\n  * *⚠️ Atenção Crítica Cebraspe:* Deputados Federais e Senadores comuns **podem ser brasileiros naturalizados**! Apenas o cargo de **Presidente da Câmara dos Deputados** e de **Presidente do Senado Federal** é privativo de nato. Ministro do STJ, Procurador-Geral da República e Ministro da Justiça podem ser naturalizados.\n* **Perda da Nacionalidade (Emenda Constitucional nº 131/2023):**\n  * A EC nº 131/2023 alterou profundamente o regime: o brasileiro que adquire outra nacionalidade voluntariamente **NÃO perde mais automaticamente a nacionalidade brasileira**;\n  * A perda só ocorre em duas hipóteses:\n    1. Cancelamento da naturalização por sentença judicial em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional;\n    2. Pedido expresso de renúncia perante autoridade brasileira competente, desde que não acarrete situação de apatridia.\n\n**Aplicação e recuperação:** Brasileiro naturalizado pode ser deputado ou senador; a Presidência de cada Casa é reservada a nato.",
    "checkpointIds": [
      "cp-10-4-2",
      "rt-10-4-5"
    ]
  },
  {
    "id": "sub-10-4-bloco-6",
    "titulo": "Direitos políticos e partidos",
    "objetivos": [
      "Aplicar condições políticas e aferição de idade na redação pertinente."
    ],
    "conteudo": "#### Direitos Políticos (Arts. 14 a 16 da CF/88)\nA soberania popular é exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos:\n* **Instrumentos de Democracia Semidireta:**\n  * **Plebiscito:** Consulta popular **prévia** ao ato legislativo ou administrativo;\n  * **Referendo:** Consulta popular **posterior** à edição do ato para ratificação ou rejeição;\n  * **Iniciativa Popular de Leis (Art. 61, § 2º):** Subscrita por no mínimo **1% do eleitorado nacional**, distribuído por pelo menos **5 Estados**, com não menos de **0,3% dos eleitores** de cada um deles.\n* **Alistamento Eleitoral e Voto:**\n  * **Obrigatórios:** Para os maiores de 18 anos;\n  * **Facultativos:** Para os analfabetos, maiores de 70 anos e maiores de 16 e menores de 18 anos;\n  * **Inalistáveis:** Estrangeiros e os conscritos durante o período do serviço militar obrigatório.\n* **Condições de Elegibilidade e Idades Mínimas Constitucionais (Art. 14, § 3º):**\n  * As idades constitucionais abaixo devem ser lidas com a regra temporal de aferição da Lei 9.504/1997, art. 11, § 2º, alterado pela Lei 15.230/2025:\n    * **35 anos:** Presidente e Vice-Presidente da República e Senador da República;\n    * **30 anos:** Governador e Vice-Governador de Estado e do DF;\n    * **21 anos:** Deputado Federal, Deputado Estadual, Deputado Distrital, Prefeito, Vice-Prefeito e Juiz de Paz;\n    * **18 anos:** Vereador.\n* **Inelegibilidades:**\n  * *Absolutas:* Inalistáveis e analfabetos (analfabeto tem alistamento facultativo, podendo votar, mas não pode ser votado);\n  * *Relativa por Motivo de Parentesco (Inelegibilidade Reflexa - Art. 14, § 7º):* São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o 2º grau ou por adoção, do Presidente da República, Governador ou Prefeito, salvo se já titular de mandato eletivo e candidato à reeleição. Conforme a **Súmula Vinculante nº 18 do STF**, a dissolução da sociedade conjugal no curso do mandato não afasta essa inelegibilidade.\n* **Perda e Suspensão dos Direitos Políticos (Art. 15):**\n  * **É VEDADA A CASSAÇÃO DE DIREITOS POLÍTICOS!** Só ocorrem perda ou suspensão nas hipóteses taxativas:\n    1. Cancelamento da naturalização por sentença transitada em julgado;\n    2. Incapacidade civil absoluta, sem equiparar automaticamente deficiência a incapacidade ou suspensão de direitos políticos;\n    3. Condenação criminal transitada em julgado, enquanto durarem seus efeitos (suspensão);\n    4. Recusa de cumprir obrigação a todos imposta ou prestação alternativa (Art. 5º, VIII - perda/suspensão);\n    5. Improbidade administrativa (Art. 37, § 4º - suspensão).\n\n#### C. Partidos Políticos (Art. 17 da CF/88)\n* É livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais.\n* **Preceitos Constitucionais Obrigatórios:**\n  * Caráter nacional;\n  * Proibição de recebimento de recursos financeiros de entidade ou governo estrangeiros ou de subordinação a estes;\n  * Prestação de contas à Justiça Eleitoral;\n  * Funcionamento parlamentar de acordo com a lei;\n  * **Vedação expressa de coligações partidárias nas eleições proporcionais** (deputados federais, estaduais, distritais e vereadores).\n* **Cláusula de Desempenho / Barreira (Art. 17, § 3º):** Somente têm direito a recursos do fundo partidário e acesso gratuito ao rádio e à televisão na proporção de votos válidos obtidos na eleição para a Câmara dos Deputados distribuídos em pelo menos um terço dos Estados, ou bancada mínima eleita.\n\n---\n\n\n**Aferição da idade após a Lei 15.230/2025:** para cargos do Executivo, data da posse; para Câmaras Municipais, data-limite do pedido de registro; para as demais Casas Legislativas, data da posse presumida definida no art. 11, § 2º, III, dentro do prazo de até noventa dias contado da eleição da respectiva Mesa, nos termos legais. Não aplique “data da posse real” indistintamente a todos os cargos.\n\nDeficiência não retira, por si só, capacidade civil ou direitos políticos. A leitura do art. 15 precisa ser articulada ao regime de capacidade e aos direitos das pessoas com deficiência. Condenação por improbidade também não torna toda sanção automática: tipo, regime, decisão e trânsito devem ser examinados.\n\nA vedação de coligações proporcionais não se confunde com federação partidária. Cláusulas de desempenho têm regras e transições específicas; não basta memorizar um único percentual como permanente para qualquer eleição. Consulte a disciplina do ciclo perguntado.\n\n**Aplicação e recuperação:** A idade de vereador não é aferida simplesmente na posse. A lei eleitoral distingue categorias e datas.",
    "checkpointIds": [
      "cp-10-4-3",
      "rt-10-4-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 1º–17, 37, 41 e 60; regras e exceções.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "ec138",
    "titulo": "Emenda Constitucional 138/2025",
    "localizador": "Art. 37, XVI, b: professor com outro cargo de qualquer natureza.",
    "url": "https://www2.camara.leg.br/legin/fed/emecon/2025/emendaconstitucional-138-19-dezembro-2025-798508-publicacaooriginal-177473-pl.html"
  },
  {
    "id": "eleicoes",
    "titulo": "Lei 9.504/1997 — texto atualizado",
    "localizador": "Art. 11, § 2º, com redação da Lei 15.230/2025.",
    "url": "https://legis.senado.gov.br/norma/551380/publicacao/34619691"
  },
  {
    "id": "stj2",
    "titulo": "STJ — Súmula 2",
    "localizador": "Habeas data e recusa administrativa; não é súmula vinculante do STF.",
    "url": "https://www.stj.jus.br/docs_internet/SumulasSTJ.pdf"
  },
  {
    "id": "hd",
    "titulo": "Lei 9.507/1997",
    "localizador": "Procedimento e prova da resistência administrativa no habeas data.",
    "url": "https://www.planalto.gov.br/ccivil_03/leis/l9507.htm"
  }
],
};
