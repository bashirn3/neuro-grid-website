import { Button } from "@/components/ui/button"
import { CheckCircle2Icon, PlayCircleIcon } from "lucide-react"

export function NeuroGridHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#020617] to-[#0F172A]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#15F5BA08_1px,transparent_1px),linear-gradient(to_bottom,#15F5BA08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Radial gradient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#15F5BA] opacity-10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F9FAFB] leading-tight">
            Agentic AI workflows that{" "}
            <span className="bg-gradient-to-r from-[#15F5BA] to-[#4F46E5] bg-clip-text text-transparent">
              run your business
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed">
            NeuroGrid Labs lets you deploy teams of AI agents that can research, decide, and take action across your tools—so critical workflows run on autopilot while you stay in control.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-[#15F5BA] hover:bg-[#11C9A8] text-[#020617] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(21,245,186,0.3)]"
              asChild
            >
              <a href="https://calendly.com/bashirsani-dev/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#15F5BA] text-[#15F5BA] hover:bg-[#15F5BA]/10 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <PlayCircleIcon className="w-5 h-5 mr-2" />
              Watch a 2‑minute overview
            </Button>
          </div>
          
          {/* Feature Bullets */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-6xl mx-auto">
            <div className="bg-[#0F172A]/50 backdrop-blur-sm border border-[#15F5BA]/20 rounded-xl p-6 text-left hover:border-[#15F5BA]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(21,245,186,0.1)]">
              <CheckCircle2Icon className="w-8 h-8 text-[#15F5BA] mb-4" />
              <p className="text-[#F9FAFB] leading-relaxed">
                Turn complex workflows into autonomous AI "teams" that plan, execute, and improve over time.
              </p>
            </div>
            
            <div className="bg-[#0F172A]/50 backdrop-blur-sm border border-[#4F46E5]/20 rounded-xl p-6 text-left hover:border-[#4F46E5]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)]">
              <CheckCircle2Icon className="w-8 h-8 text-[#4F46E5] mb-4" />
              <p className="text-[#F9FAFB] leading-relaxed">
                Plug into your existing stack—CRMs, finance tools, support platforms—with enterprise-grade security and audit trails.
              </p>
            </div>
            
            <div className="bg-[#0F172A]/50 backdrop-blur-sm border border-[#15F5BA]/20 rounded-xl p-6 text-left hover:border-[#15F5BA]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(21,245,186,0.1)]">
              <CheckCircle2Icon className="w-8 h-8 text-[#15F5BA] mb-4" />
              <p className="text-[#F9FAFB] leading-relaxed">
                Start in days using ready-made templates for finance, operations, and revenue teams.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
    </section>
  )
}