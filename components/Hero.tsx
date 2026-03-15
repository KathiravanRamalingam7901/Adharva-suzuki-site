'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 'e-access-banner',
    image: '/images/scooters/e-access/hero-desktop.jpg',
    title: '',
    subtitle: '',
    primaryCta: { label: '', href: '/products/scooters/e-access' },
    secondaryCta: { label: '', href: '/enquiry/book-test-drive' },
    hideContent: true,
  },
  {
    id: 'access-banner',
    image: '/images/Banner/Access-New-Blue_Website-Banner_1920-x-965.jpg',
    title: '',
    subtitle: '',
    primaryCta: { label: '', href: '/products/scooters/access-125' },
    secondaryCta: { label: '', href: '/enquiry/book-test-drive' },
    hideContent: true,
  },
  {
    id: 'avenis-banner',
    image: '/images/Banner/Avenis_KV_2x1 Size_CTC.jpg',
    title: '',
    subtitle: '',
    primaryCta: { label: '', href: '/products/scooters/avenis' },
    secondaryCta: { label: '', href: '/enquiry/get-quote' },
    hideContent: true,
  },
  {
    id: 'access-campaign',
    image: '/images/Banner/250120 Suzuki_Access_Banner_2x1_ratio.jpg',
    title: '',
    subtitle: '',
    primaryCta: { label: '', href: '' },
    secondaryCta: { label: '', href: '' },
    hideContent: true,
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
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const activeSlide = slides[current]

  return (
    <section id="home" className="relative pt-20 bg-black text-white overflow-hidden">
      {/* Preload images for faster switching */}
      <div className="hidden">
        {slides.map(slide => (
          <Image key={`preload-${slide.id}`} src={slide.image} alt="preload" width={10} height={10} priority />
        ))}
      </div>

      {/* Sliding Banner - Enforced 2/1 aspect ratio to prevent cutoff on all screens */}
      <div className="relative aspect-[2/1]">
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
            {/* Adjusted dark gradient overlay for campaign banners */}
            {!activeSlide.hideContent && (
              <>
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent z-10" />
              </>
            )}
            {activeSlide.hideContent && (
                <div className="absolute inset-0 bg-black/5 z-10" />
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

        {/* Content - Removed as requested */}

        {/* Slider dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
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
