import React, { useState } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { actualizarMaquina, sacarProducto } from './store/actions/actions'

const PanelCodigo = () => {
  // Podríamos poner esto en el estado global de redux también
  const store = useStore()
  const [codigo, setCodigo] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    const accionSacarProducto = actualizarMaquina(codigo)
    dispatch(accionSacarProducto(store))
  }

  return (
    <div>
      <input type="text" value={codigo} onInput={event => setCodigo(event.target.value)} />
      <button type="button" onClick={handleClick}>Sacar</button>
    </div>
  )
}

export default PanelCodigo