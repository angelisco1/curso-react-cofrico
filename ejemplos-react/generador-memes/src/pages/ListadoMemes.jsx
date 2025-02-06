import React, { useEffect, useState } from 'react'
import Meme from '../components/Meme'
import BotonMeGusta from '../components/BotonMeGusta'
import DotLoader from 'react-spinners/DotLoader'
import MemeService from '../services/meme.service'
import useMemeApi from '../hooks/useMemeApi'
import '../styles/ListadoMemes.css'
import { Center, Heading } from '@chakra-ui/react'

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
  const { loading, error, getAllMemes, patchMeme } = useMemeApi()

  useEffect(() => {
    const getMemes = async () => {
      // const memes = await MemeService.findAll()
      const memes = await getAllMemes()
      if (error) {
        alert('ERROR')
      } else {
        console.log({memes})
        setMemes(memes)
      }
    }

    getMemes()
  }, [])

  const handleLike = async (memeId, likes) => {
    const memeActualizado = await patchMeme(memeId, likes)
    const listaMemesActualizada = memes.map(meme => {
      if (meme.id === memeId) {
        return memeActualizado
      }
      return meme
    })
    setMemes(listaMemesActualizada)
  }

  const listaMemes = memes.map(meme => (
    <div key={meme.id} className="lista-memes">
      <Meme meme={meme} />
      <BotonMeGusta likes={meme.likes} memeId={meme.id} onHandleClick={handleLike} />
    </div>
  ))

  return (
    <div>
      {/* <h1>Listado Memes</h1> */}
      <Center>
        <Heading as="h1" size="2xl">Listado Memes</Heading>
      </Center>

      {loading ? (
          <DotLoader />
        ) : listaMemes}
    </div>
  )
}

export default ListadoMemes