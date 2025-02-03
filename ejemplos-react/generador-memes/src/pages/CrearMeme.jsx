import React, { useState } from 'react'
import FormularioMeme from '../components/FormularioMeme'
import Meme from '../components/Meme'

const CrearMeme = () => {
  const [formMeme, setFormMeme] = useState({
    textoSuperior: 'Texto 1',
    textoInferior: 'Texto 2',
    colorLetra: '#000000',
    urlImagen: 'https://i.pinimg.com/236x/64/6d/8b/646d8bf5a4b2dc031d9e7d04124aafdd.jpg',
    likes: 0,
  })

  const handleChangeForm = (event) => {
    console.log(event)
  }

  return (
    <div>

      <FormularioMeme datosForm={formMeme} onChangeForm={handleChangeForm} />

      <Meme meme={formMeme} />

    </div>
  )
}

export default CrearMeme