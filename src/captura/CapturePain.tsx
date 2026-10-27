import { capture, pain } from '../content'
import { useEventClock } from '../lib/event'
import { rich } from '../lib/rich'
import { GoldCta, Label, RouteStop } from './ui'

export function CapturePain() {
  const { fill } = useEventClock()
  const c = capture.pain
  return (
    <section
      className="relative z-[1] bg-[linear-gradient(180deg,transparent,rgba(20,33,53,0.92)_12%,rgba(20,33,53,0.92)_88%,transparent)] px-5 pb-14 pt-2 min-[900px]:pb-20 min-[900px]:pt-4"
      aria-labelledby="cap-pain-title"
    >
      <RouteStop n={1} label={capture.stops.pain} />
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <div data-revelar>
          <Label>{c.label}</Label>
        </div>
        <h2 data-revelar id="cap-pain-title" className="mt-4 max-w-[820px] text-balance text-[clamp(26px,6vw,42px)] text-cream">
          {rich(c.title, { em: 'ouro italic' })}
        </h2>
        <ul data-revelar-filhos className="mt-9 grid w-full gap-3 text-left min-[760px]:grid-cols-2">
          {pain.items.map((item, i) => (
            <li
              key={item.title}
              className={`vidro card-mapa flex gap-4 rounded-2xl p-5 ${i === pain.items.length - 1 && pain.items.length % 2 === 1 ? 'min-[760px]:col-span-2' : ''}`}
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-lg leading-none text-gold-light"
              >
                ×
              </span>
              <p className="text-[15px] leading-relaxed">
                <strong className="block font-serif text-lg font-normal text-cream">{item.title}</strong>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p data-revelar className="mt-9 max-w-[640px] text-[clamp(16px,4.2vw,19px)] font-semibold leading-normal text-cream">
          {rich(fill(c.closing), { strong: 'text-gold-light' })}
        </p>
        <GoldCta label={c.cta} className="mt-6" />
      </div>
    </section>
  )
}
