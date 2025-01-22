import React, { useEffect, useState } from 'react'

const URL_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const getCocktailsByName = async (name) => {
  const response = await fetch(`${URL_API}${name}`)
  const datos = await response.json()

  // console.log(datos)
  if (!Array.isArray(datos.drinks)) {
    return []
  }

  return datos.drinks
}

const ListaCocktailsConFiltro = () => {
  const [cocktails, setCocktails] = useState([])
  const [filtro, setFiltro] = useState('margarita')
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

  useEffect(() => {
    // const cocktails = await getCocktailsByName('margarita')
    getCocktailsByName(filtro)
      .then((cocktails) => {
        console.log('Pasa por el efecto', cocktails)
        setCocktails(cocktails)
      })
  }, [filtro])

  useEffect(() => {
    document.title = `Estás buscando por: ${filtro}`
  }, [filtro])

  const listaCocktailsFiltrados = cocktails.map((cocktail) => {
    return <li onClick={() => setCocktailSeleccionado(cocktail)} key={cocktail.idDrink}>{cocktail.strDrink}</li>
  })

  return (
    <div>
      <div>
        <label htmlFor="filtro">Buscar por:</label>
        <input type="text" id="filtro" value={filtro} onInput={(event) => setFiltro(event.target.value)} />
      </div>

      {
        listaCocktailsFiltrados.length > 0 ? (
          <ul>
            {listaCocktailsFiltrados}
          </ul>
        ) : (
          <p>No se han encontrado cocktails con el filtro actual :(</p>
        )
      }

      <hr />

      {
        cocktailSeleccionado ? (
          <div>
            <h3>Has seleccionado el cocktail: {cocktailSeleccionado.strDrink}</h3>
            <img width={100} src={cocktailSeleccionado.strDrinkThumb} alt="" />
            <p>{cocktailSeleccionado.strInstructions}</p>
          </div>
        ) : (
          <p>Selecciona un cocktail para ver los detalles.</p>
        )
      }

    </div>
  )
}

export default ListaCocktailsConFiltro