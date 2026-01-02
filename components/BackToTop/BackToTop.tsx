'use client'

import { useEffect, useState } from 'react'
import './backToTop.css'

/**
 * BackToTop component - Floating button to scroll to top
 * Shows only after scrolling down a bit for better UX
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px down
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to top"
      type="button"
    >
      ↑
    </button>
  )
}
