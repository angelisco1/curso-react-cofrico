import { useEffect, useState } from "react"
import Validators from "./validators"

const useInputField = (initialValue, validaciones = {}) => {
  const [value, setValue] = useState(initialValue)
  const [errores, setErrores] = useState([])

  useEffect(() => {
    const errores = []

    Object.entries(validaciones).forEach((entry) => {
      const [validacionNombre, validationParametro] = entry
      const error = Validators[validacionNombre](value, validationParametro)
      if (error) {
        errores.push(error)
      }
    })

    setErrores(errores)
  }, [value])


  return [
    value,
    setValue,
    errores,
    // setErrores,
  ]
}

export default useInputField