import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router'
import Inicio from './Inicio'
import Formulario from './Formulario'
import DetalleUsuario from './DetalleUsuario'
import Usuarios from './Usuarios'
import Error404 from './Error404'

const Ej13Routing = () => {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div>
      <h2>Tema 13 - React Router</h2>
      <BrowserRouter>

        <div>
          <ul>
            <li>
              {/* <a href="/inicio">Inicio</a> */}
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              {/* <a href="/formulario">Formulario</a> */}
              <Link to="/formulario">Formulario</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
          </ul>
        </div>

        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          {loggedIn && <Route path="/formulario" element={<Formulario />} />}
          {/* <Route path="/usuarios/:usuarioId" element={<DetalleUsuario />} /> */}
          {loggedIn &&
          <Route path="/usuarios" element={<Usuarios />}>
            <Route path=":usuarioId" element={<DetalleUsuario />} />
          </Route>}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      <hr />

      <div>Footer</div>
    </div>
  )
}

export default Ej13Routing