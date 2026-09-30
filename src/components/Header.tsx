import { BookOpen, Award, BarChart3, ShieldCheck, Flame, Scale } from 'lucide-react';

interface HeaderProps {
  activeView: 'teoria' | 'simulado' | 'metacognicao';
  setActiveView: (view: 'teoria' | 'simulado' | 'metacognicao') => void;
  notaLiquida: number;
  totalRespondidas: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  notaLiquida,
  totalRespondidas
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 py-3.5 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3.5 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/25 text-slate-950 font-black text-xl tracking-tighter">
                HC
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                <Scale className="w-3 h-3 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg lg:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  Heuller na Câmara
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Cebraspe 100Q
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Câmara dos Deputados • Analista Legislativo: Bibliotecário
              </p>
            </div>
          </div>

          {/* Mobile Streak & Score */}
          <div className="flex md:hidden items-center gap-2">
            <div className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60 text-xs font-bold text-amber-400">
              Líq: {notaLiquida}
            </div>
          </div>
        </div>

        {/* View Switcher / Tabs */}
        <nav className="flex items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 shadow-inner w-full md:w-auto justify-center">
          <button
            onClick={() => setActiveView('teoria')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeView === 'teoria'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Módulo Teórico</span>
          </button>

          <button
            onClick={() => setActiveView('simulado')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeView === 'simulado'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Simulado 100Q Guiado</span>
            {totalRespondidas > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeView === 'simulado' ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                {totalRespondidas}/100
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveView('metacognicao')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeView === 'metacognicao'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Radar Cebraspe</span>
          </button>
        </nav>

        {/* Right Info: Streak & Quick Status */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="font-semibold text-white">5 dias</span>
            <span className="text-slate-400">constância</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/70 text-xs shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Nota Líquida:</span>
            <span className={`font-black text-sm ${notaLiquida > 0 ? 'text-emerald-400' : notaLiquida < 0 ? 'text-rose-400' : 'text-slate-300'}`}>
              {notaLiquida > 0 ? `+${notaLiquida}` : notaLiquida}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
