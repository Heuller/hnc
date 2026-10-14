/**
 * Utilitários de pré-processamento de Markdown para a plataforma Heuller na Câmara.
 * Implementa salvaguardas da Fase U1:
 * - Proteção de cifrões de moeda (R$ e US$) contra interpretação indevida pelo remark-math
 * - Transformação de alertas estilo GitHub ([!NOTE], [!CAUTION], etc.) em callouts semânticos em português
 */

export type CalloutType = 'note' | 'tip' | 'important' | 'warning' | 'caution';

export interface CalloutMeta {
  type: CalloutType;
  titulo: string;
  classeCss: string;
}

export const CALLOUT_CONFIG: Record<CalloutType, { titulo: string; borda: string; fundo: string; texto: string; iconeCor: string }> = {
  note: {
    titulo: 'Nota',
    borda: 'border-l-blue-500 border-blue-200/80 dark:border-blue-800/60',
    fundo: 'bg-blue-50/80 dark:bg-blue-950/40',
    texto: 'text-blue-950 dark:text-blue-200',
    iconeCor: 'text-blue-600 dark:text-blue-400',
  },
  tip: {
    titulo: 'Dica',
    borda: 'border-l-emerald-500 border-emerald-200/80 dark:border-emerald-800/60',
    fundo: 'bg-emerald-50/80 dark:bg-emerald-950/40',
    texto: 'text-emerald-950 dark:text-emerald-200',
    iconeCor: 'text-emerald-600 dark:text-emerald-400',
  },
  important: {
    titulo: 'Importante',
    borda: 'border-l-indigo-600 border-indigo-200/80 dark:border-indigo-800/60',
    fundo: 'bg-indigo-50/80 dark:bg-indigo-950/40',
    texto: 'text-indigo-950 dark:text-indigo-200',
    iconeCor: 'text-indigo-600 dark:text-indigo-400',
  },
  warning: {
    titulo: 'Atenção',
    borda: 'border-l-amber-500 border-amber-200/80 dark:border-amber-800/60',
    fundo: 'bg-amber-50/80 dark:bg-amber-950/40',
    texto: 'text-amber-950 dark:text-amber-200',
    iconeCor: 'text-amber-600 dark:text-amber-400',
  },
  caution: {
    titulo: 'Casca de banana',
    borda: 'border-l-rose-500 border-rose-200/80 dark:border-rose-800/60',
    fundo: 'bg-rose-50/80 dark:bg-rose-950/40',
    texto: 'text-rose-950 dark:text-rose-200',
    iconeCor: 'text-rose-600 dark:text-rose-400',
  },
};

/**
 * Protege expressões monetárias em Reais (R$) e Dólares (US$)
 * para que o `remark-math` não confunda o símbolo de cifrão com delimitadores de LaTeX.
 * Exemplo: "R$ 32.070,88" -> "R\$ 32.070,88".
 * O compilador Markdown desfaz o escape ao gerar o HTML, exibindo o texto literal "R$ 32.070,88".
 */
export function protegerCifraoMoeda(texto: string): string {
  if (!texto) return '';

  // Protege "R$" e "US$" seguidos de espaço horizontal e/ou dígitos/vírgulas/pontos (não escapados)
  const processado = texto.replace(
    /(^|[^\\])(R|US)\$([ \t]*[\d.,]+)/g,
    (_match, prefix, moeda, valor) => `${prefix}${moeda}\\$${valor}`
  );

  return processado;
}

/**
 * Normaliza a sintaxe de alertas estilo GitHub:
 * `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`
 * para tags marcadas explicitamente `[[CALLOUT:TIPO]]` em português para que o leitor
 * renderize sem que nenhum `[!` chegue ao DOM.
 */
export function normalizarAlertasGithub(texto: string): string {
  if (!texto) return '';

  return texto.replace(
    /(^|\n)>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/gi,
    (_match, prefix, tipo) => {
      const normalizado = tipo.toLowerCase() as CalloutType;
      return `${prefix}> [[CALLOUT:${normalizado}]]`;
    }
  );
}

/**
 * Pipeline completo de sanitização e preparação de conteúdo Markdown
 */
export function prepararConteudoMarkdown(markdown: string): string {
  if (!markdown) return '';
  const comMoedaProtegida = protegerCifraoMoeda(markdown);
  const comAlertasNormalizados = normalizarAlertasGithub(comMoedaProtegida);
  return comAlertasNormalizados;
}

/**
 * Extrai texto simples de nós React recursivamente para inspeção semântica
 */
export function extractPlainText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractPlainText).join(' ');
  if (typeof node === 'object' && node.props && node.props.children) {
    return extractPlainText(node.props.children);
  }
  return '';
}

/**
 * Remove marcadores internos [[CALLOUT:tipo]] da árvore de nós React
 */
export function stripCalloutMarker(node: any): any {
  if (!node) return node;
  if (typeof node === 'string') {
    return node.replace(/\[\[CALLOUT:[a-z]+\]\]\s*/gi, '');
  }
  if (Array.isArray(node)) {
    return node.map(stripCalloutMarker);
  }
  if (typeof node === 'object' && node.props && node.props.children) {
    return {
      ...node,
      props: {
        ...node.props,
        children: stripCalloutMarker(node.props.children),
      },
    };
  }
  return node;
}

