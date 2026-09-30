import React, { useState, useRef } from 'react';
import { useProgressStore } from '../store/useProgressStore';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import {
  TrendingUp,
  Download,
  Upload,
  Trash2,
  Info,
} from 'lucide-react';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';

export const ProgressoPage: React.FC = () => {
  const {
    historicoSimulados,
    modulosLidosIds,
    checkpointsRespondidos,
    constancia,
    exportarProgressoJson,
    importarProgressoJson,
    limparTodoProgresso,
  } = useProgressStore();

  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Dados para o Gráfico de Evolução de Nota Líquida
  const dadosGrafico = historicoSimulados
    .slice()
    .reverse()
    .map((sim, idx) => ({
      name: `Simulado ${idx + 1}`,
      data: new Date(sim.dataHora).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
      notaLiquida: sim.notaLiquida,
      certos: sim.certos,
      errados: sim.errados,
      aproveitamento: sim.aproveitamentoPercent,
    }));

  // Análise de Erros por Submódulo a partir do histórico
  const errosPorSubmodulo: Record<string, { erros: number; totalQuestoes: number; nome: string }> = {
    '1.1': { erros: 0, totalQuestoes: 0, nome: 'Evolução Histórica e Documentação' },
    '1.2': { erros: 0, totalQuestoes: 0, nome: 'Paradigmas de Capurro' },
    '1.3': { erros: 0, totalQuestoes: 0, nome: 'Cinco Leis de Ranganathan' },
    '1.4': { erros: 0, totalQuestoes: 0, nome: 'Ética e Legislação CFB/CRB' },
  };

  historicoSimulados.forEach((sim) => {
    simuladoFundamentos100Q.forEach((q) => {
      const r = sim.respostas[q.id];
      if (r) {
        if (errosPorSubmodulo[q.submoduloId]) {
          errosPorSubmodulo[q.submoduloId].totalQuestoes++;
          if (r.resposta !== 'BRANCO' && r.resposta !== q.gabarito) {
            errosPorSubmodulo[q.submoduloId].erros++;
          }
        }
      }
    });
  });

  const handleExportar = () => {
    const data = exportarProgressoJson();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `heuller-camara-progresso-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importarProgressoJson(content);
      if (res.success) {
        setImportStatus('Progresso importado com sucesso!');
        setTimeout(() => setImportStatus(null), 4000);
      } else {
        setImportStatus(`Erro: ${res.error}`);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Cabeçalho */}
      <section className="border-b border-border pb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
            Painel Analítico de Desempenho e Metacognição
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight mb-2">
          Evolução Histórica e Diagnóstico de Estudos
        </h1>
        <p className="text-ink-2 font-serif text-sm sm:text-base leading-relaxed max-w-3xl">
          Acompanhe o ganho líquido de pontos sob o fator Cebraspe ($C - E$), a calibração da sua
          tomada de decisão sob risco e a persistência local dos seus simulados.
        </p>
      </section>

      {/* Alerta Importante sobre Persistência do Navegador */}
      <div className="p-4 bg-accent-soft/30 border border-accent/40 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-ink-2 font-sans leading-relaxed">
          <strong className="text-ink font-semibold">
            Privacidade e Armazenamento Local:
          </strong>{' '}
          Seus dados de estudo ficam salvos 100% no seu navegador (sem rastreadores ou servidores
          externos). Limpar o histórico ou cache do navegador apagará o progresso. Recomendamos
          fazer download regular do seu backup com o botão <strong>Exportar Progresso</strong>.
        </div>
      </div>

      {/* Grid de Métricas Gerais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs">
          <span className="text-xs font-sans text-ink-2 uppercase tracking-wider font-semibold">
            Simulados Realizados
          </span>
          <div className="text-3xl font-mono font-bold text-ink mt-1">
            {historicoSimulados.length}
          </div>
          <span className="text-xs text-ink-2 font-sans">
            {historicoSimulados.length * 100} itens julgados
          </span>
        </div>

        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs">
          <span className="text-xs font-sans text-ink-2 uppercase tracking-wider font-semibold">
            Módulos de Teoria Concluídos
          </span>
          <div className="text-3xl font-mono font-bold text-ink mt-1">
            {modulosLidosIds.length} / 4
          </div>
          <span className="text-xs text-ink-2 font-sans">
            {Object.keys(checkpointsRespondidos).length} checkpoints respondidos
          </span>
        </div>

        <div className="bg-surface rounded-xl border border-border p-5 shadow-xs">
          <span className="text-xs font-sans text-ink-2 uppercase tracking-wider font-semibold">
            Constância Ativa
          </span>
          <div className="text-3xl font-mono font-bold text-ink mt-1">
            {constancia.diasConsecutivos} dias
          </div>
          <span className="text-xs text-ink-2 font-sans">sequência de acessos diários</span>
        </div>
      </div>

      {/* Gráfico de Evolução da Nota Líquida (Recharts) */}
      <section className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-sans font-bold text-ink">
              Evolução da Nota Líquida ($C - E$)
            </h2>
            <p className="text-xs text-ink-2 font-serif">
              Progressão do saldo líquido de pontos ao longo das sessões de simulado.
            </p>
          </div>
          {dadosGrafico.length > 0 && (
            <span className="font-mono text-xs text-accent font-semibold">
              Última: {dadosGrafico[dadosGrafico.length - 1].notaLiquida} pts
            </span>
          )}
        </div>

        {dadosGrafico.length > 0 ? (
          <div className="h-64 sm:h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dadosGrafico} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="data" stroke="var(--color-ink-2)" fontSize={12} />
                <YAxis domain={[-20, 100]} stroke="var(--color-ink-2)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-ink)',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  formatter={(value: unknown, name: unknown) => [
                    `${value} ${name === 'notaLiquida' ? 'pontos' : ''}`,
                    name === 'notaLiquida' ? 'Nota Líquida' : String(name),
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="notaLiquida"
                  stroke="var(--color-primary)"
                  strokeWidth={3}
                  dot={{ r: 5, fill: 'var(--color-accent)' }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="p-8 text-center bg-surface-2 rounded-xl border border-dashed border-border text-ink-2 text-xs sm:text-sm font-sans">
            Nenhum simulado finalizado para gerar a curva de evolução. Complete um simulado de 100
            questões para visualizar o gráfico.
          </div>
        )}
      </section>

      {/* Análise de Incidência de Erros por Submódulo */}
      <section className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-sans font-bold text-ink">
          Diagnóstico Temático de Erros no Simulado
        </h2>
        <p className="text-xs text-ink-2 font-serif">
          Taxa de erro por módulo-filho apurada exclusivamente nas suas respostas reais.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {Object.entries(errosPorSubmodulo).map(([subId, dados]) => {
            const taxaErro =
              dados.totalQuestoes > 0
                ? Math.round((dados.erros / dados.totalQuestoes) * 100)
                : 0;

            return (
              <div
                key={subId}
                className="p-4 bg-surface-2 rounded-xl border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-accent">Submódulo {subId}</span>
                    <span className="text-ink-2">
                      {dados.erros} erros / {dados.totalQuestoes} respondidas
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-ink text-xs sm:text-sm leading-snug">
                    {dados.nome}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-border/60">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-2 mb-1">
                    <span>Incidência de Erro</span>
                    <span className={taxaErro > 40 ? 'text-err font-bold' : 'text-ink'}>
                      {taxaErro}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className={`h-full ${taxaErro > 40 ? 'bg-err' : 'bg-accent'}`}
                      style={{ width: `${taxaErro}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção de Backup e Persistência Local */}
      <section className="bg-surface rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-sans font-bold text-ink">
              Backup e Portabilidade do Progresso
            </h2>
            <p className="text-xs text-ink-2 font-serif">
              Exporte seus dados em JSON para transferir entre dispositivos ou restaurar a qualquer
              momento.
            </p>
          </div>
        </div>

        {importStatus && (
          <div className="p-3 bg-ok-soft border border-ok text-ok text-xs font-sans rounded-lg">
            {importStatus}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleExportar}
            className="py-2.5 px-4 rounded-lg bg-primary text-white font-sans font-semibold text-xs sm:text-sm flex items-center gap-2 hover:opacity-95 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Exportar Progresso (JSON)</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent font-sans font-semibold text-xs sm:text-sm flex items-center gap-2"
          >
            <Upload className="w-4 h-4 text-accent" />
            <span>Importar Progresso (JSON)</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImportFile}
            accept=".json"
            className="hidden"
          />

          <div className="ml-auto">
            {showConfirmReset ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-err font-sans font-semibold">
                  Confirmar exclusão?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    limparTodoProgresso();
                    setShowConfirmReset(false);
                  }}
                  className="py-1.5 px-3 rounded-lg bg-err text-white text-xs font-sans font-semibold"
                >
                  Sim, apagar tudo
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(false)}
                  className="py-1.5 px-3 rounded-lg bg-surface-2 text-ink text-xs font-sans"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirmReset(true)}
                className="py-2 px-3 rounded-lg text-ink-2 hover:text-err text-xs font-sans flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Resetar Dados Locais</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
