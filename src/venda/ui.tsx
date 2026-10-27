import type { ReactNode } from 'react'
import { links, sale } from '../content'
import { useCountdown } from '../lib/countdown'
import { trackInitiateCheckout } from '../lib/pixel'
import { rich } from '../lib/rich'
import { Label, RouteStop } from '../captura/ui'

/** Botão dourado pulsante que desce até a oferta. */
export function OfferLink({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`moldura-botao w-full max-w-[540px] ${className}`}>
      <a href="#oferta" className="btn-ouro">
        <span>{label}</span>
      </a>
    </div>
  )
}

/**
 * Botão de compra. Sem link de pagamento configurado, leva ao grupo do
 * WhatsApp para a pessoa ser avisada da abertura.
 */
export function CheckoutButton({ className = '' }: { className?: string }) {
  const open = Boolean(sale.checkout)
  return (
    <div className={`moldura-botao w-full ${className}`}>
      <a
        href={sale.checkout ?? links.whatsappGroup}
        className="btn-ouro"
        rel="noopener"
        onClick={() => open && trackInitiateCheckout()}
      >
        <span>{open ? sale.offer.cta : sale.offer.ctaPending}</span>
      </a>
    </div>
  )
}

/** Parada da rota + rótulo + título de seção. */
export function SectionHead({
  n,
  stop,
  label,
  title,
  id,
  side = 'left',
  children,
}: {
  n: number
  stop: string
  label: string
  title: string
  id: string
  side?: 'left' | 'right'
  children?: ReactNode
}) {
  return (
    <>
      <RouteStop n={n} label={stop} side={side} />
      <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
        <div data-revelar>
          <Label>{label}</Label>
        </div>
        <h2 data-revelar id={id} className="mt-4 text-balance text-[clamp(27px,6vw,44px)] text-cream">
          {rich(title, { em: 'ouro italic' })}
        </h2>
        {children}
      </div>
    </>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Contagem regressiva até o início da imersão, em blocos tipo coordenada. */
export function CountdownBoxes({ compact = false }: { compact?: boolean }) {
  const t = useCountdown(sale.startsAt)
  const c = sale.countdown
  if (t.done) return <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#ff9a8f]">{c.live}</p>
  const parts = [t.days, t.hours, t.minutes, t.seconds]
  return (
    <div className="flex flex-col items-center gap-2.5">
      <p className="eyebrow text-mist">{c.label}</p>
      <div className="flex items-start gap-1.5 min-[400px]:gap-2.5" role="timer" aria-label={`${t.days} dias, ${t.hours} horas e ${t.minutes} minutos`}>
        {parts.map((v, i) => (
          <div key={c.units[i]} className="flex items-start gap-1.5 min-[400px]:gap-2.5">
            {i > 0 && (
              <span aria-hidden="true" className={`font-mono font-bold text-gold-light/60 ${compact ? 'pt-1.5 text-lg' : 'pt-2 text-2xl'}`}>
                :
              </span>
            )}
            <div className="flex flex-col items-center">
              <span
                className={`relogio-bloco font-mono font-bold tabular-nums text-champagne ${compact ? 'min-w-[46px] px-2 py-1.5 text-xl' : 'min-w-[58px] px-2.5 py-2 text-[28px] min-[900px]:min-w-[70px] min-[900px]:text-[34px]'}`}
              >
                {pad(v)}
              </span>
              <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-mist">{c.units[i]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
