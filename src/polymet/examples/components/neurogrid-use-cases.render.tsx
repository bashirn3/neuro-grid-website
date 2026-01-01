import { BrowserRouter } from "react-router-dom"
import { NeuroGridUseCases } from "@/polymet/components/neurogrid-use-cases"

export default function NeuroGridUseCasesRender() {
  return (
    <BrowserRouter>
      <div className="bg-[#020617] min-h-screen">
        <NeuroGridUseCases />
      </div>
    </BrowserRouter>
  )
}