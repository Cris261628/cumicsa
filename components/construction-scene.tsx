"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState, type ReactNode } from "react"

/* ─────────────────────────────────────────────
   BUILDING UNDER CONSTRUCTION
   Draws a building floor-by-floor on scroll.
   Use as a decorative background element.
───────────────────────────────────────────── */
export function BuildingRise({
  floors = 6,
  className = "",
}: {
  floors?: number
  className?: string
}) {
  const FLOOR_H = 40
  const FLOOR_W = 120
  const WINDOW_COLS = 3
  const totalH = floors * FLOOR_H + 40 // +40 for roof

  return (
    <svg
      width={FLOOR_W + 40}
      height={totalH}
      viewBox={`0 0 ${FLOOR_W + 40} ${totalH}`}
      className={className}
      aria-hidden="true"
    >
      {/* Foundation */}
      <motion.rect
        x="10" y={totalH - 8}
        width={FLOOR_W + 20} height={8}
        fill="oklch(0.45 0.2 260)"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "left center" }}
      />

      {/* Floors — staggered bottom-up */}
      {Array.from({ length: floors }).map((_, i) => {
        const floorIndex = floors - 1 - i // bottom = 0
        const y = totalH - 8 - (floorIndex + 1) * FLOOR_H
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.35, ease: "easeOut" }}
          >
            {/* Floor slab */}
            <rect
              x="10" y={y + FLOOR_H - 4}
              width={FLOOR_W + 20} height={4}
              fill="oklch(0.45 0.2 260)"
            />
            {/* Column left */}
            <rect
              x="10" y={y}
              width={6} height={FLOOR_H}
              fill="oklch(0.45 0.2 260)"
            />
            {/* Column right */}
            <rect
              x={FLOOR_W + 24} y={y}
              width={6} height={FLOOR_H}
              fill="oklch(0.45 0.2 260)"
            />
            {/* Windows */}
            {Array.from({ length: WINDOW_COLS }).map((_, w) => (
              <motion.rect
                key={w}
                x={22 + w * 36} y={y + 7}
                width={24} height={22}
                rx={2}
                fill={floorIndex % 2 === 0 ? "oklch(0.7 0.18 55)" : "oklch(0.6 0.15 55)"}
                fillOpacity={0.85}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + w * 0.07 + 0.2, duration: 0.25 }}
                style={{ transformOrigin: `${22 + w * 36 + 12}px ${y + 18}px` }}
              />
            ))}
          </motion.g>
        )
      })}

      {/* Roof / top beam */}
      <motion.rect
        x="10" y={totalH - 8 - floors * FLOOR_H - 10}
        width={FLOOR_W + 20} height={10}
        fill="oklch(0.7 0.18 55)"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: floors * 0.12 + 0.1, duration: 0.4 }}
        style={{ transformOrigin: "left center" }}
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   SCAFFOLD — animated vertical scaffold/frame
   Great side decoration for any section.
───────────────────────────────────────────── */
export function Scaffold({
  height = 220,
  className = "",
}: {
  height?: number
  className?: string
}) {
  const posts = 3
  const spacing = 40

  return (
    <svg
      width={posts * spacing + 20}
      height={height}
      viewBox={`0 0 ${posts * spacing + 20} ${height}`}
      className={className}
      aria-hidden="true"
    >
      {/* Vertical poles */}
      {Array.from({ length: posts }).map((_, i) => (
        <motion.rect
          key={i}
          x={10 + i * spacing} y={0}
          width={4} height={height}
          fill="oklch(0.45 0.2 260)"
          fillOpacity={0.6}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{ transformOrigin: `${10 + i * spacing + 2}px ${height}px` }}
        />
      ))}

      {/* Horizontal planks — every 30px */}
      {Array.from({ length: Math.floor(height / 30) }).map((_, i) => (
        <motion.rect
          key={i}
          x={10} y={i * 30 + 14}
          width={(posts - 1) * spacing + 4} height={6}
          rx={2}
          fill="oklch(0.7 0.18 55)"
          fillOpacity={0.7}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
          style={{ transformOrigin: "left center" }}
        />
      ))}

      {/* Diagonal braces */}
      {Array.from({ length: Math.floor(height / 30) - 1 }).map((_, i) => (
        <motion.line
          key={i}
          x1={i % 2 === 0 ? 12 : 10 + (posts - 1) * spacing}
          y1={i * 30 + 20}
          x2={i % 2 === 0 ? 10 + (posts - 1) * spacing : 12}
          y2={(i + 1) * 30 + 20}
          stroke="oklch(0.45 0.2 260)"
          strokeWidth={2}
          strokeOpacity={0.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
        />
      ))}
    </svg>
  )
}

/* ─────────────────────────────────────────────
   BLUEPRINT GRID — animated blueprint lines
   Background texture for sections
───────────────────────────────────────────── */
export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="oklch(0.45 0.2 260)"
            strokeWidth="0.4"
            strokeOpacity="0.3"
          />
        </pattern>
        <pattern id="bp-grid-large" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="url(#bp-grid)" />
          <path
            d="M 200 0 L 0 0 0 200"
            fill="none"
            stroke="oklch(0.45 0.2 260)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </pattern>
      </defs>
      <motion.rect
        width="100%" height="100%"
        fill="url(#bp-grid-large)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   REVEAL LIFT — replaces AnimatedCrane wrapper
   Content slides up as if being hoisted into place.
   Completely clean — no SVG crane overlapping.
───────────────────────────────────────────── */
export function RevealLift({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   HARD HAT ICON — small animated accent
───────────────────────────────────────────── */
export function HardHatAccent({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ rotate: [0, -8, 8, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg width="36" height="28" viewBox="0 0 60 44" fill="none">
        <ellipse cx="30" cy="40" rx="28" ry="4" fill="oklch(0.7 0.18 55)" fillOpacity="0.4" />
        <path
          d="M6 36 Q4 20 30 12 Q56 20 54 36"
          fill="oklch(0.7 0.18 55)"
          stroke="oklch(0.6 0.15 55)"
          strokeWidth="2"
        />
        <ellipse cx="30" cy="12" rx="14" ry="5" fill="oklch(0.75 0.18 55)" />
        <rect x="2" y="34" width="56" height="6" rx="3" fill="oklch(0.65 0.16 55)" />
        <rect x="22" y="6" width="16" height="8" rx="2" fill="oklch(0.75 0.18 55)" />
      </svg>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   WELDING SPARK — animated spark burst
   Small decorative accent
───────────────────────────────────────────── */
export function WeldingSpark({ className = "" }: { className?: string }) {
  const sparks = [
    { angle: 0,   len: 12 },
    { angle: 45,  len: 8  },
    { angle: 90,  len: 14 },
    { angle: 135, len: 9  },
    { angle: 180, len: 11 },
    { angle: 225, len: 7  },
    { angle: 270, len: 13 },
    { angle: 315, len: 10 },
  ]

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg width="40" height="40" viewBox="-20 -20 40 40">
        {sparks.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180
          const x2 = Math.cos(rad) * s.len
          const y2 = Math.sin(rad) * s.len
          return (
            <motion.line
              key={i}
              x1="0" y1="0"
              x2={x2} y2={y2}
              stroke="oklch(0.7 0.18 55)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, delay: i * 0.08, repeat: Infinity, repeatDelay: 0.4 }}
            />
          )
        })}
        <circle cx="0" cy="0" r="3" fill="oklch(0.8 0.2 55)" />
      </svg>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   PROGRESS BAR — construction progress strip
───────────────────────────────────────────── */
export function ConstructionProgress({
  label,
  percent,
  delay = 0,
}: {
  label: string
  percent: number
  delay?: number
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-medium mb-1">
        <span className="text-foreground">{label}</span>
        <span className="text-primary">{percent}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
