"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface ObraItem {
    year: string;
    title: string;
    client: string;
    category: "vialidad" | "hidraulica" | "edificacion" | "terraceria";
}

// ─── Colores por categoría ────────────────────────────────────────────────────
const categoryConfig: Record<ObraItem["category"], { label: string; color: string; bg: string; border: string; dot: string }> = {
    vialidad: { label: "Vialidades y Caminos", color: "text-amber-400", bg: "bg-amber-400/8", border: "border-amber-400/30", dot: "bg-amber-400" },
    hidraulica: { label: "Hidráulica y Agua", color: "text-sky-400", bg: "bg-sky-400/8", border: "border-sky-400/30", dot: "bg-sky-400" },
    edificacion: { label: "Edificación e Infraest.", color: "text-emerald-400", bg: "bg-emerald-400/8", border: "border-emerald-400/30", dot: "bg-emerald-400" },
    terraceria: { label: "Terracerías y Movimiento", color: "text-orange-400", bg: "bg-orange-400/8", border: "border-orange-400/30", dot: "bg-orange-400" },
};

// ─── Todas las obras del CV ───────────────────────────────────────────────────
const obrasPorAño: { year: string; obras: ObraItem[] }[] = [
    {
        year: "1984",
        obras: [
            { year: "1984", title: "Se inicio con el periodo de los trabajos para la empresa grupo papelero scribe, s.a. De c.v. (antes crisoba industrial) en diversas actividades y obras, tales como construcción de vialidades, plataformas, mantenimiento a las instalaciones de la planta así como la construcción de un área para disposición de residuos solidos en un área de 7,500 m2 con un movimiento de 35,000 m3", client: "Grupo Papelero Scribe S.A. de C.V. (antes Crisoba Industrial)", category: "terraceria" },
        ],
    },
    {
        year: "2002",
        obras: [
            { year: "2002", title: 'Construcción de terracerías y plataformas en vialidades del Conjunto Habitacional "La Cantera", Tarímbaro, Mich.', client: "ICI Ingeniería y Construcción Integral S.A. de C.V.", category: "terraceria" },
            { year: "2002", title: 'Carpeta asfáltica de 5 cm de espesor en vialidades del Conjunto Habitacional "La Cantera", Tarímbaro, Mich.', client: "ICI Ingeniería y Construcción Integral S.A. de C.V.", category: "vialidad" },
            { year: "2002", title: "Construcción del Camino La Herradura, Colonia Morelos, Municipio de José Sixto Verduzco, Michoacán", client: "Gobierno del Estado de Michoacán", category: "vialidad" },
            { year: "2002", title: "Construcción de terracerías, pavimento, obras de drenaje y señalamiento ", client: "SCOP Gobierno del Estado de Michoacán", category: "vialidad" },
        ],
    },
    {
        year: "2003",
        obras: [
            { year: "2003", title: "Construcción de plataforma y limpieza del terreno para acondicionar estacionamiento adicional a la Feria de Morelia, Calle Raza Maya Esq. Heber Soto F.", client: "Sr. Francisco Eduardo Ortiz González", category: "terraceria" },
        ],
    },
    {
        year: "2004",
        obras: [
            { year: "2004", title: "Riego de sello premezclado y señalización del Camino Jesús del Monte–Río Bello–San José de las Torres ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2004", title: "Revestimiento de camino en puntos críticos, Comunidad El Laurelito, Municipio de Morelia ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2004", title: "Terminación de pavimentación, cunetas y señalización del Camino Tacícuaro–Cuanajillo y construcción de puente ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2004", title: "Pavimentación de la Calle Salvador Iriarte Montes con concreto asfáltico en el Fracc. San José de la Huerta ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2004", title: "Construcción de la primera etapa del Desarrollo Turístico en la Comunidad de La Alberca ", client: "H. Ayuntamiento de Morelia", category: "edificacion" },
            { year: "2004", title: "Construcción de la modernización del entronque Fracc. Xangari–salida a Pátzcuaro ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
        ],
    },
    {
        year: "2005",
        obras: [
            { year: "2005", title: "Construcción de la segunda etapa del Desarrollo Turístico en la Comunidad de La Alberca ", client: "H. Ayuntamiento de Morelia", category: "edificacion" },
            { year: "2005", title: "Pavimentación del Camino Cancho–San Diego Curucupatzeo (3ª Etapa, km 2+720 al km 3+140), Municipio de Madero ", client: "SCOP Estado de Michoacán", category: "vialidad" },
            { year: "2005", title: "Construcción del colector sanitario Ø 76 cm en el Boulevard García de León ", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2005", title: "Construcción de la primera etapa del Colector Unión Ø 91 cm ", client: "OOAPAS Ciudad de Morelia", category: "hidraulica" },
            { year: "2005", title: "Pavimentación del Camino Atecuaro–Puerto del Madroño, km 0+000 al km 1+500 ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2005", title: "Trabajos de limpieza del Dren Eréndira: retiro de material saturado, objetos flotantes, taludes y plantilla ", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2005", title: "Trabajos de limpieza del Dren La Soledad: retiro de material saturado, objetos flotantes, taludes y plantilla ", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2005", title: "Terracerías y reparación de daños causados por lluvias, Camino San Andrés Coapa–Chihuerio, km 5+480 al km 5+700", client: "Secretaría de Comunicaciones y Obras Públicas del Gobierno del Estado de Michoacán", category: "terraceria" },
            { year: "2005", title: "Pavimentación del Camino Atecuaro–Puerto Madroño, km 1+500 al km 3+000 ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2005", title: "Construcción del bordo izquierdo del Río Grande, Av. Madero Poniente–Av. Morelos Norte, km 3+700 al km 4+460 ", client: "OOAPAS Morelia", category: "hidraulica" },
        ],
    },
    {
        year: "2006",
        obras: [
            { year: "2006", title: "Construcción de dos puentes y obras complementarias en Calles Constitución y Cristóbal Colón sobre el Río Pie de la Cuesta, Aguililla ", client: "Gobierno del Estado de Michoacán de Ocampo", category: "vialidad" },
            { year: "2006", title: "Construcción de terracerías, obras de drenaje, pavimento y señalamiento del Camino Aguililla–Coalcomán, km 6+840 al km 9+200 ", client: "Gobierno del Estado de Michoacán", category: "vialidad" },
        ],
    },
    {
        year: "2008",
        obras: [
            { year: "2008", title: "Construcción del colector sanitario de la Colonia Etnias de México 2ª Etapa en el Ejido Isaac Arriaga", client: "Organismo Operador de Agua Potable y Saneamiento de Morelia", category: "hidraulica" },
            { year: "2008", title: "Construcción de la red de agua potable en la Colonia Villas de Fátima", client: "Organismo Operador de Agua Potable y Saneamiento de Morelia", category: "hidraulica" },
            { year: "2008", title: "Reposición de pavimento en vialidad primaria: Calle Antonio Alzate / Corregidora (Calle V. de Quiroga–Calle Hidalgo) ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2008", title: "Pavimentación de calle en la Comunidad Tiristarán ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2008", title: "Línea de alimentación en las Colonias Sitio de Cuautla y 2 de Diciembre ", client: "Organismo Operador de Agua Potable y Saneamiento de Morelia", category: "hidraulica" },
        ],
    },
    {
        year: "2009",
        obras: [
            { year: "2009", title: "Construcción de banquetas, guarniciones, terracería y tirado de carpeta asfáltica en la Colonia Nueva Aldea ", client: "Instituto Municipal de la Vivienda de Morelia", category: "vialidad" },
            { year: "2009", title: "Continuación de la red de drenaje del Poblado La Presa de Chiquimitio ", client: "Municipio de Morelia", category: "hidraulica" },
            { year: "2009", title: "Pavimentación de la Calle José María Morelos en la Comunidad Jesús del Monte ", client: "Municipio de Morelia", category: "vialidad" },
            { year: "2009", title: "Excavación y movimiento de tierras para sitio de disposición final de residuos sólidos, Calle Cañada #500, Tenencia de Tacícuaro ", client: "Municipio de Morelia", category: "terraceria" },
        ],
    },
    {
        year: "2010",
        obras: [
            { year: "2010", title: "Continuación de la red de drenaje en la Comunidad La Carbonera ", client: "H. Ayuntamiento de Morelia", category: "hidraulica" },
            { year: "2010", title: "Pavimentación de la Calle Circuito Ignacio Rayón, Colonia Torreón Nuevo ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2010", title: "Habilitación y acondicionamiento del Horno Crematorio No. 2 del Panteón Municipal ", client: "H. Ayuntamiento de Morelia", category: "edificacion" },
            { year: "2010", title: "Construcción de guarnición y pavimento de concreto hidráulico, Calle José Ma. Villaseñor, Col. Peñablanca ", client: "Instituto Municipal de Vivienda de Morelia", category: "vialidad" },
        ],
    },
    {
        year: "2011",
        obras: [
            { year: "2011", title: "Pavimentación de caminos de acceso a válvulas de seccionamiento, tramos Las Flores (km 12+127) y La Joya (km 28+305)", client: "Ática Corporación S.A. de C.V.", category: "vialidad" },
            { year: "2011", title: "Re-encarpetamiento de 9,600 m² con carpeta asfáltica de 8 cm de espesor, camino de acceso a Grupo Papelero Scribe y Kimberly Clark, Cointzio", client: "Grupo Papelero Scribe", category: "vialidad" },
            { year: "2011", title: "Rehabilitación de la red de alcantarillado sanitario, Calle Peribán entre Periférico y Retorno Pinzandaro, Col. Fovisste Acueducto ", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2011", title: "Terminación de pavimentación de calle paralela al Libramiento, Col. Dr. Ignacio Chávez (Lomas de Morelia) ", client: "H. Ayuntamiento de Morelia", category: "vialidad" },
            { year: "2011", title: "Terracerías, corte, extracción y conformación de terreno para la construcción del Hospital General Regional 250 Camas Sustentable, Ciudad Tres Marías, Municipio de Charo", client: "IMSS", category: "terraceria" },
            { year: "2011", title: "Excavación y habilitación de plataformas de cimentación para el Tecnológico de Morelia Campus Ejido de Cointzio", client: "TecNM / Gobierno Federal", category: "terraceria" },
        ],
    },
    {
        year: "2012",
        obras: [
            { year: "2012", title: "Infraestructura, ampliación y proyección de avenidas principales (De Señor, Santa Rosa, Tihosuco, Tepich) con banqueta, camellón, luminarias y doble vía 11 km; mejoramiento del tramo carretero Fed. a X-Pichil (6.00 km), Municipio de Felipe Carrillo Puerto, Quintana Roo", client: "Gobierno Municipal / Estatal de Quintana Roo", category: "vialidad" },
            { year: "2012", title: "Pavimentación del Camino Umecuaro–Hojas Anchas, 1 km, Comunidad Hojas Anchas", client: "H. Ayuntamiento de Morelia – Secretaría de Obras Públicas", category: "vialidad" },
        ],
    },
    {
        year: "2014",
        obras: [
            { year: "2014", title: "Trabajos de edificación para la tienda Home Depot Morelia East, Periférico Paseo de la República No. 4995, Col. Ex Hacienda del Rincón", client: "Home Depot México", category: "edificacion" },
        ],
    },
    {
        year: "2016",
        obras: [
            { year: "2016", title: "termino del periodo de los trabajos para la empresa grupo papelero scribe, s.a. De c.v. (antes crisoba industrial) en diversas actividades y obras", client: "Grupo Papelero Scribe S.A. de C.V. (antes Crisoba Industrial)", category: "terraceria" },
            { year: "2016", title: "Trabajos de urbanización en Módulo 2 y Módulo 3 para el Desarrollo Parque Solé (Obra 1499), Parcela 296-A, Ejido Peña del Panal, Municipio de Tarímbaro", client: "Desarrollo Parque Solé", category: "terraceria" },
        ],
    },
    {
        year: "2017",
        obras: [
            { year: "2017", title: "Trabajos de conservación y mantenimiento y/o sustitución de obra civil, compuertas y mecanismos en obras de cabeza y red mayor del Distrito de Riego 087 Rosario–Mezquite, Municipio de Yurécuaro ", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
        ],
    },
    {
        year: "2018",
        obras: [
            { year: "2018", title: "Movimiento de tierras y relleno en excavaciones de viaducto para el Tramo I, Autopista Atizapán–Atlacomulco", client: "Contratista principal", category: "terraceria" },
            { year: "2018", title: "Ejecución y construcción de concreto hidráulico para recubrimiento del Canal de Descarga y demolición en Muro San Javier y Cajón 7×7 m, Proyecto Túnel Emisor Poniente, Cuautitlán Izcalli, Estado de México", client: "CONAGUA / Contratista principal", category: "hidraulica" },
            { year: "2018", title: "Demolición de muros interiores, recubrimientos y desmantelamiento con recuperación de acabados, Hospital del IMSS en Cuautla, Morelos ", client: "IMSS", category: "edificacion" },
        ],
    },
    {
        year: "2019",
        obras: [
            { year: "2019", title: "Conservación y mantenimiento de la infraestructura hidráulica, instalaciones electromecánicas y obra civil en el Distrito de Riego 061 'Zamora', Municipios de Jacona, Ixtlán, Tangancícuaro, Tlazazalca y Zamora ", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
        ],
    },
    {
        year: "2020",
        obras: [
            { year: "2020", title: "Conservación normal de obra civil, compuertas y mecanismos en obras de cabeza y red mayor del Distrito de Riego 087 Rosario–Mezquite, Municipios de Angamacutiro, José Sixto Verduzco, Vista Hermosa, Villa Jiménez, La Piedad y Yurécuaro (Mich.), Degollado y Ayotlán (Jal.) ", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
        ],
    },
    {
        year: "2021",
        obras: [
            { year: "2021", title: "Rehabilitación de mecanismos de izaje de compuertas radiales, red eléctrica de fuerza y estructuras de control en la Presa Cajón de Peña, Municipio de Tomatlán, Jalisco ", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2021", title: "Conservación normal de infraestructura hidráulica, obra civil, instalaciones electromecánicas y puntos de control en las obras de cabeza del Distrito de Riego 024 'Ciénega de Chapala', Municipios de Sahuayo, Villamar, Venustiano Carranza y Briseñas ", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
        ],
    },
    {
        year: "2022",
        obras: [
            { year: "2022", title: "Construcción de línea de conducción de 1,260 m con tubería PVC RD-26 Ø 6 pulgadas, Av. Villas del Pedregal al Tanque Dos de Villas del Pedregal", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2022", title: "Construcción de la 1ª Etapa del Parque Ecoturístico Chupícuaro: andador peatonal, 20 cenadores hexagonales y caseta de control, Santa Fe de la Laguna, Pueblos Originarios, Municipio de Quiroga", client: "Gobierno Municipal de Quiroga / Gobierno de Michoacán", category: "edificacion" },
            { year: "2022", title: "Conservación normal y mantenimiento de obra civil y eléctrica en la Obra de Cabeza del Distrito de Riego 013, Estado de Jalisco", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2022", title: "Conservación normal y mantenimiento de obra civil y eléctrica en las presas Trigomil, Tacotán, Hurtado y derivadora El Corcovado, Distrito de Riego 094 Jalisco Sur — Municipios Unión de Tula, Acatlán de Juárez, Autlán y El Grullo", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2022", title: "Conservación normal de obra civil, compuertas y mecanismos en obras de cabeza y red mayor del Distrito de Riego 087 Rosario–Mezquite — Angamacutiro, José Sixto Verduzco, Vista Hermosa, Villa Jiménez, La Piedad y Yurécuaro (Mich.), Degollado y Ayotlán (Jal.)", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2022", title: "Conservación normal de infraestructura hidroagrícola del Distrito de Riego 045 Tuxpan — Maravatío, Hidalgo, Senguio, Tuxpan, Zitácuaro y Jungapeo", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2022", title: "Conservación normal de presas de almacenamiento y derivadoras de la 1ª, 2ª y 3ª Unidad del Distrito de Riego 020 Morelia–Queréndaro — Morelia, Charo, Álvaro Obregón, Indaparapeo y Queréndaro", client: "Comisión Nacional del Agua (CONAGUA)", category: "hidraulica" },
            { year: "2022", title: "Rehabilitación del puente vehicular en el km 4+001 del Dren Caimanero, Unidad de Riego Ameca A.C., Módulo de Riego 11, Distrito de Riego 013, Municipio de Ameca, Jalisco", client: "Comisión Nacional del Agua (CONAGUA)", category: "vialidad" },
        ],
    },
    {
        year: "2023",
        obras: [
            { year: "2023", title: "Rehabilitación de la red sanitaria 497 m Ø 30 cm, Calle Santa María de los Urdiales a Calle Nardoa–Vías del Tren, Colonia Las Margaritas — 10 pozos de visita y 249 descargas sanitarias", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2023", title: "Construcción de red sanitaria 147 m Ø 25 cm, Calle Benjamín Franklin a Av. Ventura Puente, Colonia Electricistas — 36 descargas sanitarias", client: "OOAPAS Morelia", category: "hidraulica" },
            { year: "2023", title: "Construcción de servicios sanitarios por sustitución en la Primaria José María Morelos, CCT 16DPR1191L, Guanajuatillo, Municipio de La Piedad", client: "INIFED / Gobierno de Michoacán", category: "edificacion" },
            { year: "2023", title: "Rehabilitación general del plantel en la Primaria Leona Vicario, CCT 16DPR5248X, Ojo de Agua de Serrato, Municipio de La Piedad", client: "INIFED / Gobierno de Michoacán", category: "edificacion" },
            { year: "2023", title: "Construcción de aula y obra exterior en la Primaria Lázaro Cárdenas, CCT 16DPR1183C, La Piedad de Cabadas, Municipio de La Piedad", client: "INIFED / Gobierno de Michoacán", category: "edificacion" },
            { year: "2023", title: "Rehabilitación de servicios sanitarios en la Escuela Secundaria Técnica Núm. 20, CCT 16DST0020X, La Piedad de Cabadas, Municipio de La Piedad", client: "INIFED / Gobierno de Michoacán", category: "edificacion" },
            { year: "2023", title: "Rehabilitación general del plantel en la Secundaria Lic. Rafael Reyes, CCT 16DES0007K, La Piedad de Cabadas, Municipio de La Piedad", client: "INIFED / Gobierno de Michoacán", category: "edificacion" },
        ],
    },
];

// ─── Card de obra individual ──────────────────────────────────────────────────
function ObraCard({ obra, delay = 0 }: { obra: ObraItem; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const cat = categoryConfig[obra.category];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay }}
            className={`p-3.5 md:p-4 rounded-xl border ${cat.border} ${cat.bg} relative`}
            style={{ background: "rgba(8,14,26,0.75)" }}
        >
            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${cat.dot}`} />
                <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase ${cat.color}`}>{cat.label}</span>
            </div>
            <p className="text-white/85 text-[13px] md:text-sm leading-snug mb-1.5 md:mb-2 font-medium">{obra.title}</p>
            <p className="text-white/35 text-[11px] md:text-xs leading-tight">{obra.client}</p>
        </motion.div>
    );
}

// ─── Nodo de año (zigzag vertical) ─────────────────────────────────────────────
function YearNode({ grupo, index }: { grupo: { year: string; obras: ObraItem[] }; index: number }) {
    const isLeft = index % 2 === 0;
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        // Mobile: una sola columna (línea + nodo a la izquierda, cards a la derecha).
        // md+: vuelve al grid de 3 columnas con zigzag izquierda/derecha.
        // El ancho de la primera columna (56px en mobile) define dónde cae la línea
        // central absoluta de más abajo (left-7 = 28px = la mitad de 56px).
        <div ref={ref} className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_80px_1fr] gap-0 items-start">

            {/* Lado izquierdo — solo existe visualmente en md+ */}
            <div className={`hidden md:block py-6 pr-6 ${isLeft ? "md:flex md:flex-col md:gap-3" : ""}`}>
                {isLeft && grupo.obras.map((obra, i) => (
                    <ObraCard key={i} obra={obra} delay={i * 0.07} />
                ))}
            </div>

            {/* Columna central — año + línea (en mobile es la primera columna, 56px) */}
            <div className="flex flex-col items-center">
                <div className="w-px flex-1 min-h-[16px] md:min-h-[24px] bg-gradient-to-b from-transparent to-[#E8922A]/40" />

                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="shrink-0 w-11 h-11 md:w-16 md:h-16 rounded-full border-2 border-[#E8922A] bg-[#0B1220] flex items-center justify-center shadow-[0_0_18px_rgba(232,146,42,0.25)] z-10"
                >
                    <span className="text-[#E8922A] font-bold text-[9px] md:text-xs text-center leading-tight px-0.5">{grupo.year}</span>
                </motion.div>

                <div className="w-px flex-1 min-h-[16px] md:min-h-[24px] bg-gradient-to-b from-[#E8922A]/40 to-transparent" />
            </div>

            {/* Lado derecho en md+ / única columna de cards en mobile */}
            <div className="py-5 md:py-6 pl-4 md:pl-6 flex flex-col gap-3">
                {/* Mobile: siempre todas las obras del año (no hay zigzag, una sola columna) */}
                <div className="contents md:hidden">
                    {grupo.obras.map((obra, i) => (
                        <ObraCard key={`m-${i}`} obra={obra} delay={i * 0.07} />
                    ))}
                </div>
                {/* md+: solo el lado que le toca según el zigzag */}
                <div className="hidden md:contents">
                    {!isLeft && grupo.obras.map((obra, i) => (
                        <ObraCard key={`d-${i}`} obra={obra} delay={i * 0.07} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Página ────────────────────────────────────────────────────────────────────
export default function TrayectoriaPage() {
    const totalObras = obrasPorAño.reduce((acc, g) => acc + g.obras.length, 0);
    const [activeFilter, setActiveFilter] = React.useState<ObraItem["category"] | "todas">("todas");

    const gruposFiltrados = obrasPorAño.map((g) => ({
        ...g,
        obras: activeFilter === "todas" ? g.obras : g.obras.filter((o) => o.category === activeFilter),
    })).filter((g) => g.obras.length > 0);

    return (
        // OJO: aquí ya NO va overflow-x-hidden. Mezclar overflow-x:hidden con
        // overflow-y por defecto (visible) hace que el navegador convierta ese
        // "visible" en "auto", creando un contenedor de scroll vertical propio
        // dentro de <main> — esa era la segunda barra. El recorte horizontal
        // ahora vive aislado en su propio wrapper, ver abajo.
        <main className="min-h-screen bg-[#0B1220] relative">

            {/* Capa de recorte SOLO para los fondos decorativos.
                overflow-hidden en AMBOS ejes (no mixto) → nunca necesita
                scrollear, así que no hay ambigüedad ni segunda barra. */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-[#E8922A]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#1B3A6B]/30 blur-3xl rounded-full" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220]/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image src="/images/logo.png" alt="CUMICSA Logo" width={38} height={38} className="object-contain md:w-11 md:h-11" />
                        <span className="text-base md:text-lg font-bold text-white">CUMICSA</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-sm text-white/50 hover:text-[#E8922A] transition-colors">
                        <ArrowLeft size={15} />
                        <span className="hidden sm:inline">Volver al sitio</span>
                    </Link>
                </div>
            </header>

            <div className="pt-24 md:pt-32 pb-16 md:pb-24 container mx-auto px-4 relative z-10 max-w-5xl">

                {/* Encabezado */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-[#E8922A] text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase mb-3"
                    >
                        Historial de Obras 1984 – 2023
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-5 leading-tight"
                    >
                        Nuestra{" "}
                        <span className="text-[#E8922A] relative inline-block">
                            Trayectoria
                            <motion.span
                                className="absolute left-0 bottom-1 w-full h-3 bg-[#E8922A]/15 -z-10 rounded"
                                initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.7, duration: 0.6 }}
                            />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }}
                        className="text-white/50 max-w-2xl mx-auto text-base md:text-lg"
                    >
                        Más de tres décadas construyendo infraestructura, obra civil e hidráulica en Michoacán y toda la República Mexicana.
                    </motion.p>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-3 mb-8 md:mb-10 max-w-3xl mx-auto"
                >
                    {[
                        ["35+", "Años de experiencia"],
                        [`64+`, "Obras ejecutadas"],
                        ["15+", "Clientes institucionales"],
                    ].map(([val, lbl]) => (
                        <div key={lbl} className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 md:p-5 text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#E8922A] mb-1">{val}</div>
                            <div className="text-white/45 text-[11px] md:text-xs font-medium leading-tight">{lbl}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Filtros */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                    className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16"
                >
                    <button
                        onClick={() => setActiveFilter("todas")}
                        className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${activeFilter === "todas"
                            ? "bg-[#E8922A] border-[#E8922A] text-white shadow-[0_0_14px_rgba(232,146,42,0.4)]"
                            : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                            }`}
                    >
                        Todas las obras
                    </button>
                    {(Object.entries(categoryConfig) as [ObraItem["category"], typeof categoryConfig[ObraItem["category"]]][]).map(([key, cfg]) => (
                        <button
                            key={key}
                            onClick={() => setActiveFilter(key)}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all ${activeFilter === key
                                ? `${cfg.bg} ${cfg.border} ${cfg.color} shadow-md`
                                : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                                }`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                            {cfg.label}
                        </button>
                    ))}
                </motion.div>

                {/* Línea del tiempo zigzag vertical */}
                <div className="relative">
                    <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-[#E8922A]/15 md:-translate-x-1/2 pointer-events-none" />

                    <div className="flex flex-col">
                        {gruposFiltrados.map((grupo, i) => (
                            <YearNode key={grupo.year} grupo={grupo} index={i} />
                        ))}
                    </div>

                    <div className="flex justify-start md:justify-center pl-5 md:pl-0 mt-8">
                        <div className="w-4 h-4 rounded-full border-2 border-[#E8922A]/40 bg-[#0B1220] shadow-[0_0_10px_rgba(232,146,42,0.2)]" />
                    </div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                    className="flex flex-col items-center gap-2 mt-16 text-white/25"
                >
                    <span className="text-xs tracking-widest uppercase">Fin del historial</span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </div>
        </main>
    );
}