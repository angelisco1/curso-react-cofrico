import { Box, Flex, Heading, Link as ChakraLink, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'

const Menu = () => {

  const authToken = localStorage.getItem('authToken')

  const logout = () => {
    localStorage.removeItem('authToken')
  }


  return (
    <Flex justifyContent="space-between" alignItems="center" bgColor="#c3c3c3">
      <Box mx={20} my={5}>
        <Heading as="h1">Título</Heading>
      </Box>
      <Box mx={20} my={5}>
        {authToken && (
          <>
            <ChakraLink asChild mx={5}>
              <Link to="/">Memes</Link>
            </ChakraLink>
            <ChakraLink asChild mx={5}>
              <Link to="/crear-meme">Crear meme</Link>
            </ChakraLink>
            <ChakraLink asChild mx={5}>
              <Button type="button" onClick={logout}>Logout</Button>
            </ChakraLink>
          </>
        )}
        {!authToken && (
          <ChakraLink asChild mx={5}>
            <Link to="/login">Login</Link>
          </ChakraLink>
        )}

      </Box>
    </Flex>
  )
}

export default Menu