import { Section } from '@/components/Section'

/**
 * Projects section - Portfolio projects showcase
 */
export function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'TODO: Add project description',
      technologies: ['TODO: Tech 1', 'TODO: Tech 2'],
    },
    {
      title: 'Project 2',
      description: 'TODO: Add project description',
      technologies: ['TODO: Tech 1', 'TODO: Tech 2'],
    },
    {
      title: 'Project 3',
      description: 'TODO: Add project description',
      technologies: ['TODO: Tech 1', 'TODO: Tech 2'],
    },
  ]

  return (
    <Section
      id="projects"
      title="Public Projects"
      className="bg-gradient-to-b from-transparent to-retro-pink/5 dark:to-pink-900/10"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-2 border-current p-6 rounded hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-pixel mb-3">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-retro-purple/20 dark:bg-purple-900/30 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-sm underline hover:text-retro-primary transition-colors"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="text-sm underline hover:text-retro-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
