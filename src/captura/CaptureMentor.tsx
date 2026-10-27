import { capture, footer } from '../content'
import { useEventClock } from '../lib/event'
import { rich } from '../lib/rich'
import { BrandMark } from '../components/BrandMark'
import { useSeen } from '../lib/seen'
import { GoldCta, RouteStop, ShortTrail } from './ui'

export function CaptureMentor() {
  const { fill } = useEventClock()
  const m = capture.mentor
  return (
    <section
      className="relative z-[1] border-t border-gold-light/15 bg-[linear-gradient(180deg,transparent,rgba(20,33,53,0.92)_12%,rgba(20,33,53,0.92)_88%,transparent)] px-5 pb-14 pt-2 min-[900px]:pb-20 min-[900px]:pt-4"
      aria-labelledby="cap-mentor-title"
    >
      <RouteStop n={3} label={capture.stops.mentor} />
      <div className="mx-auto grid max-w-[1100px] items-center gap-6 min-[900px]:grid-cols-[1fr_1.1fr] min-[900px]:gap-14">
        <div data-revelar="zoom" className="relative flex justify-center pb-6">
          <div aria-hidden="true" className="halo left-1/2 top-[48%] aspect-square w-[min(92%,460px)]" />
          <div className="arco aspect-[4/5] w-[min(84%,400px)]">
            <img src={m.photo} alt={m.photoAlt} width={880} height={1100} loading="lazy" decoding="async" />
          </div>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold-light/50 bg-night/95 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gold-light max-[360px]:text-[9px]">
            {m.tag}
          </span>
        </div>

        <div data-revelar className="text-center min-[900px]:text-left [--atraso:0.12s]">
          <p className="eyebrow text-gold-light">{m.label}</p>
          <h2 id="cap-mentor-title" className="mt-3.5 text-[clamp(28px,6vw,42px)] text-cream">
            {rich(m.title, { em: 'ouro italic' })}
          </h2>
          <p className="mt-4 font-serif text-[clamp(18px,4.4vw,21px)] italic leading-snug text-gold-light">{m.lead}</p>
          {m.paragraphs.map((p) => (
            <p key={p} className="mt-3.5 text-[15.5px] leading-relaxed">
              {rich(p, { strong: 'font-semibold text-gold-light' })}
            </p>
          ))}
          <ul data-revelar-filhos className="mt-6 flex flex-wrap justify-center gap-2 min-[900px]:justify-start">
            {m.values.map((v) => (
              <li key={v} className="vidro rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-champagne">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Destination />
      <div className="mt-8 flex flex-col items-center">
        <GoldCta label={m.cta} />
        <p className="mt-3 text-sm text-mist">{rich(fill(m.ctaNote), { strong: 'font-semibold text-gold-light' })}</p>
      </div>
    </section>
  )
}

/** Fim da rota: a marca de destino com a frase de transformação. */
function Destination() {
  const { fill } = useEventClock()
  const [ref, seen] = useSeen<HTMLDivElement>()
  const d = capture.destination
  return (
    <div ref={ref} className="mx-auto mt-6 flex max-w-[700px] flex-col items-center text-center">
      <ShortTrail drawn={seen} className="mb-3" />
      <div className="destino" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.6] [stroke-linecap:round]">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </div>
      <p data-revelar className="eyebrow mt-4 font-mono text-gold-light">{fill(d.label)}</p>
      <p data-revelar className="mt-3 text-balance font-serif [--atraso:0.1s] text-[clamp(20px,5vw,27px)] leading-snug text-cream">
        {rich(d.text, { em: 'ouro italic' })}
      </p>
    </div>
  )
}

export function CaptureFooter() {
  return (
    <footer className="relative z-[1] border-t border-gold-light/10 px-5 pb-10 pt-7 text-center text-xs leading-relaxed text-mist">
      <BrandMark tone="dark" className="mx-auto mb-3 w-[180px] opacity-80" />
      <p>{footer.line}</p>
      <p className="mx-auto mt-1.5 max-w-[520px]">{footer.disclaimer}</p>
      <p className="mt-1.5">{footer.copyright}</p>
    </footer>
  )
}
