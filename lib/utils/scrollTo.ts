/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the target section
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`)
    return
  }

  try {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Update URL hash without page reload
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${sectionId}`)
    }
  } catch (error) {
    // Fallback for browsers without smooth scroll support
    element.scrollIntoView({ block: 'start' })
    window.location.hash = sectionId
  }
}
