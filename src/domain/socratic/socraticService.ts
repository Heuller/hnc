import type { ItemCadernoErro } from '../cadernoErros';
import type {
  SessaoSocratica,
  MensagemSocratica,
  ParecerTecnicoBanca,
  FundamentacaoCanonica,
} from './types';

const STORAGE_KEY = 'hnc_socratic_sessions_v1';

// Mapeamento de autoridades canônicas para fallback offline
const AUTORIDADES_CANONICAS: Array<{
  palavrasChave: string[];
  autor: string;
  obra: string;
  citacao: string;
}> = [
  {
    palavrasChave: ['otlet', 'la fontaine', 'cdu', 'mundaneum', 'repertorio'],
    autor: 'Paul Otlet (1934)',
    obra: 'Traité de Documentation: Le Livre sur le Livre',
    citacao: 'O documento é todo suporte material suscetível de conter, conservar e transmitir o pensamento humano.',
  },
  {
    palavrasChave: ['briet', 'antilope', 'indicio', 'documento'],
    autor: 'Suzanne Briet (1951)',
    obra: "Qu'est-ce que la documentation?",
    citacao: 'O documento é todo indício concreto ou simbólico, conservado ou registrado, com a finalidade de representar, reconstituir ou provar um fenômeno.',
  },
  {
    palavrasChave: ['borko', 'ciencia da informacao', 'interdisciplinar'],
    autor: 'Harold Borko (1968)',
    obra: 'Information Science: What is it?',
    citacao: 'A Ciência da Informação é a disciplina que investiga as propriedades e o comportamento da informação, as forças que regem seu fluxo e os meios de processá-la para ótima acessibilidade.',
  },
  {
    palavrasChave: ['vergueiro', 'selecao', 'aquisicao', 'desbastamento', 'descarte', 'colecao'],
    autor: 'Waldomiro Vergueiro (1989)',
    obra: 'Desenvolvimento de Coleções',
    citacao: 'O desenvolvimento de coleções é um processo ininterrupto e cíclico, no qual o desbastamento antecede o descarte final e a seleção deve responder à comunidade atendida.',
  },
  {
    palavrasChave: ['lancaster', 'revocacao', 'precisao', 'indexacao', 'recuperacao'],
    autor: 'F. W. Lancaster (2004)',
    obra: 'Indexação e Resumos: Teoria e Prática',
    citacao: 'Revocação e precisão mantêm relação inversamente proporcional nos sistemas de busca; a especificidade dos termos maximiza a precisão em detrimento da revocação.',
  },
  {
    palavrasChave: ['ranganathan', 'leis', 'cinco leis', 'livro'],
    autor: 'S. R. Ranganathan (1931)',
    obra: 'The Five Laws of Library Science',
    citacao: '1. Livros são para uso; 2. A cada leitor seu livro; 3. A cada livro seu leitor; 4. Poupe o tempo do leitor; 5. A biblioteca é um organismo em crescimento.',
  },
  {
    palavrasChave: ['shera', 'egan', 'epistemologia social'],
    autor: 'Jesse H. Shera (1970)',
    obra: 'Sociological Foundations of Librarianship',
    citacao: 'A epistemologia social estuda a maneira pela qual uma sociedade toma consciência de seus processos intelectuais e organiza seus instrumentos de comunicação.',
  },
  {
    palavrasChave: ['rda', 'aacr2', 'ifla lrm', 'frbr', 'manifestacao', 'expressao', 'obra', 'item'],
    autor: 'IFLA / Oliver (2010/2017)',
    obra: 'IFLA Library Reference Model (LRM) & Introdução ao RDA',
    citacao: 'Na modelagem conceitual, Obra e Expressão residem no plano intelectual/abstrato, enquanto Manifestação e Item pertencem à personificação física e ao exemplar concreto.',
  },
  {
    palavrasChave: ['lai', '12.527', 'sigilo', 'ultrasecreta', 'secreta', 'reservada', 'transparencia'],
    autor: 'Brasil (2011)',
    obra: 'Lei de Acesso à Informação (Lei nº 12.527/2011)',
    citacao: 'A publicidade é o preceito geral e o sigilo a exceção; os prazos máximos de restrição são: ultrassecreta (25 anos), secreta (15 anos) e reservada (5 anos).',
  },
  {
    palavrasChave: ['cunha', 'cavalcanti', 'dicionario', 'terminologia'],
    autor: 'Murilo Bastos da Cunha & Cordélia R. Cavalcanti (2008)',
    obra: 'Dicionário de Biblioteconomia e Arquivologia',
    citacao: 'A precisão terminológica é indispensável para evitar ambiguidades entre conceitos correlatos nas rotinas biblioteconômicas e nas provas de concurso público.',
  },
];

function buscarAutoridade(texto: string): FundamentacaoCanonica {
  const t = texto.toLowerCase();
  for (const aut of AUTORIDADES_CANONICAS) {
    if (aut.palavrasChave.some((p) => t.includes(p))) {
      return {
        autor: aut.autor,
        obraOuNorma: aut.obra,
        citacao: aut.citacao,
      };
    }
  }

  return {
    autor: 'Doutrina Biblioteconômica Canônica & Cebraspe',
    obraOuNorma: 'Jurisprudência Temática de Concursos Federais (Câmara dos Deputados)',
    citacao: 'O Cebraspe adota o critério de estrita consonância com os manuais de referência consagrados na área de Biblioteconomia.',
  };
}

export function carregarSessoesDoStorage(): Record<string, SessaoSocratica> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function salvarSessaoNoStorage(sessao: SessaoSocratica): void {
  try {
    const sessoes = carregarSessoesDoStorage();
    sessoes[sessao.itemId] = sessao;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessoes));
  } catch (err) {
    console.error('Erro ao salvar sessão socrática:', err);
  }
}

/**
 * Gera o parecer técnico inicial offline heurístico caso a API esteja indisponível
 */
export function gerarParecerOffline(item: ItemCadernoErro): ParecerTecnicoBanca {
  const aut = buscarAutoridade(
    `${item.assertiva} ${item.justificativa} ${item.macroModuloTitulo} ${item.tituloContexto}`
  );

  const gabaritoExtenso = item.gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const escolhaExtensa = item.respostaUsuario === 'C' ? 'CERTO' : 'ERRADO';

  const tesePrincipal = `A banca examinadora ratifica o gabarito oficial como ${gabaritoExtenso}. O item foi formulado para aferir a capacidade do candidato de distinguir conceitos correlatos sem ceder a generalizações indevidas. Conforme ${aut.autor}, os preceitos teóricos estabelecem distinção categórica no ponto abordado na assertiva.`;

  const pontoCegoIdentificado = item.armadilhaBanca
    ? `Ponto cego analisado pela banca: ${item.armadilhaBanca}`
    : `O candidato assinalou ${escolhaExtensa} possivelmente por associar termos afins sem atentar para o escopo estrito da definição ou por desconsiderar que pequenas inversões conceituais alteram a validade lógica do item.`;

  const perguntaDesafio =
    item.gabarito === 'E'
      ? `Examinando friamente a assertiva: qual elemento terminológico ou restritivo contido na frase inviabiliza a sua aceitação como doutrina majoritária?`
      : `Por que a literatura especializada considera essa premissa indispensável para a prática biblioteconômica na Câmara dos Deputados?`;

  return {
    tesePrincipal,
    pontoCegoIdentificado,
    fundamentacao: aut,
    perguntaDesafio,
    sugestaoBaralho: {
      frente: `[Cebraspe - ${item.macroModuloTitulo}] ${item.assertiva.slice(0, 110)}... Gabarito?`,
      verso: `GABARITO: ${gabaritoExtenso}\n\nFundamento: ${item.justificativa}\n\nAutoridade: ${aut.autor} (${aut.obraOuNorma}).`,
    },
  };
}

/**
 * Inicia ou recupera uma sessão de discussão com a banca para o item
 */
export async function iniciarSessaoSocratica(item: ItemCadernoErro): Promise<SessaoSocratica> {
  const sessoes = carregarSessoesDoStorage();
  const existente = sessoes[item.id];

  if (existente && existente.mensagens.length > 0) {
    return existente;
  }

  // Tenta obter parecer dinâmico via backend Gemini
  let parecer: ParecerTecnicoBanca;

  try {
    const res = await fetch('/api/socratic-challenge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        acao: 'iniciar',
        assertiva: item.assertiva,
        gabarito: item.gabarito,
        respostaUsuario: item.respostaUsuario || (item.gabarito === 'C' ? 'E' : 'C'),
        justificativa: item.justificativa,
        armadilhaBanca: item.armadilhaBanca,
        tituloContexto: item.tituloContexto,
        macroModuloTitulo: item.macroModuloTitulo,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.parecer) {
        parecer = data.parecer;
      } else {
        parecer = gerarParecerOffline(item);
      }
    } else {
      parecer = gerarParecerOffline(item);
    }
  } catch {
    parecer = gerarParecerOffline(item);
  }

  const primeiraMensagemBanca: MensagemSocratica = {
    id: `msg-${Date.now()}-1`,
    remetente: 'banca',
    conteudo: `${parecer.tesePrincipal}\n\n📌 **Ponto Cego Identificado:** ${parecer.pontoCegoIdentificado}\n\n📖 **Fundamentação:** *${parecer.fundamentacao.autor}* em "${parecer.fundamentacao.obraOuNorma}":\n> "${parecer.fundamentacao.citacao}"\n\n🎯 **Desafio da Banca:** ${parecer.perguntaDesafio}`,
    dataHora: new Date().toISOString(),
  };

  const novaSessao: SessaoSocratica = {
    id: `soc-${item.id}`,
    itemId: item.id,
    assertiva: item.assertiva,
    gabarito: item.gabarito,
    respostaUsuario: item.respostaUsuario || (item.gabarito === 'C' ? 'E' : 'C'),
    macroModuloTitulo: item.macroModuloTitulo,
    parecerInicial: parecer,
    mensagens: [primeiraMensagemBanca],
    superado: false,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };

  salvarSessaoNoStorage(novaSessao);
  return novaSessao;
}

/**
 * Envia um argumento ou recurso do candidato e obtém a tréplica socrática da banca
 */
export async function enviarArgumentoBanca(
  sessao: SessaoSocratica,
  argumentoUsuario: string
): Promise<SessaoSocratica> {
  const agora = new Date().toISOString();

  const msgCandidato: MensagemSocratica = {
    id: `msg-${Date.now()}-cand`,
    remetente: 'candidato',
    conteudo: argumentoUsuario.trim(),
    dataHora: agora,
  };

  const mensagensAtualizadas = [...sessao.mensagens, msgCandidato];

  // Chamada à API
  let respostaTextoBanca = '';

  try {
    const res = await fetch('/api/socratic-challenge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        acao: 'replicar',
        assertiva: sessao.assertiva,
        gabarito: sessao.gabarito,
        respostaUsuario: sessao.respostaUsuario,
        macroModuloTitulo: sessao.macroModuloTitulo,
        parecerInicial: sessao.parecerInicial,
        historicoMensagens: mensagensAtualizadas.map((m) => ({
          role: m.remetente === 'banca' ? 'model' : 'user',
          parts: [{ text: m.conteudo }],
        })),
        argumentoCandidato: argumentoUsuario,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      respostaTextoBanca = data.respostaBanca || '';
    }
  } catch {
    // Silently fall back to offline response
  }

  if (!respostaTextoBanca) {
    // Resposta heurística offline da banca
    const gabaritoExtenso = sessao.gabarito === 'C' ? 'CERTO' : 'ERRADO';
    respostaTextoBanca = `**Despacho da Banca Examinadora:**\n\nO argumento apresentado pelo candidato foi detidamente examinado, contudo o pleito **NÃO PROSPERA**. Na sistemática do Cebraspe, a assertiva deve ser interpretada à luz da doutrina hegemônica e do contexto estrito do edital.\n\nEmbora o candidato traga ponderações pontuais, a regra geral consagrada (${gabaritoExtenso}) permanece intangível. Lembre-se: em itens do Cebraspe, exceções raras ou interpretações extensivas que contradizem a literatura canônica configuram distratores propositais.\n\nRecomenda-se registrar este padrão mental para não repetir a mesma linha de raciocínio no dia da prova!`;
  }

  const msgBanca: MensagemSocratica = {
    id: `msg-${Date.now()}-banca`,
    remetente: 'banca',
    conteudo: respostaTextoBanca,
    dataHora: new Date().toISOString(),
  };

  const sessaoFinal: SessaoSocratica = {
    ...sessao,
    mensagens: [...mensagensAtualizadas, msgBanca],
    atualizadoEm: new Date().toISOString(),
  };

  salvarSessaoNoStorage(sessaoFinal);
  return sessaoFinal;
}

/**
 * Marca o item como superado na sessão
 */
export function marcarSessaoSuperada(itemId: string, superado: boolean): SessaoSocratica | null {
  const sessoes = carregarSessoesDoStorage();
  const s = sessoes[itemId];
  if (!s) return null;

  s.superado = superado;
  s.atualizadoEm = new Date().toISOString();
  salvarSessaoNoStorage(s);
  return s;
}
