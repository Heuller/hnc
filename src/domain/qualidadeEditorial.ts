/** Sinais de revisão; nenhum destes testes comprova verdade conceitual. */
export function comentarioGenerico(texto: string): boolean {
  return /expressa o preceito técnico aplicável|conteúdo encontra-se plenamente alinhado|enunciar com exatidão que/i.test(texto);
}
export function contrasteArtificial(texto?: string): boolean {
  return !!texto && /\bindevidamente\b/i.test(texto);
}
