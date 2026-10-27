import { useEffect, useRef, useState } from 'react'

/**
 * Rota tracejada do alfinete "Você está aqui" até o botão (só no desktop).
 * As coordenadas são medidas na tela, então o traço acompanha o layout.
 */
export function useHeroRoute() {
  const area = useRef<HTMLElement>(null)
  const pin = useRef<HTMLSpanElement>(null)
  /** Envolve o botão de destino (o primeiro `.moldura-botao` dentro dele). */
  const form = useRef<HTMLDivElement>(null)
  const [route, setRoute] = useState<{ d: string; w: number; h: number } | null>(null)

  useEffect(() => {
    const root = area.current
    if (!root) return
    const measure = () => {
      const button = form.current?.querySelector('.moldura-botao')
      if (!pin.current || !button) return
      const box = root.getBoundingClientRect()
      // No celular não há margem lateral livre: a rota começaria por cima do texto
      if (box.width < 900) return setRoute(null)
      const p = pin.current.getBoundingClientRect()
      const b = button.getBoundingClientRect()
      // Sai da esquerda do alfinete e faz um S suave até a lateral do botão
      const sx = p.left - box.left - 6
      const sy = p.top + p.height / 2 - box.top
      const ex = b.right - box.left + 6
      const ey = b.top + b.height / 2 - box.top
      const mid = (sx - ex) / 2
      const d = `M${sx} ${sy}C${sx - mid} ${sy} ${ex + mid} ${ey} ${ex} ${ey}`
      setRoute({ d, w: box.width, h: box.height })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  return { area, pin, form, route }
}
