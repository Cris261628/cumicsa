"use client"

import { motion } from "framer-motion"
import {
  Building2, Ruler, HardHat, Wrench, Hammer, TrendingUp, ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealLift, ConstructionProgress } from "@/components/construction-scene"

const services = [
  {
    icon: Wrench,
    title: "Infraestructura",
    description: "Desarrollo de obras de infraestructura urbana y vial de gran escala.",
    features: ["Carreteras", "Puentes", "Sistemas hidráulicos"],
  },
  {
    icon: Ruler,
    title: "Diseño y Planeación",
    description: "Servicios integrales de diseño arquitectónico y planificación de proyectos.",
    features: ["Arquitectura", "Ingeniería estructural", "Diseño de interiores"],
  },
  {
    icon: Building2,
    title: "Construcción Civil",
    description: "Edificaciones residenciales, comerciales e industriales con los más altos estándares de calidad.",
    features: ["Obra nueva", "Remodelaciones", "Ampliaciones"],
  },
  {
    icon: Hammer,
    title: "Mantenimiento",
    description: "Servicios de mantenimiento preventivo y correctivo para edificaciones.",
    features: ["Mantenimiento preventivo", "Reparaciones", "Rehabilitación"],
  },
  {
    icon: HardHat,
    title: "Supervisión de Obra",
    description: "Control y seguimiento de proyectos para garantizar calidad, tiempo y presupuesto.",
    features: ["Control de calidad", "Gestión de cronograma", "Reportes técnicos"],
  },
  {
    icon: TrendingUp,
    title: "Consultoría",
    description: "Asesoría especializada en gestión de proyectos y optimización de recursos.",
    features: ["Estudios de factibilidad", "Presupuestos", "Asesoría técnica"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0B1220] relative overflow-hidden">

      {/* Fondo: glows */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Fondo: grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fondo: gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0B1220]/80 to-[#101B31] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <RevealLift>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Lo que ofrecemos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Soluciones integrales de construcción adaptadas a las necesidades de cada proyecto
            </p>
          </div>
        </RevealLift>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <RevealLift key={service.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md
                           hover:border-primary/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all h-full"
              >
                {/* Ícono */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 mb-5 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Línea decorativa */}
                <motion.div
                  className="mt-6 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.06 }}
                />
              </motion.div>
            </RevealLift>
          ))}
        </div>

        {/* Stats Section */}
        <RevealLift delay={0.2}>
          <div className="rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-md
                          hover:border-primary/20 transition-all">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Más de 20 años construyendo{" "}
                  <span className="text-primary">confianza</span>
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Nuestra experiencia nos respalda con cientos de proyectos
                  exitosos y clientes satisfechos en todo el país.
                </p>

                <div className="space-y-4 mb-8">
                  <ConstructionProgress label="Satisfacción del cliente" percent={100} delay={0.3} />
                  <ConstructionProgress label="Proyectos en tiempo" percent={95} delay={0.5} />
                  <ConstructionProgress label="Cumplimiento normativo" percent={100} delay={0.7} />
                </div>

              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "64+", label: "Proyectos completados" },
                  { value: "35+", label: "Años de experiencia" },
                  { value: "20+", label: "Profesionales" },
                  { value: "100%", label: "Clientes satisfechos" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
                               hover:border-primary/30 transition-all"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </RevealLift>

      </div>
    </section>
  )
}