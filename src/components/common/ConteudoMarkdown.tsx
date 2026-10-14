import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { Bookmark, MoveHorizontal } from 'lucide-react';
import { useReaderPreferencesStore } from '../../store/useReaderPreferencesStore';
import { EditorialDiagram } from './EditorialDiagram';
import { TimelineFlow } from './TimelineFlow';
import { AccordionTree } from './AccordionTree';
import { DecisionFlow } from './DecisionFlow';

export interface ConteudoMarkdownProps {
  content: string;
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  usePreferences?: boolean;
}



export const ConteudoMarkdown: React.FC<ConteudoMarkdownProps> = ({
  content,
  className = '',
  variant = 'auto',
  usePreferences = true,
}) => {
  const { fontSize, fontFamily } = useReaderPreferencesStore();

  const isDark = variant === 'dark';
  const isLight = variant === 'light';

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
  const themeTextClass = isDark
    ? 'text-slate-200'
    : isLight
    ? 'text-slate-900'
    : 'text-ink';

  return (
    <div
      className={`prose-editorial max-w-none ${themeTextClass} ${sizeClass} ${fontClass} ${className} break-words`}
      style={{ overflowWrap: 'anywhere' }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight mt-8 mb-4 border-b border-border pb-2 break-words"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-xl sm:text-2xl font-sans font-bold text-ink tracking-tight mt-7 mb-3.5 flex items-center gap-2.5 break-words"
              {...props}
            >
              <span className="w-2 h-6 rounded-full inline-block shrink-0 bg-accent shadow-xs" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-base sm:text-lg font-sans font-extrabold tracking-tight mt-6 mb-3 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-border bg-surface-2 break-words"
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
              className="my-4 leading-[1.7] text-ink break-words"
              style={{ textWrap: 'pretty', overflowWrap: 'anywhere' }}
              {...props}
            >
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc pl-6 my-4 space-y-2 text-ink" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal pl-6 my-4 space-y-2 text-ink marker:font-bold marker:text-accent" {...props}>
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
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-accent pl-4 my-4 italic text-ink bg-surface-2 p-3.5 rounded-r-xl break-words shadow-2xs"
              {...props}
            >
              {children}
            </blockquote>
          ),
          table: ({ children, ...props }) => (
            <div className="my-5 w-full max-w-full">
              <div className="sm:hidden flex items-center justify-end gap-1 text-[11px] font-sans font-semibold mb-1 px-1 text-ink-2">
                <MoveHorizontal className="w-3.5 h-3.5 text-accent" />
                <span>Deslize a tabela para ver tudo</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-2xs scrollbar-thin">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[320px]" {...props}>
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-surface-2 text-ink font-bold border-b border-border" {...props}>
              {children}
            </thead>
          ),
          th: ({ children, ...props }) => (
            <th
              className="p-2.5 sm:p-3 text-ink font-bold border-r border-border last:border-r-0 text-xs sm:text-sm uppercase tracking-wider"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              className="p-2.5 sm:p-3 text-ink border-b border-border border-r last:border-r-0 align-top leading-relaxed text-xs sm:text-sm break-words"
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
              return <EditorialDiagram code={rawContent} isDark={isDark} />;
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
          hr: () => <hr className="my-6 border-border" />,
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
        {content}
      </ReactMarkdown>
    </div>
  );
};
