import { Section } from '@/components/Section/Section'
import './projects.css'

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
      className="projects-section-bg"
    >
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
