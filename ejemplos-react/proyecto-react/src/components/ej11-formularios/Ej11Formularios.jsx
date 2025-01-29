import React, { useEffect, useState } from 'react'
import Validators from './validators'
import useInputField from './useInputField'
import useUserApi from './useUserApi'
import withLoading from './withLoading'
import ListaUsuarios from './ListaUsuarios'

const Ej11Formularios = () => {
  // const [nombre, setNombre] = useState('a')
  // const [email, setEmail] = useState('b')
  // const [password, setPassword] = useState('')
  // const [erroresPw, setErroresPw] = useState([])

  const [nombre, setNombre, erroresNombre] = useInputField('Ángel Villalba')

  const [email, setEmail, erroresEmail] = useInputField('', { hasAt: true })

  const [password, setPassword, erroresPw] = useInputField('', { minLength: 10, hasNums: true })

  const { loading, users, postUser } = useUserApi()

  // useEffect(() => {
  //   const errores = []

  //   const error1 = Validators.hasNums(password)
  //   if (error1) {
  //     errores.push(error1)
  //   }

  //   const error2 = Validators.minLength(password)
  //   if (error2) {
  //     errores.push(error2)
  //   }

  //   setErroresPw(errores)
  // }, [password])

  const handleSubmit = (event) => {
    event.preventDefault()

    const registro = {
      nombre,
      email,
      password,
    }

    console.log(registro)
    postUser(registro)
  }

  const handleInputPassword = (event) => {
    const currentPw = event.target.value

    setPassword(currentPw)
    // Lo de abajo está mejor en el useEffect, porque es un efecto de cambiar el valor del input
    // const error1 = Validators.hasNums(currentPw)
    // const error2 = Validators.minLength(currentPw)
    // if (error1) {
    //   setErroresPw([...erroresPw, error1])
    // }
    // if (error2) {
    //   setErroresPw([...erroresPw, error2])
    // }
  }

  const mensajesErrorNombre = erroresNombre.map((error, pos) => <li key={pos}>{error}</li>)
  const mensajesErrorEmail = erroresEmail.map((error, pos) => <li key={pos}>{error}</li>)
  const mensajesErrorPw = erroresPw.map((error, pos) => <li key={pos}>{error}</li>)

  const ListaUsuariosWithLoading = withLoading(ListaUsuarios, 'USUARIOS')

  const ListaPostsWithLoading = withLoading(ListaUsuarios)

  const OtroCmpWithLoading = withLoading(({nombre}) => <p>Hola {nombre}!</p>, null, 'Mundo')

  return (
    <div>
      <h2>Tema 11 - Formularios</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onInput={(event) => setNombre(event.target.value)} />
          {mensajesErrorNombre.length > 0 && <ul>
            {mensajesErrorNombre}
          </ul>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onInput={(event) => setEmail(event.target.value)} />
          {mensajesErrorEmail.length > 0 && <ul>
            {mensajesErrorEmail}
          </ul>}
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" value={password} onInput={handleInputPassword} />
          {mensajesErrorPw.length > 0 && <ul>
            {mensajesErrorPw}
          </ul>}
        </div>

        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>

      <p>Loading: {loading ? 'LOADING' : 'NO LOADING'}</p>
      <p>Users: {JSON.stringify(users)}</p>

      {
        loading ? <p>LOADING</p> : <p>Users: {JSON.stringify(users)}</p>
      }

      <hr />

      <ListaUsuariosWithLoading recursos="usuarios" otraProp={true} />
      <ListaPostsWithLoading recursos="posts" />
      <OtroCmpWithLoading nombre="Mundo" />

    </div>
  )
}

export default Ej11Formularios