import React, { useState } from 'react'
import Meme from './Meme'
import BotonMeGusta from './BotonMeGusta'
import '../styles/ListadoMemes.css'

const ListadoMemes = () => {
  const [memes, setMemes] = useState([
    {
      "id": "abcd",
      "textoSuperior": "Texto 1",
      "textoInferior": "Texto 2",
      "urlImagen": "https://i.pinimg.com/236x/64/6d/8b/646d8bf5a4b2dc031d9e7d04124aafdd.jpg",
      "colorLetra": "#ffffff",
      "likes": 2,
    },
    {
      "id": "abce",
      "textoSuperior": "Texto 11",
      "textoInferior": "Texto 22",
      "urlImagen": "https://i.pinimg.com/236x/64/6d/8b/646d8bf5a4b2dc031d9e7d04124aafdd.jpg",
      "colorLetra": "#dddd00",
      "likes": 2,
    },
  ])

  const listaMemes = memes.map(meme => (
    <div key={meme.id} className="lista-memes">
      <Meme meme={meme} />
      <BotonMeGusta likes={meme.likes} />
    </div>
  ))

  return (
    <div>
      <h1>Listado Memes</h1>

      {listaMemes}
    </div>
  )
}

export default ListadoMemes