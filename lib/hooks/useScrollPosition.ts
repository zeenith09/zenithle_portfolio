'use client'

import { useState, useEffect } from 'react'

interface UseScrollPositionReturn {
  scrollY: number
  isScrolled: boolean
  activeSection: string
}

export function useScrollPosition(): UseScrollPositionReturn {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      let current = 'hero'

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'hero'
        }
      })

      setActiveSection(current)
    }

    // Throttle scroll events
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header should be solid when scrolled past 80% of viewport height
  const isScrolled = scrollY > window.innerHeight * 0.8

  return { scrollY, isScrolled, activeSection }
}
