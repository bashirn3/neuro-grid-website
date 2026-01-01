import { DollarSignIcon, TrendingUpIcon, HeadphonesIcon } from "lucide-react"

export function NeuroGridUseCases() {
  const useCases = [
    {
      icon: DollarSignIcon,
      title: "Finance: Invoice-to-payment autopilot",
      description: "Collects invoices, reads and validates them, matches to POs, flags anomalies, and drafts payment batches for approval.",
      benefit: "Cuts manual finance work while improving accuracy and auditability.",
      color: "#15F5BA",
      gradient: "from-[#15F5BA]/20 to-transparent"
    },
    {
      icon: TrendingUpIcon,
      title: "Revenue: Lead-to-opportunity automation",
      description: "Researches leads, drafts personalized outreach, schedules follow-ups, and updates your CRM automatically.",
      benefit: "Helps teams run more pipeline with less repetitive work.",
      color: "#4F46E5",
      gradient: "from-[#4F46E5]/20 to-transparent"
    },
    {
      icon: HeadphonesIcon,
      title: "Support: AI-first helpdesk",
      description: "Handles routine tickets end to end and escalates complex issues with clean summaries for your team.",
      benefit: "Reduces response times and support costs while boosting satisfaction.",
      color: "#15F5BA",
      gradient: "from-[#15F5BA]/20 to-transparent"
    }
  ]
  
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#020818] to-[#0F172A]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#15F5BA] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4F46E5] opacity-5 blur-[120px] rounded-full" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB]">
              What NeuroGrid can{" "}
              <span className="bg-gradient-to-r from-[#15F5BA] to-[#4F46E5] bg-clip-text text-transparent">
                run for you
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Agentic AI is already transforming finance, operations, and customer teams by automating multi-step workflows across tools.
            </p>
          </div>
          
          {/* Use case cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                  <div className="relative bg-[#020617]/90 backdrop-blur-sm border border-[#9CA3AF]/20 rounded-2xl p-8 h-full hover:border-[#15F5BA]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(21,245,186,0.1)] flex flex-col">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${useCase.color}20, ${useCase.color}10)`,
                        border: `1px solid ${useCase.color}40`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: useCase.color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#F9FAFB] mb-4">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-[#9CA3AF] mb-4 leading-relaxed flex-grow">
                      {useCase.description}
                    </p>
                    
                    <div className="pt-4 border-t border-[#9CA3AF]/20">
                      <p className="text-[#15F5BA] font-medium">
                        {useCase.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}