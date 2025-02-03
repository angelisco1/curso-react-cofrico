import React from 'react'
import { Provider } from "@components/ui/provider"
import ListadoMemes from './ListadoMemes'
import CrearMeme from '../pages/CrearMeme'


const App = () => {

  return (
    <Provider>

      <CrearMeme />
      {/* <ListadoMemes /> */}
    </Provider>
  )
}

export default App