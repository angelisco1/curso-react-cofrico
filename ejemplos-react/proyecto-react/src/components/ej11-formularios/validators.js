const Validators = {
  hasNums: (value) => {
    if (/\d+/.test(value)) {
      return null
    }

    return `Este campo tiene que tener al menos un número`
  },
  minLength: (value, min = 8) => {
    if (value.length >= min) {
      return null
    }

    return `Este campo necesita ${min} caracteres, pero actualmente tiene ${value.length}`
  },
  hasAt: (value) => {
    if (/@/.test(value)) {
      return null
    }

    return `Este campo tiene que tener un @`
  }
}

export default Validators