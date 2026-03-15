'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ZoomableImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ZoomableImageModal({ src, alt, isOpen, onClose }: ZoomableImageModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const lastPinchDist = useRef<number | null>(null)
  const lastPointer = useRef<{ x: number; y: number } | null>(null)
  const lastTap = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen])

  // Clamp position so image doesn't go off-screen
  const clamp = useCallback((val: number, excess: number) => {
    return Math.min(excess / 2, Math.max(-excess / 2, val))
  }, [])

  const clampPosition = useCallback(
    (x: number, y: number, currentScale: number) => {
      const el = containerRef.current
      if (!el) return { x, y }
      const rect = el.getBoundingClientRect()
      const excessW = Math.max(0, rect.width * currentScale - rect.width)
      const excessH = Math.max(0, rect.height * currentScale - rect.height)
      return {
        x: clamp(x, excessW),
        y: clamp(y, excessH),
      }
    },
    [clamp]
  )

  // ─── Touch events ──────────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastPinchDist.current = Math.sqrt(dx * dx + dy * dy)
    } else if (e.touches.length === 1) {
      lastPointer.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      // Double-tap to reset
      const now = Date.now()
      if (now - lastTap.current < 300) {
        setScale(1)
        setPosition({ x: 0, y: 0 })
      }
      lastTap.current = now
    }
  }, [])

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (lastPinchDist.current !== null) {
          const delta = dist / lastPinchDist.current
          setScale((prev) => {
            const next = Math.min(Math.max(prev * delta, 1), 5)
            return next
          })
        }
        lastPinchDist.current = dist
      } else if (e.touches.length === 1 && lastPointer.current) {
        const dx = e.touches[0].clientX - lastPointer.current.x
        const dy = e.touches[0].clientY - lastPointer.current.y
        setPosition((prev) => {
          setScale((s) => {
            const clamped = clampPosition(prev.x + dx, prev.y + dy, s)
            setPosition(clamped)
            return s
          })
          return prev
        })
        lastPointer.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    },
    [clampPosition]
  )

  const onTouchEnd = useCallback(() => {
    lastPinchDist.current = null
    lastPointer.current = null
    // Snap back to fit if scale dropped below 1
    setScale((prev) => {
      if (prev < 1) {
        setPosition({ x: 0, y: 0 })
        return 1
      }
      return prev
    })
  }, [])

  // ─── Mouse wheel zoom ──────────────────────────────────────────
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.9 : 1.1
      setScale((prev) => {
        const next = Math.min(Math.max(prev * delta, 1), 5)
        if (next === 1) setPosition({ x: 0, y: 0 })
        return next
      })
    },
    []
  )

  // ─── Mouse drag ────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return
    setIsDragging(true)
    lastPointer.current = { x: e.clientX, y: e.clientY }
  }, [scale])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !lastPointer.current) return
      const dx = e.clientX - lastPointer.current.x
      const dy = e.clientY - lastPointer.current.y
      setPosition((prev) => clampPosition(prev.x + dx, prev.y + dy, scale))
      lastPointer.current = { x: e.clientX, y: e.clientY }
    },
    [isDragging, scale, clampPosition]
  )

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
    lastPointer.current = null
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full z-10 touch-manipulation"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Zoom hint */}
          <motion.div
            className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-xs flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full pointer-events-none z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="hidden sm:inline">🖱️ Scroll to zoom · Drag to pan · Double-click to reset</span>
            <span className="sm:hidden">👌 Pinch to zoom · Drag to pan · Double-tap to reset</span>
          </motion.div>

          {/* Zoom scale indicator */}
          {scale > 1.05 && (
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs bg-white/10 px-3 py-1.5 rounded-full z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(scale * 100)}%
            </motion.div>
          )}

          {/* Image container */}
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
          >
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-4 sm:p-8 select-none"
                quality={100}
                priority
                sizes="100vw"
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom hint */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs z-10 pointer-events-none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tap outside to close
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
