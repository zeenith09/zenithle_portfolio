'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/Section/Section'
// @ts-ignore CSS is loaded by the framework bundler and has no TypeScript module declaration.
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
    role: 'Full-stack Engineering Intern',
    company: 'Blue Seagull Compute',
    period: 'February 2026 – Present',
    description: `• Designed and implemented the public-facing company website (https://www.blueseagull.org) and production-facing frontend Laridae features using Figma, React, Next.js, TypeScript, Tailwind CSS, and Redux, connecting frontend state and user workflows to REST APIs and WebSocket event streams.
• Contributed to backend development supporting application catalogs, authentication, session lifecycle actions, state persistence, and normalized error handling.
• Served as the technical bridge between senior engineers and the frontend team, translating backend architecture decisions into actionable frontend implementation.`,
    current: true,
  },
  {
    role: 'Software Engineering Intern',
    company: 'Northwestern Mutual',
    period: 'May 2025 – December 2025',
    description: `• Engineered frontend features for internal AI chatbots using React, Next.js,TypeScript, and SCSS enabling persistent saving and retrieval of conversation flows for 1,000+ employees.
• Utilized Optimizely CMS, Heap.io, and Adobe Analytics to support UI development across embedded and full-page AI chatbot experiences.
• Designed and implemented scalable backend microservices and REST APIs using DynamoDB and JWT authentication, managing user data and favorites securely across an existing microservices ecosystem.
• Improved code quality and release reliability by integrating SonarQube into Docker and Kubernetes-managed CI/CD pipelines, increasing code coverage from 40% to 100%.`,
    current: false,
  },
  {
    role: 'Help Desk Supervisor',
    company: 'UW-Milwaukee Campus Technology Support',
    period: 'September 2024 – December 2025',
    description: `• Supervised 5 - 8 student consultants per shift, using Ivanti Neurons ticket metrics to balance workloads and maintain service quality during high-volume periods, including mass incidents involving hundreds of tickets.
• Administered Microsoft 365, student accounts, and Multi-Factor Authentication (MFA) configurations, managing sensitive student information under strict privacy standards.
• Collaborated across IT teams to escalate and resolve advanced hardware and software issues, translating technical details into clear guidance for end users at all levels.`,
    current: false,
  },
  {
    role: 'Team Lead & Developer',
    company: 'UW-Milwaukee Nonprof-IT Program',
    period: 'September 2024 – December 2025',
    description: `• Led Agile teams to modernize 3 nonprofit platforms from scratch for Milwaukee Hope Initiative, Nature Eagle Trail, and TrueSkool, improving digital presence and driving a 40% peak increase in site traffic.
• Executed full platform migrations to customized WordPress and Wix deployments, managing hosting, DNS configuration, and production releases, eliminating recurring hosting expenses.
• Standardized technical documentation and reusable style guides to strengthen maintainability.`,
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
