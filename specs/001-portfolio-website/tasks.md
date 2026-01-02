# Tasks: Retro Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL and not included in this implementation (no TDD requirement specified).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `public/` at repository root
- Paths reference Next.js App Router structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 14+ project with TypeScript and App Router in repository root
- [ ] T002 Install dependencies: tailwindcss, framer-motion, clsx, @types/react
- [ ] T003 [P] Configure TypeScript with strict mode in tsconfig.json
- [ ] T004 [P] Configure Tailwind CSS with dark mode class strategy in tailwind.config.ts
- [ ] T005 [P] Setup ESLint and Prettier for code quality
- [ ] T006 Create project structure: app/, components/, lib/hooks/, lib/utils/, public/, tests/
- [ ] T007 Add retro pixel font (Press Start 2P or similar) via next/font in app/layout.tsx
- [ ] T008 [P] Create globals.css with Tailwind directives and CSS variable placeholders in app/globals.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T009 Create theme context with dark/light state management in lib/hooks/useTheme.tsx
- [ ] T010 Implement theme persistence using localStorage in lib/hooks/useTheme.tsx
- [ ] T011 Define CSS variables for dark and light themes (backgrounds, text colors) in app/globals.css
- [ ] T012 [P] Create scroll position tracking hook in lib/hooks/useScrollPosition.ts
- [ ] T013 [P] Create reduced motion detection hook in lib/hooks/useReducedMotion.ts
- [ ] T014 [P] Create smooth scroll utility function in lib/utils/scrollTo.ts
- [ ] T015 Define constants: section IDs, navigation items, animation config in lib/utils/constants.ts
- [ ] T016 Create ThemeProvider wrapper and apply to root layout in app/layout.tsx
- [ ] T017 Create reusable Section wrapper component with fade animations in components/Section.tsx
- [ ] T018 [P] Configure Tailwind with retro theme colors and custom utilities in tailwind.config.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Portfolio Content (Priority: P1) 🎯 MVP

**Goal**: Visitor can view all portfolio sections with smooth scroll transitions

**Independent Test**: Open site, scroll through all sections (Hero → About → Skills → Projects → Experiences → Contact → Footer), verify smooth fade transitions work on desktop and mobile

### Implementation for User Story 1

- [ ] T019 [P] [US1] Create Hero component with animated background placeholder in components/Hero.tsx
- [ ] T020 [P] [US1] Create About component with biographical content placeholder in components/About.tsx
- [ ] T021 [P] [US1] Create Skills component with skills grid placeholder in components/Skills.tsx
- [ ] T022 [P] [US1] Create Projects component with project cards placeholder in components/Projects.tsx
- [ ] T023 [P] [US1] Create Experiences component with timeline/list placeholder in components/Experiences.tsx
- [ ] T024 [P] [US1] Create Contact component with contact info placeholder in components/Contact.tsx
- [ ] T025 [P] [US1] Create Footer component with footer content in components/Footer.tsx
- [ ] T026 [US1] Compose all sections in main page using Section wrapper in app/page.tsx
- [ ] T027 [US1] Implement scroll-based fade-out effect on previous sections using Framer Motion in components/Section.tsx
- [ ] T028 [US1] Implement fade-in and subtle movement on incoming sections in components/Section.tsx
- [ ] T029 [US1] Test and adjust Intersection Observer thresholds for smooth transitions in components/Section.tsx
- [ ] T030 [US1] Ensure animations respect prefers-reduced-motion in components/Section.tsx
- [ ] T031 [US1] Verify mobile responsiveness of all sections and animations

**Checkpoint**: At this point, User Story 1 should be fully functional - visitor can scroll through complete portfolio

---

## Phase 4: User Story 2 - Navigate via Header Menu (Priority: P2)

**Goal**: Visitor can use fixed header navigation to jump directly to sections

**Independent Test**: Click each navigation link (About, Skills, Projects, Experiences, Contact), verify smooth scroll to correct section and header transparency transition works

### Implementation for User Story 2

- [ ] T032 [US2] Create Header component with fixed positioning in components/Header.tsx
- [ ] T033 [US2] Implement transparent-to-solid background transition based on scroll position in components/Header.tsx
- [ ] T034 [US2] Add portfolio logo/title to header left side (always visible) in components/Header.tsx
- [ ] T035 [P] [US2] Create Navigation component with desktop tab layout in components/Navigation.tsx
- [ ] T036 [P] [US2] Create MobileMenu component with hamburger icon in components/MobileMenu.tsx
- [ ] T037 [US2] Wire navigation items to scroll utility with smooth scroll behavior in components/Navigation.tsx
- [ ] T038 [US2] Implement active section highlighting in navigation based on scroll position in components/Navigation.tsx
- [ ] T039 [US2] Add hamburger menu open/close animation in components/MobileMenu.tsx
- [ ] T040 [US2] Show/hide navigation tabs based on header background state (transparent vs solid) in components/Header.tsx
- [ ] T041 [US2] Implement mobile menu with full navigation items and close-on-navigate in components/MobileMenu.tsx
- [ ] T042 [US2] Add keyboard navigation support (Tab + Enter/Space) to all nav links in components/Navigation.tsx and components/MobileMenu.tsx
- [ ] T043 [US2] Add ARIA labels for hamburger button (aria-expanded, aria-controls) in components/MobileMenu.tsx
- [ ] T044 [US2] Add visible focus states for keyboard navigation in components/Navigation.tsx
- [ ] T045 [US2] Test header behavior at section boundaries (no flickering) in components/Header.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - visitor can view content and navigate efficiently

---

## Phase 5: User Story 3 - Toggle Dark/Light Mode (Priority: P3)

**Goal**: Visitor can switch between dark and light themes with smooth animation

**Independent Test**: Click theme toggle icon, verify color scheme changes smoothly, icon animates from moon to sun (or vice versa), preference persists on reload

### Implementation for User Story 3

- [ ] T046 [US3] Create ThemeToggle component with moon/sun icon in components/ThemeToggle.tsx
- [ ] T047 [US3] Implement theme toggle functionality using theme context in components/ThemeToggle.tsx
- [ ] T048 [US3] Add smooth icon rotation animation (moon ↔ sun) using Framer Motion in components/ThemeToggle.tsx
- [ ] T049 [US3] Implement smooth color transition for theme changes in app/globals.css
- [ ] T050 [US3] Add ThemeToggle to Header navigation (desktop and mobile menu) in components/Header.tsx
- [ ] T051 [US3] Verify WCAG 2.1 AA contrast ratios in dark mode (≥4.5:1 normal, ≥3:1 large) in app/globals.css
- [ ] T052 [US3] Verify WCAG 2.1 AA contrast ratios in light mode (≥4.5:1 normal, ≥3:1 large) in app/globals.css
- [ ] T053 [US3] Add keyboard accessibility to theme toggle (Tab + Enter/Space) in components/ThemeToggle.tsx
- [ ] T054 [US3] Add aria-label to theme toggle button with current state in components/ThemeToggle.tsx
- [ ] T055 [US3] Test theme persistence across page reloads via localStorage

**Checkpoint**: All user stories should now be independently functional - complete portfolio with navigation and theme switching

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality assurance

- [ ] T056 [P] Add skip-to-content link for keyboard users in app/layout.tsx
- [ ] T057 [P] Add ARIA landmarks (navigation, main, complementary) to layout in app/layout.tsx
- [ ] T058 [P] Verify logical tab order follows content flow across all sections
- [ ] T059 Optimize hero background asset (compress to ≤1MB, consider video over GIF) in public/
- [ ] T060 [P] Implement lazy loading for below-fold images using Next.js Image component
- [ ] T061 [P] Add font optimization using next/font with subsetting in app/layout.tsx
- [ ] T062 Run Lighthouse audit and verify LCP ≤ 2.5s on mobile
- [ ] T063 Run Lighthouse audit and verify CLS < 0.1
- [ ] T064 Verify 60fps animation performance using Chrome DevTools Performance profiler
- [ ] T065 Check bundle size: ensure critical CSS/JS ≤ 200KB using @next/bundle-analyzer
- [ ] T066 [P] Test keyboard navigation flow (Tab through all interactive elements)
- [ ] T067 [P] Test with screen reader (VoiceOver/NVDA) for ARIA label clarity
- [ ] T068 Test on iOS Safari for viewport height issues (dvh units)
- [ ] T069 Test on Android Chrome for scroll behavior and animations
- [ ] T070 [P] Verify site functions without JavaScript (anchor links still work)
- [ ] T071 Test with browser zoom at 150% and 200% (no horizontal scroll)
- [ ] T072 [P] Add fallback for failed hero background (solid color matching theme)
- [ ] T073 Code cleanup: remove unused imports, console logs, commented code
- [ ] T074 Run ESLint and fix any warnings
- [ ] T075 Validate against quickstart.md checklist (all items complete)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Integrates with US1 sections but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Integrates with US2 header but independently testable

### Within Each User Story

- **User Story 1**: Components can be created in parallel (T019-T025), then composed (T026), then animations added (T027-T031)
- **User Story 2**: Header and navigation components in parallel (T032-T036), then wire behavior (T037-T045)
- **User Story 3**: ThemeToggle implementation (T046-T050), then accessibility and validation (T051-T055)

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003, T004, T005, T008)
- All Foundational tasks marked [P] can run in parallel within their dependencies (T012-T015, T018)
- Once Foundational phase completes, all three user stories can start in parallel (if team capacity allows)
- Within User Story 1, all section components (T019-T025) can be built in parallel
- Within User Story 2, Navigation and MobileMenu (T035-T036) can be built in parallel
- All Polish tasks marked [P] can run in parallel (T056-T057, T060-T061, T066-T067, T070-T072)

---

## Parallel Example: User Story 1

```bash
# Launch all section components for User Story 1 together:
Task T019: "Create Hero component with animated background placeholder in components/Hero.tsx"
Task T020: "Create About component with biographical content placeholder in components/About.tsx"
Task T021: "Create Skills component with skills grid placeholder in components/Skills.tsx"
Task T022: "Create Projects component with project cards placeholder in components/Projects.tsx"
Task T023: "Create Experiences component with timeline/list placeholder in components/Experiences.tsx"
Task T024: "Create Contact component with contact info placeholder in components/Contact.tsx"
Task T025: "Create Footer component with footer content in components/Footer.tsx"

# Then compose them (depends on all above completing):
Task T026: "Compose all sections in main page using Section wrapper in app/page.tsx"

# Then add animations:
Task T027-T031: Animation and responsiveness tasks
```

---

## Parallel Example: User Story 2

```bash
# Build header and navigation components in parallel:
Task T035: "Create Navigation component with desktop tab layout in components/Navigation.tsx"
Task T036: "Create MobileMenu component with hamburger icon in components/MobileMenu.tsx"

# Then integrate into header:
Task T032-T034: Header component with scroll behavior
Task T037-T045: Wire navigation behavior and accessibility
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T008)
2. Complete Phase 2: Foundational (T009-T018) - CRITICAL - blocks all stories
3. Complete Phase 3: User Story 1 (T019-T031)
4. **STOP and VALIDATE**: Test User Story 1 independently - full portfolio viewing experience
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (T019-T031) → Test independently → Deploy/Demo (MVP! - viewable portfolio)
3. Add User Story 2 (T032-T045) → Test independently → Deploy/Demo (add navigation convenience)
4. Add User Story 3 (T046-T055) → Test independently → Deploy/Demo (add theme preference)
5. Add Polish (T056-T075) → Final validation → Production release
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together (T001-T018)
2. Once Foundational is done:
   - Developer A: User Story 1 (T019-T031)
   - Developer B: User Story 2 (T032-T045)
   - Developer C: User Story 3 (T046-T055)
3. Stories complete and integrate independently
4. Team reconvenes for Polish (T056-T075)

---

## Constitution Alignment

### Retro Space Brand Fidelity

- **T007**: Retro pixel font integration
- **T018**: Custom retro theme colors
- **T049**: Smooth theme transitions

### Responsive Anchored Navigation

- **T014**: Smooth scroll utility
- **T037**: Anchor scrolling behavior
- **T038**: Active section tracking
- **T045**: Section boundary handling

### Accessibility First-Class

- **T042, T044**: Keyboard navigation
- **T043, T054**: ARIA labels
- **T051-T052**: WCAG 2.1 AA contrast validation
- **T056**: Skip-to-content link
- **T057**: ARIA landmarks
- **T066-T067**: Keyboard and screen reader testing

### Performance & Motion Discipline

- **T030**: Reduced motion support
- **T059**: Hero asset optimization (≤1MB)
- **T060**: Lazy loading
- **T061**: Font optimization
- **T062-T065**: Performance validation (LCP, CLS, 60fps, bundle size)

### Modular Cross-Platform Code

- **T017**: Reusable Section component
- **T026**: Component composition
- **T031**: Mobile responsiveness
- **T068-T069**: Cross-device testing

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Constitution requirements embedded throughout (accessibility, performance, modularity)
- No tests required (not specified in feature requirements)
- All file paths reference Next.js App Router structure from plan.md
