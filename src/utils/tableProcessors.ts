import React from 'react';

/**
 * Helper para extrair tipo e props de forma segura no TypeScript (React 19)
 */
export function getElementTypeAndProps(node: React.ReactNode): {
  typeStr: string;
  isFragment: boolean;
  props: Record<string, any>;
} | null {
  if (!React.isValidElement(node)) return null;

  const isFragment = node.type === React.Fragment;
  const typeStr =
    typeof node.type === 'string'
      ? node.type.toLowerCase()
      : (node.type as any)?.displayName?.toLowerCase() ||
        (node.type as any)?.name?.toLowerCase() ||
        '';

  const props = (node.props as Record<string, any>) || {};

  return { typeStr, isFragment, props };
}

/**
 * Extrai texto plano recursivamente de um ReactNode para inspeção defensiva
 */
export function extractNodeText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) return node.map(extractNodeText).join(' ');
  const parsed = getElementTypeAndProps(node);
  if (parsed) {
    return extractNodeText(parsed.props.children);
  }
  return '';
}

/**
 * Extrai cabeçalhos e linhas de elementos JSX aninhados (thead/tbody/tr/th/td/Fragment)
 */
export function extractTableDataFromChildren(children: React.ReactNode): {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
} {
  const headers: React.ReactNode[] = [];
  const rows: React.ReactNode[][] = [];

  function findThs(nodes: React.ReactNode) {
    React.Children.forEach(nodes, (node) => {
      const parsed = getElementTypeAndProps(node);
      if (!parsed) return;
      if (parsed.isFragment) {
        findThs(parsed.props.children);
        return;
      }
      if (parsed.typeStr === 'th' || parsed.props['data-component'] === 'th') {
        headers.push(parsed.props.children);
      } else if (parsed.props.children) {
        findThs(parsed.props.children);
      }
    });
  }

  function findTrs(nodes: React.ReactNode) {
    React.Children.forEach(nodes, (node) => {
      const parsed = getElementTypeAndProps(node);
      if (!parsed) return;
      if (parsed.isFragment) {
        findTrs(parsed.props.children);
        return;
      }
      if (parsed.typeStr === 'tr' || parsed.props['data-component'] === 'tr') {
        const rowCells: React.ReactNode[] = [];
        React.Children.forEach(parsed.props.children, (td) => {
          const tdParsed = getElementTypeAndProps(td);
          if (tdParsed) {
            rowCells.push(tdParsed.props.children);
          } else if (typeof td === 'string' || typeof td === 'number') {
            rowCells.push(td);
          }
        });
        if (rowCells.length > 0) {
          rows.push(rowCells);
        }
      } else if (parsed.props.children) {
        findTrs(parsed.props.children);
      }
    });
  }

  function scanElement(el: React.ReactNode) {
    const parsed = getElementTypeAndProps(el);
    if (!parsed) return;

    if (parsed.isFragment) {
      React.Children.forEach(parsed.props.children, scanElement);
      return;
    }

    const isThead =
      parsed.typeStr.includes('thead') || parsed.props['data-component'] === 'thead';
    const isTbody =
      parsed.typeStr.includes('tbody') || parsed.props['data-component'] === 'tbody';

    if (isThead) {
      findThs(parsed.props.children);
      return;
    }

    if (isTbody) {
      findTrs(parsed.props.children);
      return;
    }

    if (parsed.typeStr === 'tr' || parsed.props['data-component'] === 'tr') {
      const directCells = React.Children.toArray(parsed.props.children);
      const hasTh = directCells.some((c) => {
        const cParsed = getElementTypeAndProps(c);
        return cParsed?.typeStr === 'th' || cParsed?.props['data-component'] === 'th';
      });
      if (hasTh && headers.length === 0) {
        headers.push(...directCells.map((c) => getElementTypeAndProps(c)?.props.children ?? c));
      } else {
        rows.push(directCells.map((c) => getElementTypeAndProps(c)?.props.children ?? c));
      }
      return;
    }

    if (parsed.props.children) {
      React.Children.forEach(parsed.props.children, scanElement);
    }
  }

  React.Children.forEach(children, scanElement);

  return { headers, rows };
}
