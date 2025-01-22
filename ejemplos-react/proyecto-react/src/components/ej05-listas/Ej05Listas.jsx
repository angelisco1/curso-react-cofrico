import React from 'react'
import Sugus from '../ej01-propiedades/Sugus'

const Ej05Listas = () => {
  const usuarios = [
    { id: 1, nombre: 'Charly', apellidos: 'Falco', email: 'cfalco@gmail.com' },
    { id: 2, nombre: 'Mike', apellidos: 'Kozinski', email: 'mike.koz@gmail.com' },
    { id: 3, nombre: 'Octavia', apellidos: 'Blake', email: 'oblake@gmail.com' },
  ]

  const sugus = [
    {color: 'yellow', sabor: 'limón'},
    {color: 'orange', sabor: 'naranja'},
  ]

  const listaUsuarios = usuarios.map((usuario) => <li key={usuario.id}>{usuario.nombre} {usuario.apellidos}</li>)
  console.log(listaUsuarios)

  const filasTablaUsuarios = usuarios.map((usuario) => (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombre} {usuario.apellidos}</td>
      <td>{usuario.email}</td>
    </tr>
  ))

  const listaSugus = sugus.map((sugus, pos) => <Sugus key={pos} color={sugus.color} sabor={sugus.sabor} />)

  return (
    <div>
      <h2>Tema 5 - Listas</h2>

      <ul>
        {listaUsuarios}
      </ul>

      {/* <ul>
        {usuarios.map((usuario) => <li>{usuario.nombre} {usuario.apellidos}</li>)}
      </ul> */}

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre completo</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filasTablaUsuarios}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{usuarios.length}</td>
          </tr>
        </tfoot>
      </table>

      <div>
        {listaSugus}
      </div>

    </div>
  )
}

export default Ej05Listas