import React, { useState } from 'react'
import Meme from './Meme'

const ListadoMemes = () => {
  const [memes, setMemes] = useState([
    {
      "id": "abcd",
      "textoSuperior": "Texto 1",
      "textoInferior": "Texto 2",
      "urlImagen": "https://i.pinimg.com/236x/64/6d/8b/646d8bf5a4b2dc031d9e7d04124aafdd.jpg",
      "colorLetra": "#000000",
      "likes": 2
    }
  ])

  return (
    <div>
      <h1>Listado Memes</h1>

      <Meme />
    </div>
  )
}

export default ListadoMemes