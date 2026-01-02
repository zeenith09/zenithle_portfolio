/**
 * Footer component - Page footer with copyright and links
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-current bg-retro-primary/5 dark:bg-purple-900/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-pixel mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-pixel mb-4">Professional</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#experiences" className="hover:underline">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-pixel mb-4">Social</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-current pt-6 text-center text-xs">
          <p>© {currentYear} TODO: Your Name. Built with Next.js & React.</p>
          <p className="mt-2 text-retro-secondary text-xs">
            Retro space-themed portfolio
          </p>
        </div>
      </div>
    </footer>
  )
}
