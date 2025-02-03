import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

const Modal = ({ title, closeModal, children }) => {
  return createPortal(
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          <h3>{title}</h3>
          <button type="button" onClick={closeModal}>X</button>
        </div>
        <div className="body">
          { children }
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal