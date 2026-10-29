import { useSessionPreference } from '../hooks/useSessionPreference';
import React, { useState, useEffect, useRef } from 'react';
import { COURSE_REGISTRY } from '../content/registry';
import { SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { obterInfoProveniencia } from '../domain/proveniencia';
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

export const RadarPage: React.FC = () => {
  const [selectedBloco, setSelectedBloco] = useSessionPreference<string>('radar:selectedBloco', 'todos');
  const [selectedMacro, setSelectedMacro] = useSessionPreference<string>('radar:selectedMacro', 'todos');
  const [selectedSub, setSelectedSub] = useSessionPreference<string>('radar:selectedSub', 'todos');
  const [tipoFiltro, setTipoFiltro] = useSessionPreference<'todos' | 'alertas' | 'pegadinhas' | 'questoes'>('radar:tipo', 'questoes');
  const [revelados, setRevelados] = useState<Record<string, boolean>>({});

  const [busca, setBusca] = useSessionPreference<string>('radar:busca', '');
  const [limite, setLimite] = useSessionPreference<number>('radar:limite', 12);
  const chaveFiltros = [selectedBloco, selectedMacro, selectedSub, tipoFiltro, busca].join('|');
  const filtrosAnteriores = useRef(chaveFiltros);
  useEffect(() => {
    if (filtrosAnteriores.current !== chaveFiltros) { filtrosAnteriores.current = chaveFiltros; setLimite(12); }
  }, [chaveFiltros, setLimite]);
  const contemBusca = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .includes(busca.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim());

  const BLOCOS_EDITAL = [
    { id: 'todos', label: 'Todos os Blocos', desc: 'Edital Completo (M1 a M14)', modulos: [] as string[] },
    { id: 'A', label: 'Bloco A', desc: 'Tratamento & Representação', modulos: ['M1', 'M2', 'M3'] },
    { id: 'B', label: 'Bloco B', desc: 'Serviços & Referência', modulos: ['M4', 'M5'] },
    { id: 'C', label: 'Bloco C', desc: 'Tecnologias & Preservação Digital', modulos: ['M6', 'M7', 'M8'] },
    { id: 'D', label: 'Bloco D', desc: 'Gestão de UIs & Políticas', modulos: ['M9', 'M10'] },
    { id: 'E', label: 'Bloco E', desc: 'Legislação & Regimento da CD', modulos: ['M11', 'M12', 'M13'] },
    { id: 'BAS', label: 'Básicos', desc: 'Governança & Ciência de Dados', modulos: ['M14'] },
  ];

  const toggleRevelar = (id: string) => {
    setRevelados((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allSubmodules = COURSE_REGISTRY.flatMap((m) =>
    m.modulosFilhos.map((s) => ({
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
      fonte: obterInfoProveniencia(q.fonteOriginal).rotulo,
    }));

  const blocoAtivo = BLOCOS_EDITAL.find((b) => b.id === selectedBloco);

  // Filtragem combinada por bloco oficial, macro-módulo e submódulo
  const alertasFiltrados = todosAlertas.filter((a) => {
    const blocoOk = selectedBloco === 'todos' || (blocoAtivo?.modulos.includes(a.macroCodigo) ?? false);
    const macroOk = selectedMacro === 'todos' || a.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || a.subId === selectedSub;
    return blocoOk && macroOk && subOk && contemBusca(`${a.texto} ${a.subTitulo}`);
  });

  const pegadinhasFiltradas = todasPegadinhas.filter((p) => {
    const blocoOk = selectedBloco === 'todos' || (blocoAtivo?.modulos.includes(p.macroCodigo) ?? false);
    const macroOk = selectedMacro === 'todos' || p.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || p.subId === selectedSub;
    return blocoOk && macroOk && subOk && contemBusca(`${p.afirmacao} ${p.porQue} ${p.subTitulo}`);
  });

  const questoesFiltradas = questoesArmadilha.filter((q) => {
    const blocoOk = selectedBloco === 'todos' || (blocoAtivo?.modulos.includes(q.macroCodigo) ?? false);
    const macroOk = selectedMacro === 'todos' || q.macroCodigo === selectedMacro;
    const subOk = selectedSub === 'todos' || q.subId === selectedSub;
    return blocoOk && macroOk && subOk && contemBusca(`${q.item} ${q.justificativa}`);
  });

  const macrosDisponiveis = selectedBloco === 'todos'
    ? COURSE_REGISTRY
    : COURSE_REGISTRY.filter((m) => blocoAtivo?.modulos.includes(m.codigo));

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
          <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-normal">
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

      {/* Banner de Conformidade Editalícia (Itens 13.33 a 13.34.1) */}
      <section
        aria-label="Marco Temporal Normativo do Edital"
        className="bg-surface-2 border border-border/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5 sm:mt-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xs font-sans font-bold text-ink uppercase tracking-wider flex items-center gap-2 flex-wrap">
              <span>Marco Temporal Normativo do Edital nº 1/2026 (Itens 13.33 a 13.34.1)</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/15 text-accent font-semibold">
                Auditado Cebraspe
              </span>
            </h2>
            <p className="text-xs text-ink-2 font-serif leading-relaxed">
              Legislação e normas técnicas consideradas estritamente em vigor até a publicação do <strong>Edital nº 1 (02/10/2026)</strong>. Jurisprudência consolidada dos Tribunais Superiores (STF/STJ/TCU) aceita até 30 dias antes da data da prova: marco temporal de corte fixado em <strong>17/12/2026</strong> para a prova de <strong>17/01/2027</strong>.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto justify-between md:items-end">
          <Badge variant="accent" className="font-mono text-xs shrink-0">
            Corte: 17/12/2026 (-30d)
          </Badge>
          <span className="text-xs font-mono text-ink-3">
            Prova: 17/01/2027
          </span>
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
            <span>Filtros Curriculares & Editalícios</span>
          </div>
          <span className="font-mono text-xs text-ink-3 font-normal">
            {selectedBloco === 'todos' ? 'Edital nº 1/2026 Integral' : blocoAtivo?.label} •{' '}
            {selectedMacro === 'todos' ? `M1-M${COURSE_REGISTRY.length}` : `Módulo ${selectedMacro}`}
          </span>
        </div>

        {/* Filtro por Bloco Oficial do Edital 2026 */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-sans font-medium text-ink-2">
            <span className="font-semibold text-accent uppercase tracking-wider text-xs">
              Bloco Oficial do Edital nº 1/2026:
            </span>
            <span className="text-xs text-ink-3 hidden sm:inline">
              {blocoAtivo?.desc}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {BLOCOS_EDITAL.map((bloco) => (
              <button
                key={bloco.id}
                type="button"
                onClick={() => {
                  setSelectedBloco(bloco.id);
                  setSelectedMacro('todos');
                  setSelectedSub('todos');
                }}
                className={`py-1 px-2.5 rounded-lg text-xs font-sans transition-colors cursor-pointer border ${
                  selectedBloco === bloco.id
                    ? 'bg-accent text-accent-text border-accent font-bold shadow-xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink hover:border-accent/40'
                }`}
                title={bloco.desc}
              >
                <span>{bloco.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Macro-Módulo didático */}
        <div className="space-y-1.5 pt-1.5 border-t border-border/40">
          <div className="flex items-center justify-between text-xs font-sans font-medium text-ink-2">
            <span>Macro-Módulo Didático:</span>
            {selectedBloco !== 'todos' && (
              <span className="text-xs text-accent font-mono">
                {macrosDisponiveis.length} módulos no {blocoAtivo?.label}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => {
                setSelectedMacro('todos');
                setSelectedSub('todos');
              }}
              className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
                selectedMacro === 'todos'
                  ? 'bg-primary text-primary-text border-primary font-semibold shadow-2xs'
                  : 'bg-surface-2 border-border text-ink hover:text-ink'
              }`}
            >
              {selectedBloco === 'todos' ? `Todos os Módulos (M1-M${COURSE_REGISTRY.length})` : `Todos do ${blocoAtivo?.label}`}
            </button>
            {macrosDisponiveis.map((macro) => (
              <button
                key={macro.id}
                type="button"
                onClick={() => {
                  setSelectedMacro(macro.codigo);
                  setSelectedSub('todos');
                }}
                className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
                  selectedMacro === macro.codigo
                    ? 'bg-primary text-primary-text border-primary font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink hover:text-ink'
                }`}
                title={`${macro.codigo} — ${macro.titulo}`}
              >
                {macro.codigo}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Submódulo (Contextual e Sanfonado) */}
        <div className="space-y-1.5 pt-1.5 border-t border-border/40">
          <div className="flex items-center justify-between text-xs font-sans font-medium text-ink-2">
            <span>Submódulo Contextual:</span>
            {selectedMacro === 'todos' && (
              <span className="text-xs text-ink-3 italic">
                (Selecione um macro-módulo acima para detalhar submódulos específicos)
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedSub('todos')}
              className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
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
                    className={`py-1 px-2.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
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
            Itens autorais no estilo Cebraspe ({questoesFiltradas.length})
          </button>
        </div>
      </section>

      <div className="space-y-2">
        <label htmlFor="busca-radar" className="text-sm font-semibold">Encontrar um conceito ou uma questão</label>
        <input id="busca-radar" type="search" value={busca} onChange={event => setBusca(event.target.value)} placeholder="Ex.: MARC, revocação, governança..." className="w-full min-h-[48px] rounded-xl border border-border bg-surface p-3 text-ink foco" />
        <p role="status" className="text-sm text-ink-2">{alertasFiltrados.length + pegadinhasFiltradas.length + questoesFiltradas.length} resultados nos filtros atuais. Cada coleção mostra até {limite} itens.</p>
      </div>
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
              {alertasFiltrados.slice(0, limite).map((alerta) => (
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
            <div className="flex items-center justify-between flex-wrap gap-3 text-sm text-ink-2">
              <span>Exibindo {Math.min(limite, alertasFiltrados.length)} de {alertasFiltrados.length}</span>
              {limite < alertasFiltrados.length && <button type="button" className="min-h-[44px] px-4 rounded-xl border border-border bg-surface text-ink foco" onClick={() => setLimite(n => n + 12)}>Mostrar mais resultados</button>}
            </div>
          </section>
        )}

        {/* Seção 2: Pares de Pegadinha (Afirmação x Julgamento Cebraspe) */}
        {(tipoFiltro === 'todos' || tipoFiltro === 'pegadinhas') && (
          <section className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <h2 className="font-sans font-bold text-ink text-lg">
                Padrões de armadilha (autorais)
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {pegadinhasFiltradas.slice(0, limite).map((peg) => {
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
            <div className="flex items-center justify-between flex-wrap gap-3 text-sm text-ink-2">
              <span>Exibindo {Math.min(limite, pegadinhasFiltradas.length)} de {pegadinhasFiltradas.length}</span>
              {limite < pegadinhasFiltradas.length && <button type="button" className="min-h-[44px] px-4 rounded-xl border border-border bg-surface text-ink foco" onClick={() => setLimite(n => n + 12)}>Mostrar mais resultados</button>}
            </div>
          </section>
        )}

        {/* Seção 3: Itens da Banca com Armadilha Auditada */}
        {(tipoFiltro === 'todos' || tipoFiltro === 'questoes') && (
          <section className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-accent" />
              <h2 className="font-sans font-bold text-ink text-lg">
                Itens autorais no estilo Cebraspe com Análise de Distrator
              </h2>
            </div>

            <div className="space-y-4">
              {questoesFiltradas.slice(0, limite).map((q) => {
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
                      <span className="font-mono text-xs text-ink-2 truncate max-w-[200px]">
                        {q.fonte}
                      </span>
                    </div>

                    <p className="font-serif text-ink text-sm sm:text-base leading-relaxed my-3">
                      {q.item}
                    </p>

                    <div className="p-3 bg-theme-alerta-soft/40 border-l-2 border-theme-alerta rounded-r-lg mb-3">
                      <span className="font-sans font-bold text-xs text-theme-alerta block mb-0.5">
                        Padrão de armadilha (autoral):
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
            <div className="flex items-center justify-between flex-wrap gap-3 text-sm text-ink-2">
              <span>Exibindo {Math.min(limite, questoesFiltradas.length)} de {questoesFiltradas.length}</span>
              {limite < questoesFiltradas.length && <button type="button" className="min-h-[44px] px-4 rounded-xl border border-border bg-surface text-ink foco" onClick={() => setLimite(n => n + 12)}>Mostrar mais resultados</button>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
