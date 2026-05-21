"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaPrivacidad() {
    const sections = [
        {
            title: "1. Identidad del Responsable",
            content:
                "CUMICSA Construcciones S.A. de C.V. (en adelante \"CUMICSA\"), con domicilio en Morelia, Michoacán, México, es la empresa responsable del tratamiento de sus datos personales. En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, ponemos a su disposición el presente Aviso de Privacidad.",
        },
        {
            title: "2. Datos Personales que Recopilamos",
            content:
                "Para las finalidades señaladas en el presente aviso, CUMICSA podrá recabar las siguientes categorías de datos personales: datos de identificación (nombre completo, fecha de nacimiento, nacionalidad), datos de contacto (dirección de correo electrónico, número telefónico, dirección postal), datos laborales o profesionales (empresa u organización, cargo o puesto), y datos relacionados con la solicitud de servicios de construcción (tipo de proyecto, ubicación de la obra, presupuesto estimado, plazos requeridos). CUMICSA no recopila datos personales sensibles a través de este sitio web.",
        },
        {
            title: "3. Finalidades del Tratamiento",
            subsections: [
                {
                    subtitle: "Finalidades primarias (necesarias para la relación contractual):",
                    items: [
                        "Dar respuesta a solicitudes de información, contacto o cotización de servicios de construcción.",
                        "Elaborar y enviar propuestas técnicas y económicas de proyectos.",
                        "Gestionar la relación comercial y contractual con nuestros clientes.",
                        "Cumplir con obligaciones legales, fiscales y regulatorias aplicables al sector de la construcción.",
                        "Dar seguimiento a proyectos y obras en curso.",
                    ],
                },
                {
                    subtitle: "Finalidades secundarias (no necesarias pero legítimas):",
                    items: [
                        "Enviar información comercial, promociones y novedades sobre nuestros servicios y proyectos.",
                        "Realizar encuestas de satisfacción sobre nuestros servicios.",
                        "Enviar invitaciones a eventos relacionados con el sector de la construcción.",
                        "Elaborar estadísticas y análisis internos para mejorar nuestros servicios.",
                    ],
                },
            ],
        },
        {
            title: "4. Medios de Obtención de Datos",
            content:
                "CUMICSA obtiene sus datos personales a través de los siguientes medios: formularios de contacto en nuestro sitio web, comunicación directa vía correo electrónico, teléfono o mensajería, reuniones presenciales o virtuales de trabajo, intercambio de tarjetas de presentación en eventos del sector, y relaciones comerciales previas. En todos los casos, el titular de los datos será informado sobre el tratamiento de su información.",
        },
        {
            title: "5. Transferencias de Datos",
            content:
                "CUMICSA podrá transferir sus datos personales a terceros nacionales o extranjeros únicamente en los siguientes supuestos: a subcontratistas y proveedores directamente involucrados en la ejecución de proyectos de construcción contratados por usted; a autoridades competentes cuando sea requerido por ley o para el cumplimiento de obligaciones regulatorias del sector construcción; a instituciones financieras para la gestión de pagos y facturación. En todos los casos, CUMICSA se asegurará de que los terceros receptores cumplan con las disposiciones de la LFPDPPP y mantengan medidas de seguridad equivalentes a las implementadas por nosotros.",
        },
        {
            title: "6. Derechos ARCO",
            content:
                "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, puede enviar una solicitud a través de los medios de contacto disponibles en nuestro sitio web. Su solicitud deberá contener: nombre completo y datos de contacto, descripción clara de los datos sobre los que desea ejercer su derecho, cualquier documento que facilite la localización de sus datos, y en caso de solicitar rectificación, los datos correctos y documentos que sustenten la modificación. CUMICSA dará respuesta a su solicitud en un plazo máximo de 20 días hábiles contados a partir de la fecha de recepción, conforme a lo establecido en la LFPDPPP.",
        },
        {
            title: "7. Revocación del Consentimiento",
            content:
                "Usted puede revocar su consentimiento para el tratamiento de sus datos personales en cualquier momento, sin efectos retroactivos, enviando su solicitud a través de los medios de contacto disponibles en nuestro sitio web. Es importante que considere que en ciertos casos no podremos atender su solicitud de revocación de manera inmediata, ya que es posible que por obligaciones legales, fiscales o contractuales derivadas de proyectos de construcción en curso, necesitemos seguir tratando ciertos datos.",
        },
        {
            title: "8. Uso de Cookies y Tecnologías de Rastreo",
            content:
                "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación, recordar sus preferencias, analizar el tráfico del sitio y entender cómo los visitantes interactúan con nuestro contenido. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar cookies o para que le notifique cuando se envíe una cookie. Sin embargo, si desactiva las cookies, algunas funciones del sitio podrían no estar disponibles.",
        },
        {
            title: "9. Medidas de Seguridad",
            content:
                "CUMICSA ha implementado medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado, conforme a lo dispuesto en la LFPDPPP y las mejores prácticas de la industria. Entre estas medidas se incluyen el uso de protocolos de seguridad en la transmisión de datos, control de acceso a la información y capacitación del personal en materia de protección de datos.",
        },
        {
            title: "10. Modificaciones al Aviso de Privacidad",
            content:
                "CUMICSA se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento para adaptarlo a novedades legislativas, jurisprudenciales, políticas internas o nuevos requisitos del sector construcción. Las modificaciones serán publicadas en esta misma página de nuestro sitio web. Le recomendamos revisar periódicamente este aviso para estar informado sobre cómo protegemos su información.",
        },
        {
            title: "11. Legislación Aplicable",
            content:
                "El presente Aviso de Privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento, los Lineamientos del Aviso de Privacidad publicados en el Diario Oficial de la Federación, y demás normatividad aplicable en los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes de Morelia, Michoacán.",
        },
        {
            title: "12. Contacto para Asuntos de Privacidad",
            content:
                "Si tiene preguntas, comentarios o desea ejercer sus derechos ARCO respecto al tratamiento de sus datos personales, puede comunicarse con nosotros a través de los medios de contacto disponibles en nuestro sitio web o acudiendo directamente a nuestras oficinas en Morelia, Michoacán, México. Atenderemos su solicitud en los plazos establecidos por la ley.",
        },
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-[#0B1220] relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.06]"
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
                            Política de{" "}
                            <span className="text-primary">Privacidad</span>
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

                            {section.content && (
                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                    {section.content}
                                </p>
                            )}

                            {section.subsections &&
                                section.subsections.map((sub, subIndex) => (
                                    <div key={subIndex} className="mt-4">
                                        <h3 className="text-base md:text-lg font-medium text-foreground mb-2">
                                            {sub.subtitle}
                                        </h3>
                                        <ul className="space-y-2 ml-1">
                                            {sub.items.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="text-muted-foreground leading-relaxed text-base md:text-lg flex gap-3"
                                                >
                                                    <span className="text-primary mt-1.5 shrink-0">
                                                        •
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
