'use client'

import { useTheme } from '@/lib/hooks/useTheme'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './settings.css'

export function Settings() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('dark')
  const [savedTheme, setSavedTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setMounted(true)
    // Load default theme preference
    const saved = (localStorage.getItem('defaultTheme') || 'dark') as
      | 'dark'
      | 'light'
    setSelectedTheme(saved)
    setSavedTheme(saved)
  }, [])

  const handleSaveSettings = () => {
    localStorage.setItem('defaultTheme', selectedTheme)
    document.documentElement.className = selectedTheme
    setTheme(selectedTheme)
    setSavedTheme(selectedTheme)
    setShowModal(false)
  }

  const handleCancel = () => {
    setSelectedTheme(savedTheme)
    setShowModal(false)
  }

  const handleOpenModal = () => {
    setSelectedTheme(savedTheme)
    setShowModal(true)
  }

  if (!mounted) return null

  const modalContent = showModal ? (
    <div className="settings-modal-backdrop" onClick={handleCancel}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <button className="settings-modal-close" onClick={handleCancel}>
          ✕
        </button>

        <h2 className="settings-modal-title">Settings</h2>

        <div className="settings-section">
          <label className="settings-label">Default Theme</label>
          <div className="settings-options">
            <button
              className={`settings-option ${selectedTheme === 'dark' ? 'active' : ''}`}
              onClick={() => setSelectedTheme('dark')}
            >
              {/* Don't mind me nitpicking why they aren't horizontally aligned center */}
              <span style={{ paddingBottom: '2px' }}>🌙</span>
              <span style={{ paddingTop: '2px' }}>Dark</span>
            </button>
            <button
              className={`settings-option ${selectedTheme === 'light' ? 'active' : ''}`}
              onClick={() => setSelectedTheme('light')}
            >
              <span>☀️</span>
              <span style={{ paddingTop: '2px' }}>Light</span>
            </button>
          </div>
        </div>

        <div className="settings-buttons">
          <button
            className="settings-btn settings-cancel"
            onClick={handleCancel}
          >
            Back
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
        onClick={handleOpenModal}
        className="settings-button"
        aria-label="Open site settings"
        title="site settings"
      >
        ⚙️
      </button>

      {modalContent && createPortal(modalContent, document.body)}
    </>
  )
}
