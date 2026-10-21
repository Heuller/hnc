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

const COLOR_MAP: Record<
  Color,
  {
    cardBg: string;
    border: string;
    badge: string;
    badgeText: string;
    subtitle: string;
  }
> = {
  emerald: {
    cardBg: 'bg-emerald-500/5 dark:bg-emerald-500/10',
    border: 'border-l-emerald-600 dark:border-l-emerald-400',
    badge: 'bg-emerald-600 dark:bg-emerald-500',
    badgeText: 'text-white',
    subtitle: 'text-emerald-800 dark:text-emerald-300',
  },
  blue: {
    cardBg: 'bg-blue-500/5 dark:bg-blue-500/10',
    border: 'border-l-blue-600 dark:border-l-blue-400',
    badge: 'bg-blue-600 dark:bg-blue-500',
    badgeText: 'text-white',
    subtitle: 'text-blue-800 dark:text-blue-300',
  },
  violet: {
    cardBg: 'bg-violet-500/5 dark:bg-violet-500/10',
    border: 'border-l-violet-600 dark:border-l-violet-400',
    badge: 'bg-violet-600 dark:bg-violet-500',
    badgeText: 'text-white',
    subtitle: 'text-violet-800 dark:text-violet-300',
  },
  amber: {
    cardBg: 'bg-amber-500/5 dark:bg-amber-500/10',
    border: 'border-l-amber-600 dark:border-l-amber-400',
    badge: 'bg-amber-600 dark:bg-amber-500',
    badgeText: 'text-white',
    subtitle: 'text-amber-800 dark:text-amber-300',
  },
  rose: {
    cardBg: 'bg-rose-500/5 dark:bg-rose-500/10',
    border: 'border-l-rose-600 dark:border-l-rose-400',
    badge: 'bg-rose-600 dark:bg-rose-500',
    badgeText: 'text-white',
    subtitle: 'text-rose-800 dark:text-rose-300',
  },
  cyan: {
    cardBg: 'bg-cyan-500/5 dark:bg-cyan-500/10',
    border: 'border-l-cyan-600 dark:border-l-cyan-400',
    badge: 'bg-cyan-600 dark:bg-cyan-500',
    badgeText: 'text-white',
    subtitle: 'text-cyan-800 dark:text-cyan-300',
  },
  indigo: {
    cardBg: 'bg-indigo-500/5 dark:bg-indigo-500/10',
    border: 'border-l-indigo-600 dark:border-l-indigo-400',
    badge: 'bg-indigo-600 dark:bg-indigo-500',
    badgeText: 'text-white',
    subtitle: 'text-indigo-800 dark:text-indigo-300',
  },
  teal: {
    cardBg: 'bg-teal-500/5 dark:bg-teal-500/10',
    border: 'border-l-teal-600 dark:border-l-teal-400',
    badge: 'bg-teal-600 dark:bg-teal-500',
    badgeText: 'text-white',
    subtitle: 'text-teal-800 dark:text-teal-300',
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
      {/* Header label com alto contraste editorial */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 max-w-full">
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          <ChevronRight className="w-4 h-4 text-accent shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider text-ink-2 truncate">
            Sequência Cronológica
          </span>
        </div>
        <span className="text-xs font-mono font-medium text-ink-2 shrink-0">{steps.length} etapas</span>
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
                <div className="w-px h-3.5 bg-border" />
                {conn.label && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border shadow-2xs max-w-full">
                    <ArrowDown className="w-3 h-3 text-accent shrink-0" />
                    <span className="text-xs font-medium text-ink-2 italic break-words" style={{ overflowWrap: 'anywhere' }}>
                      {conn.label}
                    </span>
                  </div>
                )}
                <div className="w-px h-3.5 bg-border" />
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
                relative flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-border border-l-4 shadow-2xs min-w-0 max-w-full
                bg-surface ${c.cardBg} ${c.border}
                transition-all duration-200
              `}
            >
              {/* Step badge */}
              <div
                className={`
                  shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center
                  text-xs sm:text-sm font-bold shadow-xs
                  ${c.badge} ${c.badgeText}
                `}
                aria-hidden="true"
              >
                {stepNum}
              </div>

              {/* Content com tipografia legível e tokens semânticos */}
              <div className="flex-1 min-w-0 break-words">
                <h4 className="text-xs sm:text-sm font-bold text-ink leading-tight break-words" style={{ overflowWrap: 'anywhere' }}>
                  {step.title}
                </h4>
                {step.subtitle && (
                  <p className={`text-xs font-semibold ${c.subtitle} mt-0.5 break-words`} style={{ overflowWrap: 'anywhere' }}>
                    {step.subtitle}
                  </p>
                )}
                {step.description && (
                  <p className="text-xs sm:text-sm text-ink-2 mt-1.5 leading-relaxed break-words font-serif-reading" style={{ overflowWrap: 'anywhere' }}>
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
