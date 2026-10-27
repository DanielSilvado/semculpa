import { beliefs } from '../../content'
import { Eyebrow } from '../ui'

export function BeliefsSection() {
  return (
    <section className="texture-light bg-navy px-[22px] py-12 text-cream md:px-[30px] md:py-16" aria-labelledby="beliefs-title">
      <div className="mx-auto max-w-[1120px]">
        <Eyebrow className="text-[#c1d8d1]">{beliefs.eyebrow}</Eyebrow>
        <h2 id="beliefs-title" className="mt-3.5 max-w-[620px] text-[31px] tracking-[-0.02em] md:text-[clamp(31px,3.5vw,45px)]">
          {beliefs.title}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-9">
          {beliefs.items.map((b) => (
            <p key={b} className="border-t border-white/20 pt-5 font-serif text-[22px] leading-snug">
              {b}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
