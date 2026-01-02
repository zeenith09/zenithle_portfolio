'use client'

import { useState, useEffect } from 'react'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import { Navigation } from '@/components/Navigation'
import { MobileMenu } from '@/components/MobileMenu'

/**
 * Header component - Fixed navigation bar with scroll detection
 * T032: Fixed positioning with smooth background transition
 * T033: Transparent-to-solid background based on scroll position
 * T034: Portfolio logo/title on left, always visible
 * T040: Show/hide tabs based on header background state
 */
export function Header() {
  const { isScrolled } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering (fixes SSR hydration)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-pixel">PORT</div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo/Title - T034: Portfolio branding */}
        <div className="flex-shrink-0">
          <a
            href="#hero"
            className="text-xl md:text-2xl font-pixel hover:text-retro-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('hero')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            PORT
          </a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:block flex-1 mx-8">
          <Navigation isHeaderScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Toggle - Visible only on mobile */}
        <div className="md:hidden">
          <MobileMenu
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu - T041: Full navigation items with close-on-navigate */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-current bg-white dark:bg-gray-900 py-4">
          <div className="max-w-6xl mx-auto px-4 space-y-2">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experiences', label: 'Experiences' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 px-4 hover:bg-retro-primary/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
