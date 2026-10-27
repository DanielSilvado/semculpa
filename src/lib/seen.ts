import { useEffect, useRef, useState } from 'react'

/** Marca `true` quando o elemento entra na tela (uma vez só). */
export function useSeen<T extends Element>(threshold = 0.4) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen] as const
}

/**
 * Revela, ao entrar na tela, os elementos com `data-revelar` e os filhos de
 * `data-revelar-filhos` (estes em sequência, um pouco depois do outro).
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-revelar], [data-revelar-filhos]')
    targets.forEach((el) => {
      if (!el.hasAttribute('data-revelar-filhos')) return
      Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--atraso', `${Math.min(i, 6) * 0.08}s`))
    })
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('visivel')
          io.unobserve(e.target)
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
