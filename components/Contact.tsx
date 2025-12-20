'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Branch = {
  id: string
  name: string
  showroomName: string
  address: string
  phone: string
  phone2?: string
  email: string
  mapUrl: string
}

const branches: Branch[] = [
  {
    id: 'coimbatore-avinashi',
    name: 'Coimbatore - Avinashi Road',
    showroomName: 'Avinashi road Showroom',
    address: '5, Avinashi Rd, Peelamedu, Masakalipalayam, Coimbatore, Tamil Nadu 641004',
    phone: '+91-89400 57000',
    email: 'service.suzuki@adharvaa.in',
    mapUrl: 'https://maps.app.goo.gl/AZ4mEe6abYyzsp5e8',
  },
  {
    id: 'kinathukadavu',
    name: 'Kinathukadavu',
    showroomName: 'Adharvaa Suzuki Showroom & Service Centre',
    address: '7/277-3 Navaladi Valagam, Kamarajar Nagar, Covai Mani Road, Solavampalayam, Kinathukadavu (Tk), Coimbatore 642109',
    phone: '+91-81240 13400',
    email: 'kkd.suzuki@adharvaa.in',
    mapUrl: 'https://maps.app.goo.gl/pCpAjS9D17vLzMHc7',
  },
  {
    id: 'udumalaipettai',
    name: 'Udumalaipettai',
    showroomName: 'Adharvaa Suzuki Showroom & Service Centre',
    address: 'No 62, Palani Road, Udumalaipettai, Tamil Nadu - 641 026.',
    phone: '+91-81240 26000',
    email: 'upt.suzuki@adharvaa.in',
    mapUrl: 'https://maps.app.goo.gl/KkokSg12duXAZS6A6',
  },
  {
    id: 'coimbatore-sundarapuram',
    name: 'Coimbatore - Sundarapuram',
    showroomName: 'Adharvaa Suzuki Showroom & Service Centre',
    address: 'Pollachi Main Road, Sundarapuram, Kuruchi, Coimbatore, Tamil Nadu - 641 024.',
    phone: '+91- 89400 53700',
    email: 'service.suzuki@adharvaa.in',
    mapUrl: 'https://maps.app.goo.gl/sgQ4yuYH7ohevsxw7',
  },
  {
    id: 'coimbatore-avinashi-service',
    name: 'Coimbatore - Avinashi Road',
    showroomName: 'Adharvaa Suzuki Service Centre',
    address: 'No. 521, Avinashi Road, Nava India Road, Opposite KFC, Coimbatore, Tamil Nadu - 641 004',
    phone: '+91-89400 57111',
    email: 'service.suzuki@adharvaa.in',
    mapUrl: 'https://www.google.com/maps/place/Adharvaa+Suzuki+-+Service+Centre/@11.0160272,76.9912583,15z/data=!4m6!3m5!1s0x3ba8598168e9b355:0x21dcbcf0b5723b99!8m2!3d11.0160272!4d76.9912583!16s%2Fg%2F11sjvsf8vk?entry=ttu',
  },
  {
    id: 'dharapuram',
    name: 'Dharapuram',
    showroomName: 'Adharvaa Suzuki Service Centre',
    address: 'Nehru Nagar, Bypass Road, Opp Reliance Petrol Bunk, Dharapuram - 56',
    phone: '+91-89400 20000',
    phone2: '+91 89400 33600',
    email: 'service.suzuki@adharvaa.in',
    mapUrl: 'https://maps.app.goo.gl/19xbBpqu2zcfThXe8',
  },
]

const models = [
  'Access 125',
  'Avenis',
  'Gixxer SF 250',
  'Gixxer SF',
  'Burgman Street',
  'Burgman Street EX',
  'V-STROM SX',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    model: '',
    email: '',
    address: '',
    message: '',
    preferredBranch: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Mobile Number validation
    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, '')
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!mobileRegex.test(cleanedMobile) || cleanedMobile.length !== 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Model validation
    if (!formData.model) {
      newErrors.model = 'Please select a model'
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    // Preferred Branch validation
    if (!formData.preferredBranch) {
      newErrors.preferredBranch = 'Please select a preferred branch'
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const copyToClipboard = async (text: string, branchId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAddress(branchId)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormMessage(null)
    
    // Validate and get errors directly
    const newErrors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Mobile Number validation
    const mobileRegex = /^[6-9]\d{9}$/
    const cleanedMobile = formData.mobileNumber.replace(/\D/g, '')
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!mobileRegex.test(cleanedMobile) || cleanedMobile.length !== 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Model validation
    if (!formData.model) {
      newErrors.model = 'Please select a model'
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address must be at least 10 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    // Preferred Branch validation
    if (!formData.preferredBranch) {
      newErrors.preferredBranch = 'Please select a preferred branch'
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
      setFormMessage(`Please correct the ${Object.keys(newErrors).length} error(s) in the form.`)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(true)

    try {
      const selectedBranch = branches.find((b) => b.id === formData.preferredBranch)
      const branchEmail = selectedBranch?.email || 'service.suzuki@adharvaa.in'

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          branchEmail,
          branchName: selectedBranch?.name || 'General Inquiry',
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setFormMessage('Thank you for your inquiry! We will get back to you soon.')
      setFormData({
        name: '',
        mobileNumber: '',
        model: '',
        email: '',
        address: '',
        message: '',
        preferredBranch: '',
      })
    } catch (error) {
      setFormMessage('Something went wrong. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
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
            Get in Touch
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Connect with us at
            <span className="block text-suzuki-red">Adharvaa Suzuki</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Visit any of our branches across Coimbatore and nearby areas. We're here to help you
            find your perfect Suzuki two-wheeler.
          </motion.p>
        </div>
      </motion.section>

      {/* Branch Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <motion.div
          className="mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our Branches
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Choose a branch to visit or contact us directly
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 140,
                damping: 16,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateY: 2,
                boxShadow: '0 20px 40px rgba(15,23,42,0.18)',
              }}
              whileTap={{ scale: 0.98, y: -2 }}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-suzuki-blue/70 hover:shadow-md transition-all"
            >
              {/* Branch Header */}
              <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {branch.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">{branch.showroomName}</p>
              </div>

              {/* Branch Content */}
              <div className="flex-1 p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Address with Copy */}
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed flex-1">
                      {branch.address}
                    </p>
                    <motion.button
                      onClick={() => copyToClipboard(branch.address, branch.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-shrink-0 p-1.5 rounded-lg bg-slate-100 hover:bg-suzuki-blue/10 text-slate-600 hover:text-suzuki-blue transition-colors"
                      title="Copy address"
                    >
                      {copiedAddress === branch.id ? (
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-suzuki-blue flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="text-[11px] sm:text-xs text-suzuki-blue hover:text-suzuki-red font-medium transition-colors"
                    >
                      {branch.phone}
                    </a>
                    {branch.phone2 && (
                      <a
                        href={`tel:${branch.phone2.replace(/\s/g, '')}`}
                        className="text-[11px] sm:text-xs text-suzuki-blue hover:text-suzuki-red font-medium transition-colors"
                      >
                        {branch.phone2}
                      </a>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-suzuki-blue flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${branch.email}`}
                    className="text-[11px] sm:text-xs text-suzuki-blue hover:text-suzuki-red font-medium transition-colors break-all"
                  >
                    {branch.email}
                  </a>
                </div>

                {/* View on Map Button */}
                <motion.a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-suzuki-blue text-white px-3 py-2 text-[11px] sm:text-xs font-semibold shadow-md hover:bg-suzuki-blue/90 transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View on Map
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <motion.div
          className="relative rounded-2xl border border-slate-200 bg-white px-4 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 70, damping: 16 }}
        >
          <div className="absolute -top-6 right-4 sm:right-6 flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] sm:text-xs text-slate-700">We're here to help</span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">
            Send us a Message
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-600 mb-4 sm:mb-6">
            Fill out the form below and we'll get back to you at your preferred branch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                      : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
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
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Mobile Number
                </label>
                <motion.input
                  type="tel"
                  name="mobileNumber"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  maxLength={10}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 transition-all ${
                    errors.mobileNumber
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                      : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
                />
                {errors.mobileNumber && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-1"
                  >
                    {errors.mobileNumber}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Models
                </label>
                <motion.select
                  name="model"
                  required
                  value={formData.model}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 transition-all ${
                    errors.model
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                      : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
                >
                  <option value="">Select Model</option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
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
              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                      : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
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
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Preferred Branch
              </label>
              <motion.select
                name="preferredBranch"
                required
                value={formData.preferredBranch}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 transition-all ${
                  errors.preferredBranch
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name} - {branch.showroomName}
                  </option>
                ))}
              </motion.select>
              {errors.preferredBranch && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.preferredBranch}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Address
              </label>
              <motion.textarea
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 resize-none transition-all ${
                  errors.address
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
              />
              {errors.address && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.address}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="space-y-1.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Message
              </label>
              <motion.textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 resize-none transition-all ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                }`}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(37,99,235,0.1)' }}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            {formMessage && (
              <motion.p
                className="text-[11px] sm:text-xs text-slate-700 p-3 rounded-lg bg-emerald-50 border border-emerald-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formMessage}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              className="mt-1 w-full rounded-lg bg-suzuki-red px-4 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_18px_45px_rgba(220,38,38,0.55)] hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block"
                  >
                    ⟳
                  </motion.span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
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
      </section>
    </div>
  )
}
