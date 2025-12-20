'use client'

import Hero from '@/components/Hero'
import HomeProductSliders from '@/components/HomeProductSliders'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HomeProductSliders />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

