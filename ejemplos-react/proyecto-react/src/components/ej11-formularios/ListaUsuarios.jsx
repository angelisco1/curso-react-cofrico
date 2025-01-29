import React from 'react'

const ListaUsuarios = ({ data, recursos }) => {

  const lista = data.map((usuario, pos) => <li key={pos}>{usuario}</li>)

  return (
    <div>
      <h3>Lista {recursos}</h3>
      <ul>
        {lista}
      </ul>
    </div>
  )
}

export default ListaUsuarios