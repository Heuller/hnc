import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Search,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Building2,
  Bookmark,
  BookmarkCheck,
  History,
  Layers,
  BookMarked,
  Trash2,
} from 'lucide-react';
import { useDicionarioStore } from '../../store/useDicionarioStore';
import { useProgressStore } from '../../store/useProgressStore';
import { dicionarioService } from '../../domain/dicionario/dicionarioService';
import type { TermoDicionario } from '../../domain/dicionario/types';

export const GlossarioModal: React.FC = () => {
  const {
    isModalOpen,
    termoAtivo,
    termoQuery,
    isLoading,
    erro,
    historicoConsultas,
    fecharDicionario,
    pesquisar,
    abrirDicionarioComTermo,
  } = useDicionarioStore();

  const { termosSalvos, salvarTermoVocabulario, removerTermoVocabulario, isTermoSalvo } =
    useProgressStore();

  const [inputBusca, setInputBusca] = useState('');
  const [sugestoes, setSugestoes] = useState<TermoDicionario[]>([]);
  const [abaAtiva, setAbaAtiva] = useState<'termo' | 'baralho'>('termo');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      const q = termoQuery || (termoAtivo?.termo ?? '');
      queueMicrotask(() => {
        setInputBusca(q);
        setSugestoes(dicionarioService.buscarSugestoes(termoQuery || '', 6));
      });
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, termoQuery, termoAtivo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputBusca(val);
    setSugestoes(dicionarioService.buscarSugestoes(val, 6));
  };

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputBusca.trim()) {
      setAbaAtiva('termo');
      pesquisar(inputBusca.trim());
    }
  };

  const handleToggleSalvar = () => {
    if (!termoAtivo) return;
    const jaSalvo = isTermoSalvo(termoAtivo.id);
    if (jaSalvo) {
      removerTermoVocabulario(termoAtivo.id);
    } else {
      salvarTermoVocabulario({
        id: termoAtivo.id,
        termo: termoAtivo.termo,
        area: termoAtivo.area,
        dataSalvamento: new Date().toISOString(),
        definicaoCurta: termoAtivo.conceitoCanonico.slice(0, 160) + '...',
        armadilhaResumo: termoAtivo.armadilhaCebraspe.slice(0, 140) + '...',
      });
    }
  };

  if (!isModalOpen) return null;

  const salvo = termoAtivo ? isTermoSalvo(termoAtivo.id) : false;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={fecharDicionario}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo / Barra de Pesquisa */}
        <div className="p-4 border-b border-border bg-surface-2/60">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-amber-500/10 text-primary dark:text-amber-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink flex items-center gap-1.5">
                  <span>Dicionário Cebraspe & Biblioteconomia</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 dark:bg-amber-400/20 text-primary dark:text-amber-400">
                    Cunha & Lemos
                  </span>
                </h3>
                <p className="text-xs text-ink-2">
                  Vocabulário técnico canônico e armadilhas da banca examinadora
                </p>
              </div>
            </div>

            <button
              onClick={fecharDicionario}
              className="p-1.5 text-ink-2 hover:text-ink rounded-lg hover:bg-surface-2 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleBuscar} className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={inputBusca}
              onChange={handleInputChange}
              placeholder="Digite um termo (ex: desbastamento, RDA, URN LexML, OAIS)..."
              className="w-full pl-9 pr-24 py-2 text-sm rounded-xl border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-amber-400/30 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !inputBusca.trim()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 text-xs font-semibold text-white bg-primary dark:bg-amber-500 dark:text-ink rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer flex items-center gap-1"
            >
              <span>Buscar</span>
            </button>
          </form>

          {/* Alternador de Modo: Consulta vs. Meu Baralho */}
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-border/60">
            <button
              type="button"
              onClick={() => setAbaAtiva('termo')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                abaAtiva === 'termo'
                  ? 'bg-primary text-white dark:bg-amber-500 dark:text-ink shadow-sm'
                  : 'text-ink-2 hover:text-ink hover:bg-surface-2'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Verbete & Consulta</span>
            </button>

            <button
              type="button"
              onClick={() => setAbaAtiva('baralho')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                abaAtiva === 'baralho'
                  ? 'bg-primary text-white dark:bg-amber-500 dark:text-ink shadow-sm'
                  : 'text-ink-2 hover:text-ink hover:bg-surface-2'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Meu Baralho ({termosSalvos.length})</span>
            </button>
          </div>

          {/* Sugestões Rápidas de Autocomplete */}
          {abaAtiva === 'termo' && sugestoes.length > 0 && !termoAtivo && (
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span className="text-[11px] text-ink-2 flex items-center gap-1 mr-1">
                Sugestões:
              </span>
              {sugestoes.map((sug) => (
                <button
                  key={sug.id}
                  onClick={() => {
                    setAbaAtiva('termo');
                    abrirDicionarioComTermo(sug);
                  }}
                  className="px-2 py-0.5 text-xs rounded-md bg-surface border border-border text-ink hover:border-primary dark:hover:border-amber-400 hover:text-primary dark:hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {sug.termo}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Corpo com Conteúdo do Termo ou Baralho Salvo */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {abaAtiva === 'baralho' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <div>
                  <h4 className="text-sm font-bold text-ink">
                    Meu Baralho de Vocabulário Cebraspe ({termosSalvos.length})
                  </h4>
                  <p className="text-xs text-ink-2">
                    Conceitos e cascas de banana que você salvou para revisão rápida
                  </p>
                </div>
              </div>

              {termosSalvos.length === 0 ? (
                <div className="py-12 text-center space-y-2 border border-dashed border-border rounded-xl p-6">
                  <Bookmark className="w-8 h-8 mx-auto text-ink-2/40" />
                  <p className="text-sm font-semibold text-ink">Seu baralho está vazio</p>
                  <p className="text-xs text-ink-2 max-w-sm mx-auto">
                    Ao estudar os módulos, selecione qualquer palavra técnica com o mouse para consultar e clique em "Salvar Termo" para fixar aqui.
                  </p>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-1">
                  {termosSalvos.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl border border-border bg-surface-2/40 hover:bg-surface-2 transition-colors flex flex-col justify-between gap-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary dark:text-amber-400">
                            {item.area}
                          </span>
                          <h5 className="text-sm font-bold text-ink font-serif mt-0.5">
                            {item.termo}
                          </h5>
                        </div>
                        <button
                          onClick={() => removerTermoVocabulario(item.id)}
                          className="p-1 text-ink-2 hover:text-rose-600 rounded transition-colors cursor-pointer"
                          title="Remover do baralho"
                          aria-label={`Remover ${item.termo} do baralho`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-ink/80 font-serif line-clamp-2">
                        {item.definicaoCurta}
                      </p>

                      <div className="p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-[11px] text-rose-800 dark:text-rose-300">
                        <span className="font-bold">Armadilha: </span>
                        <span>{item.armadilhaResumo}</span>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            setAbaAtiva('termo');
                            pesquisar(item.termo);
                          }}
                          className="text-xs font-semibold text-primary dark:text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <span>Ver verbete completo</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {abaAtiva === 'termo' && (
            <>
          {isLoading && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-10 h-10 border-3 border-primary/20 border-t-primary dark:border-amber-400/20 dark:border-t-amber-400 rounded-full animate-spin" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-ink">
                  Consultando o Dicionário Canônico e Examinadores Cebraspe...
                </p>
                <p className="text-xs text-ink-2">
                  Recuperando conceito técnico, cascas de banana e aplicação legislativa
                </p>
              </div>
            </div>
          )}

          {erro && !isLoading && (
            <div className="p-4 rounded-xl border border-red-300 dark:border-red-900 bg-red-50/80 dark:bg-red-950/20 text-red-800 dark:text-red-300 text-sm flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Erro na consulta</p>
                <p className="text-xs mt-0.5">{erro}</p>
              </div>
            </div>
          )}

          {termoAtivo && !isLoading && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Cabeçalho do Termo */}
              <div className="flex items-start justify-between gap-3 border-b border-border pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-amber-400/10 dark:text-amber-400">
                      <Layers className="w-3 h-3" />
                      {termoAtivo.area}
                    </span>
                    {termoAtivo.moduloRelacionado && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-2 text-ink-2 border border-border">
                        {termoAtivo.moduloRelacionado}
                      </span>
                    )}
                    {termoAtivo.geradoPorIA && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        <Sparkles className="w-3 h-3" />
                        Aprofundado por IA
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight font-serif">
                    {termoAtivo.termo}
                  </h2>
                </div>

                <button
                  onClick={handleToggleSalvar}
                  className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                    salvo
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                      : 'bg-surface-2 hover:bg-surface border-border text-ink-2 hover:text-ink'
                  }`}
                  title={salvo ? 'Remover do meu baralho' : 'Salvar no meu baralho de vocabulário'}
                >
                  {salvo ? (
                    <>
                      <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="hidden sm:inline">Salvo no Baralho</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4" />
                      <span className="hidden sm:inline">Salvar Termo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bloco 1: Definição Canônica */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-primary dark:text-amber-400" />
                  Conceito & Definição Canônica
                </h4>
                <div className="p-4 rounded-xl bg-surface-2/40 border border-border text-sm text-ink leading-relaxed font-serif">
                  {termoAtivo.conceitoCanonico}
                </div>
              </div>

              {/* Bloco 2: Armadilha da Banca Cebraspe */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  Como o Cebraspe Tenta Te Enganar (Armadilha Mapeada)
                </h4>
                <div className="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 text-sm text-rose-900 dark:text-rose-200 leading-relaxed">
                  {termoAtivo.armadilhaCebraspe}
                </div>
              </div>

              {/* Bloco 3: Aplicação na Câmara dos Deputados */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-amber-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Aplicação na Câmara dos Deputados & Rotina Legislativa
                </h4>
                <div className="p-4 rounded-xl bg-primary/5 dark:bg-amber-400/5 border border-primary/20 dark:border-amber-400/20 text-sm text-ink leading-relaxed">
                  {termoAtivo.aplicacaoCamara}
                </div>
              </div>

              {/* Rodapé do Card: Fonte Bibliográfica */}
              <div className="pt-2 text-xs text-ink-2 flex items-center justify-between border-t border-border">
                <span className="italic">Fonte: {termoAtivo.fonteReferencia}</span>
                <button
                  onClick={() => pesquisar(termoAtivo.termo + ' Cebraspe')}
                  className="inline-flex items-center gap-1 text-xs text-primary dark:text-amber-400 hover:underline cursor-pointer font-semibold"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Aprofundar com IA</span>
                </button>
              </div>
            </div>
          )}

          {/* Histórico Recente e Termos Mais Consultados */}
          {historicoConsultas.length > 1 && !isLoading && (
            <div className="pt-4 border-t border-border">
              <h5 className="text-xs font-semibold text-ink-2 mb-2 flex items-center gap-1.5">
                <History className="w-3.5 h-3.5" />
                Histórico Recente de Consultas:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {historicoConsultas.slice(0, 8).map((hist) => (
                  <button
                    key={hist}
                    onClick={() => pesquisar(hist)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-surface-2 hover:bg-surface border border-border text-ink hover:text-primary dark:hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {hist}
                  </button>
                ))}
              </div>
            </div>
          )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
