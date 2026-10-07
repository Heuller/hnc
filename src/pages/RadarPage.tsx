import React, { useState } from 'react';
import { COURSE_REGISTRY } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { Badge } from '../components/common/Badge';
import {
  Radar,
  AlertTriangle,
  BookOpen,
  Filter,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { BalancaCebraspeIllustration } from '../components/common/Illustrations';

import { deduplicarSubmodulos } from '../domain/progressCore';

export const RadarPage: React.FC = () => {
  const [selectedMacro, setSelectedMacro] = useState<string>('todos');
  const [selectedSub, setSelectedSub] = useState<string>('todos');
  const [tipoFiltro, setTipoFiltro] = useState<'todos' | 'alertas' | 'pegadinhas' | 'questoes'>('todos');
  const [revelados, setRevelados] = useState<Record<string, boolean>>({});

  const toggleRevelar = (id: string) => {
    setRevelados((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allSubmodules = COURSE_REGISTRY.flatMap((m) =>
    deduplicarSubmodulos(m.modulosFilhos).map((s) => ({
      ...s,
      macroCodigo: m.codigo,
      macroTitulo: m.titulo,
    }))
  );

  // Coleta Alertas Cebraspe Reais (strings) de todos os módulos
  const todosAlertas = allSubmodules.flatMap((sub) =>
    sub.alertasCebraspe.map((texto, i) => ({
      id: `alerta-${sub.numero}-${i}`,
      subId: sub.numero,
      macroCodigo: sub.macroCodigo,
      subTitulo: sub.titulo,
      texto,
    }))
  );

  // Coleta Pegadinhas dos Mnemônicos de todos os módulos
  const todasPegadinhas = allSubmodules.flatMap((sub) =>
    sub.mnemonicos.pegadinhas.map((p, i) => ({
      id: `pegadinha-${sub.numero}-${i}`,
      subId: sub.numero,
      macroCodigo: sub.macroCodigo,
      subTitulo: sub.titulo,
      afirmacao: p.afirmacao,
      gabarito: p.gabarito,
      porQue: p.porQue,
    }))
  );

  // Coleta Questões com Armadilhas Explícitas de Todos os 10 Simulados Cebraspe (1.000 questões)
  const todasQuestoesSimulados = SIMULADOS_REGISTRY.flatMap((sim) => sim.questoes);
  const questoesArmadilha = todasQuestoesSimulados
    .filter((q) => q.armadilhaBanca && q.armadilhaBanca.trim().length > 0)
    .map((q) => ({
      id: q.id,
      numero: q.numero,
      subId: q.submoduloId,
      macroCodigo: q.macroModuloId,
      item: q.item,
      gabarito: q.gabarito,
      armadilhaBanca: q.armadilhaBanca,
      justificativa: q.justificativa,
      fonte: q.fonteOriginal?.descricao || 'HNC — Inédita Cebraspe',
    }));

  // Filtragem combinada por macro-módulo e submódulo
  const alertasFiltrados = todosAlertas.filter((a) => {
    const macroOk = selectedMacro === 'todos' || a.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || a.subId === selectedSub;
    return macroOk && subOk;
  });

  const pegadinhasFiltradas = todasPegadinhas.filter((p) => {
    const macroOk = selectedMacro === 'todos' || p.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || p.subId === selectedSub;
    return macroOk && subOk;
  });

  const questoesFiltradas = questoesArmadilha.filter((q) => {
    const macroOk = selectedMacro === 'todos' || q.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || q.subId === selectedSub;
    return macroOk && subOk;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Cabeçalho do Radar */}
      <section className="border-b border-border pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Radar className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              Mapeamento Doutrinário e Jurisprudência da Banca
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
            Radar Cebraspe: Padrões e Armadilhas
          </h1>
          <p className="text-ink-2 font-serif text-sm sm:text-base leading-relaxed">
            Catálogo estruturado de armadilhas recorrentes, distinções conceituais críticas e
            regras de julgamento da banca Cebraspe, extraídas diretamente das fontes doutrinárias e
            questões aplicadas.
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-center p-3 rounded-2xl bg-surface-2 border border-border/80 shadow-2xs shrink-0">
          <BalancaCebraspeIllustration className="w-24 h-24 text-accent drop-shadow-sm" />
        </div>
      </section>

      {/* Barra de Filtros */}
      <section
        aria-label="Filtros do Radar"
        className="bg-surface rounded-xl border border-border p-4 shadow-xs space-y-3"
      >
        <div className="flex items-center justify-between gap-2 text-xs font-sans font-semibold text-ink-2 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-accent" />
            <span>Filtros Curriculares</span>
          </div>
          <span className="font-mono text-[11px] text-ink-3 lowercase font-normal">
            {selectedMacro === 'todos' ? 'todos os 14 blocos' : `bloco ${selectedMacro}`}
          </span>
        </div>

        {/* Filtro por Bloco / Macro-Módulo */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-sans font-medium text-ink-2">Bloco Curricular:</div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => {
                setSelectedMacro('todos');
                setSelectedSub('todos');
              }}
              className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors ${
                selectedMacro === 'todos'
                  ? 'bg-primary text-primary-text border-primary font-semibold shadow-2xs'
                  : 'bg-surface-2 border-border text-ink hover:text-ink'
              }`}
            >
              Todos os Blocos
            </button>
            {COURSE_REGISTRY.map((macro) => (
              <button
                key={macro.id}
                type="button"
                onClick={() => {
                  setSelectedMacro(macro.codigo);
                  setSelectedSub('todos');
                }}
                className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors ${
                  selectedMacro === macro.codigo
                    ? 'bg-primary text-primary-text border-primary font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink hover:text-ink'
                }`}
              >
                {macro.codigo}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Submódulo (Contextual e Sanfonado) */}
        <div className="space-y-1.5 pt-1.5 border-t border-border/40">
          <div className="flex items-center justify-between text-[11px] font-sans font-medium text-ink-2">
            <span>Submódulo Contextual:</span>
            {selectedMacro === 'todos' && (
              <span className="text-[10px] text-ink-3 italic">
                (Selecione um bloco acima para detalhar submódulos específicos)
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedSub('todos')}
              className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors ${
                selectedSub === 'todos'
                  ? 'bg-accent text-accent-text border-accent font-semibold'
                  : 'bg-surface-2 border-border text-ink hover:text-ink'
              }`}
            >
              {selectedMacro === 'todos' ? `Todos os Submódulos (${allSubmodules.length})` : `Todos de ${selectedMacro}`}
            </button>
            {selectedMacro !== 'todos' &&
              allSubmodules
                .filter((s) => s.macroCodigo === selectedMacro)
                .map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSub(sub.numero)}
                    className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors ${
                      selectedSub === sub.numero
                        ? 'bg-accent text-accent-text border-accent font-semibold'
                        : 'bg-surface-2 border-border text-ink hover:text-ink'
                    }`}
                  >
                    {sub.numero}
                  </button>
                ))}
          </div>
        </div>

        {/* Filtro por Tipo */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
          <button
            type="button"
            onClick={() => setTipoFiltro('todos')}
            className={`py-1 px-2.5 rounded text-xs font-sans ${
              tipoFiltro === 'todos'
                ? 'bg-surface border border-accent text-accent font-semibold'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Todos os Registros
          </button>
          <button
            type="button"
            onClick={() => setTipoFiltro('alertas')}
            className={`py-1 px-2.5 rounded text-xs font-sans ${
              tipoFiltro === 'alertas'
                ? 'bg-surface border border-accent text-accent font-semibold'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Padrões Decisórios ({alertasFiltrados.length})
          </button>
          <button
            type="button"
            onClick={() => setTipoFiltro('pegadinhas')}
            className={`py-1 px-2.5 rounded text-xs font-sans ${
              tipoFiltro === 'pegadinhas'
                ? 'bg-surface border border-accent text-accent font-semibold'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Pares de Pegadinha ({pegadinhasFiltradas.length})
          </button>
          <button
            type="button"
            onClick={() => setTipoFiltro('questoes')}
            className={`py-1 px-2.5 rounded text-xs font-sans ${
              tipoFiltro === 'questoes'
                ? 'bg-surface border border-accent text-accent font-semibold'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Itens da Banca com Armadilha ({questoesFiltradas.length})
          </button>
        </div>
      </section>

      {/* Conteúdo do Radar */}
      <div className="space-y-6">
        {/* Seção 1: Padrões Decisórios da Banca (Alertas) */}
        {(tipoFiltro === 'todos' || tipoFiltro === 'alertas') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-theme-alerta" />
              <h2 className="font-sans font-bold text-ink text-lg">
                Padrões Decisórios e Alertas Conceituais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alertasFiltrados.map((alerta) => (
                <div
                  key={alerta.id}
                  className="bg-surface rounded-xl border border-theme-alerta/30 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-theme-alerta bg-theme-alerta-soft px-2 py-0.5 rounded">
                        Submódulo {alerta.subId}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink font-serif leading-relaxed">
                      {alerta.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Seção 2: Pares de Pegadinha (Afirmação x Julgamento Cebraspe) */}
        {(tipoFiltro === 'todos' || tipoFiltro === 'pegadinhas') && (
          <section className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <h2 className="font-sans font-bold text-ink text-lg">
                Armadilhas Sintáticas e Vocabulares
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {pegadinhasFiltradas.map((peg) => {
                const isRevelado = !!revelados[peg.id];

                return (
                  <div
                    key={peg.id}
                    className="bg-surface rounded-xl border border-border p-4.5 shadow-xs transition-colors hover:border-accent/40"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-accent">
                        Submódulo {peg.subId}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleRevelar(peg.id)}
                        className="text-xs font-sans font-medium text-accent hover:text-ink flex items-center gap-1"
                      >
                        {isRevelado ? (
                          <>
                            <span>Ocultar gabarito</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Julgar e ver explicação</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-serif italic text-ink text-sm sm:text-base leading-relaxed pl-3 border-l-2 border-border my-2">
                      "{peg.afirmacao}"
                    </p>

                    {isRevelado && (
                      <div className="mt-3 pt-3 border-t border-border space-y-2 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={peg.gabarito === 'C' ? 'certo' : 'errado'}
                            size="sm"
                          >
                            {`Gabarito Cebraspe: ${
                              peg.gabarito === 'C' ? 'CERTO' : 'ERRADO'
                            }`}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-ink-2 font-sans leading-relaxed">
                          <strong>Mecanismo da armadilha:</strong> {peg.porQue}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Seção 3: Itens da Banca com Armadilha Auditada */}
        {(tipoFiltro === 'todos' || tipoFiltro === 'questoes') && (
          <section className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-accent" />
              <h2 className="font-sans font-bold text-ink text-lg">
                Questões Canônicas com Análise de Distrator
              </h2>
            </div>

            <div className="space-y-4">
              {questoesFiltradas.slice(0, 15).map((q) => {
                const isRevelado = !!revelados[q.id];

                return (
                  <div
                    key={q.id}
                    className="bg-surface rounded-xl border border-border p-5 shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-ink-2">
                        Item {q.numero} • Submódulo {q.subId}
                      </span>
                      <span className="font-mono text-[11px] text-ink-2 truncate max-w-[200px]">
                        {q.fonte}
                      </span>
                    </div>

                    <p className="font-serif text-ink text-sm sm:text-base leading-relaxed my-3">
                      {q.item}
                    </p>

                    <div className="p-3 bg-theme-alerta-soft/40 border-l-2 border-theme-alerta rounded-r-lg mb-3">
                      <span className="font-sans font-bold text-xs text-theme-alerta block mb-0.5">
                        Armadilha da Banca:
                      </span>
                      <p className="text-xs sm:text-sm text-theme-alerta font-sans leading-snug">
                        {q.armadilhaBanca}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => toggleRevelar(q.id)}
                        className="text-xs font-sans font-medium text-accent hover:text-ink flex items-center gap-1"
                      >
                        {isRevelado ? (
                          <>
                            <span>Ocultar fundamentação</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Ver gabarito e fundamentação</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      {isRevelado && (
                        <Badge
                          variant={q.gabarito === 'C' ? 'certo' : 'errado'}
                          size="sm"
                        >
                          {`Gabarito: ${q.gabarito === 'C' ? 'CERTO' : 'ERRADO'}`}
                        </Badge>
                      )}
                    </div>

                    {isRevelado && (
                      <div className="mt-3 p-3.5 bg-surface-2 rounded-lg border border-border text-xs sm:text-sm text-ink font-serif leading-relaxed animate-fadeIn">
                        {q.justificativa}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
