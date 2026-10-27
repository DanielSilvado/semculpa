import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { form, links } from '../content'
import { isValidPhone, maskPhone, normalizePhone } from '../lib/phone'
import { loadSavedLead, newEventId, readOrigin, saveLead, sendLead } from '../lib/lead'
import { trackLead } from '../lib/pixel'

/** O cadastro nunca segura a pessoa por mais que isso antes de abrir o grupo. */
const MAX_WAIT_MS = 2500
/** Tempo mínimo para o evento Lead do pixel sair antes de trocar de página. */
const MIN_WAIT_MS = 600

const wait = (ms: number) => new Promise((r) => window.setTimeout(r, ms))

type Props = {
  autoFocus?: boolean
  /** "dark" = página de captura (campos escuros e botão dourado pulsante). */
  variant?: 'light' | 'dark'
  submitLabel?: string
  /** Texto curto abaixo do botão; sem ele, aparece o aviso padrão do grupo. */
  note?: ReactNode
}

export function LeadForm({ autoFocus = false, variant = 'light', submitLabel = form.submit, note }: Props) {
  const dark = variant === 'dark'
  const id = useId()
  const [saved] = useState(loadSavedLead)
  const [name, setName] = useState(saved?.nome ?? '')
  const [phone, setPhone] = useState(saved?.whatsapp ?? '')
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState<'name' | 'phone' | null>(null)
  const [sending, setSending] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  // Quem volta do WhatsApp para a página encontra o botão destravado
  useEffect(() => {
    const unlock = () => setSending(false)
    const onShow = (e: PageTransitionEvent) => e.persisted && unlock()
    const onVisible = () => document.visibilityState === 'visible' && unlock()
    window.addEventListener('pageshow', onShow)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.removeEventListener('pageshow', onShow)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  useEffect(() => {
    if (!autoFocus) return
    ;(saved?.nome ? phoneRef : nameRef).current?.focus()
  }, [autoFocus, saved])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (sending) return
    const cleanName = name.replace(/\s+/g, ' ').trim()
    if (cleanName.length < 2) {
      setError('name')
      nameRef.current?.focus()
      return
    }
    if (!isValidPhone(phone)) {
      setError('phone')
      phoneRef.current?.focus()
      return
    }
    setError(null)
    setSending(true)
    saveLead({ nome: cleanName, whatsapp: phone })

    const eventId = newEventId()
    trackLead(eventId)
    const delivery = honeypot
      ? Promise.resolve()
      : sendLead({
          nome: cleanName,
          whatsapp: normalizePhone(phone),
          whatsappDigitado: phone,
          origem: readOrigin(),
          pagina: window.location.origin + window.location.pathname,
          eventId,
        }).catch(() => {})
    await Promise.race([Promise.all([delivery, wait(MIN_WAIT_MS)]), wait(MAX_WAIT_MS)])
    window.location.href = links.whatsappGroup
  }

  const errorText = error ? form.errors[error] : ''
  const fieldClass = dark ? 'field-dark' : 'field'

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-2.5 text-left">
      <label htmlFor={`${id}-name`} className="sr-only">
        {form.namePlaceholder}
      </label>
      <input
        ref={nameRef}
        id={`${id}-name`}
        className={fieldClass}
        type="text"
        name="nome"
        placeholder={form.namePlaceholder}
        autoComplete="given-name"
        maxLength={80}
        required
        value={name}
        aria-invalid={error === 'name'}
        aria-describedby={`${id}-error`}
        onChange={(e) => {
          setName(e.target.value)
          if (error === 'name') setError(null)
        }}
      />
      <label htmlFor={`${id}-phone`} className="sr-only">
        {form.phonePlaceholder}
      </label>
      <input
        ref={phoneRef}
        id={`${id}-phone`}
        className={fieldClass}
        type="tel"
        name="whatsapp"
        inputMode="tel"
        placeholder={form.phonePlaceholder}
        autoComplete="tel-national"
        maxLength={20}
        required
        value={phone}
        aria-invalid={error === 'phone'}
        aria-describedby={`${id}-error`}
        onChange={(e) => {
          setPhone(maskPhone(e.target.value))
          if (error === 'phone') setError(null)
        }}
      />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <p
        id={`${id}-error`}
        role="alert"
        className={`text-sm leading-snug empty:hidden ${dark ? 'text-center text-[#ffb3aa]' : 'text-error'}`}
      >
        {errorText}
      </p>
      {dark ? (
        <div className="moldura-botao mt-1">
          <button type="submit" className="btn-ouro" disabled={sending}>
            <span>{sending ? form.sending : submitLabel}</span>
          </button>
        </div>
      ) : (
        <button type="submit" className="btn-teal mt-1 sm:w-full" disabled={sending}>
          {sending ? form.sending : submitLabel}
          {!sending && <span aria-hidden="true" className="text-xl font-normal">↗</span>}
        </button>
      )}
      <p className={`text-xs leading-relaxed ${dark ? 'text-center text-mist' : 'text-muted'}`}>
        {note ?? form.note}
        <br />
        {form.privacy}
      </p>
    </form>
  )
}
