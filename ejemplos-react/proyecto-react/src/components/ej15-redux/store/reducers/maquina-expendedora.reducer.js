import * as ActionTypes from '../actions/action-types'

const initialState = {
  listaProductos: [
    // {
    //   id: "abc",
    //   titulo: "Perrito piloto",
    //   stock: 10,
    //   precio: 9,
    //   codigo: 38
    // },
    // {
    //   id: "def",
    //   titulo: "Lampara de lava",
    //   stock: 5,
    //   precio: 10,
    //   codigo: 27
    // },
  ],
  estado: {
    gananciasTotales: 0,
    productosVendidos: 0,
    // gananciasTotales: 10,
    // productosVendidos: 4
  }
}

const sacarProducto = (state, codigo) => {
  // const codigo = action.payload.codigo
  let precio = 0
  const listaProductosActualizada = state.listaProductos.map((producto) => {
    if (producto.codigo === Number(codigo)) {
      precio = producto.precio
      return {
        ...producto,
        stock: producto.stock - 1
      }
    }
    return producto
  })

  const estadoActualizado = {
    gananciasTotales: state.estado.gananciasTotales + precio,
    productosVendidos: state.estado.productosVendidos + 1
  }

  return {
    estado: estadoActualizado,
    listaProductos: listaProductosActualizada
  }
}


export const maquinaExpendedoraReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LLENAR_MAQUINA:
      return {
        listaProductos: action.payload.maquina.productos,
        estado: action.payload.maquina.estado,
      }
    case ActionTypes.SACAR_PRODUCTO:
      return sacarProducto(state, action.payload.codigo)
    default:
      return state
  }
}

// SACAR_PRODUCTO