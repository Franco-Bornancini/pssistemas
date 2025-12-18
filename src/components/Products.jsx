const products = [
  { title: "Software Integral de Transporte", tag: "Core", desc: "Gestión operativa end-to-end." },
  { title: "ERP / Gestión", tag: "Administración", desc: "Compras, stock, finanzas y reportes." },
  { title: "Módulo de Compras", tag: "ERP", desc: "Flujos, aprobación y proveedores." },
  { title: "Módulo de Mantenimiento", tag: "Transporte", desc: "Preventivo, correctivo y alertas." },
  { title: "Integraciones", tag: "API", desc: "Conectores con terceros y datos." },
  { title: "Producción", tag: "Industria", desc: "Planificación y control." },
]

export default function Products() {
  return (
    <section id="productos" className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Productos</h2>
            <p className="mt-3 text-slate-600">
              Módulos pensados para escalar según tu necesidad. (Después lo
              refinamos con categorías reales.)
            </p>
          </div>
          <a
            href="#contacto"
            className="w-fit rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            Pedir asesoramiento
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                  {p.tag}
                </span>
                <div className="h-10 w-10 rounded-xl bg-slate-900/10" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>

              <a
                href="#contacto"
                className="mt-5 inline-flex text-sm font-medium text-slate-900 hover:underline"
              >
                Ver demo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
