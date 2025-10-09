import { useState, useEffect } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState('medical')

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'medical'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const themes = [
    { id: 'medical', name: 'Medical Clean' },
    { id: 'nordic', name: 'Nordic Minimal' },
    { id: 'dark', name: 'Dark Professional' },
    { id: 'warm', name: 'Warm Paper' },
    { id: 'clinical', name: 'Clinical' }
  ]

  return (
    <div className="theme-switcher">
      <h4>Design</h4>
      <div className="theme-buttons">
        {themes.map(t => (
          <button
            key={t.id}
            className={`theme-button ${theme === t.id ? 'active' : ''}`}
            data-theme={t.id}
            onClick={() => handleThemeChange(t.id)}
            title={t.name}
            aria-label={`Wechsle zu ${t.name} Theme`}
          />
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher
