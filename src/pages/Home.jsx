import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"
import ProductsGrid from "../components/ProductsGrid"
import Clients from "../components/Clients"
import Cta from "../components/Cta"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    // Soporta:
    // 1) /?to=contacto
    // 2) /#contacto
    const params = new URLSearchParams(location.search)
    const toFromQuery = params.get("to")
    const toFromHash = location.hash?.replace("#", "")
    const to = toFromQuery || toFromHash

    if (!to) return

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(to)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 84 // offset navbar
        window.scrollTo({ top: y, behavior: "smooth" })
        return
      }
      if (attempts < 30) requestAnimationFrame(() => tryScroll(attempts + 1))
    }

    tryScroll()
  }, [location.search, location.hash])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicios">
          <Services />
        </section>

        <section id="nosotros">
          <WhyUs />
        </section>

        <section id="productos">
          <ProductsGrid />
        </section>

        <section id="clientes">
          <Clients />
        </section>

        {/* CTA puede quedar aparte */}
        <section id="cta">
          <Cta />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        {/* ✅ ESTE ES EL IMPORTANTE: ahora existe #contacto */}
        <section id="contacto">
          <Footer />
        </section>
      </main>
    </div>
  )
}
