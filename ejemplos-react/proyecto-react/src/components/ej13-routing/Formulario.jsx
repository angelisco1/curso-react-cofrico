import React from 'react'
import { useNavigate } from 'react-router'

const Formulario = () => {
  const navigate = useNavigate()

  const save = () => {
    console.log('Guardando datos...')
    setTimeout(() => {
      console.log('Datos guardados :)')
      navigate('/inicio', { replace: true })
    }, 2000)
  }

  return (
    <div>
      <h3>Formulario</h3>

      <button type="button" onClick={save}>Guardar</button>
      <button type="button" onClick={() => navigate(-1)}>Volver</button>
    </div>
  )
}

export default Formulario