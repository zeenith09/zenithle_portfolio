import { Section } from '@/components/Section/Section'
import './experiences.css'

export function Experiences() {
  const experiences = [
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

  return (
    <Section id="experiences" title="Experience">
      <div className="experiences-container">
        <div className="experiences-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role font-pixel">{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              {exp.current && <span className="experience-badge">Current</span>}
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
