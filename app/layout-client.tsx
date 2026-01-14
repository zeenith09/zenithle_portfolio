'use client'

import { useEffect, ReactNode } from 'react'

interface RootLayoutClientProps {
  children: ReactNode
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  useEffect(() => {
    // Handle hash anchors on page load
    const handleHashAnchor = async () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (!hash) return

      // Wait for content to be rendered and intro overlay to complete
      const waitForElement = async (maxAttempts = 50) => {
        for (let i = 0; i < maxAttempts; i++) {
          const element = document.getElementById(hash)
          if (element) return element
          await new Promise((resolve) => setTimeout(resolve, 100))
        }
        return null
      }

      const element = await waitForElement()
      if (element) {
        // Give browser time to finish rendering layouts
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Use the same scrollIntoView approach as header navigation
        // but with a spacer div to account for the offset
        const offset = 200
        const spacerDiv = document.createElement('div')
        spacerDiv.style.height = `${offset}px`
        spacerDiv.style.marginTop = `-${offset}px`
        element.parentNode?.insertBefore(spacerDiv, element)

        // Use requestAnimationFrame to ensure smooth scroll after layout is stable
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })

        // Clean up the spacer after scroll
        setTimeout(() => {
          spacerDiv.remove()
        }, 1000)
      }
    }

    // Only run on initial load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleHashAnchor, {
        once: true,
      })
    } else {
      // DOM is already loaded
      setTimeout(handleHashAnchor, 100)
    }
  }, [])

  return children
}
