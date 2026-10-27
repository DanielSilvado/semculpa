import { sale } from '../content'
import { useCountdown } from '../lib/countdown'
import { useHeroRoute } from '../lib/heroRoute'
import { rich } from '../lib/rich'
import { ImersaoMark } from '../components/BrandMark'
import { useWide } from '../lib/media'
import { CompassRose, MobilePhotoTop, Pin, Trail } from '../captura/ui'
import { CountdownBoxes, OfferLink } from './ui'

/** Faixa fixa do topo. */
export function SaleTopBar() {
  const { done } = useCountdown(sale.startsAt)
  return (
    <div
      role="note"
      className="fixed inset-x-0 top-0 z-50 flex h-[38px] items-center justify-center gap-2.5 whitespace-nowrap border-b border-gold-light/45 bg-[linear-gradient(90deg,#173a3e,#326a69_50%,#173a3e)] px-3 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.8)] min-[400px]:text-xs"
    >
      <span className="ponto-vivo bg-white text-white/80" aria-hidden="true" />
      <span>{done ? sale.countdown.live : sale.topBar.label}</span>
      {!done && (
        <>
          <span className="text-gold-light" aria-hidden="true">
            •
          </span>
          <b className="text-champagne">{sale.topBar.date}</b>
        </>
      )}
    </div>
  )
}

function Seal() {
  const s = sale.seal
  const diamond = <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rotate-45 bg-gold-light" />
  return (
    <div className="selo selo-coordenada entrada mt-3 [--atraso:0.12s] min-[900px]:mt-5">
      <span className="inline-flex items-center gap-2 text-[#ff9a8f]">
        <span className="ponto-vivo bg-[#ff6b5e] text-[#ff6b5e]/80" aria-hidden="true" />
        {s.live}
      </span>
      {diamond}
      <span>{s.date}</span>
      {diamond}
      <span className="text-gold-light">
        {s.time} <span className="text-mist">· {s.place}</span>
      </span>
    </div>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 fill-none stroke-gold-light stroke-[2.4] [stroke-linecap:round] [stroke-linejoin:round]">
      <circle cx="12" cy="12" r="10" className="stroke-gold-light/40 stroke-[1.4]" />
      <path d="m7.5 12.5 3 3 6-6.5" />
    </svg>
  )
}

export function SaleHero() {
  const { area, pin, form, route } = useHeroRoute()
  const wide = useWide()
  return (
    <>
      <main
        ref={area}
        id="inicio"
        className="relative z-[1] mx-auto flex min-h-[calc(100svh-38px)] w-full max-w-[1220px] flex-col items-center min-[900px]:flex-row-reverse min-[900px]:justify-between min-[900px]:gap-8 min-[900px]:px-10"
      >
        {route && (
          <Trail d={route.d} viewBox={`0 0 ${route.w} ${route.h}`} drawn className="trilha-topo pointer-events-none absolute inset-0 z-[1] h-full w-full" />
        )}

        {/* Celular: a Milena com a turma, de ponta a ponta. Desktop: a Milena no centro da bússola */}
        {!wide && <MobilePhotoTop src={sale.photoMobile} alt={sale.photoAlt} width={1080} height={977} position="50% 20%" />}
        {wide && (
          <div className="relative flex aspect-square w-[min(40vw,540px)] shrink-0 items-center justify-center">
            <div aria-hidden="true" className="halo left-1/2 top-1/2 aspect-square w-[125%]" />
            <CompassRose className="entrada-rosa rosa-gira absolute inset-0 h-full w-full text-gold-light/70" />
            <div className="bussola-foto entrada-foto relative aspect-square w-[64%]">
              <img src={sale.photo} alt={sale.photoAlt} width={900} height={900} fetchPriority="high" decoding="async" style={{ objectPosition: '50% 30%' }} />
            </div>
            <Pin ref={pin} className="entrada-alfinete absolute -left-[5%] bottom-[11%] z-[2]">
              {sale.pins.here}
            </Pin>
            <Pin tone="teal" className="entrada-alfinete absolute right-[2%] top-[12%] z-[2] [--atraso:1.15s]">
              {sale.pins.date}
            </Pin>
          </div>
        )}

        {/* Promessa e chamada */}
        <section className="relative z-[2] -mt-16 flex w-full max-w-[600px] flex-col items-center px-5 pb-10 text-center min-[900px]:mt-0 min-[900px]:flex-[1_1_54%] min-[900px]:items-start min-[900px]:px-0 min-[900px]:py-8 min-[900px]:text-left">
          <ImersaoMark className="entrada w-[190px] drop-shadow-[0_6px_22px_rgba(0,0,0,0.75)] min-[900px]:w-[300px]" />
          <Seal />
          <h1 className="mb-3 mt-4 text-balance text-[clamp(26px,7vw,33px)] leading-[1.12] text-cream [text-shadow:0_3px_24px_rgba(0,0,0,0.6)] min-[900px]:mb-4 min-[900px]:mt-6 min-[900px]:text-[clamp(34px,3.4vw,48px)]">
            {rich(sale.title, { em: 'ouro italic' })}
          </h1>
          <p className="entrada max-w-[540px] text-pretty text-[clamp(15px,4vw,17.5px)] leading-normal [--atraso:0.2s]">
            {rich(sale.subtitle, { strong: 'font-bold text-gold-light' })}
          </p>
          <div ref={form} className="entrada mt-6 w-full max-w-[500px] [--atraso:0.28s]">
            <OfferLink label={sale.cta} />
          </div>
          <ul className="entrada mt-5 flex flex-col gap-2 text-left text-[14px] leading-snug text-[#c9d3da] [--atraso:0.4s] min-[900px]:text-[15px]">
            {sale.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <Check />
                {h}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Faixa da contagem regressiva */}
      <div className="relative z-[1] border-y border-gold-light/25 bg-[linear-gradient(90deg,rgba(23,58,62,0.55),rgba(20,33,53,0.9)_50%,rgba(23,58,62,0.55))] px-4 py-6">
        <div data-revelar className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 min-[900px]:flex-row min-[900px]:justify-between">
          <CountdownBoxes />
          <p className="text-center font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-mist min-[900px]:text-right">
            11/11/2026 · Quarta-feira, às 20h (Brasília)
            <br />
            <span className="text-gold-light">Online e ao vivo</span>
          </p>
        </div>
      </div>
    </>
  )
}
