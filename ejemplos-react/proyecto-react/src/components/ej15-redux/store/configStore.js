import { configureStore } from '@reduxjs/toolkit'
import { contadorReducer } from './reducers/contador.reducer'
import { maquinaExpendedoraReducer } from './reducers/maquina-expendedora.reducer'

const loggerMiddleware = (store) => {
  return (dispatch) => {
    return (action) => {
      console.log('Action: ', action)
      console.log('Estado antes: ', store.getState())
      dispatch(action)
      console.log('Estado despues: ', store.getState())
    }
  }
}


export const store = configureStore({
  reducer: {
    contadorReducer,
    maquinaExpendedoraReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})