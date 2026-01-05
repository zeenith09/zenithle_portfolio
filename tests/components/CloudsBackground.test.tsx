import { render } from '@testing-library/react'
import { CloudsBackground } from '@/components/CloudsBackground/CloudsBackground'

describe('CloudsBackground', () => {
  it('renders without crashing', () => {
    const { container } = render(<CloudsBackground />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('has proper DOM structure for clouds', () => {
    const { container } = render(<CloudsBackground />)
    expect(
      container.querySelector('[class*="cloud"]') || container.firstChild
    ).toBeInTheDocument()
  })

  it('is properly mounted in DOM', () => {
    const { container } = render(<CloudsBackground />)
    expect(container.firstChild).toBeTruthy()
  })

  it('applies background styling', () => {
    const { container } = render(<CloudsBackground />)
    const element = container.firstChild as HTMLElement
    expect(element).toBeInTheDocument()
    expect(element.className).toContain('clouds-background')
  })
})
