import logo from "../assets/logops.png"

export default function Footer() {
  return (
    <footer className="bg-[#1d222b] text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Branding */}
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="PS Sistemas"
                draggable="false"
                className="
                  h-16 w-auto object-contain
                  rounded-2xl
                  shadow-sm
                  transition
                  hover:scale-[1.03]
                "
              />

              <div className="leading-tight">
                <div className="text-lg font-semibold text-white">PS Sistemas</div>
                <div className="text-sm text-slate-400">Desarrollos a medida</div>
              </div>
            </div>



            <p className="mt-4 text-sm text-slate-400">
              Desarrollo de software a medida para empresas de transporte y gestión.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-white">Empresa</p>
              <a href="/#inicio" className="block hover:text-white">Inicio</a>
              <a href="/#servicios" className="block hover:text-white">Servicios</a>
              <a href="/#productos" className="block hover:text-white">Productos</a>
              <a href="/#clientes" className="block hover:text-white">Clientes</a>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white">Contacto</p>
              <p className="text-slate-400">Córdoba, Argentina</p>
              <p className="text-slate-400">info@pssistemas.com.ar</p>
              <p className="text-slate-400">+54 351 567 8921</p>

              <a
                href="/contacto"
                className="inline-flex mt-2 rounded-xl bg-white/10 px-3 py-2 text-white
                           ring-1 ring-white/10 hover:bg-white/15"
              >
                Ir a Contacto →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} PS Sistemas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
