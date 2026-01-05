import { render } from '@testing-library/react'
import { IntroOverlayWrapper } from '@/components/IntroOverlay/IntroOverlayWrapper'

jest.mock('ogl', () => ({
  Renderer: jest.fn(),
  Program: jest.fn(),
  Mesh: jest.fn(),
  Color: jest.fn(),
  Triangle: jest.fn(),
  Geometry: jest.fn(),
}))

jest.mock('react', () => {
  const React = jest.requireActual('react')
  return {
    ...React,
    useEffect: jest.fn(),
    useRef: jest.fn(() => ({ current: null })),
  }
})

describe('IntroOverlay', () => {
  it('component is defined', () => {
    expect(IntroOverlayWrapper).toBeDefined()
  })

  it('component is a function', () => {
    expect(typeof IntroOverlayWrapper).toBe('function')
  })

  it('renders without throwing', () => {
    expect(() => render(<IntroOverlayWrapper />)).not.toThrow()
  })
})
