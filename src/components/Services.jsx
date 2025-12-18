import {
  Squares2X2Icon,
  AdjustmentsHorizontalIcon,
  LifebuoyIcon,
  BriefcaseIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"

export default function Services() {
  const services = [
    {
      title: "Desarrollos a Medida",
      text: "Disponemos de un equipo de profesionales entrenados para dar respuesta a las necesidades del cliente.",
      icon: Squares2X2Icon,
      accent: "bg-emerald-500",
    },
    {
      title: "Customización",
      text: "Adaptamos nuestro software según la necesidad de cada cliente, aportando una mejor experiencia de uso.",
      icon: AdjustmentsHorizontalIcon,
      accent: "bg-emerald-500",
    },
    {
      title: "Soporte",
      text: "Brindamos soporte online o in company, de lunes a viernes de 9 a 18 hs.",
      icon: LifebuoyIcon,
      accent: "bg-emerald-500",
    },
    {
      title: "Consultoría",
      text: "Evaluamos procesos TIC para optimizarlos y brindar soluciones eficientes.",
      icon: BriefcaseIcon,
      accent: "bg-emerald-500",
    },
    {
      title: "Backup Remotos",
      text: "Copias de seguridad diarias y acumulativas de bases de datos y archivos críticos en la nube.",
      icon: CloudArrowUpIcon,
      accent: "bg-emerald-500",
    },
    {
      title: "Integraciones",
      text: "Integraciones e implementaciones de software de terceros.",
      icon: Cog6ToothIcon,
      accent: "bg-emerald-500",
    },
  ]

  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center">
          Nuestros Servicios
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center
                         transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${s.accent}`}
                style={{
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1F3D83'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
              >
                <s.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-6 font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
