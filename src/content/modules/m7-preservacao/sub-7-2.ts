import type { ModuloFilho } from '../../../domain/types';

export const submodulo72: ModuloFilho = {
  id: 'sub-7-2',
  numero: '7.2',
  titulo: 'Agentes Biológicos de Degradação e Controle Integrado de Pragas (CIP)',
  descricaoCurta: 'Insetos bibliófagos (traças, brocas, cupins e baratas), fungos filamentosos (mofo e foxing), roedores, superação da fumigação química e as técnicas ecológicas modernas: Anóxia (gás inerte) e Congelamento.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Ingrid Beck', 'Norma Cassares', 'José Luiz Pedersoli Jr.', 'IFLA Preservation and Conservation Core Activity'],
  alertasCebraspe: [
    'Atenção ao abandono da fumigação química tradicional: o uso de pesticidas tóxicos como brometo de metila, óxido de etileno ou pastilhas de fosfeto de alumínio é PROIBIDO na conservação moderna, por ser cancerígeno para bibliotecários e usuários e reagir quimicamente degradando papéis e tintas.',
    'A técnica ecológica padrão-ouro para desinfestação é a ANÓXIA (atmosfera modificada sem oxigênio): o material infestado é selado com gás inerte (nitrogênio puro ou argônio) ou absorvedores de oxigênio, levando à asfixia total de ovos, larvas e adultos sem resíduos químicos.',
    'As brocas (besouros da família Anobiidae) são os insetos mais destrutivos para encadernações e blocos de folhas, pois suas larvas cavam galerias e túneis circulares contínuos na celulose.',
    'Fungos e bolores: os esporos estão sempre presentes em suspensão no ar ambiente. Eles só germinam e atacam a celulose se a Umidade Relativa ultrapassar 65% combinada com calor e estagnação do ar.',
    'Controle Integrado de Pragas (CIP): foca na prevenção estrutural (telas milimétricas, vedação predial, quarentena para novas doações, limpeza mecânica regular e armadilhas adesivas de monitoramento).',
  ],
  quadroComparativo: {
    titulo: 'Principais Insetos Bibliófagos e Danos Causados aos Acervos',
    colunas: ['Inseto Bibliófago', 'Família / Ordem', 'Mecanismo de Ataque ao Livro', 'Sinais Característicos no Acervo'],
    linhas: [
      ['Broca dos Livros', 'Coleoptera (*Anobiidae*)', 'As larvas cavam túneis cilíndricos profundos através do miolo e da madeira/couro das capas', 'Furos circulares perfeitos nas folhas e pó fino amarelado (*frass*) nas prateleiras'],
      ['Traça dos Livros', 'Thysanura (*Lepisma saccharina*)', 'Ataca superficialmente colas de amido, dextrina, papéis acetinados e gravuras', 'Bordas rendilhadas e erosões superficiais irregulares nas páginas (age no escuro)'],
      ['Cupim de Madeira / Subterrâneo', 'Isoptera (*Cryptotermes*)', 'Destrói a celulose massivamente em galerias contínuas, devorando o miolo inteiro', 'Perda estrutural total do livro, restando apenas uma casca oca e resíduos terrosos'],
      ['Barata', 'Blattaria (*Periplaneta americana*)', 'Roe encadernações de couro, pano, colas de lombadas e papel machê', 'Desgaste abrasivo em capas e manchas ácidas marrons de dejetos'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Ameaça Biológica nos Acervos Documentais

Os agentes biológicos constituem uma das mais severas fontes de perda patrimonial irrecuperável em bibliotecas tropicais como as brasileiras (Cassares, 2000; Beck, 1995, acervo \`Preservação física\`):

#### A. Insetos Bibliófagos (Pragas de Bibliotecas)
* **Brocas (*Coleoptera / Anobiidae*):**
  * O inseto adulto deposita ovos nas frestas das encadernações ou na lombada.
  * As **larvas** eclodem e alimentam-se de celulose e amido, perfurando longas galerias sinuosas e circulares que atravessam centenas de páginas, transformando blocos compactos de livros em pó.
* **Traças (*Lepisma saccharina*):**
  * Insetos ápteros, ágeis, prateados e fotofóbicos (fogem da luz). Têm preferência por amido, dextrina, encadernações em tecido e papéis de alta qualidade. Fazem raspagens superficiais nas margens das folhas.
* **Cupins (*Isoptera*):**
  * Os cupins de madeira seca (*Cryptotermes brevis*) e os cupins de solo colonizam estantes e devoram o interior dos livros, deixando intactas as capas externas para se protegerem da luz.

#### B. Microrganismos (Fungos Filamentosos / Mofo)
* Os esporos de fungos (*Aspergillus*, *Penicillium*, *Trichoderma*) flutuam onipresentes na atmosfera.
* **Fatores de Eclosão:** Quando a **Umidade Relativa supera 65%** e a temperatura ultrapassa 22 °C, os esporos germinam.
* **Danos:** Os fungos secretam enzimas celulolíticas que digerem a celulose e produzem ácidos que despolimerizam o papel, deixando manchas pigmentadas coloridas indeléveis conhecidas como **foxing** (manchas ferruginosas ou marrons).

---

### 2. O Controle Integrado de Pragas (CIP / IPM)

O **Controle Integrado de Pragas** substituiu o antigo modelo reativo de "dedetização tóxica periódica":
1. **Inspeção e Quarentena:** Nenhuma obra doada ou adquirida entra diretamente no acervo ativo sem antes passar por inspeção minuciosa na sala de triagem/quarentena.
2. **Monitoramento por Armadilhas:** Instalação de armadilhas adesivas de monitoramento (*sticky traps*) com feromônios no chão e nos cantos das salas para mapear as espécies presentes e a densidade populacional de insetos.
3. **Higienização Mecânica Rigorosa:** Remoção contínua de poeira (a poeira funciona como alimento e carreador de umidade para traças e fungos).
4. **Vedações Prediais:** Instalação de telas milimétricas em janelas, borrachas de vedação nas portas e selagem de rachaduras prediais.

---

### 3. Técnicas Não Químicas de Desinfestação: Anóxia e Congelamento

A conservação científica moderna baniu pesticidas químicos voláteis (brometo de metila, óxido de etileno e pastilhas de fosfina):

* **Anóxia (Atmosfera Modificada Isenta de Oxigênio):**
  * **Procedimento:** Os livros infestados são acondicionados em bolsas plásticas especiais de alta barreira gasosa (PET aluminizado).
  * O ar interno é evacuado e substituído por um **gás inerte puro (Nitrogênio ou Argônio)** ou utilizam-se sachês de absorvedores de oxigênio à base de ferro (*Ageless*).
  * O nível de oxigênio é reduzido para **menos de 0,1%**, mantido durante **21 a 30 dias** a temperatura ambiente controlada.
  * **Efeito:** Todos os insetos (em fase de ovo, larva, ninfa ou adulto) morrem por asfixia anóxica completa.
  * **Vantagens:** 100% ecológico, atóxico para os profissionais, não deixa resíduos químicos no acervo e não altera cores ou papéis.
* **Congelamento (*Freezing*):**
  * Os documentos são selados em sacos plásticos herméticos para evitar condensação e colocados em freezers de conservação a **$-20$ °C a $-25$ °C por um período de 7 a 14 dias**.
  * O choque térmico negativo congela os fluidos vitais das larvas e insetos, exterminando a infestação.`,
  checkpoints: [
    {
      id: 'cp-7-2-1',
      pergunta: 'Micro-Checkpoint 1: Técnicas Ecológicas de Desinfestação',
      item: 'Na conservação preventiva moderna de acervos bibliográficos, a técnica de anóxia baseia-se na substituição do oxigênio atmosférico por um gás inerte, como o nitrogênio, promovendo a eliminação de pragas por asfixia sem o emprego de produtos químicos residuais nocivos.',
      gabarito: 'C',
      justificativa: 'Correto! A anóxia é o método ecológico padrão-ouro reconhecido internacionalmente pela IFLA e pelos manuais de conservação.',
    },
    {
      id: 'cp-7-2-2',
      pergunta: 'Micro-Checkpoint 2: Condições de Proliferação Fúngica',
      item: 'A infestação por fungos e mofo em livros impressos depende exclusivamente da presença de luz solar direta nas salas de acervo, ocorrendo mesmo sob umidade relativa do ar inferior a 30%.',
      gabarito: 'E',
      justificativa: 'Errado! Fungos proliferam na escuridão e exigem umidade relativa ALTA (acima de 65%) associada ao calor; sob umidade inferior a 30%, os fungos entram em dessecação e não se desenvolvem.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-7-2-1',
        periodo: 'Século XX (até 1980)',
        disciplina: 'Fumigação Química Histórica',
        focoPrincipal: 'Uso generalizado de pesticidas agressivos (brometo de metila, óxido de etileno)',
        figuraChave: 'Fumigação tradicional',
      },
      {
        id: 'tl-7-2-2',
        periodo: '1987 / 1990',
        disciplina: 'Protocolo de Montreal',
        focoPrincipal: 'Banimento internacional de gases halogenados destruidores da camada de ozônio (brometo de metila)',
        figuraChave: 'Nações Unidas / UNEP',
      },
      {
        id: 'tl-7-2-3',
        periodo: '1995 / Presente',
        disciplina: 'Anóxia e CIP',
        focoPrincipal: 'Consolidação do Controle Integrado de Pragas e da Anóxia por Nitrogênio na conservação de bibliotecas',
        figuraChave: 'Getty Conservation Institute e IFLA-PAC',
      },
    ],
    autores: [
      {
        id: 'aut-7-2-1',
        nome: 'Norma Cassares',
        ano: 2000,
        obraPrincipal: 'Como fazer conservação preventiva em arquivos e bibliotecas',
        ideiaChave: 'Identificação biológica de pragas e protocolo de higienização e controle ambiental integrado.',
        chipPegadinha: 'Cassares condena o uso indiscriminado de inseticidas químicos no interior do acervo.',
      },
      {
        id: 'aut-7-2-2',
        nome: 'José Luiz Pedersoli Jr.',
        ano: 2004,
        obraPrincipal: 'Gerenciamento de Riscos para o Patrimônio Museológico e Bibliográfico',
        ideiaChave: 'Análise de riscos para os 10 agentes de deterioração patrimonial (Canadian Conservation Institute).',
        chipPegadinha: 'Pragas são agentes biológicos com alto poder de destruição acelerada se o ambiente falhar.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-7-2-1',
        afirmacao: 'O método mais moderno e recomendado para esterilização de livros raros atacados por brocas consiste na aplicação direta de pastilhas de fosfeto de alumínio no interior das estantes.',
        gabarito: 'E',
        porQue: 'A aplicação direta de pesticidas de fosfina ou pós inseticidas é vetada na conservação contemporânea pelos riscos graves de toxicidade e ataque químico às tintas e papéis históricos.',
      },
      {
        id: 'peg-7-2-2',
        afirmacao: 'As traças dos livros caracterizam-se por perfurarem orifícios cilíndricos profundos através do miolo do livro, que atravessam capas de madeira e blocos de papel.',
        gabarito: 'E',
        porQue: 'Quem cava túneis circulares profundos são as BROCAS (larvas de besouros). As traças atacam superficialmente as margens e colas de amido.',
      },
    ],
  },
};
