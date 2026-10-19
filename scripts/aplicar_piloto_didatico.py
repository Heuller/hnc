import os

PILOTO_SUB_1_1 = r"""### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Para o **Cebraspe**, o universo da informação organiza-se historicamente em três disciplinas complementares com marcos, objetos e focos distintos:
1. **Biblioteconomia (Antiguidade ao séc. XIX):** Centrada na **instituição biblioteca** e no **livro impresso**. Sua missão histórica começou na custódia e preservação patrimonial e evoluiu (com Dewey e Ranganathan) para a democratização e o livre acesso social.
2. **Documentação (Otlet e Briet, 1895/1934):** Rompe com o livro como suporte único. Seu objeto é o **documento em qualquer suporte físico** (artigos, relatórios, patentes, fotografias, microfilmes). Introduz o **princípio monográfico** (fracionamento e indexação analítica de partes).
3. **Ciência da Informação - CI (Pós-Segunda Guerra, 1968):** Consolidada pela definição canônica de **Harold Borko (1968)**. Não tem como objeto uma instituição nem um suporte, mas **a informação em si**: suas propriedades, comportamento, fluxos, forças sociais e meios de processamento para ótima recuperação (*Information Retrieval*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
Como o Analista Legislativo - Bibliotecário vivencia essa tríade na rotina da Câmara:
- **Cenário 1 (Biblioteconomia no Acervo Raro):** Ao salvaguardar um exemplar original da *Constituição de 1824* na Seção de Obras Raras da Biblioteca Pedro Aleixo, você aplica a tradição biblioteconômica de custódia, higienização e organização patrimonial.
- **Cenário 2 (Documentação nas Comissões Temáticas):** Ao receber um projeto de lei de 300 páginas e extrair separadamente os pareceres das subcomissões, as notas técnicas de consultores e os votos em separado para indexação isolada no Sileg, você aplica rigorosamente o **princípio monográfico de Paul Otlet**.
- **Cenário 3 (Ciência da Informação na Busca Legislativa):** Ao modelar os filtros semânticos e a busca por relevância na base de dados legislativa do portal da Câmara — garantindo que deputados encontrem normas correlatas em segundos durante uma votação em plenário —, você atua como um cientista da informação gerindo fluxos e recuperação da informação.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério de Prova | Biblioteconomia | Documentação | Ciência da Informação |
| :--- | :--- | :--- | :--- |
| **Objeto Central** | O livro e a biblioteca física | O documento em qualquer suporte | A informação (fluxos e propriedades) |
| **Marco Canônico** | Antiguidade / Melvil Dewey (1876) | Paul Otlet e Henri La Fontaine (1895) | Harold Borko (1968) / Saracevic |
| **Público Primário** | Leitores gerais e comunidade social | Cientistas e pesquisadores especializados | Usuários de redes e sistemas digitais |
| **Técnica Típica** | Catálogo em fichas / estantes abertas | Repertório Bibliográfico / fichas analíticas | Algoritmos de busca / tesauros / IA |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Armadilha do Autor Trocado:** A banca adora colocar o texto literal de Harold Borko (*"disciplina que investiga as propriedades e o comportamento da informação..."*) e afirmar que se trata da definição clássica de Biblioteconomia. **Gabarito: ERRADO.**
- **Armadilha da Substituição Histórica:** Dizer que a Documentação ou a CI "tornaram obsoleta" ou "substituíram integralmente" a Biblioteconomia. **Gabarito: ERRADO.** As disciplinas convivem e complementam-se.
- **Divisão de Le Coadic:** Lembre-se: *Biblioteconomia dos livros* = foco na gestão física e tratamento técnico do acervo; *Biblioteconomia dos leitores* = foco na mediação humana, necessidades e uso social da informação.

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
Antes de responder aos checkpoints, feche os olhos por 15 segundos e responda mentalmente:
1. *Quem definiu a Ciência da Informação em 1968?* (Harold Borko).
2. *Qual o marco e o princípio central da Documentação?* (1895 / Princípio Monográfico de Paul Otlet).
3. *A Biblioteconomia cuida do quê?* (Do livro, da coleção e de sua função social na biblioteca)."""

PILOTO_SUB_1_2 = r"""### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Em 1931, o bibliotecário indiano **Shiyali Ramamrita Ranganathan** sintetizou toda a filosofia dos serviços bibliotecários em **Cinco Leis Fundamentais**:
1. **1ª Lei: Os livros são para usar (*Books are for use*):** Supera a custódia patrimonialista que trancava os livros. Exige localização acessível da biblioteca, horários ampliados de funcionamento, estantes abertas, mobiliário confortável e atitude acolhedora da equipe.
2. **2ª Lei: A cada leitor o seu livro (*Every reader his/her book*):** Princípio da democratização radical e equidade informacional. Atender a todos os tipos de público (pesquisadores, crianças, pessoas com deficiência, minorias) sem censura nem discriminação.
3. **3ª Lei: A cada livro o seu leitor (*Every book its reader*):** Encontrar um leitor para cada obra do acervo. Exige catalogação analítica profunda, divulgação ativa, vitrines temáticas, estantes de livre acesso e marketing de serviços.
4. **4ª Lei: Poupe o tempo do leitor (*Save the time of the reader*):** Eficiência máxima no atendimento. Sistemas ágeis de busca e recuperação, sinalização visual clara nas estantes, catálogo automatizado, circulação rápida e eliminação de burocracias inúteis.
5. **5ª Lei: A biblioteca é um organismo em crescimento (*A library is a growing organism*):** Planejamento contínuo e dinâmico. O acervo cresce fisicamente e digitalmente, o espaço requer expansão ou descarte/desbaste metódico, a equipe evolui e a tecnologia deve ser continuamente modernizada.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **A 4ª Lei no Plenário da Câmara:** Um consultor parlamentar corre à Biblioteca Pedro Aleixo precisando de precedentes sobre votação de Medida Provisória em 10 minutos. O bibliotecário de referência não o manda preencher um formulário em papel; busca na base jurídica, seleciona os 2 pareceres exatos e envia em PDF no WhatsApp do gabinete. Isso é a aplicação viva da **4ª Lei (poupar o tempo do leitor)**.
- **A 5ª Lei na BDCam:** Com o esgotamento do espaço físico nos depósitos subterrâneos do Palácio do Congresso, o CEDI digitalizou milhares de anais históricos e expandiu a Biblioteca Digital da Câmara (BDCam), migrando a custódia para nuvem e aplicando política contínua de desbaste em duplicatas impressas. Isso é a **5ª Lei (organismo em crescimento)**.

---

### ⚖️ 3. Quadro de Contraste Rápido: 2ª Lei vs. 3ª Lei
| Aspecto | 2ª Lei: A Cada Leitor o Seu Livro | 3ª Lei: A Cada Livro o Seu Leitor |
| :--- | :--- | :--- |
| **Ponto de Partida** | O **Usuário / Leitor** (suas carências e direitos) | O **Documento / Livro** (sua utilidade no acervo) |
| **Foco de Ação** | Democratização, acessibilidade, equidade e inclusão | Divulgação ativa, marketing, indexação e vitrines |
| **Pergunta-Guia** | *"Quem é este leitor e que informação ele precisa?"* | *"Para quem esta obra adormecida na estante pode ser útil?"* |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca entre 2ª e 3ª Leis:** A banca descreve uma ação de marketing cultural ou exposição temática de livros de economia e diz que decorre da 2ª Lei. **Gabarito: ERRADO** (decorre da 3ª Lei: encontrar leitores para as obras!).
- **O Falso Conflito entre Conservação e Uso:** O Cebraspe afirma que manter estantes trancadas e limitar o acesso aos livros é a prática prioritária recomendada pela 1ª Lei para garantir a conservação perene. **Gabarito: ERRADO** (a 1ª Lei afirma categoricamente que o uso vem antes da guarda cega!).
- **A 4ª Lei e o Bibliotecário:** Poupar o tempo do usuário também significa poupar o tempo dos profissionais por meio de padronização, cooperação e ferramentas eficientes.

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
- *Qual lei exige descarte e desbaste programado?* (5ª Lei: o organismo cresce e renova suas células!).
- *Qual lei proíbe censura prévia na seleção?* (2ª Lei: a cada leitor o seu livro!)."""

PILOTO_SUB_2_1 = r"""### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A catalogação descritiva moderna baseia-se em dois pilares fundamentais cobrados pelo **Cebraspe**:
1. **Princípios Internacionais de Catalogação (ICP - IFLA):** Documento normativo global que coloca a **conveniência do usuário** (*user convenience*) como o princípio orientador supremo da catalogação.
2. **Código de Catalogação Anglo-Americano (AACR2r):**
   - **Estrutura ISBD:** 8 áreas padronizadas separadas por pontuação prescrita (ponto, espaço, travessão, espaço: ` . — `).
   - **Regra de Entrada de Autoria:** Autor pessoal único (entrada direta pelo sobrenome); até 3 autores (entrada pelo primeiro citado); mais de 3 autores (entrada direta pelo título, com entrada secundária para o primeiro autor).
   - **Entrada de Órgãos Governamentais:** Jurisdição em primeiro lugar, seguida do órgão subordinado competente: `BRASIL. Congresso Nacional. Câmara dos Deputados`.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Caso 1: Catalogação Cooperativa na RVBI:** A Rede Virtual de Bibliotecas unifica o catálogo da Câmara, Senado e STF. Quando um bibliotecário da Câmara cataloga um livro de autoria de um deputado federal, ele cria um registro de autoridade com a forma canônica do nome e suas remissivas (apelidos, nomes parlamentares). Esse registro é instantaneamente aproveitado por todas as bibliotecas da rede.
- **Caso 2: Relatório de CPI com Múltiplos Relatores:** Se uma Comissão Parlamentar de Inquérito publica relatório subscrito por 12 parlamentares, pela regra tradicional do AACR2r a entrada principal é feita pelo **Título** da publicação ou pelo órgão coletivo competente (`BRASIL. Congresso Nacional. Câmara dos Deputados. Comissão Parlamentar de Inquérito...`), fazendo-se entradas secundárias para os relatores.

---

### ⚖️ 3. Quadro de Contraste Rápido: Entradas Governamentais no AACR2r
| Tipo de Órgão | Regra Canônica do AACR2r | Exemplo Correto na Câmara |
| :--- | :--- | :--- |
| **Órgão Central Legislativo** | Jurisdição + Nome do Órgão | `BRASIL. Congresso Nacional. Câmara dos Deputados.` |
| **Comissão Subordinada** | Jurisdição + Órgão Maior + Comissão | `BRASIL. Congresso Nacional. Câmara dos Deputados. Comissão de Constituição e Justiça e de Cidadania.` |
| **Órgão com Autonomia / Autarquia** | Entrada Direta pelo Próprio Nome | `BANCO CENTRAL DO BRASIL.` (e não BRASIL. Banco Central) |
| **Poder Executivo / Chefia de Estado** | Jurisdição + Cargo Político | `BRASIL. Presidente (2023- : Lula).` |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão da Jurisdição:** Propor entrada como `CÂMARA DOS DEPUTADOS DO BRASIL.` **Gabarito: ERRADO** (a jurisdição sempre encabeça o órgão governamental: `BRASIL. Congresso Nacional...`).
- **O Princípio Supremo do ICP:** Dizer que a facilidade do catalogador ou o rigor do sistema interno de informática prevalecem sobre a conveniência do usuário. **Gabarito: ERRADO.**
- **Pontuação Prescrita:** A banca afirma que a pontuação entre as áreas da descrição do AACR2r é facultativa ou livremente escolhida pela instituição. **Gabarito: ERRADO** (a pontuação é rígida e prescrita pela ISBD).

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
- *Qual o princípio soberano que rege o ICP da IFLA?* (Conveniência do Usuário).
- *Como é a pontuação entre áreas na ISBD/AACR2r?* (Ponto-espaço-travessão-espaço: ` . — `)."""

PILOTO_SUB_7_1 = r"""### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A preservação do papel baseia-se na compreensão físico-química da sua estrutura e nos agentes ambientais que provocam sua deterioração:
1. **Estrutura da Celulose e Hidrólise Ácida:** A celulose é uma longa cadeia polimérica de moléculas de glicose ligadas por pontes de oxigênio. A **hidrólise ácida** (reação química catalisada por água e calor) rompe essas cadeias, transformando o papel longo e flexível em fibras curtas, amareladas e quebradiças.
2. **Parâmetros Ambientais de Ouro (Conservação Preventiva):**
   - **Temperatura:** 18 °C a 22 °C (o calor acelera as reações químicas de degradação).
   - **Umidade Relativa (UR):** 45% a 55% (UR > 65% deflagra esporos de fungos; UR < 35% resseca o papel tornando-o quebradiço).
   - **Estabilidade:** Oscilações bruscas diárias de temperatura (> 3 °C) ou UR (> 5%) provocam dilatação e contração mecânica contínua nas fibras, descolando folhas e encadernações.
3. **Luz e Radiação Ultravioleta (UV):** A luz solar e lâmpadas fluorescentes emitem radiação UV que rompe ligações moleculares por **fotoxidação**, oxidando a lignina e desbotando tintas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cofre de Obras Raras da Biblioteca Pedro Aleixo:** A sala de guarda de manuscritos e obras dos séculos XVIII e XIX opera com sistema de ar-condicionado central redundante 24 horas por dia, 7 dias por semana. Termo-higrômetros com calibração RBC monitoram continuamente o ambiente.
- **Iluminação Protegida:** As luminárias são 100% LED de luz fria (sem emissão de UV nem radiação infravermelha de calor) e as janelas recebem películas de controle solar com bloqueio de 99% dos raios UV.

---

### ⚖️ 3. Quadro de Contraste Rápido: Agentes Ambientais de Degradação
| Agente Físico-Químico | Efeito Destrutivo no Acervo | Parâmetro Correto na Biblioteca |
| :--- | :--- | :--- |
| **Temperatura Alta** | Acelera cineticamente a hidrólise ácida | 18 °C a 22 °C (permanente) |
| **Umidade Elevada (> 65%)** | Proliferação explosiva de mofo/fungos | 45% a 55% UR |
| **Umidade Muito Baixa (< 35%)** | Desidratação, ressecamento e quebra | 45% a 55% UR |
| **Radiação UV** | Fotoxidação, amarelamento e esfarelamento | Filtros UV / iluminação LED isenta |
| **Poluição Atmosférica** | Gases ácidos (SO2, NOx) geram ácido sulfúrico | Filtros de ar mecânicos e de carvão ativado |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Armadilha do Ar-Condicionado Desligado à Noite:** A banca sugere que desligar o ar-condicionado durante a noite ou fins de semana para economizar energia é boa prática. **Gabarito: ERRADO.** As oscilações diárias de temperatura e umidade causam estresse mecânico severo no papel.
- **Umidade Baixa como Vantagem:** Dizer que quanto menor a umidade, melhor a conservação porque afasta os fungos. **Gabarito: ERRADO** (papel desidratado quebra ao menor manuseio).
- **Lignina:** Papéis produzidos com pasta mecânica de madeira contêm alta taxa de lignina (ex.: jornal), tornando-se escuros e ácidos rapidamente em contato com oxigênio e luz.

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
- *Qual a faixa de temperatura e umidade relativa padrão para acervos bibliográficos?* (18 °C a 22 °C e 45% a 55%).
- *Por que oscilações são piores que valores constantes levemente fora da faixa?* (Porque a fibra incha e retrai ciclicamente, quebrando a estrutura física do papel)."""

PILOTO_SUB_10_1 = r"""### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Regimento Interno da Câmara dos Deputados (RICD)** disciplina a estrutura, o funcionamento e a tomada de decisões no Parlamento:
1. **Mesa Diretora (Arts. 1 a 24):**
   - Composta por **7 titulares** (Presidente, dois Vice-Presidentes e quatro Secretários) e **4 suplentes de Secretários**.
   - Mandato de **2 anos**, vedada a recondução para o mesmo cargo na eleição imediatamente subsequente dentro da mesma legislatura.
2. **Sessões Plenárias (Arts. 65 a 94):**
   - Estrutura formal em **4 fases**:
     1. *Pequeno Expediente:* Comunicações breves e correspondências.
     2. *Grande Expediente:* Discursos aprofundados dos parlamentares inscritos.
     3. *Ordem do Dia:* Discussão e **votação** das proposições da pauta aprovada (fase deliberativa central).
     4. *Comunicações Parlamentares:* Pronunciamentos finais dos deputados e lideranças.
3. **CEDI e Biblioteca (Arts. 268 a 273):**
   - O **Centro de Documentação e Informação (CEDI)** é órgão técnico da Diretoria-Geral responsável pela coordenação da Biblioteca Pedro Aleixo, do Arquivo Histórico e da Coordenação de Edições e Publicações.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Lotação Direta do Analista Bibliotecário:** O Cargo 5 (Biblioteconomia) tem sua lotação precípua na estrutura do **CEDI**. Suas atribuições envolvem alimentar a base de dados do Sistema de Informações Legislativas (Sileg), zelar pelo acervo da Biblioteca Pedro Aleixo e fornecer subsídios técnicos às Comissões Permanentes.
- **O Plantão na Ordem do Dia:** Durante a realização da *Ordem do Dia*, o Plenário delibera sobre matérias cruciais. A equipe da biblioteca e do arquivo mantém canal prioritário de atendimento à Mesa Diretora e às Lideranças Partidárias para esclarecimento instantâneo sobre precedentes regimentais e histórico de votações anteriores.

---

### ⚖️ 3. Quadro de Contraste Rápido: Fases da Sessão Deliberativa Ordinária
| Fase da Sessão | Duração / Objetivo Principal | Papel do CEDI / Biblioteca |
| :--- | :--- | :--- |
| **1. Pequeno Expediente** | Leitura de atas, expedientes e discursos curtos | Conferência da ata e registro de despachos |
| **2. Grande Expediente** | Pronunciamentos de deputados inscritos | Pesquisa de dados temáticos citados nos discursos |
| **3. Ordem do Dia** | **Discussão e deliberação (votação)** de matérias | Plantão de apoio regimental e fornecimento de textos |
| **4. Comunicações Parlamentares** | Encerramento com falas de lideranças | Arquivamento das notas taquigráficas da sessão |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Recondução da Mesa:** O Cebraspe adora afirmar que é permitida a recondução ilimitada dos membros da Mesa Diretora para os mesmos cargos dentro da mesma legislatura. **Gabarito: ERRADO** (vedada expressamente na mesma legislatura, permitida apenas de uma legislatura para outra).
- **Composição da Mesa:** Dizer que a Mesa possui 5 secretários ou que os suplentes participam com direito a voto em todas as sessões. **Gabarito: ERRADO** (são 7 titulares e 4 suplentes).
- **Lotação do CEDI:** Afirmar que a Biblioteca Pedro Aleixo é um órgão autônomo diretamente subordinado à Presidência da República ou ao Senado Federal. **Gabarito: ERRADO** (integra o CEDI na estrutura da Câmara dos Deputados).

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
- *Quantos membros titulares compõem a Mesa Diretora da Câmara?* (7 titulares: Presidente, 2 Vice-Presidentes e 4 Secretários).
- *Qual a fase da sessão plenária destinada à votação das proposições?* (Ordem do Dia!)."""

PILOTOS = {
    "src/content/modules/m1-fundamentos/sub-1-1.ts": PILOTO_SUB_1_1,
    "src/content/modules/m1-fundamentos/sub-1-2.ts": PILOTO_SUB_1_2,
    "src/content/modules/m2-catalogacao/sub-2-1.ts": PILOTO_SUB_2_1,
    "src/content/modules/m7-preservacao/sub-7-1.ts": PILOTO_SUB_7_1,
    "src/content/modules/m10-legislativo/sub-10-1.ts": PILOTO_SUB_10_1,
}

for caminho, texto_didatico in PILOTOS.items():
    if not os.path.exists(caminho):
        print(f"Erro: arquivo não encontrado: {caminho}")
        continue
    
    with open(caminho, "r", encoding="utf-8") as f:
        conteudo = f.read()
    
    # Se já tem teoriaDidaticaMarkdown, limpar para reinserir
    if "teoriaDidaticaMarkdown:" in conteudo:
        # remover bloco antigo de teoriaDidaticaMarkdown
        start_idx = conteudo.find("teoriaDidaticaMarkdown:")
        # encontrar fechamento: `,`
        end_idx = conteudo.find("`,\n", start_idx)
        if end_idx != -1:
            conteudo = conteudo[:start_idx] + conteudo[end_idx + 3:]
    
    # Inserir antes de checkpoints ou secoes
    alvo = "\n  checkpoints: ["
    pos = conteudo.find(alvo)
    if pos == -1:
        alvo = "\n  secoes: ["
        pos = conteudo.find(alvo)
    
    bloco_novo = f"\n  teoriaDidaticaMarkdown: `{texto_didatico}`,\n"
    conteudo_atualizado = conteudo[:pos] + bloco_novo + conteudo[pos:]

    with open(caminho, "w", encoding="utf-8") as f:
        f.write(conteudo_atualizado)
    
    print(f"Sucesso: piloto didático injetado em {caminho}")
