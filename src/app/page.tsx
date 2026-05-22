import Hero from '@/components/sections/Hero'
import MarqueeBar from '@/components/sections/MarqueeBar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Highlights from '@/components/sections/Highlights'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import CTAPoster from '@/components/sections/CTAPoster'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <About />
      <Services />
      <Process />
      <Highlights />
      <Team />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <CTAPoster />
    </>
  )
}
