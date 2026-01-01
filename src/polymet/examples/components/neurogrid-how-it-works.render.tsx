import { BrowserRouter } from "react-router-dom"
import { NeuroGridHowItWorks } from "@/polymet/components/neurogrid-how-it-works"

export default function NeuroGridHowItWorksRender() {
  return (
    <BrowserRouter>
      <div className="bg-[#020617] min-h-screen">
        <NeuroGridHowItWorks />
      </div>
    </BrowserRouter>
  )
}