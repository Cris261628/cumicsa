"use client"

import { motion } from "framer-motion"
import { Eye, Target, Building2, Users } from "lucide-react"
import { RevealLift, Scaffold, WeldingSpark } from "@/components/construction-scene"

export function VisionMission() {
  return (
    <section id="vision-mision" className="py-24 bg-[#0B1220] relative overflow-hidden">

      {/* ── Fondo: glows ── */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* ── Fondo: grid ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Fondo: gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0B1220]/80 to-[#101B31] pointer-events-none" />

      {/* Scaffold decorations */}
      <div className="absolute top-0 left-0 h-full flex items-start pt-8 pointer-events-none select-none opacity-10">
        <Scaffold height={280} />
      </div>
      <div className="absolute top-0 right-0 h-full flex items-start pt-12 pointer-events-none select-none opacity-10">
        <Scaffold height={240} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <RevealLift>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Nuestra <span className="text-primary">Visión</span> y{" "}
                <span className="text-primary/70">Misión</span>
              </h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Comprometidos con la excelencia en cada proyecto que emprendemos
            </p>
          </div>
        </RevealLift>

        {/* Visión y Misión — apilados verticalmente */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">

          {/* Visión */}
          <RevealLift delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md 
                         hover:border-primary/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Visión</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Ser la empresa constructora líder en innovación y calidad,
                reconocida por transformar el panorama de la infraestructura con
                proyectos que perduren en el tiempo y contribuyan al desarrollo
                sostenible de las comunidades.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white/80">
                  Liderazgo en el sector
                </span>
              </div>
            </motion.div>
          </RevealLift>

          {/* Misión */}
          <RevealLift delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md 
                         hover:border-primary/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Misión</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Ejecutar proyectos de construcción con los más altos estándares
                de calidad, seguridad y eficiencia, utilizando tecnología de
                vanguardia y un equipo humano altamente capacitado, generando
                valor para nuestros clientes y la sociedad.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white/80">
                  Compromiso con la excelencia
                </span>
              </div>
            </motion.div>
          </RevealLift>
        </div>

        {/* Valores */}
        <RevealLift delay={0.35} className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">
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
                className="rounded-xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-md
                           hover:border-primary/30 transition-all"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </RevealLift>

      </div>
    </section>
  )
}