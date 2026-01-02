'use client'

import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ANIMATION_CONFIG } from '@/lib/utils/constants'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

/**
 * Reusable Section wrapper component with fade animations
 * Automatically applies fade-in/fade-out effects based on scroll position
 */
export function Section({
  id,
  title,
  children,
  className = '',
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    amount: ANIMATION_CONFIG.fadeThreshold,
  })
  const prefersReducedMotion = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : ANIMATION_CONFIG.transitionDuration,
        ease: ANIMATION_CONFIG.easing,
      },
    },
    exit: {
      opacity: 0.3,
      y: prefersReducedMotion ? 0 : -20,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeIn',
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center px-4 py-20 ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'exit'}
      viewport={{ once: false, amount: ANIMATION_CONFIG.fadeThreshold }}
    >
      {title && (
        <h2 className="text-4xl md:text-6xl font-pixel mb-12 text-center">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}
