import type { ModuloFilho } from '../../../domain/types';

export const submodulo113: ModuloFilho = {
  id: 'sub-11-3',
  numero: '11.3',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)',
  preRequisitos: ["sub-11-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Administração da Câmara dos Deputados",
          "motivo": "Regime funcional dos servidores legislativos e requisição de pessoal."
      }
  ],
  titulo: 'Agentes Públicos e Regime Jurídico Único (Lei nº 8.112/1990)',
  titulo_curto: 'Agentes Públicos e Lei 8.112/90',
  antesDeLer: [
  {
    "termo": "Estabilidade",
    "definicao": "Garantia do art. 41 da CF, sujeita a cargo efetivo, concurso, exercício e avaliação.",
    "exemploBiblioteca": "Tempo em cargo exclusivamente comissionado não gera a garantia."
  },
  {
    "termo": "Recondução",
    "definicao": "Retorno do servidor estável ao cargo anterior nas hipóteses legais.",
    "exemploBiblioteca": "Inabilitação em estágio de outro cargo difere de anulação de demissão."
  }
],
  descricaoCurta: "Identificar cargo, emprego, função e regime. Relacionar a causa do retorno à forma de provimento. Diferenciar remoção, redistribuição, cessão e requisição. Aplicar a regra constitucional sem transportar texto revogado. Separar ausência de fato, de autoria e de prova suficiente.",
  tempoEstimadoMinutos: 19,
  autoresChave: [
  "Lei 8.112/1990",
  "Emenda Constitucional 138/2025",
  "STF — Tema 1022"
],
  alertasCebraspe: [
  "A emenda alterou a alínea para professor com outro cargo de qualquer natureza. Continuam relevantes compatibilidade de horários e demais exigências constitucionais. A regra antiga deve ser contextualizada em provas históricas.",
  "São garantias distintas. O Tema exige motivação formal razoável, sem impor processo administrativo nem enquadramento necessário em justa causa trabalhista; não converte o emprego em cargo estável."
],
  teoriaDensaMarkdown: "### Agentes, vínculos e estabilidade\n\nAgente público é expressão ampla: abrange pessoas que exercem função estatal sob diferentes vínculos, mesmo temporariamente. As classificações doutrinárias distinguem agentes políticos, administrativos, honoríficos e particulares em colaboração, entre outras categorias. Há divergências sobre o alcance de algumas classes; identificar a corrente é mais seguro que afirmar uma única lista universal.\n\n**Cargo público** reúne atribuições e responsabilidades previstas na estrutura legal. Pode ser efetivo ou em comissão. **Emprego** tem vínculo trabalhista, com incidência de normas públicas pertinentes. **Função** é conjunto de atribuições: funções de confiança, na CF, são exclusivas de servidores efetivos; cargos em comissão podem receber pessoas sem cargo efetivo, respeitados percentuais e condições legais. Ambos se destinam a direção, chefia e assessoramento, não a qualquer tarefa operacional por escolha livre.\n\nEstabilidade do art. 41 não alcança todo estatutário: exige nomeação para cargo efetivo por concurso, três anos de efetivo exercício e avaliação especial. A literalidade ainda encontrada no art. 20 da Lei 8.112 sobre duração do estágio deve ser lida em conjunto com a Constituição e sua interpretação; não use o número isolado para afastar a exigência constitucional.\n\nEmpregado público não adquire automaticamente essa estabilidade. O **Tema 1022 do STF** exige motivação formal razoável para dispensar empregados concursados de empresas públicas e sociedades de economia mista, mesmo concorrenciais, sem impor PAD ou justa causa trabalhista. A tese tem delimitação temporal própria; não a transforme em regra retroativa para qualquer dispensa histórica.\n\n**Exemplo:** comissionado há quatro anos não se torna estável por essa duração. Concursado celetista e servidor efetivo também não têm garantias idênticas só porque ambos fizeram concurso. Primeiro identifique vínculo e regime, depois a proteção discutida.\n\n### Ingresso, provimento e vacância\n\nNa Lei 8.112, a investidura ocorre com a **posse**. Nomeação não é exercício. A posse, em regra, tem prazo de trinta dias da publicação do ato, com particularidades legais de afastamentos; o exercício tem prazo de quinze dias contado da posse. Posse ocorre na nomeação. Deixar de tomar posse no prazo conduz a tornar sem efeito o ato; não entrar em exercício no prazo pode levar à exoneração. Não confunda essas consequências com demissão disciplinar.\n\nO art. 8º lista nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução. Ascensão e transferência não permanecem como formas válidas para acesso a carreira diversa sem concurso. **Readaptação** responde a limitação compatível com outras atribuições; **reversão** é retorno do aposentado nos casos legais; **aproveitamento**, retorno de quem está em disponibilidade.\n\n**Reintegração** é retorno do servidor estável cuja demissão foi invalidada, com ressarcimento das vantagens segundo a lei. **Recondução** retorna o estável ao cargo anterior em razão de inabilitação no estágio de outro cargo ou reintegração do anterior ocupante. A causa do retorno resolve a classificação. Não basta ver a expressão “voltou ao cargo”. O destino do ocupante atual também depende de sua situação jurídica e das regras aplicáveis.\n\nVacância (art. 33) inclui exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. Algumas formas são simultaneamente provimento e vacância. Exoneração não é penalidade; demissão é. **Caso resolvido:** servidor estável não é aprovado no estágio de outro cargo: o cenário aponta recondução, não reintegração, pois não houve anulação de demissão.\n\n### Movimentação: pessoa, cargo e fundamento\n\n**Remoção**, art. 36, desloca servidor dentro do mesmo quadro, com ou sem mudança de sede. Pode ser de ofício, a pedido a critério da Administração e a pedido independentemente desse interesse nas hipóteses legais. Saúde exige a comprovação prevista; acompanhamento de cônjuge tem condições próprias, inclusive deslocamento no interesse administrativo. Não basta desejar morar com o cônjuge para preencher automaticamente a hipótese vinculada.\n\n**Redistribuição**, art. 37, desloca cargo efetivo ocupado ou vago para outro órgão ou entidade do mesmo Poder, observados interesse da Administração, equivalência de vencimentos, essência das atribuições, vínculo entre graus de responsabilidade e demais requisitos. É de ofício para ajuste de lotação/força de trabalho. Não é simples pedido pessoal de mudança de sede.\n\n**Cessão**, art. 93, permite exercício em outro órgão ou entidade para cargo em comissão/função de confiança ou nos casos de lei específica. Não altera automaticamente o cargo de origem. O ônus remuneratório não pode ser resumido a “sempre paga quem recebe”: o § 1º distingue a cessão para estados, DF e municípios; outras hipóteses e normas específicas tratam reembolso e condições. Regulamento do Executivo não se aplica indistintamente a todos os Poderes sem base.\n\n**Requisição** tem caráter obrigatório nas hipóteses e limites da lei que a autoriza, diferentemente da cessão ordinariamente negociada. Lei 9.007/1995 e Lei 6.999/1982 tratam contextos próprios. Isso não concede a qualquer órgão poder ilimitado de requisitar qualquer pessoa, de qualquer Poder, para qualquer finalidade. Autoridade, destinatário, prazo, exceções e ônus precisam ser verificados no regime específico.\n\n**Diagnóstico:** se o enunciado desloca cargo, procure redistribuição; se desloca pessoa dentro do quadro, remoção; se transfere exercício sem mover o cargo, examine cessão ou requisição e a base legal. O verbo “requisitar” num ofício não cria competência que a lei não deu.\n\n### Acumulação e teto: contexto temporal importa\n\nA regra é a vedação de acumulação remunerada, ressalvadas exceções constitucionais e suas condições. O art. 37, XVI, contempla dois cargos de professor; um de professor com outro de qualquer natureza, **na redação da EC 138/2025**; e dois cargos/empregos privativos de profissionais de saúde com profissões regulamentadas. Há ainda hipóteses específicas na Constituição que devem ser lidas em seu próprio dispositivo.\n\nA redação anterior da alínea b exigia cargo técnico ou científico. Uma questão histórica pode estar correta nesse contexto e não descrever a redação posterior. Não reescreva silenciosamente a regra de uma prova antiga. No curso relativo ao edital de 2026 cadastrado, é necessário reconhecer a alteração vigente desde a publicação da emenda em dezembro de 2025.\n\n**Compatibilidade de horários** permanece exigida; o permissivo não dispensa deveres funcionais e demais condições. As vedações alcançam os vínculos e entidades indicados no inciso XVII, e não apenas dois cargos estatutários na mesma repartição. Teto remuneratório também exige atenção ao vínculo e à jurisprudência: nas acumulações constitucionalmente autorizadas, o STF adotou incidência por vínculo em seus temas pertinentes, afastando a simples soma como regra indiscriminada.\n\n**Caso:** professor e outro cargo não técnico. A resposta não pode ser decidida pela antiga exigência de natureza técnico-científica quando se aplica a redação pós-EC 138. Ainda é preciso verificar horários e demais pressupostos. A mudança amplia uma hipótese; não libera acumulação irrestrita de quaisquer dois cargos.\n\n### Responsabilidades e comunicação entre instâncias\n\nA Lei 8.112 trata de responsabilidades civil, penal e administrativa nos arts. 121–126. Independência permite apurar consequências em regimes distintos, sem identidade necessária de tipo, finalidade ou padrão probatório. Isso não significa que decisões judiciais jamais repercutam na esfera administrativa.\n\nO art. 126 afasta responsabilidade administrativa quando a absolvição criminal negar existência do fato ou autoria. Absolvição por insuficiência de provas não equivale a afirmar que o fato não existiu. Ausência de crime também não prova automaticamente ausência de infração disciplinar. Deve-se examinar o fundamento concreto da decisão e a conduta residual, com respeito às garantias processuais.\n\n**Exemplo resolvido:** não há prova penal suficiente para condenar por corrupção, mas o procedimento administrativo demonstra infração funcional distinta, com contraditório. Não se pode arquivar automaticamente só pelo resultado penal. Em outro cenário, decisão penal definitiva afirma categoricamente que o fato atribuído não ocorreu: há repercussão prevista no art. 126.\n\nResponsabilização pessoal não é objetiva só por a Administração responder objetivamente perante terceiros em hipóteses constitucionais. Não troque sujeito, regime e pressupostos. A regressiva envolve dolo ou culpa conforme o regime constitucional, sem dispensar exame das normas específicas sobre decisões/opiniões técnicas.\n\n**Recupere:** explique a diferença entre “não foi demonstrado que aconteceu” e “ficou demonstrado que não aconteceu”. Ela altera a conclusão jurídica e exige leitura cuidadosa da justificativa, além do resultado “absolvido”.",
  teoriaDidaticaMarkdown: "### Revisão: vínculo, causa e regime\n\nCargo, emprego e função não são sinônimos. Estabilidade do art. 41 exige requisitos próprios e não alcança todo comissionado ou empregado concursado. Nomeação, posse e exercício são etapas distintas. Identifique a causa de retorno: demissão anulada aponta reintegração; inabilitação de estável em estágio de outro cargo aponta recondução. Remoção desloca pessoa no quadro; redistribuição desloca cargo no mesmo Poder; cessão e requisição exigem seus regimes específicos. Ônus e prazos não são universais.\n\n**Atualização:** EC 138/2025 ampliou professor com outro cargo de qualquer natureza; compatibilidade de horários continua exigida. Independência de instâncias não elimina repercussões legais de negativa penal de fato ou autoria. Absolvição por falta de prova é fundamento diferente.\n",
  checkpoints: [
  {
    "id": "cp-11-3-1",
    "pergunta": "Micro-Checkpoint 1: Recondução e Reintegração de Servidor Estável",
    "item": "Servidor estável da Câmara dos Deputados que tomar posse em outro cargo público inacumulável e for inabilitado no respectivo estágio probatório tem direito à recondução ao cargo de origem, nos termos dos arts. 28 e 29 da Lei nº 8.112/1990.",
    "gabarito": "C",
    "justificativa": "A causa descrita é inabilitação no estágio de outro cargo, hipótese de recondução do servidor estável (art. 29), não anulação de demissão.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022."
  },
  {
    "id": "cp-11-3-2",
    "pergunta": "Micro-Checkpoint 2: Diferença Técnica entre Requisição e Cessão de Servidores",
    "item": "Nas hipóteses em que lei autoriza requisição de servidor e seus pressupostos estão preenchidos, o atendimento tem caráter obrigatório, diferentemente da cessão ordinariamente dependente de concordância administrativa.",
    "gabarito": "C",
    "justificativa": "A compulsoriedade deriva da lei específica e de seus limites. Não basta chamar o pedido de requisição nem supor poder ilimitado sobre servidores de qualquer órgão.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022."
  },
  {
    "id": "cp-11-3-3",
    "pergunta": "Micro-Checkpoint 3: Independência das Instâncias e Absolvição Criminal",
    "item": "A absolvição penal de um servidor público federal fundada na falta de provas suficientes para a condenação criminal vincula a esfera administrativa e impõe o arquivamento automático do processo administrativo disciplinar contra ele instaurado.",
    "gabarito": "E",
    "justificativa": "Insuficiência de prova penal não é negativa categórica de fato ou autoria. O art. 126 não determina arquivamento automático nessa hipótese; a apuração administrativa deve ter fundamento e respeitar garantias.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "versao_correta": "A repercussão depende do fundamento da absolvição; insuficiência probatória não impõe arquivamento administrativo automático."
  },
  {
    "id": "rt-11-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O fato de uma pessoa ser ocupante exclusivamente de cargo em comissão por mais de três anos não lhe assegura a estabilidade do art. 41 da Constituição.",
    "gabarito": "C",
    "justificativa": "A estabilidade constitucional depende de nomeação para cargo efetivo em virtude de concurso, tempo de efetivo exercício e avaliação especial. Tempo em cargo exclusivamente comissionado não substitui esses requisitos.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na Lei 8.112/1990, remoção desloca o servidor no mesmo quadro, enquanto redistribuição tem por objeto cargo efetivo, ocupado ou vago, para outro órgão ou entidade do mesmo Poder.",
    "gabarito": "C",
    "justificativa": "A troca do objeto — pessoa ou cargo — é decisiva. Redistribuição exige os pressupostos legais; remoção admite hipóteses de ofício e a pedido.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-11-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Depois da EC 138/2025, a exceção do art. 37, XVI, b, continua limitada a professor com outro cargo técnico ou científico.",
    "gabarito": "E",
    "justificativa": "A emenda alterou a alínea para professor com outro cargo de qualquer natureza. Continuam relevantes compatibilidade de horários e demais exigências constitucionais. A regra antiga deve ser contextualizada em provas históricas.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)",
    "habilidade": "aplicar",
    "versao_correta": "A alínea b passou a permitir professor com outro cargo de qualquer natureza, observadas as condições constitucionais."
  },
  {
    "id": "rt-11-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A motivação formal exigida para dispensar empregado concursado de empresa pública, no Tema 1022 do STF, equivale à estabilidade estatutária do art. 41.",
    "gabarito": "E",
    "justificativa": "São garantias distintas. O Tema exige motivação formal razoável, sem impor processo administrativo nem enquadramento necessário em justa causa trabalhista; não converte o emprego em cargo estável.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)",
    "habilidade": "aplicar",
    "versao_correta": "A exigência de motivação não se confunde com estabilidade estatutária."
  },
  {
    "id": "rt-11-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A posse em outro cargo inacumulável é hipótese de vacância, mas não constitui, por esse motivo, uma penalidade disciplinar.",
    "gabarito": "C",
    "justificativa": "Vacância descreve desocupação do cargo e inclui hipóteses não sancionatórias. Demissão é penalidade; exoneração e posse em outro cargo têm pressupostos diferentes.",
    "fonte": "CF, arts. 37 e 41, com EC 138/2025; Lei 8.112/1990, arts. 8º, 13–15, 24–29, 33–37, 93 e 121–126; STF, Tema 1022.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-3-fonte-rju",
      "nome": "Lei 8.112/1990",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 8.112/1990",
      "ideiaChave": "Provimento, movimentação, cessão e responsabilidades.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-3-fonte-ec138",
      "nome": "Emenda Constitucional 138/2025",
      "ano": "Referência de consulta",
      "obraPrincipal": "Emenda Constitucional 138/2025",
      "ideiaChave": "Art. 1º: alteração do art. 37, XVI, b; vigência na publicação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-3-fonte-tema1022",
      "nome": "STF — Tema 1022",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Tema 1022",
      "ideiaChave": "Motivação formal da dispensa; não equivale a estabilidade.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-3-3",
      "afirmacao": "Depois da EC 138/2025, a exceção do art. 37, XVI, b, continua limitada a professor com outro cargo técnico ou científico.",
      "gabarito": "E",
      "porQue": "A emenda alterou a alínea para professor com outro cargo de qualquer natureza. Continuam relevantes compatibilidade de horários e demais exigências constitucionais. A regra antiga deve ser contextualizada em provas históricas."
    },
    {
      "id": "memoria-rt-11-3-4",
      "afirmacao": "A motivação formal exigida para dispensar empregado concursado de empresa pública, no Tema 1022 do STF, equivale à estabilidade estatutária do art. 41.",
      "gabarito": "E",
      "porQue": "São garantias distintas. O Tema exige motivação formal razoável, sem impor processo administrativo nem enquadramento necessário em justa causa trabalhista; não converte o emprego em cargo estável."
    },
    {
      "id": "memoria-rt-11-3-5",
      "afirmacao": "A posse em outro cargo inacumulável é hipótese de vacância, mas não constitui, por esse motivo, uma penalidade disciplinar.",
      "gabarito": "C",
      "porQue": "Vacância descreve desocupação do cargo e inclui hipóteses não sancionatórias. Demissão é penalidade; exoneração e posse em outro cargo têm pressupostos diferentes."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-3-bloco-1",
    "titulo": "Agentes, vínculos e estabilidade",
    "objetivos": [
      "Identificar cargo, emprego, função e regime."
    ],
    "conteudo": "Agente público é expressão ampla: abrange pessoas que exercem função estatal sob diferentes vínculos, mesmo temporariamente. As classificações doutrinárias distinguem agentes políticos, administrativos, honoríficos e particulares em colaboração, entre outras categorias. Há divergências sobre o alcance de algumas classes; identificar a corrente é mais seguro que afirmar uma única lista universal.\n\n**Cargo público** reúne atribuições e responsabilidades previstas na estrutura legal. Pode ser efetivo ou em comissão. **Emprego** tem vínculo trabalhista, com incidência de normas públicas pertinentes. **Função** é conjunto de atribuições: funções de confiança, na CF, são exclusivas de servidores efetivos; cargos em comissão podem receber pessoas sem cargo efetivo, respeitados percentuais e condições legais. Ambos se destinam a direção, chefia e assessoramento, não a qualquer tarefa operacional por escolha livre.\n\nEstabilidade do art. 41 não alcança todo estatutário: exige nomeação para cargo efetivo por concurso, três anos de efetivo exercício e avaliação especial. A literalidade ainda encontrada no art. 20 da Lei 8.112 sobre duração do estágio deve ser lida em conjunto com a Constituição e sua interpretação; não use o número isolado para afastar a exigência constitucional.\n\nEmpregado público não adquire automaticamente essa estabilidade. O **Tema 1022 do STF** exige motivação formal razoável para dispensar empregados concursados de empresas públicas e sociedades de economia mista, mesmo concorrenciais, sem impor PAD ou justa causa trabalhista. A tese tem delimitação temporal própria; não a transforme em regra retroativa para qualquer dispensa histórica.\n\n**Exemplo:** comissionado há quatro anos não se torna estável por essa duração. Concursado celetista e servidor efetivo também não têm garantias idênticas só porque ambos fizeram concurso. Primeiro identifique vínculo e regime, depois a proteção discutida.",
    "checkpointIds": [
      "rt-11-3-1",
      "rt-11-3-4"
    ]
  },
  {
    "id": "sub-11-3-bloco-2",
    "titulo": "Ingresso, provimento e vacância",
    "objetivos": [
      "Relacionar a causa do retorno à forma de provimento."
    ],
    "conteudo": "Na Lei 8.112, a investidura ocorre com a **posse**. Nomeação não é exercício. A posse, em regra, tem prazo de trinta dias da publicação do ato, com particularidades legais de afastamentos; o exercício tem prazo de quinze dias contado da posse. Posse ocorre na nomeação. Deixar de tomar posse no prazo conduz a tornar sem efeito o ato; não entrar em exercício no prazo pode levar à exoneração. Não confunda essas consequências com demissão disciplinar.\n\nO art. 8º lista nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução. Ascensão e transferência não permanecem como formas válidas para acesso a carreira diversa sem concurso. **Readaptação** responde a limitação compatível com outras atribuições; **reversão** é retorno do aposentado nos casos legais; **aproveitamento**, retorno de quem está em disponibilidade.\n\n**Reintegração** é retorno do servidor estável cuja demissão foi invalidada, com ressarcimento das vantagens segundo a lei. **Recondução** retorna o estável ao cargo anterior em razão de inabilitação no estágio de outro cargo ou reintegração do anterior ocupante. A causa do retorno resolve a classificação. Não basta ver a expressão “voltou ao cargo”. O destino do ocupante atual também depende de sua situação jurídica e das regras aplicáveis.\n\nVacância (art. 33) inclui exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento. Algumas formas são simultaneamente provimento e vacância. Exoneração não é penalidade; demissão é. **Caso resolvido:** servidor estável não é aprovado no estágio de outro cargo: o cenário aponta recondução, não reintegração, pois não houve anulação de demissão.",
    "checkpointIds": [
      "cp-11-3-1",
      "rt-11-3-5"
    ]
  },
  {
    "id": "sub-11-3-bloco-3",
    "titulo": "Movimentação: pessoa, cargo e fundamento",
    "objetivos": [
      "Diferenciar remoção, redistribuição, cessão e requisição."
    ],
    "conteudo": "**Remoção**, art. 36, desloca servidor dentro do mesmo quadro, com ou sem mudança de sede. Pode ser de ofício, a pedido a critério da Administração e a pedido independentemente desse interesse nas hipóteses legais. Saúde exige a comprovação prevista; acompanhamento de cônjuge tem condições próprias, inclusive deslocamento no interesse administrativo. Não basta desejar morar com o cônjuge para preencher automaticamente a hipótese vinculada.\n\n**Redistribuição**, art. 37, desloca cargo efetivo ocupado ou vago para outro órgão ou entidade do mesmo Poder, observados interesse da Administração, equivalência de vencimentos, essência das atribuições, vínculo entre graus de responsabilidade e demais requisitos. É de ofício para ajuste de lotação/força de trabalho. Não é simples pedido pessoal de mudança de sede.\n\n**Cessão**, art. 93, permite exercício em outro órgão ou entidade para cargo em comissão/função de confiança ou nos casos de lei específica. Não altera automaticamente o cargo de origem. O ônus remuneratório não pode ser resumido a “sempre paga quem recebe”: o § 1º distingue a cessão para estados, DF e municípios; outras hipóteses e normas específicas tratam reembolso e condições. Regulamento do Executivo não se aplica indistintamente a todos os Poderes sem base.\n\n**Requisição** tem caráter obrigatório nas hipóteses e limites da lei que a autoriza, diferentemente da cessão ordinariamente negociada. Lei 9.007/1995 e Lei 6.999/1982 tratam contextos próprios. Isso não concede a qualquer órgão poder ilimitado de requisitar qualquer pessoa, de qualquer Poder, para qualquer finalidade. Autoridade, destinatário, prazo, exceções e ônus precisam ser verificados no regime específico.\n\n**Diagnóstico:** se o enunciado desloca cargo, procure redistribuição; se desloca pessoa dentro do quadro, remoção; se transfere exercício sem mover o cargo, examine cessão ou requisição e a base legal. O verbo “requisitar” num ofício não cria competência que a lei não deu.",
    "checkpointIds": [
      "rt-11-3-2",
      "cp-11-3-2"
    ]
  },
  {
    "id": "sub-11-3-bloco-4",
    "titulo": "Acumulação e teto: contexto temporal importa",
    "objetivos": [
      "Aplicar a regra constitucional sem transportar texto revogado."
    ],
    "conteudo": "A regra é a vedação de acumulação remunerada, ressalvadas exceções constitucionais e suas condições. O art. 37, XVI, contempla dois cargos de professor; um de professor com outro de qualquer natureza, **na redação da EC 138/2025**; e dois cargos/empregos privativos de profissionais de saúde com profissões regulamentadas. Há ainda hipóteses específicas na Constituição que devem ser lidas em seu próprio dispositivo.\n\nA redação anterior da alínea b exigia cargo técnico ou científico. Uma questão histórica pode estar correta nesse contexto e não descrever a redação posterior. Não reescreva silenciosamente a regra de uma prova antiga. No curso relativo ao edital de 2026 cadastrado, é necessário reconhecer a alteração vigente desde a publicação da emenda em dezembro de 2025.\n\n**Compatibilidade de horários** permanece exigida; o permissivo não dispensa deveres funcionais e demais condições. As vedações alcançam os vínculos e entidades indicados no inciso XVII, e não apenas dois cargos estatutários na mesma repartição. Teto remuneratório também exige atenção ao vínculo e à jurisprudência: nas acumulações constitucionalmente autorizadas, o STF adotou incidência por vínculo em seus temas pertinentes, afastando a simples soma como regra indiscriminada.\n\n**Caso:** professor e outro cargo não técnico. A resposta não pode ser decidida pela antiga exigência de natureza técnico-científica quando se aplica a redação pós-EC 138. Ainda é preciso verificar horários e demais pressupostos. A mudança amplia uma hipótese; não libera acumulação irrestrita de quaisquer dois cargos.",
    "checkpointIds": [
      "rt-11-3-3"
    ]
  },
  {
    "id": "sub-11-3-bloco-5",
    "titulo": "Responsabilidades e comunicação entre instâncias",
    "objetivos": [
      "Separar ausência de fato, de autoria e de prova suficiente."
    ],
    "conteudo": "A Lei 8.112 trata de responsabilidades civil, penal e administrativa nos arts. 121–126. Independência permite apurar consequências em regimes distintos, sem identidade necessária de tipo, finalidade ou padrão probatório. Isso não significa que decisões judiciais jamais repercutam na esfera administrativa.\n\nO art. 126 afasta responsabilidade administrativa quando a absolvição criminal negar existência do fato ou autoria. Absolvição por insuficiência de provas não equivale a afirmar que o fato não existiu. Ausência de crime também não prova automaticamente ausência de infração disciplinar. Deve-se examinar o fundamento concreto da decisão e a conduta residual, com respeito às garantias processuais.\n\n**Exemplo resolvido:** não há prova penal suficiente para condenar por corrupção, mas o procedimento administrativo demonstra infração funcional distinta, com contraditório. Não se pode arquivar automaticamente só pelo resultado penal. Em outro cenário, decisão penal definitiva afirma categoricamente que o fato atribuído não ocorreu: há repercussão prevista no art. 126.\n\nResponsabilização pessoal não é objetiva só por a Administração responder objetivamente perante terceiros em hipóteses constitucionais. Não troque sujeito, regime e pressupostos. A regressiva envolve dolo ou culpa conforme o regime constitucional, sem dispensar exame das normas específicas sobre decisões/opiniões técnicas.\n\n**Recupere:** explique a diferença entre “não foi demonstrado que aconteceu” e “ficou demonstrado que não aconteceu”. Ela altera a conclusão jurídica e exige leitura cuidadosa da justificativa, além do resultado “absolvido”.",
    "checkpointIds": [
      "cp-11-3-3"
    ]
  }
],
fontesTeoria: [
  {
    "id": "rju",
    "titulo": "Lei 8.112/1990",
    "localizador": "Provimento, movimentação, cessão e responsabilidades.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html"
  },
  {
    "id": "ec138",
    "titulo": "Emenda Constitucional 138/2025",
    "localizador": "Art. 1º: alteração do art. 37, XVI, b; vigência na publicação.",
    "url": "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc138.htm"
  },
  {
    "id": "tema1022",
    "titulo": "STF — Tema 1022",
    "localizador": "Motivação formal da dispensa; não equivale a estabilidade.",
    "url": "https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=1022"
  }
],
};

