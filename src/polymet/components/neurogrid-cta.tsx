import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export function NeuroGridCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#020818] to-[#020617]" />
      
      {/* Radial gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#15F5BA] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#4F46E5] opacity-10 blur-[120px] rounded-full" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#15F5BA08_1px,transparent_1px),linear-gradient(to_bottom,#15F5BA08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* CTA Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#15F5BA]/20 via-[#4F46E5]/20 to-[#15F5BA]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-[#020617]/80 backdrop-blur-sm border border-[#15F5BA]/30 rounded-3xl p-12 md:p-16 text-center hover:border-[#15F5BA]/50 transition-all duration-300 hover:shadow-[0_0_60px_rgba(21,245,186,0.2)]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
                Turn your workflows into{" "}
                <span className="bg-gradient-to-r from-[#15F5BA] to-[#4F46E5] bg-clip-text text-transparent">
                  AI-powered teams
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-10 leading-relaxed">
                Start with one high-impact workflow—collections, invoice processing, or lead management—and expand as your agents prove their value.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#15F5BA] hover:bg-[#11C9A8] text-[#020617] font-semibold px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(21,245,186,0.4)] group"
                  asChild
                >
                  <a href="https://calendly.com/bashirsani-dev/30min" target="_blank" rel="noopener noreferrer">
                    Book a demo
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 font-semibold px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Join the waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}