'use client'

import { useEffect } from 'react'
import './modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message?: string
  children?: React.ReactNode
  confirmText?: string
  cancelText?: string
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  children,
  confirmText = 'Yes',
  cancelText = 'No',
}: ModalProps) {
  useEffect(() => {
    // Close modal on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{title}</h2>
        {message && <p className="modal-message">{message}</p>}
        {children && <div className="modal-content">{children}</div>}

        <div className="modal-buttons">
          <button className="modal-btn modal-cancel" onClick={onClose}>
            {cancelText}
          </button>
          <button className="modal-btn modal-confirm" onClick={handleConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
