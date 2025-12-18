import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState("")
  const [err, setErr] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    setOk("")
    setErr("")
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // ✅ Cambiá esta URL según tu opción:
      // - Backend propio: "/api/contact"
      // - Formspree: "https://formspree.io/f/XXXXXXX"
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("No se pudo enviar el mensaje.")
      e.currentTarget.reset()
      setOk("¡Listo! Te respondemos a la brevedad.")
    } catch (error) {
      setErr(error?.message || "Error enviando el mensaje.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="border-t border-slate-100">
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <h1 className="text-4xl font-semibold tracking-tight">Contacto</h1>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Contanos qué necesitás y te contactamos para coordinar una demo o una propuesta.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Texto */}
              <div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-sm font-medium text-slate-900">Atención</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Lunes a viernes de 9 a 18 hs. Si dejás tu teléfono, te llamamos.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-slate-900">Datos</div>
                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <p><span className="font-medium text-slate-800">Email:</span> info@pssistemas.com.ar</p>
                    <p><span className="font-medium text-slate-800">Tel:</span> +54 351 000 0000</p>
                    <p><span className="font-medium text-slate-800">Ubicación:</span> Córdoba, Argentina</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
                    <Field
                      label="Teléfono"
                      name="telefono"
                      required
                      placeholder="Ej: +54 351 123 4567"
                    />
                  </div>

                  <Field
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />

                  <Field label="Asunto" name="asunto" placeholder="Ej: Solicitar demo" />

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Mensaje <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={6}
                      placeholder="Contanos un poco sobre tu empresa y qué querés mejorar..."
                      className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3
                                 text-sm text-slate-900 outline-none transition
                                 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                    />
                  </div>

                  {ok && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                      {ok}
                    </div>
                  )}
                  {err && (
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                      {err}
                    </div>
                  )}

                  <button
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3
                               text-sm font-medium text-white transition
                               hover:-translate-y-0.5 hover:shadow-lg hover:opacity-95
                               disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>

                  <p className="text-xs text-slate-500">
                    Al enviar aceptás ser contactado para coordinar una demo.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">
        {label} {props.required && <span className="text-rose-500">*</span>}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3
                   text-sm text-slate-900 outline-none transition
                   focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
      />
    </div>
  )
}
