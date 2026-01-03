import './footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Professional</h4>
            <ul>
              <li>
                <a href="#experiences">Experiences</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Zenith Le's Portfolio</p>
          <p>Built with Next.js & React</p>
        </div>
      </div>
    </footer>
  )
}
