import type { TemaDiscursiva, AvaliacaoCebraspe } from './types';
import { useAuthStore } from '../../store/useAuthStore';

const STORAGE_AVALIACOES_KEY = 'hnc_discursiva_avaliacoes_v1';

export class DiscursivaIndisponivelError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'DiscursivaIndisponivelError';
    this.status = status;
  }
}

function avaliacaoValida(d: unknown): d is AvaliacaoCebraspe {
  const a = d as Partial<AvaliacaoCebraspe> | null;
  return (
    !!a &&
    typeof a.notaFinal === 'number' &&
    typeof a.notaConteudo === 'number' &&
    Array.isArray(a.criterios) &&
    Array.isArray(a.errosGramaticais) &&
    Array.isArray(a.pontosFortes) &&
    Array.isArray(a.lacunasIdentificadas) &&
    (a.situacao === 'HABILITADO' || a.situacao === 'ELIMINADO')
  );
}

export class DiscursivaService {
  /**
   * Salva avaliação no histórico local do navegador
   */
  public salvarAvaliacaoLocal(avaliacao: AvaliacaoCebraspe): void {
    try {
      const historico = this.listarAvaliacoesLocais();
      const filtrado = historico.filter((a) => a.id !== avaliacao.id);
      localStorage.setItem(STORAGE_AVALIACOES_KEY, JSON.stringify([avaliacao, ...filtrado].slice(0, 50)));
    } catch {
      // Ignora limites de quota
    }
  }

  /**
   * Recupera todas as avaliações salvas localmente
   */
  public listarAvaliacoesLocais(): AvaliacaoCebraspe[] {
    try {
      const salvo = localStorage.getItem(STORAGE_AVALIACOES_KEY);
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  }

  /**
   * Solicita uma estimativa de correção por IA (fórmulas dos itens 9.8.5.1 e 9.8.5.2 do Edital nº 1/2026, aplicadas no servidor). Nunca fabrica nota: se o servidor falhar, lança DiscursivaIndisponivelError e nada é salvo
   */
  public async avaliarRedacao(
    tema: TemaDiscursiva,
    textoCandidato: string,
    linhasEstimadas: number
  ): Promise<AvaliacaoCebraspe> {
    const textoLimpo = textoCandidato.trim();
    const totalLinhas = Math.max(1, linhasEstimadas || Math.ceil(textoLimpo.length / 70));
    
    let response: Response;
    try {
      const session = useAuthStore.getState().session;
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }

      response = await fetch('/api/evaluate-discursiva', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          titulo: tema.titulo,
          tipo: tema.tipo,
          enunciado: tema.enunciado,
          padraoResposta: tema.padraoRespostaPreliminar,
          criteriosPontuacao: tema.criteriosPontuacao.map((c) => ({
            item: c.item,
            pontuacaoMaxima: c.pontuacaoMaxima,
            descricaoEsperada: c.descricaoEsperada,
          })),
          textoCandidato: textoLimpo,
          linhasEstimadas: totalLinhas,
        }),
      });
    } catch {
      throw new DiscursivaIndisponivelError(
        'Sem conexão com o servidor de correção. Sua resposta não foi avaliada. Use a autocorreção por rubrica.'
      );
    }

    if (!response.ok) {
      let mensagem = 'A correção por IA não está disponível agora. Use a autocorreção por rubrica.';
      try {
        const corpo = await response.json();
        if (typeof corpo?.error === 'string') mensagem = corpo.error;
      } catch {
        // mantém a mensagem padrão
      }
      throw new DiscursivaIndisponivelError(mensagem, response.status);
    }

    const data = await response.json();
    if (!avaliacaoValida(data)) {
      throw new DiscursivaIndisponivelError('A resposta do servidor de correção veio incompleta. Nenhuma nota foi registrada.');
    }
    this.salvarAvaliacaoLocal(data);
    return data;
  }
}

export const discursivaService = new DiscursivaService();
