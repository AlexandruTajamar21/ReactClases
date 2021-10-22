import React, { Component } from 'react'

export default class FormularioSimple extends Component {
    
    cajanombre = React.createRef();
    cajaedad = React.createRef();

    state = {
        user: {}
    }

    recibirDatos = (e) =>{
        e.preventDefault();
        console.log(this.cajanombre.current.value);
        this.setState({
            user: {
                nombre: this.cajanombre.current.value
                ,edad: this.cajaedad.current.value
            }
        });
    }

    render() {
        return (
            <div>
                <h1> Ejemplo simple formulario</h1>
                {this.state.user && 
                    <div>
                        <h2 style={{color:"blue"}}>
                            Usuario: {this.state.user.nombre} {""}  
                            Edad: {this.state.user.edad}
                        </h2>
                    </div>
                }
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre:</label>
                    <input type="text" ref={this.cajanombre} onChange={this.recibirDatos}></input><br/>
                    <label>Edad:</label>
                    <input type="number" ref={this.cajaedad} onChange={this.recibirDatos}></input><br/>
                    <button>Enviar Datos</button>
                </form>
            </div>
        )
    }
}
