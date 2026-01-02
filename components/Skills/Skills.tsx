import { Section } from '@/components/Section/Section'
import './skills.css'

/**
 * Skills section - Technical skills organized by category
 */
export function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['TODO: Skill 1', 'TODO: Skill 2', 'TODO: Skill 3'],
    },
    {
      name: 'Backend',
      skills: ['TODO: Skill 1', 'TODO: Skill 2', 'TODO: Skill 3'],
    },
    {
      name: 'Tools',
      skills: ['TODO: Skill 1', 'TODO: Skill 2', 'TODO: Skill 3'],
    },
  ]

  return (
    <Section id="skills" title="Skills" className="skills-section-bg">
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="font-pixel">{category.name}</h3>
              <ul className="skills-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
