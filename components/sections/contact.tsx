"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-3xl bg-card animate-pulse flex flex-col items-center justify-center text-muted-foreground">
      <Building className="w-14 h-14 mb-4 text-primary/60" />
      <p className="text-lg font-medium text-foreground">Cargando mapa...</p>
    </div>
  ),
})

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal #123, Col. Centro, Ciudad de México, CP 06000",
    },
    { icon: Phone, title: "Teléfono", content: "+52 (55) 1234-5678" },
    { icon: Mail, title: "Email", content: "contacto@cumicsa.com" },
    { icon: Clock, title: "Horario", content: "Lunes a Viernes: 8:00 - 18:00" },
  ]

  return (
    <section id="contacto" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos listos para hacer realidad tu próximo proyecto.
            Contáctanos y recibe una cotización sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mapa real */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border h-[420px]"
          >
            <ContactMap />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="CUMICSA Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">CUMICSA</h3>
                <p className="text-muted-foreground">Construcción e Infraestructura</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}