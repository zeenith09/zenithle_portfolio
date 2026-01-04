'use client'

import { useEffect, useState } from 'react'
import { Clouds } from './Clouds/Clouds'

export function CloudsBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check initial dark mode state
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
    setMounted(true)

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    return <div className="clouds-background" style={{ opacity: 0 }} />
  }

  return (
    <div
      // global css
      className="clouds-background"
      style={{
        opacity: !isDarkMode ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: !isDarkMode ? 'auto' : 'none',
      }}
    >
      <Clouds />
    </div>
  )
}
