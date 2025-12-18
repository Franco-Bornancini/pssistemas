import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { PRODUCTS } from "../data/products"

import {
  Cog6ToothIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  TicketIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  GlobeAmericasIcon,
  ArchiveBoxIcon,
  MapIcon,
  CalculatorIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"

const MODULE_ICON = {
  "Gestión": Cog6ToothIcon,
  "Compras": ShoppingCartIcon,
  "Recaudación": BanknotesIcon,
  "Venta Online de Pasajes": TicketIcon,
  "Encomiendas": ArchiveBoxIcon,
  "RRHH": UsersIcon,
  "Liquidación de Sueldos": CalculatorIcon,
  "Logística de Mantenimiento": WrenchScrewdriverIcon,
  "Tráfico": MapIcon,
  "Turismo": GlobeAmericasIcon,
  "Siniestros": ExclamationTriangleIcon,
}

export default function ProductsGrid() {
  const [showAllModules, setShowAllModules] = useState(false)

  const transporte = useMemo(
    () => PRODUCTS.find((p) => p.slug === "software-integral-de-transporte"),
    []
  )

  const mainProducts = PRODUCTS

  const modules = (transporte?.modules || []).map((m) => ({
    name: m,
    Icon: MODULE_ICON[m] || Cog6ToothIcon,
  }))

  const visibleModules = showAllModules ? modules : modules.slice(0, 6)

  return (
    <section id="productos" className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Nuestros Productos</h2>
          <p className="mt-3 text-slate-600">
            Elegí un producto para ver su detalle. En Transporte podés explorar también los módulos.
          </p>
        </div>

        {/* Productos principales (3) */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mainProducts.map((p) => (
            <Link
              key={p.slug}
              to={`/productos/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200
                         bg-white p-6 shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
            >
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl
                            ${p.iconBg} transition-all duration-300 group-hover:scale-110`}
              >
                {p.icon && <p.icon className={`h-7 w-7 ${p.iconColor}`} />}
              </div>

              {/* Category */}
              {p.category && (
                <span className="mt-4 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1
                                 text-xs font-medium text-slate-600">
                  {p.category}
                </span>
              )}

              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.summary}</p>

              {/* Hover bar */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full
                           bg-slate-900 px-5 py-3 text-sm font-medium text-white
                           transition-transform duration-300 group-hover:translate-y-0"
              >
                Ver detalle →
              </div>
            </Link>
          ))}
        </div>

        {/* Módulos (compacto, sin scroll excesivo) */}
        {transporte?.modules?.length ? (
          <div className="mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Módulos del Software Integral de Transporte
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Accedé rápido a cada módulo (dentro del detalle del producto).
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAllModules((v) => !v)}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border border-slate-200
                           bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm
                           transition hover:bg-slate-50"
              >
                {showAllModules ? "Ver menos" : "Ver todos"}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {visibleModules.map(({ name, Icon }) => (
                <Link
                  key={name}
                  to={`/productos/${transporte.slug}#modulos`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200
                             bg-white p-4 shadow-sm transition-all duration-300
                             hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15
                                  transition group-hover:scale-105">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {name.startsWith("Módulo") ? name : `Módulo de ${name}`}
                    </div>
                    <div className="text-xs text-slate-600">
                      Ver detalle →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
