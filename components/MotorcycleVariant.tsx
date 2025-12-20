'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ColorVariant {
  name: string
  color: string
  hex: string
  image: string
}

interface MotorcycleVariantProps {
  name: string
  subVariants?: string[]
  description: string
  price: string
  colors: ColorVariant[]
  defaultImage?: string
}

export default function MotorcycleVariant({
  name,
  subVariants = [],
  description,
  price,
  colors,
  defaultImage
}: MotorcycleVariantProps) {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(colors[0])
  const [selectedSubVariant, setSelectedSubVariant] = useState<string>(subVariants[0] || '')
  const [isZoomed, setIsZoomed] = useState(false)

  const currentImage = selectedColor.image || defaultImage || colors[0].image
  const displayName = selectedSubVariant ? `${name} ${selectedSubVariant}` : name

  const openZoom = () => {
    setIsZoomed(true)
    document.body.style.overflow = 'hidden'
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      >
        {/* Image Section */}
        <motion.div
          className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden cursor-zoom-in"
          onClick={openZoom}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src={currentImage}
                alt={`${displayName} - ${selectedColor.name}`}
                fill
                className="object-contain p-6 sm:p-8 md:p-12"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={95}
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="text-8xl flex items-center justify-center h-full">🏍️</div>'
                  }
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-suzuki-blue/10 via-transparent to-suzuki-red/10"
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Zoom indicator */}
          <motion.div
            className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            Tap to Zoom
          </motion.div>
        </motion.div>

        {/* Info Section */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {displayName}
          </motion.h3>

          {/* Sub-variant selector (if applicable) */}
          {subVariants.length > 0 && (
            <motion.div
              className="mb-4 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {subVariants.map((variant) => (
                <motion.button
                  key={variant}
                  onClick={() => setSelectedSubVariant(variant)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    selectedSubVariant === variant
                      ? 'bg-suzuki-blue text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {variant}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Description */}
          <motion.p
            className="text-gray-600 mb-4 text-base sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Price */}
          <motion.p
            className="text-2xl sm:text-3xl font-bold text-suzuki-blue mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {price}
          </motion.p>

          {/* Color Variants */}
          <div className="mb-6">
            <motion.h4
              className="text-sm font-semibold text-gray-700 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Available Colors:
            </motion.h4>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`relative group flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                    selectedColor.name === color.name
                      ? 'bg-gray-100 scale-110'
                      : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={color.name}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 transition-all ${
                      selectedColor.name === color.name
                        ? 'border-suzuki-blue shadow-lg scale-110'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <span className={`text-xs font-medium ${
                    selectedColor.name === color.name ? 'text-suzuki-blue font-bold' : 'text-gray-600'
                  }`}>
                    {color.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/enquiry/get-quote" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(30, 64, 175, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-suzuki-blue hover:bg-opacity-90 text-white px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 shadow-lg"
              >
                Get Quote
              </motion.button>
            </Link>
            <motion.button
              onClick={openZoom}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 sm:flex-initial bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              View Full Size
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <motion.button
              onClick={closeZoom}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              aria-label="Close zoom"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage}
                alt={`${displayName} - ${selectedColor.name}`}
                fill
                className="object-contain p-8"
                quality={100}
                priority
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

