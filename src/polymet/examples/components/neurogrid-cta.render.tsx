import { BrowserRouter } from "react-router-dom"
import { NeuroGridCTA } from "@/polymet/components/neurogrid-cta"

export default function NeuroGridCTARender() {
  return (
    <BrowserRouter>
      <div className="bg-[#020617] min-h-screen">
        <NeuroGridCTA />
      </div>
    </BrowserRouter>
  )
}