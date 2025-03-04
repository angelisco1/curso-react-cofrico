import React, { useState } from 'react'
import FormularioMeme from '../components/FormularioMeme'
import Meme from '../components/Meme'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import useMemeApi from '../hooks/useMemeApi'
import { useNavigate } from 'react-router'

const CrearMeme = () => {
  const { postMeme } = useMemeApi()
  const navigate = useNavigate()

  const [formMeme, setFormMeme] = useState({
    textoSuperior: 'Texto 1',
    textoInferior: 'Texto 2',
    colorLetra: '#000000',
    urlImagen: 'https://i.pinimg.com/236x/64/6d/8b/646d8bf5a4b2dc031d9e7d04124aafdd.jpg',
    likes: 0,
  })

  // const handleChangeForm = (event) => {
  //   const datosActualizados = {
  //     ...formMeme,
  //     [event.key]: event.value
  //   }
  //   setFormMeme(datosActualizados)
  // }

  const handleChangeForm = (datosActualizados) => {
    setFormMeme({...formMeme, ...datosActualizados})
  }

  const handleSubmit = async () => {
    // event.preventDefault()

    const resp = await postMeme(formMeme)
    if (!resp) {
      alert('ERROR')
    } else {
      navigate('/')
    }
  }

  return (
    <div>
      <Center>
        <Heading as="h1" size="2xl">Crea tu meme</Heading>
      </Center>

      <Flex justifyContent="space-around" alignItems="center">
        <Box width={500}>
          <FormularioMeme datosForm={formMeme} onChangeForm={handleChangeForm} onSubmitForm={handleSubmit} />
        </Box>

        <Box width={500}>
          <Meme meme={formMeme} />
        </Box>
      </Flex>

    </div>
  )
}

export default CrearMeme