import React from 'react'
import Contador from './Contador'
import { Provider } from 'react-redux'
import { store } from './store/configStore'
import MaquinaExpendedora from './MaquinaExpendedora'

const Ej15Redux = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Tema 15 - Redux</h2>
        <Contador />

        <MaquinaExpendedora />
      </div>
    </Provider>
  )
}

export default Ej15Redux