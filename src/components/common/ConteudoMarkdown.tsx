import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
  Bookmark,
  Info,
  Lightbulb,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { TabelaResponsiva } from './TabelaResponsiva';
import { useReaderPreferencesStore } from '../../store/useReaderPreferencesStore';
import {
  prepararConteudoMarkdown,
  CALLOUT_CONFIG,
  extractPlainText,
  stripCalloutMarker,
  type CalloutType,
} from '../../utils/markdownProcessors';
const EditorialDiagram = React.lazy(() =>
  import('./EditorialDiagram').then((mod) => ({ default: mod.EditorialDiagram }))
);
import { TimelineFlow } from './TimelineFlow';
import { AccordionTree } from './AccordionTree';
import { DecisionFlow } from './DecisionFlow';

export interface ConteudoMarkdownProps {
  content: string;
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  usePreferences?: boolean;
  submoduloId?: string;
}

export const ConteudoMarkdown: React.FC<ConteudoMarkdownProps> = ({
  content,
  className = '',
  variant = 'auto',
  usePreferences = true,
}) => {
  const { fontSize, fontFamily } = useReaderPreferencesStore();

  const isDark = variant === 'dark';

  // Pré-processa markdown (protegendo moedas R$ e normalizando [!ALERTAS])
  const processedContent = useMemo(() => prepararConteudoMarkdown(content), [content]);

  // Preferências do leitor (apenas se usePreferences for true)
  const fontClass = usePreferences
    ? fontFamily === 'sans'
      ? 'font-sans'
      : 'font-serif'
    : '';

  const sizeClass = usePreferences
    ? fontSize === 'sm'
      ? 'text-sm sm:text-[15px] leading-relaxed'
      : fontSize === 'lg'
      ? 'text-lg sm:text-[19px] leading-relaxed'
      : 'text-base sm:text-[17px] leading-relaxed'
    : 'text-base leading-relaxed';

  // Classes de cor baseadas na variante ou no tema "Papel e Tinta"
  const themeTextClass = 'text-ink';

  return (
    <div
      className={`prose-editorial max-w-none ${themeTextClass} ${sizeClass} ${fontClass} ${className} break-words`}
      style={{ overflowWrap: 'anywhere' }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-normal mt-10 mb-5 border-b border-border pb-3 break-words"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-normal mt-10 mb-4 flex items-center gap-2.5 break-words"
              {...props}
            >
              <span className="w-2 h-6 rounded-full inline-block shrink-0 bg-accent shadow-xs" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-base sm:text-lg font-sans font-extrabold tracking-normal mt-8 mb-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-border bg-surface-2 dark:bg-surface-3/30 break-words"
              {...props}
            >
              <Bookmark className="w-4 h-4 shrink-0 text-accent" />
              <span className="leading-snug">{children}</span>
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              className="text-xs sm:text-sm font-sans font-black mt-5 mb-2.5 flex items-center gap-2 uppercase tracking-wider text-ink-2 break-words"
              {...props}
            >
              <span className="w-1.5 h-3.5 rounded-full inline-block shrink-0 bg-accent" />
              <span>{children}</span>
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p
              className="my-5 leading-[1.8] text-ink break-words"
              style={{ textWrap: 'pretty', overflowWrap: 'anywhere' }}
              {...props}
            >
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc pl-6 my-5 space-y-2.5 text-ink" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal pl-6 my-5 space-y-2.5 text-ink marker:font-bold marker:text-accent" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-relaxed break-words" {...props}>
              {children}
            </li>
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-bold text-ink" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="italic text-ink-2" {...props}>
              {children}
            </em>
          ),
          blockquote: ({ children }) => {
            const rawText = extractPlainText(children);

            // 1. Detecção explícita de Callouts padronizados estilo GitHub
            let calloutType: CalloutType | null = null;
            if (rawText.includes('[[CALLOUT:caution]]')) calloutType = 'caution';
            else if (rawText.includes('[[CALLOUT:warning]]')) calloutType = 'warning';
            else if (rawText.includes('[[CALLOUT:important]]')) calloutType = 'important';
            else if (rawText.includes('[[CALLOUT:tip]]')) calloutType = 'tip';
            else if (rawText.includes('[[CALLOUT:note]]')) calloutType = 'note';

            // Remove marcador interno para que nenhum artefato chegue ao DOM
            const sanitizedChildren = stripCalloutMarker(children);

            if (calloutType) {
              const cfg = CALLOUT_CONFIG[calloutType];
              const IconComp =
                calloutType === 'caution'
                  ? AlertOctagon
                  : calloutType === 'warning'
                  ? AlertTriangle
                  : calloutType === 'important'
                  ? Bookmark
                  : calloutType === 'tip'
                  ? Lightbulb
                  : Info;

              return (
                <aside
                  role="note"
                  aria-label={cfg.titulo}
                  className={`my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 ${cfg.borda} ${cfg.fundo} ${cfg.texto}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-xs bg-surface-2 ${cfg.iconeCor}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 font-medium">
                    <div className="font-sans font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span>{cfg.titulo}</span>
                    </div>
                    <div className="prose-p:my-1 first:prose-p:mt-0 last:prose-p:mb-0">
                      {sanitizedChildren}
                    </div>
                  </div>
                </aside>
              );
            }

            // 2. Fallback de detecção por palavras-chave em blockquotes legados
            const isWarningFallback =
              rawText.includes('🚨') ||
              rawText.includes('Atenção') ||
              rawText.includes('ERRADO') ||
              rawText.includes('⚠️') ||
              rawText.includes('Pegadinha') ||
              rawText.includes('Cuidado');

            const isTipFallback =
              rawText.includes('💡') ||
              rawText.includes('Dica') ||
              rawText.includes('Princípio') ||
              rawText.includes('Macete') ||
              rawText.includes('Regra de Ouro');

            const isSuccessFallback =
              rawText.includes('✅') ||
              rawText.includes('Correto') ||
              rawText.includes('Vencedor');

            if (isWarningFallback) {
              return (
                <aside
                  role="note"
                  aria-label="Atenção"
                  className="my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 border-l-amber-500 border-amber-200/80 bg-amber-50/80 text-amber-950 dark:bg-amber-950/40 dark:border-amber-800/60 dark:text-amber-200"
                >
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 shadow-xs bg-surface-2 text-accent dark:text-amber-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 font-medium prose-p:my-1 first:prose-p:mt-0 last:prose-p:mb-0">
                    {sanitizedChildren}
                  </div>
                </aside>
              );
            }

            if (isTipFallback) {
              return (
                <aside
                  role="note"
                  aria-label="Dica"
                  className="my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 border-l-emerald-500 border-emerald-200/80 bg-emerald-50/80 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800/60 dark:text-emerald-200"
                >
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 shadow-xs bg-surface-2 text-ok dark:text-emerald-400">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 font-medium prose-p:my-1 first:prose-p:mt-0 last:prose-p:mb-0">
                    {sanitizedChildren}
                  </div>
                </aside>
              );
            }

            if (isSuccessFallback) {
              return (
                <aside
                  role="note"
                  aria-label="Sucesso"
                  className="my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 border-l-teal-500 border-teal-200/80 bg-teal-50/80 text-teal-950 dark:bg-teal-950/40 dark:border-teal-800/60 dark:text-teal-200"
                >
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 shadow-xs bg-surface-2 text-teal-600 dark:text-teal-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 font-medium prose-p:my-1 first:prose-p:mt-0 last:prose-p:mb-0">
                    {sanitizedChildren}
                  </div>
                </aside>
              );
            }

            // Blockquote editorial canônico (citações normais)
            return (
              <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-ink bg-surface-2 p-3.5 rounded-r-xl break-words shadow-2xs flex items-start gap-3">
                <div className="p-1 rounded-lg shrink-0 mt-0.5 text-accent">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1 prose-p:my-1 first:prose-p:mt-0 last:prose-p:mb-0">
                  {sanitizedChildren}
                </div>
              </blockquote>
            );
          },
          table: (props) => (
            <div className="overflow-x-auto my-6">
              <TabelaResponsiva {...props} />
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead
              data-component="thead"
              className="bg-surface-3 text-ink font-sans font-bold border-b-2 border-border shadow-2xs"
              {...props}
            >
              {children}
            </thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody data-component="tbody" className="divide-y divide-border" {...props}>
              {children}
            </tbody>
          ),
          th: ({ children, ...props }) => (
            <th
              data-component="th"
              className="p-3 text-ink font-sans font-bold border-r border-border last:border-r-0 text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              data-component="td"
              className="p-3 text-ink border-b border-border border-r last:border-r-0 align-top leading-relaxed text-xs sm:text-sm break-words"
              {...props}
            >
              {children}
            </td>
          ),
          code: ({ className: codeClass, children, ...props }) => {
            const rawContent = String(children || '').trim();

            const lang = (codeClass || '').replace('language-', '').toLowerCase();
            if (lang === 'timeline') return <TimelineFlow code={rawContent} />;
            if (lang === 'tree') return <AccordionTree code={rawContent} />;
            if (lang === 'decision') return <DecisionFlow code={rawContent} />;

            const isMermaid =
              lang === 'mermaid' ||
              rawContent.startsWith('graph ') ||
              rawContent.startsWith('flowchart ') ||
              rawContent.startsWith('subgraph ');

            if (isMermaid) {
              return (
                <React.Suspense
                  fallback={
                    <div
                      role="status"
                      aria-live="polite"
                      className="my-6 p-6 rounded-2xl border border-border/70 bg-surface-2 animate-pulse flex flex-col items-center justify-center min-h-[140px] gap-2.5 text-center"
                    >
                      <div className="w-6 h-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                      <span className="text-xs font-mono text-ink-2">
                        Renderizando diagrama didático...
                      </span>
                    </div>
                  }
                >
                  <EditorialDiagram code={rawContent} isDark={isDark} />
                </React.Suspense>
              );
            }

            const isInline = !codeClass;
            if (isInline) {
              return (
                <code
                  className="font-mono text-xs md:text-sm bg-surface-2 text-ink px-1.5 py-0.5 rounded border border-border break-words font-semibold"
                  style={{ overflowWrap: 'anywhere' }}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="font-mono text-xs md:text-sm bg-surface-2 p-3 sm:p-4 rounded-xl border border-border overflow-x-auto max-w-full my-4 text-ink">
                <code className="block min-w-0" {...props}>{children}</code>
              </pre>
            );
          },
          hr: () => <div className="my-8" aria-hidden="true" />, // Proibição de barras horizontais (ADR-002)
          a: ({ children, ...props }) => (
            <a
              className="text-accent underline font-sans font-semibold hover:opacity-80 transition-opacity break-words"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};
