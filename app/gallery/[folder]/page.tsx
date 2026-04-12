'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Resource {
  public_id: string
  secure_url: string
  format: string
  resource_type: string
}

export default function AlbumPage() {
  const params = useParams()
  const folderName = decodeURIComponent(params.folder as string)
  
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    async function fetchAssets() {
      try {
        const response = await fetch(`/api/gallery/assets?folder=${encodeURIComponent(folderName)}`)
        const data = await response.json()
        if (Array.isArray(data)) {
          setResources(data)
        }
      } catch (error) {
        console.error('Failed to fetch assets:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAssets()
  }, [folderName])

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % resources.length)
    }
  }

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + resources.length) % resources.length)
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/gallery" className="text-suzuki-blue hover:text-suzuki-red font-medium flex items-center gap-2 mb-8">
          ← Back to Albums
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 capitalize">
          {folderName}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-suzuki-blue"></div>
          </div>
        ) : resources.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {resources.map((res, index) => (
              <motion.div
                key={res.public_id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative break-inside-avoid rounded-xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all group"
                onClick={() => setSelectedIndex(index)}
              >
                {res.resource_type === 'video' ? (
                  <div className="relative aspect-video flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 bg-suzuki-red/90 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs pl-1">
                        ▶
                      </div>
                    </div>
                    <video className="w-full h-full object-cover">
                      <source src={res.secure_url} />
                    </video>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={res.secure_url}
                      alt={res.public_id}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500">No photos or videos found in this album.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl font-light hover:text-suzuki-red z-10"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 md:left-10 text-white text-5xl hover:text-suzuki-red hidden md:block z-10"
              onClick={prevImage}
            >
              ‹
            </button>
            <button 
              className="absolute right-4 md:right-10 text-white text-5xl hover:text-suzuki-red hidden md:block z-10"
              onClick={nextImage}
            >
              ›
            </button>

            <motion.div
              key={resources[selectedIndex].public_id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {resources[selectedIndex].resource_type === 'video' ? (
                <video 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                >
                  <source src={resources[selectedIndex].secure_url} />
                </video>
              ) : (
                <Image
                  src={resources[selectedIndex].secure_url}
                  alt="Full view"
                  width={1920}
                  height={1080}
                  className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
