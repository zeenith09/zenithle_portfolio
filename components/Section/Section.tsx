'use client'

import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ANIMATION_CONFIG } from '@/lib/utils/constants'
import './section.css'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

/**
 * Reusable Section wrapper component with fade animations
 * T027: Scroll-based fade-out effect on previous sections
 * T028: Fade-in and subtle movement on incoming sections
 * T029: Optimized Intersection Observer thresholds for smooth transitions
 * T030: Respects prefers-reduced-motion accessibility setting
 *
 * Animation states:
 * - hidden: Section below viewport (opacity 0, y offset)
 * - visible: Section in viewport (opacity 1, y 0)
 * - exit: Section above viewport (reduced opacity for fade effect)
 */
export function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useRef(null)
  // T029: Tuned threshold to 0.25 for smooth entrance detection
  // Triggers animation when 25% of section is visible
  const isInView = useInView(ref, {
    once: false,
    amount: 0.25,
    margin: '0px 0px -100px 0px', // Extends detection 100px below viewport
  })
  const prefersReducedMotion = useReducedMotion()

  // T027: Fade-out effect for previous sections (visible → exit)
  // T028: Fade-in with subtle upward movement for incoming sections (hidden → visible)
  const variants = {
    // Initial state: Section not yet visible
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 40, // Subtle 40px offset for entrance
    },
    // Section is in viewport
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion
          ? 0
          : ANIMATION_CONFIG.transitionDuration,
        ease: ANIMATION_CONFIG.easing,
        // Stagger children for complex layouts
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    // T027: Section scrolled past (fade effect)
    exit: {
      opacity: 0.4,
      y: prefersReducedMotion ? 0 : -30,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: ANIMATION_CONFIG.easing,
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section-wrapper ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'exit'}
      // T029: Optimized viewport and margin settings
      viewport={{
        once: false,
        amount: 0.25,
        margin: '0px 0px -100px 0px',
      }}
    >
      {title && <h2 className="section-title font-pixel">{title}</h2>}
      {children}
    </motion.section>
  )
}
