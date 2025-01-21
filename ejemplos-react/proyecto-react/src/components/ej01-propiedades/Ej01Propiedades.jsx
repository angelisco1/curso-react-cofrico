import React from 'react'
import Sugus from './Sugus'

const Ej01Propiedades = () => {
  return (
    <div>
      <h2>Tema 1 - Propiedades</h2>

      <Sugus color="yellow" sabor="limón" />
      <Sugus color="red" sabor="fresa" />
      <Sugus color="orange" sabor="naranja" />

      <Sugus />
    </div>
  )
}

export default Ej01Propiedades