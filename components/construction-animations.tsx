"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingHardHat() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute"
    >
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <ellipse cx="30" cy="35" rx="30" ry="5" fill="oklch(0.7 0.18 55)" />
        <path
          d="M5 35 Q5 15 30 10 Q55 15 55 35"
          fill="oklch(0.7 0.18 55)"
          stroke="oklch(0.6 0.15 55)"
          strokeWidth="2"
        />
        <ellipse cx="30" cy="10" rx="15" ry="5" fill="oklch(0.75 0.18 55)" />
      </svg>
    </motion.div>
  )
}

export function AnimatedBricks() {
  const bricks = Array.from({ length: 6 })

  return (
    <div className="flex flex-col gap-1">
      {bricks.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="flex gap-1"
        >
          <div
            className={`h-4 ${i % 2 === 0 ? "w-12" : "w-8"} rounded-sm bg-primary`}
          />
          <div
            className={`h-4 ${i % 2 === 0 ? "w-8" : "w-12"} rounded-sm bg-primary/80`}
          />
          <div className="h-4 w-12 rounded-sm bg-primary" />
        </motion.div>
      ))}
    </div>
  )
}

export function ConstructionWorker() {
  return (
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
        {/* Hard Hat */}
        <ellipse cx="25" cy="8" rx="12" ry="4" fill="oklch(0.7 0.18 55)" />
        <path d="M13 8 Q13 2 25 2 Q37 2 37 8" fill="oklch(0.7 0.18 55)" />
        {/* Head */}
        <circle cx="25" cy="15" r="8" fill="oklch(0.8 0.05 55)" />
        {/* Body */}
        <rect x="17" y="23" width="16" height="25" rx="2" fill="oklch(0.45 0.2 260)" />
        {/* Arms */}
        <motion.rect
          x="8"
          y="25"
          width="9"
          height="20"
          rx="2"
          fill="oklch(0.45 0.2 260)"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ originX: 1, originY: 0 }}
        />
        <rect x="33" y="25" width="9" height="20" rx="2" fill="oklch(0.45 0.2 260)" />
        {/* Legs */}
        <rect x="18" y="48" width="6" height="25" rx="2" fill="oklch(0.35 0.05 260)" />
        <rect x="26" y="48" width="6" height="25" rx="2" fill="oklch(0.35 0.05 260)" />
        {/* Boots */}
        <rect x="16" y="70" width="10" height="8" rx="2" fill="oklch(0.3 0.02 55)" />
        <rect x="24" y="70" width="10" height="8" rx="2" fill="oklch(0.3 0.02 55)" />
      </svg>
    </motion.div>
  )
}

export function RotatingGear({ size = 60, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay }}
    >
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="20" fill="oklch(0.45 0.2 260)" />
        <circle cx="30" cy="30" r="8" fill="oklch(0.55 0.2 260)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="26"
            y="5"
            width="8"
            height="12"
            rx="2"
            fill="oklch(0.45 0.2 260)"
            transform={`rotate(${angle} 30 30)`}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export function BuildingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const floors = 5
  const filledFloors = Math.floor((progress / 100) * floors)

  return (
    <div className="relative w-32 h-48">
      {/* Building frame */}
      <div className="absolute inset-0 border-4 border-secondary rounded-t-lg">
        {Array.from({ length: floors }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i < filledFloors ? 1 : 0.2 }}
            className={`h-1/5 border-b border-secondary/50 ${
              i < filledFloors ? "bg-primary/30" : "bg-muted/20"
            }`}
          >
            {/* Windows */}
            <div className="flex justify-around items-center h-full px-2">
              {[1, 2, 3].map((w) => (
                <motion.div
                  key={w}
                  initial={{ scale: 0 }}
                  animate={{ scale: i < filledFloors ? 1 : 0 }}
                  transition={{ delay: w * 0.1 }}
                  className="w-4 h-4 bg-secondary/60 rounded-sm"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Progress indicator */}
      <div className="absolute -bottom-8 left-0 right-0 text-center">
        <span className="text-sm font-medium text-muted-foreground">{progress}%</span>
      </div>
    </div>
  )
}

export function MovingTruck() {
  return (
    <motion.div
      animate={{ x: [-200, 200] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0"
    >
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
        {/* Truck body */}
        <rect x="30" y="10" width="60" height="30" rx="2" fill="oklch(0.7 0.18 55)" />
        {/* Cabin */}
        <rect x="0" y="15" width="35" height="25" rx="2" fill="oklch(0.45 0.2 260)" />
        {/* Window */}
        <rect x="5" y="18" width="20" height="12" rx="1" fill="oklch(0.8 0.1 260)" />
        {/* Wheels */}
        <circle cx="20" cy="42" r="8" fill="oklch(0.25 0 0)" />
        <circle cx="20" cy="42" r="4" fill="oklch(0.4 0 0)" />
        <circle cx="75" cy="42" r="8" fill="oklch(0.25 0 0)" />
        <circle cx="75" cy="42" r="4" fill="oklch(0.4 0 0)" />
        {/* Load */}
        <rect x="35" y="0" width="25" height="12" rx="1" fill="oklch(0.65 0.15 55)" />
        <rect x="62" y="2" width="20" height="10" rx="1" fill="oklch(0.6 0.12 55)" />
      </svg>
    </motion.div>
  )
}
