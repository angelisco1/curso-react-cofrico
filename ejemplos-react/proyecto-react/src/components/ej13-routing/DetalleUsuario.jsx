import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DetalleUsuario = () => {
  const { usuarioId } = useParams()
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const getUsuario = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
      console.log(response)
      const usuario = await response.json()
      console.log(usuario)
      setUsuario(usuario)
    }

    getUsuario()
  }, [usuarioId])

  return (
    <div>
      {
        usuario ? (
          <>
            <h3>Usuario {usuario.id}</h3>
            {/* <pre>{usuario}</pre> */}
            <pre>{JSON.stringify(usuario, null, 2)}</pre>
          </>
        ) : (
          <p>Usuario no cargado</p>
        )
      }
    </div>
  )
}

export default DetalleUsuario