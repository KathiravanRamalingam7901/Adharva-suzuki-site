'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const valueProps = [
  {
    title: 'Personalised Experience',
    description: 'We believe in open and honest communication, from pricing details to the features of our Suzuki lineup. We ensure clarity in every interaction, fostering a relationship built on trust.',
    icon: '👤',
  },
  {
    title: 'Transparency and Trust',
    description: 'Your confidence in us is paramount, and we strive to maintain transparency throughout our association. We provide clear information at every step.',
    icon: '🤝',
  },
  {
    title: 'Continuous Support',
    description: 'Your ownership experience matters to us beyond the purchase. Our commitment extends to providing ongoing support and care throughout your journey.',
    icon: '🛡️',
  },
]

const serviceFeatures = [
  {
    icon: '🔧',
    title: 'Genuine Spares & Accessories',
    description: 'At Adharvaa Suzuki Authorised Service Centre, authenticity is our cornerstone. We exclusively employ genuine Suzuki spares and accessories.',
  },
  {
    icon: '🏢',
    title: 'Authorised Service Centre',
    description: 'Experience exceptional service at our Suzuki authorised service centre. Our certified technicians ensure top-notch care for your vehicle.',
  },
  {
    icon: '👨‍🔧',
    title: 'Qualified Technicians',
    description: 'Our team comprises seasoned technicians, extensively trained and certified to provide meticulous care and precision for your Suzuki.',
  },
  {
    icon: '⚡',
    title: 'Quick Delivery',
    description: 'Efficiency is key. We prioritise quick servicing without compromising quality, minimising downtime and maximising your convenience.',
  },
  {
    icon: '🛢️',
    title: 'Suzuki Recommended Oil',
    description: 'We adhere strictly to Suzuki\'s recommendations, using their recommended oils for optimal engine health and efficiency.',
  },
  {
    icon: '📞',
    title: 'Contact Us Now',
    description: 'Contact us at Adharvaa Suzuki for all your automotive needs! Our dedicated team is here to assist you with sales, service, or support.',
  },
]

const stats = [
  { number: '6+', label: 'Branches' },
  { number: '10,000+', label: 'Vehicles Serviced' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Support' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
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
            Your Trusted Partner
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-suzuki-red">Adharvaa Suzuki</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Bringing you the best in class of Suzuki. Excellence meets passion for Suzuki two-wheelers.
          </motion.p>
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

      {/* Value Propositions - Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-suzuki-red">Core Values</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide tailored guidance and recommendations, ensuring you find the Suzuki model that perfectly aligns with your desires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-gradient-to-br from-suzuki-blue/10 to-suzuki-red/10 rounded-2xl">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Content with Image */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Your Trusted Authorised <span className="text-suzuki-red">Suzuki Dealer</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">
                Discover Adharvaa Suzuki, where excellence meets passion for Suzuki two-wheelers. As a premium dealership, we're devoted to delivering unparalleled customer experiences. Our commitment goes beyond selling exceptional Suzuki models; it's about ensuring your satisfaction through top-tier service.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Adharvaa Suzuki takes pride in being your trusted authorised Suzuki dealer and the ultimate destination for all Suzuki Motorcycle and Scooter enthusiasts in Coimbatore. From a powerful Suzuki bike to a stylish Suzuki scooter, our Suzuki bike showroom will get you the most extensive range of two-wheelers to match your riding preferences.
              </p>
            </motion.div>

            <motion.div
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/images/adharvaa-showroom-exterior.png"
                alt="Adharvaa Suzuki Showroom"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            10,000+ Vehicles <span className="text-suzuki-red">Serviced</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you seek adventure, efficiency, or thrill, our personalised approach ensures you leave with not just a bike, but a partner in your riding journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceFeatures.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-suzuki-blue/10 to-suzuki-red/10 rounded-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-suzuki-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Commitment to <span className="text-suzuki-red">Excellence</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Excellence is what we commit ourselves to, so every customer gets the best service and unbeatable prices. We believe in giving you a hassle-free experience to make us the perfect Suzuki two-wheeler showroom in Coimbatore. At every step, from choosing the apt Suzuki model to providing you with various financing options, we stand by your side.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-suzuki-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
