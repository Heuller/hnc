import type { ModuloFilho } from '../../../domain/types';

export const submodulo106: ModuloFilho = {
  id: 'sub-10-6',
  numero: '10.6',
  editalRef: 'Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)',
  preRequisitos: ["sub-10-1","sub-10-5"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Regimento Interno da Câmara dos Deputados",
          "motivo": "Mesa do Congresso Nacional e alternância de cargos."
      },
      {
          "submoduloId": "sub-10-5",
          "titulo": "Poder Legislativo na CF/88",
          "motivo": "Deliberação sobre vetos presidenciais e projetos de lei orçamentária."
      }
  ],
  titulo: 'Regimento Comum do Congresso Nacional (RCCN - Resolução nº 1/1970-CN)',
  antesDeLer: [
  {
    "termo": "Sessão conjunta",
    "definicao": "Reunião das Casas nos casos previstos, com votos computados separadamente no regime regimental.",
    "exemploBiblioteca": "Deputados e senadores reúnem-se e os quóruns são conferidos por Casa."
  },
  {
    "termo": "Sobrestamento",
    "definicao": "Suspensão de outras deliberações no âmbito e nas condições da norma, sem decisão automática do mérito pendente.",
    "exemploBiblioteca": "Veto fora do prazo de apreciação não se considera automaticamente rejeitado."
  }
],
  descricaoCurta:
    "Distinguir fontes, sessão conjunta e deliberação separada. Aplicar a alternância sem confundir Mesa e solenidade. Diferenciar quórum geral, exceção solene e votos necessários. Identificar objeto, marcos temporais e efeitos do prazo do veto. Aplicar contagem por Casa e competência de promulgação subsidiária. Relacionar normas temáticas e ritos das comissões mistas.",
  tempoEstimadoMinutos: 23,
  autoresChave: [
  "Congresso Nacional — Regimento Comum e normas conexas",
  "Constituição Federal",
  "Congresso Nacional — Regimentos"
],
  alertasCebraspe: [
  "O rito de MP é exemplo de deliberação em plenários separados.",
  "O art. 53 prevê sua participação em sessões solenes.",
  "O art. 66, § 3º, prevê sanção tácita."
],
  teoriaDensaMarkdown: "### Bicameralismo, Regimento Comum e local das sessões\n\nO Congresso Nacional compõe-se de Câmara dos Deputados e Senado Federal. A reunião conjunta não elimina a existência das duas Casas, suas representações e seus quóruns. O **Regimento Comum**, aprovado pela Resolução 1/1970-CN e normas posteriores, deve ser interpretado em conformidade com a Constituição de 1988 e com as resoluções temáticas integrantes da disciplina congressual.\n\nO próprio texto consolidado contém notas sobre dispositivos anteriores à Constituição e trechos revogados. Uma frase de 1970 não prevalece sobre a composição constitucional atual da Mesa ou o processo vigente de emenda constitucional.\n\n### Convocação e sede\n\nPelo art. **2º**, as sessões sem data legalmente fixada são convocadas pelo Presidente do Senado ou substituto, com prévia audiência da Mesa da Câmara. O art. **3º** estabelece sua realização no Plenário da Câmara, salvo escolha prévia de outro local devidamente anunciado. Não exige, nessa redação, que toda escolha de local diverso se fundamente exclusivamente em força maior.\n\nO art. 57, § 3º, da Constituição prevê sessão conjunta para inaugurar a sessão legislativa, elaborar o Regimento Comum e regular serviços comuns, receber o compromisso presidencial e deliberar sobre veto. Há outras previsões constitucionais e regimentais, como matérias orçamentárias. A enumeração constitucional de quatro hipóteses não autoriza negar toda outra sessão conjunta prevista no ordenamento.\n\n**Cuidado documental:** sessão legislativa anual, sessão plenária, reunião de comissão mista e tramitação sucessiva em Casas distintas são eventos diferentes. A aprovação de uma MP nas Casas não se torna sessão conjunta só porque houve parecer de comissão mista.\n\n**Aplicação e recuperação:** Uma MP passou por comissão mista e segue aos plenários separadamente. Sua comissão não transforma a votação em sessão conjunta.\n\n### Mesa: composição, substituição e solenidades\n\nA Constituição, art. **57, § 5º**, estabelece a presidência da Mesa do Congresso pelo Presidente do Senado e o preenchimento dos demais cargos alternadamente por ocupantes de cargos equivalentes da Câmara e do Senado. Não se trata de eleger uma terceira Mesa independente das duas Casas.\n\n| Cargo no Congresso | Ocupante segundo a alternância |\n|---|---|\n| Presidente | Presidente do Senado. |\n| 1º Vice-Presidente | 1º Vice-Presidente da Câmara. |\n| 2º Vice-Presidente | 2º Vice-Presidente do Senado. |\n| 1º Secretário | 1º Secretário da Câmara. |\n| 2º Secretário | 2º Secretário do Senado. |\n| 3º Secretário | 3º Secretário da Câmara. |\n| 4º Secretário | 4º Secretário do Senado. |\n\nNa substituição do presidente dos trabalhos, a nota de consolidação do Regimento remete ao **1º Vice-Presidente da Câmara**, correspondente ao primeiro vice da Mesa do Congresso. Não há transferência automática para o Presidente da Câmara apenas porque este preside a outra Casa.\n\nContudo, é excessivo dizer que o Presidente da Câmara jamais integra a Mesa de uma sessão conjunta: o art. **53** prevê sua participação na Mesa das **sessões solenes**, com participação por convite do Presidente do STF. Mesa constitucional permanente e composição da Mesa de uma solenidade precisam ser distinguidas.\n\nTambém não se confundem **Mesas da Câmara e do Senado**, que promulgam emendas pelo art. 60, § 3º, e **Mesa do Congresso**, que dirige atividades comuns. O art. 11 do Regimento Comum trata de apresentação de emendas perante comissão mista; não enumera competências gerais da Mesa do Congresso. Uma referência precisa deve sustentar o conteúdo atribuído a ela.\n\n**Aplicação e recuperação:** O Presidente da Câmara participa da Mesa em solenidade, mas não ocupa por isso a primeira vice-presidência constitucional do Congresso.\n\n### Ordem dos trabalhos, publicidade e quóruns\n\nA regra do art. **22** fixa duração de quatro horas para sessão conjunta. O art. 23 admite prorrogações nos termos ali previstos; uma votação já iniciada é ultimada na condição do art. 22, parágrafo único. Não transforme duração regimental em impossibilidade de qualquer prorrogação.\n\nAs sessões são públicas, podendo ser secretas por deliberação e procedimento do art. **27**. A finalidade e as cautelas devem ser observadas, inclusive retirada das pessoas estranhas aos trabalhos. Sigilo da sessão não equivale a uma autorização para ocultar qualquer documento de forma permanente e sem fundamento.\n\n### Abertura e deliberação\n\nPelo art. **28**, as sessões, na regra geral, só se abrem com presença mínima de **um sexto da composição de cada Casa**. Considerando 513 deputados e 81 senadores, isso exige pelo menos **86 deputados e 14 senadores**. Não é a décima parte nem a soma de todos os congressistas. O art. 29 prevê espera de até trinta minutos e consequências da falta de número.\n\nHá exceção expressa: **sessões solenes realizam-se com qualquer número** (art. 53, parágrafo único). Portanto, a resposta precisa indicar se se trata da regra geral ou de solenidade.\n\nPresença para abrir não autoriza automaticamente votar. A deliberação exige quórum pertinente a cada Casa e à matéria. A regra constitucional geral de maioria de votos pressupõe presença da maioria absoluta; rejeição de veto exige votos favoráveis de maioria absoluta em **ambas** as Casas.\n\nO art. **43** manda computar separadamente os votos dos deputados e dos senadores. O voto contrário de uma Casa implica rejeição da matéria no regime pertinente. Em regra, a votação começa pela Câmara; há a hipótese prevista para projeto vetado de iniciativa de senadores. Sessão conjunta, votação separada por Casa e rito sucessivo bicameral não são expressões equivalentes.\n\n**Aplicação e recuperação:** Compare regra geral de um sexto de cada Casa e exceção de solenidade com qualquer número. A hipótese define a resposta.\n\n### Veto: objeto, motivos e prazos\n\nVeto é a recusa presidencial de sanção a projeto aprovado, por inconstitucionalidade ou contrariedade ao interesse público. Não se aplica a emenda constitucional. O art. **66, § 1º**, prevê quinze dias **úteis** desde o recebimento; o silêncio importa sanção, não veto tácito.\n\nO veto pode ser total ou parcial. O parcial deve abranger o texto integral de artigo, parágrafo, inciso ou alínea (§ 2º); não pode retirar palavras isoladas para produzir uma norma de sentido distinto. Os motivos são comunicados ao Presidente do Senado em quarenta e oito horas.\n\nO § 4º estabelece apreciação em sessão conjunta em trinta dias do recebimento. O art. **104-A do Regimento Comum** conta o prazo da protocolização na Presidência do Senado. O art. 106 e seguintes disciplinam inclusão, discussão, votação e destaques; o antigo art. 104 foi revogado e não se presume comissão mista de veto obrigatória a partir de material anterior.\n\n### Consequência do prazo\n\nSe o prazo se esgota sem deliberação, o veto vai à Ordem do Dia da sessão conjunta imediata, com sobrestamento das demais proposições até votação final nas condições constitucionais e regimentais. Isso **não equivale a rejeitar ou manter automaticamente o veto**. O alcance é a pauta das sessões conjuntas; não paralisa, por si, todas as votações próprias de Câmara e Senado.\n\n**Cronologia para resolver um item:** recebimento do projeto inicia prazo do veto; comunicação e protocolização do veto são outros marcos; apreciação congressual tem prazo próprio. A troca do evento inicial pode tornar errada uma assertiva aparentemente correta quanto ao número de dias.\n\n**Aplicação e recuperação:** Trinta dias sem votação não mantêm nem derrubam o veto automaticamente. O efeito previsto é inclusão e sobrestamento no âmbito pertinente.\n\n### Veto: contagem de votos e promulgação\n\nA rejeição exige **maioria absoluta dos deputados e maioria absoluta dos senadores**, separadamente. Nos exemplos com 513 e 81 membros, são **257 e 41 votos favoráveis**. Não é maioria dos presentes, maioria do total somado ou uma votação que permita à bancada maior compensar a insuficiência da outra Casa.\n\nApós a EC **76/2013**, a votação de veto não é secreta. O Regimento prevê votação nominal, com seus procedimentos e possibilidades de destaques. Um campo chamado “sessão conjunta” não altera a separação constitucional dos quóruns.\n\n### Promulgação após rejeição\n\nRejeitado o veto, o projeto é enviado ao Presidente da República para promulgação (§ 5º). Pelo art. **66, § 7º**, se a lei não for promulgada em quarenta e oito horas nos casos indicados, o Presidente do Senado a promulga; se ele não o fizer em igual prazo, cabe ao **Vice-Presidente do Senado** fazê-lo.\n\nEsse último substituto **não é o 1º Vice-Presidente do Congresso, oriundo da Câmara**. A regra de substituição na direção de sessão conjunta e a competência para promulgação subsidiária são distintas. Não se deve substituir o sujeito expresso do art. 66, § 7º, por uma analogia com a Mesa do Congresso.\n\nSe não houver rejeição pelas duas Casas, o veto não é derrubado. Isso não significa proibir para sempre qualquer nova discussão legislativa sobre o tema por instrumento próprio. Também separe promulgação, publicação e início de vigência: cada etapa tem função e disciplina próprias.\n\n**Aplicação e recuperação:** Após omissão presidencial e do Presidente do Senado, leia o sujeito expresso do § 7º: Vice-Presidente do Senado. Não use a substituição da sessão conjunta.\n\n### Orçamento e comissões mistas\n\nProjetos de PPA, LDO, LOA e créditos adicionais têm regime constitucional no art. **166**, complementado pelas normas orçamentárias do Congresso, especialmente a **Resolução 1/2006-CN e alterações**. Não se devem tratar os arts. 98–103 da Resolução 1/1970 como descrição completa e atual de todo procedimento; há dispositivos revogados, normas especiais e remissões históricas.\n\nA **Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO)** examina e emite parecer sobre os projetos e contas do art. 166, § 1º, além de acompanhamento e fiscalização orçamentária nas condições constitucionais. A deliberação sobre o orçamento ocorre em sessão conjunta com contagem das Casas separada, respeitada a disciplina própria.\n\nEmendas orçamentárias têm condições de admissibilidade, autoria e compatibilidade próprias. Não confunda emenda a projeto orçamentário com emenda constitucional nem transforme toda comissão mista em CMO.\n\n### Diferentes competências, diferentes ritos\n\nComissões mistas podem atuar em matérias variadas. Na apreciação de **medidas provisórias**, a comissão emite parecer, mas a deliberação dos plenários ocorre **em sessão separada de cada Casa**, com início na Câmara, conforme art. 62. É erro deduzir sessão conjunta da existência de comissão mista.\n\n**Resoluções** do Congresso podem regular matéria de sua competência, como delegação legislativa do art. 68, com condições específicas; não se definem apenas como atos “sem eficácia externa”. Decretos legislativos e resoluções não são intercambiáveis nem se submetem indistintamente ao mesmo caminho de projetos de lei sujeitos a sanção.\n\nPara pesquisar, identifique espécie, competência, norma temática e versão. O documento consolidado oficial reúne normas conexas, mas sua reunião num volume não transforma todos os artigos de todas as resoluções em um único texto numerado.\n\n**Aplicação e recuperação:** Procure a resolução temática. Um art. 98 de norma orçamentária pode tratar de tema diferente do art. 98 do corpo principal do Regimento Comum.",
  teoriaDidaticaMarkdown: "Sessão conjunta preserva Casas e contagem separada. Mesa do Congresso tem alternância; Presidente da Câmara participa da Mesa de solenidades. Regra geral de abertura: um sexto de cada Casa; solenes, qualquer número. Veto tem prazos e quóruns próprios; o decurso não decide o mérito. Promulgação subsidiária final: Vice-Presidente do Senado. Comissão mista não implica deliberação conjunta de toda matéria.",
  checkpoints: [
  {
    "id": "cp-10-6-1",
    "pergunta": "Micro-Checkpoint 1: Presidência e Sucessão da Mesa do Congresso Nacional",
    "item": "A Mesa do Congresso Nacional é presidida pelo Presidente do Senado Federal. Em caso de ausência ou impedimento temporário do Presidente do Senado durante a realização de uma sessão conjunta do Congresso Nacional, a presidência dos trabalhos é transferida imediatamente para o Presidente da Câmara dos Deputados, em obediência ao bicameralismo federativo.",
    "gabarito": "E",
    "justificativa": "Errado. A substituição na direção dos trabalhos recai no primeiro vice da Mesa do Congresso, correspondente ao primeiro Vice-Presidente da Câmara, não automaticamente em seu Presidente. Não confundir com a participação do Presidente da Câmara na Mesa de solenidades prevista no art. 53.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "versao_correta": "Na hipótese indicada, aplica-se a substituição pelo primeiro vice da Mesa do Congresso, correspondente ao primeiro Vice-Presidente da Câmara."
  },
  {
    "id": "cp-10-6-2",
    "pergunta": "Micro-Checkpoint 2: Quórum de Deliberação em Sessão Conjunta e Vetos",
    "item": "Nas sessões conjuntas do Congresso Nacional convocadas para a apreciação de veto presidencial, os Deputados Federais e Senadores reúnem-se no mesmo recinto físico, ocorrendo a rejeição do veto caso se atinja a maioria absoluta da soma total dos parlamentares presentes à sessão deliberativa.",
    "gabarito": "E",
    "justificativa": "Errado. Rejeitar veto exige maioria absoluta dos deputados e dos senadores separadamente. A soma dos presentes não forma um único corpo votante.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "versao_correta": "O veto exige 257 votos de deputados e 41 de senadores no exemplo com 513 e 81 membros."
  },
  {
    "id": "cp-10-6-3",
    "pergunta": "Micro-Checkpoint 3: Prazo e Efeitos do Sobrestamento por Veto Presidencial",
    "item": "Transcorrido in albis o prazo de trinta dias a contar do recebimento formal do veto presidencial pelo Congresso Nacional sem que haja ocorrido deliberação em sessão conjunta, o veto será colocado na ordem do dia da sessão conjunta imediata, sobrestando as demais proposições no âmbito do Congresso Nacional, sem paralisar, contudo, a pauta de votações legislativas ordinárias das sessões isoladas da Câmara dos Deputados.",
    "gabarito": "C",
    "justificativa": "O art. 66, § 6º, da Constituição determina que, esgotados trinta dias sem deliberação, o veto integre a ordem do dia da sessão imediata do Congresso, sobrestadas as demais proposições até a votação final. O sobrestamento refere-se à pauta das sessões conjuntas do Congresso; não paralisa automaticamente a pauta ordinária das sessões separadas da Câmara ou do Senado.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais."
  },
  {
    "id": "rt-10-6-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A existência de comissão mista torna obrigatoriamente conjunta a votação de toda matéria pelos plenários.",
    "gabarito": "E",
    "justificativa": "O rito de MP é exemplo de deliberação em plenários separados.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar",
    "versao_correta": "Comissão mista e sessão conjunta não se implicam automaticamente."
  },
  {
    "id": "rt-10-6-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O Presidente da Câmara nunca pode integrar a Mesa de qualquer sessão conjunta, nem de uma solenidade.",
    "gabarito": "E",
    "justificativa": "O art. 53 prevê sua participação em sessões solenes.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar",
    "versao_correta": "Composição da Mesa permanente e de solenidades são situações distintas."
  },
  {
    "id": "rt-10-6-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A regra geral do art. 28 do Regimento Comum prevê um sexto da composição de cada Casa para abertura.",
    "gabarito": "C",
    "justificativa": "Não se confunde com a décima parte do RICD; há exceção para solenidades.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-6-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O silêncio presidencial no prazo de quinze dias úteis sobre projeto sujeito a sanção importa veto tácito.",
    "gabarito": "E",
    "justificativa": "O art. 66, § 3º, prevê sanção tácita.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar",
    "versao_correta": "O silêncio no prazo importa sanção."
  },
  {
    "id": "rt-10-6-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na omissão dos responsáveis anteriores, o art. 66, § 7º, atribui promulgação ao Vice-Presidente do Senado, e não ao Vice-Presidente do Congresso oriundo da Câmara.",
    "gabarito": "C",
    "justificativa": "A Constituição indica expressamente a autoridade; é regra distinta da direção dos trabalhos.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-10-6-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A tramitação orçamentária atual deve ser estudada também nas normas temáticas, e não apenas em artigos históricos do corpo principal do Regimento Comum.",
    "gabarito": "C",
    "justificativa": "Há resoluções específicas, alterações e dispositivos revogados.",
    "fonte": "Congresso Nacional — Regimento Comum e normas conexas — Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.; Constituição Federal — Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.; Congresso Nacional — Regimentos — Normas, consolidações e acesso às atualizações institucionais.",
    "editalRef": "Conhecimentos Básicos - Regimento Comum do Congresso (Resolução nº 1/1970-CN)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-10-6-fonte-rccn",
      "nome": "Congresso Nacional — Regimento Comum e normas conexas",
      "ano": "Referência de consulta",
      "obraPrincipal": "Congresso Nacional — Regimento Comum e normas conexas",
      "ideiaChave": "Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-6-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-10-6-fonte-portal",
      "nome": "Congresso Nacional — Regimentos",
      "ano": "Referência de consulta",
      "obraPrincipal": "Congresso Nacional — Regimentos",
      "ideiaChave": "Normas, consolidações e acesso às atualizações institucionais.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-10-6-4",
      "afirmacao": "O silêncio presidencial no prazo de quinze dias úteis sobre projeto sujeito a sanção importa veto tácito.",
      "gabarito": "E",
      "porQue": "O art. 66, § 3º, prevê sanção tácita."
    },
    {
      "id": "memoria-rt-10-6-5",
      "afirmacao": "Na omissão dos responsáveis anteriores, o art. 66, § 7º, atribui promulgação ao Vice-Presidente do Senado, e não ao Vice-Presidente do Congresso oriundo da Câmara.",
      "gabarito": "C",
      "porQue": "A Constituição indica expressamente a autoridade; é regra distinta da direção dos trabalhos."
    },
    {
      "id": "memoria-rt-10-6-6",
      "afirmacao": "A tramitação orçamentária atual deve ser estudada também nas normas temáticas, e não apenas em artigos históricos do corpo principal do Regimento Comum.",
      "gabarito": "C",
      "porQue": "Há resoluções específicas, alterações e dispositivos revogados."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-10-6-bloco-1",
    "titulo": "Bicameralismo, Regimento Comum e local das sessões",
    "objetivos": [
      "Distinguir fontes, sessão conjunta e deliberação separada."
    ],
    "conteudo": "O Congresso Nacional compõe-se de Câmara dos Deputados e Senado Federal. A reunião conjunta não elimina a existência das duas Casas, suas representações e seus quóruns. O **Regimento Comum**, aprovado pela Resolução 1/1970-CN e normas posteriores, deve ser interpretado em conformidade com a Constituição de 1988 e com as resoluções temáticas integrantes da disciplina congressual.\n\nO próprio texto consolidado contém notas sobre dispositivos anteriores à Constituição e trechos revogados. Uma frase de 1970 não prevalece sobre a composição constitucional atual da Mesa ou o processo vigente de emenda constitucional.\n\n### Convocação e sede\n\nPelo art. **2º**, as sessões sem data legalmente fixada são convocadas pelo Presidente do Senado ou substituto, com prévia audiência da Mesa da Câmara. O art. **3º** estabelece sua realização no Plenário da Câmara, salvo escolha prévia de outro local devidamente anunciado. Não exige, nessa redação, que toda escolha de local diverso se fundamente exclusivamente em força maior.\n\nO art. 57, § 3º, da Constituição prevê sessão conjunta para inaugurar a sessão legislativa, elaborar o Regimento Comum e regular serviços comuns, receber o compromisso presidencial e deliberar sobre veto. Há outras previsões constitucionais e regimentais, como matérias orçamentárias. A enumeração constitucional de quatro hipóteses não autoriza negar toda outra sessão conjunta prevista no ordenamento.\n\n**Cuidado documental:** sessão legislativa anual, sessão plenária, reunião de comissão mista e tramitação sucessiva em Casas distintas são eventos diferentes. A aprovação de uma MP nas Casas não se torna sessão conjunta só porque houve parecer de comissão mista.\n\n**Aplicação e recuperação:** Uma MP passou por comissão mista e segue aos plenários separadamente. Sua comissão não transforma a votação em sessão conjunta.",
    "checkpointIds": [
      "rt-10-6-1"
    ]
  },
  {
    "id": "sub-10-6-bloco-2",
    "titulo": "Mesa: composição, substituição e solenidades",
    "objetivos": [
      "Aplicar a alternância sem confundir Mesa e solenidade."
    ],
    "conteudo": "A Constituição, art. **57, § 5º**, estabelece a presidência da Mesa do Congresso pelo Presidente do Senado e o preenchimento dos demais cargos alternadamente por ocupantes de cargos equivalentes da Câmara e do Senado. Não se trata de eleger uma terceira Mesa independente das duas Casas.\n\n| Cargo no Congresso | Ocupante segundo a alternância |\n|---|---|\n| Presidente | Presidente do Senado. |\n| 1º Vice-Presidente | 1º Vice-Presidente da Câmara. |\n| 2º Vice-Presidente | 2º Vice-Presidente do Senado. |\n| 1º Secretário | 1º Secretário da Câmara. |\n| 2º Secretário | 2º Secretário do Senado. |\n| 3º Secretário | 3º Secretário da Câmara. |\n| 4º Secretário | 4º Secretário do Senado. |\n\nNa substituição do presidente dos trabalhos, a nota de consolidação do Regimento remete ao **1º Vice-Presidente da Câmara**, correspondente ao primeiro vice da Mesa do Congresso. Não há transferência automática para o Presidente da Câmara apenas porque este preside a outra Casa.\n\nContudo, é excessivo dizer que o Presidente da Câmara jamais integra a Mesa de uma sessão conjunta: o art. **53** prevê sua participação na Mesa das **sessões solenes**, com participação por convite do Presidente do STF. Mesa constitucional permanente e composição da Mesa de uma solenidade precisam ser distinguidas.\n\nTambém não se confundem **Mesas da Câmara e do Senado**, que promulgam emendas pelo art. 60, § 3º, e **Mesa do Congresso**, que dirige atividades comuns. O art. 11 do Regimento Comum trata de apresentação de emendas perante comissão mista; não enumera competências gerais da Mesa do Congresso. Uma referência precisa deve sustentar o conteúdo atribuído a ela.\n\n**Aplicação e recuperação:** O Presidente da Câmara participa da Mesa em solenidade, mas não ocupa por isso a primeira vice-presidência constitucional do Congresso.",
    "checkpointIds": [
      "cp-10-6-1",
      "rt-10-6-2"
    ]
  },
  {
    "id": "sub-10-6-bloco-3",
    "titulo": "Ordem dos trabalhos, publicidade e quóruns",
    "objetivos": [
      "Diferenciar quórum geral, exceção solene e votos necessários."
    ],
    "conteudo": "A regra do art. **22** fixa duração de quatro horas para sessão conjunta. O art. 23 admite prorrogações nos termos ali previstos; uma votação já iniciada é ultimada na condição do art. 22, parágrafo único. Não transforme duração regimental em impossibilidade de qualquer prorrogação.\n\nAs sessões são públicas, podendo ser secretas por deliberação e procedimento do art. **27**. A finalidade e as cautelas devem ser observadas, inclusive retirada das pessoas estranhas aos trabalhos. Sigilo da sessão não equivale a uma autorização para ocultar qualquer documento de forma permanente e sem fundamento.\n\n### Abertura e deliberação\n\nPelo art. **28**, as sessões, na regra geral, só se abrem com presença mínima de **um sexto da composição de cada Casa**. Considerando 513 deputados e 81 senadores, isso exige pelo menos **86 deputados e 14 senadores**. Não é a décima parte nem a soma de todos os congressistas. O art. 29 prevê espera de até trinta minutos e consequências da falta de número.\n\nHá exceção expressa: **sessões solenes realizam-se com qualquer número** (art. 53, parágrafo único). Portanto, a resposta precisa indicar se se trata da regra geral ou de solenidade.\n\nPresença para abrir não autoriza automaticamente votar. A deliberação exige quórum pertinente a cada Casa e à matéria. A regra constitucional geral de maioria de votos pressupõe presença da maioria absoluta; rejeição de veto exige votos favoráveis de maioria absoluta em **ambas** as Casas.\n\nO art. **43** manda computar separadamente os votos dos deputados e dos senadores. O voto contrário de uma Casa implica rejeição da matéria no regime pertinente. Em regra, a votação começa pela Câmara; há a hipótese prevista para projeto vetado de iniciativa de senadores. Sessão conjunta, votação separada por Casa e rito sucessivo bicameral não são expressões equivalentes.\n\n**Aplicação e recuperação:** Compare regra geral de um sexto de cada Casa e exceção de solenidade com qualquer número. A hipótese define a resposta.",
    "checkpointIds": [
      "rt-10-6-3"
    ]
  },
  {
    "id": "sub-10-6-bloco-4",
    "titulo": "Veto: objeto, motivos e prazos",
    "objetivos": [
      "Identificar objeto, marcos temporais e efeitos do prazo do veto."
    ],
    "conteudo": "Veto é a recusa presidencial de sanção a projeto aprovado, por inconstitucionalidade ou contrariedade ao interesse público. Não se aplica a emenda constitucional. O art. **66, § 1º**, prevê quinze dias **úteis** desde o recebimento; o silêncio importa sanção, não veto tácito.\n\nO veto pode ser total ou parcial. O parcial deve abranger o texto integral de artigo, parágrafo, inciso ou alínea (§ 2º); não pode retirar palavras isoladas para produzir uma norma de sentido distinto. Os motivos são comunicados ao Presidente do Senado em quarenta e oito horas.\n\nO § 4º estabelece apreciação em sessão conjunta em trinta dias do recebimento. O art. **104-A do Regimento Comum** conta o prazo da protocolização na Presidência do Senado. O art. 106 e seguintes disciplinam inclusão, discussão, votação e destaques; o antigo art. 104 foi revogado e não se presume comissão mista de veto obrigatória a partir de material anterior.\n\n### Consequência do prazo\n\nSe o prazo se esgota sem deliberação, o veto vai à Ordem do Dia da sessão conjunta imediata, com sobrestamento das demais proposições até votação final nas condições constitucionais e regimentais. Isso **não equivale a rejeitar ou manter automaticamente o veto**. O alcance é a pauta das sessões conjuntas; não paralisa, por si, todas as votações próprias de Câmara e Senado.\n\n**Cronologia para resolver um item:** recebimento do projeto inicia prazo do veto; comunicação e protocolização do veto são outros marcos; apreciação congressual tem prazo próprio. A troca do evento inicial pode tornar errada uma assertiva aparentemente correta quanto ao número de dias.\n\n**Aplicação e recuperação:** Trinta dias sem votação não mantêm nem derrubam o veto automaticamente. O efeito previsto é inclusão e sobrestamento no âmbito pertinente.",
    "checkpointIds": [
      "cp-10-6-3",
      "rt-10-6-4"
    ]
  },
  {
    "id": "sub-10-6-bloco-5",
    "titulo": "Veto: contagem de votos e promulgação",
    "objetivos": [
      "Aplicar contagem por Casa e competência de promulgação subsidiária."
    ],
    "conteudo": "A rejeição exige **maioria absoluta dos deputados e maioria absoluta dos senadores**, separadamente. Nos exemplos com 513 e 81 membros, são **257 e 41 votos favoráveis**. Não é maioria dos presentes, maioria do total somado ou uma votação que permita à bancada maior compensar a insuficiência da outra Casa.\n\nApós a EC **76/2013**, a votação de veto não é secreta. O Regimento prevê votação nominal, com seus procedimentos e possibilidades de destaques. Um campo chamado “sessão conjunta” não altera a separação constitucional dos quóruns.\n\n### Promulgação após rejeição\n\nRejeitado o veto, o projeto é enviado ao Presidente da República para promulgação (§ 5º). Pelo art. **66, § 7º**, se a lei não for promulgada em quarenta e oito horas nos casos indicados, o Presidente do Senado a promulga; se ele não o fizer em igual prazo, cabe ao **Vice-Presidente do Senado** fazê-lo.\n\nEsse último substituto **não é o 1º Vice-Presidente do Congresso, oriundo da Câmara**. A regra de substituição na direção de sessão conjunta e a competência para promulgação subsidiária são distintas. Não se deve substituir o sujeito expresso do art. 66, § 7º, por uma analogia com a Mesa do Congresso.\n\nSe não houver rejeição pelas duas Casas, o veto não é derrubado. Isso não significa proibir para sempre qualquer nova discussão legislativa sobre o tema por instrumento próprio. Também separe promulgação, publicação e início de vigência: cada etapa tem função e disciplina próprias.\n\n**Aplicação e recuperação:** Após omissão presidencial e do Presidente do Senado, leia o sujeito expresso do § 7º: Vice-Presidente do Senado. Não use a substituição da sessão conjunta.",
    "checkpointIds": [
      "cp-10-6-2",
      "rt-10-6-5"
    ]
  },
  {
    "id": "sub-10-6-bloco-6",
    "titulo": "Orçamento e comissões mistas",
    "objetivos": [
      "Relacionar normas temáticas e ritos das comissões mistas."
    ],
    "conteudo": "Projetos de PPA, LDO, LOA e créditos adicionais têm regime constitucional no art. **166**, complementado pelas normas orçamentárias do Congresso, especialmente a **Resolução 1/2006-CN e alterações**. Não se devem tratar os arts. 98–103 da Resolução 1/1970 como descrição completa e atual de todo procedimento; há dispositivos revogados, normas especiais e remissões históricas.\n\nA **Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO)** examina e emite parecer sobre os projetos e contas do art. 166, § 1º, além de acompanhamento e fiscalização orçamentária nas condições constitucionais. A deliberação sobre o orçamento ocorre em sessão conjunta com contagem das Casas separada, respeitada a disciplina própria.\n\nEmendas orçamentárias têm condições de admissibilidade, autoria e compatibilidade próprias. Não confunda emenda a projeto orçamentário com emenda constitucional nem transforme toda comissão mista em CMO.\n\n### Diferentes competências, diferentes ritos\n\nComissões mistas podem atuar em matérias variadas. Na apreciação de **medidas provisórias**, a comissão emite parecer, mas a deliberação dos plenários ocorre **em sessão separada de cada Casa**, com início na Câmara, conforme art. 62. É erro deduzir sessão conjunta da existência de comissão mista.\n\n**Resoluções** do Congresso podem regular matéria de sua competência, como delegação legislativa do art. 68, com condições específicas; não se definem apenas como atos “sem eficácia externa”. Decretos legislativos e resoluções não são intercambiáveis nem se submetem indistintamente ao mesmo caminho de projetos de lei sujeitos a sanção.\n\nPara pesquisar, identifique espécie, competência, norma temática e versão. O documento consolidado oficial reúne normas conexas, mas sua reunião num volume não transforma todos os artigos de todas as resoluções em um único texto numerado.\n\n**Aplicação e recuperação:** Procure a resolução temática. Um art. 98 de norma orçamentária pode tratar de tema diferente do art. 98 do corpo principal do Regimento Comum.",
    "checkpointIds": [
      "rt-10-6-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "rccn",
    "titulo": "Congresso Nacional — Regimento Comum e normas conexas",
    "localizador": "Resolução 1/1970-CN: arts. 1º–3º, 22–29, 43, 53 e 104-A–106; Resolução 1/2006-CN para orçamento. PDF oficial consolidado com notas.",
    "url": "https://www25.senado.leg.br/documents/12427/45875/RCCN.pdf"
  },
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 57, §§ 3º e 5º, 60, § 3º, 62, 66 e 166.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "portal",
    "titulo": "Congresso Nacional — Regimentos",
    "localizador": "Normas, consolidações e acesso às atualizações institucionais.",
    "url": "https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional"
  }
],
};
