import { learn } from '../../content'
import { rich } from '../../lib/rich'
import { CtaButton, Eyebrow } from '../ui'

export function LearnSection() {
  return (
    <section className="px-[22px] py-12 md:px-[30px] md:py-16" aria-labelledby="learn-title">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[720px]">
          <Eyebrow>{learn.eyebrow}</Eyebrow>
          <h2 id="learn-title" className="mb-5 mt-3.5 text-[31px] tracking-[-0.02em] text-navy md:text-[clamp(31px,3.5vw,45px)]">
            {rich(learn.title)}
          </h2>
          <p>{learn.intro}</p>
        </div>
        <ol className="mt-8">
          {learn.steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[46px_1fr] gap-4 border-t border-line py-6">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-gold font-serif text-[22px] text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-2 text-2xl text-navy">{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="border-t border-line pt-8">
          <CtaButton label={learn.cta} />
        </div>
      </div>
    </section>
  )
}
