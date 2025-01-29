import { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

const withLoading = (WrappedCmp) => {
  const [loading, setLoading] = useState(true)
  const [datos, setDatos] = useState([])

  useEffect(() => {
    setLoading(false)
  }, [datos])

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      const datos = ['Usuario 1', 'Usuario 2']
      setDatos(datos)
    }, 3000)
  }, [])

  // ESTE ES EL COMPONENTE NUEVO QUE SE CREA A PARTIR DEL QUE SE RECIBE COMO PARAMETRO DEL withLoading
  return (props) => {

    return (
      <div>
        {/* <PacmanLoader color="#c3c3c3" loading={loading} />
        {!loading && <WrappedCmp data={datos} />} */}

        {
          loading ? (
            <PacmanLoader color="#c3c3c3" />
          ) : (
            // <WrappedCmp data={datos} recursos={recursos} />
            <WrappedCmp data={datos} {...props} />
          )
        }
      </div>
    )
  }
}

export default withLoading