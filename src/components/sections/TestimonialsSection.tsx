import { useState } from 'react'
import { testimonials } from '../../content'
import { rich } from '../../lib/rich'
import { Eyebrow } from '../ui'

export function TestimonialsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? testimonials.items : testimonials.items.slice(0, testimonials.initialVisible)
  const hasMore = testimonials.items.length > testimonials.initialVisible

  return (
    <section className="px-[22px] py-12 md:px-[30px] md:py-16" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[720px]">
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
          <h2 id="testimonials-title" className="mt-3.5 text-[31px] tracking-[-0.02em] text-navy md:text-[clamp(31px,3.5vw,45px)]">
            {rich(testimonials.title)}
          </h2>
        </div>
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {visible.map((t) => (
            <figure key={t.src} className="border border-line bg-white p-2">
              <img src={t.src} alt={t.alt} width={t.width} height={t.height} loading="lazy" decoding="async" className="h-auto w-full" />
            </figure>
          ))}
        </div>
        {hasMore && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="border-b border-teal pb-0.5 text-sm font-bold text-teal transition-colors hover:text-teal-dark"
            >
              {expanded ? testimonials.seeLess : testimonials.seeMore}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
