import React from 'react'

const Ej02Condicionales = () => {
  const modoOscuroActivado = true

  let boton = <button type="button">Activar modo oscuro</button>
  if (modoOscuroActivado) {
    boton = <button type="button">Activar modo claro</button>
  }

  return (
    <div>
      <h2>Tema 2 - Condicionales</h2>

      {boton}

      {
        modoOscuroActivado ?
        <button type="button">Activar modo claro</button>
        :
        <button type="button">Activar modo oscuro</button>
      }

    </div>
  )
}

export default Ej02Condicionales