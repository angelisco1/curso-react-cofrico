import React from 'react'

const FormularioCV = ({ nombre, apellido, trabajo, onSetNombre, onSetApellido, onSetTrabajo }) => {
  return (
    <div>
      <h3>Rellena los datos</h3>

      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onInput={(event) => onSetNombre(event.target.value)} />
      </div>

      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" value={apellido} onInput={(event) => onSetApellido(event.target.value)} />
      </div>

      <div>
        <label htmlFor="trabajo">Trabajo:</label>
        <input type="text" id="trabajo" value={trabajo} onInput={(event) => onSetTrabajo(event.target.value)} />
      </div>

    </div>
  )
}

export default FormularioCV