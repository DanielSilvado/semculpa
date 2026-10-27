import { capture } from '../content'
import { useEventClock } from '../lib/event'
import { rich } from '../lib/rich'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { GoldCta, Label, RouteStop } from './ui'

export function CaptureProof() {
  const { fill } = useEventClock()
  const c = capture.proof
  return (
    <section className="relative z-[1] px-5 pb-14 pt-2 min-[900px]:pb-20 min-[900px]:pt-4" aria-labelledby="cap-proof-title">
      <RouteStop n={2} label={capture.stops.proof} side="right" />
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <div data-revelar>
          <Label>{c.label}</Label>
        </div>
        <h2 data-revelar id="cap-proof-title" className="mt-4 max-w-[820px] text-balance text-[clamp(26px,6vw,42px)] text-cream">
          {rich(c.title, { em: 'ouro italic' })}
        </h2>

        <TestimonialCarousel />

        <p data-revelar className="mt-9 max-w-[640px] text-[clamp(16px,4.2vw,19px)] font-semibold leading-normal text-cream">
          {rich(fill(c.closing), { strong: 'text-gold-light' })}
        </p>
        <GoldCta label={c.cta} className="mt-6" />
      </div>
    </section>
  )
}
