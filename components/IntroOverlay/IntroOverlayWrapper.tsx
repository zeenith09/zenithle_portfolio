'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IntroOverlay } from './IntroOverlay'

export function IntroOverlayWrapper() {
  const pathname = usePathname()
  const [hasHash, setHasHash] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if there's a hash in the URL (e.g., /#contact)
    setHasHash(!!window.location.hash)
  }, [])

  // Only show overlay on home page (/) with no hash anchor
  const shouldShowOverlay = pathname === '/' && !hasHash && mounted

  return shouldShowOverlay ? <IntroOverlay /> : null
}
