import { useState, useEffect } from 'react'

export function useThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    console.log('Tema atual:', theme)
  }, [theme])

  return { theme, toggleTheme }
}
