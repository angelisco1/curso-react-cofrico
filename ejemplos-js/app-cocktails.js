const URL_API = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const getCocktailByName = async (name) => {
  const response = await fetch(`${URL_API}${name}`)
  const datos = await response.json()

  console.log(datos)
  return datos
}

getCocktailByName()

// document.querySelector('#searchBy')
const inputSearchBy = document.getElementById('searchBy')
console.log(inputSearchBy)

inputSearchBy.addEventListener('input', async (event) => {
  console.log(event)
  console.log(event.target)
  console.log(event.target.value)

  const filtro = event.target.value
  const cocktails = await getCocktailByName(filtro)
  console.log(cocktails)
})
