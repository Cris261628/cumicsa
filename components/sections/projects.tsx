"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"

// ─── Datos de proyectos ───────────────────────────────────────────────────────
// INSTRUCCIONES: Reemplaza cada "imgUrl" con la URL de Cloudflare de tu imagen.
// Ejemplo: "https://imagedelivery.net/TU_ACCOUNT_HASH/nombre-imagen/public"
// Los títulos y años vienen del curriculum oficial de CUMICSA.

const projects = [
  {
    id: 1,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964381/Recubrimientohidrulico_1_v5w1se.png",   // ← Imagen 1
    title: "Recubrimiento de concreto hidráulico en canal de descarga, Túnel Emisor Poniente, Cuautitlán Izcalli, ",
    year: "2018",
  },
  {
    id: 2,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964382/Recubrimientohidrulico_2_ibgda3.png",   // ← Imagen 2
    title: "Recubrimiento de concreto hidráulico en canal de descarga, Túnel Emisor Poniente, Cuautitlán Izcalli,",
    year: "2018",
  },
  {
    id: 3,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964383/Recubrimientohidrulico_3_cwh4c7.png",   // ← Imagen 3
    title: "Recubrimiento de concreto hidráulico en canal de descarga, Túnel Emisor Poniente, Cuautitlán Izcalli",
    year: "2018",
  },
  {
    id: 4,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964383/Recubrimientohidrulico_4_ze4fwi.png",   // ← Imagen 4
    title: "Recubrimiento de concreto hidráulico en canal de descarga, Túnel Emisor Poniente, Cuautitlán Izcalli",
    year: "2018",
  },
  {
    id: 5,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964384/Recubrimientohidrulico_5_iuahnn.png",   // ← Imagen 5
    title: "Recubrimiento de concreto hidráulico en canal de descarga, Túnel Emisor Poniente, Cuautitlán Izcalli",
    year: "2018",
  },
  {
    id: 6,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964380/L%C3%ADnea_de_conducci%C3%B3n_1_beb8em.png",   // ← Imagen 6
    title: "Línea de conducción, Av. Villas del Pedregal, OOAPAS Morelia",
    year: "2022",
  },
  {
    id: 7,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964381/L%C3%ADnea_de_conducci%C3%B3n_2_abzxwj.png",   // ← Imagen 7
    title: "Línea de conducción, Av. Villas del Pedregal, OOAPAS Morelia",
    year: "2022",
  },
  {
    id: 8,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964380/Limpieza_Dren_2_j0vble.png",   // ← Imagen 8
    title: "Limpieza Dren Eréndira, Morelia",
    year: "2006",
  },
  {
    id: 9,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964379/Limpieza_Dren_1_x2axe2.png",   // ← Imagen 9
    title: "Limpieza Dren La Soledad, Morelia",
    year: "2006",
  },
  {
    id: 10,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964372/desboque_1_kwgfz5.png",   // ← Imagen 10
    title: "Conservación obra civil y compuertas, Distrito de Riego 087",
    year: "2020",
  },
  {
    id: 11,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964373/desboque_2_ssmmaa.png",   // ← Imagen 11
    title: "Conservación obra civil y compuertas, Distrito de Riego 087",
    year: "2020",
  },
  {
    id: 12,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964373/desboque_3_jslu1c.png",   // ← Imagen 12
    title: "Conservación obra civil y compuertas, Distrito de Riego 087",
    year: "2020",
  },
  {
    id: 13,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964373/Conservaci%C3%B3n_general_1_a4ozyv.png",   // ← Imagen 13
    title: "Conservación general a la Presa de Cointzio, Morelia, Michoacán",
    year: "2022",
  },
  {
    id: 14,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964366/compuertaradial_1_fxccve.png",   // ← Imagen 14
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 15,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964365/compuertaradial_2_bz7cux.png",   // ← Imagen 15
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 16,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964366/compuertaradial_3_lfdtts.png",   // ← Imagen 16
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 17,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964366/compuertaradial_4_o7n6yu.png",   // ← Imagen 17
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 18,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964367/compuertaradial_5_bma950.png",   // ← Imagen 18
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 19,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964368/compuertaradial_6_d5kqsw.png",   // ← Imagen 19
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 20,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964368/compuertaradial_7_gpwar4.png",   // ← Imagen 20
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 21,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964369/compuertaradial_8_mdnj39.png",   // ← Imagen 21
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 22,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964369/compuertaradial_9_uysyh9.png",   // ← Imagen 22
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 23,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964370/compuertaradial_10_lm5yob.png",   // ← Imagen 23
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 24,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964371/compuertaradial_11_ml9ho2.png",   // ← Imagen 24
    title: "Rehabilitación de mecanismos de izaje de compuertas radiales, Presa Cajón de Peña, Tomatlán, Jalisco",
    year: "2021",
  },
  {
    id: 25,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964364/carpeta_asfaltica_1_s39wxn.png",   // ← Imagen 25
    title: "Camino La Herradura, José Sixto Verduzco",
    year: "2002",
  },
  {
    id: 26,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964365/carpeta_asfaltica_2_tktdvg.png",   // ← Imagen 25
    title: "Camino La Herradura, José Sixto Verduzco",
    year: "2002",
  },
  {
    id: 27,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964365/carpeta_asfaltica_3_ln8sxc.png",   // ← Imagen 25
    title: "Camino La Herradura, José Sixto Verduzco",
    year: "2002",
  },
  {
    id: 28,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964374/img_normal_vxuqjv.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 29,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_2_vgixq6.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 30,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_3_uqubcs.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 31,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_4_vporm3.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 32,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_5_rq6yol.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 33,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_6_lp4t9w.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 34,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/imgnormal_7_vlvjgf.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
  {
    id: 35,
    imgUrl: "https://res.cloudinary.com/diz9yyh6r/image/upload/v1781964378/imgnormal_sguhve.png",
    title: "CUMICSA construyendo el futuro",
    year: "",
  },
]


// ─── Card Fan Carousel ────────────────────────────────────────────────────────
const MAX_VISIBLE = 9
const MAX_VISIBLE_MOBILE = 3
const HALF = Math.floor(MAX_VISIBLE / 2)
const HALF_MOBILE = Math.floor(MAX_VISIBLE_MOBILE / 2)

const FAN_POSITIONS = [
  { rot: -32, scale: 0.62, x: -28, y: 14.0, zIndex: 1 },
  { rot: -23, scale: 0.72, x: -21, y: 9.0, zIndex: 2 },
  { rot: -15, scale: 0.81, x: -14, y: 5.5, zIndex: 3 },
  { rot: -7, scale: 0.91, x: -7, y: 2.0, zIndex: 4 },
  { rot: 0, scale: 1.00, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.91, x: 7, y: 2.0, zIndex: 4 },
  { rot: 15, scale: 0.81, x: 14, y: 5.5, zIndex: 3 },
  { rot: 23, scale: 0.72, x: 21, y: 9.0, zIndex: 2 },
  { rot: 32, scale: 0.62, x: 28, y: 14.0, zIndex: 1 },
]

// 3-card fan positions for mobile — amplio y bien espaciado
const FAN_POSITIONS_MOBILE = [
  { rot: -18, scale: 0.78, x: -12, y: 5.0, zIndex: 3 },
  { rot: 0, scale: 1.00, x: 0, y: 0.0, zIndex: 10 },
  { rot: 18, scale: 0.78, x: 12, y: 5.0, zIndex: 3 },
]

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.38
  if (width < 640) return 0.50
  if (width < 768) return 0.64
  if (width < 1024) return 0.82
  return 1.5
}

function isMobileWidth(width: number) {
  return width < 768
}

function getHeightMultiplier() {
  const idealPx = 520
  const available = window.innerHeight * 0.7
  if (available >= idealPx) return 1
  return available / idealPx
}

function getSlotConfig(slot: number, mobile: boolean) {
  if (mobile) return FAN_POSITIONS_MOBILE[slot] ?? FAN_POSITIONS_MOBILE[HALF_MOBILE]
  return FAN_POSITIONS[slot] ?? FAN_POSITIONS[HALF]
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/50 cursor-pointer shrink-0 z-30 outline-none hover:border-primary/50 hover:text-primary active:opacity-70 transition-colors duration-300 w-10 h-10 md:w-12 md:h-12"

interface CardData {
  imgUrl: string
  title: string
  year: string
}

interface FanCarouselProps {
  cards: CardData[]
}

function FanCarousel({ cards }: FanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)
  const hasEntered = useRef(false)
  const directionRef = useRef<"left" | "right" | null>(null)
  const prevVisible = useRef<Set<number>>(new Set())
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(isMobileWidth(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxVisible = isMobile ? MAX_VISIBLE_MOBILE : MAX_VISIBLE
  const half = isMobile ? HALF_MOBILE : HALF

  const totalCards = cards.length
  const [centerIndex, setCenterIndex] = useState(half)

  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>()
    for (let slot = 0; slot < maxVisible; slot++) {
      map.set(((center + slot - half) % totalCards + totalCards) % totalCards, slot)
    }
    return map
  }, [totalCards, maxVisible, half])

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current) return
    isAnimating.current = true
    directionRef.current = direction
    setActiveCard(null)
    setCenterIndex(prev =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    )
  }, [totalCards])

  useEffect(() => {
    const run = async () => {
      const gsapMod = await import("gsap")
      const gsap = gsapMod.default

      const container = containerRef.current
      if (!container || !totalCards) return

      const cardEls = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"))
      if (!cardEls.length) return

      const visibleMap = getVisibleMap(centerIndex)
      const prevVis = prevVisible.current
      const direction = directionRef.current
      const isFirst = !hasEntered.current
      const mult = getResponsiveMultiplier(window.innerWidth)
      const hMult = getHeightMultiplier()
      const mobile = isMobileWidth(window.innerWidth)
      const centerSlot = mobile ? HALF_MOBILE : HALF

      if (isFirst) isAnimating.current = true

      let done = 0
      const total = visibleMap.size
      const onDone = () => { if (++done >= total) { isAnimating.current = false; if (isFirst) hasEntered.current = true } }

      cardEls.forEach((card, idx) => {
        const slot = visibleMap.get(idx)
        const wasVis = prevVis.has(idx)

        if (slot !== undefined) {
          const { x, y, rot, scale, zIndex } = getSlotConfig(slot, mobile)
          const target = { x: `${x * mult}rem`, y: `${y * hMult}rem`, rotation: rot, scale, opacity: 1, zIndex }

          if (isFirst) {
            gsap.set(card, { x: 0, y: `${10 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 })
            gsap.to(card, { ...target, duration: 1.1, ease: "elastic.out(1.05,.78)", delay: 0.12 + slot * 0.07, onComplete: onDone })
          } else if (!wasVis) {
            const ex = direction === "right" ? 36 : -36
            gsap.set(card, { x: `${ex}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 28 : -28, scale: 0.5, opacity: 0 })
            gsap.to(card, { ...target, duration: 0.55, ease: "power2.out", onComplete: onDone })
          } else {
            gsap.to(card, { ...target, duration: 0.48, ease: "power2.out", onComplete: onDone })
          }
        } else if (wasVis) {
          const ex = direction === "right" ? -36 : 36
          gsap.to(card, { x: `${ex}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -28 : 28, duration: 0.38, ease: "power2.in", zIndex: 0 })
        } else if (isFirst) {
          gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 })
        }
      })

      prevVisible.current = new Set(visibleMap.keys())

      // ── Hover ──────────────────────────────────────────────────────────────
      const visEntries: { el: HTMLElement; slot: number }[] = []
      cardEls.forEach((el, i) => { const s = visibleMap.get(i); if (s !== undefined) visEntries.push({ el, slot: s }) })
      visEntries.sort((a, b) => a.slot - b.slot)

      let activeSlot: number | null = null
      let leaveTimer: NodeJS.Timeout | null = null

      const updateHover = (hovSlot: number | null) => {
        const m = getResponsiveMultiplier(window.innerWidth)
        const hM = getHeightMultiplier()
        const mob = isMobileWidth(window.innerWidth)
        const cSlot = mob ? HALF_MOBILE : HALF
        visEntries.forEach(({ el, slot }) => {
          const base = getSlotConfig(slot, mob)
          let tx = base.x * m, ty = base.y * hM, tr = base.rot, ts = base.scale, delay = 0
          if (hovSlot !== null) {
            const dist = Math.abs(slot - hovSlot)
            delay = dist * 0.02
            if (slot === hovSlot) {
              ty -= 2.5 * hM; ts *= 1.10
            } else {
              const norm = cSlot > 0 ? (slot - cSlot) / cSlot : 0
              const push = 8 * (1 - Math.abs(norm)) * (1 + 0.2 * Math.max(0, 3 - dist))
              if (slot < hovSlot) { tx -= push * m; tr -= 3 / (dist + 1) }
              else { tx += push * m; tr += 3 / (dist + 1) }
            }
          } else {
            delay = Math.abs(slot - cSlot) * 0.02
          }
          gsap.to(el, { x: `${tx}rem`, y: `${ty}rem`, rotation: tr, scale: ts, duration: 0.48, delay, ease: "elastic.out(1,.75)", overwrite: "auto" })
          gsap.set(el, { zIndex: base.zIndex })
        })
      }

      const handlers = visEntries.map(({ el, slot }) => {
        const fn = () => {
          if (isAnimating.current) return
          if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null }
          if (activeSlot !== slot) { activeSlot = slot; updateHover(slot) }
          const ci = [...visibleMap.entries()].find(([, s]) => s === slot)?.[0]
          if (ci !== undefined) setActiveCard(ci)
        }
        el.addEventListener("mouseenter", fn)
        return { el, fn }
      })

      const onLeave = () => {
        if (isAnimating.current) return
        if (leaveTimer) clearTimeout(leaveTimer)
        leaveTimer = setTimeout(() => { activeSlot = null; updateHover(null); setActiveCard(null) }, 60)
      }
      container.addEventListener("mouseleave", onLeave)

      const onResize = () => { if (!isAnimating.current) updateHover(activeSlot) }
      window.addEventListener("resize", onResize)

      return () => {
        handlers.forEach(({ el, fn }) => el.removeEventListener("mouseenter", fn))
        container.removeEventListener("mouseleave", onLeave)
        window.removeEventListener("resize", onResize)
        if (leaveTimer) clearTimeout(leaveTimer)
      }
    }

    const cleanup = run()
    return () => { cleanup.then(fn => fn?.()) }
  }, [centerIndex, totalCards, getVisibleMap, isMobile])

  const chevron = (dir: "left" | "right") => (
    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  )

  if (!totalCards) return null

  const info = activeCard !== null ? cards[activeCard] : null

  return (
    <div className="flex flex-col items-center w-full">

      {/* ── Título pegado visualmente al abanico ── */}
      <div className="text-center w-full mb-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3">
          Algunos de nuestros{" "}
          <span className="text-primary relative inline-block">
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
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg mb-0">
          Más de 35 años ejecutando proyectos de infraestructura, obra civil e hidráulica en todo México.
        </p>
      </div>

      {/* ── Abanico con flechas a los lados ── */}
      <div className="relative flex items-center justify-center w-full md:-mt-44">

        {/* Flecha izquierda */}
        <button
          className={`${ARROW_CLASSES} absolute left-0 md:left-2 top-1/2 -translate-y-1/2`}
          style={{ zIndex: 40 }}
          onClick={() => cycle("left")}
          aria-label="Anterior"
        >
          {chevron("left")}
        </button>

        {/* Fan container */}
        <div
          ref={containerRef}
          className="relative flex justify-center items-end w-full"
          style={{ height: isMobile ? "clamp(160px, 45vw, 220px)" : "clamp(400px, 60vw, 680px)" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="fan-card absolute cursor-pointer"
              style={{
                width: isMobile ? "clamp(80px, 24vw, 110px)" : "clamp(300px, 36vw, 460px)",
                height: isMobile ? "clamp(110px, 34vw, 160px)" : "clamp(230px, 28vw, 390px)",
                borderRadius: "1rem",
                overflow: "hidden",
                willChange: "transform",
                boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={card.imgUrl}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white/90 text-xs font-bold tracking-widest">{card.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          className={`${ARROW_CLASSES} absolute right-0 md:right-2 top-1/2 -translate-y-1/2`}
          style={{ zIndex: 40 }}
          onClick={() => cycle("right")}
          aria-label="Siguiente"
        >
          {chevron("right")}
        </button>
      </div>

      {/* ── Descripción al hacer hover — más separada del fan ── */}
      <div className="relative w-full max-w-lg mx-auto mt-10 md:mt-12 h-16 px-10">
        {info ? (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">
              {info.year}
            </span>
            <h3 className="text-white font-bold text-xs md:text-sm leading-snug line-clamp-2">
              {info.title}
            </h3>
          </motion.div>
        ) : (
          <p className="absolute inset-0 flex items-center justify-center text-white/25 text-xs md:text-sm italic text-center px-4">
            Pasa el cursor sobre un proyecto para ver los detalles
          </p>
        )}
      </div>

      {/* ── Dots de paginación ── */}
      <div className="flex items-center justify-center gap-1 mt-3 z-30 w-full px-12 overflow-hidden">
        <div className="flex items-center gap-1 flex-wrap justify-center max-w-[240px] md:max-w-none">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 shrink-0 ${i === centerIndex ? "bg-primary w-4 h-1.5" : "bg-white/20 w-1.5 h-1.5"
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

// ─── Sección principal ────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-24 bg-[#0B1220] relative overflow-hidden">

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
        {/* El título ahora vive dentro del FanCarousel */}
        <FanCarousel cards={projects} />
      </div>
    </section>
  )
}