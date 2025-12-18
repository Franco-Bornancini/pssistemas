import { useEffect, useMemo } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getProductBySlug } from "../data/products"

export default function ProductDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const product = useMemo(() => getProductBySlug(slug), [slug])

  // Soporta navegar con hash: /productos/:slug#modulos, #detalle, etc.
  useEffect(() => {
    const hash = location.hash?.replace("#", "")
    if (!hash) return

    // Espera un frame para que el DOM esté listo
    requestAnimationFrame(() => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [location.hash])

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-3xl font-semibold">Producto no encontrado</h1>
            <p className="mt-3 text-slate-600">
              El producto que buscás no existe o cambió la URL.
            </p>
            <Link
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              to="/"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div id="inicio" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500">
            <Link to="/#inicio" className="hover:underline">
              Inicio
            </Link>
            <span> / </span>
            <Link to="/#productos" className="hover:underline">
              Productos
            </Link>
            <span> / </span>
            <span className="text-slate-700">{product.title}</span>
          </div>

          {/* Header */}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight leading-tight">
            {product.title}
          </h1>

          {product.category && (
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                {product.category}
              </span>
            </div>
          )}

          {product.summary && (
            <p className="mt-4 text-slate-600 leading-relaxed">{product.summary}</p>
          )}

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contacto"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:opacity-95"
            >
              Solicitar demo
            </a>

            {!!product.modules?.length && (
              <a
                href="#modulos"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Ver módulos
              </a>
            )}

            {!!product.sections?.length && (
              <a
                href="#detalle"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Ver detalle
              </a>
            )}

            <Link
              to="/"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Volver
            </Link>
          </div>

          {/* Descripción */}
          {!!product.paragraphs?.length && (
            <div className="mt-10 space-y-4 text-slate-700 leading-relaxed">
              {product.paragraphs.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          )}

          {/* Módulos (chips) */}
          {!!product.modules?.length && (
            <section
              id="modulos"
              className="scroll-mt-24 mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Módulos</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Seleccioná un módulo para ir al detalle (si existe sección).
                  </p>
                </div>

                <a
                  href="#detalle"
                  className="mt-3 inline-flex w-fit items-center rounded-xl border border-slate-200 bg-white px-4 py-2
                             text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Ir al detalle →
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.modules.map((m) => {
                  // Intentamos mapear chips -> sección (por heurística simple)
                  const match = product.sections?.find((s) =>
                    (s.title || "").toLowerCase().includes(m.toLowerCase())
                  )
                  const href = match ? `#${match.id}` : "#detalle"

                  return (
                    <a
                      key={m}
                      href={href}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700
                                 transition hover:bg-slate-100"
                    >
                      {m}
                    </a>
                  )
                })}
              </div>
            </section>
          )}

          {/* Secciones (acordeón) */}
          {!!product.sections?.length && (
            <section id="detalle" className="scroll-mt-24 mt-10">
              <h2 className="text-xl font-semibold">Detalle</h2>
              <p className="mt-2 text-sm text-slate-600">
                Expandí cada sección para ver funcionalidades.
              </p>

              <div className="mt-5 space-y-4">
                {product.sections.map((s) => (
                  <details
                    key={s.id}
                    id={s.id}
                    className="group scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <summary className="cursor-pointer list-none font-semibold">
                      <div className="flex items-center justify-between gap-4">
                        <span>{s.title}</span>
                        <span className="text-slate-400 transition group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {s.items?.map((it, idx) => (
                        <li
                          key={idx}
                          className="rounded-xl bg-slate-50 px-4 py-2 border border-slate-200"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA final */}
          <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-10 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">
              ¿Querés ver este producto en acción?
            </h3>
            <p className="mt-2 text-white/80">
              Coordinamos una demo y te mostramos el módulo ideal según tu operación.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contacto"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-90"
              >
                Pedir demo
              </a>
              <Link
                to="/"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Volver a la landing
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
