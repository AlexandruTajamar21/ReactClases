import React, { Component } from 'react'

export default class Collatz extends Component {

    cajaNumero = React.createRef();

    state = {
        conjuntoListas: []
    }

    modificaNumero = (e) =>{
        e.preventDefault();

        var numero = parseInt(this.cajaNumero.current.value);
        var datos = [];
        datos.push(numero);
        while(numero != 1)
        {
            if (numero%2 == 0) {
                numero = numero/2; 
            }
            else
            {
                numero = (numero*3) + 1;
            }
            datos.push(numero);
        }
        this.setState({conjuntoListas:numero});
        console.log(this.state.conjuntoListas);
    }

    render() {
        return (
            <div>
                <h1>Ejercicio Prueba Teoria de Collatz</h1> 
                <form onSubmit={this.modificaNumero}>
                    <label> Introduce un numero: </label>
                    <button>Empezar</button>
                    <input type="number" ref={this.cajaNumero}></input>
                </form>
                <hr/>
                <ul>
                    {this.state.conjuntoListas.map((lista,index) =>{
                        return(<li key={index}>{lista}</li>)
                    })}
                </ul>
            </div>
        )
    }       
}
