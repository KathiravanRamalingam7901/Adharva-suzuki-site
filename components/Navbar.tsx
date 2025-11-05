'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-12 md:h-14 w-auto"
              >
                <Image
                  src="/images/logo.png"
                  alt="Adharvaa Suzuki Logo"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 768px) 120px, 150px"
                  quality={100}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </motion.div>
              <div className="text-xl md:text-2xl font-bold text-suzuki-blue hidden sm:block ml-2">
                Adharvaa Suzuki
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                Home
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition flex items-center">
                  Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      <Link href="/products/motorcycles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Motorcycles
                      </Link>
                      <Link href="/products/scooters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Scooters
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* For Enquiry Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setEnquiryOpen(true)}
                onMouseLeave={() => setEnquiryOpen(false)}
              >
                <button className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition flex items-center">
                  For Enquiry
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {enquiryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      <Link href="/enquiry/get-quote" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Get Quote
                      </Link>
                      <Link href="/enquiry/book-test-drive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Book Test Drive
                      </Link>
                      <Link href="/enquiry/book-service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Book Service
                      </Link>
                      <Link href="/enquiry/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Finance
                      </Link>
                      <Link href="/enquiry/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Insurance
                      </Link>
                      <Link href="/enquiry/exchange" className="block px-4 py-2 text-sm text-gray-700 hover:bg-suzuki-blue hover:text-white transition">
                        Exchange
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/gallery" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                Gallery
              </Link>
              <Link href="/offers" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                Offers
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                About Us
              </Link>
              <Link href="/blogs" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                Blogs
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-suzuki-blue px-3 py-2 rounded-md text-sm font-medium transition">
                Careers
              </Link>
              <Link href="/contact" className="bg-suzuki-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-suzuki-blue focus:outline-none"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t overflow-hidden shadow-lg"
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/offers", label: "Offers" },
                { href: "/about", label: "About Us" },
                { href: "/blogs", label: "Blogs" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us", isButton: true },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {item.isButton ? (
                    <Link href={item.href}>
                      <motion.div
                        className="bg-suzuki-blue text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ) : (
                    <Link href={item.href}>
                      <motion.div
                        className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                        whileTap={{ scale: 0.98, x: 10 }}
                        whileHover={{ x: 10, color: "#1E40AF" }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="px-3 py-2 border-t border-gray-200 mt-2"
              >
                <motion.div 
                  className="text-gray-700 font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Products
                </motion.div>
                {[
                  { href: "/products/motorcycles", label: "Motorcycles" },
                  { href: "/products/scooters", label: "Scooters" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className="text-gray-600 block px-3 py-1 rounded-md text-sm"
                        whileTap={{ scale: 0.98, x: 10 }}
                        whileHover={{ x: 10, color: "#1E40AF" }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="px-3 py-2 border-t border-gray-200 mt-2"
              >
                <motion.div 
                  className="text-gray-700 font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  For Enquiry
                </motion.div>
                {[
                  { href: "/enquiry/get-quote", label: "Get Quote" },
                  { href: "/enquiry/book-test-drive", label: "Book Test Drive" },
                  { href: "/enquiry/book-service", label: "Book Service" },
                  { href: "/enquiry/finance", label: "Finance" },
                  { href: "/enquiry/insurance", label: "Insurance" },
                  { href: "/enquiry/exchange", label: "Exchange" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className="text-gray-600 block px-3 py-1 rounded-md text-sm"
                        whileTap={{ scale: 0.98, x: 10 }}
                        whileHover={{ x: 10, color: "#1E40AF" }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
