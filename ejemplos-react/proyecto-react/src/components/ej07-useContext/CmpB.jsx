import React, { useContext } from 'react'
import Traductor from './Traductor'
import { LangContext } from './Ej07UseContext'


const CmpB = () => {
  const {lang, user} = useContext(LangContext)

  return (
    <div>
      <h4>Cmp B</h4>

      <p>{Traductor.traducir('bienvenido', lang)} {user}</p>
    </div>
  )
}

export default CmpB