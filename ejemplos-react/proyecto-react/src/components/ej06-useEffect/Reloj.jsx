import React, { useEffect, useState } from 'react'

const getFecha = () => {
  const date = new Date()
  return date.toLocaleString()
}

const Reloj = () => {
  const [fechaActual, setFechaActual] = useState(getFecha())

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Se ha ejecutado')
      setFechaActual(getFecha())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  })


  return (
    <div>
      <p>Fecha actual: {fechaActual}</p>
    </div>
  )
}

export default Reloj