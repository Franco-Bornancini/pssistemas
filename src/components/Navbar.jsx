import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logops.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === "/"
  const [open, setOpen] = useState(false)

  const nav = [
    { label: "Inicio", type: "hash", value: "#inicio" },
    { label: "Servicios", type: "hash", value: "#servicios" },
    { label: "Productos", type: "hash", value: "#productos" },
    { label: "Clientes", type: "hash", value: "#clientes" },
    { label: "Contacto", type: "route", value: "/contacto" },
  ]

  // Cerrar menú al cambiar ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const goToHash = (hash) => {
    // Si estás en Home: scroll directo
    if (isHome) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
      else window.location.hash = hash
      return
    }

    // Si estás en otra ruta: volvemos al home y scrolleamos
    navigate("/" + hash)
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 80)
  }

  const handleNav = (item) => {
    if (item.type === "hash") {
      goToHash(item.value)
    } else {
      navigate(item.value)
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <button
          onClick={() => handleNav({ type: "hash", value: "#inicio" })}
          className="group flex items-center gap-3 text-left"
          aria-label="Ir al inicio"
        >
          <img
            src={logo}
            alt="PS Sistemas"
            draggable="false"
            className="
              h-20 w-auto object-contain
              rounded-2xl
              shadow-sm
              transition
              hover:scale-[1.03]
            "
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              PS Sistemas
            </div>
            <div className="text-sm text-slate-500">Desarrollos a medida</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.slice(0, 4).map((n) => (
            <button
              key={n.label}
              onClick={() => handleNav(n)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition
                         hover:bg-slate-100 hover:text-slate-900"
            >
              {n.label}
            </button>
          ))}

          <button
            onClick={() => handleNav(nav[4])}
            className="ml-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white
                       shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:opacity-95"
          >
            Solicitar demo
          </button>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl
                     border border-slate-200 bg-white text-slate-700 shadow-sm transition
                     hover:bg-slate-50"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          {/* overlay */}
          <button
            onClick={() => setOpen(false)}
            className="ps-mobile-overlay fixed inset-0 z-40 bg-slate-900/30"
            aria-label="Cerrar menú"
          />
          {/* panel */}
          <div className="ps-mobile-panel fixed left-1/2 top-[64px] z-50 w-[94%] -translate-x-1/2 rounded-3xl
                          border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-2">
              {nav.map((n) => (
                <button
                  key={n.label}
                  onClick={() => handleNav(n)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3
                             text-left text-sm font-semibold text-slate-800 transition
                             hover:bg-slate-50"
                >
                  <span>{n.label}</span>
                  <span className="text-slate-400">→</span>
                </button>
              ))}

              <button
                onClick={() => handleNav(nav[4])}
                className="mt-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white
                           shadow-sm transition hover:opacity-95"
              >
                Solicitar demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
