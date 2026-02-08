'use client'

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const colorVariants = [
  {
    name: 'Yellow',
    color: 'Yellow',
    hex: '#FACC15',
    image: '/images/scooters/Avenis/Avenis_Yellow.png',
  },
  {
    name: 'Red',
    color: 'Red',
    hex: '#DC2626',
    image: '/images/scooters/Avenis/Avenis_Red.png',
  },
  {
    name: 'White',
    color: 'White',
    hex: '#FFFFFF',
    image: '/images/scooters/Avenis/Avenis_White.png',
  },
  {
    name: 'Black',
    color: 'Black',
    hex: '#000000',
    image: '/images/scooters/Avenis/Avenis_Black.png',
  },
  {
    name: 'Silver',
    color: 'Silver',
    hex: '#9CA3AF',
    image: '/images/scooters/Avenis/Avenis_Silver.png',
  },
]

export default function AvenisPage() {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0])
  const [isZoomed, setIsZoomed] = useState(false)

  // Parallax Motion Values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const openZoom = () => {
    setIsZoomed(true)
    document.body.style.overflow = 'hidden'
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      {/* Header Section - Careers Style */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-suzuki-blue/20" />
        <div className="absolute -right-20 top-10 w-64 h-64 bg-suzuki-red/10 blur-3xl rounded-full" />
        <div className="absolute -left-24 -bottom-12 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/products/scooters" className="inline-flex items-center text-slate-600 hover:text-suzuki-blue mb-4 transition-colors text-sm font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scooters
            </Link>
          </motion.div>
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-suzuki-blue mb-3 font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Urban Sport Scooter
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Avenis
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A sporty and stylish scooter designed for the modern urban rider, combining sharp design with advanced technology. Experience the perfect blend of performance and practicality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/enquiry/get-quote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-suzuki-blue text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-suzuki-blue/20 hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Get Quote
              </motion.button>
            </Link>
            <a
              href="https://www.adharvaasuzuki.com/_files/ugd/aedd32_8721b78abd7a4ba5b9ed2c8243c5dd1a.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-suzuki-blue text-suzuki-blue px-8 py-3 rounded-full font-bold hover:bg-suzuki-blue hover:text-white transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Download Brochure
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>

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
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-slate-50 rounded-3xl overflow-hidden shadow-2xl cursor-crosshair group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                mouseX.set(x * 20);
                mouseY.set(y * 20);
              }}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              onClick={openZoom}
            >
              {/* Dynamic Backdrop */}
              <motion.div
                className="absolute inset-0 opacity-20 blur-[100px] pointer-events-none"
                animate={{
                  backgroundColor: selectedColor.name.includes('Orange') ? '#F97316' :
                    selectedColor.name.includes('Green') ? '#22C55E' :
                      selectedColor.name.includes('White') ? '#F8FAFC' : '#1E293B'
                }}
                transition={{ duration: 1 }}
              />

              {/* Parallax Container */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center z-10"
                style={{
                  rotateX: springY,
                  rotateY: springX,
                  transformStyle: "preserve-3d"
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedColor.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-[90%] h-[90%]"
                  >
                    <Image
                      src={selectedColor.image}
                      alt={selectedColor.name}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                      priority
                    />

                    {/* Floor Reflection */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-black/5 blur-2xl rounded-[100%] scale-y-50 -z-10" />
                  </motion.div>
                </AnimatePresence>

                {/* Feature Labels */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  {[
                    { label: "Sporty Graphics", x: "15%", y: "45%" },
                    { label: "Advanced Digital Console", x: "40%", y: "30%" },
                    { label: "External Hinge Fuel Cap", x: "80%", y: "55%" },
                    { label: "Front Box with USB", x: "35%", y: "50%" }
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="absolute group/label flex items-center gap-2"
                      style={{ left: feature.x, top: feature.y }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm opacity-0 group-hover/label:opacity-100 transition-opacity whitespace-nowrap">
                        {feature.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interaction Hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span className="text-white text-xs font-medium tracking-wider uppercase">Interactive View</span>
              </div>
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
                Avenis
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A stylish and agile scooter built for city life, with sharp lines, bold colors, and a comfortable riding posture.
              </motion.p>


              {/* Color Variants - Enhanced for mobile */}
              <div className="mb-6 sm:mb-8">
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Available Colors:
                </motion.h3>
                <motion.div
                  className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {colorVariants.map((color, index) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative group flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl transition-all ${selectedColor.name === color.name
                        ? 'bg-gray-100 scale-110 shadow-lg ring-2 ring-suzuki-blue ring-offset-2'
                        : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9, rotate: -5 }}
                      title={color.name}
                    >
                      <motion.div
                        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 transition-all ${selectedColor.name === color.name
                          ? 'border-suzuki-blue shadow-xl scale-110 ring-2 ring-suzuki-blue/50'
                          : 'border-gray-300'
                          }`}
                        style={{ backgroundColor: color.hex }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className={`text-xs sm:text-sm font-medium text-center ${selectedColor.name === color.name ? 'text-suzuki-blue font-bold' : 'text-gray-600'
                        }`}>
                        {color.name}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Action Buttons - Enhanced for mobile */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={openZoom}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3 border border-gray-200 shadow-sm active:shadow-inner"
                >
                  <motion.svg
                    className="w-6 h-6 text-suzuki-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </motion.svg>
                  <span>Interactive Zoom View</span>
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
                alt={`Zoomed Avenis ${selectedColor.name}`}
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


