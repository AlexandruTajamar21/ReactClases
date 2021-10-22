import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    numero = React.createRef();
    
    state = {
        tabla: []
    }

    creaTabla = (e) =>{
        e.preventDefault();

        var numero = parseInt(this.numero.current.value);
        var numeroActual = [];
        var numeroAux;
        for (let i = 1; i <= 10; i++) {
            numeroAux = numero*i;
            numeroActual.push(numeroAux);
        }
        this.setState({tabla:numeroActual});
        console.log(this.state.tabla);
    }

    render() {
        return (
            <div>
                <h1>Ejercicio Tabla Multiplicar</h1>
                <form onSubmit={this.creaTabla}>
                    <label> Introduce un numero: </label>
                    <button>Empezar</button>
                    <input type="number" ref={this.numero}></input>
                </form>
                <ul>
                    {this.state.tabla.map((actual,index) => {
                        return(<li key={index}> {actual}</li>)
                    })}
                </ul>
            </div>
        )
    }
}
