import { beliefs, journey, mentor, pain, sale } from '../content'
import { rich } from '../lib/rich'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { OfferLink, SectionHead } from './ui'

const SECTION = 'relative z-[1] px-5 pb-16 pt-2 min-[900px]:pb-24 min-[900px]:pt-4'

/** 01 · Onde você está */
export function SalePain() {
  return (
    <section className={SECTION} aria-labelledby="venda-dor">
      <SectionHead n={1} stop={sale.stops.pain} label={pain.eyebrow} title={pain.title} id="venda-dor">
        {pain.paragraphs.map((p) => (
          <p key={p} data-revelar className="mt-5 max-w-[680px] text-pretty text-[16px] leading-relaxed">
            {p}
          </p>
        ))}
        <blockquote data-revelar className="citacao mt-8 max-w-[680px]">
          {pain.quote}
        </blockquote>
      </SectionHead>
      <ul data-revelar-filhos className="mx-auto mt-10 grid max-w-[1000px] gap-3 text-left min-[760px]:grid-cols-2">
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
    </section>
  )
}

/** 02 · No que eu acredito */
export function SaleBeliefs() {
  return (
    <section className={SECTION} aria-labelledby="venda-crencas">
      <SectionHead n={2} stop={sale.stops.beliefs} label={beliefs.eyebrow} title={beliefs.title} id="venda-crencas" side="right" />
      <ul data-revelar-filhos className="mx-auto mt-10 grid max-w-[1000px] gap-4 min-[900px]:grid-cols-3">
        {beliefs.items.map((b) => (
          <li key={b} className="vidro card-mapa relative rounded-2xl px-6 pb-6 pt-7 text-center">
            <svg viewBox="-12 -12 24 24" aria-hidden="true" className="mx-auto h-8 w-8 fill-gold-light drop-shadow-[0_0_8px_rgba(213,185,135,0.6)]">
              <path d="M0-12 2.2-2.2 12 0 2.2 2.2 0 12-2.2 2.2-12 0-2.2-2.2Z" />
            </svg>
            <p className="mt-3 font-serif text-[19px] leading-snug text-cream">{b}</p>
          </li>
        ))}
      </ul>
      <p data-revelar className="mx-auto mt-9 max-w-[720px] text-center text-[16px] leading-relaxed">
        {rich(sale.beliefsCommitment, { strong: 'font-semibold text-gold-light' })}
      </p>
    </section>
  )
}

/** 03 · O caminho: os três passos da imersão como paradas de uma trilha */
export function SalePath() {
  const p = sale.path
  return (
    <section className={SECTION} aria-labelledby="venda-caminho">
      <SectionHead n={3} stop={sale.stops.path} label={p.label} title={p.title} id="venda-caminho">
        <p data-revelar className="mt-5 max-w-[680px] text-pretty text-[16px] leading-relaxed">
          {p.intro}
        </p>
      </SectionHead>
      <div className="relative mx-auto mt-12 max-w-[760px]">
        <span aria-hidden="true" data-revelar="linha" className="trilha-vertical absolute bottom-10 left-[27px] top-6 min-[700px]:left-[35px]" />
        <ol data-revelar-filhos className="relative flex flex-col gap-6">
          {p.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 min-[700px]:gap-6">
              <span className="marco" aria-hidden="true">
                {i + 1}
              </span>
              <div className="vidro card-mapa flex-1 rounded-2xl p-5 min-[700px]:p-6">
                <h3 className="text-[21px] leading-snug text-cream min-[700px]:text-[23px]">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10 flex justify-center">
        <OfferLink label={p.cta} />
      </div>
    </section>
  )
}

/** 04 · O que você leva */
export function SaleKit() {
  const k = sale.kit
  return (
    <section className={SECTION} aria-labelledby="venda-kit">
      <SectionHead n={4} stop={sale.stops.kit} label={k.label} title={k.title} id="venda-kit" side="right" />
      <div className="mx-auto mt-10 grid max-w-[1080px] items-center gap-8 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-12">
        <figure data-revelar="zoom" className="kit-moldura">
          <img src={k.image} alt={k.imageAlt} width={800} height={610} loading="lazy" decoding="async" className="relative w-full" />
          <figcaption className="relative mt-2 text-center text-[11px] text-mist">{k.imageNote}</figcaption>
        </figure>
        <ol data-revelar-filhos className="flex flex-col gap-3">
          {k.items.map((it, i) => (
            <li key={it.title} className="vidro card-mapa flex gap-4 rounded-2xl p-5">
              <span className="font-mono text-[22px] font-bold leading-none text-gold-light">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-[15px] leading-relaxed">
                <strong className="block font-serif text-[19px] font-normal text-cream">{it.title}</strong>
                {it.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** 05 · Quem já fez esse caminho: a trajetória da Milena */
export function SaleJourney() {
  return (
    <section className={SECTION} aria-labelledby="venda-trajetoria">
      <SectionHead n={5} stop={sale.stops.journey} label={journey.eyebrow} title={journey.title} id="venda-trajetoria">
        {journey.paragraphs.map((p) => (
          <p key={p} data-revelar className="mt-5 max-w-[700px] text-pretty text-[16px] leading-relaxed">
            {rich(p, { strong: 'font-semibold text-gold-light' })}
          </p>
        ))}
      </SectionHead>
      <div className="relative mx-auto mt-12 max-w-[920px]">
        <span aria-hidden="true" data-revelar="linha-h" className="trilha-horizontal absolute left-[12%] right-[12%] top-[42%]" />
        <ul data-revelar-filhos className="relative grid grid-cols-3 items-end gap-2.5 min-[700px]:gap-6">
          {journey.photos.map((ph, i) => {
            const today = i === journey.photos.length - 1
            return (
              <li key={ph.src} className="flex flex-col items-center">
                <figure className={`foto-trajetoria ${today ? 'foto-hoje' : ''}`}>
                  <img src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} loading="lazy" decoding="async" />
                </figure>
                <span className={`alfinete mt-3 ${today ? 'alfinete-teal' : ''}`}>{ph.label}</span>
                <p className="mt-2 hidden text-center text-[13px] text-mist min-[700px]:block">{ph.caption}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <p data-revelar className="mx-auto mt-10 max-w-[680px] text-center font-serif text-[clamp(19px,4.6vw,24px)] leading-snug text-cream">
        {sale.journeyClosing}
      </p>
    </section>
  )
}

/** 06 · Quem já está caminhando: depoimentos */
export function SaleProof() {
  const c = sale.proof
  return (
    <section className={SECTION} aria-labelledby="venda-prova">
      <SectionHead n={6} stop={sale.stops.proof} label={c.label} title={c.title} id="venda-prova" side="right" />
      <div className="mx-auto flex max-w-[1100px] flex-col items-center">
        <TestimonialCarousel />
      </div>
      <div className="mt-10 flex justify-center">
        <OfferLink label={sale.cta} />
      </div>
    </section>
  )
}

/** 07 · Quem te guia */
export function SaleMentor() {
  const m = sale.mentor
  return (
    <section className={SECTION} aria-labelledby="venda-milena">
      <SectionHead n={7} stop={sale.stops.mentor} label={m.label} title={m.title} id="venda-milena" />
      <div className="mx-auto mt-10 grid max-w-[1100px] items-center gap-8 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-14">
        <div data-revelar="zoom" className="relative flex justify-center pb-6">
          <div aria-hidden="true" className="halo left-1/2 top-[48%] aspect-square w-[min(92%,460px)]" />
          <div className="arco aspect-[597/796] w-[min(78%,360px)]">
            <img src={m.photo} alt={m.photoAlt} width={597} height={796} loading="lazy" decoding="async" />
          </div>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold-light/50 bg-night/95 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-gold-light">
            {mentor.values.split(' · ').slice(0, 2).join(' · ')}
          </span>
        </div>
        <div data-revelar className="text-center [--atraso:0.12s] min-[900px]:text-left">
          <p className="font-serif text-[clamp(19px,4.6vw,23px)] italic leading-snug text-gold-light">{mentor.role}</p>
          {mentor.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-[15.5px] leading-relaxed">
              {rich(p, { strong: 'font-semibold text-cream' })}
            </p>
          ))}
          <p className="mt-4 text-[15.5px] leading-relaxed">{rich(m.closing, { strong: 'font-semibold text-gold-light' })}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 min-[900px]:justify-start">
            {mentor.values.split(' · ').map((v) => (
              <li key={v} className="vidro rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-champagne">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
