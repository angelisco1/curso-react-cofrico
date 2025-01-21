import React from 'react'

// class Ej03Eventos extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       valor: 1
//     }
//     // this.despedida = this.despedida.bind({state: {valor: 'asdjalksjdklajsdlkas'}})
//     this.despedida = this.despedida.bind(this)
//   }

//   despedida(event) {
//     console.log(event)
// this.setState({
//   valor: 8
// })
//     alert('Adios - ' + this.state.valor)
//   }

//   render() {
//     return (
//       <div>
//         <h2>Tema 3 - Eventos</h2>

//         <button type="button" onClick={() => alert('Hola')}>Saluda</button>
//         <button type="button" onClick={this.despedida}>Despedida</button>

//         <input type="text" onInput={(event) => console.log(event.target.value)} />
//         <input type="text" onInput={() => console.log(this.state.valor)} />
//       </div>
//     )
//   }
// }



const Ej03Eventos = () => {
  const despedida = (event) => {
    console.log(event)
    alert('Adios')
  }

  return (
    <div>
      <h2>Tema 3 - Eventos</h2>

      <button type="button" onClick={() => alert('Hola')}>Saluda</button>
      <button type="button" onClick={despedida}>Despedida</button>

      <input type="text" onInput={(event) => console.log(event.target.value)} />
      {/* <input type="text" onInput={() => console.log(this)} /> */}
    </div>
  )
}

export default Ej03Eventos