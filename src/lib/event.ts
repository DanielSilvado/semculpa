import { useEffect, useState } from 'react'
import { event } from '../content'

const TZ = 'America/Sao_Paulo'
const WEEKDAYS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const DAY_MS = 86_400_000

/** Data no calendário de Brasília, como 'AAAA-MM-DD'. */
function dateInBrasilia(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export type EventClock = {
  /** Preenche {dia}, {Dia}, {data}, {dataCurta}, {diaSemana} e {diaSemanaCurto} nos textos do content.ts. */
  fill: (text: string) => string
  isLive: boolean
}

export function describeEvent(now: Date): EventClock {
  const start = new Date(event.startsAt)
  const end = new Date(event.endsAt)
  const day = dateInBrasilia(start)
  const [y, m, d] = day.split('-').map(Number)
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]
  const dd = String(d).padStart(2, '0')
  const mm = String(m).padStart(2, '0')

  const today = dateInBrasilia(now)
  const tomorrow = dateInBrasilia(new Date(now.getTime() + DAY_MS))
  const relative = today === day ? 'hoje' : tomorrow === day ? 'amanhã' : `${weekday}, ${dd}/${mm}`

  const tokens: Record<string, string> = {
    dia: relative,
    Dia: capitalize(relative),
    data: `${dd}/${mm}/${y}`,
    dataCurta: `${dd}/${mm}`,
    diaSemana: capitalize(weekday === 'sábado' || weekday === 'domingo' ? weekday : `${weekday}-feira`),
    diaSemanaCurto: relative === 'hoje' || relative === 'amanhã' ? capitalize(relative) : capitalize(weekday),
  }

  return {
    fill: (text) => text.replace(/\{(dia|Dia|data|dataCurta|diaSemana|diaSemanaCurto)\}/g, (_, k: string) => tokens[k]),
    isLive: now >= start && now < end,
  }
}

/** Relógio do evento, atualizado a cada minuto (vira "hoje" à meia-noite com a página aberta). */
export function useEventClock(): EventClock {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    const onVisible = () => document.visibilityState === 'visible' && setNow(new Date())
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])
  return describeEvent(now)
}
