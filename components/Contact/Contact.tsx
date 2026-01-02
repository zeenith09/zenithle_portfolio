import { Section } from '@/components/Section/Section'
import './contact.css'

/**
 * Contact section - Call-to-action and contact information
 */
export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="contact-section-bg">
      <div className="contact-container">
        <p className="contact-message">TODO: Add contact message/CTA</p>

        <div className="contact-buttons">
          <a href="mailto:TODO@example.com" className="contact-button">
            Email
          </a>
          <a href="#" className="contact-button">
            GitHub
          </a>
          <a href="#" className="contact-button">
            LinkedIn
          </a>
        </div>

        <p className="contact-footer">
          TODO: Add contact availability or response time message
        </p>
      </div>
    </Section>
  )
}
