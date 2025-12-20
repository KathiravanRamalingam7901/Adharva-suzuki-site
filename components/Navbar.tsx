'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileEnquiryOpen, setMobileEnquiryOpen] = useState(false)

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

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - prevents body scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-[100] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Full-Screen Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full h-full bg-white z-[101] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex justify-end items-center p-4 sm:p-6 border-b border-gray-100">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 text-gray-700 hover:text-suzuki-red transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Social Media Icons */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex justify-center items-center gap-6 px-6 py-6 border-b border-gray-100"
                >
                  <motion.a
                    href="https://www.instagram.com/adharvaasuzuki"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-700 hover:text-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/adharvaasuzuki"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/918940057000"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://maps.app.goo.gl/AZ4mEe6abYyzsp5e8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-700 hover:text-red-600 transition-colors"
                    aria-label="Google Maps"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C7.589 0 4 3.589 4 8c0 4.245 7.273 15.107 7.583 15.567a1 1 0 0 0 1.834 0C13.727 23.107 21 12.245 21 8c0-4.411-3.589-8-9-8zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Menu Items */}
                <div className="flex-1 px-6 py-8 space-y-1">
                  {[
                    { href: "/", label: "Home" },
                    { 
                      href: "#", 
                      label: "Products", 
                      hasDropdown: true,
                      isOpen: mobileProductsOpen,
                      onClick: () => setMobileProductsOpen(!mobileProductsOpen),
                      subItems: [
                        { href: "/products/motorcycles", label: "Motorcycles" },
                        { href: "/products/scooters", label: "Scooters" },
                      ]
                    },
                    { 
                      href: "#", 
                      label: "For Enquiry", 
                      hasDropdown: true,
                      isOpen: mobileEnquiryOpen,
                      onClick: () => setMobileEnquiryOpen(!mobileEnquiryOpen),
                      subItems: [
                        { href: "/enquiry/get-quote", label: "Get Quote" },
                        { href: "/enquiry/book-test-drive", label: "Book Test Drive" },
                        { href: "/enquiry/book-service", label: "Book Service" },
                        { href: "/enquiry/finance", label: "Finance" },
                        { href: "/enquiry/insurance", label: "Insurance" },
                        { href: "/enquiry/exchange", label: "Exchange" },
                      ]
                    },
                    { href: "/gallery", label: "Gallery" },
                    { href: "/offers", label: "Offers" },
                    { href: "/about", label: "About Us" },
                    { href: "/blogs", label: "Blogs", isHighlighted: true },
                    { href: "/careers", label: "Careers" },
                    { href: "/contact", label: "Contact Us" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <motion.button
                            onClick={item.onClick}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-between py-4 text-left text-gray-700 hover:text-suzuki-blue transition-colors"
                          >
                            <span className="text-lg font-medium">{item.label}</span>
                            <motion.svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: item.isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </motion.button>
                          <AnimatePresence>
                            {item.isOpen && item.subItems && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                              >
                                {item.subItems.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block py-3 text-gray-600 hover:text-suzuki-blue transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-4 text-lg font-medium transition-colors ${
                            item.isHighlighted
                              ? 'text-green-600 hover:text-green-700'
                              : 'text-gray-700 hover:text-suzuki-blue'
                          }`}
                        >
                          <motion.span
                            whileTap={{ scale: 0.98 }}
                            className="block"
                          >
                            {item.label}
                          </motion.span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
