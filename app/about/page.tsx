'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
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
            About Us
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Adharvaa Suzuki</h2>
          <p className="text-lg text-gray-700 mb-4">
            Discover Adharvaa Suzuki, where excellence meets passion for Suzuki two-wheelers. 
            As a premium dealership, we're devoted to delivering unparalleled customer experiences. 
            Our commitment goes beyond selling exceptional Suzuki models; it's about ensuring your 
            satisfaction through top-tier service.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Adharvaa Suzuki takes pride in being your trusted authorised Suzuki dealer and the ultimate 
            destination for all Suzuki Motorcycle and Scooter enthusiasts in Coimbatore. From a powerful 
            Suzuki bike to a stylish Suzuki scooter, our Suzuki bike showroom, Coimbatore will get you 
            the most extensive range of two-wheelers to match your riding preferences.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Excellence is what we commit ourselves to, so every customer gets the best service and 
            unbeatable prices. We believe in giving you a hassle-free experience to make us the perfect 
            Suzuki two-wheeler showroom in Coimbatore. At every step, from choosing the apt Suzuki model 
            to providing you with various financing options, we stand by your side.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

