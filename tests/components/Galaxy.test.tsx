import { render } from '@testing-library/react'
import Galaxy from '@/components/Galaxy/Galaxy'

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

describe('Galaxy', () => {
  it('component is defined', () => {
    expect(Galaxy).toBeDefined()
  })

  it('component is a function', () => {
    expect(typeof Galaxy).toBe('function')
  })

  it('renders without throwing', () => {
    expect(() => render(<Galaxy />)).not.toThrow()
  })

  it('renders to container', () => {
    const { container } = render(<Galaxy />)
    expect(container).toBeTruthy()
  })
})
