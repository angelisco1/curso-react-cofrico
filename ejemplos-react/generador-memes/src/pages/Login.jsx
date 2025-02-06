import { Center, Field, Heading, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RiSave3Fill } from 'react-icons/ri'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const login = async (event) => {
    const response = await fetch(`http://localhost:8081/login`, {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      alert('ERROR')
      return
    }

    const data = await response.json()
    console.log(data)
    localStorage.setItem('authToken', data.token)
  }

  return (
    <div>
      <Center>
        <Heading as="h1" size="2xl">Login</Heading>
      </Center>

      <form onSubmit={handleSubmit(login)}>
        <Field.Root my={4}>
          <Field.Label>Username</Field.Label>
          {/* <Input id="textoSuperior" placeholder="Texto 1" value={datosForm.textoSuperior} onInput={handleInput} /> */}
          <Input id="username" {...register('username')} />
          {/* {errors.textoSuperior && <Field.ErrorText>{errors.textoSuperior.message}</Field.ErrorText>} */}
        </Field.Root>

        <Field.Root my={4}>
          <Field.Label>Password</Field.Label>
          {/* <Input id="textoInferior" placeholder="Texto 1" value={datosForm.textoInferior} onInput={handleInput} /> */}
          <Input id="password"  {...register('password')} />
          {/* {errors.textoInferior && <Field.ErrorText>{errors.textoInferior.message}</Field.ErrorText>} */}
        </Field.Root>

        <Button type="submit">
          <RiSave3Fill /> Login
        </Button>
      </form>
    </div>
  )
}

export default Login