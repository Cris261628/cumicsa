"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const galleryImages = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  image: `/images/proyectos/imagenproyecto (${i + 1}).png`,
}))

// Duplicamos las imágenes para crear el efecto de loop infinito
const duplicatedImages = [...galleryImages, ...galleryImages]

export function SobreNosotros() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)
  const isUserScrollingRef = useRef(false)
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Detectar si la galería es visible en pantalla
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const SCROLL_SPEED = 0.5

    const animate = (currentTime: number) => {
      if (!container) return

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      if (!isPaused && !isUserScrollingRef.current && isVisible) {
        container.scrollTop += SCROLL_SPEED * (deltaTime / 16.67)

        const halfHeight = container.scrollHeight / 2

        if (container.scrollTop >= halfHeight) {
          container.scrollTop = container.scrollTop - halfHeight
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current)
      }
    }
  }, [isPaused, isVisible])

  // Detectar scroll manual
  const handleUserScroll = () => {
    isUserScrollingRef.current = true

    if (userScrollTimeoutRef.current) {
      clearTimeout(userScrollTimeoutRef.current)
    }

    userScrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false
    }, 1500)

    const container = scrollContainerRef.current

    if (container) {
      const halfHeight = container.scrollHeight / 2

      if (container.scrollTop >= halfHeight) {
        container.scrollTop = container.scrollTop - halfHeight
      } else if (container.scrollTop <= 0) {
        container.scrollTop = halfHeight
      }
    }
  }

  return (
    <section
      id="nosotros"
      className="py-24 relative overflow-hidden bg-[#0f172a]"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

        {/* Patrón industrial */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Somos una constructora comprometida con la calidad,
            la innovación y la excelencia en cada obra.
            Contamos con experiencia en proyectos de infraestructura,
            excavaciones y construcción industrial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Estadísticas */}
          <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
            {[
              { number: "+64", label: "Proyectos" },
              { number: "+35", label: "Años de experiencia" },
              { number: "100%", label: "Clientes satisfechos" },
              { number: "+50", label: "Trabajadores" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-2xl"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {item.number}
                </h3>

                <p className="text-gray-300 text-sm md:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Galería vertical */}
          <div className="relative order-1 lg:order-2">
            {/* Gradiente superior */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/70 to-transparent z-20 pointer-events-none" />

            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent z-20 pointer-events-none" />

            {/* Indicador */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isPaused ? 0 : 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>

                Desliza para ver más
              </motion.div>
            </motion.div>

            {/* Contenedor */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onScroll={handleUserScroll}
              onWheel={handleUserScroll}
              className="h-[420px] md:h-[550px] lg:h-[600px] overflow-y-auto scrollbar-hide rounded-3xl"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
              }}
            >
              <div className="flex flex-col gap-6 px-2">
                {duplicatedImages.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl w-full h-[280px] md:h-[350px] lg:h-[400px] flex-shrink-0 bg-black/20"
                  >
                    <img
                      src={item.image}
                      alt={`Proyecto ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                    {/* Número */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium opacity-90">
                        Proyecto {item.id}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ocultar scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}