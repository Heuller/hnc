import React, { useState, useMemo } from 'react';
import {
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  Layers,
  Clock,
  Scale,
} from 'lucide-react';
import { EDITAL_CAMARA_2026 } from '../domain/edital/matrizEdital2026';
import { useNavigationStore } from '../store/useNavigationStore';
import { Button } from '../components/common/Button';

const EIXOS_EDITAL = EDITAL_CAMARA_2026.eixos || [];

export const EditalPage: React.FC = () => {
  const { setActiveView } = useNavigationStore();
  const eixos = EIXOS_EDITAL;
  const [eixoAberto, setEixoAberto] = useState<string | null>(eixos[0]?.id || null);
  const [filtroTipo, setFiltroTipo] = useState<'todos' | 'basico' | 'especifico'>('todos');

  // Cálculo de dias restantes até 17/01/2027 (Data provável da prova - Anexo I)
  const diasRestantes = useMemo(() => {
    const dataProva = new Date('2027-01-17T08:00:00-03:00');
    const hoje = new Date();
    const diffMs = dataProva.getTime() - hoje.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  }, []);

  const eixosFiltrados = useMemo(() => {
    if (filtroTipo === 'basico') {
      return EIXOS_EDITAL.filter((e) => e.bloco === 'CONHECIMENTOS_BASICOS');
    }
    if (filtroTipo === 'especifico') {
      return EIXOS_EDITAL.filter((e) => e.bloco === 'CONHECIMENTOS_ESPECIFICOS');
    }
    return EIXOS_EDITAL;
  }, [filtroTipo]);

  const totalTopicos = useMemo(() => {
    return EIXOS_EDITAL.reduce((acc, e) => acc + (e.topicos ? e.topicos.length : 0), 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16 animate-in fade-in duration-200">
      {/* Cabeçalho Oficial do Concurso */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-editorial-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400">
              <FileText className="w-3.5 h-3.5" />
              <span>EDITAL Nº 1 — CÂMARA DOS DEPUTADOS (02/10/2026)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight">
              Quadro Oficial de Objetos de Avaliação & Regras
            </h1>
            <p className="text-sm text-ink-2 font-serif max-w-2xl leading-relaxed">
              Cargo 5: Analista Legislativo — Atribuição: Documentação e Informação Legislativa (Área: Biblioteconomia). Banca Examinadora: <strong>Cebraspe</strong>.
            </p>
          </div>

          {/* Card Contador Regressivo */}
          <div className="bg-surface-2 border border-border/80 rounded-xl p-4 shrink-0 flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 dark:text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-mono font-black text-ink">{diasRestantes} dias</div>
              <div className="text-[11px] font-mono text-ink-2 uppercase tracking-wider">
                Até a Prova (17/01/2027)
              </div>
            </div>
          </div>
        </div>

        {/* Grade de Informações Primárias do Cargo */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-serif">
          <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
            <span className="font-mono text-[10px] text-ink-2 uppercase font-bold block">Remuneração Inicial</span>
            <span className="text-ink font-bold text-sm font-mono">R$ 32.070,88</span>
            <p className="text-[11px] text-ink-2">Jornada de 40 horas semanais</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
            <span className="font-mono text-[10px] text-ink-2 uppercase font-bold block">Vagas Imediatas</span>
            <span className="text-ink font-bold text-sm font-mono">7 vagas</span>
            <p className="text-[11px] text-ink-2">4 Ampla · 1 PCD · 2 Negros</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
            <span className="font-mono text-[10px] text-ink-2 uppercase font-bold block">Cadastro Reserva</span>
            <span className="text-ink font-bold text-sm font-mono">10 vagas</span>
            <p className="text-[11px] text-ink-2">7 Ampla · 2 Negros · 1 Indígena</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-2/60 border border-border space-y-1">
            <span className="font-mono text-[10px] text-ink-2 uppercase font-bold block">Lotação Exclusiva</span>
            <span className="text-ink font-bold text-sm">Brasília / DF</span>
            <p className="text-[11px] text-ink-2">Mínimo 3 anos na primeira lotação</p>
          </div>
        </div>

        {/* Link Oficial Cebraspe */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          <span className="text-ink-2 font-serif italic">
            *Inscrições: 15/10/2026 a 17/11/2026 (Taxa: R$ 130,00). Fonte oficial soberana: Edital nº 1/2026.
          </span>
          <a
            href="https://www.cebraspe.org.br/concursos/cd_26_analista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink hover:text-amber-600 dark:hover:text-amber-400 font-bold transition-colors"
          >
            <span>Acessar Página Oficial no Cebraspe</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Regras Rígidas de Eliminação e Pontuação (Itens 8.11 e 9) */}
      <div className="space-y-4">
        <h2 className="text-lg font-serif font-bold text-ink flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span>Estrutura das Provas & Critérios de Eliminação (Itens 8.11 e 9)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif">
          {/* P1: Conhecimentos Básicos */}
          <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold uppercase text-[11px] text-ink">Prova P1 (Básicos)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-border font-bold">90 Itens C/E</span>
            </div>
            <p className="text-ink-2 leading-relaxed">
              Língua Portuguesa, Língua Inglesa, Direito Administrativo, Direito Constitucional/RICD e TI/Dados.
            </p>
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Nota Mínima: P1 ≥ 18,00</span>
              </div>
              <p className="text-[11px] opacity-90">Eliminado se nota líquida em P1 for inferior a 18,00 pontos.</p>
            </div>
          </div>

          {/* P2: Conhecimentos Específicos */}
          <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold uppercase text-[11px] text-ink">Prova P2 (Específicos)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-border font-bold">90 Itens C/E</span>
            </div>
            <p className="text-ink-2 leading-relaxed">
              Ciência da Informação, Sistemas e Proteção, Tecnologia & IA, Biblioteconomia e Serviços Parlamentares.
            </p>
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Nota Mínima: P2 ≥ 27,00</span>
              </div>
              <p className="text-[11px] opacity-90">Eliminado se nota líquida em P2 for inferior a 27,00 pontos.</p>
            </div>
          </div>

          {/* P3: Discursiva */}
          <div className="bg-surface border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold uppercase text-[11px] text-ink">Prova P3 (Discursiva)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/15 text-purple-700 dark:text-purple-400 font-bold">
                60,00 Pontos
              </span>
            </div>
            <p className="text-ink-2 leading-relaxed">
              2 questões de até 20L (15 pts cada, NQ = NC − 3×NE/TL) + 1 peça técnica de até 50L (30 pts, NPT = NC − 6×NE/TL).
            </p>
            <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400 space-y-1">
              <div className="font-bold flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Nota Mínima: NFPD ≥ 30,00</span>
              </div>
              <p className="text-[11px] opacity-90">
                NFPO mínima = P1 + P2 ≥ 54,00. Correção de discursivas: 22 primeiros por modalidade (Item 8.11.6).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Árvore de Objetos de Avaliação */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-serif font-bold text-ink flex items-center gap-2">
              <Layers className="w-5 h-5 text-ink-2" />
              <span>Matriz Estruturada do Item 14 ({eixos.length} Eixos · {totalTopicos} Tópicos)</span>
            </h2>
            <p className="text-xs text-ink-2 font-serif">
              Hierarquia oficial de conhecimentos do Edital nº 1/2026 para o Cargo 5.
            </p>
          </div>

          {/* Filtros por bloco */}
          <div className="inline-flex rounded-xl p-1 bg-surface-2 border border-border text-xs font-mono">
            <button
              onClick={() => setFiltroTipo('todos')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filtroTipo === 'todos' ? 'bg-surface text-ink font-bold shadow-xs' : 'text-ink-2 hover:text-ink'
              }`}
            >
              Todos ({eixos.length})
            </button>
            <button
              onClick={() => setFiltroTipo('basico')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filtroTipo === 'basico' ? 'bg-surface text-ink font-bold shadow-xs' : 'text-ink-2 hover:text-ink'
              }`}
            >
              Básicos (5)
            </button>
            <button
              onClick={() => setFiltroTipo('especifico')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filtroTipo === 'especifico' ? 'bg-surface text-ink font-bold shadow-xs' : 'text-ink-2 hover:text-ink'
              }`}
            >
              Específicos (8)
            </button>
          </div>
        </div>

        {/* Lista Acordeão de Eixos */}
        <div className="space-y-3">
          {eixosFiltrados.map((eixo) => {
            const isAberto = eixoAberto === eixo.id;

            return (
              <div
                key={eixo.id}
                className="bg-surface border border-border rounded-xl overflow-hidden transition-all shadow-editorial-xs"
              >
                <button
                  onClick={() => setEixoAberto(isAberto ? null : eixo.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-surface-2 transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-border text-ink-2">
                        {eixo.bloco === 'CONHECIMENTOS_BASICOS' ? 'P1 · BÁSICO' : 'P2 · ESPECÍFICO'}
                      </span>
                      <span className="text-xs font-mono text-ink-2">
                        {eixo.topicos ? eixo.topicos.length : 0} tópicos estruturados
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-ink">
                      {eixo.nome}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isAberto ? (
                      <ChevronDown className="w-5 h-5 text-ink-2" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-ink-2" />
                    )}
                  </div>
                </button>

                {isAberto && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-border/50 bg-surface-2/30 space-y-3">
                    <div className="divide-y divide-border/40">
                      {eixo.topicos && eixo.topicos.map((topico) => (
                        <div key={topico.id} className="py-2.5 first:pt-2 last:pb-0 text-xs font-serif space-y-1">
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-ink leading-relaxed flex-1">
                              {topico.titulo}
                            </span>
                            <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-ink-2">
                              {topico.codigoEdital}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-end">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setActiveView('treinos')}
                        className="text-xs font-serif"
                      >
                        Treinar Questões deste Eixo
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
