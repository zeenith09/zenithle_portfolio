'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to detect if viewport is mobile size
 * Returns true if viewport width is less than 1060px (Header breakpoint for Surface Pro)
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check initial size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1060)
    }
    
    checkMobile()

    // Listen for resize
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Return false during SSR to prevent hydration mismatch
  return mounted ? isMobile : false
}
