import { tracking } from '../content'

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue: unknown[]; loaded: boolean; version: string; push: unknown }

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
  }
}

/** Carrega o Meta Pixel e registra o PageView. Sem ID configurado, não faz nada. */
export function initPixel(): void {
  const id = tracking.metaPixelId
  if (!id || window.fbq) return
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  } as Fbq
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  window.fbq = fbq
  window._fbq = fbq
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(s)
  fbq('init', id)
  fbq('track', 'PageView')
}

/** Evento Lead sem dado pessoal; o eventID permite deduplicar com a Conversions API no futuro. */
export function trackLead(eventId: string): void {
  window.fbq?.('track', 'Lead', {}, { eventID: eventId })
}

/** Clique em um botão de compra (antes de sair para o checkout). */
export function trackInitiateCheckout(): void {
  window.fbq?.('track', 'InitiateCheckout')
}
