import { NetworkIcon, PlugIcon, GaugeIcon } from "lucide-react"

export function NeuroGridHowItWorks() {
  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5] opacity-5 blur-[100px] rounded-full" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB]">
              How NeuroGrid{" "}
              <span className="bg-gradient-to-r from-[#15F5BA] to-[#4F46E5] bg-clip-text text-transparent">
                runs your workflows
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              NeuroGrid Labs turns a single business goal into a coordinated plan executed by multiple AI agents. Each agent has a role, tools, and memory, and they collaborate to move work from "to‑do" to "done" with minimal human friction.
            </p>
          </div>
          
          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#15F5BA]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[#0F172A]/80 backdrop-blur-sm border border-[#15F5BA]/30 rounded-2xl p-8 h-full hover:border-[#15F5BA]/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(21,245,186,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#15F5BA] to-[#11C9A8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <NetworkIcon className="w-8 h-8 text-[#020617]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                  Design your AI team
                </h3>
                <ul className="space-y-3 text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="text-[#15F5BA] mr-2 mt-1">•</span>
                    <span>Drag-and-drop a workflow: Researcher, Analyst, Writer, Approver, Ops.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15F5BA] mr-2 mt-1">•</span>
                    <span>Set goals, data sources, and when humans must review or approve.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[#0F172A]/80 backdrop-blur-sm border border-[#4F46E5]/30 rounded-2xl p-8 h-full hover:border-[#4F46E5]/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PlugIcon className="w-8 h-8 text-[#F9FAFB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                  Connect your tools
                </h3>
                <ul className="space-y-3 text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="text-[#4F46E5] mr-2 mt-1">•</span>
                    <span>Secure integrations with email, CRM, support, finance, and internal APIs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4F46E5] mr-2 mt-1">•</span>
                    <span>Agents call tools directly to fetch data, trigger actions, and update records.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Column 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#15F5BA]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[#0F172A]/80 backdrop-blur-sm border border-[#15F5BA]/30 rounded-2xl p-8 h-full hover:border-[#15F5BA]/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(21,245,186,0.15)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#15F5BA] to-[#11C9A8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GaugeIcon className="w-8 h-8 text-[#020617]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                  Monitor and control
                </h3>
                <ul className="space-y-3 text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="text-[#15F5BA] mr-2 mt-1">•</span>
                    <span>Dashboards show tasks completed, time saved, and exceptions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15F5BA] mr-2 mt-1">•</span>
                    <span>Approvals, guardrails, and full logs keep you compliant and in control.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}