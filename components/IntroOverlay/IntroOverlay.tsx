'use client'

import { useEffect, useState } from 'react'
import Galaxy from '../Galaxy/Galaxy'
import './introOverlay.css'

export function IntroOverlay() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="intro-overlay" onClick={() => setVisible(false)}>
      {/* Typewriter text - positioned at bottom right */}
      <div className="typewriter-container">
        <p className="typewriter">Click anywhere to begin</p>
      </div>

      <div className="galaxy-container">
        <Galaxy transparent={false} />
      </div>
    </div>
  )
}
