'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    model: '',
    email: '',
    city: '',
    pincode: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    
    // 1. Validate and get errors
    const newErrors: Record<string, string> = {}
    
    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Mobile Number Validation
    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedPhone = formData.mobile.replace(/\D/g, '')
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required'
    } else if (!mobileRegex.test(cleanedPhone) || cleanedPhone.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number'
    }

    // Model Validation
    if (!formData.model) {
      newErrors.model = 'Please select a model'
    }

    // City Validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }

    // Pincode Validation
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode'
    }

    // Email Validation (Optional, but strict if entered)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    const isValid = Object.keys(newErrors).length === 0
    
    // 2. Handle Invalid State
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

    // 3. Submit if Valid
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/enquiry/get-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitMessage('Thank you for your inquiry! We will send you a quote soon.')
      setFormData({
        name: '',
        mobile: '',
        model: '',
        email: '',
        city: '',
        pincode: '',
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
            alt="Get Quote"
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
                Get Quote
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Request a personalized quote for your dream Suzuki vehicle
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Tell us about your requirement</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Fill in your details and our team will get back to you with the best offer.
              </p>
            </div>
            <motion.div
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-suzuki-blue/10 text-suzuki-blue text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ₹
            </motion.div>
          </motion.div>

          {/* Form with noValidate to allow custom error handling */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
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

              {/* Mobile Number Field */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.35 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.mobile
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors.mobile && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.mobile}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Model Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Model <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.model
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              >
                <option value="">Select Model</option>
                <option>V - STROM SX</option>
                <option>GIXXER SF 250</option>
                <option>GIXXER 250</option>
                <option>GIXXER SF</option>
                <option>GIXXER</option>
                <option>ACCESS 125</option>
                <option>AVENIS</option>
                <option>BURGMAN STREET</option>
                <option>BURGMAN STREET EX</option>
              </motion.select>
              {errors.model && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.model}
                </motion.p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Field (Optional) */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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

              {/* City Field */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.55 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  City <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.city
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors.city && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.city}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Pincode Field */}
               <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors.pincode
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors.pincode && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.pincode}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.65 }}
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
              transition={{ delay: 0.7 }}
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
                  <span>Request Quote</span>
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