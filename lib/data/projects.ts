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

export const projects: Project[] = [
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
