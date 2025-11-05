'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const allBikes = [
  {
    name: 'Gixxer SF',
    description: 'Sporty and powerful',
    category: 'Motorcycle',
    image: '/images/aedd32_12362117de9e40849829a544cfaae1a2~mv2.png',
    link: '/products/motorcycles',
  },
  {
    name: 'Gixxer',
    description: 'Naked sports bike',
    category: 'Motorcycle',
    image: '/images/aedd32_c1708bcf4b004c2e9621d23d65bef307~mv2.png',
    link: '/products/motorcycles',
  },
  {
    name: 'Access 125',
    description: 'Sleek and efficient',
    category: 'Scooter',
    image: '/images/aedd32_b16aa5136e804c38b36a0f9e919c6848~mv2.png',
    link: '/products/scooters',
  },
  {
    name: 'Avenis',
    description: 'Modern and stylish',
    category: 'Scooter',
    image: '/images/aedd32_92486ea278814b09993c86cef008c145~mv2.png',
    link: '/products/scooters',
  },
  {
    name: 'Intruder',
    description: 'Cruiser style',
    category: 'Motorcycle',
    image: '/images/aedd32_f299d89988834e919d3ea50ec46cf563~mv2.png',
    link: '/products/motorcycles',
  },
  {
    name: 'Burgman Street',
    description: 'Premium comfort',
    category: 'Scooter',
    image: '/images/aedd32_d632b8f755344e39a1d2042e78a28ea1~mv2.png',
    link: '/products/scooters',
  },
  {
    name: 'V-Strom',
    description: 'Adventure touring',
    category: 'Motorcycle',
    image: '/images/aedd32_91c76091f3b8496787cbdbdaa2d4f415~mv2.png',
    link: '/products/motorcycles',
  },
  {
    name: 'Swish',
    description: 'Compact and agile',
    category: 'Scooter',
    image: '/images/aedd32_1ff5bba9b3cc4bfdb60dfc0b22021479~mv2.png',
    link: '/products/scooters',
  },
]

export default function VehicleModels() {
  // Duplicate bikes array for seamless infinite scroll
  const duplicatedBikes = [...allBikes, ...allBikes]

  return (
    <section id="models" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Drive Excellence with Adharvaa Suzuki
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your Journey, Our Passion! Explore our premium range of motorcycles and scooters.
          </motion.p>
        </motion.div>

        {/* Continuous Sliding Carousel - Enhanced for mobile */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: [0, -1400], // Adjusted for mobile
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {duplicatedBikes.map((bike, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px]"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={bike.link}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full"
                    whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={bike.image}
                          alt={bike.name}
                          fill
                          className="object-contain p-4 sm:p-6"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 350px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = '<div class="text-6xl sm:text-8xl flex items-center justify-center h-full">' + (bike.category === 'Motorcycle' ? '🏍️' : '🛵') + '</div>'
                            }
                          }}
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute top-4 right-4 bg-suzuki-red text-white px-3 py-1 rounded-full text-xs font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        {bike.category}
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{bike.name}</h3>
                      <p className="text-gray-600 text-sm">{bike.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />

          {/* Quick Links - Enhanced for mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
            <Link href="/products/motorcycles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-suzuki-blue text-white px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto"
              >
                View All Motorcycles
              </motion.button>
            </Link>
            <Link href="/products/scooters">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-suzuki-red text-white px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto"
              >
                View All Scooters
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
