import { Section } from '@/components/Section/Section'
import { IntroOverlay } from '@/components/IntroOverlay/IntroOverlay'
import Galaxy from '@/components/Galaxy/Galaxy'
import './hero.css'

/**
 * Hero component - Opening section with animated background
 * Full viewport height with attention-grabbing background
 */
export function Hero() {
  return (
    <>
      <IntroOverlay />
      <Section id="hero" className="hero-section">
        {/* Gradient overlay on top of GIF */}
        <div className="hero-gradient-overlay" />

        {/* Content overlay */}
        <div className="hero-content">
          <h1 className="hero-title">WELCOME</h1>
          <p className="hero-subtitle">Scroll down to explore</p>

          {/* Scroll indicator */}
          <div className="hero-scroll-indicator">
            <p>↓</p>
          </div>
        </div>
      </Section>
    </>
  )
}
