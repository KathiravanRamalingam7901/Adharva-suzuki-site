'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const positions = [
  { title: 'Sales Executive', department: 'Sales', location: 'Coimbatore' },
  { title: 'Service Technician', department: 'Service', location: 'Coimbatore' },
  { title: 'Customer Service', department: 'Customer Care', location: 'Coimbatore' },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Application submitted! We will contact you soon.')
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
            Careers
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join our team and grow with Adharvaa Suzuki
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-2">{pos.title}</h3>
                  <p className="text-gray-600">{pos.department} • {pos.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <select required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue">
                  <option value="">Select Position</option>
                  {positions.map((pos, i) => (
                    <option key={i} value={pos.title}>{pos.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-suzuki-blue" />
              </div>
              <motion.button 
                type="submit"
                className="w-full bg-suzuki-blue text-white py-3 px-6 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

