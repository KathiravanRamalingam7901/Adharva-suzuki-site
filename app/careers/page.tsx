'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Position = {
  id: string
  title: string
  location: string
  thumbnail: string
  responsibilities: string[]
}

const positions: Position[] = [
  {
    id: 'accounts-manager',
    title: 'Accounts Manager',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Accounts Manager.jpg',
    responsibilities: [
      'Manage daily accounts and financial records',
      'Coordinate with management on reports and audits',
      'Ensure accuracy in billing and vendor payments',
    ],
  },
  {
    id: 'cashier',
    title: 'Cashier',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Casier.jpg',
    responsibilities: [
      'Handle customer billing and payments at the showroom',
      'Maintain cash, card and UPI transaction records',
      'Provide bills and receipts with a friendly approach',
    ],
  },
  {
    id: 'customer-care-executive',
    title: 'Customer Care Executive',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Customer Care Executive.jpg',
    responsibilities: [
      'Attend incoming calls and customer enquiries',
      'Coordinate service, test ride and booking follow‑ups',
      'Maintain excellent customer satisfaction and feedback',
    ],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Sales Executive.jpg',
    responsibilities: [
      'Guide customers on motorcycles and scooters',
      'Achieve monthly sales targets with field follow‑ups',
      'Support finance, insurance and delivery process',
    ],
  },
  {
    id: 'service-technician',
    title: 'Service Technician',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Service Technician.jpg',
    responsibilities: [
      'Diagnose and service Suzuki two‑wheelers',
      'Ensure high-quality, timely service delivery',
      'Maintain workshop safety and cleanliness',
    ],
  },
  {
    id: 'service-advisor',
    title: 'Service Advisor',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Service Advisor.jpg',
    responsibilities: [
      'Interact with service customers at reception',
      'Open job cards and explain service estimates',
      'Coordinate with technicians for on‑time delivery',
    ],
  },
  {
    id: 'system-operator',
    title: 'System Operator',
    location: 'Coimbatore',
    thumbnail: '/images/careers/System Operator.jpg',
    responsibilities: [
      'Handle data entry in DMS / internal systems',
      'Maintain customer and vehicle records accurately',
      'Support sales and service teams with reports',
    ],
  },
  {
    id: 'mechanic',
    title: 'Mechanic/Technician',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Service Technician.jpg',
    responsibilities: [
      'Perform scheduled vehicle maintenance',
      'Repair and replace damaged parts',
      'Test components and systems',
    ],
  },
  {
    id: 'telecaller',
    title: 'Telecaller',
    location: 'Coimbatore',
    thumbnail: '/images/careers/Telecaller.png',
    responsibilities: [
      'Contact potential/existing customers',
      'Answer questions about products',
      'Keep records of calls and sales',
    ],
  },
]

const branches = [
  { id: 'coimbatore-avinashi', name: 'Coimbatore - Avinashi Road' },
  { id: 'kinathukadavu', name: 'Kinathukadavu' },
  { id: 'udumalaipettai', name: 'Udumalaipettai' },
  { id: 'coimbatore-sundarapuram', name: 'Coimbatore - Sundarapuram' },
  { id: 'dharapuram', name: 'Dharapuram' },
]

const cardVariants = {
  initial: { opacity: 0, y: 40, rotateX: -10, scale: 0.95 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  }),
  hover: {
    y: -6,
    scale: 1.03,
    rotateX: 4,
    boxShadow: '0 25px 60px rgba(15,23,42,0.45)',
  },
}

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string>(positions[0]?.id ?? '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    position: positions[0]?.id ?? '',
    preferredBranch: '',
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Name validation: only allow letters, spaces, and dots
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!/^[a-zA-Z\s\.]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits'
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.preferredBranch) newErrors.preferredBranch = 'Please select a preferred branch'
    if (!resumeFile) newErrors.resume = 'Resume is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Clear resume error when file is selected
  const handleFileChange = (file: File | null) => {
    setResumeFile(file)
    if (file && errors.resume) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors.resume
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormMessage(null)

    if (!validateForm()) {
      setFormMessage('Please fix the errors highlighted above.')
      return
    }

    setIsSubmitting(true)

    try {
      // -----------------------------------------------------------------------
      // SECURE SUBMISSION (FormSubmit.co)
      // -----------------------------------------------------------------------
      const TARGET_EMAIL = "admin.suzuki@adarvaa.in"
      const endpoint = `https://formsubmit.co/${TARGET_EMAIL}`

      // Use FormData to support file uploads
      const formDataToSend = new FormData()
      formDataToSend.append('Applicant Name', formData.name)
      formDataToSend.append('Email Address', formData.email)
      formDataToSend.append('Phone Number', formData.phone)
      formDataToSend.append('Residential Address', formData.address)
      formDataToSend.append('Preferred Branch', branches.find(b => b.id === formData.preferredBranch)?.name ?? 'Not Selected')
      formDataToSend.append('Job Position', positions.find((p) => p.id === formData.position)?.title ?? formData.position)

      // Special FormSubmit settings
      formDataToSend.append('_subject', `New Career Application: ${formData.name} - ${positions.find((p) => p.id === formData.position)?.title ?? ''}`)
      formDataToSend.append('_captcha', 'false') // Disable captcha for cleaner UX
      formDataToSend.append('_template', 'table') // Structured table format
      formDataToSend.append('_order', 'Job Position,Applicant Name,Email Address,Phone Number,Residential Address,Preferred Branch') // Force order

      // Append Resume File
      if (resumeFile) {
        formDataToSend.append('Resume', resumeFile)
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormMessage('Application submitted successfully! Our team will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          position: positions[0]?.id ?? '',
          preferredBranch: '',
        })
        setSelectedPosition(positions[0]?.id ?? '')
        setResumeFile(null)
      } else {
        const data = await response.json().catch(() => ({}))
        console.error('FormSubmit Error:', data)
        setFormMessage('Something went wrong with the submission service. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setFormMessage('Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-white text-slate-900">
      {/* Hero */}
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
            Careers at Adharvaa Suzuki
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Build your future with
            <span className="block text-suzuki-red">Adharvaa Suzuki</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Join a young, energetic team that lives and breathes two‑wheelers. Grow your career in
            sales, service and customer delight under one vibrant roof.
          </motion.p>
        </div>
      </motion.section>

      {/* Content: cards first, then form below */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Job cards – vertical cards similar to motorcycles page */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-5 sm:mb-8 text-center sm:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[10px] sm:text-xs font-semibold text-suzuki-blue border border-sky-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Now Hiring – Select a role to apply
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">
              Current Job Openings
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Tap a card to pick your position. The Apply form below will automatically use your
              selection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {positions.map((pos, index) => {
              const active = selectedPosition === pos.id
              return (
                <motion.button
                  key={pos.id}
                  type="button"
                  onClick={() => {
                    setSelectedPosition(pos.id)
                    setFormData((prev) => ({ ...prev, position: pos.id }))
                    scrollToForm()
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: -8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  animate={{ y: [0, -4, 0] }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 140,
                    damping: 16,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    rotateY: 3,
                    boxShadow: '0 20px 40px rgba(15,23,42,0.18)',
                  }}
                  whileTap={{ scale: 0.97, y: -2 }}
                  className={`relative flex flex-col rounded-2xl border bg-white overflow-hidden text-left shadow-sm cursor-pointer
                    ${active ? 'border-suzuki-blue shadow-md' : 'border-slate-200 hover:border-suzuki-blue/70'}
                  `}
                >
                  {/* Image on top */}
                  <div className="relative w-full h-40 sm:h-44 md:h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={pos.thumbnail}
                      alt={pos.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-2">
                      {pos.title}
                    </h3>
                    <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-600 mb-3 flex-1">
                      {pos.responsibilities.map((item) => (
                        <li key={item} className="flex gap-1.5">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-suzuki-red flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="text-suzuki-blue font-semibold">Tap to apply for this role</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-suzuki-blue/10 text-suzuki-blue text-xs">
                        ↗
                      </span>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Apply form */}
        <motion.div
          ref={formRef}
          className="relative rounded-2xl border border-slate-200 bg-white px-4 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7 shadow-md scroll-mt-24"
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
            <span className="text-[10px] sm:text-xs text-slate-700">
              Hiring now in Coimbatore
            </span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">
            Apply Now
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-600 mb-4 sm:mb-6">
            Fill the form and your application will be emailed to our HR team at{' '}
            <span className="font-semibold text-suzuki-blue">admin.suzuki@adarvaa.in</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                    }`}
                />
                {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                    }`}
                />
                {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${errors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                    }`}
                />
                {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                  Position
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-suzuki-blue focus:ring-2 focus:ring-suzuki-blue/30"
                >
                  {positions.map((pos) => (
                    <option key={pos.id} value={pos.id}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Address
              </label>
              <textarea
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 resize-none ${errors.address
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
              />
              {errors.address && <p className="text-[10px] text-red-500">{errors.address}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Preferred Branch <span className="text-red-500">*</span>
              </label>
              <select
                name="preferredBranch"
                value={formData.preferredBranch}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${errors.preferredBranch
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                  : 'border-slate-300 focus:border-suzuki-blue focus:ring-suzuki-blue/30'
                  }`}
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </select>
              {errors.preferredBranch && <p className="text-[10px] text-red-500">{errors.preferredBranch}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] sm:text-xs font-medium text-slate-700">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <div className={`relative flex items-center justify-between gap-3 rounded-lg border border-dashed bg-slate-50 px-3 py-2.5 ${errors.resume ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs text-slate-700">
                    PDF / DOC up to 5 MB
                  </span>
                  <span className={`text-[10px] sm:text-[11px] mt-0.5 line-clamp-1 ${errors.resume ? 'text-red-600 font-medium' : 'text-slate-500'}`}>
                    {resumeFile ? resumeFile.name : (errors.resume ? 'Resume is required' : 'No file chosen yet')}
                  </span>
                </div>
                <label className="inline-flex cursor-pointer items-center rounded-full bg-suzuki-blue px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-md hover:bg-suzuki-blue/90 active:scale-95 transition">
                  <span>Choose File</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      handleFileChange(file || null)
                    }}
                  />
                </label>
              </div>
            </div>

            {formMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-lg p-4 text-sm font-medium border ${formMessage.includes('successfully')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-red-50 text-red-800 border-red-200'
                  }`}
              >
                <div className="flex items-center gap-2">
                  {formMessage.includes('successfully') && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">✓</span>
                  )}
                  {formMessage}
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              className="mt-1 w-full rounded-lg bg-suzuki-blue px-4 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.4)] hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting…' : 'Submit Application'}
            </motion.button>
            <p className="mt-1 text-[10px] sm:text-[11px] text-slate-500">
              By submitting, you agree that your details will be shared with Adharvaa Suzuki HR
              for recruitment purposes.
            </p>
          </form>
        </motion.div>
      </section>
    </div>
  )
}
