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
      className={`prose-editorial max-w-none text-ink ${sizeClass} ${fontClass} ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-2xl md:text-3xl font-sans font-bold text-ink tracking-tight mt-8 mb-4 border-b border-border pb-2"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-xl md:text-2xl font-sans font-bold text-ink tracking-tight mt-6 mb-3"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-lg md:text-xl font-sans font-semibold text-ink mt-5 mb-2"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p className={`my-4 leading-[1.7] text-ink ${fontClass}`} style={{ textWrap: 'pretty' }} {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className={`list-disc pl-6 my-4 space-y-2 text-ink ${fontClass}`} {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className={`list-decimal pl-6 my-4 space-y-2 text-ink ${fontClass}`} {...props} />
          ),
          li: ({ ...props }) => <li className="leading-relaxed" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-accent pl-4 my-4 italic text-ink-2 bg-surface-2 p-3 rounded-r-lg"
              {...props}
            />
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
                  className="font-mono text-xs md:text-sm bg-surface-2 text-ink px-1.5 py-0.5 rounded border border-border"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="font-mono text-xs md:text-sm bg-surface-2 p-4 rounded-xl border border-border overflow-x-auto my-4 text-ink">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          strong: ({ ...props }) => (
            <strong className="font-bold text-ink" {...props} />
          ),
          a: ({ ...props }) => (
            <a
              className="text-info underline hover:opacity-80 transition-opacity font-sans"
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
