'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: '🏍️',
    title: 'Premium Selection',
    description: 'Wide range of Suzuki motorcycles and scooters to choose from',
  },
  {
    icon: '🛠️',
    title: 'Expert Service',
    description: 'Professional maintenance and repair services by certified technicians',
  },
  {
    icon: '💳',
    title: 'Easy Financing',
    description: 'Flexible financing options to make your dream vehicle affordable',
  },
  {
    icon: '🛡️',
    title: 'Insurance Support',
    description: 'Comprehensive insurance solutions for complete peace of mind',
  },
  {
    icon: '🔄',
    title: 'Exchange Program',
    description: 'Trade-in your old vehicle and upgrade to a new Suzuki',
  },
  {
    icon: '⭐',
    title: 'Customer Care',
    description: 'Dedicated support team committed to your satisfaction',
  },
]

const stats = [
  { number: '6+', label: 'Branches' },
  { number: '1000+', label: 'Happy Customers' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Support' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero Section - Creative Design */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-suzuki-blue to-slate-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-suzuki-red/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-suzuki-red bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              Your Trusted Partner
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-suzuki-red via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Adharvaa Suzuki
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Excellence meets passion for Suzuki two-wheelers. Your premium destination for
              motorcycles, scooters, and exceptional service in Coimbatore.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-suzuki-blue mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-suzuki-blue to-blue-900 flex items-center justify-center">
              <div className="text-8xl opacity-30">🏍️</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Authorized Suzuki Dealer
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Discover Adharvaa Suzuki, where excellence meets passion for Suzuki two-wheelers.
              As a premium dealership, we're devoted to delivering unparalleled customer
              experiences. Our commitment goes beyond selling exceptional Suzuki models; it's about
              ensuring your satisfaction through top-tier service.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Adharvaa Suzuki takes pride in being your trusted authorised Suzuki dealer and the
              ultimate destination for all Suzuki Motorcycle and Scooter enthusiasts in Coimbatore.
              From a powerful Suzuki bike to a stylish Suzuki scooter, our Suzuki bike showroom,
              Coimbatore will get you the most extensive range of two-wheelers to match your riding
              preferences.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Excellence is what we commit ourselves to, so every customer gets the best service and
            unbeatable prices. We believe in giving you a hassle-free experience to make us the
            perfect Suzuki two-wheeler showroom in Coimbatore. At every step, from choosing the apt
            Suzuki model to providing you with various financing options, we stand by your side.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Adharvaa Suzuki?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions for all your two-wheeler needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
