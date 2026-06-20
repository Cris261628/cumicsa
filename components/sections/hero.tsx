"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1220] pt-28 pb-20 md:pt-24 md:pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0">

        <div
          className="absolute inset-0 opacity-55 scale-100"
          style={{
            backgroundImage: "url('/images/fondo.png')",
            backgroundSize: "115%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Glow */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-80 scale-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Overlay azul oscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#0B1220]/55 to-[#101B31]/60" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

            Líderes en infraestructura y construcción
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white mb-6"
          >
            Construyendo el{" "}
            <span className="text-primary relative">
              futuro

              <motion.span
                className="absolute left-0 bottom-1 w-full h-3 bg-primary/20 -z-10 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>{" "}
            con innovación
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
          >
            Más de 35 años desarrollando proyectos de construcción,
            infraestructura y mantenimiento industrial con estándares de calidad,
            seguridad y tecnología moderna.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <Button
              asChild
              size="lg"
              className="group h-14 px-8 rounded-2xl text-lg bg-primary hover:bg-primary/90 shadow-[0_0_35px_rgba(245,158,11,0.35)] transition-all"
            >
              <Link href="#proyectos">
                Ver proyectos

                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-2xl border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black text-lg transition-all"
            >
              <Link href="#contacto">
                Contáctanos
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 md:gap-10 mt-12 md:mt-16"
          >
            {[
              { number: "35+", label: "Años de experiencia" },
              { number: "64+", label: "Proyectos completados" },
              { number: "100%", label: "Clientes satisfechos" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {item.number}
                </h3>

                <p className="text-white/60 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Link
          href="#vision-mision"
          className="flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-primary/40 transition-all"
        >
          <ChevronDown size={28} />
        </Link>
      </motion.div>
    </section>
  )
}