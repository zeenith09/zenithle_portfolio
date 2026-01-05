import { render } from '@testing-library/react'
import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground'

jest.mock('ogl', () => ({
  Renderer: jest.fn(),
  Program: jest.fn(),
  Mesh: jest.fn(),
  Color: jest.fn(),
  Triangle: jest.fn(),
  Camera: jest.fn(),
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

describe('ParticlesBackground', () => {
  it('component is defined', () => {
    expect(ParticlesBackground).toBeDefined()
  })

  it('component is a function', () => {
    expect(typeof ParticlesBackground).toBe('function')
  })

  it('renders without throwing', () => {
    expect(() => render(<ParticlesBackground />)).not.toThrow()
  })

  it('renders to container', () => {
    const { container } = render(<ParticlesBackground />)
    expect(container).toBeTruthy()
  })
})
