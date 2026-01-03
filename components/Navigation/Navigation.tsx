'use client'

import { useEffect, useState } from 'react'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import { NAV_ITEMS } from '@/lib/utils/constants'
import './navigation.css'

interface NavigationProps {
  isHeaderScrolled: boolean
}

export function Navigation({ isHeaderScrolled }: NavigationProps) {
  const { activeSection } = useScrollPosition()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="nav-container">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-item font-pixel">
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="nav-container">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-item font-pixel ${
            activeSection === item.id ? 'active' : ''
          } ${item.isCallToAction ? 'cta' : ''}`}
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
