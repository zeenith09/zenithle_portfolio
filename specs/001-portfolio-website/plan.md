# Implementation Plan: Retro Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-01-01 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

A single-page portfolio website with retro 2000s pixel/game-inspired space aesthetic, featuring anchored scroll navigation, animated section transitions, and dark/light theme toggle. The site prioritizes accessibility (WCAG 2.1 AA), performance (LCP ≤ 2.5s, 60fps animations), and mobile-first responsive design with smooth fade transitions between sections.

## Technical Context

**Language/Version**: TypeScript 5.x with strict mode  
**Primary Dependencies**: Next.js 14+ (App Router), React 18+, Tailwind CSS 3.x, Framer Motion 10+  
**Storage**: LocalStorage for theme preference persistence, no backend database  
**Testing**: Playwright for E2E (accessibility, navigation, animations), Jest + React Testing Library for component tests  
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge) with mobile-first approach, iOS Safari 15+, Android Chrome 90+  
**Project Type**: Web (single-page application)  
**Performance Goals**: LCP ≤ 2.5s, CLS < 0.1, TTI < 3.8s, 60fps animations, First Contentful Paint < 1.8s  
**Constraints**: Initial bundle ≤ 200KB (critical CSS/JS), hero media ≤ 1MB, smooth 60fps scroll transitions, WCAG 2.1 AA contrast in both themes  
**Scale/Scope**: Single-user portfolio site, 8 sections, ~10-15 components, no authentication, static content with modular structure

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ✅ **Navigation**: Anchored sections (#about, #skills, #projects, #experiences, #contact) mapped 1:1 to content; keyboard (Tab + Enter) and scroll navigation parity on mobile and desktop
- ✅ **Brand**: Retro 2000s pixel/game space aesthetic (inspired by poolsuite.net, lofi.cafe); dark mode default (black background) with light mode parity (white background)
- ✅ **Accessibility**: WCAG 2.1 AA contrast (≥4.5:1 normal, ≥3:1 large), visible focus states, ARIA landmarks (navigation, main, complementary), skip-to-content link, theme/hamburger toggles keyboard-operable and persistent
- ✅ **Performance**: Plan targets LCP ≤ 2.5s, CLS < 0.1, 60fps motion via GPU-friendly transforms/opacity, critical CSS/JS ≤ 200KB, hero GIF ≤ 1MB, lazy-load non-critical assets
- ✅ **Modularity**: Component-based (Header, Hero, Section, ThemeToggle, Navigation), content-agnostic layouts accepting variable text, theme tokens via CSS variables, shared scroll/navigation behavior across breakpoints

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Web application structure (Next.js App Router)
app/
├── layout.tsx           # Root layout with theme provider, fonts
├── page.tsx             # Main page with all sections
├── globals.css          # Tailwind directives, theme variables
└── fonts/               # Custom pixel/retro fonts

components/
├── Header.tsx           # Fixed header with logo, nav, theme toggle
├── Navigation.tsx       # Desktop nav tabs
├── MobileMenu.tsx       # Hamburger menu for mobile
├── ThemeToggle.tsx      # Moon/sun icon with theme switch
├── Hero.tsx             # Opening section with animated background
├── Section.tsx          # Reusable section wrapper with fade animations
├── About.tsx            # About section content
├── Skills.tsx           # Skills section content
├── Projects.tsx         # Public projects section content
├── Experiences.tsx      # Work experiences section content
├── Contact.tsx          # Contact CTA section content
└── Footer.tsx           # Footer content

lib/
├── hooks/
│   ├── useScrollPosition.ts    # Detect scroll for header transition
│   ├── useTheme.ts             # Theme context and toggle logic
│   └── useReducedMotion.ts     # Detect prefers-reduced-motion
└── utils/
    ├── scrollTo.ts             # Smooth scroll to anchor utility
    └── constants.ts            # Section IDs, nav items, theme tokens

public/
├── hero-animation.gif          # Hero section background (≤ 1MB)
└── assets/                     # Icons, images

tests/
├── e2e/
│   ├── navigation.spec.ts      # Anchor links, keyboard nav
│   ├── theme.spec.ts           # Theme toggle, persistence
│   ├── accessibility.spec.ts   # WCAG checks, focus management
│   └── animations.spec.ts      # Scroll transitions, 60fps
└── components/
    ├── Header.test.tsx
    ├── ThemeToggle.test.tsx
    └── Section.test.tsx

playwright.config.ts
tailwind.config.ts
tsconfig.json
next.config.js
package.json
```

**Structure Decision**: Selected Web application structure (Next.js App Router) as this is a single-page portfolio site. The `app/` directory contains the root layout and main page, `components/` holds all reusable UI elements, `lib/` provides custom hooks and utilities, and `tests/` covers E2E and component testing. This structure supports component modularity, theme management via context, and scroll-based animations.

## Complexity Tracking

> **No violations** - Constitution Check passed without requiring justification
