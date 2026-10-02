/**
 * Identifica se a plataforma do cliente é Apple/macOS
 */
export function isMacPlatform(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform 
    || navigator.platform 
    || navigator.userAgent 
    || '';
  return /Mac|iPhone|iPad|iPod/i.test(platform);
}

/**
 * Retorna o símbolo de tecla modificadora conforme o SO: "⌘" no macOS ou "Ctrl" no Windows/Linux
 */
export function getModifierKey(): string {
  return isMacPlatform() ? '⌘' : 'Ctrl';
}

/**
 * Retorna o rótulo completo de atalho de busca: "⌘K" no macOS ou "Ctrl K" no Windows/Linux
 */
export function getSearchShortcutLabel(): string {
  return isMacPlatform() ? '⌘K' : 'Ctrl K';
}
