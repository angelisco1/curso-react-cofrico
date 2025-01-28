import React from 'react'
import '../styles/Meme.css'

const Meme = ({ meme }) => {
  return (
    <div className="meme">
      <p className="texto-superior" style={{ color: meme.colorLetra }}>{meme.textoSuperior}</p>
      <img src={meme.urlImagen} alt="Imagen del meme" />
      <p className="texto-inferior" style={{ color: meme.colorLetra }}>{meme.textoInferior}</p>
    </div>
  )
}

export default Meme