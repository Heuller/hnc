declare module '*/auditoriaProveniencia.mjs' {
  export const REGEX_FORBIDDEN_INEDITA: RegExp;
  export interface ErroProveniencia {
    id: string;
    file: string;
    erro: string;
  }
  export interface StatsProveniencia {
    total: number;
    realConfirmada: number;
    adaptada: number;
    inedita: number;
    emConferencia: number;
    semTipo: number;
    byFile: Record<
      string,
      {
        total: number;
        realConfirmada: number;
        adaptada: number;
        inedita: number;
        emConferencia: number;
        erros: number;
      }
    >;
  }
  export interface ResultadoAuditoria {
    success: boolean;
    errors: ErroProveniencia[];
    stats: StatsProveniencia;
  }
  export function auditarProveniencia(options?: {
    dir?: string;
    corpusPath?: string;
    csvPath?: string;
  }): ResultadoAuditoria;
}
