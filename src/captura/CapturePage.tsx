import { LeadModalProvider } from '../components/LeadModal'
import { capture } from '../content'
import { CaptureHero, CaptureTopBar } from './CaptureHero'
import { CapturePain } from './CapturePain'
import { CaptureProof } from './CaptureProof'
import { CaptureFooter, CaptureMentor } from './CaptureMentor'
import { useRevealOnScroll } from '../lib/seen'
import { Particles } from './ui'

/** Página de captura de leads da aula gratuita (estilo "evento ao vivo"). */
export function CapturePage() {
  useRevealOnScroll()
  return (
    <LeadModalProvider variant="dark" submitLabel={capture.submit}>
      <div className="cap-page min-h-svh overflow-x-hidden pt-[38px]">
        <CaptureTopBar />
        <Particles />
        <CaptureHero />
        <CapturePain />
        <CaptureProof />
        <CaptureMentor />
        <CaptureFooter />
      </div>
    </LeadModalProvider>
  )
}
