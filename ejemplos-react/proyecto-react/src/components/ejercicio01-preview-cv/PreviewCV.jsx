import React from 'react'

const PreviewCV = ({ nombre, apellido, trabajo }) => {
  return (
    <div>
      <h3>CV de {nombre} {apellido}</h3>
      <p>Trabajo actual: {trabajo}</p>
    </div>
  )
}

export default PreviewCV