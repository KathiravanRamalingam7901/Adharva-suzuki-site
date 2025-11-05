'use client'

import { motion } from 'framer-motion'

const blogs = [
  { title: 'Maintenance Tips', desc: 'How to keep your Suzuki running smoothly', date: '2024-01-15' },
  { title: 'New Model Launch', desc: 'Introducing the latest Suzuki models', date: '2024-01-10' },
  { title: 'Riding Safety', desc: 'Essential safety tips for two-wheeler riders', date: '2024-01-05' },
]

export default function BlogsPage() {
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
            Blogs
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Latest news and updates from Adharvaa Suzuki
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-6xl">📝</div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

