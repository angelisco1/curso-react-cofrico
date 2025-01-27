import React, { useEffect, useReducer } from 'react'
import './caja.css'

const reducer = (currentState, action) => {
  console.log({currentState, action})
  switch (action) {
    case 'ArrowRight':
      return {
        ...currentState,
        posX: currentState.posX + 5
      }
    case 'ArrowLeft':
      return {
        ...currentState,
        posX: currentState.posX - 5
      }
    case 'ArrowDown':
      return {
        ...currentState,
        posY: currentState.posY + 5
      }
    case 'ArrowUp':
      return {
        ...currentState,
        posY: currentState.posY - 5
      }
    case 'KeyR':
      return {
        posX: 0,
        posY: 0
      }
    default:
      return currentState
  }
}


const Ej10UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {posX: 0, posY: 0})

  const moveCaja = (event) => {
    console.log(event.code)
    dispatch(event.code)
  }

  useEffect(() => {
    window.addEventListener('keyup', moveCaja)

    return () => {
      window.removeEventListener('keyup', moveCaja)
    }
  }, [])


  return (
    <div>
      <h2>Tema 10 - useReducer</h2>

      <div className="caja" style={{
        top: state.posY + 'px',
        left: state.posX + 'px'
      }}>

      </div>

    </div>
  )
}

export default Ej10UseReducer