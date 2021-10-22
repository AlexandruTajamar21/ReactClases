import React, { Component } from 'react'

export default class TablaSelect extends Component {

    optionsSeleccionado = React.createRef();

    state = {
        filas:[]
    }

    mostrarTabla = (e) =>{
        e.preventDefault();

        var numero = parseInt(this.optionsSeleccionado.current.value);
        var datos = [];

        for (let i = 1; i <= 10; i++) {
            var multiplicacion = numero*i;

            datos.push(<tr key={i}>
                <td>{numero + " + " + i}</td>
                <td>{multiplicacion}</td>
            </tr>);
        }
        this.setState({filas:datos});
    }
    
    cargaOpciones =() =>{
        var opciones = [];
        for (let i = 0; i < 5; i++) {
            var aleatorio = Math.round((Math.random() * 50) + 1)
            opciones.push(<option key={i} value={aleatorio}>{aleatorio}</option>)
        }
        return opciones;
    }

    render() {
        return (
            <div>
                <h1> Tabla de multiplicar Select</h1>
                <form onSubmit={this.cargaOpciones}>
                    <label>
                        Seleccione un numero
                    </label>
                    <select ref={this.optionsSeleccionado}>
                        {this.cargaOpciones()}
                    </select>
                    <button onClick={this.mostrarTabla}>Mostrar</button>
                </form>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filas}
                    </tbody>
                </table>
            </div>
        )
    }
}
