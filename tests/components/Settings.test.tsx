import { render, screen, fireEvent } from '@testing-library/react'
import { Settings } from '@/components/Settings/Settings'

jest.mock('@/lib/hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
  }),
}))

describe('Settings', () => {
  it('renders settings component', () => {
    render(<Settings />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders without crashing', () => {
    const { container } = render(<Settings />)
    expect(container).toBeTruthy()
  })

  it('settings button is clickable', () => {
    render(<Settings />)
    const buttons = screen.queryAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
    if (buttons.length > 0) {
      fireEvent.click(buttons[0])
      expect(buttons[0]).toBeInTheDocument()
    }
  })
})
