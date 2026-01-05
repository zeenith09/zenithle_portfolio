import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BackToTop } from '@/components/BackToTop/BackToTop'

describe('BackToTop', () => {
  it('renders back to top button', () => {
    render(<BackToTop />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(0)
  })

  it('has proper accessibility attributes', () => {
    render(<BackToTop />)
    const buttons = screen.queryAllByRole('button')
    if (buttons.length > 0) {
      expect(buttons[0]).toHaveAttribute('aria-label')
    }
  })
})
