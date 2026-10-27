import { topBar } from '../../content'
import { useEventClock } from '../../lib/event'

/** Faixa fixa no topo com a data da aula ("hoje", "amanhã" ou o dia). */
export function TopBar() {
  const { fill, isLive } = useEventClock()
  return (
    <div className="sticky top-0 z-40 flex h-10 items-center justify-center gap-2.5 bg-navy px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-light" />
      </span>
      {isLive ? (
        <span>{topBar.live}</span>
      ) : (
        <>
          <span>{topBar.label}</span>
          <span className="text-gold-light" aria-hidden="true">
            •
          </span>
          <span className="text-gold-light">{fill('{dia}, às 20h')}</span>
        </>
      )}
    </div>
  )
}
