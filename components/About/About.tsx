'use client'

import { Section } from '@/components/Section/Section'
import { useIsMobile } from '@/lib/hooks/useIsMobile'
import './about.css'

/**
 * About section - Biographical information
 */
export function About() {
  const isMobile = useIsMobile()
  return (
    <Section id="about" title="About">
      <div className="about-container">
        <h3 className="about-tagline">
          Full-stack UX/UI-focused Software Engineer who cares about clean
          interfaces, accessibility, and building things people actually enjoy
          using.
        </h3>

        <div className="about-focus">
          <ul className="about-focus-list">
            <li>
              <strong>🔭 Currently working on</strong>
              <span>
                Turning a Figma UI/UX project into a fully functional,
                cross-device web application
              </span>
            </li>
            <li>
              <strong>🌱 Currently learning</strong>
              <span>
                Expanding my knowledge for Amazon Web Services (AWS) and backend
                services
              </span>
            </li>
            <li>
              <strong>👯 Looking for</strong>
              <span>
                Volunteer or opportunities where design + engineering overlap
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
