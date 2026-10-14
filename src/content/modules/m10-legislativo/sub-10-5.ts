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
  descricaoCurta: 'Organização do Poder Legislativo (Congresso Nacional, Câmara e Senado), sessões legislativas, comissões e CPIs, estatuto dos congressistas (inviolabilidade, imunidades formais, prerrogativas, incompatibilidades e perda de mandato) e intervenção federal.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'José Afonso da Silva',
    'Gilmar Ferreira Mendes',
    'Alexandre de Moraes',
    'Luís Roberto Barroso',
    'Michel Temer',
  ],
  alertasCebraspe: [
    'Bicameralismo Federativo e Sistemas Eleitorais: A Câmara dos Deputados representa o povo, eleita pelo SISTEMA PROPORCIONAL para mandato de 4 anos (mínimo de 8 e máximo de 70 deputados por Estado/DF). O Senado Federal representa os Estados e o DF, eleito pelo SISTEMA MAJORITÁRIO para mandato de 8 anos (3 senadores por unidade federativa, renovados alternadamente a cada 4 anos por 1/3 e 2/3). O Cebraspe inverte com frequência o mandato e o sistema de eleição de cada Casa!',
    'Inviolabilidade Material vs. Imunidade Formal Processual (CF, art. 53): A inviolabilidade civil e penal por opiniões, palavras e votos alcança o parlamentar no exercício do mandato. Quanto à imunidade formal, desde a expedição do diploma os congressistas NÃO podem ser presos, SALVO em flagrante de crime inafiançável, remetendo-se os autos em 24h à respectiva Casa para que a maioria absoluta delibere sobre a prisão.',
    'Poderes e Limitações das CPIs (CF, art. 58, § 3º): Requisitos constitucionais: requerimento de 1/3 dos membros, fato determinado e prazo certo. As CPIs possuem poderes instrutórios próprios de autoridades judiciais (quebra de sigilo bancário, fiscal e de registros telefônicos), mas NÃO possuem competência para decretar prisão (salvo flagrante), NÃO podem determinar busca e apreensão domiciliar nem autorizar interceptação telefônica (escuta), que dependem de reserva de jurisdição do Poder Judiciário.',
    'Perda de Mandato Parlamentar (CF, art. 55): Cassação por voto da MAIORIA ABSOLUTA em votação aberta (incompatibilidades do art. 54, falta de decoro ou condenação criminal transitada em julgado) vs. Extinção declarada de ofício pela MESA DIRETORA (ausência à terça parte das sessões ordinárias, perda/suspensão de direitos políticos ou ordem da Justiça Eleitoral).',
    'Controle Político da Intervenção Federal (CF, art. 36): O decreto presidencial de intervenção é submetido ao Congresso Nacional no prazo improrrogável de 24 horas, que delibera por maioria simples. É DISPENSADA a apreciação congressual quando a intervenção tiver por objeto a execução de ordem ou decisão judicial ou de lei federal.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Constitucional Comparativa: Câmara dos Deputados vs. Senado Federal (CF/88)',
    colunas: [
      'Dimensão Constitucional',
      'Câmara dos Deputados (Art. 45)',
      'Senado Federal (Art. 46)',
      'Regra Crítica Cebraspe',
    ],
    linhas: [
      [
        'Representação Política',
        'Representantes do Povo brasileiro',
        'Representantes dos Estados e do Distrito Federal',
        'O Senado representa as unidades federadas paritariamente (3 por Estado/DF)',
      ],
      [
        'Sistema Eleitoral',
        'Sistema Proporcional',
        'Sistema Majoritário simples',
        'Câmara usa quociente eleitoral/partidário; Senado é eleição majoritária',
      ],
      [
        'Duração do Mandato',
        '4 anos (1 Legislatura = 4 anos)',
        '8 anos (2 Legislaturas consecutivas)',
        'Mandato de senador dura 8 anos; o mandato de deputado dura 4 anos',
      ],
      [
        'Composição e Vagas',
        'Proporcional à população (mínimo 8, máximo 70)',
        'Paritário: 3 Senadores e 2 suplentes por unidade',
        'Total fixo na CF para o Senado (81 senadores); flexível na Câmara por LC (513)',
      ],
      [
        'Renovação das Cadeiras',
        'Renovação total (100%) a cada 4 anos',
        'Renovação parcial alternada: 1/3 e 2/3 a cada 4 anos',
        'A cada 4 anos os Estados elegem ora 1 senador, ora 2 senadores simultaneamente',
      ],
      [
        'Competências Privativas',
        'Autorizar processo contra PR (art. 51, I - 2/3); eleger 2 membros do CF (art. 51, V)',
        'Processar e julgar PR e Ministros (art. 52, I/II); aprovar autoridades e ministros',
        'A Câmara faz o juízo de admissibilidade (2/3); o Senado realiza o julgamento formal',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Estrutura Constitucional do Poder Legislativo (CF/88, Arts. 44 a 47)

O Poder Legislativo da União é organizado sob o modelo de **Bicameralismo Federativo**, sendo exercido pelo **Congresso Nacional**, que se compõe da **Câmara dos Deputados** e do **Senado Federal** (CF, art. 44).

\`\`\`tree
TITLE: Arquitetura Bicameral do Congresso Nacional (CF/88)
- Congresso Nacional (Poder Legislativo da União - Art. 44)
  - Câmara dos Deputados (Art. 45) | Representação Popular
    - Sistema Eleitoral Proporcional | Mandato de 4 anos (1 legislatura)
    - Bancadas proporcionais à população | Mínimo 8 e Máximo 70 por Estado/DF (Total: 513)
    - Cada Território Federal elege 4 Deputados Federais fixos
  - Senado Federal (Art. 46) | Representação Federativa Paritária
    - Sistema Eleitoral Majoritário | Mandato de 8 anos (2 legislaturas)
    - Paridade federativa: 3 Senadores e 2 suplentes por Estado e DF (Total: 81)
    - Renovação quadrienal alternada: 1/3 (27 vagas) e 2/3 (54 vagas)
\`\`\`

#### A. A Câmara dos Deputados (Art. 45)
* **Natureza da Representação:** Representa o **povo brasileiro**.
* **Sistema Eleitoral:** **Proporcional** (calculado pelo quociente eleitoral e quociente partidário, admitindo as sobras eleitorais reguladas pelo Código Eleitoral).
* **Número de Membros:** O número total de deputados e a representação de cada Estado e do DF são fixados por **lei complementar**, proporcionalmente à população (mínimo de **8** e máximo de **70** deputados por unidade da federação).
* **Territórios Federais:** Caso venham a ser criados, cada território elegerá **4 deputados federais** (CF, art. 45, § 2º).
* **Duração do Mandato:** **4 anos**, correspondente a uma **legislatura** completa (CF, art. 44, parágrafo único).

#### B. O Senado Federal (Art. 46)
* **Natureza da Representação:** Representa os **Estados e o Distrito Federal** (princípio da paridade federativa).
* **Sistema Eleitoral:** **Majoritário** simples.
* **Composição Paritária:** Cada Estado e o Distrito Federal elegem **3 senadores**, cada um com **dois suplentes** (CF, art. 46, § 3º).
* **Duração do Mandato:** **8 anos** (equivale a duas legislaturas completas).
* **Renovação das Cadeiras:** A representação do Senado é renovada de quatro em quatro anos, **alternadamente, por um terço (1/3)** e **por dois terços (2/3)** (CF, art. 46, § 2º).

---

### 2. Funcionamento, Sessões Legislativas e Competências (CF/88, Arts. 48 a 57)

\`\`\`timeline
01/02 | 1. Sessões Preparatórias | Posse dos diplomados e eleição das respectivas Mesas Diretoras (mandato de 2 anos, vedada recondução no mesmo cargo na mesma legislatura)
---> Início do Primeiro Período
02/02 a 17/07 | 2. Primeiro Período da Sessão Ordinária | Funcionamento constitucional formal; não se interrompe sem a aprovação do projeto de LDO
---> Recesso Parlamentar de Julho (18/07 a 31/07)
01/08 a 22/12 | 3. Segundo Período da Sessão Ordinária | Tramitação orçamentária (LOA) e encerramento dos trabalhos anuais da Sessão Legislativa Ordinária
---> Convocação Extraordinária (Eventual)
Recesso | 4. Sessão Legislativa Extraordinária | Convocada pelo Presidente do Senado ou Presidente da República/maioria dos membros; delibera APENAS sobre as matérias convocadas
\`\`\`

#### A. A Sessão Legislativa Ordinária (SLO - Art. 57)
* O Congresso Nacional reúne-se anualmente na Capital Federal, de **2 de fevereiro a 17 de julho** e de **1º de agosto a 22 de dezembro**.
* **Condição de Recesso:** A sessão legislativa ordinária **NÃO será interrompida** sem a prévia aprovação do projeto de **lei de diretrizes orçamentárias (LDO)** (CF, art. 57, § 2º).

#### B. Sessões Conjuntas do Congresso Nacional (Art. 57, § 3º)
A Câmara e o Senado reúnem-se em sessão conjunta para:
1. Inaugurar a sessão legislativa;
2. Elaborar o **Regimento Comum** e regular a criação de serviços comuns às duas Casas;
3. Receber o compromisso do Presidente e do Vice-Presidente da República;
4. Conhecer do **veto presidencial** e sobre ele deliberar (prazo de 30 dias, deliberação por voto da maioria absoluta de cada Casa em escrutínio aberto).

#### C. Sessão Legislativa Extraordinária (Art. 57, §§ 6º e 7º)
* **Legitimidade de Convocação:**
  * Pelo **Presidente do Senado Federal**, em caso de decretação de estado de defesa, intervenção federal, pedido de autorização para estado de sítio ou posse do Presidente/Vice-Presidente;
  * Pelo **Presidente da República**, pelos **Presidentes da Câmara e do Senado**, ou a **requerimento da maioria dos membros de ambas as Casas**, em caso de urgência ou relevante interesse público, exigindo-se em qualquer desses casos a aprovação da maioria absoluta de cada Casa do Congresso Nacional.
* **Restrição Temática:** Na sessão legislativa extraordinária, o Congresso Nacional somente delibera sobre as matérias para as quais foi formalmente convocado.

---

### 3. Comissões Parlamentares e Comissões Parlamentares de Inquérito (CPIs - Art. 58)

O Congresso Nacional e suas Casas funcionam estruturados em **Comissões Permanentes e Temporárias**, assegurando-se, tanto quanto possível, a **representação proporcional dos partidos políticos ou dos blocos parlamentares** (CF, art. 58, § 1º).

#### As Comissões Parlamentares de Inquérito (CPIs - Art. 58, § 3º)
As CPIs constituem um dos mais poderosos instrumentos de fiscalização e controle político-constitucional da minoria parlamentar:

* **Requisitos Constitucionais Cumulativos:**
  1. Requerimento de pelo menos **um terço (1/3)** dos membros da Câmara dos Deputados e/ou do Senado Federal (direito público subjetivo das minorias parlamentares, insuscetível de veto ou bloqueio discricionário pela maioria);
  2. Indicação de **fato determinado** (objeto delimitado a ser investigado);
  3. Fixação de **prazo certo** (admitidas prorrogações dentro da mesma legislatura).
* **Poderes de Investigação Próprios das Autoridades Judiciais:**
  * As CPIs podem, por deliberação fundamentada da maioria de seus membros:
    * Determinar a **quebra de sigilo bancário, fiscal e telefônico** (acesso aos registros telefônicos pretéritos e extratos de contas);
    * Convocar e inquirir testemunhas (sob compromisso de dizer a verdade) e indiciados (com direito ao silêncio contra a autoincriminação e assistência de advogado);
    * Requisitar informações e documentos sigilosos de órgãos públicos e empresas privadas.
* **Limitações Constitucionais Estritas (Reserva de Jurisdição do Judiciário):**
  * As CPIs **NÃO possuem poderes judiciais plenos**, sendo-lhes absolutamente vedado:
    * Decretar prisão preventiva ou temporária (salvo em **flagrante delito**);
    * Determinar a **interceptação telefônica** (a "escuta" e gravação de conversas em tempo real é ato privativo da autoridade judiciária);
    * Determinar **busca e apreensão domiciliar** (violação de domicílio sem consentimento só por ordem judicial fundamentada);
    * Decretar o sequestro, indisponibilidade ou arresto de bens de pessoas investigadas;
    * Anular ou cassar atos de outros Poderes da República.
* **Destinação dos Trabalhos:** As conclusões da CPI são encaminhadas ao **Ministério Público**, para que este promova a responsabilidade civil ou criminal dos infratores perante o Poder Judiciário.

---

### 4. Estatuto dos Congressistas e Regime Jurídico Parlamentar (CF/88, Arts. 53 a 56)

O estatuto dos parlamentares é estruturado não como privilégio pessoal, mas como **garantia institucional** da independência e do livre exercício do Poder Legislativo.

\`\`\`tree
TITLE: Estatuto dos Congressistas: Imunidades e Prerrogativas (CF, Art. 53)
- Prerrogativas Constitucionais dos Deputados e Senadores
  - Inviolabilidade Material / Real (CF, art. 53, caput)
    - Inviolabilidade civil e penal por opiniões, palavras e votos
    - No recinto do parlamento: presunção absoluta de nexo com o mandato
    - Fora do parlamento: exige nexo de causalidade funcional direto com a atividade parlamentar
  - Imunidade Formal / Processual (CF, art. 53, §§ 2º a 5º)
    - Prisão: Desde a expedição do diploma, NUNCA podem ser presos salvo flagrante de crime inafiançável
    - Remessa dos autos em 24h à respectiva Casa para voto da maioria absoluta sobre a manutenção da prisão
    - Sustação do processo penal: Por iniciativa de partido político com assento na Casa (suspende a prescrição)
    - Foro especial por prerrogativa de função: Competência do Supremo Tribunal Federal (crimes no mandato e funcionais)
    - Isenção do dever de testemunhar: Informações sigilosas recebidas em razão do mandato (art. 53, § 6º)
\`\`\`

#### A. Inviolabilidade Material / Real (Art. 53, caput)
* Os Deputados e Senadores são **invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos**.
* **Alcance Jurisprudencial do STF:**
  * *Pronunciamentos intra muros (dentro do Congresso):* A imunidade material é absoluta, operando presunção jurídica inafastável de pertinência temática com o exercício parlamentar;
  * *Pronunciamentos extra muros (fora do Congresso, redes sociais, imprensa):* A inviolabilidade exige demonstração de **nexo de causalidade direto** com o exercício das funções legislativas.

#### B. Imunidade Formal / Processual (Art. 53, §§ 2º a 5º)
* **Garantia Contra a Prisão (Art. 53, § 2º):**
  * Desde a **expedição do diploma**, os membros do Congresso Nacional não poderão ser presos, **salvo em flagrante de crime inafiançável**.
  * Nessa hipótese, os autos são remetidos dentro de **vinte e quatro horas** à Casa respectiva, para que, pelo voto da **maioria de seus membros** (maioria absoluta), resolva sobre a prisão.
* **Sustação da Ação Penal (Art. 53, §§ 3º a 5º):**
  * Recebida a denúncia contra o Senador ou Deputado, por crime ocorrido **após a diplomação**, o STF dará ciência à Casa respectiva, que, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros, poderá, até a decisão final, sustar o andamento da ação.
  * O pedido de sustação é apreciado no prazo improrrogável de 45 dias, e a sustação **suspende a prescrição** enquanto durar o mandato.

#### C. Incompatibilidades Parlamentares (Art. 54)
A Constituição estabelece proibições rígidas para preservar a moralidade e a independência dos congressistas:
1. **Desde a Diplomação (Art. 54, I):**
   * Não podem firmar ou manter contrato com pessoa jurídica de direito público, autarquia, empresa pública, sociedade de economia mista ou empresa concessionária de serviço público, **salvo quando o contrato obedecer a cláusulas uniformes**;
   * Não podem aceitar ou exercer cargo, função ou emprego remunerado em tais entidades, inclusive os demissíveis *ad nutum*.
2. **Desde a Posse (Art. 54, II):**
   * Não podem ser proprietários, controladores ou diretores de empresa que goze de favor decorrente de contrato com pessoa jurídica de direito público;
   * Não podem patrocinar causa em que sejam interessadas pessoas estatais ou paraestatais;
   * Não podem ser titulares de mais de um cargo ou mandato público eletivo.

#### D. Perda do Mandato Parlamentar (Art. 55)
O Cebraspe cobra enfaticamente a separação entre as hipóteses de **cassação deliberada pelo plenário** e as hipóteses de **extinção declarada de ofício pela Mesa**:

| Hipótese de Perda do Mandato (CF, Art. 55) | Procedimento e Quórum Constitucional | Competência Decisória |
|---|---|---|
| Infringência às proibições do Art. 54 (incompatibilidades) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |
| Conduta incompatível com o decoro parlamentar (Art. 55, II) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |
| Condenação criminal transitada em julgado (Art. 55, VI) | Votação aberta, maioria absoluta dos membros da Casa | Deliberação do Plenário da Casa respectiva |
| Deixar de comparecer à terça parte (1/3) das sessões ordinárias | Procedimento sumário assegurada ampla defesa | **Declaração de ofício pela Mesa Diretora** |
| Perda ou suspensão dos direitos políticos (Art. 55, IV) | Procedimento sumário de verificação documental | **Declaração de ofício pela Mesa Diretora** |
| Decretação expressa pela Justiça Eleitoral (Art. 55, V) | Comunicação judicial direta à Casa legislativa | **Declaração de ofício pela Mesa Diretora** |

#### E. Licenças Permitidas e Suplência (Art. 56)
* **NÃO perde o mandato** o Deputado ou Senador investido no cargo de:
  * **Ministro de Estado**;
  * **Governador de Território**;
  * **Secretário de Estado**, do Distrito Federal, de Território ou de Prefeitura de Capital;
  * Em tais hipóteses, o congressista pode optar pela remuneração do mandato.
* O **suplente** é convocado nos casos de vaga, investidura nos cargos executivos autorizados ou licença para tratamento de saúde **superior a cento e vinte (120) dias**.

---

### 5. Intervenção Federal (CF/88, Arts. 34 a 36)

A Intervenção Federal é medida de caráter excepcional e temporário que afasta pontualmente a autonomia político-administrativa de um Estado ou do DF para resguardar a integridade do pacto federativo:

#### A. Hipóteses Taxativas de Intervenção da União nos Estados/DF (Art. 34)
* Manter a integridade nacional;
* Repelir invasão estrangeira ou de uma unidade da Federação em outra;
* Pôr termo a grave comprometimento da ordem pública;
* Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;
* Reorganizar as finanças da unidade federada;
* Prover a execução de lei federal, ordem ou decisão judicial;
* Assegurar a observância dos **princípios constitucionais sensíveis**: forma republicana, sistema representativo e regime democrático; direitos da pessoa humana; autonomia municipal; prestação de contas da administração pública; aplicação do mínimo exigido em educação e saúde.

#### B. Controle Político Congressual (Art. 36)
* O **Decreto de Intervenção** é editado privativamente pelo Presidente da República, fixando a amplitude, o prazo e as condições de execução e nomeando, se couber, o interventor.
* **Submissão ao Congresso Nacional:** O decreto de intervenção deve ser submetido à apreciação do Congresso Nacional no prazo improrrogável de **vinte e quatro (24) horas**. Se o Congresso estiver em recesso, será convocado extraordinariamente no mesmo prazo.
* **Apreciação Política:** O Congresso delibera por **maioria simples** de cada uma das Casas em sessão conjunta ou separada.
* **Dispensa Excepcional do Controle Político (Art. 36, § 3º):** Nos casos em que a intervenção tiver por objeto exclusivo prover a **execução de ordem ou decisão judicial** ou prover a **execução de lei federal**, o decreto limita-se a suspender a execução do ato impugnado se essa medida bastar ao restabelecimento da normalidade, **dispensando-se a apreciação prévia ou posterior pelo Congresso Nacional**.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Regimento Interno da Câmara dos Deputados (sub-10-1):** Imunidades materiais e formais e prerrogativas regimentais.
* **Regimento Comum do Congresso Nacional (sub-10-6):** Atribuições do Congresso em sessão conjunta.
`,
  checkpoints: [
    {
      id: 'cp-10-5-1',
      pergunta: 'Micro-Checkpoint 1: Imunidade Formal e Prisão Parlamentar',
      item: 'Desde a expedição do diploma, os membros do Congresso Nacional não podem ser presos, salvo em flagrante de crime inafiançável, hipótese em que os autos devem ser remetidos em vinte e quatro horas à Casa respectiva para que a maioria de seus membros resolva sobre a prisão.',
      gabarito: 'C',
      justificativa: 'Correto! É a literalidade do art. 53, § 2º da CF/88. A imunidade contra prisão opera a partir da diplomação e restringe a custódia cautelar ao flagrante de crime inafiançável, cabendo à respectiva Casa deliberar por maioria absoluta.',
    },
    {
      id: 'cp-10-5-2',
      pergunta: 'Micro-Checkpoint 2: Sistema Eleitoral e Renovação do Senado Federal',
      item: 'O Senado Federal é composto por representantes dos Estados e do Distrito Federal eleitos pelo sistema proporcional para mandato de quatro anos, com renovação quadrienal total de seus membros.',
      gabarito: 'E',
      justificativa: 'Errado! O Senado Federal adota o sistema MAJORITÁRIO, o mandato de cada senador é de 8 ANOS, e a renovação é parcial alternada (1/3 e 2/3 a cada 4 anos), conforme preconiza o art. 46 da CF/88.',
    },
    {
      id: 'cp-10-5-3',
      pergunta: 'Micro-Checkpoint 3: Poderes e Limites Constitucionais das CPIs',
      item: 'Em virtude de possuírem poderes de investigação próprios das autoridades judiciais, as comissões parlamentares de inquérito têm competência constitucional para decretar a interceptação das comunicações telefônicas (escuta) e a busca e apreensão domiciliar noturna dos alvos investigados.',
      gabarito: 'E',
      justificativa: 'Errado! As CPIs NÃO podem determinar interceptação telefônica (escuta em tempo real) nem busca e apreensão domiciliar, atos que dependem estritamente de reserva de jurisdição do Poder Judiciário (CF, art. 5º, X, XI e XII e art. 58, § 3º).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-5-1',
        periodo: '1988 (CF/88 Original)',
        disciplina: 'Poder Legislativo',
        focoPrincipal: 'Promulgação da CF/88 estabelecendo o bicameralismo federativo e o estatuto dos congressistas',
        figuraChave: 'Assembleia Nacional Constituinte',
      },
      {
        id: 'tl-10-5-2',
        periodo: '2001 (EC nº 35)',
        disciplina: 'Imunidades Parlamentares',
        focoPrincipal: 'Fim da licença prévia para processo penal no STF e instituição da sustação da ação penal pela Casa',
        figuraChave: 'Emenda Constitucional nº 35/2001',
      },
      {
        id: 'tl-10-5-3',
        periodo: '2006 (EC nº 50)',
        disciplina: 'Sessões Legislativas',
        focoPrincipal: 'Fixação dos períodos ordinários (2 fev a 17 jul e 1 ago a 22 dez) e extinção de pagamento extra na convocação extraordinária',
        figuraChave: 'Emenda Constitucional nº 50/2006',
      },
      {
        id: 'tl-10-5-4',
        periodo: '2013 (EC nº 76)',
        disciplina: 'Perda de Mandato',
        focoPrincipal: 'Extinção do voto secreto na perda de mandato parlamentar e na apreciação de vetos (votação aberta obrigatória)',
        figuraChave: 'Emenda Constitucional nº 76/2013',
      },
    ],
    autores: [
      {
        id: 'aut-10-5-1',
        nome: 'José Afonso da Silva',
        ano: 2014,
        obraPrincipal: 'Curso de Direito Constitucional Positivo',
        ideiaChave: 'Doutrina clássica do estatuto dos congressistas e distinção entre imunidade material e formal.',
        chipPegadinha: 'A imunidade formal não protege contra condenação penal transitada em julgado.',
      },
      {
        id: 'aut-10-5-2',
        nome: 'Supremo Tribunal Federal (Jurisprudência)',
        ano: 2021,
        obraPrincipal: 'Jurisprudência Temática sobre CPIs e Art. 53',
        ideiaChave: 'CPIs não têm poderes de interceptação telefônica nem de busca domiciliar (reserva de jurisdição).',
        chipPegadinha: 'Quebra de sigilo telefônico (extrato de chamadas) é permitida à CPI; escuta telefônica, jamais.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-5-1',
        afirmacao: 'A cassação de mandato parlamentar decorrente de quebra de decoro ou de infração às incompatibilidades constitucionais ocorre por deliberação da Mesa Diretora, cabendo ao plenário apenas a homologação por maioria simples.',
        gabarito: 'E',
        porQue: 'Essa pegadinha é recorrente no Cebraspe! A quebra de decoro e incompatibilidades exigem deliberação do PLENÁRIO por MAIORIA ABSOLUTA em votação aberta (art. 55, § 2º). A Mesa Diretora só declara a perda de ofício em casos vinculados (faltas, perda de direitos políticos ou ordem judicial transitada).',
      },
      {
        id: 'peg-10-5-2',
        afirmacao: 'O decreto de intervenção federal editado pelo Presidente da República para prover a execução de decisão judicial deve ser necessariamente submetido à apreciação política do Congresso Nacional em vinte e quatro horas.',
        gabarito: 'E',
        porQue: 'Pegadinha clássica da CF/88! O art. 36, § 3º expressamente dispensa a apreciação do Congresso Nacional quando a intervenção tiver por objeto prover a execução de decisão judicial ou de lei federal.',
      },
      {
        id: 'peg-10-5-3',
        afirmacao: 'O mandato dos Senadores da República possui a mesma duração da legislatura da Câmara dos Deputados, sendo ambos renovados integralmente a cada quatro anos por meio de eleições gerais.',
        gabarito: 'E',
        porQue: 'O mandato de Senador dura 8 anos (duas legislaturas) e sua renovação é parcial alternada (1/3 e 2/3), enquanto a Câmara tem mandato de 4 anos com renovação total (art. 46, § 1º e 2º).',
      },
    ],
  },
};
