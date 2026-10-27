import { useEffect, useState } from 'react'
import { footer, links, sale } from '../content'
import { rich } from '../lib/rich'
import { useSeen } from '../lib/seen'
import { ImersaoMark } from '../components/BrandMark'
import { Label, ShortTrail } from '../captura/ui'
import { CheckoutButton, CountdownBoxes } from './ui'

function Tick() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-gold-light stroke-[2.4] [stroke-linecap:round] [stroke-linejoin:round]">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

/** Destino da rota: a oferta. */
export function SaleOffer() {
  const o = sale.offer
  const [ref, seen] = useSeen<HTMLDivElement>()
  return (
    <section id="oferta" className="relative z-[1] scroll-mt-12 px-5 pb-16 pt-2 min-[900px]:pb-24" aria-labelledby="venda-oferta">
      <div ref={ref} className="flex flex-col items-center">
        <ShortTrail drawn={seen} className="mb-3" />
        <div className="destino" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.6] [stroke-linecap:round]">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </div>
        <p className="eyebrow mt-4 font-mono text-gold-light">{o.label}</p>
      </div>

      <div data-revelar="zoom" className="cartao-oferta mx-auto mt-8 grid max-w-[1040px] overflow-hidden min-[900px]:grid-cols-[1.15fr_1fr]">
        {/* O que está incluído */}
        <div className="p-6 min-[600px]:p-9">
          <ImersaoMark className="w-[220px]" />
          <h2 id="venda-oferta" className="mt-6 text-balance text-[clamp(26px,5.6vw,36px)] text-cream">
            {rich(o.title, { em: 'ouro italic' })}
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed">{o.text}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {o.includes.map((it) => (
              <li key={it} className="flex gap-3 text-[15px] leading-snug text-cream">
                <Tick />
                {it}
              </li>
            ))}
          </ul>
        </div>

        {/* Preço e compra */}
        <div className="painel-preco flex flex-col items-center p-6 text-center min-[600px]:p-9">
          <p className="eyebrow text-gold-light">{o.price.label}</p>
          <p className="mt-3 flex items-start justify-center font-serif leading-none text-champagne">
            <span className="mt-3 text-2xl">R$</span>
            <span className="ouro px-1 text-[clamp(76px,20vw,104px)] not-italic">{o.price.value}</span>
          </p>
          <p className="mt-1 text-sm text-mist">{o.price.note}</p>
          <p className="mt-4 rounded-full border border-gold-light/25 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-mist">
            {o.nextPrice.label}: <span className="text-cream">{o.nextPrice.value}</span>
          </p>
          <CheckoutButton className="mt-7" />
          {!sale.checkout && <p className="mt-3 text-[13px] leading-snug text-champagne">{o.pendingNote}</p>}
          <p className="mt-4 text-[12.5px] leading-relaxed text-mist">{o.fineprint}</p>
          <div className="mt-7 w-full border-t border-gold-light/15 pt-6">
            <CountdownBoxes compact />
          </div>
          <a href={links.whatsappGroup} rel="noopener" className="mt-6 text-[13px] text-mist underline decoration-gold-light/40 underline-offset-4 hover:text-cream">
            {o.help}
          </a>
        </div>
      </div>
    </section>
  )
}

export function SaleFaq() {
  const f = sale.faq
  return (
    <section className="relative z-[1] px-5 pb-16 min-[900px]:pb-24" aria-labelledby="venda-faq">
      <div className="mx-auto max-w-[760px]">
        <div data-revelar className="text-center">
          <Label>{f.label}</Label>
          <h2 id="venda-faq" className="mt-4 text-[clamp(27px,6vw,40px)] text-cream">
            {rich(f.title, { em: 'ouro italic' })}
          </h2>
        </div>
        <div data-revelar-filhos className="mt-9 flex flex-col gap-3">
          {f.items.map((it) => (
            <details key={it.q} className="pergunta vidro rounded-2xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-[18px] leading-snug text-cream [&::-webkit-details-marker]:hidden">
                {it.q}
                <span aria-hidden="true" className="pergunta-icone">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-[15px] leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SaleFooter() {
  return (
    <footer className="relative z-[1] border-t border-gold-light/10 px-5 pb-28 pt-8 text-center text-xs leading-relaxed text-mist min-[900px]:pb-10">
      <ImersaoMark className="mx-auto mb-3 w-[190px] opacity-80" />
      <p>{footer.line}</p>
      <p className="mx-auto mt-1.5 max-w-[520px]">{sale.disclaimer}</p>
      <p className="mt-1.5">{footer.copyright}</p>
    </footer>
  )
}

/** Barra fixa no celular: aparece depois da primeira tela e some quando a oferta está visível. */
export function SaleStickyBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('inicio')
    const offer = document.getElementById('oferta')
    if (!hero || !offer) return
    let pastHero = false
    let atOffer = false
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0
        if (e.target === offer) atOffer = e.isIntersecting
      }
      setShow(pastHero && !atOffer)
    })
    io.observe(hero)
    io.observe(offer)
    return () => io.disconnect()
  }, [])
  return (
    <div className={`barra-fixa min-[900px]:hidden ${show ? 'barra-visivel' : ''}`} aria-hidden={!show}>
      <div className="leading-tight">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-mist">{sale.offer.price.label}</p>
        <p className="font-serif text-[22px] text-champagne">{sale.stickyBar.price}</p>
      </div>
      <a href="#oferta" tabIndex={show ? 0 : -1} className="btn-ouro !w-auto !px-5 !py-3.5 !text-[13px]">
        <span>{sale.stickyBar.label}</span>
      </a>
    </div>
  )
}
