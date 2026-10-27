import { capture } from '../content'
import { useEventClock } from '../lib/event'
import { rich } from '../lib/rich'
import { BrandMark } from '../components/BrandMark'
import { LeadForm } from '../components/LeadForm'
import { useHeroRoute } from '../lib/heroRoute'
import { CompassRose, Pin, Trail } from './ui'

/** Faixa fixa do topo. */
export function CaptureTopBar() {
  const { fill, isLive } = useEventClock()
  return (
    <div
      role="note"
      className="fixed inset-x-0 top-0 z-50 flex h-[38px] items-center justify-center gap-2.5 whitespace-nowrap border-b border-gold-light/45 bg-[linear-gradient(90deg,#173a3e,#326a69_50%,#173a3e)] px-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.8)] min-[400px]:text-xs"
    >
      <span className="ponto-vivo bg-white text-white/80" aria-hidden="true" />
      <span>{isLive ? 'Ao vivo agora' : capture.topBar}</span>
      {!isLive && (
        <>
          <span className="text-gold-light" aria-hidden="true">
            •
          </span>
          <b className="text-champagne">{fill('{dia}, às 20h')}</b>
        </>
      )}
    </div>
  )
}

/** Selo em formato de coordenada: ● AO VIVO ◆ 03.11 ◆ 20H00 · BRASÍLIA */
function Seal() {
  const { fill } = useEventClock()
  const s = capture.seal
  const diamond = <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rotate-45 bg-gold-light" />
  return (
    <div className="selo selo-coordenada entrada mt-3 [--atraso:0.12s] min-[900px]:mt-5" aria-live="polite">
      <span className="inline-flex items-center gap-2 text-[#ff9a8f]">
        <span className="ponto-vivo bg-[#ff6b5e] text-[#ff6b5e]/80" aria-hidden="true" />
        {s.live}
      </span>
      {diamond}
      <span>{fill('{dataCurta}').replace('/', '.')}</span>
      {diamond}
      <span className="text-gold-light">
        {s.time} <span className="text-mist">· {s.place}</span>
      </span>
    </div>
  )
}

export function CaptureHero() {
  const { fill } = useEventClock()
  const { area, pin, form, route } = useHeroRoute()
  const subtitle = rich(fill(capture.subtitle), { strong: 'font-bold text-gold-light' })
  return (
    <main
      ref={area}
      id="inscricao"
      className="relative z-[1] mx-auto flex min-h-[calc(100svh-38px)] w-full max-w-[1220px] flex-col items-center min-[900px]:flex-row-reverse min-[900px]:justify-between min-[900px]:gap-8 min-[900px]:px-10"
    >
      {route && (
        <Trail d={route.d} viewBox={`0 0 ${route.w} ${route.h}`} drawn className="trilha-topo pointer-events-none absolute inset-0 z-[1] h-full w-full" />
      )}

      {/* Bússola: a Milena no centro da rosa dos ventos */}
      <div className="relative mt-5 flex aspect-square w-[min(62vw,29svh)] shrink-0 items-center justify-center min-[900px]:mt-0 min-[900px]:w-[min(40vw,540px)] [@media(max-height:700px)_and_(max-width:899px)]:w-[min(50vw,24svh)]">
        <div aria-hidden="true" className="halo left-1/2 top-1/2 aspect-square w-[125%]" />
        <CompassRose className="entrada-rosa rosa-gira absolute inset-0 h-full w-full text-gold-light/70" />
        <div className="bussola-foto entrada-foto relative aspect-square w-[64%]">
          <img src={capture.photo} alt={capture.photoAlt} width={796} height={796} fetchPriority="high" decoding="async" />
        </div>
        <Pin ref={pin} className="entrada-alfinete absolute -right-[8%] bottom-[5%] z-[2] min-[900px]:-left-[5%] min-[900px]:right-auto min-[900px]:bottom-[11%]">
          {capture.pins.here}
        </Pin>
        <Pin tone="teal" className="entrada-alfinete absolute [--atraso:1.15s] right-[2%] top-[12%] z-[2] hidden min-[900px]:inline-flex">
          {fill(capture.pins.date)}
        </Pin>
      </div>

      {/* Texto e formulário */}
      <section className="relative z-[2] flex w-full max-w-[580px] flex-col items-center px-5 pb-6 text-center min-[900px]:flex-[1_1_54%] min-[900px]:items-start min-[900px]:px-0 min-[900px]:py-8 min-[900px]:text-left">
        <BrandMark tone="dark" className="entrada mt-3 w-[min(220px,62%)] drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)] min-[900px]:mt-0 min-[900px]:w-[300px]" />
        <Seal />
        <h1 className="mb-3 mt-4 text-balance text-[clamp(24px,6.6vw,31px)] leading-[1.12] text-cream [text-shadow:0_3px_24px_rgba(0,0,0,0.6)] min-[900px]:mb-4 min-[900px]:mt-6 min-[900px]:text-[clamp(32px,3.2vw,44px)] [@media(max-height:700px)_and_(max-width:899px)]:text-[22px]">
          {rich(capture.title, { em: 'ouro italic' })}
        </h1>
        <p className="entrada hidden max-w-[540px] [--atraso:0.2s] text-pretty text-[17px] leading-normal min-[900px]:block">{subtitle}</p>
        <div ref={form} className="entrada mt-1 [--atraso:0.28s] w-full max-w-[500px] min-[900px]:mt-6">
          <LeadForm
            variant="dark"
            submitLabel={capture.submit}
            note={rich(fill(capture.micro), { strong: 'font-semibold text-cream' })}
          />
        </div>
        {/* No celular, a promessa vem logo depois do botão para o formulário caber na primeira tela */}
        <p className="mt-5 max-w-[520px] text-pretty text-[15px] leading-normal min-[900px]:hidden">{subtitle}</p>
        <ul className="entrada mt-4 flex flex-wrap [--atraso:0.4s] items-center justify-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.14em] text-mist min-[900px]:mt-5 min-[900px]:justify-start min-[900px]:text-[11px]">
          {capture.badges.map((b, i) => (
            <li key={b} className={`flex items-center gap-3 ${i === 1 ? 'text-gold-light' : ''}`}>
              {i > 0 && <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-gold" />}
              {b}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
