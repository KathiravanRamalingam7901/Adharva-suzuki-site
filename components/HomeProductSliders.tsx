'use client'

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const bikes = [
  {
    name: 'V-STROM SX',
    description: 'Adventure touring motorcycle',
    category: 'Motorcycle',
    image: '/images/bikes/v-strom-sx/v-strom-sx-yellowColour.png',
    link: '/products/motorcycles/v-strom-sx',
  },
  {
    name: 'Gixxer SF 250',
    description: 'Sporty 250cc performance',
    category: 'Motorcycle',
    image: '/images/bikes/gixxer-sf-250/Gixxer SF 250 Blue Colour.png',
    link: '/products/motorcycles/gixxer-sf-250',
  },
  {
    name: 'Gixxer SF',
    description: 'Stylish and agile',
    category: 'Motorcycle',
    image: '/images/bikes/gixxer-sf/Gixxer-SF-BlueColour.png',
    link: '/products/motorcycles/gixxer-sf',
  },
]

const scooters = [
  {
    name: 'Access 125',
    description: 'Trusted everyday commuter',
    category: 'Scooter',
    image: '/images/scooters/Access/Access Standard Edition.png',
    link: '/products/scooters/access-125',
  },
  {
    name: 'Avenis',
    description: 'Sporty urban scooter',
    category: 'Scooter',
    image: '/images/scooters/Avenis/Avenis_Yellow.png',
    link: '/products/scooters/avenis',
  },
  {
    name: 'Burgman Street',
    description: 'Maxi-styled premium scooter',
    category: 'Scooter',
    image: '/images/scooters/Burgman Street/Burgman Street Standard Edition.png',
    link: '/products/scooters/burgman-street',
  },
  {
    name: 'Burgman Street EX',
    description: 'Exclusive maxi-scooter variant',
    category: 'Scooter',
    image: '/images/scooters/Burgman Street Ex/Burgman Street Ex.png',
    link: '/products/scooters/burgman-street-ex',
  },
]

function ContinuousSlider({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: typeof bikes
}) {
  const duplicated = [...items, ...items]

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              {subtitle}
            </p>
          </div>
          <Link href={title.includes('Motorcycles') ? '/products/motorcycles' : '/products/scooters'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-suzuki-blue text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md"
            >
              View All
            </motion.button>
          </Link>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [0, -1400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            {duplicated.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={item.link}>
                  <motion.div 
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full border border-gray-100"
                    whileHover={{ scale: 1.05, y: -10 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="relative h-44 sm:h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-4 sm:p-5"
                          sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute top-3 right-3 bg-suzuki-red text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                      >
                        {item.category}
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}

export default function HomeProductSliders() {
  return (
    <section className="bg-gray-50 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Our Range
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Your complete Suzuki lineup – premium motorcycles and scooters from Adharvaa Suzuki.
          </p>
        </motion.div>
      </div>
      <ContinuousSlider
        title="Motorcycles"
        subtitle="Performance and style engineered for every kind of rider."
        items={bikes}
      />
      <ContinuousSlider
        title="Scooters"
        subtitle="Comfortable, efficient scooters crafted for the city."
        items={scooters}
      />
    </section>
  )
}
