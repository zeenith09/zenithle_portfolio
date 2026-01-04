# 👾 Zenith Le's Portfolio

For the longest time, I've always wanted to create a modern and visually catchy portfolio to showcase my journey while having fun with it. Here it is, finally coming to life - a 2000s retro game vibe website with smooth animations and dark/light theme support. More features are yet to come!

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

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React with SSR/SSG capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **UI Components**: Custom React components with TypeScript
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, Feather, etc.)
- **Animations**: CSS animations and transitions
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
portfolio_Draft/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── not-found.css      # 404 styles
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
│   │   └── skills.ts     # Skills data
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.tsx  # Theme management
│   │   ├── useIsMobile.ts # Mobile detection
│   │   ├── useScrollPosition.ts # Scroll tracking
│   │   └── useReducedMotion.ts # Motion preferences
│   └── utils/             # Helper utilities
│       ├── constants.ts   # App constants
│       └── scrollTo.ts    # Smooth scroll utility
│
├── public/                # Static assets
│   └── assets/            # Images and media files
│
├── tests/                 # Test files
│   ├── components/        # Component tests
│   └── e2e/              # End-to-end tests
│
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
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

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

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
