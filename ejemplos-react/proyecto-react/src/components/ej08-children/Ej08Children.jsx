import React from 'react'
import Acordeon from './Acordeon'

const Ej08Children = () => {
  return (
    <div>
      <h2>Tema 8 - Propiedad children</h2>

      <Acordeon titulo="Frase motivadora" texto="...">
        <p>Bla bla bla</p>
      </Acordeon>

      <Acordeon titulo="Receta" texto="aaaaa">
        <div>
          <p>Tortilla de patatas</p>
          <ul>
            <li>Patatas</li>
            <li>Huevos</li>
            <li>Aceite</li>
            <li>...</li>
          </ul>
          <ol>
            <li>Paso 1</li>
            <li>Paso 2</li>
          </ol>
        </div>
      </Acordeon>

      <Acordeon titulo="Logo de React">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
      </Acordeon>
    </div>
  )
}

export default Ej08Children