/**
 * Navigation items configuration
 */
export interface NavItem {
  id: string
  label: string
  href: string
  isCallToAction?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Public Projects', href: '#projects' },
  { id: 'experiences', label: 'Experiences', href: '#experiences' },
  { id: 'contact', label: 'Contact', href: '#contact', isCallToAction: true },
]

/**
 * Section configuration
 */
export interface SectionConfig {
  id: string
  title: string
  order: number
}

export const SECTIONS: SectionConfig[] = [
  { id: 'hero', title: 'Welcome', order: 1 },
  { id: 'about', title: 'About', order: 2 },
  { id: 'skills', title: 'Skills', order: 3 },
  { id: 'projects', title: 'Public Projects', order: 4 },
  { id: 'experiences', title: 'Experiences', order: 5 },
  { id: 'contact', title: 'Contact', order: 6 },
]

/**
 * Animation configuration
 */
export const ANIMATION_CONFIG = {
  transitionDuration: 0.6,
  easing: 'easeOut' as const,
  fadeThreshold: 0.3,
}

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}
