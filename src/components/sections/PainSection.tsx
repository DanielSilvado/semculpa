import { pain } from '../../content'
import { rich } from '../../lib/rich'
import { Eyebrow } from '../ui'

export function PainSection() {
  return (
    <section className="texture-light bg-mint px-[22px] py-12 md:px-[30px] md:py-16" aria-labelledby="pain-title">
      <div className="mx-auto grid max-w-[1120px] items-start gap-8 md:grid-cols-[1fr_1.05fr] md:gap-16">
        <div>
          <Eyebrow>{pain.eyebrow}</Eyebrow>
          <h2 id="pain-title" className="mb-5 mt-3.5 text-[31px] tracking-[-0.02em] text-navy md:text-[clamp(31px,3.5vw,45px)]">
            {rich(pain.title)}
          </h2>
          {pain.paragraphs.map((p) => (
            <p key={p} className="mb-4">
              {p}
            </p>
          ))}
          <p className="mt-7 border-l-2 border-gold pl-5 font-serif text-[22px] leading-normal text-teal md:text-2xl">{pain.quote}</p>
        </div>
        <ul>
          {pain.items.map((item) => (
            <li key={item.title} className="relative border-b border-[#bdceca] py-4 pl-8 first:pt-0">
              <span aria-hidden="true" className="absolute left-0 top-3.5 text-[26px] leading-none text-[#986f48] [li:first-child>&]:top-0">
                ×
              </span>
              <strong className="text-navy">{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
