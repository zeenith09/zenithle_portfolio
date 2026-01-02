'use client'

import { motion } from 'framer-motion'
import './mobileMenu.css'

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * Mobile Menu component - Hamburger menu for mobile devices
 * T036: Hamburger icon button for mobile navigation
 * T039: Open/close animation for hamburger menu
 * T043: ARIA labels for hamburger button (aria-expanded, aria-controls)
 */
export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  // T039: Hamburger icon animation variants
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  }

  return (
    <button
      onClick={onToggle}
      className="mobile-menu-button"
      // T043: ARIA labels for accessibility
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
      {/* Hamburger icon with animation */}
      <motion.div
        className="menu-line"
        animate={isOpen ? 'open' : 'closed'}
        variants={topLineVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="menu-line"
        animate={isOpen ? 'open' : 'closed'}
        variants={middleLineVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="menu-line"
        animate={isOpen ? 'open' : 'closed'}
        variants={bottomLineVariants}
        transition={{ duration: 0.3 }}
      />
    </button>
  )
}
