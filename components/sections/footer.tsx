"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

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
    { name: "+52 (55) 1234-5678", href: "tel:+525512345678" },
    { name: "contacto@cumicsa.com", href: "mailto:contacto@cumicsa.com" },
    { name: "Ciudad de México, México", href: "#contacto" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20-%20copia-b6zkgmEZuVa1sp0MQF2h4tTWE1uGh3.png"
                alt="CUMICSA Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold">CUMICSA</span>
            </div>
            <p className="text-white/70 mb-6">
              Más de 20 años construyendo el futuro con excelencia, innovación y
              compromiso con nuestros clientes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Empresa Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
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
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} CUMICSA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
