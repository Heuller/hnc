import type { TemaDiscursiva, AvaliacaoCebraspe } from './types';
import { validarAvaliacaoDiscursiva } from './validarAvaliacao';
import { useAuthStore } from '../../store/useAuthStore';

const STORAGE_AVALIACOES_KEY = 'hnc_discursiva_avaliacoes_v1';

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
   * Solicita uma avaliação formativa segundo a rubrica conforme Itens 9.8.4 e 9.8.5 do Edital nº 1/2026
   */
  public async avaliarRedacao(
    tema: TemaDiscursiva,
    textoCandidato: string,
    linhasEstimadas: number
  ): Promise<AvaliacaoCebraspe> {
    const textoLimpo = textoCandidato.trim();
    const totalLinhas = Math.max(1, linhasEstimadas || Math.ceil(textoLimpo.length / 70));
    
    // Regra Oficial do Edital 1/2026 (Item 9):
    // Questão (até 20 linhas): máx 15.00 pontos | Desconto: NQ = NC - 3 × (NE / TL) (item 9.8.4)
    // Peça técnica (até 50 linhas): máx 30.00 pontos | Desconto: NPT = NC - 6 × (NE / TL) (item 9.8.5)
    const isPeca = tema.tipo === 'peca_50';
    const notaMaximaGeral = isPeca ? 30.0 : 15.0;
    const fatorDesconto = isPeca ? 6 : 3;

    try {
      const session = useAuthStore.getState().session;
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
      }

      const response = await fetch('/api/evaluate-discursiva', {
        method: 'POST',
        signal: AbortSignal.timeout(25000),
        headers,
        body: JSON.stringify({
          temaId: tema.id,
          titulo: tema.titulo,
          tipo: tema.tipo,
          enunciado: tema.enunciado,
          limiteLinhas: tema.limiteLinhas,
          padraoResposta: tema.padraoRespostaPreliminar,
          criteriosPontuacao: tema.criteriosPontuacao,
          textoCandidato: textoLimpo,
          linhasEstimadas: totalLinhas,
          fatorDesconto,
          notaMaxima: notaMaximaGeral,
        }),
      });

      if (!response.ok) {
        throw new Error('A avaliação automática não está disponível agora. Seu texto foi mantido; use a rubrica de autoavaliação ou tente novamente.');
      }
      const avaliacao = validarAvaliacaoDiscursiva(await response.json(), tema, textoLimpo);
      this.salvarAvaliacaoLocal(avaliacao);
      return avaliacao;
    } catch (error) {
      if (error instanceof Error && /Seu texto foi mantido/.test(error.message)) throw error;
      throw new Error('Não foi possível obter uma correção válida. Seu texto foi mantido; use a rubrica de autoavaliação ou tente novamente.');
    }
  }
}

export const discursivaService = new DiscursivaService();
