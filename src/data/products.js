import {
  TruckIcon,
  BuildingOffice2Icon,
  ScissorsIcon,
} from "@heroicons/react/24/outline"

export const PRODUCTS = [
  {
    slug: "software-integral-de-transporte",
    title: "Software Integral de Transporte",
    category: "Transporte",
    summary:
      "Potente software para empresas de transporte de pasajeros, adaptable a la operatoria de todo tipo y tamaño de empresa.",

    // ICONO
    icon: TruckIcon,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600",

    paragraphs: [
      "Es un potente software diseñado para empresas de Transporte de Pasajeros. Se adapta fácilmente a la operatoria de todo tipo y tamaño de empresa.",
      "Abarca todas y cada una de las áreas de la empresa: Dirección, Administración y Finanzas, Recursos Humanos, Tráfico, Taller.",
      "Está conformado por diferentes módulos, los cuales se puede implementar por separados o en su conjunto, dependiendo de las necesidades a cubrir.",
      "Esta herramienta está en continuo desarrollo, para adaptarse rápidamente a las nuevas exigencias y brindar una mejor experiencia con el usuario.",
      "Puede ser instalado tanto en los servidores que disponga la empresa o en nuestros servidores en la nube, con una disponibilidad superior al 99.5%, asegurando siempre el acceso a sus datos.",
    ],

    modules: [
      "Gestión",
      "Compras",
      "Recaudación",
      "Venta Online de Pasajes",
      "Encomiendas",
      "RRHH",
      "Liquidación de Sueldos",
      "Logística de Mantenimiento",
      "Tráfico",
      "Turismo",
      "Siniestros",
    ],

    sections: [
      {
        id: "mod-gestion-erp",
        title: "Módulo de Gestión (ERP)",
        items: [
          "Ventas, Compras, Contabilidad, Tesorería",
          "Libros IVA y archivos para AFIP",
          "Cuentas corrientes y conciliaciones bancarias",
        ],
      },
      {
        id: "mod-rrhh",
        title: "Módulo de RR.HH.",
        items: [
          "Legajos, licencias, carpetas médicas",
          "Gestión disciplinaria",
          "Archivos de pago de haberes",
        ],
      },
      {
        id: "mod-mantenimiento",
        title: "Logística de Mantenimiento",
        items: [
          "Mantenimiento preventivo",
          "Gestión de repuestos y stock",
          "Combustible y cubiertas",
        ],
      },
    ],
  },

  {
    slug: "software-de-gestion-erp",
    title: "Software de Gestión (ERP)",
    category: "Gestión",
    summary:
      "Administrá todos los procesos de tu empresa de forma ágil y eficiente. Ideal para PyMEs.",

    // ICONO
    icon: BuildingOffice2Icon,
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-600",

    paragraphs: [
      "Con este software vas a poder administrar todos los procesos y actividades de tu empresa de manera centralizada.",
      "Está orientado a pequeñas y medianas empresas de productos o servicios.",
    ],

    sections: [
      {
        id: "ventas",
        title: "Ventas",
        items: [
          "Presupuestos y pedidos",
          "Facturación electrónica",
          "Cuentas corrientes de clientes",
        ],
      },
      {
        id: "compras",
        title: "Compras",
        items: [
          "Órdenes de compra",
          "Proveedores y pagos",
          "Libro IVA Compras",
        ],
      },
      {
        id: "contabilidad",
        title: "Contabilidad",
        items: [
          "Plan de cuentas",
          "Asientos contables",
          "Balances y reportes",
        ],
      },
    ],
  },

  {
    slug: "software-de-produccion-textil",
    title: "Software de Producción Textil",
    category: "Producción",
    summary:
      "Sistema diseñado para empresas de confección de prendas. Control total de producción y stock.",

    // ICONO
    icon: ScissorsIcon,
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-600",

    paragraphs: [
      "Este software fue diseñado específicamente para empresas textiles y talleres de confección.",
      "Permite controlar producción, costos, talleres y stock en tiempo real.",
    ],

    sections: [
      {
        id: "produccion",
        title: "Producción",
        items: [
          "Fichas técnicas",
          "Planillas de corte",
          "Costos de producción",
        ],
      },
      {
        id: "stock",
        title: "Stock",
        items: [
          "Inventario",
          "Stock mínimo",
          "Movimientos de artículos",
        ],
      },
      {
        id: "talleres",
        title: "Talleres",
        items: [
          "Cuentas corrientes",
          "Órdenes de pago",
          "Seguimiento de producción",
        ],
      },
    ],
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug)
}
