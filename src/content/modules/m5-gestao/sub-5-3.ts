import type { ModuloFilho } from '../../../domain/types';

export const submodulo53: ModuloFilho = {
  id: 'sub-5-3',
  numero: '5.3',
  titulo: 'Política de Desenvolvimento de Coleções: Seleção, Aquisição, Desbaste e Avaliação',
  descricaoCurta: 'O modelo cíclico de Waldomiro Vergueiro, documento formal de política de seleção, critérios e agentes, modalidades de aquisição, desbastamento vs. descarte, política de crescimento zero e métodos de avaliação do acervo (Conspectus, Lancaster e Figueiredo).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Waldomiro Vergueiro', 'Nice Menezes de Figueiredo', 'Simone da Rocha Weitzel', 'F. W. Lancaster', 'Daniel Gore', 'Peggy Johnson'],
  alertasCebraspe: [
    'A política de desenvolvimento de coleções é um documento formal que possui tríplice caráter: administrativo, político e de relações públicas. O Cebraspe adora afirmar que seu caráter é "exclusivamente administrativo" ou "meramente operacional": ERRADO! O caráter político protege o bibliotecário contra censura e pressões externas arbitrarias.',
    'No modelo cíclico de Vergueiro, o estudo da comunidade de usuários é insumo e subsídio obrigatório para TODAS as seis fases do ciclo, sem exceção (não apenas para a seleção).',
    'Não confunda desbastamento (relocação/remanejamento de itens de baixa circulação para depósitos secundários mantendo o item no patrimônio) com descarte (eliminação física e baixa patrimonial definitiva). O desbastamento precede e nem sempre culmina em descarte!',
    'A política de "crescimento zero" (zero growth), proposta por Daniel Gore, determina que o acervo físico deve se estabilizar em um teto quantitativo: a cada novo volume incorporado, outro deve ser retirado para desbaste ou descarte. O Cebraspe tenta ligar isso falsamente à falta de orçamento ou escassez de compras.',
    'Métodos qualitativos centrados no acervo, como a avaliação por especialistas (método impressionista), apresentam a fragilidade canônica de o especialista conhecer a literatura teórica de ponta de sua especialidade, mas desconhecer o perfil real e as demandas cotidianas do público atendido pela biblioteca.',
  ],
  quadroComparativo: {
    titulo: 'As Seis Fases do Modelo Cíclico de Desenvolvimento de Coleções (Waldomiro Vergueiro)',
    colunas: ['Fase do Ciclo', 'Objetivo Central', 'Atores Envolvidos', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['1. Estudo da Comunidade', 'Mapear as necessidades, interesses e características dos usuários reais e potenciais', 'Bibliotecário e comunidade de usuários', 'Afirmar que o estudo da comunidade só importa para a seleção, ignorando o descarte e a avaliação.'],
      ['2. Políticas de Seleção', 'Estabelecer critérios, prioridades, instrumentos e diretrizes formais escritas', 'Comissão de seleção (bibliotecários, especialistas, direção)', 'Dizer que a política é prescindível por serem mutáveis as demandas da biblioteca.'],
      ['3. Seleção', 'Decidir quais obras específicas farão ou não parte do acervo (processo intelectual)', 'Bibliotecários e especialistas/comissão', 'Confundir seleção (decisão intelectual) com aquisição (procedimento operacional).'],
      ['4. Aquisição', 'Efetivar a incorporação das obras selecionadas (compra, doação, permuta)', 'Setor de aquisição, compras e administração patrimonial', 'Afirmar que a aquisição é feita de forma avulsa e sem planejamento financeiro prévio.'],
      ['5. Desbastamento / Descarte', 'Reavaliar a pertinência física do acervo: remanejamento e expurgo', 'Bibliotecários e comissão técnica', 'Confundir desbastamento (mudar de lugar) com descarte (saída definitiva do patrimônio).'],
      ['6. Avaliação da Coleção', 'Verificar o grau de adequação do acervo aos objetivos institucionais e demandas', 'Bibliotecários e avaliadores externos', 'Considerar que métodos quantitativos de contagem de livros são suficientes para atestar qualidade.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O Conceito e a Evolução do Desenvolvimento de Coleções

Conforme **Waldomiro Vergueiro** (*Desenvolvimento de Coleções*, 1989; *Seleção de Materiais de Informação*, 1995) e **Simone da Rocha Weitzel** (*Elaboração de uma Política de Desenvolvimento de Coleções*, 2013), o termo "Desenvolvimento de Coleções" substituiu a antiga e reducionista expressão "Seleção e Aquisição".

* **Definição Canônica:** É um processo **planejado, contínuo, dinâmico e cíclico** de formação e gestão do acervo documental, visando atender de forma precisa às necessidades informacionais da comunidade atendida e alinhar-se à missão institucional.
* **O Modelo Cíclico de Waldomiro Vergueiro:**
  O processo estrutura-se em **seis etapas interdependentes e contínuas**, dispostas em circuito fechado retroalimentado pela comunidade de usuários:

\`\`\`timeline
F1 | 1. Estudo da Comunidade | Ponto de Partida e Insumo Geral | Mapeamento das características demográficas, necessidades de informação e hábitos dos usuários
---> Subsídios Diretos
F2 | 2. Políticas de Seleção | Documento Normativo Formal | Diretrizes escritas, prioridades temáticas, critérios de aceitação de doações e descarte
---> Aplicação Prática
F3 | 3. Seleção | Julgamento Técnico Crítico | Escolha dos títulos a serem incorporados com base na política e nos pedidos dos usuários
---> Trâmites Administrativos
F4 | 4. Aquisição | Incorporação Concreta | Processo de compra, permuta ou doação conforme a Lei 14.133/2021
---> Gestão do Espaço Físico
F5 | 5. Desbastamento e Descarte | Manutenção da Vitalidade | Remanejamento para depósito ou descarte de obras obsoletas ou deterioradas
---> Diagnóstico Contínuo
F6 | 6. Avaliação da Coleção | Fechamento e Retroalimentação | Análise de adequação e uso que retroalimenta o estudo da comunidade e a política de seleção
\`\`\`

> [!IMPORTANT]
> **Assertiva Chave Cebraspe:** No modelo de Vergueiro, o **estudo da comunidade** não é um evento isolado ou estanque. Ele serve de **insumo indispensável para todas as fases**, inclusive na aquisição (definindo suportes e rapidez exigida), no desbaste (identificando desuso) e na avaliação.

---

### 2. O Documento Formal de Política de Desenvolvimento de Coleções (PDC)

O documento de política é o instrumento normativo norteador da gestão de acervos. Conforme a doutrina (Vergueiro, Weitzel, Evans, Johnson), possui **tríplice caráter**:

1. **Caráter Administrativo:**
   * Estabelece regras claras, rotinas padronizadas e critérios uniformes.
   * Racionaliza o orçamento e justifica as solicitações de verbas perante a administração superior do órgão.
2. **Caráter Político:**
   * Atua como **escudo institucional** para o bibliotecário e para a equipe técnica.
   * Protege o acervo contra tentativas de **censura ideológica, moral ou religiosa**, pressões partidárias e ingerências de dirigentes que desejem impor a compra ou o descarte arbitrário de determinadas obras.
3. **Caráter de Relações Públicas:**
   * Torna públicos e transparentes os critérios e prioridades adotados pela biblioteca perante a comunidade acadêmica, servidores e parlamentares.
   * Informa claramente as regras para aceitação de doações, evitando melindres de doadores cujos materiais não se enquadrem no escopo do acervo.

#### Estrutura Básica do Documento de Política (Weitzel):
* **Identificação institucional:** Histórico, missão e objetivos do órgão.
* **Público-alvo:** Usuários reais e potenciais e suas demandas prioritárias.
* **Responsabilidade pela seleção:** Definição dos papéis da equipe de bibliotecários, da comissão de seleção e dos especialistas.
* **Critérios gerais e específicos de seleção:** Conteúdo, escopo, idioma, suporte físico/digital, custo e atualidade.
* **Modalidades de aquisição:** Regras para compra, doação e permuta.
* **Políticas de desbastamento e descarte:** Prazos, critérios de expurgo e destinação final dos itens baixados.
* **Políticas de preservação e conservação:** Diretrizes de encadernação, higienização e digitalização.
* **Metodologia de avaliação da coleção:** Indicadores e periodicidade dos diagnósticos.
* **Revisão periódica do documento:** Cláusula estipulando que o documento deve ser reavaliado formalmente a cada 2, 3 ou 5 anos.

---

### 3. Critérios de Seleção e Comissões de Seleção

A seleção é o **processo intelectual de tomada de decisão** no qual se determina quais títulos devem ou não ingressar no acervo.

#### A. Critérios Canônicos de Vergueiro:
* **Critérios Relativos ao Conteúdo do Documento:**
  * *Autoridade:* Notoriedade e qualificação acadêmica/profissional do autor e prestígio da editora.
  * *Exatidão / Precisão:* Rigor científico, correção factual e ausência de erros grosseiros.
  * *Atualidade:* Data de publicação em confronto com o dinamismo da disciplina (ex.: livros de Direito e Tecnologia exigem extrema atualidade; obras de História têm meia-vida longa).
  * *Imparcialidade:* Equilíbrio de pontos de vista, especialmente em temas legislativos e sociais controvertidos.
  * *Profundidade e Escopo:* Nível de tratamento do assunto (introdutório, intermediário ou pesquisa avançada).
* **Critérios Relativos ao Usuário:**
  * Grau de adequação ao nível cognitivo, estilo, linguagem e necessidades reais da comunidade.
* **Critérios Relativos aos Aspectos Físicos e Tecnológicos:**
  * Durabilidade do papel, encadernação, legibilidade tipográfica, compatibilidade de formatos eletrônicos (e-books sem DRMs restritivos) e requisitos de infraestrutura.
* **Critérios Relativos ao Custo:**
  * Relação custo-benefício em confronto com a disponibilidade orçamentária.

#### B. Atores da Seleção e a Comissão de Seleção:
* A seleção **não deve ser concentrada exclusivamente em um único indivíduo**.
* Recomenda-se a instituição de uma **Comissão de Seleção mista**, composta por bibliotecários (que dominam os princípios biblioteconômicos, o orçamento e a completude do acervo) e representantes dos usuários/especialistas temáticos (consultores legislativos, professores ou pesquisadores).
* A coordenação executiva da comissão cabe preferencialmente ao bibliotecário.

---

### 4. Modalidades de Aquisição: Compra, Doação e Permuta

A aquisição é o **processo operacional** que concretiza a incorporação física ou o acesso institucional aos recursos selecionados:

#### A. Compra
* **No Setor Público (Lei nº 14.133/2021 - Nova Lei de Licitações):**
  * As compras de acervos bibliográficos devem seguir o regime da Lei 14.133/2021.
  * *Inexigibilidade de Licitação (art. 74):* Aplicável quando houver inviabilidade de competição, como na contratação direta de fornecedor/editora exclusivo ou aquisição de bases de dados jurídicas/científicas proprietárias que não possuem similares no mercado.
  * *Dispensa de Licitação (art. 75):* Aplicável em compras de pequeno valor dentro dos limites estipulados em lei ou em casos emergenciais.
  * *Uso de Desideratas:* Listas de sugestões e obras esgotadas em catálogo de livrarias, geridas em sebos e leilões especializados.

#### B. Doação
* **Diretriz Canônica:** Uma biblioteca não deve aceitar indiscriminadamente tudo o que lhe é oferecido. Acervos obsoletos, danificados ou fora de escopo transformam a biblioteca em depósito de entulho (*lixo bibliográfico*).
* A política deve estipular que toda doação é recebida **em caráter precário para triagem técnica**.
* Exige-se termo de doação no qual o doador autoriza expressamente a biblioteca a incorporar, repassar a terceiros ou descartar os volumes que não interessarem ao acervo.
* Não se devem aceitar doações com exigências descabidas (ex.: exigência de manter uma coleção fechada e isolada em sala especial).

#### C. Permuta (Intercâmbio)
* Troca sistemática de publicações institucionais (livros, anais de comissões, Revista de Informação Legislativa) entre entidades congêneres (Câmara, Senado, STF, universidades federais).
* Exige o controle de listas de duplicatas e equivalência de valor informativo entre os órgãos conveniados.

---

### 5. Desbastamento vs. Descarte e a Teoria do Crescimento Zero

Esta é uma das distinções conceituais mais cobradas pelo Cebraspe em concursos de alta complexidade:

| Conceito | Definição Operacional | Impacto Patrimonial | Destino dos Documentos |
| :--- | :--- | :--- | :--- |
| **Desbastamento (*Weeding* / Relocação)** | Retirada sistemática de obras de baixa procura das estantes ativas de livre acesso. | **Mantém o registro patrimonial ativo.** O livro continua pertencendo à biblioteca. | Armazenamento em depósitos secundários, estantes deslizantes ou áreas de reserva técnica com acesso mediado. |
| **Descarte (*Disposal* / Expurgo)** | Exclusão física definitiva do material do acervo institucional. | **Gera baixa patrimonial formal.** O item é excluído do catálogo e do inventário de bens móveis. | Doação a bibliotecas comunitárias, reciclagem de papel ou incineração/trituração (apenas se contaminado por fungos). |

#### A. O Método CREW e a Fórmula MUSTIE
O método CREW (*Continuous Reevaluation, Conditioning, Removing and Weeding*), muito citado na literatura técnica, propõe a fórmula mnemônica **MUSTIE** para identificar obras candidatas ao descarte:
* **M** = *Misleading:* Informações factualmente erradas ou perigosas (ex.: tratados médicos ou leis revogadas há décadas sem valor histórico).
* **U** = *Ugly:* Livros em péssimo estado físico, sujos, rasgados e além da possibilidade de restauração.
* **S** = *Superseded:* Obras substituídas por edições mais recentes e ampliadas.
* **T** = *Trivial:* Obras sem relevância literária, acadêmica ou científica permanente.
* **I** = *Irrelevant:* Materiais que não mais atendem aos interesses da comunidade servida.
* **E** = *Elsewhere available:* Obras facilmente acessíveis em bibliotecas parceiras ou em bases digitais abertas de livre acesso.

#### B. A Teoria da Biblioteca de Crescimento Zero (*Zero Growth* de Daniel Gore)
* Concebida por **Daniel Gore** em 1976 (*Farewell to Alexandria*): propõe que, ao atingir a capacidade máxima de espaço físico de suas instalações, a biblioteca deve adotar uma taxa de estabilização volumétrica:
* **Regra:** Para cada volume novo que entra no acervo, um volume em desuso deve ser retirado para desbastamento em depósito remoto ou descarte definitivo.
* *Atenção Cebraspe:* Crescimento zero **não é corte de verbas nem congelamento de aquisições**, mas sim uma estratégia avançada de renovação contínua de espaço e vitalidade do acervo.

---

### 6. Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)

Avaliar a coleção consiste em determinar sua adequação aos objetivos da instituição e às necessidades dos usuários (Figueiredo, 1994; Lancaster, 1993):

\`\`\`tree
TITLE: Métodos de Avaliação de Coleções (Figueiredo, Lancaster, Weitzel)
- Métodos de Avaliação de Coleções | Determinação da adequação aos objetivos institucionais e usuários
  - Centrados no Acervo (Quantitativos / Normativos) | Medem dimensão física, profundidade temática e atualidade
    - Listas de Verificação (Checklists) | Confrontação do acervo contra bibliografias especializadas de referência
    - Opinião de Especialistas (Impressionista) | Pareceres de pesquisadores e docentes sobre a profundidade temática
    - Idade Média e Obsolescência | Análise das datas de publicação para verificar desatualização
    - Modelo Conspectus (RLG / WLN) | Escala padronizada de 0 a 5 de profundidade de cobertura
  - Centrados no Uso (Comportamentais / Empíricos) | Medem a utilização real da coleção pela comunidade
    - Estatísticas de Circulação e Consulta | Empréstimos domiciliares, renovações e uso de estante
    - Empréstimo Entre Bibliotecas (EEB) | Mapeamento das lacunas supridas por outras instituições
    - Análise de Citações | Obras referenciadas em teses, artigos e notas técnicas da Casa
    - Teste de Disponibilidade de Orr (DDT) | Taxa de sucesso do usuário em localizar o documento na estante
\`\`\`

#### A. Métodos Centrados no Acervo
* **Listas de Verificação (*Checklists*):** Confrontação do catálogo da biblioteca contra bibliografias especializadas e catálogos de grandes bibliotecas de referência.
* **Avaliação por Especialistas (Método Impressionista):** Consulta a professores, juristas ou pesquisadores para que analisem as estantes e emitam parecer.
  * *Fraqueza clássica:* O especialista avalia sob a ótica de sua pesquisa pessoal de ponta e frequentemente desconhece as necessidades reais e o nível cognitivo do público em geral.
* **O Modelo *Conspectus* (RLG / WLN):**
  Mapeia e padroniza a profundidade da cobertura da coleção em uma escala formal de 0 a 5:
  * \`Nível 0\`: Fora do escopo institucional (*Out of scope*).
  * \`Nível 1\`: Mínimo (*Minimal*).
  * \`Nível 2\`: Informação Básica (*Basic*).
  * \`Nível 3\`: Suporte a Estudo ou Graduação (*Study or Instructional Support*).
  * \`Nível 4\`: Pesquisa Avançada / Pós-graduação (*Research*).
  * \`Nível 5\`: Exaustivo / Abrangência Total (*Comprehensive*).

#### B. Métodos Centrados no Uso
* **Estatísticas de Circulação:** Análise do número de empréstimos e renovações por classe de assunto. Permite identificar classes "mortas" e classes de alta rotatividade.
* **Empréstimo Entre Bibliotecas (EEB):** Um volume excessivo de pedidos de EEB em uma determinada subárea é indicador empírico direto de que o acervo local possui graves lacunas nessa disciplina.
* **Análise de Citações:** Investigação das referências bibliográficas utilizadas pelos próprios pesquisadores, consultores ou alunos da instituição em seus trabalhos. Identifica quais autores e periódicos são de fato lidos e incorporados.
* **Teste de Entrega de Documentos de Richard Orr (DDT - *Document Delivery Test*):**
  * Desenvolvido por Richard H. Orr (1968), mede a **velocidade e a probabilidade** com que a biblioteca é capaz de colocar uma amostra representativa de documentos nas mãos do usuário no exato momento da demanda.
  * Expressa-se por meio do Índice de Capacidade de Entrega (*Capability Index*), variando de 0 a 100.`,
  checkpoints: [
    {
      id: 'cp-5-3-1',
      pergunta: 'Micro-Checkpoint 1: Política de Seleção e suas Funções',
      item: 'O documento formal de política de desenvolvimento de coleções de uma biblioteca possui finalidades exclusivamente técnicas e administrativas, não exercendo papel na mediação de conflitos ou na proteção institucional do profissional.',
      gabarito: 'E',
      justificativa: 'Errado! A política possui caráter administrativo, político e de relações públicas, servindo justamente como escudo institucional contra pressões e censura.',
    },
    {
      id: 'cp-5-3-2',
      pergunta: 'Micro-Checkpoint 2: Diferença entre Desbastamento e Descarte',
      item: 'Enquanto o desbastamento compreende o remanejamento de materiais para locais de menor acesso sem retirá-los da custódia da biblioteca, o descarte consiste na eliminação definitiva ou na baixa patrimonial do documento.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a distinção clássica consolidada por Vergueiro e cobrada com frequência pelo Cebraspe.',
    },
    {
      id: 'cp-5-3-3',
      pergunta: 'Micro-Checkpoint 3: Processo de Desbastamento e Descarte de Acervos',
      item: 'O processo de desbastamento (weeding) consiste no remanejamento de itens de baixa frequência de uso para depósitos secundários com acesso indireto, diferenciando-se do descarte, que implica a exclusão patrimonial definitiva.',
      gabarito: 'C',
      justificativa: 'Certo! Conforme Weitzel e Vergueiro, desbastar é relocar materiais para locais de menor custo de armazenagem, enquanto descartar é expurgar o exemplar do acervo e dos registros patrimoniais.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-3-1',
        periodo: '1968',
        disciplina: 'Avaliação de Desempenho',
        focoPrincipal: 'Richard Orr concebe o Document Delivery Test (DDT) para medir a capacidade de entrega de documentos',
        figuraChave: 'Richard H. Orr',
      },
      {
        id: 'tl-5-3-2',
        periodo: '1976',
        disciplina: 'Gestão de Acervos',
        focoPrincipal: 'Formulação do conceito de "Biblioteca de Crescimento Zero" (Zero-Growth Library)',
        figuraChave: 'Daniel Gore',
      },
      {
        id: 'tl-5-3-3',
        periodo: '1989',
        disciplina: 'Desenvolvimento de Coleções',
        focoPrincipal: 'Consolidação do modelo cíclico de desenvolvimento de coleções no Brasil',
        figuraChave: 'Waldomiro Vergueiro',
      },
      {
        id: 'tl-5-3-4',
        periodo: '1994',
        disciplina: 'Avaliação de Coleções',
        focoPrincipal: 'Sistematização de metodologias quantitativas e qualitativas de avaliação de acervos',
        figuraChave: 'Nice Menezes de Figueiredo',
      },
      {
        id: 'tl-5-3-5',
        periodo: '2013',
        disciplina: 'Políticas de Coleções',
        focoPrincipal: 'Elaboração de diretrizes práticas para políticas de desenvolvimento de coleções no Brasil',
        figuraChave: 'Simone da Rocha Weitzel',
      },
    ],
    autores: [
      {
        id: 'aut-5-3-1',
        nome: 'Waldomiro Vergueiro',
        ano: 1989,
        obraPrincipal: 'Desenvolvimento de coleções',
        ideiaChave: 'Modelo cíclico de 6 fases; documento formal de seleção como proteção política, administrativa e de relações públicas.',
        chipPegadinha: 'A comunidade de usuários é insumo indispensável em todas as fases, incluindo aquisição e desbaste.',
      },
      {
        id: 'aut-5-3-2',
        nome: 'Nice Menezes de Figueiredo',
        ano: 1994,
        obraPrincipal: 'Metodologias para avaliação de coleções',
        ideiaChave: 'Classificação dos métodos de avaliação em quantitativos (estatísticas, circulação) e qualitativos (checklists, especialistas).',
        chipPegadinha: 'Método impressionista de especialistas tem a falha de não conhecer a demanda real do usuário local.',
      },
      {
        id: 'aut-5-3-3',
        nome: 'Daniel Gore',
        ano: 1976,
        obraPrincipal: 'Farewell to Alexandria: solutions to space, growth, and performance problems of libraries',
        ideiaChave: 'Crescimento Zero: equilíbrio entre aquisições e desbaste/descarte para manter o acervo funcional sem expansão predial infinita.',
        chipPegadinha: 'Crescimento zero não significa falta de verba nem ausência de compras, mas estabilização volumétrica.',
      },
      {
        id: 'aut-5-3-4',
        nome: 'Simone da Rocha Weitzel',
        ano: 2013,
        obraPrincipal: 'Elaboração de uma política de desenvolvimento de coleções em bibliotecas universitárias',
        ideiaChave: 'Estruturação canônica do documento de PDC, comissão de seleção e critérios de desbaste e avaliação periódica.',
        chipPegadinha: 'A política deve possuir cláusula obrigatória de revisão periódica de tempos em tempos.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-3-1',
        afirmacao: 'O conceito de crescimento zero aplica-se exclusivamente a bibliotecas comunitárias sem orçamento que vivem de doações.',
        gabarito: 'E',
        porQue: 'A teoria de Daniel Gore é uma estratégia de gestão de espaço físico e renovação de acervo, aplicável a grandes bibliotecas universitárias e de pesquisa.',
      },
      {
        id: 'peg-5-3-2',
        afirmacao: 'No modelo de desenvolvimento de coleções de Vergueiro, as necessidades da comunidade servem como subsídio para a seleção e avaliação, mas são dispensáveis na etapa de aquisição.',
        gabarito: 'E',
        porQue: 'O modelo é sistêmico: o estudo da comunidade orienta e subsidia todas as etapas do ciclo documental, inclusive a aquisição (formatos, velocidade e canais adequados).',
      },
      {
        id: 'peg-5-3-3',
        afirmacao: 'O método impressionista de avaliação por especialistas de renome é considerado isento de falhas por aliar a erudição do docente às necessidades de pesquisa de todos os usuários da biblioteca.',
        gabarito: 'E',
        porQue: 'O método impressionista padece de subjetividade: o especialista frequentemente privilegia sua própria linha teórica de pesquisa e desconhece as demandas reais do conjunto dos usuários da instituição.',
      },
    ],
  },
};
