import { NeuroGridHero } from "@/polymet/components/neurogrid-hero"
import { NeuroGridHowItWorks } from "@/polymet/components/neurogrid-how-it-works"
import { NeuroGridUseCases } from "@/polymet/components/neurogrid-use-cases"
import { NeuroGridWhyChoose } from "@/polymet/components/neurogrid-why-choose"
import { NeuroGridCTA } from "@/polymet/components/neurogrid-cta"

export function NeuroGridLanding() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <NeuroGridHero />
      <NeuroGridHowItWorks />
      <NeuroGridUseCases />
      <NeuroGridWhyChoose />
      <NeuroGridCTA />
    </div>
  )
}