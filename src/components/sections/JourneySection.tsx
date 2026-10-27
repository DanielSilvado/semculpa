import { journey } from '../../content'
import { rich } from '../../lib/rich'
import { Eyebrow } from '../ui'

export function JourneySection() {
  const last = journey.photos.length - 1
  return (
    <section className="texture-light bg-sand px-[22px] py-12 md:px-[30px] md:py-16" aria-labelledby="journey-title">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[720px]">
          <Eyebrow>{journey.eyebrow}</Eyebrow>
          <h2 id="journey-title" className="mb-5 mt-3.5 text-[31px] tracking-[-0.02em] text-navy md:text-[clamp(31px,3.5vw,45px)]">
            {rich(journey.title)}
          </h2>
          {journey.paragraphs.map((p) => (
            <p key={p} className="mb-4">
              {rich(p, { strong: 'font-bold text-navy' })}
            </p>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-[1fr_1fr_1.12fr] md:gap-[18px]">
          {journey.photos.map((photo, i) => (
            <figure key={photo.src} className={i === last ? 'col-span-2 mx-auto w-full max-w-[420px] md:col-span-1 md:max-w-none' : ''}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover ${i === last ? 'h-[400px] object-[50%_40%] md:h-[365px]' : 'h-[235px] md:h-[365px]'}`}
              />
              <figcaption className="bg-cream px-4 py-3 text-xs leading-snug">
                <strong className="block text-[10px] uppercase tracking-[0.2em] text-teal">{photo.label}</strong>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
