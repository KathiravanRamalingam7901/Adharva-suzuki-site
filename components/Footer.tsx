'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Adharvaa Suzuki</h3>
            <p className="text-gray-400">
              Your trusted partner for premium Suzuki motorcycles and scooters. 
              Excellence in every ride, satisfaction in every service.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products/motorcycles" className="hover:text-white transition">Motorcycles</Link></li>
              <li><Link href="/products/scooters" className="hover:text-white transition">Scooters</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/offers" className="hover:text-white transition">Offers</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Enquiry</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/enquiry/get-quote" className="hover:text-white transition">Get Quote</Link></li>
              <li><Link href="/enquiry/book-test-drive" className="hover:text-white transition">Book Test Drive</Link></li>
              <li><Link href="/enquiry/book-service" className="hover:text-white transition">Book Service</Link></li>
              <li><Link href="/enquiry/finance" className="hover:text-white transition">Finance</Link></li>
              <li><Link href="/enquiry/insurance" className="hover:text-white transition">Insurance</Link></li>
              <li><Link href="/enquiry/exchange" className="hover:text-white transition">Exchange</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sales: +91-89400 57000</li>
              <li>Service: +91-89400 57111</li>
              <li>Email: care.suzuki@adharvaa.in</li>
              <li>Coimbatore, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adharvaa Automobiles Private Limited. All rights reserved.</p>
          <p className="mt-2 text-sm">Developed by Reputes</p>
        </div>
      </div>
    </footer>
  )
}

