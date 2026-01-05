'use client'

import { FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa'
import './footer.css'

export function Footer() {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  let yyyy = today.getFullYear()

  let lastUpdated = mm + '/' + dd + '/' + yyyy

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left grid */}
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Navigation</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-section">
            <h4>Professional</h4>
            <a href="#experiences">Experience</a>
            <a href="#contact">Contact</a>
            <a
              href="https://drive.google.com/file/d/1pe72Z-qHNdCmgSQ-drvlpHKMX7KWjWrh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right frame */}
        <div className="talk-frame">
          <div className="talk-text">
            <h3>Let's Talk 💬</h3>
            <p>Ideas, suggestions, or casual chats - bring it on!</p>
          </div>
        </div>

        {/* Socials */}
        <div className="footer-social">
          <a
            href="https://github.com/zeenith09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/zenithle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://app.joinhandshake.com/profiles/zenithle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Handshake"
          >
            <FaHandshake />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {yyyy} - {yyyy + 1}
          </p>
          <p>The internet is vast, yet you are here. Thanks for stopping by!</p>
          <p>Today's Date: {lastUpdated}</p>
        </div>
      </div>
    </footer>
  )
}
