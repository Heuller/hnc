import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
import { useSessionPreference } from '../hooks/useSessionPreference';
import React, { useState } from 'react';
import {
  Printer,
  Sparkles,
  ArrowLeft,
  Flame,
  BookOpen,
  Table,
  AlertTriangle,
  History,
  ShieldAlert,
  CheckCircle2,
  Brain,
  Eye,
  RotateCcw,
  Check,
  X as XIcon,
} from 'lucide-react';
import { PainelMnemonicosLegislativo } from '../components/common/PainelMnemonicosLegislativo';
import { useNavigationStore } from '../store/useNavigationStore';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { TabelaComparativa } from '../components/content-blocks/TabelaComparativa';
import { MATRIZ_BLOCOS_EDITAL_VESPERA } from '../domain/folhaVespera/pegadinhasBlocos';

export const FolhaVesperaPage: React.FC = () => {
  const { setActiveView } = useNavigationStore();
  const { modulosLidosIds } = useProgressStore();
  const [activeTab, setActiveTab] = useState<'blocos' | 'progresso' | 'mnemonicos'>('blocos');
  const [modoTreinoAtivo, setModoTreinoAtivo] = useState<boolean>(false);
  const [respostasTreino, setRespostasTreino] = useState<Record<string, 'C' | 'E'>>({});
  const [selectedBloco, setSelectedBloco] = useSessionPreference<string>('vespera:bloco', MATRIZ_BLOCOS_EDITAL_VESPERA[0].id);

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

  const blocosExibidos =
    selectedBloco === 'todos'
      ? MATRIZ_BLOCOS_EDITAL_VESPERA
      : MATRIZ_BLOCOS_EDITAL_VESPERA.filter((b) => b.id === selectedBloco);

  const totalPegadinhasBlocos = MATRIZ_BLOCOS_EDITAL_VESPERA.reduce(
    (acc, b) => acc + b.pegadinhas.length,
    0
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
          <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-accent/10 text-accent font-bold">
            Revisão de Véspera (48h) • Edital nº 1/2026
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-text text-xs font-bold shadow-editorial-sm cursor-pointer hover:opacity-95"
            title="Imprimir ou Salvar em PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Salvar PDF</span>
          </button>
        </div>
      </div>

      {/* Banner de Apresentação (Oculto na Impressão) */}
      <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-4 border-l-4 border-l-accent shadow-editorial-xs no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-soft text-ink border border-accent/20 text-xs font-bold uppercase tracking-wider font-mono">
          <Flame className="w-3.5 h-3.5 text-accent" />
          <span>Folha de Véspera • Matriz de Choque & Síntese</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-ink tracking-normal m-0">
          Folha de Véspera: Matriz dos 5 Blocos do Edital 2026
        </h1>

        <p className="font-serif text-sm sm:text-base text-ink-2 leading-relaxed m-0">
          Compilação mnemônica intensiva para as 48 horas pré-prova de Analista Legislativo da Câmara dos Deputados (Cebraspe). Contém as <strong>60 pegadinhas capitais</strong> divididas pelos 5 blocos do edital e a síntese dinâmica dos submódulos que você já dominou.
        </p>

        {/* Abas de Navegação */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
          <button
            type="button"
            onClick={() => setActiveTab('blocos')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'blocos'
                ? 'bg-accent text-white shadow-sm'
                : 'bg-surface-2 text-ink-2 hover:text-ink border border-border'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Matriz Cebraspe dos 5 Blocos ({totalPegadinhasBlocos} Pegadinhas)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('progresso')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'progresso'
                ? 'bg-accent text-white shadow-sm'
                : 'bg-surface-2 text-ink-2 hover:text-ink border border-border'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Minha Síntese de Progresso ({completedSubmodules.length} Concluídos)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mnemonicos')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'mnemonicos'
                ? 'bg-accent text-white shadow-sm'
                : 'bg-surface-2 text-ink-2 hover:text-ink border border-border'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Fórmulas Mnemônicas (Teach)</span>
          </button>
        </div>
      </div>

      {/* CABEÇALHO FORMAL PARA IMPRESSÃO */}
      <div className="hidden print:block border-b-2 border-black pb-3 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black uppercase tracking-normal text-black m-0">
              Heuller na Câmara · Folha de Véspera (48 Horas)
            </h1>
            <p className="text-xs text-gray-700 m-0">
              Concurso Câmara dos Deputados · Analista Legislativo — Bibliotecário · Banca Cebraspe
            </p>
          </div>
          <div className="text-right text-xs font-mono text-gray-600">
            <span>Matriz dos 5 Blocos ({totalPegadinhasBlocos} Pegadinhas)</span>
            <br />
            <span>Documento de Revisão de Véspera</span>
          </div>
        </div>
      </div>

      {/* SEÇÃO 1: MATRIZ CEBRASPE DOS 5 BLOCOS DO EDITAL 2026 */}
      <div className={activeTab === 'blocos' ? 'space-y-6' : 'hidden print:block space-y-6'}>
        {/* Controle do Modo Treino Ativo (Recall Ativo Teach) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface border border-border shadow-2xs no-print">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <span className="font-sans font-bold text-ink text-xs block">
                {modoTreinoAtivo ? 'Modo Treino Ativo Ligado (Recuperação Ativa)' : 'Modo Leitura Sintética'}
              </span>
              <p className="text-xs text-ink-2 font-serif m-0">
                {modoTreinoAtivo
                  ? 'Gabaritos e armadilhas estão ocultos. Julgue cada assertiva antes de conferir.'
                  : 'Exibição completa com gabaritos oficiais e armadilhas da banca abertos.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {modoTreinoAtivo && Object.keys(respostasTreino).length > 0 && (
              <button
                type="button"
                onClick={() => setRespostasTreino({})}
                className="px-2.5 py-1.5 rounded-lg bg-surface-2 border border-border text-xs font-semibold text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer"
                title="Reiniciar treino ativo"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar ({Object.keys(respostasTreino).length} respondidas)</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setModoTreinoAtivo(!modoTreinoAtivo)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                modoTreinoAtivo
                  ? 'bg-ok text-white shadow-xs'
                  : 'bg-accent text-white shadow-xs'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{modoTreinoAtivo ? 'Mudar para Leitura Sintética' : 'Ativar Treino de Véspera (Recall)'}</span>
            </button>
          </div>
        </div>

        {/* Filtro por Bloco no topo (Oculto na Impressão) */}
        <div className="flex flex-wrap items-center gap-1.5 no-print">
          <span className="text-xs font-semibold text-ink-2 mr-1">Filtrar Bloco:</span>
          <button
            type="button"
            onClick={() => setSelectedBloco('todos')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
              selectedBloco === 'todos'
                ? 'bg-ink text-surface font-bold'
                : 'bg-surface-2 text-ink-2 hover:text-ink border border-border'
            }`}
          >
            Todos os 5 Blocos (60)
          </button>
          {MATRIZ_BLOCOS_EDITAL_VESPERA.map((bloco) => (
            <button
              key={bloco.id}
              type="button"
              onClick={() => setSelectedBloco(bloco.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                selectedBloco === bloco.id
                  ? 'bg-accent text-white font-bold'
                  : 'bg-surface-2 text-ink-2 hover:text-ink border border-border'
              }`}
            >
              {bloco.sigla} ({bloco.pegadinhas.length})
            </button>
          ))}
        </div>

        {/* Listagem dos Blocos */}
        {blocosExibidos.map((bloco) => (
          <section
            key={bloco.id}
            className="bg-surface rounded-2xl border border-border p-6 space-y-5 print:p-3 print:border-black print:shadow-none shadow-editorial-xs print:break-before-page"
          >
            <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-accent text-white text-xs font-black font-mono">
                  {bloco.sigla}
                </span>
                <h2 className="text-base sm:text-lg font-black text-ink print:text-black m-0 tracking-normal">
                  {bloco.titulo}
                </h2>
              </div>
              <span className="text-xs font-mono text-ink-2 font-medium">
                Módulos: {bloco.modulosRelacionados.join(', ')} • {bloco.pegadinhas.length} Pegadinhas Capitais
              </span>
            </div>

            <p className="text-xs text-ink-2 font-serif leading-relaxed m-0 print:text-gray-800">
              {bloco.descricao}
            </p>

            <div className="space-y-3.5">
              {bloco.pegadinhas.map((item, pIdx) => {
                const respostaDada = respostasTreino[item.id];
                const estaRespondido = typeof respostaDada === 'string';
                const acertou = respostaDada === item.gabaritoOficial;
                const revelarConteudo = !modoTreinoAtivo || estaRespondido;

                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-surface-2/70 border border-border print:border-gray-400 space-y-2.5 text-xs font-serif leading-relaxed text-ink print:text-black shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2 font-mono text-xs border-b border-border/50 pb-1.5">
                      <span className="font-bold text-accent uppercase">
                        #{pIdx + 1} · {item.topico}
                      </span>

                      {/* Badge de Gabarito / Feedback */}
                      {revelarConteudo ? (
                        <div className="flex items-center gap-1.5">
                          {modoTreinoAtivo && (
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-mono font-bold flex items-center gap-1 ${
                                acertou
                                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                                  : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                              }`}
                            >
                              {acertou ? <Check className="w-3 h-3" /> : <XIcon className="w-3 h-3" />}
                              <span>{acertou ? 'ACERTOU' : 'CAIU NA PEGADINHA'}</span>
                            </span>
                          )}
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-accent dark:text-amber-400 font-bold">
                            GABARITO: {item.gabaritoOficial === 'E' ? 'ERRADO' : 'CERTO'}
                          </span>
                        </div>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-surface border border-border text-ink-2 font-mono text-xs">
                          Pendente de Julgamento
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="font-semibold text-ink-2 text-xs block mb-0.5">
                        Assertiva Típica Cebraspe:
                      </span>
                      <p className="font-medium italic m-0 text-ink bg-surface/60 p-2.5 rounded-lg border border-border/60">
                        "{item.afirmacaoFalsa}"
                      </p>
                    </div>

                    {/* Botões do Modo Treino Ativo (Visíveis apenas quando não respondido e modo ativo) */}
                    {modoTreinoAtivo && !estaRespondido && (
                      <div className="pt-1 flex items-center gap-2 no-print">
                        <span className="text-xs font-sans font-bold text-ink mr-1">Seu Julgamento:</span>
                        <button
                          type="button"
                          onClick={() => setRespostasTreino((prev) => ({ ...prev, [item.id]: 'C' }))}
                          className="px-3 py-1.5 rounded-lg bg-surface border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-sans font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>CERTO (C)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setRespostasTreino((prev) => ({ ...prev, [item.id]: 'E' }))}
                          className="px-3 py-1.5 rounded-lg bg-surface border border-rose-500/40 hover:bg-rose-500/10 text-rose-700 dark:text-rose-300 font-sans font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <XIcon className="w-3.5 h-3.5" />
                          <span>ERRADO (E)</span>
                        </button>
                      </div>
                    )}

                    {respostasTreino[item.id] && <PainelEstudoReverso questao={{ id: item.id, item: item.afirmacaoFalsa,
                      gabarito: item.gabaritoOficial, justificativa: item.fundamentacaoCanonico, armadilhaBanca: item.armadilhaCebraspe,
                      submoduloId: item.submoduloRef }} resposta={respostasTreino[item.id]} autoexplicacao={false} />}
                    {/* Explicação e Fundamentação */}
                    <div className={`text-xs space-y-1 ${revelarConteudo ? 'block' : 'hidden print:block'}`}>
                      <p className="m-0 text-rose-700 dark:text-rose-400">
                        <strong>⚠️ Armadilha da Banca:</strong> {item.armadilhaCebraspe}
                      </p>
                      <p className="m-0 text-emerald-700 dark:text-emerald-400">
                        <strong>Fundamentação Canônica:</strong> {item.fundamentacaoCanonico}
                      </p>
                      <p className="m-0 text-ink-2 font-mono text-xs">
                        <strong>Fonte Primária:</strong> {item.fontePrimaria} (Ref: §{item.submoduloRef})
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* SEÇÃO 3: FÓRMULAS MNEMÔNICAS (METODOLOGIA TEACH) */}
      <div className={activeTab === 'mnemonicos' ? 'space-y-6' : 'hidden print:block space-y-6'}>
        <PainelMnemonicosLegislativo />
      </div>

      {/* SEÇÃO 2: MINHA SÍNTESE DE PROGRESSO (REGRA B9) */}
      <div className={activeTab === 'progresso' ? 'space-y-6' : 'hidden print:block space-y-6'}>
        {/* CASO VAZIO */}
        {completedSubmodules.length === 0 && (
          <div className="bg-surface rounded-2xl border border-dashed border-border p-8 text-center space-y-4 no-print">
            <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center mx-auto text-ink-2">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="text-base font-bold text-ink">Nenhum submódulo concluído ainda</h3>
              <p className="text-xs text-ink-2 font-serif leading-relaxed">
                Em respeito à fidelidade pedagógica, a síntese pessoal consolida apenas conteúdos das
                etapas em que você atingiu 85% de acertos nos micro-checkpoints.
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

        {/* CASO COM CONTEÚDO */}
        {completedSubmodules.length > 0 && (
          <div className="space-y-6">
            {/* BLOCO 1: AUTORES CANÔNICOS E DOUTRINAS */}
            {autoresConsolidados.length > 0 && (
              <section className="bg-surface rounded-2xl border border-border p-6 space-y-4 print:p-2 print:border-black print:shadow-none break-inside-avoid shadow-editorial-xs">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Sparkles className="w-4 h-4 text-accent print:text-black" />
                  <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                    Autores Canônicos e Doutrinas Concluídas ({autoresConsolidados.length})
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
                        <span className="text-xs font-mono text-accent print:text-gray-700">
                          §{item.subNumero}
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 print:text-black leading-snug font-serif m-0">
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
                    Matrizes e Quadros Comparativos dos Módulos Concluídos ({quadrosConsolidados.length})
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
                  <AlertTriangle className="w-4 h-4 text-accent print:text-black" />
                  <h2 className="text-sm font-black uppercase tracking-wider text-ink print:text-black m-0 font-sans">
                    Alertas e Armadilhas dos Submódulos Concluídos ({alertasConsolidados.length + pegadinhasConsolidadas.length})
                  </h2>
                </div>

                <div className="space-y-3">
                  {alertasConsolidados.map((alerta, idx) => (
                    <div
                      key={`alerta-${idx}`}
                      className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-l-amber-500 border-y border-r border-border print:border-gray-400 text-xs font-serif leading-relaxed text-ink print:text-black"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono text-accent dark:text-amber-400 uppercase font-bold mb-1">
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
                      <div className="flex items-center justify-between text-xs font-mono text-ink-2 font-bold mb-1">
                        <span>Pegadinha Recorrente • Submódulo {pegadinha.subNumero}</span>
                      </div>
                      <p className="font-semibold m-0 text-ink print:text-black">"{pegadinha.afirmacao}"</p>
                      {pegadinha.armadilha && (
                        <p className="text-xs text-accent print:text-black mt-1 m-0">
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
                    Marcos Cronológicos Históricos ({timelineConsolidada.length})
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
                        <span className="text-xs font-mono text-ink-2">
                          Submódulo {item.subNumero}
                        </span>
                      </div>
                      <div className="font-bold text-ink print:text-black">{item.disciplina}</div>
                      <div className="text-xs text-ink-2 print:text-black font-serif">
                        {item.focoPrincipal}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>

      {/* RODAPÉ DE IMPRESSÃO */}
      <div className="hidden print:block text-center text-xs text-gray-500 pt-4 border-t border-gray-300">
        Plataforma Heuller na Câmara · Analista Legislativo — Bibliotecário · Preparação Editorial e Soberba
      </div>
    </div>
  );
};
