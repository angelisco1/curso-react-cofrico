import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementar, incrementar, setCuenta } from './store/actions/actions'

const Contador = () => {
  // const [_, setCuenta] = useState(0)
  const cuenta = useSelector(state => {
    return state.contadorReducer.cuenta
  })
  const dispatch = useDispatch()

  const dispatchDecrementar = () => {
    const action = decrementar()
    dispatch(action)
  }

  const dispatchIncrementar = () => {
    const action = incrementar()
    dispatch(action)
  }

  const dispatchSetCuenta = (event) => {
    const action = setCuenta(Number(event.target.value))
    // alert(JSON.stringify(action))
    dispatch(action)
  }

  return (
    <div>
      {/* <button type="button" onClick={() => setCuenta(cuenta - 1)}>-1</button> */}
      <button type="button" onClick={dispatchDecrementar}>-1</button>
      <span>Cuenta {cuenta}</span>
      {/* <button type="button" onClick={() => setCuenta(cuenta + 1)}>+1</button> */}
      <button type="button" onClick={dispatchIncrementar}>+1</button>
      <input type="text" onChange={dispatchSetCuenta} />
    </div>
  )
}

export default Contador