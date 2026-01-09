'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/Section/Section'
import './experiences.css'

type Experience = {
  role: string
  company: string
  period: string
  description: string
  current: boolean
}

const experienceData: Experience[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Northwestern Mutual',
    period: 'May 2025 – December 2025',
    description: `• Engineered and maintained features for internal AI chatbots with React, Next.js, and TypeScript serving 1,000+ employees.
• Designed scalable backend microservices and REST APIs using DynamoDB and JWT authentication.
• Improved code coverage from 40% to 100% by integrating SonarQube into Docker-based CI/CD pipelines.
• Gained exposure to product experimentation through Optimizely CMS, Heap.io, and Adobe Analytics.`,
    current: false,
  },
  {
    role: 'Team Lead & Developer',
    company: 'UW-Milwaukee Nonprof-IT Program',
    period: 'September 2024 – December 2025',
    description: `• Spearheaded cross-functional Agile teams for end-to-end frontend development and website migrations for 3 nonprofits.
• Executed full platform transitions to customized WordPress and Wix deployments managing hosting and DNS.
• Standardized technical documentation and reusable style guides to strengthen maintainability.`,
    current: false,
  },
  {
    role: 'Help Desk Supervisor',
    company: 'UW-Milwaukee Campus Technology Support',
    period: 'September 2024 – December 2025',
    description: `• Supported daily help desk operations handling hundreds of active tickets using Ivanti Neurons.
• Analyzed ticket metrics to allocate workload and resolved advanced technical issues through collaboration.`,
    current: false,
  },
]

export function Experiences() {
  const [mounted, setMounted] = useState(false)
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    // Wait for intro overlay to disappear (data-hide-content attribute is removed)
    // This prevents data from loading during intro animation
    const checkIntroComplete = () => {
      if (!document.documentElement.hasAttribute('data-hide-content')) {
        // Intro overlay is done, load the data
        setMounted(true)
        setExperiences(experienceData)
        return true
      }
      return false
    }

    // Check immediately in case we're not on home page
    if (checkIntroComplete()) return

    // Otherwise, use MutationObserver to detect when it's removed
    const observer = new MutationObserver(() => {
      if (checkIntroComplete()) {
        observer.disconnect()
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-hide-content'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Section id="experiences" title="Experience">
      <div className="experiences-container">
        <div className="experiences-list">
          {mounted &&
            experiences.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-role font-pixel">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                {exp.current && (
                  <span className="experience-badge">Current</span>
                )}
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}
