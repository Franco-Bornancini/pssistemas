import "../styles/Hero.css"
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section id="inicio" className="ps-hero">
      {/* fondo */}
      <div className="ps-hero-bg" aria-hidden="true">
        <div className="ps-hero-grid" />
        <div className="ps-hero-blob ps-hero-blob--a" />
        <div className="ps-hero-blob ps-hero-blob--b" />
      </div>

      <div className="ps-hero-inner">
        <div className="ps-hero-content">
          <p className="ps-hero-badge">
            <SparklesIcon className="ps-hero-badge-ic" />
            +20 años en soluciones para transporte
          </p>

          <h1 className="ps-hero-title">
            Software a medida para empresas de transporte
          </h1>

          <p className="ps-hero-subtitle">
            Digitalizá tu operación, ganá control y mejorá la eficiencia con productos y
            desarrollos personalizados para tu empresa.
          </p>

          <div className="ps-hero-actions">
            <a href="/contacto" className="ps-hero-btn ps-hero-btn--primary">
              Solicitar demo <ArrowRightIcon className="ps-hero-btn-ic" />
            </a>
            <a href="#productos" className="ps-hero-btn ps-hero-btn--ghost">
              Ver productos
            </a>
          </div>

          <div className="ps-hero-stats">
            <div className="ps-stat">
              <div className="ps-stat-kpi">99.5%</div>
              <div className="ps-stat-txt">Disponibilidad</div>
            </div>
            <div className="ps-stat">
              <div className="ps-stat-kpi">Módulos</div>
              <div className="ps-stat-txt">Por área</div>
            </div>
            <div className="ps-stat">
              <div className="ps-stat-kpi">Soporte</div>
              <div className="ps-stat-txt">Lun a Vie</div>
            </div>
          </div>
        </div>

        <div className="ps-hero-cardWrap">
          <div className="ps-hero-card">
            <div className="ps-hero-cardTop">
              <div>
                <div className="ps-hero-cardKicker">Demo rápida</div>
                <div className="ps-hero-cardTitle">
                  Te proponemos una solución según tu operación
                </div>
              </div>
              <span className="ps-hero-pill">Diagnóstico</span>
            </div>

            <div className="ps-hero-cardGrid">
              <div className="ps-chip">Planificación</div>
              <div className="ps-chip">Control</div>
              <div className="ps-chip">Reportes</div>
              <div className="ps-chip">Integraciones</div>
            </div>

            <div className="ps-hero-tip">
              <div className="ps-hero-tipK">Tip</div>
              <div className="ps-hero-tipT">
                Mostranos cómo trabajan hoy y armamos la mejora por etapas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
