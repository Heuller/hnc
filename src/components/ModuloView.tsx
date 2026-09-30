import { useState } from 'react';
import { moduloFundamentos } from '../data/moduloFundamentos';
import type { ModuloFilho } from '../data/types';
import { 
  BookOpen, Clock, AlertTriangle, Users, CheckCircle2, 
  ChevronRight, Sparkles, ArrowRight, Table, Lightbulb
} from 'lucide-react';

interface ModuloViewProps {
  onGoToSimulado: () => void;
}

// Micro-checkpoints for active retrieval practice inside each submodule
const MICRO_CHECKPOINTS: Record<string, {
  pergunta: string;
  item: string;
  gabarito: 'C' | 'E';
  justificativa: string;
}[]> = {
  'sub-1-1': [
    {
      pergunta: "Micro-Checkpoint 1: Conceito Canônico de Ciência da Informação",
      item: "A Ciência da Informação é definida como a disciplina que investiga as propriedades e o comportamento da informação, as forças que governam seus fluxos e os meios de processá-la para acesso e uso otimizados.",
      gabarito: 'C',
      justificativa: "Correto! Esta é a clássica definição de Harold Borko (1968), uma das mais cobradas pelo Cebraspe."
    },
    {
      pergunta: "Micro-Checkpoint 2: A Divisão de Yves-François Le Coadic",
      item: "Conforme Le Coadic, a 'biblioteconomia dos livros' refere-se ao estudo das práticas de leitura e necessidades de informação dos usuários.",
      gabarito: 'E',
      justificativa: "Errado! A 'biblioteconomia dos livros' foca na gestão técnica e física do acervo; é a 'biblioteconomia dos leitores' que se ocupa dos usuários e de suas práticas."
    }
  ],
  'sub-1-2': [
    {
      pergunta: "Micro-Checkpoint 1: Foco da Segunda vs Terceira Lei",
      item: "A segunda lei de Ranganathan ('A cada leitor o seu livro') tem o documento bibliográfico como elemento central de sua formulação.",
      gabarito: 'E',
      justificativa: "Errado! A 2ª Lei parte do LEITOR (usuário) e exige democratização. A 3ª Lei ('A cada livro o seu leitor') é que parte do DOCUMENTO para garantir visibilidade."
    },
    {
      pergunta: "Micro-Checkpoint 2: Releituras Contemporâneas",
      item: "Na releitura das Cinco Leis para a era da informação, os termos clássicos 'livro' e 'leitor' foram reinterpretados respectivamente como 'informação' e 'usuário'.",
      gabarito: 'C',
      justificativa: "Certo! Formulações de teóricos contemporâneos como Rettig e Thompson realizaram essa transposição direta para o universo digital."
    }
  ],
  'sub-1-3': [
    {
      pergunta: "Micro-Checkpoint 1: Buckland e a Informação como Coisa",
      item: "Para Michael Buckland, a dimensão da 'informação como coisa' exclui qualquer objeto tridimensional ou artefato da natureza, aplicando-se apenas a livros impressos.",
      gabarito: 'E',
      justificativa: "Errado! Buckland enfatiza que qualquer entidade física tangível (inclusive fósseis, esculturas, gravações) é informação como coisa quando portadora de evidência informativa."
    },
    {
      pergunta: "Micro-Checkpoint 2: Requisitos do Documento (Briet)",
      item: "Suzanne Briet definiu documento como todo indício ou suporte material conservado ou registrado com o fim de representar, reconstituir ou provar um fenômeno.",
      gabarito: 'C',
      justificativa: "Correto! A célebre definição de Briet (1951) exige materialidade, intencionalidade e capacidade de funcionar como indício ou prova."
    }
  ],
  'sub-1-4': [
    {
      pergunta: "Micro-Checkpoint 1: Atribuições Privativas (Lei 4.084/62)",
      item: "A catalogação e a classificação de documentos constituem atribuições privativas dos bacharéis em Biblioteconomia no Brasil.",
      gabarito: 'C',
      justificativa: "Certo! O Art. 6º, alínea 'b', da Lei nº 4.084/1962 estabelece expressamente essa exclusividade profissional."
    },
    {
      pergunta: "Micro-Checkpoint 2: Penalidades Éticas e Competência",
      item: "A sanção de cassação definitiva do registro profissional pode ser aplicada de forma autônoma por qualquer Conselho Regional de Biblioteconomia em decisão singular.",
      gabarito: 'E',
      justificativa: "Errado! A cassação do registro é a penalidade máxima e é de competência EXCLUSIVA do Conselho Federal de Biblioteconomia (CFB), dependendo de processo com contraditório e ampla defesa."
    }
  ]
};

export const ModuloView: React.FC<ModuloViewProps> = ({ onGoToSimulado }) => {
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);
  const [checkpointAnswers, setCheckpointAnswers] = useState<Record<string, 'C' | 'E'>>({});

  const currentSub: ModuloFilho = moduloFundamentos.modulosFilhos[selectedSubIndex];
  const checkpoints = MICRO_CHECKPOINTS[currentSub.id] || [];

  const handleAnswerCheckpoint = (cpIndex: number, answer: 'C' | 'E') => {
    const key = `${currentSub.id}-${cpIndex}`;
    setCheckpointAnswers(prev => ({ ...prev, [key]: answer }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner Topo Macro-Módulo */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Módulo 1 • Fundamentos Teóricos e Normativos
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {moduloFundamentos.titulo}
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            {moduloFundamentos.descricao}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>4 Módulos-Filhos densamente fundamentados</span>
            </div>
            <button
              onClick={onGoToSimulado}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-4 py-2 rounded-lg shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Ir para o Simulado de 100 Questões C/E</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Submodule Navigation Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {moduloFundamentos.modulosFilhos.map((sub, idx) => {
          const isSelected = idx === selectedSubIndex;
          return (
            <button
              key={sub.id}
              onClick={() => setSelectedSubIndex(idx)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-amber-400 tracking-wider">
                  MÓDULO {sub.numero}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {sub.tempoEstimadoMinutos} min
                </span>
              </div>
              <h4 className="text-xs md:text-sm font-bold text-white line-clamp-2 leading-snug">
                {sub.titulo}
              </h4>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                {sub.descricaoCurta}
              </p>
            </button>
          );
        })}
      </div>

      {/* Submodule Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Main Column: Theory & Tables */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header of Active Submodule */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="border-b border-slate-800/80 pb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                <BookOpen className="w-4 h-4" />
                Módulo-Filho {currentSub.numero}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                {currentSub.titulo}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {currentSub.descricaoCurta}
              </p>

              {/* Autores Chave */}
              <div className="flex flex-wrap items-center gap-2 pt-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mr-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Autores canônicos:</span>
                </div>
                {currentSub.autoresChave.map((autor, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/80 text-amber-200/90 font-medium"
                  >
                    {autor}
                  </span>
                ))}
              </div>
            </div>

            {/* Alertas Cebraspe (Cascas de Banana Mapeadas) */}
            <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-800/40 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>⚠️ Alertas Cebraspe: Como a banca tenta derrubar o candidato</span>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                {currentSub.alertasCebraspe.map((alerta, alIdx) => (
                  <li key={alIdx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{alerta}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quadro Comparativo se houver */}
            {currentSub.quadroComparativo && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Table className="w-4 h-4 text-amber-400" />
                  <span>{currentSub.quadroComparativo.titulo}</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/90 text-amber-300 font-semibold border-b border-slate-800">
                      <tr>
                        {currentSub.quadroComparativo.colunas.map((col, cIdx) => (
                          <th key={cIdx} className="p-3.5 whitespace-nowrap">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {currentSub.quadroComparativo.linhas.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className={`p-3.5 leading-relaxed ${cIdx === 0 ? 'font-bold text-white bg-slate-900/20' : ''}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Teoria Densa Formatada */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm md:text-base leading-relaxed pt-4 border-t border-slate-800/80 space-y-4">
              {currentSub.teoriaDensaMarkdown.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={pIdx} className="text-lg md:text-xl font-bold text-amber-300 border-l-4 border-amber-500 pl-3 pt-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('#### ')) {
                  return (
                    <h4 key={pIdx} className="text-base font-bold text-white pt-2 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                      {paragraph.replace('#### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={pIdx} className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-amber-500 text-amber-100/90 italic my-3 text-xs md:text-sm">
                      {paragraph.replace('> ', '')}
                    </blockquote>
                  );
                }
                return (
                  <p key={pIdx} className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Micro-Checkpoints: Retrieval Practice Interativo */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span>Micro-Checkpoints de Fixação Imediata (Testing Effect)</span>
              </div>
              <span className="text-xs text-slate-400">
                Responda para validar a fixação da leitura
              </span>
            </div>

            <div className="space-y-4">
              {checkpoints.map((cp, cpIdx) => {
                const answerKey = `${currentSub.id}-${cpIdx}`;
                const userAnswer = checkpointAnswers[answerKey];
                const isAnswered = userAnswer !== undefined;
                const isCorrect = userAnswer === cp.gabarito;

                return (
                  <div key={cpIdx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-amber-300/90">
                        {cp.pergunta}
                      </span>
                      {isAnswered && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                          isCorrect ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                          {isCorrect ? 'Acertou!' : 'Errou! (Penalidade Cebraspe)'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed">
                      {cp.item}
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={() => handleAnswerCheckpoint(cpIdx, 'C')}
                        disabled={isAnswered}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          userAnswer === 'C'
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : isAnswered && cp.gabarito === 'C'
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        CERTO
                      </button>
                      <button
                        onClick={() => handleAnswerCheckpoint(cpIdx, 'E')}
                        disabled={isAnswered}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          userAnswer === 'E'
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : isAnswered && cp.gabarito === 'E'
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        ERRADO
                      </button>
                    </div>

                    {isAnswered && (
                      <div className="pt-2 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800 leading-relaxed">
                        <strong className="text-amber-400">Gabarito: {cp.gabarito === 'C' ? 'CERTO' : 'ERRADO'}</strong> — {cp.justificativa}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Schematics & Quick Mnemonic Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Resumo & Mnemônicos Rápidos</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
              {currentSub.resumoEsquematizadoMarkdown}
            </div>

            {/* CTA para o Simulado de 100 Questões */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Pronto para a Prova de Fogo?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Testes práticos consolidados de 100 itens estilo Cebraspe baseados exatamente nos 4 submódulos teóricos.
              </p>
              <button
                onClick={onGoToSimulado}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <span>Acessar Simulado de 100 Questões</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
