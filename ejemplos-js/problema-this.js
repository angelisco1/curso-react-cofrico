
const serie = {
  titulo: 'Vikings',
  temporadas: 4,
  numEpisodios: 80,
  episodiosVistos: 70,
  verEpisodio: function() {
    console.log('THIS ES: ', this)
    this.episodiosVistos += 1

    function b() {
      // console.log('Has llamado a b: this -> ', this)
      console.log(this.episodiosVistos)
    }
    // b()

    const c = () => {
      console.log('Has llamado a c: this -> ', this)
      console.log(this.episodiosVistos)
    }
    c()
  },
  verEpisodio2: () => {
    this.episodiosVistos += 1
  }
}

console.log(serie)
serie.verEpisodio()
serie.verEpisodio()
serie.verEpisodio()
console.log(serie)

serie.verEpisodio2()
console.log(serie)


function a() {
  console.log('THIS ES: ', this)
  console.log('AAA')
}

// a()