import React from 'react'
import Sugus from './Sugus'

const App = () => {
  const nombre = 'Charly'

  return (
    <div>
      <h1>Hola { nombre }!!!</h1>

      <Sugus color="yellow" sabor="limón" />
      <Sugus color="red" sabor="fresa" />
      <Sugus color="orange" sabor="naranja" />

      <Sugus />
    </div>
  )
}

export default App