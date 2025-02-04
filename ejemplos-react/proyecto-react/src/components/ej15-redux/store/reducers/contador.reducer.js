import * as ActionTypes from '../actions/action-types'

export const contadorReducer = (state = { cuenta: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENTAR:
      return { cuenta: state.cuenta + 1 }
    case ActionTypes.DECREMENTAR:
      return { cuenta: state.cuenta - 1 }
    case ActionTypes.SET_CUENTA:
      return { cuenta: action.payload.value }
    default:
      return state
  }
}