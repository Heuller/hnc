import type { ModuloFilho } from '../../../domain/types';

export const submodulo25: ModuloFilho = {
  id: 'sub-2-5',
  numero: '2.5',
  editalRef: 'Bloco A - Item 1.6 e Bloco D - Item 2.5',
  preRequisitos: ["sub-2-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-4",
          "titulo": "Formato MARC 21 Bibliográfico e Autoridades",
          "motivo": "Catalogação de publicações oficiais governamentais e campos 110/710."
      },
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML",
          "motivo": "Identificação de atos e normas de órgãos da administração pública federal."
      }
  ],
  titulo: 'Órgãos Públicos, Catalogação Governamental e Biblioteca da Câmara dos Deputados',
  titulo_curto: 'Órgãos Públicos & Bib. Câmara',
  antesDeLer: [
  {
    "termo": "Jurisdição",
    "definicao": "No contexto catalográfico, pode designar o nome do governo usado como elemento de entrada; não equivale à função jurisdicional do juiz.",
    "exemploBiblioteca": "Brasil pode ser elemento de entrada de órgão governamental sem que o registro seja sentença judicial."
  },
  {
    "termo": "Registro de autoridade",
    "definicao": "Registro que estabelece e documenta formas de nomes e relacionamentos para controle de pontos de acesso.",
    "exemploBiblioteca": "Um catálogo distingue nomes variantes de uma instituição e informa a fonte da forma adotada."
  }
],
  descricaoCurta:
    "Distinguir composição, função típica e limites das competências constitucionais. Diferenciar auxílio, subordinação e exercício de jurisdição. Aplicar a regra catalográfica ao nome, sem derivá-la apenas da natureza jurídica. Reconhecer a numeração e as condições dos tipos de subordinação governamental. Selecionar os níveis necessários em vez de copiar integralmente o organograma. Diferenciar nome autorizado, função bibliográfica e codificação dos campos. Distinguir antecedentes, criação efetiva, denominação e estrutura administrativa vigente. Relacionar sistemas, acervos e redes sem atribuir funções ou permissões indevidas.",
  tempoEstimadoMinutos: 30,
  autoresChave: [
  "AACR2r — Código de catalogação anglo-americano",
  "Library of Congress — MARC 21 Bibliographic: 110",
  "Library of Congress — MARC 21 Bibliographic: 710",
  "Constituição Federal",
  "Câmara dos Deputados — Histórico da Biblioteca",
  "Câmara dos Deputados — Estrutura administrativa",
  "Senado Federal — Bibliotecas cooperantes da RVBI",
  "Biblioteca Digital da Câmara dos Deputados"
],
  alertasCebraspe: [
  "O controle administrativo e financeiro e o controle dos deveres funcionais não transformam o CNJ em instância recursal jurisdicional. A troca de função é o erro decisivo.",
  "As regras de nome e subordinação devem ser aplicadas ao caso, especialmente 24.17–24.18. Uma categoria do Direito Administrativo não substitui o teste catalográfico.",
  "A regra prevê omissão de intermediários desnecessários e inclusão do nível necessário à identificação quando houver ambiguidade. Há ainda regras especiais, como a de corpos legislativos."
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-2-5-fonte-aacr",
      "nome": "AACR2r — Código de catalogação anglo-americano",
      "ano": "Referência de consulta",
      "obraPrincipal": "AACR2r — Código de catalogação anglo-americano",
      "ideiaChave": "Capítulo 24: regras 24.17, 24.18A, 24.19 e 24.21. Exemplar do acervo teórico do projeto.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-marc110",
      "nome": "Library of Congress — MARC 21 Bibliographic: 110",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — MARC 21 Bibliographic: 110",
      "ideiaChave": "Indicadores e subcampos de nome de entidade coletiva.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-marc710",
      "nome": "Library of Congress — MARC 21 Bibliographic: 710",
      "ano": "Referência de consulta",
      "obraPrincipal": "Library of Congress — MARC 21 Bibliographic: 710",
      "ideiaChave": "Segundo indicador: informação não fornecida ou entrada analítica.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-cf",
      "nome": "Constituição Federal",
      "ano": "Referência de consulta",
      "obraPrincipal": "Constituição Federal",
      "ideiaChave": "Arts. 44–52, 70–75, 92–135.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-hist",
      "nome": "Câmara dos Deputados — Histórico da Biblioteca",
      "ano": "Referência de consulta",
      "obraPrincipal": "Câmara dos Deputados — Histórico da Biblioteca",
      "ideiaChave": "Antecedentes de 1823, criação efetiva em 1866 e Resolução 104/1984.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-organograma",
      "nome": "Câmara dos Deputados — Estrutura administrativa",
      "ano": "Referência de consulta",
      "obraPrincipal": "Câmara dos Deputados — Estrutura administrativa",
      "ideiaChave": "Organograma de abril de 2026: Cedi vinculado à Diretoria-Geral.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-rvbi",
      "nome": "Senado Federal — Bibliotecas cooperantes da RVBI",
      "ano": "Referência de consulta",
      "obraPrincipal": "Senado Federal — Bibliotecas cooperantes da RVBI",
      "ideiaChave": "Relação institucional de bibliotecas; composição pode mudar.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-2-5-fonte-bdcam",
      "nome": "Biblioteca Digital da Câmara dos Deputados",
      "ano": "Referência de consulta",
      "obraPrincipal": "Biblioteca Digital da Câmara dos Deputados",
      "ideiaChave": "Coleções, documentos, metadados e condições de acesso em cada registro.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-2-5-6",
      "afirmacao": "No MARC 21 Bibliográfico, o segundo indicador do campo 710 pode assumir o valor 2 para entrada analítica.",
      "gabarito": "C",
      "porQue": "No 710, o segundo indicador distingue informação não fornecida (#) e entrada analítica (2). No 110 bibliográfico, ele é indefinido."
    },
    {
      "id": "memoria-rt-2-5-7",
      "afirmacao": "A história oficial distingue antecedentes em 1823 da criação efetiva da Biblioteca da Câmara em 1866.",
      "gabarito": "C",
      "porQue": "A página histórica registra os primeiros pedidos de livros na Constituinte e a criação efetiva em momento posterior. Não se deve confundir a instalação do Parlamento em 1826 com a criação da biblioteca."
    },
    {
      "id": "memoria-rt-2-5-8",
      "afirmacao": "A disponibilização de um livro na BDCam autoriza, por si só, qualquer reutilização comercial de seu conteúdo.",
      "gabarito": "E",
      "porQue": "Acesso ao arquivo e licença de reutilização são condições distintas. Deve-se consultar os direitos, a licença, o domínio público e as limitações legais aplicáveis ao objeto."
    }
  ]
},
  teoriaDidaticaMarkdown: "## Revisão essencial\n\n1. TCU auxilia o Legislativo, sem integrar o Judiciário; CNJ não é instância recursal de mérito.\n2. AACR2r: teste as condições de 24.18A, os níveis de 24.19 e as regras especiais de 24.21.\n3. MARC 110 e 710 têm funções e segundos indicadores diferentes.\n4. Biblioteca: antecedentes em 1823, criação efetiva em 1866, denominação pela Resolução 104/1984.\n5. Cedi vinculado à Diretoria-Geral no organograma de abril de 2026; RVBI coordenada pelo Senado.\n\nSem consultar, explique por que um organograma não deve ser copiado automaticamente para um cabeçalho e por que acesso digital não equivale a licença irrestrita.",
  checkpoints: [
  {
    "id": "cp-2-5-1",
    "pergunta": "Sobre a natureza institucional dos órgãos públicos e sua competência constitucional, julgue o item a seguir:",
    "item": "O Tribunal de Contas da União (TCU) integra formalmente a estrutura do Poder Judiciário brasileiro, competindo-lhe proferir decisões transitadas em julgado com eficácia de coisa julgada material sobre as contas de gestores públicos federais.",
    "gabarito": "E",
    "justificativa": "ERRADO. O TCU NÃO integra o Poder Judiciário (o rol de órgãos do Judiciário é taxativo no art. 92 da CF/88 e não inclui os Tribunais de Contas). O TCU é órgão constitucional autônomo que auxilia o Poder Legislativo no controle externo. Suas decisões condenatórias têm eficácia de título executivo extrajudicial (art. 71, § 3º, da CF/88) e podem ter sua legalidade revista pelo Poder Judiciário.",
    "fonte": "AACR2r, regras 24.17–24.21; Library of Congress, MARC 21, 110 e 710; CF/88, arts. 44–52, 71, 92–135; Câmara dos Deputados, Histórico e organograma de abril de 2026.",
    "versao_correta": "O TCU auxilia o Congresso no controle externo e não integra o Judiciário; suas decisões de débito ou multa têm eficácia de título executivo."
  },
  {
    "id": "cp-2-5-2",
    "pergunta": "Acerca das regras de escolha e determinação de cabeçalhos para entidades coletivas no código AACR2r e no formato MARC 21, julgue o item a seguir:",
    "item": "De acordo com o AACR2r e o formato MARC 21, as universidades públicas federais devem ser catalogadas com entrada principal subordinada à jurisdição territorial correspondente, utilizando-se o campo 110 com primeiro indicador 1 (ex.: 110 1# $a Brasil. $b Universidade Federal de Minas Gerais.).",
    "gabarito": "E",
    "justificativa": "Errado. Ser universidade pública não determina automaticamente subordinação à jurisdição. É necessário aplicar as regras 24.17–24.18 ao nome, consultar a autoridade adotada e distinguir a regra de conteúdo do indicador MARC. O exemplo generaliza uma obrigação inexistente.",
    "fonte": "AACR2r, regras 24.17–24.21; Library of Congress, MARC 21, 110 e 710; CF/88, arts. 44–52, 71, 92–135; Câmara dos Deputados, Histórico e organograma de abril de 2026.",
    "versao_correta": "A entrada de uma universidade depende das regras aplicáveis ao nome; a natureza pública não impõe, por si, subordinação à jurisdição."
  },
  {
    "id": "cp-2-5-3",
    "pergunta": "Em relação à Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo) e aos sistemas de informação do Congresso Nacional, julgue o item a seguir:",
    "item": "A Biblioteca da Câmara dos Deputados, cuja criação efetiva é situada em 1866 pela história institucional, denomina-se Biblioteca Pedro Aleixo por força da Resolução nº 104/1984 e integra o Centro de Documentação e Informação.",
    "gabarito": "C",
    "justificativa": "Certo. A história oficial distingue antecedentes em 1823, criação efetiva em 1866 e denominação em 1984. O vínculo ao Cedi deve ser separado da data histórica de criação. A redação anterior associava indevidamente a biblioteca à instalação do Parlamento em 1826.",
    "fonte": "AACR2r, regras 24.17–24.21; Library of Congress, MARC 21, 110 e 710; CF/88, arts. 44–52, 71, 92–135; Câmara dos Deputados, Histórico e organograma de abril de 2026."
  },
  {
    "id": "rt-2-5-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O CNJ pode reformar o mérito de uma sentença judicial ao exercer o controle administrativo do Judiciário.",
    "gabarito": "E",
    "justificativa": "O controle administrativo e financeiro e o controle dos deveres funcionais não transformam o CNJ em instância recursal jurisdicional. A troca de função é o erro decisivo.",
    "fonte": "CF/88, arts. 92 e 103-B.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar",
    "versao_correta": "O CNJ exerce controle administrativo e financeiro, sem reformar o mérito de decisões jurisdicionais."
  },
  {
    "id": "rt-2-5-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A Advocacia-Geral da União, embora exerça função essencial à Justiça, integra o Poder Executivo federal.",
    "gabarito": "C",
    "justificativa": "A classificação constitucional como função essencial à Justiça não implica estar fora de todos os Poderes. A AGU representa a União e presta consultoria e assessoramento jurídico ao Executivo.",
    "fonte": "CF/88, art. 131.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-5-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A personalidade jurídica de uma autarquia basta, isoladamente, para determinar sua entrada direta no AACR2r.",
    "gabarito": "E",
    "justificativa": "As regras de nome e subordinação devem ser aplicadas ao caso, especialmente 24.17–24.18. Uma categoria do Direito Administrativo não substitui o teste catalográfico.",
    "fonte": "AACR2r, regras 24.17–24.18.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar",
    "versao_correta": "A entrada depende das regras catalográficas aplicáveis ao nome e à entidade, e não apenas de sua personalidade jurídica."
  },
  {
    "id": "rt-2-5-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No AACR2r 24.18A, os corpos legislativos correspondem ao tipo 6, e as delegações a organizações internacionais, ao tipo 11.",
    "gabarito": "C",
    "justificativa": "São os tipos previstos no código. A omissão do verdadeiro tipo 4 deslocaria indevidamente toda a numeração subsequente.",
    "fonte": "AACR2r, regra 24.18A, tipos 4–11.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-5-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Para aplicar a regra 24.19 do AACR2r, basta reproduzir todos os níveis do organograma administrativo no cabeçalho.",
    "gabarito": "E",
    "justificativa": "A regra prevê omissão de intermediários desnecessários e inclusão do nível necessário à identificação quando houver ambiguidade. Há ainda regras especiais, como a de corpos legislativos.",
    "fonte": "AACR2r, regras 24.19 e 24.21.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar",
    "versao_correta": "O cabeçalho seleciona os níveis exigidos pelas regras e pela identificação; não copia automaticamente o organograma."
  },
  {
    "id": "rt-2-5-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No MARC 21 Bibliográfico, o segundo indicador do campo 710 pode assumir o valor 2 para entrada analítica.",
    "gabarito": "C",
    "justificativa": "No 710, o segundo indicador distingue informação não fornecida (#) e entrada analítica (2). No 110 bibliográfico, ele é indefinido.",
    "fonte": "Library of Congress, MARC 21 Bibliographic, 110 e 710.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-5-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A história oficial distingue antecedentes em 1823 da criação efetiva da Biblioteca da Câmara em 1866.",
    "gabarito": "C",
    "justificativa": "A página histórica registra os primeiros pedidos de livros na Constituinte e a criação efetiva em momento posterior. Não se deve confundir a instalação do Parlamento em 1826 com a criação da biblioteca.",
    "fonte": "Câmara dos Deputados, Histórico da Biblioteca.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-2-5-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A disponibilização de um livro na BDCam autoriza, por si só, qualquer reutilização comercial de seu conteúdo.",
    "gabarito": "E",
    "justificativa": "Acesso ao arquivo e licença de reutilização são condições distintas. Deve-se consultar os direitos, a licença, o domínio público e as limitações legais aplicáveis ao objeto.",
    "fonte": "BDCam, registros e informações de direitos; Lei 9.610/1998.",
    "editalRef": "Bloco A - Item 1.6 e Bloco D - Item 2.5",
    "habilidade": "aplicar",
    "versao_correta": "A reutilização depende dos direitos e da licença aplicáveis a cada objeto."
  }
],
  teoriaDensaMarkdown: "### Poderes, representação e jurisdição\n\n### O Poder Legislativo\nNo plano federal, o Poder Legislativo adota o modelo **bicameral** (CF/88, art. 44), exercido pelo **Congresso Nacional**, que se compõe de duas casas:\n1. **Câmara dos Deputados**: Representa o **povo brasileiro**. Na legislatura em curso em 2026, possui **513 deputados federais**, eleitos pelo sistema eleitoral proporcional em cada Estado, no Distrito Federal e nos Territórios, com mandato de 4 anos. Possui competências privativas fundamentais (CF/88, art. 51), como autorizar a instauração de processo de impeachment contra o Presidente da República e elaborar seu regimento interno.\n2. **Senado Federal**: Representa os **Estados federados e o Distrito Federal**. Compõe-se de **81 senadores** (3 senadores por unidade federativa, eleitos pelo sistema majoritário), com mandato de 8 anos e renovação alternada de 1/3 e 2/3 a cada 4 anos. Possui competências privativas (CF/88, art. 52), como julgar o Presidente nos crimes de responsabilidade e aprovar a escolha de ministros do STF, tribunais superiores e chefes de missão diplomática.\n\nNo plano estadual e distrital, o Poder Legislativo é **unicameral**:\n- **Assembleias Legislativas dos Estados (ALs)**: compostas por deputados estaduais.\n- **Câmara Legislativa do Distrito Federal (CLDF)**: composta por deputados distritais (acumula competências estaduais e municipais).\n- **Câmaras Municipais**: compostas por vereadores (plano municipal).\n\n### 1.2 O Poder Judiciário (CF/88, arts. 92 a 126)\nO rol de órgãos do Poder Judiciário é expressamente taxativo (art. 92):\n1. **STF (Supremo Tribunal Federal)**: Órgão de cúpula máxima do Poder Judiciário, responsável pela guarda precípua da Constituição (art. 102). Composto por 11 ministros cidadãos brasileiros natos, nomeados pelo Presidente após sabatina do Senado. Julga ações diretas de inconstitucionalidade (ADI), ações declaratórias de constitucionalidade (ADC), arguições de descumprimento de preceito fundamental (ADPF) e recursos extraordinários (RE).\n2. **STJ (Superior Tribunal de Justiça)**: Órgão de cúpula da jurisdição federal e estadual comum infraconstitucional (art. 104 e 105). Guardião da legislação federal ordinária e uniformizador da jurisprudência federal. Composto por no mínimo 33 ministros. Julga em última instância o Recurso Especial (REsp).\n3. **TRFs (Tribunais Regionais Federais) e Juízes Federais**: Integram a Justiça Federal comum. Atualmente divididos em 6 regiões (TRF1 a TRF6). Julgam causas em que a União, suas autarquias e empresas públicas federais forem autoras, rés, assistentes ou oponentes (art. 109).\n4. **TJs (Tribunais de Justiça dos Estados) e Juízes de Direito**: Exercem a jurisdição estadual residual (tudo o que não for privativo da Justiça Federal ou das Justiças Especializadas). O **TJDFT** (Tribunal de Justiça do DF e dos Territórios) é mantido e organizado pela União (art. 21, XIII), mas exerce competência de tribunal local/estadual.\n5. **Justiças Especializadas**:\n   - **Justiça do Trabalho**: TST (Tribunal Superior do Trabalho), TRTs (Tribunais Regionais do Trabalho) e Varas do Trabalho.\n   - **Justiça Eleitoral**: TSE (Tribunal Superior Eleitoral), TREs (Tribunais Regionais Eleitorais), Juízes e Juntas Eleitorais.\n   - **Justiça Militar**: STM (Superior Tribunal Militar) e Auditorias Militares.\n6. **CNJ (Conselho Nacional de Justiça)**: Criado pela Emenda Constitucional nº 45/2004 (art. 103-B). É órgão de cúpula administrativa e financeira do Judiciário. **ATENÇÃO PARA O CEBRASPE**: O CNJ *não exerce função jurisdicional contenciosa*; ele não julga litígios judiciais nem pode rever o mérito de sentenças ou acórdãos judiciais.\n\n\n\n**Aplicação:** um relatório do CNJ é documento de órgão do Judiciário, mas isso não o transforma em sentença. Classifique o produtor e a função do documento separadamente.\n\n### Controle externo e funções essenciais à Justiça\n\n### Tribunais de Contas (CF/88, arts. 70 a 75)\n- **TCU (Tribunal de Contas da União)**: Órgão colegiado que auxilia o Congresso Nacional no exercício do controle externo contábil, financeiro, orçamentário, operacional e patrimonial da União e das entidades da administração direta e indireta.\n  - **NÃO integra o Poder Judiciário** nem profere sentenças judiciais transitadas em julgado.\n  - **NÃO é subordinado ao Poder Legislativo**: possui autonomia institucional, funcional, orçamentária e administrativa garantida pela CF/88.\n  - Suas decisões que resultem em imputação de débito ou multa têm eficácia de **título executivo extrajudicial** (art. 71, § 3º).\n- **TCEs (Tribunais de Contas dos Estados)**: Auxiliam as Assembleias Legislativas no controle externo estadual e municipal.\n- **TCDF (Tribunal de Contas do Distrito Federal)**: Auxilia a CLDF no controle distrital.\n- **TCMs (Tribunais de Contas dos Municípios)**: Existem tribunais de contas para municípios no plano estadual (TCM-PA, TCM-GO, TCM-BA) e órgãos municipais exclusivos apenas em **São Paulo** e no **Rio de Janeiro** (mantidos por terem sido criados antes da CF/88, já que o art. 31, § 4º da Carta veda a criação de novos tribunais de contas municipais).\n\n### 1.4 As Funções Essenciais à Justiça (CF/88, arts. 127 a 135)\nInstituições e atividades essenciais à Justiça, que **não se confundem com órgãos do Judiciário**. Não se pode afirmar que todas estejam fora dos três Poderes: a AGU integra o Executivo federal:\n1. **Ministério Público (MP)**: Instituição permanente, essencial à função jurisdicional, defensora da ordem jurídica, do regime democrático e dos interesses sociais e indisponíveis (art. 127). Possui autonomia funcional e orçamentária.\n   - **MPU (Ministério Público da União)**: compreende o MPF (Ministério Público Federal, chefiado pelo PGR), o MPT (Trabalho), o MPM (Militar) e o MPDFT (DF e Territórios).\n   - **MPEs (Ministérios Públicos dos Estados)**: MPSP, MPRJ, MPMG, etc., chefiados pelos respectivos Procuradores-Gerais de Justiça (PGJ).\n2. **Defensoria Pública**: Presta orientação jurídica e promove a defesa integral e gratuita dos necessitados (art. 134). Composta pela DPU (União) e pelas DPEs (Estados e DF).\n3. **Advocacia Pública**: Defende os interesses patrimoniais e a juridicidade dos entes federados: Advocacia-Geral da União (AGU), Procuradorias-Gerais dos Estados (PGEs) e Municípios (PGMs).\n\n---\n\n\n\n**Aplicação:** multa do TCU com eficácia de título executivo não equivale a sentença judicial. Verifique o órgão, a competência e o efeito jurídico antes de construir o ponto de acesso.\n\n### Entrada direta e entrada subordinada\n\nO AACR2r trata entidades governamentais em 24.17 e seguintes. A entrada direta pelo nome é a regra de partida, sujeita aos tipos de subordinação de 24.18 e às disposições específicas. Não é suficiente separar entidades entre “soberanas” e “não soberanas”, nem entre órgãos e autarquias.\n\n**Roteiro de decisão:** identifique a entidade real e seu nome; consulte a fonte de autoridade; verifique se o nome e a natureza se enquadram nos tipos da regra; aplique as regras de hierarquia; registre as variantes e as fontes consultadas. A identidade da entidade deve persistir mesmo quando o seu nome muda.\n\nUma universidade pública de nome distintivo pode ter entrada direta. A justificativa é catalográfica, e não simplesmente possuir personalidade jurídica. Uma repartição administrativa com nome genérico pode exigir subordinação. Nomes escolhidos para exemplificação não constituem prova de que um catálogo específico adote aquela forma.\n\nNo **Original RDA**, referências ao capítulo 11 pertencem àquela organização do texto. O RDA atual reorganizou seus elementos; indique a versão e o perfil de aplicação. Não transporte automaticamente os onze tipos numerados do AACR2r para qualquer versão do RDA.\n\n**Contraste resolvido:** “Toda entidade pública entra por Brasil” falha por universalização. “Toda autarquia entra diretamente” também. Ambas substituem as condições da regra por uma característica administrativa insuficiente.\n\n### Os onze tipos de 24.18A\n\nA enumeração a seguir é uma síntese didática da regra, não uma transcrição do código. As condições fazem parte da decisão:\n\n| Tipo | Situação abrangida |\n|---|---|\n| 1 | Nome com termo que exprime ser parte de outra entidade, como departamento, divisão ou seção. |\n| 2 | Nome com termo normalmente indicativo de subordinação administrativa, como comissão, quando a identificação necessita do nome do governo. |\n| 3 | Nome geral ou composto apenas de designações geográficas, cronológicas, numéricas ou alfabéticas. |\n| 4 | Nome que não transmite a ideia de entidade coletiva e não contém o nome do governo. |\n| 5 | Ministério ou órgão executivo semelhante que, pelas publicações oficiais, não tenha outra repartição acima de si. |\n| 6 | Corpos legislativos. |\n| 7 | Tribunais. |\n| 8 | Principais ramos das forças armadas. |\n| 9 | Chefes de Estado ou de governo. |\n| 10 | Embaixadas e consulados. |\n| 11 | Delegações junto a organizações internacionais ou intergovernamentais. |\n\n**Como raciocinar:** o tipo 2 exige verificar a necessidade de identificação; não basta localizar a palavra “comissão”. No tipo 4, teste se o nome comunica a existência de uma entidade e se contém o governo. Os tipos 6 a 11 dependem da natureza funcional expressamente tratada.\n\n**Erro a evitar:** inserir “órgão legislativo subordinado” como tipo 11 apagaria o verdadeiro tipo das delegações. A hierarquia entre casas legislativas é tratada nas regras próprias, incluindo 24.21.\n\n### Hierarquia e desambiguação\n\nA regra 24.19 prevê, em princípio, a entrada da unidade subordinada diretamente sob o governo. Se seu nome for usado, ou puder ser usado, por outra repartição do mesmo governo, acrescente o nível intermediário mais baixo necessário para distingui-la. O código também prevê remissiva quando a unidade imediatamente superior é omitida.\n\nA regra **24.21** trata especificamente de corpos legislativos: em uma legislatura bicameral, a casa é registrada subordinadamente à legislatura. Assim, a representação didática `Brasil. Congresso Nacional. Câmara dos Deputados.` não se explica apenas pela necessidade de copiar a estrutura administrativa, mas por regra específica. A forma exata de um registro de autoridade deve ser conferida no catálogo adotado.\n\n**Caso resolvido:** duas repartições possuem uma “Divisão de Biblioteca”. A jurisdição mais esse nome pode ser ambígua; um nível intermediário identificador pode ser necessário. Isso não obriga a carregar todos os níveis entre a divisão e a autoridade máxima.\n\nMudanças administrativas exigem controle de autoridades e de relacionamentos, sem presumir que toda alteração de chefia tenha criado uma nova entidade. Antes de alterar o cabeçalho, determine se houve mudança de nome, fusão, sucessão ou apenas modificação de vinculação.\n\n### MARC: conteúdo, função e indicadores\n\nO MARC 21 registra os dados escolhidos pelas regras de conteúdo. No formato bibliográfico, **110** identifica entrada principal de entidade coletiva e **710**, ponto de acesso adicional. A escolha depende da responsabilidade e das regras aplicáveis à obra; não basta que o documento tenha origem governamental. No formato de autoridades, 110 tem a função de cabeçalho estabelecido, e não de entrada principal de uma obra.\n\nO primeiro indicador distingue nome invertido (0), nome sob jurisdição (1) e nome em ordem direta (2). Um nome corporativo que contém qualificador geográfico não se torna, por isso, nome de jurisdição. No **110 bibliográfico**, o segundo indicador é indefinido (#). No **710 bibliográfico**, # significa informação não fornecida e 2 designa entrada analítica.\n\n| Subcampo | Uso no contexto do campo |\n|---|---|\n| `$a` | Nome da entidade ou jurisdição como elemento de entrada. |\n| `$b` | Unidade subordinada, repetível. |\n| `$c` | Local de reunião, quando aplicável; não é um campo genérico de endereço da sede. |\n| `$d` | Data de reunião ou contexto de tratado, conforme as definições do formato. |\n| `$e` | Termo de relação. |\n\nExemplos **hipotéticos**, destinados à leitura dos indicadores:\n\n```text\n110 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados.\n710 2# $a Universidade de Brasília.\n```\n\nO primeiro exemplo só será entrada principal se a responsabilidade pela obra justificar 110. O segundo representa um ponto de acesso adicional, e não prova que toda universidade deva ocupar o mesmo campo em qualquer registro. Confira pontuação, forma autorizada e política local antes de reutilizar um exemplo.\n\n### Biblioteca Pedro Aleixo: história e estrutura\n\nA história institucional da Câmara registra pedidos de livros na Assembleia Constituinte de **1823**, como antecedentes da biblioteca, e sua criação efetiva em **1866**. A denominação **Biblioteca Pedro Aleixo** decorre da **Resolução da Câmara nº 104/1984**. A instalação do Parlamento em 1826 não comprova que a biblioteca tenha sido criada naquele ano; não cabe afirmar um bicentenário bibliotecário em 2026 a partir dessa associação.\n\nA Biblioteca integra o **Centro de Documentação e Informação (Cedi)**. No organograma de abril de 2026 publicado pela Câmara, o Cedi está vinculado à **Diretoria-Geral**. A criação do Cedi em 1971 e sua vinculação histórica não dispensam consultar o organograma aplicável à data da questão. Evite misturar estrutura de épocas diferentes.\n\nNo apoio parlamentar, o serviço informacional fornece pesquisa bibliográfica, acesso a fontes, organização e preservação de acervos e produtos para subsidiar a atividade legislativa e a administração. Bibliotecário não substitui a competência de consultoria legislativa, do relator ou do órgão jurídico.\n\n**Caso resolvido:** uma nota histórica menciona a Diretoria Legislativa em 1971; uma questão pergunta a estrutura de 2026. A resposta deve apoiar-se na estrutura de 2026, sem reescrever o fato histórico como se estivesse incorreto na sua época. Data da fonte e data do fato precisam permanecer separadas.\n\n### BDCam, cooperação e memória parlamentar\n\nA **BDCam**, Biblioteca Digital da Câmara dos Deputados, disponibiliza coleções institucionais em ambiente DSpace. Consultar registros, arquivos, fontes de direitos e coleções ajuda a distinguir publicação institucional, estudo técnico e obra histórica digitalizada. O catálogo e o repositório cumprem funções relacionadas, mas um registro catalográfico não garante texto integral disponível.\n\nA **RVBI** é uma rede cooperativa coordenada pelo **Senado Federal**; a Câmara participa como biblioteca cooperante. Reúne instituições de diferentes Poderes e do Distrito Federal. A participação não deve ser deduzida apenas da relevância jurídica de um órgão. Por exemplo, a relação institucional consultada inclui STF, STJ, STM, TST e TJDFT, mas isso não autoriza acrescentar automaticamente o TCU. A lista oficial é a referência para conferir integrantes e alterações.\n\nA catalogação cooperativa e o controle de autoridades reduzem retrabalho, mas exigem aplicação das políticas de descrição e representação temática da rede. Copiar um registro sem verificar edição, manifestação, identificadores e consistência local pode disseminar erros.\n\nSistemas de tramitação legislativa respondem a perguntas sobre andamento, versões, pareceres e decisões. Repositórios oferecem objetos e metadados; catálogos localizam recursos; redes compartilham processamento e recuperação. Nenhum deles garante sozinho a rastreabilidade integral de toda a produção da Casa.\n\n**Exemplo de pesquisa integrada:** para estudar uma lei, identifique a norma e a versão temporal; consulte a tramitação e os pareceres; localize estudos técnicos e bibliografia; registre os limites da busca e os direitos dos arquivos reutilizados. A preservação de obras raras requer critérios de seleção, conservação e acesso; digitalizar não torna dispensável conservar o original.",

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-2-5-bloco-1",
    "titulo": "Poderes, representação e jurisdição",
    "objetivos": [
      "Distinguir composição, função típica e limites das competências constitucionais."
    ],
    "conteudo": "### O Poder Legislativo\nNo plano federal, o Poder Legislativo adota o modelo **bicameral** (CF/88, art. 44), exercido pelo **Congresso Nacional**, que se compõe de duas casas:\n1. **Câmara dos Deputados**: Representa o **povo brasileiro**. Na legislatura em curso em 2026, possui **513 deputados federais**, eleitos pelo sistema eleitoral proporcional em cada Estado, no Distrito Federal e nos Territórios, com mandato de 4 anos. Possui competências privativas fundamentais (CF/88, art. 51), como autorizar a instauração de processo de impeachment contra o Presidente da República e elaborar seu regimento interno.\n2. **Senado Federal**: Representa os **Estados federados e o Distrito Federal**. Compõe-se de **81 senadores** (3 senadores por unidade federativa, eleitos pelo sistema majoritário), com mandato de 8 anos e renovação alternada de 1/3 e 2/3 a cada 4 anos. Possui competências privativas (CF/88, art. 52), como julgar o Presidente nos crimes de responsabilidade e aprovar a escolha de ministros do STF, tribunais superiores e chefes de missão diplomática.\n\nNo plano estadual e distrital, o Poder Legislativo é **unicameral**:\n- **Assembleias Legislativas dos Estados (ALs)**: compostas por deputados estaduais.\n- **Câmara Legislativa do Distrito Federal (CLDF)**: composta por deputados distritais (acumula competências estaduais e municipais).\n- **Câmaras Municipais**: compostas por vereadores (plano municipal).\n\n### 1.2 O Poder Judiciário (CF/88, arts. 92 a 126)\nO rol de órgãos do Poder Judiciário é expressamente taxativo (art. 92):\n1. **STF (Supremo Tribunal Federal)**: Órgão de cúpula máxima do Poder Judiciário, responsável pela guarda precípua da Constituição (art. 102). Composto por 11 ministros cidadãos brasileiros natos, nomeados pelo Presidente após sabatina do Senado. Julga ações diretas de inconstitucionalidade (ADI), ações declaratórias de constitucionalidade (ADC), arguições de descumprimento de preceito fundamental (ADPF) e recursos extraordinários (RE).\n2. **STJ (Superior Tribunal de Justiça)**: Órgão de cúpula da jurisdição federal e estadual comum infraconstitucional (art. 104 e 105). Guardião da legislação federal ordinária e uniformizador da jurisprudência federal. Composto por no mínimo 33 ministros. Julga em última instância o Recurso Especial (REsp).\n3. **TRFs (Tribunais Regionais Federais) e Juízes Federais**: Integram a Justiça Federal comum. Atualmente divididos em 6 regiões (TRF1 a TRF6). Julgam causas em que a União, suas autarquias e empresas públicas federais forem autoras, rés, assistentes ou oponentes (art. 109).\n4. **TJs (Tribunais de Justiça dos Estados) e Juízes de Direito**: Exercem a jurisdição estadual residual (tudo o que não for privativo da Justiça Federal ou das Justiças Especializadas). O **TJDFT** (Tribunal de Justiça do DF e dos Territórios) é mantido e organizado pela União (art. 21, XIII), mas exerce competência de tribunal local/estadual.\n5. **Justiças Especializadas**:\n   - **Justiça do Trabalho**: TST (Tribunal Superior do Trabalho), TRTs (Tribunais Regionais do Trabalho) e Varas do Trabalho.\n   - **Justiça Eleitoral**: TSE (Tribunal Superior Eleitoral), TREs (Tribunais Regionais Eleitorais), Juízes e Juntas Eleitorais.\n   - **Justiça Militar**: STM (Superior Tribunal Militar) e Auditorias Militares.\n6. **CNJ (Conselho Nacional de Justiça)**: Criado pela Emenda Constitucional nº 45/2004 (art. 103-B). É órgão de cúpula administrativa e financeira do Judiciário. **ATENÇÃO PARA O CEBRASPE**: O CNJ *não exerce função jurisdicional contenciosa*; ele não julga litígios judiciais nem pode rever o mérito de sentenças ou acórdãos judiciais.\n\n\n\n**Aplicação:** um relatório do CNJ é documento de órgão do Judiciário, mas isso não o transforma em sentença. Classifique o produtor e a função do documento separadamente.",
    "checkpointIds": [
      "rt-2-5-1"
    ]
  },
  {
    "id": "sub-2-5-bloco-2",
    "titulo": "Controle externo e funções essenciais à Justiça",
    "objetivos": [
      "Diferenciar auxílio, subordinação e exercício de jurisdição."
    ],
    "conteudo": "### Tribunais de Contas (CF/88, arts. 70 a 75)\n- **TCU (Tribunal de Contas da União)**: Órgão colegiado que auxilia o Congresso Nacional no exercício do controle externo contábil, financeiro, orçamentário, operacional e patrimonial da União e das entidades da administração direta e indireta.\n  - **NÃO integra o Poder Judiciário** nem profere sentenças judiciais transitadas em julgado.\n  - **NÃO é subordinado ao Poder Legislativo**: possui autonomia institucional, funcional, orçamentária e administrativa garantida pela CF/88.\n  - Suas decisões que resultem em imputação de débito ou multa têm eficácia de **título executivo extrajudicial** (art. 71, § 3º).\n- **TCEs (Tribunais de Contas dos Estados)**: Auxiliam as Assembleias Legislativas no controle externo estadual e municipal.\n- **TCDF (Tribunal de Contas do Distrito Federal)**: Auxilia a CLDF no controle distrital.\n- **TCMs (Tribunais de Contas dos Municípios)**: Existem tribunais de contas para municípios no plano estadual (TCM-PA, TCM-GO, TCM-BA) e órgãos municipais exclusivos apenas em **São Paulo** e no **Rio de Janeiro** (mantidos por terem sido criados antes da CF/88, já que o art. 31, § 4º da Carta veda a criação de novos tribunais de contas municipais).\n\n### 1.4 As Funções Essenciais à Justiça (CF/88, arts. 127 a 135)\nInstituições e atividades essenciais à Justiça, que **não se confundem com órgãos do Judiciário**. Não se pode afirmar que todas estejam fora dos três Poderes: a AGU integra o Executivo federal:\n1. **Ministério Público (MP)**: Instituição permanente, essencial à função jurisdicional, defensora da ordem jurídica, do regime democrático e dos interesses sociais e indisponíveis (art. 127). Possui autonomia funcional e orçamentária.\n   - **MPU (Ministério Público da União)**: compreende o MPF (Ministério Público Federal, chefiado pelo PGR), o MPT (Trabalho), o MPM (Militar) e o MPDFT (DF e Territórios).\n   - **MPEs (Ministérios Públicos dos Estados)**: MPSP, MPRJ, MPMG, etc., chefiados pelos respectivos Procuradores-Gerais de Justiça (PGJ).\n2. **Defensoria Pública**: Presta orientação jurídica e promove a defesa integral e gratuita dos necessitados (art. 134). Composta pela DPU (União) e pelas DPEs (Estados e DF).\n3. **Advocacia Pública**: Defende os interesses patrimoniais e a juridicidade dos entes federados: Advocacia-Geral da União (AGU), Procuradorias-Gerais dos Estados (PGEs) e Municípios (PGMs).\n\n---\n\n\n\n**Aplicação:** multa do TCU com eficácia de título executivo não equivale a sentença judicial. Verifique o órgão, a competência e o efeito jurídico antes de construir o ponto de acesso.",
    "checkpointIds": [
      "cp-2-5-1",
      "rt-2-5-2"
    ]
  },
  {
    "id": "sub-2-5-bloco-3",
    "titulo": "Entrada direta e entrada subordinada",
    "objetivos": [
      "Aplicar a regra catalográfica ao nome, sem derivá-la apenas da natureza jurídica."
    ],
    "conteudo": "O AACR2r trata entidades governamentais em 24.17 e seguintes. A entrada direta pelo nome é a regra de partida, sujeita aos tipos de subordinação de 24.18 e às disposições específicas. Não é suficiente separar entidades entre “soberanas” e “não soberanas”, nem entre órgãos e autarquias.\n\n**Roteiro de decisão:** identifique a entidade real e seu nome; consulte a fonte de autoridade; verifique se o nome e a natureza se enquadram nos tipos da regra; aplique as regras de hierarquia; registre as variantes e as fontes consultadas. A identidade da entidade deve persistir mesmo quando o seu nome muda.\n\nUma universidade pública de nome distintivo pode ter entrada direta. A justificativa é catalográfica, e não simplesmente possuir personalidade jurídica. Uma repartição administrativa com nome genérico pode exigir subordinação. Nomes escolhidos para exemplificação não constituem prova de que um catálogo específico adote aquela forma.\n\nNo **Original RDA**, referências ao capítulo 11 pertencem àquela organização do texto. O RDA atual reorganizou seus elementos; indique a versão e o perfil de aplicação. Não transporte automaticamente os onze tipos numerados do AACR2r para qualquer versão do RDA.\n\n**Contraste resolvido:** “Toda entidade pública entra por Brasil” falha por universalização. “Toda autarquia entra diretamente” também. Ambas substituem as condições da regra por uma característica administrativa insuficiente.",
    "checkpointIds": [
      "cp-2-5-2",
      "rt-2-5-3"
    ]
  },
  {
    "id": "sub-2-5-bloco-4",
    "titulo": "Os onze tipos de 24.18A",
    "objetivos": [
      "Reconhecer a numeração e as condições dos tipos de subordinação governamental."
    ],
    "conteudo": "A enumeração a seguir é uma síntese didática da regra, não uma transcrição do código. As condições fazem parte da decisão:\n\n| Tipo | Situação abrangida |\n|---|---|\n| 1 | Nome com termo que exprime ser parte de outra entidade, como departamento, divisão ou seção. |\n| 2 | Nome com termo normalmente indicativo de subordinação administrativa, como comissão, quando a identificação necessita do nome do governo. |\n| 3 | Nome geral ou composto apenas de designações geográficas, cronológicas, numéricas ou alfabéticas. |\n| 4 | Nome que não transmite a ideia de entidade coletiva e não contém o nome do governo. |\n| 5 | Ministério ou órgão executivo semelhante que, pelas publicações oficiais, não tenha outra repartição acima de si. |\n| 6 | Corpos legislativos. |\n| 7 | Tribunais. |\n| 8 | Principais ramos das forças armadas. |\n| 9 | Chefes de Estado ou de governo. |\n| 10 | Embaixadas e consulados. |\n| 11 | Delegações junto a organizações internacionais ou intergovernamentais. |\n\n**Como raciocinar:** o tipo 2 exige verificar a necessidade de identificação; não basta localizar a palavra “comissão”. No tipo 4, teste se o nome comunica a existência de uma entidade e se contém o governo. Os tipos 6 a 11 dependem da natureza funcional expressamente tratada.\n\n**Erro a evitar:** inserir “órgão legislativo subordinado” como tipo 11 apagaria o verdadeiro tipo das delegações. A hierarquia entre casas legislativas é tratada nas regras próprias, incluindo 24.21.",
    "checkpointIds": [
      "rt-2-5-4"
    ]
  },
  {
    "id": "sub-2-5-bloco-5",
    "titulo": "Hierarquia e desambiguação",
    "objetivos": [
      "Selecionar os níveis necessários em vez de copiar integralmente o organograma."
    ],
    "conteudo": "A regra 24.19 prevê, em princípio, a entrada da unidade subordinada diretamente sob o governo. Se seu nome for usado, ou puder ser usado, por outra repartição do mesmo governo, acrescente o nível intermediário mais baixo necessário para distingui-la. O código também prevê remissiva quando a unidade imediatamente superior é omitida.\n\nA regra **24.21** trata especificamente de corpos legislativos: em uma legislatura bicameral, a casa é registrada subordinadamente à legislatura. Assim, a representação didática `Brasil. Congresso Nacional. Câmara dos Deputados.` não se explica apenas pela necessidade de copiar a estrutura administrativa, mas por regra específica. A forma exata de um registro de autoridade deve ser conferida no catálogo adotado.\n\n**Caso resolvido:** duas repartições possuem uma “Divisão de Biblioteca”. A jurisdição mais esse nome pode ser ambígua; um nível intermediário identificador pode ser necessário. Isso não obriga a carregar todos os níveis entre a divisão e a autoridade máxima.\n\nMudanças administrativas exigem controle de autoridades e de relacionamentos, sem presumir que toda alteração de chefia tenha criado uma nova entidade. Antes de alterar o cabeçalho, determine se houve mudança de nome, fusão, sucessão ou apenas modificação de vinculação.",
    "checkpointIds": [
      "rt-2-5-5"
    ]
  },
  {
    "id": "sub-2-5-bloco-6",
    "titulo": "MARC: conteúdo, função e indicadores",
    "objetivos": [
      "Diferenciar nome autorizado, função bibliográfica e codificação dos campos."
    ],
    "conteudo": "O MARC 21 registra os dados escolhidos pelas regras de conteúdo. No formato bibliográfico, **110** identifica entrada principal de entidade coletiva e **710**, ponto de acesso adicional. A escolha depende da responsabilidade e das regras aplicáveis à obra; não basta que o documento tenha origem governamental. No formato de autoridades, 110 tem a função de cabeçalho estabelecido, e não de entrada principal de uma obra.\n\nO primeiro indicador distingue nome invertido (0), nome sob jurisdição (1) e nome em ordem direta (2). Um nome corporativo que contém qualificador geográfico não se torna, por isso, nome de jurisdição. No **110 bibliográfico**, o segundo indicador é indefinido (#). No **710 bibliográfico**, # significa informação não fornecida e 2 designa entrada analítica.\n\n| Subcampo | Uso no contexto do campo |\n|---|---|\n| `$a` | Nome da entidade ou jurisdição como elemento de entrada. |\n| `$b` | Unidade subordinada, repetível. |\n| `$c` | Local de reunião, quando aplicável; não é um campo genérico de endereço da sede. |\n| `$d` | Data de reunião ou contexto de tratado, conforme as definições do formato. |\n| `$e` | Termo de relação. |\n\nExemplos **hipotéticos**, destinados à leitura dos indicadores:\n\n```text\n110 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados.\n710 2# $a Universidade de Brasília.\n```\n\nO primeiro exemplo só será entrada principal se a responsabilidade pela obra justificar 110. O segundo representa um ponto de acesso adicional, e não prova que toda universidade deva ocupar o mesmo campo em qualquer registro. Confira pontuação, forma autorizada e política local antes de reutilizar um exemplo.",
    "checkpointIds": [
      "rt-2-5-6"
    ]
  },
  {
    "id": "sub-2-5-bloco-7",
    "titulo": "Biblioteca Pedro Aleixo: história e estrutura",
    "objetivos": [
      "Distinguir antecedentes, criação efetiva, denominação e estrutura administrativa vigente."
    ],
    "conteudo": "A história institucional da Câmara registra pedidos de livros na Assembleia Constituinte de **1823**, como antecedentes da biblioteca, e sua criação efetiva em **1866**. A denominação **Biblioteca Pedro Aleixo** decorre da **Resolução da Câmara nº 104/1984**. A instalação do Parlamento em 1826 não comprova que a biblioteca tenha sido criada naquele ano; não cabe afirmar um bicentenário bibliotecário em 2026 a partir dessa associação.\n\nA Biblioteca integra o **Centro de Documentação e Informação (Cedi)**. No organograma de abril de 2026 publicado pela Câmara, o Cedi está vinculado à **Diretoria-Geral**. A criação do Cedi em 1971 e sua vinculação histórica não dispensam consultar o organograma aplicável à data da questão. Evite misturar estrutura de épocas diferentes.\n\nNo apoio parlamentar, o serviço informacional fornece pesquisa bibliográfica, acesso a fontes, organização e preservação de acervos e produtos para subsidiar a atividade legislativa e a administração. Bibliotecário não substitui a competência de consultoria legislativa, do relator ou do órgão jurídico.\n\n**Caso resolvido:** uma nota histórica menciona a Diretoria Legislativa em 1971; uma questão pergunta a estrutura de 2026. A resposta deve apoiar-se na estrutura de 2026, sem reescrever o fato histórico como se estivesse incorreto na sua época. Data da fonte e data do fato precisam permanecer separadas.",
    "checkpointIds": [
      "cp-2-5-3",
      "rt-2-5-7"
    ]
  },
  {
    "id": "sub-2-5-bloco-8",
    "titulo": "BDCam, cooperação e memória parlamentar",
    "objetivos": [
      "Relacionar sistemas, acervos e redes sem atribuir funções ou permissões indevidas."
    ],
    "conteudo": "A **BDCam**, Biblioteca Digital da Câmara dos Deputados, disponibiliza coleções institucionais em ambiente DSpace. Consultar registros, arquivos, fontes de direitos e coleções ajuda a distinguir publicação institucional, estudo técnico e obra histórica digitalizada. O catálogo e o repositório cumprem funções relacionadas, mas um registro catalográfico não garante texto integral disponível.\n\nA **RVBI** é uma rede cooperativa coordenada pelo **Senado Federal**; a Câmara participa como biblioteca cooperante. Reúne instituições de diferentes Poderes e do Distrito Federal. A participação não deve ser deduzida apenas da relevância jurídica de um órgão. Por exemplo, a relação institucional consultada inclui STF, STJ, STM, TST e TJDFT, mas isso não autoriza acrescentar automaticamente o TCU. A lista oficial é a referência para conferir integrantes e alterações.\n\nA catalogação cooperativa e o controle de autoridades reduzem retrabalho, mas exigem aplicação das políticas de descrição e representação temática da rede. Copiar um registro sem verificar edição, manifestação, identificadores e consistência local pode disseminar erros.\n\nSistemas de tramitação legislativa respondem a perguntas sobre andamento, versões, pareceres e decisões. Repositórios oferecem objetos e metadados; catálogos localizam recursos; redes compartilham processamento e recuperação. Nenhum deles garante sozinho a rastreabilidade integral de toda a produção da Casa.\n\n**Exemplo de pesquisa integrada:** para estudar uma lei, identifique a norma e a versão temporal; consulte a tramitação e os pareceres; localize estudos técnicos e bibliografia; registre os limites da busca e os direitos dos arquivos reutilizados. A preservação de obras raras requer critérios de seleção, conservação e acesso; digitalizar não torna dispensável conservar o original.",
    "checkpointIds": [
      "rt-2-5-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "aacr",
    "titulo": "AACR2r — Código de catalogação anglo-americano",
    "localizador": "Capítulo 24: regras 24.17, 24.18A, 24.19 e 24.21. Exemplar do acervo teórico do projeto.",
    "url": "https://www.febab.org.br/"
  },
  {
    "id": "marc110",
    "titulo": "Library of Congress — MARC 21 Bibliographic: 110",
    "localizador": "Indicadores e subcampos de nome de entidade coletiva.",
    "url": "https://www.loc.gov/marc/bibliographic/bd110.html"
  },
  {
    "id": "marc710",
    "titulo": "Library of Congress — MARC 21 Bibliographic: 710",
    "localizador": "Segundo indicador: informação não fornecida ou entrada analítica.",
    "url": "https://www.loc.gov/marc/bibliographic/bd710.html"
  },
  {
    "id": "cf",
    "titulo": "Constituição Federal",
    "localizador": "Arts. 44–52, 70–75, 92–135.",
    "url": "https://www4.planalto.gov.br/legislacao/legis-federal/constituicao"
  },
  {
    "id": "hist",
    "titulo": "Câmara dos Deputados — Histórico da Biblioteca",
    "localizador": "Antecedentes de 1823, criação efetiva em 1866 e Resolução 104/1984.",
    "url": "https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/biblioteca/bibhist.html"
  },
  {
    "id": "organograma",
    "titulo": "Câmara dos Deputados — Estrutura administrativa",
    "localizador": "Organograma de abril de 2026: Cedi vinculado à Diretoria-Geral.",
    "url": "https://www2.camara.leg.br/a-camara/estruturaadm/camara-dos-deputados"
  },
  {
    "id": "rvbi",
    "titulo": "Senado Federal — Bibliotecas cooperantes da RVBI",
    "localizador": "Relação institucional de bibliotecas; composição pode mudar.",
    "url": "https://www12.senado.leg.br/institucional/biblioteca/rvbi/bibliotecas-cooperantes"
  },
  {
    "id": "bdcam",
    "titulo": "Biblioteca Digital da Câmara dos Deputados",
    "localizador": "Coleções, documentos, metadados e condições de acesso em cada registro.",
    "url": "https://bd.camara.leg.br/"
  }
],
};
