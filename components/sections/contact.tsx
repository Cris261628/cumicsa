"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-3xl bg-white/5 animate-pulse flex flex-col items-center justify-center">
      <Building className="w-14 h-14 mb-4 text-primary/60" />
      <p className="text-lg font-medium text-white/60">Cargando mapa...</p>
    </div>
  ),
})

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av.Francisco y Madero #7565, Col.Sn Pascual, Morelia Michoacan, CP 58337",
    },
    { icon: Phone, title: "Teléfono", content: "+52 4436904931" },
    { icon: Mail, title: "Email", content: "cumicsaconstrucciones@gmail.com" },
    { icon: Clock, title: "Horario", content: "Lunes a Viernes: 8:00 - 18:00" },
  ]

  return (
    <section id="contacto" className="py-24 bg-[#0B1220] relative overflow-hidden">

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

      {/* Fondo: gradient overlay */}
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
            Hablemos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Estamos listos para hacer realidad tu próximo proyecto.
            Contáctanos y recibe una cotización sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden border border-white/10 h-[420px]"
          >
            <ContactMap />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Logo + nombre */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Image
                  src="/images/logo.png"
                  alt="CUMICSA Logo"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">CUMICSA CONSRUCCIONES</h3>
              </div>
            </div>

            {/* Cards de contacto */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                             hover:border-primary/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">{info.title}</h4>
                    <p className="text-white/55 text-sm">{info.content}</p>
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