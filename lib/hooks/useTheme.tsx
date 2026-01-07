'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (newTheme: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load the default theme (set by Settings)
    const defaultTheme = (localStorage.getItem('defaultTheme') ||
      'dark') as Theme
    setTheme(defaultTheme)

    // Only update DOM if it's different from what's already applied
    if (document.documentElement.className !== defaultTheme) {
      document.documentElement.className = defaultTheme
    }
  }, [])

  const toggleTheme = () => {
    // Toggle only changes display, doesn't change the default
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.className = newTheme
  }

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.className = newTheme
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme: updateTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
