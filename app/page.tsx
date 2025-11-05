'use client'

import Hero from '@/components/Hero'
import VehicleModels from '@/components/VehicleModels'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VehicleModels />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

