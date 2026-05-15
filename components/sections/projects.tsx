"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const projects = [
  {
  id: 1,
  title: "Centro Comercial Plaza Norte",
  category: "Infraestructura",
  location: "",
  year: "20",
  area: "",
  description:
    "Complejo comercial de última generación con espacios verdes y tecnología sustentable.",
  image: "/images/imagencumicsa 1.png",
  status: "Completado",
  },
  {
    id: 2,
    title: "",
    category: "Residencial",
    location: "",
    year: "20",
    area: "",
    description:
      "",
    image: "/images/imagencumicsa 2.png",
    status: "Completado",
  },
  {
    id: 3,
    title: "",
    category: "Infraestructura",
    location: "",
    year: "20",
    area: "",
    description:
      "",
    image: "/images/imagencumicsa 3.png",
    status: "Completado",
  },
  {
    id: 4,
    title: "",
    category: "Institucional",
    location: "",
    year: "20",
    area: "",
    description:
      "",
    image: "/images/imagencumicsa 4.png",
    status: "Completado",
  },
]

const categories = ["Todos", "Comercial", "Residencial", "Infraestructura", "Institucional"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 800" className="w-full h-full">
          <motion.rect
            x="50"
            y="100"
            width="300"
            height="600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.rect
              key={i}
              x="80"
              y={150 + i * 90}
              width="60"
              height="50"
              fill="currentColor"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada proyecto es una obra de arte que refleja nuestro compromiso con
            la excelencia y la innovación
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completado"
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/80 text-sm">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4 text-primary" />
                    {project.area}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
