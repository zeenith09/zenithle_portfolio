'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/Section/Section'
import { languages, tools, growing, type Skill } from '@/lib/data/skills'
import './skills.css'

type SkillCategory = {
  name: string
  skills: Skill[]
}

export function Skills() {
  const [mounted, setMounted] = useState(false)
  const [categories, setCategories] = useState<SkillCategory[]>([])

  useEffect(() => {
    // Wait for intro overlay to disappear (data-hide-content attribute is removed)
    // This prevents skill images from loading during intro animation
    const checkIntroComplete = () => {
      if (!document.documentElement.hasAttribute('data-hide-content')) {
        // Intro overlay is done, load the data
        setMounted(true)
        setCategories([
          { name: 'Languages', skills: languages },
          { name: 'Core Tools', skills: tools },
          { name: 'Learning/Growing', skills: growing },
        ])
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
    <Section id="skills" title="Skills">
      <div className="skills-container">
        <div className="skills-grid">
          {mounted &&
            categories.map((category) => (
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
