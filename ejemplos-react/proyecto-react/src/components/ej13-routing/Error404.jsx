import React from 'react'
import { Link } from 'react-router'

const Error404 = () => {
  return (
    <div>
      <h2>Error 404: Page not found!</h2>
      <Link to="/inicio">Ve a inicio</Link>
    </div>
  )
}

export default Error404