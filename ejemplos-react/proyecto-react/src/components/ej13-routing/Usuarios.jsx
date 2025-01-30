import React from 'react'
import { Link, Outlet } from 'react-router'

const Usuarios = () => {
  return (
    <div>
      <h3>Lista usuarios</h3>

      <ul>
        <li>
          <Link to="/usuarios/1">Usuario 1</Link>
        </li>
        <li>
          <Link to="/usuarios/2">Usuario 2</Link>
        </li>
        <li>
          <Link to="/usuarios/3">Usuario 3</Link>
        </li>
        <li>
          <Link to="/usuarios/4">Usuario 4</Link>
        </li>
      </ul>

      <Outlet />

    </div>
  )
}

export default Usuarios