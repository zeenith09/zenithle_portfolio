# Quickstart Guide: Retro Portfolio Website

**Feature**: 001-portfolio-website  
**Last Updated**: 2026-01-01

## Prerequisites

- **Node.js**: 18.x or higher
- **pnpm**: 8.x or higher (or npm/yarn)
- **Git**: For version control
- **VS Code** (recommended): With ESLint, Prettier, Tailwind CSS IntelliSense extensions

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd portfolio_Draft
git checkout 001-portfolio-website
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Environment Setup (if needed)

No environment variables required for local development. Site is fully static.

### 4. Start Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio_Draft/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page (all sections)
│   ├── globals.css          # Global styles, Tailwind, theme variables
│   └── fonts/               # Custom retro fonts
├── components/              # React components
│   ├── Header.tsx           # Fixed header with nav
│   ├── Navigation.tsx       # Desktop navigation
│   ├── MobileMenu.tsx       # Mobile hamburger menu
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── Hero.tsx             # Opening hero section
│   ├── Section.tsx          # Reusable section wrapper
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Experiences.tsx      # Experiences section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
├── lib/                     # Utilities and hooks
│   ├── hooks/
│   │   ├── useTheme.tsx     # Theme context provider
│   │   ├── useScrollPosition.ts
│   │   └── useReducedMotion.ts
│   └── utils/
│       ├── scrollTo.ts      # Smooth scroll utility
│       └── constants.ts     # Section IDs, nav items
├── public/                  # Static assets
│   ├── hero-animation.gif   # Hero background (≤1MB)
│   └── assets/              # Icons, images
├── tests/                   # Test files
│   ├── e2e/                 # Playwright E2E tests
│   └── components/          # Jest + RTL unit tests
├── specs/                   # Feature documentation
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Development Workflow

### Running the App

```bash
# Development server (with hot reload)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Run tests
pnpm test          # Unit tests
pnpm test:e2e      # E2E tests
```

### Working with Components

#### Example: Editing the Header

```typescript
// components/Header.tsx
import { useTheme } from "@/lib/hooks/useTheme";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const { isScrolled, activeSection } = useScrollPosition();

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-colors ${
				isScrolled ? "bg-black/95" : "bg-transparent"
			}`}
		>
			{/* Content */}
		</motion.header>
	);
};
```

#### Example: Creating a New Section

```typescript
// components/NewSection.tsx
import { Section } from "./Section";

export const NewSection = () => {
	return (
		<Section id="new-section" title="New Section">
			<p>Your content here</p>
		</Section>
	);
};

// Add to app/page.tsx
import { NewSection } from "@/components/NewSection";

export default function Home() {
	return (
		<>
			{/* ... other sections */}
			<NewSection />
		</>
	);
}

// Add to navigation (lib/utils/constants.ts)
export const NAV_ITEMS = [
	// ... existing items
	{ id: "new-section", label: "New Section", href: "#new-section" },
];
```

### Theme Customization

Edit `tailwind.config.ts`:

```typescript
module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"retro-purple": "#9333ea",
				"retro-blue": "#3b82f6",
			},
			fontFamily: {
				pixel: ['"Press Start 2P"', "monospace"],
			},
		},
	},
};
```

Edit `app/globals.css`:

```css
:root {
	--color-bg: 255 255 255;
	--color-text: 26 26 26;
}

.dark {
	--color-bg: 0 0 0;
	--color-text: 224 224 224;
}
```

---

## Testing

### Running Tests

```bash
# Unit tests (Jest + React Testing Library)
pnpm test

# E2E tests (Playwright)
pnpm test:e2e

# E2E tests with UI
pnpm test:e2e --ui
```

### Writing Tests

#### Unit Test Example

```typescript
// tests/components/ThemeToggle.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/lib/hooks/useTheme";

describe("ThemeToggle", () => {
	it("toggles theme on click", () => {
		render(
			<ThemeProvider>
				<ThemeToggle />
			</ThemeProvider>
		);

		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("aria-label", /dark mode/i);

		fireEvent.click(button);
		expect(button).toHaveAttribute("aria-label", /light mode/i);
	});
});
```

#### E2E Test Example

```typescript
// tests/e2e/navigation.spec.ts
import { test, expect } from "@playwright/test";

test("navigate to About section", async ({ page }) => {
	await page.goto("http://localhost:3000");

	// Click About link
	await page.click('a[href="#about"]');

	// Verify URL hash
	expect(page.url()).toContain("#about");

	// Verify About section is visible
	const aboutSection = page.locator("#about");
	await expect(aboutSection).toBeInViewport();
});
```

---

## Performance Validation

### Check Bundle Size

```bash
# Build and analyze bundle
pnpm build
pnpm analyze

# Check if critical JS/CSS ≤ 200KB
du -h .next/static/chunks/main-*.js
du -h .next/static/css/*.css
```

### Lighthouse Testing

```bash
# Run Lighthouse CI
pnpm lighthouse

# Or use Chrome DevTools:
# 1. Build production version: pnpm build
# 2. Start production server: pnpm start
# 3. Open Chrome DevTools > Lighthouse
# 4. Run audit (Mobile, Performance + Accessibility)
```

**Target Metrics**:

- LCP ≤ 2.5s
- CLS < 0.1
- TTI < 3.8s
- Performance Score ≥ 90
- Accessibility Score = 100

---

## Accessibility Validation

### Keyboard Navigation Check

1. Open site in browser
2. Press `Tab` to navigate through interactive elements
3. Verify focus is visible on all elements
4. Press `Enter`/`Space` to activate buttons and links
5. Open hamburger menu (mobile) with keyboard
6. Toggle theme with keyboard

### Screen Reader Testing

```bash
# macOS: Enable VoiceOver
# Press Cmd + F5

# Test navigation:
# - VO + Right Arrow: Move to next element
# - VO + Space: Activate element
```

### Contrast Validation

Use browser extension:

- **axe DevTools**: Automated accessibility testing
- **WAVE**: Visual contrast checker

Or run automated tests:

```bash
pnpm test:a11y
```

---

## Common Tasks

### Add New Content

#### Update About Section

Edit `components/About.tsx`:

```typescript
export const About = () => {
	return (
		<Section id="about" title="About">
			<p>Your updated bio here...</p>
		</Section>
	);
};
```

#### Add New Project

Edit `lib/utils/constants.ts`:

```typescript
export const PROJECTS: Project[] = [
	{
		title: "New Project",
		description: "Description here",
		technologies: ["React", "TypeScript"],
		links: {
			github: "https://github.com/...",
			live: "https://...",
		},
	},
	// ... existing projects
];
```

### Change Hero Background

Replace `public/hero-animation.gif` with new asset (ensure ≤ 1MB).

Or update to video:

```typescript
// components/Hero.tsx
<video autoPlay loop muted playsInline>
	<source src="/hero.webm" type="video/webm" />
	<source src="/hero.mp4" type="video/mp4" />
</video>
```

### Adjust Animation Timing

Edit `lib/utils/constants.ts`:

```typescript
export const ANIMATION_CONFIG = {
	transitionDuration: 600, // Change from 600ms to desired value
	easing: "easeOut",
	fadeThreshold: 0.3, // Adjust scroll trigger point (0-1)
};
```

---

## Troubleshooting

### Issue: Theme flash on page load

**Solution**: Ensure theme is applied before first paint

```typescript
// app/layout.tsx
<script
	dangerouslySetInnerHTML={{
		__html: `
      const theme = localStorage.getItem('theme') || 'dark';
      document.documentElement.className = theme;
    `,
	}}
/>
```

### Issue: Smooth scroll not working

**Solution**: Check browser support, fall back to instant scroll

```typescript
// lib/utils/scrollTo.ts
export const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (!element) return;

	// Try smooth scroll
	try {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	} catch {
		// Fallback for browsers without smooth scroll
		element.scrollIntoView({ block: "start" });
	}
};
```

### Issue: Animations janky on mobile

**Solution**: Optimize for GPU, reduce animation complexity

```typescript
// Use transform and opacity only (GPU-accelerated)
<motion.div
  animate={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
  }}
>
```

### Issue: Bundle size exceeds 200KB

**Solution**: Check bundle analyzer, lazy-load components

```bash
pnpm analyze

# Lazy load heavy components
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <p>Loading...</p>,
})
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify

```bash
# Build command
pnpm build

# Publish directory
.next
```

### Static Export (Optional)

```typescript
// next.config.js
module.exports = {
	output: "export",
};
```

```bash
pnpm build
# Output: out/ directory (static HTML)
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Playwright Documentation](https://playwright.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Validation Checklist

Before considering feature complete:

- [ ] All sections render correctly (Hero, About, Skills, Projects, Experiences, Contact, Footer)
- [ ] Navigation links scroll to correct sections
- [ ] Header transitions from transparent to solid on scroll
- [ ] Desktop navigation visible on large screens
- [ ] Hamburger menu works on mobile screens
- [ ] Theme toggle switches between dark and light modes
- [ ] Theme preference persists across page reloads
- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible on all elements
- [ ] WCAG 2.1 AA contrast ratios met in both themes
- [ ] Smooth scroll animations work (or respect reduced motion)
- [ ] LCP ≤ 2.5s on mobile (test with Lighthouse)
- [ ] CLS < 0.1 (no layout shifts)
- [ ] Bundle size ≤ 200KB critical JS/CSS
- [ ] Hero asset ≤ 1MB
- [ ] Site functions without JavaScript (anchor links work)
- [ ] No console errors or warnings
- [ ] Site works on iOS Safari, Android Chrome, desktop browsers

---

## Questions or Issues?

Refer to:

- [Feature Spec](spec.md)
- [Implementation Plan](plan.md)
- [Research Documentation](research.md)
- [Data Model](data-model.md)
- [API Contracts](contracts/interfaces.md)
