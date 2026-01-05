import { render, screen } from '@testing-library/react'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'

jest.mock('@/lib/hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
  }),
}))

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(<ThemeToggle />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('button is accessible', () => {
    render(<ThemeToggle />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
