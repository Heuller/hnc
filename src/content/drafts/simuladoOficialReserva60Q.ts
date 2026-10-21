import type { CebraspeQuestion } from '../../domain/types';

export interface DraftItemReservaSimulado extends CebraspeQuestion {
  bloco: 'P1_BASICOS' | 'P2_ESPECIFICOS';
  fontePrimaria: string;
  localizador: string;
  statusHomologacao: 'pendente_homologacao' | 'homologado' | 'rejeitado';
  homologado: boolean;
}

/**
 * Banco de Reserva para Homologação Manual do Simulado Oficial (Prompt C4)
 * 
 * Contém exatamente 60 itens inéditos frescos (30 P1 e 30 P2) com indicação
 * explícita de fonte primária e localizador para futura substituição gradual
 * dos itens repetidos do Simulado Oficial Câmara 180Q.
 */
export const simuladoOficialReserva60Q: DraftItemReservaSimulado[] = [
  // =========================================================================
  // BLOCO P1: CONHECIMENTOS BÁSICOS (ITENS 01 A 30)
  // =========================================================================

  // --- Língua Portuguesa (Itens 01 a 08) ---
  {
    id: 'reserva-60q-001',
    numero: 1,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.1',
    contexto: 'Com relação aos princípios de redação oficial e clareza no serviço público, julgue o item.',
    item: 'O princípio da impessoalidade na redação oficial veda tanto a emissão de juízos de valor de caráter estritamente pessoal quanto a autopromoção de autoridades ou servidores no texto dos expedientes.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. O Manual de Redação da Presidência da República consagra a impessoalidade sob dupla vertente: a ausência de impressões subjetivas individuais e a vedação ao uso de expedientes para promoção pessoal.',
    armadilhaBanca: 'Assertiva correta: leitura rigorosa do princípio da impessoalidade administrativa.',
    dificuldade: 'facil',
    fontePrimaria: 'Manual de Redação da Presidência da República (3ª edição, 2018)',
    localizador: 'Capítulo I, Seção 1.2 (Impessoalidade), p. 18-19',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-002',
    numero: 2,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.1',
    contexto: 'Com relação à padronização dos atos oficiais do Poder Legislativo, julgue o item.',
    item: 'No padrão ofício, o vocativo adequado para o endereçamento a Ministro de Estado é Excelentíssimo Senhor, sendo admitida a forma Senhor Ministro exclusivamente quando se tratar de correspondência expedida pelo Presidente da República.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o Manual de Redação da Presidência da República, o vocativo para Ministros de Estado é "Senhor Ministro", reservando-se "Excelentíssimo Senhor" aos chefes dos três Poderes da República.',
    armadilhaBanca: 'Inversão do emprego dos vocativos e tratamento protocolar formal.',
    dificuldade: 'media',
    fontePrimaria: 'Manual de Redação da Presidência da República (3ª edição, 2018)',
    localizador: 'Capítulo II, Seção 2.1 (Pronomes de Tratamento), p. 28-29',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-003',
    numero: 3,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.2',
    contexto: 'No que concerne à sintaxe de concordância e regência verbal no padrão culto da língua portuguesa, julgue o item.',
    item: 'Na oração "Trata-se de diretrizes essenciais à governança dos dados institucionais", o verbo tratar permanece na terceira pessoa do singular em virtude da presença da partícula apassivadora se ligada ao substantivo no plural.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Na construção apresentada, "se" atua como índice de indeterminação do sujeito (acompanhado de verbo transitivo indireto regido pela preposição "de"), razão pela qual a oração não admite voz passiva nem flexão de plural.',
    armadilhaBanca: 'Confusão clássica entre partícula apassivadora (VTD) e índice de indeterminação do sujeito (VTI).',
    dificuldade: 'media',
    fontePrimaria: 'Moderna Gramática Portuguesa (Evanildo Bechara, 39ª edição)',
    localizador: 'Capítulo 26 (Sintaxe de Concordância), p. 552-554',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-004',
    numero: 4,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.2',
    contexto: 'No que concerne à sintaxe de concordância e regência verbal no padrão culto da língua portuguesa, julgue o item.',
    item: 'No padrão culto da língua portuguesa escrita, o verbo visar, quando empregado com o sentido de almejar ou ter por objetivo determinado, rege obrigatoriamente complemento indireto introduzido pela preposição a.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. No sentido de ter em vista, desejar ou ter por meta, visar é transitivo indireto e exige a preposição "a" (visar ao aperfeiçoamento dos serviços).',
    armadilhaBanca: 'Assertiva correta: regência culta canônica cobrada frequentemente pelo Cebraspe.',
    dificuldade: 'facil',
    fontePrimaria: 'Nova Gramática do Português Contemporâneo (Celso Cunha & Lindley Cintra, 7ª edição)',
    localizador: 'Capítulo 14 (Regência Verbal), p. 586-587',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-005',
    numero: 5,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.3',
    contexto: 'Acerca da coesão textual, argumentação e operadores discursivos, julgue o item.',
    item: 'No âmbito da estruturação sintática e da coesão textual em documentos oficiais, a locução conjuntiva conquanto possui valor semântico causal, atuando na oração para explicitar o motivo determinante do fato enunciado na oração principal."conquanto" possui valor semântico causal, atuando na oração para explicitar o motivo determinante do fato enunciado na oração principal.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. "Conquanto" é conjunção subordinativa concessiva (sinônima de "embora", "ainda que"), e não causal.',
    armadilhaBanca: 'Troca de valor semântico entre relação concessiva e relação causal.',
    dificuldade: 'media',
    fontePrimaria: 'Moderna Gramática Portuguesa (Evanildo Bechara, 39ª edição)',
    localizador: 'Capítulo 24 (Das Orações Subordinadas Adverbiais), p. 508-510',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-006',
    numero: 6,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.3',
    contexto: 'Acerca da coesão textual, argumentação e operadores discursivos, julgue o item.',
    item: 'No âmbito da organização e da coesão do texto dissertativo, a anáfora consiste em mecanismo de coesão referencial por meio do qual um termo remete a uma informação ou entidade expressa previamente no fluxo textual.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Anáfora é o mecanismo coesivo de referência regressiva (para trás no texto), enquanto a catáfora aponta para elemento posterior.',
    armadilhaBanca: 'Assertiva correta: precisão conceitual dos termos de linguística textual.',
    dificuldade: 'facil',
    fontePrimaria: 'Linguística Textual: Introdução (Ingedore Villaça Koch, 2ª edição)',
    localizador: 'Capítulo 3 (Coesão Referencial), p. 45-48',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-007',
    numero: 7,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.4',
    contexto: 'Em relação ao emprego do sinal indicativo de crase, julgue o item.',
    item: 'No que concerne ao uso do acento grave no padrão culto, ocorre crase facultativa antes de pronomes possessivos femininos singulares que acompanhem substantivo determinado, como na oração "o servidor entregou o relatório à sua chefia imediata".',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Diante de pronome possessivo feminino adjetivo no singular, o uso do artigo definido é facultativo na norma-padrão, tornando facultativo o sinal de crase quando houver regência por preposição "a".',
    armadilhaBanca: 'Assertiva correta: regra canônica de crase facultativa.',
    dificuldade: 'facil',
    fontePrimaria: 'Gramática Houaiss da Língua Portuguesa (José Carlos de Azeredo, 4ª edição)',
    localizador: 'Capítulo 17 (Emprego do Acento Grave), p. 412-414',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-008',
    numero: 8,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M13',
    submoduloId: '13.4',
    contexto: 'Em relação ao emprego do sinal indicativo de crase, julgue o item.',
    item: 'É obrigatório o uso do sinal indicativo de crase diante de nomes de cidades desprovidos de modificador qualificativo, a exemplo de "o servidor viajou à Brasília para participar da audiência pública".',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Nomes de localidades que não admitem artigo definido rejeitam crase ("viajou a Brasília"). Apenas se vierem modificados ou especificados ocorre crase ("viajou à Brasília dos pioneiros").',
    armadilhaBanca: 'Desconhecimento da regra de regência com topônimos sem artigo.',
    dificuldade: 'media',
    fontePrimaria: 'Moderna Gramática Portuguesa (Evanildo Bechara, 39ª edição)',
    localizador: 'Capítulo 20 (Do Uso do Acento Grave), p. 430-432',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Portuguesa)',
      verificado: false
    }
  },

  // --- Língua Inglesa (Itens 09 a 14) ---
  {
    id: 'reserva-60q-009',
    numero: 9,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.1',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'In the sentence "Libraries must harness linked open data so that semantic relationships across disparate catalogues can be automatically discovered", the clause introduced by "so that" conveys a purpose or objective.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. "So that" introduces a final adverbial clause of purpose (com a finalidade de, para que).',
    armadilhaBanca: 'Assertiva correta: reconhecimento de oração subordinada adverbial final em inglês.',
    dificuldade: 'facil',
    fontePrimaria: 'Longman Grammar of Spoken and Written English (Biber et al.)',
    localizador: 'Chapter 10 (Adverbial Clauses), p. 825-827',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-010',
    numero: 10,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.1',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'In technical and scholarly English texts concerning library science, the connective adverb "nevertheless" introduces an idea of chronological time sequence, being grammatically and semantically equivalent in discourse to the temporal connector "subsequently".',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. "Nevertheless" é um conector de oposição ou concessão (não obstante, mesmo assim), equivalendo a "however" ou "nonetheless", e não a "subsequently" (temporal).',
    armadilhaBanca: 'Troca de conector concessivo/adversativo por marcador de sequência cronológica.',
    dificuldade: 'facil',
    fontePrimaria: 'Oxford English Grammar (Sidney Greenbaum)',
    localizador: 'Section 4.12 (Connective Adverbs), p. 182-184',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-011',
    numero: 11,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.2',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'In international archival guidelines, the term "digital curation" encompasses the active management and appraisal of digital assets over their entire lifecycle, exceeding the scope of simple backup routines.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme o Digital Curation Centre (DCC) e a literatura internacional, curadoria digital é a gestão ativa e contínua de longo prazo com preservação de valor e contexto, indo muito além de cópias de segurança (backup).',
    armadilhaBanca: 'Assertiva correta: precisão técnica da definição de curadoria digital.',
    dificuldade: 'media',
    fontePrimaria: 'Digital Curation Centre (DCC) Curation Lifecycle Model',
    localizador: 'DCC Lifecycle Model Guide, Section 2 (Curation in Practice), p. 4-6',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-012',
    numero: 12,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.2',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'In the context of international scientific communication and research data management, the acronym FAIR in open research data stewardship stands for Formatted, Authorized, Isolated, and Restricted.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Os princípios FAIR significam Findable, Accessible, Interoperable, and Reusable (Localizável, Acessível, Interoperável e Reutilizável).',
    armadilhaBanca: 'Distorção completa das palavras formadoras do acrônimo FAIR, atribuindo-lhe caráter restritivo.',
    dificuldade: 'facil',
    fontePrimaria: 'Wilkinson et al. The FAIR Guiding Principles for scientific data management (Scientific Data 3, 2016)',
    localizador: 'Article 160018, Box 2 (The FAIR Principles), p. 4',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-013',
    numero: 13,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.3',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'According to official IFLA policy statements and declarations, universal open access to scientific information directly reinforces democratic citizenship by removing financial and technical paywalls to peer-reviewed public research findings.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a diretriz basilar da IFLA Statement on Open Access, articulando acesso livre à informação científica e transparência democrática.',
    armadilhaBanca: 'Assertiva correta: alinhamento estrito com os manifestos da IFLA.',
    dificuldade: 'media',
    fontePrimaria: 'IFLA Statement on Open Access to Scholarly Literature (2011/2021)',
    localizador: 'Section 1 (Core Values of Open Access), p. 1-2',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-014',
    numero: 14,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M12',
    submoduloId: '12.3',
    contexto: 'Based on strategic reading and comprehension of international texts in Library and Information Science, judge the item.',
    item: 'In contemporary digital curation and preservation terminology, the expression "dark archive" denotes a public web repository interface designed with high-contrast accessibility profiles specifically optimized for blind and visually impaired patrons.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. "Dark archive" é um repositório seguro e inacessível ao público geral (inclusive sem consulta direta na web), projetado para custódia de contingência e preservação extrema contra incidentes ou desastres.',
    armadilhaBanca: 'Falso sentido atribuído à expressão técnica da preservação digital por assimilação vocabular ingênua.',
    dificuldade: 'media',
    fontePrimaria: 'Society of American Archivists (SAA) Dictionary of Archives Terminology',
    localizador: 'Entry: "dark archive" (Digital Records & Preservation Terminology)',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Língua Inglesa)',
      verificado: false
    }
  },

  // --- Direito Constitucional e Administrativo (Itens 15 a 22) ---
  {
    id: 'reserva-60q-015',
    numero: 15,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.1',
    contexto: 'No que concerne aos princípios constitucionais da Administração Pública e à responsabilidade civil do Estado, julgue o item.',
    item: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem objetivamente pelos danos que seus agentes causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Reprodução literal da regra constitucional contida no art. 37, § 6º, da CF/88, consagrando a responsabilidade objetiva sob a teoria do risco administrativo.',
    armadilhaBanca: 'Assertiva correta: reprodução exata da disposição constitucional.',
    dificuldade: 'facil',
    fontePrimaria: 'Constituição da República Federativa do Brasil de 1988',
    localizador: 'Art. 37, § 6º',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-016',
    numero: 16,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.1',
    contexto: 'No que concerne aos princípios constitucionais da Administração Pública e à responsabilidade civil do Estado, julgue o item.',
    item: 'O princípio da publicidade administrativa impede que a Administração estabeleça sigilo sobre documentos públicos em qualquer situação, ainda que imprescindíveis à segurança da sociedade e do Estado.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o art. 5º, inciso XXXIII, e a Lei nº 12.527/2011 (LAI), a publicidade é a regra geral, mas o sigilo é expressamente admitido em situações constitucionais taxativas para salvaguarda da segurança da sociedade e do Estado.',
    armadilhaBanca: 'Uso de absolutização indevida contrariando ressalva constitucional expressa.',
    dificuldade: 'facil',
    fontePrimaria: 'Constituição da República Federativa do Brasil de 1988',
    localizador: 'Art. 5º, inciso XXXIII c/c Art. 37, caput',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-017',
    numero: 17,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.2',
    contexto: 'Quanto ao regime jurídico dos servidores públicos civis da União (Lei nº 8.112/1990), julgue o item.',
    item: 'A estabilidade no serviço público federal é adquirida após três anos de efetivo exercício pelos servidores nomeados para cargo de provimento efetivo em virtude de concurso público, condicionada à aprovação em avaliação especial de desempenho.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme o art. 41 da CF/88 (redação dada pela EC 19/1998) e jurisprudência pacificada, o prazo de estágio probatório/estabilidade é de 3 anos, com avaliação especial obrigatória.',
    armadilhaBanca: 'Assertiva correta: prazo de 3 anos e requisito formal de avaliação especial.',
    dificuldade: 'facil',
    fontePrimaria: 'Constituição Federal de 1988 c/c Lei Federal nº 8.112/1990',
    localizador: 'CF/88, Art. 41, caput e § 4º',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-018',
    numero: 18,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.2',
    contexto: 'Quanto ao regime jurídico dos servidores públicos civis da União (Lei nº 8.112/1990), julgue o item.',
    item: 'Em conformidade com o regime jurídico dos servidores públicos civis da União (Lei nº 8.112/1990), a vacância de cargo público decorre de posse em outro cargo inacumulável, exoneração e remoção a pedido do servidor.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Remoção não gera vacância; é mera forma de deslocamento do servidor no âmbito do mesmo quadro. As hipóteses legais de vacância (art. 33 da Lei 8.112/90) são: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.',
    armadilhaBanca: 'Inclusão de remoção (forma de deslocamento) no rol taxativo de vacância.',
    dificuldade: 'media',
    fontePrimaria: 'Lei Federal nº 8.112/1990',
    localizador: 'Art. 33 c/c Art. 36',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-019',
    numero: 19,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.3',
    contexto: 'A respeito do processo administrativo federal (Lei nº 9.784/1999) e dos atos administrativos, julgue o item.',
    item: 'A Administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, e pode revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É o princípio da autotutela administrativa, consagrado no art. 53 da Lei 9.784/99 e nas Súmulas 346 e 473 do Supremo Tribunal Federal.',
    armadilhaBanca: 'Assertiva correta: formulação clássica do princípio da autotutela.',
    dificuldade: 'facil',
    fontePrimaria: 'Lei Federal nº 9.784/1999 c/c Súmula 473 do STF',
    localizador: 'Art. 53 da Lei nº 9.784/1999',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-020',
    numero: 20,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.3',
    contexto: 'A respeito do processo administrativo federal (Lei nº 9.784/1999) e dos atos administrativos, julgue o item.',
    item: 'O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em dez anos, contados da data em que foram praticados, salvo comprovada má-fé.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. O prazo decadencial previsto no art. 54 da Lei nº 9.784/1999 é de 5 anos (e não dez anos), salvo comprovada má-fé.',
    armadilhaBanca: 'Substituição do prazo decadencial quinquenal (5 anos) por dez anos.',
    dificuldade: 'media',
    fontePrimaria: 'Lei Federal nº 9.784/1999',
    localizador: 'Art. 54, caput',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-021',
    numero: 21,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.4',
    contexto: 'Acerca da Lei de Acesso à Informação (Lei nº 12.527/2011) e das diretrizes de transparência pública, julgue o item.',
    item: 'O acesso a informações pessoais relativas à intimidade, vida privada, honra e imagem terá seu acesso restrito, independentemente de classificação de sigilo, pelo prazo máximo de cem anos a contar da data de sua produção.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Reprodução exata do art. 31, § 1º, inciso I, da Lei nº 12.527/2011 (LAI). Informações pessoais têm proteção especial de até 100 anos.',
    armadilhaBanca: 'Assertiva correta: prazo de proteção das informações pessoais na LAI.',
    dificuldade: 'media',
    fontePrimaria: 'Lei Federal nº 12.527/2011 (Lei de Acesso à Informação)',
    localizador: 'Art. 31, § 1º, inciso I',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-022',
    numero: 22,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M11',
    submoduloId: '11.4',
    contexto: 'Acerca da Lei de Acesso à Informação (Lei nº 12.527/2011) e das diretrizes de transparência pública, julgue o item.',
    item: 'Conforme a Lei nº 12.527/2011, o prazo máximo de classificação de documentos sob o grau secreto é de quinze anos, ao passo que a classificação reservada vigora por até dez anos.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o art. 24, § 1º, da LAI: Ultrassecreto = até 25 anos; Secreto = até 15 anos; Reservado = até 5 anos (e não 10 anos).',
    armadilhaBanca: 'Inversão do prazo de classificação da categoria reservada (5 anos vs 10 anos).',
    dificuldade: 'media',
    fontePrimaria: 'Lei Federal nº 12.527/2011 (Lei de Acesso à Informação)',
    localizador: 'Art. 24, § 1º, inciso III',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Direito Constitucional/Administrativo)',
      verificado: false
    }
  },

  // --- Informática Legislativa, Ciência de Dados e Regimento (Itens 23 a 30) ---
  {
    id: 'reserva-60q-023',
    numero: 23,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M14',
    submoduloId: '14.1',
    contexto: 'No âmbito da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), julgue o item.',
    item: 'O tratamento de dados pessoais sensíveis sem o consentimento do titular pode ser realizado pela Administração Pública quando indispensável ao cumprimento de obrigação legal ou regulatória pelo controlador.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. O art. 11, inciso II, alínea "a", da LGPD permite expressamente o tratamento de dados pessoais sensíveis sem consentimento para cumprimento de obrigação legal ou regulatória.',
    armadilhaBanca: 'Assertiva correta: hipótese legal explícita de dispensa de consentimento.',
    dificuldade: 'media',
    fontePrimaria: 'Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais)',
    localizador: 'Art. 11, inciso II, alínea "a"',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informática e Dados)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-024',
    numero: 24,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M14',
    submoduloId: '14.1',
    contexto: 'No âmbito da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), julgue o item.',
    item: 'Conforme a LGPD, os dados anonimizados mantêm indefinidamente o status de dados pessoais, submetendo-se integralmente a todas as exigências protetivas da lei ainda que o processo técnico de anonimização seja irreversível.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o art. 12 da LGPD, os dados anonimizados não são considerados dados pessoais para os fins da lei, salvo quando o processo de anonimização puder ser revertido utilizando-se esforços razoáveis.',
    armadilhaBanca: 'Desconsideração da regra de exclusão dos dados efetivamente anonimizados do escopo da LGPD.',
    dificuldade: 'facil',
    fontePrimaria: 'Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais)',
    localizador: 'Art. 12, caput',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informática e Dados)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-025',
    numero: 25,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M14',
    submoduloId: '14.2',
    contexto: 'Acerca da arquitetura de dados e bancos de dados relacionais e analíticos, julgue o item.',
    item: 'No contexto da modelagem dimensional em ambientes de Data Warehouse e Business Intelligence, uma tabela de fatos armazena métricas quantitativas do negócio e chaves estrangeiras vinculadas às tabelas de dimensões circundantes.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É o conceito canônico de Ralph Kimball para esquemas estrela (star schema): a tabela de fatos contém medidas/métricas numéricas do negócio e as chaves que apontam para as dimensões que conferem contexto.',
    armadilhaBanca: 'Assertiva correta: definição clássica de modelagem dimensional.',
    dificuldade: 'facil',
    fontePrimaria: 'The Data Warehouse Toolkit (Ralph Kimball & Margy Ross, 3rd edition)',
    localizador: 'Chapter 1 (Dimensional Modeling Basics), p. 7-10',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informática e Dados)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-026',
    numero: 26,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M14',
    submoduloId: '14.2',
    contexto: 'Acerca da arquitetura de dados e bancos de dados relacionais e analíticos, julgue o item.',
    item: 'A operação de junção LEFT OUTER JOIN em linguagem SQL descarta todos os registros da tabela situada à esquerda caso não haja correspondência exata de chave na tabela à direita.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. O LEFT OUTER JOIN preserva obrigatoriamente todos os registros da tabela da esquerda; quando não há correspondência na tabela da direita, os campos retornam como NULL. O descarte de registros sem chave correspondente é característica do INNER JOIN.',
    armadilhaBanca: 'Inversão das propriedades fundamentais entre INNER JOIN e LEFT OUTER JOIN.',
    dificuldade: 'facil',
    fontePrimaria: 'Sistemas de Banco de Dados (Silberschatz, Korth & Sudarshan, 7ª edição)',
    localizador: 'Capítulo 3 (Introdução a SQL), p. 88-90',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informática e Dados)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-027',
    numero: 27,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M10A',
    submoduloId: '10A.1',
    contexto: 'Com base nas disposições do Regimento Interno da Câmara dos Deputados (RICD) sobre o processo legislativo, julgue o item.',
    item: 'As comissões parlamentares de inquérito (CPIs) detêm poderes de investigação próprios das autoridades judiciais, podendo determinar a quebra de sigilo bancário, fiscal e telefônico dos investigados por decisão fundamentada de sua maioria.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme o art. 58, § 3º, da CF/88 e a jurisprudência pacificada do STF, as CPIs podem determinar quebra de sigilo fiscal, bancário e telemático/telefônico (dados), não podendo apenas decretar busca domiciliar nem interceptação telefônica (escuta).',
    armadilhaBanca: 'Assertiva correta: poderes instrutórios constitucionais das CPIs.',
    dificuldade: 'media',
    fontePrimaria: 'Constituição Federal de 1988 c/c Regimento Interno da Câmara dos Deputados (RICD)',
    localizador: 'CF/88, Art. 58, § 3º; RICD, Art. 35',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Regimento Interno e Processo Legislativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-028',
    numero: 28,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M10A',
    submoduloId: '10A.1',
    contexto: 'Com base nas disposições do Regimento Interno da Câmara dos Deputados (RICD) sobre o processo legislativo, julgue o item.',
    item: 'O quórum ordinário para aprovação de projeto de lei complementar no Plenário da Câmara dos Deputados é o de maioria simples, desde que presente a maioria absoluta dos membros da Casa.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o art. 69 da CF/88 e o RICD, as leis complementares exigem aprovação por maioria absoluta de votos dos membros da Câmara (e não maioria simples).',
    armadilhaBanca: 'Confusão clássica entre quórum de lei ordinária (maioria simples) e lei complementar (maioria absoluta).',
    dificuldade: 'facil',
    fontePrimaria: 'Constituição da República Federativa do Brasil de 1988',
    localizador: 'Art. 69 c/c RICD, Art. 183',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Regimento Interno e Processo Legislativo)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-029',
    numero: 29,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M10B',
    submoduloId: '10B.1',
    contexto: 'No que se refere ao Regimento Comum do Congresso Nacional (RCCN) e às deliberações de matérias orçamentárias, julgue o item.',
    item: 'A Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO) é composta de Deputados e Senadores, incumbindo-lhe examinar e emitir parecer sobre os projetos de lei orçamentária anual, plano plurianual e diretrizes orçamentárias.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Reprodução exata do art. 166, § 1º, da CF/88 e das disposições fundamentais da Resolução nº 1/2006-CN (Comissão Mista de Orçamento).',
    armadilhaBanca: 'Assertiva correta: competência privativa mista da CMO.',
    dificuldade: 'facil',
    fontePrimaria: 'Constituição Federal de 1988 c/c Resolução nº 1/2006-CN (RCCN)',
    localizador: 'CF/88, Art. 166, § 1º; Resolução nº 1/2006-CN, Art. 2º',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Regimento Comum do Congresso Nacional)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-030',
    numero: 30,
    bloco: 'P1_BASICOS',
    macroModuloId: 'M10B',
    submoduloId: '10B.1',
    contexto: 'No que se refere ao Regimento Comum do Congresso Nacional (RCCN) e às deliberações de matérias orçamentárias, julgue o item.',
    item: 'As deliberações sobre vetos presidenciais em sessão conjunta do Congresso Nacional são tomadas por votação unicamente simbólica, dispensando-se a contagem individual dos votos de Deputados e Senadores.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme o art. 66, § 4º, da CF/88, o veto presidencial só pode ser rejeitado pelo voto da maioria absoluta dos Deputados e dos Senadores, mediante escrutínio nominal/eletrônico.',
    armadilhaBanca: 'Atribuição de votação simbólica sem contagem individual a matéria solene de rejeição de veto.',
    dificuldade: 'media',
    fontePrimaria: 'Constituição Federal de 1988 c/c Regimento Comum do Congresso Nacional',
    localizador: 'CF/88, Art. 66, § 4º; RCCN, Art. 104',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Regimento Comum do Congresso Nacional)',
      verificado: false
    }
  },

  // =========================================================================
  // BLOCO P2: CONHECIMENTOS ESPECÍFICOS DE BIBLIOTECONOMIA (ITENS 31 A 60)
  // =========================================================================

  // --- M1/M2: Gestão de Unidades de Informação e Desenvolvimento de Coleções (Itens 31 a 36) ---
  {
    id: 'reserva-60q-031',
    numero: 31,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M1',
    submoduloId: '1.2',
    contexto: 'A respeito das funções administrativas fundamentais e do planejamento em unidades de informação, julgue o item.',
    item: 'O planejamento estratégico em bibliotecas legislativas define a missão institucional, a visão de futuro e os objetivos de longo prazo, fornecendo a base orientadora para os planos táticos e operacionais dos setores.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme a teoria de gestão em unidades de informação (Maciel & Mendonça, Almeida), o planejamento estratégico situa-se no nível institucional superior de direcionamento.',
    armadilhaBanca: 'Assertiva correta: hierarquia canônica do planejamento.',
    dificuldade: 'facil',
    fontePrimaria: 'Planejamento de Bibliotecas e Serviços de Informação (Maria Christina Barbosa de Almeida, 2ª ed.)',
    localizador: 'Capítulo 2 (Níveis e Etapas do Planejamento), p. 35-38',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Gestão em Bibliotecas)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-032',
    numero: 32,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M1',
    submoduloId: '1.2',
    contexto: 'A respeito das funções administrativas fundamentais e do planejamento em unidades de informação, julgue o item.',
    item: 'Na matriz SWOT (FOFA), as ameaças e as oportunidades referem-se à análise do ambiente interno da organização, enquanto as forças e as fraquezas avaliam fatores do ambiente externo incontroláveis pela gestão.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Houve inversão clássica: Forças e Fraquezas dizem respeito ao ambiente interno; Oportunidades e Ameaças compõem o diagnóstico do ambiente externo.',
    armadilhaBanca: 'Inversão deliberada entre ambiente interno e externo na matriz SWOT.',
    dificuldade: 'facil',
    fontePrimaria: 'Administração de Unidades de Informação (Alba Costa Maciel & Marília Alvarenga Mendonça)',
    localizador: 'Capítulo 3 (Diagnóstico e Instrumentos de Análise), p. 54-56',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Gestão em Bibliotecas)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-033',
    numero: 33,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M2',
    submoduloId: '2.1',
    contexto: 'No que concerne ao desenvolvimento de coleções e à formação de acervos, julgue o item.',
    item: 'O processo de desenvolvimento de coleções é cíclico e compreende etapas inter-relacionadas: estudo da comunidade, políticas de seleção, aquisição, desbastamento, descarte e avaliação da coleção.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É o modelo canônico de Evans, consagrado na literatura brasileira por Waldomiro Vergueiro.',
    armadilhaBanca: 'Assertiva correta: etapas canônicas do ciclo de desenvolvimento de coleções.',
    dificuldade: 'facil',
    fontePrimaria: 'Desenvolvimento de Coleções (Waldomiro Vergueiro, 2ª ed.)',
    localizador: 'Capítulo 1 (O Ciclo do Desenvolvimento de Coleções), p. 15-18',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Desenvolvimento de Coleções)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-034',
    numero: 34,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M2',
    submoduloId: '2.1',
    contexto: 'No que concerne ao desenvolvimento de coleções e à formação de acervos, julgue o item.',
    item: 'Na teoria do desenvolvimento de coleções, o desbastamento equivale ao descarte definitivo da obra por incineração ou doação a terceiros, sem contemplar o remanejamento para depósitos de menor acessibilidade.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme Vergueiro e Weitzel, o desbastamento (weeding/storage) consiste na transferência de materiais de uso menos frequente para depósitos de reserva ou armazenamento secundário, enquanto o descarte é o expurgo definitivo do patrimônio.',
    armadilhaBanca: 'Confusão conceitual entre desbastamento (remanejamento de guarda) e descarte (expurgo patrimonial definitivo).',
    dificuldade: 'media',
    fontePrimaria: 'Desenvolvimento de Coleções (Waldomiro Vergueiro)',
    localizador: 'Capítulo 5 (Desbastamento e Descarte), p. 68-71',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Desenvolvimento de Coleções)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-035',
    numero: 35,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M2',
    submoduloId: '2.2',
    contexto: 'Em relação à avaliação de coleções e estudos de uso, julgue o item.',
    item: 'A avaliação de coleções baseada em métodos centrados no usuário analisa dados empíricos de empréstimo circulante, estatísticas de download em repositórios digitais e pesquisas de satisfação da comunidade atendida.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Métodos centrados no usuário medem a utilização real e percepção da comunidade, em contraposição aos métodos centrados na coleção (listas de autoridades, contagem quantitativa pura).',
    armadilhaBanca: 'Assertiva correta: distinção epistemológica entre métodos centrados na coleção e no usuário.',
    dificuldade: 'facil',
    fontePrimaria: 'Desenvolvimento de Coleções (Simone da Rocha Weitzel)',
    localizador: 'Capítulo 4 (Metodologias de Avaliação de Coleções), p. 55-58',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Desenvolvimento de Coleções)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-036',
    numero: 36,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M2',
    submoduloId: '2.2',
    contexto: 'Em relação à avaliação de coleções e estudos de uso, julgue o item.',
    item: 'A Lei de Bradford (dispersão de periódicos) postula que a maior parte dos artigos relevantes sobre determinado tema científico distribui-se de maneira perfeitamente homogênea por todos os periódicos da área, refutando a existência de um núcleo central de revistas.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. A Lei de Bradford estabelece exatamente o princípio da concentração/dispersão zonal: existe um núcleo central restrito (core) de periódicos altamente especializados que contém a maior densidade de artigos, seguido de zonas concêntricas com número progressivamente maior de títulos contendo menos artigos.',
    armadilhaBanca: 'Inversão cabal do postulado bibliométrico de Samuel Bradford.',
    dificuldade: 'media',
    fontePrimaria: 'Métricas da Informação (Foresti & Vanz, orgs.)',
    localizador: 'Capítulo 1 (Leis Bibliométricas Fundamentais: Bradford, Lotka e Zipf), p. 22-25',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Bibliometria e Coleções)',
      verificado: false
    }
  },

  // --- M3/M4: Processamento Técnico, Catalogação e Classificação (Itens 37 a 42) ---
  {
    id: 'reserva-60q-037',
    numero: 37,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M3',
    submoduloId: '3.1',
    contexto: 'No que concerne à catalogação descritiva e aos padrões de metadados bibliográficos, julgue o item.',
    item: 'No formato MARC 21 Bibliográfico, o campo 245 destina-se ao registro do título principal e da indicação de responsabilidade, correspondendo o primeiro indicador ao controle de entrada principal pelo título.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme as especificações da Library of Congress, o campo 245 abrange Title Statement (título e indicação de responsabilidade); o primeiro indicador define se haverá entrada secundária por título (quando há campo 1XX) ou se o título é a entrada principal.',
    armadilhaBanca: 'Assertiva correta: conformidade estrita com o manual do MARC 21.',
    dificuldade: 'media',
    fontePrimaria: 'Library of Congress MARC 21 Format for Bibliographic Data',
    localizador: 'Field 245 (Title Statement), Indicators & Subfields',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Catalogação e MARC 21)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-038',
    numero: 38,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M3',
    submoduloId: '3.1',
    contexto: 'No que concerne à catalogação descritiva e aos padrões de metadados bibliográficos, julgue o item.',
    item: 'No padrão MARC 21, as notas gerais de dissertação acadêmica e teses são codificadas obrigatoriamente no campo 650, enquanto o campo 502 é reservado para notas de conteúdo analítico.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Houve troca dos campos: o campo 502 é a nota formal de dissertação/tese (Dissertation Note); o campo 650 é termo de assunto tópico (Subject Added Entry - Topical Term); notas de conteúdo analítico residem no campo 505.',
    armadilhaBanca: 'Troca cruzada de campos MARC 21 entre notas descritivas (5XX) e pontos de acesso de assunto (6XX).',
    dificuldade: 'media',
    fontePrimaria: 'Library of Congress MARC 21 Format for Bibliographic Data',
    localizador: 'Fields 502, 505 and 650 Specifications',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Catalogação e MARC 21)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-039',
    numero: 39,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M3',
    submoduloId: '3.2',
    contexto: 'A respeito do modelo conceitual IFLA LRM e das diretrizes do RDA (Resource Description and Access), julgue o item.',
    item: 'No modelo IFLA LRM, uma Expressão corresponde à realização intelectual ou artística de uma Obra, manifestando-se por meio de uma forma de notação como texto, áudio, notação cartográfica ou linguagem performática.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. IFLA LRM define Expressão (LRM-E3) como a realização intelectual ou artística da Obra em forma de sinais, palavras, sons, etc.',
    armadilhaBanca: 'Assertiva correta: definição precisa da entidade Expressão no IFLA LRM / RDA.',
    dificuldade: 'media',
    fontePrimaria: 'IFLA Library Reference Model (IFLA LRM, 2017)',
    localizador: 'Section 4.2 (Entity LRM-E3: Expression), p. 24-26',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (IFLA LRM e RDA)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-040',
    numero: 40,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M3',
    submoduloId: '3.2',
    contexto: 'A respeito do modelo conceitual IFLA LRM e das diretrizes do RDA (Resource Description and Access), julgue o item.',
    item: 'Conforme a modelagem WEMI do IFLA LRM, um Item consiste na classe abstrata de todos os exemplares físicos e digitais produzidos por uma editora, enquanto a Manifestação representa o exemplar individual concreto de posse de um usuário.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. A definição está invertida: Manifestação (LRM-E4) é o conjunto/classe abstrata das características de produção e publicação industrial; Item (LRM-E5) é o exemplar físico ou objeto digital concreto e individualizado.',
    armadilhaBanca: 'Inversão conceitual clássica entre Manifestação e Item no WEMI.',
    dificuldade: 'facil',
    fontePrimaria: 'IFLA Library Reference Model (IFLA LRM, 2017)',
    localizador: 'Section 4.2 (Entities LRM-E4: Manifestation and LRM-E5: Item), p. 27-30',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (IFLA LRM e RDA)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-041',
    numero: 41,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M4',
    submoduloId: '4.1',
    contexto: 'Acerca da Classificação Decimal Universal (CDU) e das linguagens documentárias, julgue o item.',
    item: 'Na Classificação Decimal Universal (CDU), os sinais de dois pontos simples (:) e de dois pontos duplos (::) desempenham funções de síntese conceitual, indicando este último uma relação irreversível ou subordinação fixa entre dois conceitos.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Na tabela de sinais auxiliares da CDU, ":" indica relação simples reversível, enquanto "::" indica relação de fixação, ordem irreversível ou subordinação conceitual estrita.',
    armadilhaBanca: 'Assertiva correta: rigor na sintaxe e nos operadores relacionais da CDU.',
    dificuldade: 'media',
    fontePrimaria: 'Classificação Decimal Universal (CDU - Edição Padrão Internacional em Língua Portuguesa)',
    localizador: 'Tabelas Auxiliares Comuns (Sinais de Coordenação e Relação), p. 14-16',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Classificação e CDU)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-042',
    numero: 42,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M4',
    submoduloId: '4.1',
    contexto: 'Acerca da Classificação Decimal Universal (CDU) e das linguagens documentárias, julgue o item.',
    item: 'Na CDU, a classe 4 permanece ativamente destinada à classificação geral das ciências sociais, enquanto a classe 3 abriga exclusivamente as obras de linguística e filologia pura.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Na estrutura contemporânea da CDU, a classe 4 está vaga (desocupada para futura expansão desde a década de 1960); as Ciências Sociais residem na classe 3; a Linguística e Filologia foram remanejadas para a classe 8 juntamente com a Literatura.',
    armadilhaBanca: 'Ignorar a vacância histórica da classe 4 na CDU e a alocação de Linguística na classe 8.',
    dificuldade: 'facil',
    fontePrimaria: 'Classificação Decimal Universal (CDU - Edição Padrão Internacional)',
    localizador: 'Tabela Principal (Estrutura Geral das Classes 0 a 9)',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Classificação e CDU)',
      verificado: false
    }
  },

  // --- M5/M6: Recuperação da Informação, Indexação e Tesauros (Itens 43 a 48) ---
  {
    id: 'reserva-60q-043',
    numero: 43,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M5',
    submoduloId: '5.1',
    contexto: 'No que concerne à análise de assunto, indexação documentária e vocabulários controlados, julgue o item.',
    item: 'Conforme F. W. Lancaster, o processo de indexação divide-se em duas etapas intelectuais distintas: a análise conceitual do documento (determinação do assunto) e a tradução dos conceitos na linguagem de indexação adotada.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a clássica e unânime doutrina de Lancaster: etapa 1 = análise de assunto (conceptual analysis); etapa 2 = conversão para a linguagem documentária (translation).',
    armadilhaBanca: 'Assertiva correta: divisão bifásica canônica da indexação.',
    dificuldade: 'facil',
    fontePrimaria: 'Indexação e Resumos: Teoria e Prática (F. W. Lancaster, 2ª ed.)',
    localizador: 'Capítulo 2 (Teoria da Indexação), p. 11-14',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Indexação Documentária)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-044',
    numero: 44,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M5',
    submoduloId: '5.1',
    contexto: 'No que concerne à análise de assunto, indexação documentária e vocabulários controlados, julgue o item.',
    item: 'A exaustividade na indexação refere-se ao grau de precisão com que um termo específico coincide com o conteúdo pontual do documento, enquanto a revocação mede a quantidade total de termos atribuídos sem importar o nível de detalhe.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Houve confusão terminológica: Exaustividade é a cobertura da amplitude de assuntos (número de temas indexados); Especificidade é a precisão do termo em relação ao conceito; Revocação e Precisão são métricas de recuperação na busca.',
    armadilhaBanca: 'Confusão entre conceitos de indexação (exaustividade e especificidade) e métricas de busca (revocação e precisão).',
    dificuldade: 'media',
    fontePrimaria: 'Indexação e Resumos: Teoria e Prática (F. W. Lancaster)',
    localizador: 'Capítulo 3 (Exaustividade e Especificidade), p. 25-28',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Indexação Documentária)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-045',
    numero: 45,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M6',
    submoduloId: '6.1',
    contexto: 'A respeito da construção e gestão de tesauros conforme a norma ISO 25964, julgue o item.',
    item: 'Em um tesauro documentário, a relação de equivalência é expressa pelos operadores USE (adote o termo preferido) e UP (usado para o termo não preferido), controlando a ocorrência de sinonímias e formas variantes.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a convenção da ISO 25964 e da norma brasileira (USE/UP): termos equivalentes (sinônimos, siglas, grafias alternativas) remetem ao descritor preferencial.',
    armadilhaBanca: 'Assertiva correta: sintaxe formal das relações de equivalência em tesauros.',
    dificuldade: 'facil',
    fontePrimaria: 'ISO 25964-1: Information and documentation - Thesauri and interoperability with other vocabularies',
    localizador: 'Clause 6 (Equivalence Relationships: USE and UF), p. 22-24',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Tesauros e ISO 25964)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-046',
    numero: 46,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M6',
    submoduloId: '6.1',
    contexto: 'A respeito da construção e gestão de tesauros conforme a norma ISO 25964, julgue o item.',
    item: 'A relação hierárquica partitiva em um tesauro expressa que o conceito subordinado é uma espécie ou tipo do conceito superior, obedecendo ao teste clássico de todo-parte "A é um tipo de B".',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. "A é um tipo de B" é o teste da relação genérico-específica (gênero-espécie). A relação partitiva é a relação todo-parte ("A é parte integrante de B", ex.: cérebro / sistema nervoso central).',
    armadilhaBanca: 'Confusão entre relação hierárquica gênero-espécie e relação hierárquica todo-parte (partitiva).',
    dificuldade: 'media',
    fontePrimaria: 'ISO 25964-1: Thesauri and interoperability with other vocabularies',
    localizador: 'Clause 7 (Hierarchical Relationships: Generic vs. Partitive), p. 26-29',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Tesauros e ISO 25964)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-047',
    numero: 47,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M6',
    submoduloId: '6.2',
    contexto: 'Quanto à avaliação de sistemas de recuperação da informação e operadores booleanos, julgue o item.',
    item: 'O emprego do operador booleano AND restringe a busca aos registros que contenham simultaneamente todos os termos especificados, tendendo a elevar a precisão e a diminuir a revocação da consulta.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. O operador AND opera pela interseção de conjuntos lógicos: reduz o universo de respostas a itens que atendam a ambos os critérios, aumentando precisão e reduzindo revocação.',
    armadilhaBanca: 'Assertiva correta: comportamento clássico dos operadores booleanos.',
    dificuldade: 'facil',
    fontePrimaria: 'Recuperação da Informação: Teoria e Aplicações (Chowdhury, 3ª ed.)',
    localizador: 'Capítulo 6 (Operadores de Busca Booleana e Métricas), p. 110-113',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Recuperação da Informação)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-048',
    numero: 48,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M6',
    submoduloId: '6.2',
    contexto: 'Quanto à avaliação de sistemas de recuperação da informação e operadores booleanos, julgue o item.',
    item: 'A revocação em um sistema de recuperação da informação corresponde à fração dos documentos relevantes recuperados em relação ao total de documentos recuperados na resposta à consulta.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Essa é a definição de Precisão (documentos relevantes recuperados / total de documentos recuperados). Revocação é a fração de documentos relevantes recuperados em relação ao total de documentos relevantes existentes no acervo.',
    armadilhaBanca: 'Inversão conceitual direta entre Precisão e Revocação.',
    dificuldade: 'facil',
    fontePrimaria: 'Modern Information Retrieval (Baeza-Yates & Ribeiro-Neto, 2nd ed.)',
    localizador: 'Chapter 4 (Evaluation of Retrieval Systems: Precision and Recall), p. 138-141',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Recuperação da Informação)',
      verificado: false
    }
  },

  // --- M7: Preservação Digital, RDC-Arq, OAIS e PREMIS (Itens 49 a 54) ---
  {
    id: 'reserva-60q-049',
    numero: 49,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.1',
    contexto: 'No âmbito do modelo de referência OAIS (Open Archival Information System - ISO 14721), julgue o item.',
    item: 'No modelo conceitual OAIS, a entidade funcional Armazenamento Arquivístico (Archival Storage) é responsável por gerenciar a custódia física dos pacotes AIP, provendo rotinas de verificação de integridade, substituição de mídias e recuperação contra desastres.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. Conforme a ISO 14721, a entidade Archival Storage custodia os pacotes AIP, executa monitoramento de fixidez (checksum) e lida com migração/cópia de suporte físico.',
    armadilhaBanca: 'Assertiva correta: atribuições canônicas da entidade Archival Storage no OAIS.',
    dificuldade: 'facil',
    fontePrimaria: 'ISO 14721:2012 - Space data and information transfer systems — Open archival information system (OAIS)',
    localizador: 'Section 4.1.1.3 (Archival Storage Functional Entity), p. 4-4',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Preservação Digital e OAIS)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-050',
    numero: 50,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.1',
    contexto: 'No âmbito do modelo de referência OAIS (Open Archival Information System - ISO 14721), julgue o item.',
    item: 'O pacote SIP (Submission Information Package) é a estrutura de dados gerada pelo repositório OAIS para transferência imediata ao usuário externo no momento em que uma consulta é realizada na página web do acervo.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. O pacote entregue ao usuário externo para consulta é o DIP (Dissemination Information Package). O SIP é o pacote de submissão entregue pelo Produtor ao repositório na fase de ingestão.',
    armadilhaBanca: 'Confusão conceitual entre o pacote de entrada (SIP) e o pacote de saída/disseminação (DIP).',
    dificuldade: 'facil',
    fontePrimaria: 'ISO 14721:2012 - Open archival information system (OAIS)',
    localizador: 'Section 2.2 (Information Package Concepts: SIP, AIP, DIP), p. 2-6',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Preservação Digital e OAIS)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-051',
    numero: 51,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.2',
    contexto: 'No tocante às diretrizes do CONARQ para Repositórios Digitais Confiáveis (RDC-Arq), julgue o item.',
    item: 'Conforme a Resolução nº 43/2015 do CONARQ, a presunção de autenticidade dos documentos digitais arquivísticos custodiados em um RDC-Arq apoia-se em evidências técnicas ininterruptas de proveniência documental e na preservação da cadeia ininterrupta de custódia.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a diretriz nuclear da Resolução 43/2015 do CONARQ e da teoria diplomática digital contemporânea (InterPARES).',
    armadilhaBanca: 'Assertiva correta: pilares da autenticidade e cadeia ininterrupta de custódia.',
    dificuldade: 'media',
    fontePrimaria: 'Resolução CONARQ nº 43/2015 (Diretrizes para Repositórios Arquivísticos Digitais Confiáveis - RDC-Arq)',
    localizador: 'Seção 2 (Princípios e Requisitos da Custódia Confiável), p. 3-5',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (RDC-Arq e CONARQ)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-052',
    numero: 52,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.2',
    contexto: 'No tocante às diretrizes do CONARQ para Repositórios Digitais Confiáveis (RDC-Arq), julgue o item.',
    item: 'A adoção de procedimentos de emulação de software na preservação digital dispensa a manutenção de metadados técnicos de ambiente e especificações de hardware, bastando converter todos os arquivos para cópias em papel.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. A emulação exige documentação minuciosa do ambiente tecnológico original (hardware, firmware, sistema operacional e dependências). Além disso, não há conversão para papel, pois a emulação busca recriar digitalmente o comportamento do software original.',
    armadilhaBanca: 'Distorção do conceito de emulação tecnológica atribuindo-lhe impressão em papel e ausência de metadados.',
    dificuldade: 'facil',
    fontePrimaria: 'Preservação Digital: Teoria e Prática (Miguel Ángel Márdero Arellano)',
    localizador: 'Capítulo 4 (Estratégias de Preservação Digital: Migração e Emulação), p. 82-85',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Estratégias de Preservação Digital)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-053',
    numero: 53,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.4',
    contexto: 'Acerca do Dicionário de Metadados de Preservação PREMIS 3.0, julgue o item.',
    item: 'No modelo de dados PREMIS 3.0, a entidade Evento (Event) documenta ações técnicas executadas sobre um objeto digital, registrando o identificador do evento, a tipologia da ação, a data e hora do processamento e os agentes responsáveis envolvidos.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a descrição estrita da entidade Evento no PREMIS: registra procedimentos técnicos (migração, validação de fixidez, normalização) e suas relações com Objeto e Agente.',
    armadilhaBanca: 'Assertiva correta: conformidade estrutural com o PREMIS 3.0.',
    dificuldade: 'media',
    fontePrimaria: 'PREMIS Data Dictionary for Preservation Metadata (Version 3.0, Library of Congress)',
    localizador: 'Section 2.3 (Event Entity Data Model), p. 115-118',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Metadados PREMIS)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-054',
    numero: 54,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M7',
    submoduloId: '7.4',
    contexto: 'Acerca do Dicionário de Metadados de Preservação PREMIS 3.0, julgue o item.',
    item: 'No padrão PREMIS, o cálculo de checksum por algoritmo SHA-256 é classificado como metadado de direitos autorais de exploração econômica, servindo para impedir que terceiros comercializem o acervo.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Checksum/hash é metadado técnico de integridade e fixidez (fixity) pertencente à entidade Objeto, atestando se o fluxo binário de bits sofreu alteração, sem relação com direitos autorais ou exploração comercial.',
    armadilhaBanca: 'Atribuição da função de fixidez técnica de bits à esfera jurídica de direitos autorais.',
    dificuldade: 'facil',
    fontePrimaria: 'PREMIS Data Dictionary for Preservation Metadata (Version 3.0)',
    localizador: 'Section 2.1 (Object Entity: fixity element), p. 45-47',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Metadados PREMIS)',
      verificado: false
    }
  },

  // --- M8/M9/M10: Fontes de Informação, Pesquisa Jurídica e Web Semântica (Itens 55 a 60) ---
  {
    id: 'reserva-60q-055',
    numero: 55,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M8',
    submoduloId: '8.1',
    contexto: 'A respeito das fontes de informação em ciência e tecnologia e da literatura cinzenta, julgue o item.',
    item: 'A literatura cinzenta (grey literature) caracteriza-se por materiais produzidos por órgãos governamentais, acadêmicos ou corporativos que não são controlados por canais comerciais tradicionais de publicação, tais como relatórios técnicos, atas e notas taquigráficas.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a definição canônica da Conferência Internacional de Luxemburgo/Nova York sobre Literatura Cinzenta, basilar na disciplina de fontes de informação (Campello).',
    armadilhaBanca: 'Assertiva correta: caracterização doutrinária da literatura cinzenta.',
    dificuldade: 'facil',
    fontePrimaria: 'Fontes de Informação para Pesquisadores e Profissionais (Beatriz Valadares Cordeiro Campello, 2ª ed.)',
    localizador: 'Capítulo 4 (Literatura Cinzenta e Relatórios Técnicos), p. 75-78',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Fontes de Informação)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-056',
    numero: 56,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M8',
    submoduloId: '8.1',
    contexto: 'A respeito das fontes de informação em ciência e tecnologia e da literatura cinzenta, julgue o item.',
    item: 'Em fontes de informação, as enciclopédias e os dicionários terminológicos são classificados como fontes primárias diretas, por conterem relatos originais de pesquisa empírica inédita elaborados por cientistas em laboratório.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Dicionários e enciclopédias são fontes terciárias (ou secundárias de referência rápida), compiladas a partir de fontes primárias e secundárias prévias para organizar o conhecimento consolidado.',
    armadilhaBanca: 'Classificação errônea de fontes terciárias de referência rápida como fontes primárias.',
    dificuldade: 'facil',
    fontePrimaria: 'Fontes de Informação para Pesquisadores e Profissionais (Beatriz Valadares Cordeiro Campello)',
    localizador: 'Capítulo 1 (Tipologia das Fontes de Informação), p. 18-21',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Fontes de Informação)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-057',
    numero: 57,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M9',
    submoduloId: '9.1',
    contexto: 'No tocante à informação jurídica, pesquisa legislativa e fontes do Direito brasileiro, julgue o item.',
    item: 'Na hierarquia das fontes jurídicas brasileiras, a jurisprudência é classificada como fonte primária do direito apenas quando consubstanciada em súmula vinculante aprovada pelo Supremo Tribunal Federal na forma do artigo 103-A da Constituição Federal.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. No sistema romano-germânico (civil law) brasileiro, a lei é a fonte primária por excelência; a jurisprudência é fonte secundária, com exceção da súmula vinculante do STF que detém força normativa vinculante obrigatória (art. 103-A, CF/88).',
    armadilhaBanca: 'Assertiva correta: nuance precisa entre jurisprudência persuasiva e súmula vinculante.',
    dificuldade: 'dificil',
    fontePrimaria: 'Informação Jurídica: Teoria e Prática (Edilenice Passos & Maria Ângela Aquino)',
    localizador: 'Capítulo 2 (Fontes do Direito e Normatividade), p. 42-45',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informação Jurídica)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-058',
    numero: 58,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M9',
    submoduloId: '9.1',
    contexto: 'No tocante à informação jurídica, pesquisa legislativa e fontes do Direito brasileiro, julgue o item.',
    item: 'O Diário Oficial da União (DOU) possui periodicidade semanal e publica na Seção 1 os atos de provimento de cargos públicos e concessão de aposentadorias de servidores civis.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. O Diário Oficial da União tem periodicidade diária (dias úteis); atos de pessoal (nomeações, exonerações, aposentadorias) são publicados na Seção 2; a Seção 1 destina-se a atos normativos de caráter geral (leis, decretos, resoluções).',
    armadilhaBanca: 'Inversão das seções do Diário Oficial da União e erro de periodicidade.',
    dificuldade: 'facil',
    fontePrimaria: 'Informação Jurídica: Teoria e Prática (Edilenice Passos)',
    localizador: 'Capítulo 4 (Publicações Oficiais e Estrutura do DOU), p. 88-91',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Informação Jurídica)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-059',
    numero: 59,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M10',
    submoduloId: '10.2',
    contexto: 'Acerca da iniciativa BIBFRAME (Bibliographic Framework Initiative) e de Linked Data em bibliotecas, julgue o item.',
    item: 'O BIBFRAME 2.0 substitui a estrutura baseada em registros bibliográficos monolíticos do MARC 21 por uma modelagem em grafos RDF, estruturada em três níveis principais de abstração: Work, Instance e Item.',
    gabarito: 'C',
    justificativa: 'Gabarito CERTO. É a arquitetura fundamental do BIBFRAME 2.0 da Library of Congress: transição de registros planos para Linked Data em RDF com as classes centrais Work, Instance e Item.',
    armadilhaBanca: 'Assertiva correta: modelo conceitual central do BIBFRAME 2.0.',
    dificuldade: 'media',
    fontePrimaria: 'Library of Congress BIBFRAME 2.0 Model Overview',
    localizador: 'Overview Document, Section: Core Classes (Work, Instance, Item), p. 2-4',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (BIBFRAME e Linked Data)',
      verificado: false
    }
  },
  {
    id: 'reserva-60q-060',
    numero: 60,
    bloco: 'P2_ESPECIFICOS',
    macroModuloId: 'M10',
    submoduloId: '10.2',
    contexto: 'Acerca da iniciativa BIBFRAME (Bibliographic Framework Initiative) e de Linked Data em bibliotecas, julgue o item.',
    item: 'No modelo conceitual da Web Semântica preconizado pelo W3C, uma tripla RDF básica é composta estritamente de quatro elementos estruturais obrigatórios denominados sujeito, predicado, objeto e hiperlink relacional de controle.',
    gabarito: 'E',
    justificativa: 'Gabarito ERRADO. Conforme a especificação W3C RDF, uma tripla RDF é composta exatamente de três elementos: Sujeito (Subject), Predicado (Predicate) e Objeto (Object). Não existe um quarto elemento denominado hiperlink relacional.',
    armadilhaBanca: 'Invenção de um quarto elemento para descaracterizar a definição formal de tripla RDF.',
    dificuldade: 'facil',
    fontePrimaria: 'W3C RDF 1.1 Concepts and Abstract Syntax (W3C Recommendation)',
    localizador: 'Section 1.2 (Triples and Graphs), W3C Recommendation',
    statusHomologacao: 'pendente_homologacao',
    homologado: false,
    fonteOriginal: {
      tipo: 'inedita',
      descricao: 'HNC — Reserva Simulado Oficial (Web Semântica e RDF)',
      verificado: false
    }
  }
];
