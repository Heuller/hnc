import type { ModuloFilho } from '../../../domain/types';

export const submodulo25: ModuloFilho = {
  id: 'sub-2-5',
  numero: '2.5',
  titulo: 'Órgãos Públicos, Catalogação Governamental e Biblioteca da Câmara dos Deputados',
  titulo_curto: 'Órgãos Públicos & Bib. Câmara',
  descricaoCurta:
    'Estrutura constitucional dos poderes e órgãos (STF, STJ, TJs, TCU, TCEs, MP, Câmara dos Deputados), catalogação sob jurisdição vs entrada direta (AACR2r 24.18/24.19 e RDA Cap. 11), campos MARC 21 (110/710) e a história e sistemas da Biblioteca Pedro Aleixo.',
  tempoEstimadoMinutos: 45,
  autoresChave: [
    'Constituição da República Federativa do Brasil de 1988 (CF/88)',
    'AACR2r (Anglo-American Cataloguing Rules, 2nd ed. rev. - Cap. 24)',
    'RDA (Resource Description and Access - Cap. 11: Agentes Coletivos)',
    'Formato MARC 21 Bibliográfico e de Autoridades (Campos 110 e 710)',
    'Câmara dos Deputados / CEDI / Biblioteca Pedro Aleixo',
    'Rede Virtual de Bibliotecas (RVBI) do Congresso Nacional',
  ],
  alertasCebraspe: [
    'CUIDADO: O Tribunal de Contas da União (TCU) e os TCEs NÃO integram o Poder Judiciário nem são subordinados hierarquicamente ao Poder Legislativo; são órgãos constitucionais autônomos que realizam o controle externo da administração pública.',
    'ATENÇÃO NO AACR2 24.18: Nem todo órgão público entra subordinado à jurisdição territorial. Entidades da administração indireta com natureza jurídica própria (como Universidades Federais e Empresas Públicas) entram diretamente pelo seu próprio nome (ex.: "Universidade de Brasília", e NÃO "Brasil. Universidade de Brasília").',
    'PEGADINHA CLÁSSICA DE MARC 21: O primeiro indicador dos campos 110/710 define a forma do nome: "1" para nome sob jurisdição geográfica (ex.: "Brasil. Congresso Nacional.") e "2" para nome em ordem direta (ex.: "Empresa Brasileira de Correios e Telégrafos"). O Cebraspe inverte com frequência esses indicadores.',
    'SUBORDINAÇÃO DIRETA VS INDIRETA (AACR2 24.19): A regra geral prescreve a omissão de órgãos intermediários desnecessários, mas no caso do Poder Legislativo a Câmara dos Deputados subordina-se ao Congresso Nacional ("Brasil. Congresso Nacional. Câmara dos Deputados.").',
    'BIBLIOTECA DA CÂMARA: Fundada em 1826 na Assembleia Constituinte do Império no Rio de Janeiro e transferida em 1960 para Brasília. É parte do CEDI (Centro de Documentação e Informação) subordinado à Diretoria-Geral. Seu repositório digital oficial é a BDCam (DSpace). A RVBI é coordenada pelo Senado Federal, e não pela Câmara.',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: Entidades Públicas, Formas de Entrada e MARC 21',
    colunas: [
      'Natureza Jurídica / Órgão',
      'Ponto de Acesso Autorizado (AACR2r/RDA)',
      'MARC 21 (Campo / Indicadores / Tags)',
      'Regra Aplicável e Fundamentação Cebraspe',
    ],
    linhas: [
      [
        'Poder Legislativo Federal (Câmara dos Deputados)',
        'Brasil. Congresso Nacional. Câmara dos Deputados.',
        '110 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados.',
        'AACR2 24.18 (Tipo 5 e Tipo 11). Entrada sob jurisdição com subordinação hierárquica ao Congresso Nacional.',
      ],
      [
        'Poder Judiciário Federal de Cúpula (STF e STJ)',
        'Brasil. Supremo Tribunal Federal. / Brasil. Superior Tribunal de Justiça.',
        '110 1# $a Brasil. $b Supremo Tribunal Federal.',
        'AACR2 24.18 (Tipo 6 - Tribunais). Entrada sob a jurisdição política (Brasil), omitindo ministérios ou intermediários.',
      ],
      [
        'Poder Judiciário Estadual (Tribunais de Justiça)',
        'São Paulo (Estado). Tribunal de Justiça.',
        '110 1# $a São Paulo (Estado). $b Tribunal de Justiça.',
        'AACR2 24.18 (Tipo 6). Entrada sob o nome do Estado federado qualificado entre parênteses para distinguir de cidades homônimas.',
      ],
      [
        'Tribunais de Contas (TCU e TCEs)',
        'Brasil. Tribunal de Contas da União. / Minas Gerais. Tribunal de Contas do Estado.',
        '110 1# $a Brasil. $b Tribunal de Contas da União.',
        'AACR2 24.18 (Tipo 3 / Órgão de controle externo constitucional). Entrada sob jurisdição federal ou estadual.',
      ],
      [
        'Ministério Público (MPU e MPEs)',
        'Brasil. Ministério Público da União. / Rio de Janeiro (Estado). Ministério Público.',
        '110 1# $a Brasil. $b Ministério Público da União.',
        'Função Essencial à Justiça autônoma. Entrada sob jurisdição territorial correspondente.',
      ],
      [
        'Universidades Públicas Federais e Estaduais',
        'Universidade de Brasília. / Universidade de São Paulo.',
        '110 2# $a Universidade de Brasília.',
        'AACR2 24.17 e 24.1. Entrada DIRETA pelo nome próprio da instituição. NÃO se subordinam à jurisdição geográfica no ponto de acesso.',
      ],
      [
        'Empresas Públicas e Sociedades de Economia Mista',
        'Petróleo Brasileiro. / Empresa Brasileira de Correios e Telégrafos.',
        '110 2# $a Petróleo Brasileiro.',
        'Entidades empresariais estatais com personalidade jurídica de direito privado entram em ordem direta (indicador 2).',
      ],
      [
        'Biblioteca da Câmara dos Deputados (Pedro Aleixo)',
        'Brasil. Congresso Nacional. Câmara dos Deputados. Centro de Documentação e Informação. Coordenação de Biblioteca.',
        '710 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados. $b Centro de Documentação e Informação. $b Coordenação de Biblioteca.',
        'AACR2 24.18 e 24.19. Subordinação encadeada quando a unidade subordinada requer o contexto do órgão maior (CEDI).',
      ],
    ],
  },
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-5-1',
        periodo: '1826',
        disciplina: 'História da Biblioteca Parlamentar',
        focoPrincipal:
          'Instalação da Biblioteca da Câmara junto à primeira Assembleia Geral Constituinte do Império no Rio de Janeiro (Palácio da Cadeia Velha).',
        figuraChave: 'Assembleia Constituinte do Império do Brasil',
      },
      {
        id: 'tl-2-5-2',
        periodo: '1960',
        disciplina: 'Transferência e Nova Capital',
        focoPrincipal:
          'Transferência definitiva da Biblioteca da Câmara para o Palácio do Congresso Nacional em Brasília com a inauguração da capital federal.',
        figuraChave: 'Câmara dos Deputados em Brasília',
      },
      {
        id: 'tl-2-5-3',
        periodo: '1978 / 2002',
        disciplina: 'Catalogação Governamental',
        focoPrincipal:
          'Consolidação do Capítulo 24 do AACR2/AACR2r: fixação das regras de entrada sob jurisdição territorial vs entrada em ordem direta.',
        figuraChave: 'Michael Gorman e Comitê Conjunto do AACR',
      },
      {
        id: 'tl-2-5-4',
        periodo: '1984',
        disciplina: 'Patrono e Memória Parlamentar',
        focoPrincipal:
          'Resolução da Mesa nº 25/1984 oficializa a denominação "Biblioteca Pedro Aleixo", homenageando o jurista e parlamentar civil.',
        figuraChave: 'Pedro Aleixo (1901-1975)',
      },
      {
        id: 'tl-2-5-5',
        periodo: '2000+',
        disciplina: 'Bibliotecas Digitais e Cooperação',
        focoPrincipal:
          'Implantação da BDCam sobre DSpace para acesso aberto e consolidação cooperativa da Rede Virtual de Bibliotecas (RVBI).',
        figuraChave: 'CEDI / Coordenação de Biblioteca / RVBI',
      },
      {
        id: 'tl-2-5-6',
        periodo: '1826–2026',
        disciplina: 'Bicentenário da Biblioteca da Câmara',
        focoPrincipal:
          'Celebração de 200 anos de apoio ao processo legislativo, preservação da memória política e difusão do patrimônio bibliográfico nacional.',
        figuraChave: 'Biblioteca Pedro Aleixo da Câmara dos Deputados',
      },
    ],
    autores: [
      {
        id: 'aut-2-5-1',
        nome: 'Constituição da República Federativa do Brasil',
        ano: 1988,
        obraPrincipal: 'CF/88: Título IV - Da Organização dos Poderes (arts. 44 a 135)',
        ideiaChave:
          'Estrutura a separação de poderes (Legislativo bicameral, Judiciário e Executivo), as competências do TCU no controle externo e a autonomia do Ministério Público.',
        chipPegadinha:
          'O TCU e os TCEs auxiliam o Legislativo, mas NÃO são subordinados nem integram o Poder Judiciário.',
      },
      {
        id: 'aut-2-5-2',
        nome: 'AACR2r / Michael Gorman & Paul Winkler',
        ano: 2002,
        obraPrincipal: 'Anglo-American Cataloguing Rules (2nd ed. rev. - Cap. 24)',
        ideiaChave:
          'Normatiza os 11 tipos de entidades governamentais com entrada sob jurisdição (24.18) e estabelece a regra da omissão de instâncias intermediárias (24.19).',
        chipPegadinha:
          'Universidades federais e estatais entram em ordem direta pelo próprio nome, e NÃO sob o nome do país/governo.',
      },
      {
        id: 'aut-2-5-3',
        nome: 'Centro de Documentação e Informação (CEDI)',
        ano: 1984,
        obraPrincipal: 'Estrutura Regimental e Gestão da Informação da Câmara',
        ideiaChave:
          'Integra a Biblioteca Pedro Aleixo, o Arquivo Histórico, as Edições Câmara e a BDCam sob a Diretoria-Geral para suporte integral ao mandato parlamentar.',
        chipPegadinha:
          'A Biblioteca Pedro Aleixo vincula-se ao CEDI/Diretoria-Geral, e não ao Gabinete da Presidência da Câmara.',
      },
      {
        id: 'aut-2-5-4',
        nome: 'Rede Virtual de Bibliotecas (RVBI)',
        ano: 2000,
        obraPrincipal: 'Catálogo Coletivo e Vocabulário Controlado Básico (VCB)',
        ideiaChave:
          'Rede cooperativa de bibliotecas dos Poderes da União com base de dados única e tesauro legislativo padronizado.',
        chipPegadinha:
          'A coordenação executiva da RVBI pertence ao Senado Federal, e não à Câmara dos Deputados.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-5-1',
        afirmacao:
          'O Tribunal de Contas da União (TCU) integra formalmente a estrutura do Poder Judiciário, possuindo competência para proferir sentenças transitadas em julgado com força de coisa julgada material.',
        gabarito: 'E',
        porQue:
          'O TCU é órgão constitucional autônomo que auxilia o Congresso Nacional no controle externo. Não integra o rol taxativo do art. 92 da CF/88 e suas decisões condenatórias têm eficácia de título executivo extrajudicial.',
      },
      {
        id: 'peg-2-5-2',
        afirmacao:
          'De acordo com as regras do AACR2r, uma universidade pública federal deve ser catalogada sob a jurisdição política nacional, adotando-se a forma "Brasil. Universidade Federal de Santa Catarina.".',
        gabarito: 'E',
        porQue:
          'Segundo as regras 24.1 e 24.17 do AACR2r, universidades públicas com nomes distintivos e personalidades jurídicas próprias entram DIRETAMENTE sob seu nome institucional: "Universidade Federal de Santa Catarina.".',
      },
      {
        id: 'peg-2-5-3',
        afirmacao:
          'No formato MARC 21 Bibliográfico, o primeiro indicador 1 nos campos 110 e 710 identifica que o ponto de acesso coletivo foi formulado sob jurisdição governamental.',
        gabarito: 'C',
        porQue:
          'Correto! No MARC 21, o primeiro indicador 1 define entrada sob jurisdição geográfica (governo/lugar), enquanto o indicador 2 define entrada em ordem direta da instituição.',
      },
      {
        id: 'peg-2-5-4',
        afirmacao:
          'A Biblioteca Digital da Câmara dos Deputados (BDCam) consiste em repositório restrito a parlamentares da Casa, operando sob protocolo proprietário protegido de interoperabilidade externa.',
        gabarito: 'E',
        porQue:
          'A BDCam é um repositório em acesso aberto (Open Access) baseado no software livre DSpace, com metadados Dublin Core e protocolo aberto OAI-PMH para coleta interoperável.',
      },
      {
        id: 'peg-2-5-5',
        afirmacao:
          'A coordenação executiva e a gestão tecnológica da Rede Virtual de Bibliotecas (RVBI) do Congresso Nacional são de responsabilidade do Senado Federal.',
        gabarito: 'C',
        porQue:
          'Correto! Embora a Câmara dos Deputados seja participante fundamental, a coordenação da RVBI cabe à Secretaria de Biblioteca e Arquivo do Senado Federal.',
      },
    ],
  },
  checkpoints: [
    {
      id: 'cp-2-5-1',
      pergunta:
        'Sobre a natureza institucional dos órgãos públicos e sua competência constitucional, julgue o item a seguir:',
      item: 'O Tribunal de Contas da União (TCU) integra formalmente a estrutura do Poder Judiciário brasileiro, competindo-lhe proferir decisões transitadas em julgado com eficácia de coisa julgada material sobre as contas de gestores públicos federais.',
      gabarito: 'E',
      justificativa:
        'ERRADO. O TCU NÃO integra o Poder Judiciário (o rol de órgãos do Judiciário é taxativo no art. 92 da CF/88 e não inclui os Tribunais de Contas). O TCU é órgão constitucional autônomo que auxilia o Poder Legislativo no controle externo. Suas decisões condenatórias têm eficácia de título executivo extrajudicial (art. 71, § 3º, da CF/88) e podem ter sua legalidade revista pelo Poder Judiciário.',
    },
    {
      id: 'cp-2-5-2',
      pergunta:
        'Acerca das regras de escolha e determinação de cabeçalhos para entidades coletivas no código AACR2r e no formato MARC 21, julgue o item a seguir:',
      item: 'De acordo com o AACR2r e o formato MARC 21, as universidades públicas federais devem ser catalogadas com entrada principal subordinada à jurisdição territorial correspondente, utilizando-se o campo 110 com primeiro indicador 1 (ex.: 110 1# $a Brasil. $b Universidade Federal de Minas Gerais.).',
      gabarito: 'E',
      justificativa:
        'ERRADO. Pelo AACR2r (Regras 24.1 e 24.17), entidades que não se enquadram nos tipos restritos da regra 24.18 — como instituições de ensino superior, hospitais públicos, bancos estatais e institutos de pesquisa com nomes distintivos — entram diretamente sob o seu próprio nome. Portanto, a forma autorizada é "Universidade Federal de Minas Gerais." e no MARC 21 utiliza-se o campo 110 com primeiro indicador 2 (ordem direta): 110 2# $a Universidade Federal de Minas Gerais.',
    },
    {
      id: 'cp-2-5-3',
      pergunta:
        'Em relação à Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo) e aos sistemas de informação do Congresso Nacional, julgue o item a seguir:',
      item: 'A Biblioteca da Câmara dos Deputados, criada originalmente em 1826 no Rio de Janeiro e denominada Biblioteca Pedro Aleixo, integra o Centro de Documentação e Informação (CEDI) e mantém a Biblioteca Digital da Câmara (BDCam), plataforma baseada no software livre DSpace destinada a disponibilizar em acesso aberto a memória parlamentar, estudos técnicos e publicações institucionais.',
      gabarito: 'C',
      justificativa:
        'CERTO. A assertiva reflete com exatidão os fatos históricos e institucionais da Biblioteca da Câmara: instituída com a Assembleia Geral do Império em 1826, batizada pela Resolução nº 25/1984 como Biblioteca Pedro Aleixo, alocada na estrutura do CEDI (subordinado à Diretoria-Geral) e operadora da BDCam sobre DSpace para difusão aberta do patrimônio legislativo.',
    },
  ],
  teoriaDensaMarkdown: `
# Mini-Módulo Especial 2.5: Órgãos Públicos, Catalogação Governamental e a Biblioteca da Câmara dos Deputados

## Introdução e Relevância para o Concurso da Câmara dos Deputados

Para o concurso de **Bibliotecário da Câmara dos Deputados** (Banca Cebraspe), o domínio sobre a **organização do Estado brasileiro**, as **competências dos órgãos federais e estaduais** e sua **representação descritiva nos catálogos bibliográficos (AACR2r, RDA e MARC 21)** constitui uma das zonas de maior incidência e diferenciação na prova.

Além disso, a banca exige conhecimento institucional íntimo sobre a **Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo)**: sua história secular (desde o Império em 1826), seu papel no apoio ao processo legislativo, sua inserção no **Centro de Documentação e Informação (CEDI)**, seus repositórios (**BDCam** sobre software DSpace), suas publicações (**Edições Câmara**) e sua cooperação na **Rede Virtual de Bibliotecas (RVBI)**.

\`\`\`mermaid
graph TD
    A[Estado Brasileiro - CF/88] --> B[Poder Legislativo]
    A --> C[Poder Judiciário]
    A --> D[Poder Executivo]
    A --> E[Tribunais de Contas - Controle Externo]
    A --> F[Funções Essenciais à Justiça]

    B --> B1[Congresso Nacional]
    B1 --> B2[Câmara dos Deputados - 513 Deputados]
    B1 --> B3[Senado Federal - 81 Senadores]
    B2 --> B4[CEDI - Centro de Documentação e Informação]
    B4 --> B5[Biblioteca Pedro Aleixo - 1826]
    B5 --> B6[BDCam / DSpace]
    B5 --> B7[RVBI - Rede Virtual de Bibliotecas]

    C --> C1[STF - Cúpula Constitucional]
    C --> C2[STJ - Cúpula Infraconstitucional]
    C --> C3[TRFs / Juízes Federais]
    C --> C4[TJs Estaduais e TJDFT]
    C --> C5[CNJ - Controle Administrativo]

    E --> E1[TCU - União]
    E --> E2[TCEs - Estados]
    E --> E3[TCDF / TCMs]

    F --> F1[Ministério Público: MPU e MPEs]
    F --> F2[Defensoria Pública: DPU e DPEs]
    F --> F3[Advocacia Pública: AGU e PGEs]
\`\`\`

---

## 1. Estrutura Constitucional dos Poderes e Órgãos no Brasil (CF/88)

### 1.1 O Poder Legislativo
No plano federal, o Poder Legislativo adota o modelo **bicameral** (CF/88, art. 44), exercido pelo **Congresso Nacional**, que se compõe de duas casas:
1. **Câmara dos Deputados**: Representa o **povo brasileiro**. É composta por **513 deputados federais**, eleitos pelo sistema eleitoral proporcional em cada Estado, no Distrito Federal e nos Territórios, com mandato de 4 anos. Possui competências privativas fundamentais (CF/88, art. 51), como autorizar a instauração de processo de impeachment contra o Presidente da República e elaborar seu regimento interno.
2. **Senado Federal**: Representa os **Estados federados e o Distrito Federal**. Compõe-se de **81 senadores** (3 senadores por unidade federativa, eleitos pelo sistema majoritário), com mandato de 8 anos e renovação alternada de 1/3 e 2/3 a cada 4 anos. Possui competências privativas (CF/88, art. 52), como julgar o Presidente nos crimes de responsabilidade e aprovar a escolha de ministros do STF, tribunais superiores e chefes de missão diplomática.

No plano estadual e distrital, o Poder Legislativo é **unicameral**:
- **Assembleias Legislativas dos Estados (ALs)**: compostas por deputados estaduais.
- **Câmara Legislativa do Distrito Federal (CLDF)**: composta por deputados distritais (acumula competências estaduais e municipais).
- **Câmaras Municipais**: compostas por vereadores (plano municipal).

### 1.2 O Poder Judiciário (CF/88, arts. 92 a 126)
O rol de órgãos do Poder Judiciário é expressamente taxativo (art. 92):
1. **STF (Supremo Tribunal Federal)**: Órgão de cúpula máxima do Poder Judiciário, responsável pela guarda precípua da Constituição (art. 102). Composto por 11 ministros cidadãos brasileiros natos, nomeados pelo Presidente após sabatina do Senado. Julga ações diretas de inconstitucionalidade (ADI), ações declaratórias de constitucionalidade (ADC), arguições de descumprimento de preceito fundamental (ADPF) e recursos extraordinários (RE).
2. **STJ (Superior Tribunal de Justiça)**: Órgão de cúpula da jurisdição federal e estadual comum infraconstitucional (art. 104 e 105). Guardião da legislação federal ordinária e uniformizador da jurisprudência federal. Composto por no mínimo 33 ministros. Julga em última instância o Recurso Especial (REsp).
3. **TRFs (Tribunais Regionais Federais) e Juízes Federais**: Integram a Justiça Federal comum. Atualmente divididos em 6 regiões (TRF1 a TRF6). Julgam causas em que a União, suas autarquias e empresas públicas federais forem autoras, rés, assistentes ou oponentes (art. 109).
4. **TJs (Tribunais de Justiça dos Estados) e Juízes de Direito**: Exercem a jurisdição estadual residual (tudo o que não for privativo da Justiça Federal ou das Justiças Especializadas). O **TJDFT** (Tribunal de Justiça do DF e dos Territórios) é mantido e organizado pela União (art. 21, XIII), mas exerce competência de tribunal local/estadual.
5. **Justiças Especializadas**:
   - **Justiça do Trabalho**: TST (Tribunal Superior do Trabalho), TRTs (Tribunais Regionais do Trabalho) e Varas do Trabalho.
   - **Justiça Eleitoral**: TSE (Tribunal Superior Eleitoral), TREs (Tribunais Regionais Eleitorais), Juízes e Juntas Eleitorais.
   - **Justiça Militar**: STM (Superior Tribunal Militar) e Auditorias Militares.
6. **CNJ (Conselho Nacional de Justiça)**: Criado pela Emenda Constitucional nº 45/2004 (art. 103-B). É órgão de cúpula administrativa e financeira do Judiciário. **ATENÇÃO PARA O CEBRASPE**: O CNJ *não exerce função jurisdicional contenciosa*; ele não julga litígios judiciais nem pode rever o mérito de sentenças ou acórdãos judiciais.

### 1.3 Os Tribunais de Contas (CF/88, arts. 70 a 75)
- **TCU (Tribunal de Contas da União)**: Órgão colegiado que auxilia o Congresso Nacional no exercício do controle externo contábil, financeiro, orçamentário, operacional e patrimonial da União e das entidades da administração direta e indireta.
  - **NÃO integra o Poder Judiciário** nem profere sentenças judiciais transitadas em julgado.
  - **NÃO é subordinado ao Poder Legislativo**: possui autonomia institucional, funcional, orçamentária e administrativa garantida pela CF/88.
  - Suas decisões que resultem em imputação de débito ou multa têm eficácia de **título executivo extrajudicial** (art. 71, § 3º).
- **TCEs (Tribunais de Contas dos Estados)**: Auxiliam as Assembleias Legislativas no controle externo estadual e municipal.
- **TCDF (Tribunal de Contas do Distrito Federal)**: Auxilia a CLDF no controle distrital.
- **TCMs (Tribunais de Contas dos Municípios)**: Existem tribunais de contas para municípios no plano estadual (TCM-PA, TCM-GO, TCM-BA) e órgãos municipais exclusivos apenas em **São Paulo** e no **Rio de Janeiro** (mantidos por terem sido criados antes da CF/88, já que o art. 31, § 4º da Carta veda a criação de novos tribunais de contas municipais).

### 1.4 As Funções Essenciais à Justiça (CF/88, arts. 127 a 135)
Órgãos e instituições que viabilizam a realização do Direito, mas **não integram nenhum dos três Poderes**:
1. **Ministério Público (MP)**: Instituição permanente, essencial à função jurisdicional, defensora da ordem jurídica, do regime democrático e dos interesses sociais e indisponíveis (art. 127). Possui autonomia funcional e orçamentária.
   - **MPU (Ministério Público da União)**: compreende o MPF (Ministério Público Federal, chefiado pelo PGR), o MPT (Trabalho), o MPM (Militar) e o MPDFT (DF e Territórios).
   - **MPEs (Ministérios Públicos dos Estados)**: MPSP, MPRJ, MPMG, etc., chefiados pelos respectivos Procuradores-Gerais de Justiça (PGJ).
2. **Defensoria Pública**: Presta orientação jurídica e promove a defesa integral e gratuita dos necessitados (art. 134). Composta pela DPU (União) e pelas DPEs (Estados e DF).
3. **Advocacia Pública**: Defende os interesses patrimoniais e a juridicidade dos entes federados: Advocacia-Geral da União (AGU), Procuradorias-Gerais dos Estados (PGEs) e Municípios (PGMs).

---

## 2. Catalogação Governamental segundo AACR2r e RDA (Pontos de Acesso e MARC 21)

### 2.1 A Dicotomia Fundamental: Entrada sob Jurisdição vs. Entrada Direta
O Capítulo 24 do AACR2r (*Cabeçalhos para Entidades Coletivas*) e o Capítulo 11 do RDA (*Identificação de Agentes Coletivos*) estabelecem que uma entidade governamental pode ter seu ponto de acesso autorizado construído de duas formas fundamentais:

1. **Entrada sob a Jurisdição Territorial (Subordinada ao Governo)**:
   - Aplica-se a órgãos que exercem funções básicas, típicas e indelegáveis de soberania estatal (poder legislativo, poder judiciário, órgãos de cúpula executiva, tribunais de contas e forças armadas).
   - Estrutura: \`Nome da Jurisdição Geográfica. Nome do Órgão.\`
   - Exemplos:
     - \`Brasil. Congresso Nacional.\`
     - \`Brasil. Supremo Tribunal Federal.\`
     - \`Brasil. Tribunal de Contas da União.\`
     - \`Brasil. Ministério Público da União.\`
     - \`São Paulo (Estado). Tribunal de Justiça.\`
     - \`Minas Gerais. Tribunal de Contas.\`
     - \`Distrito Federal (Brasil). Câmara Legislativa.\`

2. **Entrada Direta pelo Nome da Própria Entidade (NÃO subordinada à Jurisdição)**:
   - Aplica-se a entidades que, embora criadas pelo poder público e integrando a administração indireta, possuem personalidade jurídica própria e nome institucional distintivo, dedicando-se a atividades de ensino, pesquisa, serviços industriais ou comerciais.
   - Exemplos:
     - \`Universidade de Brasília.\` (e NUNCA \`Brasil. Universidade de Brasília.\`)
     - \`Universidade de São Paulo.\`
     - \`Petróleo Brasileiro.\`
     - \`Empresa Brasileira de Correios e Telégrafos.\`
     - \`Fundação Oswaldo Cruz.\`
     - \`Instituto Brasileiro de Geografia e Estatística.\`

\`\`\`mermaid
graph TD
    Entidade[Entidade Pública a Catalogar] --> Analise{Exerce função básica de soberania ou enquadra-se no AACR2 24.18?}
    Analise -->|SIM: Órgãos de cúpula, Judiciário, Legislativo, Ministérios| SubJurisdicao[Entrada sob Jurisdição Geográfica]
    Analise -->|NÃO: Universidades, Empresas Públicas, Autarquias Científicas| EntradaDireta[Entrada DIRETA sob o próprio Nome]

    SubJurisdicao --> MARC1[MARC 21: Campo 110/710 com 1º Indicador = 1]
    MARC1 --> Ex1["Ex: 110 1# $a Brasil. $b Congresso Nacional."]
    MARC1 --> Ex2["Ex: 110 1# $a São Paulo (Estado). $b Tribunal de Justiça."]

    EntradaDireta --> MARC2[MARC 21: Campo 110/710 com 1º Indicador = 2]
    MARC2 --> Ex3["Ex: 110 2# $a Universidade de Brasília."]
    MARC2 --> Ex4["Ex: 110 2# $a Petróleo Brasileiro."]
\`\`\`

---

### 2.2 Os 11 Tipos do AACR2 24.18 (Subordinação Governamental Obrigatória)
A regra **24.18** é o dispositivo que determina quando uma entidade de governo DEVE ser registrada como cabeçalho subordinado ao nome da jurisdição territorial. Os 11 tipos canônicos são:

| Tipo AACR2 | Definição Normativa | Exemplo de Ponto de Acesso Autorizado |
| :--- | :--- | :--- |
| **Tipo 1** | Nome com termo que indica subordinação (departamento, divisão, seção) | \`Brasil. Departamento de Polícia Federal.\` |
| **Tipo 2** | Nome com termo que sugere administração subordinada (diretoria, serviço) | \`Brasil. Diretoria de Hidrografia e Navegação.\` |
| **Tipo 3** | Nome de caráter descritivo geral comum a outras entidades governamentais | \`Brasil. Comissão Nacional de Energia Nuclear.\` |
| **Tipo 4** | Ministério, secretaria de estado ou repartição pública equivalente | \`Brasil. Ministério da Educação.\` / \`São Paulo (Estado). Secretaria da Fazenda.\` |
| **Tipo 5** | Órgão que é a cúpula do Poder Legislativo | \`Brasil. Congresso Nacional.\` / \`Paraná. Assembleia Legislativa.\` |
| **Tipo 6** | Tribunal ou corte judicial | \`Brasil. Supremo Tribunal Federal.\` / \`Rio de Janeiro (Estado). Tribunal de Justiça.\` |
| **Tipo 7** | Força armada (exército, marinha, aeronáutica) | \`Brasil. Exército.\` / \`Brasil. Marinha.\` |
| **Tipo 8** | Chefe de Estado ou chefe de governo (com período e nome do titular) | \`Brasil. Presidente (2023- : Lula).\` |
| **Tipo 9** | Embaixada, consulado ou legação diplomática | \`Brasil. Embaixada (França).\` |
| **Tipo 10** | Delegação oficial junto a organismo internacional | \`Brasil. Delegação (UNESCO).\` |
| **Tipo 11** | Órgão legislativo subordinado a outro | \`Brasil. Congresso Nacional. Câmara dos Deputados.\` |

---

### 2.3 Regras de Subordinação Direta vs. Indireta (AACR2 24.19)
A regra **24.19** comanda a simplificação de cabeçalhos por meio da **omissão de órgãos intermediários desnecessários**:
- **Regra da Omissão**: Quando uma unidade subordinada for claramente identificável pelo nome da jurisdição e seu nome próprio, as unidades administrativas intermediárias NÃO devem constar no cabeçalho.
  - Correto: \`Brasil. Departamento de Polícia Federal.\` (e não \`Brasil. Ministério da Justiça. Departamento de Polícia Federal.\`).
- **Exceção da Hierarquia Necessária**: Mantém-se o órgão intermediário quando o nome da subunidade for genérico ou requerer o contexto do órgão pai para evitar ambiguidade.
  - Para as Casas do Congresso Nacional:
    - \`Brasil. Congresso Nacional. Câmara dos Deputados.\`
    - \`Brasil. Congresso Nacional. Senado Federal.\`
  - Para as Comissões Parlamentares:
    - \`Brasil. Congresso Nacional. Câmara dos Deputados. Comissão de Constituição e Justiça e de Cidadania.\`

---

### 2.4 Codificação no Formato MARC 21 Bibliográfico e de Autoridades
No padrão MARC 21, o tratamento de nomes de entidades governamentais é codificado nos campos **110** (Entrada Principal - Nome Coletivo) e **710** (Entrada Secundária - Nome Coletivo):

- **Primeiro Indicador**:
  - \`1\`: **Nome sob jurisdição** (lugar geográfico / governo). Utilizado sempre que a entrada for feita pelo nome do país, estado ou município.
  - \`2\`: **Nome em ordem direta** (nome da instituição). Utilizado para universidades, estatais e fundações autônomas.
  - \`0\` (raro): Nome invertido por sobrenome.
- **Segundo Indicador**:
  - \`#\` (indefinido ou em branco).
- **Subcampos Principais**:
  - \`$a\`: Nome da jurisdição ou nome da entidade coletiva em ordem direta (obrigatório, não repetível).
  - \`$b\`: Unidade subordinada (repetível para cada nível de subordinação hierárquica).
  - \`$c\`: Local do evento ou sede (quando aplicável).
  - \`$d\`: Data da reunião, conferência ou tratado.
  - \`$e\`: Termo de relação (ex.: \`$e relator\`, \`$e editor\`).

#### Exemplos de Aplicação Real em Provas Cebraspe:
\`\`\`text
110 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados.
110 1# $a Brasil. $b Supremo Tribunal Federal.
110 1# $a São Paulo (Estado). $b Tribunal de Justiça.
110 1# $a Brasil. $b Tribunal de Contas da União.
110 2# $a Universidade de Brasília.
110 2# $a Fundação Oswaldo Cruz.
710 1# $a Brasil. $b Congresso Nacional. $b Câmara dos Deputados. $b Centro de Documentação e Informação. $b Coordenação de Biblioteca.
\`\`\`

---

## 3. A Biblioteca da Câmara dos Deputados (Biblioteca Pedro Aleixo)

### 3.1 Origem Histórica e Trajetória Secular (1826 a 2026)
A história da Biblioteca da Câmara dos Deputados confunde-se com a própria história do Parlamento brasileiro:
- **1826 (Império)**: Criada na cidade do Rio de Janeiro com a instalação da primeira Assembleia Geral Legislativa do Império do Brasil, tendo como primeira sede o histórico Palácio da Cadeia Velha (posteriormente reconstruído como Palácio Tiradentes). Inicialmente, o acervo destinava-se a subsidiar os trabalhos constitucionais e as primeiras leis imperiais.
- **1960 (Mudança da Capital)**: Com a inauguração de Brasília, em 21 de abril de 1960, a Biblioteca transferiu seu valioso acervo para a nova capital da República, instalando-se no complexo arquitetônico do Palácio do Congresso Nacional, no Anexo II da Câmara dos Deputados.
- **1984 (O Patrono Pedro Aleixo)**: Por meio da **Resolução da Mesa nº 25 de 1984**, a Biblioteca da Câmara recebeu a denominação oficial de **Biblioteca Pedro Aleixo**, em homenagem à memória do jurista mineiro, deputado federal, presidente da Câmara e vice-presidente civil da República Pedro Aleixo (1901-1975), notabilizado pela intransigente defesa da legalidade democrática.
- **Bicentenário (1826–2026)**: A Biblioteca Pedro Aleixo completa 200 anos de existência contínua como baluarte da memória bibliográfica, política e jurídica brasileira.

---

### 3.2 Inserção Estrutural na Câmara dos Deputados
A Biblioteca está inserida no nível estratégico de apoio à gestão da informação:
- Subordinada diretamente ao **CEDI (Centro de Documentação e Informação)**.
- O CEDI é órgão da **Diretoria-Geral (DG)** da Câmara dos Deputados.
- Unidades irmãs dentro do CEDI:
  - **Coordenação de Biblioteca (Cobib)**: gestão técnica do acervo, atendimento, referência legislativa e processamento técnico.
  - **Coordenação de Arquivo (Coarq)**: guarda, tratamento e preservação dos documentos arquivísticos e históricos do processo legislativo.
  - **Coordenação de Publicações / Edições Câmara**: selo editorial responsável por editar e difundir publicações de interesse cívico, histórico, parlamentar e legislativo.
  - **Centro Cultural e Museu da Câmara**: preservação e difusão do patrimônio artístico, museológico e cultural da instituição.

\`\`\`mermaid
graph TD
    Mesa[Mesa Diretora da Câmara dos Deputados] --> DG[Diretoria-Geral - DG]
    DG --> CEDI[CEDI - Centro de Documentação e Informação]

    CEDI --> Cobib[Coordenação de Biblioteca - Biblioteca Pedro Aleixo]
    CEDI --> Coarq[Coordenação de Arquivo - Arquivo Histórico]
    CEDI --> Edicoes[Coordenação de Publicações - Edições Câmara]
    CEDI --> Cultural[Centro Cultural e Museu da Câmara]

    Cobib --> Serv1[Atendimento ao Parlamentar & Comissões]
    Cobib --> Serv2[Apoio à Conle & Conof]
    Cobib --> Serv3[BDCam - Biblioteca Digital da Câmara]
    Cobib --> Serv4[Cooperação na RVBI - Rede Virtual de Bibliotecas]
    Cobib --> Serv5[Acervo de Obras Raras e Coleções Especiais]
\`\`\`

---

### 3.3 Missão e Atendimento Prioritário ao Processo Legislativo
A Biblioteca Pedro Aleixo é uma **biblioteca parlamentar especializada**, com missões e públicos prioritários bem delineados:
1. **Público Prioritário**:
   - Deputados Federais e suas assessorias parlamentares.
   - Comissões Permanentes, Especiais e Parlamentares de Inquérito (CPIs).
   - **Conle (Consultoria Legislativa)**: elaboração de minutas de proposições, estudos doutrinários e notas técnicas.
   - **Conof (Consultoria de Orçamento e Fiscalização Financeira)**: subsídios para a apreciação da LOA, LDO e PPA.
   - Mesa Diretora e órgãos administrativos da Casa.
2. **Atendimento Público e Pesquisadores**:
   - Aberta à sociedade civil, pesquisadores acadêmicos, estudantes e cidadãos em geral, democratizando o acesso às fontes do Direito e da História política nacional.
3. **Serviços de Destaque**:
   - Pesquisa legislativa e doutrinária sob demanda.
   - Levantamentos temáticos e bibliografias selecionadas para subsidiar o debate em plenário.
   - Disseminação Seletiva da Informação (DSI) para comissões e gabinetes.
   - Preservação e digitalização de obras raras.

---

### 3.4 Repositórios, Sistemas e Redes Cooperativas

#### A) A Biblioteca Digital da Câmara dos Deputados (BDCam)
- **Natureza**: Repositório institucional digital da Câmara dos Deputados, alinhado ao movimento internacional de **Acesso Aberto (Open Access)**.
- **Plataforma Tecnológica**: Desenvolvido e mantido sobre o software livre **DSpace**.
- **Conteúdo Disponibilizado**:
  - Coleção de **Obras Raras** digitalizadas (incluindo Constituições históricas, relatórios de províncias e leis do Império).
  - Estudos técnicos e notas produzidas pela Consultoria Legislativa (Conle) e Consultoria de Orçamento (Conof).
  - Discursos parlamentares históricos e anais da Câmara dos Deputados.
  - Livros e pesquisas publicados pelo selo **Edições Câmara**.
  - Documentos institucionais e relatórios de gestão.
- **Padrões de Metadados e Protocolos**: Utiliza metadados **Dublin Core qualificado** e suporta o protocolo **OAI-PMH** (Open Archives Initiative Protocol for Metadata Harvesting), permitindo a coleta e interoperabilidade com outros repositórios mundiais.

#### B) A Rede Virtual de Bibliotecas (RVBI)
- **Histórico**: Sucessora da antiga rede SABI (Sistema de Automação de Bibliotecas), criada nos anos 1970.
- **Composição**: Rede cooperativa de bibliotecas que congrega unidades de informação do Poder Legislativo (Senado Federal e Câmara dos Deputados), do Poder Judiciário (STF, STJ, TST, STM, TJDFT), do Tribunal de Contas da União (TCU) e de órgãos do Poder Executivo federal.
- **Coordenação**: **ATENÇÃO EXTREMA**: A coordenação geral da RVBI é de responsabilidade da **Secretaria de Biblioteca e Arquivo do SENADO FEDERAL**, e não da Câmara dos Deputados. A Câmara dos Deputados é membro cooperante fundamental da rede.
- **Catálogo Coletivo e VCB**: Utiliza base de dados compartilhada para catalogação cooperativa de monografias, periódicos e artigos de doutrina jurídica, com controle terminológico padronizado por meio do **Vocabulário Controlado Básico (VCB)**.

#### C) O Sistema de Informações Legislativas (SILEG)
- Sistema corporativo que integra os dados de tramitação de proposições legislativas, textos de projetos de lei, emendas, pareceres de comissões, relatórios e a legislação federal referenciada, permitindo a rastreabilidade integral de toda a produção normativa da Casa.

#### D) O Acervo de Obras Raras e Coleções Especiais
- A Biblioteca Pedro Aleixo custodia uma das mais expressivas coleções de obras raras jurídicas e políticas da América Latina, abrangendo:
  - Exemplares impressos dos séculos XVI ao XIX.
  - A coleção completa dos **Anais do Parlamento Brasileiro** (desde o Império).
  - Obras autografadas por grandes estadistas e juristas (Rui Barbosa, Joaquim Nabuco, Afonso Arinos).
  - Tratados diplomáticos e mapas cartográficos históricos.
`,
};
