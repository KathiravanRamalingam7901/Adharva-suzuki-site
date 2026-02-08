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
    hideContent: false,
  },
  {
    id: 'avenis-banner',
    image: '/images/Banner/Avenis_KV_2x1 Size_CTC.jpg',
    title: 'Avenis – Sporty Urban Style',
    subtitle: 'Bold design and advanced features for the modern rider.',
    primaryCta: { label: 'View Avenis', href: '/products/scooters/avenis' },
    secondaryCta: { label: 'Get Quote', href: '/enquiry/get-quote' },
    hideContent: false,
  },
  {
    id: 'access-campaign',
    image: '/images/Banner/250120 Suzuki_Access_Banner_2x1_ratio.jpg',
    title: '',
    subtitle: '',
    primaryCta: { label: '', href: '' },
    secondaryCta: { label: '', href: '' },
    hideContent: true, // Special flag to hide all text/overlay content
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const activeSlide = slides[current]

  return (
    <section id="home" className="relative pt-16 bg-black text-white overflow-hidden">
      {/* Preload images for faster switching */}
      <div className="hidden">
        {slides.map(slide => (
          <Image key={`preload-${slide.id}`} src={slide.image} alt="preload" width={10} height={10} priority />
        ))}
      </div>

      {/* Sliding Banner */}
      <div className="relative h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const threshold = 50
              if (info.offset.x < -threshold) {
                nextSlide()
              } else if (info.offset.x > threshold) {
                prevSlide()
              }
            }}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title || 'Suzuki Banner'}
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Optimized dark gradient overlay - HIDDEN if hideContent is true */}
            {!activeSlide.hideContent && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-white pointer-events-auto transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-white pointer-events-auto transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Animated background blobs - Hidden for clean images */}
        {!activeSlide.hideContent && (
          <div className="pointer-events-none absolute inset-0 opacity-30">
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
        )}

        {/* Content */}
        <AnimatePresence>
          {!activeSlide.hideContent && (
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-8 md:pt-0">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                {/* Text & CTAs */}
                <motion.div
                  key={`${activeSlide.id}-content`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="text-left"
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-lg"
                  >
                    {activeSlide.title.split(' – ').map((part, i) => (
                      <span key={i} className={i === 1 ? "text-suzuki-red block mt-1" : "block"}>
                        {part}
                      </span>
                    ))}
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 md:mb-10 max-w-xl leading-relaxed drop-shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {activeSlide.subtitle}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href={activeSlide.primaryCta.href}>
                      <motion.button
                        className="bg-suzuki-red hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition duration-300 text-center w-full sm:w-auto shadow-2xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {activeSlide.primaryCta.label}
                      </motion.button>
                    </Link>
                    <Link href={activeSlide.secondaryCta.href}>
                      <motion.button
                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-suzuki-blue text-white px-8 py-4 rounded-xl text-lg font-bold transition duration-300 text-center w-full sm:w-auto"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {activeSlide.secondaryCta.label}
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                <div className="hidden md:block" />
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrent(index)
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === current ? 'bg-suzuki-red w-10' : 'bg-white/40 w-2.5 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
