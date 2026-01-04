'use client'

import { useTheme } from '@/lib/hooks/useTheme'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './settings.css'

export function Settings() {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setMounted(true)
    // Load current theme preference
    const saved = localStorage.getItem('theme') as 'dark' | 'light'
    setSelectedTheme(saved || 'dark')
  }, [])

  const handleSaveSettings = () => {
    localStorage.setItem('theme', selectedTheme)
    document.documentElement.className = selectedTheme
    setShowModal(false)
  }

  const handleCancel = () => {
    // Reset to saved preference
    const saved = localStorage.getItem('theme') as 'dark' | 'light'
    setSelectedTheme(saved || 'dark')
    setShowModal(false)
  }

  if (!mounted) return null

  const modalContent = showModal ? (
    <div className="settings-modal-backdrop" onClick={handleCancel}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <button className="settings-modal-close" onClick={handleCancel}>
          ✕
        </button>

        <h2 className="settings-modal-title">Site Settings</h2>

        <div className="settings-section">
          <label className="settings-label">Default Theme</label>
          <div className="settings-options">
            <button
              className={`settings-option ${selectedTheme === 'dark' ? 'active' : ''}`}
              onClick={() => setSelectedTheme('dark')}
            >
              🌙 Dark
            </button>
            <button
              className={`settings-option ${selectedTheme === 'light' ? 'active' : ''}`}
              onClick={() => setSelectedTheme('light')}
            >
              ☀️ Light
            </button>
          </div>
        </div>

        <div className="settings-buttons">
          <button
            className="settings-btn settings-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="settings-btn settings-save"
            onClick={handleSaveSettings}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="settings-button"
        aria-label="Open site settings"
        title="Site Settings"
      >
        ⚙️
      </button>

      {modalContent && createPortal(modalContent, document.body)}
    </>
  )
}
