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
  Lock,
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

  // Estatísticas M1
  const m1 = COURSE_REGISTRY[0];
  const totalSubmodulosM1 = m1.modulosFilhos.length;
  const submodulosM1Lidos = m1.modulosFilhos.filter((s) =>
    modulosLidosIds.includes(s.id)
  ).length;
  const progressoM1Percent = Math.round((submodulosM1Lidos / totalSubmodulosM1) * 100);

  // Total checkpoints M1
  const totalCheckpointsM1 = m1.modulosFilhos.reduce(
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

      {/* Seção do Macro-Módulo Ativo: M1 Fundamentos */}
      <section aria-labelledby="modulo-m1-title" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 id="modulo-m1-title" className="text-lg sm:text-xl font-sans font-bold text-ink">
            Macro-Módulo 1: Fundamentos da Biblioteconomia
          </h2>
          <span className="text-xs font-mono text-ink-2">
            {submodulosM1Lidos}/{totalSubmodulosM1} submódulos lidos
          </span>
        </div>

        {/* Card Grande M1 */}
        <div className="bg-surface rounded-xl border border-border p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent-soft text-accent border border-accent/20">
                  M1 • EDITAL OFICIAL
                </span>
                <span className="text-xs text-ink-2 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ~150 min de estudo
                </span>
              </div>
              <h3 className="font-sans font-bold text-ink text-base sm:text-lg">
                Fundamentos da Biblioteconomia e Ciência da Informação
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 font-serif mt-1 leading-relaxed">
                Evolução histórica (Otlet, Briet, Shera, Buckland), Paradigmas de Capurro,
                Cinco Leis de Ranganathan e Legislação do CFB/CRB com Código de Ética.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedSubmodule('1.1');
                  setCurrentRoute('teoria');
                }}
                className="py-2 px-4 rounded-lg bg-primary text-white text-xs sm:text-sm font-sans font-semibold hover:opacity-95 transition-opacity"
              >
                Ler Teoria
              </button>
              <button
                type="button"
                onClick={() => setCurrentRoute('simulado')}
                className="py-2 px-4 rounded-lg bg-surface-2 border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-semibold transition-colors"
              >
                Simulado 100Q
              </button>
            </div>
          </div>

          {/* Barra de Progresso de Leitura M1 */}
          <div className="mt-4 pt-2">
            <div className="flex items-center justify-between text-xs font-mono text-ink-2 mb-1.5">
              <span>Progresso de Leitura da Teoria</span>
              <span>{progressoM1Percent}% concluído</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden border border-border">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${progressoM1Percent}%` }}
              />
            </div>
          </div>

          {/* 4 Submódulos de M1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {m1.modulosFilhos.map((sub) => {
              const isLido = modulosLidosIds.includes(sub.id);
              return (
                <div
                  key={sub.id}
                  onClick={() => handleAbrirSubmodulo(sub.numero)}
                  className="p-3.5 rounded-lg border border-border bg-surface-2/40 hover:bg-surface-2 hover:border-accent/40 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="font-semibold text-accent">{sub.numero}</span>
                      {isLido ? (
                        <span className="text-ok text-[11px] font-sans flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Lido
                        </span>
                      ) : (
                        <span className="text-ink-2 text-[11px] font-sans">
                          {sub.tempoEstimadoMinutos} min
                        </span>
                      )}
                    </div>
                    <h4 className="font-sans font-semibold text-ink text-xs sm:text-sm line-clamp-2 leading-snug">
                      {sub.titulo}
                    </h4>
                  </div>
                  <div className="mt-2 pt-2 border-t border-border/50 text-[11px] text-ink-2 font-mono flex items-center justify-between">
                    <span>
                      {sub.checkpoints.length} checkpoints ({totalCheckpointsFeitos}/{totalCheckpointsM1} feitos)
                    </span>
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mapa do Curso: M2 a M10 (Visíveis como 'Planejado', nunca ocultos) */}
      <section aria-labelledby="mapa-curso-title" className="space-y-4 pt-4 border-t border-border">
        <div>
          <h2 id="mapa-curso-title" className="text-lg sm:text-xl font-sans font-bold text-ink">
            Mapa Completo do Curso (Módulos M1 a M10)
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 font-serif mt-0.5">
            A estrutura curricular completa do concurso da Câmara dos Deputados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COURSE_REGISTRY.slice(1).map((modulo) => (
            <div
              key={modulo.id}
              className="bg-surface/60 rounded-xl border border-border p-4.5 opacity-85 hover:opacity-100 transition-opacity flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-ink-2 px-2 py-0.5 rounded bg-surface-2 border border-border">
                    {modulo.codigo}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-ink-2 bg-surface-2 px-2 py-0.5 rounded-full border border-border">
                    <Lock className="w-3 h-3 text-ink-2" />
                    Planejado
                  </span>
                </div>
                <h3 className="font-sans font-bold text-ink text-sm sm:text-base leading-snug">
                  {modulo.titulo}
                </h3>
                <p className="text-xs text-accent font-sans font-medium mt-1">
                  {modulo.subtitulo}
                </p>
                <p className="text-xs text-ink-2 font-serif mt-2 leading-relaxed line-clamp-2">
                  {modulo.descricao}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-border flex items-center justify-between text-xs text-ink-2 font-sans">
                <span>Material em preparação</span>
                <span className="font-mono">100Q Cebraspe</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
