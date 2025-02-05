import * as ActionTypes from './action-types'

// Actions creators

export const incrementar = () => {
  return {
    type: ActionTypes.INCREMENTAR
  }
}

export const decrementar = () => {
  return {
    type: ActionTypes.DECREMENTAR
  }
}

export const setCuenta = (value) => {
  return {
    type: ActionTypes.SET_CUENTA,
    payload: {
      value
    }
  }
}

export const inicializarMaquina = (store) => {
  return (dispatch) => {
    const promesa1 = fetch('http://localhost:8081/productos')
      .then((resp) => {
        return resp.json()
      })
    const promesa2 = fetch('http://localhost:8081/estado')
      .then((resp) => {
        return resp.json()
      })

    Promise.all([promesa1, promesa2])
      .then(([productos, estado]) => {
        console.log(productos)
        dispatch(llenarMaquina({productos, estado}))
      })
  }
}

export const llenarMaquina = (maquina) => {
  return {
    type: ActionTypes.LLENAR_MAQUINA,
    payload: {
      maquina
    }
  }
}

export const actualizarMaquina = (codigo) => (store) => (dispatch) => {

  const state = store.getState()
  const meState = state.maquinaExpendedoraReducer

  const productoParaActualizar = meState.listaProductos.find((producto) => {
    return producto.codigo === Number(codigo)
  })

  const estadoActualizado = {
    gananciasTotales: meState.estado.gananciasTotales + productoParaActualizar.precio,
    productosVendidos: meState.estado.productosVendidos + 1
  }

  const productoActualizado = {
    ...productoParaActualizar,
    stock: productoParaActualizar.stock - 1
  }
  const promesa1 = fetch(`http://localhost:8081/productos/${productoParaActualizar.id}`, {
    method: 'PUT',
    body: JSON.stringify(productoActualizado)
  })
    .then((resp) => {
      return resp.json()
    })
  const promesa2 = fetch('http://localhost:8081/estado', {
    method: 'PUT',
    body: JSON.stringify(estadoActualizado)
  })
    .then((resp) => {
      return resp.json()
    })

  Promise.all([promesa1, promesa2])
    .then((responses) => {
      dispatch(sacarProducto(codigo))
    })
}

export const sacarProducto = (codigo) => {
  return {
    type: ActionTypes.SACAR_PRODUCTO,
    payload: {
      codigo
    }
  }
}