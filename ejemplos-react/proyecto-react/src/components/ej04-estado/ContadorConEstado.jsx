import React, { useState } from 'react'

const ContadorConEstado = () => {
  // const estadoCuenta = useState(0)
  // estadoCuenta[1](9)
  const [cuenta, setCuenta] = useState(0)

  const incrementar = () => {
    setCuenta(cuenta + 1)
  }

  return (
    <div>
      <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button type="button" onClick={incrementar}>+</button>
    </div>
  )
}

export default ContadorConEstado