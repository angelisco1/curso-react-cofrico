import React, { useEffect, useState } from 'react'
import Meme from './Meme'
import BotonMeGusta from './BotonMeGusta'
import DotLoader from 'react-spinners/DotLoader'
import MemeService from '../services/meme.service'
import useMemeApi from '../hooks/useMemeApi'
import '../styles/ListadoMemes.css'
import { Heading } from '@chakra-ui/react'

const listaMemes = [
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
  }
]

const ListadoMemes = () => {
  // const [memes, setMemes] = useState(listaMemes)
  const [memes, setMemes] = useState([])
  const { loading, error, getAllMemes } = useMemeApi()

  useEffect(() => {
    const getMemes = async () => {
      // const memes = await MemeService.findAll()
      const memes = await getAllMemes()
      console.log({memes})
      setMemes(memes)
    }

    getMemes()
  }, [])

  const listaMemes = memes.map(meme => (
    <div key={meme.id} className="lista-memes">
      <Meme meme={meme} />
      <BotonMeGusta likes={meme.likes} />
    </div>
  ))

  return (
    <div>
      {/* <h1>Listado Memes</h1> */}
      <Heading as="h1" size="2xl">Listado Memes</Heading>

      {loading ? (
          <DotLoader />
        ) : listaMemes}
    </div>
  )
}

export default ListadoMemes