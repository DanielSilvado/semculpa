import { useEffect, useState } from 'react'

const WIDE = '(min-width: 900px)'

/** `true` em telas de computador (mesmo ponto de quebra das páginas). */
export function useWide(): boolean {
  const [wide, setWide] = useState(() => window.matchMedia(WIDE).matches)
  useEffect(() => {
    const mq = window.matchMedia(WIDE)
    const onChange = () => setWide(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return wide
}
