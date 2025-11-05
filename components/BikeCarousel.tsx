'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface BikeCarouselProps {
  bikes: Array<{
    name: string
    description: string
    price: string
    image: string
  }>
}

export default function BikeCarousel({ bikes }: BikeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomImage, setZoomImage] = useState<string | null>(null)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % bikes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [bikes.length])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % bikes.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + bikes.length) % bikes.length)
    }
  }

  const openZoom = (imageSrc: string) => {
    setZoomImage(imageSrc)
    setIsZoomed(true)
    document.body.style.overflow = 'hidden'
  }

  const closeZoom = () => {
    setIsZoomed(false)
    setZoomImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute inset-0"
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                {/* Bike Image - Much Larger */}
                <motion.div
                  className="relative h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] cursor-zoom-in"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openZoom(bikes[currentIndex].image)}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={bikes[currentIndex].image}
                      alt={bikes[currentIndex].name}
                      fill
                      className="object-contain p-8 md:p-12 lg:p-16"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      quality={95}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<div class="text-8xl flex items-center justify-center h-full">🏍️</div>'
                        }
                      }}
                    />
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-suzuki-blue/10 to-transparent"
                      animate={{
                        x: [0, 100, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Zoom indicator */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Click to Zoom
                    </div>
                  </div>
                </motion.div>

                {/* Bike Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center md:text-left"
                >
                  <motion.h3
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                  >
                    {bikes[currentIndex].name}
                  </motion.h3>
                  <motion.p
                    key={currentIndex + 'desc'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-600 mb-6"
                  >
                    {bikes[currentIndex].description}
                  </motion.p>
                  <motion.p
                    key={currentIndex + 'price'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-suzuki-blue mb-8"
                  >
                    {bikes[currentIndex].price}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/enquiry/get-quote">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-suzuki-blue hover:bg-opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 w-full sm:w-auto"
                      >
                        Get Quote
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openZoom(bikes[currentIndex].image)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      View Full Size
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-suzuki-blue p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous bike"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-suzuki-blue p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next bike"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {bikes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-suzuki-blue w-8'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
              aria-label="Close zoom"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center gap-4 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = bikes.findIndex(b => b.image === zoomImage)
                  const prevIndex = (currentIndex - 1 + bikes.length) % bikes.length
                  setZoomImage(bikes[prevIndex].image)
                }}
                className="hover:scale-110 transition-transform"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm font-semibold">
                {bikes.findIndex(b => b.image === zoomImage) + 1} / {bikes.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = bikes.findIndex(b => b.image === zoomImage)
                  const nextIndex = (currentIndex + 1) % bikes.length
                  setZoomImage(bikes[nextIndex].image)
                }}
                className="hover:scale-110 transition-transform"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Zoomed Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomImage}
                alt={bikes[bikes.findIndex(b => b.image === zoomImage)]?.name || 'Bike'}
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
