import React, { useState, useMemo, useCallback } from 'react';
import { ChevronDown, ChevronRight, Network, Dot } from 'lucide-react';

/**
 * AccordionTree — Substitui `graph TD` com padrão de hierarquia em árvore (Padrão B)
 *
 * Sintaxe do bloco de código:
 * ```tree
 * TITLE: Título da Árvore
 * - Nó Raiz | descrição opcional
 *   - Nó Filho 1 | descrição
 *     - Nó Neto | descrição
 *   - Nó Filho 2 | descrição
 * ```
 *
 * Níveis de indentação: 0 = raiz, 2 espaços por nível.
 * Use `|` para separar rótulo de descrição.
 */

interface TreeNode {
  id: string;
  label: string;
  description: string;
  level: number;
  children: TreeNode[];
  isLeaf: boolean;
}

function parseTreeCode(raw: string): { title: string; roots: TreeNode[] } {
  const lines = raw.trim().split('\n');
  let title = 'Estrutura Hierárquica';

  const nodeLines: Array<{ indent: number; label: string; description: string }> = [];

  for (const line of lines) {
    const titleMatch = line.match(/^TITLE:\s*(.+)/);
    if (titleMatch) {
      title = titleMatch[1].trim();
      continue;
    }

    const stripped = line.replace(/^\s*-\s*/, '');
    if (stripped === line && !line.trim().startsWith('-')) continue;

    const indentMatch = line.match(/^(\s*)-/);
    const indent = indentMatch ? indentMatch[1].length : 0;
    const parts = stripped.split('|').map((p) => p.trim());
    nodeLines.push({
      indent,
      label: parts[0] || '',
      description: parts[1] || '',
    });
  }

  // Build tree from indented list
  let idCounter = 0;
  const buildNode = (nl: typeof nodeLines[0], parentLevel: number): TreeNode => ({
    id: `node-${idCounter++}`,
    label: nl.label,
    description: nl.description,
    level: parentLevel,
    children: [],
    isLeaf: false,
  });

  const roots: TreeNode[] = [];
  const stack: Array<{ node: TreeNode; indent: number }> = [];

  for (const nl of nodeLines) {
    const node = buildNode(nl, stack.length);

    // Find correct parent
    while (stack.length > 0 && stack[stack.length - 1].indent >= nl.indent) {
      stack.pop();
    }

    if (stack.length === 0) {
      roots.push(node);
    } else {
      stack[stack.length - 1].node.children.push(node);
    }

    stack.push({ node, indent: nl.indent });
  }

  // Mark leaves
  const markLeaves = (nodes: TreeNode[]) => {
    for (const n of nodes) {
      if (n.children.length === 0) n.isLeaf = true;
      else markLeaves(n.children);
    }
  };
  markLeaves(roots);

  return { title, roots };
}

// Level-based colors
const LEVEL_STYLES = [
  // Level 0 — Raiz
  {
    container: 'bg-indigo-600 dark:bg-indigo-700 text-white',
    icon: 'text-indigo-200',
    connector: 'border-indigo-400 dark:border-indigo-600',
    badge: 'bg-indigo-500',
  },
  // Level 1
  {
    container: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700',
    icon: 'text-slate-400',
    connector: 'border-slate-300 dark:border-slate-600',
    badge: 'bg-slate-400',
  },
  // Level 2
  {
    container: 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60',
    icon: 'text-slate-300',
    connector: 'border-slate-200 dark:border-slate-700',
    badge: 'bg-slate-300',
  },
  // Level 3+
  {
    container: 'bg-slate-50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 border border-dashed border-slate-200 dark:border-slate-700/50',
    icon: 'text-slate-300',
    connector: 'border-slate-200 dark:border-slate-700',
    badge: 'bg-slate-200',
  },
];

interface TreeNodeItemProps {
  node: TreeNode;
  level: number;
  defaultOpen?: boolean;
}

const TreeNodeItem: React.FC<TreeNodeItemProps> = ({ node, level, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || level === 0);
  const style = LEVEL_STYLES[Math.min(level, LEVEL_STYLES.length - 1)];
  const hasChildren = node.children.length > 0;

  const toggle = useCallback(() => {
    if (hasChildren) setIsOpen((o) => !o);
  }, [hasChildren]);

  return (
    <div className="flex flex-col">
      {/* Node button */}
      <button
        onClick={toggle}
        disabled={!hasChildren}
        aria-expanded={hasChildren ? isOpen : undefined}
        className={`
          flex items-center gap-2 w-full text-left px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg
          transition-all duration-150 min-w-0 max-w-full
          ${style.container}
          ${hasChildren ? 'cursor-pointer hover:opacity-90 active:scale-[0.99]' : 'cursor-default'}
          ${level === 0 ? 'shadow-md' : 'shadow-sm'}
        `}
      >
        {/* Expand icon */}
        <span className={`shrink-0 ${style.icon}`} aria-hidden="true">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          ) : (
            <Dot className="w-4 h-4" />
          )}
        </span>

        {/* Label */}
        <span
          className={`flex-1 min-w-0 break-words font-${level === 0 ? 'bold' : level === 1 ? 'semibold' : 'medium'} text-${level === 0 ? 'sm' : 'xs'} leading-snug`}
        >
          {node.label}
        </span>

        {/* Description badge */}
        {node.description && (
          <span
            className={`
              hidden sm:inline-block shrink-0 text-[10px] font-medium
              px-2 py-0.5 rounded-full max-w-[140px] truncate
              ${level === 0
                ? 'bg-white/20 text-white/90'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}
            `}
          >
            {node.description}
          </span>
        )}

        {/* Children count */}
        {hasChildren && !isOpen && (
          <span
            className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10"
            aria-label={`${node.children.length} subitens`}
          >
            +{node.children.length}
          </span>
        )}
      </button>

      {/* Mobile description (shown below button) */}
      {node.description && (
        <p className="sm:hidden text-[10px] text-slate-400 dark:text-slate-500 px-2 pt-1 pb-0.5 break-words">
          {node.description}
        </p>
      )}

      {/* Children — animated with CSS max-height */}
      {hasChildren && (
        <div
          className={`
            overflow-hidden transition-all duration-300 min-w-0 max-w-full
            ${isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}
          `}
          aria-hidden={!isOpen}
        >
          <div
            className={`
              pl-2 sm:pl-3.5 mt-1.5 space-y-1.5
              border-l-2 ml-1.5 sm:ml-2.5 min-w-0 max-w-full
              ${style.connector}
            `}
          >
            {node.children.map((child) => (
              <TreeNodeItem
                key={child.id}
                node={child}
                level={level + 1}
                defaultOpen={level === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface AccordionTreeProps {
  code: string;
  className?: string;
}

export const AccordionTree: React.FC<AccordionTreeProps> = ({ code, className = '' }) => {
  const { title, roots } = useMemo(() => parseTreeCode(code), [code]);

  const [allExpanded, setAllExpanded] = useState(false);

  const totalNodes = useMemo(() => {
    const count = (nodes: TreeNode[]): number =>
      nodes.reduce((acc, n) => acc + 1 + count(n.children), 0);
    return count(roots);
  }, [roots]);

  return (
    <div className={`my-6 w-full max-w-full overflow-hidden ${className}`} role="tree" aria-label={title}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 max-w-full">
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          <Network className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400">{totalNodes} nós</span>
          <button
            onClick={() => setAllExpanded((v) => !v)}
            className="text-[10px] text-indigo-500 dark:text-indigo-400 hover:underline font-medium cursor-pointer"
            aria-label={allExpanded ? 'Recolher todos' : 'Expandir todos'}
          >
            {allExpanded ? 'Recolher todos' : 'Expandir todos'}
          </button>
        </div>
      </div>

      {/* Tree */}
      <div className="space-y-2">
        {roots.map((root) => (
          <TreeNodeItem
            key={root.id}
            node={root}
            level={0}
            defaultOpen={true}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionTree;
