import { useState } from 'react';
import { Header } from './components/Header';
import { ModuloView } from './components/ModuloView';
import { SimuladoGuiado100Q } from './components/SimuladoGuiado100Q';
import { PainelMetacognitivo } from './components/PainelMetacognitivo';

export function App() {
  const [activeView, setActiveView] = useState<'teoria' | 'simulado' | 'metacognicao'>('teoria');
  const [certos, setCertos] = useState(0);
  const [errados, setErrados] = useState(0);
  const [emBranco, setEmBranco] = useState(0);
  const [notaLiquida, setNotaLiquida] = useState(0);

  const handleUpdateStats = (c: number, e: number, b: number, nl: number) => {
    setCertos(c);
    setErrados(e);
    setEmBranco(b);
    setNotaLiquida(nl);
  };

  const totalRespondidas = certos + errados + emBranco;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Fixed Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        notaLiquida={notaLiquida}
        totalRespondidas={totalRespondidas}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl mx-auto p-4 md:p-6 lg:p-8 w-full">
        {activeView === 'teoria' && (
          <ModuloView onGoToSimulado={() => setActiveView('simulado')} />
        )}

        {activeView === 'simulado' && (
          <SimuladoGuiado100Q onUpdateStats={handleUpdateStats} />
        )}

        {activeView === 'metacognicao' && (
          <PainelMetacognitivo
            certos={certos}
            errados={errados}
            emBranco={emBranco}
            notaLiquida={notaLiquida}
            onGoToSimulado={() => setActiveView('simulado')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 px-6 text-center text-xs text-slate-500 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">Heuller na Câmara</span>
            <span>• Concurso Câmara dos Deputados</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Metodologia Cebraspe: 1 Erro Anula 1 Certo • Plataforma de Aprendizagem Ativa com Fundamentação Canônica
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
