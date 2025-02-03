import React, { useState } from 'react'
import Modal from './Modal'

const Ej14Portals = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div>
      <h2>Tema 14 - Portals</h2>
      <button type="button" onClick={() => setIsOpened(true)}>Open modal</button>

      {isOpened && <Modal title="Título" closeModal={() => setIsOpened(false)}>
          <p>Hola mundo!</p>
        </Modal>}
    </div>
  )
}

export default Ej14Portals