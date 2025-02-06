import React from 'react'
import { Provider } from "@components/ui/provider"
import ListadoMemes from '../pages/ListadoMemes'
import CrearMeme from '../pages/CrearMeme'
import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './Menu'
import { Box } from '@chakra-ui/react'
import Login from '../pages/Login'


const App = () => {

  return (
    <BrowserRouter>
      <Provider>
        <Menu />

        <Box my={5}>

          <Routes>
            <Route path="/" element={<ListadoMemes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crear-meme" element={<CrearMeme />} />
          </Routes>

        </Box>
      </Provider>
    </BrowserRouter>
  )
}

export default App