import React, { lazy, Suspense, useState } from 'react'
import Inicio from './Inicio'
import PacmanLoader from 'react-spinners/PacmanLoader'
// import Admin from './Admin'

const Admin = lazy(() => import('./Admin'))

const Ej12Suspense = () => {
  const [mostrarPanelAdmin, setMostrarPanelAdmin] = useState(false)

  return (
    <div>
      <h2>Tema 12 - Suspense (lazy loading)</h2>

      <button type="button" onClick={() => setMostrarPanelAdmin(!mostrarPanelAdmin)}>Toggle panel admin</button>

      {mostrarPanelAdmin ? (
        <Suspense fallback={<PacmanLoader color="#dddd33" />}>
          <Admin />
        </Suspense>
      ) : (<Inicio />)}
    </div>
  )
}

export default Ej12Suspense