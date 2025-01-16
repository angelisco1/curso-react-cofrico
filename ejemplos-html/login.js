// Ejercicio

// Al darle al botón Login, extraer los datos del login.
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Has pulsado')

  const inputNombre = document.getElementById('username')
  const inputPw = document.getElementById('password')

  // console.log(inputNombre.value, inputPw.value)
  const nombre = inputNombre.value
  const password = inputPw.value

  // Comprobar que esos datos son correctos (charly, 1234)
  if (nombre === 'charly' && password === '1234') {
    // Si los datos son correctos, nos vamos a la página de index.html
    window.location.href = 'index.html'
  } else {
    // Si los datos no son correctos, mostramos debajo del formulario un mensaje de error
    const listaDivs = document.getElementsByClassName('errores')

    // const error = `<p style="color: red;">Las credenciales no son correctas.</p>`
    // listaDivs[0].innerHTML = error

    const p = document.createElement('p')
    p.appendChild(document.createTextNode('Las credenciales no son correctas.'))
    p.setAttribute('style', 'color: red;')
    listaDivs[0].appendChild(p)
  }
})
