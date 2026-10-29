import type { ModuloFilho } from '../../../domain/types';

export const submodulo114: ModuloFilho = {
  id: 'sub-11-4',
  numero: '11.4',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)',
  preRequisitos: ["sub-11-2"],
  titulo: 'Processo Administrativo Federal e Direito Disciplinar (Leis 9.784/99 e 8.112/90)',
  titulo_curto: 'Processo Administrativo e Disciplinar',
  antesDeLer: [
  {
    "termo": "Processo geral e PAD",
    "definicao": "Lei 9.784 é geral/subsidiária; o PAD federal tem regras específicas da Lei 8.112.",
    "exemploBiblioteca": "Parentesco da comissão é tratado no art. 149, § 2º, da Lei 8.112."
  },
  {
    "termo": "Recurso e revisão",
    "definicao": "Meios de reexame com pressupostos e limites próprios.",
    "exemploBiblioteca": "Revisão sancionadora não permite agravar a sanção; não se aplica automaticamente a regra do recurso."
  }
],
  descricaoCurta: "Reconhecer âmbito federal e subsidiariedade. Separar regimes gerais e regra da comissão disciplinar. Comparar prazo, efeitos e possibilidade de agravamento. Diferenciar prazo prescricional e cancelamento de registro. Reconhecer fases, comissão e alcance da SV 5.",
  tempoEstimadoMinutos: 19,
  autoresChave: [
  "Lei 9.784/1999",
  "Lei 8.112/1990",
  "STJ — Súmulas",
  "STF — Súmulas vinculantes"
],
  alertasCebraspe: [
  "O art. 21 permite recurso, sem efeito suspensivo. Ausência de suspensão e ausência de recurso são conclusões diferentes.",
  "O art. 66 prevê contagem contínua dos prazos em dias, com prorrogação do vencimento quando não houver expediente ou ele terminar antes da hora normal. Não se importa automaticamente a regra do CPC."
],
  teoriaDensaMarkdown: "### Processo administrativo e garantias\n\nA Lei 9.784 estabelece normas básicas do processo administrativo federal. Alcança órgãos dos Poderes Legislativo e Judiciário da União quando exercem função administrativa (art. 1º, § 1º). Processos com lei específica continuam sob essa disciplina, com aplicação subsidiária da lei geral (art. 69). Um PAD da Lei 8.112 não é regido exclusivamente pela Lei 9.784.\n\nLegalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência orientam o processo. Impulso oficial não apaga a participação do interessado. Formalismo moderado reduz exigências inúteis, mas preserva formalidades essenciais a direitos e segurança. Gratuidade tem ressalva de previsão legal, não de mera preferência do órgão.\n\nA busca de esclarecimento dos fatos não autoriza qualquer prova a qualquer tempo. O art. 38 permite juntar documentos, requerer diligências/perícias e apresentar alegações antes da decisão, com regras de apreciação e recusa fundamentada das provas ilícitas, impertinentes, desnecessárias ou protelatórias. Não é correto opor genericamente um processo civil que “só busca verdade formal” a uma Administração sem limites probatórios.\n\n**Caso:** pedido de perícia sem relação com o objeto pode ser recusado motivadamente; negar toda prova porque o gestor já tem convicção viola a finalidade da instrução. O problema é justificar pertinência e necessidade, assegurando participação efetiva, não maximizar o número de documentos.\n\n### Competência, impedimento e suspeição\n\nCompetência é irrenunciável, com delegação e avocação nos casos legais. Delegação parcial pode ocorrer sem subordinação; são indelegáveis atos normativos, decisão de recursos e competências exclusivas (art. 13). Avocação exige excepcionalidade, temporariedade, motivos relevantes e órgão inferior hierárquico.\n\nOs arts. 18–19 tratam de **impedimento**: interesse na matéria; participação como perito, testemunha ou representante, inclusive nas situações familiares descritas; e litígio com interessado ou seu cônjuge/companheiro. Deve haver comunicação e abstenção; a omissão constitui falta grave para efeitos disciplinares. **Suspeição**, art. 20, envolve amizade íntima ou inimizade notória nas relações delimitadas. O indeferimento admite recurso **sem efeito suspensivo** (art. 21).\n\nNo PAD, o art. 149, § 2º, da **Lei 8.112** proíbe cônjuge, companheiro ou parente do acusado, consanguíneo ou afim, em linha reta ou colateral até terceiro grau, de participar da comissão de sindicância ou inquérito. Não atribua essa redação ao art. 18, II, da Lei 9.784, que descreve outra hipótese.\n\n**Exemplo resolvido:** um tio do acusado seria membro da comissão. O parentesco colateral de terceiro grau está dentro da proibição específica da Lei 8.112. Não é necessário inventar participação como testemunha para aplicar essa regra.\n\n### Decisão, recurso e revisão: três perguntas diferentes\n\nA Administração deve decidir matérias de sua competência. **Após concluída a instrução**, o art. 49 prevê até trinta dias, com prorrogação por igual período expressamente motivada. Esse prazo não é contado automaticamente do início de todo processo.\n\nDa decisão cabe recurso por razões de legalidade e mérito. É dirigido à autoridade que decidiu, que pode reconsiderar em cinco dias; se não o fizer, encaminha à superior. O prazo geral de interposição é dez dias da ciência/divulgação oficial, salvo disposição legal específica. Há até três instâncias, salvo regra diversa. Em regra o recurso não suspende o ato; pode ser concedido efeito suspensivo nas condições do art. 61.\n\nO art. 64 admite confirmar, modificar, anular ou revogar decisão, no âmbito da competência da autoridade. Se houver possibilidade de agravar a situação, o recorrente deve ser cientificado para alegações antes da decisão. O dispositivo **não fixa ali um prazo universal de dez dias** para essa manifestação: não transporte o prazo de interposição para essa etapa.\n\nA **revisão** do art. 65, relativa a sanções e fatos novos/circunstâncias relevantes, pode ocorrer a qualquer tempo, a pedido ou de ofício, e não permite agravar a sanção. No processo disciplinar, a revisão da Lei 8.112 possui regras próprias e também veda agravamento. Não confunda revisão com nova oportunidade para repetir alegação de injustiça sem elemento novo.\n\n**Contagem:** na Lei 9.784 os dias são contínuos; exclui-se o começo e inclui-se o vencimento, prorrogado ao primeiro dia útil seguinte quando o vencimento não tiver expediente nas condições do art. 66. Não copie automaticamente a contagem em dias úteis do CPC.\n\n### Sanções e prescrição: reconhecer fundamento e marco\n\nO art. 127 da Lei 8.112 prevê advertência, suspensão, demissão, cassação de aposentadoria/disponibilidade e destituições de cargo em comissão e função comissionada. Reduzir a lista a três sanções é incompleto. A escolha considera natureza e gravidade, danos, agravantes/atenuantes e antecedentes (art. 128), com tipificação e motivação.\n\nAdvertência é escrita. Suspensão tem limite de noventa dias e pode ser convertida em multa nas condições legais. Demissão exige hipótese do art. 132, não mera conveniência. Abandono envolve ausência **intencional por mais de trinta dias consecutivos**; inassiduidade habitual, sessenta dias interpolados sem causa justificada em doze meses. Não troque os elementos subjetivos e temporais.\n\nO art. 142 prevê cinco anos para infrações das sanções mais graves ali enumeradas, dois anos para suspensão e cento e oitenta dias para advertência. O § 1º usa o conhecimento do fato como marco; a jurisprudência do STJ especifica o conhecimento pela autoridade competente para instaurar a apuração, entre outros limites sobre interrupção. A Súmula 635 do STJ reúne essa orientação. Infrações também capituladas como crime têm regra do § 2º. Não conte sempre da consumação nem afirme suspensão/interrupção ilimitada sem examinar o regime.\n\nCancelamento do registro de advertência/suspensão após os períodos e condições do art. 131 é diferente de prescrição para exercer ação disciplinar. **Recupere:** compare prazo de apuração, prazo para decisão e prazo prescricional. Todos medem tempo, mas têm marcos e consequências distintos.\n\n### PAD: apurar com contraditório e decidir com fundamento\n\nA Lei 8.112 exige apuração de irregularidade com ampla defesa. Da sindicância podem resultar arquivamento, penalidade de advertência/suspensão de até trinta dias ou instauração de PAD. Sanções mais graves nas hipóteses do art. 146 exigem processo disciplinar; não se deve chamar de “investigação informal” uma punição aplicada sem as garantias próprias.\n\nO PAD ordinário tem **instauração, inquérito e julgamento**; o inquérito compreende instrução, defesa e relatório. A comissão tem três servidores estáveis, com requisitos para a presidência (art. 149). Deve atuar com independência e imparcialidade. O prazo de conclusão é de sessenta dias, admitida prorrogação por igual período nas condições legais. Julgamento fora do prazo não causa automaticamente nulidade, conforme art. 169, § 1º.\n\nA autoridade não está autorizada a decidir por preferência pessoal: o art. 168 disciplina acolhimento do relatório e divergência motivada quando contrário às provas. Afastamento preventivo do art. 147 é cautelar, sem perda da remuneração e dentro de seus limites; não é antecipação de pena.\n\nA **Súmula Vinculante 5** afirma que falta de defesa técnica por advogado não ofende, por si, a Constituição no PAD. Isso não dispensa defesa efetiva, ciência e acesso às provas. Não confunda essa regra com procedimentos nos quais exista exigência legal específica de representação ou com qualquer processo criminal.\n\n**Caso integrador:** uma comissão impedida conclui pela demissão; o gestor pretende sanar tudo dizendo que o acusado não contratou advogado. A SV 5 não resolve o impedimento nem substitui a análise de provas e garantias. Cada defeito tem fundamento próprio e precisa ser examinado separadamente.",
  teoriaDidaticaMarkdown: "### Revisão: lei geral e processo disciplinar\n\nLei 9.784: aplica-se à função administrativa federal inclusive de outros Poderes; é subsidiária aos processos específicos. Delegação não alcança decisão de recursos; suspeição indeferida admite recurso sem efeito suspensivo. Decisão após instrução: até trinta dias, prorrogáveis motivadamente por igual período. Recurso e revisão têm regras diferentes de agravamento. Prazos em dias são contínuos, com regras de vencimento do art. 66.\n\nLei 8.112: comissão, impedimentos, sanções, fases e prescrição têm disciplina própria. Parentesco na comissão está no art. 149, § 2º. Não confunda prescrição com cancelamento de registro nem investigação com punição. A SV 5 não dispensa contraditório ou defesa efetiva. Identifique sempre a lei, o marco e a consequência.\n",
  checkpoints: [
  {
    "id": "cp-11-4-1",
    "pergunta": "Micro-Checkpoint 1: Delegação de Competências e Limitações Legais",
    "item": "Titular de órgão administrativo federal da Câmara dos Deputados pode delegar legitimamente a um subordinado hierárquico a competência decisória para julgar recurso administrativo interposto contra resultado de pregão eletrônico, desde que tal delegação seja formalmente publicada em veículo oficial.",
    "gabarito": "E",
    "justificativa": "A decisão de recursos administrativos é indelegável pelo art. 13, II. A possibilidade geral de delegar parte da competência não afasta essa vedação.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "versao_correta": "A decisão de recurso administrativo não pode ser delegada segundo o art. 13, II, da Lei 9.784."
  },
  {
    "id": "cp-11-4-2",
    "pergunta": "Micro-Checkpoint 2: Impedimento Funcional e Dever de Comunicação",
    "item": "Na Lei 8.112/1990, não pode participar de comissão de sindicância ou de inquérito parente do acusado, consanguíneo ou afim, em linha reta ou colateral, até o terceiro grau.",
    "gabarito": "C",
    "justificativa": "A proibição está no art. 149, § 2º, da Lei 8.112. Não é a mesma redação da hipótese geral do art. 18, II, da Lei 9.784, que trata de perito, testemunha ou representante.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5."
  },
  {
    "id": "cp-11-4-3",
    "pergunta": "Micro-Checkpoint 3: Prescrição Disciplinar e Termo Inicial",
    "item": "O prazo prescricional para a aplicação da penalidade de demissão a servidor federal prescreve em cinco anos, computando-se o termo inicial a partir da data em que o servidor efetivamente consumou a falta funcional.",
    "gabarito": "E",
    "justificativa": "O prazo de cinco anos não se inicia necessariamente na consumação. O art. 142, § 1º, adota o conhecimento do fato, com delimitações jurisprudenciais, inclusive autoridade competente (STJ, Súmula 635).",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "versao_correta": "O marco prescricional deve observar o conhecimento do fato nos termos da lei e da jurisprudência aplicável."
  },
  {
    "id": "rt-11-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Concluída a instrução, o prazo de até trinta dias para decidir previsto no art. 49 da Lei 9.784 admite prorrogação por igual período expressamente motivada.",
    "gabarito": "C",
    "justificativa": "O marco é a conclusão da instrução, não qualquer protocolo inicial. O próprio art. 49 prevê a prorrogação, de modo que chamá-lo de improrrogável contraria o dispositivo.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O indeferimento de alegação de suspeição não admite nenhum recurso administrativo, segundo o art. 21 da Lei 9.784.",
    "gabarito": "E",
    "justificativa": "O art. 21 permite recurso, sem efeito suspensivo. Ausência de suspensão e ausência de recurso são conclusões diferentes.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)",
    "habilidade": "aplicar",
    "versao_correta": "Cabe recurso do indeferimento de suspeição, sem efeito suspensivo."
  },
  {
    "id": "rt-11-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No recurso da Lei 9.784, a possibilidade de agravar a situação do recorrente exige sua prévia ciência para manifestação; na revisão sancionadora do art. 65 não pode haver agravamento.",
    "gabarito": "C",
    "justificativa": "O art. 64 exige oportunidade anterior ao agravamento. O art. 65, relativo à revisão por fatos novos/circunstâncias relevantes, veda agravamento. Recurso e revisão têm regras distintas.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A Lei 9.784 determina, como regra geral, contar todos os prazos em dias úteis, tal como no processo civil.",
    "gabarito": "E",
    "justificativa": "O art. 66 prevê contagem contínua dos prazos em dias, com prorrogação do vencimento quando não houver expediente ou ele terminar antes da hora normal. Não se importa automaticamente a regra do CPC.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)",
    "habilidade": "aplicar",
    "versao_correta": "Na Lei 9.784, prazos em dias contam-se continuamente, observadas as regras do art. 66."
  },
  {
    "id": "rt-11-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A falta de advogado no PAD não viola, por si, a Constituição, mas isso não dispensa a efetiva garantia de contraditório e ampla defesa.",
    "gabarito": "C",
    "justificativa": "A SV 5 afasta nulidade constitucional fundada apenas na ausência de defesa técnica por advogado. Ela não autoriza condenação sem citação, prova e oportunidade de defesa.",
    "fonte": "Lei 9.784/1999, arts. 1º–3º, 11–22, 38, 48–49, 56–69; Lei 8.112/1990, arts. 127–182; STF, Súmula Vinculante 5.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 4: Poderes Administrativos)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-4-fonte-geral",
      "nome": "Lei 9.784/1999",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 9.784/1999",
      "ideiaChave": "Competência, garantias, instrução, decisão e recursos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-4-fonte-pad",
      "nome": "Lei 8.112/1990",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 8.112/1990",
      "ideiaChave": "Arts. 127–182: sanções, prescrição, PAD e revisão.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-4-fonte-stj",
      "nome": "STJ — Súmulas",
      "ano": "Referência de consulta",
      "obraPrincipal": "STJ — Súmulas",
      "ideiaChave": "Súmula 635: prescrição disciplinar e interrupção.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-4-fonte-sv5",
      "nome": "STF — Súmulas vinculantes",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Súmulas vinculantes",
      "ideiaChave": "Súmula Vinculante 5 e alcance da defesa técnica.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-4-3",
      "afirmacao": "No recurso da Lei 9.784, a possibilidade de agravar a situação do recorrente exige sua prévia ciência para manifestação; na revisão sancionadora do art. 65 não pode haver agravamento.",
      "gabarito": "C",
      "porQue": "O art. 64 exige oportunidade anterior ao agravamento. O art. 65, relativo à revisão por fatos novos/circunstâncias relevantes, veda agravamento. Recurso e revisão têm regras distintas."
    },
    {
      "id": "memoria-rt-11-4-4",
      "afirmacao": "A Lei 9.784 determina, como regra geral, contar todos os prazos em dias úteis, tal como no processo civil.",
      "gabarito": "E",
      "porQue": "O art. 66 prevê contagem contínua dos prazos em dias, com prorrogação do vencimento quando não houver expediente ou ele terminar antes da hora normal. Não se importa automaticamente a regra do CPC."
    },
    {
      "id": "memoria-rt-11-4-5",
      "afirmacao": "A falta de advogado no PAD não viola, por si, a Constituição, mas isso não dispensa a efetiva garantia de contraditório e ampla defesa.",
      "gabarito": "C",
      "porQue": "A SV 5 afasta nulidade constitucional fundada apenas na ausência de defesa técnica por advogado. Ela não autoriza condenação sem citação, prova e oportunidade de defesa."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-4-bloco-1",
    "titulo": "Processo administrativo e garantias",
    "objetivos": [
      "Reconhecer âmbito federal e subsidiariedade."
    ],
    "conteudo": "A Lei 9.784 estabelece normas básicas do processo administrativo federal. Alcança órgãos dos Poderes Legislativo e Judiciário da União quando exercem função administrativa (art. 1º, § 1º). Processos com lei específica continuam sob essa disciplina, com aplicação subsidiária da lei geral (art. 69). Um PAD da Lei 8.112 não é regido exclusivamente pela Lei 9.784.\n\nLegalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência orientam o processo. Impulso oficial não apaga a participação do interessado. Formalismo moderado reduz exigências inúteis, mas preserva formalidades essenciais a direitos e segurança. Gratuidade tem ressalva de previsão legal, não de mera preferência do órgão.\n\nA busca de esclarecimento dos fatos não autoriza qualquer prova a qualquer tempo. O art. 38 permite juntar documentos, requerer diligências/perícias e apresentar alegações antes da decisão, com regras de apreciação e recusa fundamentada das provas ilícitas, impertinentes, desnecessárias ou protelatórias. Não é correto opor genericamente um processo civil que “só busca verdade formal” a uma Administração sem limites probatórios.\n\n**Caso:** pedido de perícia sem relação com o objeto pode ser recusado motivadamente; negar toda prova porque o gestor já tem convicção viola a finalidade da instrução. O problema é justificar pertinência e necessidade, assegurando participação efetiva, não maximizar o número de documentos.",
    "checkpointIds": []
  },
  {
    "id": "sub-11-4-bloco-2",
    "titulo": "Competência, impedimento e suspeição",
    "objetivos": [
      "Separar regimes gerais e regra da comissão disciplinar."
    ],
    "conteudo": "Competência é irrenunciável, com delegação e avocação nos casos legais. Delegação parcial pode ocorrer sem subordinação; são indelegáveis atos normativos, decisão de recursos e competências exclusivas (art. 13). Avocação exige excepcionalidade, temporariedade, motivos relevantes e órgão inferior hierárquico.\n\nOs arts. 18–19 tratam de **impedimento**: interesse na matéria; participação como perito, testemunha ou representante, inclusive nas situações familiares descritas; e litígio com interessado ou seu cônjuge/companheiro. Deve haver comunicação e abstenção; a omissão constitui falta grave para efeitos disciplinares. **Suspeição**, art. 20, envolve amizade íntima ou inimizade notória nas relações delimitadas. O indeferimento admite recurso **sem efeito suspensivo** (art. 21).\n\nNo PAD, o art. 149, § 2º, da **Lei 8.112** proíbe cônjuge, companheiro ou parente do acusado, consanguíneo ou afim, em linha reta ou colateral até terceiro grau, de participar da comissão de sindicância ou inquérito. Não atribua essa redação ao art. 18, II, da Lei 9.784, que descreve outra hipótese.\n\n**Exemplo resolvido:** um tio do acusado seria membro da comissão. O parentesco colateral de terceiro grau está dentro da proibição específica da Lei 8.112. Não é necessário inventar participação como testemunha para aplicar essa regra.",
    "checkpointIds": [
      "cp-11-4-1",
      "cp-11-4-2",
      "rt-11-4-2"
    ]
  },
  {
    "id": "sub-11-4-bloco-3",
    "titulo": "Decisão, recurso e revisão: três perguntas diferentes",
    "objetivos": [
      "Comparar prazo, efeitos e possibilidade de agravamento."
    ],
    "conteudo": "A Administração deve decidir matérias de sua competência. **Após concluída a instrução**, o art. 49 prevê até trinta dias, com prorrogação por igual período expressamente motivada. Esse prazo não é contado automaticamente do início de todo processo.\n\nDa decisão cabe recurso por razões de legalidade e mérito. É dirigido à autoridade que decidiu, que pode reconsiderar em cinco dias; se não o fizer, encaminha à superior. O prazo geral de interposição é dez dias da ciência/divulgação oficial, salvo disposição legal específica. Há até três instâncias, salvo regra diversa. Em regra o recurso não suspende o ato; pode ser concedido efeito suspensivo nas condições do art. 61.\n\nO art. 64 admite confirmar, modificar, anular ou revogar decisão, no âmbito da competência da autoridade. Se houver possibilidade de agravar a situação, o recorrente deve ser cientificado para alegações antes da decisão. O dispositivo **não fixa ali um prazo universal de dez dias** para essa manifestação: não transporte o prazo de interposição para essa etapa.\n\nA **revisão** do art. 65, relativa a sanções e fatos novos/circunstâncias relevantes, pode ocorrer a qualquer tempo, a pedido ou de ofício, e não permite agravar a sanção. No processo disciplinar, a revisão da Lei 8.112 possui regras próprias e também veda agravamento. Não confunda revisão com nova oportunidade para repetir alegação de injustiça sem elemento novo.\n\n**Contagem:** na Lei 9.784 os dias são contínuos; exclui-se o começo e inclui-se o vencimento, prorrogado ao primeiro dia útil seguinte quando o vencimento não tiver expediente nas condições do art. 66. Não copie automaticamente a contagem em dias úteis do CPC.",
    "checkpointIds": [
      "rt-11-4-1",
      "rt-11-4-3",
      "rt-11-4-4"
    ]
  },
  {
    "id": "sub-11-4-bloco-4",
    "titulo": "Sanções e prescrição: reconhecer fundamento e marco",
    "objetivos": [
      "Diferenciar prazo prescricional e cancelamento de registro."
    ],
    "conteudo": "O art. 127 da Lei 8.112 prevê advertência, suspensão, demissão, cassação de aposentadoria/disponibilidade e destituições de cargo em comissão e função comissionada. Reduzir a lista a três sanções é incompleto. A escolha considera natureza e gravidade, danos, agravantes/atenuantes e antecedentes (art. 128), com tipificação e motivação.\n\nAdvertência é escrita. Suspensão tem limite de noventa dias e pode ser convertida em multa nas condições legais. Demissão exige hipótese do art. 132, não mera conveniência. Abandono envolve ausência **intencional por mais de trinta dias consecutivos**; inassiduidade habitual, sessenta dias interpolados sem causa justificada em doze meses. Não troque os elementos subjetivos e temporais.\n\nO art. 142 prevê cinco anos para infrações das sanções mais graves ali enumeradas, dois anos para suspensão e cento e oitenta dias para advertência. O § 1º usa o conhecimento do fato como marco; a jurisprudência do STJ especifica o conhecimento pela autoridade competente para instaurar a apuração, entre outros limites sobre interrupção. A Súmula 635 do STJ reúne essa orientação. Infrações também capituladas como crime têm regra do § 2º. Não conte sempre da consumação nem afirme suspensão/interrupção ilimitada sem examinar o regime.\n\nCancelamento do registro de advertência/suspensão após os períodos e condições do art. 131 é diferente de prescrição para exercer ação disciplinar. **Recupere:** compare prazo de apuração, prazo para decisão e prazo prescricional. Todos medem tempo, mas têm marcos e consequências distintos.",
    "checkpointIds": [
      "cp-11-4-3"
    ]
  },
  {
    "id": "sub-11-4-bloco-5",
    "titulo": "PAD: apurar com contraditório e decidir com fundamento",
    "objetivos": [
      "Reconhecer fases, comissão e alcance da SV 5."
    ],
    "conteudo": "A Lei 8.112 exige apuração de irregularidade com ampla defesa. Da sindicância podem resultar arquivamento, penalidade de advertência/suspensão de até trinta dias ou instauração de PAD. Sanções mais graves nas hipóteses do art. 146 exigem processo disciplinar; não se deve chamar de “investigação informal” uma punição aplicada sem as garantias próprias.\n\nO PAD ordinário tem **instauração, inquérito e julgamento**; o inquérito compreende instrução, defesa e relatório. A comissão tem três servidores estáveis, com requisitos para a presidência (art. 149). Deve atuar com independência e imparcialidade. O prazo de conclusão é de sessenta dias, admitida prorrogação por igual período nas condições legais. Julgamento fora do prazo não causa automaticamente nulidade, conforme art. 169, § 1º.\n\nA autoridade não está autorizada a decidir por preferência pessoal: o art. 168 disciplina acolhimento do relatório e divergência motivada quando contrário às provas. Afastamento preventivo do art. 147 é cautelar, sem perda da remuneração e dentro de seus limites; não é antecipação de pena.\n\nA **Súmula Vinculante 5** afirma que falta de defesa técnica por advogado não ofende, por si, a Constituição no PAD. Isso não dispensa defesa efetiva, ciência e acesso às provas. Não confunda essa regra com procedimentos nos quais exista exigência legal específica de representação ou com qualquer processo criminal.\n\n**Caso integrador:** uma comissão impedida conclui pela demissão; o gestor pretende sanar tudo dizendo que o acusado não contratou advogado. A SV 5 não resolve o impedimento nem substitui a análise de provas e garantias. Cada defeito tem fundamento próprio e precisa ser examinado separadamente.",
    "checkpointIds": [
      "rt-11-4-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "geral",
    "titulo": "Lei 9.784/1999",
    "localizador": "Competência, garantias, instrução, decisão e recursos.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/1999/lei-9784-29-janeiro-1999-322239-normaatualizada-pl.html"
  },
  {
    "id": "pad",
    "titulo": "Lei 8.112/1990",
    "localizador": "Arts. 127–182: sanções, prescrição, PAD e revisão.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html"
  },
  {
    "id": "stj",
    "titulo": "STJ — Súmulas",
    "localizador": "Súmula 635: prescrição disciplinar e interrupção.",
    "url": "https://scon.stj.jus.br/SCON/sumstj/"
  },
  {
    "id": "sv5",
    "titulo": "STF — Súmulas vinculantes",
    "localizador": "Súmula Vinculante 5 e alcance da defesa técnica.",
    "url": "https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26"
  }
],
};
