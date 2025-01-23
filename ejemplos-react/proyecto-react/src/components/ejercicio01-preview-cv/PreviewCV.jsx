import React, { useMemo } from 'react'

const getNombreCompleto = (nombre, apellido) => {
  console.log('Paso por la función')
  return `${nombre} ${apellido}`
}

const PreviewCV = ({ nombre, apellido, trabajo }) => {

  // const nombreCompleto = `${nombre} ${apellido}`

  // useEffect(() => {
  //   const nombreCompleto = `${nombre} ${apellido}`
  //   setNombreCompleto(`${nombre} ${apellido}`)
  // }, [nombre, apellido])

  const nombreCompleto = useMemo(() => {
    console.log('Paso por el useMemo')
    return `${nombre} ${apellido}`
  }, [nombre, apellido])

  // const nombreCompleto = getNombreCompleto(nombre, apellido)

  return (
    <div>
      {/* <h3>CV de {nombre} {apellido}</h3> */}
      <h3>CV de {nombreCompleto}</h3>
      <p>Trabajo actual: {trabajo}</p>
    </div>
  )
}

export default PreviewCV