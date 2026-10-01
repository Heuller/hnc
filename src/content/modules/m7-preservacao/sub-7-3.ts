import type { ModuloFilho } from '../../../domain/types';

export const submodulo73: ModuloFilho = {
  id: 'sub-7-3',
  numero: '7.3',
  titulo: 'Conservação Preventiva: Higienização, Acondicionamento e Manuseio de Acervos',
  descricaoCurta: 'Diferenças entre preservação, conservação e restauração, técnicas de higienização mecânica a seco (trinchas, esponjas e aspiradores HEPA), materiais adequados de acondicionamento (papel alcalino/acid-free e poliéster vs. PVC) e regras ergonômicas de manuseio e estantes.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Ingrid Beck', 'Norma Cassares', 'Maria Luísa Soares', 'Paul N. Banks', 'Library of Congress'],
  alertasCebraspe: [
    'Hierarquia conceitual: Preservação (conjunto global de medidas políticas, administrativas e financeiras); Conservação Preventiva (ações indiretas sobre o meio ambiente, controle de temperatura/umidade e acondicionamento para retardar a deterioração); Conservação Curativa (ação direta sobre o item para estancar dano ativo); Restauração (intervenção direta para recuperar a integridade estética e física perdida).',
    'Higienização mecânica a seco: a limpeza dos livros nas estantes deve ser feita com trinchas de cerdas naturais macias e aspirador de pó com filtro HEPA e controle de sucção regulado, protegendo o bocal com gaze para não sugar pedaços de papel soltos.',
    'Movimento correto de higienização: limpa-se sempre das margens em direção ao centro do livro, NUNCA empurrando a poeira para dentro da canaleta da lombada.',
    'Plásticos permitidos vs. proibidos: permitidos são polímeros inertes quimicamente estáveis como Poliéster (Mylar/Melinex), Polietileno e Polipropileno. O PVC (policloreto de vinila) é TERMINANTEMENTE PROIBIDO, pois degrada liberando ácido clorídrico e plastificantes oleosos destrutivos.',
    'Como retirar o livro da estante: empurram-se os livros vizinhos levemente para trás e segura-se o livro desejado pelo meio do corpo da lombada. É expressamente PROIBIDO puxar o livro pelo topo superior da lombada (cabeça/headcap), vício comum que rasga a encadernação.',
  ],
  quadroComparativo: {
    titulo: 'Materiais Permitidos e Proibidos no Acondicionamento de Acervos',
    colunas: ['Categoria de Material', 'Materiais Estáveis Recomendados (Aprovados)', 'Materiais Proibidos na Conservação (Nocivos)', 'Danos Provocados pelos Proibidos'],
    linhas: [
      ['Papéis e Cartões', 'Papel permanente / alcalino (*acid-free*, pH 7,5 a 8,5 com reserva de CaCO3)', 'Papel jornal, papel kraft comum, papelão reciclado ácido, papel pardo', 'Migração de acidez, hidrólise ácida, amarelamento acelerado e fragilização'],
      ['Invólucros Plásticos', 'Poliéster (Mylar / Melinex), Polietileno (PE) e Polipropileno (PP) virgens', 'PVC (policloreto de vinila), celofane e plásticos com plastificantes voláteis', 'Liberação de vapores de ácido clorídrico, desprendimento de óleo e colagem na tinta'],
      ['Prendedores e Fixadores', 'Fitas de cadarço de algodão cru, tiras de papel alcalino e clipes plásticos', 'Clipes metálicos ferrosos, grampos de metal e elásticos de borracha de escritório', 'Ferrugem indelével, oxidação de folhas e ressecamento/derretimento da borracha'],
      ['Adesivos e Fitas', 'Cola de amido vegetal pura, metilcelulose e filme adesivo de restauração reversível', 'Fitas adesivas comuns (durex, fita crepe, fita isolante, cola plástica branca PVA escolar)', 'Escurecimento do papel, perda irreversível de legibilidade e impregnação da massa adesiva'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Hierarquia Conceitual da Salvaguarda Patrimonial

Na literatura contemporânea da conservação (Beck, 1995; Cassares, 2000; IFLA, 2010), estabelece-se uma distinção terminológica estrita frequentemente explorada pela banca Cebraspe:

* **Preservação:** Conceito amplo e macroestrutural. Engloba todas as decisões gerenciais, políticas, financeiras, de segurança contra incêndio/pânico, prediais e de capacitação de recursos humanos que garantem a sobrevida das coleções.
* **Conservação Preventiva:** Conjunto de medidas de **ação indireta**, voltadas a desacelerar a deterioração e prevenir danos atuando sobre o meio ambiente circundante (controle de climatização, filtros de luz, controle integrado de pragas, higienização das estantes, planos de contingência e acondicionamento adequado).
* **Conservação Curativa:** Ações de **intervenção direta** realizadas no próprio documento com o propósito de estancar um processo ativo de dano (ex.: secagem emergencial pós-inundação, estabilização de fungos ativos, desinfestação por anóxia).
* **Restauração:** Conjunto de ações aplicadas diretamente ao documento que já sofreu degradação ou perda material, com o fim de **recuperar sua integridade física, funcional e estética**, orientando-se pelo princípio ético da reversibilidade e do respeito à autenticidade histórica.

---

### 2. Protocolo de Higienização Mecânica a Seco

A poeira acumulada é uma mistura de partículas minerais abrasivas, fuligem, esporos de fungos, ácaros e fragmentos de pele humana. A poeira é higroscópica (retém umidade) e ácida, agindo como catalisador de mofo e alimento para traças:

* **Equipamentos e Materiais Aprovados:**
  * **Trinchas e Pincéis:** Pincéis largos e macios de cerdas naturais (pelo de marta, cabra ou cerdas suaves).
  * **Aspirador de Pó com Filtro HEPA:** O aspirador deve possuir regulação de potência de sucção e **filtro absoluto HEPA** (que retém 99,97% das micropartículas de até 0,3 mícron, impedindo que os esporos voltem ao ar). O bocal deve ser protegido com tela de tule ou gaze de algodão para evitar a sucção acidental de pedaços de folhas fragilizadas.
  * **Esponjas Especiais de Borracha Vulcanizada (*Wishab* / *Smoke Sponges*):** Utilizadas a seco para absorver e reter poeira pesada e fuligem de capas e cortes sem abrasão mecânica.
* **Técnica Sequencial de Limpeza do Livro:**
  1. Segurar o livro firmemente fechado com o corte superior voltado para baixo, para que a poeira não penetre no interior das folhas.
  2. Passar a trincha suavemente nos cortes: **corte superior**, depois **corte dianteiro** e por último **corte inferior**.
  3. Limpar as capas externa e internamente.
  4. Caso as páginas internas estejam sujas, limpá-las sempre **do centro da folha em direção às margens externas**, em movimentos suaves e unidirecionais.

---

### 3. Acondicionamento Científico de Documentos

O acondicionamento individual protege as obras contra a ação da luz, poeira e flutuações microclimáticas:

* **O Papel Permanente / Alcalino (Norma ISO 9706):**
  * Deve ser livre de ácido (*acid-free*), com pH entre 7,5 e 8,5, teor de lignina nulo ($< 1\\%$) e conter uma **reserva alcalina de carbonato de cálcio ($2\\%$ a $3\\%$)** para neutralizar acidez futura.
  * Utilizado para confeccionar pastas de quatro abas, envelopes, camisas e caixas tipo concha (*clamshell* ou *phase boxes*).
* **Filmes Plásticos Seguros vs. Danosos:**
  * **Permitidos:** Filmes de **Poliéster puro sem plastificantes** (Mylar tipo D ou Melinex 516), Polietileno e Polipropileno virgens. São quimicamente estáveis, cristalinos e inertes.
  * **Proibido Absoluto:** O **PVC (Policloreto de Vinila)**. O PVC se degrada espontaneamente com o calor e a luz, liberando gás ácido clorídrico que rói o papel e desprendendo plastificantes oleosos que aderem às tintas, destruindo fotografias e documentos de forma irreversível.`,
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
    ],
  },
};
