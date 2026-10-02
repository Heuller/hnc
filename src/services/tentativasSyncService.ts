import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  type TentativaRegistro,
  criarTentativaRegistro,
} from '../domain/tentativas';
import { COURSE_REGISTRY } from '../content/registry';

const HNC_TENTATIVAS_KEY = 'hnc_jornada_tentativas_v3';
const HNC_OFFLINE_QUEUE_KEY = 'hnc_jornada_offline_queue_v3';
const HNC_MIGRACAO_KEY = 'hnc_jornada_migracao_v2_to_v3';

export const tentativasSyncService = {
  /**
   * Carrega todas as tentativas armazenadas localmente no navegador (PWA / Offline)
   */
  carregarTentativasLocais(): TentativaRegistro[] {
    try {
      const raw = localStorage.getItem(HNC_TENTATIVAS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('[TentativasStorage] Falha ao carregar tentativas locais:', e);
      return [];
    }
  },

  /**
   * Salva a lista de tentativas localmente
   */
  salvarTentativasLocais(tentativas: TentativaRegistro[]): void {
    try {
      localStorage.setItem(HNC_TENTATIVAS_KEY, JSON.stringify(tentativas));
    } catch (e) {
      console.error('[TentativasStorage] Falha ao salvar tentativas locais:', e);
    }
  },

  /**
   * Carrega a fila offline de tentativas pendentes de envio
   */
  carregarFilaOffline(): TentativaRegistro[] {
    try {
      const raw = localStorage.getItem(HNC_OFFLINE_QUEUE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Salva a fila offline
   */
  salvarFilaOffline(fila: TentativaRegistro[]): void {
    try {
      localStorage.setItem(HNC_OFFLINE_QUEUE_KEY, JSON.stringify(fila));
    } catch (e) {
      console.error('[TentativasOffline] Falha ao salvar fila offline:', e);
    }
  },

  /**
   * Registra uma nova tentativa imutável.
   * Adiciona localmente e tenta envio ao Supabase; se offline, enfileira (Regra D.6).
   */
  async registrarTentativa(
    tentativa: TentativaRegistro,
    userId?: string
  ): Promise<{ success: boolean; syncedWithServer: boolean }> {
    // 1. Salva localmente de forma append-only
    const locais = this.carregarTentativasLocais();
    const jaExiste = locais.some((t) => t.id === tentativa.id);
    if (!jaExiste) {
      locais.push(tentativa);
      this.salvarTentativasLocais(locais);
    }

    // 2. Se não houver backend configurado ou usuário não logado, marca apenas local
    if (!isSupabaseConfigured || !userId) {
      return { success: true, syncedWithServer: false };
    }

    // 3. Tenta persistência imediata no servidor
    try {
      const { error } = await supabase.from('jornada_tentativas').insert({
        id: tentativa.id,
        user_id: userId,
        tipo: tentativa.tipo,
        target_id: tentativa.targetId,
        modulo_id: tentativa.moduloId,
        total_itens: tentativa.totalItens,
        acertos: tentativa.acertos,
        erros: tentativa.erros,
        em_branco: tentativa.emBranco,
        aproveitamento: tentativa.aproveitamento,
        nota_liquida: tentativa.notaLiquida,
        aprovado: tentativa.aprovado,
        acertos_necessarios: tentativa.acertosNecessarios,
        erros_maximos: tentativa.errosMaximos,
        secoes_com_erros: tentativa.secoesComErros,
        respostas: tentativa.respostas,
        fora_da_trilha: tentativa.foraDaTrilha,
        criado_em: tentativa.criadoEm,
      });

      if (error) {
        console.warn('[Supabase Sync] Falha ao salvar tentativa, enfileirando offline:', error);
        this.enfileirarOffline(tentativa);
        return { success: true, syncedWithServer: false };
      }

      return { success: true, syncedWithServer: true };
    } catch (err) {
      console.warn('[Supabase Sync] Erro de rede, tentativa enfileirada:', err);
      this.enfileirarOffline(tentativa);
      return { success: true, syncedWithServer: false };
    }
  },

  enfileirarOffline(tentativa: TentativaRegistro): void {
    const fila = this.carregarFilaOffline();
    if (!fila.some((t) => t.id === tentativa.id)) {
      fila.push(tentativa);
      this.salvarFilaOffline(fila);
    }
  },

  /**
   * Sincroniza tentativas com o servidor Supabase:
   * - Despeja a fila offline pendente
   * - Baixa todas as tentativas da conta do usuário
   * - Resolve conflitos por união estrita de tentativas por id único (Regra D.6)
   */
  async sincronizarTentativasNuvem(userId: string): Promise<TentativaRegistro[]> {
    const locais = this.carregarTentativasLocais();
    if (!isSupabaseConfigured || !userId) return locais;

    // 1. Processa a fila offline se houver itens
    const fila = this.carregarFilaOffline();
    if (fila.length > 0) {
      const novaFila: TentativaRegistro[] = [];
      for (const t of fila) {
        try {
          const { error } = await supabase.from('jornada_tentativas').upsert({
            id: t.id,
            user_id: userId,
            tipo: t.tipo,
            target_id: t.targetId,
            modulo_id: t.moduloId,
            total_itens: t.totalItens,
            acertos: t.acertos,
            erros: t.erros,
            em_branco: t.emBranco,
            aproveitamento: t.aproveitamento,
            nota_liquida: t.notaLiquida,
            aprovado: t.aprovado,
            acertos_necessarios: t.acertosNecessarios,
            erros_maximos: t.errosMaximos,
            secoes_com_erros: t.secoesComErros,
            respostas: t.respostas,
            fora_da_trilha: t.foraDaTrilha,
            criado_em: t.criadoEm,
          });
          if (error) novaFila.push(t);
        } catch {
          novaFila.push(t);
        }
      }
      this.salvarFilaOffline(novaFila);
    }

    // 2. Baixa as tentativas da nuvem para o usuário
    try {
      const { data, error } = await supabase
        .from('jornada_tentativas')
        .select('*')
        .eq('user_id', userId)
        .order('criado_em', { ascending: true });

      if (error || !data) {
        console.warn('[Supabase Sync] Falha ao baixar tentativas remotas:', error);
        return locais;
      }

      // 3. Mapeia e une por ID único (União sem perda)
      const mapa = new Map<string, TentativaRegistro>();

      for (const t of locais) {
        mapa.set(t.id, t);
      }

      for (const row of data) {
        const tRemota: TentativaRegistro = {
          id: row.id,
          userId: row.user_id,
          tipo: row.tipo,
          targetId: row.target_id,
          moduloId: row.modulo_id,
          totalItens: row.total_itens,
          acertos: row.acertos,
          erros: row.erros,
          emBranco: row.em_branco,
          aproveitamento: parseFloat(row.aproveitamento),
          notaLiquida: row.nota_liquida,
          aprovado: row.aprovado,
          acertosNecessarios: row.acertos_necessarios,
          errosMaximos: row.erros_maximos,
          secoesComErros: row.secoes_com_erros || [],
          respostas: row.respostas || {},
          foraDaTrilha: row.fora_da_trilha || false,
          criadoEm: row.criado_em,
        };
        mapa.set(tRemota.id, tRemota);
      }

      const listaUnificada = Array.from(mapa.values()).sort(
        (a, b) => new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime()
      );

      this.salvarTentativasLocais(listaUnificada);
      return listaUnificada;
    } catch (err) {
      console.warn('[Supabase Sync] Erro inesperado ao sincronizar:', err);
      return locais;
    }
  },

  /**
   * Migração sem perda de progresso (Regra D.6):
   * Converte checkpoints respondidos e simulados existentes no localStorage v2 em tentativas
   * imutáveis v3 para que o usuário não perca nada do que já estudou.
   */
  migrarProgressoExistenteV2(userId = 'usuario-local'): {
    migrado: boolean;
    tentativasCriadas: number;
  } {
    try {
      const jaMigrou = localStorage.getItem(HNC_MIGRACAO_KEY);
      if (jaMigrou) return { migrado: false, tentativasCriadas: 0 };

      const legacyRaw = localStorage.getItem('heuller_camara_v2_progress');
      if (!legacyRaw) return { migrado: false, tentativasCriadas: 0 };

      const legacyState = JSON.parse(legacyRaw);
      const checkpointsRespondidos: Record<string, 'C' | 'E'> =
        legacyState?.state?.checkpointsRespondidos || {};
      const historicoSimulados = legacyState?.state?.historicoSimulados || [];

      const novasTentativas: TentativaRegistro[] = [];
      const allSubmodulos = COURSE_REGISTRY.flatMap((m) =>
        m.modulosFilhos.map((sub) => ({ ...sub, macroId: m.id }))
      );

      // 1. Converte checkpoints por submódulo em tentativas
      for (const sub of allSubmodulos) {
        const cps = sub.checkpoints || [];
        const respondidos = cps.filter((c) => checkpointsRespondidos[c.id]);

        if (respondidos.length > 0) {
          const respostas: Record<string, any> = {};
          for (const cp of respondidos) {
            const resp = checkpointsRespondidos[cp.id];
            respostas[cp.id] = {
              questionId: cp.id,
              resposta: resp,
              gabarito: cp.gabarito,
              acertou: resp === cp.gabarito,
              secaoId: 'sec-checkpoints',
            };
          }

          const tentativa = criarTentativaRegistro({
            userId,
            tipo: 'verificacao_submodulo',
            targetId: sub.numero,
            moduloId: sub.macroId,
            totalItens: cps.length,
            respostas,
            foraDaTrilha: false,
          });

          novasTentativas.push(tentativa);
        }
      }

      // 2. Converte histórico de simulados em tentativas de desafio
      for (const sim of historicoSimulados) {
        const respostasConvertidas: Record<string, any> = {};
        for (const [qId, r] of Object.entries<any>(sim.respostas || {})) {
          respostasConvertidas[qId] = {
            questionId: qId,
            resposta: r.resposta,
            gabarito: r.resposta === 'C' ? (r.acertou ? 'C' : 'E') : r.acertou ? 'E' : 'C',
            acertou: Boolean(r.acertou),
          };
        }

        const tentativa = criarTentativaRegistro({
          userId,
          tipo: 'desafio_modulo',
          targetId: 'desafio-m1',
          moduloId: 'm1',
          totalItens: 100,
          respostas: respostasConvertidas,
          criadoEm: sim.dataHora,
          foraDaTrilha: false,
        });

        novasTentativas.push(tentativa);
      }

      // Une com quaisquer tentativas locais já existentes
      const locais = this.carregarTentativasLocais();
      const mapa = new Map<string, TentativaRegistro>();
      for (const t of locais) mapa.set(t.id, t);
      for (const t of novasTentativas) mapa.set(t.id, t);

      this.salvarTentativasLocais(Array.from(mapa.values()));
      localStorage.setItem(HNC_MIGRACAO_KEY, 'true');

      return { migrado: true, tentativasCriadas: novasTentativas.length };
    } catch (err) {
      console.warn('[TentativasMigracao] Falha na migração do v2:', err);
      return { migrado: false, tentativasCriadas: 0 };
    }
  },

  limparTentativasLocais(): void {
    localStorage.removeItem(HNC_TENTATIVAS_KEY);
    localStorage.removeItem(HNC_OFFLINE_QUEUE_KEY);
    localStorage.removeItem(HNC_MIGRACAO_KEY);
  },
};
