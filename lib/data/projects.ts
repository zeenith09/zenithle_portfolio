export type ProjectLink = {
  label: string
  href?: string
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  links: ProjectLink[]
}

export const public_projects: Project[] = [
  {
    title: 'Countersign',
    description:
      'Human-in-the-Loop Approval Layer for AI Agents. Backend and ML development in progress...',
    technologies: ['AI Agent Governance', 'Prisma', 'Next.js', 'TypeScript', 'PostgreSQL', 'Neon',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/zeenith09/countersign',
      },
      {
        label: 'Live Demo',
        href: 'https://countersign-iota.vercel.app/'
      },
    ],
  },
  {
    title: 'Retro Portfolio',
    description:
      'Current page. GameBoy-inspired retro portfolio, built with a responsive, accessible website in mind.',
    technologies: ['AWS EC2', 'AWS S3', 'SEO', 'CI/CD via GitHub Action', 'Testing Suites', 'Arcade'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/zeenith09/zenithle_portfolio',
      },
      {
        label: 'Live Site',
        href: 'https://zenithle.tech/'
      },
    ],
  },
  {
    title: 'Study with Me',
    description:
      'Prototype for a collaborative study platform with gamified elements and more. Development in progress...',
    technologies: ['Figma', 'Design', 'Prototyping', 'UI/UX', 'Incoming Web App'],
    links: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/h4cpJzM340B3CjW0QD2FxN/Zenith-Le---Study-With-Me-Project?node-id=281-4507&p=f&t=6i3GylE98u14hqNn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=281%3A4507',
      },
      {
        label: 'Live Site TBD'
      },
    ],
  },
  {
    title: 'Milwaukee Hope Initiative, Inc.',
    description:
      'nonprof-IT project enhancing community outreach and digital presence',
    technologies: ['Web Migration','DreamHost', 'Web Development',  'WordPress'],
    links: [
      {
        label: 'Live Site',
        href: 'https://www.mkehope.org/',
      },
      {
        label: 'Learn More',
        href: 'https://linktr.ee/mkehope/',
      },
    ],
  },
  {
    title: 'Eagle Nature Trail',
    description:
      'nonprof-IT project for the nonprofit organization\'s first environmental and trail education website',
    technologies: ['Web Development', 'WordPress', 'Web Design', 'DreamHost'],
    links: [
      {
        label: 'Live Site',
        href: 'https://www.eaglenaturetrail.org/',
      },
      {
        label: 'Learn More',
        href: 'https://linktr.ee/eaglenaturetrail/',
      },
    ],
  },
  {
    title: 'TrueSkool',
    description:
      'nonprof-IT project dedicated to educate and empower students through hip-hop culture',
    technologies: ['Web Development', 'SEO', 'Design Improvement', 'Wix'],
    links: [
      {
        label: 'Live Site',
        href: 'https://www.trueskool.org/',
      },
      {
        label: 'Learn More',
        href: 'https://linktr.ee/trueskool_nonprofIT/',
      }
    ],
  },
]

export const other_projects: Project[] = [
  {
    title: 'Internal SOIS Lab Website',
    description:
      'Conceptualized and developed an immersive "Beyond the Static" digital presence for an academic research laboratory',
    technologies: ['Interactive', 'Design', 'Prototyping', 'UI/UX'],
    links: [
    ],
  },
  {
    title: 'PAWS360 - OverCoded App',
    description:
      'Awarded Best Senior Capstone Project for Computer Science. Consolidated two legacy systems into one scalable student porta',
    technologies: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Spring Boot', 'Spec-driven Development'],
    links: [
      {
        label: 'Please scroll to Computer Science > Select "OverCoded App"',
        href: 'https://uwm.edu/engineering/students/senior-design-projects/fall-2025-senior-design-projects/'
      },
    ],
  },
  {
    title: 'Teaching Assistant Schedule Website',
    description:
      'Web-based scheduling system for Teaching Assistants using Python and Django',
    technologies: ['Django', 'Python', 'Test-drive Development (TDD)', 'CRUD', 'Scrum', 'Agile'],
    links: [
    ],
  },
]
