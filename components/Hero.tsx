'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 bg-gradient-to-r from-suzuki-blue to-blue-900 text-white overflow-hidden">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aedd32_d7912f153b31449ea0cc8bc7f33cd93b~mv2.jpg"
          alt="Adharvaa Suzuki Hero Banner"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Animated background elements - Enhanced for mobile */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 md:w-64 md:h-64 bg-suzuki-red rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-48 h-48 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Drive Excellence with <span className="text-suzuki-red">Adharvaa Suzuki</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl mb-6 md:mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your Journey, Our Passion! Discover premium Suzuki motorcycles and scooters in Coimbatore.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/products/motorcycles">
                <motion.button
                  className="bg-suzuki-red hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition duration-300 text-center w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Vehicles
                </motion.button>
              </Link>
              <Link href="/enquiry/book-test-drive">
                <motion.button
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-suzuki-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition duration-300 text-center w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Test Drive
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-suzuki-red opacity-20 rounded-lg transform rotate-3"
                animate={{
                  rotate: [3, -3, 3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-white rounded-lg p-8 shadow-2xl overflow-hidden">
                <motion.div 
                  className="aspect-video relative rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/aedd32_d7912f153b31449ea0cc8bc7f33cd93b~mv2.jpg"
                    alt="Suzuki Vehicle"
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
