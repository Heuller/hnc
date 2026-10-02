import React, { useEffect } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { COURSE_REGISTRY } from '../content/registry';
import { CONCURSO_CONFIG } from '../config/concurso.config';
import {
  getTempoTotalMacroModulo,
  getCheckpointsCountSubmodulo,
  getCheckpointsFeitosSubmodulo,
  getSubmodulosLidosCount,
  getTempoTotalCurso,
  getCheckpointsTotalCurso,
  getCheckpointsFeitosCurso,
  getMacroModuloProgressoPercent,
  getCursoProgressoPercent,
} from '../domain/metrics';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileQuestion,
  Award,
  Lock,
  RotateCcw,
  BookMarked,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { getModuleTheme } from '../domain/moduleThemes';
import { ModuleBadge } from '../components/common/ModuleBadge';
import { ModuleProgressRing } from '../components/common/ModuleProgressRing';
import { getItensPendentesRevisao } from '../domain/leitner';
import { checkSimuladoAccess } from '../domain/learningEngine';
import { getItensCadernoErros } from '../domain/cadernoErros';

export const PainelPage: React.FC = () => {
  const {
    constancia,
    modulosLidosIds,
    checkpointsRespondidos,
    secoesVisualizadas,
    leitnerDeck,
    devBypassSimuladoLock,
    historicoSimulados,
    sessaoAtivaSimulado,
    ultimoModuloAcessado,
    registrarAcessoHoje,
  } = useProgressStore();

  const { setCurrentRoute, setSelectedSubmodule } = useNavigationStore();

  useEffect(() => {
    registrarAcessoHoje();
  }, [registrarAcessoHoje]);

  // Estatísticas Globais Derivadas da Fonte Única de Verdade (A9)
  const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
  const totalSubmodulosGlobal = allSubmodules.length;
  const submodulosGlobalLidos = allSubmodules.filter((s) =>
    modulosLidosIds.includes(s.id)
  ).length;
  const progressoGlobalPercent = getCursoProgressoPercent(COURSE_REGISTRY, modulosLidosIds);
  const totalCheckpointsGlobal = getCheckpointsTotalCurso(COURSE_REGISTRY);
  const totalCheckpointsFeitos = getCheckpointsFeitosCurso(COURSE_REGISTRY, checkpointsRespondidos);
  const tempoTotalCursoMin = getTempoTotalCurso(COURSE_REGISTRY);

  // Repetição Espaçada (Sistema Leitner - Parte G)
  const todayIso = new Date().toISOString().split('T')[0];
  const deckList = Object.values(leitnerDeck || {});
  const pendentesHoje = getItensPendentesRevisao(deckList, todayIso);

  // Caderno de Erros (H1)
  const itensErros = getItensCadernoErros(checkpointsRespondidos || {}, historicoSimulados || []);
  const totalErrosAtivos = itensErros.length;

  // Status de Acesso ao Simulado 100Q (Parte G)
  const m1Submodules = COURSE_REGISTRY[0].modulosFilhos;
  const accessControl = checkSimuladoAccess(
    m1Submodules,
    secoesVisualizadas || {},
    checkpointsRespondidos || {},
    devBypassSimuladoLock
  );

  // Último Simulado
  const ultimoSimulado =
    historicoSimulados.length > 0 ? historicoSimulados[0] : null;

  // Dias da constância (últimos 7 dias)
  const ultimos7DiasArray: { data: string; ativo: boolean; label: string }[] = [];
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayLabel = diasSemana[d.getDay()];
    ultimos7DiasArray.push({
      data: dateStr,
      ativo: constancia.historicoUltimos7Dias.includes(dateStr),
      label: dayLabel,
    });
  }

  const handleContinuarEstudo = () => {
    if (sessaoAtivaSimulado?.emAndamento) {
      setCurrentRoute('simulado');
    } else {
      setSelectedSubmodule(ultimoModuloAcessado || '1.1');
      setCurrentRoute('teoria');
    }
  };

  const handleAbrirSubmodulo = (subId: string) => {
    setSelectedSubmodule(subId);
    setCurrentRoute('teoria');
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Cabeçalho Editorial do Painel */}
      <section className="border-b border-border pb-6">
        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            {CONCURSO_CONFIG.instituicao.nome} • {CONCURSO_CONFIG.cargo.titulo}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight mb-2">
          Plano de Revisão e Domínio Cebraspe
        </h1>
        <p className="text-ink-2 font-serif text-sm sm:text-base leading-relaxed max-w-3xl">
          Ambiente de leitura profunda, recuperação ativa e simulação estrita com fator
          de correção em que {CONCURSO_CONFIG.banca.fatorCorrecao.descricao}.
        </p>
      </section>

      {/* Grid de Resumo Superior (Continuar, Última Nota, Constância) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Continuar de onde parou (na cor do módulo - Parte C) */}
        {(() => {
          const proximoSubGeral =
            allSubmodules.find((s) => !modulosLidosIds.includes(s.id)) || allSubmodules[0];
          const targetSubNumero = ultimoModuloAcessado || proximoSubGeral.numero;
          const targetTheme = getModuleTheme(targetSubNumero);
          const targetSubObj =
            allSubmodules.find((s) => s.numero === targetSubNumero) || proximoSubGeral;

          return (
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between transition-colors overflow-hidden relative"
              style={{
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: targetTheme.solidVar }}
              />

              <div>
                <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <ModuleBadge moduleId={targetTheme.id} size="sm" />
                    <span className="uppercase tracking-wider font-semibold">Próximo Passo</span>
                  </div>
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>
                <h2 className="font-sans font-bold text-ink text-base mb-1">
                  {sessaoAtivaSimulado?.emAndamento
                    ? 'Simulado em Andamento'
                    : `Submódulo ${targetSubNumero}`}
                </h2>
                <p className="text-xs text-ink-2 font-serif mb-4 leading-relaxed line-clamp-2">
                  {sessaoAtivaSimulado?.emAndamento
                    ? 'Você possui uma sessão aberta de 100 itens com respostas salvas.'
                    : targetSubObj.titulo}
                </p>
              </div>

              <button
                type="button"
                onClick={handleContinuarEstudo}
                className="w-full py-2.5 px-4 rounded-lg font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all shadow-editorial-sm cursor-pointer"
                style={{
                  backgroundColor: targetTheme.solidVar,
                  color: targetTheme.textVar,
                }}
              >
                <span>
                  {sessaoAtivaSimulado?.emAndamento ? 'Retomar Simulado' : 'Continuar Leitura'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })()}

        {/* Card 2: Simulado Cebraspe (Bloqueado ou Liberado - Parte G) */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-2">
              <span className="uppercase tracking-wider font-semibold">Simulado 100Q</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 ${
                  accessControl.isUnlocked
                    ? 'bg-ok-soft text-ok border border-ok/30'
                    : 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                }`}
              >
                {accessControl.isUnlocked ? (
                  <Award className="w-3 h-3" />
                ) : (
                  <Lock className="w-3 h-3" />
                )}
                {accessControl.isUnlocked ? 'Liberado' : 'Bloqueado'}
              </span>
            </div>

            {ultimoSimulado ? (
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-mono font-bold text-ink">
                    {ultimoSimulado.notaLiquida > 0
                      ? `+${ultimoSimulado.notaLiquida}`
                      : ultimoSimulado.notaLiquida}
                  </span>
                  <span className="text-xs font-mono text-ink-2">/ 100 pontos</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-ink-2 mb-3">
                  <span className="text-ok">✓ {ultimoSimulado.certos}C</span>
                  <span className="text-err">✗ {ultimoSimulado.errados}E</span>
                  <span>⚪ {ultimoSimulado.emBranco}B</span>
                </div>
                <p className="text-xs text-ink-2 font-serif">
                  Aproveitamento líquido:{' '}
                  <strong className="text-ink font-mono font-semibold">
                    {ultimoSimulado.aproveitamentoPercent}%
                  </strong>
                </p>
              </div>
            ) : (
              <div className="py-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-ink-2 shrink-0">
                  {accessControl.isUnlocked ? (
                    <Award className="w-5 h-5 text-accent" />
                  ) : (
                    <Lock className="w-5 h-5 text-amber-500" />
                  )}
                </div>
                <div>
                  <div className="font-sans font-semibold text-ink text-sm">
                    {accessControl.isUnlocked ? 'Simulado Liberado' : 'Simulado Bloqueado'}
                  </div>
                  <p className="text-[11px] text-ink-2 font-serif leading-relaxed">
                    {accessControl.isUnlocked
                      ? 'Requisitos cumpridos. Teste seu índice Cebraspe.'
                      : `${accessControl.totalSubmodulosConcluidos} de 4 submódulos do M1 concluídos.`}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setCurrentRoute('simulado')}
            className={`w-full py-2.5 px-4 rounded-lg font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              accessControl.isUnlocked
                ? 'bg-primary text-primary-text hover:opacity-95'
                : 'bg-surface-2 border border-border text-ink hover:border-accent'
            }`}
          >
            {accessControl.isUnlocked ? (
              <FileQuestion className="w-4 h-4" />
            ) : (
              <Lock className="w-4 h-4 text-amber-500" />
            )}
            <span>
              {ultimoSimulado
                ? 'Refazer Simulado 100Q'
                : accessControl.isUnlocked
                ? 'Iniciar Simulado 100Q'
                : 'Ver Requisitos do Simulado'}
            </span>
          </button>
        </div>

        {/* Card 3: Constância & Repetição Espaçada Leitner */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-2">
              <span className="uppercase tracking-wider font-semibold">Constância de Estudo</span>
              <Calendar className="w-4 h-4 text-accent" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-mono font-bold text-ink">
                {constancia.diasConsecutivos}
              </span>
              <span className="text-xs text-ink-2 font-sans">
                {constancia.diasConsecutivos === 1 ? 'dia seguido' : 'dias seguidos'}
              </span>
            </div>

            <p className="text-xs text-ink-2 font-serif mb-3 leading-relaxed">
              Registro cronológico dos seus dias de estudo na plataforma.
            </p>

            {/* 7 marcadores discretos */}
            <div className="grid grid-cols-7 gap-1.5 pt-2 border-t border-border">
              {ultimos7DiasArray.map((dia, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-ink-2">{dia.label}</span>
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center border transition-colors ${
                      dia.ativo
                        ? 'bg-ok-soft border-ok text-ok'
                        : 'bg-surface-2 border-border text-ink-2/40'
                    }`}
                    title={dia.data}
                  >
                    {dia.ativo ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repetição Espaçada Leitner (Parte G) */}
          <div className="text-[11px] font-sans text-ink-2 mt-3 pt-2.5 border-t border-border flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <RotateCcw className="w-3.5 h-3.5 text-accent" />
              <span>Revisões pendentes hoje:</span>
            </span>
            <span
              className={`font-mono font-bold px-1.5 py-0.5 rounded text-xs ${
                pendentesHoje.length > 0
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'bg-surface-2 text-ink-2'
              }`}
            >
              {pendentesHoje.length} {pendentesHoje.length === 1 ? 'item' : 'itens'}
            </span>
          </div>
        </div>
      </div>

      {/* Atalhos Rápidos de Fixação e Véspera (Parte H: H1 e H2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card Caderno de Erros */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-all">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-err-soft text-err border border-err/20 flex items-center justify-center shrink-0">
                <BookMarked className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-bold text-ink text-sm sm:text-base">Caderno de Erros</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    totalErrosAtivos > 0 ? 'bg-err-soft text-err border border-err/30' : 'bg-ok-soft text-ok border border-ok/30'
                  }`}>
                    {totalErrosAtivos} {totalErrosAtivos === 1 ? 'erro ativo' : 'erros ativos'}
                  </span>
                </div>
                <p className="text-xs text-ink-2 font-serif mt-0.5">
                  Banco dinâmico de itens errados em checkpoints e simulados para refazer até gabaritar.
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCurrentRoute('caderno-erros')}
            className="w-full py-2 px-3 rounded-lg bg-surface-2 hover:bg-surface-3 border border-border text-ink hover:border-err/40 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
          >
            <span>{totalErrosAtivos > 0 ? 'Praticar Itens Incorretos' : 'Abrir Caderno de Erros'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card Folha de Véspera */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-all">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent border border-accent/20 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-bold text-ink text-sm sm:text-base">Folha de Véspera (48h)</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-accent-soft text-accent border border-accent/30">
                    PDF / Impressão
                  </span>
                </div>
                <p className="text-xs text-ink-2 font-serif mt-0.5">
                  {modulosLidosIds.length > 0
                    ? `Síntese hiperdensa derivada dos ${modulosLidosIds.length} submódulo(s) concluído(s): autores canônicos, quadros e pegadinhas da banca.`
                    : 'Síntese hiperdensa gerada dinamicamente a partir dos submódulos que você concluir na Jornada.'}
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCurrentRoute('folha-vespera')}
            className="w-full py-2 px-3 rounded-lg bg-accent text-accent-text hover:opacity-95 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-editorial-sm cursor-pointer mt-2"
          >
            <span>Abrir Folha de Véspera</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progresso Curricular Global */}
      <section aria-labelledby="progresso-global-title" className="bg-surface rounded-xl border border-border p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              COBERTURA DO EDITAL
            </span>
            <h2 id="progresso-global-title" className="text-lg sm:text-xl font-sans font-bold text-ink mt-1">
              Progresso Geral da Teoria e Checkpoints
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-ink-2">
            <span>
              <strong className="text-ink font-semibold">{submodulosGlobalLidos}</strong> de {totalSubmodulosGlobal} submódulos lidos
            </span>
            <span>•</span>
            <span>
              <strong className="text-ink font-semibold">{totalCheckpointsFeitos}</strong> de {totalCheckpointsGlobal} checkpoints
            </span>
            <span>•</span>
            <span>
              <strong className="text-ink font-semibold">~{tempoTotalCursoMin} min</strong> de leitura
            </span>
          </div>
        </div>

        {/* Barra de Progresso Global */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-ink-2 mb-1.5">
            <span>Progresso Total dos 10 Blocos</span>
            <span className="font-bold text-accent">{progressoGlobalPercent}% concluído</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-surface-2 overflow-hidden border border-border">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${progressoGlobalPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Grade Curricular dos 10 Blocos (M1 a M10) */}
      <section aria-labelledby="mapa-curso-title" className="space-y-5">
        <div>
          <h2 id="mapa-curso-title" className="text-xl font-sans font-bold text-ink">
            Blocos Curriculares da Câmara dos Deputados
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 font-serif mt-0.5">
            Navegue pelos 10 blocos de conteúdo denso, com autores canônicos, jurisprudência Cebraspe e mnemônicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COURSE_REGISTRY.map((modulo, idx) => {
            const moduloTheme = getModuleTheme(modulo.id);
            const subsLidos = getSubmodulosLidosCount(modulo, modulosLidosIds);
            const totalSubs = modulo.modulosFilhos.length;
            const moduloPercent = getMacroModuloProgressoPercent(modulo, modulosLidosIds);
            const tempoTotalMin = getTempoTotalMacroModulo(modulo);

            // Primeiro submódulo ainda não lido ou o primeiro
            const proximoSub =
              modulo.modulosFilhos.find((s) => !modulosLidosIds.includes(s.id)) ||
              modulo.modulosFilhos[0];

            // Prioridade estipulada para o concurso da Câmara dos Deputados
            const prioridadeAltaIds = ['m1', 'm2', 'm3', 'm4', 'm6', 'm9', 'm10'];
            const prioridade = prioridadeAltaIds.includes(modulo.id) ? 'ALTA' : 'MÉDIA';

            return (
              <motion.div
                key={modulo.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.04, 0.32) }}
                whileHover={{ y: -2 }}
                className="bg-surface rounded-xl border border-border p-5 shadow-xs transition-all flex flex-col justify-between overflow-hidden relative"
              >
                {/* Faixa plana 4px na cor do módulo (Parte C) */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: moduloTheme.solidVar }}
                />

                <div className="pt-1">
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <ModuleBadge moduleId={modulo.id} size="sm" />
                      <span
                        className={`text-[10px] font-sans font-semibold uppercase px-2 py-0.5 rounded ${
                          prioridade === 'ALTA'
                            ? 'bg-err-soft text-err border border-err/20'
                            : 'bg-surface-2 text-ink-2 border border-border'
                        }`}
                      >
                        Prioridade {prioridade}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ModuleProgressRing
                        moduleId={modulo.id}
                        progressPercent={moduloPercent}
                        size={22}
                        strokeWidth={2.5}
                      />
                      <span className="text-[11px] font-mono text-ink-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{tempoTotalMin} min
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-ink text-base leading-snug">
                    {modulo.titulo}
                  </h3>
                  <p
                    className="text-xs font-sans font-medium mt-0.5"
                    style={{ color: moduloTheme.solidVar }}
                  >
                    {modulo.subtitulo}
                  </p>
                  <p className="text-xs text-ink-2 font-serif mt-2 leading-relaxed line-clamp-2">
                    {modulo.descricao}
                  </p>

                  {/* Barra de Progresso do Bloco */}
                  <div className="mt-3 pt-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-2 mb-1">
                      <span>Progresso do Bloco</span>
                      <span>
                        {subsLidos}/{totalSubs} ({moduloPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-2 overflow-hidden border border-border">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${moduloPercent}%`,
                          backgroundColor: moduloTheme.solidVar,
                        }}
                      />
                    </div>
                  </div>

                  {/* Chips dos Submódulos com quebra semântica e checkpoints exatos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-3 pt-2 border-t border-border">
                    {modulo.modulosFilhos.map((sub) => {
                      const isLido = modulosLidosIds.includes(sub.id);
                      const cpFeitos = getCheckpointsFeitosSubmodulo(sub, checkpointsRespondidos);
                      const cpTotal = getCheckpointsCountSubmodulo(sub);

                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleAbrirSubmodulo(sub.numero)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-start justify-between gap-2 cursor-pointer ${
                            isLido
                              ? 'bg-ok-soft/40 border-ok/30 text-ink hover:border-ok'
                              : 'bg-surface-2/50 border-border text-ink-2 hover:bg-surface-2 hover:text-ink'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span
                                className="font-mono font-semibold text-[11px] shrink-0"
                                style={{ color: moduloTheme.solidVar }}
                              >
                                {sub.numero}
                              </span>
                              <span className="text-[10px] font-mono text-ink-2">
                                ({cpFeitos}/{cpTotal} CP)
                              </span>
                            </div>
                            <span className="line-clamp-2 leading-snug font-sans text-xs text-ink">
                              {sub.titulo}
                            </span>
                          </div>
                          {isLido && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-ok shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Ação do Bloco */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleAbrirSubmodulo(proximoSub.numero)}
                    className="py-1.5 px-3.5 rounded-lg text-xs font-sans font-semibold hover:opacity-95 transition-opacity flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    style={{
                      backgroundColor: moduloTheme.solidVar,
                      color: moduloTheme.textVar,
                    }}
                  >
                    <span>{subsLidos === totalSubs ? 'Revisar Bloco' : 'Estudar Bloco'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentRoute('simulado')}
                    className="py-1.5 px-3 rounded-lg bg-surface-2 border border-border text-ink hover:border-accent text-xs font-sans font-medium transition-colors cursor-pointer"
                  >
                    Simulado 100Q
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
