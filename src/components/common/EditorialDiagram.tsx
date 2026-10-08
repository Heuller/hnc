import React, { useState, useMemo } from 'react';
import {
  Workflow,
  ListTree,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  HelpCircle,
  Code2,
  ArrowDown,
  ArrowRight,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

export interface EditorialDiagramProps {
  code: string;
  className?: string;
  isDark?: boolean;
}

export interface ParsedNode {
  id: string;
  label: string;
  title: string;
  details: string[];
  shape: 'box' | 'decision' | 'rounded' | 'code';
  isDecision: boolean;
  isExample: boolean;
  layer: number;
  category?: 'legislativo' | 'judiciario' | 'executivo' | 'controle' | 'justica' | 'default';
}

export interface ParsedEdge {
  from: string;
  to: string;
  label?: string;
  type: string;
  isPositive: boolean;
  isNegative: boolean;
}

export interface ParsedGraph {
  direction: 'TD' | 'LR' | 'TB';
  title?: string;
  nodes: ParsedNode[];
  edges: ParsedEdge[];
  nodeMap: Map<string, ParsedNode>;
  roots: ParsedNode[];
  layers: ParsedNode[][];
  archetype: 'decision' | 'tree' | 'pipeline' | 'grouped' | 'general';
}

function parseMermaidCode(rawCode: string): ParsedGraph {
  const lines = rawCode.trim().split('\n');
  const nodeMap = new Map<string, ParsedNode>();
  const edges: ParsedEdge[] = [];
  let direction: 'TD' | 'LR' | 'TB' = 'TD';
  let title = '';

  const cleanLabel = (text: string) => {
    return text
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/\\"/g, '"')
      .replace(/^["']|["']$/g, '')
      .trim();
  };

  const processNode = (id: string, rawLabelText: string, shapeType: 'box' | 'decision' | 'rounded'): ParsedNode => {
    const label = cleanLabel(rawLabelText || id);
    const parts = label.split('\n').map(p => p.trim()).filter(Boolean);
    const mainTitle = parts[0] || label;
    const details = parts.slice(1);

    const isDecision = shapeType === 'decision' || mainTitle.includes('?') || mainTitle.toLowerCase().startsWith('analise') || mainTitle.toLowerCase().startsWith('decisão');
    const isExample = mainTitle.startsWith('Ex:') || mainTitle.includes('$a') || mainTitle.includes('MARC 21') || mainTitle.includes('110') || mainTitle.includes('710');

    let category: ParsedNode['category'] = 'default';
    const lower = label.toLowerCase();
    if (lower.includes('legislativo') || lower.includes('câmara') || lower.includes('senado') || lower.includes('congresso') || lower.includes('cedi')) {
      category = 'legislativo';
    } else if (lower.includes('judiciário') || lower.includes('stf') || lower.includes('stj') || lower.includes('tribunal')) {
      category = 'judiciario';
    } else if (lower.includes('executivo') || lower.includes('presidente') || lower.includes('ministério')) {
      category = 'executivo';
    } else if (lower.includes('contas') || lower.includes('tcu') || lower.includes('tce')) {
      category = 'controle';
    } else if (lower.includes('justiça') || lower.includes('mpu') || lower.includes('mpe')) {
      category = 'justica';
    }

    return {
      id,
      label,
      title: mainTitle,
      details,
      shape: isDecision ? 'decision' : isExample ? 'code' : shapeType,
      isDecision,
      isExample,
      layer: 0,
      category,
    };
  };

  const extractNodeDef = (str: string): ParsedNode => {
    const trimmed = str.trim();
    const match = trimmed.match(/^([A-Za-z0-9_-]+)(?:\["?(.*?)"?\]|\{"?([^"}]*?)"?\}|\("?(.*?)"?\))?$/s);
    if (match) {
      const id = match[1];
      const rawText = match[2] ?? match[3] ?? match[4] ?? id;
      const shapeType = match[3] !== undefined ? 'decision' : match[4] !== undefined ? 'rounded' : 'box';
      return processNode(id, rawText, shapeType);
    }
    return processNode(trimmed, trimmed, 'box');
  };

  lines.forEach(rawLine => {
    let line = rawLine.trim();
    if (!line || line.startsWith('%%')) return;

    if (line.startsWith('subgraph ')) {
      title = line.replace('subgraph', '').replace(/[[\]"']/g, '').trim();
      return;
    }
    if (line === 'end') return;

    if (line.startsWith('graph ') || line.startsWith('flowchart ')) {
      const dir = line.split(/\s+/)[1]?.trim().toUpperCase();
      if (dir === 'LR' || dir === 'TD' || dir === 'TB') {
        direction = dir as 'TD' | 'LR' | 'TB';
      }
      return;
    }

    const arrowRegex = /(-->|---|==>|-\.->)(?:\|([^|]+)\|)?/g;
    const matches = Array.from(line.matchAll(arrowRegex));

    if (matches.length > 0) {
      const parts: { fromText: string; arrow: string; label?: string }[] = [];
      let lastIndex = 0;
      matches.forEach(m => {
        parts.push({
          fromText: line.substring(lastIndex, m.index).trim(),
          arrow: m[1],
          label: m[2] ? m[2].trim() : undefined,
        });
        lastIndex = m.index + m[0].length;
      });
      const finalToText = line.substring(lastIndex).trim();

      for (let i = 0; i < parts.length; i++) {
        const fromNode = extractNodeDef(parts[i].fromText);
        const toNode = (i === parts.length - 1) ? extractNodeDef(finalToText) : extractNodeDef(parts[i + 1].fromText);

        if (!nodeMap.has(fromNode.id) || (fromNode.label !== fromNode.id && nodeMap.get(fromNode.id)?.label === fromNode.id)) {
          nodeMap.set(fromNode.id, fromNode);
        }
        if (!nodeMap.has(toNode.id) || (toNode.label !== toNode.id && nodeMap.get(toNode.id)?.label === toNode.id)) {
          nodeMap.set(toNode.id, toNode);
        }

        const rawEdgeLabel = parts[i].label;
        const lowerLabel = (rawEdgeLabel || '').toLowerCase();
        const isPositive = lowerLabel.startsWith('sim') || lowerLabel.includes('correto') || lowerLabel.includes('positivo');
        const isNegative = lowerLabel.startsWith('não') || lowerLabel.startsWith('nao') || lowerLabel.includes('exceção') || lowerLabel.includes('rejeita');

        edges.push({
          from: fromNode.id,
          to: toNode.id,
          label: rawEdgeLabel,
          type: parts[i].arrow,
          isPositive,
          isNegative,
        });
      }
    } else {
      const single = extractNodeDef(line);
      if (single.id && !nodeMap.has(single.id)) {
        nodeMap.set(single.id, single);
      }
    }
  });

  const nodes = Array.from(nodeMap.values());
  const incomingCount = new Map<string, number>();
  nodes.forEach(n => incomingCount.set(n.id, 0));
  edges.forEach(e => {
    incomingCount.set(e.to, (incomingCount.get(e.to) || 0) + 1);
  });

  const roots = nodes.filter(n => (incomingCount.get(n.id) || 0) === 0);
  if (roots.length === 0 && nodes.length > 0) {
    roots.push(nodes[0]);
  }

  // Calculate layer for each node (longest path from root)
  const layerMap = new Map<string, number>();
  roots.forEach(r => layerMap.set(r.id, 0));

  let changed = true;
  let iterations = 0;
  while (changed && iterations < 30) {
    changed = false;
    iterations++;
    edges.forEach(e => {
      const fromLayer = layerMap.get(e.from) ?? 0;
      const currentToLayer = layerMap.get(e.to) ?? 0;
      if (fromLayer + 1 > currentToLayer) {
        layerMap.set(e.to, fromLayer + 1);
        changed = true;
      }
    });
  }

  nodes.forEach(n => {
    n.layer = layerMap.get(n.id) ?? 0;
  });

  const maxLayer = Math.max(0, ...nodes.map(n => n.layer));
  const layers: ParsedNode[][] = [];
  for (let l = 0; l <= maxLayer; l++) {
    layers.push(nodes.filter(n => n.layer === l));
  }

  // Archetype
  let archetype: ParsedGraph['archetype'] = 'general';
  const hasDecision = nodes.some(n => n.isDecision);
  if (hasDecision) {
    archetype = 'decision';
  } else if (edges.length === 0 && nodes.length > 0) {
    archetype = 'grouped';
  } else if (roots.length === 1 && nodes.length > 5 && edges.length >= nodes.length - 2) {
    archetype = 'tree';
  } else if (nodes.length <= 6 && roots.length === 1) {
    archetype = 'pipeline';
  }

  if (!title) {
    if (archetype === 'decision') title = 'Fluxo Decisório Cebraspe';
    else if (roots.length > 0) title = roots[0].title;
    else title = 'Esquema Conceitual';
  }

  return {
    direction,
    title,
    nodes,
    edges,
    nodeMap,
    roots,
    layers,
    archetype,
  };
}

export const EditorialDiagram: React.FC<EditorialDiagramProps> = ({
  code,
  className = '',
}) => {
  const [viewMode, setViewMode] = useState<'visual' | 'tree' | 'code'>('visual');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const parsed = useMemo(() => parseMermaidCode(code), [code]);

  const handleCopy = () => {
    let text = `# ${parsed.title || 'Esquema Conceitual'}\n\n`;
    parsed.nodes.forEach(n => {
      text += `* **${n.title}**\n`;
      if (n.details.length > 0) {
        n.details.forEach(d => {
          text += `  - ${d}\n`;
        });
      }
    });
    if (parsed.edges.length > 0) {
      text += '\n### Conexões e Relações:\n';
      parsed.edges.forEach(e => {
        const fromNode = parsed.nodeMap.get(e.from)?.title || e.from;
        const toNode = parsed.nodeMap.get(e.to)?.title || e.to;
        text += `- ${fromNode} -> ${toNode}${e.label ? ` (${e.label})` : ''}\n`;
      });
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getEdgeBadgeStyle = (edge: ParsedEdge) => {
    if (edge.isPositive) {
      return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-700/80';
    }
    if (edge.isNegative) {
      return 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-700/80';
    }
    return 'bg-amber-100/80 text-amber-900 border-amber-300/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700/70';
  };

  const renderNodeCard = (node: ParsedNode, customClass = '') => {
    const isHovered = hoveredNodeId === node.id;
    const isConnected = hoveredNodeId
      ? parsed.edges.some(e => (e.from === hoveredNodeId && e.to === node.id) || (e.to === hoveredNodeId && e.from === node.id))
      : false;

    let shapeClasses = 'bg-surface text-ink border-border shadow-xs hover:border-accent/40';
    let badgeColor = 'bg-surface-2 text-ink-2';

    if (node.isDecision) {
      shapeClasses = 'bg-amber-500/10 border-amber-500/50 text-ink shadow-amber-500/5 ring-1 ring-amber-500/20';
      badgeColor = 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30';
    } else if (node.isExample) {
      shapeClasses = 'bg-surface-2/90 font-mono text-ink border-border/90 shadow-xs';
      badgeColor = 'bg-surface text-ink-2 border border-border';
    } else if (node.category === 'legislativo') {
      shapeClasses = 'bg-sky-500/5 border-sky-500/30 text-ink hover:border-sky-500/60';
      badgeColor = 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/30';
    } else if (node.category === 'judiciario') {
      shapeClasses = 'bg-indigo-500/5 border-indigo-500/30 text-ink hover:border-indigo-500/60';
      badgeColor = 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30';
    }

    if (isHovered || isConnected) {
      shapeClasses += ' ring-2 ring-accent shadow-md';
    }

    return (
      <div
        key={node.id}
        onMouseEnter={() => setHoveredNodeId(node.id)}
        onMouseLeave={() => setHoveredNodeId(null)}
        className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between min-w-0 max-w-full ${shapeClasses} ${customClass}`}
      >
        <div className="min-w-0">
          {node.isDecision && (
            <div className="mb-1.5">
              <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase items-center gap-1 ${badgeColor}`}>
                <HelpCircle className="w-3 h-3 text-amber-500" />
                Ponto de Decisão
              </span>
            </div>
          )}
          {node.isExample && (
            <div className="mb-1.5">
              <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider items-center gap-1 ${badgeColor}`}>
                <Code2 className="w-3 h-3 text-accent" />
                Exemplo MARC 21
              </span>
            </div>
          )}

          <div className="min-w-0">
            <span className={`leading-snug tracking-tight text-ink min-w-0 break-words block ${
              node.isExample ? 'font-mono text-xs sm:text-[13px] font-semibold' : 'font-sans font-bold text-xs sm:text-[13.5px]'
            }`}>
              {node.title}
            </span>
          </div>

          {node.details.length > 0 && (
            <div className="mt-2 pt-2 border-t border-border/50 space-y-1 min-w-0">
              {node.details.map((detail, idx) => (
                <div key={idx} className="text-xs sm:text-[12.5px] text-ink-2 leading-relaxed flex items-start gap-1.5 min-w-0">
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span className="min-w-0 break-words">{detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderVisualContent = () => {
    // Archetype 1: Decision Flow
    if (parsed.archetype === 'decision') {
      const decisionNode = parsed.nodes.find(n => n.isDecision);
      const rootNode = parsed.roots.find(r => r.id !== decisionNode?.id) || parsed.roots[0];
      const positiveEdges = parsed.edges.filter(e => e.isPositive);
      const negativeEdges = parsed.edges.filter(e => e.isNegative || (!e.isPositive && e.from === decisionNode?.id));

      const getDescendants = (startNodeId: string): ParsedNode[] => {
        const visited = new Set<string>();
        const queue = [startNodeId];
        const res: ParsedNode[] = [];
        while (queue.length > 0) {
          const cur = queue.shift()!;
          if (!visited.has(cur)) {
            visited.add(cur);
            const n = parsed.nodeMap.get(cur);
            if (n && cur !== decisionNode?.id && cur !== rootNode?.id) res.push(n);
            parsed.edges.filter(e => e.from === cur).forEach(e => queue.push(e.to));
          }
        }
        return res;
      };

      const posBranch = positiveEdges[0] ? getDescendants(positiveEdges[0].to) : [];
      const negBranch = negativeEdges[0] ? getDescendants(negativeEdges[0].to) : [];

      return (
        <div className="space-y-6 min-w-0">
          {/* Root node */}
          {rootNode && (
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {renderNodeCard(rootNode)}
              </div>
            </div>
          )}

          {/* Central Arrow */}
          <div className="flex flex-col items-center justify-center -my-2">
            <div className="w-0.5 h-6 bg-border" />
            <ArrowDown className="w-4 h-4 text-ink-2 -mt-1" />
          </div>

          {/* Decision Node */}
          {decisionNode && (
            <div className="flex justify-center">
              <div className="max-w-xl w-full">
                {renderNodeCard(decisionNode)}
              </div>
            </div>
          )}

          {/* Bifurcation Split Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 min-w-0">
            {/* POSITIVE / SIM BRANCH */}
            <div className="p-4 sm:p-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 space-y-4 min-w-0 flex flex-col justify-between">
              <div className="space-y-2 pb-2 border-b border-emerald-500/20">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                  <Check className="w-3.5 h-3.5" />
                  RAMO POSITIVO (SIM)
                </span>
                {positiveEdges[0]?.label && (
                  <p className="text-xs sm:text-[13px] font-medium text-emerald-900 dark:text-emerald-200 leading-snug break-words">
                    {positiveEdges[0].label}
                  </p>
                )}
              </div>

              <div className="space-y-3 flex-1 min-w-0">
                {posBranch.map(n => renderNodeCard(n))}
              </div>
            </div>

            {/* NEGATIVE / NÃO BRANCH */}
            <div className="p-4 sm:p-5 rounded-2xl border border-rose-500/25 bg-rose-500/5 space-y-4 min-w-0 flex flex-col justify-between">
              <div className="space-y-2 pb-2 border-b border-rose-500/20">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-800 dark:text-rose-300 font-bold text-xs">
                  <ChevronRight className="w-3.5 h-3.5" />
                  RAMO EXCEÇÃO (NÃO)
                </span>
                {negativeEdges[0]?.label && (
                  <p className="text-xs sm:text-[13px] font-medium text-rose-900 dark:text-rose-200 leading-snug break-words">
                    {negativeEdges[0].label}
                  </p>
                )}
              </div>

              <div className="space-y-3 flex-1 min-w-0">
                {negBranch.map(n => renderNodeCard(n))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Archetype 2: Tree / Organogram
    if (parsed.archetype === 'tree') {
      const root = parsed.roots[0];
      const mainBranches = parsed.edges.filter(e => e.from === root?.id);

      const getSubtree = (startId: string): ParsedNode[] => {
        const visited = new Set<string>();
        const queue = [startId];
        const res: ParsedNode[] = [];
        while (queue.length > 0) {
          const cur = queue.shift()!;
          if (!visited.has(cur)) {
            visited.add(cur);
            const n = parsed.nodeMap.get(cur);
            if (n && cur !== root?.id) res.push(n);
            parsed.edges.filter(e => e.from === cur).forEach(e => queue.push(e.to));
          }
        }
        return res;
      };

      return (
        <div className="space-y-6 min-w-0">
          {/* Root Header */}
          {root && (
            <div className="flex justify-center">
              <div className="max-w-xl w-full">
                <div className="p-4 sm:p-5 rounded-2xl border-2 border-accent/40 bg-surface shadow-md text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1 inline-block">
                    Estrutura Institucional de Referência
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                    {root.title}
                  </h4>
                  {root.details.length > 0 && (
                    <p className="text-xs sm:text-sm text-ink-2 mt-1">
                      {root.details.join(' • ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Connector to Branches */}
          <div className="flex flex-col items-center justify-center -my-2">
            <div className="w-0.5 h-6 bg-border" />
            <ArrowDown className="w-4 h-4 text-ink-2 -mt-1" />
          </div>

          {/* Branch Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
            {mainBranches.map((branchEdge, idx) => {
              const branchNode = parsed.nodeMap.get(branchEdge.to);
              if (!branchNode) return null;
              const subNodes = getSubtree(branchNode.id);

              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-border bg-surface-2/40 flex flex-col justify-between space-y-4 min-w-0"
                >
                  <div className="space-y-3 min-w-0">
                    <div className="pb-2 border-b border-border/60">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-0.5">
                        Ramo {idx + 1}
                      </div>
                      <h5 className="font-sans font-bold text-sm text-ink break-words">
                        {branchNode.title}
                      </h5>
                    </div>

                    <div className="space-y-2.5 min-w-0">
                      {subNodes.map((sub, sIdx) => (
                        <div key={sIdx} className="relative pl-3 border-l-2 border-border/80 min-w-0">
                          {renderNodeCard(sub)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Archetype 3: Sequential Pipeline
    if (parsed.archetype === 'pipeline') {
      return (
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 overflow-x-auto py-2">
          {parsed.nodes.map((node, idx) => {
            const outEdge = parsed.edges.find(e => e.from === node.id);
            return (
              <React.Fragment key={node.id}>
                <div className="flex-1 min-w-[220px]">
                  <div className="flex items-center gap-2 mb-1.5 text-[11px] font-bold text-accent">
                    <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <span>Etapa {idx + 1}</span>
                  </div>
                  {renderNodeCard(node)}
                </div>

                {outEdge && (
                  <div className="flex md:flex-col items-center justify-center gap-1 shrink-0 py-1 md:py-0">
                    {outEdge.label && (
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border max-w-[140px] text-center leading-tight ${getEdgeBadgeStyle(outEdge)}`}>
                        {outEdge.label}
                      </span>
                    )}
                    <ArrowRight className="hidden md:block w-4 h-4 text-ink-2" />
                    <ArrowDown className="md:hidden w-4 h-4 text-ink-2" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      );
    }

    // Default: Grouped or Layered Cards
    return (
      <div className="space-y-6 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
          {parsed.nodes.map(n => renderNodeCard(n))}
        </div>

        {parsed.edges.length > 0 && (
          <div className="p-4 rounded-xl border border-border/80 bg-surface-2/40 min-w-0">
            <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-ink-2 mb-2 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-accent" />
              Relações e Transições Mapeadas
            </h5>
            <div className="flex flex-wrap gap-2">
              {parsed.edges.map((e, idx) => {
                const fromNode = parsed.nodeMap.get(e.from)?.title || e.from;
                const toNode = parsed.nodeMap.get(e.to)?.title || e.to;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs bg-surface px-2.5 py-1.5 rounded-lg border border-border min-w-0"
                  >
                    <span className="font-medium text-ink truncate max-w-[150px]">{fromNode}</span>
                    <ArrowRight className="w-3 h-3 text-ink-2 shrink-0" />
                    <span className="font-medium text-ink truncate max-w-[150px]">{toNode}</span>
                    {e.label && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full border font-semibold truncate max-w-[180px] ${getEdgeBadgeStyle(e)}`}>
                        {e.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTreeContent = () => {
    return (
      <div className="p-4 sm:p-5 rounded-xl border border-border bg-surface space-y-4 min-w-0">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-2">
            Estrutura Hierárquica em Tópicos
          </span>
          <span className="text-xs text-ink-2 font-mono">
            {parsed.nodes.length} nós • {parsed.edges.length} conexões
          </span>
        </div>

        <div className="space-y-3 font-sans min-w-0">
          {parsed.roots.map((root, rIdx) => {
            const childEdges = parsed.edges.filter(e => e.from === root.id);
            return (
              <div key={rIdx} className="space-y-2 min-w-0">
                <div className="font-bold text-sm sm:text-base text-ink flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="min-w-0 break-words">{root.title}</span>
                </div>

                {childEdges.length > 0 && (
                  <div className="ml-5 pl-3 border-l-2 border-border/80 space-y-2 min-w-0">
                    {childEdges.map((e, cIdx) => {
                      const child = parsed.nodeMap.get(e.to);
                      if (!child) return null;
                      const grandChildren = parsed.edges.filter(ge => ge.from === child.id);

                      return (
                        <div key={cIdx} className="space-y-1 min-w-0">
                          <div className="text-xs sm:text-sm font-medium text-ink flex items-center gap-2 min-w-0 flex-wrap">
                            <span className="text-accent shrink-0">↳</span>
                            <span className="min-w-0 break-words">{child.title}</span>
                            {e.label && (
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full border shrink-0 ${getEdgeBadgeStyle(e)}`}>
                                {e.label}
                              </span>
                            )}
                          </div>

                          {grandChildren.length > 0 && (
                            <div className="ml-5 pl-3 border-l-2 border-border/50 space-y-1 min-w-0">
                              {grandChildren.map((ge, gIdx) => {
                                const gChild = parsed.nodeMap.get(ge.to);
                                if (!gChild) return null;
                                return (
                                  <div key={gIdx} className="text-xs text-ink-2 flex items-center gap-2 min-w-0 flex-wrap">
                                    <span className="shrink-0">•</span>
                                    <span className="min-w-0 break-words">{gChild.title}</span>
                                    {ge.label && (
                                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full border shrink-0 ${getEdgeBadgeStyle(ge)}`}>
                                        {ge.label}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`my-6 rounded-2xl border border-border bg-surface/90 backdrop-blur-xs shadow-xs overflow-hidden min-w-0 ${className}`}>
        {/* Editorial Diagram Header */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-surface-2/60 border-b border-border flex flex-wrap items-center justify-between gap-3 min-w-0">
          {/* Left: Title & Badge */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="p-2 rounded-xl bg-accent/10 text-accent shrink-0 shadow-xs">
              <Workflow className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h4 className="font-serif font-bold text-sm sm:text-[15px] text-ink truncate">
                  {parsed.title}
                </h4>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-surface text-ink-2 border border-border shrink-0">
                  {parsed.archetype === 'decision' ? 'Fluxo Cebraspe' : 'Mapa Mental'}
                </span>
              </div>
              <p className="text-[11px] text-ink-2 truncate">
                Esquema Conceitual de Alta Retenção • {parsed.nodes.length} conceitos
              </p>
            </div>
          </div>

          {/* Right: Mode Selector & Actions */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            {/* View Mode Segmented Control */}
            <div className="inline-flex p-0.5 rounded-lg bg-surface border border-border text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode('visual')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 text-xs ${
                  viewMode === 'visual'
                    ? 'bg-accent text-white font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Visualizar fluxo interativo em cartões"
              >
                <Workflow className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fluxo</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('tree')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 text-xs ${
                  viewMode === 'tree'
                    ? 'bg-accent text-white font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Visualizar estrutura em tópicos / lista"
              >
                <ListTree className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tópicos</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('code')}
                className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 text-xs ${
                  viewMode === 'code'
                    ? 'bg-accent text-white font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
                title="Exibir código Mermaid original"
              >
                <Code2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Copiar síntese do esquema"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            {/* Expand / Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="p-1.5 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors"
              title="Expandir diagrama em tela cheia"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 min-w-0">
          {viewMode === 'visual' && renderVisualContent()}
          {viewMode === 'tree' && renderTreeContent()}
          {viewMode === 'code' && (
            <div className="space-y-2">
              <div className="text-xs text-ink-2 font-mono">Código Mermaid Original:</div>
              <pre className="font-mono text-xs bg-surface-2 p-4 rounded-xl border border-border overflow-x-auto text-ink">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen / Expanded Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="bg-surface text-ink rounded-3xl border border-border max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-border bg-surface-2/70 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-accent/15 text-accent">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-ink truncate">
                    {parsed.title}
                  </h3>
                  <p className="text-xs text-ink-2">
                    Visualização Expandida de Alta Resolução • {parsed.nodes.length} nós mapeados
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-surface border border-border text-xs">
                  <button
                    type="button"
                    onClick={() => setZoom(z => Math.max(0.7, z - 0.15))}
                    className="p-1 hover:text-accent"
                    title="Diminuir Zoom"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-mono">{Math.round(zoom * 100)}%</span>
                  <button
                    type="button"
                    onClick={() => setZoom(z => Math.min(1.5, z + 0.15))}
                    className="p-1 hover:text-accent"
                    title="Aumentar Zoom"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoom(1)}
                    className="p-1 hover:text-accent ml-1 border-l border-border pl-1.5"
                    title="Redefinir Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl border border-border bg-surface text-ink text-xs font-semibold hover:bg-surface-2 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-xl border border-border bg-surface hover:bg-surface-2 text-ink-2 hover:text-ink transition-colors"
                  title="Fechar visualização expandida"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto p-6 sm:p-8">
              <div
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.15s ease-out',
                }}
              >
                {viewMode === 'visual' && renderVisualContent()}
                {viewMode === 'tree' && renderTreeContent()}
                {viewMode === 'code' && (
                  <pre className="font-mono text-xs bg-surface-2 p-4 rounded-xl border border-border overflow-x-auto text-ink">
                    <code>{code}</code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
