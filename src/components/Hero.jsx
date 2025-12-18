export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl" />
        <div className="absolute -bottom-24 right-[-80px] h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            +20 años en soluciones para transporte
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Software a medida para empresas de transporte
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Digitalizá tu operación, ganá control y mejorá la eficiencia con
            productos y desarrollos personalizados para tu empresa.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Solicitar demo
            </a>
            <a
              href="#productos"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Ver productos
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <div className="text-sm opacity-80">Demo rápida</div>
            <div className="mt-2 text-xl font-semibold">
              Mostranos tu operación y te proponemos una solución
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/10 p-3">Planificación</div>
              <div className="rounded-xl bg-white/10 p-3">Control</div>
              <div className="rounded-xl bg-white/10 p-3">Reportes</div>
              <div className="rounded-xl bg-white/10 p-3">Integraciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
