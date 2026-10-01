import React, { useState, useMemo } from 'react';
import { 
  FileCheck2, 
  CheckCircle2, 
  XCircle, 
  Filter, 
  BookOpen, 
  ArrowLeft,
  ShieldAlert,
  Search,
  ExternalLink
} from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';
import rascunhosData from '../content/drafts/rascunho_itens_verificacao.json';

interface DraftItem {
  id: string;
  submoduloId: string;
  submoduloNumero: string;
  pergunta: string;
  item: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  doutrinaReferencia: string;
}

export const DevRascunhosPage: React.FC = () => {
  const { setActiveView, setSelectedSubmodule } = useNavigationStore();
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string>('todos');
  const [selectedGabaritoFilter, setSelectedGabaritoFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const items: DraftItem[] = rascunhosData as DraftItem[];

  // Estatísticas
  const stats = useMemo(() => {
    const total = items.length;
    const certos = items.filter((i) => i.gabarito === 'C').length;
    const errados = items.filter((i) => i.gabarito === 'E').length;
    const submodulos = new Set(items.map((i) => i.submoduloId)).size;
    return { total, certos, errados, submodulos };
  }, [items]);

  // Itens filtrados
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Filtro por módulo (extrai o número antes do primeiro ponto: "1.1" -> "1")
      if (selectedModuleFilter !== 'todos') {
        const modNum = item.submoduloId.split('.')[0];
        if (modNum !== selectedModuleFilter) return false;
      }

      // Filtro por gabarito
      if (selectedGabaritoFilter !== 'todos' && item.gabarito !== selectedGabaritoFilter) {
        return false;
      }

      // Busca textual
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchItem = item.item.toLowerCase().includes(query);
        const matchJust = item.justificativa.toLowerCase().includes(query);
        const matchDoutrina = item.doutrinaReferencia.toLowerCase().includes(query);
        const matchSub = item.submoduloId.toLowerCase().includes(query);
        const matchPergunta = item.pergunta.toLowerCase().includes(query);
        if (!matchItem && !matchJust && !matchDoutrina && !matchSub && !matchPergunta) {
          return false;
        }
      }

      return true;
    });
  }, [items, selectedModuleFilter, selectedGabaritoFilter, searchQuery]);

  const handleGoToSubmodule = (subId: string) => {
    setSelectedSubmodule(subId);
    setActiveView('teoria');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2 px-1 sm:px-0">
      {/* Botão de retorno rápido */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveView('painel')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-theme-ink-2 hover:text-theme-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Painel</span>
        </button>

        <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-bold">
          Ambiente de Homologação DEV
        </span>
      </div>

      {/* Banner Principal de Homologação */}
      <div className="card-editorial p-6 sm:p-8 space-y-4 border-l-4 border-l-accent">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-accent-soft text-theme-ink border border-theme-accent text-xs font-bold uppercase tracking-wider">
          <FileCheck2 className="w-3.5 h-3.5 text-theme-accent" />
          <span>Rascunho de Itens de Verificação • Fase R4</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-theme-ink tracking-tight m-0">
          Homologação de Itens Inéditos Cebraspe
        </h1>

        <p className="font-serif-reading text-base text-theme-ink-2 leading-relaxed m-0">
          Para garantir rigor matemático ao patamar de <strong className="text-theme-ink">70% de acerto</strong> exigido para a conclusão de submódulo e desbloqueio do Simulado de 100 Questões, foram redigidos <strong className="text-theme-ink">39 itens de verificação inéditos</strong> (1 item adicional para cada um dos 39 submódulos que possuíam apenas 2 micro-checkpoints).
        </p>

        <div className="p-4 rounded-lg bg-surface-2 border border-border flex items-start gap-3 text-xs text-ink-2">
          <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-ink block">Portão de Controle da Fase R4:</span>
            <span>
              Estes itens estão salvos no arquivo <code className="font-mono bg-surface px-1.5 py-0.5 rounded text-accent border border-border">src/content/drafts/rascunho_itens_verificacao.json</code>. Revise o gabarito, a assertiva e a fundamentação doutrinária abaixo antes da mesclagem definitiva aos arquivos de submódulos.
            </span>
          </div>
        </div>

        {/* Métricas dos Rascunhos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold block">Total Itens</span>
            <span className="text-2xl font-black text-ink">{stats.total}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold block">Gabarito CERTO</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{stats.certos}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold block">Gabarito ERRADO</span>
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{stats.errados}</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-2 border border-border text-center">
            <span className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold block">Submódulos</span>
            <span className="text-2xl font-black text-ink">{stats.submodulos}/40</span>
          </div>
        </div>
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="card-editorial p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-ink-2 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por termo, autor, norma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-surface-2 border border-border text-ink focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-ink-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Gabarito:
            </span>
            <button
              onClick={() => setSelectedGabaritoFilter('todos')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                selectedGabaritoFilter === 'todos' ? 'bg-primary text-primary-text' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Todos ({items.length})
            </button>
            <button
              onClick={() => setSelectedGabaritoFilter('C')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                selectedGabaritoFilter === 'C' ? 'bg-emerald-600 text-white' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Certo ({stats.certos})
            </button>
            <button
              onClick={() => setSelectedGabaritoFilter('E')}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                selectedGabaritoFilter === 'E' ? 'bg-amber-600 text-white' : 'bg-surface-2 text-ink-2 hover:text-ink'
              }`}
            >
              Errado ({stats.errados})
            </button>
          </div>
        </div>

        {/* Abas por Módulo (M1 a M10) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs border-t border-border pt-3">
          <span className="font-bold text-ink-2 shrink-0 mr-1">Módulo:</span>
          {['todos', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModuleFilter(m)}
              className={`px-2.5 py-1 rounded font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                selectedModuleFilter === m
                  ? 'bg-accent text-accent-text font-bold'
                  : 'bg-surface-2 text-ink-2 hover:text-ink border border-transparent hover:border-border'
              }`}
            >
              {m === 'todos' ? 'Todos' : `M${m}`}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Itens */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-ink-2 px-1">
          <span>Mostrando <strong>{filteredItems.length}</strong> de {items.length} itens redigidos</span>
          {selectedModuleFilter !== 'todos' && <span>Filtrado por: Módulo {selectedModuleFilter}</span>}
        </div>

        {filteredItems.length === 0 ? (
          <div className="card-editorial p-12 text-center text-ink-2 text-sm">
            Nenhum item encontrado com os filtros aplicados.
          </div>
        ) : (
          filteredItems.map((draft, idx) => {
            const isCerto = draft.gabarito === 'C';
            return (
              <div 
                key={draft.id}
                className="card-editorial p-5 sm:p-6 space-y-4 border border-border hover:border-border-strong transition-all relative overflow-hidden"
              >
                {/* Faixa lateral indicativa de gabarito */}
                <div 
                  className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                    isCerto ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} 
                />

                {/* Cabeçalho do Card */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface-2 text-accent border border-border">
                      Submódulo {draft.submoduloId}
                    </span>
                    <span className="text-xs text-ink-2 font-mono">
                      #{draft.id} · Item {idx + 1} de {filteredItems.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleGoToSubmodule(draft.submoduloId)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:underline cursor-pointer"
                      title={`Ir para a teoria do submódulo ${draft.submoduloId}`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Teoria</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
                        isCerto
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {isCerto ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Gabarito: CERTO</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Gabarito: ERRADO</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Título / Eixo temático do Checkpoint */}
                <h3 className="text-sm font-bold text-ink m-0">
                  {draft.pergunta}
                </h3>

                {/* Assertiva (Estilo Cebraspe) */}
                <div className="p-4 rounded-lg bg-surface-2 border border-border/80">
                  <p className="font-serif-reading text-base sm:text-[17px] text-ink leading-relaxed m-0 select-text">
                    {draft.item}
                  </p>
                </div>

                {/* Justificativa e Doutrina */}
                <div className="space-y-2 text-xs pt-1">
                  <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                    <span className="font-bold text-ink uppercase tracking-wider text-[11px] block">
                      Justificativa Técnica:
                    </span>
                    <p className="text-ink-2 font-serif-reading text-sm leading-relaxed m-0">
                      {draft.justificativa}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-ink-2 font-mono text-[11px]">
                    <span className="font-semibold text-accent">Doutrina / Norma de Referência:</span>
                    <span>{draft.doutrinaReferencia}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
