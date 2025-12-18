import {
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
  CloudIcon,
  ChartBarSquareIcon,
  UsersIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export default function WhyUs() {
  const items = [
    {
      title: "Aplicaciones Seguras",
      text: "La seguridad es un eje principal en nuestros desarrollos.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Fáciles de usar",
      text: "Nuestros sistemas son intuitivos y los usuarios los adoptan rápidamente.",
      icon: CursorArrowRaysIcon,
    },
    {
      title: "Soluciones Creativas",
      text: "Brindamos soluciones originales y adaptadas a cada cliente.",
      icon: SparklesIcon,
    },
    {
      title: "Servidores en la Nube",
      text: "Nuestros sistemas pueden utilizarse en la nube o de forma local.",
      icon: CloudIcon,
    },
  ]

  return (
    <section className="border-t border-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto + items */}
          <div className="ps-animate-in">
            <h2 className="text-3xl font-semibold tracking-tight">¿Por qué elegirnos?</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              En cada proyecto nos interiorizamos al mínimo detalle de la operatoria
              para brindar software de calidad, eficiente y simple de usar.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {items.map((i, idx) => (
                <div
                  key={i.title}
                  className={`group flex gap-4 rounded-2xl border border-transparent p-2 transition hover:border-slate-200 hover:bg-slate-50 ps-animate-in ${
                    idx === 0
                      ? "ps-delay-1"
                      : idx === 1
                      ? "ps-delay-2"
                      : idx === 2
                      ? "ps-delay-3"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/20 transition group-hover:scale-[1.03] group-hover:bg-emerald-500/20">
                    <i.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{i.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{i.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL MOBILE/TABLET (compacto) */}
          <div className="relative ps-animate-in ps-delay-2 lg:hidden">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">Panel de sistema</div>
                <span className="text-xs text-slate-500">Vista rápida</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniTile icon={ChartBarSquareIcon} title="Reportes" tone="emerald" />
                <MiniTile icon={UsersIcon} title="Usuarios" />
                <MiniTile icon={CreditCardIcon} title="Tesorería" />
                <MiniTile icon={TruckIcon} title="Operación" />
              </div>

              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-slate-700" />
                  Actividad
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                  <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                  <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-emerald-500/10 px-4 py-3 ring-1 ring-emerald-500/20">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                  <Cog6ToothIcon className="h-5 w-5 text-emerald-700" />
                  Módulos configurables
                </div>
                <span className="text-xs text-slate-600">OK</span>
              </div>
            </div>
          </div>

          {/* VISUAL DESKTOP (superpuesto) */}
          <div className="relative hidden lg:block ps-animate-in ps-delay-2">
            {/* Fondo suave */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/60 p-8 shadow-sm">
              {/* Glow decorativo */}
              <div className="ps-glow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="ps-glow pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />

              {/* Cards superpuestas */}
              <div className="relative h-[380px]">
                {/* Card A */}
                <div className="ps-float absolute right-0 top-0 w-[320px] rounded-3xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="h-3 w-24 rounded bg-slate-200" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-emerald-500/10 p-3 ring-1 ring-emerald-500/20">
                      <div className="flex items-center gap-2 text-slate-700">
                        <ChartBarSquareIcon className="h-5 w-5 text-emerald-700" />
                        <div className="text-xs font-medium">Reportes</div>
                      </div>
                      <div className="mt-3 h-8 rounded-xl bg-white ring-1 ring-slate-200" />
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
                      <div className="flex items-center gap-2 text-slate-700">
                        <UsersIcon className="h-5 w-5 text-slate-600" />
                        <div className="text-xs font-medium">Usuarios</div>
                      </div>
                      <div className="mt-3 h-8 rounded-xl bg-white ring-1 ring-slate-200" />
                    </div>

                    <div className="col-span-2 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-700">
                          <ClipboardDocumentCheckIcon className="h-5 w-5 text-slate-600" />
                          <div className="text-xs font-medium">Actividad</div>
                        </div>
                        <div className="text-[11px] text-slate-500">Últimas 24hs</div>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                        <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                        <div className="h-3 rounded bg-white ring-1 ring-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card B */}
                <div className="ps-float-slow absolute right-24 top-28 w-[320px] rounded-3xl border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/20">
                      <Cog6ToothIcon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900">Panel de gestión</div>
                      <div className="mt-1 text-xs text-slate-500">Módulos y accesos rápidos</div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <CreditCardIcon className="h-5 w-5 text-slate-600" />
                        Tesorería
                      </div>
                      <span className="text-xs text-slate-500">OK</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <TruckIcon className="h-5 w-5 text-slate-600" />
                        Operación
                      </div>
                      <span className="text-xs text-slate-500">OK</span>
                    </div>

                    <div className="rounded-2xl bg-emerald-500/10 px-4 py-3 ring-1 ring-emerald-500/20">
                      <div className="text-sm font-medium text-slate-900">Acción rápida</div>
                      <div className="mt-1 text-xs text-slate-600">
                        Coordiná una demo y te mostramos el módulo ideal.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card C */}
                <div className="absolute right-40 top-52 w-[280px] rounded-3xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-sm font-semibold text-slate-900">Vista general</div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="flex h-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                      <CloudIcon className="h-7 w-7 text-slate-600" />
                    </div>
                    <div className="flex h-16 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                      <ShieldCheckIcon className="h-7 w-7 text-emerald-700" />
                    </div>
                    <div className="flex h-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                      <SparklesIcon className="h-7 w-7 text-slate-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-10 rounded-2xl bg-slate-50 ring-1 ring-slate-200" />
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-500">
                Interfaces claras, módulos por área y experiencia optimizada para tu operación.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniTile({ icon: Icon, title, tone }) {
  const toneCls =
    tone === "emerald"
      ? "bg-emerald-500/10 ring-emerald-500/20"
      : "bg-white/70 ring-slate-200"

  const iconCls = tone === "emerald" ? "text-emerald-700" : "text-slate-700"

  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneCls}`}>
      <div className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${iconCls}`} />
        <div className="text-sm font-semibold text-slate-900">{title}</div>
      </div>
      <div className="mt-3 h-7 rounded-xl bg-white ring-1 ring-slate-200" />
    </div>
  )
}
