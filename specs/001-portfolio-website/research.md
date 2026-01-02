# Research: Retro Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-01  
**Purpose**: Resolve Technical Context unknowns and establish best practices for implementation

## Technology Stack Research

### Next.js 14+ App Router

**Decision**: Use Next.js 14+ with App Router for the portfolio website

**Rationale**:

- **App Router advantages**: Server components by default reduce client bundle size (critical for ≤200KB constraint), built-in streaming and suspense, improved performance
- **Static generation**: Portfolio is content-stable, benefits from static HTML generation for fast LCP
- **TypeScript support**: First-class TypeScript integration with strict mode
- **CSS/Tailwind integration**: Built-in CSS support, optimized for Tailwind CSS
- **Routing not needed**: Single-page app doesn't require routing, but App Router provides better DX and performance baseline

**Alternatives considered**:

- **Vite + React**: Faster dev server, but requires manual SSG setup and loses Next.js optimizations (image optimization, font optimization)
- **Vanilla HTML/CSS/JS**: Maximum control and minimal bundle, but loses component reusability and type safety
- **Astro**: Excellent for static content, but Framer Motion integration less mature and more complex for scroll animations

### Tailwind CSS 3.x

**Decision**: Use Tailwind CSS 3.x for styling with custom design tokens

**Rationale**:

- **Utility-first approach**: Rapid prototyping, consistent spacing/sizing, excellent for responsive design
- **Dark mode support**: Built-in `dark:` variant simplifies theme switching
- **Purging**: Automatic removal of unused CSS keeps bundle small (important for ≤200KB constraint)
- **Customization**: Easy to define retro/pixel theme via `tailwind.config.ts` (custom fonts, colors, animations)
- **CSS Variables integration**: Can combine Tailwind with CSS custom properties for dynamic theme switching

**Alternatives considered**:

- **CSS Modules**: More traditional, but verbose for responsive design and lacks dark mode utilities
- **Styled Components**: Runtime CSS-in-JS adds bundle overhead and can cause flash of unstyled content
- **Vanilla CSS with CSS Variables**: Maximum control, but requires manual responsive utilities and more boilerplate

### Framer Motion 10+

**Decision**: Use Framer Motion 10+ for scroll animations and theme transitions

**Rationale**:

- **Declarative animations**: React-first API (`motion` components, `useScroll`, `useInView`) simplifies complex scroll-triggered animations
- **Performance**: GPU-accelerated transforms/opacity, optimized for 60fps target
- **Scroll hooks**: `useScroll`, `useInView`, `useTransform` enable fade-in/fade-out section transitions without manual scroll listeners
- **Gesture support**: Built-in drag, hover, tap animations for interactive elements
- **Reduced motion support**: Respects `prefers-reduced-motion` automatically via `useReducedMotion` hook

**Alternatives considered**:

- **GSAP (GreenSock)**: More powerful for complex timelines, but steeper learning curve and larger bundle
- **CSS animations only**: Lighter weight, but harder to coordinate scroll-based animations and lacks motion hooks
- **React Spring**: Physics-based animations, but overkill for this use case and more complex API

## Best Practices

### Performance Optimization

**Research findings**:

1. **Code splitting**: Next.js automatic code splitting ensures only critical JS loads initially
2. **Image optimization**: Use Next.js `<Image>` component with `priority` for hero section, `loading="lazy"` for below-fold content
3. **Font optimization**: Use `next/font` for automatic font subsetting and self-hosting (reduces external requests)
4. **Hero asset**: Prefer optimized video (`<video autoplay loop muted>`) over GIF if possible - better compression for ≤1MB constraint
5. **Critical CSS inlining**: Tailwind's JIT mode + Next.js automatically inlines critical CSS
6. **Bundle analysis**: Use `@next/bundle-analyzer` to ensure ≤200KB target

**Implementation pattern**:

```typescript
// app/layout.tsx - Font optimization
import { Press_Start_2P } from 'next/font/google'
const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'] })

// components/Hero.tsx - Optimized media
<video autoPlay loop muted playsInline className="...">
  <source src="/hero.webm" type="video/webm" />
  <source src="/hero.mp4" type="video/mp4" />
</video>
```

### Accessibility Implementation

**Research findings**:

1. **Skip links**: Implement visually-hidden skip link that appears on focus (Tailwind: `sr-only focus:not-sr-only`)
2. **ARIA landmarks**: Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) with ARIA labels where needed
3. **Focus management**: Ensure visible focus rings (`focus:ring-2 focus:ring-offset-2`) and logical tab order
4. **Theme toggle**: Use `<button>` with `aria-label`, announce theme change with `aria-live="polite"`
5. **Hamburger menu**: ARIA attributes: `aria-expanded`, `aria-controls`, `aria-label="Main menu"`
6. **Reduced motion**: Framer Motion's `useReducedMotion()` hook + Tailwind's `motion-reduce:` variants

**Implementation pattern**:

```typescript
// components/ThemeToggle.tsx
<button
	onClick={toggleTheme}
	aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
	className="focus:ring-2 focus:ring-offset-2"
>
	<motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }}>
		{theme === "dark" ? <MoonIcon /> : <SunIcon />}
	</motion.div>
</button>;

// lib/hooks/useReducedMotion.ts
export const useReducedMotion = () => {
	const prefersReducedMotion = useMediaQuery(
		"(prefers-reduced-motion: reduce)"
	);
	return prefersReducedMotion;
};
```

### Scroll Animation Patterns

**Research findings**:

1. **Intersection Observer**: Framer Motion's `useInView` wraps Intersection Observer for efficient scroll detection
2. **Scroll progress**: `useScroll` provides scroll progress (0-1) for animations tied to scroll position
3. **Section transitions**: Use `motion.section` with `initial`, `whileInView`, `viewport` props for fade effects
4. **Header transition**: Track scroll position with `useScroll`, apply background when scrollY > hero height
5. **Smooth scrolling**: Use `scroll-behavior: smooth` CSS or custom scrollTo with `window.scrollTo({ behavior: 'smooth' })`

**Implementation pattern**:

```typescript
// components/Section.tsx
const Section = ({ children, id }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.section
			ref={ref}
			id={id}
			initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
			animate={{
				opacity: isInView ? 1 : 0.3,
				y: isInView ? 0 : prefersReducedMotion ? 0 : 50,
			}}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{children}
		</motion.section>
	);
};

// components/Header.tsx
const Header = () => {
	const { scrollY } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		return scrollY.onChange((latest) => {
			setIsScrolled(latest > window.innerHeight * 0.8);
		});
	}, [scrollY]);

	return (
		<motion.header
			animate={{
				backgroundColor: isScrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
			}}
		>
			{/* content */}
		</motion.header>
	);
};
```

### Theme Management

**Research findings**:

1. **CSS Variables**: Define theme tokens as CSS custom properties, toggle via `data-theme` attribute on `<html>`
2. **Tailwind dark mode**: Use `class` strategy in `tailwind.config.ts` (more control than media query strategy)
3. **Context API**: React Context provides theme state and toggle function to all components
4. **LocalStorage**: Persist theme preference, read on mount to avoid flash of incorrect theme
5. **System preference**: Optionally detect `prefers-color-scheme` on first visit

**Implementation pattern**:

```typescript
// app/layout.tsx
<html lang="en" className={theme}>
  <body>{children}</body>
</html>

// lib/hooks/useTheme.tsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) setTheme(stored)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.className = newTheme
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// tailwind.config.ts
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'retro-bg': {
          dark: '#000000',
          light: '#ffffff',
        },
        'retro-text': {
          dark: '#e0e0e0',
          light: '#1a1a1a',
        },
      },
    },
  },
}

// globals.css
:root {
  --color-bg: 255 255 255;
  --color-text: 26 26 26;
}

.dark {
  --color-bg: 0 0 0;
  --color-text: 224 224 224;
}
```

### Mobile-First Responsive Design

**Research findings**:

1. **Breakpoints**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px) align with mobile-first approach
2. **Navigation pattern**: Hamburger menu below `md:` breakpoint, horizontal tabs above
3. **Touch targets**: Minimum 44x44px for touch interactions (WCAG 2.1 AAA guideline)
4. **Viewport units**: Use `dvh` (dynamic viewport height) instead of `vh` for mobile Safari support
5. **Testing**: Test on real devices (iOS Safari, Android Chrome) as Framer Motion can behave differently

**Implementation pattern**:

```typescript
// components/Header.tsx
<header>
  {/* Mobile hamburger - hidden on md+ */}
  <button className="md:hidden" aria-label="Open menu">
    <HamburgerIcon />
  </button>

  {/* Desktop nav - hidden below md */}
  <nav className="hidden md:flex gap-6">
    <a href="#about">About</a>
    {/* ... */}
  </nav>
</header>

// components/Hero.tsx - Use dvh for full-screen hero
<section className="h-[100dvh] relative">
  {/* content */}
</section>
```

## Design Patterns

### Component Modularity

**Pattern**: Separate content from presentation using component composition and props

```typescript
// components/Section.tsx - Reusable wrapper
interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <motion.section id={id} className={`min-h-screen ${className}`}>
      <h2 className="text-4xl mb-8">{title}</h2>
      <div className="content-wrapper">{children}</div>
    </motion.section>
  )
}

// app/page.tsx - Compose sections
<Section id="about" title="About">
  <About />
</Section>
<Section id="skills" title="Skills">
  <Skills />
</Section>
```

### Anchor Scrolling

**Pattern**: Use Next.js built-in anchor support with smooth scroll enhancement

```typescript
// lib/utils/scrollTo.ts
export const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (!element) return;

	element.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});

	// Update URL without full page reload
	window.history.pushState(null, "", `#${sectionId}`);
};

// components/Navigation.tsx
const navItems = [
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	// ...
];

navItems.map((item) => (
	<a
		key={item.id}
		href={`#${item.id}`}
		onClick={(e) => {
			e.preventDefault();
			scrollToSection(item.id);
		}}
	>
		{item.label}
	</a>
));
```

## Implementation Notes

- All unknowns from Technical Context have been resolved
- Stack decisions align with performance budgets (≤200KB, ≤2.5s LCP, 60fps)
- Accessibility patterns meet WCAG 2.1 AA requirements
- Mobile-first approach validated against constitution
- Animation patterns support both smooth motion and reduced motion preferences
