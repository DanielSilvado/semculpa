import { mentor } from '../../content'
import { rich } from '../../lib/rich'
import { Eyebrow } from '../ui'

export function MentorSection() {
  return (
    <section className="border-t border-line px-[22px] py-12 md:px-[30px] md:py-16" aria-labelledby="mentor-title">
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 md:grid-cols-[1fr_1.05fr] md:gap-16">
        <img
          src={mentor.photo}
          alt={mentor.photoAlt}
          width={796}
          height={796}
          loading="lazy"
          decoding="async"
          className="h-[440px] w-full object-cover object-[50%_30%] md:h-[530px]"
        />
        <div>
          <Eyebrow>{mentor.eyebrow}</Eyebrow>
          <h2 id="mentor-title" className="mb-5 mt-3.5 text-[31px] tracking-[-0.02em] text-navy md:text-[clamp(31px,3.5vw,45px)]">
            {mentor.title}
          </h2>
          <p className="my-3.5 font-bold text-teal">{mentor.role}</p>
          {mentor.paragraphs.map((p) => (
            <p key={p} className="my-3.5">
              {rich(p, { strong: 'font-bold text-teal' })}
            </p>
          ))}
          <p className="mt-5 border-t border-line pt-4 text-xs uppercase tracking-[0.08em] text-teal">{mentor.values}</p>
        </div>
      </div>
    </section>
  )
}
