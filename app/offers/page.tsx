'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const offerBanners = [
  {
    id: 1,
    image: '/images/offers/offer1.png',
    alt: 'Suzuki Special Offer 1',
  },
  {
    id: 2,
    image: '/images/offers/offer2.png',
    alt: 'Suzuki Special Offer 2',
  },
  {
    id: 3,
    image: '/images/offers/offer3.png',
    alt: 'Suzuki Special Offer 3',
  },
  {
    id: 4,
    image: '/images/offers/offer4.png',
    alt: 'Suzuki Special Offer 4',
  },
  {
    id: 5,
    image: '/images/offers/offer5.png',
    alt: 'Suzuki Special Offer 5',
  },
]

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Banner - Careers Style */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-suzuki-blue/20" />
        <div className="absolute -right-20 top-10 w-64 h-64 bg-suzuki-red/10 blur-3xl rounded-full" />
        <div className="absolute -left-24 -bottom-12 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-suzuki-blue mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Exclusive Deals
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unbeatable <span className="text-suzuki-red">Offers</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore the incredible offers we provide for bikes and scooters. Drive home your dream Suzuki today!
          </motion.p>
        </div>
      </motion.section>

      {/* Offers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {offerBanners.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Overlay with CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 px-4">
                <Link href="/enquiry/get-quote" className="w-full">
                  <motion.button
                    className="w-full py-3 bg-suzuki-red text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get This Offer
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to <span className="text-suzuki-red">Ride Home</span> Your Dream Suzuki?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Contact us today to learn more about our current offers and find the perfect Suzuki for you. Our team is ready to help you get the best deal!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquiry/get-quote">
                <motion.button
                  className="px-8 py-4 bg-suzuki-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Quote
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-suzuki-blue font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl border-2 border-suzuki-blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
