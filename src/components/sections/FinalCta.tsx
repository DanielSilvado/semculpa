import { finalCta } from '../../content'
import { useEventClock } from '../../lib/event'
import { rich } from '../../lib/rich'
import { CtaButton, Eyebrow } from '../ui'

export function FinalCta() {
  const { fill } = useEventClock()
  return (
    <section className="texture-light bg-navy px-[22px] py-12 text-cream md:px-[30px] md:py-16" aria-labelledby="final-title">
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 md:grid-cols-2 md:gap-[70px]">
        <div>
          <Eyebrow className="text-[#c6dcd5]">{finalCta.eyebrow}</Eyebrow>
          <h2 id="final-title" className="mb-5 mt-3.5 text-[37px] tracking-[-0.02em] md:text-[44px]">
            {rich(fill(finalCta.title), { em: 'italic text-gold-light' })}
          </h2>
          <p>{finalCta.text}</p>
        </div>
        <div className="border-t-[3px] border-gold bg-cream px-6 py-8 text-center text-ink md:px-9 md:py-9">
          <span className="inline-block rounded-[2px] bg-teal px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white">
            {finalCta.cardLabel}
          </span>
          <p className="mt-4 font-serif text-[56px] leading-tight text-navy md:text-[64px]">{fill(finalCta.cardDate)}</p>
          <p className="mb-6 text-sm">{fill(finalCta.cardDetail)}</p>
          <CtaButton label={finalCta.cta} className="sm:w-full" />
          {finalCta.bridge && <p className="mt-4 text-xs leading-relaxed text-muted">{finalCta.bridge}</p>}
        </div>
      </div>
    </section>
  )
}
