export interface TermoGlossarioTecnico {
  termo: string;
  slug: string;
  nomeCompleto?: string;
  definicaoCurta: string;
  definicaoCompleta: string;
  exemploBiblioteca: string;
  sinonimos: string[];
  moduloOrigemId: string; // Submódulo canônico de apresentação
}

export const GLOSSARIO_TECNICO: TermoGlossarioTecnico[] = [
  {
    termo: 'SQL',
    slug: 'sql',
    nomeCompleto: 'Structured Query Language (Linguagem Estruturada de Consulta)',
    definicaoCurta: 'Linguagem declarativa padrão para criar, consultar e manipular tabelas em bancos de dados relacionais.',
    definicaoCompleta: 'Criada nos laboratórios da IBM na década de 1970 com base na álgebra relacional de Codd, a SQL permite formular consultas declarativas estruturadas em cláusulas (SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY) sem que o programador precise definir os algoritmos de busca física nos discos.',
    exemploBiblioteca: 'Executar consulta no banco de dados Koha/Pergamum para listar todas as obras parlamentares catalogadas no século XIX que possuem exemplares disponíveis para empréstimo.',
    sinonimos: ['SQL', 'Structured Query Language'],
    moduloOrigemId: 'sub-6-6',
  },
  {
    termo: 'API',
    slug: 'api',
    nomeCompleto: 'Application Programming Interface (Interface de Programação de Aplicações)',
    definicaoCurta: 'Conjunto de regras e especificações que viabiliza a comunicação direta e padronizada entre dois sistemas distintos.',
    definicaoCompleta: 'Uma API funciona como um intermediário contratual: um sistema cliente envia uma requisição estruturada e o servidor responde com dados padronizados (geralmente JSON ou XML), sem expor os mecanismos internos ou a infraestrutura do banco de dados.',
    exemploBiblioteca: 'O portal da Câmara expõe a API de Dados Abertos, permitindo que a biblioteca integre automaticamente proposições legislativas ao catálogo online.',
    sinonimos: ['API', 'APIs'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'REST',
    slug: 'rest',
    nomeCompleto: 'Representational State Transfer (Transferência de Estado Representacional)',
    definicaoCurta: 'Estilo arquitetural para sistemas web baseado nos verbos HTTP (GET, POST, PUT, DELETE) e sem estado (stateless).',
    definicaoCompleta: 'Proposto por Roy Fielding em sua tese doutoral (2000), o REST estipula princípios como cliente-servidor desacoplado, ausência de estado na sessão do servidor (statelessness), suporte a cache e interface uniforme baseada em recursos identificados por URIs.',
    exemploBiblioteca: 'Fazer uma requisição HTTP GET para `https://dadosabertos.camara.leg.br/api/v2/deputados` para recuperar a lista de parlamentares em formato JSON.',
    sinonimos: ['REST', 'RESTful', 'arquitetura REST'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'JSON',
    slug: 'json',
    nomeCompleto: 'JavaScript Object Notation',
    definicaoCurta: 'Formato leve e textual de troca de dados, estruturado em pares de chave e valor e coleções ordenadas (listas).',
    definicaoCompleta: 'Derivado do subconjunto da linguagem JavaScript, tornou-se o padrão hegemônico na web por ser independente de linguagem, de leitura simples por seres humanos e de processamento computacional extremamente veloz quando comparado a formatos densos como XML.',
    exemploBiblioteca: 'Registrar a resposta da API de metadados de uma publicação legislativa em um arquivo `.json` contendo chaves como `"titulo"`, `"autor"` e `"dataPublicacao"`.',
    sinonimos: ['JSON'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'XML',
    slug: 'xml',
    nomeCompleto: 'Extensible Markup Language (Linguagem Extensível de Marcação)',
    definicaoCurta: 'Linguagem de marcação hierárquica baseada em tags personalizáveis para transporte e representação estruturada de documentos.',
    definicaoCompleta: 'Recomendação do W3C surgida em 1998 para simplificar o SGML, o XML permite que os usuários criem suas próprias tags semânticas delimitadas por `<` e `>`, suportando validação estrita de estrutura por meio de esquemas DTD ou XSD.',
    exemploBiblioteca: 'Exportar registros no padrão MARCXML ou no protocolo OAI-PMH para comunicação entre repositórios DSpace de bibliotecas digitais.',
    sinonimos: ['XML', 'MARCXML'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'RDF',
    slug: 'rdf',
    nomeCompleto: 'Resource Description Framework (Estrutura de Descrição de Recursos)',
    definicaoCurta: 'Modelo conceitual do W3C para representar informações e dados interconectados na Web Semântica através de triplas.',
    definicaoCompleta: 'O RDF estabelece que qualquer declaração sobre o mundo pode ser decomposta em uma tripla fundamental composta por: Sujeito (o recurso), Predicado (a propriedade ou relação) e Objeto (o valor ou outro recurso ligado), onde cada elemento é idealmente referenciado por uma URI.',
    exemploBiblioteca: 'Declarar na Web Semântica que a proposição `[PL-1234]` (sujeito) `temRelator` (predicado) `[Deputado-XYZ]` (objeto), permitindo consultas ontológicas globais.',
    sinonimos: ['RDF', 'triplas RDF', 'modelo RDF'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'regex',
    slug: 'regex',
    nomeCompleto: 'Expressões Regulares (Regular Expressions)',
    definicaoCurta: 'Padrão formal sintático utilizado para localizar, validar ou extrair cadeias de caracteres específicas em textos.',
    definicaoCompleta: 'Baseadas na teoria das linguagens formais de Stephen Kleene, expressões regulares utilizam metacaracteres (como `^`, `$`, `\\d`, `+`, `*`, `[ ]`) para definir autômatos finitos determinísticos de casamento de padrões textuais.',
    exemploBiblioteca: 'Validar se um identificador inserido pelo catalogador atende ao formato canônico de ISBN-13 (`^\\d{3}-\\d-\\d{2}-\\d{6}-\\d$`) ou extrair anos de publicação de notas de rodapé.',
    sinonimos: ['regex', 'expressão regular', 'expressões regulares', 'RegEx'],
    moduloOrigemId: 'sub-6-6',
  },
  {
    termo: 'hash',
    slug: 'hash',
    nomeCompleto: 'Função de Dispersão Criptográfica (Cryptographic Hash Function)',
    definicaoCurta: 'Algoritmo matemático unidirecional que transforma uma entrada de qualquer tamanho em uma sequência de tamanho fixo.',
    definicaoCompleta: 'Uma função hash criptográfica (ex.: SHA-256) possui efeito avalanche (a menor alteração na entrada gera um hash completamente diferente) e resistência a colisões e pré-imagem, sendo matematicamente inviável reconstruir o conteúdo original a partir do resumo.',
    exemploBiblioteca: 'Calcular o hash SHA-256 de um PDF digitalizado de ata histórica para registrar no pacote PREMIS e garantir a fixidez (fixity) contra corrupção de bits ao longo das décadas.',
    sinonimos: ['hash', 'resumo criptográfico', 'função hash', 'checksum'],
    moduloOrigemId: 'sub-14-2',
  },
  {
    termo: 'ETL',
    slug: 'etl',
    nomeCompleto: 'Extract, Transform, Load (Extração, Transformação e Carga)',
    definicaoCurta: 'Processo de engenharia de dados que extrai dados de fontes heterogêneas, transforma-os e os carrega em um repositório central.',
    definicaoCompleta: 'Tríade clássica do pipeline de Business Intelligence e Data Warehousing: extrai registros brutos de sistemas operacionais, aplica filtros de limpeza, conversão de tipos e deduplicação, e carrega os dados refinados em um Data Warehouse ou Data Lakehouse.',
    exemploBiblioteca: 'Extrair relatórios de circulação do sistema legado de empréstimos, padronizar formatos de data e carregar no banco analítico da Câmara para geração de painéis no Power BI.',
    sinonimos: ['ETL', 'pipeline de ETL', 'extração, transformação e carga'],
    moduloOrigemId: 'sub-14-4',
  },
  {
    termo: 'LLM',
    slug: 'llm',
    nomeCompleto: 'Large Language Model (Grande Modelo de Linguagem)',
    definicaoCurta: 'Modelo de inteligência artificial generativa treinado em grandes volumes de texto capaz de processar e produzir linguagem natural.',
    definicaoCompleta: 'Fundamentados na arquitetura neural Transformer e mecanismos de autoatenção (Self-Attention), os LLMs predizem probabilidades de próximos tokens condicionadas ao contexto anterior, viabilizando geração textual, tradução, síntese documental e raciocínio em tarefas abertas.',
    exemploBiblioteca: 'Utilizar um modelo de linguagem especializado para sumarizar notas taquigráficas de audiências públicas de 4 horas em pontos-chave temáticos.',
    sinonimos: ['LLM', 'LLMs', 'grandes modelos de linguagem', 'Large Language Models'],
    moduloOrigemId: 'sub-14-3',
  },
  {
    termo: 'RAG',
    slug: 'rag',
    nomeCompleto: 'Retrieval-Augmented Generation (Geração Aumentada por Recuperação)',
    definicaoCurta: 'Técnica de IA que combina recuperação de documentos em uma base confiável com a geração textual de um modelo de linguagem.',
    definicaoCompleta: 'O RAG busca trechos relevantes por similaridade vetorial em um banco de conhecimento (vetorial ou híbrido) e os injeta como contexto factual no prompt do LLM, mitigando alucinações e garantindo citações verificáveis sem necessidade de retreinar o modelo.',
    exemploBiblioteca: 'Um assistente de consulta parlamentar que busca o texto integral de uma lei nos repositórios da Câmara antes de gerar a resposta ao pesquisador, citando os artigos exatos.',
    sinonimos: ['RAG', 'Retrieval-Augmented Generation'],
    moduloOrigemId: 'sub-14-3',
  },
  {
    termo: 'OCR',
    slug: 'ocr',
    nomeCompleto: 'Optical Character Recognition (Reconhecimento Óptico de Caracteres)',
    definicaoCurta: 'Tecnologia que converte imagens de textos impressos ou datilografados em texto legível e pesquisável por computadores.',
    definicaoCompleta: 'O OCR processa arquivos rasterizados (como digitalizações em TIFF ou PDF de imagem), identificando glifos, fontes e linhas para gerar camadas textuais pesquisáveis e metadados estruturados (formato ALTO/XML).',
    exemploBiblioteca: 'Processar os tomos impressos dos Anais da Câmara do Império (1826-1889) para disponibilizar busca textual por palavras-chave na biblioteca digital.',
    sinonimos: ['OCR', 'reconhecimento óptico de caracteres'],
    moduloOrigemId: 'sub-6-7',
  },
  {
    termo: 'HTR',
    slug: 'htr',
    nomeCompleto: 'Handwritten Text Recognition (Reconhecimento de Texto Manuscrito)',
    definicaoCurta: 'Tecnologia avançada baseada em aprendizado profundo para transcrição automática de manuscritos e documentos paleográficos.',
    definicaoCompleta: 'Ao contrário do OCR tradicional, otimizado para fontes tipográficas padronizadas, o HTR emprega redes neurais convolucionais e recorrentes treinadas em amostras de grafia humana (duas ou mais mãos) para decodificar caligrafias históricas complexas.',
    exemploBiblioteca: 'Transcrever automaticamente cartas manuscritas de parlamentares da Constituinte de 1823 e projetos de lei originais preservados no Arquivo Histórico da Câmara.',
    sinonimos: ['HTR', 'reconhecimento de texto manuscrito', 'Handwritten Text Recognition'],
    moduloOrigemId: 'sub-6-7',
  },
  {
    termo: 'MER',
    slug: 'mer',
    nomeCompleto: 'Modelo Entidade-Relacionamento (Entity-Relationship Model)',
    definicaoCurta: 'Modelo conceitual gráfico para representar entidades, seus atributos e os relacionamentos do mundo real em um banco de dados.',
    definicaoCompleta: 'Introduzido por Peter Chen em 1976, o MER utiliza retângulos para representar entidades, elipses para atributos e losangos para relacionamentos, definindo cardinalidades (1:1, 1:N, N:N) antes da conversão para esquemas lógicos relacionais de tabelas.',
    exemploBiblioteca: 'Mapear no diagrama a entidade `OBRA` associada por um relacionamento `POSSUI_EXEMPLAR` (1:N) à entidade `EXEMPLAR`, e associada a `AUTOR` (N:N).',
    sinonimos: ['MER', 'modelo entidade-relacionamento', 'DER', 'diagrama entidade-relacionamento'],
    moduloOrigemId: 'sub-6-5',
  },
  {
    termo: 'CRUD',
    slug: 'crud',
    nomeCompleto: 'Create, Read, Update, Delete (Criar, Ler, Atualizar e Deletar)',
    definicaoCurta: 'Quatro operações básicas de persistência de dados executadas sobre um banco ou sistema de informação.',
    definicaoCompleta: 'Correspondem no protocolo HTTP aos verbos POST (Create), GET (Read), PUT/PATCH (Update) e DELETE (Delete), e na linguagem SQL aos comandos INSERT, SELECT, UPDATE e DELETE.',
    exemploBiblioteca: 'Cadastrar um novo exemplar no acervo (Create), consultar sua disponibilidade (Read), alterar seu status para "em restauro" (Update) e dar baixa por descarte (Delete).',
    sinonimos: ['CRUD', 'operações CRUD'],
    moduloOrigemId: 'sub-6-6',
  },
  {
    termo: 'URI',
    slug: 'uri',
    nomeCompleto: 'Uniform Resource Identifier (Identificador Uniforme de Recurso)',
    definicaoCurta: 'Cadeia de caracteres compacta que identifica unicamente um recurso abstrato ou físico na internet.',
    definicaoCompleta: 'Normatizada pela RFC 3986, a URI é o superconjunto que engloba tanto URLs (endereços localizadores como `https://...`) quanto URNs (nomes persistentes de localização independente).',
    exemploBiblioteca: 'A identificação unívoca de uma lei ou norma do portal LexML Brasil através de uma URI canônica do tipo `urn:lex:br:federal:lei:2020-01-08;13979`.',
    sinonimos: ['URI', 'URIs', 'identificador uniforme de recurso'],
    moduloOrigemId: 'sub-6-1',
  },
  {
    termo: 'URN',
    slug: 'urn',
    nomeCompleto: 'Uniform Resource Name (Nome Uniforme de Recurso)',
    definicaoCurta: 'Identificador persistente e independente de localização física que nomeia um recurso no espaço de nomes universal.',
    definicaoCompleta: 'Diferente de uma URL, que informa *onde* o arquivo está hospedado no momento e pode sofrer com links quebrados (link rot), a URN identifica *o que* é o objeto, preservando sua referência mesmo que o servidor mude.',
    exemploBiblioteca: 'Utilização do padrão URN LexML para atribuir referências legislativas definitivas a decretos e medidas provisórias nos acervos digitais.',
    sinonimos: ['URN', 'URNs', 'Uniform Resource Name'],
    moduloOrigemId: 'sub-6-1',
  },
  {
    termo: 'OAI-PMH',
    slug: 'oai-pmh',
    nomeCompleto: 'Open Archives Initiative Protocol for Metadata Harvesting',
    definicaoCurta: 'Protocolo de rede baseado em HTTP/XML para coleta automatizada de metadados entre repositórios digitais abertos.',
    definicaoCompleta: 'Define a arquitetura entre Provedores de Dados (repositórios que expõem metadados em XML) e Provedores de Serviços (colhedores que indexam metadados). Suporta colheita seletiva por carimbo de data/hora (datestamp) e por coleções temáticas (sets).',
    exemploBiblioteca: 'O catálogo da Biblioteca Digital da Câmara colhe metadados via OAI-PMH dos repositórios do Senado e do TCU para formar um portal único de informação legislativa.',
    sinonimos: ['OAI-PMH', 'OAI', 'protocolo OAI-PMH'],
    moduloOrigemId: 'sub-6-2',
  },
  {
    termo: 'SPARQL',
    slug: 'sparql',
    nomeCompleto: 'SPARQL Protocol and RDF Query Language',
    definicaoCurta: 'Linguagem de consulta semântica padrão do W3C para consultar e manipular dados em bases RDF (triplestores).',
    definicaoCompleta: 'Equivalente semântico da SQL para a Web de Dados Interconectados (Linked Data), o SPARQL permite expressar casamentos de padrões de triplas em grafos de conhecimento, suportando filtros lógicos, ordenações e agregações complexas.',
    exemploBiblioteca: 'Realizar consulta SPARQL no endpoint de dados abertos da Câmara para recuperar todos os discursos parlamentares que mencionem tratados internacionais ratificados pelo Brasil.',
    sinonimos: ['SPARQL', 'linguagem SPARQL', 'consulta SPARQL'],
    moduloOrigemId: 'sub-6-2',
  },
];

/**
 * Busca rápida no glossário por termo ou sinônimo
 */
export function buscarTermoGlossario(termo: string): TermoGlossarioTecnico | undefined {
  const normalizado = termo.trim().toLowerCase();
  return GLOSSARIO_TECNICO.find(
    (t) =>
      t.termo.toLowerCase() === normalizado ||
      t.slug.toLowerCase() === normalizado ||
      t.sinonimos.some((s) => s.toLowerCase() === normalizado)
  );
}
