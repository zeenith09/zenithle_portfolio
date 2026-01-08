'use client'

import { Section } from '@/components/Section/Section'
import Obfuscate from 'react-obfuscate'
import './contact.css'

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="contact-container">
        <p className="contact-message">
          Have a question or would love to work together?
        </p>

        <div className="contact-buttons">
          <Obfuscate email="zeenith.029@gmail.com" element="a">
            Email
          </Obfuscate>

          <a href="https://github.com/zeenith09" className="contact-button">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/zenithle"
            className="contact-button"
          >
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/13rwNdSq4XfhEU8Qn18UUDsgFpNCuYI8n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Resume
          </a>
        </div>

        <p className="contact-footer">I look forward to connecting with you!</p>
      </div>
    </Section>
  )
}
