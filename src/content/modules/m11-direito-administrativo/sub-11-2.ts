import type { ModuloFilho } from '../../../domain/types';

export const submodulo112: ModuloFilho = {
  id: 'sub-11-2',
  numero: '11.2',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 2: Princípios Expressos e Implícitos)',
  preRequisitos: ["sub-11-1"],
  titulo: 'Ato Administrativo, Invalidação e Responsabilidade por Pareceres',
  titulo_curto: 'Atos Administrativos e Pareceres',
  antesDeLer: [
    {
      termo: 'Elementos do Ato Administrativo (COMFIFOR)',
      definicao: 'Requisitos de validade: Competência, Finalidade, Forma, Motivo e Objeto.',
      exemploBiblioteca: 'Elaboração de termo de doação de livros contendo motivo justificado, competência da chefia e forma escrita oficial.',
    },
    {
      termo: 'Atributos do Ato (PATI)',
      definicao: 'Características dos atos administrativos: Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.',
      exemploBiblioteca: 'Presunção de que certidões e relatórios emitidos pela Biblioteca Pedro Aleixo são verdadeiros e conformes à lei.',
    },
    {
      termo: 'Atos Vinculados vs. Discricionários',
      definicao: 'Vinculado é aquele em que a lei não deixa margem de escolha; discricionário permite juízo de conveniência e oportunidade nos limites da lei.',
      exemploBiblioteca: 'A escolha dos temas das exposições culturais da biblioteca como ato discricionário da direção do CEDI.',
    },
    {
      termo: 'Anulação vs. Revogação',
      definicao: 'Anulação extingue ato ilegal com efeitos retroativos (ex tunc); revogação extingue ato legal inconveniente com efeitos prospectivos (ex nunc).',
      exemploBiblioteca: 'Revogação de uma portaria interna sobre horários de empréstimo para atender ao novo expediente da Câmara.',
    },
  ],
  descricaoCurta: 'Conceito, requisitos de validade (COFIFOMOB) e atributos (PATI). Classificação e espécies de atos. Extinção: anulação, revogação, cassação, caducidade e convalidação (FO-CO). Teoria dos Motivos Determinantes. Espécies de parecer e responsabilidade do emissor (STF e LINDB).',
  tempoEstimadoMinutos: 14,
  autoresChave: [
    'Maria Sylvia Zanella Di Pietro',
    'Hely Lopes Meirelles',
    'José dos Santos Carvalho Filho',
    'Celso Antônio Bandeira de Mello',
  ],
  alertasCebraspe: [
    'TODOS OS ATOS POSSUEM IMPERATIVIDADE? NÃO! Esta é uma das pegadinhas mais clássicas do Cebraspe. A presunção de legitimidade e a tipicidade estão presentes em todos os atos; a imperatividade e a autoexecutoriedade NÃO existem nos atos enunciativos (pareceres, certidões, atestados) nem nos atos negociais (autorizações, licenças), que concedem algo a pedido do administrado.',
    'CONVALIDAÇÃO (REGRA DO FO-CO): Apenas admitem convalidação (saneamento de vícios com efeitos retroativos ex tunc) defeitos sanáveis na FORMA (desde que a lei não a exija como essencial para a validade do ato) e na COMPETÊNCIA (desde que não se trate de competência em razão da matéria ou privativa). Os elementos MOTIVO, OBJETO e FINALIDADE jamais admitem convalidação!',
    'ANULAÇÃO VS. REVOGAÇÃO: A anulação decorre de ilegalidade, produz efeitos retroativos (ex tunc) e pode ser pronunciada tanto pela Administração (autotutela) quanto pelo Poder Judiciário. A revogação decorre de juízo de conveniência e oportunidade (mérito), produz efeitos prospectivos (ex nunc) e é de competência EXCLUSIVA da Administração, sendo terminantemente vedado ao Judiciário revogar atos do Executivo ou do Legislativo no exercício de sua função típica jurisdicional.',
    'RESPONSABILIDADE DO PARECERISTA (STF E ART. 28 DA LINDB): O parecerista jurídico ou técnico responde solidariamente com o gestor decisor apenas quando atua com DOLO ou ERRO GROSSEIRO (culpa grave inescusável), ou quando emite parecer vinculante que obriga formalmente a autoridade a acatar a tese jurídica ilegal.',
  ],
  quadroComparativo: {
    titulo: 'Requisitos de Validade do Ato Administrativo (COFIFOMOB)',
    colunas: ['Requisito', 'Conceito Jurídico', 'Natureza no Ato', 'Possibilidade de Convalidação (Saneamento)', 'Vício Típico'],
    linhas: [
      ['Competência', 'Círculo de poder legal conferido ao agente para agir', 'Sempre Vinculado', 'Sim (se não for privativa nem em razão da matéria)', 'Excesso de poder / Usurpação'],
      ['Finalidade', 'Resultado mediato de interesse público visado pela lei', 'Sempre Vinculado', 'Não admite convalidação (vício insanável)', 'Desvio de finalidade / Desvio de poder'],
      ['Forma', 'Exteriorização formal da vontade administrativa', 'Sempre Vinculado', 'Sim (se a forma não for solenidade essencial à lei)', 'Vício de forma / Ausência de motivação'],
      ['Motivo', 'Situação fática e fundamento jurídico que ensejam o ato', 'Vinculado ou Discricionário', 'Não admite convalidação (vício insanável)', 'Motivo falso ou inexistente'],
      ['Objeto (Conteúdo)', 'Efeito jurídico imediato produzido pelo ato no mundo real', 'Vinculado ou Discricionário', 'Não admite convalidação (vício insanável)', 'Objeto ilícito, impossível ou indeterminado'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Conceito e Regime Jurídico do Ato Administrativo

O ato administrativo é a **manifestação unilateral de vontade da Administração Pública** (ou de quem lhe faça as vezes) que, agindo sob regime jurídico de direito público, tenha por fim imediato adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações aos administrados ou a si própria:
* **Unilateralidade:** Diferencia o ato administrativo dos contratos administrativos (que são bilaterais). O ato nasce da manifestação exclusiva de vontade do poder estatal, mesmo quando decorre de prévio requerimento do interessado (como numa licença de funcionamento ou no deferimento de férias de um bibliotecário da Câmara).
* **Fato da Administração vs. Ato Administrativo:** O *fato da administração* é um evento material, físico ou da natureza com efeitos jurídicos (ex.: a queda de um raio no telhado da biblioteca, a demolição física de um muro). O *ato administrativo* é uma manifestação formal e expressa de vontade (ex.: a portaria que ordena a demolição).

---

### 2. Os Requisitos (Elementos) de Validade do Ato Administrativo (COFIFOMOB)

Conforme a Lei da Ação Popular (Lei nº 4.717/1965, art. 2º), todo ato administrativo exige cinco elementos essenciais de validade:

$$\\text{Requisitos} = \\text{Competência} + \\text{Finalidade} + \\text{Forma} + \\text{Motivo} + \\text{Objeto}$$

1. **Competência:** Sujeito legalmente investido de atribuições para a prática do ato. A competência é intransferível, irrenunciável, imprescritível e imodificável pela vontade do agente. Admite, em regra, delegação e avocação transitórias, salvo as vedações do art. 11 da Lei nº 9.784/1999 (edição de atos normativos, decisão de recursos administrativos e matérias de competência exclusiva).
2. **Finalidade:** O objetivo de interesse público primário que a norma persegue. A Administração não pode visar interesse privado próprio, de terceiros ou de vingança política. A violação configura **desvio de finalidade** (ou desvio de poder), gerando nulidade absoluta do ato.
3. **Forma:** O modo de exteriorização do ato. No direito público impera o princípio do formalismo moderado: os atos devem ser, em regra, escritos, datados e assinados (inclusive por meio digital qualificado). A ausência de motivação, quando obrigatória, é considerada defeito formal.
4. **Motivo:** O pressuposto de fato (a situação real que ocorreu) e o pressuposto de direito (o dispositivo legal que autoriza ou impõe a conduta).
   * **Teoria dos Motivos Determinantes:** Se a autoridade administrativa indicar os motivos do ato (ainda que a lei não exigisse motivação expressa para aquele ato discricionário), a validade do ato ficará estritamente atrelada à existência e à veracidade dos fatos apontados. Se o motivo for comprovadamente falso ou inexistente, o ato é nulo de pleno direito.
5. **Objeto (ou Conteúdo):** O efeito prático e imediato que o ato produz no ordenamento jurídico. Deve ser lícito, possível, determinado ou determinável e moral.

#### O Mérito Administrativo
Nos atos vinculados, todos os cinco elementos são rigorosamente fixados pela lei. Nos atos discricionários, a lei confere ao administrador margem de escolha dentro dos limites da legalidade; essa margem reside exclusivamente no **Motivo** e no **Objeto**, consubstanciando o juízo de **conveniência e oportunidade** (mérito administrativo).

---

### 3. Os Atributos do Ato Administrativo (PATI)

Os atributos são características peculiares que diferenciam os atos administrativos dos atos puramente privados:

* **Presunção de Legitimidade e Veracidade:** Milita a presunção relativa (*juris tantum*) de que o ato foi editado em conformidade com a lei (legitimidade) e de que os fatos narrados pelo agente público são verdadeiros (veracidade). Presente em **todos** os atos administrativos. O ônus da prova em contrário recai sempre sobre o administrado.
* **Autoexecutoriedade:** Prerrogativa da Administração de executar diretamente suas decisões materiais, inclusive com uso moderado de força pública, sem necessidade de autorização judicial prévia. Subdivide-se em *exigibilidade* (meios indiretos de coação, como multa) e *executoriedade* (meios diretos, como apreensão de livro com fungo degradante ou interdição de sala). **Não está presente em todos os atos** (ex.: a cobrança de multa pecuniária não é autoexecutória; se o infrator não pagar, a União deve inscrever em dívida ativa e ajuizar execução fiscal perante o Judiciário).
* **Tipicidade:** O ato deve corresponder a uma figura previamente delineada pela lei para produzir os efeitos desejados. Impede a prática de atos arbitrários ou inominados pela autoridade. Presente em todos os atos unilaterais.
* **Imperatividade (Poder Extroverso):** Prerrogativa que impõe o ato a terceiros, criando obrigações ou restrições independentemente de sua concordância. **Não está presente em todos os atos**: atos negociais (autorização, licença) e atos enunciativos (parecer, certidão) são desprovidos de imperatividade.

---

### 4. Classificação e Espécies de Atos

1. **Atos Normativos:** Contêm mandamentos genéricos e abstratos, visando a fiel execução das leis. Ex.: Decretos regulamentares, Resoluções da Câmara dos Deputados, Portarias normativas.
2. **Atos Ordinatórios:** Visam a disciplina interna dos órgãos e a conduta funcional dos agentes, decorrendo do poder hierárquico. Ex.: Ordens de serviço, memorandos, circulares, instruções. Não vinculam os cidadãos comuns.
3. **Atos Negociais:** Manifestações emitidas a pedido do particular em que o interesse deste coincide com o da Administração:
   * **Licença:** Ato vinculado e definitivo; demonstrado o cumprimento dos requisitos legais, a concessão é direito subjetivo do administrado.
   * **Autorização:** Ato discricionário e precário; o Estado pode revogar a qualquer momento por motivo de interesse público superveniente sem indenização.
4. **Atos Enunciativos:** A Administração atesta, certifica ou opina sobre determinado fato ou situação jurídica sem emitir comando imperativo. Ex.: Certidões, atestados e **Pareceres**.
5. **Atos Punitivos:** Impõem sanções disciplinares a servidores ou repressivas a particulares infratores. Ex.: Demissão, advertência, multa contratual na Lei nº 14.133/2021.

---

### 5. Extinção do Ato Administrativo e Convalidação

* **Anulação (Invalidade):** Extinção do ato por vício de **ilegalidade**. Tem efeitos retroativos (**ex tunc** - retroage à data em que o ato foi praticado). Pode ser realizada pela própria Administração (autotutela) ou pelo Poder Judiciário. Prazo decadencial para anular atos favoráveis ao administrado de boa-fé: 5 anos (art. 54 da Lei 9.784/1999), salvo comprovada má-fé.
* **Revogação (Inoportunidade):** Supressão de ato legítimo e eficaz por razões de **conveniência e oportunidade** da Administração. Tem efeitos prospectivos (**ex nunc** - opera apenas para a frente, respeitando os direitos adquiridos). É competência **privativa da Administração**; o Judiciário jamais pode revogar atos de outros Poderes no exercício da função jurisdicional.
  * **Atos Irrevogáveis:** Atos consumados, atos vinculados, atos que geraram direito adquirido, atos que integram procedimento em curso (preclusão) e meros atos materiais.
* **Cassação:** Extinção porque o beneficiário descumpriu condição superveniente obrigatória.
* **Caducidade:** Extinção em razão de nova legislação que tornou inviável a manutenção daquele ato.
* **Convalidação (Saneamento):** Aproveitamento de atos administrativos com defeitos sanáveis. Requisitos do art. 55 da Lei 9.784/99: não acarretar lesão ao interesse público e não prejudicar terceiros.
  * Mnemônico **FO-CO**: Apenas vícios sanáveis na **Forma** (não essencial) e na **Competência** (não exclusiva) admitem convalidação. Vícios em Motivo, Objeto e Finalidade são absolutamente insanáveis.

---

### 6. O Parecer Administrativo e a Responsabilidade do Emissor

O **parecer** é um ato enunciativo por meio do qual órgãos consultivos, assessorias jurídicas ou peritos técnicos emitem opinião técnica e fundamentada para subsidiar a tomada de decisão da autoridade administrativa.

#### 6.1 Espécies de Parecer
1. **Facultativo:** A autoridade solicita o parecer se quiser e, ao decidir, pode acolhê-lo ou rejeitá-lo livremente, desde que motive sua decisão.
2. **Obrigatório:** A lei exige a prévia emissão do parecer para que o processo avance (ex.: parecer da assessoria jurídica na fase preparatória de licitações, art. 53 da Lei nº 14.133/2021). Contudo, a autoridade não está vinculada à conclusão do parecerista; se divergir, deverá motivar tecnicamente a recusa.
3. **Vinculante:** A lei exige a solicitação e impõe que a autoridade decida estritamente nos termos acolhidos pelo parecer.

#### 6.2 Responsabilidade do Parecerista Técnico e Jurídico
O Supremo Tribunal Federal (STF - MS 24.631/DF) e o art. 28 da LINDB (Lei de Introdução às Normas do Direito Brasileiro) pacificaram o entendimento:
* O parecerista **não responde pessoalmente** por meras divergências de interpretação jurídica ou técnica plausível.
* O parecerista responde civil, administrativa e regressivamente perante o Estado e órgãos de controle (como o TCU) **apenas se comprovado DOLO ou ERRO GROSSEIRO** (culpa gravíssima, negligência inescusável ou omissão temerária).
* No parecer vinculante, como a decisão está legalmente atrelada ao teor do parecer, se este induzir manifestamente a um ato ilícito criminoso ou danoso ao erário com culpa grave, o parecerista responde solidariamente com a autoridade decisória.`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Organização da Administração Pública** diferencia a estrutura dos entes federados e suas entidades descentralizadas (Decreto-Lei nº 200/1967):
1. **Administração Direta vs. Indireta:**
   - **Administração Direta:** Órgãos internos dos entes federativos políticos soberanos/autônomos (União, Estados, DF e Municípios). Ex.: Ministérios, Secretarias, Câmara dos Deputados, Senado, STF. Atuam de forma centralizada.
   - **Administração Indireta:** Pessoas jurídicas criadas ou autorizadas pelo Estado para desempenhar atividades descentralizadas. **O Quarteto Canônico:**
     - **Autarquias:** Criadas **diretamente por lei específica**. Personalidade jurídica de **direito público**. Exercem atividades típicas e exclusivas de Estado (ex.: INSS, Banco Central, Universidades Federais como a UnB). Regime de pessoal estatutário.
     - **Fundações Públicas:** Autorizadas por lei específica (lei complementar define área de atuação). Podem ser de direito público (autarquias fundacionais) ou de direito privado (ex.: FUNAI, Fiocruz).
     - **Empresas Públicas (EP):** Autorizadas por lei; personalidade de **direito privado**; capital **100% público**; sob qualquer forma societária (ex.: Correios, Caixa Econômica Federal). Regime celetista.
     - **Sociedades de Economia Mista (SEM):** Autorizadas por lei; personalidade de **direito privado**; capital misto (maioria com direito a voto é do Estado); obrigatoriamente constituídas sob a forma de **Sociedade Anônima (S/A)** (ex.: Petrobras, Banco do Brasil).
2. **Desconcentração vs. Descentralização:**
   - **Desconcentração:** Criação de **órgãos internos dentro da mesma pessoa jurídica** (envolve subordinação hierárquica). Mnemônico: Desconcen**O**ração = cria **Ó**rgãos.
   - **Descentralização:** Transferência da execução de serviços para **outra pessoa jurídica** diferente (não há hierarquia, mas apenas vinculação e controle finalístico / tutela). Mnemônico: Descentrali**E**ação = cria **E**ntidades.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Desconcentração Interna no Centro de Documentação e Informação - CEDI):** Quando a Diretoria-Geral da Câmara divide suas funções e estabelece a Diretoria do CEDI e, dentro dele, a Coordenação da Biblioteca Pedro Aleixo, ocorre **desconcentração pura** (distribuição interna de competências dentro da mesma pessoa jurídica União Federal, sob estrita hierarquia).
- **Cenário 2 (Catalogação de Publicação de Sociedade de Economia Mista):** O bibliotecário processa um livro técnico de geologia patrocinado pela Petrobras. Ele aplica as regras de catalogação sabendo que a Petrobras é uma **Sociedade de Economia Mista (administração indireta)**, razão pela qual entra em ordem direta (\`110 2# $a Petróleo Brasileiro S.A.\`) e não sob o nome do país.
- **Cenário 3 (Controle Finalístico sobre Contratos com Empresas Públicas):** A Câmara celebra contrato de prestação de serviços logísticos com a Empresa Brasileira de Correios e Telégrafos (Empresa Pública Federal). Como a relação é entre pessoas jurídicas distintas (União e ECT), não há hierarquia, mas vínculo contratual fiscalizado pela administração da Casa.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Entidade da Adm. Indireta | Personalidade Jurídica | Forma de Criação | Capital / Forma Societária | Regime de Pessoal |
| :--- | :--- | :--- | :--- | :--- |
| **Autarquia** | **Direito Público** | **Criada por lei** | Patrimônio público / Típica de Estado | Estatutário (Lei 8.112) |
| **Fundação Pública (Priv.)** | Direito Privado | Autorizada por lei | Patrimônio destacado | CLT ou Estatutário |
| **Empresa Pública** | Direito Privado | Autorizada por lei | **100% Público** / Qualquer forma | Celetista (CLT) |
| **Soc. Economia Mista** | Direito Privado | Autorizada por lei | Capital misto / **Obrigatoriamente S/A** | Celetista (CLT) |
| **Desconcentração** | Mesma pessoa jurídica | Cria Órgãos internos | **Com hierarquia** | Estatutário |
| **Descentralização** | Pessoas jurídicas distintas | Cria Entidades externas | **Sem hierarquia** (Tutela finalística) | Variável |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Desconcentração vs. Descentralização:** A banca afirma que *"a criação do INSS pela União é um exemplo de desconcentração administrativa"*. **Gabarito: ERRADO.** A criação de uma autarquia como o INSS transfere atribuições para uma nova pessoa jurídica, tratando-se de **descentralização**!
- **Criação de Autarquia por Decreto:** Dizer que o Presidente pode criar uma autarquia mediante decreto regulamentar. **Gabarito: ERRADO.** Autarquias só podem ser criadas por **lei ordinária específica** (art. 37, XIX da CF/88).
- **Hierarquia entre Ministério e Autarquia:** Afirmar que existe relação de subordinação e hierarquia rígida entre a União e suas autarquias. **Gabarito: ERRADO.** Há apenas vinculação administrativa, supervisão ministerial e tutela finalística, **sem hierarquia**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Decreto-Lei nº 200, de 25 de fevereiro de 1967*. Dispõe sobre a organização da Administração Federal.
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Organização da Administração Pública).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **MEIRELLES, Hely Lopes.** *Direito Administrativo Brasileiro*. 42. ed. São Paulo: Malheiros, 2016.
- **MELLO, Celso Antônio Bandeira de.** *Curso de Direito Administrativo*. 35. ed. São Paulo: Malheiros, 2021.`,
  checkpoints: [
    {
      id: 'cp-11-2-1',
      pergunta: 'Micro-Checkpoint 1: Atributos do Ato Administrativo e Casos Excepcionais',
      item: 'Em virtude do atributo da imperatividade, todos os atos emanados da Administração Pública, inclusive as certidões de tempo de serviço e os pareceres técnicos de descarte bibliográfico, impõem comandos coercitivos independentemente da anuência prévia do administrado.',
      gabarito: 'E',
      justificativa: 'Errado! A imperatividade NÃO está presente em todos os atos administrativos. Atos enunciativos (certidões, atestados, pareceres técnicos) limitam-se a declarar um fato ou emitir uma opinião técnica, sendo destituídos de coercitividade ou imposição unilateral.',
    },
    {
      id: 'cp-11-2-2',
      pergunta: 'Micro-Checkpoint 2: Controle Judicial de Anulação e Revogação',
      item: 'O Poder Judiciário, no exercício de sua função jurisdicional típica, pode anular atos administrativos eivados de vícios insanáveis de legalidade, sendo-lhe, todavia, vedado revogar ato discricionário sob o fundamento de que este se tornou inoportuno para o interesse público.',
      gabarito: 'C',
      justificativa: 'Correto! O controle judicial sobre atos dos demais Poderes é estritamente de legalidade e legitimidade (anulação). O mérito administrativo (juízo discricionário de oportunidade e conveniência) é privativo da Administração, não cabendo revogação pelo Judiciário.',
    },
    {
      id: 'cp-11-2-3',
      pergunta: 'Micro-Checkpoint 3: Responsabilidade do Parecerista e LINDB',
      item: 'Servidor bibliotecário da Câmara que emitir parecer técnico sugerindo a alienação de obras repetidas responde civil e administrativamente de forma objetiva por eventuais prejuízos orçamentários, independentemente de demonstração de dolo ou de erro grosseiro.',
      gabarito: 'E',
      justificativa: 'Errado! Nos termos do art. 28 da LINDB e da jurisprudência do STF e do TCU, os agentes públicos consultivos respondem pessoalmente por suas decisões ou opiniões técnicas apenas em caso de dolo ou erro grosseiro. A responsabilidade pessoal do parecerista é subjetiva qualificada.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-2-1',
        periodo: '1965',
        disciplina: 'Controle de Atos',
        focoPrincipal: 'Lei nº 4.717/1965 (Ação Popular): definição formal dos requisitos de validade (COFIFOMOB)',
        figuraChave: 'Ação Popular',
      },
      {
        id: 'tl-11-2-2',
        periodo: '1969',
        disciplina: 'Jurisprudência Sumulada',
        focoPrincipal: 'Súmula 473 do STF: autotutela administrativa (anulação de atos ilegais e revogação de inoportunos)',
        figuraChave: 'STF',
      },
      {
        id: 'tl-11-2-3',
        periodo: '2007',
        disciplina: 'Consultoria Pública',
        focoPrincipal: 'STF - MS 24.631/DF: fixação dos parâmetros de responsabilização de pareceristas jurídicos e técnicos',
        figuraChave: 'Supremo Tribunal Federal',
      },
      {
        id: 'tl-11-2-4',
        periodo: '2018',
        disciplina: 'Segurança Jurídica',
        focoPrincipal: 'Lei nº 13.655/2018 (LINDB, art. 28): exigência de dolo ou erro grosseiro para punição do parecerista',
        figuraChave: 'LINDB',
      },
    ],
    autores: [
      {
        id: 'aut-11-2-1',
        nome: 'Celso Antônio Bandeira de Mello',
        ano: '2021',
        obraPrincipal: 'Curso de Direito Administrativo (35ª edição)',
        ideiaChave: 'Teoria das nulidades no direito administrativo e aprofundamento da teoria dos motivos determinantes.',
        chipPegadinha: 'Afirmar que a Administração pode alterar a fundamentação fática do ato após sua impugnação judicial.',
        detalhesOpcionais: 'Defensor ferrenho de que motivo falso acarreta nulidade absoluta insuscetível de convalidação.',
      },
      {
        id: 'aut-11-2-2',
        nome: 'Maria Sylvia Zanella Di Pietro',
        ano: '2023',
        obraPrincipal: 'Direito Administrativo',
        ideiaChave: 'Mnemônico dos atributos PATI e diferenciação cristalina entre licença (vinculada) e autorização (precária).',
        chipPegadinha: 'Dizer que autorização administrativa gera direito adquirido a indenização quando revogada.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-2-1',
        afirmacao: 'O defeito relativo ao motivo determinante de um ato administrativo pode ser convalidado pela autoridade superior, desde que a medida não cause prejuízo a terceiros.',
        gabarito: 'E',
        porQue: 'Vício no MOTIVO é insanável e gera nulidade do ato. Convalidação só é admitida para vícios sanáveis na FORMA e na COMPETÊNCIA (mnemônico FO-CO).',
      },
      {
        id: 'peg-11-2-2',
        afirmacao: 'A revogação de um ato administrativo opera efeitos ex nunc, respeitando os direitos já adquiridos durante sua vigência.',
        gabarito: 'C',
        porQue: 'Correto! A revogação baseia-se em conveniência e oportunidade, cessando a eficácia do ato apenas dali para a frente (ex nunc), resguardados os efeitos já consolidados.',
      },
      {
        id: 'peg-11-2-3',
        afirmacao: 'O parecer obrigatório emitido por consultor legislativo ou parecerista vincula a decisão da autoridade administrativa, que não pode adotar conclusão diversa.',
        gabarito: 'E',
        porQue: 'O parecer OBRIGATÓRIO exige que a autoridade o solicite para decidir, mas ela pode adotar entendimento diverso, desde que motive expressamente sua decisão. Apenas o parecer VINCULANTE obriga a autoridade.',
      },
    ],
  },
};
