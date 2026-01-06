import { NeuroGridHero } from "@/polymet/components/neurogrid-hero"
import { NeuroGridBackedBy } from "@/polymet/components/neurogrid-backed-by"
import { NeuroGridHowItWorks } from "@/polymet/components/neurogrid-how-it-works"
import { NeuroGridUseCases } from "@/polymet/components/neurogrid-use-cases"
import { NeuroGridWhyChoose } from "@/polymet/components/neurogrid-why-choose"
import { NeuroGridCTA } from "@/polymet/components/neurogrid-cta"

export function NeuroGridLanding() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <NeuroGridHero />
      <NeuroGridBackedBy />
      <NeuroGridHowItWorks />
      <NeuroGridUseCases />
      <NeuroGridWhyChoose />
      <NeuroGridCTA />
    </div>
  )
}