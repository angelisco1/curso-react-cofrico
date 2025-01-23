const TRADUCCIONES = {
  es: {
    bienvenido: 'Bienvenido'
  },
  en: {
    bienvenido: 'Welcome'
  },
  it: {
    bienvenido: 'Benvenuti'
  },
}

const traducir = (texto, lang) => {
  return TRADUCCIONES[lang][texto]
}

export default {
  traducir,
}