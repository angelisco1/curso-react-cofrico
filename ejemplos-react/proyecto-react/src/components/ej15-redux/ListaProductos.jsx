import React from 'react'
import { useSelector } from 'react-redux'

const ListaProductos = () => {
  const productos = useSelector(state => state.maquinaExpendedoraReducer.listaProductos)

  const listaProductos = productos.map(producto => (
    <li key={producto.id}>{producto.titulo} (stock: {producto.stock}) - {producto.precio}€ - Código: {producto.codigo}</li>
  ))

  return (
    <div>
      <ul>
        {listaProductos}
      </ul>
    </div>
  )
}

export default ListaProductos