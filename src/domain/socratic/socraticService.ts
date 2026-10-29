import type { ItemCadernoErro } from '../cadernoErros';
import { useAuthStore } from '../../store/useAuthStore';
import type {
  SessaoSocratica,
  MensagemSocratica,
  ParecerTecnicoBanca,
} from './types';

const STORAGE_KEY = 'hnc_socratic_sessions_v1';

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
  const aut = { autor: 'HNC — comentário cadastrado', obraOuNorma: 'Referência do item de origem; conferir documento e localizador', citacao: item.justificativa };
  const gabaritoExtenso = item.gabarito === 'C' ? 'CERTO' : 'ERRADO';
  const tesePrincipal = `O gabarito cadastrado é ${gabaritoExtenso}. Esta orientação offline não valida o gabarito nem julga uma contestação.`;
  const pontoCegoIdentificado = item.armadilhaBanca || 'A causa do erro não pode ser inferida da resposta. Compare regra, condições e exceções com a fonte.';
  const perguntaDesafio = 'Qual trecho da fonte sustenta ou contradiz o julgamento? Identifique a regra, sua condição de aplicação e eventual exceção.';

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
    const session = useAuthStore.getState().session;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }

    const res = await fetch('/api/socratic-challenge', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        acao: 'iniciar',
        assertiva: item.assertiva,
        gabarito: item.gabarito,
        escolhaCandidato: item.respostaUsuario || (item.gabarito === 'C' ? 'E' : 'C'),
        justificativa: item.justificativa,
        armadilhaBanca: item.armadilhaBanca,
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
    conteudo: `${parecer.tesePrincipal}\n\n📌 **Ponto Cego Identificado:** ${parecer.pontoCegoIdentificado}\n\n📖 **Comentário para conferência (não é transcrição documental):** *${parecer.fundamentacao.autor}* em "${parecer.fundamentacao.obraOuNorma}":\n${parecer.fundamentacao.citacao}\n\n🎯 **Desafio da Banca:** ${parecer.perguntaDesafio}`,
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
    modo: 'offline',
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
    const session = useAuthStore.getState().session;
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }

    const res = await fetch('/api/socratic-challenge', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        acao: 'responder',
        assertiva: sessao.assertiva,
        gabarito: sessao.gabarito,
        escolhaCandidato: sessao.respostaUsuario,
        macroModuloTitulo: sessao.macroModuloTitulo,
        justificativa: sessao.parecerInicial?.fundamentacao?.citacao,
        armadilhaBanca: sessao.parecerInicial?.pontoCegoIdentificado,
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
    respostaTextoBanca = '**Discussão offline — contestação não julgada**\n\nO serviço de análise está indisponível. Seu argumento foi registrado nesta sessão, mas não há base para deferir ou indeferir o recurso automaticamente. Compare a assertiva com o trecho exato da fonte e o edital; se houver conflito, evite consolidar o gabarito até a conferência editorial.\n\nQual premissa da justificativa você contesta? Que trecho verificável sustenta a sua leitura?';
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
