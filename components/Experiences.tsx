import { Section } from '@/components/Section'

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
      title="Experiences"
      className="bg-gradient-to-b from-transparent to-retro-blue/5 dark:to-blue-900/10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-retro-primary pl-6 relative"
            >
              <div className="absolute -left-3 -top-1 w-4 h-4 bg-retro-primary rounded-full" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-pixel">{exp.role}</h3>
                <span className="text-xs text-retro-secondary md:ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-semibold mb-2">{exp.company}</p>
              {exp.current && (
                <span className="inline-block text-xs px-2 py-1 bg-retro-accent/20 dark:bg-pink-900/30 mb-3 rounded">
                  Current
                </span>
              )}
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
