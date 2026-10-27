import { LeadModalProvider } from '../components/LeadModal'
import { TopBar } from '../components/sections/TopBar'
import { Hero } from '../components/sections/Hero'
import { Ribbon } from '../components/sections/Ribbon'
import { PainSection } from '../components/sections/PainSection'
import { BeliefsSection } from '../components/sections/BeliefsSection'
import { LearnSection } from '../components/sections/LearnSection'
import { JourneySection } from '../components/sections/JourneySection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { MentorSection } from '../components/sections/MentorSection'
import { FinalCta } from '../components/sections/FinalCta'
import { Footer } from '../components/sections/Footer'

/** Página longa (identidade clara da imersão), reservada para depois da aula. */
export function PosLivePage() {
  return (
    <LeadModalProvider>
      <TopBar />
      <main>
        <Hero />
        <Ribbon />
        <PainSection />
        <BeliefsSection />
        <LearnSection />
        <JourneySection />
        <TestimonialsSection />
        <MentorSection />
        <FinalCta />
      </main>
      <Footer />
    </LeadModalProvider>
  )
}
