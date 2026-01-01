import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NeuroGridLanding } from "@/polymet/pages/neurogrid-landing"

export default function NeuroGridApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NeuroGridLanding />} />
      </Routes>
    </Router>
  )
}