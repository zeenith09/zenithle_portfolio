import { Section } from '@/components/Section/Section'
import { projects } from '@/lib/data/projects'
import './projects.css'

export function Projects() {
  return (
    <Section id="projects" title="Public Projects">
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
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
