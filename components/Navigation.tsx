'use client'

import { useEffect, useState } from 'react'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import { NAV_ITEMS } from '@/lib/utils/constants'

interface NavigationProps {
  isHeaderScrolled: boolean
}

/**
 * Navigation component - Desktop tab layout with scroll-based active highlighting
 * T035: Desktop tab layout for navigation items
 * T037: Wire navigation items to smooth scroll behavior
 * T038: Active section highlighting based on scroll position
 * T042: Keyboard navigation support (Tab + Enter/Space)
 * T044: Visible focus states for keyboard navigation
 */
export function Navigation({ isHeaderScrolled }: NavigationProps) {
  const { activeSection } = useScrollPosition()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="flex items-center justify-center gap-2 md:gap-4">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="px-3 md:px-4 py-2 text-xs md:text-sm font-pixel">
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex items-center justify-center gap-2 md:gap-4">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`
            px-3 md:px-4 py-2 text-xs md:text-sm font-pixel
            transition-all duration-200
            relative
            
            ${
              activeSection === item.id
                ? 'text-retro-primary border-b-2 border-retro-primary'
                : 'text-current hover:text-retro-primary'
            }
            
            focus:outline-none focus:ring-2 focus:ring-retro-primary focus:ring-offset-2
            dark:focus:ring-offset-gray-900
            rounded
            
            ${item.isCallToAction ? 'bg-retro-primary/20 hover:bg-retro-primary/30' : ''}
          `}
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById(item.id)
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
          // T042: Keyboard accessibility - Tab + Enter/Space
          role="menuitem"
          tabIndex={activeSection === item.id ? 0 : -1}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
