'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 'access-banner',
    image: '/images/Banner/Access-New-Blue_Website-Banner_1920-x-965.jpg',
    title: 'Access 125 – Smooth City Rides',
    subtitle: 'Comfortable, efficient and ready for your daily commute.',
    primaryCta: { label: 'View Access 125', href: '/products/scooters/access-125' },
    secondaryCta: { label: 'Book Test Drive', href: '/enquiry/book-test-drive' },
  },
  {
    id: 'avenis-banner',
    image: '/images/Banner/Avenis_KV_2x1 Size_CTC.jpg',
    title: 'Avenis – Sporty Urban Style',
    subtitle: 'Bold design and advanced features for the modern rider.',
    primaryCta: { label: 'View Avenis', href: '/products/scooters/avenis' },
    secondaryCta: { label: 'Get Quote', href: '/enquiry/get-quote' },
  },
  {
    id: 'access-campaign',
    image: '/images/Banner/250120 Suzuki_Access_Banner_2x1_ratio.jpg',
    title: 'Adharvaa Suzuki – Your Trusted Dealer',
    subtitle: 'Explore the complete range of Suzuki motorcycles and scooters in Coimbatore.',
    primaryCta: { label: 'Explore Motorcycles', href: '/products/motorcycles' },
    secondaryCta: { label: 'Explore Scooters', href: '/products/scooters' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const activeSlide = slides[current]

  return (
    <section id="home" className="relative pt-16 bg-black text-white overflow-hidden">
      {/* Sliding Banner */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <motion.div
            className="absolute -top-20 -right-10 w-56 h-56 sm:w-72 sm:h-72 bg-suzuki-red rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 15, 0], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"
            animate={{ scale: [1.1, 0.9, 1.1], x: [0, -20, 0], y: [0, 10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Text & CTAs */}
            <motion.div
              key={`${activeSlide.id}-content`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 leading-tight"
              >
                {activeSlide.title}
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {activeSlide.subtitle}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href={activeSlide.primaryCta.href}>
                  <motion.button
                    className="bg-suzuki-red hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition duration-300 text-center w-full sm:w-auto shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(220,38,38,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSlide.primaryCta.label}
                  </motion.button>
                </Link>
                <Link href={activeSlide.secondaryCta.href}>
                  <motion.button
                    className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-suzuki-blue text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition duration-300 text-center w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSlide.secondaryCta.label}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            

            {/* Spacer for layout symmetry */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'bg-white w-6' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
