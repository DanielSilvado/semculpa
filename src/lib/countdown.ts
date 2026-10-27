import { useEffect, useState } from 'react'

export type Countdown = { days: number; hours: number; minutes: number; seconds: number; done: boolean }

function remaining(target: number, now: number): Countdown {
  const ms = Math.max(0, target - now)
  const s = Math.floor(ms / 1000)
  return { days: Math.floor(s / 86_400), hours: Math.floor(s / 3600) % 24, minutes: Math.floor(s / 60) % 60, seconds: s % 60, done: ms === 0 }
}

/** Tempo que falta até `iso`, atualizado a cada segundo. */
export function useCountdown(iso: string): Countdown {
  const target = new Date(iso).getTime()
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return remaining(target, now)
}
