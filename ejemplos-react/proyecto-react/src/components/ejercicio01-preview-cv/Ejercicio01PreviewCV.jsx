import React, { useState } from 'react'
import FormularioCV from './FormularioCV'
import PreviewCV from './PreviewCV'

const Ejercicio01PreviewCV = () => {
  const [nombre, setNombre] = useState('angel')
  const [apellido, setApellido] = useState('villalba')
  const [trabajo, setTrabajo] = useState('desarrollador')

  // const [datosCv, setDatosCv] = useState({
  //   nombre: '',
  //   apellido: '',
  //   trabajo: '',
  // })

  return (
    <div>
      <h2>Ejercicio 1</h2>

      <FormularioCV
        nombre={nombre}
        apellido={apellido}
        trabajo={trabajo}
        onSetNombre={setNombre}
        onSetApellido={setApellido}
        onSetTrabajo={setTrabajo} />

      <PreviewCV
        nombre={nombre}
        apellido={apellido}
        trabajo={trabajo} />

    </div>
  )
}

export default Ejercicio01PreviewCV