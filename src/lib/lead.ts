import { links } from '../content'

const STORAGE_KEY = 'mapa_posicionamento_cadastro'
const ORIGIN_PARAMS = /^(utm_[a-z]+|fbclid|gclid|src|ref)$/

export type SavedLead = { nome: string; whatsapp: string }

/** Parâmetros do anúncio (utm, fbclid...) presentes na URL de chegada. */
export function readOrigin(): Record<string, string> {
  const origin: Record<string, string> = {}
  try {
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (ORIGIN_PARAMS.test(k)) origin[k] = v.slice(0, 200)
    })
  } catch {
    /* URL inválida: segue sem origem */
  }
  return origin
}

export function loadSavedLead(): SavedLead | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as SavedLead) : null
  } catch {
    return null
  }
}

export function saveLead(lead: SavedLead): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lead))
  } catch {
    /* modo anônimo sem storage */
  }
}

/**
 * Envia o cadastro para o Apps Script. O Apps Script não responde com CORS,
 * então o envio é "no-cors" (sem leitura da resposta) e keepalive, para
 * terminar mesmo depois que a página abre o WhatsApp.
 */
export async function sendLead(payload: Record<string, unknown>): Promise<void> {
  if (!links.leadWebhook) return
  await fetch(links.leadWebhook, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify(payload),
  })
}

export function newEventId(): string {
  return `lead-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}
