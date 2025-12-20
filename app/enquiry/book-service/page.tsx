'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BookServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleNumber: '',
    vehicleModel: '',
    serviceType: '',
    preferredDate: '',
    location: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Invalid Name'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Invalid Name'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Invalid Email'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email'
    }

    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedPhone = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!mobileRegex.test(cleanedPhone) || cleanedPhone.length !== 10) {
      newErrors.phone = 'Invalid Phone Number'
    }

    if (!formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = 'Vehicle registration number is required'
    } else if (formData.vehicleNumber.trim().length < 5) {
      newErrors.vehicleNumber = 'Please enter a valid vehicle registration number'
    }

    if (!formData.vehicleModel) {
      newErrors.vehicleModel = 'Please select a vehicle model'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date'
    } else {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.preferredDate = 'Date cannot be in the past'
      }
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
      newErrors.name = 'Invalid Name'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Invalid Name'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Invalid Email'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email'
    }

    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedPhone = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!mobileRegex.test(cleanedPhone) || cleanedPhone.length !== 10) {
      newErrors.phone = 'Invalid Phone Number'
    }

    if (!formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = 'Vehicle registration number is required'
    } else if (formData.vehicleNumber.trim().length < 5) {
      newErrors.vehicleNumber = 'Please enter a valid vehicle registration number'
    }

    if (!formData.vehicleModel) {
      newErrors.vehicleModel = 'Please select a vehicle model'
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date'
    } else {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.preferredDate = 'Date cannot be in the past'
      }
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
      const res = await fetch('/api/enquiry/book-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitMessage('Service booked successfully! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleNumber: '',
        vehicleModel: '',
        serviceType: '',
        preferredDate: '',
        location: '',
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
            src="/images/SectionBanner/Katana Banner 3x1-01.jpg"
            alt="Book Service"
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
                Book Service
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Keep your Suzuki running smoothly with our expert service
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Book your service slot</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Share your vehicle details and preferred date; we’ll confirm your appointment.
              </p>
            </div>
            <motion.div
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-suzuki-blue/10 text-suzuki-blue text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🛠️
            </motion.div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'phone', label: 'Phone', type: 'tel' },
              { id: 'vehicleNumber', label: 'Vehicle Registration Number', type: 'text' },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type={field.type}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  maxLength={field.id === 'phone' ? 10 : undefined}
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                    errors[field.id]
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-gray-300 focus:ring-suzuki-blue'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                  whileHover={{ scale: 1.005 }}
                />
                {errors[field.id] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors[field.id]}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.55 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Vehicle Model <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.vehicleModel
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              >
                <option value="">Select Model</option>
                <option>Access 125</option>
                <option>Avenis</option>
                <option>Gixxer SF 250</option>
                <option>Gixxer SF</option>
                <option>Burgman Street</option>
                <option>Burgman Street EX</option>
                <option>V-STROM SX</option>
              </motion.select>
              {errors.vehicleModel && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.vehicleModel}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Service Type <span className="text-red-500">*</span>
              </label>
              <motion.select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.serviceType
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              >
                <option value="">Select Service</option>
                <option>Regular Service</option>
                <option>Major Service</option>
                <option>Repair</option>
                <option>Oil Change</option>
              </motion.select>
              {errors.serviceType && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.serviceType}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.65 }}
            >
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:border-transparent outline-none text-sm sm:text-base transition-all ${
                  errors.preferredDate
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-gray-300 focus:ring-suzuki-blue'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 1px rgba(37,99,235,0.3)' }}
                whileHover={{ scale: 1.005 }}
              />
              {errors.preferredDate && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.preferredDate}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.7 }}
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

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-sm ${
                  submitMessage.includes('successfully')
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
              transition={{ delay: 0.8 }}
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
                  <span>Book Service</span>
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

