import type { ModuloFilho } from '../../../domain/types';

export const submodulo116: ModuloFilho = {
  id: 'sub-11-6',
  numero: '11.6',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 6: Licitações e Contratos - Lei 14.133/2021)',
  preRequisitos: ["sub-11-5"],
  titulo: 'Responsabilidade Civil do Estado: Ação, Omissão e Direito de Regresso',
  titulo_curto: 'Responsabilidade Civil do Estado',
  antesDeLer: [
  {
    "termo": "Nexo causal",
    "definicao": "Relação entre conduta imputável e dano, examinada no regime aplicável.",
    "exemploBiblioteca": "Dano anterior ao transporte não é automaticamente causado pelo servidor que o transportou."
  },
  {
    "termo": "Regresso",
    "definicao": "Pretensão contra o responsável nas condições constitucionais e legais.",
    "exemploBiblioteca": "Responsabilidade externa objetiva não dispensa dolo ou culpa exigidos para regresso."
  }
],
  descricaoCurta: "Distinguir risco administrativo e falta do serviço. Identificar as pessoas jurídicas abrangidas pelo art. 37, § 6º. Relacionar dano, conduta e nexo sem exigir culpa do agente no polo externo. Examinar dever específico e possibilidade de impedir o dano. Aplicar excludentes ao nexo, sem automatismo pelo nome do evento. Distinguir ação do terceiro, regresso e outras esferas.",
  tempoEstimadoMinutos: 16,
  autoresChave: [
  "Constituição Federal",
  "STF — Tema 940",
  "STF — Tema 592"
],
  alertasCebraspe: [
  "Ela dispensa a culpa no regime pertinente, sem eliminar dano e causalidade.",
  "O nome da causa não prova exclusividade nem rompe automaticamente o nexo.",
  "A primeira protege o terceiro sob as condições constitucionais; a segunda exige os pressupostos de regresso contra o responsável."
],
  teoriaDensaMarkdown: "### Evolução Histórica da Responsabilidade Civil do Estado\n\nA compreensão da responsabilidade patrimonial extracontratual do Estado passou por quatro formulações históricas frequentemente usadas para fins didáticos, sem presumir cronologia idêntica em todos os países:\n\n1. **Teoria da Irresponsabilidade Estatal (*The King Can Do No Wrong*):** Típica dos Estados absolutistas, nos quais a soberania régia era inquestionável e o soberano não respondia civilmente por prejuízos causados aos súditos.\n2. **Teoria da Culpa Civilista (Responsabilidade com Culpa):** Com o advento do Estado Liberal, admitiu-se a responsabilidade estatal distinguindo os *atos de império* (praticados com supremacia soberana, irrecorríveis e isentos de indenização) dos *atos de gestão* (praticados em condições de igualdade com os particulares, nos quais o Estado respondia com base na culpa civil subjetiva do seu preposto).\n3. **Teoria da Culpa Administrativa (Falta do Serviço / *Faute du Service*):** Rompe com a culpa individual do funcionário. O dever de indenizar surge da falta do serviço público, demonstrada em três hipóteses: o serviço *não funcionou*, funcionou *mal* ou funcionou com *atraso*. É uma teoria de responsabilidade subjetiva, mas de culpa anônima do aparelho estatal.\n4. **Teoria do Risco Administrativo (Responsabilidade Objetiva):** Adotada como regra pela Constituição Federal de 1988 (art. 37, § 6º). Assenta-se no princípio da equidade e na repartição dos encargos públicos: a coletividade beneficia-se dos serviços públicos; logo, eventuais prejuízos causados a indivíduos pela atuação estatal devem ser reparados pelo erário, independentemente da demonstração de dolo ou culpa do servidor.\n\n**Aplicação e recuperação:** Um serviço funcionou tarde e causou dano demonstrado. A falta do serviço não exige identificar qual funcionário errou para formular a teoria da culpa administrativa. Já o risco administrativo dispensa prova de culpa no regime objetivo, mas conserva os demais pressupostos.\n\n### O Regime Constitucional do Art. 37, § 6º da CF/88\n\n> *\"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"*\n\n* **Pessoas Jurídicas Vinculadas:** \n  1. Todas as pessoas jurídicas de direito público (União, Estados, DF, Municípios, Autarquias e Fundações Públicas de Direito Público);\n  2. Pessoas jurídicas de direito privado **prestadoras de serviços públicos** (Empresas Públicas e Sociedades de Economia Mista prestadoras de serviços, bem como concessionárias e permissionárias privadas).\n* **Empresas Estatais Exploradoras de Atividade Econômica:** Não se submetem à responsabilidade objetiva do art. 37, § 6º, da CF/88, respondendo sob o regime de direito privado civil comum (art. 173, § 1º, II, CF), sem afastar hipóteses de responsabilidade objetiva estabelecidas por outras normas, como o CDC quando aplicável.\n\n**Aplicação e recuperação:** Uma concessionária causa dano a terceiro não usuário durante a prestação do serviço. O Tema 130 do STF reconhece responsabilidade objetiva perante usuários e não usuários. Ser pessoa privada não afasta por si o art. 37, § 6º; a atividade e a qualidade da atuação importam.\n\n### Requisitos para a Configuração da Responsabilidade Objetiva\n\nPara que o particular faça jus à indenização pelo Estado, é necessário examinar, no cenário constitucional pertinente, três elementos, sem dispensar a análise de excludentes:\n1. **Conduta Estatal:** Conduta imputável ao Estado no regime pertinente; na atuação comissiva, o agente deve atuar nessa qualidade;\n2. **Dano Efetivo:** Lesão material, patrimonial, estética ou moral direta a direito de terceiro;\n3. **Nexo de Causalidade:** Relação de causa e efeito direta e imediata entre a conduta do agente público e o dano experimentado (Teoria do Dano Direto e Imediato - art. 403 do Código Civil).\n\n**Aplicação e recuperação:** Livro particular é danificado durante transporte oficial por agente nessa qualidade. Identifique o prejuízo e o vínculo causal. Se os mesmos danos já existiam antes do transporte, não podem ser integralmente atribuídos à conduta sem demonstração. Objetividade não dispensa prova de dano e causalidade.\n\n### Responsabilidade por Omissão do Estado\n\n* **Omissão Genérica (Regra da Responsabilidade Subjetiva):** Ocorre quando o Estado descumpre um dever genérico de proteção da coletividade (ex.: furto de automóvel estacionado em rua pública, assalto na via comum, chuva torrencial que alaga avenida sem falha construtiva). o tratamento doutrinário usual aponta responsabilidade **subjetiva** pela falha do serviço, exigindo verificar o dever concreto, possibilidade de atuação e causalidade; não basta chamar a situação de omissão para decidir todo caso (o particular deve demonstrar que o Estado tinha o dever de agir e foi negligente).\n* **Omissão Específica (Responsabilidade Objetiva por Dever de Custódia):** Ocorre quando o Estado detém o dever jurídico individualizado de evitar o dano sobre pessoas ou coisas postas sob sua custódia ou vigilância direta e imediata:\n  * Exemplo: O Tema 592 do STF examina morte de detento diante da inobservância do dever específico de proteção. É preciso demonstrar as condições da tese e o nexo. Não se conclui responsabilidade automática por toda morte, por todo evento em hospital/escola ou pela simples presença de um bem em prédio público. Cada hipótese demanda seu regime, dever e possibilidade de evitar o dano.\n\n**Aplicação e recuperação:** A narrativa informa apenas que ocorreu lesão dentro de prédio público. Ela ainda não descreve todo dever de proteção nem a possibilidade de prevenção. No caso de custódia do Tema 592, examine se houve inobservância do dever específico. Não transforme “dentro do prédio” em teste jurídico universal.\n\n### Causas Excludentes e Atenuantes da Responsabilidade\n\nComo a CF/88 adotou a Teoria do Risco Administrativo (e não a Teoria do Risco Integral), admite-se a exclusão ou a redução da responsabilidade estatal quando houver quebra do nexo causal:\n\n* **Causas Excludentes (Isentam o Estado Integralmente):**\n  1. **Culpa Exclusiva da Vítima:** O particular causa o evento lesivo por sua própria e exclusiva imprudência ou dolo (ex.: cidadão que se joga intencionalmente sob as rodas de viatura oficial em movimento regular).\n  2. **Caso Fortuito ou Força Maior:** Eventos cuja relação com a atuação e o dever estatal efetivamente rompa o nexo no cenário. Um evento natural não exclui responsabilidade se o dano também decorre de falha causalmente relevante do serviço.\n  3. **Fato Exclusivo de Terceiro:** Evento danoso praticado por terceiro sem nenhuma participação ou negligência de agentes públicos.\n* **Causa Atenuante (Reduz a Indenização Proporcionalmente):**\n  * **Culpa Concorrente da Vítima:** A vítima e o agente público concorrem simultaneamente para o desfecho danoso (o valor da reparação fixado judicialmente é partilhado proporcionalmente).\n\n**Aplicação e recuperação:** Chuva intensa danifica acervo após anos de vazamentos documentados e sem providência. Invocar natureza do evento não encerra o exame: a omissão pode ter relevância causal. Em cenário diferente, uma causa exclusiva realmente rompe o nexo. Explique qual fato mudaria a conclusão.\n\n### Ação Regressiva e a Tese do Tema 940 do STF (Princípio da Dupla Garantia)\n\nO Supremo Tribunal Federal, ao julgar o **Tema 940 da Repercussão Geral (RE 1.027.633/SP)**, fixou tese vinculante:\n> *\"A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o agente público, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"*\n\n* **Princípio da Dupla Garantia:** A tese direciona a ação indenizatória do terceiro contra a pessoa jurídica e preserva o regresso nos casos de dolo ou culpa. Não promete pagamento imediato nem elimina responsabilização penal ou disciplinar do agente.\n\n**Aplicação e recuperação:** No regime do Tema 940, a vítima processa a pessoa jurídica; eventual regresso examina dolo ou culpa do agente. Essas duas etapas não autorizam negar à vítima indenização só porque não demonstrou culpa pessoal. Tampouco autorizam cobrar regressivamente sem esse pressuposto.",
  teoriaDidaticaMarkdown: "### Revisão: quem responde, por qual dano e em que relação?\n\nRisco administrativo não é risco integral. Objetividade dispensa culpa no regime aplicável, sem apagar dano, conduta e nexo. Prestadora privada de serviço público pode estar abrangida; empresa econômica pede outro exame. Omissões exigem identificar dever e causalidade; custódia não é responsabilidade automática por todo evento. Excludentes só funcionam quando efetivamente rompem o nexo. Tema 940 dirige a ação do terceiro contra a pessoa jurídica, preservando regresso por dolo ou culpa e outras esferas de responsabilização.\n",
  checkpoints: [
  {
    "id": "cp-11-6-1",
    "pergunta": "Micro-Checkpoint 1: Polo Passivo da Ação Indenizatória (STF Tema 940)",
    "item": "Cidadão que tiver bens pessoais destruídos por negligência comprovada de servidor bibliotecário durante transporte de acervo da Câmara pode ajuizar ação de reparação de danos incluindo o servidor e a União em litisconsórcio passivo facultativo.",
    "gabarito": "E",
    "justificativa": "No cenário de atuação do agente nessa qualidade, o Tema 940 dirige a ação contra a União e reconhece ilegitimidade passiva do agente, sem eliminar eventual regresso.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário.",
    "versao_correta": "A vítima deve demandar a pessoa jurídica no regime do Tema 940; cabe regresso contra o agente nos casos de dolo ou culpa."
  },
  {
    "id": "cp-11-6-2",
    "pergunta": "Micro-Checkpoint 2: Responsabilidade Objetiva por Atos Comissivos e Regresso",
    "item": "A responsabilidade civil da União perante terceiros pelos atos comissivos praticados por seus agentes públicos independe da comprovação de culpa ou dolo, ao passo que a ação de regresso movida pela União contra o servidor exige a prova indispensável de conduta dolosa ou culposa.",
    "gabarito": "C",
    "justificativa": "O art. 37, § 6º, distingue responsabilidade perante terceiros e regresso. Ainda são necessários dano, conduta imputável e nexo; não se presume a responsabilidade só pelo vínculo do agente.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário."
  },
  {
    "id": "cp-11-6-3",
    "pergunta": "Micro-Checkpoint 3: Teoria do Risco Integral e Excludentes de Causalidade",
    "item": "No ordenamento jurídico brasileiro, a teoria do risco integral aplica-se como regra geral a toda a Administração Pública direta e indireta, impedindo que o Estado se exima de indenizar mesmo diante de comprovada culpa exclusiva da vítima.",
    "gabarito": "E",
    "justificativa": "A regra constitucional é risco administrativo, com análise de excludentes de nexo. A frase generaliza indevidamente risco integral a toda Administração. Hipóteses especiais têm regimes próprios.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário.",
    "versao_correta": "O art. 37, § 6º, adota risco administrativo como regra, sem excluir a análise de causalidade."
  },
  {
    "id": "rt-11-6-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Responsabilidade objetiva elimina a necessidade de demonstrar nexo causal.",
    "gabarito": "E",
    "justificativa": "Ela dispensa a culpa no regime pertinente, sem eliminar dano e causalidade.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 6: Licitações e Contratos - Lei 14.133/2021)",
    "habilidade": "aplicar",
    "versao_correta": "Responsabilidade objetiva não dispensa dano e nexo causal."
  },
  {
    "id": "rt-11-6-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma causa natural exclui necessariamente a responsabilidade mesmo se falha do serviço concorreu para o dano.",
    "gabarito": "E",
    "justificativa": "O nome da causa não prova exclusividade nem rompe automaticamente o nexo.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 6: Licitações e Contratos - Lei 14.133/2021)",
    "habilidade": "aplicar",
    "versao_correta": "É preciso verificar se a causa rompeu o nexo ou concorreu com falha estatal."
  },
  {
    "id": "rt-11-6-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A responsabilidade externa objetiva e a ação regressiva subjetiva examinam relações jurídicas distintas.",
    "gabarito": "C",
    "justificativa": "A primeira protege o terceiro sob as condições constitucionais; a segunda exige os pressupostos de regresso contra o responsável.",
    "fonte": "CF, art. 37, § 6º; STF, Temas 130, 592 e 940; responsabilidade extracontratual nos limites do cenário.",
    "editalRef": "Conhecimentos Básicos - Direito Administrativo (Item 6: Licitações e Contratos - Lei 14.133/2021)",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-11-6-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 37, 49, 70–75 e 84, conforme o assunto.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-6-fonte-tema940",
      "nome": "STF — Tema 940",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Tema 940",
      "ideiaChave": "Polo passivo da ação e direito de regresso.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-11-6-fonte-tema592",
      "nome": "STF — Tema 592",
      "ano": "Referência de consulta",
      "obraPrincipal": "STF — Tema 592",
      "ideiaChave": "Dever específico de proteção da pessoa sob custódia.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-11-6-1",
      "afirmacao": "Responsabilidade objetiva elimina a necessidade de demonstrar nexo causal.",
      "gabarito": "E",
      "porQue": "Ela dispensa a culpa no regime pertinente, sem eliminar dano e causalidade."
    },
    {
      "id": "memoria-rt-11-6-2",
      "afirmacao": "Uma causa natural exclui necessariamente a responsabilidade mesmo se falha do serviço concorreu para o dano.",
      "gabarito": "E",
      "porQue": "O nome da causa não prova exclusividade nem rompe automaticamente o nexo."
    },
    {
      "id": "memoria-rt-11-6-3",
      "afirmacao": "A responsabilidade externa objetiva e a ação regressiva subjetiva examinam relações jurídicas distintas.",
      "gabarito": "C",
      "porQue": "A primeira protege o terceiro sob as condições constitucionais; a segunda exige os pressupostos de regresso contra o responsável."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-11-6-bloco-1",
    "titulo": "Evolução Histórica da Responsabilidade Civil do Estado",
    "objetivos": [
      "Distinguir risco administrativo e falta do serviço."
    ],
    "conteudo": "A compreensão da responsabilidade patrimonial extracontratual do Estado passou por quatro formulações históricas frequentemente usadas para fins didáticos, sem presumir cronologia idêntica em todos os países:\n\n1. **Teoria da Irresponsabilidade Estatal (*The King Can Do No Wrong*):** Típica dos Estados absolutistas, nos quais a soberania régia era inquestionável e o soberano não respondia civilmente por prejuízos causados aos súditos.\n2. **Teoria da Culpa Civilista (Responsabilidade com Culpa):** Com o advento do Estado Liberal, admitiu-se a responsabilidade estatal distinguindo os *atos de império* (praticados com supremacia soberana, irrecorríveis e isentos de indenização) dos *atos de gestão* (praticados em condições de igualdade com os particulares, nos quais o Estado respondia com base na culpa civil subjetiva do seu preposto).\n3. **Teoria da Culpa Administrativa (Falta do Serviço / *Faute du Service*):** Rompe com a culpa individual do funcionário. O dever de indenizar surge da falta do serviço público, demonstrada em três hipóteses: o serviço *não funcionou*, funcionou *mal* ou funcionou com *atraso*. É uma teoria de responsabilidade subjetiva, mas de culpa anônima do aparelho estatal.\n4. **Teoria do Risco Administrativo (Responsabilidade Objetiva):** Adotada como regra pela Constituição Federal de 1988 (art. 37, § 6º). Assenta-se no princípio da equidade e na repartição dos encargos públicos: a coletividade beneficia-se dos serviços públicos; logo, eventuais prejuízos causados a indivíduos pela atuação estatal devem ser reparados pelo erário, independentemente da demonstração de dolo ou culpa do servidor.\n\n**Aplicação e recuperação:** Um serviço funcionou tarde e causou dano demonstrado. A falta do serviço não exige identificar qual funcionário errou para formular a teoria da culpa administrativa. Já o risco administrativo dispensa prova de culpa no regime objetivo, mas conserva os demais pressupostos.",
    "checkpointIds": []
  },
  {
    "id": "sub-11-6-bloco-2",
    "titulo": "O Regime Constitucional do Art. 37, § 6º da CF/88",
    "objetivos": [
      "Identificar as pessoas jurídicas abrangidas pelo art. 37, § 6º."
    ],
    "conteudo": "> *\"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"*\n\n* **Pessoas Jurídicas Vinculadas:** \n  1. Todas as pessoas jurídicas de direito público (União, Estados, DF, Municípios, Autarquias e Fundações Públicas de Direito Público);\n  2. Pessoas jurídicas de direito privado **prestadoras de serviços públicos** (Empresas Públicas e Sociedades de Economia Mista prestadoras de serviços, bem como concessionárias e permissionárias privadas).\n* **Empresas Estatais Exploradoras de Atividade Econômica:** Não se submetem à responsabilidade objetiva do art. 37, § 6º, da CF/88, respondendo sob o regime de direito privado civil comum (art. 173, § 1º, II, CF), sem afastar hipóteses de responsabilidade objetiva estabelecidas por outras normas, como o CDC quando aplicável.\n\n**Aplicação e recuperação:** Uma concessionária causa dano a terceiro não usuário durante a prestação do serviço. O Tema 130 do STF reconhece responsabilidade objetiva perante usuários e não usuários. Ser pessoa privada não afasta por si o art. 37, § 6º; a atividade e a qualidade da atuação importam.",
    "checkpointIds": []
  },
  {
    "id": "sub-11-6-bloco-3",
    "titulo": "Requisitos para a Configuração da Responsabilidade Objetiva",
    "objetivos": [
      "Relacionar dano, conduta e nexo sem exigir culpa do agente no polo externo."
    ],
    "conteudo": "Para que o particular faça jus à indenização pelo Estado, é necessário examinar, no cenário constitucional pertinente, três elementos, sem dispensar a análise de excludentes:\n1. **Conduta Estatal:** Conduta imputável ao Estado no regime pertinente; na atuação comissiva, o agente deve atuar nessa qualidade;\n2. **Dano Efetivo:** Lesão material, patrimonial, estética ou moral direta a direito de terceiro;\n3. **Nexo de Causalidade:** Relação de causa e efeito direta e imediata entre a conduta do agente público e o dano experimentado (Teoria do Dano Direto e Imediato - art. 403 do Código Civil).\n\n**Aplicação e recuperação:** Livro particular é danificado durante transporte oficial por agente nessa qualidade. Identifique o prejuízo e o vínculo causal. Se os mesmos danos já existiam antes do transporte, não podem ser integralmente atribuídos à conduta sem demonstração. Objetividade não dispensa prova de dano e causalidade.",
    "checkpointIds": [
      "cp-11-6-2",
      "rt-11-6-1"
    ]
  },
  {
    "id": "sub-11-6-bloco-4",
    "titulo": "Responsabilidade por Omissão do Estado",
    "objetivos": [
      "Examinar dever específico e possibilidade de impedir o dano."
    ],
    "conteudo": "* **Omissão Genérica (Regra da Responsabilidade Subjetiva):** Ocorre quando o Estado descumpre um dever genérico de proteção da coletividade (ex.: furto de automóvel estacionado em rua pública, assalto na via comum, chuva torrencial que alaga avenida sem falha construtiva). o tratamento doutrinário usual aponta responsabilidade **subjetiva** pela falha do serviço, exigindo verificar o dever concreto, possibilidade de atuação e causalidade; não basta chamar a situação de omissão para decidir todo caso (o particular deve demonstrar que o Estado tinha o dever de agir e foi negligente).\n* **Omissão Específica (Responsabilidade Objetiva por Dever de Custódia):** Ocorre quando o Estado detém o dever jurídico individualizado de evitar o dano sobre pessoas ou coisas postas sob sua custódia ou vigilância direta e imediata:\n  * Exemplo: O Tema 592 do STF examina morte de detento diante da inobservância do dever específico de proteção. É preciso demonstrar as condições da tese e o nexo. Não se conclui responsabilidade automática por toda morte, por todo evento em hospital/escola ou pela simples presença de um bem em prédio público. Cada hipótese demanda seu regime, dever e possibilidade de evitar o dano.\n\n**Aplicação e recuperação:** A narrativa informa apenas que ocorreu lesão dentro de prédio público. Ela ainda não descreve todo dever de proteção nem a possibilidade de prevenção. No caso de custódia do Tema 592, examine se houve inobservância do dever específico. Não transforme “dentro do prédio” em teste jurídico universal.",
    "checkpointIds": []
  },
  {
    "id": "sub-11-6-bloco-5",
    "titulo": "Causas Excludentes e Atenuantes da Responsabilidade",
    "objetivos": [
      "Aplicar excludentes ao nexo, sem automatismo pelo nome do evento."
    ],
    "conteudo": "Como a CF/88 adotou a Teoria do Risco Administrativo (e não a Teoria do Risco Integral), admite-se a exclusão ou a redução da responsabilidade estatal quando houver quebra do nexo causal:\n\n* **Causas Excludentes (Isentam o Estado Integralmente):**\n  1. **Culpa Exclusiva da Vítima:** O particular causa o evento lesivo por sua própria e exclusiva imprudência ou dolo (ex.: cidadão que se joga intencionalmente sob as rodas de viatura oficial em movimento regular).\n  2. **Caso Fortuito ou Força Maior:** Eventos cuja relação com a atuação e o dever estatal efetivamente rompa o nexo no cenário. Um evento natural não exclui responsabilidade se o dano também decorre de falha causalmente relevante do serviço.\n  3. **Fato Exclusivo de Terceiro:** Evento danoso praticado por terceiro sem nenhuma participação ou negligência de agentes públicos.\n* **Causa Atenuante (Reduz a Indenização Proporcionalmente):**\n  * **Culpa Concorrente da Vítima:** A vítima e o agente público concorrem simultaneamente para o desfecho danoso (o valor da reparação fixado judicialmente é partilhado proporcionalmente).\n\n**Aplicação e recuperação:** Chuva intensa danifica acervo após anos de vazamentos documentados e sem providência. Invocar natureza do evento não encerra o exame: a omissão pode ter relevância causal. Em cenário diferente, uma causa exclusiva realmente rompe o nexo. Explique qual fato mudaria a conclusão.",
    "checkpointIds": [
      "cp-11-6-3",
      "rt-11-6-2"
    ]
  },
  {
    "id": "sub-11-6-bloco-6",
    "titulo": "Ação Regressiva e a Tese do Tema 940 do STF (Princípio da Dupla Garantia)",
    "objetivos": [
      "Distinguir ação do terceiro, regresso e outras esferas."
    ],
    "conteudo": "O Supremo Tribunal Federal, ao julgar o **Tema 940 da Repercussão Geral (RE 1.027.633/SP)**, fixou tese vinculante:\n> *\"A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para figurar no polo passivo o agente público, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"*\n\n* **Princípio da Dupla Garantia:** A tese direciona a ação indenizatória do terceiro contra a pessoa jurídica e preserva o regresso nos casos de dolo ou culpa. Não promete pagamento imediato nem elimina responsabilização penal ou disciplinar do agente.\n\n**Aplicação e recuperação:** No regime do Tema 940, a vítima processa a pessoa jurídica; eventual regresso examina dolo ou culpa do agente. Essas duas etapas não autorizam negar à vítima indenização só porque não demonstrou culpa pessoal. Tampouco autorizam cobrar regressivamente sem esse pressuposto.",
    "checkpointIds": [
      "cp-11-6-1",
      "rt-11-6-3"
    ]
  }
],
fontesTeoria: [
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 37, 49, 70–75 e 84, conforme o assunto.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "tema940",
    "titulo": "STF — Tema 940",
    "localizador": "Polo passivo da ação e direito de regresso.",
    "url": "https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=940"
  },
  {
    "id": "tema592",
    "titulo": "STF — Tema 592",
    "localizador": "Dever específico de proteção da pessoa sob custódia.",
    "url": "https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=592"
  }
],
};
