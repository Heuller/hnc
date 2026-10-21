import React, { useMemo } from 'react';
import { ArrowDown, GitFork } from 'lucide-react';

/**
 * DecisionFlow — Substitui `graph TD` com padrão de árvore de decisão (Padrão C)
 *
 * Sintaxe do bloco de código:
 * ```decision
 * START: Descrição inicial
 * QUESTION: Pergunta da decisão
 * YES: Ramo afirmativo
 * NO: Ramo negativo
 * YES_RESULT: Conclusão afirmativa
 * NO_RESULT: Conclusão negativa
 * END: Fechamento
 * ```
 */

interface DecisionNode {
  type: 'start' | 'question' | 'yes' | 'no' | 'yes_result' | 'no_result' | 'step' | 'end';
  label: string;
  detail?: string;
}

function parseDecisionCode(raw: string): DecisionNode[] {
  const lines = raw.trim().split('\n').map((l) => l.trim()).filter(Boolean);
  const nodes: DecisionNode[] = [];

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const rawKey = line.slice(0, colonIdx).trim().toUpperCase();
    const rest = line.slice(colonIdx + 1).trim();
    const parts = rest.split('|').map((p) => p.trim());

    let type: DecisionNode['type'] = 'step';
    if (rawKey === 'START' || rawKey === 'INICIO') type = 'start';
    else if (rawKey === 'QUESTION' || rawKey === 'DECISAO' || rawKey === 'PERGUNTA') type = 'question';
    else if (rawKey === 'YES' || rawKey === 'SIM') type = 'yes';
    else if (rawKey === 'NO' || rawKey === 'NAO') type = 'no';
    else if (rawKey === 'YES_RESULT' || rawKey === 'RESULTADO_SIM') type = 'yes_result';
    else if (rawKey === 'NO_RESULT' || rawKey === 'RESULTADO_NAO') type = 'no_result';
    else if (rawKey === 'END' || rawKey === 'FIM') type = 'end';
    else if (rawKey === 'STEP' || rawKey === 'PASSO') type = 'step';

    if (parts[0]) {
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
  start: 'bg-primary text-primary-text border-2 border-primary font-bold shadow-xs',
  question:
    'bg-accent-soft text-ink border-2 border-accent font-semibold shadow-xs',
  yes: 'bg-ok-soft text-ok border border-ok/40 font-medium',
  no: 'bg-err-soft text-err border border-err/40 font-medium',
  yes_result:
    'bg-ok-soft text-ok border-2 border-ok font-bold shadow-xs',
  no_result:
    'bg-err-soft text-err border-2 border-err font-bold shadow-xs',
  step: 'bg-info-soft text-info border border-info/40 font-medium',
  end: 'bg-surface-2 text-ink border-2 border-border font-bold shadow-xs',
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
  start: 'bg-primary text-primary-text',
  question: 'bg-accent text-accent-text',
  yes: 'bg-ok text-white',
  no: 'bg-err text-white',
  yes_result: 'bg-ok text-white',
  no_result: 'bg-err text-white',
  step: 'bg-info text-white',
  end: 'bg-ink text-white dark:bg-ink-2',
};

// F-14: Subcomponentes extraídos para o escopo do módulo para evitar re-montagens
interface NodeBoxProps {
  node: DecisionNode;
  isQuestion?: boolean;
}

export const NodeBox: React.FC<NodeBoxProps> = ({ node, isQuestion = false }) => (
  <div className={`relative px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl shadow-2xs text-center w-full min-w-0 break-words ${NODE_STYLES[node.type]}`}>
    <span
      className={`
        absolute -top-2.5 left-1/2 -translate-x-1/2
        text-xs font-bold uppercase tracking-widest
        px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs
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
        className="text-xs opacity-80 mt-1 font-serif-reading leading-normal break-words"
        style={{ overflowWrap: 'anywhere' }}
      >
        {node.detail}
      </p>
    )}
  </div>
);

interface ArrowProps {
  label?: string;
  color?: string;
}

export const Arrow: React.FC<ArrowProps> = ({
  label,
  color = 'text-ink-2',
}) => (
  <div className="flex flex-col items-center py-1.5 shrink-0" aria-hidden="true">
    <div className="w-px h-3 bg-border" />
    {label && (
      <span className={`text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface-2 border border-border my-0.5 ${color}`}>
        {label}
      </span>
    )}
    <ArrowDown className={`w-3.5 h-3.5 ${color}`} />
  </div>
);

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

  if (hasBranching) {
    return (
      <div
        className={`my-6 w-full max-w-full overflow-hidden ${className}`}
        role="img"
        aria-label="Fluxo de decisão"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <GitFork className="w-4 h-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-widest text-ink-2">
            Fluxo de Decisão
          </span>
          <div className="flex-1 h-px bg-border" />
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
                color="text-ok"
              />
              {yesNode && (
                <div className="w-full min-w-0">
                  <NodeBox node={yesNode} />
                </div>
              )}
              {yesResultNode && (
                <>
                  <Arrow color="text-ok" />
                  <div className="w-full min-w-0">
                    <NodeBox node={yesResultNode} />
                  </div>
                </>
              )}
            </div>

            {/* Divider */}
            <div className="self-stretch w-px bg-border mt-2 shrink-0" />

            {/* NO branch */}
            <div className="flex-1 min-w-0 flex flex-col items-center">
              <Arrow
                label="NÃO"
                color="text-err"
              />
              {noNode && (
                <div className="w-full min-w-0">
                  <NodeBox node={noNode} />
                </div>
              )}
              {noResultNode && (
                <>
                  <Arrow color="text-err" />
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
        <GitFork className="w-4 h-4 text-accent" />
        <span className="text-xs font-bold uppercase tracking-widest text-ink-2">
          Fluxo de Processo
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-mono font-medium text-ink-2">{nodes.length} etapas</span>
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
