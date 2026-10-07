import React from 'react';
import {
  Printer,
  Sparkles,
  ArrowLeft,
  Flame,
  BookOpen,
  Table,
  AlertTriangle,
  History,
} from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';
import { JORNADA_CONFIG } from '../config/jornada.config';

export const FolhaVesperaPage: React.FC = () => {
  const { setActiveView } = useNavigationStore();
  const { modulosLidosIds } = useProgressStore();

  const handlePrint = () => {
    window.print();
  };

  // Regra B9: A Folha de Véspera deriva SOMENTE do conteúdo efetivamente concluído
  const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
  const completedSubmodules = allSubmodules.filter((s) => modulosLidosIds.includes(s.id));

  // Autores consolidados dos submódulos concluídos
  const autoresConsolidados = completedSubmodules.flatMap((s) => {
    const list: { nome: string; ideia: string; subNumero: string }[] = [];
    if (s.mnemonicos?.autores && s.mnemonicos.autores.length > 0) {
      for (const a of s.mnemonicos.autores) {
        if (typeof a === 'string') {
          list.push({ nome: a, ideia: 'Teórico canônico da disciplina', subNumero: s.numero });
        } else {
          list.push({
            nome: a.nome,
            ideia: a.ideiaChave || a.obraPrincipal || 'Doutrina canônica',
            subNumero: s.numero,
          });
        }
      }
    } else if (s.autoresChave) {
      for (const a of s.autoresChave) {
        list.push({ nome: a, ideia: 'Autor canônico obrigatório', subNumero: s.numero });
      }
    }
    return list;
  });

  // Alertas e pegadinhas dos submódulos concluídos
  const alertasConsolidados = completedSubmodules.flatMap((s) =>
    (s.alertasCebraspe || []).map((alerta) => ({
      texto: alerta,
      subNumero: s.numero,
    }))
  );

  const pegadinhasConsolidadas = completedSubmodules.flatMap((s) =>
    (s.mnemonicos?.pegadinhas || []).map((pegadinha) => {
      const afirmacao = typeof pegadinha === 'string' ? pegadinha : pegadinha.afirmacao;
      const armadilha = typeof pegadinha === 'string' ? '' : pegadinha.porQue;
      return { afirmacao, armadilha, subNumero: s.numero };
    })
  );

  // Quadros comparativos dos submódulos concluídos
  const quadrosConsolidados = completedSubmodules
    .filter((s) => s.quadroComparativo)
    .map((s) => ({
      subNumero: s.numero,
      subTitulo: s.titulo_curto || s.titulo,
      quadro: s.quadroComparativo!,
    }));

  // Linhas do tempo dos submódulos concluídos
  const timelineConsolidada = completedSubmodules.flatMap((s) =>
    (s.mnemonicos?.timeline || []).map((item) => ({
      ...item,
      subNumero: s.numero,
    }))
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2 px-1 sm:px-0 folha-vespera-container">
      {/* Barra de Ações (Oculta na Impressão) */}
      <div className="flex items-center justify-between no-print">
        <button
          type="button"
          onClick={() => setActiveView('painel')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-2 hover:text-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Painel</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent font-bold">
            Revisão de Véspera (48h)
          </span>
          {completedSubmodules.length > 0 && (
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-text text-xs font-bold shadow-editorial-sm cursor-pointer hover:opacity-95"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
          )}
        </div>
      </div>

      {/* Banner de Apresentação (Oculto na Impressão) */}
      <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-4 border-l-4 border-l-accent shadow-editorial-xs no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-soft text-ink border border-accent/20 text-xs font-bold uppercase tracking-wider font-mono">
          <Flame className="w-3.5 h-3.5 text-accent" />
          <span>Folha de Véspera • Síntese Derivada</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-ink tracking-tight m-0">
          Folha de Véspera: Síntese de Conteúdo Concluído
        </h1>

        <p className="font-serif text-sm sm:text-base text-ink-2 leading-relaxed m-0">
          {completedSubmodules.length > 0
            ? `Documento consolidado de alta retenção derivado de ${completedSubmodules.length} submódulo(s) concluído(s) com aproveitamento mínimo de ${Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}%. Autores, quadros e pegadinhas da banca compilados para revisão imediata.`
            : 'A Folha de Véspera consolida exclusivamente o conhecimento das etapas que você já dominou. Conclua os submódulos da Jornada para gerar automaticamente suas sínteses.'}
        </p>
      </div>

      {/* CABEÇALHO FORMAL PARA IMPRESSÃO */}
      <div className="hidden print:block border-b-2 border-black pb-3 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight text-black m-0">
              Heuller na Câmara · Folha de Véspera (48 Horas)
            </h1>
            <p className="text-xs text-gray-700 m-0">
              Concurso Câmara dos Deputados · Analista Legislativo — Bibliotecário · Banca Cebraspe
            </p>
          </div>
          <div className="text-right text-[10px] font-mono text-gray-600">
            <span>Síntese de Conteúdo Concluído ({completedSubmodules.length} submódulos)</span>
            <br />
            <span>Documento de Revisão Rápida</span>
          </div>
        </div>
      </div>

      {/* CASO VAZIO: NENHUM SUBMÓDULO CONCLUÍDO AINDA (Regra B9) */}
      {completedSubmodules.length === 0 && (
        <div className="bg-surface rounded-2xl border border-dashed border-border p-8 text-center space-y-4 no-print">
          <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center mx-auto text-ink-2">
            <BookOpen className="w-6 h-6 text-accent" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-base font-bold text-ink">Nenhum submódulo concluído ainda</h3>
            <p className="text-xs text-ink-2 font-serif leading-relaxed">
              Em respeito à fidelidade pedagógica, a Folha de Véspera não exibe conteúdos de módulos
              não estudados. Assim que você atingir {Math.round(JORNADA_CONFIG.minimoVerificacao * 100)}% de acertos nos checkpoints de uma etapa, suas
              fórmulas, quadros e pegadinhas aparecerão aqui automaticamente.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('painel')}
            className="py-2 px-4 rounded-lg bg-primary text-primary-text text-xs font-bold cursor-pointer hover:opacity-95"
          >
            Iniciar Estudos no Painel
          </button>
        </div>
      )}

      {/* CASO COM CONTEÚDO: RENDERIZA EXCLUSIVAMENTE O QUE FOI CONCLUÍDO */}
      {completedSubmodules.length > 0 && (
        <div className="space-y-6">
          {/* BLOCO 1: AUTORES CANÔNICOS E DOUTRINAS */}
          {autoresConsolidados.length > 0 && (
            <section className="bg-surface rounded-2xl border border-border p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid shadow-editorial-xs">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Sparkles className="w-4 h-4 text-accent print:text-black" />
                <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                  1. Autores Canônicos e Conceitos Chave ({autoresConsolidados.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                {autoresConsolidados.map((item, idx) => (
                  <div
                    key={`${item.nome}-${idx}`}
                    className="p-3 rounded-xl bg-surface-2/60 border border-border print:border-gray-400 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-ink print:text-black block text-xs">
                        {item.nome}
                      </span>
                      <span className="text-[10px] font-mono text-accent print:text-gray-700">
                        §{item.subNumero}
                      </span>
                    </div>
                    <p className="text-[11px] text-ink-2 print:text-black leading-snug font-serif m-0">
                      {item.ideia}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BLOCO 2: QUADROS COMPARATIVOS CONSOLIDADOS */}
          {quadrosConsolidados.length > 0 && (
            <section className="bg-surface rounded-2xl border border-border p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid shadow-editorial-xs">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Table className="w-4 h-4 text-accent print:text-black" />
                <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                  2. Matrizes e Quadros Comparativos ({quadrosConsolidados.length})
                </h2>
              </div>

              <div className="space-y-6">
                {quadrosConsolidados.map((q, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs font-mono text-ink-2 font-semibold">
                      Submódulo {q.subNumero} • {q.subTitulo}
                    </span>
                    <TabelaComparativa quadro={q.quadro} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BLOCO 3: ALERTAS CEBRASPE E PEGADINHAS DA BANCA */}
          {(alertasConsolidados.length > 0 || pegadinhasConsolidadas.length > 0) && (
            <section className="bg-surface rounded-2xl border border-border p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid shadow-editorial-xs">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 print:text-black" />
                <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                  3. Alertas Cebraspe e Armadilhas Típicas ({alertasConsolidados.length + pegadinhasConsolidadas.length})
                </h2>
              </div>

              <div className="space-y-3">
                {alertasConsolidados.map((alerta, idx) => (
                  <div
                    key={`alerta-${idx}`}
                    className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-l-amber-500 border-y border-r border-border print:border-gray-400 text-xs font-serif leading-relaxed text-ink print:text-black"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase font-bold mb-1">
                      <span>Alerta Cebraspe • Submódulo {alerta.subNumero}</span>
                    </div>
                    {alerta.texto}
                  </div>
                ))}

                {pegadinhasConsolidadas.map((pegadinha, idx) => (
                  <div
                    key={`peg-${idx}`}
                    className="p-3 rounded-xl bg-surface-2/70 border border-border print:border-gray-400 text-xs font-serif leading-relaxed text-ink print:text-black"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-ink-2 font-bold mb-1">
                      <span>Pegadinha Recorrente • Submódulo {pegadinha.subNumero}</span>
                    </div>
                    <p className="font-semibold m-0 text-ink print:text-black">"{pegadinha.afirmacao}"</p>
                    {pegadinha.armadilha && (
                      <p className="text-[11px] text-accent print:text-black mt-1 m-0">
                        <strong>Armadilha da banca:</strong> {pegadinha.armadilha}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BLOCO 4: MARCOS CRONOLÓGICOS CONSOLIDADOS */}
          {timelineConsolidada.length > 0 && (
            <section className="bg-surface rounded-2xl border border-border p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid shadow-editorial-xs">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <History className="w-4 h-4 text-accent print:text-black" />
                <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                  4. Marcos Cronológicos Históricos ({timelineConsolidada.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {timelineConsolidada.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface-2 border border-border print:border-gray-400 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-accent print:text-black font-sans">
                        {item.periodo}
                      </span>
                      <span className="text-[10px] font-mono text-ink-2">
                        Submódulo {item.subNumero}
                      </span>
                    </div>
                    <div className="font-bold text-ink print:text-black">{item.disciplina}</div>
                    <div className="text-[11px] text-ink-2 print:text-black font-serif">
                      {item.focoPrincipal}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* RODAPÉ DE IMPRESSÃO */}
      <div className="hidden print:block text-center text-[10px] text-gray-500 pt-4 border-t border-gray-300">
        Plataforma Heuller na Câmara · Analista Legislativo — Bibliotecário · Preparação Editorial e Soberba
      </div>
    </div>
  );
};
