'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const colorVariants = [
  {
    name: 'EX Edition',
    color: 'EX',
    hex: '#0F172A',
    image: '/images/scooters/Burgman Street Ex/Burgman Street Ex.png',
  },
]

export default function BurgmanStreetExPage() {
  const [selectedColor] = useState(colorVariants[0])
  const [isZoomed, setIsZoomed] = useState(false)

  const openZoom = () => {
    setIsZoomed(true)
    document.body.style.overflow = 'hidden'
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <motion.div 
        className="bg-gradient-to-r from-suzuki-blue via-blue-700 to-suzuki-blue text-white py-12 sm:py-16 md:py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/products/scooters" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scooters
            </Link>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Burgman Street EX
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The exclusive Burgman variant with enhanced luxury, advanced tech, and a premium road presence.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="lg:sticky lg:top-24"
          >
            <motion.div
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in touch-none"
              onClick={openZoom}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.name}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedColor.image}
                    alt={`Burgman Street EX ${selectedColor.name}`}
                    fill
                    className="object-contain p-4 sm:p-6 md:p-8 lg:p-12"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={95}
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class=\"text-8xl flex items-center justify-center h-full\">🛵</div>'
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Zoom indicator - Enhanced for mobile */}
              <motion.div
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/70 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  y: 0,
                  scale: 1
                }}
                transition={{ 
                  delay: 0.5,
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </motion.svg>
                <span className="hidden sm:inline">Tap to Zoom</span>
                <span className="sm:hidden">Zoom</span>
              </motion.div>

              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-suzuki-blue/10 via-transparent to-suzuki-red/10 pointer-events-none"
                animate={{
                  x: [0, 100, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Burgman Street EX
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The EX variant of Burgman Street brings extra sophistication, technology and premium touches to your daily ride.
              </motion.p>

              <motion.p
                className="text-3xl sm:text-4xl font-bold text-suzuki-blue mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                ₹1.20 Lakh*
              </motion.p>

              {/* Editions (single variant display) */}
              <div className="mb-6 sm:mb-8">
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Edition:
                </motion.h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-suzuki-blue font-semibold text-xs sm:text-sm">
                    {selectedColor.name}
                  </div>
                </div>
              </div>

              {/* Action Buttons - Enhanced for mobile */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/enquiry/get-quote" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(30, 64, 175, 0.3)" }}
                    whileTap={{ scale: 0.92, y: 2 }}
                    className="w-full bg-suzuki-blue hover:bg-opacity-90 text-white px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 shadow-lg active:shadow-md"
                  >
                    Get Quote
                  </motion.button>
                </Link>
                <motion.button
                  onClick={openZoom}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92, y: 2 }}
                  className="flex-1 sm:flex-initial bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 flex items-center justify-center gap-2 active:shadow-md"
                >
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </motion.svg>
                  <span className="hidden sm:inline">View Full Size</span>
                  <span className="sm:hidden">Zoom</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Zoom Modal - Enhanced for mobile */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
            onClick={closeZoom}
          >
            <motion.button
              onClick={closeZoom}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-2.5 sm:p-3 rounded-full transition-all z-10 touch-manipulation"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
              aria-label="Close zoom"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateY: 20 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
              className="relative w-full h-full max-w-7xl max-h-[95vh] sm:max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (Math.abs(info.offset.y) > 100) {
                  closeZoom()
                }
              }}
            >
              <Image
                src={selectedColor.image}
                alt={`Zoomed Burgman Street EX ${selectedColor.name}`}
                fill
                className="object-contain p-4 sm:p-6 md:p-8"
                quality={100}
                priority
                sizes="100vw"
              />
            </motion.div>
            
            {/* Swipe down indicator for mobile */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm flex items-center gap-2 z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="hidden sm:inline">Swipe down to close</span>
              <span className="sm:hidden">Tap outside to close</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


