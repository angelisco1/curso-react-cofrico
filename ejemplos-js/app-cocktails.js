const URL_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const getCocktailsByName = async (name) => {
  const response = await fetch(`${URL_API}${name}`)
  const datos = await response.json()

  // console.log(datos)
  return datos.drinks
}

getCocktailsByName()

// document.querySelector('#searchBy')
const inputSearchBy = document.getElementById('searchBy')
console.log(inputSearchBy)

inputSearchBy.addEventListener('input', async (event) => {
  // console.log(event)
  // console.log(event.target)
  // console.log(event.target.value)

  const filtro = event.target.value
  const cocktails = await getCocktailsByName(filtro)
  // console.log(cocktails)

  const listItems = cocktails.map((cocktail) => {
    return `<li>${cocktail.strDrink}</li>`
  })
  // console.log(listItems)

  const strListItems = listItems.join('')
  // console.log(strListItems)

  const ulElement = document.getElementById('lista-cocktails')
  ulElement.innerHTML = strListItems
  // console.log(ulElement)

  // const li = document.createElement('li')
  // li.appendChild(document.createTextNode('Hola'))
  // ulElement.appendChild(li)
})

document.getElementById('caja-fuera').addEventListener('click', (event) => {
  console.log('Has pulsado en la de fuera')
})

document.getElementById('caja-dentro').addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('Has pulsado en la de dentro')
})

document.querySelector('a').addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Ibas a navegar a google, pero ya no.')
})
