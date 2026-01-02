# API Contracts: Retro Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-01  
**Purpose**: Define interfaces and contracts (no backend API, client-side only)

## Overview

This portfolio website has **no backend API**. All data is static or client-side managed. This document defines **TypeScript interfaces** and **component contracts** that serve as the "API" between components.

## TypeScript Interfaces

### Theme Contract

```typescript
/**
 * Theme preference and state management
 */
interface ThemeState {
	/** Current active theme */
	currentTheme: "dark" | "light";
	/** User's explicitly chosen preference (persisted) */
	preferredTheme: "dark" | "light" | null;
	/** System preference from media query */
	systemPreference: "dark" | "light";
}

interface ThemeContextValue {
	/** Current theme state */
	theme: "dark" | "light";
	/** Toggle between dark and light */
	toggleTheme: () => void;
	/** Check if dark mode is active */
	isDark: boolean;
}
```

---

### Navigation Contract

```typescript
/**
 * Navigation item configuration
 */
interface NavItem {
	/** Unique identifier matching section ID */
	id: string;
	/** Display label for navigation link */
	label: string;
	/** Anchor href (e.g., "#about") */
	href: string;
	/** Whether this is a call-to-action (Contact) */
	isCallToAction?: boolean;
}

/**
 * Navigation state
 */
interface NavigationState {
	/** Current scroll position in pixels */
	scrollY: number;
	/** Currently active/visible section */
	activeSection: string;
	/** Whether header should have solid background */
	isHeaderSolid: boolean;
	/** Whether mobile menu is open */
	isMobileMenuOpen: boolean;
}

/**
 * Scroll utility function
 */
interface ScrollToSection {
	(sectionId: string): void;
}
```

---

### Section Contract

```typescript
/**
 * Section configuration
 */
interface SectionConfig {
	/** Unique section identifier */
	id: string;
	/** Display title */
	title: string;
	/** Render order (1-8) */
	order: number;
	/** Component to render */
	component: React.ComponentType;
}

/**
 * Section component props
 */
interface SectionProps {
	/** Section ID for anchor */
	id: string;
	/** Section title */
	title?: string;
	/** Content to render */
	children: React.ReactNode;
	/** Additional CSS classes */
	className?: string;
	/** Whether to animate on scroll */
	animate?: boolean;
}
```

---

### Content Contracts

```typescript
/**
 * About section content
 */
interface AboutContent {
	introduction: string;
	education: {
		institution: string;
		degree: string;
		graduationDate: string;
	};
	currentRole: {
		title: string;
		company: string;
	};
	currentFocus: string[];
	interests: string[];
	contactEmail: string;
}

/**
 * Skill item
 */
interface Skill {
	name: string;
	category: "Frontend" | "Backend" | "Tools" | "Other";
	proficiency?: "Expert" | "Intermediate" | "Beginner";
}

/**
 * Skills grouped by category
 */
interface SkillsContent {
	categories: {
		name: string;
		skills: Skill[];
	}[];
}

/**
 * Project item
 */
interface Project {
	title: string;
	description: string;
	technologies: string[];
	links: {
		live?: string;
		github?: string;
		demo?: string;
	};
	imageUrl?: string;
	featured?: boolean;
}

/**
 * Experience item
 */
interface Experience {
	role: string;
	company: string;
	period: string;
	description: string | string[];
	technologies?: string[];
	current?: boolean;
}

/**
 * Contact information
 */
interface ContactContent {
	email: string;
	socialLinks: {
		github?: string;
		linkedin?: string;
		twitter?: string;
		linktree?: string;
	};
	callToAction: string;
}
```

---

### Animation Contract

```typescript
/**
 * Animation configuration
 */
interface AnimationConfig {
	/** Whether user prefers reduced motion */
	reducedMotion: boolean;
	/** Base transition duration in ms */
	transitionDuration: number;
	/** Easing function */
	easing: "easeOut" | "easeInOut" | "easeIn" | "linear";
	/** Intersection threshold for fade-in (0-1) */
	fadeThreshold: number;
}

/**
 * Framer Motion variants for sections
 */
interface SectionVariants {
	hidden: {
		opacity: number;
		y?: number;
	};
	visible: {
		opacity: number;
		y?: number;
		transition: {
			duration: number;
			ease: string;
		};
	};
}
```

---

### Component Props Contracts

```typescript
/**
 * Header component props
 */
interface HeaderProps {
	isScrolled: boolean;
	activeSection: string;
}

/**
 * Navigation component props
 */
interface NavigationProps {
	items: NavItem[];
	activeSection: string;
	onNavigate: (sectionId: string) => void;
}

/**
 * Mobile menu component props
 */
interface MobileMenuProps {
	isOpen: boolean;
	onToggle: () => void;
	items: NavItem[];
	onNavigate: (sectionId: string) => void;
}

/**
 * Theme toggle component props
 */
interface ThemeToggleProps {
	className?: string;
	size?: "sm" | "md" | "lg";
}

/**
 * Hero component props
 */
interface HeroProps {
	backgroundUrl: string;
	onScroll?: () => void;
}
```

## Component Contracts

### ThemeProvider

**Purpose**: Provide theme state and toggle functionality to all components

**Exports**:

- `ThemeProvider` component (wraps app)
- `useTheme` hook (access theme context)

**Contract**:

```typescript
const ThemeProvider: React.FC<{ children: React.ReactNode }>;
const useTheme: () => ThemeContextValue;
```

**Usage**:

```typescript
// app/layout.tsx
<ThemeProvider>
	<html className={theme}>
		<body>{children}</body>
	</html>
</ThemeProvider>;

// Any component
const { theme, toggleTheme, isDark } = useTheme();
```

---

### useScrollPosition Hook

**Purpose**: Track scroll position and active section

**Contract**:

```typescript
interface UseScrollPositionReturn {
	scrollY: number;
	isScrolled: boolean;
	activeSection: string;
}

const useScrollPosition: () => UseScrollPositionReturn;
```

**Behavior**:

- Monitors `window.scrollY`
- Calculates `isScrolled` based on hero height threshold (80% of viewport)
- Determines `activeSection` via Intersection Observer
- Updates on scroll events (throttled)

---

### useReducedMotion Hook

**Purpose**: Detect user's motion preference

**Contract**:

```typescript
const useReducedMotion: () => boolean;
```

**Behavior**:

- Returns `true` if `prefers-reduced-motion: reduce` is set
- Returns `false` otherwise
- Updates if media query changes

---

### scrollToSection Utility

**Purpose**: Smooth scroll to a section by ID

**Contract**:

```typescript
const scrollToSection: (sectionId: string) => void;
```

**Behavior**:

- Finds element with `id={sectionId}`
- Scrolls to element with smooth behavior
- Updates URL hash without page reload
- Does nothing if element not found

---

## LocalStorage Contract

### Theme Persistence

**Key**: `"theme"`

**Value**: `"dark" | "light"`

**Read**:

```typescript
const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
```

**Write**:

```typescript
localStorage.setItem("theme", theme);
```

**Behavior**:

- Read on app mount to restore preference
- Write on every theme toggle
- Fall back to `"dark"` if not present

---

## CSS Variables Contract

### Theme Tokens

**Dark Mode**:

```css
.dark {
	--color-bg: 0 0 0; /* Black */
	--color-text: 224 224 224; /* Light gray */
	--color-primary: 147 51 234; /* Purple */
	--color-secondary: 59 130 246; /* Blue */
	--color-accent: 236 72 153; /* Pink */
}
```

**Light Mode**:

```css
:root {
	--color-bg: 255 255 255; /* White */
	--color-text: 26 26 26; /* Dark gray */
	--color-primary: 124 58 237; /* Purple */
	--color-secondary: 37 99 235; /* Blue */
	--color-accent: 219 39 119; /* Pink */
}
```

**Usage**:

```typescript
// Tailwind classes
<div className="bg-[rgb(var(--color-bg))]">
<p className="text-[rgb(var(--color-text))]">
```

---

## Validation Rules

### Theme

- Only `"dark"` or `"light"` values accepted
- Invalid values default to `"dark"`

### Navigation

- Section IDs must be URL-safe (lowercase, hyphens)
- Active section must match an existing section ID
- Scroll position must be non-negative

### Content

- All text fields must be non-empty strings
- URLs must be valid HTTP/HTTPS
- Email must match regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Animation

- Duration must be positive number ≤ 1000ms
- Threshold must be 0-1
- Easing must be valid Framer Motion value

---

## Error Handling

### Theme Errors

- **localStorage unavailable**: Fall back to default `"dark"` theme, no persistence
- **Invalid stored value**: Reset to `"dark"` and overwrite stored value

### Navigation Errors

- **Section not found**: Log warning, do nothing (no scroll)
- **Scroll blocked**: Retry after delay or fall back to instant scroll

### Animation Errors

- **Framer Motion error**: Fall back to CSS transitions
- **Intersection Observer unavailable**: Show all sections immediately

---

## Component Integration

```typescript
// Example: Header component integrating all contracts
import { useTheme } from "@/lib/hooks/useTheme";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { scrollToSection } from "@/lib/utils/scrollTo";

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const { isScrolled, activeSection } = useScrollPosition();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems: NavItem[] = [
		{ id: "about", label: "About", href: "#about" },
		{ id: "skills", label: "Skills", href: "#skills" },
		{ id: "projects", label: "Public Projects", href: "#projects" },
		{ id: "experiences", label: "Experiences", href: "#experiences" },
		{ id: "contact", label: "Contact", href: "#contact", isCallToAction: true },
	];

	return (
		<motion.header
			animate={{
				backgroundColor: isScrolled
					? "rgba(0, 0, 0, 0.95)"
					: "rgba(0, 0, 0, 0)",
			}}
		>
			{/* Logo */}
			<h1>MY NAME'S PORTFOLIO</h1>

			{/* Desktop Navigation */}
			<Navigation
				items={navItems}
				activeSection={activeSection}
				onNavigate={scrollToSection}
			/>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				items={navItems}
				onNavigate={(id) => {
					scrollToSection(id);
					setIsMobileMenuOpen(false);
				}}
			/>

			{/* Theme Toggle */}
			<ThemeToggle />
		</motion.header>
	);
};
```

---

## Notes

- No REST/GraphQL API required (static site)
- Contracts focus on TypeScript interfaces and component props
- All state is client-side (React state, localStorage)
- Validation is runtime TypeScript checks + PropTypes for dev
