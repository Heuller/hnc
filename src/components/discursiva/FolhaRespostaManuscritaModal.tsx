import { AccessibleModal } from '../common/AccessibleModal';
import React from 'react';
import { Printer, X, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import type { TemaDiscursiva } from '../../domain/discursiva/types';

interface FolhaRespostaManuscritaModalProps {
  tema: TemaDiscursiva;
  textoCandidato?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const FolhaRespostaManuscritaModal: React.FC<FolhaRespostaManuscritaModalProps> = ({
  tema,
  textoCandidato = '',
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const totalLinhas = tema.limiteLinhas || (tema.tipo === 'questao_20' ? 20 : 50);
  const isPeca = tema.tipo === 'peca_50';

  // Se houver texto, divide em linhas estimadas para visualização prévia
  const linhasDigitadas = textoCandidato ? textoCandidato.split('\n') : [];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AccessibleModal open={isOpen} onClose={onClose} title="Folha de prática manuscrita"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:fixed print:inset-0"
    >
      <div className="bg-surface border border-border rounded-2xl w-full max-w-4xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden print:max-h-none print:max-w-none print:border-none print:shadow-none print:rounded-none">
        {/* Barra Superior (Oculta na impressão) */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-surface-2/60 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink font-serif">
                Folha de prática manuscrita (modelo HNC)
              </h3>
              <p className="text-xs text-ink-2 font-mono">
                {isPeca ? 'Peça Técnica (até 50 linhas - 30 pts)' : 'Questão Discursiva (até 20 linhas - 15 pts)'} · Edital nº 1/2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir Folha A4</span>
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Conteúdo Imprimível A4 */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 print:p-0 print:overflow-visible print:space-y-4">
          {/* Alerta de Treino Real (Apenas em tela) */}
          <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-2 print:hidden">
            <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">
                Instrução de Treino Obrigatória (Escrita Manuscrita):
              </p>
              <p className="font-serif leading-relaxed text-ink-2">
                O Cebraspe exige caneta preta transparente e reprova candidatos que ultrapassam a margem direita da folha.
                Imprima esta folha em papel A4 e faça a redação à mão controlando o tempo no cronômetro. Após concluir, transcreva para o editor do aplicativo para submeter à calibragem com o espelho oficial e IA.
              </p>
            </div>
          </div>

          {/* FOLHA OFICIAL PADRÃO CEBRASPE */}
          <div className="border-2 border-zinc-900 dark:border-zinc-700 p-4 sm:p-6 bg-white text-zinc-900 font-sans print:border-zinc-900 print:text-zinc-900 print:p-4 text-xs">
            {/* Cabeçalho Oficial */}
            <div className="border-b-2 border-zinc-900 pb-3 mb-4 space-y-2">
              <div className="flex justify-between items-center text-center">
                <div className="text-left font-mono font-bold text-xs uppercase tracking-wider">
                  CEBRASPE / CÂMARA DOS DEPUTADOS
                  <div className="font-normal text-zinc-600">Edital nº 1 – Analista Legislativo</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-black text-sm uppercase tracking-wide">
                    PROVA DISCURSIVA (P3)
                  </div>
                  <div className="font-mono text-xs font-bold">
                    FOLHA DE TEXTO DEFINITIVO
                  </div>
                </div>
                <div className="text-right font-mono font-bold text-xs">
                  CARGO 5: BIBLIOTECÁRIO
                  <div className="font-normal text-zinc-600">{isPeca ? 'PEÇA TÉCNICA' : 'QUESTÃO DISCURSIVA'}</div>
                </div>
              </div>

              {/* Campos de Identificação Simulados */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-300 font-mono text-xs">
                <div className="border border-zinc-400 p-1 rounded">
                  <span className="text-zinc-500 block">NOME DO CANDIDATO:</span>
                  <span className="font-bold">RICHARD (SIMULAÇÃO OFICIAL HNC)</span>
                </div>
                <div className="border border-zinc-400 p-1 rounded">
                  <span className="text-zinc-500 block">INSCRIÇÃO:</span>
                  <span className="font-bold">2026-CD-005891</span>
                </div>
                <div className="border border-zinc-400 p-1 rounded">
                  <span className="text-zinc-500 block">TEMA / LIMITE:</span>
                  <span className="font-bold">Até {totalLinhas} linhas</span>
                </div>
              </div>
            </div>

            {/* Caixa do Enunciado Resumido */}
            <div className="bg-zinc-50 border border-zinc-300 p-2.5 rounded mb-4 font-serif text-xs leading-snug">
              <span className="font-bold font-sans uppercase text-xs text-zinc-600 block mb-0.5">
                Tema Proposto: {tema.titulo}
              </span>
              <p className="italic text-zinc-800">
                "{tema.enunciado}"
              </p>
            </div>

            {/* Pauta Regulamentar Numerada */}
            <div className="space-y-0 border-y border-zinc-900 font-mono text-xs">
              {Array.from({ length: totalLinhas }, (_, i) => {
                const numLinha = i + 1;
                const textoLinha = linhasDigitadas[i] || '';
                return (
                  <div
                    key={numLinha}
                    className="flex items-center h-7 sm:h-8 border-b border-zinc-200 border-dashed relative"
                  >
                    {/* Número da linha */}
                    <div className="w-8 shrink-0 text-right pr-2 text-zinc-500 font-bold select-none border-r border-zinc-300">
                      {String(numLinha).padStart(2, '0')}
                    </div>
                    {/* Espaço de Escrita com Guias de Margem */}
                    <div className="flex-1 px-3 font-serif text-[13px] text-zinc-800 truncate flex items-center">
                      {textoLinha && (
                        <span className="opacity-80 select-all">{textoLinha}</span>
                      )}
                    </div>
                    {/* Linha de Margem Direita Cebraspe */}
                    <div className="w-2 shrink-0 border-l border-red-300 h-full" title="Margem Direita (Não ultrapassar)" />
                  </div>
                );
              })}
            </div>

            {/* Instruções Regulamentares de Rodapé (Itens 9.4 e 9.8.5.1 do Edital) */}
            <div className="mt-4 pt-3 border-t border-zinc-400 text-xs text-zinc-600 leading-tight space-y-1">
              <p className="font-bold uppercase text-zinc-800">
                Instruções Obrigatórias ao Candidato (Edital nº 1/2026, itens 9.4 a 9.8.5):
              </p>
              <ul className="list-disc pl-4 space-y-0.5 font-sans">
                <li>Escreva com caneta esferográfica de tinta preta e tubo de material transparente.</li>
                <li>Não assine, rubrique nem faça qualquer sinal identificador fora do campo apropriado do cabeçalho sob pena de anulação sumária.</li>
                <li>Qualquer fragmento de texto escrito fora da pauta ou que ultrapasse a linha máxima ({totalLinhas}) será desconsiderado na pontuação de conteúdo (subitem 9.8.5.1(c)).</li>
                <li>Fórmula de avaliação Cebraspe: penalização rigorosa por erro gramatical proporcional ao número de linhas efetivamente escritas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-surface-2/40 print:hidden text-xs">
          <span className="text-ink-2 font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-ok" />
            <span>Padrão 100% fiel ao espelho oficial da Câmara dos Deputados</span>
          </span>
          <Button variant="outline" size="sm" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </AccessibleModal>
  );
};
