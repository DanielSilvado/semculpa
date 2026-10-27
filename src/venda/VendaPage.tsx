import { useRevealOnScroll } from '../lib/seen'
import { Particles } from '../captura/ui'
import { SaleHero, SaleTopBar } from './SaleHero'
import { SaleBeliefs, SaleJourney, SaleKit, SaleMentor, SalePain, SalePath, SaleProof } from './SaleSections'
import { SaleFaq, SaleFooter, SaleOffer, SaleStickyBar } from './SaleOffer'

/** Página de venda da Imersão Posicione-se Sem Culpa: a rota do mapa até a oferta. */
export function VendaPage() {
  useRevealOnScroll()
  return (
    <div className="cap-page min-h-svh overflow-x-hidden pt-[38px]">
      <SaleTopBar />
      <Particles />
      <SaleHero />
      <SalePain />
      <SaleBeliefs />
      <SalePath />
      <SaleKit />
      <SaleJourney />
      <SaleProof />
      <SaleMentor />
      <SaleOffer />
      <SaleFaq />
      <SaleFooter />
      <SaleStickyBar />
    </div>
  )
}
