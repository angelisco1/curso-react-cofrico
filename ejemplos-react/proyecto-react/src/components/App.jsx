import React from 'react'
import Ej01Propiedades from './ej01-propiedades/Ej01Propiedades'
import Ej02Condicionales from './ej02-condicionales/Ej02Condicionales'
import Ej03Eventos from './ej03-eventos/Ej03Eventos'
import Ej04Estado from './ej04-estado/Ej04Estado'

const App = () => {
  const nombre = 'Charly'

  return (
    <div>
      <h1>Bienvenido al curso de React, { nombre }!!!</h1>

      {/* <Ej01Propiedades /> */}
      {/* <Ej02Condicionales /> */}
      {/* <Ej03Eventos /> */}
      <Ej04Estado />
    </div>
  )
}

export default App