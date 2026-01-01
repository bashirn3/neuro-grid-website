import { ShieldCheckIcon, BuildingIcon, ZapIcon } from "lucide-react"

export function NeuroGridWhyChoose() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Autonomous, but not reckless",
      description: "Agents plan and act, but you define guardrails, approvals, and data access from day one.",
      color: "#15F5BA"
    },
    {
      icon: BuildingIcon,
      title: "Enterprise-ready stack",
      description: "Security, compliance, observability, and detailed logs designed for regulated industries.",
      color: "#4F46E5"
    },
    {
      icon: ZapIcon,
      title: "Fast time to value",
      description: "Prebuilt patterns and templates get your first workflow live in weeks, not quarters.",
      color: "#15F5BA"
    }
  ]
  
  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F46E5] opacity-5 blur-[120px] rounded-full" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E508_1px,transparent_1px),linear-gradient(to_bottom,#4F46E508_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB]">
              Built for serious,{" "}
              <span className="bg-gradient-to-r from-[#15F5BA] to-[#4F46E5] bg-clip-text text-transparent">
                production AI
              </span>
            </h2>
          </div>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#15F5BA]/5 to-[#4F46E5]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-[#0F172A]/60 backdrop-blur-sm border border-[#9CA3AF]/20 rounded-2xl p-8 h-full hover:border-[#15F5BA]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(21,245,186,0.1)]">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                        border: `1px solid ${feature.color}50`
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: feature.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {feature.description}
                    </p>
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