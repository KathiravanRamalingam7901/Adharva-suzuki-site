'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BookTestDrivePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    preferredDate: '',
    preferredTime: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Test drive booked successfully! We will contact you soon.')
  }

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
            Book Test Drive
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience your dream Suzuki vehicle before you buy
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Model</label>
              <select required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue">
                <option value="">Select Vehicle</option>
                <option>Access 125</option>
                <option>Avenis</option>
                <option>Gixxer SF</option>
                <option>Gixxer</option>
                <option>Burgman Street</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input type="date" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <input type="time" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
              </div>
            </div>
            <motion.button 
              type="submit"
              className="w-full bg-suzuki-blue text-white py-3 px-6 rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Test Drive
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

