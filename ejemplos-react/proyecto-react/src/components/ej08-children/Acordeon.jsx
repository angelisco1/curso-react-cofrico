import React, { useState } from 'react'
import './Acordeon.css'

const Acordeon = ({ titulo, texto, children }) => {
  console.log(children)
  const [estaColapsado, setEstaColapsado] = useState(false)

  return (
    <div className="acordeon">
      <div className="header" onClick={() => setEstaColapsado(!estaColapsado)}>
        {/* <h3>Título</h3> */}
        <h3>{titulo}</h3>
      </div>

      <div className={estaColapsado ? 'body colapsado' : 'body'}>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore in expedita nihil numquam exercitationem explicabo id placeat harum quos voluptatibus porro repellat a, eos dolor rem? Rem, natus assumenda.</p> */}
        {/* <p>{texto}</p> */}
        {children}
      </div>
    </div>
  )
}

export default Acordeon