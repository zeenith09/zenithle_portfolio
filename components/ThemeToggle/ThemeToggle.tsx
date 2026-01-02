'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/hooks/useTheme'
import { useEffect, useState } from 'react'
import './themeToggle.css'

/**
 * ThemeToggle component - Dark/light mode switcher with icon animation
 * T046: Theme toggle button with moon/sun icon
 * T048: Smooth icon rotation animation (moon ↔ sun)
 * T053: Keyboard accessibility (Tab + Enter/Space)
 * T054: ARIA label with current state
 */
export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="theme-toggle-button" aria-label="Toggle dark mode">
        <span>◉</span>
      </button>
    )
  }

  // T048: Icon rotation animation variants
  const iconVariants = {
    light: { rotate: 0, transition: { duration: 0.3 } },
    dark: { rotate: 180, transition: { duration: 0.3 } },
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      // T054: ARIA label with current state
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      // T053: Keyboard accessibility via onClick handler and semantic button
      type="button"
    >
      <motion.div
        animate={isDark ? 'dark' : 'light'}
        variants={iconVariants}
        className="theme-toggle-icon"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.div>
    </button>
  )
}
