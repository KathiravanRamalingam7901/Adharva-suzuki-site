'use client'

import { motion } from 'framer-motion'
import BikeCarousel from '@/components/BikeCarousel'

const scooters = [
  { 
    name: 'Access 125', 
    description: 'Sleek and efficient', 
    price: '₹85,000*',
    image: '/images/aedd32_b16aa5136e804c38b36a0f9e919c6848~mv2.png'
  },
  { 
    name: 'Avenis', 
    description: 'Modern and stylish', 
    price: '₹95,000*',
    image: '/images/aedd32_92486ea278814b09993c86cef008c145~mv2.png'
  },
  { 
    name: 'Burgman Street', 
    description: 'Premium comfort', 
    price: '₹1.10 Lakh*',
    image: '/images/aedd32_d632b8f755344e39a1d2042e78a28ea1~mv2.png'
  },
  { 
    name: 'Swish', 
    description: 'Compact and agile', 
    price: '₹75,000*',
    image: '/images/aedd32_1ff5bba9b3cc4bfdb60dfc0b22021479~mv2.png'
  },
]

export default function ScootersPage() {
  return (
    <div className="min-h-screen pt-16">
      <motion.div 
        className="bg-gradient-to-r from-suzuki-blue to-blue-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Premium Scooters
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sleek and efficient scooters for urban commuting
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <BikeCarousel bikes={scooters} />
      </div>
    </div>
  )
}
