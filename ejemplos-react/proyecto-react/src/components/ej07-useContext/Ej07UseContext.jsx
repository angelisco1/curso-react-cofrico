import React, { useState } from 'react'
import CmpA from './CmpA'

export const LangContext = React.createContext({lang: 'it', user: 'Mundo', theme: 'dark'})

const Ej07UseContext = () => {
  const [selectedLang, setSelectedLang] = useState('es')

  return (
    <div>
      <h2>Tema 7 - useContext (Context API)</h2>

      <div>
        <select name="language" id="language" value={selectedLang} onChange={(event) => setSelectedLang(event.target.value)}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      <LangContext.Provider value={{lang: selectedLang, user: 'Charly', theme: 'dark'}}>
        <CmpA />
      </LangContext.Provider>

      <CmpA />
    </div>
  )
}

export default Ej07UseContext