import React from 'react'

const FormularioMeme = ({ datosForm, onChangeForm }) => {

  const handleInput = (event) => {
    onChangeForm({value: event.target.value, key: event.target.id})
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="textoSuperior">Texto superior</label>
          <input type="text" id="textoSuperior" value={datosForm.textoSuperior} onInput={handleInput} />
        </div>
        <div>
          <label htmlFor="textoInferior">Texto inferior</label>
          <input type="text" id="textoInferior" value={datosForm.textoInferior} onInput={handleInput} />
        </div>
        <div>
          <label htmlFor="colorLetra">Color de la letra</label>
          <input type="text" id="colorLetra" value={datosForm.colorLetra} onInput={handleInput} />
        </div>
        <div>
          <label htmlFor="urlImagen">Url</label>
          <input type="text" id="urlImagen" value={datosForm.urlImagen} onInput={handleInput} />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default FormularioMeme