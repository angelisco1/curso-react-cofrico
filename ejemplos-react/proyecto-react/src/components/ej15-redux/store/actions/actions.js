import * as ActionTypes from './action-types'

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