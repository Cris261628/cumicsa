"use client"

import { motion } from "framer-motion"
import {
  Shield,
  FileCheck,
  Award,
  Scale,
  CheckCircle,
  BookOpen,
} from "lucide-react"
import { RevealLift, BuildingRise, HardHatAccent } from "@/components/construction-scene"

const regulations = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Sistema de Gestión de Calidad certificado que garantiza procesos estandarizados y mejora continua.",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "ISO 14001:2015",
    description: "Gestión Ambiental responsable, minimizando el impacto ecológico en todos nuestros proyectos.",
    color: "secondary",
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    description: "Seguridad y Salud Ocupacional, protegiendo a nuestro equipo y colaboradores.",
    color: "primary",
  },
  {
    icon: Scale,
    title: "Normativa NOM",
    description: "Cumplimiento estricto de las Normas Oficiales Mexicanas en construcción.",
    color: "secondary",
  },
]

const certifications = [
  "Registro IMSS",
  "Registro INFONAVIT",
  "Padrón de Contratistas",
  "Licencia de Construcción",
  "Certificación Ambiental",
  "Seguro de Responsabilidad Civil",
]

export function Regulations() {
  return (
    <section id="normativas" className="py-24 bg-muted relative overflow-hidden">
      {/* Building rising in background — right side */}
      <div className="absolute bottom-0 right-8 pointer-events-none select-none opacity-15">
        <BuildingRise floors={7} />
      </div>
      {/* Building rising — left side, smaller */}
      <div className="absolute bottom-0 left-4 pointer-events-none select-none opacity-10">
        <BuildingRise floors={4} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealLift>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HardHatAccent />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                <span className="text-secondary">Normativas</span> y Certificaciones
              </h2>
              <HardHatAccent />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cumplimos con los más altos estándares de calidad, seguridad y
              responsabilidad ambiental
            </p>
          </div>
        </RevealLift>

        {/* Main Regulations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {regulations.map((reg, index) => (
            <RevealLift key={reg.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border flex gap-6"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    reg.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <reg.icon
                    className={`w-8 h-8 ${
                      reg.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {reg.title}
                  </h3>
                  <p className="text-muted-foreground">{reg.description}</p>
                </div>
              </motion.div>
            </RevealLift>
          ))}
        </div>

        {/* Certifications List */}
        <RevealLift delay={0.3}>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Registros y Permisos
                </h3>
                <p className="text-muted-foreground">
                  Documentación vigente y actualizada
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealLift>

        {/* Trust Badge */}
        <RevealLift delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <Shield className="w-5 h-5" />
            <span className="font-medium">
              100% en cumplimiento normativo en los últimos 10 años
            </span>
          </div>
        </RevealLift>
      </div>
    </section>
  )
}
