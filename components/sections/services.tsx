"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Ruler,
  HardHat,
  Wrench,
  Hammer,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealLift, BlueprintGrid, ConstructionProgress } from "@/components/construction-scene"

const services = [
  {
    icon: Building2,
    title: "Construcción Civil",
    description:
      "Edificaciones residenciales, comerciales e industriales con los más altos estándares de calidad.",
    features: ["Obra nueva", "Remodelaciones", "Ampliaciones"],
  },
  {
    icon: Ruler,
    title: "Diseño y Planeación",
    description:
      "Servicios integrales de diseño arquitectónico y planificación de proyectos.",
    features: ["Arquitectura", "Ingeniería estructural", "Diseño de interiores"],
  },
  {
    icon: HardHat,
    title: "Supervisión de Obra",
    description:
      "Control y seguimiento de proyectos para garantizar calidad, tiempo y presupuesto.",
    features: ["Control de calidad", "Gestión de cronograma", "Reportes técnicos"],
  },
  {
    icon: Wrench,
    title: "Infraestructura",
    description:
      "Desarrollo de obras de infraestructura urbana y vial de gran escala.",
    features: ["Carreteras", "Puentes", "Sistemas hidráulicos"],
  },
  {
    icon: Hammer,
    title: "Mantenimiento",
    description:
      "Servicios de mantenimiento preventivo y correctivo para edificaciones.",
    features: ["Mantenimiento preventivo", "Reparaciones", "Rehabilitación"],
  },
  {
    icon: TrendingUp,
    title: "Consultoría",
    description:
      "Asesoría especializada en gestión de proyectos y optimización de recursos.",
    features: ["Estudios de factibilidad", "Presupuestos", "Asesoría técnica"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Blueprint grid background */}
      <BlueprintGrid className="opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <RevealLift>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluciones integrales de construcción adaptadas a las necesidades de
              cada proyecto
            </p>
          </div>
        </RevealLift>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <RevealLift key={service.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary/50 transition-colors h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealLift>
          ))}
        </div>

        {/* Stats Section */}
        <RevealLift delay={0.2}>
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Más de 20 años construyendo confianza
                </h3>
                <p className="text-white/80 mb-6">
                  Nuestra experiencia nos respalda con cientos de proyectos
                  exitosos y clientes satisfechos en todo el país.
                </p>

                {/* Construction progress bars — thematic touch */}
                <div className="space-y-3 mb-6">
                  <ConstructionProgress label="Satisfacción del cliente" percent={98} delay={0.3} />
                  <ConstructionProgress label="Proyectos en tiempo" percent={94} delay={0.5} />
                  <ConstructionProgress label="Cumplimiento normativo" percent={100} delay={0.7} />
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="#contacto">
                    Solicitar cotización
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Proyectos completados" },
                  { value: "20+", label: "Años de experiencia" },
                  { value: "150+", label: "Profesionales" },
                  { value: "98%", label: "Clientes satisfechos" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/10"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
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
