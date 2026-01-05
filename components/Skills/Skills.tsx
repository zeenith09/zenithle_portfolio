'use client'

import { Section } from '@/components/Section/Section'
import { useIsMobile } from '@/lib/hooks/useIsMobile'
import { languages, tools, growing } from '@/lib/data/skills'
import './skills.css'

export function Skills() {
  const skillCategories = [
    {
      name: 'Languages',
      skills: languages,
    },
    {
      name: 'Core Tools',
      skills: tools,
    },
    {
      name: 'Learning/Growing',
      skills: growing,
    },
  ]

  return (
    <Section id="skills" title="Skills">
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="font-pixel">{category.name}</h3>
              <div className="skill-column-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-icon"
                      loading="lazy"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
