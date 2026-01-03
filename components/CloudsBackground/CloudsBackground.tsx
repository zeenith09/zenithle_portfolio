'use client'

import { useEffect, useState } from 'react'
import { Clouds } from './Clouds/Clouds'

export function CloudsBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check initial dark mode state
    setIsDarkMode(document.documentElement.classList.contains('dark'))

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div
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
