import React from 'react'
import Ej01Propiedades from './ej01-propiedades/Ej01Propiedades'
import Ej02Condicionales from './ej02-condicionales/Ej02Condicionales'
import Ej03Eventos from './ej03-eventos/Ej03Eventos'
import Ej04Estado from './ej04-estado/Ej04Estado'
import Ejercicio01PreviewCV from './ejercicio01-preview-cv/Ejercicio01PreviewCV'
import Ej05Listas from './ej05-listas/Ej05Listas'
import Ej06UseEffect from './ej06-useEffect/Ej06UseEffect'

const App = () => {
  const nombre = 'Charly'

  return (
    <div>
      <h1>Bienvenido al curso de React, { nombre }!!!</h1>

      {/* <Ej01Propiedades /> */}
      {/* <Ej02Condicionales /> */}
      {/* <Ej03Eventos /> */}
      {/* <Ej04Estado /> */}
      {/* <Ejercicio01PreviewCV /> */}
      {/* <Ej05Listas /> */}
      <Ej06UseEffect />

    </div>
  )
}

export default App