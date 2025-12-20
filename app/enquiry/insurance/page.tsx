'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InsurancePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    registrationNumber: '',
    insuranceType: '',
    currentPolicyExpiry: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedPhone = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!mobileRegex.test(cleanedPhone) || cleanedPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.vehicle) {
      newErrors.vehicle = 'Please select a vehicle model'
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required'
    } else if (formData.registrationNumber.trim().length < 5) {
      newErrors.registrationNumber = 'Please enter a valid registration number'
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Please select insurance type'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    setErrors(newErrors)
    const isValid = Object.keys(newErrors).length === 0
    return isValid
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    
    // Validate and get errors directly
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedPhone = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!mobileRegex.test(cleanedPhone) || cleanedPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.vehicle) {
      newErrors.vehicle = 'Please select a vehicle model'
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required'
    } else if (formData.registrationNumber.trim().length < 5) {
      newErrors.registrationNumber = 'Please enter a valid registration number'
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Please select insurance type'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    setErrors(newErrors)
    const isValid = Object.keys(newErrors).length === 0
    
    if (!isValid) {
      // Scroll to first error field
      const firstErrorField = Object.keys(newErrors)[0]
      if (firstErrorField) {
        setTimeout(() => {
          const element = document.querySelector(`[name="${firstErrorField}"]`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            ;(element as HTMLElement).focus()
          }
        }, 100)
      }
      setSubmitMessage(`Please correct the ${Object.keys(newErrors).length} error(s) in the form.`)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/enquiry/insurance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitMessage('Thank you for your inquiry! We will contact you soon with insurance options.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        registrationNumber: '',
        insuranceType: '',
        currentPolicyExpiry: '',
        location: '',
        message: '',
      })
      setErrors({})
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Banner Image */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src="/images/SectionBanner/250121 Suzuki_Gixxer150SF_Banner_3x1_ratio-01.jpg"
            alt="Insurance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-center w-full text-white">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Insurance
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive insurance solutions to protect your investment
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-between mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Insurance Inquiry</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Get the best insurance coverage for your Suzuki vehicle.
              </p>
            </div>
            <motion.div
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-suzuki-blue/10 text-suzuki-blue text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🛡️
            </motion.div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.35 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={10}
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.45 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Vehicle Model <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.vehicle
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              >
                <option value="">Select Vehicle</option>
                <option>Access 125</option>
                <option>Avenis</option>
                <option>Gixxer SF 250</option>
                <option>Gixxer SF</option>
                <option>Burgman Street</option>
                <option>Burgman Street EX</option>
                <option>V-STROM SX</option>
              </motion.select>
              {errors.vehicle && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.vehicle}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Registration Number <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.registrationNumber
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              />
              {errors.registrationNumber && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.registrationNumber}
                </motion.p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.55 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Insurance Type <span className="text-red-500">*</span>
                </label>
                <motion.select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.insuranceType
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                >
                  <option value="">Select Insurance Type</option>
                  <option>Comprehensive</option>
                  <option>Third Party</option>
                  <option>New Policy</option>
                  <option>Renewal</option>
                </motion.select>
                {errors.insuranceType && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.insuranceType}
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Current Policy Expiry Date
                </label>
                <motion.input
                  type="date"
                  name="currentPolicyExpiry"
                  value={formData.currentPolicyExpiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-suzuki-blue focus:border-transparent outline-none text-sm sm:text-base transition-all"
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.65 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Location <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.location
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              />
              {errors.location && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.location}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-suzuki-blue focus:border-transparent outline-none text-sm sm:text-base transition-all resize-none"
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              />
            </motion.div>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-sm ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-suzuki-blue text-white py-3 sm:py-3.5 px-6 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.03, boxShadow: '0 12px 30px rgba(37,99,235,0.45)' }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.75 }}
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⟳
                  </motion.span>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Insurance Inquiry</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    ➜
                  </motion.span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
