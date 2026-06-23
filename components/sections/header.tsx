"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Ítems de ancla (sección en la home)
const anchorItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Visión y Misión", href: "#vision-mision" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
]

// Ítem de ruta separada
const routeItems = [
  { name: "Trayectoria", href: "/trayectoria" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      for (const item of [...anchorItems].reverse()) {
        const id = item.href.replace("#", "")
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  // En páginas internas el header siempre va opaco
  const headerBg = (!isHome || isScrolled)
    ? "bg-[#0B1220]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/5"
    : "bg-transparent"

  const allItems = [
    ...anchorItems.map(i => ({ ...i, isRoute: false })),
    ...routeItems.map(i => ({ ...i, isRoute: true })),
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="CUMICSA Logo" width={50} height={50} className="object-contain" />
            <span className="text-xl font-bold text-white">CUMICSA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {allItems.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = item.isRoute
                ? pathname === item.href
                : (isHome && activeSection === sectionId)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-all duration-300 ${isActive
                        ? "text-primary drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]"
                        : "text-white/60 group-hover:text-white"
                      }`}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(245,158,11,1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="h-10 px-6 rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all text-sm"
            >
              <Link href={isHome ? "#contacto" : "/#contacto"}>Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1220]/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {allItems.map((item) => {
                const sectionId = item.href.replace("#", "")
                const isActive = item.isRoute
                  ? pathname === item.href
                  : (isHome && activeSection === sectionId)

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? "text-primary" : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(245,158,11,1)]" />
                    )}
                    <span className={isActive ? "drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" : ""}>
                      {item.name}
                    </span>
                  </Link>
                )
              })}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                >
                  <Link href={isHome ? "#contacto" : "/#contacto"} onClick={() => setIsMobileMenuOpen(false)}>
                    Contáctanos
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}