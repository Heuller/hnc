import type { ModuloFilho } from '../../../domain/types';

export const submodulo53: ModuloFilho = {
  id: 'sub-5-3',
  numero: '5.3',
  editalRef: 'Bloco D - Item 4.7 e Bloco E - Item 1.7',
  preRequisitos: ["sub-5-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-9-4",
          "titulo": "Bibliometria e Altmetria",
          "motivo": "Leis bibliométricas e obsolescência da literatura de Burton & Kebler."
      },
      {
          "submoduloId": "sub-6-1",
          "titulo": "Bibliotecas Digitais",
          "motivo": "Métricas de uso eletrônico COUNTER R5 e protocolo SUSHI."
      }
  ],
  titulo: 'Política de Desenvolvimento de Coleções: Seleção, Aquisição, Desbaste e Avaliação',
  antesDeLer: [
  {
    "termo": "Desbastamento",
    "definicao": "Processo de avaliação e retirada de materiais do acesso ativo, com amplitude definida pelo autor; em Vergueiro, pode abranger descarte, remanejamento e conservação.",
    "exemploBiblioteca": "Remanejar para depósito e retirar definitivamente são operações distintas dentro do desbastamento amplo."
  },
  {
    "termo": "Release",
    "definicao": "Versão de um padrão; alterações de regras podem afetar comparações estatísticas.",
    "exemploBiblioteca": "Comparar uso de livros em COUNTER R5 e R5.1 exige considerar mudanças de contagem de segmentos."
  }
],
  descricaoCurta: "Interpretar o modelo de Evans apresentado por Vergueiro com suas condições. Relacionar funções e revisão da política de coleções. Ponderar critérios e responsabilidades na seleção. Distinguir seleção, aquisição e procedimentos patrimoniais. Interpretar licenças e métricas conforme versão e objetivo. Diferenciar desbastamento, remanejamento e descarte na fonte indicada. Comparar métodos quantitativos e qualitativos de avaliação. Integrar métricas de uso e missão sem decisões automáticas.",
  tempoEstimadoMinutos: 33,
  autoresChave: [
  "Vergueiro — Desenvolvimento de coleções",
  "COUNTER — Code of Practice R5.1",
  "COUNTER — Metrics",
  "Texas State Library — CREW",
  "IFLA — Guidelines for a Collection Development Policy using the Conspectus Model",
  "Lei 14.133/2021"
],
  alertasCebraspe: [
  "Mudanças de missão, públicos e recursos justificam revisão.",
  "Decisão colegiada também exige critérios e documentação.",
  "Contratação direta exige fundamento, instrução e demonstração pertinentes."
],
  teoriaDensaMarkdown: "### O Conceito e a Evolução do Desenvolvimento de Coleções\n\nDesenvolvimento de coleções é um processo planejado, contínuo e integrado: conhecer a comunidade, estabelecer políticas, selecionar, adquirir, desbastar e avaliar. Compra é apenas uma de suas operações. O tipo de biblioteca, sua missão, seus públicos e seus recursos alteram prioridades; não existe uma coleção ideal universal.\n\n**Evans e Vergueiro:** no PDF *Desenvolvimento de coleções*, pp. 15–17, Vergueiro apresenta o modelo elaborado por **G. Edward Evans**, com fases interdependentes. Não se deve atribuir sua criação a Vergueiro. O diagrama articula estudo da comunidade, políticas de seleção, seleção, aquisição, desbastamento e avaliação.\n\nHá uma particularidade que importa ao interpretar a fonte: o texto de Vergueiro indica a comunidade envolvendo as fases **com exceção da aquisição** no desenho do modelo. Isso não significa que, na prática gerencial, compras possam ignorar necessidades; significa que não se deve apagar a exceção ao descrever literalmente o modelo.\n\n**Raciocínio aplicado:** a avaliação pode revelar que uma área prioritária está pouco atendida; o diagnóstico pode levar à revisão da política, da seleção, das licenças ou da divulgação. O ciclo não exige esperar uma volta completa para corrigir falhas. Uma coleção cresce, se transforma e pode reduzir-se em certas áreas de modo justificado.\n\n**Aplicação e recuperação:** Na descrição literal do modelo de Evans apresentado por Vergueiro, lembre a exceção da aquisição; na gestão prática, não conclua que comprar possa ignorar a comunidade.\n\n### O Documento Formal de Política de Desenvolvimento de Coleções (PDC)\n\nO documento de política é o instrumento normativo norteador da gestão de acervos. Conforme a doutrina (Vergueiro, Weitzel, Evans, Johnson), possui **tríplice caráter**:\n\n1. **Caráter Administrativo:**\n   * Estabelece regras claras, rotinas padronizadas e critérios uniformes.\n   * Racionaliza o orçamento e justifica as solicitações de verbas perante a administração superior do órgão.\n2. **Caráter Político:**\n   * Atua como **escudo institucional** para o bibliotecário e para a equipe técnica.\n   * Protege o acervo contra tentativas de **censura ideológica, moral ou religiosa**, pressões partidárias e ingerências de dirigentes que desejem impor a compra ou o descarte arbitrário de determinadas obras.\n3. **Caráter de Relações Públicas:**\n   * Torna públicos e transparentes os critérios e prioridades adotados pela biblioteca perante a comunidade acadêmica, servidores e parlamentares.\n   * Informa claramente as regras para aceitação de doações, evitando melindres de doadores cujos materiais não se enquadrem no escopo do acervo.\n\n#### Estrutura Básica do Documento de Política (Weitzel):\n* **Identificação institucional:** Histórico, missão e objetivos do órgão.\n* **Público-alvo:** Usuários reais e potenciais e suas demandas prioritárias.\n* **Responsabilidade pela seleção:** Definição dos papéis da equipe de bibliotecários, da comissão de seleção e dos especialistas.\n* **Critérios gerais e específicos de seleção:** Conteúdo, escopo, idioma, suporte físico/digital, custo e atualidade.\n* **Modalidades de aquisição e licenciamento:** Regras para compra, doação, permuta e assinaturas eletrônicas.\n* **Políticas de desbastamento e descarte:** Prazos, critérios de expurgo e destinação final dos itens baixados.\n* **Políticas de preservação e conservação:** Diretrizes de encadernação, higienização e digitalização.\n* **Metodologia de avaliação da coleção:** Indicadores e periodicidade dos diagnósticos (métodos tradicionais e relatórios COUNTER).\n* **Revisão periódica do documento:** Cláusula estipulando que o documento deve ser reavaliado formalmente em prazo definido pela instituição e quando mudanças relevantes exigirem; não há intervalo universal de 2, 3 ou 5 anos.\n\n**Aplicação e recuperação:** A política deve explicar por que uma doação fora do escopo não será incorporada. Critérios públicos reduzem arbitrariedade e conflitos.\n\n### Critérios de Seleção e Comissões de Seleção\n\nA seleção é o **processo intelectual de tomada de decisão** no qual se determina quais títulos devem ou não ingressar no acervo.\n\n#### A. Critérios Canônicos de Vergueiro:\n* **Critérios Relativos ao Conteúdo do Documento:**\n  * *Autoridade:* Notoriedade e qualificação acadêmica/profissional do autor e prestígio da editora.\n  * *Exatidão / Precisão:* Rigor científico, correção factual e ausência de erros grosseiros.\n  * *Atualidade:* Data de publicação em confronto com o dinamismo da disciplina (ex.: livros de Direito e Tecnologia exigem extrema atualidade; obras de História têm meia-vida longa).\n  * *Imparcialidade:* Equilíbrio de pontos de vista, especialmente em temas legislativos e sociais controvertidos.\n  * *Profundidade e Escopo:* Nível de tratamento do assunto (introdutório, intermediário ou pesquisa avançada).\n* **Critérios Relativos ao Usuário:**\n  * Grau de adequação ao nível cognitivo, estilo, linguagem e necessidades reais da comunidade.\n* **Critérios Relativos aos Aspectos Físicos e Tecnológicos:**\n  * Durabilidade do papel, encadernação, legibilidade tipográfica, compatibilidade de formatos eletrônicos (e-books sem DRMs restritivos) e requisitos de infraestrutura.\n* **Critérios Relativos ao Custo:**\n  * Relação custo-benefício em confronto com a disponibilidade orçamentária.\n\n#### B. Atores da Seleção e a Comissão de Seleção:\n* A definição dos responsáveis depende da política institucional; decisões colegiadas podem ampliar a participação e reduzir arbitrariedade, sem serem uma obrigação universal em qualquer biblioteca.\n* Recomenda-se a instituição de uma **Comissão de Seleção mista**, composta por bibliotecários (que dominam os princípios biblioteconômicos, o orçamento e a completude do acervo) e representantes dos usuários/especialistas temáticos (consultores legislativos, professores ou pesquisadores).\n* A coordenação executiva da comissão cabe preferencialmente ao bibliotecário.\n\n---\n\n\n\nCritérios não se aplicam mecanicamente: uma obra parcial ou polêmica pode ser importante para representar uma corrente de pensamento. Atualidade também depende da finalidade: uma norma revogada pode continuar relevante para história legislativa, sem servir como descrição do direito vigente. Comissão mista é recomendação de organização; composição e competência devem obedecer à política e à regulamentação institucional.\n\n**Aplicação e recuperação:** Uma obra de opinião controversa pode atender à pluralidade do acervo. Avaliar não significa exigir concordância do bibliotecário com o autor.\n\n### Modalidades de Aquisição Tradicionais: Compra, Doação e Permuta\n\nA aquisição é o **processo operacional** que concretiza a incorporação física ou o acesso institucional aos recursos selecionados:\n\n#### A. Compra\n* **No Setor Público (Lei nº 14.133/2021 - Nova Lei de Licitações):**\n  * As compras de acervos bibliográficos devem seguir o regime da Lei 14.133/2021.\n  * *Inexigibilidade de Licitação (art. 74):* Aplicável quando houver inviabilidade de competição, como na contratação direta de fornecedor/editora exclusivo ou outras situações efetivamente demonstradas de inviabilidade de competição. Ser base proprietária, por si só, não comprova exclusividade nem inviabilidade.\n  * *Dispensa de Licitação (art. 75):* Aplicável em compras de pequeno valor dentro dos limites estipulados em lei ou em casos emergenciais.\n  * *Uso de Desideratas:* Listas de títulos desejados ou lacunas de aquisição; não se restringem a obras esgotadas ou a compras em sebos.\n\n#### B. Doação\n* **Diretriz Canônica:** Uma biblioteca não deve aceitar indiscriminadamente tudo o que lhe é oferecido. Acervos obsoletos, danificados ou fora de escopo transformam a biblioteca em depósito de entulho (*lixo bibliográfico*).\n* A política deve estipular que a aceitação de doações observará critérios e procedimentos previamente informados, distinguindo recebimento para avaliação e incorporação definitiva.\n* Condições devem ser documentadas em instrumento apropriado. A autorização do doador não dispensa procedimentos patrimoniais nem permite ao gestor público dar baixa ou alienar bens sem observar a legislação.\n* Não se devem aceitar doações com exigências descabidas (ex.: exigência de manter uma coleção fechada e isolada em sala especial).\n\n#### C. Permuta (Intercâmbio)\n* Troca sistemática de publicações institucionais (livros, anais de comissões, Revista de Informação Legislativa) entre entidades congêneres (Câmara, Senado, STF, universidades federais).\n* Exige o controle de listas de duplicatas e equivalência de valor informativo entre os órgãos conveniados.\n\n**Aplicação e recuperação:** Uma base proprietária possui distribuidor exclusivo? Documente a inviabilidade real de competição e a justificativa da escolha; o adjetivo “proprietária” não resolve o processo.\n\n### Licenciamento de Conteúdos Digitais e Métricas de Uso: Padrão COUNTER (Itens 4.5 a 4.7 do Edital)\n\n### Modelos de acesso e condições contratuais\n\nAdquirir o exemplar impresso não transfere direitos de reprodução. No digital, o acesso frequentemente depende de licença; acesso aberto também pode ter condições de reutilização. Examine usuários autorizados, simultaneidade, autenticação, acessibilidade, empréstimo entre bibliotecas, mineração de textos e dados, estatísticas, privacidade, preservação e saída do contrato.\n\n| Modelo | Funcionamento e limite |\n|---|---|\n| Assinatura | Pagamento recorrente por acesso no período. Direitos pós-cancelamento dependem de contrato. |\n| Acesso perpétuo | Direito contratual de acesso continuado a conteúdo definido. Não garante, sozinho, plataforma eterna, arquivo local ou preservação. |\n| DDA/PDA | Uso pode acionar aquisição segundo critérios pactuados, orçamento e controles; não se resume a um número universal de cliques. |\n| EBA | Acesso a conjunto por período acordado e seleção posterior informada por evidências, conforme os termos. Não precisa durar exatamente doze meses. |\n| Consórcio | Negociação cooperativa; pode melhorar condições, sem garantir automaticamente menor custo ou adequação. |\n\nCustódia independente, como LOCKSS, CLOCKSS e Portico, exige verificar cobertura, contrato e condições de acesso em eventos de descontinuidade. Não basta citar o serviço para garantir preservação. Dados de uso identificáveis exigem finalidade, base legal, minimização e proteção; a LGPD não proíbe toda coleta de dados necessária ao serviço.\n\n### COUNTER, SUSHI e escolha da métrica\n\nCOUNTER publica regras para tornar estatísticas mais consistentes e comparáveis. Certificação e auditoria não tornam fraudes ou erros impossíveis. SUSHI automatiza a obtenção dos relatórios; a implementação COUNTER R5/R5.1 utiliza API REST e JSON, enquanto o SUSHI original teve serviços XML/SOAP. Não atribua uma única arquitetura a toda a história do padrão.\n\nOs relatórios principais são **PR** (plataforma), **DR** (base), **TR** (título) e **IR** (item). As visualizações e filtros dependem da release. Não misture automaticamente o tratamento de acesso aberto entre R5 e R5.1.\n\n**Investigations** incluem interação com informação sobre o item; **Requests** registram acesso ao conteúdo integral. Uma requisição também é uma investigação. **Total** não significa contar toda repetição bruta: as regras de filtragem, inclusive duplo clique, continuam aplicáveis. **Unique** desduplica por item e sessão conforme as definições do padrão; não significa número de pessoas distintas no ano.\n\n**R5.1 e livros:** a contagem de segmentos mudou em relação à R5. Quando os segmentos são identificáveis, acessos ao livro podem ser reportados por segmento; **Unique_Title_Requests** permite analisar uso no nível do título. Portanto, não apresente Unique_Item_Requests como denominador obrigatório de qualquer cálculo de custo por uso.\n\nPara comparar contratos, explicite custo, período, conteúdo, release, filtro de acesso e unidade. R$ 30.000/1.500 requisições elegíveis = R$ 20 por requisição. Isso é custo por uso definido, não custo por pessoa nem prova de leitura integral. Com zero uso, o quociente não está definido: investigar implementação, visibilidade e adequação é mais útil que inventar custo zero.\n\n**Aplicação e recuperação:** Duas requisições do mesmo artigo em PDF e HTML na mesma sessão não significam dois itens únicos. A regra de livros varia entre R5 e R5.1.\n\n### Desbastamento vs. Descarte e a Teoria do Crescimento Zero\n\n**Desbastamento**, no tratamento de Vergueiro (*Desenvolvimento de coleções*, pp. 74–75), é mais amplo que expurgo. Pode envolver **descarte**, **remanejamento** e retirada para **conservação**. Não é correto atribuir ao autor a equivalência “desbastamento = apenas mudança para depósito, sem descarte”.\n\n| Operação | Efeito |\n|---|---|\n| Remanejamento | Mudança de local ou condição de acesso, mantendo o item na coleção. |\n| Descarte | Retirada definitiva do acervo, com registros e procedimentos patrimoniais aplicáveis. Não implica necessariamente destruição física. |\n| Conservação | Retirada para intervenção ou cuidado, com destino definido após avaliação. |\n\nTerminologias podem variar entre autores e instituições: leia a referência pedida no enunciado. No setor público, uma decisão técnica de descarte não substitui competência, documentação e procedimentos legais de baixa e destinação.\n\n### CREW e MUSTIE\n\nCREW é método de reavaliação contínua, associado ao mnemônico **MUSTIE**: informação enganosa, condição física inadequada, substituição por recurso melhor, trivialidade, irrelevância à comunidade e disponibilidade em outro lugar. São critérios de avaliação, não ordens automáticas de destruição. A existência de outra cópia não elimina a missão de preservação nem assegura acesso futuro. A Texas State Library informa que o manual CREW foi arquivado em 2025, sem plano de atualização; trate-o como referência metodológica histórica, sem inventar edição nova.\n\n### Crescimento zero\n\nA proposta associada a **Daniel Gore** busca estabilizar o tamanho da coleção disponível em espaço limitado por renovação, remanejamento e retirada criteriosa. Não exige interromper aquisições nem impõe a toda biblioteca uma regra legal de eliminar exatamente um item por entrada. Coleções patrimoniais e de depósito têm finalidades que precisam ser consideradas. Crescimento físico, desenvolvimento e qualidade são dimensões distintas.\n\n**Aplicação e recuperação:** Mover para depósito não é descarte; dar baixa definitiva é. Ambos podem integrar desbastamento no sentido amplo de Vergueiro.\n\n### Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)\n\nAvaliar a coleção consiste em determinar sua adequação aos objetivos da instituição e às necessidades dos usuários (Figueiredo, 1994; Lancaster, 1993):\n\n```tree\nTITLE: Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)\n- Métodos de Avaliação de Coleções | Determinação da adequação aos objetivos institucionais e usuários\n  - Centrados no Acervo (Baseados na coleção) | Combinam abordagens quantitativas e qualitativas sobre dimensão, cobertura e atualidade\n    - Listas de Verificação (Checklists) | Confrontação do acervo contra bibliografias especializadas de referência\n    - Opinião de Especialistas (Impressionista) | Pareceres de pesquisadores e docentes sobre a profundidade temática\n    - Idade Média e Obsolescência | Análise das datas de publicação para verificar desatualização\n    - Modelo Conspectus (RLG / WLN) | Escala padronizada de 0 a 5 de profundidade de cobertura\n  - Centrados no Uso (Comportamentais / Empíricos) | Medem a utilização real da coleção pela comunidade\n    - Estatísticas de Circulação e Consulta | Empréstimos domiciliares, renovações e uso de estante\n    - Relatórios COUNTER Release 5 | Métricas auditadas de Unique_Item_Requests em recursos eletrônicos\n    - Empréstimo Entre Bibliotecas (EEB) | Mapeamento das lacunas supridas por outras instituições\n    - Análise de Citações | Obras referenciadas em teses, artigos e notas técnicas da Casa\n    - Teste de Disponibilidade de Orr (DDT) | Taxa de sucesso do usuário em localizar o documento na estante\n```\n\n#### A. Métodos Centrados no Acervo\n* **Listas de Verificação (*Checklists*):** Confrontação do catálogo da biblioteca contra bibliografias especializadas e catálogos de grandes bibliotecas de referência.\n* **Avaliação por Especialistas (Método Impressionista):** Consulta a professores, juristas ou pesquisadores para que analisem as estantes e emitam parecer.\n  * *Fraqueza clássica:* O especialista avalia sob a ótica de sua pesquisa pessoal de ponta e frequentemente desconhece as necessidades reais e o nível cognitivo do público em geral.\n* **O Modelo *Conspectus* (RLG / WLN):**\n  Mapeia e padroniza a profundidade da cobertura da coleção em uma escala formal de 0 a 5:\n  * `Nível 0`: Fora do escopo institucional (*Out of scope*).\n  * `Nível 1`: Mínimo (*Minimal*).\n  * `Nível 2`: Informação Básica (*Basic*).\n  * `Nível 3`: Suporte ao Estudo ou à Instrução (*Study or Instructional Support*).\n  * `Nível 4`: Pesquisa (*Research*).\n  * `Nível 5`: Exaustivo / Abrangência Total (*Comprehensive*).\n\n\n\nNo Conspectus, o nível de pesquisa não é sinônimo estrito de um curso ou diploma. A descrição dos níveis serve para comparar cobertura existente, intensidade de desenvolvimento e objetivos. Pareceres de especialistas são qualitativos; pertencer a um grupo de métodos centrados no acervo não os torna automaticamente quantitativos.\n\n**Aplicação e recuperação:** Uma opinião de especialista é qualitativa mesmo quando focaliza a coleção. O objeto avaliado não determina sozinho a natureza do método.\n\n### Métodos Centrados no Uso e Gestão Orientada por Dados (CPU, COUNTER e Slote) Orientam Decisões Orçamentárias\n\n### Circulação, disponibilidade e demanda não atendida\n\nEstatísticas de empréstimo e consulta local respondem a perguntas diferentes. Um livro usado na sala pode nunca aparecer no empréstimo domiciliar. Logs medem eventos registrados, não toda utilização. Pedidos de empréstimo entre bibliotecas podem revelar lacunas, mas também especialização do usuário e cooperação planejada; não comprovam por si “graves falhas”.\n\nAnálise de citações identifica referências presentes em documentos da população estudada, com vieses de área, período, idioma e acesso. Testes de disponibilidade e entrega de documentos avaliam a capacidade de atender a uma demanda sob procedimentos definidos; não se reduzem sempre a localizar algo na estante.\n\n### Custo por uso e decisão de renovação\n\nEscolha métrica coerente, período equivalente e custo comparável. Considere relevância, alternativas, cobertura exclusiva, usuários prioritários, direitos pós-cancelamento, acessibilidade e custo de mudança. Um CPU alto é sinal para investigar, não uma ordem automática de cancelar. DDA, EBA e pagamento por acesso avulso são modelos diferentes, embora possam compor estratégias de aquisição.\n\n**Exemplo resolvido:** pacote de R$ 200.000 com 400 usos elegíveis tem R$ 500 por uso. Antes de cancelar, compare o atendimento das demandas críticas, as condições de aquisição alternativa e os direitos preservados. Não use preços avulsos internacionais fixos sem pesquisa atualizada.\n\n### Obsolescência, meia-vida e último uso\n\nA **meia-vida de citações**, em recorte retrospectivo, é a idade que divide as referências ou citações observadas em duas metades. Declínio de uso de coortes ao longo do tempo é outra forma de estudar envelhecimento. Não equivale a prever que metade das obras perderá todo valor em certo número de anos. Áreas e tipos de documento diferem; não há prazo universal de 2–4 anos para tecnologia ou 10–20 para todo o Direito.\n\n**Slote** utiliza padrões de uso, especialmente tempo desde o último uso, para apoiar desbastamento. Baixo uso passado pode orientar investigação, mas não é critério suficiente para itens históricos, raros, locais, de referência ou de reserva. Não há garantia geral de atender 95% a 99% da demanda apenas com um corte de cinco anos. Projeções exigem dados da população, finalidade e validação.\n\n**Decisão integrada:** combine conteúdo, condições físicas, missão, evidências de uso, disponibilidade alternativa e custos. Registre a justificativa e reavalie a política. Seleção, preservação e avaliação devem dialogar; um indicador de circulação não decide sozinho o valor patrimonial.\n\n**Aplicação e recuperação:** Uma lei revogada pode ser inútil como atualização normativa e indispensável como fonte histórica. O critério depende da finalidade.",
  teoriaDidaticaMarkdown: "Desenvolvimento de coleções vai além de comprar. Evans é o autor do modelo apresentado por Vergueiro; a descrição da comunidade traz uma exceção gráfica para aquisição. Política orienta e protege decisões. Desbastamento abrange mais que remanejamento. Licença perpétua não garante preservação. COUNTER exige versão, unidade e filtros; uso não prova aprendizagem. Meia-vida não é prazo de validade e baixo uso não determina descarte.",
  checkpoints: [
  {
    "id": "cp-5-3-1",
    "pergunta": "Micro-Checkpoint 1: Política de Seleção e suas Funções",
    "item": "O documento formal de política de desenvolvimento de coleções de uma biblioteca possui finalidades exclusivamente técnicas e administrativas, não exercendo papel na mediação de conflitos ou na proteção institucional do profissional.",
    "gabarito": "E",
    "justificativa": "Errado! A política possui caráter administrativo, político e de relações públicas, servindo justamente como escudo institucional contra pressões e censura.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "versao_correta": "A política tem funções administrativas, políticas e de comunicação com a comunidade."
  },
  {
    "id": "cp-5-3-2",
    "pergunta": "Micro-Checkpoint 2: Diferença entre Desbastamento e Descarte",
    "item": "No tratamento de Vergueiro, o desbastamento pode abranger remanejamento e descarte; o primeiro mantém o item na coleção em outra localização, enquanto o segundo representa retirada definitiva, sujeita aos procedimentos aplicáveis.",
    "gabarito": "C",
    "justificativa": "Certo. Desbastamento é conceito amplo no PDF, pp. 74–75. A redação anterior o restringia indevidamente ao remanejamento. Descarte não significa obrigatoriamente destruição física.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso."
  },
  {
    "id": "cp-5-3-3",
    "pergunta": "Micro-Checkpoint 3: Licenciamento Digital e Métricas COUNTER Release 5 (Caso)",
    "item": "Para calcular custo por requisição de textos integrais de artigos no período avaliado, a biblioteca pode usar Unique_Item_Requests de relatório COUNTER compatível, em vez de tratar toda investigação de resumo como consumo do texto integral.",
    "gabarito": "C",
    "justificativa": "Certo. A unidade definida é requisição única de conteúdo integral; investigação também inclui interações preliminares. Não se infere que essa seja a métrica obrigatória para qualquer recurso, qualquer finalidade ou release.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso."
  },
  {
    "id": "rt-5-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O modelo de desenvolvimento de coleções apresentado por Vergueiro foi elaborado por Evans.",
    "gabarito": "C",
    "justificativa": "O PDF atribui expressamente o modelo a G. Edward Evans.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-5-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A política de coleções é imutável depois de sua aprovação.",
    "gabarito": "E",
    "justificativa": "Mudanças de missão, públicos e recursos justificam revisão.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar",
    "versao_correta": "A política deve prever revisão e atualização fundamentadas."
  },
  {
    "id": "rt-5-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma comissão pode dispensar critérios de seleção por decidir coletivamente.",
    "gabarito": "E",
    "justificativa": "Decisão colegiada também exige critérios e documentação.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar",
    "versao_correta": "A seleção colegiada deve observar critérios e responsabilidades definidos."
  },
  {
    "id": "rt-5-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A licença de uma base proprietária dispensa automaticamente demonstração de inviabilidade de competição.",
    "gabarito": "E",
    "justificativa": "Contratação direta exige fundamento, instrução e demonstração pertinentes.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar",
    "versao_correta": "A inviabilidade de competição precisa ser demonstrada no caso concreto."
  },
  {
    "id": "rt-5-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Unique_Item_Requests corresponde necessariamente ao número anual de pessoas distintas que utilizaram o recurso.",
    "gabarito": "E",
    "justificativa": "A unicidade se refere ao item e à sessão, não a pessoas anuais.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar",
    "versao_correta": "A métrica registra requisições únicas segundo as regras de item e sessão."
  },
  {
    "id": "rt-5-3-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No sentido amplo adotado por Vergueiro, o descarte pode integrar o desbastamento.",
    "gabarito": "C",
    "justificativa": "As páginas 74–75 abrangem descarte, remanejamento e conservação.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-5-3-7",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Métodos centrados no acervo podem incluir avaliações qualitativas.",
    "gabarito": "C",
    "justificativa": "A análise por especialistas é exemplo; objeto e natureza do método são classificações distintas.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-5-3-8",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O baixo uso histórico de uma obra basta para ordenar seu descarte, independentemente da missão de preservação.",
    "gabarito": "E",
    "justificativa": "É necessário considerar valor, missão, conteúdo e alternativas.",
    "fonte": "Vergueiro — Desenvolvimento de coleções — pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.; COUNTER — Code of Practice R5.1 — Contagem de itens, segmentos de livros, sessões e métricas.; COUNTER — Metrics — Seleção e interpretação de métricas conforme a pergunta.; Texas State Library — CREW — Situação do manual arquivado em 2025; método e terminologia histórica.; IFLA — Guidelines for a Collection Development Policy using the Conspectus Model — Níveis e elaboração de política.; Lei 14.133/2021 — Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "editalRef": "Bloco D - Item 4.7 e Bloco E - Item 1.7",
    "habilidade": "aplicar",
    "versao_correta": "Dados de uso apoiam, sem substituir, avaliação técnica e patrimonial."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-5-3-fonte-60aa44d218a8",
      "nome": "Vergueiro — Desenvolvimento de coleções",
      "ano": "Referência de consulta",
      "obraPrincipal": "Vergueiro — Desenvolvimento de coleções",
      "ideiaChave": "pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-5-3-fonte-counter",
      "nome": "COUNTER — Code of Practice R5.1",
      "ano": "Referência de consulta",
      "obraPrincipal": "COUNTER — Code of Practice R5.1",
      "ideiaChave": "Contagem de itens, segmentos de livros, sessões e métricas.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-5-3-fonte-metrics",
      "nome": "COUNTER — Metrics",
      "ano": "Referência de consulta",
      "obraPrincipal": "COUNTER — Metrics",
      "ideiaChave": "Seleção e interpretação de métricas conforme a pergunta.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-5-3-fonte-crew",
      "nome": "Texas State Library — CREW",
      "ano": "Referência de consulta",
      "obraPrincipal": "Texas State Library — CREW",
      "ideiaChave": "Situação do manual arquivado em 2025; método e terminologia histórica.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-5-3-fonte-conspectus",
      "nome": "IFLA — Guidelines for a Collection Development Policy using the Conspectus Model",
      "ano": "Referência de consulta",
      "obraPrincipal": "IFLA — Guidelines for a Collection Development Policy using the Conspectus Model",
      "ideiaChave": "Níveis e elaboração de política.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-5-3-fonte-licitacao",
      "nome": "Lei 14.133/2021",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 14.133/2021",
      "ideiaChave": "Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-5-3-6",
      "afirmacao": "No sentido amplo adotado por Vergueiro, o descarte pode integrar o desbastamento.",
      "gabarito": "C",
      "porQue": "As páginas 74–75 abrangem descarte, remanejamento e conservação."
    },
    {
      "id": "memoria-rt-5-3-7",
      "afirmacao": "Métodos centrados no acervo podem incluir avaliações qualitativas.",
      "gabarito": "C",
      "porQue": "A análise por especialistas é exemplo; objeto e natureza do método são classificações distintas."
    },
    {
      "id": "memoria-rt-5-3-8",
      "afirmacao": "O baixo uso histórico de uma obra basta para ordenar seu descarte, independentemente da missão de preservação.",
      "gabarito": "E",
      "porQue": "É necessário considerar valor, missão, conteúdo e alternativas."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-5-3-bloco-1",
    "titulo": "O Conceito e a Evolução do Desenvolvimento de Coleções",
    "objetivos": [
      "Interpretar o modelo de Evans apresentado por Vergueiro com suas condições."
    ],
    "conteudo": "Desenvolvimento de coleções é um processo planejado, contínuo e integrado: conhecer a comunidade, estabelecer políticas, selecionar, adquirir, desbastar e avaliar. Compra é apenas uma de suas operações. O tipo de biblioteca, sua missão, seus públicos e seus recursos alteram prioridades; não existe uma coleção ideal universal.\n\n**Evans e Vergueiro:** no PDF *Desenvolvimento de coleções*, pp. 15–17, Vergueiro apresenta o modelo elaborado por **G. Edward Evans**, com fases interdependentes. Não se deve atribuir sua criação a Vergueiro. O diagrama articula estudo da comunidade, políticas de seleção, seleção, aquisição, desbastamento e avaliação.\n\nHá uma particularidade que importa ao interpretar a fonte: o texto de Vergueiro indica a comunidade envolvendo as fases **com exceção da aquisição** no desenho do modelo. Isso não significa que, na prática gerencial, compras possam ignorar necessidades; significa que não se deve apagar a exceção ao descrever literalmente o modelo.\n\n**Raciocínio aplicado:** a avaliação pode revelar que uma área prioritária está pouco atendida; o diagnóstico pode levar à revisão da política, da seleção, das licenças ou da divulgação. O ciclo não exige esperar uma volta completa para corrigir falhas. Uma coleção cresce, se transforma e pode reduzir-se em certas áreas de modo justificado.\n\n**Aplicação e recuperação:** Na descrição literal do modelo de Evans apresentado por Vergueiro, lembre a exceção da aquisição; na gestão prática, não conclua que comprar possa ignorar a comunidade.",
    "checkpointIds": [
      "rt-5-3-1"
    ]
  },
  {
    "id": "sub-5-3-bloco-2",
    "titulo": "O Documento Formal de Política de Desenvolvimento de Coleções (PDC)",
    "objetivos": [
      "Relacionar funções e revisão da política de coleções."
    ],
    "conteudo": "O documento de política é o instrumento normativo norteador da gestão de acervos. Conforme a doutrina (Vergueiro, Weitzel, Evans, Johnson), possui **tríplice caráter**:\n\n1. **Caráter Administrativo:**\n   * Estabelece regras claras, rotinas padronizadas e critérios uniformes.\n   * Racionaliza o orçamento e justifica as solicitações de verbas perante a administração superior do órgão.\n2. **Caráter Político:**\n   * Atua como **escudo institucional** para o bibliotecário e para a equipe técnica.\n   * Protege o acervo contra tentativas de **censura ideológica, moral ou religiosa**, pressões partidárias e ingerências de dirigentes que desejem impor a compra ou o descarte arbitrário de determinadas obras.\n3. **Caráter de Relações Públicas:**\n   * Torna públicos e transparentes os critérios e prioridades adotados pela biblioteca perante a comunidade acadêmica, servidores e parlamentares.\n   * Informa claramente as regras para aceitação de doações, evitando melindres de doadores cujos materiais não se enquadrem no escopo do acervo.\n\n#### Estrutura Básica do Documento de Política (Weitzel):\n* **Identificação institucional:** Histórico, missão e objetivos do órgão.\n* **Público-alvo:** Usuários reais e potenciais e suas demandas prioritárias.\n* **Responsabilidade pela seleção:** Definição dos papéis da equipe de bibliotecários, da comissão de seleção e dos especialistas.\n* **Critérios gerais e específicos de seleção:** Conteúdo, escopo, idioma, suporte físico/digital, custo e atualidade.\n* **Modalidades de aquisição e licenciamento:** Regras para compra, doação, permuta e assinaturas eletrônicas.\n* **Políticas de desbastamento e descarte:** Prazos, critérios de expurgo e destinação final dos itens baixados.\n* **Políticas de preservação e conservação:** Diretrizes de encadernação, higienização e digitalização.\n* **Metodologia de avaliação da coleção:** Indicadores e periodicidade dos diagnósticos (métodos tradicionais e relatórios COUNTER).\n* **Revisão periódica do documento:** Cláusula estipulando que o documento deve ser reavaliado formalmente em prazo definido pela instituição e quando mudanças relevantes exigirem; não há intervalo universal de 2, 3 ou 5 anos.\n\n**Aplicação e recuperação:** A política deve explicar por que uma doação fora do escopo não será incorporada. Critérios públicos reduzem arbitrariedade e conflitos.",
    "checkpointIds": [
      "cp-5-3-1",
      "rt-5-3-2"
    ]
  },
  {
    "id": "sub-5-3-bloco-3",
    "titulo": "Critérios de Seleção e Comissões de Seleção",
    "objetivos": [
      "Ponderar critérios e responsabilidades na seleção."
    ],
    "conteudo": "A seleção é o **processo intelectual de tomada de decisão** no qual se determina quais títulos devem ou não ingressar no acervo.\n\n#### A. Critérios Canônicos de Vergueiro:\n* **Critérios Relativos ao Conteúdo do Documento:**\n  * *Autoridade:* Notoriedade e qualificação acadêmica/profissional do autor e prestígio da editora.\n  * *Exatidão / Precisão:* Rigor científico, correção factual e ausência de erros grosseiros.\n  * *Atualidade:* Data de publicação em confronto com o dinamismo da disciplina (ex.: livros de Direito e Tecnologia exigem extrema atualidade; obras de História têm meia-vida longa).\n  * *Imparcialidade:* Equilíbrio de pontos de vista, especialmente em temas legislativos e sociais controvertidos.\n  * *Profundidade e Escopo:* Nível de tratamento do assunto (introdutório, intermediário ou pesquisa avançada).\n* **Critérios Relativos ao Usuário:**\n  * Grau de adequação ao nível cognitivo, estilo, linguagem e necessidades reais da comunidade.\n* **Critérios Relativos aos Aspectos Físicos e Tecnológicos:**\n  * Durabilidade do papel, encadernação, legibilidade tipográfica, compatibilidade de formatos eletrônicos (e-books sem DRMs restritivos) e requisitos de infraestrutura.\n* **Critérios Relativos ao Custo:**\n  * Relação custo-benefício em confronto com a disponibilidade orçamentária.\n\n#### B. Atores da Seleção e a Comissão de Seleção:\n* A definição dos responsáveis depende da política institucional; decisões colegiadas podem ampliar a participação e reduzir arbitrariedade, sem serem uma obrigação universal em qualquer biblioteca.\n* Recomenda-se a instituição de uma **Comissão de Seleção mista**, composta por bibliotecários (que dominam os princípios biblioteconômicos, o orçamento e a completude do acervo) e representantes dos usuários/especialistas temáticos (consultores legislativos, professores ou pesquisadores).\n* A coordenação executiva da comissão cabe preferencialmente ao bibliotecário.\n\n---\n\n\n\nCritérios não se aplicam mecanicamente: uma obra parcial ou polêmica pode ser importante para representar uma corrente de pensamento. Atualidade também depende da finalidade: uma norma revogada pode continuar relevante para história legislativa, sem servir como descrição do direito vigente. Comissão mista é recomendação de organização; composição e competência devem obedecer à política e à regulamentação institucional.\n\n**Aplicação e recuperação:** Uma obra de opinião controversa pode atender à pluralidade do acervo. Avaliar não significa exigir concordância do bibliotecário com o autor.",
    "checkpointIds": [
      "rt-5-3-3"
    ]
  },
  {
    "id": "sub-5-3-bloco-4",
    "titulo": "Modalidades de Aquisição Tradicionais: Compra, Doação e Permuta",
    "objetivos": [
      "Distinguir seleção, aquisição e procedimentos patrimoniais."
    ],
    "conteudo": "A aquisição é o **processo operacional** que concretiza a incorporação física ou o acesso institucional aos recursos selecionados:\n\n#### A. Compra\n* **No Setor Público (Lei nº 14.133/2021 - Nova Lei de Licitações):**\n  * As compras de acervos bibliográficos devem seguir o regime da Lei 14.133/2021.\n  * *Inexigibilidade de Licitação (art. 74):* Aplicável quando houver inviabilidade de competição, como na contratação direta de fornecedor/editora exclusivo ou outras situações efetivamente demonstradas de inviabilidade de competição. Ser base proprietária, por si só, não comprova exclusividade nem inviabilidade.\n  * *Dispensa de Licitação (art. 75):* Aplicável em compras de pequeno valor dentro dos limites estipulados em lei ou em casos emergenciais.\n  * *Uso de Desideratas:* Listas de títulos desejados ou lacunas de aquisição; não se restringem a obras esgotadas ou a compras em sebos.\n\n#### B. Doação\n* **Diretriz Canônica:** Uma biblioteca não deve aceitar indiscriminadamente tudo o que lhe é oferecido. Acervos obsoletos, danificados ou fora de escopo transformam a biblioteca em depósito de entulho (*lixo bibliográfico*).\n* A política deve estipular que a aceitação de doações observará critérios e procedimentos previamente informados, distinguindo recebimento para avaliação e incorporação definitiva.\n* Condições devem ser documentadas em instrumento apropriado. A autorização do doador não dispensa procedimentos patrimoniais nem permite ao gestor público dar baixa ou alienar bens sem observar a legislação.\n* Não se devem aceitar doações com exigências descabidas (ex.: exigência de manter uma coleção fechada e isolada em sala especial).\n\n#### C. Permuta (Intercâmbio)\n* Troca sistemática de publicações institucionais (livros, anais de comissões, Revista de Informação Legislativa) entre entidades congêneres (Câmara, Senado, STF, universidades federais).\n* Exige o controle de listas de duplicatas e equivalência de valor informativo entre os órgãos conveniados.\n\n**Aplicação e recuperação:** Uma base proprietária possui distribuidor exclusivo? Documente a inviabilidade real de competição e a justificativa da escolha; o adjetivo “proprietária” não resolve o processo.",
    "checkpointIds": [
      "rt-5-3-4"
    ]
  },
  {
    "id": "sub-5-3-bloco-5",
    "titulo": "Licenciamento de Conteúdos Digitais e Métricas de Uso: Padrão COUNTER (Itens 4.5 a 4.7 do Edital)",
    "objetivos": [
      "Interpretar licenças e métricas conforme versão e objetivo."
    ],
    "conteudo": "### Modelos de acesso e condições contratuais\n\nAdquirir o exemplar impresso não transfere direitos de reprodução. No digital, o acesso frequentemente depende de licença; acesso aberto também pode ter condições de reutilização. Examine usuários autorizados, simultaneidade, autenticação, acessibilidade, empréstimo entre bibliotecas, mineração de textos e dados, estatísticas, privacidade, preservação e saída do contrato.\n\n| Modelo | Funcionamento e limite |\n|---|---|\n| Assinatura | Pagamento recorrente por acesso no período. Direitos pós-cancelamento dependem de contrato. |\n| Acesso perpétuo | Direito contratual de acesso continuado a conteúdo definido. Não garante, sozinho, plataforma eterna, arquivo local ou preservação. |\n| DDA/PDA | Uso pode acionar aquisição segundo critérios pactuados, orçamento e controles; não se resume a um número universal de cliques. |\n| EBA | Acesso a conjunto por período acordado e seleção posterior informada por evidências, conforme os termos. Não precisa durar exatamente doze meses. |\n| Consórcio | Negociação cooperativa; pode melhorar condições, sem garantir automaticamente menor custo ou adequação. |\n\nCustódia independente, como LOCKSS, CLOCKSS e Portico, exige verificar cobertura, contrato e condições de acesso em eventos de descontinuidade. Não basta citar o serviço para garantir preservação. Dados de uso identificáveis exigem finalidade, base legal, minimização e proteção; a LGPD não proíbe toda coleta de dados necessária ao serviço.\n\n### COUNTER, SUSHI e escolha da métrica\n\nCOUNTER publica regras para tornar estatísticas mais consistentes e comparáveis. Certificação e auditoria não tornam fraudes ou erros impossíveis. SUSHI automatiza a obtenção dos relatórios; a implementação COUNTER R5/R5.1 utiliza API REST e JSON, enquanto o SUSHI original teve serviços XML/SOAP. Não atribua uma única arquitetura a toda a história do padrão.\n\nOs relatórios principais são **PR** (plataforma), **DR** (base), **TR** (título) e **IR** (item). As visualizações e filtros dependem da release. Não misture automaticamente o tratamento de acesso aberto entre R5 e R5.1.\n\n**Investigations** incluem interação com informação sobre o item; **Requests** registram acesso ao conteúdo integral. Uma requisição também é uma investigação. **Total** não significa contar toda repetição bruta: as regras de filtragem, inclusive duplo clique, continuam aplicáveis. **Unique** desduplica por item e sessão conforme as definições do padrão; não significa número de pessoas distintas no ano.\n\n**R5.1 e livros:** a contagem de segmentos mudou em relação à R5. Quando os segmentos são identificáveis, acessos ao livro podem ser reportados por segmento; **Unique_Title_Requests** permite analisar uso no nível do título. Portanto, não apresente Unique_Item_Requests como denominador obrigatório de qualquer cálculo de custo por uso.\n\nPara comparar contratos, explicite custo, período, conteúdo, release, filtro de acesso e unidade. R$ 30.000/1.500 requisições elegíveis = R$ 20 por requisição. Isso é custo por uso definido, não custo por pessoa nem prova de leitura integral. Com zero uso, o quociente não está definido: investigar implementação, visibilidade e adequação é mais útil que inventar custo zero.\n\n**Aplicação e recuperação:** Duas requisições do mesmo artigo em PDF e HTML na mesma sessão não significam dois itens únicos. A regra de livros varia entre R5 e R5.1.",
    "checkpointIds": [
      "cp-5-3-3",
      "rt-5-3-5"
    ]
  },
  {
    "id": "sub-5-3-bloco-6",
    "titulo": "Desbastamento vs. Descarte e a Teoria do Crescimento Zero",
    "objetivos": [
      "Diferenciar desbastamento, remanejamento e descarte na fonte indicada."
    ],
    "conteudo": "**Desbastamento**, no tratamento de Vergueiro (*Desenvolvimento de coleções*, pp. 74–75), é mais amplo que expurgo. Pode envolver **descarte**, **remanejamento** e retirada para **conservação**. Não é correto atribuir ao autor a equivalência “desbastamento = apenas mudança para depósito, sem descarte”.\n\n| Operação | Efeito |\n|---|---|\n| Remanejamento | Mudança de local ou condição de acesso, mantendo o item na coleção. |\n| Descarte | Retirada definitiva do acervo, com registros e procedimentos patrimoniais aplicáveis. Não implica necessariamente destruição física. |\n| Conservação | Retirada para intervenção ou cuidado, com destino definido após avaliação. |\n\nTerminologias podem variar entre autores e instituições: leia a referência pedida no enunciado. No setor público, uma decisão técnica de descarte não substitui competência, documentação e procedimentos legais de baixa e destinação.\n\n### CREW e MUSTIE\n\nCREW é método de reavaliação contínua, associado ao mnemônico **MUSTIE**: informação enganosa, condição física inadequada, substituição por recurso melhor, trivialidade, irrelevância à comunidade e disponibilidade em outro lugar. São critérios de avaliação, não ordens automáticas de destruição. A existência de outra cópia não elimina a missão de preservação nem assegura acesso futuro. A Texas State Library informa que o manual CREW foi arquivado em 2025, sem plano de atualização; trate-o como referência metodológica histórica, sem inventar edição nova.\n\n### Crescimento zero\n\nA proposta associada a **Daniel Gore** busca estabilizar o tamanho da coleção disponível em espaço limitado por renovação, remanejamento e retirada criteriosa. Não exige interromper aquisições nem impõe a toda biblioteca uma regra legal de eliminar exatamente um item por entrada. Coleções patrimoniais e de depósito têm finalidades que precisam ser consideradas. Crescimento físico, desenvolvimento e qualidade são dimensões distintas.\n\n**Aplicação e recuperação:** Mover para depósito não é descarte; dar baixa definitiva é. Ambos podem integrar desbastamento no sentido amplo de Vergueiro.",
    "checkpointIds": [
      "cp-5-3-2",
      "rt-5-3-6"
    ]
  },
  {
    "id": "sub-5-3-bloco-7",
    "titulo": "Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)",
    "objetivos": [
      "Comparar métodos quantitativos e qualitativos de avaliação."
    ],
    "conteudo": "Avaliar a coleção consiste em determinar sua adequação aos objetivos da instituição e às necessidades dos usuários (Figueiredo, 1994; Lancaster, 1993):\n\n```tree\nTITLE: Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)\n- Métodos de Avaliação de Coleções | Determinação da adequação aos objetivos institucionais e usuários\n  - Centrados no Acervo (Baseados na coleção) | Combinam abordagens quantitativas e qualitativas sobre dimensão, cobertura e atualidade\n    - Listas de Verificação (Checklists) | Confrontação do acervo contra bibliografias especializadas de referência\n    - Opinião de Especialistas (Impressionista) | Pareceres de pesquisadores e docentes sobre a profundidade temática\n    - Idade Média e Obsolescência | Análise das datas de publicação para verificar desatualização\n    - Modelo Conspectus (RLG / WLN) | Escala padronizada de 0 a 5 de profundidade de cobertura\n  - Centrados no Uso (Comportamentais / Empíricos) | Medem a utilização real da coleção pela comunidade\n    - Estatísticas de Circulação e Consulta | Empréstimos domiciliares, renovações e uso de estante\n    - Relatórios COUNTER Release 5 | Métricas auditadas de Unique_Item_Requests em recursos eletrônicos\n    - Empréstimo Entre Bibliotecas (EEB) | Mapeamento das lacunas supridas por outras instituições\n    - Análise de Citações | Obras referenciadas em teses, artigos e notas técnicas da Casa\n    - Teste de Disponibilidade de Orr (DDT) | Taxa de sucesso do usuário em localizar o documento na estante\n```\n\n#### A. Métodos Centrados no Acervo\n* **Listas de Verificação (*Checklists*):** Confrontação do catálogo da biblioteca contra bibliografias especializadas e catálogos de grandes bibliotecas de referência.\n* **Avaliação por Especialistas (Método Impressionista):** Consulta a professores, juristas ou pesquisadores para que analisem as estantes e emitam parecer.\n  * *Fraqueza clássica:* O especialista avalia sob a ótica de sua pesquisa pessoal de ponta e frequentemente desconhece as necessidades reais e o nível cognitivo do público em geral.\n* **O Modelo *Conspectus* (RLG / WLN):**\n  Mapeia e padroniza a profundidade da cobertura da coleção em uma escala formal de 0 a 5:\n  * `Nível 0`: Fora do escopo institucional (*Out of scope*).\n  * `Nível 1`: Mínimo (*Minimal*).\n  * `Nível 2`: Informação Básica (*Basic*).\n  * `Nível 3`: Suporte ao Estudo ou à Instrução (*Study or Instructional Support*).\n  * `Nível 4`: Pesquisa (*Research*).\n  * `Nível 5`: Exaustivo / Abrangência Total (*Comprehensive*).\n\n\n\nNo Conspectus, o nível de pesquisa não é sinônimo estrito de um curso ou diploma. A descrição dos níveis serve para comparar cobertura existente, intensidade de desenvolvimento e objetivos. Pareceres de especialistas são qualitativos; pertencer a um grupo de métodos centrados no acervo não os torna automaticamente quantitativos.\n\n**Aplicação e recuperação:** Uma opinião de especialista é qualitativa mesmo quando focaliza a coleção. O objeto avaliado não determina sozinho a natureza do método.",
    "checkpointIds": [
      "rt-5-3-7"
    ]
  },
  {
    "id": "sub-5-3-bloco-8",
    "titulo": "Métodos Centrados no Uso e Gestão Orientada por Dados (CPU, COUNTER e Slote) Orientam Decisões Orçamentárias",
    "objetivos": [
      "Integrar métricas de uso e missão sem decisões automáticas."
    ],
    "conteudo": "### Circulação, disponibilidade e demanda não atendida\n\nEstatísticas de empréstimo e consulta local respondem a perguntas diferentes. Um livro usado na sala pode nunca aparecer no empréstimo domiciliar. Logs medem eventos registrados, não toda utilização. Pedidos de empréstimo entre bibliotecas podem revelar lacunas, mas também especialização do usuário e cooperação planejada; não comprovam por si “graves falhas”.\n\nAnálise de citações identifica referências presentes em documentos da população estudada, com vieses de área, período, idioma e acesso. Testes de disponibilidade e entrega de documentos avaliam a capacidade de atender a uma demanda sob procedimentos definidos; não se reduzem sempre a localizar algo na estante.\n\n### Custo por uso e decisão de renovação\n\nEscolha métrica coerente, período equivalente e custo comparável. Considere relevância, alternativas, cobertura exclusiva, usuários prioritários, direitos pós-cancelamento, acessibilidade e custo de mudança. Um CPU alto é sinal para investigar, não uma ordem automática de cancelar. DDA, EBA e pagamento por acesso avulso são modelos diferentes, embora possam compor estratégias de aquisição.\n\n**Exemplo resolvido:** pacote de R$ 200.000 com 400 usos elegíveis tem R$ 500 por uso. Antes de cancelar, compare o atendimento das demandas críticas, as condições de aquisição alternativa e os direitos preservados. Não use preços avulsos internacionais fixos sem pesquisa atualizada.\n\n### Obsolescência, meia-vida e último uso\n\nA **meia-vida de citações**, em recorte retrospectivo, é a idade que divide as referências ou citações observadas em duas metades. Declínio de uso de coortes ao longo do tempo é outra forma de estudar envelhecimento. Não equivale a prever que metade das obras perderá todo valor em certo número de anos. Áreas e tipos de documento diferem; não há prazo universal de 2–4 anos para tecnologia ou 10–20 para todo o Direito.\n\n**Slote** utiliza padrões de uso, especialmente tempo desde o último uso, para apoiar desbastamento. Baixo uso passado pode orientar investigação, mas não é critério suficiente para itens históricos, raros, locais, de referência ou de reserva. Não há garantia geral de atender 95% a 99% da demanda apenas com um corte de cinco anos. Projeções exigem dados da população, finalidade e validação.\n\n**Decisão integrada:** combine conteúdo, condições físicas, missão, evidências de uso, disponibilidade alternativa e custos. Registre a justificativa e reavalie a política. Seleção, preservação e avaliação devem dialogar; um indicador de circulação não decide sozinho o valor patrimonial.\n\n**Aplicação e recuperação:** Uma lei revogada pode ser inútil como atualização normativa e indispensável como fonte histórica. O critério depende da finalidade.",
    "checkpointIds": [
      "rt-5-3-8"
    ]
  }
],
fontesTeoria: [
  {
    "id": "60aa44d218a8",
    "titulo": "Vergueiro — Desenvolvimento de coleções",
    "localizador": "pp. 15–17: modelo de Evans e exceção da aquisição; pp. 74–75: amplitude de desbastamento.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Gest%C3%A3o%20e%20Cole%C3%A7%C3%B5es/Desenvolvimento-de-colecoes.pdf"
  },
  {
    "id": "counter",
    "titulo": "COUNTER — Code of Practice R5.1",
    "localizador": "Contagem de itens, segmentos de livros, sessões e métricas.",
    "url": "https://cop5.countermetrics.org/en/5.1.1/07-processing/03-counting-unique-items.html"
  },
  {
    "id": "metrics",
    "titulo": "COUNTER — Metrics",
    "localizador": "Seleção e interpretação de métricas conforme a pergunta.",
    "url": "https://www.countermetrics.org/education/metrics/"
  },
  {
    "id": "crew",
    "titulo": "Texas State Library — CREW",
    "localizador": "Situação do manual arquivado em 2025; método e terminologia histórica.",
    "url": "https://www.tsl.texas.gov/ld/pubs/crew/index.html"
  },
  {
    "id": "conspectus",
    "titulo": "IFLA — Guidelines for a Collection Development Policy using the Conspectus Model",
    "localizador": "Níveis e elaboração de política.",
    "url": "https://www.ifla.org/files/assets/acquisition-collection-development/publications/gcdp-en.pdf"
  },
  {
    "id": "licitacao",
    "titulo": "Lei 14.133/2021",
    "localizador": "Arts. 72, 74–76: contratação direta e alienação segundo o caso.",
    "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm"
  }
],
};
