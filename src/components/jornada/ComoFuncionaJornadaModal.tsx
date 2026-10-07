import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, DoorOpen, RotateCcw, Compass, HelpCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { IllustrationPortal } from '../illustrations/ContextualIllustrations';

interface ComoFuncionaJornadaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComoFuncionaJornadaModal: React.FC<ComoFuncionaJornadaModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleEntendi = () => {
    localStorage.setItem('hnc_jornada_intro_seen', 'true');
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="jornada-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full max-w-xl bg-surface border border-border rounded-2xl shadow-editorial-lg overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border flex items-start justify-between gap-4 bg-surface-2/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 id="jornada-modal-title" className="text-lg font-serif font-bold text-ink">
                  Como funciona a Jornada
                </h2>
                <p className="text-xs text-ink-2 font-mono">
                  Metodologia de Progressão por Domínio Cebraspe
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-ink-2 scrollbar-thin">
            {/* Vinheta Editorial da Jornada */}
            <div className="flex flex-col items-center justify-center py-2 text-accent border-b border-border/60 pb-4">
              <IllustrationPortal width={140} height={90} ariaLabel="Portal de Verificação da Jornada" />
              <p className="text-[11px] font-sans text-ink-2 text-center mt-2 max-w-sm">
                Diretriz pedagógica: A progressão para a próxima etapa ocorre após a consolidação do conteúdo anterior.
              </p>
            </div>
            {/* Regra 1 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  1. Progressão Sequencial
                </h3>
                <p className="text-xs leading-relaxed">
                  Cada etapa só abre quando a anterior é concluída. Não há atalhos artificiais: você avança garantindo que cada conceito da ementa foi verdadeiramente assimilado.
                </p>
              </div>
            </div>

            {/* Regra 2 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  2. Limiares de Aprovação por Domínio
                </h3>
                <p className="text-xs leading-relaxed">
                  Para concluir qualquer verificação de submódulo ou portal, é obrigatório atingir ao menos 85% de acertos inteiros (ex: 3 em 3 nos checkpoints canônicos oficiais, 17 em 20 no portal). Para os Simulados de Módulo (100 itens), o limiar exigido é de 80% (80 em 100). A nota líquida Cebraspe (C − E) é exibida à parte para sua autoavaliação.
                </p>
              </div>
            </div>

            {/* Regra 3 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                <DoorOpen className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  3. Portais de Revisão Entre Módulos
                </h3>
                <p className="text-xs leading-relaxed">
                  Ao concluir o Desafio de um módulo a partir de M2, surge um Portal de Revisão de 20 itens com paridade estrita (50% Certos e 50% Errados). Ele revisa o módulo imediatamente anterior (70%) e módulos prévios (30%) antes de liberar o próximo assunto.
                </p>
              </div>
            </div>

            {/* Regra 4 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  4. Revisão Dirigida e Tentativas Ilimitadas
                </h3>
                <p className="text-xs leading-relaxed">
                  Se o rendimento ficar abaixo de 85%, a etapa entra em <span className="font-semibold text-ink">Revisão Dirigida</span>. O sistema mapeia os itens errados por seção e exige reabrir os tópicos com falha antes da nova tentativa. Cada tentativa tem composição diferente.
                </p>
              </div>
            </div>

            {/* Regra 5 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  5. Modo Livre (Opcional)
                </h3>
                <p className="text-xs leading-relaxed">
                  Disponível em Preferências com confirmação. Libera a navegação por qualquer etapa para consultas pontuais; todo estudo nesse modo é sinalizado como "fora da trilha" e não distorce seus indicadores de domínio e prontidão.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t border-border bg-surface-2/30 flex justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={handleEntendi}
              className="w-full sm:w-auto"
            >
              Entendi as Regras da Jornada
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
