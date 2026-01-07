'use client'

import { useEffect, useState } from 'react'
import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground'
import { CloudsBackground } from '@/components/CloudsBackground/CloudsBackground'

/**
 * ThemeSyncedBackground - Renders only the background matching the current theme
 * Prevents component collision by conditionally rendering either particles (dark)
 * or clouds (light) instead of rendering both with opacity transitions
 */
export function ThemeSyncedBackground() {
  // Initialize based on what's already on the HTML element (set by inline script)
  // Check both the current className and localStorage as backup
  const getInitialTheme = () => {
    const htmlClass = document.documentElement.className
    if (htmlClass === 'light') return false // false = light mode
    if (htmlClass === 'dark') return true // true = dark mode
    // Fallback to localStorage
    const theme =
      typeof window !== 'undefined'
        ? localStorage.getItem('defaultTheme')
        : null
    return theme !== 'light' // Default to dark if unclear
  }

  const [isDarkMode, setIsDarkMode] = useState(true) // SSR default
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // On first mount, read the actual HTML class and sync state
    const isDark = getInitialTheme()
    setIsDarkMode(isDark)
    setMounted(true)

    // Listen for theme changes on the HTML element
    const observer = new MutationObserver(() => {
      const isDark = getInitialTheme()
      setIsDarkMode(isDark)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!mounted) {
    // During SSR, render nothing to avoid hydration mismatch
    return null
  }

  // Only render the background matching the current theme
  return isDarkMode ? <ParticlesBackground /> : <CloudsBackground />
}
