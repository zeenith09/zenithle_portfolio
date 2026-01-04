'use client'

import { useEffect, useState } from 'react'
import './clouds.css'

interface CloudConfig {
  id: number
  delay: number
  duration: number
  top: number
}

export function Clouds() {
  const [clouds, setClouds] = useState<CloudConfig[]>([])

  useEffect(() => {
    // Generate random cloud animations
    const cloudConfigs: CloudConfig[] = []

    // Create multiple cloud instances with randomized properties
    for (let i = 0; i < 20; i++) {
      // Use negative delay to start animation mid-cycle (cloud already on screen)
      const delay = -(Math.random() * 60)
      // Random duration between 60-120s for slower, more visible movement
      const duration = 60 + Math.random() * 60
      // Distribute vertically across full range (0-100%)
      const baseTop = (i % 10) * 11
      const top = baseTop + (Math.random() * 8 - 4) // ±4% variance

      cloudConfigs.push({
        id: i,
        delay,
        duration,
        top: Math.max(0, Math.min(100, top)), // Keep between 0-100%
      })
    }

    setClouds(cloudConfigs)
  }, [])

  return (
    <div className="clouds-container">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`cloud cloud${cloud.id + 1}`}
          style={
            {
              animation: `cloudDrift ${cloud.duration}s linear infinite ${cloud.delay}s`,
              top: `${cloud.top}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
