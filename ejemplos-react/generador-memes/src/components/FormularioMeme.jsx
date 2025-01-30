import React from 'react'

const FormularioMeme = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="textoSuperior">Texto superior</label>
          <input type="text" id="textoSuperior" />
        </div>
        <div>
          <label htmlFor="textoInferior">Texto inferior</label>
          <input type="text" id="textoInferior" />
        </div>
        <div>
          <label htmlFor="colorLetra">Color de la letra</label>
          <input type="text" id="colorLetra" />
        </div>
        <div>
          <label htmlFor="imagenUrl">Url</label>
          <input type="text" id="imagenUrl" />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default FormularioMeme