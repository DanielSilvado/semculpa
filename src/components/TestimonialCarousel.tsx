import { useEffect, useRef } from 'react'
import { testimonials } from '../content'

/** Prints curtos (uma linha de comentário) ficam fora do carrossel. */
const isComment = (t: { width: number; height: number }) => t.height / t.width < 0.45
const AUTO_MS = 3800
const PAUSE_AFTER_TOUCH_MS = 8000

function Arrow({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-night stroke-[3] [stroke-linecap:round] [stroke-linejoin:round]">
      <path d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

/** Carrossel de prints que anda sozinho, com os comentários curtos logo abaixo (versão escura). */
export function TestimonialCarousel() {
  const prints = testimonials.items.filter((t) => !isComment(t))
  const comments = testimonials.items.filter(isComment)
  const track = useRef<HTMLDivElement>(null)
  const pausedUntil = useRef(0)

  function step(dir: 1 | -1) {
    const el = track.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    const width = card.offsetWidth + 16
    if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: dir * width, behavior: 'smooth' })
  }

  const pause = () => {
    pausedUntil.current = Date.now() + PAUSE_AFTER_TOUCH_MS
  }

  // Anda sozinho só quando está na tela e ninguém está mexendo
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = track.current
    if (!el) return
    let visible = false
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    const id = window.setInterval(() => {
      if (visible && !document.hidden && Date.now() > pausedUntil.current) step(1)
    }, AUTO_MS)
    return () => {
      io.disconnect()
      window.clearInterval(id)
    }
  }, [])

  return (
    <>
      <div data-revelar className="relative -mx-5 mt-9 w-[calc(100%+40px)] min-[900px]:mx-0 min-[900px]:w-full" role="region" aria-roledescription="carrossel" aria-label="Depoimentos de alunas">
        <div
          ref={track}
          onPointerDown={pause}
          onMouseEnter={pause}
          onFocus={pause}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(20px,calc(50%-150px))] pb-3 pt-1 [scrollbar-width:none] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] min-[900px]:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {prints.map((t) => (
            <figure
              key={t.src}
              className="flex h-[380px] w-[min(76vw,300px)] shrink-0 snap-center items-center justify-center overflow-hidden rounded-2xl border border-gold-light/35 bg-white p-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)]"
            >
              <img src={t.src} alt={t.alt} width={t.width} height={t.height} loading="lazy" decoding="async" className="max-h-full w-full object-contain" />
            </figure>
          ))}
        </div>
        {/* No celular as setas ficam abaixo dos prints; no computador, nas laterais */}
        <div className="mt-4 flex justify-center gap-4 min-[900px]:contents">
          <button type="button" className="seta-ouro min-[900px]:-left-2" aria-label="Depoimento anterior" onClick={() => (pause(), step(-1))}>
            <Arrow dir="prev" />
          </button>
          <button type="button" className="seta-ouro min-[900px]:-right-2" aria-label="Próximo depoimento" onClick={() => (pause(), step(1))}>
            <Arrow dir="next" />
          </button>
        </div>
      </div>

      {comments.length > 0 && (
        <ul data-revelar-filhos className="mt-6 grid w-full max-w-[920px] gap-3 min-[760px]:grid-cols-2">
          {comments.map((t) => (
            <li key={t.src} className="flex items-center rounded-xl border border-gold-light/25 bg-white px-3 py-2">
              <img src={t.src} alt={t.alt} width={t.width} height={t.height} loading="lazy" decoding="async" className="h-auto w-full" />
            </li>
          ))}
        </ul>
      )}

    </>
  )
}
