import React, { useState, useMemo } from 'react';
import { BookOpen, Search, AlertTriangle, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { dicionarioService } from '../../domain/dicionario/dicionarioService';
import { useDicionarioStore } from '../../store/useDicionarioStore';
import type { TermoDicionario } from '../../domain/dicionario/types';

interface GlossarioDoModuloProps {
  moduloId: string;
  moduloCodigo?: string;
  moduloTitulo?: string;
}

export const GlossarioDoModulo: React.FC<GlossarioDoModuloProps> = ({
  moduloId,
  moduloCodigo = 'Módulo',
  moduloTitulo = '',
}) => {
  const [buscaLocal, setBuscaLocal] = useState('');
  const [termoExpandidoId, setTermoExpandidoId] = useState<string | null>(null);
  const { abrirDicionarioComTermo } = useDicionarioStore();

  const todosTermosModulo = useMemo(() => {
    return dicionarioService.obterTermosPorModulo(moduloId);
  }, [moduloId]);

  const termosFiltrados = useMemo(() => {
    if (!buscaLocal.trim()) return todosTermosModulo;
    const q = buscaLocal.toLowerCase().trim();
    return todosTermosModulo.filter(
      (t) =>
        t.termo.toLowerCase().includes(q) ||
        (t.sigla && t.sigla.toLowerCase().includes(q)) ||
        (t.definicao_curta && t.definicao_curta.toLowerCase().includes(q)) ||
        (t.armadilhaCebraspe && t.armadilhaCebraspe.toLowerCase().includes(q))
    );
  }, [todosTermosModulo, buscaLocal]);

  return (
    <section
      aria-label={`Glossário do ${moduloCodigo}`}
      className="rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-editorial-sm space-y-6"
    >
      {/* Cabeçalho do Glossário do Módulo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20 uppercase tracking-wider">
              Glossário Canônico do {moduloCodigo}
            </span>
            <span className="font-mono text-xs text-ink-2">
              {todosTermosModulo.length} {todosTermosModulo.length === 1 ? 'termo auditado' : 'termos auditados'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-ink">
            Vocabulário Técnico & Armadilhas Cebraspe
          </h3>
          <p className="text-xs text-ink-2 font-sans max-w-2xl leading-relaxed">
            Termos primários essenciais de {moduloTitulo || moduloCodigo}, fundamentados na doutrina canônica e protegidos contra distratores recorrentes da banca.
          </p>
        </div>

        {/* Campo de Busca Rápida Local */}
        <div className="relative sm:w-64">
          <Search className="w-3.5 h-3.5 text-ink-2 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={buscaLocal}
            onChange={(e) => setBuscaLocal(e.target.value)}
            placeholder={`Filtrar termos de ${moduloCodigo}...`}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-surface-2 border border-border text-xs text-ink placeholder:text-ink-2/60 focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Grade de Termos */}
      {termosFiltrados.length === 0 ? (
        <div className="p-8 rounded-xl border border-dashed border-border bg-surface-2 text-center space-y-2">
          <BookOpen className="w-8 h-8 text-ink-2 mx-auto opacity-50" />
          <p className="text-xs text-ink font-semibold">Nenhum termo encontrado para &quot;{buscaLocal}&quot;</p>
          <p className="text-[11px] text-ink-2">
            Verifique a grafia ou consulte a busca global do Glossário Geral pelo botão no topo da página.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {termosFiltrados.map((termo: TermoDicionario) => {
            const isExpandido = termoExpandidoId === termo.id;

            return (
              <article
                key={termo.id}
                className="rounded-xl border border-border bg-surface-2/60 hover:bg-surface-2 p-4 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  {/* Título do Termo e Sigla */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        className="text-sm font-serif font-bold text-ink hover:text-accent cursor-pointer transition-colors"
                        onClick={() => abrirDicionarioComTermo(termo)}
                      >
                        {termo.termo}
                      </h4>
                      {termo.sigla && (
                        <span className="font-mono text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded mr-1.5 border border-accent/20">
                          {termo.sigla}
                        </span>
                      )}
                      {termo.area && (
                        <span className="text-[10px] font-sans text-ink-2">
                          {termo.area}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => abrirDicionarioComTermo(termo)}
                      title="Abrir no Glossário Completo"
                      aria-label={`Ver detalhes completos de ${termo.termo}`}
                      className="text-ink-2 hover:text-accent p-1 rounded hover:bg-surface border border-transparent hover:border-border transition-colors cursor-pointer shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Definição Curta */}
                  <p className="text-xs text-ink-2 font-sans leading-relaxed line-clamp-3">
                    {termo.definicao_curta || termo.conceitoCanonico}
                  </p>

                  {/* Armadilha da Banca Cebraspe */}
                  {termo.armadilhaCebraspe && (
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-ink space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>Armadilha da Banca Cebraspe:</span>
                      </div>
                      <p className="text-ink-2 leading-relaxed">
                        {isExpandido
                          ? termo.armadilhaCebraspe
                          : `${termo.armadilhaCebraspe.slice(0, 140)}${termo.armadilhaCebraspe.length > 140 ? '...' : ''}`}
                      </p>
                    </div>
                  )}

                  {/* Detalhes Expandidos (Aplicação e Fonte) */}
                  {isExpandido && (
                    <div className="pt-2 border-t border-border space-y-2 text-[11px]">
                      {termo.aplicacaoCamara && (
                        <div>
                          <span className="font-bold text-ink">Aplicação na Câmara dos Deputados: </span>
                          <span className="text-ink-2">{termo.aplicacaoCamara}</span>
                        </div>
                      )}
                      {termo.fonteReferencia && (
                        <div>
                          <span className="font-bold text-ink">Fonte Primária: </span>
                          <span className="text-ink-2 font-mono text-[10px]">{termo.fonteReferencia}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Rodapé do Card do Termo */}
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px]">
                  <button
                    type="button"
                    onClick={() => setTermoExpandidoId(isExpandido ? null : termo.id)}
                    className="text-accent hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpandido ? 'Menos detalhes' : 'Ver fonte e armadilha completa'}</span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${isExpandido ? 'rotate-90' : ''}`} />
                  </button>

                  <span className="font-mono text-[10px] text-ink-2/70 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    Canônico
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
