import type { ModuloFilho } from '../../../domain/types';

export const submodulo105: ModuloFilho = {
  id: 'sub-10-5',
  numero: '10.5',
  editalRef: 'Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)',
  preRequisitos: ["sub-10-1","sub-10-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Regimento Interno da Câmara dos Deputados",
          "motivo": "Imunidades materiais e formais e prerrogativas regimentais."
      },
      {
          "submoduloId": "sub-10-6",
          "titulo": "Regimento Comum do Congresso Nacional",
          "motivo": "Atribuições do Congresso em sessão conjunta."
      }
  ],
  titulo: 'Poder Legislativo e Regime Jurídico dos Parlamentares na CF/88',
  antesDeLer: [
  {
    "termo": "Reserva de jurisdição",
    "definicao": "Matéria cuja decisão inicial é reservada ao Judiciário, nos termos constitucionais.",
    "exemploBiblioteca": "CPI pode investigar, mas não decretar interceptação telefônica."
  },
  {
    "termo": "Imunidade material",
    "definicao": "Proteção ligada a opiniões, palavras e votos no exercício parlamentar, com alcance delimitado constitucional e jurisprudencialmente.",
    "exemploBiblioteca": "Manifestação e contexto funcional devem ser examinados antes de concluir pela proteção parlamentar."
  }
],
  descricaoCurta: "Distinguir representação, composição constitucional e números temporais. Relacionar períodos e convocação com exceções constitucionais. Delimitar poderes de investigação e reserva de jurisdição. Separar imunidade material, prisão e foro com requisitos próprios. Aplicar competências e defesa nos regimes de perda e afastamento. Identificar hipótese e controle da intervenção com condições.",
  tempoEstimadoMinutos: 29,
  autoresChave: [
  "Constituição Federal",
  "STF — Constituição e Supremo: art. 53",
  "STF — Informativo 1168, HC 232.627 e INQ 4.787",
  "STF — Constituição e Supremo: art. 5º"
],
  alertasCebraspe: [
  "O artigo remete a lei complementar e estabelece critérios e limites.",
  "O art. 57, § 8º, inclui MPs em vigor.",
  "O art. 55, § 3º, assegura ampla defesa."
],
  teoriaDensaMarkdown: "### Estrutura Constitucional do Poder Legislativo (CF/88, Arts. 44 a 47)\n\nO Poder Legislativo da União é organizado sob o modelo de **Bicameralismo Federativo**, sendo exercido pelo **Congresso Nacional**, que se compõe da **Câmara dos Deputados** e do **Senado Federal** (CF, art. 44).\n\n```tree\nTITLE: Arquitetura Bicameral do Congresso Nacional (CF/88)\n- Congresso Nacional (Poder Legislativo da União - Art. 44)\n  - Câmara dos Deputados (Art. 45) | Representação Popular\n    - Sistema Eleitoral Proporcional | Mandato de 4 anos (1 legislatura)\n    - Bancadas proporcionais à população | Mínimo 8 e Máximo 70 por Estado/DF (513 na legislatura em curso em 2026; observe a referência temporal)\n    - Cada Território Federal elege 4 Deputados Federais fixos\n  - Senado Federal (Art. 46) | Representação Federativa Paritária\n    - Sistema Eleitoral Majoritário | Mandato de 8 anos (2 legislaturas)\n    - Paridade federativa: 3 Senadores e 2 suplentes por Estado e DF (Total: 81)\n    - Renovação quadrienal alternada: 1/3 (27 vagas) e 2/3 (54 vagas)\n```\n\n#### A. A Câmara dos Deputados (Art. 45)\n* **Natureza da Representação:** Representa o **povo brasileiro**.\n* **Sistema Eleitoral:** **Proporcional** (calculado pelo quociente eleitoral e quociente partidário, admitindo as sobras eleitorais reguladas pelo Código Eleitoral).\n* **Número de Membros:** O número total de deputados e a representação de cada Estado e do DF são fixados por **lei complementar**, proporcionalmente à população (mínimo de **8** e máximo de **70** deputados por unidade da federação).\n* **Territórios Federais:** Caso venham a ser criados, cada território elegerá **4 deputados federais** (CF, art. 45, § 2º).\n* **Duração do Mandato:** **4 anos**, correspondente a uma **legislatura** completa (CF, art. 44, parágrafo único).\n\n#### B. O Senado Federal (Art. 46)\n* **Natureza da Representação:** Representa os **Estados e o Distrito Federal** (princípio da paridade federativa).\n* **Sistema Eleitoral:** **Majoritário** simples.\n* **Composição Paritária:** Cada Estado e o Distrito Federal elegem **3 senadores**, cada um com **dois suplentes** (CF, art. 46, § 3º).\n* **Duração do Mandato:** **8 anos** (equivale a duas legislaturas completas).\n* **Renovação das Cadeiras:** A representação do Senado é renovada de quatro em quatro anos, **alternadamente, por um terço (1/3)** e **por dois terços (2/3)** (CF, art. 46, § 2º).\n\n---\n\n\n\nA Constituição não fixa no art. 45 o total de 513: estabelece a definição por lei complementar, os critérios e limites. Diferencie a regra constitucional, a composição efetiva e eventuais discussões sobre legislaturas futuras. Os números de votos usados nos exemplos desta aula consideram 513 deputados e 81 senadores.\n\n**Aplicação e recuperação:** Senado representa Estados e DF, com três membros por unidade; Câmara representa o povo. Não troque sistema eleitoral, mandato e renovação.\n\n### Funcionamento, Sessões Legislativas e Competências (CF/88, Arts. 48 a 57)\n\n```timeline\n01/02 | 1. Sessões Preparatórias | Posse dos diplomados e eleição das respectivas Mesas Diretoras (mandato de 2 anos, vedada recondução no mesmo cargo na mesma legislatura)\n---> Início do Primeiro Período\n02/02 a 17/07 | 2. Primeiro Período da Sessão Ordinária | Funcionamento constitucional formal; não se interrompe sem a aprovação do projeto de LDO\n---> Recesso Parlamentar de Julho (18/07 a 31/07)\n01/08 a 22/12 | 3. Segundo Período da Sessão Ordinária | Tramitação orçamentária (LOA) e encerramento dos trabalhos anuais da Sessão Legislativa Ordinária\n---> Convocação Extraordinária (Eventual)\nRecesso | 4. Sessão Legislativa Extraordinária | Convocada pelo Presidente do Senado ou Presidente da República/maioria dos membros; delibera sobre a matéria convocada, ressalvada a inclusão de medidas provisórias conforme art. 57, § 8º\n```\n\n#### A. A Sessão Legislativa Ordinária (SLO - Art. 57)\n* O Congresso Nacional reúne-se anualmente na Capital Federal, de **2 de fevereiro a 17 de julho** e de **1º de agosto a 22 de dezembro**.\n* **Condição de Recesso:** A sessão legislativa ordinária **NÃO será interrompida** sem a prévia aprovação do projeto de **lei de diretrizes orçamentárias (LDO)** (CF, art. 57, § 2º).\n\n#### B. Sessões Conjuntas do Congresso Nacional (Art. 57, § 3º)\nA Câmara e o Senado reúnem-se em sessão conjunta para:\n1. Inaugurar a sessão legislativa;\n2. Elaborar o **Regimento Comum** e regular a criação de serviços comuns às duas Casas;\n3. Receber o compromisso do Presidente e do Vice-Presidente da República;\n4. Conhecer do **veto presidencial** e sobre ele deliberar (prazo de 30 dias, deliberação por voto da maioria absoluta de cada Casa em escrutínio aberto).\n\n#### C. Sessão Legislativa Extraordinária (Art. 57, §§ 6º e 7º)\n* **Legitimidade de Convocação:**\n  * Pelo **Presidente do Senado Federal**, em caso de decretação de estado de defesa, intervenção federal, pedido de autorização para estado de sítio ou posse do Presidente/Vice-Presidente;\n  * Pelo **Presidente da República**, pelos **Presidentes da Câmara e do Senado**, ou a **requerimento da maioria dos membros de ambas as Casas**, em caso de urgência ou relevante interesse público, exigindo-se em qualquer desses casos a aprovação da maioria absoluta de cada Casa do Congresso Nacional.\n* **Restrição Temática:** Na sessão legislativa extraordinária, o Congresso Nacional delibera sobre a matéria da convocação, ressalvada a hipótese do **art. 57, § 8º**, que inclui medidas provisórias em vigor. Uma afirmação de exclusividade sem a ressalva está incompleta.\n\n---\n\n\n\nO art. 57 trata de sessão legislativa anual e convocação extraordinária do Congresso. Não confunda isso com uma sessão plenária extraordinária convocada em dia ou horário diferente no RICD. A palavra “extraordinária” precisa ser lida com seu objeto e contexto.\n\n**Aplicação e recuperação:** Uma convocação extraordinária não exclui a regra específica sobre MPs em vigor. Distinguir a ressalva evita generalização.\n\n### Comissões Parlamentares e Comissões Parlamentares de Inquérito (CPIs - Art. 58)\n\nO Congresso Nacional e suas Casas funcionam estruturados em **Comissões Permanentes e Temporárias**, assegurando-se, tanto quanto possível, a **representação proporcional dos partidos políticos ou dos blocos parlamentares** (CF, art. 58, § 1º).\n\n#### As Comissões Parlamentares de Inquérito (CPIs - Art. 58, § 3º)\nAs CPIs constituem um dos mais poderosos instrumentos de fiscalização e controle político-constitucional da minoria parlamentar:\n\n* **Requisitos Constitucionais Cumulativos:**\n  1. Requerimento de pelo menos **um terço (1/3)** dos membros da Câmara dos Deputados e/ou do Senado Federal (direito público subjetivo das minorias parlamentares, insuscetível de veto ou bloqueio discricionário pela maioria);\n  2. Indicação de **fato determinado** (objeto delimitado a ser investigado);\n  3. Fixação de **prazo certo** (admitidas prorrogações dentro da mesma legislatura).\n* **Poderes de Investigação Próprios das Autoridades Judiciais:**\n  * As CPIs podem, por deliberação fundamentada da maioria de seus membros:\n    * Determinar a **quebra de sigilo bancário, fiscal e telefônico** (acesso aos registros telefônicos pretéritos e extratos de contas);\n    * Convocar e inquirir testemunhas (sob compromisso de dizer a verdade) e indiciados (com direito ao silêncio contra a autoincriminação e assistência de advogado);\n    * Requisitar informações e documentos sigilosos de órgãos públicos e empresas privadas.\n* **Limitações Constitucionais Estritas (Reserva de Jurisdição do Judiciário):**\n  * As CPIs **NÃO possuem poderes judiciais plenos**, sendo-lhes absolutamente vedado:\n    * Decretar prisão preventiva ou temporária. Prisão em flagrante é instituto distinto, não exceção que converta flagrante em prisão preventiva;\n    * Determinar a **interceptação telefônica** (a \"escuta\" e gravação de conversas em tempo real é ato privativo da autoridade judiciária);\n    * Determinar **busca e apreensão domiciliar** (a busca coercitiva sujeita à reserva de jurisdição não pode ser decretada pela CPI. O art. 5º, XI, também contempla hipóteses próprias como flagrante, desastre e socorro; ordem judicial não autoriza, por si, busca domiciliar noturna);\n    * Decretar o sequestro, indisponibilidade ou arresto de bens de pessoas investigadas;\n    * Anular ou cassar atos de outros Poderes da República.\n* **Destinação dos Trabalhos:** As conclusões da CPI são encaminhadas ao **Ministério Público**, para que este promova a responsabilidade civil ou criminal dos infratores perante o Poder Judiciário.\n\n---\n\n\n\nA fundamentação deve delimitar pertinência, objeto e necessidade. Acesso a registros de comunicações e interceptar seu conteúdo em tempo real são operações diferentes. A CPI investiga e encaminha conclusões: não condena criminalmente, não aplica pena judicial nem substitui o Ministério Público. O direito de não produzir prova contra si deve ser respeitado inclusive quando a pessoa é chamada sob rótulo inadequado.\n\n**Aplicação e recuperação:** Pedir dados telefônicos passados e interceptar conversas futuras não são a mesma diligência. A CPI não recebe todos os poderes de um juiz.\n\n### Estatuto dos Congressistas e Regime Jurídico Parlamentar (CF/88, Arts. 53 a 56)\n\nO estatuto dos parlamentares é estruturado não como privilégio pessoal, mas como **garantia institucional** da independência e do livre exercício do Poder Legislativo.\n\n```tree\nTITLE: Estatuto dos Congressistas: Imunidades e Prerrogativas (CF, Art. 53)\n- Prerrogativas Constitucionais dos Deputados e Senadores\n  - Inviolabilidade Material / Real (CF, art. 53, caput)\n    - Inviolabilidade civil e penal por opiniões, palavras e votos\n    - Local da manifestação não deve ser tratado como autorização para qualquer conduta; examine o nexo e a jurisprudência aplicável\n    - Fora do parlamento: exige nexo de causalidade funcional direto com a atividade parlamentar\n  - Imunidade Formal / Processual (CF, art. 53, §§ 2º a 5º)\n    - Prisão: Regra do art. 53, § 2º, desde a diplomação, distinguindo prisão cautelar e execução de condenação\n    - Remessa dos autos em 24h à respectiva Casa para voto da maioria absoluta sobre a manutenção da prisão\n    - Sustação do processo penal: Por iniciativa de partido político com assento na Casa (suspende a prescrição)\n    - Foro especial por prerrogativa de função: Competência do Supremo Tribunal Federal (crimes no mandato e funcionais)\n    - Isenção do dever de testemunhar: Informações sigilosas recebidas em razão do mandato (art. 53, § 6º)\n```\n\n#### A. Inviolabilidade Material / Real (Art. 53, caput)\n* Os Deputados e Senadores são **invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos**.\n* **Alcance Jurisprudencial do STF:**\n  * *Pronunciamentos intra muros (dentro do Congresso):* Há formulações jurisprudenciais que valorizam a atuação no recinto, mas a imunidade não pode ser convertida em salvo-conduto universal para qualquer ato. Examine natureza, vínculo funcional, contexto e precedente aplicável;\n  * *Pronunciamentos extra muros (fora do Congresso, redes sociais, imprensa):* A inviolabilidade exige demonstração de **nexo de causalidade direto** com o exercício das funções legislativas.\n\n#### B. Imunidade Formal / Processual (Art. 53, §§ 2º a 5º)\n* **Garantia Contra a Prisão (Art. 53, § 2º):**\n  * Desde a **expedição do diploma**, os membros do Congresso Nacional não poderão ser presos, **salvo em flagrante de crime inafiançável**.\n  * Nessa hipótese, os autos são remetidos dentro de **vinte e quatro horas** à Casa respectiva, para que, pelo voto da **maioria de seus membros** (maioria absoluta), resolva sobre a prisão.\n* **Sustação da Ação Penal (Art. 53, §§ 3º a 5º):**\n  * Recebida a denúncia contra o Senador ou Deputado, por crime ocorrido **após a diplomação**, o STF dará ciência à Casa respectiva, que, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros, poderá, até a decisão final, sustar o andamento da ação.\n  * O pedido de sustação é apreciado no prazo improrrogável de 45 dias, e a sustação **suspende a prescrição** enquanto durar o mandato.\n\n\n\n**Foro após o mandato:** o STF decidiu em 2025, no HC 232.627 e INQ 4.787, que o foro para crimes praticados no cargo e em razão das funções subsiste após o afastamento, mesmo quando a investigação ou ação começa depois. Não é foro para qualquer crime da vida da pessoa. Identifique vínculo temporal e funcional e confira a evolução jurisprudencial até a referência admitida no edital. A data futura de corte jurisprudencial não significa que julgados ainda não publicados tenham sido conferidos.\n\n**Aplicação e recuperação:** Um crime anterior e sem vínculo com a função não recebe foro apenas porque seu autor foi eleito depois. Examine as condições da orientação aplicável.\n\n### Incompatibilidades, perda e afastamento do mandato\n\n#### Incompatibilidades Parlamentares (Art. 54)\nA Constituição estabelece proibições rígidas para preservar a moralidade e a independência dos congressistas:\n1. **Desde a Diplomação (Art. 54, I):**\n   * Não podem firmar ou manter contrato com pessoa jurídica de direito público, autarquia, empresa pública, sociedade de economia mista ou empresa concessionária de serviço público, **salvo quando o contrato obedecer a cláusulas uniformes**;\n   * Não podem aceitar ou exercer cargo, função ou emprego remunerado em tais entidades, inclusive os demissíveis *ad nutum*.\n2. **Desde a Posse (Art. 54, II):**\n   * Não podem ser proprietários, controladores ou diretores de empresa que goze de favor decorrente de contrato com pessoa jurídica de direito público;\n   * Não podem patrocinar causa em que sejam interessadas pessoas estatais ou paraestatais;\n   * Não podem ser titulares de mais de um cargo ou mandato público eletivo.\n\n#### D. Perda do Mandato Parlamentar (Art. 55)\nÉ necessário separar entre as hipóteses de **cassação deliberada pelo plenário** e as hipóteses de **extinção declarada de ofício pela Mesa**:\n\n| Hipótese de Perda do Mandato (CF, Art. 55) | Procedimento e Quórum Constitucional | Competência Decisória |\n|---|---|---|\n| Infringência às proibições do Art. 54 (incompatibilidades) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Conduta incompatível com o decoro parlamentar (Art. 55, II) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Condenação criminal transitada em julgado (Art. 55, VI) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Deixar de comparecer à terça parte (1/3) das sessões ordinárias | Procedimento constitucional assegurada ampla defesa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n| Perda ou suspensão dos direitos políticos (Art. 55, IV) | Procedimento constitucional assegurada ampla defesa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n| Decretação expressa pela Justiça Eleitoral (Art. 55, V) | Comunicação judicial direta à Casa legislativa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n\n#### E. Licenças Permitidas e Suplência (Art. 56)\n* **NÃO perde o mandato** o Deputado ou Senador investido no cargo de:\n  * **Ministro de Estado**;\n  * **Governador de Território**;\n  * **Secretário de Estado**, do Distrito Federal, de Território ou de Prefeitura de Capital;\n  * Em tais hipóteses, o congressista pode optar pela remuneração do mandato.\n* O **suplente** é convocado nos casos de vaga, investidura nos cargos executivos autorizados ou licença para tratamento de saúde **superior a cento e vinte (120) dias**.\n\n---\n\n\n\nO art. 55, § 3º, assegura defesa também nas hipóteses declaradas pela Mesa. Na aplicação de condenação criminal, a jurisprudência apresenta distinções quanto a penas e impedimento de exercício; o quadro reproduz o desenho constitucional e não dispensa analisar a decisão judicial concreta. O art. 56, II, também admite licença por motivo de doença ou para interesse particular sem remuneração, nesta última hipótese até 120 dias por sessão legislativa.\n\n**Aplicação e recuperação:** Direitos políticos suspensos e quebra de decoro têm caminhos constitucionais distintos. Identifique fundamento antes de apontar o órgão decisório.\n\n### Intervenção Federal (CF/88, Arts. 34 a 36)\n\nA Intervenção Federal é medida de caráter excepcional e temporário que afasta pontualmente a autonomia político-administrativa de um Estado ou do DF para resguardar a integridade do pacto federativo:\n\n#### A. Hipóteses Taxativas de Intervenção da União nos Estados/DF (Art. 34)\n* Manter a integridade nacional;\n* Repelir invasão estrangeira ou de uma unidade da Federação em outra;\n* Pôr termo a grave comprometimento da ordem pública;\n* Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;\n* Reorganizar as finanças da unidade federada;\n* Prover a execução de lei federal, ordem ou decisão judicial;\n* Assegurar a observância dos **princípios constitucionais sensíveis**: forma republicana, sistema representativo e regime democrático; direitos da pessoa humana; autonomia municipal; prestação de contas da administração pública; aplicação do mínimo exigido em educação e saúde.\n\n#### B. Controle Político Congressual (Art. 36)\n* O **Decreto de Intervenção** é editado privativamente pelo Presidente da República, fixando a amplitude, o prazo e as condições de execução e nomeando, se couber, o interventor.\n* **Submissão ao Congresso Nacional:** O decreto de intervenção deve ser submetido à apreciação do Congresso Nacional no prazo improrrogável de **vinte e quatro (24) horas**. Se o Congresso estiver em recesso, será convocado extraordinariamente no mesmo prazo.\n* **Apreciação Política:** O Congresso delibera por **maioria simples** de cada uma das Casas segundo o procedimento aplicável; a competência congressual não elimina a necessidade de respeitar a atuação das Casas.\n* **Dispensa Excepcional do Controle Político (Art. 36, § 3º):** Nos casos previstos no art. 34, VI e VII, ou no art. 35, IV, a apreciação pelo Congresso ou Assembleia pode ser dispensada nas condições do art. 36, § 3º, limitando-se o decreto a suspender o ato impugnado se isso bastar para restaurar a normalidade. Não é regra para qualquer intervenção, nem apenas para execução de lei ou ordem judicial.\n\n**Aplicação e recuperação:** O art. 36 prevê procedimentos e exceções de controle. Não aplique a dispensa do § 3º a toda intervenção.",
  teoriaDidaticaMarkdown: "Câmara representa o povo; Senado, Estados e DF. Sessão legislativa não é sessão plenária. MPs têm ressalva na convocação extraordinária. CPI investiga, sem poderes judiciais universais. Imunidade, prisão e foro têm condições distintas; o STF alterou em 2025 a manutenção do foro após o cargo. Perda de mandato exige fundamento, competência e defesa. Intervenção tem hipóteses e controles específicos.",
  checkpoints: [
  {
    "id": "cp-10-5-1",
    "pergunta": "Considerando a regra expressa do art. 53, § 2º, da Constituição, julgue o item.",
    "item": "Desde a expedição do diploma, os membros do Congresso Nacional não podem ser presos, salvo em flagrante de crime inafiançável, hipótese em que os autos devem ser remetidos em vinte e quatro horas à Casa respectiva para que a maioria de seus membros resolva sobre a prisão.",
    "gabarito": "C",
    "justificativa": "Certo quanto à regra expressa: desde a diplomação, a prisão cautelar tem a exceção indicada e remessa dos autos em 24 horas. Isso não deve ser convertido em imunidade geral contra execução de condenação criminal; a aplicação concreta exige distinguir os institutos e a jurisprudência.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais."
  },
  {
    "id": "cp-10-5-2",
    "pergunta": "Micro-Checkpoint 2: Sistema Eleitoral e Renovação do Senado Federal",
    "item": "O Senado Federal é composto por representantes dos Estados e do Distrito Federal eleitos pelo sistema proporcional para mandato de quatro anos, com renovação quadrienal total de seus membros.",
    "gabarito": "E",
    "justificativa": "Errado! O Senado Federal adota o sistema MAJORITÁRIO, o mandato de cada senador é de 8 ANOS, e a renovação é parcial alternada (1/3 e 2/3 a cada 4 anos), conforme preconiza o art. 46 da CF/88.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "versao_correta": "Senadores representam Estados e DF, pelo sistema majoritário, mandato de oito anos e renovação alternada de um e dois terços."
  },
  {
    "id": "cp-10-5-3",
    "pergunta": "Micro-Checkpoint 3: Poderes e Limites Constitucionais das CPIs",
    "item": "Em virtude de possuírem poderes de investigação próprios das autoridades judiciais, as comissões parlamentares de inquérito têm competência constitucional para decretar a interceptação das comunicações telefônicas (escuta) e a busca e apreensão domiciliar noturna dos alvos investigados.",
    "gabarito": "E",
    "justificativa": "Errado! As CPIs NÃO podem determinar interceptação telefônica (escuta em tempo real) nem busca e apreensão domiciliar, atos que dependem estritamente de reserva de jurisdição do Poder Judiciário (CF, art. 5º, X, XI e XII e art. 58, § 3º).",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "versao_correta": "CPIs não podem decretar interceptação telefônica nem busca domiciliar coercitiva; poderes investigatórios respeitam reserva de jurisdição."
  },
  {
    "id": "rt-10-5-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A CF fixa expressamente no art. 45 o total permanente de 513 deputados para todas as legislaturas.",
    "gabarito": "E",
    "justificativa": "O artigo remete a lei complementar e estabelece critérios e limites.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar",
    "versao_correta": "Composição efetiva e regra constitucional devem ser distinguidas."
  },
  {
    "id": "rt-10-5-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A convocação extraordinária exclui toda possibilidade de apreciar MPs não expressas no ato de convocação.",
    "gabarito": "E",
    "justificativa": "O art. 57, § 8º, inclui MPs em vigor.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar",
    "versao_correta": "Há ressalva constitucional específica para medidas provisórias em vigor."
  },
  {
    "id": "rt-10-5-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Poderes de investigação de CPI não incluem automaticamente todos os poderes jurisdicionais.",
    "gabarito": "C",
    "justificativa": "Busca domiciliar coercitiva e interceptação estão entre as matérias sujeitas à reserva de jurisdição.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-5-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O entendimento do STF de 2025 permite manter foro após o afastamento para crimes praticados no cargo e em razão das funções.",
    "gabarito": "C",
    "justificativa": "A orientação tem condições temporais e funcionais; não abrange automaticamente qualquer delito.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-5-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A declaração de perda de mandato pela Mesa dispensa ampla defesa por não ser deliberação do Plenário.",
    "gabarito": "E",
    "justificativa": "O art. 55, § 3º, assegura ampla defesa.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar",
    "versao_correta": "A defesa é assegurada também nas hipóteses declaradas pela Mesa."
  },
  {
    "id": "rt-10-5-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A apreciação política congressual é dispensada automaticamente em qualquer intervenção federal.",
    "gabarito": "E",
    "justificativa": "A dispensa tem hipóteses e condições específicas.",
    "fonte": "Constituição Federal — Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.; STF — Constituição e Supremo: art. 53 — Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.; STF — Informativo 1168, HC 232.627 e INQ 4.787 — Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.; STF — Constituição e Supremo: art. 5º — Reserva de jurisdição, CPIs e garantias fundamentais.",
    "editalRef": "Conhecimentos Básicos - CF/88 arts. 44 a 58 (Poder Legislativo e Parlamentares)",
    "habilidade": "aplicar",
    "versao_correta": "Devem ser observados o art. 36 e suas ressalvas."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-10-5-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-5-fonte-stf53",
      "nome": "STF — Constituição e Supremo: art. 53",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Constituição e Supremo: art. 53",
      "ideiaChave": "Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-5-fonte-foro",
      "nome": "STF — Informativo 1168, HC 232.627 e INQ 4.787",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Informativo 1168, HC 232.627 e INQ 4.787",
      "ideiaChave": "Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-5-fonte-reserva",
      "nome": "STF — Constituição e Supremo: art. 5º",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Constituição e Supremo: art. 5º",
      "ideiaChave": "Reserva de jurisdição, CPIs e garantias fundamentais.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-10-5-4",
      "afirmacao": "O entendimento do STF de 2025 permite manter foro após o afastamento para crimes praticados no cargo e em razão das funções.",
      "gabarito": "C",
      "porQue": "A orientação tem condições temporais e funcionais; não abrange automaticamente qualquer delito."
    },
    {
      "id": "memoria-rt-10-5-5",
      "afirmacao": "A declaração de perda de mandato pela Mesa dispensa ampla defesa por não ser deliberação do Plenário.",
      "gabarito": "E",
      "porQue": "O art. 55, § 3º, assegura ampla defesa."
    },
    {
      "id": "memoria-rt-10-5-6",
      "afirmacao": "A apreciação política congressual é dispensada automaticamente em qualquer intervenção federal.",
      "gabarito": "E",
      "porQue": "A dispensa tem hipóteses e condições específicas."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-10-5-bloco-1",
    "titulo": "Estrutura Constitucional do Poder Legislativo (CF/88, Arts. 44 a 47)",
    "objetivos": [
      "Distinguir representação, composição constitucional e números temporais."
    ],
    "conteudo": "O Poder Legislativo da União é organizado sob o modelo de **Bicameralismo Federativo**, sendo exercido pelo **Congresso Nacional**, que se compõe da **Câmara dos Deputados** e do **Senado Federal** (CF, art. 44).\n\n```tree\nTITLE: Arquitetura Bicameral do Congresso Nacional (CF/88)\n- Congresso Nacional (Poder Legislativo da União - Art. 44)\n  - Câmara dos Deputados (Art. 45) | Representação Popular\n    - Sistema Eleitoral Proporcional | Mandato de 4 anos (1 legislatura)\n    - Bancadas proporcionais à população | Mínimo 8 e Máximo 70 por Estado/DF (513 na legislatura em curso em 2026; observe a referência temporal)\n    - Cada Território Federal elege 4 Deputados Federais fixos\n  - Senado Federal (Art. 46) | Representação Federativa Paritária\n    - Sistema Eleitoral Majoritário | Mandato de 8 anos (2 legislaturas)\n    - Paridade federativa: 3 Senadores e 2 suplentes por Estado e DF (Total: 81)\n    - Renovação quadrienal alternada: 1/3 (27 vagas) e 2/3 (54 vagas)\n```\n\n#### A. A Câmara dos Deputados (Art. 45)\n* **Natureza da Representação:** Representa o **povo brasileiro**.\n* **Sistema Eleitoral:** **Proporcional** (calculado pelo quociente eleitoral e quociente partidário, admitindo as sobras eleitorais reguladas pelo Código Eleitoral).\n* **Número de Membros:** O número total de deputados e a representação de cada Estado e do DF são fixados por **lei complementar**, proporcionalmente à população (mínimo de **8** e máximo de **70** deputados por unidade da federação).\n* **Territórios Federais:** Caso venham a ser criados, cada território elegerá **4 deputados federais** (CF, art. 45, § 2º).\n* **Duração do Mandato:** **4 anos**, correspondente a uma **legislatura** completa (CF, art. 44, parágrafo único).\n\n#### B. O Senado Federal (Art. 46)\n* **Natureza da Representação:** Representa os **Estados e o Distrito Federal** (princípio da paridade federativa).\n* **Sistema Eleitoral:** **Majoritário** simples.\n* **Composição Paritária:** Cada Estado e o Distrito Federal elegem **3 senadores**, cada um com **dois suplentes** (CF, art. 46, § 3º).\n* **Duração do Mandato:** **8 anos** (equivale a duas legislaturas completas).\n* **Renovação das Cadeiras:** A representação do Senado é renovada de quatro em quatro anos, **alternadamente, por um terço (1/3)** e **por dois terços (2/3)** (CF, art. 46, § 2º).\n\n---\n\n\n\nA Constituição não fixa no art. 45 o total de 513: estabelece a definição por lei complementar, os critérios e limites. Diferencie a regra constitucional, a composição efetiva e eventuais discussões sobre legislaturas futuras. Os números de votos usados nos exemplos desta aula consideram 513 deputados e 81 senadores.\n\n**Aplicação e recuperação:** Senado representa Estados e DF, com três membros por unidade; Câmara representa o povo. Não troque sistema eleitoral, mandato e renovação.",
    "checkpointIds": [
      "cp-10-5-2",
      "rt-10-5-1"
    ]
  },
  {
    "id": "sub-10-5-bloco-2",
    "titulo": "Funcionamento, Sessões Legislativas e Competências (CF/88, Arts. 48 a 57)",
    "objetivos": [
      "Relacionar períodos e convocação com exceções constitucionais."
    ],
    "conteudo": "```timeline\n01/02 | 1. Sessões Preparatórias | Posse dos diplomados e eleição das respectivas Mesas Diretoras (mandato de 2 anos, vedada recondução no mesmo cargo na mesma legislatura)\n---> Início do Primeiro Período\n02/02 a 17/07 | 2. Primeiro Período da Sessão Ordinária | Funcionamento constitucional formal; não se interrompe sem a aprovação do projeto de LDO\n---> Recesso Parlamentar de Julho (18/07 a 31/07)\n01/08 a 22/12 | 3. Segundo Período da Sessão Ordinária | Tramitação orçamentária (LOA) e encerramento dos trabalhos anuais da Sessão Legislativa Ordinária\n---> Convocação Extraordinária (Eventual)\nRecesso | 4. Sessão Legislativa Extraordinária | Convocada pelo Presidente do Senado ou Presidente da República/maioria dos membros; delibera sobre a matéria convocada, ressalvada a inclusão de medidas provisórias conforme art. 57, § 8º\n```\n\n#### A. A Sessão Legislativa Ordinária (SLO - Art. 57)\n* O Congresso Nacional reúne-se anualmente na Capital Federal, de **2 de fevereiro a 17 de julho** e de **1º de agosto a 22 de dezembro**.\n* **Condição de Recesso:** A sessão legislativa ordinária **NÃO será interrompida** sem a prévia aprovação do projeto de **lei de diretrizes orçamentárias (LDO)** (CF, art. 57, § 2º).\n\n#### B. Sessões Conjuntas do Congresso Nacional (Art. 57, § 3º)\nA Câmara e o Senado reúnem-se em sessão conjunta para:\n1. Inaugurar a sessão legislativa;\n2. Elaborar o **Regimento Comum** e regular a criação de serviços comuns às duas Casas;\n3. Receber o compromisso do Presidente e do Vice-Presidente da República;\n4. Conhecer do **veto presidencial** e sobre ele deliberar (prazo de 30 dias, deliberação por voto da maioria absoluta de cada Casa em escrutínio aberto).\n\n#### C. Sessão Legislativa Extraordinária (Art. 57, §§ 6º e 7º)\n* **Legitimidade de Convocação:**\n  * Pelo **Presidente do Senado Federal**, em caso de decretação de estado de defesa, intervenção federal, pedido de autorização para estado de sítio ou posse do Presidente/Vice-Presidente;\n  * Pelo **Presidente da República**, pelos **Presidentes da Câmara e do Senado**, ou a **requerimento da maioria dos membros de ambas as Casas**, em caso de urgência ou relevante interesse público, exigindo-se em qualquer desses casos a aprovação da maioria absoluta de cada Casa do Congresso Nacional.\n* **Restrição Temática:** Na sessão legislativa extraordinária, o Congresso Nacional delibera sobre a matéria da convocação, ressalvada a hipótese do **art. 57, § 8º**, que inclui medidas provisórias em vigor. Uma afirmação de exclusividade sem a ressalva está incompleta.\n\n---\n\n\n\nO art. 57 trata de sessão legislativa anual e convocação extraordinária do Congresso. Não confunda isso com uma sessão plenária extraordinária convocada em dia ou horário diferente no RICD. A palavra “extraordinária” precisa ser lida com seu objeto e contexto.\n\n**Aplicação e recuperação:** Uma convocação extraordinária não exclui a regra específica sobre MPs em vigor. Distinguir a ressalva evita generalização.",
    "checkpointIds": [
      "rt-10-5-2"
    ]
  },
  {
    "id": "sub-10-5-bloco-3",
    "titulo": "Comissões Parlamentares e Comissões Parlamentares de Inquérito (CPIs - Art. 58)",
    "objetivos": [
      "Delimitar poderes de investigação e reserva de jurisdição."
    ],
    "conteudo": "O Congresso Nacional e suas Casas funcionam estruturados em **Comissões Permanentes e Temporárias**, assegurando-se, tanto quanto possível, a **representação proporcional dos partidos políticos ou dos blocos parlamentares** (CF, art. 58, § 1º).\n\n#### As Comissões Parlamentares de Inquérito (CPIs - Art. 58, § 3º)\nAs CPIs constituem um dos mais poderosos instrumentos de fiscalização e controle político-constitucional da minoria parlamentar:\n\n* **Requisitos Constitucionais Cumulativos:**\n  1. Requerimento de pelo menos **um terço (1/3)** dos membros da Câmara dos Deputados e/ou do Senado Federal (direito público subjetivo das minorias parlamentares, insuscetível de veto ou bloqueio discricionário pela maioria);\n  2. Indicação de **fato determinado** (objeto delimitado a ser investigado);\n  3. Fixação de **prazo certo** (admitidas prorrogações dentro da mesma legislatura).\n* **Poderes de Investigação Próprios das Autoridades Judiciais:**\n  * As CPIs podem, por deliberação fundamentada da maioria de seus membros:\n    * Determinar a **quebra de sigilo bancário, fiscal e telefônico** (acesso aos registros telefônicos pretéritos e extratos de contas);\n    * Convocar e inquirir testemunhas (sob compromisso de dizer a verdade) e indiciados (com direito ao silêncio contra a autoincriminação e assistência de advogado);\n    * Requisitar informações e documentos sigilosos de órgãos públicos e empresas privadas.\n* **Limitações Constitucionais Estritas (Reserva de Jurisdição do Judiciário):**\n  * As CPIs **NÃO possuem poderes judiciais plenos**, sendo-lhes absolutamente vedado:\n    * Decretar prisão preventiva ou temporária. Prisão em flagrante é instituto distinto, não exceção que converta flagrante em prisão preventiva;\n    * Determinar a **interceptação telefônica** (a \"escuta\" e gravação de conversas em tempo real é ato privativo da autoridade judiciária);\n    * Determinar **busca e apreensão domiciliar** (a busca coercitiva sujeita à reserva de jurisdição não pode ser decretada pela CPI. O art. 5º, XI, também contempla hipóteses próprias como flagrante, desastre e socorro; ordem judicial não autoriza, por si, busca domiciliar noturna);\n    * Decretar o sequestro, indisponibilidade ou arresto de bens de pessoas investigadas;\n    * Anular ou cassar atos de outros Poderes da República.\n* **Destinação dos Trabalhos:** As conclusões da CPI são encaminhadas ao **Ministério Público**, para que este promova a responsabilidade civil ou criminal dos infratores perante o Poder Judiciário.\n\n---\n\n\n\nA fundamentação deve delimitar pertinência, objeto e necessidade. Acesso a registros de comunicações e interceptar seu conteúdo em tempo real são operações diferentes. A CPI investiga e encaminha conclusões: não condena criminalmente, não aplica pena judicial nem substitui o Ministério Público. O direito de não produzir prova contra si deve ser respeitado inclusive quando a pessoa é chamada sob rótulo inadequado.\n\n**Aplicação e recuperação:** Pedir dados telefônicos passados e interceptar conversas futuras não são a mesma diligência. A CPI não recebe todos os poderes de um juiz.",
    "checkpointIds": [
      "cp-10-5-3",
      "rt-10-5-3"
    ]
  },
  {
    "id": "sub-10-5-bloco-4",
    "titulo": "Estatuto dos Congressistas e Regime Jurídico Parlamentar (CF/88, Arts. 53 a 56)",
    "objetivos": [
      "Separar imunidade material, prisão e foro com requisitos próprios."
    ],
    "conteudo": "O estatuto dos parlamentares é estruturado não como privilégio pessoal, mas como **garantia institucional** da independência e do livre exercício do Poder Legislativo.\n\n```tree\nTITLE: Estatuto dos Congressistas: Imunidades e Prerrogativas (CF, Art. 53)\n- Prerrogativas Constitucionais dos Deputados e Senadores\n  - Inviolabilidade Material / Real (CF, art. 53, caput)\n    - Inviolabilidade civil e penal por opiniões, palavras e votos\n    - Local da manifestação não deve ser tratado como autorização para qualquer conduta; examine o nexo e a jurisprudência aplicável\n    - Fora do parlamento: exige nexo de causalidade funcional direto com a atividade parlamentar\n  - Imunidade Formal / Processual (CF, art. 53, §§ 2º a 5º)\n    - Prisão: Regra do art. 53, § 2º, desde a diplomação, distinguindo prisão cautelar e execução de condenação\n    - Remessa dos autos em 24h à respectiva Casa para voto da maioria absoluta sobre a manutenção da prisão\n    - Sustação do processo penal: Por iniciativa de partido político com assento na Casa (suspende a prescrição)\n    - Foro especial por prerrogativa de função: Competência do Supremo Tribunal Federal (crimes no mandato e funcionais)\n    - Isenção do dever de testemunhar: Informações sigilosas recebidas em razão do mandato (art. 53, § 6º)\n```\n\n#### A. Inviolabilidade Material / Real (Art. 53, caput)\n* Os Deputados e Senadores são **invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos**.\n* **Alcance Jurisprudencial do STF:**\n  * *Pronunciamentos intra muros (dentro do Congresso):* Há formulações jurisprudenciais que valorizam a atuação no recinto, mas a imunidade não pode ser convertida em salvo-conduto universal para qualquer ato. Examine natureza, vínculo funcional, contexto e precedente aplicável;\n  * *Pronunciamentos extra muros (fora do Congresso, redes sociais, imprensa):* A inviolabilidade exige demonstração de **nexo de causalidade direto** com o exercício das funções legislativas.\n\n#### B. Imunidade Formal / Processual (Art. 53, §§ 2º a 5º)\n* **Garantia Contra a Prisão (Art. 53, § 2º):**\n  * Desde a **expedição do diploma**, os membros do Congresso Nacional não poderão ser presos, **salvo em flagrante de crime inafiançável**.\n  * Nessa hipótese, os autos são remetidos dentro de **vinte e quatro horas** à Casa respectiva, para que, pelo voto da **maioria de seus membros** (maioria absoluta), resolva sobre a prisão.\n* **Sustação da Ação Penal (Art. 53, §§ 3º a 5º):**\n  * Recebida a denúncia contra o Senador ou Deputado, por crime ocorrido **após a diplomação**, o STF dará ciência à Casa respectiva, que, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros, poderá, até a decisão final, sustar o andamento da ação.\n  * O pedido de sustação é apreciado no prazo improrrogável de 45 dias, e a sustação **suspende a prescrição** enquanto durar o mandato.\n\n\n\n**Foro após o mandato:** o STF decidiu em 2025, no HC 232.627 e INQ 4.787, que o foro para crimes praticados no cargo e em razão das funções subsiste após o afastamento, mesmo quando a investigação ou ação começa depois. Não é foro para qualquer crime da vida da pessoa. Identifique vínculo temporal e funcional e confira a evolução jurisprudencial até a referência admitida no edital. A data futura de corte jurisprudencial não significa que julgados ainda não publicados tenham sido conferidos.\n\n**Aplicação e recuperação:** Um crime anterior e sem vínculo com a função não recebe foro apenas porque seu autor foi eleito depois. Examine as condições da orientação aplicável.",
    "checkpointIds": [
      "cp-10-5-1",
      "rt-10-5-4"
    ]
  },
  {
    "id": "sub-10-5-bloco-5",
    "titulo": "Incompatibilidades, perda e afastamento do mandato",
    "objetivos": [
      "Aplicar competências e defesa nos regimes de perda e afastamento."
    ],
    "conteudo": "#### Incompatibilidades Parlamentares (Art. 54)\nA Constituição estabelece proibições rígidas para preservar a moralidade e a independência dos congressistas:\n1. **Desde a Diplomação (Art. 54, I):**\n   * Não podem firmar ou manter contrato com pessoa jurídica de direito público, autarquia, empresa pública, sociedade de economia mista ou empresa concessionária de serviço público, **salvo quando o contrato obedecer a cláusulas uniformes**;\n   * Não podem aceitar ou exercer cargo, função ou emprego remunerado em tais entidades, inclusive os demissíveis *ad nutum*.\n2. **Desde a Posse (Art. 54, II):**\n   * Não podem ser proprietários, controladores ou diretores de empresa que goze de favor decorrente de contrato com pessoa jurídica de direito público;\n   * Não podem patrocinar causa em que sejam interessadas pessoas estatais ou paraestatais;\n   * Não podem ser titulares de mais de um cargo ou mandato público eletivo.\n\n#### D. Perda do Mandato Parlamentar (Art. 55)\nÉ necessário separar entre as hipóteses de **cassação deliberada pelo plenário** e as hipóteses de **extinção declarada de ofício pela Mesa**:\n\n| Hipótese de Perda do Mandato (CF, Art. 55) | Procedimento e Quórum Constitucional | Competência Decisória |\n|---|---|---|\n| Infringência às proibições do Art. 54 (incompatibilidades) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Conduta incompatível com o decoro parlamentar (Art. 55, II) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Condenação criminal transitada em julgado (Art. 55, VI) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |\n| Deixar de comparecer à terça parte (1/3) das sessões ordinárias | Procedimento constitucional assegurada ampla defesa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n| Perda ou suspensão dos direitos políticos (Art. 55, IV) | Procedimento constitucional assegurada ampla defesa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n| Decretação expressa pela Justiça Eleitoral (Art. 55, V) | Comunicação judicial direta à Casa legislativa | Declaração pela Mesa, de ofício ou mediante provocação nas hipóteses constitucionais |\n\n#### E. Licenças Permitidas e Suplência (Art. 56)\n* **NÃO perde o mandato** o Deputado ou Senador investido no cargo de:\n  * **Ministro de Estado**;\n  * **Governador de Território**;\n  * **Secretário de Estado**, do Distrito Federal, de Território ou de Prefeitura de Capital;\n  * Em tais hipóteses, o congressista pode optar pela remuneração do mandato.\n* O **suplente** é convocado nos casos de vaga, investidura nos cargos executivos autorizados ou licença para tratamento de saúde **superior a cento e vinte (120) dias**.\n\n---\n\n\n\nO art. 55, § 3º, assegura defesa também nas hipóteses declaradas pela Mesa. Na aplicação de condenação criminal, a jurisprudência apresenta distinções quanto a penas e impedimento de exercício; o quadro reproduz o desenho constitucional e não dispensa analisar a decisão judicial concreta. O art. 56, II, também admite licença por motivo de doença ou para interesse particular sem remuneração, nesta última hipótese até 120 dias por sessão legislativa.\n\n**Aplicação e recuperação:** Direitos políticos suspensos e quebra de decoro têm caminhos constitucionais distintos. Identifique fundamento antes de apontar o órgão decisório.",
    "checkpointIds": [
      "rt-10-5-5"
    ]
  },
  {
    "id": "sub-10-5-bloco-6",
    "titulo": "Intervenção Federal (CF/88, Arts. 34 a 36)",
    "objetivos": [
      "Identificar hipótese e controle da intervenção com condições."
    ],
    "conteudo": "A Intervenção Federal é medida de caráter excepcional e temporário que afasta pontualmente a autonomia político-administrativa de um Estado ou do DF para resguardar a integridade do pacto federativo:\n\n#### A. Hipóteses Taxativas de Intervenção da União nos Estados/DF (Art. 34)\n* Manter a integridade nacional;\n* Repelir invasão estrangeira ou de uma unidade da Federação em outra;\n* Pôr termo a grave comprometimento da ordem pública;\n* Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;\n* Reorganizar as finanças da unidade federada;\n* Prover a execução de lei federal, ordem ou decisão judicial;\n* Assegurar a observância dos **princípios constitucionais sensíveis**: forma republicana, sistema representativo e regime democrático; direitos da pessoa humana; autonomia municipal; prestação de contas da administração pública; aplicação do mínimo exigido em educação e saúde.\n\n#### B. Controle Político Congressual (Art. 36)\n* O **Decreto de Intervenção** é editado privativamente pelo Presidente da República, fixando a amplitude, o prazo e as condições de execução e nomeando, se couber, o interventor.\n* **Submissão ao Congresso Nacional:** O decreto de intervenção deve ser submetido à apreciação do Congresso Nacional no prazo improrrogável de **vinte e quatro (24) horas**. Se o Congresso estiver em recesso, será convocado extraordinariamente no mesmo prazo.\n* **Apreciação Política:** O Congresso delibera por **maioria simples** de cada uma das Casas segundo o procedimento aplicável; a competência congressual não elimina a necessidade de respeitar a atuação das Casas.\n* **Dispensa Excepcional do Controle Político (Art. 36, § 3º):** Nos casos previstos no art. 34, VI e VII, ou no art. 35, IV, a apreciação pelo Congresso ou Assembleia pode ser dispensada nas condições do art. 36, § 3º, limitando-se o decreto a suspender o ato impugnado se isso bastar para restaurar a normalidade. Não é regra para qualquer intervenção, nem apenas para execução de lei ou ordem judicial.\n\n**Aplicação e recuperação:** O art. 36 prevê procedimentos e exceções de controle. Não aplique a dispensa do § 3º a toda intervenção.",
    "checkpointIds": [
      "rt-10-5-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 5º, XI–XII, 34–36 e 44–58; condições e exceções.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "stf53",
    "titulo": "STF — Constituição e Supremo: art. 53",
    "localizador": "Imunidades e vínculo funcional; não extrapolar um precedente para todo caso.",
    "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=53&abrirBase=CF"
  },
  {
    "id": "foro",
    "titulo": "STF — Informativo 1168, HC 232.627 e INQ 4.787",
    "localizador": "Foro de crimes no cargo e em razão das funções após o afastamento; decisão de março de 2025.",
    "url": "https://www.stf.jus.br/arquivo/informativo/documento/informativo1168.htm"
  },
  {
    "id": "reserva",
    "titulo": "STF — Constituição e Supremo: art. 5º",
    "localizador": "Reserva de jurisdição, CPIs e garantias fundamentais.",
    "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=5&abrirBase=CF"
  }
],
};
