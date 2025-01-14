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