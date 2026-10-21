/**
 * Trilha Canônica da Discursiva D1 a D9
 * Alinhada ao Cronograma Dia a Dia (22/10/2026 a 15/01/2027)
 * Documento de Referência: docs/HNC_Cronograma_e_Trilha_Discursiva.md seções 4.4 e 4.5
 */

import type { TemaDiscursiva } from './types';

export type ModalidadeDiscursiva =
  | 'estudo_padrao' // D1: Dissecação de padrão real, sem escrita
  | 'com_consulta_sem_tempo' // D2: Com consulta e sem relógio
  | 'sem_consulta_35min' // D3, D4, D6: 35 min sem consulta
  | 'com_consulta_50linhas' // D5: Peça técnica 50 linhas com consulta
  | 'formato_prova_real' // D7 (TSE 2024), D8 (CAPES 2023)
  | 'simulado_cronometrado'; // D9: Simulado da peça técnica

export interface SessaoDiscursivaTrilha extends TemaDiscursiva {
  codigo: 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'D7' | 'D8' | 'D9';
  dataIso: string;
  diaSemana: string;
  modalidade: ModalidadeDiscursiva;
  tempoSugeridoMinutos: number;
  instrucoesMetodo: string[];
  focoPedagogico: string;
}

export const TRILHA_DISCURSIVA_D1_D9: SessaoDiscursivaTrilha[] = [
  {
    id: 'd1',
    codigo: 'D1',
    titulo: 'D1 · Anatomia da Prova e Dissecação de Padrões Reais Cebraspe (CAPES 2023 e TSE 2024)',
    dataIso: '2026-10-23',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'estudo_padrao',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 60,
    focoPedagogico: 'Compreensão da régua de correção Cebraspe (CAPES 2023 e TSE 2024). Sem redação; foco em dissecar padrões oficiais.',
    enunciado:
      'Sessão inaugural de imersão analítica: estude a anatomia da prova discursiva Cebraspe. Analise como os examinadores pontuam: ~5% para Apresentação e Estrutura e 95% para Desenvolvimento dos quesitos temáticos expressamente solicitados no comando. Domine o Método em 5 Passos (Decodificar -> Mapa de Pontos -> Esqueleto de Abertura/Aspectos -> Transcrição Limpa -> Revisão de Erros de Língua).',
    padraoRespostaPreliminar:
      'Análise de provas reais Cebraspe: no TSE 2024 (CPNUJE, Cargo 5 Biblioteconomia), 2,5 de 50 pontos são de apresentação (5%); no CAPES 2023, 1 de 20 pontos (5%). A banca pontua por elementos obrigatórios esperados no comando. Quem cobre os aspectos com definição, causa e exemplo pontua integralmente.',
    criteriosPontuacao: [
      {
        item: '1. Reconhecimento da Estrutura Cebraspe (~5% Apresentação e 95% Conteúdo)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Identificou os componentes obrigatórios e o peso preponderante dos quesitos temáticos.',
      },
      {
        item: '2. Domínio do Método dos 5 Passos',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Compreendeu o encadeamento: decodificação, mapa de pontos, esqueleto, transcrição e revisão.',
      },
      {
        item: '3. Consciência do Custo do Erro Gramatical (NE)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Entendeu a mecânica de penalização proporcional: 3×NE/TL em questões e 6×NE/TL na peça técnica.',
      },
    ],
    instrucoesMetodo: [
      'Não escreva hoje: apenas leia o caderno e o padrão de resposta do TSE 2024 e CAPES 2023.',
      'Identifique os verbos do comando (explique, diferencie, indique, discorra).',
      'Observe como o espelho pontua cada elemento objetivo.',
    ],
  },
  {
    id: 'd2',
    codigo: 'D2',
    titulo: 'D2 · As Cinco Leis de Ranganathan na Biblioteca Legislativa Contemporânea',
    dataIso: '2026-10-30',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'com_consulta_sem_tempo',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 45,
    focoPedagogico: 'Primeira redação de 20 linhas: com consulta e sem pressão de relógio para fixar a técnica de síntese.',
    enunciado:
      'Considerando a obra clássica The Five Laws of Library Science (1931) de S. R. Ranganathan e suas releituras contemporâneas no ecossistema digital, redija um texto dissertativo, de até 20 linhas, atendendo necessariamente ao que se pede: 1. Enuncie as Cinco Leis da Biblioteconomia e seu núcleo conceitual; 2. Explique como a quinta lei ("A biblioteca é um organismo em crescimento") se manifesta na evolução das coleções digitais e dos repositórios parlamentares; 3. Demonstre a aplicação prática da quarta lei ("Poupe o tempo do leitor") na arquitetura de busca e nos serviços de referência da Câmara dos Deputados.',
    padraoRespostaPreliminar:
      'O candidato deve enunciar as cinco leis (1. Livros são para usar; 2. A cada leitor seu livro; 3. A cada livro seu leitor; 4. Poupe o tempo do leitor; 5. A biblioteca é um organismo em crescimento). Deve relacionar a 5ª lei à expansão dinâmica de metadados, publicações digitais, interoperabilidade de dados e repositórios sem dependência exclusiva de espaço físico. Deve exemplificar a 4ª lei na Câmara com a integração do portal de busca, vocabulários controlados, DSI e recuperação rápida de proposições legislativas para deputados e cidadãos.',
    criteriosPontuacao: [
      {
        item: '1. Enunciação das Cinco Leis e seus Fundamentos Filosóficos',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Citou e conceituou as 5 leis de forma correta e correlacionada.',
      },
      {
        item: '2. A Quinta Lei e o Crescimento de Repositórios Digitais Parlamentares',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Explicou o crescimento contínuo de dados digitais, preservação e metadados.',
      },
      {
        item: '3. A Quarta Lei no Serviço de Referência e Busca da Câmara dos Deputados',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Demonstrou a otimização de tempo com ferramentas modernas de recuperação da informação.',
      },
    ],
    instrucoesMetodo: [
      'Faça com consulta aos seus resumos do Módulo 1.',
      'Não ligue o cronômetro: dedique atenção a caber exatamente em até 20 linhas.',
      'Aplique a tese logo na primeira frase (linhas 1–2).',
    ],
  },
  {
    id: 'd3',
    codigo: 'D3',
    titulo: 'D3 · Governança da Informação versus Governança de Dados no Setor Público',
    dataIso: '2026-11-06',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'sem_consulta_35min',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 35,
    focoPedagogico: 'Treino sob pressão real: 35 minutos cravados, sem consulta aos materiais teóricos.',
    enunciado:
      'No âmbito da gestão estratégica de instituições legislativas, a articulação entre governança da informação e governança de dados é imperativa. Em até 20 linhas: 1. Diferencie conceitualmente governança da informação (foco em políticas, valor, conformidade e ciclo de vida documental) de governança de dados (foco em ativos técnicos de dados, modelagem, acurácia e arquitetura DAMA-DMBOK); 2. Aponte as funções e responsabilidades dos papéis de Data Owner (proprietário de negócio) e Data Steward (curador funcional de metadados); 3. Justifique como a governança integrada assegura a conformidade mandatória com a LAI e a LGPD na Câmara dos Deputados.',
    padraoRespostaPreliminar:
      'Diferenciar governança da informação (foco estratégico, ciclo de vida do documento, valor institucional, conformidade regulatória e preservação histórica) de governança de dados (autoridade técnica sobre os dados como ativos, acurácia, modelagem, arquitetura e qualidade conforme DMBOK). Destacar os papéis: Data Owner toma decisões estratégicas sobre o uso e acesso aos dados de sua área; Data Steward (frequentemente o bibliotecário) zela pela qualidade, padronização de vocabulários e integridade dos metadados. Justificar que a governança integrada assegura transparência ativa (LAI) e privacidade com controle de dados pessoais (LGPD).',
    criteriosPontuacao: [
      {
        item: '1. Diferenciação Conceitual entre Governança da Informação e dos Dados',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Diferenciou escopo estratégico/documental de escopo técnico/DAMA.',
      },
      {
        item: '2. Responsabilidades dos Papéis Data Owner e Data Steward',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Definiu o tomador de decisão (Owner) e o curador de qualidade/metadados (Steward).',
      },
      {
        item: '3. Conformidade com LAI e LGPD no Parlamento',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Articulou transparência ativa, publicidade de proposições e proteção de dados pessoais.',
      },
    ],
    instrucoesMetodo: [
      'Cronômetro oficial ativado: limite de 35 minutos.',
      'Sem consulta a qualquer material.',
      'Reserve os 3 minutos finais exclusivamente para revisar concordância, crase e pontuação.',
    ],
  },
  {
    id: 'd4',
    codigo: 'D4',
    titulo: 'D4 · Da AACR2r ao RDA e IFLA LRM na Prática do Catalogador',
    dataIso: '2026-11-13',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'sem_consulta_35min',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 35,
    focoPedagogico: 'Consolidação de transição técnica em representação descritiva (Módulo 2).',
    enunciado:
      'A transição do código AACR2r para o padrão Resource Description and Access (RDA) e para o modelo de referência conceitual IFLA LRM altera substancialmente a prática da catalogação. Em até 20 linhas: 1. Explique como o IFLA LRM unificou os modelos da família funcional FR (FRBR, FRAD, FRSAD); 2. Defina analiticamente as entidades do nível WEMI (Work/Obra, Expression/Expressão, Manifestation/Manifestação e Item/Item); 3. Discorra sobre como o RDA potencializa a recuperação semântica e a interoperabilidade de proposições legislativas e normas jurídicas no portal da Câmara dos Deputados.',
    padraoRespostaPreliminar:
      'Explicar que o IFLA LRM unificou os modelos FRBR, FRAD e FRSAD num modelo entidade-relacionamento de alto nível para a web semântica. Definir a cadeia WEMI: Obra (criação intelectual abstrata), Expressão (realização alfanumérica/artística), Manifestação (corporificação física ou digital da expressão) e Item (exemplar concreto). Destacar que no portal da Câmara isso permite rastrear um projeto de lei desde sua versão original (Obra/Expressão), suas emendas e relatórios, até as publicações oficiais no Diário da Câmara (Manifestações), conectando-se via Linked Open Data com o LexML.',
    criteriosPontuacao: [
      {
        item: '1. Unificação da Família FR pelo IFLA LRM',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Explicou a consolidação de FRBR, FRAD e FRSAD em modelo conceitual de alto nível.',
      },
      {
        item: '2. Definição Analítica das Entidades WEMI',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Conceituou com precisão Obra, Expressão, Manifestação e Item.',
      },
      {
        item: '3. Interoperabilidade e Dados Conectados no Processo Legislativo',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Demonstrou a utilidade prática no rastreamento de versões de proposições e LexML.',
      },
    ],
    instrucoesMetodo: [
      '35 minutos cravados no cronômetro.',
      'Reserve 1 frase-núcleo para cada quesito solicitado.',
      'Verifique se citou nominalmente as 4 entidades da cadeia WEMI.',
    ],
  },
  {
    id: 'd5',
    codigo: 'D5',
    titulo: 'D5 · Peça Técnica: Nota Técnica sobre Perfil de Metadados e Interoperabilidade',
    dataIso: '2026-11-27',
    diaSemana: 'Sexta-feira',
    tipo: 'peca_50',
    modalidade: 'com_consulta_50linhas',
    limiteLinhas: 50,
    tempoSugeridoMinutos: 75,
    focoPedagogico: 'Primeira Peça Técnica completa (até 50 linhas). Foco na estrutura oficial da redação técnica.',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário da Câmara dos Deputados, elabore uma PEÇA TÉCNICA (gênero Nota Técnica), de até 50 linhas, propondo a criação de uma política institucional de metadados para garantir a interoperabilidade do catálogo da Biblioteca Pedro Aleixo com o portal LexML Brasil e a Rede Virtual de Bibliotecas (RVBI). Sua nota técnica deve contemplar: 1. Diagnóstico da fragmentação de acervos e fundamentação da necessidade de padronização; 2. Proposta de perfil de metadados integrando Dublin Core qualificado, MODS e identificadores persistentes URN LexML; 3. Mecanismos técnicos de coleta e intercâmbio de dados via protocolo OAI-PMH; 4. Adoção dos princípios FAIR (Findable, Accessible, Interoperable, Reusable); 5. Plano de implementação escalonado com fases e governança.',
    padraoRespostaPreliminar:
      'A Nota Técnica deve apresentar cabeçalho sóbrio (Ementa/Assunto, Diagnóstico, Fundamentação Técnica, Proposta Metodológica de Metadados e Conclusão com Plano de Ação). O candidato deve demonstrar que silos bibliográficos dificultam a transparência pública. Especificar o crosswalk entre Dublin Core (nível simplificado de acesso), MODS (metadados bibliográficos detalhados) e URN LexML para identificação inequívoca de proposições. Detalhar o fluxo OAI-PMH com provedor de dados (Câmara) e provedores de serviços (LexML, RVBI). Alinhar a política aos princípios FAIR e propor fases claras de homologação técnica.',
    criteriosPontuacao: [
      {
        item: '1. Estrutura Formal e Adequação ao Gênero Nota Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Apresentou estrutura formal completa: diagnóstico, análise, proposta e encaminhamentos.',
      },
      {
        item: '2. Perfil de Aplicação de Metadados (Dublin Core, MODS, LexML)',
        pontuacaoMaxima: 7.0,
        descricaoEsperada: 'Articulou os padrões e identificadores persistentes de forma tecnicamente precisa.',
      },
      {
        item: '3. Protocolo OAI-PMH e Arquitetura de Intercâmbio',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Explicou o funcionamento de provedores de dados e provedores de serviços.',
      },
      {
        item: '4. Princípios FAIR e Governança da Informação Pública',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Demonstrou como torná-los localizáveis, acessíveis, interoperáveis e reutilizáveis.',
      },
      {
        item: '5. Plano de Ação Escalonado e Encaminhamentos Conclusivos',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Estabeleceu cronograma fático e recomendações executivas para a diretoria da Casa.',
      },
    ],
    instrucoesMetodo: [
      'Gênero: Nota Técnica (Assunto/Ementa, 1. Diagnóstico, 2. Fundamentação, 3. Proposta, 4. Conclusão).',
      'Treine a distribuição espacial para preencher entre 42 e 50 linhas.',
      'Aplique a rubrica 22/6/2 (aspectos/profundidade/apresentação) na autocorreção.',
    ],
  },
  {
    id: 'd6',
    codigo: 'D6',
    titulo: 'D6 · Indexação e Linguagem Documentária na Recuperação da Informação Legislativa',
    dataIso: '2026-12-04',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'sem_consulta_35min',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 35,
    focoPedagogico: 'Treino de síntese em análise documentária e linguagens documentárias (Módulo 3).',
    enunciado:
      'A precisão e a revocação na busca de proposições e debates parlamentares dependem do rigor dos instrumentos de representação temática. Redija um texto dissertativo, de até 20 linhas, atendendo ao que se pede: 1. Apresente as etapas do processo de indexação conforme a norma ABNT NBR 12676 (análise do documento, identificação de conceitos e tradução); 2. Caracterize as relações semânticas canônicas em tesauros (hierárquicas, de equivalência e associativas); 3. Discorra sobre como o vocabulário controlado e o tesauro parlamentar mitigam ruídos e silêncios nas consultas de deputados e cidadãos.',
    padraoRespostaPreliminar:
      'Apresentar as três etapas da NBR 12676: exame do documento e determinação do assunto, identificação dos conceitos fundamentais e tradução dos termos para a linguagem de indexação. Caracterizar as relações: equivalência (USE/UP para sinonímia e grafias variantes), hierárquicas (Termo Geral/TG e Termo Específico/TE para gênero-espécie e todo-parte) e associativas (Termo Relacionado/TR para afinidade conceitual). Demonstrar que o tesauro elimina ruídos (recuperação indevida por polissemia) e silêncios (não recuperação por uso de sinônimo não indexado).',
    criteriosPontuacao: [
      {
        item: '1. Etapas da Indexação segundo a ABNT NBR 12676',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Listou e descreveu as três fases: análise temática, identificação e tradução.',
      },
      {
        item: '2. Relações Semânticas em Tesauros (USE/UP, TG/TE, TR)',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Explicou com rigor as relações de equivalência, hierarquia e associação.',
      },
      {
        item: '3. Controle de Ruído e Silêncio na Consulta Legislativa',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Demonstrou o impacto direto na precisão e na revocação das buscas parlamentares.',
      },
    ],
    instrucoesMetodo: [
      '35 minutos sem consulta.',
      'Use os termos técnicos consagrados (USE, UP, TG, TE, TR, revocação e precisão).',
    ],
  },
  {
    id: 'd7',
    codigo: 'D7',
    titulo: 'D7 · Características da Informação Jurídica e Gestão da Biblioteca (Padrão TSE 2024)',
    dataIso: '2026-12-11',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'formato_prova_real',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 35,
    focoPedagogico: 'Aplicação do modelo real cobrado pela banca no concurso CPNUJE/TSE 2024 (Cargo 5).',
    enunciado:
      'Com base nas especificidades da gestão da informação em bibliotecas públicas dos poderes da República e no padrão Cebraspe (TSE 2024), redija um texto dissertativo, de até 20 linhas, atendendo ao que se pede: 1. Enuncie as características primárias da informação jurídica e legislativa (dinamismo temporal, multiplicidade de fontes, remissividade e hierarquia de normas); 2. Discorra sobre os impactos dessas características na seleção, organização e desbaste do acervo da Biblioteca da Câmara; 3. Explique como o Portal LexML Brasil e os diários oficiais atuam na consolidação e disseminação da informação jurídica aos cidadãos.',
    padraoRespostaPreliminar:
      'Enunciar que a informação jurídica e legislativa é dinâmica, remissiva, sujeita à hierarquia constitucional e gerada por fontes doutrinárias, normativas e jurisprudenciais múltiplas. No desenvolvimento de acervos, isso impõe desbastamento cauteloso (legislação revogada preserva valor histórico e hermenêutico) e atualização constante de comentários à legislação. O LexML e diários oficiais garantem identificadores persistentes (URNs), busca unificada federada e publicidade necessária à eficácia dos atos estatais.',
    criteriosPontuacao: [
      {
        item: '1. Características Primárias da Informação Jurídica',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Citou dinamismo temporal, multiplicidade, remissividade e hierarquia.',
      },
      {
        item: '2. Impactos na Gestão e no Desbastamento de Coleções',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Diferenciou descarte de preservação de normas históricas revogadas.',
      },
      {
        item: '3. Papel do LexML Brasil e dos Diários Oficiais',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Destacou busca federada, identificadores persistentes e publicidade dos atos.',
      },
    ],
    instrucoesMetodo: [
      'Estilo estrito Cebraspe TSE 2024.',
      'Destaque exemplos concretos (LexML, Diário da Câmara, normas revogadas).',
    ],
  },
  {
    id: 'd8',
    codigo: 'D8',
    titulo: 'D8 · Política de Desenvolvimento de Coleções e Gestão da Informação (Padrão CAPES 2023)',
    dataIso: '2026-12-18',
    diaSemana: 'Sexta-feira',
    tipo: 'questao_20',
    modalidade: 'formato_prova_real',
    limiteLinhas: 20,
    tempoSugeridoMinutos: 35,
    focoPedagogico: 'Aplicação do modelo real cobrado na prova discursiva CAPES 2023 (Vergueiro).',
    enunciado:
      'Considerando a literatura clássica de gestão de unidades de informação (Waldomiro Vergueiro) e o padrão Cebraspe da prova CAPES 2023, redija um texto dissertativo, de até 20 linhas, contemplando obrigatoriamente: 1. O estudo das necessidades da comunidade parlamentar como ponto de partida da política de coleções; 2. Os processos de seleção e aquisição no contexto da administração pública e das licitações (Lei nº 14.133/2021); 3. Os critérios técnicos de avaliação, desbaste e descarte; 4. A autoridade, legitimidade e responsabilidade técnica do bibliotecário na gestão desse patrimônio.',
    padraoRespostaPreliminar:
      'O candidato deve expor que a política de desenvolvimento de coleções é um plano de ação contínuo e fundamentado no diagnóstico das necessidades dos usuários reais e potenciais da Câmara. A seleção e aquisição devem seguir critérios objetivos, alinhados ao planejamento orçamentário e à Lei nº 14.133/2021 (licitações, inexigibilidade para livros específicos e compras consorciadas). A avaliação de coleções orienta o desbaste (transferência de suporte ou depósito secundário) e o descarte (alienação patrimonial definitiva). O bibliotecário atua com autoridade e legitimidade técnica, respaldado por comissões consultivas multiprofissionais.',
    criteriosPontuacao: [
      {
        item: '1. Estudo das Necessidades da Comunidade de Usuários',
        pontuacaoMaxima: 4.0,
        descricaoEsperada: 'Fundamentou a política no mapeamento contínuo de demandas informacionais.',
      },
      {
        item: '2. Seleção e Aquisição sob a Lei de Licitações (Lei nº 14.133/21)',
        pontuacaoMaxima: 4.0,
        descricaoEsperada: 'Articulou critérios biblioteconômicos com o regime de compras governamentais.',
      },
      {
        item: '3. Avaliação, Desbastamento e Descarte segundo Vergueiro',
        pontuacaoMaxima: 4.0,
        descricaoEsperada: 'Diferenciou transferência secundária (desbaste) de exclusão patrimonial (descarte).',
      },
      {
        item: '4. Autoridade e Responsabilidade Técnica do Bibliotecário',
        pontuacaoMaxima: 3.0,
        descricaoEsperada: 'Evidenciou o papel do gestor como garantidor da memória institucional legislativa.',
      },
    ],
    instrucoesMetodo: [
      'Última discursiva da Fase 1.',
      'Aplique a distribuição de pontos oficial da prova CAPES (4 aspectos obrigatórios).',
    ],
  },
  {
    id: 'd9',
    codigo: 'D9',
    titulo: 'D9 · Peça Técnica Cronometrada: Preservação Digital no Modelo OAIS (ISO 14721)',
    dataIso: '2026-12-30',
    diaSemana: 'Quarta-feira / Segunda-feira',
    tipo: 'peca_50',
    modalidade: 'simulado_cronometrado',
    limiteLinhas: 50,
    tempoSugeridoMinutos: 60,
    focoPedagogico: 'Simulado de Peça Técnica cronometrada em 60 minutos (Fase 2 de Simulados e Lacunas).',
    enunciado:
      'Na condição de Analista Legislativo - Bibliotecário designado para liderar o grupo de trabalho de modernização da memória documental da Câmara dos Deputados, elabore uma PEÇA TÉCNICA (projeto de parecer com plano de implantação), de até 50 linhas, estruturada conforme as normas da redação oficial. Sua peça deve contemplar obrigatoriamente: 1. Diagnóstico da vulnerabilidade e riscos de obsolescência tecnológica de formatos proprietários e suportes digitais; 2. Arquitetura do repositório baseada no modelo OAIS (Open Archival Information System - ISO 14721), detalhando o ciclo de vida dos pacotes SIP (Submissão), AIP (Arquivamento Mestre) e DIP (Disseminação Pública); 3. Estratégias de preservação digital de longo prazo (migração preventiva de formatos abertos, emulação e auditoria contínua de fixidez com SHA-256); 4. Requisitos de metadados para preservação e acesso (PREMIS e Dublin Core); 5. Diretrizes para integração do acervo com a consulta pública dos cidadãos e pesquisadores parlamentares.',
    padraoRespostaPreliminar:
      'A peça técnica deve apresentar estrutura formal sóbria (Diagnóstico, Fundamentação Técnica, Proposta Metodológica OAIS, Requisitos de Metadados e Conclusão com Diretrizes de Acesso). No diagnóstico, elencar a obsolescência de formatos proprietários e mídias físicas. No fluxo OAIS: o produtor envia o SIP, o repositório arquiva o AIP com metadados estruturados de proveniência e eventos (PREMIS), e distribui o DIP em formatos leves e abertos para consulta cidadã. Detalhar migração para padrões abertos ISO (PDF/A, TIFF, FFV1), emulação e cálculo contínuo de hashes SHA-256 contra corrupção silenciosa de bits. Concluir recomendando integração com LexML e Portal da Câmara.',
    criteriosPontuacao: [
      {
        item: '1. Diagnóstico e Adequação Estrutural da Peça Técnica',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Estruturou documento técnico oficial com diagnóstico fático consistente da obsolescência digital.',
      },
      {
        item: '2. Arquitetura do Modelo OAIS (SIP, AIP e DIP)',
        pontuacaoMaxima: 7.0,
        descricaoEsperada: 'Definiu e articulou os pacotes de informação SIP (entrada), AIP (preservação) e DIP (acesso).',
      },
      {
        item: '3. Estratégias de Preservação e Fixidez Criptográfica (SHA-256)',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Abordou migração para formatos abertos, emulação e checagem automatizada de fixidez de bits.',
      },
      {
        item: '4. Esquemas de Metadados PREMIS e Dublin Core',
        pontuacaoMaxima: 6.0,
        descricaoEsperada: 'Diferenciou metadados de preservação (PREMIS - eventos, direitos, agentes) e acesso (Dublin Core).',
      },
      {
        item: '5. Integração com Pesquisa Cidadã e Acesso Parlamentar',
        pontuacaoMaxima: 5.0,
        descricaoEsperada: 'Apresentou soluções para busca federada, identificadores persistentes e conformidade com a LAI.',
      },
    ],
    instrucoesMetodo: [
      'Simulado cronometrado estrito: limite de 60 minutos para a peça técnica.',
      'Aplique a rubrica 22/6/2 e o desconto de 0,12 por erro em 50 linhas escritas.',
      'Meta de autocorreção: atingir pelo menos 18 de 30 pontos na peça.',
    ],
  },
];

export function obterSessaoDiscursivaPorId(id: string): SessaoDiscursivaTrilha | undefined {
  const normalizado = id.toLowerCase().trim();
  return TRILHA_DISCURSIVA_D1_D9.find((s) => s.id === normalizado || s.codigo.toLowerCase() === normalizado);
}

export function obterSessaoDiscursivaPorData(dataIso: string): SessaoDiscursivaTrilha | undefined {
  return TRILHA_DISCURSIVA_D1_D9.find((s) => s.dataIso === dataIso);
}
