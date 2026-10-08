import type { ModuloFilho } from '../../../domain/types';

export const submodulo73: ModuloFilho = {
  id: 'sub-7-3',
  numero: '7.3',
  titulo: 'Conservação Preventiva: Higienização, Acondicionamento e Manuseio de Acervos',
  descricaoCurta: 'Diferenças entre preservação, conservação e restauração, técnicas de higienização mecânica a seco (trinchas, esponjas e aspiradores HEPA), materiais adequados de acondicionamento (papel alcalino/acid-free e poliéster vs. PVC), pequenos reparos com papel japonês e regras ergonômicas de manuseio e estantes.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Norma Cassares', 'Ingrid Beck', 'Maria Luísa Soares', 'Paul N. Banks', 'Library of Congress', 'IFLA-PAC'],
  alertasCebraspe: [
    'Hierarquia conceitual: Preservação (conjunto global de medidas políticas, administrativas, financeiras e prediais); Conservação Preventiva (ações indiretas sobre o meio ambiente, controle de temperatura/umidade, CIP e acondicionamento para retardar a deterioração); Conservação Curativa (ações diretas sobre o item para estancar dano ativo em curso); Restauração (intervenção direta para recuperar a integridade estética e física perdida, regida pela reversibilidade e intervenção mínima).',
    'Higienização mecânica a seco: a limpeza dos livros nas estantes deve ser feita com trinchas de cerdas naturais macias e aspirador de pó com filtro HEPA e controle de sucção regulado, protegendo o bocal com gaze para não sugar pedaços de papel soltos. O movimento de limpeza das páginas internas deve ser feito SEMPRE do centro da folha em direção às margens externas, jamais empurrando a sujeira para dentro da canaleta da lombada.',
    'Plásticos permitidos vs. proibidos: são permitidos polímeros inertes quimicamente estáveis sem plastificantes, como Poliéster (Mylar / Melinex), Polietileno e Polipropileno virgens. O PVC (policloreto de vinila) é TERMINANTEMENTE PROIBIDO, pois degrada liberando ácido clorídrico corrosivo e plastificantes oleosos que dissolvem tintas e emulsões.',
    'Pequenos Reparos Científicos: o uso de fitas adesivas comerciais (durex, fita crepe, fita isolante) e colas brancas plásticas comuns é PROIBIDO, pois provocam manchas escuras irreversíveis e acidificam a celulose. Reparos de rasgos exigem papel japonês de fibras longas (kozo) e adesivo neutro reversível (amido purificado ou metilcelulose).',
    'Como retirar o livro da estante: empurram-se os livros vizinhos levemente para trás e segura-se o livro desejado pelo meio do corpo da lombada. É expressamente PROIBIDO puxar o livro pelo topo superior da lombada (cabeça/headcap), vício comum que rasga a coifa e a encadernação.',
  ],
  quadroComparativo: {
    titulo: 'Materiais Permitidos e Proibidos no Acondicionamento de Acervos',
    colunas: ['Categoria de Material', 'Materiais Estáveis Recomendados (Aprovados)', 'Materiais Proibidos na Conservação (Nocivos)', 'Danos Provocados pelos Proibidos', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Papéis e Cartões', 'Papel permanente / alcalino (*acid-free*, pH 7,5 a 8,5 com reserva de CaCO3)', 'Papel jornal, papel kraft comum, papelão reciclado ácido, papel pardo', 'Migração de acidez, hidrólise ácida, amarelamento acelerado e fragilização', 'Afirmar que o papel kraft comum é seguro para embalar livros históricos (FALSO: é muito ácido).'],
      ['Invólucros Plásticos', 'Poliéster (Mylar / Melinex), Polietileno (PE) e Polipropileno (PP) virgens', 'PVC (policloreto de vinila), celofane e plásticos com plastificantes voláteis', 'Liberação de vapores de ácido clorídrico, desprendimento de óleo e colagem na tinta', 'Dizer que envelopes plásticos de PVC são recomendados pela transparência (FALSO: destroem o acervo).'],
      ['Prendedores e Fixadores', 'Fitas de cadarço de algodão cru, tiras de papel alcalino e clipes plásticos', 'Clipes metálicos ferrosos, grampos de metal e elásticos de borracha de escritório', 'Ferrugem indelével, oxidação de folhas e ressecamento/derretimento da borracha', 'Usar elásticos de borracha para prender processos ou cadernos soltos (FALSO: o elástico derrete e cola).'],
      ['Adesivos e Fitas', 'Cola de amido vegetal pura, metilcelulose e papel japonês (*washi*)', 'Fitas adesivas comuns (durex, fita crepe, fita isolante, cola PVA escolar ácida)', 'Escurecimento do papel, perda irreversível de legibilidade e impregnação da massa adesiva', 'Afirmar que durex transparente protege rasgos contra umidade (FALSO: destrói a celulose).'],
      ['Guarda de Grandes Formatos', 'Armazenamento horizontal em mapotecas ou prateleiras planas (pilhas de até 3 volumes)', 'Armazenamento vertical forçado em estantes comuns para livros pequenos', 'Deformação gravitacional permanente da lombada, quebra de costura e desprendimento de folhas', 'Guardar livros gigantescos deitados em pilhas de 10 a 15 volumes (FALSO: o peso esmaga os da base).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Hierarquia Conceitual da Salvaguarda Patrimonial

Na doutrina contemporânea da conservação (Cassares, 2000; Beck, 1995; Soares, 2005; IFLA, 2010), estabelece-se uma distinção terminológica estrita frequentemente explorada em provas de concurso:

\`\`\`tree
TITLE: Hierarquia Conceitual da Salvaguarda Patrimonial (Cassares, Beck, IFLA)
- Preservação Geral | Macroestratégia, políticas institucionais, recursos orçamentários e infraestrutura predial
  - Conservação Preventiva (Intervenção Indireta) | Atuação sobre o ambiente e condições de guarda para retardar a deterioração
    - Climatização Contínua 24h | Estabilidade de temperatura (18°C a 22°C) e umidade relativa (45% a 55%)
    - Controle Integrado de Pragas (CIP) | Monitoramento por armadilhas e vedação sem inseticidas nocivos
    - Acondicionamento Estável | Caixas, envelopes e pastas de papel alcalino permanente (pH neutro)
    - Higienização Periódica | Limpeza mecânica com trinchas macias e aspirador com filtro HEPA
  - Conservação Curativa (Intervenção Direta Emergencial) | Ação imediata sobre o documento para estancar degradação ativa
    - Estabilização Pós-Sinistro | Secagem técnica imediata após alagamento ou inundação
    - Desinfestação Segura | Tratamento por anóxia (privação de oxigênio) contra insetos ativos
    - Neutralização Emergencial | Remoção de focos fúngicos ativos e controle de acidez destrutiva
  - Restauração (Intervenção Direta Especializada) | Recomposição da integridade física, funcional e estética
    - Reversibilidade Plena | Uso de adesivos solúveis (amido/metilcelulose) e intervenção mínima
    - Reintegração Harmoniosa | Enxertos com papel japonês (kozo) de gramatura e pH compatíveis
    - Respeito à Autenticidade | Preservação de marcas históricas legítimas sem falsificação de época
\`\`\`

* **Preservação:** Conceito abrangente e macroestrutural. Engloba todas as decisões gerenciais, políticas, orçamentárias, prediais, de segurança contra incêndio/pânico e de capacitação profissional que asseguram a integridade e o acesso continuado às coleções a longo prazo.
* **Conservação Preventiva:** Conjunto de ações de **intervenção indireta**, voltadas a desacelerar a taxa de deterioração e prevenir sinistros atuando sobre o meio ambiente e as condições de guarda (controle de temperatura e UR, filtragem de luz, controle integrado de pragas, higienização periódica de estantes, acondicionamento individual estável e treinamento de usuários).
* **Conservação Curativa:** Ações de **intervenção direta** sobre o documento quando este já se encontra em processo ativo de degradação, com a finalidade exclusiva de **estancar a deterioração ativa** e estabilizar o suporte (ex.: secagem emergencial após alagamento, controle de contaminação fúngica ativa, remoção de ferrugem ativa).
* **Restauração:** Conjunto de intervenções especializadas de ação direta sobre a matéria degradada, com o objetivo de **recuperar a integridade física, funcional e estética do documento**, restabelecendo sua legibilidade.
  * **Princípios Éticos Fundamentais da Restauração:**
    1. *Intervenção Mínima:* Agir apenas no estritamente necessário para garantir a estabilidade física do item.
    2. *Reversibilidade dos Materiais:* Todo produto químico ou adesivo aplicado deve poder ser removido no futuro sem causar danos ao suporte original.
    3. *Compatibilidade Físico-Química:* Os materiais introduzidos devem ser química e mecanicamente compatíveis com os originais históricos.
    4. *Respeito à Autenticidade:* A reintegração não pode falsificar a história do documento; o restauro deve ser discernível da matéria original.

---

### 2. Protocolo de Higienização Mecânica a Seco

A poeira acumulada é uma matriz agressiva composta por sílica abrasiva, fuligem, esporos de fungos, ácaros e células epiteliais. É higroscópica (retém água ácida) e nutre pragas biológicas:

* **Materiais e Equipamentos Aprovados:**
  * **Trinchas e Pincéis Macios:** Cerdas naturais de animais (pelo de marta, cabra ou cavalo suave), macias o suficiente para não riscar nem arranhar os papéis e tintas históricas.
  * **Aspirador de Pó Regulável com Filtro HEPA:** O aspirador deve possuir motor com controle de potência de sucção e **filtro absoluto HEPA** (que retém 99,97% das partículas de até 0,3 mícron, impedindo a recirculação de esporos fúngicos no ar). O bocal deve ser recoberto com tela de tule ou gaze de algodão para evitar que fragmentos de folhas soltas sejam sugados.
  * **Esponjas Vulcanizadas de Borracha (*Wishab* / *Smoke Sponges*):** Utilizadas a seco para absorver fuligem e sujidade pesada de capas e cortes sem ação química líquida.
* **Técnica Sequencial de Limpeza do Livro:**
  1. Segurar o livro firmemente fechado, com o **corte superior voltado para baixo**, impedindo que a poeira penetre no interior das folhas durante a limpeza.
  2. Passar a trincha suavemente nos cortes: primeiro o **corte superior**, depois o **corte dianteiro** e por último o **corte inferior**.
  3. Limpar a encadernação externa (capas anterior e posterior e lombada).
  4. Para a limpeza de folhas internas empoeiradas: passar o pincel suavemente **do centro da folha (canaleta interna) em direção às bordas externas**, em movimentos unidirecionais contínuos.
  5. *Proibição Terminante:* O uso de panos úmidos, álcool líquido ou em gel, lustra-móveis, solventes e produtos de limpeza doméstica sobre as obras bibliográficas é terminantemente proibido.

---

### 3. Acondicionamento Científico de Documentos

O acondicionamento individual atua como uma microbarreira protetora contra luz, poeira e flutuações higrotérmicas:

* **Papel e Cartão Alcalino Permanente (Norma ISO 9706):**
  * Confeccionado com celulose química purificada, pH neutro/alcalino entre **7,5 e 8,5**, livre de ácido e lignina, e dotado de **reserva alcalina de pelo menos 2% a 3% de carbonato de cálcio ($CaCO_3$)**.
  * Utilizado para confeccionar envelopes, camisas, pastas de quatro abas e caixas de guarda tipo concha (*clamshell* ou *phase boxes*).
* **Plásticos Quimicamente Estáveis vs. Nocivos:**
  * **Aprovados:** Filmes de **Poliéster puro** (Mylar tipo D ou Melinex 516), **Polietileno (PE)** e **Polipropileno (PP)** virgens. São filmes cristalinos, quimicamente inertes, termicamente estáveis e que não desprendem vapores voláteis.
  * **Proibição Absoluta do PVC (Policloreto de Vinila):**
    * O PVC é extremamente instável: na presença de calor e luz, sua estrutura polimérica quebra-se, liberando **gás ácido clorídrico ($HCl$)**, que corrói e acidifica o papel ao redor.
    * Além disso, os plastificantes voláteis (ftalatos) adicionados para dar maleabilidade ao PVC exsudam com o tempo, formando uma camada pegajosa oleosa que dissolve tintas, gravuras e emulsões fotográficas, colando os documentos de forma irreversível.
* **Elementos de Fixação Proibidos:**
  * Banimento total de clipes metálicos comuns, grampos de metal ferroso, alfinetes e elásticos de borracha.
  * O metal oxida em contato com a umidade relativa, gerando ferrugem que queima e perfura o papel. O elástico de borracha de escritório degrada-se rapidamente: primeiro resseca e quebra, depois derrete quimicamente, aderindo à celulose em uma pasta ácida destrutiva.
  * Para prender papéis soltos ou cadernos descolados, utilizam-se **fitas de cadarço de algodão cru não alvejado** ou clipes plásticos quimicamente inertes com proteção de papel alcalino.

---

### 4. Pequenos Reparos Científicos e Princípio da Reversibilidade

O reparo emergencial de rasgos em livros de valor histórico ou patrimonial não pode ser executado com materiais improvisados de escritório:
* **O Desastre das Fitas Adesivas Comerciais:**
  * O uso de fitas adesivas comuns (durex, fita crepe, fita isolante, fitas plásticas) é um dos maiores causadores de destruição em bibliotecas.
  * Os adesivos de fitas comerciais contêm borracha sintética e solventes ácidos altamente instáveis. Com o tempo, o adesivo sofre oxidação, resseca, perde a aderência e deixa o filme plástico solto, enquanto a massa adesiva ácida penetra nas fibras do papel, deixando uma **mancha castanho-escura translúcida indelével** que torna o texto ilegível e quebra o suporte.
* **O Reparo Científico Reversível:**
  * Realizado exclusivamente com **papel japonês de fibras longas** (*washi*, 100% fibra vegetal de kozo ou mitsumata), que possui excelente resistência mecânica, espessura ultrafina e transparência natural.
  * Fixado com adesivos naturais neutros e **100% reversíveis em água**: **cola de amido purificado de trigo ou arroz** (*wheat starch paste*) ou éteres de celulose purificados (**metilcelulose ou carboximetilcelulose - CMC**).

---

### 5. Regras Ergonômicas de Armazenamento e Manuseio nas Estantes

* **Como Retirar o Livro da Estante:**
  * O procedimento correto exige empurrar suavemente os livros vizinhos (à esquerda e à direita) cerca de 2 a 3 centímetros para trás na prateleira, expondo as faces laterais do volume desejado.
  * Segura-se o livro com os dedos pelo meio do corpo da lombada, puxando-o para a frente.
  * *Vício Crítico Condenado:* Puxar o livro pela borda superior da lombada (a cabeça ou *headcap*). Esse hábito corriqueiro provoca a ruptura e o rasgamento imediato da coifa e da encadernação do volume.
* **Disposição nas Estantes:**
  * Os livros devem ser armazenados na posição vertical, apoiados por suportes metálicos de estante (*aparadores de livros* com pintura epóxi e bordas arredondadas).
  * Os livros não devem ficar excessivamente apertados (dificulta a retirada e comprime a costura) nem folgados demais (faz com que o livro tombe lateralmente, empenando a encadernação).
* **Armazenamento de Obras de Grandes Formatos (In-fólio, Jornais e Atlas):**
  * Livros pesados e de grandes dimensões **não suportam a guarda vertical**, pois o peso do próprio miolo deforma e rompe a costura da lombada pela gravidade.
  * Devem ser guardados **deitados na posição horizontal** em prateleiras planas ou mapotecas, em pilhas de **no máximo 2 a 3 volumes**, evitando que o sobrepeso excessivo esmague a encadernação dos livros da base.`,
  checkpoints: [
    {
      id: 'cp-7-3-1',
      pergunta: 'Micro-Checkpoint 1: Técnicas de Manuseio e Retirada de Livros',
      item: 'Para preservar a integridade das encadernações nas estantes de uma biblioteca, o usuário ou bibliotecário deve retirar o livro puxando-o com firmeza pela parte superior da lombada (cabeça), o que facilita sua extração sem atrito com os volumes vizinhos.',
      gabarito: 'E',
      justificativa: 'Errado! Essa é a prática mais destrutiva em bibliotecas. Puxar pela ponta superior da lombada causa o rasgamento do revestimento. O correto é empurrar os livros adjacentes para trás e puxar o exemplar segurando pelo meio da lombada.',
    },
    {
      id: 'cp-7-3-2',
      pergunta: 'Micro-Checkpoint 2: Materiais para Acondicionamento de Obras Raras',
      item: 'No acondicionamento e proteção de fotografias e papéis históricos, o emprego de invólucros plásticos confeccionados em PVC (policloreto de vinila) é expressamente desaconselhado pelos conservadores em virtude da liberação contínua de gases ácidos e plastificantes químicos voláteis.',
      gabarito: 'C',
      justificativa: 'Correto! O PVC é quimicamente instável e libera ácido clorídrico; devem ser utilizados exclusivamente poliéster estável (Mylar), polietileno ou polipropileno.',
    },
    {
      id: 'cp-7-3-3',
      pergunta: 'Micro-Checkpoint 3: Emulação vs Migração na Preservação Digital',
      item: 'A estratégia de emulação em preservação digital preserva o software e o hardware originais em museus físicos para permitir a execução pontual dos arquivos legados em suas máquinas de época.',
      gabarito: 'E',
      justificativa: 'Errado! A emulação NÃO consiste em guardar o hardware físico, mas em recriar por software (código emulador) o ambiente operacional e a arquitetura de processamento em computadores modernos para rodar os dados sem convertê-los.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-3-1',
        periodo: '1970 / 1980',
        disciplina: 'Conservação Preventiva',
        focoPrincipal: 'Mudança de paradigma: prioridade absoluta à conservação preventiva do ambiente em vez da restauração pontual',
        figuraChave: 'Paul N. Banks',
      },
      {
        id: 'tl-7-3-2',
        periodo: '1994',
        disciplina: 'Padrão Internacional ISO 9706',
        focoPrincipal: 'Normatização dos requisitos de papel permanente (pH alcalino, reserva de carbonato e livre de lignina)',
        figuraChave: 'International Organization for Standardization (ISO)',
      },
      {
        id: 'tl-7-3-3',
        periodo: '2000 / 2005',
        disciplina: 'Manuais Brasileiros de Higienização',
        focoPrincipal: 'Sistematização de técnicas de higienização a seco com filtros HEPA e materiais inertes no Brasil',
        figuraChave: 'Norma Cassares e Maria Luísa Soares',
      },
    ],
    autores: [
      {
        id: 'aut-7-3-1',
        nome: 'Paul N. Banks',
        ano: 1981,
        obraPrincipal: 'Preservation of Library and Archival Materials',
        ideiaChave: 'Pai da conservação preventiva moderna: o ambiente, o acondicionamento e as estantes definem a longevidade do acervo.',
        chipPegadinha: 'Banks defende a conservação indireta em escala de massa contra a restauração artesanal isolada.',
      },
      {
        id: 'aut-7-3-2',
        nome: 'Maria Luísa Soares',
        ano: 2005,
        obraPrincipal: 'Preservação de Acervos Bibliográficos e Arquivísticos',
        ideiaChave: 'Protocolos de higienização a seco, uso de filtros HEPA e materiais inertes de acondicionamento.',
        chipPegadinha: 'A higienização deve ser mecânica a seco, nunca utilizando panos úmidos ou produtos químicos de limpeza doméstica no livro.',
      },
      {
        id: 'aut-7-3-3',
        nome: 'Norma Cassares',
        ano: 2000,
        obraPrincipal: 'Como fazer conservação preventiva em arquivos e bibliotecas',
        ideiaChave: 'Acondicionamento em papel alcalino, banimento do PVC, manuseio ergonômico e pequenos reparos com papel japonês.',
        chipPegadinha: 'O reparo científico exige cola de amido reversível e papel japonês, nunca fita adesiva ou durex.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-7-3-1',
        afirmacao: 'O uso de fitas adesivas transparentes comuns do tipo "durex" é uma técnica recomendada de conservação preventiva para reparar rasgos superficiais em páginas de livros raros.',
        gabarito: 'E',
        porQue: 'Fitas adesivas comerciais comuns contêm adesivos sintéticos à base de borracha e solventes que oxidam, tornam-se marrons, acidificam a celulose e mancham o papel de forma indelével e irreversível.',
      },
      {
        id: 'peg-7-3-2',
        afirmacao: 'Na higienização mecânica a seco de um livro com trincha macia, o movimento correto deve ser executado no sentido das margens externas em direção ao centro da lombada, acumulando as impurezas na canaleta interna do volume.',
        gabarito: 'E',
        porQue: 'O movimento deve ser do centro para fora, ou de cima para baixo nos cortes, para EXPULSAR a poeira para fora do livro, e nunca empurrá-la para dentro da canaleta ou miolo.',
      },
      {
        id: 'peg-7-3-3',
        afirmacao: 'Para economizar espaço nas estantes, livros de grandes formatos como atlas e volumes de jornais encadernados devem ser mantidos estritamente na vertical e apertados entre aparadores metálicos.',
        gabarito: 'E',
        porQue: 'Obras de grandes formatos devem ser armazenadas deitadas horizontalmente em prateleiras planas (pilhas de até 3 volumes) para evitar a deformação gravitacional e o rasgamento da encadernação.',
      },
    ],
  },
};
