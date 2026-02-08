'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Motorcycle cards data
const motorcycleCards = [
  {
    id: 'v-strom-sx',
    name: 'V-STROM SX',
    description: 'Adventure touring motorcycle designed for long rides and off-road capabilities.',
    cardImage: '/images/cards/VStorm-Card.jpg',
    link: '/products/motorcycles/v-strom-sx',
  },
  {
    id: 'gixxer-sf-250',
    name: 'Gixxer SF 250 / Gixxer 250',
    description: 'High-performance sports bike with cutting-edge technology.',
    cardImage: '/images/cards/Gixxer-250-Card.jpg',
    link: '/products/motorcycles/gixxer-sf-250',
  },
  {
    id: 'gixxer-sf',
    name: 'Gixxer / Gixxer SF',
    description: 'Sporty and agile naked sports bike. Ideal for city commuting and weekend rides.',
    cardImage: '/images/cards/Gixxer-SF-Card.jpg',
    link: '/products/motorcycles/gixxer-sf',
  },
]

export default function MotorcyclesPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-suzuki-blue mb-3 font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Suzuki Premium Range
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Premium <span className="text-suzuki-red">Motorcycles</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Powerful and stylish motorcycles for every rider. Experience the perfect blend of performance, technology, and Suzuki's racing heritage.
          </motion.p>
        </div>
      </motion.section>

      {/* Motorcycle Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {motorcycleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
            >
              <Link href={card.link}>
                <motion.div
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 cursor-pointer h-full flex flex-col group"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    rotateY: 2
                  }}
                  whileTap={{
                    scale: 0.96,
                    y: -5,
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {/* Card Image */}
                  <motion.div
                    className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={card.cardImage}
                        alt={card.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
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
                    {/* Animated overlay gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      whileTap={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Hover/Tap indicator - Always visible on mobile */}
                    <motion.div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full"
                      initial={{ y: 10, opacity: 0.7 }}
                      animate={{
                        y: [10, 0, 10],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Variants</span>
                      <motion.svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <motion.h3
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-suzuki-blue transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {card.name}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 mb-6 flex-1 text-base sm:text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {card.description}
                    </motion.p>
                    <motion.div
                      className="flex items-center text-suzuki-blue font-semibold group-hover:gap-3 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <span>Explore Variants</span>
                      <motion.svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Need Help Choosing?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our expert team is here to help you find the perfect motorcycle that matches your riding style and preferences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(30, 64, 175, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-suzuki-blue hover:bg-opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
