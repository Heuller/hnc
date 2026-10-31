import { AccessibleModal } from '../common/AccessibleModal';
import React from 'react';
import { AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, DoorOpen, RotateCcw, Compass } from 'lucide-react';
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
      <AccessibleModal open={isOpen} onClose={onClose} title="Como funciona a Jornada"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto"
      >
        <div
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
          <div tabIndex={0} aria-label="Orientações da jornada" className="p-5 sm:p-6 space-y-4 max-h-[70dvh] overflow-y-auto focus-visible:outline-2 text-sm text-ink-2 scrollbar-thin">
            {/* Vinheta Editorial da Jornada */}
            <div className="flex flex-col items-center justify-center py-2 text-accent pb-4">
              <IllustrationPortal width={140} height={90} ariaLabel="Portal de Verificação da Jornada" />
              <p className="text-xs font-sans text-ink-2 text-center mt-2 max-w-sm">
                Diretriz pedagógica: Estudo livre e irrestrito com recomendação inteligente e selos de consolidação.
              </p>
            </div>

            {/* Regra 1 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-ok dark:text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  1. Modo Livre Permanente (Sem Travas)
                </h3>
                <p className="text-xs leading-relaxed">
                  Todas as etapas, submódulos e simulados estão permanentemente abertos para navegação e consulta. Não há cadeados nem bloqueios artificiais: você é o dono do seu ritmo de preparação.
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
                  2. Conclusão e Selos de Domínio
                </h3>
                <p className="text-xs leading-relaxed">
                  A etapa é concluída por <strong>Domínio Comprovado</strong> no Portão de Verificação (&ge; 85% de acertos) OU pela <strong>Leitura Integral</strong> de todas as seções e micro-checkpoints da Teoria. Caso aprove no Portão antes de ler as seções, o submódulo é reconhecido com o selo <em>Domínio comprovado · leitura pendente</em>. O aproveitamento é atestado por Selos de Proficiência: <em>Em Andamento</em>, <em>Consolidado</em> (&ge; 85% de acertos) e <em>Dominado</em> (&ge; 85% com retenção espaçada após 7 dias).
                </p>
              </div>
            </div>

            {/* Regra 3 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  3. Próxima Ação Recomendada Inteligente
                </h3>
                <p className="text-xs leading-relaxed">
                  A plataforma aponta de forma determinística a ação mais produtiva para a sua sessão, priorizando: (1º) Revisões periódicas vencidas, (2º) Tópicos com pontos fracos e (3º) Novos temas da esteira do edital.
                </p>
              </div>
            </div>

            {/* Regra 4 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-accent dark:text-amber-400 shrink-0 mt-0.5">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  4. Revisões Periódicas e Repetição Espaçada
                </h3>
                <p className="text-xs leading-relaxed">
                  Submódulos de revisão cumulativa (20 itens com simetria 50% C e 50% E) e o baralho Leitner garantem a fixação a longo prazo dos módulos anteriores, combatendo a curva de esquecimento.
                </p>
              </div>
            </div>

            {/* Regra 5 */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2/30 border border-border/60">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <DoorOpen className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  5. Simulados no Padrão Cebraspe
                </h3>
                <p className="text-xs leading-relaxed">
                  Simulados de 100 itens inéditos por módulo e o Mega Simulado de 120 itens com penalização do erro (1 errado anula 1 certo), cronômetro oficial e calibração de certeza versus chute.
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
        </div>
      </AccessibleModal>
    </AnimatePresence>
  );
};
