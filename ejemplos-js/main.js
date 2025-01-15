var nombre = 'Ángel'
let nombre1 = 'Charly'
const nombre2 = 'Mike'

nombre1 = 'Sandra'
// nombre2 = 'Sandra'

let a = 1
var b = 1
if (true) {
  let a = 2
  var b = 2
  console.log(a) // 2
  console.log(b) // 2
}
console.log(a) // 1
console.log(b) // 2

// Operadores
// ==, !=
// ===, !==

if (1 == '1') {
  console.log('Es cierto')
} else {
  console.log('Es falso')
}

if (1 === '1') {
  console.log('Es cierto')
} else {
  console.log('Es falso')
}

if ('') {
  console.log('Es cierto')
} else {
  console.log('Es falso')
}

if (' ') {
  console.log('Es cierto')
} else {
  console.log('Es falso')
}

if ({}) {
  console.log('Es cierto')
} else {
  console.log('Es falso')
}

// c = 'SI' if nombre === 'Ángel' else 'NO'
const c = nombre === 'Ángel' ? 'SI' : 'NO'


function saludar(nombre = 'Mundo') {
  // alert('Hola ' + nombre)
  alert(`Hola ${nombre}`)
}

// Funciones flecha / Arrow functions = >
const saludar2 = (nombre = 'Mundo') => {
  alert(`Hola ${nombre}`)
}

// Con 1 param los paréntesis son opcionales
const saludar3 = nombre => {
  alert(`Hola ${nombre}`)
}

const saludar4 = (nombre) => {
  alert(`Hola ${nombre}`)
}

// Con más de 1 param los paréntesis son obligatorios
const saludar5 = (nombre, apellidos) => {
  alert(`Hola ${nombre} ${apellidos}`)
}

// Con 0 params los paréntesis son obligatorios
const saludar6 = () => {
  alert(`Hola Mundo`)
}

// Las llaves opcionales dependiendo del caso
const saludar7 = () => alert(`Hola Mundo`)

const suma = (n1, n2) => n1 + n2
console.log(suma(1, 2))

const suma2 = (n1, n2) => {
  return n1 + n2
}
console.log(suma2(1, 2))


// Objetos
const cursoReact = {
  id: 1,
  titulo: 'Curso de React',
  descripcion: 'lorem ipsum...',
  profesor: {
    nombre: 'Fran',
    foto: 'url de la foto'
  },
  duracion: 40,
  numParticipantes: 5
}

// cursoReact['titulo']
// cursoReact.titulo

const key = 'titulo'
console.log(cursoReact.key)
console.log(cursoReact[key])
console.log(cursoReact.duracion)

const cursoVue = {
  id: 2,
  titulo: 'Curso de Vue',
  descripcion: 'lorem ipsum...',
  profesor: {
    nombre: 'Ángel',
    foto: 'url de la foto'
  },
  duracion: 20,
  numParticipantes: 10
}

const cursos = [
  cursoReact,
]
cursos.push(cursoVue)
console.log(cursos)

// Filtrar un array
const fnFiltro = (curso) => {
  return curso.duracion > 25
}

// const cursosDeMasDe25Horas = cursos.filter(fnFiltro)
const cursosDeMasDe25Horas = cursos.filter((curso) => curso.duracion > 25)
console.log(cursosDeMasDe25Horas)

const titulosCursosFiltrados = cursosDeMasDe25Horas.map((curso, pos) => `${pos + 1} ${curso.titulo}`)
console.log(titulosCursosFiltrados)

const cursosConFecha = cursos.map((curso) => {
  curso.fecha = '10/10/2025'
  return curso
})
console.log(cursosConFecha)

const cursoDeAngel = cursos.find((curso) => curso.profesor.nombre === 'Ángel')
console.log(cursoDeAngel)

// Hay mas métodos: reduce, every, some


class Curso {
  #propiedad = 1
  constructor(titulo, descripcion, duracion) {
    this.#propiedad = 4
    this.titulo = titulo
    this.descripcion = descripcion
    this.duracion = duracion
    this.numAsistentes = 0
  }

  get prop() {
    return this.#propiedad
  }

  set prop(nuevaProp) {
    this.#propiedad = nuevaProp
  }

  apuntarAsistente() {
    this.numAsistentes += 1
  }
}

const cursoAngular = new Curso('Curso de Angular', 'lorem ipsum ...', 30)
console.log(cursoAngular)
cursoAngular.apuntarAsistente()
cursoAngular.apuntarAsistente()
cursoAngular.apuntarAsistente()
console.log(cursoAngular)

cursoAngular.prop = 10
console.log(cursoAngular.prop)


// Callbacks
const fs = require('fs')

// const contenido = fs.readFile('files/1.txt')
// console.log(contenido)
// fs.readFile('files/1.txt', (err, contenido) => {
//   console.log(contenido.toString())
// })

// fs.readFile('files/2.txt', (err, contenido) => {
//   console.log(contenido.toString())
// })

// fs.readFile('files/3.txt', (err, contenido) => {
//   console.log(contenido.toString())
// })

// fs.readFile('files/1.txt', (err, contenido) => {
//   console.log(contenido.toString())

//   fs.readFile('files/2.txt', (err, contenido) => {
//     console.log(contenido.toString())

//     fs.readFile('files/3.txt', (err, contenido) => {
//       console.log(contenido.toString())
//     })
//   })

// })

// Promesas
const fsProm = require('fs/promises')

// fsProm.readFile('files/1.txt')
//   .then((contenido) => {
//     console.log(contenido.toString())

//     return fsProm.readFile('files/2.txt')
//   })
//   .then((contenido2) => {
//     console.log(contenido2.toString())

//     return fsProm.readFile('files/3.txt')
//   })
//   .then((contenido3) => {
//     console.log(contenido3.toString())
//   })
//   .catch((err) => {

//   })

// fsProm.readFile('files/2.txt')
//   .then((contenido) => {
//     console.log(contenido.toString())
//   })
//   .catch((err) => {

//   })

// fsProm.readFile('files/3.txt')
//   .then((contenido) => {
//     console.log(contenido.toString())
//   })
//   .catch((err) => {

//   })

// Async/Await
const leerArchivos = async () => {
  try {
    const contenido1 = await fsProm.readFile('files/1.txt')
    console.log(contenido1.toString())
  } catch (err) {

  }

  const contenido2 = await fsProm.readFile('files/2.txt')
  console.log(contenido2.toString())

  const contenido3 = await fsProm.readFile('files/3.txt')
  console.log(contenido3.toString())
}

leerArchivos()