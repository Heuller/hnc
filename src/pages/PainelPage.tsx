import React, { useEffect } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { COURSE_REGISTRY } from '../content/registry';
import { CONCURSO_CONFIG } from '../config/concurso.config';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileQuestion,
  Award,
} from 'lucide-react';

export const PainelPage: React.FC = () => {
  const {
    constancia,
    modulosLidosIds,
    checkpointsRespondidos,
    historicoSimulados,
    sessaoAtivaSimulado,
    ultimoModuloAcessado,
    registrarAcessoHoje,
  } = useProgressStore();

  const { setCurrentRoute, setSelectedSubmodule } = useNavigationStore();

  useEffect(() => {
    registrarAcessoHoje();
  }, [registrarAcessoHoje]);

  // Estatísticas Globais de Todos os 10 Blocos (40 Submódulos)
  const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
  const totalSubmodulosGlobal = allSubmodules.length;
  const submodulosGlobalLidos = allSubmodules.filter((s) =>
    modulosLidosIds.includes(s.id)
  ).length;
  const progressoGlobalPercent = Math.round(
    (submodulosGlobalLidos / totalSubmodulosGlobal) * 100
  );

  // Total de checkpoints de recuperação ativa no curso
  const totalCheckpointsGlobal = allSubmodules.reduce(
    (acc, s) => acc + s.checkpoints.length,
    0
  );
  const totalCheckpointsFeitos = Object.keys(checkpointsRespondidos).length;

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
          de correção de uma errada anula uma certa ({CONCURSO_CONFIG.banca.fatorCorrecao.descricao}).
        </p>
      </section>

      {/* Grid de Resumo Superior (Continuar, Última Nota, Constância) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Continuar de onde parou */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-2">
              <span className="uppercase tracking-wider font-semibold">Próximo Passo</span>
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-sans font-bold text-ink text-base mb-1">
              {sessaoAtivaSimulado?.emAndamento
                ? 'Simulado em Andamento'
                : `Submódulo ${ultimoModuloAcessado || '1.1'}`}
            </h2>
            <p className="text-xs text-ink-2 font-serif mb-4 leading-relaxed line-clamp-2">
              {sessaoAtivaSimulado?.emAndamento
                ? 'Você possui uma sessão aberta de 100 itens com respostas salvas.'
                : 'Fundamentos da Biblioteconomia e Ciência da Informação.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleContinuarEstudo}
            className="w-full py-2.5 px-4 rounded-lg bg-primary text-white font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all"
          >
            <span>
              {sessaoAtivaSimulado?.emAndamento ? 'Retomar Simulado' : 'Continuar Leitura'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Nota Líquida do Último Simulado */}
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs font-sans text-ink-2 mb-2">
              <span className="uppercase tracking-wider font-semibold">Último Simulado</span>
              <Award className="w-4 h-4 text-accent" />
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
              <div>
                <div className="text-2xl font-mono font-bold text-ink-2 mb-1">--</div>
                <p className="text-xs text-ink-2 font-serif mb-4 leading-relaxed">
                  Nenhum simulado de 100 questões finalizado ainda.
                </p>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setCurrentRoute('simulado')}
            className="w-full py-2.5 px-4 rounded-lg bg-surface-2 border border-border text-ink hover:border-accent/40 font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <FileQuestion className="w-4 h-4 text-accent" />
            <span>{ultimoSimulado ? 'Refazer Simulado 100Q' : 'Iniciar Simulado 100Q'}</span>
          </button>
        </div>

        {/* Card 3: Constância Discreta (Últimos 7 dias) */}
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
              Registro diário sem pressa. Estudar um bloco por dia consolida a retenção.
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

          <div className="text-[11px] font-sans text-ink-2 text-center mt-3 pt-2 border-t border-border">
            Fator de repetição espaçada ativo
          </div>
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
          {COURSE_REGISTRY.map((modulo) => {
            const subsLidos = modulo.modulosFilhos.filter((s) =>
              modulosLidosIds.includes(s.id)
            ).length;
            const totalSubs = modulo.modulosFilhos.length;
            const moduloPercent = Math.round((subsLidos / totalSubs) * 100);
            const tempoTotalMin = modulo.modulosFilhos.reduce(
              (acc, s) => acc + s.tempoEstimadoMinutos,
              0
            );

            // Primeiro submódulo ainda não lido ou o primeiro
            const proximoSub =
              modulo.modulosFilhos.find((s) => !modulosLidosIds.includes(s.id)) ||
              modulo.modulosFilhos[0];

            // Prioridade estipulada para o concurso da Câmara dos Deputados
            const prioridadeAltaIds = ['m1', 'm2', 'm3', 'm4', 'm6', 'm9', 'm10'];
            const prioridade = prioridadeAltaIds.includes(modulo.id) ? 'ALTA' : 'MÉDIA';

            return (
              <div
                key={modulo.id}
                className="bg-surface rounded-xl border border-border p-5 shadow-xs hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                        {modulo.codigo}
                      </span>
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

                    <span className="text-[11px] font-mono text-ink-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{tempoTotalMin} min
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-ink text-base leading-snug">
                    {modulo.titulo}
                  </h3>
                  <p className="text-xs text-accent font-sans font-medium mt-0.5">
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
                        className="h-full bg-accent transition-all duration-300"
                        style={{ width: `${moduloPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Chips dos Submódulos */}
                  <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2 border-t border-border">
                    {modulo.modulosFilhos.map((sub) => {
                      const isLido = modulosLidosIds.includes(sub.id);
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleAbrirSubmodulo(sub.numero)}
                          className={`p-2 rounded-lg border text-left text-xs transition-colors flex items-center justify-between gap-1.5 ${
                            isLido
                              ? 'bg-ok-soft/40 border-ok/30 text-ink hover:border-ok'
                              : 'bg-surface-2/50 border-border text-ink-2 hover:bg-surface-2 hover:text-ink'
                          }`}
                        >
                          <span className="font-mono font-semibold text-accent text-[11px]">
                            {sub.numero}
                          </span>
                          <span className="truncate flex-1 font-sans text-[11px]">
                            {sub.titulo}
                          </span>
                          {isLido && (
                            <CheckCircle2 className="w-3 h-3 text-ok shrink-0" />
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
                    className="py-1.5 px-3.5 rounded-lg bg-primary text-white text-xs font-sans font-semibold hover:opacity-95 transition-opacity flex items-center gap-1.5"
                  >
                    <span>{subsLidos === totalSubs ? 'Revisar Bloco' : 'Estudar Bloco'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentRoute('simulado')}
                    className="py-1.5 px-3 rounded-lg bg-surface-2 border border-border text-ink hover:border-accent text-xs font-sans font-medium transition-colors"
                  >
                    Simulado 100Q
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
