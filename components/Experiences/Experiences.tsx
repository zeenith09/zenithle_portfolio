import { Section } from '@/components/Section/Section'
import './experiences.css'

/**
 * Experiences section - Work history and professional timeline
 */
export function Experiences() {
  const experiences = [
    {
      role: 'TODO: Job Title',
      company: 'TODO: Company Name',
      period: 'TODO: Start - End',
      description: 'TODO: Add role description',
      current: true,
    },
    {
      role: 'TODO: Job Title',
      company: 'TODO: Company Name',
      period: 'TODO: Start - End',
      description: 'TODO: Add role description',
      current: false,
    },
    {
      role: 'TODO: Job Title',
      company: 'TODO: Company Name',
      period: 'TODO: Start - End',
      description: 'TODO: Add role description',
      current: false,
    },
  ]

  return (
    <Section
      id="experiences"
      title="Experience"
      className="experiences-section-bg"
    >
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
