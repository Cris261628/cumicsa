import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { VisionMission } from "@/components/sections/vision-mission"
import { Projects } from "@/components/sections/projects"
import { SobreNosotros } from "@/components/sections/sobrenosotros"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VisionMission />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
