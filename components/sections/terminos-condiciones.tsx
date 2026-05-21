"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosCondiciones() {
    const sections = [
        {
            title: "1. Aceptación de los Términos",
            content:
                "Al acceder y utilizar el sitio web de CUMICSA Construcciones S.A. de C.V. (en adelante \"CUMICSA\"), usted acepta cumplir y estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos no hacer uso del sitio. El uso continuado del sitio constituye la aceptación de cualquier modificación que se realice a estos términos.",
        },
        {
            title: "2. Información de la Empresa",
            content:
                "CUMICSA Construcciones S.A. de C.V. es una empresa constructora con domicilio en Morelia, Michoacán, México. Con más de 35 años de experiencia en el sector de la construcción, infraestructura, excavaciones y construcción industrial, ofrecemos servicios profesionales de ingeniería y construcción.",
        },
        {
            title: "3. Uso del Sitio Web",
            content:
                "El contenido de este sitio web es de carácter informativo. Usted se compromete a utilizar el sitio únicamente con fines lícitos y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de cualquier otro usuario. Queda prohibido el uso del sitio para transmitir material difamatorio, ofensivo, o que de cualquier forma sea ilegal o contrario a las leyes aplicables en los Estados Unidos Mexicanos.",
        },
        {
            title: "4. Propiedad Intelectual",
            content:
                "Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, íconos, imágenes, fotografías de proyectos, videos, diseños y software, es propiedad de CUMICSA Construcciones S.A. de C.V. o se usa con autorización de sus respectivos titulares, y está protegido por las leyes de propiedad intelectual e industrial de México y tratados internacionales aplicables. Queda prohibida su reproducción, distribución, modificación o uso sin autorización previa y por escrito.",
        },
        {
            title: "5. Servicios y Cotizaciones",
            content:
                "La información sobre servicios de construcción, proyectos y capacidades presentada en este sitio es de carácter informativo y no constituye una oferta vinculante. Las cotizaciones formales serán proporcionadas de manera particular tras una evaluación específica de cada proyecto. Los precios, plazos y condiciones pueden variar según las características y alcance de cada obra. CUMICSA se reserva el derecho de modificar las especificaciones de sus servicios en cualquier momento.",
        },
        {
            title: "6. Proyectos y Galería",
            content:
                "Las imágenes y descripciones de proyectos mostrados en el sitio representan obras ejecutadas por CUMICSA o en proceso de desarrollo. Las fotografías son de carácter ilustrativo y pueden no reflejar el estado actual de las obras. Queda estrictamente prohibido el uso de estas imágenes sin autorización expresa por escrito de CUMICSA.",
        },
        {
            title: "7. Formularios de Contacto",
            content:
                "Al enviar información a través de nuestros formularios de contacto, usted declara que los datos proporcionados son veraces, completos y actualizados. CUMICSA utilizará esta información exclusivamente para dar seguimiento a su solicitud y, en su caso, para el envío de cotizaciones o información comercial relacionada con nuestros servicios de construcción. El tratamiento de datos personales se rige por nuestra Política de Privacidad.",
        },
        {
            title: "8. Limitación de Responsabilidad",
            content:
                "CUMICSA no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos que resulten del uso o la imposibilidad de uso de este sitio web. Si bien nos esforzamos por mantener la información del sitio actualizada y precisa, no garantizamos que el contenido esté libre de errores, sea completo o se encuentre actualizado en todo momento. El sitio web se proporciona \"tal cual\" y \"según disponibilidad\".",
        },
        {
            title: "9. Enlaces a Terceros",
            content:
                "Este sitio puede contener enlaces a sitios web de terceros, incluyendo redes sociales, proveedores o entidades gubernamentales. Dichos enlaces se proporcionan únicamente como referencia y conveniencia. CUMICSA no tiene control sobre el contenido de estos sitios externos y no asume responsabilidad alguna por su contenido, políticas de privacidad o prácticas.",
        },
        {
            title: "10. Legislación Aplicable y Jurisdicción",
            content:
                "Los presentes Términos y Condiciones se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada del uso de este sitio, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Morelia, Michoacán, México, renunciando a cualquier otro fuero que por razón de domicilio presente o futuro pudiera corresponderles.",
        },
        {
            title: "11. Modificaciones",
            content:
                "CUMICSA se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento y sin previo aviso. Las modificaciones entrarán en vigor en el momento de su publicación en este sitio web. Es responsabilidad del usuario revisar periódicamente estos términos para estar al tanto de cualquier cambio.",
        },
        {
            title: "12. Contacto",
            content:
                "Si tiene alguna pregunta o comentario respecto a estos Términos y Condiciones, puede comunicarse con nosotros a través de los medios de contacto disponibles en nuestro sitio web o visitando nuestras oficinas en Morelia, Michoacán, México.",
        },
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-[#0B1220] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#0B1220]/80 to-[#101B31]" />

                <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft size={18} />
                            Volver al inicio
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Términos y{" "}
                            <span className="text-primary">Condiciones</span>
                        </h1>

                        <p className="text-white/60 mt-4 text-lg">
                            Última actualización: Mayo 2026
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-16 md:py-20">
                <div className="max-w-4xl mx-auto space-y-10">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                                {section.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
