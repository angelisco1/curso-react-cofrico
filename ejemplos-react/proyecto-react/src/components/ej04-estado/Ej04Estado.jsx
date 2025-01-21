import React, { useState } from 'react'
import ContadorConEstado from './ContadorConEstado'
import ContadorSinEstado from './ContadorSinEstado'

const Ej04Estado = () => {
  const [cuenta, setCuenta] = useState(10)

  return (
    <div>
      <h2>Tema 4 - Estado</h2>
      <ContadorConEstado />

      <ContadorSinEstado
        cuenta={cuenta}
        setCuenta={setCuenta}
      />
    </div>
  )
}

export default Ej04Estado