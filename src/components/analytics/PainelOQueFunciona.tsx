import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  AlertCircle,
  Brain,
  Award,
  Filter,
  Activity,
} from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { COURSE_REGISTRY } from '../../content/registry';
import type { TipoExercicio } from '../../domain/schemas/modulo.schema';

export interface FormatoMetrica {
  id: string;
  categoria: 'leitura_x' | 'revisao_f' | 'simulado';
  codigo: string;
  nome: string;
  rotuloCurto: string;
  fundamentoCientifico: string;
  referencia: string;
  dificuldadeDesejavel: 'Leve' | 'Moderada' | 'Elevada';
  totalTentativas: number;
  acertos: number;
  taxaAcerto: number;
  totalPrimeiraTentativa: number;
  acertosPrimeiraTentativa: number;
  taxaPrimeiraTentativa: number;
  totalAltaCerteza: number;
  taxaAltaCerteza: number;
  errosHipercorrecao: number;
  statusAmostra: 'insuficiente' | 'observacao' | 'tendencia';
}

const METADADOS_FORMATOS: Record<
  string,
  {
    nome: string;
    rotuloCurto: string;
    categoria: 'leitura_x' | 'revisao_f' | 'simulado';
    fundamentoCientifico: string;
    referencia: string;
    dificuldadeDesejavel: 'Leve' | 'Moderada' | 'Elevada';
  }
> = {
  X1: {
    nome: 'Pré-teste Epistêmico',
    rotuloCurto: 'Pré-teste',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Tentar responder antes de estudar ativa a curiosidade e potencializa a retenção posterior.',
    referencia: 'Richland, Kornell & Kao (2009); Kornell et al. (2009)',
    dificuldadeDesejavel: 'Elevada',
  },
  X2: {
    nome: 'Julgamento C/E Clássico',
    rotuloCurto: 'C/E Clássico',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Prática de recuperação direta alinhada às regras e penalização do Cebraspe.',
    referencia: 'Roediger & Karpicke (2006); Morris et al. (1977)',
    dificuldadeDesejavel: 'Moderada',
  },
  X3: {
    nome: 'Correção de Assertiva Falsa',
    rotuloCurto: 'Correção',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Reescrever ou substituir o trecho errôneo exige processamento analítico profundo.',
    referencia: 'Chi et al. (1989, 1994); Dunlosky et al. (2013)',
    dificuldadeDesejavel: 'Elevada',
  },
  X4: {
    nome: 'Brain Dump Ativo',
    rotuloCurto: 'Brain Dump',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Recuperação livre e sem pistas para avaliar a consolidação autônoma de conceitos.',
    referencia: 'Karpicke & Blunt (2011); Roediger & Butler (2011)',
    dificuldadeDesejavel: 'Elevada',
  },
  X5: {
    nome: 'Escolha do Porquê (Autoexplicação)',
    rotuloCurto: 'Autoexplicação',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Identificar a justificativa doutrinária exata combate a memorização superficial.',
    referencia: 'Chi et al. (1994); Dunlosky et al. (2013)',
    dificuldadeDesejavel: 'Moderada',
  },
  X6: {
    nome: 'Completar Exemplo Prático',
    rotuloCurto: 'Exemplo Prático',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Exemplos aplicados facilitam a transferência para cenários reais de catalogação e indexação.',
    referencia: 'Sweller (1988); Van Gog et al. (2011)',
    dificuldadeDesejavel: 'Moderada',
  },
  X7: {
    nome: 'Reversão de Armadilha da Banca',
    rotuloCurto: 'Armadilha Cebraspe',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Identificar o tipo de distorção (inversão, anacronismo, falso sinônimo) imuniza contra pegadinhas.',
    referencia: 'Butterfield & Metcalfe (2001); Metcalfe (2017)',
    dificuldadeDesejavel: 'Elevada',
  },
  X8: {
    nome: 'Itens-Suporte com Texto-Base',
    rotuloCurto: 'Itens-Suporte',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Treinamento contextualizado em blocos de itens referenciados a normas e extratos técnicos.',
    referencia: 'Morris, Bransford & Franks (1977)',
    dificuldadeDesejavel: 'Moderada',
  },
  X9: {
    nome: 'Caça ao Erro no Trecho',
    rotuloCurto: 'Caça ao Erro',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Atenção discriminativa e varredura de termos técnicos incorretos.',
    referencia: 'Dunlosky et al. (2013); Roediger & Karpicke (2006)',
    dificuldadeDesejavel: 'Elevada',
  },
  X10: {
    nome: 'Associação Conceitual',
    rotuloCurto: 'Associação',
    categoria: 'leitura_x',
    fundamentoCientifico: 'Discriminação ativa entre pares conceituais e taxonomias correlatas.',
    referencia: 'Kornell & Bjork (2008); Rohrer & Taylor (2007)',
    dificuldadeDesejavel: 'Moderada',
  },
  F1: {
    nome: 'Revisão C/E Simples (Teto 20%)',
    rotuloCurto: 'Rev. F1 Simples',
    categoria: 'revisao_f',
    fundamentoCientifico: 'Julgamento objetivo rápido na grade de repetição espaçada.',
    referencia: 'Cepeda et al. (2006, 2008)',
    dificuldadeDesejavel: 'Leve',
  },
  F2: {
    nome: 'Revisão com Justificativa Ativa',
    rotuloCurto: 'Rev. F2 Justificativa',
    categoria: 'revisao_f',
    fundamentoCientifico: 'Recuperação com fundamentação explícita na grade diária de repetição.',
    referencia: 'Chi et al. (1989); Roediger & Karpicke (2006)',
    dificuldadeDesejavel: 'Moderada',
  },
  F3: {
    nome: 'Revisão: Identificação de Pegadinha',
    rotuloCurto: 'Rev. F3 Pegadinha',
    categoria: 'revisao_f',
    fundamentoCientifico: 'Discriminação de armadilhas clássicas da banca em ciclos espaçados.',
    referencia: 'Metcalfe (2017)',
    dificuldadeDesejavel: 'Elevada',
  },
  F4: {
    nome: 'Revisão: Preenchimento de Lacunas',
    rotuloCurto: 'Rev. F4 Lacunas',
    categoria: 'revisao_f',
    fundamentoCientifico: 'Recuperação com pista semântica (cued retrieval) para termos de alta densidade.',
    referencia: 'Carpenter (2012)',
    dificuldadeDesejavel: 'Moderada',
  },
  F5: {
    nome: 'Revisão: Associação de Pares Confundíveis',
    rotuloCurto: 'Rev. F5 Pares',
    categoria: 'revisao_f',
    fundamentoCientifico: 'Contraste ativo entre conceitos vizinhos (ex: MARC campo 100 vs 700).',
    referencia: 'Kornell & Bjork (2008)',
    dificuldadeDesejavel: 'Elevada',
  },
  SIM: {
    nome: 'Simulado Cebraspe 100Q',
    rotuloCurto: 'Simulado 100Q',
    categoria: 'simulado',
    fundamentoCientifico: 'Simulação fidedigna com penalização de 1 erro anula 1 acerto sob pressão de tempo.',
    referencia: 'Morris, Bransford & Franks (1977); Roediger & Karpicke (2006)',
    dificuldadeDesejavel: 'Elevada',
  },
};

export const PainelOQueFunciona: React.FC = () => {
  const { itemAttempts, checkpointsRespondidos, historicoSimulados } = useProgressStore();
  const [categoriaFiltro, setCategoriaFiltro] = useState<'todos' | 'leitura_x' | 'revisao_f' | 'simulado'>('todos');

  // Mapa de checkpoints para tipo de exercício (X1 a X10)
  const mapaCheckpointTipo = useMemo(() => {
    const mapa = new Map<string, { tipo: TipoExercicio; gabarito: 'C' | 'E' }>();
    for (const macro of COURSE_REGISTRY) {
      for (const sub of macro.modulosFilhos) {
        for (const cp of sub.checkpoints) {
          mapa.set(cp.id, { tipo: cp.tipo || 'X2', gabarito: cp.gabarito });
        }
      }
    }
    return mapa;
  }, []);

  // Consolidação de métricas por tipologia cognitiva
  const metricasPorTipo: FormatoMetrica[] = useMemo(() => {
    const acumuladores: Record<
      string,
      {
        total: number;
        acertos: number;
        totalPrimeira: number;
        acertosPrimeira: number;
        totalAltaCerteza: number;
        errosHiper: number;
      }
    > = {};

    const inicializar = (codigo: string) => {
      if (!acumuladores[codigo]) {
        acumuladores[codigo] = {
          total: 0,
          acertos: 0,
          totalPrimeira: 0,
          acertosPrimeira: 0,
          totalAltaCerteza: 0,
          errosHiper: 0,
        };
      }
    };

    // 1. Processar itemAttempts oficiais (Fonte Canônica)
    if (itemAttempts && itemAttempts.length > 0) {
      for (const att of itemAttempts) {
        let codigo = 'X2';

        if (mapaCheckpointTipo.has(att.item_id)) {
          codigo = mapaCheckpointTipo.get(att.item_id)!.tipo;
        } else if (att.contexto === 'simulado') {
          codigo = 'SIM';
        } else if (att.contexto === 'revisao') {
          codigo = 'F2';
        }

        inicializar(codigo);
        const itemAcc = acumuladores[codigo];
        itemAcc.total++;
        if (att.correto) itemAcc.acertos++;

        if (att.tentativa_n === 1) {
          itemAcc.totalPrimeira++;
          if (att.correto) itemAcc.acertosPrimeira++;
        }

        if (att.certeza === 'alta') {
          itemAcc.totalAltaCerteza++;
          if (!att.correto) {
            itemAcc.errosHiper++;
          }
        }
      }
    } else {
      // 2. Fallback gracioso: processar checkpointsRespondidos e historicoSimulados se itemAttempts estiver vazio
      if (checkpointsRespondidos) {
        for (const [cpId, resposta] of Object.entries(checkpointsRespondidos)) {
          const cpInfo = mapaCheckpointTipo.get(cpId);
          const codigo = cpInfo?.tipo || 'X2';
          const correto = cpInfo ? resposta === cpInfo.gabarito : false;

          inicializar(codigo);
          const itemAcc = acumuladores[codigo];
          itemAcc.total++;
          itemAcc.totalPrimeira++;
          if (correto) {
            itemAcc.acertos++;
            itemAcc.acertosPrimeira++;
          }
        }
      }

      if (historicoSimulados && historicoSimulados.length > 0) {
        inicializar('SIM');
        const itemAcc = acumuladores['SIM'];
        for (const sim of historicoSimulados) {
          const resp = Object.values(sim.respostas || {});
          for (const r of resp) {
            if (r.resposta !== 'BRANCO') {
              itemAcc.total++;
              itemAcc.totalPrimeira++;
              if (r.acertou) {
                itemAcc.acertos++;
                itemAcc.acertosPrimeira++;
              }
            }
          }
        }
      }
    }

    // Montar a lista final com todos os metadados
    const formatosChaves = Object.keys(METADADOS_FORMATOS);
    const resultado: FormatoMetrica[] = [];

    for (const codigo of formatosChaves) {
      const meta = METADADOS_FORMATOS[codigo];
      const acc = acumuladores[codigo] || {
        total: 0,
        acertos: 0,
        totalPrimeira: 0,
        acertosPrimeira: 0,
        totalAltaCerteza: 0,
        errosHiper: 0,
      };

      const taxaAcerto = acc.total > 0 ? Math.round((acc.acertos / acc.total) * 100) : 0;
      const taxaPrimeiraTentativa =
        acc.totalPrimeira > 0 ? Math.round((acc.acertosPrimeira / acc.totalPrimeira) * 100) : 0;
      const taxaAltaCerteza =
        acc.total > 0 ? Math.round((acc.totalAltaCerteza / acc.total) * 100) : 0;

      let statusAmostra: 'insuficiente' | 'observacao' | 'tendencia' = 'insuficiente';
      if (acc.total >= 15) {
        statusAmostra = 'tendencia';
      } else if (acc.total >= 5) {
        statusAmostra = 'observacao';
      }

      resultado.push({
        id: codigo,
        categoria: meta.categoria,
        codigo,
        nome: meta.nome,
        rotuloCurto: meta.rotuloCurto,
        fundamentoCientifico: meta.fundamentoCientifico,
        referencia: meta.referencia,
        dificuldadeDesejavel: meta.dificuldadeDesejavel,
        totalTentativas: acc.total,
        acertos: acc.acertos,
        taxaAcerto,
        totalPrimeiraTentativa: acc.totalPrimeira,
        acertosPrimeiraTentativa: acc.acertosPrimeira,
        taxaPrimeiraTentativa,
        totalAltaCerteza: acc.totalAltaCerteza,
        taxaAltaCerteza,
        errosHipercorrecao: acc.errosHiper,
        statusAmostra,
      });
    }

    return resultado;
  }, [itemAttempts, checkpointsRespondidos, historicoSimulados, mapaCheckpointTipo]);

  // Lista filtrada para exibição
  const metricasFiltradas = useMemo(() => {
    return metricasPorTipo.filter((m) => {
      if (categoriaFiltro === 'todos') return true;
      return m.categoria === categoriaFiltro;
    });
  }, [metricasPorTipo, categoriaFiltro]);

  // Resumo global de metacognição e retenção
  const resumoGlobal = useMemo(() => {
    const comDados = metricasPorTipo.filter((m) => m.totalTentativas > 0);
    const totalItens = comDados.reduce((acc, cur) => acc + cur.totalTentativas, 0);

    // Formato com melhor acerto (amostra >= 3)
    const comAmostraMinima = comDados.filter((m) => m.totalTentativas >= 3);
    const melhorFormato =
      comAmostraMinima.length > 0
        ? [...comAmostraMinima].sort((a, b) => b.taxaPrimeiraTentativa - a.taxaPrimeiraTentativa)[0]
        : null;

    // Formato mais desafiador
    const maisDesafiador =
      comAmostraMinima.length > 0
        ? [...comAmostraMinima].sort((a, b) => a.taxaPrimeiraTentativa - b.taxaPrimeiraTentativa)[0]
        : null;

    const totalHiper = comDados.reduce((acc, cur) => acc + cur.errosHipercorrecao, 0);

    return {
      totalItens,
      melhorFormato,
      maisDesafiador,
      totalHiper,
      totalTiposPraticados: comDados.length,
    };
  }, [metricasPorTipo]);

  return (
    <section className="card-editorial p-6 sm:p-8 space-y-6 border-l-4 border-l-accent">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Diagnóstico Metacognitivo (Seção 3.4)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-theme-ink tracking-normal m-0">
            O que Funciona para Você
          </h2>
          <p className="font-serif-reading text-sm text-theme-ink-2 mt-1 mb-0 leading-relaxed max-w-2xl">
            Comparativo de acurácia, retenção e esforço mental distribuído por tipologia pedagógica (X1 a X10 e formatos de revisão).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-ink-2 bg-surface-2 px-3 py-1.5 rounded-lg border border-border font-semibold">
            {resumoGlobal.totalItens} respostas analisadas
          </span>
        </div>
      </div>

      {/* RESSALVA ESTATÍSTICA E METODOLÓGICA (OBRIGATÓRIA - N=1) */}
      <div
        role="region"
        aria-label="Ressalva estatística e metodológica"
        className="p-4 sm:p-5 rounded-xl bg-surface-2 border border-border space-y-2 text-xs text-theme-ink-2"
      >
        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Ressalva Estatística e Metodológica (N = 1)</span>
        </div>
        <p className="font-serif leading-relaxed m-0 text-ink">
          <strong>Atenção honesta à evidência:</strong> Estes dados refletem exclusivamente o seu histórico individual de estudo nesta plataforma. Eles representam <strong>tendências descritivas observadas</strong>, e <strong>não uma comprovação científica causal</strong>.
        </p>
        <p className="leading-relaxed m-0 text-ink-2">
          Conforme demonstrado por Pashler et al. (2008), <em>não há respaldo empírico para a teoria de &ldquo;estilos fixos de aprendizagem&rdquo;</em> (ex: visual vs. auditivo). Formatos cognitivamente mais exigentes (como autoexplicação e correção de assertivas) geram maior esforço momentâneo (&ldquo;dificuldades desejáveis&rdquo;, Bjork &amp; Bjork, 2011), o que é natural e esperado para a consolidação de longo prazo.
        </p>
      </div>

      {/* Resumo Rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-surface-2 border border-border">
          <div className="flex items-center gap-2 text-ink-2 text-xs font-semibold mb-1">
            <Award className="w-4 h-4 text-ok dark:text-emerald-400" />
            <span>Maior Acurácia Inicial</span>
          </div>
          {resumoGlobal.melhorFormato ? (
            <div>
              <div className="font-black text-ink text-sm sm:text-base">
                {resumoGlobal.melhorFormato.codigo}: {resumoGlobal.melhorFormato.rotuloCurto}
              </div>
              <div className="text-xs font-mono text-ok dark:text-emerald-400 mt-0.5">
                {resumoGlobal.melhorFormato.taxaPrimeiraTentativa}% de acerto na 1ª tentativa
              </div>
            </div>
          ) : (
            <span className="text-xs text-ink-2 font-serif italic">Pratique mais exercícios para calcular</span>
          )}
        </div>

        <div className="p-4 rounded-xl bg-surface-2 border border-border">
          <div className="flex items-center gap-2 text-ink-2 text-xs font-semibold mb-1">
            <Brain className="w-4 h-4 text-accent dark:text-amber-400" />
            <span>Maior Dificuldade Desejável</span>
          </div>
          {resumoGlobal.maisDesafiador ? (
            <div>
              <div className="font-black text-ink text-sm sm:text-base">
                {resumoGlobal.maisDesafiador.codigo}: {resumoGlobal.maisDesafiador.rotuloCurto}
              </div>
              <div className="text-xs font-mono text-accent dark:text-amber-400 mt-0.5">
                {resumoGlobal.maisDesafiador.taxaPrimeiraTentativa}% de acerto (exige mais reflexão)
              </div>
            </div>
          ) : (
            <span className="text-xs text-ink-2 font-serif italic">Pratique mais exercícios para calcular</span>
          )}
        </div>

        <div className="p-4 rounded-xl bg-surface-2 border border-border">
          <div className="flex items-center gap-2 text-ink-2 text-xs font-semibold mb-1">
            <Sparkles className="w-4 h-4 text-err dark:text-rose-400" />
            <span>Erros com Alta Certeza</span>
          </div>
          <div>
            <div className="font-black text-ink text-sm sm:text-base">
              {resumoGlobal.totalHiper} casos detectados
            </div>
            <div className="text-xs text-ink-2 font-serif mt-0.5">
              Priorizados com peso 2x no Caderno de Erros (Butterfield &amp; Metcalfe, 2001)
            </div>
          </div>
        </div>
      </div>

      {/* Filtros de Tipologia */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs border-b border-border pt-1">
        <span className="font-semibold text-ink-2 shrink-0 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filtrar Tipologia:
        </span>
        <button
          type="button"
          onClick={() => setCategoriaFiltro('todos')}
          className={`px-3 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
            categoriaFiltro === 'todos'
              ? 'bg-primary text-primary-text'
              : 'bg-surface-2 text-ink-2 hover:text-ink'
          }`}
        >
          Todas as Tipologias ({metricasPorTipo.length})
        </button>
        <button
          type="button"
          onClick={() => setCategoriaFiltro('leitura_x')}
          className={`px-3 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
            categoriaFiltro === 'leitura_x'
              ? 'bg-accent text-accent-text'
              : 'bg-surface-2 text-ink-2 hover:text-ink'
          }`}
        >
          Leitura &amp; Fixação (X1 a X10)
        </button>
        <button
          type="button"
          onClick={() => setCategoriaFiltro('revisao_f')}
          className={`px-3 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
            categoriaFiltro === 'revisao_f'
              ? 'bg-indigo-600 text-white'
              : 'bg-surface-2 text-ink-2 hover:text-ink'
          }`}
        >
          Formatos de Revisão (F1 a F5)
        </button>
        <button
          type="button"
          onClick={() => setCategoriaFiltro('simulado')}
          className={`px-3 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
            categoriaFiltro === 'simulado'
              ? 'bg-amber-600 text-white'
              : 'bg-surface-2 text-ink-2 hover:text-ink'
          }`}
        >
          Simulados Cebraspe 100Q
        </button>
      </div>

      {/* Grid de Formatos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metricasFiltradas.map((item) => {
          return (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-surface border border-border hover:border-border-strong transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface-2 text-ink border border-border">
                      {item.codigo}
                    </span>
                    <h3 className="font-sans font-bold text-ink text-sm sm:text-base m-0">
                      {item.nome}
                    </h3>
                  </div>

                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border uppercase font-bold ${
                      item.statusAmostra === 'tendencia'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
                        : item.statusAmostra === 'observacao'
                        ? 'bg-amber-500/10 text-accent dark:text-amber-400 border-amber-500/20'
                        : 'bg-surface-2 text-ink-2 border-border'
                    }`}
                  >
                    {item.statusAmostra === 'tendencia'
                      ? `Tendência (n=${item.totalTentativas})`
                      : item.statusAmostra === 'observacao'
                      ? `Amostra Inicial (n=${item.totalTentativas})`
                      : `Poucos Dados (n=${item.totalTentativas})`}
                  </span>
                </div>

                <p className="font-serif-reading text-xs text-ink-2 leading-relaxed m-0">
                  {item.fundamentoCientifico}
                </p>

                <div className="text-xs font-mono text-accent">
                  Fonte: {item.referencia}
                </div>
              </div>

              {/* Estatísticas Numéricas */}
              <div className="pt-3 border-t border-border/70 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-ink-2 font-serif">Acerto na 1ª Tentativa:</span>
                  <span className="font-mono font-bold text-ink">
                    {item.totalPrimeiraTentativa > 0
                      ? `${item.taxaPrimeiraTentativa}% (${item.acertosPrimeiraTentativa}/${item.totalPrimeiraTentativa})`
                      : 'Sem registro'}
                  </span>
                </div>

                {/* Barra Visual de Acerto */}
                <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden border border-border/50">
                  <div
                    className={`h-full transition-all duration-300 ${
                      item.taxaPrimeiraTentativa >= 75
                        ? 'bg-emerald-500'
                        : item.taxaPrimeiraTentativa >= 50
                        ? 'bg-accent'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${item.totalPrimeiraTentativa > 0 ? item.taxaPrimeiraTentativa : 0}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-ink-2 pt-1 font-mono">
                  <span>Dificuldade Desejável: <strong>{item.dificuldadeDesejavel}</strong></span>
                  {item.errosHipercorrecao > 0 && (
                    <span className="text-err dark:text-rose-400 font-bold">
                      {item.errosHipercorrecao} hipercorreções
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
