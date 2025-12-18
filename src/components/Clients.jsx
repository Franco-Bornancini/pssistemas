const clients = [
  "Grupo Sarmiento",
  "Grupo Sierras",
  "Intercórdoba",
  "El Trapiche",
  "Panamericano",
  "El Norteño",
  "Merlino",
  "Centineo",
]

export default function Clients() {
  return (
    <section id="clientes" className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Clientes</h2>
          <p className="mt-3 text-slate-600">
            Empresas que confiaron en nuestro trabajo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
