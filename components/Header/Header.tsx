'use client'

import { useState, useEffect } from 'react'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import { useIsMobile } from '@/lib/hooks/useIsMobile'
import { Navigation } from '@/components/Navigation/Navigation'
import { MobileMenu } from '@/components/MobileMenu/MobileMenu'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Settings } from '@/components/Settings/Settings'
import './header.css'

export function Header() {
  const { isScrolled } = useScrollPosition()
  const isMobile = useIsMobile()
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
          <div className="header-logo font-pixel">ZENITH LE</div>
        </div>
      </header>
    )
  }

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={`header-wrapper ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="header-content">
        <div className="header-logo font-pixel">ZENITH LE</div>

        {!isMobile && (
          <div className="header-nav">
            <Navigation isHeaderScrolled={isScrolled} />
          </div>
        )}

        <div className="header-actions">
          <ThemeToggle />
          <Settings />

          {isMobile && (
            <div className="header-mobile-toggle">
              <MobileMenu
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          )}
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
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
