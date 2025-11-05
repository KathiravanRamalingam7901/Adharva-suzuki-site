'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const offers = [
  { title: 'Festive Special', desc: 'Up to ₹10,000 off on select models', icon: '🎉' },
  { title: 'Exchange Bonus', desc: 'Get extra ₹5,000 on exchange', icon: '🔄' },
  { title: 'Finance Deal', desc: 'Low interest rates starting from 8.5%', icon: '💳' },
  { title: 'Free Service', desc: 'Free first service on new purchases', icon: '🔧' },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen pt-16">
      <motion.div 
        className="bg-gradient-to-r from-suzuki-blue to-blue-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Special Offers
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Exclusive deals and offers on Suzuki vehicles
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {offer.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.desc}</p>
              <Link href="/enquiry/get-quote">
                <motion.button 
                  className="bg-suzuki-blue text-white px-6 py-2 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

