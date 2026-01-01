import { BrowserRouter } from "react-router-dom"
import { NeuroGridWhyChoose } from "@/polymet/components/neurogrid-why-choose"

export default function NeuroGridWhyChooseRender() {
  return (
    <BrowserRouter>
      <div className="bg-[#020617] min-h-screen">
        <NeuroGridWhyChoose />
      </div>
    </BrowserRouter>
  )
}