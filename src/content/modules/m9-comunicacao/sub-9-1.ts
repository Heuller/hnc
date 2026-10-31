import type { ModuloFilho } from '../../../domain/types';

export const submodulo91: ModuloFilho = {
  id: 'sub-9-1',
  numero: '9.1',
  editalRef: 'Bloco D - Item 4.9 e Bloco E - Item 4.1',
  preRequisitos: ["sub-1-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-9-2",
          "titulo": "Acesso Aberto e Repositórios",
          "motivo": "Modelos de negócios e vias dourada e verde do acesso aberto."
      }
  ],
  titulo: 'Ciclo da Comunicação Científica, Canais e Avaliação por Pares',
  antesDeLer: [
  {
    "termo": "Preprint",
    "definicao": "Manuscrito disponibilizado em versão preliminar, cuja condição de revisão e versão devem ser verificadas.",
    "exemploBiblioteca": "Um manuscrito depositado antes da publicação avaliada precisa informar sua condição e versão."
  },
  {
    "termo": "Canal formal",
    "definicao": "Meio de registro e circulação documental com organização e controle bibliográfico institucionalizados.",
    "exemploBiblioteca": "Uma revista por assinatura é canal formal, embora seu texto não esteja aberto a todos."
  }
],
  descricaoCurta: "Interpretar normas sociológicas sem convertê-las em garantias legais ou comportamentais. Distinguir modelo histórico de adaptação contemporânea e fluxo obrigatório. Diferenciar registro formal, acesso e redes informais. Comparar abertura e anonimato sem promessa de ausência de vieses. Avaliar versões preliminares e limites dos identificadores.",
  tempoEstimadoMinutos: 20,
  autoresChave: [
  "UNESCO — Recommendation on Open Science (2021)",
  "COPE — Ethical guidelines for peer reviewers",
  "SciELO Preprints"
],
  alertasCebraspe: [
  "Modelos editoriais e identificadores variam.",
  "Abertura de relatórios e de identidades são dimensões distintas.",
  "O identificador não certifica revisão nem verdade."
],
  teoriaDensaMarkdown: "### A Natureza Sociológica da Ciência e da Comunicação Científica\n\nA Ciência da Informação contemporânea apoia-se nas formulações de **Arthur Jack Meadows** (*A Comunicação Científica*, 1999) e **John Ziman** (*Conhecimento Público*, 1979) para definir o caráter indissociável entre ciência e comunicação:\n\n> **Fundamentação Doutrinária (A. J. Meadows, 1999):** Conforme leciona Arthur Jack Meadows (1999), a comunicação permite circulação, crítica e utilização de resultados; publicar não assegura aceitação, verdade ou incorporação ao conhecimento consolidado.\n\n* **O Princípio do Conhecimento Público:** Resultados secretos têm circulação e escrutínio limitados; isso não permite negar automaticamente seu caráter de pesquisa ou todo possível valor social. A ciência é um processo coletivo de consenso racional decorrente da crítica interpares.\n* **O Ethos Científico de Robert K. Merton (As Quatro Normas CUDOS - 1942):**\n  A conduta da comunidade científica apoia-se em quatro imperativos institucionais normativos:\n  1. **Comunalismo / Comunismo Epistêmico (C):** Os achados da ciência são frutos de cooperação social e pertencem a toda a humanidade como patrimônio comum. O princípio é sociológico e normativo; não substitui o regime jurídico de patentes, direitos autorais ou contratos de pesquisa.\n  2. **Universalismo (U):** As afirmações científicas devem ser submetidas a critérios impessoais pré-estabelecidos. A validação de uma teoria independe da raça, nacionalidade, religião, gênero ou prestígio social de quem a propôs.\n  3. **Desinteresse (D):** A atividade científica deve ser orientada primordialmente pela busca desinteressada da verdade e pelo progresso do saber, e não pela obtenção de lucros pecuniários pessoais egoístas.\n  4. **Ceticismo Organizado (OS):** Suspensão temporária de julgamento e escrutínio crítico impiedoso sobre todas as hipóteses. Nenhuma verdade científica é imune a testes empíricos rigorosos e refutações.\n\n---\n\n\n\nAs normas de Merton são ideais institucionais, não descrição de que todo cientista seja desinteressado ou de que conflitos de interesse inexistam. Avaliar uma proposição por critérios impessoais não significa ignorar metodologia, evidências e condições de produção.\n\n**Aplicação e recuperação:** Um pesquisador tem conflito de interesse declarado. Isso exige avaliação e transparência; não demonstra automaticamente que seus resultados são falsos.\n\n### O Fluxo da Informação Científica: O Modelo Garvey-Griffith\n\nDesenvolvido pelos psicólogos e cientistas da informação **William Garvey e Belver Griffith** (1972), o modelo descreve fluxos de comunicação em comunidades científicas; o esquema abaixo é uma adaptação didática com meios contemporâneos, não reprodução literal do diagrama de 1972:\n\n```timeline\nINF | 1. Canais Informais | Fase Preliminar e Restrita | Trocas verbais de laboratório, correios eletrônicos e debates em colégios invisíveis\n---> Registro Escrito Aberto\nPRE | 2. Preprints e Relatórios | Comunicação Semiformal Rápida | Depósito preliminar em servidores abertos de preprints e relatórios técnicos institucionais\n---> Validação e Feedback Entre Pares\nCONG | 3. Congressos e Anais | Exposição Acadêmica Pública | Apresentações em simpósios, debates em painéis e publicação de resumos em anais de eventos\n---> Submissão e Revisão por Pares (Peer Review)\nREV | 4. Periódico Científico | Canal Formal Canônico | Revisão por pares segundo o modelo do periódico, editoração, eventual atribuição de DOI e publicação\n---> Impacto, Disseminação e Mapeamento\nINDEX | 5. Indexação e Citações | Absorção pela Comunidade Científica | Inclusão em bases de resumos/índices (Scopus, Web of Science, SciELO) e acúmulo de citações\n---> Sedimentação Epistêmica\nCONS | 6. Saber Consolidado | Livros Didáticos e Tratados | O conhecimento testado e aceito converte-se em paradigma nos manuais (*textbooks*) e enciclopédias\n```\n\n1. **Fase Informal (Rápida e Restrita):** Trocas diretas no laboratório, correspondência entre pares e distribuição de cópias preliminares de manuscritos aos membros do grupo.\n2. **Fase Semi-formal:** Comunicação de resultados em mesas-redondas, congressos científicos e anais de eventos (permite receber feedbacks rápidos da comunidade).\n3. **Fase Formal (Lenta e Pública):** Redação do artigo e submissão ao periódico indexado, submissão ao comitê editorial e revisores (*peer review*), editoração, eventual atribuição de DOI e publicação.\n4. **Fase de Consolidação e Memória:** O artigo é indexado em bases referenciais (Scopus, Web of Science, SciELO), recebe citações de outros cientistas, é sintetizado em artigos de revisão (*review articles*) e, pode, posteriormente, ser sintetizado em livros didáticos (*textbooks*).\n\n---\n\n\n\nO fluxo não é uma sequência obrigatória para toda área: resultados podem circular antes, durante ou depois da revisão; nem todo artigo recebe DOI, citações ou síntese em manual. DOI identifica um objeto e favorece persistência, sem certificar sua correção ou revisão por pares.\n\n**Aplicação e recuperação:** Um resultado aparece em preprint e depois é corrigido no artigo. Registre as versões e compare o que mudou.\n\n### Canais Formais vs. Informais e os Colégios Invisíveis de Solla Price\n\n* **Canais Formais de Comunicação:**\n  * Veículos oficiais de registro da ciência: periódicos científicos arbitrados, livros acadêmicos monográficos, relatórios técnicos oficiais publicados e patentes concedidas.\n  * *Atributos:* Registro comunicável e controle bibliográfico relativamente estável; acesso pode depender de assinatura e a preservação exige gestão. Nem todo canal formal emprega a mesma revisão por pares.\n  * O **periódico científico** (cujo nascimento remonta a 1665 com o *Journal des Sçavans* em Paris e a *Philosophical Transactions of the Royal Society* em Londres) é o veículo formal hegemônico do saber científico há mais de 350 anos.\n* **Canais Informais e os Colégios Invisíveis (*Invisible Colleges*):**\n  * Conceito de longa história, retomado e difundido nos estudos de comunicação científica pelo historiador da ciência **Derek de Solla Price** (*Little Science, Big Science*, 1963):\n  * Descreve as redes informais de cooperação e interlocução ágil mantidas pelos principais pesquisadores situados na vanguarda de determinada especialidade científica.\n  * *Mecanismo Operacional:* Troca contínua de impressões, dados brutos, manuscritos não publicados e comentários críticos por canais diretos (antigamente por cartas e encontros pessoais; hoje por e-mail, redes sociais acadêmicas e aplicativos de mensagens).\n  * *⚠️ Atenção Cebraspe:* Assertiva típica de distrator afirma que os cientistas dos colégios invisíveis trabalham isolados ou não dialogam entre si. **ERRADO!** Os colégios invisíveis são justamente redes informais de interlocução, que podem cruzar instituições e fronteiras.\n\n**Aplicação e recuperação:** Uma revista por assinatura continua sendo canal formal. Formalidade não equivale a acesso gratuito.\n\n### Modalidades de Avaliação por Pares (*Peer Review*) e a Ciência Aberta\n\nA avaliação por pares é um mecanismo de avaliação que pode melhorar qualidade e detectar problemas, mas não garante verdade, ausência de fraude ou publicação de toda pesquisa válida:\n\n| Modalidade de Peer Review | Anonimato do Autor | Anonimato do Revisor | Vantagens Centrais | Críticas e Fragilidades Mapeadas |\n| :--- | :--- | :--- | :--- | :--- |\n| **Simples-Cega (*Single-Blind*)** | Não (o revisor sabe quem é o autor). | Sim (o autor não sabe quem é o revisor). | O anonimato pode reduzir certos constrangimentos, sem eliminar riscos ou vieses. | Risco de viés discriminatório contra autores iniciantes, mulheres ou de países periféricos. |\n| **Duplo-Cega (*Double-Blind*)** | Sim (o revisor não conhece o autor). | Sim (o autor não conhece o revisor). | Busca mitigar preconceitos institucionais e foca no mérito do texto. | Em áreas muito especializadas, o revisor frequentemente deduz quem é o autor pelo estilo e citações. |\n| **Triplo-Cega (*Triple-Blind*)** | Sim (inclusive para o editor-chefe). | Sim (para todos). | Busca reduzir certos vieses do editor na triagem inicial (*desk reject*). | Complexidade administrativa e operacional elevada na gestão editorial. |\n| **Aberta (*Open Peer Review*)** | Não (público para todos). | Não (público para todos). | Pode abrir identidades, pareceres ou participação, segundo o modelo; não exige sempre todos esses componentes. | Dificuldade em recrutar revisores que se disponham a assinar publicamente pareceres críticos negativos sobre líderes da área. |\n\n---\n\n\n\n“Open peer review” designa uma família de práticas: identidades abertas, relatórios abertos e participação aberta são dimensões distintas. Um periódico pode publicar pareceres sem identificar revisores. A terminologia deve ser conferida na política editorial, sem presumir que “aberta” signifique transparência total em todos os aspectos.\n\n**Aplicação e recuperação:** Pareceres públicos com nomes ocultos podem integrar uma modalidade aberta. Verifique quais dimensões foram abertas.\n\n### Preprints e a Mudança de Paradigma na Circulação da Ciência\n\n* **Conceito Canônico:** Um *preprint* é uma versão completa de um manuscrito científico disponibilizada publicamente em um repositório aberto de preprints (ex.: arXiv para física/matemática, bioRxiv para biologia, SciELO Preprints para América Latina) antes de sua publicação formal avaliada por periódico, conforme a política do servidor; a condição da versão deve ser explicitada.\n* **Benefícios para a Comunidade Científica:**\n  1. *Rapidez e Agilidade:* Reduz a espera para acesso aos resultados, sem eliminar os prazos e etapas editoriais posteriores, permitindo que descobertas urgentes (ex.: vacinas e pandemias) circulem imediatamente.\n  2. *Garantia de Prioridade Intelectual:* O depósito recebe um carimbo de data (*timestamp*) e pode receber identificador persistente, conforme o servidor. Isso documenta depósito, sem provar sozinho pioneirismo, autoria legítima ou correção.\n  3. *Aprimoramento Colaborativo:* Permite que a comunidade leia o manuscrito e envie críticas e sugestões ao autor antes da submissão formal definitiva a uma revista científica.\n\n**Aplicação e recuperação:** Um preprint com DOI pode conter erro metodológico: identificador não substitui avaliação crítica.",
  teoriaDidaticaMarkdown: "Comunicação permite circulação e crítica, sem garantir verdade. Merton formula normas institucionais, não leis jurídicas. Modelos históricos não impõem uma sequência universal. Canal formal não equivale a acesso gratuito. Colégios invisíveis são redes de interlocução. Anonimato e abertura têm diferentes configurações. Preprint e DOI exigem identificar versão e limites.",
  checkpoints: [
  {
    "id": "cp-9-1-1",
    "pergunta": "Micro-Checkpoint 1: Os Colégios Invisíveis de Solla Price",
    "item": "No âmbito da comunicação científica, a teoria dos colégios invisíveis descreve redes de trabalho científico compostas por pesquisadores que se isolam institucionalmente e que não se comunicam entre si.",
    "gabarito": "E",
    "justificativa": "Colégios invisíveis são redes informais de comunicação e cooperação entre pesquisadores com interesses comuns. A ausência de estrutura institucional própria não significa isolamento ou ausência de troca; o item inverte a característica central.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "versao_correta": "Colégios invisíveis envolvem comunicação e cooperação informal entre pesquisadores."
  },
  {
    "id": "cp-9-1-2",
    "pergunta": "Micro-Checkpoint 2: Canais Formais da Ciência",
    "item": "Periódicos científicos arbitrados são canais formais que favorecem registro público e controle bibliográfico, embora o acesso possa depender de assinatura e a permanência dos arquivos exija preservação.",
    "gabarito": "C",
    "justificativa": "Certo. As funções de registro e comunicação não asseguram acesso universal gratuito nem preservação automática. A redação explicita essas condições.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas."
  },
  {
    "id": "cp-9-1-3",
    "pergunta": "Micro-Checkpoint 3: Canais Formais vs Informais de Garvey-Griffith",
    "item": "No modelo de comunicação científica de Garvey e Griffith, os artigos publicados em periódicos científicos indexados com revisão por pares enquadram-se na categoria de canais informais de comunicação.",
    "gabarito": "E",
    "justificativa": "No modelo clássico de Garvey e Griffith, artigos publicados em periódicos são canais formais, com registro público e controle bibliográfico. Conversas, cartas e trocas pessoais exemplificam comunicação informal. O caráter formal não exige acesso gratuito nem garante a verdade dos resultados.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "versao_correta": "Artigos publicados em periódicos arbitrados são exemplos de comunicação formal."
  },
  {
    "id": "rt-9-1-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "As normas de Merton descrevem ideais institucionais e não garantem a conduta efetiva de todo cientista.",
    "gabarito": "C",
    "justificativa": "A formulação normativa não certifica comportamento individual.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "editalRef": "Bloco D - Item 4.9 e Bloco E - Item 4.1",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-9-1-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo artigo científico obrigatoriamente passa por revisão duplo-cega e recebe DOI.",
    "gabarito": "E",
    "justificativa": "Modelos editoriais e identificadores variam.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "editalRef": "Bloco D - Item 4.9 e Bloco E - Item 4.1",
    "habilidade": "aplicar",
    "versao_correta": "Revisão e identificação dependem do veículo e de sua política."
  },
  {
    "id": "rt-9-1-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um periódico pago pode constituir canal formal de comunicação científica.",
    "gabarito": "C",
    "justificativa": "Registro formal não depende de acesso gratuito.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "editalRef": "Bloco D - Item 4.9 e Bloco E - Item 4.1",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-9-1-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Publicar pareceres sem revelar revisores é incompatível com qualquer modalidade de open peer review.",
    "gabarito": "E",
    "justificativa": "Abertura de relatórios e de identidades são dimensões distintas.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "editalRef": "Bloco D - Item 4.9 e Bloco E - Item 4.1",
    "habilidade": "aplicar",
    "versao_correta": "Há modelos que abrem pareceres e preservam identidades."
  },
  {
    "id": "rt-9-1-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O DOI de um preprint comprova que ele foi aprovado por pares e que seus resultados estão corretos.",
    "gabarito": "E",
    "justificativa": "O identificador não certifica revisão nem verdade.",
    "fonte": "UNESCO — Recommendation on Open Science (2021) — Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.; COPE — Ethical guidelines for peer reviewers — Responsabilidades, conflitos e confidencialidade na revisão.; SciELO Preprints — Políticas e identificação das versões disponibilizadas.",
    "editalRef": "Bloco D - Item 4.9 e Bloco E - Item 4.1",
    "habilidade": "aplicar",
    "versao_correta": "É necessário verificar a versão, a política editorial e as evidências."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-9-1-fonte-unesco",
      "nome": "UNESCO — Recommendation on Open Science (2021)",
      "ano": "Referência de consulta",
      "obraPrincipal": "UNESCO — Recommendation on Open Science (2021)",
      "ideiaChave": "Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-1-fonte-cope",
      "nome": "COPE — Ethical guidelines for peer reviewers",
      "ano": "Referência de consulta",
      "obraPrincipal": "COPE — Ethical guidelines for peer reviewers",
      "ideiaChave": "Responsabilidades, conflitos e confidencialidade na revisão.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-1-fonte-preprints",
      "nome": "SciELO Preprints",
      "ano": "Referência de consulta",
      "obraPrincipal": "SciELO Preprints",
      "ideiaChave": "Políticas e identificação das versões disponibilizadas.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-9-1-3",
      "afirmacao": "Um periódico pago pode constituir canal formal de comunicação científica.",
      "gabarito": "C",
      "porQue": "Registro formal não depende de acesso gratuito."
    },
    {
      "id": "memoria-rt-9-1-4",
      "afirmacao": "Publicar pareceres sem revelar revisores é incompatível com qualquer modalidade de open peer review.",
      "gabarito": "E",
      "porQue": "Abertura de relatórios e de identidades são dimensões distintas."
    },
    {
      "id": "memoria-rt-9-1-5",
      "afirmacao": "O DOI de um preprint comprova que ele foi aprovado por pares e que seus resultados estão corretos.",
      "gabarito": "E",
      "porQue": "O identificador não certifica revisão nem verdade."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-9-1-bloco-1",
    "titulo": "A Natureza Sociológica da Ciência e da Comunicação Científica",
    "objetivos": [
      "Interpretar normas sociológicas sem convertê-las em garantias legais ou comportamentais."
    ],
    "conteudo": "A Ciência da Informação contemporânea apoia-se nas formulações de **Arthur Jack Meadows** (*A Comunicação Científica*, 1999) e **John Ziman** (*Conhecimento Público*, 1979) para definir o caráter indissociável entre ciência e comunicação:\n\n> **Fundamentação Doutrinária (A. J. Meadows, 1999):** Conforme leciona Arthur Jack Meadows (1999), a comunicação permite circulação, crítica e utilização de resultados; publicar não assegura aceitação, verdade ou incorporação ao conhecimento consolidado.\n\n* **O Princípio do Conhecimento Público:** Resultados secretos têm circulação e escrutínio limitados; isso não permite negar automaticamente seu caráter de pesquisa ou todo possível valor social. A ciência é um processo coletivo de consenso racional decorrente da crítica interpares.\n* **O Ethos Científico de Robert K. Merton (As Quatro Normas CUDOS - 1942):**\n  A conduta da comunidade científica apoia-se em quatro imperativos institucionais normativos:\n  1. **Comunalismo / Comunismo Epistêmico (C):** Os achados da ciência são frutos de cooperação social e pertencem a toda a humanidade como patrimônio comum. O princípio é sociológico e normativo; não substitui o regime jurídico de patentes, direitos autorais ou contratos de pesquisa.\n  2. **Universalismo (U):** As afirmações científicas devem ser submetidas a critérios impessoais pré-estabelecidos. A validação de uma teoria independe da raça, nacionalidade, religião, gênero ou prestígio social de quem a propôs.\n  3. **Desinteresse (D):** A atividade científica deve ser orientada primordialmente pela busca desinteressada da verdade e pelo progresso do saber, e não pela obtenção de lucros pecuniários pessoais egoístas.\n  4. **Ceticismo Organizado (OS):** Suspensão temporária de julgamento e escrutínio crítico impiedoso sobre todas as hipóteses. Nenhuma verdade científica é imune a testes empíricos rigorosos e refutações.\n\n---\n\n\n\nAs normas de Merton são ideais institucionais, não descrição de que todo cientista seja desinteressado ou de que conflitos de interesse inexistam. Avaliar uma proposição por critérios impessoais não significa ignorar metodologia, evidências e condições de produção.\n\n**Aplicação e recuperação:** Um pesquisador tem conflito de interesse declarado. Isso exige avaliação e transparência; não demonstra automaticamente que seus resultados são falsos.",
    "checkpointIds": [
      "rt-9-1-1"
    ]
  },
  {
    "id": "sub-9-1-bloco-2",
    "titulo": "O Fluxo da Informação Científica: O Modelo Garvey-Griffith",
    "objetivos": [
      "Distinguir modelo histórico de adaptação contemporânea e fluxo obrigatório."
    ],
    "conteudo": "Desenvolvido pelos psicólogos e cientistas da informação **William Garvey e Belver Griffith** (1972), o modelo descreve fluxos de comunicação em comunidades científicas; o esquema abaixo é uma adaptação didática com meios contemporâneos, não reprodução literal do diagrama de 1972:\n\n```timeline\nINF | 1. Canais Informais | Fase Preliminar e Restrita | Trocas verbais de laboratório, correios eletrônicos e debates em colégios invisíveis\n---> Registro Escrito Aberto\nPRE | 2. Preprints e Relatórios | Comunicação Semiformal Rápida | Depósito preliminar em servidores abertos de preprints e relatórios técnicos institucionais\n---> Validação e Feedback Entre Pares\nCONG | 3. Congressos e Anais | Exposição Acadêmica Pública | Apresentações em simpósios, debates em painéis e publicação de resumos em anais de eventos\n---> Submissão e Revisão por Pares (Peer Review)\nREV | 4. Periódico Científico | Canal Formal Canônico | Revisão por pares segundo o modelo do periódico, editoração, eventual atribuição de DOI e publicação\n---> Impacto, Disseminação e Mapeamento\nINDEX | 5. Indexação e Citações | Absorção pela Comunidade Científica | Inclusão em bases de resumos/índices (Scopus, Web of Science, SciELO) e acúmulo de citações\n---> Sedimentação Epistêmica\nCONS | 6. Saber Consolidado | Livros Didáticos e Tratados | O conhecimento testado e aceito converte-se em paradigma nos manuais (*textbooks*) e enciclopédias\n```\n\n1. **Fase Informal (Rápida e Restrita):** Trocas diretas no laboratório, correspondência entre pares e distribuição de cópias preliminares de manuscritos aos membros do grupo.\n2. **Fase Semi-formal:** Comunicação de resultados em mesas-redondas, congressos científicos e anais de eventos (permite receber feedbacks rápidos da comunidade).\n3. **Fase Formal (Lenta e Pública):** Redação do artigo e submissão ao periódico indexado, submissão ao comitê editorial e revisores (*peer review*), editoração, eventual atribuição de DOI e publicação.\n4. **Fase de Consolidação e Memória:** O artigo é indexado em bases referenciais (Scopus, Web of Science, SciELO), recebe citações de outros cientistas, é sintetizado em artigos de revisão (*review articles*) e, pode, posteriormente, ser sintetizado em livros didáticos (*textbooks*).\n\n---\n\n\n\nO fluxo não é uma sequência obrigatória para toda área: resultados podem circular antes, durante ou depois da revisão; nem todo artigo recebe DOI, citações ou síntese em manual. DOI identifica um objeto e favorece persistência, sem certificar sua correção ou revisão por pares.\n\n**Aplicação e recuperação:** Um resultado aparece em preprint e depois é corrigido no artigo. Registre as versões e compare o que mudou.",
    "checkpointIds": [
      "cp-9-1-3",
      "rt-9-1-2"
    ]
  },
  {
    "id": "sub-9-1-bloco-3",
    "titulo": "Canais Formais vs. Informais e os Colégios Invisíveis de Solla Price",
    "objetivos": [
      "Diferenciar registro formal, acesso e redes informais."
    ],
    "conteudo": "* **Canais Formais de Comunicação:**\n  * Veículos oficiais de registro da ciência: periódicos científicos arbitrados, livros acadêmicos monográficos, relatórios técnicos oficiais publicados e patentes concedidas.\n  * *Atributos:* Registro comunicável e controle bibliográfico relativamente estável; acesso pode depender de assinatura e a preservação exige gestão. Nem todo canal formal emprega a mesma revisão por pares.\n  * O **periódico científico** (cujo nascimento remonta a 1665 com o *Journal des Sçavans* em Paris e a *Philosophical Transactions of the Royal Society* em Londres) é o veículo formal hegemônico do saber científico há mais de 350 anos.\n* **Canais Informais e os Colégios Invisíveis (*Invisible Colleges*):**\n  * Conceito de longa história, retomado e difundido nos estudos de comunicação científica pelo historiador da ciência **Derek de Solla Price** (*Little Science, Big Science*, 1963):\n  * Descreve as redes informais de cooperação e interlocução ágil mantidas pelos principais pesquisadores situados na vanguarda de determinada especialidade científica.\n  * *Mecanismo Operacional:* Troca contínua de impressões, dados brutos, manuscritos não publicados e comentários críticos por canais diretos (antigamente por cartas e encontros pessoais; hoje por e-mail, redes sociais acadêmicas e aplicativos de mensagens).\n  * *⚠️ Atenção Cebraspe:* Assertiva típica de distrator afirma que os cientistas dos colégios invisíveis trabalham isolados ou não dialogam entre si. **ERRADO!** Os colégios invisíveis são justamente redes informais de interlocução, que podem cruzar instituições e fronteiras.\n\n**Aplicação e recuperação:** Uma revista por assinatura continua sendo canal formal. Formalidade não equivale a acesso gratuito.",
    "checkpointIds": [
      "cp-9-1-1",
      "cp-9-1-2",
      "rt-9-1-3"
    ]
  },
  {
    "id": "sub-9-1-bloco-4",
    "titulo": "Modalidades de Avaliação por Pares (*Peer Review*) e a Ciência Aberta",
    "objetivos": [
      "Comparar abertura e anonimato sem promessa de ausência de vieses."
    ],
    "conteudo": "A avaliação por pares é um mecanismo de avaliação que pode melhorar qualidade e detectar problemas, mas não garante verdade, ausência de fraude ou publicação de toda pesquisa válida:\n\n| Modalidade de Peer Review | Anonimato do Autor | Anonimato do Revisor | Vantagens Centrais | Críticas e Fragilidades Mapeadas |\n| :--- | :--- | :--- | :--- | :--- |\n| **Simples-Cega (*Single-Blind*)** | Não (o revisor sabe quem é o autor). | Sim (o autor não sabe quem é o revisor). | O anonimato pode reduzir certos constrangimentos, sem eliminar riscos ou vieses. | Risco de viés discriminatório contra autores iniciantes, mulheres ou de países periféricos. |\n| **Duplo-Cega (*Double-Blind*)** | Sim (o revisor não conhece o autor). | Sim (o autor não conhece o revisor). | Busca mitigar preconceitos institucionais e foca no mérito do texto. | Em áreas muito especializadas, o revisor frequentemente deduz quem é o autor pelo estilo e citações. |\n| **Triplo-Cega (*Triple-Blind*)** | Sim (inclusive para o editor-chefe). | Sim (para todos). | Busca reduzir certos vieses do editor na triagem inicial (*desk reject*). | Complexidade administrativa e operacional elevada na gestão editorial. |\n| **Aberta (*Open Peer Review*)** | Não (público para todos). | Não (público para todos). | Pode abrir identidades, pareceres ou participação, segundo o modelo; não exige sempre todos esses componentes. | Dificuldade em recrutar revisores que se disponham a assinar publicamente pareceres críticos negativos sobre líderes da área. |\n\n---\n\n\n\n“Open peer review” designa uma família de práticas: identidades abertas, relatórios abertos e participação aberta são dimensões distintas. Um periódico pode publicar pareceres sem identificar revisores. A terminologia deve ser conferida na política editorial, sem presumir que “aberta” signifique transparência total em todos os aspectos.\n\n**Aplicação e recuperação:** Pareceres públicos com nomes ocultos podem integrar uma modalidade aberta. Verifique quais dimensões foram abertas.",
    "checkpointIds": [
      "rt-9-1-4"
    ]
  },
  {
    "id": "sub-9-1-bloco-5",
    "titulo": "Preprints e a Mudança de Paradigma na Circulação da Ciência",
    "objetivos": [
      "Avaliar versões preliminares e limites dos identificadores."
    ],
    "conteudo": "* **Conceito Canônico:** Um *preprint* é uma versão completa de um manuscrito científico disponibilizada publicamente em um repositório aberto de preprints (ex.: arXiv para física/matemática, bioRxiv para biologia, SciELO Preprints para América Latina) antes de sua publicação formal avaliada por periódico, conforme a política do servidor; a condição da versão deve ser explicitada.\n* **Benefícios para a Comunidade Científica:**\n  1. *Rapidez e Agilidade:* Reduz a espera para acesso aos resultados, sem eliminar os prazos e etapas editoriais posteriores, permitindo que descobertas urgentes (ex.: vacinas e pandemias) circulem imediatamente.\n  2. *Garantia de Prioridade Intelectual:* O depósito recebe um carimbo de data (*timestamp*) e pode receber identificador persistente, conforme o servidor. Isso documenta depósito, sem provar sozinho pioneirismo, autoria legítima ou correção.\n  3. *Aprimoramento Colaborativo:* Permite que a comunidade leia o manuscrito e envie críticas e sugestões ao autor antes da submissão formal definitiva a uma revista científica.\n\n**Aplicação e recuperação:** Um preprint com DOI pode conter erro metodológico: identificador não substitui avaliação crítica.",
    "checkpointIds": [
      "rt-9-1-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "unesco",
    "titulo": "UNESCO — Recommendation on Open Science (2021)",
    "localizador": "Comunicação, transparência e abertura; não pressupõe que toda pesquisa seja livre de restrições.",
    "url": "https://www.unesco.org/en/open-science/about"
  },
  {
    "id": "cope",
    "titulo": "COPE — Ethical guidelines for peer reviewers",
    "localizador": "Responsabilidades, conflitos e confidencialidade na revisão.",
    "url": "https://publicationethics.org/resources/guidelines/cope-ethical-guidelines-peer-reviewers"
  },
  {
    "id": "preprints",
    "titulo": "SciELO Preprints",
    "localizador": "Políticas e identificação das versões disponibilizadas.",
    "url": "https://preprints.scielo.org/"
  }
],
};
