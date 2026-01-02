# Data Model: Retro Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-01-01  
**Purpose**: Define data entities, their attributes, and relationships (implementation-agnostic)

## Overview

This portfolio website is primarily **presentation-focused** with minimal dynamic data. Content is static or configuration-driven (no database). The data model focuses on configuration structures and client-side state management.

## Entities

### Theme State

**What it represents**: User's current theme preference (dark or light mode)

**Key attributes**:

- `currentTheme`: Current active theme (`"dark"` or `"light"`)
- `preferredTheme`: User's explicitly chosen preference (persisted to localStorage)
- `systemPreference`: System-detected preference from `prefers-color-scheme` media query

**Relationships**: None (standalone state)

**Validation rules**:

- `currentTheme` must be one of: `"dark"` | `"light"`
- `preferredTheme` must be one of: `"dark"` | `"light"` | `null` (null = not yet chosen)
- Default to `"dark"` if no preference stored

**State transitions**:

1. **Initial load**:
   - Check localStorage for `preferredTheme`
   - If not found, check system preference
   - Fall back to `"dark"` as default
2. **User toggles**:
   - `currentTheme` switches between `"dark"` ↔ `"light"`
   - New value persisted to localStorage as `preferredTheme`
   - DOM `<html>` class updated to reflect new theme

---

### Navigation State

**What it represents**: Current scroll position and active section

**Key attributes**:

- `scrollY`: Current vertical scroll position in pixels
- `activeSection`: ID of the currently visible section (`"hero"` | `"about"` | `"skills"` | `"projects"` | `"experiences"` | `"contact"`)
- `isHeaderSolid`: Boolean indicating if header should have solid background (true when scrolled past hero)
- `isMobileMenuOpen`: Boolean indicating if mobile hamburger menu is expanded

**Relationships**: None (derived from scroll position)

**Validation rules**:

- `scrollY` must be non-negative number
- `activeSection` must be one of the defined section IDs
- `isHeaderSolid` = true when `scrollY > heroHeight * 0.8`
- `isMobileMenuOpen` defaults to false, toggles on hamburger click

**State transitions**:

1. **Scroll detection**:
   - Monitor scroll events
   - Update `scrollY` continuously
   - Update `isHeaderSolid` when threshold crossed
   - Update `activeSection` based on Intersection Observer
2. **Navigation click**:
   - Close mobile menu if open (`isMobileMenuOpen = false`)
   - Smooth scroll to target section
   - Update URL hash
3. **Mobile menu toggle**:
   - `isMobileMenuOpen` toggles between true/false
   - Body scroll-lock applied when menu open (prevent background scroll)

---

### Section Configuration

**What it represents**: Static configuration for each portfolio section

**Key attributes**:

- `id`: Unique identifier for the section (used for anchors)
- `title`: Display title of the section
- `order`: Numeric order for rendering (1-8)
- `component`: Reference to the component that renders section content

**Relationships**:

- Navigation items reference sections via `id`
- Scroll detection tracks active section via `id`

**Validation rules**:

- `id` must be unique across all sections
- `id` must be URL-safe (lowercase, hyphens only)
- `order` must be unique and sequential (1-8)
- `title` must be non-empty string

**Static configuration**:

```typescript
const sections = [
	{ id: "hero", title: "Welcome", order: 1, component: Hero },
	{ id: "about", title: "About", order: 2, component: About },
	{ id: "skills", title: "Skills", order: 3, component: Skills },
	{ id: "projects", title: "Public Projects", order: 4, component: Projects },
	{ id: "experiences", title: "Experiences", order: 5, component: Experiences },
	{ id: "contact", title: "Contact", order: 6, component: Contact },
	{ id: "footer", title: "", order: 7, component: Footer },
];
```

---

### Navigation Item

**What it represents**: A single item in the navigation menu

**Key attributes**:

- `id`: Matches the section `id` this item links to
- `label`: Display text for the navigation link
- `href`: Anchor link (`#${id}`)
- `isCallToAction`: Boolean indicating if this is the Contact CTA (different styling)

**Relationships**: References `Section Configuration` via `id`

**Validation rules**:

- `id` must match an existing section `id`
- `label` must be non-empty string
- `href` must start with `#` and match section `id`
- Only one item can have `isCallToAction = true`

**Static configuration**:

```typescript
const navItems = [
	{ id: "about", label: "About", href: "#about", isCallToAction: false },
	{ id: "skills", label: "Skills", href: "#skills", isCallToAction: false },
	{
		id: "projects",
		label: "Public Projects",
		href: "#projects",
		isCallToAction: false,
	},
	{
		id: "experiences",
		label: "Experiences",
		href: "#experiences",
		isCallToAction: false,
	},
	{ id: "contact", label: "Contact", href: "#contact", isCallToAction: true },
];
```

---

### Content Models (Placeholders)

These entities represent structured content that will be added later. They define the **shape** of data, not implementation.

#### About Content

**What it represents**: Biographical information for the About section

**Key attributes**:

- `introduction`: Short intro paragraph (string)
- `education`: Education details (institution, degree, graduation date)
- `currentRole`: Current position and company
- `currentFocus`: What the portfolio owner is currently learning/working on
- `interests`: Areas of interest or collaboration (array of strings)
- `contactEmail`: Email address for contact

**Validation rules**:

- All fields are optional (placeholder support)
- Email must be valid format if provided

---

#### Skill

**What it represents**: A single technical skill or technology

**Key attributes**:

- `name`: Skill name (e.g., "TypeScript", "Next.js")
- `category`: Grouping category (e.g., "Frontend", "Backend", "Tools")
- `proficiency`: Skill level (optional, e.g., "Expert", "Intermediate")

**Relationships**: Skills belong to categories for grouping

**Validation rules**:

- `name` must be non-empty string
- `category` must be non-empty string
- `proficiency` is optional

---

#### Project

**What it represents**: A portfolio project entry

**Key attributes**:

- `title`: Project name
- `description`: Brief project description
- `technologies`: Array of technologies used (strings)
- `links`: Object with optional `live`, `github`, `demo` URLs
- `imageUrl`: Optional project thumbnail/screenshot
- `featured`: Boolean indicating if project should be highlighted

**Validation rules**:

- `title` must be non-empty string
- `description` must be non-empty string
- `technologies` must be non-empty array
- URLs in `links` must be valid if provided
- `imageUrl` must be valid URL if provided

---

#### Experience

**What it represents**: A work experience entry

**Key attributes**:

- `role`: Job title
- `company`: Company name
- `period`: Time period (e.g., "Jan 2023 - Present")
- `description`: Responsibilities and achievements (string or array of strings)
- `technologies`: Array of technologies used (optional)
- `current`: Boolean indicating if this is current position

**Validation rules**:

- `role` must be non-empty string
- `company` must be non-empty string
- `period` must be non-empty string
- `description` must be non-empty
- Only one experience can have `current = true`

---

### Animation Configuration

**What it represents**: Configuration for scroll and transition animations

**Key attributes**:

- `reducedMotion`: Boolean from media query `prefers-reduced-motion: reduce`
- `transitionDuration`: Base duration for animations (in milliseconds)
- `easing`: Animation easing function (e.g., "easeOut", "easeInOut")
- `fadeThreshold`: Intersection Observer threshold for fade-in (0-1)

**Relationships**: Affects all animated components globally

**Validation rules**:

- `reducedMotion` reflects system preference, cannot be overridden by user
- `transitionDuration` must be positive number, capped at 1000ms max
- `fadeThreshold` must be between 0 and 1 (default: 0.3)

**State transitions**:

- `reducedMotion` updates when system preference changes
- When `reducedMotion = true`, all animations reduced to instant or minimal transitions

## Data Flow

### Theme Toggle Flow

1. User clicks theme toggle button
2. Theme context updates `currentTheme` state
3. New theme value saved to localStorage
4. DOM `<html>` class updated (triggers Tailwind dark mode)
5. CSS variables recalculate for new theme
6. Icon animates from moon to sun (or vice versa)

### Navigation Flow

1. User clicks navigation link
2. Event handler prevents default anchor behavior
3. Target section ID extracted from href
4. Smooth scroll initiated to target section
5. URL hash updated without page reload
6. Mobile menu closes if open
7. Active section state updates when scroll completes

### Scroll Animation Flow

1. Scroll event detected
2. Scroll position tracked via `useScroll`
3. Header background updates when threshold crossed
4. Intersection Observer detects sections entering/exiting viewport
5. Section opacity/position animated based on visibility
6. Active section state updated for navigation highlighting

### Initial Load Flow

1. App mounts, theme provider initializes
2. Check localStorage for saved theme preference
3. Apply theme to `<html>` element before first paint (prevent flash)
4. Check URL hash for deep link
5. If hash present, scroll to target section after render
6. Initialize Intersection Observers for all sections
7. Attach scroll listeners for header transition

## Non-Functional Considerations

- **Performance**: All configuration is static (no runtime fetching), state updates are optimized via React state batching
- **Persistence**: Only theme preference persists (localStorage), other state is ephemeral (resets on page reload)
- **Scalability**: Content arrays (skills, projects, experiences) support unlimited entries, but UI should paginate or grid-wrap if count exceeds ~12 items
- **Validation**: Client-side validation sufficient (no backend, no user-generated content)
- **Accessibility**: State changes announce to screen readers via ARIA live regions where appropriate (theme toggle, mobile menu)
