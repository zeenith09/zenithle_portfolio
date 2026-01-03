'use client'

import { Section } from '@/components/Section/Section'
import './contact.css'

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="contact-container">
        <p className="contact-message">TODO: Add contact message/CTA</p>

        <div className="contact-buttons">
          <a href="mailto:TODO@example.com" className="contact-button">
            Email
          </a>
          <a href="https://github.com/zeenith09" className="contact-button">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zenithle"
            className="contact-button"
          >
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
