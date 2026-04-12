'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Album {
  name: string
  path: string
  thumbnail?: string
}

export default function GalleryPage() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch('/api/gallery/folders')
        const data = await response.json()
        if (Array.isArray(data)) {
          setAlbums(data)
        }
      } catch (error) {
        console.error('Failed to fetch albums:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAlbums()
  }, [])

  return (
    <div className="min-h-screen pt-24 bg-white text-slate-900">
      {/* Hero Section */}
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
            Gallery
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience
            <span className="block text-suzuki-red">Adharvaa Suzuki</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore our albums of high-performance motorcycles, stylish scooters, and memorable customer moments.
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-suzuki-blue"></div>
          </div>
        ) : albums.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {albums.map((album, index) => (
              <motion.div
                key={album.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/gallery/${encodeURIComponent(album.name)}`} className="group block">
                  <div className="relative h-80 bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    {/* Album Thumbnail */}
                    {album.thumbnail ? (
                      <Image
                        src={album.thumbnail}
                        alt={album.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <span className="text-6xl group-hover:scale-110 transition-transform duration-500">📁</span>
                      </div>
                    )}
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                      <div className="overflow-hidden">
                        <h3 className="text-2xl font-bold text-white group-hover:text-suzuki-red transition-colors duration-300 translate-y-0 group-hover:translate-y-[-4px] transform">
                          {album.name}
                        </h3>
                      </div>
                      <div className="h-[2px] w-0 group-hover:w-full bg-suzuki-red transition-all duration-500 mb-2"></div>
                      <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Stories & Media →
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
