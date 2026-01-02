import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'
import { Projects } from '@/components/Projects/Projects'
import { Experiences } from '@/components/Experiences/Experiences'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  )
}
