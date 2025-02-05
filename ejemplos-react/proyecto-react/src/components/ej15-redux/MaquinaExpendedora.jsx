import React, { useEffect } from 'react'
import ListaProductos from './ListaProductos'
import PanelCodigo from './PanelCodigo'
import EstadoMaquina from './EstadoMaquina'
import { useDispatch } from 'react-redux'
import { inicializarMaquina, llenarMaquina } from './store/actions/actions'

const MaquinaExpendedora = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(inicializarMaquina())
  }, [])

  return (
    <div>
      <ListaProductos />
      <PanelCodigo />
      <EstadoMaquina />
    </div>
  )
}

export default MaquinaExpendedora