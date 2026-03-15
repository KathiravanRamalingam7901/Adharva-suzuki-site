'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const bikes = [
  {
    name: 'V-STROM SX',
    description: 'Adventure touring motorcycle engineered for versatility.',
    category: 'Motorcycle',
    image: '/images/bikes/v-strom-sx/v-strom-sx-yellowColour.png',
    link: '/products/motorcycles/v-strom-sx',
    color: 'rgba(234, 179, 8, 0.1)', // Yellow
  },
  {
    name: 'Gixxer SF 250',
    description: 'Premium sport performance with racing DNA.',
    category: 'Motorcycle',
    image: '/images/bikes/gixxer-sf-250/Gixxer SF 250 Blue Colour.png',
    link: '/products/motorcycles/gixxer-sf-250',
    color: 'rgba(37, 99, 235, 0.1)', // Blue
  },
  {
    name: 'Gixxer SF',
    description: 'Stylish agile performer for urban riders.',
    category: 'Motorcycle',
    image: '/images/bikes/gixxer-sf/Gixxer-SF-BlueColour.png',
    link: '/products/motorcycles/gixxer-sf',
    color: 'rgba(59, 130, 246, 0.1)', // Lighter Blue
  },
]

const scooters = [
  {
    name: 'Access 125',
    description: 'The trusted choice for smooth everyday commuting.',
    category: 'Scooter',
    image: '/images/scooters/Access/Access Standard Edition.png',
    link: '/products/scooters/access-125',
    color: 'rgba(15, 23, 42, 0.05)', // Slate
  },
  {
    name: 'Avenis',
    description: 'Bold sporty design with advanced connectivity.',
    category: 'Scooter',
    image: '/images/scooters/Avenis/Avenis_Yellow.png',
    link: '/products/scooters/avenis',
    color: 'rgba(250, 204, 21, 0.1)', // Yellow
  },
  {
    name: 'Burgman Street',
    description: 'Maxi-styled luxury scooter for premium comfort.',
    category: 'Scooter',
    image: '/images/scooters/Burgman Street/Burgman Street Standard Edition.png',
    link: '/products/scooters/burgman-street',
    color: 'rgba(30, 41, 59, 0.05)', // Slate
  },
  {
    name: 'Burgman Street EX',
    description: 'Executive class mobility with exclusive features.',
    category: 'Scooter',
    image: '/images/scooters/Burgman Street Ex/Burgman Street Ex.png',
    link: '/products/scooters/burgman-street-ex',
    color: 'rgba(30, 58, 138, 0.1)', // Deep Blue
  },
]

function ProductCard({ item }: { item: typeof bikes[0] }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 w-[280px] sm:w-[360px] md:w-[440px] group mx-3 sm:mx-6 md:mx-8"
    >
      <Link href={item.link}>
        <div className="relative h-[460px] sm:h-[540px] md:h-[600px] bg-white border border-gray-100 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden group-hover:border-suzuki-blue/30 transition-all duration-700 shadow-xl shadow-gray-200/50 flex flex-col">
          {/* Subtle Color Accent Background */}
          <div
            className="absolute inset-x-0 bottom-0 h-64 opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-[100px] pointer-events-none"
            style={{ backgroundColor: item.color }}
          />

          {/* Product Category Badge */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
            <span className="px-3 py-1 sm:px-5 sm:py-2 rounded-full bg-gray-100 border border-gray-200 text-[10px] sm:text-[12px] font-black text-gray-900 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              {item.category}
            </span>
          </div>

          {/* Image Container - Balanced and Non-Overlapping */}
          <div className="relative h-56 sm:h-72 md:h-88 mt-12 sm:mt-16 flex items-center justify-center pointer-events-none z-10" style={{ transform: 'translateZ(60px)' }}>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full px-4 sm:px-8"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_40px_70px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
              />
            </motion.div>
          </div>

          {/* Product Details - Flex layout prevents overlap */}
          <div className="mt-auto p-6 sm:p-10 md:p-12 space-y-2 sm:space-y-4 relative z-20" style={{ transform: 'translateZ(40px)' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 group-hover:text-suzuki-blue transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            <p className="text-[10px] sm:text-sm md:text-base text-gray-600 line-clamp-2 font-medium leading-relaxed">
              {item.description}
            </p>
            {/* Removed View Details button as requested to clean up UI */}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function ContinuousRow({
  title,
  subtitle,
  items,
  reverse = false,
}: {
  title: string
  subtitle: string
  items: typeof bikes
  reverse?: boolean
}) {
  // Triple the items to ensure seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className="space-y-4 sm:space-y-8 py-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4"
          >
            <div className="w-10 sm:w-16 h-1.5 bg-suzuki-red rounded-full" />
            <span className="text-suzuki-red font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs">Suzuki {title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            {title} <span className="text-suzuki-blue">Series</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl text-xs sm:text-base md:text-lg font-medium leading-relaxed mx-auto sm:mx-0"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Row */}
      <div className="relative overflow-hidden group/row">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-fit py-4 sm:py-6"
          animate={{
            x: reverse
              ? [0, -items.length * (typeof window !== 'undefined' && window.innerWidth < 640 ? 304 : 448 + 64)]
              : [-items.length * (typeof window !== 'undefined' && window.innerWidth < 640 ? 304 : 448 + 64), 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: items.length * 15, // Slower for elegance
              ease: "linear",
            },
          }}
          style={{ x: 0 }}
        >
          {duplicatedItems.map((item, i) => (
            <ProductCard key={`${item.name}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function HomeProductSliders() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-blue-100/40 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-red-100/30 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[100vw] overflow-x-hidden space-y-12 sm:space-y-16">
        <ContinuousRow
          title="Motorcycle"
          subtitle="Precision-engineered for speed, style, and pure performance on every road."
          items={bikes}
        />

        <ContinuousRow
          title="Scooter"
          subtitle="Experience the perfect blend of comfort, style, and urban practicality."
          items={scooters}
        />

        {/* Explore All CTA - Two Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-12 sm:pt-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/products/motorcycles">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 40px 80px -20px rgba(15, 23, 42, 0.4)',
                backgroundColor: '#000'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 sm:px-16 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-sm sm:text-xl shadow-2xl transition-all duration-700 group flex items-center justify-center gap-4 sm:gap-6 mx-auto w-full sm:w-auto"
            >
              <span>EXPLORE ALL BIKES</span>
              <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
          <Link href="/products/scooters">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 40px 80px -20px rgba(15, 23, 42, 0.4)',
                backgroundColor: '#000'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 sm:px-16 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-sm sm:text-xl shadow-2xl transition-all duration-700 group flex items-center justify-center gap-4 sm:gap-6 mx-auto w-full sm:w-auto"
            >
              <span>EXPLORE ALL SCOOTERS</span>
              <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
