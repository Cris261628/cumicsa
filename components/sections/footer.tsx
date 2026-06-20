"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  empresa: [
    { name: "Inicio", href: "#inicio" },
    { name: "Visión y Misión", href: "#vision-mision" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Normativas", href: "#normativas" },
  ],
  servicios: [
    { name: "Construcción Civil", href: "#servicios" },
    { name: "Diseño y Planeación", href: "#servicios" },
    { name: "Supervisión de Obra", href: "#servicios" },
    { name: "Consultoría", href: "#servicios" },
  ],
  contacto: [
    { name: "+52 4436904931", href: "#" },
    { name: "cumicsaconstrucciones@gmail.com", href: "mailto:cumicsaconstrucciones@gmail.com" },
    { name: "Morelia, Michoacan", href: "#contacto" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/cumicsa/?locale=es_LA" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/cumicsa.morelia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
]

export function Footer() {
  return (
    <footer className="bg-[#080e1a] relative overflow-hidden">

      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Separador superior con gradiente */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="CUMICSA Logo" width={50} height={50} />
              <span className="text-xl font-bold text-white">CUMICSA</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Más de 35 años construyendo el futuro con excelencia, innovación y
              compromiso con nuestros clientes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CUMICSA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
          </div>
        </motion.div>

      </div>
    </footer>
  )
}