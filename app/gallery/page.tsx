'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

// Gallery images - using downloaded images
const galleryImages = [
  '/images/703249_7b7050500ac24d73833e84dd126f7eee~mv2.jpg',
  '/images/aedd32_212295d3579f44d4a800fc13b4fc1ad9~mv2.jpg',
  '/images/aedd32_afd36740f5e847e0ab3b5d7e7ca60653~mv2.jpg',
  '/images/aedd32_a0ab81273678476f86106450dc5b8209~mv2.jpg',
  '/images/703249_880250e1360145ceb1c860bee04a1687~mv2.jpg',
  '/images/C75A1547_JPG.jpg',
  '/images/0H4A3029 (1).jpg',
  '/images/aedd32_12362117de9e40849829a544cfaae1a2~mv2.png',
  '/images/aedd32_c1708bcf4b004c2e9621d23d65bef307~mv2.png',
  '/images/aedd32_f299d89988834e919d3ea50ec46cf563~mv2.png',
  '/images/aedd32_91c76091f3b8496787cbdbdaa2d4f415~mv2.png',
  '/images/aedd32_b16aa5136e804c38b36a0f9e919c6848~mv2.png',
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore our collection of Suzuki motorcycles and scooters
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(imageUrl)}
              className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="text-6xl flex items-center justify-center h-full bg-gray-200">🏍️</div>'
                  }
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[90vh]"
          >
            <Image
              src={selectedImage}
              alt="Full size gallery image"
              width={1200}
              height={800}
              className="object-contain rounded-lg max-w-full max-h-full"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
