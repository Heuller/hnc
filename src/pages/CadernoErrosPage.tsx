import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
import React, { useState, useMemo } from 'react';
import {
  BookMarked,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Filter,
  Search,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Scale,
  Sparkles,
} from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { getItensCadernoErros, type ItemCadernoErro } from '../domain/cadernoErros';
import { DialogoBancaModal } from '../components/cadernoErros/DialogoBancaModal';
import { carregarSessoesDoStorage } from '../domain/socratic/socraticService';
import { SimuladoAdaptativoModal } from '../components/adaptiveQuiz/SimuladoAdaptativoModal';
import { IllustrationVazio } from '../components/illustrations/ContextualIllustrations';

export const CadernoErrosPage: React.FC = () => {
  const { checkpointsRespondidos, historicoSimulados, salvarCheckpoint, itemAttempts } = useProgressStore();
  const { setActiveView, setSelectedSubmodule } = useNavigationStore();

  const [origemFiltro, setOrigemFiltro] = useState<'todos' | 'checkpoint' | 'simulado' | 'hipercorrecao'>('todos');
  const [moduloFiltro, setModuloFiltro] = useState<string>('todos');
  const [busca, setBusca] = useState<string>('');

  // Estado para tentativa de refazer item no próprio card
  const [itensEmCorrecao, setItensEmCorrecao] = useState<Record<string, ItemCadernoErro>>({});
  const [tentativas, setTentativas] = useState<Record<string, 'C' | 'E'>>({});

  // Estado do Diálogo Socrático com a Banca
  const [itemSocraticoAtivo, setItemSocraticoAtivo] = useState<ItemCadernoErro | null>(null);
  const [sessoesStorage, setSessoesStorage] = useState<Record<string, { superado: boolean }>>(() =>
    carregarSessoesDoStorage()
  );
  const [isModalAdaptativoOpen, setIsModalAdaptativoOpen] = useState(false);

  const todosErros: ItemCadernoErro[] = useMemo(() => {
    return getItensCadernoErros(checkpointsRespondidos || {}, historicoSimulados || [], itemAttempts || []);
  }, [checkpointsRespondidos, historicoSimulados, itemAttempts]);

  // Estatísticas
  const stats = useMemo(() => {
    const total = todosErros.length;
    const checkpointsCount = todosErros.filter((e) => e.origem === 'checkpoint').length;
    const simuladoCount = todosErros.filter((e) => e.origem === 'simulado').length;
    const hipercorrecaoCount = todosErros.filter((e) => e.prioridadeHipercorrecao).length;

    // Contagem por módulo
    const porModulo: Record<string, number> = {};
    for (const e of todosErros) {
      const mod = e.macroModuloId.toUpperCase();
      porModulo[mod] = (porModulo[mod] || 0) + 1;
    }

    let moduloMaisCritico = 'Nenhum';
    let maxErros = 0;
    for (const [mod, count] of Object.entries(porModulo)) {
      if (count > maxErros) {
        maxErros = count;
        moduloMaisCritico = mod;
      }
    }

    return { total, checkpointsCount, simuladoCount, hipercorrecaoCount, moduloMaisCritico, maxErros };
  }, [todosErros]);

  // Filtragem
  const errosFiltrados = useMemo(() => {
    const exibidos = [...new Map([...todosErros, ...Object.values(itensEmCorrecao)].map(item => [item.id, item])).values()];
    return exibidos.filter((item) => {
      if (origemFiltro === 'hipercorrecao') {
        if (!item.prioridadeHipercorrecao) return false;
      } else if (origemFiltro !== 'todos' && item.origem !== origemFiltro) {
        return false;
      }
      if (moduloFiltro !== 'todos' && item.macroModuloId.toLowerCase() !== moduloFiltro.toLowerCase()) {
        return false;
      }
      if (busca.trim()) {
        const q = busca.toLowerCase();
        const matchAssertiva = item.assertiva.toLowerCase().includes(q);
        const matchJust = item.justificativa.toLowerCase().includes(q);
        const matchTitulo = item.tituloContexto.toLowerCase().includes(q);
        if (!matchAssertiva && !matchJust && !matchTitulo) return false;
      }
      return true;
    });
  }, [todosErros, itensEmCorrecao, origemFiltro, moduloFiltro, busca]);

  const handleRefazerResposta = (item: ItemCadernoErro, escolha: 'C' | 'E') => {
    setItensEmCorrecao(prev => ({ ...prev, [item.id]: item }));
    setTentativas((prev) => ({ ...prev, [item.id]: escolha }));

    // Se for checkpoint e o usuário acertar agora, atualiza o checkpoint no store!
    if (item.origem === 'checkpoint' && escolha === item.gabarito) {
      salvarCheckpoint(item.chaveOriginal, escolha);
    }
  };

  const handleIrParaTeoria = (subId?: string) => {
    if (subId) setSelectedSubmodule(subId);
    setActiveView('teoria');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2 px-1 sm:px-0">
      {/* Botão Voltar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveView('painel')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-theme-ink-2 hover:text-theme-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Painel</span>
        </button>

        <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-surface-2 text-ink-2 border border-border font-bold">
          Caderno de Erros Ativo
        </span>
      </div>

      {/* Banner Principal */}
      <div className="card-editorial p-6 sm:p-8 space-y-4 border-l-4 border-l-amber-500">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-accent dark:text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Superação de Lacunas & Pegadinhas</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-theme-ink tracking-normal m-0">
          Caderno de Erros Cebraspe
        </h1>

        <p className="font-serif-reading text-base text-theme-ink-2 leading-relaxed m-0">
          O erro é o diagnóstico mais preciso para a aprovação. Todos os itens de micro-checkpoints e do Simulado 100Q respondidos incorretamente são catalogados aqui para que você re-treine a assertiva, compreenda a armadilha da banca e consolide a doutrina.
        </p>

        {/* Métricas do Caderno */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold block">Total de Erros</span>
            <span className="text-2xl font-black text-ink">{stats.total}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold block">Micro-Checkpoints</span>
            <span className="text-2xl font-black text-accent dark:text-amber-400">{stats.checkpointsCount}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold block">Simulado 100Q</span>
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{stats.simuladoCount}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-rose-500/30 bg-rose-500/5 text-center">
            <span className="text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 font-semibold block">Hipercorreção</span>
            <span className="text-2xl font-black text-err dark:text-rose-400">{stats.hipercorrecaoCount}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold block">Módulo Crítico</span>
            <span className="text-2xl font-black text-accent">{stats.moduloMaisCritico}</span>
          </div>
        </div>

        {/* Ação: Gerar Simulado Adaptativo dos Meus Erros */}
        {stats.total > 0 && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsModalAdaptativoOpen(true)}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-accent text-accent-text hover:bg-accent/90 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-editorial-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gerar Simulado Adaptativo de Erros ({stats.total} itens catalogados)</span>
            </button>
          </div>
        )}
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="card-editorial p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-ink-2 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              aria-label="Buscar no Caderno de Erros"
              type="text"
              placeholder="Buscar no texto ou justificativa..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-surface-2 border border-border text-ink foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-ink-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Origem:
            </span>
            <button
              onClick={() => setOrigemFiltro('todos')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                origemFiltro === 'todos' ? 'bg-primary text-primary-text' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Todos ({stats.total})
            </button>
            <button
              onClick={() => setOrigemFiltro('checkpoint')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                origemFiltro === 'checkpoint' ? 'bg-amber-600 text-white' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Teoria ({stats.checkpointsCount})
            </button>
            <button
              onClick={() => setOrigemFiltro('simulado')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                origemFiltro === 'simulado' ? 'bg-indigo-600 text-white' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Simulado ({stats.simuladoCount})
            </button>
            <button
              onClick={() => setOrigemFiltro('hipercorrecao')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                origemFiltro === 'hipercorrecao' ? 'bg-rose-600 text-white' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              🔥 Hipercorreção ({stats.hipercorrecaoCount})
            </button>
          </div>
        </div>

        {/* Abas de Módulos */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs border-t border-border pt-3">
          <span className="font-bold text-ink-2 shrink-0 mr-1">Módulo:</span>
          {['todos', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'].map((m) => (
            <button
              key={m}
              onClick={() => setModuloFiltro(m)}
              className={`px-2.5 py-1 rounded font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                moduloFiltro === m
                  ? 'bg-accent text-accent-text font-bold'
                  : 'bg-surface-2 text-ink-2 hover:text-ink border border-transparent hover:border-border'
              }`}
            >
              {m === 'todos' ? 'Todos' : m.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Erros */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-ink-2 px-1">
          <span>Mostrando <strong>{errosFiltrados.length}</strong> itens catalogados</span>
          {moduloFiltro !== 'todos' && <span>Filtrado por: {moduloFiltro.toUpperCase()}</span>}
        </div>

        {errosFiltrados.length === 0 ? (
          <div className="card-editorial p-12 text-center space-y-4">
            <IllustrationVazio width={120} height={86} className="mx-auto text-ink-2 opacity-70" aria-hidden="true" />
            <div className="space-y-1">
              <h2 className="text-base font-bold text-ink m-0">Nenhum erro encontrado</h2>
              <p className="text-xs text-ink-2 font-serif max-w-md mx-auto m-0">
                {todosErros.length === 0
                  ? 'Você ainda não registrou erros em micro-checkpoints ou simulados. Continue praticando para diagnosticar seu desempenho!'
                  : 'Nenhum item corresponde aos filtros selecionados acima.'}
              </p>
            </div>
            {todosErros.length === 0 && (
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setActiveView('teoria')}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-text text-xs font-bold cursor-pointer hover:opacity-95"
                >
                  Estudar Teoria
                </button>
                <button
                  onClick={() => setActiveView('simulado')}
                  className="px-4 py-2 rounded-lg bg-surface-2 border border-border text-ink text-xs font-bold cursor-pointer hover:border-accent"
                >
                  Ir para o Simulado
                </button>
              </div>
            )}
          </div>
        ) : (
          errosFiltrados.map((item, idx) => {
            const tentativaAtual = tentativas[item.id];
            const acertouNaTentativa = tentativaAtual && tentativaAtual === item.gabarito;

            return (
              <div
                key={item.id}
                className="card-editorial p-5 sm:p-6 space-y-4 border border-border hover:border-border-strong transition-all relative overflow-hidden"
              >
                {/* Linha indicativa lateral */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                    acertouNaTentativa
                      ? 'bg-emerald-500'
                      : item.prioridadeHipercorrecao
                      ? 'bg-rose-500'
                      : item.origem === 'simulado'
                      ? 'bg-indigo-500'
                      : 'bg-amber-500'
                  }`}
                />

                {/* Topo do Card */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                        item.origem === 'simulado'
                          ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20'
                          : 'bg-amber-500/10 text-accent dark:text-amber-400 border-amber-500/20'
                      }`}
                    >
                      {item.origem === 'simulado' ? 'Simulado 100Q' : 'Micro-Checkpoint'}
                    </span>
                    {item.prioridadeHipercorrecao && (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30 flex items-center gap-1">
                        🔥 Hipercorreção (Peso 2x)
                      </span>
                    )}
                    <span className="text-xs text-ink-2 font-mono">
                      #{idx + 1} · {item.macroModuloId.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {item.submoduloId && (
                      <button
                        onClick={() => handleIrParaTeoria(item.submoduloId)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Revisar Submódulo {item.submoduloNumero}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}

                    <div className="text-xs font-mono flex items-center gap-1.5">
                      <span className="text-ink-2">Você marcou:</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-accent font-bold">
                        {item.respostaUsuario === 'C' ? 'CERTO' : 'ERRADO'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Título de Contexto */}
                <h2 className="text-xs sm:text-sm font-bold text-ink m-0">
                  {item.tituloContexto}
                </h2>

                {/* Callout de Hipercorreção */}
                {item.prioridadeHipercorrecao && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-900 dark:text-rose-300 text-xs flex items-start gap-2">
                    <span className="text-base shrink-0">🔥</span>
                    <div className="space-y-0.5">
                      <span className="font-bold block uppercase tracking-wider text-xs">
                        Efeito da Hipercorreção (Butterfield &amp; Metcalfe, 2001):
                      </span>
                      <p className="m-0 leading-relaxed">
                        Este erro foi cometido com alta certeza. Equívocos conceituais sustentados com convicção geram a maior retenção duradoura quando corrigidos imediatamente com justificativa factual (prioridade máxima e peso 2.0x).
                      </p>
                    </div>
                  </div>
                )}

                {/* Assertiva */}
                <div className="p-4 rounded-lg bg-surface-2 border border-border/80">
                  <p className="font-serif-reading text-base text-ink leading-relaxed m-0 select-text">
                    {item.assertiva}
                  </p>
                </div>

                {/* Área de Re-tentativa / Treino de Recuperação */}
                <div className="p-3.5 rounded-xl bg-surface border border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-ink flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-accent" />
                      <span>Refazer agora para superar a pegadinha:</span>
                    </span>

                    {tentativaAtual && (
                      <span
                        className={`text-xs font-bold flex items-center gap-1 ${
                          acertouNaTentativa ? 'text-ok dark:text-emerald-400' : 'text-accent'
                        }`}
                      >
                        {acertouNaTentativa ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Acertou nesta tentativa. Confira novamente em outro dia.</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Ainda incorreto. Veja a justificativa abaixo.</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={!!tentativaAtual}
                      onClick={() => handleRefazerResposta(item, 'C')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer transition-colors border ${
                        tentativaAtual === 'C'
                          ? item.gabarito === 'C'
                            ? 'bg-ok text-white border-emerald-600'
                            : 'bg-amber-600 text-white border-amber-600'
                          : 'bg-surface-2 text-ink hover:border-accent border-border'
                      }`}
                    >
                      CERTO
                    </button>
                    <button
                      type="button"
                      disabled={!!tentativaAtual}
                      onClick={() => handleRefazerResposta(item, 'E')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold cursor-pointer transition-colors border ${
                        tentativaAtual === 'E'
                          ? item.gabarito === 'E'
                            ? 'bg-ok text-white border-emerald-600'
                            : 'bg-amber-600 text-white border-amber-600'
                          : 'bg-surface-2 text-ink hover:border-accent border-border'
                      }`}
                    >
                      ERRADO
                    </button>
                  </div>
                </div>

                {/* Justificativa e Armadilha */}
                <div className="space-y-2 text-xs pt-1">
                  {/* Fonte / Referência Canônica */}
                  {item.fonte && (
                    <div className="text-xs text-ink-2 font-mono flex items-center gap-1 pt-0.5">
                      <span className="font-semibold">Fonte:</span>
                      <span>{item.fonte}</span>
                    </div>
                  )}

                  <PainelEstudoReverso questao={{ id: item.id, item: item.assertiva, gabarito: item.gabarito,
                    justificativa: item.justificativa, versao_correta: item.versao_correta, armadilhaBanca: item.armadilhaBanca,
                    submoduloId: item.submoduloNumero }} resposta={tentativas[item.id] || item.respostaUsuario} autoexplicacao={false} />
                  {tentativas[item.id] && <button type="button" className="min-h-[44px] px-4 border border-border rounded-xl" onClick={() => setItensEmCorrecao(prev => { const next = { ...prev }; delete next[item.id]; return next; })}>Concluir revisão deste item</button>}
                  {/* Ação Socrática: Discutir com a Banca Cebraspe (IA) */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setItemSocraticoAtivo(item)}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-950 dark:text-amber-200 font-bold text-xs flex items-center justify-between cursor-pointer transition-colors shadow-editorial-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-accent dark:text-amber-400" />
                        <span>Recorrer / Discutir com a Banca Cebraspe (IA)</span>
                      </div>

                      {sessoesStorage[item.id]?.superado ? (
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Lacuna Superada</span>
                        </span>
                      ) : (
                        <span className="text-xs font-mono flex items-center gap-1 text-accent dark:text-amber-300">
                          <span>Parecer &amp; Desafio</span>
                          <span>&rarr;</span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal do Diálogo Socrático com a Banca */}
      <DialogoBancaModal
        item={itemSocraticoAtivo}
        isOpen={Boolean(itemSocraticoAtivo)}
        onClose={() => setItemSocraticoAtivo(null)}
        onSuperadoChange={(itemId, superado) => {
          setSessoesStorage((prev) => ({
            ...prev,
            [itemId]: { superado },
          }));
        }}
      />

      {/* Modal do Simulado Adaptativo */}
      <SimuladoAdaptativoModal
        isOpen={isModalAdaptativoOpen}
        onClose={() => setIsModalAdaptativoOpen(false)}
        modoInicial="erros_caderno"
      />
    </div>
  );
};
