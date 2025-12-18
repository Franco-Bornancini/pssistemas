export default function Cta() {
  return (
    <section className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-white md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Solicitá tu demo
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Contanos qué necesitás y te mostramos el módulo o desarrollo que
            mejor se adapta a tu operación.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-90"
            >
              Pedir ahora
            </a>
            <a
              href="#contacto"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
