'use client'

import { useEffect, useState } from 'react'
import Galaxy from '../Galaxy/Galaxy'
import './introOverlay.css'

export function IntroOverlay() {
  const [visible, setVisible] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const handleClick = () => {
    setIsClosing(true)
    setTimeout(() => {
      setVisible(false)
      const heroElement = document.getElementById('hero')
      heroElement?.scrollIntoView({ behavior: 'smooth' })
    }, 500) // Wait for fade-out animation to complete
  }

  if (!visible) return null

  return (
    <div
      className={`intro-overlay ${isClosing ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      <div className="typewriter-container">
        <p className="typewriter">Click anywhere to begin</p>
      </div>

      <div className="galaxy-container">
        <Galaxy transparent={false} />
      </div>
    </div>
  )
}
