import react from 'react'
import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    
    selectMultiple = React.createRef();
    state = {
        seleccionados : ""
    }

    dibujaOpciones = () =>{
        var options = [];
        for (var i = 0; i < 10; i++) {
            
            options.push(
                <option key={i} value={"Elemento " + i}>{"Elementos " + i}</option>
            );
            
        }
        return options;
    }

    mostrarSeleccionados = (e) =>{
        e.preventDefault();
        var options = this.selectMultiple.current.options;
        var datos = "";
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                datos += options[i].value + " , "
            }
        }
        this.setState({
            seleccionados:datos
        });
    }
    
    render() {
        return (
            <div>
                <h1> Seleccion Multiples eventos</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label> Seleccione elementos: </label>
                    <select size="10" multiple ref={this.selectMultiple}>
                        {this.dibujaOpciones()}
                    </select>
                    <button>Mostrar Seleccionados</button>
                </form>
                <h1 style={{color:"blue"}}>
                    {this.state.seleccionados}
                </h1>
            </div>
        )
    }
}
