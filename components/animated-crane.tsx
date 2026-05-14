"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimatedCraneProps {
  children: ReactNode
  direction?: "left" | "right"
  delay?: number
}

export function AnimatedCrane({ children, direction = "left", delay = 0 }: AnimatedCraneProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const cableLength = useTransform(scrollYProgress, [0, 0.5], [180, 55])

  return (
    <div ref={ref} className="relative">
      {/* Crane Structure: decorative, behind content (z-0), low opacity */}
      <div
        aria-hidden="true"
        className={`absolute top-0 ${direction === "left" ? "left-0" : "right-0"} z-0 pointer-events-none select-none opacity-25`}
      >
        <svg width="110" height="190" viewBox="0 0 120 200" className="text-secondary">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay }}
          >
            <rect x="50" y="20" width="20" height="180" fill="currentColor" />
            <line x1="50" y1="40" x2="70" y2="80" stroke="currentColor" strokeWidth="3" />
            <line x1="70" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="3" />
            <line x1="50" y1="80" x2="70" y2="120" stroke="currentColor" strokeWidth="3" />
            <line x1="70" y1="80" x2="50" y2="120" stroke="currentColor" strokeWidth="3" />
            <line x1="50" y1="120" x2="70" y2="160" stroke="currentColor" strokeWidth="3" />
            <line x1="70" y1="120" x2="50" y2="160" stroke="currentColor" strokeWidth="3" />
            <rect
              x={direction === "left" ? "60" : "0"}
              y="15"
              width="60"
              height="10"
              fill="currentColor"
            />
            <line
              x1="60"
              y1="0"
              x2={direction === "left" ? "110" : "10"}
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect x="45" y="20" width="30" height="25" fill="oklch(0.7 0.18 55)" rx="2" />
          </motion.g>

          <motion.line
            x1={direction === "left" ? "100" : "20"}
            y1="25"
            x2={direction === "left" ? "100" : "20"}
            y2={cableLength}
            stroke="oklch(0.45 0 0)"
            strokeWidth="2"
          />

          <motion.g style={{ y: useTransform(cableLength, (v) => v - 50) }}>
            <path
              d={`M${direction === "left" ? "95" : "15"},0 
                 L${direction === "left" ? "105" : "25"},0 
                 L${direction === "left" ? "105" : "25"},10 
                 Q${direction === "left" ? "105" : "25"},20 ${direction === "left" ? "100" : "20"},20 
                 Q${direction === "left" ? "95" : "15"},20 ${direction === "left" ? "95" : "15"},10 Z`}
              fill="oklch(0.7 0.18 55)"
            />
          </motion.g>
        </svg>
      </div>

      {/* Content always on top */}
      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ delay: delay, duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function CraneHook({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
