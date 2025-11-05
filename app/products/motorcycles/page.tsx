'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BikeCarousel from '@/components/BikeCarousel'

const motorcycles = [
  { 
    name: 'Gixxer SF', 
    description: 'Sporty and powerful', 
    price: '₹1.50 Lakh*',
    image: '/images/aedd32_12362117de9e40849829a544cfaae1a2~mv2.png'
  },
  { 
    name: 'Gixxer', 
    description: 'Naked sports bike', 
    price: '₹1.35 Lakh*',
    image: '/images/aedd32_c1708bcf4b004c2e9621d23d65bef307~mv2.png'
  },
  { 
    name: 'Intruder', 
    description: 'Cruiser style', 
    price: '₹1.20 Lakh*',
    image: '/images/aedd32_f299d89988834e919d3ea50ec46cf563~mv2.png'
  },
  { 
    name: 'V-Strom', 
    description: 'Adventure touring', 
    price: '₹12.50 Lakh*',
    image: '/images/aedd32_91c76091f3b8496787cbdbdaa2d4f415~mv2.png'
  },
]

export default function MotorcyclesPage() {
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
            Premium Motorcycles
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Powerful and stylish motorcycles for every rider
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <BikeCarousel bikes={motorcycles} />
      </div>
    </div>
  )
}
