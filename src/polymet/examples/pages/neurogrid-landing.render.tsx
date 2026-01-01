import { BrowserRouter } from "react-router-dom"
import { NeuroGridLanding } from "@/polymet/pages/neurogrid-landing"

export default function NeuroGridLandingRender() {
  return (
    <BrowserRouter>
      <NeuroGridLanding />
    </BrowserRouter>
  )
}