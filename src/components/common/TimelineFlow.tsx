import React, { useMemo } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

/**
 * TimelineFlow — Substitui `graph TD` com padrão de sequência linear (Padrão A)
 *
 * Sintaxe do bloco de código:
 * ```timeline
 * ID | Título | Subtítulo | Descrição
 * ---> Rótulo da seta (opcional)
 * ID2 | Título 2 | Subtítulo 2 | Descrição 2
 * ```
 */

interface TimelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'emerald' | 'blue' | 'violet' | 'amber' | 'rose' | 'cyan' | 'indigo' | 'teal';
}

interface TimelineConnector {
  label: string;
}

type TimelineItem =
  | { type: 'step'; data: TimelineStep }
  | { type: 'connector'; data: TimelineConnector };

const COLORS = ['emerald', 'blue', 'violet', 'amber', 'rose', 'cyan', 'indigo', 'teal'] as const;
type Color = typeof COLORS[number];

const COLOR_MAP: Record<Color, { bg: string; border: string; badge: string; badgeText: string; dot: string }> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-400 dark:border-emerald-600',
    badge: 'bg-emerald-500 dark:bg-emerald-600',
    badgeText: 'text-white',
    dot: 'bg-emerald-400',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-400 dark:border-blue-600',
    badge: 'bg-blue-500 dark:bg-blue-600',
    badgeText: 'text-white',
    dot: 'bg-blue-400',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-400 dark:border-violet-600',
    badge: 'bg-violet-500 dark:bg-violet-600',
    badgeText: 'text-white',
    dot: 'bg-violet-400',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-400 dark:border-amber-600',
    badge: 'bg-amber-500 dark:bg-amber-600',
    badgeText: 'text-white',
    dot: 'bg-amber-400',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-400 dark:border-rose-600',
    badge: 'bg-rose-500 dark:bg-rose-600',
    badgeText: 'text-white',
    dot: 'bg-rose-400',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    border: 'border-cyan-400 dark:border-cyan-600',
    badge: 'bg-cyan-500 dark:bg-cyan-600',
    badgeText: 'text-white',
    dot: 'bg-cyan-400',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-400 dark:border-indigo-600',
    badge: 'bg-indigo-500 dark:bg-indigo-600',
    badgeText: 'text-white',
    dot: 'bg-indigo-400',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    border: 'border-teal-400 dark:border-teal-600',
    badge: 'bg-teal-500 dark:bg-teal-600',
    badgeText: 'text-white',
    dot: 'bg-teal-400',
  },
};

function parseTimelineCode(raw: string): TimelineItem[] {
  const lines = raw.trim().split('\n').map((l) => l.trim()).filter(Boolean);
  const items: TimelineItem[] = [];
  let stepCount = 0;

  for (const line of lines) {
    if (line.startsWith('--->')) {
      const label = line.replace(/^--->/, '').trim();
      items.push({ type: 'connector', data: { label } });
    } else if (line.includes('|')) {
      const parts = line.split('|').map((p) => p.trim());
      const color = COLORS[stepCount % COLORS.length];
      items.push({
        type: 'step',
        data: {
          id: parts[0] || String(stepCount),
          title: parts[1] || '',
          subtitle: parts[2] || '',
          description: parts[3] || '',
          color,
        },
      });
      stepCount++;
    }
  }

  return items;
}

interface TimelineFlowProps {
  code: string;
  className?: string;
}

export const TimelineFlow: React.FC<TimelineFlowProps> = ({ code, className = '' }) => {
  const items = useMemo(() => parseTimelineCode(code), [code]);
  const steps = items.filter((i) => i.type === 'step') as { type: 'step'; data: TimelineStep }[];

  return (
    <div
      className={`my-6 w-full max-w-full overflow-hidden ${className}`}
      role="list"
      aria-label="Sequência cronológica"
    >
      {/* Header label */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 max-w-full">
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate">
            Sequência Cronológica
          </span>
        </div>
        <span className="text-xs text-slate-400 shrink-0">{steps.length} etapas</span>
      </div>

      <div className="flex flex-col gap-0 w-full max-w-full">
        {items.map((item, idx) => {
          if (item.type === 'connector') {
            const conn = item.data as TimelineConnector;
            return (
              <div
                key={`conn-${idx}`}
                className="flex flex-col items-center gap-1 py-1"
                aria-hidden="true"
              >
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
                {conn.label && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-full">
                    <ArrowDown className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic break-words" style={{ overflowWrap: 'anywhere' }}>
                      {conn.label}
                    </span>
                  </div>
                )}
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
              </div>
            );
          }

          const step = item.data as TimelineStep;
          const c = COLOR_MAP[step.color];
          const stepNum = steps.findIndex((s) => s.data.id === step.id) + 1;

          return (
            <div
              key={step.id}
              role="listitem"
              className={`
                relative flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-l-4 shadow-sm min-w-0 max-w-full
                ${c.bg} ${c.border}
                transition-all duration-200
              `}
            >
              {/* Step badge */}
              <div
                className={`
                  shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center
                  text-xs sm:text-sm font-bold shadow-md
                  ${c.badge} ${c.badgeText}
                `}
                aria-hidden="true"
              >
                {stepNum}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 break-words">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight break-words" style={{ overflowWrap: 'anywhere' }}>
                  {step.title}
                </h4>
                {step.subtitle && (
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 break-words" style={{ overflowWrap: 'anywhere' }}>
                    {step.subtitle}
                  </p>
                )}
                {step.description && (
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed break-words" style={{ overflowWrap: 'anywhere' }}>
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineFlow;
