export function NeuroGridBackedBy() {
    return (
      <section className="py-20 bg-gradient-to-b from-[#0a0a1a] to-[#0d0d20] border-t border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-8">
            <span className="font-mono text-4xl text-cyan-400 uppercase tracking-[8px] font-bold">
              Backed by
            </span>
            <img
              src="/entre.jpeg"
              alt="Entrepreneur First"
              className="max-w-[280px] h-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            />
          </div>
        </div>
      </section>
    )
  }