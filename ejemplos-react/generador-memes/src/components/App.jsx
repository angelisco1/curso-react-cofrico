import React from 'react'
import { Provider } from "@components/ui/provider"
import ListadoMemes from '../pages/ListadoMemes'
import CrearMeme from '../pages/CrearMeme'
import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './Menu'


const App = () => {

  return (
    <BrowserRouter>
      <Provider>
        <Menu />

        <Routes>
          <Route path="/" element={<ListadoMemes />} />
          <Route path="/crear-meme" element={<CrearMeme />} />
        </Routes>

      </Provider>
    </BrowserRouter>
  )
}

export default App