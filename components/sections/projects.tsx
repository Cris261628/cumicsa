"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Building2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "El Chimo comunidad del Tuito.",
    category: "Infraestructura",
    location: "Tuito, Jalisco",
    year: "2022",
    area: "5.000",
    description: "Excavación de divisiones en zona de desarrollo comunitario.",
    image: "/images/imagencumicsa 1.png",
    status: "Completado",
  },
  {
    id: 2,
    title: "Conservación general a la presa de Cointzio en Morelia, Michoacán.",
    category: "Infraestructura",
    location: "Presa de Cointzio, Michoacán",
    year: "2022",
    area: "20.000",
    description: "Instalación de coladeras industriales de alto rendimiento.",
    image: "/images/imagencumicsa 2.png",
    status: "Completado",
  },
  {
    id: 3,
    title: "Recubrimiento de concreto en canal de descarga Túnel Emisor.",
    category: "Infraestructura",
    location: "Jalisco",
    year: "2019",
    area: "30.000",
    description: "Recubrimiento de canal para conducción de aguas pluviales.",
    image: "/images/imagencumicsa 3.png",
    status: "Completado",
  },
  {
    id: 4,
    title: "Construcción de compuertas de desboque de canal.",
    category: "Infraestructura",
    location: "Jalisco",
    year: "2020",
    area: "20",
    description: "Construcción de compuertas hidráulicas para desvío de agua.",
    image: "/images/imagencumicsa 4.png",
    status: "Completado",
  },
]

export function Projects() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    setPaused(true)
    setTimeout(() => setPaused(false), 6000)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
    setPaused(true)
    setTimeout(() => setPaused(false), 6000)
  }

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % projects.length)
    setPaused(true)
    setTimeout(() => setPaused(false), 6000)
  }

  const project = projects[current]

  return (
    <section id="proyectos" className="py-24 bg-[#0B1220] relative overflow-hidden">

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
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0B1220]/80 to-[#101B31] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Portafolio de obra
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Algunos de nuestros{" "}
            <span className="text-primary relative">
              trabajos
              <motion.span
                className="absolute left-0 bottom-1 w-full h-3 bg-primary/20 -z-10 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Cada proyecto refleja nuestro compromiso con la excelencia y la innovación en infraestructura.
          </p>
        </motion.div>

        {/* Carrusel — flechas a los lados, dots debajo */}
        <div className="max-w-4xl mx-auto">

          {/* Fila: flecha izq + card + flecha der */}
          <div className="flex items-center gap-4">

            {/* Flecha izquierda */}
            <button
              onClick={prev}
              className="shrink-0 text-white/40 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Card */}
            <div className="flex-1 relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.96, y: direction > 0 ? 30 : -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: direction > 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">

                    {/* Imagen */}
                    <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1220]/60 hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent md:hidden" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-8 flex flex-col justify-center">
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        className="text-primary/80 text-xs font-medium uppercase tracking-widest mb-3 block"
                      >
                        {project.category}
                      </motion.span>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug"
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.4 }}
                        className="text-white/60 text-sm leading-relaxed mb-6"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex flex-wrap gap-3 text-xs text-white/50 mb-6"
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-primary/70" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary/70" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-primary/70" />
                          {project.area} m²
                        </div>
                      </motion.div>

                      <motion.div
                        className="h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ originX: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Barra de progreso — pegada a la card sin espacio */}
              <div className="h-px bg-white/5">
                {!paused && (
                  <motion.div
                    key={current}
                    className="h-full bg-primary/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                    style={{ originX: 0 }}
                  />
                )}
              </div>
            </div>

            {/* Flecha derecha */}
            <button
              onClick={next}
              className="shrink-0 text-white/40 hover:text-primary transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

          </div>

          {/* Dots — centrados debajo de la card */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  width: i === current ? 32 : 12,
                  background: i === current ? "transparent" : "rgba(255,255,255,0.2)",
                }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    layoutId="activeDot"
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}