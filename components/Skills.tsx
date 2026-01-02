import { Section } from '@/components/Section'

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
    <Section
      id="skills"
      title="Skills"
      className="bg-gradient-to-b from-transparent to-retro-blue/5 dark:to-blue-900/10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-pixel mb-6 text-retro-purple dark:text-purple-400">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 border-2 border-current rounded text-sm hover:bg-retro-purple/10 dark:hover:bg-purple-900/30 transition-colors"
                  >
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
