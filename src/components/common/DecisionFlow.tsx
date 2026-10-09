import React, { useMemo } from 'react';
import { GitFork, ArrowDown } from 'lucide-react';

/**
 * DecisionFlow — Substitui `graph TD` com padrão de fluxo de decisão (Padrão C)
 *
 * Sintaxe do bloco de código:
 * ```decision
 * START: Rótulo do nó inicial
 * QUESTION: Pergunta de decisão?
 * YES: Rótulo do ramo SIM | detalhe opcional
 * NO: Rótulo do ramo NÃO | detalhe opcional
 * YES_RESULT: Resultado final SIM | exemplo
 * NO_RESULT: Resultado final NÃO | exemplo
 * ```
 *
 * Para fluxos mais simples (lista de passos sem bifurcação), use:
 * ```decision
 * START: Início
 * STEP: Passo 1 | detalhe
 * STEP: Passo 2 | detalhe
 * END: Fim | resultado
 * ```
 */

interface DecisionNode {
  type: 'start' | 'question' | 'yes' | 'no' | 'yes_result' | 'no_result' | 'step' | 'end';
  label: string;
  detail: string;
}

function parseDecisionCode(raw: string): DecisionNode[] {
  const lines = raw.trim().split('\n').map((l) => l.trim()).filter(Boolean);
  const nodes: DecisionNode[] = [];

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const typeStr = line.slice(0, colonIdx).trim().toUpperCase();
    const rest = line.slice(colonIdx + 1).trim();
    const parts = rest.split('|').map((p) => p.trim());

    const type = typeStr as DecisionNode['type'];
    const validTypes: DecisionNode['type'][] = [
      'start', 'question', 'yes', 'no', 'yes_result', 'no_result', 'step', 'end'
    ];

    if (validTypes.includes(type)) {
      nodes.push({ type, label: parts[0] || '', detail: parts[1] || '' });
    }
  }

  return nodes;
}

interface DecisionFlowProps {
  code: string;
  className?: string;
}

const NODE_STYLES = {
  start: 'bg-slate-700 dark:bg-slate-600 text-white border-slate-700 dark:border-slate-500',
  question:
    'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 border-2 border-amber-400 dark:border-amber-600 font-semibold',
  yes: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700',
  no: 'bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700',
  yes_result:
    'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 border-2 border-emerald-400 dark:border-emerald-600 font-semibold',
  no_result:
    'bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-100 border-2 border-rose-400 dark:border-rose-600 font-semibold',
  step: 'bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700',
  end: 'bg-indigo-600 dark:bg-indigo-700 text-white border-indigo-700 dark:border-indigo-600',
};

const LABEL_MAP: Record<DecisionNode['type'], string> = {
  start: 'INÍCIO',
  question: 'DECISÃO',
  yes: 'SIM',
  no: 'NÃO',
  yes_result: 'RESULTADO',
  no_result: 'RESULTADO',
  step: 'PASSO',
  end: 'FIM',
};

const LABEL_COLORS: Record<DecisionNode['type'], string> = {
  start: 'bg-slate-500 text-white',
  question: 'bg-amber-500 text-white',
  yes: 'bg-emerald-500 text-white',
  no: 'bg-rose-500 text-white',
  yes_result: 'bg-emerald-600 text-white',
  no_result: 'bg-rose-600 text-white',
  step: 'bg-blue-500 text-white',
  end: 'bg-indigo-500 text-white',
};

export const DecisionFlow: React.FC<DecisionFlowProps> = ({ code, className = '' }) => {
  const nodes = useMemo(() => parseDecisionCode(code), [code]);

  // Check if it's a branching flow (has YES/NO) or a linear flow (STEPs)
  const hasBranching =
    nodes.some((n) => n.type === 'yes') && nodes.some((n) => n.type === 'no');
  const questionNode = nodes.find((n) => n.type === 'question');
  const startNode = nodes.find((n) => n.type === 'start');
  const endNode = nodes.find((n) => n.type === 'end');
  const yesNode = nodes.find((n) => n.type === 'yes');
  const noNode = nodes.find((n) => n.type === 'no');
  const yesResultNode = nodes.find((n) => n.type === 'yes_result');
  const noResultNode = nodes.find((n) => n.type === 'no_result');

  const NodeBox: React.FC<{ node: DecisionNode; isQuestion?: boolean }> = ({
    node,
    isQuestion = false,
  }) => (
    <div className={`relative px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl shadow-sm text-center w-full min-w-0 break-words ${NODE_STYLES[node.type]}`}>
      <span
        className={`
          absolute -top-2.5 left-1/2 -translate-x-1/2
          text-[9px] font-bold uppercase tracking-widest
          px-2 py-0.5 rounded-full whitespace-nowrap
          ${LABEL_COLORS[node.type]}
        `}
      >
        {LABEL_MAP[node.type]}
      </span>
      <p
        className={`text-xs ${isQuestion ? 'font-bold' : 'font-medium'} leading-snug mt-1 break-words`}
        style={{ overflowWrap: 'anywhere' }}
      >
        {node.label}
      </p>
      {node.detail && (
        <p
          className="text-[10px] opacity-70 mt-1 leading-snug break-words"
          style={{ overflowWrap: 'anywhere' }}
        >
          {node.detail}
        </p>
      )}
    </div>
  );

  const Arrow: React.FC<{ label?: string; color?: string }> = ({
    label,
    color = 'text-slate-400 dark:text-slate-500',
  }) => (
    <div className={`flex flex-col items-center py-1 ${color}`}>
      <div className="w-px h-4 bg-current opacity-40" />
      {label && (
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-current/10">
          {label}
        </span>
      )}
      <ArrowDown className="w-4 h-4 mt-0.5" />
    </div>
  );

  if (hasBranching) {
    return (
      <div
        className={`my-6 w-full max-w-full overflow-hidden ${className}`}
        role="img"
        aria-label="Fluxo de decisão"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <GitFork className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Fluxo de Decisão
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="flex flex-col items-center w-full max-w-full">
          {/* START */}
          {startNode && (
            <>
              <div className="w-full max-w-sm">
                <NodeBox node={startNode} />
              </div>
              <Arrow />
            </>
          )}

          {/* QUESTION */}
          {questionNode && (
            <>
              <div className="w-full max-w-sm">
                <NodeBox node={questionNode} isQuestion />
              </div>
            </>
          )}

          {/* Branching */}
          <div className="w-full flex items-start gap-2 mt-0">
            {/* YES branch */}
            <div className="flex-1 min-w-0 flex flex-col items-center">
              <Arrow
                label="SIM"
                color="text-emerald-500"
              />
              {yesNode && (
                <div className="w-full min-w-0">
                  <NodeBox node={yesNode} />
                </div>
              )}
              {yesResultNode && (
                <>
                  <Arrow color="text-emerald-400" />
                  <div className="w-full min-w-0">
                    <NodeBox node={yesResultNode} />
                  </div>
                </>
              )}
            </div>

            {/* Divider */}
            <div className="self-stretch w-px bg-slate-200 dark:bg-slate-700 mt-2 shrink-0" />

            {/* NO branch */}
            <div className="flex-1 min-w-0 flex flex-col items-center">
              <Arrow
                label="NÃO"
                color="text-rose-500"
              />
              {noNode && (
                <div className="w-full min-w-0">
                  <NodeBox node={noNode} />
                </div>
              )}
              {noResultNode && (
                <>
                  <Arrow color="text-rose-400" />
                  <div className="w-full min-w-0">
                    <NodeBox node={noResultNode} />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* END */}
          {endNode && (
            <>
              <Arrow />
              <div className="w-full max-w-sm">
                <NodeBox node={endNode} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Linear flow (steps only)
  return (
    <div
      className={`my-6 w-full ${className}`}
      role="list"
      aria-label="Fluxo de processo"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <GitFork className="w-4 h-4 text-slate-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Fluxo de Processo
        </span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
        <span className="text-xs text-slate-400">{nodes.length} etapas</span>
      </div>

      <div className="flex flex-col items-center gap-0">
        {nodes.map((node, idx) => (
          <React.Fragment key={idx}>
            <div className="w-full max-w-lg" role="listitem">
              <NodeBox node={node} />
            </div>
            {idx < nodes.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DecisionFlow;
