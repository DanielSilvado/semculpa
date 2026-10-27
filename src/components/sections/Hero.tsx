import { hero } from '../../content'
import { useEventClock } from '../../lib/event'
import { rich } from '../../lib/rich'
import { BrandMark } from '../BrandMark'
import { LeadForm } from '../LeadForm'

export function Hero() {
  const { fill } = useEventClock()
  return (
    <section
      id="inscricao"
      className="mx-auto grid max-w-[1120px] items-center gap-12 px-[22px] pb-14 pt-6 md:grid-cols-[1.08fr_1fr] md:gap-16 md:px-[30px] md:pb-16 md:pt-10"
    >
      <div>
        <BrandMark className="-ml-2 w-[230px] md:w-[290px]" />
        <p className="eyebrow mt-3 text-teal md:mt-5">{fill(hero.eyebrow)}</p>
        <h1 className="mb-3 mt-3 text-balance text-[33px] tracking-[-0.03em] text-navy md:mb-5 md:mt-4 md:text-[clamp(38px,4.2vw,54px)]">
          {rich(hero.title)}
        </h1>
        <p className="mb-5 text-pretty text-base leading-relaxed md:mb-7 md:text-lg">
          {rich(fill(hero.subtitle), { strong: 'font-bold text-navy' })}
        </p>
        <div className="max-w-[460px]">
          <LeadForm />
        </div>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
          {hero.badges.map((b, i) => (
            <li key={b} className="flex items-center gap-4">
              {i > 0 && (
                <span aria-hidden="true" className="text-gold">
                  ◆
                </span>
              )}
              {b}
            </li>
          ))}
        </ul>
      </div>

      <figure className="arch-photo isolate mx-auto w-full max-w-[460px] md:max-w-none">
        <img
          src={hero.photo}
          alt={hero.photoAlt}
          width={1200}
          height={800}
          fetchPriority="high"
          className="h-[420px] w-full object-cover object-[50%_44%] md:h-[600px]"
        />
        <figcaption className="absolute bottom-[38px] left-5 right-[37px] bg-cream px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-navy">
          {hero.photoCaption}
        </figcaption>
      </figure>
    </section>
  )
}
