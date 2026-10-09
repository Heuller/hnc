import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { useReaderPreferencesStore } from '../../store/useReaderPreferencesStore';
import { EditorialDiagram } from './EditorialDiagram';
import { TimelineFlow } from './TimelineFlow';
import { AccordionTree } from './AccordionTree';
import { DecisionFlow } from './DecisionFlow';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  const { fontSize, fontFamily } = useReaderPreferencesStore();

  const fontClass = fontFamily === 'sans' ? 'font-sans' : 'font-serif';
  const sizeClass =
    fontSize === 'sm'
      ? 'text-sm sm:text-[15px] leading-relaxed'
      : fontSize === 'lg'
      ? 'text-lg sm:text-[19px] leading-relaxed'
      : 'text-base sm:text-[17px] leading-relaxed';

  return (
    <div
      className={`prose-editorial max-w-none text-ink ${sizeClass} ${fontClass} ${className} break-words`}
      style={{ overflowWrap: 'anywhere' }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-2xl md:text-3xl font-sans font-bold text-ink tracking-tight mt-8 mb-4 border-b border-border pb-2 break-words"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-xl md:text-2xl font-sans font-bold text-ink tracking-tight mt-6 mb-3 break-words"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-lg md:text-xl font-sans font-semibold text-ink mt-5 mb-2 break-words"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className={`my-4 leading-[1.7] text-ink ${fontClass} break-words`} style={{ textWrap: 'pretty', overflowWrap: 'anywhere' }} {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className={`list-disc pl-6 my-4 space-y-2 text-ink ${fontClass}`} {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className={`list-decimal pl-6 my-4 space-y-2 text-ink ${fontClass}`} {...props} />
          ),
          li: ({ ...props }) => <li className="leading-relaxed break-words" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-accent pl-4 my-4 italic text-ink-2 bg-surface-2 p-3 rounded-r-lg break-words"
              {...props}
            />
          ),
          table: ({ ...props }) => (
            <div className="my-4 w-full max-w-full overflow-x-auto rounded-lg border border-border bg-surface shadow-2xs scrollbar-thin">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[320px]" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-surface-2 text-ink font-bold border-b border-border" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="p-2.5 sm:p-3 text-ink font-bold border-r border-border last:border-r-0 text-xs sm:text-sm uppercase tracking-wider" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="p-2.5 sm:p-3 text-ink border-b border-r border-border last:border-r-0 align-top leading-relaxed text-xs sm:text-sm break-words" {...props} />
          ),
          code: ({ className: codeClass, children, ...props }) => {
            const rawContent = String(children || '').trim();

            // Native infographic components — zero re-render, mobile-first
            const lang = (codeClass || '').replace('language-', '').toLowerCase();
            if (lang === 'timeline') return <TimelineFlow code={rawContent} />;
            if (lang === 'tree') return <AccordionTree code={rawContent} />;
            if (lang === 'decision') return <DecisionFlow code={rawContent} />;

            // Legacy Mermaid fallback (being deprecated)
            const isMermaid =
              lang === 'mermaid' ||
              rawContent.startsWith('graph ') ||
              rawContent.startsWith('flowchart ') ||
              rawContent.startsWith('subgraph ');

            if (isMermaid) {
              return <EditorialDiagram code={rawContent} />;
            }

            const isInline = !codeClass;
            if (isInline) {
              return (
                <code
                  className="font-mono text-xs md:text-sm bg-surface-2 text-ink px-1.5 py-0.5 rounded border border-border break-words"
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
          strong: ({ ...props }) => (
            <strong className="font-bold text-ink" {...props} />
          ),
          a: ({ ...props }) => (
            <a
              className="text-info underline hover:opacity-80 transition-opacity font-sans break-words"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
