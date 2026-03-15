'use client'

import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ZoomableImageModal from '../../../../components/ZoomableImageModal'

const colorVariants = [
  {
    name: 'Metallic Mat Black / Mat Bordeaux Red',
    color: 'CUU',
    hex: '#1A1A1A',
    image: '/images/scooters/e-access/variant-black.png',
  },
  {
    name: 'Pearl Grace White / Mat Fibroin Gray',
    color: 'C1B',
    hex: '#F0F0F0',
    image: '/images/scooters/e-access/variant-white.png',
  },
  {
    name: 'Pearl Jade Green / Mat Fibroin Gray',
    color: 'C1A',
    hex: '#5F7367',
    image: '/images/scooters/e-access/variant-green.png',
  },
  {
    name: 'Metallic Mat Blue / Mat Fibroin Gray',
    color: 'CAU',
    hex: '#2B4B7B',
    image: '/images/scooters/e-access/variant-blue.png',
  },
]

const features = [
  {
    title: 'Suzuki e Technology',
    description: 'Stringent testing and advanced LFP battery management for superior safety and drivability.',
    icon: '⚡'
  },
  {
    title: '4X Long LFP Battery Life',
    description: 'Lithium Iron Phosphate (LFP) batteries offer four times the cycle life of standard batteries.',
    icon: '🔋'
  },
  {
    title: 'SDMS-e Drive Modes',
    description: 'Choose between Eco, Ride A, and Ride B modes to balance range and performance.',
    icon: '⚙️'
  },
  {
    title: 'Maintenance-Free Drive Belt',
    description: 'Clean, quiet, and durable toothed belt with auto-tensioner technology.',
    icon: '🔄'
  }
]

const specs = [
  { label: 'Battery Type', value: '51.2V LFP (Lithium Iron Phosphate)' },
  { label: 'Battery Capacity', value: '60 Ah (3.072 kWh)' },
  { label: 'Range', value: '95 km (As per AIS 040)' },
  { label: 'Max Power', value: '4.1 kW' },
  { label: 'Max Torque', value: '15 Nm' },
  { label: 'Curb Mass', value: '122 kg' },
  { label: 'Charging (Standard)', value: '0-100% in 6h 20m' },
  { label: 'Charging (Fast)', value: '0-100% in 2h 12m' },
]

export default function EAccessPage() {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0])
  const [isZoomed, setIsZoomed] = useState(false)

  // Motion Values for interactivity
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
    <div className="min-h-screen pt-24 bg-white text-slate-900">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-100/30" />
        <div className="absolute -right-20 top-10 w-64 h-64 bg-suzuki-blue/10 blur-3xl rounded-full" />
        <div className="absolute -left-24 -bottom-12 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-start"
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
            The Future of Urban Mobility
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            e-<span className="text-suzuki-blue">Access</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience the legendary Access style in its most advanced form. Suzuki's first electric scooter delivers silent performance with zero emissions.
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
                className="bg-suzuki-blue text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-suzuki-blue/20 hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Get Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Interactive Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <motion.div
              className="relative aspect-square sm:aspect-video lg:aspect-square bg-slate-50 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] cursor-crosshair group"
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="relative w-full h-full p-8"
                  style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={selectedColor.image}
                    alt={selectedColor.name}
                    fill
                    className="object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.15)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 text-xs font-bold uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                Interactive 3D View
              </div>
            </motion.div>
            
            {/* Color Selector */}
            <div className="mt-10">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Available Colours</h3>
              <div className="flex flex-wrap gap-4">
                {colorVariants.map((variant) => (
                  <motion.button
                    key={variant.color}
                    onClick={() => setSelectedColor(variant)}
                    className={`group relative flex flex-col items-center gap-3 p-3 rounded-2xl transition-all duration-300 ${
                      selectedColor.color === variant.color 
                        ? 'bg-slate-100 scale-105 shadow-inner' 
                        : 'hover:bg-slate-50'
                    }`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full border-2 transition-transform duration-300 ${
                        selectedColor.color === variant.color ? 'border-suzuki-blue scale-110 shadow-lg' : 'border-slate-200'
                      }`}
                      style={{ backgroundColor: variant.hex }}
                    />
                    <span className={`text-[10px] font-bold uppercase max-w-[80px] text-center ${
                      selectedColor.color === variant.color ? 'text-suzuki-blue' : 'text-slate-400'
                    }`}>
                      {variant.color}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-3xl font-black text-suzuki-blue">95 km</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 text-nowrap">True EV Range</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <p className="text-3xl font-black text-suzuki-blue">1.2h</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 text-nowrap">Fast Charging (80%)</p>
              </div>
            </div>

            {/* Features Grid */}
            <section>
              <h3 className="text-2xl font-bold mb-8">Premium Features</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section className="bg-slate-900 rounded-[40px] p-8 sm:p-12 text-white">
              <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4 text-suzuki-blue">Technical Specs</h3>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <span className="text-slate-400 text-sm font-medium">{spec.label}</span>
                    <span className="text-sm font-bold text-white text-right ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/enquiry/get-quote" className="inline-block w-full mt-10">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#004A99' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-suzuki-blue text-white py-4 rounded-2xl font-bold transition-all shadow-xl"
                >
                  Book Your e-Access
                </motion.button>
              </Link>
            </section>
          </motion.div>
        </div>
      </div>

      <ZoomableImageModal
        src={selectedColor.image}
        alt={`e-Access ${selectedColor.name}`}
        isOpen={isZoomed}
        onClose={closeZoom}
      />
    </div>
  )
}
