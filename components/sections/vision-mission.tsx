"use client"

import { motion } from "framer-motion"
import { Eye, Target, Building2, Users } from "lucide-react"
import { RevealLift, Scaffold, WeldingSpark } from "@/components/construction-scene"

export function VisionMission() {
  return (
    <section id="vision-mision" className="py-24 bg-muted relative overflow-hidden">
      {/* Scaffold decorations — purely background */}
      <div className="absolute top-0 left-0 h-full flex items-start pt-8 pointer-events-none select-none opacity-20">
        <Scaffold height={280} />
      </div>
      <div className="absolute top-0 right-0 h-full flex items-start pt-12 pointer-events-none select-none opacity-20">
        <Scaffold height={240} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealLift>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <WeldingSpark />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Nuestra <span className="text-primary">Visión</span> y{" "}
                <span className="text-secondary">Misión</span>
              </h2>
              <WeldingSpark />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprometidos con la excelencia en cada proyecto que emprendemos
            </p>
          </div>
        </RevealLift>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Vision */}
          <RevealLift delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ser la empresa constructora líder en innovación y calidad,
                reconocida por transformar el panorama de la infraestructura con
                proyectos que perduren en el tiempo y contribuyan al desarrollo
                sostenible de las comunidades.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Liderazgo en el sector
                </span>
              </div>
            </motion.div>
          </RevealLift>

          {/* Mission */}
          <RevealLift delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ejecutar proyectos de construcción con los más altos estándares
                de calidad, seguridad y eficiencia, utilizando tecnología de
                vanguardia y un equipo humano altamente capacitado, generando
                valor para nuestros clientes y la sociedad.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-foreground">
                  Compromiso con la excelencia
                </span>
              </div>
            </motion.div>
          </RevealLift>
        </div>

        {/* Values */}
        <RevealLift delay={0.35} className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Integridad", icon: "🏗️", description: "Actuamos con honestidad y transparencia" },
              { title: "Calidad", icon: "⭐", description: "Excelencia en cada detalle" },
              { title: "Innovación", icon: "💡", description: "Soluciones creativas y modernas" },
              { title: "Compromiso", icon: "🤝", description: "Responsabilidad con cada proyecto" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </RevealLift>
      </div>
    </section>
  )
}
