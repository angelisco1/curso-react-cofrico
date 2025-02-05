import React from 'react'
import { useSelector } from 'react-redux'

const EstadoMaquina = () => {
  const estadoMaquina = useSelector(state => state.maquinaExpendedoraReducer.estado)

  return (
    <div>
      <pre>{JSON.stringify(estadoMaquina, null, 2)}</pre>
    </div>
  )
}

export default EstadoMaquina