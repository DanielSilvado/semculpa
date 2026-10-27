import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { form } from '../content'
import { useEventClock } from '../lib/event'
import { LeadForm } from './LeadForm'

const OpenLeadModal = createContext<() => void>(() => {})

/** Abre a janela de cadastro (botões das seções de baixo). */
export const useOpenLeadModal = () => useContext(OpenLeadModal)

type Props = {
  children: ReactNode
  variant?: 'light' | 'dark'
  submitLabel?: string
}

export function LeadModalProvider({ children, variant = 'light', submitLabel }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const { fill } = useEventClock()
  const dark = variant === 'dark'

  const show = useCallback(() => {
    dialogRef.current?.showModal()
    setOpen(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <OpenLeadModal.Provider value={show}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="lead-modal-title"
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        className={
          dark
            ? 'm-auto w-[calc(100%-32px)] max-w-[460px] rounded-[22px] border border-gold-light/45 bg-gradient-to-b from-night-2 to-night p-0 text-[#dde5ea] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_-20px_rgba(213,185,135,0.45)] backdrop:bg-[#05090f]/80 backdrop:backdrop-blur-md'
            : 'm-auto w-[calc(100%-32px)] max-w-[460px] border-t-[3px] border-gold bg-cream p-0 text-ink backdrop:bg-navy/75 backdrop:backdrop-blur-sm'
        }
      >
        <div className={`relative px-6 pb-6 pt-8 ${dark ? 'text-center' : ''}`}>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar"
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none transition-colors ${
              dark ? 'bg-white/5 text-champagne hover:bg-white/10' : 'text-muted hover:bg-mint'
            }`}
          >
            ×
          </button>
          <h2 id="lead-modal-title" className={`px-6 text-[26px] ${dark ? 'text-champagne' : 'text-navy'}`}>
            {fill(form.modalTitle)}
          </h2>
          <p className="mb-5 mt-2 text-[15px] leading-relaxed">{form.modalText}</p>
          {open && <LeadForm autoFocus variant={variant} submitLabel={submitLabel} />}
        </div>
      </dialog>
    </OpenLeadModal.Provider>
  )
}
