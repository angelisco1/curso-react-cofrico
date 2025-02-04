import { configureStore } from '@reduxjs/toolkit'
import { contadorReducer } from './reducers/contador.reducer'

export const store = configureStore({
  reducer: {
    contadorReducer
  }
})