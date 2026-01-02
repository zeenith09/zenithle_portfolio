import { Section } from '@/components/Section/Section'
import './about.css'

/**
 * About section - Biographical information
 */
export function About() {
  return (
    <Section id="about" title="About" className="about-section-bg">
      <div className="about-container">
        {/* TODO: Replace with actual biographical content */}
        <p className="about-text">
          This is the About section. Add your biographical information,
          education, work experience, and current focus here.
        </p>

        <div className="about-grid">
          <div className="about-subsection">
            <h3 className="font-pixel">Education</h3>
            <p>TODO: Add education details</p>
          </div>
          <div className="about-subsection">
            <h3 className="font-pixel">Current Role</h3>
            <p>TODO: Add current role information</p>
          </div>
        </div>

        <div className="about-focus">
          <h3 className="font-pixel">Current Focus</h3>
          <ul className="about-focus-list">
            <li>TODO: Learning goal 1</li>
            <li>TODO: Learning goal 2</li>
            <li>TODO: Learning goal 3</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
