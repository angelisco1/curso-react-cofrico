import React, { useState } from 'react'
import ListaCocktailsConFiltro from './ListaCocktailsConFiltro'
import Reloj from './Reloj'

const Ej06UseEffect = () => {
  const [showingClock, toggle] = useState(false)

  return (
    <div>
      <h2>Tema 6 - useEffect</h2>

      <button type="button" onClick={() => toggle(!showingClock)}>Toggle reloj</button>

      {showingClock && <Reloj />}
      {/* {showingClock ? <Reloj /> : null} */}

      <ListaCocktailsConFiltro />

    </div>
  )
}

export default Ej06UseEffect