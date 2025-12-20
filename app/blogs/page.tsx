'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const blogs = [
  {
    id: 1,
    title: 'Maintenance Tips for Your Suzuki',
    desc: 'Learn how to keep your Suzuki two-wheeler running smoothly with these essential maintenance tips and best practices.',
    date: '2024-01-15',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558980664-1e0fc1825e17?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'New Model Launch: Latest Suzuki Collection',
    desc: 'Discover the newest additions to the Suzuki family with cutting-edge features and innovative designs.',
    date: '2024-01-10',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Riding Safety: Essential Tips for Two-Wheeler Riders',
    desc: 'Stay safe on the road with these crucial safety tips and guidelines for responsible two-wheeler riding.',
    date: '2024-01-05',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Fuel Efficiency: Maximize Your Bike Performance',
    desc: 'Get the most out of every drop of fuel with these proven techniques to improve your bike\'s efficiency.',
    date: '2023-12-28',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1558980664-2cd6638a1b89?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Winter Care Guide for Your Two-Wheeler',
    desc: 'Protect your Suzuki during the winter months with our comprehensive care guide and storage tips.',
    date: '2023-12-20',
    category: 'Care',
    image: 'https://images.unsplash.com/photo-1558980664-1e0fc1825e17?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Accessories That Enhance Your Ride',
    desc: 'Explore must-have accessories that can improve comfort, safety, and style for your Suzuki.',
    date: '2023-12-15',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&h=600&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
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
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
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
              Latest Updates & Insights
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-suzuki-red to-orange-400 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Stay informed with the latest news, tips, and insights from Adharvaa Suzuki
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-suzuki-blue"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {blog.category}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <motion.p
                  className="text-xs sm:text-sm text-gray-500 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </motion.p>
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-suzuki-blue transition-colors line-clamp-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {blog.desc}
                </motion.p>
                <motion.div
                  className="flex items-center text-suzuki-blue font-semibold text-sm group-hover:gap-2 transition-all"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  <span>Read More</span>
                  <motion.svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
