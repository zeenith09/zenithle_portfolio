import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code font-pixel">404</h1>
        <p className="not-found-message">This page could not be found.</p>
        <Link href="/" className="not-found-link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
