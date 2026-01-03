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
    for (let i = 0; i < 5; i++) {
      // Use negative delay to start animation mid-cycle (cloud already on screen)
      const delay = -(Math.random() * 60)
      // Random duration between 60-120s for slower, more visible movement
      const duration = 60 + Math.random() * 60
      // Distribute vertically with some randomness, but spaced out
      const baseTop = 15 + i * 15
      const top = baseTop + (Math.random() * 5 - 2.5) // ±2.5% variance

      cloudConfigs.push({
        id: i,
        delay,
        duration,
        top: Math.max(5, Math.min(90, top)), // Keep between 5-90%
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
