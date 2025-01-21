import React, { useState } from 'react'

const ContadorSinEstado = ({ cuenta, setCuenta }) => {
  const incrementar = () => {
    // cuenta = cuenta + 1
    // console.log(cuenta)
    setCuenta(cuenta + 1)
  }

  return (
    <div>
      {/* <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button> */}
      <span>Cuenta: {cuenta}</span>
      <button type="button" onClick={incrementar}>+</button>
    </div>
  )
}

export default ContadorSinEstado