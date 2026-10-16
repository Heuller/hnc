import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Search,
  X,
  BookOpen,
  Filter,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  Sparkles,
} from 'lucide-react';
import type { VerbeteUnificado, FiltrosGlossario } from '../domain/glossario/types';
import {
  getTermosTecnicos,
  carregarAcervoUnificado,
  gerarIndiceLetras,
  filtrarVerbetes,
} from '../domain/glossario/glossarioService';
import { useGlossarioStore } from '../store/useGlossarioStore';
import { VerbeteDetalhesDrawer } from '../components/glossario/VerbeteDetalhesDrawer';

type AbaFiltro = 'todos' | 'dicionario' | 'tecnico' | 'suspeitos' | 'curso';

const ITEM_HEIGHT = 104; // Altura estimada do card de verbete em pixels
const OVERSCAN = 6;

export const GlossarioPage: React.FC = () => {
  const [todosVerbetes, setTodosVerbetes] = useState<VerbeteUnificado[]>(() => getTermosTecnicos());
  const [carregando, setCarregando] = useState(false);
  const [busca, setBusca] = useState('');
  const [letraAtiva, setLetraAtiva] = useState<string | null>(null);
  const [abaAtiva, setAbaAtiva] = useState<AbaFiltro>('todos');
  const [verbeteSelecionado, setVerbeteSelecionado] = useState<VerbeteUnificado | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);

  const {
    termosSuspeitos,
    termosSilenciados,
    isTermoSilenciado,
    isTermoSuspeito,
    destaquesHabilitados,
    setDestaquesHabilitados,
  } = useGlossarioStore();

  // Carrega acervo completo uma única vez
  useEffect(() => {
    let ativo = true;
    async function carregar() {
      setCarregando(true);
      try {
        const dados = await carregarAcervoUnificado();
        if (ativo) {
          setTodosVerbetes(dados);
        }
      } catch (err) {
        console.error('Erro ao carregar acervo de glossário:', err);
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }
    carregar();
    return () => {
      ativo = false;
    };
  }, []);

  // Índice de letras para pílulas A-Z
  const indiceLetras = useMemo(() => {
    return gerarIndiceLetras(todosVerbetes);
  }, [todosVerbetes]);

  // Contagens para os badges das abas
  const contagens = useMemo(() => {
    let dic = 0;
    let tec = 0;
    let curso = 0;
    for (const v of todosVerbetes) {
      if (v.acervo === 'dicionario') dic++;
      if (v.acervo === 'tecnico') tec++;
      if (v.submodulosOndeAparece && v.submodulosOndeAparece.length > 0) curso++;
    }
    return {
      todos: todosVerbetes.length,
      dicionario: dic,
      tecnico: tec,
      suspeitos: termosSuspeitos.length,
      curso,
    };
  }, [todosVerbetes, termosSuspeitos]);

  // Aplica filtros aos verbetes
  const verbetesFiltrados = useMemo(() => {
    const filtros: FiltrosGlossario = {
      busca,
      letra: letraAtiva || undefined,
      acervo:
        abaAtiva === 'dicionario'
          ? 'dicionario'
          : abaAtiva === 'tecnico'
          ? 'tecnico'
          : 'todos',
      apenasMarcadosSuspeitos: abaAtiva === 'suspeitos',
      apenasComOcorrenciaNoCurso: abaAtiva === 'curso',
    };

    return filtrarVerbetes(todosVerbetes, filtros, {
      termosSuspeitos,
      termosSilenciados,
    });
  }, [todosVerbetes, busca, letraAtiva, abaAtiva, termosSuspeitos, termosSilenciados]);

  // Virtualização de lista
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(600);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setViewportHeight(entry.contentRect.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Ao trocar de filtro ou busca, reinicia o scroll para o topo
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      setScrollTop(0);
    }
  }, [busca, letraAtiva, abaAtiva]);

  const totalItems = verbetesFiltrados.length;
  const totalHeight = totalItems * ITEM_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN);
  const endIndex = Math.min(
    totalItems,
    Math.ceil((scrollTop + viewportHeight) / ITEM_HEIGHT) + OVERSCAN
  );
  const visibleItems = useMemo(() => {
    return verbetesFiltrados.slice(startIndex, endIndex).map((item, index) => ({
      item,
      virtualIndex: startIndex + index,
    }));
  }, [verbetesFiltrados, startIndex, endIndex]);

  const handleAbrirDetalhes = (verbete: VerbeteUnificado) => {
    setVerbeteSelecionado(verbete);
    setDrawerAberto(true);
  };

  const handleSelecionarRemissivo = (termoRemissivo: string) => {
    setBusca(termoRemissivo.trim());
    setLetraAtiva(null);
    setAbaAtiva('todos');
    setDrawerAberto(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 px-3 sm:px-4 text-ink font-sans">
      {/* Cabeçalho Editorial "Papel e Tinta" */}
      <header className="space-y-2 border-b border-border pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Glossário & Dicionário do Concurso
              </h1>
              <p className="text-xs sm:text-sm text-ink-2 font-sans">
                Dicionário Cunha & Cavalcanti (2008) integrado às siglas de TI, Arquivologia e IA do Edital Cargo 5.
              </p>
            </div>
          </div>

          {/* Toggle de destaques no leitor */}
          <div className="flex items-center gap-2 bg-surface-2 px-3 py-1.5 rounded-xl border border-border text-xs">
            <span className="text-ink-2 font-medium">Destaques no texto:</span>
            <button
              type="button"
              onClick={() => setDestaquesHabilitados(!destaquesHabilitados)}
              className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded cursor-pointer transition-colors ${
                destaquesHabilitados
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                  : 'bg-surface text-ink-2 border border-border'
              }`}
              aria-label="Ativar ou desativar sublinhados pontilhados de glossário na teoria"
            >
              {destaquesHabilitados ? 'ATIVOS' : 'DESL.'}
            </button>
          </div>
        </div>
      </header>

      {/* Barra de Pesquisa e Filtros */}
      <div className="space-y-3">
        {/* Campo de Busca Rápida */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-2">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="search"
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              if (e.target.value) setLetraAtiva(null);
            }}
            placeholder="Buscar termo, sigla ou conceito (ex: SQL, indexação, OAI-PMH, ontologia)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent text-sm text-ink placeholder:text-ink-2 outline-none transition-all shadow-2xs"
            aria-label="Campo de busca no glossário"
          />
          {busca && (
            <button
              type="button"
              onClick={() => setBusca('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-ink-2 hover:text-ink cursor-pointer"
              aria-label="Limpar campo de busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Abas de Acervo / Filtros */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-border/80 pb-2">
          <button
            type="button"
            onClick={() => {
              setAbaAtiva('todos');
              setLetraAtiva(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              abaAtiva === 'todos'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'bg-surface-2 text-ink-2 hover:text-ink hover:bg-surface border border-transparent'
            }`}
          >
            <span>Todos</span>
            <span className="font-mono text-[10px] opacity-80">({contagens.todos})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAbaAtiva('dicionario');
              setLetraAtiva(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              abaAtiva === 'dicionario'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'bg-surface-2 text-ink-2 hover:text-ink hover:bg-surface border border-transparent'
            }`}
          >
            <span>Dicionário (Cunha & Cavalcanti)</span>
            <span className="font-mono text-[10px] opacity-80">({contagens.dicionario})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAbaAtiva('tecnico');
              setLetraAtiva(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              abaAtiva === 'tecnico'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'bg-surface-2 text-ink-2 hover:text-ink hover:bg-surface border border-transparent'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Siglas do Edital (TI/IA)</span>
            <span className="font-mono text-[10px] opacity-80">({contagens.tecnico})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAbaAtiva('curso');
              setLetraAtiva(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              abaAtiva === 'curso'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'bg-surface-2 text-ink-2 hover:text-ink hover:bg-surface border border-transparent'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Ocorrências no Curso</span>
            <span className="font-mono text-[10px] opacity-80">({contagens.curso})</span>
          </button>

          {contagens.suspeitos > 0 && (
            <button
              type="button"
              onClick={() => {
                setAbaAtiva('suspeitos');
                setLetraAtiva(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
                abaAtiva === 'suspeitos'
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 border border-rose-500/20'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Marcados Suspeitos</span>
              <span className="font-mono text-[10px] opacity-80">({contagens.suspeitos})</span>
            </button>
          )}
        </div>

        {/* Pílulas Alfabéticas A-Z */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none py-1">
          {indiceLetras.map((item) => {
            const ativa = letraAtiva === item.letra;
            const desabilitada = item.quantidade === 0;

            return (
              <button
                key={item.letra}
                type="button"
                disabled={desabilitada}
                onClick={() => {
                  setLetraAtiva(ativa ? null : item.letra);
                  setBusca('');
                }}
                className={`min-w-[32px] h-8 px-1.5 rounded-md font-mono text-xs font-bold transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                  ativa
                    ? 'bg-accent text-accent-contrast shadow-2xs'
                    : desabilitada
                    ? 'opacity-30 cursor-not-allowed text-ink-2 bg-surface-2/40'
                    : 'bg-surface-2 hover:bg-surface text-ink border border-border/60 hover:border-accent'
                }`}
                title={`${item.letra}: ${item.quantidade} verbetes`}
                aria-label={`Filtrar letra ${item.letra} (${item.quantidade} verbetes)`}
              >
                {item.letra}
              </button>
            );
          })}
        </div>
      </div>

      {/* Informação sobre os resultados e filtros ativos */}
      <div className="flex items-center justify-between text-xs text-ink-2 font-mono px-1">
        <span>
          Mostrando <strong>{verbetesFiltrados.length}</strong> de {todosVerbetes.length} verbetes
          {letraAtiva && ` • Letra ${letraAtiva}`}
          {busca && ` • Busca: "${busca}"`}
        </span>
        {(busca || letraAtiva || abaAtiva !== 'todos') && (
          <button
            type="button"
            onClick={() => {
              setBusca('');
              setLetraAtiva(null);
              setAbaAtiva('todos');
            }}
            className="text-accent hover:underline cursor-pointer flex items-center gap-1"
          >
            <Filter className="w-3 h-3" />
            <span>Limpar filtros</span>
          </button>
        )}
      </div>

      {/* Lista Virtualizada de Verbetes */}
      {carregando ? (
        <div className="p-12 text-center space-y-3 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin mx-auto" />
          <p className="text-sm font-mono text-ink-2">Carregando acervo de 12.450 verbetes...</p>
        </div>
      ) : verbetesFiltrados.length === 0 ? (
        <div className="p-10 rounded-2xl bg-surface border border-dashed border-border text-center space-y-3">
          <BookOpen className="w-10 h-10 text-ink-2 mx-auto stroke-1" />
          <h3 className="font-serif text-lg font-bold text-ink">Nenhum verbete encontrado</h3>
          <p className="text-sm text-ink-2 max-w-md mx-auto">
            Não foram localizados registros com os critérios especificados. Tente pesquisar por sinônimos, siglas ou desmarcar filtros.
          </p>
          <button
            type="button"
            onClick={() => {
              setBusca('');
              setLetraAtiva(null);
              setAbaAtiva('todos');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-surface-2 hover:bg-surface border border-border text-ink cursor-pointer inline-flex items-center gap-2"
          >
            <span>Ver todos os 12.450 verbetes</span>
          </button>
        </div>
      ) : (
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="relative rounded-2xl border border-border bg-surface overflow-y-auto shadow-2xs"
          style={{ height: '620px' }}
          role="feed"
          aria-label="Lista virtualizada de verbetes do glossário"
        >
          {/* Espaçador total para scroll virtual */}
          <div style={{ height: `${totalHeight}px`, position: 'relative', width: '100%' }}>
            {visibleItems.map(({ item, virtualIndex }) => {
              const silenciado = isTermoSilenciado(item.id);
              const marcado = isTermoSuspeito(item.id);

              return (
                <div
                  key={item.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${ITEM_HEIGHT}px`,
                    transform: `translateY(${virtualIndex * ITEM_HEIGHT}px)`,
                  }}
                  className="p-3 border-b border-border/60 hover:bg-surface-2/60 transition-colors flex flex-col justify-center cursor-pointer group"
                  onClick={() => handleAbrirDetalhes(item)}
                  role="article"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleAbrirDetalhes(item);
                    }
                  }}
                  aria-label={`Verbete ${item.termo}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-serif text-base font-bold text-ink group-hover:text-accent transition-colors truncate">
                        {item.termo}
                      </span>

                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border shrink-0 ${
                          item.acervo === 'tecnico'
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                            : 'bg-surface-2 text-ink-2 border-border'
                        }`}
                      >
                        {item.acervo === 'tecnico' ? 'Edital Cargo 5' : 'Dicionário'}
                      </span>

                      {silenciado && (
                        <span className="text-[10px] font-mono text-ink-2 bg-surface-2 px-1.5 py-0.2 rounded border border-border shrink-0 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                          Já sei
                        </span>
                      )}

                      {marcado && (
                        <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 bg-rose-500/10 px-1.5 py-0.2 rounded border border-rose-500/30 shrink-0">
                          Suspeito
                        </span>
                      )}
                    </div>

                    {item.submodulosOndeAparece && item.submodulosOndeAparece.length > 0 && (
                      <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20 shrink-0">
                        {item.submodulosOndeAparece[0].numero}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-ink-2 line-clamp-2 font-sans leading-relaxed">
                    {item.definicao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Drawer de Detalhes do Verbete */}
      <VerbeteDetalhesDrawer
        verbete={verbeteSelecionado}
        isOpen={drawerAberto}
        onClose={() => setDrawerAberto(false)}
        onSelecionarTermoRemissivo={handleSelecionarRemissivo}
      />
    </div>
  );
};
