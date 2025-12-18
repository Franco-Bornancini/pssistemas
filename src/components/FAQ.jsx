const faqs = [
  {
    q: "¿Se puede instalar en servidores propios del cliente?",
    a: "Si, todos nuestros software's se pueden instalar en los servidores que dispone el cliente o en nuestros servidores en la nube.",
  },
  // {
  //   q: "¿Qué tan personalizable es el sistema?",
  //   a: "Mucho. Hacemos relevamiento y proponemos ajustes para adaptarlo a tu operación real.",
  // },
  // {
  //   q: "¿Dan soporte y mantenimiento?",
  //   a: "Sí. Incluye soporte y acompañamiento durante la implementación y operación.",
  // },
]

export default function FAQ() {
  return (
    <section className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-slate-600">Sobre nuestras soluciones</p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none font-medium">
                <div className="flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
