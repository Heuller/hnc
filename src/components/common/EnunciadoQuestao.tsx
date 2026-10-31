interface Props { item: string; contexto?: string; macroModuloId?: string }
/** Texto-base acompanha o item em todos os modos; nunca inclui gabarito antecipado. */
export function EnunciadoQuestao({ item, contexto, macroModuloId }: Props) {
  return <div className="space-y-4 text-ink" lang={macroModuloId?.toUpperCase() === 'M12' ? 'en' : undefined}>
    {contexto && <div className="whitespace-pre-line text-sm leading-relaxed pb-4" aria-label="Texto de apoio">{contexto}</div>}
    <p className="whitespace-pre-line font-serif-reading text-base leading-relaxed m-0 select-text">{item}</p>
  </div>;
}
