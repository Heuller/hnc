import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Lightbulb, AlertTriangle, Bookmark, BookOpen, CheckCircle2, MoveHorizontal } from 'lucide-react';
import { EditorialDiagram } from './common/EditorialDiagram';
import { TimelineFlow } from './common/TimelineFlow';
import { AccordionTree } from './common/AccordionTree';
import { DecisionFlow } from './common/DecisionFlow';

export interface MarkdownViewerProps {
  content: string;
  className?: string;
  variant?: 'light' | 'dark';
}

// Helper to recursively extract plain text from React children
function extractText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (typeof node === 'object' && node.props && node.props.children) {
    return extractText(node.props.children);
  }
  return '';
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  content,
  className = '',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`markdown-container ${isDark ? 'text-slate-200' : 'text-slate-900'} ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-7 mb-4 pb-2 border-b ${
              isDark ? 'text-white border-slate-700' : 'text-slate-900 border-slate-200'
            }`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mt-7 mb-4 flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <span className={`w-2 h-6 rounded-full inline-block shrink-0 shadow-xs ${
                isDark ? 'bg-gradient-to-b from-teal-400 to-indigo-400' : 'bg-gradient-to-b from-indigo-500 to-indigo-700'
              }`} />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`text-base sm:text-lg font-extrabold tracking-tight mt-6 mb-3 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xs border ${
              isDark 
                ? 'text-white bg-slate-800/90 border-slate-700/80 shadow-inner' 
                : 'text-slate-900 bg-gradient-to-r from-slate-100/90 to-slate-50 border-slate-200/90'
            }`}>
              <Bookmark className={`w-4 h-4 shrink-0 ${isDark ? 'text-teal-400' : 'text-indigo-600'}`} />
              <span className="leading-snug">{children}</span>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className={`text-xs sm:text-sm font-black mt-5 mb-2.5 flex items-center gap-2 uppercase tracking-wider ${
              isDark ? 'text-teal-300' : 'text-indigo-950'
            }`}>
              <span className={`w-1.5 h-3.5 rounded-full inline-block shrink-0 ${
                isDark ? 'bg-teal-400' : 'bg-indigo-500'
              }`} />
              <span>{children}</span>
            </h4>
          ),
          p: ({ children }) => (
            <p className={`leading-relaxed text-[15px] sm:text-[15.5px] mb-4 font-normal tracking-normal last:mb-0 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-3 space-y-2.5 pl-1 list-none">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className={`my-3 space-y-2.5 pl-2 list-decimal list-inside text-[15px] font-medium ${
              isDark ? 'text-slate-200 marker:text-teal-400' : 'text-slate-800 marker:text-indigo-600 marker:font-bold'
            }`}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className={`flex items-start gap-3 text-[15px] leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <span className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                isDark ? 'bg-teal-400' : 'bg-indigo-500'
              }`} />
              <div className="flex-1 min-w-0">{children}</div>
            </li>
          ),
          strong: ({ children }) => (
            <strong className={`font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className={`italic ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {children}
            </em>
          ),
          blockquote: ({ children }) => {
            const rawText = extractText(children);
            const isWarning = rawText.includes('🚨') || rawText.includes('Atenção') || rawText.includes('ERRADO') || rawText.includes('⚠️') || rawText.includes('Pegadinha') || rawText.includes('Cuidado');
            const isTip = rawText.includes('💡') || rawText.includes('Dica') || rawText.includes('Princípio') || rawText.includes('Macete') || rawText.includes('Obrigatório') || rawText.includes('Regra de Ouro');
            const isSuccess = rawText.includes('✅') || rawText.includes('Correto') || rawText.includes('Vencedor');

            if (isWarning) {
              return (
                <div className={`my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 ${
                  isDark 
                    ? 'bg-amber-950/40 border-l-amber-500 border-amber-800/60 text-amber-200' 
                    : 'bg-amber-50/90 border-l-amber-500 border-amber-200/80 text-amber-950'
                }`}>
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-xs ${
                    isDark ? 'bg-amber-900/60 text-amber-300' : 'bg-amber-100 text-amber-700'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            if (isTip) {
              return (
                <div className={`my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 ${
                  isDark 
                    ? 'bg-indigo-950/50 border-l-indigo-500 border-indigo-800/60 text-indigo-200' 
                    : 'bg-indigo-50/90 border-l-indigo-600 border-indigo-200/80 text-indigo-950'
                }`}>
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-xs ${
                    isDark ? 'bg-indigo-900/60 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                  }`}>
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            if (isSuccess) {
              return (
                <div className={`my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 ${
                  isDark 
                    ? 'bg-emerald-950/40 border-l-emerald-500 border-emerald-800/60 text-emerald-200' 
                    : 'bg-emerald-50/90 border-l-emerald-600 border-emerald-200/80 text-emerald-950'
                }`}>
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-xs ${
                    isDark ? 'bg-emerald-900/60 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0 font-medium">
                    {children}
                  </div>
                </div>
              );
            }

            return (
              <div className={`my-5 p-4 sm:p-5 rounded-2xl border-l-4 border shadow-xs flex items-start gap-3.5 ${
                isDark 
                  ? 'bg-slate-800/80 border-l-slate-500 border-slate-700 text-slate-200' 
                  : 'bg-slate-50 border-l-slate-400 border-slate-200/80 text-slate-800'
              }`}>
                <div className={`p-2 rounded-xl shrink-0 mt-0.5 shadow-xs ${
                  isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200/70 text-slate-700'
                }`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-[14.5px] sm:text-[15px] leading-relaxed flex-1 prose-p:mb-2 last:prose-p:mb-0">
                  {children}
                </div>
              </div>
            );
          },
          code: ({ className: codeClass, children, ...props }: any) => {
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
              return <EditorialDiagram code={rawContent} isDark={isDark} />;
            }

            const isInline = !codeClass;
            if (isInline) {
              return (
                <code
                  className={`px-1.5 py-0.5 font-mono text-xs font-semibold rounded-md border ${
                    isDark 
                      ? 'bg-slate-800 text-teal-300 border-slate-700' 
                      : 'bg-slate-100 text-indigo-700 border-slate-200'
                  }`}
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
          hr: () => (
            <hr className={`my-6 ${isDark ? 'border-slate-800' : 'border-slate-200/80'}`} />
          ),
          table: ({ children }) => (
            <div className="my-5">
              <div className={`sm:hidden flex items-center justify-end gap-1 text-[11px] font-bold mb-1 px-1 ${
                isDark ? 'text-slate-400' : 'text-slate-400'
              }`}>
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <span>Deslize a tabela para ver tudo</span>
              </div>
              <div className={`overflow-x-auto rounded-2xl border shadow-xs ${
                isDark 
                  ? 'border-slate-700/80 bg-slate-950/70 text-slate-100 shadow-md' 
                  : 'border-slate-200 bg-white text-slate-900'
              }`}>
                <table className="w-full text-sm text-left border-collapse min-w-[540px]">
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children }) => (
            <thead className={`uppercase tracking-wider text-xs border-b font-extrabold ${
              isDark 
                ? 'bg-slate-800/90 text-white border-slate-700' 
                : 'bg-slate-100/90 text-slate-900 border-slate-200'
            }`}>
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className={`px-5 py-3.5 font-black border-r last:border-r-0 ${
              isDark 
                ? 'text-white border-slate-700/80' 
                : 'text-slate-900 border-slate-200/70'
            }`}>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className={`px-5 py-3.5 border-b border-r last:border-r-0 align-top text-xs sm:text-sm ${
              isDark 
                ? 'text-slate-200 border-slate-800/80 border-r-slate-800/80' 
                : 'text-slate-700 border-slate-100 border-r-slate-100/80'
            }`}>
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className={`transition-colors ${
              isDark 
                ? 'hover:bg-slate-800/60 odd:bg-slate-900/60 even:bg-slate-950/70' 
                : 'hover:bg-slate-50/80 odd:bg-white even:bg-slate-50/60'
            }`}>
              {children}
            </tr>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
