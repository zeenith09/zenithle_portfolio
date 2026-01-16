'use client'

import { motion } from 'framer-motion'
import './mobileMenu.css'

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
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
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
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
