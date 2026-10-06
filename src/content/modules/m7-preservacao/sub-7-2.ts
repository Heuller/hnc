import type { ModuloFilho } from '../../../domain/types';

export const submodulo72: ModuloFilho = {
  id: 'sub-7-2',
  numero: '7.2',
  titulo: 'Agentes Biológicos de Degradação e Controle Integrado de Pragas (CIP)',
  descricaoCurta: 'Insetos bibliófagos (traças, brocas, cupins e baratas), fungos filamentosos (mofo e foxing), roedores, superação da fumigação química e as técnicas ecológicas modernas: Anóxia (gás inerte) e Congelamento.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Ingrid Beck', 'Norma Cassares', 'José Luiz Pedersoli Jr.', 'IFLA-PAC', 'Getty Conservation Institute'],
  alertasCebraspe: [
    'Atenção ao abandono definitivo da fumigação química tradicional: o uso de pesticidas tóxicos como brometo de metila, óxido de etileno ou pastilhas de fosfeto de alumínio é PROIBIDO na conservação moderna, por ser cancerígeno para profissionais e usuários, destruir a camada de ozônio (Protocolo de Montreal) e reagir quimicamente degradando papéis e tintas.',
    'A técnica ecológica padrão-ouro para desinfestação de acervos é a ANÓXIA (atmosfera modificada anóxica): o material infestado é acondicionado em embalagens de alta barreira gasosa com gás inerte (nitrogênio puro ou argônio) ou absorvedores de oxigênio, reduzindo o O2 para menos de 0,1% durante 21 a 30 dias, exterminando ovos, larvas e adultos por asfixia sem resíduos químicos.',
    'As brocas (besouros da família Anobiidae) são os insetos mais devastadores para livros encadernados: suas larvas cavam galerias cilíndricas profundas e contínuas através do miolo e das capas, deixando pó fino amarelado (frass) nas estantes.',
    'As traças de livros (Thysanura / Lepisma saccharina) não cavam túneis profundos: são insetos ápteros e fotofóbicos que raspam superficialmente colas de amido, gravuras e bordas de folhas, deixando margens rendilhadas.',
    'Fungos e bolores: os esporos estão onipresentes no ar. Eles só germinam e proliferam se a Umidade Relativa ultrapassar 65% combinada com calor (>22 °C) e ar estagnado. Em caso de surto ativo, o tratamento emergencial exige isolamento, EPIs (PFF2/luvas), redução imediata da UR (<50%) e higienização mecânica em capela com aspirador dotado de filtro HEPA (jamais aspirador comum).',
  ],
  quadroComparativo: {
    titulo: 'Principais Insetos Bibliófagos e Danos Causados aos Acervos',
    colunas: ['Inseto Bibliófago', 'Família / Ordem', 'Mecanismo de Ataque ao Livro', 'Sinais Característicos no Acervo', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Broca dos Livros', 'Coleoptera (*Anobiidae*)', 'As larvas cavam túneis cilíndricos profundos através do miolo e das capas de couro/madeira', 'Furos circulares perfeitos nas folhas e pó fino amarelado (*frass*) nas prateleiras', 'Afirmar que a broca adulta é quem devora o papel (FALSO: é a larva).'],
      ['Traça dos Livros', 'Thysanura (*Lepisma saccharina*)', 'Ataca superficialmente colas de amido, dextrina, papéis acetinados e gravuras', 'Bordas rendilhadas e erosões superficiais irregulares nas páginas (age no escuro)', 'Confundir o dano superficial da traça com as galerias cilíndricas profundas da broca.'],
      ['Cupim de Madeira Seca', 'Isoptera (*Cryptotermes brevis*)', 'Destrói a celulose massivamente em galerias contínuas, devorando o miolo inteiro', 'Perda estrutural total do livro, restando apenas casca oca e pelotas fecais hexagonais', 'Dizer que cupins atacam livros apenas quando há umidade aparente (o de madeira seca ataca acervos secos).'],
      ['Barata de Esgoto/Francesa', 'Blattaria (*Periplaneta / Blattella*)', 'Roe encadernações de couro, pano, colas de lombadas e papel machê', 'Desgaste abrasivo em capas e manchas ácidas marrons de dejetos e ootecas', 'Ignorar que baratas se alimentam de colas orgânicas e transmitem fungos nas patas.'],
      ['Roedores (Ratos)', 'Rodentia (*Rattus / Mus musculus*)', 'Roem o papel para desgaste de incisivos e confecção de ninhos', 'Bordas mastigadas com marcas de dentes, fezes cilíndricas e odor forte de urina', 'Afirmar que o rato come papel por valor nutricional (roem pelo hábito de desgaste dental).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Ameaça Biológica nos Acervos Documentais

Os agentes biológicos constituem uma das mais severas fontes de perda patrimonial irrecuperável em bibliotecas situadas em climas tropicais como o brasileiro (Cassares, 2000; Beck, 1995; Spinelli, 2003):

\`\`\`mermaid
graph TD
    A[Agentes Biológicos de Degradação] --> B[Insetos Bibliófagos]
    A --> C[Microrganismos - Fungos e Bactérias]
    A --> D[Roedores - Ratos e Camundongos]
    B --> B1[Brocas: Galerias cilíndricas profundas e frass]
    B --> B2[Traças: Raspagem superficial e bordas rendilhadas]
    B --> B3[Cupins: Destruição massiva interna e casca oca]
    B --> B4[Baratas: Desgaste de lombadas e manchas de dejetos]
    C --> C1[Fungos Filamentosos: UR > 65%, mofo ativo e foxing]
    D --> D1[Roeduras marginais para desgaste dos dentes e ninhos]
\`\`\`

#### A. Insetos Bibliófagos (Pragas de Bibliotecas)
* **Brocas dos Livros (*Coleoptera / Anobiidae, Bostrichidae*):**
  * O inseto adulto realiza a postura dos ovos nas frestas das capas, lombadas ou junto à costura.
  * O dano destrutivo é causado pela **larva**: dotada de mandíbulas afiadas, ela perfura **longas galerias cilíndricas sinuosas** que atravessam centenas de páginas em profundidade.
  * *Sinais diagnósticos:* Orifícios redondos na capa e nas margens, acompanhados de um fino montículo de pó celulósico esbranquiçado ou amarelado denominado **frass**.
* **Traças de Livros (*Thysanura / Lepisma saccharina*):**
  * Insetos ápteros (sem asas), de corpo alongado coberto por escamas prateadas, altamente ágeis e fotofóbicos (habitam frestas escuras).
  * Possuem hábito alimentar mastigador superficial: nutrem-se de **amido, dextrina, colas vegetais de encadernação, gelatinas fotográficas e papéis acetinados**.
  * *Sinais diagnósticos:* Não cavam túneis circulares; causam erosões superficiais irregulares e deixam as **bordas das páginas com aspecto rendilhado ou serrilhado**.
* **Cupins / Térmitas (*Isoptera / Cryptotermes brevis e Coptotermes*):**
  * Insetos sociais xilófagos que digerem a celulose com o auxílio de microrganismos simbiontes.
  * O cupim de madeira seca ataca diretamente livros nas estantes. Devoram o interior das folhas em bloco compacto, preservando apenas uma capa externa milimétrica para não se exporem à luz.
  * O livro perde sustentação estrutural e se desintegra ao simples toque.
* **Baratas (*Blattaria*):**
  * Insetos onívoros que atacam encadernações em tecido, couro e papéis engomados, excretando dejetos ácidos e ootecas que mancham permanentemente os suportes.

#### B. Fungos Filamentosos (Mofo e Bolor)
* Os esporos de fungos (*Aspergillus, Penicillium, Trichoderma, Chaetomium*) encontram-se em suspensão contínua na atmosfera.
* **Condições Críticas para Germinação:**
  * Ocorrem quando a **Umidade Relativa supera 65%** e a temperatura ambiente situa-se **acima de 22 °C**, especialmente em depósitos sem circulação de ar (microclimas estagnados).
* **Mecanismo de Agressão:**
  * Os fungos germinam, emitem hifas e secretam exoenzimas celulolíticas que digerem a celulose e a cola orgânica.
  * Secretam ácidos que aceleram a despolimerização do papel e pigmentos que criam manchas multicoloridas indeléveis.
* **O Fenômeno do Foxing:**
  * Manchas avermelhadas, ferruginosas ou castanhas arredondadas dispersas nas páginas de livros antigos. Resulta da oxidação de impurezas metálicas de ferro presentes no papel industrial catalisada por atividade fúngica pretérita e variações de umidade.

---

### 2. A Superação da Fumigação Química Tradicional

Durante décadas, as bibliotecas adotaram a "dedetização química periódica" por meio de pesticidas voláteis:
* **Substâncias Banidas na Conservação Moderna:** Brometo de metila, óxido de etileno, pastilhas de fosfeto de alumínio (fosfina), paradiclorobenzeno e naftalina.
* **Por Que Foram Condenadas?**
  1. *Severa Toxicidade Humana:* O óxido de etileno e o brometo de metila são agentes cancerígenos comprovados, neurotóxicos e mutagênicos, colocando em risco extremo a saúde dos funcionários e usuários.
  2. *Danos Físico-Químicos ao Patrimônio:* Esses gases sofrem reações químicas secundárias com componentes do acervo, acelerando a quebra ácida de tintas ferrogálicas, amarelamento de películas fotográficas e fragilização de fibras.
  3. *Impacto Ambiental:* O brometo de metila foi banido mundialmente pelo **Protocolo de Montreal** por degradar a camada de ozônio.

---

### 3. O Controle Integrado de Pragas (CIP / IPM - *Integrated Pest Management*)

O modelo moderno de salvaguarda é o **CIP**, preconizado pela IFLA e pelo Getty Conservation Institute (Cassares, 2000):

1. **Prevenção e Barreiras Estruturais:**
   * Instalação de telas milimétricas em todas as janelas, borrachas de vedação nas portas e selagem com silicone em frestas de rodapés e conduítes elétricos.
2. **Higiene e Saneamento Rigoroso:**
   * Proibição estrita de consumo de alimentos, bebidas, plantas ornamentais e flores no interior das áreas de acervo. Limpeza mecânica diária com aspirador.
3. **Quarentena e Triagem Obrigatória:**
   * Nenhum lote de livros doados, comprados em sebos ou transferidos de outros prédios é incorporado diretamente ao acervo ativo sem passar por **inspeção e quarentena técnica** em sala isolada.
4. **Monitoramento com Armadilhas Adesivas (*Sticky Traps*):**
   * Distribuição de armadilhas adesivas sem veneno (com atrativos biológicos ou feromônios) no chão, cantos de estantes e rodapés a cada 5 ou 10 metros.
   * As armadilhas são vistoriadas mensalmente, permitindo mapear exatamente quais espécies estão presentes, seu estágio de desenvolvimento e a densidade da população biológica.

---

### 4. Métodos Não Químicos de Desinfestação: Anóxia e Congelamento

Quando uma infestação ativa é detectada, o tratamento deve ser 100% ecológico e atóxico:

#### A. A Técnica da Anóxia (Atmosfera Modificada Isenta de Oxigênio)
* **O Padrão-Ouro Internacional:**
  * O livro infestado é colocado no interior de uma bolsa de filme plástico especial de altíssima barreira a gases (filmes de barreira laminados com alumínio / PET aluminizado).
  * O ar comum é extraído por seladora a vácuo e o interior da embalagem é preenchido com um **gás inerte puro (Nitrogênio com $99,9\\%$ de pureza ou Argônio)**, ou aplicam-se sachês de absorvedores químicos de oxigênio (*Ageless*).
  * A concentração de oxigênio é reduzida para **menos de 0,1%** (nível inferior a 1.000 ppm) e mantida monitorada durante **21 a 30 dias** a temperatura ambiente controlada ($20$ °C a $25$ °C).
* **Mecanismo Letal:** A privação extrema de oxigênio mata por **asfixia celular anóxica** 100% dos insetos em todos os seus estágios evolutivos (**ovos, larvas, pupas e adultos**).
* **Vantagens Canônicas:** Método seguro, totalmente atóxico para os profissionais, não deixa resíduos químicos nas páginas e não agride tintas, selos ou encadernações raras.

#### B. A Técnica do Congelamento (*Freezing*)
* Os materiais são acondicionados em sacos plásticos de polietileno hermeticamente selados, retirando-se o excesso de ar para impedir que a umidade congele em cristais sobre o papel.
* As embalagens são dispostas em câmaras frias ou freezers de conservação a temperaturas de **$-20$ °C a $-25$ °C por um período mínimo de 7 a 14 dias**.
* O choque térmico congela os fluidos corporais dos insetos, exterminando ovos e larvas.
* *Etapa Obrigatória de Descongelamento:* Ao retirar os livros do freezer, eles **devem permanecer selados na embalagem plástica por 24 a 48 horas**, até atingirem o equilíbrio com a temperatura ambiente. Se a embalagem for aberta antes disso, o ar quente e úmido condensará água líquida sobre as folhas geladas, deflagrando ataque imediato de mofo.`,
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
    {
      id: 'cp-7-2-3',
      pergunta: 'Micro-Checkpoint 3: Uso de Fitas Adesivas Comerciais em Livros Danificados',
      item: 'A aplicação de fitas adesivas de base plástica transparente comum (como o durex) é procedimento recomendado para o reparo rápido de rasgos em obras raras devido à sua vedação contra a umidade.',
      gabarito: 'E',
      justificativa: 'Errado! O uso de fitas adesivas sintéticas convencionais é veementemente condenado na conservação preventiva. O adesivo oxida, mancha irreversivelmente a celulose e acidifica o papel. O reparo deve usar papel japonês e cola de amido neutra reversível.',
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
        nome: 'Ingrid Beck',
        ano: 1995,
        obraPrincipal: 'Manual de Conservação Preventiva de Documentos',
        ideiaChave: 'Prevenção por barreiras físicas, quarentena sistemática de doações e monitoramento com armadilhas.',
        chipPegadinha: 'A quarentena é etapa inegociável antes de incorporar novos materiais às estantes ativas.',
      },
      {
        id: 'aut-7-2-3',
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
      {
        id: 'peg-7-2-3',
        afirmacao: 'No caso de livros infestados por cupins submetidos ao congelamento, as embalagens plásticas devem ser abertas imediatamente após a saída do freezer para acelerar a secagem do papel.',
        gabarito: 'E',
        porQue: 'Abrir a embalagem fria causa condensação imediata da umidade do ar sobre as folhas, molhando o livro e atraindo fungos. O livro deve permanecer lacrado até atingir a temperatura ambiente.',
      },
    ],
  },
};
