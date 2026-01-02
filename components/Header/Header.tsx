'use client'

import { useState, useEffect } from 'react'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import { Navigation } from '@/components/Navigation/Navigation'
import { MobileMenu } from '@/components/MobileMenu/MobileMenu'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import './header.css'

/**
 * Header component - Fixed navigation bar with scroll detection
 * T032: Fixed positioning with smooth background transition
 * T033: Transparent-to-solid background based on scroll position
 * T034: Portfolio logo/title on left, always visible
 * T040: Show/hide tabs based on header background state
 * T050: ThemeToggle integrated into header navigation (desktop and mobile)
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
      <header className="header-wrapper">
        <div className="header-content">
          <div className="header-logo font-pixel">PORT</div>
        </div>
      </header>
    )
  }

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-content">
        {/* Logo/Title - T034: Portfolio branding */}
        {/* <div className="header-logo-container">
          <a
            href="#hero"
            className="header-logo font-pixel"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('hero')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            PORT
          </a>
        </div> */}

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="header-nav">
          <Navigation isHeaderScrolled={isScrolled} />
        </div>

        {/* Right side: Theme toggle + Mobile menu */}
        <div className="header-actions">
          {/* T050: ThemeToggle in header navigation (visible on all screen sizes) */}
          <ThemeToggle />

          {/* Mobile Menu Toggle - Visible only on mobile */}
          <div className="header-mobile-toggle">
            <MobileMenu
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - T041: Full navigation items with close-on-navigate */}
      {mobileMenuOpen && (
        <nav className="header-mobile-nav">
          <div className="header-mobile-nav-content">
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
                className="header-mobile-nav-item"
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
