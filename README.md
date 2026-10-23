# 👾 Zenith Le's Portfolio

For the longest time, I've always wanted to create a modern and visually catchy portfolio to showcase my journey while having fun with it. Here it is, finally coming to life - a 2000s retro game vibe website with smooth animations and dark/light theme support. More features are yet to come!

Visit the site: http://www.zenithle.tech/

## ✨ Features

- **🎨 Dark/Light Theme Toggle** - Seamlessly switch between dark and light modes for comfortable viewing
- **⚡ Smooth Animations** - Beautiful, performant animations throughout the site using motion-based design
- **📱 Fully Responsive** - Perfectly optimized for desktop, tablet, and mobile devices
- **📄 Interactive Navigation** - Smooth scroll navigation with active section highlighting
- **🖼️ Project Showcase** - Detailed project cards with technologies, descriptions, and links
- **💼 Professional Timeline** - Visual timeline of work experiences and achievements
- **🎓 Skills Section** - Categorized display of technical and soft skills
- **🌌 Visual Effects** - Particle background and cloud animations for enhanced aesthetics
- **♿ Accessible** - Built with accessibility best practices in mind
- **🧪 Comprehensive Testing** - Unit tests (Jest) and E2E tests (Playwright) for reliability
- **📊 Social Media Previews** - OpenGraph meta tags for rich share cards on social platforms
- **🤖 SEO & Crawlers** - Optimized with robots.txt for search engines and social bots

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React with SSR/SSG capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **UI Components**: Custom React components with TypeScript
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, Feather, etc.)
- **Animations**: CSS animations and transitions
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Package Manager**: [pnpm](https://pnpm.io/) for early stages, now switched to [npm](https://www.npmjs.com/)
- **CI-CD Pipeline for Deployment**: [Old - AWS EC2](https://aws.amazon.com/ec2/) for early deployment stages, now switched to [AWS S3](https://aws.amazon.com/pm/serv-s3/?trk=a1eab8e1-44df-4b59-97a0-7f429e638b4b&sc_channel=ps&trk=a1eab8e1-44df-4b59-97a0-7f429e638b4b&sc_channel=ps&ef_id=CjwKCAiA3-3KBhBiEiwA2x7FdGL8TvhB1U5mugkKKWaIULbS_aq6AZtR2vBTWjqC0sNSoG2Mze_hdRoCic8QAvD_BwE:G:s&s_kwcid=AL!4422!3!651751060962!e!!g!!aws%20s3&gad_campaignid=19852662362&gbraid=0AAAAADjHtp9ocLtQxUmW3fdxrnCjYAdlZ&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdGL8TvhB1U5mugkKKWaIULbS_aq6AZtR2vBTWjqC0sNSoG2Mze_hdRoCic8QAvD_BwE)[Old - AWS S3](https://aws.amazon.com/pm/serv-s3/?trk=a1eab8e1-44df-4b59-97a0-7f429e638b4b&sc_channel=ps&trk=a1eab8e1-44df-4b59-97a0-7f429e638b4b&sc_channel=ps&ef_id=CjwKCAiA3-3KBhBiEiwA2x7FdGL8TvhB1U5mugkKKWaIULbS_aq6AZtR2vBTWjqC0sNSoG2Mze_hdRoCic8QAvD_BwE:G:s&s_kwcid=AL!4422!3!651751060962!e!!g!!aws%20s3&gad_campaignid=19852662362&gbraid=0AAAAADjHtp9ocLtQxUmW3fdxrnCjYAdlZ&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdGL8TvhB1U5mugkKKWaIULbS_aq6AZtR2vBTWjqC0sNSoG2Mze_hdRoCic8QAvD_BwE)
- **Hosting**: [Squarespace](<https://domains.squarespace.com/?channel=pbr&subchannel=go&campaign=pbr-go-us-en-domains_domainsalone-mix&subcampaign=(domain-en_squarespace-domain_e)&gclsrc=aw.ds&gad_source=1&gad_campaignid=23273227326&gbraid=0AAAAADxS_FI_4DSWiFPWihHRFp_kMkvvO&gclid=CjwKCAiA3-3KBhBiEiwA2x7FdHWp9IwB3g3WzePjzpX7HSVIQgLp_rWPXohqIzVasaOZpJ9LAw5KDhoC8Q8QAvD_BwE>) and [CloudFlare](https://www.cloudflare.com/) for domain hosting

## 📁 Project Structure

```
zenithle_portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component with meta tags
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── not-found.css      # 404 styles
│   └── api/               # API routes
│       └── counter/       # Counter endpoint
│
├── components/            # Reusable React components
│   ├── Header/            # Navigation header
│   ├── Hero/              # Landing section
│   ├── About/             # About section
│   ├── Skills/            # Skills showcase
│   ├── Projects/          # Project portfolio
│   ├── Experiences/       # Work experience timeline
│   ├── Contact/           # Contact section
│   ├── Footer/            # Footer with social links
│   ├── Settings/          # Theme settings
│   ├── ThemeToggle/       # Dark/light mode toggle
│   ├── Navigation/        # Nav component
│   ├── CloudsBackground/  # Animated cloud background
│   ├── ParticlesBackground/ # Particle effects
│   ├── Galaxy/            # Galaxy visual effect
│   ├── BackToTop/         # Scroll to top button
│   ├── IntroOverlay/      # Intro screen overlay
│   ├── Section/           # Reusable section wrapper
│   └── MobileMenu/        # Mobile navigation menu
│
├── lib/                   # Utility functions and hooks
│   ├── data/              # Static data (projects, skills)
│   │   ├── projects.ts   # Project data
│   │   ├── skills.ts     # Skills data
│   │   └── visit-count.json # Visit counter data
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.tsx  # Theme management
│   │   ├── useIsMobile.ts # Mobile detection
│   │   ├── useScrollPosition.ts # Scroll tracking
│   │   ├── useReducedMotion.ts # Motion preferences
│   │   └── useVisitCount.ts # Visit counter hook
│   └── utils/             # Helper utilities
│       ├── constants.ts   # App constants
│       └── scrollTo.ts    # Smooth scroll utility
│
├── public/                # Static assets
│   ├── assets/            # Images and media files
│   ├── opengraph-image.png # OG image for social media previews
│   └── robots.txt         # SEO and crawler configuration
│
├── tests/                 # Test files
│   ├── components/        # Jest unit tests for components
│   │   ├── Galaxy.test.tsx
│   │   ├── Settings.test.tsx
│   │   ├── ThemeToggle.test.tsx
│   │   ├── CloudsBackground.test.tsx
│   │   ├── BackToTop.test.tsx
│   │   ├── ParticlesBackground.test.tsx
│   │   └── IntroOverlay.test.tsx
│   └── e2e/               # Playwright E2E tests
│       └── navigation.test.ts
│
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest testing configuration
├── jest.setup.js         # Jest setup file
├── playwright.config.ts  # Playwright E2E testing configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # This file
```

## 🎨 Features Explained

### Dark/Light Theme

Automatic theme detection with option to (1) set default theme that will be remembered on each visit and (2) manual toggle.

### Responsive Design

Mobile-first approach with multiple breakpoints for optimal viewing on all devices.

### Smooth Scrolling

Navigation links smoothly scroll to sections with visual feedback.

### Animations

- [Galaxy overlay effect](https://www.reactbits.dev/backgrounds/galaxy)
- [Particle background effect](https://www.reactbits.dev/backgrounds/particles)
- Cloud animations
- Fade-in transitions
- Hover effects on interactive elements

## 🔗 Key Components

| Component       | Purpose                         |
| --------------- | ------------------------------- |
| **Header**      | Navigation and branding         |
| **Hero**        | Eye-catching landing section    |
| **About**       | Personal introduction           |
| **Skills**      | Technical & professional skills |
| **Projects**    | Portfolio of work               |
| **Experiences** | Career timeline                 |
| **Contact**     | Get in touch section            |
| **Footer**      | Social links and info           |

## 🧪 Testing

### Unit Tests (Jest)

Comprehensive component tests covering:

- Galaxy visual effects
- Settings and theme functionality
- Theme toggle component
- Cloud background animations
- Back-to-top button
- Particle effects
- Intro overlay interactions

Run tests: `npm run test`

### E2E Tests (Playwright)

End-to-end tests for:

- Navigation between sections
- Smooth scrolling behavior
- Theme switching (light/dark)
- Mobile responsiveness
- Cross-browser support (Chromium, Firefox, Mobile Chrome)

Run tests: run `npm run dev` and `npm run e2e` at the same time

## 📊 Social Media & SEO

### OpenGraph Meta Tags

Configured in [app/layout.tsx](app/layout.tsx) with:

- Title and description
- Social preview image ([public/opengraph-image.png](public/opengraph-image.png))
- Canonical URL
- Twitter Card support

### Robots.txt

[public/robots.txt](public/robots.txt) configured for:

- Search engine crawlers (Google, Bing)
- Social media bots (Facebook, Twitter, LinkedIn)
- Sitemap references

## 📞 Contact & Social

- Email: zeenith.029@gmail.com
- GitHub: [@zeenith09](https://github.com/zeenith09)
- LinkedIn: [Zenith Le](https://linkedin.com/in/zenithle)
- Handshake: [Zenith Le](https://app.joinhandshake.com/profiles/zenithle)

## 🎯 Future Enhancements

- [ ] Gamify the experience even more
- [ ] Search functionality
- [ ] Multi-language support

**Built with ❤️ using Next.js & React 🧸🎀**
