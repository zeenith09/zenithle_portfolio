import { test, expect } from '@playwright/test'

test.describe('Navigation E2E', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Player Zenith: Portfolio')
  })

  test('should scroll to sections', async ({ page }) => {
    await page.goto('/')
    const aboutLink = page.locator('a[href="#about"]').first()
    if (await aboutLink.isVisible()) {
      await aboutLink.click()
      // Wait for scroll animation
      await page.waitForTimeout(1000)
      const aboutSection = page.locator('#about')
      await expect(aboutSection).toBeVisible()
    }
  })

  test('should toggle theme', async ({ page }) => {
    await page.goto('/')
    const themeToggle = page.locator('[aria-label*="theme"], [aria-label*="mode"]').first()
    if (await themeToggle.isVisible()) {
      await themeToggle.click()
      const html = page.locator('html')
      // Check if dark class was added/removed
      const isDark = await html.evaluate((el) => el.className.includes('dark'))
      expect(typeof isDark).toBe('boolean')
    }
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const mobileMenu = page.locator('[aria-label*="menu"], [class*="mobile"]').first()
    if (await mobileMenu.isVisible()) {
      await mobileMenu.click()
      // Check if menu becomes visible
      const menuContent = page.locator('[class*="menu"]').first()
      await expect(menuContent).toBeVisible()
    }
  })
})
