import { Target, BarChart2, BookOpen, ArrowRight } from 'lucide-react';
import { simuladoFundamentos100Q } from '../data/simuladoFundamentos100Q';

interface PainelMetacognitivoProps {
  certos: number;
  errados: number;
  emBranco: number;
  notaLiquida: number;
  onGoToSimulado: () => void;
}

export const PainelMetacognitivo: React.FC<PainelMetacognitivoProps> = ({
  certos,
  errados,
  emBranco,
  notaLiquida,
  onGoToSimulado
}) => {
  const total = simuladoFundamentos100Q.length;
  const respondidas = certos + errados + emBranco;
  const aproveitamentoLiquido = total > 0 ? Math.max(0, Math.round((notaLiquida / total) * 100)) : 0;

  // Perfil de Risco Cebraspe
  let perfil = {
    titulo: 'Em Calibração',
    descricao: 'Responda aos itens do simulado para que o radar calcule sua precisão e gestão de risco.',
    cor: 'text-slate-400',
    badge: 'bg-slate-800 text-slate-300'
  };

  if (respondidas >= 15) {
    if (errados > certos) {
      perfil = {
        titulo: 'Perfil Hiperagressivo (Risco Crítico)',
        descricao: 'Você está errando mais do que acertando. No Cebraspe, cada erro anula um acerto e derruba sua pontuação líquida. Utilize mais o recurso DEIXAR EM BRANCO nos itens de dúvida.',
        cor: 'text-rose-400',
        badge: 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
      };
    } else if (notaLiquida >= 55) {
      perfil = {
        titulo: 'Perfil Competitivo Câmara dos Deputados',
        descricao: 'Excelente taxa de aproveitamento líquido! Sua precisão conceitual e gestão de risco estão alinhadas com o padrão de corte para Analista Legislativo.',
        cor: 'text-emerald-400',
        badge: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
      };
    } else if (emBranco > respondidas * 0.5) {
      perfil = {
        titulo: 'Perfil Conservador / Cauteloso',
        descricao: 'Você está protegendo seus pontos, mas deixando muitas questões sem julgamento. Para alcançar a nota de corte da Câmara, tente aprofundar os módulos teóricos para arriscar mais assertivas com convicção.',
        cor: 'text-amber-400',
        badge: 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
      };
    } else {
      perfil = {
        titulo: 'Perfil Moderado em Evolução',
        descricao: 'Bom equilíbrio inicial, mas ainda há margem de perda em armadilhas conceituais da banca. Revise as justificativas dos itens com gabarito Errado.',
        cor: 'text-blue-400',
        badge: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
      };
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner de Diagnóstico */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/25">
            <BarChart2 className="w-3.5 h-3.5" />
            Radar Metacognitivo & Gestão de Risco Cebraspe
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Análise de Desempenho e Calibração de Prova
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            No concurso da Câmara dos Deputados, passar não é apenas questão de quanto você sabe, mas de <strong>saber o que você não sabe</strong> para não perder pontos preciosos na regra <em>1 Erro Anula 1 Certo</em>.
          </p>
        </div>
      </div>

      {/* Grid de Diagnóstico Principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Perfil de Risco */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              Diagnóstico Comportamental
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${perfil.badge}`}>
              {perfil.titulo}
            </span>
          </div>

          <h3 className={`text-xl font-bold ${perfil.cor}`}>
            {perfil.titulo}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {perfil.descricao}
          </p>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Nota Líquida</span>
              <span className={`text-xl font-black ${notaLiquida > 0 ? 'text-emerald-400' : 'text-slate-200'}`}>
                {notaLiquida > 0 ? `+${notaLiquida}` : notaLiquida}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Aproveitamento</span>
              <span className="text-xl font-black text-amber-400 font-mono">
                {aproveitamentoLiquido}%
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Em Branco</span>
              <span className="text-xl font-black text-slate-300 font-mono">
                {emBranco}
              </span>
            </div>
          </div>
        </div>

        {/* Card Recomendação Rápida */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Target className="w-4 h-4 text-amber-400" />
              <span>Meta da Câmara</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Nota de Corte Projetada
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Para o cargo de Bibliotecário da Câmara dos Deputados, historicamente a nota líquida competitiva em conhecimentos específicos gira em torno de <strong>65% a 75% líquidos</strong>.
            </p>
          </div>

          <button
            onClick={onGoToSimulado}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continuar Simulado 100Q</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabela de Distribuição Teórica dos 100 Itens */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-extrabold text-white uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Estrutura dos 100 Itens do Simulado de Fundamentos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-amber-400">Submódulo 1.1</span>
            <h5 className="text-xs font-bold text-white">História, Fronteiras & CI</h5>
            <p className="text-[11px] text-slate-400">25 itens (Borko, Otlet, Briet, Le Coadic, Bush, Saracevic)</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-amber-400">Submódulo 1.2</span>
            <h5 className="text-xs font-bold text-white">5 Leis de Ranganathan</h5>
            <p className="text-[11px] text-slate-400">25 itens (Axiomas clássicos de 1931 e releituras Gorman/Rettig)</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-amber-400">Submódulo 1.3</span>
            <h5 className="text-xs font-bold text-white">Dado, Informação & Documento</h5>
            <p className="text-[11px] text-slate-400">25 itens (Buckland: Information as Thing, Briet, Mey, DIKW)</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-amber-400">Submódulo 1.4</span>
            <h5 className="text-xs font-bold text-white">Legislação & Ética CFB</h5>
            <p className="text-[11px] text-slate-400">25 itens (Lei 4.084/62, atribuições privativas e Código de Ética)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
